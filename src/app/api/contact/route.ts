import { NextRequest, NextResponse } from 'next/server';
import { Telegraf } from 'telegraf';

const BOT_TOKEN = process.env.BOT_TOKEN;
const ADMIN_CHAT_ID = process.env.ADMIN_CHAT_ID;

if (!BOT_TOKEN) throw new Error("BOT_TOKEN is not defined");
if (!ADMIN_CHAT_ID) throw new Error("ADMIN_CHAT_ID is not defined");

const bot = new Telegraf(BOT_TOKEN);

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const msg = `
📩 *New Contact Form Message*
━━━━━━━━━━━━━━━━━━
👤 *Name:* ${data.name}
📧 *Email:* ${data.email}

💬 *Message:*
${data.message}
    `;

    await bot.telegram.sendMessage(ADMIN_CHAT_ID, msg, { parse_mode: 'Markdown' });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('❌ API /contact error:', err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

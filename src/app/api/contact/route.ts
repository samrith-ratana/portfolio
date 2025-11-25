import { NextRequest, NextResponse } from 'next/server';
import { Telegraf } from 'telegraf';

// -----------------------------
// Load env variables safely
// -----------------------------
const BOT_TOKEN = process.env.BOT_TOKEN;
const ADMIN_CHAT_ID = process.env.ADMIN_CHAT_ID;

if (!BOT_TOKEN) throw new Error('BOT_TOKEN environment variable is not defined');
if (!ADMIN_CHAT_ID) throw new Error('ADMIN_CHAT_ID environment variable is not defined');

// Initialize bot
const bot = new Telegraf(BOT_TOKEN);

// -----------------------------
// POST handler
// -----------------------------
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

    // Send message to Telegram
    await bot.telegram.sendMessage(ADMIN_CHAT_ID, msg, { parse_mode: 'Markdown' });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('❌ API /contact error:', err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

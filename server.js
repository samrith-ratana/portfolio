import dotenv from 'dotenv';
dotenv.config();

import next from 'next'
import http from 'http'
import url from 'url'
import { Telegraf } from 'telegraf'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// --------------------------
//   TELEGRAM BOT SETUP
// --------------------------
const bot = new Telegraf(process.env.BOT_TOKEN)

// Basic bot handlers
bot.start((ctx) => ctx.reply('Welcome! Your bot is running 🚀'))
bot.hears('hi', (ctx) => ctx.reply('Hello from Next.js + Telegraf!'))
bot.on('text', (ctx) => ctx.reply(`You said: ${ctx.message.text}`))

// Launch bot (polling)
bot.launch()
console.log('🤖 Telegram bot is running...')

// Admin target chat ID
const ADMIN_CHAT_ID = process.env.ADMIN_CHAT_ID
// Example in .env: ADMIN_CHAT_ID=123456789

// --------------------------
//     NEXT + CUSTOM API
// --------------------------
app.prepare().then(() => {
  http.createServer(async (req, res) => {
    const parsedUrl = url.parse(req.url, true)
    const { pathname } = parsedUrl

    // ----------------------
    //   /api/contact
    // ----------------------
    if (pathname === '/api/contact' && req.method === 'POST') {
      let body = ''

      // Receive JSON body
      req.on('data', chunk => {
        body += chunk.toString()
      })

      req.on('end', async () => {
        try {
          const data = JSON.parse(body)

          // Message format
          const msg = `
📩 *New Contact Form Message*
━━━━━━━━━━━━━━━━━━
👤 *Name:* ${data.name}
📧 *Email:* ${data.email}

💬 *Message:*
${data.message}
          `

          // Send to Telegram admin
          await bot.telegram.sendMessage(
            ADMIN_CHAT_ID,
            msg,
            { parse_mode: "Markdown" }
          )

          res.writeHead(200, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ success: true }))
        } catch (err) {
          console.error('❌ API /api/contact error:', err)
          res.writeHead(500, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ success: false }))
        }
      })

      return
    }

    // Default Next.js handler
    handle(req, res, parsedUrl)
  }).listen(3000, () => {
    console.log('> Ready on http://localhost:3000')
  })
})

// Graceful exit
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

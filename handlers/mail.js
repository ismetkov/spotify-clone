import nodemailer from 'nodemailer'
import { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS } from 'babel-dotenv'

export const mailTransport = nodemailer.createTransport({
  host: MAIL_HOST,
  port: MAIL_PORT,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASS
  }
})

export const mailTemplate = text => `
  <div style="
    padding: 20px;
    border: 1px solid pink;
    font-family: sans-serif;
    line-height: 2;
  ">
    <h2>Hi there,</h2>
    <p>${text}</p>
  </div>
`

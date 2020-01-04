const nodemailer = require('nodemailer')

// Basic outline for now. Once website is live, we need to create OAuth client ID
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    type: 'OAuth2',
    user: '',
    refreshToken: '',
    accessToken: '',
    clientId: '',
    clientSecret: ''
  }
})

const send = ({ name, email, message }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`
  const mail = {
    from,
    to: '',
    subject: `New message from ${from}`,
    message,
    replyTo: from
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(mail, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}

module.exports = send

/* eslint-disable @typescript-eslint/no-explicit-any */
import nodemailer from 'nodemailer'
import config from '..'

type IMessage = {
  traveler_id: string
  password: string
  role: string
  name: string
  email: string
}

export const travelerUserInfoSendByEmail = (message: IMessage) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: config.nodemailer_email as string,
      pass: config.nodemailer_password as string,
    },
  })

  const messageBody = `<div>
                    <div
                    style="
                      width: 40%;
                      margin: 0 auto;
                      background-color: #EAE7E6;
                      padding: 48px;
                    "
                  >
                    <div style="background-color: white; padding: 20px; border-radius: 24px">
                      <div style="display: flex; align-items: center">
                        <div>
                          <img src="https://i.ibb.co/cXCWRsG/bus.png" alt="bus" />
                        </div>
                        <div style="margin-left: 16px">
                          <h1 style="margin-bottom: 0px; font-size: 28px;">ETMS</h1>
                          <h3 style="margin-top: 0;">Book with Ease, Travel with Speed</h3>
                        </div>
                      </div>
                      <hr />
                      <h2>Hello ${message.name},</h2>
              
                      <p>
                        Cheers to joining ETMS - your go-to spot for hassle-free bus
                        travel! 🚌 We're pumped to be your travel companion and make your bus
                        journeys a breeze.
                      </p>
              
                      <h4 style="margin-bottom: 8px; font-weight: bold;">Your Login Details:</h4>
              
                      <p style="margin-top: 0; margin-right: 0; margin-bottom: 2px; margin-left: 16px;">
                        Name: <span style="font-weight: 600;">${message.name}</span>
                      </p>
                      <p style="margin-top: 0; margin-right: 0; margin-bottom: 2px; margin-left: 16px;">
                        Role: <span style="font-weight: 600;">${message.role}</span>
                      </p>
                      <p style="margin-top: 0; margin-right: 0; margin-bottom: 2px; margin-left: 16px;">
                        Email: <span style="font-weight: 600;">${message.email}</span>
                      </p>
                      <p style="margin-top: 0; margin-right: 0; margin-bottom: 2px; margin-left: 16px;">
                        Password: <span style="font-weight: 600;">${message.password}</span>
                      </p>
                      <p style="font-weight: 600; margin-bottom: 0px;">Safe Travels,</p>
                      <p style="margin-top: 0px">ETMS Team</p>
                    </div>
                  </div>
                    </div>
                    `

  const mailOption = {
    from: 'mdkzaman2025@gmail.com',
    to: message.email,
    subject: 'Welcome to ETMS - Your Bus Adventure Starts Now!',
    // subject: 'Account credential of ETMS',
    html: messageBody,
  }

  transporter.sendMail(
    mailOption,
    async (error: any, info: { response: string }) => {
      if (error) {
        console.log(error)
      } else {
        console.log('Email sent to the traveler: ' + info.response)
      }
    }
  )
}

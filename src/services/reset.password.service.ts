import nodemailer from "nodemailer";
import { prismaClient } from "../utils/prisma.client";
import bcrypt from "bcrypt";
import Email from "email-templates";
export const resetPasswordService = {
    sendResetUrl: async (email: string) => {
        const verify_code = Math.floor(Math.random() * (9999 - 1000) + 1000);
        console.log(verify_code);
        const resHtml = `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
        
            <style>
              body {
                select:none;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              }
        
              .center {
                padding: 70px 0;
                position: relative;
                width: 100%;
              }
              input {
                width: 100%;
                padding: 50px;
                width: 500px;
                font-size: 40px;
                text-align: center;
                border: 3px solid #f05e22;
                border-radius: 20px;
                background-color: #f2f2f2;
                font-weight: bold;
              }
        
              p {
                text-align: center;
                font-size: 20px;
              }
            </style>
          </head>
        
          <body>
            <div class="">
              <div class="center">
                <p dir="rtl">کد تایید شما:</p>
                <input type="text" readonly value="{{verify_code}}" />
              </div>
            </div>
          </body>
        </html>`;
        const transporter = nodemailer.createTransport({
            host: "mail.hixdm.com",
            port: 465,
            secure: true,
            subject:"بازیابی رمز عبور",
            auth: {
                user: "help@hixdm.com",
                pass: "tJdKgVBKjrwr",
            },
        });

        const emailTemplate = new Email({
          // message:{subject:"hey",text:verify_code,}
            views: { options: { extension: "pug" } },
            transport: transporter,
        });
        // emailTemplate.send({ locals: { verify_code }, template: '../../email.template.html' });
        const mail = await transporter.sendMail({
            from: "Hix Support help@hixdm.com",
            to: email,
            subject: "کد بازیابی",
            html: `<!DOCTYPE html>
            <html lang="en">
            
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
            
                <style>
                    body {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
            
                    .center {
                        padding: 70px 0;
                        position: relative;
                        width: 100%;
                    }
            
                    input {
                        width: 100%;
                        padding: 50px;
                        width: 500px;
                        font-size: 40px;
                        text-align: center;
                        border: 3px solid #f05e22;
                        border-radius: 20px;
                        background-color: #f2f2f2;
                        font-weight: bold;
                    }
            
                    p {
                        text-align: center;
                        font-size: 20px;
                    }
                </style>
            </head>
            
            <body>
                <div class="">
                    <div class="center">
                        <p dir="rtl">کد تایید شما:</p>
                        <input type="text" readonly value="${verify_code}" />
                    </div>
                </div>
            </body>
            
            </html>`,
        });
        // console.log(JSON.stringify(mail));
        return await prismaClient().user.update({
            where: {
                email,
            },
            data: {
                verify_code,
                is_reseting: true,
            },
        });
    },
    resetPassword: async (
        verify_code: number,
        email: string,
        password: string
    ) => {
        const hashedPwd = bcrypt.hashSync(password, 10);
        return await prismaClient().user.update({
            where: {
                email,
                verify_code,
            },
            data: {
                password: hashedPwd,
                verify_code: null,
                is_reseting: false,
            },
        });
    },
};

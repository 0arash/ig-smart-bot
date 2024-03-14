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
            subject: "بازیابی رمز عبور",
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
                  @font-face {
                    font-family: vazir;
                    src: url("/src/font/vazir.ttf");
                  }
            
                  body {
                    font-family: vazir;
                  }
                  body {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 100vh;
                  }
            
                  .center {
                    padding: 35px;
                    border: 3px solid #3e246b;
                    border-radius: 20px;
                  }
            
                  .logo {
                    display: flex;
                    justify-content: end;
                    margin-top: -87px;
                    margin-right: 50px;
                  }
            
                  .image {
                    background-color: white;
                    padding: 10px;
            
                    width: 100px;
                    height: 60px;
                  }
            
                  .div1 {
                    padding-top: 45px;
                  }
            
                  .div2 {
                    border-top: 2px solid #f05e22;
                    display: flex;
                    flex-direction: row;
                    gap: 50px;
                    padding-top: 30px;
                  }
            
                  .div3 {
                    width: 100%;
                  }
            
                  .div4 {
                    margin-top: 13px;
                  }
            
                  input {
                    width: 50%;
                    padding-inline: 30px;
                    padding: 1%;
                    font-size: 40px;
                    text-align: center;
                    border: 3px solid #f05e22;
                    border-radius: 20px;
                    background-color: #f2f2f2;
                    font-weight: 400;
                    display: block;
                    margin-right: auto;
                    margin-left: auto;
                    
                  }
            
                  .para4 {
                    padding-top: 40px;
                  }
            
                  .text {
                    text-align: start;
                    margin-top: -10px;
                    font-size: 35px;
                    font-weight: bold;
                  }
            
                  .font {
                    font-size: 20px;
                    color: black;
                    font-weight: bold;
                  }
            
                  .line {
                    text-decoration: none;
                  }
            
                  .hix {
                    margin-top: 20px;
                    text-align: end;
                    width: 100%;
                  }
                </style>
              </head>
            
              <body>
                <div class="center">
                  <div class="logo">
                    <div class="hix" dir="ltr">
                      <p
                        class="font"
                        dir="rtl"
                        style="background-color: white; width: 350px; text-align: center"
                      >
                        هیکس همیشه همراه، همواره پاسخگو
                      </p>
                    </div>
                    <img
                      class="image"
                      src="https://hixdm.com/wp-content/uploads/2024/02/cropped-Hix-512-70x42.png"
                      alt="npt"
                    />
                  </div>
                  <div class="div1">
                    <p class="text" dir="rtl">کد ارسالی شما:</p>
                  </div>
                  <div>
                    <p class="font" dir="rtl">سلام ${email}!</p>
                  </div>
                  <div>
                    <p class="font" dir="rtl">این کد تایید شماست:</p>
                  </div>
                  <div>
                    <input type="text" readonly value="${verify_code}" />
                  </div>
                  <div>
                    <div>
                      <p class="para4 font" dir="rtl">
                        لطفا از این کد برای بازیابی رمز عبور خود استفاده کنید. اگر درخواست
                        تغییر رمز عبور را نداده اید، این پیام را نادیده بگیرید.
                      </p>
                    </div>
                    <div>
                      <p class="font" dir="rtl">با تشکر!</p>
                    </div>
                  </div>
                  <div class="div2">
                    <div class="div4">
                      <a class="font line" href="https://hixdm.com">HixDM.com</a>
                    </div>
                    <div class="div3" dir="rtl">
                      <a href="https://t.me/hixdmcom">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 48 48"
                          width="48px"
                          height="48px"
                        >
                          <linearGradient
                            id="BiF7D16UlC0RZ_VqXJHnXa"
                            x1="9.858"
                            x2="38.142"
                            y1="9.858"
                            y2="38.142"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-color="#33bef0" />
                            <stop offset="1" stop-color="#0a85d9" />
                          </linearGradient>
                          <path
                            fill="url(#BiF7D16UlC0RZ_VqXJHnXa)"
                            d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
                          />
                          <path
                            d="M10.119,23.466c8.155-3.695,17.733-7.704,19.208-8.284c3.252-1.279,4.67,0.028,4.448,2.113 c-0.273,2.555-1.567,9.99-2.363,15.317c-0.466,3.117-2.154,4.072-4.059,2.863c-1.445-0.917-6.413-4.17-7.72-5.282 c-0.891-0.758-1.512-1.608-0.88-2.474c0.185-0.253,0.658-0.763,0.921-1.017c1.319-1.278,1.141-1.553-0.454-0.412 c-0.19,0.136-1.292,0.935-1.745,1.237c-1.11,0.74-2.131,0.78-3.862,0.192c-1.416-0.481-2.776-0.852-3.634-1.223 C8.794,25.983,8.34,24.272,10.119,23.466z"
                            opacity=".05"
                          />
                          <path
                            d="M10.836,23.591c7.572-3.385,16.884-7.264,18.246-7.813c3.264-1.318,4.465-0.536,4.114,2.011 c-0.326,2.358-1.483,9.654-2.294,14.545c-0.478,2.879-1.874,3.513-3.692,2.337c-1.139-0.734-5.723-3.754-6.835-4.633 c-0.86-0.679-1.751-1.463-0.71-2.598c0.348-0.379,2.27-2.234,3.707-3.614c0.833-0.801,0.536-1.196-0.469-0.508 c-1.843,1.263-4.858,3.262-5.396,3.625c-1.025,0.69-1.988,0.856-3.664,0.329c-1.321-0.416-2.597-0.819-3.262-1.078 C9.095,25.618,9.075,24.378,10.836,23.591z"
                            opacity=".07"
                          />
                          <path
                            fill="#fff"
                            d="M11.553,23.717c6.99-3.075,16.035-6.824,17.284-7.343c3.275-1.358,4.28-1.098,3.779,1.91 c-0.36,2.162-1.398,9.319-2.226,13.774c-0.491,2.642-1.593,2.955-3.325,1.812c-0.833-0.55-5.038-3.331-5.951-3.984 c-0.833-0.595-1.982-1.311-0.541-2.721c0.513-0.502,3.874-3.712,6.493-6.21c0.343-0.328-0.088-0.867-0.484-0.604 c-3.53,2.341-8.424,5.59-9.047,6.013c-0.941,0.639-1.845,0.932-3.467,0.466c-1.226-0.352-2.423-0.772-2.889-0.932 C9.384,25.282,9.81,24.484,11.553,23.717z"
                          />
                        </svg>
                      </a>
                      <a href="https://www.linkedin.com/company/hixdm/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 48 48"
                          width="48px"
                          height="48px"
                        >
                          <path
                            fill="#0288D1"
                            d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                          />
                          <path
                            fill="#FFF"
                            d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                          />
                        </svg>
                      </a>
            
                      <a href="https://www.instagram.com/hix.dm?igsh=Z3JiY2xrc29tNHVm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 48 48"
                          width="48px"
                          height="48px"
                        >
                          <radialGradient
                            id="yOrnnhliCrdS2gy~4tD8ma"
                            cx="19.38"
                            cy="42.035"
                            r="44.899"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-color="#fd5" />
                            <stop offset=".328" stop-color="#ff543f" />
                            <stop offset=".348" stop-color="#fc5245" />
                            <stop offset=".504" stop-color="#e64771" />
                            <stop offset=".643" stop-color="#d53e91" />
                            <stop offset=".761" stop-color="#cc39a4" />
                            <stop offset=".841" stop-color="#c837ab" />
                          </radialGradient>
                          <path
                            fill="url(#yOrnnhliCrdS2gy~4tD8ma)"
                            d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z"
                          />
                          <radialGradient
                            id="yOrnnhliCrdS2gy~4tD8mb"
                            cx="11.786"
                            cy="5.54"
                            r="29.813"
                            gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-color="#4168c9" />
                            <stop offset=".999" stop-color="#4168c9" stop-opacity="0" />
                          </radialGradient>
                          <path
                            fill="url(#yOrnnhliCrdS2gy~4tD8mb)"
                            d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z"
                          />
                          <path
                            fill="#fff"
                            d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5 s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                          />
                          <circle cx="31.5" cy="16.5" r="1.5" fill="#fff" />
                          <path
                            fill="#fff"
                            d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12 C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </body>
            </html>
            `,
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

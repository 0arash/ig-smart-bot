import nodemailer from "nodemailer";
import { prismaClient } from "../utils/prisma.client";
import { v4 } from "uuid";
import { Request } from "express";
import bcrypt from "bcrypt";
export const resetPasswordService = {
  sendResetUrl: async (email: string, req: Request) => {
    const urlToken = v4();
    const resetUrl = `${req.url}/${urlToken}`;
    console.log(resetUrl);

    const transporter = nodemailer.createTransport({
      host: "mail.hixdm.com",
      port: 465,
      secure: true,
      auth: {
        user: "help@hixdm.com",
        pass: "tJdKgVBKjrwr",
      },
    });
    console.log(email);
    
    const mail = await transporter.sendMail({
      from: "help@hixdm.com",
      to: email,
      subject: "بازیابی رمز عبور",
      text: "http://192.168.1.18:3000/api/reset",
    });
    console.log(JSON.stringify(mail));
    return await prismaClient().user.update({
      where: {
        email
      },
      data: {
        reset_url: resetUrl,
        is_reseting: true,
      },
    });
  },
  resetPassword: async (resetUrl: string, uid: number, password: string) => {
    const hashedPwd = bcrypt.hashSync(password, 10);
    return await prismaClient().user.update({
      where: {
        id: uid,
        reset_url: resetUrl,
        is_reseting: true,
      },
      data: {
        password: hashedPwd,
        reset_url: "",
        is_reseting: false,
      },
    });
  },
};

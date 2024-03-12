import nodemailer from "nodemailer";
import { prismaClient } from "../utils/prisma.client";
import bcrypt from "bcrypt";
export const resetPasswordService = {
    sendResetUrl: async (email: string) => {
        const verify_code = Math.floor(Math.random() * (9999 - 1000) + 1000);
        console.log(verify_code);

        const transporter = nodemailer.createTransport({
            host: "mail.hixdm.com",
            port: 465,
            secure: true,
            auth: {
                user: "help@hixdm.com",
                pass: "tJdKgVBKjrwr",
            },
        });

        const mail = await transporter.sendMail({
            from: "Hix Support help@hixdm.com",
            to: email,
            subject: "کد بازیابی",
            text: `کد بازیابی شما: ${verify_code}`,
        });
        console.log(JSON.stringify(mail));
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

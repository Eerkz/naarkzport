import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer, { TransportOptions } from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "POST") {
      return res.status(422).json({ message: "Method not allowed." });
    }
    const { name, subject, message, email } = req.body;

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER,
      port: process.env.EMAIL_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_LOGIN!,
        pass: process.env.EMAIL_PASSWORD!,
      },
    } as TransportOptions);

    await transporter.sendMail({
      from: `"${name} from contact:naarkz.xyz" <${email}>`,
      to: "wcalemios@gmail.com",
      subject: subject,
      text: message,
    });

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json({
      message: "An error occured. Please try again later.",
    });
  }
}

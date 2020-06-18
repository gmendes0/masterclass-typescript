import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
  { name: "gabriel", email: "gabriel@prestige.com.br" },
]

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    // emailService.sendMail(
    //   { name: 'Gabriel Mendes', email: 'gabriel@prestige.com.br' },
    //   { subject: 'Bem vindo!', body: 'Seja bem-vindo' }
    // );

    emailService.sendMail({
      to: { name: 'Gabriel Mendes', email: 'gabriel@prestige.com.br' },
      message: { subject: 'Bem vindo!', body: 'Seja bem-vindo' }
    });

    return res.status(200).send();
  }
};

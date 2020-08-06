import db from '../database/connection';
// eslint-disable-next-line no-unused-vars
import { Request, Response } from '../interfaces/http';

class ClassesController {
  async store(req: Request, res: Response) {
    const {
      name, avatar, whatsapp, bio, subject, cost, schedule,
    } = req.body;

    const insertedUserIds = await db('users').insert({
      name,
      avatar,
      whatsapp,
      bio,
    });
    const user_id = insertedUserIds[0];

    await db('classes').insert({
      subject,
      cost,
      user_id,
      schedule,
    });

    return res.send(req.body);
  }
}

export default new ClassesController();

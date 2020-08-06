import db from '../database/connection';
import { Request, Response, ScheduleItem } from '../interfaces/index';
import hourInMinutes from '../utils/convertHourToMinutes';

class ClassesController {
  async store(req: Request, res: Response) {
    const {
      name, avatar, whatsapp, bio, subject, cost, schedule,
    } = req.body;
    const trx = await db.transaction();
    try {
      const insertedUserIds = await trx('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
      });
      const user_id = insertedUserIds[0];

      const insertedClasses = await trx('classes').insert({
        subject,
        cost,
        user_id,
      });

      const class_id = insertedClasses[0];

      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => ({
        class_id,
        week_day: scheduleItem.week_day,
        from: hourInMinutes(scheduleItem.from),
        to: hourInMinutes(scheduleItem.to),
      }));

      await trx('class_schedule').insert(classSchedule);

      await trx.commit();

      return res.status(201).send({ message: 'Class create whit success' });
    } catch (error) {
      await trx.rollback();
      return res.status(400).send({ message: 'Unexpected error while creating new classes' });
    }
  }
}

export default new ClassesController();

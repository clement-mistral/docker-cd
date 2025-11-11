import User from '#models/user';
import { createUserValidator } from '#validators/user';
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  async create({ inertia }: HttpContext) {
    return inertia.render('register')
  }

  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createUserValidator)

    await User.create(payload);

    return response.redirect().toRoute("session.index");
  }
}
import User from '#models/user';
import {  authenticateUserValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class SessionController {
  async index({ inertia }: HttpContext) {
    return inertia.render('login')
  }

  async store({ request, auth, response }: HttpContext) {
    const {username, password} = await request.validateUsing(authenticateUserValidator);

    const user = await User.verifyCredentials(username, password)

    await auth.use('web').login(user)
    
    return response.redirect().toRoute("home")
  }

  async delete({ auth, response }: HttpContext) {
    await auth.use('web').logout()

    return response.redirect().toRoute('session.index')
  }
}
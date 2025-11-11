/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
const HomeController = () => import("#controllers/home_controller")
const UsersController = () => import("#controllers/users_controller")
const SessionController = () => import("#controllers/session_controller")



// --- Guest routes ---
router.group(() => {
  // --- User creation routes ---
  router.group(() => {
    router.get('/', [UsersController, "create"]).as("user.create")
    router.post('/store', [UsersController, "store"]).as("user.store")
  }).prefix("/inscription")
  
  // --- User authentication routes ---
  router.group(() => {
    router.get('/', [SessionController, "index"]).as('session.index')
    router.post('/store', [SessionController, "store"]).as("session.store")
  }).prefix("/connexion")

  
}).use(middleware.guest())


// --- Authenticated routes ---
router.group(() => {
  router.get("/", [HomeController, "index"]).as("home")
  router.delete("/logout", [SessionController, "delete"]).as("session.delete")
}).use(middleware.auth())
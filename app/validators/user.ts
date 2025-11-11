import vine from '@vinejs/vine'


export const createUserSchema = vine.object({
  firstname: vine.string().trim().minLength(1).maxLength(80).regex(/^[a-zA-ZÀ-Ÿ- ]*$/),
  lastname: vine.string().trim().minLength(1).maxLength(80).regex(/^[a-zA-ZÀ-Ÿ- ]*$/),
  username: vine.string().trim().minLength(3).maxLength(161).regex(/^[a-zA-Z0-9](?!.*\.\.)[a-zA-Z0-9._-]{1,14}[a-zA-Z0-9]$/).isUnique({
    table: "users",
    column: "username"
  }),
  password: vine.string().trim().minLength(8).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,).confirmed()
})

export const createUserValidator = vine.compile(createUserSchema);

export const authenticateUserSchema = vine.object({
  username: vine.string(),
  password: vine.string().trim()
})

export const authenticateUserValidator = vine.compile(authenticateUserSchema);
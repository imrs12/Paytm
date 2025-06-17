const zod = require("zod")

const SignupBody = zod.object({
    username: zod.string(),
    password: zod.string().regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, { message: "Minimum eight characters, at least one letter and one number"}),// Minimum eight characters, at least one letter and one number needed for password else 
    firstname: zod.string(),
    lastname: zod.string()
})

module.exports = {
    SignupBody
}

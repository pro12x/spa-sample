import { login } from "./login.js"
import { register } from "./register.js"

export const load = async () => {
    const registerForm = document.getElementById('register-form')
    const loginForm = document.getElementById('login-form')

    console.log(registerForm, loginForm)

    if (registerForm !== null) {
        registerForm.addEventListener("submit", register)
    }

    if (loginForm !== null) {
        loginForm.addEventListener("submit", login)
    }
}
import Dashboard from "./views/Home.js"
import Posts from "./views/Posts.js"
import Register from "./views/Register.js"
import Login from "./views/Login.js"
import PostView from "./views/PostView.js"
import Settings from "./views/Settings.js"
import { load } from "./load.js"
import { register } from "./register.js"
import { login } from "./login.js"

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$")

const getParams = match => {
    const values = match.result.slice(1)
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1])

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]]
    }))
}

const navigateTo = url => {
    history.pushState(null, null, url)
    router()
}

const router = async () => {
    const routes = [
        { path: "/", view: Dashboard },
        { path: "/posts", view: Posts },
        { path: "/login", view: Login },
        { path: "/register", view: Register },
        { path: "/posts/:id", view: PostView },
        { path: "/settings", view: Settings }
    ]

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        }
    })

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null)

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        }
    }

    const view = new match.route.view(getParams(match))
    const html = await view.getHtml()

    document.querySelector("#app").innerHTML = html
}

window.addEventListener("popstate", router)

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("[data-login-form]")
    const registerForm = document.querySelector("[data-register-form]")

    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault()
            const href = e.target.href
            switch (href) {
                case "http://0.0.0.0:3000/login":
                    // if (loginForm !== null) {
                    //     loginForm.addEventListener("submit", login)
                    // }
                    console.log(loginForm, registerForm)
                    break
                case "http://0.0.0.0:3000/register":
                    // if (registerForm !== null) {
                    //     registerForm.addEventListener("submit", register)
                    // }
                    console.log(loginForm, registerForm)
                    break
                default:
                    console.log("Other page")
            }
            navigateTo(href)
        }
    })

    router()
})
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Login");
    }

    async getHtml() {
        return `
            <form method="post" id="login-form" data-login-form>
                <div class="form-header">
                    <h1>Sign in</h1>
                    <p>Please fill in the form below to login.</p>
                </div>

                <div class="form-body">
                    <div class="form-group">
                        <label for="email">E-mail</label>
                        <input type="text" id="email" name="email" autocomplete="off">
                    </div>

                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" autocomplete="off">
                    </div>

                    <div class="form-group">
                        <button>Login</button>
                    </div>
                </div>
                <div class="form-footer">
                    <p>Don't have an account? <a href="/register" data-link>Register</a></p>
                    <a href="/" data-link>Home</a>
                </div>
            </form>
        `;
    }
}
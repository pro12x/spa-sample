import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Register");
    }

    async getHtml() {
        return `
            <form method="post" id="register-form" data-register-form>
                <div class="form-header">
                    <h1>Sign up</h1>
                    <p>Please fill in the form below to register.</p>
                </div>

                <div class="form-body">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" autocomplete="off">
                    </div>

                    <div class="form-group">
                        <label for="email">E-mail</label>
                        <input type="email" id="email" name="email" autocomplete="off">
                    </div>

                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" autocomplete="off">
                    </div>

                    <div class="form-group">
                        <button>Register</button>
                    </div>
                </div>
                <div class="form-footer">
                    <p>Already have an account? <a href="/login" data-link>Login</a></p>
                    <a href="/" data-link>Home</a>
                </div>
            </form>
        `;
    }
}
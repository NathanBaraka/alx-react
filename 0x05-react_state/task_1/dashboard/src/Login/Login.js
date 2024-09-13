import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    // Initialize local state
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false
    };

    // Bind the methods
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  // Handle form submission
  handleLoginSubmit(event) {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  // Handle email input change
  handleChangeEmail(event) {
    const email = event.target.value;
    this.setState({ email }, this.toggleSubmitButton);
  }

  // Handle password input change
  handleChangePassword(event) {
    const password = event.target.value;
    this.setState({ password }, this.toggleSubmitButton);
  }

  // Enable/disable the submit button based on input values
  toggleSubmitButton() {
    const { email, password } = this.state;
    if (email !== '' && password !== '') {
      this.setState({ enableSubmit: true });
    } else {
      this.setState({ enableSubmit: false });
    }
  }

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <div className="Login">
        <form onSubmit={this.handleLoginSubmit}>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={this.handleChangeEmail}
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={this.handleChangePassword}
            />
          </div>
          <input
            type="submit"
            value="Log In"
            disabled={!enableSubmit}
          />
        </form>
      </div>
    );
  }
}

export default Login;


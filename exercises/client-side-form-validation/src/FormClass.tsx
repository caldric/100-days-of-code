import React from 'react';

interface FormErrors {
  email?: string;
  fullName?: string;
  password?: string;
}

interface LocalState {
  email: string;
  fullName: string;
  password: string;
  successMessage: string;
  errors: FormErrors;
}

const initialState: LocalState = {
  email: '',
  fullName: '',
  password: '',
  successMessage: '',
  errors: {},
};

export default class FormClass extends React.Component {
  state: LocalState = initialState;

  // Form validation method
  validate(): boolean {
    const { email, fullName, password } = this.state;
    const newErrors: FormErrors = {};

    if (!email) {
      newErrors['email'] = 'Please enter an email address';
    }

    if (!fullName) {
      newErrors['fullName'] = 'Please enter a name';
    }

    if (!password) {
      newErrors['password'] = 'Please enter a password';
    }

    if (password && password.length < 8) {
      newErrors['password'] = 'Password is too short';
    }

    const hasErrors: boolean = Object.keys(newErrors).length > 0;
    if (hasErrors) {
      this.setState({
        errors: { ...newErrors },
      });
      return false;
    } else {
      this.setState({ errors: {}, successMessage: 'Success!' });
      return true;
    }
  }

  // Event handlers
  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent application from refreshing
    event.preventDefault();

    // Do form validation
    this.validate();
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    switch (event.target.name) {
      case 'password':
        const newPassword: string = event.target.value;
        const newError: FormErrors = {};

        // Validate password length
        if (newPassword.length < 8) {
          newError['password'] = 'Password must have at least 8 characters';
        } else {
          newError['password'] = undefined;
        }

        // Set new state
        this.setState({
          errors: { ...this.state.errors, ...newError },
          password: newPassword,
        });

        return;

      default:
        this.setState({ [event.target.name]: event.target.value });
    }
  };

  render() {
    const { email, fullName, password, successMessage, errors } = this.state;

    return (
      <div className="form-class">
        <h2>Form (Class Component)</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={this.handleChange}
            />
            <div className="error">{errors.email}</div>
          </div>
          <div>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter full name"
              value={fullName}
              onChange={this.handleChange}
            />
            <div className="error">{errors.fullName}</div>
          </div>
          <div>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Create password"
              value={password}
              onChange={this.handleChange}
            />
            <div className="error"></div>
            <div className="error">{errors.password}</div>
          </div>
          <button type="submit">Sign up</button>
          <div>{successMessage}</div>
        </form>
      </div>
    );
  }
}

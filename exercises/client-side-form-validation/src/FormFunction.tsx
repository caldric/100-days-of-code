import React from 'react';

const FormFunction = () => {
  // State variables
  const [email, setEmail] = React.useState<string>('');
  const [emailError, setEmailError] = React.useState<string>('');
  const [fullName, setFullName] = React.useState<string>('');
  const [fullNameError, setFullNameError] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [passwordError, setPasswordError] = React.useState<string>('');
  const [successMessage, setSuccessMessage] = React.useState<string>('');

  const validate = (): boolean => {
    let hasNoErrors = true;

    if (!email) {
      setEmailError('Please enter an email address');
      hasNoErrors = false;
    }

    if (!fullName) {
      setFullNameError('Please enter a name');
      hasNoErrors = false;
    }

    if (!password) {
      setPasswordError('Please enter a password');
      hasNoErrors = false;
    }

    if (password && password.length < 8) {
      setPasswordError('Password is too short');
      hasNoErrors = false;
    }

    return hasNoErrors;
  };

  // Event handlers
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent application from refreshing
    event.preventDefault();

    // Reset errors
    const errorSetters = [setEmailError, setFullNameError, setPasswordError];
    for (const errorSetter of errorSetters) {
      errorSetter('');
    }

    // Do form validation
    const hasNoErrors: boolean = validate();

    if (hasNoErrors) {
      setSuccessMessage('Success!');
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword: string = event.target.value;
    setPassword(newPassword);
    if (newPassword.length < 8) {
      setPasswordError('Password must have at least 8 characters');
    } else {
      setPasswordError('');
    }
  };

  return (
    <div className="form-function">
      <h2>Form (Function Component)</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <div className="error">{emailError}</div>
        </div>
        <div>
          <input
            id="full-name"
            name="full-name"
            type="text"
            placeholder="Enter full name"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
          <div className="error">{fullNameError}</div>
        </div>
        <div>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Create password"
            value={password}
            onChange={handlePasswordChange}
          />
          <div className="error">{passwordError}</div>
        </div>
        <button type="submit">Sign up</button>
        <div>{successMessage}</div>
      </form>
    </div>
  );
};

export default FormFunction;

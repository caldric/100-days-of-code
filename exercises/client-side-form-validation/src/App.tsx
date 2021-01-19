import React from 'react';
import FormFunction from './FormFunction';
import FormClass from './FormClass';

const App = () => {
  const [showFunctionForm, setShowFunctionForm] = React.useState<boolean>(
    false
  );
  const [showClassForm, setShowClassForm] = React.useState<boolean>(false);

  return (
    <div>
      <h1>Sample Sign Up Form</h1>
      <button
        type="button"
        onClick={() => setShowFunctionForm(!showFunctionForm)}
      >
        Toggle Function Form
      </button>
      <button type="button" onClick={() => setShowClassForm(!showClassForm)}>
        Toggle Class Form
      </button>

      {showFunctionForm && <FormFunction />}
      {showClassForm && <FormClass />}
    </div>
  );
};

export default App;

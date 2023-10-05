import './App.css';

function App() {
  
 
  return (
    <div className="App">
      <h1>Welcome back</h1>
      <div className="login_wrapper">
        <form className="login_form" action="">
          <input type="email" name="email" id="login_email"
            placeholder='Provide email' />
          <input type="password" name="psswrd" placeholder='Provide password' id="login_psswrd" />
          <div className="button-wrapper">
            <button>Login</button>
            <button>Sign up</button>
          </div>

        </form>
      </div>
      <p>Forgot your password?</p>
    </div>
  );

}

export default App;

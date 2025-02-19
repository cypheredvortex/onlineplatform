import './App.css';
import { Link } from 'react-router-dom';

function Signin() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload on form submission
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Add your form validation or submission logic here
    console.log('User details:', { username, email, password });
    alert('Sign-in successful!');
  };

  return (
    <div className="">
      <br /><br /><br />
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldintel">
          <legend style={{ color: "aqua", fontSize: "xx-large" }}>Sign in</legend>
          <br />
          <label htmlFor="username">Username:</label>
          <br />
          <input type="text" id="username" name="username" placeholder="Enter your username" required />
          <br /><br />

          <label htmlFor="email">E-mail:</label>
          <br />
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
          <br /><br />

          <label htmlFor="password">Password:</label>
          <br />
          <input type="password" id="password" name="password" placeholder="Enter your password" required />
          <br /><br />

          <button type="submit" style={{ color: "black" }}>Sign in</button>
          <br /><br />
          <Link to="/loginpage">Otherwise, log in</Link>
        </fieldset>
      </form>
    </div>
  );
}

export default Signin;

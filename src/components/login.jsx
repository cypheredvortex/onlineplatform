import './App.css';
import { Link } from 'react-router-dom';

function Login() {
    // You might want to add state and event handling if you plan to handle form submission in React.
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here.
    };

    return (
        <div className="">
            <br /><br />
            <fieldset className="fieldintel">
                <legend style={{ color: "aqua", fontSize: "xx-large" }}>Log in</legend>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label><br /><br />
                    <input type="text" id="username" placeholder="Enter your username" required /><br /><br />

                    <label htmlFor="email">E-mail:</label><br /><br />
                    <input type="email" id="email" placeholder="Enter your email" required /><br /><br />

                    <label htmlFor="password">Password:</label><br /><br />
                    <input type="password" id="password" placeholder="Enter your password" required /><br /><br /><br />

                    <button type="submit" style={{ color: "black" }}>Log in</button><br /><br /><br />
                </form>

                <Link to="/signinpage">Sign in</Link><br /><br /><br />
            </fieldset>
        </div>
    );
}

export default Login;

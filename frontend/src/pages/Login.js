import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/login', { email, password });
            localStorage.setItem('token', res.data.token);
            navigate('/profile');
        } catch (err) {
            console.error(err);
            alert('Login failed');
        }
    };

    return (
        <div class="form-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <span>Email</span>
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span>Password</span>
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login;

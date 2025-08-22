import React, { useState } from "react";
import "./Pages.css";

function Register() {
    const [form, setForm] = useState({ name: "", email: "", password: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Registered Successfully!");
        setForm({ name: "", email: "", password: "" });
    };

    return (
        <div className="page">
            <h2>Register Now</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;

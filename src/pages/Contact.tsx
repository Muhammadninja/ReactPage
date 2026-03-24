import { useState } from 'react';
import './pages.css';

export default function Contact() {
    const [sent, setSent] = useState(false);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSent(true);
    }

    return (
        <div className="page">
            <section className="section">
                <h2 className="section-title">Get In <span className="accent">Touch</span></h2>
                {sent ? (
                    <p className="success-msg">Thanks! I'll get back to you soon.</p>
                ) : (
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <input className="input" type="text" placeholder="Your Name" required />
                        <input className="input" type="email" placeholder="Your Email" required />
                        <textarea className="input textarea" placeholder="Your Message" rows={5} required />
                        <button className="btn" type="submit">Send Message</button>
                    </form>
                )}
            </section>
        </div>
    );
}

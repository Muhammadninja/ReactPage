import { useState } from 'react';
import './pages.css';

export default function About() {
    const [subscribed, setSubscribed] = useState(false);
    const [email, setEmail] = useState('');
    const [freq, setFreq] = useState('weekly');

    function handleNewsletter(e: React.FormEvent) {
        e.preventDefault();
        setSubscribed(true);
    }

    return (
        <div className="page" style={{ flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '4rem', gap: '3rem' }}>
            {/* ── Bio ── */}
            <section className="section">
                <h2 className="section-title">About <span className="accent">Me</span></h2>
                <p className="section-text">
                    I'm a frontend developer with a love for clean UI and performant apps.
                    I specialise in React, TypeScript, and modern CSS.
                </p>
                <div className="skills-grid">
                    {['React', 'TypeScript', 'Vite', 'Node.js', 'CSS', 'Git'].map((skill) => (
                        <span key={skill} className="skill-badge">{skill}</span>
                    ))}
                </div>
            </section>

            {/* ── Newsletter Form ── */}
            <section className="section">
                <h2 className="section-title">Stay <span className="accent">Updated</span></h2>
                <p className="section-text" style={{ marginBottom: '1.5rem' }}>
                    Subscribe to my newsletter and get notified when I publish new articles, projects, or tutorials.
                </p>
                {subscribed ? (
                    <p className="success-msg">🎉 You're subscribed! Talk soon.</p>
                ) : (
                    <form className="contact-form" onSubmit={handleNewsletter}>
                        <input
                            className="input"
                            type="text"
                            placeholder="Your Name"
                            required
                        />
                        <input
                            className="input"
                            type="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <div className="field-group">
                            <label className="field-label">Email Frequency</label>
                            <select
                                className="input select-input"
                                value={freq}
                                onChange={(e) => setFreq(e.target.value)}
                            >
                                <option value="daily">Daily Digest</option>
                                <option value="weekly">Weekly Roundup</option>
                                <option value="monthly">Monthly Newsletter</option>
                            </select>
                        </div>
                        <div className="checkbox-group">
                            <input type="checkbox" id="agree" required />
                            <label htmlFor="agree" className="checkbox-label">
                                I agree to receive emails and accept the privacy policy.
                            </label>
                        </div>
                        <button className="btn" type="submit">Subscribe</button>
                    </form>
                )}
            </section>
        </div>
    );
}

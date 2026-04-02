import { useState } from 'react';
import './pages.css';

const projects = [
    { title: 'React Pages', desc: 'A multi-page React app deployed on GitHub Pages using Vite.', tech: ['React', 'TypeScript', 'Vite'] },
    { title: 'Portfolio', desc: 'Personal portfolio site with smooth animations and responsive layout.', tech: ['React', 'CSS'] },
    { title: 'Todo App', desc: 'A clean, fast todo app with local storage persistence.', tech: ['React', 'TypeScript'] },
];

export default function Projects() {
    const [rating, setRating] = useState(0);
    const [hovered, setHovered] = useState(0);
    const [feedbackSent, setFeedbackSent] = useState(false);
    const [project, setProject] = useState('');

    function handleFeedback(e: React.FormEvent) {
        e.preventDefault();
        setFeedbackSent(true);
    }

    return (
        <div className="page" style={{ flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '4rem', gap: '3rem' }}>
            {/* ── Project Cards ── */}
            <section className="section">
                <h2 className="section-title">My <span className="accent">Projects</span></h2>
                <div className="cards-grid">
                    {projects.map((p) => (
                        <div key={p.title} className="card">
                            <h3 className="card-title">{p.title}</h3>
                            <p className="card-desc">{p.desc}</p>
                            <div className="card-tags">
                                {p.tech.map((t) => <span key={t} className="tag">{t}</span>)}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Feedback Form ── */}
            <section className="section">
                <h2 className="section-title">Leave <span className="accent">Feedback</span></h2>
                <p className="section-text" style={{ marginBottom: '1.5rem' }}>
                    Tried one of my projects? I'd love to hear what you think!
                </p>
                {feedbackSent ? (
                    <p className="success-msg">⭐ Thanks for your feedback!</p>
                ) : (
                    <form className="contact-form" onSubmit={handleFeedback}>
                        <input className="input" type="text" placeholder="Your Name" required />

                        <div className="field-group">
                            <label className="field-label">Which project?</label>
                            <select
                                className="input select-input"
                                value={project}
                                onChange={(e) => setProject(e.target.value)}
                                required
                            >
                                <option value="" disabled>Select a project…</option>
                                {projects.map((p) => (
                                    <option key={p.title} value={p.title}>{p.title}</option>
                                ))}
                            </select>
                        </div>

                        <div className="field-group">
                            <label className="field-label">Rating</label>
                            <div className="star-row">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        className={`star-btn ${star <= (hovered || rating) ? 'star-btn--active' : ''
                                            }`}
                                        onMouseEnter={() => setHovered(star)}
                                        onMouseLeave={() => setHovered(0)}
                                        onClick={() => setRating(star)}
                                        aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                                    >
                                        ★
                                    </button>
                                ))}
                                {rating > 0 && (
                                    <span className="rating-label">{rating} / 5</span>
                                )}
                            </div>
                        </div>

                        <textarea
                            className="input textarea"
                            placeholder="Share your thoughts…"
                            rows={4}
                            required
                        />

                        <button className="btn" type="submit" disabled={rating === 0}>
                            Submit Feedback
                        </button>
                    </form>
                )}
            </section>
        </div>
    );
}

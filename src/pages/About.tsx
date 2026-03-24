import './pages.css';

export default function About() {
    return (
        <div className="page">
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
        </div>
    );
}

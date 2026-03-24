import './pages.css';

const projects = [
    { title: 'React Pages', desc: 'A multi-page React app deployed on GitHub Pages using Vite.', tech: ['React', 'TypeScript', 'Vite'] },
    { title: 'Portfolio', desc: 'Personal portfolio site with smooth animations and responsive layout.', tech: ['React', 'CSS'] },
    { title: 'Todo App', desc: 'A clean, fast todo app with local storage persistence.', tech: ['React', 'TypeScript'] },
];

export default function Projects() {
    return (
        <div className="page">
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
        </div>
    );
}

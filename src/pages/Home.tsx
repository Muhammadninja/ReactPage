import './pages.css';

export default function Home() {
    return (
        <div className="page hero-page">
            <div className="hero">
                <h1 className="hero-title">Hello, I'm <span className="accent">Muhammad</span></h1>
                <p className="hero-sub">A passionate React developer building beautiful web experiences.</p>
                <a className="btn" href="/ReactPage/projects">View My Work</a>
            </div>
        </div>
    );
}

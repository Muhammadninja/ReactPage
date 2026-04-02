import TableOfContents from '../components/TableOfContents';
import './pages.css';

export default function Home() {
    return (
        <div className="page hero-page" style={{ flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '4rem' }}>
            <div className="hero" style={{ marginBottom: '3rem' }}>
                <h1 className="hero-title">Hello, I'm <span className="accent">Muhammad</span></h1>
                <p className="hero-sub">A passionate React developer building beautiful web experiences.</p>
                <a className="btn" href="/ReactPage/projects">View My Work</a>
            </div>
            <TableOfContents />
        </div>
    );
}

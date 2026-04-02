import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './TableOfContents.css';

interface TocItem {
    id: string;
    title: string;
    icon: string;
    description: string;
    link: string;
    linkLabel: string;
    subsections?: string[];
}

const tocItems: TocItem[] = [
    {
        id: 'intro',
        title: '01. Introduction',
        icon: '👋',
        description:
            "Welcome to my portfolio! I'm Muhammad, a passionate React developer focused on building performant, accessible, and beautiful web experiences.",
        link: '/',
        linkLabel: 'Go to Home',
        subsections: ['About Me', 'Background', 'Goals'],
    },
    {
        id: 'about',
        title: '02. About',
        icon: '🧑‍💻',
        description:
            "Learn about my journey as a frontend developer, the technologies I specialise in, and the skills I bring to every project.",
        link: '/about',
        linkLabel: 'Go to About',
        subsections: ['Skills', 'Experience', 'Education'],
    },
    {
        id: 'projects',
        title: '03. Projects',
        icon: '🚀',
        description:
            "Browse through the projects I've built — from multi-page React apps and personal portfolios to productivity tools.",
        link: '/projects',
        linkLabel: 'View Projects',
        subsections: ['React Pages', 'Portfolio Site', 'Todo App'],
    },
    {
        id: 'contact',
        title: '04. Contact',
        icon: '📬',
        description:
            "Have a project in mind or just want to say hello? Fill out the contact form and I'll get back to you soon.",
        link: '/contact',
        linkLabel: 'Get In Touch',
        subsections: ['Contact Form', 'Newsletter Signup'],
    },
];

export default function TableOfContents() {
    const [openId, setOpenId] = useState<string | null>(null);

    function toggle(id: string) {
        setOpenId((prev) => (prev === id ? null : id));
    }

    return (
        <div className="toc-wrapper">
            <h2 className="toc-heading">
                Table of <span className="accent">Contents</span>
            </h2>
            <p className="toc-sub">Explore the sections of this portfolio — click any item to expand.</p>
            <ol className="toc-list">
                {tocItems.map((item) => {
                    const isOpen = openId === item.id;
                    return (
                        <li key={item.id} className={`toc-item ${isOpen ? 'toc-item--open' : ''}`}>
                            <button
                                className="toc-trigger"
                                onClick={() => toggle(item.id)}
                                aria-expanded={isOpen}
                            >
                                <span className="toc-icon">{item.icon}</span>
                                <span className="toc-title">{item.title}</span>
                                <span className="toc-chevron">{isOpen ? '▲' : '▼'}</span>
                            </button>

                            <div className={`toc-body ${isOpen ? 'toc-body--open' : ''}`}>
                                <p className="toc-desc">{item.description}</p>
                                {item.subsections && (
                                    <ul className="toc-sub-list">
                                        {item.subsections.map((sub) => (
                                            <li key={sub} className="toc-sub-item">
                                                <span className="toc-bullet">▸</span> {sub}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                <NavLink to={item.link} className="toc-link">
                                    {item.linkLabel} →
                                </NavLink>
                            </div>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}

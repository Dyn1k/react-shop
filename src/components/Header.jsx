function Header() {
    return (
        <nav className={'blue'}>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">React Shop</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="https://github.com/Dyn1k/react-shop"
                           target="_blank" rel="noreferrer nofollow noopener">Repo</a></li>
                </ul>
            </div>
        </nav>
    );
}

export {Header};
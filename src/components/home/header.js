import '../style.css';

const Header = ({ submitLogout }) => {
    return (
        <header>
            <h1 className="note-header">Note</h1>
            <button onClick={ submitLogout } className="auth-bttn">logout</button>
        </header>

    )
}

export default Header;
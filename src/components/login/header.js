import '../style.css';

const Header = ({ registerToggle, update_form_bttn }) => {

    if (registerToggle) {
        return (
            <header>
                <h1 className="note-header">Note</h1>
                <button onClick={ e => update_form_bttn() } className="auth-bttn">Login</button>
            </header>
        )
    }
    return (
        <header>
            <h1 className="note-header">Note</h1>
            <button onClick={ (e) => update_form_bttn() } className="auth-bttn">Register</button>
        </header>

    )
}

export default Header;
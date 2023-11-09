import '../style.css';

const RegisterHeader = ({ update_form_bttn }) => {
    return (
        <header>
            <h1 className="note-header">Note</h1>
            <button onClick={ e => update_form_bttn() } className="auth-bttn">Login</button>
        </header>

    )
}

export default RegisterHeader;
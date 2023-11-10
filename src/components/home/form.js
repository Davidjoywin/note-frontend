import '../style.css';

const NoteForm = ({ title, setTitle, content, setContent, submitNoteForm, editForm, isEditForm, renderNoteForm }) => {
    
    return (
        <form onSubmit={ submitNoteForm } className="note-form">
            <div className="note-title">
                <label>Title</label>
                <input
                    type='text'
                    required
                    value={ title }
                    onChange={(e) => setTitle(e.target.value)}
                 />
            </div>

            <label>Note</label>
            <textarea
                required
                value={ content }
                onChange={ e => setContent(e.target.value)}
            ></textarea>
            <div>
                <a onClick={ renderNoteForm }>Back</a>
                <input type="submit" value="Post"/>
            </div>
            
        </form>
    )
}

export default NoteForm;
const AddNote = () => {
    return (
        <form className="note-form">
            <div className="note-title">
                <label>Title</label>
                <input type='text' />
            </div>

            <label>Note</label>
            <textarea></textarea>

            <input type="submit" value="Submit"/>
            
        </form>
    )
}
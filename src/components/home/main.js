import { useState, useEffect } from 'react';
import '../style.css';
import NoteForm from './form.js';
import { render } from '@testing-library/react';

const Data = ({ client, data, data_id, setNote, onDelete }) => {
    const displayNote = (e, id) => {
        e.preventDefault();
        client.get(`/note/${id}`)
        .then(res => setNote(res.data))
        .then(err => err);
    }

    return (
        <div>
            <a onClick={ (e) => displayNote(e, data_id) } className="topic">
                { data }
            </a>
            <a onClick={ (e) => onDelete(e, data_id) } className="topic-action-bttn">Delete</a>
        </div>
    )
}

const Main = ({ client }) => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [obj_data, setData] = useState([]);
    const [note, setNote] = useState({});
    const [isEditForm, setIsEditForm] = useState('false');
    const [open_form, setOpenForm] = useState(false);

    const deleteItem = (e, id) => {
        e.preventDefault();
        client.delete(`/note/${id}`)
        .then(res => setNote(""))
        .catch(err => console.log(err));
    }

    const renderNoteForm = () => {
        return setOpenForm(!open_form);
    }

    const editForm = (e, id) => {
        e.preventDefault();
        client.get(`/note/${id}`)
        .then(res => {
            setContent(res.data.content);
            setTitle(res.data.title);
        })
        .catch(err => err);
        renderNoteForm();
        setIsEditForm(true);
        // client.put(`/note/${id}`, {
        //     title: title,
        //     content: content
        // })
        // .then(res => res)
        // .catch(err => err);
    }

    const submitNoteForm = (e) => {
        e.preventDefault();
        client.post("/note/create", {
            title: title,
            content: content
        })
        .then(res => res)
        .catch(err => console.log("This error is for the note form"));
        setTitle("");
        setContent("");
        renderNoteForm();
        setIsEditForm(false);
    }

    useEffect(() => {
        client.get("/note/all")
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    })

    return (
        <>
        {open_form ? (
            <div className="note-form-container">
                <NoteForm
                    title={ title }
                    setTitle={ setTitle }
                    content={ content }
                    setContent={ setContent }
                    renderNoteForm={ renderNoteForm }
                    submitNoteForm={ submitNoteForm }
                />
            </div>) : (
        <div className="note-container">
        <aside className="aside">
            <h3>TOPICS</h3>
            <form>
                <input type='text' placeholder='Search Topics...'></input>
                <input type='submit' value='search'></input>
            </form>

            <div className="aside-container">
                {obj_data.length > 0 ? obj_data.map(data => <Data key={ data.id } client={ client } data={ data.title } setNote={ setNote } data_id={ data.id } onDelete={ deleteItem }/>) : <p className="empty-topic">No Topics to display</p>}
            </div>

            <div className="bottom-bttn">
                <a onClick={ (e) => renderNoteForm(e) } className="topic-action-bttn">Add Note</a>
            </div>
        </aside>

        <main className="main">
            <h3>NOTE</h3>
            {
                // note ? (
                    <>
                        <div className="main-title">
                            <h5 className="note-topic">{ note.title }</h5>
                            <a onClick={ (e) => editForm(e, note.id) } >Edit</a>
                        </div>
                        <div className='main-content'>
                            <p>{ note.content }</p>
                        </div>
                    </>
                // ) : <p className="empty-topic">No Topics to display</p>
            }
            <a className="back-to-topic">Back to Topics</a>
        </main>
        </div>
        )}

        </>
    )
}

export default Main;
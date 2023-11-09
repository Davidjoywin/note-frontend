import { useState, useEffect } from 'react';
import '../style.css';


const Main = ({ client }) => {

    const [data, setData] = useState([])

    useEffect(() => {
        client.get("/note/all")
        .then(res => setData(() => console.log(res.json())))
        .catch(err => console.log(err.message))
    })
    console.log(data);

    return (
        <>
        <aside className="aside">
            <h3>TOPICS</h3>
            <form>
                <input type='text' placeholder='Search Topics...'></input>
                <input type='submit' value='search'></input>
            </form>
            <div className="aside-container">
                <div><a className="topic">
                    hello worlddfjdiere
                    dheonrer
                    eroehroqjreoqojreqrq
                    </a>
                    <a className="topic-action-bttn">Delete</a></div>
            </div>
            <div className="aside-container">
                <div><a className="topic">
                    hello worlddfjdiere
                    dheonrer
                    eroehroqjreoqojreqrq
                    </a>
                    <a className="topic-action-bttn">Delete</a></div>
            </div>
            <div className="aside-container">
                <div><a className="topic">
                    hello worlddfjdiere
                    dheonrer
                    eroehroqjreoqojreqrq
                    </a>
                    <a className="topic-action-bttn">Delete</a></div>
            </div>
            <div className="aside-container">
                <div><a className="topic">
                    hello worlddfjdiere
                    dheonrer
                    eroehroqjreoqojreqrq
                    </a>
                    <a className="topic-action-bttn">Delete</a></div>
            </div>
            <div className="aside-container">
                <div><a className="topic">
                    hello worlddfjdiere
                    dheonrer
                    eroehroqjreoqojreqrq
                    </a>
                    <a className="topic-action-bttn">Delete</a></div>
            </div>
            <div className="aside-container">
                <div><a className="topic">
                    hello worlddfjdiere
                    dheonrer
                    eroehroqjreoqojreqrq
                    </a>
                    <a className="topic-action-bttn">Delete</a></div>
            </div>
            <div className="aside-container">
                <div><a className="topic">
                    hello worlddfjdiere
                    dheonrer
                    eroehroqjreoqojreqrq
                    </a>
                    <a className="topic-action-bttn">Delete</a></div>
            </div>
            <div className="aside-container">
                <div><a className="topic">
                    hello worlddfjdiere
                    dheonrer
                    eroehroqjreoqojreqrq
                    </a>
                    <a className="topic-action-bttn">Delete</a></div>
            </div>
            <div className="aside-container">
                <div><a className="topic">
                    hello worlddfjdiere
                    dheonrer
                    eroehroqjreoqojreqrq
                    </a>
                    <a className="topic-action-bttn">Delete</a></div>
            </div>
            <div className="aside-container">
                <div><a className="topic">
                    hello worlddfjdiere
                    dheonrer
                    eroehroqjreoqojreqrq
                    </a>
                    <a className="topic-action-bttn">Delete</a></div>
            </div>
            <div className="aside-container">
                <div><a className="topic">
                    hello worlddfjdiere
                    dheonrer
                    eroehroqjreoqojreqrq
                    </a>
                    <a className="topic-action-bttn">Delete</a></div>
            </div>
            <div className="bottom-bttn">
                <a className="topic-action-bttn">Add Note</a>
            </div>
        </aside>

        <main className="main">
            <h3>NOTE</h3>
            <h5 className="note-topic">Hello world</h5>
            <p>heleorerje rqoeijrojer ekroer ekdfwqjrjqwrnqwjere
                elwroqjerewq
                rqorj0jqejrjqerq
                ewrpijeowqjrkqejrejrjejrlekjre rqkrqjerjqe rekjrjerlqerq.
                okrjoejrq rqnroqjereqoire rkneowqr
            </p>
        </main>
        </>
    )
}

export default Main;
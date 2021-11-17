import React, {useState} from "react";

const Contact = (props) => {
    const [name, setName] = useState("Hai World")
    const [list, setList] = useState([])
    const addList = () => {
        setList(arr => [...arr, name])
    }   
    return (
        <div>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
             /> 
             <button onClick={addList}>
                 Add
             </button>
             <br />
             
             <ul>
                 {list.map(item => (
                     <li>{item}</li>
                 ))}
             </ul>

        </div>
    )
}

export default Contact
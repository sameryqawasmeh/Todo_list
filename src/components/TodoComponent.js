import React, {useState} from 'react'

const TodoComponent = () => {
    const [todolist, setTodolist] = useState([
        {
            name : "this is my first task",
            checked : false
        },
        {
            name : "this is my second task",
            checked : true
        },
    ])

    const clickHandler = () => {
        let name = document.getElementById("text").value
        setTodolist(todolist.concat({name: name, checked : false}))
        document.getElementById("text").value = ""
    }

    const changeStatus = (e, index) =>{
        setTodolist(todolist.map((item, i)=> i === index ?
        {name : item.name, checked: e.target.checked}:
        {name: item.name, checked: item.checked}
        ))
    }

    const deleteTask = (e, index) =>{
        const newlist=[...todolist];
        newlist.splice(index, 1);
        setTodolist(newlist);

    
    }
    return (
        <div>
            {
                todolist.map((item, index) => {
                   return <div key={index}>
                                {item.name}
                                <input type="button" id={index} value="DELETE" onClick={e => deleteTask(e, index)}/>
                                <input type="checkbox" id={index} checked={item.checked} onClick={e => changeStatus(e, index)}/>
                            </div>
                })
            }

                <input type={"text"} id="text"/>
                <input type={"button"} value={"Add"} onClick={clickHandler}/>
        </div>
    )
}

export default TodoComponent;
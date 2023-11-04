import React, { useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash,faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import EditModal from "./EditModal";

export default function Home() {
  const [todos, setTodos] = useState([
    { title: "Sample Todo", id: Math.floor(Math.random() * 89999 + 10000) },
  ]);
  const [todoTitle, setTodoTitle] = useState("");
  const [editModal,setEditModal] = useState(false)

  const opneModal = () => {
    setEditModal(true);
  };

  const closeModal = () => {
    setEditModal(false);
  };

  function createTodo(event) {
    event.preventDefault();
    setTodos((prevTodo) => {
      debugger
      return [
        ...prevTodo,
        {
          title: todoTitle,
          id: Math.floor(Math.random() * 89999 + 10000),
        },
      ];
    });
  }


  function onDelete (id){
    setTodos(
      (prevTodo) => {
        return prevTodo.filter((todo) => todo.id !== id)
      }

    )
  }

  function onUpdate(id,title){
    setTodoTitle(
      (prevTodo) =>{
        for (let todo in prevTodo){
          if (parseInt(todo.id) === parseInt(id))
            {
              todo.title = title
              return prevTodo
            }
        }
      }
    )
  }



  return (
// TODO : Use React-bootstrap instead of bootsratp
    <>
      {editModal ? (
        <EditModal closeModal={closeModal} updateTodo={onUpdate} />
      ) : (
        ""
      )}

      <div>
        Amazing Todo!!
        <form onSubmit={(event) => createTodo(event)}>
          <input
            placeholder="Add todo items here"
            defaultValue={todoTitle}
            onInput={(e) => setTodoTitle(e.target.value)}
          />
          <button className="btn btn-success" type="submit">
            Add
          </button>
        </form>
        <ul>
          {todos.map((item) => (
            <>
              <li>
                {item.title} - {item.id}
                <button onClick={() => onDelete(item.id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                <button onClick={opneModal}>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </button>
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
}

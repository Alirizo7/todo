import React from 'react'
import {useState} from 'react'
import {IoCheckmark, IoCreateOutline, IoTrashOutline} from 'react-icons/io5'
import {TODO} from '../utils/urls'
import Loading from './Loading'

export default function Todo({todo, editing, theme, index, setEditing, loadTodos}) {
    const [loadingEditing, setLoadingEditing] = useState(false)
    const [loadingDelete, setLoadingDelete] = useState(false)

    function removeTodo(id) {
        setLoadingDelete(true)
        if (window.confirm(`Вы хотите удалить эту Туду  ?`)){
            fetch(TODO.replace('id', id), {method: 'DELETE'}) // API - https://localhost:8000/todo/id
                .then(loadTodos)
                .catch(console.error)
                .finally(() => setLoadingDelete(false))
        }
    }

    function handleCompleted(id) {
        setLoadingEditing(true)

        fetch(TODO.replace('id', id), {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: todo.title,
                completed: !todo.completed
            })
        })
            .then(loadTodos)
            .catch(console.error)
            .finally(() => setLoadingEditing(false))
    }

    return (
        <div key={todo.id}
             className={`todo box mb-1 is-flex  is-justify-content-space-between 
				${editing?.id === todo.id && 'active'}
			 	${theme === 'night' ? 'has-background-grey-darker border-none todo-hover' : ''} is-align-items-center`}>

            <h1 className='title is-5 m-0 column is-8'>
				<span
                    className={`tag is-grey-dark is-rounded mr-4 is-large
					${theme === 'night' ? 'has-text-white-ter has-background-grey' : ''}`}>
					{index + 1}
				</span>

                <span className={`todo-title here ${theme === 'night' ? 'has-text-white-ter' : ''}
				${todo.completed ? 'completed' : ''}`}>
					{todo.title}
				</span>
            </h1>

            <div>
                <button
                    onClick={() => handleCompleted(todo.id)}
                    className={`button completed-btn mr-2 is-small is-light is-rounded ${todo.completed && 'btn-completed'}`}>
                    {
                        loadingEditing ?
                            <Loading/>
                            : <IoCheckmark className='title is-5'/>
                    }
                </button>

                <button
                    onClick={() => removeTodo(todo.id)}
                    className='button delete-btn is-small is-light is-rounded'>
                    {
                        loadingDelete ?
                            <Loading/>
                            : <IoTrashOutline className='title is-5'/>
                    }
                </button>
                &nbsp;

                <button
                    onClick={() => setEditing(todo)}
                    className={`button edit-btn is-small ${editing?.id === todo.id ? 'is-primary' : 'is-light'} is-rounded`}>
                    <IoCreateOutline className='title is-5'/>
                </button>
            </div>
        </div>
    )
}


/*
fetch(TODO.replace('id', todo.id), { method: 'DELETE' })
				.then(loadTodos)
				.catch(console.log)
				.finally(() => setShow(false))
*/
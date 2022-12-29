import React from 'react'
import Todo from './Todo'

export default function Todos({ todos, setTodos, theme, setEditing, editing, loading, loadTodos }) {

	if (loading) {
		return (
			<div
				style={{ height: '100%' }}
				className='is-flex is-justify-content-center is-align-items-center'>
				<button className='button is-loading is-large is-info'></button>
			</div>
		)
	}

	return (
		<div className='todos-box my-4'>
			<div className='todos'>
				{todos?.length > 0 ?
					todos.map((todo, index) => (
						<Todo
							key={todo.id}
							index={index}
							theme={theme}
							todo={todo}
							todos={todos}
							setTodos={setTodos}
							loadTodos={loadTodos}
							editing={editing}
							setEditing={setEditing} />
					))
					:
					<div style={{ height: '100%' }} className='is-flex is-justify-content-center is-align-items-center'>
						<h1 className='title'>There is not any Todo.</h1>
					</div>
				}
			</div>
		</div>
	)
}

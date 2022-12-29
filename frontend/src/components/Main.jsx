import React, { useState } from 'react'

import { useEffect } from 'react'
import { IoSunny } from 'react-icons/io5'
import { TODOS } from '../utils/urls'
import Form from './Form'
import Header from './Header'
import SocialLinks from './SocialLinks'
import Todos from './Todos'
import Pagination from "./Pagination";

export default function Main() {
	const [theme, setTheme] = useState('day')
	const [todos, setTodos] = useState([])
	const [editing, setEditing] = useState(null)
	const [loading, setLoading] = useState(false)
	const [page, setPage] = useState(1)

	useEffect(() => loadTodos(), [page])

	function loadTodos() {
		setLoading(true)
		fetch(TODOS + `?page=${page}&size=4`)
			.then(res => res.json())
			.then(res => {
				setTodos(res)
			})
			.catch(console.log)
			.finally(() => setLoading(false))
	}

	return (
		<div className={theme === 'night' ? 'has-background-grey-darker' : ''}>
			<div className='main is-flex is-justify-content-center'>
				<div className={`main-box box column is-6 mt-6 px-6 is-flex is-flex-direction-column is-justify-content-space-around ${theme === 'night' ? 'has-background-grey-dark' : ''}`}>
					<Header />
					<Form
						editing={editing}
						theme={theme}
						todos={todos?.results}
						setTodos={setTodos}
						loadTodos={loadTodos}
						setEditing={setEditing} />

					<Todos
						loading={loading}
						setLoading={setLoading}
						theme={theme}
						todos={todos?.results}
						loadTodos={loadTodos}
						setTodos={setTodos}
						setEditing={setEditing}
						editing={editing} />

					{todos && todos.results?.length > 0 &&
						<Pagination
							page={page}
							pageCount={Math.ceil(todos?.count / todos?.size)}
							setPage={setPage} />}

					<SocialLinks />
				</div>
			</div>

			<button
				onClick={() => {
					theme === 'day' ? setTheme('night') : setTheme('day')
				}}
				className='button is-light is-rounded btn-settings p-3'>
				<IoSunny className='title is-1' />
			</button>
		</div>
	)
}


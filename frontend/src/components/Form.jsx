import React, { useEffect, useState } from 'react'
import { TODO, TODOS } from '../utils/urls'
import Loading from './Loading'

export default function Form({ editing, theme, setEditing, loadTodos }) {
	const [value, setValue] = useState('')
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		editing && setValue(editing.title)
	}, [editing])

	function addTodo(e) {
		e.preventDefault()
		if (!value) return
		setLoading(true)

		if (editing) {
			fetch(TODO.replace('id', editing.id), {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					title: value
				})
			})
				.then(() => {
					loadTodos()
					setEditing(null)
					setValue('')
				})
				.catch(() => console.log())
				.finally(() => setLoading(false))
			return
		}

		fetch(TODOS, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				title: value
			})
		})
			.then(() => {
				loadTodos()
				setValue('')
			})
			.catch(console.log)
			.finally(() => setLoading(false))
	}

	return (
		<form
			onSubmit={(e) => addTodo(e)}
			className='form is-flex is-justify-content-space-around'>
			<input
				className={`input is-focused is-info is-light column is-8
				${theme === 'night' ? 'has-background-grey-lighter' : ''}`}
				type="Enter your task"
				value={value}
				onInput={(e) => setValue(e.target.value)}
				placeholder='Enter your task' />

			<button
				disabled={!value}
				type='submit'
				className={`button ${editing ? 'is-primary' : 'is-info'} column is-3 p-2`} >
				{
					loading ?
						<Loading additionalStyles={{ height: '20px' }} classNames="is-large p-0 is-primary mb-5 pb-5" />
						: editing ? 'Update' : 'Add'
				}
			</button>
		</form>
	)
}

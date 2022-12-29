import React, { useEffect, useRef } from 'react'

export default function Notify({ show = false, text = 'Message', request }) {
	const btnRef = useRef()

	useEffect(() => {
		btnRef?.current?.focus()
	}, [show])


	return (
		<article className={`notify-box message is-success ${show && 'notify-active'}`}>
			<div className="message-body">
				{text}
				<div className='notify-btns'>
					<button ref={btnRef} onClick={() => request(true)} className="button is-small is-primary notify-btn yes">
						Yes
					</button>

					<button onClick={() => request(false)} className="button is-small is-warning notify-btn no">
						No
					</button>
				</div>
			</div>
		</article>
	)
}

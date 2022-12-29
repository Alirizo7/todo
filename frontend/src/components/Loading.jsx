import React from 'react'

export default function Loading({ classNames, additionalStyles }) {
	return (
		<span
			style={{ ...styles.button, ...additionalStyles }}
			className={"button is-loading " + classNames}>
		</span>
	)
}


const styles = {
	button: {
		background: 'transparent',
		border: 'none',
		color: 'black',
		padding: '10px',
	}
}
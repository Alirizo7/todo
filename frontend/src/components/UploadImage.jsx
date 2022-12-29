import React, { useState } from "react"

function App() {
	const [file, setFile] = useState()

	function handleChange(e) {
		console.log(e.target.files)
			
	}

	return (
		<div className="App">
			<h2>Add Image:</h2>
			<input type="file" onChange={handleChange} />
			<img src={file} alt="Nice bro" />
		</div>
	)
}

export default App

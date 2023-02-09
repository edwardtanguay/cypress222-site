import { useState } from 'react';
import './App.scss';

function App() {
	const [message, setMessage] = useState('');

	return (
		<div className="App">
			<h1>Info Site</h1>
			<p>Welcome to this site.</p>
			<input value={message} onChange={(e) => setMessage(e.target.value)}/>
			<div className="showMessage">Your message has {message.length} characters.</div>
		</div>
	);
}

export default App;
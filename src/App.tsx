import './app.css';
import {useState} from 'react';
import Alert from './components/Alert';
import Button from './components/Button';

function App() {
	const [alertVisible, setAlertVisible] = useState(false);
	return (
		<>
			{alertVisible && (
				<Alert onClose={() => setAlertVisible(false)}>Nice alert u got there</Alert>
			)}
			<Button color='primary' onClick={() => setAlertVisible(true)}>
				Show alert
			</Button>
		</>
	);
}

export default App;

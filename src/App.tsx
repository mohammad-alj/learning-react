import './app.css';
import Button from './components/Button';

function App() {
	return (
		<Button color='primary' onClick={() => console.log('clicked')}>
			Click me!
		</Button>
	);
}

export default App;

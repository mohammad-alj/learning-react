import ListGroup from './components/ListGroup';
import './app.css';

function App() {
	return (
		<ListGroup
			heading='Countries'
			items={['Kingdom Saudi Arabia', 'Syria', 'Egypt']}
			onSelectItem={item => console.log(item + ' selected')}
		/>
	);
}

export default App;

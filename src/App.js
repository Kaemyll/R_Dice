import Die from './components/Die';
import RollDice from './components/RollDice';
import './styles/App.css';

function App() {
	return (
		<div className="App">
			<Die face={4} />
			<Die face={2} />
		</div>
	);
}

export default App;

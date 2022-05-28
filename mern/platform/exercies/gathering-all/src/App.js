import PersonCard from './components/PersonCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonCard
        firstName={"Lopez"}
        lastName={"David"}
        age={24}
        hairColor={"blond"}
      />
      <PersonCard
        firstName={"Smith"}
        lastName={"Jhon"}
        age={88}
        hairColor={"Brown"}
      />
    </div>
  );
}

export default App;

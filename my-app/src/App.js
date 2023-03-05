import './App.css';
import StartingInfo from './components/pages/StartingInfo';
import MuscleGroups from './components/pages/MuscleGroups';
import SelectExercisesAndCalculate from './components/pages/SelectExercisesAndCalculate.js';
import Results from './components/pages/Results';

// temp value, to get from backend later
const exerciseCount = 3;

function App() {
  return (
    <div className="App">
      <div id="page-container">
        <StartingInfo/>
        <MuscleGroups/>
        <SelectExercisesAndCalculate exercises={["pull-ups", "sit-ups", "deadlift", "squats"]} exerciseCount={exerciseCount}/>
        <Results/>
      </div>
    </div>
  );
}

export default App;

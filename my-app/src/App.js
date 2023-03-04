import './App.css';
import StartingInfo from './components/pages/StartingInfo';
import MuscleGroups from './components/pages/MuscleGroups';
import SelectExercisesAndCalculate from './components/pages/SelectExercisesAndCalculate.js';
import Results from './components/pages/Results';

function App() {
  return (
    <div className="App">
      <div id="page-container">
        <StartingInfo/>
        <MuscleGroups/>
        <SelectExercisesAndCalculate/>
        <Results/>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import MuscleGroups from './components/pages/MuscleGroups';
import StartingInfo from './components/pages/StartingInfo';
import SelectExercisesAndCalculate from './components/pages/SelectExercisesAndCalculate.js';
import Results from './components/pages/Results';

function App() {
  return (
    <div className="App">
      <div id="page-container">
        <MuscleGroups/>
        <StartingInfo/>
        <SelectExercisesAndCalculate/>
        <Results/>
      </div>
    </div>
  );
}

export default App;

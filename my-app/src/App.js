import React, { useState } from 'react';

import './App.css';
import StartingInfo from './components/pages/StartingInfo';
import MuscleGroups from './components/pages/MuscleGroups';
import SelectExercisesAndCalculate from './components/pages/SelectExercisesAndCalculate.js';
import Results from './components/pages/Results';

// temp value, to get from backend later
const exerciseCount = 3;

function App() {

  const [startingInfoComplete, setStartingInfoComplete] = useState(false);
  const [muscleGroupsComplete, setMuscleGroupsComplete] = useState(false);
  const [selectExercisesAndCalculateComplete, setSelectExercisesAndCalculateComplete] = useState(false);

  let informationComplete = startingInfoComplete && muscleGroupsComplete && selectExercisesAndCalculateComplete;

  function onMuscleGroupsSelected(muscleGroup) {
    console.log(muscleGroup);
  }

  return (
    <div className="App">
      <div id="page-container">
        <StartingInfo/>
        <MuscleGroups onMuscleGroupsSelected={onMuscleGroupsSelected}/>
        <SelectExercisesAndCalculate exercises={["pull-ups", "sit-ups", "deadlift", "squats"]} exerciseCount={exerciseCount}/>
        <Results/>
      </div>
    </div>
  );
}

export default App;

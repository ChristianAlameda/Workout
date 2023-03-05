import './Page.css';
import './SelectExercisesAndCalculate.css'

function SelectExercisesAndCalculate(props) {

    function exercisePrompts(exerciseCount, exercises) {
        // return an array of exercise prompts length equal to exerciseCount
        let prompts = [];
        for (let i = 0; i < exerciseCount; i++) {
            prompts.push(
                <div className="exercise-prompt">
                    <p>Exercise {i+1}</p>
                    <select>
                        {exercises.map((exercise) => {
                            return <option value={exercise}>{exercise}</option>
                        })}
                    </select>
                    <input type="number" placeholder="Warmup Sets"></input>
                    <input type="number" placeholder="Work Set Weight"></input>
                </div>
            )
        }
        return prompts;
    }

    return (
        <div className="page third-page">
            <h1>You're almost there...</h1>
            {/* list of exercises to choose, select number of warmup sets (default 3), input work set weight */}
            
            {exercisePrompts(props.exerciseCount, props.exercises)}

            {/* input asking for number of warmup sets */}
            {/* input asking for work set weight */}


            {/* submit button */}

        </div>
    )
}

export default SelectExercisesAndCalculate;
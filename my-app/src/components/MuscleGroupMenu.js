import './MuscleGroupMenu.css'

function MuscleGroupMenu(props) {
    // when the user clicks on a muscle group, the muscle group is added to the list of selected muscle groups
    // when the user clicks on a muscle group that is already selected, the muscle group is removed from the list of selected muscle groups
    // when the muscle group changes, emit an event to the parent component

    function handleChange(event) {
        const muscleGroup = event.target.value;
        if (event.target.checked) {
            props.onMuscleGroupSelected(muscleGroup);
        } else {
            props.onMuscleGroupDeselected(muscleGroup);
        }
    }

    return (
        <div className="muscle-group-menu">
            <h2>Muscle Groups</h2>
            <ul className="muscleGroupChecklist">
                {props.muscleGroups.map((muscleGroup) => (
                    <li key={muscleGroup} className="muscleGroupListItem">
                        <label>
                            <input type="checkbox" name={muscleGroup} value={muscleGroup} onChange={handleChange}/>
                            {muscleGroup}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MuscleGroupMenu;
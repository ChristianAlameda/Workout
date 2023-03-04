import './MuscleGroupMenu.css'

function MuscleGroupMenu(props) {
    return (
        <div className="muscle-group-menu">
            <h2>Muscle Groups</h2>
            <ul className="muscleGroupChecklist">
                {props.muscleGroups.map((muscleGroup) => (
                    <li key={muscleGroup} className="muscleGroupListItem">
                        <label>
                            <input type="checkbox" name={muscleGroup} value={muscleGroup}/>
                            {muscleGroup}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MuscleGroupMenu;
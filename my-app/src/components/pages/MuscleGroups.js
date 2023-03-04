import './Page.css';
import './MuscleGroups.css'

import PageHeader from '../PageHeader';
import PresetsMenu from '../PresetsMenu';
import MuscleGroupMenu from '../MuscleGroupMenu';

// temporary list, will be replaced with a database call
const MuscleGroupList = ["Abs", "Core and Lower Back", "Arms", "Chest", "Legs", "Shoulders"];

function MuscleGroups() {
    return (
        <div className="page musclegroups-page">
            <PageHeader name="2. Target Muscle Groups"/>
            <div className="page-content">
                <PresetsMenu/>
                <MuscleGroupMenu muscleGroups={MuscleGroups}/>
            </div>
        </div>
    )
}

export default MuscleGroups;
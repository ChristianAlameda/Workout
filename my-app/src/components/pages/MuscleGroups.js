import './Page.css';
import './MuscleGroups.css'

import PageHeader from '../PageHeader';
import PresetsMenu from '../PresetsMenu';
import MuscleGroupMenu from '../MuscleGroupMenu';

// will eventually be a hash table, with the key being the preset name and the value being the muscle groups
const presetList = ["Leg Day", "Chest Day", "Back Day", "Arm Day", "Shoulder Day", "Core Day", "Full Body Day"];

// temporary list, will be replaced with a database call
const muscleGroupList = ["Abs", "Core and Lower Back", "Arms", "Chest", "Legs", "Shoulders", "Back", "Cardio", "Stretching", "Other", "All"];

function MuscleGroups() {
    return (
        <div className="page musclegroups-page">
            <PageHeader name="Which muscle groups?"/>
            <div className="page-content">
                <PresetsMenu presets={presetList}/>
                <MuscleGroupMenu muscleGroups={muscleGroupList}/>
            </div>
        </div>
    )
}

export default MuscleGroups;
import './Page.css';
import './MuscleGroups.css';

import React, { useEffect, useState } from 'react';

import PageHeader from '../PageHeader';
import PresetsMenu from '../PresetsMenu';
import MuscleGroupMenu from '../MuscleGroupMenu';

// will eventually be a hash table, with the key being the preset name and the value being the muscle groups
const presetList = ["Leg Day", "Chest Day", "Back Day", "Arm Day", "Shoulder Day", "Core Day", "Full Body Day"];

// temporary list, will be replaced with a database call
const muscleGroupList = ["Abs", "Core and Lower Back", "Arms", "Chest", "Legs", "Shoulders", "Back", "Cardio", "Stretching", "Other", "All"];

function MuscleGroups(props) {
    const [muscleGroupsSelected, setMuscleGroupsSelected] = useState([]);

    // send data to parent when muscleGroupsSelected changes
    useEffect(() => {
        props.onMuscleGroupsSelected(muscleGroupsSelected);
    }, [muscleGroupsSelected]);

    // onMuscleGroupSelected adds the muscle group to the list of selected muscle groups
    function onMuscleGroupSelected(muscleGroup) {
        setMuscleGroupsSelected(muscleGroupsSelected.concat(muscleGroup));
    }
    function onMuscleGroupDeselected(muscleGroup) {
        let index = muscleGroupsSelected.indexOf(muscleGroup);
        if (index > -1) {
            muscleGroupsSelected.splice(index, 1);
        }
        setMuscleGroupsSelected(muscleGroupsSelected);
    }

    return (
        <div className="page musclegroups-page">
            <PageHeader name="Which muscle groups?"/>
            <div className="page-content">
                <PresetsMenu presets={presetList}/>
                <MuscleGroupMenu muscleGroups={muscleGroupList} onMuscleGroupSelected={onMuscleGroupSelected} onMuscleGroupDeselected={onMuscleGroupDeselected}/>
            </div>
        </div>
    )
}

export default MuscleGroups;
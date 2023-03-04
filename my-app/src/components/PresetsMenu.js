import './PresetsMenu.css'

function PresetsMenu(props) {
    return (
        <div className="presets-menu">
            <h2>Presets</h2>
            {/* multiple choice (choose one)*/}
            <ul className="preset-list">
                {props.presets.map((preset) => (
                    <li key={preset} className="preset-list-item">
                        <label htmlFor={preset}>{preset}</label>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default PresetsMenu;
import './Page.css';
import '.StartingInfo.css';



function StartingInfo() {
    return (
        <div className="page">
            <h1>Starting Info</h1>
        </div>


    )

    document.getElementById("myButton").onclick = function() {

    var myName = document.getElementById("Number").value;

    // dropdown menu
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const select = dropdown.querySelector('.select');
        const caret = dropdown.querySelector('.caret');
        const menu = dropdown.querySelector('.menu');
        const options = dropdown.querySelectorAll('.menu li');
        const selected = dropdown.querySelector('.selected');

        select.addEventListener('click', () =>
        select.classList.toggle('select-clicked'));
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });

   }
}

export default StartingInfo;
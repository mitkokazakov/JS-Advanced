function attachEventsListeners() {
    
    let table = {

        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    }

    const inputChoice = document.querySelector('#inputUnits');
    const outputChoice = document.querySelector('#outputUnits');

    const inputValue = document.querySelector('#inputDistance');
    const outputValue = document.querySelector('#outputDistance');

    const button = document.querySelector('#convert');
    button.addEventListener('click', convert);

    function convert(){

        const currentInputValue = inputValue.value;
        const currentInputUnit = inputChoice.value;
        const currentOuputUnit = outputChoice.value;

        const constantMeters = currentInputValue * table[currentInputUnit];
        const evaluated = constantMeters / table[currentOuputUnit];
        outputValue.value = evaluated;
    }
}
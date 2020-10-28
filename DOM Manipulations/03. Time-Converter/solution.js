function attachEventsListeners() {

    const allButtons = Array.from(document.querySelectorAll('input[type=button]'));

    const allInputs = Array.from(document.querySelectorAll('input[type=text]'));

    for (const button of allButtons) {
        button.addEventListener('click', onClick);
    }

    const coeff = {

        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400

    };
    
    function converting(value,unit){

        const constantDays = value / coeff[unit];

        const newValues = {

            days: constantDays,
            hours: constantDays * coeff.hours,
            minutes: constantDays * coeff.minutes,
            seconds: constantDays * coeff.seconds
        };

        return newValues;

    }
    

    function onClick(e){

        const currentTarget = e.target;
        
        const buttonClaredId = currentTarget.id.replace('Btn', '');
        const currentInput = allInputs.find(i => i.id === buttonClaredId);
        const currentValue = Number(currentInput.value);

        const convertedValues = converting(currentValue,buttonClaredId);


        for (const result of allInputs) {
            
            result.value = convertedValues[result.id];
        }
        
        
    }

}
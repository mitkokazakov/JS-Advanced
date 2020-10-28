function lockedProfile() {

    // We can drag the event to the main Div, but we have to check if button is pressed. We have to check if the nodeName is === 'BUTTON';
    const buttons = document.getElementsByTagName('button');

    for (const button of buttons) {
        button.addEventListener('click', onClick);

    }


    function onClick(e) {

        const currentButton = e.target;
        const parent = currentButton.parentNode;
        const innerDivs = Array.from(parent.querySelectorAll('div'));
        const hiddenDiv = innerDivs.find(d => d.id.includes('HiddenFields'));

        const lockOption = parent.querySelector('input[type=radio][value=lock]');
        const isLocked = lockOption.checked;

        if (isLocked) {
            return;
        }

        if (currentButton.textContent === 'Show more') {
            currentButton.textContent = 'Hide it';
            hiddenDiv.style.display = 'block';
        }
        else {
            currentButton.textContent = 'Show more';
            hiddenDiv.style.display = 'none';
        }

        //alert(hiddenDiv.id);
    }
}
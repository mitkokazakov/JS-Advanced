function toggle() {

    const hiddenDIV = document.getElementById('extra');
    const button = document.getElementsByClassName('button')[0];

    if (button.textContent === 'More') {
        hiddenDIV.style.display = 'block';
        button.textContent = 'Less';
    }
    else if(button.textContent === 'Less'){
        hiddenDIV.style.display = 'none';
        button.textContent = 'More';
    }


}
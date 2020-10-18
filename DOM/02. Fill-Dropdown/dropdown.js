function addItem() {
    
    const valueInputText = document.getElementById('newItemText').value;
    const valueInputValue = document.getElementById('newItemValue').value;

    const selectElement = document.getElementById('menu');
    const optionElement = document.createElement('option');

    selectElement.appendChild(optionElement);

    optionElement.innerHTML = valueInputText;
    optionElement.value = valueInputValue;

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}
function getInfo() {

    const validID = ['1287', '1308', '1327', '2334'];

    const stopID = document.querySelector('#stopId');

    const stopName = document.querySelector('#stopName');
    const busesUL = document.querySelector('#buses');

    if (!validID.includes(stopId.value)) {
        stopName.textContent = 'ERROR';
        return;
    }

    let allLI = [...document.querySelectorAll('li')];

    for (const el of allLI) {
        el.remove();
    }
    const url = `https://judgetests.firebaseio.com/businfo/${stopId.value}.json `;

    fetch(url).then(response => response.json()).then(data => {

        stopName.textContent = data.name;

        let kvp = Object.entries(data.buses);

        for (const [key, value] of kvp) {

            let li = document.createElement('li');
            let message = `Bus ${key} arrives in  ${value} minutes`;
            li.textContent = message;
            busesUL.appendChild(li);
        }
    });


}
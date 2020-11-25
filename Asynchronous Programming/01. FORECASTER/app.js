function attachEvents() {

    const getBtn = document.querySelector('#submit');
    getBtn.addEventListener('click', getWeather);

    const locationElement = document.querySelector('#location');
    const forecatsDIV = document.querySelector('#forecast');
    const currentDIV = document.querySelector('#current');
    const upcomingDIV = document.querySelector('#upcoming');

    const firstURL = 'https://judgetests.firebaseio.com/locations.json';

    let codes = {};

    codes['Sunny'] = "☀";
    codes['Partly sunny'] = "⛅";
    codes['Overcast'] = "☁";
    codes['Rain'] = "☂";

    const degreesCode = "°";

    function createEl(tagName, classes, text) {

        let element = document.createElement(tagName);

        element.classList.add(...classes);

        // let classesArr = classes.split(',');

        // if (classesArr.length > 1) {
        //     for (const cl of classesArr) {
        //         element.classList.add(cl);
        //     }
        // } else {
        //     element.classList.add(classes);
        // }


        element.textContent = text;

        return element;

    }

    async function getWeather() {

        const location = locationElement.value;

        const validTowns = ['New York', 'Barcelona', 'London'];

        try {

            if (!validTowns.includes(location)) {
                throw 'Invalid town. Please try again !!';
            }

            const response = await fetch(firstURL);

            if (response.status >= 400) {
                throw 'Error!!';
            }

            const data = await response.json();

            const townInfo = data.filter(d => d.name == location);

            const code = townInfo[0].code;

            const currentCond = `https://judgetests.firebaseio.com/forecast/today/${code}.json `;

            const secondResp = await fetch(currentCond);

            if (secondResp.status >= 400) {
                throw 'Error!!!';
            }



            const secondData = await secondResp.json();

            let oneDay = {
                nameLocation: secondData.name,
                condition: secondData.forecast.condition,
                high: secondData.forecast.high,
                low: secondData.forecast.low
            };

            let weatherCode = codes[oneDay.condition];

            // if (oneDay.condition === 'Sunny') {
            //     weatherCode = "☀";

            // } else if (oneDay.condition === 'Partly sunny') {

            //     weatherCode = "⛅";
            // } else if (oneDay.condition === 'Overcast') {

            //     weatherCode = "☁";
            // } else if (oneDay.condition === 'Rain') {

            //     weatherCode = "☂";
            // }

            forecatsDIV.style.display = 'block';

            const div = document.createElement('div');
            div.classList.add('forecasts');

            const spanSymbol = document.createElement('span');
            spanSymbol.classList.add('condition');
            spanSymbol.classList.add('symbol');
            spanSymbol.textContent = weatherCode;

            const spanCond = document.createElement('span');
            spanCond.classList.add('condition');

            const spanCity = document.createElement('span');
            spanCity.classList.add('forecast-data');
            spanCity.textContent = oneDay.nameLocation;

            const spanDegrees = document.createElement('span');
            spanDegrees.classList.add('forecast-data');
            spanDegrees.textContent = ` ${oneDay.low}${degreesCode}/${oneDay.high}${degreesCode} `;

            const spanWeather = document.createElement('span');
            spanWeather.classList.add('forecast-data');
            spanWeather.textContent = oneDay.condition;

            spanCond.appendChild(spanCity);
            spanCond.appendChild(spanDegrees);
            spanCond.appendChild(spanWeather);

            div.appendChild(spanSymbol);
            div.appendChild(spanCond);

            currentDIV.appendChild(div);

            const url3Days = `https://judgetests.firebaseio.com/forecast/upcoming/${code}.json`;

            const response3Days = await fetch(url3Days);

            const data3Days = await response3Days.json();

            let divThreeDays = createEl('div', 'forecast-info', '');

            //console.log(data3Days.forecast);

            for (const day of data3Days.forecast) {

                let currWeather = day.condition;
                let min = day.low;
                let max = day.high;

                let degr = `${min}${degreesCode}/${max}${degreesCode}`;

                let mainSpan1 = createEl('span', ['upcoming'], '');

                let spanSym = createEl('span', ['symbol'], codes[currWeather]);

                let spanDeg1 = createEl('span', ['forecast-data'], degr);

                let spanFor = createEl('span', ['forecast-data'], currWeather);

                mainSpan1.appendChild(spanSym);
                mainSpan1.appendChild(spanDeg1);
                mainSpan1.appendChild(spanFor);

                divThreeDays.appendChild(mainSpan1);

            }

            upcomingDIV.appendChild(divThreeDays);


        } catch (err) {
            forecatsDIV.style.display = 'block';
            forecatsDIV.textContent = err;
        }
    }
}

attachEvents();
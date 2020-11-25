function attachEvents() {

    const addAngler = document.querySelector('#addForm .angler');
    const addWeight = document.querySelector('#addForm .weight');
    const addSpecies = document.querySelector('#addForm .species');
    const addLocation = document.querySelector('#addForm .location');
    const addBait = document.querySelector('#addForm .bait');
    const addTime = document.querySelector('#addForm .captureTime');

    const loadBtn = document.querySelector('.load');
    const addBtn = document.querySelector('.add');
    const updateBtn = document.querySelector('.update');
    const deleteBtn = document.querySelector('.delete');

    const catchesDIV = document.querySelector('#catches');
    const catchDIV = document.querySelector('.catch');


    addBtn.addEventListener('click', create);
    deleteBtn.addEventListener('click', del);
    loadBtn.addEventListener('click', load);
    updateBtn.addEventListener('click', update);

    async function load() {

        const loadURL = `https://fisher-game.firebaseio.com/catches.json`;

        const loadResp = await fetch(loadURL);

        const loadData = await loadResp.json();



        for (const [key, value] of Object.entries(loadData)) {


            let newDIV = catchDIV.cloneNode(true);
            newDIV.setAttribute('data-id', key)

            let a = newDIV.querySelector('.angler');
            a.value = value.angler;

            let w = newDIV.querySelector('.weight');
            w.value = value.weight;

            let s = newDIV.querySelector('.species');
            s.value = value.species;

            let l = newDIV.querySelector('.location');
            l.value = value.location;

            let b = newDIV.querySelector('.bait');
            b.value = value.bait;

            let c = newDIV.querySelector('.captureTime');
            c.value = value.captureTime;

            let delB = newDIV.querySelector('.delete');
            let upd = newDIV.querySelector('.update');

            delB.addEventListener('click', del);
            upd.addEventListener('click', update);

            catchesDIV.appendChild(newDIV);
        }

        catchDIV.remove();
    }
    async function create() {


        const createURL = `https://fisher-game.firebaseio.com/catches.json`;

        let currentCreateObject = {
            angler: addAngler.value,
            weight: addWeight.value,
            species: addSpecies.value,
            location: addLocation.value,
            bait: addBait.value,
            captureTime: addTime.value
        }

        const createResp = await fetch(createURL, {
            method: "POST",
            body: JSON.stringify(currentCreateObject)
        });

        const createData = await createResp.json();

        addAngler.value = '';
        addWeight.value = '';
        addSpecies.value = '';
        addLocation.value = '';
        addBait.value = '';
        addTime.value = '';
        //console.log(createData);
    }

    async function del(e) {


        const currentItem = e.target.parentElement;

        const catchId = currentItem.getAttribute('data-id');

        const delURL = `https://fisher-game.firebaseio.com/catches/${catchId}.json`;

        const delResp = await fetch(delURL, {
            method: 'DELETE'
        });

        currentItem.remove();
    }

    async function update(e) {


        const current = e.target.parentElement;

        const currentID = current.getAttribute('data-id');


        const updateURL = `https://fisher-game.firebaseio.com/catches/${currentID}.json`;

        let a = current.querySelector('.angler').value;

        let w = current.querySelector('.weight').value;

        let s = current.querySelector('.species').value;

        let l = current.querySelector('.location').value;

        let b = current.querySelector('.bait').value;

        let c = current.querySelector('.captureTime').value;

        let currentObj = {
            angler: a,
            weight: w,
            species: s,
            location: l,
            bait: b,
            captureTime: c
        }

        const updateResp = await fetch(updateURL, {
            method: "PUT",
            body: JSON.stringify(currentObj)
        });

        const dataUpdate = await updateResp.json();


    }

}

attachEvents();
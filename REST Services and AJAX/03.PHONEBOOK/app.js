function attachEvents() {

    const loadBtn = document.querySelector('#btnLoad');
    loadBtn.addEventListener('click', load);

    const createBtn = document.querySelector('#btnCreate');
    createBtn.addEventListener('click', create);

    const personInput = document.querySelector('#person');
    const phoneInput = document.querySelector('#phone');

    const ul = document.querySelector('#phonebook');

    let phoneBook = {

    }

    const url = 'http://localhost:8000/phonebook';

    function load() {

        let allLi = [...ul.childNodes];

        for (const el of allLi) {
            el.remove();
        }
        fetch(url).then(response => response.json()).then(data => {

            for (const [key, value] of Object.entries(data)) {

                let name = value.person;
                let phone = value.phone;

                const li = document.createElement('li');

                const delBtn = document.createElement('button');
                delBtn.textContent = 'Delete';
                delBtn.addEventListener('click', del);

                const content = `${name}: ${phone}`;

                li.textContent = content;
                li.appendChild(delBtn);

                ul.appendChild(li);

                phoneBook[name] = key;
            }


        });
    }

    function create() {

        const person = personInput.value;
        const phone = phoneInput.value;

        fetch(url, {
            method: "POST",
            body: JSON.stringify({ person, phone })
        }).then(response => response.json()).then(response => console.log(response));

    }

    function del(e) {

        const currentUser = e.target;
        const userInfo = currentUser.parentElement.textContent.split(':');

        const currentName = userInfo[0];

        const currentKey = phoneBook[currentName];

        const urlToDel = `http://localhost:8000/phonebook/${currentKey}`;

        fetch(urlToDel, {
            method: "DELETE"
        }).then(response => response.json());

        currentUser.parentElement.remove();
    }
}

attachEvents();
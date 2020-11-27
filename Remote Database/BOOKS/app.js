function solve() {

    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const isbnInput = document.querySelector('#isbn');
    const table = document.querySelector('tbody');
    const editForm = document.querySelector('.edit-form');

    const titleEdit = document.querySelector('#edit-title');
    const authorEdit = document.querySelector('#edit-author');
    const isbnEdit = document.querySelector('#edit-isbn');

    const submiBtn = document.querySelector('.submit');
    submiBtn.addEventListener('click', submitBook);

    const loadBtn = document.querySelector('#loadBooks');
    loadBtn.addEventListener('click', load);

    const editCurrBookBtn = document.querySelector('.edit');
    editCurrBookBtn.addEventListener('click', editCurrentBook);



    function createDOMElement(tag, text, classes) {

        const element = document.createElement(tag);

        if (text) {
            element.textContent = text;
        }

        if (classes) {
            element.classList.add(...classes);
        }

        return element;
    }

    async function submitBook(e) {

        e.preventDefault();

        const urlCreate = `https://firsttest-b88ab.firebaseio.com/books.json`;

        const currentBookCreate = {

            title: titleInput.value,
            author: authorInput.value,
            isbn: isbnInput.value
        }


        try {
            const createResp = await fetch(urlCreate, {
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
                body: JSON.stringify(currentBookCreate)
            });

            const createData = await createResp.json();
        } catch (err) {
            alert(err);
        }


        titleInput.value = '';
        authorInput.value = '';
        isbnInput.value = '';

        load();

    }

    async function load() {

        table.textContent = '';

        const urlLoad = `https://firsttest-b88ab.firebaseio.com/books.json`;

        const loadResp = await fetch(urlLoad);

        const loadData = await loadResp.json();

        for (const [key, value] of Object.entries(loadData)) {

            const tr = createDOMElement('tr');
            tr.setAttribute('data-id', key);

            const td1 = createDOMElement('td', value.title);
            const td2 = createDOMElement('td', value.author);
            const td3 = createDOMElement('td', value.isbn);
            const td4 = createDOMElement('td');

            const delBtn = createDOMElement('button', 'Delete');
            delBtn.addEventListener('click', del);
            const editBtn = createDOMElement('button', 'Edit');
            editBtn.addEventListener('click', edit);

            td4.appendChild(editBtn);
            td4.appendChild(delBtn);

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);

            table.appendChild(tr);
        }


    }

    async function del(e) {

        const currentRow = e.target.parentElement.parentElement;

        const delID = currentRow.getAttribute('data-id');


        const delURL = `https://firsttest-b88ab.firebaseio.com/books/${delID}.json`;

        const delResp = await fetch(delURL, {
            method: "DELETE"
        });

        load();
    }

    async function edit(e) {

        const currentRow = e.target.parentElement.parentElement;

        const ID = currentRow.getAttribute('data-id');


        const editURL = `https://firsttest-b88ab.firebaseio.com/books/${ID}.json`;

        const editResp = await fetch(editURL);

        const editData = await editResp.json();

        titleEdit.value = editData.title;
        authorEdit.value = editData.author;
        isbnEdit.value = editData.isbn;

        editForm.setAttribute('data-id', ID);

        editForm.style.display = 'block';




    }

    async function editCurrentBook(e) {

        e.preventDefault();

        const formID = editForm.getAttribute('data-id');


        const patchURL = `https://firsttest-b88ab.firebaseio.com/books/${formID}.json`;

        const patchObj = {
            title: titleEdit.value,
            author: authorEdit.value,
            isbn: isbnEdit.value
        }
        const editBookResp = await fetch(patchURL, {
            method: "PATCH",
            body: JSON.stringify(patchObj)
        });

        const patchData = await editBookResp.json();

        load();

        editForm.style.display = 'none';
    }



}
solve();
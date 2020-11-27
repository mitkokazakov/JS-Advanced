function events() {

    const tableStudents = document.querySelector('#content');
    const firstName = document.querySelector('#first-name');
    const lastName = document.querySelector('#last-name');
    const facultyNumber = document.querySelector('#faculty-number');
    const grade = document.querySelector('#grade');

    const addBtn = document.querySelector('#add-student');
    addBtn.addEventListener('click', addStudent);

    const loadBtn = document.querySelector('#load');
    loadBtn.addEventListener('click', displayStudents);

    let counter = 0;

    const url = `https://students-df704.firebaseio.com/Students.json`;

    function appendChildElements(elements, parent) {

        for (const el of elements) {
            parent.appendChild(el);
        }

    }

    function createDOM(tag, text, classes) {

        const element = document.createElement(tag);

        if (text) {
            element.textContent = text;
        }

        if (classes) {
            element.classList.add(...classes);
        }

        return element;

    }

    async function addStudent(e) {

        counter++;
        e.preventDefault();



        const currentStudent = {
            FirstName: firstName.value,
            LastName: lastName.value,
            FacultyNumber: facultyNumber.value,
            Grade: grade.value,
            ID: counter
        }

        const addResp = await fetch(url, {
            method: "POST",
            body: JSON.stringify(currentStudent)
        });

        const addData = addResp.json();

        firstName.value = '';
        lastName.value = '';
        facultyNumber.value = '';
        grade.value = '';


    }

    async function displayStudents() {

        tableStudents.textContent = '';

        const loadResp = await fetch(url);

        const loadData = await loadResp.json();

        for (const [key, value] of Object.entries(loadData)) {

            const tr = createDOM('tr');

            const td = createDOM('td', value.ID);
            const td1 = createDOM('td', value.FirstName);
            const td2 = createDOM('td', value.LastName);
            const td3 = createDOM('td', value.FacultyNumber);
            const td4 = createDOM('td', value.Grade);

            appendChildElements([td, td1, td2, td3, td4], tr);

            tableStudents.appendChild(tr);
        }
    }

}

events();
function attachEvents() {

    const result = document.querySelector('#messages');
    const nameInput = document.querySelector('#author');
    const messageInput = document.querySelector('#content');
    const submitBtn = document.querySelector('#submit');
    const refreshBtn = document.querySelector('#refresh');

    submitBtn.addEventListener('click', submit);
    refreshBtn.addEventListener('click', refresh);


    const url = `http://localhost:8000/messenger`;

    function submit() {

        const author = nameInput.value;
        const message = messageInput.value;

        let currentObject = {};
        currentObject['author'] = author;
        currentObject['content'] = message;

        fetch(url, {
            method: "POST",
            body: JSON.stringify(currentObject)
        }).then(resp => resp.json())

        nameInput.value = '';
        messageInput.value = '';

    }

    function refresh() {

        result.textContent = '';

        fetch(url).then(resp => resp.json()).then(data => {

            for (const [key, value] of Object.entries(data)) {

                const currentAuthor = value.author;
                const currentMessage = value.content;

                const output = `${currentAuthor}:${currentMessage}\n`;

                result.textContent += output;

            }

        })
    }
}

attachEvents();
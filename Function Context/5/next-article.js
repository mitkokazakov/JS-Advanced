function getArticleGenerator(articles) {

    const button = document.querySelector('button');
    const div = document.querySelector('#content');

    button.addEventListener('click', showNext);

    function showNext(){
        if(articles.length > 0){
            let newDiv = document.createElement('article');
            newDiv.textContent = articles.shift();
            div.appendChild(newDiv);
        }
    }

    return showNext;
}

function create(words) {
   
   const mainDiv = document.querySelector('#content');

   for (const word of words) {
      
      let newDiv = document.createElement('div');
      //newDiv.style.backgroundColor = 'blue';
      newDiv.addEventListener('click', click);

      let innderParagraph = document.createElement('p');
      innderParagraph.textContent = word;
      innderParagraph.style.display = 'none';

      newDiv.appendChild(innderParagraph);
      mainDiv.appendChild(newDiv);


   }

   function click(e){

      let currentDiv = e.target;
      let childParagraph = currentDiv.children[0];
      childParagraph.style.display = 'block';
   }

}
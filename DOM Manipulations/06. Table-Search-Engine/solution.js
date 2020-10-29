function solve() {

   const button = document.querySelector('#searchBtn');
   button.addEventListener('click', onClick);

   const searchElement = document.querySelector('#searchField');

   const allRows = Array.from(document.querySelector('tbody').querySelectorAll('tr'));

   function onClick(){

      const value = searchElement.value.trim().toLocaleLowerCase();

      for (const row of allRows) {
         row.classList.remove('select');
      }

      const allTds = Array.from(document.querySelector('tbody').querySelectorAll('td'));

      for (const td of allTds) {
         if(td.textContent.trim().toLocaleLowerCase().includes(value)){
            td.parentNode.classList.add('select');
         }
      }

      searchElement.value = '';
   }
}
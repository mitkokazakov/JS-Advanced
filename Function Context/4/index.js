function solve() {

   const tbody = document.querySelector('tbody');
   let allRowsInBody = [...document.querySelectorAll('tbody > tr')];

   tbody.addEventListener('click', onCLick);

   function onCLick(e) {

      const currentRow = e.target.parentNode;

      if(currentRow.style.backgroundColor !== ''){
         currentRow.style.backgroundColor = '';
      }
      else{
         for (let row of allRowsInBody) {

            row.style.backgroundColor = '';
         }
         currentRow.style.backgroundColor = '#413f5e';
      }

      

      

   }

}



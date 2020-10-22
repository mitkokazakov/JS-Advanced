function solve() {
   
   let textArea = document.querySelector('textarea');
   let addButtons = Array.from(document.getElementsByClassName('add-product'));
   const checkOutButn = document.querySelector('.checkout');

   

   for (const btn of addButtons) {
      btn.addEventListener('click', addProduct);
   }

   checkOutButn.addEventListener('click', purchase);

   let totalMoney = 0;
   let setProducts = new Set();

   function addProduct(e){

      const currentAdd = e.target;
      const parentDiv = currentAdd.parentNode.parentNode;
      const nameProduct = parentDiv.querySelector('.product-title').textContent;
      const price = parentDiv.querySelector('.product-line-price').textContent;

      totalMoney += Number(price);
      setProducts.add(nameProduct);

      let currentOut = `Added ${nameProduct} for ${price} to the cart.\n`;
      textArea.textContent += currentOut;
   }

   function purchase(){

      for (const btn of addButtons) {
         btn.disabled = true;
      }
   
      const arr = Array.from(setProducts);
      const result = `You bought ${arr.join(', ')} for ${totalMoney.toFixed(2)}.`;
      textArea.textContent += result;
      checkOutButn.disabled = true;
      
   }
}
function solve() {
   
   const sendButton = document.querySelector('#send');
   sendButton.addEventListener('click',onClick);

   const chatMessagesDIV = document.querySelector('#chat_messages');

   function onClick(){

      const inputElement = document.querySelector('#chat_input');

      const currentMessage = inputElement.value;

      const newDIV = document.createElement('div');
      newDIV.className = 'message my-message';
      newDIV.textContent = currentMessage;

      chatMessagesDIV.appendChild(newDIV);
      inputElement.value = '';
      
   }
}



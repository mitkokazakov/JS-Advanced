function notify(message) {
    
    const notificationDiv = document.querySelector('#notification');

    notificationDiv.textContent = message;

    notificationDiv.style.display = 'block';

    setTimeout(() => {
        notificationDiv.style.display = 'none'
    }, 2000);
}
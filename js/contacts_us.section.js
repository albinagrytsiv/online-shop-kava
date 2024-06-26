const button =document.createElement('button');
button.textContent = 'Go home';
button.className = 'my-button-class';
button.style.color = 'rgb(255, 251, 251)';
button.style.background = 'grey';
    button.addEventListener('click', function() {
        window.location.href = "index.html";
    });

    const buttonContainer = document.getElementById('buttonContainer');
    buttonContainer.appendChild(button);

    
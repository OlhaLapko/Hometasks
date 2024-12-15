const contText = document.createElement('div');
contText.id = 'text';
contText.textContent = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

contText.style.color = 'red';
contText.style.fontSize = '20px';

document.body.appendChild(contText);

const button = document.createElement('button');
button.id = 'btn';
button.textContent = 'Click Me!';
document.body.appendChild(button);

let changeColor = true;
button.addEventListener('click', function () {
    if (changeColor) {
        contText.style.color = 'green';
    }else{
        contText.style.color = 'red';
    }
    changeColor = false;
})
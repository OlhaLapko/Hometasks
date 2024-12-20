const btnContainer = document.getElementById('btnContainer');
btnContainer.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON'){
        console.log(`You clicked ${event.target.textContent}`)
    }
})
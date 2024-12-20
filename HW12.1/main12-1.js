let newUrl = '';
document.getElementById('butContainer').addEventListener('click', function(event) {
    if (event.target.id === 'UrlBtn'){
        newUrl = prompt('Please enter a URL');
        if (newUrl) {
            document.getElementById('newBtn').disabled = false;
        }
    } else if (event.target.id === 'newBtn'){
        if (newUrl) {
            window.location.href = newUrl;
        }
    }
});

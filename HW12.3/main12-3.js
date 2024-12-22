const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('list');


addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Видалити';
        listItem.appendChild(deleteBtn);
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
});

taskList.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const listItem = event.target.parentElement;
        taskList.removeChild(listItem);
    }
});
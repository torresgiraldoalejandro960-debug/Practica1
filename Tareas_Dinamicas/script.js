const taskInput = document.getElementById('taskInput');
const taskStatus = document.getElementById('taskStatus');
const addButton = document.getElementById('addButton');
const tasksContainer = document.getElementById('tasksContainer');

function getStatusClass(status) {
    switch(status) {
        case 'PENDIENTE':
            return 'pendiente';
        case 'EN PROCESO':
            return 'en-proceso';
        case 'FINALIZADA':
            return 'finalizada';
        default:
            return 'pendiente';
    }
}

function addTask() {
    const taskName = taskInput.value.trim();
    const status = taskStatus.value;
 
    if (taskName === '') {
        alert('Por favor, escribe el nombre de una tarea');
        return;
    }
    
    const taskCard = document.createElement('div');
    taskCard.className = `task-card ${getStatusClass(status)}`;
    
    taskCard.innerHTML = `
        <div class="task-name">${taskName}</div>
        <div class="task-status">${status}</div>
    `;

    tasksContainer.appendChild(taskCard);

    taskInput.value = '';

    taskInput.focus();
}
addButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
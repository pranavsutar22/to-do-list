const taskInput = document.getElementById('task');
const priorityInput = document.getElementById('priority');
const taskList = document.getElementById('taskList');
const addTaskButton = document.getElementById('addTask');


let tasks = [];


function addTask() {
    const task = taskInput.value.trim();
    const priority = priorityInput.value;

    if (task) {

        tasks.push({ task, priority });

        tasks.sort((a, b) => {
            const priorities = { high: 1, medium: 2, low: 3 };
            return priorities[a.priority] - priorities[b.priority];
        });

        renderTasks();
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
}


function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach((taskObj) => {
        const li = document.createElement('li');
        li.classList.add('list-group-item', taskObj.priority);

        li.innerHTML = `${taskObj.task} <span class="badge badge-light">${taskObj.priority.charAt(0).toUpperCase() + taskObj.priority.slice(1)} Priority</span>`;

        taskList.appendChild(li);
    });
}


addTaskButton.addEventListener('click', addTask);
// Select DOM elements
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to display tasks
function displayTasks() {
    taskList.innerHTML = ''; // Clear the list before re-rendering

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.classList.toggle('completed', task.completed);

        li.innerHTML = `
            <span class="task-text">${task.text}</span>
            <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
            <button class="complete-btn" onclick="toggleComplete(${index})">Complete</button>
        `;

        taskList.appendChild(li);
    });
}

// Add task
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = ''; // Clear the input field
        saveTasks();
        displayTasks();
    }
});

// Toggle task completion
function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    displayTasks();
}

// Delete task
function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    displayTasks();
}

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Initial display of tasks
displayTasks();

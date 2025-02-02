// Wait for the DOM to load before executing the script
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get the task text from the input field
        const taskText = taskInput.value.trim();
        
        // If the task is not empty
        if (taskText !== "") {
            // Create a new list item
            const newTask = document.createElement('li');
            newTask.textContent = taskText;
            
            // Create a remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-btn');
            
            // Remove task when remove button is clicked
            removeButton.addEventListener('click', () => {
                taskList.removeChild(newTask);
            });

            // Append the remove button to the list item
            newTask.appendChild(removeButton);

            // Append the new task to the task list
            taskList.appendChild(newTask);
            
            // Clear the input field
            taskInput.value = '';
        } else {
            // Prompt the user to enter a task if the input is empty
            alert('Please enter a task!');
        }
    }

    // Add task when the "Add Task" button is clicked
    addButton.addEventListener('click', addTask);

    // Add task when the "Enter" key is pressed in the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

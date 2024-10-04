function addTask() {
    let taskInput = document.getElementById('taskInput').value;
    
    if (taskInput === '') {
        alert('Please enter a task!');
        return;
    }
    
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.textContent = taskInput;
    
    
    let updateButton = document.createElement('button');
    updateButton.textContent = 'Update';
    updateButton.onclick = function() {
        let newTask = prompt('Update your task:', span.textContent);
        if (newTask) {
            span.textContent = newTask;
        }
    };

    
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(updateButton);
    li.appendChild(deleteButton);
    
    document.getElementById('taskList').appendChild(li);
    document.getElementById('taskInput').value = ''; 
}
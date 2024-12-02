document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  const taskList = document.getElementById('taskList');
  const taskItem = document.createElement('li');
  taskItem.classList.add('task');

  const taskContent = document.createElement('span');
  taskContent.textContent = taskText;
  taskContent.addEventListener('click', () => toggleComplete(taskItem));

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => deleteTask(taskItem));

  taskItem.appendChild(taskContent);
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);

  taskInput.value = '';
}

function toggleComplete(taskItem) {
  taskItem.classList.toggle('completed');
}

function deleteTask(taskItem) {
  taskItem.remove();
}

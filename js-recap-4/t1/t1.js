// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here

function addListItem(item, listElement, todoList) {
  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = `todo- ${item.id}`;
  checkbox.checked = item.completed;

  // Update the todoList when a task's completion status changes
  checkbox.addEventListener('change', () => {
    todoList.find((todo) => todo.id === item.id).completed = checkbox.checked;
  });
  li.appendChild(checkbox);

  const label = document.createElement('label');
  label.htmlFor = `todo- ${item.id}`;
  label.textContent = item.task;
  li.appendChild(label);

  // Add a delete button to each task
  const deletebutton = document.createElement('button');
  deletebutton.textContent = 'Delete';
  deletebutton.addEventListener('click', () => {
    todoList.splice(
      todoList.findIndex((todo) => todo.id === item.id),
      1
    );
    listElement.removeChild(li);
  });
  li.appendChild(deletebutton);

  listElement.appendChild(li);
}

const listElement = document.querySelector('ul');
todoList.forEach((item) => {
  addListItem(item, listElement, todoList);
});

// Show the dialog to add a new task
document.querySelector('.add-btn').addEventListener('click', () => {
  document.querySelector('dialog').showModal();
});

// Add a new task to the todoList and the listElement
document.querySelector('form button').addEventListener('click', (event) => {
  event.preventDefault();
  const text = document.querySelector('form input').value;
  if (text === '') return;
  const id = todoList.length + 1;

  const task = {
    id: id,
    task: text,
    completed: false,
  };

  todoList.push(task);
  addListItem(task, listElement, todoList);

  document.querySelector('dialog').close();
});

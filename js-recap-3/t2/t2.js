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
const target = document.querySelector('ul');
todoList.forEach((item) => {
  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = `todo- ${item.id}`;
  checkbox.checked = item.completed;
  li.appendChild(checkbox);

  const label = document.createElement('label');
  label.htmlFor = `todo- ${item.id}`;
  label.textContent = item.task;
  li.appendChild(label);

  target.appendChild(li);
});

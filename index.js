alert("Assalomu alaykum ");
alert("Dasturimizga xush kelibsiz ! ");
const addButton = document.querySelector('.buttons button'); 
const taskList = document.querySelector('.task-list');
const taskNameInput = document.querySelector('input[type="text"]');
const levelSelect = document.querySelector('.levels');
const categoriesInput = document.querySelector('.categories');
const descriptionInput = document.querySelector('.description');

addButton.addEventListener('click', () => {
    const taskName = taskNameInput.value.trim();
    const level = levelSelect.value;
    const categories = categoriesInput.value.trim();
    const description = descriptionInput.value.trim();

    if (!taskName || !level || !categories || !description) {
        alert("Bo'sh maydonni to'ldiring ! ");
        return;
    }

    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `
        <h4>${taskName} <span>[${level}]</span></h4>
        <p><strong>Categories:</strong> ${categories}</p>
        <p><strong>Description:</strong> ${description}</p>
    `;

    taskList.appendChild(taskItem);

    taskNameInput.value = '';
    categoriesInput.value = '';
    descriptionInput.value = '';
});
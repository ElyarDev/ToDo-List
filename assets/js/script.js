// SELECT ELEMENTS
const input = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addBtn');
const taskList = document.querySelector('#taskList');

let tasks = [];

// ADD NEW TASK
addBtn.addEventListener('click', function () {
    if (input.value.trim() === '') {
        alert('EMPTY');
        return;
    };

    tasks.push({
        text: input.value,
        status: 'new',
    })

    saveToLocal();

    input.value = '';
})

// SAVE TO LOCAL STORAGE
function saveToLocal() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
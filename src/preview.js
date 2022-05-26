
var toDoList = []
const previewPage = document.querySelector('.preview-content')
const mainPreviewPage = document.querySelector('.to-do-preview')

export function createInboxPreview() {
    const inboxContainer = document.createElement('p')
    inboxContainer.classList.add('inbox-content')
    inboxContainer.innerText = "Inbox"
    const addTaskButton = document.createElement('button')
    addTaskButton.classList.add('inbox-add-task-button')
    addTaskButton.innerText = '➕ Add Task'
    addTaskButton.addEventListener('click', () => {
        createAddCancelButtons()
        addTaskButton.classList.add('hideme')
    })

    previewPage.appendChild(inboxContainer)
    previewPage.appendChild(addTaskButton)
    createInboxTask()
}

export function createAddCancelButtons() {
    const taskPopupButtons = document.createElement('div')
    taskPopupButtons.classList.add('task-popup-buttons')

    const taskInput = document.createElement('input')
    taskInput.classList.add('task-input')

    const addCancelTaskContainer = document.createElement('div')
    addCancelTaskContainer.classList.add('add-cancel-task-button-container')
    const addTaskToListButton = document.createElement('button')
    addTaskToListButton.classList.add('add-button')
    addTaskToListButton.innerText = "Add"
    addTaskToListButton.addEventListener('click', () => {
        if (taskInput.value != '') {
            //how to make this more universal instead of just inbox to do list
            toDoList.push(taskInput.value)
            const addTaskButton2 = document.querySelector('.inbox-add-task-button')
            addTaskButton2.classList.remove('hideme')
            taskInput.value = '';
            taskPopupButtons.remove();
            createInboxTask()
        } else {
            alert('Do not leave empty')
        };
    })
    const cancelTaskToListButton = document.createElement('button')
    cancelTaskToListButton.classList.add('cancel-button')
    cancelTaskToListButton.innerText = "Cancel"
    cancelTaskToListButton.addEventListener('click', () => {
        const addTaskButton2 = document.querySelector('.inbox-add-task-button')
        addTaskButton2.classList.remove('hideme')
        taskPopupButtons.remove();
    })

    previewPage.appendChild(taskPopupButtons)
    addCancelTaskContainer.appendChild(addTaskToListButton)
    addCancelTaskContainer.appendChild(cancelTaskToListButton)
    taskPopupButtons.appendChild(taskInput)
    taskPopupButtons.appendChild(addCancelTaskContainer)
}

function createInboxTask() {
    const taskList = document.querySelector('.task-list')
    taskList.innerHTML = '';
    toDoList.forEach(element => {
        const singleTaskContainer = document.createElement('div')
        singleTaskContainer.classList.add('single-task-container')
        const taskCheckbox = document.createElement('input')
        taskCheckbox.type = 'checkbox'
        const taskCheckboxLabel = document.createElement('label')
        taskCheckboxLabel.innerText = element;
        taskCheckboxLabel.setAttribute('for', 'checkbox')
        taskCheckbox.setAttribute('id', 'checkbox')
        taskList.appendChild(singleTaskContainer)
        singleTaskContainer.appendChild(taskCheckbox)
        singleTaskContainer.appendChild(taskCheckboxLabel)
        taskCheckbox.addEventListener('change', () => {
            if (taskCheckbox.checked) {
                singleTaskContainer.remove();
                console.log(toDoList)
                for (var i = 0; i < toDoList.length; i++) {
                    if (element == toDoList[i]) {
                        toDoList.splice(i, 1)
                    }
                }
            }
        })
    })
}



const addProjectButton = document.querySelector('.add-project')
const addInputContainer = document.querySelector('.add-input-container')
const addedProjectTab = document.querySelector('.added-projects')
const previewPage = document.querySelector('.preview-content')
const taskList = document.querySelector('.task-list')


var projectInputs = []

export function addProjectInput() {
    addProjectButton.classList.remove('popup')
    addInputContainer.classList.remove('active')
    const input = document.getElementById('project-input')
    projectInputs.push(input.value)
    createFunctionList();
    console.log(projectInputs)
};

function createFunctionList() {
    addedProjectTab.innerHTML = '';
    projectInputs.forEach(element => {
        var projectArray = [];
        //create an array for each item in an array
        //create an object with a constructor that stores an array
        const checklistImage = document.createElement('img')
        checklistImage.src = 'checklist-svgrepo-com.svg'
        const newProjectContainer = document.createElement('div')
        newProjectContainer.classList.add('button-project')
        const newProject = document.createElement('button')
        newProject.classList.add('added-project-button')
        newProject.innerText = element
        addedProjectTab.appendChild(newProjectContainer)
        newProjectContainer.appendChild(checklistImage)
        newProjectContainer.appendChild(newProject)
        newProject.addEventListener('click', () => {
            createProjectOnPreview(element, projectArray)
        })
    })
}


function createProjectOnPreview(projectName, testing123) {
    previewPage.innerHTML = '';
    taskList.innerHTML = '';    
    const projectContainer = document.createElement('p')
    projectContainer.classList.add('project-content')
    projectContainer.innerText = projectName
    const addTaskButton = document.createElement('button')
    addTaskButton.classList.add('inbox-add-task-button')
    addTaskButton.innerText = '➕ Add Task'
    addTaskButton.addEventListener('click', () => {
        createAddCancelButtonsProjectSide(testing123)
        addTaskButton.classList.add('hideme')
        })
    

    previewPage.appendChild(projectContainer)
    previewPage.appendChild(addTaskButton)
    createProjectTask(testing123)
}

// Modify the existing function to create individual to do tasks for each projects instead of the one from inbox
function createAddCancelButtonsProjectSide(IndividualProjectTask2) {
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
            IndividualProjectTask2.push(taskInput.value)
            const addTaskButton2 = document.querySelector('.inbox-add-task-button')
            addTaskButton2.classList.remove('hideme')
            taskInput.value = '';
            taskPopupButtons.remove();
            createProjectTask(IndividualProjectTask2)
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

function createProjectTask(testing44) {
    const taskList = document.querySelector('.task-list')
    taskList.innerHTML = '';
    testing44.forEach(element => {
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
                        testing44.splice(i, 1)
                    }
                }
            }
        })
    })
}

const addProjectButton = document.querySelector('.add-project')
const addInputContainer = document.querySelector('.add-input-container')
const cancelAddInputButton = document.querySelector('.cancel-button')

export function addProjectPopup() {
    addProjectButton.classList.add('popup')
    addInputContainer.classList.add('active')
    const input = document.getElementById('project-input')
    input.value = "";
    input.focus();
}

export function cancelAddInputPopup() {
    addProjectButton.classList.remove('popup')
    addInputContainer.classList.remove('active')
    input.value = '';
}


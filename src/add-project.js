const addProjectButton = document.querySelector('.add-project')
const addInputContainer = document.querySelector('.add-input-container')
const cancelAddInputButton = document.querySelector('.cancel-button')

export function addProjectPopup() {
    addProjectButton.classList.add('popup')
    addInputContainer.classList.add('active')
}

export function cancelAddInputPopup() {
    addProjectButton.classList.remove('popup')
    addInputContainer.classList.remove('active')
}
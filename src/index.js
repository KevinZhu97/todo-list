import './styles.css';
import { addProjectPopup, cancelAddInputPopup } from './add-project.js'
import { addProjectInput } from './save-inputs.js'
import { createInboxPreview } from './preview.js'

//when clicking add project, should get a pop up
const addProjectButton = document.querySelector('.add-project')
const cancelAddInputButton = document.querySelector('.cancel-button')
const addInputButton = document.querySelector('.add-button')
const inboxButton = document.querySelector('.inbox')
const previewPage = document.querySelector('.preview-content')

cancelAddInputButton.addEventListener('click', () => {
    cancelAddInputPopup();
});

addProjectButton.addEventListener('click', () => {
    addProjectPopup();
});

addInputButton.addEventListener('click', () => {
    addProjectInput(); 
})

inboxButton.addEventListener('click', () => {
    previewPage.innerHTML = '';
    createInboxPreview();
})


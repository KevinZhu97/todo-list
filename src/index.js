import './styles.css';
import { addProjectPopup, cancelAddInputPopup } from './add-project.js'

//when clicking add project, should get a pop up
const addProjectButton = document.querySelector('.add-project')
const cancelAddInputButton = document.querySelector('.cancel-button')

cancelAddInputButton.addEventListener('click', () => {
    cancelAddInputPopup();
});

addProjectButton.addEventListener('click', () => {
    addProjectPopup();
});
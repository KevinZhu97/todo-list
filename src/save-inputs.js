const addProjectButton = document.querySelector('.add-project')
const addInputContainer = document.querySelector('.add-input-container')
const addedProjectTab = document.querySelector('.added-projects')

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
        
    })
}
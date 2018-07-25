//Define UI variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearButton = document.querySelector('.clear-tasks'); 
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

loadEventListeners();

function loadEventListeners(){
    //add tasks event
    form.addEventListener('submit', addTask);

    //remove task event
    taskList.addEventListener('click', removeTask);

    //clear task event
    clearButton.addEventListener('click', clearTasks);

    //filter task event
    filter.addEventListener('keyup', filterTasks); 


}

//filter tasks

function filterTasks(e){ //e maybe eventlistener 
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'list-item'; //use list-item if you dont want to loose ur numering!!!!!!!!!!!!!!!!!!!!1

        }else {
            task.style.display = 'none';
        }
    });
}
//remove task 
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('are you sure?')) {
            e.target.parentElement.parentElement.remove();
        } 
    }
}

//clear task
function clearTasks() {
    taskList.innerHTML = '';
}

// add task
function addTask(e){ //add required fields
    if(taskInput.value === ''){
        alert('Add a task'); 
    }

    //create a list to store new tasks 
    const userNewList = document.createElement('li');
    userNewList.className = 'collection-item';
    // create text node and append new text to new task list 
    userNewList.appendChild(document.createTextNode(taskInput.value));

    // create Delete icon
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    // add delete icon  
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append the delete icon to the new list 
    userNewList.appendChild(link);

    //append new tasks to a list 
    taskList.appendChild(userNewList);

    //clear input
    taskInput.value = '';

    e.preventDefault();
}


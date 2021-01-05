//Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector("#task");


//load all event Listener
loadEventListeners();


function loadEventListeners(){
    //Add Task Event 
    form.addEventListener('submit',addTask);
}


function addTask(e){
    if(taskInput.value === '')
    {
        alert('Add the task');
    }
    else
    {
        //Create li elements
    const li = document.createElement('li');
    //Add Class
    li.className = 'collection-item';
   //Create text node and apppend to li
   li.appendChild(document.createTextNode(taskInput.value));
   // Create new Link Element  
   const link = document.createElement('a');
   //Add Class
   link.className = 'delete-item secondary-content';
   // Add icon html
   link.innerHTML='<i class="fa fa-remove"></i>';
   //Add a link to li
   li.appendChild(link);

   //Append li to ul
   console.log(li);
   taskList.appendChild(li);
    }
   //clear input
   taskInput.value = '';

    e.preventDefault(e);
}
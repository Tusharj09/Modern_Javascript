//Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector("#task");


//load all event Listener
loadEventListeners();

function loadEventListeners(){

    //DOM load Event
    document.addEventListener('DOMContentLoaded',getTasks);

    //Add Task Event 
    form.addEventListener('submit',addTask);

    // remove task Event
    taskList.addEventListener('click',removeTask);

    //claer task event 
    clearBtn.addEventListener('click',clearTask);

    //filter task events
    filter.addEventListener('keyup',filterTasks);

}

// Get item from Local Storage 
function getTasks(){
 let tasks;
    if(localStorage.getItem('tasks')== null)
    {
        tasks = [];
    }
    else
    {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function (task)
    {
        const li = document.createElement('li');
        //Add Class
        li.className = 'collection-item';
        //Create text node and apppend to li
        li.appendChild(document.createTextNode(task));
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
    );

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

    //store in LS
   storeTaskInLocalStorage(taskInput.value);

   //clear input
   taskInput.value = '';

    e.preventDefault(e);
}

function storeTaskInLocalStorage(task)
{
    let tasks;
    if(localStorage.getItem('tasks')==null) {
        tasks =[];
    }
    else {
        tasks =JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}


function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item'))
  {
      if(confirm("Are you sure")){
        e.target.parentElement.parentElement.remove();

        removeTasksFromLocalStorage(e.target.parentElement.parentElement);       
    }
  }
  
}

function removeTasksFromLocalStorage(taskItem)
{
    console.log(taskItem);
    let tasks;
    if(localStorage.getItem('tasks')=== null)
    {
        tasks = [];
    }
    else
    {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach((task,index) => {
       if( taskItem.textContent === task)
       tasks.splice(index,1);   
    });

    localStorage.setItem('tasks',JSON.stringify(tasks));


}

function clearTask(){

    //taskList.innerHTML = '';
    
    //faster
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild)   ;


    }

}


function filterTasks(e){
const text = e.target.value.toLowerCase();
console.log(text);
document.querySelectorAll('.collection-item').forEach(
    function(task){
        const item = task.firstChild.textContent;
       
        if(item.toLowerCase().indexOf(text) !=-1)
        {
            task.style.display ='block';

        }
        else
        {
            task.style.display ='none';
        }       

    }

);

}
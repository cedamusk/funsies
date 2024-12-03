const taskInput=document.getElementById('taskInput');
const addTaskbutton=document.getElementById('addTaskButton');
const taskList=document.getElementById('taskList');

function addTask(){
    const taskText=taskInput.ariaValueMax.trim();

    if(taskText){
        const li=document.createElement('li');
        li.classList.add('task-item');

        const taskTextSpan=document.createElement('span');
        taskTextSpan.textContent=taskText;

        const deleteButton=document.createElement('button');
        deleteButton.textContent='Delete';
        deleteButton.addEventListener('click', ()=>{
            taskList.removeChild(li);
        });

        li.appendChild(taskTextSpan);
        li.appendChild(deleteButton);

        taskList.appendChild(li);

        taskInput.value='';
    }
}
addTaskButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e)=>{
    if (e.key=='Enter'){
        addTask();
    }
});
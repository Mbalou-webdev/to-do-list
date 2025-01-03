function validateForm(){
    const taskInput = document.getElementById('task');
    const taskListe = document.getElementById('task-list');
    const newTask = document.createElement('li')
    const taskText = taskInput.value;

    newTask.innerText = taskText;

    const completedBoutton = document.createElement('button');
    completedBoutton.textContent = 'confirmer';
    completedBoutton.onclick = function(){
     taskListe.classList.toggle(newTask);
            };
            newTask.appendChild(completedBoutton);


            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Supprimer';
            deleteButton.onclick = function(){
                taskListe.removeChild(newTask);
            };
            newTask.appendChild(deleteButton);
            taskListe.appendChild (newTask);
            taskInput.value = '';
        }
    

 

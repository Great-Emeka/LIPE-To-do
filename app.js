//All my selectors goes here:
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
const dateElement = document.getElementById('date');

//Event Listeners:
todoButton.addEventListener("click", addTodo);
// todoList.addEventListener('click', editList);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);


//SHOW DATE
let options = {weekday: "long", month: "short", day:"numeric"};
let today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-Us", options);


//FUNCTIONS:

//A function to Add a new Todo List
function addTodo(event) {
    //To prevent the form from submitting we do
    event.preventDefault();
    
    //Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);


    //Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //Edit button
    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="fa fa-edit" title="Edit"></i>'
    editButton.classList.add('edit-btn');
    todoDiv.appendChild(editButton);

    //Check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Validating input
    let inputValue = todoInput.value;
	if (inputValue === '') {
        alert('Please enter a todo!');
        return;
    } 
    
    //But if There is a value in the input,
    todoList.appendChild(todoDiv);

    //Clear Todo Input value
    todoInput.value = "";
};

//A function to Delete an added Todo List
function deleteCheck(e){
    const item = e.target;
    //Delete TODO
    if (item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.remove();
    };

    //CHECK MARK BTN
    if (item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
};

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach( (todo) => {
        switch(e.target.value){
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
            }
                break;
            
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
            }
                break;
        }
    });
};



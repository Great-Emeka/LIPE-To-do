//All my selectors goes here:
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners:
todoButton.addEventListener("click", addTodo);
todoList.addEventListener('click', deleteCheck);


//Functions

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

    //Check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Appending to List
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
    }
}
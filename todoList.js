//Function to toggle cross the item
var toggleCheck = function(){
     let parent = this.parentNode;
     parent.classList.toggle('checked');
};

//Function to delete item
const deleteTodo = function() {
    let todoLi = this.parentNode;
    todoLi.remove();
};
var createTodo = function(todo) {
    let ul = document.getElementById('todoList');

    let li = document.createElement('li');

    let label = document.createElement('label');
    label.innerHTML = todo;
  
    let checkbox = document.createElement('input');
     checkbox.type = "checkbox";
    //onclick function toggleCheck()
    checkbox.onclick = toggleCheck;

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = "Delete";
    //call function deleteTodo() to delete the item
    deleteButton.onclick = deleteTodo;


    //nest todo elements in list item
    li.appendChild(checkbox); 
    li.appendChild(label);
    li.appendChild(deleteButton);
    
    ul.appendChild(li)
}

document.getElementById('add').addEventListener('click', addTodo);

function addTodo(){
    var parent = this.parentNode;
    // store the input, which is the *first* child element of the .addTodo <div>
    var addTextInput = parent.children[0];
    if(addTextInput.value === "") {
    return;
    } else {
        //add todo
        createTodo(addTextInput.value);
        //reset input 
        addTextInput.value = "";
    }
};
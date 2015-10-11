/**
 * Created by acer on 19.09.2015.
 */
function onAddToDoClicked () {
    addToDoToUl();
    document.getElementById('todo_input').value = '';
}

function addToDoToUl () {
    var new_todo = newToDo();
    document.getElementById('posts').appendChild(new_todo);
}

function createDeleteButton () {
    var delButton = document.createElement("button");
    delButton.onclick = function() {
        removeToDo(delButton);
    };
    delButton.innerHTML = "x";
    return delButton;
}

function newToDo () {
    var deleteButton = createDeleteButton();
    var text = document.getElementById('todo_input').value;
    var new_li = document.createElement("li");
    var new_span = document.createElement("span");
    new_span.innerHTML = text;

    new_li.appendChild(new_span);
    new_li.appendChild(deleteButton);

    return new_li;
}

/*function removeToDo (button_id) {

    var parent = document.getElementById('button_id');
    parent.parentNode.removeChild(parent);
    // Removes a Todo (remove parent node)
}*/

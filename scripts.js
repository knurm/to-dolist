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

function createDeleteButton (new_li) {
    var delButton = document.createElement("button");
    delButton.onclick = function() {
        removeToDo(new_li);
    };
    delButton.innerHTML = "x";
    return delButton;
}

function newToDo () {
    var text = document.getElementById('todo_input').value;
    var new_li = document.createElement("li");
    var deleteButton = createDeleteButton(new_li);
    var new_span = document.createElement("span");
    new_span.innerHTML = text;

    new_li.appendChild(new_span);
    new_li.appendChild(deleteButton);

    return new_li;
}

function removeToDo (li) {
    li.parentNode.removeChild(li);
}

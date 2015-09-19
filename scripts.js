/**
 * Created by acer on 19.09.2015.
 */
function addThing () {
    var post = document.getElementById('todo_input').value;
    document.getElementById('posts').innerHTML = post;
    //('<li>').text(post).prependTo('#posts');
    ('#todo_input').value = '';
}
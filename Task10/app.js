const btn = document.getElementById('addTodo');
const todocon = document.getElementById('todosContain');
const inputf = document.getElementById('inputField');

btn.addEventListener("click", function(){
    let para = document.createElement('para1');
    para.classList.add('paragraph');
    para.innerHTML = inputf.value;
    todocon.appendChild(para);
    inputf.value='';

para.addEventListener('click', function(){
    para.style.color = 'darkmagenta';
    para.style.textDecoration = "line-through";
})

para.addEventListener('dblclick', function(){
    todocon.removeChild(para);
})

})
const button = document.querySelector(".form .submitt");
const tasklist = document.querySelector(".tasklist");
let tasks = [];
button.onclick=function(e){
    e.preventDefault();
    const item = document.querySelector("input").value;
    if(item!=''){ 
    const listItem = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type','checkbox');

    const p = document.createElement('p');
    p.textContent = item;

    const deleteMe = document.createElement('img');
    deleteMe.setAttribute('src',"./assets/img/trash-solid.svg");
    deleteMe.setAttribute('class','trash');

    listItem.appendChild(checkbox);
    listItem.appendChild(p);
    listItem.appendChild(deleteMe);
    tasklist.appendChild(listItem);

    checkbox.addEventListener('change',taskIsDone);
    deleteMe.addEventListener('click',deleted);
    }
    else{
        alert("Nothing to do");
    }
    reset();
    
}

function reset(){
    document.querySelector(".form .in").value = '';
}


function taskIsDone(ev){
    ev.preventDefault();
    let current = ev.target;
    console.log(ev);
    let nextSibling = current.nextSibling;
    let li =current.parentElement;
    nextSibling.classList.toggle("done");
    li.classList.toggle("doneli");
}

function deleted(ev){
    ev.preventDefault();
    let current = ev.target;
    console.log(current.parentElement.children[1]);
    let nextSibling = current.parentElement;
    nextSibling.remove();
}


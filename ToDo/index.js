let todoList = document.querySelector(".todo-list");
let deleteButton = new Array();

function addTodo() {
    let content = document.querySelector(".todo-content").value;
    if(content === "") {
        alert("Please add text ... ")
    } else {
        todoList.insertAdjacentHTML("afterbegin", `<div><p>${content}</p><span><i class="fa-regular fa-circle-xmark"></i></span></div>`);
        deleteButton = document.querySelectorAll(".todo-list div span");
        deleteButton[deleteButton.length-1].addEventListener("click", deleteFunction(this));
    }
    

    // let textNode = document.createTextNode(content);
    // let element = document.createElement('p');
    // element.appendChild(textNode);
    // todoList.insertAdjacentElement("afterbegin", element);
}

function deleteFunction(del) {
    // console.log("delete");
    // console.log(deleteButton[deleteButton.length - 1].parentElement);
    todoList.removeChild(del.parentElement);
    // todoList.removeChild(event.target.closest('div'));
    // let list1 = todoList.children;
    // if(list1) {

    // }
}



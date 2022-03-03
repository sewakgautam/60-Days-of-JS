const input = document.getElementById("todoinput");
const addBtn = document.getElementById("button");
const returns = document.getElementById("root");
let empty = true;

const todos = [];

function isEmpty(element) { 
    const bol = element.textContent.trim() === '' ;
    
    if (bol)
        returns.innerText = "No Todos for the day"
    
   
   } 
isEmpty(returns)



function createElement(elm, root, props) {
    
    const _elm = document.createElement(elm);
    for (let key in props) {
        if (key === "innerText") _elm.innerText = props[key];
        else _elm.setAttribute(key, props[key]);
    }
    root.appendChild(_elm);
    return _elm;
}

function myTodo() {
    
    const todo = input.value;
    if (!todo) {
        alert("please input your todo");
    } else {
        if (returns.innerText == 'No Todos for the day'){
            returns.innerHTML=''

        }
        const div = createElement("div", returns);
        const pTag = createElement("span", div, {innerText: todo, id: Math.random(),});
        const done = createElement("button", div, { innerText: "mark as done", class:'done' });
        const del = createElement("button", div, { innerText: "Delete", class:'delete' });
        
        del.addEventListener("click", () => {
                div.remove();
                isEmpty(returns)


            });
        done.addEventListener("click", () => {
            pTag.setAttribute('class','complete')


        });
        
            console.log(todos); 
            input.value = "";
        }
        
        
    }
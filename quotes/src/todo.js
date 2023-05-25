const TODOFORM = document.getElementById("todo-form");
const TODOINPUT = TODOFORM.querySelector("input");
const TODOLIST = document.getElementById("todo-list");

function deleteToDo(event){ //이벤트가 발생한 element의 부모 element를 지워서 삭제하는 함수
    const DELETED_ELEMENT = event.target.parentElement; //이벤트가 발생한 element의 부모를 찾아서 변수에 할당하는 코드
    DELETED_ELEMENT.remove();
}
function paintToDo(newTodo){
    const LIST = document.createElement("li");
    const SPAN = document.createElement("span");
    const BUTTON = document.createElement("button");
    LIST.appendChild(SPAN);
    LIST.appendChild(BUTTON);
    SPAN.innerText = newTodo;
    BUTTON.innerText = "✂";
    TODOLIST.appendChild(LIST);

    BUTTON.addEventListener("click",deleteToDo);
}
function handleToDoSubmit(event){ //input의 value를 입력받고 input의 입력창에 입력된 값을 비워야함
    event.preventDefault(); 
    const NEWTODO = TODOINPUT.value; //input의 value를 비우기전에 그 값을 사용하기 위해 새로운 변수에 저장
    TODOINPUT.value = ""; //input의 value를 비움
    paintToDo(NEWTODO); //새로운 변수에 저장된 input의 value를 사용
}
TODOFORM.addEventListener("submit",handleToDoSubmit);
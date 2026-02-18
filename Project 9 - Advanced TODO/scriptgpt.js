let todos = [
    // {id: 1, text : "Study JS" , completed : false},
        
]

let noOfTasks = 0;

let addbtn = document.querySelector("#addbtn")
let input = document.querySelector('#inputfield')
const weblist = document.querySelector("ul")



addbtn.addEventListener('click', () => {
    if(input.value.trim() === "") return;

    todos.push({
        id: Date.now(),
        text: input.value.trim(),
        completed: false
    });

    input.value = "";
    renderTodos();
});



weblist.addEventListener("click", (e) => {
    if(e.target.classList.contains("delete")) {
        const li = e.target.closest("li");
        const text = li.querySelector("span").textContent;

        todos = todos.filter(todo => todo.text !== text);

        renderTodos();
    }
    if(e.target.classList.contains("tickdiv")) {
        const li = e.target.closest("li");
        const text = li.querySelector("span").textContent;

        todos = todos.map(todo => {
            if(todo.text === text) {
                return {...todo, completed: !todo.completed};
            }
            return todo;
        });

        renderTodos();
    }

});






function renderTodos() {
    weblist.innerHTML = "";

    todos.forEach(todo => {
        const li = document.createElement("li");
        li.classList.add("listitem");

        li.innerHTML = `
            <div class="tickdiv ${todo.completed ? "completed" : ""}"></div>
            <span>${todo.text}</span>
            <div class="editdelete">
                <img src="./images/edit.png" class="edit">
                <img src="./images/bin.png" class="delete">
            </div>
        `;

        weblist.appendChild(li);
    });
}

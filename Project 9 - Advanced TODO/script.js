let todos = [
    // {id: 1, text : "Study JS" , completed : false},
        
]

let noOfTasks = 0;

let addbtn = document.querySelector("#addbtn")
let input = document.querySelector('#inputfield')
const weblist = document.querySelector("ul")


addbtn.addEventListener('click', ()=>{
    if(input.value.trim() === "") return;


    todos.push({
        id: Date.now(),
        text: input.value.trim(),
        completed: false,
        beingEdited: false
    })

    input.value = "";
    renderList();
})


// Creating delete functionality
weblist.addEventListener('click', (e)=>{
    // Deletebtn functionality
    if(e.target.classList.contains('delete')){
        let li = e.target.closest('li') //Only here i got clueless
        let text = li.querySelector('span').textContent;
        console.log(text);

        todos = todos.filter(todo => todo.text != text)

        renderList();
    }

    // Edit button functionality 
    if(e.target.classList.contains('edit')){
        let li = e.target.closest('li') //Only here i got clueless
        let txt = li.querySelector('span').textContent;
        
        todos = todos.map(todo => {
            if(todo.text === txt){
                todo.beingEdited = !todo.beingEdited;
            }
            return todo
        })
                

        renderList();
    }


    // Checkbox functionality 
    if(e.target.classList.contains("tickdiv")){
        let li = e.target.closest('li')
        let txt = li.querySelector('span').textContent

        todos = todos.map(todo => {
            if(todo.text === txt){
                todo.completed = !todo.completed;
            }
            return todo
        })
        renderList()
    }

})




function renderList(){
    weblist.innerHTML = ""

    todos.forEach(todo =>{
        let li = document.createElement("li")
        li.classList.add("listitem")

        if(todo.beingEdited=== false){
            li.innerHTML = `
            <div class="tickdiv ${todo.completed? "completed": ""}"></div>
            <span>${todo.text}</span>
            <div class="editdelete">
                <img src="./images/edit.png" class="edit">
                <img src="./images/bin.png" class="delete">
            </div>
        `}

        else if(todo.beingEdited === true){
            li.innerHTML = `
                <div class="tickdiv ${todo.completed? "completed": ""}"></div>
                <input type="text" class="editItemInput">
                <div class="editdelete">
                    <img src="./images/edit.png" class="edit">
                    <img src="./images/bin.png" class="delete">
                </div>
            `
            li.addEventListener('keydown', (e)=>{
                // console.log(e.key);
                if(e.key === "Enter"){
                    todo.text = li.querySelector('input').value;
                    // console.log(li.querySelector('input').value)
                    todo.beingEdited = false;
                    renderList()
                }
            })
        }

        weblist.appendChild(li)
    })
}

let lists = document.getElementsByClassName("list")
let rightbox = document.getElementById("right")
let leftbox = document.getElementById("left")

for(list of lists){
    list.addEventListener('dragstart', function(e) {
        let selected = e.target;

        rightbox.addEventListener('dragover', (e) =>{
            e.preventDefault(); //it will prevent the default feature 
        })

        rightbox.addEventListener('drop', (e) =>{
            rightbox.appendChild(selected)
            selected = null
        })

        leftbox.addEventListener('dragover', (e) =>{
            e.preventDefault(); //it will prevent the default feature 
        })

        leftbox.addEventListener('drop', (e) =>{
            leftbox.appendChild(selected)
            selected = null
        })
    })
}
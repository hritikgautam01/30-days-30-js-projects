// Blur karne ke liye blr class toggle kar do 
// Notification show karne ke liye noti waale container me display block kar denge 

const grids = document.querySelectorAll('.grid')
const noti = document.querySelector('.noti')
const closebtn = document.querySelector("#closebtn")
const layer = document.querySelector('.transparentContainer')


let isblurred = false


function blureach(){
    grids.forEach(elem =>{
        elem.classList.toggle("blr")
    })
}




grids.forEach(div => {
    div.addEventListener('click', () =>{
        noti.style.display = "block"
        blureach();
        isblurred = true;
        layer.style.zIndex = '10';
    })
})


closebtn.addEventListener('click', () =>{
    if(isblurred === true){
        noti.style.display = "none"
        blureach()
        isblurred = false
        layer.style.zIndex=  "-10";
    }
})

window.addEventListener('keydown', (btn) => {
    if(isblurred === true){
        if(btn.key === "Escape"){
            noti.style.display = "none"
            blureach()
            isblurred = false
            layer.style.zIndex = "-10";
        }
    }
})
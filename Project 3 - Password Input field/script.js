let icon = document.getElementById("eyeicon")
let pass = document.getElementById("password")


icon.onclick = ()=>{
    if(pass.type === "password"){
        pass.type = "text"
        icon.src = "./eye-icons/eye-open.png"
    }
    else if(pass.type === "text"){
        pass.type = "password"
        icon.src = "./eye-icons/eye-close.png"
    }
}
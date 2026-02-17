let toastBox = document.getElementById("toastBox")
let successMsg = "Successfully Submitted"
let errorMsg = "Please fix the error!"
let invalidMsg = "Invalid input, check again"

function showToast(message){
    let toast = document.createElement("div")
    toast.classList.add("toast")
    toast.innerHTML = `${message}`
    toastBox.appendChild(toast)
}
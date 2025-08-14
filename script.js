function increase(){
   let text = document.getElementById("number");

    text.innerHTML ++ ;
    console.log("Hello") 
}
console.log("HIIII")

//let mode = document.getElementById("Dark")
function darkMode(){
    let mode = document.getElementById("Dark")
    document.body.classList.toggle("darkMode")
    let isdark = document.body.classList.contains("darkMode")
    // let onoff = document.getElementById("boolonoff")
    if (isdark == true){
        localStorage.setItem("darkMode", "on")
        mode.innerHTML = "Dark Mode: on"
    }else{
        localStorage.setItem("darkMode", "off")
        mode.innerHTML = "Dark Mode: off"
    }
}
//mode.addEventListener("click",() =>{
//document.body.classList.toggle("darkMode")
//})
function changeFace(){
    let face = document.getElementById("head");
    let list = ['😐', '😄', '😲', '😎', '🤔', '😴'];
    let i = 0;
    i = (i + 1)%6;
    face.textContent = list[i];
}
// let face = document.getElementById("head");
// let list = ['😐', '😄', '😲', '😎', '🤔', '😴'];
// let i = 0;
// face.addEventListener("click",()=>{
//     console.log("clicked");
//     i = (i + 1)%6;
//     face.textContent = list[i];
// });
window.addEventListener("DOMContentLoaded",() =>{
    let mode = document.getElementById("Dark")
    if (localStorage.getItem("darkMode") == "on"){
        document.body.classList.add("darkMode")
        mode.innerHTML = "Dark Mode: on"
    }else{
        mode.innerHTML = "Dark Mode: off"
    }

} )
function update_clock(){
    let now = new Date()
    console.log(now)
    let date = now.toDateString()
    let hours = String(now.getHours()).padStart(2,"0")
    let min = String(now.getMinutes()).padStart(2, "0")
    let sec = String(now.getSeconds()).padStart(2, "0")
    //let time_text = (date +" "+ hours +":"+ min +":"+ sec)
    let time_text = `${date} ${hours}:${min}:${sec}`
    let clock = document.getElementById("clock")
    clock.innerHTML = time_text
}
update_clock()
setInterval(update_clock, 1000)
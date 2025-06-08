const btn =document.getElementById("btn")
const text=document.getElementById("result")
const img=document.getElementById("img")
function flip(){
     return Math.random()<0.5;
}

btn.addEventListener("click",()=>{
    
    img.classList.add("flipped")
    setTimeout(() => {
    const result = flip()

    let string=""
    if (result===true){
    img.src="heads.png"
    text.innerText="Heads";
    
}
    else{
        img.src="tails.png"
        text.innerText="Tails"
}
img.classList.remove("flipped")

img.classList.remove("flipped")
  }, 600)
})

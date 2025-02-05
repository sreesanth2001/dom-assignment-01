const btn = document.querySelector("#btn")
btn.addEventListener("click",()=> {
    if (btn.innerHTML==="DARK"){
        btn.innerHTML="LIGHT"
    document.body.style.backgroundColor==="white"
    document.body.style.backgroundColor="black"
    }else{
        document.body.style.backgroundColor="white"
        btn.innerHTML="DARK"
    }
})

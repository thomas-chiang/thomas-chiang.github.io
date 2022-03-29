


const welcomeM = document.getElementsByClassName("welcome-message")
welcomeM[0].addEventListener("click", ()=>{  
    welcomeM[0].innerText = "Have a Good Time!"
});


document.getElementById('action').addEventListener('click',()=>{
    console.log('hi')
    document.getElementById('action-result').style.display = "flex";
})
    

function menu(){

let menu=document.getElementById("menu");

if(menu.style.display==="block"){

menu.style.display="none";

}

else{

menu.style.display="block";

}

}



window.addEventListener("scroll",()=>{

document.querySelector("header").style.boxShadow =
window.scrollY>50 ?
"0 5px 20px #0002":
"none";

});

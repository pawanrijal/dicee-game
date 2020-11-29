

//left img
var randomNumber1=Math.floor((Math.random()*6)+1);
var randomImageSource="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);
//right img
var randomNumber2=Math.floor((Math.random()*6)+1);
var randomImageSource="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource);



if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").textContent="Player1 Wins";
}

else if (randomNumber1==randomNumber2) {
    document.querySelector("h1").textContent="Draw";
    
} 
    


else{
    document.querySelector("h1").textContent="Player2 Wins";
}



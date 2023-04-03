
  var rand1= (Math.floor(Math.random()*6))+1;
  var randimg1= "images/dice"+rand1+".png";
  document.querySelector(".img1").setAttribute("src",randimg1);

  var rand2= (Math.floor(Math.random()*6))+1;
  var randimg2= "images/dice"+rand2+".png";
  document.querySelector(".img2").setAttribute("src",randimg2);


  if (rand1==rand2){
    document.querySelector("h1").innerHTML="Draw!";
  }
  else if (rand1>rand2) {
    document.querySelector("h1").innerHTML="Player1 Wins!";
  }
  else{
    document.querySelector("h1").innerHTML="Player2 Wins!";
  }

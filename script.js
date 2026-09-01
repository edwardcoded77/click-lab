// Get HTML element and stores them in variables
let headline = document.getElementById("headline-1");
let button1 = document.getElementById("b1");
let button2 = document.getElementById("b2");
let button3 = document.getElementById("b3");
let BtnQtn2 = document.getElementById("b4");
let BtnQtn22 = document.getElementById("b5");
let BtnQtn23 = document.getElementById("b6");
let BtnQtn3  = document.getElementById("b7");
let BtnQtn32  = document.getElementById("b8");
let BtnQtn33  = document.getElementById("b9");
let answer = document.getElementById("ans");
let datetime  = document.getElementById("date-time");
let scoreInput = document.getElementById("score-1");
let bodyColor = document.getElementById("my-body");
let winner = document.getElementById("winner-1");
let winner2 = document.getElementById("winner-2");
let buttonDisplay = document.getElementById("Btn-1");
let resultsBtn = document.getElementById("result-1");
let StartOverBtn = document.getElementById("tryBtn-1");
let card1 = document.getElementById("card-1");
let card2 = document.getElementById("card-2");
let card3 = document.getElementById("card-3");
let footerHeadline = document.getElementById("footer-headline");


// Questions 2 and 3 hidden when quiz loads, making  question 1 visible
   card2.hidden = true;
   card3.hidden = true;

// display datetime 
   let d = new Date();
   datetime.textContent = d.toLocaleString();


// Score starts at zero by clicking the correct answer.
 let score = 0;

// How many visitors on the page 
let visit  = Number(localStorage.getItem("visits")) || 0;
visit  =  visit +  1;
localStorage.setItem("visits", visit ); 
footerHeadline.textContent = "How many visit : " + visit;
 
 




 // This reset everything back 
 function resetBtnfunctn(){
 score = 0;
 resultsBtn.hidden = true;
 answer.textContent = "Answer";
 scoreInput.textContent = "Your score";
 winner.hidden = true;
 winner2.hidden = true;
 bodyColor.style.backgroundColor = "";
 button1.disabled  = false;
 button2.disabled  = false;
 button3.disabled  = false;
 BtnQtn2.disabled  = false;
 BtnQtn22.disabled  = false;
 BtnQtn23.disabled  = false;
 BtnQtn3.disabled  = false;
 BtnQtn32.disabled  = false;
 BtnQtn33.disabled  = false;
 card1.hidden= false;
 card2.hidden = true;
 card3.hidden = true;
}


 // function to keep track of the scores
 function resultPanel() {
     if (score === 0){
     scoreInput.textContent = "Your Score is : 0 ";
     } else if (score === 1) {
       scoreInput.textContent = "Your Score is : 1 ";
   } else if (score === 2) {
       scoreInput.textContent = "Your Score is : 2 ";
}  else if (score === 3){
       scoreInput.textContent = "Your Score is : 3 ";
  }
      resultsBtn.hidden = false;
  }




// Question 1 //

// Button 1
   button1.addEventListener("click", function () {
   answer.textContent = "Incorrect!";
   bodyColor.style.backgroundColor = "lightyellow";
   
     card1.hidden = true;
     card2.hidden = false;
});


// Button 2
   button2.addEventListener("click", function () {
   answer.textContent = "Incorrect!";
   bodyColor.style.backgroundColor = "lightblue";
     card1.hidden = true;
     card2.hidden = false;
});


// Button 3
    button3.addEventListener("click", function () {
    answer.textContent = "Correct!";
    score = score + 1;
    bodyColor.style.backgroundColor = "lightgrey";
    
    // display winner picture
      winner.src="spain.jpg";
      winner.hidden = false;

       card1.hidden = true;
       card2.hidden = false;
    });




// Question 2 //

// Button 2
   BtnQtn2.addEventListener("click", function () {
   answer.textContent = "Incorrect!";
   bodyColor.style.backgroundColor = "lightyellow";
     card2.hidden = true;
     card3.hidden = false;
     
});


// Button 22
   BtnQtn22.addEventListener("click", function () {
    answer.textContent = "Correct!";
    score = score  + 1;
    bodyColor.style.backgroundColor = "lightgrey";
   // display winner picture
      winner.src="brazil01.jpg";
      winner.hidden = false;

     card2.hidden = true;
     card3.hidden = false;

});


// Button 23
   BtnQtn23.addEventListener("click", function () {
    answer.textContent = "Incorrect!";
    bodyColor.style.backgroundColor = "lightblue";

     card2.hidden = true;
     card3.hidden = false;
    
   });



// Question 3 //

// Button 3
   BtnQtn3.addEventListener("click", function () {
   answer.textContent = "Correct!";
   score = score  + 1;
   bodyColor.style.backgroundColor = "lightgrey";

     // display winner picture
      winner.src="qatar.jpg";
      winner.hidden = false;
      resultPanel();
      card3.hidden = true;
    
});


// Button 32
   BtnQtn32.addEventListener("click", function () {
    answer.textContent = "Incorrect!";
    bodyColor.style.backgroundColor = "lightyellow";
    resultPanel();
      card3.hidden = true;
    });
    


// Button 33
   BtnQtn33.addEventListener("click", function () {
    answer.textContent = "Incorrect!";
    bodyColor.style.backgroundColor = "lightblue";
    resultPanel();
      card3.hidden = true;
   });

     StartOverBtn.addEventListener("click", function (){
      resetBtnfunctn();
  });
     


  // localStorage.setItem("visits", 5);
// let saved = localStorage.getItem("visits");































let button1 = document.getElementById("b1");
let button2 = document.getElementById("b2");
let button3 = document.getElementById("b3");
let button4 = document.getElementById("b4");
let answer = document.getElementById("ans");
let datetime  = document.getElementById("date-time");
let scoreInput = document.getElementById("score-1");

// display datetime 
let d = new Date();
datetime.textContent = d.toLocaleString();


// Score starts at zero by clicking the correct answer.
let score = 0;


// Track whether the question was answered
 let answered = false;

// Button 1
button1.addEventListener("click", function () {
  if (answered === false) {
      answer.textContent = "Incorrect!";
      answered = true;
    }

});

// Button 2
button2.addEventListener("click", function () {
   if (answered === false) {
         answer.textContent = "Incorrect!";
         answered = true;
    }
});

// Button 3
button3.addEventListener("click", function () {
    if (answered === false) {
       answer.textContent = "Correct!";
       score = score + 1;
       scoreInput.textContent = "Your score is: " + score; 
        answered = true;

        console.log("answered:", answered);
        console.log("score:", score);
    }
    
});


































// // Score starts at zero by clicking the correct answer.
// let score = 0;


// // Tell if the answer has been answered
// let answered = false;

// // display datetime 
// let d = new Date();
// datetime.textContent = d.toLocaleString();



// // Button 1
// button1.addEventListener("click", function () {
//     if (answered === false){
//        answer.textContent = "Incorrect!";
//        answered = true;
//     }
// });

// // Button 2
// button2.addEventListener("click", function () {
//        if (answered === false){
//        answer.textContent = "Incorrect!";
//        answered = true;
//     }
// });


// // Button 3
// button3.addEventListener("click", function () {
//     if (answered === false){ 
//        answer.textContent = "Correct!";
//        score = score + 1;
//        scoreInput.textContent= "Your score is: " + score;
//        answered = true;
//        }
// });

// // Button 4
// button4.addEventListener("click", function () {
//        if (answered === false){
//        answer.textContent = "Incorrect!";
//        answered = true;
//     }
// });
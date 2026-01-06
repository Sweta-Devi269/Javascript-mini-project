// get to DOM elements
const gameContainer = document.querySelector(".container"),
userResult = document.querySelector(".user_result img"),  //accessing css property using dot notation
cpuResult = document.querySelector(".cpu_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");

/* document.querySelcetor() is used to get any element of the HTML inside javascript.

document.querySelectorAll() is a built-in DOM method that selects all elements in the 
document that match a specified CSS selector and returns them as a static NodeList. */

//loop through each option_image element
optionImages.forEach((image, index) => {    //for(image = 0; image < index) i.e (0 < 3)
  image.addEventListener("click", (e) => {
       //This means: "When this image is clicked, run the code inside the arrow/curly function."

    image.classList.add("active");  
    /* Adds the CSS class "active" to the clicked choice, then the control goes to 2nd loop */

    userResult.src = cpuResult.src = "images/rock.png";
    result.textContent = "Wait...";

    /* Before showing the real result, we reset everything:

    1. Both player and computer images show rock (as a placeholder).
    2. The result text says "Wait..." to show the game is thinking. */

/* Why are there two separate loops using optionImages.forEach in the Rock-Paper-Scissors game?
Let me explain it simply, step by step, like you're just starting out.
There are three clickable options: Rock, Paper, Scissors.
Each has the class .option_image, so optionImages is a list of these 3 elements.

When the player clicks one of them, we want only that one to look "active" (highlighted), and the other two should not be highlighted.
To do this properly, we need to:

1. Add "active" class to the clicked one → easy, we already know which one was clicked.
2. Remove "active" class from the other two → we need to check all three and remove it from 
  the ones that weren't clicked.

That's why we need two loops. */

    optionImages.forEach((image2, index2) => {
      
      //If the current index doesn't match the clicked index
      //Go through all 3 options again, and remove 'active' from any that weren't the one just clicked."
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");

   //Set the timeout to delay the cresult calculation
   let time = setTimeout(() => {
    
    gameContainer.classList.remove("start");  //remove the CSS class 'start' for the animation effect

         //get the targeted source of the clicked images
      let imageSrc = e.target.querySelector("img").src;

      //Set the user image to the clicked image
      userResult.src = imageSrc;

      /* Generates a random number: 0, 1, or 2.
  1. Math.random() → number between 0 and 1 (like 0.743)
  2. * 3 → between 0 and 3 (like 2.23)
  3. Math.floor → rounds down → so we get 0, 1, or 2. */
      let randomNumber = Math.floor(Math.random() * 3);
      
      //Create an array of CPU image
      let cpuImage = ["/images/rock.png", "/images/paper.png","/images/scissors.png"];
      cpuResult.src = cpuImage[randomNumber];

      //Assign a letter to the cpu value (R for rock, P for papaer, S for scissor)
      let cpuValue = ["R", "P", "S"][randomNumber];

      //Assign a letter to the user value (R for rock, P for papaer, S for scissor)
      let userValue = ["R", "P", "S"][index];

      //Create an object of all possible outcomes
      let outcomes = {
        RR: "Draw",
        RP: "CPU",
        RS: "User",
        PR: "User",
        PP: "Draw",
        PS: "CPU",
        SR: "CPU",
        SP: "User",
        SS: "Draw"
      };

      //Look up the outcome value based on user and cpu options
      let outComeValue = outcomes[userValue + cpuValue];  //eg: R + R = 'draw', so outComeValue = 'draw'

      //Display the result
      result.textContent = userValue === cpuValue ? "Match Draw!!!": `${outComeValue} Won!!!`;

   }, 2500)
  });
});

/* Summary: How the Game Works

1. Player clicks one of the three options (rock/paper/scissors).
2. That option gets highlighted, others lose highlight.
3. Screen shows "Wait..." and a shaking animation for 2.5 seconds.
4. Player's choice is shown clearly.
5. Computer picks randomly.
6. Game checks who won using the rules table.
7. Result is displayed. */

// get to DOM elements
const gameContainer = document.querySelector(".container"),
userResult = document.querySelector(".user_result img"),
cpuResult = document.querySelector(".cpu_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");

//loop through each option_image element
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    userResult.src = cpuResult.src = "images/rock.png";
    result.textContent = "Wait...";

    //Loop through each option_image element again
    optionImages.forEach((image2, index2) => {
      
      //If the current index doesn't match the clicked index
      //Remove the "active" class from the other option images
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");

   //Set the timeout to delay the cresult calculation
   let time = setTimeout(() => {
    
    gameContainer.classList.remove("start");

         //get the source of the clicked images
      let imageSrc = e.target.querySelector("img").src;

      //Set the user image to the clicked image
      userResult.src = imageSrc;

      //Generate a random number between 0 to 2
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
      let outComeValue = outcomes[userValue + cpuValue];

      //Display the result
      result.textContent = userValue === cpuValue ? "Match Draw!!!": `${outComeValue} Won!!!`;

   }, 2500)
  });
});



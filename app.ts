#! /usr/bin/env node

import inquirer from "inquirer";

import Chalk from "chalk";
import chalk from "chalk";

let guessLimit = 3;

let score = 0;


async function game() {

let guessNumber = await inquirer.prompt([
  {
    message: "guess a number between 1 to 10",
    name: "guessnumber",
    type: "number",
  }
]);

console.log(chalk.bgBlueBright.overline.white("Your number " + guessNumber.guessnumber));


let secretNumber = Math.ceil(Math.random() * 10);


if (guessNumber.guessnumber === secretNumber) {
   score++
   console.log(chalk.bgBlueBright.overline.white("You won"));

   console.log(chalk.bgBlueBright.overline.white("Guess limit " + guessLimit));
   
   console.log(chalk.bgBlueBright.overline.white("Score " + score));

   let playAgain = await inquirer.prompt([
    {
      message: "Do you want to play again?",
      name: "play",
      type: "list",
      choices: ["Yes", "No"]
    }
   ])
   
   if (playAgain.play === "Yes") {
      game();
   } else {
      console.log(chalk.bgBlueBright.overline.white("Thanks for playing"));
   }
   
} else if (guessNumber.guessnumber !== secretNumber) {
   
  console.log(chalk.bgBlueBright.overline.white("Secret number " + secretNumber));

  guessLimit--

   console.log(chalk.bgBlueBright.overline.white("Guess limit " + guessLimit));
   
   console.log(chalk.bgBlueBright.overline.white("Score " + score));    

   if (guessLimit) {
      let playAgain = await inquirer.prompt([
         {
           message: "Do you want to play again?",
           name: "play",
           type: "list",
           choices: ["Yes", "No"]
         }
        ])
        
        if (playAgain.play === "Yes") {
           game();
        } else {
           console.log(chalk.bgBlueBright.overline.white("Thanks for playing"));
        }
   }

   if (guessLimit === 0) {
      console.log(chalk.bgBlueBright.overline.white("Game Over"));
   }

} else {
   console.log(chalk.bgBlueBright.overline.white("Error"));
}
}

game();
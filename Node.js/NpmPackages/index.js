// https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts
import inquirer from 'inquirer';

//name is variable name with which we can access data
//message is the prompt that will be viewed by the user for answering.
inquirer.prompt([
    {
      name: "name",
      message: "What is your name?"
    },{
      type: "list",
      name: "sport",
      message: "What is ur fav sport?",
      choices: ["Badmintion","Football"]
    }
  ])
  .then((answers) => {
    console.info("Name: ", answers.name);
    console.info("Sport: ",answers.sport);
  });


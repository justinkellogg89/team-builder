//Questions for inquirer
module.exports = {
//Questions for initial manager input.
  manager: [
    {
      type: "input",
      message: "What is the manager's name?",
      name: "name"
    },
    {
      type: "input",
      message: "What is the manager's ID?",
      name: "id"
    },
    {
      type: "input",
      message: "What is the manager's email?",
      name: "email"
    },
    {
      type: "input",
      message: "What is the manager's office number?",
      name: "officeNumber"
    }
  ],
//If user selects engineer, it will ask these questions
  engineer: [
    {
      type: "input",
      message: "What is the engineer's name?",
      name: "name"
    },
    {
      type: "input",
      message: "What is the engineer's ID?",
      name: "id"
    },
    {
      type: "input",
      message: "What is the engineer's email?",
      name: "email"
    },
    {
      type: "input",
      message: "What is the engineer's Github username?",
      name: "github"
    }
  ],
//If user selects intern, it will ask these questions
  intern: [
    {
      type: "input",
      message: "What is the intern's name?",
      name: "name"
    },
    {
      type: "input",
      message: "What is the intern's ID?",
      name: "id"
    },
    {
      type: "input",
      message: "What is the intern's email?",
      name: "email"
    },
    {
      type: "input",
      message: "what school does the intern attend?",
      name: "school"
    }
  ]
};

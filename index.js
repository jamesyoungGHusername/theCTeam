const inquirer = require("inquirer");
const fs = require('fs');

const Team = require("./lib/Team");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const Question = require("./lib/Question");

let testTeam=new Team();

// console.log(testTeam);
// console.log(testTeam.members);
// testTeam.add(new Intern("testName",1,"test@test.com","hard knocks"));
// testTeam.add(new Manager("testName",2,"test@test.com","221B"));
// testTeam.add(new Engineer("testName",3,"test@test.com","jamesyoungGHusername"));
// console.log(testTeam.members);


//writeToFile("./dist/output.html",testTeam);
//Writes the html file given a fileName and a team object
function writeToFile(fileName, team) {
    fs.writeFile(
        fileName,buildPageFor(team),(err)=> err ? console.error(err) : console.log('File written.')
    );
}

//prompts for an inital number of members to ask for info about.
function promptForInput(message){
    if(message){
        inquirer.prompt([new Question(qTypes.number,message,"Number")])
        .then((response)=>{
            if(Number.isNaN(response.Number)){
                promptForInput("Not a valid number, try again.");
            }else{
                promptForDetails(response.Number);
            }
        });
    }else{
        inquirer.prompt([new Question(qTypes.number,"How many people on your team?","Number")])
        .then((response)=>{
            if(Number.isNaN(response.Number)){
                promptForInput("Not a valid number, try again.");
            }else{
                promptForDetails(response.Number);
            }
        });
    }
}

//recursive function that prompts for basic input about team members, splits off to whichever role they are, and is then called again with fewer remaining teammates to prompt the user for input about.
function promptForDetails(numOfMembers){
    let questions=[
        new Question(qTypes.input,"What is this member's name?","Name"),
        new Question(qTypes.input,"What is this member's ID?","ID"),
        new Question(qTypes.input,"What is this member's email address?","Email"),
        new Question(qTypes.list,"What is this member's role?","Role",["Manager","Engineer","Intern"])
    ];
    inquirer
    .prompt(questions)
    .then((response) =>
    {
        switch (response.Role) {
            case "Engineer":
                prompt(numOfMembers,response,0,(pResp,cResp)=>{
                    return new Engineer(pResp.Name,pResp.ID,pResp.Email,cResp.GitHub);
                });
                break;
            case "Manager":
                prompt(numOfMembers,response,1,(pResp,cResp)=>{
                    return new Manager(pResp.Name,pResp.ID,pResp.Email,cResp.Office);
                });
                break;
            case "Intern":
                prompt(numOfMembers,response,2,(pResp,cResp)=>{
                    return new Intern(pResp.Name,pResp.ID,pResp.Email,cResp.School);
                });
                break;
        }

    });
}

//Takes number of members, the previous data gathered, the index of the question to be asked, and a function to use to build whichever object is required.
function prompt(numOfMembers,prevResp,qIndex,buildTeamMember){
    let questions=[
        new Question(qTypes.input,"What is their Github username?","GitHub"),
        new Question(qTypes.input,"What is their office number?","Office"),
        new Question(qTypes.input,"Where do they attend school?","School")
    ];
    inquirer
    .prompt([questions[qIndex]])
    .then((response) =>
    {
        testTeam.add(buildTeamMember(prevResp,response))
        if(numOfMembers>1){
            console.log("Team member saved!\n")
            promptForDetails(numOfMembers-1);
        }else{
            writeToFile("./dist/output.html",testTeam);
        }
    });
}





//assembles the html string from the content produced by whatever team object is provided as a parameter.
function buildPageFor(team){
    let start=`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=l, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <title>Document</title>
    </head>
    <body>
        <main>
            <section class="employees">
            <h1>Team Members</h1>
            <ul>`;
    let content=team.getMemberHTMLElements();
    let end=`</ul>
        </section>
        </main>
        </body>
        </html>`;
    return (start+content+end);
}


//possible question types, utility for using inquirer.
const qTypes = {
    input: "input",
    number: "number",
    confirm: "confirm",
    list: "list",
    rawlist: "rawlist",
    expand: "expand",
    checkbox: "checkbox",
    password: "password",
    editor: "editor"
}

promptForInput();
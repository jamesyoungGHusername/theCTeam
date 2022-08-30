const inquirer = require("inquirer");

const Team = require("./lib/Team");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let testTeam=new Team();

console.log(testTeam);
console.log(testTeam.members);
testTeam.add(new Intern("testName",1,"test@test.com","hard knocks"));
testTeam.add(new Manager("testName",2,"test@test.com","221B"));
testTeam.add(new Intern("testName",3,"test@test.com","jamesyoungGHusername"));
console.log(testTeam.members);


console.log(buildPageFor(testTeam));



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
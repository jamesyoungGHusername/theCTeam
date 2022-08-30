const inquirer = require("inquirer");

const Team = require("./lib/Team");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let testTeam=new Team();

console.log(testTeam);
console.log(testTeam.members);
testTeam.add(new Intern("testName",1,"test@test.com","hard knocks"))
console.log(testTeam.members);

console.log(testTeam.members[0].getHTMLElement());


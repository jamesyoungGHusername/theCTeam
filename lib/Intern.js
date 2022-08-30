const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name, id, email,school){
        super(name,id,email);
        this.school=school;
    }
    getRole(){
        return "Intern";
    }
    getSchool(){
        return "School: "+this.school;
    }
    getHTMLElement(){
        return super.getHTMLElement([this.getRole(),this.getSchool()]);
    }
}

module.exports = Intern;
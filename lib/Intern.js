const Employee = require("./Employee");

//An intern class that subclasses employee. Has a school that they're attending.
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
    //calls the parent getHTMLElement() method, and provides additional information specific to this subclass.
    getHTMLElement(){
        return super.getHTMLElement([this.getRole(),this.getSchool()]);
    }
}

module.exports = Intern;
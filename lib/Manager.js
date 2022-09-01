const Employee = require("./Employee");
//A subclass of employee, manager has an office number.
class Manager extends Employee{
    constructor(name, id, email,officeNumber){
        super(name,id,email);
        this.officeNumber=officeNumber;
    }
    getRole(){
        return "Role: Manager";
    }
    getOfficeNumber(){
        return "Office: "+this.officeNumber;
    }
    //calls the parent getHTMLElement() method, and provides additional information specific to this subclass.
    getHTMLElement(){
        return super.getHTMLElement([this.getRole() , this.getOfficeNumber()]);
    }
}

module.exports = Manager;
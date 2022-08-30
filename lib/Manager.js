const Employee = require("./Employee");

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
    getHTMLElement(){
        return super.getHTMLElement([this.getRole() , this.getOfficeNumber()]);
    }
}

module.exports = Manager;
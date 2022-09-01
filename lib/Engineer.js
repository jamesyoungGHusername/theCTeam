const Employee = require("./Employee");


//Engineer class is a subclass of employee and can store a github username 
class Engineer extends Employee{
    constructor(name, id, email,gitHub){
        super(name,id,email);
        this.gitHub=gitHub;
    }
    getRole(){
        return "Engineer";
    }
    //This specifically returns not only the data and the label for the data, but also the html for the link.
    getGitHub(){
        return `<a href="https://www.github.com/${this.gitHub}">${this.gitHub}</a>`;
    }
    //calls the parent getHTMLElement() method, and provides additional information specific to this subclass.
    getHTMLElement(){
        return super.getHTMLElement([this.getRole(),this.getGitHub()])
    }
}

module.exports = Engineer;
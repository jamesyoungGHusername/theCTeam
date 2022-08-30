const Employee = require("./Employee");


class Engineer extends Employee{
    constructor(name, id, email,gitHub){
        super(name,id,email);
        this.gitHub=gitHub;
    }
    getRole(){
        return "Engineer";
    }
    getGitHub(){
        return `<a href="https://www.github.com/${this.gitHub}">${this.gitHub}</a>`;
    }
    getHTMLElement(){
        return super.getHTMLElement([this.getRole(),this.getGitHub()])
    }
}

module.exports = Engineer;
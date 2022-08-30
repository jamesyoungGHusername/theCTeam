const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

class Team{
    constructor(members){
        if(members && members.isArray()){
            this.members=members;
        }else{
            this.members=[];
        }
    }

    //function to add a member to a given team object. Takes object of type employee or a child class as a param.
    add(Member){
        this.members.push(Member);
    }

    //searches the members for matching id, removes from team if id matches.
    removeMember(byID){
        if(this.members){
            for(let i=0;i<this.members.length;i++){
                if(this.members[i].getID()==byID){
                    this.members.splice(i,1);
                }
            }
        }
    }
    
    //returns an array of the member's html elements.
    getMemberHTMLElements(){
        let toBeReturned=[];
        if(this.members){
            for(let i=0;i<this.members.length;i++){
                toBeReturned.push(this.members[i].getHTMLElement());
            }
        }
        return toBeReturned;
    }
}

module.exports = Team;
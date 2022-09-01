
//Parent class for all types of employees. If I knew of an easy way to make this an abstract class I would have done that.
class Employee {
    constructor(name, id, email){
        this.name=name;
        this.id=id;
        this.email=email;
    }
    getName(){
        return this.name;
    }
    getID(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee";
    }

    //returns the html element for the employee.
    //Specifically, this method gets called in the child classes, and "otherStuff" is an array of additional text or fields to display that's unique to each child class.
    getHTMLElement(otherStuff){
        let html=`
        <li>
            <section class="employee">
                <div class="description">
                    <h1><strong>${this.name}</strong></h1>
                    
                    <h5>ID: ${this.id}</h5>\n`;
        
        if(otherStuff){
            for(const stuff of otherStuff){
                html+="<p>"+stuff+"</p>\n";
            }
        }
        
        let ending=`<a href="mailto:${this.email}">Email: ${this.email}</a></div></section></li>`;
  
        return (html+ending);
    }
    
}

module.exports = Employee;
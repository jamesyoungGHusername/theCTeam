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
    getHTMLElement(otherStuff){
        console.log("Employee version of get html.");
        let html=`
        <li>
            
            <section class="employee">
                <div class="description">
                    <h1><strong>${this.name}</strong></h1>
                    <a href="mailto:${this.email}">Email</a>
                    <h3>ID: ${this.id}</h3>\n`;
        
        if(otherStuff){
            for(const stuff of otherStuff){
                html+="<h3>"+stuff+"</h3>\n";
            }
        }
        
        let ending="</div></section></li>";
  
        return (html+ending);
    }
    
}

module.exports = Employee;
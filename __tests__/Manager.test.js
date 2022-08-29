const Manager = require("../lib/Manager");

describe("Manager",()=>{
    describe('#constructor',()=>{
        it("Should construct",() =>{
            const m1 = new Manager("linus",2,"notLinus@macrosoft.com","221B");
            expect(m1).toEqual({name:"linus",id: 2,email:"notLinus@macrosoft.com",officeNumber:"221B"})
        });
    });
});
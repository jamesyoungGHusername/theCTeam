const Intern = require("../lib/Intern");

describe("Intern",()=>{
    describe('#constructor',()=>{
        it("Should construct",() =>{
            const i1 = new Intern("linus",2,"notLinus@macrosoft.com","Yale");
            expect(i1).toEqual({name:"linus",id: 2,email:"notLinus@macrosoft.com",school:"Yale"})
        });
    });
});
const Employee = require("../lib/Employee");

describe("Employee",()=>{
    describe('#constructor',()=>{
        it("Should construct",() =>{
            const e1 = new Employee("bill gates",1,"notBillGates@macrosoft.com");
            expect(e1).toEqual({name:"bill gates",id: 1,email:"notBillGates@macrosoft.com"})
        });
    });
});
const Employee = require("../lib/Employee");

describe("Employee",()=>{
    describe('#constructor',()=>{
        it("Should construct",() =>{
            const e1 = new Employee("bill gates",1,"notBillGates@macrosoft.com");
            expect(e1).toEqual({name:"bill gates",id: 1,email:"notBillGates@macrosoft.com"});
        });
    });
    it("Should return html",()=>{
        const e1 = new Employee("bill gates",1,"notBillGates@macrosoft.com");
        console.log(e1.getHTMLElement(["test"]));
        expect(e1.getHTMLElement(["test"])).toEqual(`<li><section class="employee"><div class="description"><h1><strong>bill gates</strong></h1><h5>ID: 1</h5>\n<p>test</p>\n<a href="mailto:notBillGates@macrosoft.com">Email: notBillGates@macrosoft.com</a></div></section></li>`);
    });
});
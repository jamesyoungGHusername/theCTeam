const Engineer = require("../lib/Engineer");

describe("Engineer",()=>{
    describe('#constructor',()=>{
        it("Should construct",() =>{
            const en1 = new Engineer("linus",2,"notLinus@macrosoft.com","@notReal");
            expect(en1).toEqual({name:"linus",id: 2,email:"notLinus@macrosoft.com",gitHub:"@notReal"})
        });
    });
});
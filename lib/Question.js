class Question{
    constructor(type,message,name,choices){
        this.type=type;
        this.message=message
        if(choices){
            this.choices=choices;
        }
        this.name=name;
    }
}

module.exports=Question;
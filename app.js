const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial',(num1,num2)=>{
    console.log(num1 + num2);
});

eventEmitter.emit('tutorial',1,2);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name=name;
    }

    get name(){
        return this._name;
    }
}

let pedro = new Person('Pedro');
let christina = new Person('Christina');
nameArray = [pedro,christina];
for (let i = 0; i < nameArray.length; i++){
    nameArray[i].on('name',()=> {
        console.log('my name is '+ nameArray[i].name);
    })
    nameArray[i].emit('name');
}

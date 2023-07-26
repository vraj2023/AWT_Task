let person={
    firstName: "Mrugendra",
    lastName: "Rahevar",
    age:41,
    hobbies: ['reading','gaming','tracking'],
    address :{
            city:'surat',
            state:'Gujarat',
            County:'India'
    },
    greet: function(){
        console.log(`hello ${this.firstName} $(this.lastName)`);
    },
    display:function(){
        console.log(this.firstName+ " " +this.lastName);
    }
};

// console.log(person.firstName);
// console.log(person['lastName']);

// person.age=40;
// person['hobbies'].push('coding');
// console.log(person);


// const cloneobj = person;
// // const cloneobj2 = {...person};
// cloneobj.email='askldasdlkamdasmlkdm';
// const cloneobj2 = {...person,firstName :'martin'};

// console.log(person);
// console.log(cloneobj);
// console.log(cloneobj2);

const cloneperson2 = JSON.parse(JSON.stringify(person));
cloneperson2.address.city='Ahmedabad';
console.log(person);
console.log(cloneperson2);
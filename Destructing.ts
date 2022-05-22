var names = ["alpha", "beta", "gamma", "delta"];
var [firstelement,secondelement,thirdelement,fourthelement]= names;
console.log(thirdelement);


//Ans b.

var organization ={
    name:"Tom",
    address:{
        city:"Bangalore",
        state:"Karnataka",
        pincode:563221 
    }
}

const {address:{city:city1,state:state1,pincode:pincode1}}=organization;

console.log(pincode1);
// Contact constructor
function Contact (firstName,secondName,phoneNumber,email,street,city,country){
this.firstName = firstName;
this.secondName = secondName;
this.phoneNumber = phoneNumber;
this.email = email;
this.address = {};
this.address.street = street;
this.address.city = city;
this.address.country = country
Contact.address = function(){
  return this.street + ', ' + this.city + ', ' + this.state;
}
}
// Object instantiation
var person = new Contact("Arnold","Ndiwalana",123456789,"a@gmail.com","Wampewo Avenue","Kampala","Uganda");
console.log(person);

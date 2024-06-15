// assignmnt 18
// five palces of world store in array
var favplacesofworld = ["london", "dubai", "paris", "austrailia", "turkey"];
//print your order in original order
console.log("orignal order:", favplacesofworld);
//print in alphabatical order without actually modifying the list
console.log("Alphabatical order:", favplacesofworld.slice().sort());
//again print the original order
console.log("again printing original order", favplacesofworld);
//print in reverse alphabatical order
console.log("reverse alphabatical order:", favplacesofworld.slice().sort().reverse());
//again print origial order
console.log("orignal order:", favplacesofworld);
//reverse the order print array show its order has changed
console.log("reverse order changed ", favplacesofworld.slice().reverse());
//reverse the order of list again print list show its back to original list
console.log("orignal order:", favplacesofworld.sort());
console.log(favplacesofworld);
//sort your array so it store in alphabatic order  print the array to show its order has changed
console.log("reverse alphabatical order ", favplacesofworld.sort().reverse());

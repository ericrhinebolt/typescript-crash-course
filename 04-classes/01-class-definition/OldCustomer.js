var oldCustomer = /** @class */ (function () {
    function oldCustomer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return oldCustomer;
}());
var myOldCustomer = new oldCustomer("Martin", "Dixon");
// myCustomer.firstName = "Martin";
// myCustomer.lastName = "Dixon";
console.log(myOldCustomer.firstName);
console.log(myOldCustomer.lastName);

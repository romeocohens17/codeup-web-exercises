function byTwo() {
    let x = 1;
    while (x < 65536) {
        x *= 2
        console.log(x);
    }
}

byTwo();


//
function iceCream() {
    let cones = Math.floor(Math.random() * 5) + 1;

    do {
        let order = Math.floor(Math.random() * 5) + 1;
        console.log("Customer orders " + order + "cone(s). We have " + cones + " left in stock.");
        if (order > cones) {
            console.log("Order cannot be fulfilled.")
        } else {
            cones -= order;
            console.log("Here you go! We now have " + cones + " in stock.")
        }
    } while (cones > 0);
}

iceCream();

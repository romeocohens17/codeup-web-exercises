(function () {

    "use strict";


    function imLost() {
        let userNum


        while (true) {
            userNum = parseFloat(prompt("Give me an odd number between 1 and 50, please."));
            if (userNum % 2 !== 0 && userNum >= 1 && userNum <= 50) {
                break;
            }
        }
        for (let i = 1; i <= 50; i += 2) {
            if (i === userNum) {
                console.log("Whoop! Skipping " + userNum)
            }
        }
    }

    imLost()


})();

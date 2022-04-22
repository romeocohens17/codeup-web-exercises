(function () {

    //1.

    function showMultiplicationTable(num) {
        for (let x = 1; x <= 10; x++) {
            console.log(num + " x " + x + " = " + (x * num))
        }
    }

    showMultiplicationTable(20)

    //2.
    function evenOrOdd () {
        for (let i = 1; i <= 10; i++) {
            let randomNum = Math.floor(Math.random() * 181) + 20;
            if (randomNum % 2 === 0) {
                console.log(randomNum + " is an even number!");
            } else {
                console.log(randomNum + " is an odd number!");
            }
        }
    }

    evenOrOdd()

    //3.
    function numberPyramid() {
        for (let y = 1; y < 10; y++) {
            let str = "";
            for (let x = 1; x <= y; x++) {
                str += y;
            }
            console.log(str);
        }
    }
    numberPyramid();

    function numberPyramidTwo() {
        for (let g = 1; g < 10; g++) {
            console.log(g.toString().repeat(g));
        }
    }
    numberPyramidTwo();

    //4.
    function byFive(i) {
        for (i; i > 0; i -= 5) {
            console.log(i)
        }
    }
    byFive(100)


})();
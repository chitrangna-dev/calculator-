let display = document.getElementById("display");

let buttons = document.querySelectorAll("button");

buttons.forEach(function(button){

    button.addEventListener("click", function(){

        let value = button.innerText;

        // Clear
        if(value == "C"){

            display.value = "";
        }

        // Backspace
        else if(value == "⌫"){

            display.value = display.value.slice(0,-1);
        }

        // Equal
        else if(value == "="){

            try{

                display.value = eval(display.value);

            }

            catch{

                alert("Invalid Calculation!");

                display.value = "";
            }
        }

        // Percentage
        else if(value == "%"){

            display.value = Number(display.value) / 100;
        }

        // Numbers & Operators
        else{

            display.value += value;
        }

    });

});
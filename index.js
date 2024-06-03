document.querySelectorAll(".question-button")[0].addEventListener("click", function () {

    if (document.querySelectorAll(".question-input")[0].value = "Jess") {

        console.log(document.querySelectorAll(".body-section")[0].classList.add("green"));

    }

})

document.querySelectorAll(".question-button")[1].addEventListener("click", function () {

    if (document.querySelectorAll(".question-input")[1].value = "The Pink Pony") {

        console.log(document.querySelectorAll(".body-section")[1].classList.add("green"));

    }

})

document.querySelectorAll(".question-button")[2].addEventListener("click", function () {

    document.querySelectorAll(".body-section")[2].classList.remove("red", "blue", "yellow", "orange", "purple", "green");
    
    var questionThreeInput = document.querySelectorAll(".question-input")[2].value;
    
    switch (questionThreeInput) {

        case "Red":
            document.querySelectorAll(".body-section")[2].classList.add("red");
            break;

        case "Blue":
            document.querySelectorAll(".body-section")[2].classList.add("blue");
            break;

        case "Yellow":
            document.querySelectorAll(".body-section")[2].classList.add("yellow");
            break;

        case "Orange":
            document.querySelectorAll(".body-section")[2].classList.add("orange");
            break;

        case "Purple":
            document.querySelectorAll(".body-section")[2].classList.add("purple");
            break;

        case "Green":
            document.querySelectorAll(".body-section")[2].classList.add("green");
            break;

        default:
            console.log(questionThreeInput);
            break;
    }

})


// the below works, but it's a switch - better used for the bonus question

// document.querySelector("#question-button-1").addEventListener("click", function () {

//     var questionOneAnswer = document.querySelector("#question-input-1").value;

//     switch (questionOneAnswer) {
//         case "Jess":
//             document.querySelector(".body-section").classList.add("green");
//             break;

//         default:
//             console.log(questionOneAnswer);
//             break;
//     }
// })
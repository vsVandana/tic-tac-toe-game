console.log("welcome to tic-tac-toe");
let turn = "X";
let game_info = document.getElementsByClassName("game_info");
let turn_music = new Audio("shot.mp3");
let win_music = new Audio("win_sound.mp3");

let is_game_over = false;


// change turn----------------------------------------------------------
function change_turn() {
    return turn === "X" ? "0" : "X";
}


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let box_text = element.querySelector(".box_text");
    element.addEventListener("click", () => {
        if (box_text.innerText === "") {
            box_text.innerText = turn;
            turn = change_turn();
            turn_music.play();
            check_Win();
            if (!is_game_over) {
                document.querySelector(".game_info").innerText = "Turn For " + turn;
            }
        }

    })

});

// for check winner---------------------------------------------------

let box_text = document.getElementsByClassName("box_text");
function check_Win() {
    let winners = [
        [0, 1, 2,0,4,0],
        [3, 4, 5,0,10,0],
        [6, 7, 8,0,16,0],
        [0, 3, 6,-6,10,90],
        [1, 4, 7,0,10,90],
        [2, 5, 8,6,10,90],
        [0, 4, 8,0,10,45],
        [2, 4, 6,0,10,135],
    ]

    winners.forEach(e => {
        if ((box_text[e[0]].innerText === box_text[e[1]].innerText) && (box_text[e[2]].innerText === box_text[e[1]].innerText) && (box_text[e[0]].innerText !== "")) {
            document.querySelector(".game_info").innerText = box_text[e[0]].innerText + "  won";
            is_game_over = false;
            turn_music.pause();
            win_music.play();
            document.querySelector(".win_img").getElementsByTagName('img')[0].style.width = "100vw";
            document.querySelector(".win_img").getElementsByTagName('img')[0].style.height = "100vh";
            document.querySelector(".red_line").style.transform =  `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".red_line").style.width = "17vw"
            console.log( document.querySelector(".red_line"));
            
        }

    });
}

// reset-------------------------------------------------------------


 document.querySelector(".reset").addEventListener("click", () => {
                    console.log(document.querySelector(".reset"));
               
                    Array.from(box_text).forEach(element => {
                           element.innerText = "";
                    })
                    win_music.pause();
                    document.querySelector(".game_info").innerText = "Turn For X" ;
                document.querySelector(".win_img").getElementsByTagName('img')[0].style.width = "0px";
                document.querySelector(".red_line").style.width = "0vw"
})


// function reset() {
//                     console.log(document.querySelector(".reset"));
               
//                     Array.from(box_text).forEach(element => {
//                            element.innerText = "";
//                     })
//                     win_music.pause();
//                     document.querySelector(".game_info").innerText = "Turn For X" ;
//                 document.querySelector(".win_img").getElementsByTagName('img')[0].style.width = "0px";
//                 document.querySelector(".red_line").style.width = "0vw"
// }
// reset();
/*
File: scrabble.js
GUI Assignment: Implementing a Bit of Scrabble with Drag-and-Drop
Akshat Thapa, UMass Lowell Computer Science, akshat_thapa@student.uml.edu
Copyright (c) 2023 by Akshat. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by AT on June 29, 2023 at 9:00 PM
*/
/* Implementing data structure for scrabble tiles */
var data = []
data["A"] = { 
    "letter": "A", 
    "value": 1, 
    "amount": 9, 
    "img": "<img src='pictures/Scrabble_Tiles/Scrabble_Tile_A.jpg'>" 
}
data["B"] = { 
    "letter": "B", 
    "value": 3, 
    "amount": 2, 
    "img": "<img src='pictures/Scrabble_Tiles/Scrabble_Tile_B.jpg'>" 
}
data["C"] = { 
    "letter": "C", 
    "value": 3, 
    "amount": 2, 
    "img": "<img src='pictures/Scrabble_Tiles/Scrabble_Tile_C.jpg'>" 
}
data["D"] = { 
    "letter": "D", 
    "value": 2, 
    "amount": 4, 
    "img": "<img src='pictures/Scrabble_Tiles/Scrabble_Tile_D.jpg'>" 
}
data["E"] = { 
    "letter": "E", 
    "value": 1, 
    "amount": 12, 
    "img": "<img src='pictures/Scrabble_Tiles/Scrabble_Tile_E.jpg'>" 
}
data["F"] = { 
    "letter": "F", 
    "value": 4, 
    "amount": 2, 
    "img": "<img src='pictures/Scrabble_Tiles/Scrabble_Tile_F.jpg'>" 
}
data["G"] = { 
    "letter": "G", 
    "value": 2, 
    "amount": 3, 
    "img": "<img src='pictures/Scrabble_Tiles/Scrabble_Tile_G.jpg'>" 
}
data["H"] = { 
    "letter": "H", 
    "value": 4, 
    "amount": 2, 
    "img": "<img src='pictures/Scrabble_Tiles/Scrabble_Tile_H.jpg'>" 
}
data["I"] = { 
    "letter": "I", 
    "value": 1, 
    "amount": 9, 
    "img": "<img src='pictures/Scrabble_Tiles/Scrabble_Tile_I.jpg'>" 
}
data["J"] = { 
    "letter": "J", 
    "value": 8, 
    "amount": 1, "img": 
    "<img src='pictures/Scrabble_Tiles/Scrabble_Tile_J.jpg'>" 
}
data["K"] = { 
    "letter": "K", 
    "value": 5, 
    "amount": 1, 
    "img": "<img src='pictures/Scrabble_Tiles/Scrabble_Tile_K.jpg'>" 
}
data["L"] = { 
    "letter": "L", 
    "value": 1, 
    "amount": 4, 
    "img": "<img src='pictures/Scrabble_Tiles/Scrabble_Tile_L.jpg'>" 
}
data["M"] = { 
    "letter": "M", 
    "value": 3, 
    "amount": 2, 
    "img": "<img src='pictures/Scrabble_Tiles/Scrabble_Tile_M.jpg'>" 
}
data["N"] = { 
    "letter": "N", 
    "value": 1, 
    "amount": 6, 
    "img": "<img src='pictures/Scrabble_Tiles/Scrabble_Tile_N.jpg'>" 
}
data["O"] = { 
    "letter": "O", 
    "value": 1, 
    "amount": 8, 
    "img": "<img src='pictures/Scrabble_Tiles/Scrabble_Tile_O.jpg'>" 
}
data["P"] = { 
    "letter": "P", 
    "value": 3, 
    "amount": 2, 
    "img": "<img src='pictures/Scrabble_Tiles/Scrabble_Tile_P.jpg'>" 
}
data["Q"] = { 
    "letter": "Q", 
    "value": 10, 
    "amount": 1, 
    "img": "<img src='pictures/Scrabble_Tiles/Scrabble_Tile_Q.jpg'>" 
}
data["R"] = { 
    "letter": "R", 
    "value": 1, 
    "amount": 6, 
    "img": "<img src='pictures/Scrabble_Tiles/Scrabble_Tile_R.jpg'>" 
}
data["S"] = { 
    "letter": "S", 
    "value": 1, 
    "amount": 4, 
    "img": "<img src='pictures/Scrabble_Tiles/Scrabble_Tile_S.jpg'>" 
}
data["T"] = { 
    "letter": "T", 
    "value": 1, 
    "amount": 6, 
    "img": "<img src='pictures/Scrabble_Tiles/Scrabble_Tile_T.jpg'>" 
}
data["U"] = { 
    "letter": "U", 
    "value": 1, 
    "amount": 4, 
    "img": "<img src='pictures/Scrabble_Tiles/Scrabble_Tile_U.jpg'>" 
}
data["V"] = { 
    "letter": "V", 
    "value": 4, 
    "amount": 2, 
    "img": "<img src='pictures/Scrabble_Tiles/Scrabble_Tile_V.jpg'>" 
}
data["W"] = { 
    "letter": "W", 
    "value": 4, 
    "amount": 2, 
    "img": "<img src='pictures/Scrabble_Tiles/Scrabble_Tile_W.jpg'>" 
}
data["X"] = { 
    "letter": "X", 
    "value": 8, 
    "amount": 1, 
    "img": "<img src='pictures/Scrabble_Tiles/Scrabble_Tile_X.jpg'>" 
}
data["Y"] = { 
    "letter": "Y", 
    "value": 4, 
    "amount": 2, 
    "img": "<img src='pictures/Scrabble_Tiles/Scrabble_Tile_Y.jpg'>" 
}
data["Z"] = { 
    "letter": "Z", 
    "value": 10, 
    "amount": 1, 
    "img": "<img src='pictures/Scrabble_Tiles/Scrabble_Tile_Z.jpg'>" 
}
data["_"] = { 
    "letter": "_", 
    "value": 0, 
    "amount": 1, 
    "img": "<img src='pictures/Scrabble_Tiles/Scrabble_Tile_Blank.jpg'>" 
}

/* Making copy of data structure to maintain original values and declaring scrabble values variables*/
var tiles = Object.assign({}, data)
var word = "";
var index = 0;
var score = 0;
var max_tiles = 100;

/* Function: randomly creates tiles along with accurately keeping ramaing tiles count */ 
function create_tiles(numTiles) {
    for (var i = 0; i < numTiles; i++) {
        randomLetter = random_val(tiles)["letter"]
        console.log(randomLetter)
        randomTile = tiles[randomLetter]["img"]
        tiles[randomLetter]['amount'] -= 1
        if (tiles[randomLetter]['amount'] == 0) {
            delete tiles[randomLetter];
        }
        if (max_tiles == 0) {
            $("#outOfTiles").html("Please restart the game to continue playing.");
            return;
        }
        $("#rack ul").append("<li id='" + randomLetter + "'>" + randomTile + "</li > ");
        max_tiles = max_tiles - 1;
    }
}
/* Function that makes sure first block is droppable and the next one with sequentially be dropped */
function tile_drag_drop() {
    unused_tiles();
    $("#board li").droppable();
    $("#spot" + '0').droppable('enable')
    for (var i = 1; i < 7; i++) {
        $("#spot" + i).droppable('disable')
    }
    $('#rack li').droppable('disable');
    $("#rack li").draggable({
        revert: function (event, ui) {
            $(this).data("uiDraggable").originalPosition = {
                top: 0,
                left: 0,
            };
            return !event;
        }
    });
}

/* Function to make sure the tiles are draggable through board */
$(function () {
    $("#rack li").draggable({
        revert: function (event, ui) {
            $(this).data("uiDraggable").originalPosition = {
                top: 0,
                left: 0,
            };
            return !event;
        }
    });
    /* Adding points to total score as well as making sure tiles are dropped in the correct locations */
    $("#board li").droppable({
        drop: function (event, ui) {
            $("#spot" + index).droppable('disable');
            index += 1;
            $("#spot" + index).droppable('enable');
            var $this = $(this);
            console.log(this)
            var draggable = ui.draggable;
            ui.draggable.draggable({ disabled: true });
            letter = draggable.attr('id')
            display_word(letter)
            var points = data[letter]['value'];
            add_score(points);
            console.log(data[letter])
            ui.draggable.position({
                my: "center",
                at: "center",
                of: $this,
                using: function (pos) {
                    $(this).animate(pos, 200, "linear");
                }
            });

        }
    });
});

/* Function to make sure total score is updated accurtely */
function add_score(points) {
    if (index == 2 || index == 5) {
        points = points * 2;
    }
    score += points;
    $("#score").html("Score: " + score);
}

/* Function to display current word applied to scrabble board */
function display_word(letter) {
    word = word + letter;
    $("#word").html("Word: " + word);
}

/* Function to maintain remaing tiles correctly */
function unused_tiles() {
    $("#unused_tiles").html("Remaining Tiles: " + max_tiles);
}

/* Function to make sure once a word is created delete the word and go on to the next round */
function suggest_word() {
    index = 0;
    document.querySelectorAll('.ui-draggable-disabled').forEach(e => e.remove());
    create_tiles(word.length);
    tile_drag_drop();
    word = ""
    $("#word").html("Word: " + word);
}

/* Function to make sure we can completely restart game as well as all data */
function restart_game() {
    window.location.reload();
}

/* Implementing random property for object */
var random_val = function (obj) {
    var keys = Object.keys(obj);
    return obj[keys[keys.length * Math.random() << 0]];
};

/* STARTING SCRABBLE GAME */
create_tiles(7);
tile_drag_drop();
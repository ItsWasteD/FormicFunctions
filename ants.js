//Name: Starminer Ants
//By: github.com/ItsWasteD

var ME = view[4].ant;

//TYPES
var MINER = 1;
var XMINER = 3;
var BACKUP = 2;

var COLORS = {
    WHITE: 1,
    YELLOW: 2,
    PINK: 3,
    CYAN: 4,
    RED: 5,
    GREEN: 6,
    BLUE: 7,
    BLACK: 8,
    ORIENTATION: this.BLACK
};

switch (ME.type) {

    case 5:
        if (ME.food < 4) {
            return stateAction(1);
        } else if (getFriendlyAntCount() < 4 && !isOrientationSet()) {
            stateAction(2);
        }
        break;

    case 1:
        break;

    case 2:
        break;

    case 3:
        break;

    case 4:
        break;

    default:
        //console.log("Something went wrong!");
        break;
}

/******************* FUNCTIONS *********************/

function stateAction(state) {
    console.log("stateAction: " + state);
    switch (state) {
        case 1:
            return findFood();
            console.log("still in");
            break;
        case 2:
            setOrientation();
            break;
        case 3:
            spawnMiner();
            break;
    }
}

function findFood() {
    console.log("Find food: " + {cell: 0});
    if(isMovingPositionMarkerSet()) {
        return {cell: getMovingPositionMarker()};
    } else {
        return {cell: 2, color: COLORS.BLUE};
    }
}

function getFriendlyAntCount() {
    console.log("getFriendlyAntCounter");
    var counter = 0;

    for (var i = 0; i < 9; i++) {
        if (view[i].ant != null && view[i].ant.friend) {
            counter++;
        }
    }

    return counter;
}

function isOrientationSet() {
    for (var i = 0; i < 9; i++) {
        if (view[i].color == COLORS.ORIENTATION) {
            return true;
        }
    }

    return false;
}

function setOrientation() {
    return {cell: 0, color: COLORS.BLACK};
}

function isMovingPositionMarkerSet() {
    var markerPos;
    for(var i = 0; i < 9; i++) {
        if(view[i].color == COLORS.BLUE) {
            
        }
    }
}
getchar = () => {
    document.getElementById("pat").innerHTML = ""
    let char = document.getElementById("character").value
    var len = char.length
    console.log(len)
    for (let l = 0; l < char.length; l++) {
        switch (char[l]) {
            case 'a':
                alphabetA(8);
                break;
            case 'A':
                alphabetA(8);
                break;
            case 'b':
                alphabetB(8);
                break;
            case 'B':
                alphabetB(8);
                break;
            case 'c':
                alphabetC(8);
                break;
            case 'C':
                alphabetC(8);
                break;
            case 'd':
                alphabetD(8);
                break;
            case 'D':
                alphabetD(8);
                break;
            case 'e':
                alphabetE(8);
                break;
            case 'E':
                alphabetE(8);
                break;
            case 'f':
                alphabetF(8);
                break;
            case 'F':
                alphabetF(8);
                break;
            case 'g':
                alphabetG(8);
                break;
            case 'G':
                alphabetG(8);
                break;
            case 'h':
                alphabetH(8);
                break;
            case 'H':
                alphabetH(8);
                break;
            case 'i':
                alphabetI(8);
                break;
            case 'I':
                alphabetI(8);
                break;
            case 'j':
                alphabetJ(8);
                break;
            case 'J':
                alphabetJ(8);
                break;
            case 'k':
                alphabetK(8);
                break;
            case 'K':
                alphabetK(8);
                break;
            case 'l':
                alphabetL(8);
                break;
            case 'L':
                alphabetL(8);
                break;
            case 'm':
                alphabetM(8);
                break;
            case 'M':
                alphabetM(8);
                break;
            case 'n':
                alphabetN(8);
                break;
            case 'N':
                alphabetN(8);
                break;
            case 'o':
                alphabetO(8);
                break;
            case 'O':
                alphabetO(8);
                break;
            case 'p':
                alphabetP(8);
                break;
            case 'P':
                alphabetP(8);
                break;
            case 'q':
                alphabetQ(8);
                break;
            case 'Q':
                alphabetQ(8);
                break;
            case 'r':
                alphabetR(8);
                break;
            case 'R':
                alphabetR(8);
                break;
            case 's':
                alphabetS(8);
                break;
            case 'S':
                alphabetS(8);
                break;
            case 't':
                alphabetT(8);
                break;
            case 'T':
                alphabetT(8);
                break;
            case 'u':
                alphabetU(8);
                break;
            case 'U':
                alphabetU(8);
                break;
            case 'v':
                alphabetV(8);
                break;
            case 'V':
                alphabetV(8);
                break;
            case 'w':
                alphabetW(8);
                break;
            case 'W':
                alphabetW(8);
                break;
            case 'x':
                alphabetX(8);
                break;
            case 'X':
                alphabetX(8);
                break;
            case 'y':
                alphabetY(8);
                break;
            case 'Y':
                alphabetY(8);
                break;
            case 'z':
                alphabetZ(8);
                break;
            case 'Z':
                alphabetZ(8);
                break;
            default:
                space();
        }
    }
}

function space() {
    var str = '<br><br><br><br><br><br><br><br>'
    document.getElementById("pat").innerHTML = document.getElementById("pat").innerHTML + str
}


function alphabetA(height) {
    let str = ""
    for (let row = 0; row < height; row++) {
        for (let col = 0; col <= height / 2; col++) {
            if (((col == 0 || col == height / 2) && row != 0) || (row == 0 && col != 0 && col != height / 2) || (row == height / 2)) {
                str += "a "
            }
            else
                str += "  "
        }
        str += "<br>"
    }
    document.getElementById("pat").innerHTML = document.getElementById("pat").innerHTML + `<div style="float: left;margin-left: 10px; margin-right: 10px;max-width: fit-content;;"><pre>${str}</pre><div>`
}

function alphabetB(height) {
    let str = ""
    for (let row = 0; row < height; row++) {
        for (let col = 0; col <= height / 2; col++) {
            if ((col == 0) || (row == 0 && col != height / 2) || (row == height / 2 && col != height / 2) || (row == height - 1 && col != height / 2) || (col == height / 2 && (row >= 1 && row < height / 2)) || (col == height / 2 && (row > height / 2 && row < height - 1))) {
                str += "b "
            }
            else
                str += "  "
        }
        str += "<br>"
    }
    document.getElementById("pat").innerHTML = document.getElementById("pat").innerHTML + `<div style="float: left;margin-left: 10px; margin-right: 10px;max-width: fit-content;;"><pre>${str}</pre><div>`
}

function alphabetC(height) {
    let str = ""
    for (let row = 0; row < height; row++) {
        for (let col = 0; col <= height / 2; col++) {
            if ((col == 0 && (row != 0 && row != height - 1)) || (row == 0 && col != 0) || (row == height - 1 && col != 0)) {
                str += "c "
            }
            else
                str += "  "
        }
        str += "<br>"
    }
    document.getElementById("pat").innerHTML = document.getElementById("pat").innerHTML + `<div style="float: left;margin-left: 10px; margin-right: 10px;max-width: fit-content;;"><pre>${str}</pre><div>`
}

function alphabetD(height) {
    let str = ""
    for (let row = 0; row < height; row++) {
        for (let col = 0; col <= height / 2; col++) {
            if ((col == 0) || ((row == 0 || row == height - 1) && (col != height / 2)) || (col == height / 2 && (row != 0 || row != height - 1))) {
                str += "d "
            }
            else
                str += "   "
        }
        str += "<br>"
    }
    document.getElementById("pat").innerHTML = document.getElementById("pat").innerHTML + `<div style="float: left;margin-left: 10px; margin-right: 10px;max-width: fit-content;;"><pre>${str}</pre><div>`
}


function alphabetE(height) {
    let str = ""
    for (let row = 0; row < height; row++) {
        for (let col = 0; col <= height / 2; col++) {
            if ((col == 0) || (row == 0) || (row == height / 2) || (row == height - 1)) {
                str += "e "
            }
            else
                str += "  "
        }
        str += "<br>"
    }
    document.getElementById("pat").innerHTML = document.getElementById("pat").innerHTML + `<div style="float: left;margin-left: 10px; margin-right: 10px;max-width: fit-content;;"><pre>${str}</pre><div>`
}


function alphabetF(height) {
    let str = ""
    for (let row = 0; row < height; row++) {
        for (let col = 0; col <= height / 2; col++) {
            if ((col == 0) || (row == 0) || (row == height / 2)) {
                str += "f "
            }
            else
                str += "  "
        }
        str += "<br>"
    }
    document.getElementById("pat").innerHTML = document.getElementById("pat").innerHTML + `<div style="float: left;margin-left: 10px; margin-right: 10px;max-width: fit-content;;"><pre>${str}</pre><div>`
}


function alphabetG(height) {
    let str = ""
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < height; col++) {
            if ((row == 0 && col != 0 && col!= height-1)|| (col==height-1&&row==1) || (col == 0 && row != 0 && row <= height - 2) || (row == height-1  && col < height / 2  && col != 0) || col == height / 2  && (row >= height / 2 && row <= height -1) || (row == height / 2 && col >= height / 2) || (col == height - 1 && row > height / 2)) {
                str += "g "
            }
            else
                str += "  "
        }
        str += "<br>"
    }
    document.getElementById("pat").innerHTML = document.getElementById("pat").innerHTML + `<div style="float: left;margin-left: 10px; margin-right: 10px;max-width: fit-content;;"><pre>${str}</pre><div>`
}


function alphabetH(height) {
    let str = ""
    for (let row = 0; row < height; row++) {
        for (let col = 0; col <= height / 2; col++) {
            if (col == 0 || col == height / 2 || row == height / 2) {
                str += "h "
            }
            else
                str += "  "
        }
        str += "<br>"
    }
    document.getElementById("pat").innerHTML = document.getElementById("pat").innerHTML + `<div style="float: left;margin-left: 10px; margin-right: 10px;max-width: fit-content;;"><pre>${str}</pre><div>`
}


function alphabetI(height) {
    let str = ""
    for (let row = 0; row < height; row++) {
        for (let col = 0; col <= height; col++) {
            if (row == 0 || row == height - 1 || col == Number.parseInt(height / 2)) {
                str += "i "
            }
            else
                str += "  "
        }
        str += "<br>"
    }
    document.getElementById("pat").innerHTML = document.getElementById("pat").innerHTML + `<div style="float: left;margin-left: 10px; margin-right: 10px;max-width: fit-content;;"><pre>${str}</pre><div>`
}


function alphabetJ(height) {
    let str = ""
    for (let row = 0; row < height; row++) {
        for (let col = 0; col <= height; col++) {
            if (row == 0 || (col == height / 2 && row != height - 1) || (row == height - 1 && (col > 0 && col < height / 2)) || col == 0 && (row >= height / 2 && row <= height - 2)) {
                str += "j "
            }
            else
                str += "  "
        }
        str += "<br>"
    }
    document.getElementById("pat").innerHTML = document.getElementById("pat").innerHTML + `<div style="float: left;margin-left: 10px; margin-right: 10px;max-width: fit-content;;"><pre>${str}</pre><div>`
}


function alphabetK(height) {
    let str = ""
    for (let row = 0; row < height; row++) {
        for (let col = 0; col <= height / 2; col++) {
            if ((col == 0) || (row + col == height / 2) || (row - col == height / 2)) {
                str += "k "
            }
            else
                str += "  "
        }
        str += "<br>"
    }
    document.getElementById("pat").innerHTML = document.getElementById("pat").innerHTML + `<div style="float: left;margin-left: 10px; margin-right: 10px;max-width: fit-content;;"><pre>${str}</pre><div>`
}


function alphabetL(height) {
    let str = ""
    for (let row = 0; row < height; row++) {
        for (let col = 0; col <= height / 2; col++) {
            if (col == 0 || row == height - 1) {
                str += "l "
            }
            else
                str += "  "
        }
        str += "<br>"
    }
    document.getElementById("pat").innerHTML = document.getElementById("pat").innerHTML + `<div style="float: left;margin-left: 10px; margin-right: 10px;max-width: fit-content;;"><pre>${str}</pre><div>`
}


function alphabetM(height) {
    let str = ""
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < height; col++) {
            if ((col == 0) || (col == height - 1) || (row == col && row <= height / 2 - 1) || (row + col == height - 1 && col >= height / 2)) {
                str += "m "
            }
            else
                str += "  "
        }
        str += "<br>"
    }
    document.getElementById("pat").innerHTML = document.getElementById("pat").innerHTML + `<div style="float: left;margin-left: 10px; margin-right: 10px;max-width: fit-content;;"><pre>${str}</pre><div>`
}


function alphabetN(height) {
    let str = ""
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < height; col++) {
            if ((col == 0) || (col == height - 1) || (row == col)) {
                str += "n "
            }
            else
                str += "  "
        }
        str += "<br>"
    }
    document.getElementById("pat").innerHTML = document.getElementById("pat").innerHTML + `<div style="float: left;margin-left: 10px; margin-right: 10px;max-width: fit-content;;"><pre>${str}</pre><div>`
}


function alphabetO(height) {
    let str = ""
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < height; col++) {
            if (((row == height - 1 || row == 0) && col != 0 && col != height - 1) || ((col == 0 || col == height - 1) && row != 0 && row != height - 1)) {
                str += "o "
            }
            else
                str += "  "
        }
        str += "<br>"
    }
    document.getElementById("pat").innerHTML = document.getElementById("pat").innerHTML + `<div style="float: left;margin-left: 10px; margin-right: 10px;max-width: fit-content;;"><pre>${str}</pre><div>`
}


function alphabetP(height) {
    let str = ""
    for (let row = 0; row < height; row++) {
        for (let col = 0; col <= height / 2; col++) {
            if ((col == 0) || ((row == 0 || row == height / 2) && col != height / 2) || (col == height / 2 && row > 0 && row < height / 2)) {
                str += "p "
            }
            else
                str += "  "
        }
        str += "<br>"
    }
    document.getElementById("pat").innerHTML = document.getElementById("pat").innerHTML + `<div style="float: left;margin-left: 10px; margin-right: 10px;max-width: fit-content;;"><pre>${str}</pre><div>`
}


function alphabetQ(height) {
    let str = ""
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < height; col++) {
            if ((col == 0 && row != 0 && row < height / 2 + 1) || ((row == 0 || row == height / 2 + 1) && col != 0 && col <= height / 2 + 1) || ((col == height / 2 + 2) && row != 0 && row < height / 2 + 1) || (row + 1 == col+1 && row >= height / 2 - 1)) {
                str += "q "
            }
            else
                str += "  "
        }
        str += "<br>"
    }
    document.getElementById("pat").innerHTML = document.getElementById("pat").innerHTML + `<div style="float: left;margin-left: 10px; margin-right: 10px;max-width: fit-content;;"><pre>${str}</pre><div>`
}


function alphabetR(height) {
    let str = ""
    for (let row = 0; row < height; row++) {
        for (let col = 0; col <= height / 2; col++) {
            if ((col == 0) || ((row == 0 || row == height / 2) && col != height / 2) || (col == height / 2 && row > 0 && row < height / 2) || (row - col == height / 2 && row >= height / 2)) {
                str += "r "
            }
            else
                str += "  "
        }
        str += "<br>"
    }
    document.getElementById("pat").innerHTML = document.getElementById("pat").innerHTML + `<div style="float: left;margin-left: 10px; margin-right: 10px;max-width: fit-content;;"><pre>${str}</pre><div>`
}


function alphabetS(height) {
    let str = ""
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < height; col++) {
            if ((row == 0 && col != 0&&col!=height-1)||(col==height-1&&row==1) || (row == height / 2 && col != height - 1 && col != 0) ||((row==height-2&&col==0)||(row==height-2&&col==height-1))|| (col!=0 && row == height-1 && col != height - 1) || (col == 0 && row > 0 && row < height / 2) || (col == height - 1 && row > height / 2 && row < height-1)) {
                str += "s "
            }
            else
                str += "  "
        }
        str += "<br>"
    }
    document.getElementById("pat").innerHTML = document.getElementById("pat").innerHTML + `<div style="float: left;margin-left: 10px; margin-right: 10px;max-width: fit-content;;"><pre>${str}</pre><div>`
}

function alphabetT(height) {
    let str = ""
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < height; col++) {
            if (row == 0 || col == height / 2) {
                str += "t "
            }
            else
                str += "  "
        }
        str += "<br>"
    }
    document.getElementById("pat").innerHTML = document.getElementById("pat").innerHTML + `<div style="float: left;margin-left: 10px; margin-right: 10px;max-width: fit-content;;"><pre>${str}</pre><div>`
}


function alphabetU(height) {
    let str = ""
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < height; col++) {
            if (((col == 0 || col == height - 1) && row != height - 1) || ((row == height - 1) && (col != 0) && (col != height - 1))) {
                str += "u "
            }
            else
                str += "  "
        }
        str += "<br>"
    }
    document.getElementById("pat").innerHTML = document.getElementById("pat").innerHTML + `<div style="float: left;margin-left: 10px; margin-right: 10px;max-width: fit-content;;"><pre>${str}</pre><div>`
}


function alphabetV(height) {
    let str = ""
    for (let row = 0; row < height; row++) {
        for (let col = 0; col <= 2 * height; col++) {
            if ((row == col || row + col == 2 * height)) {
                str += "v"
            }
            else
                str += " "
        }
        str += "<br>"
    }
    document.getElementById("pat").innerHTML = document.getElementById("pat").innerHTML + `<div style="float: left;margin-left: 10px; margin-right: 10px;max-width: fit-content;"><pre>${str}</pre><div>`
}



function alphabetW(height) {
    let str = ""
    for (let row = 0; row < height; row++) {
        for (let col = 0; col <= 3 * height; col++) {
            if (row == col || (row + col == 2 * height - 2 && row >= height / 2) || (col - row == height && row >= height / 2) || row + col == 3 * height - 2) {
                str += "w"
            }
            else
                str += " "
        }
        str += "<br>"
    }
    document.getElementById("pat").innerHTML = document.getElementById("pat").innerHTML + `<div style="float: left;margin-left: 10px; margin-right: 10px;max-width: fit-content;;"><pre>${str}</pre><div>`
}


function alphabetX(height) {
    let str = ""
    for (let row = 0; row < height; row++) {
        for (let col = 0; col <= height; col++) {
            if ((row == col || row + col == height)) {
                str += "x "
            }
            else
                str += "  "
        }
        str += "<br>"
    }
    document.getElementById("pat").innerHTML = document.getElementById("pat").innerHTML + `<div style="float: left;margin-left: 10px; margin-right: 10px;max-width: fit-content;;"><pre>${str}</pre><div>`
}

function alphabetY(height) {
    let str = ""
    for (let row = 0; row < height; row++) {
        for (let col = 0; col <= height; col++) {
            if ((row == col && row <= height / 2) || row + col == height) {
                str += "y"
            }
            else
                str += " "
        }
        str += "<br>"
    }
    document.getElementById("pat").innerHTML = document.getElementById("pat").innerHTML + `<div style="float: left;margin-left: 10px; margin-right: 10px;max-width: fit-content;;"><pre>${str}</pre><div>`
}


function alphabetZ(height) {
    let str = ""
    for (let row = 0; row < height; row++) {
        for (let col = 0; col <= height; col++) {
            if (row == 0 || row == height-1 || row + col == height) {
                str += "z "
            }
            else
                str += "  "
        }
        str += "<br>"
    }
    document.getElementById("pat").innerHTML = document.getElementById("pat").innerHTML + `<div style="float: left;margin-left: 10px; margin-right: 10px;max-width: fit-content;;"><pre>${str}</pre><div>`
}


// alphabetA(10)
// alphabetB(10)
// alphabetC(10)
// alphabetD(10)
// alphabetE(10)
// alphabetF(10)
// alphabetG(10)
// alphabetH(10)
// alphabetI(10)
// alphabetJ(10)
// alphabetK(10)
// alphabetL(10)
// alphabetM(10)
// alphabetN(10)
// alphabetO(10)// alphabetP(10)
// alphabetQ(10)
// alphabetR(10)
// alphabetS(12)
// alphabetT(12)
// alphabetU(12)
// alphabetV(12)
// alphabetW(12)
// alphabetX(12)// alphabetY(12)
// alphabetZ(12)
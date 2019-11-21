const keyboard = [
    {
        key : "TAB",
        keycode : 9
    },
    {
        key : "Q",
        keycode : 81
    },
    {
        key : "W",
        keycode : 87
    },
    {
        key : "E",
        keycode : 69
    },
    {
        key : "R",
        keycode : 82
    },
    {
        key : "T",
        keycode : 84
    },
    {
        key : "Y",
        keycode : 89
    },
    {
        key : "U",
        keycode : 85
    },
    {
        key : "I",
        keycode : 73
    },
    {
        key : "O",
        keycode : 79
    },
    {
        key : "P",
        keycode : 80
    },
    {
        key : "[",
        keycode : 219
    },
    {
        key : "]",
        keycode : 221
    },
    {
        key : "|",
        keycode : 220
    },
    {
        key : "CAPS LOCK",
        keycode : 20
    },
    {
        key : "A",
        keycode : 65
    },
    {
        key : "S",
        keycode : 83
    },
    {
        key : "D",
        keycode : 68
    },
    {
        key : "F",
        keycode : 70
    },
    {
        key : "G",
        keycode : 71
    },
    {
        key : "H",
        keycode : 72
    },
    {
        key : "J",
        keycode : 74
    },
    {
        key : "K",
        keycode : 75
    },
    {
        key : "L",
        keycode : 76
    },
    {
        key : ";",
        keycode : 186
    },
    {
        key : "'",
        keycode : 222
    },
    {
        key : "ENTER",
        keycode : 13
    },
    {
        key : "Shift",
        keycode : 16
    },
    {
        key : "Z",
        keycode : 90
    },
    {
        key : "X",
        keycode : 88
    },
    {
        key : "C",
        keycode : 67
    },
    {
        key : "V",
        keycode : 86
    },
    {
        key : "B",
        keycode : 66
    },
    {
        key : "N",
        keycode : 78
    },
    {
        key : "M",
        keycode : 77
    },
    {
        key : ",",
        keycode : 188
    },
    {
        key : ".",
        keycode : 190
    },
    {
        key : "/",
        keycode : 191
    },
    {
        key : "Shift",
        keycode : 16
    },
    
]; 
$(document).ready(function () {
    for (const item of keyboard) {
        $("#keyboard").append("<div class='button' id='" + item.keycode + "'>" + item.key + "</div>");
        if ( item.keycode === 220 || item.keycode === 13){
            $("#keyboard").append("<br>");
        }
    }

})
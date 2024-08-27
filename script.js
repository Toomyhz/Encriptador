keys = [
    ["a","ai"],
    ["e","enter"],
    ["i","imes"],
    ["o","ober"],
    ["u","ufat"]
]
keys1 = ["a","e","i","o","u"]

function encriptarTexto(){
    var textInput = document.getElementById('input').value;
    var encriptedText = "";
    for (var i = 0; i < textInput.length; i++) {
        var letter = textInput[i];
        if (keys1.includes(letter)){
            for (let j = 0; j < keys1.length; j++) {
                if(keys[j][0] == letter){
                    encriptedText = encriptedText + keys[j][1]
                }
            }
        }else{
            encriptedText = encriptedText + letter
        }
    }
    document.getElementById('output').value = encriptedText;
}

function desencriptarTexto(){
    var textInput = document.getElementById('input').value;
    var decriptedText = "";
    for (let j = 0; j <=4; j++) {
        console.log(keys[j][0])
        textInput = textInput.replaceAll(keys[j][1],keys[j][0])
        decriptedText = textInput
        console.log(decriptedText)
        
    }    
    document.getElementById('output').value = decriptedText;
}

function copyText() {
    var copyText = document.getElementById("output");
    copyText.select();
    document.execCommand("copy");
}
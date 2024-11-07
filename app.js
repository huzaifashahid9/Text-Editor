function fontchange(input){
    var text=document.getElementById("inputchange");
    text.style.fontSize = input.value+"px";
}



function Bold(){
    var text=document.getElementById("inputchange");
    //console.log(text);
    text.style.fontWeight = "bold";
}

function Italic(){
    var text=document.getElementById("inputchange");
    //console.log(text);
    text.style.fontStyle = "italic";
}


function underLine(){
    var text=document.getElementById("inputchange");
    //console.log(text);
    text.style.textDecoration = "underline";
}

function Right(){
    var text=document.getElementById("inputchange");
    //console.log(text);
    text.style.textAlign = "right"
}


function Center(){
    var text=document.getElementById("inputchange");
    //console.log(text);
    text.style.textAlign = "center"
}


function Left(){
    var text=document.getElementById("inputchange");
    //console.log(text);
    text.style.textAlign = "left"
}


function smallText(){
    var text=document.getElementById("inputchange");
    //console.log(text);
    text.style.textTransform = "lowercase"
}



function bigText(){
    var text=document.getElementById("inputchange");
    //console.log(text);
    text.style.textTransform = "uppercase"
}



function changeColor(input){
    var text=document.getElementById("inputchange");
    //console.log(text);
    text.style.color = input.value;
}


function reset(){
    var text=document.getElementById("inputchange");
    //console.log(text);
    text.style.fontWeight = "normal";
    text.style.fontStyle = "normal";
    text.style.textDecoration = "none";
    text.style.textAlign = "left"
    text.style.textTransform = "none"
    text.style.color = "black";
    text.style.fontSize = "16px";







    
}
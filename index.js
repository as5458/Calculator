const disp=document.getElementById("enterplace");
function display(op){
disp.value+=op;

}
function operate(){
try{disp.value=eval(disp.value);}
catch{
    disp.value="ERROR";
}

}
function cleardisplay(){
disp.value="";
}
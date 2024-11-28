const display=document.getElementById("display");

function clr(){
    display.value="";
}
function del(){
    display.value=display.value.slice(0,-1);
}
function appendOp(operator){
    const lastChar=display.value[display.value.length-1];
    if(["+","-","*","/"].includes(lastChar))
    {
        display.value=display.value.slice(0,-1)+operator;
    }
    else{
        display.value+=operator;
    }
}
function appendNum(number){
    display.value=display.value=="0"? number.toString(): display.value+number;
}
function result(){
    try{
        display.value=eval(display.value);
    }
    catch{
        display.value="Error";
    }
}
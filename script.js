var output = document.getElementById("screen");

function display(num){
    output.value += num; 
}
function calculate(){
    try{
        output.value = eval(output.value);
    }
    catch(err){
        alert = "invalid"
    }
}
 function clear(){
    output.value = "";
}


function del(){
    output.value = output.value.slice(0,-1);
}



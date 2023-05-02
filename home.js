var inputfield = document.getElementById("inp");
var choosefield = document.getElementById("t1");
var convertcelsius = document.getElementById("c1");
var convertfahrenheit = document.getElementById("f1");
var convertkelvin = document.getElementById("k1");
var conv = document.getElementById("btn1");
var res = document.getElementById("btn2");
var result = document.getElementById("res");


/*Function Convert*/
function convert(){
    if(choosefield.value == "cel"){
        if(convertcelsius.checked == true){
            result.value = inputfield.value;
        }
        else if(convertfahrenheit.checked == true){
            var temp = (inputfield.value * 9/5) + 32;
            result.value = temp.toFixed(3);
        }
        else if(convertkelvin.checked == true){
            var temp = parseInt(inputfield.value) + 273.15;
            result.value = temp.toFixed(3);
        }
    }
    else{
        if(convertcelsius.checked == true){
            var temp = ((inputfield.value - 32) * 5) / 9;
            result.value = temp.toFixed(3);
        }
        else if(convertfahrenheit.checked == true){
            result.value = inputfield.value;
        }
        else if(convertkelvin.checked == true){
            var temp = (((inputfield.value - 32) * 5) / 9) + 273.15;
            result.value = temp.toFixed(3);
        }
    }
}

/*Function Reset*/
function reset(){
    inputfield.value="";
    result.value="";
}

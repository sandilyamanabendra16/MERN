

function dis(val) { 
    document.getElementById("result").value += val 
} 

// Function that evaluates the digit and return result 
function solve() { 
    let x = document.getElementById("result").value 
    let y = eval(x) 
    document.getElementById("result").value = y 
} 

//Function to delete the string

function del(){
    const originalString=document.getElementById("result").value
    
    lastCharRemoved = originalString
            .slice(0, originalString.length - 1);

    document.getElementById("result").value = lastCharRemoved ;
}

// Function that clear the display 
function clr() { 
    document.getElementById("result").value = "" 
}

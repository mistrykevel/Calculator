function myFunction(){
    let a= parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let c = document.getElementById("operator").value;
    let d = document.getElementById("ans");

    if (c === "+") {
        d.value = (a + b);
    }

    else if(c === "-"){
        d.value = (a - b);
    }
    else if(c === "/"){
        d.value = (a / b);
    }
    else if(c ==="*"){
        d.value = (a * b)
    }
}
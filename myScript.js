window.onload = function numbers(){
    let a= parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
}

function myFunction(){
    // let a= parseInt(document.getElementById("num1").value);
    // let b = parseInt(document.getElementById("num2").value);
    let c = document.getElementById("operator");
    document.getElementById("ans").value = d
    

    if (c === "+") {
        d.html = (a + b);
    }

    else if(c === "-"){
        /*d.html =*/ let d = (a - b);
    }
    else if(c === "/"){
        /*d.html =*/ let d = (a / b);
    }
    else if(c ==="*"){
        /*d.html =*/ let d = (a * b)
    }
}

setInterval(numbers, 100);


// window.onload = function equal(){
    // docuement.getElementById("equals") = d
// }

// window.onload = function numbers(){
    // let a= parseInt(document.getElementById("num1").value);
    // let b = parseInt(document.getElementById("num2").value);
// }

// $(function(){
    // var d = $("equals")
// });
function stextshow() {
    if (document.getElementById("saletext").style.display == "block"){
        document.getElementById("saletext").style.display = "none";
        document.getElementById("sale").innerHTML="+"
    }else{
        document.getElementById("saletext").style.display = "block";
        document.getElementById("sale").innerHTML="-"
    }
}
function btextshow() {
    if (document.getElementById("btext").style.display == "none" | document.getElementById("btext").style.display == ""){
        document.getElementById("bimg").style.display = "none";
        document.getElementById("btext").style.display = "block";
        document.getElementById("profile").innerHTML = "-";
    }else{
        document.getElementById("bimg").style.display = "block";
        document.getElementById("btext").style.display = "none";
        document.getElementById("profile").innerHTML = "+";
    }
}
function profilesubmit(){
    alert("Submission successful!");
}




let i=0;

function incNumber(){
    i+=1;
    document.getElementById("output-box").value=i;
}

function decNumber(){
    i-=1;
    document.getElementById("output-box").value=i;
}

function Reset(){
    i=0;
    document.getElementById("output-box").value=i;
}
let outputscreen = document.getElementById("output-screen");
function display(num){
    outputscreen.value += num;
}
function calculator(){
    try{
        outputscreen.value = eval(outputscreen.value);
    }
    catch(err){
        alert("Data yang diinputkan tidak valid!")
    }
}

//Function yang digunakan untuk menghapus keseluruhan input/output
function bersihin(){
    outputscreen.value="";

}
//Function yang digunakan untuk menghapus sebagian input/output
function del(){
    outputscreen.value = outputscreen.value.slice(0,-1);
}
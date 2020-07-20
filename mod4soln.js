
function consoleJName(nameArray){
	for (var i = 0; i < nameArray.length; i++){
  	if(nameArray[i].charAt(0) == "j" || nameArray[i].charAt(0) == "J"){
    console.log("Goodbye JsomeName.")
    } 
    else{
    console.log("Hello SomeName.")
    }
    }
};


arr = ["jb", "Juuuu", "aabb", "bbaa"]
consoleJName(arr);
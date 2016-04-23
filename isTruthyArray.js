// takes an Array and opperates on it with the  given function returns new  Array
function forArray(myArray){
	var out = [];
	for (var i = 0 ; i < myArray.length; i++){
		if(!!myArray[i]){
		 out.push(myArray[i]);
		}
	}
	return out;
}

var a = [1,2,3,"",0,true,0,1,2,3,false,0,NaN,undefined,null,"foo"];

var b = forArray(a);
console.log(b);
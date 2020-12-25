function fun(){
	var txt="";
	var val=document.getElementById('num').value;
	if(val%3==0 && val%5==0)
		txt+="FizzBuzz";
	else if(val%3==0)
		txt+="Fizz";
	else if(val%5==0)
		txt+="Buzz";
	else
		txt+=val;
	document.getElementById('demo').innerHTML=txt;
}


// document.querySelector("#button").addEventListener("click",fun());
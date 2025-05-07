var input1 = document.querySelector(".num1");
var input2 = document.querySelector(".num2");
var btn = document.querySelector(".btn");
var ans = document.querySelector(".answer");
var text = document.querySelector(".text");

btn.addEventListener("click", function(){
ans.innerHTML = parseInt(input1.value) + parseInt(input2.value);
var sum = parseInt(input1.value) + parseInt(input2.value);


if(sum > 10){
    text.innerHTML+= "<br>Value is greater than 10";
}

else if (sum < 10){
    text.innerHTML+= "<br>Value is less than 10";
}
else{
    text.innerHTML+= "<br>Value is equal to 10";
}

})
const btn = document.querySelector('.calculate')


btn.addEventListener('click', function(){
    var num1 = parseFloat(document.getElementById('num1').Value);
    var num2 = parseFloat(document.getElementById('num2').Value);

    var sum = num1 + num2;

    var prod = Math.sqrt(num1) * Math.sqrt(num2);

    document.getElementById('sum').innerHTML = sum;
    document.getElementById('prod').innerHTML = prod;
})
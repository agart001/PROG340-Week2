
document.getElementById('calculate').addEventListener('click', function(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    

    var sum = num1 + num2;

    var prod = Math.sqrt(num1) * Math.sqrt(num2);

    document.getElementById('sum').innerHTML = sum;
    document.getElementById('prod').innerHTML = prod;
})
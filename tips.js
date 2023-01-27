function calculateTip() {
    // variable for the total of the check before tip
    var totalAmount = document.getElementById("totalAmount").value;
    // tip %
    var tip = document.getElementById("tip").value;

    // the tip amount is the total amount * the tip divided by 100 to get the tip in %
    var tipAmount = totalAmount * (tip/100);

    // the result is the total amount plus the tip amount 
    var result = parseFloat(totalAmount) + parseFloat(tipAmount);
    
    document.getElementById("tipAmount").innerHTML = tipAmount;
    document.getElementById("result").innerHTML = result;

}
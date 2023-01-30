function calculateTip() {
    // variable for the total of the check before tip
    var totalAmount = document.getElementById("totalAmount").value;
    // tip %
    var tip = document.getElementById("tip").value;

    // share 
    var people = document.getElementById("people").value

    // the tip amount is the total amount * the tip divided by 100 to get the tip in %
    var tipAmount = totalAmount * (tip/100) ;

    // the result is the total amount plus the tip amount 
    var result =  parseFloat(totalAmount) + parseFloat(tipAmount) ;

    

     if (people <= 1) {
        document.getElementById("perShare").style.display = "none";
        document.getElementById("perShareDisplay").style.display = "none";
      //  document.getElementsByClassName("perShareDsiplay").style.display = "none"
      } else if (people >= 2) {
        document.getElementById("perShare").style.display = "block";
        document.getElementById("perShareDisplay").style.display = "block";

     //   document.getElementsByClassName("perShareDsiplay").style.display = "block"

      }

    // result of shared total
    var perShare =  result / people 

// displays the per share area if the people to share is greater than 1



    document.getElementById("tipAmount").innerHTML = tipAmount.toFixed(2);
    document.getElementById("result").innerHTML = result.toFixed(2);
    document.getElementById("perShare").innerHTML = perShare.toFixed(2);


}
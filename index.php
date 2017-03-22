<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Money Converter</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="style.css">

    <script>
    function verify(){
      var amount = document.forms["myForm"]["amount"].value;
      var isNumber = /^[-]?[0-9]+[\.]?[0-9]+$/.test(amount);
      if(isNumber==true){
        convert();
      }else{
        alert("Your input is not a number!");
      }

    }

    function convert() {
        var amount = document.forms["myForm"]["amount"].value;
        var rate = amount;
        var x = document.forms["myForm"]["c"].value;
        var y = document.forms["myForm"]["a"].value;
        if(x==y){
          alert("Same currency! No need to convert.");
        }
        else
        if(x=='USD' && y=='EUR'){
          var conversion = 0.93;
          rate = rate * conversion;
          alert(amount+" "+x+" is equal to "+rate+" "+y+".");
        }else if(x=='USD' && y=='GBP'){
          var conversion = 0.80;
          rate = rate * conversion;
          alert(amount+" "+x+" is equal to "+rate+" "+y+".");
        }else if(x=='USD' && y=='PHP'){
          var conversion = 50.16;
          rate = rate * conversion;
          alert(amount+" "+x+" is equal to "+rate+" "+y+".");
        }else if(x=='USD' && y=='JPY'){
          var conversion = 111.71;
          rate = rate * conversion;
          alert(amount+" "+x+" is equal to "+rate+" "+y+".");
        }
        else
        if(x=='GBP' && y=='EUR'){
          var conversion = 1.16;
          rate = rate * conversion;
          alert(amount+" "+x+" is equal to "+rate+" "+y+".");
        }else if(x=='GBP' && y=='USD'){
          var conversion = 1.25;
          rate = rate * conversion;
          alert(amount+" "+x+" is equal to "+rate+" "+y+".");
        }else if(x=='GBP' && y=='PHP'){
          var conversion = 62.58;
          rate = rate * conversion;
          alert(amount+" "+x+" is equal to "+rate+" "+y+".");
        }else if(x=='GBP' && y=='JPY'){
          var conversion = 139.40;
          rate = rate * conversion;
          alert(amount+" "+x+" is equal to "+rate+" "+y+".");
        }
        else
        if(x=='EUR' && y=='GBP'){
          var conversion = 0.87;
          rate = rate * conversion;
          alert(amount+" "+x+" is equal to "+rate+" "+y+".");
        }else if(x=='EUR' && y=='USD'){
          var conversion = 1.08;
          rate = rate * conversion;
          alert(amount+" "+x+" is equal to "+rate+" "+y+".");
        }else if(x=='EUR' && y=='PHP'){
          var conversion = 54.18;
          rate = rate * conversion;
          alert(amount+" "+x+" is equal to "+rate+" "+y+".");
        }else if(x=='EUR' && y=='JPY'){
          var conversion = 120.65;
          rate = rate * conversion;
          alert(amount+" "+x+" is equal to "+rate+" "+y+".");
        }
        else
        if(x=='PHP' && y=='GBP'){
          var conversion = 0.016;
          rate = rate * conversion;
          alert("1 "+x+" is equal to "+rate+" "+y+".");
        }else if(x=='PHP' && y=='USD'){
          var conversion = 0.028;
          rate = rate * conversion;
          alert("1 "+x+" is equal to "+rate+" "+y+".");
        }else if(x=='PHP' && y=='EUR'){
          var conversion = 0.018;
          rate = rate * conversion;
          alert("1 "+x+" is equal to "+rate+" "+y+".");
        }else if(x=='PHP' && y=='JPY'){
          var conversion = 2.22;
          rate = rate * conversion;
          alert("1 "+x+" is equal to "+rate+" "+y+".");
        }
        else
        if(x=='JPY' && y=='GBP'){
          var conversion = 0.0072;
          rate = rate * conversion;
          alert("1 "+x+" is equal to "+rate+" "+y+".");
        }else if(x=='JPY' && y=='USD'){
          var conversion = 0.0090;
          rate = rate * conversion;
          alert("1 "+x+" is equal to "+rate+" "+y+".");
        }else if(x=='JPY' && y=='EUR'){
          var conversion = 0.0083;
          rate = rate * conversion;
          alert("1 "+x+" is equal to "+rate+" "+y+".");
        }else if(x=='JPY' && y=='PHP'){
          var conversion = 0.45;
          rate = rate * conversion;
          alert("1 "+x+" is equal to "+rate+" "+y+".");
        }

    }
    </script>
  </head>
  <body>
    <div class="header col-sm-12">
      <img class="icon" src="images/icon.png">
      <h1>MONEY CONVERTER</h1>
    </div>
    <div class="container1 col-sm-12">
      <div class="innercon1 col-sm-12">
        <form name="myForm" action="" onsubmit="return verify()">
          <input style="margin-bottom:10px;" type="text" class="form-control" name="amount" placeholder="Input the amount of money here.">
          <div class="form-group col-sm-6">
            Currency I have:
            <select class="form-control" name="c" id="c">
              <option value="USD">American Dollar (USD)</option>
              <option value="GBP">British Pound (GBP)</option>
              <option value="EUR">Euro (EUR)</option>
              <option value="PHP">Philippine Peso (PHP)</option>
              <option value="JPY">Japanese Yen (JPY)</option>
            </select>
          </div>
          <div class="form-group col-sm-6">
            Currency I want:
            <select class="form-control" name="a" id="a">
              <option value="USD">American Dollar (USD)</option>
              <option value="GBP">British Pound (GBP)</option>
              <option value="EUR">Euro (EUR)</option>
              <option value="PHP">Philippine Peso (PHP)</option>
              <option value="JPY">Japanese Yen (JPY)</option>
            </select>
          </div>
          <input class="btn btn-default" type="submit" value="Submit">
        </form>
      </div>
    </div>
    <div class="divider col-sm-12">
        <img style="margin:50px;" class="col-sm-5" src="images/footerlogo.png">
      <div class="footer2 col-sm-6">
        <h4>MONEY CONVERTER</h4>
        <p>Get an accurate and reliable currency data that easily integrates with your current ERP, CRM, or Accounting systems. Find the latest currency exchange rates and convert all major world currencies with our currency converter.</p>
      </div>
    </div>
    <div class="divider1 col-sm-12">
      Copyright 2017 (c) Lyra Camille Cera
    </div>
    
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>

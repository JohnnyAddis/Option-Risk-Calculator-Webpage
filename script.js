function calculateProfits() {
    // Retrieve inputs
    const optionType = document.getElementById("option-type").value;
    const currentPrice = parseFloat(document.getElementById("current-price").value);
    const strikePrice = parseFloat(document.getElementById("strike-price").value);
    const premium = parseFloat(document.getElementById("premium").value);
  
    if (isNaN(currentPrice) || isNaN(strikePrice) || isNaN(premium)) {
      document.getElementById("result").innerHTML = "Please enter valid numeric values.";
      return;
    }
  
    let maxProfit, maxLoss, breakEven;
  
    
    if (optionType === "long-call") {
      maxProfit = "Unlimited";
      maxLoss = premium * 100;
      breakEven = strikePrice + premium;
    } else if (optionType === "long-put") {
      maxProfit = (strikePrice - premium) * 100;
      maxLoss = premium * 100;
      breakEven = strikePrice - premium;
    } else if (optionType === "short-call") {
      maxProfit = premium * 100;
      maxLoss = "Unlimited";
      breakEven = strikePrice + premium;
    } else if (optionType === "short-put") {
      maxProfit = premium * 100;
      maxLoss = (strikePrice - premium) * 100;
      breakEven = strikePrice - premium;
    }
  
    // Display results
    let resultText = `<strong>Results:</strong><br>`;
    resultText += maxProfit !== "Unlimited" ? `Max Profit: $${maxProfit.toFixed(2)}<br>` : `Max Profit: Unlimited<br>`;
    resultText += maxLoss !== "Unlimited" ? `Max Loss: $${maxLoss.toFixed(2)}<br>` : `Max Loss: Unlimited<br>`;
    if(optionType == 'long-call' || optionType == 'short-put'){
        resultText += `Break-Even Price: at or above $${breakEven.toFixed(2)}<br>`;
    }else{
        resultText += `Break-Even Price: at or below $${breakEven.toFixed(2)}<br>`;
    }
    
    document.getElementById("result").innerHTML = resultText;
  }
  
document.getElementById('loanForm').addEventListener('submit', function(event) {

    event.preventDefault(); 

    const amountNeeded = parseFloat(document.getElementById('amountNeeded').value);

    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100; 

    const duration = parseInt(document.getElementById('duration').value);


   

    const totalInterest = amountNeeded * (interestRate * 2); 

    const faceValue = amountNeeded + totalInterest; 
    const monthlyPayment = faceValue / duration; 


    

    const resultsDiv = document.getElementById('results');

    resultsDiv.innerHTML = `

        <h2>Results:</h2>

        <p>Face Value Required: GHC ${faceValue.toFixed(2)}</p>

        <p>Monthly Payment: GHC ${monthlyPayment.toFixed(2)}</p>

    `;



    document.getElementById('repeatButton').style.display = 'block';

});

document.getElementById('repeatButton').addEventListener('click', function() {

    document.getElementById('loanForm').reset(); 
    document.getElementById('results').innerHTML = ''; 

    this.style.display = 'none'; 

});
//Listen for submit
document.getElementById('loan-form').addEventListener('submit',function(e){
    //Hide results
    document.getElementById('results').style.display='none';

    //Show loader
    document.getElementById('loading').style.display='block';

    setTimeout(calculateResults,2000);
    e.preventDefault();
} );


function calculateResults(e){
    console.log('calculating...');

    const amount= document.querySelector('#amount');
    const interest= document.querySelector('#interest');
    const years= document.querySelector('#years');
    const monthlyPayment= document.querySelector('#monthly-payment');
    const totalPayment= document.querySelector('#total-payment');
    const totalInterest= document.querySelector('#total-interest');
    
    const pricipal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value)/100/12;
    const calculatedPayments = parseFloat(years.value)*12;

    const x = Math.pow(1+calculatedInterest,calculatedPayments);
    const monthly = (pricipal*x*calculatedInterest)/(x-1);


    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly*calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly*calculatedPayments)-pricipal).toFixed(2);
        document.getElementById('results').style.display='block';
        document.getElementById('loading').style.display='none';
    }
    else{
           showError("Pleae check your numbers");
    }

}

// show Error
function showError(error)
{
    document.getElementById('results').style.display='none ';
    document.getElementById('loading').style.display='none';
    //Create a div
const errorDiv = document.createElement('div');
//Crea

    //Get Elements
const card = document.querySelector('.card');
const heading = document.querySelector('.heading');
//Add a class
errorDiv.className = 'alert alert-danger';

//create thext node and append to div
errorDiv.appendChild(document.createTextNode(error))

//insert the errror above heading
card.insertBefore(errorDiv,heading);

//clear error after 3 seconds
setTimeout(clearError,3000);
}

//Clear Error
function clearError(){
    document.querySelector('.alert').remove();
}
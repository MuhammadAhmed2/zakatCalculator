var gold = document.querySelector('#gold');
var silver = document.querySelector('#silver');
var cash = document.querySelector('#cash');
var asset = document.querySelector('#assets');

var dispaly = document.querySelector('#display');

function cal() {
    if(gold.value !== '' || silver.value !== '' || cash.value !== '' || asset.value !== '') {
        var sum = +gold.value + +silver.value + +cash.value + +asset.value;
        var zakat = (2.5 / 100) * sum;
        var element = document.getElementById("result");  // Get the DIV element
        element.classList.remove("result"); // Remove mystyle class from DIV
        element.classList.add("result-show"); // Add newone class to DIV
        dispaly.innerHTML = `According to Prophet Muhammad ﷺ All Muslims have to pay zakat which is 2.5% of your total wealth. <br><br> Your Total Wealth is Rs.${sum}/- so you have to pay 2.5% of Zakat which is Rs.${zakat}/- `;
    }else(
        alert('plz Fill Atleast 1 field to calculate zakkat')
    );

}
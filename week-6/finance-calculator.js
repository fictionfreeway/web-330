/*     
    Title: finance-calculator.js
    Author: William Watlington
    Date: 7/1/2022
    Description: financeCalculator class for future-value app
*/

export class FinanceCalculator {
    MONTHS_IN_YEAR = 12;

    calculateFutureValue(monthlyPayment, rate, years) {
        console.log(this.MONTHS_IN_YEAR);
        let months = parseFloat(years) * this.MONTHS_IN_YEAR;
        let interestRate = 1 + parseFloat(rate) / 100;
        let presentValue = parseFloat(monthlyPayment) * months;
        let futureValue = presentValue * (Math.pow(interestRate, months));
        console.log(months);
        console.log(interestRate);
        console.log(presentValue);
        console.log(futureValue);
        return futureValue.toFixed(2);
    }
    
    convertToCurrency(field) {
        let currencyFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'});
        return currencyFormatter.format(field);
    }
}
/*     
    Title: finance-calculator.js
    Author: William Watlington
    Date: 7/1/2022
    Description: financeCalculator class for future-value app
*/

export class FinanceCalculator {
    static MONTHS_IN_YEAR = 12;

    calculateFutureValue(monthlyPayment, rate, years) {
        let months = years * this.MONTHS_IN_YEAR;
        let interestRate = 1 + rate / 100;
        let presentValue = monthlyPayment * months;
        let futureValue = presentValue * (Math.pow(interestRate, months));
        return futureValue.toFixed(2);
    }
    
    convertToCurrency(field) {
        let currencyFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'});
        return currencyFormatter.format(field);
    }
}
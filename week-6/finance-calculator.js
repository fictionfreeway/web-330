/*     
    Title: finance-calculator.js
    Author: William Watlington
    Date: 7/1/2022
    Description: financeCalculator class for future-value app
*/

export class FinanceCalculator {
    static MONTHS_IN_YEAR = 12;

    static calculateFutureValue(monthlyPayment, rate, years) {
        months = years * this.MONTHS_IN_YEAR;
        interestRate = 1 + rate / 100;
        presentValue = monthlyPayment * months;
        futureValue = presentValue * (Math.pow(interestRate, months));
        return futureValue.toFixed(2);
    }
    
    static convertToCurrency(field) {
        currencyFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'});
        return currencyFormatter.format(field);
    }
}
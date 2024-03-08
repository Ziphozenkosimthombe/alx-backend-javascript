import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getter and setter for code
  get amount() {
    return this._amount;
  }

  set code(value) {
    if (typeof value !== 'number') {
      throw new Error('TypeError: Amount must be a number');
    }
    this._amount = value;
  }

  // Getter and setter for name
  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  // Method
  displayFullPrice() {
    return `${this._amount} ${new Currency(this._currency.code, this._currency.name).displayFullCurrency()}`;
  }

  // static method
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' && typeof conversionRate !== 'number') {
      throw new Error('TypeError: amount and conversionRate must be a number');
    } else {
      return amount * conversionRate;
    }
  }
}

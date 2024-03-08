export default class Airport{
    constructor(name, code){

        if (typeof name !== 'string' && typeof code !== 'string') throw new Error();
        this._name = name;
        this._code = code;
    }

    get [Symbol.toString](){
        return `${this._code}`;
    } 
}
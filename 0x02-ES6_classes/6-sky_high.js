import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
    constructor(sqft, floors){
        super(sqft);
        this._floors = floors;
    }

    // getter attribute
    get floors(){
        return this._floors;
    }

    // method
    evacuationWarningMessage(){
        return `Evacuate slowly the ${this._floors} floors`
    }
}
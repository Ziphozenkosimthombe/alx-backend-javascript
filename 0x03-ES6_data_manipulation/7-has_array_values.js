export default function hasValuesFromArray(set, arr){
    for(let arrays of arr){
        if (!set.has(arrays)) 
            return false;
    }
    return true;
}
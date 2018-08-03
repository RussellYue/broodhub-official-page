function divideArray(arr, subArrLength) {

    let i = 0;
    let returnArray = [];
    while (i < arr.length) {
        let subArr = [];
        let j = 0;
        while (j < subArrLength) {
            subArr.push(arr[i])
            i++;
            j++;
        }
        returnArray.push(subArr);
    }
    return returnArray;
}

export default divideArray;
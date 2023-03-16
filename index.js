function distanceFromHqInBlocks(pickupLocation) {
    let distanceInBlock;

    // calculates distances above 42nd street
    if (pickupLocation > 42) {
        distanceInBlock = pickupLocation - 42;
    }
    // calculates distances below 42nd street
    else {
        distanceInBlock = 42 - pickupLocation;
    }

    return distanceInBlock;
}


function distanceFromHqInFeet(pickupLocation) {
    let distanceInFeet = distanceFromHqInBlocks(pickupLocation) * 264;

    return distanceInFeet;
}


function distanceTravelledInFeet(start, destination) {
    let distanceInFeet;
    
    // returns the distance travelled in feet
    if (start < destination) {
        distanceInFeet = (destination - start) * 264;
    }
    // returns distance when destination is below distance
    else {
        distanceInFeet = (start - destination) * 264;
    } 

    return distanceInFeet;
}


function calculatesFarePrice(start, destination) {
    let distanceInFeet = distanceTravelledInFeet(start, destination);
    
    // gives customers a free sample if distance is less than 400 feet
    if (distanceInFeet <= 400) {
        return 0;
    }
    // charges 2 cents per foot when total feet travelled is between 400 and 2000 (the first 400 feet are free)
    else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 0.02;
    }
    // charges 25 dollars for a distance over 2000 feet
    else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25;
    }
    // does not allow rides over 2500 feet
    else {
        return "cannot travel that far";
    }
}






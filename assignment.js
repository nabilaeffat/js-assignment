
// feetToMile: convert feet to mile.   
function feetToMile(userInput){
    if (Number.isInteger(userInput) && userInput >0){

        // 1 Mile = 5280 feet
        const feet = 5280;
        var miles = userInput/feet;
        var result = userInput +" feets equal to "+ miles +" miles.";
        return result;
    }
    else
    {
        return "Invalid user input, it must be positive number.";
    }
}

//console.log(feetToMile(5));

//woodCalculator: user inputs are number of chairs, tables and beds. 
// 1 chair = 1 cubic feet wood
// 1 table = 3 cubic feet wood
// 1 bed = 5 cubic feet wood 
function woodCalculator(chair, table, bed){

    if (Number.isInteger(chair) && chair >0){

        var totalWood = chair*1 + table*3 + bed*5;
        var result = "You need total "+totalWood +" cubic feet wood.";
        return result;
    }
    else
    {
        return "Invalid user input, it must be positive number.";
    }

}

//console.log(woodCalculator(12,1,2));

/** brickCalculator: Calculate to
    1 foot = 1000 brick
    1st to 10th floor height= 15 fee;
    11th to 20th  =12 feet; 21 to 30 = 10 feet
    user input = floor number
*/

function brickCalculator(floorNo){

    const floorHeight10th = 15;
    const floorHeight20th = 12;
    const floorHeightOther = 10;
    const brickNo = 1000;
    var totalHeight =0;
    var restult = "Invalid Input";
    if (Number.isInteger(floorNo) && floorNo > 0){
        

        switch (true) {
        case floorNo <=10:
            totalHeight = floorNo*floorHeight10th;
    
            break;
        case floorNo <= 20 && floorNo > 10:
            totalHeight = (floorNo -10)*floorHeight20th + 10*floorHeight10th;
    
            break;
        case floorNo > 20:
            totalHeight = (floorNo -20)*floorHeightOther + 10*floorHeight20th+ 10*floorHeight10th;
    
            break;
        }

        restult = totalHeight*brickNo + " Bricks needed to build "+ floorNo+ " floors" ;

    }

    return restult;
}

console.log(brickCalculator(11));

//4.tinyFriends: find Shortest name in the array.

function tinyFriend(friends){

   if (friends.length != 0){
       var tinyName = friends[0];
       for (var i = 0; i < friends.length; i++){   
           if(friends[i].length < tinyName.length ){
            tinyName = friends[i];
           }
       }
    
    return tinyName +" is my tiny friend.";
   }
   else {  
    return "Your friends array is empty";
   }
 }

 //var result = tinyFriend(['Nabila','Shahzadi', 'Mou','Nipa']);
 //var result2 = tinyFriend(['Shahzadi','Nabila', 'Mou','Nipa']);
 //var result3 = tinyFriend(['Mou','Shahzadi','Nabila', 'Nipa']);
 //var result1 = tinyFriend([]);
//console.log(result3);
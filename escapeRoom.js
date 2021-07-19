var readLineSync = require('readLine-sync');
var playerName = readLineSync.question("May I have your name please ");
   console.log ('welcome'+" "+ playerName +" "+ 'to the escape room simulation');
var isAlive = true;
var hasFoundKey = false;
    while (isAlive == true){
        const optionID = readLineSync.keyIn ('Press 1 to put hand in hole \n Press 2 to find the key \n Press 3 to open the door', {limit: '$<1-3>'});
    if (optionID == 1){
        console.log ("Ooops, you are dead! Game over!");
        isAlive = false;
    }
    else if (optionID == 2 && hasFoundKey == false){
        console.log ("Great! you found the key successfully");
        hasFoundKey = true;
    }
    else if (optionID == 2 && hasFoundKey == true){
        console.log ("Stop scearching for the key, you aready have it");
        hasFoundKey = true;
    }
    else if (optionID == 3 && hasFoundKey == false){
        console.log ("You still need the key to open the door");
        hasFoundKey = false;
    }
    else if (optionID == 3 && hasFoundKey == true){
        console.log ("congratulations you have escaped the room successfully");
        hasFoundKey = true;
        isAlive = false;
    }
    }
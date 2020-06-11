var consolePreference;

function consoleWarFaction() {
    var myConsole = prompt('Are you a GENESIS or a SUPER NINTENDO kid?')
    consolePreference = myConsole;

    var message;
    if (myConsole == 'GENESIS') {
        message = 'Genesis DOES what NintenDON\'T!';
    } else if (myConsole == 'SUPER NINTENDO' || myConsole == 'NINTENDO') {
        message = 'Everyone knows the SNES is clearly the superior console!';
    } else {
        myConsole = prompt('Ya gotta pick ONE!');
        consoleWarFaction();
        return
    }
    return document.write('<h3>' + message + '</h3>');
}

function talkingClock() {
    var today = new Date();
    var hourNow = today.getHours();
    var minuteNow = today.getMinutes();
    var greeting;

    if (consolePreference == 'GENESIS') {
        consoleKidType = 'Genesis Kid';
    } else if (consolePreference == 'SUPER NINTENDO' || consolePreference == 'NINTENDO') {
        consoleKidType = 'Nintendo Kid';
    } else {
        consoleKidType = 'weirdo';  
    }

    var yesOrNo = prompt('You wanna know what time it is, ' + consoleKidType + '? Yes or No?');

    if (yesOrNo == 'Yes') {
        if (hourNow > 18) {
            greeting = 'Good evening';
        } else if (hourNow > 12) {
            greeting = 'Good afternoon';
        } else if (hourNow > 0) {
            greeting = 'Good morning';
        } else {
            greeting = 'Welcome';
        }
        return document.write('<h3>' + greeting + ', ' + consoleKidType + '! ' + 'It is ' + hourNow + ':' + minuteNow + ' right now!</h3>');
    } else if (yesOrNo == 'No') {
        return document.write('<h3>Clock Buddy:</h3> "Oh, ok... Well, I\'m still here if you need me!" :`(');
    } else {
        var yesOrNo = prompt('Wait, you gotta tell me yes or no please!');
        talkingClock();
        return    
    }
}

function quizTime() {
   var noOrYes = prompt('Hey ' + consoleKidType + ', you wanna take a quick gamer quiz?;) Yes or No?');
    if (noOrYes == 'Yes') {
        var response = prompt('Awesome. I knew you were my guy. Tell me, which game came bundled with the ' + consolePreference + '?');
    } else if (noOrYes == 'No') {
        return document.write('<h3>A REAL fan would just take the quiz...</h3>');
    }

    if (response == 'Sonic' || response == 'sonic' || response == 'sonic the hedgehog' || response == 'Sonic the Hedgehog' || response == 'Super Mario' || response == 'Super Mario World' || response == 'Mario' || response == 'super mario' || response == 'mario' || response == 'super mario world') {
        return document.write('<h3>You. Absolute. LEGEND. Well done, ' + consoleKidType + '!</h3>');
    } else {
        return document.write('Are you SURE you owned a ' + consolePreference + '???');
    }
}

function orderAPizza(topping1, topping2, topping3) {
    return document.write('<h3>Let me get a large pie with ' + topping1 + ', ' + topping2 + ', and ' + topping3 + '?</h3>');
}

consoleWarFaction();
talkingClock();
quizTime();
orderAPizza('Sausage', 'Pepperoni', 'Mushrooms');



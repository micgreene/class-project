function smoothieType() {
  
    //askes user for what TYPE of smoothie they'd like, and resets the function if a satisfiable answer isn't received
    var myType = prompt('Hi, Welcome to Blenderz! So, what can I get ya started on? A FRUITY or CREAMY SMOOTHIE? [Please type FRUITY or CREAMY, otherwise I won\'t understand you!]')
    
    //gives the user a nice message about their yummy drink
    var message;  
    if (myType === 'FRUITY' || myType === 'fruity' || myType === 'Fruity' || myType === 'FRUIT' || myType === 'fruit' || myType === 'Fruit') {
        message = 'Mmm, a FRUIT smoothie does sound refreshing right now, doesn\'t it?';
    } else if (myType === 'CREAM' || myType === 'Cream' || myType === 'cream' || myType === 'CREAMY' || myType === 'Creamy' || myType === 'creamy') {
        message = 'And since our CREAMY smoothies are made with all natural Preyer\'s-Brand yogurt, now EVERYDAY can be a cheat day!';
    } else {prompt('Ehhhhh...I\'m not sure what a ' + myType + ' smoothie is. Could you let me ask you once more, please?);
        smoothieType();
        return
    }
}

function smoothieFlavor(){
  var flavorMessage;
  
  //asks for FLAVOR of the TYPE of smoothie
  if (myType === 'FRUIT' || myType === 'fruit' || myType === 'Fruit'){
      flavorMessage  = message + ' Would you like STRAWBERRY or BANANA?[Please type STRAWBERRY or BANANA, otherwise I won\'t understand you!]';
  } else if (myType === 'CREAM' || myType === 'Cream' || myType === 'cream' myType === 'CREAMY' myType === 'Creamy' || myType === 'creamy'){
      flavorMessage  = message + ' Would you like CHOCOLATE or VANILLA?[Please type CHOCOLATE or VANILLA, otherwise I won\'t understand you!]';  
  }
  
  var myFlavor = prompt(flavorMessage);
  
  if (myFlavor === 'CHOCOLATE' || myFlavor === 'Chocolate' || myFlavor === 'chocolate){
      return
  } else if (myFlavor === 'VANILLA' || myFlavor === 'Vanilla' || myFlavor === 'vanilla'){
      return  
  } else {prompt('Ehhhhh...I\'m not sure what a ' + myFlavor + ' smoothie is. Could you let me ask you once more, please?);
  }
}

function howManySmoothies(){
  //asks for HOW MANY of this TYPE and FLAVOR of smoothies you'd like 
  var howMany = prompt('So how many ' + myType + ' ' + myFlavor + ' smoothies would you like? [Please type ONLY NUMBERS, or else I won\'t understand you!');
  
  for(var i = howMany; i != 0; i--){
    document.write('<h3>' + myType + myFlavor + 'Smoothie'</h3>');
  }
                   
  var runAgain = prompt('Could I get you anything else? [Type YES or NO, or else I won\'t understand you!]');
  if(runAgain === 'YES' || runAgain === 'Yes' || runAgain === 'yes'){
    smoothieType();
    smoothieFlavor();
    howManySmoothies();
  } else{
    return
  }
}

smoothieType();
smoothieFlavor();
howManySmoothies();



// code your solution here

function saturdayFun(activity = "roller-skate") {
    if (activity === "roller-skate") {
        console.log(`This Saturday, I want to ${activity}!`);
        return "This Saturday, I want to roller-skate!";
    } else if (activity === "bathe") {
        console.log(`This Saturday, I want to ${activity} my dog!`);
        return "This Saturday, I want to bathe my dog!";
    }
}
saturdayFun();

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}


function mondayWork(activity = "go to the office") {
    if (activity === "go to the office") {
        console.log(`This Monday, I will ${activity}.`);
        return "This Monday, I will go to the office.";
    } else if (activity === "work from home") {
        console.log(`This Monday, I will ${activity}.`);
        return "This Monday, I will work from home.";
    }
};
mondayWork();


function wrapAdjective( flair = " a hardworker") {
    return function(adjective) {
        return `You are ${flair}${adjective}${flair}!`;
    }
};
wrapAdjective();

  

    
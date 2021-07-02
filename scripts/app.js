function kelvinToFahrenheit(kelvin) {
    return (5 / 9) * (kelvin - 32);
}
document.getElementById("demo").innerHTML = kelvinToFahrenheit(567);



function humanAgeInDogYears(myAge) {
    let earlyYears = 2;
    earlyYears *= 10.5;
    //First two years in dog years
    let laterYears = myAge - 2;
    //Number of dog years
    laterYears *= 4;

    var myAgeInDogYears = earlyYears + laterYears;

    return myAgeInDogYears;
}
document.getElementById("demo1").innerHTML = humanAgeInDogYears(28);




function answerMyQuestion(userName, userQuestion) {

    let randomNumber = Math.floor(Math.random() * 8);
    let eightBall = '';

    (userName === 'Jane') ? console.log('Hello, ${userName}'): console.log('Hello!');

    console.log(`The user asked ${userQuestion}`);

    switch (randomNumber) {
        case 0:
            eightBall = 'It is certain'
            break;
        case 1:
            eightBall = 'It is decidedly so'
            break;
        case 2:
            eightBall = 'Reply hazy try again'
            break;
        case 3:
            eightBall = 'Cannot predict now'
            break;
        case 4:
            eightBall = 'Do not count on it'
            break;
        case 5:
            eightBall = 'My sources say no'
            break;
        case 6:
            eightBall = 'Outlook not so good'
            break;
        case 7:
            eightBall = 'Signs point to yes'
            break;
    }

    return eightBall;
}
document.getElementById("demo2").innerHTML = answerMyQuestion();






function raceTime(age, status) {

    let raceNumber = Math.floor(Math.random() * 1000);


    if (age === 18 && status === true) {
        raceNumber += 1000;
    }

    if (age > 18 && status === true) {
        console.log('Your race begins at 9:30 am and your race number is :' + raceNumber);
    } else if (age > 18 && status === false) {
        console.log('Your race begins at 11:00 am and your race number is :' + raceNumber);
    } else if (age < 18) {
        console.log('Your race begins at 12:30 am and your race number is :' + raceNumber);
    } else {
        console.log('Please register firs!');
    }
    return raceNumber;
}

document.getElementById("demo3").innerHTML = raceTime(18, false);
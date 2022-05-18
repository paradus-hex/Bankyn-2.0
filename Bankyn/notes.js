// //!Number parsing
// console.log(Number.parseInt('30.45px', 10)); //the second parameter is the base of the number system
// console.log(Number.parseFloat('30.45px', 10));

// //!Checking if number or not
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(Number(20)));
// console.log(Number.isFinite(20 / 0));

// //!generating random number between two given numbers
// const randomNumber = (min, max) =>
//   Math.trunc(Math.random() * (max - min + 1) + min);

// console.log(randomNumber(10, 20));

// //!Rounding integers
// console.log(Math.round(2.3));
// console.log(Math.ceil(2.3)); //rounds up
// console.log(Math.floor(2.3)); //rounds down
// console.log(Math.trunc(2.3)); //removes decimal
// //trunc and floor work the same until we are dealing with negative numbers

// //!Rounding decimals
// console.log(Number((2.345).toFixed(0)));
// console.log(Number((2.345).toFixed(1)));
// console.log(Number((2.345).toFixed(2)));
// console.log(Number((2.345).toFixed(3)));

// //!BigINT
// //used for numbers greater than 2^53-1
// //doesn't work with Math. operators
// //otherwise works like normal integers
// const huge = 1644116546541561321231548948913231579556n;
// const radNum = 23;
// console.log(huge + BigInt(radNum)); //BigInt() is usefull for this but it doesn't work the same as the 'n'last

// //!Creating dates in JavaScript
// const now2 = new Date();
// console.log(now2);
// //from passing strings
// console.log(new Date('December 24,2015'));
// //Passing year,month etc.
// console.log(new Date(2037, 10, 31, 4, 12, 5)); //=>The months are ) based=>november doesn't have 31 days but js autocorrects
// //Unix time(Whatever that means)
// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000)); //3 days later but I don't quite get this
// //Methods for dates
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay()); //gets month of the week
// //and so on
// //similarly we have set methods for these. for eg.
// console.log(future.setFullYear(2040));
// //This is important
// console.log(future.toISOString()); //This gives a formatted string time
// console.log(future.getTime()); //gives how many miliseconds have passed since the UNIX time
// console.log(new Date(future.getTime())); //gives the time
// //for the current timestamp(miliseconds passed)
// console.log(Date.now());
// //Calculation between two dates
// const calDaysPassed = (day1, day2) =>
//   Math.abs(day2 - day1) / (1000 * 60 * 60 * 24);
// const trial1 = calDaysPassed(new Date(2037, 10, 19), new Date(2037, 10, 25));
// console.log(trial1);
// !Timer Callback functions
// It excutes after an speicified amount of time
// Set timeout
// const ingredients = ['Olives', 'Spinach'];
// const pizzaTimer = setTimeout(
//   (ing1, ing2) => console.log(`here is your pizza with ${ing1} and ${ing2}`),
//   300,
//   ...ingredients
// );
// console.log('Waiting...');
// if (ingredients.includes('Spinach')) clearTimeout(pizzaTimer);
// //Set interval
// //repeats after specified interval
// setInterval(function () {
//   console.log(new Date());
// }, 1000);

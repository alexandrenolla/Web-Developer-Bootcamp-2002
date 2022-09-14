console.log('BEFORE CONDITIONAL')

let random = Math.random()
if (random < 0.5) {
    console.log("YOUR NUMBER IS LESS THAN 0.5.")
} else {
    console.log('YOUR NUMBER IS GREATER THAN (OR EQUAL TO) 0.5.')
}
console.log('YOUR NUMBER IS', random)

console.log('AFTER CONDITIONAL')


/////////////////////////////////

const dayOfWeek = prompt('Choose and write a day of the week.').toLowerCase()

if(dayOfWeek === 'monday') {
    console.log('Fuck shit!')
} else if (dayOfWeek === 'saturday') {
    console.log('YAY! Lets smoke some ganja and have some good sex!! And after it, lets read some great book! Iuhuull')
} else if (dayOfWeek === 'friday') {
    console.log('YAY! SATURDAY IS COMING BIAAATCH!')
} else {
    console.log('MEH, JUST A MIDDLE WEEK DAY.')
}


// 0-5 - FREE
// 5-10 - CHILD 
// 10-65 - ADULT 
// 65+ - SENIOR 

const age = 89;

if(age < 5) {
    console.log('Childdish baby! You get for free.')
} else if (age < 10) {
    console.log('Childdish kid! You pay 10 dollars.')
} else if (age < 65) {
    console.log('Bastard Adult! You pay 20 bucks.')
} else {
    console.log('God sakes! You are getting old! You pay 30 benjamins.')
}
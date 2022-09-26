// let i = 0;
// while(i <= 10) {
//     console.log(i)
//     i++;
// }

// const secret = 'BabyHippo';
// let guess = prompt('enter the secret code!')
// while(guess !== secret){
//     guess = prompt('enter the secret code!') 
// }
// console.log('You win')

let input = prompt('type something')
while(true) {
    input = prompt(input)
    if(input.toLowerCase() === 'stop copying me') {
        break;
    }
}
alert('OK YOU WIN')
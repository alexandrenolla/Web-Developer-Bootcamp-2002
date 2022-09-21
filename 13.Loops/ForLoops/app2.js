// regular counter
// for (let i = 1; i <= 10; i++){
//     console.log('Counting:', i)
// }


// even/odd numbers
// for(let i = 0; i <= 20; i += 2) {
//     console.log(i)
// }


//counting down
// for(let i= 100; i >= 0; i -= 10) {
//     console.log(i)
// }


//multiplying 
// for(let i=10; i<=1000; i*=10){
//     console.log(i)
// }


//Looping over Arrays
//const animals = ['lions','tigers','frogs','dogs','cats','birds']

// for(i=0; i<animals.length; i++) {
//     console.log(i, animals[i])
// }


//Looping over Arrays  backwards
// for(i=animals.length - 1; i>=0; i--){
//     console.log(i, animals[i])
// }

//Nested Loops
// for(let i = 1; i <= 10; i++){
//     console.log(`i is: ${i}`)
//     for(let j = 1; j < 4; j++) {
//         console.log(`   j is: ${j}`)
//     }
// }
//Output is like this:
// 1 
//   1
//   2
//   3
// 2
//   1
//   2
//   3
// 3
//   1
//   2
//   3
// and so on.. For each iteration of i, there is 3 iterations of j nested inside of it.


//Another Example of Nested Loops
// let str = 'LOL'
// for (let i = 0; i <= 4; i++) {
//     console.log('Outer', i);
//     for(let j= 0; j < str.length; j++) {
//         console.log('  Inner:', str[j]);
//     }
// }


//Nest Loops with Nested Arrays -- Accessing Data Out 
const seatingChart = [
    ['Student1', 'Student2', 'Student3'],
    ['Student4','Student5','Student6'],
    ['Student7','Student8','Student9']
]
for(i = 0; i < seatingChart.length; i++) {
    console.log(seatingChart[i])
    let array = seatingChart[i];
    for(j = 0; j < array.length; j++) {
        console.log(array[j])
    }
}
// const add = function(x,y) {
//     return x + y;         // regular function
// }

// const add = (x, y) => {   //  arrow function (shorthand)
//     return x + y;
// }
//-------------------------------------------------

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1 // arrow function
// }

const rollDie = () => (
    Math.floor(Math.random() * 6) + 1           // arrow function with implicit return
)


const add = (a, b) => a + b;                    // one liner implicit return  (shorterhand)


const square = num => {
    return num * num;                           //  single parameter doesn't need  parentheses
}


const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

// const newMovies = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score / 10}`        // regular function
// })



const newMovies = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`                  // arrow function implicit return
))






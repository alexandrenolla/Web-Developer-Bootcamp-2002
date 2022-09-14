// Password requirements with Nested Conditionals


let password = 'catdog'

if(password.length >= 6) {
    if(password.indexOf(' ') !== -1) {
        console.log('Password cannot have spaces.')
    } else {
        console.log('Valid password.')
    }   
} else {
    console.log('Password got to have 6 digits long or more.')
}
// API just assume that
//Step 1: fetch student roll no after 2 second
//Step 2: name and age
//Step 3: gender
/**
 * The phenomenon which happens when we nest multiple callbacks within a function is called a callback hell. The shape of the resulting code structure resembles a pyramid and hence callback hell is also called the “pyramid of the doom”. It makes the code very difficult to understand and maintain.
 * **/
const getRollNo = () => {
    setTimeout( () => {
        console.log('API getting roll no')
        let roll_no = [1, 2, 3, 4, 5]
        console.log(roll_no)
        //
        setTimeout( (rollNo) => {
            const bioData = {
                name : 'Zain',
                age : 25
            }
            console.log(`My roll no is ${rollNo}. My name is ${bioData.name} and I am ${bioData.age} years old`)
            //
            setTimeout( () => {
                bioData.gender = 'male'
                console.log(`My roll no is ${rollNo}. My name is ${bioData.name} and I am ${bioData.age} years old. I am an alpha ${bioData.gender}`)
            }, 2000, bioData.name )
        }, 2000, roll_no[1])
    }, 2000)
}
getRollNo()
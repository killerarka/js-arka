// Objects

//const tinderUser = new Object();
const tinderUser = {}

 tinderUser.id = "123abc"
tinderUser.name = "Arka";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);

const regularUser = {
    email: "arka@tinder.com",
    fullname: {
        userfullname: {
            firstname: "Arka",
            lastname: "Biswas"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={1:"a",2:"b",3:"c"}
const obj2 ={4:"a",5:"b",6:"c"}

//const obj3 = {...obj1, ...obj2}        --- main use case
//const obj3 = { obj1, obj2 }
const obj3 = Object.assign({}, obj1, obj2)
//console.log(obj3);


const users = [
    {
        id:1,
        email: " ab@gmail.com"
    },
    {
        id:1,
        email: " ab@gmail.com"
    },
    {
        id:1,
        email: " ab@gmail.com"
    },
]
users[1].email
//console.log(tinderUser);


//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty("isLoggedIn"));


//*******************************************************************  next video  ******

const course = {
    courseName: "Javascript",
    price : "Rs. 1000",
    courseInstructor: "Arka Biswas",
}

//course.courseInstructor

const {courseInstructor:instructor} = course;
//console.log(courseInstructor);
console.log(instructor);


//{
 //   name : "Arka Biswas",
 //   courseName: "Javascript",
 //   price : "Rs. 1000",
//}



const studentData =[
  {
    firstName:"Dayana",
    lastName:"Isaeva",
    email:"lutsay@gmail.com",
    phone: 77077075757,
    country:"USA",
    subject:"physics",
    score: 96,
    food: ['seafood', 'sushi']
  },
  {
    firstName:"Arthur",
      lastName:"Isaev",
      email:"lega12@gmail.com",
      phone: 77473200408,
      country:"USA",
      subject:"geography",
      score: 80,
      food: ['doner', 'maxitea']
  },
  {
    firstName:"Leva",
      lastName:"Lev",
      email:"levvvv112233@gmail.com",
      phone: 77076366454,
      country:"Kazakstan",
      subject:"swimming",
      score: 60,
      food: ['pasta', 'potato']
  },
  {
    firstName:"Luna",
    lastName:"Lutsay",
    email:"lunalde@gmail.com",
    phone: 77077777676,
    country:"USA",
    subject:"english",
    score: 100,
    food: ['pelmeni', 'sushi']
  },
  {
    firstName:"Mirka",
      lastName:"Derzky",
      email:"Mirvaistigr@gmail.com",
      phone: 77572344343,
      country:"Kazakstan",
      subject:"math",
      score: 20,
      food: ['plov', 'tomato']
  },
  {
    firstName:"Ulyana",
      lastName:"Kupriyanova",
      email:"ulichtreshhh@gmail.com",
      phone: 77473459087,
      country:"Russia",
      subject:"literature",
      score: 97,
      food: ['cruassan', 'cookies']
  },
  {
    firstName:"Djohn",
      lastName:"Isaev",
      email:"iron23451@gmail.com",
      phone: 77077777878,
      country:"USA",
      subject:"physics",
      score: 98,
      food: [ "eggs", 
        {
          eggs: ["fried", "boiled"],
          pasta:["withtomato"]
        }
      ]
  }
]

function countGrades(){
  for(let i = 0; i <= studentData.length; i++){
    if(studentData[i].score >=90){
      console.log(studentData[i].firstName, "A")
    } else if(studentData[i].score >= 70){
      console.log(studentData[i].firstName, "B")
    } else if(studentData[i].score >= 40){
       console.log(studentData[i].firstName, "C")
    } else {
       console.log(studentData[i].firstName, "F")
    }
  }
}

countGrades();

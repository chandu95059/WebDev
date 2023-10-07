let name = 'ashish'
console.log(name)
console.log (typeof name)

//arrays
let shoppingitems=['bread','butter','milk']
console.log(shoppingitems)
console.log(shoppingitems.splice(0,1))
console.log(shoppingitems)

shoppingitems.splice(0,0,"Wheat","Nuttela")
console.log(shoppingitems)



 let user = {
    name:'Ashish',
    email:'ashis@gmail.com',
    age:24,
    address:'Allahabad'
 }

 console.log(user)
 console.log(user.name)
 console.log(user.name,user.email)

 //to add new items 
 user.salary = 45000
 console.log(user)

 //to delete items in user 
 delete user.age 
 console.log(user)


 let workspace=[
    {name:'Yashwath',email:'yashwanth@gmail.com'},.
    {name:'Prashanth',email:'prashanth@gmail.com'},
    {name:'Chandu',email:'chandu@gmail.com'}
 ]

 console.log(workspace)

workspace.push('Element')
workspace.push({name:'Mani Deepika',email:'Deepu@gmail.com'})



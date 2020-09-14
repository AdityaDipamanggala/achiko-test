



# How To Start

 1. git clone <https://github.com/AdityaDipamanggala/achiko-test.git>
 2. npm install
 3. nodemon app.js
 4. open postman to check the endpoints

## Documentation

> / POST /localhost:3000/register

>> Input Body : 
>>>> email : STRING  (required)
>>> >password : STRING (required)
>>> >name : STRING (optional)
>>> >address : STRING (optional)

>> Output  : 
>>> Successful : 
>>>>{
>>>>			message: Register Successful
>>>>}
>
>>> Error : 
>>>>{
>>>>			message: Error
>>>>}

> / POST /localhost:3000/login

> >> Input Body : 
>>> email : STRING  (required)
>>> password : STRING (required)

>> Output  : 
>>> Successful : 
>>>>{
>>>>			message: Login Successfully,
>>>>			access_token:  'token'
>>>>}

>>> Error : 
>>>>{
>>>>			message: Invalid User
>>>>}

>  / GET /localhost:3000/user
>  >> Input Header : 
>>> access_token : STRING  (required)

>> Output  : 
>>> Successful : 
>>>>{
>>>>			data: {User Data} 
>>>>}
>
>>> Error : 
>>>>{
>>>>			message: Invalid Token
>>>>}



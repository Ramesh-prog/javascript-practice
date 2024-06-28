Intro on Javascript:- 

- javascript is high level programmi g language for building web application more efficient way.
- javascript works on both client side as well as server side rendering.
- javascript is comes from echma script so we see the latest version of javascript in the form of echma script.
- Now we used javascrpt version 6 i.e ES6 (echma script 6).
- In another way we called ES6 as the vanilla javascript.
- javascript is mainly used for building logics or functionality of a web pages. 

Variable:- 

- variable is a container to store some data. 
- there are 3 types of varible present over th javascript.
1. let:- 
    - Let is a type of variable which is used for changing the variable name later.
    - Now thses days, most of the cases we used let for creating variable.
    - Let is a block scope code so we have been using let for most cases.

2. var:- 
    - var is a type of variable which is also used for changing the variable later stage.
    - var is used in oldest browser so now a days we are don't use var mose of the cases.

3. const:-
    - const is a type of variable where we can't change our data further.
    - const means constant to store some data like numbers, integer etc..

Rules for creating variable name :- 

- variable names are case sensative "a", & "A" is different.
- Only letter, digit, underscore & $ is allowed. (not even space)
- Only letter, underscore or $ should be the 1st character only.
- reserved words cannot be variables names. 

Homework :- 
1. difference between let & var.
2. difference between var & const.
3. what do you mean by hoasting. 

Datatypes in JS :- 
- data types is an attributes associated with a piece of data that tells a computer system how to interpet its value.
- in data types we used "typeof" operator to know that what type of data it is.
- mainly in javascript their are 2 types of data types.

1. primitive :- 
- in javascript their are 7 types of primitive data types.
1. Number - Number are the type of data types those it contain some numerical values.
2. Boolean - in Boolean data types we get boolean value like true, false.
3. Undefined - in undefined data types the data is not define so that it will show undfined.
4. Null - in this data type we get null for the value means nothing.
5. bigInt - in bigInt we will get big integer value
6. Symbol - in symbol we will get whole symbol as well as the value we get for the data type
7. String - String is a type of data type that can hold some character like names... 

2. Reference or Non-primitive :- 

- non primitive data type are the type of data type that can hold multiple items in a single time
- non primitive data types are - object, array, function etc.. 
- objects is a non primitive data types which can hold multiple of item in one single entity.
- mainly objects are working on (key:value) pair.
- the left side part is our keys of object & right side parts are the objects of the project. 
ex. object - 

let student = {
    name : "mithun pani",
    mob-no : 8328892097,
    college : "GIFT"
}

Operator in JS :- 
- operator are the key features to do some task or operate some task. 
- ex. A + B 
- in this above example A,B are the operands & "+" is the operator.
- there are 5 types of operator are their in javascript 
1. arithmetic operator  
    (+,-,*,/)
    modulus -> %
    exponentiation -> **

2. unary operator 
    increment (++)
    decreament (--)

3. assignment operator
    (assign some values to the variables)
    (=, +=, -=, *=, %=, **=)

4. comparison operator
    (compair the values)
    it gives the result of true or false. 
    equal to -> ==
    not equal to -> !=
    equal to & type -> ===
    not equal to & type -> !==

5. logical operator 
    checks the logic of the operator(true/false)
    logical AND (&&) -> table of logical AND operator is -> 
    cond1  cond2  res(&&)
    T       T      T
    T       F      F
    F       T      F
    F       F      F

    logical OR (||) -> table of logical OR operator is -> 
    cond1  cond2  res(&&)
    T       T      T
    T       F      T
    F       T      T
    F       F      F

    logical Not (!)

conditional statement :- 

- to implement some condition in the code.
- there are 3 types of conditional statement are there 
1. if condition :- 
    - if condition is true then statement is true otherwise false. 
    syntax - 
    if(condition){
        statement
    }

2. if-else condition :- 
    - if condition is true then if bloack is executed otherwise its terminate to else condition.
    syntax - 
    if(condition){
        statement
    } else {
        statement
    }

3. else-if condition :- 
    - its check the condition multiple times where the condition is true. 
    syntax - 
    if(condition){
        statement
    } else if(condition){
        statement
    } else if(condition){
        statement
    } else {
        statement
    }

Loops in JS :- 

- loops are used to execute a piece of code again and again.
1. For Loop :-
    syntax - 
    for (initialization; condition; updation){
        statement
    }
    ex - 
    for(let i = 1;i <= 5; i++){
        console.log("web bocket")
    }

    web bocket
    web bocket
    web bocket
    web bocket
    web bcoket

2. while loop :- 
    syntax - 
    while (condition){
        statement
        updattion
    }

3. Do-while loop :- 
    syntax - 
    do {
        statement
        updation
    } while (condition)

4. For-of loop :- it iterate on string & array
5. For-in loop :- it iterate over objects (key-value) pair. 








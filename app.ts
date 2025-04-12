// //변수의 데이터 타입 명시

// let stdId : number = 1111;
// let stdName : string= "John Doe";
// let age : number = 20;
// let gender : string= 'male';
// let course : string = 'Typescript';
// let completed : boolean = false;

// // 열거형 : 사용자 정의 타입
// enum GenderTYpe {
//     Male = 'male',
//     Female = 'Female',
//     GenderNeutral = 'nue'
// }

// interface Student {
// stdId : number;
// stdName? : string;
// age? : number;
// gender? : 'male' | 'female' | 'GenderNeutral';
// course? : string;
// completed? : boolean;
// //setName(name : string) : void;
// setName : (name : string) => void;
// //getName : () => string;
// }

// class MyStudent implements Student{    
//     stdId = 91012;
//     stdName = 'lel';
//     age = 30;
//     gender = 'male' | 'female'= 'male';
//     course = 'javascript';
//     completed = false;

//     setName(name: string): void {
//         this.stdName = name;
//         console.log('이름 설정 :' + this.stdName) ;
//     }

// }
// const myInstance = new MyStudent();
// myInstance.setName('앨리스');

// function getInfo(id : number) : Student
// {
//     return {
//         stdId : id,
//         sydName : 'lee',
//        // age : 20,
//         gender : 'female',
//         course : 'javascript',
//         completed : false
 
        
//     }
// }

// let std = {
//     stdId : 91012,
//     stdName : 'park',
//     age : 32,
//     gender : 'male',
//     course : 'javascript',
//     completed : false

// }
// function setInfo(student : Student) : void
// {
//     console.log(student);
// }

// setInfo(std);


//console.log(getInfo(5678));



//컴파일 에러 - syntax에러

//함수의 테이터 타입 명시(매개변수, 리턴타입)
// function plus(a: number, b?: number): number {
//     return a + b;
// }

// console.log(plus(10, 20)); // 30

// type strOrnum = number | string; // 유니온 타입

// let numStr : strOrnum= 100;
// let item : number;

// function convertToString(val : number | string) : string {
//     if(typeof val === 'string') { //타입 가드
//         item = 0;
//         return val;
//     }
//     else{
//         item = val;
//     }
    
//     return String(val);
// }
// function convertToString(val : number | string) : string {
//     return Number(val);
// }
// console.log(convertToString(numStr)); // "100"문자열
// console.log(convertToString(numStr)); // "100"숫자열


// let numbers : number[]=[1, 2, 3, 4, 5];
// let fruits : string[]=['apple', 'banana', 'orange'];

// for(let i=0; i< numbers.length; i++){
//     console.log(numbers[i]);
// }

// for(let i=0; i< fruits.length; i++){
//     console.log(fruits[i]);
// }

// let infer = [1,2,3];

// for(let i=0; i< infer.length; i++){
//     console.log(infer[i]);
// }

//튜플 : 타입의 순서가 정해져 있음
// let greeting: [string, number, boolean] = ['hello', 10, true];

// for(let i=0; i< greeting.length; i++){
//     console.log(greeting[i]);
// }

//spread 연산자 : 배열을 펼쳐서 사용
let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];

let combinedArray = [...firstArray, ...secondArray]; // [1, 2, 3, 4, 5, 6]

console.log(combinedArray); // [1, 2, 3, 4, 5, 6]s
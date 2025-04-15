// 멤버 변수 == 속성 == 프로퍼티
// 멤버 함수 == 메소드

class Employee {
    // 생성자
    constructor(
        private _empName: string,
        private _age: number,
        private _empJob: string
    ) {}

    // getter & setter
    get empName() {
        return this._empName;
    }
    set empName(val: string) {
        this._empName = val;
    }

    get age() {
        return this._age;
    }
    get empJob() {
        return this._empJob;
    }

    printEmp(): void {
        console.log(
            this.empName + "의 나이는 " + this.age + "세이고 직업은 " + this.empJob + "입니다."
        );
    }
}

// 객체 생성 및 사용
let employee1 = new Employee("kim", 30, "developer");
employee1.empName = "lee";
employee1.printEmp();

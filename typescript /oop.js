// 멤버 변수 == 속성 == 프로퍼티
// 멤버 함수 == 메소드
var Employee = /** @class */ (function () {
    // 생성자
    function Employee(_empName, _age, _empJob) {
        this._empName = _empName;
        this._age = _age;
        this._empJob = _empJob;
    }
    Object.defineProperty(Employee.prototype, "empName", {
        // getter & setter
        get: function () {
            return this._empName;
        },
        set: function (val) {
            this._empName = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "age", {
        get: function () {
            return this._age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "empJob", {
        get: function () {
            return this._empJob;
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.printEmp = function () {
        console.log(this.empName + "의 나이는 " + this.age + "세이고 직업은 " + this.empJob + "입니다.");
    };
    return Employee;
}());
// 객체 생성 및 사용
var employee1 = new Employee("kim", 30, "developer");
employee1.empName = "lee";
employee1.printEmp();

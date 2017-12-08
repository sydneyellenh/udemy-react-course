'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person(name, location, age) {
        _classCallCheck(this, Person);

        this.name = name || 'Anonymous';
        // this.location = location;
        this.age = age || 0;
    }

    _createClass(Person, [{
        key: 'getGreeting',
        value: function getGreeting() {
            return this.name + ' says "Hello!"';
        }
    }, {
        key: 'getDescription',
        value: function getDescription() {
            return this.name + ' is ' + this.age + ' years old';
        }
    }]);

    return Person;
}();

;

var Student = function (_Person) {
    _inherits(Student, _Person);

    function Student(name, age, major) {
        _classCallCheck(this, Student);

        var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));

        _this.major = major || 'Undecided';
        return _this;
    }

    _createClass(Student, [{
        key: 'hasMajor',
        value: function hasMajor() {
            return !!this.major;
        }
    }, {
        key: 'getDescription',
        value: function getDescription() {
            var description = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), 'getDescription', this).call(this);

            if (this.hasMajor()) {
                description = description += ' and her major is ' + this.major + '.';
            }
            return description;
        }
    }]);

    return Student;
}(Person);

;

var Employee = function (_Student) {
    _inherits(Employee, _Student);

    function Employee(name, age, major, career) {
        _classCallCheck(this, Employee);

        var _this2 = _possibleConstructorReturn(this, (Employee.__proto__ || Object.getPrototypeOf(Employee)).call(this, name, age, major));

        _this2.career = career || 'No Job';
        return _this2;
    }

    _createClass(Employee, [{
        key: 'getCareer',
        value: function getCareer() {
            // let career = 
            return this.name + ' has the career of ' + this.career;
        }
    }]);

    return Employee;
}(Student);

var me = new Student('Sydney', 21, 'English', 'Web Developer');
console.log('Me = ' + me);
console.log('Me.getGreeting() = ' + me.getGreeting());
console.log('Me.GetDescription() = ' + me.getDescription());
console.log('Me.hasMajor() = ' + me.hasMajor());
// console.log('Me.hasCareer() = ' + me.hasMajor());
console.log('Me.hasCareer() = ' + me.getCareer());

// const you = new Person();

// console.log(you);
// console.log(you.getGreeting());
// console.log(you.getAg());

// task 1

console.log('Task 1');

function propsCount(currentObject) {
  let count = 0;
  for (let i in currentObject) {
    count++;
  }
  return count;
}

const mentor = {
  course: 'JS fundamental',
  duration: 3,
  direction: 'web-development',
};

console.log(propsCount(mentor)); // 3

// task 2

console.log('Task 2');

const aboutMe = {
  name: 'Petro',
  surname: 'Matkovskyi',
  age: 24,
  married: false,
  placeOfResidence: 'Lviv',
};

function showProps(obj) {
  const props = [];
  const value = [];
  for (let prop in obj) {
    props.push(prop);
    value.push(obj[prop]);
  }
  console.log(value);
  return props;
}

console.log(showProps(aboutMe));

// task 3

console.log('Task 3');

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  showFullName() {
    console.log(`${this.name} ${this.surname}`);
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  showFullName(midleName) {
    return `${this.name} ${midleName} ${this.surname}`;
  }

  showCourse() {
    let yearNow = new Date().getFullYear();

    return yearNow - this.year;
  }
}

let stud1 = new Student('Petro', 'Matlovkyi', 2015);

console.log(stud1.showFullName('Petrovych')); // Matlovkyi Petro Petrovych
console.log('Current course: ' + stud1.showCourse()); //Current course: 6

// task 4

console.log('Task 4');

const employee = {};

function addWorker() {
  let countEmployee = 0;

  class Worker {
    #experience = 1.2;

    constructor(fullName, dayRate, workingDays) {
      this.fullName = fullName;
      this.dayRate = dayRate;
      this.workingDays = workingDays;
    }

    salary() {
      let salary = this.dayRate * this.workingDays;
      return salary;
    }

    showSalary() {
      console.log(`${this.fullName} salary: ${this.salary()}`);
    }

    salaryWithExperience() {
      let salaryExp = this.dayRate * this.workingDays * this.#experience;
      return salaryExp;
    }

    showSalaryWithExperience() {
      console.log(`${this.fullName} salary: ${this.salaryWithExperience()}`);
    }

    get showExperience() {
      return this.#experience;
    }

    set setExperience(newExp) {
      this.#experience = newExp;
    }
  }

  return function (fullName, dayRate, workingDays) {
    countEmployee++;

    employee.length = countEmployee;

    employee[`worker${countEmployee}`] = new Worker(
      fullName,
      dayRate,
      workingDays
    );
  };
}

const newWorker = addWorker();

newWorker('John Johnson', 20, 23);
newWorker('Tom Tomson', 48, 22);
newWorker('Andy Ander', 29, 23);

console.log(employee.worker1.fullName);
employee.worker1.showSalary();
console.log('New experience: ' + employee.worker1.showExperience);
employee.worker1.showSalaryWithExperience();
employee.worker1.setExperience = 1.5;
console.log('New experience: ' + employee.worker1.showExperience);
employee.worker1.showSalaryWithExperience();

console.log(employee.worker2.fullName);
employee.worker2.showSalary();
console.log('New experience: ' + employee.worker2.showExperience);
employee.worker2.showSalaryWithExperience();
employee.worker2.setExperience = 1.5;
console.log('New experience: ' + employee.worker2.showExperience);
employee.worker2.showSalaryWithExperience();

console.log(employee.worker3.fullName);
employee.worker3.showSalary();
console.log('New experience: ' + employee.worker3.showExperience);
employee.worker3.showSalaryWithExperience();
employee.worker3.setExperience = 1.5;
console.log('New experience: ' + employee.worker3.showExperience);
employee.worker3.showSalaryWithExperience();

function sortSalary(obj) {
  const arr = [];

  for (let i = 1; i <= obj.length; i++) {
    let j = obj[`worker${i}`];
    arr.push(j);
  }

  arr.sort((a, b) => {
    return a.salaryWithExperience() - b.salaryWithExperience();
  });

  for (let k = 0; k < arr.length; k++) {
    if (k === 0) {
      console.log(`Sorted salary:
${arr[k].fullName}: ${arr[k].salaryWithExperience()}`);
    } else {
      console.log(`${arr[k].fullName}: ${arr[k].salaryWithExperience()}`);
    }
  }

  return arr;
}

sortSalary(employee);

// task 5

console.log('Task 5');

class GeometricFigure {
  constructor() {}

  getArea() {
    return 0;
  }

  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

class Triangle extends GeometricFigure {
  constructor(h, a) {
    super();
    this.h = h;
    this.a = a;
  }

  getArea() {
    let area = (this.a * this.h) / 2;

    return area;
  }
}

class Circle extends GeometricFigure {
  constructor(r) {
    super();
    this.r = r;
  }

  getArea() {
    let area = Math.PI * this.r ** 2;
    return area;
  }
}

class Square extends GeometricFigure {
  constructor(l) {
    super();
    this.l = l;
  }

  getArea() {
    let area = this.l ** 2;
    return area;
  }
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];

function handleFigures(arr) {
  let totalArea = 0;

  arr.forEach((item) => {
    if (item instanceof GeometricFigure) {
      console.log(
        `Geometric figure: ${item.toString()} - area: ${item.getArea()}`
      );
      totalArea += item.getArea();
    }
  });

  return totalArea;
}

console.log(handleFigures(figures));

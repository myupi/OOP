class Job {
  constructor(name, salary, workingРours, dayOff) {
    this._name = name;
    this._salary = salary;
    this._workingРours = workingРours;
    this._dayOff = dayOff;
  }

  showName = function () {
    console.log(`Ish joyini nomi ${this._name}`);
  };

  showSalary = function () {
    console.log(`Maosh ${this._salary}`);
  };

  showWorkingРours = function () {
    console.log(`Ish vaqti ${this._workingРours}`);
  };
  
  showDayOff = function () {
    console.log(`Dam olish kuni ${this._dayOff}`);
  }
}

class Doctor extends Job {
  doSurgery = function () {
    console.log("siz operatsia qildingiz");
  }
  cure = function (){
    console.log("siz davolatdiz");
  }
}

class Developer extends Job {
  develop = function () {
    console.log("siz dastur yarattindgiz");
  }
}


let developer = new Developer("Developer", "1500$", "12 soat", "Yakshanba");
let doctor = new Doctor("Doctor", "800$", "9 soat", "Shanba, Yakshanba");

developer.showName();
developer.showSalary();
developer.showWorkingРours();
developer.showDayOff();
developer.develop();


doctor.showName();
doctor.showSalary();
doctor.showWorkingРours();
doctor.showDayOff();
doctor.doSurgery();
doctor.cure();
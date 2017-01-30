var employees=[];

function Employee (name,jobTitle,salary,status)
{
this.name=name;
this.jobTitle=jobTitle ;
this.salary=salary;
this.status = status || "full time";
    
    this.printEmployeeForm = function() {
        console.log("name" + this.name  + "jobTitle" + this.jobTitle);
       }
}


employees.push(new Employee("xyz","unknown","1000"));
employees.push(new Employee("hdgh","unkhdfhfhnown","11111"));
employees.push(new Employee("xyz","unknown","00225"));

for( var i=0; i<employees.length; i++ ) {
    employees[i].printEmployeeForm();
}

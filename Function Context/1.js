class Company {

    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {

        if (username === '' || username === null || username === undefined) {
            throw new Error('Invalid input!');
        }
        if (position === '' || position === null || position === undefined) {
            throw new Error('Invalid input!');
        }
        if (department === '' || department === null || department === undefined) {
            throw new Error('Invalid input!');
        }
        if (salary < 0) {
            throw new Error('Invalid input!');
        }

        let currentDep = this.departments.find(d => d.name === department);

        if (currentDep === undefined) {
            currentDep = {
                name: department,
                employees: []
            }

            this.departments.push(currentDep);
        }

        currentDep.employees.push({
            username,
            salary,
            position
        });

        return `New employee is hired. Name: ${username}. Position: ${position}`;




    }

    bestDepartment() {

        let best = this.departments.slice();

        for (let dep of best) {
            let averageSalary = dep.employees.reduce((a, b, c, f) => a + b.salary, 0) / dep.employees.length;
            dep.averageSalary = averageSalary;
        }

        best.sort((a, b) => b.averageSalary - a.averageSalary);

        let bestDepart = best[0];

        let result = `Best Department is: ${bestDepart.name}\n`;
        result += `Average salary: ${bestDepart.averageSalary.toFixed(2)}\n`;

        let bestEmpl = bestDepart.employees.sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username));

        for (const em of bestEmpl) {
            result += `${em.username} ${em.salary} ${em.position}\n`;
        }

        return result.trim();
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
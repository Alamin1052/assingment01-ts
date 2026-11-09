function multiplyValue(value:number,multiplier:number=2): number {
        return value*multiplier;
}


function processInput(value:string|number|boolean) : string|number|boolean{
        if (typeof value === "string"){
            return value.trim().toLowerCase();
        }

        else if (typeof a === "number"){
            return value*10
        }

        else if(typeof value === "boolean"){
            if (value === true){
                return "Active"
            }
            else {
                return "inactive"
            }
        }
        return value;
        
}



function formatCoordinate (
    location: readonly [number,number,string]
): string {

     const [latitude, longitude, locationName] = location;

            return `Location: ${locationName} (${latitude}, ${longitude})`;
}
const location = formatCoordinate([23.8103, 90.4125, "Dhaka"]);



function concatenateArrays <T>(...arrays: T[][]): T[]{
    return arrays.flat()

}



interface Course{
    title:string;
    students:number;
    isPublished:boolean
}

const courses:Course[] = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];

function getPopularCourses (courses:Course[],minStudent:number): Course[]{
        return courses.filter((course) =>{
            return course.isPublished === true && 
                    course.students >= minStudent;
        })
}



function pluckValues <T, K extends keyof T>(items: T[],key: K): T[K][]{
        return items.map((item) => item[key]);
}



class Employee {

    constructor(
        protected name: string,
        private baseSalary: number
    ) {}

    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private department: string;

    constructor(
        name: string,
        baseSalary: number,
        department: string
    ) {
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}

const manager = new Manager("Alice", 50000, "Engineering");


async function validateAgeAsync(age: number): Promise<string> {

    return new Promise<string>((success, reject) => {

        if (age >= 18) {

            setTimeout(() => {
                success("Access Granted");
            }, 1000);

        } else {

            reject(new Error("Access Denied: Must be 18 or older"));

        }

    });
}


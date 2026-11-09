## Access Modifiers in TypeScript OOP

**Introduction:**

Access modifiers are normally used to control the visibility and accessibility of class properties and methods in TypeScript. They help developers write secure, organized, and maintainable object-oriented code. TypeScript provides four access modifiers: public, private, protected, and readonly.

**1. Public**

The public modifier allows properties and methods to be accessed from anywhere, both inside and outside the class. 

**Example:**  

class User {
  public name: string = "alamin";
}

const user = new User();
console.log(user.name);

**2. Private**  

The private modifier block access to a property or method within the same class. It cannot be accessed directly from outside the class.

**Example:**  

class User {
  private password: string = "12345";
}

**3. Protected**  

The protected modifier allows access within the same class and its subclasses, but not from outside the class.

**Example:**  

class Person {
  protected age: number = 25;
}

class Student extends Person {
  showAge() {
    console.log(this.age);
  }
}

**4. Readonly**  

The readonly modifier allows a property to be assigned only during declaration or inside the constructor. Its value cannot be changed afterward.

**Example:**  

class Product {
  readonly id: number = 101;
}

**Conclusion**  

Access modifiers play an important role for securing code in TypeScript OOP. public, private, and protected modifiers are manage accessibility, while readonly prevents properties from being reassigned. Using them properly makes code more secure, structured, and maintainable.
## Access Modifiers in TypeScript OOP

**Introduction:**</br>
Access modifiers are normally used to control the visibility and accessibility of class properties and methods in TypeScript. They help developers write secure, organized, and maintainable object-oriented code. TypeScript provides four access modifiers: public, private, protected, and readonly.

**1. Public**</br>
The public modifier allows properties and methods to be accessed from anywhere, both inside and outside the class. 

**Example:**</br>
class User {
  public name: string = "alamin";
}

const user = new User();
console.log(user.name);

**2. Private** </br>
The private modifier block access to a property or method within the same class. It cannot be accessed directly from outside the class.

**Example:** </br>
class User {
  private password: string = "12345";
}

**3. Protected** </br>
The protected modifier allows access within the same class and its subclasses, but not from outside the class.

**Example:** </br>
class Person {
  protected age: number = 25;
}

class Student extends Person {
  showAge() {
    console.log(this.age);
  }
}

**4. Readonly** </br>
The readonly modifier allows a property to be assigned only during declaration or inside the constructor. Its value cannot be changed afterward.

**Example:** </br>
class Product {
  readonly id: number = 101;
}

**Conclusion** </br>
Access modifiers play an important role for securing code in TypeScript OOP. public, private, and protected modifiers are manage accessibility, while readonly prevents properties from being reassigned. Using them properly makes code more secure, structured, and maintainable.
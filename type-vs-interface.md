# Type vs Interface

**Introduction:**  

TypeScript provides two powerful ways to define the shape of data: type and interface. Both help developers create reusable, maintainable, and type-safe code.

**What is an Interface?** </br>
An interface defines the structure of an object.Interfaces are especially useful when defining object structures and reusable data models.

**Example:**</br>
interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: "alamin",
  email: "alamin@example.com"
};

**What is a Type Alias?**</br>
A type creates an alias for any TypeScript type.It is more flexible because they can describe different kinds of types, not just object structures.

**Example:**</br>
 type User = {
  id: number;
  name: string;
};

type Status = "active" | "inactive";

const userStatus: Status = "active";

**Differences Between**</br>
Declaration Merging: Interfaces automatically merge duplicate declarations, whereas types throw an error.
Flexibility & Primitives: Types can alias primitive values and unions, while interfaces are strictly for object shapes.
Extension Syntax: Interfaces use the extends keyword, while types use intersection (&) operators.

**Conclusion**</br>
In TypeScript, type and interface are both essential tools for writing type-safe applications.There is no universal winner choose the one that best fits for your codebase and enjoy the beauty of typescript.


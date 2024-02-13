/**
 * Author: Mirco palese
 * 02-12-2024
 *
 * PROTOTYPE
 *
 * Prototype is a creational pattern that lets you copy existing objects without making your code dependent
 * on thei
 *
 * PROBLEM :
 * you have an object and you want to copy it ! How would you do it ?
 * you have to create another object of the same class, then you have to go trough
 * all the fields copiying their values over the new object.
 *
 * Nice but not all the objects ca be copied like that, because som of the object's fields may be private
 * and not visible from the outside.
 *
 * SOLUTION:
 * simply delegate the cloning process to the object itself ! Every objects that needs to be cloned
 * must have a clone method in wich creates a new instance where he copys all his fields retunring the new instance
 */

interface Prototype {
  clone(): Prototype;
}

class Person implements Prototype {
  name: string;
  lastName: string;
  birth: number;

  constructor(name: string, lastname: string, birth: number) {
    this.name = name;
    this.lastName = lastname;
    this.birth = birth;
  }

  clone(): Person {
    return new Person(this.name, this.lastName, this.birth);
  }
}

// usage
const mirco = new Person("mirco", "palese", 1995);
const mircoClone = mirco.clone();

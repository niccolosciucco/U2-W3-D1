class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.fistName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  checkAge = function (nameOtherUser, ageOtherUser) {
    if (this.age > ageOtherUser) {
      console.log(`${this.fistName} è più vecchio di ${nameOtherUser}`);
    } else {
      console.log(`${this.fistName} è più giovane di ${nameOtherUser}`);
    }
  };
}

const u1 = new User("Niccolò", "Sciucco", 23, "Roma");
const u2 = new User("Eleonora", "Collini", 22, "Roma");
const u3 = new User("Letizia", "Raponi", 49, "Roma");

u1.checkAge(u2.fistName, u2.age);
u3.checkAge(u1.fistName, u1.age);

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this._species = _species;
    this._breed = _breed;
  }

  isTheSameOwner(otherOwner, otherPetName) {
    if (this.ownerName === otherOwner) {
      console.log(`${this.petName} e ${otherPetName} hanno lo stesso padrone`);
    } else {
      console.log(
        `${this.petName} e ${otherPetName} non hanno lo stesso padrone`,
      );
    }
  }
}

const arrayPets = [];

const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const input = document.querySelectorAll("input");
  const petName = input[0].value;
  const ownerName = input[1].value;
  const species = input[2].value;
  const breed = input[3].value;

  const p1 = new Pet(petName, ownerName, species, breed);
  arrayPets.push(p1);

  if (arrayPets.length >= 2) {
    arrayPets[0].isTheSameOwner(arrayPets[1].ownerName, arrayPets[1].petName);
  }

  form.reset();
});

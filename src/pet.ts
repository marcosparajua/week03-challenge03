export class Pet {
  id: number;
  name: string;
  breed: string;
  isAdopted: boolean;
  caretaker: string;

  constructor(
    name: string,
    breed: string,
    isAdopted: boolean,
    caretaker: string
  ) {
    this.id = Pet.createId();
    this.name = name;
    this.breed = breed;
    this.isAdopted = isAdopted;
    this.caretaker = caretaker;
  }

  static createId() {
    return Math.round(Math.random() * 1000000);
  }
}

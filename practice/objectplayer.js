class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi this is me ${this.name} and this is my type ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type, health, mana, power) {
    super(name, type);
    this.health = health;
    this.mana = mana;
    this.power = power;
  }
  attackType() {
    return this.mana * this.power;
  }
  display() {
    console.log(`
        Character:Wizard        
        Properties:
        Name:${this.name}
        Type:${this.type}
        Health:${this.health}
        Mana:${this.mana}
        Power:${this.power}
        Attack Power: ${this.attackType()}
        `);
  }
}

const wizard = new Wizard("Gandalf", "White Knight", 100, 200, 500);

wizard.display();

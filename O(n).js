const groceries = ["milk", "eggs", "bread", "flour", "sugar"];

const getGroceriesItem = (item) => {
  for (let i = 0; i < groceries.length; i++) {
    if (groceries[i] === item) {
      console.log(`Found: ${item}`);
    }
  }
};

getGroceriesItem("milk");

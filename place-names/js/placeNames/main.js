// Put your code here

const names = [
   "Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"
];

console.log("All Place Names");

for (const name of names) {
  console.log(name);
}

// javascript solution 
console.log("\n'The' Place Names (2)");
const forTheNames = names.filter(name => name.startsWith("The"));
forTheNames.forEach(name => console.log(name));

// can also do
console.log("\n'The' Place Names");
theNames = names.filter(name => name.startsWith("The"));
for (const name of theNames) {
  console.log(name);
}
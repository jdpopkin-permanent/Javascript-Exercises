function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function() {
  console.log(this.owner + " loves " + this.name);
}

cat = new Cat("Sennacy", "Jonathan");
cat.cuteStatement();
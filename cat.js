function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function() {
  console.log(this.owner + " loves " + this.name);
}

Cat.prototype.meow = function() {
  console.log("meow")
}

cat1 = new Cat("Sennacy", "Jonathan");

cat1.meow = function() {
  console.log("MEOW!")
}

cat1.cuteStatement();
cat1.meow();

cat1 = new Cat("Pickles", "Shaft");
cat1.cuteStatement();
cat1.meow();

cat3 = new Cat("King Kong", "Honey BooBoo")
cat3.cuteStatement();
cat3.meow();
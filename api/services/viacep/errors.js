function InvalidCep(message) {
  this.name = 'InvalidCep';
  this.message = message || 'Format or invalid CEP';
  this.stack = (new Error()).stack;
}
InvalidCep.prototype = Object.create(InvalidCep.prototype);
InvalidCep.prototype.constructor = InvalidCep;

module.exports = {
  InvalidCep,
}
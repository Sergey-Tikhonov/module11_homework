function createAdder(a) {
	return function addA(b) {
  	return a + b;
  }
}

module.exports = { createAdder };

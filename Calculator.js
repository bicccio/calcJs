function Calculator () {
}

Calculator.prototype.evaluate = function (expression) {
  if(expression.indexOf("(") != -1){
    var splitted = expression.split(/(\(.*\))/);
    return evaluate(splitted[0].trim() + evaluate(splitted[1].trim().slice(1, -1)) + splitted[2].trim());
  }

  if(expression.indexOf("+") !== -1) {
    var addends = expression.split(/\+(.+)?/);
    return this.sum(addends[0].trim(), addends[1].trim());
  } else if(expression.indexOf("-") !== -1) {
    var minuends = expression.split(/-(.+)?/);
    return this.min(minuends[0].trim(), minuends[1].trim());
  } else if(expression.indexOf("*") !== -1) {
    var multipliers = expression.split(/\*(.+)?/);
    return this.mul(multipliers[0].trim(), multipliers[1].trim());
  } else if(expression.indexOf("/") !== -1) {
    var dividends = expression.split("/");
    return this.div(dividends[0].trim(), dividends[1].trim());
  } else if(expression.indexOf("(") != -1){
    evaluate(expression.split("(")[1].split(")")[0]);
  }
  return this.num(expression);
}


Calculator.prototype.mul = function (a, b) {
  return this.evaluate(a) * this.evaluate(b);
}

Calculator.prototype.div = function(a, b) {
  return this.evaluate(a) / this.evaluate(b);
}

Calculator.prototype.sum = function(a, b) {
  return this.evaluate(a) + this.evaluate(b);
}

Calculator.prototype.min = function (a, b) {
  return this.evaluate(a) - this.evaluate(b);
}

Calculator.prototype.num = function(a) {
  return parseInt(a);
}

module.exports = Calculator

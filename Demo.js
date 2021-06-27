function MyConstructor(data, transport) {
  this.data = data;
  transport.on('data', function () {
    console.log(this.data);
  });
}

var transport = {
  on: function(event, callback) {
    setTimeout(callback, 1000);
  }
};

// called as
var obj = new MyConstructor('foo', transport)
console.log(obj);
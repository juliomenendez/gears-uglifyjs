var MyClass = function(options) {
    this.options = options;
};

MyClass.prototype = {
    run: function() {
        console.log(this.options);
    }
};

var myClass = new MyClass({ text: 'Hello!' });
myClass.run();
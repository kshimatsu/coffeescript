// Generated by CoffeeScript 1.8.0
(function() {
  var randomColor;

  randomColor = function() {
    return '#' + Math.random().toString(16).slice(2, 8);
  };

  $('#bgBtn').on("click", function(e) {
    e.preventDefault();
    console.log("Hello World!");
    return $('body').css('background', randomColor());
  });

}).call(this);

//# sourceMappingURL=main.js.map

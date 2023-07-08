//jshint esversion:6
//this code is reusable and can be used anywhere
exports.getDate = function() {

    const today = new Date();
  
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long"
    };
  
    return today.toLocaleDateString("en-US", options);
  
  };
  
  exports.getDay = function () {
  
    const today = new Date();
  
    const options = {
      weekday: "long"
    };
  
    return today.toLocaleDateString("en-US", options);
  
  };
  
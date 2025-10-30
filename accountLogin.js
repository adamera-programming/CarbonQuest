onEvent("Log", "click", function() {
  var correct="no";
  readRecords("userIds", {}, function(records) {
    if (records.length>0) {
      for (var i =0; i < records.length; i++) {
        if(getText("UsernameInput")==records[i].email){
          if(getText("PasswordInput")==records[i].password){
            correct="yes";
          }
        } else {
          correct="no";
        }
      }
    }
    if (correct=="yes"){
      console.log("Success");
    }
    if (correct=="no"){
      console.log("The email and password do not match");
    }
  });
});
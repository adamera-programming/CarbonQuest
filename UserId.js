onEvent("Sign", "click", function() {
  var emailExists="no";
  readRecords("userIds", {}, function(records) {
    if (records.length>0) {
      for (var i =0; i < records.length; i++) {
        if(getText("EmailInput")==records[i].email){
          emailExists="yes";
        }
      }
    }
    if (emailExists=="no"){
      var userId={};
      userId.email = getText("EmailInput");
      userId.username = getText("UsernameInput1");
      userId.password = getText("PasswordInput1");
      createRecord("userIds", userId, function() {
        console.log("Account Created");
      });
    }else{
      console.log("An account with this email already exists");
    }
  });
});
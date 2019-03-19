// Initialize Firebase
var config = {
  apiKey: "AIzaSyAIYmB7bsSOzT8yZCp9PtAc_CR9t8hmJC8",
  authDomain: "timesheet-8bdaa.firebaseapp.com",
  databaseURL: "https://timesheet-8bdaa.firebaseio.com",
  projectId: "timesheet-8bdaa",
  storageBucket: "timesheet-8bdaa.appspot.com",
  messagingSenderId: "197256717814"
};
firebase.initializeApp(config);

var database = firebase.database();
var ref = database.ref('employees/');

$("#submit-btn").on("click", createRow("","","",""));

ref.on('child_added', function(data) {
  console.log(data.val());
  let user = data.val();
  createRow(user.Name, user.Role, user.Start_Date, user.Monthly_Rate);
});

function createRow(name, role, startDate, monthlyRate)
{
  let d = new Date();
  //let monthsWorked = (d.getMonth + 1 ) - parseInt(startDate.substr(startDate.indexOf("/"), startDate.indexOf("/") + 2));

  let tempRow = $("<div>");
  let colOne = $("<div>");    //employee name
  let colTwo = $("<div>");    //employee role
  let colThree = $("<div>");  //employee start date
  let colFour = $("<div>");   //employee months worked
  let colFive = $("<div>");   //employee monthly rate
  let colSix = $("<div>");    //employee total billed

  tempRow.addClass("row");
  colOne.addClass("col");
  colTwo.addClass("col");
  colThree.addClass("col");
  colFour.addClass("col");
  colFive.addClass("col");
  colSix.addClass("col");

  colOne.text(name);
  colTwo.text(role);
  colThree.text(startDate);
  colFour.text("some months");
  colFive.text(monthlyRate);
  colSix.text("some amount");

  tempRow.append(colOne);
  tempRow.append(colTwo);
  tempRow.append(colThree);
  tempRow.append(colFour);
  tempRow.append(colFive);
  tempRow.append(colSix);

  $("#tableContents").append(tempRow);
}

$("#submitBtn").on("click", function() {
  let d = new Date();
  let email = $("#emailInput").val();
  email = email.substr(0, email.indexOf("."));
  let name = $("#nameInput").val();
  let role = $("#roleInput").val();
  let monthlyRate = $("#monthlyRateInput").val();
  let startDate = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();

  writeEmployeeData(email, name, role, startDate, monthlyRate);
});

function writeEmployeeData(email, name, role, startDate, monthlyRate)
{
  database.ref('employees/' + email).push({
    Name: name,
    Role: role,
    Start_Date: startDate,
    Monthly_Rate: monthlyRate
  });
};
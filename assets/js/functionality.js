// Initialize Firebase
// var config = {
//     apiKey: "AIzaSyAIYmB7bsSOzT8yZCp9PtAc_CR9t8hmJC8",
//     authDomain: "timesheet-8bdaa.firebaseapp.com",
//     databaseURL: "https://timesheet-8bdaa.firebaseio.com",
//     projectId: "timesheet-8bdaa",
//     storageBucket: "timesheet-8bdaa.appspot.com",
//     messagingSenderId: "197256717814"
//   };
//   firebase.initializeApp(config);

$("#submit-btn").on("click", function() {

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

  colOne.text("A Name");
  colTwo.text("A Role");
  colThree.text("dd/mm/yyyy");
  colFour.text("27");
  colFive.text("$$$$$");
  colSix.text("$$$$$$$$$$");

  tempRow.append(colOne);
  tempRow.append(colTwo);
  tempRow.append(colThree);
  tempRow.append(colFour);
  tempRow.append(colFive);
  tempRow.append(colSix);

  $("#tableContents").append(tempRow);
});
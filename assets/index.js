// Initialize Firebase
var config = {
    apiKey: "AIzaSyDINfUeZFryAsXdtgTEox0Lhd3qOo14dkk",
    authDomain: "swen-ac1a7.firebaseapp.com",
    databaseURL: "https://swen-ac1a7.firebaseio.com",
    projectId: "swen-ac1a7",
    storageBucket: "swen-ac1a7.appspot.com",
    messagingSenderId: "938841526262"
};
firebase.initializeApp(config);

var Ref = firebase.database().ref("ListOfStaff");
	Ref.on("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        var id = childData.StaffID;
        var sname = childData.StaffName;
        var dob = childData.StaffDoB;

        $("#id").append(id);
        $("#name").append(sname);
        $("dob").append(dob);
		});
});

var search = document.getElementById("search");

search.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        window.location.href = "./search.html"
    }
})

function redirect() {
    window.location.href = "./assets/images/report.png"
}

function printDoc() {
    var doctype = document.getElementById("doctype").value;
    var startdate = document.getElementById("startdate").value;
    var enddate = document.getElementById("enddate").value;
    var printer = document.getElementById("printer").value;
    if (startdate == "" || enddate == "") {
        alert("Please enter a starting and ending date for the data entries to use in the report")
    }
    else {
        alert("A report for " + doctype + " containing data entered between " + startdate + " and " + enddate + " has been generated and is being printed at " + printer);
    }
}

function changeSchedule() {
    var copies = document.getElementById("copies").value;
    var doctype = document.getElementById("doctype-2").value;
    var regularity = document.getElementById("regularity").value;
    if (copies == "") {
        alert("Please enter the number of copies to print")
    }
    else {
        alert("Change in generation schedule: " + copies + " copies of reports regarding " + doctype + " will be printed " + regularity);
    }
}

function saveEdits() {
    alert("Your edits have been saved!");
    window.location.href = "./reports.html"
}

function goEdit() {
    window.location.href = "./editreport.html"
}

function submitBooking() {
    var roomtype = document.getElementById("roomtype").value;
    var payment = document.getElementById("payment").value;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var dob = document.getElementById("dob").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var childnum = document.getElementById("childnum").value;
    var adultnum = document.getElementById("adultnum").value;
    var checkindate = document.getElementById("checkindate").value;
    var checkoutdate = document.getElementById("checkoutdate").value;
    var cardname = document.getElementById("cardname").value;
    var cardnum = document.getElementById("cardnum").value;
    var expdate = document.getElementById("expdate").value;

    if (roomtype == "" || payment == "" || fname == "" || lname == "" || dob == "" ||
        address == "" || phone == "" || childnum == "" || adultnum == "" ||
        checkindate == "" || checkoutdate == "" || cardname == "" || cardnum == "" || expdate == "") {
            alert("One or more fields are empty")
        }
    else {
        alert("Booking has successfully been made!")
    }
}

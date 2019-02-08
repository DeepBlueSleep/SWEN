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
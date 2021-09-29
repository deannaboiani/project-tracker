console.log("hello!");



var timeHeaderEL = document.getElementById("time-header")


setInterval(timeHeader,500)

function timeHeader(){
    timeHeaderEL.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}

// when you click the add prokect button, the module will pop-up for information input
var datepicker = $("date-picker")
$( function() {
    $("#date-picker").datepicker();
  } );

var projectName = document.querySelector("#projectName");
var projectType = document.querySelector("#projectType");
var dueDate = document.querySelector("#dueDate");
var hourlyRate = document.querySelector("#hourlyRate");
var projectFormEl = $("#project-form");
var projectDisplayEl = $("project-display");
var submitFormButtonEl = $("#submit-btn")
function setInfo() {
    var formData = {};
    $("#project-form").each(function (formField) {
      formData[this.id] = this.value;
    });
    try {
      localStorage.setItem("formData", JSON.stringify(formData));
    } catch (err) {
      console.log("Couldn't persist formData : " + err);
    }
  }
  
  function getInfo() {
      var storedData = localStorage.getItem(formData)
      // add a variable for display 
      projectDisplayEl = JSON.parse(storedData)
  }  
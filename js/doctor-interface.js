var apiKey = require('./../.env').apiKey;
var Doctor = require('./../js/doctor.js').doctorModule;

var listDoctors = function(medicalIssue, doctors) {
    doctors.forEach(function(doctor) {
$('#doctor').append("<p>" + doctor.profile.last_name + " , " + doctor.profile.first_name +  " , " + doctor.profile.title + "</p>");
});
};


$(document).submit(function(event) {
  event.preventDefault();


  var medicalIssue = $("#input").val();
  var newDoctor = new Doctor(medicalIssue);
  $('#syptom').text(medicalIssue);
  newDoctor.getDoctors(medicalIssue, listDoctors);
});

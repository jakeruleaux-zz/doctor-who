var apiKey = require('./../.env').apiKey;
var Doctor = require('./../js/doctor.js').doctorModule;

var listDoctors = function(medicalIssue, doctors) {
    doctors.forEach(function(doctor) {
        console.log(listDoctors);
$('#doctor').text("<p>" + doctor.profile.last_name + " , " + doctor.profile.first_name + "</p>" + "hi");
});
};

$(document).submit(function(event) {
  event.preventDefault();

  var medicalIssue = $("#input").val();
  var newDoctor = new Doctor(medicalIssue);

  newDoctor.getDoctors(medicalIssue, listDoctors);
});

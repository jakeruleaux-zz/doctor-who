var Doctor =    require('./../js/doctor.js').doctorModule;

var listDoctors = function(medicalIssue, doctors) {
    doctors.forEach(function(doctor) {
      $('#doctor').append("<p>" + doctor.profile.last_name + " , " + doctor.profile.first_name +  " , " + doctor.profile.title + "</p>" + "<ul>" + "<li>" + doctor.practices.visit + "</li>" + "</ul>");
      console.log(doctor.practices[0].visit_address.street);
  });
};

$(document).ready(function() {
  $('#input-form').submit(function(event){
    event.preventDefault();

    var medicalIssue = $("#input").val();
    var newDoctor = new Doctor(medicalIssue);
    newDoctor.getDoctors(medicalIssue, listDoctors);
    $('#input').val(" ");
    $('#symptom').append("This hurts " + medicalIssue);
  });
});

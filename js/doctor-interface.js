var Doctor =    require('./../js/doctor.js').doctorModule;

var listDoctors = function(medicalIssue, doctors) {
    doctors.forEach(function(doctor) {
      $('#doctor').append("<p>" + doctor.profile.last_name + " , " + doctor.profile.first_name +  " , " + doctor.profile.title + "</p>" + "<ul>" + "<li>" + doctor.practices[0].visit_address.street + " , " + doctor.practices[0] .visit_address.city + " , " +  doctor.practices[0].visit_address.state + "</li>" + "</ul>");

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
    $('#doctor').empty();
    

  });
});

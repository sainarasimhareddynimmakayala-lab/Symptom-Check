// Wrapping everything in DOMContentLoaded ensures document is defined
document.addEventListener("DOMContentLoaded", function() {

  var input = document.getElementById("symptomInput");
  var checkBtn = document.getElementById("checkBtn");
  var clearBtn = document.getElementById("clearBtn");
  var result = document.getElementById("resultText");

  checkBtn.addEventListener("click", function() {
    var text = input.value.trim().toLowerCase();

    if(text === "") {
      result.textContent = "Please enter at least one symptom.";
      return;
    }

    var output = "";

    if(text.indexOf("fever") !== -1 || text.indexOf("cough") !== -1) {
      output += "Possible viral infection. ";
    }
    if(text.indexOf("headache") !== -1) {
      output += "May indicate stress, dehydration, or infection. ";
    }
    if(text.indexOf("vomit") !== -1 || text.indexOf("nausea") !== -1) {
      output += "Could be stomach-related or food reaction. ";
    }
    if(output === "") {
      output = "No specific match found. Monitor your symptoms.";
    }

    result.textContent = output + " This is not a medical diagnosis.";
  });

  clearBtn.addEventListener("click", function() {
    input.value = "";
    result.textContent = "Your assessment will appear here.";
  });

});

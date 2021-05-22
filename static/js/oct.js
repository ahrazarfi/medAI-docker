var map = null;
var markerArray = [];
function submit() {
  var val = $("#id_one").val();
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://139.59.4.61:5000", true);
  var data = new FormData();
  data.append("type", val);
  if (val != "cancer") {
    console.log("Here");
    data.append("img", $("#file_").prop("files")[0]);
  }
  xhr.onreadystatechange = function () {
    var obj = JSON.parse(this.responseText)[0];
    if (!obj["empty"]) {
      $("prediction-id").html(obj["cnv"]);
      $("prediction-id").html(obj["dme"]);
      $("prediction-id").html(obj["drusen"]);
      $("prediction-id").html(obj["normal"]);
      // if(parseInt(obj["pred_val"]) != 0){
      //   plotMap(obj["places"]);
      //   addPlaces(obj["places"]);
      // }
      $("#status").html("<b>" + obj["cnv"] + "</b>");
      $("#status1").html("<b>" + obj["dme"] + "</b>");
      $("#status2").html("<b>" + obj["drusen"] + "</b>");
      $("#status3").html("<b>" + obj["normal"] + "</b>");
      document.getElementById("demo").innerHTML = "Analysis Report";
      clear();
      $("#result").html("<b>" + obj["pred_val"] + "</b>");
    }
  };
  xhr.send(data);
}

function clear() {
  for (var i = markerArray.length - 1; i >= 0; i--) {
    markerArray[i].setMap(null);
    markerArray.pop();
  }
  // $("#hospital").html("");
}

function changeText(button, text, textToChangeBackTo) {
  buttonId = document.getElementById(button);
  buttonId.textContent = text;
  setTimeout(function () {
    back(buttonId, textToChangeBackTo);
  }, 10000);
  function back(button, textToChangeBackTo) {
    button.textContent = textToChangeBackTo;
  }
}
function show_hide_cancer() {
  if ($("#id_one").val() == "cancer") {
    $("#myDIV").show();
    $("#file_").hide();
  } else {
    $("#myDIV").hide();
    $("#file_").show();
  }
}

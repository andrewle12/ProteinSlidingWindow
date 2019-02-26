//Place full sequence here
let sequence = "";

//Number of amino acids per protein
let numAmino = 0;

var proteinWindow = (sequence, numAmino) => {
  //Seperate sequence into individual letters
  let split = sequence.split("");

  //Array of all built proteins
  let finalArray = [];

  //Current protein being built
  let protein = "";

  //To keep track of starting amino acid
  let startCounter = 0;

  //While loop to build the proteins
  while (startCounter <= sequence.length) {
    if (protein.length < numAmino) {
      protein += split[startCounter];
      startCounter++;
    } else {
      printProtein(protein);
      finalArray.push(protein);
      protein = "";
      startCounter = finalArray.length;
    }
  }
};

$("#submit").on("click", function() {
  sequence = $("#sequence").val();
  numAmino = $("#amino").val();
  proteinWindow(sequence, numAmino);
});

var printProtein = peptide => {
  $("#proteins").append(peptide);
  $("#proteins").append("<br>");
};

$(document).ready(function() {
  $("#items").submit(function(event) {
    var items = ["item1","item2","item3","item4","item5","item6"];
    items.forEach(function(item) {
      var userInput = $("input#"item).val();
    var orderedList = items.map(function(item) {
     return item.toUpperCase();
   });
});




  //  var person1Input = $("input#person1").val();
  //  var person2Input = $("input#person2").val();
  //  var animalInput= $("input#animal").val();
  //  var exclamationInput = $("input#exclamation").val();
  //  var verbInput = $("input#verb").val();
  //  var nounInput = $("input#noun").val();

  //  $(".person1").text(person1Input);
  //  $(".person2").text(person2Input);
  //  $(".animal").text(animalInput);
  //  $(".exclamation").text(exclamationInput);
  //  $(".verb").text(verbInput);
    //$(".noun").text(nounInput);

    $("#orderedlist").text(orderedList);

    event.preventDefault();

});
});

$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var job1Input = $("input#job1").val();
    var job2Input = $("input#job2").val();
    var skill1Input = $("input#skill1").val();
    var skill2Input = $("input#skill2").val();
    var product1Input = $("input#product1").val();
    var product2Input = $("input#product2").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".job1").text(job1Input);
    $(".job2").text(job2Input);
    $(".skill1").text(skill1Input);
    $(".skill2").text(skill2Input);
    $(".product1").text(product1Input);
    $(".product2").text(product2Input);

    $("#story").show();

    event.preventDefault();
  });
});

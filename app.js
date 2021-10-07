$(document).ready(function() {

//These are global variables
var number = 30;
var intervalId;
var gcount = 0;
var wcount = 0;
var unanswered = 0;

//Start the coundown
function run() {
    intervalId = setInterval(decrement, 1000);
}

//Hide the questions and other contents
$(window).on("load", hide);

$('#start').on('click', function(){
    $(this).hide();
    show();
    run();
});

$('#done').on('click', function(){
    $('#start').hide();
    hide();
    rSummary();
    stop();
});

//Create the elements for the result page
function rSummary(){
    var alldone = $('<h2>').html('All Done!');
    var canswers = $('<p>').html('Correct answers: ' + gcount);
    var wanswers = $('<p>').html('Incorrect answers: ' + wcount);
    var cunanswered = $('<p>').html('Unanswered: ' + unanswered);
    var newclass= $('<div class="col-lg-4 col-lg-offset-4 text-center" id="summary">');
    newclass.append(alldone);
    newclass.append(canswers);
    newclass.append(wanswers);
    newclass.append(cunanswered);
    $('.row:nth(2)').append(newclass);
}

function decrement() {
    //  Decrease number by one.
    number--;
     
     //  Show the number in the #show-number tag.
     $("#timer").html(" " + number + " seconds");
    
    //  Once number hits one...
    if (number === 1) {
        $("#timer").html(" " + number + " second");
    }
      //  Once number hits zero...
    else if (number === 0) {
        //  ...run the stop function.
        $('#start').hide();
        hide();
        rSummary();
        stop();
    }
}

function stop() {
    clearInterval(intervalId);
}



//This function will hide some contents
function hide(){
    $('.form-group').hide();
    $('#time').hide();
    $('#done').hide();
}

//This function will hide some contents
function show() {
    $('.form-group').show();
    $('#time').show();
    $('#done').show();
}

//Grab all radio buttons and calculate good and incorrect answers when a change occurs
$('input[type=radio]').on("change", function() {
   gcount =  $('input[value=goodanswer]:checked').length;
   wcount = $('input[value=wrong]:checked').length;
   unanswered = (7-(gcount + wcount));
});

});
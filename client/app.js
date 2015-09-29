
$(function(){
    console.log("Working");
    var randomArray = [];
    var republicanArray = [];
    var democratArray = [];

    $.ajax({
        url: "/getDemocrats"
    }).done(function(response){
        console.log(response);
        var dems = response;
        $('#dem-btn').on('click', function(){
            $('.demParty').empty();
        for (var it = 0; it < dems.length; it++) {
            //console.log(dems[it]);
            democratArray[it] = response[it];


            var $content = $("<li>" + dems[it] + "</li>");

            $('.demParty').append($content);
        }
            console.log(democratArray);
        });
    });

    $.ajax({
        url: "/getRepublicans"
    }).done(function(response){
        console.log(response);
        var reps = response;

        $('#rep-btn').on('click', function(){
            $('.repParty').empty();
        for (var it = 0; it < response.length; it++){

            //console.log(response[it]);
           republicanArray[it] = response[it];
            var $content = $("<li>" + reps[it] + "</li>");

            $('.repParty').append($content);
        }
            console.log(republicanArray);
        });
    });

    $('#candidates').on('click', function(){
    randomArray = democratArray.concat(republicanArray);
        console.log(randomArray);
        var electPres = randomArray[getRandom(0,9)];
        console.log(electPres);
        $('.winner p').empty();
        $('.winner p').append(electPres);

    });

    function getRandom(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
}
});
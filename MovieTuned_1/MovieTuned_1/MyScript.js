/**
 * Created by Hassan Khalid on 15/05/2016.
 */
$(document).ready(function () {

    $("#moviesMenu").on("mouseover", function () {
        $("#mmList").show();
    });

    $("#moviesMenu").on("mouseout", function () {
        $("#mmList").hide();
    });

    $("#showsMenu").on("mouseover", function () {
        $("#showsList").show();
    });

    $("#showsMenu").on("mouseout", function () {
        $("#showsList").hide();
    });

    //for search bar
    $("#searchBar").hide();
    var visibile = false;

    $("#searchButton").on("click", function () {
        //alert("inside function");
        if (visibile == false) {
            $("#searchBar").show();
            visibile = true;
        }
        else if (visibile == true) {
            $("#searchBar").hide();
            visibile = false;
        }
    });

    $("#goButton").on("click", function () {
        alert("Hello");
        $("#searchBar").hide();
    });

    $(".modal-footer").attr("color", "#565656");

    // var rating = $("#rating");
    // var year = $("#year");
    // year.text("2017");
    // year.append(rating);
})

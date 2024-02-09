// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $('#calculateBtn').click(function () {
        var hours = parseFloat($('#hours').val());
        var hourlyRate = 50; 

        if (isNaN(hours)) {
            alert('Please enter a valid number of hours.');
            $('#hours').val("");
            return;
        }
        if (hours < 0) {
            alert('Please enter a positive number.')
            $('#hours').val("");
            return;
        }

        var total = hours * hourlyRate;
        $('#total').text('$' + total.toFixed(2));
    });
});
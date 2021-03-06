/* Azul Lanas
Date: 12/13/2020 */

function validateEmail(x) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(x);
}
function validatePro(x){
    let re = /^[A-Z\/]+$/i;
    return re.test(x);
}
function validateChar(x){
    let re = /^[A-Z]+$/i;
    return re.test(x);
}

function sendData(fullName, email, pronouns, race, msg){
    $.ajax({
        url: 'volunSub.php',
        type: 'POST',
        data: {fullName: fullName, email: email, pronouns: pronouns, race: race},
        success: function(val){
            if(val === 'error'){
                $('#msg').html('Server could not process form entries<br> Please try again with proper input');
            }else{
                $("#msg").css("color", "black");
                $('#msg').html('Sent!');
            }
            clearForm();
        },
        error: function(val){
            $("#msg").html("Please make sure you enter proper data into the volunteer form.");
        }
    });
}


function validate(){
    let fullName = $('#fullName').val().trim();
    let email1 = $('#email').val().trim();
    let email2 = $('#reEmail').val().trim();
    let pronouns = $('#pro').val().trim();
    let race = $('#race').val().trim();
    let errMsg = '';


    $('#fullName').val(fullName);
    $('#email').val(email1);
    $('#reEmail').val(email2);
    $('#pro').val(pronouns);
    $('#race').val(race);

    if (fullName === ''){
        errMsg += 'Full name entry cannot be empty <br>';
    } else{
        if(!validateChar(fullName)){
            errMsg += "Full name must only contain characters EX: abcdefg"; 
        }
    }

    if(email1 == '' || email2 == ''){
        errMsg += 'Email entry cannot be empty <br>';
    } else if (email1 != email2){
        errMsg += 'Email content does not match <br>';
    } else if (email1 === email2){
        if (!validateEmail(email1)) {
            errMsg += "Email entries are not vaild.<br>";
        }
    }

    if (pronouns == ''){
        errMsg += 'Pronoun entry cannot be empty <br>';
    } else if (!validatePro(pronouns)) {
        errMsg += 'Pronoun entry not vaild. Please try again EX: they/them <br>';
    }
    if (race == '') {
        errMsg += 'Race entry cannot be empty';
    } else if (!validateChar(race)){
        errMsg += 'Race entry must only contain characters EX: abcdefg'
    }
    
    if (errMsg === ''){
        sendData(fullName, email1, pronouns, race);
    } else {
        $('#msg').html(errMsg);
    }
}
function gameMode(x){
    location.href= "gameP"+ x +".php";
}
function dateMath(){
    let date1 = new Date($('#datepicker').val());
    let date2 = new Date;
    let timeDiff = date2.getTime() - date1.getTime();
    timeDiff = Math.abs(Math.floor(timeDiff / (1000*3600*24)));
    if(isNaN(timeDiff)){
        $('#msg').html('Please pick a day');
    }else{
        date1 = (date1.getMonth() + 1)+'/'+ date1.getDate()+'/'+date1.getFullYear();
        date2 = (date2.getMonth() + 1)+'/'+ date2.getDate()+'/'+date2.getFullYear();
        $.ajax({
            url: 'dateVal.php',
            type: 'POST',
            data: {date1: date1, date2: date2},
            success: function(val){
                $("#msg").css("color", "black");
                $("#msg").html('The date you chose is ' + val + ' day(s) away!');
            },
            error: function(val){
                $("#msg").html("Please make sure you pick a proper date");
            }
        });
    }
    
}

function clearForm(){
    $('#fullName').val('');
    $('#email').val('');
    $('#reEmail').val('');
    $('#pro').val('');
    $('#race').val('');
    $('#msg').html('<br>');
}


$(document).ready(function(){
    $('#clearBtn').click(function () {
        clearForm();
    });
    $('#volun').click(function () {
        validate();
    });
    $('#player1').click(function(){
        gameMode(1);

    });
    $('#player2').click(function(){
        gameMode(2);
    });
    $('#p1Roll').click(function(){
        let diceRoll = (Math.floor(Math.random() * 6) + 1);
        $('#dice1').attr('src', 'images/dice'+diceRoll+'.png');
    });
    $('#p2Roll').click(function(){
        let diceRoll = (Math.floor(Math.random() * 6) + 1);
        $('#dice2').attr('src' , 'images/dice'+diceRoll+'.png');
    });
    $('#datepicker').datepicker({
        format: 'yyyy-mm-dd',
        minDate: 0
    });
    $('#findOut').click(function (){
        dateMath();
    });
});
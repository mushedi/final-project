<?php

if (!empty($_POST)) {
    if(!empty($_POST["fullName"]) && !empty($_POST["email"]) && !empty($_POST["pronouns"]) && !empty($_POST["race"])){ 
        $fullName = $_POST['fullName'];
        $email = $_POST['email'];
        $pronouns = $_POST['pronouns'];
        $race = $_POST['race'];
        
        $errEmail = '';
        $errName = '';
        $errPro = '';
        $errRace = '';

        if(!preg_match('/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/', $email)){
            $errEmail = 'error';
        }else {
            $errEmail = 'success';
        }
        if(!preg_match('/^[A-Z\/]+$/i', $pronouns)){
            $errPro = 'error';
        }else {
            $errPro = 'success';
        }
        if(!preg_match('/^[A-Z]+$/i', $race)){
            $errRace = 'error';
        }else {
            $errRace = 'success';
        }
        if(!preg_match('/^[A-Z]+$/i', $fullName)){
            $errName = 'error';
        }else {
            $errName = 'success';
        }
        if($errEmail === 'error' || $errPro === 'error' || $errName === 'error' || $errRace === 'error'){
            printf('error');
        }else {
            printf('success');
        }
    }else{
        printf('error');
    }
}else{
    printf('error');
}


?>
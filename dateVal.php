<!-- /* Azul Lanas
Date: 12/13/2020 */ -->

<?php

    
if (!empty($_POST)) {
    if(!empty($_POST["date1"]) && !empty($_POST["date2"]) && !empty($_POST["timeDiff"])){ 

        $date1 = $_POST['date1'];
        $date2 = $_POST['date2'];
        $timeDiff = $_POST['timeDiff'];
        $test_arr = explode('/', $date1);
        $test_arr2 = explode('/', $date2);

        if(checkdate($test_arr[0], $test_arr[1], $test_arr[2]) && checkdate($test_arr2[0], $test_arr2[1], $test_arr2[2])){
            printf(ceil(abs((strtotime($date1) - strtotime($date2)) / 86400)));
        }else{
            printf('error');
        }

    }else{
        printf('error');

    }
} else{
    printf('error');
}



?>
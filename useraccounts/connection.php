<?php      
    $host = "localhost";  
    $email = "root";  
    $password = '';  
    $db_name = "useraccounts";  
      
    $con = mysqli_connect($host, $email, $password, $db_name);  

    if(mysqli_connect_errno()) {  
        die("Failed to connect with MySQL: ". mysqli_connect_error());  
    }  
?>  
<?php      
    include('connection.php');  
    $email = $_POST['email'];  
    $password = $_POST['pass'];  
      
        //to prevent from mysqli injection  
        $email = stripcslashes($email);  
        $password = stripcslashes($password);  
        $email = mysqli_real_escape_string($con, $email);  
        $password = mysqli_real_escape_string($con, $password);  
      
        $sql = "select *from users where email = '$email' and password = '$password'";  
        $result = mysqli_query($con, $sql); 
       // if (!$check1_res) {
    //printf("Error: %s\n", mysqli_error($con));
    //exit();
//}


        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);  
        $count = mysqli_num_rows($result);  
          
        if($count == 1){  
           // echo "<h1><center> Login successful </center></h1>";  
            echo '<script>alert("Login successful ")</script>'; 

        }  
        else{  
             echo '<script>alert("Login failed. Invalid username or password.")</script>'; 

        }     
?>  
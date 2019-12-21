<?php

include "conn1.php";

if (isset($_POST['name'])) {
    $name = $_POST['name'];
    //后端只需要判断当前的用户名是否存在(select)。
    $result = $conn->query("select * from zhucebiao where username='$name'");
    if ($result->fetch_assoc()) {
        echo true; //存在 1
    } else {
        echo false; //不存在  空隙
    }
}

//获取注册的值，将其存入数据库中
// echo $_POST['submit'];
if (isset($_POST['submit'])) {
    $user = $_POST['username'];
    $pass = sha1($_POST['password']);
    $email = $_POST['email'];
    $a=$conn->query("insert zhucebiao values(null,'$user','$pass','$email',NOW())");
    $b;
    if ($a) {
        $b=1;
        echo $b; //存在 1
    } else {
        $b=0;
        echo $b; //不存在  空隙
    }
}

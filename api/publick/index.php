<?php
require '../vendor/autoload.php';



$method = $_SERVER['REQUEST_METHOD'];
echo $method;
$formData = getFormData($method);

function getFormData($method) {

    if ($method === 'GET') {
        echo $method;
        return $_GET;
    }
    if ($method === 'POST') {
        echo $method;
        return $_POST;
    }


    // PUT, PATCH или DELETE
    $data = array();
    $exploded = explode('&', file_get_contents('php://input'));

    foreach($exploded as $pair) {
        $item = explode('=', $pair);
        if (count($item) == 2) {
            $data[urldecode($item[0])] = urldecode($item[1]);
        }
    }
    echo $data;
    return $data;
}









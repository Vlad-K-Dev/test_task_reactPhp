<?php
require '../vendor/autoload.php';

use Alcaeus\MongoDbAdapter\Tests\Mongo;

class Connection {
    private $connect;

     function __construct(){
        try{
            $this->connect = new MongoDB\Driver\Manager("mongodb+srv://vlad:cookies100@cluster0-0t4nc.mongodb.net/User_Data?retryWrites=true&w=majority");
        } catch ( ErrorException $e){
            echo $e->getMessage();
        }

     }

    public function mongoConnect(){
         $this->connect;
         return $this->connect;
    }
}

    


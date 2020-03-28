<?php

require '../vendor/autoload.php';
include_once '../objects/Connection.php';

class CRUD
{
    public function create(){
        $manager = new MongoDB\Driver\Manager("mongodb+srv://vlad:cookies@cluster0-0t4nc.mongodb.net/test?retryWrites=true&w=majority");
        $writeConcern = new MongoDB\Driver\WriteConcern(MongoDB\Driver\WriteConcern::MAJORITY, 100);
        $bulk = new MongoDB\Driver\BulkWrite();
        $db = 'User_Data.Users';
        $bulk->insert(['name'=>'Ivan', 'email'=>'test@gmail.com', 'pet'=>'dog']);

        try{
            $manager->executeBulkWrite($db, $bulk,$writeConcern);
        } catch (MongoException $e){
            var_dump($e);
        }

        return $manager;
    }

    public function read(){

    }

    public function update(){

    }

    public function delete(){

    }
}
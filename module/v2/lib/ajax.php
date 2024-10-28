<?php

function getImageList()
{
    $arrImages = [];
    $path = 'assets/image';
    $arrImages = array_diff(scandir($path), array('..', '.'));
    return  $arrImages;
}

function getNumberPage(){
    if(isset($_GET['page'])){
        $numberPage = $_GET['page'];
        return $numberPage;
    }else{
        $numberPage = 1;
        return $numberPage;
    }
}
function getLimitElement(){

    if(isset($_GET['limit'])){
        $limitImage = $_GET['limit'];
        return $limitImage;
    }else{
        $limitImage = 10;
        return $limitImage;
    }
}

<?php
include "assets/layout/header.php";
require_once('module/v2/lib/ajax.php');

?>

    <section class="container">
        <h1>
            Задача 5
        </h1>
        <div class="row">
            <div class="form-control justify-content-center">
            <input id="inputForEnt" class="input-group-text m-auto">
            <button id="btnSearchTask" class="btn btn-success m-auto">Поиск задач</button>
            <h5 id="usrid">ID пользователя:</h5>
            <ul id="ulForList">

            </ul>
            </div>
        </div>
    </section>
    <section class="container">
        <h1>Задача 6</h1>
        <form id="puggForm" method="post">
            <div class="form-control justify-content-center">
                <h2 class="form-label m-auto">Номер страницы</h2>
                <input class="input-group-text m-auto" id="numberPage" value="">
                <h2 class="form-label m-auto">Лимит</h2>
                <input class="input-group-text m-auto" id="limitElement" value="">
                <button id="filterBtn" class="btn btn-success m-auto" type="submit">Отобразить</button>

            </div>
        </form>
        <div class="row"><p id = "messageError"></p></div>
        <div class="gallery">
            <div class="row">
                <h2>
                    Галерея
                </h2>
            </div>
            <div class="elementGallery">
                <? $arrRes = getImageList();
                $arr = [];
                $ind = 1;
                foreach ($arrRes as $item => $value) {
                    $arr[$ind] = $value;
                    $ind++;
                }
                $numberPage = getNumberPage();
                for ($index = 0; $index < getLimitElement(); $index++) {
                    $indRes = $numberPage + $index;
                    if (isset($arr["$indRes"])) {
                        ?>
                        <img src="..\assets\image\<? echo $arr["$indRes"]; ?>" class="w-25">
                        <?
                    }else{
                        break;
                    }
                } ?>
            </div>
        </div>
    </section>
<?php
include "assets/layout/footer.php";
?>
<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$back = $_SERVER['HTTP_REFERER'];

if ((isset($_POST['name'])) && (isset($_POST['phone'])) && (isset($_POST['message']))) {
//    Если в $_POST отправлены поля name, phone и message:

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    $formActive = 2;
    if (($name=='') || ($phone=='') || ($message=='')) {
        echo "<meta http-equiv=\"refresh\" content='0; url=$back'>";
        exit();
    }
    // Формирование самого письма
    $title = "Новое обращение Best Tour Plan";
    $body = "
    <h2>Новое обращение</h2>
    <b>Имя:</b> $name<br>
    <b>Телефон:</b> $phone<br><br>
    <b>Сообщение:</b><br>$message
    ";
}
else if ((isset($_POST['email']))) {
//    В $_POST пришёл email на подписку
    $email = $_POST['email'];
    if ($email=='') {
        echo "<meta http-equiv=\"refresh\" content='0; url=$back'>";
        exit();
    }
    $formActive = 1;
    $title = "Подписка";
    $body = "
    <h2>Проверка в  виде подписки оформлена!</h2>
    <br>Ваш e-mail был добавлен в базу рассыло, (нет). Если это были не вы,
    пожалуйста, <a href=$back"."unsubscribe.html>кликните сюда.</a>
    ";
} else {
    die("Все входные данные пусты. Скрипт завершается.");
}
// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'skvoruha3@gmail.com '; // Логин на почте
    $mail->Password   = 'grisha2016'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('skvoruha3@gmail.com', 'Tour Plan'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('skvoruha-3@mail.ru');
    $mail->addAddress($email);

    // Прикрипление файлов к письму

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

// Проверяем отравленность сообщения
if ($mail->send()) {
        if ($formActive == 1 ) {
            header('Location: ../onsubscribe.html');
        } else {
            header('Location: ../thankyou.html');
        }
    } else {
        $result = "error";
        $status = "Сообщение не было отправлено.";
		echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo} <br>";
    }

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// // Отображение результата
// header('Location: thankyou.html');
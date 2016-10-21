<?php

require_once 'common.inc.php';

$smarty->prependTemplateDir(__DIR__ . '/templates');
$smarty->assign([
    'isGoogle' => preg_match('/google\.com.*ServiceLogin/', $_REQUEST['url'])
]);
$smarty->display('warning.tpl');

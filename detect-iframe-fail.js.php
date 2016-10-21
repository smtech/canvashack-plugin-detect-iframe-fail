<?php

require_once 'common.inc.php';

 ?>
/*globals $ */
var canvashack = {
    checkIframes: function () {
        "use strict";
        $('iframe:not([src*="instructure"])').each(function (i, elt) {
            $.post(
                '<?= $pluginMetadata['PLUGIN_URL'] ?>',
                {
                    url: $(elt).attr('src')
                },
                function (response) {
                    if (response.error) {
                        $(elt).attr('src', '<?= $pluginMetadata['PLUGIN_URL'] ?>/warning.php?url=' + $(elt).attr(src));
                    }
                },
                'json'
            );
        });
    }
};

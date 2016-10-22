var canvashack = {
    checkIframes: function () {
        "use strict";
        var
            frames = $('div[role="main"] .user_content iframe:not([src*="instructure"]):not([id*="instructure"])'),
            googleTest = /google\.com/;
        if (frames.size() > 0) {
            frames.wrap('<div class="canary" style="position: relative;"/>');
            $('.canary').each(function (i, elt) {
                var
                    canary = $(elt),
                    frame = $(elt).find('iframe');
                canary.width(frame.width());
                canary.height(frame.height());
                frame.css('position', 'absolute').css('top', 0).css('left', 0).width('100%').height('100%');
                canary.append('<p>Warning: IFRAME embed failed!</p>');
                if (googleTest.test(frame.attr('src'))) {
                    canary.append('<p>If you see nothing here, it&rsquo;s because you need to log in to Google. Open your Gmail in another tab, log in and then refresh this page.</p>');
                }
            });
        }
    }
};

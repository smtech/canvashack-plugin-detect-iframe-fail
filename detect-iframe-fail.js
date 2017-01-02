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
                canary.append('<h3>An embedded IFRAME is loading&hellip;</h3>');
                if (googleTest.test(frame.attr('src'))) {
                    canary.append('<p>If you still see this message after a reasonable period of time (3-5 seconds), it&rsquo;s because you need to log in to Google. <strong>Open your Gmail in another tab, log in and then refresh this page.<strong></p>');
                } else {
                    canary.append('<p>If you still see this message after a reasonable period of time (3-5 seconds), something has probably gone wrong. <strong>Click the Help link at the bottom left of the screen and report a problem!</strong></p>');
                }
            });
        }
    }
};

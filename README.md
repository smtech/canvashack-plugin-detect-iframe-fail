# Detect IFRAME Fail

Rather than allowing embedded iframes to fail invisibly, provide helpful guidance

This is accomplished by using a JavaScript snippet to tuck a "canary" message _behind_ the IFRAME as it loads. If the IFRAME fails to load, the message will be visible. If the IFRAME _does_ load, the message disappears.

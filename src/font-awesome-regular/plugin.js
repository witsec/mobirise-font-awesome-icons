defineM("witsec-font-awesome-icons", function(g, mbrApp, TR) {
    mbrApp.registerPlugin("witsec-font-awesome-icons", {
        name: "font-awesome-regular",
        condition: !1,
        priority: 100,
        iconfont: {
            family: "FontAwesomeRegular",
            title: "Font Awesome Regular 6.4.2",
            prefix: "far fa-",
            class: "",
            names: "address-book address-card bell bell-slash bookmark building calendar calendar-check calendar-days calendar-minus calendar-plus calendar-xmark chart-bar chess-bishop chess-king chess-knight chess-pawn chess-queen chess-rook circle circle-check circle-dot circle-down circle-left circle-pause circle-play circle-question circle-right circle-stop circle-up circle-user circle-xmark clipboard clock clone closed-captioning comment comment-dots comments compass copy copyright credit-card envelope envelope-open eye eye-slash face-angry face-dizzy face-flushed face-frown face-frown-open face-grimace face-grin face-grin-beam face-grin-beam-sweat face-grin-hearts face-grin-squint face-grin-squint-tears face-grin-stars face-grin-tears face-grin-tongue face-grin-tongue-squint face-grin-tongue-wink face-grin-wide face-grin-wink face-kiss face-kiss-beam face-kiss-wink-heart face-laugh face-laugh-beam face-laugh-squint face-laugh-wink face-meh face-meh-blank face-rolling-eyes face-sad-cry face-sad-tear face-smile face-smile-beam face-smile-wink face-surprise face-tired file file-audio file-code file-excel file-image file-lines file-pdf file-powerpoint file-video file-word file-zipper flag floppy-disk folder folder-closed folder-open font-awesome futbol gem hand hand-back-fist hand-lizard hand-peace hand-point-down hand-point-left hand-point-right hand-point-up hand-pointer hand-scissors hand-spock handshake hard-drive heart hospital hourglass hourglass-half id-badge id-card image images keyboard lemon life-ring lightbulb map message money-bill-1 moon newspaper note-sticky object-group object-ungroup paper-plane paste pen-to-square rectangle-list rectangle-xmark registered share-from-square snowflake square square-caret-down square-caret-left square-caret-right square-caret-up square-check square-full square-minus square-plus star star-half star-half-stroke sun thumbs-down thumbs-up trash-can user window-maximize window-minimize window-restore".split(" ")
        },
        files: "../css/fontawesome.min.css css/regular.min.css fonts/fa-regular-400.ttf fonts/fa-regular-400.woff2".split(" ")
    });
}, ["jQuery", "mbrApp", "TR()"]);
$(document).ready(function() {
        $('#fullpage').fullpage({

            anchors: ['home', 'about', '3rdPage', '4thpage', 'lastPage'],
            menu: '#menu',
            css3: true,
            scrollingSpeed: 1000,
            fadingEffect: true,
            touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        //Accessibility
          keyboardScrolling: true,
          animateAnchor: true,
          recordHistory: false,

          //Design
        controlArrows:false,
        verticalCentered: false,

        paddingTop: '0em',
        paddingBottom: '0px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: true,

        //Custom selectors
        sectionSelector: '.slide',
        slideSelector: '.section',


        });


    });

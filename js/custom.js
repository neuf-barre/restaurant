function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

(function ($) {
    // Instantiate MixItUp:
    $('#Container').mixItUp();

    // Add smooth scrolling to all links in navbar + footer link
    $(".sidenav a").on('click', function(event) {
        event.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function(){
            window.location.hash = hash;
        });
    });

    $("#launchGallery").on('click', function(event) {
    
        var pswpElement = document.querySelectorAll('.pswp')[0];

        // build items array
        // var items = $scope.selectedImages;
        var items = [
            {
                src: 'img/gallery/11265242_1732421870304282_29177500_n.jpg', w: 640, h: 640
            },
            {
                src: 'img/gallery/12479077_764894183610439_737869499_n.jpg', w: 640, h: 640
            },
            {
                src: 'img/gallery/12530946_1529786167326732_765592488_n.jpg', w: 640, h: 640
            },
            {
                src: 'img/gallery/12724897_951752338271740_524330489_n.jpg', w: 640, h: 640
            },
            {
                src: 'img/gallery/12912323_1721979441419430_1955389715_n.jpg', w: 640, h: 640
            },
            {
                src: 'img/gallery/12912706_1701696926752188_1376579447_n.jpg', w: 640, h: 640
            },
            {
                src: 'img/gallery/12912816_1105649466124287_1233207857_n.jpg', w: 640, h: 640
            },
            {
                src: 'img/gallery/12930811_254525464892366_1200570876_n.jpg', w: 640, h: 640
            },
            {
                src: 'img/gallery/12940247_1705487156342931_153848000_n.jpg', w: 640, h: 640
            },
            {
                src: 'img/gallery/12976324_1763210777243416_1214667435_n.jpg', w: 640, h: 640
            },
            {
                src: 'img/gallery/13092264_1558612881105245_1288121049_n.jpg', w: 640, h: 640
            },
            {
                src: 'img/gallery/13099064_1543372332633473_749677364_n.jpg', w: 640, h: 640
            },  
            {
                src: 'img/gallery/13129296_771005843036043_744544568_n.jpg', w: 640, h: 640
            },
            {
                src: 'img/gallery/13167190_1676244612638940_756741581_n.jpg', w: 640, h: 640
            },
            {
                src: 'img/gallery/13256695_1781905765354157_1630674545_n.jpg', w: 640, h: 640
            },
            {
                src: 'img/gallery/13266662_1740552796168681_471868599_n.jpg', w: 640, h: 640
            },
            {
                src: 'img/gallery/13269307_1715124778762320_2131008972_n.jpg', w: 640, h: 640
            },
            {
                src: 'img/gallery/13285504_1688222451429986_411797677_n.jpg', w: 640, h: 640
            },
            {
                src: 'img/gallery/13381030_1576461992652762_125296401_n.jpg', w: 640, h: 640
            },
            {
                src: 'img/gallery/13394970_1055192324551482_816380121_n.jpg', w: 640, h: 640
            },
            {
                src: 'img/gallery/13397451_1554302634873538_748494479_n.jpg', w: 640, h: 640
            },
            {
                src: 'img/gallery/13402391_603903203102690_1944581720_n.jpg', w: 640, h: 640
            }
        ];

        // define options (if needed)
        var options = {
            // optionName: 'option value'
            // for example:
            index: 0, // start at first slide
            // modal: false
        };

        // Initializes and opens PhotoSwipe
        var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
      
     });
})(jQuery);
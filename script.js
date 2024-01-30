document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  $(document).ready(function() {
    $('.zoom-container').mousemove(function(e) {
        var imgWidth = $(this).width();
        var imgHeight = $(this).height();
        var offsetX = e.clientX - $(this).offset().left;
        var offsetY = e.clientY - $(this).offset().top;
        var zoomSize = 15;
        var zoomX = (offsetX / imgWidth) * 120 - zoomSize / 2;
        var zoomY = (offsetY / imgHeight) * 113 - zoomSize / 2;

        if (zoomX < 0) {
            zoomX = 0;
        } else if (zoomX > 100 - zoomSize) {
            zoomX = 100 - zoomSize;
        }

        if (zoomY < 0) {
            zoomY = 0;
        } else if (zoomY > 200 - zoomSize) {
            zoomY = 200 - zoomSize;
        }

        $('.zoom-box').css({
            left: e.pageX + 10,
            top: e.pageY + 10,
            backgroundImage: 'url(' + $(this).attr('src') + ')',
            backgroundPosition: zoomX + '% ' + zoomY + '%',
            backgroundSize: imgWidth * (100 / zoomSize) + 'px ' + imgHeight * (100 / zoomSize) + 'px',
            display: 'block'
        });
    });

    $('.zoom-container').mouseleave(function() {
        $('.zoom-box').css('display', 'none');
    });
});
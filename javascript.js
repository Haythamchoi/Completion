
  $(window).on("scroll", function() {
    if$(window).scrollTop() {
      $('nav').addClass('black');
    }
    else {
      $('nav').removeClass('black');
    }
  });


  <script>
      train.onclick = function() {
        let start = Date.now();

        let timer = setInterval(function() {
          let timePassed = Date.now() - start;

          train.style.left = timePassed / 5 + 'px';

          if (timePassed > 2000) clearInterval(timer);

        }, 20);
      }
    </script>

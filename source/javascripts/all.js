// This is where it all goes :)
(function (document) {
  console.log('woo');
  function ready(callback){
    // in case the document is already rendered
    if (document.readyState!='loading') callback();
    // modern browsers
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    // IE <= 8
    else document.attachEvent('onreadystatechange', function(){
        if (document.readyState=='complete') callback();
    });
  }

  ready(() => {
    $('form#interest').submit((e) => {
      e.preventDefault();

      const $email = $('.email-input');
      const $button = $('.submit-button');
      $.ajax({
        type: 'POST',
        url: 'https://demuxed-europe-serverless-philcluff.demuxed.now.sh/api/add-email',
        data: JSON.stringify({ email: $email.val() }),
        dataType: 'json',
        success: (data) => {
          $email.attr('disabled', true);
          $button.attr('disabled', true);
          $button.val("We'll be in touch!");
        },
        failure: console.log,
      });
    });
  });

})(document);

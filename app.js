let grade = $('.js-grades span');

let counter = 0;

grade.each(function(){
  counter++;
  $(this).attr('data-position', counter);
});

grade.click(function(){
  let position = $(this).attr('data-position');
  
  for (let i = 1; i <= counter; i++) {
    
    if (i <= position) {
      $('.js-grades span[data-position="' + i + '"]').addClass('icon-filled');
    }
    else {
      $('.js-grades span[data-position="' + i + '"]').removeClass('icon-filled');
    }
  }

});
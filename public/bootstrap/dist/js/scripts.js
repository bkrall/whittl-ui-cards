// Toggle price menu on click
$(".toggle:eq(0)").click(function() {
    $('.mini-price-menu:eq(0)').slideToggle();
});

$(".toggle:eq(1)").click(function() {
    $('.mini-price-menu:eq(1)').slideToggle();
});

$(".toggle:eq(2)").click(function() {
    $('.mini-price-menu:eq(2)').slideToggle();
});

// Hide undefined menuItem name :/
$('.mini-price-menu .menu-item:eq(3)').hide();


// Find a string and wrap a tag around it
// http://stackoverflow.com/a/9795091/158837
$.fn.wrapInTag = function(opts) {
  
  var tag = opts.tag || 'strong',
      words = opts.words || [],
      regex = RegExp(words.join('|'), 'gi'),
      replacement = '<'+ tag +'>$&</'+ tag +'>';
  
  return this.html(function() {
    return $(this).text().replace(regex, replacement);
  });
};

$('.text-match').wrapInTag({
  tag: 'strong',
  words: ['Haircut', 'Facial']
});
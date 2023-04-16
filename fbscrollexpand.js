javascript:(function() {
  var counter = 0;

  function expandCommentsAndReplies() {
    var clickables = Array.from(document.querySelectorAll('[aria-label="View more comments"], [aria-label="View more replies"], [aria-label="See hidden replies"]'));

    for (var i = 0; i < clickables.length; i++) {
      clickables[i].click();
    }
  }

  function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  function autoExpandAndScroll() {
    if (counter < 5) {
      expandCommentsAndReplies();
      scrollToBottom();
      counter++;
      setTimeout(autoExpandAndScroll, 1000);
    }
  }

  autoExpandAndScroll();
})();

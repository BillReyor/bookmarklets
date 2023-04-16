javascript:(function() {
  var isPaused = false;
  var shouldStop = false;

  function preventAutoReload() {
    window.onbeforeunload = function() {
      return "Are you sure you want to leave?";
    };
  }

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
    if (!shouldStop) {
      if (!isPaused) {
        expandCommentsAndReplies();
        scrollToBottom();
      }
      setTimeout(autoExpandAndScroll, 1000);
    }
  }

  function handleKeyPress(e) {
    if (e.key === 'p') {
      isPaused = !isPaused;
    } else if (e.key === 'r') {
      isPaused = false;
    } else if (e.key === 's') {
      shouldStop = true;
    }
  }

  window.addEventListener('keypress', handleKeyPress);
  preventAutoReload();
  autoExpandAndScroll();
})();

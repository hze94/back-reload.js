// support ios safari5.1+, android2.3+
(function () {
  window.addEventListener("pageshow", function (event) {
    var historyTraversal = event.persisted || (typeof window.performance != "undefined" && window.performance.navigation.type === 2);
    if (historyTraversal) {
      window.location.reload();
    }
  });
})()
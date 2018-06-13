
function recursor() {
  //Change hash of current URL
  window.location.hash = Math.random() + "" + Math.random() + "" + Math.random();
  //Recurse on hash changes
  window.addEventListener('hashchange', function() {
    recursor();
  });
}

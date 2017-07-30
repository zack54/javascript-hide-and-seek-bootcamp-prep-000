function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget() {
  return document.querySelector('#nested .target');
}
function increaseRankBy(n) {
  // get to list of nodes with '.ranked-list' class name.
  let rankedList = document.querySelectorAll('.ranked-list');
  for (let i=0; i<rankedList.length; i++) {
    // get to list of children nodes of each.
    let list = rankedList[i].children
    for (let j=0; j<list.length; j++){
      list[j].innerHTML = parseInt(list[j].innerHTML) + n ;
    }
  }
}
function deepestChild() {
  let grandNode = document.querySelector('div#grand-node');
  let child = grandNode.firstElementChild;
  while (child.firstElementChild) {
    child = child.firstElementChild;
  }
  return child;
}

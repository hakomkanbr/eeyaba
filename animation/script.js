const section1Ref = document.getElementById("section1");
const layerRefs = document.querySelectorAll(".layer");

const etalonTop = section1Ref.getBoundingClientRect().top;
const etalonBottom = section1Ref.getBoundingClientRect().bottom;
const etalonHeight = section1Ref.offsetHeight;
const etalonDistance = etalonTop + etalonHeight;

let currentIndex = 0;
let currentRef = layerRefs[currentIndex];
currentRef.style.marginTop = etalonHeight + "px";

let currentPos = window.scrollY;

function toggleStickyBehavior() {
  let scrollPosition = window.scrollY;

  let isScrollUp = currentPos > scrollPosition;

  function getDownDistance() {
    return (
      etalonBottom * (currentIndex + 1) -
      etalonTop * (currentIndex + 1) +
      etalonTop
    );
  }

  function getUpDistance() {
    return (
      etalonBottom * currentIndex + etalonTop * (currentIndex + 1) - etalonTop
    );
  }

  if (!isScrollUp && scrollPosition >= getDownDistance()) {
    currentRef.style.marginTop = 0;

    if (!currentRef.classList.contains("fixed") && currentIndex < 4) {
      currentRef.classList.add("fixed");

      currentIndex += 1;
      currentRef = layerRefs[currentIndex];
    }
    currentRef.style.marginTop = getDownDistance() + "px";
  }

  if (isScrollUp && getUpDistance() > scrollPosition && currentIndex > 0) {
    currentRef.style.marginTop = 0;
    currentIndex -= 1;
    currentRef = layerRefs[currentIndex];
    if (currentRef.classList.contains("fixed")) {
      currentRef.classList.remove("fixed");
    }

    if (currentIndex < 1) {
      currentRef.style.marginTop =
        getUpDistance() + etalonBottom - etalonTop + "px";
    } else {
      currentRef.style.marginTop = getUpDistance() + etalonBottom + "px";
    }
  }

  currentPos = window.scrollY;
}

window.addEventListener("scroll", toggleStickyBehavior);
toggleStickyBehavior();
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

function www() {


  const layers = document.querySelectorAll(".layer");
  const fixedLayer = document.querySelector(".fixed"); // العنصر الثابت
  let currentIndex = 0;
  let isScrolling = false;

  // دالة للانتقال إلى العنصر المحدد
  function scrollToLayer(index) {
    if (index < 0 || index >= layers.length) return;

    isScrolling = true;
    const offset = layers[index].offsetTop - fixedLayer.offsetHeight; // احتساب المسافة مع العنصر الثابت
    window.scrollTo({ top: offset, behavior: "smooth" });

    setTimeout(() => {
      currentIndex = index;
      isScrolling = false;
    }, 600); // مدة التأثير
  }

  // التعامل مع التمرير
  function handleScroll(event) {
    if (isScrolling) return;

    if (event.deltaY > 0) {
      // التمرير للأسفل
      scrollToLayer(currentIndex + 1);
    } else if (event.deltaY < 0) {
      // التمرير للأعلى
      scrollToLayer(currentIndex - 1);
    }
  }

  // إضافة حدث التمرير بالماوس
  window.addEventListener("wheel", handleScroll);

}

window.addEventListener("scroll", toggleStickyBehavior);
toggleStickyBehavior();
www();

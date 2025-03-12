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

const layers = document.querySelectorAll(".layer");
const fixedLayer = document.querySelector(".fixed"); // العنصر الثابت
let isScrolling = false;

// دالة للانتقال إلى العنصر المحدد
function scrollToLayer(index) {
  if (index < 0 || index >= layers.length) return;
  console.info(index);
  isScrolling = true;
  const offset = layers[index].offsetTop - fixedLayer.offsetHeight; // احتساب المسافة مع العنصر الثابت
  window.scrollTo({ top: offset, behavior: "smooth" });
  window.localStorage.setItem("index" , currentIndex);
  setTimeout(() => {
    currentIndex = index;
    isScrolling = false;
  }, 100); // مدة التأثير
}

// التعامل مع التمرير
function handleScroll(event) {
  if (isScrolling) return;
  if (event.deltaY > 0) {
    // التمرير للأسفل
    scrollToLayer(currentIndex + 1);
  } else if (event.deltaY < 0) {
    // // التمرير للأعلى
    scrollToLayer(currentIndex - 1);
  }
}

// إضافة حدث التمرير بالماوس
window.addEventListener("wheel", handleScroll);


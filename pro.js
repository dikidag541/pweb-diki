function showDetails(genre) {
    let details = {
        rock: "Rock adalah genre musik yang berkembang pada tahun 1950-an dengan ciri khas gitar listrik dan ritme yang kuat.",
        jazz: "Jazz adalah genre musik yang berasal dari komunitas Afrika-Amerika dengan improvisasi dan harmoni yang kompleks.",
        pop: "Pop adalah genre musik yang populer dengan melodi yang mudah diingat dan aransemen sederhana."
    };
    document.getElementById("detail-text").textContent = details[genre] || "Pilih genre untuk melihat detail.";
}

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Ganti slide setiap 3 detik
}

function plusSlides(n) {
    slideIndex += n - 1;
    showSlides();
}

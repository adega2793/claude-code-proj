// main.js — students will add JavaScript here as features are built

(function () {
    const openBtn = document.getElementById("how-it-works-btn");
    const modal = document.getElementById("how-it-works-modal");
    if (!openBtn || !modal) return;

    const closeBtn = document.getElementById("how-it-works-close");
    const iframe = document.getElementById("how-it-works-iframe");
    const videoSrc = iframe.dataset.src;

    function openModal() {
        iframe.src = videoSrc + "?autoplay=1";
        modal.hidden = false;
    }

    function closeModal() {
        modal.hidden = true;
        iframe.src = "";
    }

    openBtn.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", function (event) {
        if (event.target === modal) closeModal();
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && !modal.hidden) closeModal();
    });
})();

const formKontak = document.getElementById("formKontak");
const pesanBerhasil = document.getElementById("pesanBerhasil");

formKontak.addEventListener("submit", function (event) {
    event.preventDefault();

    if (formKontak.checkValidity()) {
        pesanBerhasil.classList.remove("d-none");
        formKontak.reset();
        formKontak.classList.remove("was-validated");
    } else {
        pesanBerhasil.classList.add("d-none");
        formKontak.classList.add("was-validated");
    }
});

formKontak.addEventListener("reset", function () {
    formKontak.classList.remove("was-validated");
});

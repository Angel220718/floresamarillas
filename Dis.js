document.getElementById("BVer").addEventListener('click', function() {
    document.getElementById("resultado").style.display = "block";
});

document.getElementById("BotonCerrar").addEventListener('click', function() {
    document.getElementById("resultado").style.display = "none";
    document.getElementById("contenedorFlor").style.display = "flex";
    document.getElementById("BVer").style.display = "none";
    document.getElementById("BotonCerrar").style.display = "none";
    document.querySelector('.Con-Emergente').style.display = "none";
});

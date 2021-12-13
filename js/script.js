const treeTriangles = document.querySelectorAll(".tree path");
const baubles = document.querySelectorAll(".baubles")
let selectedBauble = "";


treeTriangles.forEach(function (item) {
    item.onclick = function (event) {
        if (!selectedBauble) {
            alert("Woopsi. Husk å velge en kule.")
            return;
        }
        const decoration = document.createElement("img");
        decoration.src = `images/bauble${selectedBauble}.png`;
        decoration.alt = "Christmas Bauble"
        decoration.className = "decoration";
        decoration.style.left = `${event.pageX}px`;
        decoration.style.top = `${event.pageY}px`;

        document.body.appendChild(decoration);
    }
})

baubles.forEach(function (bauble) {
    bauble.onclick = function (event) {
        selectedBauble = event.target.dataset.bauble;
    }
})
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });
}

const searchProduct = document.getElementById("searchProduct");
const categoryFilter = document.getElementById("categoryFilter");
const productGrid = document.getElementById("productGrid");

if (searchProduct && categoryFilter && productGrid) {
    const filterProducts = () => {
        const query = searchProduct.value.toLowerCase();
        const cat = categoryFilter.value;
        productGrid.querySelectorAll(".product-card").forEach((card) => {
            const text = card.textContent.toLowerCase();
            const cardCat = card.getAttribute("data-category");
            const okText = text.includes(query);
            const okCat = cat === "todas" || cardCat === cat;
            card.style.display = okText && okCat ? "" : "none";
        });
    };
    searchProduct.addEventListener("input", filterProducts);
    categoryFilter.addEventListener("change", filterProducts);
}

const rangeBtns = document.querySelectorAll(".range-btn");
const chartLine = document.getElementById("chartLine");
const rangeLabel = document.getElementById("rangeLabel");

if (rangeBtns.length && chartLine && rangeLabel) {
    const series = {
        "30d": {
            points: "40,140 140,120 240,130 340,95 440,80 540,65",
            label: "Últimos 30 días · Mínimo: $189.00"
        },
        "90d": {
            points: "40,55 140,70 240,110 340,100 440,85 540,65",
            label: "Últimos 90 días · Mínimo: $189.00"
        },
        "todo": {
            points: "40,40 140,85 240,60 340,120 440,95 540,65",
            label: "Histórico completo · Mínimo: $179.00"
        }
    };

    rangeBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const key = btn.getAttribute("data-range");
            chartLine.setAttribute("points", series[key].points);
            rangeLabel.textContent = series[key].label;
        });
    });
}

const alertForm = document.getElementById("alertForm");
const alertBody = document.getElementById("alertBody");

if (alertForm && alertBody) {
    alertForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const prod = document.getElementById("alertProduct").value.trim();
        const target = Number(document.getElementById("alertTarget").value);
        if (!prod || !target) return;

        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${prod}</td>
      <td>$${(target + 25).toFixed(2)}</td>
      <td>$${target.toFixed(2)}</td>
      <td><span class="badge badge-warn">Monitoreando</span></td>
    `;
        alertBody.prepend(row);
        alertForm.reset();
    });
}
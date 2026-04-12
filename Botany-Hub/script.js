const plantsData = [
            {
                name: "Aloe Vera",
                category: "medicinal",
                image: "Aloevera.webp",
                uses: "Skin healing, digestion aid, wound treatment",
                pros: ["Natural moisturizer", "Anti-inflammatory", "Easy to grow"],
                cons: ["Laxative effect if ingested", "Not for pregnant women", "Skin irritation possible"],
                dangerous: false
            },
            {
                name: "Basil",
                category: "cooking",
                image: "Basil.jpg",
                uses: "Italian cuisine, pesto, herbal tea",
                pros: ["Antioxidant rich", "Improves digestion", "Anti-bacterial"],
                cons: ["Can attract pests", "Sensitive to cold", "Overuse may cause nausea"],
                dangerous: false
            },
            {
                name: "Foxglove",
                category: "dangerous",
                image: "Foxglove.jpg",
                uses: "Digitalis for heart medicine (medical use only)",
                pros: ["Heart medication source", "Attracts pollinators"],
                cons: ["Highly toxic", "Can cause heart failure", "Fatal if ingested"],
                dangerous: true
            },
            {
                name: "Turmeric",
                category: "medicinal",
                image: "Turmeric.jpg",
                uses: "Anti-inflammatory, joint pain, cooking spice",
                pros: ["Powerful antioxidant", "Liver protection", "Anti-cancer properties"],
                cons: ["May thin blood", "Stains everything yellow", "High doses upset stomach"],
                dangerous: false
            },
            {
                name: "Rosemary",
                category: "cooking",
                image: "Rosemary.jpg",
                uses: "Roast meats, bread, memory enhancement",
                pros: ["Improves memory", "Antioxidant", "Anti-microbial"],
                cons: ["Pregnancy risk in large amounts", "May cause allergic reactions"],
                dangerous: false
            },
            {
                name: "Oleander",
                category: "dangerous",
                image: "Oleander.jpg",
                uses: "Ornamental plant only",
                pros: ["Beautiful flowers", "Drought tolerant"],
                cons: ["EXTREMELY TOXIC", "All parts poisonous", "Can be fatal to children/pets"],
                dangerous: true
            },
            {
                name: "Ginger",
                category: "medicinal",
                image: "Ginger.webp",
                uses: "Nausea relief, digestion, tea",
                pros: ["Anti-nausea", "Anti-inflammatory", "Immune booster"],
                cons: ["May cause heartburn", "Blood thinning effect", "Not for gallstone patients"],
                dangerous: false
            },
            {
                name: "Mint",
                category: "cooking",
                image: "Mint.jpg",
                uses: "Tea, desserts, cocktails, digestion",
                pros: ["Soothes stomach", "Freshens breath", "Invasive growth (easy spread)"],
                cons: ["Can be invasive", "May cause heartburn"],
                dangerous: false
            },
            {
                name: "Neem",
                category: "medicinal",
                image: "Neem.webp",
                uses: "Medicines, skincare, pest control",
                pros: ["Powerful antibacterial", "Boosts immunity", "Good for skin"],
                cons: ["Very bitter taste", "Excess use can be harmful", "Not safe in large doses"],
                dangerous: false
            },
            {
                name: "Banyan",
                category: "tree",
                image: "Banyan.webp",
                uses: "Shade, traditional medicine, religious significance",
                pros: ["Provides large shade", "Long lifespan", "Supports ecosystem"],
                cons: ["Requires large space", "Roots can damage structures", "Slow growth"],
                dangerous: false
            },
            {
                name: "Peepal",
                category: "tree",
                image: "Peepal.webp",
                uses: "Religious purposes, oxygen production, medicine",
                pros: ["Releases oxygen for long hours", "Medicinal value", "Sacred importance"],
                cons: ["Roots damage buildings", "Needs space", "Not suitable for small areas"],
                dangerous: false
            },
            {
                name: "Mango",
                category: "tree",
                image: "Mango.avif",
                uses: "Fruit consumption, juices, pickles",
                pros: ["Rich in vitamins", "Delicious fruit", "Good for immunity"],
                cons: ["Seasonal fruit", "Can cause heat in body", "Sticky sap"],
                dangerous: false
            },
            {
                name: "Coconut",
                category: "tree",
                image: "Coconut.jpg",
                uses: "Food, oil, water, religious rituals",
                pros: ["Highly nutritious", "Multiple uses", "Hydrating"],
                cons: ["Hard outer shell", "Requires tropical climate", "Tall tree risk"],
                dangerous: false
            },
            {
                name: "Bamboo",
                category: "grass",
                image: "Bamboo.webp",
                uses: "Construction, furniture, paper",
                pros: ["Fast growing", "Eco-friendly", "Strong material"],
                cons: ["Spreads rapidly", "Needs control", "Can dominate land"],
                dangerous: false
            },
            {
                name: "Lotus",
                category: "tree",
                image: "Lotus.jpg",
                uses: "Decoration, food, religious rituals",
                pros: ["Beautiful flower", "Edible parts", "Cultural significance"],
                cons: ["Needs water body", "Short lifespan of bloom", "Requires maintenance"],
                dangerous: false
            },
            {
                name: "Banana",
                category: "tree",
                image: "Banana.webp",
                uses: "Fruit, cooking, leaves for serving food",
                pros: ["Energy-rich", "Easy to digest", "Widely available"],
                cons: ["Perishable", "Attracts insects", "Needs water"],
                dangerous: false
            }
        ];
const grid = document.getElementById('plantsGrid');

function createPlantCard(plant) {
    const card = document.createElement('div');
    card.className = 'plant-card';

    const categoryClass = plant.category;

    card.innerHTML = `
    <img src="Image/${plant.image}" class="plant-image">

    <div class="plant-header">
        <h3 class="plant-name">${plant.name}</h3>
            <div class="plant-actions">
                <span class="plant-category ${categoryClass}">
                    ${plant.category.toUpperCase()}
                </span>
            </div>
    </div>
`;
    return card;
}

function renderPlants(plants) {
    grid.innerHTML = '';

    if (plants.length === 0) {
        grid.innerHTML = `<div class="no-results">No plants found</div>`;
        return;
    }

    plants.forEach(p => grid.appendChild(createPlantCard(p)));
}
function filterPlants(category) {
    if (category === 'all') {
        renderPlants(plantsData);
    } else {
        const filtered = plantsData.filter(p => p.category === category);
        renderPlants(filtered);
    }
}

// Initial load
renderPlants(plantsData);
localStorage.setItem("plantsData", JSON.stringify(plantsData));

// Search
document.getElementById('searchInput').addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    const categories = ['medicinal', 'cooking', 'dangerous', 'tree', 'grass'];

    let filtered;
    if (categories.includes(q)) {
        filtered = plantsData.filter(p => p.category === q);
    } else {
        filtered = plantsData.filter(p =>
            p.name.toLowerCase().includes(q) ||
            p.uses.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q)
        );
    }

    renderPlants(filtered);
});

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// View Details Toggle
// Redirect to details page
// 🔥 MODAL LOGIC
const modal = document.getElementById("plantModal");
const modalDetails = document.getElementById("modalDetails");
const closeBtn = document.querySelector(".close-btn");

grid.addEventListener('click', (e) => {
    const card = e.target.closest('.plant-card');
    if (!card) return;

    const name = card.querySelector('.plant-name').innerText;
    const plant = plantsData.find(p => p.name === name);

    modalDetails.innerHTML = `
    <div class="details-card">

        <div class="details-header">
            <h2>${plant.name}</h2>
            <span class="plant-category ${plant.category}">
                ${plant.category.toUpperCase()}
            </span>
        </div>

        <p><strong>Uses:</strong> ${plant.uses}</p>

        <p><strong>Benefits:</strong></p>
        <ul>
            ${plant.pros.map(p => `<li>✅ ${p}</li>`).join('')}
        </ul>

        <p><strong>Drawbacks:</strong></p>
        <ul>
            ${plant.cons.map(c => `<li>❌ ${c}</li>`).join('')}
        </ul>

        ${plant.dangerous ? `<p style="color:red; margin-top:10px;">⚠️ Highly Toxic!</p>` : ''}

    </div>
`;

    modal.classList.add("show");
});

// Close button
closeBtn.onclick = () => modal.classList.remove("show");

// Outside click close
window.onclick = (e) => {
    if (e.target === modal) {
        modal.classList.remove("show");
    }
};
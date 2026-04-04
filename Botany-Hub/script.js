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
            }
        ];

        function createPlantCard(plant) {
            const card = document.createElement('div');
            card.className = 'plant-card';
           
            const categoryClass = plant.category === 'medicinal' ? 'medicinal' :
                                plant.category === 'cooking' ? 'cooking' : 'dangerous';
           
            card.innerHTML = `
                <img src="${plant.image}" alt="${plant.name}" class="plant-image" loading="lazy">
                <div class="plant-header">
                    <h3 class="plant-name">${plant.name}</h3>
                    <span class="plant-category ${categoryClass}">${plant.category.toUpperCase()}</span>
                   
                    <div class="uses-section">
                        <div class="section-title">Uses</div>
                        <p>${plant.uses}</p>
                    </div>
                   
                    <div class="pros-cons">
                        <div class="section-title">Pros & Cons</div>
                        ${plant.pros.map(pro => `<div class="pro">✅ ${pro}</div>`).join('')}
                        ${plant.cons.map(con => `<div class="con">❌ ${con}</div>`).join('')}
                    </div>
                   
                    ${plant.dangerous ? `
                        <div class="danger-warning">
                            ⚠️ DANGER: Highly toxic! Do not ingest. Keep away from children and pets.
                        </div>
                    ` : ''}
                </div>
            `;
           
            return card;
        }

        function renderPlants(plants) {
            const grid = document.getElementById('plantsGrid');
            grid.innerHTML = '';

            if (plants.length === 0) {
                grid.innerHTML = '<div class="no-results">No plants found. Try another search!</div>';
                return;
            }

            plants.forEach(plant => {
                grid.appendChild(createPlantCard(plant));
            });
        }

        // Initialize
        renderPlants(plantsData);

        // Search functionality
        document.getElementById('searchInput').addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const filteredPlants = plantsData.filter(plant =>
                plant.name.toLowerCase().includes(query) ||
                plant.uses.toLowerCase().includes(query) ||
                plant.category.toLowerCase().includes(query) ||
                plant.pros.join(' ').toLowerCase().includes(query) ||
                plant.cons.join(' ').toLowerCase().includes(query)
            );
            renderPlants(filteredPlants);
        });
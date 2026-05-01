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
                category: "flower",
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
                category: "flower",
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
            },
{
    name: "Castor Bean",
    category: "plant",
    image: "CastorBean.jpg",
    uses: "Oil production",
    pros: ["Castor oil uses", "Fast growing", "Industrial value"],
    cons: ["Contains ricin poison", "Highly toxic seeds", "Fatal"],
    dangerous: true
},
{
    name: "Rosary Pea",
    category: "plant",
    image: "RosaryPea.webp",
    uses: "Jewelry (beads)",
    pros: ["Decorative seeds", "Hardy plant", "Traditional use"],
    cons: ["Contains abrin toxin", "Extremely poisonous", "Fatal if chewed"],
    dangerous: true
},
{
    name: "Hemlock",
    category: "plant",
    image: "Hemlock.jpg",
    uses: "None (toxic)",
    pros: ["Natural plant", "Historical significance", "Fast growing"],
    cons: ["Highly poisonous", "Paralyzes nervous system", "Fatal"],
    dangerous: true
},
{
    name: "Nightshade",
    category: "plant",
    image: "Nightshade.jpg",
    uses: "Medicinal (controlled)",
    pros: ["Medicinal alkaloids", "Historical use", "Hardy"],
    cons: ["Toxic berries", "Hallucinogenic", "Can be fatal"],
    dangerous: true
},
{
    name: "Angel's Trumpet",
    category: "flower",
    image: "AngelsTrumpet.jpg",
    uses: "Ornamental",
    pros: ["Large beautiful flowers", "Fragrant", "Decorative"],
    cons: ["Highly toxic", "Hallucinogenic", "Dangerous if ingested"],
    dangerous: true
},
{
    name: "Monkshood",
    category: "flower",
    image: "Monkshood.jpg",
    uses: "Historical medicine",
    pros: ["Striking appearance", "Cold resistant", "Rare"],
    cons: ["Extremely toxic", "Affects heart and nerves", "Fatal"],
    dangerous: true
},
{
    name: "Lantana",
    category: "flower",
    image: "Lantana.jpg",
    uses: "Ornamental",
    pros: ["Colorful flowers", "Low maintenance", "Fast spreading"],
    cons: ["Toxic to pets", "Invasive", "Harmful berries"],
    dangerous: true
},
{
    name: "Ashwagandha",
    category: "medicinal",
    image: "Ashwagandha.jpg",
    uses: "Stress relief, immunity booster, Ayurveda",
    pros: ["Reduces stress", "Improves strength", "Boosts immunity"],
    cons: ["May cause drowsiness", "Not for pregnant women", "Overuse harmful"],
    dangerous: false
},
{
    name: "Curry Leaves",
    category: "cooking",
    image: "CurryLeaves.gif",
    uses: "Cooking, seasoning, medicinal use",
    pros: ["Improves digestion", "Rich in nutrients", "Good for hair"],
    cons: ["Strong flavor", "Limited shelf life", "Attracts insects"],
    dangerous: false
},
{
    name: "Hibiscus",
    category: "flower",
    image: "Hibiscus.webp",
    uses: "Decoration, tea, hair care",
    pros: ["Beautiful flower", "Good for hair", "Rich in antioxidants"],
    cons: ["Needs sunlight", "Short bloom life", "Sensitive plant"],
    dangerous: false
},
{
    name: "Rose",
    category: "flower",
    image: "Rose.jpg",
    uses: "Decoration, perfumes, skincare",
    pros: ["Fragrant", "Aesthetic value", "Used in cosmetics"],
    cons: ["Thorns", "Needs care", "Prone to pests"],
    dangerous: false
},
{
    name: "Sunflower",
    category: "flower",
    image: "Sunflower.webp",
    uses: "Oil production, decoration, seeds",
    pros: ["Bright appearance", "Nutritious seeds", "Easy to grow"],
    cons: ["Needs sunlight", "Seasonal", "Large space required"],
    dangerous: false
},
{
    name: "Coriander",
    category: "cooking",
    image: "Coriander.webp",
    uses: "Cooking, garnish, spices",
    pros: ["Rich flavor", "Good for digestion", "Widely used"],
    cons: ["Short lifespan", "Needs frequent watering", "Sensitive plant"],
    dangerous: false
},
{
    name: "Spinach",
    category: "vegetable",
    image: "Spinach.webp",
    uses: "Cooking, salads",
    pros: ["Iron-rich", "Healthy", "Fast growing"],
    cons: ["Spoils fast", "Needs care", "Seasonal"],
    dangerous: false
},
{
    name: "Tomato",
    category: "vegetable",
    image: "Tomato.webp",
    uses: "Cooking, sauces, salads",
    pros: ["Rich in vitamins", "Versatile", "Easy to grow"],
    cons: ["Prone to pests", "Needs support", "Seasonal"],
    dangerous: false
},
{
    name: "Potato",
    category: "vegetable",
    image: "Potato.jpeg",
    uses: "Cooking, chips, snacks",
    pros: ["Energy-rich", "Widely used", "Easy storage"],
    cons: ["High carbs", "Can sprout", "Overconsumption unhealthy"],
    dangerous: false
},
{
    name: "Onion",
    category: "vegetable",
    image: "Onion.webp",
    uses: "Cooking, salads",
    pros: ["Enhances taste", "Medicinal value", "Long shelf life"],
    cons: ["Strong smell", "Causes tears", "Can spoil"],
    dangerous: false
},
{
    name: "Garlic",
    category: "cooking",
    image: "Garlic.avif",
    uses: "Cooking, medicine",
    pros: ["Boosts immunity", "Antibacterial", "Heart health"],
    cons: ["Strong odor", "Overuse causes acidity", "Taste not for all"],
    dangerous: false
},
{
    name: "Chili",
    category: "vegetable",
    image: "Chilli.webp",
    uses: "Cooking, spices",
    pros: ["Enhances flavor", "Boosts metabolism", "Widely used"],
    cons: ["Too spicy", "Irritates stomach", "Not for all"],
    dangerous: false
},
{
    name: "Brinjal",
    category: "vegetable",
    image: "Brinjal.webp",
    uses: "Cooking",
    pros: ["Low calories", "Rich in fiber", "Versatile"],
    cons: ["Bitter taste sometimes", "Prone to pests", "Not liked by all"],
    dangerous: false
},
{
    name: "Cabbage",
    category: "vegetable",
    image: "Cabbage.jpg",
    uses: "Cooking, salads",
    pros: ["Healthy", "Low calorie", "Easy to grow"],
    cons: ["Gas issues", "Needs cleaning", "Pest-prone"],
    dangerous: false
},
{
    name: "Cauliflower",
    category: "vegetable",
    image: "Cauliflower.jpg",
    uses: "Cooking",
    pros: ["Nutritious", "Low carb", "Versatile"],
    cons: ["Gas problems", "Seasonal", "Needs care"],
    dangerous: false
},
{
    name: "Carrot",
    category: "vegetable",
    image: "Carrot.jpg",
    uses: "Cooking, juice, salads",
    pros: ["Good for eyes", "Sweet taste", "Nutritious"],
    cons: ["Seasonal", "Needs soil care", "Overuse discoloration"],
    dangerous: false
},
{
    name: "Radish",
    category: "vegetable",
    image: "Radish.jpg",
    uses: "Cooking, salads",
    pros: ["Good for digestion", "Fast growing", "Healthy"],
    cons: ["Strong smell", "Gas issues", "Not liked by all"],
    dangerous: false
},
{
    name: "Pumpkin",
    category: "vegetable",
    image: "Pumpkin.jpg",
    uses: "Cooking, sweets",
    pros: ["Rich in vitamins", "Long shelf life", "Healthy"],
    cons: ["Large size", "Needs space", "Mild taste"],
    dangerous: false
},
{
    name: "Bottle Gourd",
    category: "vegetable",
    image: "BottleGourd.webp",
    uses: "Cooking, juice",
    pros: ["Good for health", "Hydrating", "Easy to digest"],
    cons: ["Bland taste", "Spoils quickly", "Needs care"],
    dangerous: false
},
{
    name: "Bitter Gourd",
    category: "vegetable",
    image: "BitterGourd.webp",
    uses: "Cooking, medicine",
    pros: ["Controls sugar", "Healthy", "Medicinal"],
    cons: ["Very bitter", "Not liked by all", "Requires cooking skill"],
    dangerous: false
},
{
    name: "Snake Plant",
    category: "indoor",
    image: "SnakePlant.webp",
    uses: "Air purification, decoration",
    pros: ["Low maintenance", "Improves air quality", "Hardy plant"],
    cons: ["Slow growth", "Toxic to pets", "Limited decorative variety"],
    dangerous: true
},
{
    name: "Money Plant",
    category: "indoor",
    image: "MoneyPlant.jpg",
    uses: "Decoration, air purification",
    pros: ["Easy to grow", "Low maintenance", "Aesthetic"],
    cons: ["Needs trimming", "Can overgrow", "Toxic if eaten"],
    dangerous: true
},
{
    name: "Areca Palm",
    category: "indoor",
    image: "ArecaPalm.jpg",
    uses: "Decoration, air purification",
    pros: ["Improves air", "Beautiful", "Pet-friendly"],
    cons: ["Needs watering", "Sensitive", "Requires space"],
    dangerous: false
},
{
    name: "Jasmine",
    category: "flower",
    image: "Jasmine.jpg",
    uses: "Perfume, decoration, tea",
    pros: ["Fragrant", "Beautiful", "Relaxing"],
    cons: ["Needs care", "Seasonal", "Pest-prone"],
    dangerous: false
},
{
    name: "Marigold",
    category: "flower",
    image: "Marigold.jpg",
    uses: "Decoration, पूजा, pest control",
    pros: ["Bright color", "Easy to grow", "Repels pests"],
    cons: ["Strong smell", "Seasonal", "Short lifespan"],
    dangerous: false
},
{
    name: "Guava",
    category: "fruit",
    image: "Guava.jpg",
    uses: "Fruit, juice",
    pros: ["Rich in vitamin C", "Healthy", "Easy to grow"],
    cons: ["Seeds hard", "Seasonal", "Attracts insects"],
    dangerous: false
},
{
    name: "Papaya",
    category: "fruit",
    image: "Papaya.webp",
    uses: "Fruit, digestion aid",
    pros: ["Good for digestion", "Nutritious", "Fast growing"],
    cons: ["Soft fruit", "Short shelf life", "Sensitive plant"],
    dangerous: false
},
{
    name: "Caladium",
    category: "indoor",
    image: "Caladium.jpg",
    uses: "Decoration",
    pros: ["Attractive leaves", "Indoor plant", "Colorful"],
    cons: ["Toxic if eaten", "Irritates skin", "Harmful to pets"],
    dangerous: true
},
{
    name: "Dieffenbachia",
    category: "indoor",
    image: "Dieffenbachia.webp",
    uses: "Decoration",
    pros: ["Air purifier", "Easy care", "Attractive"],
    cons: ["Causes mouth irritation", "Toxic sap", "Dangerous for pets"],
    dangerous: true
},
{
    name: "Philodendron",
    category: "indoor",
    image: "Philodendron.webp",
    uses: "Decoration",
    pros: ["Low maintenance", "Air purifier", "Popular"],
    cons: ["Toxic to pets", "Irritates skin", "Harmful if ingested"],
    dangerous: true
},
{
    name: "Calotropis",
    category: "plant",
    image: "Calotropis.jpg",
    uses: "Traditional medicine",
    pros: ["Medicinal use", "Hardy", "Drought resistant"],
    cons: ["Toxic latex", "Skin irritation", "Poisonous"],
    dangerous: true
},
{
    name: "Euphorbia",
    category: "plant",
    image: "Euphorbia.webp",
    uses: "Ornamental",
    pros: ["Unique appearance", "Drought tolerant", "Decorative"],
    cons: ["Toxic sap", "Causes burns", "Eye irritation"],
    dangerous: true
},
{
    name: "Croton",
    category: "indoor",
    image: "Croton.webp",
    uses: "Decoration",
    pros: ["Colorful leaves", "Attractive", "Indoor plant"],
    cons: ["Toxic sap", "Skin irritation", "Harmful if ingested"],
    dangerous: true
},
{
    name: "Yew",
    category: "tree",
    image: "Yew.jpg",
    uses: "Ornamental, medicine",
    pros: ["Evergreen", "Medicinal compounds", "Long-lived"],
    cons: ["Highly toxic", "Affects heart", "Fatal"],
    dangerous: true
},
{
    name: "Poison Ivy",
    category: "plant",
    image: "PoisonIvy.jpg",
    uses: "None (toxic)",
    pros: ["Natural plant", "Soil cover", "Hardy"],
    cons: ["Severe skin rash", "Allergic reaction", "Irritating oil"],
    dangerous: true
},
{
    name: "Poison Oak",
    category: "plant",
    image: "PoisonOak.jpg",
    uses: "None (toxic)",
    pros: ["Hardy", "Natural vegetation", "Soil stabilizer"],
    cons: ["Skin irritation", "Allergic reaction", "Toxic oil"],
    dangerous: true
},
{
    name: "Poison Sumac",
    category: "plant",
    image: "PoisonSumac.jpg",
    uses: "None (toxic)",
    pros: ["Natural ecosystem role", "Hardy", "Fast growing"],
    cons: ["Severe rash", "Highly irritating", "Toxic"],
    dangerous: true
},
{
    name: "Amla",
    category: "fruit",
    image: "Amla.webp",
    uses: "Juice, hair care, medicine",
    pros: ["Rich in vitamin C", "Boosts immunity", "Good for hair"],
    cons: ["Very sour", "Seasonal", "Not liked by all"],
    dangerous: false
},
{
    name: "Jamun",
    category: "fruit",
    image: "Jamun.webp",
    uses: "Fruit, diabetes control",
    pros: ["Controls blood sugar", "Rich in nutrients", "Tasty"],
    cons: ["Seasonal", "Stains easily", "Short shelf life"],
    dangerous: false
},
{
    name: "Lemon",
    category: "fruit",
    image: "Lemon.jpg",
    uses: "Juice, cooking, cleaning",
    pros: ["Rich in vitamin C", "Refreshing", "Versatile"],
    cons: ["Acidic", "Can harm teeth enamel", "Short storage life"],
    dangerous: false
},
{
    name: "Orange",
    category: "fruit",
    image: "Orange.jpg",
    uses: "Fruit, juice",
    pros: ["Vitamin C rich", "Tasty", "Hydrating"],
    cons: ["Acidic", "Seasonal", "Can cause allergy"],
    dangerous: false
},
{
    name: "Apple",
    category: "fruit",
    image: "Apple.webp",
    uses: "Fruit, juice, desserts",
    pros: ["Healthy", "Rich in fiber", "Widely available"],
    cons: ["Can be wax-coated", "Expensive sometimes", "Needs storage"],
    dangerous: false
},
{
    name: "Pomegranate",
    category: "fruit",
    image: "Pomegranate.jpg",
    uses: "Fruit, juice",
    pros: ["Rich in antioxidants", "Good for blood", "Healthy"],
    cons: ["Hard to peel", "Stains", "Costly"],
    dangerous: false
},
{
    name: "Sapota",
    category: "fruit",
    image: "Sapota.jpg",
    uses: "Fruit, desserts",
    pros: ["Sweet taste", "Energy-rich", "Nutritious"],
    cons: ["Too sweet", "Short shelf life", "Sticky"],
    dangerous: false
},
{
    name: "Custard Apple",
    category: "fruit",
    image: "CustardApple.webp",
    uses: "Fruit, sweets",
    pros: ["Delicious", "Rich in nutrients", "Healthy"],
    cons: ["Seeds not edible", "Seasonal", "Messy to eat"],
    dangerous: false
},
{
    name: "Drumstick",
    category: "vegetable",
    image: "Drumstick.avif",
    uses: "Cooking, medicine",
    pros: ["Highly nutritious", "Good for health", "Medicinal"],
    cons: ["Strong taste", "Needs cooking skill", "Seasonal"],
    dangerous: false
},
{
    name: "Fenugreek",
    category: "cooking",
    image: "Fenugreek.avif",
    uses: "Cooking, medicine",
    pros: ["Controls sugar", "Improves digestion", "Healthy"],
    cons: ["Bitter taste", "Strong smell", "Overuse harmful"],
    dangerous: false
},
{
    name: "Mustard",
    category: "cooking",
    image: "Mustard.jpeg",
    uses: "Oil, cooking, seeds",
    pros: ["Healthy oil", "Enhances taste", "Widely used"],
    cons: ["Strong flavor", "Allergy possible", "Spicy"],
    dangerous: false
},
{
    name: "Sesame",
    category: "cooking",
    image: "Sesame.avif",
    uses: "Oil, seeds, sweets",
    pros: ["Rich in calcium", "Nutritious", "Good for skin"],
    cons: ["Allergy risk", "High calories", "Expensive"],
    dangerous: false
},
{
    name: "Clove",
    category: "spice",
    image: "Clove.webp",
    uses: "Cooking, medicine",
    pros: ["Antibacterial", "Relieves tooth pain", "Strong aroma"],
    cons: ["Too strong", "Overuse harmful", "Not for all"],
    dangerous: false
},
{
    name: "Cardamom",
    category: "spice",
    image: "Cardamom.webp",
    uses: "Cooking, tea, sweets",
    pros: ["Aromatic", "Improves digestion", "Premium spice"],
    cons: ["Expensive", "Strong flavor", "Limited use"],
    dangerous: false
},
{
    name: "Black Pepper",
    category: "spice",
    image: "BlackPepper.webp",
    uses: "Cooking, medicine",
    pros: ["Boosts metabolism", "Improves digestion", "Widely used"],
    cons: ["Spicy", "Irritates stomach", "Overuse harmful"],
    dangerous: false
},
{
    name: "Cinnamon",
    category: "spice",
    image: "Cinnamon.webp",
    uses: "Cooking, tea, medicine",
    pros: ["Controls sugar", "Aromatic", "Healthy"],
    cons: ["Strong taste", "Overuse harmful", "Expensive"],
    dangerous: false
},
{
    name: "Bay Leaf",
    category: "spice",
    image: "BayLeaf.jpg",
    uses: "Cooking, flavoring",
    pros: ["Enhances flavor", "Aromatic", "Medicinal"],
    cons: ["Not eaten directly", "Strong taste", "Limited use"],
    dangerous: false
},
{
    name: "Ashoka",
    category: "tree",
    image: "Ashoka.webp",
    uses: "Decoration, medicine",
    pros: ["Beautiful", "Medicinal value", "Sacred"],
    cons: ["Needs space", "Slow growth", "Maintenance needed"],
    dangerous: false
},
{
    name: "Teak",
    category: "tree",
    image: "Teak.webp",
    uses: "Wood, furniture",
    pros: ["Strong wood", "Durable", "High value"],
    cons: ["Slow growth", "Expensive", "Needs space"],
    dangerous: false
},
{
    name: "Sandalwood",
    category: "tree",
    image: "Sandalwood.jpg",
    uses: "Perfume, medicine, wood",
    pros: ["Fragrant", "High value", "Medicinal"],
    cons: ["Expensive", "Slow growth", "Theft risk"],
    dangerous: false
},
{
    name: "Eucalyptus",
    category: "tree",
    image: "Eucalyptus.jpg",
    uses: "Oil, medicine",
    pros: ["Medicinal oil", "Fast growing", "Aromatic"],
    cons: ["Consumes water", "Not good for soil", "Limited biodiversity"],
    dangerous: false
},
{
    name: "Rubber Plant",
    category: "indoor",
    image: "RubberPlant.jpg",
    uses: "Decoration",
    pros: ["Attractive", "Air purifier", "Easy care"],
    cons: ["Toxic to pets", "Needs light", "Can grow large"],
    dangerous: true
},
{
    name: "Peace Lily",
    category: "indoor",
    image: "PeaceLily.jpg",
    uses: "Decoration, air purification",
    pros: ["Beautiful", "Improves air", "Low light tolerant"],
    cons: ["Toxic to pets", "Needs watering", "Sensitive"],
    dangerous: true
},
{
    name: "Spider Plant",
    category: "indoor",
    image: "SpiderPlant.webp",
    uses: "Decoration, air purification",
    pros: ["Easy care", "Pet-friendly", "Fast growing"],
    cons: ["Needs trimming", "Can overgrow", "Sensitive tips"],
    dangerous: false
},
{
    name: "Chrysanthemum",
    category: "flower",
    image: "Chrysanthemum.webp",
    uses: "Decoration, tea",
    pros: ["Colorful", "Aesthetic", "Medicinal tea"],
    cons: ["Seasonal", "Needs care", "Pest-prone"],
    dangerous: false
},
{
    name: "Colocasia",
    category: "vegetable",
    image: "Colocasia.jpg",
    uses: "Cooking",
    pros: ["Tasty", "Nutritious", "Widely used"],
    cons: ["Can irritate throat", "Needs proper cooking", "Seasonal"],
    dangerous: false
},
{
    name: "Okra",
    category: "vegetable",
    image: "Okra.jpg",
    uses: "Cooking",
    pros: ["Healthy", "Rich in fiber", "Easy to grow"],
    cons: ["Slimy texture", "Needs cooking skill", "Perishable"],
    dangerous: false
},
{
    name: "Beetroot",
    category: "vegetable",
    image: "Beetroot.jpg",
    uses: "Cooking, juice",
    pros: ["Good for blood", "Nutritious", "Vibrant color"],
    cons: ["Stains", "Earthy taste", "Overuse harmful"],
    dangerous: false
},
{
    name: "Capsicum",
    category: "vegetable",
    image: "Capsicum.jpg",
    uses: "Cooking, salads",
    pros: ["Rich in vitamins", "Colorful", "Versatile"],
    cons: ["Expensive sometimes", "Perishable", "Sensitive plant"],
    dangerous: false
},
{
    name: "White Snakeroot",
    category: "plant",
    image: "WhiteSnakeroot.jpg",
    uses: "None (toxic)",
    pros: ["Native plant", "Hardy", "Ecosystem role"],
    cons: ["Toxic to livestock", "Causes poisoning", "Dangerous"],
    dangerous: true
},
{
    name: "Water Hemlock",
    category: "plant",
    image: "WaterHemlock.jpg",
    uses: "None (toxic)",
    pros: ["Natural plant", "Grows in wetlands", "Hardy"],
    cons: ["Extremely toxic", "Causes seizures", "Fatal"],
    dangerous: true
},
{
    name: "Cerbera Odollam",
    category: "tree",
    image: "CerberaOdollam.webp",
    uses: "None (toxic)",
    pros: ["Coastal tree", "Hardy", "Natural growth"],
    cons: ["Suicide tree toxin", "Highly poisonous", "Fatal"],
    dangerous: true
},
{
    name: "Strychnine Tree",
    category: "tree",
    image: "StrychnineTree.jpeg",
    uses: "Medicine (controlled)",
    pros: ["Medicinal alkaloids", "Hardy", "Historical use"],
    cons: ["Highly toxic", "Causes convulsions", "Fatal"],
    dangerous: true
},
{
    name: "Rhododendron",
    category: "flower",
    image: "Rhododendron.webp",
    uses: "Ornamental",
    pros: ["Beautiful flowers", "Decorative", "Hardy"],
    cons: ["Toxic nectar", "Poisonous leaves", "Harmful if eaten"],
    dangerous: true
},
{
    name: "Kalanchoe",
    category: "indoor",
    image: "Kalanchoe.jpg",
    uses: "Decoration",
    pros: ["Easy care", "Attractive", "Flowering plant"],
    cons: ["Toxic to pets", "Harmful if ingested", "Causes issues"],
    dangerous: true
},
{
    name: "Autumn Crocus",
    category: "flower",
    image: "AutumnCrocus.jpg",
    uses: "Medicine (controlled)",
    pros: ["Medicinal compound", "Attractive", "Rare"],
    cons: ["Highly toxic", "Can be fatal", "Mistaken for edible plants"],
    dangerous: true
},
{
    name: "Gloriosa Lily",
    category: "flower",
    image: "GloriosaLily.jpg",
    uses: "Medicine",
    pros: ["Beautiful", "Medicinal", "Exotic"],
    cons: ["Highly toxic", "Causes organ failure", "Fatal"],
    dangerous: true
},
{
    name: "Indian Snakeroot",
    category: "medicinal",
    image: "IndianSnakeroot.jpeg",
    uses: "Medicine",
    pros: ["Medicinal value", "Used in Ayurveda", "Effective"],
    cons: ["Toxic in excess", "Side effects", "Requires caution"],
    dangerous: true
},
{
    name: "Jackfruit",
    category: "fruit",
    image: "Jackfruit.jpeg",
    uses: "Fruit, cooking, sweets",
    pros: ["High nutrition", "Large yield", "Versatile"],
    cons: ["Sticky latex", "Strong smell", "Large size"],
    dangerous: false
},
{
    name: "Lychee",
    category: "fruit",
    image: "Lychee.jpg",
    uses: "Fruit, juice, desserts",
    pros: ["Sweet taste", "Refreshing", "Rich in vitamin C"],
    cons: ["Seasonal", "Short shelf life", "Expensive"],
    dangerous: false
},
{
    name: "Watermelon",
    category: "fruit",
    image: "Watermelon.jpg",
    uses: "Fruit, juice",
    pros: ["Hydrating", "Refreshing", "Low calorie"],
    cons: ["Bulky", "Short shelf life after cutting", "Seasonal"],
    dangerous: false
},
{
    name: "Muskmelon",
    category: "fruit",
    image: "Muskmelon.jpg",
    uses: "Fruit, juice",
    pros: ["Sweet", "Hydrating", "Rich in vitamins"],
    cons: ["Seasonal", "Soft fruit", "Perishable"],
    dangerous: false
},
{
    name: "Pineapple",
    category: "fruit",
    image: "Pineapple.jpg",
    uses: "Fruit, juice, desserts",
    pros: ["Tangy taste", "Rich in vitamin C", "Aids digestion"],
    cons: ["Acidic", "Can irritate mouth", "Hard outer skin"],
    dangerous: false
},
{
    name: "Bael",
    category: "fruit",
    image: "Bael.jpg",
    uses: "Juice, medicine",
    pros: ["Good for digestion", "Cooling effect", "Medicinal"],
    cons: ["Hard shell", "Limited availability", "Strong taste"],
    dangerous: false
},
{
    name: "Mulberry",
    category: "fruit",
    image: "Mulberry.jpg",
    uses: "Fruit, jam",
    pros: ["Rich in nutrients", "Tasty", "Healthy"],
    cons: ["Stains easily", "Perishable", "Seasonal"],
    dangerous: false
},
{
    name: "Fig",
    category: "fruit",
    image: "Fig.jpg",
    uses: "Fruit, dried snacks",
    pros: ["High fiber", "Nutritious", "Good for digestion"],
    cons: ["Expensive", "Perishable", "Sticky"],
    dangerous: false
},
{
    name: "Dragon Fruit",
    category: "fruit",
    image: "DragonFruit.webp",
    uses: "Fruit, desserts",
    pros: ["Exotic", "Low calorie", "Rich in antioxidants"],
    cons: ["Expensive", "Mild taste", "Limited availability"],
    dangerous: false
},
{
    name: "Dill",
    category: "cooking",
    image: "Dill.webp",
    uses: "Cooking, pickles",
    pros: ["Aromatic", "Aids digestion", "Healthy"],
    cons: ["Strong flavor", "Short life", "Seasonal"],
    dangerous: false
},
{
    name: "Oregano",
    category: "cooking",
    image: "Oregano.webp",
    uses: "Cooking, seasoning",
    pros: ["Aromatic", "Antioxidant rich", "Popular herb"],
    cons: ["Strong taste", "Limited Indian use", "Expensive"],
    dangerous: false
},
{
    name: "Thyme",
    category: "cooking",
    image: "Thyme.jpg",
    uses: "Cooking, herbal medicine",
    pros: ["Medicinal", "Aromatic", "Healthy"],
    cons: ["Strong flavor", "Needs care", "Less common"],
    dangerous: false
},
{
    name: "Sage",
    category: "cooking",
    image: "Sage.webp",
    uses: "Cooking, medicine",
    pros: ["Medicinal", "Aromatic", "Antioxidant"],
    cons: ["Strong taste", "Overuse harmful", "Rare"],
    dangerous: false
},
{
    name: "Lemongrass",
    category: "medicinal",
    image: "Lemongrass.jpg",
    uses: "Tea, oil, cooking",
    pros: ["Refreshing aroma", "Aids digestion", "Repels insects"],
    cons: ["Sharp edges", "Needs space", "Strong taste"],
    dangerous: false
},
{
    name: "Vetiver",
    category: "grass",
    image: "Vetiver.avif",
    uses: "Perfume, cooling mats",
    pros: ["Cooling effect", "Fragrant", "Soil binding"],
    cons: ["Limited use", "Needs care", "Not edible"],
    dangerous: false
},
{
    name: "Sugarcane",
    category: "crop",
    image: "Sugarcane.webp",
    uses: "Juice, sugar production",
    pros: ["Energy-rich", "Widely used", "Profitable crop"],
    cons: ["High water need", "Hard to chew", "Seasonal"],
    dangerous: false
},
{
    name: "Wheat",
    category: "crop",
    image: "Wheat.jpg",
    uses: "Flour, food",
    pros: ["Staple food", "Energy source", "Widely grown"],
    cons: ["Gluten issues", "Needs processing", "Seasonal"],
    dangerous: false
},
{
    name: "Rice",
    category: "crop",
    image: "Rice.webp",
    uses: "Staple food",
    pros: ["Main food", "Energy-rich", "Widely available"],
    cons: ["High carbs", "Needs water", "Flood cultivation"],
    dangerous: false
},
{
    name: "Barley",
    category: "crop",
    image: "Barley.webp",
    uses: "Food, beverages",
    pros: ["Healthy grain", "High fiber", "Versatile"],
    cons: ["Limited use", "Processing needed", "Seasonal"],
    dangerous: false
},
{
    name: "Maize",
    category: "crop",
    image: "Maize.webp",
    uses: "Food, snacks",
    pros: ["Versatile", "Energy-rich", "Widely grown"],
    cons: ["High carbs", "Needs space", "Seasonal"],
    dangerous: false
},
{
    name: "Cotton",
    category: "crop",
    image: "Cotton.jpg",
    uses: "Textile",
    pros: ["Natural fiber", "Widely used", "Breathable"],
    cons: ["High water use", "Pesticides needed", "Seasonal"],
    dangerous: false
},
{
    name: "Jute",
    category: "crop",
    image: "Jute.jpg",
    uses: "Rope, bags",
    pros: ["Eco-friendly", "Biodegradable", "Strong fiber"],
    cons: ["Limited durability", "Seasonal", "Water processing needed"],
    dangerous: false
},
{
    name: "Flax",
    category: "crop",
    image: "Flax.webp",
    uses: "Fiber, seeds",
    pros: ["Healthy seeds", "Fiber source", "Versatile"],
    cons: ["Limited cultivation", "Processing needed", "Seasonal"],
    dangerous: false
},
{
    name: "Lavender",
    category: "flower",
    image: "Lavender.jpg",
    uses: "Perfume, oil, relaxation",
    pros: ["Fragrant", "Relaxing", "Medicinal"],
    cons: ["Needs cool climate", "Sensitive", "Expensive"],
    dangerous: false
},
{
    name: "Petunia",
    category: "flower",
    image: "Petunia.jpg",
    uses: "Decoration",
    pros: ["Colorful", "Easy to grow", "Attractive"],
    cons: ["Seasonal", "Needs sunlight", "Delicate"],
    dangerous: false
},
{
    name: "Zinnia",
    category: "flower",
    image: "Zinnia.jpg",
    uses: "Decoration",
    pros: ["Bright colors", "Easy care", "Long bloom"],
    cons: ["Seasonal", "Needs sunlight", "Pest-prone"],
    dangerous: false
},
{
    name: "Calendula",
    category: "flower",
    image: "Calendula.jpg",
    uses: "Decoration, medicine",
    pros: ["Medicinal", "Bright", "Easy to grow"],
    cons: ["Seasonal", "Short life", "Sensitive"],
    dangerous: false
},
{
    name: "Neem Flower",
    category: "flower",
    image: "NeemFlower.jpg",
    uses: "Cooking, medicine",
    pros: ["Medicinal", "Improves digestion", "Traditional use"],
    cons: ["Bitter taste", "Limited use", "Seasonal"],
    dangerous: false
},
{
    name: "Kalonji",
    category: "spice",
    image: "Kalonji.webp",
    uses: "Cooking, medicine",
    pros: ["Boosts immunity", "Aromatic", "Medicinal"],
    cons: ["Strong taste", "Overuse harmful", "Not for all"],
    dangerous: false
},
{
    name: "Ajwain",
    category: "spice",
    image: "Ajwain.webp",
    uses: "Cooking, digestion remedy",
    pros: ["Aids digestion", "Strong flavor", "Medicinal"],
    cons: ["Too strong", "Overuse harmful", "Limited use"],
    dangerous: false
},
{
    name: "Fennel",
    category: "spice",
    image: "Fennel.jpg",
    uses: "Mouth freshener, cooking",
    pros: ["Good for digestion", "Sweet taste", "Refreshing"],
    cons: ["Overuse harmful", "Strong aroma", "Limited use"],
    dangerous: false
},
{
    name: "Cumin",
    category: "spice",
    image: "Cumin.jpg",
    uses: "Cooking, seasoning",
    pros: ["Enhances taste", "Aids digestion", "Widely used"],
    cons: ["Strong flavor", "Overuse harmful", "Allergy possible"],
    dangerous: false
},
{
    name: "Star Anise",
    category: "spice",
    image: "StarAnise.webp",
    uses: "Cooking, tea",
    pros: ["Aromatic", "Medicinal", "Unique flavor"],
    cons: ["Strong taste", "Limited use", "Expensive"],
    dangerous: false
},
{
    name: "Nutmeg",
    category: "spice",
    image: "Nutmeg.webp",
    uses: "Cooking, medicine",
    pros: ["Aromatic", "Medicinal", "Enhances flavor"],
    cons: ["Toxic in excess", "Strong taste", "Expensive"],
    dangerous: true
},
{
    name: "Saffron",
    category: "spice",
    image: "Saffron.jpg",
    uses: "Cooking, medicine, coloring",
    pros: ["Premium spice", "Aromatic", "Medicinal"],
    cons: ["Very expensive", "Limited availability", "Needs care"],
    dangerous: false
},
{
    name: "Betel Leaf",
    category: "plant",
    image: "BetelLeaf.webp",
    uses: "Chewing, rituals, medicine",
    pros: ["Digestive", "Cultural use", "Medicinal"],
    cons: ["Addictive when combined", "Strong taste", "Not for all"],
    dangerous: false
},
{
    name: "Curry Plant",
    category: "plant",
    image: "CurryLeaf.webp",
    uses: "Decoration, aroma",
    pros: ["Fragrant", "Attractive", "Easy care"],
    cons: ["Not edible like curry leaves", "Limited use", "Rare"],
    dangerous: false
},
{
    name: "Kesar Mango",
    category: "fruit",
    image: "KesarMango.webp",
    uses: "Fruit, desserts",
    pros: ["Sweet taste", "Premium quality", "Rich flavor"],
    cons: ["Seasonal", "Expensive", "Perishable"],
    dangerous: false
},
{
    name: "Red Sandalwood",
    category: "tree",
    image: "RedSandalwood.jpg",
    uses: "Medicine, wood",
    pros: ["High value", "Medicinal", "Durable"],
    cons: ["Illegal trade risk", "Slow growth", "Expensive"],
    dangerous: false
},
{
    name: "Brahmi",
    category: "medicinal",
    image: "Brahmi.jpg",
    uses: "Memory enhancement, medicine",
    pros: ["Improves memory", "Reduces stress", "Ayurvedic use"],
    cons: ["Bitter taste", "Overuse harmful", "Needs water"],
    dangerous: false
},
{
    name: "Shatavari",
    category: "medicinal",
    image: "Shatavari.jpg",
    uses: "Hormonal balance, Ayurveda",
    pros: ["Supports health", "Medicinal", "Natural remedy"],
    cons: ["Limited availability", "Needs care", "Slow growth"],
    dangerous: false
},
{
    name: "Giloy",
    category: "medicinal",
    image: "Giloy.jpg",
    uses: "Immunity booster, Ayurveda",
    pros: ["Boosts immunity", "Medicinal", "Natural detox"],
    cons: ["Bitter taste", "Overuse harmful", "Climber plant"],
    dangerous: false
},
{
    name: "Arjun Tree",
    category: "tree",
    image: "ArjunTree.webp",
    uses: "Heart medicine, shade",
    pros: ["Medicinal bark", "Strong tree", "Long lifespan"],
    cons: ["Needs space", "Slow growth", "Limited use"],
    dangerous: false
},
{
    name: "Sal Tree",
    category: "tree",
    image: "SalTree.jpg",
    uses: "Wood, resin",
    pros: ["Strong wood", "Long lasting", "Widely used"],
    cons: ["Slow growth", "Needs forest area", "Heavy"],
    dangerous: false
},
{
    name: "Palash",
    category: "tree",
    image: "PalashTree.webp",
    uses: "Dye, decoration",
    pros: ["Bright flowers", "Cultural value", "Medicinal"],
    cons: ["Seasonal", "Short bloom", "Needs space"],
    dangerous: false
},
{
    name: "Mahua",
    category: "tree",
    image: "MahuaTree.jpg",
    uses: "Oil, food, traditional drinks",
    pros: ["Multiple uses", "Nutritious", "Traditional importance"],
    cons: ["Strong smell", "Limited region", "Seasonal"],
    dangerous: false
},
{
    name: "Tendu",
    category: "tree",
    image: "Tendu.webp",
    uses: "Leaves for bidi, fruit",
    pros: ["Economic value", "Useful leaves", "Hardy"],
    cons: ["Limited use", "Regional", "Not widely edible"],
    dangerous: false
},
{
    name: "Khejri",
    category: "tree",
    image: "Khejri.webp",
    uses: "Fodder, desert farming",
    pros: ["Drought resistant", "Supports soil", "Hardy"],
    cons: ["Slow growth", "Limited regions", "Needs space"],
    dangerous: false
},
{
    name: "Baobab",
    category: "tree",
    image: "Baobab.jpg",
    uses: "Fruit, shade",
    pros: ["Unique tree", "Long lifespan", "Nutritious fruit"],
    cons: ["Rare", "Slow growth", "Needs space"],
    dangerous: false
},
{
    name: "Kachnar",
    category: "flower",
    image: "Kachnar.jpg",
    uses: "Cooking, decoration",
    pros: ["Edible flowers", "Beautiful", "Medicinal"],
    cons: ["Seasonal", "Needs care", "Limited use"],
    dangerous: false
},
{
    name: "Parijat",
    category: "flower",
    image: "Parijat.avif",
    uses: "Decoration, religious use",
    pros: ["Fragrant", "Sacred", "Beautiful"],
    cons: ["Short lifespan", "Seasonal", "Delicate"],
    dangerous: false
},
{
    name: "Rajnigandha",
    category: "flower",
    image: "Rajnigandha.webp",
    uses: "Perfume, decoration",
    pros: ["Strong fragrance", "Aesthetic", "Popular"],
    cons: ["Needs care", "Seasonal", "Sensitive"],
    dangerous: false
},
{
    name: "Gladiolus",
    category: "flower",
    image: "Gladiolus.jpg",
    uses: "Decoration",
    pros: ["Tall flowers", "Colorful", "Attractive"],
    cons: ["Needs care", "Seasonal", "Delicate"],
    dangerous: false
},
{
    name: "Cosmos",
    category: "flower",
    image: "Cosmos.webp",
    uses: "Decoration",
    pros: ["Easy to grow", "Bright colors", "Low maintenance"],
    cons: ["Seasonal", "Delicate", "Short life"],
    dangerous: false
},
{
    name: "Balsam",
    category: "flower",
    image: "Balsam.webp",
    uses: "Decoration",
    pros: ["Fast growing", "Colorful", "Easy care"],
    cons: ["Seasonal", "Short lifespan", "Sensitive"],
    dangerous: false
},
{
    name: "Portulaca",
    category: "flower",
    image: "Portulaca.jpg",
    uses: "Decoration",
    pros: ["Drought tolerant", "Bright flowers", "Low maintenance"],
    cons: ["Needs sunlight", "Seasonal", "Small blooms"],
    dangerous: false
},
{
    name: "Ixora",
    category: "flower",
    image: "Ixora.webp",
    uses: "Decoration",
    pros: ["Evergreen", "Bright clusters", "Garden plant"],
    cons: ["Needs warm climate", "Sensitive", "Slow growth"],
    dangerous: false
},
{
    name: "Pitcher Plant",
    category: "carnivorous",
    image: "PitcherPlant.avif",
    uses: "Insect control, research, decoration",
    pros: ["Carnivorous (eats insects)", "Unique appearance", "Natural pest control"],
    cons: ["Needs humid environment", "Slow growth", "Requires special care"],
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
    const categories = ['medicinal', 'cooking', 'dangerous', 'tree', 'grass', 'flower', 'plant', 'vegetable', 'indoor', 'fruit', 'spice', 'crop'];

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
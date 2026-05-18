const db = require('./config/db');

async function seed() {
    try {
        const [rows] = await db.query('SELECT COUNT(*) as count FROM recipes');
        if (rows[0].count === 0) {
            const query = `
                INSERT INTO recipes (title, description, ingredients, instructions, calories, protein, carbs, fat, diet_tag)
                VALUES 
                ('Grilled Chicken Salad', 'A healthy mix of greens, cherry tomatoes, and grilled chicken breast.', '["chicken breast", "lettuce", "tomatoes", "olive oil"]', 'Grill chicken. Toss with greens.', 350, 40, 10, 15, 'none'),
                ('Vegan Quinoa Bowl', 'High protein quinoa with roasted sweet potatoes, black beans, and avocado.', '["quinoa", "sweet potato", "black beans", "avocado"]', 'Cook quinoa. Roast potatoes. Mix.', 450, 15, 60, 18, 'vegan'),
                ('Keto Salmon & Asparagus', 'Pan-seared salmon served with buttery garlic asparagus.', '["salmon", "asparagus", "butter", "garlic"]', 'Sear salmon. Sauté asparagus in butter.', 500, 45, 5, 35, 'keto'),
                ('Oatmeal with Berries', 'Warm oatmeal topped with fresh berries and a drizzle of honey.', '["oats", "milk", "mixed berries", "honey"]', 'Cook oats in milk. Top with berries.', 300, 10, 55, 5, 'vegetarian')
            `;
            await db.query(query);
            console.log('Mock recipes inserted successfully!');
        } else {
            console.log('Recipes already exist. Skipping seed.');
        }
        process.exit(0);
    } catch (err) {
        console.error('Error seeding:', err);
        process.exit(1);
    }
}

seed();

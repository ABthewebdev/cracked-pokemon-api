const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')
app.use(cors())
const bestPokemon = {
    'swellow': {
        'Name': 'Swellow',
        'Cracked Set': ['guts', 'facade', 'flame orb'],
        'Type': ['normal', 'flying']
    },
    'toxicroak': {
        'Name': 'Toxicroak',
        'Cracked Set': ['rain dance', 'dry skin'],
        'Type': ['poison', 'fight']
    },
    'lucario': {
        'Name': 'lucario',
        'Cracked Set': ['close combat', 'choice scarf'],
        'Type': ['fighting', 'steel']
    },
    'ninjask': {
        'Name': 'ninjask',
        'Cracked Set': ['swords dance', 'focus band', 'flail'],
        'Type': ['bug', 'flying']
    },
    'kingdra': {
        'Name': 'kingdra',
        'Cracked Set': ['swift swim', 'rain dance', 'dragon dance', 'outrage'],
        'Type': ['dragon', 'water']
    },
    'metagross': {
        'Name': 'metagross',
        'Cracked Set': ['substitute', 'meteor mash', 'agility', 'zen headbutt'],
        'Type': ['steel', 'psychic']
    }
}
app.listen(process.env.PORT || PORT, () => {})
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/api', (req, res) => {
    res.json(bestPokemon)
})
app.get('/api/:pokemon', (req, res) => {
    const poke = req.params.pokemon;
    if(bestPokemon[poke]) {
        res.json(bestPokemon[poke])
    }
    else {
        res.json('error')
    }
})
app.get('/api/:property', (req, res) => {
    const property = req.params.property.toLowerCase();
    if (property === 'name') {
        const pokeNames = Object.values(bestPokemon).map(pokemon => pokemon['Name']);
        res.json(pokeNames);
    } else if (property === 'type') {
        const pokeTypes = Object.values(bestPokemon).map(pokemon => pokemon['type']);
        res.json(pokeTypes);
    } else if (property === 'crackedset') {
        const crackedSets = Object.values(bestPokemon).map(pokemon => pokemon['Cracked Set']);
        res.json(crackedSets);
    } else {
        res.status(400).json({ error: 'Invalid property requested' });
    }
});
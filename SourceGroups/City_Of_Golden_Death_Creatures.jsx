
export const City_Of_Golden_DeathCreatures = {
  "Golden Guardian": {
    source: "City Of Golden Death",
    creatureType: "construct",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 8,
    hdVal: 10,
    cr: 6,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 20
    },
    abilities: {
      str: 18,
      dex: 9,
      con: "-",
      int: "-",
      wis: 11,
      cha: 1
    },
    feats: [],
    attacks: [
      {
        weapon: "Slam",
        name: "2 Slams",
        damage: "1d4",
        bonuses: [
          {
            source: "inherent",
            value: "1d6",
            appliesTo: "damageType",
            damageType: "fire"
          }
        ],
        type: "primary"
      }
    ],
    immunities: [
      "construct traits",
      "Immune to electricity, fire"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: " adamantine"
      },
      SR: {
        value: 17
      },
      naturalArmor: 10
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "This gilded statue appears to be crafted of solid gold plates, its shining visage carved with exquisite detail into an eerie replica of a human face.",
    description: "Golden guardians are humanoid automatons formed of iron, steel, and most of all, gold. Their appearance can range from rough, lumpy humanoid shapes to statue-shaped conglomerations of gold coins to exquisitely detailed gilded statues with eerily accurate human faces. Golden guardians are powered by a fiery, molten core of pure gold, which radiates a shimmering heat. Golden guardians cannot speak, and move with the sound of metal scraping on metal. A golden guardian stands 7 feet tall and weighs 1,500 pounds. Construction The framework of a golden guardian is built from 1,200 pounds of steel rods and pins and then covered in 100 pounds of gold plating. Its insides are filled with 200 pounds of molten gold before the entire construct is sealed. Once assembled, the gold plating is sprinkled with rare powders and herbs worth at least 300 gp. A golden guardian uses 15,000 gp of raw gold in its construction. Golden Guardian CL 12th; Price 33,300 gp Construction Requirements Craft Construct, blur, fabricate, fire shield, geas/quest, wall of fire, creator must be caster level 12th; Skill Craft (goldsmith) DC 17; Cost 24,300 gp",
    organization: "solitary or gang (2-4)",
    spellLikeAbilities: [],
    skills: {},
    special: {
      heat: {
        type: "Ex",
        text: "A golden guardian's body generates intense heat, dealing 1d6 points of fire damage whenever it hits in melee, or in each round it grapples. Creatures attacking a golden guardian with unarmed strikes or natural weapons are also subject to the golden guardian's heat."
      },
      "molten destruction": {
        type: "Ex",
        text: "When reduced to 0 hit points, a golden guardian superheats and instantly melts into a pile of molten gold. All creatures within a 10-foot-radius spread take 6d6 points of fire damage; a DC 14 Reflex save halves the damage. The save DC is Constitution-based."
      },
      conductivity: {
        type: "Ex",
        text: "A magical attack that deals electricity damage speeds up a golden guardian (as the haste spell) for 1d4 rounds. A golden guardian gets no saving throw against electricity effects."
      },
      "heat shimmer": {
        type: "Ex",
        text: "The intense heat radiating from a golden guardian's body creates a wavering shimmer in the air that makes the construct difficult to see clearly. This functions as a blur spell (CL 8th), except it cannot be dispelled."
      }
    }
  },

};
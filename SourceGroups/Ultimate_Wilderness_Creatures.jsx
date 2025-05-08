
export const Ultimate_WildernessCreatures = {
  "Giant Tardigrade": {
    source: "Ultimate Wilderness",
    creatureType: "vermin",
    subTypes: ["aquatic"],
    alignments: [
      "Neutral"
    ],
    size: "Diminutive",
    hd: 1,
    hdVal: 8,
    cr: "1/8",
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 20,
      climb: 20,
      swim: 20
    },
    abilities: {
      str: 2,
      dex: 12,
      con: 17,
      int: "-",
      wis: 10,
      cha: 1
    },
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d2",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to mind-affecting effects"
    ],
    resistances: [
      {
        damageType: "acid",
        value: 2
      },
      {
        damageType: "cold",
        value: 2
      },
      {
        damageType: "fire",
        value: 2
      }
    ],
    defense: {
      naturalArmor: 1
    },
    space: "1 ft.",
    reach: "0 ft.",
    environment: "any",
    visualDescription: "This strange eight-legged creature looks vaguely like an insectile bear as it swims through the water.",
    description: "Giant tardigrades, sometimes referred to as water bears, are miniscule, eight-legged creatures that live in water but can survive almost anywhere. The giant tardigrade grows as large as 1 foot in length and feeds on patches of bacteria, fungus, and plant matter.",
    organization: "solitary, pair, or colony (3–20)",
    skills: {
      Perception: {
        ranks: 12
      }
    },
    special: {
      hardy: {
        text: "A giant tardigrade is able to endure extreme conditions for extended periods of time. It is unharmed by extreme cold, extreme heat, and less extreme temperatures. It takes no damage from decompression (such as in the vacuum of space) or high-pressure environments (such as in extremely deep water).",
        type: "Ex"
      },
      amphibious: {
        universalMonsterAbility: "Amphibious"
      }
    }
  },

  "Butterfly": {
    legs: 6,
    arms: 0,
    source: "Ultimate Wilderness",
    creatureType: "vermin",
    alignments: [
      "Neutral"
    ],
    size: "Diminutive",
    hd: 1,
    hdVal: 8,
    cr: 0,
    racialFeatures: [
      "Darkvision 60 ft.",
    ],
    speed: {
      fly: 30,
    },
    abilities: {
      str: 1,
      dex: 13,
      con: 4,
      int: "-",
      wis: 12,
      cha: 7
    },
    space: "1 ft.",
    reach: "0 ft.",
    environment: "any temperate or warm",
    visualDescription: "This graceful winged insect is a riot of color that glides through the air like a flittering dream.",
    description: "Butterflies are delicate, brightly colored insects that feed on nectar and other sources of sugar. Moths have the same statistics as butterflies, though they tend to be active at night. The butterfly (or moth) presented here is a particularly large specimen with a wingspan of just over 6 inches, yet it is still completely harmless and awards no XP if slain.",
    organization: "solitary, pair, or kaleidoscope (3–100)",
    skills: {
      Fly: {
        ranks: 1
      }
    }
  },

};
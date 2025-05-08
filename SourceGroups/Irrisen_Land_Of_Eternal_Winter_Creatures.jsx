
export const Irrisen_Land_Of_Eternal_WinterCreatures = {
  "Black Rider": {
    source: "Irrisen Land Of Eternal Winter",
    creatureType: "fey",
    subTypes: [],
    alignments: [
      "Lawful Neutral"
    ],
    size: "Medium",
    hd: 18,
    hdVal: 6,
    cr: 13,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 23,
      dex: 20,
      con: 22,
      int: 17,
      wis: 18,
      cha: 21
    },
    feats: [
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Spear",
        choiceSource: "Improved Critical"
      },
      {
        name: "Mounted Combat",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Ride-By Attack",
        type: "Combat"
      },
      {
        name: "Spirited Charge",
        type: "Combat"
      },
      {
        name: "Trample",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Spear",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Spear",
        enchantments: [
          {
            name: "Enhancement Bonus +2",
            source: "inherent"
          },
          {
            name: "Icy Burst",
            source: "inherent"
          }
        ],
        name: "Spear",
        damage: "1d8"
      }
    ],
    immunities: [
      "Immune to cold, poison"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "cold iron"
      },
      SR: {
        value: 24
      },
      naturalArmor: 5
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "A man with curling ram's horns sits astride a snorting, stamping black warhorse, gripping a dark, battle-worn spear.",
    description: "The Black Rider has the most forbidding appearance of the Three Riders. He always appears in a frightening form when called to service. His judgments are the least recorded in history, as they are all performed under the cover of night, and many Irriseni citizens blame other vicious creatures and strange occurrences for the disappearance of their fellow citizens.",
    organization: "solitary",
    languages: "Common, Hallit, Skald, Sylvan; telepathy 60 ft.",
    spellLikeAbilities: [
      {
        name: "see invisibility",
        casterLevel: 13,
        timesPerDay: -1
      },
      {
        name: "chill touch",
        casterLevel: 13,
        timesPerDay: -1
      },
      {
        name: "detect thoughts",
        casterLevel: 13,
        timesPerDay: -1
      },
      {
        name: "zone of truth",
        casterLevel: 13,
        timesPerDay: -1
      },
      {
        name: "deeper darkness",
        casterLevel: 13,
        timesPerDay: 5
      },
      {
        name: "ice storm",
        casterLevel: 13,
        timesPerDay: 5
      },
      {
        name: "cone of cold",
        casterLevel: 13,
        timesPerDay: 3
      },
      {
        name: "dust of twilight",
        casterLevel: 13,
        timesPerDay: 3
      },
      {
        name: "moonstruck",
        casterLevel: 13,
        timesPerDay: 3
      },
      {
        name: "cloak of dreams",
        casterLevel: 13,
        timesPerDay: 1
      }
    ],
    skills: {
      Intimidate: {
        ranks: 18
      },
      "Knowledge (arcana)": {
        ranks: 15
      },
      "Knowledge (history)": {
        ranks: 15
      },
      "Knowledge (nature)": {
        ranks: 15
      },
      "Knowledge (planes)": {
        ranks: 15
      },
      Perception: {
        ranks: 18
      },
      Ride: {
        ranks: 21
      },
      "Sense Motive": {
        ranks: 18
      },
      Stealth: {
        ranks: 18
      },
      Survival: {
        ranks: 12
      }
    },
    special: {
      "Rider's weapon": {
        type: "Su",
        text: "Whenever the Black Rider successfully confirms a critical hit with his +2 icy burst spear, the target is stunned for 1 round unless it succeeds at a DC 24 Fortitude save. The save DC is Charisma-based."
      },
      "weal or woe": {
        type: "Ex",
        preText: "DC 24"
      },
      "conjure mount": {
        type: "Ex"
      },
      "Rider's robes": {
        type: "Su",
        text: "The Black Rider wears robes that provide the same protection as full plate armor."
      },
      "icy aura": {
        type: "Su",
        text: "Misty vapors roil from the Black Rider to a distance of 10 feet. Any creatures in contact with the vapors must succeed at a DC 24 Fortitude save or be slowed as per the slow spell. Once affected, the creature remains slowed as long as it is in the aura and for 1 round afterward. The save DC is Charisma-based.",
        preText: "10 ft., DC 24"
      }
    }
  },

  "Red Rider": {
    source: "Irrisen Land Of Eternal Winter",
    creatureType: "fey",
    subTypes: [],
    alignments: [
      "Lawful Neutral"
    ],
    size: "Medium",
    hd: 16,
    hdVal: 6,
    cr: 12,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 24,
      dex: 21,
      con: 22,
      int: 17,
      wis: 18,
      cha: 21
    },
    feats: [
      {
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Scimitar",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Mounted Combat",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Ride-By Attack",
        type: "Combat"
      },
      {
        name: "Trample",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Scimitar",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Scimitar",
        enchantments: [
          {
            name: "Enhancement Bonus +2",
            source: "inherent"
          },
          {
            name: "Flaming",
            source: "inherent"
          }
        ],
        name: "Scimitar",
        damage: "1d6"
      }
    ],
    immunities: [
      "Immune to cold, poison"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "cold iron"
      },
      SR: {
        value: 23
      },
      naturalArmor: 4
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "A man with fiery red hair and antlers rides a red-gold stallion. His robes expose the hairy legs of a goat, ending in cloven hooves.",
    description: "The Red Rider is the most fiery and aggressive of the Three Riders. When Irriseni citizens share old tales of previous Riders around the hearth, stories of the Red Rider's judgments always go into gruesome detail about his wholesale slaughter and shocking violence. Some argue that the Red Rider is no more vicious than the Black Rider, and that the larger number of heinous tales about the Red Rider are simply the result of the time of day in which he engages in his tasks. More citizens are awake and out of their homes during the day to witness the Red Rider's judgments before he cedes his time to the night.",
    organization: "solitary",
    languages: "Common, Hallit, Skald, Sylvan; telepathy 60 ft.",
    spellLikeAbilities: [
      {
        name: "see invisibility",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "chill touch",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "detect thoughts",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "zone of truth",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "ice storm",
        casterLevel: 12,
        timesPerDay: 5
      },
      {
        name: "cone of cold",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "flame strike",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "fire storm",
        casterLevel: 12,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 4
      },
      Diplomacy: {
        ranks: 16
      },
      Intimidate: {
        ranks: 16
      },
      "Knowledge (arcana)": {
        ranks: 12
      },
      "Knowledge (history)": {
        ranks: 12
      },
      "Knowledge (nature)": {
        ranks: 12
      },
      "Knowledge (planes)": {
        ranks: 12
      },
      Perception: {
        ranks: 16
      },
      Ride: {
        ranks: 19
      },
      "Sense Motive": {
        ranks: 16
      },
      Stealth: {
        ranks: 12
      }
    },
    special: {
      "bright blast": {
        type: "Su",
        text: "Three times per day, the Red Rider can erupt in flames, damaging all creatures within a 20-foot radius. Those caught in the blast must succeed at a DC 23 Reflex save or take 3d6 points of fire damage and be dazed for 1 round and dazzled for an additional 1d4 rounds. The save DC is Charisma-based."
      },
      "Rider's weapon": {
        type: "Su",
        text: "Whenever the Red Rider successfully confirms a critical hit with his +2 f laming scimitar, the target is dazed for 1 round unless it succeeds at a DC 23 Fortitude save. The save DC is Charisma-based."
      },
      "weal or woe": {
        type: "Ex",
        preText: "DC 23"
      },
      "conjure mount": {
        type: "Ex"
      },
      "Rider's robes": {
        type: "Su",
        text: "The Red Rider wears robes that provide the same protection as half-plate armor."
      }
    }
  },

  "White Rider": {
    source: "Irrisen Land Of Eternal Winter",
    creatureType: "fey",
    subTypes: [],
    alignments: [
      "Lawful Neutral"
    ],
    size: "Medium",
    hd: 16,
    hdVal: 6,
    cr: 11,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 20,
      dex: 25,
      con: 20,
      int: 18,
      wis: 21,
      cha: 21
    },
    feats: [
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Composite longbow",
        choiceSource: "Improved Critical"
      },
      {
        name: "Manyshot",
        type: "Combat"
      },
      {
        name: "Mounted Archery",
        type: "Combat"
      },
      {
        name: "Mounted Combat",
        type: "Combat"
      },
      {
        name: "Point-Blank Shot",
        type: "Combat"
      },
      {
        name: "Precise Shot",
        type: "Combat"
      },
      {
        name: "Rapid Shot",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Composite longbow",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Longsword",
        enchantments: [
          {
            name: "Enhancement Bonus +1",
            source: "inherent"
          }
        ],
        name: "Longsword",
        damage: "1d8"
      },
      {
        weapon: "Longbow",
        enchantments: [
          {
            name: "Enhancement Bonus +2",
            source: "inherent"
          }
        ],
        name: "Longbow",
        damage: "1d8"
      }
    ],
    immunities: [
      "Immune to cold, poison"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "cold iron"
      },
      SR: {
        value: 22
      },
      naturalArmor: 4
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "A tall, handsome woman sits astride a white horse. She grips an elegant longbow made of raw birch.",
    description: "The White Rider is the most even-tempered and diplomatic of the Three Riders. This does not mean that she is sympathetic or merciful, just that there is less blood staining the crisp white garments she wears. When the White Rider comes calling, citizens of Irrisen often seek to curry favor by bringing her gifts of hot tea, pastries, and fresh baked bread. She rarely accepts these offerings, and when she does it is only from those she has already judged to be loyal to Baba Yaga and worthy of the Queen of Witches's rule. Those who too eagerly attempt to carry favor face added scrutiny from her.",
    organization: "solitary",
    languages: "Common, Hallit, Skald, Sylvan; telepathy 60 ft.",
    spellLikeAbilities: [
      {
        name: "see invisibility",
        casterLevel: 11,
        timesPerDay: -1
      },
      {
        name: "chill touch",
        casterLevel: 11,
        timesPerDay: -1
      },
      {
        name: "detect thoughts",
        casterLevel: 11,
        timesPerDay: -1
      },
      {
        name: "zone of truth",
        casterLevel: 11,
        timesPerDay: -1
      },
      {
        name: "ice storm",
        casterLevel: 11,
        timesPerDay: 5
      },
      {
        name: "daybreak arrow",
        casterLevel: 11,
        timesPerDay: 5
      },
      {
        name: "charm monster",
        casterLevel: 11,
        timesPerDay: 3
      },
      {
        name: "cone of cold",
        casterLevel: 11,
        timesPerDay: 3
      },
      {
        name: "suggestion, mass",
        casterLevel: 11,
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 10
      },
      Diplomacy: {
        ranks: 15
      },
      Intimidate: {
        ranks: 15
      },
      "Knowledge (arcana)": {
        ranks: 14
      },
      "Knowledge (history)": {
        ranks: 14
      },
      "Knowledge (nature)": {
        ranks: 14
      },
      "Knowledge (planes)": {
        ranks: 14
      },
      Perception: {
        ranks: 16
      },
      Ride: {
        ranks: 19
      },
      "Sense Motive": {
        ranks: 16
      },
      Stealth: {
        ranks: 16
      }
    },
    special: {
      "Rider's weapon": {
        type: "Su",
        text: "The White Rider has a +2 seeking composite longbow and a quiver that produces a never-ending supply of arrows. Once per round, she can draw a +1 brilliant energy arrow from her quiver."
      },
      "weal or woe": {
        type: "Ex",
        preText: "DC 23"
      },
      "conjure mount": {
        type: "Ex"
      },
      "Rider's robes": {
        type: "Su",
        text: "The White Rider wears robes that provide the same protection as a breastplate."
      },
      "blinding light": {
        type: "Su",
        text: "The White Rider can radiate a 30-foot-radius aura of blinding light as a free action. Creatures within the affected area must succeed at a DC 23 Fortitude save or be permanently blinded. A creature that successfully saves cannot be affected again by the Rider's blinding light aura for 24 hours. The save is Constitution-based.",
        preText: "30 ft., DC 23"
      }
    }
  },

  "Boreal Creature": {
    source: "Irrisen Land Of Eternal Winter",
    creatureType: "monstrous humanoid",
    subTypes: [
      "cold"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Large",
    hd: 7,
    hdVal: 10,
    cr: 7,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 27,
      dex: 12,
      con: 20,
      int: 13,
      wis: 13,
      cha: 10
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Blind-Fight",
        type: "Combat"
      },
      {
        name: "Great Fortitude",
        type: "General"
      },
      {
        name: "Intimidating Prowess",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        bonuses: [
          {
            source: "inherent",
            value: "1d6",
            appliesTo: "damageType",
            damageType: "cold"
          }
        ],
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        bonuses: [
          {
            source: "inherent",
            value: "1d6",
            appliesTo: "damageType",
            damageType: "cold"
          }
        ],
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "bludgeoning"
      },
      SR: {
        value: 17
      },
      naturalArmor: 10
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "cold marshes",
    visualDescription: "Since Baba Yaga's invasion, many creatures native to the eastern Linnorm Kingdoms have died out, unable to adapt to a land now dominated by ceaseless supernatural winter. However, despite this dramatic change in climate, a few particularly strong and hardy specimens managed to survive, and over the centuries the magical forces holding this realm in its grip have aided the evolution of species better suited to this harsh environment.",
    description: "Though boreal creatures mostly resemble their temperate kin, the effects of sorcerous winter have bolstered them, making them stronger and much more dangerous. In basic shape and form they appear similar to their ancestors, but other characteristics reveal the creatures' altered nature. Their fur and skin are much paler, often shades of blue, gray, or simply white, and it is not uncommon for parts of these creatures to be cloaked in frost, especially their jagged claws and shaggy hair. Creating a Boreal Creature \"Boreal\" is an inherited template that can be added to any Huge or smaller corporeal creature. This template cannot be applied to a creature with the fire subtype. Challenge Rating: Same as the base creature +1. Type: The creature gains the cold subtype. If applied to a creature with the animal or vermin type, the creature's type changes to magical beast. Do not recalculate its Hit Dice, base attack bonus, saves, or skill points. Attacks: A boreal creature's natural attacks deal an additional 1d6 points of cold damage. Abilities: Str +2, Con +2. Skills: The creature receives a +4 bonus on Stealth and Survival checks in snow. An aquatic boreal creature receives a +4 racial bonus on Stealth and Survival checks at all times in frigid waters (its natural habit), instead of in snow. Environment: The creature's natural environment changes to a cold climate. Special Qualities: A boreal creature gains the following special quality. Trackless Step (Ex): A boreal creature does not leave a trail in snow and cannot be tracked. It can choose to leave a trail, if it so desires. This special quality does not apply to aquatic boreal creatures.",
    organization: "solitary of coven (3 hags of any kind)",
    languages: "Common, Giant",
    spellLikeAbilities: [
      {
        name: "alter self",
        casterLevel: 7,
        timesPerDay: 3
      },
      {
        name: "fog cloud",
        casterLevel: 7,
        timesPerDay: 3
      }
    ],
    skills: {
      Bluff: {
        ranks: 7
      },
      Diplomacy: {
        ranks: 7
      },
      Intimidate: {
        ranks: 0
      },
      Perception: {
        ranks: 7
      },
      "Sense Motive": {
        ranks: 0
      },
      Stealth: {
        ranks: 3,
        bonuses: [
          {
            source: "inherent",
            value: 4,
            situational: true,
            note: "in snow"
          }
        ]
      },
      Survival: {
        bonuses: [
          {
            source: "inherent",
            value: 4,
            situational: true,
            note: "in snow"
          }
        ]
      }
    },
    special: {
      rend: {
        universalMonsterAbility: "Rend",
        type: "Ex",
        weaponName: 2
      },
      "trackless step": {
        type: "Ex",
        text: "A boreal annis hag does not leave a trail in snow and cannot be tracked. She can choose to leave a trail if she so desires."
      }
    }
  },

  "Guardian Doll": {
    source: "Irrisen Land Of Eternal Winter",
    creatureType: "construct",
    subTypes: [
      "cold"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Tiny",
    hd: 4,
    hdVal: 10,
    cr: 3,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 8,
      dex: 17,
      con: "-",
      int: 13,
      wis: 12,
      cha: 10
    },
    feats: [
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Weapon Finesse",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Dagger",
        name: "Dagger",
        specialAbility: "paralysis",
        damage: "1d4",
        bonuses: [
          {
            source: "inherent",
            value: "1d6",
            appliesTo: "damageType",
            damageType: "cold"
          }
        ]
      }
    ],
    immunities: [
      "construct traits"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "magic"
      },
      SR: {
        value: 14
      },
      naturalArmor: 1
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any cold",
    visualDescription: "This strange doll is clad in traditional Irriseni peasant clothing, and its eyes glisten with a disturbing curiosity.",
    description: "Guardian dolls are constructs created by the White Witches to serve as spies and sentries at places that require ever-vigilant wardens-especially the wintry nation's borders. Similar to soulbound dolls (Pathfinder RPG Bestiary 2 255), these strange automatons are infused with fragments of the souls of living beings slain during the dolls' creation. The doll is sentient, and though a small part of the soul's original personality remains, the witchery employed largely strips it of its individuality. Many guardian dolls sit inside another form of construct-a sentinel hut- and stand vigil at one of Irrisen's borders and monitoring those who would enter. Others are sent on scouting missions or to spy on targets, usually posing as inanimate dolls to hide their true nature. Construction A guardian doll's body is made of porcelain or wood, plus one exquisite item worth at least 600 gp to serve as the soul focus. Creation requires a soul fragment from a dead creature that dies at some point during the creation of the doll. An unwilling soul can resist with a successful DC 20 Will save. Stripping a soul fragment from a dead creature does not prevent the rest of the soul from continuing to the afterlife, nor does it prevent the body from being resurrected or raised from the dead. Guardian Doll CL 8th; Price 6,600 gp CONSTRUCTION Requirements Craft Construct, false life, lesser geas, magic jar, minor creation, sleet storm, soul of a living creature who dies or is slain during the creation process, creator must be caster level 8th; Skill Craft (sculpture) DC 16; Cost 3,600 gp",
    organization: "solitary, pair, or coven (3-8)",
    languages: "Common, Hallit, Skald",
    note: "UC See Ultimate Combat.",
    spellLikeAbilities: [
      {
        name: "ray of frost",
        casterLevel: 4,
        timesPerDay: -1
      },
      {
        name: "alarm",
        casterLevel: 4,
        timesPerDay: 3
      },
      {
        name: "charm person",
        casterLevel: 4,
        timesPerDay: 3
      },
      {
        name: "light",
        casterLevel: 4,
        timesPerDay: 3
      },
      {
        name: "mage hand",
        casterLevel: 4,
        timesPerDay: 3
      },
      {
        name: "open/close",
        casterLevel: 4,
        timesPerDay: 3
      },
      {
        name: "prestidigitation",
        casterLevel: 4,
        timesPerDay: 3
      },
      {
        name: "frost fall",
        casterLevel: 4,
        timesPerDay: 1
      },
      {
        name: "levitate",
        casterLevel: 4,
        timesPerDay: 1
      }
    ],
    skills: {
      "Escape Artist": {
        ranks: 2
      },
      Linguistics: {
        ranks: 2
      },
      Perception: {
        ranks: 4
      },
      Stealth: {
        ranks: 4
      }
    },
    special: {
      "soul focus": {
        type: "Su",
        text: "The soul bound to the doll lives within a focus integrated into the doll or its apparel, typically one of the doll's eyes or a gem embedded into its neck or chest. As long as this soul focus remains intact, it can be used to animate another doll, using the same cost as creating a new construct. Once bound into the soul focus, the soul continues to learn. If it is put into a new doll body, the soul retains its personality and memories from its previous bodies. A soul focus has hardness 8, 12 hit points, and a break DC of 20. Susceptible to Mind-Affecting Effects (Ex) Like a soulbound doll, a guardian doll is susceptible to mind-affecting effects. However, due to the singular purpose with which it is imbued, its saves against such effects are made with a +1 racial bonus."
      }
    },
    resistances: [
      "vulnerable to fire"
    ]
  },

  Khala: {
    source: "Irrisen Land Of Eternal Winter",
    creatureType: "dragon",
    subTypes: [
      "cold"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Large",
    hd: 18,
    hdVal: 12,
    cr: 17,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30,
      maneuverability: "Good",
      fly: 90
    },
    abilities: {
      str: 28,
      dex: 22,
      con: 27,
      int: 22,
      wis: 21,
      cha: 25
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Empower Spell-Like Ability",
        type: "Monster",
        value: "Ice storm",
        choiceSource: "Empower Spell-Like Ability"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Hover",
        type: "Monster"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bites",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Staggering Critical",
        type: "Combat"
      },
      {
        name: "Stunning Critical",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "3 Bites",
        specialAbility: "disease",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Tail",
        name: "Tail",
        specialAbility: "grab",
        damage: "2d8"
      }
    ],
    immunities: [
      "Immune to disease, magic paralysis and sleep"
    ],
    defense: {
      naturalArmor: 16
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any cold",
    visualDescription: "This large, snake-like dragon flies on ragged wings. Three hissing, triangular heads bare vicious fangs as the thing's serpentine tail whips about, coiling and uncoiling with manic energy.",
    description: "It is rumored that the khala was a rare breed of amphibious dragon before Baba Yaga came to Golarion. Her arrival and the supernatural winter that came with her warped these once-proud creatures into voracious, wicked things that delight in the suffering of others. Each of a khala's three heads can strike at a separate target, though if two or more heads hit a single target, they cause horrific wounds as they viciously fight to devour chunks of its flesh. Along with suffering terrible injuries, those bitten by a khala risk contracting chillbane fever, a disease unique to Irrisen. The creature can ambulate like a snake, slithering along the ground or through the boughs of trees with its batlike wings drawn close to its body, but it prefers flight whenever possible. The khala's breath weapon, usable by a single head every 1d4 rounds, is a jet of freezing liquid that freezes on contact, trapping the target in ice. All khala are female, and scholars debate how the creature procreates. Some believe that the males of the species, known in legend as the zmey, were wiped out in a war with the khala prior to Baba Yaga's arrival.",
    organization: "solitary",
    languages: "Abyssal, Common, Draconic, Giant, Hallit, Skald",
    spellLikeAbilities: [
      {
        name: "ice storm",
        casterLevel: 16,
        limitations: "Metamagic: Empower ",
        timesPerDay: 3
      },
      {
        name: "fire shield",
        casterLevel: 16,
        limitations: "chill shield only",
        timesPerDay: 3
      },
      {
        name: "incendiary cloud",
        casterLevel: 16,
        limitations: "deals cold damage",
        timesPerDay: 3
      },
      {
        name: "suggestion",
        casterLevel: 16,
        timesPerDay: 3
      },
      {
        name: "control weather",
        casterLevel: 16,
        timesPerDay: 1
      },
      {
        name: "polar ray",
        casterLevel: 16,
        timesPerDay: 1
      }
    ],
    skills: {
      Appraise: {
        ranks: 18
      },
      Bluff: {
        ranks: 18
      },
      Diplomacy: {
        ranks: 18
      },
      Fly: {
        ranks: 18
      },
      Intimidate: {
        ranks: 18
      },
      "Knowledge (geography)": {
        ranks: 18
      },
      "Knowledge (local)": {
        ranks: 18
      },
      "Knowledge (nature)": {
        ranks: 18
      },
      Perception: {
        ranks: 18
      },
      "Sense Motive": {
        ranks: 18
      },
      Stealth: {
        ranks: 18
      },
      Survival: {
        ranks: 18
      }
    },
    special: {
      "breath weapon": {
        type: "Su",
        text: "Every 1d4 rounds, the khala can fire a jet of frigid liquid up to 60 feet in a straight line from one of its three mouths, dealing 16d6 points of cold damage to the target (Reflex DC 27 half). Even if this save is successful, the target must succeed at a second save (Fortitude DC 27) or be encased in ice. A trapped creature must succeed at a DC 25 Strength check or a DC 26 Escape Artist check to break free. Attempting to break free of the ice is a full-round action."
      },
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "2d6+8"
      },
      rend: {
        universalMonsterAbility: "Rend",
        type: "Ex",
        weaponName: 3
      },
      "tenacious grapple": {
        type: "Ex",
        text: "A khala does not gain the grappled condition if it grapples a foe with its tail."
      },
      disease: {
        universalMonsterAbility: "Disease",
        type: "Su",
        text: "A target bitten by a khala must succeed at a DC 27 Fortitude save or contract chillbane fever. Chillbane Fever: disease-injury; save Fort DC 17; onset 1 day; frequency 1/day; effect 1d4 Con damage and target is sickened and fatigued; cure 2 consecutive saves.",
        saveDC: null,
        saveType: "or"
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    },
    resistances: [
      {
        damageType: "acid",
        value: 10
      },
      {
        damageType: "electricity",
        value: 10
      }
    ]
  },

  "Sentinel Hut": {
    source: "Irrisen Land Of Eternal Winter",
    creatureType: "construct",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Huge",
    hd: 10,
    hdVal: 10,
    cr: 8,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 25,
      dex: 17,
      con: "-",
      int: "-",
      wis: 11,
      cha: 16
    },
    feats: [],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "grab",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Slam",
        name: "Slam",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "construct traits",
      "Immune to acid, cold, magic"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "adamantine"
      },
      naturalArmor: 10
    },
    space: "15 ft.",
    reach: "15 ft.",
    environment: "any land (Irrisen)",
    visualDescription: "This strange windowless cabin, with a steep thatched roof and a single door painted red, stands on an enormous pair of knobby legs.",
    description: "Though few have seen Baba Yaga's Dancing Hut and lived to tell the tale, many scholars believe that these bizarre constructs, created by the White Witches of Irrisen, were modeled after their mother's miraculous artifact. Used primarily as sentinels on Irrisen's borders, these quaint hovels on stilt-like legs surprise passersby when they move in an almost comical dancing strut. Construction A sentinel hut must be made of the wood from a tree grown in Irrisen's eternal winter (an extraordinarily rare commodity) and thatch for the roof. Both wood and thatch must be treated with magical ointments and powders worth 1,000 gp. Sentinel Hut CL 10th; Price 33,000 gp CONSTRUCTION Requirements Craft Construct, animate object, cat's grace, confusion, geas/quest, jump, minor creation; Skill Craft (sculptures) DC 18; Cost 18,000 gp",
    organization: "solitary or unit (2-6)",
    spellLikeAbilities: [],
    skills: {},
    special: {
      "stir crazy": {
        type: "Su",
        text: "A victim swallowed whole by a sentinel hut is trapped in a plain, 10-foot-square room. A trapped creature is not considered grappled, and can move freely about the room. Every round, it is bombarded with a powerful psychic force that causes 1d2 points of Wisdom damage. To escape, the victim must deal damage on the sentinel hut's door (AC 15, 12 hp). Damage dealt to any part of the interior other than the door still adds to the damage dealt to the construct overall, but won't free the victim. If sufficient damage is dealt to the hut to destroy it (from without or within), the trapped creature is freed, but must succeed at a DC 22 Will save or be afflicted by insanity (Pathfinder RPG GameMastery Guide 250). Victims who break through the door from within are not subject to this latter effect."
      },
      "swallow whole": {
        universalMonsterAbility: "Swallow Whole",
        damage: "1d2 Wisdom damage",
        hp: "9 hp",
        AC: "AC 15"
      },
      trample: {
        universalMonsterAbility: "Trample",
        damage: "2d6+10",
        saveDC: 10
      },
      "dancing evasion": {
        type: "Ex",
        text: "The sentinel hut's dancing and hopping movements give it a +3 bonus on all Reflex saves. Immune to Magic (Ex) Sentinel huts are immune to any spell or spell-like ability that allows spell resistance, with the exception of spells with the fire descriptor, which affect it normally."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  Ved: {
    source: "Irrisen Land Of Eternal Winter",
    creatureType: "humanoid",
    subTypes: [
      "giant"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Large",
    hd: 6,
    hdVal: 8,
    cr: 5,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 25,
      dex: 8,
      con: 20,
      int: 7,
      wis: 12,
      cha: 9
    },
    feats: [
      {
        name: "Awesome Blow",
        type: "Combat"
      },
      {
        name: "Improved Bull Rush",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Club",
        name: "Club",
        damage: "1d6"
      }
    ],
    defense: {
      naturalArmor: 8
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "cold hills and mountains",
    visualDescription: "This hairy humanoid giant's misshapen head appears too large for its body. It wields a lumpy, primitive club.",
    description: "When Baba Yaga invaded the eastern Linnorm Kingdoms, she brought these ungainly giants with her and left them here to fend for themselves once they had helped her conquer Irrisen. Brutish and rather stupid, these humanoids are clannish and shun even lightly populated areas, preferring the cold hills and mountains of southern Irrisen. Occasionally a gang of veds (often an adult leading two or three adolescents) carries out raids against the mining camps in that region, claiming the lives of half a dozen miners or slaves. But such forced labor is easily replaced, and the Jadwiga overseeing operations in the region don't view these depredations as a serious threat to their extraction industry. Clans of veds rarely consist of more than a few mated pairs, their offspring, and one or two aged specimens that are commonly left to die when they become unable to pull their weight. Veds are omnivores; they prefer meat (eaten raw), but aren't averse to consuming winteryew bark for nourishment. Perhaps the most unusual aspect of veds is their enormous lung capacity, which they are able to use quite aggressively. These giants can expel air from their lungs in a mighty blast, extinguishing small fires and knocking prone any who stand before them. The veds then descend on their victims, pummeling their prey viciously with simple but effective clubs.",
    organization: "solitary, pair, gang (3-5), or clan (6-16)",
    languages: "Giant",
    spellLikeAbilities: [],
    skills: {
      Intimidate: {
        ranks: 5
      },
      Perception: {
        ranks: 5
      },
      Survival: {
        ranks: 1,
        bonuses: [
          {
            source: "inherent",
            value: 4,
            situational: true,
            note: "in snow"
          }
        ]
      },
      Climb: {
        bonuses: [
          {
            source: "inherent",
            value: 4,
            situational: true,
            note: "when climbing rocks"
          }
        ]
      }
    },
    special: {
      "gale breath": {
        type: "Su",
        text: "Every 1d4 rounds as a full-round action, a ved can draw in a mighty breath and expel it outward in a 30-foot cone. Targets within 10 feet of the origin of this cone must succeed at a DC 18 Strength check or be knocked prone. Those who succeed at the check or are standing farther away from the ved treat the effects of the gale breath as a gust of wind spell."
      }
    }
  },

};
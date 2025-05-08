
export const d20pfsrdCreatures = {
  "Adamantine Cobra": {
    source: "d20pfsrd",
    creatureType: "construct",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Small",
    hd: 1,
    hdVal: 10,
    cr: 3,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 12,
      dex: 15,
      con: "-",
      int: "-",
      wis: 11,
      cha: 1
    },
    feats: [],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "poison",
        damage: "1d6",
        type: "primary"
      }
    ],
    immunities: [
      "construct traits"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "-"
      },
      SR: {
        value: 13
      },
      naturalArmor: 12
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "This creature resembles a small, metallic cobra. Its body is made of overlapping metal plates, and its eyes are pinpoints of red light.",
    description: "An adamantine cobra's body is built from 100 pounds of magically treated materials including adamantine armor plates, once slain it can be melted down to yield 3 lbs. Construction An adamantine cobra's body is built from 100 pounds of magically treated materials. Adamantine Cobra CL 7th; Price 8,000 gp Construction Requirements Craft Construct, animate object, discern location, geas/quest; Skill Craft (armor), Craft (blacksmithing), Craft (weapons) DC 15; Cost 10,000 gp",
    organization: "solitary, pair, or nest (3-10)",
    spellLikeAbilities: [],
    skills: {
      Stealth: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 6
          }
        ]
      }
    },
    special: {
      "find target": {
        type: "Su",
        text: "nce per day, an adamantine cobra's creator can order it to find and kill a specific creature within 1 mile, which it does as if guided by discern location. The creator must have seen or be holding an item from the specified creature for this order to function."
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "n adamantine cobra's bite injects poison from a hidden reservoir within its body. Because it is a construct, the cobra does not naturally produce this poison, and its creator must refill this reservoir manually. The reservoir holds enough poison for 3 successful bite attacks, after which the creature merely deals bite damage. Refilling the reservoir takes 5 rounds and provokes attacks of opportunity. The creator can fill the reservoir with any injury poison (typically black adder venom), though acid, alchemical substances, and even stranger liquids have been used. Black Adder Venom: Bite-injury; save Fort DC 11; frequency 1/round for 6 rounds; effect 1d2 Con damage; cure 1 save.",
        saveDC: null
      }
    }
  },

  "Wyrmling Black Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "water"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Tiny",
    hd: 4,
    hdVal: 12,
    cr: 3,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 60,
      maneuverability: "Average",
      fly: 100,
      swim: 60
    },
    abilities: {
      str: 11,
      dex: 16,
      con: 13,
      int: 8,
      wis: 11,
      cha: 8
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Stealth",
        choiceSource: "Skill Focus"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to acid, sleep"
    ],
    defense: {
      naturalArmor: 3
    },
    space: "2.5 ft.",
    reach: "0 ft. (5 ft. with bite)",
    environment: "warm marshes",
    visualDescription: "Hissing green acid drips from the fanged maw of this blackscaled, horned dragon.",
    description: "Lording over the darkest swamps and marshes, black dragons are the undisputed masters of their domain, ruling through cruelty and intimidation. Those who dwell within a black dragon's reach live in fear. Black dragons tend to make their lairs in remote parts of the swamp, preferably in caves at the bottom of dark and fetid pools. Inside, they pile up their filthy treasure and sleep amid the roots and muck. Black dragons prefer their food a bit rotten and will often allow a meal to sit in a pool for days before consuming it. Black dragons prefer treasures that do not rot or decay, making their hoard, full of coins, gemstones, jewelry, and other objects made from stone or metal.",
    organization: "solitary",
    languages: "Draconic",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 4
      },
      Intimidate: {
        ranks: 4
      },
      Perception: {
        ranks: 4
      },
      Stealth: {
        ranks: 4
      },
      Swim: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "30 ft. line",
        damage: "2d6 acid",
        saveDC: 10
      },
      "water breathing": {
        type: "Ex",
        text: "A black dragon can breathe underwater indefinitely and can freely use its breath weapon, spells, and other abilities while submerged."
      }
    }
  },

  "Very Young Black Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "water"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Small",
    hd: 6,
    hdVal: 12,
    cr: 5,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 60,
      maneuverability: "Average",
      fly: 150,
      swim: 60
    },
    abilities: {
      str: 15,
      dex: 14,
      con: 15,
      int: 10,
      wis: 13,
      cha: 10
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Stealth",
        choiceSource: "Skill Focus"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to acid, sleep"
    ],
    defense: {
      naturalArmor: 6
    },
    space: "5 ft.",
    reach: "5 ft. (10 ft. with bite)",
    environment: "warm marshes",
    visualDescription: "Hissing green acid drips from the fanged maw of this black-scaled, horned dragon.",
    description: "Lording over the darkest swamps and marshes, black dragons are the undisputed masters of their domain, ruling through cruelty and intimidation. Those who dwell within a black dragon's reach live in fear. Black dragons tend to make their lairs in remote parts of the swamp, preferably in caves at the bottom of dark and fetid pools. Inside, they pile up their filthy treasure and sleep amid the roots and muck. Black dragons prefer their food a bit rotten and will often allow a meal to sit in a pool for days before consuming it. Black dragons prefer treasures that do not rot or decay, making their hoard, full of coins, gemstones, jewelry, and other objects made from stone or metal.",
    organization: "solitary",
    languages: "Draconic",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 6
      },
      "Handle Animal": {
        ranks: 6
      },
      Intimidate: {
        ranks: 6
      },
      Perception: {
        ranks: 6
      },
      Stealth: {
        ranks: 6
      },
      Swim: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "40 ft. line",
        damage: "4d6 acid",
        saveDC: 10
      },
      "swamp stride": {
        type: "Ex",
        text: "A very young or older black dragon can move through bogs and quicksand without penalty at its normal speed."
      },
      "water breathing": {
        type: "Ex",
        text: "A black dragon can breathe underwater indefinitely and can freely use its breath weapon, spells, and other abilities while submerged."
      }
    }
  },

  "Juvenile Black Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "water"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 10,
    hdVal: 12,
    cr: 8,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 60,
      maneuverability: "Average",
      fly: 150,
      swim: 60
    },
    abilities: {
      str: 21,
      dex: 14,
      con: 19,
      int: 12,
      wis: 15,
      cha: 12
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Stealth",
        choiceSource: "Skill Focus"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Bite",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to acid, sleep"
    ],
    defense: {
      naturalArmor: 12
    },
    space: "5 ft.",
    reach: "5 ft. (10 ft. with bite)",
    environment: "warm marshes",
    visualDescription: "Hissing green acid drips from the fanged maw of this black-scaled, horned dragon.",
    description: "Lording over the darkest swamps and marshes, black dragons are the undisputed masters of their domain, ruling through cruelty and intimidation. Those who dwell within a black dragon's reach live in fear. Black dragons tend to make their lairs in remote parts of the swamp, preferably in caves at the bottom of dark and fetid pools. Inside, they pile up their filthy treasure and sleep amid the roots and muck. Black dragons prefer their food a bit rotten and will often allow a meal to sit in a pool for days before consuming it. Black dragons prefer treasures that do not rot or decay, making their hoard, full of coins, gemstones, jewelry, and other objects made from stone or metal.",
    organization: "solitary",
    languages: "Common, Draconic",
    spellLikeAbilities: [
      {
        name: "darkness",
        casterLevel: 10,
        limitations: "40 ft. radius",
        timesPerDay: -1
      }
    ],
    skills: {
      Fly: {
        ranks: 10
      },
      "Handle Animal": {
        ranks: 10
      },
      Intimidate: {
        ranks: 10
      },
      "Knowledge (arcana)": {
        ranks: 10
      },
      Perception: {
        ranks: 10
      },
      Stealth: {
        ranks: 10
      },
      Swim: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "60 ft. line",
        damage: "8d6 acid",
        saveDC: 11
      },
      "speak with reptiles": {
        type: "Sp",
        text: "A young or older black dragon gains the constant spell-like ability to speak with reptiles. This functions as speak with animals, but only with reptilian animals."
      },
      "swamp stride": {
        type: "Ex",
        text: "A very young or older black dragon can move through bogs and quicksand without penalty at its normal speed."
      },
      "water breathing": {
        type: "Ex",
        text: "A black dragon can breathe underwater indefinitely and can freely use its breath weapon, spells, and other abilities while submerged."
      }
    }
  },

  "Young Adult Black Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "water"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Large",
    hd: 12,
    hdVal: 12,
    cr: 10,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 60,
      maneuverability: "Poor",
      fly: 200,
      swim: 60
    },
    abilities: {
      str: 23,
      dex: 12,
      con: 19,
      int: 12,
      wis: 15,
      cha: 12
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Stealth",
        choiceSource: "Skill Focus"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Bite",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to acid, sleep"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "magic"
      },
      SR: {
        value: 21
      },
      naturalArmor: 15
    },
    space: "10 ft.",
    reach: "5 ft. (10 ft. with bite)",
    environment: "warm marshes",
    visualDescription: "Hissing green acid drips from the fanged maw of this black-scaled, horned dragon.",
    description: "Lording over the darkest swamps and marshes, black dragons are the undisputed masters of their domain, ruling through cruelty and intimidation. Those who dwell within a black dragon's reach live in fear. Black dragons tend to make their lairs in remote parts of the swamp, preferably in caves at the bottom of dark and fetid pools. Inside, they pile up their filthy treasure and sleep amid the roots and muck. Black dragons prefer their food a bit rotten and will often allow a meal to sit in a pool for days before consuming it. Black dragons prefer treasures that do not rot or decay, making their hoard, full of coins, gemstones, jewelry, and other objects made from stone or metal.",
    organization: "solitary",
    languages: "Common, Draconic",
    spellLikeAbilities: [
      {
        name: "darkness",
        casterLevel: 12,
        limitations: "50-ft. radius",
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 1,
      spells: [
        {
          name: "",
          limitations: "4/day",
          level: 1
        },
        {
          name: "obscuring mist",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "mending",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Fly: {
        ranks: 16
      },
      "Handle Animal": {
        ranks: 12
      },
      Intimidate: {
        ranks: 12
      },
      "Knowledge (arcana)": {
        ranks: 12
      },
      Perception: {
        ranks: 12
      },
      Stealth: {
        ranks: 12
      },
      Swim: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "80-ft. line",
        damage: "10d6 acid",
        saveDC: 11
      },
      "speak with reptiles": {
        type: "Sp",
        text: "A young or older black dragon gains the constant spell-like ability to speak with reptiles. This functions as speak with animals, but only with reptilian animals."
      },
      "swamp stride": {
        type: "Ex",
        text: "A very young or older black dragon can move through bogs and quicksand without penalty at its normal speed."
      },
      "water breathing": {
        type: "Ex",
        text: "A black dragon can breathe underwater indefinitely and can freely use its breath weapon, spells, and other abilities while submerged."
      }
    }
  },

  "Mature Adult Black Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "water"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Large",
    hd: 16,
    hdVal: 12,
    cr: 12,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 60,
      maneuverability: "Poor",
      fly: 200,
      swim: 60
    },
    abilities: {
      str: 27,
      dex: 12,
      con: 21,
      int: 14,
      wis: 17,
      cha: 14
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Combat Expertise",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Stealth",
        choiceSource: "Skill Focus"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Bite",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to acid, sleep"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "magic"
      },
      SR: {
        value: 23
      },
      naturalArmor: 21
    },
    space: "10 ft.",
    reach: "5 ft. (10 ft. with bite)",
    environment: "warm marshes",
    visualDescription: "Hissing green acid drips from the fanged maw of this black-scaled, horned dragon.",
    description: "Lording over the darkest swamps and marshes, black dragons are the undisputed masters of their domain, ruling through cruelty and intimidation. Those who dwell within a black dragon's reach live in fear. Black dragons tend to make their lairs in remote parts of the swamp, preferably in caves at the bottom of dark and fetid pools. Inside, they pile up their filthy treasure and sleep amid the roots and muck. Black dragons prefer their food a bit rotten and will often allow a meal to sit in a pool for days before consuming it. Black dragons prefer treasures that do not rot or decay, making their hoard, full of coins, gemstones, jewelry, and other objects made from stone or metal.",
    organization: "solitary",
    languages: "Common, Draconic, Giant",
    spellLikeAbilities: [
      {
        name: "darkness",
        casterLevel: 16,
        limitations: "70-ft. radius",
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 5,
      spells: [
        {
          name: "",
          limitations: "5/day",
          level: 2
        },
        {
          name: "summon swarm ",
          level: 2
        },
        {
          name: "",
          limitations: "7/day",
          level: 1
        },
        {
          name: "mage armor",
          level: 1
        },
        {
          name: "magic missile",
          level: 1
        },
        {
          name: "obscuring mist",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "mending",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Fly: {
        ranks: 20
      },
      "Handle Animal": {
        ranks: 16
      },
      Intimidate: {
        ranks: 16
      },
      "Knowledge (arcana)": {
        ranks: 16
      },
      Perception: {
        ranks: 16
      },
      Spellcraft: {
        ranks: 16
      },
      Stealth: {
        ranks: 16
      },
      Swim: {
        ranks: 3,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "80 ft. line",
        damage: "14d6 acid",
        saveDC: 10
      },
      "corrupt water": {
        type: "Sp",
        text: "Once per day an adult or older black dragon can stagnate 10 cubic feet of still water, making it foul and unable to support water-breathing life. The ability spoils liquids containing water. Liquid-based magic items (such as potions) and items in a creature's possession must succeed on a Will save (DC equal to the dragon's frightful presence) or become ruined. This ability is the equivalent of a 1st-level spell. Its range is equal to that of the dragon's frightful presence."
      },
      "speak with reptiles": {
        type: "Sp",
        text: "A young or older black dragon gains the constant spell-like ability to speak with reptiles. This functions as speak with animals, but only with reptilian animals."
      },
      "swamp stride": {
        type: "Ex",
        text: "A very young or older black dragon can move through bogs and quicksand without penalty at its normal speed."
      },
      "water breathing": {
        type: "Ex",
        text: "A black dragon can breathe underwater indefinitely and can freely use its breath weapon, spells, and other abilities while submerged."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "210 ft."
      }
    }
  },

  "Old Black Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "water"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Huge",
    hd: 18,
    hdVal: 12,
    cr: 14,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 60,
      maneuverability: "Poor",
      fly: 200,
      swim: 60
    },
    abilities: {
      str: 29,
      dex: 10,
      con: 23,
      int: 16,
      wis: 19,
      cha: 16
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Combat Expertise",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Stealth",
        choiceSource: "Skill Focus"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Bite",
        choiceSource: "Weapon Focus"
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
            value: "2d6",
            appliesTo: "damageType",
            damageType: "acid"
          }
        ],
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Tail",
        name: "Tail",
        damage: "2d6"
      }
    ],
    immunities: [
      "Immune to acid, sleep"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "magic"
      },
      SR: {
        value: 25
      },
      naturalArmor: 24
    },
    space: "15 ft.",
    reach: "10 ft. (15 ft. with bite)",
    environment: "warm marshes",
    visualDescription: "Hissing green acid drips from the fanged maw of this black-scaled, horned dragon.",
    description: "Lording over the darkest swamps and marshes, black dragons are the undisputed masters of their domain, ruling through cruelty and intimidation. Those who dwell within a black dragon's reach live in fear. Black dragons tend to make their lairs in remote parts of the swamp, preferably in caves at the bottom of dark and fetid pools. Inside, they pile up their filthy treasure and sleep amid the roots and muck. Black dragons prefer their food a bit rotten and will often allow a meal to sit in a pool for days before consuming it. Black dragons prefer treasures that do not rot or decay, making their hoard, full of coins, gemstones, jewelry, and other objects made from stone or metal.",
    organization: "solitary",
    languages: "Common, Draconic, Giant, Orc",
    spellLikeAbilities: [
      {
        name: "darkness",
        casterLevel: 18,
        limitations: "80-ft. radius",
        timesPerDay: -1
      },
      {
        name: "plant growth",
        casterLevel: 18,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 7,
      spells: [
        {
          name: "",
          limitations: "5/day",
          level: 3
        },
        {
          name: "heroism ",
          level: 3
        },
        {
          name: "",
          limitations: "7/day",
          level: 2
        },
        {
          name: "glitterdust",
          level: 2
        },
        {
          name: "summon swarm ",
          level: 2
        },
        {
          name: "",
          limitations: "7/day",
          level: 1
        },
        {
          name: "mage armor",
          level: 1
        },
        {
          name: "magic missile",
          level: 1
        },
        {
          name: "obscuring mist",
          level: 1
        },
        {
          name: "true strike",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "mending",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Fly: {
        ranks: 22
      },
      "Handle Animal": {
        ranks: 18
      },
      Intimidate: {
        ranks: 18
      },
      "Knowledge (arcana)": {
        ranks: 18
      },
      "Knowledge (history)": {
        ranks: 18
      },
      Perception: {
        ranks: 18
      },
      Spellcraft: {
        ranks: 18
      },
      Stealth: {
        ranks: 18
      },
      Swim: {
        ranks: 10
      }
    },
    special: {
      "acidic bite": {
        type: "Su",
        text: "At old age, a black dragon's bite deals an additional 2d6 points of acid damage. An ancient dragon's damage increases to 4d6, and a great wrym's to 6d6."
      },
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "100-ft. line",
        damage: "16d6 acid",
        saveDC: 10
      },
      "corrupt water": {
        type: "Sp",
        text: "Once per day an adult or older black dragon can stagnate 10 cubic feet of still water, making it foul and unable to support water-breathing life. The ability spoils liquids containing water. Liquid-based magic items (such as potions) and items in a creature's possession must succeed on a Will save (DC equal to the dragon's frightful presence) or become ruined. This ability is the equivalent of a 1st-level spell. Its range is equal to that of the dragon's frightful presence. Crush (Ex) A flying or jumping Huge or larger dragon can land on foes as a standard action, using its whole body to crush them. Crush attacks are effective only against opponents three or more size categories smaller than the dragon. A crush attack affects as many creatures as fit in the dragon's space. Creatures in the affected area must succeed on a Reflex save (DC equal to that of the dragon's breath weapon) or be pinned, automatically taking bludgeoning damage during the next round unless the dragon moves off them. If the dragon chooses to maintain the pin, it must succeed at a combat maneuver check as normal. Pinned foes take damage from the crush each round if they don't escape. A crush attack deals the indicated damage plus 1-1/2 times the dragon's Strength bonus. Speak with Reptiles (Sp) A young or older black dragon gains the constant spell-like ability to speak with reptiles. This functions as speak with animals, but only with reptilian animals. Swamp Stride (Ex) A very young or older black dragon can move through bogs and quicksand without penalty at its normal speed. Water Breathing (Ex) A black dragon can breathe underwater indefinitely and can freely use its breath weapon, spells, and other abilities while submerged."
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "2d8+13",
        text: "A flying or jumping Huge or larger dragon can land on foes as a standard action, using its whole body to crush them. Crush attacks are effective only against opponents three or more size categories smaller than the dragon. A crush attack affects as many creatures as fit in the dragon's space. Creatures in the affected area must succeed on a Reflex save (DC equal to that of the dragon's breath weapon) or be pinned, automatically taking bludgeoning damage during the next round unless the dragon moves off them. If the dragon chooses to maintain the pin, it must succeed at a combat maneuver check as normal. Pinned foes take damage from the crush each round if they don't escape. A crush attack deals the indicated damage plus 1-1/2 times the dragon's Strength bonus. Speak with Reptiles (Sp) A young or older black dragon gains the constant spell-like ability to speak with reptiles. This functions as speak with animals, but only with reptilian animals. Swamp Stride (Ex) A very young or older black dragon can move through bogs and quicksand without penalty at its normal speed. Water Breathing (Ex) A black dragon can breathe underwater indefinitely and can freely use its breath weapon, spells, and other abilities while submerged."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "240 ft."
      }
    }
  },

  "Very Old Black Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "water"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Huge",
    hd: 20,
    hdVal: 12,
    cr: 15,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 60,
      maneuverability: "Poor",
      fly: 200,
      swim: 60
    },
    abilities: {
      str: 31,
      dex: 10,
      con: 23,
      int: 16,
      wis: 19,
      cha: 16
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Combat Expertise",
        type: "Combat"
      },
      {
        name: "Greater Vital Strike",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Stealth",
        choiceSource: "Skill Focus"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Bite",
        choiceSource: "Weapon Focus"
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
            value: "2d6",
            appliesTo: "damageType",
            damageType: "acid"
          }
        ],
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to acid, sleep"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "magic"
      },
      SR: {
        value: 26
      },
      naturalArmor: 27
    },
    space: "15 ft.",
    reach: "10 ft. (15 ft. with bite)",
    environment: "warm marshes",
    visualDescription: "Hissing green acid drips from the fanged maw of this black-scaled, horned dragon.",
    description: "Lording over the darkest swamps and marshes, black dragons are the undisputed masters of their domain, ruling through cruelty and intimidation. Those who dwell within a black dragon's reach live in fear. Black dragons tend to make their lairs in remote parts of the swamp, preferably in caves at the bottom of dark and fetid pools. Inside, they pile up their filthy treasure and sleep amid the roots and muck. Black dragons prefer their food a bit rotten and will often allow a meal to sit in a pool for days before consuming it. Black dragons prefer treasures that do not rot or decay, making their hoard, full of coins, gemstones, jewelry, and other objects made from stone or metal.",
    organization: "solitary",
    languages: "Common, Draconic, Giant, Orc",
    spellLikeAbilities: [
      {
        name: "darkness",
        casterLevel: 20,
        limitations: "90-ft. radius",
        timesPerDay: -1
      },
      {
        name: "plant growth",
        casterLevel: 20,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 9,
      spells: [
        {
          name: "",
          limitations: "4/day",
          level: 4
        },
        {
          name: "dimension door ",
          level: 4
        },
        {
          name: "",
          limitations: "7/day",
          level: 3
        },
        {
          name: "heroism",
          level: 3
        },
        {
          name: "hold person ",
          level: 3
        },
        {
          name: "",
          limitations: "7/day",
          level: 2
        },
        {
          name: "glitterdust",
          level: 2
        },
        {
          name: "invisibility",
          level: 2
        },
        {
          name: "summon swarm ",
          level: 2
        },
        {
          name: "",
          limitations: "7/day",
          level: 1
        },
        {
          name: "mage armor",
          level: 1
        },
        {
          name: "magic missile",
          level: 1
        },
        {
          name: "obscuring mist",
          level: 1
        },
        {
          name: "true strike",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "light",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "mending",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Fly: {
        ranks: 24
      },
      "Handle Animal": {
        ranks: 20
      },
      Intimidate: {
        ranks: 20
      },
      "Knowledge (arcana)": {
        ranks: 20
      },
      "Knowledge (history)": {
        ranks: 20
      },
      Perception: {
        ranks: 20
      },
      Spellcraft: {
        ranks: 20
      },
      Stealth: {
        ranks: 20
      },
      Swim: {
        ranks: 4,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      "acidic bite": {
        type: "Su",
        text: "At old age, a black dragon's bite deals an additional 2d6 points of acid damage. An ancient dragon's damage increases to 4d6, and a great wrym's to 6d6."
      },
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "100-ft. line",
        damage: "18d6 acid",
        saveDC: 10
      },
      "corrupt water": {
        type: "Sp",
        text: "Once per day an adult or older black dragon can stagnate 10 cubic feet of still water, making it foul and unable to support water-breathing life. The ability spoils liquids containing water. Liquid-based magic items (such as potions) and items in a creature's possession must succeed on a Will save (DC equal to the dragon's frightful presence) or become ruined. This ability is the equivalent of a 1st-level spell. Its range is equal to that of the dragon's frightful presence. Crush (Ex) A flying or jumping Huge or larger dragon can land on foes as a standard action, using its whole body to crush them. Crush attacks are effective only against opponents three or more size categories smaller than the dragon. A crush attack affects as many creatures as fit in the dragon's space. Creatures in the affected area must succeed on a Reflex save (DC equal to that of the dragon's breath weapon) or be pinned, automatically taking bludgeoning damage during the next round unless the dragon moves off them. If the dragon chooses to maintain the pin, it must succeed at a combat maneuver check as normal. Pinned foes take damage from the crush each round if they don't escape. A crush attack deals the indicated damage plus 1-1/2 times the dragon's Strength bonus."
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "2d8+15",
        saveDC: 10,
        text: "A flying or jumping Huge or larger dragon can land on foes as a standard action, using its whole body to crush them. Crush attacks are effective only against opponents three or more size categories smaller than the dragon. A crush attack affects as many creatures as fit in the dragon's space. Creatures in the affected area must succeed on a Reflex save (DC equal to that of the dragon's breath weapon) or be pinned, automatically taking bludgeoning damage during the next round unless the dragon moves off them. If the dragon chooses to maintain the pin, it must succeed at a combat maneuver check as normal. Pinned foes take damage from the crush each round if they don't escape. A crush attack deals the indicated damage plus 1-1/2 times the dragon's Strength bonus."
      },
      "speak with reptiles": {
        type: "Sp",
        text: "A young or older black dragon gains the constant spell-like ability to speak with reptiles. This functions as speak with animals, but only with reptilian animals."
      },
      "swamp stride": {
        type: "Ex",
        text: "A very young or older black dragon can move through bogs and quicksand without penalty at its normal speed."
      },
      "water breathing": {
        type: "Ex",
        text: "A black dragon can breathe underwater indefinitely and can freely use its breath weapon, spells, and other abilities while submerged."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "270 ft."
      }
    }
  },

  "Wyrm Black Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "water"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Huge",
    hd: 24,
    hdVal: 12,
    cr: 17,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 60,
      maneuverability: "Poor",
      fly: 200,
      swim: 60
    },
    abilities: {
      str: 35,
      dex: 8,
      con: 25,
      int: 18,
      wis: 21,
      cha: 18
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Combat Expertise",
        type: "Combat"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Greater Vital Strike",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Natural Attack",
        type: "Monster",
        value: "Bite",
        choiceSource: "Improved Natural Attack"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Stealth",
        choiceSource: "Skill Focus"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Bite",
        choiceSource: "Weapon Focus"
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
            value: "4d6",
            appliesTo: "damageType",
            damageType: "acid"
          }
        ],
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to acid, sleep"
    ],
    defense: {
      DR: {
        value: 20,
        damageType: "magic"
      },
      SR: {
        value: 28
      },
      naturalArmor: 33
    },
    space: "15 ft.",
    reach: "10 ft. (15 ft. with bite)",
    environment: "warm marshes",
    visualDescription: "Hissing green acid drips from the fanged maw of this black-scaled, horned dragon.",
    description: "Lording over the darkest swamps and marshes, black dragons are the undisputed masters of their domain, ruling through cruelty and intimidation. Those who dwell within a black dragon's reach live in fear. Black dragons tend to make their lairs in remote parts of the swamp, preferably in caves at the bottom of dark and fetid pools. Inside, they pile up their filthy treasure and sleep amid the roots and muck. Black dragons prefer their food a bit rotten and will often allow a meal to sit in a pool for days before consuming it. Black dragons prefer treasures that do not rot or decay, making their hoard, full of coins, gemstones, jewelry, and other objects made from stone or metal.",
    organization: "solitary",
    languages: "Common, Draconic, Giant, Goblin, Orc",
    spellLikeAbilities: [
      {
        name: "darkness",
        casterLevel: 24,
        limitations: "110-ft. radius",
        timesPerDay: -1
      },
      {
        name: "insect plague",
        casterLevel: 24,
        timesPerDay: -1
      },
      {
        name: "plant growth",
        casterLevel: 24,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 13,
      spells: [
        {
          name: "",
          limitations: "4/day",
          level: 6
        },
        {
          name: "contingency ",
          level: 6
        },
        {
          name: "(6/day)-cone of cold",
          limitations: "6/day",
          level: 5
        },
        {
          name: "dominate person",
          level: 5
        },
        {
          name: "wall of force ",
          level: 5
        },
        {
          name: "",
          limitations: "7/day",
          level: 4
        },
        {
          name: "black tentacles",
          level: 4
        },
        {
          name: "dimension door",
          level: 4
        },
        {
          name: "enervation ",
          level: 4
        },
        {
          name: "",
          limitations: "7/day",
          level: 3
        },
        {
          name: "heroism",
          level: 3
        },
        {
          name: "hold person",
          level: 3
        },
        {
          name: "slow",
          level: 3
        },
        {
          name: "",
          limitations: "7/day",
          level: 2
        },
        {
          name: "glitterdust",
          level: 2
        },
        {
          name: "invisibility",
          level: 2
        },
        {
          name: "summon swarm",
          level: 2
        },
        {
          name: "whispering wind ",
          level: 2
        },
        {
          name: "",
          limitations: "7/day",
          level: 1
        },
        {
          name: "mage armor",
          level: 1
        },
        {
          name: "magic missile",
          level: 1
        },
        {
          name: "obscuring mist",
          level: 1
        },
        {
          name: "true strike",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "light",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "mending",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        },
        {
          name: "resistance",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Fly: {
        ranks: 28
      },
      "Handle Animal": {
        ranks: 24
      },
      Intimidate: {
        ranks: 24
      },
      "Knowledge (arcana)": {
        ranks: 24
      },
      "Knowledge (history)": {
        ranks: 24
      },
      "Knowledge (geography)": {
        ranks: 24
      },
      Perception: {
        ranks: 22
      },
      Stealth: {
        ranks: 24
      },
      Swim: {
        ranks: 8,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      "acid pool": {
        type: "Su",
        text: "An ancient or older black dragon can use its breath weapon to create an acid pool as a standard action. This acid pool has a radius of 55 feet. When an acid pool is created, anyone inside its area takes 22d6 points of acid damage (Reflex half). Any creature that starts its turn touching this pool takes damage, but can make a Reflex save for half. Each round, the total damage dice of the pool is halved (10d6 round 2, 5d6 round 3, 2d6 round 4, 1d6 round 5) until the result would be less than 1d6. The acid pool floats on water, and deals damage to anything on the surface.",
        preText: "55-ft. radius"
      },
      "acidic bite": {
        type: "Su",
        text: "At old age, a black dragon's bite deals an additional 2d6 points of acid damage. An ancient dragon's damage increases to 4d6, and a great wrym's to 6d6."
      },
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "100-ft. line",
        damage: "22d6 acid",
        saveDC: 10
      },
      "corrupt water": {
        type: "Sp",
        text: "Once per day an adult or older black dragon can stagnate 10 cubic feet of still water, making it foul and unable to support water-breathing life. The ability spoils liquids containing water. Liquid-based magic items (such as potions) and items in a creature's possession must succeed on a Will save (DC equal to the dragon's frightful presence) or become ruined. This ability is the equivalent of a 1st-level spell. Its range is equal to that of the dragon's frightful presence. Crush (Ex) A flying or jumping Huge or larger dragon can land on foes as a standard action, using its whole body to crush them. Crush attacks are effective only against opponents three or more size categories smaller than the dragon. A crush attack affects as many creatures as fit in the dragon's space. Creatures in the affected area must succeed on a Reflex save (DC equal to that of the dragon's breath weapon) or be pinned, automatically taking bludgeoning damage during the next round unless the dragon moves off them. If the dragon chooses to maintain the pin, it must succeed at a combat maneuver check as normal. Pinned foes take damage from the crush each round if they don't escape. A crush attack deals the indicated damage plus 1-1/2 times the dragon's Strength bonus."
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "2d8+18",
        saveDC: 10,
        text: "A flying or jumping Huge or larger dragon can land on foes as a standard action, using its whole body to crush them. Crush attacks are effective only against opponents three or more size categories smaller than the dragon. A crush attack affects as many creatures as fit in the dragon's space. Creatures in the affected area must succeed on a Reflex save (DC equal to that of the dragon's breath weapon) or be pinned, automatically taking bludgeoning damage during the next round unless the dragon moves off them. If the dragon chooses to maintain the pin, it must succeed at a combat maneuver check as normal. Pinned foes take damage from the crush each round if they don't escape. A crush attack deals the indicated damage plus 1-1/2 times the dragon's Strength bonus."
      },
      "speak with reptiles": {
        type: "Sp",
        text: "A young or older black dragon gains the constant spell-like ability to speak with reptiles. This functions as speak with animals, but only with reptilian animals."
      },
      "swamp stride": {
        type: "Ex",
        text: "A very young or older black dragon can move through bogs and quicksand without penalty at its normal speed."
      },
      "water breathing": {
        type: "Ex",
        text: "A black dragon can breathe underwater indefinitely and can freely use its breath weapon, spells, and other abilities while submerged."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "330 ft."
      }
    }
  },

  "Great Wyrm Black Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "water"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Gargantuan",
    hd: 26,
    hdVal: 12,
    cr: 19,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 60,
      maneuverability: "Clumsy",
      fly: 250,
      swim: 60
    },
    abilities: {
      str: 37,
      dex: 8,
      con: 27,
      int: 20,
      wis: 23,
      cha: 20
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Combat Expertise",
        type: "Combat"
      },
      {
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Greater Vital Strike",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Natural Attack",
        type: "Monster",
        value: "Bite",
        choiceSource: "Improved Natural Attack"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Stealth",
        choiceSource: "Skill Focus"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Bite",
        choiceSource: "Weapon Focus"
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
            value: "6d6",
            appliesTo: "damageType",
            damageType: "acid"
          }
        ],
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to acid, sleep"
    ],
    defense: {
      DR: {
        value: 20,
        damageType: "magic"
      },
      SR: {
        value: 30
      },
      naturalArmor: 36
    },
    space: "20 ft.",
    reach: "15 ft. (20 ft. with bite)",
    environment: "warm marshes",
    visualDescription: "Hissing green acid drips from the fanged maw of this black-scaled, horned dragon.",
    description: "Lording over the darkest swamps and marshes, black dragons are the undisputed masters of their domain, ruling through cruelty and intimidation. Those who dwell within a black dragon's reach live in fear. Black dragons tend to make their lairs in remote parts of the swamp, preferably in caves at the bottom of dark and fetid pools. Inside, they pile up their filthy treasure and sleep amid the roots and muck. Black dragons prefer their food a bit rotten and will often allow a meal to sit in a pool for days before consuming it. Black dragons prefer treasures that do not rot or decay, making their hoard, full of coins, gemstones, jewelry, and other objects made from stone or metal.",
    organization: "solitary",
    languages: "Common, Draconic, Giant, Goblin, Orc",
    spellLikeAbilities: [
      {
        name: "darkness",
        casterLevel: 26,
        limitations: "120-ft. radius",
        timesPerDay: -1
      },
      {
        name: "insect plague",
        casterLevel: 26,
        timesPerDay: -1
      },
      {
        name: "plant growth",
        casterLevel: 26,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 15,
      spells: [
        {
          name: "",
          limitations: "4/day",
          level: 7
        },
        {
          name: "power word blind ",
          level: 7
        },
        {
          name: "",
          limitations: "6/day",
          level: 6
        },
        {
          name: "contingency",
          level: 6
        },
        {
          name: "disintegrate ",
          level: 6
        },
        {
          name: "(7/day)-cone of cold",
          limitations: "7/day",
          level: 5
        },
        {
          name: "dominate person",
          level: 5
        },
        {
          name: "wall of force",
          level: 5
        },
        {
          name: "waves of fatigue ",
          level: 5
        },
        {
          name: "",
          limitations: "7/day",
          level: 4
        },
        {
          name: "black tentacles",
          level: 4
        },
        {
          name: "dimension door",
          level: 4
        },
        {
          name: "enervation ",
          level: 4
        },
        {
          name: "",
          limitations: "7/day",
          level: 3
        },
        {
          name: "heroism",
          level: 3
        },
        {
          name: "hold person",
          level: 3
        },
        {
          name: "slow",
          level: 3
        },
        {
          name: "",
          limitations: "7/day",
          level: 2
        },
        {
          name: "glitterdust",
          level: 2
        },
        {
          name: "invisibility",
          level: 2
        },
        {
          name: "summon swarm",
          level: 2
        },
        {
          name: "whispering wind ",
          level: 2
        },
        {
          name: "",
          limitations: "8/day",
          level: 1
        },
        {
          name: "mage armor",
          level: 1
        },
        {
          name: "magic missile",
          level: 1
        },
        {
          name: "obscuring mist",
          level: 1
        },
        {
          name: "true strike",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "light",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "mending",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        },
        {
          name: "resistance",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Fly: {
        ranks: 36
      },
      "Handle Animal": {
        ranks: 26
      },
      Intimidate: {
        ranks: 26
      },
      "Knowledge (arcana)": {
        ranks: 26
      },
      "Knowledge (history)": {
        ranks: 26
      },
      "Knowledge (geography)": {
        ranks: 26
      },
      Perception: {
        ranks: 26
      },
      Spellcraft: {
        ranks: 26
      },
      Stealth: {
        ranks: 26
      },
      Survival: {
        ranks: 26
      },
      Swim: {
        ranks: 10,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      "acid pool": {
        type: "Su",
        text: "An ancient or older black dragon can use its breath weapon to create an acid pool as a standard action. This acid pool has a radius of 60 feet. When an acid pool is created, anyone inside its area takes 24d6 points of acid damage (Reflex half). Any creature that starts its turn touching this pool takes damage, but can make a Reflex save for half. Each round, the total damage dice of the pool is halved (10d6 round 2, 5d6 round 3, 2d6 round 4, 1d6 round 5) until the result would be less than 1d6. The acid pool floats on water, and deals damage to anything on the surface.",
        preText: "60-ft. radius"
      },
      "acidic bite": {
        type: "Su",
        text: "At old age, a black dragon's bite deals an additional 2d6 points of acid damage. An ancient dragon's damage increases to 4d6, and a great wrym's to 6d6."
      },
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "120-ft. line",
        damage: "24d6 acid",
        saveDC: 10
      },
      "corrupt water": {
        type: "Sp",
        text: "Once per day an adult or older black dragon can stagnate 10 cubic feet of still water, making it foul and unable to support water-breathing life. The ability spoils liquids containing water. Liquid-based magic items (such as potions) and items in a creature's possession must succeed on a Will save (DC equal to the dragon's frightful presence) or become ruined. This ability is the equivalent of a 1st-level spell. Its range is equal to that of the dragon's frightful presence. Crush (Ex) A flying or jumping Huge or larger dragon can land on foes as a standard action, using its whole body to crush them. Crush attacks are effective only against opponents three or more size categories smaller than the dragon. A crush attack affects as many creatures as fit in the dragon's space. Creatures in the affected area must succeed on a Reflex save (DC equal to that of the dragon's breath weapon) or be pinned, automatically taking bludgeoning damage during the next round unless the dragon moves off them. If the dragon chooses to maintain the pin, it must succeed at a combat maneuver check as normal. Pinned foes take damage from the crush each round if they don't escape. A crush attack deals the indicated damage plus 1-1/2 times the dragon's Strength bonus."
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "4d6+19",
        saveDC: 10,
        text: "A flying or jumping Huge or larger dragon can land on foes as a standard action, using its whole body to crush them. Crush attacks are effective only against opponents three or more size categories smaller than the dragon. A crush attack affects as many creatures as fit in the dragon's space. Creatures in the affected area must succeed on a Reflex save (DC equal to that of the dragon's breath weapon) or be pinned, automatically taking bludgeoning damage during the next round unless the dragon moves off them. If the dragon chooses to maintain the pin, it must succeed at a combat maneuver check as normal. Pinned foes take damage from the crush each round if they don't escape. A crush attack deals the indicated damage plus 1-1/2 times the dragon's Strength bonus."
      },
      "tail sweep": {
        universalMonsterAbility: "Tail Sweep",
        damage: "2d6+19",
        saveDC: 10,
        text: "This allows a Gargantuan or larger dragon to sweep with its tail as a standard action. The sweep affects a half-circle with a radius of 30 feet (or 40 feet for a Colossal dragon), extending from an intersection on the edge of the dragon's space in any direction. Creatures within the swept area are affected if they are four or more size categories smaller than the dragon. A tail sweep automatically deals the indicated damage plus 1-1/2 times the dragon's Strength bonus (round down). Affected creatures can attempt Reflex saves to take half damage (DC equal to that of the dragon's breath weapon)."
      },
      "charm reptiles": {
        type: "Sp",
        text: "A great wyrm black dragon can use this ability three times per day. It works as a mass charm monster spell that affects only reptilian animals. This ability is the equivalent of an 8th-level spell."
      },
      "speak with reptiles": {
        type: "Sp",
        text: "A young or older black dragon gains the constant spell-like ability to speak with reptiles. This functions as speak with animals, but only with reptilian animals."
      },
      "swamp stride": {
        type: "Ex",
        text: "A very young or older black dragon can move through bogs and quicksand without penalty at its normal speed. Tail Sweep (Ex) This allows a Gargantuan or larger dragon to sweep with its tail as a standard action. The sweep affects a half-circle with a radius of 30 feet (or 40 feet for a Colossal dragon), extending from an intersection on the edge of the dragon's space in any direction. Creatures within the swept area are affected if they are four or more size categories smaller than the dragon. A tail sweep automatically deals the indicated damage plus 1-1/2 times the dragon's Strength bonus (round down). Affected creatures can attempt Reflex saves to take half damage (DC equal to that of the dragon's breath weapon)."
      },
      "water breathing": {
        type: "Ex",
        text: "A black dragon can breathe underwater indefinitely and can freely use its breath weapon, spells, and other abilities while submerged."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "360 ft."
      }
    }
  },

  "Wyrmling Blue Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "earth"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Small",
    hd: 6,
    hdVal: 12,
    cr: 5,
    racialFeatures: [
      "Dragon Senses",
      "Perception +9"
    ],
    speed: {
      base: 40,
      burrow: 20,
      maneuverability: "Average",
      fly: 150
    },
    abilities: {
      str: 13,
      dex: 14,
      con: 13,
      int: 10,
      wis: 11,
      cha: 10
    },
    feats: [
      {
        name: "Dazzling Display",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Bite",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to electricity, sleep"
    ],
    defense: {
      naturalArmor: 5
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "warm deserts",
    visualDescription: "With scales the color of the desert sky, this large, serpentine dragon moves with an unsettling grace.",
    description: "Blue dragons are consummate schemers and obsessively orderly. In combat, blue dragons prefer to surprise foes if possible, and are not above retreating if the odds turn against them. They prefer to lair near those that they control, sometimes even within the confines of a city.",
    organization: "solitary",
    languages: "Draconic",
    spellLikeAbilities: [],
    skills: {
      Bluff: {
        ranks: 6
      },
      Fly: {
        ranks: 6
      },
      Intimidate: {
        ranks: 6
      },
      "Knowledge (local)": {
        ranks: 6
      },
      Perception: {
        ranks: 6
      },
      Stealth: {
        ranks: 6
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "40-ft. line",
        damage: "2d8 electricity",
        saveDC: 10
      },
      "desert thirst": {
        type: "Su",
        text: "A blue dragon can cast create water at will (CL 6). Alternatively, it can destroy an equal amount of liquid in a 10-foot burst. Unattended liquids are instantly reduced to sand. Liquid-based magic items (such as potions) and items in a creature's possession must succeed on a Will save (DC 14) or be destroyed.",
        preText: "DC 14"
      }
    }
  },

  "Very Young Blue Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "earth"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Medium",
    hd: 8,
    hdVal: 12,
    cr: 7,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 40,
      burrow: 20,
      maneuverability: "Average",
      fly: 150
    },
    abilities: {
      str: 17,
      dex: 12,
      con: 15,
      int: 12,
      wis: 13,
      cha: 12
    },
    feats: [
      {
        name: "Dazzling Display",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Bite",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to electricity, sleep"
    ],
    defense: {
      naturalArmor: 8
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "warm deserts",
    visualDescription: "With scales the color of the desert sky, this large, serpentine dragon moves with an unsettling grace.",
    description: "Blue dragons are consummate schemers and obsessively orderly. In combat, blue dragons prefer to surprise foes if possible, and are not above retreating if the odds turn against them. They prefer to lair near those that they control, sometimes even within the confines of a city.",
    organization: "solitary",
    languages: "Common, Draconic",
    spellLikeAbilities: [],
    skills: {
      Bluff: {
        ranks: 8
      },
      Fly: {
        ranks: 8
      },
      Intimidate: {
        ranks: 8
      },
      "Knowledge (local)": {
        ranks: 8
      },
      Perception: {
        ranks: 8
      },
      Stealth: {
        ranks: 8
      },
      Survival: {
        ranks: 8
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "60-ft. line",
        damage: "4d8 electricity",
        saveDC: 10
      },
      "desert thirst": {
        type: "Su",
        text: "A blue dragon can cast create water at will (CL 8). Alternatively, it can destroy an equal amount of liquid in a 10-foot burst. Unattended liquids are instantly reduced to sand. Liquid-based magic items (such as potions) and items in a creature's possession must succeed on a Will save (DC 16) or be destroyed. Sound Imitation (Ex) A very young or older blue dragon can mimic any voice or sound it has heard by making a successful Bluff check against a listener's Sense Motive check.",
        preText: "DC 16"
      }
    }
  },

  "Juvenile Blue Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "earth"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Large",
    hd: 12,
    hdVal: 12,
    cr: 10,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 40,
      burrow: 20,
      maneuverability: "Poor",
      fly: 200
    },
    abilities: {
      str: 23,
      dex: 12,
      con: 19,
      int: 14,
      wis: 15,
      cha: 14
    },
    feats: [
      {
        name: "Combat Casting",
        type: "General"
      },
      {
        name: "Dazzling Display",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Shatter Defenses",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Bite",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to electricity, sleep"
    ],
    defense: {
      naturalArmor: 14
    },
    space: "10 ft.",
    reach: "5 ft. (10 ft. with bite)",
    environment: "warm deserts",
    visualDescription: "With scales the color of the desert sky, this large, serpentine dragon moves with an unsettling grace.",
    description: "Blue dragons are consummate schemers and obsessively orderly. In combat, blue dragons prefer to surprise foes if possible, and are not above retreating if the odds turn against them. They prefer to lair near those that they control, sometimes even within the confines of a city.",
    organization: "solitary",
    languages: "Auran, Common, Draconic",
    spellLikeAbilities: [
      {
        name: "ghost sound",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "minor image",
        casterLevel: 12,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 1,
      spells: [
        {
          name: "",
          limitations: "4/day",
          level: 1
        },
        {
          name: "true strike",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        },
        {
          name: "resistance",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Bluff: {
        ranks: 12
      },
      Fly: {
        ranks: 12
      },
      Intimidate: {
        ranks: 12
      },
      "Knowledge (local)": {
        ranks: 12
      },
      Perception: {
        ranks: 12
      },
      Spellcraft: {
        ranks: 12
      },
      Stealth: {
        ranks: 12
      },
      Survival: {
        ranks: 12
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "80-ft. line",
        damage: "8d8 electricity",
        saveDC: 10
      },
      "desert thirst": {
        type: "Su",
        text: "A blue dragon can cast create water at will (CL 12). Alternatively, it can destroy an equal amount of liquid in a 10-foot burst. Unattended liquids are instantly reduced to sand. Liquid-based magic items (such as potions) and items in a creature's possession must succeed on a Will save (DC 20) or be destroyed. Sound Imitation (Ex) A very young or older blue dragon can mimic any voice or sound it has heard by making a successful Bluff check against a listener's Sense Motive check.",
        preText: "DC 20"
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "120 ft."
      }
    }
  },

  "Young Adult Blue Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "earth"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Huge",
    hd: 14,
    hdVal: 12,
    cr: 12,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 40,
      burrow: 20,
      maneuverability: "Poor",
      fly: 200
    },
    abilities: {
      str: 25,
      dex: 10,
      con: 19,
      int: 14,
      wis: 15,
      cha: 14
    },
    feats: [
      {
        name: "Combat Casting",
        type: "General"
      },
      {
        name: "Dazzling Display",
        type: "Combat"
      },
      {
        name: "Hover",
        type: "Monster"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Shatter Defenses",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Bite",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to electricity, sleep"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "magic"
      },
      SR: {
        value: 23
      },
      naturalArmor: 17
    },
    space: "15 ft.",
    reach: "10 ft. (15 ft. with bite)",
    environment: "warm deserts",
    visualDescription: "With scales the color of the desert sky, this large, serpentine dragon moves with an unsettling grace.",
    description: "Blue dragons are consummate schemers and obsessively orderly. In combat, blue dragons prefer to surprise foes if possible, and are not above retreating if the odds turn against them. They prefer to lair near those that they control, sometimes even within the confines of a city.",
    organization: "solitary",
    languages: "Auran, Common, Draconic",
    spellLikeAbilities: [
      {
        name: "ghost sound",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "minor image",
        casterLevel: 14,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 3,
      spells: [
        {
          name: "",
          limitations: "6/day",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "true strike",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        },
        {
          name: "resistance",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Bluff: {
        ranks: 14
      },
      Fly: {
        ranks: 14
      },
      Intimidate: {
        ranks: 14
      },
      "Knowledge (local)": {
        ranks: 14
      },
      Perception: {
        ranks: 14
      },
      Spellcraft: {
        ranks: 14
      },
      Stealth: {
        ranks: 14
      },
      Survival: {
        ranks: 14
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "100-ft. line",
        damage: "10d8 electricity",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "2d8+10",
        saveDC: 10
      },
      "desert thirst": {
        type: "Su",
        text: "A blue dragon can cast create water at will (CL 14). Alternatively, it can destroy an equal amount of liquid in a 10-foot burst. Unattended liquids are instantly reduced to sand. Liquid-based magic items (such as potions) and items in a creature's possession must succeed on a Will save (DC 21) or be destroyed. Sound Imitation (Ex) A very young or older blue dragon can mimic any voice or sound it has heard by making a successful Bluff check against a listener's Sense Motive check.",
        preText: "DC 21"
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "150 ft."
      }
    }
  },

  "Mature Adult Blue Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "earth"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Huge",
    hd: 18,
    hdVal: 12,
    cr: 14,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 40,
      burrow: 20,
      maneuverability: "Poor",
      fly: 200
    },
    abilities: {
      str: 29,
      dex: 10,
      con: 21,
      int: 16,
      wis: 17,
      cha: 16
    },
    feats: [
      {
        name: "Combat Casting",
        type: "General"
      },
      {
        name: "Dazzling Display",
        type: "Combat"
      },
      {
        name: "Deadly Stroke",
        type: "Combat"
      },
      {
        name: "Extend Spell",
        type: "Metamagic"
      },
      {
        name: "Hover",
        type: "Monster"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Shatter Defenses",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Bite",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to electricity, sleep"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "magic"
      },
      SR: {
        value: 25
      },
      naturalArmor: 23
    },
    space: "15 ft.",
    reach: "10 ft. (15 ft. with bite)",
    environment: "warm deserts",
    visualDescription: "With scales the color of the desert sky, this large, serpentine dragon moves with an unsettling grace.",
    description: "Blue dragons are consummate schemers and obsessively orderly. In combat, blue dragons prefer to surprise foes if possible, and are not above retreating if the odds turn against them. They prefer to lair near those that they control, sometimes even within the confines of a city.",
    organization: "solitary",
    languages: "Auran, Common, Draconic, Giant",
    spellLikeAbilities: [
      {
        name: "ghost sound",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "minor image",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "ventriloquism",
        casterLevel: 18,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 7,
      spells: [
        {
          name: "",
          limitations: "5/day",
          level: 3
        },
        {
          name: "vampiric touch ",
          level: 3
        },
        {
          name: "",
          limitations: "7/day",
          level: 2
        },
        {
          name: "invisibility",
          level: 2
        },
        {
          name: "resist energy ",
          level: 2
        },
        {
          name: "",
          limitations: "7/day",
          level: 1
        },
        {
          name: "mage armor",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "true strike",
          level: 1
        },
        {
          name: "unseen servant",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "bleed",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "mending",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        },
        {
          name: "resistance",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Bluff: {
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
      Perception: {
        ranks: 18
      },
      Spellcraft: {
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
      electricity: {
        name: "electricity aura",
        preText: "5ft., 1d6 electricity"
      },
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "100-ft. line",
        damage: "14d8 electricity",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "2d8+13",
        saveDC: 10
      },
      "desert thirst": {
        type: "Su",
        text: "A blue dragon can cast create water at will (CL 18). Alternatively, it can destroy an equal amount of liquid in a 10-foot burst. Unattended liquids are instantly reduced to sand. Liquid-based magic items (such as potions) and items in a creature's possession must succeed on a Will save (DC 24) or be destroyed. Electricity Aura (Su) A mature adult blue dragon is surrounded by an aura of electricity. Creatures within 5 feet take 1d6 points of electricity damage at the beginning of the dragon's turn. Sound Imitation (Ex) A very young or older blue dragon can mimic any voice or sound it has heard by making a successful Bluff check against a listener's Sense Motive check.",
        preText: "DC 24"
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "210 ft."
      }
    }
  },

  "Old Blue Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "earth"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Gargantuan",
    hd: 20,
    hdVal: 12,
    cr: 16,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 40,
      burrow: 20,
      maneuverability: "Clumsy",
      fly: 250
    },
    abilities: {
      str: 31,
      dex: 8,
      con: 23,
      int: 18,
      wis: 19,
      cha: 18
    },
    feats: [
      {
        name: "Combat Casting",
        type: "General"
      },
      {
        name: "Dazzling Display",
        type: "Combat"
      },
      {
        name: "Deadly Stroke",
        type: "Combat"
      },
      {
        name: "Extend Spell",
        type: "Metamagic"
      },
      {
        name: "Hover",
        type: "Monster"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Shatter Defenses",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Bite",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to electricity, sleep"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "magic"
      },
      SR: {
        value: 27
      },
      naturalArmor: 26
    },
    space: "20 ft.",
    reach: "15 ft. (20 ft. with bite)",
    environment: "warm deserts",
    visualDescription: "With scales the color of the desert sky, this large, serpentine dragon moves with an unsettling grace.",
    description: "Blue dragons are consummate schemers and obsessively orderly. In combat, blue dragons prefer to surprise foes if possible, and are not above retreating if the odds turn against them. They prefer to lair near those that they control, sometimes even within the confines of a city.",
    organization: "solitary",
    languages: "Auran, Common, Draconic, Giant, Ignan",
    spellLikeAbilities: [
      {
        name: "ghost sound",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "hallucinatory terrain",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "minor image",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "ventriloquism",
        casterLevel: 20,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 9,
      spells: [
        {
          name: "",
          limitations: "5/day",
          level: 4
        },
        {
          name: "enervation ",
          level: 4
        },
        {
          name: "",
          limitations: "7/day",
          level: 3
        },
        {
          name: "haste",
          level: 3
        },
        {
          name: "vampiric touch ",
          level: 3
        },
        {
          name: "",
          limitations: "7/day",
          level: 2
        },
        {
          name: "invisibility",
          level: 2
        },
        {
          name: "resist energy",
          level: 2
        },
        {
          name: "shatter ",
          level: 2
        },
        {
          name: "",
          limitations: "7/day",
          level: 1
        },
        {
          name: "mage armor",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "true strike",
          level: 1
        },
        {
          name: "unseen servant",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "bleed",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "light",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "mending",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        },
        {
          name: "resistance",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Bluff: {
        ranks: 20
      },
      Fly: {
        ranks: 22
      },
      Intimidate: {
        ranks: 20
      },
      "Knowledge (arcana)": {
        ranks: 20
      },
      "Knowledge (geography)": {
        ranks: 20
      },
      "Knowledge (local)": {
        ranks: 20
      },
      Perception: {
        ranks: 20
      },
      Spellcraft: {
        ranks: 20
      },
      Stealth: {
        ranks: 20
      },
      Survival: {
        ranks: 20
      }
    },
    special: {
      electricity: {
        name: "electricity aura",
        preText: "10ft., 1d6 electricity"
      },
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "120-ft. line",
        damage: "16d8 electricity",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "4d6+15",
        saveDC: 10
      },
      "desert thirst": {
        type: "Su",
        text: "A blue dragon can cast create water at will (CL 20). Alternatively, it can destroy an equal amount of liquid in a 10-foot burst. Unattended liquids are instantly reduced to sand. Liquid-based magic items (such as potions) and items in a creature's possession must succeed on a Will save (DC 26) or be destroyed. Electricity Aura (Su) An old blue dragon is surrounded by an aura of electricity. Creatures within 10 feet take 1d6 points of electricity damage at the beginning of the dragon's turn.",
        preText: "DC 26"
      },
      mirage: {
        type: "Su",
        text: "An old blue dragon can make itself appear to be in two places at once as a free action for 20 rounds per day. This ability functions as project image but the dragon can use its breath weapon through the mirage."
      },
      "tail sweep": {
        universalMonsterAbility: "Tail Sweep",
        damage: "2d6+15",
        saveDC: 10
      },
      "sound imitation": {
        type: "Ex",
        text: "A very young or older blue dragon can mimic any voice or sound it has heard by making a successful Bluff check against a listener's Sense Motive check."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "240 ft."
      }
    }
  },

  "Very Old Blue Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "earth"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Gargantuan",
    hd: 22,
    hdVal: 12,
    cr: 17,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 40,
      burrow: 20,
      maneuverability: "Clumsy",
      fly: 250
    },
    abilities: {
      str: 33,
      dex: 8,
      con: 23,
      int: 18,
      wis: 19,
      cha: 18
    },
    feats: [
      {
        name: "Combat Casting",
        type: "General"
      },
      {
        name: "Dazzling Display",
        type: "Combat"
      },
      {
        name: "Deadly Stroke",
        type: "Combat"
      },
      {
        name: "Extend Spell",
        type: "Metamagic"
      },
      {
        name: "Hover",
        type: "Monster"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Quicken Spell",
        type: "Metamagic"
      },
      {
        name: "Shatter Defenses",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Bite",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to electricity, sleep"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "magic"
      },
      SR: {
        value: 28
      },
      naturalArmor: 29
    },
    space: "20 ft.",
    reach: "15 ft. (20 ft. with bite)",
    environment: "warm deserts",
    visualDescription: "With scales the color of the desert sky, this large, serpentine dragon moves with an unsettling grace.",
    description: "Blue dragons are consummate schemers and obsessively orderly. In combat, blue dragons prefer to surprise foes if possible, and are not above retreating if the odds turn against them. They prefer to lair near those that they control, sometimes even within the confines of a city.",
    organization: "solitary",
    languages: "Auran, Common, Draconic, Giant, Ignan",
    spellLikeAbilities: [
      {
        name: "ghost sound",
        casterLevel: 22,
        timesPerDay: -1
      },
      {
        name: "minor image",
        casterLevel: 22,
        timesPerDay: -1
      },
      {
        name: "ventriloquism",
        casterLevel: 22,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 11,
      spells: [
        {
          name: "",
          limitations: "4/day",
          level: 5
        },
        {
          name: "hold monster",
          level: 5
        },
        {
          name: "",
          limitations: "7/day",
          level: 4
        },
        {
          name: "enervation",
          level: 4
        },
        {
          name: "fire shield ",
          level: 4
        },
        {
          name: "",
          limitations: "7/day",
          level: 3
        },
        {
          name: "displacement",
          level: 3
        },
        {
          name: "haste",
          level: 3
        },
        {
          name: "vampiric touch ",
          level: 3
        },
        {
          name: "",
          limitations: "7/day",
          level: 2
        },
        {
          name: "false life",
          level: 2
        },
        {
          name: "invisibility",
          level: 2
        },
        {
          name: "resist energy",
          level: 2
        },
        {
          name: "shatter ",
          level: 2
        },
        {
          name: "",
          limitations: "7/day",
          level: 1
        },
        {
          name: "mage armor",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "true strike",
          level: 1
        },
        {
          name: "unseen servant",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "bleed",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "light",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "mending",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        },
        {
          name: "resistance",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Bluff: {
        ranks: 22
      },
      Fly: {
        ranks: 24
      },
      Intimidate: {
        ranks: 22
      },
      "Knowledge (arcana)": {
        ranks: 22
      },
      "Knowledge (geography)": {
        ranks: 22
      },
      "Knowledge (local)": {
        ranks: 22
      },
      Perception: {
        ranks: 22
      },
      Spellcraft: {
        ranks: 22
      },
      Stealth: {
        ranks: 22
      },
      Survival: {
        ranks: 22
      }
    },
    special: {
      electricity: {
        name: "electricity aura",
        preText: "10ft., 1d6 electricity"
      },
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "120-ft. line",
        damage: "18d8 electricity",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "4d6+16",
        saveDC: 10
      },
      "desert thirst": {
        type: "Su",
        text: "A blue dragon can cast create water at will (CL 22). Alternatively, it can destroy an equal amount of liquid in a 10-foot burst. Unattended liquids are instantly reduced to sand. Liquid-based magic items (such as potions) and items in a creature's possession must succeed on a Will save (DC 27) or be destroyed. Electricity Aura (Su) A very old blue dragon is surrounded by an aura of electricity. Creatures within 10 feet take 1d6 points of electricity damage at the beginning of the dragon's turn.",
        preText: "DC 27"
      },
      mirage: {
        type: "Su",
        text: "A very old blue dragon can make itself appear to be in two places at once as a free action for 22 rounds per day. This ability functions as project image but the dragon can use its breath weapon through the mirage."
      },
      "tail sweep": {
        universalMonsterAbility: "Tail Sweep",
        damage: "2d6+16",
        saveDC: 10
      },
      "sound imitation": {
        type: "Ex",
        text: "A very young or older blue dragon can mimic any voice or sound it has heard by making a successful Bluff check against a listener's Sense Motive check."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "270 ft."
      }
    }
  },

  "Wyrm Blue Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "earth"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Gargantuan",
    hd: 26,
    hdVal: 12,
    cr: 19,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 40,
      burrow: 20,
      maneuverability: "Clumsy",
      fly: 250
    },
    abilities: {
      str: 37,
      dex: 6,
      con: 25,
      int: 20,
      wis: 21,
      cha: 20
    },
    feats: [
      {
        name: "Combat Casting",
        type: "General"
      },
      {
        name: "Dazzling Display",
        type: "Combat"
      },
      {
        name: "Deadly Stroke",
        type: "Combat"
      },
      {
        name: "Extend Spell",
        type: "Metamagic"
      },
      {
        name: "Hover",
        type: "Monster"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Quicken Spell",
        type: "Metamagic"
      },
      {
        name: "Shatter Defenses",
        type: "Combat"
      },
      {
        name: "Silent Spell",
        type: "Metamagic"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Bite",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to electricity, sleep"
    ],
    defense: {
      DR: {
        value: 20,
        damageType: "magic"
      },
      SR: {
        value: 30
      },
      naturalArmor: 35
    },
    space: "20 ft.",
    reach: "15 ft. (20 ft. with bite)",
    environment: "warm deserts",
    visualDescription: "With scales the color of the desert sky, this large, serpentine dragon moves with an unsettling grace.",
    description: "Blue dragons are consummate schemers and obsessively orderly. In combat, blue dragons prefer to surprise foes if possible, and are not above retreating if the odds turn against them. They prefer to lair near those that they control, sometimes even within the confines of a city.",
    organization: "solitary",
    languages: "Auran, Common, Draconic, Giant, Ignan, Infernal",
    spellLikeAbilities: [
      {
        name: "ghost sound",
        casterLevel: 26,
        timesPerDay: -1
      },
      {
        name: "hallucinatory terrain",
        casterLevel: 26,
        timesPerDay: -1
      },
      {
        name: "minor image",
        casterLevel: 26,
        timesPerDay: -1
      },
      {
        name: "veil",
        casterLevel: 26,
        timesPerDay: -1
      },
      {
        name: "ventriloquism",
        casterLevel: 26,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 15,
      spells: [
        {
          name: "(4/day)-insanity",
          limitations: "4/day",
          level: 7
        },
        {
          name: "simulacrum ",
          level: 7
        },
        {
          name: "",
          limitations: "6/day",
          level: 6
        },
        {
          name: "mislead",
          level: 6
        },
        {
          name: "hold person, mass",
          level: 6
        },
        {
          name: "",
          limitations: "7/day",
          level: 5
        },
        {
          name: "persistent image",
          level: 5
        },
        {
          name: "hold monster",
          level: 5
        },
        {
          name: "teleport ",
          level: 5
        },
        {
          name: "",
          limitations: "7/day",
          level: 4
        },
        {
          name: "enervation",
          level: 4
        },
        {
          name: "fire shield",
          level: 4
        },
        {
          name: "stoneskin ",
          level: 4
        },
        {
          name: "",
          limitations: "7/day",
          level: 3
        },
        {
          name: "displacement",
          level: 3
        },
        {
          name: "haste",
          level: 3
        },
        {
          name: "vampiric touch ",
          level: 3
        },
        {
          name: "",
          limitations: "7/day",
          level: 2
        },
        {
          name: "false life",
          level: 2
        },
        {
          name: "invisibility",
          level: 2
        },
        {
          name: "resist energy",
          level: 2
        },
        {
          name: "shatter ",
          level: 2
        },
        {
          name: "",
          limitations: "8/day",
          level: 1
        },
        {
          name: "mage armor",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "true strike",
          level: 1
        },
        {
          name: "unseen servant",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "bleed",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "light",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "mending",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        },
        {
          name: "resistance",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Bluff: {
        ranks: 26
      },
      Fly: {
        ranks: 28
      },
      Intimidate: {
        ranks: 26
      },
      "Knowledge (arcana)": {
        ranks: 26
      },
      "Knowledge (geography)": {
        ranks: 26
      },
      "Knowledge (history)": {
        ranks: 26
      },
      "Knowledge (local)": {
        ranks: 26
      },
      Perception: {
        ranks: 26
      },
      Spellcraft: {
        ranks: 26
      },
      Stealth: {
        ranks: 26
      },
      Survival: {
        ranks: 26
      }
    },
    special: {
      electricity: {
        name: "electricity aura",
        preText: "10ft., 2d6 electricity"
      },
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "120-ft. line",
        damage: "22d8 electricity",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "4d6+19",
        saveDC: 10
      },
      "desert thirst": {
        type: "Su",
        text: "A blue dragon can cast create water at will (CL 26). Alternatively, it can destroy an equal amount of liquid in a 10-foot burst. Unattended liquids are instantly reduced to sand. Liquid-based magic items (such as potions) and items in a creature's possession must succeed on a Will save (DC 30) or be destroyed. Electricity Aura (Su) A wyrm blue dragon is surrounded by an aura of electricity. Creatures within 10 feet take 2d6 points of electricity damage at the beginning of the dragon's turn.",
        preText: "DC 30"
      },
      mirage: {
        type: "Su",
        text: "A wyrm blue dragon can make itself appear to be in two places at once as a free action for 26 rounds per day. This ability functions as project image but the dragon can use its breath weapon through the mirage."
      },
      "storm breath": {
        type: "Su",
        text: "A wyrm blue dragon can use its breath weapon to create a storm of lightning. This functions as call lightning storm, but the damage is 22d8. The dragon can call down 1 bolt per round as a free action for 1d6 rounds. The save DC is 30. Additional uses of this ability extend the duration by an additional 1d6 rounds.",
        preText: "DC30, 22d8 electricity"
      },
      "tail sweep": {
        universalMonsterAbility: "Tail Sweep",
        damage: "2d6+19",
        saveDC: 10
      },
      "sound imitation": {
        type: "Ex",
        text: "A very young or older blue dragon can mimic any voice or sound it has heard by making a successful Bluff check against a listener's Sense Motive check. Storm Breath (Su) A wyrm blue dragon can use its breath weapon to create a storm of lightning. This functions as call lightning storm, but the damage is 22d8. The dragon can call down 1 bolt per round as a free action for 1d6 rounds. The save DC is 30. Additional uses of this ability extend the duration by an additional 1d6 rounds."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "330 ft."
      }
    }
  },

  "Great Wyrm Blue Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "earth"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Colossal",
    hd: 28,
    hdVal: 12,
    cr: 21,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 40,
      burrow: 20,
      maneuverability: "Clumsy",
      fly: 250
    },
    abilities: {
      str: 39,
      dex: 6,
      con: 27,
      int: 22,
      wis: 23,
      cha: 22
    },
    feats: [
      {
        name: "Combat Casting",
        type: "General"
      },
      {
        name: "Dazzling Display",
        type: "Combat"
      },
      {
        name: "Deadly Stroke",
        type: "Combat"
      },
      {
        name: "Extend Spell",
        type: "Metamagic"
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
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Quicken Spell",
        type: "Metamagic"
      },
      {
        name: "Silent Spell",
        type: "Metamagic"
      },
      {
        name: "Shatter Defenses",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Bite",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to electricity, sleep"
    ],
    defense: {
      DR: {
        value: 20,
        damageType: "magic"
      },
      SR: {
        value: 32
      },
      naturalArmor: 38
    },
    space: "30 ft.",
    reach: "20 ft. (30 ft. with bite)",
    environment: "warm deserts",
    visualDescription: "With scales the color of the desert sky, this large, serpentine dragon moves with an unsettling grace.",
    description: "Blue dragons are consummate schemers and obsessively orderly. In combat, blue dragons prefer to surprise foes if possible, and are not above retreating if the odds turn against them. They prefer to lair near those that they control, sometimes even within the confines of a city.",
    organization: "solitary",
    languages: "Auran, Common, Draconic, Giant, Ignan, Infernal, Terran",
    spellLikeAbilities: [
      {
        name: "ghost sound",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "hallucinatory terrain",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "minor image",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "mirage arcana",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "veil",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "ventriloquism",
        casterLevel: 28,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 17,
      spells: [
        {
          name: "",
          limitations: "4/day",
          level: 8
        },
        {
          name: "prismatic wall ",
          level: 8
        },
        {
          name: "(6/day)-insanity",
          limitations: "6/day",
          level: 7
        },
        {
          name: "reverse gravity",
          level: 7
        },
        {
          name: "simulacrum ",
          level: 7
        },
        {
          name: "",
          limitations: "7/day",
          level: 6
        },
        {
          name: "mislead",
          level: 6
        },
        {
          name: "hold person, mass",
          level: 6
        },
        {
          name: "",
          limitations: "7/day",
          level: 5
        },
        {
          name: "persistent image",
          level: 5
        },
        {
          name: "hold monster",
          level: 5
        },
        {
          name: "teleport ",
          level: 5
        },
        {
          name: "",
          limitations: "7/day",
          level: 4
        },
        {
          name: "enervation",
          level: 4
        },
        {
          name: "fire shield",
          level: 4
        },
        {
          name: "stoneskin ",
          level: 4
        },
        {
          name: "",
          limitations: "7/day",
          level: 3
        },
        {
          name: "displacement",
          level: 3
        },
        {
          name: "haste",
          level: 3
        },
        {
          name: "vampiric touch ",
          level: 3
        },
        {
          name: "",
          limitations: "8/day",
          level: 2
        },
        {
          name: "false life",
          level: 2
        },
        {
          name: "invisibility",
          level: 2
        },
        {
          name: "resist energy",
          level: 2
        },
        {
          name: "shatter ",
          level: 2
        },
        {
          name: "",
          limitations: "8/day",
          level: 1
        },
        {
          name: "mage armor",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "true strike",
          level: 1
        },
        {
          name: "unseen servant",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "bleed",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "light",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "mending",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        },
        {
          name: "resistance",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Bluff: {
        ranks: 28
      },
      Diplomacy: {
        ranks: 28
      },
      Fly: {
        ranks: 36
      },
      Intimidate: {
        ranks: 28
      },
      "Knowledge (arcana)": {
        ranks: 28
      },
      "Knowledge (geography)": {
        ranks: 28
      },
      "Knowledge (history)": {
        ranks: 28
      },
      "Knowledge (local)": {
        ranks: 28
      },
      Perception: {
        ranks: 28
      },
      Spellcraft: {
        ranks: 28
      },
      Stealth: {
        ranks: 28
      },
      Survival: {
        ranks: 28
      }
    },
    special: {
      electricity: {
        name: "electricity aura",
        preText: "10ft., 2d6 electricity"
      },
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "140-ft. line",
        damage: "24d8 electricity",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "4d8+21",
        saveDC: 10
      },
      "desert thirst": {
        type: "Su",
        text: "A blue dragon can cast create water at will (CL 28). Alternatively, it can destroy an equal amount of liquid in a 10-foot burst. Unattended liquids are instantly reduced to sand. Liquid-based magic items (such as potions) and items in a creature's possession must succeed on a Will save (DC 32) or be destroyed. Electricity Aura (Su) A great wyrm blue dragon is surrounded by an aura of electricity. Creatures within 10 feet take 2d6 points of electricity damage at the beginning of the dragon's turn.",
        preText: "DC 32"
      },
      mirage: {
        type: "Su",
        text: "A great wyrm blue dragon can make itself appear to be in two places at once as a free action for 28 rounds per day. This ability functions as project image but the dragon can use its breath weapon through the mirage."
      },
      sandstorm: {
        type: "Su",
        text: "As a standard action, a great wyrm blue dragon can create a sandstorm centered on itself with a radius of 1,200 feet. Creatures other than the dragon inside the storm take 2d6 points of damage per round in addition to the normal sandstorm penalties (Pathfinder RPG Core Rulebook 431). This sandstorm lasts for up to 1 hour, but can be dismissed by the dragon as a free action."
      },
      "storm breath": {
        type: "Su",
        text: "A wyrm blue dragon can use its breath weapon to create a storm of lightning. This functions as call lightning storm but the damage is 24d8. The dragon can call down 1 bolt per round as a free action for 1d6 rounds. The save DC is 32. Additional uses of this ability extend the duration by an additional 1d6 rounds.",
        preText: "DC 32, 24d8 electricity"
      },
      "tail sweep": {
        universalMonsterAbility: "Tail Sweep",
        damage: "4d8+21",
        saveDC: 10
      },
      "sound imitation": {
        type: "Ex",
        text: "A very young or older blue dragon can mimic any voice or sound it has heard by making a successful Bluff check against a listener's Sense Motive check. Storm Breath (Su) A wyrm blue dragon can use its breath weapon to create a storm of lightning. This functions as call lightning storm but the damage is 24d8. The dragon can call down 1 bolt per round as a free action for 1d6 rounds. The save DC is 32. Additional uses of this ability extend the duration by an additional 1d6 rounds."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "360 ft."
      }
    }
  },

  "Wyrmling Green Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "air"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Small",
    hd: 5,
    hdVal: 12,
    cr: 4,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 40,
      maneuverability: "Average",
      fly: 150,
      swim: 40
    },
    abilities: {
      str: 13,
      dex: 14,
      con: 13,
      int: 10,
      wis: 11,
      cha: 10
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Power Attack",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to acid, sleep"
    ],
    defense: {
      naturalArmor: 4
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "temperate forests",
    visualDescription: "Scales the color of emeralds armor this ferocious dragon. A single sharp horn protrudes from the end of its toothy snout.",
    description: "Green dragons dwell in the ancient forests of the world, prowling under towering canopies in search of prey. Of all the chromatic dragons, green dragons are perhaps the easiest to deal with diplomatically.",
    organization: "solitary",
    languages: "Draconic",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 5
      },
      "Knowledge (nature)": {
        ranks: 5
      },
      Perception: {
        ranks: 5
      },
      Stealth: {
        ranks: 5
      },
      Survival: {
        ranks: 5
      },
      Swim: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "20-ft. cone",
        damage: "2d6 acid",
        saveDC: 10
      }
    }
  },

  "Very Young Green Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "air"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Medium",
    hd: 7,
    hdVal: 12,
    cr: 6,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 40,
      maneuverability: "Average",
      fly: 150,
      swim: 40
    },
    abilities: {
      str: 17,
      dex: 12,
      con: 15,
      int: 12,
      wis: 13,
      cha: 12
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Power Attack",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to acid, sleep"
    ],
    defense: {
      naturalArmor: 7
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "temperate forests",
    visualDescription: "Scales the color of emeralds armor this ferocious dragon. A single sharp horn protrudes from the end of its toothy snout.",
    description: "Green dragons dwell in the ancient forests of the world, prowling under towering canopies in search of prey. Of all the chromatic dragons, green dragons are perhaps the easiest to deal with diplomatically.",
    organization: "solitary",
    languages: "Common, Draconic",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 7
      },
      "Knowledge (nature)": {
        ranks: 7
      },
      Perception: {
        ranks: 7
      },
      Spellcraft: {
        ranks: 7
      },
      Stealth: {
        ranks: 7
      },
      Survival: {
        ranks: 7
      },
      Swim: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "30-ft. cone",
        damage: "4d6 acid",
        saveDC: 10
      },
      "water breathing": {
        type: "Ex",
        text: "A green dragon can breathe underwater indefinitely and can freely use its breath weapon, spells, and other abilities while submerged."
      },
      "woodland stride": {
        type: "Ex",
        text: "A very young or older green dragon can move through any sort of foliage at full speed without taking damage or suffering impairment. Areas of foliage that have been magically manipulated affect it normally."
      }
    }
  },

  "Juvenile Green Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "air"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Large",
    hd: 11,
    hdVal: 12,
    cr: 9,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 40,
      maneuverability: "Poor",
      fly: 200,
      swim: 40
    },
    abilities: {
      str: 23,
      dex: 12,
      con: 19,
      int: 14,
      wis: 15,
      cha: 14
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Great Cleave",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Power Attack",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to acid, sleep"
    ],
    defense: {
      naturalArmor: 13
    },
    space: "10 ft.",
    reach: "5 ft. (10 ft. with bite)",
    environment: "temperate forests",
    visualDescription: "Scales the color of emeralds armor this ferocious dragon. A single sharp horn protrudes from the end of its toothy snout.",
    description: "Green dragons dwell in the ancient forests of the world, prowling under towering canopies in search of prey. Of all the chromatic dragons, green dragons are perhaps the easiest to deal with diplomatically.",
    organization: "solitary",
    languages: "Common, Draconic, Elven",
    spellLikeAbilities: [
      {
        name: "charm person",
        casterLevel: 11,
        timesPerDay: -1
      },
      {
        name: "entangle",
        casterLevel: 11,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 1,
      spells: [
        {
          name: "",
          limitations: "4/day",
          level: 1
        },
        {
          name: "summon monster I",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "ghost sound",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Fly: {
        ranks: 15
      },
      "Knowledge (arcana)": {
        ranks: 11
      },
      "Knowledge (nature)": {
        ranks: 11
      },
      Perception: {
        ranks: 11
      },
      Spellcraft: {
        ranks: 11
      },
      Stealth: {
        ranks: 11
      },
      Survival: {
        ranks: 11
      },
      Swim: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "40-ft. cone",
        damage: "8d6 acid",
        saveDC: 10
      },
      "water breathing": {
        type: "Ex",
        text: "A green dragon can breathe underwater indefinitely and can freely use its breath weapon, spells, and other abilities while submerged."
      },
      "woodland stride": {
        type: "Ex",
        text: "A very young or older green dragon can move through any sort of foliage at full speed without taking damage or suffering impairment. Areas of foliage that have been magically manipulated affect it normally."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "120 ft."
      }
    }
  },

  "Young Adult Green Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "air"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Huge",
    hd: 13,
    hdVal: 12,
    cr: 11,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 40,
      maneuverability: "Poor",
      fly: 200,
      swim: 40
    },
    abilities: {
      str: 25,
      dex: 10,
      con: 19,
      int: 14,
      wis: 15,
      cha: 14
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Great Cleave",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Claw",
        choiceSource: "Improved Critical"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Power Attack",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to acid, sleep"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "magic"
      },
      SR: {
        value: 22
      },
      naturalArmor: 16
    },
    space: "15 ft.",
    reach: "10 ft. (15 ft. with bite)",
    environment: "temperate forests",
    visualDescription: "Scales the color of emeralds armor this ferocious dragon. A single sharp horn protrudes from the end of its toothy snout.",
    description: "Green dragons dwell in the ancient forests of the world, prowling under towering canopies in search of prey. Of all the chromatic dragons, green dragons are perhaps the easiest to deal with diplomatically.",
    organization: "solitary",
    languages: "Common, Draconic, Elven",
    spellLikeAbilities: [
      {
        name: "charm person",
        casterLevel: 13,
        timesPerDay: -1
      },
      {
        name: "entangle",
        casterLevel: 13,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 3,
      spells: [
        {
          name: "",
          limitations: "6/day",
          level: 1
        },
        {
          name: "silent image",
          level: 1
        },
        {
          name: "summon monster I",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "ghost sound",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Fly: {
        ranks: 17
      },
      "Knowledge (arcana)": {
        ranks: 13
      },
      "Knowledge (nature)": {
        ranks: 13
      },
      Perception: {
        ranks: 13
      },
      Spellcraft: {
        ranks: 13
      },
      Stealth: {
        ranks: 13
      },
      Survival: {
        ranks: 13
      },
      Swim: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "50-ft. cone",
        damage: "10d6 acid",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "2d8+10",
        saveDC: 10
      },
      "water breathing": {
        type: "Ex",
        text: "A green dragon can breathe underwater indefinitely and can freely use its breath weapon, spells, and other abilities while submerged."
      },
      "woodland stride": {
        type: "Ex",
        text: "A very young or older green dragon can move through any sort of foliage at full speed without taking damage or suffering impairment. Areas of foliage that have been magically manipulated affect it normally."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "150 ft."
      }
    }
  },

  "Mature Adult Green Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "air"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Huge",
    hd: 17,
    hdVal: 12,
    cr: 13,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 40,
      maneuverability: "Poor",
      fly: 200,
      swim: 40
    },
    abilities: {
      str: 29,
      dex: 10,
      con: 21,
      int: 16,
      wis: 17,
      cha: 16
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Great Cleave",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Claw",
        choiceSource: "Improved Critical"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to acid, sleep"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "magic"
      },
      SR: {
        value: 24
      },
      naturalArmor: 22
    },
    space: "15 ft.",
    reach: "10 ft. (15 ft. with bite)",
    environment: "temperate forests",
    visualDescription: "Scales the color of emeralds armor this ferocious dragon. A single sharp horn protrudes from the end of its toothy snout.",
    description: "Green dragons dwell in the ancient forests of the world, prowling under towering canopies in search of prey. Of all the chromatic dragons, green dragons are perhaps the easiest to deal with diplomatically.",
    organization: "solitary",
    languages: "Common, Draconic, Elven, Sylvan",
    spellLikeAbilities: [
      {
        name: "charm person",
        casterLevel: 17,
        timesPerDay: -1
      },
      {
        name: "entangle",
        casterLevel: 17,
        timesPerDay: -1
      },
      {
        name: "suggestion",
        casterLevel: 17,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 7,
      spells: [
        {
          name: "(5/day)-fireball",
          limitations: "5/day",
          level: 3
        },
        {
          name: "haste ",
          level: 3
        },
        {
          name: "",
          limitations: "7/day",
          level: 2
        },
        {
          name: "detect thoughts",
          level: 2
        },
        {
          name: "mirror image ",
          level: 2
        },
        {
          name: "",
          limitations: "7/day",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "silent image",
          level: 1
        },
        {
          name: "summon monster I",
          level: 1
        },
        {
          name: "ventriloquism",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "ghost sound",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "resistance",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Fly: {
        ranks: 21
      },
      "Knowledge (arcana)": {
        ranks: 17
      },
      "Knowledge (nature)": {
        ranks: 17
      },
      Perception: {
        ranks: 17
      },
      Spellcraft: {
        ranks: 17
      },
      Stealth: {
        ranks: 17
      },
      Survival: {
        ranks: 17
      },
      Swim: {
        ranks: 1,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      "Use Magic Device": {
        ranks: 17
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "50-ft. cone",
        damage: "14d6 acid",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "2d8+13",
        saveDC: 10
      },
      "trackless step": {
        type: "Ex",
        text: "An adult or older green dragon does not leave a trail in natural surroundings and cannot be tracked. A green dragon can choose to leave a trail, if it so desires."
      },
      "water breathing": {
        type: "Ex",
        text: "A green dragon can breathe underwater indefinitely and can freely use its breath weapon, spells, and other abilities while submerged."
      },
      "woodland stride": {
        type: "Ex",
        text: "A very young or older green dragon can move through any sort of foliage at full speed without taking damage or suffering impairment. Areas of foliage that have been magically manipulated affect it normally."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "210 ft."
      }
    }
  },

  "Old Green Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "air"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Gargantuan",
    hd: 19,
    hdVal: 12,
    cr: 15,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 40,
      maneuverability: "Clumsy",
      fly: 250,
      swim: 40
    },
    abilities: {
      str: 31,
      dex: 8,
      con: 23,
      int: 18,
      wis: 19,
      cha: 18
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Great Cleave",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Claw",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Sunder",
        type: "Combat"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to acid, sleep"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "magic"
      },
      SR: {
        value: 26
      },
      naturalArmor: 25
    },
    space: "20 ft.",
    reach: "15 ft. (20 ft. with bite)",
    environment: "temperate forests",
    visualDescription: "Scales the color of emeralds armor this ferocious dragon. A single sharp horn protrudes from the end of its toothy snout.",
    description: "Green dragons dwell in the ancient forests of the world, prowling under towering canopies in search of prey. Of all the chromatic dragons, green dragons are perhaps the easiest to deal with diplomatically.",
    organization: "solitary",
    languages: "Common, Draconic, Elven, Giant, Sylvan",
    spellLikeAbilities: [
      {
        name: "charm person",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "entangle",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "plant growth",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "suggestion",
        casterLevel: 19,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 9,
      spells: [
        {
          name: "",
          limitations: "5/day",
          level: 4
        },
        {
          name: "ice storm ",
          level: 4
        },
        {
          name: "",
          limitations: "7/day",
          level: 3
        },
        {
          name: "fireball",
          level: 3
        },
        {
          name: "haste ",
          level: 3
        },
        {
          name: "",
          limitations: "7/day",
          level: 2
        },
        {
          name: "detect thoughts",
          level: 2
        },
        {
          name: "mirror image",
          level: 2
        },
        {
          name: "see invisibility ",
          level: 2
        },
        {
          name: "",
          limitations: "7/day",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "silent image",
          level: 1
        },
        {
          name: "summon monster I",
          level: 1
        },
        {
          name: "ventriloquism",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "dancing lights",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "ghost sound",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "resistance",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Fly: {
        ranks: 29
      },
      "Knowledge (arcana)": {
        ranks: 19
      },
      "Knowledge (local)": {
        ranks: 19
      },
      "Knowledge (nature)": {
        ranks: 19
      },
      Perception: {
        ranks: 19
      },
      Spellcraft: {
        ranks: 19
      },
      Stealth: {
        ranks: 19
      },
      Survival: {
        ranks: 19
      },
      Swim: {
        ranks: 3,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      "Use Magic Device": {
        ranks: 19
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "60-ft. cone",
        damage: "16d6 acid",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "4d6+15",
        saveDC: 10
      },
      "tail sweep": {
        universalMonsterAbility: "Tail Sweep",
        damage: "2d6+15",
        saveDC: 10
      },
      camouflage: {
        type: "Ex",
        text: "An old or older green dragon can use Stealth to hide in any sort of natural terrain, even if the terrain does not grant cover or concealment."
      },
      "trackless step": {
        type: "Ex",
        text: "An adult or older green dragon does not leave a trail in natural surroundings and cannot be tracked. A green dragon can choose to leave a trail, if it so desires."
      },
      "water breathing": {
        type: "Ex",
        text: "A green dragon can breathe underwater indefinitely and can freely use its breath weapon, spells, and other abilities while submerged."
      },
      "woodland stride": {
        type: "Ex",
        text: "A very young or older green dragon can move through any sort of foliage at full speed without taking damage or suffering impairment. Areas of foliage that have been magically manipulated affect it normally."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "240 ft."
      }
    }
  },

  "Very Old Green Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "air"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Gargantuan",
    hd: 21,
    hdVal: 12,
    cr: 16,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 40,
      maneuverability: "Clumsy",
      fly: 250,
      swim: 40
    },
    abilities: {
      str: 33,
      dex: 8,
      con: 23,
      int: 18,
      wis: 19,
      cha: 18
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Great Cleave",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Claw",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Sunder",
        type: "Combat"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to acid, sleep"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "magic"
      },
      SR: {
        value: 27
      },
      naturalArmor: 28
    },
    space: "20 ft.",
    reach: "15 ft. (20 ft. with bite)",
    environment: "temperate forests",
    visualDescription: "Scales the color of emeralds armor this ferocious dragon. A single sharp horn protrudes from the end of its toothy snout.",
    description: "Green dragons dwell in the ancient forests of the world, prowling under towering canopies in search of prey. Of all the chromatic dragons, green dragons are perhaps the easiest to deal with diplomatically.",
    organization: "solitary",
    languages: "Common, Draconic, Elven, Giant, Sylvan",
    spellLikeAbilities: [
      {
        name: "charm person",
        casterLevel: 21,
        timesPerDay: -1
      },
      {
        name: "entangle",
        casterLevel: 21,
        timesPerDay: -1
      },
      {
        name: "plant growth",
        casterLevel: 21,
        timesPerDay: -1
      },
      {
        name: "suggestion",
        casterLevel: 21,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 11,
      spells: [
        {
          name: "",
          limitations: "4/day",
          level: 5
        },
        {
          name: "teleport ",
          level: 5
        },
        {
          name: "",
          limitations: "7/day",
          level: 4
        },
        {
          name: "ice storm",
          level: 4
        },
        {
          name: "stoneskin ",
          level: 4
        },
        {
          name: "",
          limitations: "7/day",
          level: 3
        },
        {
          name: "displacement",
          level: 3
        },
        {
          name: "fireball",
          level: 3
        },
        {
          name: "haste ",
          level: 3
        },
        {
          name: "",
          limitations: "7/day",
          level: 2
        },
        {
          name: "detect thoughts",
          level: 2
        },
        {
          name: "locate object",
          level: 2
        },
        {
          name: "mirror image",
          level: 2
        },
        {
          name: "see invisibility ",
          level: 2
        },
        {
          name: "",
          limitations: "7/day",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "silent image",
          level: 1
        },
        {
          name: "summon monster I",
          level: 1
        },
        {
          name: "ventriloquism",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "bleed",
          level: 0
        },
        {
          name: "dancing lights",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "ghost sound",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "resistance",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Fly: {
        ranks: 31
      },
      "Knowledge (arcana)": {
        ranks: 21
      },
      "Knowledge (local)": {
        ranks: 21
      },
      "Knowledge (nature)": {
        ranks: 21
      },
      Perception: {
        ranks: 21
      },
      Spellcraft: {
        ranks: 21
      },
      Stealth: {
        ranks: 21
      },
      Survival: {
        ranks: 21
      },
      Swim: {
        ranks: 5,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      "Use Magic Device": {
        ranks: 21
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "60-ft. cone",
        damage: "18d6 acid",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "4d6+16",
        saveDC: 10
      },
      "tail sweep": {
        universalMonsterAbility: "Tail Sweep",
        damage: "2d8+16",
        saveDC: 10
      },
      camouflage: {
        type: "Ex",
        text: "An old or older green dragon can use Stealth to hide in any sort of natural terrain, even if the terrain does not grant cover or concealment."
      },
      "trackless step": {
        type: "Ex",
        text: "An adult or older green dragon does not leave a trail in natural surroundings and cannot be tracked. A green dragon can choose to leave a trail, if it so desires."
      },
      "water breathing": {
        type: "Ex",
        text: "A green dragon can breathe underwater indefinitely and can freely use its breath weapon, spells, and other abilities while submerged."
      },
      "woodland stride": {
        type: "Ex",
        text: "A very young or older green dragon can move through any sort of foliage at full speed without taking damage or suffering impairment. Areas of foliage that have been magically manipulated affect it normally."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "270 ft."
      }
    }
  },

  "Wyrm Green Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "air"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Gargantuan",
    hd: 25,
    hdVal: 12,
    cr: 18,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 40,
      maneuverability: "Clumsy",
      fly: 250,
      swim: 40
    },
    abilities: {
      str: 37,
      dex: 6,
      con: 25,
      int: 20,
      wis: 21,
      cha: 20
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Bleeding Critical",
        type: "Combat"
      },
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Great Cleave",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Claw",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Sunder",
        type: "Combat"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to acid, sleep"
    ],
    defense: {
      DR: {
        value: 20,
        damageType: "magic"
      },
      SR: {
        value: 29
      },
      naturalArmor: 34
    },
    space: "20 ft.",
    reach: "15 ft. (20 ft. with bite)",
    environment: "temperate forests",
    visualDescription: "Scales the color of emeralds armor this ferocious dragon. A single sharp horn protrudes from the end of its toothy snout.",
    description: "Green dragons dwell in the ancient forests of the world, prowling under towering canopies in search of prey. Of all the chromatic dragons, green dragons are perhaps the easiest to deal with diplomatically.",
    organization: "solitary",
    languages: "Abyssal, Common, Draconic, Elven, Giant, Sylvan",
    spellLikeAbilities: [
      {
        name: "charm person",
        casterLevel: 25,
        timesPerDay: -1
      },
      {
        name: "dominate person",
        casterLevel: 25,
        timesPerDay: -1
      },
      {
        name: "entangle",
        casterLevel: 25,
        timesPerDay: -1
      },
      {
        name: "plant growth",
        casterLevel: 25,
        timesPerDay: -1
      },
      {
        name: "suggestion",
        casterLevel: 25,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 15,
      spells: [
        {
          name: "",
          limitations: "4/day",
          level: 7
        },
        {
          name: "summon monster VII ",
          level: 7
        },
        {
          name: "",
          limitations: "6/day",
          level: 6
        },
        {
          name: "disintegrate",
          level: 6
        },
        {
          name: "true seeing ",
          level: 6
        },
        {
          name: "(7/day)-baleful polymorph",
          limitations: "7/day",
          level: 5
        },
        {
          name: "polymorph",
          level: 5
        },
        {
          name: "summon monster V",
          level: 5
        },
        {
          name: "teleport ",
          level: 5
        },
        {
          name: "",
          limitations: "7/day",
          level: 4
        },
        {
          name: "ice storm",
          level: 4
        },
        {
          name: "scrying",
          level: 4
        },
        {
          name: "stoneskin ",
          level: 4
        },
        {
          name: "",
          limitations: "7/day",
          level: 3
        },
        {
          name: "displacement",
          level: 3
        },
        {
          name: "fireball",
          level: 3
        },
        {
          name: "haste ",
          level: 3
        },
        {
          name: "",
          limitations: "7/day",
          level: 2
        },
        {
          name: "detect thoughts",
          level: 2
        },
        {
          name: "mirror image",
          level: 2
        },
        {
          name: "see invisibility ",
          level: 2
        },
        {
          name: "",
          limitations: "8/day",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "silent image",
          level: 1
        },
        {
          name: "summon monster I",
          level: 1
        },
        {
          name: "ventriloquism",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "bleed",
          level: 0
        },
        {
          name: "dancing lights",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "ghost sound",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "resistance",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Fly: {
        ranks: 35
      },
      "Knowledge (arcana)": {
        ranks: 25
      },
      "Knowledge (local)": {
        ranks: 25
      },
      "Knowledge (nature)": {
        ranks: 25
      },
      "Knowledge (planes)": {
        ranks: 25
      },
      Perception: {
        ranks: 25
      },
      Spellcraft: {
        ranks: 25
      },
      Stealth: {
        ranks: 25
      },
      Survival: {
        ranks: 25
      },
      Swim: {
        ranks: 9,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      "Use Magic Device": {
        ranks: 25
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "60-ft. cone",
        damage: "22d6 acid",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "4d6+19",
        saveDC: 10
      },
      miasma: {
        type: "Su",
        text: "An ancient or older green dragon can use its breath weapon to create a cloud of acid as a standard action that deals damage to any creature inside it. The cloud moves with the dragon and has a radius of 20 feet. When it's created, anyone inside this area takes an amount of damage equal to half the dragon's breath weapon, with a Reflex save for half damage. The number of damage dice rolled is halved each round until the result would be less than 1d6. Any creature that starts its turn inside the cloud takes damage, but can make a Reflex save for half. A strong wind, such as that created by a gust of wind, disperses the cloud in 1 round."
      },
      "tail sweep": {
        universalMonsterAbility: "Tail Sweep",
        damage: "2d6+19",
        saveDC: 10
      },
      camouflage: {
        type: "Ex",
        text: "An old or older green dragon can use Stealth to hide in any sort of natural terrain, even if the terrain does not grant cover or concealment."
      },
      "trackless step": {
        type: "Ex",
        text: "An adult or older green dragon does not leave a trail in natural surroundings and cannot be tracked. A green dragon can choose to leave a trail, if it so desires."
      },
      "water breathing": {
        type: "Ex",
        text: "A green dragon can breathe underwater indefinitely and can freely use its breath weapon, spells, and other abilities while submerged."
      },
      "woodland stride": {
        type: "Ex",
        text: "A very young or older green dragon can move through any sort of foliage at full speed without taking damage or suffering impairment. Areas of foliage that have been magically manipulated affect it normally."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "330 ft."
      }
    }
  },

  "Great Wyrm Green Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "air"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Colossal",
    hd: 27,
    hdVal: 12,
    cr: 20,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 40,
      maneuverability: "Clumsy",
      fly: 250,
      swim: 40
    },
    abilities: {
      str: 39,
      dex: 6,
      con: 27,
      int: 22,
      wis: 23,
      cha: 22
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Bleeding Critical",
        type: "Combat"
      },
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Great Cleave",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Claw",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Sunder",
        type: "Combat"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Wingover",
        type: "Monster"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to acid, sleep"
    ],
    defense: {
      DR: {
        value: 20,
        damageType: "magic"
      },
      SR: {
        value: 31
      },
      naturalArmor: 37
    },
    space: "30 ft.",
    reach: "20 ft. (30 ft. with bite)",
    environment: "temperate forests",
    visualDescription: "Scales the color of emeralds armor this ferocious dragon. A single sharp horn protrudes from the end of its toothy snout.",
    description: "Green dragons dwell in the ancient forests of the world, prowling under towering canopies in search of prey. Of all the chromatic dragons, green dragons are perhaps the easiest to deal with diplomatically.",
    organization: "solitary",
    languages: "Abyssal, Auran, Common, Draconic, Elven, Giant, Sylvan",
    spellLikeAbilities: [
      {
        name: "charm person",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "command plants",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "dominate person",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "entangle",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "plant growth",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "suggestion",
        casterLevel: 27,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 17,
      spells: [
        {
          name: "",
          limitations: "4/day",
          level: 8
        },
        {
          name: "sunburst",
          level: 8
        },
        {
          name: "",
          limitations: "6/day",
          level: 7
        },
        {
          name: "prismatic spray",
          level: 7
        },
        {
          name: "summon monster VII ",
          level: 7
        },
        {
          name: "",
          limitations: "7/day",
          level: 6
        },
        {
          name: "disintegrate",
          level: 6
        },
        {
          name: "true seeing ",
          level: 6
        },
        {
          name: "(7/day)-baleful polymorph",
          limitations: "7/day",
          level: 5
        },
        {
          name: "polymorph",
          level: 5
        },
        {
          name: "summon monster V",
          level: 5
        },
        {
          name: "teleport ",
          level: 5
        },
        {
          name: "",
          limitations: "7/day",
          level: 4
        },
        {
          name: "ice storm",
          level: 4
        },
        {
          name: "scrying",
          level: 4
        },
        {
          name: "stoneskin ",
          level: 4
        },
        {
          name: "",
          limitations: "7/day",
          level: 3
        },
        {
          name: "displacement",
          level: 3
        },
        {
          name: "fireball",
          level: 3
        },
        {
          name: "haste ",
          level: 3
        },
        {
          name: "",
          limitations: "8/day",
          level: 2
        },
        {
          name: "detect thoughts",
          level: 2
        },
        {
          name: "locate object",
          level: 2
        },
        {
          name: "mirror image",
          level: 2
        },
        {
          name: "see invisibility ",
          level: 2
        },
        {
          name: "",
          limitations: "8/day",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "silent image",
          level: 1
        },
        {
          name: "summon monster I",
          level: 1
        },
        {
          name: "ventriloquism",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "bleed",
          level: 0
        },
        {
          name: "dancing lights",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "ghost sound",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "resistance",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Fly: {
        ranks: 43
      },
      Intimidate: {
        ranks: 27
      },
      "Knowledge (arcana)": {
        ranks: 27
      },
      "Knowledge (local)": {
        ranks: 27
      },
      "Knowledge (nature)": {
        ranks: 27
      },
      "Knowledge (planes)": {
        ranks: 27
      },
      Perception: {
        ranks: 27
      },
      Spellcraft: {
        ranks: 27
      },
      Stealth: {
        ranks: 27
      },
      Survival: {
        ranks: 27
      },
      Swim: {
        ranks: 11,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      "Use Magic Device": {
        ranks: 27
      }
    },
    special: {
      "awaken treants": {
        type: "Su",
        text: "A great wyrm dragon can call on the forest itself to aid it, animating a number of trees to serve as treants to protect it. These treants can be called from any Huge or larger living tree. A green dragon can create a single treant as a standard action, up to a total of 4 treants per day. These treants remain animated for up to 1 hour, at which time they revert to being ordinary trees."
      },
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "70-ft. cone",
        damage: "24d6 acid",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "4d8+21",
        saveDC: 10
      },
      miasma: {
        type: "Su",
        text: "An ancient or older green dragon can use its breath weapon to create a cloud of acid as a standard action that deals damage to any creature inside it. The cloud moves with the dragon and has a radius of 20 feet. When it's created, anyone inside this area takes an amount of damage equal to half the dragon's breath weapon, with a Reflex save for half damage. The number of damage dice rolled is halved each round until the result would be less than 1d6. Any creature that starts its turn inside the cloud takes damage, but can make a Reflex save for half. A strong wind, such as that created by a gust of wind, disperses the cloud in 1 round."
      },
      "tail sweep": {
        universalMonsterAbility: "Tail Sweep",
        damage: "2d8+21",
        saveDC: 10
      },
      camouflage: {
        type: "Ex",
        text: "An old or older green dragon can use Stealth to hide in any sort of natural terrain, even if the terrain does not grant cover or concealment."
      },
      "trackless step": {
        type: "Ex",
        text: "An adult or older green dragon does not leave a trail in natural surroundings and cannot be tracked. A green dragon can choose to leave a trail, if it so desires."
      },
      "water breathing": {
        type: "Ex",
        text: "A green dragon can breathe underwater indefinitely and can freely use its breath weapon, spells, and other abilities while submerged."
      },
      "woodland stride": {
        type: "Ex",
        text: "A very young or older green dragon can move through any sort of foliage at full speed without taking damage or suffering impairment. Areas of foliage that have been magically manipulated affect it normally."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "360 ft."
      }
    }
  },

  "Wyrmling Red Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "fire"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Small",
    hd: 7,
    hdVal: 12,
    cr: 6,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 40,
      maneuverability: "Average",
      fly: 150
    },
    abilities: {
      str: 17,
      dex: 14,
      con: 15,
      int: 10,
      wis: 11,
      cha: 10
    },
    feats: [
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to sleep"
    ],
    defense: {
      naturalArmor: 6
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "warm mountains",
    visualDescription: "A crown of cruel horns surrounds the head of this mighty dragon. Thick scales the color of molten rock cover its long body.",
    description: "Few creatures are more cruel and fearsome than the mighty red dragon. King of the chromatics, this terrible beast brings ruin and death to the lands that fall under its shadow.",
    organization: "solitary",
    languages: "Draconic",
    spellLikeAbilities: [],
    skills: {
      Bluff: {
        ranks: 7
      },
      Fly: {
        ranks: 7
      },
      Intimidate: {
        ranks: 7
      },
      Perception: {
        ranks: 7
      },
      "Sense Motive": {
        ranks: 7
      },
      Stealth: {
        ranks: 7
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "20-ft. cone",
        damage: "2d10 fire",
        saveDC: 10
      }
    }
  },

  "Very Young Red Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "fire"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 9,
    hdVal: 12,
    cr: 8,
    racialFeatures: [
      "Dragon Senses",
      "Smoke Vision"
    ],
    speed: {
      base: 40,
      maneuverability: "Average",
      fly: 150
    },
    abilities: {
      str: 21,
      dex: 12,
      con: 17,
      int: 12,
      wis: 13,
      cha: 12
    },
    feats: [
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to sleep"
    ],
    defense: {
      naturalArmor: 9
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "warm mountains",
    visualDescription: "A crown of cruel horns surrounds the head of this mighty dragon. Thick scales the color of molten rock cover its long body.",
    description: "Few creatures are more cruel and fearsome than the mighty red dragon. King of the chromatics, this terrible beast brings ruin and death to the lands that fall under its shadow.",
    organization: "solitary",
    languages: "Common, Draconic",
    spellLikeAbilities: [],
    skills: {
      Appraise: {
        ranks: 9
      },
      Bluff: {
        ranks: 9
      },
      Fly: {
        ranks: 9
      },
      Intimidate: {
        ranks: 9
      },
      Perception: {
        ranks: 9
      },
      "Sense Motive": {
        ranks: 9
      },
      Stealth: {
        ranks: 9
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "30-ft. cone",
        damage: "4d10 fire",
        saveDC: 10
      }
    }
  },

  "Juvenile Red Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "fire"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Large",
    hd: 13,
    hdVal: 12,
    cr: 11,
    racialFeatures: [
      "Dragon Senses",
      "Smoke Vision"
    ],
    speed: {
      base: 40,
      maneuverability: "Poor",
      fly: 200
    },
    abilities: {
      str: 27,
      dex: 12,
      con: 21,
      int: 14,
      wis: 15,
      cha: 14
    },
    feats: [
      {
        name: "Hover",
        type: "Monster"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Bite",
        choiceSource: "Weapon Focus"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Claw",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Tail",
        name: "Tail",
        damage: "1d8"
      }
    ],
    immunities: [
      "Immune to sleep"
    ],
    defense: {
      naturalArmor: 15
    },
    space: "10 ft.",
    reach: "5 ft. (10 ft. with bite)",
    environment: "warm mountains",
    visualDescription: "A crown of cruel horns surrounds the head of this mighty dragon. Thick scales the color of molten rock cover its long body.",
    description: "Few creatures are more cruel and fearsome than the mighty red dragon. King of the chromatics, this terrible beast brings ruin and death to the lands that fall under its shadow.",
    organization: "solitary",
    languages: "Common, Draconic, Giant",
    spellLikeAbilities: [
      {
        name: "detect magic",
        casterLevel: 13,
        timesPerDay: -1
      },
      {
        name: "pyrotechnics",
        casterLevel: 13,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 3,
      spells: [
        {
          name: "",
          limitations: "4/day, 3 remaining",
          level: 1
        },
        {
          name: "ray of enfeeblement",
          level: 1
        },
        {
          name: "true strike ",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "flare",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "open/close",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Acrobatics: {
        ranks: 9
      },
      Appraise: {
        ranks: 13
      },
      Fly: {
        ranks: 17
      },
      Intimidate: {
        ranks: 13
      },
      Perception: {
        ranks: 13
      },
      "Sense Motive": {
        ranks: 13
      },
      Spellcraft: {
        ranks: 13
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "40 ft. cone",
        damage: "8d10 fire",
        saveDC: 10
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "120 ft."
      }
    }
  },

  "Young Adult Red Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "fire"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Huge",
    hd: 15,
    hdVal: 12,
    cr: 13,
    racialFeatures: [
      "Dragon Senses",
      "Smoke Vision"
    ],
    speed: {
      base: 40,
      maneuverability: "Poor",
      fly: 200
    },
    abilities: {
      str: 29,
      dex: 10,
      con: 21,
      int: 14,
      wis: 15,
      cha: 14
    },
    feats: [
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Iron Will",
        type: "General"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to sleep"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "magic"
      },
      SR: {
        value: 24
      },
      naturalArmor: 18
    },
    space: "15 ft.",
    reach: "10 ft. (15 ft. with bite)",
    environment: "warm mountains",
    visualDescription: "A crown of cruel horns surrounds the head of this mighty dragon. Thick scales the color of molten rock cover its long body.",
    description: "Few creatures are more cruel and fearsome than the mighty red dragon. King of the chromatics, this terrible beast brings ruin and death to the lands that fall under its shadow.",
    organization: "solitary",
    languages: "Common, Draconic, Orc",
    spellLikeAbilities: [
      {
        name: "detect magic",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "pyrotechnics",
        casterLevel: 15,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 5,
      spells: [
        {
          name: "",
          limitations: "5/day",
          level: 2
        },
        {
          name: "see invisibility ",
          level: 2
        },
        {
          name: "",
          limitations: "7/day",
          level: 1
        },
        {
          name: "magic missile",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "true strike",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "bleed",
          level: 0
        },
        {
          name: "light",
          level: 0
        },
        {
          name: "magehand",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Appraise: {
        ranks: 15
      },
      Bluff: {
        ranks: 15
      },
      Fly: {
        ranks: 15
      },
      Intimidate: {
        ranks: 15
      },
      "Knowledge (arcana)": {
        ranks: 15
      },
      Perception: {
        ranks: 15
      },
      "Sense Motive": {
        ranks: 15
      },
      Stealth: {
        ranks: 15
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "50-ft. cone",
        damage: "10d10 fire",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "2d8+13",
        saveDC: 10
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "150 ft."
      }
    }
  },

  "Mature Adult Red Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "fire"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Huge",
    hd: 19,
    hdVal: 12,
    cr: 15,
    racialFeatures: [
      "Dragon Senses",
      "Smoke Vision"
    ],
    speed: {
      base: 40,
      maneuverability: "Poor",
      fly: 200
    },
    abilities: {
      str: 33,
      dex: 10,
      con: 23,
      int: 16,
      wis: 17,
      cha: 16
    },
    feats: [
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Greater Vital Strike",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Iron Will",
        type: "General"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to sleep"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "magic"
      },
      SR: {
        value: 26
      },
      naturalArmor: 24
    },
    space: "15 ft.",
    reach: "10 ft. (15 ft. with bite)",
    environment: "warm mountains",
    visualDescription: "A crown of cruel horns surrounds the head of this mighty dragon. Thick scales the color of molten rock cover its long body.",
    description: "Few creatures are more cruel and fearsome than the mighty red dragon. King of the chromatics, this terrible beast brings ruin and death to the lands that fall under its shadow.",
    organization: "solitary",
    languages: "Common, Draconic, Dwarven, Orc",
    spellLikeAbilities: [
      {
        name: "detect magic",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "pyrotechnics",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "suggestion",
        casterLevel: 19,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 9,
      spells: [
        {
          name: "",
          limitations: "4/day",
          level: 4
        },
        {
          name: "stoneskin ",
          level: 4
        },
        {
          name: "",
          limitations: "7/day",
          level: 3
        },
        {
          name: "displacement",
          level: 3
        },
        {
          name: "haste ",
          level: 3
        },
        {
          name: "",
          limitations: "7/day",
          level: 2
        },
        {
          name: "misdirection",
          level: 2
        },
        {
          name: "resist energy",
          level: 2
        },
        {
          name: "see invisibility ",
          level: 2
        },
        {
          name: "",
          limitations: "7/day",
          level: 1
        },
        {
          name: "grease",
          level: 1
        },
        {
          name: "magic missile",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "true strike",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "bleed",
          level: 0
        },
        {
          name: "light",
          level: 0
        },
        {
          name: "magehand",
          level: 0
        },
        {
          name: "mending",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Appraise: {
        ranks: 19
      },
      Bluff: {
        ranks: 19
      },
      Fly: {
        ranks: 19
      },
      Intimidate: {
        ranks: 19
      },
      "Knowledge (arcana)": {
        ranks: 19
      },
      Perception: {
        ranks: 19
      },
      "Sense Motive": {
        ranks: 19
      },
      Spellcraft: {
        ranks: 19
      },
      Stealth: {
        ranks: 19
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "50-ft. cone",
        damage: "14d10 fire",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "2d8+16",
        saveDC: 10
      },
      "fire aura": {
        type: "Su",
        text: "An adult red dragon is surrounded by an aura of intense heat. All creatures within 5 feet take 1d6 points of fire damage at the beginning of the dragon's turn. An old dragon's aura extends to 10 feet. An ancient dragon's damage increases to 2d6. Smoke Vision (Ex) A very young red dragon can see perfectly in smoky conditions (such as those created by pyrotechnics).",
        preText: "5 ft., 1d6 fire"
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "210 ft."
      }
    }
  },

  "Old Red Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "fire"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Gargantuan",
    hd: 21,
    hdVal: 12,
    cr: 17,
    racialFeatures: [
      "Dragon Senses",
      "Smoke Vision"
    ],
    speed: {
      base: 40,
      maneuverability: "Clumsy",
      fly: 250
    },
    abilities: {
      str: 35,
      dex: 8,
      con: 25,
      int: 18,
      wis: 19,
      cha: 18
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
        name: "Greater Vital Strike",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Iron Will",
        type: "General"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to sleep"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "magic"
      },
      SR: {
        value: 28
      },
      naturalArmor: 27
    },
    space: "20 ft.",
    reach: "15 ft. (20 ft. with bite)",
    environment: "warm mountains",
    visualDescription: "A crown of cruel horns surrounds the head of this mighty dragon. Thick scales the color of molten rock cover its long body.",
    description: "Few creatures are more cruel and fearsome than the mighty red dragon. King of the chromatics, this terrible beast brings ruin and death to the lands that fall under its shadow.",
    organization: "solitary",
    languages: "Common, Draconic, Dwarven, Giant, Orc",
    spellLikeAbilities: [
      {
        name: "detect magic",
        casterLevel: 21,
        timesPerDay: -1
      },
      {
        name: "pyrotechnics",
        casterLevel: 21,
        timesPerDay: -1
      },
      {
        name: "suggestion",
        casterLevel: 21,
        timesPerDay: -1
      },
      {
        name: "wall of fire",
        casterLevel: 21,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 11,
      spells: [
        {
          name: "",
          limitations: "4/day",
          level: 5
        },
        {
          name: "wall of force ",
          level: 5
        },
        {
          name: "",
          limitations: "7/day",
          level: 4
        },
        {
          name: "invisibility, greater",
          level: 4
        },
        {
          name: "stoneskin ",
          level: 4
        },
        {
          name: "",
          limitations: "7/day",
          level: 3
        },
        {
          name: "displacement",
          level: 3
        },
        {
          name: "haste",
          level: 3
        },
        {
          name: "tongues ",
          level: 3
        },
        {
          name: "",
          limitations: "7/day",
          level: 2
        },
        {
          name: "detect thoughts",
          level: 2
        },
        {
          name: "misdirection",
          level: 2
        },
        {
          name: "resist energy",
          level: 2
        },
        {
          name: "see invisibility ",
          level: 2
        },
        {
          name: "",
          limitations: "7/day",
          level: 1
        },
        {
          name: "grease",
          level: 1
        },
        {
          name: "magic missile",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "true strike",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "bleed",
          level: 0
        },
        {
          name: "light",
          level: 0
        },
        {
          name: "magehand",
          level: 0
        },
        {
          name: "mending",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "open/close",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Appraise: {
        ranks: 21
      },
      Bluff: {
        ranks: 21
      },
      Diplomacy: {
        ranks: 21
      },
      Fly: {
        ranks: 23
      },
      Intimidate: {
        ranks: 21
      },
      "Knowledge (arcana)": {
        ranks: 21
      },
      Perception: {
        ranks: 21
      },
      "Sense Motive": {
        ranks: 21
      },
      Spellcraft: {
        ranks: 21
      },
      Stealth: {
        ranks: 21
      }
    },
    special: {
      fire: {
        name: "fire aura",
        preText: "10 ft., 1d6 fire"
      },
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "60-ft. cone",
        damage: "16d10 fire",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "4d6+18",
        saveDC: 10
      },
      "manipulate flames": {
        type: "Su",
        text: "An old or older red dragon can control any fire spell within 10 feet per age category of the dragon as a standard action. This ability allows it to move any fire effect in the area, as if it were the caster. This ability also allows it to reposition a stationary fire effect, although the new placement must be one allowed by the spell. Finally, for 1 round following the use of this ability, the dragon can control any new fire spell cast within its area of control, as if it were the caster. It can make all decisions allowed to the caster, including canceling the spell if it so desires. Smoke Vision (Ex) A very young red dragon can see perfectly in smoky conditions (such as those created by pyrotechnics)."
      },
      "tail sweep": {
        universalMonsterAbility: "Tail Sweep",
        damage: "2d6+18",
        saveDC: 10
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "240 ft."
      }
    }
  },

  "Very Old Red Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "fire"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Gargantuan",
    hd: 23,
    hdVal: 12,
    cr: 18,
    racialFeatures: [
      "Dragon Senses",
      "Smoke Vision"
    ],
    speed: {
      base: 40,
      maneuverability: "Clumsy",
      fly: 250
    },
    abilities: {
      str: 37,
      dex: 8,
      con: 25,
      int: 18,
      wis: 19,
      cha: 18
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
        name: "Greater Vital Strike",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Iron Will",
        type: "General"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Stunning Critical",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to sleep"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "magic"
      },
      SR: {
        value: 29
      },
      naturalArmor: 30
    },
    space: "20 ft.",
    reach: "15 ft. (20 ft. with bite)",
    environment: "warm mountains",
    visualDescription: "A crown of cruel horns surrounds the head of this mighty dragon. Thick scales the color of molten rock cover its long body.",
    description: "Few creatures are more cruel and fearsome than the mighty red dragon. King of the chromatics, this terrible beast brings ruin and death to the lands that fall under its shadow.",
    organization: "solitary",
    languages: "Common, Draconic, Dwarven, Giant, Orc",
    spellLikeAbilities: [
      {
        name: "detect magic",
        casterLevel: 23,
        timesPerDay: -1
      },
      {
        name: "pyrotechnics",
        casterLevel: 23,
        timesPerDay: -1
      },
      {
        name: "suggestion",
        casterLevel: 23,
        timesPerDay: -1
      },
      {
        name: "wall of fire",
        casterLevel: 23,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 13,
      spells: [
        {
          name: "",
          limitations: "4/day",
          level: 6
        },
        {
          name: "contingency ",
          level: 6
        },
        {
          name: "",
          limitations: "6/day",
          level: 5
        },
        {
          name: "teleport",
          level: 5
        },
        {
          name: "wall of force ",
          level: 5
        },
        {
          name: "(7/day)-fear",
          limitations: "7/day",
          level: 4
        },
        {
          name: "fire shield",
          level: 4
        },
        {
          name: "invisibility, greater",
          level: 4
        },
        {
          name: "stoneskin ",
          level: 4
        },
        {
          name: "",
          limitations: "7/day",
          level: 3
        },
        {
          name: "displacement",
          level: 3
        },
        {
          name: "haste",
          level: 3
        },
        {
          name: "tongues ",
          level: 3
        },
        {
          name: "",
          limitations: "7/day",
          level: 2
        },
        {
          name: "detect thoughts",
          level: 2
        },
        {
          name: "misdirection",
          level: 2
        },
        {
          name: "resist energy",
          level: 2
        },
        {
          name: "see invisibility ",
          level: 2
        },
        {
          name: "",
          limitations: "7/day",
          level: 1
        },
        {
          name: "grease",
          level: 1
        },
        {
          name: "magic missile",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "true strike",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "bleed",
          level: 0
        },
        {
          name: "light",
          level: 0
        },
        {
          name: "magehand",
          level: 0
        },
        {
          name: "mending",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "open/close",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Appraise: {
        ranks: 23
      },
      Bluff: {
        ranks: 23
      },
      Diplomacy: {
        ranks: 23
      },
      Fly: {
        ranks: 25
      },
      Intimidate: {
        ranks: 23
      },
      "Knowledge (arcana)": {
        ranks: 23
      },
      Perception: {
        ranks: 23
      },
      "Sense Motive": {
        ranks: 23
      },
      Spellcraft: {
        ranks: 23
      },
      Stealth: {
        ranks: 23
      }
    },
    special: {
      fire: {
        name: "fire aura",
        preText: "10 ft., 1d6 fire"
      },
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "60-ft. cone",
        damage: "18d10 fire",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "4d6+19",
        saveDC: 10
      },
      "manipulate flames": {
        type: "Su",
        text: "An old or older red dragon can control any fire spell within 10 feet per age category of the dragon as a standard action. This ability allows it to move any fire effect in the area, as if it were the caster. This ability also allows it to reposition a stationary fire effect, although the new placement must be one allowed by the spell. Finally, for 1 round following the use of this ability, the dragon can control any new fire spell cast within its area of control, as if it were the caster. It can make all decisions allowed to the caster, including canceling the spell if it so desires. Smoke Vision (Ex) A very young red dragon can see perfectly in smoky conditions (such as those created by pyrotechnics)."
      },
      "tail sweep": {
        universalMonsterAbility: "Tail Sweep",
        damage: "2d6+19",
        saveDC: 10
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "270 ft."
      }
    }
  },

  "Wyrm Red Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "fire"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Gargantuan",
    hd: 27,
    hdVal: 12,
    cr: 20,
    racialFeatures: [
      "Dragon Senses",
      "Smoke Vision"
    ],
    speed: {
      base: 40,
      maneuverability: "Clumsy",
      fly: 250
    },
    abilities: {
      str: 41,
      dex: 6,
      con: 27,
      int: 20,
      wis: 21,
      cha: 20
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
        name: "Greater Vital Strike",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Iron Will",
        type: "General"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Quicken Spell",
        type: "Metamagic"
      },
      {
        name: "Stunning Critical",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      },
      {
        name: "Wingover",
        type: "Monster"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to sleep"
    ],
    defense: {
      DR: {
        value: 20,
        damageType: "magic"
      },
      SR: {
        value: 31
      },
      naturalArmor: 36
    },
    space: "20 ft.",
    reach: "15 ft. (20 ft. with bite)",
    environment: "warm mountains",
    visualDescription: "A crown of cruel horns surrounds the head of this mighty dragon. Thick scales the color of molten rock cover its long body.",
    description: "Few creatures are more cruel and fearsome than the mighty red dragon. King of the chromatics, this terrible beast brings ruin and death to the lands that fall under its shadow.",
    organization: "solitary",
    languages: "Abyssal, Common, Draconic, Dwarven, Giant, Orc",
    spellLikeAbilities: [
      {
        name: "detect magic",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "find the path",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "pyrotechnics",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "suggestion",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "wall of fire",
        casterLevel: 27,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 17,
      spells: [
        {
          name: "",
          limitations: "4/day",
          level: 8
        },
        {
          name: "prismatic wall ",
          level: 8
        },
        {
          name: "",
          limitations: "6/day",
          level: 7
        },
        {
          name: "hold person, mass",
          level: 7
        },
        {
          name: "spell turning ",
          level: 7
        },
        {
          name: "",
          limitations: "6/day",
          level: 6
        },
        {
          name: "contingency",
          level: 6
        },
        {
          name: "dispel magic, greater",
          level: 6
        },
        {
          name: "",
          limitations: "7/day",
          level: 5
        },
        {
          name: "telekinesis",
          level: 5
        },
        {
          name: "teleport",
          level: 5
        },
        {
          name: "wall of force ",
          level: 5
        },
        {
          name: "(7/day)-fear",
          limitations: "7/day",
          level: 4
        },
        {
          name: "fire shield",
          level: 4
        },
        {
          name: "invisibility, greater",
          level: 4
        },
        {
          name: "stoneskin ",
          level: 4
        },
        {
          name: "",
          limitations: "7/day",
          level: 3
        },
        {
          name: "displacement",
          level: 3
        },
        {
          name: "haste",
          level: 3
        },
        {
          name: "tongues ",
          level: 3
        },
        {
          name: "",
          limitations: "7/day",
          level: 2
        },
        {
          name: "detect thoughts",
          level: 2
        },
        {
          name: "misdirection",
          level: 2
        },
        {
          name: "resist energy",
          level: 2
        },
        {
          name: "see invisibility ",
          level: 2
        },
        {
          name: "",
          limitations: "8/day",
          level: 1
        },
        {
          name: "grease",
          level: 1
        },
        {
          name: "magic missile",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "true strike",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "bleed",
          level: 0
        },
        {
          name: "light",
          level: 0
        },
        {
          name: "magehand",
          level: 0
        },
        {
          name: "mending",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "open/close",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Appraise: {
        ranks: 27
      },
      Bluff: {
        ranks: 27
      },
      Diplomacy: {
        ranks: 27
      },
      Fly: {
        ranks: 37
      },
      Intimidate: {
        ranks: 27
      },
      "Knowledge (arcana)": {
        ranks: 27
      },
      "Knowledge (history)": {
        ranks: 27
      },
      Perception: {
        ranks: 27
      },
      "Sense Motive": {
        ranks: 27
      },
      Spellcraft: {
        ranks: 27
      },
      Stealth: {
        ranks: 27
      }
    },
    special: {
      fire: {
        name: "fire aura",
        preText: "10 ft., 2d6 fire"
      },
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "60-ft. cone",
        damage: "22d10 fire",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "4d6+22",
        saveDC: 10
      },
      "manipulate flames": {
        type: "Su",
        text: "An old or older red dragon can control any fire spell within 10 feet per age category of the dragon as a standard action. This ability allows it to move any fire effect in the area, as if it were the caster. This ability also allows it to reposition a stationary fire effect, although the new placement must be one allowed by the spell. Finally, for 1 round following the use of this ability, the dragon can control any new fire spell cast within its area of control, as if it were the caster. It can make all decisions allowed to the caster, including canceling the spell if it so desires."
      },
      "melt stone": {
        type: "Su",
        text: "An ancient or older red dragon can use its breath weapon to melt rock at a range of 100 feet, affecting a 5-foot-radius area per age category. The area becomes lava to a depth of 1 foot. Any creature in contact with the lava takes 20d6 points of fire damage on the first round, 10d6 on the second, and none thereafter as the lava hardens and cools. If used on a wall or ceiling, treat this ability as an avalanche that deals fire damage. Smoke Vision (Ex) A very young red dragon can see perfectly in smoky conditions (such as those created by pyrotechnics)."
      },
      "tail sweep": {
        universalMonsterAbility: "Tail Sweep",
        damage: "2d6+22",
        saveDC: 10
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "330 ft."
      }
    }
  },

  "Great Wyrm Red Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "fire"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Colossal",
    hd: 29,
    hdVal: 12,
    cr: 22,
    racialFeatures: [
      "Dragon Senses",
      "Smoke Vision"
    ],
    speed: {
      base: 40,
      maneuverability: "Clumsy",
      fly: 250
    },
    abilities: {
      str: 43,
      dex: 6,
      con: 29,
      int: 22,
      wis: 23,
      cha: 22
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
        name: "Empower Spell",
        type: "Metamagic"
      },
      {
        name: "Greater Vital Strike",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Iron Will",
        type: "General"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Quicken Spell",
        type: "Metamagic"
      },
      {
        name: "Stunning Critical",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      },
      {
        name: "Wingover",
        type: "Monster"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to sleep"
    ],
    defense: {
      DR: {
        value: 20,
        damageType: "magic"
      },
      SR: {
        value: 33
      },
      naturalArmor: 39
    },
    space: "30 ft.",
    reach: "20 ft. (30 ft. with bite)",
    environment: "warm mountains",
    visualDescription: "A crown of cruel horns surrounds the head of this mighty dragon. Thick scales the color of molten rock cover its long body.",
    description: "Few creatures are more cruel and fearsome than the mighty red dragon. King of the chromatics, this terrible beast brings ruin and death to the lands that fall under its shadow.",
    organization: "solitary",
    languages: "Abyssal, Common, Draconic, Dwarven, Giant, Ignan, Orc",
    spellLikeAbilities: [
      {
        name: "detect magic",
        casterLevel: 29,
        timesPerDay: -1
      },
      {
        name: "discern location",
        casterLevel: 29,
        timesPerDay: -1
      },
      {
        name: "find the path",
        casterLevel: 29,
        timesPerDay: -1
      },
      {
        name: "pyrotechnics",
        casterLevel: 29,
        timesPerDay: -1
      },
      {
        name: "suggestion",
        casterLevel: 29,
        timesPerDay: -1
      },
      {
        name: "wall of fire",
        casterLevel: 29,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 19,
      spells: [
        {
          name: "",
          limitations: "4/day",
          level: 9
        },
        {
          name: "weird ",
          level: 9
        },
        {
          name: "",
          limitations: "6/day",
          level: 8
        },
        {
          name: "prismatic wall",
          level: 8
        },
        {
          name: "screen ",
          level: 8
        },
        {
          name: "",
          limitations: "6/day",
          level: 7
        },
        {
          name: "hold person, mass",
          level: 7
        },
        {
          name: "spell turning ",
          level: 7
        },
        {
          name: "",
          limitations: "7/day",
          level: 6
        },
        {
          name: "contingency",
          level: 6
        },
        {
          name: "dispel magic, greater",
          level: 6
        },
        {
          name: "",
          limitations: "7/day",
          level: 5
        },
        {
          name: "telekinesis",
          level: 5
        },
        {
          name: "teleport",
          level: 5
        },
        {
          name: "wall of force ",
          level: 5
        },
        {
          name: "(7/day)-fear",
          limitations: "7/day",
          level: 4
        },
        {
          name: "fire shield",
          level: 4
        },
        {
          name: "invisibility, greater",
          level: 4
        },
        {
          name: "stoneskin ",
          level: 4
        },
        {
          name: "",
          limitations: "7/day",
          level: 3
        },
        {
          name: "displacement",
          level: 3
        },
        {
          name: "haste",
          level: 3
        },
        {
          name: "tongues ",
          level: 3
        },
        {
          name: "",
          limitations: "8/day",
          level: 2
        },
        {
          name: "detect thoughts",
          level: 2
        },
        {
          name: "misdirection",
          level: 2
        },
        {
          name: "resist energy",
          level: 2
        },
        {
          name: "see invisibility ",
          level: 2
        },
        {
          name: "",
          limitations: "8/day",
          level: 1
        },
        {
          name: "grease",
          level: 1
        },
        {
          name: "magic missile",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "true strike",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "bleed",
          level: 0
        },
        {
          name: "light",
          level: 0
        },
        {
          name: "magehand",
          level: 0
        },
        {
          name: "mending",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "open/close",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Appraise: {
        ranks: 29
      },
      Bluff: {
        ranks: 29
      },
      Diplomacy: {
        ranks: 29
      },
      Fly: {
        ranks: 45
      },
      Intimidate: {
        ranks: 29
      },
      "Knowledge (arcana)": {
        ranks: 29
      },
      "Knowledge (history)": {
        ranks: 29
      },
      Perception: {
        ranks: 29
      },
      "Sense Motive": {
        ranks: 29
      },
      Spellcraft: {
        ranks: 29
      },
      Stealth: {
        ranks: 29
      },
      "Use Magic Device": {
        ranks: 29
      }
    },
    special: {
      fire: {
        name: "fire aura",
        preText: "10 ft., 2d6 fire"
      },
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "70-ft. cone",
        damage: "24d10 fire",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "4d6+24",
        saveDC: 10
      },
      incinerate: {
        type: "Su",
        text: "A great wyrm red dragon can incinerate creatures in its fiery breath. A creature reduced to fewer than 0 hit points by its breath weapon must make a Fortitude save (using the breath weapon's DC). Failure indicates that the creature is reduced to ash. Creatures destroyed in this way can only be restored to life through true resurrection or similar magic."
      },
      "manipulate flames": {
        type: "Su",
        text: "An old or older red dragon can control any fire spell within 10 feet per age category of the dragon as a standard action. This ability allows it to move any fire effect in the area, as if it were the caster. This ability also allows it to reposition a stationary fire effect, although the new placement must be one allowed by the spell. Finally, for 1 round following the use of this ability, the dragon can control any new fire spell cast within its area of control, as if it were the caster. It can make all decisions allowed to the caster, including canceling the spell if it so desires."
      },
      "melt stone": {
        type: "Su",
        text: "An ancient or older red dragon can use its breath weapon to melt rock at a range of 100 feet, affecting a 5-foot-radius area per age category. The area becomes lava to a depth of 1 foot. Any creature in contact with the lava takes 20d6 points of fire damage on the first round, 10d6 on the second, and none thereafter as the lava hardens and cools. If used on a wall or ceiling, treat this ability as an avalanche that deals fire damage. Smoke Vision (Ex) A very young red dragon can see perfectly in smoky conditions (such as those created by pyrotechnics)."
      },
      "tail sweep": {
        universalMonsterAbility: "Tail Sweep",
        damage: "2d8+24",
        saveDC: 4
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "360 ft."
      }
    }
  },

  "Wyrmling White Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "cold"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Tiny",
    hd: 3,
    hdVal: 12,
    cr: 2,
    racialFeatures: [
      "Dragon Senses",
      "Perception +7"
    ],
    speed: {
      base: 30,
      burrow: 30,
      maneuverability: "Average",
      fly: 100,
      swim: 60
    },
    abilities: {
      str: 11,
      dex: 16,
      con: 13,
      int: 6,
      wis: 9,
      cha: 6
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to sleep"
    ],
    defense: {
      naturalArmor: 2
    },
    space: "2.5 ft.",
    reach: "0 ft. (5 ft. with bite)",
    environment: "cold mountains",
    visualDescription: "This dragon's scales are a frosty white. Its head is crowned with slender horns, with a thin membrane stretched between them.",
    description: "Although most consider it to be the weakest and most feral of the chromatic dragons, the white dragon makes up for its lack of cunning with sheer ferocity. White dragons dwell on remote, frozen mountaintops and in arctic lowlands, making their home in glittering caves full of ice and snow. They prefer their meals completely frozen.",
    organization: "solitary",
    languages: "Draconic",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 3
      },
      Perception: {
        ranks: 3
      },
      Stealth: {
        ranks: 3
      },
      Swim: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "15 ft. cone",
        damage: "2d4 cold",
        saveDC: 10
      }
    }
  },

  "Very Young White Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "cold"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Small",
    hd: 5,
    hdVal: 12,
    cr: 4,
    racialFeatures: [
      "Dragon Senses",
      "Snow Vision"
    ],
    speed: {
      base: 30,
      burrow: 30,
      maneuverability: "Average",
      fly: 150,
      swim: 60
    },
    abilities: {
      str: 15,
      dex: 14,
      con: 15,
      int: 8,
      wis: 11,
      cha: 8
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to sleep"
    ],
    defense: {
      naturalArmor: 5
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "cold mountains",
    visualDescription: "This dragon's scales are a frosty white. Its head is crowned with slender horns, with a thin membrane stretched between them.",
    description: "Although most consider it to be the weakest and most feral of the chromatic dragons, the white dragon makes up for its lack of cunning with sheer ferocity. White dragons dwell on remote, frozen mountaintops and in arctic lowlands, making their home in glittering caves full of ice and snow. They prefer their meals completely frozen.",
    organization: "solitary",
    languages: "Draconic",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 5
      },
      Intimidate: {
        ranks: 5
      },
      Perception: {
        ranks: 5
      },
      Stealth: {
        ranks: 5
      },
      Swim: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "20-ft. cone",
        damage: "4d4 cold",
        saveDC: 10
      },
      icewalking: {
        type: "Ex",
        text: "This ability works like the spider climb spell, but the surfaces the dragon climbs must be icy. The dragon can move across icy surfaces without penalty and does not need to make Acrobatics checks to run or charge on ice. Snow Vision (Ex) A very young white dragon learns to see perfectly well in snowy conditions. A white dragon does not suffer any penalties to Perception checks while in snow."
      }
    }
  },

  "Juvenile White Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "cold"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 9,
    hdVal: 12,
    cr: 7,
    racialFeatures: [
      "Dragon Senses",
      "Snow Vision"
    ],
    speed: {
      base: 30,
      burrow: 30,
      maneuverability: "Average",
      fly: 150,
      swim: 60
    },
    abilities: {
      str: 21,
      dex: 14,
      con: 19,
      int: 10,
      wis: 13,
      cha: 10
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Bite",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to sleep"
    ],
    defense: {
      naturalArmor: 11
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "cold mountains",
    visualDescription: "This dragon's scales are a frosty white. Its head is crowned with slender horns, with a thin membrane stretched between them.",
    description: "Although most consider it to be the weakest and most feral of the chromatic dragons, the white dragon makes up for its lack of cunning with sheer ferocity. White dragons dwell on remote, frozen mountaintops and in arctic lowlands, making their home in glittering caves full of ice and snow. They prefer their meals completely frozen.",
    organization: "solitary",
    languages: "Draconic",
    spellLikeAbilities: [
      {
        name: "fog cloud",
        casterLevel: 9,
        timesPerDay: -1
      }
    ],
    skills: {
      Fly: {
        ranks: 9
      },
      Intimidate: {
        ranks: 9
      },
      Perception: {
        ranks: 9
      },
      Spellcraft: {
        ranks: 9
      },
      Stealth: {
        ranks: 9
      },
      Swim: {
        ranks: 1,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "30-ft. cone",
        damage: "8d4 cold",
        saveDC: 10
      },
      icewalking: {
        type: "Ex",
        text: "This ability works like the spider climb spell, but the surfaces the dragon climbs must be icy. The dragon can move across icy surfaces without penalty and does not need to make Acrobatics checks to run or charge on ice. Snow Vision (Ex) A very young white dragon learns to see perfectly well in snowy conditions. A white dragon does not suffer any penalties to Perception checks while in snow."
      },
      "ice shape": {
        type: "Su",
        text: "A young white dragon can shape ice and snow at will. This ability functions as stone shape, but only targeting ice and snow, not stone. A white dragon's caster level for this effect is equal to its Hit Dice."
      }
    }
  },

  "Young Adult White Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "cold"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Large",
    hd: 11,
    hdVal: 12,
    cr: 9,
    racialFeatures: [
      "Dragon Senses",
      "Snow Vision"
    ],
    speed: {
      base: 30,
      burrow: 30,
      maneuverability: "Poor",
      fly: 200,
      swim: 60
    },
    abilities: {
      str: 23,
      dex: 12,
      con: 19,
      int: 10,
      wis: 13,
      cha: 10
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Bite",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to sleep"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "magic"
      },
      SR: {
        value: 20
      },
      naturalArmor: 14
    },
    space: "10 ft.",
    reach: "5 ft. (10 ft. with bite)",
    environment: "cold mountains",
    visualDescription: "This dragon's scales are a frosty white. Its head is crowned with slender horns, with a thin membrane stretched between them.",
    description: "Although most consider it to be the weakest and most feral of the chromatic dragons, the white dragon makes up for its lack of cunning with sheer ferocity. White dragons dwell on remote, frozen mountaintops and in arctic lowlands, making their home in glittering caves full of ice and snow. They prefer their meals completely frozen.",
    organization: "solitary",
    languages: "Draconic",
    spellLikeAbilities: [
      {
        name: "fog cloud",
        casterLevel: 11,
        timesPerDay: -1
      },
      {
        name: "gust of wind",
        casterLevel: 11,
        timesPerDay: -1
      }
    ],
    skills: {
      Fly: {
        ranks: 11
      },
      Intimidate: {
        ranks: 11
      },
      Perception: {
        ranks: 11
      },
      Spellcraft: {
        ranks: 11
      },
      Stealth: {
        ranks: 11
      },
      Swim: {
        ranks: 3,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "40-ft. cone",
        damage: "10d4 cold",
        saveDC: 10
      },
      icewalking: {
        type: "Ex",
        text: "This ability works like the spider climb spell, but the surfaces the dragon climbs must be icy. The dragon can move across icy surfaces without penalty and does not need to make Acrobatics checks to run or charge on ice. Snow Vision (Ex) A very young white dragon learns to see perfectly well in snowy conditions. A white dragon does not suffer any penalties to Perception checks while in snow."
      },
      "ice shape": {
        type: "Su",
        text: "A young white dragon can shape ice and snow at will. This ability functions as stone shape, but only targeting ice and snow, not stone. A white dragon's caster level for this effect is equal to its Hit Dice."
      }
    }
  },

  "Mature Adult White Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "cold"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Large",
    hd: 15,
    hdVal: 12,
    cr: 11,
    racialFeatures: [
      "Dragon Senses",
      "Snow Vision"
    ],
    speed: {
      base: 30,
      burrow: 30,
      maneuverability: "Poor",
      fly: 200,
      swim: 60
    },
    abilities: {
      str: 27,
      dex: 12,
      con: 21,
      int: 12,
      wis: 15,
      cha: 12
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Bite",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to sleep"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "magic"
      },
      SR: {
        value: 22
      },
      naturalArmor: 20
    },
    space: "10 ft.",
    reach: "5 ft. (10 ft. with bite)",
    environment: "cold mountains",
    visualDescription: "This dragon's scales are a frosty white. Its head is crowned with slender horns, with a thin membrane stretched between them.",
    description: "Although most consider it to be the weakest and most feral of the chromatic dragons, the white dragon makes up for its lack of cunning with sheer ferocity. White dragons dwell on remote, frozen mountaintops and in arctic lowlands, making their home in glittering caves full of ice and snow. They prefer their meals completely frozen.",
    organization: "solitary",
    languages: "Common, Draconic",
    spellLikeAbilities: [
      {
        name: "fog cloud",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "gust of wind",
        casterLevel: 15,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 3,
      spells: [
        {
          name: "",
          limitations: "6/day",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "true strike",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "ghost sound",
          level: 0
        },
        {
          name: "mending",
          level: 0
        },
        {
          name: "ray of frost",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Fly: {
        ranks: 15
      },
      Intimidate: {
        ranks: 15
      },
      "Knowledge (arcana)": {
        ranks: 15
      },
      Perception: {
        ranks: 15
      },
      Spellcraft: {
        ranks: 15
      },
      Stealth: {
        ranks: 15
      },
      Swim: {
        ranks: 7,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      cold: {
        name: "cold aura",
        preText: "5 ft., 1d6 cold damage"
      },
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "40-ft. cone",
        damage: "14d4 cold",
        saveDC: 10
      },
      icewalking: {
        type: "Ex",
        text: "This ability works like the spider climb spell, but the surfaces the dragon climbs must be icy. The dragon can move across icy surfaces without penalty and does not need to make Acrobatics checks to run or charge on ice. Snow Vision (Ex) A very young white dragon learns to see perfectly well in snowy conditions. A white dragon does not suffer any penalties to Perception checks while in snow."
      },
      "ice shape": {
        type: "Su",
        text: "A young white dragon can shape ice and snow at will. This ability functions as stone shape, but only targeting ice and snow, not stone. A white dragon's caster level for this effect is equal to its Hit Dice."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "210 ft."
      }
    }
  },

  "Old White Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "cold"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Huge",
    hd: 17,
    hdVal: 12,
    cr: 13,
    racialFeatures: [
      "Dragon Senses",
      "Snow Vision"
    ],
    speed: {
      base: 30,
      burrow: 30,
      maneuverability: "Poor",
      fly: 200,
      swim: 60
    },
    abilities: {
      str: 29,
      dex: 10,
      con: 23,
      int: 14,
      wis: 17,
      cha: 14
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
      },
      {
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Bite",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to sleep"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "magic"
      },
      SR: {
        value: 24
      },
      naturalArmor: 23
    },
    space: "15 ft.",
    reach: "10 ft. (15 ft. with bite)",
    environment: "cold mountains",
    visualDescription: "This dragon's scales are a frosty white. Its head is crowned with slender horns, with a thin membrane stretched between them.",
    description: "Although most consider it to be the weakest and most feral of the chromatic dragons, the white dragon makes up for its lack of cunning with sheer ferocity. White dragons dwell on remote, frozen mountaintops and in arctic lowlands, making their home in glittering caves full of ice and snow. They prefer their meals completely frozen.",
    organization: "solitary",
    languages: "Common, Draconic, Giant",
    spellLikeAbilities: [
      {
        name: "fog cloud",
        casterLevel: 17,
        timesPerDay: -1
      },
      {
        name: "gust of wind",
        casterLevel: 17,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 5,
      spells: [
        {
          name: "",
          limitations: "5/day",
          level: 2
        },
        {
          name: "invisibility ",
          level: 2
        },
        {
          name: "(7/day)-grease",
          limitations: "7/day",
          level: 1
        },
        {
          name: "magic aura",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "true strike",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "ghost sound",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "mending",
          level: 0
        },
        {
          name: "ray of frost",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Fly: {
        ranks: 17
      },
      Intimidate: {
        ranks: 17
      },
      "Knowledge (arcana)": {
        ranks: 17
      },
      Perception: {
        ranks: 17
      },
      "Sense Motive": {
        ranks: 17
      },
      Spellcraft: {
        ranks: 17
      },
      Stealth: {
        ranks: 17
      },
      Swim: {
        ranks: 9,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      cold: {
        name: "cold aura",
        preText: "10 ft., 1d6 cold damage"
      },
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "50-ft. cone",
        damage: "16d4 cold",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "2d8+13",
        saveDC: 10
      },
      "freezing fog": {
        type: "Sp",
        text: "An old white dragon can use this ability three times per day. It is similar to an acid fog spell but deals cold damage instead of acid damage. It also causes a rime of slippery ice to form on any surface the fog touches, creating the effect of a grease spell. The dragon is immune to the grease effect because of its icewalking ability. This ability is the equivalent of a 6th-level spell.",
        preText: "3/day, DC 18"
      },
      icewalking: {
        type: "Ex",
        text: "This ability works like the spider climb spell, but the surfaces the dragon climbs must be icy. The dragon can move across icy surfaces without penalty and does not need to make Acrobatics checks to run or charge on ice. Snow Vision (Ex) A very young white dragon learns to see perfectly well in snowy conditions. A white dragon does not suffer any penalties to Perception checks while in snow."
      },
      "ice shape": {
        type: "Su",
        text: "A young white dragon can shape ice and snow at will. This ability functions as stone shape, but only targeting ice and snow, not stone. A white dragon's caster level for this effect is equal to its Hit Dice."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "240 ft."
      }
    }
  },

  "Very Old White Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "cold"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Huge",
    hd: 19,
    hdVal: 12,
    cr: 14,
    racialFeatures: [
      "Dragon Senses",
      "Snow Vision"
    ],
    speed: {
      base: 30,
      burrow: 30,
      maneuverability: "Poor",
      fly: 200,
      swim: 60
    },
    abilities: {
      str: 31,
      dex: 10,
      con: 23,
      int: 14,
      wis: 17,
      cha: 14
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Greater Vital Strike",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
      },
      {
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Bite",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to sleep"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "magic"
      },
      SR: {
        value: 25
      },
      naturalArmor: 26
    },
    space: "15 ft.",
    reach: "10 ft. (15 ft. with bite)",
    environment: "cold mountains",
    visualDescription: "This dragon's scales are a frosty white. Its head is crowned with slender horns, with a thin membrane stretched between them.",
    description: "Although most consider it to be the weakest and most feral of the chromatic dragons, the white dragon makes up for its lack of cunning with sheer ferocity. White dragons dwell on remote, frozen mountaintops and in arctic lowlands, making their home in glittering caves full of ice and snow. They prefer their meals completely frozen.",
    organization: "solitary",
    languages: "Common, Draconic, Giant",
    spellLikeAbilities: [
      {
        name: "fog cloud",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "gust of wind",
        casterLevel: 19,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 7,
      spells: [
        {
          name: "",
          limitations: "4/day",
          level: 3
        },
        {
          name: "lightning bolt",
          level: 3
        },
        {
          name: "",
          limitations: "7/day",
          level: 2
        },
        {
          name: "invisibility",
          level: 2
        },
        {
          name: "resist energy ",
          level: 2
        },
        {
          name: "",
          limitations: "7/day",
          level: 1
        },
        {
          name: "grease",
          level: 1
        },
        {
          name: "magic aura",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "true strike",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "dancing lights",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "ghost sound",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "mending",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "ray of frost",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Fly: {
        ranks: 19
      },
      Intimidate: {
        ranks: 19
      },
      "Knowledge (arcana)": {
        ranks: 19
      },
      Perception: {
        ranks: 19
      },
      "Sense Motive": {
        ranks: 19
      },
      Spellcraft: {
        ranks: 19
      },
      Stealth: {
        ranks: 19
      },
      Swim: {
        ranks: 11,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      cold: {
        name: "cold aura",
        preText: "10 ft., 1d6 cold damage"
      },
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "50-ft. cone",
        damage: "18d4 cold",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "2d8+15",
        saveDC: 10
      },
      "freezing fog": {
        type: "Sp",
        text: "An old white dragon can use this ability three times per day. It is similar to an acid fog spell but deals cold damage instead of acid damage. It also causes a rime of slippery ice to form on any surface the fog touches, creating the effect of a grease spell. The dragon is immune to the grease effect because of its icewalking ability. This ability is the equivalent of a 6th-level spell.",
        preText: "3/day, DC 18"
      },
      icewalking: {
        type: "Ex",
        text: "This ability works like the spider climb spell, but the surfaces the dragon climbs must be icy. The dragon can move across icy surfaces without penalty and does not need to make Acrobatics checks to run or charge on ice. Snow Vision (Ex) A very young white dragon learns to see perfectly well in snowy conditions. A white dragon does not suffer any penalties to Perception checks while in snow."
      },
      "ice shape": {
        type: "Su",
        text: "A young white dragon can shape ice and snow at will. This ability functions as stone shape, but only targeting ice and snow, not stone. A white dragon's caster level for this effect is equal to its Hit Dice."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "270 ft."
      }
    }
  },

  "Wyrm White Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "cold"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Huge",
    hd: 23,
    hdVal: 12,
    cr: 16,
    racialFeatures: [
      "Dragon Senses",
      "Snow Vision"
    ],
    speed: {
      base: 30,
      burrow: 30,
      maneuverability: "Poor",
      fly: 200,
      swim: 60
    },
    abilities: {
      str: 35,
      dex: 8,
      con: 25,
      int: 16,
      wis: 19,
      cha: 16
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Greater Sunder",
        type: "Combat"
      },
      {
        name: "Greater Vital Strike",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Sunder",
        type: "Combat"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
      },
      {
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Bite",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to sleep"
    ],
    defense: {
      DR: {
        value: 20,
        damageType: "magic"
      },
      SR: {
        value: 27
      },
      naturalArmor: 32
    },
    space: "15 ft.",
    reach: "10 ft. (15 ft. with bite)",
    environment: "cold mountains",
    visualDescription: "This dragon's scales are a frosty white. Its head is crowned with slender horns, with a thin membrane stretched between them.",
    description: "Although most consider it to be the weakest and most feral of the chromatic dragons, the white dragon makes up for its lack of cunning with sheer ferocity. White dragons dwell on remote, frozen mountaintops and in arctic lowlands, making their home in glittering caves full of ice and snow. They prefer their meals completely frozen.",
    organization: "solitary",
    languages: "Common, Draconic, Giant, Orc",
    spellLikeAbilities: [
      {
        name: "fog cloud",
        casterLevel: 23,
        timesPerDay: -1
      },
      {
        name: "gust of wind",
        casterLevel: 23,
        timesPerDay: -1
      },
      {
        name: "wall of ice",
        casterLevel: 23,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 11,
      spells: [
        {
          name: "",
          limitations: "4/day",
          level: 5
        },
        {
          name: "wall of force ",
          level: 5
        },
        {
          name: "(6/day)-charm monster",
          limitations: "6/day",
          level: 4
        },
        {
          name: "dimension door",
          level: 4
        },
        {
          name: "stoneskin ",
          level: 4
        },
        {
          name: "",
          limitations: "7/day",
          level: 3
        },
        {
          name: "displacement",
          level: 3
        },
        {
          name: "lightning bolt",
          level: 3
        },
        {
          name: "slow ",
          level: 3
        },
        {
          name: "",
          limitations: "7/day",
          level: 2
        },
        {
          name: "fog cloud",
          level: 2
        },
        {
          name: "invisibility",
          level: 2
        },
        {
          name: "resist energy",
          level: 2
        },
        {
          name: "see invisibility ",
          level: 2
        },
        {
          name: "",
          limitations: "7/day",
          level: 1
        },
        {
          name: "grease",
          level: 1
        },
        {
          name: "magic aura",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "true strike",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "dancing lights",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "ghost sound",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "mending",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "ray of frost",
          level: 0
        },
        {
          name: "resistance",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Fly: {
        ranks: 23
      },
      Intimidate: {
        ranks: 23
      },
      "Knowledge (arcana)": {
        ranks: 23
      },
      "Knowledge (history)": {
        ranks: 23
      },
      Perception: {
        ranks: 23
      },
      "Sense Motive": {
        ranks: 23
      },
      Spellcraft: {
        ranks: 23
      },
      Stealth: {
        ranks: 23
      },
      Swim: {
        ranks: 15,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      cold: {
        name: "cold aura",
        preText: "10 ft., 2d6 cold damage"
      },
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "50-ft. cone",
        damage: "22d4 cold",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "2d8+18",
        saveDC: 10
      },
      "freezing fog": {
        type: "Sp",
        text: "An old white dragon can use this ability three times per day. It is similar to an acid fog spell but deals cold damage instead of acid damage. It also causes a rime of slippery ice to form on any surface the fog touches, creating the effect of a grease spell. The dragon is immune to the grease effect because of its icewalking ability. This ability is the equivalent of a 6th-level spell.",
        preText: "3/day, DC 19"
      },
      icewalking: {
        type: "Ex",
        text: "This ability works like the spider climb spell, but the surfaces the dragon climbs must be icy. The dragon can move across icy surfaces without penalty and does not need to make Acrobatics checks to run or charge on ice. Snow Vision (Ex) A very young white dragon learns to see perfectly well in snowy conditions. A white dragon does not suffer any penalties to Perception checks while in snow."
      },
      "ice shape": {
        type: "Su",
        text: "A young white dragon can shape ice and snow at will. This ability functions as stone shape, but only targeting ice and snow, not stone. A white dragon's caster level for this effect is equal to its Hit Dice."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "330 ft."
      }
    }
  },

  "Great Wyrm White Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "cold"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Gargantuan",
    hd: 25,
    hdVal: 12,
    cr: 18,
    racialFeatures: [
      "Dragon Senses",
      "Snow Vision"
    ],
    speed: {
      base: 30,
      burrow: 30,
      maneuverability: "Clumsy",
      fly: 250,
      swim: 60
    },
    abilities: {
      str: 37,
      dex: 8,
      con: 27,
      int: 18,
      wis: 21,
      cha: 18
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Greater Sunder",
        type: "Combat"
      },
      {
        name: "Greater Vital Strike",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Sunder",
        type: "Combat"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
      },
      {
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Bite",
        choiceSource: "Weapon Focus"
      },
      {
        name: "Wingover",
        type: "Monster"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to sleep"
    ],
    defense: {
      DR: {
        value: 20,
        damageType: "magic"
      },
      SR: {
        value: 29
      },
      naturalArmor: 35
    },
    space: "20 ft.",
    reach: "15 ft. (20 ft. with bite)",
    environment: "cold mountains",
    visualDescription: "This dragon's scales are a frosty white. Its head is crowned with slender horns, with a thin membrane stretched between them.",
    description: "Although most consider it to be the weakest and most feral of the chromatic dragons, the white dragon makes up for its lack of cunning with sheer ferocity. White dragons dwell on remote, frozen mountaintops and in arctic lowlands, making their home in glittering caves full of ice and snow. They prefer their meals completely frozen.",
    organization: "solitary",
    languages: "Common, Draconic, Dwarven, Giant, Orc",
    spellLikeAbilities: [
      {
        name: "control weather",
        casterLevel: 25,
        timesPerDay: -1
      },
      {
        name: "fog cloud",
        casterLevel: 25,
        timesPerDay: -1
      },
      {
        name: "gust of wind",
        casterLevel: 25,
        timesPerDay: -1
      },
      {
        name: "wall of ice",
        casterLevel: 25,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 13,
      spells: [
        {
          name: "",
          limitations: "4/day",
          level: 6
        },
        {
          name: "mislead ",
          level: 6
        },
        {
          name: "",
          limitations: "6/day",
          level: 5
        },
        {
          name: "hold monster",
          level: 5
        },
        {
          name: "wall of force ",
          level: 5
        },
        {
          name: "",
          limitations: "7/day",
          level: 4
        },
        {
          name: "charm monster",
          level: 4
        },
        {
          name: "dimension door",
          level: 4
        },
        {
          name: "stoneskin ",
          level: 4
        },
        {
          name: "",
          limitations: "7/day",
          level: 3
        },
        {
          name: "displacement",
          level: 3
        },
        {
          name: "lightning bolt",
          level: 3
        },
        {
          name: "slow ",
          level: 3
        },
        {
          name: "",
          limitations: "7/day",
          level: 2
        },
        {
          name: "fog cloud",
          level: 2
        },
        {
          name: "invisibility",
          level: 2
        },
        {
          name: "resist energy",
          level: 2
        },
        {
          name: "see invisibility ",
          level: 2
        },
        {
          name: "",
          limitations: "7/day",
          level: 1
        },
        {
          name: "grease",
          level: 1
        },
        {
          name: "magic aura",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "true strike",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "dancing lights",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "ghost sound",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "mending",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "ray of frost",
          level: 0
        },
        {
          name: "resistance",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Fly: {
        ranks: 35
      },
      Intimidate: {
        ranks: 25
      },
      "Knowledge (arcana)": {
        ranks: 25
      },
      "Knowledge (history)": {
        ranks: 25
      },
      Perception: {
        ranks: 25
      },
      "Sense Motive": {
        ranks: 25
      },
      Spellcraft: {
        ranks: 25
      },
      Stealth: {
        ranks: 25
      },
      Survival: {
        ranks: 25
      },
      Swim: {
        ranks: 11,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      cold: {
        name: "cold aura",
        preText: "10 ft., 2d6 cold damage"
      },
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "60-ft. cone",
        damage: "24d4 cold",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "4d6+19",
        saveDC: 10
      },
      "freezing fog": {
        type: "Sp",
        text: "An old white dragon can use this ability three times per day. It is similar to an acid fog spell but deals cold damage instead of acid damage. It also causes a rime of slippery ice to form on any surface the fog touches, creating the effect of a grease spell. The dragon is immune to the grease effect because of its icewalking ability. This ability is the equivalent of a 6th-level spell.",
        preText: "3/day, DC 20"
      },
      "ice tomb": {
        type: "Sp",
        text: "A great wyrm can, as a standard action, cause a creature to sink into ice. This works as imprisonment, but only while the target is touching an icy surface. A white dragon can use this ability once per day (CL equals dragon's HD). Targets entombed by this ability can be freed by casting freedom or by physically freeing the creature from the ice (Hardness 0, 360 hit points). The save DC is Charisma-based.",
        preText: "1/day, DC 23"
      },
      "tail sweep": {
        universalMonsterAbility: "Tail Sweep",
        damage: "2d6+19",
        saveDC: 10
      },
      icewalking: {
        type: "Ex",
        text: "This ability works like the spider climb spell, but the surfaces the dragon climbs must be icy. The dragon can move across icy surfaces without penalty and does not need to make Acrobatics checks to run or charge on ice. Snow Vision (Ex) A very young white dragon learns to see perfectly well in snowy conditions. A white dragon does not suffer any penalties to Perception checks while in snow."
      },
      "ice shape": {
        type: "Su",
        text: "A young white dragon can shape ice and snow at will. This ability functions as stone shape, but only targeting ice and snow, not stone. A white dragon's caster level for this effect is equal to its Hit Dice. Ice Tomb (Sp) A great wyrm can, as a standard action, cause a creature to sink into ice. This works as imprisonment, but only while the target is touching an icy surface. A white dragon can use this ability once per day (CL equals dragon's HD). Targets entombed by this ability can be freed by casting freedom or by physically freeing the creature from the ice (Hardness 0, 360 hit points). The save DC is Charisma-based."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "360 ft."
      }
    }
  },

  "Wyrmling Brass Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "fire"
    ],
    alignments: [
      "Chaotic Good"
    ],
    size: "Tiny",
    hd: 4,
    hdVal: 12,
    cr: 3,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 60,
      burrow: 30,
      maneuverability: "Average",
      fly: 100
    },
    abilities: {
      str: 11,
      dex: 16,
      con: 13,
      int: 10,
      wis: 11,
      cha: 10
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Hover",
        type: "Monster"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to sleep"
    ],
    defense: {
      naturalArmor: 3
    },
    space: "0 ft.",
    reach: "0 ft. (5 ft. with bite)",
    environment: "warm deserts",
    visualDescription: "A crest of horns sweeps back from the head of this dragon, leading to a long neck and serpentine brass body.",
    description: "Consummate conversationalists, brass dragons prefer to talk instead of fight. Brass dragons lair near humanoid settlements, where they can hear the most recent news and gossip.",
    organization: "solitary",
    languages: "Common, Draconic, plus any 3 others",
    spellLikeAbilities: [],
    skills: {
      Bluff: {
        ranks: 4
      },
      Diplomacy: {
        ranks: 4
      },
      Fly: {
        ranks: 4
      },
      Linguistics: {
        ranks: 4
      },
      Perception: {
        ranks: 4
      },
      "Sense Motive": {
        ranks: 4
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "30-ft. line",
        damage: "2d4 fire",
        saveDC: 10
      },
      "sleep breath": {
        type: "Su",
        text: "Instead of a line of fire, a brass dragon can breathe a 15 ft. cone of sleep gas. Creatures within the cone must succeed on a Will save or fall asleep for 1d6+1 rounds."
      }
    }
  },

  "Very Young Brass Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "fire"
    ],
    alignments: [
      "Chaotic Good"
    ],
    size: "Small",
    hd: 6,
    hdVal: 12,
    cr: 5,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 60,
      burrow: 30,
      maneuverability: "Average",
      fly: 150
    },
    abilities: {
      str: 15,
      dex: 14,
      con: 15,
      int: 12,
      wis: 13,
      cha: 12
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Hover",
        type: "Monster"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to sleep"
    ],
    defense: {
      naturalArmor: 6
    },
    space: "5 ft.",
    reach: "5 ft. (10 ft. with bite)",
    environment: "warm deserts",
    visualDescription: "A crest of horns sweeps back from the head of this dragon, leading to a long neck and serpentine brass body.",
    description: "Consummate conversationalists, brass dragons prefer to talk instead of fight. Brass dragons lair near humanoid settlements, where they can hear the most recent news and gossip.",
    organization: "solitary",
    languages: "Common, Draconic, plus any 6 others",
    spellLikeAbilities: [
      {
        name: "speak with animals",
        casterLevel: 6,
        timesPerDay: -1
      }
    ],
    skills: {
      Bluff: {
        ranks: 6
      },
      Diplomacy: {
        ranks: 6
      },
      Fly: {
        ranks: 6
      },
      Heal: {
        ranks: 6
      },
      Linguistics: {
        ranks: 6
      },
      Perception: {
        ranks: 6
      },
      "Sense Motive": {
        ranks: 6
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "40-ft. line",
        damage: "4d4 fire",
        saveDC: 10
      },
      "sleep breath": {
        type: "Su",
        text: "Instead of a line of fire, a brass dragon can breathe a 20 ft. cone of sleep gas. Creatures within the cone must succeed on a Will save or fall asleep for 1d6+2 rounds."
      }
    }
  },

  "Juvenile Brass Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "fire"
    ],
    alignments: [
      "Chaotic Good"
    ],
    size: "Medium",
    hd: 10,
    hdVal: 12,
    cr: 8,
    racialFeatures: [
      "Blindsense 60 ft.",
      "Dragon Senses"
    ],
    speed: {
      base: 60,
      burrow: 30,
      maneuverability: "Average",
      fly: 150
    },
    abilities: {
      str: 21,
      dex: 14,
      con: 19,
      int: 14,
      wis: 15,
      cha: 14
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
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
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Spell Focus",
        type: "General",
        value: "Enchantment",
        choiceSource: "Spell Focus"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to sleep"
    ],
    defense: {
      naturalArmor: 12
    },
    space: "5 ft.",
    reach: "5 ft. (10 ft. with bite)",
    environment: "warm deserts",
    visualDescription: "A crest of horns sweeps back from the head of this dragon, leading to a long neck and serpentine brass body.",
    description: "Consummate conversationalists, brass dragons prefer to talk instead of fight. Brass dragons lair near humanoid settlements, where they can hear the most recent news and gossip.",
    organization: "solitary",
    languages: "Common, Draconic, and 11 others",
    spellLikeAbilities: [
      {
        name: "endure elements",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "speak with animals",
        casterLevel: 10,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 3,
      spells: [
        {
          name: "(6/day)-charm person",
          limitations: "6/day",
          level: 1
        },
        {
          name: "comprehend languages",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "dancing lights",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "message",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Bluff: {
        ranks: 10
      },
      Diplomacy: {
        ranks: 10
      },
      Fly: {
        ranks: 10
      },
      Heal: {
        ranks: 10
      },
      Linguistics: {
        ranks: 10
      },
      Perception: {
        ranks: 10
      },
      "Sense Motive": {
        ranks: 10
      },
      Spellcraft: {
        ranks: 10
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "60-ft. line",
        damage: "8d4 fire",
        saveDC: 10
      },
      "desert wind": {
        type: "Su",
        text: "A juvenile or older brass dragon can call up the desert wind to serve him. This functions as gust of wind, but any creature in its path must make a Fortitude save (DC 19) or be blinded for 1d4 rounds by the sand."
      },
      "sleep breath": {
        type: "Su",
        text: "Instead of a line of fire, a brass dragon can breathe a cone of sleep gas. Creatures within the cone must succeed on a Will save or fall asleep for 1d6+4 rounds."
      },
      "Move Sand": {
        type: "Su",
        text: "A young or older brass dragon can move sand to excavate ruins or hide treasures. This functions as move earth, but it only affects sand. The dragon uses his HD in place of his caster level for this effect. This is equivalent to a 5th-level spell."
      }
    }
  },

  "Young Adult Brass Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "fire"
    ],
    alignments: [
      "Chaotic Good"
    ],
    size: "Large",
    hd: 12,
    hdVal: 12,
    cr: 10,
    racialFeatures: [
      "Blindsense 60 ft.",
      "Dragon Senses"
    ],
    speed: {
      base: 60,
      burrow: 30,
      maneuverability: "Poor",
      fly: 200
    },
    abilities: {
      str: 23,
      dex: 12,
      con: 19,
      int: 14,
      wis: 15,
      cha: 14
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
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
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Spell Focus",
        type: "General",
        value: "Enchantment",
        choiceSource: "Spell Focus"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to sleep"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "magic"
      },
      SR: {
        value: 21
      },
      naturalArmor: 15
    },
    space: "10 ft.",
    reach: "10 ft. (15 ft. with bite)",
    environment: "warm deserts",
    visualDescription: "A crest of horns sweeps back from the head of this dragon, leading to a long neck and serpentine brass body.",
    description: "Consummate conversationalists, brass dragons prefer to talk instead of fight. Brass dragons lair near humanoid settlements, where they can hear the most recent news and gossip.",
    organization: "solitary",
    languages: "Common, Draconic, plus any 13 others",
    spellLikeAbilities: [
      {
        name: "endure elements",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "speak with animals",
        casterLevel: 12,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 5,
      spells: [
        {
          name: "",
          limitations: "7/day",
          level: 2
        },
        {
          name: "see invisibility ",
          level: 2
        },
        {
          name: "(5/day)-charm person",
          limitations: "5/day",
          level: 1
        },
        {
          name: "protection from evil",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "ventriloquism",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "dancing lights",
          level: 0
        },
        {
          name: "ghost sound",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "message",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Bluff: {
        ranks: 12
      },
      Diplomacy: {
        ranks: 12
      },
      Fly: {
        ranks: 12
      },
      Heal: {
        ranks: 12
      },
      Linguistics: {
        ranks: 12
      },
      Perception: {
        ranks: 12
      },
      "Sense Motive": {
        ranks: 12
      },
      Spellcraft: {
        ranks: 12
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "80-ft. line",
        damage: "10d4 fire",
        saveDC: 10
      },
      "desert wind": {
        type: "Su",
        text: "A juvenile or older brass dragon can call up the desert wind to serve him. This functions as gust of wind, but any creature in its path must make a Fortitude save (DC 20) or be blinded for 1d4 rounds by the sand."
      },
      "sleep breath": {
        type: "Su",
        text: "Instead of a line of fire, a brass dragon can breathe a 40 ft. cone of sleep gas. Creatures within the cone must succeed on a Will save or fall asleep for 1d6+5 rounds."
      },
      "move sand": {
        type: "Su",
        text: "A young or older brass dragon can move sand to excavate ruins or hide treasures. This functions as move earth, but it only affects sand. The dragon uses his HD in place of his caster level for this effect. This is equivalent to a 5th-level spell."
      }
    }
  },

  "Mature Adult Brass Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "fire"
    ],
    alignments: [
      "Chaotic Good"
    ],
    size: "Large",
    hd: 16,
    hdVal: 12,
    cr: 12,
    racialFeatures: [
      "Blindsense 60 ft.",
      "Dragon Senses"
    ],
    speed: {
      base: 60,
      burrow: 30,
      maneuverability: "Poor",
      fly: 200
    },
    abilities: {
      str: 27,
      dex: 12,
      con: 21,
      int: 16,
      wis: 17,
      cha: 16
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
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
        name: "Greater Spell Focus",
        type: "General",
        value: "Enchantment",
        choiceSource: "Greater Spell Focus"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Spell Focus",
        type: "General",
        value: "Enchantment",
        choiceSource: "Spell Focus"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to sleep"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "magic"
      },
      SR: {
        value: 23
      },
      naturalArmor: 21
    },
    space: "10 ft.",
    reach: "10 ft. (15 ft. with bite)",
    environment: "warm deserts",
    visualDescription: "A crest of horns sweeps back from the head of this dragon, leading to a long neck and serpentine brass body.",
    description: "Consummate conversationalists, brass dragons prefer to talk instead of fight. Brass dragons lair near humanoid settlements, where they can hear the most recent news and gossip.",
    organization: "solitary",
    languages: "Common, Draconic, plus any 17 more",
    spellLikeAbilities: [
      {
        name: "endure elements",
        casterLevel: 16,
        timesPerDay: -1
      },
      {
        name: "speak with animals",
        casterLevel: 16,
        timesPerDay: -1
      },
      {
        name: "suggestion",
        casterLevel: 16,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 9,
      spells: [
        {
          name: "(4/day)-charm monster",
          limitations: "4/day",
          level: 4
        },
        {
          name: "confusion",
          level: 4
        },
        {
          name: "",
          limitations: "7/day",
          level: 3
        },
        {
          name: "hold person",
          level: 3
        },
        {
          name: "tongues ",
          level: 3
        },
        {
          name: "",
          limitations: "7/day",
          level: 2
        },
        {
          name: "detect thoughts",
          level: 2
        },
        {
          name: "resist energy",
          level: 2
        },
        {
          name: "see invisibility ",
          level: 2
        },
        {
          name: "",
          limitations: "7/day",
          level: 1
        },
        {
          name: "charm person",
          level: 1
        },
        {
          name: "protection from evil",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "ventriloquism",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "dancing lights",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "ghost sound",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Bluff: {
        ranks: 16
      },
      Diplomacy: {
        ranks: 16
      },
      Fly: {
        ranks: 16
      },
      Heal: {
        ranks: 16
      },
      Linguistics: {
        ranks: 16
      },
      Perception: {
        ranks: 16
      },
      "Sense Motive": {
        ranks: 16
      },
      Spellcraft: {
        ranks: 16
      },
      Survival: {
        ranks: 16
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "80-ft. line",
        damage: "14d4 fire",
        saveDC: 10
      },
      "desert wind": {
        type: "Su",
        text: "A juvenile or older brass dragon can call up the desert wind to serve him. This functions as gust of wind, but any creature in its path must make a Fortitude save (DC 23) or be blinded for 1d4 rounds by the sand."
      },
      "sleep breath": {
        type: "Su",
        text: "Instead of a line of fire, a brass dragon can breathe a 40 ft. cone of sleep gas. Creatures within the cone must succeed on a Will save or fall asleep for 1d6+7 rounds."
      },
      "move sand": {
        type: "Su",
        text: "A young or older brass dragon can move sand to excavate ruins or hide treasures. This functions as move earth, but it only affects sand. The dragon uses his HD in place of his caster level for this effect. This is equivalent to a 5th-level spell."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "210 ft."
      }
    }
  },

  "Old Brass Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "fire"
    ],
    alignments: [
      "Chaotic Good"
    ],
    size: "Huge",
    hd: 18,
    hdVal: 12,
    cr: 14,
    racialFeatures: [
      "Blindsense 60 ft.",
      "Dragon Senses"
    ],
    speed: {
      base: 60,
      burrow: 30,
      maneuverability: "Poor",
      fly: 200
    },
    abilities: {
      str: 29,
      dex: 10,
      con: 23,
      int: 18,
      wis: 19,
      cha: 18
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
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
        name: "Greater Spell Focus",
        type: "General",
        value: "Enchantment",
        choiceSource: "Greater Spell Focus"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Spell Focus",
        type: "General",
        value: "Enchantment",
        choiceSource: "Spell Focus"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to sleep"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "magic"
      },
      SR: {
        value: 25
      },
      naturalArmor: 24
    },
    space: "15 ft.",
    reach: "15 ft. (20 ft. with bite)",
    environment: "warm deserts",
    visualDescription: "A crest of horns sweeps back from the head of this dragon, leading to a long neck and serpentine brass body.",
    description: "Consummate conversationalists, brass dragons prefer to talk instead of fight. Brass dragons lair near humanoid settlements, where they can hear the most recent news and gossip.",
    organization: "solitary",
    languages: "Common, Draconic, plus any 22 more",
    spellLikeAbilities: [
      {
        name: "control winds",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "endure elements",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "speak with animals",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "suggestion",
        casterLevel: 18,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 11,
      spells: [
        {
          name: "",
          limitations: "4/day",
          level: 5
        },
        {
          name: "prying eyes ",
          level: 5
        },
        {
          name: "(7/day)-charm monster",
          limitations: "7/day",
          level: 4
        },
        {
          name: "confusion",
          level: 4
        },
        {
          name: "locate creature ",
          level: 4
        },
        {
          name: "",
          limitations: "7/day",
          level: 3
        },
        {
          name: "heroism",
          level: 3
        },
        {
          name: "hold person",
          level: 3
        },
        {
          name: "tongues ",
          level: 3
        },
        {
          name: "",
          limitations: "7/day",
          level: 2
        },
        {
          name: "detect thoughts",
          level: 2
        },
        {
          name: "locate object",
          level: 2
        },
        {
          name: "resist energy",
          level: 2
        },
        {
          name: "see invisibility ",
          level: 2
        },
        {
          name: "",
          limitations: "7/day",
          level: 1
        },
        {
          name: "charm person",
          level: 1
        },
        {
          name: "protection from evil",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "ventriloquism",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "dancing lights",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "detect poison",
          level: 0
        },
        {
          name: "ghost sound",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Bluff: {
        ranks: 18
      },
      Diplomacy: {
        ranks: 18
      },
      Fly: {
        ranks: 18
      },
      Heal: {
        ranks: 18
      },
      "Knowledge (local)": {
        ranks: 18
      },
      Linguistics: {
        ranks: 18
      },
      Perception: {
        ranks: 18
      },
      "Sense Motive": {
        ranks: 18
      },
      Spellcraft: {
        ranks: 18
      },
      Survival: {
        ranks: 18
      }
    },
    special: {
      fire: {
        name: "fire aura",
        preText: "5 ft., 1d6 fire"
      },
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "100-ft. line",
        damage: "16d4 fire",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "2d8+13",
        saveDC: 10
      },
      "desert wind": {
        type: "Su",
        text: "A juvenile or older brass dragon can call up the desert wind to serve him. This functions as gust of wind, but any creature in its path must make a Fortitude save (DC 25) or be blinded for 1d4 rounds by the sand. Fire Aura (Su) An old or older brass dragon is surrounded by an aura of intense heat. All creatures within 5 feet of the dragon take 1d6 points of fire damage at the beginning of the dragon's turn. An ancient brass dragon's aura extends to 10 feet. A great wyrm's damage increases to 2d6. A brass dragon can suppress or activate this aura at will as a free action."
      },
      "sleep breath": {
        type: "Su",
        text: "Instead of a line of fire, a brass dragon can breathe a 50 ft. cone of sleep gas. Creatures within the cone must succeed on a Will save or fall asleep for 1d6+8 rounds."
      },
      "move sand": {
        type: "Su",
        text: "A young or older brass dragon can move sand to excavate ruins or hide treasures. This functions as move earth, but it only affects sand. The dragon uses his HD in place of his caster level for this effect. This is equivalent to a 5th-level spell."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "240 ft."
      }
    }
  },

  "Very Old Brass Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "fire"
    ],
    alignments: [
      "Chaotic Good"
    ],
    size: "Huge",
    hd: 20,
    hdVal: 12,
    cr: 15,
    racialFeatures: [
      "Blindsense 60 ft.",
      "Dragon Senses"
    ],
    speed: {
      base: 60,
      burrow: 30,
      maneuverability: "Poor",
      fly: 200
    },
    abilities: {
      str: 31,
      dex: 10,
      con: 23,
      int: 18,
      wis: 19,
      cha: 18
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
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
        name: "Greater Spell Focus",
        type: "General",
        value: "Enchantment",
        choiceSource: "Greater Spell Focus"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Spell Focus",
        type: "General",
        value: "Enchantment",
        choiceSource: "Spell Focus"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to sleep"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "magic"
      },
      SR: {
        value: 26
      },
      naturalArmor: 27
    },
    space: "15 ft.",
    reach: "15 ft. (20 ft. with bite)",
    environment: "warm deserts",
    visualDescription: "A crest of horns sweeps back from the head of this dragon, leading to a long neck and serpentine brass body.",
    description: "Consummate conversationalists, brass dragons prefer to talk instead of fight. Brass dragons lair near humanoid settlements, where they can hear the most recent news and gossip.",
    organization: "solitary",
    languages: "Common, Draconic, plus any 22 more",
    spellLikeAbilities: [
      {
        name: "control winds",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "endure elements",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "speak with animals",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "suggestion",
        casterLevel: 20,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 13,
      spells: [
        {
          name: "",
          limitations: "4/day",
          level: 6
        },
        {
          name: "dispel magic, greater",
          level: 6
        },
        {
          name: "(6/day)-dominate person",
          limitations: "6/day",
          level: 5
        },
        {
          name: "mirage arcana",
          level: 5
        },
        {
          name: "prying eyes ",
          level: 5
        },
        {
          name: "(7/day)-charm monster",
          limitations: "7/day",
          level: 4
        },
        {
          name: "confusion",
          level: 4
        },
        {
          name: "dimensional anchor",
          level: 4
        },
        {
          name: "locate creature ",
          level: 4
        },
        {
          name: "",
          limitations: "7/day",
          level: 3
        },
        {
          name: "heroism",
          level: 3
        },
        {
          name: "hold person",
          level: 3
        },
        {
          name: "tongues ",
          level: 3
        },
        {
          name: "",
          limitations: "7/day",
          level: 2
        },
        {
          name: "detect thoughts",
          level: 2
        },
        {
          name: "locate object",
          level: 2
        },
        {
          name: "resist energy",
          level: 2
        },
        {
          name: "see invisibility ",
          level: 2
        },
        {
          name: "",
          limitations: "7/day",
          level: 1
        },
        {
          name: "charm person",
          level: 1
        },
        {
          name: "protection from evil",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "ventriloquism",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "dancing lights",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "detect poison",
          level: 0
        },
        {
          name: "ghost sound",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Bluff: {
        ranks: 20
      },
      Diplomacy: {
        ranks: 20
      },
      Fly: {
        ranks: 20
      },
      Heal: {
        ranks: 20
      },
      "Knowledge (local)": {
        ranks: 20
      },
      Linguistics: {
        ranks: 20
      },
      Perception: {
        ranks: 20
      },
      "Sense Motive": {
        ranks: 20
      },
      Spellcraft: {
        ranks: 20
      },
      Survival: {
        ranks: 20
      }
    },
    special: {
      fire: {
        name: "fire aura",
        preText: "5 ft., 1d6 fire"
      },
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "100-ft. line",
        damage: "18d4 fire",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "2d8+15",
        saveDC: 10
      },
      "desert wind": {
        type: "Su",
        text: "A juvenile or older brass dragon can call up the desert wind to serve him. This functions as gust of wind, but any creature in its path must make a Fortitude save (DC 26) or be blinded for 1d4 rounds by the sand. Fire Aura (Su) An old or older brass dragon is surrounded by an aura of intense heat. All creatures within 5 feet of the dragon take 1d6 points of fire damage at the beginning of the dragon's turn. An ancient brass dragon's aura extends to 10 feet. A great wyrm's damage increases to 2d6. A brass dragon can suppress or activate this aura at will as a free action."
      },
      "sleep breath": {
        type: "Su",
        text: "Instead of a line of fire, a brass dragon can breathe a 50 ft. cone of sleep gas. Creatures within the cone must succeed on a Will save or fall asleep for 1d6+9 rounds."
      },
      "move sand": {
        type: "Su",
        text: "A young or older brass dragon can move sand to excavate ruins or hide treasures. This functions as move earth, but it only affects sand. The dragon uses his HD in place of his caster level for this effect. This is equivalent to a 5th-level spell."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "270 ft."
      }
    }
  },

  "Wyrm Brass Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "fire"
    ],
    alignments: [
      "Chaotic Good"
    ],
    size: "Huge",
    hd: 24,
    hdVal: 12,
    cr: 17,
    racialFeatures: [
      "Blindsense 60 ft.",
      "Dragon Senses"
    ],
    speed: {
      base: 60,
      burrow: 30,
      maneuverability: "Poor",
      fly: 200
    },
    abilities: {
      str: 35,
      dex: 8,
      con: 25,
      int: 20,
      wis: 21,
      cha: 20
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
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
        name: "Greater Spell Focus",
        type: "General",
        value: "Enchantment",
        choiceSource: "Greater Spell Focus"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Quicken Spell",
        type: "Metamagic"
      },
      {
        name: "Spell Focus",
        type: "General",
        value: "Enchantment",
        choiceSource: "Spell Focus"
      },
      {
        name: "Spell Penetration",
        type: "General"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to sleep"
    ],
    defense: {
      DR: {
        value: 20,
        damageType: "magic"
      },
      SR: {
        value: 28
      },
      naturalArmor: 33
    },
    space: "15 ft.",
    reach: "15 ft. (20 ft. with bite)",
    environment: "warm deserts",
    visualDescription: "A crest of horns sweeps back from the head of this dragon, leading to a long neck and serpentine brass body.",
    description: "Consummate conversationalists, brass dragons prefer to talk instead of fight. Brass dragons lair near humanoid settlements, where they can hear the most recent news and gossip.",
    organization: "solitary",
    languages: "Common, Draconic, plus any 27 more",
    spellLikeAbilities: [
      {
        name: "control weather",
        casterLevel: 24,
        timesPerDay: -1
      },
      {
        name: "control winds",
        casterLevel: 24,
        timesPerDay: -1
      },
      {
        name: "endure elements",
        casterLevel: 24,
        timesPerDay: -1
      },
      {
        name: "speak with animals",
        casterLevel: 24,
        timesPerDay: -1
      },
      {
        name: "suggestion",
        casterLevel: 24,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 17,
      spells: [
        {
          name: "(4/day)-demand",
          limitations: "4/day",
          level: 8
        },
        {
          name: "power word stun ",
          level: 8
        },
        {
          name: "",
          limitations: "6/day",
          level: 7
        },
        {
          name: "hold person, mass",
          level: 7
        },
        {
          name: "power word blind ",
          level: 7
        },
        {
          name: "",
          limitations: "6/day",
          level: 6
        },
        {
          name: "geas",
          level: 6
        },
        {
          name: "dispel magic, greater",
          level: 6
        },
        {
          name: "",
          limitations: "7/day",
          level: 5
        },
        {
          name: "dominate person",
          level: 5
        },
        {
          name: "mirage arcana",
          level: 5
        },
        {
          name: "prying eyes ",
          level: 5
        },
        {
          name: "(7/day)-charm monster",
          limitations: "7/day",
          level: 4
        },
        {
          name: "confusion",
          level: 4
        },
        {
          name: "dimensional anchor",
          level: 4
        },
        {
          name: "locate creature ",
          level: 4
        },
        {
          name: "",
          limitations: "7/day",
          level: 3
        },
        {
          name: "heroism",
          level: 3
        },
        {
          name: "hold person",
          level: 3
        },
        {
          name: "tongues ",
          level: 3
        },
        {
          name: "",
          limitations: "7/day",
          level: 2
        },
        {
          name: "detect thoughts",
          level: 2
        },
        {
          name: "locate object",
          level: 2
        },
        {
          name: "resist energy",
          level: 2
        },
        {
          name: "see invisibility ",
          level: 2
        },
        {
          name: "",
          limitations: "8/day",
          level: 1
        },
        {
          name: "charm person",
          level: 1
        },
        {
          name: "protection from evil",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "ventriloquism",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "dancing lights",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "detect poison",
          level: 0
        },
        {
          name: "ghost sound",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Bluff: {
        ranks: 24
      },
      Diplomacy: {
        ranks: 24
      },
      Fly: {
        ranks: 24
      },
      Heal: {
        ranks: 24
      },
      "Knowledge (history)": {
        ranks: 24
      },
      "Knowledge (local)": {
        ranks: 24
      },
      Linguistics: {
        ranks: 24
      },
      Perception: {
        ranks: 24
      },
      "Sense Motive": {
        ranks: 24
      },
      Spellcraft: {
        ranks: 24
      },
      Survival: {
        ranks: 24
      }
    },
    special: {
      fire: {
        name: "fire aura",
        preText: "10 ft., 1d6 fire"
      },
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "100-ft. line",
        damage: "22d4 fire",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "2d8+18",
        saveDC: 10
      },
      "desert wind": {
        type: "Su",
        text: "A juvenile or older brass dragon can call up the desert wind to serve him. This functions as gust of wind, but any creature in its path must make a Fortitude save (DC 29) or be blinded for 1d4 rounds by the sand. Fire Aura (Su) An old or older brass dragon is surrounded by an aura of intense heat. All creatures within 5 feet of the dragon take 1d6 points of fire damage at the beginning of the dragon's turn. An ancient brass dragon's aura extends to 10 feet. A great wyrm's damage increases to 2d6. A brass dragon can suppress or activate this aura at will as a free action."
      },
      sandstorm: {
        type: "Su",
        text: "An ancient or older brass dragon can create a powerful sandstorm once per day as a full-round action. This storm has a radius of 1 mile and lasts for 1 minute per age category of the dragon. This functions as a sandstorm (Pathfinder RPG Core Rulebook 431), except that it is also accompanied by windstorm-level winds."
      },
      "sleep breath": {
        type: "Su",
        text: "Instead of a line of fire, a brass dragon can breathe a 50 ft. cone of sleep gas. Creatures within the cone must succeed on a Will save or fall asleep for 1d6+11 rounds."
      },
      "move sand": {
        type: "Su",
        text: "A young or older brass dragon can move sand to excavate ruins or hide treasures. This functions as move earth, but it only affects sand. The dragon uses his HD in place of his caster level for this effect. This is equivalent to a 5th-level spell."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "330 ft."
      }
    }
  },

  "Great Wyrm Brass Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "fire"
    ],
    alignments: [
      "Chaotic Good"
    ],
    size: "Gargantuan",
    hd: 26,
    hdVal: 12,
    cr: 19,
    racialFeatures: [
      "Blindsense 60 ft.",
      "Dragon Senses"
    ],
    speed: {
      base: 60,
      burrow: 30,
      maneuverability: "Clumsy",
      fly: 250
    },
    abilities: {
      str: 37,
      dex: 8,
      con: 27,
      int: 22,
      wis: 23,
      cha: 22
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
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
        name: "Greater Spell Focus",
        type: "General",
        value: "Enchantment",
        choiceSource: "Greater Spell Focus"
      },
      {
        name: "Greater Spell Penetration",
        type: "General"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Quicken Spell",
        type: "Metamagic"
      },
      {
        name: "Spell Focus",
        type: "General",
        value: "Enchantment",
        choiceSource: "Spell Focus"
      },
      {
        name: "Spell Penetration",
        type: "General"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to sleep"
    ],
    defense: {
      DR: {
        value: 20,
        damageType: "magic"
      },
      SR: {
        value: 30
      },
      naturalArmor: 36
    },
    space: "20 ft.",
    reach: "20 ft. (25 ft. with bite)",
    environment: "warm deserts",
    visualDescription: "A crest of horns sweeps back from the head of this dragon, leading to a long neck and serpentine brass body.",
    description: "Consummate conversationalists, brass dragons prefer to talk instead of fight. Brass dragons lair near humanoid settlements, where they can hear the most recent news and gossip.",
    organization: "solitary",
    languages: "Common, Draconic, plus any 31 more",
    spellLikeAbilities: [
      {
        name: "control weather",
        casterLevel: 26,
        timesPerDay: -1
      },
      {
        name: "control winds",
        casterLevel: 26,
        timesPerDay: -1
      },
      {
        name: "endure elements",
        casterLevel: 26,
        timesPerDay: -1
      },
      {
        name: "speak with animals",
        casterLevel: 26,
        timesPerDay: -1
      },
      {
        name: "suggestion",
        casterLevel: 26,
        timesPerDay: -1
      },
      {
        name: "whirlwind",
        casterLevel: 26,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 19,
      spells: [
        {
          name: "(4/day)-dominate monster",
          limitations: "4/day",
          level: 9
        },
        {
          name: "power word kill ",
          level: 9
        },
        {
          name: "(6/day)-demand",
          limitations: "6/day",
          level: 8
        },
        {
          name: "discern location",
          level: 8
        },
        {
          name: "power word stun ",
          level: 8
        },
        {
          name: "",
          limitations: "6/day",
          level: 7
        },
        {
          name: "hold person, mass",
          level: 7
        },
        {
          name: "power word blind ",
          level: 7
        },
        {
          name: "",
          limitations: "7/day",
          level: 6
        },
        {
          name: "geas",
          level: 6
        },
        {
          name: "dispel magic, greater",
          level: 6
        },
        {
          name: "",
          limitations: "7/day",
          level: 5
        },
        {
          name: "dominate person",
          level: 5
        },
        {
          name: "mirage arcana",
          level: 5
        },
        {
          name: "prying eyes ",
          level: 5
        },
        {
          name: "(7/day)-charm monster",
          limitations: "7/day",
          level: 4
        },
        {
          name: "confusion",
          level: 4
        },
        {
          name: "dimensional anchor",
          level: 4
        },
        {
          name: "locate creature ",
          level: 4
        },
        {
          name: "",
          limitations: "7/day",
          level: 3
        },
        {
          name: "heroism",
          level: 3
        },
        {
          name: "hold person",
          level: 3
        },
        {
          name: "tongues ",
          level: 3
        },
        {
          name: "",
          limitations: "8/day",
          level: 2
        },
        {
          name: "detect thoughts",
          level: 2
        },
        {
          name: "locate object",
          level: 2
        },
        {
          name: "resist energy",
          level: 2
        },
        {
          name: "see invisibility ",
          level: 2
        },
        {
          name: "",
          limitations: "8/day",
          level: 1
        },
        {
          name: "charm person",
          level: 1
        },
        {
          name: "protection from evil",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "ventriloquism",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "dancing lights",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "detect poison",
          level: 0
        },
        {
          name: "ghost sound",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Bluff: {
        ranks: 26
      },
      Diplomacy: {
        ranks: 26
      },
      Fly: {
        ranks: 28
      },
      Heal: {
        ranks: 26
      },
      "Knowledge (geography)": {
        ranks: 26
      },
      "Knowledge (history)": {
        ranks: 26
      },
      "Knowledge (local)": {
        ranks: 26
      },
      Linguistics: {
        ranks: 26
      },
      Perception: {
        ranks: 26
      },
      "Sense Motive": {
        ranks: 26
      },
      Spellcraft: {
        ranks: 26
      },
      Survival: {
        ranks: 26
      }
    },
    special: {
      fire: {
        name: "fire aura",
        preText: "10 ft., 2d6 fire"
      },
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "120-ft. line",
        damage: "24d4 fire",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "4d6+19",
        saveDC: 10
      },
      "desert wind": {
        type: "Su",
        text: "A juvenile or older brass dragon can call up the desert wind to serve him. This functions as gust of wind, but any creature in its path must make a Fortitude save (DC 31) or be blinded for 1d4 rounds by the sand. Fire Aura (Su) An old or older brass dragon is surrounded by an aura of intense heat. All creatures within 5 feet of the dragon take 1d6 points of fire damage at the beginning of the dragon's turn. An ancient brass dragon's aura extends to 10 feet. A great wyrm's damage increases to 2d6. A brass dragon can suppress or activate this aura at will as a free action."
      },
      sandstorm: {
        type: "Su",
        text: "An ancient or older brass dragon can create a powerful sandstorm once per day as a full-round action. This storm has a radius of 1 mile and lasts for 1 minute per age category of the dragon. This functions as a sandstorm (Pathfinder RPG Core Rulebook 431), except that it is also accompanied by windstorm-level winds."
      },
      "sleep breath": {
        type: "Su",
        text: "Instead of a line of fire, a brass dragon can breathe a 60 ft. cone of sleep gas. Creatures within the cone must succeed on a Will save or fall asleep for 1d6+12 rounds."
      },
      "summon djinni": {
        type: "Sp",
        text: "This ability, usable by a great wyrm brass dragon once per day, works like a summon monster spell, except that it summons one noble djinni. This ability is the equivalent of a 9th-level spell."
      },
      "tail sweep": {
        universalMonsterAbility: "Tail Sweep",
        damage: "2d6+19",
        saveDC: 10
      },
      "move sand": {
        type: "Su",
        text: "A young or older brass dragon can move sand to excavate ruins or hide treasures. This functions as move earth, but it only affects sand. The dragon uses his HD in place of his caster level for this effect. This is equivalent to a 5th-level spell."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "360 ft."
      }
    }
  },

  "Wyrmling Bronze Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "water"
    ],
    alignments: [
      "Lawful Good"
    ],
    size: "Small",
    hd: 6,
    hdVal: 12,
    cr: 5,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 40,
      maneuverability: "Average",
      fly: 150,
      swim: 60
    },
    abilities: {
      str: 13,
      dex: 14,
      con: 13,
      int: 14,
      wis: 15,
      cha: 14
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to electricity, sleep"
    ],
    defense: {
      naturalArmor: 5
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "temperate coastlines",
    visualDescription: "This sleek dragon is covered in dull metallic scales that range in color from shining bronze to mottled blue.",
    description: "Bronze dragons have been known to ally with travelers and adventurers if the cause and reward is right and just.",
    organization: "solitary",
    languages: "Aquan, Common, Draconic",
    spellLikeAbilities: [],
    skills: {
      Diplomacy: {
        ranks: 6
      },
      Fly: {
        ranks: 6
      },
      Intimidate: {
        ranks: 6
      },
      "Knowledge (arcana)": {
        ranks: 6
      },
      Perception: {
        ranks: 6
      },
      "Sense Motive": {
        ranks: 6
      },
      Stealth: {
        ranks: 6
      },
      Swim: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "40-ft. line",
        damage: "2d6 electricity",
        saveDC: 10
      },
      "repulsion breath": {
        type: "Su",
        text: "Instead of a line of electricity, a bronze dragon can breathe a cone of repulsion gas. Targets must make a Will save or be compelled to do nothing but move away from the dragon for 1d6 rounds plus 1 round per age category. This is a mind-affecting compulsion effect."
      },
      "water breathing": {
        type: "Ex",
        text: "A bronze dragon breathes water and can use its breath weapon, spells, and abilities underwater."
      }
    }
  },

  "Very Young Bronze Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "water"
    ],
    alignments: [
      "Lawful Good"
    ],
    size: "Medium",
    hd: 8,
    hdVal: 12,
    cr: 7,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 40,
      maneuverability: "Average",
      fly: 150,
      swim: 60
    },
    abilities: {
      str: 17,
      dex: 12,
      con: 15,
      int: 16,
      wis: 17,
      cha: 16
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to electricity, sleep"
    ],
    defense: {
      naturalArmor: 8
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "temperate coastlines",
    visualDescription: "This sleek dragon is covered in dull metallic scales that range in color from shining bronze to mottled blue.",
    description: "Bronze dragons have been known to ally with travelers and adventurers if the cause and reward is right and just.",
    organization: "solitary",
    languages: "Aquan, Common, Draconic, Elven",
    spellLikeAbilities: [
      {
        name: "speak with animals",
        casterLevel: 8,
        timesPerDay: -1
      }
    ],
    skills: {
      Diplomacy: {
        ranks: 8
      },
      Fly: {
        ranks: 8
      },
      Intimidate: {
        ranks: 8
      },
      "Knowledge (arcana)": {
        ranks: 8
      },
      Perception: {
        ranks: 8
      },
      "Sense Motive": {
        ranks: 8
      },
      Spellcraft: {
        ranks: 8
      },
      Stealth: {
        ranks: 8
      },
      Swim: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "60-ft. line",
        damage: "4d6 electricity",
        saveDC: 10
      },
      "repulsion breath": {
        type: "Su",
        text: "Instead of a line of electricity, a bronze dragon can breathe a cone of repulsion gas. Targets must make a Will save or be compelled to do nothing but move away from the dragon for 1d6 rounds plus 1 round per age category. This is a mind-affecting compulsion effect."
      },
      "water breathing": {
        type: "Ex",
        text: "A bronze dragon breathes water and can use its breath weapon, spells, and abilities underwater."
      }
    }
  },

  "Juvenile Bronze Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "water"
    ],
    alignments: [
      "Lawful Good"
    ],
    size: "Large",
    hd: 12,
    hdVal: 12,
    cr: 10,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 40,
      maneuverability: "Poor",
      fly: 200,
      swim: 60
    },
    abilities: {
      str: 23,
      dex: 12,
      con: 19,
      int: 18,
      wis: 19,
      cha: 18
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to electricity, sleep"
    ],
    defense: {
      naturalArmor: 14
    },
    space: "10 ft.",
    reach: "5 ft. (10 ft. with bite)",
    environment: "temperate coastlines",
    visualDescription: "This sleek dragon is covered in dull metallic scales that range in color from shining bronze to mottled blue.",
    description: "Bronze dragons have been known to ally with travelers and adventurers if the cause and reward is right and just.",
    organization: "solitary",
    languages: "Aquan, Common, Draconic, Elven, Gnome",
    spellLikeAbilities: [
      {
        name: "create food and water",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "speak with animals",
        casterLevel: 12,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 3,
      spells: [
        {
          name: "",
          limitations: "6/day",
          level: 1
        },
        {
          name: "obscuring mist",
          level: 1
        },
        {
          name: "true strike",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "light",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "resistance",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Diplomacy: {
        ranks: 12
      },
      Fly: {
        ranks: 16
      },
      "Handle Animal": {
        ranks: 12
      },
      Intimidate: {
        ranks: 12
      },
      "Knowledge (arcana)": {
        ranks: 12
      },
      Perception: {
        ranks: 12
      },
      "Sense Motive": {
        ranks: 12
      },
      Spellcraft: {
        ranks: 12
      },
      Stealth: {
        ranks: 12
      },
      Swim: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "80-ft. line",
        damage: "8d6 electricity",
        saveDC: 10
      },
      "repulsion breath": {
        type: "Su",
        text: "Instead of a line of electricity, a bronze dragon can breathe a cone of repulsion gas. Targets must make a Will save or be compelled to do nothing but move away from the dragon for 1d6 rounds plus 1 round per age category. This is a mind-affecting compulsion effect."
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "polymorph",
        type: ", polymorph"
      },
      "water breathing": {
        type: "Ex",
        text: "A bronze dragon breathes water and can use its breath weapon, spells, and abilities underwater. Wave Mastery (Su) For up to 10 minutes per age category per day, a juvenile bronze dragon, along with creatures or vessels within 50 feet, can move at twice its normal speed in water."
      },
      "wave mastery": {
        type: "Su",
        text: "For up to 10 minutes per age category per day, a juvenile bronze dragon, along with creatures or vessels within 50 feet, can move at twice its normal speed in water.",
        preText: "40 min"
      }
    }
  },

  "Young Adult Bronze Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "water"
    ],
    alignments: [
      "Lawful Good"
    ],
    size: "Huge",
    hd: 14,
    hdVal: 12,
    cr: 12,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 40,
      maneuverability: "Poor",
      fly: 200,
      swim: 60
    },
    abilities: {
      str: 25,
      dex: 10,
      con: 19,
      int: 18,
      wis: 19,
      cha: 18
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to electricity, sleep"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "magic"
      },
      SR: {
        value: 23
      },
      naturalArmor: 17
    },
    space: "15 ft.",
    reach: "10 ft. (15 ft. with bite)",
    environment: "temperate coastlines",
    visualDescription: "This sleek dragon is covered in dull metallic scales that range in color from shining bronze to mottled blue.",
    description: "Bronze dragons have been known to ally with travelers and adventurers if the cause and reward is right and just.",
    organization: "solitary",
    languages: "Aquan, Common, Draconic, Elven, Gnome",
    spellLikeAbilities: [
      {
        name: "create food and water",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "speak with animals",
        casterLevel: 14,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 5,
      spells: [
        {
          name: "",
          limitations: "5/day",
          level: 2
        },
        {
          name: "mirror image ",
          level: 2
        },
        {
          name: "",
          limitations: "7/day",
          level: 1
        },
        {
          name: "mage armor",
          level: 1
        },
        {
          name: "obscuring mist",
          level: 1
        },
        {
          name: "true strike",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "light",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "resistance",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Diplomacy: {
        ranks: 14
      },
      Fly: {
        ranks: 18
      },
      "Handle Animal": {
        ranks: 14
      },
      Intimidate: {
        ranks: 14
      },
      "Knowledge (arcana)": {
        ranks: 14
      },
      Perception: {
        ranks: 14
      },
      "Sense Motive": {
        ranks: 14
      },
      Spellcraft: {
        ranks: 14
      },
      Stealth: {
        ranks: 14
      },
      Swim: {
        ranks: 1,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "100-ft. line",
        damage: "10d6 electricity",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "2d8+10",
        saveDC: 10
      },
      "repulsion breath": {
        type: "Su",
        text: "Instead of a line of electricity, a bronze dragon can breathe a cone of repulsion gas. Targets must make a Will save or be compelled to do nothing but move away from the dragon for 1d6 rounds plus 1 round per age category. This is a mind-affecting compulsion effect."
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "polymorph",
        type: ", polymorph"
      },
      "water breathing": {
        type: "Ex",
        text: "A bronze dragon breathes water and can use its breath weapon, spells, and abilities underwater. Wave Mastery (Su) For up to 10 minutes per age category per day, a juvenile bronze dragon, along with creatures or vessels within 50 feet, can move at twice its normal speed in water."
      },
      "wave mastery": {
        type: "Su",
        text: "For up to 10 minutes per age category per day, a juvenile bronze dragon, along with creatures or vessels within 50 feet, can move at twice its normal speed in water.",
        preText: "50 min"
      }
    }
  },

  "Mature Adult Bronze Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "water"
    ],
    alignments: [
      "Lawful Good"
    ],
    size: "Huge",
    hd: 18,
    hdVal: 12,
    cr: 14,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 40,
      maneuverability: "Poor",
      fly: 200,
      swim: 60
    },
    abilities: {
      str: 29,
      dex: 10,
      con: 21,
      int: 20,
      wis: 21,
      cha: 20
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Cleave",
        type: "Combat"
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
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to electricity, sleep"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "magic"
      },
      SR: {
        value: 25
      },
      naturalArmor: 23
    },
    space: "15 ft.",
    reach: "10 ft. (15 ft. with bite)",
    environment: "temperate coastlines",
    visualDescription: "This sleek dragon is covered in dull metallic scales that range in color from shining bronze to mottled blue.",
    description: "Bronze dragons have been known to ally with travelers and adventurers if the cause and reward is right and just.",
    organization: "solitary",
    languages: "Aquan, Common, Draconic, Elven, Gnome, 1 more",
    spellLikeAbilities: [
      {
        name: "create food and water",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "fog cloud",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "speak with animals",
        casterLevel: 18,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 9,
      spells: [
        {
          name: "",
          limitations: "5/day",
          level: 4
        },
        {
          name: "solid fog ",
          level: 4
        },
        {
          name: "",
          limitations: "7/day",
          level: 3
        },
        {
          name: "heroism",
          level: 3
        },
        {
          name: "slow",
          level: 3
        },
        {
          name: "",
          limitations: "7/day",
          level: 2
        },
        {
          name: "gust of wind",
          level: 2
        },
        {
          name: "invisibility",
          level: 2
        },
        {
          name: "mirror image ",
          level: 2
        },
        {
          name: "",
          limitations: "8/day",
          level: 1
        },
        {
          name: "mage armor",
          level: 1
        },
        {
          name: "obscuring mist",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "true strike",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "light",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "mending",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        },
        {
          name: "resistance",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Diplomacy: {
        ranks: 18
      },
      Fly: {
        ranks: 22
      },
      "Handle Animal": {
        ranks: 18
      },
      Intimidate: {
        ranks: 18
      },
      "Knowledge (arcana)": {
        ranks: 18
      },
      "Knowledge (geography)": {
        ranks: 18
      },
      Perception: {
        ranks: 18
      },
      "Sense Motive": {
        ranks: 18
      },
      Spellcraft: {
        ranks: 18
      },
      Stealth: {
        ranks: 18
      },
      Swim: {
        ranks: 2,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "100-ft. line",
        damage: "14d6 electricity",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "2d8+13",
        saveDC: 10
      },
      "repulsion breath": {
        type: "Su",
        text: "Instead of a line of electricity, a bronze dragon can breathe a cone of repulsion gas. Targets must make a Will save or be compelled to do nothing but move away from the dragon for 1d6 rounds plus 1 round per age category. This is a mind-affecting compulsion effect."
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "polymorph",
        type: ", polymorph"
      },
      "water breathing": {
        type: "Ex",
        text: "A bronze dragon breathes water and can use its breath weapon, spells, and abilities underwater. Wave Mastery (Su) For up to 10 minutes per age category per day, a juvenile bronze dragon, along with creatures or vessels within 50 feet, can move at twice its normal speed in water."
      },
      "wave mastery": {
        type: "Su",
        text: "For up to 10 minutes per age category per day, a juvenile bronze dragon, along with creatures or vessels within 50 feet, can move at twice its normal speed in water.",
        preText: "70 min"
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "210 ft."
      }
    }
  },

  "Very Old Bronze Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "water"
    ],
    alignments: [
      "Lawful Good"
    ],
    size: "Gargantuan",
    hd: 22,
    hdVal: 12,
    cr: 17,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 40,
      maneuverability: "Clumsy",
      fly: 250,
      swim: 60
    },
    abilities: {
      str: 33,
      dex: 8,
      con: 23,
      int: 22,
      wis: 23,
      cha: 22
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Great Cleave",
        type: "Combat"
      },
      {
        name: "Hover",
        type: "Monster"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to electricity, sleep"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "magic"
      },
      SR: {
        value: 28
      },
      naturalArmor: 29
    },
    space: "20 ft.",
    reach: "15 ft. (20 ft. with bite)",
    environment: "temperate coastlines",
    visualDescription: "This sleek dragon is covered in dull metallic scales that range in color from shining bronze to mottled blue.",
    description: "Bronze dragons have been known to ally with travelers and adventurers if the cause and reward is right and just.",
    organization: "solitary",
    languages: "Aquan, Common, Draconic, Elven, Gnome, 2 more",
    spellLikeAbilities: [
      {
        name: "create food and water",
        casterLevel: 22,
        timesPerDay: -1
      },
      {
        name: "detect thoughts",
        casterLevel: 22,
        timesPerDay: -1
      },
      {
        name: "fog cloud",
        casterLevel: 22,
        timesPerDay: -1
      },
      {
        name: "speak with animals",
        casterLevel: 22,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 13,
      spells: [
        {
          name: "(5/day)- mass suggestion",
          limitations: "5/day",
          level: 6
        },
        {
          name: "mislead ",
          level: 6
        },
        {
          name: "",
          limitations: "7/day",
          level: 5
        },
        {
          name: "mind fog",
          level: 5
        },
        {
          name: "teleport ",
          level: 5
        },
        {
          name: "",
          limitations: "7/day",
          level: 4
        },
        {
          name: "ice storm",
          level: 4
        },
        {
          name: "solid fog",
          level: 4
        },
        {
          name: "stoneskin ",
          level: 4
        },
        {
          name: "",
          limitations: "7/day",
          level: 3
        },
        {
          name: "heroism",
          level: 3
        },
        {
          name: "slow",
          level: 3
        },
        {
          name: "suggestion ",
          level: 3
        },
        {
          name: "",
          limitations: "8/day",
          level: 2
        },
        {
          name: "gust of wind",
          level: 2
        },
        {
          name: "invisibility",
          level: 2
        },
        {
          name: "mirror image",
          level: 2
        },
        {
          name: "web ",
          level: 2
        },
        {
          name: "",
          limitations: "8/day",
          level: 1
        },
        {
          name: "mage armor",
          level: 1
        },
        {
          name: "obscuring mist",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "true strike",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "detect poison",
          level: 0
        },
        {
          name: "light",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "mending",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        },
        {
          name: "resistance",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Diplomacy: {
        ranks: 22
      },
      Fly: {
        ranks: 32
      },
      "Handle Animal": {
        ranks: 22
      },
      Intimidate: {
        ranks: 22
      },
      "Knowledge (arcana)": {
        ranks: 22
      },
      "Knowledge (geography)": {
        ranks: 22
      },
      "Knowledge (history)": {
        ranks: 22
      },
      Perception: {
        ranks: 22
      },
      "Sense Motive": {
        ranks: 22
      },
      Spellcraft: {
        ranks: 22
      },
      Stealth: {
        ranks: 22
      },
      Swim: {
        ranks: 6,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "120-ft. line",
        damage: "18d6 electricity",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "4d6+16",
        saveDC: 10
      },
      "repulsion breath": {
        type: "Su",
        text: "Instead of a line of electricity, a bronze dragon can breathe a cone of repulsion gas. Targets must make a Will save or be compelled to do nothing but move away from the dragon for 1d6 rounds plus 1 round per age category. This is a mind-affecting compulsion effect."
      },
      "tail sweep": {
        universalMonsterAbility: "Tail Sweep",
        damage: "2d6+16",
        saveDC: 10
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "polymorph",
        type: ", polymorph"
      },
      "water breathing": {
        type: "Ex",
        text: "A bronze dragon breathes water and can use its breath weapon, spells, and abilities underwater. Wave Mastery (Su) For up to 10 minutes per age category per day, a juvenile bronze dragon, along with creatures or vessels within 50 feet, can move at twice its normal speed in water."
      },
      "wave mastery": {
        type: "Su",
        text: "For up to 10 minutes per age category per day, a juvenile bronze dragon, along with creatures or vessels within 50 feet, can move at twice its normal speed in water.",
        preText: "90 min"
      },
      "electricity aura": {
        type: "Su",
        text: "An old or older bronze dragon has an aura of electricity. All creatures within 5 feet take 1d6 points of electricity damage at the start of the dragon's turn. An ancient dragon's aura is 10 feet. A great wyrm's damage increases to 2d6. A bronze dragon can suppress this aura at will.",
        preText: "5 ft., 1d6 electricity"
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "270 ft."
      }
    }
  },

  "Wyrm Bronze Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "water"
    ],
    alignments: [
      "Lawful Good"
    ],
    size: "Gargantuan",
    hd: 26,
    hdVal: 12,
    cr: 19,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 40,
      maneuverability: "Clumsy",
      fly: 250,
      swim: 60
    },
    abilities: {
      str: 37,
      dex: 6,
      con: 25,
      int: 24,
      wis: 25,
      cha: 24
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Great Cleave",
        type: "Combat"
      },
      {
        name: "Hover",
        type: "Monster"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Claw",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      },
      {
        name: "Wingover",
        type: "Monster"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to electricity, sleep"
    ],
    defense: {
      DR: {
        value: 20,
        damageType: "magic"
      },
      SR: {
        value: 30
      },
      naturalArmor: 35
    },
    space: "20 ft.",
    reach: "15 ft. (20 ft. with bite)",
    environment: "temperate coastlines",
    visualDescription: "This sleek dragon is covered in dull metallic scales that range in color from shining bronze to mottled blue.",
    description: "Bronze dragons have been known to ally with travelers and adventurers if the cause and reward is right and just.",
    organization: "solitary",
    languages: "Aquan, Common, Draconic, Elven, Gnome, 3 more",
    spellLikeAbilities: [
      {
        name: "control water",
        casterLevel: 26,
        timesPerDay: -1
      },
      {
        name: "create food and water",
        casterLevel: 26,
        timesPerDay: -1
      },
      {
        name: "detect thoughts",
        casterLevel: 26,
        timesPerDay: -1
      },
      {
        name: "fog cloud",
        casterLevel: 26,
        timesPerDay: -1
      },
      {
        name: "speak with animals",
        casterLevel: 26,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 17,
      spells: [
        {
          name: "",
          limitations: "4/day",
          level: 8
        },
        {
          name: "storm bolts* ",
          level: 8
        },
        {
          name: "",
          limitations: "7/day",
          level: 7
        },
        {
          name: "spell turning",
          level: 7
        },
        {
          name: "statue ",
          level: 7
        },
        {
          name: "",
          limitations: "7/day",
          level: 6
        },
        {
          name: "suggestion, mass",
          level: 6
        },
        {
          name: "mislead ",
          level: 6
        },
        {
          name: "",
          limitations: "7/day",
          level: 5
        },
        {
          name: "interposing hand",
          level: 5
        },
        {
          name: "mind fog",
          level: 5
        },
        {
          name: "teleport ",
          level: 5
        },
        {
          name: "",
          limitations: "7/day",
          level: 4
        },
        {
          name: "ice storm",
          level: 4
        },
        {
          name: "solid fog",
          level: 4
        },
        {
          name: "stoneskin ",
          level: 4
        },
        {
          name: "",
          limitations: "8/day",
          level: 3
        },
        {
          name: "heroism",
          level: 3
        },
        {
          name: "slow",
          level: 3
        },
        {
          name: "suggestion ",
          level: 3
        },
        {
          name: "",
          limitations: "8/day",
          level: 2
        },
        {
          name: "gust of wind",
          level: 2
        },
        {
          name: "invisibility",
          level: 2
        },
        {
          name: "mirror image",
          level: 2
        },
        {
          name: "web ",
          level: 2
        },
        {
          name: "",
          limitations: "8/day",
          level: 1
        },
        {
          name: "mage armor",
          level: 1
        },
        {
          name: "obscuring mist",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "true strike",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "detect poison",
          level: 0
        },
        {
          name: "light",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "mending",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        },
        {
          name: "resistance",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Diplomacy: {
        ranks: 26
      },
      Fly: {
        ranks: 36
      },
      "Handle Animal": {
        ranks: 26
      },
      Heal: {
        ranks: 26
      },
      Intimidate: {
        ranks: 26
      },
      "Knowledge (arcana)": {
        ranks: 26
      },
      "Knowledge (geography)": {
        ranks: 26
      },
      "Knowledge (history)": {
        ranks: 26
      },
      Perception: {
        ranks: 26
      },
      "Sense Motive": {
        ranks: 26
      },
      Spellcraft: {
        ranks: 26
      },
      Stealth: {
        ranks: 26
      },
      Swim: {
        ranks: 10,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "120-ft. line",
        damage: "22d6 electricity",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "4d6+19",
        saveDC: 10
      },
      "repulsion breath": {
        type: "Su",
        text: "Instead of a line of electricity, a bronze dragon can breathe a cone of repulsion gas. Targets must make a Will save or be compelled to do nothing but move away from the dragon for 1d6 rounds plus 1 round per age category. This is a mind-affecting compulsion effect."
      },
      "tail sweep": {
        universalMonsterAbility: "Tail Sweep",
        damage: "2d6+19",
        saveDC: 10
      },
      vortex: {
        type: "Ex",
        text: "Once per day, an ancient or older bronze dragon can create a vortex as a standard action, just like an elder water elemental. A bronze dragon can maintain this vortex for 1 round per age category."
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "polymorph",
        type: ", polymorph"
      },
      "water breathing": {
        type: "Ex",
        text: "A bronze dragon breathes water and can use its breath weapon, spells, and abilities underwater. Wave Mastery (Su) For up to 10 minutes per age category per day, a juvenile bronze dragon, along with creatures or vessels within 50 feet, can move at twice its normal speed in water."
      },
      "wave mastery": {
        type: "Su",
        text: "For up to 10 minutes per age category per day, a juvenile bronze dragon, along with creatures or vessels within 50 feet, can move at twice its normal speed in water.",
        preText: "110 min"
      },
      "electricity aura": {
        type: "Su",
        text: "An old or older bronze dragon has an aura of electricity. All creatures within 5 feet take 1d6 points of electricity damage at the start of the dragon's turn. An ancient dragon's aura is 10 feet. A great wyrm's damage increases to 2d6. A bronze dragon can suppress this aura at will.",
        preText: "10 ft., 1d6 electricity"
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "330 ft."
      }
    }
  },

  "Great Wyrm Bronze Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "water"
    ],
    alignments: [
      "Lawful Good"
    ],
    size: "Colossal",
    hd: 28,
    hdVal: 12,
    cr: 21,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 40,
      maneuverability: "Clumsy",
      fly: 250,
      swim: 60
    },
    abilities: {
      str: 39,
      dex: 6,
      con: 27,
      int: 264,
      wis: 27,
      cha: 26
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Great Cleave",
        type: "Combat"
      },
      {
        name: "Hover",
        type: "Monster"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Claw",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
      },
      {
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      },
      {
        name: "Wingover",
        type: "Monster"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to electricity, sleep"
    ],
    defense: {
      DR: {
        value: 20,
        damageType: "magic"
      },
      SR: {
        value: 32
      },
      naturalArmor: 38
    },
    space: "30 ft.",
    reach: "20 ft. (30 ft. with bite)",
    environment: "temperate coastlines",
    visualDescription: "This sleek dragon is covered in dull metallic scales that range in color from shining bronze to mottled blue.",
    description: "Bronze dragons have been known to ally with travelers and adventurers if the cause and reward is right and just.",
    organization: "solitary",
    languages: "Aquan, Common, Draconic, Elven, Gnome, 4 more",
    spellLikeAbilities: [
      {
        name: "control water",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "control weather",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "create food and water",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "detect thoughts",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "fog cloud",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "speak with animals",
        casterLevel: 28,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 19,
      spells: [
        {
          name: "",
          limitations: "4/day",
          level: 9
        },
        {
          name: "tsunami* ",
          level: 9
        },
        {
          name: "",
          limitations: "7/day",
          level: 8
        },
        {
          name: "discern location",
          level: 8
        },
        {
          name: "storm bolts* ",
          level: 8
        },
        {
          name: "",
          limitations: "7/day",
          level: 7
        },
        {
          name: "spell turning",
          level: 7
        },
        {
          name: "statue ",
          level: 7
        },
        {
          name: "",
          limitations: "7/day",
          level: 6
        },
        {
          name: "suggestion, mass",
          level: 6
        },
        {
          name: "mislead ",
          level: 6
        },
        {
          name: "",
          limitations: "7/day",
          level: 5
        },
        {
          name: "interposing hand",
          level: 5
        },
        {
          name: "mind fog",
          level: 5
        },
        {
          name: "teleport ",
          level: 5
        },
        {
          name: "",
          limitations: "8/day",
          level: 4
        },
        {
          name: "ice storm",
          level: 4
        },
        {
          name: "solid fog",
          level: 4
        },
        {
          name: "stoneskin ",
          level: 4
        },
        {
          name: "",
          limitations: "8/day",
          level: 3
        },
        {
          name: "heroism",
          level: 3
        },
        {
          name: "slow",
          level: 3
        },
        {
          name: "suggestion ",
          level: 3
        },
        {
          name: "",
          limitations: "8/day",
          level: 2
        },
        {
          name: "gust of wind",
          level: 2
        },
        {
          name: "invisibility",
          level: 2
        },
        {
          name: "mirror image",
          level: 2
        },
        {
          name: "web ",
          level: 2
        },
        {
          name: "",
          limitations: "8/day",
          level: 1
        },
        {
          name: "mage armor",
          level: 1
        },
        {
          name: "obscuring mist",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "true strike",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "detect poison",
          level: 0
        },
        {
          name: "light",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "mending",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        },
        {
          name: "resistance",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Diplomacy: {
        ranks: 28
      },
      Fly: {
        ranks: 44
      },
      "Handle Animal": {
        ranks: 28
      },
      Heal: {
        ranks: 28
      },
      Intimidate: {
        ranks: 28
      },
      "Knowledge (arcana)": {
        ranks: 0
      },
      "Knowledge (geography)": {
        ranks: 0
      },
      "Knowledge (history)": {
        ranks: 0
      },
      "Knowledge (local)": {
        ranks: 0
      },
      Perception: {
        ranks: 28
      },
      "Sense Motive": {
        ranks: 28
      },
      Spellcraft: {
        ranks: 0
      },
      Stealth: {
        ranks: 28
      },
      Swim: {
        ranks: 12,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "140-ft. line",
        damage: "24d6 electricity",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "4d8+21",
        saveDC: 10
      },
      "repulsion breath": {
        type: "Su",
        text: "Instead of a line of electricity, a bronze dragon can breathe a cone of repulsion gas. Targets must make a Will save or be compelled to do nothing but move away from the dragon for 1d6 rounds plus 1 round per age category. This is a mind-affecting compulsion effect."
      },
      "tail sweep": {
        universalMonsterAbility: "Tail Sweep",
        damage: "2d8+21",
        saveDC: 10
      },
      "tidal wave": {
        type: "Su",
        text: "A great wyrm bronze dragon can cause the sea to rise up and crush his enemies once per day as a standard action. This affects an area of coastline 120 feet in length and targets all creatures within 40 feet of the shore-treat the targets as if struck by an avalanche. Treat all creatures as if they were in the bury zone. The save DC to halve this damage is equal to the dragon's breath weapon DC. Those who fail their saves take full damage and are drawn 60 feet off shore and deposited 20 feet under the surface on the round after the wave hits."
      },
      vortex: {
        type: "Ex",
        text: "Once per day, an ancient or older bronze dragon can create a vortex as a standard action, just like an elder water elemental. A bronze dragon can maintain this vortex for 1 round per age category."
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "polymorph",
        type: ", polymorph"
      },
      "water breathing": {
        type: "Ex",
        text: "A bronze dragon breathes water and can use its breath weapon, spells, and abilities underwater. Wave Mastery (Su) For up to 10 minutes per age category per day, a juvenile bronze dragon, along with creatures or vessels within 50 feet, can move at twice its normal speed in water."
      },
      "wave mastery": {
        type: "Su",
        text: "For up to 10 minutes per age category per day, a juvenile bronze dragon, along with creatures or vessels within 50 feet, can move at twice its normal speed in water.",
        preText: "120 min"
      },
      "electricity aura": {
        type: "Su",
        text: "An old or older bronze dragon has an aura of electricity. All creatures within 5 feet take 1d6 points of electricity damage at the start of the dragon's turn. An ancient dragon's aura is 10 feet. A great wyrm's damage increases to 2d6. A bronze dragon can suppress this aura at will.",
        preText: "10 ft., 2d6 electricity"
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "360 ft."
      }
    }
  },

  "Wyrmling Copper Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "earth"
    ],
    alignments: [
      "Chaotic Good"
    ],
    size: "Tiny",
    hd: 5,
    hdVal: 12,
    cr: 4,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 40,
      maneuverability: "Average",
      fly: 100
    },
    abilities: {
      str: 11,
      dex: 16,
      con: 13,
      int: 12,
      wis: 13,
      cha: 12
    },
    feats: [
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to acid, sleep"
    ],
    defense: {
      naturalArmor: 4
    },
    space: "2.5 ft.",
    reach: "0 ft. (5 ft. with bite)",
    environment: "warm hills",
    visualDescription: "Bright, shining copper scales run from the horn-crowned head to the ridged tail of this long-winged dragon.",
    description: "This whimsical dragon spends most of its time in combat trying to annoy and frustrate its enemies.",
    organization: "solitary",
    languages: "Common, Draconic",
    spellLikeAbilities: [],
    skills: {
      Bluff: {
        ranks: 5
      },
      Craft0: {
        subSkill: "traps",
        ranks: 5
      },
      Fly: {
        ranks: 5
      },
      Perception: {
        ranks: 5
      },
      Perform0: {
        subSkill: "comedy",
        ranks: 5
      },
      "Sense Motive": {
        ranks: 5
      },
      Stealth: {
        ranks: 5
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "30-ft. line",
        damage: "2d6 acid",
        saveDC: 10
      },
      "slow breath": {
        type: "Su",
        text: "Instead of a line of acid, a copper dragon can breathe a cone of slowing gas. Those in the cone must make a Fortitude save or be slowed (as per the spell slow for 1d6 rounds plus 1 round per age category of the dragon."
      },
      "climb stone": {
        type: "Ex",
        text: "A copper dragon can climb on stone surfaces as though using the spider climb spell."
      }
    }
  },

  "Very Young Copper Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "earth"
    ],
    alignments: [
      "Chaotic Good"
    ],
    size: "Small",
    hd: 7,
    hdVal: 12,
    cr: 6,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 40,
      maneuverability: "Average",
      fly: 150
    },
    abilities: {
      str: 15,
      dex: 14,
      con: 15,
      int: 14,
      wis: 15,
      cha: 14
    },
    feats: [
      {
        name: "Combat Expertise",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to acid, sleep"
    ],
    defense: {
      naturalArmor: 7
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "warm hills",
    visualDescription: "Bright, shining copper scales run from the horn-crowned head to the ridged tail of this long-winged dragon.",
    description: "This whimsical dragon spends most of its time in combat trying to annoy and frustrate its enemies.",
    organization: "solitary",
    languages: "Common, Draconic, Gnome",
    spellLikeAbilities: [
      {
        name: "grease",
        casterLevel: 7,
        timesPerDay: -1
      }
    ],
    skills: {
      Bluff: {
        ranks: 7
      },
      Craft0: {
        subSkill: "traps",
        ranks: 7
      },
      Fly: {
        ranks: 7
      },
      Perception: {
        ranks: 7
      },
      Perform0: {
        subSkill: "comedy",
        ranks: 7
      },
      "Sense Motive": {
        ranks: 7
      },
      Stealth: {
        ranks: 7
      },
      "Use Magic Device": {
        ranks: 7
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "40-ft. line",
        damage: "4d6 acid",
        saveDC: 10
      },
      "slow breath": {
        type: "Su",
        text: "Instead of a line of acid, a copper dragon can breathe a cone of slowing gas. Those in the cone must make a Fortitude save or be slowed (as per the spell slow) for 1d6 rounds plus 1 round per age category of the dragon."
      },
      "climb stone": {
        type: "Ex",
        text: "A copper dragon can climb on stone surfaces as though using the spider climb spell."
      }
    }
  },

  "Juvenile Copper Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "earth"
    ],
    alignments: [
      "Chaotic Good"
    ],
    size: "Medium",
    hd: 11,
    hdVal: 12,
    cr: 9,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 40,
      maneuverability: "Average",
      fly: 150
    },
    abilities: {
      str: 21,
      dex: 14,
      con: 19,
      int: 16,
      wis: 17,
      cha: 16
    },
    feats: [
      {
        name: "Combat Expertise",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Claw",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Trip",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to acid, sleep"
    ],
    defense: {
      naturalArmor: 13
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "warm hills",
    visualDescription: "Bright, shining copper scales run from the horn-crowned head to the ridged tail of this long-winged dragon.",
    description: "This whimsical dragon spends most of its time in combat trying to annoy and frustrate its enemies.",
    organization: "solitary",
    languages: "Common, Draconic, Gnome, Halfling",
    spellLikeAbilities: [
      {
        name: "grease",
        casterLevel: 11,
        timesPerDay: -1
      },
      {
        name: "hideous laughter",
        casterLevel: 11,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 3,
      spells: [
        {
          name: "",
          limitations: "6/day",
          level: 1
        },
        {
          name: "magic missile",
          level: 1
        },
        {
          name: "silent image",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "ghost sound",
          level: 0
        },
        {
          name: "light",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Bluff: {
        ranks: 11
      },
      Craft0: {
        subSkill: "traps",
        ranks: 15
      },
      Diplomacy: {
        ranks: 11
      },
      Fly: {
        ranks: 11
      },
      Perception: {
        ranks: 11
      },
      Perform0: {
        subSkill: "comedy",
        ranks: 11
      },
      "Sense Motive": {
        ranks: 11
      },
      Stealth: {
        ranks: 11
      },
      "Use Magic Device": {
        ranks: 11
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "60-ft. line",
        damage: "8d6 acid",
        saveDC: 10
      },
      "slow breath": {
        type: "Su",
        text: "Instead of a line of acid, a copper dragon can breathe a cone of slowing gas. Those in the cone must make a Fortitude save or be slowed (as per the spell slow) for 1d6 rounds plus 1 round per age category of the dragon."
      },
      "climb stone": {
        type: "Ex",
        text: "A copper dragon can climb on stone surfaces as though using the spider climb spell."
      },
      "trap master": {
        type: "Ex"
      },
      "uncanny dodge": {
        universalMonsterAbility: "Uncanny Dodge"
      }
    }
  },

  "Young Adult Copper Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "earth"
    ],
    alignments: [
      "Chaotic Good"
    ],
    size: "Large",
    hd: 13,
    hdVal: 12,
    cr: 11,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 40,
      maneuverability: "Poor",
      fly: 200
    },
    abilities: {
      str: 23,
      dex: 12,
      con: 19,
      int: 16,
      wis: 17,
      cha: 16
    },
    feats: [
      {
        name: "Combat Expertise",
        type: "Combat"
      },
      {
        name: "Greater Trip",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Claw",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Trip",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to acid, sleep"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "magic"
      },
      SR: {
        value: 22
      },
      naturalArmor: 16
    },
    space: "10 ft.",
    reach: "5 ft. (10 ft. with bite)",
    environment: "warm hills",
    visualDescription: "Bright, shining copper scales run from the horn-crowned head to the ridged tail of this long-winged dragon.",
    description: "This whimsical dragon spends most of its time in combat trying to annoy and frustrate its enemies.",
    organization: "solitary",
    languages: "Common, Draconic, Gnome, Halfling",
    spellLikeAbilities: [
      {
        name: "grease",
        casterLevel: 13,
        timesPerDay: -1
      },
      {
        name: "hideous laughter",
        casterLevel: 13,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 5,
      spells: [
        {
          name: "",
          limitations: "5/day",
          level: 2
        },
        {
          name: "phantom trap ",
          level: 2
        },
        {
          name: "",
          limitations: "7/day",
          level: 1
        },
        {
          name: "magic missile",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "silent image",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "ghost sound",
          level: 0
        },
        {
          name: "light",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Bluff: {
        ranks: 13
      },
      Craft0: {
        subSkill: "traps",
        ranks: 18
      },
      Diplomacy: {
        ranks: 13
      },
      Fly: {
        ranks: 13
      },
      Perception: {
        ranks: 13
      },
      Perform0: {
        subSkill: "comedy",
        ranks: 13
      },
      "Sense Motive": {
        ranks: 13
      },
      Stealth: {
        ranks: 13
      },
      "Use Magic Device": {
        ranks: 13
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "80-ft. line",
        damage: "10d6 acid",
        saveDC: 10
      },
      "slow breath": {
        type: "Su",
        text: "Instead of a line of acid, a copper dragon can breathe a cone of slowing gas. Those in the cone must make a Fortitude save or be slowed (as per the spell slow) for 1d6 rounds plus 1 round per age category of the dragon."
      },
      "climb stone": {
        type: "Ex",
        text: "A copper dragon can climb on stone surfaces as though using the spider climb spell."
      },
      "trap master": {
        type: "Ex",
        text: "A juvenile or older copper dragon receives a +1 bonus per age categroy on Craft (traps) and Perception checks made to locate a trap. Upon becoming a mature adult, he can also use Disable Device to disarm magic traps as if he had the rogue's Trapfinding class feature."
      },
      "uncanny dodge": {
        universalMonsterAbility: "Uncanny Dodge"
      }
    }
  },

  "Mature Adult Copper Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "earth"
    ],
    alignments: [
      "Chaotic Good"
    ],
    size: "Large",
    hd: 17,
    hdVal: 12,
    cr: 13,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 40,
      maneuverability: "Poor",
      fly: 200
    },
    abilities: {
      str: 27,
      dex: 12,
      con: 21,
      int: 18,
      wis: 19,
      cha: 18
    },
    feats: [
      {
        name: "Combat Expertise",
        type: "Combat"
      },
      {
        name: "Greater Trip",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Claw",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Trip",
        type: "Combat"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to acid, sleep"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "magic"
      },
      SR: {
        value: 24
      },
      naturalArmor: 22
    },
    space: "10 ft.",
    reach: "5 ft. (10 ft. with bite)",
    environment: "warm hills",
    visualDescription: "Bright, shining copper scales run from the horn-crowned head to the ridged tail of this long-winged dragon.",
    description: "This whimsical dragon spends most of its time in combat trying to annoy and frustrate its enemies.",
    organization: "solitary",
    languages: "Common, Draconic, Elven, Gnome, Halfling",
    spellLikeAbilities: [
      {
        name: "grease",
        casterLevel: 17,
        timesPerDay: -1
      },
      {
        name: "hideous laughter",
        casterLevel: 17,
        timesPerDay: -1
      },
      {
        name: "stone shape",
        casterLevel: 17,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 9,
      spells: [
        {
          name: "",
          limitations: "5/day",
          level: 4
        },
        {
          name: "rainbow pattern ",
          level: 4
        },
        {
          name: "",
          limitations: "7/day",
          level: 3
        },
        {
          name: "haste",
          level: 3
        },
        {
          name: "major image",
          level: 3
        },
        {
          name: "(7/day)-glitterdust",
          limitations: "7/day",
          level: 2
        },
        {
          name: "invisibility",
          level: 2
        },
        {
          name: "phantom trap",
          level: 2
        },
        {
          name: "see invisibility ",
          level: 2
        },
        {
          name: "",
          limitations: "7/day",
          level: 1
        },
        {
          name: "identify",
          level: 1
        },
        {
          name: "magic missile",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "silent image",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "ghost sound",
          level: 0
        },
        {
          name: "light",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "open/close",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Bluff: {
        ranks: 17
      },
      Craft0: {
        subSkill: "traps",
        ranks: 24
      },
      Diplomacy: {
        ranks: 17
      },
      Fly: {
        ranks: 17
      },
      "Knowledge (history)": {
        ranks: 17
      },
      Perception: {
        ranks: 17
      },
      Perform0: {
        subSkill: "comedy",
        ranks: 17
      },
      "Sense Motive": {
        ranks: 17
      },
      Stealth: {
        ranks: 17
      },
      "Use Magic Device": {
        ranks: 17
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "80-ft. line",
        damage: "14d6 acid",
        saveDC: 10
      },
      "slow breath": {
        type: "Su",
        text: "Instead of a line of acid, a copper dragon can breathe a cone of slowing gas. Those in the cone must make a Fortitude save or be slowed (as per the spell slow) for 1d6 rounds plus 1 round per age category of the dragon."
      },
      "climb stone": {
        type: "Ex",
        text: "A copper dragon can climb on stone surfaces as though using the spider climb spell."
      },
      "trap master": {
        type: "Ex",
        text: "A juvenile or older copper dragon receives a +1 bonus per age category on Craft (traps) and Perception checks made to locate a trap. Upon becoming a mature adult, he can also use Disable Device to disarm magic traps as if he had the rogue's Trapfinding class feature."
      },
      "uncanny dodge": {
        universalMonsterAbility: "Uncanny Dodge"
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "210 ft."
      }
    }
  },

  "Old Copper Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "earth"
    ],
    alignments: [
      "Chaotic Good"
    ],
    size: "Huge",
    hd: 19,
    hdVal: 12,
    cr: 15,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 40,
      maneuverability: "Poor",
      fly: 200
    },
    abilities: {
      str: 29,
      dex: 10,
      con: 23,
      int: 20,
      wis: 21,
      cha: 20
    },
    feats: [
      {
        name: "Combat Expertise",
        type: "Combat"
      },
      {
        name: "Greater Trip",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Claw",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Trip",
        type: "Combat"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Spell Focus",
        type: "General",
        value: "Illusion",
        choiceSource: "Spell Focus"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to acid, sleep"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "magic"
      },
      SR: {
        value: 26
      },
      naturalArmor: 25
    },
    space: "15 ft.",
    reach: "10 ft. (15 ft. with bite)",
    environment: "warm hills",
    visualDescription: "Bright, shining copper scales run from the horn-crowned head to the ridged tail of this long-winged dragon.",
    description: "This whimsical dragon spends most of its time in combat trying to annoy and frustrate its enemies.",
    organization: "solitary",
    languages: "Common, Draconic, Dwarven, Elven, Gnome, Halfling",
    spellLikeAbilities: [
      {
        name: "grease",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "hideous laughter",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "stone shape",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "transmute mud to rock",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "transmute rock to mud",
        casterLevel: 19,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 11,
      spells: [
        {
          name: "(5/day)-mind fog",
          limitations: "5/day",
          level: 5
        },
        {
          name: "teleport ",
          level: 5
        },
        {
          name: "(7/day)-confusion",
          limitations: "7/day",
          level: 4
        },
        {
          name: "rainbow pattern",
          level: 4
        },
        {
          name: "stone shape ",
          level: 4
        },
        {
          name: "",
          limitations: "7/day",
          level: 3
        },
        {
          name: "haste",
          level: 3
        },
        {
          name: "major image",
          level: 3
        },
        {
          name: "tongues ",
          level: 3
        },
        {
          name: "(7/day)-glitterdust",
          limitations: "7/day",
          level: 2
        },
        {
          name: "invisibility",
          level: 2
        },
        {
          name: "phantom trap",
          level: 2
        },
        {
          name: "pyrotechnics",
          level: 2
        },
        {
          name: "see invisibility ",
          level: 2
        },
        {
          name: "",
          limitations: "8/day",
          level: 1
        },
        {
          name: "identify",
          level: 1
        },
        {
          name: "magic missile",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "silent image",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "ghost sound",
          level: 0
        },
        {
          name: "light",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "open/close",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Bluff: {
        ranks: 19
      },
      Craft0: {
        subSkill: "traps",
        ranks: 27
      },
      Diplomacy: {
        ranks: 19
      },
      Fly: {
        ranks: 19
      },
      "Knowledge (geography)": {
        ranks: 19
      },
      "Knowledge (history)": {
        ranks: 19
      },
      Perception: {
        ranks: 19
      },
      Perform0: {
        subSkill: "comedy",
        ranks: 19
      },
      "Sense Motive": {
        ranks: 19
      },
      Stealth: {
        ranks: 19
      },
      "Use Magic Device": {
        ranks: 19
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "100-ft. line",
        damage: "16d6 acid",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "2d8+13",
        saveDC: 10
      },
      "slow breath": {
        type: "Su",
        text: "Instead of a line of acid, a copper dragon can breathe a cone of slowing gas. Those in the cone must make a Fortitude save or be slowed (as per the spell slow) for 1d6 rounds plus 1 round per age category of the dragon."
      },
      "climb stone": {
        type: "Ex",
        text: "A copper dragon can climb on stone surfaces as though using the spider climb spell. Slow Aura (Su) An old or older copper dragon is surrounded by an aura of slowness. All creatures within 5 feet of the dragon must make a Will save or be affected as per slow for 1 round. An ancient dragon's aura extends to 10 feet. For great wyrm copper dragons, those opponents that fail their saves are slowed for 1d4 rounds. The DC of this save is equal to the dragon's breath weapon. A copper dragon can suppress or activate this aura at will as a free action."
      },
      "trap master": {
        type: "Ex",
        text: "A juvenile or older copper dragon receives a +1 bonus per age category on Craft (traps) and Perception checks made to locate a trap. Upon becoming a mature adult, he can also use Disable Device to disarm magic traps as if he had the rogue's Trapfinding class feature."
      },
      "uncanny dodge": {
        universalMonsterAbility: "Uncanny Dodge"
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "240 ft."
      },
      slow: {
        type: "Ex",
        preText: "5 ft., DC 25, 1 round"
      }
    }
  },

  "Very Old Copper Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "earth"
    ],
    alignments: [
      "Chaotic Good"
    ],
    size: "Huge",
    hd: 21,
    hdVal: 12,
    cr: 16,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 40,
      maneuverability: "Poor",
      fly: 200
    },
    abilities: {
      str: 31,
      dex: 10,
      con: 23,
      int: 20,
      wis: 21,
      cha: 20
    },
    feats: [
      {
        name: "Combat Expertise",
        type: "Combat"
      },
      {
        name: "Greater Trip",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Claw",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Trip",
        type: "Combat"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Quicken Spell",
        type: "Metamagic"
      },
      {
        name: "Spell Focus",
        type: "General",
        value: "Illusion",
        choiceSource: "Spell Focus"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to acid, sleep"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "magic"
      },
      SR: {
        value: 27
      },
      naturalArmor: 28
    },
    space: "15 ft.",
    reach: "10 ft. (15 ft. with bite)",
    environment: "warm hills",
    visualDescription: "Bright, shining copper scales run from the horn-crowned head to the ridged tail of this long-winged dragon.",
    description: "This whimsical dragon spends most of its time in combat trying to annoy and frustrate its enemies.",
    organization: "solitary",
    languages: "Common, Draconic, Dwarven, Elven, Gnome, Halfling",
    spellLikeAbilities: [
      {
        name: "grease",
        casterLevel: 21,
        timesPerDay: -1
      },
      {
        name: "hideous laughter",
        casterLevel: 21,
        timesPerDay: -1
      },
      {
        name: "stone shape",
        casterLevel: 21,
        timesPerDay: -1
      },
      {
        name: "transmute mud to rock",
        casterLevel: 21,
        timesPerDay: -1
      },
      {
        name: "transmute rock to mud",
        casterLevel: 21,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 13,
      spells: [
        {
          name: "",
          limitations: "4/day",
          level: 6
        },
        {
          name: "programmed image",
          level: 6
        },
        {
          name: "(7/day)-mind fog",
          limitations: "7/day",
          level: 5
        },
        {
          name: "polymorph",
          level: 5
        },
        {
          name: "teleport ",
          level: 5
        },
        {
          name: "(7/day)-confusion",
          limitations: "7/day",
          level: 4
        },
        {
          name: "rainbow pattern",
          level: 4
        },
        {
          name: "stone shape",
          level: 4
        },
        {
          name: "stoneskin ",
          level: 4
        },
        {
          name: "",
          limitations: "7/day",
          level: 3
        },
        {
          name: "haste",
          level: 3
        },
        {
          name: "major image",
          level: 3
        },
        {
          name: "tongues ",
          level: 3
        },
        {
          name: "(7/day)-glitterdust",
          limitations: "7/day",
          level: 2
        },
        {
          name: "invisibility",
          level: 2
        },
        {
          name: "phantom trap",
          level: 2
        },
        {
          name: "pyrotechnics",
          level: 2
        },
        {
          name: "see invisibility ",
          level: 2
        },
        {
          name: "",
          limitations: "8/day",
          level: 1
        },
        {
          name: "identify",
          level: 1
        },
        {
          name: "magic missile",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "silent image",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "ghost sound",
          level: 0
        },
        {
          name: "light",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "open/close",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Bluff: {
        ranks: 21
      },
      Craft0: {
        subSkill: "traps",
        ranks: 30
      },
      Diplomacy: {
        ranks: 21
      },
      Fly: {
        ranks: 21
      },
      "Knowledge (geography)": {
        ranks: 21
      },
      "Knowledge (history)": {
        ranks: 21
      },
      Perception: {
        ranks: 21
      },
      Perform0: {
        subSkill: "comedy",
        ranks: 21
      },
      "Sense Motive": {
        ranks: 21
      },
      Stealth: {
        ranks: 21
      },
      "Use Magic Device": {
        ranks: 21
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "100-ft. line",
        damage: "18d6 acid",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "2d8+15",
        saveDC: 10
      },
      "slow breath": {
        type: "Su",
        text: "Instead of a line of acid, a copper dragon can breathe a cone of slowing gas. Those in the cone must make a Fortitude save or be slowed (as per the spell slow) for 1d6 rounds plus 1 round per age category of the dragon."
      },
      "climb stone": {
        type: "Ex",
        text: "A copper dragon can climb on stone surfaces as though using the spider climb spell. Slow Aura (Su) An old or older copper dragon is surrounded by an aura of slowness. All creatures within 5 feet of the dragon must make a Will save or be affected as per slow for 1 round. An ancient dragon's aura extends to 10 feet. For great wyrm copper dragons, those opponents that fail their saves are slowed for 1d4 rounds. The DC of this save is equal to the dragon's breath weapon. A copper dragon can suppress or activate this aura at will as a free action."
      },
      "trap master": {
        type: "Ex",
        text: "A juvenile or older copper dragon receives a +1 bonus per age category on Craft (traps) and Perception checks made to locate a trap. Upon becoming a mature adult, he can also use Disable Device to disarm magic traps as if he had the rogue's Trapfinding class feature."
      },
      "uncanny dodge": {
        universalMonsterAbility: "Uncanny Dodge"
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "270 ft."
      },
      slow: {
        type: "Ex",
        preText: "5 ft., DC 26, 1 round"
      }
    }
  },

  "Wyrm Copper Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "earth"
    ],
    alignments: [
      "Chaotic Good"
    ],
    size: "Huge",
    hd: 25,
    hdVal: 12,
    cr: 18,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 40,
      maneuverability: "Poor",
      fly: 200
    },
    abilities: {
      str: 35,
      dex: 8,
      con: 25,
      int: 22,
      wis: 23,
      cha: 22
    },
    feats: [
      {
        name: "Combat Expertise",
        type: "Combat"
      },
      {
        name: "Greater Trip",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Claw",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Disarm",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Trip",
        type: "Combat"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Quicken Spell",
        type: "Metamagic"
      },
      {
        name: "Spell Focus",
        type: "General",
        value: "Illusion",
        choiceSource: "Spell Focus"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to acid, sleep"
    ],
    defense: {
      DR: {
        value: 20,
        damageType: "magic"
      },
      SR: {
        value: 29
      },
      naturalArmor: 34
    },
    space: "15 ft.",
    reach: "10 ft. (15 ft. with bite)",
    environment: "warm hills",
    visualDescription: "Bright, shining copper scales run from the horn-crowned head to the ridged tail of this long-winged dragon.",
    description: "This whimsical dragon spends most of its time in combat trying to annoy and frustrate its enemies.",
    organization: "solitary",
    languages: "Common, Draconic, Dwarven, Elven, Giant, Gnome, Halfling",
    spellLikeAbilities: [
      {
        name: "grease",
        casterLevel: 25,
        timesPerDay: -1
      },
      {
        name: "hideous laughter",
        casterLevel: 25,
        timesPerDay: -1
      },
      {
        name: "stone shape",
        casterLevel: 25,
        timesPerDay: -1
      },
      {
        name: "transmute mud to rock",
        casterLevel: 25,
        timesPerDay: -1
      },
      {
        name: "transmute rock to mud",
        casterLevel: 25,
        timesPerDay: -1
      },
      {
        name: "wall of stone",
        casterLevel: 25,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 17,
      spells: [
        {
          name: "(4/day)-scintillating pattern",
          limitations: "4/day",
          level: 8
        },
        {
          name: "temporal stasis",
          level: 8
        },
        {
          name: "(6/day)-mass hold person",
          limitations: "6/day",
          level: 7
        },
        {
          name: "reverse gravity",
          level: 7
        },
        {
          name: "teleport object",
          level: 7
        },
        {
          name: "",
          limitations: "7/day",
          level: 6
        },
        {
          name: "mislead",
          level: 6
        },
        {
          name: "programmed image",
          level: 6
        },
        {
          name: "(7/day)-mind fog",
          limitations: "7/day",
          level: 5
        },
        {
          name: "polymorph",
          level: 5
        },
        {
          name: "sending",
          level: 5
        },
        {
          name: "teleport ",
          level: 5
        },
        {
          name: "(7/day)-confusion",
          limitations: "7/day",
          level: 4
        },
        {
          name: "rainbow pattern",
          level: 4
        },
        {
          name: "stone shape",
          level: 4
        },
        {
          name: "stoneskin ",
          level: 4
        },
        {
          name: "",
          limitations: "7/day",
          level: 3
        },
        {
          name: "haste",
          level: 3
        },
        {
          name: "suggestion",
          level: 3
        },
        {
          name: "tongues ",
          level: 3
        },
        {
          name: "(8/day)-glitterdust",
          limitations: "8/day",
          level: 2
        },
        {
          name: "invisibility",
          level: 2
        },
        {
          name: "phantom trap",
          level: 2
        },
        {
          name: "pyrotechnics",
          level: 2
        },
        {
          name: "see invisibility ",
          level: 2
        },
        {
          name: "",
          limitations: "8/day",
          level: 1
        },
        {
          name: "magic aura",
          level: 1
        },
        {
          name: "obscuring mist",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "silent image",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "ghost sound",
          level: 0
        },
        {
          name: "light",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "open/close",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Bluff: {
        ranks: 25
      },
      Craft0: {
        subSkill: "traps",
        ranks: 36
      },
      Diplomacy: {
        ranks: 25
      },
      Fly: {
        ranks: 25
      },
      "Knowledge (geography)": {
        ranks: 25
      },
      "Knowledge (history)": {
        ranks: 25
      },
      Perception: {
        ranks: 25
      },
      Perform0: {
        subSkill: "comedy",
        ranks: 25
      },
      "Sense Motive": {
        ranks: 25
      },
      Spellcraft: {
        ranks: 25
      },
      Stealth: {
        ranks: 25
      },
      "Use Magic Device": {
        ranks: 25
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "100-ft. line",
        damage: "22d6 acid",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "2d8+18",
        saveDC: 10
      },
      "mass laughter": {
        type: "Sp",
        text: "An ancient copper dragon can tell a fantastic joke once per day as a standard action. All creatures within 10 feet per age category must make a Will save or laugh for 1 round per age category, as if affected by hideous laughter. The save DC is Charisma-based. This is equal to a 6th-level spell. Slow Aura (Su) An old or older copper dragon is surrounded by an aura of slowness. All creatures within 5 feet of the dragon must make a Will save or be affected as per slow for 1 round. An ancient dragon's aura extends to 10 feet. For great wyrm copper dragons, those opponents that fail their saves are slowed for 1d4 rounds. The DC of this save is equal to the dragon's breath weapon. A copper dragon can suppress or activate this aura at will as a free action."
      },
      "slow breath": {
        type: "Su",
        text: "Instead of a line of acid, a copper dragon can breathe a cone of slowing gas. Those in the cone must make a Fortitude save or be slowed (as per the spell slow) for 1d6 rounds plus 1 round per age category of the dragon."
      },
      "climb stone": {
        type: "Ex",
        text: "A copper dragon can climb on stone surfaces as though using the spider climb spell."
      },
      "trap master": {
        type: "Ex",
        text: "A juvenile or older copper dragon receives a +1 bonus per age category on Craft (traps) and Perception checks made to locate a trap. Upon becoming a mature adult, he can also use Disable Device to disarm magic traps as if he had the rogue's Trapfinding class feature."
      },
      "uncanny dodge": {
        universalMonsterAbility: "Uncanny Dodge"
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "330 ft."
      },
      slow: {
        type: "Ex",
        preText: "10 ft., DC 29, 1 round"
      }
    }
  },

  "Great Wyrm Copper Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "earth"
    ],
    alignments: [
      "Chaotic Good"
    ],
    size: "Gargantuan",
    hd: 27,
    hdVal: 12,
    cr: 20,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 40,
      maneuverability: "Clumsy",
      fly: 250
    },
    abilities: {
      str: 37,
      dex: 8,
      con: 27,
      int: 24,
      wis: 25,
      cha: 24
    },
    feats: [
      {
        name: "Combat Expertise",
        type: "Combat"
      },
      {
        name: "Greater Trip",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Claw",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Disarm",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Trip",
        type: "Combat"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
      },
      {
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Quicken Spell",
        type: "Metamagic"
      },
      {
        name: "Spell Focus",
        type: "General",
        value: "Illusion",
        choiceSource: "Spell Focus"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to acid, sleep"
    ],
    defense: {
      DR: {
        value: 20,
        damageType: "magic"
      },
      SR: {
        value: 31
      },
      naturalArmor: 37
    },
    space: "20 ft.",
    reach: "15 ft. (20 ft. with bite)",
    environment: "warm hills",
    visualDescription: "Bright, shining copper scales run from the horn-crowned head to the ridged tail of this long-winged dragon.",
    description: "This whimsical dragon spends most of its time in combat trying to annoy and frustrate its enemies.",
    organization: "solitary",
    languages: "Common, Draconic, Dwarven, Elven, Giant, Gnome, Halfling, 1 more",
    spellLikeAbilities: [
      {
        name: "grease",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "hideous laughter",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "move earth",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "stone shape",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "transmute mud to rock",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "transmute rock to mud",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "wall of stone",
        casterLevel: 27,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 19,
      spells: [
        {
          name: "(4/day)- clashing rocks*",
          limitations: "4/day",
          level: 9
        },
        {
          name: "weird",
          level: 9
        },
        {
          name: "(6/day)- irresistible dance",
          limitations: "6/day",
          level: 8
        },
        {
          name: "scintillating pattern",
          level: 8
        },
        {
          name: "temporal stasis",
          level: 8
        },
        {
          name: "(7/day)- mass hold person",
          limitations: "7/day",
          level: 7
        },
        {
          name: "reverse gravity",
          level: 7
        },
        {
          name: "teleport object",
          level: 7
        },
        {
          name: "",
          limitations: "7/day",
          level: 6
        },
        {
          name: "mislead",
          level: 6
        },
        {
          name: "programmed image",
          level: 6
        },
        {
          name: "(7/day)- mind fog",
          limitations: "7/day",
          level: 5
        },
        {
          name: "polymorph",
          level: 5
        },
        {
          name: "sending",
          level: 5
        },
        {
          name: "teleport ",
          level: 5
        },
        {
          name: "(7/day)- confusion",
          limitations: "7/day",
          level: 4
        },
        {
          name: "rainbow pattern",
          level: 4
        },
        {
          name: "stone shape",
          level: 4
        },
        {
          name: "stoneskin ",
          level: 4
        },
        {
          name: "",
          limitations: "8/day",
          level: 3
        },
        {
          name: "haste",
          level: 3
        },
        {
          name: "suggestion",
          level: 3
        },
        {
          name: "tongues ",
          level: 3
        },
        {
          name: "(8/day)- glitterdust",
          limitations: "8/day",
          level: 2
        },
        {
          name: "invisibility",
          level: 2
        },
        {
          name: "phantom trap",
          level: 2
        },
        {
          name: "pyrotechnics",
          level: 2
        },
        {
          name: "see invisibility ",
          level: 2
        },
        {
          name: "",
          limitations: "8/day",
          level: 1
        },
        {
          name: "magic aura",
          level: 1
        },
        {
          name: "obscuring mist",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "silent image",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "ghost sound",
          level: 0
        },
        {
          name: "light",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "open/close",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Bluff: {
        ranks: 27
      },
      Craft0: {
        subSkill: "traps",
        ranks: 39
      },
      Diplomacy: {
        ranks: 27
      },
      "Disable Device": {
        ranks: 27
      },
      Fly: {
        ranks: 29
      },
      "Knowledge (geography)": {
        ranks: 27
      },
      "Knowledge (history)": {
        ranks: 27
      },
      Perception: {
        ranks: 27
      },
      Perform0: {
        subSkill: "comedy",
        ranks: 27
      },
      "Sense Motive": {
        ranks: 27
      },
      Spellcraft: {
        ranks: 27
      },
      Stealth: {
        ranks: 27
      },
      "Use Magic Device": {
        ranks: 27
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "120-ft. line",
        damage: "24d6 acid",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "4d6+19",
        saveDC: 10
      },
      "deadly joke": {
        type: "Sp",
        text: "Once per day, as a standard action, a great wyrm copper dragon can tell a joke that kills. This affects one target, and functions as power word kill. This is a language-dependent sonic effect. Mass Laughter (Sp) An ancient copper dragon can tell a fantastic joke once per day as a standard action. All creatures within 10 feet per age category must make a Will save or laugh for 1 round per age category, as if affected by hideous laughter. The save DC is Charisma-based. This is equal to a 6th-level spell. Slow Aura (Su) An old or older copper dragon is surrounded by an aura of slowness. All creatures within 5 feet of the dragon must make a Will save or be affected as per slow for 1 round. An ancient dragon's aura extends to 10 feet. For great wyrm copper dragons, those opponents that fail their saves are slowed for 1d4 rounds. The DC of this save is equal to the dragon's breath weapon. A copper dragon can suppress or activate this aura at will as a free action.",
        preText: "DC 26"
      },
      "mass laughter": {
        type: "Sp",
        text: "An ancient copper dragon can tell a fantastic joke once per day as a standard action. All creatures within 10 feet per age category must make a Will save or laugh for 1 round per age category, as if affected by hideous laughter. The save DC is Charisma-based. This is equal to a 6th-level spell. Slow Aura (Su) An old or older copper dragon is surrounded by an aura of slowness. All creatures within 5 feet of the dragon must make a Will save or be affected as per slow for 1 round. An ancient dragon's aura extends to 10 feet. For great wyrm copper dragons, those opponents that fail their saves are slowed for 1d4 rounds. The DC of this save is equal to the dragon's breath weapon. A copper dragon can suppress or activate this aura at will as a free action.",
        preText: "DC 23"
      },
      "slow breath": {
        type: "Su",
        text: "Instead of a line of acid, a copper dragon can breathe a cone of slowing gas. Those in the cone must make a Fortitude save or be slowed (as per the spell slow) for 1d6 rounds plus 1 round per age category of the dragon."
      },
      "tail sweep": {
        universalMonsterAbility: "Tail Sweep",
        damage: "2d6+19",
        saveDC: 10
      },
      "climb stone": {
        type: "Ex",
        text: "A copper dragon can climb on stone surfaces as though using the spider climb spell. Deadly Joke (Sp) Once per day, as a standard action, a great wyrm copper dragon can tell a joke that kills. This affects one target, and functions as power word kill. This is a language-dependent sonic effect. Mass Laughter (Sp) An ancient copper dragon can tell a fantastic joke once per day as a standard action. All creatures within 10 feet per age category must make a Will save or laugh for 1 round per age category, as if affected by hideous laughter. The save DC is Charisma-based. This is equal to a 6th-level spell. Slow Aura (Su) An old or older copper dragon is surrounded by an aura of slowness. All creatures within 5 feet of the dragon must make a Will save or be affected as per slow for 1 round. An ancient dragon's aura extends to 10 feet. For great wyrm copper dragons, those opponents that fail their saves are slowed for 1d4 rounds. The DC of this save is equal to the dragon's breath weapon. A copper dragon can suppress or activate this aura at will as a free action."
      },
      "trap master": {
        type: "Ex",
        text: "A juvenile or older copper dragon receives a +1 bonus per age category on Craft (traps) and Perception checks made to locate a trap. Upon becoming a mature adult, he can also use Disable Device to disarm magic traps as if he had the rogue's Trapfinding class feature."
      },
      "uncanny dodge": {
        universalMonsterAbility: "Uncanny Dodge"
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "360 ft."
      },
      slow: {
        type: "Ex",
        preText: "10 ft., DC 31, 1d4 rounds"
      }
    }
  },

  "Wyrmling Gold Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "fire"
    ],
    alignments: [
      "Lawful Good"
    ],
    size: "Small",
    hd: 8,
    hdVal: 12,
    cr: 7,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 60,
      maneuverability: "Average",
      fly: 150,
      swim: 60
    },
    abilities: {
      str: 17,
      dex: 14,
      con: 15,
      int: 14,
      wis: 15,
      cha: 14
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to sleep"
    ],
    defense: {
      naturalArmor: 7
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "warm plains",
    visualDescription: "Golden scales cover the body of this majestic dragon, and a regal crest of horns arches backward above wise and piercing eyes.",
    description: "Gold dragons are the epitome of virtue. Other metallic dragons revere their gold cousins as the agents of divine forces and the paragons of dragonkind, and often seek them for advice or aid.",
    organization: "solitary",
    languages: "Common, Draconic, Elven",
    spellLikeAbilities: [],
    skills: {
      Diplomacy: {
        ranks: 8
      },
      Fly: {
        ranks: 8
      },
      Heal: {
        ranks: 8
      },
      "Knowledge (local)": {
        ranks: 8
      },
      Perception: {
        ranks: 8
      },
      "Sense Motive": {
        ranks: 8
      },
      Spellcraft: {
        ranks: 8
      },
      Swim: {
        ranks: 3,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "20-ft. cone",
        damage: "2d10 fire",
        saveDC: 10
      },
      "weakening breath": {
        type: "Su",
        text: "Instead of a cone of fire, a gold dragon can breathe a cone of weakening gas. Creatures within the cone must succeed on a Fortitude save or take 1 point of Strength damage per age category (Will save half)."
      }
    }
  },

  "Very Young Gold Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "fire"
    ],
    alignments: [
      "Lawful Good"
    ],
    size: "Medium",
    hd: 10,
    hdVal: 12,
    cr: 9,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 60,
      maneuverability: "Average",
      fly: 150,
      swim: 60
    },
    abilities: {
      str: 21,
      dex: 12,
      con: 17,
      int: 16,
      wis: 17,
      cha: 16
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Claw",
        choiceSource: "Improved Critical"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to sleep"
    ],
    defense: {
      naturalArmor: 10
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "warm plains",
    visualDescription: "Golden scales cover the body of this majestic dragon, and a regal crest of horns arches backward above wise and piercing eyes.",
    description: "Gold dragons are the epitome of virtue. Other metallic dragons revere their gold cousins as the agents of divine forces and the paragons of dragonkind, and often seek them for advice or aid.",
    organization: "solitary",
    languages: "Common, Draconic, Elven, Halfling",
    spellLikeAbilities: [
      {
        name: "detect evil",
        casterLevel: 10,
        timesPerDay: -1
      }
    ],
    skills: {
      Diplomacy: {
        ranks: 10
      },
      Fly: {
        ranks: 10
      },
      Heal: {
        ranks: 10
      },
      "Knowledge (local)": {
        ranks: 10
      },
      "Knowledge (religion)": {
        ranks: 10
      },
      Perception: {
        ranks: 10
      },
      "Sense Motive": {
        ranks: 10
      },
      Spellcraft: {
        ranks: 10
      },
      Swim: {
        ranks: 2,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "30-ft. cone",
        damage: "4d10 fire",
        saveDC: 10
      },
      "weakening breath": {
        type: "Su",
        text: "Instead of a cone of fire, a gold dragon can breathe a cone of weakening gas. Creatures within the cone must succeed on a Fortitude save or take 1 point of Strength damage per age category (Will save half)."
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "any animal or humanoid; polymorph",
        type: ", any animal or humanoid; polymorph"
      }
    }
  },

  "Juvenile Gold Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "fire"
    ],
    alignments: [
      "Lawful Good"
    ],
    size: "Large",
    hd: 14,
    hdVal: 12,
    cr: 12,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 60,
      maneuverability: "Poor",
      fly: 200,
      swim: 60
    },
    abilities: {
      str: 27,
      dex: 12,
      con: 21,
      int: 18,
      wis: 19,
      cha: 18
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
        name: "Improved Critical",
        type: "Combat",
        value: "Claw",
        choiceSource: "Improved Critical"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to sleep"
    ],
    defense: {
      naturalArmor: 16
    },
    space: "10 ft.",
    reach: "5 ft. (10 ft. with bite)",
    environment: "warm plains",
    visualDescription: "Golden scales cover the body of this majestic dragon, and a regal crest of horns arches backward above wise and piercing eyes.",
    description: "Gold dragons are the epitome of virtue. Other metallic dragons revere their gold cousins as the agents of divine forces and the paragons of dragonkind, and often seek them for advice or aid.",
    organization: "solitary",
    languages: "Celestial, Common, Draconic, Elven, Halfling",
    spellLikeAbilities: [
      {
        name: "bless",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "detect evil",
        casterLevel: 14,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 3,
      spells: [
        {
          name: "",
          limitations: "6/day",
          level: 1
        },
        {
          name: "mage armor",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "light",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "mending",
          level: 0
        },
        {
          name: "stabilize",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Diplomacy: {
        ranks: 14
      },
      Fly: {
        ranks: 14
      },
      Heal: {
        ranks: 14
      },
      "Knowledge (arcana)": {
        ranks: 14
      },
      "Knowledge (local)": {
        ranks: 14
      },
      "Knowledge (religion)": {
        ranks: 14
      },
      Perception: {
        ranks: 14
      },
      "Sense Motive": {
        ranks: 14
      },
      Spellcraft: {
        ranks: 14
      },
      Swim: {
        ranks: 6,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "40-ft. cone",
        damage: "8d10 fire",
        saveDC: 10
      },
      "weakening breath": {
        type: "Su",
        text: "Instead of a cone of fire, a gold dragon can breathe a cone of weakening gas. Creatures within the cone must succeed on a Fortitude save or take 1 point of Strength damage per age category (Will save half)."
      },
      "change shape": {
        type: "Su",
        text: "A very young or older gold dragon can assume any animal or humanoid form three times per day as if using polymorph."
      },
      "detect gems": {
        type: "Sp",
        text: "A young or older gold dragon can detect gems three times per day. This functions as locate object, but can only be used to locate gemstones."
      },
      "fast flight": {
        type: "Ex",
        text: "A young or older gold dragon is treated as one size category larger when determining his fly speed."
      }
    }
  },

  "Young Adult Gold Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "fire"
    ],
    alignments: [
      "Lawful Good"
    ],
    size: "Huge",
    hd: 16,
    hdVal: 12,
    cr: 14,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 60,
      maneuverability: "Poor",
      fly: 250,
      swim: 60
    },
    abilities: {
      str: 29,
      dex: 10,
      con: 21,
      int: 18,
      wis: 19,
      cha: 18
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
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Claw",
        choiceSource: "Improved Critical"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to sleep"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "magic"
      },
      SR: {
        value: 25
      },
      naturalArmor: 19
    },
    space: "15 ft.",
    reach: "10 ft. (15 ft. with bite)",
    environment: "warm plains",
    visualDescription: "Golden scales cover the body of this majestic dragon, and a regal crest of horns arches backward above wise and piercing eyes.",
    description: "Gold dragons are the epitome of virtue. Other metallic dragons revere their gold cousins as the agents of divine forces and the paragons of dragonkind, and often seek them for advice or aid.",
    organization: "solitary",
    languages: "Celestial, Common, Draconic, Elven, Halfling",
    spellLikeAbilities: [
      {
        name: "bless",
        casterLevel: 16,
        timesPerDay: -1
      },
      {
        name: "detect evil",
        casterLevel: 16,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 5,
      spells: [
        {
          name: "",
          limitations: "5/day",
          level: 2
        },
        {
          name: "resist energy ",
          level: 2
        },
        {
          name: "",
          limitations: "7/day",
          level: 1
        },
        {
          name: "mage armor",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "shield of faith",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "light",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "mending",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        },
        {
          name: "stabilize",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Diplomacy: {
        ranks: 16
      },
      Fly: {
        ranks: 16
      },
      Heal: {
        ranks: 16
      },
      "Knowledge (arcana)": {
        ranks: 16
      },
      "Knowledge (local)": {
        ranks: 16
      },
      "Knowledge (religion)": {
        ranks: 16
      },
      Perception: {
        ranks: 16
      },
      "Sense Motive": {
        ranks: 16
      },
      Spellcraft: {
        ranks: 16
      },
      Swim: {
        ranks: 8,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "50-ft. cone",
        damage: "10d10 fire",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "2d18+13",
        saveDC: 10
      },
      "weakening breath": {
        type: "Su",
        text: "Instead of a cone of fire, a gold dragon can breathe a cone of weakening gas. Creatures within the cone must succeed on a Fortitude save or take 1 point of Strength damage per age category (Will save half)."
      },
      "change shape": {
        type: "Su",
        text: "A very young or older gold dragon can assume any animal or humanoid form three times per day as if using polymorph."
      },
      "detect gems": {
        type: "Sp",
        text: "A young or older gold dragon can detect gems three times per day. This functions as locate object, but can only be used to locate gemstones."
      },
      "fast flight": {
        type: "Ex",
        text: "A young or older gold dragon is treated as one size category larger when determining his fly speed."
      }
    }
  },

  "Mature Adult Gold Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "fire"
    ],
    alignments: [
      "Lawful Good"
    ],
    size: "Huge",
    hd: 20,
    hdVal: 12,
    cr: 16,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 60,
      maneuverability: "Poor",
      fly: 250,
      swim: 60
    },
    abilities: {
      str: 33,
      dex: 10,
      con: 23,
      int: 20,
      wis: 21,
      cha: 20
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
        name: "Extend Spell",
        type: "Metamagic"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Claw",
        choiceSource: "Improved Critical"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Stunning Critical",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to sleep"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "magic"
      },
      SR: {
        value: 27
      },
      naturalArmor: 25
    },
    space: "15 ft.",
    reach: "10 ft. (15 ft. with bite)",
    environment: "warm plains",
    visualDescription: "Golden scales cover the body of this majestic dragon, and a regal crest of horns arches backward above wise and piercing eyes.",
    description: "Gold dragons are the epitome of virtue. Other metallic dragons revere their gold cousins as the agents of divine forces and the paragons of dragonkind, and often seek them for advice or aid.",
    organization: "solitary",
    languages: "Celestial, Common, Draconic, Elven, Halfling, 1 more",
    spellLikeAbilities: [
      {
        name: "bless",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "daylight",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "detect evil",
        casterLevel: 20,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 9,
      spells: [
        {
          name: "",
          limitations: "5/day",
          level: 4
        },
        {
          name: "restoration ",
          level: 4
        },
        {
          name: "",
          limitations: "7/day",
          level: 3
        },
        {
          name: "invisibility purge",
          level: 3
        },
        {
          name: "prayer ",
          level: 3
        },
        {
          name: "",
          limitations: "7/day",
          level: 2
        },
        {
          name: "cure moderate wounds",
          level: 2
        },
        {
          name: "restoration, lesser",
          level: 2
        },
        {
          name: "resist energy ",
          level: 2
        },
        {
          name: "",
          limitations: "8/day",
          level: 1
        },
        {
          name: "divine favor",
          level: 1
        },
        {
          name: "mage armor",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "shield of faith",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "light",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "mending",
          level: 0
        },
        {
          name: "open/close",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        },
        {
          name: "stabilize",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Diplomacy: {
        ranks: 20
      },
      Fly: {
        ranks: 20
      },
      Heal: {
        ranks: 20
      },
      "Knowledge (arcana)": {
        ranks: 20
      },
      "Knowledge (local)": {
        ranks: 20
      },
      "Knowledge (nobility)": {
        ranks: 20
      },
      "Knowledge (religion)": {
        ranks: 20
      },
      Perception: {
        ranks: 20
      },
      "Sense Motive": {
        ranks: 20
      },
      Spellcraft: {
        ranks: 20
      },
      Swim: {
        ranks: 12,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "50-ft. cone",
        damage: "14d10 fire",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "2d8+16",
        saveDC: 10
      },
      "weakening breath": {
        type: "Su",
        text: "Instead of a cone of fire, a gold dragon can breathe a cone of weakening gas. Creatures within the cone must succeed on a Fortitude save or take 1 point of Strength damage per age category (Will save half)."
      },
      "change shape": {
        type: "Su",
        text: "A very young or older gold dragon can assume any animal or humanoid form three times per day as if using polymorph."
      },
      "detect gems": {
        type: "Sp",
        text: "A young or older gold dragon can detect gems three times per day. This functions as locate object, but can only be used to locate gemstones."
      },
      "fast flight": {
        type: "Ex",
        text: "A young or older gold dragon is treated as one size category larger when determining his fly speed."
      },
      luck: {
        type: "Sp",
        text: "Once per day an adult or older gold dragon can touch a gem, usually one embedded in the dragon's hide, and enspell it to bring good luck. As long as the dragon carries the gem, it and every good creature within a given radius of it (10 ft. per age category) receives a +1 luck bonus on all saving throws. If the dragon gives an enspelled gem to another creature, only that bearer gets the bonus. The effect lasts 1d3 hours plus 3 hours per age category of the dragon. This ability is the equivalent of a 2nd-level spell."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "210 ft."
      }
    }
  },

  "Old Gold Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "fire"
    ],
    alignments: [
      "Lawful Good"
    ],
    size: "Gargantuan",
    hd: 22,
    hdVal: 12,
    cr: 18,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 60,
      maneuverability: "Clumsy",
      fly: 250,
      swim: 60
    },
    abilities: {
      str: 35,
      dex: 8,
      con: 25,
      int: 22,
      wis: 23,
      cha: 22
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
        name: "Extend Spell",
        type: "Metamagic"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Claw",
        choiceSource: "Improved Critical"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Quicken Spell",
        type: "Metamagic"
      },
      {
        name: "Stunning Critical",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to sleep"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "magic"
      },
      SR: {
        value: 29
      },
      naturalArmor: 28
    },
    space: "20 ft.",
    reach: "15 ft. (20 ft. with bite)",
    environment: "warm plains",
    visualDescription: "Golden scales cover the body of this majestic dragon, and a regal crest of horns arches backward above wise and piercing eyes.",
    description: "Gold dragons are the epitome of virtue. Other metallic dragons revere their gold cousins as the agents of divine forces and the paragons of dragonkind, and often seek them for advice or aid.",
    organization: "solitary",
    languages: "Celestial, Common, Draconic, Elven, Halfling, 2 more",
    spellLikeAbilities: [
      {
        name: "bless",
        casterLevel: 22,
        timesPerDay: -1
      },
      {
        name: "daylight",
        casterLevel: 22,
        timesPerDay: -1
      },
      {
        name: "detect evil",
        casterLevel: 22,
        timesPerDay: -1
      },
      {
        name: "geas/quest",
        casterLevel: 22,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 11,
      spells: [
        {
          name: "(5/day)-dispel evil",
          limitations: "5/day",
          level: 5
        },
        {
          name: "true seeing ",
          level: 5
        },
        {
          name: "",
          limitations: "7/day",
          level: 4
        },
        {
          name: "restoration",
          level: 4
        },
        {
          name: "stoneskin ",
          level: 4
        },
        {
          name: "",
          limitations: "7/day",
          level: 3
        },
        {
          name: "haste",
          level: 3
        },
        {
          name: "invisibility purge",
          level: 3
        },
        {
          name: "prayer ",
          level: 3
        },
        {
          name: "",
          limitations: "8/day",
          level: 2
        },
        {
          name: "cure moderate wounds",
          level: 2
        },
        {
          name: "restoration, lesser",
          level: 2
        },
        {
          name: "resist energy",
          level: 2
        },
        {
          name: "silence ",
          level: 2
        },
        {
          name: "",
          limitations: "8/day",
          level: 1
        },
        {
          name: "divine favor",
          level: 1
        },
        {
          name: "mage armor",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "shield of faith",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "detect poison",
          level: 0
        },
        {
          name: "light",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "mending",
          level: 0
        },
        {
          name: "open/close",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        },
        {
          name: "stabilize",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Diplomacy: {
        ranks: 22
      },
      Fly: {
        ranks: 24
      },
      Heal: {
        ranks: 22
      },
      "Knowledge (arcana)": {
        ranks: 22
      },
      "Knowledge (history)": {
        ranks: 22
      },
      "Knowledge (local)": {
        ranks: 22
      },
      "Knowledge (nobility)": {
        ranks: 22
      },
      "Knowledge (religion)": {
        ranks: 22
      },
      Perception: {
        ranks: 22
      },
      "Sense Motive": {
        ranks: 22
      },
      Spellcraft: {
        ranks: 22
      },
      Swim: {
        ranks: 14,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      fire: {
        name: "fire aura",
        preText: "5 ft., 1d6 fire"
      },
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "60-ft. cone",
        damage: "16d10 fire",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "4d6+18",
        saveDC: 10
      },
      "tail sweep": {
        universalMonsterAbility: "Tail Sweep",
        damage: "2d6+18",
        saveDC: 10
      },
      "weakening breath": {
        type: "Su",
        text: "Instead of a cone of fire, a gold dragon can breathe a cone of weakening gas. Creatures within the cone must succeed on a Fortitude save or take 1 point of Strength damage per age category (Will save half)."
      },
      "change shape": {
        type: "Su",
        text: "A very young or older gold dragon can assume any animal or humanoid form three times per day as if using polymorph."
      },
      "detect gems": {
        type: "Sp",
        text: "A young or older gold dragon can detect gems three times per day. This functions as locate object, but can only be used to locate gemstones."
      },
      "fast flight": {
        type: "Ex",
        text: "A young or older gold dragon is treated as one size category larger when determining his fly speed. Fire Aura (Su) An old or older gold dragon is surrounded by an aura of fire. All creatures within 5 feet of the dragon take 1d6 points of fire damage at the beginning of the dragon's turn. An ancient gold dragon's aura extends to 10 feet. A great wyrm's damage increases to 2d6. The dragon can activate or suppress this aura as a free action."
      },
      luck: {
        type: "Sp",
        text: "Once per day an adult or older gold dragon can touch a gem, usually one embedded in the dragon's hide, and enspell it to bring good luck. As long as the dragon carries the gem, it and every good creature within a given radius of it (10 ft. per age category) receives a +1 luck bonus on all saving throws. If the dragon gives an enspelled gem to another creature, only that bearer gets the bonus. The effect lasts 1d3 hours plus 3 hours per age category of the dragon. This ability is the equivalent of a 2nd-level spell."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "240 ft."
      }
    }
  },

  "Cairn Wight": {
    source: "d20pfsrd",
    creatureType: "undead",
    subTypes: [],
    alignments: [
      "Lawful Evil"
    ],
    size: "Medium",
    hd: 4,
    hdVal: 8,
    cr: 4,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 16,
      dex: 16,
      con: "-",
      int: 15,
      wis: 17,
      cha: 19
    },
    feats: [
      {
        name: "Blind-Fight",
        type: "Combat"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Perception",
        choiceSource: "Skill Focus"
      }
    ],
    attacks: [
      {
        weapon: "Longsword",
        name: "Longsword",
        specialAbility: "energy drain",
        damage: "1d8"
      },
      {
        weapon: "Slam",
        name: "Slam",
        specialAbility: "energy drain",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 4
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "The flesh of this walking corpse is rotting and putrid, its body skeletal in places and its eye sockets glowing with red light.",
    description: "Some societies deliberately create these specialized wights to serve as guardians for barrows or other burial sites. A cairn wight is an advanced wight that fights with a weapon, typically a sword, that channels its energy drain attack and affects creatures damaged by the weapon as if they had been struck by the wight's slam attack.",
    organization: "solitary, pair, gang (3-6), or pack (7-12)",
    languages: "Common",
    gear: "Longsword, Studded Leather Armor",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 4
      },
      Intimidate: {
        ranks: 4
      },
      "Knowledge (religion)": {
        ranks: 4
      },
      Perception: {
        ranks: 4
      },
      "Sense Motive": {
        ranks: 4
      },
      Stealth: {
        ranks: 3,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      "create spawn": {
        type: "Su",
        text: "ny humanoid creature that is slain by a cairn wight becomes a ordinary wight itself in only 1d4 rounds. Spawn are under the command of the cairn wight that created them and remain enslaved until its death, at which point they become full-fledged and free-willed cairn wights. They do not possess any of the abilities they had in life. Resurrection Vulnerability (Su)A raise dead or similar spell cast on a cairn wight destroys it (Will negates). Using the spell in this way does not require a material component."
      },
      "energy drain": {
        universalMonsterAbility: "Energy Drain",
        saveDC: 10,
        levels: 1
      }
    },
    resistances: [
      "resurrection vulnerability"
    ]
  },

  "Old Bronze Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "water"
    ],
    alignments: [
      "Lawful Good"
    ],
    size: "Gargantuan",
    hd: 20,
    hdVal: 12,
    cr: 16,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 40,
      maneuverability: "Clumsy",
      fly: 250,
      swim: 60
    },
    abilities: {
      str: 31,
      dex: 8,
      con: 23,
      int: 22,
      wis: 23,
      cha: 22
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Cleave",
        type: "Combat"
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
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to electricity, sleep"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "magic"
      },
      SR: {
        value: 27
      },
      naturalArmor: 26
    },
    space: "20 ft.",
    reach: "15 ft. (20 ft. with bite)",
    environment: "temperate coastlines",
    visualDescription: "This sleek dragon is covered in dull metallic scales that range in color from shining bronze to mottled blue.",
    description: "Bronze dragons have been known to ally with travelers and adventurers if the cause and reward is right and just.",
    organization: "solitary",
    languages: "Aquan, Common, Draconic, Elven, Gnome, 2 more",
    spellLikeAbilities: [
      {
        name: "create food and water",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "detect thoughts",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "fog cloud",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "speak with animals",
        casterLevel: 20,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 11,
      spells: [
        {
          name: "",
          limitations: "5/day",
          level: 5
        },
        {
          name: "teleport ",
          level: 5
        },
        {
          name: "",
          limitations: "7/day",
          level: 4
        },
        {
          name: "ice storm",
          level: 4
        },
        {
          name: "solid fog ",
          level: 4
        },
        {
          name: "",
          limitations: "7/day",
          level: 3
        },
        {
          name: "heroism",
          level: 3
        },
        {
          name: "slow",
          level: 3
        },
        {
          name: "suggestion ",
          level: 3
        },
        {
          name: "",
          limitations: "8/day",
          level: 2
        },
        {
          name: "gust of wind",
          level: 2
        },
        {
          name: "invisibility",
          level: 2
        },
        {
          name: "mirror image",
          level: 2
        },
        {
          name: "web ",
          level: 2
        },
        {
          name: "",
          limitations: "8/day",
          level: 1
        },
        {
          name: "mage armor",
          level: 1
        },
        {
          name: "obscuring mist",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "true strike",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "detect poison",
          level: 0
        },
        {
          name: "light",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "mending",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        },
        {
          name: "resistance",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Diplomacy: {
        ranks: 20
      },
      Fly: {
        ranks: 30
      },
      "Handle Animal": {
        ranks: 20
      },
      Intimidate: {
        ranks: 20
      },
      "Knowledge (arcana)": {
        ranks: 20
      },
      "Knowledge (geography)": {
        ranks: 20
      },
      "Knowledge (history)": {
        ranks: 20
      },
      Perception: {
        ranks: 20
      },
      "Sense Motive": {
        ranks: 20
      },
      Spellcraft: {
        ranks: 20
      },
      Stealth: {
        ranks: 20
      },
      Swim: {
        ranks: 4,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "120-ft. line",
        damage: "16d6 electricity",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "4d6+15",
        saveDC: 10
      },
      "repulsion breath": {
        type: "Su",
        text: "Instead of a line of electricity, a bronze dragon can breathe a cone of repulsion gas. Targets must make a Will save or be compelled to do nothing but move away from the dragon for 1d6 rounds plus 1 round per age category. This is a mind-affecting compulsion effect."
      },
      "tail sweep": {
        universalMonsterAbility: "Tail Sweep",
        damage: "2d6+15",
        saveDC: 10
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "polymorph",
        type: ", polymorph"
      },
      "water breathing": {
        type: "Ex",
        text: "A bronze dragon breathes water and can use its breath weapon, spells, and abilities underwater. Wave Mastery (Su)For up to 10 minutes per age category per day, a juvenile bronze dragon, along with creatures or vessels within 50 feet, can move at twice its normal speed in water."
      },
      "wave mastery": {
        type: "Su",
        text: "or up to 10 minutes per age category per day, a juvenile bronze dragon, along with creatures or vessels within 50 feet, can move at twice its normal speed in water.",
        preText: "80 min"
      },
      "electricity aura": {
        type: "Su",
        text: "An old or older bronze dragon has an aura of electricity. All creatures within 5 feet take 1d6 points of electricity damage at the start of the dragon's turn. An ancient dragon's aura is 10 feet. A great wyrm's damage increases to 2d6. A bronze dragon can suppress this aura at will.",
        preText: "5 ft.,1d6 electricity"
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "240 ft."
      }
    }
  },

  Lacedon: {
    source: "d20pfsrd",
    creatureType: "undead",
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 2,
    hdVal: 8,
    cr: 1,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30,
      swim: 30
    },
    abilities: {
      str: 13,
      dex: 15,
      con: "-",
      int: 13,
      wis: 14,
      cha: 14
    },
    feats: [
      {
        name: "Weapon Finesse",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "disease, paralysis",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        specialAbility: "paralysis",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any land",
    visualDescription: "This humanoid creature has long, sharp teeth, and its pallid flesh is stretched tightly over its starved frame.",
    description: "A humanoid who dies of ghoul fever rises as a ghoul at the next midnight. A humanoid who becomes a ghoul in this way retains none of the abilities it possessed in life. It is not under the control of any other ghouls, but it hungers for the flesh of the living and behaves like a normal ghoul in all respects. A humanoid of 4 Hit Dice or more rises as a ghast.",
    organization: "solitary, gang (2-4), or wing (7-12)",
    languages: "Common",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 2
      },
      Climb: {
        ranks: 2
      },
      Perception: {
        ranks: 2
      },
      Stealth: {
        ranks: 2
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      paralysis: {
        universalMonsterAbility: "Paralysis",
        duration: "1d4+1 rounds",
        extraText: "elves are immune to this effect",
        saveDC: null
      },
      "channel resistance": {
        universalMonsterAbility: "Channel Resistance",
        bonus: 2
      },
      disease: {
        universalMonsterAbility: "Disease",
        name: "Ghoul Fever",
        type: "Su",
        text: "Ghoul Fever: Bite-injury; save Fort DC 13; onset 1 day; frequency 1 day; effect 1d3 Con and 1d3 Dex damage; cure 2 consecutive saves. The save DC is Charisma-based."
      }
    }
  },

  "Gug Savant": {
    source: "d20pfsrd",
    creatureType: "aberration",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Large",
    hd: 15,
    hdVal: 8,
    cr: 11,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 40,
      climb: 20
    },
    abilities: {
      str: 25,
      dex: 12,
      con: 18,
      int: 11,
      wis: 16,
      cha: 18
    },
    feats: [
      {
        name: "Awesome Blow",
        type: "Combat"
      },
      {
        name: "Blind-Fight",
        type: "Combat"
      },
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Greater Bull Rush",
        type: "Combat"
      },
      {
        name: "Improved Bull Rush",
        type: "Combat"
      },
      {
        name: "Lunge",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Perception",
        choiceSource: "Skill Focus"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "4 Claws",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to disease, poison"
    ],
    defense: {
      naturalArmor: 14
    },
    space: "10 ft.",
    reach: "15 ft.",
    environment: "any underground",
    visualDescription: "This towering menace has a horrible, vertically aligned mouth and arms that split at the elbows into twin clawed hands. The blessings of its evil god have made this specimen more twisted than its lesser bretheren.",
    description: "Some bloodthirsty gugs gain awful powers as gifts from their alien patrons. These monsters are known as savants. Some become actual clerics or oracles of their mad gods-strange powers of darkness, insanity, and blood.",
    organization: "solitary, pair, or camp (1 plus 3-10 gugs)",
    languages: "Undercommon",
    spellLikeAbilities: [
      {
        name: "invisibility",
        casterLevel: 10,
        timesPerDay: 1
      },
      {
        name: "spike stones",
        casterLevel: 10,
        timesPerDay: 1
      },
      {
        name: "transmute rock to mud",
        casterLevel: 10,
        timesPerDay: 1
      },
      {
        name: "unholy blight",
        casterLevel: 10,
        timesPerDay: 1
      }
    ],
    skills: {
      Climb: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      "Escape Artist": {
        ranks: 5,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      "Knowledge (dungeoneering)": {
        ranks: 13
      },
      Perception: {
        ranks: 15
      },
      Stealth: {
        ranks: 15
      },
      Survival: {
        ranks: 15
      }
    },
    special: {
      rend: {
        universalMonsterAbility: "Rend",
        type: "Ex",
        weaponName: 0
      },
      compression: {
        universalMonsterAbility: "Compression"
      }
    }
  },

  "Dread Wraith": {
    source: "d20pfsrd",
    creatureType: "undead",
    subTypes: [
      "incorporeal"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Large",
    hd: 16,
    hdVal: 8,
    cr: 13,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Lifesense 60 ft."
    ],
    speed: {
      maneuverability: "Good",
      fly: 60
    },
    abilities: {
      str: "-",
      dex: 28,
      con: "-",
      int: 14,
      wis: 20,
      cha: 25
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
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Natural Attack",
        type: "Monster",
        value: "Incorporeal touch",
        choiceSource: "Improved Natural Attack"
      },
      {
        name: "Mobility",
        type: "Combat"
      },
      {
        name: "Spring Attack",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Incorporeal touch",
        name: "Incorporeal touch",
        damage: "3d6",
        bonuses: [
          {
            source: "inherent",
            value: "1d8",
            appliesTo: "damageType",
            damageType: "con drain [fort dc 23]"
          }
        ]
      }
    ],
    defense: {},
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any",
    visualDescription: "This ghostly creature is little more than a dark shape with two flickering pinpoints of light where its eyes should be.",
    description: "Dread wraiths are wraiths that existed long enough and fed on enough life force to undergo an unholy transformation, increasing in size and strength.",
    organization: "solitary, pair, gang (3-6), or pack (7-12)",
    languages: "Common, Infernal, Skald",
    spellLikeAbilities: [],
    skills: {
      Diplomacy: {
        ranks: 11
      },
      Fly: {
        ranks: 10
      },
      Intimidate: {
        ranks: 16
      },
      "Knowledge (planes)": {
        ranks: 11
      },
      Perception: {
        ranks: 16
      },
      "Sense Motive": {
        ranks: 16
      },
      Stealth: {
        ranks: 16
      }
    },
    special: {
      "create spawn": {
        type: "Ex"
      },
      "channel resistance": {
        universalMonsterAbility: "Channel Resistance",
        bonus: 4
      },
      "unnatural aura": {
        universalMonsterAbility: "Unnatural Aura",
        type: "Ex",
        range: "30 ft."
      }
    }
  },

  "Fast Zombie": {
    source: "d20pfsrd",
    creatureType: "undead",
    subTypes: [],
    alignments: [
      "Neutral Evil"
    ],
    size: "Medium",
    hd: 2,
    hdVal: 8,
    cr: "1/2",
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 17,
      dex: 14,
      con: "-",
      int: "-",
      wis: 10,
      cha: 10
    },
    feats: [
      {
        name: "Toughness",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Slam",
        name: "2 Slams",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "This walking corpse wears only a few soiled rags, its flesh rotting off its bones as it stumbles forward with unnatural quickness, arms outstretched.",
    description: "Unlike the standard, plodding zombie, a fast zombie moves with a supernatural quickness.",
    organization: "any",
    spellLikeAbilities: [],
    skills: {},
    special: {
      "quick strikes": {
        type: "Ex",
        text: "Whenever a fast zombie takes a full-attack action, it can make one additional slam attack at its highest base attack bonus."
      }
    }
  },

  "Great Wyrm Umbral Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "extraplanar"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Colossal",
    hd: 29,
    hdVal: 12,
    cr: 22,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 40,
      maneuverability: "Clumsy",
      fly: 250
    },
    abilities: {
      str: 39,
      dex: 6,
      con: 27,
      int: 26,
      wis: 27,
      cha: 26
    },
    feats: [
      {
        name: "Bleeding Critical",
        type: "Combat"
      },
      {
        name: "Blinding Critical",
        type: "Combat"
      },
      {
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Greater Vital Strike",
        type: "Combat"
      },
      {
        name: "Hover",
        type: "Monster"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Claw",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Stealth",
        choiceSource: "Skill Focus"
      },
      {
        name: "Snatch",
        type: "Monster"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "energy drain",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        specialAbility: "energy drain",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to cold, death effects, negative energy, sleep"
    ],
    defense: {
      DR: {
        value: 20,
        damageType: "magic"
      },
      SR: {
        value: 33
      },
      naturalArmor: 39
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "This sleek, dark dragon moves with a disturbing, serpentine grace, its eyes glowing as if lit from within by crimson embers.",
    description: "Cruel and sadistic, umbral dragons prefer the taste of undead flesh or ghostly ectoplasm, yet never turn down opportunities to consume living flesh.",
    organization: "solitary",
    languages: "Abyssal, Common, Draconic, Undercommon, 5 more",
    spellLikeAbilities: [
      {
        name: "darkness",
        casterLevel: 29,
        timesPerDay: -1
      },
      {
        name: "project image",
        casterLevel: 29,
        timesPerDay: -1
      },
      {
        name: "shadow walk",
        casterLevel: 29,
        timesPerDay: -1
      },
      {
        name: "vampiric touch",
        casterLevel: 29,
        timesPerDay: -1
      },
      {
        name: "finger of death",
        casterLevel: 29,
        timesPerDay: 3
      },
      {
        name: "shades",
        casterLevel: 29,
        timesPerDay: 3
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 19,
      spells: [
        {
          name: "(4/day)-mass suffocation",
          limitations: "4/day",
          level: 9
        },
        {
          name: "wish ",
          level: 9
        },
        {
          name: "(7/day)-horrid wilting",
          limitations: "7/day",
          level: 8
        },
        {
          name: "screen",
          level: 8
        },
        {
          name: "trap the soul",
          level: 8
        },
        {
          name: "(7/day)-destruction",
          limitations: "7/day",
          level: 7
        },
        {
          name: "limited wish",
          level: 7
        },
        {
          name: "waves of exhaustion ",
          level: 7
        },
        {
          name: "(7/day)-harm",
          limitations: "7/day",
          level: 6
        },
        {
          name: "mislead",
          level: 6
        },
        {
          name: "veil",
          level: 6
        },
        {
          name: "(7/day)-greater command",
          limitations: "7/day",
          level: 5
        },
        {
          name: "slay living",
          level: 5
        },
        {
          name: "teleport",
          level: 5
        },
        {
          name: "unhallow ",
          level: 5
        },
        {
          name: "",
          limitations: "7/day",
          level: 4
        },
        {
          name: "inflict critical wounds",
          level: 4
        },
        {
          name: "phantasmal killer",
          level: 4
        },
        {
          name: "unholy blight",
          level: 4
        },
        {
          name: "",
          limitations: "7/day",
          level: 3
        },
        {
          name: "haste",
          level: 3
        },
        {
          name: "inflict serious wounds",
          level: 3
        },
        {
          name: "lightning bolt",
          level: 3
        },
        {
          name: "",
          limitations: "7/day",
          level: 2
        },
        {
          name: "blur",
          level: 2
        },
        {
          name: "command undead",
          level: 2
        },
        {
          name: "invisibility",
          level: 2
        },
        {
          name: "web",
          level: 2
        },
        {
          name: "(7/day)-inflict light wounds",
          limitations: "7/day",
          level: 1
        },
        {
          name: "grease",
          level: 1
        },
        {
          name: "magic missile",
          level: 1
        },
        {
          name: "reduce person",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "bleed",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "detect poison",
          level: 0
        },
        {
          name: "disrupt undead",
          level: 0
        },
        {
          name: "ghost sound",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "ray of frost",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Appraise: {
        ranks: 29
      },
      Bluff: {
        ranks: 29
      },
      Diplomacy: {
        ranks: 29
      },
      Fly: {
        ranks: 37
      },
      "Knowledge (arcana)": {
        ranks: 29
      },
      "Knowledge (history)": {
        ranks: 29
      },
      "Knowledge (local)": {
        ranks: 29
      },
      "Knowledge (planes)": {
        ranks: 29
      },
      "Knowledge (religion)": {
        ranks: 29
      },
      Perception: {
        ranks: 29
      },
      "Sense Motive": {
        ranks: 29
      },
      Spellcraft: {
        ranks: 29
      },
      Stealth: {
        ranks: 29
      },
      Survival: {
        ranks: 29
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "70-ft. cone",
        damage: "24d8 neg. energy",
        saveDC: 10,
        text: "lthough it deals negative energy damage, an umbral dragon's breath weapon does not heal undead creatures."
      },
      "create shadows": {
        type: "Su",
        text: "ny creature slain by an ancient or older umbral dragon rises as a shadow (if 8 HD or less) or greater shadow (if above 8 HD) under the umbral dragon's control 1d4 rounds later."
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "4d8+21",
        saveDC: 10
      },
      "energy drain": {
        universalMonsterAbility: "Energy Drain",
        saveDC: 10,
        levels: 1,
        text: " great wyrm umbral dragon deals 1 negative level with each successful bite or claw attack (1 level, DC 32)."
      },
      "shadow breath": {
        type: "Su",
        text: "hree times per day, an adult or older umbral dragon can breathe a cone of shadows. Creatures who fail a Fortitude save are blinded for 1d4 rounds and take 1 point of Str drain per age category possessed by the dragon. A successful save negates the blindness and reduces Str drain to 1d4 points.",
        preText: "12 Str"
      },
      "tail sweep": {
        universalMonsterAbility: "Tail Sweep",
        damage: "2d8+19",
        saveDC: 10
      },
      "ghost bane": {
        type: "Su",
        text: " young or older umbral dragon's physical attacks deal damage to incorporeal creatures normally. Shadow Breath (Su)Three times per day, an adult or older umbral dragon can breathe a cone of shadows. Creatures who fail a Fortitude save are blinded for 1d4 rounds and take 1 point of Str drain per age category possessed by the dragon. A successful save negates the blindness and reduces Str drain to 1d4 points."
      },
      "umbral scion": {
        type: "Ex",
        text: "mbral dragons have negative energy affinity and are immune to energy drain and death effects."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "360 ft."
      }
    }
  },

  "Great Wyrm Gold Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "fire"
    ],
    alignments: [
      "Lawful Good"
    ],
    size: "Colossal",
    hd: 30,
    hdVal: 12,
    cr: 23,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 60,
      maneuverability: "Clumsy",
      fly: 300,
      swim: 60
    },
    abilities: {
      str: 43,
      dex: 6,
      con: 29,
      int: 26,
      wis: 27,
      cha: 26
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
        name: "Extend Spell",
        type: "Metamagic"
      },
      {
        name: "Hover",
        type: "Monster"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Claw",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Wing",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Tail",
        choiceSource: "Improved Critical"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Quicken Spell",
        type: "Metamagic"
      },
      {
        name: "Stunning Critical",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      },
      {
        name: "Wingover",
        type: "Monster"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to sleep"
    ],
    defense: {
      DR: {
        value: 20,
        damageType: "magic"
      },
      SR: {
        value: 34
      },
      naturalArmor: 40
    },
    space: "30 ft.",
    reach: "20 ft. (30 ft. with bite)",
    environment: "warm plains",
    visualDescription: "Golden scales cover the body of this majestic dragon, and a regal crest of horns arches backward above wise and piercing eyes.",
    description: "Gold dragons are the epitome of virtue. Other metallic dragons revere their gold cousins as the agents of divine forces and the paragons of dragonkind, and often seek them for advice or aid.",
    organization: "solitary",
    languages: "Celestial, Common, Draconic, Elven, Halfling, 4 more",
    spellLikeAbilities: [
      {
        name: "bless",
        casterLevel: 30,
        timesPerDay: -1
      },
      {
        name: "daylight",
        casterLevel: 30,
        timesPerDay: -1
      },
      {
        name: "detect evil",
        casterLevel: 30,
        timesPerDay: -1
      },
      {
        name: "foresight",
        casterLevel: 30,
        timesPerDay: -1
      },
      {
        name: "geas/quest",
        casterLevel: 30,
        timesPerDay: -1
      },
      {
        name: "sunburst",
        casterLevel: 30,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 19,
      spells: [
        {
          name: "",
          limitations: "4/day",
          level: 9
        },
        {
          name: "wish ",
          level: 9
        },
        {
          name: "(7/day)-euphoric tranquility",
          limitations: "7/day",
          level: 8
        },
        {
          name: "prying eyes, greater",
          level: 8
        },
        {
          name: "protection from spells ",
          level: 8
        },
        {
          name: "",
          limitations: "7/day",
          level: 7
        },
        {
          name: "resurrection",
          level: 7
        },
        {
          name: "vision ",
          level: 7
        },
        {
          name: "",
          limitations: "7/day",
          level: 6
        },
        {
          name: "dispel magic, greater",
          level: 6
        },
        {
          name: "heal ",
          level: 6
        },
        {
          name: "(7/day)-dispel evil",
          limitations: "7/day",
          level: 5
        },
        {
          name: "plane shift",
          level: 5
        },
        {
          name: "teleport",
          level: 5
        },
        {
          name: "true seeing ",
          level: 5
        },
        {
          name: "",
          limitations: "8/day",
          level: 4
        },
        {
          name: "restoration",
          level: 4
        },
        {
          name: "spell immunity",
          level: 4
        },
        {
          name: "stoneskin ",
          level: 4
        },
        {
          name: "",
          limitations: "8/day",
          level: 3
        },
        {
          name: "haste",
          level: 3
        },
        {
          name: "invisibility purge",
          level: 3
        },
        {
          name: "prayer ",
          level: 3
        },
        {
          name: "",
          limitations: "8/day",
          level: 2
        },
        {
          name: "cure moderate wounds",
          level: 2
        },
        {
          name: "restoration, lesser",
          level: 2
        },
        {
          name: "resist energy",
          level: 2
        },
        {
          name: "silence ",
          level: 2
        },
        {
          name: "",
          limitations: "8/day",
          level: 1
        },
        {
          name: "divine favor",
          level: 1
        },
        {
          name: "mage armor",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "shield of faith",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "detect poison",
          level: 0
        },
        {
          name: "light",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "mending",
          level: 0
        },
        {
          name: "open/close",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        },
        {
          name: "stabilize",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Diplomacy: {
        ranks: 30
      },
      Fly: {
        ranks: 46
      },
      Heal: {
        ranks: 30
      },
      "Knowledge (arcana)": {
        ranks: 30
      },
      "Knowledge (history)": {
        ranks: 30
      },
      "Knowledge (local)": {
        ranks: 30
      },
      "Knowledge (nobility)": {
        ranks: 30
      },
      "Knowledge (planes)": {
        ranks: 30
      },
      "Knowledge (religion)": {
        ranks: 30
      },
      Perception: {
        ranks: 30
      },
      "Sense Motive": {
        ranks: 30
      },
      Spellcraft: {
        ranks: 30
      },
      Swim: {
        ranks: 22,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      "Use Magic Device": {
        ranks: 30
      }
    },
    special: {
      fire: {
        name: "fire aura",
        preText: "10 ft., 2d6 fire"
      },
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "70-ft. cone",
        damage: "24d10 fire",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "4d8+24",
        saveDC: 10
      },
      "tail sweep": {
        universalMonsterAbility: "Tail Sweep",
        damage: "2d8+24",
        saveDC: 10
      },
      "weakening breath": {
        type: "Su",
        text: "nstead of a cone of fire, a gold dragon can breathe a cone of weakening gas. Creatures within the cone must succeed on a Fortitude save or take 1 point of Strength damage per age category (Will save half)."
      },
      "change shape": {
        type: "Su",
        text: " very young or older gold dragon can assume any animal or humanoid form three times per day as if using polymorph."
      },
      "detect gems": {
        type: "Sp",
        text: "A young or older gold dragon can detect gems three times per day. This functions as locate object, but can only be used to locate gemstones."
      },
      "divine aid": {
        type: "Sp",
        text: "nce a week, a great wyrm gold dragon can call upon celestial powers for aid. This functions as a miracle."
      },
      "fast flight": {
        type: "Ex",
        text: " young or older gold dragon is treated as one size category larger when determining his fly speed. Fire Aura (Su)An old or older gold dragon is surrounded by an aura of fire. All creatures within 5 feet of the dragon take 1d6 points of fire damage at the beginning of the dragon's turn. An ancient gold dragon's aura extends to 10 feet. A great wyrm's damage increases to 2d6. The dragon can activate or suppress this aura as a free action."
      },
      luck: {
        type: "Sp",
        text: "nce per day an adult or older gold dragon can touch a gem, usually one embedded in the dragon's hide, and enspell it to bring good luck. As long as the dragon carries the gem, it and every good creature within a given radius of it (10 ft. per age category) receives a +1 luck bonus on all saving throws. If the dragon gives an enspelled gem to another creature, only that bearer gets the bonus. The effect lasts 1d3 hours plus 3 hours per age category of the dragon. This ability is the equivalent of a 2nd-level spell."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "360 ft."
      }
    }
  },

  "Mature Adult Forest Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "earth"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Huge",
    hd: 19,
    hdVal: 12,
    cr: 15,
    racialFeatures: [
      "Dragon Senses",
      "Tremorsense 60 ft."
    ],
    speed: {
      base: 40,
      burrow: 20,
      climb: 30,
      maneuverability: "Poor",
      fly: 200
    },
    abilities: {
      str: 31,
      dex: 10,
      con: 22,
      int: 16,
      wis: 17,
      cha: 16
    },
    feats: [
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Natural Armor",
        type: "Monster"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Stealth",
        choiceSource: "Skill Focus"
      },
      {
        name: "Stealthy",
        type: "General"
      },
      {
        name: "Toughness",
        type: "General"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Bite",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Gore",
        name: "Gore",
        damage: "1d6",
        type: "secondary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to poison, sleep"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "adamantine"
      },
      SR: {
        value: 26
      },
      naturalArmor: 24
    },
    space: "15 ft.",
    reach: "10 ft. (15 ft. with bite and gore)",
    environment: "any forest",
    visualDescription: "This massive serpentine and wingless creature has jade scales and antlers, and sounds like grinding stones as it stalks forth.",
    description: "Forest dragons, or dilung, are fickle and malevolent dragons that dwell in deep, rugged woodlands. While a forest dragon can fly, it prefers to stalk the earth, flying only to pursue objects of its wrath.",
    organization: "solitary",
    languages: "Common, Draconic, Elven, Goblin, Sylvan",
    spellLikeAbilities: [
      {
        name: "entangle",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "blight",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "pass without trace",
        casterLevel: 19,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 9,
      spells: [
        {
          name: "(4/day)-charm monster",
          limitations: "4/day",
          level: 4
        },
        {
          name: "solid fog ",
          level: 4
        },
        {
          name: "(7/day)-lightning bolt",
          limitations: "7/day",
          level: 3
        },
        {
          name: "wind wall",
          level: 3
        },
        {
          name: "",
          level: 3
        },
        {
          name: "",
          limitations: "7/day",
          level: 2
        },
        {
          name: "hideous laughter",
          level: 2
        },
        {
          name: "invisibility",
          level: 2
        },
        {
          name: "touch of idiocy ",
          level: 2
        },
        {
          name: "(7/day)-hypnotism",
          limitations: "7/day",
          level: 1
        },
        {
          name: "obscuring mist",
          level: 1
        },
        {
          name: "magic missile",
          level: 1
        },
        {
          name: "ray of enfeeblement",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "(at-will)-daze",
          limitations: "at-will",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "ghost sound",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "mending",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        },
        {
          name: "resistance",
          level: 0
        },
        {
          name: "touch of fatigue",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Acrobatics: {
        ranks: 15
      },
      Bluff: {
        ranks: 19
      },
      Climb: {
        ranks: 19
      },
      "Escape Artist": {
        ranks: 0
      },
      Fly: {
        ranks: 0
      },
      Intimidate: {
        ranks: 19
      },
      "Knowledge (arcana)": {
        ranks: 10
      },
      "Knowledge (nature)": {
        ranks: 9
      },
      Perception: {
        ranks: 19
      },
      Spellcraft: {
        ranks: 19
      },
      Stealth: {
        ranks: 15
      },
      Survival: {
        ranks: 19
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "60-ft. cone",
        damage: "14d6 piercing damage",
        saveDC: 10
      },
      "2d8+15)": {
        type: "Ex",
        preText: "2d8+15"
      },
      "change shape": {
        type: "Su",
        text: "n adult or older forest dragon can assume any humanoid form three times per day as if using polymorph."
      },
      "sound imitation": {
        type: "Ex",
        text: " very young or older forest dragon can mimic any voice or sound it has heard by making a successful Bluff check against the listener's Sense Motive check."
      },
      "woodland stride": {
        type: "Ex",
        text: "s the druid ability of the same name."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "210 ft."
      }
    }
  },

  "Juvenile Sovereign Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 14,
    hdVal: 12,
    cr: 12,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 50,
      maneuverability: "Poor",
      fly: 200
    },
    abilities: {
      str: 27,
      dex: 12,
      con: 21,
      int: 18,
      wis: 19,
      cha: 18
    },
    feats: [
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Persuasive",
        type: "General"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Bite",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Gore",
        name: "Gore",
        damage: "1d6",
        type: "secondary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to sleep"
    ],
    defense: {
      naturalArmor: 16
    },
    space: "10 ft.",
    reach: "5 ft. (10 ft. with bite and gore)",
    environment: "any mountains",
    visualDescription: "This magnificent dragon is covered in splendid gold scales, and horns jut from its head like a crown.",
    description: "Guardians of balance, sovereign dragons, or lungwangs as they are also known, were placed in the skies by the gods themselves to safeguard harmony in the world.",
    organization: "solitary",
    languages: "Auran, Celestial, Common, Draconic, Infernal",
    spellLikeAbilities: [
      {
        name: "calm emotions",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "detect evil",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "detect good",
        casterLevel: 14,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 3,
      spells: [
        {
          name: "(6/day)-charm person",
          limitations: "6/day",
          level: 1
        },
        {
          name: "color spray",
          level: 1
        },
        {
          name: "true strike",
          level: 1
        },
        {
          name: "(at will)-daze",
          limitations: "at will",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "ghost sound",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        },
        {
          name: "resistance",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Appraise: {
        ranks: 14
      },
      Bluff: {
        ranks: 14
      },
      Diplomacy: {
        ranks: 14
      },
      Fly: {
        ranks: 0
      },
      Intimidate: {
        ranks: 14
      },
      "Knowledge (arcana)": {
        ranks: 14
      },
      "Knowledge (history)": {
        ranks: 14
      },
      "Knowledge (nobility)": {
        ranks: 14
      },
      Perception: {
        ranks: 14
      },
      "Sense Motive": {
        ranks: 14
      },
      Spellcraft: {
        ranks: 14
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "40 ft. cone",
        damage: "8d6 sonic",
        saveDC: 10
      },
      "violent retort": {
        type: "Ex",
        text: "hen a young or older sovereign dragon takes damage from a melee attack critical hit, it can, as an immediate action, make a claw or tail slap attack against the creature that made the critical hit."
      },
      "change shape": {
        type: "Su",
        text: " young or older sovereign dragon can assume any humanoid form three times per day as polymorph."
      },
      "dogmatic discordance": {
        type: "Su",
        text: "ood or evil creatures take a -2 penalty when making saving throws against a sovereign dragon's spells, spell-like abilities, breath weapon, and aura."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "120 ft."
      }
    }
  },

  "Old Umbral Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "extraplanar"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Gargantuan",
    hd: 21,
    hdVal: 12,
    cr: 17,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 40,
      maneuverability: "Poor",
      fly: 200
    },
    abilities: {
      str: 31,
      dex: 8,
      con: 23,
      int: 22,
      wis: 23,
      cha: 22
    },
    feats: [
      {
        name: "Bleeding Critical",
        type: "Combat"
      },
      {
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Hover",
        type: "Monster"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Stealth",
        choiceSource: "Skill Focus"
      },
      {
        name: "Snatch",
        type: "Monster"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to cold, death effects, negative energy, sleep"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "magic"
      },
      SR: {
        value: 28
      },
      naturalArmor: 27
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "This sleek, dark dragon moves with a disturbing, serpentine grace, its eyes glowing as if lit from within by crimson embers.",
    description: "Cruel and sadistic, umbral dragons prefer the taste of undead flesh or ghostly ectoplasm, yet never turn down opportunities to consume living flesh.",
    organization: "solitary",
    languages: "Abyssal, Common, Draconic, Undercommon, 3 more",
    spellLikeAbilities: [
      {
        name: "darkness",
        casterLevel: 21,
        timesPerDay: -1
      },
      {
        name: "project image",
        casterLevel: 21,
        timesPerDay: -1
      },
      {
        name: "shadow walk",
        casterLevel: 21,
        timesPerDay: -1
      },
      {
        name: "vampiric touch",
        casterLevel: 21,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 11,
      spells: [
        {
          name: "",
          limitations: "5/day",
          level: 5
        },
        {
          name: "",
          level: 5
        },
        {
          name: "",
          limitations: "7/day",
          level: 4
        },
        {
          name: "inflict critical wounds",
          level: 4
        },
        {
          name: "",
          level: 4
        },
        {
          name: "",
          limitations: "7/day",
          level: 3
        },
        {
          name: "haste",
          level: 3
        },
        {
          name: "inflict serious wounds",
          level: 3
        },
        {
          name: "",
          level: 3
        },
        {
          name: "",
          limitations: "8/day",
          level: 2
        },
        {
          name: "blur",
          level: 2
        },
        {
          name: "command undead",
          level: 2
        },
        {
          name: "invisibility",
          level: 2
        },
        {
          name: "",
          level: 2
        },
        {
          name: "(8/day)-grease",
          limitations: "8/day",
          level: 1
        },
        {
          name: "inflict light wounds",
          level: 1
        },
        {
          name: "magic missile",
          level: 1
        },
        {
          name: "reduce person",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "bleed",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "detect poison",
          level: 0
        },
        {
          name: "disrupt undead",
          level: 0
        },
        {
          name: "ghost sound",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "ray of frost",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Appraise: {
        ranks: 21
      },
      Bluff: {
        ranks: 21
      },
      Diplomacy: {
        ranks: 21
      },
      Fly: {
        ranks: 19
      },
      "Knowledge (arcana)": {
        ranks: 21
      },
      "Knowledge (local)": {
        ranks: 21
      },
      "Knowledge (planes)": {
        ranks: 21
      },
      "Knowledge (religion)": {
        ranks: 21
      },
      Perception: {
        ranks: 21
      },
      "Sense Motive": {
        ranks: 21
      },
      Spellcraft: {
        ranks: 21
      },
      Stealth: {
        ranks: 21
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "50-ft. cone",
        damage: "16d8 negative energy",
        saveDC: 10,
        text: "lthough it deals negative energy damage, an umbral dragon's breath weapon does not heal undead creatures."
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "4d6+15",
        saveDC: 10
      },
      "shadow breath": {
        type: "Su",
        text: "hree times per day, an adult or older umbral dragon can breathe a cone of shadows. Creatures who fail a Fortitude save are blinded for 1d4 rounds and take 1 point of Str drain per age category possessed by the dragon. A successful save negates the blindness and reduces Str drain to 1d4 points.",
        preText: "8 Str"
      },
      "tail sweep": {
        universalMonsterAbility: "Tail Sweep",
        damage: "2d6+15",
        saveDC: 10
      },
      "ghost bane": {
        type: "Su",
        text: " young or older umbral dragon's physical attacks deal damage to incorporeal creatures normally. Shadow Breath (Su)Three times per day, an adult or older umbral dragon can breathe a cone of shadows. Creatures who fail a Fortitude save are blinded for 1d4 rounds and take 1 point of Str drain per age category possessed by the dragon. A successful save negates the blindness and reduces Str drain to 1d4 points."
      },
      "umbral scion": {
        type: "Ex",
        text: "mbral dragons have negative energy affinity and are immune to energy drain and death effects."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "240 ft."
      }
    }
  },

  "Noble Marid": {
    source: "d20pfsrd",
    creatureType: "outsider",
    subTypes: [
      "extraplanar",
      "water"
    ],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Large",
    hd: 14,
    hdVal: 10,
    cr: 11,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 20,
      swim: 60
    },
    abilities: {
      str: 23,
      dex: 19,
      con: 18,
      int: 14,
      wis: 15,
      cha: 16
    },
    feats: [
      {
        name: "Combat Casting",
        type: "General"
      },
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Great Fortitude",
        type: "General"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Natural Attack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Perform0",
        choiceSource: "Skill Focus"
      }
    ],
    attacks: [
      {
        weapon: "Slam",
        name: "2 Slams",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Trident",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "Trident",
        damage: "1d8"
      }
    ],
    defense: {
      naturalArmor: 9
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any (Plane of Water)",
    visualDescription: "This being resembles a powerful giant with hairless blue-green skin, deep blue eyes, flamboyant eyebrows, and pearlescent teeth.",
    description: "Marids are genies from the Plane of Water. The most powerful of all the genie races, they are said to possess the strength of the ocean's currents and teeth made of pearl. A marid stands about 16 feet tall and weighs nearly 2,500 pounds. The marids are perhaps the most unpredictable and capricious of the genies, a quality that the others (particularly shaitans) find to be both aggravating and embarrassing to the entire genie culture. Many marids become dancers, storytellers, performers, or other types of artists, and often travel to the Material Plane in disguise to seek out new audiences.",
    organization: "solitary, pair, company (3-6), or band (7-12)",
    languages: "Aquan, Auran, Common, Ignan, Terran; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "detect evil",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "detect good",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "detect magic",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "water walk",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "create water",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "invisibility",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "plane shift",
        casterLevel: 20,
        limitations: "willing targets to elemental planes, Astral Plane, or Material Plane only",
        timesPerDay: -1
      },
      {
        name: "purify food and drink",
        casterLevel: 20,
        limitations: "liquids only",
        timesPerDay: -1
      },
      {
        name: "quench",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "control water",
        casterLevel: 20,
        timesPerDay: 5
      },
      {
        name: "gaseous form",
        casterLevel: 20,
        timesPerDay: 5
      },
      {
        name: "obscuring mist",
        casterLevel: 20,
        timesPerDay: 5
      },
      {
        name: "water breathing",
        casterLevel: 20,
        timesPerDay: 5
      },
      {
        name: "cone of cold",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "ice storm",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "see invisibility",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "elemental swarm",
        casterLevel: 20,
        limitations: "water elementals only",
        timesPerDay: 1
      },
      {
        name: "permanent image",
        casterLevel: 20,
        timesPerDay: 1
      },
      {
        name: "persistent image",
        casterLevel: 20,
        timesPerDay: 1
      },
      {
        name: "wish",
        casterLevel: 20,
        limitations: "Times Per Year: 1 to nongenies only",
        timesPerDay: -1
      }
    ],
    skills: {
      Craft0: {
        subSkill: "any one",
        ranks: 12
      },
      Diplomacy: {
        ranks: 16
      },
      "Knowledge (planes)": {
        ranks: 12
      },
      Perception: {
        ranks: 13
      },
      Perform0: {
        subSkill: "storytelling",
        ranks: 14
      },
      "Sense Motive": {
        ranks: 12
      },
      Spellcraft: {
        ranks: 15
      },
      Stealth: {
        ranks: 12
      },
      Swim: {
        ranks: 7
      }
    },
    special: {
      vortex: {
        type: "Su",
        text: " noble marid can transform into a vortex of swirling, churning water once every 10 mintues. This ability functions identically to the whirlwind ability, save that it can only be used while the noble marid is underwater; a noble marid cannot leave a body of water while in vortex form.",
        preText: "1/10 minutes, 10-50 ft. tall, 1d8+4 damage, DC 23"
      },
      "water mastery": {
        type: "Ex",
        text: " noble marid gains a +1 bonus on attack and damage rolls if both it and its opponent are touching water. If the opponent or the noble marid is touching the ground, the noble marid takes a -4 penalty on attack and damage rolls."
      },
      "water's fury": {
        type: "Su",
        text: "s a standard action, a noble marid can release a jet of water in a 60-foot line that deals 1d6 points of damage and blinds the target struck for 1d6 rounds. A DC 21 Reflex save reduces the damage by half and negates the blinding effect. The save DC is Constitution-based. Vortex (Su)A noble marid can transform into a vortex of swirling, churning water once every 10 mintues. This ability functions identically to the whirlwind ability, save that it can only be used while the noble marid is underwater; a noble marid cannot leave a body of water while in vortex form."
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "or giant form I",
        type: ", or giant form I"
      }
    }
  },

  "Juvenile Crystal Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "earth"
    ],
    alignments: [
      "Chaotic Good"
    ],
    size: "Medium",
    hd: 9,
    hdVal: 12,
    cr: 7,
    racialFeatures: [
      "Dragon Senses",
      "Tremorsense 30 ft."
    ],
    speed: {
      base: 60,
      burrow: 30,
      climb: 30,
      maneuverability: "Average",
      fly: 150
    },
    abilities: {
      str: 19,
      dex: 14,
      con: 19,
      int: 14,
      wis: 15,
      cha: 20
    },
    feats: [
      {
        name: "Deceitful",
        type: "General"
      },
      {
        name: "Great Fortitude",
        type: "General"
      },
      {
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Bite",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to sleep, sonic"
    ],
    defense: {
      naturalArmor: 11
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any underground (Plane of Earth)",
    visualDescription: "This brilliantly colored dragon has scales, teeth, and claws made of multicolored crystal, and its wings are sheets of flexible glass.",
    description: "Crystal dragons are generally good-natured, though their incredible vanity sometimes causes them to seem aloof and cocky. Any perceived insult against its appearance is all but assured to send a crystal dragon into a rage-which is a problem, as most crystal dragons are prone to seeing insults even where none are intended. Crystal dragons prefer underground lairs, and often go for decades or even centuries without emerging from their extensive cavern lairs onto the surface world above. Crystal dragons tend to be exacting and even obsessive-compulsive, their personalities mirroring the precise and ordered nature of the facets of their scales. A crystal dragon's lair is a well-ordered place-these dragons find the very idea of the classic sprawl of a dragon's hoard to be shameful.",
    organization: "solitary",
    languages: "Common, Draconic, Undercommon",
    spellLikeAbilities: [
      {
        name: "color spray",
        casterLevel: 9,
        timesPerDay: -1
      },
      {
        name: "glitterdust",
        casterLevel: 9,
        timesPerDay: -1
      }
    ],
    skills: {
      Bluff: {
        ranks: 9
      },
      Climb: {
        ranks: 1,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Disguise: {
        ranks: 9
      },
      Fly: {
        ranks: 9
      },
      Intimidate: {
        ranks: 9
      },
      "Knowledge (dungeoneering)": {
        ranks: 9
      },
      Perception: {
        ranks: 9
      },
      Stealth: {
        ranks: 9
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "30-ft. cone",
        damage: "8d4 sonic",
        saveDC: 10
      },
      "razor sharp": {
        type: "Sp",
        text: "All of a crystal dragon's natural attacks deal slashing damage."
      }
    }
  },

  "Noble Efreeti": {
    source: "d20pfsrd",
    creatureType: "outsider",
    subTypes: [
      "extraplanar",
      "fire"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Large",
    hd: 13,
    hdVal: 10,
    cr: 10,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Detect Magic"
    ],
    speed: {
      base: 20,
      maneuverability: "Perfect",
      fly: 40
    },
    abilities: {
      str: 23,
      dex: 17,
      con: 18,
      int: 12,
      wis: 14,
      cha: 15
    },
    feats: [
      {
        name: "Combat Casting",
        type: "General"
      },
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Deceitful",
        type: "General"
      },
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Quicken Spell-Like Ability",
        type: "Monster",
        value: "Scorching ray",
        choiceSource: "Quicken Spell-Like Ability"
      },
      {
        name: "Toughness",
        type: "General"
      }
    ],
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
    defense: {
      naturalArmor: 8
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any (Plane of Fire)",
    visualDescription: "This muscular giant has crimson skin, smoldering eyes, and small black horns. Smoke rises in curls from its flesh.",
    description: "The efreet (singular efreeti) are genies from the Plane of Fire. An efreeti stands about 12 feet tall and weighs about 2,000 pounds. Efreet have few allies among geniekind. They certainly hate djinn, and attack them on sight. They hold an equally strong enmity for marids, and view the jann as frail and weak. Efreet often work closely with shaitans, yet even then alliances are temporary at best.",
    organization: "solitary, pair, company (3-6), or band (7-12)",
    languages: "Aquan, Auran, Common, Ignan, Terran; telepathy 100 ft.",
    otherGear: "+3 chain shirt, dimensional shackles, iron key radiating a faint transmutation aura and engraved with a cross-eyed medusa head",
    spellLikeAbilities: [
      {
        name: "detect magic",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "plane shift",
        casterLevel: 15,
        limitations: "wills targets to elemental planes, Astral Plane, or Material Plane only",
        timesPerDay: -1
      },
      {
        name: "produce flame",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "pyrotechnics",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "scorching ray",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "fireball",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "heat metal",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "invisibility",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "scorching ray",
        casterLevel: 15,
        limitations: "Metamagic: Quicken ",
        timesPerDay: 3
      },
      {
        name: "wall of fire",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "wish",
        casterLevel: 15,
        limitations: "up to 3, to non-genies only",
        timesPerDay: 1
      },
      {
        name: "gaseous form",
        casterLevel: 15,
        timesPerDay: 1
      },
      {
        name: "invisibility, greater",
        casterLevel: 15,
        timesPerDay: 1
      },
      {
        name: "permanent image",
        casterLevel: 15,
        timesPerDay: 1
      },
      {
        name: "ice storm",
        casterLevel: 15,
        limitations: "pyroclastic storm, with fire instead of cold damage",
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 13
      },
      Craft0: {
        subSkill: "armor",
        ranks: 13
      },
      Disguise: {
        ranks: 9
      },
      Fly: {
        ranks: 1
      },
      Intimidate: {
        ranks: 13
      },
      Perception: {
        ranks: 13
      },
      "Sense Motive": {
        ranks: 13
      },
      Spellcraft: {
        ranks: 16
      },
      Stealth: {
        ranks: 6
      }
    },
    special: {
      "change size": {
        type: "Sp",
        text: "Twice per day, a noble efreeti can magically change a creature's size. This works just like an enlarge person or reduce person spell (the efreeti chooses when using the ability), except that the ability can work on the efreeti. A DC 13 Fortitude save negates the effect. The save DC is Charisma-based. This is the equivalent of a 2nd-level spell."
      },
      heat: {
        type: "Ex",
        text: "A noble efreeti's body deals 1d6 points of fire damage whenever it hits in melee, or in each round it grapples."
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "alter self or giant form I",
        type: ", alter self or giant form I"
      }
    }
  },

  "Degenerate Serpentfolk": {
    source: "d20pfsrd",
    creatureType: "monstrous humanoid",
    subTypes: [],
    alignments: [
      "Neutral Evil"
    ],
    size: "Medium",
    hd: 5,
    hdVal: 10,
    cr: 4,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Scent"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 20,
      dex: 13,
      con: 19,
      int: 4,
      wis: 13,
      cha: 6
    },
    feats: [
      {
        name: "Great Fortitude",
        type: "General"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Bite",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Dagger",
        name: "Dagger",
        damage: "1d4"
      },
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "poison",
        damage: "1d6",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to mind-affecting effects, paralysis, poison"
    ],
    defense: {
      SR: {
        value: 15
      },
      naturalArmor: 7
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any land (usually jungles or underground)",
    visualDescription: "This serpentine humanoid has bright scaly skin, a long sinuous tail, and a fanged serpent's head.",
    description: "The majority of serpentfolk today are degenerates who have devolved to the point of primeval savagery and have lost much of their magical legacy-more civilized serpentfolk generally regard these degenerates with shame and disdain. Degenerates are 5 feet tall but weigh 200 pounds.",
    organization: "solitary, pair, or cult (3-12)",
    languages: "Aklo, Common, Draconic, Undercommon; telepathy 100 ft.",
    spellLikeAbilities: [],
    skills: {
      "Escape Artist": {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Perception: {
        ranks: 5,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      }
    },
    special: {
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "ite-injury; save Fort DC 16; frequency 1/round for 6 rounds; effect 1d2 Str; cure 2 saves. The save DC is Constitution-based.",
        saveDC: 10
      }
    }
  },

  "Black Jinni": {
    source: "d20pfsrd",
    creatureType: "outsider",
    subTypes: [
      "chaotic",
      "evil",
      "extraplanar"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Large",
    hd: 20,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 40,
      maneuverability: "Average",
      fly: 60
    },
    abilities: {
      str: 26,
      dex: 22,
      con: 23,
      int: 12,
      wis: 15,
      cha: 18
    },
    feats: [
      {
        name: "Bleeding Critical",
        type: "Combat"
      },
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Falchion",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Mobility",
        type: "Combat"
      },
      {
        name: "Spring Attack",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Falchion",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Falchion",
        enchantments: [
          {
            name: "Enhancement Bonus +1",
            source: "inherent"
          }
        ],
        name: "Falchion",
        damage: "2d4"
      },
      {
        weapon: "Gore",
        name: "Gore",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to electricity, fire"
    ],
    defense: {
      naturalArmor: 14
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "warm deserts",
    visualDescription: "This appears to be a powerful humanoid figure, but it is difficult to make out due to the cloud of obscuring dust that perpetually hangs around it. The faint howl of winds and the smell of the deep desert seems to linger in its presence. It has recognizable features such as arms and legs, but they seem somehow wrong and out of proportion.",
    description: "Thought by many, even among the jann, to be myths and dark legends, the black jinn are an accursed and forgotten tribe of genies. Bearers of ill will and bringers of destruction upon both mortals and their own kind, these hateful creatures are possessed by madness and a drive to call down ruin upon any who intrude upon their desolate sanctums. The few black jinn encountered on the Material Plane are thought of as terrors of the deep desert, arriving in sudden sandstorms, brilliant with electrical fury, and disappearing just as quickly to leave behind no trace of lost comrades, or merely leaving corpses, charred or glazed in molten glass. Largely, black jinn are creatures of myth and legend, but a handful of mortals know the terrible truth- which few live long enough to tell. Although typically surrounded by a cloud of dust, black jinn appear more fiendish than other genies. A cursed creature, they do not constitute a true race of jann, but rather a bloodline so corrupt as to no longer be considered part of this proud race. A black jinni stands 12 feet tall and can weigh as much 1,200 pounds, its body being mostly comprised of soot, dust, and foul smoke.",
    organization: "solitary, pair, or band (3-6)",
    languages: "Ancient Osiriani, Aquan, Auran, Ignan, Terran",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 19
      },
      Bluff: {
        ranks: 20
      },
      Fly: {
        ranks: 0
      },
      Intimidate: {
        ranks: 23
      },
      "Knowledge (religion)": {
        ranks: 23
      },
      Perception: {
        ranks: 20
      },
      "Sense Motive": {
        ranks: 20
      },
      Stealth: {
        ranks: 20
      }
    },
    special: {
      "create spawn": {
        type: "Su",
        text: "A humanoid or genie slain by a black jinni's melee attacks enhanced by her shocking touch rises 1d4 rounds later as an undead spawn. Humans rise as zombies, jann rise as ghuls (Pathfinder RPG Bestiary 3 125), and djinn, efreet, shaitans, and marids rise as great ghuls (see page 51). Any spawn created by a black jinni are under her control."
      },
      "dust vortex": {
        type: "Su",
        text: "Once per day, as a full-round action, a black jinni can cause the obscuring cloud that surrounds her to become a vortex of electrically charged dust. This vortex is 20 feet high and radiates to a range of 30 feet, with the black jinni at the vortex's center. The winds within this area are considered a windstorm (Core Rulebook 439). Creatures within the vortex that would normally be blown away are instead drawn toward the center to a square adjacent to the black jinni. A creature that ends its turn within the dust vortex takes 10d6 points of electricity damage (Reflex DC 23 half). Once the dust vortex is created, it remains stationary, allowing the black jinni to move around in it or even leave it. The vortex remains in place for 1d6 rounds, or until the black jinni dismisses it as a move action. The save DC is Constitution-based."
      },
      "shocking touch": {
        type: "Su",
        text: "Any creature hit by a black jinni's claw attack or its conductive falchion takes an additional 1d10 points of electricity damage-on a critical hit, this additional electricity damage increases to 2d10 points of damage and the creature must succeed at a DC 23 Fortitude save or the electricity lingers on its body, dealing an additional 1d10 points of electricity damage each round on the start of the victim's turn for 1d6 additional rounds. Immersion in any liquid ends this ongoing damage, as does contact with a metal object of at least Medium or larger size that is in contact with the ground. The save DC is Constitution-based."
      },
      "aligned weapons": {
        type: "Su",
        text: "A black jinni's natural weapons and any weapon she wields are treated as chaotic and evil for the purposes of overcoming damage reduction."
      },
      stormwalk: {
        type: "Ex",
        text: "A black jinni is able to move about in any storm of natural or unnatural origin of hurricane velocity or less without suffering any of its effects. Vulnerability to Recitation (Ex) As cursed genies of evil and chaos, black jinn are strangely susceptible to recitations of certain holy tracts belonging to good or lawful deities or philosophies. These include the spells dictum and holy word, but also forceful recitations of nonmagical holy sermonizing. If a cleric or paladin of a lawful or good deity succeeds at an opposed Knowledge (religion) check against a black jinni's Knowledge (religion) check as a standard action, the black jinni must succeed at a DC 20 Fortitude save or be instantly destroyed, leaving behind only a small spot of charred ash. If this save is successful, the black jinni instead takes 5d6 points of damage. Unlike most black jinn, though, Agazuberi is particularly patient and accepting of such recitations-she gains a +4 bonus on her Fortitude saves and Knowledge (religion) checks when reacting to this weakness."
      },
      "freedom of movement": {
        type: "Ex"
      },
      "obscuring cloud": {
        type: "Ex",
        text: "A black jinni is continually surrounded by a cloud of obscuring dust and scouring wind. This cloud gives her a +8 racial bonus on Stealth checks while within a sandstorm or other area of blowing dust. In addition, a black jinni has concealment (20% miss chance) while the cloud is in effect. Any strong (or stronger) wind can suppress the obscuring cloud as long as the wind persists."
      }
    }
  },

  "Old Underworld Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "fire"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Huge",
    hd: 18,
    hdVal: 12,
    cr: 14,
    racialFeatures: [
      "Dragon Senses",
      "Smoke Vision"
    ],
    speed: {
      base: 40,
      burrow: 50,
      maneuverability: "Poor",
      fly: 200
    },
    abilities: {
      str: 31,
      dex: 8,
      con: 23,
      int: 18,
      wis: 19,
      cha: 18
    },
    feats: [
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Claw",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Natural Armor",
        type: "Monster"
      },
      {
        name: "Lunge",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Stealth",
        choiceSource: "Skill Focus"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Bite",
        choiceSource: "Weapon Focus"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Claw",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Gore",
        name: "Gore",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to sleep"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "magic"
      },
      SR: {
        value: 25
      },
      naturalArmor: 25
    },
    space: "15 ft.",
    reach: "10 ft. (15 ft. with bite and gore)",
    environment: "any underground",
    visualDescription: "This serpentine dragon has skin the color of deep volcanic rock, enormous claws, and jagged, stonelike horns and scales.",
    description: "Underworld dragons, also called futsanglungs, are calculating, greedy creatures that carve great labyrinthine tunnels beneath the world, defending their hidden treasures. Preferring the earth to the heavens, they channel the fires of the world's core within their twisting, stonelike bodies and through flaming breath hot enough to turn granite into slag.",
    organization: "solitary",
    languages: "Common, Draconic, Dwarven, Ignan, Terran",
    spellLikeAbilities: [
      {
        name: "soften earth and stone",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "spike stones",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "stone shape",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "wall of stone",
        casterLevel: 18,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 9,
      spells: [
        {
          name: "(5/day)-shout",
          limitations: "5/day",
          level: 4
        },
        {
          name: "stone shape ",
          level: 4
        },
        {
          name: "",
          limitations: "7/day",
          level: 3
        },
        {
          name: "fireball",
          level: 3
        },
        {
          name: "protection from good ",
          level: 3
        },
        {
          name: "",
          limitations: "7/day",
          level: 2
        },
        {
          name: "flaming sphere",
          level: 2
        },
        {
          name: "resist energy",
          level: 2
        },
        {
          name: "scorching ray ",
          level: 2
        },
        {
          name: "(7/day)-burning hands",
          limitations: "7/day",
          level: 1
        },
        {
          name: "cause fear",
          level: 1
        },
        {
          name: "magic missile",
          level: 1
        },
        {
          name: "ray of enfeeblement",
          level: 1
        },
        {
          name: "true strike",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "bleed",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "flare",
          level: 0
        },
        {
          name: "ghost sound",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        },
        {
          name: "resistance",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Appraise: {
        ranks: 18
      },
      Bluff: {
        ranks: 18
      },
      Climb: {
        ranks: 18
      },
      Fly: {
        ranks: 18
      },
      Intimidate: {
        ranks: 18
      },
      "Knowledge (dungeoneering)": {
        ranks: 18
      },
      "Knowledge (geography)": {
        ranks: 18
      },
      "Knowledge (planes)": {
        ranks: 18
      },
      Perception: {
        ranks: 18
      },
      Stealth: {
        ranks: 18
      }
    },
    special: {
      "adamantine claws": {
        type: "Ex",
        text: "The claws of an underworld dragon are made of adamantine, and have the qualities of a weapon made from that material."
      },
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "100-ft. line",
        damage: "16d6 fire damage",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "2d8+15",
        saveDC: 10
      },
      "change shape": {
        type: "Su",
        text: "A young or older underworld dragon can assume any humanoid form three times per day as if using polymorph. Smoke Vision (Ex) A very young and older underworld dragon can see perfectly in smoky conditions (such as those created by pyrotechnics)."
      },
      "underworld burrower": {
        type: "Ex",
        text: "An adult underworld dragon gains a 10-foot bonus to its burrow speed. When the underworld dragon becomes old and every two age categories thereafter, its burrow speed increases by an additional 10 feet."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "240 ft."
      }
    }
  },

  "Old Magma Dragon": {
    source: "d20pfsrd",
    creatureType: "dragon",
    subTypes: [
      "fire"
    ],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Huge",
    hd: 19,
    hdVal: 12,
    cr: 15,
    racialFeatures: [
      "Dragon Senses"
    ],
    speed: {
      base: 40,
      maneuverability: "Poor",
      fly: 200
    },
    abilities: {
      str: 31,
      dex: 10,
      con: 23,
      int: 20,
      wis: 20,
      cha: 19
    },
    feats: [
      {
        name: "Great Fortitude",
        type: "General"
      },
      {
        name: "Improved Bull Rush",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Claw",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Vital Strike",
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
            value: 8,
            appliesTo: "damageType",
            damageType: "fire"
          }
        ],
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to sleep"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "magic"
      },
      SR: {
        value: 26
      },
      naturalArmor: 25
    },
    space: "15 ft.",
    reach: "10 ft. (15 ft. with bite)",
    environment: "any mountains or underground (Plane of Fire)",
    visualDescription: "Between this dragon's jet-black scales run glowing rivulets of lava, and veins aglow with heat shine in the membranes of its wings.",
    description: "Temperamental and prone to violent outbursts, magma dragons are regarded by most other dragons as dangerously insane-an assumption that, more often than not, proves correct. One can rarely predict a magma dragon's state of mind until it either attacks or attempts to engage in conversation. For their part, magma dragons can justify all of their actions-they just rarely feel the need to do so.",
    organization: "solitary",
    languages: "Common, Draconic, Dwarven, Elven, Gnome, Ignan",
    spellLikeAbilities: [
      {
        name: "fire shield",
        casterLevel: 19,
        limitations: "warm",
        timesPerDay: -1
      },
      {
        name: "burning hands",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "scorching ray",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "wall of fire",
        casterLevel: 19,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 11,
      spells: [
        {
          name: "(4/day)-hungry pit",
          limitations: "4/day",
          level: 5
        },
        {
          name: "teleport ",
          level: 5
        },
        {
          name: "(7/day)-acid pit",
          limitations: "7/day",
          level: 4
        },
        {
          name: "fire shield",
          level: 4
        },
        {
          name: "",
          level: 4
        },
        {
          name: "",
          limitations: "7/day",
          level: 3
        },
        {
          name: "dispel magic",
          level: 3
        },
        {
          name: "fireball",
          level: 3
        },
        {
          name: "wind wall ",
          level: 3
        },
        {
          name: "",
          limitations: "7/day",
          level: 2
        },
        {
          name: "dust of twilight",
          level: 2
        },
        {
          name: "flaming sphere",
          level: 2
        },
        {
          name: "",
          level: 2
        },
        {
          name: "",
          limitations: "7/day",
          level: 1
        },
        {
          name: "flare burst",
          level: 1
        },
        {
          name: "grease",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "true strike",
          level: 1
        },
        {
          name: "(at will)-bleed",
          limitations: "at will",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "detect poison",
          level: 0
        },
        {
          name: "ghost sound",
          level: 0
        },
        {
          name: "light",
          level: 0
        },
        {
          name: "open/close",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        },
        {
          name: "spark",
          level: 0
        },
        {
          name: "touch of fatigue",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Acrobatics: {
        ranks: 15
      },
      Climb: {
        ranks: 19
      },
      "Escape Artist": {
        ranks: 19
      },
      Fly: {
        ranks: 19
      },
      Intimidate: {
        ranks: 19
      },
      Perception: {
        ranks: 19
      },
      "Sense Motive": {
        ranks: 19
      },
      "Sleight of Hand": {
        ranks: 19
      },
      Stealth: {
        ranks: 19
      },
      Survival: {
        ranks: 19
      },
      Swim: {
        ranks: 19
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "50-ft. cone",
        damage: "16d6 fire",
        saveDC: 10
      },
      crush: {
        universalMonsterAbility: "Crush",
        damage: "2d8+15",
        saveDC: 10
      },
      superheated: {
        type: "Su",
        text: "t young age and older, a magma dragon's bite attack deals additional fire damage equal to its age category."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "240 ft."
      }
    }
  },

};
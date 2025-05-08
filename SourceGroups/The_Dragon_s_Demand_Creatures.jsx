
export const The_Dragon_s_DemandCreatures = {
  Grioth: {
    source: "The Dragon's Demand",
    creatureType: "monstrous humanoid",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 2,
    hdVal: 10,
    cr: 1,
    racialFeatures: [
      "Blindsight 20 ft.",
      "See in Darkness"
    ],
    speed: {
      base: 30,
      maneuverability: "Average",
      fly: 40
    },
    abilities: {
      str: 10,
      dex: 18,
      con: 12,
      int: 13,
      wis: 13,
      cha: 11
    },
    feats: [
      {
        name: "Iron Will",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Kukri",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "Kukri",
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
      "Immune to cold"
    ],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "This lanky, batlike humanoid has a long tail and four narrow eyes. The silent creature moves with an unnerving grace.",
    description: "Grioths inhabit rogue planets that have been cast away from the stars. They often travel via portals to other worlds via that are undergoing eclipses to pillage resources that are rare on their frozen homeworlds. Many members of this evil race are known for their devotion to the Outer God Nyarlathotep (whom they worship in his guise as the Haunter of the Dark), and it isn't uncommon for colonies of grioths to be led by his clerics. Grioths' voices are raspy and dry. They favor weaponry crafted from a strange material known as voidglass (see page 35). The grioth race is prone to mutations, their forms twisted by the eldritch forces within the Dark Tapestry into lumbering giants or deformed horrors. Some grioths grow unusually large and ferocious, and the elders of the race possesses unusual and deadly psychic powers- abilities that aid them in ruling their dark spire cities and in their constant war against their hated foes, the entities of the Dominion of the Black.",
    organization: "solitary, pair, gathering (3-6 plus 1 3rd-level cleric), or cult (7-20 plus 2-6 3rd-level clerics, 2-4 3rd-level barbarians, and 1 7th-level cleric)",
    languages: "Aklo, Grioth; telepathy 30 ft.",
    spellLikeAbilities: [
      {
        name: "detect magic",
        casterLevel: 1,
        timesPerDay: -1
      },
      {
        name: "mage hand",
        casterLevel: 1,
        timesPerDay: -1
      },
      {
        name: "open/close",
        casterLevel: 1,
        timesPerDay: -1
      },
      {
        name: "daze",
        casterLevel: 1,
        timesPerDay: 1
      }
    ],
    skills: {
      Fly: {
        ranks: 2
      },
      "Knowledge (geography)": {
        ranks: 2
      },
      Perception: {
        ranks: 1,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      "Sense Motive": {
        ranks: 2
      },
      Stealth: {
        ranks: 2
      }
    },
    special: {
      mindshock: {
        type: "Su",
        text: "When a grioth damages a creature with a voidglass weapon, a surge of the grioth's violent psychic energy pulses through the weapon, causing an additional 1d4 points of nonlethal damage. On a critical hit, the creature struck must also succeed at a DC 12 Will save or be confused for 1d2 rounds. This is a mind-affecting effect. The save DC is Charisma-based and includes a +2 racial bonus."
      },
      "no breath": {
        universalMonsterAbility: "No Breath",
        text: ""
      },
      "id insinuation": {
        type: "Sp",
        text: "As a standard action once per day, a grioth can disrupt a creature's mind. The target must be within 30 feet, and can resist this effect with a successful DC 12 Will save-otherwise, the target becomes confused for as long as the grioth concentrates plus 1 additional round after it ceases concentrating, to a maximum number of rounds equal to 3 plus the Grioth's total HD (5 rounds for most grioths). This is a mind-affecting effect, and is equivalent to a 2nd-level spell. The save DC is Charisma-based.",
        preText: "DC 12"
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Bite-injury; save Fort DC 12; frequency 1/round for 6 rounds; effect shaken for 1 round; cure 1 save.",
        saveDC: 10
      }
    },
    resistances: [
      "light sensitivity"
    ]
  },

  Yangethe: {
    source: "The Dragon's Demand",
    creatureType: "aberration",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Large",
    hd: 11,
    hdVal: 8,
    cr: 9,
    racialFeatures: [
      "Darkvision 120 ft."
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 24,
      dex: 18,
      con: 22,
      int: 17,
      wis: 21,
      cha: 17
    },
    feats: [
      {
        name: "Combat Casting",
        type: "General"
      },
      {
        name: "Combat Expertise",
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
        name: "Quicken Spell-Like Ability",
        type: "Monster",
        value: "True strike",
        choiceSource: "Quicken Spell-Like Ability"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Tentacles",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Tentacle",
        name: "4 Tentacles",
        specialAbility: "grab",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to cold, fear, mind-affecting effects"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "slashing or piercing"
      },
      SR: {
        value: 20
      },
      naturalArmor: 10
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "outer space or cold forest",
    visualDescription: "This six-eyed horror looks something like a dead tree with claws, tentacles, spidery legs, and a mouth bulging with tentacles.",
    description: "Bred by the Dominion of the Black, yangethes have, over the eons, developed keen intellects. On some planets, they've formed small, independent colonies that keep \"farms\" of victims on whose emotions they feed. The yangethes' ability to teleport across galaxies makes them remarkable as scouts or as the vanguards for an invasion. Unless slain violently, yangethes are immortal. They don't need to eat or drink to survive-though they will indulge in feeding for pleasure.",
    organization: "solitary, pair, or cluster (3-8)",
    languages: "Aklo; telepathy 60 ft.",
    spellLikeAbilities: [
      {
        name: "air walk",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "darkness",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "telekinesis",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "tree shape",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "fear",
        casterLevel: 10,
        timesPerDay: 3
      },
      {
        name: "true strike",
        casterLevel: 10,
        limitations: "Metamagic: Quicken ",
        timesPerDay: 3
      },
      {
        name: "demand",
        casterLevel: 10,
        timesPerDay: 1
      },
      {
        name: "interplanetary teleport",
        casterLevel: 10,
        limitations: "Times Per Year: 1 self plus 50 lbs. of objects only",
        timesPerDay: -1
      }
    ],
    skills: {
      "Knowledge (arcana)": {
        ranks: 11
      },
      "Knowledge (geography)": {
        ranks: 11
      },
      "Knowledge (engineering)": {
        ranks: 14
      },
      Perception: {
        ranks: 11
      },
      "Sense Motive": {
        ranks: 11
      },
      Spellcraft: {
        ranks: 11
      },
      "Use Magic Device": {
        ranks: 11
      }
    },
    special: {
      "feeding tentacles": {
        type: "Su",
        text: "As a standard action as part of maintaining a grapple, a yangethe can use its mouth tentacles to feed on a helpless or grappled creature by making a +14 melee touch attack. If it hits, the feeding tentacles siphon away the victim's emotions and deal 1d4 points of Charisma drain. The yangethe heals 5 points of damage for every point of Charisma it drains in this manner. As long as a creature continues to suffer this Charisma drain, each time it attempts to sleep it is affected by a nightmare spell (CL 10th, DC 20), experiencing terrifying dreams in which it relives the feeling of being fed upon over and over. All effects from the feeding tentacles are mind-affecting effects. Psychic Blast (Sp) This spell-like ability functions as confusion, and also deals 10d6 points of nonlethal damage when it first affects foes (Will DC 21 half). This ability is the equivalent of a 5th-level spell."
      },
      "no breath": {
        universalMonsterAbility: "No Breath",
        text: ""
      },
      "psychic blast": {
        type: "Sp",
        text: "This spell-like ability functions as confusion, and also deals 10d6 points of nonlethal damage when it first affects foes (Will DC 21 half). This ability is the equivalent of a 5th-level spell.",
        preText: "DC 18"
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

};
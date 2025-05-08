
export const PFRPGCreatures = {
  Halfling: {
    source: "PFRPG",
    creatureType: "humanoid",
    subTypes: [
      "halfling"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Small",
    hd: 1,
    hdVal: 8,
    dontUseRacialHD: true,
    cr: "1/3",
    racialFeatures: [
      "Perception +6"
    ],
    speed: {
      base: 20
    },
    abilities: {
      str: 6,
      dex: 15,
      con: 9,
      int: 12,
      wis: 10,
      cha: 12
    },
    attacks: [],
    defense: {
      saves: {
        All: [
          {
            value: 2,
            note: "vs. fear"
          }
        ]
      }
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any land",
    visualDescription: "Coming to a humble height of 3 feet, walks barefoot with curly hair warm the tops of their broad, tanned feet",
    description: "Halfling Characters Halflings are defined by their class levels-they do not possess racial HD. They have the following racial traits. Ability Score Racial Traits: Halflings are nimble and strong-willed, but their small stature makes them weaker than other races. They gain +2 Dexterity, +2 Charisma, and -2 Strength. Size: Halflings are Small creatures and gain a +1 size bonus to their AC, a +1 size bonus on attack rolls, a -1 penalty to their CMB and CMD, and a +4 size bonus on Stealth checks. Base Speed (Slow Speed): Halflings have a base speed of 20 feet. Languages: Halflings begin play speaking Common and Halfling. Halflings with high Intelligence scores can choose from the following: Dwarven, Elven, Gnome, and Goblin. See the Linguistics skill page for more information about these languages.",
    organization: "solitary, pair, or gang (3-5)",
    languages: "Common, Halfling",
    spellLikeAbilities: [],
    skills: {},
    special: {}
  },

  Dwarf: {
    source: "PFRPG",
    creatureType: "humanoid",
    subTypes: [
      "dwarf"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 1,
    hdVal: 8,
    dontUseRacialHD: true,
    cr: "1/3",
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 20
    },
    abilities: {
      str: 13,
      dex: 11,
      con: 14,
      int: 10,
      wis: 10,
      cha: 7
    },
    feats: [],
    attacks: [],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "",
    visualDescription: "",
    description: "Dwarves are a short and stocky race, and stand about a foot shorter than most humans, with wide, compact bodies that account for their burly appearance. Male and female dwarves pride themselves on the long length of their hair, and men often decorate their beards with a variety of clasps and intricate braids. Clean-shavenness on a male dwarf is a sure sign of madness, or worse-no one familiar with their race trusts a beardless dwarven man.",
    organization: "",
    languages: "Common, Dwarven",
    spellLikeAbilities: [],
    skills: {},
    special: {}
  },

  Elf: {
    source: "PFRPG",
    creatureType: "humanoid",
    subTypes: [
      "elf"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 1,
    hdVal: 8,
    dontUseRacialHD: true,
    cr: "1/3",
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 12,
      dex: 17,
      con: 12,
      int: 10,
      wis: 13,
      cha: 10
    },
    feats: [],
    attacks: [],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any land",
    visualDescription: "",
    description: "Generally taller than humans, elves possess a graceful, slender physique that is accentuated by their long, pointed ears. Elf Characters Elves are defined by their class levels-they do not possess racial HD. They have the following racial traits. • Ability Score Racial Traits: Elves are nimble, both in body and mind, but their form is frail. They gain +2 Dexterity, +2 Intelligence, and -2 Constitution. • Size: Elves are Medium creatures and thus receive no bonuses or penalties due to their size. • Type: Elves are Humanoids with the elf subtype. • Base Speed: Elves have a base speed of 30 feet. • Languages: Elves begin play speaking Common and Elven. Elves with high Intelligence scores can choose from the following: Celestial, Draconic, Gnoll, Gnome, Goblin, Orc, and Sylvan. See the Linguistics skill page for more information about these languages. • Elven Immunities: Elves are immune to magic sleep effects and gain a +2 racial saving throw bonus against enchantment spells and effects. • Keen Senses: Elves receive a +2 racial bonus on Perception checks. • Elven Magic: Elves receive a +2 racial bonus on caster level checks made to overcome spell resistance. In addition, elves receive a +2 racial bonus on Spellcraft skill checks made to identify the properties of magic items. • Weapon Familiarity: Elves are proficient with longbows (including composite longbows), longswords, rapiers, and shortbows (including composite shortbows), and treat any weapon with the word \"elven\" in its name as a martial weapon. • Low-Light Vision: Elves can see twice as far as humans in conditions of dim light.",
    organization: "solitary, pair, or gang (3-5)",
    languages: "Common, Elven",
    spellLikeAbilities: [],
    skills: {},
    special: {}
  },

  Gnome: {
    source: "PFRPG",
    creatureType: "humanoid",
    subTypes: [
      "gnome"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Small",
    hd: 1,
    hdVal: 8,
    dontUseRacialHD: true,
    cr: "1/3",
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 20
    },
    abilities: {
      str: 10,
      dex: 15,
      con: 16,
      int: 10,
      wis: 13,
      cha: 10
    },
    feats: [],
    attacks: [],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any land",
    visualDescription: "",
    description: "Gnome Characters Gnomes are defined by their class levels-they do not possess racial HD. They have the following racial traits. Ability Score Racial Traits: Gnomes are physically weak but surprisingly hardy, and their attitude makes them naturally agreeable. They gain +2 Constitution, +2 Charisma, and -2 Strength. • Type: Gnomes are Humanoid creatures with the gnome subtype. • Size: Gnomes are Small creatures and thus gain a +1 size bonus to their AC, a +1 size bonus on attack rolls, a -1 penalty to their Combat Maneuver Bonus and Combat Maneuver Defense, and a +4 size bonus on Stealth checks. • Base Speed: (Slow Speed) Gnomes have a base speed of 20 feet. • Languages: Gnomes begin play speaking Common, Gnome, and Sylvan. Gnomes with high Intelligence scores can choose from the following: Draconic, Dwarven, Elven, Giant, Goblin, and Orc. See the Linguistics skill page for more information about these languages.",
    organization: "solitary, pair, or gang (3-5)",
    languages: "Common, Gnome, Sylvan",
    spellLikeAbilities: [],
    skills: {},
    special: {}
  },

  "Half-Elf": {
    source: "PFRPG",
    creatureType: "humanoid",
    subTypes: [
      "elf",
      "human"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 1,
    hdVal: 8,
    dontUseRacialHD: true,
    cr: "1/3",
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 12,
      dex: 17,
      con: 13,
      int: 14,
      wis: 8,
      cha: 10
    },
    feats: [],
    attacks: [],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any land",
    visualDescription: "",
    description: "Half-elves stand taller than humans but shorter than elves. They inherit the lean build and comely features of their elven lineage, but their skin color is dictated by their human side. While half-elves retain the pointed ears of elves, theirs are more rounded and less pronounced. A half-elf's human-like eyes tend to range a spectrum of exotic colors running from amber or violet to emerald green and deep blue.",
    organization: "solitary, pair, or gang (3-5)",
    languages: "Common",
    spellLikeAbilities: [],
    skills: {},
    special: {},
    immunities: [
      "Immune to sleep"
    ]
  },

  "Half-Orc": {
    source: "PFRPG",
    creatureType: "humanoid",
    subTypes: [
      "orc"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 1,
    hdVal: 8,
    dontUseRacialHD: true,
    cr: "1/3",
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 15,
      dex: 11,
      con: 12,
      int: 9,
      wis: 10,
      cha: 8
    },
    feats: [],
    attacks: [],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "",
    visualDescription: "",
    description: "As seen by civilized races, half-orcs are monstrosities, the result of perversion and violence-whether or not this is actually true. Half-orcs are rarely the result of loving unions, and as such are usually forced to grow up hard and fast, constantly fighting for protection or to make names for themselves. Half-orcs as a whole resent this treatment, and rather than play the part of the victim, they tend to lash out, unknowingly confirming the biases of those around them. A few feared, distrusted, and spat-upon half-orcs manage to surprise their detractors with great deeds and unexpected wisdom-though sometimes it's easier just to crack a few skulls. Some half-orcs spend their entire lives proving to full-blooded orcs that they are just as fierce. Others opt for trying to blend into human society, constantly demonstrating that they aren't monsters. Their need to always prove themselves worthy encourages half-orcs to strive for power and greatness within the society around them.",
    organization: "",
    languages: "Common, Orc",
    spellLikeAbilities: [],
    skills: {},
    special: {}
  },

  Human: {
    source: "PFRPG",
    creatureType: "humanoid",
    subTypes: [
      "human"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 1,
    hdVal: 8,
    dontUseRacialHD: true,
    cr: "1/3",
    racialFeatures: [],
    speed: {
      base: 30
    },
    abilities: {
      str: 15,
      dex: 12,
      con: 11,
      int: 8,
      wis: 10,
      cha: 9
    },
    feats: [],
    attacks: [],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "",
    visualDescription: "",
    description: "The physical characteristics of humans are as varied as the world's climes. From the dark-skinned tribesmen of the southern continents to the pale and barbaric raiders of the northern lands, humans possess a wide variety of skin colors, body types, and facial features. Generally speaking, humans' skin color assumes a darker hue the closer to the equator they live. Human Characters Humans are defined by their class levels-they do not possess racial HD. They have the following racial traits. +2 to One Ability Score:Human characters get a +2 bonus to one ability score of their choice at creation to represent their varied nature. Medium:Humans are Medium creatures and have no bonuses or penalties due to their size. Normal Speed:Humans have a base speed of 30 feet. Bonus Feat:Humans select one extra feat at 1st level. Skilled:Humans gain an additional skill rank at first level and one additional rank whenever they gain a level. Languages:Humans begin play speaking Common. Humans with high Intelligence scores can choose any languages they want (except secret languages, such as Druidic).",
    organization: "",
    languages: "Common",
    spellLikeAbilities: [],
    skills: {},
    special: {}
  },

};
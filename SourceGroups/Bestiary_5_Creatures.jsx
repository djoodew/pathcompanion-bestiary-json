
export const Bestiary_5Creatures = {
  "Lotus Leshy": {
    source: "Bestiary 5",
    creatureType: "plant",
    subTypes: [
      "leshy",
      "shapechanger"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Small",
    hd: 7,
    hdVal: 8,
    cr: 5,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 10,
      dex: 15,
      con: 16,
      int: 16,
      wis: 119,
      cha: 15
    },
    feats: [
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Knowledge (religion)",
        choiceSource: "Skill Focus"
      },
      {
        name: "Weapon Finesse",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Slam",
        name: "Slam",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Seed spray",
        name: "Seed spray",
        specialAbility: "nonlethal",
        type: "ranged",
        damage: "1d3",
        critical: "x3"
      }
    ],
    immunities: [
      "Immune to electricity, sonic"
    ],
    defense: {
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "warm lakes or ponds",
    visualDescription: "A plant whose body resembles a blooming lotus flower exudes an air of serenity.",
    description: "Enigmatic lotus leshys are wise guardians of secluded ponds and lakes. They spend most of their time in meditation as lotus flowers, sometimes for decades at a time. Although lotus leshys spend most of their time floating in solitary reflection, they do not shun the company of other creatures, and take humanoid form whenever they wish to speak. They find discussions of religion and philosophy particularly fascinating, and delight in fresh perspectives. Although they study deities of self-perfection and contemplation extensively, they do not revere such beings.\n\nLotus leshys speak indirectly rather than providing specific answers. They maintain that contemplation and discussion are far more valuable than concrete answers, whose usefulness is limited to the question at hand. In addition, they believe those who receive direct answers are more likely to blindly accept the words of others rather than thinking for themselves. When confronted with impatience, lotus leshys return to their lotus form rather than engaging further. They avoid combat whenever possible, preferring to calm tempers with their tranquil auras or lull violent creatures to sleep with their soporific pollen.\n\nA typical lotus leshy stands 3 feet tall, and weighs 15 pounds.",
    organization: "solitary",
    languages: "Druidic, Sylvan; plantspeech (lotuses)",
    spellLikeAbilities: [
      {
        name: "pass without trace",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "lily pad stride",
        casterLevel: 14,
        timesPerDay: -1
      }
    ],
    skills: {
      Diplomacy: {
        ranks: 7
      },
      Heal: {
        ranks: 7
      },
      "Knowledge (religion)": {
        ranks: 7
      },
      Perception: {
        ranks: 7
      },
      "Sense Motive": {
        ranks: 7
      },
      Stealth: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 4,
            situational: true,
            note: "in aquatic terrain"
          }
        ]
      },
      Survival: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 4,
            situational: true,
            note: "in aquatic terrain"
          }
        ]
      }
    },
    special: {
      "aura of tranquility": {
        type: "Su",
        text: "A lotus leshy exudes a calming aura within a 20-foot radius, which functions as calm emotions (Will DC 15 negates). A creature that succeeds at the save is immune to that leshy’s aura for 24 hours. The save DC is Charisma-based."
      },
      "dream pollen": {
        type: "Ex",
        text: "A lotus leshy can expel pollen in a 15-foot cone. All creatures within the cone (as well as those who take damage from seed spray) must succeed at a DC 16 Will save or fall asleep for 1d4 rounds. The save DC is Constitution-based."
      },
      "seed spray": {
        type: "Ex",
        text: "A lotus leshy can shoot several of its seeds at targets within 30 feet. It can shoot up to 6 seeds as a standard action, dividing the seeds as it chooses among targets in range. Each seed deals 1d3 points of nonlethal damage. The leshy rolls a single attack roll to determine the accuracy of all of the seeds in the spray. The attack has a ×3 critical multiplier, and the leshy makes only one roll to confirm a critical threat."
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "Small lotus flower; tree shape"
      }
    }
  },

  Dvorovoi: {
    source: "Bestiary 5",
    creatureType: "fey",
    subTypes: [],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Small",
    hd: 7,
    hdVal: 6,
    cr: 4,
    racialFeatures: [
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 15,
      dex: 16,
      con: 14,
      int: 9,
      wis: 13,
      cha: 16
    },
    feats: [
      {
        name: "Catch Off-Guard",
        type: "Combat"
      },
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Throw Anything",
        type: "Combat"
      },
      {
        name: "Two-Handed Thrower",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Pitchfork",
        name: "Pitchfork",
        damage: "1d8"
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "cold iron"
      },
      SR: {
        value: 15
      },
      naturalArmor: 3
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any land",
    visualDescription: "A wild mop of hair tops this small humanoid creature's head. It has prominent, gleaming eyes, and a toothy grin.",
    description: "Just as the domovoi protect the home, the dvorovoi protect a villager's yard and pasture. Some farmers try to lure dvorovoi to their farmsteads by leaving an offering of bread, sheep's wool, or shiny trinkets. When the owner of a farmstead with a dvorovoi purchases a new animal, he leads it through the yard to introduce it to the dvorovoi, hoping to gain the fey creature's approval of the new livestock. Though undeniably useful to have around for feeding the cattle and keeping predators away from flocks, dvorovoi can be capricious. Dvorovoi despise any white animal, and will never tolerate a white-furred horse or cow in their presence. For unknown reasons, dvorovoi doesn't hold this same grudge toward white chickens.",
    organization: "solitary or gathering (2-6)",
    languages: "Common, Sylvan; speak with animals",
    note: "UC See Ultimate Magic.",
    spellLikeAbilities: [
      {
        name: "speak with animals",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "charm animal",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "hide from animals",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "invisibility",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "break",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "reduce person",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "entangle",
        casterLevel: 6,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 4
      },
      Bluff: {
        ranks: 4
      },
      Diplomacy: {
        ranks: 3
      },
      "Handle Animal": {
        ranks: 6,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      "Knowledge (nature)": {
        ranks: 3
      },
      Perception: {
        ranks: 5
      },
      "Sense Motive": {
        ranks: 2
      },
      Stealth: {
        ranks: 6
      },
      Survival: {
        ranks: 2
      }
    },
    special: {
      compression: {
        universalMonsterAbility: "Compression"
      },
      "oversized weapons": {
        type: "Ex",
        text: "A dvorovoi can wield weapons sized for Medium creatures without penalty. Wild Empathy (Ex) This ability works like the druid ability of the same name. The dvorovoi's total bonus includes a +8 racial bonus."
      },
      "wild empathy": {
        type: "Ex",
        text: "This ability works like the druid ability of the same name. The dvorovoi's total bonus includes a +8 racial bonus.",
        preText: "+18"
      }
    }
  },

  Ovinnik: {
    source: "Bestiary 5",
    creatureType: "fey",
    subTypes: [],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Tiny",
    hd: 4,
    hdVal: 6,
    cr: 2,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 30,
      climb: 20
    },
    abilities: {
      str: 12,
      dex: 17,
      con: 15,
      int: 9,
      wis: 14,
      cha: 16
    },
    feats: [
      {
        name: "Go Unnoticed",
        type: "General"
      },
      {
        name: "Weapon Finesse",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 2,
        damageType: "cold iron"
      },
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any land",
    visualDescription: "Covered in sleek black fur, this vaguely feline humanoid holds flickering flames in its clawed hand.",
    description: "Ovinniks make their homes in granaries and drying houses. These thin, sleek, black-furred humanoids stand only a foot high. Their eyes and features seem catlike, but they bark like dogs to scare away thieves. No one knows why an ovinnik chooses to take up residence in a particular farm's threshing house, and few would call on them willingly. A wise farmer placates resident ovinniks with frequent gifts of warm milk, pancakes, or dead roosters. By tradition, before the new year farmers and their families go to the granary to learn their fates for the coming year. The ovinnik touches each of them in turn. If the touch is warm, the person will have good luck; if cold, she will suffer terrible misfortune in the days ahead.",
    organization: "solitary",
    languages: "Common, Sylvan",
    note: " See Advanced Player's Guide.",
    spellLikeAbilities: [
      {
        name: "daze",
        casterLevel: 4,
        timesPerDay: -1
      },
      {
        name: "produce flame",
        casterLevel: 4,
        timesPerDay: -1
      },
      {
        name: "divination",
        casterLevel: 4,
        limitations: "Times Per Month: 1 ",
        timesPerDay: -1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 2
      },
      Climb: {
        ranks: 0
      },
      "Escape Artist": {
        ranks: 4
      },
      Intimidate: {
        ranks: 2
      },
      "Knowledge (local)": {
        ranks: 2
      },
      "Knowledge (nature)": {
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
      "luck touch": {
        type: "Su",
        text: "With a claw attack or touch attack, an ovinnik can alter a creature's luck. If the target fails a DC 14 Will save, it either gains a +4 bonus or takes a -4 penalty (ovinnik's choice) on its next three d20 rolls. The target can choose to automatically fail the saving throw, but must choose before it knows whether the touch will be beneficial or harmful. The save DC is Charisma-based."
      },
      "sneak attack": {
        universalMonsterAbility: "Sneak Attack",
        bonus: "1d6"
      },
      compression: {
        universalMonsterAbility: "Compression"
      }
    },
    resistances: [
      {
        damageType: "fire",
        value: 5
      }
    ]
  },

  Witchcrow: {
    source: "Bestiary 5",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Tiny",
    hd: 3,
    hdVal: 10,
    cr: 1,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Detect Magic",
      "Low-Light Vision"
    ],
    speed: {
      base: 20,
      maneuverability: "Good",
      fly: 50
    },
    abilities: {
      str: 8,
      dex: 15,
      con: 8,
      int: 13,
      wis: 12,
      cha: 11
    },
    feats: [
      {
        name: "Combat Expertise",
        type: "Combat"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Improved Steal",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Talon",
        name: "2 Talons",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {},
    space: "2-1/2 ft.",
    reach: "5 ft.",
    environment: "cold and temperate forests and plains",
    visualDescription: "With a raucous cry and a flurry of feathered wings, this jet-black bird takes to the air, an unnatural gleam in its otherworldly eyes.",
    description: "The dreaded witchcrow, renowned as a harbinger of ill deeds and misfortune, preys on the weak and spies on the unwary. Clever, manipulative, and avaricious in the extreme, these foul birds have no conscience and know no fear. Witchcrows strive to steal not only victims' most cherished possessions, but their hopes and dreams as well. They delight in bringing anguish, sowing doubt even as they feign friendly advice designed to tear down alliances, dupe the gullible, and compromise the virtuous. Despite their deceptive nature, witchcrows can also hold valuable information-or come by such if paid to retrieve it. Witchcrows value arcane magic above all else, not simply as practitioners-the birds certainly have their own innate talent for witchcraft-but also as collectors. In exchange for their services or valuable information, witchcrows trade for scrolls, potions, and other lesser magic items. Even if such items go unoffered, an intense covetous streak drives witchcrows to pilfer these things if they sense them among a bargainer's possessions. Often, they single out arcane casters as targets for thievery, closing on casters from a distance with their vanish ability and executing flyby attacks to snatch away any baubles they desire. They carry such loot back to their nests to proudly share stories of their daring raids under the preening adulation of their peers. Prolonged spellcasting (casting spells with a casting time greater than 1 round) often attracts witchcrows in the area. They stalk spellcasters in groups, watching for opportunities to steal from them. Ecology Legends claim the first witchcrows spawned in the Dimension of Dreams-hatched from corrupted eggs nurtured by night hags and released onto other planes to carry out misdeeds. Whether this tale is true or not, these birds often keep company with hags. They sometimes treat with more powerful magical beings as messengers, spies, or informants, traveling in groups for mutual protection. Each covey or murder also follows a migratory pattern, moving between sites of power and areas of unusual magic. Greater witchcrows not only hoard arcane items, but also are dependent on them for reproduction, siphoning away subtle emanations of magical power to aid their gestation process. The likelihood of an egg hatching into a greater witchcrow increases in direct correlation to the time it spends in close proximity to such items. As a result, female witchcrows are much more active in stealing arcane objects for their nests and aggressively fend off rivals to retain any treasure in their possession. Witchcrows can lay a clutch of up to five eggs every year and remain fertile throughout their entire adult lifespan-approximately 20 to 30 years. As a greater witchcrow nears the end of its life, it experiences an unusual phenomenon called the Dreaming, in which it enters a fugue state lasting nearly a week. During this time, it molts and meditates as it comes to terms with the end of its life and attempts to pinpoint its final resting place. Usually, this is a place it particularly enjoyed in the past. Once the bird determines the location and fixates on it, the remaining members of its group invoke their apportation to send it there as its life's reward. Thereafter, the others argue and bicker over any magic items left behind by the elder witchcrow. Habitat & Society Witchcrows have an affinity for colder climes, and often masquerade as normal crows living in the fields and forests near the civilized settlements of other creatures. They particularly seek out magical societies where they can gain greater access to arcane items. On Golarion, this makes witchcrows most prevalent in Irrisen, where they've developed a terrible reputation-enough so that the witches of Irrisen (and the people they rule) both fear and revile the birds, marking them for destruction whenever they find them. In witchcrow society, greater witchcrows always establish dominance over their lesser kin, rising to lead large congregations of the malicious birds and shepherding them from one habitat to another. Witchcrows always mutually support one another even as they compete for the same resources, following a strict social hierarchy that aggrandizes the most successful thieves among them. Leaders of any given covey collect and dispense the spoils of their activities, assigning arcane treasures to the strongest of their kind during mating season. Those witchcrows that contribute little to the group's success often find themselves with empty nests during these gatherings-or cast out of the flock entirely.",
    organization: "solitary, pair, covey (3-12), or murder (13-30)",
    languages: "Aklo, Common; speak with animals (birds only)",
    note: " See Advanced Player's Guide.",
    spellLikeAbilities: [
      {
        name: "detect magic",
        casterLevel: 3,
        timesPerDay: -1
      },
      {
        name: "speak with animals",
        casterLevel: 3,
        limitations: "birds only",
        timesPerDay: -1
      },
      {
        name: "perceive cues",
        casterLevel: 3,
        timesPerDay: 3
      },
      {
        name: "vanish",
        casterLevel: 3,
        timesPerDay: 3
      },
      {
        name: "ventriloquism",
        casterLevel: 3,
        timesPerDay: 3
      },
      {
        name: "ill omen",
        casterLevel: 3,
        timesPerDay: 1
      },
      {
        name: "mirror image",
        casterLevel: 3,
        timesPerDay: 1
      }
    ],
    skills: {
      Fly: {
        ranks: 2
      },
      "Knowledge (arcana)": {
        ranks: 1
      },
      Perception: {
        ranks: 2
      },
      "Sleight of Hand": {
        ranks: 1,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Spellcraft: {
        ranks: 2
      },
      Stealth: {
        ranks: 1
      }
    },
    special: {},
    resistances: [
      {
        damageType: "cold",
        value: 5
      }
    ]
  },

  "Greater Witchcrow": {
    source: "Bestiary 5",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Small",
    hd: 5,
    hdVal: 10,
    cr: 3,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Detect Magic",
      "Low-Light Vision"
    ],
    speed: {
      base: 20,
      maneuverability: "Good",
      fly: 60
    },
    abilities: {
      str: 12,
      dex: 17,
      con: 12,
      int: 17,
      wis: 16,
      cha: 13
    },
    feats: [
      {
        name: "Combat Expertise",
        type: "Combat"
      },
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Improved Steal",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Talon",
        name: "2 Talons",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "cold and temperate forests and plains",
    visualDescription: "With a raucous cry and a flurry of feathered wings, this jet-black bird takes to the air, an unnatural gleam in its otherworldly eyes.",
    description: "The dreaded witchcrow, renowned as a harbinger of ill deeds and misfortune, preys on the weak and spies on the unwary. Clever, manipulative, and avaricious in the extreme, these foul birds have no conscience and know no fear. Witchcrows strive to steal not only victims' most cherished possessions, but their hopes and dreams as well. They delight in bringing anguish, sowing doubt even as they feign friendly advice designed to tear down alliances, dupe the gullible, and compromise the virtuous. Despite their deceptive nature, witchcrows can also hold valuable information-or come by such if paid to retrieve it. Witchcrows value arcane magic above all else, not simply as practitioners-the birds certainly have their own innate talent for witchcraft-but also as collectors. In exchange for their services or valuable information, witchcrows trade for scrolls, potions, and other lesser magic items. Even if such items go unoffered, an intense covetous streak drives witchcrows to pilfer these things if they sense them among a bargainer's possessions. Often, they single out arcane casters as targets for thievery, closing on casters from a distance with their vanish ability and executing flyby attacks to snatch away any baubles they desire. They carry such loot back to their nests to proudly share stories of their daring raids under the preening adulation of their peers. Prolonged spellcasting (casting spells with a casting time greater than 1 round) often attracts witchcrows in the area. They stalk spellcasters in groups, watching for opportunities to steal from them. Ecology Legends claim the first witchcrows spawned in the Dimension of Dreams-hatched from corrupted eggs nurtured by night hags and released onto other planes to carry out misdeeds. Whether this tale is true or not, these birds often keep company with hags. They sometimes treat with more powerful magical beings as messengers, spies, or informants, traveling in groups for mutual protection. Each covey or murder also follows a migratory pattern, moving between sites of power and areas of unusual magic. Greater witchcrows not only hoard arcane items, but also are dependent on them for reproduction, siphoning away subtle emanations of magical power to aid their gestation process. The likelihood of an egg hatching into a greater witchcrow increases in direct correlation to the time it spends in close proximity to such items. As a result, female witchcrows are much more active in stealing arcane objects for their nests and aggressively fend off rivals to retain any treasure in their possession. Witchcrows can lay a clutch of up to five eggs every year and remain fertile throughout their entire adult lifespan-approximately 20 to 30 years. As a greater witchcrow nears the end of its life, it experiences an unusual phenomenon called the Dreaming, in which it enters a fugue state lasting nearly a week. During this time, it molts and meditates as it comes to terms with the end of its life and attempts to pinpoint its final resting place. Usually, this is a place it particularly enjoyed in the past. Once the bird determines the location and fixates on it, the remaining members of its group invoke their apportation to send it there as its life's reward. Thereafter, the others argue and bicker over any magic items left behind by the elder witchcrow. Habitat & Society Witchcrows have an affinity for colder climes, and often masquerade as normal crows living in the fields and forests near the civilized settlements of other creatures. They particularly seek out magical societies where they can gain greater access to arcane items. On Golarion, this makes witchcrows most prevalent in Irrisen, where they've developed a terrible reputation-enough so that the witches of Irrisen (and the people they rule) both fear and revile the birds, marking them for destruction whenever they find them. In witchcrow society, greater witchcrows always establish dominance over their lesser kin, rising to lead large congregations of the malicious birds and shepherding them from one habitat to another. Witchcrows always mutually support one another even as they compete for the same resources, following a strict social hierarchy that aggrandizes the most successful thieves among them. Leaders of any given covey collect and dispense the spoils of their activities, assigning arcane treasures to the strongest of their kind during mating season. Those witchcrows that contribute little to the group's success often find themselves with empty nests during these gatherings-or cast out of the flock entirely.",
    organization: "solitary, pair, covey (3-12), or murder (13-30)",
    languages: "Abyssal, Aklo, Auran, Common; speak with animals (birds only)",
    note: " See Advanced Player's Guide.",
    spellLikeAbilities: [
      {
        name: "detect magic",
        casterLevel: 5,
        timesPerDay: -1
      },
      {
        name: "speak with animals",
        casterLevel: 5,
        limitations: "birds only",
        timesPerDay: -1
      },
      {
        name: "perceive cues",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "vanish",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "ventriloquism",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "ill omen",
        casterLevel: 5,
        timesPerDay: 1
      },
      {
        name: "mirror image",
        casterLevel: 5,
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 4
      },
      Fly: {
        ranks: 3
      },
      "Knowledge (arcana)": {
        ranks: 3
      },
      Perception: {
        ranks: 3
      },
      "Sense Motive": {
        ranks: 3
      },
      "Sleight of Hand": {
        ranks: 1,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Spellcraft: {
        ranks: 3
      },
      Stealth: {
        ranks: 5
      }
    },
    special: {
      hexes: {
        type: "Su",
        text: "A greater witchcrow uses hexes as a 5th-level witch. Invariably, these abilities include the cackle, evil eye, and misfortune hexes, and require a successful DC 15 Will save to negate or resist. Witchcrow cackling proves especially unnerving as it sounds like extremely mocking cawing.",
        preText: "cackle, evil eye [-2, 6 rounds], misfortune [1 round]"
      },
      apportation: {
        type: "Su",
        text: "In large enough groupings (such as a murder), greater witchcrows can perform a cooperative form of magic once per day to open a glowing ring in one place leading to somewhere else on the planet. This always entails a raucous aerial ritual, usually centered on those that wish to make use of this ability. The ritual functions like a teleportation circle (CL 17th), except it requires 1 minute of uninterrupted casting time, the circle doesn't need to be placed on a horizontal surface, and it is not invisible or hard to detect. After coming into existence, the edges of the circle glow and the effect stays in place for 1 minute. Most witchcrows loathe using this power, but some offer it as a service to those in need of quick travel, demanding a high price for such assistance-usually something in the bargainer's possession that is cherished, extremely valuable, and almost always magical. Hexes (Su) A greater witchcrow uses hexes as a 5th-level witch. Invariably, these abilities include the cackle, evil eye, and misfortune hexes, and require a successful DC 15 Will save to negate or resist. Witchcrow cackling proves especially unnerving as it sounds like extremely mocking cawing."
      }
    },
    resistances: [
      {
        damageType: "cold",
        value: 5
      }
    ]
  },

  Fastachee: {
    source: "Bestiary 5",
    creatureType: "fey",
    subTypes: [
    ],
    alignments: [
      "Neutral Good"
    ],
    size: "Tiny",
    hd: 18,
    hdVal: 6,
    cr: 11,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 6,
      dex: 23,
      con: 18,
      int: 19,
      wis: 22,
      cha: 17
    },
    feats: [
      {
        name: "Augment Summoning",
        type: "General"
      },
      {
        name: "Combat Casting",
        type: "General"
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
        name: "Skill Focus",
        type: "General",
        value: "Heal",
        choiceSource: "Skill Focus"
      },
      {
        name: "Spell Focus",
        type: "General",
        value: "Conjuration",
        choiceSource: "Spell Focus"
      },
      {
        name: "Toughness",
        type: "General"
      },
      {
        name: "Weapon Finesse",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Vines",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Vines",
        name: "2 Vines",
        damage: "1d8",
      }
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "cold iron"
      },
      naturalArmor: 8
    },
    space: "2 1/2 ft.",
    reach: "0 ft. (30 ft. with vines)",
    environment: "any",
    visualDescription: "This gaunt, two-foot-tall humanoid figure appears made of corn husks, and carries an oversized basket filled with corn.",
    description: "Fastachees are mysterious, wise, and generous fey who foster the growth of nearby plants. Many communities who interact with them revere them as bringers of food and medicine, as well as protectors of crops. These fey have a particularly strong connection to corn; they regularly project their senses through corn plants to monitor the health of the field and search the local area for threats. They prefer to avoid direct confrontation if possible, using their ability to originate their spells from corn plants to harass those they wish to chase away.",
    organization: "solitary or court (1 plus 2–26 other good–aligned fey)",
    languages: "Common, Sylvan",
    spellLikeAbilities: [
      {
        name: "plant growth",
        casterLevel: 11,
        timesPerDay: -1,
      },
      {
        name: "speak with plants",
        casterLevel: 11,
        timesPerDay: -1,
      },
      {
        name: "thorny entanglement",
        casterLevel: 11,
        timesPerDay: -1,
      },
      {
        name: "transport via plants",
        casterLevel: 11,
        timesPerDay: -1,
      },
      {
        name: "rebuke death",
        casterLevel: 11,
        timesPerDay: 9,
        spellInfo: {
          name: "Rebuke Death",
          school: "conjuration",
          subschool: "healing",
          casting_time: "1 standard action",
          components: "",
          range: "creature touched",
          duration: "instantaneous",
          spell_resistence: "no",
          description_formated: "<p>You can touch a living creature as a standard action, healing it for 1d4 points of damage plus 1 for every two cleric levels you possess. You can only use this ability on a creature that is below 0 hit points. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.</p>",
          source: "PFRPG",
          short_description: "As a standard action, touch a living creature to heal it for 1d4 + 5 hp. You can use this ability only on a creature below 0 hp.",
          material_costs: "NULL", 
          level: 1
        }
      }
    ],
    spellsPrepared: {
      casterLevel: 11,
      casterClass: "Druid",
      spellAbility: "wis",
      spells: [
        {
          name: "dispel magic, greater",
          level: 6
        },
        {
          name: "heal",
          level: 6
        },
        {
          name: "bear's endurance, mass",
          level: 6
        },
        {
          name: "baleful polymorph",
          level: 5
        },
        {
          name: "breath of life",
          level: 5
        },
        {
          name: "commune with nature",
          level: 5
        },
        {
          name: "wall of thorns",
          level: 5
        },
        {
          name: "command plants",
          level: 4
        },
        {
          name: "cure critical wounds",
          level: 4
        },
        {
          name: "flame strike",
          level: 4
        },
        {
          name: "freedom of movement",
          level: 4
        },
        {
          name: "spike stones",
          level: 4
        },
        {
          name: "aqueous orb",
          level: 3
        },
        {
          name: "call lightning",
          level: 3
        },
        {
          name: "cure serious wounds",
          level: 3
        },
        {
          name: "protection from energy",
          level: 3
        },
        {
          name: "remove disease",
          level: 3
        },
        {
          name: "spike growth",
          level: 3
        },
        {
          name: "barkskin",
          level: 2
        },
        {
          name: "cat's grace",
          level: 2
        },
        {
          name: "cure moderate wounds",
          level: 2
        },
        {
          name: "flaming sphere",
          level: 2
        },
        {
          name: "restoration, lesser",
          level: 2
        },
        {
          name: "soften earth and stone",
          level: 2
        },
        {
          name: "tree shape",
          level: 2
        },
        {
          name: "ant haul",
          level: 1
        },
        {
          name: "cure light wounds",
          level: 1
        },
        {
          name: "endure elements",
          level: 1
        },
        {
          name: "faerie fire",
          level: 1
        },
        {
          name: "goodberry",
          level: 1
        },
        {
          name: "longstrider",
          level: 1
        },
        {
          name: "obscuring mist",
          level: 1
        },
        {
          name: "create water",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "purify food and drink",
          level: 0
        },
        {
          name: "stabilize",
          level: 0
        }
      ],
    },
    skills: {
      Acrobatics: {
        ranks: 18
      },
      Craft0: {
        subSkill: "alchemy",
        ranks: 18
      },
      "Escape Artist": {
        ranks: 18
      },
      Heal: {
        ranks: 18
      },
      "Knowledge (arcana)": {
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
      Spellcraft: {
        ranks: 18
      },
      Survival: {
        ranks: 18
      }
    },
    special: {
      "bountiful basket": {
        type: "Su",
        text: "A fastachee carries a basket full of corn. Once per minute as a standard action, a fastachee can refill its basket with 2d6+12 ears of corn."
      },
      "plant projection": {
        type: "Su",
        text: "At will as a full-round action, a fastachee can project its senses through every non-creature plant within a radius of 1 mile per HD simultaneously. While projecting its senses in this way, the fastachee is flat-footed and can take no other actions. Alternatively, a fastachee can project its senses through a single ear of corn within 1 mile per HD as a free action. It continues projecting in this way for 1 round. The fastachee can treat either the corn plant it’s projecting through or its own body as the origin point for any of its spells or spell-like abilities."
      },
      "sow corn": {
        type: "Su",
        text: "As a standard action, a fastachee can plant an ear of corn in the ground to cause a stand of 1d6 corn stalks to grow to full height and maturity in the span of 1 minute."
      },
      "spells": {
        type: "Su",
        text: "A fastachee can cast spells as an 11th-level druid, and can spontaneously swap out any prepared druid spell for the summon nature’s ally spell of the same level. A fastachee also gains access to all spells and powers of the healing domain as an 11th-level cleric.",
      },//TODO: prepared spontaneous spell for summon nature's ally
      "susceptible to darkness": {
        type: "Ex",
        text: "A banelight gains much of its power from light. It can reactivate its daylight on its turn if the effect is dispelled, but a banelight in an area of darkness does not have a banelight aura, loses its fast healing, and is staggered.",
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        value: 10,
        condition: "while not in darkness"
      }
    }
  },

  "Deep One Hybrid": {
    source: "Bestiary 5",
    creatureType: "humanoid",
    subTypes: [
      "deep one",
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
      base: 20,
      swim: 30
    },
    abilities: {
      str: 11,
      dex: 15,
      con: 12,
      int: 10,
      wis: 9,
      cha: 6
    },
    feats: [],
    attacks: [],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "",
    visualDescription: "",
    description: "Born of mysterious origins and raised by unknowing foster parents, changelings are the children of hags and their tricked lovers. Most don't know of their monstrous origins, but there comes a time in every changeling's life when these roots begin to call out to their host, urging the confused girl toward some end she can't identify. When a hag of any sort conceives a child with a man, the result is a changeling. The male parent is usually killed and eaten by his partner before he can see the offspring. Changelings are, without exception, female, and almost always tall and slender. A changeling's hair is typically long and dark, and her skin abnormally pale, but she otherwise looks for all practical purposes like a member of her father's race. A frequent-but not universal-trait of changelings is noticeably mismatched eyes, each of which is a different color common among her father's race. Upon reaching puberty and adulthood, the average changeling born to a human father stands approximately 5-1/2 feet tall and weighs about 110 pounds. CHANGELING CHARACTERS Changelings are defined by their class levels- they don't have racial Hit Dice. All changelings have the following racial traits. -2 Constitution, +2 Wisdom, +2 Charisma: Changelings are frail, but are clever and comely. Hag Trait: A changeling possesses one of the following traits, depending on the type of hag her mother is. Hulking Changeling (Annis Hag): The changeling gains a +1 racial bonus on melee damage rolls. Green Widow (Green Hag): The changeling gains a +2 racial bonus on Bluff checks against creatures that are sexually attracted to her. Sea Lungs (Sea Hag): The changeling can hold her breath for a number of rounds equal to 3 x her Constitution score before she risks drowning. Claws: A changeling's hands and fingernails tend to harden and become sharp, granting her two claw attacks, each of which deals 1d4 points of damage. Natural Armor: Changelings have a +1 natural armor bonus. Darkvision: Changelings can see in the dark up to 60 feet. Languages: Changelings begin play speaking Common and the primary language of their host society. Changelings who have high Intelligence scores can choose from the following: Aklo, Draconic, Dwarven, Elven, Giant, Gnoll, Goblin, and Orc.",
    organization: "",
    languages: "Common",
    spellLikeAbilities: [],
    skills: {},
    special: {}
  },

  "Pyrausta (Familiar)": {
    legs: 2,
    arms: 2,
    source: "Bestiary 5",
    creatureType: "dragon",
    subTypes: ["fire"],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Diminutive",
    hd: 1,
    hdVal: 12,
    cr: "1/4",
    racialFeatures: [
    ],
    speed: {
      base: 20,
      maneuverability: "Good",
      fly: 60
    },
    abilities: {
      str: 6,
      dex: 15,
      con: 8,
      int: 5,
      wis: 12,
      cha: 13
    },
    feats: [
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Weapon Finesse",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d3",
        type: "primary",
        bonuses: [
          {
            source: "inherent",
            value: "1",
            appliesTo: "damageType",
            damageType: "fire"
          }
        ]
      }
    ],
    space: "1 ft.",
    reach: "0 ft.",
    environment: "any warm",
    visualDescription: "This minuscule dragon’s transparent wings and large eyes resemble those of a praying mantis. Its form glows bright with an inner fire.",
    description: "Though perhaps the smallest of dragons, pyraustas are not insecure about their size, for they lack the inflated egos so common among their larger kindred. Instead, pyraustas delight in being what they are, and live in the here and now. Though their natural life spans are similar to a human’s, their dependence on flame to keep their hearts beating means the average pyrausta meets its end much sooner. Some scholars believe that pyraustas, sometimes called “insect dragons” or “true dragonflies,” are spawned from the very hearts of volcanoes, where flickering flames are common. In truth, young pyraustas are conceived in the warmest months of the year, when swarms of the creatures gather high in the night skies and perform elaborate courtship rituals with their colorful flames, frolicking playfully in mid-flight. These swarms are often mistaken for fireflies, auroras, or other phenomena. A pyrausta’s flame and its heart are one, and its fiery breath changes color depending on the creature’s emotions. Pyraustas use their inner flames primarily to express themselves, creating vivid pyrotechnic displays to communicate their feelings. They can also use this flame as a weapon if necessary, but prefer not to. A typical pyrausta’s body is 9 inches long, though its wingspan is longer, and it weighs 1 to 2 pounds.",
    organization: "solitary, pair, or swarm (12-20)",
    languages: "Draconic",
    skills: {
      Fly: {
        ranks: 1
      },
      Perception: {
        ranks: 1
      }
    },
    spellLikeAbilities: [
      {
        name: "spark",
        casterLevel: 1
      }
    ],
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        saveType: "Reflex",
        distance: "10 ft. cone",
        text: "Usable every 1d4 rounds. Causes 1d4 fire damage. Reflex save for half damage."
      }
    }
  },

  "Wysp, Aether": {
    legs: 0,
    arms: 0,
    source: "Bestiary 5",
    creatureType: "outsider",
    subTypes: ["aether", "elemental"],
    alignments: [
      "Neutral"
    ],
    size: "Tiny",
    hd: 3,
    hdVal: 10,
    cr: 2,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      maneuverability: "Good",
      fly: 60
    },
    abilities: {
      str: 10,
      dex: 17,
      con: 14,
      int: 10,
      wis: 13,
      cha: 13
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
        weapon: "Tendril",
        name: "2 Tendrils",
        damage: "1d3",
        type: "primary"
      }
    ],
    space: "2 1/2 ft.",
    reach: "0 ft.",
    environment: "any (Elemental Planes or Ethereal Plane)",
    visualDescription: "This sphere of elemental matter emits a strange hum that resonates with elemental power.",
    description: "Wysps are five races of tiny elemental beings. Aether wysps were the first wysps, born of the same convergence between ethereal and elemental that spawned the aether element. For a time, the first wysps roamed the Ethereal and Elemental Planes freely in symphonies led by exuberant wysp conductors, playing out the otherworldly music of their resonances, but soon the elemental lords discovered the value of wysps as minions, and bred them into new races to support their forces in battle. Today, most wysps do their best to support allies, even giving their lives for their masters. Free symphonies of wysps still exist on their home planes and the Material Plane, though the enslavement of their kind has made them shy.\n\nEven in the harshest servitude, wysps retain their curious nature and intelligence. When free to act as they please, they are playful and carefree, with mild differences in personality between the elements. Aether wysps are shy and mysterious, air wisps are flighty and capricious, earth wysps are guarded and slow to trust, fire wysps are impetuous and full of bluster, and water wysps are gentle and nurturing.\n\nWysps happily offer their services to kind allies, though generally only elementally attuned creatures, kineticists, and spellcasters who summon elementals can make much use of a wysp’s assistance. A 7th-level spellcaster who has the Improved Familiar feat can gain a wysp as a familiar.",
    organization: "solitary, cloud (3–8), symphony (10–40 plus 1 wysp conductor), or retinue (1–6 plus a powerful elemental creature)",
    languages: "Aquan, Auran, Ignan, Terran",
    skills: {
      Bluff: {
        ranks: 3
      },
      Fly: {
        ranks: 1
      },
      "Disable Device": {
        ranks: 3
      },
      "Knowledge (planes)": {
        ranks: 1
      },
      "Perception": {
        ranks: 3
      },
      "Sense Motive": {
        ranks: 3
      },
      "Sleight of Hand": {
        ranks: 3
      },
      "Stealth": {
        ranks: 3
      }
    },
    special: {
      "living battery": {
        name: "Living Battery",
        type: "Ex",
        text: "As an immediate action, a wysp can kill itself to cause a creature benefiting from its resonance to heal 2 hit points for each of that creature’s HD. If the wysp uses this ability, its death can’t be prevented, and its life can’t be restored by any effect less than true resurrection, miracle, or wish, even if such an effect can normally revive an outsider."
      },
      "resonance": {
        name: "Resonance",
        type: "Ex",
        text: "A wysp’s natural resonance strengthens the power of its element. The wysp grants a +2 competence bonus on attack rolls and damage rolls to all creatures within 30 feet with an elemental subtype that matches the wysp’s, and to the DCs of all racial spell-like, supernatural, and extraordinary abilities of such creatures (as usual, this does not include creatures assuming an elemental form).\n\nKineticists within 30 feet who share the wysp’s element gain a +1 competence bonus on attack rolls and damage rolls. The wysp’s statistics already include these bonuses."
      },
      "servitor": {
        name: "Servitor",
        type: "Ex",
        text: "A wysp is a natural servitor. When it uses the aid another action to assist a creature benefiting from its resonance, the wisp can grant that creature a +4 bonus instead of +2. No other effect can increase this bonus beyond +4."
      },
      "lesser telekinesis": {
        name: "Lesser Telekinesis",
        type: "Su",
        text: "By extending its strands of aether, an aether wysp can move small objects at a distance, as per mage hand except that lesser telekinesis is a supernatural ability and can move magical or non-magical objects weighing up to 10 pounds."
      },
    }
  },

  "Wysp, Air": {
    legs: 0,
    arms: 0,
    source: "Bestiary 5",
    creatureType: "outsider",
    subTypes: ["air", "elemental"],
    alignments: [
      "Neutral"
    ],
    size: "Tiny",
    hd: 3,
    hdVal: 10,
    cr: 2,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      maneuverability: "Perfect",
      fly: 100
    },
    abilities: {
      str: 10,
      dex: 19,
      con: 12,
      int: 10,
      wis: 13,
      cha: 13
    },
    feats: [
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Weapon Finesse",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Tendril",
        name: "2 Tendrils",
        damage: "1d3",
        type: "primary"
      }
    ],
    space: "2 1/2 ft.",
    reach: "0 ft.",
    environment: "any (Elemental Planes or Ethereal Plane)",
    visualDescription: "This sphere of elemental matter emits a strange hum that resonates with elemental power.",
    description: "Wysps are five races of tiny elemental beings. Aether wysps were the first wysps, born of the same convergence between ethereal and elemental that spawned the aether element. For a time, the first wysps roamed the Ethereal and Elemental Planes freely in symphonies led by exuberant wysp conductors, playing out the otherworldly music of their resonances, but soon the elemental lords discovered the value of wysps as minions, and bred them into new races to support their forces in battle. Today, most wysps do their best to support allies, even giving their lives for their masters. Free symphonies of wysps still exist on their home planes and the Material Plane, though the enslavement of their kind has made them shy.\n\nEven in the harshest servitude, wysps retain their curious nature and intelligence. When free to act as they please, they are playful and carefree, with mild differences in personality between the elements. Aether wysps are shy and mysterious, air wisps are flighty and capricious, earth wysps are guarded and slow to trust, fire wysps are impetuous and full of bluster, and water wysps are gentle and nurturing.\n\nWysps happily offer their services to kind allies, though generally only elementally attuned creatures, kineticists, and spellcasters who summon elementals can make much use of a wysp’s assistance. A 7th-level spellcaster who has the Improved Familiar feat can gain a wysp as a familiar.",
    organization: "solitary, cloud (3–8), symphony (10–40 plus 1 wysp conductor), or retinue (1–6 plus a powerful elemental creature)",
    languages: "Auran",
    skills: {
      Bluff: {
        ranks: 3
      },
      "Disable Device": {
        ranks: 3
      },
      "Knowledge (arcana)": {
        ranks: 1
      },
      "Knowledge (planes)": {
        ranks: 3
      },
      "Knowledge (religion)": {
        ranks: 1
      },
      "Perception": {
        ranks: 3
      },
      "Sense Motive": {
        ranks: 3
      },
      "Stealth": {
        ranks: 3
      }
    },
    special: {
      "living battery": {
        name: "Living Battery",
        type: "Ex",
        text: "As an immediate action, a wysp can kill itself to cause a creature benefiting from its resonance to heal 2 hit points for each of that creature’s HD. If the wysp uses this ability, its death can’t be prevented, and its life can’t be restored by any effect less than true resurrection, miracle, or wish, even if such an effect can normally revive an outsider."
      },
      "resonance": {
        name: "Resonance",
        type: "Ex",
        text: "A wysp’s natural resonance strengthens the power of its element. The wysp grants a +2 competence bonus on attack rolls and damage rolls to all creatures within 30 feet with an elemental subtype that matches the wysp’s, and to the DCs of all racial spell-like, supernatural, and extraordinary abilities of such creatures (as usual, this does not include creatures assuming an elemental form).\n\nKineticists within 30 feet who share the wysp’s element gain a +1 competence bonus on attack rolls and damage rolls. The wysp’s statistics already include these bonuses."
      },
      "servitor": {
        name: "Servitor",
        type: "Ex",
        text: "A wysp is a natural servitor. When it uses the aid another action to assist a creature benefiting from its resonance, the wisp can grant that creature a +4 bonus instead of +2. No other effect can increase this bonus beyond +4."
      },
    }
  },

  "Wysp, Earth": {
    legs: 0,
    arms: 0,
    source: "Bestiary 5",
    creatureType: "outsider",
    subTypes: ["earth", "elemental"],
    alignments: [
      "Neutral"
    ],
    size: "Tiny",
    hd: 3,
    hdVal: 10,
    cr: 2,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Tremorsense 30 ft."
    ],
    speed: {
      base: 20,
      burrow: 20
    },
    abilities: {
      str: 14,
      dex: 13,
      con: 14,
      int: 10,
      wis: 13,
      cha: 13
    },
    feats: [
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Toughness",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Tendril",
        name: "2 Tendrils",
        damage: "1d3",
        type: "primary"
      }
    ],
    space: "2 1/2 ft.",
    reach: "0 ft.",
    environment: "any (Elemental Planes or Ethereal Plane)",
    visualDescription: "This sphere of elemental matter emits a strange hum that resonates with elemental power.",
    description: "Wysps are five races of tiny elemental beings. Aether wysps were the first wysps, born of the same convergence between ethereal and elemental that spawned the aether element. For a time, the first wysps roamed the Ethereal and Elemental Planes freely in symphonies led by exuberant wysp conductors, playing out the otherworldly music of their resonances, but soon the elemental lords discovered the value of wysps as minions, and bred them into new races to support their forces in battle. Today, most wysps do their best to support allies, even giving their lives for their masters. Free symphonies of wysps still exist on their home planes and the Material Plane, though the enslavement of their kind has made them shy.\n\nEven in the harshest servitude, wysps retain their curious nature and intelligence. When free to act as they please, they are playful and carefree, with mild differences in personality between the elements. Aether wysps are shy and mysterious, air wisps are flighty and capricious, earth wysps are guarded and slow to trust, fire wysps are impetuous and full of bluster, and water wysps are gentle and nurturing.\n\nWysps happily offer their services to kind allies, though generally only elementally attuned creatures, kineticists, and spellcasters who summon elementals can make much use of a wysp’s assistance. A 7th-level spellcaster who has the Improved Familiar feat can gain a wysp as a familiar.",
    organization: "solitary, cloud (3–8), symphony (10–40 plus 1 wysp conductor), or retinue (1–6 plus a powerful elemental creature)",
    languages: "Terran",
    skills: {
      Bluff: {
        ranks: 3
      },
      Climb: {
        ranks: 3
      },
      "Knowledge (dungeoneering)": {
        ranks: 2
      },
      "Knowledge (engineering)": {
        ranks: 2
      },
      "Knowledge (planes)": {
        ranks: 2
      },
      "Perception": {
        ranks: 3
      },
      "Sense Motive": {
        ranks: 3
      },
    },
    special: {
      "living battery": {
        name: "Living Battery",
        type: "Ex",
        text: "As an immediate action, a wysp can kill itself to cause a creature benefiting from its resonance to heal 2 hit points for each of that creature’s HD. If the wysp uses this ability, its death can’t be prevented, and its life can’t be restored by any effect less than true resurrection, miracle, or wish, even if such an effect can normally revive an outsider."
      },
      "resonance": {
        name: "Resonance",
        type: "Ex",
        text: "A wysp’s natural resonance strengthens the power of its element. The wysp grants a +2 competence bonus on attack rolls and damage rolls to all creatures within 30 feet with an elemental subtype that matches the wysp’s, and to the DCs of all racial spell-like, supernatural, and extraordinary abilities of such creatures (as usual, this does not include creatures assuming an elemental form).\n\nKineticists within 30 feet who share the wysp’s element gain a +1 competence bonus on attack rolls and damage rolls. The wysp’s statistics already include these bonuses."
      },
      "servitor": {
        name: "Servitor",
        type: "Ex",
        text: "A wysp is a natural servitor. When it uses the aid another action to assist a creature benefiting from its resonance, the wisp can grant that creature a +4 bonus instead of +2. No other effect can increase this bonus beyond +4."
      },
    }
  },

  "Wysp, Fire": {
    legs: 0,
    arms: 0,
    source: "Bestiary 5",
    creatureType: "outsider",
    subTypes: ["fire", "elemental"],
    alignments: [
      "Neutral"
    ],
    size: "Tiny",
    hd: 3,
    hdVal: 10,
    cr: 2,
    racialFeatures: [
      "Darkvision 60 ft.",
    ],
    speed: {
      base: 60,
      fly: 20,
      flyManeuverability: "Poor"
    },
    abilities: {
      str: 10,
      dex: 15,
      con: 12,
      int: 10,
      wis: 13,
      cha: 13
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
        weapon: "Tendril",
        name: "2 Tendrils",
        damage: "1d3",
        type: "primary",
        specialAbility: "burn"
      }
    ],
    space: "2 1/2 ft.",
    reach: "0 ft.",
    environment: "any (Elemental Planes or Ethereal Plane)",
    visualDescription: "This sphere of elemental matter emits a strange hum that resonates with elemental power.",
    description: "Wysps are five races of tiny elemental beings. Aether wysps were the first wysps, born of the same convergence between ethereal and elemental that spawned the aether element. For a time, the first wysps roamed the Ethereal and Elemental Planes freely in symphonies led by exuberant wysp conductors, playing out the otherworldly music of their resonances, but soon the elemental lords discovered the value of wysps as minions, and bred them into new races to support their forces in battle. Today, most wysps do their best to support allies, even giving their lives for their masters. Free symphonies of wysps still exist on their home planes and the Material Plane, though the enslavement of their kind has made them shy.\n\nEven in the harshest servitude, wysps retain their curious nature and intelligence. When free to act as they please, they are playful and carefree, with mild differences in personality between the elements. Aether wysps are shy and mysterious, air wisps are flighty and capricious, earth wysps are guarded and slow to trust, fire wysps are impetuous and full of bluster, and water wysps are gentle and nurturing.\n\nWysps happily offer their services to kind allies, though generally only elementally attuned creatures, kineticists, and spellcasters who summon elementals can make much use of a wysp’s assistance. A 7th-level spellcaster who has the Improved Familiar feat can gain a wysp as a familiar.",
    organization: "solitary, cloud (3–8), symphony (10–40 plus 1 wysp conductor), or retinue (1–6 plus a powerful elemental creature)",
    languages: "Ignan",
    skills: {
      Bluff: {
        ranks: 3
      },
      Intimidate: {
        ranks: 3
      },
      "Knowledge (planes)": {
        ranks: 3
      },
      "Perception": {
        ranks: 3
      },
      "Sense Motive": {
        ranks: 3
      },
      "Stealth": {
        ranks: 3
      },
    },
    special: {
      "living battery": {
        name: "Living Battery",
        type: "Ex",
        text: "As an immediate action, a wysp can kill itself to cause a creature benefiting from its resonance to heal 2 hit points for each of that creature’s HD. If the wysp uses this ability, its death can’t be prevented, and its life can’t be restored by any effect less than true resurrection, miracle, or wish, even if such an effect can normally revive an outsider."
      },
      "resonance": {
        name: "Resonance",
        type: "Ex",
        text: "A wysp’s natural resonance strengthens the power of its element. The wysp grants a +2 competence bonus on attack rolls and damage rolls to all creatures within 30 feet with an elemental subtype that matches the wysp’s, and to the DCs of all racial spell-like, supernatural, and extraordinary abilities of such creatures (as usual, this does not include creatures assuming an elemental form).\n\nKineticists within 30 feet who share the wysp’s element gain a +1 competence bonus on attack rolls and damage rolls. The wysp’s statistics already include these bonuses."
      },
      "servitor": {
        name: "Servitor",
        type: "Ex",
        text: "A wysp is a natural servitor. When it uses the aid another action to assist a creature benefiting from its resonance, the wisp can grant that creature a +4 bonus instead of +2. No other effect can increase this bonus beyond +4."
      },
      burn: {
        universalMonsterAbility: "Burn",
        saveDC: 10,
        damage: "1d6"
      }
    }
  },

  "Wysp, Water": {
    legs: 0,
    arms: 0,
    source: "Bestiary 5",
    creatureType: "outsider",
    subTypes: ["water", "elemental"],
    alignments: [
      "Neutral"
    ],
    size: "Tiny",
    hd: 3,
    hdVal: 10,
    cr: 2,
    racialFeatures: [
      "Darkvision 60 ft.",
    ],
    speed: {
      base: 30,
      fly: 90,
    },
    abilities: {
      str: 13,
      dex: 12,
      con: 14,
      int: 10,
      wis: 13,
      cha: 13
    },
    feats: [
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        value: "Tendril",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Tendril",
        name: "2 Tendrils",
        damage: "1d3",
        type: "primary",
      }
    ],
    space: "2 1/2 ft.",
    reach: "0 ft.",
    environment: "any (Elemental Planes or Ethereal Plane)",
    visualDescription: "This sphere of elemental matter emits a strange hum that resonates with elemental power.",
    description: "Wysps are five races of tiny elemental beings. Aether wysps were the first wysps, born of the same convergence between ethereal and elemental that spawned the aether element. For a time, the first wysps roamed the Ethereal and Elemental Planes freely in symphonies led by exuberant wysp conductors, playing out the otherworldly music of their resonances, but soon the elemental lords discovered the value of wysps as minions, and bred them into new races to support their forces in battle. Today, most wysps do their best to support allies, even giving their lives for their masters. Free symphonies of wysps still exist on their home planes and the Material Plane, though the enslavement of their kind has made them shy.\n\nEven in the harshest servitude, wysps retain their curious nature and intelligence. When free to act as they please, they are playful and carefree, with mild differences in personality between the elements. Aether wysps are shy and mysterious, air wisps are flighty and capricious, earth wysps are guarded and slow to trust, fire wysps are impetuous and full of bluster, and water wysps are gentle and nurturing.\n\nWysps happily offer their services to kind allies, though generally only elementally attuned creatures, kineticists, and spellcasters who summon elementals can make much use of a wysp’s assistance. A 7th-level spellcaster who has the Improved Familiar feat can gain a wysp as a familiar.",
    organization: "solitary, cloud (3–8), symphony (10–40 plus 1 wysp conductor), or retinue (1–6 plus a powerful elemental creature)",
    languages: "Aquan",
    skills: {
      Bluff: {
        ranks: 3
      },
      Heal: {
        ranks: 3
      },
      "Knowledge (planes)": {
        ranks: 1
      },
      "Perception": {
        ranks: 3
      },
      "Sense Motive": {
        ranks: 3
      },
      "Stealth": {
        ranks: 3
      },
      "Swim": {
        ranks: 2
      },
    },
    special: {
      "living battery": {
        name: "Living Battery",
        type: "Ex",
        text: "As an immediate action, a wysp can kill itself to cause a creature benefiting from its resonance to heal 2 hit points for each of that creature’s HD. If the wysp uses this ability, its death can’t be prevented, and its life can’t be restored by any effect less than true resurrection, miracle, or wish, even if such an effect can normally revive an outsider."
      },
      "resonance": {
        name: "Resonance",
        type: "Ex",
        text: "A wysp’s natural resonance strengthens the power of its element. The wysp grants a +2 competence bonus on attack rolls and damage rolls to all creatures within 30 feet with an elemental subtype that matches the wysp’s, and to the DCs of all racial spell-like, supernatural, and extraordinary abilities of such creatures (as usual, this does not include creatures assuming an elemental form).\n\nKineticists within 30 feet who share the wysp’s element gain a +1 competence bonus on attack rolls and damage rolls. The wysp’s statistics already include these bonuses."
      },
      "servitor": {
        name: "Servitor",
        type: "Ex",
        text: "A wysp is a natural servitor. When it uses the aid another action to assist a creature benefiting from its resonance, the wisp can grant that creature a +4 bonus instead of +2. No other effect can increase this bonus beyond +4."
      },
      drench: {
        name: "Drench",
        type: "Ex",
        text: "A water wysp’s touch puts out Large or smaller non-magical flames. The creature can dispel magical fire it touches as per dispel magic (caster level = the wysp’s HD)."
      }
    }
  },

  "Gegenees": {
    legs: 2,
    arms: 6,
    source: "Bestiary 5",
    creatureType: "monstrous humanoid",
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Huge",
    hd: 20,
    hdVal: 10,
    cr: 16,
    racialFeatures: [
      "Low-Light Vision",
      "Darkvision 60 ft."
    ],
    defense: {
      naturalArmor: 20
    },
    speed: {
      base: 50
    },
    abilities: {
      str: 26,
      dex: 14,
      con: 25,
      int: 10,
      wis: 13,
      cha: 11
    },
    feats: [
      {
        name: "Awesome Blow",
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
        name: "Improved Bull Rush",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Intimidating Prowess",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Quick Draw",
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
        weapon: "Club",
        damage: "2d6",
      },
      {
        weapon: "Heavy pick",
        name: "2x Heavy Picks",
        damage: "2d6",
      },
      {
        weapon: "Slam",
        name: "2x Slams",
        damage: "2d6",
        special: "grab",
        type: "primary"
      },
      {
        weapon: "Slam",
        name: "6x Slams",
        damage: "2d6",
        special: "grab",
        type: "primary"
      },
    ],
    space: "15 ft.",
    reach: "15 ft.",
    environment: "any temperate or warm land",
    visualDescription: "Tattoos cover the blue skin of this towering, six-armed giant, and large tusks jut from his lower jaw.",
    description: "The gegenees are a race of six-armed giants who dwell in lands far from civilization. They prefer weapons such as clubs and spears, dress in skins and furs, and embellish their bodies with elaborate tattoos and ritual scarification. Though not malevolent, gegenees are territorial, superstitious, and exceptionally xenophobic.\n\nThey have an innate distrust for arcane spellcasters in particular, and gegenees with innate sorcerous talents are quickly exiled from their clans.\n\nGegenees tattoos are stylized patterns that tell the story of the individual as well as the histories of that gegenees’s most honored forebears.\n\nConsequently, gegenees are particularly infuriated by creatures that attempt to copy their tattoo patterns for aesthetic purposes, as this is tantamount to laying claim to the family legacies of the gegenees.\n\nEach gegenees clan is guided by a chieftain, who is advised by the venerable mothers— the clan’s three oldest and most revered women. Possessing great wisdom and supernatural gifts, the venerable mothers are also blind, for they pluck out their eyes to prove their devotion to the clan. Their every word is considered sacrosanct.\n\nGegenees are 21 feet tall and weigh 14,000 pounds.",
    organization: "solitary, hunting party (2–5), or clan (6–25 plus 1 clan headman [barbarian, druid, or ranger of 4th–8th level] and 3 venerable mothers [oracles or witches of 3rd–5th level])",
    languages: "Giant",
    skills: {
      Climb: {
        ranks: 5,
      },
      Craft0: {
        subSkill: "any one",
        ranks: 3,
      },
      Intimidate: {
        ranks: 20,
      },
      Perception: {
        ranks: 20,
      },
      Stealth: {
        ranks: 12,
      },
      Survival: {
        ranks: 7,
      },
      Swim: {
        ranks: 5,
      },
    },
    special: {
      clobber: {
        type: "Ex",
        text: "When a gegenees damages a creature with three or more successful melee attacks in the same round, the gegenees can perform an awesome blow combat maneuver against the creature as a free action. If the awesome blow succeeds, the target must succeed at a DC 30 Fortitude save or be dazed for 1d4 rounds, in addition to the normal effects of the awesome blow. The save DC is Strength-based."
      },
      "extra attacks": {
        type: "Ex",
        text: "When a gegenees attacks as a standard action, it can make two additional attacks, even if its movement would normally restrict it to one attack. These additional attacks must be made with its other arms, and are made at its highest base attack bonus with a –2 penalty."
      },
      grab: {
        universalMonsterAbility: "Grab"
      },
      "multiweapon mastery": {
        type: "Ex",
        text: "A gegenees never takes penalties to its attack roll when fighting with multiple weapons."
      },
    }
  },
  "Bagiennik": {
    legs: 2,
    arms: 2,
    source: "Bestiary 5",
    creatureType: "fey",
    subTypes: ["aquatic"],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Small",
    hd: 12,
    hdVal: 6,
    cr: 6,
    racialFeatures: [
    ],
    defense: {
      naturalArmor: 4,
      DR: [{
        type: "cold iron",
        value: 5
      }],
      resistances: [{
        type: "acid",
        value: 5
      }],
      immunity: [{
        type: "fire",
        value: 5
      }]
    },
    speed: {
      base: 30,
      swim: 40
    },
    abilities: {
      str: 8,
      dex: 14,
      con: 13,
      int: 15,
      wis: 10,
      cha: 17
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Self-Sufficient",
        type: "General"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Heal",
        choiceSource: "Skill Focus"
      },
      {
        name: "Toughness",
        type: "General"
      },
      {
        name: "Weapon Finesse",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        value: "Nasal Spray",
        type: "Combat"
      }
    ],
    attacks: [
      
      {
        weapon: "Claw",
        name: "2x Claws",
        damage: "1d4",
      }
    ],
    space: "5 ft.",
    reach: "5 ft.",
    environment: "cold rivers",
    visualDescription: "This small, lizardlike creature has a humanoid upper body and a long tail with frilled extensions.",
    treasure: "none",
    description: "Bagienniks are small, amphibious fey that hide in tall reeds along rivers. They frequently dig into the silt beneath the pools of hot springs, where they take long naps in the warm and comforting waters and play pranks on foolish bathers who swim too close to the bagienniks’ hiding spots. Despite their capricious nature, the creatures are sought for their healing abilities. They delight in curing maladies and burning away infirmities with their caustic nasal spray.\n\nA local bagiennik is considered a boon in many river towns. Citizens of such settlements often venture to the rivers with offerings, hoping to encourage the fey to stay close and heal their families. A bagiennik that finds a generous town might invite its extended family to settle in, testing the patience and largesse of its hosts.",
    organization: "solitary, pair, or gang (3-8)",
    languages: "Common, Sylvan",
    spellLikeAbilities: [
      {
        name: "cure light wounds",
        casterLevel: 7,
        timesPerDay: 3
      },
      {
        name: "remove disease",
        casterLevel: 7,
        timesPerDay: 3
      },
      {
        name: "cure moderate wounds",
        casterLevel: 7,
        timesPerDay: 1
      },
      {
        name: "remove blindness/deafness",
        casterLevel: 7,
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 4,
      },
      Diplomacy: {
        ranks: 6,
      },
      "Escape Artist": {
        ranks: 4,
      },
      Heal: {
        ranks: 12,
        bonuses: [
          {
            source: "inherent",
            value: 7,
          }
        ]
      },
      "Knowledge (arcana)": {
        ranks: 3,
      },
      "Knowledge (nature)": {
        ranks: 7,
      },
      Perception: {
        ranks: 12,
        bonuses: [
          {
            source: "inherent",
            value: 4,
          }
        ]
      },
      "Sense Motive": {
        ranks: 11,
      },
      Stealth: {
        ranks: 12,
      },
      Survival: {
        ranks: 8
      },
      Swim: {
        ranks: 9
      },
      "Use Magic Device": {
        ranks: 12,
      }
    },
    special: {
      amphibious: {
        universalMonsterAbility: "Amphibious"
      },
      "disease scent": {
        type: "Ex",
        text: "A bagiennik can smell a diseased creature as if using the scent ability. It can discern whether the diseased creature is the source of a disease or merely a carrier; in the latter case, the bagiennik often seeks out the creature and attempts to purge its maladies."
      },
      "nasal spray": {
        universalMonsterAbility: "Nasal Spray"
      },
      "nasal burn": {
        type: "Su",
        text: "A bagiennik’s nasal spray deals 1d6 points of fire damage to victims in subsequent rounds after it strikes a target (as per the burn universal monster ability), but it can also cure other maladies. Each round in which a victim takes damage from a bagiennik’s nasal spray, that victim can attempt a DC 17 Fortitude save. If the victim succeeds at this save, it heals 1 point of ability damage to an ability score of its choice. If the result exceeds the DC by 5 or more, the victim can also attempt to remove a single disease or poison currently affecting her as per remove disease or neutralize poison (caster level 7th). If the damage from the bagiennik’s nasal burn is reduced or negated in any way, the victim can’t attempt this special Fortitude save that round. The save DC is Constitution-based."
      },
    }
  },
};
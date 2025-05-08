
export const Chronicle_Of_The_RighteousCreatures = {
  Cervinal: {
    source: "Chronicle Of The Righteous",
    creatureType: "outsider",
    subTypes: [
      "agathion",
      "extraplanar",
      "good"
    ],
    alignments: [
      "Neutral Good"
    ],
    size: "Large",
    hd: 21,
    hdVal: 10,
    cr: 17,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Detect Scrying",
      "Low-Light Vision",
      "See Invisibility"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 31,
      dex: 20,
      con: 26,
      int: 19,
      wis: 24,
      cha: 19
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
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Improved Natural Attack",
        type: "Monster",
        value: "Slams",
        choiceSource: "Improved Natural Attack"
      },
      {
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Mobility",
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
        weapon: "Hoof",
        name: "2 Hooves",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Slam",
        name: "2 Slams",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Composite longbow",
        enchantments: [
          {
            name: "Enhancement Bonus +3",
            source: "inherent"
          }
        ],
        name: "Composite longbow",
        damage: "1d8",
        strBonus: 10
      }
    ],
    defense: {
      saves: {
        All: [
          {
            value: 4,
            note: "vs. poison"
          }
        ]
      },
      DR: {
        value: 10,
        damageType: "evil and silver"
      },
      SR: {
        value: 28
      },
      naturalArmor: 17
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "any (Nirvana)",
    visualDescription: "Stately antlers emerge from the crown of this imposing man's bald head. Tufts of fur jut from elsewhere on his upper body, while his lower half is entirely that of a regal elk.",
    description: "Sometimes termed the \"knights\" of the agathions, cervinals have gained a reputation throughout the Outer Planes for their battle prowess, noble natures, and admirable wisdom. They stand almost 11 feet tall with magnificent racks of antlers 4 feet across, and weigh over 2,000 pounds. Cervinals manifest from the souls of good leaders, including military officers, regents, and church officials. In the good-aligned planes, they most often serve as generals in battles against fiends, but they also develop strategies to combat everyday evil in the multiverse, secure evil artifacts, and coordinate efforts between agathions and other celestial races.",
    organization: "solitary, collective (2-3), or herd (4-6)",
    languages: "Celestial, Draconic, Infernal; speak with animals, truespeech",
    spellLikeAbilities: [
      {
        name: "detect scrying",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "see invisibility",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "speak with animals",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "discern lies",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "freedom of movement",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "teleport, greater",
        casterLevel: 20,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: -1
      },
      {
        name: "invisibility purge",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "light",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "message",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "clairaudience/clairvoyance",
        casterLevel: 20,
        timesPerDay: 5
      },
      {
        name: "cure critical wounds",
        casterLevel: 20,
        timesPerDay: 5
      },
      {
        name: "dismissal",
        casterLevel: 20,
        timesPerDay: 5
      },
      {
        name: "dispel magic",
        casterLevel: 20,
        timesPerDay: 5
      },
      {
        name: "breath of life",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "bull's strength, mass",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "plane shift",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "discern location",
        casterLevel: 20,
        timesPerDay: 1
      },
      {
        name: "scrying, greater",
        casterLevel: 20,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 24
      },
      Climb: {
        ranks: 21
      },
      Diplomacy: {
        ranks: 24
      },
      Intimidate: {
        ranks: 21
      },
      "Knowledge (arcana)": {
        ranks: 24
      },
      "Knowledge (nature)": {
        ranks: 24
      },
      "Knowledge (planes)": {
        ranks: 21
      },
      Perception: {
        ranks: 21
      },
      Stealth: {
        ranks: 21
      },
      Survival: {
        ranks: 21
      }
    },
    special: {
      "powerful charge": {
        universalMonsterAbility: "Powerful Charge",
        type: "Ex",
        weaponName: "r"
      },
      gallop: {
        type: "Ex",
        text: "When a cervinal uses a full-round action to run, it may move up to six times its speed. Stagger (Ex) Any creature that takes damage from a cervinal's powerful charge attack must succeed at a DC 28 Fortitude save or be staggered for 1 round. The save DC is Constitution-based."
      },
      "lay on hands": {
        type: "Ex",
        preText: "10d6, 14/day, as a 20th-level paladin"
      },
      "undersized weapons": {
        type: "Ex"
      }
    }
  },

  "Balisse Angel": {
    source: "Chronicle Of The Righteous",
    creatureType: "outsider",
    subTypes: [
      "angel",
      "extraplanar",
      "good"
    ],
    alignments: [
      "Neutral Good"
    ],
    size: "Medium",
    hd: 10,
    hdVal: 10,
    cr: 8,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Detect Evil"
    ],
    speed: {
      base: 40,
      maneuverability: "Good",
      fly: 60
    },
    abilities: {
      str: 17,
      dex: 15,
      con: 18,
      int: 13,
      wis: 16,
      cha: 18
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
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Mobility",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Heavy mace",
        enchantments: [
          {
            name: "Enhancement Bonus +1",
            source: "inherent"
          },
          {
            name: "Flaming",
            source: "inherent"
          }
        ],
        name: "Heavy mace",
        damage: "1d8"
      }
    ],
    defense: {
      saves: {
        All: [
          {
            value: 4,
            note: "vs. poison,"
          },
          {
            value: 4,
            type: "resistance",
            note: "vs. evil"
          }
        ]
      },
      DR: {
        value: 10,
        damageType: "evil"
      },
      SR: {
        value: 19
      }
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any good-aligned plane",
    visualDescription: "This celestial being's body is obscured by darkness, but its glorious wings glow brilliantly around it, outlining the silhouette of a stern individual with shining yellow eyes.",
    description: "Balisse angels, sometimes called confessor angels, appear to good individuals on the horns of a moral dilemma or to those experiencing a crisis of faith. They prefer to guide individuals to their own moral decisions rather than order them to conform to a specific ideal of good. Balisse angels form from the spirits of individuals who have committed evil acts but later are redeemed and die while living an exemplary, moral life. Though balisse angels do not usually remember their mortal years, they retain a strong belief in the power of mentoring and salvation. The role of confessor is a solitary one. Balisse angels rarely interact with their own kind and cherish every minute they are able to spend on the celestial planes. Some balisse angels form long-lasting bonds with the people they have helped; between missions they may travel to visit their old success stories. Often a balisse angel leaves a mortal just as the mortal is beginning to appreciate the angel's company. Reunions are rare, but cherished all the more because of their scarcity. The average balisse angel stands 7 feet tall and weighs 200 pounds; its powerful wings make up the majority of this weight.",
    organization: "solitary",
    languages: "Celestial, Draconic, Infernal; truespeech",
    spellLikeAbilities: [
      {
        name: "detect evil",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "aid",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "dispel evil",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "dispel magic",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "holy smite",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "invisibility",
        casterLevel: 10,
        limitations: "self only",
        timesPerDay: -1
      },
      {
        name: "plane shift",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "remove curse",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "remove disease",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "remove fear",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "cure serious wounds",
        casterLevel: 10,
        timesPerDay: 3
      },
      {
        name: "hold person",
        casterLevel: 10,
        timesPerDay: 3
      },
      {
        name: "atonement",
        casterLevel: 10,
        timesPerDay: 1
      },
      {
        name: "mark of justice",
        casterLevel: 10,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 9
      },
      Diplomacy: {
        ranks: 13
      },
      Fly: {
        ranks: 13
      },
      "Knowledge (planes)": {
        ranks: 10
      },
      "Knowledge (religion)": {
        ranks: 13
      },
      Perception: {
        ranks: 10
      },
      "Sense Motive": {
        ranks: 10
      }
    },
    special: {
      "brand of the impenitent": {
        type: "Su",
        text: "Three times per day, a balisse angel can brand a judged individual within 30 feet. The target must succeed at a DC 19 Will save or be branded with a painless, glowing icon on its chest-usually the holy symbol of the deity or empyreal lord the balisse angel serves. This brand lasts for a number of days equal to the balisse angel's Hit Dice (10 days for most balisse angels). Anyone who attacks the branded target gains a +2 sacred bonus on weapon attack and damage rolls and a +2 sacred bonus on caster level checks to overcome the target's spell resistance. The save DC is Charisma-based."
      }
    }
  },

  "Choral Angel": {
    source: "Chronicle Of The Righteous",
    creatureType: "outsider",
    subTypes: [
      "angel",
      "extraplanar",
      "good"
    ],
    alignments: [
      "Neutral Good"
    ],
    size: "Small",
    hd: 8,
    hdVal: 10,
    cr: 6,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Detect Evil"
    ],
    speed: {
      base: 40,
      maneuverability: "Good",
      fly: 60
    },
    abilities: {
      str: 13,
      dex: 16,
      con: 15,
      int: 16,
      wis: 16,
      cha: 17
    },
    feats: [
      {
        name: "Alertness",
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
        name: "Toughness",
        type: "General"
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
        weapon: "Piercing hymn",
        name: "Piercing hymn",
        specialAbility: "deafen",
        damage: "2d6"
      }
    ],
    defense: {
      saves: {
        All: [
          {
            value: 4,
            note: "vs. poison,"
          },
          {
            value: 4,
            type: "resistance",
            note: "vs. evil"
          }
        ]
      },
      DR: {
        value: 5,
        damageType: "evil"
      },
      SR: {
        value: 17
      },
      naturalArmor: 5
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any good-aligned plane",
    visualDescription: "This celestial looks like a miniature human wearing a long, sheer robe that matches her broad, platinum wings. Her silver hair slowly ripples through the air of its own volition, highlighting the angel's serene expression.",
    description: "Choral angels are vocalists of unparalleled talent, and their singing fill the halls of good deities with soaring hymns and solemn chants. They manifest from the souls of the pious dead who possessed exceptional musical talent and pure spirits in life. Sometimes, mortals who did not possess musical talent but instead held a deep and abiding appreciation for the arts are gifted with this form upon ascending to the good-aligned planes after death. While choral angels are not soldiers and prefer to avoid combat, which many of their angelic brethren relish, these celestials can defend themselves with their puissant voices when need be, creating powerful magical effects that resonate with the purity in their hearts to overcome foes. Choral angels sometimes support astral devas in their duties by visiting the Material Plane bearing messages for mortals. These messages are inevitably good in nature, and it is a joyous event when a choral angel appears to a mortal. If the celestials expect danger or opposition during their visit, they travel in groups called ensembles, and use their harmonizing voices to spread the word of their patron as well as to bolster their allies in battle. If particularly vexed or pressed, an ensemble of choral angels can use their harmonies to devastating effect, obliterating their foes with powerful chants drawn from Elysium or hymns dedicated to the powers of Heaven. Most choral angels stand only 3-1/2 feet tall, and their svelte frames weigh a meager 40 pounds. Their hair is always of a metallic sheen resembling that of rare natural minerals and ores such as platinum, gold, and silver, though some of the oldest choral angels posses hair that glimmers perpetually like emeralds, sapphires, or diamonds.",
    organization: "solitary, duet, or ensemble (3-8)",
    languages: "Celestial, Draconic, Infernal; truespeech",
    spellLikeAbilities: [
      {
        name: "detect evil",
        casterLevel: 8,
        timesPerDay: -1
      },
      {
        name: "aid",
        casterLevel: 8,
        timesPerDay: -1
      },
      {
        name: "dispel evil",
        casterLevel: 8,
        timesPerDay: -1
      },
      {
        name: "dispel magic",
        casterLevel: 8,
        timesPerDay: -1
      },
      {
        name: "ghost sound",
        casterLevel: 8,
        timesPerDay: -1
      },
      {
        name: "invisibility",
        casterLevel: 8,
        limitations: "self only",
        timesPerDay: -1
      },
      {
        name: "plane shift",
        casterLevel: 8,
        timesPerDay: -1
      },
      {
        name: "remove curse",
        casterLevel: 8,
        timesPerDay: -1
      },
      {
        name: "remove disease",
        casterLevel: 8,
        timesPerDay: -1
      },
      {
        name: "remove fear",
        casterLevel: 8,
        timesPerDay: -1
      },
      {
        name: "cure moderate wounds",
        casterLevel: 8,
        timesPerDay: 3
      },
      {
        name: "sculpt sound",
        casterLevel: 8,
        timesPerDay: 3
      },
      {
        name: "sound burst",
        casterLevel: 8,
        timesPerDay: 3
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 7
      },
      Diplomacy: {
        ranks: 11
      },
      "Escape Artist": {
        ranks: 8
      },
      Fly: {
        ranks: 11
      },
      "Knowledge (planes)": {
        ranks: 8
      },
      "Knowledge (religion)": {
        ranks: 11
      },
      Perception: {
        ranks: 8
      },
      Perform0: {
        subSkill: "sing",
        ranks: 11
      },
      "Sense Motive": {
        ranks: 8
      }
    },
    special: {
      countersong: {
        type: "Su",
        text: "A choral angel can attempt a Perform (sing) check to counter magic effects that depend on sound. This ability functions as the bard ability of the same name."
      },
      harmonize: {
        type: "Sp",
        text: "When choral angels work together, they can use their complementary voices to create mystical harmonies. Two or more choral angels within 60 feet of one another can use calm emotions or heroism as a spell-like ability, four or more choral angels can use shout, and six or more choral angels can use greater heroism or holy word. Only the choral angel who actually uses the spell-like ability in question must take a standard action to achieve this effect-the other choral angels need only take swift actions during the same round. Piercing Hymn (Su) As a standard action, a choral angel can launch a concentrated blast of sonic energy from its mouth. This attack has a range of 90 feet with no range increment. Any creature struck by a choral angel's piercing hymn must succeed at a DC 17 Fortitude save or be deafened for 1d4 minutes. The save DC is Charisma-based."
      },
      deafen: {
        type: "Ex"
      }
    }
  },

  "Spyglass Archon": {
    source: "Chronicle Of The Righteous",
    creatureType: "outsider",
    subTypes: [
      "archon",
      "extraplanar",
      "good",
      "lawful"
    ],
    alignments: [
      "Lawful Good"
    ],
    size: "Medium",
    hd: 4,
    hdVal: 10,
    cr: 3,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Detect Evil",
      "Hone Senses",
      "Low-Light Vision"
    ],
    speed: {
      base: 40,
      maneuverability: "Good",
      fly: 40
    },
    abilities: {
      str: 14,
      dex: 15,
      con: 12,
      int: 13,
      wis: 10,
      cha: 9
    },
    feats: [
      {
        name: "Skill Focus",
        type: "General",
        value: "Stealth",
        choiceSource: "Skill Focus"
      },
      {
        name: "Two-Weapon Fighting",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Longsword",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "Longsword",
        damage: "1d8"
      },
      {
        weapon: "Short sword",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "Short sword",
        damage: "1d6"
      },
      {
        weapon: "Shortbow",
        name: "Shortbow",
        damage: "1d6"
      }
    ],
    defense: {
      saves: {
        All: [
          {
            value: 4,
            note: "vs. poison"
          }
        ]
      },
      DR: {
        value: 5,
        damageType: "evil"
      },
      SR: {
        value: 14
      },
      naturalArmor: 1
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Heaven)",
    visualDescription: "The movements of this black-skinned humanoid are unnaturally quiet, clearly belonging to one used to slinking unseen and unheard through dark places. Ebon wings and a matching mask complete this figure's stealthy appearance.",
    description: "Spyglass archons act as spies in the interests of Heaven. Though as lawful as any of their kin, spyglass archons use guile and stealth to uncover evil's plans and bring reports back to Heaven. Unlike hound archons, who act more as military scouts and sentinels, spyglass archons infiltrate enemy strongholds and observe agents of evil from scarcely an arm's-breadth away. Spyglass archons believe in law as strongly as they do in good, and are careful to act lawfully in their search for information. In places where law forbids a spyglass archon from entering a building and eavesdropping, it may hide in the shadows of public areas or conceal itself near windows to watch for evidence of evildoing. Once an archon has sufficient information to report, it returns to Heaven, where it shares its findings with its superiors. Since their tasks require discretion, spyglass archons train in multiple discreet fighting styles, and are as capable as any rogue of laying a foe low before she even notices the archon's presence. Specialized spell-like abilities aid the sleuths in this endeavor, and they are not above shrouding an enemy in magical darkness before descending upon her. Souls that become spyglass archons are solitary by nature, so they have few qualms about the isolation entailed by work. Most of their missions require intense concentration and skill, and are most easily undertaken by a single individual, but 2 spyglass archons might work together on extremely difficult, multipart missions. Spyglass archons are just over 5 feet tall and weigh almost 120 pounds.",
    organization: "solitary or pair",
    languages: "Celestial, Draconic, Infernal; truespeech",
    spellLikeAbilities: [
      {
        name: "detect evil",
        casterLevel: 4,
        timesPerDay: -1
      },
      {
        name: "magic circle against evil",
        casterLevel: 4,
        timesPerDay: -1
      },
      {
        name: "aid",
        casterLevel: 4,
        timesPerDay: -1
      },
      {
        name: "continual flame",
        casterLevel: 4,
        timesPerDay: -1
      },
      {
        name: "teleport, greater",
        casterLevel: 4,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: -1
      },
      {
        name: "message",
        casterLevel: 4,
        timesPerDay: -1
      },
      {
        name: "darkness",
        casterLevel: 4,
        timesPerDay: 3
      },
      {
        name: "entropic shield",
        casterLevel: 4,
        timesPerDay: 3
      },
      {
        name: "undetectable alignment",
        casterLevel: 4,
        timesPerDay: 3
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 3
      },
      Bluff: {
        ranks: 4
      },
      Fly: {
        ranks: 7
      },
      "Knowledge (planes)": {
        ranks: 4
      },
      Perception: {
        ranks: 4
      },
      "Sense Motive": {
        ranks: 4
      },
      Stealth: {
        ranks: 4
      }
    },
    special: {
      "sneak attack": {
        universalMonsterAbility: "Sneak Attack",
        bonus: "1d6"
      }
    }
  },

  Veranallia: {
    source: "Chronicle Of The Righteous",
    creatureType: "outsider",
    subTypes: [
      "azata",
      "chaotic",
      "extraplanar",
      "good"
    ],
    alignments: [
      "Chaotic Good"
    ],
    size: "Large",
    hd: 24,
    hdVal: 10,
    cr: 20,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Tremorsense 60 ft."
    ],
    speed: {
      base: 50
    },
    abilities: {
      str: 28,
      dex: 26,
      con: 25,
      int: 18,
      wis: 27,
      cha: 29
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
        name: "Combat Casting",
        type: "General"
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
        name: "Great Cleave",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Sickle",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Natural Attack",
        type: "Monster",
        value: "Vine",
        choiceSource: "Improved Natural Attack"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Sickening Critical",
        type: "Combat"
      },
      {
        name: "Toughness",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Sickle",
        enchantments: [
          {
            name: "Enhancement Bonus +3",
            source: "inherent"
          },
          {
            name: "Icy Burst",
            source: "inherent"
          }
        ],
        name: "Sickle",
        damage: "1d6"
      },
      {
        weapon: "Vine",
        name: "4 Vines",
        specialAbility: "grab",
        damage: "1d8"
      }
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "cold iron and evil"
      },
      SR: {
        value: 31
      },
      naturalArmor: 19
    },
    space: "10 ft.",
    reach: "5 ft. (10 ft. with vines)",
    environment: "any (Elysium)",
    visualDescription: "This rosy-haired woman is completely nude except for the mass of vines and leaves that cover her lower body. The plant matter silently weaves about her frame seemingly of its own volition, and consists of flourishing vines bursting with blooming flowers as well as wilted leaves covered with a silvery sheen of hoarfrost.",
    description: "Veranallias are among the most powerful azatas known and embody the changing of the seasons, from blossoming spring to dormant winter. They command the growth and decay of plants, control various aspects of the weather, and enrich soil with the remains of fallen foes. A veranallia stands 8 feet tall and weighs about 350 pounds. Beautiful and majestic, the queenly veranallia possesses a form that combines aspects of a feylike woman and the subtle power of nature. A veranallia appears humanoid from the waist up, but where her thighs and legs should be, sprout countless vines, leaves, and various kinds of plant matter instead. These flora represent the life of plants throughout all stages of the year, continually shifting from blooming, verdant colors and textures to crisp, withered specimens and back in a matter of seconds. Veranallias hail from the wildest regions of Elysium, primeval realms where few but the mightiest azatas dare tread. They are creatures of transition, preferring the unpredictable maelstroms of weather at Elysium's edges to the more temperate or consistent regions of that plane. They also have a particular appreciation for areas where one element transitions into another, such as coastlines, geysers, hot springs, and underground lakes. Many among their kind can be found in the lush Field of Broken Tyrants or various heavily wooded forests throughout Elysium; as many as a dozen veranallias are reputed to dwell among the ever-changing trees and plants of the Painted Forest, and it is thought their annual tribunals are actually the source of the eldritch woodland's transformative climate and continually shifting composition. At first glance, a veranallia's lower body may appear to be made of living plants that wrap themselves around her, but these vines are in fact a part of the azata's strange physiology. Despite this, she is not subject to blight or similar plant-affecting magic, and attempts to use such abilities to hinder her inspire a veranallia's ire like little else. A veranallia's vines are incredibly strong and can entwine and crush an enemy as easily as a python would crush a field mouse. These vines often change appearance based on the veranallia's environment, but not always in any predictable or sensible manner. Veranallias prefer the company of other azatas, and may have any number of faithful bralani or ghaele followers. Their fickle natures make it difficult for most other creatures, even other azatas, to interact with them. Lillends are not inspired by the dangerous power of veranallias, and brijidines' belief in the cleansing power of fire does not make friendship with the verdant veranallias easy. While most other celestials concede that veranallias have only the best intentions, most would still rather deal with more predictable members of the celestial planes. Archons in particular find it almost impossible to speak to veranallias, and the noble angels and agathions have trouble following a veranallia's leaps in logic and rapidly shifting moods. Due to their power and influence, it takes a force of great evil to slay veranallias. When a veranallia does die, however, her body explodes into a fine glittering dust that covers a radius of up to a mile. This area becomes exceedingly fertile and subject to indeterminate weather. Storms, snowfalls, heat waves, and gentle showers come by turns regardless of the region's usual climate. Veranallias who have died on the evil Outer Planes have left such fertile areas behind, but the soil inevitably becomes corrupted again, giving rise to vile creatures such as sards and spawning vicious weather patterns. Hardy plane-traveling adventurers speak of ancient veranallias living in the remotest corners of Elysium, and claim that these unique azatas possess even greater mastery over the elements than their more commonly encountered kin. Veranallias with the ability to shower entire mountains with lightning or cause heat waves so intense that they turn lakes to sand are spoken of in arcane texts in the Great Library of Harmonious Scripture of Heaven.",
    organization: "solitary, pair, or grove (3-6)",
    languages: "Celestial, Draconic, Infernal; speak with plants; truespeech",
    spellLikeAbilities: [
      {
        name: "detect animals or plants",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "detect evil",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "speak with plants",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "transport via plants",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "blight",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "cure serious wounds",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "diminish plants",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "entangle",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "plant growth",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "control plants",
        casterLevel: 20,
        timesPerDay: 5
      },
      {
        name: "grove of respite",
        casterLevel: 20,
        timesPerDay: 5
      },
      {
        name: "wall of thorns",
        casterLevel: 20,
        timesPerDay: 5
      },
      {
        name: "animate plants",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "awaken",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "repel metal or stone",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "regenerate",
        casterLevel: 20,
        timesPerDay: 1
      },
      {
        name: "shambler",
        casterLevel: 20,
        timesPerDay: 1
      }
    ],
    preparedSpells: {
      casterLevel: 20,
      spells: [
        {
          name: "energy drain",
          level: 9
        },
        {
          name: "heal, mass",
          level: 9
        },
        {
          name: "storm of vengeance",
          level: 9
        },
        {
          name: "cloak of chaos",
          level: 8
        },
        {
          name: "earthquake",
          level: 8
        },
        {
          name: "cure critical wounds, mass",
          level: 8
        },
        {
          name: "cure critical wounds, mass",
          level: 8
        },
        {
          name: "sunburst",
          level: 8
        },
        {
          name: "blasphemy",
          level: 7
        },
        {
          name: "destruction",
          level: 7
        },
        {
          name: "restoration, greater",
          level: 7
        },
        {
          name: "cure serious wounds, mass",
          level: 7
        },
        {
          name: "repulsion",
          level: 7
        },
        {
          name: "antilife shell",
          level: 6
        },
        {
          name: "banishment",
          level: 6
        },
        {
          name: "dispel magic, greater",
          level: 6
        },
        {
          name: "heal",
          level: 6
        },
        {
          name: "wind walk ",
          level: 6
        },
        {
          name: "breath of life",
          level: 5
        },
        {
          name: "dispel evil",
          level: 5
        },
        {
          name: "command, greater",
          level: 5
        },
        {
          name: "insect plague ",
          level: 5
        },
        {
          name: "antiplant shell",
          level: 4
        },
        {
          name: "chaos hammer",
          level: 4
        },
        {
          name: "freedom of movement",
          level: 4
        },
        {
          name: "holy smite",
          level: 4
        },
        {
          name: "neutralize poison",
          level: 4
        },
        {
          name: "poison",
          level: 4
        },
        {
          name: "contagion",
          level: 3
        },
        {
          name: "daylight",
          level: 3
        },
        {
          name: "dispel magic",
          level: 3
        },
        {
          name: "protection from energy",
          level: 3
        },
        {
          name: "searing light",
          level: 3
        },
        {
          name: "water walk ",
          level: 3
        },
        {
          name: "align weapon",
          level: 2
        },
        {
          name: "barkskin",
          level: 2
        },
        {
          name: "calm emotions",
          level: 2
        },
        {
          name: "enthrall",
          level: 2
        },
        {
          name: "gentle repose",
          level: 2
        },
        {
          name: "restoration, lesser",
          level: 2
        },
        {
          name: "detect law",
          level: 1
        },
        {
          name: "divine favor",
          level: 1
        },
        {
          name: "endure elements",
          level: 1
        },
        {
          name: "entropic shield",
          level: 1
        },
        {
          name: "protection from evil",
          level: 1
        },
        {
          name: "remove fear",
          level: 1
        },
        {
          name: "create water",
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
          name: "purify food and drink",
          level: 0
        }
      ],
      casterClass: "Cleric"
    },
    skills: {
      Bluff: {
        ranks: 24
      },
      Climb: {
        ranks: 24
      },
      "Escape Artist": {
        ranks: 27
      },
      Heal: {
        ranks: 27
      },
      Intimidate: {
        ranks: 27
      },
      "Knowledge (nature)": {
        ranks: 27
      },
      "Knowledge (planes)": {
        ranks: 24
      },
      Perception: {
        ranks: 24
      },
      "Sense Motive": {
        ranks: 24
      },
      Stealth: {
        ranks: 24
      }
    },
    special: {
      "autumnal embrace": {
        type: "Su",
        text: "At will, a veranallia can strike any creature within 30 feet barren or sterile. The target must succeed at a DC 31 Fortitude save or lose any ability it had to reproduce or bear children. This effect can only be removed by a heal, limited wish, miracle, or wish spell. Creatures that magically reproduce are not affected by this ability. The save DC is Charisma-based."
      },
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "1d8+4"
      },
      rebirth: {
        type: "Su",
        text: "Once per day, a veranallia can reincarnate a creature she deems worthy of the honor. The creature's original body decays and sinks into the ground, affecting the surrounding area in a 1/2-mile radius as though with plant growth (enrichment). Over the course of 1d4 days, a white, flowery cocoon emerges from the affected ground and splits open, revealing the newly reincarnated creature inside. Creatures reincarnated by a veranallia always return to life as aasimars. This ability otherwise functions as the reincarnate spell. Spells Veranallias cast divine spells as 20th-level clerics and have access to some druid spells. They do not gain access to domains or other cleric abilities."
      },
      "transport via plants": {
        type: "Ex"
      },
      "undersized weapons": {
        type: "Ex"
      },
      "winter sickle": {
        type: "Ex",
        text: "At will as a free action, a veranallia can create a jagged blade from her hoarfrost-covered vines that acts as a +3 icy burst sickle. One round after it leaves the veranallia's grasp, the weapon melts into a small puddle of water."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

};
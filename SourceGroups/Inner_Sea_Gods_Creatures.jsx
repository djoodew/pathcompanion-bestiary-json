
export const Inner_Sea_GodsCreatures = {
  Tarrasque: {
    source: "Inner Sea Gods",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Colossal",
    hd: 30,
    hdVal: 10,
    cr: 25,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 41,
      dex: 16,
      con: 34,
      int: 3,
      wis: 15,
      cha: 14
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
        name: "Bleeding Critical",
        type: "Combat"
      },
      {
        name: "Cleave",
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
        name: "Great Cleave",
        type: "Combat"
      },
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
        name: "Run",
        type: "General"
      },
      {
        name: "Staggering Critical",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "grab",
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
        name: "2 Gores",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      },
      {
        weapon: "Spine",
        name: "6 Spines",
        damage: "2d10"
      }
    ],
    immunities: [
      "Immune to ability damage, ability drain, acid, bleed, disease, energy drain, fire, mind-affecting effects, paralysis, permanent wounds, petrification, poison, polymorph"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "epic"
      },
      SR: {
        value: 36
      },
      naturalArmor: 35
    },
    space: "30 ft.",
    reach: "30 ft. (60 ft. with tail slap)",
    environment: "any",
    visualDescription: "This immense reptilian beast towers over its surroundings, all teeth and horns and claws and thrashing spiked tail.",
    description: "The Tarrasque, referred to in ancient texts as the \"Armageddon Engine,\" is the greatest of Rovagug's spawn. Its previously recorded devastation of Ninshabur and Avistan occurred in -632 AR, and culminated in the destruction of the flying Shory city of Kho. It was sealed away in a cavern somewhere in the Inner Sea region. Although the location of this cavern has been lost, rumors of possible locations include nearly every mountainous region, the Mwangi Expanse, and even under the Isle of Kortos itself. The statistics presented here for the Tarrasque differ slightly from those in the Bestiary-this version more accurately represents the Tarrasque as the mightiest of Rovagug's spawn.",
    organization: "solitary",
    languages: "Aklo (can't speak)",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 0
      },
      Perception: {
        ranks: 30,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      rush: {
        type: "Ex",
        text: "Once per minute, for 1 round, the tarrasque's speed increases to 150 feet, and its Acrobatics bonus on checks made to jump increases to +87."
      },
      spines: {
        type: "Ex",
        text: "The tarrasque can loose a volley of six spear-like spines from its body as a standard action with a toss of its head or a lash of its tail. Make an attack roll for each spine- all targets must be within 30 feet of each other. The spines have a range increment of 120 ft."
      },
      "swallow whole": {
        universalMonsterAbility: "Swallow Whole",
        damage: "6d6+22 plus 6d6 acid",
        hp: "hp 52",
        AC: "AC 27"
      },
      carapace: {
        type: "Su",
        text: "The tarrasque's scales deflect cones, lines, rays, and magic missile spells, rendering the tarrasque immune to such effects. There is a 30% chance a deflected effect reflects back in full force at the caster; otherwise it is simply negated."
      },
      hibernation: {
        type: "Ex"
      },
      "powerful leaper": {
        type: "Ex",
        text: "The tarrasque uses its Strength to modify Acrobatics checks made to jump, and has a +24 racial bonus on Acrobatics checks made to jump."
      },
      "unstoppable force": {
        type: "Ex"
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        value: 40
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "300 ft."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  Basileus: {
    source: "Inner Sea Gods",
    creatureType: "outsider",
    subTypes: [
      "devil",
      "evil",
      "extraplanar",
      "herald",
      "lawful"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Medium",
    hd: 16,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "See in Darkness"
    ],
    speed: {
      base: 30,
      maneuverability: "Perfect",
      fly: 60
    },
    abilities: {
      str: 26,
      dex: 22,
      con: 25,
      int: 26,
      wis: 19,
      cha: 25
    },
    feats: [
      {
        name: "Blind-Fight",
        type: "Combat"
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
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Iron Will",
        type: "General"
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
        name: "Persuasive",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Touch",
        name: "Touch",
        damage: "1d8"
      },
      {
        weapon: "Slam",
        name: "5 Slams",
        specialAbility: "grab",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "good"
      },
      SR: {
        value: 26
      },
      naturalArmor: 12
    },
    space: "5 ft.",
    reach: "5 ft. (15 ft. with slam)",
    environment: "any (Hell)",
    visualDescription: "This comely man is clad in fine silken robes. His eyes smolder with infernal flames.",
    description: "An infernal paradox at once wondrous and terrifying, tempting and blasphemous, Basileus serves as the herald of Asmodeus and the harbinger of Hell's will. Few who have met him survive the experience unchanged, for he is the very word of Hell.",
    organization: "solitary",
    languages: "Abyssal, Aklo, Aquan, Celestial, Common, Draconic, Elven, Giant, Infernal, Undercommon; tongues, telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "cloudkill",
        casterLevel: 16,
        timesPerDay: -1
      },
      {
        name: "false vision",
        casterLevel: 16,
        timesPerDay: -1
      },
      {
        name: "teleport, greater",
        casterLevel: 16,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: -1
      },
      {
        name: "mirage arcana",
        casterLevel: 16,
        timesPerDay: -1
      },
      {
        name: "persistent image",
        casterLevel: 16,
        timesPerDay: -1
      },
      {
        name: "scorching ray",
        casterLevel: 16,
        timesPerDay: -1
      },
      {
        name: "crushing despair",
        casterLevel: 16,
        timesPerDay: 3
      },
      {
        name: "dimensional anchor",
        casterLevel: 16,
        timesPerDay: 3
      },
      {
        name: "ethereal jaunt",
        casterLevel: 16,
        timesPerDay: 3
      },
      {
        name: "dispel magic, greater",
        casterLevel: 16,
        timesPerDay: 3
      },
      {
        name: "invisibility, greater",
        casterLevel: 16,
        timesPerDay: 3
      },
      {
        name: "legend lore",
        casterLevel: 16,
        timesPerDay: 3
      },
      {
        name: "nightmare",
        casterLevel: 16,
        timesPerDay: 3
      },
      {
        name: "phantasmal killer",
        casterLevel: 16,
        timesPerDay: 3
      },
      {
        name: "true seeing",
        casterLevel: 16,
        timesPerDay: 3
      },
      {
        name: "geas/quest",
        casterLevel: 16,
        timesPerDay: 1
      },
      {
        name: "wish",
        casterLevel: 16,
        limitations: "1, to mortals only",
        timesPerDay: 1
      },
      {
        name: "summon",
        casterLevel: 16,
        limitations: "level 5, 2 bone devils 75%",
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 16
      },
      Bluff: {
        ranks: 16
      },
      Diplomacy: {
        ranks: 19,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Disguise: {
        ranks: 19
      },
      Fly: {
        ranks: 0
      },
      Intimidate: {
        ranks: 19,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      "Knowledge (arcana)": {
        ranks: 16
      },
      "Knowledge (history)": {
        ranks: 8
      },
      "Knowledge (nobility)": {
        ranks: 8
      },
      "Knowledge (planes)": {
        ranks: 16
      },
      Perception: {
        ranks: 16
      },
      Perform0: {
        subSkill: "oratory",
        ranks: 16
      },
      "Sense Motive": {
        ranks: 16
      },
      "Sleight of Hand": {
        ranks: 16
      },
      Spellcraft: {
        ranks: 19
      },
      Stealth: {
        ranks: 16
      }
    },
    special: {
      terror: {
        type: "Su",
        text: "As a standard action, the Herald can surround himself with a terrifying illusion that to all viewers appears as a unique and violent manifestation of the most terrifying thing their minds can conjure. This horror can only be seen by each individual onlooker, with even the Herald being unaware of what his viewers see. Those within 30 feet of the Herald must make a DC 25 Will save. Those with 6 or fewer Hit Dice who fail instantly die from fear, while those with 6 or more Hit Dice are panicked and take 6d6 points of damage. Those who save are immune to the Herald’s death or panic effects, but still take damage. Those who remain within 30 feet of the Herald, even after making their saves, take 6d6 points of damage every round as long as the Herald continues to take standard actions to maintain the terror. The death and panic aspects of this ability are a mind-affecting fear effect, with even creatures immune to such effects still being affected by the ability’s damage. The save DC is Charisma-based. Gaze (Su) Death (if 6 HD or less) or 6d6 damage and panicked for 2d4 rounds (7 HD or more), range 30 feet, Will DC 25 negates the death or panicked effect. This gaze is a mind-affecting fear effect that causes its targets to perceive Basileus as the most terrifying thing that it can imagine. The save DC is Charisma-based."
      },
      "terror shape": {
        type: "Su",
        text: "While using his gaze ability, Basileus manifests one to five monstrous limbs that can make slam attacks."
      },
      "veil of forms": {
        type: "Su",
        text: "All creatures see Basileus as a powerful and attractive member of their own race. While using this ability, Basileus's gaze ability is suppressed. He can activate or suppress this ability as a free action."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  Arcanotheign: {
    source: "Inner Sea Gods",
    creatureType: "outsider",
    subTypes: [
      "herald",
      "incorporeal"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 17,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "Blindsense 60 ft.",
      "Darkvision 60 ft.",
      "Arcane Sight 120 ft."
    ],
    speed: {
      base: 40,
      maneuverability: "Perfect",
      fly: 60
    },
    abilities: {
      str: "-",
      dex: 27,
      con: 22,
      int: 31,
      wis: 20,
      cha: 27
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
        name: "Command Undead",
        type: "General"
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
        name: "Greater Spell Penetration",
        type: "General"
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
        name: "Spell Penetration",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Incorporeal touche",
        name: "2 Incorporeal touches",
        specialAbility: "energy channel",
        damage: "4d6"
      },
      {
        weapon: "Eldritch blast",
        qualities: [
          "touch"
        ],
        name: "2 Eldritch blasts",
        specialAbility: "special",
        damage: "4d6"
      }
    ],
    immunities: [
      "Immune to poison"
    ],
    defense: {
      saves: {
        All: [
          {
            value: 2,
            note: "vs. chaos/evil/good/law"
          }
        ]
      },
      SR: {
        value: 31
      }
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Maelstrom)",
    visualDescription: "This cloud of swirling energy flickers like lightning, with raw magical power playing across its form.",
    description: "In its natural, incorporeal form, Nethys's herald is a storm of magic, immediately recognizable as a creature of the arcane and divine. It rises just over 7 feet tall, and has a habit of floating a few inches above the ground instead of walking.",
    organization: "solitary",
    languages: "Abyssal, Ancient Osiriani, Celestial, Common, Draconic, Infernal, Protean; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "arcane sight",
        casterLevel: 17,
        timesPerDay: -1
      },
      {
        name: "protection from chaos",
        casterLevel: 17,
        timesPerDay: -1
      },
      {
        name: "protection from evil",
        casterLevel: 17,
        timesPerDay: -1
      },
      {
        name: "protection from good",
        casterLevel: 17,
        timesPerDay: -1
      },
      {
        name: "protection from law",
        casterLevel: 17,
        timesPerDay: -1
      },
      {
        name: "clairaudience/clairvoyance",
        casterLevel: 17,
        timesPerDay: -1
      },
      {
        name: "teleport, greater",
        casterLevel: 17,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: -1
      },
      {
        name: "cloudkill",
        casterLevel: 17,
        timesPerDay: 3
      },
      {
        name: "cure critical wounds",
        casterLevel: 17,
        timesPerDay: 3
      },
      {
        name: "lightning bolt",
        casterLevel: 17,
        timesPerDay: 3
      },
      {
        name: "telekinesis",
        casterLevel: 17,
        timesPerDay: 3
      },
      {
        name: "harm",
        casterLevel: 17,
        timesPerDay: 1
      },
      {
        name: "heal",
        casterLevel: 17,
        timesPerDay: 1
      },
      {
        name: "limited wish",
        casterLevel: 17,
        timesPerDay: 1
      },
      {
        name: "plane shift",
        casterLevel: 17,
        timesPerDay: 1
      }
    ],
    skills: {
      Craft0: {
        subSkill: "alchemy",
        ranks: 17
      },
      Diplomacy: {
        ranks: 17
      },
      Fly: {
        ranks: 20
      },
      Heal: {
        ranks: 17
      },
      Intimidate: {
        ranks: 17
      },
      "Knowledge (arcana)": {
        ranks: 20
      },
      "Knowledge (planes)": {
        ranks: 17
      },
      "Knowledge (religion)": {
        ranks: 20
      },
      "Knowledge (history)": {
        ranks: 17
      },
      Linguistics: {
        ranks: 17
      },
      Perception: {
        ranks: 17
      },
      Perform0: {
        subSkill: "sing",
        ranks: 17
      },
      "Sense Motive": {
        ranks: 17
      },
      Spellcraft: {
        ranks: 20
      },
      Stealth: {
        ranks: 17
      },
      "Use Magic Device": {
        ranks: 20
      }
    },
    special: {
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "corporeal form"
      },
      "energy channel": {
        type: "Ex",
        preText: "30 ft., DC 26"
      },
      special: {
        type: "Ex"
      }
    },
    resistances: [
      {
        damageType: "acid",
        value: 30
      },
      {
        damageType: "cold",
        value: 30
      },
      {
        damageType: "divine power (such as from flame strike)",
        value: 30
      },
      {
        damageType: "electricity",
        value: 30
      },
      {
        damageType: "fire",
        value: 30
      },
      {
        damageType: "sonic",
        value: 30
      }
    ]
  },

  "Mother's Maw": {
    source: "Inner Sea Gods",
    creatureType: "undead",
    subTypes: [
      "evil",
      "extraplanar",
      "herald"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Large",
    hd: 18,
    hdVal: 8,
    cr: 15,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Scent",
      "Lifesense"
    ],
    speed: {
      base: 10,
      maneuverability: "Average",
      fly: 40
    },
    abilities: {
      str: 33,
      dex: 25,
      con: "-",
      int: 21,
      wis: 20,
      cha: 22
    },
    feats: [
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Command Undead",
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
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Iron Will",
        type: "General"
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
        name: "Power Attack",
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
        name: "Bite",
        specialAbility: "bleed, disease, drain, grab",
        damage: "1d6",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to cold, electricity"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "bludgeoning and good"
      },
      SR: {
        value: 26
      },
      naturalArmor: 14
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any (Abaddon)",
    visualDescription: "This skull is as large as an ogre and surrounded by buzzing flies. Its bat wings carry it through the air as easily as those of a vulture.",
    description: "This terror comes to the mortal realm at the command of the Pallid Princess. It's an unsubtle thing of ravenous hunger, with little purpose but to kill, eat, and animate corpses. Created from the skull of a fallen titan, Mother's Maw is as brilliant as a lich, but its only interest is satisfying its cravings for life and sensation. Urgathoa's herald measures nearly 13 feet in height and weighs 3,000 pounds.",
    organization: "solitary",
    languages: "Abyssal, Common, Infernal, Necril",
    spellLikeAbilities: [
      {
        name: "desecrate",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "contagion",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "dimension door",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "ghoul hunger",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "inflict critical wounds",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "vomit swarm",
        casterLevel: 15,
        limitations: "Metamagic: Quicken maggots, use army ant swarm",
        timesPerDay: -1
      },
      {
        name: "animate dead",
        casterLevel: 15,
        timesPerDay: 1
      },
      {
        name: "create undead",
        casterLevel: 15,
        timesPerDay: 1
      },
      {
        name: "eyebite",
        casterLevel: 15,
        timesPerDay: 1
      },
      {
        name: "plane shift",
        casterLevel: 15,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 26
      },
      Fly: {
        ranks: 18
      },
      Intimidate: {
        ranks: 18
      },
      "Knowledge (planes)": {
        ranks: 18
      },
      "Knowledge (religion)": {
        ranks: 18
      },
      Perception: {
        ranks: 18
      },
      Profession0: {
        subSkill: "cook",
        ranks: 18
      },
      "Sense Motive": {
        ranks: 18
      },
      Stealth: {
        ranks: 18
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "60-ft. cone",
        damage: "usable every 1d4 rounds"
      },
      "channel negative energy 9/day": {
        type: "Ex",
        preText: "DC 19, 6d6"
      },
      "devour soul": {
        type: "Su",
        text: "A creature swallowed by the herald must save every round against slay living (DC 25, caster level 15th). The soul of a creature slain by this attack becomes trapped within the herald's skull, and the mangled corpse is immediately regurgitated. The creature cannot be brought back to life until the herald's destruction (or a spell deflection-see below) releases its soul. The Maw can hold only one soul at a time. The trapped essence provides the Maw with fast healing 20, lasting 1 round for every Hit Die of the devoured soul. The trapped soul gains 1 permanent negative level for every round it spends within the Maw-these negative levels remain if the creature is brought back to life (but don't stack with any negative levels imparted by being brought back to life). A soul that is completely consumed may be restored to life only by a miracle or wish spell. The save DC is Charisma-based."
      },
      disease: {
        universalMonsterAbility: "Disease",
        type: "Su",
        text: "Mother's Maw bite attack carries mummy rot (Fortitude DC 25).",
        saveDC: null,
        saveType: "er's"
      },
      "swallow whole": {
        universalMonsterAbility: "Swallow Whole",
        damage: "special",
        hp: "20 hp",
        AC: "AC 17"
      },
      bleed: {
        universalMonsterAbility: "Bleed",
        damage: 1
      },
      deathless: {
        type: "Su",
        text: "If destroyed, the herald it returns to unlife 1 hour later at 1 hit point, allowing its fast healing to resume healing it. It can be permanently destroyed by positive energy, being reduced to 0 hit points in the area of a bless or hallow spell, or if 20 vials of holy water are sprinkled on its remains."
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        condition: "see devour soul",
        value: null
      },
      "channel resistance": {
        universalMonsterAbility: "Channel Resistance",
        bonus: 4
      },
      "spell deflection": {
        type: "Su",
        text: "If any of the following spells is cast at the Maw and overcomes its spell resistance, it instead affects the devoured soul: banishment, chaos hammer, confusion, crushing despair, detect thoughts, dispel evil, dominate person, fear, geas/quest, holy word, hypnotism, imprisonment, magic jar, maze, suggestion, trap the soul, or any form of charm or compulsion. While none of these effects harms the soul, the caster must attempt a DC 25 caster level check when a spell is deflected- success indicates that the trapped soul is released from its prison and the creature whose body it belonged to can now be restored to life as normal. Mother's Maw can only benefit from this ability while it has a soul devoured."
      },
      desecrate: {
        type: "Ex",
        preText: "20 ft."
      },
      drain: {
        type: "Ex"
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    },
    resistances: [
      {
        damageType: "fire",
        value: 30
      }
    ]
  },

  "The Old Man": {
    source: "Inner Sea Gods",
    creatureType: "outsider",
    subTypes: [
      "extraplanar",
      "herald",
      "lawful"
    ],
    alignments: [
      "Lawful Neutral"
    ],
    size: "Medium",
    hd: 17,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "Blindsight 30 ft.",
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 80,
      climb: 30,
      swim: 30
    },
    abilities: {
      str: 20,
      dex: 31,
      con: 20,
      int: 21,
      wis: 31,
      cha: 22
    },
    feats: [
      {
        name: "Agile Maneuvers",
        type: "Combat"
      },
      {
        name: "Combat Expertise",
        type: "Combat"
      },
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Greater Grapple",
        type: "Combat"
      },
      {
        name: "Improved Disarm",
        type: "Combat"
      },
      {
        name: "Improved Grapple",
        type: "Combat"
      },
      {
        name: "Improved Trip",
        type: "Combat"
      },
      {
        name: "Improved Unarmed Strike",
        type: "Combat"
      },
      {
        name: "Mobility",
        type: "Combat"
      },
      {
        name: "Stunning Fist",
        type: "Combat"
      },
      {
        name: "Weapon Finesse",
        type: "Combat"
      },
      {
        name: "Wind Stance",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Unarmed strike",
        name: "Unarmed strike",
        damage: "1d3"
      },
      {
        weapon: "Flurry of blow",
        name: "2 Flurry of blows",
        damage: "2d8"
      },
      {
        weapon: "Pebble",
        name: "Pebble",
        damage: "1d3"
      }
    ],
    immunities: [
      "Immune to disease, poison"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "chaotic"
      },
      SR: {
        value: 26
      },
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any land (Axis)",
    visualDescription: "This bald old human man has long white eyebrows and an even longer white beard. He carries a staff adorned with metal rings.",
    description: "The Old Man is the herald of Irori, a teacher, mentor, guide, and trainer in the service of the god of knowledge, history, and self-perfection. He can be patient or irate, confusing or enlightening, lenient or strict, depending on what his students need. He often wanders Golarion as a mortal man, bereft of his supernatural powers, instructing others and leading by example. If attacked when in this limited shape, he usually allows himself to be beaten or killed, especially if his \"death\" would provide a powerful lesson to an important student. If slain as a mortal, he simply reincarnates in his celestial form, unharmed, and never bears a grudge about it. The Old Man's true form is that of an elderly human man, perhaps of Tien or Vudrani ancestry but never clearly identifiable as such. He is typically bald and wiry, and usually wears a long white moustache or beard. Though he appears frail and sometimes supports himself with a cane, crutch, or staff, he is incredibly strong and can move with an alien grace when he so chooses. He may dress in a simple robe, an elaborate ceremonial garment, or a simple loincloth. He is often accompanied by one of five animals: a turtle, monkey, ox, rooster, or pig. When not acting on Irori's behalf, the Herald of Irori keeps busy with tending to animals, planting gardens, meditating, practicing martial arts forms, swimming, and quipping with students. The Herald of Irori stands just over 5 feet tall and weighs about 120 pounds.",
    organization: "solitary",
    languages: "Common, Tien, Vudrani; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "air walk",
        casterLevel: 17,
        timesPerDay: 7
      },
      {
        name: "augury",
        casterLevel: 17,
        timesPerDay: 7
      },
      {
        name: "cure light wounds",
        casterLevel: 17,
        timesPerDay: 7
      },
      {
        name: "dimension door",
        casterLevel: 17,
        timesPerDay: 7
      },
      {
        name: "invisibility",
        casterLevel: 17,
        timesPerDay: 7
      },
      {
        name: "true strike",
        casterLevel: 17,
        timesPerDay: 7
      },
      {
        name: "water walk",
        casterLevel: 17,
        timesPerDay: 7
      },
      {
        name: "commune",
        casterLevel: 17,
        timesPerDay: 3
      },
      {
        name: "haste",
        casterLevel: 17,
        timesPerDay: 3
      },
      {
        name: "heal",
        casterLevel: 17,
        timesPerDay: 3
      },
      {
        name: "legend lore",
        casterLevel: 17,
        timesPerDay: 3
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 0
      },
      Climb: {
        ranks: 0
      },
      Diplomacy: {
        ranks: 17
      },
      "Handle Animal": {
        ranks: 8
      },
      Heal: {
        ranks: 12
      },
      "Knowledge (history)": {
        ranks: 17
      },
      "Knowledge (religion)": {
        ranks: 8
      },
      Perception: {
        ranks: 17
      },
      Perform0: {
        subSkill: "string",
        ranks: 17
      },
      Ride: {
        ranks: 17
      },
      "Sense Motive": {
        ranks: 17
      },
      "Sleight of Hand": {
        ranks: 20
      },
      Stealth: {
        ranks: 17
      },
      Swim: {
        ranks: 12
      }
    },
    special: {
      "stunning fist": {
        type: "blinded, deafened, fatigued, staggered, or stunned",
        text: " unarmed strike",
        preText: "16/day, DC 28"
      },
      "monk abilities": {
        type: "Ex or Su",
        text: "The Old Man has the following abilities of a 16th-level monk: AC bonus (+4), fast movement (50 ft.), flurry of blows, high jump, ki pool (18 points, adamantine, cold iron, lawful, magic, silver), quivering palm (DC 28), slow fall (80 ft.), stunning fist (blinded, deafened, fatigued, staggered, or stunned), unarmed strike"
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        damageType: "chaotic",
        value: 15
      },
      "improved evasion": {
        universalMonsterAbility: "Improved Evasion"
      }
    },
    resistances: [
      {
        damageType: "acid",
        value: 30
      },
      {
        damageType: "cold",
        value: 30
      },
      {
        damageType: "electricity",
        value: 30
      },
      {
        damageType: "fire",
        value: 30
      },
      {
        damageType: "sonic",
        value: 30
      }
    ]
  },

  Lawgiver: {
    source: "Inner Sea Gods",
    creatureType: "construct",
    subTypes: [
      "extraplanar",
      "herald",
      "lawful"
    ],
    alignments: [
      "Lawful Neutral"
    ],
    size: "Gargantuan",
    hd: 18,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "All-Around Vision",
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "See in Darkness"
    ],
    speed: {
      base: 40,
      maneuverability: "Perfect",
      fly: 60
    },
    abilities: {
      str: 28,
      dex: 12,
      con: "-",
      int: 14,
      wis: 24,
      cha: 20
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Awesome Blow",
        type: "Combat"
      },
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Great Fortitude",
        type: "General"
      },
      {
        name: "Improved Bull Rush",
        type: "Combat"
      },
      {
        name: "Improved Great Fortitude",
        type: "General"
      },
      {
        name: "Improved Overrun",
        type: "Combat"
      },
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
        weapon: "Warhammer",
        enchantments: [
          {
            name: "Enhancement Bonus +1",
            source: "inherent"
          },
          {
            name: "Axiomatic",
            source: "inherent"
          }
        ],
        name: "Warhammer",
        damage: "1d8"
      },
      {
        weapon: "Slam",
        name: "2 Slams",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "construct traits",
      "Immune to acid, critical hits, electricity, rust"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "chaotic"
      },
      SR: {
        value: 26
      },
      naturalArmor: 27
    },
    space: "20 ft.",
    reach: "20 ft.",
    environment: "any land (Axis)",
    visualDescription: "This titanic golden statue of a great knight moves of its own accord and hefts a mighty warhammer.",
    description: "Abadar's herald is the Lawgiver, a golem-like creature of gold and consecrated steel. Massive and powerful, the divine emissary appears as a giant in elaborate golden armor bearing a titanic warhammer. Standing still, the Lawgiver seems to be a fantastic statue crafted in honor of the god of law. When it's active, its steps shake the earth and the blows of its legendary hammer-the god-forged Gavel of Abadar-can shatter castle walls. Stoic, infinitely patient, and entirely dedicated to the Keeper of the First Vault, the Lawgiver is righteous, relentless in its cause, and capable of exacting incredible destruction. This sentinel of civilization appears where the forces of chaos threaten to undo the works of lawful communities and hinder the inexorable march of progress. Although it knows several languages, the herald of Abadar restricts its communication to an unusual degree. It has only ever been heard speaking in numbers, measurements, and-most frequently-direct quotes from Abadar's holy writings, the Order of Numbers and the Manual of City Building. Over the past century, followers of Abadar have reported seeing the Lawgiver wandering in remote places, from ancient caves to underwater trenches, seemingly searching for something. These travels have lead to widespread conjecture and debate among the faithful. The Herald of Abadar stands exactly 25 feet tall and weighs 30 tons.",
    organization: "solitary",
    languages: "Celestial, Common, Draconic, Infernal",
    spellLikeAbilities: [
      {
        name: "cure serious wounds",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "neutralize poison",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "remove blindness/deafness",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "remove curse",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "remove disease",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "remove paralysis",
        casterLevel: 18,
        timesPerDay: 3
      }
    ],
    skills: {
      Appraise: {
        ranks: 9
      },
      Fly: {
        ranks: 2
      },
      "Knowledge (engineering)": {
        ranks: 9
      },
      "Knowledge (local)": {
        ranks: 9
      },
      "Knowledge (religion)": {
        ranks: 9
      },
      Perception: {
        ranks: 18
      },
      "Sense Motive": {
        ranks: 18
      }
    },
    special: {
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "but with two bite attacks]; beast shape IV",
        type: ", but with two bite attacks]; beast shape IV"
      },
      freeze: {
        universalMonsterAbility: "Freeze",
        parenthetical: "metal statue"
      }
    },
    resistances: [
      {
        damageType: "cold",
        value: 10
      },
      {
        damageType: "fire",
        value: 10
      }
    ]
  },

  Orsheval: {
    source: "Inner Sea Gods",
    creatureType: "outsider",
    subTypes: [
      "extraplanar",
      "lawful"
    ],
    alignments: [
      "Lawful Neutral"
    ],
    size: "Medium",
    hd: 5,
    hdVal: 10,
    cr: 4,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 50
    },
    abilities: {
      str: 17,
      dex: 12,
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
        name: "Endurance",
        type: "General"
      },
      {
        name: "Improved Overrun",
        type: "Combat"
      },
      {
        name: "Run",
        type: "General"
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
        weapon: "Hoof",
        name: "2 Hooves",
        damage: "1d4",
        bonuses: [
          {
            source: "inherent",
            value: "1d4",
            appliesTo: "damageType",
            damageType: "electricity"
          }
        ],
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to electricity"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "magic"
      },
      SR: {
        value: 15
      },
      naturalArmor: 5
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "any (Axis)",
    visualDescription: "This short, iron-skinned horse is surrounded by a flickering light. A preternatural intelligence glitters in its metallic golden eyes.",
    description: "An orsheval is a patient, hard-working servitor of Abadar. Accustomed to bearing heavy loads and vulnerable riders, an orsheval fulfills its duties without complaint, glad to contribute to the long-term goals of its master. Its iron body shines with light, and it uses this natural glow to lead allies or continue work long into the night. Although only the size of ponies, orshevals can look like miniature, sculpted versions of full-grown horses of any kind, but most prefer the shape of a sturdy draft horse or warhorse. An orsheval is as intelligent as a typical human and quite familiar with the nature of trade, bargaining, and spotting liars and cheats. Many arrogant mortals have ignored or insulted orshevals, thinking them dumb beasts, only to have the servitors chastise them using truespeech. When dealing with such people, an orsheval might become as stubborn as a true horse, relenting only if the offender apologizes and makes appropriate financial restitution to the church of Abadar. Most orshevals stand about 4 feet tall and weigh about 700 pounds.",
    organization: "solitary, pair, or team (3-8)",
    languages: "Celestial, Infernal; truespeech",
    spellLikeAbilities: [
      {
        name: "light",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "mage hand",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "ant haul",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "bless",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "expeditious retreat",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "dimension door",
        casterLevel: 6,
        limitations: "self and rider only",
        timesPerDay: 1
      },
      {
        name: "restoration, lesser",
        casterLevel: 6,
        timesPerDay: 1
      },
      {
        name: "zone of truth",
        casterLevel: 6,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 0
      },
      Appraise: {
        ranks: 6
      },
      "Knowledge (local)": {
        ranks: 3
      },
      "Knowledge (nobility)": {
        ranks: 6
      },
      "Knowledge (planes)": {
        ranks: 3
      },
      "Knowledge (religion)": {
        ranks: 6
      },
      Perception: {
        ranks: 5
      },
      "Sense Motive": {
        ranks: 5
      },
      Swim: {
        ranks: 2
      }
    },
    special: {
      "glittering radiance": {
        type: "Su",
        text: "An orsheval usually glows with a golden light equivalent to that of a candle. In battle, its glow increases, filling the area within 5 feet of it with shining motes. These motes cling to all creatures in the affected area, outlining them as glitterdust for 6 rounds. Opponents in the area must succeed at a DC 14 Will save or be blinded; a blinded creature may attempt a new saving throw each round at the end of its turn to end the blindness. The motes persist for 1 round after the orsheval moves from a square, leaving a trailing cloud that can affect creatures that move into the affected area. The orsheval can suppress or reactivate the glow or motes as a free action. The save DC is Constitution-based."
      }
    },
    resistances: [
      {
        damageType: "cold",
        value: 10
      },
      {
        damageType: "fire",
        value: 5
      }
    ]
  },

  "Accomplice Devil": {
    source: "Inner Sea Gods",
    creatureType: "outsider",
    subTypes: [
      "devil",
      "evil",
      "extraplanar",
      "lawful",
      "shapechanger"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Medium",
    hd: 6,
    hdVal: 10,
    cr: 4,
    racialFeatures: [
      "All-Around Vision",
      "Darkvision 60 ft.",
      "Detect Good",
      "See in Darkness"
    ],
    speed: {
      base: 30,
      climb: 20,
      swim: 20
    },
    abilities: {
      str: 13,
      dex: 10,
      con: 11,
      int: 14,
      wis: 13,
      cha: 14
    },
    feats: [
      {
        name: "Combat Casting",
        type: "General"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Iron Will",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "2 Bites",
        specialAbility: "poison",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Heavy mace",
        name: "Heavy mace",
        damage: "1d8"
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "good"
      },
      SR: {
        value: 15
      },
      naturalArmor: 7
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Hell)",
    visualDescription: "This robed figure appears human except for snakelike eyes, a pair of devilish horns, and the occasional dart of a forked tongue.",
    description: "Servitors of Asmodeus, hesperians-also known as accomplice devils-come to the Material Plane to help guide inf luential individuals and their followers into Hell's grasp. Once a hesperian finds a suitable target for his clever wiles, he tells his victims that the greatest of Hell's devils sent him, and that his diabolical masters have recognized the individual's talents and potential. The hesperian goes on to claim that he has come to the mortal world in order to guide the creature as a chosen prodigy of Hell, and promises to carry the individual past the threshold of greatness. It's all a tangled lie, of course, but the best lies are the ones that at some point can be made into truths. A hesperian encourages envy, overreaching, pride, and ultimately hubris in his targets, urging his victims to strive toward ever bolder and more grandiose destinies. A hesperian dedicates himself to a mortal's service, assisting his victim in amassing power, wealth, prestige-all the while inf lating her ego and cultivating her belief in her own worthiness and infallibility. Once fully convinced of her own incontrovertible position, a hesperian's victim is usually only a gentle push from Hell's threshold. Always serving themselves and their dark god, hesperians are careful to not show too much of their hand, preferring to beguile and manipulate from the shadows. They cunningly alter their inhuman features to resemble attractive humanoids to mingle with mortals, appear more convincing in negotiations, and to not draw too much attention to their devilish natures. A hesperian often establishes Asmodean cults, then elevates one chosen mortal to a position of leadership within the group. He advises this leader, all the while manipulating other cultists-even sacrificing them if necessary-to help this mortal leader's ascendance without her having any direct accountability. A single hesperian typically has several mortals whom he calls master and advises in this way. Rotating his attention between these masters, the hesperian enjoys appearing for a while and then unexpectedly vanishing for periods like some dark muse. In his true form, a hesperian looks like a devilishly handsome human male with devilish horns, a forked tongue, and eyes reminiscent of snake's, but he can make himself a perfect imitation of any humanoid or even take the form of a long snake with a head on each end. Hesperians stand just under 7 feet tall and weigh approximately 180 pounds.",
    organization: "solitary, pair, or cabal (3-5)",
    languages: "Celestial, Draconic, Infernal; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "detect good",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "guidance",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "hypnotism",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "light",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "message",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "prestidigitation",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "read magic",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "beguiling gift",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "burning hands",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "darkness",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "daylight",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "teleport, greater",
        casterLevel: 6,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: 3
      },
      {
        name: "charm person",
        casterLevel: 6,
        timesPerDay: 1
      },
      {
        name: "eagle's splendor",
        casterLevel: 6,
        timesPerDay: 1
      },
      {
        name: "suggestion",
        casterLevel: 6,
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 6,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Climb: {
        ranks: 0
      },
      Diplomacy: {
        ranks: 9,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Intimidate: {
        ranks: 9
      },
      "Knowledge (local)": {
        ranks: 9
      },
      "Knowledge (planes)": {
        ranks: 6
      },
      "Knowledge (religion)": {
        ranks: 9
      },
      Perception: {
        ranks: 6
      },
      "Sense Motive": {
        ranks: 6
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "any Medium humanoid or Medium amphisbaena; alter self or beast shape III"
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Bite-injury; save Fort DC 13; frequency 1/round for 4 rounds; effect 1d2 Con; cure 1 save. The save DC is Constitution-based.",
        saveDC: 10
      }
    }
  },

  "The Menotherian": {
    source: "Inner Sea Gods",
    creatureType: "outsider",
    subTypes: [
      "chaotic",
      "extraplanar",
      "herald",
      "shapechanger"
    ],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Large",
    hd: 15,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 50,
      climb: 20,
      maneuverability: "Poor",
      fly: 50
    },
    abilities: {
      str: 28,
      dex: 20,
      con: 26,
      int: 18,
      wis: 18,
      cha: 20
    },
    feats: [
      {
        name: "Combat Reflexes",
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
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Step Up",
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
        value: "Sting",
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
        weapon: "Sting",
        name: "Sting",
        specialAbility: "poison",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to disease, poison"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "lawful"
      },
      SR: {
        value: 26
      },
      naturalArmor: 17
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "any (Elysium)",
    visualDescription: "This gangly black wasp has delicate wings, articulate hands on its front legs, and a pair of jagged stingers the length of a human arm.",
    description: "The Menotherian is a personification of lust and vengeance. Bereft of morals, she seduces, tricks, or murders any creature necessary to complete whatever mission Calistria sends her to upon. The herald stands 14 feet tall, has a wingspan nearing 30 feet, and weighs 1,400 pounds.",
    organization: "solitary",
    languages: "Abyssal, Common, Elven; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "dimension door",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "dispel magic",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "lover's vengeance",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "message",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "neutralize poison",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "rage",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "secret speech",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "crushing despair",
        casterLevel: 14,
        timesPerDay: 5
      },
      {
        name: "cat's grace",
        casterLevel: 14,
        timesPerDay: 5
      },
      {
        name: "cure moderate wounds",
        casterLevel: 14,
        timesPerDay: 5
      },
      {
        name: "remove disease",
        casterLevel: 14,
        timesPerDay: 5
      },
      {
        name: "suggestion",
        casterLevel: 14,
        timesPerDay: 5
      },
      {
        name: "summon swarm",
        casterLevel: 14,
        timesPerDay: 5
      },
      {
        name: "telekinesis",
        casterLevel: 14,
        timesPerDay: 5
      },
      {
        name: "teleport",
        casterLevel: 14,
        timesPerDay: 5
      },
      {
        name: "wall of thorns",
        casterLevel: 14,
        timesPerDay: 5
      },
      {
        name: "heal",
        casterLevel: 14,
        timesPerDay: 1
      },
      {
        name: "insect plague",
        casterLevel: 14,
        timesPerDay: 1
      },
      {
        name: "scrying",
        casterLevel: 14,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 7
      },
      Bluff: {
        ranks: 15
      },
      Climb: {
        ranks: 0
      },
      Diplomacy: {
        ranks: 18
      },
      Fly: {
        ranks: 0
      },
      Heal: {
        ranks: 7
      },
      Intimidate: {
        ranks: 18
      },
      "Knowledge (history)": {
        ranks: 11
      },
      "Knowledge (planes)": {
        ranks: 8
      },
      "Knowledge (nature)": {
        ranks: 8
      },
      Perception: {
        ranks: 15
      },
      Perform0: {
        subSkill: "dance",
        ranks: 7
      },
      "Sense Motive": {
        ranks: 15
      },
      Spellcraft: {
        ranks: 10
      },
      Stealth: {
        ranks: 15
      }
    },
    special: {
      implant: {
        type: "Ex",
        text: "Once per day, the Menotherian can implant eggs in a creature using its sting. The creature must succeed at a DC 25 Fortitude save to resist implantation. The target is nauseated for the next 2d4 rounds while the eggs gestate. When the eggs hatch, they form a chaotic neutral hellwasp swarm (Pathfinder RPG Bestiary 3 146), kill the host in 1 round, and inhabit the corpse. The eggs can be surgically removed with a successful DC 30 Heal check (this check deals 2d6 points of damage to the host regardless of success) or by remove disease or similar spells. The save DC is Constitution-based."
      },
      "mind control": {
        type: "Ex",
        text: "The menotherian can inject its scent into the brain of a helpless or willing target, controlling it for the next 24 hours (as the spell dominate person, Fortitude DC 25 negates), although the Menotherian must verbally give the target instructions. The save DC is Constitution-based."
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Sting-injury; save Fort DC 25; frequency 1/round for 6 rounds; effect 1d3 Dex damage; cure 2 consecutive saves.",
        saveDC: 10
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "or giant wasp; alter self or vermin shape II",
        type: ", or giant wasp; alter self or vermin shape II"
      },
      "alluring scent": {
        type: "Ex",
        text: "The Menotherian's subtle aroma causes creatures in her vicinity to become placid and react favorably toward her. Any creature that fails a DC 25 Fortitude save against the aura improves its attitude toward the Menotherian one step closer to friendly. Creatures with the scent ability take a -4 penalty on this saving throw. Creatures in the aura must attempt a saving throw each minute. This is a mindaffecting poison effect. The DC is Constitution-based.",
        preText: "30 ft., DC 25, 1 hour"
      }
    },
    resistances: [
      {
        damageType: "electricity",
        value: 10
      },
      {
        damageType: "fire",
        value: 10
      }
    ]
  },

  Vendenopterix: {
    source: "Inner Sea Gods",
    creatureType: "outsider",
    subTypes: [
      "chaotic",
      "extraplanar",
      "shapechanger"
    ],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Medium",
    hd: 6,
    hdVal: 10,
    cr: 4,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30,
      maneuverability: "Average",
      fly: 50
    },
    abilities: {
      str: 13,
      dex: 16,
      con: 13,
      int: 10,
      wis: 11,
      cha: 14
    },
    feats: [
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Iron Will",
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
        specialAbility: "poison",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to sleep"
    ],
    defense: {
      saves: {
        All: [
          {
            value: 2,
            note: "vs. enchantments"
          }
        ]
      },
      DR: {
        value: 5,
        damageType: "cold iron"
      },
      SR: {
        value: 15
      },
      naturalArmor: 4
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Elysium)",
    visualDescription: "This elven woman's allure is obfuscated by her ragged insectile wings and long, clawlike nails.",
    organization: "solitary or pair",
    languages: "Abyssal, Celestial, Common, Draconic, Elven; telepathy 10 ft.",
    spellLikeAbilities: [
      {
        name: "charm person",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "darkness",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "locate creature",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "dimension door",
        casterLevel: 6,
        timesPerDay: 1
      },
      {
        name: "ethereal jaunt",
        casterLevel: 6,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: 1
      },
      {
        name: "charm person",
        casterLevel: 6,
        limitations: "Metamagic: Heighten ",
        timesPerDay: 1
      },
      {
        name: "suggestion",
        casterLevel: 6,
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 1,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Diplomacy: {
        ranks: 9
      },
      Disguise: {
        ranks: 9
      },
      "Knowledge (planes)": {
        ranks: 3
      },
      Perception: {
        ranks: 6
      },
      Perform0: {
        subSkill: "dance",
        ranks: 6
      },
      Survival: {
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
      "ability drain": {
        type: "Su",
        text: "A vendenopterix drains energy from a mortal she lures into an act of passion, such as a kiss. An unwilling victim must be grappled before the vendenopterix can use this ability. The vendenopterix's kiss inflicts 1 point of Intelligence, Wisdom, or Charisma drain (her choice). The kiss also has the effect of a suggestion spell, asking the victim to accept another act of passion from the vendenopterix. The target must succeed at a DC 15 Will save to negate the suggestion. The save DC is Charisma-based."
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Claw-injury; save Fort DC 16; frequency 1/round for 6 rounds; effect 1d2 Dex damage; cure 2 consecutive saves. The save DC is Constitution-based, and includes a +2 racial bonus.",
        saveDC: 12
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "any humanoid; alter self"
      },
      "swift tracker": {
        type: "Ex",
        text: "A vendenopterix can move at her normal speed while using Survival to follow tracks without taking the normal -5 penalty. She takes only a -10 penalty (instead of the normal -20 penalty) when moving at up to twice her normal speed while tracking."
      }
    },
    resistances: [
      {
        damageType: "electricity",
        value: 10
      },
      {
        damageType: "fire",
        value: 5
      }
    ]
  },

  Thais: {
    source: "Inner Sea Gods",
    creatureType: "outsider",
    subTypes: [
      "chaotic",
      "extraplanar",
      "good",
      "herald",
      "shapechanger"
    ],
    alignments: [
      "Chaotic Good"
    ],
    size: "Large",
    hd: 17,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 50,
      maneuverability: "Good",
      fly: 80
    },
    abilities: {
      str: 24,
      dex: 26,
      con: 22,
      int: 21,
      wis: 18,
      cha: 24
    },
    feats: [
      {
        name: "Combat Expertise",
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
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Mobility",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Halberd",
        enchantments: [
          {
            name: "Enhancement Bonus +2",
            source: "inherent"
          },
          {
            name: "Anarchic",
            source: "inherent"
          },
          {
            name: "Keen",
            source: "inherent"
          }
        ],
        name: "Halberd",
        damage: "1d10"
      }
    ],
    immunities: [
      "Immune to electricity, fear, petrification"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "lawful"
      },
      SR: {
        value: 26
      },
      naturalArmor: 7
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any (Elysium)",
    visualDescription: "This defiant, angelic woman has two black wings and three white wings, and bears a crystalline halberd.",
    description: "Cayden Cailean's herald Thais is a personification of freedom and courage. She typically appears as a 15-foot-tall, angelic woman, but can change her size to be anywhere from 4 feet to 32 feet tall. She is always portrayed carrying her signature weapon, a crystalline halberd called Tyranny's Foil borrowed from Milani's armory. Three times per day as a standard action, she can use the weapon to open all nonmagical doors and break all nonmagical chains within 30 feet.",
    organization: "solitary",
    languages: "Auran, Celestial, Common, Draconic, Infernal; tongues",
    spellLikeAbilities: [
      {
        name: "freedom of movement",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "heroism, greater",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "true strike",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "break enchantment",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "displacement",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "dispel magic, greater",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "plane shift",
        casterLevel: 15,
        limitations: "self and willing targets only",
        timesPerDay: 3
      },
      {
        name: "shout",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "planar ally, greater",
        casterLevel: 15,
        limitations: "one bralani or ghaele azata only",
        timesPerDay: 1
      },
      {
        name: "hallow",
        casterLevel: 15,
        timesPerDay: 1
      },
      {
        name: "word of chaos",
        casterLevel: 15,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 12
      },
      Bluff: {
        ranks: 17
      },
      Diplomacy: {
        ranks: 17
      },
      Disguise: {
        ranks: 10
      },
      Fly: {
        ranks: 0
      },
      Heal: {
        ranks: 7
      },
      Intimidate: {
        ranks: 11
      },
      "Knowledge (local)": {
        ranks: 7
      },
      "Knowledge (religion)": {
        ranks: 7
      },
      "Knowledge (planes)": {
        ranks: 7
      },
      Perception: {
        ranks: 17
      },
      Perform0: {
        subSkill: "dance",
        ranks: 17
      },
      Profession0: {
        subSkill: "courtesan",
        ranks: 8
      },
      "Sense Motive": {
        ranks: 17
      },
      "Sleight of Hand": {
        ranks: 20
      },
      Stealth: {
        ranks: 17
      }
    },
    special: {
      "luck domain": {
        type: "Ex",
        text: "Thais can use the bit of luck (30 ft. range) and good fortune Luck domain powers three times per day each."
      },
      "penetrating gaze": {
        type: "Su",
        text: "Lawful opponents within 30 feet take 5d6 points of damage and are dazed for 1 round. A successful DC 25 Will save halves the damage and negates the daze effect. The save DC is Charisma-based."
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "or human from Medium to Huge size; alter self or giant form II",
        type: ", or human from Medium to Huge size; alter self or giant form II"
      },
      "armor of valor": {
        type: "Su",
        text: "Thais adds her Charisma modifier as a deflection bonus to her Armor Class and gains a +1 luck bonus on all saving throws. Aura of Bravery (Su) Allies within Thais's aura are affected by remove fear and remove paralysis. Allies gain a +1 morale bonus on attack rolls, weapon damage rolls, saves, and skill checks; opponents take a -1 morale penalty on such rolls."
      },
      "improved evasion": {
        universalMonsterAbility: "Improved Evasion"
      },
      "uncanny dodge": {
        universalMonsterAbility: "Uncanny Dodge"
      },
      "aura of bravery": {
        type: "Su",
        text: "Allies within Thais's aura are affected by remove fear and remove paralysis. Allies gain a +1 morale bonus on attack rolls, weapon damage rolls, saves, and skill checks; opponents take a -1 morale penalty on such rolls.",
        preText: "30 ft."
      }
    },
    resistances: [
      {
        damageType: "cold",
        value: 10
      },
      {
        damageType: "fire",
        value: 10
      }
    ]
  },

  Ataxian: {
    source: "Inner Sea Gods",
    creatureType: "outsider",
    subTypes: [
      "chaotic",
      "extraplanar",
      "good"
    ],
    alignments: [
      "Chaotic Good"
    ],
    size: "Tiny",
    hd: 4,
    hdVal: 10,
    cr: 4,
    racialFeatures: [
      "Blindsense 30 ft.",
      "Darkvision 60 ft."
    ],
    speed: {
      base: 10,
      maneuverability: "Good",
      fly: 40
    },
    abilities: {
      str: 5,
      dex: 12,
      con: 15,
      int: 10,
      wis: 13,
      cha: 14
    },
    feats: [
      {
        name: "Agile Maneuvers",
        type: "Combat"
      },
      {
        name: "Combat Casting",
        type: "General"
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
        weapon: "Ray",
        name: "Ray",
        specialAbility: "staggered",
        damage: "1d6"
      }
    ],
    immunities: [
      "Immune to poison, fear"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "evil or lawful"
      },
      SR: {
        value: 15
      },
      naturalArmor: 3
    },
    space: "2-1/2 ft.",
    reach: "0 ft.",
    environment: "any (Elysium)",
    visualDescription: "This sprite-like creature resembles a humanoid the size of a cat, with amber skin, surrounded by an aura of tiny bubbles.",
    description: "An ataxian is a rowdy, boisterous, and good-natured servitor of Cayden Cailean. It has an instinct for finding taverns, whether in a crowded city or rural farmland. When it finds these drinking holes, it's always able to find people willing to buy it drinks. An ataxian embodies all the positive stereotypes of a happy, fun drunk. Courageous despite its tiny, frail body, an ataxian is always ready to stand up for the underdog, and it isn't afraid to take the first swing against a bully. However, an ataxian much prefers to use its magic to make fools out of thugs-or, better yet, turn potential adversaries into drinking buddies. Ataxians love to possess worshipers of the Drunken Hero and experience life in an \"enormous\" body, and they seize the chance whenever they can. Many tales of a drunken peasant single-handedly defeating a gang of ruffians can be attributed to the unexpected intervention of one of these servitors. Ataxians enjoy singing bawdy songs, carousing with light-hearted folk, and spreading good cheer. Ataxians typically measure about 1-1/2 feet tall and weigh about 4 pounds.",
    organization: "solitary, pair, or brawl (3-5)",
    languages: "Celestial, Common, Dwarven, Elven, Halfling",
    spellLikeAbilities: [
      {
        name: "remove fear",
        casterLevel: 4,
        timesPerDay: -1
      },
      {
        name: "bear's endurance",
        casterLevel: 4,
        timesPerDay: 3
      },
      {
        name: "create water",
        casterLevel: 4,
        limitations: "ale or wine, up to 4 cups",
        timesPerDay: 3
      },
      {
        name: "hideous laughter",
        casterLevel: 4,
        timesPerDay: 3
      },
      {
        name: "confusion, lesser",
        casterLevel: 4,
        timesPerDay: 3
      },
      {
        name: "pick your poison",
        casterLevel: 4,
        timesPerDay: 3
      },
      {
        name: "sleep",
        casterLevel: 4,
        timesPerDay: 3
      },
      {
        name: "knock",
        casterLevel: 4,
        timesPerDay: 1
      },
      {
        name: "magic jar",
        casterLevel: 4,
        limitations: "willing target only, lasts 1 hour, see possession",
        timesPerDay: 1
      },
      {
        name: "ray of sickening",
        casterLevel: 4,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 15
      },
      Fly: {
        ranks: 0
      },
      "Handle Animal": {
        ranks: 7
      },
      "Knowledge (local)": {
        ranks: 7
      },
      "Knowledge (religion)": {
        ranks: 7
      },
      Perception: {
        ranks: 4
      },
      Stealth: {
        ranks: 4
      }
    },
    special: {
      possession: {
        type: "Su",
        text: "An ataxian does not require a receptacle to use its magic jar spell-like ability. When using this ability on the Material Plane, its body becomes ethereal for the duration. When the ataxian leaves its host, the host must succeed at a DC 14 Will save or fall asleep for 1d3 minutes. The save DC is Charisma-based."
      },
      "staggering drunk": {
        type: "Ex",
        text: "For each alcoholic drink an ataxian has consumed in the past hour, it gains a +1 dodge bonus to AC and takes a -1 penalty on all attack rolls, saving throws, skill checks, and ability checks, to a maximum of +4 and -4, respectively. These effects wear off after 1 hour. Ray (Su) An ataxian can fire a ray of cold up to 30 feet with no range increment."
      },
      staggered: {
        type: "Ex",
        text: "Any creature struck by an ataxian's ray attack must succeed at a DC 14 Fortitude saving throw or be staggered for 1d4 rounds. This is a poison effect. The save DC is Charisma-based."
      }
    },
    resistances: [
      {
        damageType: "acid",
        value: 5
      },
      {
        damageType: "cold",
        value: 5
      },
      {
        damageType: "fire",
        value: 5
      }
    ]
  },

  "Night Monarch": {
    source: "Inner Sea Gods",
    creatureType: "outsider",
    subTypes: [
      "chaotic",
      "extraplanar",
      "good",
      "herald"
    ],
    alignments: [
      "Chaotic Good"
    ],
    size: "Huge",
    hd: 18,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "Blindsense 60 ft.",
      "Darkvision 120 ft."
    ],
    speed: {
      base: 30,
      maneuverability: "Average",
      fly: 120
    },
    abilities: {
      str: 25,
      dex: 22,
      con: 23,
      int: 20,
      wis: 18,
      cha: 24
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
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
        name: "Hover",
        type: "Monster"
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
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Snatch",
        type: "Monster"
      },
      {
        name: "Wind Stance",
        type: "Combat"
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
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to cold (itself and its riders), electricity, sleep"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "evil"
      },
      SR: {
        value: 26
      },
      naturalArmor: 16
    },
    space: "15 ft.",
    reach: "15 ft.",
    environment: "any (Elysium)",
    visualDescription: "This mothlike creature has a long, three-pronged tail akin to peacock feathers. Sparkling dust drifts from its gigantic wings.",
    description: "The Night Monarch serves the goddess Desna, and resembles a titanic moth or butterf ly with brightly colored wings. The shifting patterns depicted upon its wings always ref lect some aspect of the quest the goddess has willed it to take up. Depending on the herald's progress, these markings may resemble elaborate constellations and star shapes, swift blowing winds and clouds, or even harsh streaks of falling meteorites. Sighting the Night Monarch is thought to bring good luck and favorable dreams, which many hold to be visions from the goddess herself. The Herald of Desna's head rises 14 feet off the ground, and its body is about 30 feet long. It weighs approximately 2,000 pounds.",
    organization: "solitary",
    languages: "Auran, Celestial, Common (can't speak); telepathy touch",
    spellLikeAbilities: [
      {
        name: "cure serious wounds",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "dream",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "freedom of movement",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "hypnotic pattern",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "break enchantment",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "dispel magic, greater",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "plane shift",
        casterLevel: 15,
        limitations: "self and willing targets only",
        timesPerDay: 3
      },
      {
        name: "remove curse",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "remove fear",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "remove paralysis",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "hallow",
        casterLevel: 15,
        timesPerDay: 1
      },
      {
        name: "regenerate",
        casterLevel: 15,
        timesPerDay: 1
      }
    ],
    skills: {
      Diplomacy: {
        ranks: 21
      },
      Fly: {
        ranks: 0
      },
      "Handle Animal": {
        ranks: 18
      },
      Heal: {
        ranks: 18
      },
      "Knowledge (geography)": {
        ranks: 18
      },
      "Knowledge (religion)": {
        ranks: 18
      },
      "Knowledge (nature)": {
        ranks: 21
      },
      "Knowledge (planes)": {
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
        ranks: 21
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "30-ft. cone",
        damage: "usable every 1d4 rounds",
        text: "The Night Monarch's breath weapon creates sticky webbing (as the web universal monster ability). It can use this ability in the air to entangle flying creatures without requiring the use of anchor points to hold the web in place."
      },
      "dream dust": {
        type: "Su",
        text: "As a full-round action, the Night Monarch can flutter its wings to create a 30-foot burst of dust centered on itself. This dust affects creatures as deep slumber, but with no Hit Die limit (Will DC 25 negates). This ability is usable once every 1d4 rounds. The save DC is Constitution-based."
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Pathfinder RPG Core Rulebook 558",
        text: " Eating the Night Monarch's flesh gives the attacker a -4 penalty on the poison's saving throw.",
        saveDC: null,
        saveType: "ing"
      },
      "no breath": {
        universalMonsterAbility: "No Breath",
        text: "itself and its riders"
      },
      "poison flesh": {
        type: "Ex",
        text: "Any creature that bites the Night Monarch is exposed to black lotus extract poison (Pathfinder RPG Core Rulebook 558). Eating the Night Monarch's flesh gives the attacker a -4 penalty on the poison's saving throw."
      }
    }
  },

  Thyrlien: {
    source: "Inner Sea Gods",
    creatureType: "outsider",
    subTypes: [
      "azata",
      "chaotic",
      "extraplanar",
      "good",
      "shapechanger"
    ],
    alignments: [
      "Chaotic Good"
    ],
    size: "Small",
    hd: 6,
    hdVal: 10,
    cr: 4,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Detect Evil",
      "Detect Magic",
      "Low-Light Vision"
    ],
    speed: {
      base: 20,
      maneuverability: "Good",
      fly: 40
    },
    abilities: {
      str: 9,
      dex: 15,
      con: 12,
      int: 12,
      wis: 15,
      cha: 14
    },
    feats: [
      {
        name: "Flyby Attack",
        type: "Monster"
      },
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
        weapon: "Bite",
        name: "Bite",
        specialAbility: "poison",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
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
        value: 15
      },
      naturalArmor: 3
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Elysium)",
    visualDescription: "This fey-looking humanoid is colored in shades of gray. Its wings are decorated with colored motes resembling a starry night sky.",
    description: "A thyrlien is a unique type of azata created by Desna. Intended as rare warrior counterparts to lyrakien, thyrlien are tasked with watching over nighttime travelers. Specifically hunting the servants of Lamashtu and Ghlaunder, thyrlien wander lonely roads and dark alleys, hoping to confront or counter the dark things that so often hunt such ominous spots. Superficially humanoid, a thyrlien's attacks reveal its nonhuman origins. Venomous saliva coats mouth and its delicate-looking wings are actually as stiff as wood and have razor sharp edges. A thyrlien is skilled at tracking using conventional and magical methods and is savvy to the ways of its chosen prey. These servants of the goddess of luck stand about 2 feet tall and weigh around 15 pounds.",
    organization: "solitary, pair, or squad (3-5)",
    languages: "Celestial, Draconic, Infernal; truespeech",
    spellLikeAbilities: [
      {
        name: "detect evil",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "detect magic",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "cure light wounds",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "locate creature",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "magic missile",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "message",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "blindness/deafness",
        casterLevel: 6,
        timesPerDay: 1
      },
      {
        name: "neutralize poison",
        casterLevel: 6,
        timesPerDay: 1
      },
      {
        name: "true strike",
        casterLevel: 6,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 13
      },
      Fly: {
        ranks: 0
      },
      "Knowledge (planes)": {
        ranks: 6
      },
      "Knowledge (religion)": {
        ranks: 9
      },
      Perception: {
        ranks: 6
      },
      Perform0: {
        subSkill: "any one",
        ranks: 9
      },
      Stealth: {
        ranks: 6
      },
      Survival: {
        ranks: 9
      }
    },
    special: {
      "favored enemy": {
        type: "Ex",
        preText: "evil outsiders +2, vermin +2"
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Bite-injury; save Fort DC 14; frequency 1/round for 6 rounds; effect 1d3 Str; cure 2 consecutive saves.",
        saveDC: 10
      },
      "starlight blast": {
        type: "Su",
        text: "As a standard action once every 1d4 rounds, a thyrlien can tap into Desna's divine radiance and unleash a blast of holy twilight in a 5-foot burst. All creatures in this area take 2d4 points of holy damage, plus 1 point for each step their alignment deviates from chaotic good. For example, a chaotic neutral or neutral good creature would take 2d4+1 points of damage, a neutral creature would take 2d4+2 points of damage, and a lawful evil creature would take 2d4+4 points of damage. A DC 14 Reflex save negates this damage. Chaotic good creatures are unaffected by this ability. The save DC is Constitution-based."
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "giant moth [use giant wasp stats]; vermin shape II"
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        condition: "see below",
        value: null
      }
    }
  },

  "The Grim White Stag": {
    source: "Inner Sea Gods",
    creatureType: "outsider",
    subTypes: [
      "extraplanar",
      "good",
      "lawful"
    ],
    alignments: [
      "Lawful Good"
    ],
    size: "Colossal",
    hd: 18,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Detect Evil"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 39,
      dex: 14,
      con: 25,
      int: 10,
      wis: 13,
      cha: 12
    },
    feats: [
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Endurance",
        type: "General"
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
        name: "Improved Critical",
        type: "Combat",
        value: "Gore",
        choiceSource: "Improved Critical"
      },
      {
        name: "Mobility",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Run",
        type: "General"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Gore",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Gore",
        name: "Gore",
        specialAbility: "push",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Hoof",
        name: "2 Hooves",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to electricity, petrification"
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
        damageType: "evil and silver"
      },
      SR: {
        value: 26
      },
      naturalArmor: 20
    },
    space: "30 ft.",
    reach: "20 ft.",
    environment: "any land (Heaven)",
    visualDescription: "This gigantic stag-like being blurs the line between plant and beast, its horns branching like the limbs of some ancient, leaf less tree.",
    description: "Erastil's herald is rarely seen more than once in a given generation, and only when a settlement is in mortal danger. All good creatures of the forest recognize its near-divinity and come when they hear its bugling call. Other than its mighty summons, it does not speak to humanoids. It stands 60 feet tall and weighs approximately 140 tons.",
    organization: "solitary",
    languages: "Celestial, Common, Druidic, Sylvan (can't speak any language); speak with animals",
    spellLikeAbilities: [
      {
        name: "detect evil",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "neutralize poison",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "remove disease",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "heroes' feast",
        casterLevel: 18,
        limitations: "Times Per Month: 1 see below",
        timesPerDay: -1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 5
      },
      "Handle Animal": {
        ranks: 12
      },
      Intimidate: {
        ranks: 18
      },
      "Knowledge (nature)": {
        ranks: 12
      },
      Perception: {
        ranks: 18
      },
      "Sense Motive": {
        ranks: 9
      },
      Stealth: {
        ranks: 10,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Survival: {
        ranks: 12
      },
      Swim: {
        ranks: 12
      }
    },
    special: {
      "lay on hands": {
        type: "Ex",
        preText: "10/day, 9d6"
      },
      push: {
        universalMonsterAbility: "Push",
        attack: "gore",
        distance: "10 ft."
      },
      trample: {
        universalMonsterAbility: "Trample",
        damage: "2d8+21",
        saveDC: 10
      },
      bugle: {
        type: "Ex",
        text: "The Stag can make a distinctive call that can be heard for miles. All who worship Erastil immediately recognize the sound and know the direction and general distance to it."
      },
      "cascade of spears": {
        type: "Su",
        text: "Once per day, the Stag can shed fragments of its antlers, creating up to 18 +1 shortspears, +1 spears, or +1 longspears in any combination (or substitute five +1 arrows or +1 crossbow bolts for each spear). These weapons retain their magic for 18 minutes, after which they become common weapons made of antler. Heroes' Feast (Sp) The Stag lies down and dies to begin the \"casting\" of this ability, its body becoming a magical feast feeding up to 18 creatures. At the next sunrise, it returns to life with full hit points. Protective Aura (Su) This ability provides a +4 deflection bonus to AC and a +4 resistance bonus on saving throws, but only against attacks or effects from evil creatures."
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        damageType: "evil weapons and effects",
        value: 5
      },
      "protective aura": {
        type: "Su",
        text: "This ability provides a +4 deflection bonus to AC and a +4 resistance bonus on saving throws, but only against attacks or effects from evil creatures.",
        preText: "20 ft."
      }
    },
    resistances: [
      {
        damageType: "cold",
        value: 10
      },
      {
        damageType: "sonic",
        value: 10
      }
    ]
  },

  "Stag Archon": {
    source: "Inner Sea Gods",
    creatureType: "outsider",
    subTypes: [
      "archon",
      "extraplanar",
      "good",
      "lawful",
      "shapechanger"
    ],
    alignments: [
      "Lawful Good"
    ],
    size: "Medium",
    hd: 6,
    hdVal: 10,
    cr: 4,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Detect Evil",
      "Low-Light Vision"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 12,
      dex: 15,
      con: 11,
      int: 10,
      wis: 15,
      cha: 10
    },
    feats: [
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
      }
    ],
    attacks: [
      {
        weapon: "Gore",
        name: "Gore",
        specialAbility: "push",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Longbow",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "Longbow",
        damage: "1d8"
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
        damageType: "evil"
      },
      SR: {
        value: 15
      },
      naturalArmor: 6
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Heaven)",
    visualDescription: "This stag-headed humanoid has large, sweeping antlers and wields a finely-crafted longbow.",
    description: "A stag archon looks like a well-muscled human with the head of a horned deer, typically an elk or stag. They prefer to use their bows in battle, though they are comfortable charging antlers-first into melee as well. Each was created from the spirit of a mortal hero of Erastil's faith, hand-picked by the god to aid his followers in the world and defend some of the Outer Sphere's least tamed wildernesses. Though none remember the specifics of their mortal lives, they retain the skills of trained woodland warriors. Most are more practical than hound archons, willing to kill evil mortals if doing so is necessary to protect the innocent. Stag archons are experienced trackers and scouts. Occasionally Erastil sends one to look after a specific village or farmstead, particularly in a dangerous frontier area. They watch in animal form, luring lost children to safety and leading hungry hunters to easily-caught prey. They have a deep-seated hatred of cold riders and other evil fey, and they gather in great numbers to pursue and take down those defilers of the wilderness. A stag archon typically stands about 6-1/2 feet tall (a foot or more taller than that with its horns) and weighs around 220 pounds.",
    organization: "solitary, pair, or band (3-5)",
    languages: "Celestial, Draconic, Infernal; truespeech",
    otherGear: "mwk longbow with 20 arrows",
    spellLikeAbilities: [
      {
        name: "detect evil",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "aid",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "animal messenger",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "dancing lights",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "teleport, greater",
        casterLevel: 6,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: -1
      },
      {
        name: "charm animal",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "true strike",
        casterLevel: 6,
        timesPerDay: 3
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 5
      },
      "Knowledge (nature)": {
        ranks: 9
      },
      "Knowledge (religion)": {
        ranks: 9
      },
      Perception: {
        ranks: 6
      },
      Stealth: {
        ranks: 6
      },
      Survival: {
        ranks: 6,
        bonuses: [
          {
            source: "inherent",
            value: 3
          }
        ]
      }
    },
    special: {
      push: {
        universalMonsterAbility: "Push",
        attack: "gore",
        distance: "10 ft."
      },
      "favored terrain": {
        type: "Ex",
        preText: "forest +2"
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "Large stag; beast shape II"
      },
      menace: {
        type: "Ex",
        preText: "20 ft., DC 15, 10 rounds"
      }
    }
  },

  "The First Blade": {
    source: "Inner Sea Gods",
    creatureType: "outsider",
    subTypes: [
      "chaotic",
      "extraplanar",
      "herald"
    ],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Large",
    hd: 18,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Ironsense 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 32,
      dex: 13,
      con: 28,
      int: 10,
      wis: 15,
      cha: 13
    },
    feats: [
      {
        name: "Blind-Fight",
        type: "Combat"
      },
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Great Cleave",
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
        name: "Improved Overrun",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Slam",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Slam",
        name: "2 Slams",
        specialAbility: "bleed",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to magic, poison"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "adamantine and law"
      }
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any (Elysium)",
    visualDescription: "Harsh flourishes decorate the armor of this ironclad giant, as though it were the war regalia of some merciless warlord.",
    description: "Said to have been formed from an unthinking sliver of steel dashed from Gorum's blade during one of his violent clashes with a god-beast felled long ago, the First Blade is a living tool of war. Inspired by Gorum's divine bloodlust, the First Blade continues to do battle in the service of its divine master. It has been reforged through the eons into a manifestation of Gorum's perfect warrior, and now serves as the war god's herald, traveling where its master desires. The herald answers only the calls of those who please Gorum in battle-weakling priests who beg for salvation from deadly foes never have their entreaties answered. Tales tell of the herald appearing amid lesser battles and, upon finding them to be mere skirmishes or clashes among weaklings, slaughtering all involved in disgust. The appearance of the First Blade transforms to match a style of armor that's impressive to those it will be facing in battle. Regardless of its form, it typically stands about 15 feet tall and weighs nearly 5 tons.",
    organization: "solitary",
    languages: "Abyssal, Celestial, Common, Infernal, Protean",
    spellLikeAbilities: [
      {
        name: "instant summons",
        casterLevel: 18,
        limitations: "any nonmagical weapon",
        timesPerDay: -1
      },
      {
        name: "chill metal",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "heat metal",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "repel metal or stone",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "wall of iron",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "blade barrier",
        casterLevel: 18,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 21
      },
      Climb: {
        ranks: 21
      },
      Intimidate: {
        ranks: 21
      },
      "Knowledge (history)": {
        ranks: 21
      },
      Perception: {
        ranks: 18
      },
      "Sense Motive": {
        ranks: 18
      }
    },
    special: {
      "bladed slam": {
        type: "Ex",
        text: "The First Blade's slam attacks deal bludgeoning and slashing damage. Its slams count as natural weapons or manufactured weapons (whichever is most beneficial to it) for the purpose of spells that enhance attacks, and as adamantine, chaotic, and magic for the purpose of overcoming damage reduction and bypassing hardness. Ironsense (Ex) The First Blade automatically detects iron objects within 60 feet, just as if it possessed the Blindsight ability. Immunity to Magic (Su) The First Blade has the same immunity to magic as an iron golem. It can lower this resistance for 1 round as a standard action."
      },
      bleed: {
        universalMonsterAbility: "Bleed",
        damage: "1d10"
      },
      "powerful blows": {
        type: "Ex"
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "swarm form; see below"
      },
      "lord of battle": {
        type: "Ex",
        text: "The First Blade is proficient in all weapons, and counts as an 18th-level barbarian and fighter for the purposes of all prerequisites. Rage Aura (Su) Willing creatures within 100 feet of the First Blade gain the effects of rage automatically, whether they are allies or enemies of the herald. Those who choose not to be affected are immune to the aura until they leave the area and return. Swarm Form (Su) The herald can transform into a floating swarm of Tiny sharp metal fragments. In this form it has the swarm subtype, cannot make slam attacks, gains the distraction ability (DC 28), and can make a swarm attack that deals 4d6 points of slashing damage to its targets."
      },
      "no breath": {
        universalMonsterAbility: "No Breath",
        text: ""
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        damageType: "adamantine",
        value: 5
      },
      fortification: {
        universalMonsterAbility: "Fortification",
        type: "Ex",
        value: "75%"
      },
      rage: {
        type: "Ex",
        preText: "100 ft."
      }
    },
    resistances: [
      {
        damageType: "cold",
        value: 10
      },
      {
        damageType: "sonic",
        value: 10
      }
    ]
  },

  Zentragt: {
    source: "Inner Sea Gods",
    creatureType: "outsider",
    subTypes: [
      "chaotic",
      "extraplanar"
    ],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Large",
    hd: 6,
    hdVal: 10,
    cr: 4,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 17,
      dex: 12,
      con: 13,
      int: 8,
      wis: 11,
      cha: 10
    },
    feats: [
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Sunder",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
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
        specialAbility: "grab",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to fear"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "lawful"
      },
      SR: {
        value: 15
      },
      naturalArmor: 9
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "any (Elysium)",
    visualDescription: "This ferocious ursine brute has blade-like metallic teeth and appears to be covered in overlapping iron plates.",
    description: "Zentragts are armored, bearlike servitors of Gorum. Terse, burly, and independent, they are disciplined warriors, and use canny tactics whether alone, grouped with their own kind, or part of a legion of mixed creatures. They relish opportunities to charge into battle and eagerly serve in the vanguard of armies sworn to Our Lord in Iron. Zentragts quickly grow bored if there is nothing for them to fight, and challenge each other-or any creature present that looks like it can handle a rough fight-to maintain their high spirits. They work as needed to prepare for future battles, hauling materials to build defensive walls or siege engines for future conf licts or hunting creatures that consider themselves apex predators. They prefer using their magical abilities to enhance themselves and share their blessings with those they consider worthy allies. Some particularly brazen zentragts have even been known to use magic to enhance foes, bolstering their strength or healing their wounds to ensure a more worthy battle. Regardless of their foe, zentragts enjoy singing during combat (though they aren't particularly good at it), and keep rhythm by using their metallic natural weapons as percussive instruments against enemy armor. Zentragts revere metal, seeing all iron and steel as a portion of their divine master. To them, the act of eating metal is a form of communion in which they replenish their bodies with Gorum's enduring substance. As such, they go out of their way to collect rare metals and treat such ritual meals with uncharacteristic respect. On average, zentragts stand about 9 feet tall and weigh over 1,200 pounds.",
    organization: "solitary, pair, or gang (3-5)",
    languages: "Abyssal, Celestial; speak with animals (bears only)",
    spellLikeAbilities: [
      {
        name: "bear's endurance",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "cure light wounds",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "true strike",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "rage",
        casterLevel: 6,
        timesPerDay: 1
      }
    ],
    skills: {
      Climb: {
        ranks: 9
      },
      Intimidate: {
        ranks: 9
      },
      "Knowledge (planes)": {
        ranks: 3
      },
      "Knowledge (religion)": {
        ranks: 6
      },
      Perception: {
        ranks: 6
      },
      Swim: {
        ranks: 9,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      }
    },
    special: {
      "adamantine attacks": {
        type: "Ex",
        text: "A zentragt's bite and claw attacks count as adamantine, chaotic, and magic for the purposes of overcoming damage reduction and bypassing hardness."
      },
      "eat metal": {
        type: "Su",
        text: "A zentragt can eat metal to heal itself. For every 5 pounds of iron or steel it consumes, it heals 5 hit points. Adamantine, cold iron, mithral, or metals with an enhancement bonus of +1 or higher heal it double this amount. It takes a zentragt 1 minute to eat 5 pounds of metal."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    },
    resistances: [
      {
        damageType: "cold",
        value: 5
      },
      {
        damageType: "electricity",
        value: 5
      },
      {
        damageType: "fire",
        value: 5
      }
    ]
  },

  "Personification Of Fury": {
    source: "Inner Sea Gods",
    creatureType: "outsider",
    subTypes: [
      "air",
      "elemental",
      "extraplanar",
      "herald",
      "water"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Huge",
    hd: 17,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      maneuverability: "Perfect",
      fly: 100,
      swim: 90
    },
    abilities: {
      str: 28,
      dex: 35,
      con: 22,
      int: 15,
      wis: 15,
      cha: 18
    },
    feats: [
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
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Improved Bull Rush",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Slam",
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
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Weapon Finesse",
        type: "Combat"
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
            value: "2d6",
            appliesTo: "damageType",
            damageType: "cold/electricity"
          }
        ],
        type: "primary"
      },
      {
        weapon: "Energy ray",
        qualities: [
          "touch"
        ],
        name: "2 Energy rays",
        specialAbility: "Energy ray",
        damage: "2d6"
      }
    ],
    immunities: [
      "Immune to cold, electricity"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "-"
      },
      naturalArmor: 9
    },
    space: "15 ft.",
    reach: "15 ft.",
    environment: "any air or water (Plane of Air or Plane of Water)",
    visualDescription: "Jagged bolts of lightning crackle within this massive and vaguely humanoid storm cloud.",
    description: "Gozreh's herald, Personification of Fury, is a living elemental storm of air and water. It may once have been an actual storm given independent life and intelligence, but it does not remember anything before awakening in the service of Gozreh. Its powers allow it to shift itself fully into air or water or even to assume the form of a beast, though it is most comfortable in its dual-material elemental shape. As a living storm, the herald can provide life-sustaining water, whisk others to safety, save mortals from drowning, or rain down watery death upon the enemies of Gozreh. It is comfortable doing any of these things, and has no objection to taking lives- even innocent lives, if this serves the will of Gozreh. With Gozreh's permission, it sometimes acts as an intermediary between rival elemental forces. The Herald of Gozreh rises to nearly 25 feet in height, and its changeable form usually weighs approximately 1 ton.",
    organization: "solitary",
    languages: "Aquan, Auran, Common, Druidic, Ignan, Sylvan, Terran",
    spellLikeAbilities: [
      {
        name: "create water",
        casterLevel: 17,
        timesPerDay: -1
      },
      {
        name: "invisibility",
        casterLevel: 17,
        limitations: "self only",
        timesPerDay: -1
      },
      {
        name: "summon monster ii",
        casterLevel: 17,
        limitations: "air or water elemental only",
        timesPerDay: -1
      },
      {
        name: "air breathing",
        casterLevel: 17,
        limitations: "as water breathing, but allows waterbreathing creatures to breathe air or water",
        timesPerDay: 5
      },
      {
        name: "control water",
        casterLevel: 17,
        timesPerDay: 5
      },
      {
        name: "control weather",
        casterLevel: 17,
        limitations: "as a druid",
        timesPerDay: 5
      },
      {
        name: "water breathing",
        casterLevel: 17,
        timesPerDay: 5
      },
      {
        name: "beast shape iv",
        casterLevel: 17,
        timesPerDay: 1
      },
      {
        name: "possess object",
        casterLevel: 17,
        timesPerDay: 1
      },
      {
        name: "summon monster ix",
        casterLevel: 17,
        limitations: "air or water elementals only",
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 17
      },
      "Escape Artist": {
        ranks: 20
      },
      Fly: {
        ranks: 3
      },
      "Knowledge (nature)": {
        ranks: 20
      },
      "Knowledge (religion)": {
        ranks: 20
      },
      "Knowledge (planes)": {
        ranks: 8
      },
      Perception: {
        ranks: 17
      },
      "Sense Motive": {
        ranks: 9
      },
      Stealth: {
        ranks: 17
      },
      Survival: {
        ranks: 9
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      drench: {
        type: "Ex",
        text: "The herald's touch puts out Huge or smaller nonmagical flames. The herald can dispel magical fire it touches as dispel magic (caster level 19th)."
      },
      vortex: {
        type: "Su",
        text: "The herald can create a whirlpool at will as a standard action. This ability functions identically to its whirlwind special attack, but can only form underwater and cannot leave the water.",
        preText: "10- 60 ft. high, DC 27"
      },
      "water mastery": {
        type: "Ex",
        text: "The herald gains a +1 bonus on attack and damage rolls if both it and its opponent are touching water. These modifiers apply to bull rush and overrun maneuvers, whether the elemental is initiating or resisting these kinds of attacks. (Unlike a water elemental, the herald does not have a penalty if it or its opponent is touching the ground.)"
      },
      whirlwind: {
        universalMonsterAbility: "Whirlwind",
        type: "Ex",
        saveDC: 10,
        height: "10-60 ft. high"
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "air or water elemental; elemental body IV"
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        value: null
      },
      "air mastery": {
        type: "Ex",
        text: "Airborne creatures take a -1 penalty on attack and damage rolls against the herald."
      },
      "energy ray": {
        type: "Ex",
        text: "The herald can shoot rays of cold or electricity up to 100 feet. These can threaten a critical hit on a roll of 18, 19, or 20. Vortex (Su) The herald can create a whirlpool at will as a standard action. This ability functions identically to its whirlwind special attack, but can only form underwater and cannot leave the water."
      }
    }
  },

  Xocothian: {
    source: "Inner Sea Gods",
    creatureType: "outsider",
    subTypes: [
      "air",
      "extraplanar",
      "water"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 6,
    hdVal: 10,
    cr: 4,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30,
      maneuverability: "Average",
      fly: 90,
      swim: 90,
      speed: "burst"
    },
    abilities: {
      str: 15,
      dex: 12,
      con: 11,
      int: 10,
      wis: 11,
      cha: 10
    },
    feats: [
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Lightning Reflexes",
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
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
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
      naturalArmor: 7
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "any (Plane of Air or Plane of Water)",
    visualDescription: "This serpentine mix of flying fish and great seabird rolls and twists like waves in an ocean storm.",
    description: "A xocothian is a physical manifestation of Gozreh's dual nature and destructive power. As a creature that has a form mingling both fish and fowl, it's as at home in the water as it is in the air. A xocothian amuses itself by manipulating clouds-it can fly in a way that whips off portions of clouds, allowing the creature to sculpt the cloud into fantastic creations. When on the sea, the creature dives in and out of the waves in a way that looks almost like a massive skipping stone dipping below the waves with each strike and then erupting into the air in a spray of sea water. Blunt and impatient, xocothians aren't fond of nuanced manipulation or clever gambits when dealing with others. They prefer straightforward approaches to obstacles and problems, and always takes such a route unless impeded in some way. When on the Material Plane and not called into service by mortal worshipers of Gozreh, xocothians enjoy exploring the natural wonders of the world. They splash through the seas, and soar through the skies, keeping away from civilization on these travels. Sometimes when encountering mortals, the creatures hide themselves in obscuring mist, hoping to be mistaken as a cloud. When at sea, they sometimes surge past ships underwater or in the air to create confusion and panic. When feeling sociable, they chat with local animals and discuss matters of weather and migrations with members of Gozreh's faith and respectful druids of other religions. They grow outraged with mortals who poison or pollute water and even those who befoul the air with bad smells (such as by burning garbage, casting stinking cloud, or running a tannery). Although they don't need to eat, they sometimes choose to do so for pleasure, enjoying the sort of food that a carnivorous fish or bird would consume. As enigmatic as its creator, a xocothian may refer to itself as \"I,\" \"we,\" \"she,\" \"he,\" \"it,\" or \"they,\" whether in one body or two. Xocothians are about 8 feet long and weigh around 650 pounds.",
    organization: "solitary, pair, or school (3-5)",
    languages: "Druidic, Sylvan; speak with animals",
    spellLikeAbilities: [
      {
        name: "alter winds",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "know direction",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "shocking grasp",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "chill metal",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "cure light wounds",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "faerie fire",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "obscuring mist",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "dimension door",
        casterLevel: 6,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: 1
      },
      {
        name: "hydraulic torrent",
        casterLevel: 6,
        timesPerDay: 1
      }
    ],
    skills: {
      Fly: {
        ranks: 9
      },
      "Handle Animal": {
        ranks: 9
      },
      "Knowledge (nature)": {
        ranks: 9
      },
      "Knowledge (religion)": {
        ranks: 9
      },
      Perception: {
        ranks: 6
      },
      Stealth: {
        ranks: 6
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      "form of sea and sky": {
        type: "Su",
        text: "Once per hour, a xocothian can transform itself into two Small elementals (one air and one water) for up to 7 minutes. These elementals appear in adjacent squares. Each have half of the xocothian's current hit points and share the same mind. They can reform into the xocothian as a standard action if they are adjacent to each other-the reformed xocothian's hit points are equal to the total of the two elementals' hit points. If either elemental is slain, the xocothian must use its standard action on its next turn to reform (treat a slain elemental's hit points as 0 when determining the reformed xocothian's total hit points). Speed Burst (Ex) A xocothian can fly or swim up to 200 feet as a full-round action. When using this ability, it must move in a straight line. This does not provoke attacks of opportunity."
      }
    }
  },

  "Hand Of The Inheritor": {
    source: "Inner Sea Gods",
    creatureType: "outsider",
    subTypes: [
      "angel",
      "extraplanar",
      "good",
      "herald",
      "lawful"
    ],
    alignments: [
      "Lawful Good"
    ],
    size: "Large",
    hd: 18,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 50,
      maneuverability: "Good",
      fly: 150
    },
    abilities: {
      str: 25,
      dex: 21,
      con: 22,
      int: 22,
      wis: 24,
      cha: 23
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
        name: "Improved Shield Bash",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Shield Master",
        type: "Combat"
      },
      {
        name: "Shield Slam",
        type: "Combat"
      },
      {
        name: "Two-Weapon Fighting",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Longsword",
        choiceSource: "Weapon Focus"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Heavy shield",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Longsword",
        enchantments: [
          {
            name: "Enhancement Bonus +2",
            source: "inherent"
          },
          {
            name: "Holy",
            source: "inherent"
          }
        ],
        name: "Longsword",
        damage: "1d8"
      },
      {
        weapon: "Heavy steel shield",
        enchantments: [
          {
            name: "Enhancement Bonus +2",
            source: "inherent"
          }
        ],
        name: "Heavy steel shield",
        specialAbility: "bull rush",
        damage: "1d6"
      }
    ],
    immunities: [
      "Immune to fear"
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
        value: 26
      },
      naturalArmor: 14
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any (Heaven)",
    visualDescription: "This tall angel has a halo of spinning blades, and is clad is radiant golden armor and equally radiant shield.",
    description: "The Hand of the Inheritor is a warrior angel, always ready to answer Iomedae's call whenever she must directly intervene on Golarion. With his angelic speed and might, he leads the charge when the Inheritor's celestial armies must go to war. A veteran of countless sorties into the Abyss, the Hand fights with a song of battle on his lips and unbreakable courage in his heart. The Hand stands 9 feet tall and weighs 900 pounds.",
    organization: "solitary or squad (the Hand plus 2-5 astral devas)",
    languages: "Celestial, Common, Draconic, Infernal; truespeech",
    spellLikeAbilities: [
      {
        name: "aid",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "detect evil",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "dispel magic",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "restoration, lesser",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "magic weapon",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "plane shift",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "remove fear",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "bull's strength",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "burst of glory",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "cure moderate wounds",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "flame strike",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "holy smite",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "mark of justice",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "order's wrath",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "power word stun",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "prayer",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "raise dead",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "resist energy",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "see invisibility",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "blade barrier",
        casterLevel: 18,
        timesPerDay: 1
      },
      {
        name: "death ward",
        casterLevel: 18,
        timesPerDay: 1
      },
      {
        name: "dispel evil",
        casterLevel: 18,
        timesPerDay: 1
      },
      {
        name: "magic weapon, greater",
        casterLevel: 18,
        timesPerDay: 1
      },
      {
        name: "restoration, greater",
        casterLevel: 18,
        timesPerDay: 1
      },
      {
        name: "heal",
        casterLevel: 18,
        timesPerDay: 1
      }
    ],
    skills: {
      Craft0: {
        subSkill: "weapons",
        ranks: 18
      },
      Diplomacy: {
        ranks: 9
      },
      Fly: {
        ranks: 0
      },
      Heal: {
        ranks: 9
      },
      Intimidate: {
        ranks: 21
      },
      "Knowledge (arcana)": {
        ranks: 18
      },
      "Knowledge (history)": {
        ranks: 18
      },
      "Knowledge (nobility)": {
        ranks: 21
      },
      "Knowledge (planes)": {
        ranks: 18
      },
      "Knowledge (religion)": {
        ranks: 21
      },
      Perception: {
        ranks: 18
      },
      "Sense Motive": {
        ranks: 18
      },
      Spellcraft: {
        ranks: 21
      },
      Swim: {
        ranks: 17
      }
    },
    special: {
      "divine trigger": {
        type: "Su",
        text: "The Hand of the Inheritor can activate any paladin spell from a spell trigger item as if he were an 18th-level paladin."
      },
      "lay on hands": {
        type: "Ex",
        preText: "15/day, 9d6 hit points, as an 18th-level paladin"
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        damageType: "evil effects or weapons",
        value: 10
      },
      courage: {
        type: "Su",
        text: "The Hand of the Inheritor radiates an aura of courage identical to that of an 18th-level paladin."
      },
      "bull rush": {
        type: "Ex"
      }
    }
  },

  Iophanite: {
    source: "Inner Sea Gods",
    creatureType: "outsider",
    subTypes: [
      "angel",
      "extraplanar",
      "fire",
      "good",
      "lawful"
    ],
    alignments: [
      "Lawful Good"
    ],
    size: "Medium",
    hd: 5,
    hdVal: 10,
    cr: 4,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      maneuverability: "Perfect",
      fly: 40
    },
    abilities: {
      str: 12,
      dex: 17,
      con: 14,
      int: 10,
      wis: 11,
      cha: 13
    },
    feats: [
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Mobility",
        type: "Combat"
      },
      {
        name: "Weapon Finesse",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Blade",
        name: "2 Blades",
        specialAbility: "burn",
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
        value: 5,
        damageType: "magic"
      },
      SR: {
        value: 15
      }
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Heaven)",
    visualDescription: "This disc of flying metal is about the size of a wagon wheel and burns with yellow-white flame.",
    description: "Iophanites comprise a unique classification of messenger angel in service to Iomedae. Energetic, enthusiastic, impulsive, and outgoing, it constantly looks for ways to aid the forces of righteousness in the wars against fiends and villainy. As a being of pure righteous spirit in a burning physical form, an iophanite is often confused for an exotic form of harbinger or lantern archon. Its form is slightly mutable, and it can deform itself into an oval curved like a shield, or manifest simple tendrils to manipulate objects or lash out at opponents. When interacting with mortals, an iophanite usually manifests ripples of flames or pulses of light that thrum in time with its speaking. Most creatures have a difficult time telling iophanites apart, but these angels can always recognize each other. Iophanites are talkative and have excellent memories, making them naturally inclined to carry news, battle orders, and other critical information. Their bodies are hot to the touch, but do not ignite combustibles unless the iophanite wishes it, allowing it to carry scrolls or other flammable goods without risk of destroying them. Of the lawful angels, they tend to be the most creative in terms of working around rules and the most forgiving of others' failures. They are also inclined to serve as the guardians of mortals, being mindful of virtuous and selfsacrificing heroes who might be destined for greatness in much the same way Iomedae herself was. Iophanites measure exactly 5 feet in diameter and weigh 200 pounds.",
    organization: "solitary, pair, or squad (3-8)",
    languages: "Celestial, Infernal; truespeech",
    spellLikeAbilities: [
      {
        name: "protection from evil",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "know direction",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "mage hand",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "burning hands",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "expeditious retreat",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "scorching ray",
        casterLevel: 6,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 0
      },
      Fly: {
        ranks: 0
      },
      Intimidate: {
        ranks: 8
      },
      "Knowledge (geography)": {
        ranks: 8
      },
      "Knowledge (planes)": {
        ranks: 5
      },
      "Knowledge (religion)": {
        ranks: 5
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
      burn: {
        universalMonsterAbility: "Burn",
        saveDC: 10,
        damage: "1d6 fire"
      },
      radiance: {
        type: "Sp",
        text: "An iophanite usually glows with a golden light equivalent to that of a candle. In battle, its glow increases, filling the area within 5 feet. An iophanite can suppress or resume this glow as a free action. Additionally, as a standard action at will an iophanite can intensify its glow to reproduce the effects of the spell flare. A creature can resist this effect with a DC 14 Fortitude save, though evil creatures take a -4 penalty on their saves. The save DC is Charisma-based."
      },
      "shield form": {
        type: "Su",
        text: "Once per day, an iophanite can transform into a +1 spiked light steel shield sized for a Small or Medium creature. An iophanite cannot communicate or use any of its other abilities while in this form. Once it transforms, it cannot change back for 24 hours, though the spell break enchantment can end the transformation early. An iophanite regains its full hit points when it shifts back into its normal form. If the shield is destroyed, the iophanite is killed."
      }
    },
    resistances: [
      {
        damageType: "acid",
        value: 5
      },
      {
        damageType: "cold",
        value: 5
      },
      {
        damageType: "electricity",
        value: 5
      }
    ]
  },

  Pavbagha: {
    source: "Inner Sea Gods",
    creatureType: "outsider",
    subTypes: [
      "extraplanar",
      "lawful"
    ],
    alignments: [
      "Lawful Neutral"
    ],
    size: "Large",
    hd: 5,
    hdVal: 10,
    cr: 4,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 15,
      dex: 13,
      con: 14,
      int: 10,
      wis: 17,
      cha: 10
    },
    feats: [
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Lightning Reflexes",
        type: "General"
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
        specialAbility: "grab",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        specialAbility: "grab",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to fear"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "chaotic"
      },
      SR: {
        value: 15
      },
      naturalArmor: 6
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any (Axis)",
    visualDescription: "This majestic tiger has white fur with deep blue stripes. It glows with divine radiance and radiates an aura of calm.",
    description: "A pavbagha is the reincarnated soul of an enlightened mortal worshiper of Irori transformed into the shape of a white tiger. Having lived one full mortal lifetime (if not more), it is patient, calm, and wise. It prefers to draw on its experience to guide and instruct mortals on ways to better themselves. Many enemies mistake a pavbagha's inner peace for weakness or pacifism, but the servitor was a warrior and a fierce predator in previous lives, and it quickly leaps into battle to defend its students or confront those who would dare destroy knowledge. Pavbaghas patrol the borders of Irori's realm, alert for disturbances in the Serene Circle or forbidden natives of Axis who venture too close to the god's territory. Fulfilling the roles of guardians in the mortal world pleases pavbaghas, whether they're looking after a special person or watching over a sacred site. Although they don't need to eat, they enjoy the challenge and exercise of hunting and stalking prey. Rather than killing its catch, a pavbagha usually lays a single paw upon its target before allowing the creature to run away, secure in its triumph. Some pavbaghas serve in temples and monasteries dedicated to Irori, where they help in training students in physical combat, particularly in how to deal with monsters and other dangerous beasts. Others guide students in meditation, helping them unravel those quandaries they might have on the path to perfection. Still other pavbaghas that make their homes in monasteries on the Material Plane focus their efforts on attending to those who visit Iroran shrines and temples looking for divine assistance. A pavbagha measures about 10 to 12 feet long and weighs between 750 and 900 pounds.",
    organization: "solitary, pair, or pride (3-5)",
    languages: "Celestial, Common, Draconic",
    spellLikeAbilities: [
      {
        name: "feather fall",
        casterLevel: 6,
        limitations: "self only",
        timesPerDay: -1
      },
      {
        name: "guidance",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "light",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "channel vigor",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "cure light wounds",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "true strike",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "bull's strength",
        casterLevel: 6,
        timesPerDay: 1
      },
      {
        name: "dimension door",
        casterLevel: 6,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 4,
        bonuses: [
          {
            source: "inherent",
            value: 4,
            situational: true,
            note: "+8 when jumping"
          }
        ]
      },
      "Knowledge (history)": {
        ranks: 8
      },
      "Knowledge (religion)": {
        ranks: 8
      },
      Perception: {
        ranks: 5
      },
      Stealth: {
        ranks: 5,
        bonuses: [
          {
            source: "inherent",
            value: 4,
            situational: true,
            note: "+8 in tall grass"
          }
        ]
      },
      Swim: {
        ranks: 8
      }
    },
    special: {
      pounce: {
        universalMonsterAbility: "Pounce"
      },
      rake: {
        universalMonsterAbility: "Rake",
        type: "Ex",
        weaponName: 2
      },
      "stunning claw": {
        type: "Ex",
        text: "This ability functions like the Stunning Fist feat, except the pavbagha uses a claw attack instead of an unarmed strike. The servitor can use this ability five times per day. A successful DC 15 Fortitude saving throw negates this effect. The save DC is Wisdom-based.",
        preText: "4/day, DC 15"
      },
      fade: {
        type: "Su",
        text: "As a standard action, a pavbagha can fade from sight, as invisibility, for up to 10 rounds per day. These rounds need not be consecutive. Stunning Claw (Ex) This ability functions like the Stunning Fist feat, except the pavbagha uses a claw attack instead of an unarmed strike. The servitor can use this ability five times per day. A successful DC 15 Fortitude saving throw negates this effect. The save DC is Wisdom-based."
      },
      courage: {
        type: "Su",
        text: "A pavbagha is immune to fear, magical or otherwise. Each ally within 10 feet of it gains a +4 morale bonus on saving throws against fear effects. This ability functions only while the pavbagha is conscious, not if it's unconscious or dead.",
        preText: "10 ft."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  Yethazmari: {
    source: "Inner Sea Gods",
    creatureType: "outsider",
    subTypes: [
      "chaotic",
      "evil",
      "extraplanar",
      "herald"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Large",
    hd: 18,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Scent"
    ],
    speed: {
      base: 50,
      maneuverability: "Good",
      fly: 100
    },
    abilities: {
      str: 26,
      dex: 20,
      con: 22,
      int: 17,
      wis: 23,
      cha: 22
    },
    feats: [
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
        name: "Improved Drag",
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
        weapon: "Bite",
        name: "Bite",
        specialAbility: "poison",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Poison gout",
        qualities: [
          "touch"
        ],
        name: "Poison gout",
        specialAbility: "poison",
        damage: "6d10"
      }
    ],
    immunities: [
      "Immune to fire"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "good"
      },
      SR: {
        value: 26
      },
      naturalArmor: 18
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any (Abyss)",
    visualDescription: "This starving, jackal-like monstrosity has a fanged snake where its tail should be, tattered wings, and smoking eye sockets.",
    description: "Having witnessed the most profane atrocities committed by the Mother of Monsters, the eyes of Lamashtu's herald-the Yethazmari-burned to smoldering coals. Now this ancient monstrosity, often said to be Lamashtu's favored offspring, sees only worlds undone and endless ruinous visions of reality rent by Lamashtu's claws. The Yethazmari stands 14 feet tall and weighs over 1,600 pounds.",
    organization: "solitary",
    languages: "Abyssal, Common, Infernal",
    spellLikeAbilities: [
      {
        name: "blindness/deafness",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "locate creature",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "rage",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "veil",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "baleful polymorph",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "feeblemind",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "dispel magic, greater",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "plane shift",
        casterLevel: 15,
        limitations: "self and willing targets only",
        timesPerDay: 3
      },
      {
        name: "summon",
        casterLevel: 15,
        limitations: "level 4, 1d3 yeth hounds 100%",
        timesPerDay: 3
      },
      {
        name: "control weather",
        casterLevel: 15,
        timesPerDay: 1
      },
      {
        name: "unhallow",
        casterLevel: 15,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 13
      },
      Bluff: {
        ranks: 18
      },
      Climb: {
        ranks: 9
      },
      Fly: {
        ranks: 0
      },
      Intimidate: {
        ranks: 21
      },
      "Knowledge (planes)": {
        ranks: 18
      },
      "Knowledge (religion)": {
        ranks: 12
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
        ranks: 21
      }
    },
    special: {
      bay: {
        type: "Su",
        text: "When the Yethazmari howls or barks, each creature within a 300-foot-radius spread must succeed at a DC 25 Will save or be panicked for 2d4 rounds. This is a sonic mindaffecting fear effect. Evil outsiders are immune to this ability. Whether or not it succeeds at its save, a creature in the area is immune to the Yethazmari's bay for 24 hours. The save DC is Charisma-based. Breath Weapon (Su) The Yethazmari's breath weapon is a jet of smoke. Any nonchaotic creature that takes damage from this breath weapon must succeed at a DC 25 Will save or be confused for 1d6 rounds. The save DC is Constitution-based."
      },
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "30-ft. cone",
        damage: "usable every 1d4 rounds",
        text: "The Yethazmari's breath weapon is a jet of smoke. Any nonchaotic creature that takes damage from this breath weapon must succeed at a DC 25 Will save or be confused for 1d6 rounds. The save DC is Constitution-based."
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Contact or bite-injury; save Fort DC 25; frequency 1/round for 4 rounds; effect 1d6 Str; cure 2 consecutive saves.",
        saveDC: 10
      },
      "soul scream": {
        type: "Su",
        text: "Anytime the Yethazmari takes piercing or slashing damage, its wounds create a terrifying cacophony equivalent to its bay ability. Creatures within 10 feet of it take a -4 penalty on their saves against this effect."
      }
    }
  },

  Swaithe: {
    source: "Inner Sea Gods",
    creatureType: "outsider",
    subTypes: [
      "chaotic",
      "demon",
      "evil",
      "extraplanar"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Small",
    hd: 5,
    hdVal: 10,
    cr: 4,
    racialFeatures: [
      "Blindsense 30 ft.",
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 11,
      dex: 16,
      con: 14,
      int: 13,
      wis: 11,
      cha: 12
    },
    feats: [
      {
        name: "Combat Casting",
        type: "General"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Lightning Reflexes",
        type: "General"
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
      "Immune to gaze attacks, visual effects and attacks relying on sight"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "cold iron"
      },
      SR: {
        value: 15
      },
      naturalArmor: 4
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Abyss)",
    visualDescription: "This creepy ash-gray goblin-like creature has empty eye sockets and scraggly, stained teeth.",
    description: "Dedicated to Lamashtu, the eyeless swaithes are skulking agents of fear and unprovoked beast attacks, formed from sinful souls who, in life, used animals as tools of violence and murder. Swaithes often lure those who seek their aid and advice into falling victim to the darkest secrets of demonology and forbidden magic. If left unsupervised, a swaithe charms animals and drives them toward villages, often under the influence of rage, further stoking the flames of fear and distrust between settlements and the wilderness. Swaithes prefer stealth and subterfuge to direct confrontation, and these foul creatures delight in creating a sense of dread in their prey. Swaithes have been known to slip into a village under the cover of night, use their slumber hex on lone villagers, leave a grisly token (such as a bloody organ or strange twig doll) on its body for the victim to discover later when they wake clueless as to why they fell asleep in the first place. They delight in later repeating these attacks with strange cackling noises, invisibly \"haunting\" a victim's home at night, and driving the target to paranoia and outright panic. Swaithes can join hag covens and contribute to the coven's cooperative magic. Because of its smaller size and weaker power, a swaithe is often treated as a little sister or daughter by the rest of the coven. Any coven that includes a swaithe can add giant vermin, animal growth, and insect plague to the spells the spells they can cast together. Small and slight, most swaithes stand about 3-1/2 feet tall and weigh 50 pounds.",
    organization: "solitary, pair, or gang (3-5)",
    languages: "Abyssal, Goblin, Gnoll, Orc; speak with animals, telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "speak with animals",
        casterLevel: 5,
        timesPerDay: -1
      },
      {
        name: "cause fear",
        casterLevel: 5,
        timesPerDay: -1
      },
      {
        name: "detect magic",
        casterLevel: 5,
        timesPerDay: -1
      },
      {
        name: "ray of enfeeblement",
        casterLevel: 5,
        timesPerDay: -1
      },
      {
        name: "read magic",
        casterLevel: 5,
        timesPerDay: -1
      },
      {
        name: "charm animal",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "invisibility",
        casterLevel: 5,
        limitations: "self only",
        timesPerDay: 3
      },
      {
        name: "rage",
        casterLevel: 5,
        timesPerDay: 1
      },
      {
        name: "waters of lamashtu",
        casterLevel: 5,
        timesPerDay: 1
      }
    ],
    skills: {
      "Handle Animal": {
        ranks: 8
      },
      Intimidate: {
        ranks: 8
      },
      "Knowledge (arcana)": {
        ranks: 8
      },
      "Knowledge (planes)": {
        ranks: 5
      },
      Perception: {
        ranks: 5
      },
      Ride: {
        ranks: 8
      },
      Stealth: {
        ranks: 5
      }
    },
    special: {
      hexes: {
        type: "Su",
        text: "A swaithe has the cackle, evil eye, and misfortune hexes of a 5th-level witch.",
        preText: "cackle, evil eye [-2, 4 rounds], misfortune [1 round]; DC 13"
      },
      eyeless: {
        type: "Ex",
        text: "A swaithe has no eyes, but can sense its immediate surroundings (within 60 feet) as well as a human can see. Hexes (Su) A swaithe has the cackle, evil eye, and misfortune hexes of a 5th-level witch."
      },
      witchcraft: {
        type: "Su",
        text: "A swaithe can use spell completion and spell trigger items as if it were a 5th-level witch."
      }
    }
  },

  Burleev: {
    source: "Inner Sea Gods",
    creatureType: "outsider",
    subTypes: [
      "extraplanar"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 5,
    hdVal: 10,
    cr: 4,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Detect Magic"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 11,
      dex: 10,
      con: 13,
      int: 10,
      wis: 13,
      cha: 16
    },
    feats: [
      {
        name: "Combat Casting",
        type: "General"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Lightning Reflexes",
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
            damageType: "cold|fire"
          }
        ],
        type: "primary"
      }
    ],
    immunities: [
      "Immune to cold or fire"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "magic"
      },
      SR: {
        value: 15
      },
      naturalArmor: 6
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Maelstrom)",
    visualDescription: "This creature looks like a humanoid skeleton with a complete set of internal organs. A violet glow replaces its missing flesh.",
    description: "A burleev is a planar explorer created by the power of Nethys. Some are his mortal petitioners assigned to this role after their death by a deliberate act of the god, whereas others are hapless visitors who were transformed by proximity to Nethys or certain parts of his realm. They serve as his eyes and ears on many planes, using their power to adapt to hostile environments and report their discoveries to his greater servitors. Each has a unique allotment of spells suited for its current task, and a burleev that has completed its service in one inhospitable location might be destroyed and recreated with a different array of arcane talents that suit it better for its next duty. The spells shown above represent those of a typical burleev. A burleev's supernatural nimbus burns brightly with cold or heat, making it painfully cold or hot to the touch. As a burleev discovers information useful to the god of magic, the color of its aura increases in intensity. The eldest of these creatures, or those that have travelled far from Nethys's realm in the Maelstrom for the longest, often burn like living pyres. These burleevs sometimes take sorcerer class levels as their magical power grows to match their ever-increasing knowledge. Should it later be crushed and reformed as part of its continuing duties, such a burleev retains much of its brightness and arcane might. A spellcaster whose research interests mirror those of a burleev can keep such an outsider's attention for days, weeks, or longer so long as the mortal continues to make new and exciting discoveries. Burleevs stand around 6 feet tall and weigh roughly 80 pounds.",
    organization: "solitary, pair, or cabal (3-5)",
    languages: "Abyssal, Celestial, Draconic, Protean; read magic",
    spellLikeAbilities: [
      {
        name: "detect magic",
        casterLevel: 5,
        timesPerDay: -1
      },
      {
        name: "read magic",
        casterLevel: 5,
        timesPerDay: -1
      },
      {
        name: "cure light wounds",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "invisibility",
        casterLevel: 5,
        timesPerDay: 1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 5,
      spells: [
        {
          name: "",
          limitations: 5,
          level: 2
        },
        {
          name: "daze monster",
          level: 2
        },
        {
          name: "(7)-chill touch",
          limitations: 7,
          level: 1
        },
        {
          name: "color spray",
          level: 1
        },
        {
          name: "magic missile",
          level: 1
        },
        {
          name: "sleep",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "daze",
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
          name: "prestidigitation",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Intimidate: {
        ranks: 8
      },
      "Knowledge (arcana)": {
        ranks: 8
      },
      "Knowledge (planes)": {
        ranks: 5
      },
      Perception: {
        ranks: 5
      },
      Spellcraft: {
        ranks: 8
      },
      Stealth: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      "Use Magic Device": {
        ranks: 8
      }
    },
    special: {
      "frostfire spirit": {
        type: "Su",
        text: "A burleev is surrounded by either cold or fire energy. The burleev can change the energy type as a swift action. When surrounded by fire, the burleev has the fire subtype, it adds fire damage to its attacks, and creatures striking it with melee weapons, natural attacks, or unarmed strikes take 1d6 points of fire damage; when surrounded by cold, it instead gains the cold subtype and deals cold damage rather than fire damage. It can also completely dampen its aura for 1d6 rounds, but cannot reactivate it until this time has passed. Spells A burleev cast spells as a 5th-level sorcerer."
      }
    }
  },

  "The Stabbing Beast": {
    source: "Inner Sea Gods",
    creatureType: "outsider",
    subTypes: [
      "evil",
      "extraplanar",
      "herald",
      "shapechanger"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Medium",
    hd: 17,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "All-Around Vision",
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "See in Darkness",
      "See Invisibility"
    ],
    speed: {
      base: 50
    },
    abilities: {
      str: 16,
      dex: 35,
      con: 24,
      int: 13,
      wis: 15,
      cha: 14
    },
    feats: [
      {
        name: "Combat Expertise",
        type: "Combat"
      },
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Deflect Arrows",
        type: "Combat"
      },
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Greater Feint",
        type: "Combat"
      },
      {
        name: "Improved Feint",
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
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Mobility",
        type: "Combat"
      },
      {
        name: "Scorpion Style",
        type: "Combat"
      },
      {
        name: "Spring Attack",
        type: "Combat"
      },
      {
        name: "Two-Weapon Fighting",
        type: "Combat"
      },
      {
        name: "Weapon Finesse",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Short sword",
        enchantments: [
          {
            name: "Enhancement Bonus +1",
            source: "inherent"
          },
          {
            name: "Keen",
            source: "inherent"
          }
        ],
        name: "2 Short swords",
        specialAbility: "bleed",
        damage: "1d6"
      },
      {
        weapon: "Sting",
        name: "Sting",
        specialAbility: "bleed, poison",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Poison stream",
        qualities: [
          "touch"
        ],
        name: "Poison stream",
        specialAbility: "Poison stream"
      }
    ],
    immunities: [
      "Immune to poison"
    ],
    defense: {
      saves: {
        All: [
          {
            value: 4,
            note: "vs. mind-affecting"
          }
        ]
      },
      DR: {
        value: 10,
        damageType: "good and magic"
      },
      SR: {
        value: 26
      },
      naturalArmor: 8
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any land (Axis)",
    visualDescription: "This towering, scorpion-tailed man stalks with a soundless grace and murderous intent.",
    description: "The Stabbing Beast is the herald of Norgorber, the god of greed, murder, secrets, and poison. It is an incredibly dangerous predator that uses its keen intellect and deadly poison to stalk and kill its prey. Its natural form is that of a huge scorpion, but it can also assume an armored humanoid shape suitable for stealth or interacting with Norgorber's followers. Though its main purpose for coming to Golarion is to kill, it has also been called to aid great thefts and bury terrible secrets.",
    organization: "solitary",
    languages: "Abyssal, Celestial, Common, Infernal, Protean; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "see invisibility",
        casterLevel: 17,
        timesPerDay: -1
      },
      {
        name: "absorbing touch",
        casterLevel: 17,
        timesPerDay: -1
      },
      {
        name: "alchemical allocation",
        casterLevel: 17,
        timesPerDay: -1
      },
      {
        name: "charm person",
        casterLevel: 17,
        timesPerDay: -1
      },
      {
        name: "keen edge",
        casterLevel: 17,
        timesPerDay: -1
      },
      {
        name: "poison",
        casterLevel: 17,
        timesPerDay: -1
      },
      {
        name: "true strike",
        casterLevel: 17,
        timesPerDay: -1
      },
      {
        name: "false alibi",
        casterLevel: 17,
        timesPerDay: 3
      },
      {
        name: "teleport, greater",
        casterLevel: 17,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: 3
      },
      {
        name: "invisibility",
        casterLevel: 17,
        timesPerDay: 3
      },
      {
        name: "modify memory",
        casterLevel: 17,
        timesPerDay: 3
      },
      {
        name: "suggestion",
        casterLevel: 17,
        timesPerDay: 3
      },
      {
        name: "summon",
        casterLevel: 17,
        limitations: "level 6, 1 fiendish deadfall scorpion [Bestiary 3 237] 100%",
        timesPerDay: 3
      }
    ],
    skills: {
      Appraise: {
        ranks: 11
      },
      Bluff: {
        ranks: 9,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Climb: {
        ranks: 8
      },
      Craft0: {
        subSkill: "alchemy",
        ranks: 9
      },
      "Knowledge (arcana)": {
        ranks: 9
      },
      "Knowledge (nature)": {
        ranks: 9
      },
      "Knowledge (local)": {
        ranks: 12
      },
      "Knowledge (planes)": {
        ranks: 8
      },
      "Knowledge (religion)": {
        ranks: 8
      },
      Perception: {
        ranks: 17,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      "Sense Motive": {
        ranks: 8
      },
      Stealth: {
        ranks: 17
      }
    },
    special: {
      bleed: {
        universalMonsterAbility: "Bleed",
        damage: "2d6"
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Sting-injury; save Fort DC 25; frequency 1/round for 6 rounds; effect 1d6 Str; cure 2 consecutive saves.",
        saveDC: 10
      },
      "sudden strike": {
        type: "Ex",
        text: "During a surprise round, the herald may act as if it had a full round to act, rather than just one standard action."
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "Huge scorpion or scorpion-tailed human; shapechange"
      },
      "murderer's reward": {
        type: "Su",
        text: "If the Stabbing Beast's attack reduces a target to fewer than 0 hit points, the herald immediately gains 2d6 temporary hit points (or 3d8, if the attack kills the target), but no more than the target's maximum hit points. The temporary hit points last for 1 hour."
      }
    },
    resistances: [
      {
        damageType: "acid",
        value: 30
      },
      {
        damageType: "cold",
        value: 10
      },
      {
        damageType: "electricity",
        value: 10
      },
      {
        damageType: "fire",
        value: 10
      }
    ]
  },

  Karumzek: {
    source: "Inner Sea Gods",
    creatureType: "outsider",
    subTypes: [
      "evil",
      "extraplanar",
      "shapechanger"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Medium",
    hd: 5,
    hdVal: 10,
    cr: 4,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Sense Poison"
    ],
    speed: {
      base: 40,
      climb: 20
    },
    abilities: {
      str: 15,
      dex: 14,
      con: 15,
      int: 8,
      wis: 13,
      cha: 10
    },
    feats: [
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Point-Blank Shot",
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
        specialAbility: "poison",
        damage: "1d6",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to poison"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "good"
      },
      SR: {
        value: 15
      },
      naturalArmor: 5
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Axis)",
    visualDescription: "This human-sized spider has a red eyes, spindly legs, and cloaklike folds of black flesh that obscure its head.",
    description: "A karumzek is a specialized servitor of Norgorber-one focused on Blackfingers, the god's aspect dealing with alchemy, experimentation, and poison. Despite this focus, a karumzek is as fond of murder as a devotee of Father Skinsaw, as covetous of material goods as a follower of the Gray Master, and as careful with secrets as one who worships the Reaper of Reputation. When left to its own devices, a karumzek spends its time crafting poisons, drugs, and other strange concoctions, and is usually armed with several common alchemical weapons-typically acid, alchemist's fire, smokesticks, and thunderstones. Karumzeks enjoy working with mortal servants of Norgorber in order to meet their dark deity's goals. Though karumzeks aren't decidedly brilliant, their inhuman minds and outsider nature often allow them to devise strategies that a mortal humanoid wouldn't normally conceive of. They use their miniature spider form to watch their enemies or spy on their rivals' labs. They also keep to their inconspicuous spider forms to scout ahead when working with groups of cultists, though they quickly revert to their true forms if threatened. Karumzeks enjoy the opportunity to sample concoctions crafted by mortals, slurping and regurgitating drugs and poisons as if noisily sampling a flight of fine wines. Karumzeks have a crude and alien sense of humor, and enjoy making mortals feel uncomfortable or disgusted. They tell foul jokes while in the company of human cultists and put on unnerving performances, such as using vomit swarm and claiming the swarms of spiders are its own pre-sentient young. A karumzek stands about 5 feet tall and weighs around 200 pounds.",
    organization: "solitary, pair, or swarm (3-12)",
    languages: "Abyssal, Infernal, Undercommon",
    spellLikeAbilities: [
      {
        name: "negate aroma",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "bleed",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "prestidigitation",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "stabilize",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "alchemical allocation",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "death knell",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "invisibility",
        casterLevel: 6,
        limitations: "self only",
        timesPerDay: 3
      },
      {
        name: "obscuring mist",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "vomit swarm",
        casterLevel: 6,
        limitations: "spiders only",
        timesPerDay: 3
      }
    ],
    skills: {
      Climb: {
        ranks: 0
      },
      Craft0: {
        subSkill: "alchemy",
        ranks: 5
      },
      "Knowledge (nature)": {
        ranks: 8
      },
      "Knowledge (religion)": {
        ranks: 8
      },
      Perception: {
        ranks: 5
      },
      Stealth: {
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
        text: "Bite-injury; save Fort DC 14; frequency 1/round for 6 rounds; effect 1d3 Str, Dex, or Con (karumzek's choice); cure 2 consecutive saves. Sense Poison (Ex) As a free action, a karumzek can detect if a creature within 15 feet of it is poisoned. It can attempt to determine the exact type of poison, as if using detect poison.",
        saveDC: 10
      },
      "sneak attack": {
        universalMonsterAbility: "Sneak Attack",
        bonus: "1d6"
      },
      web: {
        universalMonsterAbility: "Web",
        saveDC: 10,
        hp: "5 hp"
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "Diminutive spider; vermin shape II"
      },
      "deft limbs": {
        type: "Ex",
        text: "A karumzek's front pair of feet are as nimble and dexterous as human hands. It takes a karumzek half the normal amount of time to create alchemical items."
      }
    }
  },

  "Steward Of The Skein": {
    source: "Inner Sea Gods",
    creatureType: "outsider",
    subTypes: [
      "extraplanar",
      "herald",
      "psychopomp",
      "shapechanger"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 19,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "Blindsense 30 ft.",
      "Darkvision 60 ft.",
      "Detect chaos/evil/good/law",
      "Spiritsense"
    ],
    speed: {
      base: 50,
      maneuverability: "Average",
      fly: 150
    },
    abilities: {
      str: 25,
      dex: 16,
      con: 20,
      int: 18,
      wis: 21,
      cha: 23
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
        name: "Dodge",
        type: "Combat"
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
        name: "Improved Iron Will",
        type: "General"
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
        name: "Mobility",
        type: "Combat"
      },
      {
        name: "Spell Penetration",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Slam",
        name: "2 Slams",
        specialAbility: "gaze",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to electricity, mental control, possession"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "adamantine"
      },
      SR: {
        value: 26
      },
      naturalArmor: 8
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Boneyard)",
    visualDescription: "Skulls adorn the armor of this winged woman. Her helm reveals nothing of her features but a pair of glowing eyes.",
    description: "The Steward of the Skein is Pharasma's foremost agent, a mighty warrior sent to restore the balance of fate, announce auspicious births or deaths, or stem a rising tide of undeath. She often appears as an incorporeal shade, making a pronouncement and then fading away, though countless creatures over the eons have fallen under her armored fists. She stands about 7 feet tall but weighs a mere 200 pounds.",
    organization: "solitary",
    languages: "Abyssal, Celestial, Common, Draconic, Infernal",
    spellLikeAbilities: [
      {
        name: "detect chaos",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "detect evil",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "detect good",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "detect law",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "augury",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "cure light wounds",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "dancing lights",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "death ward",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "detect thoughts",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "disguise self",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "major image",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "teleport, greater",
        casterLevel: 19,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: -1
      },
      {
        name: "breath of life",
        casterLevel: 19,
        timesPerDay: 3
      },
      {
        name: "chain lightning",
        casterLevel: 19,
        timesPerDay: 3
      },
      {
        name: "globe of invulnerability",
        casterLevel: 19,
        timesPerDay: 3
      },
      {
        name: "dispel magic, greater",
        casterLevel: 19,
        timesPerDay: 3
      },
      {
        name: "invisibility, greater",
        casterLevel: 19,
        limitations: "self only",
        timesPerDay: 3
      },
      {
        name: "heal",
        casterLevel: 19,
        timesPerDay: 3
      },
      {
        name: "hold monster",
        casterLevel: 19,
        timesPerDay: 3
      },
      {
        name: "limited wish",
        casterLevel: 19,
        timesPerDay: 3
      },
      {
        name: "plane shift",
        casterLevel: 19,
        timesPerDay: 3
      },
      {
        name: "undeath to death",
        casterLevel: 19,
        timesPerDay: 3
      },
      {
        name: "wall of force",
        casterLevel: 19,
        timesPerDay: 3
      }
    ],
    skills: {
      Bluff: {
        ranks: 10
      },
      Diplomacy: {
        ranks: 10
      },
      Fly: {
        ranks: 12
      },
      "Handle Animal": {
        ranks: 10
      },
      Heal: {
        ranks: 22
      },
      Intimidate: {
        ranks: 22
      },
      "Knowledge (history)": {
        ranks: 22
      },
      "Knowledge (planes)": {
        ranks: 19
      },
      "Knowledge (religion)": {
        ranks: 22
      },
      "Knowledge (nature)": {
        ranks: 9
      },
      Perception: {
        ranks: 19
      },
      "Sense Motive": {
        ranks: 19
      },
      Stealth: {
        ranks: 9
      }
    },
    special: {
      gaze: {
        type: "Su",
        text: "Dazed 2d6 rounds (or stunned if 5 HD or fewer, or held for 2d6 rounds if undead), 60 feet; Will DC 25 negates. A creature that succeeds at its save is immune to the gaze for 24 hours. This is a mind-affecting effect (or a necromancy effect against undead). The save DC is Charisma-based. Incorporeal Form (Su) When incorporeal, the herald can use her spell-like abilities and gaze attack but can't make slam attacks."
      },
      "tugging strands": {
        type: "Ex",
        preText: "Fate subdomain, 3/day"
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "incorporeal form"
      },
      "spirit touch": {
        type: "Ex"
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        value: null
      },
      fate: {
        type: "Ex",
        preText: "20 ft."
      }
    },
    resistances: [
      {
        damageType: "fire",
        value: 10
      }
    ]
  },

  Ahmuuth: {
    source: "Inner Sea Gods",
    creatureType: "outsider",
    subTypes: [
      "extraplanar",
      "psychopomp"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 6,
    hdVal: 10,
    cr: 4,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Spiritsense"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 10,
      dex: 13,
      con: 15,
      int: 10,
      wis: 13,
      cha: 12
    },
    feats: [
      {
        name: "Great Fortitude",
        type: "General"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Dagger",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Dagger",
        enchantments: [
          {
            name: "Enhancement Bonus +1",
            source: "inherent"
          }
        ],
        name: "Dagger",
        damage: "1d4"
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "adamantine"
      },
      SR: {
        value: 15
      },
      naturalArmor: 3
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Boneyard)",
    visualDescription: "This somberly dressed humanoid wears an ominous mask. Gravestones float near it like heavy shields.",
    description: "An ahmuuth is a servitor of Pharasma who is responsible for helping mortals destroy undead and dispatch renegade souls evading the goddess's judgment. Unlike morrigna psychopomps (Bestiary 4 219), who hunt lost or corrupted souls on their own, ahmuuths work with mortal worshipers of Pharasma and try to usher creatures like ghosts to peaceable final ends-when they can. When they can't, they have no qualms about forcing wayward spirts to face their goddess's judgement. An ahmuuth looks like a humanoid wearing an owl mask, and is always accompanied by floating gravestone shards that act as a shield. Like owls, ahmuuths are silent stalkers, revealing themselves only at the moment of attack. Ahmuuths stand just over 6 feet tall and weigh approximately 150 pounds.",
    organization: "solitary, pair, or inquisition (3-8)",
    languages: "Abyssal, Celestial, Infernal",
    spellLikeAbilities: [
      {
        name: "bleed",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "deathwatch",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "detect undead",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "disrupt undead",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "ghost sound",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "summon",
        casterLevel: 6,
        limitations: "level 1, 1 great horned owl 100%",
        timesPerDay: -1
      },
      {
        name: "chill touch",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "ghostbane dirge",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "teleport, greater",
        casterLevel: 6,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: 3
      },
      {
        name: "silence",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "spectral hand",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "ghostly disguise",
        casterLevel: 6,
        timesPerDay: 1
      },
      {
        name: "locate creature",
        casterLevel: 6,
        timesPerDay: 1
      },
      {
        name: "speak with dead",
        casterLevel: 6,
        timesPerDay: 1
      }
    ],
    skills: {
      "Knowledge (religion)": {
        ranks: 9
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
      Survival: {
        ranks: 9
      },
      "Use Magic Device": {
        ranks: 9
      }
    },
    special: {
      "death's dagger": {
        type: "Su",
        text: "An ahmuuth's dagger is treated as a +1 returning undead-bane dagger. It loses this ability if it is held by anyone other than the ahmuuth, and regains it once returned."
      },
      "ectoplasmic focus": {
        type: "Su",
        text: "An ahmuuth's spells and spelllike abilities have their full effect against incorporeal or ethereal creatures."
      },
      "spirit touch": {
        type: "Ex"
      },
      "animated shield": {
        type: "Su",
        text: "An ahmuuth's gravestones defend the it in a manner similar to an animated shield but without a limited duration (Pathfinder RPG Core Rulebook 462). If the stones leave the psychopomp's square or the ahmuuth is slain, they become inert stone."
      }
    }
  },

  Thognorok: {
    source: "Inner Sea Gods",
    creatureType: "outsider",
    subTypes: [
      "aquatic",
      "chaotic",
      "evil",
      "extraplanar",
      "qlippoth"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 5,
    hdVal: 10,
    cr: 4,
    racialFeatures: [
      "All-Around Vision",
      "Darkvision 60 ft."
    ],
    speed: {
      base: 20,
      swim: 30
    },
    abilities: {
      str: 13,
      dex: 8,
      con: 15,
      int: 8,
      wis: 13,
      cha: 12
    },
    feats: [
      {
        name: "Ability Focus",
        type: "Monster",
        value: "Acid web",
        choiceSource: "Ability Focus"
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
        name: "3 Bites",
        specialAbility: "poison",
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "cold iron or lawful"
      },
      SR: {
        value: 15
      },
      naturalArmor: 7
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Abyss)",
    visualDescription: "This obscene mass looks like a melted blob crossed with a spider, ceaselessly lashing out with its hairy, wriggling legs.",
    description: "Although thognoroks are considered servitor qlippoth of Rovagug, they are actually sentient symbiotes that once had the misfortune of dining on the Rough Beast's skin, blood, and other fluids. Equally at home on solid ground or swimming through toxic liquids, a thognorok hunts and consumes foreign materials and creatures that would impede its endless hunger to feed on more divine flesh-whether Rovagug's or another deity's. Because of its tainted connection with the god of destruction, a thognorok obeys any telepathic or chemical command transmitted to it by the god-whether it be a direct command, or even the orders of a powerful priest of the foul god. Thognoroks are rarely directly controlled by Rovagug; instead, they're left to their own destructive rampages. The exception to this is when they accumulate in vast numbers near planar scars and rifts on the Material Plane where the god left some fleck of his terrible carapace or dripped vile and blasphemous liquid from his wounds. In such instances, the thognoroks try to fulfil whatever whim possessed the deity at the moment of his ages-old passing, typically the destruction of some site of celestial power or other random act of devastation. A common thognorok measures about 5 feet tall and weighs over 200 pounds.",
    organization: "solitary, pair, or gang (3-5)",
    languages: "Abyssal; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "acid arrow",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "protection from law",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "vomit swarm",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "excruciating deformation",
        casterLevel: 5,
        timesPerDay: 1
      }
    ],
    skills: {
      Climb: {
        ranks: 8
      },
      Intimidate: {
        ranks: 8
      },
      "Knowledge (planes)": {
        ranks: 5
      },
      Perception: {
        ranks: 5
      },
      Stealth: {
        ranks: 5
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      "acid web": {
        type: "Su",
        text: "This ability functions like the web universal monster ability, except a creature entangled by a thognorok's web also takes 1 point of acid damage each round.",
        preText: "+4 ranged, DC 16, 5 hp"
      },
      "horrific appearance": {
        type: "Su",
        text: "Any creature that witnesses a thognorok's horrific appearance could find itself overwhelmed with revulsion at the qlippoth's constantly sprouting and waving insectile legs, becoming sickened for 1d6 rounds (Will DC 13 negates). The save DC is Charisma-based."
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Bite-injury; save Fort DC 14; frequency 1/round for 4 rounds; effect 1d2 Str; cure 2 consecutive saves.",
        saveDC: 10
      },
      amphibious: {
        universalMonsterAbility: "Amphibious"
      },
      compression: {
        universalMonsterAbility: "Compression"
      },
      amorphous: {
        universalMonsterAbility: "Amorphous"
      }
    }
  },

  "Sunlord Thalachos": {
    source: "Inner Sea Gods",
    creatureType: "outsider",
    subTypes: [
      "angel",
      "extraplanar",
      "good",
      "herald",
      "shapechanger"
    ],
    alignments: [
      "Neutral Good"
    ],
    size: "Large",
    hd: 15,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 50,
      maneuverability: "Good",
      fly: 100
    },
    abilities: {
      str: 24,
      dex: 19,
      con: 24,
      int: 19,
      wis: 23,
      cha: 22
    },
    feats: [
      {
        name: "Double Slice",
        type: "Combat"
      },
      {
        name: "Great Fortitude",
        type: "General"
      },
      {
        name: "Greater Two-Weapon Fighting",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Two-Weapon Fighting",
        type: "Combat"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Two-Weapon Fighting",
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
            name: "Enhancement Bonus +1",
            source: "inherent"
          },
          {
            name: "Flaming",
            source: "inherent"
          },
          {
            name: "Holy",
            source: "inherent"
          }
        ],
        name: "2 Scimitars",
        damage: "1d6"
      },
      {
        weapon: "Composite longbow",
        enchantments: [
          {
            name: "Enhancement Bonus +1",
            source: "inherent"
          },
          {
            name: "Flaming",
            source: "inherent"
          },
          {
            name: "Holy",
            source: "inherent"
          }
        ],
        name: "Composite longbow",
        damage: "1d8",
        strBonus: 7
      }
    ],
    immunities: [
      "Immune to fire"
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
        value: 26
      },
      naturalArmor: 16
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any (extraplanar)",
    visualDescription: "This platinum-skinned, four-armed angelic being glows with the power of the sun. He bears two flaming scimitars and a bow.",
    description: "Sunlord Thalachos is Sarenrae's favorite angel, serving as her liaison to the mortal world, the hosts of astral devas, and the ranks of other celestial rulers. He is the champion of the Dawnf lower and her favorite weapon against the spawn of Rovagug. The herald stands 8 feet tall and weighs 350 pounds.",
    organization: "solitary",
    languages: "Celestial, Common; truespeech",
    spellLikeAbilities: [
      {
        name: "aid",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "continual flame",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "detect evil",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "discern lies",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "dispel evil",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "dispel magic",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "holy aura",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "holy smite",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "holy word",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "invisibility",
        casterLevel: 15,
        limitations: "self only",
        timesPerDay: -1
      },
      {
        name: "plane shift",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "remove curse",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "remove disease",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "remove fear",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "cure light wounds",
        casterLevel: 15,
        timesPerDay: 7
      },
      {
        name: "daylight",
        casterLevel: 15,
        timesPerDay: 7
      },
      {
        name: "see invisibility",
        casterLevel: 15,
        timesPerDay: 7
      },
      {
        name: "blade barrier",
        casterLevel: 15,
        timesPerDay: 1
      },
      {
        name: "fire shield",
        casterLevel: 15,
        timesPerDay: 1
      },
      {
        name: "flame strike",
        casterLevel: 15,
        timesPerDay: 1
      },
      {
        name: "heal",
        casterLevel: 15,
        timesPerDay: 1
      },
      {
        name: "sunburst",
        casterLevel: 15,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 7
      },
      Diplomacy: {
        ranks: 18
      },
      Fly: {
        ranks: 0
      },
      Heal: {
        ranks: 15
      },
      Intimidate: {
        ranks: 18
      },
      "Knowledge (history)": {
        ranks: 18
      },
      "Knowledge (planes)": {
        ranks: 15
      },
      "Knowledge (religion)": {
        ranks: 18
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
      stun: {
        type: "Su",
        text: "If Thalachos strikes a creature twice in the same round with his scimitars (whether two strikes with one scimitar or one strike with each), that creature must succeed at a DC 24 Fortitude save or be stunned for 1d6 rounds. The save DC is Strength-based."
      },
      "divine trigger": {
        type: "Su",
        text: "Thalachos can activate any divine spell from a spell trigger item as if he were a 15th-level caster. Protective Aura (Su) In addition to the normal effects of an angel's protective aura, Thalachos's aura grants the benefits of the endure elements spell."
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "alter self or elemental body II",
        type: ", alter self or elemental body II"
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        damageType: "evil effects or weapons",
        value: 10
      },
      "uncanny dodge": {
        universalMonsterAbility: "Uncanny Dodge"
      }
    }
  },

  Yhohm: {
    source: "Inner Sea Gods",
    creatureType: "outsider",
    subTypes: [
      "extraplanar",
      "fire",
      "good"
    ],
    alignments: [
      "Neutral Good"
    ],
    size: "Tiny",
    hd: 5,
    hdVal: 10,
    cr: 4,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Detect Poison"
    ],
    speed: {
      base: 10,
      maneuverability: "Average",
      fly: 60
    },
    abilities: {
      str: 10,
      dex: 15,
      con: 14,
      int: 10,
      wis: 15,
      cha: 14
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
        name: "Weapon Finesse",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Talon",
        name: "2 Talons",
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
      },
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
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
      "Immune to petrification"
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
        value: 15
      },
      naturalArmor: 3
    },
    space: "2-1/2 ft.",
    reach: "0 ft.",
    environment: "any (Nirvana)",
    visualDescription: "This beautiful dove is as bright as the sun and the size of an eagle, surrounded by an aura of blazing white flames.",
    description: "A yhohm is a spirit of holy fire that serves the Dawnf lower. According to the faithful, each time a phoenix is reborn, a portion of its soul incarnates in Nirvana as a yhohm. Eternally young and obsessed with life, a yhohm is a creature of healing, joyful song, and cleansing fire. While far less intimidating and wise than true phoenixes, yhohms prove far more carefree, as though a great weight has been lifted from their souls. Despite that, many yhohms also harbor a deep sadness, as though they have left some great work undone. A yhohm looks like a white dove, but is as large as an eagle, with eyes like burning coals that shine with the light of the sun. The presence of evil fills it with righteous indignation. It does not need to eat, but enjoys the taste of roasted berries and nuts. A yhohm measures just under 2 feet long and weighs about 4 pounds.",
    organization: "solitary, pair, or flight (3-5)",
    languages: "Celestial",
    spellLikeAbilities: [
      {
        name: "detect poison",
        casterLevel: 5,
        timesPerDay: -1
      },
      {
        name: "light",
        casterLevel: 5,
        timesPerDay: -1
      },
      {
        name: "purify food and drink",
        casterLevel: 5,
        timesPerDay: -1
      },
      {
        name: "stabilize",
        casterLevel: 5,
        timesPerDay: -1
      },
      {
        name: "virtue",
        casterLevel: 5,
        timesPerDay: -1
      },
      {
        name: "cure light wounds",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "daylight",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "flaming sphere",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "dimension door",
        casterLevel: 5,
        limitations: "self only",
        timesPerDay: 1
      },
      {
        name: "restoration, lesser",
        casterLevel: 5,
        timesPerDay: 1
      },
      {
        name: "see invisibility",
        casterLevel: 5,
        timesPerDay: 1
      }
    ],
    skills: {
      Fly: {
        ranks: 8
      },
      Heal: {
        ranks: 8
      },
      "Knowledge (religion)": {
        ranks: 8
      },
      Perception: {
        ranks: 5
      },
      Perform0: {
        subSkill: "sing",
        ranks: 8
      },
      Stealth: {
        ranks: 5
      }
    },
    special: {
      "holy fire": {
        type: "Su",
        text: "Like a flame strike, half the fire damage from a yhohm's fire attacks is fire damage; the other half is divine power and is not subject to fire immunity or resistance."
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        damageType: "cold or evil",
        value: 1
      },
      "self-resurrection": {
        type: "Su",
        text: "A slain yhohm remains dead for only 1d4 rounds unless its body is completely destroyed by an effect such as disintegrate. Otherwise, a fully healed yhohm emerges from the remains 1d4 rounds after death, as if brought back to life via resurrection. The yhohm gains 1 permanent negative level when this occurs. A yhohm can self-resurrect only once per year. If a yhohm dies a second time before that year passes, its death is permanent. A yhohm that dies within the area of a desecrate spell cannot self-resurrect until the desecrate effect ends, at which point the yhohm immediately resurrects. A yhohm brought back to life by other means never gains negative levels as a result. Shroud of Flame (Su) A yhohm can cause its feathers to burst into fire as a free action. As long as its feathers are burning, it deals an additional 1d6 points of fire damage with each natural attack, and any creature within 5 feet must attempt a DC 14 Reflex save each round or take 1d6 points of fire damage at the start of its turn. A creature that attacks the yhohm with a natural or non-reach melee weapon takes 1d6 points of fire damage (no save) with each successful hit. The save DC is Constitution-based."
      },
      "shroud of flame": {
        type: "Su",
        text: "A yhohm can cause its feathers to burst into fire as a free action. As long as its feathers are burning, it deals an additional 1d6 points of fire damage with each natural attack, and any creature within 5 feet must attempt a DC 14 Reflex save each round or take 1d6 points of fire damage at the start of its turn. A creature that attacks the yhohm with a natural or non-reach melee weapon takes 1d6 points of fire damage (no save) with each successful hit. The save DC is Constitution-based.",
        preText: "10 ft., DC 14, 10 rounds"
      }
    },
    resistances: [
      {
        damageType: "electricity",
        value: 10
      }
    ]
  },

  "The Spirit Of Adoration": {
    source: "Inner Sea Gods",
    creatureType: "outsider",
    subTypes: [
      "extraplanar",
      "good",
      "herald",
      "shapechanger"
    ],
    alignments: [
      "Neutral Good"
    ],
    size: "Large",
    hd: 16,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 40,
      maneuverability: "Good",
      fly: 60
    },
    abilities: {
      str: 18,
      dex: 19,
      con: 22,
      int: 19,
      wis: 22,
      cha: 23
    },
    feats: [
      {
        name: "Blind-Fight",
        type: "Combat"
      },
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Improved Iron Will",
        type: "General"
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
        name: "Mobility",
        type: "Combat"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Perception",
        choiceSource: "Skill Focus"
      },
      {
        name: "Step Up",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Glaive",
        choiceSource: "Weapon Focus"
      },
      {
        name: "Wind Stance",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Glaive",
        enchantments: [
          {
            name: "Enhancement Bonus +2",
            source: "inherent"
          },
          {
            name: "Dancing",
            source: "inherent"
          }
        ],
        name: "Glaive",
        damage: "1d10"
      },
      {
        weapon: "Stunning ray",
        name: "Stunning ray",
        specialAbility: "stun",
        damage: "1d8"
      }
    ],
    immunities: [
      "Immune to fire, sonic"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "evil"
      },
      SR: {
        value: 26
      },
      naturalArmor: 10
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any (Nirvana)",
    visualDescription: "This heavenly warrior appears to be a work of art come to life. She grips a fearsome glaive that trails brilliant colors.",
    description: "The Spirit of Adoration is a personification of resolute love, whose power lifts the heaviest heart and overcomes all obstacles. Her true form is that of a 10-foot-tall, angel-winged woman dressed in flowing clothes and bearing a shining steel glaive.",
    organization: "solitary",
    languages: "Auran, Celestial, Common, Ignan, Shadowtongue",
    spellLikeAbilities: [
      {
        name: "calm emotions",
        casterLevel: 16,
        timesPerDay: -1
      },
      {
        name: "good hope",
        casterLevel: 16,
        timesPerDay: -1
      },
      {
        name: "cure moderate wounds",
        casterLevel: 16,
        timesPerDay: -1
      },
      {
        name: "teleport",
        casterLevel: 16,
        limitations: "self plus 50 lbs. only",
        timesPerDay: -1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 4
      },
      Bluff: {
        ranks: 8
      },
      Diplomacy: {
        ranks: 11
      },
      Disguise: {
        ranks: 8
      },
      Fly: {
        ranks: 11
      },
      "Handle Animal": {
        ranks: 8
      },
      Heal: {
        ranks: 8
      },
      Intimidate: {
        ranks: 11
      },
      "Knowledge (religion)": {
        ranks: 8
      },
      Perception: {
        ranks: 16
      },
      Perform0: {
        subSkill: "dance",
        ranks: 16
      },
      "Sense Motive": {
        ranks: 16
      },
      Spellcraft: {
        ranks: 16
      },
      Stealth: {
        ranks: 16
      },
      "Use Magic Device": {
        ranks: 8
      }
    },
    special: {
      "bardic magic": {
        type: "Su",
        text: "Each day, the Spirit can cast any three bard spells of any level and in any combination (caster level 16th)."
      },
      "bardic performance 40 rounds/day": {
        type: "Ex",
        preText: "swift action; countersong, distraction, fascinate, inspire courage +4"
      },
      inspiration: {
        type: "Su",
        text: "The Spirit of Adoration can inspire an intelligent creature by giving it a token of her favor. As long as the creature carries her token, it gains a +4 insight bonus on all Will saving throws, Craft checks, and Perform checks. An inspired bard adds the spirit's Charisma bonus (+6) to his number of bardic performance rounds per day. The spirit retains a link to her token and its carrier as if she had cast the spell status on the carrier. The spirit can end this effect at any time as a free action. The spirit may inspire a number of creatures at a time equal to her Charisma bonus."
      },
      "unearthly grace": {
        type: "Su",
        text: "The spirit adds her Charisma modifier as a racial bonus on all her saving throws, as well as a deflection bonus to her Armor Class."
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "Small or Medium humanoid; alter self"
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        value: null
      },
      charming: {
        type: "Ex",
        preText: "30 ft., DC 24, 1 day"
      },
      stun: {
        type: "Ex"
      }
    },
    resistances: [
      {
        damageType: "acid",
        value: 30
      },
      {
        damageType: "electricity",
        value: 30
      }
    ]
  },

  Dapsara: {
    source: "Inner Sea Gods",
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
    hd: 5,
    hdVal: 10,
    cr: 4,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30,
      maneuverability: "Average",
      fly: 30
    },
    abilities: {
      str: 11,
      dex: 14,
      con: 13,
      int: 10,
      wis: 15,
      cha: 14
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
        name: "Weapon Finesse",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Slam",
        name: "4 Slam",
        damage: "1d4",
        type: "primary"
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
        value: 15
      },
      naturalArmor: 4
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Nirvana)",
    visualDescription: "This otherworldly dancer moves with incredible grace. A second pair of ghostly arms complement the motions of her physical arms.",
    organization: "solitary, pair, or band (3-5)",
    languages: "Celestial, Draconic, Infernal, speak with animals, truespeech",
    spellLikeAbilities: [
      {
        name: "summon instrument",
        casterLevel: 5,
        timesPerDay: -1
      },
      {
        name: "calm emotions",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "confusion, lesser",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "remove fear",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "saving finale",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "eagle's splendor",
        casterLevel: 5,
        timesPerDay: 1
      },
      {
        name: "gallant inspiration",
        casterLevel: 5,
        timesPerDay: 1
      },
      {
        name: "ghostbane dirge",
        casterLevel: 5,
        timesPerDay: 1
      },
      {
        name: "invisibility",
        casterLevel: 5,
        limitations: "self only",
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 5
      },
      "Knowledge (history)": {
        ranks: 8
      },
      "Knowledge (religion)": {
        ranks: 8
      },
      Perception: {
        ranks: 5
      },
      Perform0: {
        subSkill: "any one",
        ranks: 8
      },
      "Sense Motive": {
        ranks: 5
      }
    },
    special: {
      "bardic performance 16 rounds/day": {
        type: "Ex",
        preText: "countersong, distraction, fascinate, inspire competence +2, inspire courage +2"
      },
      "ghostly arms": {
        type: "Su",
        text: "A dapsara's two spectral arms may manipulate corporeal or incorporeal creatures and objects, as if they had the ghost touch weapon property. She may manifest or hide these arms at will in any shape, even in gaseous form."
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "any humanoid or a cloud of perfume; alter self or gaseous form"
      },
      "versatile performance": {
        type: "Su",
        text: "A dapsara has the bard's versatile performance ability, using one Perform bonus in place of the skill bonuses of that Perform skill's associated skills."
      },
      "weapon proficiencies": {
        type: "Ex",
        text: "A dapsara is proficient with all simple weapons, plus the glaive, longsword, rapier, sap, short sword, shortbow, and whip."
      }
    },
    resistances: [
      {
        damageType: "acid",
        value: 5
      },
      {
        damageType: "cold",
        value: 5
      },
      {
        damageType: "electricity",
        value: 5
      },
      {
        damageType: "fire",
        value: 5
      }
    ]
  },

  "The Grand Defender": {
    source: "Inner Sea Gods",
    creatureType: "construct",
    subTypes: [
      "extraplanar",
      "herald"
    ],
    alignments: [
      "Lawful Good"
    ],
    size: "Huge",
    hd: 18,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 32,
      dex: 9,
      con: "-",
      int: 15,
      wis: 14,
      cha: 13
    },
    feats: [
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Great Cleave",
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
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Stand Still",
        type: "Combat"
      },
      {
        name: "Throw Anything",
        type: "Combat"
      },
      {
        name: "Toughness",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Warhammer",
        name: "Warhammer",
        damage: "1d8"
      }
    ],
    immunities: [
      "construct traits",
      "Immune to magic"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "adamantine"
      },
      naturalArmor: 20
    },
    space: "15 ft.",
    reach: "15 ft.",
    environment: "any land (Heaven)",
    visualDescription: "Made of polished iron, this mighty golem resembles a keen-eyed dwarf. It carries a warhammer and a shield bearing Torag's symbol.",
    description: "The Grand Defender is a powerful golem-like tomb that serves as the communal body and resting place of Torag's greatest dwarven heroes. It stands 18 feet tall and weighs approximately 10 tons.",
    organization: "solitary",
    languages: "Celestial, Dwarven, Ignan, Terran",
    otherGear: "+3 heavy steel shield",
    spellLikeAbilities: [],
    skills: {
      "Knowledge (dungeoneering)": {
        ranks: 9
      },
      "Knowledge (engineering)": {
        ranks: 9
      },
      "Knowledge (history)": {
        ranks: 9
      },
      "Knowledge (local)": {
        ranks: 9
      },
      "Knowledge (nature)": {
        ranks: 9
      },
      "Knowledge (religion)": {
        ranks: 9
      },
      Perception: {
        ranks: 18
      }
    },
    special: {
      "breath weapon": {
        type: "Su",
        text: "The herald's poisonous breath weapon functions like that of an iron golem (free action every 1d4 rounds, 10 ft. cube, Fort DC 19, 1d4 Con, 2 consecutive saves). The save DC is Constitution-based. The cloud persists for 1 round."
      },
      "hammer storm": {
        type: "Ex",
        text: "The herald can expel a volley of warhammers from its mouth, which functions like a breath weapon (30-foot cone, 15d6 bludgeoning damage plus Awesome Blow, Reflex 19 half, usable 1/day). If the herald is in its cold iron or mithral form, these hammers count as cold iron or silver, respectively. The herald can exclude any number of squares in the cone. The hammer storm creates 24 physical warhammers that persist after the instantaneous attack and may be used by creatures (though they're normal warhammers, not masterwork, cold iron, or mithral). The herald can spend 1 minute eating 24 warhammers (or an equivalent amount of metal such as that created by its ablative adaptation ability) to recharge this ability. The save DC is Constitution-based. Immunity to Magic (Su) The herald has the same immunity to magic as an iron golem."
      },
      "ablative adaptation": {
        type: "Su",
        text: "As a standard action, the Grand Defender can shed its outer layer of metal, revealing a slightly smaller version of itself underneath. This new form may be made of cold iron (changing its DR to 15/cold iron), mithral (DR 15/silver), or iron (DR 15/adamantine, as normal). Its attacks count as this metal type for overcoming damage reduction. If the herald is brought to 0 hit points, it becomes inert; 1d4 hours after it last took damage, it sheds its outer layer and reanimates at half its normal hit points. Once shed, the outer layer decays into worthless powder over 1d4 minutes."
      },
      "defender's shield": {
        type: "Ex",
        text: "The herald's shield is a +3 heavy steel shield, though it becomes nonmagical if the herald is destroyed or is no longer holding or wearing it."
      },
      "dwarf traits Other": {
        type: "Ex",
        preText: "defensive training, hardy, hatred, stability, stonecunning, weapon familiarity"
      }
    }
  },

  Chalkost: {
    source: "Inner Sea Gods",
    creatureType: "outsider",
    subTypes: [
      "extraplanar",
      "good",
      "lawful",
      "shapechanger"
    ],
    alignments: [
      "Lawful Good"
    ],
    size: "Medium",
    hd: 5,
    hdVal: 10,
    cr: 4,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 20
    },
    abilities: {
      str: 17,
      dex: 10,
      con: 17,
      int: 10,
      wis: 13,
      cha: 8
    },
    feats: [
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
        weapon: "Cestus",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "Cestus",
        damage: "1d4"
      }
    ],
    defense: {
      saves: {
        All: [
          {
            value: 2,
            note: "vs. poison, spells, and spell-like abilities"
          }
        ]
      },
      DR: {
        value: 5,
        damageType: "chaotic"
      },
      SR: {
        value: 15
      },
      naturalArmor: 6
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Heaven)",
    visualDescription: "This dwarf-like being of earth and metal has coppery hair and an open-faced helmet bearing two stylized boar tusks.",
    organization: "solitary, pair, or team (3-5)",
    languages: "Celestial, Dwarven, Goblin, Orc",
    spellLikeAbilities: [
      {
        name: "guidance",
        casterLevel: 5,
        timesPerDay: -1
      },
      {
        name: "light",
        casterLevel: 5,
        timesPerDay: -1
      },
      {
        name: "mending",
        casterLevel: 5,
        timesPerDay: -1
      },
      {
        name: "resistance",
        casterLevel: 5,
        timesPerDay: -1
      },
      {
        name: "cure light wounds",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "magic weapon",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "bear's endurance",
        casterLevel: 5,
        timesPerDay: 1
      },
      {
        name: "crafter's fortune",
        casterLevel: 5,
        timesPerDay: 1
      },
      {
        name: "status",
        casterLevel: 5,
        timesPerDay: 1
      }
    ],
    skills: {
      Craft0: {
        subSkill: "any one",
        ranks: 5
      },
      "Disable Device": {
        ranks: 8
      },
      "Knowledge (dungeoneering)": {
        ranks: 8
      },
      "Knowledge (engineering)": {
        ranks: 8
      },
      "Knowledge (religion)": {
        ranks: 8
      },
      Perception: {
        ranks: 5
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "5-ft. cone",
        damage: "usable every 1d4 rounds"
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "boar; beast shape I"
      },
      "copper boar form": {
        type: "Su",
        text: "When a chalkost uses its change shape ability, it can turn into a boar with metallic flesh, coppery bristles, and glistening steel tusks. In this form, a chalkost retains its damage reduction and energy resistances. The copper boar has the same statistics as a normal boar, but its natural armor bonus is +6 and its gore attack deals an extra 1d6 points of electricity damage on a successful hit."
      },
      "dwarf blood": {
        type: "Ex",
        text: "A chalkost counts as a dwarf for any effect related to race, and has the hardy, slow and steady, and stability dwarven racial traits."
      },
      "shock cestus": {
        type: "Su",
        text: "As a free action, a chalkost can summon or dismiss a masterwork cestus on one of its hands. While wielded by the chalkost, the cestus deals an extra 1d6 points of electricity damage on a successful hit. If the cestus is given away or taken, the chalkost loses this ability until it reclaims its weapon."
      }
    },
    resistances: [
      {
        damageType: "electricity",
        value: 10
      },
      {
        damageType: "fire",
        value: 10
      }
    ]
  },

  Sarcovalt: {
    source: "Inner Sea Gods",
    creatureType: "outsider",
    subTypes: [
      "evil",
      "extraplanar"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Tiny",
    hd: 4,
    hdVal: 10,
    cr: 4,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Deathwatch"
    ],
    speed: {
      base: 20,
      climb: 20,
      maneuverability: "Good",
      fly: 60
    },
    abilities: {
      str: 12,
      dex: 17,
      con: 16,
      int: 10,
      wis: 13,
      cha: 7
    },
    feats: [
      {
        name: "Great Fortitude",
        type: "General"
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
        specialAbility: "bleed, disease, grab",
        damage: "1d6",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to disease"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "good or silver"
      },
      SR: {
        value: 15
      },
      naturalArmor: 4
    },
    space: "2-1/2 ft.",
    reach: "0 ft.",
    environment: "any (Abaddon)",
    visualDescription: "This horse-sized housef ly has a vulture's neck growing out of its body, capped with a fleshless vulture skull.",
    description: "Sarcovalts are disgusting carrion-eating servants of Urgathoa that pick over the filth and the remnants of devoured souls in her planar realm. They have little personal identity and barely remember events more than a few hours old. While they are intelligent enough to converse and recognize their own kind, other servitors of the Pallid Princess, and daemons, they tend to think of other creatures as either threats or food. Sarcovalts sometimes work together to kill larger prey, but are usually content to eat scraps left behind by more powerful outsiders. A sarcovalt resembles an enormous fly with a vulture's neck-but instead of a fleshy head, its head is the naked skull of a vulture with glistening black eyes. When its skull is detached, its bald neck ends in a stump of tattered flesh. It savors the opportunity to drink blood, but cannot swallow it, and therefore its skull is normally painted with the life-f luid of its victims. In their eagerness to shred bodies, especially living flesh, these eager scavengers often get small treasure like amulets, rings, and other equipment worn close to the body trapped within their skulls. After letting such items rattle around in their heads for a few days, they unceremoniously vomit them up coated in the vile remains of their last several meals. Sarcovalts use their skulls similarly to how psychopomps wear masks, and the first sarcovalts might have been created in mockery of Pharasma's servants. Servants of Urgathoa frequently summon sarcovalts to serve either as scouts and sentinels, or as menaces to sow fear and disease in places they seek to terrorize. In the best cases, a single sarcovalt can spread disease resulting in the deaths of dozens, giving Urgathoa's priests ample bodies to raise as undead or use in more terrible plots when they reveal themselves. Sarcovalts measure 2 feet long and weigh 5 pounds.",
    organization: "solitary, pair, or swarm (3-5)",
    languages: "Abyssal, Infernal; telepathy 30 ft.",
    spellLikeAbilities: [
      {
        name: "deathwatch",
        casterLevel: 4,
        timesPerDay: -1
      },
      {
        name: "purify food and drink",
        casterLevel: 4,
        timesPerDay: -1
      },
      {
        name: "death knell",
        casterLevel: 4,
        timesPerDay: 3
      },
      {
        name: "animate dead, lesser",
        casterLevel: 4,
        timesPerDay: 3
      },
      {
        name: "vomit swarm",
        casterLevel: 4,
        limitations: "see below",
        timesPerDay: 3
      },
      {
        name: "acid arrow",
        casterLevel: 4,
        timesPerDay: 1
      },
      {
        name: "contagion",
        casterLevel: 4,
        timesPerDay: 1
      },
      {
        name: "stinking cloud",
        casterLevel: 4,
        timesPerDay: 1
      }
    ],
    skills: {
      Climb: {
        ranks: 0
      },
      Fly: {
        ranks: 0
      },
      Intimidate: {
        ranks: 7
      },
      "Knowledge (nature)": {
        ranks: 7
      },
      "Knowledge (religion)": {
        ranks: 7
      },
      Perception: {
        ranks: 4
      },
      Stealth: {
        ranks: 4
      },
      Survival: {
        ranks: 7
      }
    },
    special: {
      bleed: {
        universalMonsterAbility: "Bleed",
        damage: "1d6"
      },
      "blood drain": {
        universalMonsterAbility: "Blood Drain",
        damage: "1d2 Constitution"
      },
      "detach head": {
        type: "Su",
        text: "A sarcovalt can survive without its head. Attacks that sever its head (such as those of a vorpal weapon) do not kill it. If attacked by multiple creatures, it grapples one opponent, detaches its head (which continues to drain blood), and uses its body to continue attacking with spell-like abilities. Its head and body share a common pool of hit points but are otherwise treated as different creatures while separated. The head is AC 19, touch 15, flat-footed 16 (+3 Dex, +4 natural, +2 size) and can fly at the creature's normal speed. The head cannot initiate attacks on its own, and if removed from a target, it flies back to the body on its next turn. The body cannot see, but it can perceive through the head's eye cavities if it has line of effect to the head."
      },
      disease: {
        universalMonsterAbility: "Disease",
        name: "Filth Fever",
        type: "Ex",
        text: "Filth Fever: Bite-injury; save Fort DC 15; onset 1d3 days; frequency 1 day; effect 1d3 Dex and 1d3 Con; cure 2 consecutive saves."
      },
      ferocity: {
        universalMonsterAbility: "Ferocity"
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
        damageType: "cold",
        value: 10
      }
    ]
  },

  "Th E Prince In Chains": {
    source: "Inner Sea Gods",
    creatureType: "outsider",
    subTypes: [
      "evil",
      "extraplanar",
      "kyton",
      "lawful"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Large",
    hd: 15,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "Blindsight 60 ft.",
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 40,
      maneuverability: "Good",
      fly: 50
    },
    abilities: {
      str: 28,
      dex: 16,
      con: 26,
      int: 13,
      wis: 16,
      cha: 20
    },
    feats: [
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
        name: "Improved Overrun",
        type: "Combat"
      },
      {
        name: "Improved Sunder",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Run",
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
        specialAbility: "trip, vicious critical",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Tentacle",
        name: "2 Tentacles",
        specialAbility: "vicious critical",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to critical hits, sneak attacks"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "good"
      },
      naturalArmor: 20
    },
    space: "10 ft.",
    reach: "10 ft. (15 ft. with tentacle)",
    environment: "any (Plane of Shadow)",
    visualDescription: "Animate, rusting chains simultaneously bind and lash out from this gigantic, skinless, wolf-like monstrosity.",
    description: "Zon-Kuthon has stripped the flesh from this spirit-wolf and replaced it with haphazard layers of metal, leather, and necrotic tissue to create a terrifying herald. The Prince in Chains stands 18 feet tall and weighs nearly 3 tons.",
    organization: "solitary",
    languages: "Auran, Common, Infernal, Sylvan",
    spellLikeAbilities: [
      {
        name: "pass without trace",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "death knell",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "deeper darkness",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "desecrate",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "shadow walk",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "bestow curse",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "blindness/deafness",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "crushing despair",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "eyebite",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "invisibility, greater",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "shadow conjuration, greater",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "find the path",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "plane shift",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "symbol of pain",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "blasphemy",
        casterLevel: 18,
        timesPerDay: 1
      },
      {
        name: "slay living",
        casterLevel: 18,
        timesPerDay: 1
      },
      {
        name: "unhallow",
        casterLevel: 18,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 14
      },
      Climb: {
        ranks: 8
      },
      Fly: {
        ranks: 0
      },
      Intimidate: {
        ranks: 18
      },
      "Knowledge (planes)": {
        ranks: 15
      },
      "Knowledge (religion)": {
        ranks: 10
      },
      Perception: {
        ranks: 15
      },
      Stealth: {
        ranks: 15
      },
      Survival: {
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
      "howl of despair": {
        type: "Su",
        text: "The Prince in Chains can loose a howl of immortal agony once every 1d4 rounds. All nonevil creatures within 60 feet must succeed at a DC 22 Will saving throw or take 6d6 points of sonic damage. Any within 10 feet who fail their saves are also affected as per the insanity spell. This is a sonic, mind-affecting effect. The save DC is Charisma-based. Unnerving Gaze (Ex) A creature that fails its save against the herald's unnerving gaze is staggered for 1 round."
      },
      "unnerving gaze": {
        type: "Ex",
        text: "A creature that fails its save against the herald's unnerving gaze is staggered for 1 round.",
        preText: "30 ft., DC 22"
      },
      "vicious critical": {
        type: "Ex",
        text: "If the herald confirms a critical hit, the attack also deals 2 points of Constitution damage."
      },
      "no breath": {
        universalMonsterAbility: "No Breath",
        text: ""
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        condition: "see exaction",
        value: null
      },
      exaction: {
        type: "Ex",
        text: "The herald is healed of 10 points of damage in any round it deals damage, as if it had fast healing 10."
      },
      chainstorm: {
        type: "Ex",
        text: "Chains and flesh tendrils constantly lash at anything that approaches the herald. A creature that enters the area or begins its turn within it takes 1d12 points of bludgeoning and slashing damage. The chains entangle any creature so long as it's in the area (Reflex DC 25 negates). The save DC is Constitution-based.",
        preText: "15 ft., DC 25"
      },
      trip: {
        universalMonsterAbility: "Trip"
      }
    }
  },

  "Lamp Adarius": {
    source: "Inner Sea Gods",
    creatureType: "outsider",
    subTypes: [
      "evil",
      "extraplanar",
      "kyton",
      "lawful"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Medium",
    hd: 5,
    hdVal: 10,
    cr: 4,
    racialFeatures: [
      "Darkvision 60 ft.",
      "See in Darkness"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 11,
      dex: 15,
      con: 14,
      int: 11,
      wis: 10,
      cha: 12
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
        name: "Iron Will",
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
        weapon: "Incorporeal touch",
        name: "Incorporeal touch",
        damage: "1d6"
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "good or silver"
      },
      SR: {
        value: 15
      },
      naturalArmor: 3
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Shadow Plane)",
    visualDescription: "Ragged wounds on one side of this leather-clad humanoid's face and body mark the transition between flesh and shifting shadowstuff.",
    description: "A kyton lampadarius is a servitor of the Midnight Lord who, instead of continually replacing parts of its body with those of other creatures, embraced the will of Zon-Kuthon by cutting away its flesh and replacing the lost parts with burning darkness from the Shadow Plane. Walking a fine line between outsider and undead, a lampadarius balances the freezing pain of its new body parts with the burning pleasures of its remaining flesh, continually indulging both as it gains power. It yearns to attain a perfect body of true shadows, yet pines for it missing flesh and the potential for sensation lost. A lampadarius resembles a common evangelist kyton (Pathfinder RPG Bestiary 185) with many old and new wounds, but instead of it being wrapped in chains, entire limbs and half of its face are nothing more than shifting shadow. Individuals have vastly varied appearances-some have a shadowy right arm, others a shadowy left, some replace both limbs on the same side, others alternate which limbs are replaced-but all have some portion of the face removed. All are very close to being half-shadow, as a lesser amount is insufficient to grant them power, and too much converts them to some other kind of shadow-creature. Lampadariuses stand just under 6 feet tall and weigh about 80 pounds.",
    organization: "solitary, pair, or choir (3-5)",
    languages: "Common, Infernal, Shadowtongue",
    spellLikeAbilities: [
      {
        name: "blur",
        casterLevel: 5,
        timesPerDay: -1
      },
      {
        name: "bleed",
        casterLevel: 5,
        timesPerDay: -1
      },
      {
        name: "dancing lights",
        casterLevel: 5,
        timesPerDay: -1
      },
      {
        name: "detect magic",
        casterLevel: 5,
        timesPerDay: -1
      },
      {
        name: "darkness",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "invisibility",
        casterLevel: 5,
        limitations: "self only",
        timesPerDay: 3
      },
      {
        name: "levitate",
        casterLevel: 5,
        limitations: "self only",
        timesPerDay: 3
      },
      {
        name: "deeper darkness",
        casterLevel: 5,
        timesPerDay: 1
      },
      {
        name: "shadow step",
        casterLevel: 5,
        timesPerDay: 1
      }
    ],
    skills: {
      Heal: {
        ranks: 8
      },
      Intimidate: {
        ranks: 8
      },
      "Knowledge (arcana)": {
        ranks: 8
      },
      "Knowledge (planes)": {
        ranks: 5
      },
      Perception: {
        ranks: 5
      },
      Stealth: {
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
      "unnerving gaze": {
        type: "Su",
        text: "Shaken, range 30 ft., Will DC 13 negates. A lampadarius can make an opponent feel like its own shadow is attempting to claw its face. Those who fail their saves are shaken for 1d3 rounds. This ability has no effect if there is no light present to create shadows. In dim illumination, the DC increases by 2. This is a mind-affecting fear effect. The save DC is Charisma-based.",
        preText: "30 ft., DC 13"
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        damageType: "good weapons and spells, silver weapons",
        value: 2
      },
      "semi-incorporeal": {
        type: "Su",
        text: "Some of a lampadarius's body is composed of incorporeal shadow. As a result, it has a 25% chance of taking no damage from any nonmagical attack. It takes only 75% of the damage from magic weapons, spells, spell-like effects, and supernatural effects. However, it takes full damage from incorporeal creatures and effects, force effects, and ghost touch weapons. Strength Damage (Su) A lampadarius's touch deals 1d6 points of Strength damage to a living creature. This is a negative energy effect. If the kyton deals Strength damage that equals or exceeds the target's Strength score, the kyton gains the benefits of death knell for 1 hour. Unnerving Gaze (Su) Shaken, range 30 ft., Will DC 13 negates. A lampadarius can make an opponent feel like its own shadow is attempting to claw its face. Those who fail their saves are shaken for 1d3 rounds. This ability has no effect if there is no light present to create shadows. In dim illumination, the DC increases by 2. This is a mind-affecting fear effect. The save DC is Charisma-based."
      }
    }
  },

};
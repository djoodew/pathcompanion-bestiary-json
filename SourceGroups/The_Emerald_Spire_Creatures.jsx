
export const The_Emerald_SpireCreatures = {
  "Bone Priest": {
    source: "The Emerald Spire",
    creatureType: "undead",
    subTypes: [],
    alignments: [
      "Lawful Evil"
    ],
    size: "Medium",
    hd: 5,
    hdVal: 8,
    cr: 4,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 14,
      dex: 15,
      con: "-",
      int: 11,
      wis: 16,
      cha: 17
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
        name: "Weapon Focus",
        type: "Combat",
        value: "Bastard sword",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Bastard sword",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "Bastard sword",
        damage: "1d10"
      },
      {
        weapon: "Slam",
        name: "Slam",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to cold"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "bludgeoning and magic"
      },
      naturalArmor: 4
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "This skeletal creature wears rotting robes, and carries a sword in its talon-like hands. An evil blue light dances in its empty eye sockets.",
    description: "Bone priests are undead servants of evil gods, condemned to continue serving for decades or centuries after death. In life, bone priests were acolytes or underpriests who failed at some difficult test or fell in battle against powerful enemies of the faith. Their dark gods have rewarded their fanaticism by giving another chance to demonstrate their worthiness. Bone priests retain the spellcasting ability and some of the domain spells they possessed in life. A typical bone priest casts spells as a 3rd-level cleric and has the bonus spells of one of the domains it had originally-usually Darkness, Death, Destruction, Evil, or Madness (the bone priest presented here possesses the Madness domain). While bone priests occasionally arise with no outside intervention other than the will of their gods, they are normally created through a profane ritual that culminates in the casting of a create undead spell by a caster of at least 11th level.",
    organization: "solitary",
    languages: "Common, Undercommon",
    spellLikeAbilities: [],
    preparedSpells: {
      casterLevel: 3,
      spells: [
        {
          name: "hold person",
          level: 2
        },
        {
          name: "spiritual weapon",
          level: 2
        },
        {
          name: "touch of idiocy",
          level: 2
        },
        {
          name: "cause fear",
          level: 1
        },
        {
          name: "command",
          level: 1
        },
        {
          name: "confusion, lesser",
          level: 1
        },
        {
          name: "protection from good",
          level: 1
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "guidance",
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
      Intimidate: {
        ranks: 5
      },
      "Knowledge (religion)": {
        ranks: 5
      },
      Perception: {
        ranks: 5
      },
      Stealth: {
        ranks: 5
      }
    },
    special: {
      "death drink": {
        type: "Su",
        text: "When a bone priest reduces a creature to 0 hit points or fewer with a melee attack or coup de grace, it can use death knell against that creature as a free action. It doesn't need to be touching the creature to use this ability. Spells A bone priest casts spells as 3rd-level cleric. It also gains domain spells from the Madness domain, but none of the other domain abilities or cleric abilities."
      },
      "unnerving gaze": {
        type: "Su",
        text: "A bone priest can make a gaze attack that strikes fear into the hearts of all creatures within a 30- foot radius that can see the bone priest. These creatures must succeed at a DC 15 Will saving throw or be shaken for 1d4 rounds. This is a mind-affecting fear effect. The save DC is Charisma-based."
      },
      "channel resistance": {
        universalMonsterAbility: "Channel Resistance",
        bonus: 2
      }
    }
  },

  "Caustic Stalker": {
    source: "The Emerald Spire",
    creatureType: "outsider",
    subTypes: [
      "air",
      "elemental",
      "extraplanar"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 7,
    hdVal: 10,
    cr: 7,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      maneuverability: "Perfect",
      fly: 40
    },
    abilities: {
      str: "-",
      dex: 27,
      con: 20,
      int: 5,
      wis: 14,
      cha: 11
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
        weapon: "Slam",
        name: "2 Slams",
        specialAbility: "chemical burn",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to acid"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "-"
      }
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any underground",
    visualDescription: "Reaching hands, a fierce and eerie visage, and a powerfully abrasive stench all stem from this hissing cloud of churning gases.",
    description: "Though caustic stalkers arise from pockets of poisonous gas in the Plane of Air, they far prefer to congregate amid the great heat and pressure where the Plane of Earth and Plane of Fire meet. These conditions are also common in the depths of many worlds on the Material Plane. Caustic stalkers are usually content to drift amid the searing rocks and toxic fumes of volcanic depths, but occasionally emerge into more spacious areas. When they emerge, they are quick to lash out at anything that disturbs their explorations, especially if the area is windy.",
    organization: "solitary, pair, smog (3-10)",
    languages: "Auran",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 2
      },
      Perception: {
        ranks: 7
      },
      Stealth: {
        ranks: 7
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "15-ft. cone",
        damage: "usable every 1d4 rounds",
        text: "In addition to taking acid damage, any creature harmed by a caustic stalker's breath weapon must succeed at an additional DC 18 Fortitude saving throw or be affected by caustic creep poison. Caustic Creep-inhaled; save Fort DC 18; frequency 1/round for 4 rounds; effect 1d4 Con; cure 2 consecutive saves. The save DC is Constitution-based."
      },
      "chemical burn": {
        type: "Su",
        text: "Any creature struck by the caustic stalker, or that strikes it with a natural weapon or unarmed attack, is affected as if by the burn special attack, but takes acid damage instead of fire damage. The chemical burn persists for multiple rounds, just as a normal burn, but can be ended early if the affected creature is doused in at least 1 gallon of liquid (requiring a full-round action from the victim or another creature) or fully submerges itself in water.",
        preText: "1d6, DC 18"
      },
      "misty form": {
        type: "Su",
        text: " caustic stalker's body is composed of a semisolid chemical mist similar to thick foam. The caustic stalker does not have a Strength score and cannot manipulate or wear solid objects. This form grants it the amorphous defensive ability, and enables it to move through areas as small as 1 inch in diameter with no reduction to its speed. A caustic stalker cannot enter water or other fluids, and is treated as a creature two size categories smaller than its actual size (Tiny for most caustic stalkers) for the purposes of how wind affects it. Vulnerable to Wind (Ex)A caustic stalker takes damage every round that it's exposed to stronger than moderate winds: 1d6 points of damage for strong winds, 2d6 points of damage for severe winds, and an additional 1d6 points of damage for each wind force category beyond severe (Pathfinder RPG Core Rulebook 439). Gust of wind is considered severe wind for this ability. A caustic stalker cannot use its breath weapon while being affected by stronger than moderate winds and for 1 minute afterward."
      },
      amorphous: {
        universalMonsterAbility: "Amorphous"
      }
    }
  },

  "Emerald Automaton": {
    source: "The Emerald Spire",
    creatureType: "construct",
    subTypes: [],
    alignments: [
      "Neutral"
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
      base: 30
    },
    abilities: {
      str: 20,
      dex: 13,
      con: "-",
      int: "-",
      wis: 11,
      cha: 1
    },
    feats: [
      {
        name: "Improved Sunder",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Guisarme",
        name: "Guisarme",
        damage: "2d4"
      },
      {
        weapon: "Longsword",
        name: "Longsword",
        damage: "1d8"
      },
      {
        weapon: "Slam",
        name: "Slam",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "construct traits"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "adamantine"
      },
      naturalArmor: 6
    },
    space: "5 ft.",
    reach: "5 ft. (10 ft. with guisarme)",
    environment: "any",
    visualDescription: "An eerie green glow shines through the seams of this mechanical creature's armor.",
    description: "Like other constructs, an emerald automaton is a mindless, unliving machine that exists only to follow the orders of its creator. It is a capable soldier and can wield almost any weapon its creator chooses to provide it, fighting until it or its target is destroyed. In combat, emerald automatons often wield polearms and make use of their reach. When multiple automatons are fighting together, it's common for one to sunder a target's shield or weapon and the rest to gang up against the target. Getting inside the reach of an emerald automaton is no guarantee of safety-the constructs are quite strong, and can strike with a powerful slam attack at need. When badly damaged, an emerald automaton begins to emit crackling green sparks of electricity that can severely shock nearby creatures. Construction An emerald automaton begins as an articulated iron frame connected with thick copper wiring, and is then covered by armored plates. These materials cost at least 500 gp. The creator must then use a fist-sized shard of crystal from the Emerald Spire as the automaton's main battery, placing it in the construct's hollow chest. EMERALD AUTOMATON CL 6th; Price 12,000 gp Construction Requirements Craft Construct, lesser geas, shocking grasp, creator must be caster level 6th; Skill Craft (armor) DC 20; Cost 6,500 gp",
    organization: "solitary, pair, or squad (3-8)",
    spellLikeAbilities: [],
    skills: {},
    special: {
      electricity: {
        name: "electricity aura",
        preText: "5 ft., DC 12"
      },
      proficient: {
        type: "Ex",
        text: "An emerald automaton is proficient with all simple and martial weapons."
      }
    },
    resistances: [
      "magic dependent"
    ]
  },

  "Lava Lurker": {
    source: "The Emerald Spire",
    creatureType: "outsider",
    subTypes: [
      "elemental",
      "extraplanar",
      "fire"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 12,
    hdVal: 10,
    cr: 9,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Tremorsense 60 ft."
    ],
    speed: {
      base: 30,
      swim: 30
    },
    abilities: {
      str: 26,
      dex: 13,
      con: 18,
      int: 5,
      wis: 10,
      cha: 11
    },
    feats: [
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Deadly Aim",
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
        name: "Weapon Focus",
        type: "Combat",
        value: "Magma ball",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Slam",
        name: "2 Slams",
        specialAbility: "burn",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Magma ball",
        name: "Magma ball",
        specialAbility: "burn",
        damage: "1d6"
      }
    ],
    immunities: [
      "Immune to electricity"
    ],
    defense: {
      naturalArmor: 11
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any volcano or underground",
    visualDescription: "Spatters of magma sear everything that comes near this vaguely humanoid mass of endlessly melting and reforming rock.",
    description: "Territorial swimmers through the molten veins that crisscross the hottest depths of mortal worlds and the Elemental Plane of Earth, lava lurkers claim active magma flows and the fiery lakes within smoldering volcanoes as their homes. Most are content to stay within such burning depths, threatening only those foolish enough to wander close to such obviously deadly natural hazards. But occasionally, during volcanic eruptions or other explosive geological events, lava lurkers are forced from their comfortable homes, becoming unwilling riders on blazing rapids. While these disasters rarely threaten lava lurkers' elemental forms, they do often force the creatures into-or worse, strand them in-areas they find uncomfortably cool. Dull-witted lava lurkers eagerly sow fires and throw magma as they wander semi-aimlessly, doing what they can to create more comfortable surroundings or seeking other nearby warm places-like furnaces or bonfires-as they try to find their way back to active volcanic flows. They care little for non-elemental creatures, being baffled and annoyed by the shrill noises such creatures make when they're exposed to even the slightest fleck of molten rock. Though lava lurkers live in earth and flame, they die with a chilling inward gasp. If slain, the final surge of a lava lurker's animating fires consumes the nearby air, creating a momentary vacuum that extinguishes surrounding flames. This instantly transforms a lava lurker's body into a perfectly cool hunk of rock and often quells lesser flames nearby, if only temporarily. upply of molten rock, cooled rock might melt again after only a few moments. The save DC is Constitution-based.",
    organization: "solitary, pair, or flow (3-6)",
    languages: "Ignan",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 12
      },
      Stealth: {
        ranks: 8,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Swim: {
        ranks: 15
      }
    },
    special: {
      burn: {
        universalMonsterAbility: "Burn",
        saveDC: 10,
        damage: "1d6 fire"
      },
      "death throes": {
        type: "Ex",
        text: "When a lava lurker is slain, its body implodes, creating an extinguishing vacuum. All creatures within a 5-foot-radius burst take 8d6 points of cold damage (Reflex DC 20 half). In addition to the damage, every affected square is targeted by quench (CL 10th). This also targets all fire effects and magic items that create and control flame. If the lava lurker is killed in a pool of magma, it solidifies the rock within the area of effect, though in an active magma flow or similar natural and nearly endless s Vulnerable to Water (Ex) If a significant amount of water- such as the contents of a large bucket, the liquid created by a create water spell, or a blow from a water elemental- strikes a lava lurker, the lava lurker must succeed at a DC 20 Fortitude save or be staggered for 2d4 rounds. A lava lurker that is immersed in water is automatically staggered and must succeed at a DC 20 Fortitude save each round or be petrified (this DC increases by 1 on each subsequent round), reverting to its molten stone form once the water is gone."
      }
    }
  },

  "Moon Spider": {
    source: "The Emerald Spire",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Neutral Evil"
    ],
    size: "Medium",
    hd: 3,
    hdVal: 10,
    cr: 2,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Tremorsense 60 ft."
    ],
    speed: {
      base: 30,
      climb: 30
    },
    abilities: {
      str: 12,
      dex: 15,
      con: 14,
      int: 5,
      wis: 14,
      cha: 7
    },
    feats: [
      {
        name: "Ability Focus",
        type: "Monster",
        value: "Poison",
        choiceSource: "Ability Focus"
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
        specialAbility: "poison",
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "temperate forest",
    visualDescription: "Pale and round-bodied, this giant spider is the size of a large dog. Its crimson eyes glitter with malign intelligence.",
    description: "Moon spiders are malevolent giant spiders that haunt the Echo Wood and other forests in the western vales of the Sellen River. They are far more intelligent than most of their arachnid kin; while they aren't as smart as humans, they possess a sly cunning and magical talents that make them much more dangerous than other giant spiders-they even hunt cooperatively and share their kills. Moon spiders are web-weavers, and often create huge traps of sticky webbing. A creature that enters a square of moon spider webbing can easily become entangled or grappled. Typically, a moon spider uses its obscuring mist to hide the extent of its webs when prey approaches, using its Tremorsense to keep track of its prey's struggles. Moon spiders do not speak any humanoid language, but communicate with each other in clicks and taps of their legs on the ground, and they can understand simple concepts in Common (which is useful when they're listening to prey).",
    organization: "solitary, pair, or colony (3-8)",
    languages: "Common (can't speak)",
    spellLikeAbilities: [
      {
        name: "obscuring mist",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "gaseous form",
        casterLevel: 5,
        timesPerDay: 1
      }
    ],
    skills: {
      Climb: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 16
          }
        ]
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
      Stealth: {
        ranks: 1,
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
        text: "Bite-injury; save Fort DC 15; frequency 1/round for 5 rounds; effect 1d3 Str; cure 1 save.",
        saveDC: 12
      },
      web: {
        universalMonsterAbility: "Web",
        hit: 11,
        saveDC: 16,
        hp: "10 hp"
      },
      "moon spider webs": {
        type: "Ex",
        text: "The webs created by a moon spider are especially strong and sticky, and the creatures weave net-like snares to trap their enemies. A moon spider's web attack is a ranged touch attack with a +6 racial bonus to the save DC needed to burst or escape the web. The spider also holds a trailing tether that prevents an entangled creature from moving away from the spider until it gets free. Moon spiders frequently set web traps throughout areas where they live. Anyone who enters a square of moon spider web must succeed at a Reflex save (DC 13) or become entangled as though it had been hit by a web attack (though the spider doesn't have a tether to it). If a creature that is already entangled enters a square of moon spider web, it must save again or become grappled. The save DC is Constitution-based. A moon spider's webs have 10 hit points and DR 5/ slashing. A web that's set on fire takes an additional 1d6 points of fire damage each round until it's destroyed."
      }
    }
  },

  "Large Shadowfire Fire Elemental": {
    source: "The Emerald Spire",
    creatureType: "outsider",
    subTypes: [
      "elemental",
      "extraplanar",
      "fire"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 8,
    hdVal: 10,
    cr: 7,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 50
    },
    abilities: {
      str: 16,
      dex: 23,
      con: 14,
      int: 6,
      wis: 11,
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
        name: "Weapon Finesse",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Slam",
        name: "2 Slams",
        specialAbility: "shadow touch, burn",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to cold"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "-"
      },
      SR: {
        value: 13
      },
      naturalArmor: 4
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any (Plane of Fire)",
    visualDescription: "Burning with a wispy blue-and-purple flame, this ghostly creature has a roughly humanoid shape and stands nearly ten feet tall.",
    description: "Created through rituals that suffused elemental fire with the dark corruption of shadow, shadowfire creatures were spawned from the evil cult led by Yarrix (see page 103). Cruelly transformed from their true forms by their ancient creators, they flicker between existence and nothingness, reality and oblivion, feeding on pain and flame and the screams of those who dare stand against them. Creating a Shadowfire Creature \"Shadowfire creature\" is an inherited template that can be applied to any creature that has the shadow creature template (Pathfinder RPG Bestiary 4 238) and 5 or more Hit Dice, referred to hereafter as the base creature. It retains all the special abilities of the base creature, except as noted here. CR: Same as the base creature + 1. Type: The shadowfire creature gains the elemental and fire subtypes if it does not already have them. Do not recalculate the creature's base attack bonus, saves, or skill ranks. Defensive Abilities: A shadowfire creature gains immunity to fire and cold, and loses any vulnerability it has to fire or cold. In addition, a shadowfire creature gains the following defensive abilities. Fire Absorption (Su): A shadowfire creature regains 1 hit point for each point of fire damage it would take from normal fire, a flaming weapon, or magical fire were it not immune. Any hit points gained above the shadowfire creature's full normal hit point total are temporary hit points that disappear after 5 minutes. Incorporeal Step (Su): When a shadowfire creature moves, it gains the incorporeal subtype and special ability, including a deflection bonus to AC equal to its Charisma bonus. It loses the incorporeal subtype and special ability when it stops moving. Special Attacks: A shadowfire creature gains the following special attack. Shadow Touch (Su): A shadowfire creature's touch chills the target and saps away its life energy. All of a shadowfire creature's slam attacks and attacks with natural weapons deal an additional 1d6 points of negative energy damage to living creatures. Spell-Like Abilities: A shadowfire creature can use the shadow step spell (Pathfinder RPG Ultimate Magic 237) as a spell-like ability once per day, with a caster level equal to its Hit Dice. If it has 11 or more Hit Dice, it can instead use this ability three times per day. Ability Scores: Str +2, Dex +2, Cha +4.",
    organization: "solitary, pair, or gang (3-8)",
    languages: "Ignan",
    spellLikeAbilities: [
      {
        name: "shadow step",
        casterLevel: 8,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Climb: {
        ranks: 7
      },
      "Escape Artist": {
        ranks: 7
      },
      Intimidate: {
        ranks: 9
      },
      "Knowledge (planes)": {
        ranks: 4
      },
      Perception: {
        ranks: 8
      }
    },
    special: {
      burn: {
        universalMonsterAbility: "Burn",
        saveDC: 10,
        damage: "1d8 fire"
      },
      "shadow touch": {
        type: "Ex",
        preText: "1d6 negative energy"
      },
      "fire absorption": {
        type: "Ex"
      },
      "incorporeal step": {
        type: "Ex"
      },
      "shadow blend": {
        type: "Ex",
        preText: "20% miss chance except in bright light"
      }
    },
    resistances: [
      {
        damageType: "electricity",
        value: 10
      }
    ]
  },

  Xiomorn: {
    source: "The Emerald Spire",
    creatureType: "outsider",
    subTypes: [
      "earth",
      "elemental",
      "extraplanar"
    ],
    alignments: [
      "Lawful Neutral"
    ],
    size: "Medium",
    hd: 16,
    hdVal: 10,
    cr: 14,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Tremorsense 120 ft."
    ],
    speed: {
      base: 40,
      climb: 40
    },
    abilities: {
      str: 22,
      dex: 27,
      con: 25,
      int: 27,
      wis: 18,
      cha: 24
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
        name: "Mobility",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Spring Attack",
        type: "Combat"
      },
      {
        name: "Weapon Finesse",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Claw",
        name: "4 Claws",
        specialAbility: "crystallization",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "adamantine and bludgeoning"
      },
      SR: {
        value: 25
      },
      naturalArmor: 9
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "This towering, spindly, four-armed entity appears to be made of stone and crystal, yet it moves with a fluid grace.",
    description: "Organization solitary, pair, or cabal (3-6 plus 4-12 pechs and 2-6 earth elementals) Treasure double The xiomorns consist of two castes: the mythic Vault Builders and the non-mythic Vault Keepers. The Vault Builders ruled over their less powerful counterparts, but both are among the most ancient forms of life-primeval elemental beings who travel to raw, new worlds upon the Material Plane, pursuing strange ecological experiments into the nature of life. The worlds these enigmatic beings have visited possess strange ruins in remote regions and immense, vault-like caverns deep underground where ecologies that shouldn't exist flourish. Xiomorns have little interest in protecting a world's indigenous life, except as necessary for their experiments' goals, and often war against such races when native empires encroach upon the xiomorns' experimental realms.",
    organization: "",
    languages: "Terran; telepathy 300 ft.",
    spellLikeAbilities: [
      {
        name: "dispel magic",
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
        name: "shatter",
        casterLevel: 16,
        timesPerDay: -1
      },
      {
        name: "statue",
        casterLevel: 16,
        timesPerDay: -1
      },
      {
        name: "stone shape",
        casterLevel: 16,
        timesPerDay: -1
      },
      {
        name: "stone tell",
        casterLevel: 16,
        timesPerDay: -1
      },
      {
        name: "flesh to stone",
        casterLevel: 16,
        timesPerDay: 3
      },
      {
        name: "spike stones",
        casterLevel: 16,
        timesPerDay: 3
      },
      {
        name: "wall of stone",
        casterLevel: 16,
        timesPerDay: 3
      },
      {
        name: "summon monster vii",
        casterLevel: 16,
        limitations: "earth elementals only",
        timesPerDay: 1
      },
      {
        name: "symbol of scrying",
        casterLevel: 16,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 4,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Climb: {
        ranks: 16
      },
      Craft0: {
        subSkill: "sculptures",
        ranks: 4
      },
      "Disable Device": {
        ranks: 16
      },
      Heal: {
        ranks: 16
      },
      "Knowledge (arcana)": {
        ranks: 19
      },
      "Knowledge (dungeoneering)": {
        ranks: 16
      },
      "Knowledge (planes)": {
        ranks: 16
      },
      "Knowledge (geography)": {
        ranks: 16
      },
      "Knowledge (nature)": {
        ranks: 16
      },
      Perception: {
        ranks: 16
      },
      "Sense Motive": {
        ranks: 16
      },
      Spellcraft: {
        ranks: 19
      },
      Stealth: {
        ranks: 16
      },
      "Use Magic Device": {
        ranks: 19
      }
    },
    special: {
      "crystal burst": {
        type: "Su",
        text: "As a standard action once every 1d4 rounds, a xiomorn can create an explosion of razor-sharp crystals at a range of up to 120 feet. These crystals fill a 30-foot-radius burst and deal 12d6 points of piercing and slashing damage (Reflex DC 25 half). The save DC is Constitution-based."
      },
      crystallization: {
        type: "Su",
        text: "A creature struck by a xiomorn's claw must succeed at a DC 25 Fortitude save or take 1 point of Dexterity drain. On a critical hit, the claw deals 2 points of Dexterity drain on a failed save. As long as a creature suffers any of this drain, portions of its body appear as living green crystal and it gains the earth creature subtype. A creature drained to 0 Dexterity in this manner transforms into a green crystal statue, as if affected by flesh to stone. The save DC is Constitution-based.",
        preText: "DC 25"
      },
      rend: {
        universalMonsterAbility: "Rend",
        type: "Ex",
        weaponName: "2 claws"
      },
      "item mastery": {
        type: "Ex",
        text: "A xiomorn can always activate spell trigger and spell completion items as if the spell were on its class list. For the purposes of crafting magic items or constructs, it is treated as though it possessed all item creation feats."
      },
      "command stone": {
        type: "Sp",
        text: "This ability functions as dominate monster, equivalent of a 9th-level spell, but only on creatures with the earth subtype or constructs made out of stone. When used against a construct, this ability overcomes any spell resistance, but the effects last for only 1 round per level.",
        preText: "DC 26"
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        value: null
      }
    }
  },

};
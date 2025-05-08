
export const Osirion__Legacy_Of_PharaohsCreatures = {
  Hetkoshu: {
    source: "Osirion, Legacy Of Pharaohs",
    creatureType: "animal",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Gargantuan",
    hd: 15,
    hdVal: 8,
    cr: 12,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 20,
      swim: 30
    },
    abilities: {
      str: 40,
      dex: 10,
      con: 25,
      int: 1,
      wis: 18,
      cha: 7
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
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Run",
        type: "General"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Perception",
        choiceSource: "Skill Focus"
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
        specialAbility: "grab",
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
    defense: {
      naturalArmor: 19
    },
    space: "20 ft.",
    reach: "15 ft.",
    environment: "warm marshes or rivers",
    visualDescription: "This enormous black crocodile gapes hungrily with a maw big enough to swallow two armored warriors whole.",
    description: "Infamous along Osirion's major rivers as well as in the Golden Oasis near Shiman-Sekh, hetkoshus are among the most dangerous animals on Garund. They pose a constant threat to travelers and those who make their livelihoods along these waterways. Hetkoshus wait for prey to pass within 90 feet before rushing at them to gobble up one or two opponents in a single terrible motion, preferably before the prey even realizes any danger exists. They are known for their feared \"death roll\"-once one clings to its foe, it tucks in its legs and rolls rapidly, twisting and wrenching its victim. Hetkoshus average 30 feet in length and weigh nearly 45,000 pounds.",
    organization: "solitary, pair, or colony (3-6)",
    spellLikeAbilities: [],
    skills: {
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
        ranks: 10,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      "death roll": {
        type: "Ex",
        text: "Upon making a successful grapple check against a foe of its size or smaller, a hetkoshu deals bite damage to the target and knocks it prone. This does not break the hetkoshu's grapple.",
        preText: "3d6+15 plus trip"
      },
      "fast swallow": {
        type: "Ex"
      },
      "savage rush": {
        type: "Ex",
        text: "For 1 round per minute, a hetkoshu may sprint with devastating speed, increasing its land speed to 40 feet and allowing it to treat nonmagical difficult terrain as if it were normal terrain. If it charges during this round, it may attack twice with its bite as its attack action, using the same attack modifier for both attacks."
      },
      "swallow whole": {
        universalMonsterAbility: "Swallow Whole",
        damage: "3d6+15 bludgeoning damage",
        hp: "17 hp",
        AC: "AC 19"
      },
      "hold breath": {
        universalMonsterAbility: "Hold Breath",
        parenthetical: ""
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  Jackal: {
    source: "Osirion, Legacy Of Pharaohs",
    creatureType: "animal",
    canine: true,
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Small",
    hd: 1,
    hdVal: 8,
    cr: "1/2",
    racialFeatures: [
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 13,
      dex: 15,
      con: 14,
      int: 2,
      wis: 13,
      cha: 6
    },
    feats: [
      {
        name: "Toughness",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "trip",
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 1
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "warm deserts or plains",
    visualDescription: "This sandy-colored canine resembles a slender-bodied wolf with short, graceful legs. It watches with dark brown eyes.",
    description: "Jackals are usually encountered alone or as a mated pair, but sometimes they associate for a time with a small pack composed of two parents and their adult offspring, with the offspring serving a deferential support role to their parents. Although considered craven and foul by humans, jackals are relatively friendly and gentle with members of their own small packs. Attracted to the edges of human settlements in their territory, jackals often make opportunistic raids on fruit crops and vulnerable domesticated animals. They're also attracted to large deposits of garbage that they can sift through for leftover food. Jackals are remarkably adaptable, and readily forage for insects or fruit, feed on found carcasses, or hunt small or vulnerable game as the opportunity presents itself. Jackals are notorious for their craftiness in evading pursuit, and they've been known to feign death when caught in order to lull opponents into complacency and gain another chance to escape. A jackal can attempt a Bluff check opposed by its opponent's Sense Motive check to play dead. If successful, after combat ends, the jackal can begin a new encounter with surprise. During the surprise round, only the jackal and any opponents who succeeded on their Sense Motive checks can act.",
    organization: "solitary, pair, or pack (3-10)",
    spellLikeAbilities: [],
    skills: {
      Bluff: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Perception: {
        ranks: 1
      },
      Survival: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      }
    },
    special: {
      "opportunistic bite": {
        type: "Ex",
        text: "On a successful bite attack against an opponent it's flanking or that is denied its Dexterity bonus to AC, a jackal deals 1 additional point of damage."
      },
      trip: {
        universalMonsterAbility: "Trip"
      }
    }
  },

  Ostrich: {
    source: "Osirion, Legacy Of Pharaohs",
    creatureType: "animal",
    bird: true,
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 2,
    hdVal: 8,
    cr: 1,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 60
    },
    abilities: {
      str: 17,
      dex: 14,
      con: 14,
      int: 2,
      wis: 13,
      cha: 11
    },
    feats: [
      {
        name: "Endurance",
        type: "General"
      },
      {
        name: "Run",
        type: "General"
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
        weapon: "Claw",
        name: "Claw",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 1
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "warm deserts or plains",
    visualDescription: "This human-sized bird has a long neck and legs sprouting from a round body covered in fluffy gray feathers.",
    description: "Adult female ostriches average 6 feet tall and weigh about 220 pounds, with males averaging 7 to 9 feet and 250 pounds. Although they are likely to flee from predators when they can, ostriches are more than willing to stand and fight when trapped or defending their chicks; they're known to kick even lions to death in defense of their young. A trained ostrich has a market price of 80 gp, whereas an egg is worth 25 gp. Because it's bipedal, an ostrich requires an exotic saddle. Ostrich Companions An ostrich can be taken as an animal companion by a druid. An ostrich companion possesses the following base statistics. Starting Statistics: Size Small; Speed 40 ft.; AC +1 natural armor; Attack claw (1d4); Ability Scores Str 13, Dex 16, Con 12, Int 2, Wis 13, Cha 11; Special Qualities Low-Light Vision. 4th-Level Advancement: Size Medium; Speed 60 ft.; Attack claw (1d6); Ability Scores Str +4, Dex -2, Con +2; Special Qualities crouch.",
    organization: "solitary, pair, pride (5-10), or flock (11-50)",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 0
      },
      Perception: {
        ranks: 1
      }
    },
    special: {
      crouch: {
        type: "Ex",
        text: "An ostrich can hide in plain sight as a bush or shrub by crouching down and concealing its head and legs. It makes a Stealth check as normal, but anyone who observes it from within 30 feet automatically sees through the ruse."
      }
    }
  },

  Asp: {
    source: "Osirion, Legacy Of Pharaohs",
    creatureType: "animal",
    bird: true,
    reptile: true,
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 3,
    hdVal: 8,
    cr: 2,
    racialFeatures: [
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 20,
      climb: 20,
      swim: 20
    },
    abilities: {
      str: 10,
      dex: 15,
      con: 14,
      int: 1,
      wis: 15,
      cha: 2
    },
    feats: [
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Stealth",
        choiceSource: "Skill Focus"
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
      }
    ],
    defense: {
      naturalArmor: 3
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "warm deserts",
    visualDescription: "This long, muscular snake rears up and shows its hood and fangs when threatened.",
    description: "An asp is a type of cobra native to Osirion and northern Garund. It ranges from 4 to 6 feet in length and has brownish scales with dark mottling.",
    organization: "solitary, pair, or nest (3-8)",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 1,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Climb: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 4
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
        ranks: 2,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Swim: {
        ranks: 0,
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
        text: "Bite-injury; save Fort DC 15; frequency 1/round for 6 rounds; effect 1d2 Con; cure 2 consecutive saves. The save DC includes a +2 racial bonus.",
        saveDC: 12
      }
    }
  },

  "Living Mirage": {
    source: "Osirion, Legacy Of Pharaohs",
    creatureType: "ooze",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Gargantuan",
    hd: 12,
    hdVal: 8,
    cr: 9,
    racialFeatures: [
      "Perception -5"
    ],
    speed: {
      maneuverability: "Perfect",
      fly: 20
    },
    abilities: {
      str: "-",
      dex: 10,
      con: 20,
      int: "-",
      wis: 1,
      cha: 10
    },
    feats: [],
    attacks: [
      {
        weapon: "Touch",
        name: "Touch",
        specialAbility: "desiccation",
        damage: "3d6"
      }
    ],
    immunities: [
      "Immune to sonic"
    ],
    defense: {},
    space: "20 ft.",
    reach: "20 ft.",
    environment: "any deserts or oceans",
    visualDescription: "This glimmering vision shimmers on the horizon, the very air coalescing into an oasis that may or may not exist.",
    description: "A living mirage is a cloud of shimmering air that dwells in warm and cold deserts and calm stretches of open ocean. Although reviled as cruel deceivers, living mirages are in fact mindless, without any motive beyond feeding on the water and minerals found in living bodies.",
    organization: "solitary",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 2
      }
    },
    special: {
      "consuming mirage": {
        type: "Ex",
        text: "A living mirage can engulf foes, as the universal monster ability. A creature engulfed by a living mirage doesn't gain the pinned condition and may move normally-such a creature is not in danger of suffocating-but as long as it begins its turn engulfed, the victim is subject to the living mirage's desiccation attack in addition to the damage this ability causes. The save DC to avoid a living mirage's consuming mirage ability is Constitution-based.",
        preText: "DC 21, 3d6 plus desiccation"
      },
      "natural invisibility": {
        type: "Ex",
        text: "A living mirage remains invisible at all times, even when attacking. This ability isn't subject to the invisibility purge spell. Against foes that cannot pinpoint it, a living mirage gains a +20 bonus on Stealth checks when moving or a +40 bonus when standing still. These bonuses are not included in the statistics above. Because of its size and pervasiveness within the area it occupies, a living mirage gains only a 20% miss chance due to its invisibility. Project Mirage (Ex) As a standard action, a living mirage can create an illusory vision in areas of extreme heat or reflection-such as a desert, open ocean, or snow plain-to lure victims toward it. This is a nonmagical mind-affecting glamer effect identical to hallucinatory terrain. The living mirage can dismiss this effect as a swift action. The save DC to disbelieve the illusion is Charisma-based, and includes a +2 racial bonus. Vulnerable to Wind (Ex) A living mirage is treated as a Small creature for the purposes of determining the effects high wind has upon it (Core Rulebook 439)."
      },
      "project mirage": {
        type: "Ex",
        text: "As a standard action, a living mirage can create an illusory vision in areas of extreme heat or reflection-such as a desert, open ocean, or snow plain-to lure victims toward it. This is a nonmagical mind-affecting glamer effect identical to hallucinatory terrain. The living mirage can dismiss this effect as a swift action. The save DC to disbelieve the illusion is Charisma-based, and includes a +2 racial bonus. Vulnerable to Wind (Ex) A living mirage is treated as a Small creature for the purposes of determining the effects high wind has upon it (Core Rulebook 439).",
        preText: "DC 18"
      },
      gaseous: {
        type: "Ex",
        text: "A living mirage has a body composed of shimmering air. It can pass through small holes or narrow openings, even mere cracks, but cannot enter water or other liquid. It has no Strength score, and cannot manipulate objects as a result."
      },
      desiccation: {
        type: "Ex",
        text: "A living mirage siphons streamers of blood and other vital fluids away from living creatures it touches or engulfs. A living creature that takes damage from the living mirage must succeed at a Constitution check to avoid the effects of thirst (Pathfinder RPG Core Rulebook 444), using the amount of damage dealt by the living mirage as the check's DC. A creature that is already suffering the effects of thirst must attempt another Constitution check (DC equal to the damage dealt by the living mirage or the DC against thirst as if 1 hour had passed since the target creature's last check, whichever is higher) or take nonlethal damage from their thirst as described in the Core Rulebook. The target takes a cumulative -1 penalty on this check for each consecutive round beyond the first it takes damage from the living mirage. A creature that takes nonlethal damage from thirst as a result of this ability is fatigued."
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
      },
      "vulnerable to wind"
    ]
  },

  "Pharaonic Guardian": {
    source: "Osirion, Legacy Of Pharaohs",
    creatureType: "undead",
    subTypes: [
      "incorporeal"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Large",
    hd: 15,
    hdVal: 8,
    cr: 11,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      maneuverability: "Perfect",
      fly: 30
    },
    abilities: {
      str: "-",
      dex: 25,
      con: "-",
      int: 13,
      wis: 16,
      cha: 21
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
        name: "Improved Critical",
        type: "Combat",
        value: "Longsword",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
      },
      {
        name: "Stand Still",
        type: "Combat"
      },
      {
        name: "Step Up",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Longsword",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Longsword",
        enchantments: [
          {
            name: "Enhancement Bonus +3",
            source: "inherent"
          },
          {
            name: "Ghost Touch",
            source: "inherent"
          }
        ],
        name: "Longsword",
        damage: "1d8"
      }
    ],
    defense: {},
    space: "10 ft.",
    reach: "10 ft.",
    environment: "warm ruins",
    visualDescription: "This towering humanoid figure has an animal's head and cold, brightly luminous eyes. Its radiant wings are beams of white light.",
    description: "Pharaonic guardians were created when an egotistical Osirian pharaoh used nowlost techniques to ritually draw upon the fear of the countless slaves and servants who built her monuments. When enough of these minions were driven into self-destruction trying to provide for the pharaoh's decadent demands, she knitted their souls together to create the first pharaonic guardians. Such creatures now guard the entrances to tombs and other sites important to the pharaohs of the late First Age and the Second Age of Ancient Osirion.",
    organization: "solitary, pair, or patrol (3-6)",
    languages: "Aklo, Ancient Osiriani, Auran, Infernal; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "suggestion",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "command, greater",
        casterLevel: 15,
        timesPerDay: 1
      }
    ],
    skills: {
      Fly: {
        ranks: 0
      },
      Intimidate: {
        ranks: 15
      },
      "Knowledge (history)": {
        ranks: 15
      },
      "Knowledge (religion)": {
        ranks: 15
      },
      Perception: {
        ranks: 15
      },
      "Sense Motive": {
        ranks: 15
      }
    },
    special: {
      "insightful strike": {
        type: "Ex",
        text: "A pharaonic guardian gains a +4 insight bonus on attack rolls against foes whose thoughts it has read via its judging gaze ability."
      },
      "judging gaze": {
        type: "Su",
        text: "A pharaonic guardian's gaze attack reads the minds of those it sees, as the detect thoughts spell with 3 rounds of concentration. This gaze has a range of 30 feet, and can be negated with a successful DC 22 Will save. This is a mindaffecting divination effect. The save DC is Charisma-based."
      },
      "soul-rending wings": {
        type: "Su",
        text: "As a standard action every 1d4 rounds, a pharaonic guardian can flare its wings to fire rays of soulcutting light in two 30-foot lines extending away from it. Living creatures in the lines gain 1 negative level (Reflex DC 22 negates). A creature whose mind the pharaonic guardian has read from its judging gaze ability takes a -2 penalty on this save. Negative levels from this ability are made permanent at the next sunrise unless the creature succeeds at a DC 22 Fortitude save. The save DCs are Charisma-based."
      },
      "guardian sword and shield": {
        type: "Su",
        text: "A pharaonic guardian can imbue any Large sword and shield with a +3 enhancement bonus and the ghost touch ability. This effect lasts as long as the guardian wields them and for 1 minute thereafter. The guardian uses these as if its Strength score equaled its Charisma score."
      },
      "channel resistance": {
        universalMonsterAbility: "Channel Resistance",
        bonus: 4
      }
    }
  },

  Uraeus: {
    source: "Osirion, Legacy Of Pharaohs",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Lawful Good"
    ],
    size: "Medium",
    hd: 7,
    hdVal: 10,
    cr: 5,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 20,
      climb: 20,
      maneuverability: "Average",
      fly: 50,
      swim: 20
    },
    abilities: {
      str: 17,
      dex: 16,
      con: 14,
      int: 15,
      wis: 14,
      cha: 15
    },
    feats: [
      {
        name: "Acrobatic",
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
        name: "Improved Initiative",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "2 Bites",
        specialAbility: "poison",
        damage: "1d6",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to disease, poison"
    ],
    defense: {
      naturalArmor: 6
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "warm rivers",
    visualDescription: "This large two-headed cobra can fly thanks to a large pair of sleek, black-feathered wings that sprout from its serpentine body.",
    description: "Said to be children of the river goddess Wadjet, uraeuses are known throughout the Sphinx Basin as benevolent guardians of the River Sphinx and its conf luences and tributaries. They are fierce opponents of any who would dare threaten the rivers' ability to serve as travel routes, and never hesitate to harry individuals whose efforts are opposed to the goals of Wadjet and her worshipers, as well as anyone whose influence risks leading the rulers of Osirion into folly. Uraeuses sometimes band together in large nests to destroy the massive and terrible hetkoshus (see page 54) that occasionally threaten the Sphinx and its tributaries, though such attacks are met with mixed success. When a nest of uraeuses is too small to handle a hetkoshu or other waterway threat, they may seek aid from loyal river clerics of Wadjet (see page 62) or renowned Osirian adventurers who respect the pharaoh and the old ways. Uraeuses often hunt other dangerous prey such as asps, as well, and Osirians frequently tell stories of uraeuses saving children from venomous snakes, gars, and even hippopotamuses. In Ancient Osirion, some legends claim that during times of unusual danger, Wadjet sent throngs of uraeuses to warn the pharaoh of advisors or spies who would lead him to folly. In addition to their duties as river protectors, uraeuses accept offerings to Wadjet from her faithful, including gifts of incense, spices, gold, and other tithings. In exchange, they teach Wadjet's flock the wisdom of the river and how to best serve Osirian society and its leaders. Patience, industry, and a willingness to listen to others are among the qualities they seek to instill in supplicants who seek them out. Uraeuses are always vigilant in their search for potential leaders for their goddess's church, and they keep a keen eye out for supplicants who may possess the gift of the river or who would otherwise serve as useful servants for their mother goddess.",
    organization: "solitary, pair, or nest (3-8)",
    languages: "Aquan, Common, Osiriani",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 7,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Climb: {
        ranks: 3
      },
      Fly: {
        ranks: 3
      },
      "Knowledge (religion)": {
        ranks: 3
      },
      Perception: {
        ranks: 3,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      "Sense Motive": {
        ranks: 7
      },
      Stealth: {
        ranks: 3
      },
      Swim: {
        ranks: 3
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "30-ft. line",
        damage: "usable every 1d4 rounds for each head"
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Bite or breath weapon-contact or injury; save Fort DC 15; frequency 1/round for 2 rounds; initial effect blinded and paralyzed for 1 round; secondary effect blinded for 2d4 rounds; cure 2 consecutive saves.",
        saveDC: 10
      }
    }
  },

};
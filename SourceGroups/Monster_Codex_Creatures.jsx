
export const Monster_CodexCreatures = {
  Flind: {
    source: "Monster Codex",
    creatureType: "humanoid",
    subTypes: [],
    alignments: [
      "Neutral Evil"
    ],
    size: "Medium",
    hd: 4,
    hdVal: 8,
    cr: 3,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 18,
      dex: 15,
      con: 16,
      int: 12,
      wis: 15,
      cha: 13
    },
    feats: [
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
        weapon: "Flindbar",
        name: "Flindbar",
        specialAbility: "disarm, trip",
        damage: "1d8"
      },
      {
        weapon: "Composite longbow",
        name: "Composite longbow",
        damage: "1d8",
        strBonus: 4
      }
    ],
    defense: {
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "warm plains or deserts",
    visualDescription: "This powerfully built, hyena-like humanoid is larger than the average gnoll and has a cunning, cruel gaze.",
    description: "Flinds are slightly larger, more intelligent, and of a stockier build than gnolls, and it's a common misconception that flinds are an entirely separate race. Though interbreeding may one day make them so, flinds are actually the product of controlled breeding practices by the dominant females of gnoll packs. The slyest and largest female gnolls sanctified by the chosen of Lamashtu are paired with the most savage males, and a little more than half the time, the resulting litter includes at least one flind. The flind pup is often female. A breeding female flind produces only flinds, though flinds' litters tend to be smaller than those of normal gnolls. Male flinds who breed with female gnolls produce a litter with a flind about three quarters of the time. More capable of focus, cunning, and planning than gnolls, flinds are typically found in leadership roles within gnoll bands and tribes, and frequently lead hunting parties. Like gnolls, flinds use ambush tactics and often make slaves of surviving foes, yet a flind is more likely to go on the offensive when the odds are closer to even. Flinds still prefer the advantage of attacking in numbers-they just don't need the advantage to be overwhelming. In addition to using intimidation against enemies, flinds embrace flanking tactics and specialized uses of their unusual weapon, the flindbar. Flinds assign gnolls lower in the pack hierarchy the task of crafting flindbars (see page 93). Flinds are very particular about these weapons, and a gnoll who fails to properly weight and polish a flindbar can expect a savage mauling from the flind who demanded the weapon. A flind is roughly 7 feet tall and weighs between 280 and 315 pounds. Flinds have brindled or spotted fur, and are primarily russet in color with patches of black.",
    organization: "solitary, pair, hunting party (1 flind, 1-4 gnolls and 1-2 hyenas), band (10-100 gnolls [30% flinds and 50% noncombatant children], 1 sergeant of 3rd level per 20 adults, 1 leader of 4th-6th level, and 5-8 hyenas), or tribe (20-200 gnolls [30% flinds and 50% noncombatant children] plus 1 sergeant of 3rd level per 20 gnolls, 1 or 2 lieutenants of 4th or 5th level, 1 leader of 6th-8th level, 7-12 hyenas, and 4-7 hyaenodons)",
    languages: "Common, Gnoll",
    spellLikeAbilities: [],
    skills: {
      "Handle Animal": {
        ranks: 4
      },
      Intimidate: {
        ranks: 4
      },
      Perception: {
        ranks: 4
      }
    },
    special: {
      "weapon familiarity": {
        type: "Ex"
      },
      disarm: {
        type: "Ex"
      },
      trip: {
        universalMonsterAbility: "Trip"
      }
    }
  },

  Bogwiggle: {
    source: "Monster Codex",
    creatureType: "aberration",
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Small",
    hd: 3,
    hdVal: 8,
    cr: 1,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30,
      swim: 40
    },
    abilities: {
      str: 13,
      dex: 12,
      con: 13,
      int: 3,
      wis: 12,
      cha: 6
    },
    feats: [
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
        weapon: "Tongue",
        qualities: [
          "touch"
        ],
        name: "Tongue",
        specialAbility: "Tongue"
      }
    ],
    defense: {},
    space: "5 ft.",
    reach: "5 ft. (10 ft. with tongue)",
    environment: "temperate swamps",
    visualDescription: "This sallow-green beast appears to be an oversized tadpole that never fully matured, with two large, bulbous eyes bulging from either side of its head, and a gaping mouth revealing jagged fangs.",
    description: "Also known as toad-hounds, bogwiggles are the stunted, degenerate spawn of boggard priest-kings-these are the young who survived their meals of poisonous dragonf lies, but failed to develop properly. They appear to be dog-sized tadpoles that have stopped halfway through the transformation to full-f ledged frogs. A single set of long legs sprouts from a bogwiggle's bulbous body, and a frilled, whiplike tail protrudes from its back. Barely more intelligent than ordinary dogs, bogwiggles spend the majority of their short, violent lives serving as hunting companions and guard animals for their capricious, toadlike masters. Bogwiggles can live up to 20 years, but because of swamp predators and the cruelty of their masters, most die long before reaching the age of 10. Bogwiggles always have the same skin tone as the boggards with which they live-typically gray, green, or black. Just as with boggards, bogwiggles lose their coloring as they age, and particularly old bogwiggles are often pale gray or almost white. The average bogwiggle is just under 3-1/2 feet long, not counting the tail-which itself is around 6 feet long. Most bogwiggles weigh roughly 65 pounds, but larger specimens have been reported by adventurers and scholars. Despite being mistreated by their boggard masters, bogwiggles have a curiously strong affinity for them, and are intensely loyal to their tribes. Some scholars theorize that this fealty is a primitive version of a boggard's natural tribalism or religious inclinations, yet other observers have suggested that bogwiggles believe themselves capable of transformation into full boggards through unwavering devotion to their boggard superiors.",
    organization: "solitary, pair, or pack (3-6)",
    languages: "Boggard (can't speak)",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 1
      },
      Perception: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Stealth: {
        ranks: 0,
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
      amphibious: {
        universalMonsterAbility: "Amphibious"
      },
      "swamp stride": {
        type: "Ex",
        text: "A bogwiggle can move through any sort of natural difficult terrain at its normal speed while within a swamp. Magically altered terrain affects a bogwiggle normally."
      },
      tongue: {
        type: "Ex",
        text: "A creature hit by a bogwiggle's tongue attack can't move more than 10 feet away from the bogwiggle and takes a -2 penalty to AC as long as the tongue is attached (this penalty does not stack if multiple tongues are attached). The tongue can be removed by succeeding at an opposed Strength check as a standard action or by dealing 2 points of slashing damage to the tongue (AC 11, damage doesn't deplete the bogwiggle's actual hit points). The bogwiggle can't move more than 10 feet away from the target while attached. It can release its tongue's grip as a free action. Like a boggard, a bogwiggle can't pull targets toward it with its tongue."
      }
    }
  },

  Svathurim: {
    source: "Monster Codex",
    creatureType: "monstrous humanoid",
    subTypes: [
      "cold"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Huge",
    hd: 14,
    hdVal: 10,
    cr: 11,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 50
    },
    abilities: {
      str: 29,
      dex: 17,
      con: 20,
      int: 10,
      wis: 14,
      cha: 11
    },
    feats: [
      {
        name: "Charge Through",
        type: "Combat"
      },
      {
        name: "Great Fortitude",
        type: "General"
      },
      {
        name: "Greater Overrun",
        type: "Combat"
      },
      {
        name: "Improved Bull Rush",
        type: "Combat"
      },
      {
        name: "Improved Overrun",
        type: "Combat"
      },
      {
        name: "Intimidating Prowess",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Lance",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "Lance",
        damage: "1d8"
      },
      {
        weapon: "Gore",
        name: "Gore",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Hoof",
        name: "2 Hooves",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Composite longbow",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "Composite longbow",
        damage: "1d8",
        strBonus: 9
      }
    ],
    defense: {
      naturalArmor: 10
    },
    space: "15 ft.",
    reach: "10 ft. (20 ft. with lance)",
    environment: "cold hills, mountains, or plains",
    visualDescription: "This hulking creature has the lower half of an eight-legged stallion and the upper half of a horned frost giant.",
    description: "Svathurims and frost giants consider each other allies and distant kin. The hindquarters of an adult svathurim are up to 10 feet tall and 16 feet long, while its giant trunk and head reach up to 18 feet in height. They typically weigh more than 5 tons and may live up to 500 years. Svathurims dwell in arctic regions, galloping along the shores of polar seas or between high mountain peaks, with individuals organized into clans headed by the strongest hunters.",
    organization: "solitary, pair, war band (3-6), or clan (1-4 svathurim plus 2-12 frost giants)",
    languages: "Common, Giant",
    spellLikeAbilities: [],
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
        ranks: 3
      },
      Intimidate: {
        ranks: 0
      },
      Perception: {
        ranks: 14
      },
      Survival: {
        ranks: 9
      },
      Swim: {
        ranks: 8
      }
    },
    special: {
      "natural jouster": {
        type: "Ex",
        text: "A svathurim can wield a lance one-handed as if it were mounted, and it deals double damage with a lance while charging."
      },
      "thunderous trample": {
        type: "Su",
        text: "Any creature damaged by a svathurim's trample attack must succeed at a DC 22 Fortitude save or be deafened for 1 minute. The save DC is Constitution-based."
      },
      trample: {
        universalMonsterAbility: "Trample",
        damage: "1d8+13",
        saveDC: 10
      },
      skyrunner: {
        type: "Su",
        text: "When charging, running, or taking a double move, a svathurim can stride across open air as if it were using air walk. This movement is very taxing; a svathurim must succeed at a DC 14 Constitution check at the end of each round it uses this ability or become fatigued for 1 minute. This DC increases by 2 for each round after the first. Returning to the ground resets the DC to 14, but doesn't negate any ongoing fatigue or exhaustion. A svathurim cannot trample when using this ability."
      },
      "undersized weapons": {
        type: "Ex"
      }
    }
  },

  "Frightful Haunter": {
    source: "Monster Codex",
    creatureType: "undead",
    subTypes: [
      "incorporeal"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 8,
    hdVal: 8,
    cr: 8,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      maneuverability: "Perfect",
      fly: 40
    },
    abilities: {
      str: "-",
      dex: 17,
      con: "-",
      int: 15,
      wis: 17,
      cha: 16
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
        weapon: "Terrifying touch",
        name: "Terrifying touch",
        specialAbility: "shaken will dc 17",
        damage: "3d8"
      }
    ],
    immunities: [
      "Immune to haunts"
    ],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "The mist forms a roughly humanoid shape. Its features are indistinct, except for its clawed hands and hairy, fanged face.",
    description: "Occasionally, the desire to cause fear and misery survives even when a bugbear dies. Such a creature can detach part of its vile nature to create frightening spiritual traps in the form of haunts. Whenever possible, a frightful haunter learns about a group before building haunts to terrify it, and customizes the haunts' effects based on its victims' fears and weaknesses. If a frightful haunter is forced to confront a group directly, it attempts to create a stronghold of damaging haunts, attacking only when the group neutralizes one of the haunts, and then fleeing to another prepared location.",
    organization: "solitary, pair, or gang (3-6)",
    languages: "Common, Goblin",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 0
      },
      Intimidate: {
        ranks: 7
      },
      "Knowledge (history)": {
        ranks: 8
      },
      "Knowledge (local)": {
        ranks: 11
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
      "create haunt": {
        type: "Su",
        text: "A frightful haunter has so much rage and desire to create fear that it can actually create a haunt (Pathfinder RPG GameMastery Guide 242) once per hour. Each haunt has a CR no greater than the frightful haunter's CR- 2, and often takes a form either tied to the location the frightful haunter selects for it or inspired by the victims the frightful haunter hopes to frighten. Unlike a typical haunt, those created by a frightful haunter are destroyed when neutralized, and fade away after a number of days equal to the creator's Hit Dice. A frightful haunter cannot have more than 1 haunt active per HD; if any haunt is created that exceeds that limit, the oldest active haunt is neutralized. Fear Eater (Su) A frightful haunter has an amount of fast healing equal to the number of creatures within 30 feet currently suffering from a fear effect. Made of Fear (Su) A frightful haunter is immune to the effects of a haunt, even those it does not create. Terrifying Touch (Su) A creature struck by a frightful haunter's touch attack takes 3d8 points of damage and must succeed at a DC 17 Will saving throw or be shaken for 1 minute. A creature that succeeds at the save can't be made shaken by the terrifying touch for 24 hours, but can still take damage from it. Successfully using terrifying touch multiple times extends only the duration of its effect; it does not create a stronger fear condition. This is a mind-affecting fear effect. The DC is Charisma-based."
      },
      "terrifying touch": {
        type: "Su",
        text: "A creature struck by a frightful haunter's touch attack takes 3d8 points of damage and must succeed at a DC 17 Will saving throw or be shaken for 1 minute. A creature that succeeds at the save can't be made shaken by the terrifying touch for 24 hours, but can still take damage from it. Successfully using terrifying touch multiple times extends only the duration of its effect; it does not create a stronger fear condition. This is a mind-affecting fear effect. The DC is Charisma-based.",
        preText: "DC 17"
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        condition: "see special abilities",
        value: null
      },
      "channel resistance": {
        universalMonsterAbility: "Channel Resistance",
        bonus: 3
      },
      cowardice: {
        type: "Su",
        text: "A frightful haunter radiates a palpably daunting aura that causes all enemies within 30 feet to take a -4 penalty on saving throws against fear effects. Creatures that are normally immune to fear lose that immunity while within 10 feet of a frightful haunter with this ability.",
        preText: "30 ft."
      },
      "shaken will dc 17": {
        type: "Ex"
      }
    }
  },

  "Abrakarn Viper": {
    source: "Monster Codex",
    creatureType: "construct",
    subTypes: [
      "chaotic",
      "evil"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Huge",
    hd: 18,
    hdVal: 10,
    cr: 13,
    racialFeatures: [
      "Darkvision 120 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 28,
      dex: 17,
      con: "-",
      int: "-",
      wis: 19,
      cha: 1
    },
    feats: [],
    attacks: [
      {
        weapon: "Bite",
        name: "3 Bites",
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
        value: 24
      },
      naturalArmor: 19
    },
    space: "15 ft.",
    reach: "15 ft.",
    environment: "any land",
    visualDescription: "This massive, three-headed clockwork snake is crafted of brass and strange, dark alloys.",
    description: "Demonic spirits imbue this serpentine construct with the unnatural power to protect anyone who wears its diadem of control. Construction An abrakarn viper's body and its diadem of control are built from 5,000 pounds of magically treated brass and rare metals costing 10,000 gp in total. ABRAKARN VIPER CL 8th; Price 150,000 gp Construction Requirements Craft Construct, animate object, confusion, geas/quest, shield other; Skill Craft (armor), Craft (blacksmithing), or Craft (weapons) DC 21; Cost 80,000 gp",
    organization: "solitary or pair",
    spellLikeAbilities: [],
    skills: {},
    special: {
      "confusing critical": {
        type: "Sp",
        text: "If an abrakarn viper confirms a critical hit against an opponent with its bite attack, the opponent must succeed at a DC 23 Will save or be confused for 1 round (as lesser confusion). The save DC is Charisma-based and includes a +9 racial bonus."
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "An abrakarn viper's bite injects poison from a hidden reservoir within its body. The creator must refill this reservoir manually. The reservoir holds enough poison for three successful bite attacks, after which the creature merely deals bite damage. Refilling the reservoir takes 5 rounds and provokes attacks of opportunity. The creator can fill the reservoir with any injury poison (typically drow poison).",
        saveDC: null,
        saveType: "brakarn"
      },
      "demon-souled": {
        type: "Ex",
        text: "Bound demonic life force animates the viper, giving it the chaotic and evil subtypes."
      },
      "find master": {
        type: "Su",
        text: "As long as an abrakarn viper and its diadem are on the same plane, the viper can unerringly find the diadem's wearer (or just the diadem, if it is removed)."
      },
      guard: {
        type: "Ex",
        text: "If so ordered, an abrakarn viper defends the wearer of the diadem. All attacks against the diadem's wearer take a -2 penalty when the wearer is within the viper's melee reach."
      },
      "shield other": {
        type: "Sp",
        text: "The wearer of an abrakarn viper's diadem can activate this ability as a standard action when within 100 feet of the viper. This ability transfers half the damage that would be dealt to the diadem's wearer to the viper (this ability does not provide the bonuses to AC or on saving throws granted by the spell of the same name). Damage transferred in this way bypasses any defensive abilities the viper possesses (such as immunity or damage reduction)."
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

  "Dark Spitter Beetle": {
    source: "Monster Codex",
    creatureType: "vermin",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 4,
    hdVal: 8,
    cr: 3,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 18,
      dex: 11,
      con: 15,
      int: "-",
      wis: 11,
      cha: 6
    },
    feats: [],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to acid, mind-affecting effects"
    ],
    defense: {
      naturalArmor: 8
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "any underground",
    visualDescription: "This large beetle's black, shiny exoskeleton clicks and grinds as it opens its dripping mandibles.",
    description: "Spitter beetles are used as mounts by duergar explorers.",
    organization: "single, pair, or cluster (3-6)",
    spellLikeAbilities: [],
    skills: {},
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "15-ft. cone",
        damage: "usable once every 1d4 rounds"
      },
      trample: {
        universalMonsterAbility: "Trample",
        damage: "1d6+6",
        saveDC: 10
      }
    },
    resistances: [
      "light sensitivity"
    ]
  },

  "Juggernaut Beetle": {
    source: "Monster Codex",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Huge",
    hd: 20,
    hdVal: 10,
    cr: 14,
    racialFeatures: [
      "Darkvision 120 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 31,
      dex: 9,
      con: 20,
      int: 2,
      wis: 13,
      cha: 8
    },
    feats: [
      {
        name: "Awesome Blow",
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
        name: "Great Cleave",
        type: "Combat"
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
        name: "Improved Vital Strike",
        type: "Combat"
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
      }
    ],
    immunities: [
      "Immune to acid, mind-affecting effects"
    ],
    defense: {
      naturalArmor: 22
    },
    space: "15 ft.",
    reach: "10 ft.",
    environment: "any underground",
    visualDescription: "This massive insect lumbers ominously, waving scythe-like mandibles that reek of acid.",
    description: "One duergar steers a juggernaut while two riders attack.",
    organization: "single or pair",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 10
      },
      Perception: {
        ranks: 10
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "60-ft. cone",
        damage: "usable once every 1d4 rounds"
      },
      trample: {
        universalMonsterAbility: "Trample",
        damage: "2d8+15",
        saveDC: 10
      },
      "selective mind": {
        name: ":",
        type: "Su",
        text: "ective Mind (Su): To anyone but duergar, these beetles count as mindless. Duergar can affect them with mind-affecting effects, and train and control them as if the beetles were animals."
      }
    },
    resistances: [
      "light sensitivity"
    ]
  },

  "Steam Hog": {
    source: "Monster Codex",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Huge",
    hd: 9,
    hdVal: 10,
    cr: 7,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 30,
      burrow: 10
    },
    abilities: {
      str: 24,
      dex: 11,
      con: 18,
      int: 1,
      wis: 12,
      cha: 9
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
        name: "Toughness",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Gore",
        name: "Gore",
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
      },
      {
        weapon: "Hoof",
        name: "2 Hooves",
        damage: "1d4",
        type: "secondary"
      }
    ],
    defense: {
      DR: {
        value: 2,
        damageType: "-"
      },
      naturalArmor: 6
    },
    space: "15 ft.",
    reach: "10 ft.",
    environment: "warm mountains",
    visualDescription: "This massive warthog is outfitted with all manner of steel armor and unnatural augmentations, including a pair of razor-sharp metal tusks.",
    description: "The military advancements of fire giants aren't restricted only to arms and armor-just as ore is dredged from the mountains for these giants' cruel forges, animals are culled from the wilds to serve as fire giant weaponry. In addition to using hell hounds, red dragons, and other fiery fauna for their brutal campaigns, fire giants have created several unique species of war beasts all their own. Chief among these amalgamations of flesh and steel are the malformed swine known as steam hogs-enormous snorting brutes charged with heading the front lines of fire giant armies, each one capable of laying low an entire platoon of enemy soldiers. While fire giants are more than capable of crafting new armor for their steam hogs, they take great pleasure in bedecking their prized war beasts with the reforged arms and armor of their vanquished foes. In this way, the armor and accoutrements of a veteran steam hog serve as a record of the battles and wars the beast has fought in. When such a steam hog falls in battle, its armor-and thus its history-are often kept by sentimental fire giant handlers as treasured heirlooms. Steam hogs average 16 feet long from snout to tail and 8 feet tall at the shoulder. They can weigh up to 3 tons, or 4 tons when equipped with adamantine scale barding.",
    organization: "solitary, cavalry (2-4 plus 2-4 fire giants), or stampede (5-8 plus 3-8 fire giants)",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 3
      },
      Perception: {
        ranks: 6
      }
    },
    special: {
      "steam cloud": {
        type: "Ex",
        text: "As a standard action, a steam hog can emit a cloud of steam from its snout in a 10-foot-radius spread. The initial burst of steam deals 2d6 points of fire damage to any creature in the area. The cloud remains for 1d4 rounds once created, acting as a 10-foot-radius obscuring mist. Any creature that begins its turn in the area of the steam must succeed at a DC 18 Fortitude save or take 1d6 points of fire damage. A steam hog can use its steam cloud only once every 1d6 rounds. The save DC is Constitution-based."
      },
      trample: {
        universalMonsterAbility: "Trample",
        damage: "1d8+10",
        saveDC: 10
      },
      ferocity: {
        universalMonsterAbility: "Ferocity"
      }
    },
    resistances: [
      {
        damageType: "fire",
        value: 15
      }
    ]
  },

  "Sootwing Bat": {
    source: "Monster Codex",
    creatureType: "undead",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Tiny",
    hd: 2,
    hdVal: 8,
    cr: "1/2",
    racialFeatures: [
      "Blindsense 20 ft."
    ],
    speed: {
      base: 5
    },
    abilities: {
      str: 5,
      dex: 12,
      con: "-",
      int: 2,
      wis: 13,
      cha: 8
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
      }
    ],
    defense: {
      naturalArmor: 1
    },
    space: "2 1/2 ft.",
    reach: "0 ft.",
    environment: "any land",
    visualDescription: "This batlike creature has jagged points at the tips of its wings and a long, lashing tongue.",
    description: "Ghoul spellcasters use these smaller cousins to skavelings as familiars. An evil spellcaster can gain a sootwing bat as a familiar at 5th level by taking the Improved Familiar feat. A sootwing bat familiar grants its master a +1 bonus to channel resistance (if the master has any).",
    organization: "solitary or colony (4-12)",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 1
      },
      Perception: {
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
      disease: {
        universalMonsterAbility: "Disease",
        name: "Ghoul Fever",
        type: "Su",
        text: "Ghoul Fever: See Pathfinder RPG Bestiary 146.",
        saveDC: null,
        saveType: "l"
      },
      paralysis: {
        universalMonsterAbility: "Paralysis",
        duration: "1d4+1 rounds",
        extraText: "elves are immune to this effect",
        saveDC: null
      },
      "channel resistance": {
        universalMonsterAbility: "Channel Resistance",
        bonus: 2
      }
    }
  },

  "Ghoul Hound": {
    source: "Monster Codex",
    creatureType: "undead",
    subTypes: [],
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
      base: 50
    },
    abilities: {
      str: 18,
      dex: 15,
      con: "-",
      int: 2,
      wis: 14,
      cha: 14
    },
    feats: [
      {
        name: "Improved Initiative",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "disease, paralysis, trip",
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any land",
    visualDescription: "This canine creature has sallow, dead skin stretched tight across its bones. Its teeth are long and yellowed.",
    description: "Ghouls keep ghoul hounds much as humans keep hunting dogs-some ghouls view these vicious beasts as little more than tools, while more sentimental ghouls treat them as favored pets. Ghoul hounds obediently follow their ghoul masters. Grathkoll (CR 2): A larger breed of ghoul hound, the grathkoll can be ridden by a Medium creature. A grathkoll is a ghoul hound with the giant simple template and a +10 bonus to its base land speed.",
    organization: "solitary, guard (2-4 plus 2-4 ghouls), or pack (4-6 plus 2-4 ghouls)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 1
      },
      Stealth: {
        ranks: 1
      }
    },
    special: {
      disease: {
        universalMonsterAbility: "Disease",
        name: "Ghoul Fever",
        type: "Su",
        text: "Ghoul Fever: See Pathfinder RPG Bestiary 146.",
        saveDC: null,
        saveType: "l"
      },
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
      trip: {
        universalMonsterAbility: "Trip"
      }
    }
  },

  Yzobu: {
    source: "Monster Codex",
    creatureType: "animal",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 2,
    hdVal: 8,
    cr: 1,
    racialFeatures: [
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 14,
      dex: 13,
      con: 14,
      int: 1,
      wis: 12,
      cha: 5
    },
    feats: [
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
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 3
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "cold hills and plains",
    visualDescription: "This four-legged animal with a long-horned, bovine head looks like a cross between a horse and a long-haired yak.",
    description: "An yzobu is a herd animal found in cold hills, plains, and mountains. It stands roughly the height of a horse, but has a bulkier frame. Its head is more bovine, with a pair of thick, slightly curved horns protruding from the sides of its flat forehead and four smaller prongs jutting from the top. The fur of an yzobu is long and shaggy, protecting it from the harsh winters of its habitat. This pelt accumulates a pungent secretion from the yzobu's body that gives it a strong odor that those unaccustomed to the creatures find sickening. Like the hobgoblins who use them as mounts and beasts of burden, yzobus (called \"battle yaks\" by their war-mongering handlers) live in complex social groups. These immense herds can number in the thousands, and present quite a problem to ranchers, explorers, and pioneers who encounter them while traversing the open plains and hills where the yzobus graze. A single herd can range over a spread of tens of thousands of square miles in a year, devouring all the grass and small vegetation in the region, trampling what they can't eat, and forcing other creatures-including humanoids- to move elsewhere or suffer the same fate. Yzobus are extremely aggressive, and fight ruthlessly to defend even the weakest member of their herd, making them difficult pests to deal with, and even more difficult to train for service or war. Hobgoblins have grown skilled at the process, and keep a fair number of tamed yzobus. They breed these with wild yzobus every few generations to keep them fierce. Yzobu Companions An yzobu can be taken as an animal companion or mount by cavaliers, druids, hunters, and rangers. Starting Statistics: Size Medium; Speed 40 ft.; AC +1 natural armor, Attack gore (1d6); Ability Scores Str 14, Dex 12, Con 12, Int 2, Wis 11, Cha 4; Special Qualities Low-Light Vision, scent. 7th-Level Advancement: Size Large; AC +3 natural armor; Attack gore (1d8); Ability Scores Str +8, Dex -2, Con +4; Special Qualities stampede, stench, trample.",
    organization: "solitary, pair, or herd (3-30)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 2
      }
    },
    special: {
      stampede: {
        type: "Ex",
        text: "A stampede occurs if three or more creatures with stampede make a trample attack while remaining adjacent to each other. While stampeding, the creatures can trample foes of their size or smaller, and the trample's save DC increases by +2."
      },
      trample: {
        universalMonsterAbility: "Trample",
        damage: "1d6+3",
        saveDC: 10
      },
      stench: {
        universalMonsterAbility: "Stench",
        duration: "10 rounds",
        saveDC: 10
      }
    }
  },

  Kyrana: {
    source: "Monster Codex",
    creatureType: "dragon",
    subTypes: [
      "fire"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Medium",
    hd: 4,
    hdVal: 12,
    cr: 3,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 16,
      dex: 15,
      con: 12,
      int: 3,
      wis: 9,
      cha: 6
    },
    feats: [
      {
        name: "Skill Focus",
        type: "General",
        value: "Perception",
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
      }
    ],
    immunities: [
      "dragon traits",
      "Immune to sleep"
    ],
    defense: {
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any underground or warm deserts",
    visualDescription: "Long spines jut from the head and neck of this red-scaled iguana, and fire trickles from its open mouth.",
    description: "Kyranas are large, iguana-like relatives of true dragons, with low intelligence and an aff inity for fire. Though quite weak as dragons go, kyranas are still dangerous enough to command the fear and respect of kobolds, who often encounter the fire-breathing dragons while digging deep tunnels. Kyranas are primarily subterranean creatures, though they can occasionally be found on the surface in extremely hot or volcanic areas. Healed supernaturally by contact with fire, they often spend their time swimming in volcanic calderas or underground lava lakes, taking in geothermic energy and storing it in order to release it on their prey as lines of fiery breath. If kyranas stayed confined to their magma homes, they would present little problem to other races. Unfortunately, they're extremely territorial, even toward their own offspring. Kyranas are born in clutches of six to 12 eggs, and raised by both parents. As soon as the creatures reach adulthood at the age of 18 months, however, the parents turn on their offspring and drive them from the nest. The exiled kyranas then split up and wander the surrounding tunnels, traveling hundreds of miles in search of any source of heat. That means they often come waddling into inhabited areas, snorting and ready to burn anyone standing between them and the hearth. Adventurers may find their campfires claimed by a greedy kyrana, or end up being followed for their torchlight. Kobolds often use these barely intelligent dragons as heavy artillery, employing fire arrows and flaming traps to lure them into conf lict with enemies. An adult kyrana is 5 feet long and weighs 300 pounds on average.",
    organization: "solitary, pair",
    languages: "Draconic",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 4
      },
      Perception: {
        ranks: 4
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "20-ft. line",
        damage: "usable every 1d4 rounds"
      },
      "fiery regeneration": {
        type: "Su",
        text: "A kyrana does not take damage from fire-based attacks. Additionally, when a kyrana would normally take fire damage, it heals that number of hit points, to a maximum of 5 hit points per round. A kyrana can't use its breath weapon to heal itself."
      }
    }
  },

  "Lizard Scion": {
    source: "Monster Codex",
    creatureType: "humanoid",
    subTypes: [
      "reptilian"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 7,
    hdVal: 8,
    cr: 5,
    racialFeatures: [
      "Perception +5"
    ],
    speed: {
      base: 30,
      swim: 30
    },
    abilities: {
      str: 16,
      dex: 11,
      con: 14,
      int: 9,
      wis: 12,
      cha: 11
    },
    feats: [
      {
        name: "Cleave",
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
        name: "Weapon Focus",
        type: "Combat",
        value: "Trident",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
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
      },
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
        weapon: "Javelin",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "Javelin",
        damage: "1d6"
      }
    ],
    defense: {
      naturalArmor: 8
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "temperate swamps",
    visualDescription: "This muscular lizardfolk towers above others of its kind, a primeval behemoth painted with elaborate designs.",
    description: "Every few generations, a lizard scion is born to a lizardfolk tribe. With twice the life span of a typical lizardfolk and a large and muscular stature, a scion typically rises to become the leader of her tribe. Lizardfolk show great- often unquestioning-devotion to scions, believing they are blessings from the spirits and divine in nature. In many ways, tribes see them as living monuments to the lost greatness of their people, singing songs of an era when every lizardfolk was as large and impressive as the scion. A lizard scion is not officially recognized until her 100th birthday, though many might suspect that she is one. At that point, the tribe holds a ceremony in which they present the newly titled lizard scion with a special war trident as a mark of status. These ancient tridents are never used by ordinary lizardfolk, and most have been handed down through their tribe for generations, sometimes sitting untouched for hundreds of years until the naming of a new lizard scion. Some lizard scions become great protectors and voices of wisdom among their people, leading a tribe to previously unknown accomplishments and stability within its hidden enclave. Others attempt to build alliances with other lizardfolk tribes or even unite two tribes into one. A tribe of lizardfolk being systematically pushed out of its ancestral territory, however, might see the coming of a lizard scion as a sign that war is imminent, and could be spurred to take up arms once and for all against the so-called \"civilized\" encroachers. There are rumors that deep in some jungles or swamps there live entire tribes of dinosaur-herding lizard scions that have bred true as a race, but such stories may be little more than the overactive imaginations of explorers and treasure hunters. Lizard scions average 10 feet in height and 500 pounds, though this can vary by tribe and age. Unlike boggard priest-kings, lizard scions are never fat, but rather hugely muscled specimens with excellent reflexes.",
    organization: "solitary, band (with 3-12 lizardfolk), or tribe (with 13-60 lizardfolk)",
    languages: "Draconic",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 4
      },
      Swim: {
        ranks: 3
      }
    },
    special: {
      "blood rage": {
        universalMonsterAbility: "Blood Rage"
      },
      "hold breath": {
        universalMonsterAbility: "Hold Breath",
        parenthetical: ""
      },
      "lizardfolk blood": {
        type: "Ex",
        text: "A lizard scion counts as a lizardfolk for all effects related to race."
      }
    }
  },

  Troggle: {
    source: "Monster Codex",
    creatureType: "humanoid",
    subTypes: [
      "giant"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Large",
    hd: 5,
    hdVal: 8,
    cr: 4,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 20,
      dex: 13,
      con: 14,
      int: 5,
      wis: 10,
      cha: 5
    },
    feats: [
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Night Stalker",
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
        specialAbility: "trip",
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
    defense: {
      naturalArmor: 5
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "cold hills and mountains",
    visualDescription: "This leathery creature has a lanky, ogre-like shape, but walks on all fours. Its claws, teeth, tail, and gait give it a degenerate, bestial appearance.",
    description: "These dim-witted creatures are a mongrel cross between a troll and an ogre, combining the worst features of each. They usually act like animals and move on all fours, but can rear up on their hind legs to attack with their sharp claws and vicious bites. Some ogres keep them as pets, treating them as exceptionally stupid but hilarious kinfolk. Trolls usually kill troggles on sight, and have been known to band together to wipe out entire ogre clans that possess troggles.",
    organization: "solitary, pair, or gang (3-4)",
    languages: "Giant",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 1
      },
      Perception: {
        ranks: 6
      },
      Stealth: {
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
      "ogre blood": {
        type: "Ex",
        text: "Troggles count as ogres for the purpose of any effects related to race."
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        damageType: "acid or fire",
        value: 5
      },
      trip: {
        universalMonsterAbility: "Trip"
      }
    }
  },

  Gorthek: {
    source: "Monster Codex",
    creatureType: "animal",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 9,
    hdVal: 8,
    cr: 7,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 32,
      dex: 9,
      con: 21,
      int: 2,
      wis: 10,
      cha: 5
    },
    feats: [
      {
        name: "Awesome Blow",
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
        weapon: "Gore",
        name: "Gore",
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "-"
      },
      naturalArmor: 10
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "temperate hills and plains",
    visualDescription: "This massive quadruped has a thick, wrinkled hide, curving horns, and shaggy hair that frames its leonine face.",
    description: "The gorthek is, without a doubt, one of the crankiest beasts found roaming in the wilderness. Appearing as a strange combination of primeval bison and ornery rhinoceros, but with a leonine head crowned with ramlike horns, a gorthek is both immensely powerful and preternaturally hard to injure. Its thick, battering-ram head and powerful body make it a fearsome opponent, particularly when it's riled up and in full charge. Gortheks tend to travel in small herds, grazing across remote temperate grasslands or sparsely wooded hills. When a gorthek perceives a threat-which to the gorthek includes just about everything, often even other gortheks-it launches itself into a full charge, intent on sending the enemy flying. Orc tribes have made a practice of raising the beasts from infancy to serve as living siege engines during warfare. Future gorthek riders bond with the creatures from a very young age, and if possible use gorthek masks to make that bond stronger. When riding into battle, one orc sits astride the gorthek in a specially crafted saddle secured behind its massive horns and guides the beast using spiked reins. An adult male gorthek stands about 7 feet high at the shoulder and weighs around 9,000 pounds. Gorthek Companions An orc who takes the Beast Rider feat (Pathfinder RPG Advanced Race Guide 56) can choose a gorthek as an animal companion or mount. Starting Stats: Size Medium; AC +4 natural armor; Speed 40 ft.; Attack gore (1d8); Ability Scores Str 16, Dex 11, Con 13, Int 2, Wis 10, Cha 5; Special Qualities Darkvision 60 ft., Low-Light Vision. 7th-Level Advancement: Size Large; AC +3 natural armor; Attacks gore (2d6) Ability Scores Str +8, Dex -2, Con +4; Special Attacks powerful charge (gore, 4d6 + twice Strength modifier).",
    organization: "solitary, pair, or herd (3-12)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 9
      }
    },
    special: {
      "powerful charge": {
        universalMonsterAbility: "Powerful Charge",
        type: "Ex",
        weaponName: 2
      },
      trample: {
        universalMonsterAbility: "Trample",
        damage: "2d6+16",
        saveDC: 10
      }
    }
  },

  Kirrix: {
    source: "Monster Codex",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 4,
    hdVal: 10,
    cr: 3,
    racialFeatures: [
      "Blindsense 10 ft.",
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 30,
      burrow: 10,
      climb: 20
    },
    abilities: {
      str: 18,
      dex: 15,
      con: 17,
      int: 5,
      wis: 12,
      cha: 8
    },
    feats: [
      {
        name: "Improved Initiative",
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
      }
    ],
    immunities: [
      "Immune to disease"
    ],
    defense: {
      naturalArmor: 3
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "any underground",
    visualDescription: "This sleek, weasel-like rodent has exaggerated whiskers and six short but stout legs.",
    description: "Ratfolk have just as much enthusiasm for alchemy as they do for rodents, and they combined these two interests to create the kirrix-the result of generations of riding rat husbandry combined with regular infusions. These alchemical modifications have given kirrixes six legs and the ability to consume and transmit diseases without ill effect to the creatures themselves. Many ratfolk settlements raise these gregarious creatures, with whom the ratfolk share their warrens in a symbiotic relationship. The kirrixes prowl the ratfolk tunnels and act as scavengers-searching for unfamiliar scents, consuming detritus, and removing harmful diseases from the ratfolk settlement. If the warren comes under attack, the kirrixes act as guards, and squeeze through or block tunnels as necessary to buy time for their ratfolk allies to escape. A typical adult kirrix is 9 feet long and usually weighs under 500 pounds.",
    organization: "solitary, pair, or pack (3-6)",
    languages: "Common (can't speak)",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 0
      },
      Perception: {
        ranks: 2
      },
      Stealth: {
        ranks: 2
      }
    },
    special: {
      "expel pathogens": {
        type: "Ex",
        text: "When a kirrix hits with its bite attack, it can infect its target using its harbor pathogens ability (if any) with one disease it has stored, even if that disease can't normally be contracted via an injury. It can do this a number of times per day equal to its Constitution modifier. Alternatively, a kirrix can expend two uses of this ability to spray a disease in a 15-foot cone, exposing all creatures in the cone to the disease even if it can't normally be contracted by contact. Doing so depletes the kirrix's reserve of that disease."
      },
      compression: {
        universalMonsterAbility: "Compression"
      },
      "harbor pathogens": {
        type: "Ex",
        text: "A kirrix's body has innate features that let it clean up and contain diseases within ratfolk warrens. A kirrix collects diseases by consuming them off of objects or from the air (typically contact, ingested, or inhaled diseases), by ministering to a diseased creature (typically ingested or injury diseases), or by fighting a creature that imparts diseases and being subjected to one. The kirrix can store up to two types of diseases at a time in an organ near its throat. (A typical kirrix has filth fever and bubonic plague stored.) A kirrix can harmlessly digest an unwanted disease as a full-round action. If the creature consumes a mold or another substance that causes disease, it clears the surface of disease. If it ingests a diseased creature's blood (either by licking an open wound or biting the creature), it can produce an antiplague secretion, which it can use on itself or apply to others. Treat this as though the kirrix were using the Heal skill to treat disease with a +12 bonus."
      }
    }
  },

  "Feeder In The Depths": {
    source: "Monster Codex",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Lawful Evil"
    ],
    size: "Huge",
    hd: 10,
    hdVal: 10,
    cr: 8,
    racialFeatures: [
      "Blindsense 30 ft.",
      "Darkvision 60 ft.",
      "Keen Scent",
      "Low-Light Vision"
    ],
    speed: {
      swim: 80
    },
    abilities: {
      str: 24,
      dex: 15,
      con: 20,
      int: 13,
      wis: 15,
      cha: 14
    },
    feats: [
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Intimidating Prowess",
        type: "Combat"
      },
      {
        name: "Iron Will",
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
        specialAbility: "deadly bleeding",
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {
      SR: {
        value: 19
      },
      naturalArmor: 10
    },
    space: "15 ft.",
    reach: "10 ft.",
    environment: "any oceans",
    visualDescription: "An immense gray-and-white shark glides through the water, its piercing red eyes revealing a vicious intelligence.",
    description: "Feeders in the depths closely resemble ordinary sharks, but they are faster, stronger, and far more intelligent and malevolent. Feeders in the depths begin life as ordinary sharks, raised under the care of sahuagin priestesses. A would-be feeder feasts on the flesh of merfolk, sea elves, and other aquatic humanoids. As it dines on these sacrifices, the priestess chants blasphemous rituals, infusing the shark with malign power and the stolen intelligence of its victims. Over the course of 13 feedings over 13 midwinters, a new feeder in the depths arises. Feeders in the depths view themselves as equals to sahuagin, not as servants. They have no special affection for sharks, and can't communicate with them. Feeders act as loyal companions as long as they're respected and given the freedom to hunt. If not treated well, they rip their would-be masters apart and descend into the lightless depths of the ocean. Although able to breed, feeders in the depths give birth only to monstrosities or normal sharks, never to other feeders. A typical feeder in the depths is 24 feet long and weighs 5,500 pounds.",
    organization: "solitary",
    languages: "Aklo, Aquan, Infernal",
    spellLikeAbilities: [
      {
        name: "blood biography",
        casterLevel: 10,
        limitations: "on any creature bitten in the past day, DC 15",
        timesPerDay: -1
      },
      {
        name: "summon monster v",
        casterLevel: 10,
        limitations: "summons 1d4+1 hammerhead sharks or 1d3 great white sharks",
        timesPerDay: 1
      }
    ],
    skills: {
      Intimidate: {
        ranks: 0
      },
      "Knowledge (religion)": {
        ranks: 10
      },
      Perception: {
        ranks: 10,
        bonuses: [
          {
            source: "inherent",
            value: 5
          }
        ]
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      "swift bite": {
        type: "Ex",
        text: "When making a full attack, a feeder in the depths can make a second bite attack at a -5 penalty."
      },
      "blood feast": {
        type: "Su",
        text: "When a creature within 30 feet of a feeder in the depths takes bleed damage (including ongoing damage), the feeder heals an equal amount of damage.",
        preText: "30 ft."
      },
      "deadly bleeding": {
        type: "Su",
        text: "A feeder in the depth's bite causes bleeding wounds that resist healing. The first bite that damages a creature deals 1d4 points of bleed damage, and each subsequent bite increases the amount of bleed by 1d4. Stopping the bleeding requires a successful DC 20 Heal check or the application of any magical healing. However, anyone attempting to cast a healing spell on a creature suffering from deadly bleeding must succeed at a DC 20 caster level check or the spell doesn't affect the bleeding creature. The save DC is Constitution-based. Keen Scent (Ex) A feeder in the depths can notice creatures by scent in a 180-foot radius underwater, and can detect blood in the water at a distance of up to 1 mile."
      }
    },
    resistances: [
      {
        damageType: "cold",
        value: 20
      }
    ]
  },

  Seru: {
    source: "Monster Codex",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Neutral Evil"
    ],
    size: "Small",
    hd: 3,
    hdVal: 10,
    cr: 3,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 20,
      maneuverability: "Average",
      fly: 40
    },
    abilities: {
      str: 6,
      dex: 15,
      con: 14,
      int: 11,
      wis: 13,
      cha: 10
    },
    feats: [
      {
        name: "Dodge",
        type: "Combat"
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
        weapon: "Spit venom",
        qualities: [
          "ranged touch"
        ],
        name: "Spit venom",
        specialAbility: "Spit venom"
      }
    ],
    defense: {
      naturalArmor: 1
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any land (jungles, swamps, or underground)",
    visualDescription: "The sound of flapping wings and an angry hiss accompany the appearance of this flying snake.",
    description: "A seru is an underground variety of telepathic venomous snake with the wings of a bat. These creatures have long held a special relationship with serpentfolk, and some legends suggest the snake-god created these winged vipers to assist the serpentfolk in their war against humanity. Intelligent enough to form their own culture, many serus live entirely separate lives from serpentfolk enclaves. Even so, many serpentfolk wizards still seek out serus to bind them as familiars. A spellcaster must have the Improved Familiar feat, be of an evil alignment, and be an arcane caster of level of 7th or higher to gain a seru familiar. Serus are natural predators that prefer to track prey by scent. When ready to strike, they spit venom into the eyes of a victim and use ambush tactics to wear down their targets. When presented with overwhelming odds or those capable of resisting their venom, serus tend to flee and hide among their cavern rocks. Serpentfolk often use serus to watch their territorial borders. These creatures serve both as a deterrent and as telepathic spies that can quickly alert their masters to the presence of outsiders. They sometimes enter into friendships with degenerate serpentfolk, participating in raiding parties as equal companions and trackers, or else command them by acting as mouthpieces for purecastes. An adult seru weighs approximately 20 pounds, with a body nearly 3 feet long and a wingspan of 5 feet. A mated female lays two to five eggs every year, but many fall victim to underground predators before they ever hatch. Serus have an average life span of 25 years.",
    organization: "solitary, pair, or nest (3-8)",
    languages: "Aklo, Common (can't speak any language); telepathy 60 ft.",
    spellLikeAbilities: [],
    skills: {
      Bluff: {
        ranks: 3,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Fly: {
        ranks: 0
      },
      Perception: {
        ranks: 2,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Stealth: {
        ranks: 1
      }
    },
    special: {
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Bite or spit venom-injury; save Fort DC 15; frequency 1/minute for 6 minutes; effect 1 Con damage plus blindness for 1 minute; cure 1 save.",
        saveDC: 12
      },
      "spit venom": {
        type: "Ex",
        text: "As a standard action, a seru can spit venom up to 30 feet. This is a ranged touch attack with no range increment. Any opponent hit by this attack is exposed to the seru's poison."
      }
    }
  },

  Slaugrak: {
    source: "Monster Codex",
    creatureType: "outsider",
    subTypes: [
      "chaotic",
      "evil",
      "extraplanar",
      "native"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Large",
    hd: 8,
    hdVal: 10,
    cr: 6,
    racialFeatures: [
      "Darkvision 120 ft.",
      "See in Darkness"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 20,
      dex: 12,
      con: 17,
      int: 5,
      wis: 13,
      cha: 14
    },
    feats: [
      {
        name: "Diehard",
        type: "General"
      },
      {
        name: "Endurance",
        type: "General"
      },
      {
        name: "Iron Will",
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
        specialAbility: "corrupting bite",
        damage: "1d6",
        bonuses: [
          {
            source: "inherent",
            value: "1d6",
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
      }
    ],
    immunities: [
      "Immune to acid, poison"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "cold iron or good"
      },
      naturalArmor: 9
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any underground",
    visualDescription: "This hulking reptilian humanoid's torso bristles with twitching vestigial limbs, milk-white eyes, and drooling half-formed mouths. The creature's oversized maw is filled with curved teeth reminiscent of sickle blades.",
    description: "The taint of demonkind has long corrupted the troglodyte bloodline. Each generation a few mutant creatures marked with the taint of the Abyss are born, and fiendish deformities and stillbirths reeking of brimstone are all too common. The rapacious slaugrak is one of these fiendish mutants. A slaugrak is born with an unnatural and incessant hunger for living flesh. Young slaugraks grow at an unnatural rate, reaching full and awful maturity in just 2 weeks. From birth, a slaugrak is little more than a walking collection of fangs and claws with no thought other than to slay and eat. Slaugraks are sterile and solitary, holding no special love for troglodytes. A well-fed captive slaugrak might form an affectionate bond with its troglodyte keeper, but this affection merely makes the slaugrak more likely to eat its keeper last. A typical slaugrak stands 12 to 14 feet tall and weighs 6,000 pounds.",
    organization: "solitary",
    languages: "Abyssal",
    spellLikeAbilities: [
      {
        name: "deeper darkness",
        casterLevel: 8,
        timesPerDay: 1
      },
      {
        name: "slow",
        casterLevel: 8,
        timesPerDay: 1
      },
      {
        name: "unholy blight",
        casterLevel: 8,
        timesPerDay: 1
      }
    ],
    skills: {
      Climb: {
        ranks: 7
      },
      Intimidate: {
        ranks: 11
      },
      Stealth: {
        ranks: 4,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Swim: {
        ranks: 7
      }
    },
    special: {
      "corrupting bite": {
        type: "Su",
        text: "A slaugrak's caustic saliva is infused with the corrupting power of the Abyss. Any living creature that takes acid damage from a slaugrak's bite must succeed at a DC 17 Fortitude save or take 2 points of Constitution bleed damage as its blood boils and its internal organs liquefy. Creatures without a discernible anatomy (blood and internal organs) are immune to the Constitution bleed. The save DC is Constitution-based."
      },
      "vicious jaws": {
        type: "Ex",
        text: "A slaugrak's bite attack threatens a critical hit on a roll of 19-20."
      },
      stench: {
        universalMonsterAbility: "Stench",
        range: 30,
        duration: "10 rounds",
        saveDC: 10
      }
    },
    resistances: [
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

  "Sewer Troll": {
    source: "Monster Codex",
    creatureType: "humanoid",
    subTypes: [
      "giant"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 3,
    hdVal: 8,
    cr: 2,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 13,
      dex: 14,
      con: 15,
      int: 6,
      wis: 9,
      cha: 6
    },
    feats: [
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Stealthy",
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
    defense: {
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft. (10 ft. with claws)",
    environment: "any underground",
    visualDescription: "This creature looks like a lanky, underfed troll. Its oversized claws drag along the ground, and its large eyes glow with inner light.",
    description: "Sewer trolls are close relations to both common trolls and scrags. They are much smaller, however, only weighing around 200 pounds and reaching up to 6 feet tall. Like normal trolls, sewer trolls possess regenerative powers that allow them to recover from almost any wound and even regrow limbs, though these powers can be thwarted by fire or acid. Their regeneration is significantly slower than a normal troll's, however. Unlike the eyes of normal trolls, sewer trolls' eyes are so sensitive to light that they are momentarily blinded by bright lights. Their eyes absorb ambient light, which damages the slimy membrane that covers them. As the membrane regenerates, a strange reaction causes the eyes to glow orange. In addition to being smaller than normal trolls, sewer trolls are incredibly flexible and can squeeze through small spaces with ease. When the terrain is favorable, they hunt by ambushing prey from small spaces that don't appear capable of harboring a threat. Sewer trolls can eat almost anything, but prefer fresh meat, and like normal trolls they need a lot of food to power their regenerative abilities. Though they can subsist on subterranean fish, they prefer the warm blood and flesh of mammals. Sewer trolls tend to lair underground in areas with a large prey population or ample sources of other nutrients. While sewer trolls are common in some of the immense caves deep underground, their name derives from their lairs under the cities of the surface world. A major city often hosts dozens of the creatures, living in small family groups or lairing on their own. They rarely leave the sewers because of their light blindness, but they have been known to hide just below sewer grates and snatch children who walk too close. In times of desperate hunger, sewer trolls may leave the sewers, invariably at night. They stick to the shadows and ambush lone walkers, or sneak through windows to snatch babies from their cribs. Sewer trolls outside of their native environment are easily scared, but woe to the unprepared foe who follows them back into the sewers. Sewer trolls sometimes join groups of normal trolls or, being semiaquatic, groups of scrags, to benefit from safety in numbers. Their smaller size and weakness mean they're often bullied by their more dangerous cousins, but many sewer trolls accept this as inevitable. They typically have to do menial chores, like collecting rodents to eat if bigger game is scarce, or being the first to venture into unexplored caves, in exchange for protection.",
    organization: "solitary or gang (2-5)",
    languages: "Giant",
    spellLikeAbilities: [],
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
        ranks: 0
      },
      Perception: {
        ranks: 5
      },
      Stealth: {
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
      rend: {
        universalMonsterAbility: "Rend",
        type: "Ex",
        weaponName: 1
      },
      "sneak attack": {
        universalMonsterAbility: "Sneak Attack",
        bonus: "1d6"
      },
      compression: {
        universalMonsterAbility: "Compression"
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        damageType: "acid or fire",
        value: 2
      }
    }
  },

};
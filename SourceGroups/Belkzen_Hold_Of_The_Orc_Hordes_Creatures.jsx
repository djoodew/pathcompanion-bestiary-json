
export const Belkzen_Hold_Of_The_Orc_HordesCreatures = {
  "Bristle Boar": {
    legs: 4,
    arms: 0,
    boar: true,
    source: "Belkzen Hold Of The Orc Hordes",
    creatureType: "animal",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 4,
    hdVal: 8,
    cr: 3,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 19,
      dex: 10,
      con: 17,
      int: 2,
      wis: 13,
      cha: 4
    },
    feats: [
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
        weapon: "Gore",
        name: "Gore",
        specialAbility: "spines",
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 6
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any plains or hills",
    visualDescription: "The vicious spines surrounding this boar's head are almost as unnerving as the wild look in its eyes.",
    description: "Bristle boars are native to the plains and low hills of Belkzen, and are well-known threats to trackers and scouts familiar with the area. The long, hollow spines surrounding their heads are reminiscent of porcupine spines, and make these boars deadlier than their common cousins. Bristle boars are quite lean and aren't considered particularly good to eat-but a desperate adventurer faced with starvation could survive on the meat if necessary. A typical bristle boar stands roughly 4 feet off the ground and weighs 200 pounds. Bristle Boar Companions Starting Statistics: Size Small; Speed 40 ft.; AC +6 natural armor; Attack gore (1d6); Ability Scores Str 15, Dex 10, Con 15, Int 2, Wis 11, Cha 4; SQ Low-Light Vision. 4th-Level Advancement: Size Medium; Attack gore (1d8); Ability Scores Str +4, Dex -2, Con +2; Special Attacks spines. Spines (Ex): Those hit by a bristle boar's gore attack must succeed at a Reflex saving throw to avoid being speared by the dangerously sharp spines around its head and neck. Failure results in 1d4 points of piercing damage.",
    organization: "solitary or pair",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 1
      },
      Perception: {
        ranks: 2
      }
    },
    special: {
      ferocity: {
        universalMonsterAbility: "Ferocity"
      },
      spines: {
        type: "Ex",
        text: "Targets of a bristle boar's successful gore attack must succeed at a DC 16 Reflex saving throw to avoid being speared by the dangerously sharp spines around its head and neck. Failure results in 1d4 points of piercing damage as well as 1 point of bleed damage per round for 3 rounds. Bleed damage from multiple spines doesn't stack, but the duration is reset by subsequent attacks. Magical healing or a successful DC 15 Heal check ends the bleed effect. The save DC is Strength-based."
      }
    }
  },

  "Whisperfall Vulture": {
    source: "Belkzen Hold Of The Orc Hordes",
    creatureType: "animal",
    bird: true,
    flying: true,
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Small",
    hd: 2,
    hdVal: 8,
    cr: 1,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 10,
      maneuverability: "Good",
      fly: 60
    },
    abilities: {
      str: 12,
      dex: 15,
      con: 14,
      int: 2,
      wis: 13,
      cha: 7
    },
    feats: [
      {
        name: "Flyby Attack",
        type: "Monster"
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
    defense: {
      naturalArmor: 1
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "temperate mountains",
    visualDescription: "This dark-winged vulture has a wickedly hooked beak stained with bright red blood.",
    description: "This relative of the common vulture is most often found in the region of Whisperfall Pass. Unlike its scavenging cousin, the Whisperfall vulture is a hunter, taking down rabbits and other small game with ease thanks to its speed and surprising agility. Hungry flocks of these birds of prey can even take down a human adult by sheer force of numbers. Whisperfall vulture eggs are a delicacy, and those who can find and claim them can make a good amount of money selling them to merchants in Urgir. A mature Whisperfall vulture has an 8-foot-long wingspan and weighs 50 pounds. Whisperfall Vulture Companions Starting Statistics: Size Small; Speed 10 ft., fly 60 ft. (average); AC +1 natural armor; Attack bite (1d6); Ability Scores Str 12, Dex 15, Con 12, Int 2, Wis 13, Cha 7; SQ Low-Light Vision. 4th-Level Advancement: Ability Scores Str +2, Con +2.",
    organization: "solitary, pair, or flock (3-18)",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 1
      },
      Perception: {
        ranks: 1,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {}
  },

  Ankhrav: {
    source: "Belkzen Hold Of The Orc Hordes",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Huge",
    hd: 10,
    hdVal: 10,
    cr: 9,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 40,
      burrow: 30
    },
    abilities: {
      str: 27,
      dex: 10,
      con: 22,
      int: 1,
      wis: 15,
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
        name: "Skill Focus",
        type: "General",
        value: "Perception",
        choiceSource: "Skill Focus"
      },
      {
        name: "Snatch",
        type: "Monster"
      },
      {
        name: "Step Up",
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
      }
    ],
    defense: {
      naturalArmor: 16
    },
    space: "15 ft.",
    reach: "15 ft.",
    environment: "any hills, plains, or underground",
    visualDescription: "This giant vermin waves two scything forelegs threateningly as hissing acid drips from its mandibles.",
    description: "Though a significant danger to locals, ankhravs are also a highly valued resource for local tribes and the humans of Trunau. While they and their spawn wreak havoc on any attempts to build settlements in their territory, their sturdy carapaces and valuable organs can be worth a fortune if sold to the right alchemist or collector. There are always a few scouts and trappers willing to risk the dangers of hunting ankhravs. Every winter, ankhravs retreat into their hives to give birth to the next generation of ankhegs. During this time, each ankhrav is tended to by ankheg drones as its flared abdomen produces an incubating egg sac nearly the size of its body. Sustaining this sac uses much of the stores claimed by the ankhrav's hunting season, and without ankheg servants most ankhravs would starve to death, drained by the process of birthing the next generation of drones. If an ankhrav has a large hive with scores of drones and plentiful food, it may give birth to one or two young ankhravs, which leave their birthplace to establish their own hives at 2 years of age. A fully grown ankhrav stretches to a length of 14 feet and can weigh as much as 4,200 pounds.",
    organization: "solitary, royal party (1 ankhrav plus 2-12 ankhegs), or army (1-3 ankhravs plus 2-8 ankhegs)",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 5
      },
      Perception: {
        ranks: 5
      }
    },
    special: {
      "spit acid": {
        type: "Ex",
        text: "An ankhrav can spit a 60-foot line of digestive fluid that deals 7d6 points of acid damage (Reflex DC 21 half). Once an ankhrav uses this ability, the acid damage dealt by the ankhrav's bite attack is reduced by 1d6 for 1 hour. If the ankhrav's bite attack would not deal any acid damage, it cannot spit acid. The save DC is Constitution-based. Ankhravs, also called \"ankheg queens,\" are fearsome predators most common near the Skittermounds. These six-legged beasts are larger than regular ankhegs, but the most telling difference between them and drones is the pair of razor-sharp, mantislike arms located at the front of the thorax. While these arms provide no locomotive aid- their scissorlike edges are too delicate to support any weight-these additional appendages allow ankhravs to quickly bring down prey that would take ankheg spawn much longer to swarm and slay. Ankhravs are rarely encountered alone, and then only when a young queen travels from her home nest to establish a new colony. In most cases, when they venture from their lairs, ankhravs hunt accompanied by ankheg drones."
      }
    }
  },

  "Burning Child": {
    source: "Belkzen Hold Of The Orc Hordes",
    creatureType: "undead",
    subTypes: [
      "fire"
    ],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Small",
    hd: 15,
    hdVal: 8,
    cr: 10,
    racialFeatures: [
      "Perception +17"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 6,
      dex: 17,
      con: "-",
      int: 10,
      wis: 15,
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
        name: "Quicken Spell-Like Ability",
        type: "Monster",
        value: "Fireball",
        choiceSource: "Quicken Spell-Like Ability"
      },
      {
        name: "Toughness",
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
        name: "Slam",
        specialAbility: "burn",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "temperate plains",
    visualDescription: "The smell of scorched flesh accompanies this small child, who appears to be made entirely of dust and smoldering ash.",
    description: "Born from the traumatic death of an abducted human child at the hands of orc alchemists seeking to unlock the mysteries of his sorcerous bloodline and convert him into a weapon, the Burning Child has haunted a wide stretch of wasteland in eastern Belkzen for centuries. First seen during the battle that bears his name, the Burning Child continues to wander in an endless search for his parents, constantly reliving the terrifying experience of his first fiery death. While in his passive state, he's little more than disembodied sobbing and the scent of burning flesh. But when he happens upon the scene of a battle, the memory of his agonizing death pushes him to manifest, and he wanders into the fray crying out for rescue, all the while unintentionally sowing devastation as the uncontrollable energies coursing through him spill out of his unstable form.",
    organization: "unique",
    languages: "Common",
    spellLikeAbilities: [
      {
        name: "elemental aura",
        casterLevel: 11,
        limitations: "fire only; DC 17",
        timesPerDay: -1
      },
      {
        name: "fire trail",
        casterLevel: 11,
        timesPerDay: -1
      },
      {
        name: "burning hands",
        casterLevel: 11,
        timesPerDay: -1
      },
      {
        name: "scorching ray",
        casterLevel: 11,
        timesPerDay: -1
      },
      {
        name: "fireball",
        casterLevel: 11,
        limitations: "Metamagic: Quicken ",
        timesPerDay: 3
      }
    ],
    skills: {
      "Escape Artist": {
        ranks: 15
      },
      Intimidate: {
        ranks: 12
      },
      Perception: {
        ranks: 12
      },
      "Sense Motive": {
        ranks: 12
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "60-ft. cone",
        damage: "Reflex DC 21 half",
        text: "The Burning Child can use his breath weapon only when in his active state, and only once each time he becomes active."
      },
      burn: {
        universalMonsterAbility: "Burn",
        saveDC: null,
        damage: "2d8"
      },
      "binary state": {
        type: "Su",
        text: "Most of the time the Burning Child is in a passive state, during which he's incorporeal and invisible, though his soft sobs and the scent of burning flesh allow a creature to pinpoint his location with a successful DC 30 Perception check. If the Burning Child comes across a battle, the chance he enters his active state is equal to 1% per creature fighting (to a maximum of 100%). While active, the Burning Child is corporeal and visible. After 1d4 hours without being attacked or seeing conflict, the Burning Child reenters his passive state. Breath Weapon (Su) The Burning Child can use his breath weapon only when in his active state, and only once each time he becomes active."
      },
      "channel resistance": {
        universalMonsterAbility: "Channel Resistance",
        bonus: 4
      },
      "final embrace": {
        type: "Ex",
        text: "If the Burning Child is destroyed, he reforms in 2d4 days. He can be permanently destroyed only when active, by a humanoid embracing and calming him. This requires succeeding at DC 28 Diplomacy checks for 3 consecutive rounds."
      },
      "elemental aura": {
        type: "Ex",
        preText: "fire, DC 17"
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "60 ft."
      }
    }
  },

  Dahzagan: {
    source: "Belkzen Hold Of The Orc Hordes",
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
    hd: 8,
    hdVal: 10,
    cr: 6,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Deathwatch",
      "Scent"
    ],
    speed: {
      base: 40,
      maneuverability: "Average",
      fly: 60
    },
    abilities: {
      str: 21,
      dex: 14,
      con: 18,
      int: 7,
      wis: 16,
      cha: 19
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
        name: "Great Fortitude",
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
        name: "Weapon Focus",
        type: "Combat",
        value: "Greatsword",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Greatsword",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "Greatsword",
        damage: "2d6"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to fire, poison"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "good or lawful"
      },
      SR: {
        value: 16
      },
      naturalArmor: 7
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "any (Abyss)",
    visualDescription: "This winged horror has the upper body of a feral, bloody-mouthed female orc warrior and the lower body of a giant wolf.",
    organization: "solitary, trio, or murder (6-8 dahzagans)",
    languages: "Abyssal, Orc",
    spellLikeAbilities: [
      {
        name: "deathwatch",
        casterLevel: 6,
        timesPerDay: -1
      }
    ],
    skills: {
      Fly: {
        ranks: 8
      },
      Intimidate: {
        ranks: 8
      },
      "Knowledge (planes)": {
        ranks: 8
      },
      Perception: {
        ranks: 8
      }
    },
    special: {
      "terrifying howl": {
        type: "Su",
        text: "A dahzagan can use the terrifying howl barbarian rage power as a standard action (Will DC 19). A creature that succeeds at its save is immune to that dahzagan's terrifying howl for 24 hours."
      },
      "heart-feaster": {
        type: "Su",
        text: "As a full-round action, a dahzagan can rip out and devour the heart of an orc or half-orc who died in battle within the past 24 hours. The strength of the dead warrior empowers her, granting her the effects of rage (CL 9th)."
      },
      "undersized weapons": {
        type: "Ex",
        text: "Although dahzagans are Large, their upper bodies are those of Medium orcs. As such, they wield weapons as Medium creatures."
      }
    },
    resistances: [
      {
        damageType: "electricity",
        value: 10
      }
    ]
  },

  "Floodslain Arsinoitherium": {
    source: "Belkzen Hold Of The Orc Hordes",
    creatureType: "undead",
    subTypes: [
      "augmented"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Large",
    hd: 9,
    hdVal: 8,
    cr: 8,
    racialFeatures: [
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 30,
      swim: 30
    },
    abilities: {
      str: 30,
      dex: 8,
      con: "-",
      int: 2,
      wis: 15,
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
        name: "Great Fortitude",
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
        weapon: "Gore",
        name: "Gore",
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "magic"
      },
      naturalArmor: 13
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "any plains",
    visualDescription: "This wild-eyed, rhinolike creature lumbers along with splashing steps, water streaming from its pale, sagging, hide.",
    description: "Collectively known as \"the after-storm\" by Belkzen natives, floodslain are victims of flash floods that have risen as undead. They're creatures of panic and despair, driven by anger, fear, and a yearning to drag others into the waters. Long after the floodwaters recede, floodslain continue spreading the miserable death that claimed them. Floodslain are similar in appearance to their original living forms, and are recognizable even in their waterlogged state. Many were gruesomely damaged by the floods that took their lives, though, their bodies battered and broken by rushing water and debris. The one feature common among all floodslain is wild, panicked eyes-a telltale sign of a death mired in shock and fear. Floodslain tend to drift toward lower ground, as if seeking the very water that transformed them. While this habitual migration makes them a contained threat in some areas, the relatively flat floodplains of Belkzen offer little resistance to the wandering undead. They can be found floating in major rivers, trapped in ravines and valleys, and staggering across flatlands, sometimes in large numbers. Floodslain that come close to living creatures try to drown them, and relentlessly follow those who flee. Targets who escape often draw the attention of yet more floodslain, eventually leading the undead to their homes. In great numbers, floodslain can slaughter small settlements. While many find the possibility of undead born from purely natural disasters to be disturbing in and of itself, theories from druids and scholars in Lastwall hold even more chilling implications. Given that floodslain are most common in eastern Belkzen yet are little known outside that region, it is suspected that the floodwater itself was cursed even before falling as snow, perhaps by the dark influence of Gallowspire. If the Whispering Tyrant's insidious reach could extend so far using only passing clouds, the crusaders of Lastwall might be facing a threat even more dire than they realize. Creating a Floodslain Creature \"Floodslain\" is an acquired template that can be added to any non-aquatic living creature. A floodslain uses the base creature's stats and abilities except as noted here. CR: Same as base creature + 1. Alignment: Chaotic evil. Type: The creature's type changes to undead (augmented). Do not recalculate class BAB or saves. Armor Class: Natural armor increases by 2. Hit Dice: Change all racial Hit Dice to d8s. Class Hit Dice are unaffected. As undead, floodslain creatures use their Charisma modifiers to determine bonus hit points (instead of their Constitution modifiers). Defensive Abilities: A floodslain creature gains channel resistance +2, DR 5/magic, and cold resistance 10 in addition to other defensive abilities granted by the undead type. Speed: A floodslain creature gains a swim speed of 30 feet unless it already possesses a swim speed. Melee: A floodslain creature gains a slam attack based on its size, if the base creature doesn't have one. Its slam attack also delivers the drowning touch effect (see below). Its natural attacks are treated as magic weapons for the purpose of overcoming damage reduction. Special Attacks: Floodslain creatures gain several special attacks. The save DCs are equal to 10 + 1/2 the base creature's HD + its Charisma modifier unless otherwise noted. Crashing Waters (Su): Once per day, a floodslain creature can instinctively summon a spectral echo of the rushing waters that created it. This mass of phantom water slams the floodslain creature from behind, carrying it forward at up to three times its normal speed and enabling it to charge a single target. These waters also impact all creatures near the end of the floodslain creature's movement, pushing them back. This acts as a bull rush; the floodslain creature attempts a single combat maneuver check against the CMD of each creature within 10 feet of the end of its charge. This bull rush attempt doesn't provoke attacks of opportunity. Create Spawn (Su): Any creature killed by a floodslain creature rises as a floodslain creature if it's left immersed in water for 24 hours. These spawn aren't under the control of their creators. Drowning Touch (Su): The slam attack of a floodslain creature partially fills a living victim's lungs with water. The victim must succeed at a Fortitude saving throw in order to cough up this water or become fatigued for 1d4 rounds. A fatigued creature that fails this save becomes exhausted instead. An exhausted creature that fails this save is staggered and falls to 0 hp. A creature at 0 hp that fails this save drops to -1 hp and begins dying. A creature killed in this fashion appears to have drowned. Panic (Su): The dead eyes of a floodslain creature are frozen with shock and fear. The floodslain creature can induce fear in a living victim as a standard action. Targets must succeed at a Will saving throw or become shaken for 1d6 rounds. A creature can be affected by the same floodslain creature's panic attack only once every 24 hours. Special Qualities: A floodslain creature gains the following special quality. Flash Flood (Su): A floodslain creature is constantly surrounded by an echo of the disaster that originally took its life. Water streams from the floodslain creature's body, forming a 30-foot-radius pool that renders the ground in that area slick and muddy and increases the DCs of Acrobatics checks made in the area by 5. Ability Scores: Str +2, Dex -2, Int +0, Wis +2, Cha +2 (minimum 14). Waterlogged and ruined, floodslain creatures are driven to cling to life by maddened fear and confusion. As undead, floodslain creatures have no Constitution scores. Feats: Floodslain creatures gain Toughness as a bonus feat.",
    organization: "solitary or pair",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 9
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      "crashing waters": {
        type: "Ex"
      },
      "create spawn": {
        type: "Ex"
      },
      "drowning touch": {
        type: "Ex",
        preText: "DC 16"
      },
      panic: {
        type: "Ex",
        preText: "DC 16"
      },
      "powerful charge": {
        universalMonsterAbility: "Powerful Charge",
        type: "Ex",
        weaponName: 5
      },
      trample: {
        universalMonsterAbility: "Trample",
        damage: "2d8+13",
        saveDC: 10
      },
      "flash flood": {
        type: "Ex"
      },
      "channel resistance": {
        universalMonsterAbility: "Channel Resistance",
        bonus: 2
      }
    },
    resistances: [
      {
        damageType: "cold",
        value: 10
      }
    ]
  },

  Juggerloathe: {
    source: "Belkzen Hold Of The Orc Hordes",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Gargantuan",
    hd: 19,
    hdVal: 10,
    cr: 16,
    racialFeatures: [
      "Darkvision 120 ft.",
      "Low-Light Vision",
      "Scent",
      "Tremorsense 120 ft."
    ],
    speed: {
      base: 40,
      burrow: 30
    },
    abilities: {
      str: 32,
      dex: 13,
      con: 26,
      int: 5,
      wis: 19,
      cha: 12
    },
    feats: [
      {
        name: "Improved Bull Rush",
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
        name: "Lunge",
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
        name: "Skill Focus",
        type: "General",
        value: "Perception",
        choiceSource: "Skill Focus"
      },
      {
        name: "Snatch",
        type: "Monster"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "2 Bites",
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
      DR: {
        value: 10,
        damageType: "adamantine"
      },
      SR: {
        value: 22
      },
      naturalArmor: 25
    },
    space: "20 ft.",
    reach: "20 ft.",
    environment: "any (Hold of Belkzen)",
    visualDescription: "This massive spiked creature has smoking black pits for eyes, an enormous maw, and a tail that appears to be an armored cobra.",
    description: "The seemingly unstoppable spawn of a bulette of massive size and Yethazmari (Lamashtu's herald; see page 99 of Pathfinder Campaign Setting: Inner Sea Gods), the Juggerloathe is 50 feet from its nose to the base of its tail, and weighs slightly more than 100 tons. It has been a living legend among the tribes of Belkzen for centuries. Although it's seemingly content to remain hidden in its lair within the Mindspin Mountains, the creature is sometimes driven out onto the plains by hunger. Entire tribes have been known to disappear into its gullet, and it leaves only desolation and fiendishly warped undead in the wake of its rampages.",
    organization: "unique",
    languages: "Orc",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 9
      },
      Perception: {
        ranks: 6
      }
    },
    special: {
      "devour life": {
        type: "Su",
        text: "The Juggerloathe's stomach leeches the life force of those trapped within it, rather than digesting them with acids. Any living victims that are swallowed whole and killed while within the Juggerloathe are turned into twisted creatures of undeath and pain. Regardless of their original size or form, those killed within the Juggerloathe become bodaks (Pathfinder RPG Bestiary 2 48), though their appearance may be less humanoid than those of typical bodaks. These undead stop taking damage while within the Juggerloathe, and escape its innards when it next uses its ejection attack. The undead aren't controlled by the Juggerloathe, but they don't attack it and it is immune to their powers."
      },
      ejection: {
        type: "Ex",
        text: "The Juggerloathe can eject the contents of its stomach in a 60-foot cone that deals 8d6 points of acid damage (Reflex DC 27 half) once every 1d6 rounds. Any creatures swallowed whole by it-still living and undead-land prone at the far end of the cone. The save DC is Constitution-based."
      },
      "leaping shockwave": {
        type: "Ex",
        text: "The Juggerloathe leaps into combat much like normal bulettes, but lands with an earth-shaking impact. When it charges, it can attempt a DC 25 Acrobatics check to jump into the air and land next to its enemies. If it's successful, all adjacent foes must succeed at a DC 30 Reflex save or be knocked prone. The Juggerloathe ends its charge with two bite attacks and two claw attacks, dividing them up as it sees fit among targets within reach. The save DC is Strength-based."
      },
      "swallow whole": {
        universalMonsterAbility: "Swallow Whole",
        damage: "AC 23",
        AC: "hp 30"
      },
      trample: {
        universalMonsterAbility: "Trample",
        damage: "2d8+11",
        saveDC: 10
      }
    }
  },

  "Bull Of Zagresh": {
    source: "Belkzen Hold Of The Orc Hordes",
    creatureType: "animal",
    bull: true,
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Huge",
    hd: 9,
    hdVal: 8,
    cr: 7,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 31,
      dex: 12,
      con: 19,
      int: 2,
      wis: 11,
      cha: 4
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
        name: "Improved Natural Attack",
        type: "Monster",
        value: "Gore",
        choiceSource: "Improved Natural Attack"
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
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 11
    },
    space: "15 ft.",
    reach: "15 ft.",
    environment: "any hills or plains",
    visualDescription: "This immense bovine has horns reminiscent of a stag, with daggerlike points spreading more than fifteen feet across.",
    description: "These enormous bovines are 15 feet tall, measure nearly 30 feet from horns to tail, and weigh approximately 16 tons. Bred for war and violence by the Murdered Child orc tribe, they are used in ravine fights-bloodsports in blocked-off gorges or gullies that pit the might and ferocity of orcs against various wild beasts. Aggressive and trained for combat, bulls of Zagresh respond to most threats by charging anything that stands and goring whatever is left. Skilled Murdered Child beast drovers oversee bulls of Zagresh in warfare, driving the mighty cattle into enemy formations to break the front line or crush foot archers and other lightly armored targets. Bull Of Zagresh Companions Starting Statistics: Size Medium; Speed 40 ft.; AC +4 natural armor; Attack gore (1d8); Ability Scores Str 15, Dex 14, Con 13, Int 2, Wis 11, Cha 4; Special Qualities Low-Light Vision. 4th-Level Advancement: Size Large; AC +3 natural armor; Attack gore (2d6); Ability Scores Str +8, Dex -2, Con +4; Special Attacks trample.",
    organization: "solitary, pair, or herd (10-30)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 5
      },
      Swim: {
        ranks: 4
      }
    },
    special: {
      trample: {
        universalMonsterAbility: "Trample",
        damage: "3d8+15",
        saveDC: 10
      }
    }
  },

  "Warcat Of Rull": {
    source: "Belkzen Hold Of The Orc Hordes",
    creatureType: "animal",
    feline: true,
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Huge",
    hd: 16,
    hdVal: 8,
    cr: 13,
    racialFeatures: [
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 50,
      climb: 20
    },
    abilities: {
      str: 35,
      dex: 18,
      con: 24,
      int: 2,
      wis: 11,
      cha: 5
    },
    feats: [
      {
        name: "Acrobatic",
        type: "General"
      },
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Diehard",
        type: "General"
      },
      {
        name: "Endurance",
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
        name: "Run",
        type: "General"
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
        name: "2 Claw",
        specialAbility: "rend",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 16
    },
    space: "15 ft.",
    reach: "15 ft.",
    environment: "cold hills or mountains",
    visualDescription: "This massive catlike creature has the lithe grace of a feline despite a shell-like armor of segmented plates.",
    description: "Warcats of Rull are massive creatures with the shapes and habits of great cats but the armored skin of armadillos. Weighing 4,000 pounds and stretching 25 feet from nose to the base of its tail, a warcat of Rull is a dangerous predator with a large territory. Wild warcats of Rull hunt alone or with a single mate, and have been known to take down prey ranging from megafauna to giants and even young dragons. The Ice Tooth orc clan catches warcats of Rull as cubs and trains them to serve the clan. These beasts often act as mounts for the clan's champions, who ride them into battle against warriors from the Realm of the Mammoth Lords. Warcat Of Rull Companions Starting Statistics: Size Medium; Speed 40 ft.; AC +4 natural armor; Attack bite (1d6), 2 claws (1d4); Ability Scores Str 15, Dex 15, Con 14, Int 2, Wis 11, Cha 5; Special Attacks rake (1d4); SQ Low-Light Vision, scent. 7th-Level Advancement: Size Large; AC +2 natural armor; Attack bite (1d8), 2 claws (1d6); Ability Scores Str +8, Dex -2, Con +4; Special Attacks grab, pounce, rake (1d6).",
    organization: "solitary or pair",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 0
      },
      Climb: {
        ranks: 0
      },
      Perception: {
        ranks: 4
      },
      Stealth: {
        ranks: 4
      },
      Swim: {
        ranks: 4
      }
    },
    special: {
      pounce: {
        universalMonsterAbility: "Pounce"
      },
      rend: {
        universalMonsterAbility: "Rend",
        type: "Ex",
        weaponName: 8
      },
      trample: {
        universalMonsterAbility: "Trample",
        damage: "2d8",
        saveDC: 10
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

};
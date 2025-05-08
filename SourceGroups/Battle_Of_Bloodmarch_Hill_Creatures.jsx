
export const Battle_Of_Bloodmarch_HillCreatures = {
  "Mindspin Ram": {
    source: "Battle Of Bloodmarch Hill",
    creatureType: "animal",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 4,
    hdVal: 8,
    cr: 2,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 12,
      dex: 17,
      con: 13,
      int: 2,
      wis: 14,
      cha: 7
    },
    feats: [
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Nimble Moves",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Gore",
        name: "Gore",
        specialAbility: "bleed",
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
    defense: {
      naturalArmor: 1
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "cold mountains",
    visualDescription: "This stark white ram's curved horns appear to have sharp thorns studding every inch of their surface.",
    description: "The hardy Mindspin rams are found only in the high peaks of the Mindspin Mountains, where their stark white fur helps them blend into snowbanks to escape the giants and trolls that are prevalent in the area. They take another of their names, \"rosethorn rams,\" from their dangerous horns, which are covered in sharp growths resembling short thorns, and can cause deep, bleeding wounds that slow foes down until the rams can flee or finish would-be hunters with their sharp hooves. The rams' thorny horns also enable them to strip bark from trees for sustenance during difficult winters. Rigidly adapted to the snowy peaks of their mountain range, the rams are fiercely territorial and protective of the caves in which they make their dens. During breeding season, they become especially aggressive, venturing out to chase off predators and using their deadly horns to drive away competition. Even mountain trolls avoid direct confrontation with the rams at these times, preferring instead to cave in the creatures' dens, then pick through the rubble to gobble up the whole family. Mindspin rams are 4 feet tall and 6 feet long, and weigh up to 500 pounds. Mindspin Ram Companions Starting Statistics: Size Small; Speed 40 ft.; AC +1 natural; Attack gore (1d4); Ability Scores Str 10, Dex 17, Con 11, Int 2, Wis 14, Cha 7; Special Qualities Low-Light Vision, scent. 4th-Level Advancement: Size Medium; Attack gore (1d6); Ability Scores Str +4, Dex -2, Con +2; Special Attacks bleed (gore, 1), powerful charge (gore, 1d8).",
    organization: "solitary, pair, or herd (3-12)",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Climb: {
        ranks: 1,
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
      bleed: {
        universalMonsterAbility: "Bleed",
        damage: 1
      },
      "powerful charge": {
        universalMonsterAbility: "Powerful Charge",
        type: "Ex",
        weaponName: 1
      }
    }
  },

  Skittergoat: {
    source: "Battle Of Bloodmarch Hill",
    creatureType: "animal",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Small",
    hd: 2,
    hdVal: 8,
    cr: "1/2",
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 12,
      dex: 14,
      con: 11,
      int: 2,
      wis: 11,
      cha: 5
    },
    feats: [
      {
        name: "Skill Focus",
        type: "General",
        value: "Escape Artist",
        choiceSource: "Skill Focus"
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
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "temperate hills or plains",
    visualDescription: "This small goat has sharp horns that wrap around its head to point forward, making it resemble a tiny bull.",
    description: "This breed of small goats, which dines almost exclusively on ankheg eggs, was only recently discovered living among the low hills and valleys of the Skittermounds. The skittergoats have adapted to life alongside the ankhegs with whom they share their environment: their agility allows them to slip through small spaces in search of eggs, and their speed makes them quite adept at escaping the grasp of angry ankheg mothers. Their relatively docile nature and ability to pierce ankheg eggs with their sharp horns have led to high demand for domesticated skittergoat companions among rangers searching for ankheg nests. Skittergoats don't often form large herds, since foraging for ankheg eggs is most effectively done alone. A mating pair of skittergoats will generally pair for life, with the female ranging out in search of food while the male stays near the den to protect the young. Mothers regurgitate food for their young after returning from a hunt. Skittergoat Companions Starting Statistics: Size Small; Speed 30 ft.; AC +1 natural; Attack gore (1d4); Ability Scores Str 13, Dex 14, Con 11, Int 2, Wis 10, Cha 5; Special Qualities Low-Light Vision. 4th-Level Advancement: Size Medium; Attack gore (1d6); Ability Scores Str +4, Dex -2, Con +2; Special Qualities egg cracker.",
    organization: "solitary, pair, or herd (3-12)",
    spellLikeAbilities: [],
    skills: {
      "Escape Artist": {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 2
          }
        ]
      },
      Perception: {
        ranks: 1
      }
    },
    special: {
      "egg cracker": {
        type: "Ex",
        text: "A skittergoat's horns are able to crack through the tough shells of ankheg eggs. When a skittergoat charges, its gore attack is resolved against the target's touch AC. In addition, when breaking an object, a skittergoat ignores 1 point of the object's hardness."
      }
    }
  },

  "Blackwisp Egret": {
    source: "Battle Of Bloodmarch Hill",
    creatureType: "animal",
    bird: true,
    flying: true,
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Small",
    hd: 1,
    hdVal: 8,
    cr: "1/3",
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 10,
      maneuverability: "Average",
      fly: 40
    },
    abilities: {
      str: 4,
      dex: 15,
      con: 11,
      int: 2,
      wis: 12,
      cha: 5
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
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "temperate swamps",
    visualDescription: "This jet-black bird has a long, hooked beak. Its piercing orange eyes reflect any light that hits them, making them appear to glow ominously.",
    description: "Blackwisp egrets are relatively harmless during the day, but at night, their glowing eyes are often mistaken for the deadly will-o'-wisps that plague Belkzen's Ghostlight Marsh. Many people flee in terror upon seeing flocks of glowing orbs in the night and wind up twisting an ankle on a gnarled tree root or falling into a sinkhole as they bolt. These misfortunes have led many who travel through Ghostlight Marsh to consider blackwisp egrets unlucky omens. Blackwisp egrets are hunters and scavengers, living on anything from frogs to fish to carrion left by other denizens of the marsh. Their long, serrated beaks are excellent for cutting through the clothing of deceased travelers, and flocks of egrets on the edge of starvation sometimes even attack living travelers. Almost invisible at night thanks to their jet-black feathers, the birds are well adapted to hunting by stealth in their environment. They flock together for protection, as even the most dangerous predators avoid such groups when encountered in darkness, fearing that they may actually be a group of will-o'-wisps. The few swamp druids who still make their homes in the marsh have been known to domesticate these birds, encouraging them to slowly circle the druids' homes at night to ward away unwanted visitors. Blackwisp Egret Companions Starting Statistics: Size Small; Speed 30 ft., fly 30 ft. (poor); AC +1 natural; Attack bite (1d4); Ability Scores Str 8, Dex 17, Con 8, Int 2, Wis 13, Cha 5; Special Qualities Low-Light Vision. 4th-Level Advancement: Size Medium; Attack bite (1d6); Ability Scores Str +4, Dex -2, Con +2; Special Qualities deceptive target.",
    organization: "solitary, pair, or flock (3-12)",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 0
      },
      Stealth: {
        ranks: 1
      }
    },
    special: {
      "deceptive target": {
        type: "Ex",
        text: "A blackwisp egret's glowing eyes belie its true position at night. In areas of dim light or darkness, ranged attacks against a blackwisp egret suffer a 20% miss chance."
      }
    }
  },

  "Exoskeleton Giant Cockroach": {
    source: "Battle Of Bloodmarch Hill",
    creatureType: "undead",
    subTypes: [],
    alignments: [
      "Neutral Evil"
    ],
    size: "Small",
    hd: 2,
    hdVal: 8,
    cr: "1/2",
    racialFeatures: [
      "Darkvision 60 ft.",
      "Tremorsense 60 ft."
    ],
    speed: {
      base: 30,
      climb: 30,
      maneuverability: "Clumsy",
      fly: 40
    },
    abilities: {
      str: 13,
      dex: 12,
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
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "bludgeoning"
      },
      naturalArmor: 1
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "?",
    visualDescription: "The tattered remains of a dead stag beetle rumble to life, creaking and clattering forward on dry, brittle legs.",
    description: "Found skittering through forgotten tombs, crawling through deep forests, and filling damp caverns, exoskeletons are animated carapaces of arthropods and other vermin. Most exoskeletons are the intentional creations of necromancers, but some of these undead monstrosities arise spontaneously from places awash with negative energy or are created by malfunctioning artifacts. Even though exoskeletons are just as mindless as they were when they were living, they now attack all living creatures on sight, exploding in a burst of dusty remains when they are destroyed. A spellcaster can create an exoskeleton using animate dead. An exoskeleton can be created from a mostly intact dead vermin that has an exoskeleton. This includes arachnids, insects, crustaceans, and even some mollusks, but not soft-bodied vermin such as jellyfish and leeches. Creating an Exoskeleton \"Exoskeleton\" is an acquired template that can be added to any corporeal vermin that has an exoskeleton (referred to hereafter as the base creature). Challenge Rating: Depends on Hit Dice, as follows: Hit Dice CR XP 1 1/4 100 2 1/2 200 3-4 1 400 5-6 2 600 7-8 3 800 9-10 4 1,200 11-12 5 1,600 13-15 6 2,400 16-17 7 3,200 18-20 8 4,800 21-24 9 6,400 25-28 10 9,600 Alignment: Always neutral evil. Type: The creature's type changes to undead. It retains any subtype except for alignment subtypes (such as good) and subtypes that indicate kind (such as giant). It does not gain the augmented subtype. It uses all the base creature's statistics and special abilities except as noted here. Armor Class: Natural armor changes as follows: Exoskeleton Size Natural Armor Bonus Tiny or smaller +0 Small +1 Medium +2 Large +3 Huge +4 Gargantuan +7 Colossal +11 Hit Dice: An exoskeleton retains the number of Hit Dice the base creature possessed, and gains a number of additional Hit Dice as noted on the following table. If the base creature has more than 20 Hit Dice, it can't be made into an exoskeleton by the animate dead spell. An exoskeleton uses its Charisma modifier (instead of its Constitution modifier) to determine bonus hit points. Exoskeleton Size Bonus Hit Dice Tiny or smaller- Small or Medium +1 HD Large +2 HD Huge +4 HD Gargantuan +6 HD Colossal +10 HD Saves: Base save bonuses are Fort +1/3 HD, Ref +1/3 HD, and Will +1/2 HD +2. Defensive Abilities: Exoskeletons lose their defensive abilities and gain all of the qualities and immunities granted by the undead type. In addition, exoskeletons gain DR 5/bludgeoning. Speed: An exoskeleton retains all movement speeds. However, its maneuverability for flight drops to clumsy. Attacks: An exoskeleton retains all of its natural weapons. If the base creature didn't have any natural weapons, it gains a slam attack that deals damage based on the exoskeleton's size, but as if it were one size category larger than its actual size. Special Attacks: An exoskeleton loses all of its special attacks that rely on a functioning biology (such as poison), but retains any others. Abilities: An exoskeleton's Strength increases by 2. The exoskeleton has no Constitution or Intelligence score, and its Wisdom and Charisma scores change to 10. BAB: An exoskeleton's base attack bonus is equal to 3/4 of its Hit Dice. Skills: Though most vermin are mindless and have no skill ranks, the exoskeleton loses all skill ranks if it had any, and it doesn't retain any racial bonuses it had. Feats: An exoskeleton loses all feats possessed by the base creature, and doesn't gain feats as its Hit Dice increase, but it does gain Toughness as a bonus feat. Special Qualities: An exoskeleton loses most special qualities of the base creature. It retains any extraordinary special qualities that improve its melee or ranged attacks. An exoskeleton gains the following special quality. Burst (Ex): When an exoskeleton is destroyed, its desiccated husk bursts, releasing the dusty remains of the vermin into the surrounding air. Any creature adjacent to an exoskeleton when it bursts must succeed at a Fortitude save or become staggered for 1 round as it coughs and sneezes. Creatures that don't need to breathe are immune to this effect. If the exoskeleton possesses 10 or more Hit Dice, the victim is nauseated instead. The save DC is equal to 10 + 1/2 the exoskeleton's HD + its Cha modifier.",
    organization: "?",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 0
      },
      Fly: {
        ranks: 0
      }
    },
    special: {
      burst: {
        type: "Ex",
        preText: "DC 11"
      }
    },
    resistances: [
      "light sensitivity"
    ]
  },

  Chalicotherium: {
    source: "Battle Of Bloodmarch Hill",
    creatureType: "animal",
    dinosaur: true,
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 8,
    hdVal: 8,
    cr: 6,
    racialFeatures: [
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 24,
      dex: 11,
      con: 18,
      int: 2,
      wis: 11,
      cha: 5
    },
    feats: [
      {
        name: "Endurance",
        type: "General"
      },
      {
        name: "Improved Bull Rush",
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
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 9
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "temperate forests",
    visualDescription: "This huge, slothlike creature has long, clawed forelimbs and short rear legs.",
    description: "Chalicotheriums are massive creatures resembling sloths with vaguely equine heads and long forelimbs ending in wickedly sharp claws. These creatures are generally docile and will attack only when provoked, but they defend their homes and young from attack viciously. A typical adult chalicotherium is about 10 feet tall at the shoulder and 12 feet long from nose to rump, and weighs 14,000 pounds. When on the ground, a chalicotherium seems almost to be standing upright, as its short, stocky rear legs support most of its body weight. Its ability to climb is superb, though only exceptionally large trees are sturdy enough to support it, and its long front limbs allow it to quickly ascend to dizzying heights even among relatively sparse foliage. The chalicotherium diet consists mainly of flowers and leaves, and a small family of these animals can quickly strip all the greenery from an area of forest before moving on. Chalicotheriums are generally found alone or in breeding pairs with young. Chalicotheriums are protective of their offspring, which they produce in small litters of one to three pups at a time. These pups use their still-developing claws to hold on to a thick fat pad on the mother's back. Chalicotherium Companions Starting Statistics: Size Medium; Speed 30 ft., climb 30 ft.; AC +4 natural; Attack 2 claws (1d4); Ability Scores Str 12, Dex 14, Con 13, Int 2, Wis 13, Cha 3; Special Qualities Low-Light Vision, scent. 7th-Level Advancement: Size Large; AC +2 natural; Attack 2 claws (1d6); Ability Scores Str +8, Dex -2, Con +4; Special Attack rend (2 claws, 1d6).",
    organization: "solitary or pair",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 1
      },
      Perception: {
        ranks: 7
      }
    },
    special: {}
  },

  Deinotherium: {
    source: "Battle Of Bloodmarch Hill",
    creatureType: "animal",
    dinosaur: true,
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Huge",
    hd: 8,
    hdVal: 8,
    cr: 7,
    racialFeatures: [
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 29,
      dex: 9,
      con: 22,
      int: 2,
      wis: 13,
      cha: 4
    },
    feats: [
      {
        name: "Endurance",
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
      },
      {
        weapon: "Slam",
        name: "Slam",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 12
    },
    space: "15 ft.",
    reach: "15 ft.",
    environment: "any forests or plains",
    visualDescription: "This creature resembles an elephant, though it has a shorter, thicker trunk and sharp, downward-curving tusks.",
    description: "Deinotheriums are regal beasts of the same evolutionary family as the elephant, though with a shorter temper that far exceeds that of their more docile cousins. These creatures are known to attack with very little provocation, charging and sweeping a target under their gigantic feet to trample it to death. A typical deinotherium stands approximately 12 feet tall at the shoulder, measures 25 feet from trunk to tail, and weighs 30,000 pounds. While deinotheriums are herbivores, their quick tempers have given them a reputation as man-eaters. The downward-swooping tusks under a deinotherium's mouth are used to dig for roots and tubers that it can scoop up and devour using its prehensile trunk. It also uses its curved tusks to hook tree branches and pull them close to allow for easier feeding. The trunk itself is much shorter and wider than that of an elephant, and its huge nasal passages give the creature an acute sense of smell. Deinotheriums are not herd creatures, generally grouping only into small family packs of a calf and its parents. A mother usually gives birth to only a single calf, and will fiercely protect it well into its adult life. The father remains with the mother and calf until the calf reaches maturity, then leaves to find a new mate. Deinotherium Companions Starting Statistics: Size Medium; Speed 30 ft.; AC +4 natural; Attack slam (1d6), gore (1d8); Ability Scores Str 14, Dex 10, Con 15, Int 2, Wis 13, Cha 3; Special Qualities Low-Light Vision, scent. 7th-Level Advancement: Size Large; AC +2 natural; Attack slam (1d8), gore (2d6); Ability Scores Str +8, Dex -2, Con +4; Special Qualities sweep, trample.",
    organization: "solitary, pair, or family (2 adults and 1 calf)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 7
      },
      Swim: {
        ranks: 1
      }
    },
    special: {
      sweep: {
        type: "Ex",
        text: "A deinotherium can sweep a target with its downward-curving tusks and knock the victim to the ground. As part of a charge, a deinotherium can move up to twice its base speed in a straight line and make a gore attack at any point during its movement. If this attack is successful, the target is knocked prone and the deinotherium can deal damage with its trample attack before continuing its movement."
      },
      trample: {
        universalMonsterAbility: "Trample",
        damage: "2d8+13",
        saveDC: 10
      }
    }
  },

  Embolotherium: {
    source: "Battle Of Bloodmarch Hill",
    creatureType: "animal",
    dinosaur: true,
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 7,
    hdVal: 8,
    cr: 5,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 26,
      dex: 11,
      con: 18,
      int: 2,
      wis: 13,
      cha: 3
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
        name: "Power Attack",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Slam",
        name: "Slam",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 8
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any plains",
    visualDescription: "This creature is reminiscent of a rhinoceros, but instead of pointed horns on its nose, this creature possesses a blunt, bony protrusion.",
    description: "Embolotherium are squat, stocky creatures with hollow, bony protrusions on their snouts that are used as sound resonation chambers, allowing the creatures to create very loud noises to communicate across great distances. An average embolotherium stands 5 feet tall at the shoulder, with a nose-to-tail length of about 8 feet and a weight of 6,000 pounds. Embolotherium are strict herbivores, grazing on grasses and flowering plants. Their eyesight is very poor, but extremely acute hearing makes up for this deficiency. A herd of embolotherium can be quickly provoked into a stampede, and travelers should be wary of even whispered conversation when near a group of these creatures. Naturally social with others of their kind, embolotherium are generally found in large groups in flat, grassy areas. Their many layers of tough skin serve as deterrents to attack as well as thermal buffers, allowing them to survive in even frigid temperatures as long as there is sufficient food. Embolotherium Companions Starting Statistics: Size Medium; Speed 30 ft.; AC +6 natural; Attack bite (1d6); Ability Scores Str 14, Dex 10, Con 13, Int 2, Wis 13, Cha 3; Special Qualities Low-Light Vision. 7th-Level Advancement: Size Large; AC +2 natural; Attack bite (1d8); Ability Scores Str +8, Dex -2, Con +4; Special Qualities trample.",
    organization: "solitary, pair, or herd (3-9)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 6
      },
      Swim: {
        ranks: 1
      }
    },
    special: {}
  },

  "Flood Troll": {
    source: "Battle Of Bloodmarch Hill",
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
      "Low-Light Vision"
    ],
    speed: {
      base: 30,
      swim: 10
    },
    abilities: {
      str: 15,
      dex: 18,
      con: 16,
      int: 8,
      wis: 11,
      cha: 7
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
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "temperate swamps or rivers",
    visualDescription: "This tall, gangly giant has a thick hide of mottled blue; protruding yellowed canines; narrow slits for eyes; and large, powerful hands that end in wicked claws.",
    description: "Flood trolls are the mutated runts of scrag broods, cast out by their mothers and destined to haunt the lonely valleys and river basins beneath Avistan's frosty peaks. They lurk amid the craggy hills of Belkzen, Varisia, and other wildlands of northern Avistan, and serve as a menace to orc raiders and human adventurers alike. While smaller and less organized than true scrags, flood trolls' solitary nature and desperation for food often drives them to commit atrocities upon unsuspecting humanoid populations-atrocities that almost invariably end with the flood trolls' eventual capture and execution. Flood trolls average 7-1/2 feet tall and weigh 250 pounds. Ecology Flood trolls are not actual trolls in the truest sense of the word. Although flood trolls-like their scrag parents- are distantly related to mountain trolls, the species are distinct. Most humanoid societies, however, are content to simply refer to both scrags and trolls using the umbrella term \"troll,\" linking the species because of overlapping myths and their similar regenerative abilities. Scrag mothers birth anywhere from two to six younglings in a single brood, and every brood has a small chance of including what the scrags call an aruk-taii-\"half-scrag\" in the Giant tongue-known to many civilized peoples as a flood troll. Scrags with larger broods have a higher chance of producing flood trolls among their young. These runts are invariably smaller and more frail than true scrag younglings, and their growth rate is significantly slower than their non-mutated kin. This makes them undesirable to their scrag mothers and more likely to be eaten by their stronger siblings. Those flood trolls who aren't simply abandoned to the wilds by their mothers are raised as lesser beings, and live in the shadows of their scrag brothers and sisters. Most flood trolls flee their aggressive broodmates before coming of age, preferring to fend for themselves in the terrors of the wilderness rather than deal with their cruel, savage family members. The mutation that results in a flood troll stymies many of the racial abilities typical to scrags. For one, flood trolls lack the amphibious special quality, making them much less suited to hunting underwater. Unfortunately for them, flood trolls still rely on exposure to water to enable their regenerative properties, meaning they must dwell near water but never wholly within it. Not just any water will do, either-only water that is continually refreshed with minerals and oxygen can regenerate flood trolls. Stagnant or relatively still waters such as small lakes and ponds cannot provide the nutrients flood troll regeneration requires, which means these monsters tend to stay near active waterways and areas with high precipitation where they can find the flowing water and rainfall that helps them to survive. The mutation that results in a flood troll also affects the creature's reproductive organs, rendering it sterile. Because they cannot reproduce, flood trolls rarely seek out mates or even partners to aid in the hunt. Instead, they lead solitary existences steeped in ire for all living things; they are born amid hatred and rejection, and expect to die the same way. In rare instances, a scrag mother may produce flood troll twins. In keeping with their primitive superstitions, scrags believe the arrival of two flood trolls is a dire omen that signals the coming of storms and floods, and cannot be dealt with by simply tossing the younglings away. Instead, the scrags believe, in order to appease the dread deities that they believe control the weather and the flow of rivers into their aquatic homes, the scrags must raise aruk-taii twins, aruk-taikii, as they would raise their true scrag offspring. The scrag mother-along with the other female scrags in her group-raises and nurtures the twins as best as she is able, albeit with grudging reluctance. In fact, the association between aruk-taikii and inclement weather in these old scrag myths is what originally inspired human adventurers to name the beasts flood trolls. Habitat & Society Flood trolls are monstrous nomads-wandering hunters who follow the herds of game and pay close attention to humanoids' travel patterns as they journey between the distant settlements of northern Avistan. They are cunning by necessity, since they are smaller than their brethren and must often surprise their prey to earn their meals. While not afraid to pounce on their victims once they can catch them, most flood trolls prefer to use stealth tactics and crude traps to put prospective victims in hazardous situations before attempting an ambush. Scrag mothers eject their flood troll spawn from the brood as soon as the youngling's hormonal mutation makes itself known, which typically occurs a couple of years after the brood is born. Abandoned aruk-taii younglings survive in the wilds by sticking close to a river or freshwater source, and those who fail to find fresh water typically fall prey to wolves or other predators. Solitary by circumstance, flood trolls are seen in pairs only rarely, and usually because the two are twins. Because flood troll twins are pampered and treated with care by their scrag mother (rather than being abused and ostracized), these specimens tend to be more intelligent and creative than their solitary kin. Some flood trolls even learn how to wield arms or poison daggers; woe betide anyone who feels the sting of an aruk-taii rogue's dirk-if not for the blade, then for the savage claws that come afterward. Because they can survive in arid environments for longer periods, flood trolls are much more common in Belkzen than their scrag forebears. The orcs of Belkzen claim that flood trolls wander over the Mindspin and Kodar mountain ranges, fleeing their scrag families in the Mushfens and Varisia's other wetlands. In the frigid Lands of the Linnorm Kings and Irrisen, scrags dwelling along the coast of the Arcadian Ocean and in Glacier Lake drive their flood troll offspring south along the Marblef low River or east toward the Gullik River. While they are most commonly encountered in Avistan, flood trolls may be found around the world, wherever scrags carry the aruk-taii mutation, though their physical features vary somewhat depending on where they originate. The Zenj tribes of the Mwangi Expanse speak of blue-skinned, humanoid horrors-jeburo in the Polyglot tongue-that stalk the jungle's riverbeds during the dry season and boldly attack villages as the storm season approaches. A number of these flood trolls make their way into the Sodden Lands. Never lacking for the rain that allows for their regeneration, these flood trolls terrorize the few remaining enclaves of humanity in that drenched land.",
    organization: "solitary or pair (usually twins)",
    languages: "Giant",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 4
      },
      Stealth: {
        ranks: 1
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      pounce: {
        universalMonsterAbility: "Pounce"
      },
      "hold breath": {
        universalMonsterAbility: "Hold Breath",
        parenthetical: ""
      },
      "oversized limbs": {
        type: "Ex",
        text: "A flood troll's hands are larger than its body would suggest. Flood trolls can wield Large weapons without penalty. Rain Regeneration (Ex) A flood troll's regeneration functions as long as the flood troll is touching flowing water or precipitation. Even a slight drizzle is enough to activate the flood troll's regeneration. However, any acid or fire damage dealt to the flood troll suspends its next round of regeneration."
      },
      "rain regeneration 5": {
        type: "Ex",
        preText: "acid or fire"
      },
      "absorbent hide": {
        type: "Ex",
        text: "A flood troll's flesh is highly resilient to the stresses of long dry periods. A flood troll who has gone without touching flowing water for at least 24 hours gains a +2 natural armor bonus to AC. A flood troll who has touched water within the last 24 hours gains cold resistance 5 instead."
      }
    }
  },

};
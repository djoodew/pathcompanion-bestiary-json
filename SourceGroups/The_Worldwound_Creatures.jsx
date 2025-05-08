
export const The_WorldwoundCreatures = {
  Abrikandilu: {
    source: "The Worldwound",
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
    size: "Medium",
    hd: 5,
    hdVal: 10,
    cr: 3,
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
      int: 6,
      wis: 10,
      cha: 13
    },
    feats: [
      {
        name: "Improved Sunder",
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
        name: "Throw Anything",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "mutilation",
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
        weapon: "Improvised weapon",
        name: "Improvised weapon",
        damage: "1d6"
      }
    ],
    defense: {
      naturalArmor: 5
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Abyss)",
    visualDescription: "This deformed, horned, hunchbacked humanoid has a forked, ratlike tail and two thumbs on each taloned hand.",
    description: "Known as wrecker demons, abrikandilus delight in destroying beauty, be it the rending a fine painting to shreds, reducing a magnificent statue to rubble, or scarring a lovely face. Abrikandilus form from the souls of those who in life vandalized art or destroyed objects of beauty, particularly from those whose acts of destruction were born from jealousy. All abrikandilus loathe only one thing more than beauty-their own ref lection. Curiously, the countenances of other abrikandilus do not vex a wrecker demon, but the sight of its own deformed shape drives it into a furious anger. Abrikandilus are used often as ground troops in demonic wars, for they are excellent brutes on the battlefield and do not require weapons or armor to excel at combat. Their penchant for destroying works of art brings a demoralizing element to battle, for little remains after abrikandilus attack works of beauty. Even when they are defeated, the damage they've dealt endures, a constant reminder of the infinite value of what they destroyed. An abrikandilu stands 4 feet tall and weighs 200 pounds.",
    organization: "solitary, pair, or gang (3-12)",
    languages: "Abyssal, Celestial, Draconic; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "cause fear",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "shatter",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "summon",
        casterLevel: 5,
        limitations: "level 1, 1 abrikandilu 50%",
        timesPerDay: 1
      }
    ],
    skills: {
      Appraise: {
        ranks: 8
      },
      Climb: {
        ranks: 8
      },
      "Disable Device": {
        ranks: 8
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
      "destructive attacks": {
        type: "Ex",
        text: "An abrikandilu's natural attacks can threaten and confirm critical hits against objects. In addition, they gain a +5 racial bonus on Strength checks made to break or destroy objects. Hatred of Mirrors (Ex) An abrikandilu loathes the sight of its own reflection. Using a mirror grants a +5 bonus on Intimidate checks against an abrikandilu. An abrikandilu adjacent to a mirror or attacked by a mirror-carrying creature (at the GM's discretion, some shields could be considered mirrors) must attempt a DC 15 Will save at the start of its turn. If it fails, it must focus all of its actions that round on attempts to destroy the mirror."
      },
      mutilation: {
        type: "Su",
        text: "An abrikandilu's bite causes hideous, ugly wounds that not only mar beauty but supernaturally diminish a creature's sense of self-worth. A creature bitten by an abrikandilu must succeed at a DC 13 Fortitude save or gain a -1 penalty on all Charisma-based checks. This penalty can stack as high as a -5 penalty with multiple bites and failed saves, and lasts even after the wounds are healed. The penalty reduces by 1 point every 24 hours. This is a curse effect. The save DC is Constitution-based."
      }
    }
  },

  Derakni: {
    source: "The Worldwound",
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
    size: "Large",
    hd: 11,
    hdVal: 10,
    cr: 10,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Scent"
    ],
    speed: {
      base: 30,
      maneuverability: "Good",
      fly: 60
    },
    abilities: {
      str: 26,
      dex: 23,
      con: 22,
      int: 9,
      wis: 17,
      cha: 16
    },
    feats: [
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Sting",
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
        name: "Quicken Spell-Like Ability",
        type: "Monster",
        value: "Summon swarm",
        choiceSource: "Quicken Spell-Like Ability"
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
    defense: {
      DR: {
        value: 10,
        damageType: "good"
      },
      SR: {
        value: 21
      },
      naturalArmor: 10
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any (Abyss)",
    visualDescription: "The size of a horse, this demonic locust has a scorpion's stinger and an almost-human face. Its front legs end in clawed hands.",
    description: "Deraknis, also known as locust demons, are among Deskari's favorite minions, both in the Abyss and in the Worldwound. Great flights of these creatures plague the skies above the Wounded Lands in particular, but they can be encountered anywhere in the Worldwound. These creatures' leering humanoid visages are armored with chitinous plates, and their front feet end in small claws that look strangely like human hands. A derakni can use these hands to manipulate objects or wield items, but generally eschews using weapons or shields entirely. Often, deraknis are encountered in the vicinity of hives of vescavors (Pathfinder Campaign Setting: Lost Kingdoms 50). Indeed, vescavor swarms eagerly serve deraknis as minions, and, save for truly unusual circumstances, a derakni never needs to worry about taking damage from or being distracted by a vescavor swarm that shares its space. Deraknis typically aid in the devastation of large regions, often in preparation for the advance of larger demonic armies, and the Worldwound is one of their crowning glories. A derakni is 14 feet long and weighs 1,200 pounds. These wretched demons arise from the souls of those who, in life, purposefully engineered disasters or aided in their development-particularly souls whose disasters resulted in mass famines or droughts.",
    organization: "solitary, pair, or swarm (3-10)",
    languages: "Abyssal, Celestial, Draconic; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "contagion",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "teleport, greater",
        casterLevel: 12,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: -1
      },
      {
        name: "gust of wind",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "enervation",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "summon swarm",
        casterLevel: 12,
        limitations: "Metamagic: Quicken ",
        timesPerDay: 3
      },
      {
        name: "insect plague",
        casterLevel: 12,
        timesPerDay: 1
      },
      {
        name: "summon",
        casterLevel: 12,
        limitations: "level 4, 1 derakni or 1d4 vescavor swarms 40%",
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 14
      },
      Fly: {
        ranks: 14
      },
      Perception: {
        ranks: 11,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Stealth: {
        ranks: 11
      },
      Survival: {
        ranks: 14
      }
    },
    special: {
      drone: {
        type: "Su",
        text: "The sound of a derakni in flight is a mesmerizing, unsettling drone that causes confusion in all non-demons who hear the sound. A derakni must fly at least 10 feet to activate this ability (which it can do as a free action as part of its move action). Any non-demon creature that begins its turn within 30 feet of a derakni that moved in this manner on its previous turn must succeed at a DC 18 Will save or become confused for 1d4 rounds. A creature that makes this save is immune to the drone of that derakni for 24 hours. Demons are immune to this sonic, mind-affecting effect. The save DC is Charisma-based."
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Bite or sting-injury; save Fort DC 21; frequency 1/ round for 6 rounds; effect 1d4 Con; cure 2 consecutive saves. The save DC is Constitution-based.",
        saveDC: 10
      }
    }
  },

  Gallu: {
    source: "The Worldwound",
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
    size: "Medium",
    hd: 19,
    hdVal: 10,
    cr: 19,
    racialFeatures: [
      "Darkvision 60 ft.",
      "True Seeing"
    ],
    speed: {
      base: 50,
      maneuverability: "Good",
      fly: 50
    },
    abilities: {
      str: 33,
      dex: 18,
      con: 34,
      int: 18,
      wis: 23,
      cha: 25
    },
    feats: [
      {
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Improved Bull Rush",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Falchion",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Vital Strike",
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
        name: "Quicken Spell-Like Ability",
        type: "Monster",
        value: "Hold monster",
        choiceSource: "Quicken Spell-Like Ability"
      },
      {
        name: "Staggering Critical",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Falchion",
        enchantments: [
          {
            name: "Enhancement Bonus +1",
            source: "inherent"
          },
          {
            name: "Wounding",
            source: "inherent"
          }
        ],
        name: "Falchion",
        damage: "2d4"
      },
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Gore",
        name: "Gore",
        damage: "1d6",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to bleed"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "cold iron and good"
      },
      SR: {
        value: 30
      },
      naturalArmor: 8
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Abyss)",
    visualDescription: "This horned, winged, wolf-headed demon has bone-white flesh onto which have been riveted plates of spiky armor.",
    description: "On the endless battlefields of the Abyss, the demon lords' vast armies clash and tear at each other in horrific displays of warfare and bloodshed. These conflicts often arise from border disputes between demonic realms, or when one demon lord finds an excuse to attack another. But many of these immense wars have no good reason at all, for gallus eagerly foment war for war's sake; they are master engineers of martial strife. These hateful, destructive demons arise from the souls of warmongers and war profiteers-nefarious leaders, corrupt priests, or subversive merchants who used their power to perpetuate existing wars or even to trigger new ones, all for the express purpose of personal gain or sadistic pleasure. Known to some as warmonger demons, the gallus are not as enormous as many of the other powerful demons; despite their near-human size, however, they are among the deadliest of demonkind. Standing 8 feet tall and weighing 450 pounds, these creatures have wolf like (but hairless) horned heads, batlike wings, and pale flesh. Their feet end in hooves, and their tails resemble those of lions. Gallus can assume humanoid shape as well, and typically do so when interacting with mortals, allowing them to more easily sow seeds of war among those they interact with. These demons are relatively difficult to summon- gate spells can conjure them from the Abyss, but few other mortal spells can call them forth. As a result, most gallus encountered outside the Abyss have traveled there via portals or similar methods. Gallus are innately crafty creatures; when coming to a new world, they resist their natural urges to destroy in favor of infiltration. Extraordinarily patient, they can spend decades or more in disguise as they subtly build their influence and acquire positions of power; they then use those positions to incite government officials and other powerful individuals to wage war on their neighbors. Only when the hostilities have completely devastated their host, leaving it in smoking ruins, do gallus shed their human flesh and appear in their true form to gloat and torment the conflict's few survivors before moving on to seek fresh victims. In the Worldwound, gallus serve an additional role as commanders in the numerous demonic armies. Many control multiple divisions, each led by a marilith general, and report in turn to one of the Worldwound's leaders, like Khorramzadeh, Areelu, or Aponavicius. But not all of the Worldwound's gallus command armies. Those who serve Baphomet primarily utilize their deceptive natures to infiltrate various Mendevian mercenary orders, Mammoth Lord barbarian tribes, settlements on the fringes of more civilized lands, and other factions arrayed against the Worldwound. From within those groups, they serve as advisors, urging those they've infiltrated into launching ill-timed or poorly planned attacks on their demonic foes. These gallus occasionally feed their humanoid \"allies\" legitimate intelligence about demonic fortifications or troop movements, knowing that a little truth can go a long way in encouraging mortals to act upon their more violent urges.",
    organization: "solitary or platoon (1 gallu, 1-3 mariliths, and 3-12 vrocks)",
    languages: "Abyssal, Celestial, Draconic; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "cloak of chaos",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "true seeing",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "confusion",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "fear",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "geas/quest",
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
        name: "telekinesis",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "dimensional lock",
        casterLevel: 19,
        timesPerDay: 3
      },
      {
        name: "hold monster",
        casterLevel: 19,
        limitations: "Metamagic: Quicken ",
        timesPerDay: 3
      },
      {
        name: "song of discord",
        casterLevel: 19,
        timesPerDay: 3
      },
      {
        name: "hold monster, mass",
        casterLevel: 19,
        timesPerDay: 1
      },
      {
        name: "summon",
        casterLevel: 19,
        limitations: "level 7, 1 gallu 20%, 1 marilith 35%, or 1d4 nalfeshnees 60%",
        timesPerDay: 1
      },
      {
        name: "symbol of insanity",
        casterLevel: 19,
        timesPerDay: 1
      },
      {
        name: "word of chaos",
        casterLevel: 19,
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 19
      },
      Disguise: {
        ranks: 22
      },
      Fly: {
        ranks: 22
      },
      Intimidate: {
        ranks: 22,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      "Knowledge (engineering)": {
        ranks: 22
      },
      "Knowledge (history)": {
        ranks: 22
      },
      "Knowledge (planes)": {
        ranks: 19
      },
      Perception: {
        ranks: 19,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Ride: {
        ranks: 22
      },
      "Sense Motive": {
        ranks: 19
      }
    },
    special: {
      "rain of blood": {
        type: "Su",
        text: "As a standard action once per minute, a gallu can command the wounds of all creatures within 30 feet to erupt into a gory deluge of blood; any wounded creature in the area of effect immediately takes 3d6 points of damage from the rain of blood and must succeed at a DC 31 Fortitude saving throw. Failure indicates that the damage becomes bleed damage and the affected creature becomes staggered from the pain as long as the bleed damage continues. Creatures that are immune to bleed damage are immune to this ability's effects. The save DCs are Constitution-based."
      },
      "wounding blood": {
        type: "Su",
        text: "The spikes that hold a gallu's armor plates in place extend as far into the demon's body as they do outside of it, causing rivulets of blood to constantly run from the creature's flesh. This continual bleeding does not inconvenience or harm the gallu; instead, it grants the wounding special ability to all manufactured weapons wielded by the gallu. The dripping blood does not affect the gallu's natural attacks."
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "Small or Medium humanoid",
        type: ", Small or Medium humanoid"
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        value: null
      },
      "armor plating": {
        type: "Su",
        text: "The armor plates covering much of a gallu's body grant it a +8 armor bonus. They also function as armor spikes during grapples, but cannot be used as off-hand weapons. In addition, these armor plates can possess one additional armor special ability chosen from the following options: acid resistance 20, cold resistance 20, fire resistance 20, ghost touch, moderate fortification, or sonic resistance 20. A gallu demon can switch the active armor special quality once per hour as a swift action-as a general rule, the gallu demon keeps the armor plating set to moderate fortification. These armor plates do not encumber the gallu or impose armor check penalties, maximum Dex bonuses, or arcane spell failure chances. They cannot be removed, sundered, or destroyed while the gallu lives, and they rust away into nonmagical fragments of iron upon the gallu's death. Aura of Havoc (Su) A gallu's presence wreaks havoc, infusing battlefields with elements of chaos and entropy that disrupt careful coordination and tactical plotting by manipulating fate and chance. This aura extends to a 30-foot radius around the gallu. The aid another action can never grant bonuses in this area, nor does flanking grant bonuses to hit in the affected area (although flanked foes remain susceptible to sneak attack damage). A creature summoned into this area by any creature other than a demon must succeed at a DC 26 Will save to avoid being confused for 1d4 rounds. Paladins and creatures with the lawful subtype must make a DC 26 Will save each round they begin their turn in this aura to avoid being nauseated for 1 round. Demons ignore the effects of a gallu's aura of havoc. The save DCs are Charisma-based."
      },
      "cloak of chaos": {
        type: "Ex",
        preText: "20 ft., DC 25"
      },
      havoc: {
        type: "Su",
        text: "A gallu's presence wreaks havoc, infusing battlefields with elements of chaos and entropy that disrupt careful coordination and tactical plotting by manipulating fate and chance. This aura extends to a 30-foot radius around the gallu. The aid another action can never grant bonuses in this area, nor does flanking grant bonuses to hit in the affected area (although flanked foes remain susceptible to sneak attack damage). A creature summoned into this area by any creature other than a demon must succeed at a DC 26 Will save to avoid being confused for 1d4 rounds. Paladins and creatures with the lawful subtype must make a DC 26 Will save each round they begin their turn in this aura to avoid being nauseated for 1 round. Demons ignore the effects of a gallu's aura of havoc. The save DCs are Charisma-based.",
        preText: "30 ft."
      }
    }
  },

  Gibrileth: {
    source: "The Worldwound",
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
    size: "Large",
    hd: 11,
    hdVal: 10,
    cr: 11,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Scent"
    ],
    speed: {
      base: 10,
      maneuverability: "Good",
      fly: 40
    },
    abilities: {
      str: 24,
      dex: 19,
      con: 24,
      int: 13,
      wis: 16,
      cha: 17
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
        name: "Greater Trip",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Trip",
        type: "Combat"
      },
      {
        name: "Lightning Reflexes",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Scorpion whip",
        enchantments: [
          {
            name: "Enhancement Bonus +1",
            source: "inherent"
          }
        ],
        name: "Scorpion whip",
        specialAbility: "disease",
        damage: "1d4"
      },
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "disease",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Tumor",
        name: "Tumor",
        specialAbility: "disease",
        damage: "2d6"
      }
    ],
    immunities: [
      "Immune to acid, disease"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "good"
      },
      SR: {
        value: 22
      },
      naturalArmor: 12
    },
    space: "10 ft.",
    reach: "10 ft. (20 ft. with whip)",
    environment: "any (Abyss)",
    visualDescription: "This flying, bulbous, tumor-riddled mass has numerous arms, no legs, and a leering, three-eyed face.",
    description: "Gibrileths are known as filth demons because their appearance is so vile that even other demons find them appalling-including some hezrous. A gibrileth's body is composed almost entirely of quivering, globular, acidic tumors, save for its batlike wings and the nest of spindly, atrophied arms growing from the top of its body. It can walk with a clumsy gait, using its long arms, but it prefers to be on the wing. These creatures enjoy spreading nausea and sickness, either via their spell-like abilities or through violence-in fact, they are one of the primary sources of demonplague throughout the Worldwound. Gibrileths particularly relish the taste of partially liquefied, diseased flesh, and many keep infected victims in pens like cattle for periodic snacking, allowing their sickness to season them properly before feeding. Gibrileths rise from the souls of mortals who deliberately encourage the spread of disease or sickness, many of whom died of disease themselves. A gibrileth is approximately 10 feet in diameter, with a wingspan of 16 feet. These foul, bloated demons typically weigh about 2,400 pounds.",
    organization: "solitary, pair, or infection (3-8)",
    languages: "Abyssal, Celestial, Draconic; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "contagion",
        casterLevel: 13,
        timesPerDay: -1
      },
      {
        name: "grease",
        casterLevel: 13,
        timesPerDay: -1
      },
      {
        name: "teleport, greater",
        casterLevel: 13,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: -1
      },
      {
        name: "unholy blight",
        casterLevel: 13,
        timesPerDay: -1
      },
      {
        name: "stinking cloud",
        casterLevel: 13,
        timesPerDay: 3
      },
      {
        name: "summon",
        casterLevel: 13,
        limitations: "level 4, 1 gibrileth 35%",
        timesPerDay: 1
      },
      {
        name: "waves of fatigue",
        casterLevel: 13,
        timesPerDay: 1
      }
    ],
    skills: {
      Fly: {
        ranks: 14
      },
      "Knowledge (dungeoneering)": {
        ranks: 14
      },
      "Knowledge (planes)": {
        ranks: 11
      },
      Perception: {
        ranks: 11,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      "Sense Motive": {
        ranks: 11
      },
      Stealth: {
        ranks: 11
      },
      Survival: {
        ranks: 14
      }
    },
    special: {
      disease: {
        universalMonsterAbility: "Disease",
        type: "Ex",
        text: "Any weapon a gibrileth wields becomes a vector for spreading the demonplague. A creature bitten by a gibrileth or damaged by a weapon it wields is exposed to this virulent disease. A successful DC 22 Fortitude save is needed to resist this creature's particular strain of demonplague-full details on this widespread sickness appear on page 29. The save DC is Constitution-based.",
        saveDC: null,
        saveType: "is"
      },
      "whip specialist": {
        type: "Ex",
        text: "A gibrileth does not provoke attacks of opportunity when using a whip."
      },
      tumors: {
        type: "Su",
        text: "As a swift action, a gibrileth can rip a grapefruit-sized tumor from its body with one of its many arms and throw it as a splash weapon with a range increment of 20 feet. A direct hit deals 2d6 points of acid damage, and deals 1d4 points of acid splash damage to all creatures within 5 feet of the target. A creature can avoid the splash damage with a successful DC 22 Reflex save. The save DC is Constitution-based."
      },
      amorphous: {
        universalMonsterAbility: "Amorphous"
      }
    }
  },

  Kithangian: {
    source: "The Worldwound",
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
    size: "Large",
    hd: 11,
    hdVal: 10,
    cr: 9,
    racialFeatures: [
      "Darkvision 60 ft.",
      "All-Around Vision"
    ],
    speed: {
      base: 50
    },
    abilities: {
      str: 22,
      dex: 11,
      con: 20,
      int: 7,
      wis: 19,
      cha: 16
    },
    feats: [
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Claw",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Sting",
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
        name: "Quicken Spell-Like Ability",
        type: "Monster",
        value: "Unnatural lust",
        choiceSource: "Quicken Spell-Like Ability"
      }
    ],
    attacks: [
      {
        weapon: "Claw",
        name: "2 Claws",
        specialAbility: "grab",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Sting",
        name: "2 Stings",
        specialAbility: "poison",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to fear"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "good"
      },
      SR: {
        value: 20
      },
      naturalArmor: 16
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any (Abyss)",
    visualDescription: "This creature combines the features of a scorpion and a horse- slavering humanoid faces peer from between its two pincers.",
    description: "Kithangians, also known as beast demons, are reprehensible monstrosities born from the souls of those who abused and tormented animals in life. Universally male, the sudden spread of fiendish elements through within an area's fauna is a sure indication of a kithangian's presence in a region. The fact that most creatures that birth litters of young with the half-fiendish template die in the process is of little concern to the kithangian, for it merely moves on to new hunting grounds when uncorrupted animal victims grow too rare.",
    organization: "solitary, pair, or pack (3-8)",
    languages: "Abyssal, Celestial, Draconic; speak with animals, telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "speak with animals",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "hold animal",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "teleport, greater",
        casterLevel: 12,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: -1
      },
      {
        name: "unnatural lust",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "air walk",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "unnatural lust",
        casterLevel: 12,
        limitations: "Metamagic: Quicken ",
        timesPerDay: 3
      },
      {
        name: "baleful polymorph",
        casterLevel: 12,
        timesPerDay: 1
      },
      {
        name: "summon",
        casterLevel: 12,
        limitations: "level 3, 1 kithangian 35%",
        timesPerDay: 1
      }
    ],
    skills: {
      "Handle Animal": {
        ranks: 14
      },
      Intimidate: {
        ranks: 14
      },
      Perception: {
        ranks: 11
      },
      Stealth: {
        ranks: 11
      }
    },
    special: {
      hatred: {
        type: "Ex",
        text: "A kithangian gains a +2 bonus on all attack rolls and damage rolls made against all creatures of the animal type. In addition, animals take a -2 penalty on all saving throws against a kithangian's supernatural or spell-like abilities."
      },
      "rasping tongues": {
        type: "Su",
        text: "The faces between a kithangian's claws have long rasping tongues covered with tiny teeth. Whenever a kithangian successfully grapples a foe with its claws, a rasping tongue slithers out from the face within and burrows into the creature's body. Each round that the creature is grappled, it takes 1d6 points of damage and 1d4 points of Charisma damage as its sense of self-identity is warped and twisted. A successful DC 18 Will save negates the Charisma damage. The save DC is Charisma-based."
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "Medium or Large animal",
        type: ", Medium or Large animal"
      },
      "swift transformation": {
        type: "Su",
        text: "A kithangian can use its change shape ability as a swift action."
      },
      grab: {
        universalMonsterAbility: "Grab"
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Sting-injury; save Fort DC 20; frequency 1/round for 6 rounds; effect 1d4 Str plus nauseated; cure 2 consecutive saves.",
        saveDC: 10
      }
    }
  },

  Lilitu: {
    source: "The Worldwound",
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
    size: "Medium",
    hd: 17,
    hdVal: 10,
    cr: 17,
    racialFeatures: [
      "Darkvision 60 ft.",
      "True Seeing"
    ],
    speed: {
      base: 60,
      maneuverability: "Good",
      fly: 60
    },
    abilities: {
      str: 27,
      dex: 20,
      con: 30,
      int: 21,
      wis: 23,
      cha: 26
    },
    feats: [
      {
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Deceitful",
        type: "General"
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
        name: "Mobility",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Quicken Spell-Like Ability",
        type: "Monster",
        value: "Charm monster",
        choiceSource: "Quicken Spell-Like Ability"
      },
      {
        name: "Spring Attack",
        type: "Combat"
      },
      {
        name: "Staggering Critical",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Claw",
        name: "4 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Tail slap",
        qualities: [
          "touch"
        ],
        name: "Tail slap",
        specialAbility: "branding",
        damage: "1d6",
        type: "secondary"
      }
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "cold iron and good"
      },
      SR: {
        value: 28
      },
      naturalArmor: 10
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Abyss)",
    visualDescription: "While this seductive woman has goat horns, goat hooves, and a serpentine tail, her eyeless face is her most disturbing feature.",
    description: "Lilitu demons are subversive and hidden horrors, demons who work much more subtlety in their constant quest to destroy and devastate. Whereas most demons prefer to rend and destroy, the lilitu is more akin to the succubus-she labors in humanoid guise to infect society from within with sin. Known to some as temptation demons, lilitus enjoy little more than leading mortals into all matter of sinful acts, in the hopes that when the mortal perishes, that soul will fuel the Abyss. Despite some superf icial similarities to succubi, lilitus are not solely concerned with the sin of lust. The exact nature of sin that a lilitu tempts a mortal into committing varies, for these demons are adept at reading mortal desires and secrets, quickly discerning which sinful acts a specif ic target can be convinced to perform. Lilitus have numerous tools at their disposal for the encouragement of promoting sin, but they much prefer their humanoid victims to commit sins of their own free will. As such, lilitus generally use their abilities to deceive and beguile mortals rather than forcing them to execute these heinous acts. A son convinced to kill for his mother (the disguised lilitu) to rectify a grave injustice done to her produces more delight than simply mind-controlling a humanoid into doing such a deed. In her true form, a lilitu appears as an eyeless, horned, snake-tailed-but otherwise beautiful-human woman. Despite her lack of eyes, a lilitu can see with supernatural ease. A lilitu forms from the soul of a mortal who lured others of its kind to commit sins. Lilitus serve many demon lords, although the demon lords associated with the classic seven deadly sins- Areshkagal (greed), Jubilex (sloth), Nocticula (lust), Orcus (wrath), Shax (envy), Socothbenoth (pride), and Xoveron (gluttony)-are their favorites. Lilitus who serve these seven demon lords are unique in appearance, ref lecting their sins more physically than others of their kind. A lilitu of Jubilex might appear to be made of slime, while a lilitu of Xoveron might be morbidly obese. Lilitus typically stand 6 feet tall and weigh 130 pounds.",
    organization: "solitary or cult (1 lilitu and 6-12 succubi)",
    languages: "Abyssal, Celestial, Draconic; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "fly",
        casterLevel: 17,
        timesPerDay: -1
      },
      {
        name: "tongues",
        casterLevel: 17,
        timesPerDay: -1
      },
      {
        name: "true seeing",
        casterLevel: 17,
        timesPerDay: -1
      },
      {
        name: "unholy aura",
        casterLevel: 17,
        timesPerDay: -1
      },
      {
        name: "charm monster",
        casterLevel: 17,
        timesPerDay: -1
      },
      {
        name: "detect thoughts",
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
        name: "suggestion",
        casterLevel: 17,
        timesPerDay: -1
      },
      {
        name: "telekinesis",
        casterLevel: 17,
        timesPerDay: -1
      },
      {
        name: "charm monster",
        casterLevel: 17,
        limitations: "Metamagic: Quicken ",
        timesPerDay: 3
      },
      {
        name: "persistent image",
        casterLevel: 17,
        timesPerDay: 3
      },
      {
        name: "seeming",
        casterLevel: 17,
        timesPerDay: 3
      },
      {
        name: "demand",
        casterLevel: 17,
        timesPerDay: 1
      },
      {
        name: "dominate monster",
        casterLevel: 17,
        timesPerDay: 1
      },
      {
        name: "project image",
        casterLevel: 17,
        timesPerDay: 1
      },
      {
        name: "binding",
        casterLevel: 17,
        timesPerDay: -1,
        timesPerWeek: 1
      },
      {
        name: "wish",
        casterLevel: 17,
        limitations: "granted to a mortal humanoid only",
        timesPerDay: -1,
        timesPerWeek: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 8
      },
      Bluff: {
        ranks: 17,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Diplomacy: {
        ranks: 20
      },
      Disguise: {
        ranks: 17
      },
      Fly: {
        ranks: 28
      },
      Intimidate: {
        ranks: 17
      },
      "Knowledge (local)": {
        ranks: 20
      },
      "Knowledge (nobility)": {
        ranks: 20
      },
      "Knowledge (religion)": {
        ranks: 17
      },
      Perception: {
        ranks: 17,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      "Sense Motive": {
        ranks: 17
      }
    },
    special: {
      "create husk": {
        type: "Su",
        text: "Once per day as a swift action, when a lilitu deals enough damage with a weapon, spell, or spell-like ability to kill a humanoid within 30 feet, she can instead opt to transform that slain humanoid into a husk. A successful DC 26 Fortitude save negates this effect, allowing the victim to die normally. A humanoid transformed into a husk withers away into an immobile and desiccated corpse, but does not actually die-in this state, the creature remains aware of its surroundings but can take no actions at all. A husk is essentially treated as an object with hardness 15 and 60 hit points. If a husk is destroyed, the effect ends and the body dies. This is a curse effect- removing this curse restores the victim to life at a number of negative hit points equal to the creature's Constitution -1; a husk restored to life in this way has 1 round to stabilize or be saved before it dies. A lilitu can maintain a number of husks simultaneously equal to her Charisma modifier (8 husks for the typical lilitu); if she creates one too many husks, a previously created husk is released and immediately dies. Lilitus hide their husk collections in very safe places. The save DC is Charisma-based."
      },
      "husk link": {
        type: "Su",
        text: "By spending a minute in blasphemous contact with a husk she created, a lilitu can establish a supernatural link to that husk. As long as she and that husk remain on the same plane, divination spells reveal the linked husk's alignment to be the same as the lilitu's alignment (chaotic evil). The husk link allows a lilitu to use her change self ability to assume a husk's original form-when she does, she gains a +20 bonus on Disguise checks made to impersonate that person. If a lilitu with an active husk link ever takes enough damage to be slain, the husk takes the killing-blow's damage instead and is destroyed, instantly severing the active husk link; if the lilitu is disguised in the husk's original form, she instantly reverts to her true form."
      },
      "profane pact": {
        type: "Su",
        text: "Once per day as a full-round action, a lilitu may forge a profane pact with a willing humanoid creature bearing at least one lilitu brand by touching the creature for 1 full round. A single creature may have no more than one profane pact from a lilitu at one time. This functions identically to a succubus's profane gift ability (Pathfinder RPG Bestiary 68), save that it grants a +4 profane bonus to an ability score of the humanoid's choice, and it does not grant a telepathic link to the target."
      },
      "swift claws": {
        type: "Ex",
        text: "When a lilitu makes a full-round attack action, she can attack twice with each of her claws, for a total of four attacks a round."
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "Small or Medium humanoid",
        type: ", Small or Medium humanoid"
      },
      "profane wishcraft": {
        type: "Su",
        text: "A creature that accepts a wish from a lilitu immediately becomes chaotic evil unless it makes a successful DC 26 Will save. A creature that becomes chaotic evil in this way gains the benefits of a good hope spell for 24 hours, followed by the effects of crushing despair for 1d6 days (these spell effects function at CL 17th). The save DC is Charisma-based."
      },
      evasion: {
        universalMonsterAbility: "Evasion"
      },
      "profane grace": {
        type: "Su",
        text: "A lilitu gains a +4 profane bonus to AC and on Initiative checks and Reflex saves."
      },
      branding: {
        type: "Su",
        text: "Each time a lilitu damages a living creature with her tail slap, the wound leaves an angry and permanent red brand. In addition, the creature struck becomes staggered for 1 round from the pain. A successful DC 26 Will save negates the staggered condition and reduces the duration of the brand from permanent to 1 hour. The save DC is Charisma-based. Removing brands is difficult-each casting of restoration, dispel chaos, or dispel evil removes 1 brand. Heal removes 1d4+4 brands. Greater restoration removes a number of brands equal to the spell's caster level. Miracle and wish can remove all brands at once. The number of brands a creature gains in this manner has a cumulative series of effects, as summarized below. 1-3 Brands: The lilitu can affect the branded creature with its create husk, husk link, and profane pact abilities. 4-6 Bands: The branded creature takes a -2 penalty on all Will saves made against a lilitu's spells, spell-like abilities, and supernatural abilities. The branded creature's aura now radiates chaos and evil. 7-9 Brands: The branded creature's Wisdom score is reduced by 4. A chaotic evil creature is immune to this effect. 10 or more Brands: The penalties to the creature's Will saves and Wisdom score listed above double. In addition, the branded creature automatically fails all Will saves made against a lilitu's spells, spell-like abilities, and supernatural abilities. A chaotic evil creature is immune to this effect."
      }
    }
  },

  Oolioddroo: {
    source: "The Worldwound",
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
    size: "Medium",
    hd: 14,
    hdVal: 10,
    cr: 13,
    racialFeatures: [
      "Darkvision 60 ft.",
      "See Thoughts"
    ],
    speed: {
      base: 30,
      maneuverability: "Perfect",
      fly: 40
    },
    abilities: {
      str: 14,
      dex: 25,
      con: 24,
      int: 21,
      wis: 24,
      cha: 23
    },
    feats: [
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Lightning Stance",
        type: "Combat"
      },
      {
        name: "Mobility",
        type: "Combat"
      },
      {
        name: "Quicken Spell-Like Ability",
        type: "Monster",
        value: "Invisibility",
        choiceSource: "Quicken Spell-Like Ability"
      },
      {
        name: "Spring Attack",
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
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Tongue",
        name: "Tongue",
        specialAbility: "thought siphon",
        damage: "1d6"
      }
    ],
    immunities: [
      "Immune to mind-affecting effects"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "good"
      },
      SR: {
        value: 24
      },
      naturalArmor: 6
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Abyss)",
    visualDescription: "This skeletally thin woman has a mothlike face. It flies upon four dragonfly wings and wears a mantle of shadows.",
    description: "Oolioddroos, known also as moth demons, are a particularly insidious breed of fiend that can infest the brain of a living creature with their eggs, allowing them to manipulate creatures' thoughts and minds from afar. Sometimes an oolioddroo's victim can go for months or even years before the demon capitalizes on the link and forces the victim to undertake a particularly nefarious or vile deed. In the worst cases, the victim can commit crimes or heinous acts at the oolioddroo's bidding and then immediately forget about these acts, creating the perfect sleeper agent who not only unknowingly does the oolioddroo's bidding, but might even be significantly involved in efforts to oppose the acts of sabotage and terrorism the oolioddroo commands. To the oolioddroo, the torment, shame, and despair a victim feels upon realizing he's been at least somewhat responsible for the actions is as delicious and delightful as the pain and suffering caused by the acts themselves. An oolioddroo appears as a skeletally thin woman with gray flesh. Its shadow mantle typically appears in the form of a flowing, diaphanous, black gown, but the demon can control the shape of this supernatural defense to make it appear as regular black clothing or simply its own shadow. The oolioddroo's face is that of a horned moth, and her tongue, while flexible, can penetrate flesh and bone with ease. An oolioddroo stands 6 feet tall, but only weighs 100 pounds. These sinister demons form from the souls of those who used brainwashing, mind-control, and similar techniques, either magical or mundane, to trick or force the innocent into committing terrible acts of brutality. An encounter with an oolioddroo can be rather complex, especially if a PC is its intended victim. If an oolioddroo attempts to seize control of a lone PC, one tricky tactic is to simply ask the character's player to attempt all the necessary rolls and checks beforehand. Typically, one of these demons attempts to implant eggs in a sleeping or lonely character, so you can just have that character make a Perception check (at a -10 penalty if the character is sleeping) and a saving throw against the modify memory spell-if both fail, you can continue with the assumption that the implanted egg hatches without the player noticing. Thereafter, the source of the strange voices and compulsions in the character's thoughts, as well as the source of the periodic suggestions and other magical attacks, can be as frighteningly mysterious to the player as well as the character. Of course, you should take care not to go too far with this-if the PC or an ally uses detect evil, for example, don't forget to give them the clue that something strange is going on when a normally non-evil PC radiates an unexpected aura!",
    organization: "solitary, pair, or cult (3-6)",
    languages: "Abyssal, Celestial, Draconic; telepathy 300 ft.",
    spellLikeAbilities: [
      {
        name: "calm emotions",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "charm person",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "detect thoughts",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "teleport, greater",
        casterLevel: 14,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: -1
      },
      {
        name: "invisibility",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "modify memory",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "sending",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "hold person",
        casterLevel: 14,
        timesPerDay: 3
      },
      {
        name: "invisibility",
        casterLevel: 14,
        limitations: "Metamagic: Quicken ",
        timesPerDay: 3
      },
      {
        name: "suggestion",
        casterLevel: 14,
        timesPerDay: 3
      },
      {
        name: "dream",
        casterLevel: 14,
        timesPerDay: 1
      },
      {
        name: "feeblemind",
        casterLevel: 14,
        timesPerDay: 1
      },
      {
        name: "nightmare",
        casterLevel: 14,
        timesPerDay: 1
      },
      {
        name: "summon",
        casterLevel: 14,
        limitations: "level 4, 1 oolioddroo or 1d4 shadow demons 35%",
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 14
      },
      Bluff: {
        ranks: 14
      },
      Diplomacy: {
        ranks: 17
      },
      Fly: {
        ranks: 17
      },
      "Knowledge (arcana)": {
        ranks: 17
      },
      "Knowledge (planes)": {
        ranks: 14
      },
      Perception: {
        ranks: 14,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      "Sense Motive": {
        ranks: 14,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Spellcraft: {
        ranks: 17
      },
      Stealth: {
        ranks: 14,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      "Use Magic Device": {
        ranks: 17
      }
    },
    special: {
      oviposition: {
        type: "Su",
        text: "As a full-round action once per day, an oolioddroo can use its tongue to implant its eggs into the brain of a helpless, sleeping, unconscious, or willing creature, dealing 1 point of Intelligence damage. Typically, the oolioddroo uses modify memory immediately after an oviposition, making its victim forget the violation. The egg gestates in the victim's brain for 24 hours, after which a small caterpillar-like larva emerges and nestles painlessly into the victim's brain. At this point, the oolioddroo can track the victim's location as if the victim were under the effect of a status spell, can communicate telepathically with the victim across any distance, and can use its detect thoughts, modify memory, and suggestion spell-like abilities through the link to target the victim. The larva (and link to its oolioddroo) becomes inert whenever the victim and the oolioddroo are on separate planes. Victims carrying this larva detect as chaotic and evil. Anyone who reads the victim's thoughts, such as via detect thoughts or telepathy, can attempt a Sense Motive check opposed by the oolioddroo's Bluff check to notice the presence of a second, alien set of thoughts in the target's mind. Dispel chaos and dispel evil immediately ends the oviposition- the implanted larva melts into harmless fluid and is absorbed by the victim's body. This is not a disease effect, though, so heal or remove disease offer no aid in ending the effect. As an immediate action, an oolioddroo can use its feeblemind spell-like ability on the carrier-it uses this \"scorched earth\" tactic if it fears that the host is about to be rescued or cut off from its influence, such as occurs when the effects are ended via dispel chaos or dispel evil. Using feeblemind in this way automatically destroys the larva, regardless of whether or not the victim saves against the feeblemind effect, so an oolioddroo typically waits until the last moment to use this ability. See Thoughts (Su) An oolioddroo can see a creature's thoughts, interpreting them as a shifting mass of images, colors, and shapes that infuse a creature's aura. An oolioddroo gains the effects of see invisibility against creatures with an Intelligence score as a result of this unusual sense. This ability also grants the oolioddroo a +8 racial bonus on Sense Motive checks. When it uses detect thoughts, it does not have to study an area or subject to gain all 3 rounds of information-it gains all of this information on the 1st round of using the ability. In addition, it gains a +4 racial bonus on the save DC of its detect thoughts spell-like ability. A blind oolioddroo loses the ability to see thoughts."
      },
      "sneak attack": {
        universalMonsterAbility: "Sneak Attack",
        bonus: "3d6"
      },
      "shadow mantle": {
        type: "Su",
        text: "The supernatural shadows that wreathe an oolioddroo grant the creature a +4 racial bonus on Stealth checks and a +4 deflection bonus to its Armor Class."
      },
      "thought siphon": {
        type: "Su",
        text: "Whenever an oolioddroo damages a creature with its tongue attack, it can drink away one of the creature's thoughts or memories. A creature can resist this attack with a successful DC 23 Will save. On a failed save, the oolioddroo chooses to target the victim with one of the following effects. The save DC is Charisma-based. Memory Drain: The victim is immediately affected by the oolioddroo's modify memory spell-like ability. The oolioddroo can adjust up to 5 minutes of memories immediately-it does not need to increase the spell's casting time to match the duration of the modified memory. Skill Drain: The victim loses all skill ranks in a skill of the oolioddroo's choosing for 24 hours. Lost skill ranks can be recovered immediately with a restoration or greater restoration spell. Spell Drain: The victim immediately loses one prepared spell or one unused spell slot of the oolioddroo's choice; this lost spell or spell slot can be replenished normally. Wisdom Drain: The victim takes 2 points of Wisdom drain. Tongue (Ex) An oolioddroo's tongue attack is a primary attack that does piercing and slashing damage. Whenever an oolioddroo damages a foe with its tongue, it can use its thought siphon attack."
      }
    }
  },

  "Demonic Deadfall Scorpion": {
    source: "The Worldwound",
    creatureType: "magical beast",
    subTypes: [
      "augmented"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Huge",
    hd: 10,
    hdVal: 8,
    cr: 9,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Tremorsense 60 ft."
    ],
    speed: {
      base: 50
    },
    abilities: {
      str: 31,
      dex: 15,
      con: 22,
      int: 10,
      wis: 14,
      cha: 15
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
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Stealth",
        choiceSource: "Skill Focus"
      },
      {
        name: "Toughness",
        type: "General"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Claw",
        name: "2 Claws",
        specialAbility: "grab",
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
      "Immune to electricity, poison"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "cold iron"
      },
      naturalArmor: 13
    },
    space: "15 ft.",
    reach: "15 ft.",
    environment: "any",
    visualDescription: "This oversized vermin bears demonic features and the unmistakable glint of intelligence in its eyes.",
    description: "Deskari's influence upon the Worldwound's verminous life cannot be ignored for long by visitors to this tainted land. While some giant vermin have resisted Deskari's influence, most have succumbed to it. Such creatures are almost always encountered along the Worldwound's periphery. As one travels deeper into the blighted land, the immense insects, spiders, and other vermin encountered in the canyons and rivers take on an increasingly unsettling intelligence and demonic features. In many ways, these demonic vermin are no longer true denizens of the Material Plane-they are, after a fact, what happens when the chaos and evil of the Abyss infuse a mindless creature. They are the unholy spawn of vermin-and mortal sins. Countless variations of demonic vermin exist in the forbidding wasteland that is the Worldwound. When a nest of similar monsters is encountered, they all typically share the same demonic powers and traits, but another nest of the same species could exhibit entirely different abilities, depending on the nature of the Abyssal energies that have corrupted and transformed them. Uncorrupted giant vermin that wander into or are otherwise brought into the Worldwound do not immediately fall victim to this vile transformation, but several months of exposure can, at the GM's whim, cause such creatures to spontaneously transform into one of these hideous monstrosities. Creating a Demonic Vermin \"Demonic vermin\" is an inherited or acquired template that can be added to any vermin (hereafter referred to as the base creature). A demonic vermin retains all the base creature's statistics and special abilities except as noted here. CR: Same as the base creature +1. Alignment: Chaotic evil. Type: The creature's type changes to magical beast. Do not recalculate HD, BAB, or saves. While a demonic vermin is not an outsider, it is treated as if it had the demon subtype for the purposes of resolving all effects relating to that subtype. Armor Class: Natural armor improves by +2. Special Qualities and Defenses: A demonic vermin gains immunity to electricity and poison and resistance to acid 10, cold 10, and fire 10. It also gains DR 5/cold iron (if 11 HD or less) or DR 10/cold iron (if 12 HD or more). As demonic vermin are intelligent, they lose the mindless trait. Melee: A demonic vermin's natural weapons are unchanged, but they are treated as chaotic and evil for the purpose of resolving damage reduction. Special Attacks: A demonic vermin retains all the special attacks of the base creature. In addition, it gains one of the following special abilities of your choosing- you can, of course, invent different abilities of your own as well. The save DC for any of these attacks is equal to 10 + 1/2 the demonic vermin's HD + the demonic vermin's Constitution modifier. Abyssal Energy (Su): Choose one of the following energy types-acid, fire, or cold. The demonic vermin gains immunity to that energy type, and also gains a breath weapon that inflicts that type of energy damage. This breath weapon is a 60-foot-line, and deals 1d6 points of damage per CR point possessed by the demonic vermin (Reflex save halves). It can be used once every 1d4 rounds. Additional Senses (Ex): The vermin has a large number of extra eyes and other sensory organs. It gains All-Around Vision, Scent, and a +8 racial bonus on Perception checks. Death Throes (Su): When the vermin is slain, it can make a single melee attack (using any one of its natural attacks) as an immediate action. It then explodes into acid, fire, electricity, or cold (your choice), dealing 1d6 points of damage per CR point possessed by the demonic vermin (Reflex save halves). Diseased (Su): The demonic vermin is immune to disease, and its natural attacks inflict demonplague (see page 29) on a hit (Fortitude save negates). Drone (Su): By rubbing its wings or limbs together as a standard action, the demonic vermin produces a loud, discordant drone that causes those within 30 feet of it to become sickened (if the vermin is CR 8 or less) or confused (if the vermin is CR 9 or higher) for 1d6 rounds (Will save negates). This is a sonic mind-affecting effect. Skitter (Ex): The creature has uncanny speed and erratic movements. The vermin's speeds all increase by 10 feet, it gains Mobility and Spring Attack as bonus feats, and it gains a +4 racial bonus on Initiative checks. Spell-Like Abilities: In addition to gaining one of the special attacks listed here, all demonic vermin gain access to a limited number of spell-like abilities, depending on its Hit Dice. Each ability is usable once per day. Caster level equals the creature's CR. CR Abilities 1-4 darkness 5-8 vomit swarm 9-12 insect plague 13-16 greater teleport (self plus 50 lbs. of objects only) 17-20 earthquake Abilities: Str +4, Con +2. A demonic vermin's Intelligence becomes 10 and its Charisma becomes 15 (unless the base creature has higher values, in which case they remain unchanged). Feats: A demonic vermin gains feats as appropriate for its Hit Dice, and gains Toughness as a bonus feat. Skills: A demonic vermin has skill points per racial Hit Die equal to 4 + its Intelligence modifier. The following are class skills for demonic vermin: Acrobatics, Bluff, Climb, Fly, Knowledge (planes), Perception, Sense Motive, and Stealth. Languages: A demonic vermin speaks Abyssal, Celestial, and Draconic. It also gains telepathy to a distance of 100 feet.",
    organization: "solitary, pair, or colony (3-10)",
    languages: "Abyssal, Celestial, Draconic; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "darkness",
        casterLevel: 9,
        timesPerDay: 1
      },
      {
        name: "insect plague",
        casterLevel: 9,
        timesPerDay: 1
      },
      {
        name: "vomit swarm",
        casterLevel: 9,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 2
      },
      Climb: {
        ranks: 10
      },
      Perception: {
        ranks: 10,
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
            value: 8,
            situational: true,
            note: "+16 in forests"
          }
        ]
      }
    },
    special: {
      "death throes": {
        type: "Ex",
        preText: "DC 21, 9d6 cold damage"
      },
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "1d8+10"
      },
      "sudden strike": {
        type: "Ex",
        text: "During a surprise round, a demonic deadfall scorpion may act as if it had a full round to act, rather than just one standard action."
      },
      grab: {
        universalMonsterAbility: "Grab"
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Sting-injury; save Fort DC 21; frequency 1/ round for 6 rounds; effect 1d4 Str damage; cure 2 consecutive saves.",
        saveDC: 10
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
        damageType: "fire",
        value: 10
      }
    ]
  },

  Dwiergeth: {
    source: "The Worldwound",
    creatureType: "aberration",
    subTypes: [
      "extraplanar"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Large",
    hd: 13,
    hdVal: 8,
    cr: 13,
    racialFeatures: [
      "All-Around Vision",
      "Darkvision 60 ft."
    ],
    speed: {
      base: 60,
      climb: 60
    },
    abilities: {
      str: 32,
      dex: 25,
      con: 28,
      int: 5,
      wis: 24,
      cha: 17
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
        value: "Bites",
        choiceSource: "Improved Critical"
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
        name: "Spring Attack",
        type: "Combat"
      },
      {
        name: "Wind Stance",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "2 Bites",
        specialAbility: "grab",
        damage: "1d6",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to blindness, dazzling, poison, visual effects"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "lawful"
      },
      SR: {
        value: 24
      },
      naturalArmor: 11
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "cold mountains",
    visualDescription: "This beast's bulbous body perches atop four sucker-ended, multi-jointed legs, with a snake-like maw gnashing at either end.",
    description: "Dwiergeths hunt the Worldwound's deadly rift valleys, feasting on demon flesh as readily as any other meat, digesting prey in a gnawing process of transdimensional rumination. Sure-footed dwiergeths leap and sprint along vertical surfaces with disturbing ease, and often cling to a cliffside for hours or even days, waiting for prey to approach from either above or below. They have a supernatural mastery over the wind as well, and make use of their spell-like abilities to cause climbers to fall from cliffs or flying creatures to be dashed against rocky walls-it's easier to eat bleeding, broken meat, after all. A dwiergeth's anatomy is quite unusual. Trembling bristles protruding from the creature's flesh act as eyes, allowing it to see in all directions at once, but the monster's strangest feature lies within. Although dissection of a slain dwiergeth reveals a single coiling digestive tract filled with sharp teeth winding from one of its mouths through its bulbous body to the other mouth, the entrails of a living dwiergeth actually extend into other strange dimensions generated by the monster's Abyssal heritage.",
    organization: "solitary, pair, or pack (3-6)",
    languages: "Abyssal",
    spellLikeAbilities: [
      {
        name: "feather fall",
        casterLevel: 13,
        timesPerDay: -1
      },
      {
        name: "gust of wind",
        casterLevel: 13,
        timesPerDay: -1
      },
      {
        name: "control winds",
        casterLevel: 13,
        timesPerDay: 1
      },
      {
        name: "wind wall",
        casterLevel: 13,
        timesPerDay: 1
      }
    ],
    skills: {
      Climb: {
        ranks: 15
      },
      Perception: {
        ranks: 6
      }
    },
    special: {
      "fast swallow": {
        type: "Ex"
      },
      "forever gullet": {
        type: "Su",
        text: "When a dwiergeth swallows a creature whole (being able to swallow Small creatures or smaller), the act of swallowing shunts the victim through extradimensional orifices within the creature's body and into a seemingly endless maze of tooth-lined entrails that exist outside of reality, similar to the labyrinth created by a maze spell but horribly organic and hungry. If a swallowed creature successfully cuts its way out of a dwiergeth, it must attempt a DC 21 Fortitude save as it crawls out of the hole. If the victim is successful, it escapes the creature, but on a failure, the victim merely crawls from one extradimensional intestine to another and must endure another round of being swallowed whole. A dwiergeth can continue to use swallow whole even after a creature cuts its way out. A creature casting any teleport-based spell or spell-like ability while within 5 feet of a dwiergeth must make a successful DC 21 Will save or the teleportation effect instead sends the target into the dwiergeth's forever gullet. When a dwiergeth is under the effects of dimensional anchor or in an area that prohibits extradimensional travel, it loses the abilities of its forever gullet, but its swallow whole ability functions normally. The save DC is Charisma-based, and it has a +2 racial bonus."
      },
      "swallow whole": {
        universalMonsterAbility: "Swallow Whole",
        damage: "8d6 slashing damage",
        hp: "17 hp",
        AC: "AC 15"
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    },
    resistances: [
      {
        damageType: "cold",
        value: 20
      },
      {
        damageType: "fire",
        value: 20
      }
    ]
  },

  Grimslake: {
    source: "The Worldwound",
    creatureType: "aberration",
    subTypes: [
      "extraplanar"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Large",
    hd: 8,
    hdVal: 8,
    cr: 6,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Tremorsense 30 ft."
    ],
    speed: {
      base: 20,
      burrow: 20,
      climb: 20
    },
    abilities: {
      str: 22,
      dex: 13,
      con: 19,
      int: 6,
      wis: 14,
      cha: 11
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
        name: "Lightning Reflexes",
        type: "General"
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
        specialAbility: "grab",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Sting",
        name: "Sting",
        specialAbility: "grab",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to disease"
    ],
    defense: {
      naturalArmor: 9
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any",
    visualDescription: "This nauseating maggot-like creature has a long tail covered with frightening hooked suckers.",
    description: "The grimslake is a nauseating creature commonly found amid Abyssal battlefields, where it crawls among the bodies, sucking away marrow and other vital tissues found within the dead. Of course, when fresh carcasses aren't available, grimslakes eagerly to turn to living victims-they take particular delight in the sound of screams as they feed. While on the Abyss, they often hunt lesser demons, but these semi-intelligent scavengers find mortal humanoids a particular delicacy. The hermaphroditic grimslakes use the remnants of their meals as incubators for their eggs. After eating, they fill the drained bodies with their eggs and fertilize them. Then they abandon the eggs to search for new feeding grounds, leaving behind a hideous legacy. Other scavengers instinctively avoid the egg-filled bodies, and 10 to 12 days later, the corpses burst open, releasing a mass of grimslakes the length of a human arm. These creatures fall upon each other in a ravenous orgy of cannibalism, growing quickly as they consume their kin until, a few days later, the few surviving, fully grown grimslakes go off in search of new food and incubators. On the Abyss, some demon lords use grimslakes to dispose of bodies. Others use them as implements of torture. The worst keep them as food sources-not to eat the grown specimens, of course, but to dine on corpses pregnant with the grimslakes' seething young.",
    organization: "solitary, pair, or tangle (3-10)",
    languages: "Abyssal",
    spellLikeAbilities: [
      {
        name: "death knell",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "ray of exhaustion",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "slow",
        casterLevel: 6,
        timesPerDay: 1
      }
    ],
    skills: {
      Climb: {
        ranks: 8
      },
      Perception: {
        ranks: 8
      }
    },
    special: {
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "1d6+6"
      },
      "marrow drain": {
        type: "Ex",
        text: "A grimslake's tail is covered with suckers that extend long, thin, razor-sharp tendrils to drill into its victim's bones, draining them of marrow. The grimslake can drain marrow from any creature it is grappling or from any helpless creature as a swift action. The victim can resist this painful attack with a successful DC 18 Fortitude save; otherwise, he becomes staggered from the horrific agony for 1 round and takes 1 point of Constitution drain. The save DC is Constitution-based."
      },
      "penetrating jaws": {
        type: "Su",
        text: "A grimslake's bite attack penetrates cold iron and silver damage reduction."
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        value: null
      },
      "slashing scales": {
        type: "Ex",
        text: "The scales running in a line down a grimslake's back have razor-sharp ridges and spines, and the creature is adept at lashing at attackers with these scales. Any creature that attacks a grimslake with a natural weapon, unarmed strike, or light weapon must succeed at a DC 15 Reflex save to avoid taking 1d4 points of slashing damage. The save DC is Dexterity-based."
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
        damageType: "fire",
        value: 10
      }
    ]
  },

  Riftcreeper: {
    source: "The Worldwound",
    creatureType: "ooze",
    subTypes: [
      "extraplanar"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Gargantuan",
    hd: 15,
    hdVal: 8,
    cr: 15,
    racialFeatures: [
      "Blindsight 60 ft.",
      "Tremorsense 120 ft."
    ],
    speed: {
      base: 30,
      climb: 30,
      swim: 20
    },
    abilities: {
      str: 39,
      dex: 27,
      con: 30,
      int: 7,
      wis: 16,
      cha: 10
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
        name: "Improved Bull Rush",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
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
        name: "Vital Strike",
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
        specialAbility: "grab",
        damage: "1d4",
        bonuses: [
          {
            source: "inherent",
            value: "2d4",
            appliesTo: "damageType",
            damageType: "acid"
          }
        ],
        type: "primary"
      },
      {
        weapon: "Strand",
        qualities: [
          "touch"
        ],
        name: "6 Strands",
        damage: "2d4"
      }
    ],
    immunities: [
      "Immune to acid, ability damage, ability drain, exhaustion, fatigue"
    ],
    defense: {
      naturalArmor: 16
    },
    space: "20 ft.",
    reach: "20 ft.",
    environment: "any mountain",
    visualDescription: "This slithering mass of bubbling red ooze extrudes a nest of long, thin tendrils, as if tasting the air in search of prey.",
    description: "Heaving masses of unnatural protoplasm known as riftcreepers prowl the Worldwound's shattered canyons. Despite their name, these intelligent, malevolent oozes are quite agile and swift, slithering up and down canyon walls or swimming through even the foulest water. Natives of the Abyss, riftcreepers have adapted disturbingly well and quickly to the Worldwound. Although smart enough to understand Abyssal, riftcreepers have little interest in conversing with their food.",
    organization: "solitary",
    languages: "Abyssal (cannot speak)",
    spellLikeAbilities: [
      {
        name: "feather fall",
        casterLevel: 15,
        timesPerDay: -1
      }
    ],
    skills: {
      Climb: {
        ranks: 15
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "slam, 4d6+14 plus 2d6 acid"
      },
      pull: {
        universalMonsterAbility: "Pull",
        attack: "strand",
        distance: "20 feet"
      },
      "gelatinous surge": {
        type: "Ex",
        text: "Once per minute as a standard action, a riftcreeper can extrude a protoplasmic tendril of ooze to attach to any vertical surface within 120 feet. It can then transfer its entire bulk along that tendril as part of that move action to change its location to the surface to which it's now attached. This movement does not provoke attacks of opportunity. Any creatures along its line of travel are subjected to a bull rush attempt. Strands (Ex) A riftcreeper can extend up to six thin, sticky strands from its body at a time as a standard action, launching them to a maximum range of 120 feet. These attacks resolve as ranged touch attacks. On a hit, a strand deals 2d4 points of acid damage to its target and attaches to the creature. These strands are quite strong, but any amount of slashing damage severs them (a strand has AC 25). As long as a strand remains attached to a target, that creature takes an additional 2d4 points of acid damage at the start of its turn. A riftcreeper can automatically absorb the strands into its body if it uses its gelatinous surge ability (and, in doing so, it releases any attached creatures)."
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        value: null
      },
      "adaptive defenses": {
        type: "Su",
        text: "After being damaged by any magical effect that deals cold, electricity, fire, or sonic damage, a riftcreeper's body instantly adapts to become immune to that form of energy. A riftcreeper can only adapt to one of those four types of energy at a time-if it adapts to a new energy type, it loses its immunity to the previous type. Otherwise, the immunity lasts for 1 hour."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  Urannag: {
    source: "The Worldwound",
    creatureType: "construct",
    subTypes: [
      "extraplanar"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Huge",
    hd: 11,
    hdVal: 10,
    cr: 8,
    racialFeatures: [
      "Tremorsense 60 ft."
    ],
    speed: {
      base: 10
    },
    abilities: {
      str: 25,
      dex: 11,
      con: "-",
      int: 2,
      wis: 15,
      cha: 2
    },
    feats: [
      {
        name: "Great Fortitude",
        type: "General"
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
        value: "Arms",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Claw",
        name: "3 Claws",
        specialAbility: "entrap",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "construct traits",
      "Immune to gaze attacks, visual effects and illusions, sight-based attacks"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "adamantine and good"
      },
      SR: {
        value: 19
      },
      naturalArmor: 14
    },
    space: "15 ft.",
    reach: "15 ft.",
    environment: "any swamp",
    visualDescription: "What appeared at first to be a sadistic spiked cage suddenly writhes into unholy life, with bladed, articulated arms.",
    description: "The strange urannag (ur-AWN-ag, the singular and plural are the same) has long vexed scholars who have argued whether or not the thing is a creature or merely a complex trap. In truth, it is a little bit of both-yet another unsettling example of how reality on the Abyss doesn't quite match mortal expectations. Behaviorally, an urannag acts similarly to an ambush predator, yet it has no need for sustenance and is driven to trap and flense prey simply out of an inborn sense of cruelty and sadism. Construction Most urannag are created spontaneously by the Abyss, but enterprising spellcasters have found methods to duplicate the construction of these strange creatures. An urannag's body is made of 2,000 pounds of iron, and its frame must be forged over an Abyssal heat source, which infuses the creature with its chaotic and evil urges. URANNAG CL 10th; Price 35,000 gp CONSTRUCTION Requirements Craft Construct, geas/quest, keen edge, limited wish, planar binding; Skill Craft (sculpture) DC 19; Cost 17,500 gp.",
    organization: "solitary, pair, tangle (3-5), or menace (6-12)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 5,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Stealth: {
        ranks: 9,
        bonuses: [
          {
            source: "inherent",
            value: 8,
            situational: true,
            note: "+20 in shallow water"
          }
        ]
      }
    },
    special: {
      encage: {
        type: "Ex",
        text: "As a swift action, an urannag can attempt to encage a creature that is not aware of it and is sharing its space, or a helpless creature it has entrapped. The target creature can resist this attempt with a DC 22 Reflex save. On a failure, the target treats the urannag's space as difficult terrain, but cannot move out of that space or up more than 10 feet. Each round a creature remains encaged, it takes 2d6 slashing damage from the sharpened gears and blades thrashing and whirring inside the creature. A creature can escape being encaged by making a successful CMB check or Escape Artist check (DC = the urannag's CMD) as a full-round action, or can smash through a cage wall. These walls are AC 22, have hardness 10, and 22 hp-once a hole is smashed into a wall, it automatically repairs itself the next time the urannag encages a foe. The save DC is Strength-based. Exposed Mechanisms (Ex) Although an urannag is a construct, it can be damaged and harmed by the same methods used to disarm and disable traps. A DC 20 Disable Device check can be attempted against an urannag as a full-round action that provokes an attack of opportunity. On a successful check, the urannag takes damage equal to 3d6 + the character's total ranks in Disable Device and it must make a DC 16 Fortitude save to avoid being staggered for 1 round (the damage bypasses the urannag's damage reduction)."
      },
      entrap: {
        universalMonsterAbility: "Entrap",
        hardness: "hardness 10",
        duration: "1d10 rounds",
        saveDC: null,
        hp: "hp 10"
      },
      "living trap": {
        type: "Ex",
        text: "Defensive abilities that apply to traps (such as trap sense) apply against an urannag's attacks."
      }
    }
  },

  "Warmonger Wasp": {
    source: [
      "The Worldwound",
      "Bestiary 5"
    ],
    creatureType: "construct",
    subTypes: [
      "extraplanar"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Large",
    hd: 10,
    hdVal: 10,
    cr: 7,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30,
      maneuverability: "Good",
      fly: 30
    },
    abilities: {
      str: 18,
      dex: 23,
      con: "-",
      int: 3,
      wis: 13,
      cha: 1
    },
    feats: [
      {
        name: "Ability Focus",
        type: "Monster",
        value: "Poison",
        choiceSource: "Ability Focus"
      },
      {
        name: "Great Fortitude",
        type: "General"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Sting",
        choiceSource: "Improved Critical"
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
      "construct traits",
      "Immune to electricity"
    ],
    defense: {
      naturalArmor: 6
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any (Abyss)",
    visualDescription: "This wasplike creature seems to be partially made of metal. Its wings create an iridescent glow as they buzz loudly in the air.",
    description: "Like the more powerful retriever, the warmonger wasp is a construct built from the protoplasmic flesh and chaotic fecundity of the Abyss itself. Appearing as partially organic, partially metallic, warmonger wasps serve the demonic armies as air support in large battles, and the armies of the Worldwound are no exception. Their electricity-based explosions work well on battlefields where demons and mortals clash, as electrical attacks have no effect on demons. It's more accurate to say that warmonger wasps are grown rather than constructed, and while the procedure of crafting these foul constructs is beyond the ken of mortal crafters, spellcasters can conjure them to do their bidding (see below). Warmonger wasps are only intelligent enough to understand simple commands, and only ones universally associated with battlefield conditions. In the Worldwound, a large number of warmonger wasps have been left to their own devices. These \"wild\" wasps buzz through the skies, constantly watching for any non-demons to swoop down on and attack. Cultists and other worshipers of Deskari not escorted by demons are quick to speak in Abyssal and show their unholy symbols when confronted by a flight of warmongers. PCs eager to do the same can convince the wasps to leave them alone with a successful DC 20 Bluff check-provided the attempt is made while speaking Abyssal. A warmonger wasp is about 10 feet long, with a 20-foot wingspan. They weigh 1,200 pounds. Conjuring a Warmonger Wasp Although a warmonger wasp is not an outsider, it may nonetheless be conjured by either planar ally or planar binding. The spellcaster must take care to do so, however, using special rare incenses, the secretions of rare and violent insects, and complex diagrams inked on the floor and walls with expensive phosphorescent inks, lest the wasp attack the spellcaster upon the spell's completion. These components cost 15,000 gp and replace the usual costs associated with casting either spell (including planar binding's Charisma check requirement).",
    organization: "solitary, pair, or flight (3-12)",
    languages: "Abyssal (cannot speak)",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 6
      },
      Perception: {
        ranks: 4,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Stealth: {
        ranks: 3,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      "static discharge": {
        type: "Su",
        text: "Once every 1d4 rounds as part of a move action taken to fly at least 10 feet, a warmonger wasp's wings can discharge a bolt of electricity to a range of up to 60 feet. The bolt explodes upon reaching its target, creating a 20-foot-radius burst that deals 6d6 points of electricity damage (Reflex DC 15 half)."
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Sting-injury; save Fort DC 17; frequency 1/round for 6 rounds; effect 1d4 Dex; cure 2 consecutive saves.",
        saveDC: null
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        value: null
      }
    }
  },

  "Warped One": {
    source: "The Worldwound",
    creatureType: "outsider",
    subTypes: [
      "chaotic",
      "evil",
      "extraplanar"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 10,
    hdVal: 10,
    cr: 8,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 22,
      dex: 19,
      con: 20,
      int: 12,
      wis: 5,
      cha: 15
    },
    feats: [
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Claw",
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
        name: "Skill Focus",
        type: "General",
        value: "Stealth",
        choiceSource: "Skill Focus"
      }
    ],
    attacks: [
      {
        weapon: "Claw",
        name: "4 Claws",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to mind-affecting effects, petrification, polymorph effects"
    ],
    defense: {
      SR: {
        value: 19
      },
      naturalArmor: 7
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Abyss)",
    visualDescription: "This insane, twisted, humanoid-shaped tangle of limbs and gnashing teeth thrashes and howls, all too eager to wreak havoc.",
    description: "Demons form from the interaction of sinful human souls upon the fecundity of the Abyss itself, but this is not the only way the demonic plane creates life. In certain parts of this blasphemous realm, non-sinful souls or even living humanoids can be overwhelmed and transformed into demon-like creatures. So powerful are the energies corrupting and warping these humanoids that chaotic force continues to leak from their creations and continuously affect the creatures' flesh-forever twisting and mutating them in endless agony. These poor victims have been transformed into warped ones. No two warped ones look exactly alike, although they all share certain common features. They always appear as two to four demonic humanoids awkwardly fused together into a single human-sized monstrosity. While they can have several limbs, they always have four that sport particularly sharp talons. Once a warped one enters combat, the excitement of imminent bloodshed (both that of its victims and of itself) causes the entropic energies within it to change and mutate. A fight against a warped one is a harrowing experience, for not only do the warped one's physical traits change continuously, these mutations affect and cripple those nearby in devastating ways. As using a warped one in combat adds lots of additional dice rolls to encounters, you may want to \"synchronize\" their fleshwarping and warp-field abilities when using multiple warped ones in battles, so each round they all exhibit the same trait and their warp fields all have the same effect. A warped one is 7 feet tall and weighs 350 pounds.",
    organization: "solitary, pair, or mob (3-14)",
    languages: "Abyssal",
    spellLikeAbilities: [
      {
        name: "blur",
        casterLevel: 8,
        timesPerDay: -1
      },
      {
        name: "dimension door",
        casterLevel: 8,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: -1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 13
      },
      Climb: {
        ranks: 13
      },
      "Knowledge (planes)": {
        ranks: 10
      },
      Perception: {
        ranks: 10
      },
      Stealth: {
        ranks: 10
      },
      Swim: {
        ranks: 13
      },
      "Use Magic Device": {
        ranks: 13
      }
    },
    special: {
      fleshwarping: {
        type: "Su",
        text: "A warped one's body constantly shifts and changes as raw Abyssal energies course through it, reshaping and rebuilding it in minor but hideous ways. Once a warped one enters combat, these growing energies begin to alter its statistics in small ways. At the start of a warped one's turn, roll on the following table to see what additional effect its fleshwarping has on it for that round-all of the following mutations have a duration of 1 round unless otherwise noted. d8 Result 1 Infusion of Chaos: The warped one's body ripples and shifts rapidly as it grows and absorbs fingers, tendrils, sightless eyes, toothless mouths, tumors, and other mostly useless organs out of its body. The warped one gains DR 10/lawful. 2 Enhanced Musculature: The warped one grows much more muscular. It gains a +2 enhancement bonus on melee attack rolls, melee weapon damage, CMB checks, Strength-based checks, and to its CMD. 3 Lean and Swift: The warped one grows lean and agile, with longer legs and additional joints in its limbs. It gains a +2 dodge bonus to its AC, a +2 enhancement bonus on Reflex saves, and its speed increases by 10 feet. 4 Prismatic Scales: Multicolored scales grow from the warped one's flesh. It gains resistance to acid 10, cold 10, and fire 10. 5 Razor-Sharp Talons: The warped one's claws grow additional, sharper talons. Its claw attacks gain bleed 1d6. 6 Multiple Eyes: The warped one grows additional eyes and other sensory organs. It gains a +8 bonus on Perception checks and gains All-Around Vision. 7 Accelerated Metabolism: The warped one sheds its claws and teeth and immediately grows new ones, its wounds heal, and its colors grow brighter. It gains a +2 enhancement bonus on Fortitude saves and immediately heals 3d8+10 points of damage (if it's currently unwounded, it gains these hit points as temporary hit points that last for 1 hour or until depleted). 8 Armor Plating: The warped one grows a thick hide and dark scaly plates granting it DR 5/, and its natural armor bonus increases by +4. Insanity (Ex) A warped one's mind is completely unhinged, a raw chaos of madness. It uses its Charisma modifier on Will saves instead of its Wisdom modifier, and it is immune to mind-affecting effects. Any attempt to contact a warped one telepathically (including using spells like detect thoughts) produces a backlash effect, dealing 1d4 points of Charisma damage to the one attempting the contact. A DC 17 Will save negates this effect. The save DC is Charisma-based."
      },
      "unstable summoning": {
        type: "Sp",
        text: "A warped one can rend the boundaries between worlds to summon creatures to aid it in combat, but it has little control over what sorts of monsters or demons respond to its summonings. When a warped one uses its unstable summoning, there's a 50% chance that a creature (or a group of creatures) arrives to aid the warped one. Creatures summoned in this way are immune to that particular warped one's warp field. To determine the nature of the summoned aid, roll on the table below. This is a 5th-level spell effect. d8 Result 1 1d4+1 mephits (determine type randomly) 2 1d4+1 Medium elementals (determine type randomly) 3 1d3 salamanders 4 1d3 Large elementals (determine type randomly) 5 1d3 babaus 6 1 shadow demon 7 1 succubus 8 1 warped one Warp Field (Su) A warped one exudes a field of mental and physical entropic energy to a radius of 30 feet that twists and warps the minds and bodies of all other living creatures. Creatures who begin their turn inside of a warp field must succeed at a DC 17 Will save. Failure indicates that the creature is confused for 1 round and suffers one mutation from the table below. These mutations emerge swiftly and painfully, causing the victim to become sickened for 1 round and to gain one random mutation from the following table for 1 round. Once a creature succeeds at its saving throw against a warp field, it is immune to further effects from that specific warped one's warp field for 24 hours. This is a polymorph effect. The save DCs are Charisma-based. d8 Result 1 Club Foot: One of your feet becomes badly deformed. Rreduce your speed by 10 feet. 2 Cataracts: Your eyes film over with cataracts. You are blinded. 3 Demonic Horns: You grow several bony horns from your skull. You must succeed at a DC 17 Reflex save or any headband or hat you wear becomes broken. 4 Boneless Mass: You fall prone and your movement rate is reduced to 0 feet. You must succeed at a DC 17 Fortitude save to avoid being stunned for 1 round. 5 Twisted Hands: Your hands twist and deform. You drop all held objects and worn rings and cannot use your hands to make attacks or cast spells for 1 round. 6 Twisted Visage: Your face deforms into a hideous mockery. You cannot speak or cast spells with verbal components. 7 Malnourished: You become skeletally thin. All worn items (save boots, head, and headband items) drop from your body, and you must succeed at a DC 17 Fortitude save to avoid being entangled in your gear. When you return to your normal shape 1 round later, dropped items remain on the ground in your square. 8 Obesity: You become monstrously obese. Your land speed is reduced to 5 feet. In addition, if you fail a DC 17 Reflex save, any items you have equipped in the armor, belt, body, chest, neck, shoulders, or wrist slots become broken."
      },
      amorphous: {
        universalMonsterAbility: "Amorphous"
      },
      insane: {
        type: "Ex"
      },
      "warp field": {
        type: "Su",
        text: "A warped one exudes a field of mental and physical entropic energy to a radius of 30 feet that twists and warps the minds and bodies of all other living creatures. Creatures who begin their turn inside of a warp field must succeed at a DC 17 Will save. Failure indicates that the creature is confused for 1 round and suffers one mutation from the table below. These mutations emerge swiftly and painfully, causing the victim to become sickened for 1 round and to gain one random mutation from the following table for 1 round. Once a creature succeeds at its saving throw against a warp field, it is immune to further effects from that specific warped one's warp field for 24 hours. This is a polymorph effect. The save DCs are Charisma-based. d8 Result 1 Club Foot: One of your feet becomes badly deformed. Rreduce your speed by 10 feet. 2 Cataracts: Your eyes film over with cataracts. You are blinded. 3 Demonic Horns: You grow several bony horns from your skull. You must succeed at a DC 17 Reflex save or any headband or hat you wear becomes broken. 4 Boneless Mass: You fall prone and your movement rate is reduced to 0 feet. You must succeed at a DC 17 Fortitude save to avoid being stunned for 1 round. 5 Twisted Hands: Your hands twist and deform. You drop all held objects and worn rings and cannot use your hands to make attacks or cast spells for 1 round. 6 Twisted Visage: Your face deforms into a hideous mockery. You cannot speak or cast spells with verbal components. 7 Malnourished: You become skeletally thin. All worn items (save boots, head, and headband items) drop from your body, and you must succeed at a DC 17 Fortitude save to avoid being entangled in your gear. When you return to your normal shape 1 round later, dropped items remain on the ground in your square. 8 Obesity: You become monstrously obese. Your land speed is reduced to 5 feet. In addition, if you fail a DC 17 Reflex save, any items you have equipped in the armor, belt, body, chest, neck, shoulders, or wrist slots become broken.",
        preText: "30 ft."
      }
    },
    resistances: [
      {
        damageType: "electricity",
        value: 10
      }
    ]
  },

};
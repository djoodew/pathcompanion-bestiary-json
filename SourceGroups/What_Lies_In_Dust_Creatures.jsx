
export const What_Lies_In_DustCreatures = {
  Aspidochelone: {
    source: "What Lies In Dust",
    creatureType: "magical beast",
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Colossal",
    hd: 22,
    hdVal: 10,
    cr: 17,
    racialFeatures: [
      "Darkvision 120 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 0,
      swim: 120
    },
    abilities: {
      str: 32,
      dex: 5,
      con: 27,
      int: 3,
      wis: 7,
      cha: 12
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
        name: "Greater Bull Rush",
        type: "Combat"
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
        name: "Improved Iron Will",
        type: "General"
      },
      {
        name: "Improved Overrun",
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
        name: "Stealthy",
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
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    defense: {},
    space: "150 ft.",
    reach: "20 ft.",
    environment: "ocean",
    visualDescription: "The ground shudders and the seabirds take to wing with piercing cries of alarm. What once appeared to be a small, rocky island reveals itself to be a creature of titanic proportions as an enormous tail lifts ominously from the water. With a thunderous crash, it slams down, sending the island plunging beneath the waves.",
    organization: "solitary",
    spellLikeAbilities: [],
    skills: {
      Stealth: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 10
          }
        ]
      },
      Swim: {
        ranks: 3
      }
    },
    special: {
      capsize: {
        type: "Ex",
        text: "A aspidochelone can attempt to capsize a boat or ship of Gargantuan size or smaller by merely passing through its space and making a CMB check as a free action. The DC the aspidochelone must exceed is 25, or the result of the boat captain's Profession (sailor) check, whichever is higher. Captivating Scent (Ex) An aspidochelone exudes intoxicating pheromones from its skin, causing nearby creatures to seek it out. Anyone within a 1-mile radius must succeed on a DC 12 Will save or feel inexplicably drawn toward the aspidochelone by the most direct route possible. This effect is not an overwhelming compulsion, but more a subtle suggestion. The save DC is Charisma-based with a -10 penalty."
      },
      "swallow whole": {
        universalMonsterAbility: "Swallow Whole",
        damage: "4d6 acid damage",
        hp: "29 hp",
        AC: "AC 24"
      },
      "watery grave": {
        type: "Ex",
        text: "A startled aspidochelone descends rapidly into the depths of the sea, creating an undertow in the water that pulls creatures above the whale down with it. Anyone standing on or swimming within 100 feet of the aspidochelone when it dives must make a DC 29 Reflex save or take 10d6 points of damage from the crushing waves and pressure, and be pulled 100 feet below the water. Even if a creature escapes the undertow, the water within 100 feet of a passing aspidochelone is treated as rough water, requiring a DC 20 Swim check to move at half speed. The save DC is Constitution-based."
      },
      "deep sea denizen": {
        type: "Ex",
        text: "An aspidochelone can travel to extraordinary depths, and has adapted to the intense darkness and water pressure of the deep. It possesses Darkvision with a range of 120 ft. and is immune to damage from water pressure."
      },
      hibernate: {
        type: "Ex",
        text: "After gorging itself on innumerable tons of deep sea life and unfortunate travelers, an aspidochelone floats to the surface and goes into a deep hibernation with only its mottled back jutting from the waves. While hibernating, it appears to be little more than a rocky outcropping or, in the cases of the largest aspidochelone, an entire island. A hibernating aspidochelone is considered to have taken 20 on its Stealth check to hide in plain sight as a rock or island. An aspidochelone rouses from its hibernation for one of two reasons: hunger or disturbance. After entering its hibernation, a aspidochelone sleeps for 2d10x10 years, rousing naturally after this time has elapsed. An aspidochelone about to awaken usually sleeps fitfully for the last year of its rest, quivering with tremors that feel like earthquakes to creatures upon it. These tremors are treated as a minor version of the earthquake spell that affects the entire island, forcing creatures on the ground to make a DC 29 Reflex save to avoid falling down and causing 30 points of damage to all structures. An aspidochelone might be awakened immediately if it takes 100 or more points of damage in a single day. If awakened in this manner, an aspidochelone typically dives to escape its attacker, then rises again to consume it. The save DC is Constituiton-based."
      },
      "hibernation of ages": {
        type: "Ex",
        text: "An aspidochelone in hibernation continues to exude its captivating scent. Over time, birds attracted by the aspidochelone's pheromones come to roost on the whale, inadvertently bringing the seeds of small plants and shrubbery to grow in the cracks upon the aspidochelone's thick hide. The preponderance of plants, seabirds, and even other beasts gives the creature the appearance of a rocky but natural island. Thus, any aspidochelone who has spent more than 10 years hibernating gains an addition +10 bonus on its Stealth check to look like a natural island."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  Chortov: {
    source: "What Lies In Dust",
    creatureType: "outsider",
    subTypes: [
      "devil",
      "evil",
      "extraplanar",
      "lawful"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Huge",
    hd: 10,
    hdVal: 10,
    cr: 9,
    racialFeatures: [
      "Perception -1"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 27,
      dex: 7,
      con: 24,
      int: 8,
      wis: 9,
      cha: 15
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
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Throw Anything",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Fork",
        name: "Fork",
        specialAbility: "wrath",
        damage: "3d6"
      },
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Slam",
        name: "2 Slams",
        specialAbility: "wrath",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "good and piercing"
      },
      naturalArmor: 6
    },
    space: "15 ft.",
    reach: "15 ft.",
    environment: "any (Hell)",
    visualDescription: "Quivering with heat and barely restrained might, this monstrous, pig-faced titan looms taller than a city wall. Girded in fiendishly etched armor too small for its incredible corpulence, rolls of densely muscled hide spill forth in a flamered avalanche. Gnashing its many-tusked teeth and clutching a wicked military fork, the terrible giant rumbles as if preparing to roar or scream.",
    description: "Towering, rage-wracked brutes enslaved to the will of Hell, chortovs fume upon the borders and ramparts of Hell's hinterlands, murderous deterrents to any who would besiege the shores of the infernal realm or seek to escape. Born from the remains of souls not destined for Hell but damned nonetheless, chortovs carry with them the rage of those who have suffered the multiverse's cruelest injustice, and by the inescapable yoke of diabolical magic find themselves set upon the enemies of their merciless captors. Trapped within grotesque bodies of writhing, porcine flesh and smoldering hellfire, these horrors hate all things- other creatures, their fate, and the lords who have ensnared them and forced them to serve even past damnation. Standing over 20 feet tall, chortovs are mountains of flesh, muscle, and flame. Each weighing upward of 5 tons, these devils bear plates and bands of diabolical armor that serve as physical manifestations of the infernal sorceries that bind them as eternal slaves to Hell. Each chortov's armor is unique, often bearing images of the vaguely remembered torments their constituent souls once suffered. Their bodies, too, bear incongruities uncommon in other diabolical races, harkening toward the lawless natures of the soul-stuff from which these terrors are sculpted. Ecology Not all souls damned to the depths of the Pit deserve their places therein. Trapped planar travelers, goodly souls slain as diabolical sacrifices, or captives who would otherwise face torments elsewhere upon the planes-all might become prisoners of any one of Hell's inescapable layers, eternally condemned to an unfair damnation. Yet Hell cares nothing for the souls that toil and suffer within its depths, all being fodder for the infinite exertions of the infernal machine. As frightened souls suffer over centuries of horror, losing what once existed of their individuality, those rightfully damned to the Pit join with the fundament of that realm, supplying the infernal realm with the terrible sustenance it requires to- over the span of eons-excrete forth mindless lemures. Yet souls not meant for Hell fail to sustain the plane, collecting in mindless spirit cancers of primal pain and blind rage. From these cysts of wrathful, unrighteous damnation, the powers of Hell forge chains in the shape of terrible armor, creating within gigantic, barely restrained beings of hatred and living hellfire, and turn them toward the enemies of the infernal realm. These towering blasphemies are the chortovs. Despite being unwilling servants of devilkind, chortovs are irretrievable prisoners of Hell. As the processes by which the infernal realm torments, destroys, and refines souls into the stuff of fiends last for innumerable centuries, and as untold numbers of the damned comprise a single devil, no remnant of individual lives, ambition, or memory remains within these gigantic terrors. Yet despite a lack of specifics, all chortovs are consumed by an overwhelming understanding that they are slaves to a hated master and the impotent knowledge that, for all their might and wrath, the one thing they can never strike against is their captors. Thus, while other devils stand united as zealots inspired by the will of the archdevils and Asmodeus himself, chortovs serve only because they must, suffering eternally through a second damnation. Habitat & Society Upon their grotesque creations, most chortovs find themselves stationed on the frontiers of Hell, where they possess innate control over the hellfire that flickers along the infernal realm's brazen ramparts. Their mastery over these infernal flames often sees them recruited away from Avernus, drawn to some of the most dismal forges in the Pit, such as the fortress-cities of Dis and the Burning Legions of Phelgethon, where their titanic strength and rage is harnessed to power the foundries. Chortovs rarely work in groups, each arrogant but typically dull-witted brute harboring a vicious hatred for the grotesqueries, ineptitudes, and injustice tormenting others of their kind. Should they be forced into close proximity by the orders of their lords, such devils tolerate one another, but are quick to quarrel with their monstrous cousins. While such conflicts never come to blows-the chortovs restricted by their armor from defying the will of Hell-the distraction typically overshadows any benefit gained by their tandem efforts. As such, chortovs typically work alongside diabolical keepers, devils with the desires of Hell and its lords intrinsic to their beings. These minders typically come from the ranks of lesser devils, specifically ordered to direct the ferocious destructive might of these gigantic fiends. Barbazus, erinyes, and-most commonly- imps typically serve as minders of their towering brethren, as even greater devils fear the might of those rare chortovs that manage to escape Hell's control.",
    organization: "solitary or gang (2-3)",
    spellLikeAbilities: [
      {
        name: "burning hands",
        casterLevel: 9,
        timesPerDay: -1
      },
      {
        name: "faerie fire",
        casterLevel: 9,
        timesPerDay: -1
      },
      {
        name: "pyrotechnics",
        casterLevel: 9,
        timesPerDay: -1
      },
      {
        name: "dimension door",
        casterLevel: 9,
        timesPerDay: 3
      },
      {
        name: "fireball",
        casterLevel: 9,
        timesPerDay: 3
      },
      {
        name: "wall of fire",
        casterLevel: 9,
        timesPerDay: 1
      },
      {
        name: "summon devil",
        casterLevel: 9,
        limitations: "level 4, 3 bearded devils, 40%",
        timesPerDay: 1
      }
    ],
    skills: {
      Climb: {
        ranks: 13
      },
      "Escape Artist": {
        ranks: 10
      },
      Intimidate: {
        ranks: 13
      },
      "Knowledge (planes)": {
        ranks: 10
      },
      Survival: {
        ranks: 13
      }
    },
    special: {
      "hellfire soul": {
        type: "Su",
        text: "Upon being reduced to 0 hit points, a chortov explodes in a blast of hellfire. All creatures within 25 feet take 6d6 points of damage from hellfire (see above; DC 22 Reflex save for half). The save DC is Constitution-based. Upon exploding, the chortov's waning yet still raging soul lingers on as a creature of pure living hellfire. This creature has the same statistics as a Huge fire elemental, except that damage caused by its burn ability results from hellfire and it is not vulnerable to cold. Every round that this hellfire elemental exists, it loses 10 hit points until it dissipates completely."
      },
      "corrupt fire": {
        type: "Su",
        text: "Any fire effect-naturally or magically created-within 50 feet of a chortov is tainted into hellfire by its fury and evil. Aside from being sinisterly colored, hellfire functions like normal fire, except that half the damage dealt by hellfire is fire damage and the other half results from evil energy and is therefore not subject to being reduced by resistance to fire-based attacks. In addition, all of a chortov's spell-like abilities with the fire subtype produce hellfire instead of normal fire."
      },
      "infernal bondage": {
        type: "Su",
        text: "Chortovs wage Hell's wars not by choice, but due to powerful magical bondage. The armor that binds all chortovs bears an infernal curse that compels these murderous fiends to serve the will of their infernal masters. This compulsion can be temporarily dismissed by a break enchantment, dispel law, or dispel magic spell that overcomes a DC 25 dispel check. This frees the chortov of its bondage for 1d6 minutes, during which the baffled creature acts as though under the effects of the spell confusion. Destroying the armor via sundering attacks also frees the devil for 1d6 minutes, after which the armor magically reforms. A chortov's armor has hardness 13 and 45 hit points."
      },
      wrath: {
        type: "Su",
        text: "The anger and hatred of chortovs is infectious. Any creature damaged by a weapon wielded by a chortov or a chortov's slam attack must make a DC 17 or be thrown into a haze of murderous rage, being treated as though under the effects of the spells confusion and rage. This mania lasts for 1 minute, but victims may retry their save to resist every round. This is a mind-affecting effect. The save DC is Charisma-based."
      }
    }
  },

  "Bone Idol": {
    source: "What Lies In Dust",
    creatureType: "construct",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Diminutive",
    hd: 3,
    hdVal: 10,
    cr: 2,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 10
    },
    abilities: {
      str: 3,
      dex: 12,
      con: "-",
      int: 7,
      wis: 12,
      cha: 12
    },
    feats: [
      {
        name: "Run",
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
        specialAbility: "mad rage",
        damage: "1d6",
        type: "primary"
      }
    ],
    immunities: [
      "construct traits"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "bludgeoning"
      }
    },
    space: "1 ft.",
    reach: "0 ft.",
    environment: "any",
    visualDescription: "This tiny, grisly fetish seems to be carved from numerous pieces of bone, adorned with a necklace of teeth and caked with a thin layer of dried blood. Hair and twine bind the pieces of bone together. The thing's misshapen head leers forward, carved with a demonic, ape-like grin.",
    description: "Carved from human and animal bones and stitched together with hair, bone idols serve as grisly fetishes and totems for cannibalistic tribes. Although a number of small, nameless tribes carve bone idols in honor of obscure gods of disease and beastliness, most bone idols are fashioned to resemble the fearsome, simian appearance of Angazhan, the demon lord of apes and jungles.",
    organization: "solitary",
    languages: "understands creator's language (cannot speak)",
    spellLikeAbilities: [
      {
        name: "bane",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "cause fear",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "deathwatch",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "hide from undead",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "animate dead",
        casterLevel: 5,
        timesPerDay: 1
      },
      {
        name: "death knell",
        casterLevel: 5,
        timesPerDay: 1
      }
    ],
    skills: {
      Perception: {
        ranks: 3
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
      "mad rage": {
        type: "Su",
        text: "Any creature bitten by a bone idol must make a DC 16 Will save or fly into an uncontrollable, violent rage. Those affected by this rage are treated as being under the effects of both the spells rage and confusion for 1 minute. However, whenever the affected creature rolls a confusion result that would lead it to flee or attack the bone idol, the idol instead chooses a target for it to attack. This is a mind-affecting effect. The save DC is Charisma-based."
      },
      inanimate: {
        type: "Ex",
        text: "An idol is effectively a statuette and does little to suggest otherwise. Spending most of its existence perfectly motionless, a stationary idol is indistinguishable from a normal inanimate object. Unless noted in its description, an idol can make use of the majority of its special abilities without moving, though the round after it does so observers can make a DC 25 Perception check to notice minute hints-magical glimmers, minute contortions, etc.-suggesting that the idol is actually animate. Overt actions, such as an idol moving or attacking, make its nature obvious to witnesses, and to others who make a Perception check (as previously noted) even 1 round after it moves."
      },
      "share abilities": {
        type: "Su",
        text: "An idol can share any spell-like ability that would normally only affect itself (as the caster) with any ally within 5 feet. The idol's creator or allies familiar with its abilities may request the idol grant them specific powers on its turn. Spell-like abilities usable in this way are marked with an asterisk (*). Skills In addition to the challenge of detecting a stationary idol, these constructs gain a +4 racial bonus on Stealth checks made to hide amid the materials that comprise their bodies."
      },
      "zombie fetish": {
        type: "Su",
        text: "Any zombie created within 30 feet of a bone idol rises as a fast zombie (see page 289 of the Pathfinder RPG Bestiary for details)."
      },
      "feverish fortitude": {
        type: "Su",
        text: "All creatures within 30 feet of a bone idol gain a +2 bonus on saving throws against disease and poison. The effect lasts as long as a creature remains within the bone idol's aura.",
        preText: "30 ft."
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

  "Jade Idol": {
    source: "What Lies In Dust",
    creatureType: "construct",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Diminutive",
    hd: 4,
    hdVal: 10,
    cr: 4,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 10
    },
    abilities: {
      str: 4,
      dex: 17,
      con: "-",
      int: 11,
      wis: 13,
      cha: 14
    },
    feats: [
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
        type: "primary"
      },
      {
        weapon: "Sliver",
        name: "Sliver",
        damage: "1d2"
      }
    ],
    immunities: [
      "construct traits",
      "Immune to cold, electricity, fire"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "bludgeoning and magic"
      }
    },
    space: "1 ft.",
    reach: "0 ft.",
    environment: "any",
    visualDescription: "Masterfully carved, this elegant jade figurine stands no more than a hand's breadth tall, yet its delicate limbs and incredible details bear all the features of a seductive maiden cast in miniature.",
    description: "From the moldering depths of the Sodden Lands to far away Tian Xia, jade idols stand watch over sacred temples, royal tombs, the monuments of powerful ancients, and the hidden lairs of plotting assassins and cruel wizards. Crafted primarily to serve as unassuming killers, jade idols possess unnatural patience, waiting for weeks, months, or even years for the opportune time when they might be delivered into their victims' hands and forgotten before striking. Jade idols are also particularly valued for their ability to transform living flesh into a stone similar in appearance to jade, but far more brittle and ultimately worthless (a DC 14 Appraise or Knowledge [nature] check reveals the difference). Regardless of the stone's value, the tombs of many forgotten dynasties bear small legions of jade idols, left by their departed masters to keep the residents preserved in lifeless jade for all time.",
    organization: "solitary",
    languages: "understands creator's language (cannot speak)",
    spellLikeAbilities: [
      {
        name: "delay poison",
        casterLevel: 7,
        timesPerDay: -1
      },
      {
        name: "detect poison",
        casterLevel: 7,
        timesPerDay: -1
      },
      {
        name: "pass without trace",
        casterLevel: 7,
        timesPerDay: 3
      },
      {
        name: "summon monster i",
        casterLevel: 7,
        limitations: "viper only",
        timesPerDay: 3
      },
      {
        name: "neutralize poison",
        casterLevel: 7,
        timesPerDay: 1
      },
      {
        name: "poison",
        casterLevel: 7,
        timesPerDay: 1
      },
      {
        name: "true strike",
        casterLevel: 7,
        timesPerDay: 1
      }
    ],
    skills: {
      Perception: {
        ranks: 4
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
      "jade breath": {
        type: "Su",
        text: "As a standard action once every 1d4 rounds, a jade idol can exhale a breath of gas that unerringly snakes its way through the air to envelop a single target within 50 feet. If the target is reduced to 0 Dexterity, it is instantly turned to jade-colored stone."
      },
      "venom affinity": {
        type: "Su",
        text: "Any poisonous animal or vermin that comes within 10 feet of a jade idol or a creature bearing the idol must make a DC 14 Will save or be charmed as per the spell charm animal. Beasts affected by this effect remain charmed for 10 minutes, obeying either the idol's will or its bearer's. Any creature that makes its save cannot be affected by the same jade idol's venom affinity for the next 24 hours. The save DC is Charisma-based."
      },
      inanimate: {
        type: "Ex",
        text: "An idol is effectively a statuette and does little to suggest otherwise. Spending most of its existence perfectly motionless, a stationary idol is indistinguishable from a normal inanimate object. Unless noted in its description, an idol can make use of the majority of its special abilities without moving, though the round after it does so observers can make a DC 25 Perception check to notice minute hints-magical glimmers, minute contortions, etc.-suggesting that the idol is actually animate. Overt actions, such as an idol moving or attacking, make its nature obvious to witnesses, and to others who make a Perception check (as previously noted) even 1 round after it moves."
      },
      "share abilities": {
        type: "Su",
        text: "An idol can share any spell-like ability that would normally only affect itself (as the caster) with any ally within 5 feet. The idol's creator or allies familiar with its abilities may request the idol grant them specific powers on its turn. Spell-like abilities usable in this way are marked with an asterisk (*). Skills In addition to the challenge of detecting a stationary idol, these constructs gain a +4 racial bonus on Stealth checks made to hide amid the materials that comprise their bodies. Tainted Air (Su) All creatures within 30 feet of a jade idol take a -2 penalty on saving throws against poison. The effect lasts as long as a creature remains within the jade idol's aura."
      },
      "tainted air": {
        type: "Su",
        text: "All creatures within 30 feet of a jade idol take a -2 penalty on saving throws against poison. The effect lasts as long as a creature remains within the jade idol's aura.",
        preText: "30 ft."
      }
    }
  },

  "Wood Idol": {
    source: "What Lies In Dust",
    creatureType: "construct",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Diminutive",
    hd: 2,
    hdVal: 10,
    cr: 1,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 10
    },
    abilities: {
      str: 3,
      dex: 11,
      con: 10,
      int: 5,
      wis: 13,
      cha: 13
    },
    feats: [
      {
        name: "Alertness",
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
        weapon: "Splinter",
        name: "Splinter",
        damage: "1d2"
      }
    ],
    defense: {},
    space: "1 ft.",
    reach: "0 ft.",
    environment: "any",
    visualDescription: "Polished stones form the soulless eyes of this small yet bizarrely crafted wooden effigy. Shaped into the form of some inscrutable deity or spirit, its exotically carved features contort in a primeval scowl.",
    description: "Among rare druidic circles, tribes of the deep jungle, and the mysterious people of the distant west, wood idols frequently serve as representations of powerful spirits of the wilds, who these nature devotees propitiate with sacrifices. The superstitions of strange shamans hold that spirits possess the idols when the sacrifices are made, consuming the offering before returning from whence they came. Yet those who would offend these forces must beware, as they manipulate eldritch powers of the world and might curse one's every effort. While many question the truths of such beliefs, few who impugn the might of such spirits survive the ire of their shaman-creators' devout congregations.",
    organization: "solitary",
    languages: "understands creator's language (cannot speak)",
    spellLikeAbilities: [
      {
        name: "detect animals or plants",
        casterLevel: 3,
        timesPerDay: -1
      },
      {
        name: "warp wood",
        casterLevel: 3,
        timesPerDay: -1
      },
      {
        name: "create water",
        casterLevel: 3,
        timesPerDay: 3
      },
      {
        name: "goodberry",
        casterLevel: 3,
        timesPerDay: 3
      },
      {
        name: "tree shape",
        casterLevel: 3,
        timesPerDay: 3
      },
      {
        name: "barkskin",
        casterLevel: 3,
        timesPerDay: 1
      },
      {
        name: "entangle",
        casterLevel: 3,
        timesPerDay: 1
      }
    ],
    skills: {
      Perception: {
        ranks: 2
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
      "primeval curse": {
        type: "Su",
        text: "Once per day, a wood idol can force a creature within 15 feet to make a DC 12 Will save or be cursed. This curse functions similarly to the spell bestow curse, except that it can only either decrease an ability score by -4 or cause a -2 penalty on attack rolls, saves, ability checks, and skill checks. In addition, while affected, the skin of the target takes on a rough, wooden appearance. A wood idol's curse can only affect one creature at a time, and should it curse another creature, the first target is no longer affected. This effect can be removed by remove curse or by eating a goodberry. The save DC is Charisma based. Regeneration (Ex) A wood idol's regeneration only functions while it is standing on wood, grass, or earth. Fire deals normal damage to a wood idol."
      },
      inanimate: {
        type: "Ex",
        text: "An idol is effectively a statuette and does little to suggest otherwise. Spending most of its existence perfectly motionless, a stationary idol is indistinguishable from a normal inanimate object. Unless noted in its description, an idol can make use of the majority of its special abilities without moving, though the round after it does so observers can make a DC 25 Perception check to notice minute hints-magical glimmers, minute contortions, etc.-suggesting that the idol is actually animate. Overt actions, such as an idol moving or attacking, make its nature obvious to witnesses, and to others who make a Perception check (as previously noted) even 1 round after it moves. Incombustible Aura (Su) All creatures within 30 feet of a wood idol gain fire resistance 10. This effect lasts as long as a creature remains within the wood idol's aura. Any time a being makes use of this resistance to any degree, the wood idol takes 1 point of normal damage, appearing more and more charred as it takes damage. This ability ceases to function should a wood idol have only 1 hit point and does not reactivate until it regains hit points."
      },
      "share abilities": {
        type: "Su",
        text: "An idol can share any spell-like ability that would normally only affect itself (as the caster) with any ally within 5 feet. The idol's creator or allies familiar with its abilities may request the idol grant them specific powers on its turn. Spell-like abilities usable in this way are marked with an asterisk (*). Skills In addition to the challenge of detecting a stationary idol, these constructs gain a +4 racial bonus on Stealth checks made to hide amid the materials that comprise their bodies."
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        damageType: "on natural ground",
        value: 5
      },
      "incombustible aura": {
        type: "Su",
        text: "All creatures within 30 feet of a wood idol gain fire resistance 10. This effect lasts as long as a creature remains within the wood idol's aura. Any time a being makes use of this resistance to any degree, the wood idol takes 1 point of normal damage, appearing more and more charred as it takes damage. This ability ceases to function should a wood idol have only 1 hit point and does not reactivate until it regains hit points.",
        preText: "30 ft."
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
      "vulnerability to fire"
    ]
  },

  "Stone Idol": {
    source: "What Lies In Dust",
    creatureType: "construct",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Diminutive",
    hd: 3,
    hdVal: 10,
    cr: 3,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 10
    },
    abilities: {
      str: 12,
      dex: 8,
      con: "-",
      int: 7,
      wis: 14,
      cha: 14
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
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
    immunities: [
      "Immune to cold, electricity, fire, sonic"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "-"
      },
      naturalArmor: 4
    },
    space: "1 ft.",
    reach: "0 ft.",
    environment: "any",
    visualDescription: "Doubtlessly once an impressive piece, time and cracks mar the sculpted stone visage of some sneering lord. Flecks of onyx glisten within its eyes, gazing across the gulf into ages past.",
    description: "Rarely seen in civilized lands, stone idols rest among the ruins of ancient civilizations, the sole inheritors of incredible secrets and lost lore. Sculpted in the images of forgotten lords and mythic beasts, these statuettes transfix their foes with a suggestion of what wonders their polished eyes might once have witnessed.",
    organization: "solitary",
    languages: "understands creator's language (cannot speak)",
    spellLikeAbilities: [
      {
        name: "animal trance",
        casterLevel: 5,
        timesPerDay: -1
      },
      {
        name: "detect snares and pits",
        casterLevel: 5,
        timesPerDay: -1
      },
      {
        name: "magic stone",
        casterLevel: 5,
        timesPerDay: -1
      },
      {
        name: "doom",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "hypnotic pattern",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "reduce person",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "bear's endurance",
        casterLevel: 5,
        timesPerDay: 1
      },
      {
        name: "hold person",
        casterLevel: 5,
        timesPerDay: 1
      }
    ],
    skills: {
      Perception: {
        ranks: 3
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
      suggestive: {
        type: "Su",
        text: "Those fascinated by a stone idol's animal trance or hypnotic pattern spell-like ability become highly susceptible to the suggestions of others nearby. Any creature can make a suggestion (as per the spell suggestion) to a fascinated creature, who must then make a DC 15 Will save or proceed to follow the suggestion. Any creature who makes a suggestion is understood by the fascinated creature, as per the spell tongues or speak with animals. A suggestion lasts for 1 hour, even if a creature is no longer being fascinated. A fascinated creature follows only the first suggestion it fails its saving throw against and no additional suggestions. The DC is Charisma-based and includes a +2 racial bonus."
      },
      inanimate: {
        type: "Ex",
        text: "An idol is effectively a statuette and does little to suggest otherwise. Spending most of its existence perfectly motionless, a stationary idol is indistinguishable from a normal inanimate object. Unless noted in its description, an idol can make use of the majority of its special abilities without moving, though the round after it does so observers can make a DC 25 Perception check to notice minute hints-magical glimmers, minute contortions, etc.-suggesting that the idol is actually animate. Overt actions, such as an idol moving or attacking, make its nature obvious to witnesses, and to others who make a Perception check (as previously noted) even 1 round after it moves. Preserve Memory (Su) Any sentient creature with a Charisma of 14 or higher can copy one of its memories into a stone idol. To do so, the creature must remain in contact with a stone idol for 1 minute and concentrate on a memory to be duplicated. This memory must be 5 minutes or shorter and be of an actual event; imaginings cannot be reproduced. After a memory has been duplicated, it remains in the stone idol until a new memory is recorded. A memory held by a stone idol can be altered via the spell modify memory. A memory held within a stone idol can be viewed by any creature that comes into mental contact with the construct and by the use of detect thoughts, mind-reading effects, or similar abilities, even one redirected by its stony mind ability."
      },
      "share abilities": {
        type: "Su",
        text: "An idol can share any spell-like ability that would normally only affect itself (as the caster) with any ally within 5 feet. The idol's creator or allies familiar with its abilities may request the idol grant them specific powers on its turn. Spell-like abilities usable in this way are marked with an asterisk (*). Skills In addition to the challenge of detecting a stationary idol, these constructs gain a +4 racial bonus on Stealth checks made to hide amid the materials that comprise their bodies. Stony Mind (Su) Any divination spell targeting a creature or object within 30 feet of a stone idol instead targets the construct. Thus, for the purposes of any spell that reveals auras, those affected are treated as being under the effects of the spell misdirection, while spells like detect thoughts receive nothing more than vague impressions. Should detect thoughts or another mind-reading effect target a stone idol that contains a memory, the ability user instantly gains the memory held within."
      },
      "stony mind": {
        type: "Su",
        text: "Any divination spell targeting a creature or object within 30 feet of a stone idol instead targets the construct. Thus, for the purposes of any spell that reveals auras, those affected are treated as being under the effects of the spell misdirection, while spells like detect thoughts receive nothing more than vague impressions. Should detect thoughts or another mind-reading effect target a stone idol that contains a memory, the ability user instantly gains the memory held within.",
        preText: "30 ft."
      }
    }
  },

  Lar: {
    source: "What Lies In Dust",
    creatureType: "outsider",
    subTypes: [
      "good",
      "incorporeal",
      "lawful",
      "native"
    ],
    alignments: [
      "Lawful Good"
    ],
    size: "Medium",
    hd: 6,
    hdVal: 10,
    cr: 5,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 0,
      maneuverability: "Perfect",
      fly: 30
    },
    abilities: {
      str: 10,
      dex: 17,
      con: 13,
      int: 12,
      wis: 15,
      cha: 14
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Improved Lightning Reflexes",
        type: "General"
      },
      {
        name: "Lightning Reflexes",
        type: "General"
      }
    ],
    attacks: [],
    defense: {},
    space: "2-1/2 ft.",
    reach: "0 ft.",
    environment: "any",
    visualDescription: "A stirring in the air and rustle through the room reveals a presence-a subtle aura both cautious and curious.",
    description: "Sometimes referred to as \"watchsouls,\" lares are subtle, benevolent spirits that prefer to spend their existence on the Material Plane minding the homes and fortunes of deserving mortals. Kind but aloof, lares watch over their mortal wards and help only when they are most needed. Yet where their homes are intruded upon or their charges imperiled, they prove frighteningly effective guardians, turning everything in their tiny dominions into living weapons. Lares are innately invisible, making the nature of their existence something of a mystery. Originating from the Upper Planes, these spirits have no true bodies and appear only as vague spectral eddies to those capable of seeing invisible beings. Yet while their forms prove vague, their blessings are undeniable. Ecology Although formed upon the Upper Planes, lares find themselves drawn to the Material Plane. While some seek out mortal souls to watch over out of some innate sense of protectiveness, others feel a more specific draw, searching out members of specific races, nations, heritages, or families. Upon taking up residence in a home of their choosing, what motivates and sustains these benevolent spirits is little understood. They seem to take sustenance from positive emotions, growing weak if left in places with quarrelsome residents or that fall to ruin. Lares never seem to die from negative emotions or abandonment, though, merely biding their time in the hopes that their dwelling might someday again host amenable residents. Habitat & Society Mortals sharing their home with a lar often create household shrines to them. These tiny sanctuaries, called lararia (singular lararium), serve to house the lar's statuae. Though the lar does not require offerings, many families give them anyway, treating their spirit with reverence. Over time, the lar might become like a member of the family, with the spirit offering advice and taking a keen interest in the raising of children and protection of the home. Once a family has been chosen, a lar does not leave its dwelling, not even to follow the family during extended leaves. The only exception to this is if the family takes the statua with them, though this is not a practice lares encourage. Since the statuae are their anchors to the Material Plane, lares are insecure about exposing them to the outside world where they might be lost, stolen, or damaged. Summoning a Lar A tradtion said to have been created and passed down since the days of lost Azlant, many families, homes, and even shops and public buildings along the Inner Sea invite lares to take up residence, seeking the blessings of the divine. Few, however, know when their invitations have been accepted, though, as a lar might prove aloof for months or years as it gauges its new wards. In order to welcome such spirits, families construct tiny effigies called statuae in the shapes of honored ancestors, regional heroes, or fanciful creatures, in which the spirits might come and reside. These statuae are non-magical effigies, typically composed of stone or fine wood and anointed with fine lacquers and oils, requiring 2 days, a successful DC 20 Craft check, and 40 gp to create. Once created, these Diminuative figures typically have a hardness of 5 and 10 hit points. If destroyed, a statua may be recreated in this same method. Summoning a lar is a more elaborate affair, requiring nightly prayers and small offerings of fruit, incense, flowers, and similar gifts to the statuae. For each night one prays to the figure for their home or family's protection there is a cumulative 1% chance a lar hears and turns its attention to the petitioner. This attention doesn't mean that a lar will aid a home, but merely that it has heard the prayer, and it might yet decide that its philosophies and virtues are incompatible with the supplicant. If such is the case, the lar quietly ignores the prayer, and the petitioner's chance to gain a lar's attention resets to 0%, all entirely unknown to the mortal. When a lar does accept an invitation, it may immediately plane shift to the associated statua, claiming it as its own. A lar typically makes some subtle acknowledgement that it has come, perhaps slightly altering its statua's appearance or lighting candles upon its arrival. It still often takes months, even years, for a lar to become intimate with a family and make its presence actively known, and some never do. Lares in Golarion Lares exhibit extremely variable personalities, and while some prove aloof even after centuries, others become gregarious members of their protected families. Noted here are just two such dichotomous lares rumored to guard sites in Golarion. Uncle Penates: When only the members of the Aphinius family of Taldor are present, their home's lar possesses the expensive painting within their drawing room. From its hidden statua just behind the painting, the boisterous spirit delights in animating the fine oils to make it appear as though the paunchy and opulently dressed Taldan nobleman pictured is personally relaxing and conversing with the family members nearby. None of the family know the nature of the effect, many believing the house is haunted by the spirit of their ancestor, but none fear or begrudge the presence of kind old Uncle Penates. Wolz: This lar has long lingered in the burnt-out ruin of an old stone cottage just east of Windsong Abby in Varisia. His wolfshaped statua having fallen beneath a pile of hearth stones, Wolz subtly watches over any goodly travelers who come to rest in the tiny ruin, lighting a fire, providing water, and warding off danger as if they were his long-lost family.",
    organization: "solitary",
    languages: "telepathy (100 ft.)",
    spellLikeAbilities: [
      {
        name: "create water",
        casterLevel: 7,
        timesPerDay: -1
      },
      {
        name: "detect evil",
        casterLevel: 7,
        timesPerDay: -1
      },
      {
        name: "ghost sound",
        casterLevel: 7,
        timesPerDay: -1
      },
      {
        name: "guidance",
        casterLevel: 7,
        timesPerDay: -1
      },
      {
        name: "lullaby",
        casterLevel: 7,
        timesPerDay: -1
      },
      {
        name: "mage hand",
        casterLevel: 7,
        timesPerDay: -1
      },
      {
        name: "mending",
        casterLevel: 7,
        timesPerDay: -1
      },
      {
        name: "message",
        casterLevel: 7,
        timesPerDay: -1
      },
      {
        name: "open/close",
        casterLevel: 7,
        timesPerDay: -1
      },
      {
        name: "prestidigitation",
        casterLevel: 7,
        timesPerDay: -1
      },
      {
        name: "purify food and drink",
        casterLevel: 7,
        timesPerDay: -1
      },
      {
        name: "bless",
        casterLevel: 7,
        timesPerDay: 3
      },
      {
        name: "bless water",
        casterLevel: 7,
        timesPerDay: 3
      },
      {
        name: "dancing lights",
        casterLevel: 7,
        timesPerDay: 3
      },
      {
        name: "produce flame",
        casterLevel: 7,
        timesPerDay: 3
      },
      {
        name: "protection from evil",
        casterLevel: 7,
        timesPerDay: 3
      },
      {
        name: "sanctuary",
        casterLevel: 7,
        timesPerDay: 3
      },
      {
        name: "unseen servant",
        casterLevel: 7,
        timesPerDay: 3
      },
      {
        name: "calm emotions",
        casterLevel: 7,
        timesPerDay: 1
      },
      {
        name: "continual flame",
        casterLevel: 7,
        timesPerDay: 1
      },
      {
        name: "gust of wind",
        casterLevel: 7,
        timesPerDay: 1
      },
      {
        name: "pyrotechnics",
        casterLevel: 7,
        timesPerDay: 1
      },
      {
        name: "whispering wind",
        casterLevel: 7,
        timesPerDay: 1
      }
    ],
    skills: {
      Craft0: {
        subSkill: "any two",
        ranks: 6
      },
      Heal: {
        ranks: 9
      },
      "Knowledge (local)": {
        ranks: 9
      },
      "Knowledge (religion)": {
        ranks: 6
      },
      Perception: {
        ranks: 6
      },
      "Sense Motive": {
        ranks: 6
      }
    },
    special: {
      suggestion: {
        type: "Sp",
        text: "A lar can influence creatures as per the spell suggestion, with some variations, at will. First, to influence a creature in this manner, a lar must occupy the same square as its target. The lar is considered to be able to speak any language and communicate with any creature-even animals and vermin (which are usually immune to mind-affecting effects)-for the purposes of this effect. The target may attempt to resist a lar's suggestion by making a DC 17 Will save. The save DC is Charisma-based and includes a +2 racial bonus."
      },
      "genius loci": {
        type: "Su",
        text: "As a free action, a lar can possess any inanimate object with which it comes into contact, thereby animating it under its control. The object and lar merge, taking on the statistics of an animated object of the same size (see animated objects in the Pathfinder RPG Bestiary). A lar may possess any object of Tiny to Large size. If the animated object is destroyed or targeted by dispel good, the lar is expelled and takes 1d6 points of damage per size category of the possessed object-1d6 for a Tiny object, 2d6 for a Small object, and so on. The lar is then free to possess another object, if one is available. If a lar is reduced to 0 hit points or fewer, it is banished to its statua for 24 hours, after which it is fully healed. If the lar does not have a statua, or the statua is destroyed while it is at 0 or fewer hit points, the lar is killed."
      },
      "natural invisibility": {
        type: "Su",
        text: "This ability is constant, allowing a lar to remain invisible even when attacking. This ability is inherent and not subject to the invisibility purge spell."
      },
      statua: {
        type: "Su",
        text: "All lares rely on a small stone figure, known as a statua, for survival. This figurine serves as a lar's home, resting place, and tie to the Material Plane. Lares typically rest within their statua, finding it a comfortable place from which to oversee their surroundings. For every round a lar spends doing nothing besides resting within its statua, it regenerates 1 point of damage. However, being separated from the statua for extended periods of time weakens the lar. For every 5 hours a lar remains outside of its statua, it takes 1d6 points of nonlethal damage. Only returning to the statua can heal this damage. If a lar falls to 0 hit points, even from nonlethal damage, it is banished back to the Upper Planes. While a lar's statua exists, the connected lar is treated as a native outsider. Any attempt to banish the lar-through dismissal or a similar spell-merely transports the creature back to its statua. If the statua is destroyed, a lar can be dismissed from the Material Plane as normal."
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        damageType: "in statua",
        value: 1
      }
    }
  },

};

export const Rise_Of_The_Runelords_Anniversary_EditionCreatures = {
  "Black Magga": {
    source: "Rise Of The Runelords Anniversary Edition",
    creatureType: "outsider",
    subTypes: [
      "aquatic",
      "native"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Gargantuan",
    hd: 15,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "All-Around Vision",
      "Darkvision 60 ft."
    ],
    speed: {
      base: 20,
      swim: 60
    },
    abilities: {
      str: 37,
      dex: 10,
      con: 31,
      int: 25,
      wis: 18,
      cha: 20
    },
    feats: [
      {
        name: "Awesome Blow",
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
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "energy drain",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Tentacle",
        name: "4 Tentacles",
        specialAbility: "grab",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to death effects, mind-affecting effects, petrification, polymorph"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "cold iron and magic"
      },
      SR: {
        value: 26
      },
      naturalArmor: 24
    },
    space: "20 ft.",
    reach: "20 ft.",
    environment: "the Storval Deep",
    visualDescription: "This enormous creature's serpentine neck supports a leering reptilian head-its body is a wriggling mass of tentacles.",
    description: "Black Magga is one of the favored servants of Lamashtu and an embodiment of the goddess's reign over beasts, monsters, and madness. As an unholy auger of her will, Black Magga originally sought to confound the works of the civilized world, spread fear of monsters and the wilds, and direct Lamashtu's lesser servants in acts of depravity and bloodshed. Black Magga arrived in the Storval Deep not long after Karzoug flooded the immense quarry, and her presence in the newly formed lake brought much misery and dread to the Thassilonians who dwelt on the lake's shores or sailed its surface. Karzoug's interest in the region waned quickly, and he never bothered to take steps against the monster, prompting many to whisper that the runelord made a bargain with Lamashtu to place the monster in the Storval Deep, perhaps to hide some sort of great secret he had sunk beneath the waters. In any event, it was said that the goddess spoke directly to Black Magga, and for many, the words of the monster were equal to the commands of Lamashtu herself. Bearing a head like a plesiosaur atop a thrashing mass of tentacles and eyes, Black Magga is an immense creature indeed. Although she is effectively immortal until slain, she has spent many of the more than 10,000 years since she first came to Varisia in deep hibernation. These slumbers could last for a dozen centuries or more at a time, and are punctuated by relatively short periods of activity that generally last for only a few decades. These long periods of sleep have had something of a debilitating effect on Black Magga, for with each century of slumber, she grows weaker. She is now but a shadow of her original power. That she remains as powerful as she does today speaks volumes to the terrible wrath she must have possessed back during the height of Thassilon, before the advent of Earthfall changed everything. The Myth of Black Magga Fisherfolk and woodsmen who have ventured near the Storval Deep have long told tales of a fell monster rising from the depths. Below are a few commonly held but mistaken beliefs about Black Magga-although they may well have been true during the times of ancient Thassilon, when she was at the height of her power. BLOOD TONGUE: Many who have seen Black Magga and lived can never speak of their experiences. Supposedly, when they attempt to tell the tale, black blood wells from their throats and into their mouths, choking their words. Thus, far fewer claim to have seen Black Magga than actually have. GOD-PROOF: Black Magga is older than many gods. Divine magic is said to have little effect whatsoever on her abominable form. Anyone who cuts Magga's black heart from her vile chest and bathes in its putrescent blood will likewise become invulnerable to the power of the gods. STORM BRINGER: Sightings of Black Magga often herald powerful storms and hurricanes. It is said that the beast summons these storms to pull victims into her watery domain, whereupon she captures them, consumes them, and transforms them into monstrous, vermicular horrors. Mothers of Oblivion Lesser versions of Black Magga are said to dwell in deep lakes in other parts of the world. Known as Mothers of Oblivion, these creatures have the same basic statistics as Black Magga, except that they have only 10 Hit Dice and are Huge rather than Gargantuan. Monstrous creatures of chaos and madness, the abominable Mothers of Oblivion are said to have been created by the goddess of monsters to serve as mouthpieces and leaders among her savage minions. Some esoteric texts-sacrilegious even to Lamashtu's profane church-claim that the Mothers of Oblivion are actually sisters of Lamashtu, subjugated by the goddess, robbed of their divinity, and cast down to Golarion as her twisted servitors. Whatever their heritage, for uncounted centuries the Mothers of Oblivion have been among the favored servants of Lamashtu and throughout history have risen to mete out her unholy wrath. Rare in the extreme-and despite what the fearful mortal races call them-these monstrosities seem to have no ability to reproduce, though some whisper that a select few are capable of biting off their own tongues to produce strange, wormlike spawn. Mothers of Oblivion slink in the darkest, deepest reaches of the world, shunning the light of day as well as the gaze of insectlike mortals, who would gawk and abandon their pathetic minds at the merest glimpse of such unknowable horrors. The deepest reaches of oceans and the oldest lakes serve as redoubts for these forsaken queens of madness. From these depths, they sate themselves on sea creatures, the offerings of their servants, and the occasional unwary victim dragged screaming from the surface. They are careful to keep their presence secret from those of the world above. From the depths, Mothers of Oblivion form intricate hierarchies of servants and go-betweens, reaching their black tentacles through the societies of amphibious intermediaries into the demesnes of greater monstrosities and larger cities and civilizations alike.",
    organization: "solitary",
    languages: "Abyssal, Celestial, Common, Draconic, Infernal, Thassilonian",
    spellLikeAbilities: [
      {
        name: "invisibility purge",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "death knell",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "prayer",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "demand",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "dimensional anchor",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "divination",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "dominate person",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "command, greater",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "commune",
        casterLevel: 15,
        timesPerDay: 1
      },
      {
        name: "dream",
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
        ranks: 22
      },
      Intimidate: {
        ranks: 18
      },
      "Knowledge (arcana)": {
        ranks: 18
      },
      "Knowledge (history)": {
        ranks: 15
      },
      "Knowledge (nature)": {
        ranks: 15
      },
      "Knowledge (planes)": {
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
      },
      Spellcraft: {
        ranks: 18
      },
      Stealth: {
        ranks: 15
      },
      Survival: {
        ranks: 15
      },
      Swim: {
        ranks: 7
      }
    },
    special: {
      "breath of madness": {
        type: "Su",
        text: "Black Magga can exhale a cloud of foul-smelling, poisonous breath as a standard action once every minute. This cloud of black smoke fills a 60-foot cone. All creatures in the area take 1d6 points of Wisdom damage and become confused for 1d6 rounds (a DC 27 Will save halves the Wisdom damage and negates the confusion effect). This is a mind-affecting poison effect. The save DC is Constitution-based. This breath weapon cannot be used while underwater."
      },
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "2d6+11"
      },
      "energy drain": {
        universalMonsterAbility: "Energy Drain",
        saveDC: 10,
        levels: 2
      },
      "transdimensional tentacles": {
        type: "Su",
        text: "Black Magga's tentacles allow her to see into and infiltrate the Ethereal Plane and the Plane of Shadow while she is on the Material Plane. This allows her not only to be aware of these planes and the creatures there, but also to shift her tentacles through these planes to attack their inhabitants. She can even phase her tentacles in and out of existence, effectively reaching through walls and other solid barriers to attack foes on the other side, provided that area is not warded by a dimensional lock or similar effect. She can grapple foes with her tentacles normally, but cannot pull grappled foes or objects through planes as her tentacles shift between them."
      },
      "warp dimensions": {
        type: "Su",
        text: "Black Magga's presence distorts the dimensions. Any creature that attempts to utilize a teleportation effect while within 300 feet of Black Magga must succeed at a DC 21 caster level check or the teleport effect fails. If the effect fails, the creature that attempted to create that effect must succeed at a DC 27 Fortitude save or be nauseated for 1d6 rounds. The save DC is Constitution-based."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    },
    resistances: [
      {
        damageType: "acid",
        value: 20
      },
      {
        damageType: "cold",
        value: 20
      }
    ]
  },

  Carrionstorm: {
    source: "Rise Of The Runelords Anniversary Edition",
    creatureType: "undead",
    subTypes: [
      "swarm"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Tiny",
    hd: 2,
    hdVal: 8,
    cr: 1,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 10,
      maneuverability: "Good",
      fly: 40
    },
    abilities: {
      str: 1,
      dex: 11,
      con: "-",
      int: 2,
      wis: 14,
      cha: 13
    },
    feats: [
      {
        name: "Improved Initiative",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "swarm",
        name: "swarm",
        specialAbility: "distraction",
        damage: "1d6"
      }
    ],
    defense: {},
    space: "10 ft.",
    reach: "0 ft.",
    environment: "any near ghouls",
    visualDescription: "Bits of feather and flesh buzz around this swarm of rotting ravens like flies, countless lifeless eyes staring out from the chaos.",
    description: "Where the dead walk, the carrion birds follow. In most cases, the unfortunate birds that feast on the remains of fallen undead creatures simply grow diseased and die. Yet the flesh of some ghouls has an altogether different effect upon such scavengers, and when they die of the poisoned repast, they do not stay dead for long. Alone, an undead crow or vulture is little more than a hideous mockery, but in rare cases where ghoulish activity is thick, entire colonies of carrion birds can succumb to undeath, retaining their flock mentality yet no longer seeking the flesh of the freshly dead to sate their hunger. Carrionstorms, as these flocks of undead birds are called, find brief respite from their morbid hunger only when their meals are warm and screaming. Carrionstorms are typically found near graveyards, haunted structures, or abandoned villages where ghouls have been active. Many necromancers and cultists of Urgathoa have a particular fondness for carrionstorms, and since the birds have a strange respect for the symbol of the Pallid Princess, rookeries of them are often found roosting in the nooks of the goddess of undeath's macabre cathedrals. Although the individual undead birds that make up a carrionstorm are little more intelligent than they were in life, as a whole, a carrionstorm forms a rudimentary hive mind that grants its members a slight bit more intellect than the typical bird. This not only allows the undead birds to utilize basic tactics, but allows rudimentary speech as well. Most carrionstorms understand a few dozen words in Necril, the language of the dead, and the sound of thousands of these undead carrion birds croaking out strange words can be truly unsettling to those who aren't prepared for the horror. This same hive mind allows necromancers to treat an entire carrionstorm as a single undead creature with regard to the effects of spells like command undead and control undead, or feats like Command Undead. The swarms make excellent scouts, and even better threats against small towns and superstitious communities.",
    organization: "solitary, flock (2-4 swarms), or murder (5-12 swarms) Languages Necril",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 1
      },
      Perception: {
        ranks: 1
      }
    },
    special: {
      "pallid bond": {
        type: "Ex",
        text: "A carrionstorm never initiates an attack on a creature that openly wears a symbol of Urgathoa or that is itself undead. If attacked first by such a creature, the carrionstorm's swarm attack deals only 1d3 points of damage to that creature rather than the usual 1d6 points. Vulnerable to Channeled Energy (Ex) A carrionstorm takes 150% as much damage as normal from channeled positive energy."
      }
    }
  },

  Forgefiend: {
    source: "Rise Of The Runelords Anniversary Edition",
    creatureType: "outsider",
    subTypes: [
      "earth",
      "extraplanar"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Large",
    hd: 11,
    hdVal: 10,
    cr: 10,
    racialFeatures: [
      "See in Darkness"
    ],
    speed: {
      base: 20,
      burrow: 20,
      earth: "glide"
    },
    abilities: {
      str: 24,
      dex: 14,
      con: 25,
      int: 15,
      wis: 12,
      cha: 15
    },
    feats: [
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Greater Sunder",
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
        name: "Improved Sunder",
        type: "Combat"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Quicken Spell-Like Ability",
        type: "Monster",
        value: "Produce flame",
        choiceSource: "Quicken Spell-Like Ability"
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
        specialAbility: "rend armor",
        damage: "1d6",
        type: "primary"
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
      }
    ],
    immunities: [
      "Immune to fire, poison"
    ],
    defense: {
      naturalArmor: 14
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any underground (Plane of Earth)",
    visualDescription: "A massive, fire-filled maw splits the belly of this lumbering iron-skinned fiend, whose short arms end in razor-sharp claws.",
    description: "Scanderigs, more commonly known as \"forgefiends,\" look like large, heavily armored, barrel-shaped giants, with enormous mouths in their bellies in addition to the normal-sized ones in their heads. They are native to the Plane of Earth, but sometimes make their way through subterranean portals onto the Material Plane, where they gorge themselves on rich and relatively uncontested mineral veins. A forgefiend might live quite happily inside a mountain's heart for centuries, only causing trouble when the ore runs out or interlopers attempt to mine its territory. Forgefiends are particularly feared in many dwarven societies. In addition to their penchant for destroying deep forges, they are often portrayed as boogeyman-like figures for frightening dwarven children and instilling good smithing habits-for it is said, \"For every scrap of slag you waste, a scanderig is making haste. Those who use excessive ore find forgefiends scratching at their door!",
    organization: "solitary or team (2-6)",
    languages: "Common, Dwarven, Infernal, Terran",
    spellLikeAbilities: [
      {
        name: "pass without trace",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "major image",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "passwall",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "shatter",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "stone shape",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "deeper darkness",
        casterLevel: 10,
        timesPerDay: 3
      },
      {
        name: "dimensional anchor",
        casterLevel: 10,
        timesPerDay: 3
      },
      {
        name: "flesh to stone",
        casterLevel: 10,
        timesPerDay: 3
      },
      {
        name: "produce flame",
        casterLevel: 10,
        limitations: "Metamagic: Quicken ",
        timesPerDay: 3
      },
      {
        name: "wall of fire",
        casterLevel: 10,
        timesPerDay: 3
      },
      {
        name: "wall of stone",
        casterLevel: 10,
        timesPerDay: 3
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 18
      },
      Climb: {
        ranks: 14
      },
      Craft0: {
        subSkill: "traps",
        ranks: 11
      },
      "Disable Device": {
        ranks: 14
      },
      "Knowledge (dungeoneering)": {
        ranks: 14
      },
      Perception: {
        ranks: 11
      },
      "Sense Motive": {
        ranks: 11
      },
      Stealth: {
        ranks: 11
      }
    },
    special: {
      "adamantine bite": {
        type: "Ex",
        text: "A forgefiend's bite attacks are treated as adamantine for the purposes of overcoming damage reduction."
      },
      "searing spew": {
        type: "Su",
        text: "A forgefiend can belch forth a searing pile of slag from its body maw as a standard action once every 1d4 rounds. This blob of molten metal affects any 10-foot-square area adjacent to the forgefiend. Any creature in this area takes 14d6 points of fire damage (Reflex DC 22 halves). The slag quickly cools, forming a rugged pile of worthless scrap and misshapen metal that is treated as difficult terrain-this stuff crumbles to powder in 1 hour. The save DC is Constitution-based."
      },
      "rend armor": {
        type: "Ex",
        text: "When a forgefiend hits with a bite attack, it chews any armor worn by the target-this grants the forgefiend a free sunder attempt against armor worn by the target if the victim fails a DC 22 Reflex save. A forgefiend also gains Greater Sunder and Improved Sunder as bonus feats. The save DC is Strength-based."
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

  Hungerer: {
    source: "Rise Of The Runelords Anniversary Edition",
    creatureType: "monstrous humanoid",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Huge",
    hd: 21,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "Darkvision 90 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 10,
      maneuverability: "Good",
      fly: 60
    },
    abilities: {
      str: 30,
      dex: 13,
      con: 20,
      int: 13,
      wis: 18,
      cha: 19
    },
    feats: [
      {
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Dodge",
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
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Quicken Spell-Like Ability",
        type: "Monster",
        value: "Stinking cloud",
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
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        bonuses: [
          {
            source: "inherent",
            value: 2,
            appliesTo: "damageType",
            damageType: "wisdom drain"
          }
        ],
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        bonuses: [
          {
            source: "inherent",
            value: 2,
            appliesTo: "damageType",
            damageType: "wisdom drain"
          }
        ],
        type: "primary"
      }
    ],
    immunities: [
      "Immune to acid, poison"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "cold iron and piercing"
      },
      SR: {
        value: 26
      },
      naturalArmor: 21
    },
    space: "15 ft.",
    reach: "15 ft.",
    environment: "cold mountains",
    visualDescription: "A hideous mound of shuddering, pustule-encrusted flesh, this bloated creature's gaping maw is filled with terrible teeth.",
    description: "Once regular lamias, these hideously deformed creatures are the result of terrible fleshwarping experiments that have rarely been repeated since the fall of Thassilon. The heads and torsos of these creatures are nearly 10 feet in diameter, and a typical hungerer weighs about 20,000 pounds. Hungerers are unnatural creatures, re-released into the world with Karzoug's awakening. These terrors live in constant pain and serve as living embodiments of hunger, insatiable in their constant quests for sustenance. Although they prefer to tear and rend living flesh, hungerers can consume almost any organic material, and might even gnaw on stone or metal without ill effect when nothing else is available.",
    organization: "solitary or feast (2-5)",
    languages: "Abyssal, Common, Giant, Thassilonian",
    spellLikeAbilities: [
      {
        name: "fly",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "grease",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "major image",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "ventriloquism",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "charm monster",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "gust of wind",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "stinking cloud",
        casterLevel: 15,
        limitations: "Metamagic: Quicken ",
        timesPerDay: 3
      },
      {
        name: "suggestion",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "deep slumber",
        casterLevel: 15,
        timesPerDay: 1
      },
      {
        name: "charm monster, mass",
        casterLevel: 15,
        timesPerDay: 1
      },
      {
        name: "mirror image",
        casterLevel: 15,
        timesPerDay: 1
      }
    ],
    skills: {
      Fly: {
        ranks: 28
      },
      Intimidate: {
        ranks: 21
      },
      Perception: {
        ranks: 21
      },
      "Sense Motive": {
        ranks: 21
      },
      Stealth: {
        ranks: 21
      }
    },
    special: {
      "devastating bite": {
        type: "Ex",
        text: "A hungerer's bite deals x4 damage on a successful critical hit. If this damage is enough to reduce a victim to negative hit points, the victim must succeed at a DC 30 Fortitude save to avoid being decapitated, bitten in half, or otherwise instantly killed by the horrific wound. The save DC is Strength-based."
      },
      "vile spew": {
        type: "Su",
        text: "Whenever a hungerer takes damage, the resulting wound spews a great gout of vile blood and acid. Any creature adjacent to a hungerer when it is wounded takes 2d6 points of acid damage (Reflex DC 25 negates). The save DC is Constitution-based. Wisdom Drain (Su) A hungerer drains 2 points of Wisdom each time it strikes a foe with its bite or claw attacks. Unlike with other kinds of ability drain attacks, a hungerer does not heal any damage when it uses its Wisdom drain."
      },
      stench: {
        universalMonsterAbility: "Stench",
        range: 30,
        duration: "DC 25",
        saveDC: 10
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

  Kuchrima: {
    source: "Rise Of The Runelords Anniversary Edition",
    creatureType: "monstrous humanoid",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 11,
    hdVal: 10,
    cr: 8,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 20,
      maneuverability: "Good",
      fly: 60
    },
    abilities: {
      str: 20,
      dex: 22,
      con: 19,
      int: 7,
      wis: 9,
      cha: 10
    },
    feats: [
      {
        name: "Deadly Aim",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
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
        specialAbility: "disease",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Talon",
        name: "2 Talons",
        damage: "1d4",
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
    immunities: [
      "Immune to disease, magic missile"
    ],
    defense: {
      naturalArmor: 6
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any mountains",
    visualDescription: "This vaguely humanoid creature has a vulture's head and wings for arms, and wields an enormous bow in its taloned feet.",
    description: "These foul creatures are a disgusting cross between humanoids and condors. Also known as the Eaters of the Dead, the kuchrimas are the lowest order of the lamia-kin, lacking even standard lamias' capability for spell-like abilities. They not only serve the function of common soldiers and scouts, but are also left to take care of the disposal of bodies, garbage, and other waste-most of which they feed upon. This habit results in their foul appearance and disease-ridden bite. Kuchrimas often wield giant bows in their powerful talons, holding the weapon in one talon and pulling the bowstring with the other in order to fire arrows with devastating effect. Kuchrimas have much in common with the condors they resemble, and are opportunistic hunters and scavengers. Bands of kuchrima hunters might fly dozens of miles from their communal aerie, using their keen sight to locate prey both small and large. In the extreme mountainous areas they inhabit, such meals often take the form of giant rams, mountain aurochs, and even the occasional mountaineer, though these disgusting creatures prefer their meals dead and rotting. Kuchrimas dwell principally in the thin air among the upper peaks of desolate mountain ranges, where they have gathered in enclaves or \"gluttonies.\" They have lived in a state of static barbarism since the diaspora following the fall of the Thassilonian Empire. In the thousands of years since that civilization's collapse, these lamia-kin have migrated to many mountainous regions throughout Golarion. These disease-ridden hunters strive to remain well out of sight of land-bound races, which they mistrust and fear in numbers. Should a new runelord or powerful harridan come into power and manage to locate these disparate gluttonies, however, the kuchrimas could be gathered into a formidable airborne force once again.",
    organization: "solitary, pair, flight (3-7), or gluttony (8-12)",
    languages: "Common, Giant, Thassilonian",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 11
      },
      Perception: {
        ranks: 11
      }
    },
    special: {
      "catastrophic shot": {
        type: "Ex",
        text: "Whenever a kuchrima makes only a single attack in a round with a bow, it increases the critical threat range of that shot to 18-20."
      },
      disease: {
        universalMonsterAbility: "Disease",
        type: "Ex",
        text: "Bite-Filth Fever; save Fort DC 19; onset 1d3 days; frequency 1/day; effect 1d3 Dex damage and 1d3 Con damage; cure 2 consecutive saves."
      },
      "oversized weapon": {
        type: "Ex",
        text: "A kuchrima can wield an oversized longbow in its talons while flying without incurring any penalty-this longbow can be one size category larger than normal (Large for most kuchrimas)."
      }
    }
  },

  "Scarlet Walker": {
    source: "Rise Of The Runelords Anniversary Edition",
    creatureType: "outsider",
    subTypes: [
      "evil",
      "extraplanar",
      "lawful"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Huge",
    hd: 16,
    hdVal: 10,
    cr: 12,
    racialFeatures: [
      "Bloodsense",
      "Darkvision 60 ft.",
      "Detect Thoughts"
    ],
    speed: {
      base: 40,
      climb: 40
    },
    abilities: {
      str: 24,
      dex: 29,
      con: 21,
      int: 14,
      wis: 20,
      cha: 21
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
        value: "Lesser confusion",
        choiceSource: "Quicken Spell-Like Ability"
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
        name: "2 Claws",
        specialAbility: "bleed",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Tentacle",
        name: "Tentacles",
        specialAbility: "bleed, paralysis",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to acid, cold, poison"
    ],
    defense: {
      SR: {
        value: 23
      },
      naturalArmor: 10
    },
    space: "15 ft.",
    reach: "30 ft.",
    environment: "any",
    visualDescription: "This crimson horror walks upon six long, thin legs. Its face is neither that of a skull nor spider, but some horrid mix of the two.",
    description: "The scarlet walker is an alien entity from some other dimension, often conjured by the wizards of Thassilon to serve as a minion. Scarlet walkers were particularly favored for their adeptness at interrogating prisoners, either via torture, or via the creatures' uncanny ability to mentally compel both actions and compliance. Once an interrogation was over, the scarlet walker's master typically commanded the monster to render the victim insane or feebleminded if mere death wasn't appropriate. Scarlet walkers themselves hail from the nightmare realm of Leng, where they walk amid strange, stony deserts and stride through the skies above. No mere predators, scarlet walkers build immense hives of coagulated blood and tissue in nameless mountain valleys, and the flavors of various creatures' blood is an inexhaustible topic of discussion among their kind.",
    organization: "solitary, pair, or crowd (3-8)",
    languages: "Aklo, Infernal; telepathy 300 ft.",
    spellLikeAbilities: [
      {
        name: "air walk",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "detect thoughts",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "sending",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "confusion",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "demand",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "confusion, lesser",
        casterLevel: 12,
        limitations: "Metamagic: Quicken ",
        timesPerDay: 3
      },
      {
        name: "feeblemind",
        casterLevel: 12,
        timesPerDay: 1
      },
      {
        name: "insanity",
        casterLevel: 12,
        timesPerDay: 1
      },
      {
        name: "true seeing",
        casterLevel: 12,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 15
      },
      Climb: {
        ranks: 0
      },
      Intimidate: {
        ranks: 19
      },
      "Knowledge (arcana)": {
        ranks: 19
      },
      "Knowledge (nature)": {
        ranks: 19
      },
      "Knowledge (planes)": {
        ranks: 16
      },
      Perception: {
        ranks: 16
      },
      "Sense Motive": {
        ranks: 16
      },
      Stealth: {
        ranks: 16
      }
    },
    special: {
      bleed: {
        universalMonsterAbility: "Bleed",
        damage: "1d6"
      },
      "blood-draining gaze": {
        type: "Su",
        text: "All creatures within 20 feet of a scarlet walker are subject to the monster's eerie blood-draining gaze. Affected creatures must succeed at a DC 23 Fortitude save or thin streams of blood pour from their eyes, flowing through the air and into the eye socket-like pits in the scarlet walker's face. This does not impact the victim's vision, but does deal 1 point of Constitution damage and sickens the victim for 1 round from the hideous pain. A creature already suffering from a bleed effect takes a -4 penalty on the saving throw. This is a bleed effect. The save DC is Constitution-based. Bloodsense (Su) A scarlet walker can sense living creatures with blood in their veins, or undead creatures that feed on blood (such as vampires). This ability functions like Blindsight to a range of 60 feet."
      },
      paralysis: {
        universalMonsterAbility: "Paralysis",
        duration: "1d4 rounds",
        saveDC: null
      },
      compression: {
        universalMonsterAbility: "Compression"
      },
      "no breath": {
        universalMonsterAbility: "No Breath",
        text: ""
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        value: null
      },
      evasion: {
        universalMonsterAbility: "Evasion"
      }
    }
  },

  "Skull Ripper": {
    source: "Rise Of The Runelords Anniversary Edition",
    creatureType: "construct",
    subTypes: [],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Large",
    hd: 15,
    hdVal: 10,
    cr: 9,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 40,
      climb: 40
    },
    abilities: {
      str: 22,
      dex: 16,
      con: "-",
      int: 5,
      wis: 13,
      cha: 12
    },
    feats: [
      {
        name: "Bleeding Critical",
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
        name: "Improved Critical",
        type: "Combat",
        value: "Claw",
        choiceSource: "Improved Critical"
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
      "construct traits"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "adamantine"
      },
      SR: {
        value: 20
      },
      naturalArmor: 12
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any",
    visualDescription: "This chittering, scorpion-shaped monstrosity appears to be made of a hideous mix of chitinous limbs and human skulls.",
    description: "Skull rippers were once guardians of the dead, the grim custodians of the great ossuaries of Thassilon. Although most skull rippers are discovered in ancient tombs and sepulchers, occasionally a geological upheaval or massive flood destroys a given catacomb or leaves a skull ripper stranded. In these cases, the construct emerges and ventures forth into the world above, harvesting skulls and causing widespread panic as it searches for a new tomb to guard. Construction A skull ripper is made from the carcasses of dead vermin and skulls, either harvested by the creator or purchased from shady adventurers for roughly 500 gp in total. SKULL RIPPER CL 13th; Price 30,500 gp CONSTRUCTION Requirements Craft Construct, animate dead, fear, geas/quest, keen edge, limited wish; Skill Heal or Knowledge (engineering) DC 15; Cost 15,500 gp",
    organization: "solitary, pair, or nest (3-8)",
    languages: "Thassilonian (cannot speak)",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 5
      },
      Stealth: {
        ranks: 10
      }
    },
    special: {
      behead: {
        type: "Ex",
        text: "A skull ripper is an expert at collecting its favorite trophies-skulls. Once it has pinned a foe, it can attempt to behead the victim with a single gut-wrenching rip of its claws. This attempt is made as part of the grapple check to maintain an existing pin, and if successful, deals 4d6+18 points of damage to the victim. If this damage is enough to bring the target below 0 hit points, the victim must succeed at a DC 23 Fortitude save to resist having its head torn from its body, which results in instant death for most creatures. The save DC is Strength-based. Dread Visage (Su) All creatures within 30 feet that can see a skull ripper must make a DC 18 Will save at the start of their turn in order to avoid becoming frightened for 1 round. If the victim recognizes any of the heads affixed to the skull ripper's body as having once belonged to friends or allies, that victim takes a -4 penalty on the save. A creature that succeeds at the save is immune to the dread visage of that particular skull ripper for 24 hours. This is a mind-affecting fear effect. The save DC is Charisma-based."
      },
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "2d6+9"
      },
      "dread visage": {
        type: "Su",
        text: "All creatures within 30 feet that can see a skull ripper must make a DC 18 Will save at the start of their turn in order to avoid becoming frightened for 1 round. If the victim recognizes any of the heads affixed to the skull ripper's body as having once belonged to friends or allies, that victim takes a -4 penalty on the save. A creature that succeeds at the save is immune to the dread visage of that particular skull ripper for 24 hours. This is a mind-affecting fear effect. The save DC is Charisma-based.",
        preText: "30 ft., DC 18"
      },
      grab: {
        universalMonsterAbility: "Grab"
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Su",
        text: "Sting-injury; save Fort DC 17; frequency 1/round for 6 rounds; effect 1d4 Dex; cure 2 consecutive saves. The save DC is Constitution-based.",
        saveDC: null
      }
    },
    resistances: [
      {
        damageType: "cold",
        value: 10
      }
    ]
  },

};

export const Herald_Of_The_Ivory_LabyrinthCreatures = {
  Baphomet: {
    source: "Herald Of The Ivory Labyrinth",
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
    hd: 33,
    hdVal: 10,
    cr: 27,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Detect Good",
      "Detect Law",
      "See in Darkness",
      "True Seeing"
    ],
    speed: {
      base: 50,
      maneuverability: "Good",
      fly: 50
    },
    abilities: {
      str: 36,
      dex: 32,
      con: 38,
      int: 37,
      wis: 29,
      cha: 35
    },
    feats: [
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Craft Construct",
        type: "ItemCreation"
      },
      {
        name: "Craft Magic Arms and Armor",
        type: "ItemCreation"
      },
      {
        name: "Craft Wondrous Item",
        type: "ItemCreation"
      },
      {
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Greater Bull Rush",
        type: "Combat"
      },
      {
        name: "Greater Weapon Focus",
        type: "Combat",
        value: "Glaive",
        choiceSource: "Greater Weapon Focus"
      },
      {
        name: "Greater Weapon Specialization",
        type: "Combat",
        value: "Glaive",
        choiceSource: "Greater Weapon Specialization"
      },
      {
        name: "Improved Bull Rush",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Glaive",
        choiceSource: "Improved Critical"
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
        name: "Quicken Spell-Like Ability",
        type: "Monster",
        value: "Greater dispel magic",
        choiceSource: "Quicken Spell-Like Ability"
      },
      {
        name: "Scribe Scroll",
        type: "ItemCreation"
      },
      {
        name: "Staggering Critical",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Glaive",
        choiceSource: "Weapon Focus"
      },
      {
        name: "Weapon Specialization",
        type: "Combat",
        value: "Glaive",
        choiceSource: "Weapon Specialization"
      }
    ],
    attacks: [
      {
        weapon: "Aizerghaul",
        name: "Aizerghaul",
        specialAbility: "Aizerghaul",
        damage: "2d8"
      },
      {
        weapon: "Gore",
        name: "Gore",
        damage: "1d6",
        bonuses: [
          {
            source: "inherent",
            value: "2d6",
            appliesTo: "damageType",
            damageType: "fire plus burn"
          }
        ],
        type: "primary"
      },
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to ability damage, ability drain, charm and compulsion effects, death effects, energy drain, fire, maze, petrification"
    ],
    defense: {
      DR: {
        value: 20,
        damageType: "cold iron, epic, and good"
      },
      SR: {
        value: 38
      },
      naturalArmor: 11
    },
    space: "10 ft.",
    reach: "10 ft. (20 ft. with glaive)",
    environment: "any (Abyss)",
    visualDescription: "Fire burns on the central horn and in the rheumy eyes of this bestial winged demon, who stands more than twice a human's height.",
    description: "Baphomet-Lord of the Minotaurs-was created by Lamashtu from the soul of the first minotaur. In those days, he was a powerfully muscled specimen, and the Queen of Demons kept him as a consort until the day Baphomet stole away from her palace in Yanaron, seeking to gain even greater favor by claiming a legendary trophy. Baphomet's ambition was as great as his folly, and he invaded the deepest layer of Hell, intent on stealing Asmodeus's ruby rod for his mistress. Needless to say, he was swiftly caught. Lamashtu claimed no allegiance to him, and Asmodeus imprisoned Baphomet in a devious maze the archdevil proclaimed to be unsolvable, even by the first minotaur. The archdevil also carved his own symbol into Baphomet's brow with the nail of his index finger in an attempt to fully subjugate the minotaur. But in this attempt, it was Asmodeus who overstepped his bounds. Not only did Baphomet solve the seemingly unsolvable maze after a mere decade, but as he escaped, he also took the world-sized labyrinth with him. Baphomet had changed over that time, becoming almost emaciated in his build, yet growing much wiser. He did not return to Lamashtu's side, but instead took the archdevil's infernal maze and made it his own as he claimed a portion of the Abyss as his realm. This was eons ago, and now Baphomet is a powerful demon lord in his own right. He has forgiven Lamashtu, and serves as her lover now and then, yet he's no longer her direct subservient minion. He works to increase the influence of his cult on countless worlds, building his forces so that one day he might again invade Hell. But this time, Baphomet plans on taking much more than Asmodeus's weapon-he intends to take Asmodeus's life! Baphomet's Cult Baphomet is worshiped by conspirators, secret societies, corrupted crusaders, and above all else, minotaurs. His minotaur worshipers venerate him openly; in their art, Baphomet is typically depicted as a more classical bull-headed, minotaur-like creature, and when he deigns to appear before these worshipers he often assumes this form. His humanoid worshipers venerate him in secret, offering prayers and sacrifices in hidden shrines and dark temples beyond the sight of society and communicating in a complex series of hand gestures when in mixed company. Baphomet has two symbols. To most, including his minotaurs, his symbol is a brass minotaur's head with ruby eyes. His secret societies use this symbol as well, but also mark his works with the inverted pentagram, sometimes decorating the star shape with an image of his face. Baphomet's favored weapon is the glaive, although he does not abide any of his followers wielding a weapon that looks like Aizerghaul. He grants access to the domains of Animal, Chaos, Evil, and Strength, and to the subdomains of Demon, Ferocity, Fur, and Resolve.",
    organization: "solitary (unique)",
    languages: "all languages; speak with animals; telepathy 300 ft.",
    spellLikeAbilities: [
      {
        name: "detect good",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "detect law",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "freedom of movement",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "speak with animals",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "true seeing",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "unholy aura",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "astral projection",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "baleful polymorph",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "blasphemy",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "desecrate",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "dominate person",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "dispel magic, greater",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "teleport, greater",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "telekinesis",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "shapechange",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "unhallow",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "unholy blight",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "dispel magic, greater",
        casterLevel: 27,
        limitations: "Metamagic: Quicken ",
        timesPerDay: 3
      },
      {
        name: "maze",
        casterLevel: 27,
        timesPerDay: 3
      },
      {
        name: "symbol of persuasion",
        casterLevel: 27,
        timesPerDay: 3
      },
      {
        name: "imprisonment",
        casterLevel: 27,
        timesPerDay: 1
      },
      {
        name: "charm monster, mass",
        casterLevel: 27,
        timesPerDay: 1
      },
      {
        name: "time stop",
        casterLevel: 27,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 25
      },
      Bluff: {
        ranks: 33
      },
      Diplomacy: {
        ranks: 36
      },
      Fly: {
        ranks: 36
      },
      "Handle Animal": {
        ranks: 33
      },
      Intimidate: {
        ranks: 33
      },
      "Knowledge (arcana)": {
        ranks: 36
      },
      "Knowledge (dungeoneering)": {
        ranks: 33
      },
      "Knowledge (geography)": {
        ranks: 33
      },
      "Knowledge (history)": {
        ranks: 33
      },
      "Knowledge (nobility)": {
        ranks: 33
      },
      "Knowledge (planes)": {
        ranks: 33
      },
      "Knowledge (religion)": {
        ranks: 36
      },
      Linguistics: {
        ranks: 33
      },
      Perception: {
        ranks: 33,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      "Sense Motive": {
        ranks: 33
      },
      Spellcraft: {
        ranks: 36
      },
      Stealth: {
        ranks: 33
      },
      "Use Magic Device": {
        ranks: 33
      }
    },
    special: {
      burn: {
        universalMonsterAbility: "Burn",
        saveDC: 10,
        damage: "4d6 fire"
      },
      "glaive mastery": {
        type: "Ex",
        text: "Baphomet is exceptionally skilled at fighting with a glaive. He is treated as a 20th-level fighter for the purposes of fulfilling any feat prerequisites, such as that for Weapon Specialization."
      },
      "powerful charge": {
        universalMonsterAbility: "Powerful Charge",
        type: "Ex",
        weaponName: "n"
      },
      "scroll use": {
        type: "Ex",
        text: "Baphomet can cast spells from any scroll as if he possessed the spell on a spell list. Spells he casts from scrolls always resolve at caster level 27th."
      },
      "summon demons": {
        type: "Sp",
        text: "Once per day, nascent demon lords can summon any demon or combination of demons whose total combined CR is 20 or lower. This ability always works, and is equivalent to a 9th-level spell."
      },
      "summon minotaurs": {
        type: "Sp",
        text: "Baphomet can summon half-fiend minotaurs, labyrinth minotaurs (see page 90), and mythic minotaurs as if casting a summon monster spell. He can summon eight half-fiend minotaurs three times per day, and four mythic minotaurs or one labyrinth minotaur once per day. This ability functions as a swift action, but otherwise works like the summon universal monster rule with 100% chance of success and counts as a 9th-level spell effect."
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "or minotaur; greater polymorph",
        type: ", or minotaur; greater polymorph"
      },
      "infernal brand": {
        type: "Su",
        text: "The mark of Asmodeus is branded on Baphomet's brow, yet this is no mark of fealty or servitude. Rather, Baphomet has claimed the pentagram-a remnant of the time he spend as the archdevil's prisoner-and now draws power from it. The brand grants him his devil-like abilities of fire immunity and see in darkness. In addition, all devils and worshipers of devils take a -2 penalty on saving throws against Baphomet's special attacks and spell-like abilities. He gains a +4 bonus on caster level checks to penetrate a devil's spell resistance, and automatically penetrates a devil's damage reduction with his glaive and natural attacks."
      },
      "language mastery": {
        type: "Ex",
        text: "Baphomet can speak, read, and understand all languages."
      },
      "abyssal resurrection": {
        type: "Ex"
      },
      "freedom of movement": {
        type: "Ex"
      },
      "supernatural cunning": {
        type: "Su",
        text: "Baphomet is never caught flat-footed and gains a +8 bonus on initiative checks. In addition, he's immune to maze spells and can never become lost. He always knows the shortest, most direct route through any maze. After spending 1 minute in any maze, he understands its entire layout implicitly and can teleport to any location using his greater teleport spell-like ability."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "180 ft."
      },
      aizerghaul: {
        type: "Abyssal for \"Labyrinth's Final Edge\"",
        text: "is a uniquely shaped glaive, the head of which consists of a double blade akin to a crescent moon. This blade is made of ivory, but is razor sharp and as hard as adamantine (and possesses all the qualities of that material). It is a +5 lawful-outsider-bane unholy wounding glaive capable of inflicting particularly horrible and painful wounds on good-aligned targets and devils alike. Such a creature must succeed at a DC 38 Fortitude save each time it's wounded by Aizerghaul or be sickened with pain for as long as the damage caused by the wound persists. Whether the save succeeds or fails, these wounds don't heal naturally and resist magical healing. A character attempting to heal these wounds must succeed at a DC 32 caster level check or the healing has no effect on the injured creature."
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
      }
    ]
  },

  "Stringy Demodand": {
    source: "Herald Of The Ivory Labyrinth",
    creatureType: "outsider",
    subTypes: [
      "chaotic",
      "demodand",
      "evil",
      "extraplanar"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 20,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "Darkvision 120 ft.",
      "Detect Good",
      "Detect Magic"
    ],
    speed: {
      base: 40,
      maneuverability: "Average",
      fly: 40
    },
    abilities: {
      str: 28,
      dex: 23,
      con: 21,
      int: 12,
      wis: 13,
      cha: 18
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
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Claw",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
      },
      {
        name: "Intimidating Prowess",
        type: "Combat"
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
      saves: {
        All: [
          {
            value: 4,
            note: "vs. divine spells"
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
      naturalArmor: 12
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Abyss)",
    visualDescription: "This lanky humanoid is covered in layers of long, ropy skin growths that sway wildly from its body with each move.",
    description: "Like all demodands, stringy demodands are devoted to serving their thanatotic titan masters in the Abyss. Stringy demodands fulfill this duty by serving as kidnappers, slavers, and slave masters throughout the Abyssal realms. Stringy demodands are physically well suited to this charge, being lankier, scrappier, and more agile than other demodands. Such agility allows a stringy demodand to quickly snatch up slaves-to-be and prevent slave revolts before they start. Taut muscles, wicked teeth, and sharp claws also make a stringy demodand a formidable fighter in the event of a struggle, and it should go without saying that a stringy demodand's defining feature-its hundreds of long, obscene ropes of skin-are ideal tools for easily binding and restricting its quarry. It's the stringy demodands' long, obsidian-colored skin growths that give the abhorrent outsiders their name. These growths resemble nothing so much as elongated skin tags the girth of a human finger and roughly 4 feet in length. The fibrous outgrowths stretch from stringy demodands' heads to the tips of their batlike wings to their shins. These ropy villi bob and sway wildly as a stringy demodand moves, creating a truly disturbing image for those victims who dare to look back at their Abyssal pursuer. Because these rubbery growths cover most of the creatures' bodies, they provide greater natural protection than the hides of other kinds of demodands and allow stringy demodands to eschew armor. Stringy demodands are typically 6 feet tall and weigh almost 300 pounds. Ecology Although all demodands are disgusting creatures, stringy demodands are among the most unnerving in terms of appearance. It's thought that when the thanatotic titans were sculpting the first stringy demodand, its waxen image drooped and melted from head to toe, forming the foul, stringy growths that now define these misbegotten monsters. Like the hairs of a human, these growths don't contain nerves yet grow at an incredible rate. When a stringy demodand loses these growths through carelessness or from wounds in battle, the fleshy strands rapidly regenerate. When at rest, stringy demodands wrap their ropy growths around their bodies like grotesque shawls. Some twist them around their lean torsos and intertwine the growths to produce elaborate headdresses of braided black skin. Stringy demodands arise from fertilized demodand eggs just like all others of their kind. Since a given demodand's clutch produces a random distribution of different types of demodands, a stringy demodand's emergence cannot be planned. When a stringy demodand does happen to hatch from a demodand egg, it quickly savages the other eggs in the clutch to eliminate its competition. If it cannot ruin or consume the other eggs in its clutch before they hatch, a stringy demodand swiftly bullies its brethren into submission and proves itself to be the dominant sibling, establishing from birth its natural instinct to coerce and enslave. A stringy demodand's horrific appearance is often cause enough for potential victims to quake in their boots, but its unsightly aspect is far from the only feature that makes this being a formidable intimidator. In addition to its grotesque appendages and distasteful visage, a stringy demodand has a grating, alien voice that is simultaneously guttural and nasal. So terrible is its call that when it roars, a stringy demodand sends humans and demons alike scurrying for safety. Some say that when the thanatotic titans accidentally created the demodands and beheld their monstrous progeny for the first time, one of the titans let out a cry of anger and shock that shook the whole of the Abyssal realm. It's said that the stringy demodand heard his creator's shout and swallowed it hungrily, learning to scream like a god in so doing. Habitat & Society Though they prefer to work alone, stringy demodands grudgingly accept the company of other demodands when their thanatotic titan masters demand it. Stringy demodands' devotion to the titans is as fervent as that of any other among their kind, but these beings have the unusual tendency to take their masters' orders to the extreme, justifying any and all obscenities and collateral damage in the name of their Abyssal overlords. Such devotion can sometimes even lead stringy demodands to obliterate their demodand kin during missions should they see their brethren's efforts as lacking. Only shaggy demodands can deter stringy demodands' bloodlust with any consistency, as the latter realize that to attack their commanding brethren would be very foolish. Always striving to please their masters, stringy demodands can be found on nearly every Abyssal realm capturing and enslaving future minions and playthings for thanatotic titans. When at rest, stringy demodands gather alongside other demodands to form enclaves of like-minded fiends so they can plot their next moves and calculate the most prime specimens to subjugate. In the Abyss, these victims are typically demons, the enslaved prisoners of these demons, and wandering mortals who happened into the Abyss at the wrong time. Though rarely encountered on the Material Plane, stringy demodands can sometimes be found as part of larger hunting parties tasked with capturing valuable mortals to bring back to their Abyssal realm. Stringy demodands' loyalty and rashness make them well suited to serving as solitary slave masters, roles the thanatotic titans delight in having them serve. The demodands embrace this task with their typical overzealous fervor and happily bully, abuse, and torture their charges, often shattering slaves' minds as well as their bodies in the process. Although they understand that their thanatotic titan masters want as many mortal recruits as possible, it's sometimes difficult for the reckless stringy demodands to bring slaves to the titans without irreversibly breaking them first. Stringy demodands kill or violently maim more slaves than they successfully convert into the titans' faithful. This predilection for violence explains why, when stringy demodands take part in Abyssal slaving parties, they are usually accompanied by enough slimy and tarry demodands to keep their violent urges in check.",
    organization: "solitary, pair, or tangle (3-8)",
    languages: "Abyssal, Celestial, Common",
    spellLikeAbilities: [
      {
        name: "detect good",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "detect magic",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "detect thoughts",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "fear",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "dispel magic, greater",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "hold monster",
        casterLevel: 15,
        timesPerDay: 1
      },
      {
        name: "summon",
        casterLevel: 15,
        limitations: "level 6, 1d4 tarry demodands or 1d2 stringy demodands 40%",
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 14
      },
      Bluff: {
        ranks: 20
      },
      Climb: {
        ranks: 13
      },
      Fly: {
        ranks: 13
      },
      Intimidate: {
        ranks: 0
      },
      "Knowledge (planes)": {
        ranks: 10
      },
      Perception: {
        ranks: 20
      },
      "Sense Motive": {
        ranks: 10
      },
      Stealth: {
        ranks: 15
      },
      Survival: {
        ranks: 13
      }
    },
    special: {
      "entangling folds": {
        type: "Ex",
        text: "Although the disgusting growths on a stringy demodand are technically part of its skin, the demodand has a small measure of control over these ropy appendages. As a standard action, a stringy demodand can use its growths to entangle any adjacent creatures of its size or smaller. To resist being entangled, a target must succeed at a DC 25 Reflex save. As long as the stringy demodand is entangling one or more creatures, any creature that moves adjacent to the demodand must successfully save or likewise be entangled. Entangled creatures can't move farther than 5 feet from the stringy demodand until they break free from its growths. An entangled creature can break free as a move action by succeeding at a DC 25 Strength or Escape Artist check. The save DCs are Constitution-based."
      }
    }
  },

  Vilsteth: {
    source: "Herald Of The Ivory Labyrinth",
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
    hd: 18,
    hdVal: 10,
    cr: 16,
    racialFeatures: [
      "Darkvision 60 ft.",
      "See Invisibility"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 22,
      dex: 19,
      con: 24,
      int: 23,
      wis: 16,
      cha: 23
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Combat Casting",
        type: "General"
      },
      {
        name: "Deceitful",
        type: "General"
      },
      {
        name: "Greater Vital Strike",
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
        name: "Persuasive",
        type: "General"
      },
      {
        name: "Quicken Spell-Like Ability",
        type: "Monster",
        value: "Dominate person",
        choiceSource: "Quicken Spell-Like Ability"
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
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Gore",
        name: "Gore",
        damage: "1d6",
        bonuses: [
          {
            source: "inherent",
            value: "1d4",
            appliesTo: "damageType",
            damageType: "wis"
          }
        ],
        type: "primary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to mind-affecting effects"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "cold iron and good"
      },
      SR: {
        value: 27
      },
      naturalArmor: 16
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Abyss)",
    visualDescription: "This fiend seems carved from weathered ivory, and runes and symbols of power cover its pale flesh. Its eyes glow an eerie yellow, and horns curl from its eerie, mouthless head.",
    description: "Vilsteth demons, also known as corruption demons, are calved from the essence of the demon lord Baphomet's realm of the Ivory Labyrinth. Vilsteths form from the souls of corrupt and deceitful politicians, priests, and power brokers-those who in life abused and misused whatever ephemeral power they wielded. The defining sin of these souls was pride, fueled by vanity and a desire for adulation and ever-greater authority to be wielded in whatever selfish way they saw fit, coupled with a furious envy of anyone more beloved, respected, or feared than they. Vilsteths epitomize these traits, and can often be found lurking in monuments dedicated to important political figures or disguised within statues of prominent saints and heroes. In their natural form, vilsteths are over 7 feet tall and weigh 400 pounds. Ecology Like all demons, vilsteths aren't born in a biological sense. Instead, the souls of corrupt mortals find their way to Baphomet's Ivory Labyrinth after judgment, and in there gradually transform into these crooked beings. From their positions of power, the sinful souls that birth vilsteths manifested every kind of malfeasance, from pecuniary greed to self-indulgence of gluttony, sloth, and lust in life, but the common thread is always the arrogation of the self over the state or church or whatever organization upon which they presided, coupled with a narcissistic smugness that their pride and pleasures were of greater import than any other consideration. Of course, these sinful leaders' cynical pragmatism demanded that they keep their perverted proclivities secret, as they knew those beneath them would never understand, so each spun an ever-expanding labyrinth of lies to keep their corruption under cover. Some succeeded, living out their days shrouded in their sinister secrets; others failed spectacularly, leading to dissolution, schism, treason, social collapse, and revolution when the extent of the awful truth finally surfaced. Whether their sins were ever exposed, however, their corrupted pride and devious secrecy drew their souls into the Abyss and the Ivory Labyrinth of Baphomet, where they formed into vilsteth demons. Vilsteths do not eat or drink in the usual sense. Their faces are like ivory masks-unmoving, impassive, and implacable, with only the glow of their amber eyes to mark their attention. Instead, they are emotional parasites, feeding on the reactions of others, sowing confusion and suffering and feasting upon the psychic residue that follows. Likewise, they do not speak with voices that humans might understand. Their communication is purely telepathic, from a subtle whisper to a psychic scream, echoing down the corridors of the minds of those to whom they \"speak\" and pushing them, whether gently or urgently, toward acts of sabotage, sedition, and sin of every kind. Habitat & Society Corruption demons are often solitary creatures who work independently on their schemes, though they sometimes summon lesser demons of like talents to further their pernicious agendas of subversion. They amass vast monetary wealth for common bribery and for lavish parties hosted by their minions in order to tempt and corrupt the unwary and the unwise. They encourage and inspire artists and sculptors to raise great monuments and masterworks for their own glory, and through these graven images they spy and speak and exercise a quiet dominion upon the great and small alike, working through prominent and respected leaders to delude the masses and subvert the common good. When vilsteths are encountered outside of the Abyss, these demons are often found in places where Baphomet's cults hold power. In rural areas, such cults may form around insular villages that have abandoned the traditional gods of hunt and harvest, trading them for a predatory faith hidden from the eyes of outsiders. In urban settlements, cultic cells and clandestine rites conducted behind masks and veils work together to suborn existing governmental, legal, and cultural authorities. Vilsteth demons may visit Baphomet's faithful in either milieu, acting as ambassadors and agents provocateur, often sitting in judgment of those who have violated the cult's confidentiality and helping to design and implement their agendas for anarchy and societal upheaval.",
    organization: "solitary, pair, or conspiracy (3-12)",
    languages: "Abyssal, Celestial, Draconic; can't speak, telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "see invisibility",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "enter image",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "teleport, greater",
        casterLevel: 18,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: -1
      },
      {
        name: "meld into stone",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "possess object",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "ventriloquism",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "charm monster",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "dominate person",
        casterLevel: 18,
        limitations: "Metamagic: Quicken ",
        timesPerDay: 3
      },
      {
        name: "stone shape",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "vengeful outrage",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "suggestion, mass",
        casterLevel: 18,
        timesPerDay: 1
      },
      {
        name: "statue",
        casterLevel: 18,
        timesPerDay: 1
      },
      {
        name: "summon",
        casterLevel: 18,
        limitations: "level 7, 1 shachathAP75 or 1d3 succubi 50%",
        timesPerDay: 1
      },
      {
        name: "symbol of persuasion",
        casterLevel: 18,
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 18
      },
      Craft0: {
        subSkill: "sculpture",
        ranks: 0
      },
      Craft1: {
        subSkill: "stonemasonry",
        ranks: 0
      },
      Diplomacy: {
        ranks: 21
      },
      Disguise: {
        ranks: 21
      },
      Intimidate: {
        ranks: 21
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
      "Knowledge (nobility)": {
        ranks: 9
      },
      "Knowledge (religion)": {
        ranks: 9
      },
      Perception: {
        ranks: 18,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Perform0: {
        subSkill: "oratory",
        ranks: 9
      },
      "Sense Motive": {
        ranks: 18
      },
      Spellcraft: {
        ranks: 10
      },
      Stealth: {
        ranks: 18
      },
      "Use Magic Device": {
        ranks: 8
      }
    },
    special: {
      idolatry: {
        type: "Su",
        text: "When a vilsteth uses enter image, meld into stone, possess object, or statue to assume the appearance of a public or religious monument (either by entering or controlling an existing object or by taking the semblance of one), it can make itself an object of worship and adoration. This functions as sympathy (DC 25, CL 18th) upon either a single creature within 30 feet or all creatures of the chosen type or alignment within 30 feet. Any creature that fails its saving throw against this effect must attempt an additional DC 25 Will save after spending 24 hours within 30 feet of the object of worship. If the targeted creature fails this second save, it's affected as if under a permanent mind fog effect with respect to the vilsteth. This is a curse effect and cannot be dispelled (although dispel chaos or dispel evil can remove this effect, as does break enchantment)."
      },
      "labyrinthine mindtrap": {
        type: "Su",
        text: "Whenever a vilsteth is targeted with a divination or mind-affecting effect, including effects that simply facilitate mental communication, the caster's mind is entrapped within the twisted corridors and pathways of the vilsteth's intellect, causing the caster to become dazed (Will DC 25 negates). Each round on the victim's turn, it can attempt a new saving throw to escape this mind trap, ending its turn, but each failed save deals 1 point of Intelligence, Wisdom, and Charisma drain to the creature. A creature that successfully saves against this effect is immune to the same vilsteth's labyrinthine mindtrap for 24 hours."
      },
      mindrender: {
        type: "Su",
        text: "When a vilsteth hits with both claw attacks and rends its target, it gains a +4 profane bonus on its gore attack for that turn. In addition, if the vilsteth's gore attack hits, the target is affected by the vilsteth's labyrinthine mindtrap ability, even if the targeted creature already successfully saved against that ability in the last 24 hours."
      },
      "powerful charge": {
        universalMonsterAbility: "Powerful Charge",
        type: "Ex",
        weaponName: 2
      },
      rend: {
        universalMonsterAbility: "Rend",
        type: "Ex",
        weaponName: 9
      },
      "unspeakable truth": {
        type: "Su",
        text: "A vilsteth is surrounded by a mantle of misinformation. Creatures within 30 feet are affected by a curse that manifests the next time they attempt to share information about the vilsteth, including things they have observed the demon saying or doing. This curse affects the creature as fumbletongue (Will DC 25 negates). A successful save negates the curse, but if the target fails the save, this curse manifests every time that target attempts to talk about the vilsteth. This curse is a mind-affecting compulsion effect and can't be dispelled or suppressed with protection from evil. A vilsteth can order creatures affected by charm or compulsion effects that it creates to share information about it without triggering the curse."
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "Medium humanoid; polymorph"
      },
      "no breath": {
        universalMonsterAbility: "No Breath",
        text: ""
      }
    }
  },

  "Labyrinth Minotaur": {
    source: "Herald Of The Ivory Labyrinth",
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
    hd: 15,
    hdVal: 10,
    cr: 16,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 33,
      dex: 19,
      con: 30,
      int: 17,
      wis: 26,
      cha: 14
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
        value: "Greataxe",
        choiceSource: "Improved Critical"
      },
      {
        name: "Intimidating Prowess",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Quick Bull Rush",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Greataxe",
        enchantments: [
          {
            name: "Enhancement Bonus +1",
            source: "inherent"
          }
        ],
        name: "Greataxe",
        damage: "1d12"
      },
      {
        weapon: "Gore",
        name: "Gore",
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 16
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any (Ivory Labyrinth)",
    visualDescription: "This hulking minotaur's hooves are clad in imposing steel. The massive beast wears a heavy bronze mask that covers most of its face.",
    description: "Labyrinth minotaurs are the elite guards and favored servitors of Baphomet. They are thicker and taller than mortal minotaurs, and possess skill in metalcraft that they use to forge armor, weapons, and their personalized and iconic bronze masks. Labyrinth minotaurs eagerly charge intruders, trampling smaller opponents and knocking back larger foes. As they are perceptive, tireless, and incapable of becoming lost, labyrinth minotaurs make excellent guardians of Baphomet's bewildering maze of a domain, the Ivory Labyrinth. Labyrinth minotaurs stand about 11 feet tall and weigh 1,200 pounds. Ecology Labyrinth minotaurs resemble their mortal counterparts, as each has the form of a massive, burly humanoid with thick fur on the chest and legs and a horned, bovine head. The hairless skin of a labyrinth minotaur's head is thin and stretched so tightly over the bone that the beast appears to have just a skull atop its neck. This tight skin makes the creature's sharp eyes bulge from their sockets. Unlike mortal minotaurs, labyrinth minotaurs have no need to eat or sleep and consider the need for either activity a weakness. Labyrinth minotaurs don't age as mortal creatures do; over the centuries of their existence as guardians and enforcers, they instead accumulate masses of battle scars, which they wear with arrogant pride. Labyrinth minotaurs speak little, but make a lot of noise. They breathe in great snorts, bang their weapons against their armor, and stomp their steel-shod hooves on the ground as they walk. Labyrinth minotaurs seethe with anger and energy, constantly moving about and shifting from hoof to hoof when required to stand in place for more than a few minutes. A labyrinth minotaur prefers to range throughout the narrow, turning corridors of its maze-like hunting grounds, even into dead ends and back, searching for hints of intruders upon which it can vent its bestial fury. Habitat & Society The first minotaurs were created by Lamashtu, and the first and greatest of these creations was none other than Baphomet. These minotaurs came into existence on Golarion in the vast mazes beneath Iblydos. After becoming a demon lord, Baphomet collected the souls of these primal minotaurs and forged them into the labyrinth minotaurs, paragons of their kind and Baphomet's favored servants. The labyrinth minotaurs constantly patrol the twisting pathways of the Ivory Labyrinth to enforce Baphomet's will on lesser denizens of the domain (such as mortal minotaurs and cultists) and to challenge intruders. Labyrinth minotaurs are as bestial as their mortal kin and prone to outbursts of violent rage, but their high status in Baphomet's service makes them haughty and given to boasting. They feel contemptuous disdain for all mortal creatures but are particularly derisive of mortal creatures lost or confounded by mazes. Like mortal minotaurs, labyrinth minotaurs are perfectly at home in mazes of any kind and are incapable of becoming lost. This affinity for mazes applies to their thinking as well-despite their brutish demeanors, labyrinth minotaurs are good with puzzles and are keen tactical thinkers. When labyrinth minotaurs meet in peace, they sometimes exchange inscrutable riddles or short descriptive puzzles (such as, \"How would you drink a drop of blood inside a severed eyeball while it's in an iron coffer sunk to the bottom of a well without getting wet or being seen by the eye?\"). Labyrinth minotaurs prefer gear and armor made of bronze and steel, as few other materials are sufficiently sturdy for them to use over a long period of time. In addition to their steel shoes, heavy armor, and massive greataxes, all labyrinth minotaurs wear heavy bronze masks. Each labyrinth minotaur makes its own mask, and some spend weeks or even months obsessively shaping and reshaping the bronze over hot forges. At first glance, each of these bronze masks might seem superficially similar, but upon closer inspection a viewer can clearly see the subtle embellishments built in by the individual labyrinth minotaur. These flourishes communicate the minotaur's status and history to other servants of Baphomet. A labyrinth minotaur often adds an embellishment to its mask when it accomplishes an important task on Baphomet's behalf or kills a particularly powerful intruder. A labyrinth minotaur's obsession makes its mask more than mere ornamentation- each is mystically connected to its mask. Labyrinth minotaurs prefer to patrol alone or in small gangs. They maintain a central communal headquarters that's usually crewed by about six members, with the fiercest labyrinth minotaur commanding the others through bullying and intimidation. This headquarters is concealed deep within a maze and serves as a safe storage area, a locus for discussing strategy, and the site of the gang's forge and metalworking tools. When labyrinth minotaurs meet others of their kind while out patrolling a maze, they usually share a short exchange of riddles or boasts. Occasionally, labyrinth minotaurs recognize each other as being on opposite sides of sprawling, ancient rivalries. In such cases, the first labyrinth minotaur to recognize the other as an enemy surges forward with murderous fury, hoping to catch its rival off guard. Large congregations of labyrinth minotaurs are rare-even when large groups don't engage in these feuds, labyrinth minotaurs fall into divisive boasting that frequently erupts into bloodshed anyway. Labyrinth minotaurs are rarely encountered outside of the Ivory Labyrinth, and therefore have little interaction with other races beyond visitors to their master's realm. Labyrinth minotaurs display grudging respect for glabrezu and vilsteth demons and undisguised contempt for mortal minotaurs and cultists of Baphomet. Their arrogance precludes true camaraderie with anyone other than those of their own kind.",
    organization: "solitary, pair, or gang (3-6)",
    languages: "Abyssal, Common, Giant",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 13
      },
      Craft0: {
        subSkill: "armor",
        ranks: 15
      },
      Craft1: {
        subSkill: "weapons",
        ranks: 0
      },
      Heal: {
        ranks: 10
      },
      Intimidate: {
        ranks: 0
      },
      "Knowledge (engineering)": {
        ranks: 18
      },
      "Knowledge (planes)": {
        ranks: 15
      },
      Perception: {
        ranks: 15
      },
      "Sense Motive": {
        ranks: 15
      },
      Survival: {
        ranks: 13
      }
    },
    special: {
      "bronze mask": {
        type: "Su",
        text: "A labyrinth minotaur draws agility and ferocity from its bronze mask. When it makes a full-attack action, a labyrinth minotaur wearing its bronze mask can give up its regular attacks and instead make one gore attack or bull rush against each opponent within reach. It must make a separate attack roll against each opponent, and it can't choose to move with targets that are pushed back. A labyrinth minotaur's bronze mask has 40 hit points, hardness 20, and a break DC of 40. If a labyrinth minotaur's bronze mask is stolen or destroyed, it can create a replacement with 1 week of work."
      },
      "powerful charge": {
        universalMonsterAbility: "Powerful Charge",
        type: "Ex",
        weaponName: 6
      },
      "steel-shod hooves": {
        type: "Ex",
        text: "A labyrinth minotaur's steel-shod hooves are particularly devastating when used to trample an opponent. A creature that takes full damage from a labyrinth minotaur's trample ability (because the creature either failed its Reflex save or chose to take an attack of opportunity instead of attempting a Reflex save) is knocked prone and is staggered for 1d4 rounds. A successful Fortitude save (DC equal to that of the labyrinth minotaur's trample ability) reduces the duration of the staggered condition to 1 round."
      },
      trample: {
        universalMonsterAbility: "Trample",
        damage: "2d6+16",
        saveDC: 10
      },
      compression: {
        universalMonsterAbility: "Compression"
      },
      "natural cunning": {
        type: "Ex",
        text: "Like a normal minotaur, a labyrinth minotaur possesses innate cunning and logical ability, granting it immunity to maze spells and preventing it from ever becoming lost. Further, a labyrinth minotaur is never caught flat-footed."
      }
    },
    resistances: [
      {
        damageType: "fire",
        value: 20
      }
    ]
  },

};
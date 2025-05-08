
export const Inner_Sea_BestiaryCreatures = {
  "Apostasy Wraith": {
    source: "Inner Sea Bestiary",
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
    cr: 6,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Sense Apostate"
    ],
    speed: {
      maneuverability: "Perfect",
      fly: 60
    },
    abilities: {
      str: "-",
      dex: 18,
      con: "-",
      int: 10,
      wis: 11,
      cha: 14
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
        weapon: "Incorporeal touch",
        name: "Incorporeal touch",
        specialAbility: "energy drain, rend faith",
        damage: "1d8"
      }
    ],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Razmiran)",
    visualDescription: "A broken mask gives this smoky, ghostly figure a bitter, unwavering gaze.",
    description: "When the souls of the followers of the Living God Razmir reach Pharasma's Court, most are bound for the Inner Court, where their ultimate fate as believers of a false god is decided. These mortal souls are so traumatized by the knowledge of the falseness of their faith that they know only the desire to avenge themselves upon those who so duped them in life. These souls disavow the legitimacy of all gods, and return to the Material Plane to sow their vengeance. An apostasy wraith exists in a state of constant conflict, torn between its burning shame at falling for such duplicity in life and its scorn and hatred toward believers for whom faith proved to be genuine. Their primary motivation is to wreak vengeance upon the false priesthood of Razmir, but that faith's mental conditioning is so effective as to make it difficult for an apostasy wraith to even approach its quarry. If able to overcome its aversion, its wrath is terrible. Otherwise, an apostasy wraith gladly vents its rage upon followers of other gods in an effort to make them see-even if only for a moment-the despair of finding one's faith misplaced.",
    organization: "solitary, pair, or gang (3-6)",
    languages: "Common, Hallit",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 8
      },
      "Knowledge (religion)": {
        ranks: 8
      },
      Perception: {
        ranks: 8
      },
      Stealth: {
        ranks: 8
      }
    },
    special: {
      "energy drain": {
        universalMonsterAbility: "Energy Drain",
        saveDC: 10,
        levels: 1
      },
      "channel resistance": {
        universalMonsterAbility: "Channel Resistance",
        bonus: 4
      },
      "rend faith": {
        type: "Su",
        text: "On a successful incorporeal touch attack against a foe with divine spellcasting abilities, the ability to channel energy, or other divinely granted special abilities, the apostasy wraith's inherent spite and contempt toward all things religious disrupts the target's connection with his deity. The victim must make a successful DC 16 Will save or be unable to use any such ability for 1 round. The save DC is Charisma-based. Sense Apostate (Su) An apostasy wraith can sense the presence and direction of Razmiri priests as if using the locate creature spell (CL 20th). This ability cannot be dispelled."
      }
    }
  },

  "Scarab Beetle": {
    source: "Inner Sea Bestiary",
    creatureType: "vermin",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 9,
    hdVal: 8,
    cr: 6,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 40,
      climb: 20,
      maneuverability: "Average",
      fly: 20
    },
    abilities: {
      str: 23,
      dex: 12,
      con: 16,
      int: "-",
      wis: 10,
      cha: 1
    },
    feats: [],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "gnaw",
        damage: "1d6",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to death effects, disease, mind-affecting effects, paralysis"
    ],
    defense: {
      naturalArmor: 10
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "warm deserts (Osirion)",
    visualDescription: "This glossy blue-black beetle is the size of a cow.",
    description: "In Osirion, these massive beetles are a threat to ancient tombs as they chew their way through the interred. Some say scarab beetles' connection with the dead gives them powers greater than those of normal beetles, but any evidence of this has yet to been proven true. Merchants claim powdered scarab is an essential element in magic that protects against death effects.",
    organization: "solitary or swarm (3-9)",
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
      gnaw: {
        type: "Ex",
        text: "A scarab beetle deals 1 point of Strength damage on a successful bite. This damage is doubled against creatures with no armor or natural armor bonus to AC, but creatures in heavy armor or with a natural armor bonus of +10 or greater are immune, as are creatures immune to critical hits or without flesh."
      }
    }
  },

  "Stalk Beetle": {
    source: "Inner Sea Bestiary",
    creatureType: "vermin",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 4,
    hdVal: 8,
    cr: 2,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30,
      burrow: 10,
      climb: 20
    },
    abilities: {
      str: 17,
      dex: 13,
      con: 12,
      int: "-",
      wis: 10,
      cha: 1
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
      "Immune to mind-affecting effects"
    ],
    defense: {
      naturalArmor: 5
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "warm deserts (Rahadoum)",
    visualDescription: "This ravenous beetle is the size of a pony, and sports a pair of deadly, serrated mandibles.",
    description: "Stalk beetles are a plague in Rahadoum, scouring the land like giant locusts, and eating any and all vegetation they encounter.",
    organization: "solitary, swarm (2-8), or plague (9-20)",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 0
      }
    },
    special: {
      sawtooth: {
        type: "Ex",
        text: "The serrated mandibles of a stalk beetle allow it to ignore hardness of 5 or less when attacking objects. In addition, a stalk beetle deals 1 point of bleed damage upon a successful critical hit with its bite attack."
      }
    }
  },

  "Blighted Fey": {
    source: "Inner Sea Bestiary",
    creatureType: "fey",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 8,
    hdVal: 8,
    cr: 6,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 18,
      dex: 15,
      con: 19,
      int: 12,
      wis: 14,
      cha: 21
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
        name: "Skill Focus",
        type: "General",
        value: "Perception",
        choiceSource: "Skill Focus"
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
        weapon: "Dagger",
        name: "Dagger",
        damage: "1d4"
      },
      {
        weapon: "Horn",
        name: "Horns",
        damage: "1d6"
      },
      {
        weapon: "Shortbow",
        name: "Shortbow",
        damage: "1d6"
      }
    ],
    immunities: [
      "Immune to disease, paralysis, poison, polymorph"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "cold iron and good"
      },
      SR: {
        value: 17
      },
      naturalArmor: 7
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "temperate forests (Nirmathas)",
    visualDescription: "Ropes of fungus and patches of sickly mold cover this wan satyr.",
    description: "The forest of Fangwood dominates the nation of Nirmathas. The country depends on the mighty wood for its security and economy, yet in its thick and shadowy depths lurks an oppressive curse. Where the pine trees grow tall and thick, the dryad Arlantia reigns. A pawn of the demon lord Cyth-V'sug, she is infected by the insidious tendrils of the Prince of the Blasted Heath. A magical breach forged by this curse connects the demon lord's realm, the Jeharlu, to Golarion and to the First World itself. Arlantia infects trees with demonic ichor that warps the fey creatures who reside in the heart of Fangwood, and she takes advantage of the conflict and war that wracks Nirmathas to create an army of thorn-crowned daughters and other rot-infested horrors to consume the forest from within. The blight manifests as a black and greasy fungal rot that moves and sways tree branches and limbs where no wind propels them, and a mystic network of fell power extends an unnatural awareness between nearby blighted fey. Dryads are by far the most insidious of the corrupted fey; they lure humanoids to literally and spiritually dark places to beget more daughters from their dark embrace- and further spread the disease. The dryads connect through a unified but tainted mystic field that transcends their ordinary limitations and permits them to treat every infected tree as if it were their own bonded tree. Only magic such as miracle, limited wish, or wish can sever the connection to the Jeharlu and cure a blighted fey. Some speculate that a magical linchpin exists within Fangwood, which if destroyed would end this hideous plague. CREATING A BLIGHTED FEY \"Blighted fey\" is an acquired template that can be added to any fey creature with 2 or more Hit Dice, referred to hereafter as the base creature. Blighted fey were once normal fey-a fey creature tied up and bound in the ropey vines of the blighted, tainted trees of the Fangwood acquires the blighted fey template by the next sunset. A blighted fey uses the base creature's statistics and abilities except as noted here. CR: Same as the base creature +2. Alignment: Chaotic evil. Senses: A blighted fey gains Darkvision to a range of 60 feet if the base creature did not already have it. If the base creature already has Darkvision, the ability is extended by an additional 30 feet. Armor Class: Natural armor improves by +2. Hit Dice: The base creature's racial Hit Dice change to d8s. Class Hit Dice are unaffected. Defensive Abilities: A blighted fey gains DR 10/cold iron and good; immunity to disease, paralysis, poison, and polymorph; and resistance to cold 10 and electricity 10. A blighted fey also gains spell resistance equal to 11 + its newly adjusted CR. A blighted fey also gains the following ability. Fungal Rejuvenation (Su): So long as it remains within 300 yards of any blighted tree within the Fangwood and remains standing on moist earth, the blighted fey gains fast healing 5. The infected tree need not be specifically bonded to the blighted fey for this ability to function. Special Attacks: A blighted fey gains the following special attacks. Unless otherwise noted, save DCs are equal to 10 + 1/2 the blighted fey's Hit Dice + the blighted fey's Constitution modifier. Parasitic Bond (Su): Once per day with a successful thorn throw attack, the blighted fey can transform the thorn into a burrowing, wiggling maggot that infests the target and infuses it with a short-term curse from within unless the target succeeds at a Fortitude save. This parasite creates an unholy link to the target, binding it to the blighted fey. This binding persists for 5 rounds, during which all hit point damage taken by the blighted fey is halved, and the target takes the other half of the damage dealt. The type of damage remains consistent with what the blighted fey receives. Only one parasitic bond can be maintained with one creature at a time. This bond counts as a curse and a disease. Thorn Throw (Ex): A blighted fey can shoot a fistful of needle-sharp thorns at a single target within 20 feet as a standard action. The thorn attack deals an amount of damage equal to a sting natural attack, with damage based on the blighted fey's size (see Table 3-1 on page 302 of the Bestiary), except the attack is resolved as a ranged attack instead of a melee attack. Special Qualities: A blighted fey gains the following special qualities. Cyth-V'sug's Unity (Su): Blighted fey within 100 feet of each other can communicate through a shared fungal Hive Mind. This does not permit blighted fey to see and hear through each other's senses, but they can share specific situational information and tactics through telepathy. If one blighted fey within range is aware of danger, they are all aware of danger and cannot be surprised. Daughters of Arlantia (Su): Fey creatures with close ties to a specific plant react differently to the blighted fey template. Blighted fey dryads are no longer dependent upon a specific tree. A dryad's tree dependent special ability is modified (but not replaced) so blighted fey dryads are required only to remain within 300 yards of any blighted Fangwood tree. This ability applies to blighted fey dryads only. Tainted Blood (Ex): A blighted fey's blood and flesh are rife with disease. Any creature that successfully makes a bite attack against a blighted fey, swallows one whole, or otherwise ingests part of one must succeed at a Fortitude save or take 1 point of Strength damage and 1 point of Dexterity damage. One minute later, the creature must succeed at a second save at the same DC or be nauseated for 1 minute and take 1d6 points of Strength damage and 1d6 points of Dexterity damage. Ability Scores: Str +4, Con +4, +2 Cha. Feats: Blighted fey gain Toughness as a bonus feat. Skills: A blighted fey gains a +2 racial bonus on Knowledge (nature), Perception, and Stealth checks.",
    organization: "solitary, pair, band (3-6), or orgy (7-11)",
    languages: "Common, Sylvan",
    spellLikeAbilities: [
      {
        name: "charm person",
        casterLevel: 8,
        timesPerDay: -1
      },
      {
        name: "dancing lights",
        casterLevel: 8,
        timesPerDay: -1
      },
      {
        name: "ghost sound",
        casterLevel: 8,
        timesPerDay: -1
      },
      {
        name: "sleep",
        casterLevel: 8,
        timesPerDay: -1
      },
      {
        name: "suggestion",
        casterLevel: 8,
        timesPerDay: -1
      },
      {
        name: "fear",
        casterLevel: 8,
        timesPerDay: 1
      },
      {
        name: "summon nature's ally iii",
        casterLevel: 8,
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 8
      },
      Diplomacy: {
        ranks: 8
      },
      Disguise: {
        ranks: 2
      },
      Intimidate: {
        ranks: 5
      },
      "Knowledge (nature)": {
        ranks: 6,
        bonuses: [
          {
            source: "inherent",
            value: 2
          }
        ]
      },
      Perception: {
        ranks: 6,
        bonuses: [
          {
            source: "inherent",
            value: 6
          }
        ]
      },
      Perform0: {
        subSkill: "wind",
        ranks: 12
      },
      Stealth: {
        ranks: 8,
        bonuses: [
          {
            source: "inherent",
            value: 6
          }
        ]
      },
      Survival: {
        ranks: 5
      }
    },
    special: {
      "parasitic bond": {
        type: "Ex"
      },
      pipes: {
        type: "Su",
        text: "A satyr can focus and empower his magic by playing haunting melodies on his panpipes. When he plays, all creatures within a 60-foot radius must make a successful DC 18 Will save or be affected by charm person, fear, sleep, or suggestion, depending on which tune the satyr chooses. A creature that successfully saves against any of the pipes' effects cannot be affected by the same set of pipes for 24 hours, but can still be affected by the satyr's other spell-like abilities as normal. The satyr's use of his pipes does not count toward his uses per day of his spell-like abilities, and if separated from them, he may continue to use his standard abilities. The pipes themselves are masterwork, and a satyr can craft a replacement with 1 week of labor. The save DC is Charisma-based."
      },
      "thorn throw": {
        type: "Ex"
      },
      "Cyth-V'sug's unity": {
        type: "Ex"
      },
      "tainted blood": {
        type: "Ex"
      },
      "fungal rejuvenation": {
        type: "Ex"
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
      }
    ]
  },

  Cayhound: {
    source: "Inner Sea Bestiary",
    creatureType: "outsider",
    subTypes: [],
    alignments: [
      "Chaotic Good"
    ],
    size: "Medium",
    hd: 6,
    hdVal: 10,
    cr: 5,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Scent"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 21,
      dex: 15,
      con: 16,
      int: 8,
      wis: 12,
      cha: 13
    },
    feats: [
      {
        name: "Dimensional Agility",
        type: "General"
      },
      {
        name: "Dimensional Assault",
        type: "General"
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
        specialAbility: "trip",
        damage: "1d6",
        bonuses: [
          {
            source: "inherent",
            value: "1d6",
            appliesTo: "damageType",
            damageType: "sonic"
          }
        ],
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "cold iron"
      },
      naturalArmor: 6
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Elysium)",
    visualDescription: "This reddish-colored mastiff stands eye to eye with most dwarves. Within its powerful frame rumbles the distant sound of thunder.",
    description: "Cayhounds, also called leap dogs, are good-aligned outsiders who exemplify strength and freedom. They are descendants of Thunder, the pet mastiff of the Accidental God, Cayden Cailean, who uplifted his faithful companion upon achieving his own apotheosis. Thunder sired the entire cayhound race (including his famous son, Little Thunder) on the golden fields of Elysium. Cayhounds are filled with wild and turbulent forces barely contained within their canine shapes. They are intelligent and feel true lust for and joy in life, including righteous battle, good food, and strong drink. These fiery red hounds stand head to chest with most humans and weigh approximately 250 pounds. Wild as they are, the cayhounds are still more good-aligned than they are chaotic. Like their true master, they are great champions of freedom, and they channel his strength and courage (and a bit of luck) in opposing nefarious schemes wherever they find them. Some ally themselves with azatas, supporting good crusades against the Outer Planes. A pack of cayhounds might seek to disrupt a night hag and her steed's theft of good souls traveling to their intended destinations in the Great Beyond. Single cayhounds may be summoned via lesser planar ally by priests of Cayden Cailean to come to the aid of the faithful.",
    organization: "solitary, pair, or pack (3-10)",
    languages: "Celestial",
    note: "UC See the Ultimate Combat.",
    spellLikeAbilities: [
      {
        name: "freedom of movement",
        casterLevel: 7,
        timesPerDay: -1
      },
      {
        name: "open/close",
        casterLevel: 7,
        timesPerDay: -1
      },
      {
        name: "dimension door",
        casterLevel: 7,
        timesPerDay: 3
      },
      {
        name: "knock",
        casterLevel: 7,
        timesPerDay: 3
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 4
      },
      Intimidate: {
        ranks: 5
      },
      "Knowledge (planes)": {
        ranks: 4
      },
      Perception: {
        ranks: 6
      },
      "Sense Motive": {
        ranks: 4
      },
      Stealth: {
        ranks: 5
      },
      Survival: {
        ranks: 7
      }
    },
    special: {
      "righteous bite": {
        type: "Su",
        text: "A cayhound's bite is treated as magical for the purpose of overcoming damage reduction."
      },
      "thunderous bark": {
        type: "Su",
        text: "Once every 1d6 rounds, a cayhound can bark with the concussive force of a thunderbolt. Every creature within a 15-foot cone-shaped burst must succeed at a DC 14 Fortitude saving throw or take 3d8 points of sonic damage and be knocked prone. A successful saving throw reduces this damage by half and negates being knocked prone. The save DC is Charisma-based."
      },
      unbound: {
        type: "Su",
        text: "Cayhounds move as if under a continuous freedom of movement spell. They are immune to dimensional anchor, but are affected by dimensional lock normally."
      },
      trip: {
        universalMonsterAbility: "Trip"
      }
    }
  },

  Ceru: {
    legs: 4,
    arms: 0,
    source: "Inner Sea Bestiary",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Neutral Good"
    ],
    size: "Tiny",
    hd: 3,
    hdVal: 10,
    cr: 2,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 20
    },
    abilities: {
      str: 8,
      dex: 15,
      con: 14,
      int: 13,
      wis: 12,
      cha: 15
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
        weapon: "Gore",
        name: "Gore",
        specialAbility: "poison",
        damage: "1d6",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to poison"
    ],
    defense: {
      SR: {
        value: 13
      },
      naturalArmor: 2
    },
    space: "2-1/2 ft.",
    reach: "0 ft.",
    environment: "any urban (Vudra)",
    visualDescription: "This pint-sized creature resembles a tiny blue elephant no larger than a house cat. Its feet, tail, and ears are clawed and spiked.",
    description: "Cerus are artificial creatures created through the fusion of alchemy and magic in the Impossible Kingdoms of Vudra, where they are regarded as amazing pets for the rich and powerful. A single ceru fetches at least 300 gp from Vudrani specialty merchants. Most cerus are sterile, and so the rare breeding pair commands an additional +1,000 gp beyond the cost of two non-breeding cerus. Many breeders would rather kill their breeding stock (or murder would-be thieves) than lose control of their exclusivity. Cerus do not yet exist outside of exotic merchant stalls and strange arcane laboratories. Rumors persist of an alchemical formula allowing the creation of a first-generation ceru that is reliably fertile. This revelation is bound to spur a race among arcanists to find the formula and introduce these creatures to the Inner Sea region in much greater numbers. A spellcaster of 7th level or higher can bond with a ceru via the Improved Familiar feat. Upon reaching maturity, a ceru's body is 1 foot long and weighs 12 pounds. The rare fertile female ceru bears only one litter per year, no matter how frequently bred, with typically no more than one to three offspring.",
    organization: "solitary, pair, or litter (3-5)",
    languages: "Common (can't speak)",
    spellLikeAbilities: [
      {
        name: "detect magic",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "mage hand",
        casterLevel: 6,
        timesPerDay: -1
      }
    ],
    skills: {
      Diplomacy: {
        ranks: 2
      },
      "Knowledge (arcana)": {
        ranks: 3
      },
      Perception: {
        ranks: 2
      },
      Stealth: {
        ranks: 2
      }
    },
    special: {
      luckbringer: {
        type: "Su",
        text: "As a standard action, a ceru can bring luck or misfortune upon any creature it can see within 30 feet. This effect lasts for 1 round, and the ceru decides in advance whether the modified luck is good or bad. If the ceru grants bad luck, anytime the target makes an ability check, attack roll, saving throw, or skill check, it must roll twice and take the worse result. A successful DC 13 Will save negates this effect. If the ceru grants good luck, the target must choose a single roll (as above) prior to rolling, and may roll the chosen roll twice and take the higher result. A creature can only be affected by this ability once per 24 hours, and the ceru may use the ability once per day for every 4 HD it has (minimum once per day). The save DC is Charisma-based. If the ceru is a familiar, it may use its master's character level, if higher, in place of its racial Hit Dice for determining the number of uses of this ability, and for calculating the save DC (DC = 10 + 1/2 or the master's character level + the master's Cha modifier)."
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        value: null
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Gore-injury; save Fort DC 13; frequency 1/round for 6 rounds; effect 1d2 Con; cure 2 consecutive saves.",
        saveDC: 10
      }
    },
    resistances: [
      {
        damageType: "acid",
        value: 5
      },
      {
        damageType: "electricity",
        value: 5
      }
    ]
  },

  "Charnel Colossus": {
    source: "Inner Sea Bestiary",
    creatureType: "undead",
    subTypes: [],
    alignments: [
      "Neutral Evil"
    ],
    size: "Colossal",
    hd: 30,
    hdVal: 8,
    cr: 19,
    racialFeatures: [
      "Darkvision 60 ft.",
      "See Invisibility"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 34,
      dex: 9,
      con: "-",
      int: 18,
      wis: 36,
      cha: 25
    },
    feats: [
      {
        name: "Ability Focus",
        type: "Monster",
        value: "Voice of the ancients",
        choiceSource: "Ability Focus"
      },
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Blind-Fight",
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
        name: "Great Fortitude",
        type: "General"
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
        name: "Stand Still",
        type: "Combat"
      },
      {
        name: "Stunning Critical",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Slam",
        name: "6 Slams",
        specialAbility: "grab, mind feed",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Tendril",
        name: "2 Tendrils",
        specialAbility: "grab, pull",
        damage: "2d6"
      }
    ],
    immunities: [
      "Immune to critical hits, precision damage, turning"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: " magic and slashing"
      },
      SR: {
        value: 30
      },
      naturalArmor: 28
    },
    space: "30 ft.",
    reach: "20 ft. (40 ft. with tendrils)",
    environment: "any (Kalexcourt, Ustalav)",
    visualDescription: "This horror is composed of dozens, if not hundreds, of decomposing cadavers held together as an amalgamated whole.",
    description: "Some dead don't rest easy because of the circumstances of their death or the horrific experiences they underwent in life. Their souls return to the world of the living demanding justice, revenge, or just wanton destruction. Some dead, however, never intended for their souls to leave. Instead they wished to preserve their knowledge, their culture, or some other aspect of their life in an undying form that could forever accumulate more of the same. In these instances, where lichdom is not sought as a viable option, and a multitude of individuals wish to take part, the result can be a charnel colossus. A charnel colossus is an amalgam of scores, even hundreds, of individuals who, upon death, chose to be interred under special ritual circumstances with others of like mind. This allowed them to feed their individual life experiences into an undying corporation of the collective whole. The resulting monstrosity would be like a living library-if it were living. The individual will of the deceased participants is subsumed in favor of a hive-like personality composed of all of the knowledge and experiences of the individual contributors. A few dominant or powerful members of this amalgam may give the resulting combined creature a general style of behavior, but no single constituent provides the creature with a true guiding force. Instead, the result is a pooling of the wisdom and experience of those who have been so interred-often over a period spanning hundreds of years-creating an abomination whose sole focus is the perpetuation of any such cultural traditions and the acquisition of more constituent parts to ever expand its breadth of experience. It is this guiding gluttony for further expansion of consciousness that ensures that even the most benign of traditions or experiential pools from which a charnel colossus is formed inevitably results in an all-consuming horror. The charnel colossus is a mass of the corpses that form its composition, often intermixed with earth, broken grave goods, and other burial materials if the decayed bodies alone are insufficient to fill out its massive size. This amorphous whole is collected within a membrane through which the individual corpses can still be seen and against which they often press as if seeking their freedom. But when a creature becomes trapped in the embrace of a colossus, the membrane proves to be permeable-the rotten, lipless mouths of those so interred are able to reach forth and feed upon the victim's own life experience. The colossus can also form two thin tendrils of this charnel stuff in order to lash out and draw prey into its embrace. As powerful, ever-hungering abominations, charnel colossi are thankfully few and far between. The only documented one currently known to exist is reported to be trapped beneath the ruins of Kalexcourt in northwestern Ustalav, in an ancient Kellid shamanistic burial site.",
    organization: "solitary",
    languages: "Common (or the most commonly spoken language of its corporate body)",
    spellLikeAbilities: [
      {
        name: "see invisibility",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "augury",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "blindness/deafness",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "doom",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "bestow curse",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "speak with dead",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "unholy blight",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "blasphemy",
        casterLevel: 18,
        timesPerDay: 1
      },
      {
        name: "horrid wilting",
        casterLevel: 18,
        timesPerDay: 1
      }
    ],
    skills: {
      Climb: {
        ranks: 30
      },
      Intimidate: {
        ranks: 30
      },
      "Knowledge (arcana)": {
        ranks: 30
      },
      "Knowledge (history)": {
        ranks: 30
      },
      "Knowledge (religion)": {
        ranks: 30
      },
      Perception: {
        ranks: 30
      },
      "Sense Motive": {
        ranks: 30
      },
      Spellcraft: {
        ranks: 30
      }
    },
    special: {
      "voice of the ancients": {
        type: "Su",
        text: "A charnel colossus can, as a full-round action, cause its collective knowledge to be whispered into the minds of any sentient creature within 100 feet. These whispers riffle through the brain of any such creatures within range in a maddening susurrus. These individuals must succeed at a DC 34 Will save or be paralyzed and frozen in place as if by the hold monster spell. The victim may attempt a new save each round to try and break the effect. Regardless of whether or not the save is successful, the effect leaves an insidious seed implanted in the victim's mind. The day after the save is made, the victim must succeed at a new save or the seed takes root and creates the subconscious compulsion for the victim to return to the charnel colossus at some point in the future. When and how this occurs is up the GM. This compulsion can be removed with a remove curse spell or by destroying the charnel colossus that implanted the compulsion. This is a mind-affecting compulsion and cannot be negated by a silence spell because it is heard directly in the mind of the victim. Each time a creature is subjected to this attack, there is a 1% chance that some of the lost lore transmitted into her mind causes her to gain a permanent +2 bonus to Intelligence. This beneficial side effect can only occur to a creature once. When a charnel colossus uses this ability, it cannot use its spell-like abilities or take other actions in that round. The save DC is Charisma-based."
      },
      "corporate will": {
        type: "Su",
        text: "A charnel colossus is composed of the sentience of scores of creatures. Though they are able to work in concert as a cohesive whole, they are also able to separate their actions at will so as to not be impeded by the limitations of a single consciousness, effectively allowing them to focus on two things at once. As a result, the charnel colossus can use up to two spell-like abilities in the same round that it makes physical attacks or other full-found actions. It also gains an additional spell attack per round. In addition, a charnel colossus is immune to being turned (though it can still take damage from channeled positive energy). While part of the creature's sentience may be affected by a turn attempt, there are enough unaffected intellects within to override the effect."
      },
      amorphous: {
        universalMonsterAbility: "Amorphous"
      },
      "channel resistance": {
        universalMonsterAbility: "Channel Resistance",
        bonus: 4
      },
      grab: {
        universalMonsterAbility: "Grab"
      },
      "mind feed": {
        type: "Su",
        text: "When a charnel colossus succeeds at a grapple check with a slam attack, it can use its mind feed ability as a free action during each round in which the grapple is maintained. A victim of a mind feed attempt must succeed at a DC 38 Will save each round that the ability is used. On a failed save, the cadavers that make up the charnel colossus lock their mouths against the victim and begin to draw forth a part of her sentience to add to the collective. This action deals 1d6 points of Wisdom damage per round. If the victim's Wisdom score is reduced to 0, her soul and persona are wholly subsumed by the charnel colossus, and her body becomes bleached white and brittle and is incorporated into the creature's mass. The charnel colossus then has full access to all of the victim's memories (though not any special powers), and the victim can only be recovered and returned to life with a wish or miracle. If the charnel colossus has grappled multiple victims, it can attempt multiple mind feeds in a single round. The save DC is Wisdom-based."
      },
      pull: {
        universalMonsterAbility: "Pull",
        attack: ""
      }
    }
  },

  "Fungus Queen": {
    source: "Inner Sea Bestiary",
    creatureType: "plant",
    subTypes: [
      "extraplanar"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 12,
    hdVal: 8,
    cr: 9,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 20
    },
    abilities: {
      str: 21,
      dex: 17,
      con: 21,
      int: 18,
      wis: 16,
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
        name: "Improved Initiative",
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
        name: "Skill Focus",
        type: "General",
        value: "Disguise",
        choiceSource: "Skill Focus"
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
        weapon: "Tentacle",
        name: "4 Tentacles",
        specialAbility: "grab",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to electricity"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "cold iron or good"
      },
      SR: {
        value: 20
      },
      naturalArmor: 10
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any underground (Darklands)",
    visualDescription: "This eerie creature has the upper body of a beautiful, pale green woman and the lower body of a pulsating mound of fungus.",
    description: "Hundreds of years ago, a cabal of powerful succubus assassins in the service of Nocticula attempted to invade the Jeharlu, the Abyssal Realm of Cyth-V'sug, demon lord of disease and fungus. They sought to assassinate a powerful witch named Soris Delyn, who had befouled one of Nocticula's favorite mortal temples, hidden below the Chelish city of Vyre, before fleeing to her patron's side. The succubi failed at their mission, and from their corpses grew the first fungus queens. Pleased with the outcome, Soris returned to the Material Plane with the fungus queens seeded them throughout the Inner Sea region to aid in the spread of Cyth-V'sug's cult. The fungus queens have taken to the Material Plane like rot to a carcass, and today hundreds of the subversive creatures dwell in the foul reaches of the world. They are particularly fond of large cave systems in the reaches of Nar-Voth near the surface, and of the slums of ruined cities in the Worldwound. Styrian Kindler's Account of Ostog the Unslain tells of a particularly harrowing encounter with a fungus queen in the caverns below Devil's Platter east of Sandpoint, and of indications that this was but one of many such queens dwelling in the region. A particularly dangerous and powerful sect of advanced fungus queens dwells within swampy reaches of Tanglebriar, commanding groups of vegepygmies grown from the corpses of slain elves-these fungus queens have seceded from the rule of Cyth-V'sug and now serve his rebellious minion Treerazer in the crusade to corrupt and destroy Kyonin. An encounter with a normally nonintelligent plant monster acting in a sinister and organized way is sure evidence of the manipulation of a fungus queen, but these monsters are equally fond of commanding and keeping other creatures as pets and slaves as well, particularly attractive humanoids. Those charmed minions they especially favor are given the gift of the fungus queen's embrace, and are transformed into fungoid minions forever loyal to their pallid mistress. Fungus queens are violently jealous and possessive. Those who attempt to lure away their charmed and dominated pets or cure those they have infested gain their eternal ire, but it is by succubi that fungus queens are the most enraged. Whether it be a simple territorial conf lict or some deeper hatred born of their unique genesis, a fungus queen faced with someone whom she even suspects might be a succubus is a terror indeed, for in such battles the sensuous plants abandon their normally subtle approaches of mental control and trickery, and instead bring all of their power to bear in an attempt to rip the offending creature limb from limb. Fungus queens take great delight in transforming succubi into fungoid creatures under their control. While their jealousy doesn't compel them to do battle with other fungus queens, they are always careful to maintain their own territorial boundaries apart from any nearby queens, and they take great pains not to \"poach\" from their sisters' harems of charmed and infested pets. Many fungus queens grow quite powerful over time, typically gaining class levels in ranger, bard, or sorcerer- they generally do not become more powerful by merely gaining racial Hit Dice or increasing in size. A typical fungus queen is 6 feet tall and weighs 150 pounds. FUNGOID SIMPLE TEMPLATE (CR +1) Creatures with the fungoid template appear as they did in life, save that their flesh is pallid and moist, and mushrooms and mold cake their bodies. This template can be applied to any living, non-plant creature. A fungoid creature's quick and rebuild rules are the same. Rebuild Rules: The creature's type changes to plant, and it gains all of the traits of the plant type. The creature gains telepathy 100 ft. with other fungoid creatures. Its alignment changes to chaotic evil.",
    organization: "solitary or cult (fungus queen plus 2-16 mind-controlled plants and minions)",
    languages: "Abyssal, Aklo, Common, Orvian, Undercommon; tongues, telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "detect good",
        casterLevel: 9,
        timesPerDay: -1
      },
      {
        name: "tongues",
        casterLevel: 9,
        timesPerDay: -1
      },
      {
        name: "veil",
        casterLevel: 9,
        limitations: "self only",
        timesPerDay: -1
      },
      {
        name: "charm monster",
        casterLevel: 9,
        timesPerDay: 3
      },
      {
        name: "detect thoughts",
        casterLevel: 9,
        timesPerDay: 3
      },
      {
        name: "suggestion",
        casterLevel: 9,
        timesPerDay: 3
      },
      {
        name: "dominate person",
        casterLevel: 9,
        timesPerDay: 1
      },
      {
        name: "mind fog",
        casterLevel: 9,
        timesPerDay: 1
      },
      {
        name: "slow",
        casterLevel: 9,
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 12
      },
      Disguise: {
        ranks: 12
      },
      "Knowledge (dungeoneering)": {
        ranks: 6
      },
      "Knowledge (planes)": {
        ranks: 6
      },
      Perception: {
        ranks: 12
      },
      "Sense Motive": {
        ranks: 12
      },
      "Use Magic Device": {
        ranks: 12
      }
    },
    special: {
      "compel plants": {
        type: "Su",
        text: "A fungus queen's mind-affecting powers and spell-like abilities (and spells, should the fungus queen gain the ability to cast them) affect plant creatures (but not mindless plant creatures) as if they weren't immune to mind-affecting effects."
      },
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "1d4+5"
      },
      "create spawn": {
        type: "Su",
        text: "A creature that would normally be slain by a fungus queen's energy drain attack is not killed- instead, it immediately loses all negative levels imparted by the fungus queen and transforms into a fungus-infested minion of the queen. Such creatures gain the fungoid simple template. Fungoid creatures are under the control of the fungus creature that created them, and remain enslaved until their mistress is destroyed or until they are cured of the infestation (see the facing page). A fungus queen can communicate telepathically with her fungoid spawn at any range as long as they are on the same plane, and may have a number of Hit Dice worth of enslaved spawn totaling no more than twice her own Hit Dice; any spawn she creates that would exceed this limit become free-willed fungoid creatures. A fungus queen may free an enslaved spawn in order to enslave a new spawn, but once freed, a fungoid creature cannot be enslaved again (although it can still be influenced by the fungus queen's compel plants and plant empathy abilities). Energy Drain (Su) A fungus queen's energy drain functions identically to that of a succubus (Bestiary 68). Creatures killed by this attack do not die-they instead become infested with the fungus queen's spores (see Create Spawn). The save DC is Charisma-based. Plant Empathy (Ex) This ability functions as the druid's wild empathy, save that a fungus queen can use this ability only on plant creatures. A fungus queen gains a +4 racial bonus on this check. Mindless plant creatures are imparted a modicum of implanted intelligence when a fungus queen uses this ability, allowing her to train such creatures as guardians."
      },
      "energy drain": {
        universalMonsterAbility: "Energy Drain",
        saveDC: 10,
        levels: 1,
        text: "A fungus queen's energy drain functions identically to that of a succubus (Bestiary 68). Creatures killed by this attack do not die-they instead become infested with the fungus queen's spores (see Create Spawn). The save DC is Charisma-based. Plant Empathy (Ex) This ability functions as the druid's wild empathy, save that a fungus queen can use this ability only on plant creatures. A fungus queen gains a +4 racial bonus on this check. Mindless plant creatures are imparted a modicum of implanted intelligence when a fungus queen uses this ability, allowing her to train such creatures as guardians."
      },
      sporepod: {
        type: "Su",
        text: "As a standard action, a fungus queen can cause a Medium pod of fungal material to burst out of the ground at any point within 60 feet of her current location. Once created, a sporepod cannot move. If the fungus queen travels more than 120 feet from a sporepod, it is destroyed. A fungus queen can maintain a number of sporepods equal to her Charisma modifier (7 for the typical fungus queen). As a move action, she can instantaneously travel to one of her sporepods as if using transport via plants. She can also choose to spread out her tentacle attacks among her sporepods, attacking a creature within 5 feet of any sporepod with a tentacle-she is still limited to making only four tentacle attacks as part of a full-attack action, or one as a standard action. A sporepod is an object that has an AC of 15 and 20 hit points; damage dealt to a sporepod does not harm the fungus queen."
      },
      "plant empathy +23": {
        type: "Ex"
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

  "Shadow Giant": {
    source: "Inner Sea Bestiary",
    creatureType: "humanoid",
    subTypes: [
      "extraplanar",
      "giant"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Large",
    hd: 19,
    hdVal: 8,
    cr: 13,
    racialFeatures: [
      "Darkvision 120 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 34,
      dex: 15,
      con: 24,
      int: 10,
      wis: 12,
      cha: 15
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
        name: "Double Slice",
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
        value: "Great terbutje",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Rock",
        choiceSource: "Improved Critical"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Two-Weapon Fighting",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Terbutje",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "2 Terbutje",
        specialAbility: "energy drain",
        damage: "1d8"
      },
      {
        weapon: "Slam",
        name: "2 Slams",
        specialAbility: "energy drain",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Rock",
        name: "Rock",
        damage: "1d8"
      }
    ],
    defense: {
      naturalArmor: 12
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any (Plane of Shadow)",
    visualDescription: "This giant's skin is dead black, and it wears a gold-inlaid breastplate, a headdress, and armbands decorated with skulls.",
    description: "Though their kind originated on the Plane of Shadow, several families of shadow giants have relocated to the wilder regions of Nidal at the invitation of the Umbral Court. They serve as a company of elite shock troops, kept a close secret and only used in operations where they are not expected to leave any survivors to tell the tale. Most shadow giants are especially taciturn and keep to themselves when not called to duty by the Umbral Court. They keep their own counsel and practice their own mysterious religion, whose bloody rituals of autosacrifice and cannibalism are presided over by their bone-and-feather-adorned shamans atop short-stepped pyramids constructed of dark basalt blocks. On the Shadow Plane, families of shadow giants have been known to combine together to form greater tribes when times of war are at hand. Such an army arrayed upon the field of battle is often enough to make enemies sue for peace with offers of gold and prisoners for sacrifice.",
    organization: "solitary, gang (2-5), family (6-13 plus 35% noncombatants, 1 cleric or witch shaman of 5th-8th level, and 1 fighter or barbarian chief of 7th-10th level), or company (14-33 plus 1 fighter or barbarian chief of 7th-10th level)",
    languages: "Giant, Shadowtongue",
    note: "UC See Ultimate Combat.",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 6
      },
      Intimidate: {
        ranks: 13
      },
      Perception: {
        ranks: 9,
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
      }
    },
    special: {
      "energy drain": {
        universalMonsterAbility: "Energy Drain",
        saveDC: 10,
        levels: 1
      },
      "rock throwing": {
        universalMonsterAbility: "Rock Throwing",
        type: "Ex",
        range: "180 ft."
      },
      militant: {
        type: "Ex",
        text: "A shadow giant is proficient in all simple weapons, all martial weapons, and one exotic weapon of its choice."
      },
      "rock catching": {
        universalMonsterAbility: "Rock Catching"
      },
      "shadow cloak": {
        type: "Ex",
        text: "Because of the shadow giant's connection with the Plane of Shadow, as a move action in any illumination other than direct sunlight, a shadow giant can cloak itself in moving shadows that act as the spell blur for 1d6+6 rounds. It can use this ability three times per day."
      }
    }
  },

  "Marrowstone Golem": {
    source: "Inner Sea Bestiary",
    creatureType: "construct",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 10,
    hdVal: 10,
    cr: 8,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 20,
      dex: 11,
      con: "-",
      int: "-",
      wis: 11,
      cha: 1
    },
    feats: [],
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
            damageType: "negative energy"
          }
        ],
        type: "primary"
      }
    ],
    immunities: [
      "construct traits",
      "Immune to magic"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "adamantine"
      },
      naturalArmor: 12
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any underground (Darklands)",
    visualDescription: "Thin veins of black rock crisscross the frame of this hulking construct.",
    description: "Carved from rock hewn from the marrowstone mines of Sekamina, these golems amplify the magical radiation emitted by veins of lazurite. They can only be crafted within the necropolis of Nemret Noktoria, land of ghouls, for lazurite brought beyond its boundaries loses its potency. Binding the lazurite into the body of the golem stabilizes it and lets the construct leave the boundaries of the ghoulish city with its fell powers intact. Though the ghouls guard the secrets of making a marrowstone golem, they are sometimes known to trade their handiwork with outsiders. CONSTRUCTION A marrowstone golem's body is chiseled from a single block of marrowstone weighing at least 2,500 pounds. Marrowstone can only be found in the necropolis of Nemret Noktoria in the Darklands realm of Sekamina. Preparing the stone requires the use of exotic unguents that cost 2,500 gp. Marrowstone Golem CL 11th; Price 42,500 gp CONSTRUCTION Requirements Craft Construct, animate object, antilife shell, create undead, creator must be caster level 11th; Skill Craft (sculpture) or Craft (stonemasonry) DC 21; Cost 22,500 gp",
    organization: "solitary or gang (2-5)",
    spellLikeAbilities: [],
    skills: {},
    special: {
      "create spawn": {
        type: "Su",
        text: "Any humanoid creature that is slain by a marrowstone golem rises from death as a free-willed ghoul in 24 hours. A creature with four or more class levels rises as a ghast instead. In either case, the ghoul or ghast has a 25% chance of retaining whatever class levels it had in life. Immunity to Magic (Su) A marrowstone golem is immune to any spell or spell-like ability that allows spell resistance. In addition, certain spells and effects function differently against the golem, as noted below. • A transmute rock to mud spell slows a marrowstone golem (as the slow spell) for 2d6 rounds, with no saving throw. • Effects that heal undead heal half that amount of damage to a marrowstone golem, to a limit of its full normal hit points. • A marrowstone golem that fails its save against a magical attack that deals positive energy damage (including the channel energy ability when used to harm undead, but not when used to heal living creatures) does not take any damage from the attack, but it loses its create spawn ability, its necrotic field aura, and the negative energy damage from its slam attack for 1d4 rounds. Necrotic Field (Su) Undead within 30 feet of a marrowstone golem gain a +2 resistance bonus on saving throws, increase the save DCs of their extraordinary and supernatural abilities by 2, and gain a +4 bonus to channel resistance. Positive energy effects cause only half damage to a creature within the marrowstone golem's aura. Their aura particularly strengthens ghouls and ghasts, giving them a +2 bonus on attack and weapon damage rolls."
      },
      "necrotic field": {
        type: "Su",
        text: "Undead within 30 feet of a marrowstone golem gain a +2 resistance bonus on saving throws, increase the save DCs of their extraordinary and supernatural abilities by 2, and gain a +4 bonus to channel resistance. Positive energy effects cause only half damage to a creature within the marrowstone golem's aura. Their aura particularly strengthens ghouls and ghasts, giving them a +2 bonus on attack and weapon damage rolls.",
        preText: "30 ft."
      }
    }
  },

  "Noqual Golem": {
    source: "Inner Sea Bestiary",
    creatureType: "construct",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Huge",
    hd: 25,
    hdVal: 10,
    cr: 18,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 36,
      dex: 15,
      con: "-",
      int: "-",
      wis: 11,
      cha: 1
    },
    feats: [
      {
        name: "Toughness",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Slam",
        name: "2 Slams",
        specialAbility: "spell sunder",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "construct traits",
      "Immune to magic"
    ],
    defense: {
      saves: {
        All: [
          {
            value: 8,
            note: "vs. spells, spell-like abilities, and supernatural abilities"
          }
        ]
      },
      DR: {
        value: 15,
        damageType: "adamantine"
      },
      naturalArmor: 22
    },
    space: "15 ft.",
    reach: "15 ft.",
    environment: "any (Numeria, Thassilon)",
    visualDescription: "Pale green metal makes up the body of this automaton. Despite its towering size, it moves with lithe quickness.",
    description: "The construction of a noqual golem requires both a considerable supply of the skymetal noqual and the skill to overcome noqual's antipathy to dweomers. The resulting golem resembles an iron golem, but is larger and more nimble. Noqual golems impede magic by their mere presence, and their touch disrupts spells and magical constructs. Nearly all noqual on Golarion lies under Numerian control. The artificers of Numeria prefer tinkering with technological constructs rather than magical ones, but nonetheless Furkas Xoud was believed to have created a noqual golem. Another is thought to serve the sorcerers of Starfall as a fail-safe should their technology prove inadequate. A cabal of cyphermages has taken advantage of the recent discovery of noqual near Riddleport to commence work on their own magic-stealing golem. CONSTRUCTION A noqual golem's body is sculpted from 30,000 pounds of iron alloyed with 1,000 pounds of noqual at the staggering cost of 53,000 gp. Noqual Golem CL 18th; Price 253,000 gp CONSTRUCTION Requirements Craft Construct, geas/quest, greater dispel magic, polymorph any object, wish, creator must be caster level 18th; Skill Craft (armor) or Craft (weapons) DC 26; Cost 153,000 gp",
    organization: "solitary or pair",
    spellLikeAbilities: [],
    skills: {},
    special: {
      "construct bane": {
        type: "Ex",
        text: "A noqual golem deals an additional 2d6 points of damage against constructs (except other noqual golems) and undead created by feats or spells. Immunity to Magic (Su) A noqual golem is immune to and absorbs any spell or spell-like ability that allows spell resistance. In addition, certain spells and effects function differently against the creature, as noted below. • A magical attack that deals electricity damage slows a noqual golem (as the slow spell) for 3 rounds, with no saving throw. If the golem is under a haste effect, the attack breaks the haste effect instead. • A mage's disjunction spell staggers a noqual golem and negates its impeded magic ability for 1d4 rounds. Impeded Magic (Su) To successfully cast a spell within 60 feet of a noqual golem, a caster must make a concentration check (DC 25 + the level of the spell being cast). If the check fails, the noqual golem absorbs the spell. Powerful Blows (Ex) A noqual golem inflicts 1-1/2 times its Strength bonus and threatens a critical hit on a 19-20 with its slam attacks."
      },
      "spell absorption": {
        type: "Su",
        text: "A noqual golem absorbs any spells blocked or dispelled by its impeded magic, immunity to magic, and spell sunder abilities. It heals 5 points of damage for every spell level absorbed. If the amount of healing would cause the golem to exceed its full normal hit points, it gains any excess as temporary hit points. Absorbing a spell gives the golem the benefits of haste (as the spell) for 1 round per spell level."
      },
      "impeded magic": {
        type: "Su",
        text: "To successfully cast a spell within 60 feet of a noqual golem, a caster must make a concentration check (DC 25 + the level of the spell being cast). If the check fails, the noqual golem absorbs the spell. Powerful Blows (Ex) A noqual golem inflicts 1-1/2 times its Strength bonus and threatens a critical hit on a 19-20 with its slam attacks.",
        preText: "60 ft."
      },
      "spell sunder": {
        type: "Su",
        text: "A creature struck by a noqual golem's slam attack is targeted by dispel magic (CL 18th). It absorbs any spells so dispelled."
      }
    }
  },

  "Quantium Golem": {
    source: "Inner Sea Bestiary",
    creatureType: "construct",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Gargantuan",
    hd: 30,
    hdVal: 10,
    cr: 20,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Link",
      "Low-Light Vision"
    ],
    speed: {
      base: 20
    },
    abilities: {
      str: 40,
      dex: 7,
      con: "-",
      int: "-",
      wis: 11,
      cha: 1
    },
    feats: [
      {
        name: "Whirlwind Attack",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bastard sword",
        enchantments: [
          {
            name: "Enhancement Bonus +5",
            source: "inherent"
          }
        ],
        name: "Bastard sword",
        damage: "1d10"
      }
    ],
    immunities: [
      "construct traits",
      "Immune to magic"
    ],
    defense: {
      DR: {
        value: 20,
        damageType: "adamantine and bludgeoning"
      },
      naturalArmor: 33
    },
    space: "20 ft.",
    reach: "20 ft.",
    environment: "any (Quantium)",
    visualDescription: "This towering metal construct crackles with eldritch energy and wields an immense sword in its hands.",
    description: "Around the perimeter of Quantium, two immense golems march a patrol uninterrupted since the days of the archmage Nex himself. They stand as mirror images of each other, one crimson in hue and bearing a sword in the right hand, the other green and with sword in the left. Legend holds that Nex crafted the golems to defend his capital during a time of desperate struggle in which he foresaw his own absence. The golems only pause in their unending patrol if attacked or obstructed, and then only until they eliminate or circumvent the obstacle, whichever is most direct. The golems always patrol at opposite ends of the city, marching counterclockwise and pausing if their partner is interrupted. They last broke from patrolling in 576 ar, when they fought the Gebbite horde in the very battle in which Nex vanished from Golarion. CONSTRTION The secret of the Quantium golems' construction vanished with their creator, the archmage Nex.",
    organization: "solitary or pair",
    spellLikeAbilities: [],
    skills: {},
    special: {
      "eldritch surge": {
        type: "Su",
        text: "A Quantium golem can hurl a lance of eldritch energy that deals 30d6 points of damage to all creatures in a 240-foot line (Reflex DC 25 for half). The crimson Quantium golem deals half electricity and half fire damage, and slows a creature (as the slow spell) that fails its save for 2d4 rounds. The green Quantium golem deals half acid and half fire damage, and nauseates any creature that fails its save for 1d4 rounds. The save DC is Constitution-based. Immunity to Magic (Ex) A Quantium golem is immune to any spell or spell-like ability that allows spell resistance. In addition, certain spells and effects function differently against the creature, as noted. • A magical attack that deals cold damage against the crimson golem or electricity damage against the green golem slows it (as the slow spell) for 1 round, with no saving throw. • A Quantium golem and its equipment are immune to rust attacks. Link (Su) Each Quantium golem always knows the exact location of the other."
      },
      "urban defender": {
        type: "Su",
        text: "A Quantium golem gains 150 bonus hit points as long as it's within 1 mile of the city. If it moves beyond this range, it loses these bonus hit points."
      }
    }
  },

  "Kakuen-taka": {
    source: "Inner Sea Bestiary",
    creatureType: "outsider",
    subTypes: [
      "chaotic",
      "evil",
      "extraplanar",
      "swarm"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Huge",
    hd: 21,
    hdVal: 10,
    cr: 14,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 10,
      dex: 23,
      con: 16,
      int: 6,
      wis: 13,
      cha: 13
    },
    feats: [
      {
        name: "Ability Focus",
        type: "Monster",
        value: "Consume flesh",
        choiceSource: "Ability Focus"
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
        name: "Step Up",
        type: "Combat"
      },
      {
        name: "Toughness",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "swarm",
        name: "swarm",
        specialAbility: "dimensional snare, distraction",
        damage: "5d6"
      },
      {
        weapon: "Slam",
        name: "2 Slams",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to poison"
    ],
    defense: {
      SR: {
        value: 25
      },
      naturalArmor: 1
    },
    space: "15 ft.",
    reach: "0 ft. (10 ft. with slam)",
    environment: "any (the Worldwound)",
    visualDescription: "Within a towering structure of bone and rotting flesh lurk hundreds of flittering fiends.",
    description: "In the far northern lands bordering on the Worldwound, a strange and terrifying menace plagues the tundra and prairie-shambling fleshy abominations called kakuen-taka, the Hunger That Moves. They wander the desolate emptiness of the subpolar wilds, a living manifestation of the Worldwound's taint whose horrific onset is presaged by a sour-sweet wind and wheeling, screaming flocks of undead birds. The lucky victims of the birds' blinding poison are spared the sight of the rumbling juggernauts of putrefying meat driven like siege engines by a swarm of fiends called bhogas. Individually these fiends have little wit or skill, but together they have a malign intellect that allows them to construct mobile nests out of dead flesh like morbid termites building a mound. The bhogas find a giant, mammoth, or other creature of great size and devour its organs, usually while the creature is still alive and trying to resist. Once the creature is dying or dead, the fiends reconfigure the corpse's remaining flesh and bone into a hideous, multilegged pillar, which they then invade and inhabit like a hollow tree. Some of the bhogas use their collective strength to move the fleshy mansion's limbs while the rest clamber about its walls or skulk underneath it, searching for new prey to terrorize and consume. This monstrosity attracts birds the fiends animate as flesh-craving undead swarms. Together, the three components of this peculiar Ecology stalk the demon-tainted lands. If a healthy swarm discovers another suitable corpse, the fiends engage in a frenzy of mating, build a second flesh mansion, split into two swarms, then rapidly give birth to fill all the available space in their new home. When a flesh mansion becomes so rotted that it cannot maintain its structure or the swarm cannot easily move it, the bhogas abandon their creation and seek out another, leaving behind a monstrous, decaying shell, unrecognizable as the living creature it once was. Necromancers can use the husk for parts or animate the entire thing as a new abomination. Desperate ghouls, zombies, or animals might feed on it and become tainted by its latent Abyssal energies. As much a plague upon demons as upon the mortal races, kakuen-taka have no true allies. Perhaps this accounts for their constant wandering and their fondness for desolate and isolated locales, far from any that might interfere with their feasting. Rarely, a powerful demon might enslave one with magic and use the swarm's dimensional snare ability to capture and kill its rivals. Driven out of the central part of the Worldwound by more intelligent and organized demons, kakuen-taka have become a recurring plague in the southern fringes of the territory, below Storasta and abutting the borders with Numeria and Ustalav. In these lonely moors and hills, kakuen-taka regularly eradicate patrols and entire settlements. None of the adjacent countries values the empty lands highly enough to risk major resources to stamp them out. Kakuen-taka are indifferent to their own kind and attack each other only if one swarm has a flesh mansion and the other does not. Given adequate food, several kakuen-taka might travel together to tear apart larger prey, but over time they usually wander apart, following their separate carrionstorms, and have no sense of loyalty toward their former comrades.",
    organization: "solitary, patrol (1 swarm with 1 flesh mansion and 1d4 carrionstorms), or gang (1d3 patrols)",
    languages: "Abyssal",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 24
      },
      Intimidate: {
        ranks: 24
      },
      Perception: {
        ranks: 21
      },
      Stealth: {
        ranks: 11
      },
      Survival: {
        ranks: 10
      }
    },
    special: {
      "consume flesh": {
        type: "Su",
        text: "Once per round, when a kakuen-taka kills or reduces a creature to negative hit points with its swarm attack, it automatically attempts to consume the target's flesh as a free action (Fortitude DC 24 negates). If the target fails its save, its body is destroyed and the kakuen-taka gains the benefits of a death knell spell. This is a death attack. Create Carrionstorm (Ex) As a full-round action at sunrise, a kakuen-taka (a bhoga swarm with a flesh mansion) can create 1d4 carrionstorms (see page 408 of the Rise of the Runelords Anniversary Edition). These carrionstorms have a blinding poison in addition to their swarm attack. The carrionstorms are not under the control of the kakuen-taka but instinctively follow it, attacking minor foes while the kakuen-taka destroys greater threats. If the flesh mansion is destroyed and the kakuen-taka does not create another one within 24 hours, the carrionstorms are destroyed. Any carrionstorms in excess of four wander away from the kakuen-taka and are automatically destroyed 24 hours later. Carrionstorm Poison (Ex) Swarm-injury; save Fort DC 12, frequency 1/round for 6 rounds, effect permanent blindness, cure 2 consecutive saves. The save DC is Constitution-based (using the carrionstorm's Constitution)."
      },
      trample: {
        universalMonsterAbility: "Trample",
        damage: "5d6",
        saveDC: 10
      },
      "fleshy shield": {
        type: "Ex",
        text: "A newly created flesh mansion has 150 hit points. The swarm takes only half damage from all attacks that deal hit point damage, with the remainder taken by the flesh mansion. Because a swarm of Diminutive creatures is immune to all weapon damage, apply half of all weapon damage to the fleshy shield and ignore the half that would be applied to the swarm. When the flesh mansion reaches 0 hit points, it is destroyed and the swarm functions like a normal swarm (see Flesh Mansion above). A kakuen-taka can repair a damaged flesh mansion by spending a full-round action grafting a corpse into it (restoring 5 hit points for a Small corpse, 10 for Medium, 20 for Large, 50 for Huge)."
      },
      "dimensional snare": {
        type: "Su",
        text: "Any creature affected by the kakuen-taka's swarm attack must succeed at a DC 21 Will save or be affected by dimensional anchor for 1 round. This save is Charisma-based. Flesh Mansion (Ex) A kakuen-taka's bhoga swarm normally inhabits a hollowed-out reconfigured corpse called a flesh mansion, which it uses as a shelter, vehicle, and war machine. When the swarm wears a flesh mansion, it uses the above stat block (unlike a normal swarm, the flesh mansion's slam attacks have reach and threaten squares within its reach). As a standard action, the swarm can abandon its flesh mansion (which falls inert in its square), inhabit an empty flesh mansion, hide within its flesh mansion (gaining cover against all opponents but still being able to use its swarm attack), or stop hiding within the flesh mansion. If the flesh mansion is destroyed, the swarm can create another by performing a ritual that requires 1 hour and the corpse of a Huge creature. The flesh mansion is not a separate creature, nor is it undead; it is merely a corpse the swarm manipulates. Without a flesh mansion, the bhoga swarm's statistics are CE Diminutive outsider (chaotic, evil, extraplanar, swarm); AC 22, touch 21, flat-footed 15; Defensive Abilities swarm traits; Melee swarm (5d6 plus dimensional snare and distraction); Reach 0 ft.; Str 1; CMB -; CMD- (can't be tripped); Stealth +32."
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

  Khaei: {
    source: "Inner Sea Bestiary",
    creatureType: "monstrous humanoid",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Small",
    hd: 4,
    hdVal: 10,
    cr: 3,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 20
    },
    abilities: {
      str: 10,
      dex: 13,
      con: 14,
      int: 7,
      wis: 10,
      cha: 13
    },
    feats: [
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Club",
        name: "Club",
        damage: "1d6"
      },
      {
        weapon: "Touch",
        name: "Touch"
      },
      {
        weapon: "Sling",
        name: "Sling",
        damage: "1d4"
      }
    ],
    defense: {
      naturalArmor: 3
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any underground (beneath Kaer Maga)",
    visualDescription: "This short, stunted humanoid is bald and has weirdly twisted limbs, its body seeming to fade and come apart at the edges.",
    description: "The khaei are a mystery even to themselves. Their twisted limbs give them an awkward, shambling gait, and their personalities are dull and incurious, making them seem in many ways to be simply degenerate humans. At the same time, their bodies' tendency to trail off into mist and shadow, combined with their weird magical attack, suggests they could be much more. A typical khaei stands 4 feet tall and weighs 100 pounds. By far the most unusual aspect of the khaei is their ability to manipulate time. A khaei in fear for her life can grab an attacker and forcefully age him by several years, creating enormous strain on the foe's body. This exertion does damage to the khaei as well, and thus is rarely used, but a would-be tyrant who considers the khaei easy pickings may find himself surrounded by a weeping mob that quickly ages him into decrepitude-then forgives and cares for him. The few scholars who know of the khaei's existence speculate that the creatures may themselves be somehow unstuck in time, perhaps sent back or forward from another era in preparation for a great event. Khaei live in small, isolated communities underground, often inhabiting a single cavern and refusing to explore beyond it or otherwise improve their situation. The only known enclave of khaei in the Inner Sea region is in the Dark Forest, a cavern deep beneath the city of Kaer Maga, where they serve as both subjects and prey for the mysterious dullahan called the Dark Rider. One of the most cherished stories of these khaei concerns a time and place-somewhere in either the past or the future- when there were many more of them, their cavern-forests linked by magical standing stones.",
    organization: "solitary, pair, gang (3-5), or village (6-30)",
    languages: "Undercommon",
    spellLikeAbilities: [
      {
        name: "blur",
        casterLevel: 4,
        timesPerDay: -1
      },
      {
        name: "dancing lights",
        casterLevel: 4,
        timesPerDay: -1
      }
    ],
    skills: {
      Perception: {
        ranks: 4
      },
      Stealth: {
        ranks: 4,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      }
    },
    special: {}
  },

  "Korir-kokembe": {
    source: "Inner Sea Bestiary",
    creatureType: "dragon",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Huge",
    hd: 13,
    hdVal: 12,
    cr: 10,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 40,
      climb: 40,
      maneuverability: "Good",
      fly: 80,
      swim: 40
    },
    abilities: {
      str: 25,
      dex: 15,
      con: 18,
      int: 10,
      wis: 14,
      cha: 15
    },
    feats: [
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
        name: "Sickening Critical",
        type: "Combat"
      },
      {
        name: "Wingover",
        type: "Monster"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "disease, grab",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        specialAbility: "grab",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        specialAbility: "grab",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "dragon traits",
      "Immune to disease, magic paralysis and sleep"
    ],
    defense: {
      naturalArmor: 14
    },
    space: "15 ft.",
    reach: "15 ft. (20 ft. with bite)",
    environment: "warm jungles (Mwangi Expanse)",
    visualDescription: "This green-tined dragon has multiple sets of legs down its long, sinuous body. An oversized gullet bulges in its throat.",
    description: "Korir-kokembe live in the deep, watery jungles of central Garund, plaguing the major rivers and lake systems. While young korir-kokembe may swim near populated waterways to claim their prey, their elder kin prefer more remote backwaters, sloughs, and heavily wooded swamps where they can hunt undisturbed. These degenerate dragons live in a violent symbiosis with the tiny vermin that infest the jungle, hosting colonies of such creatures within their own bodies. Such tiny vermin constantly swarm in and out of the korir-kokembe's gullet, bringing contagion to creatures bitten and allowing the wyrm to expel swarms of pests, or to summon yet more vermin to its aid. While korir-kokembe are capable of flight, they generally prefer to crawl or climb on their eight legs, hunching their bodies like inchworms or twining their coils around their prey while savaging creatures with a barrage of slashing claws.",
    organization: "solitary or nest (2-5)",
    languages: "Draconic",
    note: " See Advanced Palyer's Guide.",
    spellLikeAbilities: [
      {
        name: "freedom of movement",
        casterLevel: 13,
        timesPerDay: -1
      },
      {
        name: "repel vermin",
        casterLevel: 13,
        timesPerDay: -1
      },
      {
        name: "vomit swarm",
        casterLevel: 13,
        limitations: "must wait 1d4 rounds before using this ability again",
        timesPerDay: -1
      },
      {
        name: "entangle",
        casterLevel: 13,
        timesPerDay: 3
      },
      {
        name: "creeping doom",
        casterLevel: 13,
        timesPerDay: 1
      },
      {
        name: "insect plague",
        casterLevel: 13,
        timesPerDay: 1
      }
    ],
    skills: {
      Climb: {
        ranks: 3
      },
      Fly: {
        ranks: 6
      },
      Intimidate: {
        ranks: 10
      },
      "Knowledge (nature)": {
        ranks: 10
      },
      Perception: {
        ranks: 13
      },
      Spellcraft: {
        ranks: 7
      },
      Stealth: {
        ranks: 5,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Survival: {
        ranks: 5
      },
      Swim: {
        ranks: 7
      }
    },
    special: {
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "2d6+7"
      },
      grab: {
        universalMonsterAbility: "Grab"
      },
      rake: {
        universalMonsterAbility: "Rake",
        type: "Ex",
        weaponName: 0
      },
      compression: {
        universalMonsterAbility: "Compression"
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "30 ft."
      },
      disease: {
        universalMonsterAbility: "Disease",
        type: "Ex",
        text: "Bite-injury; save Fort DC 20; onset 1 round; frequency 1 day; effect 1d3 Dex damage and 1d3 Str damage; cure 2 consecutive saves."
      }
    }
  },

  Termagant: {
    source: "Inner Sea Bestiary",
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
    hd: 17,
    hdVal: 10,
    cr: 17,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 20,
      maneuverability: "Perfect",
      fly: 40
    },
    abilities: {
      str: 28,
      dex: 19,
      con: 30,
      int: 16,
      wis: 25,
      cha: 21
    },
    feats: [
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
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
        value: "Slams",
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
        name: "Spring Attack",
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
            damageType: "bleed"
          }
        ],
        type: "primary"
      },
      {
        weapon: "Tentacle",
        name: "7 Tentacles",
        specialAbility: "grab",
        damage: "1d4",
        type: "secondary"
      }
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "good and silver"
      },
      SR: {
        value: 28
      },
      naturalArmor: 17
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any (Plane of Shadow)",
    visualDescription: "This hovering iron maiden heaves forth a monstrously pregnant mass of tortured limbs and raw tentacles.",
    description: "Coddling, cooing mothers of nails and aberrant life, kyton termagants seek to make all living creatures adopted members of their malformed brood. That most of their purposefully deformed progeny die shortly after coming into their care only compels termagants to search farther for sturdier beings better suited to the honor of becoming their misshapen children.",
    organization: "solitary, pair, or circle (3-5)",
    languages: "Common, Infernal; telepathy 100 ft.",
    spellLikeAbilities: [],
    skills: {
      Bluff: {
        ranks: 17
      },
      Fly: {
        ranks: 20
      },
      Heal: {
        ranks: 20
      },
      Intimidate: {
        ranks: 20
      },
      "Knowledge (planes)": {
        ranks: 17
      },
      "Knowledge (religion)": {
        ranks: 20
      },
      Perception: {
        ranks: 17
      },
      "Sense Motive": {
        ranks: 17
      },
      Stealth: {
        ranks: 17
      }
    },
    special: {
      "flux infusion": {
        type: "Ex"
      },
      rupture: {
        type: "Su",
        text: "When killed, a termagant explodes in a blast of its flux infusion poison. All living creatures within 15 feet must succeed at a DC 28 Fortitude saving throw or be poisoned. The save DC is Constitution-based."
      },
      "shared rupture": {
        type: "Su",
        text: "Any creature killed while poisoned by a termagant explodes. All living creatures within 10 feet of the creature must succeed at a DC 23 Fortitude save or be poisoned. The save DC is based on the termagant's Constitution with a -5 penalty. Unnerving Gaze (Su) A creature that succumbs to a termagant's unnerving gaze becomes nauseated for 1d4 rounds as its mind attempts to comprehend the horrors it has witnessed."
      },
      "unnerving gaze": {
        type: "Su",
        text: "A creature that succumbs to a termagant's unnerving gaze becomes nauseated for 1d4 rounds as its mind attempts to comprehend the horrors it has witnessed.",
        preText: "30 ft., DC 23"
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        damageType: "good weapons and spells, silver weapons",
        value: 10
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  Lorthact: {
    source: "Inner Sea Bestiary",
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
    size: "Medium",
    hd: 32,
    hdVal: 10,
    cr: 25,
    racialFeatures: [
      "Darkvision 60 ft.",
      "True Seeing"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 22,
      dex: 33,
      con: 35,
      int: 30,
      wis: 26,
      cha: 37
    },
    feats: [
      {
        name: "Deflect Arrows",
        type: "Combat"
      },
      {
        name: "Destructive Dispel",
        type: "General"
      },
      {
        name: "Dispel Synergy",
        type: "General"
      },
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Empower Spell-Like Ability",
        type: "Monster",
        value: "Horrid wilting",
        choiceSource: "Empower Spell-Like Ability"
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
        name: "Greater Spell Penetration",
        type: "General"
      },
      {
        name: "Improved Great Fortitude",
        type: "General"
      },
      {
        name: "Improved Unarmed Strike",
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
        value: "Greater dispel magic",
        choiceSource: "Quicken Spell-Like Ability"
      },
      {
        name: "Spell Penetration",
        type: "General"
      },
      {
        name: "Weapon Finesse",
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
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        bonuses: [
          {
            source: "inherent",
            value: 1,
            appliesTo: "damageType",
            damageType: "int drain"
          }
        ],
        type: "primary"
      },
      {
        weapon: "Quarterstaff",
        enchantments: [
          {
            name: "Enhancement Bonus +2",
            source: "inherent"
          }
        ],
        name: "Quarterstaff",
        damage: "1d6/1d6"
      }
    ],
    defense: {
      DR: {
        value: 20,
        damageType: "good and silver"
      },
      SR: {
        value: 36
      },
      naturalArmor: 10
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Korvosa)",
    visualDescription: "This devilish humanoid has five horns growing out of his forehead that resemble a crown. He stands on stout cloven hooves.",
    description: "Lorthact the Unraveler, also named the Dwimmerlaik, the Ur-Magius, and the Diabolus Mystere, was once a high-ranking duke of Hell. Atypically, he was not solely bound to the service of a single archdevil, instead serving openly at various times as a mystical advisor and consultant on magical matters under both Geryon and Mephistopheles. Some believed him to be secretly a favorite of Asmodeus himself; this supposed favor provided some measure of protection from his jealous rivals. His last mistress in Hell was Eiseth, Whore-Queen of the erinyes, but when Eiseth uncovered a plot to reverse their positions-Lorthact arrogating himself to lordship and reducing her to mere consort-her wrath was enormous and eternal. Lorthact's allies deserted him lest they taste the fury of the erinyes. Lorthact proclaimed his innocence, but he saw condemnation awaiting and fled, racing across the planes with the whips of the erinyes at his heels. After several planar refuges proved no shelter from his relentless pursuers, Lorthact sought solace in the mortal realms. Laying several false leads, he then doubled back to the diabolists of Cheliax, the first place his pursuers looked for him on Golarion. But after they had moved on, he slipped back into places they thought already thoroughly scoured. Adopting a succession of guises, he kept his presence hidden for years, but he never felt truly comfortable under the gaze of so many potentially unfriendly eyes. Seeking a more remote locale, he traveled to the farthest reaches of Chelish sovereignty: the Varisian city-state of Korvosa. There he found the perfect patsy in the vain and corrupt Lord Volshyenek Ornelos. Rebuffed by House Thrune in his quest to restore his youth and vigor, Volshyenek was easy prey for Lorthact's inveigling. The devil bound him in a web of lies and stole not only his soul but also his life. Impersonating Lord Ornelos for over 200 years, he became a dominant figure in Korvosa, shadow-master of the Acadamae and sire of a great house. Meanwhile, he sought ways to rebuild his diabolic power and his store of souls so one day he might buy his way back to ducal favor in Hell. In the end, Eiseth's diabolic assassins found him at long last, and he was forced to fake his own death. Yet he still dominates Korvosa from the shadows, controlling the Acadamae through his descendant Toff Ornelos. Little happens in the city without his knowledge, and he plays the part of the mage through shadow-magic, illusions, limited wishes, and the stolen magic of others. However, casters who delve too deeply into his or Korvosa's secrets find themselves at odds with the deadly duke, his powers honed by centuries of exile to undermine and destroy mages who might uncover his identity or unravel his schemes.",
    organization: "solitary",
    languages: "Abyssal, Aklo, Azlanti, Celestial, Common, Draconic, Dwarven, Elven, Giant, Ignan, Infernal, Undercommon; telepathy 300 ft.",
    note: "UC See Ultimate Combat.",
    gear: "boots of speed, rods of cancellation (2), staff of power",
    otherGear: "bracers of armor +6, mirror of life trapping, ring of evasion, ring of protection +5",
    spellLikeAbilities: [
      {
        name: "mind blank",
        casterLevel: 25,
        timesPerDay: -1
      },
      {
        name: "tongues",
        casterLevel: 25,
        timesPerDay: -1
      },
      {
        name: "true seeing",
        casterLevel: 25,
        timesPerDay: -1
      },
      {
        name: "alter self",
        casterLevel: 25,
        timesPerDay: -1
      },
      {
        name: "blasphemy",
        casterLevel: 25,
        timesPerDay: -1
      },
      {
        name: "dominate person",
        casterLevel: 25,
        timesPerDay: -1
      },
      {
        name: "freedom of movement",
        casterLevel: 25,
        timesPerDay: -1
      },
      {
        name: "arcane sight, greater",
        casterLevel: 25,
        timesPerDay: -1
      },
      {
        name: "dispel magic, greater",
        casterLevel: 25,
        timesPerDay: -1
      },
      {
        name: "invisibility, greater",
        casterLevel: 25,
        timesPerDay: -1
      },
      {
        name: "scrying, greater",
        casterLevel: 25,
        timesPerDay: -1
      },
      {
        name: "shadow conjuration, greater",
        casterLevel: 25,
        timesPerDay: -1
      },
      {
        name: "shadow evocation, greater",
        casterLevel: 25,
        timesPerDay: -1
      },
      {
        name: "teleport, greater",
        casterLevel: 25,
        timesPerDay: -1
      },
      {
        name: "suggestion, mass",
        casterLevel: 25,
        timesPerDay: -1
      },
      {
        name: "programmed image",
        casterLevel: 25,
        timesPerDay: -1
      },
      {
        name: "unholy aura",
        casterLevel: 25,
        timesPerDay: -1
      },
      {
        name: "banishment",
        casterLevel: 25,
        timesPerDay: 3
      },
      {
        name: "dispel magic, greater",
        casterLevel: 25,
        limitations: "Metamagic: Quicken ",
        timesPerDay: 3
      },
      {
        name: "horrid wilting",
        casterLevel: 25,
        limitations: "Metamagic: Empower ",
        timesPerDay: 3
      },
      {
        name: "polymorph any object",
        casterLevel: 25,
        timesPerDay: 3
      },
      {
        name: "spell turning",
        casterLevel: 25,
        timesPerDay: 3
      },
      {
        name: "dominate monster",
        casterLevel: 25,
        timesPerDay: 1
      },
      {
        name: "limited wish",
        casterLevel: 25,
        timesPerDay: 1
      },
      {
        name: "mage's disjunction",
        casterLevel: 25,
        timesPerDay: 1
      },
      {
        name: "prismatic sphere",
        casterLevel: 25,
        timesPerDay: 1
      },
      {
        name: "time stop",
        casterLevel: 25,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 25
      },
      Bluff: {
        ranks: 32
      },
      Craft0: {
        subSkill: "alchemy",
        ranks: 17
      },
      Diplomacy: {
        ranks: 35
      },
      Disguise: {
        ranks: 35
      },
      Fly: {
        ranks: 12
      },
      Intimidate: {
        ranks: 32
      },
      "Knowledge (arcana)": {
        ranks: 35
      },
      "Knowledge (planes)": {
        ranks: 32
      },
      "Knowledge (dungeoneering)": {
        ranks: 10
      },
      "Knowledge (engineering)": {
        ranks: 10
      },
      "Knowledge (geography)": {
        ranks: 10
      },
      "Knowledge (nobility)": {
        ranks: 10
      },
      "Knowledge (religion)": {
        ranks: 10
      },
      "Knowledge (history)": {
        ranks: 20
      },
      "Knowledge (local)": {
        ranks: 20
      },
      Perception: {
        ranks: 32
      },
      Perform0: {
        subSkill: "act",
        ranks: 10
      },
      "Sense Motive": {
        ranks: 19
      },
      "Sleight of Hand": {
        ranks: 19
      },
      Spellcraft: {
        ranks: 35
      },
      Stealth: {
        ranks: 32
      },
      "Use Magic Device": {
        ranks: 32
      }
    },
    special: {
      "Intelligence drain": {
        type: "Su",
        text: "Lorthact drains 1 point of Intelligence each time he hits with a weapon or natural weapon (Will DC 39 negates). Alternatively, he can make a single melee touch attack per round, dealing no hit point damage but draining 2d4 points of Intelligence (Will DC 39 half). After draining Intelligence from a creature, Lorthact gains the benefit of foresight (as the spell) against that creature for 1 minute."
      },
      "scholastic masquerade": {
        type: "Su",
        text: "When targeting a dominated wizard with his spell reservoir ability, Lorthact can also steal a school power from that wizard's chosen school. He can steal one of the wizard's 1st-level school powers by using three levels of his spell reservoir, both 1st-level school powers at a cost of six levels, and all school powers at a cost of nine levels. While Lorthact retains these powers, the target wizard cannot use them. The stolen powers function at the target wizard's level. Lorthact can steal school powers or a prepared spell from a dominated wizard, but not both. He may steal school powers from multiple schools if he has multiple wizards dominated."
      },
      "spell reservoir": {
        type: "Su",
        text: "Lorthact can drain prepared arcane spells from the mind of a creature he has dominated and store them for later use, similarly to a ring of spell storing. Draining a spell requires 1 full-round action if he is able to touch the target, or 1 minute to perform through the mental link provided by the dominate effect; in either case, no saving throw is allowed. He can hold no more than one stolen spell from each dominated caster in his spell reservoir, and the total level of stolen spells cannot exceed 25. These stolen spells take effect at the original caster's level."
      },
      "infernal duke traits": {
        type: "Ex"
      },
      "temporal anomaly": {
        type: "Su",
        text: "Lorthact exists slightly outside of the normal timestream. Spells that predict the future-such as augury, divination, foresight, and moment of prescience- cannot perceive him and provide no benefit against him or information about him. In addition, whenever a creature within 60 feet of him uses time stop, Lorthact can act normally within the duration of the time stop, as if he had cast it himself. As neither Lorthact nor the caster are frozen in time with respect to each other, each can target and affect the other with attacks, spells, or other effects they create, though they cannot affect other creatures within the duration of the time stop. This ability functions even if Lorthact is flat-footed or unaware of his opponent."
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        damageType: "good weapons or spells",
        value: 5
      },
      evasion: {
        universalMonsterAbility: "Evasion"
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

  "Deadly Mantis": {
    source: "Inner Sea Bestiary",
    creatureType: "vermin",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Colossal",
    hd: 16,
    hdVal: 8,
    cr: 11,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 60
    },
    abilities: {
      str: 36,
      dex: 18,
      con: 21,
      int: "-",
      wis: 11,
      cha: 5
    },
    feats: [],
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
      "Immune to mind-affecting effects"
    ],
    defense: {
      naturalArmor: 19
    },
    space: "30 ft.",
    reach: "30 ft. (10 ft. with bite)",
    environment: "tropical jungles (Mediogalti Island)",
    visualDescription: "This terrifying monstrosity towers taller than the mightiest jungle trees, its forelimbs raised in a meditative, deadly stance.",
    description: "The legendary deadly mantis stalks the deepest jungles of Mediogalti Island and the Mwangi Expanse. Tales about this lethal predator preying upon such mammoth creatures as drakes and giants frighten even the bravest hunters. Deadly mantises are sacred to the followers of Achaekek, the Mantis God, who keep the massive beasts well fed, and bring them sacrificial victims and livestock. Followers of Achaekek have also been known to serve as protectors of the dens of deadly mantises. Though creatures of this size and power obviously need no guardians, the devout followers guard their lairs and prevent adventurers from slaying the mighty insects. The typical deadly mantis stands 40 feet tall, 60 feet long, and weighs several tons.",
    organization: "solitary",
    spellLikeAbilities: [],
    skills: {
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
      fling: {
        type: "Ex",
        text: "If a deadly mantis begins its turn with a Large or smaller creature grabbed in its claws, it can, as a standard action, fling that creature up to 30 feet away. Creatures thrown in this way take 3d6 points of damage as if they had fallen from the same distance."
      },
      "rending mandibles": {
        type: "Ex",
        text: "If a deadly mantis hits with both claws and successfully grabs a foe, it can make an immediate bite attack against that foe as a secondary attack. This bite attack has a +12 attack bonus and deals 4d6+6 points of damage. In addition to dealing damage, the mantis can tear away the victim's armor as a free action by making a combat maneuver check. If the mantis is successful, the target's armor is ripped from its body. If the target fails a DC 31 Reflex save, the armor subjected to this attack loses half its hit points and gains the broken condition. The save DC is Strength-based."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  Mockingfey: {
    legs: 2,
    arms: 0,
    source: "Inner Sea Bestiary",
    creatureType: "fey",
    subTypes: [],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Tiny",
    hd: 3,
    hdVal: 6,
    cr: 1,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 20,
      maneuverability: "Good",
      fly: 60
    },
    abilities: {
      str: 6,
      dex: 16,
      con: 13,
      int: 7,
      wis: 12,
      cha: 13
    },
    feats: [
      {
        name: "Flyby Attack",
        type: "Monster"
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
        type: "primary"
      }
    ],
    defense: {},
    space: "2-1/2 ft.",
    reach: "0 ft.",
    environment: "any forests (First World)",
    visualDescription: "This tiny sprite has the head of a humanoid and the body of a brilliantly colored parrot.",
    description: "Mockingfey originally stem from the First World, where they're regarded as entertainment by locals and nuisances by visitors, who are the usual butt of the creatures' pranks. The pint-sized fey often congregate in large colonies called japes or mockingdells, inhabiting the trees near a commonly traversed path or meadow. When an intelligent creature enters the grove, one of the bird-sprites flies down to perch on the traveler's shoulder or some nearby vantage. It then promptly shifts shape to become a perfect, miniature doppelganger of the creature in question, proceeding to cavort and imitate the newcomer in a most convincing and unf lattering manner, mimicking the creature's tone but chattering only gibberish. This gibberish is not solely for comic effect, as while mockingfey are eager (if distractible) students in most matters, they refuse to use verbal language of any sort, believing that words unnecessarily constrain the things they describe. Instead, they communicate through gestures, pantomime, and elaborate dances. Those who think them mere beasts, however, are quickly set straight, as enemies of mockingfey are confronted with disorienting magic and the mockingfey's capricious allies from the First World. While many people find mockingfeys' antics irritating, the little creatures are surprisingly useful allies, with a loyal, friendly nature toward those who treat them well, and an insatiable curiosity that makes them surprisingly well informed about their surroundings. This same curiosity extends to things most folks would leave alone, such as the portal-like breach scars between the Material Plane and the First World. When such planar rifts occur, mockingfey are often some of the first creatures through, with colonies found in Kyonin, the River Kingdoms, and sylvan groves around the Inner Sea. Those illusionists and other spellcasters who seek such puckish familiars (and take the Improved Familiar feat) often find them worth the resulting hassle-if just barely. A typical mockingfey is 8 inches tall and weighs 2 pounds.",
    organization: "solitary, pair, or jape (3-20)",
    spellLikeAbilities: [
      {
        name: "daze",
        casterLevel: 3,
        timesPerDay: -1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 7
      },
      Disguise: {
        ranks: 3
      },
      Fly: {
        ranks: 1
      },
      Perception: {
        ranks: 3
      },
      Stealth: {
        ranks: 2
      }
    },
    special: {
      mock: {
        type: "Su",
        text: "As a standard action, a mockingfey can magically take on the appearance of any creature it can see. This functions like disguise self, but with no restrictions on duration, creature type, or size. The mockingfey does not change size, and if the creature it's mimicking is larger than it, the mockingfey simply appears to be a miniature version. Anyone interacting with this effect can attempt a DC 12 Will save to see through the ruse. A mockingfey can maintain a given form indefinitely, but cannot change to any form other than its own without visual reference-once a given disguise has ended, the fey must see the subject again to resume that form. The save DC is Charisma-based."
      }
    }
  },

  Moxix: {
    source: "Inner Sea Bestiary",
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
    size: "Gargantuan",
    hd: 23,
    hdVal: 10,
    cr: 20,
    racialFeatures: [
      "Blindsense 60 ft.",
      "Darkvision 60 ft.",
      "See Invisibility"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 30,
      dex: 17,
      con: 32,
      int: 15,
      wis: 24,
      cha: 25
    },
    feats: [
      {
        name: "Bleeding Critical",
        type: "Combat"
      },
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
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Dazing Assault",
        type: "Combat"
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
        value: "Slam",
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
        name: "Quicken Spell-Like Ability",
        type: "Monster",
        value: "Mind fog",
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
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Gore",
        name: "Gore",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Slam",
        name: "4 Slams",
        specialAbility: "grab",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "adamantine and good"
      },
      naturalArmor: 25
    },
    space: "20 ft.",
    reach: "20 ft.",
    environment: "warm jungles (Yoha's Graveyard)",
    visualDescription: "This strange, four-armed fiend appears to be constructed completely out of stone. Dried blood stains its body.",
    description: "Moxix, the Drinker of Human Hopes, is a unique demon bound to the mysterious isle called Yoha's Graveyard in the Shackles. Appearing as an eldritch four-armed statue of weathered gray stone, Moxix has a single emerald eye centered in his horrible face. A nest of twisted horns rests atop his head, and his fang-f illed maw is perpetually stained with blood. Those courageous explorers traveling to his seemingly idyllic isle are driven mad by strange visions and dreams, or by inscrutable but disturbing carvings, idols, and glyphs that litter the island. Even if they withstand the island's maddening magic, adventurers in search of legendary lost riches may confront Moxix himself and be scourged of mind, body, and soul. Moxix's baleful presence and malevolent awareness leer from every crudely carved icon, relief, and idol bearing his likeness, bringing with them a tinge of insanity and a ravenous hunger for human flesh. Ghosts and pentagram-branded cannibals and lunatics are all that remain of ill-fated expeditions to Yoha's Graveyard. Moxix found his first worshipers among the terrible cyclopes of Ghol-Gan as their civilization fell into ruin. As the one-eyed giants slipped more and more into depravity and violence, they began worshiping foul, otherworldly creatures their brothers and sisters brought up from the vaults of the Darklands after their exposure to the serpentfolk's wicked ways. Among the dozens of fiendish icons was Moxix, who came into influence among the cyclopes as their practice of sacrifice and cannibalism increased. It was at this time Moxix became known as the Drinker of Human Hopes. The ancient Ghol-Gan cyclopes fed him hundreds of captured humans, most of whom were of Azlanti descent. In one instance early in his time among the Ghol-Gan cyclopes, Moxix's followers captured an entire Azlanti embassy and fed them to the strange demon one by one while their companions watched in horror. Some say the sacrifices' spirits still inhabit the region, their wailing cries drifting through the hills and jungles of the haunted island. As his reign of blood began to spread from its base in southern Ghol-Gan, a raging contingent of rival cyclopes from elsewhere in the failing empire raided the demon-worshiping clan dedicated to Moxix, bringing both brute strength and the magic of powerful shamans and oracles to bear against it. The battle raged for 2 days, and in the end an oracle sacrificed her life in a final ploy to destroy Moxix. However, the oracle only succeeded in binding him to the high mountain peak that would one day become the island known as Yoha's Graveyard. To this very day, Moxix remains trapped in his island domain, ever eager to draw creatures to the ziggurat he calls home. There he delights in turning people to cannibalism, destruction, and insanity. Obscuring and disease-laden mists swirl around the island, keeping its lands hidden and protected from trespassers. Once per year, however, on the first full moon after the rainy season, the mists part for a single night. Some explorers have mounted expeditions to Moxix's island during these events, but as of yet, no one has returned the same person she used to be; all bear the mark of insanity Moxix stamps on their being.",
    organization: "solitary",
    languages: "Abyssal, Aklo, Common; telepathy 300 ft.",
    note: " See Advanced Player's Guide.",
    spellLikeAbilities: [
      {
        name: "mind blank",
        casterLevel: 23,
        timesPerDay: -1
      },
      {
        name: "see invisibility",
        casterLevel: 23,
        timesPerDay: -1
      },
      {
        name: "crushing despair",
        casterLevel: 23,
        timesPerDay: -1
      },
      {
        name: "detect magic",
        casterLevel: 23,
        timesPerDay: -1
      },
      {
        name: "dispel magic",
        casterLevel: 23,
        timesPerDay: -1
      },
      {
        name: "eyebite",
        casterLevel: 23,
        timesPerDay: -1
      },
      {
        name: "protection from good",
        casterLevel: 23,
        timesPerDay: -1
      },
      {
        name: "stone shape",
        casterLevel: 23,
        timesPerDay: -1
      },
      {
        name: "create undead",
        casterLevel: 23,
        timesPerDay: 3
      },
      {
        name: "feeblemind",
        casterLevel: 23,
        timesPerDay: 3
      },
      {
        name: "insanity",
        casterLevel: 23,
        timesPerDay: 3
      },
      {
        name: "mind fog",
        casterLevel: 23,
        limitations: "Metamagic: Quicken ",
        timesPerDay: 3
      },
      {
        name: "phantasmal killer",
        casterLevel: 23,
        timesPerDay: 3
      },
      {
        name: "song of discord",
        casterLevel: 23,
        timesPerDay: 3
      },
      {
        name: "symbol of pain",
        casterLevel: 23,
        timesPerDay: 3
      },
      {
        name: "desecrate",
        casterLevel: 23,
        timesPerDay: 1
      },
      {
        name: "teleport, greater",
        casterLevel: 23,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: 1
      },
      {
        name: "summon",
        casterLevel: 23,
        limitations: "level 9, any 1 CR 19 or lower demon 100%",
        timesPerDay: 1
      },
      {
        name: "symbol of insanity",
        casterLevel: 23,
        timesPerDay: 1
      },
      {
        name: "weird",
        casterLevel: 23,
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 23
      },
      Climb: {
        ranks: 18
      },
      Diplomacy: {
        ranks: 18
      },
      Intimidate: {
        ranks: 26
      },
      "Knowledge (planes)": {
        ranks: 23
      },
      "Knowledge (religion)": {
        ranks: 19
      },
      Perception: {
        ranks: 23
      },
      "Sense Motive": {
        ranks: 23
      },
      Spellcraft: {
        ranks: 23
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "60-ft. cone",
        damage: "usable every 1d4 rounds",
        saveAbility: "cha",
        text: "Moxix can exhale a cone of acidic fog laced with a terrible disease. Any creature damaged by the acid of his breath weapon must succeed at a DC 28 Fortitude save or contract this disease. A humanoid afflicted with this disease must attempt a new Will save each day. If the humanoid fails, it attacks and attempts to eat the weakest humanoid nearby. If the save is successful, it resists this impulse. A humanoid who dies or is killed while afflicted rises as a ghast at the next midnight. The save DC is Charisma-based. Moxix's Delectation: Inhaled; save Fortitude DC 28; onset 1 day; frequency 1/day; effect 1d4 Con and 1d4 Wis damage; cure 2 consecutive saves."
      },
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "2d6+10"
      },
      rend: {
        universalMonsterAbility: "Rend",
        type: "Ex",
        weaponName: 5
      },
      gush: {
        type: "Ex",
        text: "Anytime Moxix takes more than 50 points of weapon damage in a round, blood and pus spews forth from the wound. The blood is extremely slippery and sprays out in a 20-foot radius, coating all creatures and surfaces in the area. Any creatures in the area must succeed at a DC 28 Reflex save or drop any items they are holding. A saving throw must be made each round that the creature attempts to use or pick up an item it previously dropped. In addition, the area coated in the gushing blood is difficult to move about in, and creatures moving through the area must succeed at a DC 15 Acrobatics check or fall prone. Hopedrinker (Su) Moxix emits an aura that drains hope from all within 60 feet. All morale bonuses are suppressed within this aura, regardless of their source. In addition, spells and spell-like abilities granting a morale bonus are affected as dispel magic used to counterspell (caster level 23rd) every round at the beginning of Moxix's turn. A successful dispel check negates the entire effect (not just the morale bonus) and grants Moxix temporary hit points equal to the spell's level (to a maximum of 100). These temporary hit points last 1 hour. Mindshatter (Su) If a creature fails its save against Moxix's eyebite spell-like ability, as a standard action before the end of his turn he may unravel the target's mind and spirit. This acts as greater dispel magic (caster level 23rd) against effects that protect against mind-affecting or necromantic effects and automatically affects the target as enervation and touch of idiocy (duration 24 hours)."
      },
      hopedrinker: {
        type: "Su",
        text: "Moxix emits an aura that drains hope from all within 60 feet. All morale bonuses are suppressed within this aura, regardless of their source. In addition, spells and spell-like abilities granting a morale bonus are affected as dispel magic used to counterspell (caster level 23rd) every round at the beginning of Moxix's turn. A successful dispel check negates the entire effect (not just the morale bonus) and grants Moxix temporary hit points equal to the spell's level (to a maximum of 100). These temporary hit points last 1 hour. Mindshatter (Su) If a creature fails its save against Moxix's eyebite spell-like ability, as a standard action before the end of his turn he may unravel the target's mind and spirit. This acts as greater dispel magic (caster level 23rd) against effects that protect against mind-affecting or necromantic effects and automatically affects the target as enervation and touch of idiocy (duration 24 hours).",
        preText: "60 ft."
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
      },
      {
        damageType: "fire",
        value: 20
      }
    ]
  },

  Nightripper: {
    source: "Inner Sea Bestiary",
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
    hd: 27,
    hdVal: 10,
    cr: 24,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Detect Good",
      "Detect Law",
      "True Seeing"
    ],
    speed: {
      base: 60
    },
    abilities: {
      str: 29,
      dex: 32,
      con: 39,
      int: 18,
      wis: 23,
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
        name: "Dazzling Display",
        type: "Combat"
      },
      {
        name: "Deadly Stroke",
        type: "Combat"
      },
      {
        name: "Exotic Weapon Proficiency",
        type: "Combat",
        value: "Bastard sword",
        choiceSource: "Exotic Weapon Proficiency"
      },
      {
        name: "Greater Feint",
        type: "Combat"
      },
      {
        name: "Greater Weapon Focus",
        type: "Combat",
        value: "Bastard sword",
        choiceSource: "Greater Weapon Focus"
      },
      {
        name: "Greater Weapon Specialization",
        type: "Combat",
        value: "Bastard sword",
        choiceSource: "Greater Weapon Specialization"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bastard sword",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Claw",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Talon",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Disarm",
        type: "Combat"
      },
      {
        name: "Improved Feint",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Quick Draw",
        type: "Combat"
      },
      {
        name: "Quicken Spell-Like Ability",
        type: "Monster",
        value: "Blade barrier",
        choiceSource: "Quicken Spell-Like Ability"
      },
      {
        name: "Shatter Defenses",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Bastard sword",
        choiceSource: "Weapon Focus"
      },
      {
        name: "Weapon Specialization",
        type: "Combat",
        value: "Bastard sword",
        choiceSource: "Weapon Specialization"
      }
    ],
    attacks: [
      {
        weapon: "Bastard sword",
        enchantments: [
          {
            name: "Enhancement Bonus +5",
            source: "inherent"
          },
          {
            name: "Vorpal",
            source: "inherent"
          }
        ],
        name: "Bastard sword",
        damage: "1d10"
      },
      {
        weapon: "Claw",
        name: "Claw",
        damage: "1d4",
        bonuses: [
          {
            source: "inherent",
            value: "2d6",
            appliesTo: "damageType",
            damageType: "bleed"
          }
        ],
        type: "primary"
      },
      {
        weapon: "Talon",
        name: "2 Talons",
        damage: "1d4",
        bonuses: [
          {
            source: "inherent",
            value: "2d6",
            appliesTo: "damageType",
            damageType: "bleed"
          }
        ],
        type: "primary"
      }
    ],
    immunities: [
      "Immune to charm and compulsion effects, death effects"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "cold iron and good"
      },
      SR: {
        value: 35
      },
      naturalArmor: 17
    },
    space: "5 ft.",
    reach: "5 ft. (15 ft. with talons)",
    environment: "any (Kurnugia)",
    visualDescription: "Twin talons attached to grotesque back-appendages drip blood from this hideously emaciated, jackal-legged albino demon.",
    description: "Even today, centuries after his 13th and final execution, memories of Riktus Scroon continue to haunt the nightmares of those who live along the northern coastlines of the Inner Sea. During his reign of horror, the man who would come to be known as the Nightripper used his position in the now disbanded Graven Guard of Taldor to move along the shipping lanes with ease. His position among the mercenary company afforded him time in countless settlements from Golisfar to Corentyn, and in these unsuspecting towns he hunted. Scroon preferred young victims, that their vanishing would cause the most distress possible-his favorites were young adults freshly in love, although he seemed to have had no preference between man or woman. He abducted his victims with astonishing skill, tormenting them for hours with his blades before leaving them broken and bleeding to death at the bottom of a specially prepared pit far outside of town. The mass murderer was finally captured by Cesandra Dayne, an obsessed priest of Sarenrae who had lost her fiancee and her father to Scroon. Only by forsaking the teachings of her church was she able to trap the murderer in the slums of Almas, and although the resulting fight saw the death of a dozen innocent bystanders, in the end Cesandra had her man alive. After Scroon was turned over to the law in his hometown of Oppara, the authorities thought to prosecute him for the deaths of no fewer than 46 known victims. When Scroon gleefully bragged of having murdered nearly a thousand men, women, and children, the authorities were eager to write off his ravings, yet after Scroon provided exacting details to the sites of 953 victims, and one after the other his directions led to actual graves, the killer's sentencing was hastened-death by hanging. Yet Scroon survived. One after the other, attempts to execute the Nightripper failed-headsmen died of fright as they lifted the axe, guillotines malfunctioned, magic failed. Each botched execution left Scroon more disfigured, but his legend grew. The 13th and final execution put the man down once and for all-or so it was hoped. Scroon's soul went to the Boneyard, where something amazing happened-he passed through to the Abyss with his mind and memories intact. So remarkable was his retention of his identity that it drew the attention of Lamashtu herself, who pulled the killer's soul from the shuddersome bosom of the Abyss and made him her personal assassin, raising him from a broken shell of a soul to a nascent demon lord with greater power than he'd ever hoped for in life. His form had changed, transforming into a shape more befitting one of his horrific nature, yet his mind remained sharp and clear. Nightripper harbors a strong desire for revenge, but for now he serves dutifully as Lamashtu's favored torturer and assassin and as the lord of the dungeons below her palace in the Abyssal realm of Kurnugia. But it is said that someday, when he has repaid his debt to the Mother of Demons for his ascension and rescue from the dregs of the Abyss, the Nightripper will return to his old haunts. Only this time, it will not be individuals he breaks and bleeds and buries in his pits-it will be entire cities.",
    organization: "solitary",
    languages: "Abyssal, Celestial, Common, Draconic; telepathy 300 ft.",
    note: " See Advanced Player's Guide.",
    spellLikeAbilities: [
      {
        name: "air walk",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "detect good",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "detect law",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "freedom of movement",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "true seeing",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "unholy aura",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "dispel magic, greater",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "teleport, greater",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "phantasmal killer",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "spiked pit",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "telekinesis",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "acid pit",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "blade barrier",
        casterLevel: 20,
        limitations: "Metamagic: Quicken ",
        timesPerDay: 3
      },
      {
        name: "harm",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "hungry pit",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "reverse gravity",
        casterLevel: 20,
        timesPerDay: 1
      },
      {
        name: "summon",
        casterLevel: 20,
        limitations: "level 9, any demon or combination of demons whose total combined CR is 20 or lower 100%",
        timesPerDay: 1
      },
      {
        name: "time stop",
        casterLevel: 20,
        timesPerDay: 1
      },
      {
        name: "weird",
        casterLevel: 20,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 18
      },
      Intimidate: {
        ranks: 30
      },
      "Knowledge (history)": {
        ranks: 27
      },
      "Knowledge (local)": {
        ranks: 27
      },
      "Knowledge (religion)": {
        ranks: 27
      },
      "Knowledge (nobility)": {
        ranks: 30
      },
      Perception: {
        ranks: 27
      },
      "Sense Motive": {
        ranks: 27
      },
      Stealth: {
        ranks: 27
      },
      "Use Magic Device": {
        ranks: 30
      }
    },
    special: {
      "curse of living death": {
        type: "Su",
        text: "Once per round, as a free action as he kills a living creature, Nightripper can choose to afflict that target with the curse of living death. The target can resist this curse with a successful DC 30 Will save right before it dies, allowing the victim to die normally. If the victim fails its save, it enters a sort of half-living state; it becomes completely helpless, unable to take any actions whatsoever, but remains conscious and aware of the world, and of the pain in its body. It cannot be resurrected or otherwise restored to life until the curse is lifted. While the curse remains in effect, the victim takes 1d4 points of Intelligence, Wisdom, and Charisma drain every day as any lingering shreds of sanity are blasted away. When each ability score is drained to zero, the DC of the curse increases by +4. A character suffering the curse of living death can remain in this state forever, but as long as any one of her mental ability scores is at zero, she is capable only of enduring pain and cannot observe the world around her. Even if the character's body is destroyed, the cursed victim's consciousness remains as a disembodied and invisible presence at the site of this destruction, and cannot be resurrected or released to the afterlife. The save DC is Charisma-based."
      },
      "slowing gaze": {
        type: "Su",
        text: "Slowed (as the slow spell) for 1 round, 30 feet, Will DC 30 negates. The save DC is Charisma-based."
      },
      "sneak attack": {
        universalMonsterAbility: "Sneak Attack",
        bonus: "3d6"
      },
      "swift cuts": {
        type: "Ex",
        text: "As long as he is attacking with a sword, Nightripper treats foes who are staggered, nauseated, or under the effects of a slow spell (or similar effects, such as his gaze) as if they were flat-footed."
      },
      "sword mastery": {
        type: "Ex",
        text: "Nightripper possesses several sword-related bonus feats normally restricted to fighters."
      },
      "nascent demon lord traits": {
        type: "Ex"
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        damageType: "good weapons or spells",
        value: 15
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
        damageType: "fire",
        value: 30
      }
    ]
  },

  Oronci: {
    source: "Inner Sea Bestiary",
    creatureType: "aberration",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Large",
    hd: 7,
    hdVal: 8,
    cr: 5,
    racialFeatures: [
      "Darkvision 120 ft.",
      "Tremorsense 60 ft."
    ],
    speed: {
      base: 40,
      climb: 40
    },
    abilities: {
      str: 23,
      dex: 17,
      con: 18,
      int: 7,
      wis: 10,
      cha: 16
    },
    feats: [
      {
        name: "Acrobatic Steps",
        type: "General"
      },
      {
        name: "Improved Overrun",
        type: "Combat"
      },
      {
        name: "Nimble Moves",
        type: "General"
      },
      {
        name: "Power Attack",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Battleaxe",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "Battleaxe",
        damage: "1d8"
      },
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "poison",
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
      naturalArmor: 6
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "any underground (Darklands)",
    visualDescription: "A cruel face and orc features dominate this creature's upper half, while its lower quarters bear the sinewy shape of a centipede.",
    description: "When drow fleshwarping alchemy is turned and focused upon an orc, the obscene result is called an oronci. Upon submersion in a fleshwarper's alchemical ichor, the unfortunate orc's legs merge, and its lower body turns black and elongates to a length of approximately 15 feet. This new body divides into segments, with each segment sprouting a pair of short, sturdy, thin legs. Finally, the horror's tusks connect to newly grown poison ducts that constantly drip poisonous spittle. The orc's head and upper body stay relatively intact as far as fleshwarping goes, though its eyes sometimes adopt a dark, vacant stare. With the exception of the driders, the oronci are among the most useful of the obscenities produced by fleshwarping. They embody all the savage brutality of an orc warrior, but mounted centaurlike upon an even larger, more powerful frame. Being less intelligent than drow, oronci make better shock troopers and advance soldiers for drow armies than the dark elves themselves. Oronci who have escaped the slavery of the dark elves have become favored champions for certain clever orc chieftains. Some oronci even overcome their sensitivity to daylight given time, which makes them better suited to terrorize the surface lands.",
    organization: "solitary, pair, or nest (3-9)",
    languages: "Orc",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 1
      },
      Climb: {
        ranks: 2
      },
      Perception: {
        ranks: 2
      },
      Stealth: {
        ranks: 4
      },
      Swim: {
        ranks: 2
      }
    },
    special: {
      frenzy: {
        type: "Ex",
        text: "Once per day, an oronci that takes damage in combat can fly into a frenzy as a free action the following round. While in this state, an oronci cannot use any Charisma-, Dexterity-, or Intelligence-based skill checks, but functions as if under the effects of a haste spell. The oronci can continue to frenzy for up to 3 rounds, after which it is staggered for 1 round."
      },
      spit: {
        type: "Ex",
        text: "An oronci can spit poison at a target within 30 feet as a standard action. This is a ranged touch attack, and can only be performed once every 1d6 rounds. If the attack is successful, the target is affected by the poison just as if it had been injured. The oronci can still poison a target with each successful bite attack. Undersized Weapons (Ex) Although an oronci is Large, its upper torso is the same size as that of a Medium humanoid. As a result, oronci wield weapons as if they were one size category smaller than their actual size (Medium for most oronci)."
      },
      ferocity: {
        universalMonsterAbility: "Ferocity"
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Bite-injury; save Fort DC 17; frequency 1/round for 6 rounds; effect 1d3 Dex; cure 2 consecutive saves.",
        saveDC: 10
      }
    },
    resistances: [
      "light sensitivity"
    ]
  },

  "Petrified Maiden": {
    source: "Inner Sea Bestiary",
    creatureType: "undead",
    subTypes: [],
    alignments: [
      "Neutral Evil"
    ],
    size: "Medium",
    hd: 9,
    hdVal: 8,
    cr: 6,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 18,
      dex: 12,
      con: "-",
      int: 9,
      wis: 11,
      cha: 16
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
          }
        ],
        name: "Scimitar",
        damage: "1d6"
      },
      {
        weapon: "Slam",
        name: "Slam",
        specialAbility: "curse of stone",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "adamantine"
      },
      SR: {
        value: 17
      },
      naturalArmor: 10
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any land (Field of Maidens)",
    visualDescription: "Fresh blood seeps from the cracks of this weathered but exquisitely detailed stone sculpture of a warrior woman.",
    description: "Petrified maidens are the remains of the army of warrior women led by the pirate queen Mastrien Slash in her failed invasion of southern Geb. The wizard king Geb himself cursed the warriors, turning them to stone and creating what is now known as the Field of Maidens. While a petrified maiden appears at first glance to be a construct, it has in fact been animated by the restless undead spirit of the warrior maiden it once was. The nature of Geb's curse remains mysterious even today-it is simply known that occasionally the spirits of the slain inhabit their stony corpses and lurch to vengeful unlife. When this occurs, the maiden's stone weapon changes to steel (though it remains fused within the maiden's grasp). The weapon can be recovered when the maiden is destroyed. Connected to one another by some unknown force-perhaps a side effect of Geb's curse-those petrified maidens whose remains have been removed from the Field of Maidens do everything in their power to rejoin their sisters.",
    organization: "solitary, gang (2-4), or crew (5-20)",
    languages: "Common (cannot speak)",
    spellLikeAbilities: [],
    skills: {
      Intimidate: {
        ranks: 9
      },
      Perception: {
        ranks: 9
      },
      Stealth: {
        ranks: 9
      }
    },
    special: {
      "weapon expertise": {
        type: "Ex",
        text: "A petrified maiden is proficient with any one martial weapon. It gains a +1 bonus on attack and damage rolls with this weapon."
      },
      "channel resistance": {
        universalMonsterAbility: "Channel Resistance",
        bonus: 2
      },
      "petrified body": {
        type: "Ex",
        text: "The stony flesh of a petrified maiden reacts to certain spells and effects as noted below. • A transmute rock to mud spell deals 1d6 points of damage per caster level to a petrified maiden, with no saving throw. • Transmute mud to rock immediately heals any and all damage taken by a petrified maiden. • A stone to flesh spell does not actually change the petrified maiden's structure, but negates its damage reduction and spell resistance for 1 round."
      },
      reconstitution: {
        type: "Su",
        text: "As long as Geb's original curse that first afflicted the petrified maidens remains unbroken, any petrified maiden (animate or not) that is damaged or destroyed slowly returns to its undamaged form, even if parts of it were utterly destroyed or carried away. For a relatively undamaged petrified maiden, this slow process can be completed in a week or so. For a petrified maiden reduced to rubble, it might take years. If a petrified maiden is destroyed while under the effects of a stone to flesh spell, it cannot reconstitute and is permanently destroyed."
      },
      "curse of stone": {
        type: "Su",
        text: "Curse-touch; save Fort DC 17; onset 1 minute; frequency 1/day; effect 1d6 Dex. A creature afflicted by the curse of stone slowly turns to stone, its skin turning an ashen gray and hardening into a stony texture. For every 3 points of Dexterity damage taken, the victim gains a +1 natural armor bonus. The curse of stone can only be cured by removing the curse followed by a stone to flesh spell to undo the damage it has done. If the curse is not removed first, stone to flesh only restores 1d3 points of Dexterity, though these can be lost again as the curse continues to spread. The save DC is Charisma-based."
      }
    }
  },

  Memitim: {
    source: "Inner Sea Bestiary",
    creatureType: "outsider",
    subTypes: [
      "extraplanar",
      "psychopomp"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 16,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Spiritsense",
      "True Seeing"
    ],
    speed: {
      base: 30,
      maneuverability: "Good",
      fly: 100
    },
    abilities: {
      str: 24,
      dex: 29,
      con: 26,
      int: 17,
      wis: 20,
      cha: 21
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
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
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Scythe",
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
        name: "Weapon Focus",
        type: "Combat",
        value: "Scythe",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Scythe",
        enchantments: [
          {
            name: "Enhancement Bonus +3",
            source: "inherent"
          }
        ],
        name: "Scythe",
        damage: "2d4"
      }
    ],
    immunities: [
      "Immune to acid"
    ],
    defense: {
      SR: {
        value: 26
      },
      naturalArmor: 13
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (the Boneyard)",
    visualDescription: "Eyes the dead cast of onyx glare from beneath the legionnaire's helmet worn by this ominous, black-winged angel.",
    description: "Soldiers know memitims as the angels of death, the black-winged specters whose own ominous hosts compose a third impartial legion fielded in the clouds above the bloodiest battlegrounds. As combatants shed their mortal forms in droves, memitims ready their weapons, prepared to drive back all manner of monstrous, soul-hungry scavengers that lurk just beyond the veil of death. While daemons, night hags, and undead number among their most persistent foes, memitims strike against any who would deny the dead passage into the River of Souls or who would cut a life short to harvest its essence. While most memitims impartially preside over bloodshed and massacres, their full wrath manifests against any who would cut numerous lives short in unnatural pursuit of their souls.",
    organization: "solitary, pair, or dirge (3-7)",
    languages: "Abyssal, Celestial, Common, Infernal",
    spellLikeAbilities: [
      {
        name: "detect good",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "detect evil",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "dimensional anchor",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "dispel magic",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "freedom of movement",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "gaseous form",
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
        limitations: "self only",
        timesPerDay: -1
      },
      {
        name: "plane shift",
        casterLevel: 14,
        limitations: "self only",
        timesPerDay: -1
      },
      {
        name: "speak with dead",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "status",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "true seeing",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "veil",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "finger of death",
        casterLevel: 14,
        timesPerDay: 5
      },
      {
        name: "forbiddance",
        casterLevel: 14,
        timesPerDay: 5
      },
      {
        name: "undeath to death",
        casterLevel: 14,
        timesPerDay: 5
      },
      {
        name: "energy drain",
        casterLevel: 14,
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 16
      },
      Diplomacy: {
        ranks: 19
      },
      "Escape Artist": {
        ranks: 19
      },
      Fly: {
        ranks: 19
      },
      Intimidate: {
        ranks: 19
      },
      "Knowledge (planes)": {
        ranks: 16
      },
      "Knowledge (religion)": {
        ranks: 19
      },
      Perception: {
        ranks: 16
      },
      "Sense Motive": {
        ranks: 0
      },
      Stealth: {
        ranks: 16
      }
    },
    special: {
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "or vulture; beast shape I",
        type: ", or vulture; beast shape I"
      },
      "spirit touch": {
        type: "Ex"
      },
      "terminal aura": {
        type: "Su",
        text: "Every round, any creature within 50 feet of a memitim that has -1 or fewer hit points but is stable must succeed at a DC 23 Will saving throw or be affected by the spell bleed. Any dying creature within range of this aura does not receive a Constitution check to stabilize, but can still be healed as normal-though it may be affected by bleed in subsequent rounds if it is not restored to 0 or more hit points. Any creatures with fast healing or regeneration must also succeed at a DC 23 Will save every round or that ability does not function for 1 round. The save DC is Charisma-based.",
        preText: "50 ft., DC 23"
      }
    }
  },

  Shoki: {
    source: "Inner Sea Bestiary",
    creatureType: "outsider",
    subTypes: [
      "extraplanar",
      "psychopomp"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 10,
    hdVal: 10,
    cr: 9,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Detect Chaos",
      "Detect Evil",
      "Detect Good",
      "Detect Law",
      "Detect Magic",
      "Low-Light Vision",
      "Spiritsense"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 16,
      dex: 19,
      con: 22,
      int: 18,
      wis: 21,
      cha: 17
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
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Persuasive",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Quarterstaff",
        enchantments: [
          {
            name: "Enhancement Bonus +2",
            source: "inherent"
          }
        ],
        name: "Quarterstaff",
        specialAbility: "soul lock",
        damage: "1d6/1d6"
      }
    ],
    immunities: [
      "Immune to acid, charm, cold, fear, sleep"
    ],
    defense: {
      SR: {
        value: 24
      },
      naturalArmor: 10
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (the Boneyard)",
    visualDescription: "A gnarled staff keeps this grizzled hunchback standing under the weight of his ramlike horns and his massive snail shell.",
    description: "Shokis are the collectors of lingering souls, tasked with compelling even the most deluded beings to take the first step into the River of Souls. Their tactics are varied, but most start by counseling the wayward dead using theosophical arguments and blunt warnings of the ravenous things that wait to feed upon lost spirits. Each shoki bears powerful tools to aid it in such pursuits-eclectic collections of holy symbols and withered staves of cold iron capable of imprisoning a single soul. Shokis only use their staves against the most stubborn or demented souls, whom they capture and personally escort to the Boneyard for judgment.",
    organization: "solitary",
    languages: "Abyssal, Celestial, Common, Infernal",
    spellLikeAbilities: [
      {
        name: "detect chaos",
        casterLevel: 9,
        timesPerDay: -1
      },
      {
        name: "detect evil",
        casterLevel: 9,
        timesPerDay: -1
      },
      {
        name: "detect good",
        casterLevel: 9,
        timesPerDay: -1
      },
      {
        name: "detect law",
        casterLevel: 9,
        timesPerDay: -1
      },
      {
        name: "detect magic",
        casterLevel: 9,
        timesPerDay: -1
      },
      {
        name: "etherealness",
        casterLevel: 9,
        timesPerDay: -1
      },
      {
        name: "invisibility",
        casterLevel: 9,
        limitations: "self only",
        timesPerDay: -1
      },
      {
        name: "cure moderate wounds, mass",
        casterLevel: 9,
        limitations: "harm undead only",
        timesPerDay: -1
      },
      {
        name: "protection from evil",
        casterLevel: 9,
        timesPerDay: -1
      },
      {
        name: "protection from good",
        casterLevel: 9,
        timesPerDay: -1
      },
      {
        name: "searing light",
        casterLevel: 9,
        timesPerDay: -1
      },
      {
        name: "plane shift",
        casterLevel: 9,
        limitations: "self only",
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 10
      },
      Diplomacy: {
        ranks: 13
      },
      Intimidate: {
        ranks: 13
      },
      "Knowledge (arcana)": {
        ranks: 13
      },
      "Knowledge (planes)": {
        ranks: 10
      },
      "Knowledge (religion)": {
        ranks: 13
      },
      Perception: {
        ranks: 10
      },
      "Sense Motive": {
        ranks: 10
      },
      Spellcraft: {
        ranks: 10
      },
      Stealth: {
        ranks: 10
      }
    },
    special: {
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "any humanoid; alter self"
      },
      "spirit touch": {
        type: "Ex"
      },
      "soul lock": {
        type: "Su",
        text: "Once per day, a shoki can use its +2 cold iron quarterstaff to capture the soul of a creature at the threshold of death-any undead creature or being with 0 or fewer hit points. The target must succeed at a DC 19 Will save or be slain, its spirit locked within the shoki's staff. A corporeal undead transforms into a corpse if affected by this ability, while an incorporeal undead is trapped bodily within the staff (this ability cancels a ghost's ability to rejuvenate). A spirit trapped within a shoki's staff cannot be returned to life through any means short of true resurrection, miracle, or wish. A trapped soul can be freed if the shoki wills it, or by casting banishment, dismissal, or freedom upon the staff. A shoki's staff can only contain one soul at a time. The save DC is Wisdom-based."
      }
    }
  },

  Viduus: {
    source: "Inner Sea Bestiary",
    creatureType: "outsider",
    subTypes: [
      "extraplanar",
      "psychopomp"
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
      "Low-Light Vision",
      "Spiritsense"
    ],
    speed: {
      base: 30,
      climb: 30
    },
    abilities: {
      str: 10,
      dex: 11,
      con: 18,
      int: 15,
      wis: 19,
      cha: 16
    },
    feats: [
      {
        name: "Alertness",
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
        weapon: "Quill",
        name: "Quill",
        specialAbility: "censor, expurgate",
        damage: "1d4"
      }
    ],
    immunities: [
      "Immune to mind-affecting effects"
    ],
    defense: {
      SR: {
        value: 15
      },
      naturalArmor: 6
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (the Boneyard)",
    visualDescription: "This dour being has a mostly humanoid form enwrapped in a cocoonlike lower body, and wields a large quill.",
    description: "Viduuses occupy the libraries and scriptoriums located atop Pharasma's spire. While lesser psychopomps record every soul's death and ultimate fate upon the planes, viduuses are interested in more extraordinary souls-their lives, deeds, deaths, and secrets. Existence holds many mysteries, and those mortals who had brushes with the extraordinary have their tales and confessions recorded by these semi-cocooned scholars and added to the volumes of the Boneyard's expansive library, known as the Catalogue of Last Days. Although pretentious in the extreme, viduuses prove quite knowledgeable about many historical and planar secrets, and what they don't know they generally have a decent idea of how to research, potentially summoning assistants from across the planes to aid them.",
    organization: "solitary, pair, or library (3-12)",
    languages: "Abyssal, Celestial, Common, Infernal",
    spellLikeAbilities: [],
    skills: {
      Bluff: {
        ranks: 5
      },
      Climb: {
        ranks: 0
      },
      Diplomacy: {
        ranks: 8
      },
      "Knowledge (history)": {
        ranks: 8
      },
      "Knowledge (planes)": {
        ranks: 5
      },
      "Knowledge (religion)": {
        ranks: 8
      },
      Perception: {
        ranks: 5
      },
      "Sense Motive": {
        ranks: 5
      },
      Stealth: {
        ranks: 5
      }
    },
    special: {
      "spirit touch": {
        type: "Ex"
      },
      transformation: {
        type: "Su",
        text: "A viduus that is reduced to 0 hit points transforms. Its cocoon body bursts open, expelling a swarm of biting white-and-black centipedes (same statistics as a spider swarm) and a bank of mind fog centered on the viduus's square. A viduus can purposefully transform by spending three consecutive full-round actions, in which case it reforms somewhere in the Boneyard 1 month later."
      },
      censor: {
        type: "Su",
        text: "A viduus that strikes a living creature with its quill can rewrite that creature's memories. The creature must succeed at a DC 15 Will save or have its memories affected in a manner similar to the spell modify memory. The viduus can rewrite 1 day's worth of the target's memories with a single strike. As a result, the creature is either stunned or confused for the next 1d4 rounds (50% chance of either). At the GM's discretion, this might have longer-term effects. A creature's memories can be restored by lesser restoration, modify memory, or similar spells. Memories lost in this manner are copied into one of the numerous tomes protected by the viduus. This is a mind-affecting effect. The DC is Charisma-based."
      },
      expurgate: {
        type: "Su",
        text: "A viduus that strikes a dead creature-such as a soul, petitioner, or undead creature-with its quill can obliterate that creature's memories. The creature must succeed at a DC 15 Will save or have all of its memories erased. It retains language and basic knowledge, but no details as to the events of its life. This typically leaves the creature calm and indifferent to all beings around it. This memory loss is permanent, though the memories can be restored by lesser restoration, modify memory, or similar spells. Memories lost in this manner are copied into one of the numerous tomes protected by the viduus. This is a mind-affecting effect. The DC is Charisma-based."
      }
    }
  },

  Chemnosit: {
    source: "Inner Sea Bestiary",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Colossal",
    hd: 27,
    hdVal: 10,
    cr: 23,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Tremorsense 180 ft."
    ],
    speed: {
      base: 40,
      burrow: 40
    },
    abilities: {
      str: 36,
      dex: 13,
      con: 34,
      int: 5,
      wis: 14,
      cha: 21
    },
    feats: [
      {
        name: "Ability Focus",
        type: "Monster",
        value: "Hungry gaze",
        choiceSource: "Ability Focus"
      },
      {
        name: "Awesome Blow",
        type: "Combat"
      },
      {
        name: "Bleeding Critical",
        type: "Combat"
      },
      {
        name: "Blind-Fight",
        type: "Combat"
      },
      {
        name: "Critical Focus",
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
        value: "Ray",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Toothed tentacle",
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
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Toothed tentacle",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Tentacle",
        name: "6 Tentacles",
        specialAbility: "grab",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Ray",
        name: "Ray"
      }
    ],
    immunities: [
      "Immune to ability damage, acid, bleed, cold, disease, energy drain, mind-affecting effects, paralysis, permanent wounds, petrification, poison, polymorph"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "epic"
      },
      SR: {
        value: 34
      },
      naturalArmor: 36
    },
    space: "30 ft.",
    reach: "30 ft.",
    environment: "any (Darklands)",
    visualDescription: "This massive beast possesses a mouth of rasping teeth and tentacles with biting mouths. In the center of its maw rests a glowing evil eye.",
    description: "The dread burrower Chemnosit is an engine of destruction, able to devour the stoutest construction and the mightiest of mortals with ease. His power lies in the profane glamour of his glowing eye, inspiring a gruesome urge to devour-a hunger for the flesh of one's own kind. For all his power, this is the true dread of the Monarch Worm. While he burrows constantly through the Darklands to the deepest Vaults of Orv, he sometimes rises to Golarion's surface bringing annihilation in his wake, as those corrupted by his awful eye wreak devastation upon themselves and their own people. Chemnosit drinks in the carnage like a feast before devouring any survivors.",
    organization: "solitary",
    languages: "Aklo",
    spellLikeAbilities: [
      {
        name: "disintegrate",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "earthquake",
        casterLevel: 27,
        timesPerDay: 1
      }
    ],
    skills: {
      Climb: {
        ranks: 4
      },
      Perception: {
        ranks: 22
      },
      Swim: {
        ranks: 1
      }
    },
    special: {
      "hungry gaze": {
        type: "Su",
        text: "Chemnosit's gaze attack deals 3d6 points of nonlethal damage plus fatigue at a distance of 120 feet. A successful DC 30 Fortitude save negates the fatigue. Creatures already fatigued become exhausted; creatures already exhausted become staggered. A creature that fails its save must succeed at a DC 30 Will save or gain an overwhelming compulsion to eat flesh of creatures of its type, including its own if no other is available. The save DCs are Charisma-based."
      },
      spines: {
        type: "Ex",
        text: "Creatures striking Chemnosit with natural weapons, unarmed strikes, melee weapons, or melee touch attacks take 2d6+12 points of damage."
      },
      "swallow whole": {
        universalMonsterAbility: "Swallow Whole",
        damage: "2d10+13 plus 1d4 Str damage",
        hp: "47 hp",
        AC: "AC 28"
      },
      hibernation: {
        type: "Ex"
      },
      "unstoppable force": {
        type: "Ex"
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        value: 30
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

  Volnagur: {
    source: "Inner Sea Bestiary",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Colossal",
    hd: 25,
    hdVal: 10,
    cr: 22,
    racialFeatures: [
      "All-Around Vision",
      "Blindsense 300 ft.",
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 20,
      maneuverability: "Perfect",
      fly: 100
    },
    abilities: {
      str: 34,
      dex: 22,
      con: 35,
      int: 7,
      wis: 14,
      cha: 21
    },
    feats: [
      {
        name: "Ability Focus",
        type: "Monster",
        value: "Eye ray",
        choiceSource: "Ability Focus"
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
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Precise Shot",
        type: "Combat"
      },
      {
        name: "Improved Vital Strike",
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
        name: "Point-Blank Shot",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Precise Shot",
        type: "Combat"
      },
      {
        name: "Snatch",
        type: "Monster"
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
        weapon: "Razor tongue",
        name: "3 Razor tongues",
        specialAbility: "blood rage",
        damage: "2d6",
        bonuses: [
          {
            source: "inherent",
            value: "1d6",
            appliesTo: "damageType",
            damageType: "bleed, 1 con bleed,"
          }
        ]
      },
      {
        weapon: "Wing",
        name: "6 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Eye ray",
        name: "4 Eye rays",
        specialAbility: "nausea",
        damage: "4d6"
      }
    ],
    immunities: [
      "Immune to ability damage, acid, bleed, disease, electricity, energy drain, mind-affecting effects, paralysis, permanent wounds, petrification, poison, polymorph"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "epic"
      },
      SR: {
        value: 33
      },
      naturalArmor: 30
    },
    space: "30 ft.",
    reach: "30 ft. (50 ft. with razor tongues)",
    environment: "any (Casmaron)",
    visualDescription: "This immense creature's warty body is shaped like a many-pointed star, and from it sprout nearly a dozen different wings.",
    description: "Volnagur, the End-Singer, is an alien thing whose very presence brings turbulence, disturbance, and cacophony wherever he soars. He flits with effortless grace upon a hideous assortment of mismatched wings that constantly molt and rot from within, the oldest wings falling off as new ones spring up and grow in their place. His skirling cry awakens madness and blood fury in those who listen, as does the touch of his impossibly long, jagged-razor tongues. Alien harmonics induced by his grotesque gaze cripple those upon whom he gazes.",
    organization: "solitary",
    languages: "Aklo",
    note: " See Advanced Palyer's Guide.",
    spellLikeAbilities: [
      {
        name: "acid fog",
        casterLevel: 25,
        timesPerDay: -1
      },
      {
        name: "invisibility, greater",
        casterLevel: 25,
        timesPerDay: -1
      },
      {
        name: "song of discord",
        casterLevel: 25,
        timesPerDay: -1
      },
      {
        name: "winds of vengeance",
        casterLevel: 25,
        timesPerDay: 3
      }
    ],
    skills: {
      Fly: {
        ranks: 18
      },
      Perception: {
        ranks: 15
      }
    },
    special: {
      hibernation: {
        type: "Ex"
      },
      "shatter silence": {
        type: "Su",
        text: "Volnagur's presence unravels magical silence effects or effects that provide energy resistance against sonic attacks. At the beginning of its turn, any such effect within 60 feet is targeted as dispel magic (caster level 25th)."
      },
      "unstoppable force": {
        type: "Ex"
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        value: 30
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "300 ft."
      },
      "blood rage": {
        universalMonsterAbility: "Blood Rage"
      },
      nausea: {
        type: "Ex"
      }
    }
  },

  "Spellscar Fext": {
    source: "Inner Sea Bestiary",
    creatureType: "undead",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 10,
    hdVal: 8,
    cr: 7,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 25,
      dex: 16,
      con: "-",
      int: 8,
      wis: 13,
      cha: 19
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
        value: "Stealth",
        choiceSource: "Skill Focus"
      }
    ],
    attacks: [
      {
        weapon: "Slam",
        name: "2 Slams",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "cold iron"
      },
      SR: {
        value: 18
      },
      naturalArmor: 6
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Spellscar Desert)",
    visualDescription: "This undead horror's upper body is twisted and malformed, and its hands end in tangles of blunt, electric-blue tendrils.",
    description: "The abominable undead known as Spellscar fexts are formed by wayward spellcasters who perish in the sprawling badlands of the Mana Wastes, their bodies and souls perverted by the unpredictable primal energies that surge throughout the Spellscar Desert. The average Spellscar fext stands about 6 feet tall and weighs 200 pounds. The unnatural and corruptive transformations a fallen victim undergoes as it turns into a Spellscar fext render its body hard and especially resilient to the magical energies of most spellcasters. In a peculiar twist, the same corruptive energy that causes spells to bounce off of Spellscar fexts' hides also strangely renders them susceptible to glass and glass-based weapons. Talented gunsmiths from Alkenstar have managed to craft glass bullets for rif le-wielding adventurers and monster hunters for the purpose of eradicating Spellscar fexts.",
    organization: "solitary, pair, or hunt (3-5)",
    languages: "Common",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 6
      },
      Intimidate: {
        ranks: 5
      },
      Perception: {
        ranks: 10
      },
      Stealth: {
        ranks: 9
      }
    },
    special: {
      "deadly slam": {
        type: "Ex",
        text: "A Spellscar fext threatens a critical hit with its slam attack on rolls of 18-20."
      },
      "dispelling critical": {
        type: "Su",
        text: "Whenever a Spellscar fext successfully scores a critical hit with its slam attack, the creature struck must succeed at a DC 19 Will save or be affected as though by the targeted dispel version of a dispel magic spell (caster level 10th). The save DC is Charisma-based."
      },
      "ravage magic": {
        type: "Su",
        text: "Any targeted spell or spell-like ability that fails to penetrate a Spellscar fext's spell resistance is absorbed by the fext and warped into a form of primal magic. A Spellscar fext can twist only a number of spell levels per round equal to its Charisma modifier (4 for most Spellscar fexts); any spells in excess of this limit automatically bypass a Spellscar fext's spell resistance and don't trigger this ability. Roll on the following table to determine the effect of a spell that has been affected by a Spellscar fext's ravage magic ability. Alternatively, a Spellscar mutant may use any of the sample primal magic events found effects with the CR of the Spellscar fext. d% Effect 01-40 The spell has no effect. 41-70 The Spellscar fext emits a burst of negative energy, dealing a number of points of negative energy damage equal to 1d6 x the spell level of the triggering spell to all creatures in a 30-foot-radius burst. 71-90 The Spellscar fext instantly switches places with the spellcaster that targeted the fext with the triggering spell as though by dimension door. 91-100 The spell is immediately turned back on its caster via spell turning. Vulnerable to Glass (Ex) A Spellscar fext's hide is particularly vulnerable to the penetrations of glass and glass-based weapons. Spellscar fexts take 150% as much damage as normal from glass-headed piercing or slashing weapons."
      }
    },
    resistances: [
      "vulnerable to glass"
    ]
  },

  "Star Monarch": {
    source: "Inner Sea Bestiary",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Chaotic Good"
    ],
    size: "Huge",
    hd: 12,
    hdVal: 10,
    cr: 9,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30,
      maneuverability: "Average",
      fly: 80
    },
    abilities: {
      str: 18,
      dex: 23,
      con: 18,
      int: 11,
      wis: 17,
      cha: 18
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
        name: "Iron Will",
        type: "General"
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
        weapon: "Tail",
        name: "Tail",
        damage: "2d6"
      }
    ],
    immunities: [
      "Immune to cold"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "silver"
      },
      SR: {
        value: 20
      },
      naturalArmor: 7
    },
    space: "15 ft.",
    reach: "5 ft. (15 ft. with tail)",
    environment: "any (Varisia)",
    visualDescription: "This brilliantly colored moth rises taller than a house. A long tail resembling peacock feathers trails behind the creature.",
    description: "Star monarchs are magical emissaries of Desna, the guide and protector of those who wander and guardian of dreams. They fly in glowing clouds through the void of space, visiting Golarion to watch over the faithful of Desna. Star monarchs spin streamers of sticky silver, weaving evanescent gossamer cocoons to enrobe those who slumber under their protection. These cocoons sublimate into wisps of half-remembered dreams with the coming of dawn. Star monarchs rarely intervene directly in combat, more often helping good creatures by aiding them from the shadows, guiding their paths, or guarding them while they sleep. Star monarchs can be found across Golarion in a variety of iridescent hues, and all are sacred to followers of the Song of the Spheres.",
    organization: "solitary, pair, or rabble (3-6)",
    languages: "Common (can't speak); telepathy touch",
    spellLikeAbilities: [
      {
        name: "entropic shield",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "dancing lights",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "restful sleep",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "deep slumber",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "dream",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "wandering star motes",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "cloak of dreams",
        casterLevel: 12,
        timesPerDay: 1
      }
    ],
    skills: {
      Fly: {
        ranks: 9
      },
      Perception: {
        ranks: 8
      },
      "Sense Motive": {
        ranks: 7
      }
    },
    special: {
      glowsap: {
        type: "Ex",
        text: "As a standard action, a star monarch can spray a target within 30 feet with an adhesive spittle as a ranged touch attack. A creature struck is affected as a tanglefoot bag (Reflex DC 20 partial; see Core Rulebook 160). In addition, this adhesive glows under starlight or moonlight, limning the target as faerie fire if used outdoors at night. The save DC is Constitution-based."
      },
      rake: {
        universalMonsterAbility: "Rake",
        type: "Ex",
        weaponName: 3
      },
      starflight: {
        type: "Su",
        text: "A star monarch can survive in the void of outer space. It flies through space at an incredible speed. Although exact travel times vary, a trip within a single solar system should take 3d20 hours, while a trip beyond should take 3d20 days (or more, at the GM's discretion)."
      },
      "navigational awareness": {
        type: "Ex",
        text: "Star monarchs never become lost and are immune to maze spells or any effect that would cause them to lose their sense of direction."
      },
      "no breath": {
        universalMonsterAbility: "No Breath",
        text: ""
      },
      "toxic flesh": {
        type: "Ex",
        text: "A star monarch's flesh is poisonous. A creature biting it or ingesting any part of its body becomes sickened for 1d4 rounds (Fortitude DC 20 negates) and is affected as if it had consumed a dose of arsenic (Core Rulebook 558)."
      },
      dreamwarden: {
        type: "Su",
        text: "Any sleeping creature within 30 feet of a star monarch is protected by protection from evil and sanctuary (Will DC 15 negates). The save DC is Constitution-based.",
        preText: "30 ft."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  "Thin Man": {
    source: "Inner Sea Bestiary",
    creatureType: "fey",
    subTypes: [],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Medium",
    hd: 7,
    hdVal: 6,
    cr: 4,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 30,
      burrow: 20
    },
    abilities: {
      str: 18,
      dex: 16,
      con: 15,
      int: 8,
      wis: 11,
      cha: 9
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
        damage: "1d4",
        bonuses: [
          {
            source: "inherent",
            value: "1d4",
            appliesTo: "damageType",
            damageType: "bleed"
          }
        ],
        type: "primary"
      }
    ],
    immunities: [
      "Immune to poison"
    ],
    defense: {
      naturalArmor: 3
    },
    space: "5 ft.",
    reach: "5 ft. (10 ft. with claws)",
    environment: "warm plains (Nuat)",
    visualDescription: "The creature is unbelievably slender and has teeth filed to points. Its long, gangly arms end in hands with wickedly sharp nails.",
    description: "The mysterious thin men of Nuat have long been a part of Rahadoumi legend. They inhabited their tiny island home long before human colonists first arrived, and the so-called thin men have lived on the periphery of Rahadoumi society or among the indigenous cane fields since times long forgotten. Their natural coloration and slender frames serve particularly well in concealing them from the prying eyes of suspicious humans. The thin men use their naturally hard and sharp claws to dig narrow burrows beneath the fields and copses of the island. Their bodies have few bones-instead, their skeletal frameworks are almost entirely cartilaginous in nature, which allows them to navigate their tiny burrows with relative ease and escape the notice of their human neighbors. Their close connection with the earth likewise gives them immunity to natural toxins. Though the thin men generally keep to themselves, only observing their human counterparts from the shadows, on occasion they tire of the meager fare of plant roots, grubs, and small vermin on which they normally subsist, and catch a local farmer alone in his fields or traveling at night. On these occasions, they murder the hapless victim and feast on his remains. Their uncanny ability to hide in the endless waving fields of cane lets them avoid the patrol of the Pure Legion or posse of vengeful farmers that comes around to search for the killer.",
    organization: "solitary, pair, or band (3-8)",
    languages: "Aklo",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 7
      },
      "Escape Artist": {
        ranks: 7,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Perception: {
        ranks: 7
      },
      Stealth: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 12
          }
        ]
      },
      Survival: {
        ranks: 7
      }
    },
    special: {
      compression: {
        universalMonsterAbility: "Compression"
      },
      vanish: {
        type: "Su",
        text: "Once per day as a move action while benefiting from concealment, a thin man can simply vanish from sight. This gives it a +20 bonus on Stealth checks and the ability to hide in plain sight for 1 round per Hit Die even when there is no cover, concealment, or shadow nearby. If it makes an attack, the thin man is no longer in its vanished state. It usually uses this ability when attempting to elude pursuit."
      }
    }
  },

  "Umbral Shepherd": {
    source: "Inner Sea Bestiary",
    creatureType: "outsider",
    subTypes: [
      "incorporeal"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Medium",
    hd: 6,
    hdVal: 10,
    cr: 5,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 0,
      maneuverability: "Perfect",
      fly: 30
    },
    abilities: {
      str: "-",
      dex: 14,
      con: 12,
      int: 15,
      wis: 13,
      cha: 15
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
      }
    ],
    attacks: [
      {
        weapon: "Touch",
        name: "Touch",
        specialAbility: "Touch"
      }
    ],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Plane of Shadow)",
    visualDescription: "This mass of shadow possesses a horrific demon face. Several writhing tentacles sprout from its grublike body.",
    description: "Umbral shepherds are parasitic entities eternally devoted to Zon-Kuthon. Brought forth onto Golarion primarily by the shadowcallers of Pangolais in Nidal, the evil creatures relish the chance to infest host bodies and use these vessels to further the work of their dark master. Those infested by such creatures are identifiable primarily by their pure-black eyes and fervor for the Midnight Lord, as well as the slow decay of their bodies. Umbral shepherds also serve as specialized torturers, with their ability to create bloodless cavities and tunnels through a prisoner's body with a touch of their horrible, burrowing tentacles. Whether Zon-Kuthon created the umbral shepherds or simply discovered and adopted them into his faith is unclear, but the shadowy parasites are irreversibly linked to both him and their home plane. Though they lust for the chance to spread their worship elsewhere, exposure to the light and energy of other planes is extremely harmful to them, thus necessitating the use of host bodies. Umbral shepherds value their hosts as vehicles but ultimately see them as disposable, knowing that without powerful magic their vessels will gradually sicken and die. An umbral shepherd that believes its vessel is close to death almost always abandons it rather than risking death itself, and usually transfers to a new host. In their natural state, umbral shepherds are shaped like limbless, demon-faced humans made of coherent shadow, and are capable of spawning any number of tentacles of varying sizes. Some religious scholars believe that the first Joyful Things may have been attempts by Kuthites to change themselves into something closer to the shepherds, yet this remains the unsubstantiated speculation of outsiders.",
    organization: "solitary, pair, or choir (3-12)",
    languages: "Common, Infernal, Shadowtongue",
    spellLikeAbilities: [],
    skills: {
      Bluff: {
        ranks: 5
      },
      Disguise: {
        ranks: 9
      },
      Fly: {
        ranks: 4
      },
      Intimidate: {
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
      Stealth: {
        ranks: 6
      }
    },
    special: {
      touch: {
        type: "Su",
        text: "An umbral shepherd that succeeds at a touch attack can attempt to dissolve a portion of the victim's flesh into shadow, which then dissipates, dealing 1d4 points of Constitution damage. Victims that succeed at a DC 15 Fortitude save take half damage. The umbral shepherd can use this ability even while possessing a host body. The save DC is Charisma-based."
      }
    },
    resistances: [
      "planebound"
    ]
  },

  "Veiled Master": {
    source: "Inner Sea Bestiary",
    creatureType: "aberration",
    subTypes: [
      "aquatic",
      "shapechanger"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Large",
    hd: 16,
    hdVal: 8,
    cr: 14,
    racialFeatures: [
      "Darkvision 120 ft."
    ],
    speed: {
      base: 10,
      swim: 80
    },
    abilities: {
      str: 22,
      dex: 22,
      con: 27,
      int: 21,
      wis: 19,
      cha: 22
    },
    feats: [
      {
        name: "Arcane Strike",
        type: "Combat"
      },
      {
        name: "Combat Casting",
        type: "General"
      },
      {
        name: "Combat Expertise",
        type: "Combat"
      },
      {
        name: "Eschew Materials",
        type: "General"
      },
      {
        name: "Extend Spell",
        type: "Metamagic"
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
        name: "Quicken Spell",
        type: "Metamagic"
      },
      {
        name: "Quicken Spell-Like Ability",
        type: "Monster",
        value: "Dominate person",
        choiceSource: "Quicken Spell-Like Ability"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "consume memory, slime",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        specialAbility: "slime",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Tentacle",
        qualities: [
          "touch"
        ],
        name: "4 Tentacles",
        specialAbility: "thoughtlance",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to electricity, mind-affecting effects"
    ],
    defense: {
      SR: {
        value: 25
      },
      naturalArmor: 11
    },
    space: "10 ft.",
    reach: "10 ft. (20 ft. with claws and tentacles)",
    environment: "any water (Golarion's oceans)",
    visualDescription: "This monstrosity has a six-eyed face and six long tentacles- four ending in glowing spheres and two in what look like hands.",
    description: "The aboleths are among the oldest of Golarion's denizens, creatures that can trace back their presence in the deepest reaches of the world's oceans to times far before humanity came to dwell upon the globe- or before even most deities themselves turned their attentions to this tiny sphere of water and stone. In those ancient times, elder forces and eldritch entities knew of the world. While they were not gods as are known today, even they were dismissed and ignored by the aboleth race, for the aboleths knew that what the gods could accomplish, so could they, given time. And the aboleths have always had time. During the era of ancient Azlant, when the aboleths manipulated humanity like puppets, some of their kind walked among their pets in disguise, veiling themselves with magic to appear as humanoids. These were the veiled masters, and if one were to make the foolish attempt at imposing human constructions on this alien race, the veiled masters would be considered the nobility among aboleth-kind. In truth, while the aboleths do treat the veiled masters with utmost respect and defer to their decisions, they are not regarded as the rulers of the race- even stranger and more dangerous entities rule over the veiled masters in the deepest trenches below the sea. Aboleths are without a doubt skilled at domination and illusion, but the veiled masters are the true experts of the arcane. It is they who engineered the deceptions and manipulations of ancient Azlant's culture. Their hidden gifts and subtle coaxings did much to encourage humanity's first rise to glory in that age, and many of Azlant's nations had veiled masters walking among them, whispering into their leaders' ears. The people knew the veiled masters as powerful wizards, and there were murmurs that the mysterious cabal was more than human, but few suspected the truth for very long. The veiled masters handled such suspicions by doing violence to the bodies and minds of those who proved too curious. It was the veiled masters who first learned of Azlant's growing hubris-of their beliefs that they were greater than their patrons. At first, their punishments were minor, yet to the veiled masters' surprise and frustration, these acts only strengthened humanity's resolve. In the end, Earthfall was the answer, and as Azlant sank below the waves, the veiled masters retreated to the depths as well, content for now that the devastation above would serve as a lesson that would never be forgotten. Today, the veiled masters live on. They walk among the humanoid races again, watching and waiting. The time to teach a new lesson draws ever closer.",
    organization: "solitary or shoal (1 veiled master and 2-8 aboleths)",
    languages: "Aboleth, Aklo, Aquan, Azlanti, Undercommon; telepathy 300 ft.",
    spellLikeAbilities: [
      {
        name: "mage armor",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "detect thoughts",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "dominate person",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "hypnotic pattern",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "illusory wall",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "mirage arcana",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "persistent image",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "programmed image",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "project image",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "veil",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "dominate monster",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "dominate person",
        casterLevel: 20,
        limitations: "Metamagic: Quicken ",
        timesPerDay: 3
      },
      {
        name: "geas/quest",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "suggestion, mass",
        casterLevel: 20,
        timesPerDay: 3
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 12,
      spells: [
        {
          name: "(4)-symbol of persuasion",
          limitations: 4,
          level: 6
        },
        {
          name: "(6)-symbol of pain",
          limitations: 6,
          level: 5
        },
        {
          name: "teleport ",
          level: 5
        },
        {
          name: "",
          limitations: 7,
          level: 4
        },
        {
          name: "phantasmal killer",
          level: 4
        },
        {
          name: "symbol of slowing",
          level: 4
        },
        {
          name: "",
          limitations: 7,
          level: 3
        },
        {
          name: "explosive runes",
          level: 3
        },
        {
          name: "hold person",
          level: 3
        },
        {
          name: "secret page ",
          level: 3
        },
        {
          name: "(8)-blindness/deafness",
          limitations: 8,
          level: 2
        },
        {
          name: "invisibility",
          level: 2
        },
        {
          name: "levitate",
          level: 2
        },
        {
          name: "symbol of mirroring",
          level: 2
        },
        {
          name: "touch of idiocy ",
          level: 2
        },
        {
          name: "(8)-charm person",
          limitations: 8,
          level: 1
        },
        {
          name: "comprehend languages",
          level: 1
        },
        {
          name: "erase",
          level: 1
        },
        {
          name: "ray of enfeeblement",
          level: 1
        },
        {
          name: "silent image",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "dancing lights",
          level: 0
        },
        {
          name: "daze",
          level: 0
        },
        {
          name: "detect magic",
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
          name: "message",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        },
        {
          name: "touch of fatigue",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      "Knowledge (arcana)": {
        ranks: 16
      },
      "Knowledge (history)": {
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
        ranks: 16
      },
      Stealth: {
        ranks: 16
      },
      Swim: {
        ranks: 8
      },
      "Use Magic Device": {
        ranks: 16
      }
    },
    special: {
      "delayed suggestion": {
        type: "Sp",
        text: "Whenever a veiled master successfully uses dominate person or dominate monster on a creature, it can also implant a delayed suggestion that triggers when dominate effect ends. Typically, this suggestion (which functions as a spell-like ability, CL 20th, Will DC 19 negates) is for the previously dominated creature to seek out the veiled master again and submit to a new domination attempt, but sometimes, a veiled master implants other suggestions (such as a suggestion to attack the first person it sees)."
      },
      "mucus cloud": {
        type: "Ex",
        text: "While underwater, a veiled master exudes a cloud of transparent slime in a 30-foot-radius spread. All creatures in this area must succeed at a DC 26 Fortitude save each round or lose the ability to breathe air (but gain the ability to breathe water) for 24 hours. Renewed contact with this mucus cloud and failing another save extends the effect for another 24 hours. The save DC is Constitution-based."
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "any Small or Medium form; greater polymorph"
      },
      runemastery: {
        type: "Ex",
        text: "A veiled master is particularly skilled at casting spells that create magical writing, such as explosive runes, secret page, or any spell with the word \"symbol\" in its name. It never requires material components or focus components when casting such spells, and the save DC of any of these spells increases by 1. A veiled master's symbol spells are difficult to disarm-the Disable Device DC for these symbols increases by 2."
      },
      "swift transformation": {
        type: "Su",
        text: "A veiled master can use its change shape ability as a swift action."
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        value: null
      },
      "consume memory": {
        type: "Su",
        text: "When a veiled master bites a creature, it consumes some of that creature's memories. The creature bitten must succeed at a DC 24 Fortitude save or gain one negative level. A veiled master heals 5 points of damage each time it grants a negative level in this way, and also learns some of the target creature's memories (subject to the GM's discretion). This is a mind-affecting effect. A veiled master can suppress this ability as a free action. The save DC is Charisma-based."
      },
      slime: {
        type: "Ex",
        text: "A creature hit by any of a veiled master's bite or claw attacks must succeed at a DC 26 Fortitude save or have its skin and flesh transform into a clear, slimy membrane over the course of 1d4 rounds. The creature's new \"flesh\" is soft and tender, reducing its Constitution score by 4 as long as the condition persists. If the creature's flesh isn't kept moist, it dries quickly and the victim takes 1d12 points of damage every 10 minutes. Remove disease and similar effects can restore an afflicted creature to normal, but immunity to disease offers no protection from this attack. The save DC is Constitution-based. Spells A veiled master can cast spells as a 12th-level sorcerer."
      },
      thoughtlance: {
        type: "Su",
        text: "Four of a veiled master's tentacles end in glowing spheres of light. These spheres deal 2d6 points of electricity damage on a touch attack, and also blast a creature's mind with waves of mental energy-a creature touched by one of these tentacles (regardless of whether the touch deals electricity damage) must succeed at a DC 24 Will save or be staggered for 1 round. Additional touches increase the duration by 1 round. While a creature is staggered in this manner, it must make concentration checks to cast spells as if it were experiencing extremely violent motion while casting (DC = 20 + spell level). The save DC is Charisma-based."
      }
    },
    resistances: [
      {
        damageType: "cold",
        value: 20
      }
    ]
  },

  Vespergaunt: {
    source: "Inner Sea Bestiary",
    creatureType: "ooze",
    subTypes: [],
    alignments: [
      "Neutral Evil"
    ],
    size: "Medium",
    hd: 17,
    hdVal: 8,
    cr: 12,
    racialFeatures: [
      "All-Around Vision",
      "Blindsight 60 ft.",
      "True Seeing"
    ],
    speed: {
      base: 10,
      maneuverability: "Perfect",
      fly: 60
    },
    abilities: {
      str: 27,
      dex: 14,
      con: 24,
      int: 15,
      wis: 15,
      cha: 16
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Great Fortitude",
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
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Persuasive",
        type: "General"
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
        specialAbility: "siphon spirit",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "aligned"
      },
      SR: {
        value: 23
      },
      naturalArmor: 8
    },
    space: "5 ft.",
    reach: "10 ft.",
    environment: "any (Aucturn)",
    visualDescription: "This amorphous mass of eyes, tentacles, and green vapor vaguely resembles a jumble of rotten brain matter.",
    description: "Often called \"heresy oozes,\" vespergaunts are emissaries and tools of the horrible god-things of the Dark Tapestry. Found primarily on Aucturn, vespergaunts act as spiritual conduits for those attempting to contact the Great Old Ones, collecting and relaying those prayers deemed worthy while also preparing inhabited worlds for the coming of the Dominion of the Black. A typical vespergaunt is 8 feet tall and 6 feet wide, and weighs just 50 pounds.",
    organization: "solitary or convocation (2-4)",
    languages: "tongues; telepathy 100 ft.",
    spellLikeAbilities: [
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
        name: "deeper darkness",
        casterLevel: 17,
        timesPerDay: -1
      },
      {
        name: "contact other plane",
        casterLevel: 17,
        timesPerDay: 3
      },
      {
        name: "wish",
        casterLevel: 17,
        limitations: "Times Per Month: 1 ",
        timesPerDay: -1
      }
    ],
    skills: {
      Diplomacy: {
        ranks: 5
      },
      Fly: {
        ranks: 5
      },
      Intimidate: {
        ranks: 10
      },
      "Knowledge (planes)": {
        ranks: 17
      },
      Perception: {
        ranks: 16
      },
      "Sense Motive": {
        ranks: 8
      },
      Stealth: {
        ranks: 10
      }
    },
    special: {
      "no breath": {
        universalMonsterAbility: "No Breath",
        text: ""
      },
      amorphous: {
        universalMonsterAbility: "Amorphous"
      },
      madness: {
        type: "Su",
        text: "Any creature within a 60-foot radius of the vespergaunt must succeed at a DC 21 save or be confused for 1d4 rounds. Once a creature successfully saves, it cannot be affected by the same vespergaunt's aura again for 24 hours. As a free action, the vespergaunt can suppress its aura. This is a mind-affecting effect. The save DC is Charisma-based. Damage Reduction (Su) A vespergaunt's damage reduction is bypassed by any weapons that are chaos-, evil-, good-, or law-aligned.",
        preText: "60 ft., DC 21"
      },
      "siphon spirit": {
        type: "Su",
        text: "Any creature touched by a vespergaunt must succeed at a DC 21 Will save or gain 1 negative level as the vespergaunt rips away a portion of its soul. A divine spellcaster gains an additional negative level with each failed save. The victim must save anew each time it is touched, and a character killed by this attack disintegrates completely except for its eyes and strands of brain matter, which become part of the vespergaunt. Only powerful magic such as miracle or wish can resurrect a creature slain in this manner."
      }
    },
    resistances: [
      "light sensitivity"
    ]
  },

  "Water Wraith": {
    source: "Inner Sea Bestiary",
    creatureType: "magical beast",
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Large",
    hd: 3,
    hdVal: 10,
    cr: 2,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30,
      swim: 40
    },
    abilities: {
      str: 14,
      dex: 13,
      con: 13,
      int: 3,
      wis: 12,
      cha: 6
    },
    feats: [
      {
        name: "Dodge",
        type: "Combat"
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
        specialAbility: "attach",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "4 Claws",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 5
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "warm rivers (Garund)",
    visualDescription: "This eight-legged lizard has a round, lamprey-like mouth full of teeth, and its scales slowly change color to match its surroundings.",
    description: "Water wraiths are eight-legged amphibious lizards indigenous to the Mwangi Expanse with the ability to change their color at will. This chameleon-like ability, combined with their superior intelligence, makes them coveted as exotic pets or guard animals. They are imported throughout Garund for those virtues. Patient and cunning hunters, water wraiths prefer to lie still in ponds and rivers until their prey comes within range. When an unfortunate creature does, these fearless hunters strike, their webbed claws propelling them quickly forward either on land or in water. Once their toothy, eel-like mouths attach to victims, water wraiths quickly begin to bleed them dry. Water wraiths depicted here represent the upper end of size limitations for captive specimens. In captivity, these creatures are deliberately kept underfed and rarely grow beyond 2 feet in length. Water wraiths encountered wild in the Mwangi wetlands, or kept on an unrestricted diet, grow to even more massive sizes. Strange superstitions are born out of water wraiths' color-changing powers. This changeability is not just an automatic defensive response, but can be a matter of self-expression, or even strategy and tactics on the part of the creature. Water wraiths often express likes and dislikes with an outward display of color: bright red is frequently associated with hunger, and dull green represents dislike or lack of interest. Some small communities in Katapesh and Osirion actually utilize water wraiths in a primitive system of jurisprudence. The authorities release the accused into a pen with the creatures, then interpret the reactions of the lizards as signs of guilt or innocence. All too frequently, the wraiths declare the accused innocent by virtue of being delicious. Water wraiths find full-blooded elves to be unpalatable, but show no aversion to their half-elven cousins. Water wraiths are not limited to changing color in response to base drives, however. Sneaky and cunning, they do not hesitate to blend into their surroundings despite their emotional state if it affords them an advantage in hunting.",
    organization: "solitary, pair, or swarm (3-12)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 1
      },
      Stealth: {
        ranks: 1
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      "blood drain": {
        universalMonsterAbility: "Blood Drain",
        damage: "1d2 Constitution"
      },
      rend: {
        universalMonsterAbility: "Rend",
        type: "Ex",
        weaponName: 3
      },
      amphibious: {
        universalMonsterAbility: "Amphibious"
      },
      "expressive chameleon": {
        type: "Ex",
        text: "Once per round as a free action, a water wraith can change its color to any of its own choosing. A water wraith using this ability to camouflage itself gains a +8 bonus on Stealth checks."
      },
      attach: {
        universalMonsterAbility: "Attach"
      }
    }
  },

  Whirlmaw: {
    source: "Inner Sea Bestiary",
    creatureType: "aberration",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 12,
    hdVal: 8,
    cr: 8,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Keen Sight",
      "Tremorsense 30 ft."
    ],
    speed: {
      base: 10,
      burrow: 10,
      maneuverability: "Perfect",
      fly: 90
    },
    abilities: {
      str: 23,
      dex: 22,
      con: 18,
      int: 3,
      wis: 10,
      cha: 3
    },
    feats: [
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
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Bite",
        choiceSource: "Weapon Focus"
      },
      {
        name: "Wingover",
        type: "Monster"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "burrowing bite",
        damage: "1d6",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to fire"
    ],
    defense: {
      naturalArmor: 4
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "warm deserts (Rahadoum)",
    visualDescription: "This creature glides on undulating folds of leathery skin. Its spinning, circular mouth is lined with rows of razor-sharp teeth.",
    description: "Predators of the deep desert, whirlmaws are just one of the many dangers posed to those who travel the dry wastes of inner Rahadoum. Little more than flying eaters, these creatures rise singly or in flights, and attack all other living creatures that enter their territory. They are equally at home nestled in shallow burrows beneath sand dunes or resting in the rocky crevices of mountains. When they hunt, they soar upon the high thermals and keep an eye out for potential prey through the stony orbs that serve as their eyes. These bizarre hunters prefer to burrow into the torsos of their victims and consume the blood-rich organs, leaving the corpses' peripheral parts for scavengers. Few that encounter these vicious predators live to tell of it. The skeletal remains of whirlmaws' victims can be identified by the suspiciously circular sections of their torsos missing where the creatures burrowed through and consumed the flesh, bone, and organs in their entirety. The green, gemlike eyes of a whirlmaw are prized by those who seek exotic and dangerous treasures in the desert. It is speculated by some that these mystical orbs are the source of the whirlmaw's natural fire immunity, and alchemists and wizards often use them as components in creating magic items that bestow that form of energy resistance.",
    organization: "solitary or flight (2-9)",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 0
      },
      Perception: {
        ranks: 5
      },
      Stealth: {
        ranks: 6
      }
    },
    special: {
      "flying charge": {
        type: "Ex",
        text: "When a whirlmaw makes a charge attack while flying, it gains a +4 bonus on its attack roll (rather than the normal +2 bonus), and does not take the normal -2 penalty to Armor Class. Keen Sight (Ex) A whirlmaw is extremely sharp-sighted. It takes only half the penalty on Perception checks for distance, and can see creatures in open terrain clearly from up to a mile away."
      },
      "dust cloud": {
        type: "Ex",
        text: "By rapidly beating the leathery flaps of skin attached along its body, a whirlmaw can raise a cloud of debris while using its Hover feat just as if it were a Large creature."
      },
      "burrowing bite": {
        type: "Ex",
        text: "If a whirlmaw successful hits a Small or larger creature with its bite attack, it immediately attempts to start a grapple as a free action with a +4 bonus on the grapple check. If the grapple check is successful, the whirlmaw's spinning, sawlike mouth immediately begins to burrow into the flesh of the creature, dealing 4d6+12 points of damage per round until the grapple is broken."
      }
    }
  },

  Woundwyrm: {
    source: "Inner Sea Bestiary",
    creatureType: "dragon",
    subTypes: [
      "chaotic",
      "evil"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Huge",
    hd: 18,
    hdVal: 12,
    cr: 15,
    racialFeatures: [
      "Blindsight 60 ft."
    ],
    speed: {
      base: 30,
      burrow: 30,
      maneuverability: "Average",
      fly: 60,
      swim: 30
    },
    abilities: {
      str: 31,
      dex: 13,
      con: 22,
      int: 14,
      wis: 13,
      cha: 20
    },
    feats: [
      {
        name: "Blind-Fight",
        type: "Combat"
      },
      {
        name: "Critical Focus",
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
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Snatch",
        type: "Monster"
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
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "dragon traits",
      "Immune to acid, gaze attacks, illusions, magic paralysis and sleep, poison, polymorph, visual effects"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "good or lawful"
      },
      SR: {
        value: 26
      },
      naturalArmor: 20
    },
    space: "15 ft.",
    reach: "10 ft. (15 ft. with bite)",
    environment: "any (the Worldwound)",
    visualDescription: "This massive, eyeless draconic creature is covered in purple-hued scales and sharp, spiky protrusions.",
    description: "Woundwyrms are ferocious predators native to the corrupted landscape of the Worldwound. They are equally at home in sea and sky, above the ground and below it. Oozing deliquescence seeps from between their cracked, rocky scales, and a constant fume of rainbow hues drifts out of their gullets, save when they inhale and ingest the very substance of disintegrating reality.",
    organization: "solitary",
    languages: "Abyssal, Common, Draconic",
    spellLikeAbilities: [
      {
        name: "entropic shield",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "freedom of movement",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "polymorph any object",
        casterLevel: 18,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 18
      },
      Bluff: {
        ranks: 10
      },
      Diplomacy: {
        ranks: 7
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
      Perception: {
        ranks: 18
      },
      Spellcraft: {
        ranks: 18
      },
      Survival: {
        ranks: 18
      },
      Swim: {
        ranks: 1
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "100-ft. line",
        damage: "usable every 1d4 rounds"
      },
      "entropic breath": {
        type: "Su",
        text: "Instead of a line of acid, a woundwyrm can exhale a 30-foot cone of acid fog (as the spell) that persists for 1 minute. Any creature that begins its turn within the entropic breath becomes confused (Will DC 25 negates) for as long as it remains within the cloud and for 1d6 rounds thereafter."
      },
      "maw of the Abyss": {
        type: "Su",
        text: "As a full-round action, a woundwyrm can attempt to suck creatures and unattended objects in a 15-foot cone into a vortex in its maw. This acts as a drag combat maneuver (CMB +30) against creatures, and acts as a Strength check with a +10 bonus to break objects. Unattended objects weighing less than 100 pounds are automatically drawn into its maw. Creatures and objects alike take 1d12 points of sonic damage per round within the cone. While using this ability, a woundwyrm cannot speak, use its breath weapon, or make attacks or attacks of opportunity with its bite attack."
      }
    }
  },

  Zelishkar: {
    source: "Inner Sea Bestiary",
    creatureType: "outsider",
    subTypes: [
      "daemon",
      "evil",
      "extraplanar",
      "fire"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Large",
    hd: 24,
    hdVal: 10,
    cr: 21,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Scent",
      "True Seeing"
    ],
    speed: {
      base: 30,
      maneuverability: "Perfect",
      fly: 60
    },
    abilities: {
      str: 33,
      dex: 21,
      con: 32,
      int: 17,
      wis: 22,
      cha: 23
    },
    feats: [
      {
        name: "Blind-Fight",
        type: "Combat"
      },
      {
        name: "Charge Through",
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
        name: "Empower Spell-Like Ability",
        type: "Monster",
        value: " fire storm",
        choiceSource: "Empower Spell-Like Ability"
      },
      {
        name: "Greater Overrun",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Claw",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Overrun",
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
        name: "Quicken Spell-Like Ability",
        type: "Monster",
        value: "Contagious flame",
        choiceSource: "Quicken Spell-Like Ability"
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
        bonuses: [
          {
            source: "inherent",
            value: "2d6",
            appliesTo: "damageType",
            damageType: "fire"
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
            value: "2d6",
            appliesTo: "damageType",
            damageType: "fire"
          }
        ],
        type: "primary"
      }
    ],
    immunities: [
      "Immune to ability damage, charm and compulsion effects"
    ],
    defense: {
      SR: {
        value: 32
      },
      naturalArmor: 15
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any (Osirion)",
    visualDescription: "This fiendish figure appears to be shaped from pure flame with a feline face. Three wicked tongues dart from the creature's mouth.",
    description: "The dread Zelishkar of the Bitter Flame is a figure much feared on the crumbling plains of Abaddon and across the multiverse. A monstrous feline in shape but seemingly sculpted of lurid crimson flame, Zelishkar is girded with a crest and cuirass of infernally strengthened obsidian, shaved to razor thinness yet losing none of its terrible strength. His eyes are jet-black pits that mirror his armor, though pinpoints of awful orange radiance gleam deep within. He is surrounded always by a heat shimmer that diffuses his blinding radiance. Zelishkar is reputed to sense the presence of his prey by the tiniest variations in temperature, tracking the movements of creatures both seen and unseen before he pounces. His own fires burn with a hellish uncleanness, tainting even those who thought themselves proofed against his flames and rapidly consuming their body and soul, leaving nothing behind but befouled ashes. Zelishkar is feared as much for his incisive tactical acumen as for his dreadful and terrifying powers in close combat. He has single-handedly withered and despoiled cities and farmlands when summoned in the name of his daemonic mistress-Szuriel, patron of war and suffering. She forged Zelishkar's form in the deepest pits of the Cinder Furnace as her terrifying harbinger, embodying the hopeless misery of funeral pyres that consume and cremate the dead in the wake of the war that she brings. He proved so adept that she judged him worthy to transcend his purpose, and he has come to embody all of the hateful and sadistic purposes that fire serves. His name is invoked now by torturers and inquisitors alike as they consign their hapless captives to the ultimate agonies of being burned alive, and even by arsonists both petty and grand. All twisted souls who love nothing more than to see the world burn offer up silent praises to Zelishkar in their hearts; even if they never speak his name, the hate that burns within them is a sweet savor in his nostrils. Zelishkar was summoned to Golarion in ancient times, during the height of Osirion's empire, and he led legions of flaming minions against the enemies of the Pharaoh of Forgotten Plagues, notably the Jistka Imperium. In a twist of supreme hubris, the Pharaoh of Forgotten Plagues turned against his summoned ally after several successful campaigns, and chose Zelishkar to be the test subject of his grandest experiment yet. The Osirian king had just finished construction of a grand labyrinth south of the Alamein Peninsula, and in a display of prideful foolishness ordered Zelishkar to be imprisoned within to prove the infallibility of his maze. It took the efforts of an entire army of summoned genies to lock the daemonic harbinger away beneath the desert's churning sands, but his imprisonment was absolute with the aid of an ancient efreeti and a legendary artifact known as the Bottle of the Bound. Through all the long millennia since, Zelishkar and the remnant of his host have remained imprisoned beneath the Labyrinth of Shiman-Sekh, the city founded by the Song Pharaoh upon her victory over the Pharaoh of Forgotten Plagues years after Zelishkar's detention. He has emerged from his prison but once, when Szuriel and the ironically named Incorruptible Pharaoh joined to loose his fiery fury upon one of the sky-cities of Shory. His destructive rampage could not be contained, however, and he devastated several cities and oases of western Osirion before he and his host were finally bound back within their prison. There he remains, plotting burning vengeance upon Osirion and all of Golarion for his ages of durance vile.",
    organization: "solitary",
    languages: "Abyssal, Common, Ignan, Infernal; telepathy 300 ft.",
    note: "UC See Ultimate Combat. See Advanced Player's Guide.",
    spellLikeAbilities: [
      {
        name: "blur",
        casterLevel: 24,
        timesPerDay: -1
      },
      {
        name: "true seeing",
        casterLevel: 24,
        timesPerDay: -1
      },
      {
        name: "unholy aura",
        casterLevel: 24,
        timesPerDay: -1
      },
      {
        name: "blistering invective",
        casterLevel: 24,
        timesPerDay: -1
      },
      {
        name: "dispel good",
        casterLevel: 24,
        timesPerDay: -1
      },
      {
        name: "fire shield",
        casterLevel: 24,
        timesPerDay: -1
      },
      {
        name: "charm monster, mass",
        casterLevel: 24,
        limitations: "creatures of the fire subtype only",
        timesPerDay: -1
      },
      {
        name: "fire storm",
        casterLevel: 24,
        limitations: "Metamagic: Empower ",
        timesPerDay: 3
      },
      {
        name: "incendiary cloud",
        casterLevel: 24,
        timesPerDay: 3
      },
      {
        name: "contagious flame",
        casterLevel: 24,
        limitations: "Metamagic: Quicken ",
        timesPerDay: 3
      },
      {
        name: "sirocco",
        casterLevel: 24,
        timesPerDay: 3
      },
      {
        name: "summon",
        casterLevel: 24,
        limitations: "level 9, 2 fiendish elder fire elementals or any daemon of 20 Hit Dice or fewer 100%",
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 24
      },
      Bluff: {
        ranks: 11
      },
      Diplomacy: {
        ranks: 14
      },
      Fly: {
        ranks: 15
      },
      Intimidate: {
        ranks: 27
      },
      "Knowledge (planes)": {
        ranks: 24
      },
      Perception: {
        ranks: 24
      },
      "Sense Motive": {
        ranks: 20
      },
      Spellcraft: {
        ranks: 21
      },
      Stealth: {
        ranks: 21
      },
      Survival: {
        ranks: 21
      }
    },
    special: {
      "bitter flames": {
        type: "Su",
        text: "Whenever Zelishkar deals fire damage with any attack or effect, half of the damage is fire damage and the other half is untyped damage, similar to a flame strike spell. In addition, creatures that fail a save against any fire effect Zelishkar creates are sickened for 1 minute. Those damaged by his melee attacks or by fire effects that allow no save are instead sickened for 1 round per attack. This duration stacks."
      },
      "corpse cremation": {
        type: "Su",
        text: "Whenever Zelishkar reduces a living creature to negative hit points, as a swift action he can turn its body to ashes and feed upon the target's life force, as death knell (Will DC 28 negates). Whenever Zelishkar slays a creature with any attack or ability, the creature's corpse is reduced to ashes (treat as disintegrate)."
      },
      "incandescent body": {
        type: "Su",
        text: "As a free action, Zelishkar can cause his body to erupt into white-hot flame. He sheds light as bright as a daylight spell, and dazzles any creature that does not avert its gaze. Creatures with the fire subtype are immune to this dazzling effect. Zelishkar can dim his flames to burning black shadows as a free action, suppressing the dazzling effect and allowing him to use Stealth without penalty."
      },
      "incendiary grasp": {
        type: "Su",
        text: "If Zelishkar hits a target with more than one natural weapon in the same round, the fire damage from each hit is combined as if from a single attack for the purpose of overcoming effects that provide resistance to fire. In addition, if Zelishkar succeeds at a grapple combat maneuver, as a swift action he can suppress any fire resistance or immunity the target possesses until the beginning of Zelishkar's next turn. Creatures with the fire subtype are immune to this effect, unless that subtype is granted by a temporary magical effect or magic item."
      },
      pounce: {
        universalMonsterAbility: "Pounce"
      },
      rake: {
        universalMonsterAbility: "Rake",
        type: "Ex",
        weaponName: "e"
      },
      "daemonic harbinger traits": {
        type: "Ex"
      },
      blur: {
        type: "Ex"
      }
    },
    resistances: [
      {
        damageType: "cold",
        value: 30
      },
      {
        damageType: "electricity",
        value: 30
      }
    ]
  },

  "Annihilator Robot": {
    source: "Inner Sea Bestiary",
    creatureType: "construct",
    subTypes: [
      "robot"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Gargantuan",
    hd: 20,
    hdVal: 10,
    cr: 16,
    racialFeatures: [
      "Darkvision 120 ft.",
      "Low-Light Vision",
      "Tremorsense 60 ft."
    ],
    speed: {
      base: 50,
      climb: 30
    },
    abilities: {
      str: 34,
      dex: 15,
      con: "-",
      int: 14,
      wis: 13,
      cha: 1
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
        name: "Deadly Aim",
        type: "Combat"
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
        name: "Improved Critical",
        type: "Combat",
        value: "Chain gun",
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
        name: "Skill Focus",
        type: "General",
        value: "Acrobatics",
        choiceSource: "Skill Focus"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Chain gun",
        choiceSource: "Weapon Focus"
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
        weapon: "Integrated chain gun",
        name: "2 Integrated chain guns",
        damage: "8d6"
      }
    ],
    immunities: [
      "construct traits",
      "Immune to cold"
    ],
    defense: {
      naturalArmor: 22
    },
    space: "20 ft.",
    reach: "20 ft.",
    environment: "any (Numeria)",
    visualDescription: "This towering, scorpion-like construct makes tortured shrieks as it moves, its metallic weapons thrumming with otherworldly energy.",
    description: "The first known annihilator rampaged through western Numeria in 4709 ar, destroying dozens of towns and villages before retreating with more than a dozen prisoners into the Felldales. Since then, increasing numbers of these immense and devastating robots have been spotted in the region. Annihilators seem driven to destroy structures and slaughter living foes, yet they often gather up the dying and unconscious from battlefields-their purpose for keeping these battered but still-living prisoners is unknown.",
    organization: "solitary",
    languages: "Common, Hallit",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 12
      },
      Climb: {
        ranks: 0
      },
      Intimidate: {
        ranks: 20
      },
      Perception: {
        ranks: 23
      },
      "Sense Motive": {
        ranks: 23
      }
    },
    special: {
      "combined arms": {
        type: "Ex",
        text: "When taking a full attack action, an annihilator can attack with melee and ranged integrated weapons simultaneously."
      },
      "plasma lance": {
        type: "Ex",
        text: "As a standard action once every 3 rounds, an annihilator may fire a 120-foot-long line of plasma from its tail. All creatures in this area take 20d6 points of plasma damage (Reflex DC 22 halves). The save DC is Intelligence-based."
      },
      "suppressing fire": {
        type: "Ex",
        text: "As a standard action, an annihilator can use its chain guns to fire in a 100-foot cone. When it does so, it makes a single chain gun attack against every target in this area."
      },
      "booster jets": {
        type: "Ex",
        text: "As a swift action up to 10 times per hour, an annihilator robot can gain a fly speed of 60 feet (poor maneuverability) for a duration of 1 minute. Chain Guns (Ex) These advanced firearms have a range increment of 200 feet, automatically reload as a free action, and never misfire. An annihilator's core can process scrap metal into new ammunition, effectively giving the annihilator infinite ammo with these weapons."
      },
      hardness: {
        universalMonsterAbility: "Hardness",
        value: 10
      }
    },
    resistances: [
      {
        damageType: "electricity",
        value: 30
      },
      {
        damageType: "fire",
        value: 30
      },
      "vulnerable to electricity"
    ]
  },

  "Gearsman Robot": {
    source: "Inner Sea Bestiary",
    creatureType: "construct",
    subTypes: [
      "robot"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 4,
    hdVal: 10,
    cr: 4,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 20
    },
    abilities: {
      str: 20,
      dex: 13,
      con: "-",
      int: 10,
      wis: 13,
      cha: 1
    },
    feats: [
      {
        name: "Combat Reflexes",
        type: "Combat"
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
      },
      {
        weapon: "Spear",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "Spear",
        damage: "1d8"
      }
    ],
    immunities: [
      "construct traits"
    ],
    defense: {
      naturalArmor: 9
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Numeria)",
    visualDescription: "Made of what appears to be burnished brass, this construct resembles a suit of armor with a glowing glass orb for an eye.",
    description: "Of all the impossible artifacts of Silver Mount, none has been a greater boon to the Technic League than the fabled gearsmen. For reasons known only to themselves, many of these robots serve the artificers of the Technic League as shock troops and guards, performing their tasks with mechanical detachment and coldly logical efficiency. Yet they serve a purpose beyond Numeria, disobeying their putative masters whenever orders contradict their mysterious internal directives. When questioned about their lapses, a gearsman answers only with endlessly patient silence.",
    organization: "solitary, pair, or squad (3-12)",
    languages: "Common, Hallit",
    spellLikeAbilities: [],
    skills: {
      Craft0: {
        subSkill: "any one",
        ranks: 8
      },
      "Disable Device": {
        ranks: 7
      },
      Perception: {
        ranks: 7
      },
      Profession0: {
        subSkill: "any one",
        ranks: 6
      },
      "Sense Motive": {
        ranks: 7
      }
    },
    special: {
      "adaptive learning": {
        type: "Ex",
        text: "A gearsman has a number of skill points equal to 4 + its Int modifier per Hit Die, and treats Craft and Profession as class skills beyond those possessed by all robots. In addition, a gearsman has a number of bonus skill ranks equal to its Hit Dice that can be reprogrammed to apply to any skill-these ranks cannot be split among multiple skills and must all apply to one skill. A gearsman may change what skill these bonus ranks apply to up to once per day by concentrating for 1 minute, during which time it can take no other actions. Rather than spend these bonus ranks on a skill, a gearsman can choose to devote them to weapon knowledge, gaining proficiency with a single weapon instead of bonus ranks in a skill. All gearsmen are automatically proficient with all simple weapons."
      },
      "charge weapon": {
        type: "Ex",
        text: "Any metal melee weapon wielded by a gearsman becomes charged with electricity and deals +1d6 points of electricity damage on a hit."
      },
      "self-repair": {
        type: "Ex",
        text: "A gearsman's nanites heal it of damage at the rate of a number of hit points per hour equal to its Hit Dice (4 hit points per hour for most gearsmen). Up to once per day, as a full-round action, it can heal any robot it touches of 4d6 points of damage-if a gearsman uses this ability on itself, it automatically heals the maximum amount: 24 points of damage."
      },
      hardness: {
        universalMonsterAbility: "Hardness",
        value: 10
      }
    },
    resistances: [
      "vulnerable to electricity"
    ]
  },

  "Myrmidon Robot": {
    source: "Inner Sea Bestiary",
    creatureType: "construct",
    subTypes: [
      "robot"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 15,
    hdVal: 10,
    cr: 11,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Superior Optics"
    ],
    speed: {
      base: 20,
      maneuverability: "Perfect",
      fly: 90
    },
    abilities: {
      str: 27,
      dex: 15,
      con: "-",
      int: 12,
      wis: 14,
      cha: 1
    },
    feats: [
      {
        name: "Combat Reflexes",
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
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Lightning Reflexes",
        type: "General"
      },
      {
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Point-Blank Shot",
        type: "Combat"
      },
      {
        name: "Precise Shot",
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
        weapon: "Quantum lashe",
        qualities: [
          "touch"
        ],
        name: "2 Quantum lashes",
        damage: "1d10"
      },
      {
        weapon: "Integrated laser rifle",
        qualities: [
          "touch"
        ],
        name: "Integrated laser rifle",
        damage: "2d10"
      }
    ],
    immunities: [
      "construct traits",
      "Immune to cold"
    ],
    defense: {
      naturalArmor: 14
    },
    space: "10 ft.",
    reach: "5 ft. (20 ft. with quantum lash)",
    environment: "any (Numeria)",
    visualDescription: "This metallic creature has pincer-tipped arms and a single red eye-it flies with eerie grace via blasts of fire from its back.",
    description: "Myrmidons are highly mobile robots programmed to patrol the skies above important locations. They tend to react with swift violence, and often interpret any anomalous sensory input as proof of hostile intent and rain destruction on the offending target. Most have analyzed enough language to communicate, but rarely choose to do so. The Technic League has had little success in reprogramming myrmidons to submit to their control, with most such attempts resulting in devastating backlashes as the robots run amok until destroyed.",
    organization: "solitary or unit (2-6)",
    languages: "Common, Hallit",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 18
      },
      "Knowledge (engineering)": {
        ranks: 18
      },
      Perception: {
        ranks: 18
      }
    },
    special: {
      "combined arms": {
        type: "Ex",
        text: "When taking a full-attack action, a myrmidon can attack with melee and ranged integrated weapons simultaneously. Laser Rifle (Ex) A myrmidon's eye is an integrated laser rifle. This weapon has a range increment of 250 feet. Quantum Lash (Ex) A myrmidon's two facial tentacles lash out with surprising force, and are capable of extending up to a reach of 20 feet. These lashes are primary attacks that deal force damage on a successful hit. They resolve as touch attacks, but the damage dealt is not modified by Strength, nor can it be improved via Power Attack. A quantum lash threatens a critical hit on a 19-20. A quantum lash that strikes a force field or force effect has a chance to disrupt that effect. Against a magical force effect like a wall of force, the myrmidon makes a special check as if it were casting dispel magic against the effect (CL 11th). Against a robot's force field, the robot struck must succeed at a DC 18 Fortitude save or its force field is deactivated for 1d10 rounds, after which it returns at the same hit point level it was at before it was deactivated. The save DC is Intelligence-based."
      },
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "1d6+8"
      },
      rockets: {
        type: "Ex",
        text: "As a standard action, a myrmidon can fire a rocket to a range of 800 feet. A rocket explodes on impact in a 30-foot-radius burst, dealing 6d6 points of fire damage and 6d6 points of bludgeoning damage to all creatures in the area (Reflex DC 18 halves). A myrmidon carries a maximum of five rockets. Its core can replenish fired rockets at the rate of one per 12 hours, crafting new rockets from scrap metal and other collected components used in the construction process. The save DC is Intelligence-based. Superior Optics (Ex) Myrmidons see invisible creatures or objects as if they were visible."
      },
      hardness: {
        universalMonsterAbility: "Hardness",
        value: 10
      },
      resilient: {
        type: "Ex",
        text: "Myrmidons receive a +3 racial bonus on all saving throws."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    },
    resistances: [
      "vulnerable to electricity"
    ]
  },

  Lashunta: {
    source: "Inner Sea Bestiary",
    creatureType: "humanoid",
    subTypes: [
      "lashunta"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 1,
    hdVal: 8,
    dontUseRacialHD: true,
    cr: "1/3",
    racialFeatures: [],
    speed: {
      base: 30
    },
    abilities: {
      str: 11,
      dex: 15,
      con: 12,
      int: 10,
      wis: 9,
      cha: 6
    },
    feats: [],
    attacks: [],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "",
    visualDescription: "",
    description: "The lashunta are race of humanoids that exhibit a curious sexual dimorphism. The most obvious similarity the two sexes have is a pair of thin, twitching antennae that sprout from just below their hairlines. Beyond that, male lashunta are compact, muscular, and hirsute, whereas female lashunta are tall, lithe, and majestic. Their personalities also differ somewhat; females are generally charismatic and commanding, and males are brusque and war-like. However, both sexes are equally intelligent, civilized, and competent on the battlefield. Most lashunta prize magical, mental, and psychic potential over common physical prowess. Lashunta society has a long and proud matriarchal tradition—women are often expected to take up leadership roles when the need arises. While lashunta men may seem more obviously suited to (and enjoy engaging in) brawling, both sexes regularly become warriors and adventurers, in part because their telepathy makes groups of lashunta more effective combatants. Yet fighting is ultimately a secondary concern to most lashunta, who instead highly value scholarship and the thirst for knowledge, particularly lauding the arcane classes for the high degree of intellectual stamina they require.",
    organization: "",
    languages: "Common",
    spellLikeAbilities: [],
    skills: {},
    special: {}
  },

};

export const Souls_for_Smuggler_s_ShivCreatures = {
  "Ochre Eurypterid": {
    source: "Souls for Smuggler's Shiv",
    creatureType: "vermin",
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Small",
    hd: 1,
    hdVal: 8,
    cr: "1/3",
    racialFeatures: [
      "Low-Light Vision",
      "Tremorsense 30 ft."
    ],
    speed: {
      base: 20,
      swim: 40
    },
    abilities: {
      str: 8,
      dex: 13,
      con: 10,
      int: "-",
      wis: 13,
      cha: 2
    },
    feats: [
      {
        name: "Improved Initiative",
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
        weapon: "Sting",
        name: "Sting",
        specialAbility: "poison",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to mind-affecting effects"
    ],
    defense: {
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft. (10 ft. with sting)",
    environment: "warm ocean",
    visualDescription: "Two large pincers grasp at the air before this sleek creature, while a finned tail bristling with a long, thin stinger rises from behind.",
    description: "Known to some as sea scorpions, eurypterids are aquatic crustaceans that blur the line between their terrestrial cousins and lobsters. Primeval and voracious, these vermin range in size from relatively harmless ochre eurypterids the size of a dog up to the truly immense spitting eurypterids. There are even rumors of yet larger beasts, called whaleeating eurypterids by sailors. Regardless of their size, all share one thing in common-an aggressive attitude. Eurypterids lash out at anything that might be food, and once they've tasted prey, are single-minded in their pursuit. Although quite at home in the open sea, most eurypterids are capable of scuttling around on land and can exist out of water indefinitely. Unlike rats, eurypterids don't spread disease or cause much damage to most cargos-traits that have led some captains to experiment with seeding colonies of ochre eurypterids in their holds to keep rodent populations under control. Alas, one can often tell the ships that use this tactic by the unusually high number of crewmen with missing fingers.",
    organization: "solitary, pair, or swarm (3-12)",
    spellLikeAbilities: [],
    skills: {
      Swim: {
        ranks: 0
      },
      Climb: {
        ranks: 0
      }
    },
    special: {
      amphibious: {
        universalMonsterAbility: "Amphibious"
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Sting-injury; save Fort DC 10; frequency 1/round for 4 rounds; effect 1 Dex; cure 1 save.",
        saveDC: 10
      }
    }
  },

  "Common Eurypterid": {
    source: "Souls for Smuggler's Shiv",
    creatureType: "vermin",
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 2,
    hdVal: 8,
    cr: 1,
    racialFeatures: [
      "Low-Light Vision",
      "Tremorsense 30 ft."
    ],
    speed: {
      base: 20,
      swim: 40
    },
    abilities: {
      str: 10,
      dex: 11,
      con: 12,
      int: "-",
      wis: 13,
      cha: 2
    },
    feats: [
      {
        name: "Improved Initiative",
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
        weapon: "Sting",
        name: "Sting",
        specialAbility: "poison",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to mind-affecting effects"
    ],
    defense: {
      naturalArmor: 4
    },
    space: "5 ft.",
    reach: "5 ft. (10 ft. with sting)",
    environment: "temperate or warm ocean",
    visualDescription: "Two large pincers grasp at the air before this sleek creature, while a finned tail bristling with a long, thin stinger rises from behind.",
    description: "Known to some as sea scorpions, eurypterids are aquatic crustaceans that blur the line between their terrestrial cousins and lobsters. Primeval and voracious, these vermin range in size from relatively harmless ochre eurypterids the size of a dog up to the truly immense spitting eurypterids. There are even rumors of yet larger beasts, called whaleeating eurypterids by sailors. Regardless of their size, all share one thing in common-an aggressive attitude. Eurypterids lash out at anything that might be food, and once they've tasted prey, are single-minded in their pursuit. Although quite at home in the open sea, most eurypterids are capable of scuttling around on land and can exist out of water indefinitely. Unlike rats, eurypterids don't spread disease or cause much damage to most cargos-traits that have led some captains to experiment with seeding colonies of ochre eurypterids in their holds to keep rodent populations under control. Alas, one can often tell the ships that use this tactic by the unusually high number of crewmen with missing fingers.",
    organization: "solitary, pair, or swarm (3-12)",
    spellLikeAbilities: [],
    skills: {
      Swim: {
        ranks: 0
      }
    },
    special: {
      amphibious: {
        universalMonsterAbility: "Amphibious"
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Sting-injury; save Fort DC 12; frequency 1/round for 4 rounds; effect 1d2 Con; cure 1 save.",
        saveDC: 10
      }
    }
  },

  "Bluetip Eurypterid": {
    source: "Souls for Smuggler's Shiv",
    creatureType: "vermin",
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 7,
    hdVal: 8,
    cr: 5,
    racialFeatures: [
      "Low-Light Vision",
      "Tremorsense 30 ft."
    ],
    speed: {
      base: 20,
      swim: 60
    },
    abilities: {
      str: 18,
      dex: 17,
      con: 16,
      int: "-",
      wis: 13,
      cha: 2
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
      "Immune to mind-affecting effects"
    ],
    defense: {
      naturalArmor: 7
    },
    space: "10 ft.",
    reach: "10 ft. (15 ft. with sting)",
    environment: "temperate or warm ocean",
    visualDescription: "Two large pincers grasp at the air before this sleek creature, while a finned tail bristling with a long, thin stinger rises from behind.",
    description: "Known to some as sea scorpions, eurypterids are aquatic crustaceans that blur the line between their terrestrial cousins and lobsters. Primeval and voracious, these vermin range in size from relatively harmless ochre eurypterids the size of a dog up to the truly immense spitting eurypterids. There are even rumors of yet larger beasts, called whaleeating eurypterids by sailors. Regardless of their size, all share one thing in common-an aggressive attitude. Eurypterids lash out at anything that might be food, and once they've tasted prey, are single-minded in their pursuit. Although quite at home in the open sea, most eurypterids are capable of scuttling around on land and can exist out of water indefinitely. Unlike rats, eurypterids don't spread disease or cause much damage to most cargos-traits that have led some captains to experiment with seeding colonies of ochre eurypterids in their holds to keep rodent populations under control. Alas, one can often tell the ships that use this tactic by the unusually high number of crewmen with missing fingers.",
    organization: "solitary or pair",
    spellLikeAbilities: [],
    skills: {
      Swim: {
        ranks: 0
      }
    },
    special: {
      pounce: {
        universalMonsterAbility: "Pounce"
      },
      amphibious: {
        universalMonsterAbility: "Amphibious"
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Sting-injury; save Fort DC 16; frequency 1/round for 6 rounds; effect 1d4 Con; cure 2 consecutive saves.",
        saveDC: 10
      }
    }
  },

  "Spiny Eurypterid": {
    source: "Souls for Smuggler's Shiv",
    creatureType: "vermin",
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Huge",
    hd: 12,
    hdVal: 8,
    cr: 9,
    racialFeatures: [
      "Low-Light Vision",
      "Tremorsense 30 ft."
    ],
    speed: {
      base: 10,
      swim: 40
    },
    abilities: {
      str: 26,
      dex: 9,
      con: 20,
      int: "-",
      wis: 13,
      cha: 2
    },
    feats: [
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Claw",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
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
        weapon: "Sting",
        name: "Sting",
        specialAbility: "poison",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to mind-affecting effects"
    ],
    defense: {
      naturalArmor: 15
    },
    space: "15 ft.",
    reach: "15 ft. (20 ft. with sting)",
    environment: "warm ocean",
    visualDescription: "Two large pincers grasp at the air before this sleek creature, while a finned tail bristling with a long, thin stinger rises from behind.",
    description: "Known to some as sea scorpions, eurypterids are aquatic crustaceans that blur the line between their terrestrial cousins and lobsters. Primeval and voracious, these vermin range in size from relatively harmless ochre eurypterids the size of a dog up to the truly immense spitting eurypterids. There are even rumors of yet larger beasts, called whaleeating eurypterids by sailors. Regardless of their size, all share one thing in common-an aggressive attitude. Eurypterids lash out at anything that might be food, and once they've tasted prey, are single-minded in their pursuit. Although quite at home in the open sea, most eurypterids are capable of scuttling around on land and can exist out of water indefinitely. Unlike rats, eurypterids don't spread disease or cause much damage to most cargos-traits that have led some captains to experiment with seeding colonies of ochre eurypterids in their holds to keep rodent populations under control. Alas, one can often tell the ships that use this tactic by the unusually high number of crewmen with missing fingers.",
    organization: "solitary",
    spellLikeAbilities: [],
    skills: {
      Swim: {
        ranks: 0
      }
    },
    special: {
      rend: {
        universalMonsterAbility: "Rend",
        type: "Ex",
        weaponName: 2
      },
      amphibious: {
        universalMonsterAbility: "Amphibious"
      },
      "spiny carapace": {
        type: "Ex",
        text: "The spiny eurypterid's carapace is covered with thousands of razor-sharp spines. Any creature that attacks a spiny eurypterid with a light weapon, unarmed strike, or natural attack takes 1d6 points of piercing damage. Any creature that grapples or is grappled by a spiny eurypterid automatically takes 2d6 points of piercing damage per round the grapple is maintained."
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Sting-injury; save Fort DC 21; frequency 1/round for 6 rounds; effect 1d4 Con and 1d2 Dex; cure 2 consecutive saves.",
        saveDC: 10
      }
    }
  },

  "Spitting Eurypterid": {
    source: "Souls for Smuggler's Shiv",
    creatureType: "vermin",
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Gargantuan",
    hd: 16,
    hdVal: 8,
    cr: 12,
    racialFeatures: [
      "Low-Light Vision",
      "Tremorsense 30 ft."
    ],
    speed: {
      base: 10,
      swim: 40
    },
    abilities: {
      str: 34,
      dex: 10,
      con: 24,
      int: "-",
      wis: 13,
      cha: 2
    },
    feats: [
      {
        name: "Improved Initiative",
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
        weapon: "Sting",
        name: "Sting",
        specialAbility: "poison",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to mind-affecting effects"
    ],
    defense: {
      naturalArmor: 20
    },
    space: "20 ft.",
    reach: "20 ft. (30 ft. with sting)",
    environment: "temperate or warm ocean",
    visualDescription: "Two large pincers grasp at the air before this sleek creature, while a finned tail bristling with a long, thin stinger rises from behind.",
    description: "Known to some as sea scorpions, eurypterids are aquatic crustaceans that blur the line between their terrestrial cousins and lobsters. Primeval and voracious, these vermin range in size from relatively harmless ochre eurypterids the size of a dog up to the truly immense spitting eurypterids. There are even rumors of yet larger beasts, called whaleeating eurypterids by sailors. Regardless of their size, all share one thing in common-an aggressive attitude. Eurypterids lash out at anything that might be food, and once they've tasted prey, are single-minded in their pursuit. Although quite at home in the open sea, most eurypterids are capable of scuttling around on land and can exist out of water indefinitely. Unlike rats, eurypterids don't spread disease or cause much damage to most cargos-traits that have led some captains to experiment with seeding colonies of ochre eurypterids in their holds to keep rodent populations under control. Alas, one can often tell the ships that use this tactic by the unusually high number of crewmen with missing fingers.",
    organization: "solitary",
    spellLikeAbilities: [],
    skills: {
      Swim: {
        ranks: 0
      }
    },
    special: {
      spit: {
        type: "Ex",
        text: "A spitting eurypterid can expel a high-pressure jet of water from a vent just below its mouth with startling accuracy and force. This spit attack is equally effective above or below water, creating a 40-foot line that inflicts 10d6 points of nonlethal damage to all creatures in the area of effect. In addition, creatures that take damage from this jet of water are stunned for 1 round. A DC 25 Fortitude save halves the damage and negates the stun effect. Once a spitting eurypterid uses this ability, it cannot use it again until it takes a full-round action while completely submerged to draw more water into its body. The save DC is Constitution-based."
      },
      amphibious: {
        universalMonsterAbility: "Amphibious"
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Sting-injury; save Fort DC 25; frequency 1/round for 6 rounds; effect 1d6 Con and 1d4 Dex; cure 2 consecutive saves.",
        saveDC: 10
      }
    }
  },

  "Undead Ningyo": {
    source: "Souls for Smuggler's Shiv",
    creatureType: "undead",
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Small",
    hd: 2,
    hdVal: 8,
    cr: 1,
    racialFeatures: [
      "Perception +2"
    ],
    speed: {
      base: 10,
      swim: 20
    },
    abilities: {
      str: 12,
      dex: 13,
      con: "-",
      int: 5,
      wis: 15,
      cha: 16
    },
    feats: [
      {
        name: "Step Up",
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
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any aquatic or land",
    visualDescription: "The repulsively fused features of a dried fish and desiccated humanoid combine in these monstrous remains. The crackle of tiny grinding bones and the hiss of parched scales whisper with every motion as the snarling miniature mummy drags its shriveled corpse forward.",
    description: "The bane of fishermen and divers, ningyos lurk in tropical waters, gorging themselves on fish and attacking anything they can sink their tiny fangs into. Nasty little things, these primitive, miniature mer-monsters are bogeymen of the sea, often attacking seagoers, ships, and fishing tackle out of both blind ravenousness and blunt stupidity. With little more organization or society than a school of sharks, these cannibalistic half-simian, half-fish terrors swarm by night and can easily drag those caught on moonlit waters down to drown amid a sea of tiny claws and needling teeth. Yet for all their animal ferocity, ningyos are most notorious for their unquiet deaths. Said by natives to be too mean and stupid to die, a slain ningyo always returns to life by night, obliviously adopting old habits or dragging itself forth from the water to find its killer. By day, though, undead ningyos turn back into normal corpses, sometimes washing up on shore as gruesome and fascinating-but potentially deadly-curiosities. While the knowledgeable burn the eerie corpses they find along the coast, more than one foolhardy beachcomber has collected such an oddity, only to later awake in terror, the tiny withered claws and broken teeth of his weird curio savaging him in the dark. Ningyos measure approximately 2 to 2-1/2 feet long from head to tail, and weigh 6 to 9 pounds. Ningyos on Golarion Ningyos have harassed and terrorized those dwelling along warm coasts for ages, proving most common along the west coast of Garund and the eastern shores of Arcadia. Well informed by the native folklore of those areas, most locals easily avoid and deal with the nasty mer-creatures. Visitors and invaders of such areas, though, are rarely so well informed. The Fetching Fishwife: This saltencrusted beach house-turned-inn teeters on a rocky beach a short ride north of Eleder. Popular with visitors and those seeking to escape the city's roughand- tumble confusion, the Fishwife offers fine rooms, good food, and a collection of eclectic decor- from bestial trophies and wall mountings to native artistry. It also bears a curse. Four guests and two owners have met gruesome deaths in the inn, and the most recent landlord quietly fled Sargava, leaving the keys to the house and a tiny, withered claw to his estranged brother. Kimbal Pall, the current owner, now runs the tavern, having no idea he holds a piece of an undead ningyo lurking in his collection. Treasure at Bloodcove: The treacherous inlets southwest of Bloodcove have long been a favorite stop for Shackles pirates, those with both booty to bury and plots to pillage the Kaava Lands' coastal tribes. Recently, a masked shaman has been sighted wandering between these coves, attended by a large, murderous swarm of ningyos. Although the witch doctor seems to only feed the nasty sea monsters fish heads and bird carcasses, they obey her every command, driving off the curious as they endlessly scour the sea floor, as if for some unknown treasure.",
    organization: "solitary, pair, or exhibit (3-15)",
    spellLikeAbilities: [],
    skills: {
      Stealth: {
        ranks: 1
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      "group grapplers": {
        type: "Ex",
        text: "A ningyo has a +2 racial bonus on combat maneuver checks. When two or more ningyos are grappling the same creature, each gains a +1 bonus on grapple combat maneuver checks and a +1 bonus on grapple damage rolls."
      },
      startle: {
        type: "Su",
        text: "Any creature of 5 Hit Dice or fewer that is attacked by an undead ningyo in a surprise round must make a DC 14 Will save or be frightened for 1d4 rounds. If the subject succeeds on a Will save, it is shaken for 1 round. Whether or not the save is successful, the affected creature is immune to the same undead ningyo's startle attack for 24 hours. Creatures with 6 or more HD are immune to this effect. This is a mind-affecting fear effect. The save DC is Charisma-based."
      },
      "nocturnal undeath": {
        type: "Su",
        text: "The body of a ningyo never rests peacefully. Every night, an hour after sundown, an intact ningyo corpse animates; its type changes to undead (aquatic), and it gains undead immunities, bonus hit points based on its Charisma instead of Constitution, and the startle ability. At dawn, the undead ningyo becomes a corpse again. An undead ningyo knows when the dawn is coming and attempts to find shelter so it is not discovered as a corpse. A ningyo missing a limb, head, or tail does not animate at night, but can do so if reunited with its missing body part. A ningyo corpse that is burned or torn apart and its pieces scattered does not rise as an undead."
      },
      "poison flesh": {
        type: "Ex"
      }
    }
  },

  Rhamphorhynchus: {
    legs: 2,
    arms: 2,
    source: "Souls for Smuggler's Shiv",
    creatureType: "animal",
    flying: true,
    dinosaur: true,
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Tiny",
    hd: 1,
    hdVal: 8,
    cr: "1/3",
    racialFeatures: [
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 10,
      maneuverability: "Good",
      fly: 40
    },
    abilities: {
      str: 6,
      dex: 17,
      con: 11,
      int: 2,
      wis: 14,
      cha: 11
    },
    feats: [
      {
        name: "Lightning Reflexes",
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
    defense: {},
    space: "2-1/2 ft.",
    reach: "2-1/2 ft.",
    environment: "warm coastline or forest",
    visualDescription: "This creature looks like a cross between a bird and a reptile, sporting leathery wings, a beak filled with needlelike teeth, and a long tail ending in a diamond-shaped vane.",
    description: "Rhamphorhynchuses make excellent familiars for those spellcasters who are looking for quick and nimble minions. Although not dinosaurs themselves, these skittish pterosaurs are often found wheeling in the skies above dinosaur hunting grounds.",
    organization: "solitary, pair, or flock (3-16)",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 0
      },
      Perception: {
        ranks: 1
      },
      Stealth: {
        ranks: 0
      }
    },
    special: {
      "sudden swoop": {
        type: "Ex",
        text: "If a rhamphorhynchus makes a charge attack while flying, it does not provoke attacks of opportunity when it enters an opponent's space to make a melee attack. It also gains a +2 bonus on damage rolls with its bite attack when it makes a sudden swoop."
      },
      evasion: {
        universalMonsterAbility: "Evasion"
      }
    }
  },

  Quetzalcoatlus: {
    source: "Souls for Smuggler's Shiv",
    creatureType: "animal",
    flying: true,
    dinosaur: true,
    reptile: true,
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Huge",
    hd: 11,
    hdVal: 8,
    cr: 7,
    racialFeatures: [
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 30,
      maneuverability: "Clumsy",
      fly: 50
    },
    abilities: {
      str: 25,
      dex: 17,
      con: 17,
      int: 2,
      wis: 14,
      cha: 12
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
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Lunge",
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
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      }
    ],
    defense: {
      naturalArmor: 7
    },
    space: "15 ft.",
    reach: "15 ft.",
    environment: "warm coastline, swamps, or plains",
    visualDescription: "A brightly colored creature swoops down to land on the branch above. Its head is overly large, with a mouth full of sharp teeth and bright, shiny eyes. The thing chirps, lashes its long thin tail, and then with a flap of leathery wings is in the air once again.",
    description: "Pterosaurs are often found in regions where dinosaurs and other prehistoric creatures are commonly encountered, yet they are not dinosaurs themselves. The pteranodon is the most well known and widespread of these flying reptiles, but numerous other species exist, such as the relatively small rhamphorhynchus, the venomous dimorphodon, and the lumbering, giraffe-sized quetzalcoatlus. While the larger pterosaurs are awkward fliers, the smaller ones can be quite agile and quick. Pterosaurs generally dwell on coastlines, along rivers, or near swamps or lakes, for the majority of their diet consists of fish snatched from the water in daring dives. Pterosaurs are quite territorial, though, and most won't hesitate to swoop down and hiss, shriek, and attack things their size or larger. Quetzalcoatlus Perhaps the largest of the pterosaurs, the quetzalcoatlus (known to some as the \"swamp stalker\" and others by the misnomer of \"dragonling\") is truly an awe-inspiring sight in the air, with its impressive 40-foot wingspan. On the ground, this creature's profile bears an uncanny resemblance to that of a giraffe, save for the fact that the folded wings arch up to either side of its lightly feathered body, and its head bears a horrific, razor-sharp beak. Unlike dimorphodons, quetzalcoatluses are difficult to train. Handle Animal checks made to train one of these looming pterosaurs take a -4 penalty. Quetzalcoatlus Companions Starting Statistics: Size Medium; AC +2 natural armor; Speed 30 ft., fly 50 ft. (clumsy); Attack bite (1d8); Ability Scores Str 9, Dex 21, Con 10, Int 2, Wis 14, Cha 12; Special Qualities Low-Light Vision, scent. 9th-level Advancement: Size Large; AC +3 natural armor; Attack bite (2d6/x3), 2 wings (1d4); Ability Scores Str +8, Dex -2, Con +4; Special Qualities razor-sharp beak.",
    organization: "solitary, pair, or flock (3-6)",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 0
      },
      Perception: {
        ranks: 5
      }
    },
    special: {
      "razor-sharp beak": {
        type: "Ex",
        text: "A quetzalcoatlus's razor-sharp beak has a critical modifier of x3."
      }
    }
  },

  "Hunter Urchin": {
    source: "Souls for Smuggler's Shiv",
    creatureType: "vermin",
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 2,
    hdVal: 8,
    cr: 1,
    racialFeatures: [
      "All-Around Vision",
      "Low-Light Vision",
      "Scent",
      "Tremorsense 30 ft."
    ],
    speed: {
      base: 15
    },
    abilities: {
      str: 15,
      dex: 3,
      con: 14,
      int: "-",
      wis: 11,
      cha: 2
    },
    feats: [],
    attacks: [
      {
        weapon: "Tongue",
        name: "Tongue",
        specialAbility: "pull",
        damage: "1d3"
      }
    ],
    immunities: [
      "Immune to mind-affecting effects"
    ],
    defense: {
      naturalArmor: 6
    },
    space: "5 ft.",
    reach: "5 ft.; 20 ft. with tongue",
    environment: "temperate or warm ocean or coastline",
    visualDescription: "This strange-looking creature has a spherical body covered with hundreds or thousands of two-foot-long bright purple spines that darken to ominous black tips.",
    description: "Much more dangerous than their smaller kin, giant sea urchins are dangerous predators of opportunity. With the exception of the hunter urchin, giant sea urchins lie in wait for food to come to them, typically carried within reach of their attacks via ocean currents or, more commonly, tides. Hunter Urchins: These urchins can adjust their spines to effect an awkward method of locomotion on land. They actively seek prey, and possess long, rasp-like tongues that can whip out and pull food to them. Spear Urchins: These brightly colored creatures can fire spines like javelins, relying upon poison to slow down prey or eventually immobilize it so they can crawl over to feed. Glass Urchins: So named for their transparency, these beautiful creatures shimmer like delicate crystals. Yet for all the damage their spines can inflict, victims of glass urchins generally do more damage to themselves or their allies due to the potent hallucinatory effects of this urchin's venom. Sea Urchins as Difficult Terrain The giant sea urchins presented here are fantastic evolutions of their much more common, smaller, and less offensive kin. Yet even the smaller common urchins can pose a problem for unwary adventurers. Sea urchins live in vast colonies on tidal rocks, and moving across a field of urchins can be quite awkward and painful. Their thousands of spines are just as sharp as those possessed by their larger kin, and they function as caltrops to anyone that walks over them. Worse, these spines are venomous, and can poison those who take damage from them. Those who succumb to the poison suffer searing pain that can sicken them for several minutes. Though uncomfortable, fortunately this venom doesn't actually inflict either ability damage or ability drain. Sea Urchin Venom: Spines-injury; save Fort 11; frequency 1/minute for 6 minutes; effect victim is sickened for 1 minute; cure 1 save.",
    organization: "solitary, pair, or cluster (3-10)",
    spellLikeAbilities: [],
    skills: {
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
      spines: {
        type: "Ex",
        text: "A hunter urchin's spines can swivel to face any approaching creature. Any creature that attacks a hunter urchin with an unarmed strike or a natural attack, or any Medium or smaller creature that attacks with a one-handed weapon or light weapon, is automatically attacked by the hunter urchin's spines as an immediate action. If the spines hit, they can poison the target as well.",
        preText: "+3, 1d4+2 plus poison"
      },
      pull: {
        universalMonsterAbility: "Pull",
        attack: "tongue",
        distance: "5 feet"
      },
      amphibious: {
        universalMonsterAbility: "Amphibious"
      },
      stability: {
        universalMonsterAbility: "Stability"
      }
    }
  },

  "Spear Urchin": {
    source: "Souls for Smuggler's Shiv",
    creatureType: "vermin",
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 5,
    hdVal: 8,
    cr: 4,
    racialFeatures: [
      "All-Around Vision",
      "Low-Light Vision",
      "Scent",
      "Tremorsense 30 ft."
    ],
    speed: {
      base: 5
    },
    abilities: {
      str: 23,
      dex: 3,
      con: 18,
      int: "-",
      wis: 11,
      cha: 2
    },
    feats: [],
    attacks: [
      {
        weapon: "Spine",
        name: "2 Spines",
        specialAbility: "poison",
        damage: "1d6"
      }
    ],
    immunities: [
      "Immune to mind-affecting effects"
    ],
    defense: {
      naturalArmor: 12
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "temperate or warm ocean or coastline",
    visualDescription: "This strange-looking creature has a spherical body covered with hundreds or thousands of two-foot-long bright purple spines that darken to ominous black tips.",
    description: "Much more dangerous than their smaller kin, giant sea urchins are dangerous predators of opportunity. With the exception of the hunter urchin, giant sea urchins lie in wait for food to come to them, typically carried within reach of their attacks via ocean currents or, more commonly, tides. Hunter Urchins: These urchins can adjust their spines to effect an awkward method of locomotion on land. They actively seek prey, and possess long, rasp-like tongues that can whip out and pull food to them. Spear Urchins: These brightly colored creatures can fire spines like javelins, relying upon poison to slow down prey or eventually immobilize it so they can crawl over to feed. Glass Urchins: So named for their transparency, these beautiful creatures shimmer like delicate crystals. Yet for all the damage their spines can inflict, victims of glass urchins generally do more damage to themselves or their allies due to the potent hallucinatory effects of this urchin's venom. Sea Urchins as Difficult Terrain The giant sea urchins presented here are fantastic evolutions of their much more common, smaller, and less offensive kin. Yet even the smaller common urchins can pose a problem for unwary adventurers. Sea urchins live in vast colonies on tidal rocks, and moving across a field of urchins can be quite awkward and painful. Their thousands of spines are just as sharp as those possessed by their larger kin, and they function as caltrops to anyone that walks over them. Worse, these spines are venomous, and can poison those who take damage from them. Those who succumb to the poison suffer searing pain that can sicken them for several minutes. Though uncomfortable, fortunately this venom doesn't actually inflict either ability damage or ability drain. Sea Urchin Venom: Spines-injury; save Fort 11; frequency 1/minute for 6 minutes; effect victim is sickened for 1 minute; cure 1 save.",
    organization: "solitary, pair, or cluster (3-6)",
    spellLikeAbilities: [],
    skills: {
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
      spines: {
        type: "Ex",
        text: "A spear urchin's spines can swivel and rotate to face any approaching creature that attacks it. Any creature that attacks a spear urchin with an unarmed strike or a natural attack, or any Large or smaller creature that attacks with a onehanded weapon or light weapon, is automatically attacked by the spear urchin's spines as an immediate action. If the spines hit, they can poison the target as well. In addition, a spear urchin can fire up to two spines each round as if they were javelins with a range increment of 30 feet. As long as its target is within range of its Tremorsense (30 feet), a spear urchin ignores its Dexterity penalty on ranged attack rolls, but beyond this range the penalty functions normally, effectively increasing a spear urchin's penalty to hit by -4 over its standard penalty for range. A spear urchin's spines function equally well underwater as they do above water.",
        preText: "+8, 1d6+6 plus poison"
      },
      amphibious: {
        universalMonsterAbility: "Amphibious"
      },
      stability: {
        universalMonsterAbility: "Stability"
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Spear urchin venom causes horrific pain that weakens the muscles and causes intense nausea. The save DC is Constitution-based. Spines-injury; save Fort DC 16; frequency 1/round for 6 rounds; effect 1d2 Str and nauseated for 1 round; cure 1 save. Spines (Ex) A spear urchin's spines can swivel and rotate to face any approaching creature that attacks it. Any creature that attacks a spear urchin with an unarmed strike or a natural attack, or any Large or smaller creature that attacks with a onehanded weapon or light weapon, is automatically attacked by the spear urchin's spines as an immediate action. If the spines hit, they can poison the target as well. In addition, a spear urchin can fire up to two spines each round as if they were javelins with a range increment of 30 feet. As long as its target is within range of its Tremorsense (30 feet), a spear urchin ignores its Dexterity penalty on ranged attack rolls, but beyond this range the penalty functions normally, effectively increasing a spear urchin's penalty to hit by -4 over its standard penalty for range. A spear urchin's spines function equally well underwater as they do above water.",
        saveDC: null,
        saveType: "DC"
      }
    }
  },

  "Glass Urchin": {
    source: "Souls for Smuggler's Shiv",
    creatureType: "vermin",
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Huge",
    hd: 12,
    hdVal: 8,
    cr: 9,
    racialFeatures: [
      "All-Around Vision",
      "Low-Light Vision",
      "Scent",
      "Tremorsense 30 ft."
    ],
    speed: {
      base: 5
    },
    abilities: {
      str: 31,
      dex: 3,
      con: 22,
      int: "-",
      wis: 15,
      cha: 2
    },
    feats: [],
    attacks: [
      {
        weapon: "Spine",
        name: "3 Spines",
        specialAbility: "poison",
        damage: "1d8"
      }
    ],
    immunities: [
      "Immune to mindaffecting effects"
    ],
    defense: {
      naturalArmor: 18
    },
    space: "15 ft.",
    reach: "15 ft.",
    environment: "warm ocean or coastline",
    visualDescription: "This strange-looking creature has a spherical body covered with hundreds or thousands of two-foot-long bright purple spines that darken to ominous black tips.",
    description: "Much more dangerous than their smaller kin, giant sea urchins are dangerous predators of opportunity. With the exception of the hunter urchin, giant sea urchins lie in wait for food to come to them, typically carried within reach of their attacks via ocean currents or, more commonly, tides. Hunter Urchins: These urchins can adjust their spines to effect an awkward method of locomotion on land. They actively seek prey, and possess long, rasp-like tongues that can whip out and pull food to them. Spear Urchins: These brightly colored creatures can fire spines like javelins, relying upon poison to slow down prey or eventually immobilize it so they can crawl over to feed. Glass Urchins: So named for their transparency, these beautiful creatures shimmer like delicate crystals. Yet for all the damage their spines can inflict, victims of glass urchins generally do more damage to themselves or their allies due to the potent hallucinatory effects of this urchin's venom. Sea Urchins as Difficult Terrain The giant sea urchins presented here are fantastic evolutions of their much more common, smaller, and less offensive kin. Yet even the smaller common urchins can pose a problem for unwary adventurers. Sea urchins live in vast colonies on tidal rocks, and moving across a field of urchins can be quite awkward and painful. Their thousands of spines are just as sharp as those possessed by their larger kin, and they function as caltrops to anyone that walks over them. Worse, these spines are venomous, and can poison those who take damage from them. Those who succumb to the poison suffer searing pain that can sicken them for several minutes. Though uncomfortable, fortunately this venom doesn't actually inflict either ability damage or ability drain. Sea Urchin Venom: Spines-injury; save Fort 11; frequency 1/minute for 6 minutes; effect victim is sickened for 1 minute; cure 1 save.",
    organization: "solitary, pair, or cluster (3-4)",
    spellLikeAbilities: [],
    skills: {
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
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Glass urchin venom causes the senses to become clouded and creates vivid hallucinations and confusion in the victim's mind. The save DC is Constitution-based.",
        saveDC: null,
        saveType: "DC"
      },
      spines: {
        type: "Ex",
        text: "A glass urchin's spines can swivel and rotate to face any approaching creature that attacks it. Any creature that attacks a glass urchin with an unarmed strike or a natural attack, or any Huge or smaller creature that attacks with a one-handed weapon or light weapon, is automatically attacked by the glass urchin's spines as an immediate action. If the spines hit, they can poison the target as well."
      },
      amphibious: {
        universalMonsterAbility: "Amphibious"
      },
      stability: {
        universalMonsterAbility: "Stability"
      },
      transparency: {
        type: "Ex",
        text: "A glass urchin's spines and body are transparent when underwater, granting the creature concealment and a constant 20% miss chance."
      }
    }
  },

  Tuyewera: {
    source: "Souls for Smuggler's Shiv",
    creatureType: "undead",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 6,
    hdVal: 8,
    cr: 4,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 20
    },
    abilities: {
      str: 17,
      dex: 16,
      con: "-",
      int: 8,
      wis: 13,
      cha: 15
    },
    feats: [
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Tongue",
        choiceSource: "Weapon Focus"
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
        weapon: "Tongue",
        name: "Tongue",
        specialAbility: "grab",
        damage: "1d4"
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "magic"
      },
      naturalArmor: 3
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "The figure that crawls up from the grave may have once been a living man, but it is now wholly a monster. Its flesh crawls with worms and seeps with decay, allowing bones and internal organs to slip through hideous tears here and there. Its jaw distends and a long tongue whips out, almost like a tentacle. Its legs have been severed at the knee, forcing it to scrabble forward on all fours like some deranged beast.",
    description: "The tuyewera is a hideous creation designed to serve not only as a stealthy minion but also as a monstrous assassin. Invisible during the day, a tuyewera can be sent into an enemy's lair to perform any number of missions desired by its creator or master. A tuyewera that lacks a master is a free-willed undead-in wilderness regions, it wanders aimlessly, constantly searching for signs of civilization. If it finds such signs, it invariably seeks out a graveyard and lurks in hiding, waiting for a new body to be buried so that it can burrow into the grave and steal the corpse's tongue at the first opportunity. The tuyewera then stalks the region, looking for mourners of the dead person to lure into a secluded area and suffocate, before stealing their tongues to repeat the process. Variant Tuyeweras The statistics presented on the facing page are for a typical tuyewera created from the body of a Medium humanoid creature, but there are methods by which tuyeweras can be created from the bodies of smaller or larger humanoids as well. While in theory, one should be able to create a tuyewera from a non-humanoid creature, so far necromancers have been unable to achieve this feat. Something to do with the preparation method and the medicines used simply doesn't translate to non-humanoid bodies-although the unique undead created by such methods could have a variety of powers, they are not truly tuyeweras. Guidelines for statting up smaller and larger tuyeweras appear below. Smaller Tuyeweras: Tuyeweras created from the bodies of gnomes, half lings, or even children of larger humanoids can be statted up by applying the young creature simple template. Larger Tuyeweras: A tuyewera created from the body of a giant can be Large or larger. You can simply apply the giant creature simple template, but a better solution in this case is to rebuild the tuyewera with all of the appropriate changes to its stats-whenever a tuyewera's Hit Dice grant it an ability score increase, it increases its Charisma score. A Large tuyewera has 10 HD and is CR 6. A Huge one has 14 HD and is CR 8. A Gargantuan one has 18 HD and is CR 11. The largest, Colossal tuyeweras, have 22 HD and are CR 14. Creating a Tuyeweras A tuyewera can be created via the create undead spell, so long as the caster undertakes a specialized ritual as part of the casting. The body to be transformed into a tuyewera must be that of a humanoid the caster has himself slain at some point in the last 3 days. The spellcaster must be at least 13th level to create a tuyewera. Before the spellcasting begins, the caster must prepare the body by removing the corpse's tongue and severing its legs at the knees. The actual casting of the spell requires the caster to anoint the tuyewera's severed limbs and tongue with special medicines. These discarded body parts must then be burnt to ashes so that when the tuyewera rises from the dead, it does not recognize its missing limbs and tongue (if it does, it immediately attacks its creator). When the spell is complete, the newly created tuyewera is loyal to its creator and follows his spoken commands as long as the caster wears or carries a small pouch containing a handful of the ashes from the tuyewera's burnt limbs and tongue on his person. If the caster ever loses this pouch, the tuyewera becomes uncontrolled. If a tuyewera ever sees the ashes, it immediately recognizes them and seeks out its creator unerringly (as if via locate creature, but with no range limitation) and attempts to kill him- preferably as the creator sleeps.",
    organization: "solitary",
    languages: "Common (but see steal tongue below)",
    spellLikeAbilities: [],
    skills: {
      Bluff: {
        ranks: 6
      },
      Perception: {
        ranks: 6
      },
      Stealth: {
        ranks: 6
      }
    },
    special: {
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "1d4+4"
      },
      lure: {
        type: "Su",
        text: "If a tuyewera possesses a stolen tongue (see steal tongue ability), it can lure creatures into a trancelike state and compel them to approach as a standard action. When a tuyewera uses its lure, it must target an intelligent creature within 120 feet to which it has line of effect (but not necessarily line of sight). The tuyewera must concentrate to maintain the lure's effects. It then calls out to the creature, beckoning it to approach. The target can resist this lure by making a successful DC 15 Will save, after which that target is immune to that tuyewera's lure ability until the tuyewera gains a different tongue. If the tuyewera uses the target's name during the lure, the target suffers a -2 penalty on the Will save. If the target fails, she becomes fascinated and attempts to approach the tuyewera by the shortest, safest route possible. Once the target is adjacent to the tuyewera, she remains motionless and offers no resistance to the undead's attacks (although once the tuyewera attacks, it ceases concentration and the victim is free to act, assuming she survives the monster's attack). This is a sonic mindaffecting charm effect. The save DC is Charisma-based."
      },
      "steal tongue": {
        type: "Su",
        text: "A tuyewera does not possess a tongue of its own when it is created-it must steal a tongue from a recently slain (no more than 1 day ago) creature before it can speak, attack with its tongue, or use its lure or constriction attacks. Stealing a tongue is a full-round action, after which the stolen tongue merges with the tuyewera's jaw. The tuyewera gains the ability to speak and understand all of the languages known by the dead body from which the tongue was harvested, and its voice sounds exactly like that of the dead creature while it still lived. The monster's new tongue is a dangerous weapon as well, and can extend to a length of nearly 5 feet to attack and constrict foes. A stolen tongue only lasts until the next sunrise, after which it rots away to corruption in a single round, forcing the tuyewera to seek out a replacement before it regains its speech and attacks."
      },
      suffocation: {
        type: "Su",
        text: "A tuyewera does not breathe itself, but it can attempt to steal the breath of a helpless, fascinated, or stunned adjacent creature as a standard action. When the tuyewera attempts this, it moves its mouth next to the victim's mouth and inhales, drawing the victim's breath out of her body. The victim can attempt to resist this attack by making a DC 15 Fortitude save. If she fails, the victim is stunned for 1 round and begins to suffocate. The victim falls unconscious on the second round, drops to -1 hit points on the third, and dies of suffocation on the fourth. Each round, the victim may attempt a new DC 15 Fortitude save to end the suffocation effect. The save DC is Charisma-based."
      },
      "daylight invisibility": {
        type: "Su",
        text: "During the day, a tuyewera is invisible as long as it doesn't attack. This effect functions as the invisibility spell, but lasts for the entire day. If a tuyewera takes any action that would negate its invisibility (such as attacking), it remains visible until it takes a full-round action to reactivate its invisibility."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    },
    resistances: [
      "vulnerable to sunlight"
    ]
  },

};
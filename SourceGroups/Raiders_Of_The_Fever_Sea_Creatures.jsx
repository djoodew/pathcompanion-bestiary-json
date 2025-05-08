
export const Raiders_Of_The_Fever_SeaCreatures = {
  "Canopy Creeper": {
    source: "Raiders Of The Fever Sea",
    creatureType: "plant",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Huge",
    hd: 12,
    hdVal: 8,
    cr: 8,
    racialFeatures: [
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 20,
      climb: 20
    },
    abilities: {
      str: 26,
      dex: 16,
      con: 26,
      int: 2,
      wis: 10,
      cha: 10
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
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Climb",
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
        weapon: "Vine tendril",
        name: "4 Vine tendrils",
        specialAbility: "feed, pull"
      }
    ],
    immunities: [
      "Immune to electricity"
    ],
    defense: {
      naturalArmor: 12
    },
    space: "15 ft.",
    reach: "10 ft. (100 ft. with vine tendrils)",
    environment: "warm forests",
    visualDescription: "What at first appeared to be nothing more than a tangle of thick, twisted vines growing among the canopy of the trees suddenly coils itself into a large mass dangling high above. A large beaklike maw emerges from the center of the fecund mass, numerous thick, grasping vines whipping through the air.",
    description: "A little-known menace of the jungles and forests of uncharted southern Garund, the canopy creeper is a semi-sentient plant that blends in with the foliage of the forest canopy and makes use of the flora's own outgrowth to trap and feed upon its prey. The canopy creeper resembles a mass of thickly knotted and twisted jungle vines that correspond to the colors and varieties of its native habitat. It has a larger knot of this tangle at its center mass, which also conceals a large, beaklike maw. The canopy creeper can spread itself over a broad area to resemble little more than this network of vines, or it can draw itself up into a large, coiled mass with its beak exposed. The actual vines that coil together to form the canopy creeper are hundreds of feet long altogether in an adult specimen. When spread out, these tangles of vine cover an area 20 feet in diameter. They congregate into a mass approximately 10 feet in diameter when drawn in together. The mass of a canopy creeper weighs about 3,000 pounds in total. A canopy creeper can live for hundreds of years in a hospitable climate if sufficient sunlight and food sources are available. Ecology Canopy creepers are plants naturally evolved to take advantage of their surroundings. They grow amid the lush foliage of jungles or rain forests where a diverse array of vine plants proliferates. The canopy creeper climbs up among the tree tops and intertwines its own vine-grown body with those that grow naturally, enabling it to gain control over the naturally occurring network of vines to use as a source of both defense and sustenance. While a canopy creeper does gain food and energy from photosynthesis, it cannot maintain its active metabolism when relying only on the nutrients gleaned from sun and rain. For maximum efficiency, it uses the vine tendrils that it gains control of to detect by scent, to entrap, and to draw prey toward itself. It is also able to use these vine tendrils to procure food as they draw the nutrient-rich fluids from creatures entangled within their embrace, which are then conveyed back to the controlling canopy creeper. While the canopy creeper's primary method of attack is through its vine tendrils, it does have a large beak mouth composed of a hard, hornlike material. This beak is normally concealed within the center of its vine mass, but when creatures approach that prove able to resist its vine tendril attacks, the canopy creeper tries to draw them in close enough so that it can attack with its beak as well. It can consume prey with this mouth, but this is not its preferred method of feeding as most of the prey's fluids are lost as the beak tears the creature apart, resulting in fewer nutrients than if it were to feed solely through the vine tendrils. A canopy creeper naturally mimics the appearance and growth of the types of vines that grow in its environment, so when one is concealed among the vine-tangled foliage above, it is difficult for even an experienced outdoorsman to detect. This is further exacerbated by the fact that it is usually hanging about 100 feet above the ground, making its appearance even more difficult to discern. Canopy creepers' preferred prey is Medium or larger creatures since these tend to hold more of the nutrient-rich fluids that the creepers feed upon; meanwhile, Small and smaller creatures-such as small monkeys-can often be seen cavorting around and even suspended from a canopy creeper, oblivious to its presence. However, during starvation conditions when the creeper is forced to rely upon photosynthesis for its survival, it readily preys upon such smaller creatures as well. The result of this preference, however, is that the canopy creature typically focuses its attacks on opponents of at least Medium size. Canopy creepers store a great deal of moisture from their normally wet habitat in their vine structures, making them difficult to burn. However, this fact, as well as their adaptation to warm climates, makes them particularly susceptible to cold attacks, which cause them to become brittle and prone to fractures in their vine structures. Habitat & Society A canopy creeper out of its habitat is a canopy creeper in serious trouble. The creature relies on the prolific presence of other vine growths to camouf lage its presence and to provide an aerial habitat from which it can feed safely above most creatures that might prey upon it. As a result, if a canopy creeper is caught on the ground away from screening foliage, it flies into a berserk frenzy, lashing out with its beak as it attempts to make for the nearest tree or high ground to escape. A well-fed canopy creeper buds once every 4 or 5 years and drops dozens of small seedlings to the ground. Most of these shrivel up and die from lack of sustenance, but one or two usually manage to survive on rats and other vermin until they grow large and strong enough to become mobile, a process that usually takes about a month. These seedlings then instinctively begin looking for a new hunting area away from their parents and siblings, since the plants are naturally solitary and avoid encroaching on each other's hunting territory. A successful seedling reaches full size in 2-3 years if it finds a location with suitable prey to feed upon. During the time when the plants are seedlings, opportunistic horticulturists have been known to contain and transport canopy creepers, transplanting them elsewhere and raising them as potent guardian plant creatures.",
    organization: "solitary",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 0
      },
      Perception: {
        ranks: 6,
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
            value: 16
          }
        ]
      }
    },
    special: {
      "aerial attack": {
        type: "Ex",
        text: "A canopy creeper gains a +2 bonus on attack rolls when battling a creature that is not touching the ground or otherwise braced on a solid surface (such as a ship's deck). This bonus applies on combat maneuver checks and to CMD."
      },
      pull: {
        universalMonsterAbility: "Pull",
        attack: "vine tendril",
        distance: "30 feet"
      },
      camouflage: {
        type: "Ex",
        text: "Because a canopy creeper blends in with the foliage that is its natural habitat, a DC 20 Perception check (modified for distance) is required to notice it before it attacks for the first time. Any creature with ranks in Survival or Knowledge (nature) can use either of those skills (also modified for distance) instead of Perception to notice the plant."
      },
      "vine tendrils": {
        type: "Ex",
        text: "A canopy creeper can take control of any network of vines it has attached itself to and use up to four of those vines as weapons to strike out at targets up to 100 feet away. The vine tendrils have 10 hit points, DR 5/slashing, and a Break DC of 21. If one of these vines is destroyed, the canopy creeper can assume control of another vine as a move action to bring it to bear in combat."
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        value: null
      },
      feed: {
        type: "Ex",
        text: "When a canopy creeper grapples a creature with its tendrils, it begins to drain the creature's bodily fluids through the target's pores or other body orifices with its tendrils. This feeding deals 1d8 points of damage and 1 point of Strength damage to the target. If the vine tendril is severed or the target breaks the grapple, this feeding ceases until a new grapple is established."
      }
    },
    resistances: [
      {
        damageType: "fire",
        value: 10
      },
      "vulnerability to cold"
    ]
  },

  "Tiger Fish": {
    source: "Raiders Of The Fever Sea",
    creatureType: "animal",
    fish: true,
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 3,
    hdVal: 8,
    cr: 1,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      swim: 50
    },
    abilities: {
      str: 15,
      dex: 14,
      con: 13,
      int: 1,
      wis: 12,
      cha: 2
    },
    feats: [
      {
        name: "Skill Focus",
        type: "General",
        value: "Perception",
        choiceSource: "Skill Focus"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Swim",
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
    defense: {
      naturalArmor: 1
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "warm rivers or swamps",
    visualDescription: "Deadly, wolf like teeth fill the mouth of this brawny fish.",
    description: "Tiger fish roam tropical waterways, their long, streamlined bodies built for speed. They can grow to lengths of up to 6 feet and weigh as much as 150 pounds.",
    organization: "solitary, pair, group (3-5), or school (5-20)",
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
      "interlocking bite": {
        type: "Ex",
        text: "A tiger fish gains a +2 bonus on all drag combat maneuvers and can initiate a drag combat maneuver whenever it scores a successful bite attack against a target. A tiger fish does not provoke attacks of opportunity when initiating a drag maneuver."
      }
    }
  },

  "Varisian Hagfish": {
    source: "Raiders Of The Fever Sea",
    creatureType: "animal",
    fish: true,
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Tiny",
    hd: 2,
    hdVal: 8,
    cr: 1,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 30,
      swim: 30
    },
    abilities: {
      str: 12,
      dex: 15,
      con: 18,
      int: 1,
      wis: 12,
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
    space: "5 ft.",
    reach: "5 ft.",
    environment: "temperate water",
    visualDescription: "A mouth like a lamprey's gnashes curved teeth at one end of this slimy, eel-like fish.",
    description: "These cousins to normal hagfish most commonly appear in the Varisian Gulf. They can reach lengths of 4 feet and weigh up to 15 pounds.",
    organization: "solitary, pair, or group (3-5)",
    spellLikeAbilities: [],
    skills: {
      "Escape Artist": {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      "slime cloud": {
        type: "Ex",
        text: "While underwater, as a free action, a Varisian hagfish can secrete slime that transforms a 5-foot cube of water into a transparent cloud of viscous slime. This slime is the aquatic equivalent of rough terrain, and creatures swimming through it expend 2 squares of movement. The slime cloud remains for 10 rounds before dissipating. Hagfish are unaffected by these slime clouds. The slime also grants the hagfish a +4 bonus on grapple checks."
      }
    }
  },

  Swordfish: {
    source: "Raiders Of The Fever Sea",
    creatureType: "animal",
    fish: true,
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 4,
    hdVal: 8,
    cr: 2,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      swim: 70
    },
    abilities: {
      str: 15,
      dex: 14,
      con: 13,
      int: 1,
      wis: 12,
      cha: 2
    },
    feats: [
      {
        name: "Skill Focus",
        type: "General",
        value: "Swim",
        choiceSource: "Skill Focus"
      },
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
    defense: {},
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any ocean",
    visualDescription: "A proud fin flares along the spine of this large, sleek fish, its head coming to a spearlike point.",
    description: "Swordfish are among the fastest and most efficient predators in the sea, and can grow to lengths of almost 15 feet and weigh up to 1,500 pounds.",
    organization: "solitary or pair",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 2,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      "piercing rush": {
        type: "Ex",
        text: "When a swordfish uses its gore attack after swimming at least 10 feet, including on a charge, it adds two times its strength bonus on damage rolls."
      }
    }
  },

  "Giant Blowfish": {
    source: "Raiders Of The Fever Sea",
    creatureType: "animal",
    fish: true,
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
      "Low-Light Vision"
    ],
    speed: {
      base: 30,
      swim: 30
    },
    abilities: {
      str: 18,
      dex: 13,
      con: 17,
      int: 1,
      wis: 14,
      cha: 12
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
        name: "Skill Focus",
        type: "General",
        value: "Perception",
        choiceSource: "Skill Focus"
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
        name: "Slam",
        specialAbility: "poison",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {},
    space: "10 ft.",
    reach: "10 ft.",
    environment: "warm oceans",
    visualDescription: "A blowfish the size of a horse drifts through the water, its quills the size of spears.",
    description: "A gigantic, prehistoric fish cuts through the water, its head like a snapping turtle, complete with sharp, toothlike plates.",
    organization: "solitary, pair, or school (3-9)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 0
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      quills: {
        type: "Ex",
        text: "Any creature attacking a giant blowfish with light or one-handed melee weapons, natural weapons, or an unarmed strike takes 1d8 points of piercing damage. A creature that grapples a giant blowfish takes 2d6 points of piercing damage each round it does so. Creatures damaged by a giant blowfish's quills must also save or be poisoned. These gigantic cousins of common blowfish, covered in poisonous spearlike quills, can reach up to 10 feet in size, and nearly double that when fully inf lated."
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Slam aand quills-injury; save Fort DC 16; frequency 1/ round for 6 rounds; effect 1d6 Dex, prevents breath holding; cure 1 save. Giant blowfish venom causes violent seizing of the muscles. Any non-aquatic creature affected must immediately begin making Constitution checks to continue holding its breath (see page 445 of the Core Rulebook). The save DC is Constitution-based.",
        saveDC: 10
      }
    }
  },

  Dunkleosteus: {
    source: "Raiders Of The Fever Sea",
    creatureType: "animal",
    dinosaur: true,
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Huge",
    hd: 10,
    hdVal: 8,
    cr: 6,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      swim: 60
    },
    abilities: {
      str: 30,
      dex: 14,
      con: 17,
      int: 1,
      wis: 12,
      cha: 6
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
        name: "Skill Focus",
        type: "General",
        value: "Perception",
        choiceSource: "Skill Focus"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Swim",
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
      }
    ],
    defense: {},
    space: "15 ft.",
    reach: "15 ft.",
    environment: "any ocean",
    visualDescription: "A gigantic, prehistoric fish cuts through the water, its head like a snapping turtle, complete with sharp, toothlike plates.",
    description: "A dunkleosteus is a massive fish with a bony head, armor plating, and a beaklike maw capable of creating a vortex that siphons in its prey. Despite growing to over 30 feet in length and weighing 8,000 pounds, dunkleosteuses are agile swimmers.",
    organization: "solitary",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 4,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Swim: {
        ranks: 1
      }
    },
    special: {
      "siphoning bite": {
        type: "Ex",
        text: "A dunkleosteus can open its giant mouth in a fraction of a second, creating a vortex that draws a target in. When underwater, a dunkleosteus gains an additional 5 feet of reach with its bite attack and a +2 bonus on combat maneuver checks when grappling."
      },
      "swallow whole": {
        universalMonsterAbility: "Swallow Whole",
        damage: "1d10 acid damage",
        hp: "6 hp",
        AC: "AC 10"
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  Malenti: {
    source: "Raiders Of The Fever Sea",
    creatureType: "monstrous humanoid",
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Medium",
    hd: 2,
    hdVal: 10,
    cr: 2,
    racialFeatures: [
      "Blindsense 30 ft.",
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30,
      swim: 60
    },
    abilities: {
      str: 14,
      dex: 17,
      con: 14,
      int: 14,
      wis: 13,
      cha: 13
    },
    feats: [
      {
        name: "Deceitful",
        type: "General"
      },
      {
        name: "Great Fortitude",
        type: "General"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Bluff",
        choiceSource: "Skill Focus"
      }
    ],
    attacks: [
      {
        weapon: "Spear",
        name: "Spear",
        damage: "1d8"
      },
      {
        weapon: "Light crossbow",
        name: "Light crossbow",
        damage: "1d8"
      }
    ],
    defense: {
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "temperate or warm oceans",
    visualDescription: "A predatory gleam glints in the eyes of this stern-looking aquatic elf.",
    description: "The unpredictability and viciousness of the sahuagin race isn't just an aspect of their sharklike temperament- it seems to be inherent in their very beings. The unusual and typically deadly mutants common to the race attest to this, their forms altering and becoming more deadly based either on the needs of the community or ambiguous environmental factors. Whatever the case, sahuagin mutants often rise to positions of respect and influence in sahuagin communities, their innate advantages instantly placing them among their people's rulers. Of these mutants, four-armed sahuagin brutes and malenti- sahuagin with the appearances of sea elves-arise most commonly, though these are in no way the only sahuagin mutants known to the savage seas. Sahuagin Alterations Both the four-armed sahuagin and the malenti use the stats presented on page 239 of the Bestiary as their foundations, with the following alterations. As sahuagin are such common menaces over the course of the Skull & Shackles Adventure Path, their variants are included here to make encounters with the shark people even more unpredictable and deadly. Four-Armed Sahuagin: These mutants gain Multiattack and Toughness as bonus feats and the multiweapon mastery ability. These changes do not include an increase in such a mutant's Hit Dice, but do increase its CR to 3. Despite the advantages these additions give the creature, its hit points are on the low side for a CR 3 monster. GMs should consider giving four-armed sahuagin armor considerably better than that usually worn by CR 3 monsters to make up for this relative glass jaw. Giving the creature leather armor (or an aquatic equivalent, such as shark leather armor) grants it a +2 armor bonus, increasing its AC to 18-above the average for its CR, but a considered benefit to help balance out its weakness. Four-armed sahuagin excel as barbarians, fighters, rangers, and warriors. Malenti: These mutants gain a +4 bonus to Dexterity and Charisma, Deceitful and Skill Focus (Bluff) as bonus feats, and command as a spell-like ability (representing increased telepathic influence over aquatic creatures). Additionally, a malenti's natural armor bonus decreases to +2 and the malenti loses its light blindness and natural weapons. The benefits a malenti gains largely offset those it loses, resulting in no change to the creature's CR. Malenti excel as bards, oracles, rogues, and wizards. Other Sahuagin Mutants Although four-armed sahuagin and malenti are the most common sahuagin mutants, they are not the only abnormalities to arise from sahuagin stock. The following mutants are also sometimes found in sahuagin societies. While rarer than other mutants, they too quickly garner the respect and fear of their piscine brethren. Prehistoric Sahuagin: Also known as adacthys, these sahuagin mutants are throwbacks to some even more savage epoch; they are Large, have a +7 natural armor bonus, and can speak with aquatic dinosaurs and megafauna in addition to sharks. They are usually found in the same waters as prehistoric creatures or waters that are somehow strangely affected by the flow of time. Shark-Blooded Sahuagin: These sahuagin mutants have overly large maws filled with rows of sharklike teeth, and the fins and tail of an oversized thresher shark (or other local variety). These abnormalities give them the appearance of monstrous merfolk, a swim speed of 80 feet, and a bite attack that deals 1d6 points of damage. Shark-blooded sahuagin are most typically found in sahuagin communities with unusually high numbers of shark guardians and near shark breeding grounds. Spined Sahuagin: Covered in hundreds of needle-like spines, these sahuagin can raise these piercing protrusions to impale creatures that attempt to grab or consume them. Any creature that grapples a spined sahuagin takes 1d4 points of piercing damage. Additionally, these mutants gain Defensive Combat Training as a bonus feat. Spined sahuagin most commonly appear in depths that also serve as the hunting grounds of sea serpents, thalassic behemoths, or other massive aquatic predators.",
    organization: "solitary, pair, or ambush (1 plus 2-12 sahuagin and 1-4 sharks)",
    languages: "Aquan, Common; speak with sharks",
    spellLikeAbilities: [
      {
        name: "command",
        casterLevel: 5,
        limitations: "only works on creatures with the aquatic subtype; DC 13",
        timesPerDay: 3
      }
    ],
    skills: {
      Bluff: {
        ranks: 0
      },
      Disguise: {
        ranks: 0
      },
      "Handle Animal": {
        ranks: 2
      },
      Perception: {
        ranks: 2
      },
      Ride: {
        ranks: 2
      },
      Stealth: {
        ranks: 2
      },
      Survival: {
        ranks: 2
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      "blood frenzy": {
        type: "Ex",
        text: "Once per day, a malenti that takes damage in combat can fly into a frenzy in the following round. It gains a +2 bonus to its Constitution and Strength, but takes a -2 penalty to its AC. The frenzy lasts as long as the battle or 1 minute, whichever is shorter. Speak with Sharks (Su) A malenti can communicate telepathically with sharks to a distance of 150 feet. This communication is limited to simple concepts, such as \"come here,\" \"defend me,\" or \"attack this target."
      }
    }
  },

  "Four-armed": {
    source: "Raiders Of The Fever Sea",
    creatureType: "monstrous humanoid",
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Medium",
    hd: 2,
    hdVal: 10,
    cr: 3,
    racialFeatures: [
      "Blindsense 30 ft.",
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30,
      swim: 60
    },
    abilities: {
      str: 14,
      dex: 13,
      con: 14,
      int: 14,
      wis: 13,
      cha: 9
    },
    feats: [
      {
        name: "Great Fortitude",
        type: "General"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Toughness",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Trident",
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
    environment: "temperate or warm ocean",
    visualDescription: "This burly humanoid has sharp scales and fins like some predatory fish. As if its maw full of serrated teeth were not intimidating enough, the monstrosity clenches deadly claws at the ends of four powerful arms.",
    description: "The unpredictability and viciousness of the sahuagin race isn't just an aspect of their sharklike temperament- it seems to be inherent in their very beings. The unusual and typically deadly mutants common to the race attest to this, their forms altering and becoming more deadly based either on the needs of the community or ambiguous environmental factors. Whatever the case, sahuagin mutants often rise to positions of respect and influence in sahuagin communities, their innate advantages instantly placing them among their people's rulers. Of these mutants, four-armed sahuagin brutes and malenti- sahuagin with the appearances of sea elves-arise most commonly, though these are in no way the only sahuagin mutants known to the savage seas. Sahuagin Alterations Both the four-armed sahuagin and the malenti use the stats presented on page 239 of the Bestiary as their foundations, with the following alterations. As sahuagin are such common menaces over the course of the Skull & Shackles Adventure Path, their variants are included here to make encounters with the shark people even more unpredictable and deadly. Four-Armed Sahuagin: These mutants gain Multiattack and Toughness as bonus feats and the multiweapon mastery ability. These changes do not include an increase in such a mutant's Hit Dice, but do increase its CR to 3. Despite the advantages these additions give the creature, its hit points are on the low side for a CR 3 monster. GMs should consider giving four-armed sahuagin armor considerably better than that usually worn by CR 3 monsters to make up for this relative glass jaw. Giving the creature leather armor (or an aquatic equivalent, such as shark leather armor) grants it a +2 armor bonus, increasing its AC to 18-above the average for its CR, but a considered benefit to help balance out its weakness. Four-armed sahuagin excel as barbarians, fighters, rangers, and warriors. Malenti: These mutants gain a +4 bonus to Dexterity and Charisma, Deceitful and Skill Focus (Bluff) as bonus feats, and command as a spell-like ability (representing increased telepathic influence over aquatic creatures). Additionally, a malenti's natural armor bonus decreases to +2 and the malenti loses its light blindness and natural weapons. The benefits a malenti gains largely offset those it loses, resulting in no change to the creature's CR. Malenti excel as bards, oracles, rogues, and wizards. Other Sahuagin Mutants Although four-armed sahuagin and malenti are the most common sahuagin mutants, they are not the only abnormalities to arise from sahuagin stock. The following mutants are also sometimes found in sahuagin societies. While rarer than other mutants, they too quickly garner the respect and fear of their piscine brethren. Prehistoric Sahuagin: Also known as adacthys, these sahuagin mutants are throwbacks to some even more savage epoch; they are Large, have a +7 natural armor bonus, and can speak with aquatic dinosaurs and megafauna in addition to sharks. They are usually found in the same waters as prehistoric creatures or waters that are somehow strangely affected by the flow of time. Shark-Blooded Sahuagin: These sahuagin mutants have overly large maws filled with rows of sharklike teeth, and the fins and tail of an oversized thresher shark (or other local variety). These abnormalities give them the appearance of monstrous merfolk, a swim speed of 80 feet, and a bite attack that deals 1d6 points of damage. Shark-blooded sahuagin are most typically found in sahuagin communities with unusually high numbers of shark guardians and near shark breeding grounds. Spined Sahuagin: Covered in hundreds of needle-like spines, these sahuagin can raise these piercing protrusions to impale creatures that attempt to grab or consume them. Any creature that grapples a spined sahuagin takes 1d4 points of piercing damage. Additionally, these mutants gain Defensive Combat Training as a bonus feat. Spined sahuagin most commonly appear in depths that also serve as the hunting grounds of sea serpents, thalassic behemoths, or other massive aquatic predators.",
    organization: "solitary, pair, unit (1 plus 3-18 sahuagin), royal guard (2-8 plus 1 sahuagin chieftain of 4th level)",
    languages: "Aquan, Common; speak with sharks",
    spellLikeAbilities: [],
    skills: {
      "Handle Animal": {
        ranks: 2
      },
      Perception: {
        ranks: 2
      },
      Ride: {
        ranks: 2
      },
      Stealth: {
        ranks: 2
      },
      Survival: {
        ranks: 2
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      "blood frenzy": {
        type: "Ex",
        text: "Once per day, a four-armed sahuagin that takes damage in combat can fly into a frenzy in the following round. It gains a +2 bonus to its Constitution and Strength, but takes a -2 penalty to its AC. The frenzy lasts as long as the battle or 1 minute, whichever is shorter. Multiweapon Mastery (Ex) A four-armed sahuagin never takes penalties on attack rolls when fighting with multiple weapons, and treats claws as primary attacks even when also wielding weapons. Speak with Sharks (Su) A four-armed sahuagin can communicate telepathically with sharks to a distance of 150 feet. This communication is limited to simple concepts, such as \"come here,\" \"defend me,\" or \"attack this target."
      }
    }
  },

  "Black Spot": {
    source: "Raiders Of The Fever Sea",
    creatureType: "magical beast",
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Tiny",
    hd: 1,
    hdVal: 10,
    cr: "1/2",
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 20,
      swim: 20
    },
    abilities: {
      str: 1,
      dex: 13,
      con: 10,
      int: "-",
      wis: 10,
      cha: 15
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
      },
      {
        weapon: "Spine",
        name: "Spines",
        specialAbility: "curse",
        damage: "1d2"
      }
    ],
    immunities: [
      "Immune to mind-affecting effects"
    ],
    defense: {
      naturalArmor: 2
    },
    space: "2 1/2 ft.",
    reach: "0 ft.",
    environment: "temperate or warm oceans or coastlines",
    visualDescription: "The spines of this sizable sea urchin bristle, revealing a strange, multipart beak gnashing in their midst.",
    description: "Though not actually intelligent, black spots are terrifyingly adept at locating prey and potential threats, leaping forth from tide pools in great bounds to skewer their victims. However, the true danger of a black spot urchin comes not from its gnashing, star-shaped beak or its needle-pointed spines, but rather from its weird magical nature. Instead of simply poisoning those it punctures, a black spot urchin in fact curses them, inhibiting their ability to swim. How exactly black spots came by such a strange ability and what they gain from drowning their victims days or even years after first encountering them are anyone's guess, but sailors stung by one of the beasts often refuse to go to sea again for fear of their lives. A black spot urchin is typically several feet in diameter, but is mostly made of its long spines and so weighs only a few pounds.",
    organization: "solitary, pair, or cluster (2-5)",
    languages: "none",
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
      Swim: {
        ranks: 0
      }
    },
    special: {
      "leaping charge": {
        type: "Ex",
        text: "A black spot ignores rough terrain and gaps less than 10 feet wide when charging. Additionally, its charges do no provoke attacks of opportunity. Spines (Ex) A black spot's spines can swivel to face any approaching creature. Any creature that attacks a black spot urchin with an unarmed strike or a natural attack is automatically attacked by the black spot's spines as an immediate action. If the spines hit, they can curse the target as well."
      },
      amphibious: {
        universalMonsterAbility: "Amphibious"
      },
      stability: {
        universalMonsterAbility: "Stability"
      },
      curse: {
        type: "Su",
        text: "Instead of poison, the spines of black spots bear what is for some a minor annoyance, but for sailors nearly a death sentence. The save DC is Charisma-based. Spines-injury; save Fort DC 13; onset 1 round; frequency constant; effect target takes a -10 penalty on Swim checks and cannot hold its breath. If forced underwater, the target must save each round (Core Rulebook 445) or drown."
      }
    },
    resistances: [
      {
        damageType: "cold",
        value: 5
      }
    ]
  },

  "Ravenous Urchin Swarm": {
    source: "Raiders Of The Fever Sea",
    creatureType: "vermin",
    subTypes: [
      "aquatic",
      "swarm"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Tiny",
    hd: 4,
    hdVal: 8,
    cr: 2,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Scent"
    ],
    speed: {
      base: 10,
      swim: 20
    },
    abilities: {
      str: 1,
      dex: 13,
      con: 10,
      int: "-",
      wis: 13,
      cha: 9
    },
    feats: [
      {
        name: "Weapon Finesse",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "swarm",
        name: "swarm",
        specialAbility: "poison"
      }
    ],
    immunities: [
      "Immune to mind-affecting effects"
    ],
    defense: {
      naturalArmor: 2
    },
    space: "10 ft.",
    reach: "0 ft.",
    environment: "any coastlines or water",
    visualDescription: "A wave of swift-moving spines rushes forward-a roiling tide of dangerously fast sea urchins.",
    description: "Unlike most urchins, the creatures that make up the infamous urchin swarms are capable of propelling themselves beneath the waves at furious speeds, creating a dangerous threat to pearl divers and other aquatic creatures-often one that's dismissed as a myth until it's far too late.",
    organization: "solitary, pool (2-5), or red tide (11-20)",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 16,
        bonuses: [
          {
            source: "inherent",
            situational: true,
            note: " +8"
          }
        ]
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      jet: {
        universalMonsterAbility: "Jet",
        distance: "70 ft."
      },
      underfoot: {
        type: "Ex",
        text: "Each time a creature moves through a space occupied by a ravenous urchin swarm or starts its movement in such a space, it runs the risk of a ravenous urchin moving underfoot. The creature must succeed at a DC 13 Reflex save or take 1 point of damage plus poison. Additionally, the affected creature's movement speed is reduced by half because its foot is wounded. This movement penalty lasts for 24 hours, until the creature is successfully treated with a DC 15 Heal check, or until it receives at least 1 point of magical healing. A charging or running creature must immediately stop if it steps on a ravenous urchin. Any creature moving at half its speed or slower can pick its way through a tidal pool of ravenous urchins (but not a ravenous urchin swarm) with no trouble. The save DC is Constitution-based."
      },
      amphibious: {
        universalMonsterAbility: "Amphibious"
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Swarm-injury; save Fort DC 12; frequency 1/round for 6 rounds; effect 1d2 Dex and reduce movement speed by 10 feet (to a minimum of 5 feet); cure 1 save. The venom of ravenous urchin swarms stiffens muscles and locks joints into painful configurations. The save DC is Constitution-based.",
        saveDC: 10
      }
    },
    resistances: [
      {
        damageType: "cold",
        value: 5
      }
    ]
  },

  "Great Diadem Urchin": {
    source: "Raiders Of The Fever Sea",
    creatureType: "vermin",
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 6,
    hdVal: 8,
    cr: 5,
    racialFeatures: [
      "All-Around Vision",
      "Low-Light Vision",
      "Scent",
      "Tremorsense 30 ft."
    ],
    speed: {
      base: 10
    },
    abilities: {
      str: 21,
      dex: 3,
      con: 20,
      int: "-",
      wis: 13,
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
      "Immune to mind-affecting effects"
    ],
    defense: {
      naturalArmor: 14
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "temperate or warm oceans or coastlines",
    visualDescription: "Thick spines like the flanges of a royal crown bristle all across the surface of this strangely large golden sea urchin.",
    description: "Enormous and brilliantly colored diadem urchins are often sought after by terrestrial collectors or aquatic creatures seeking to simultaneously decorate and defend their throne rooms, yet such beasts are never truly trainable, and attack anyone who comes close.",
    organization: "solitary, pair, cluster (2-5)",
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
        text: "A great diadem urchin's spines can swivel to face any approaching creature. Any creature that attacks a great diadem urchin with an unarmed strike or a natural attack, or any Large or smaller creature that attacks with a one-handed weapon or light weapon, is automatically attacked by the hunter urchin's spines as an immediate action. If the spines hit, they can poison the target as well."
      },
      amphibious: {
        universalMonsterAbility: "Amphibious"
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        damageType: "fire, acid",
        value: 3
      },
      stability: {
        universalMonsterAbility: "Stability"
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Spines-injury; save Fort DC 18; frequency 1/round for 6 rounds; effect 1d2 Con and stunned for 1 round; cure 1 save. Great diadem urchin venom is shockingly painful and feels acidic at the moment of contact-though the worst of the pain fades after a moment. The save DC is Constitution-based.",
        saveDC: 10
      }
    }
  },

};
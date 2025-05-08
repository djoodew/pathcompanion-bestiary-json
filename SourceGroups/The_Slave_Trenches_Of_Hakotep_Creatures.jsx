
export const The_Slave_Trenches_Of_HakotepCreatures = {
  Hanshepsu: {
    source: "The Slave Trenches Of Hakotep",
    creatureType: "construct",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 15,
    hdVal: 10,
    cr: 10,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 22,
      dex: 18,
      con: "-",
      int: 11,
      wis: 13,
      cha: 5
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Improved Bull Rush",
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
        name: "Vital Strike",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Heavy mace",
        choiceSource: "Weapon Focus"
      },
      {
        name: "Weapon Specialization",
        type: "Combat",
        value: "Heavy mace",
        choiceSource: "Weapon Specialization"
      }
    ],
    attacks: [
      {
        weapon: "Heavy mace",
        enchantments: [
          {
            name: "Enhancement Bonus +1",
            source: "inherent"
          }
        ],
        name: "Heavy mace",
        damage: "1d8"
      }
    ],
    immunities: [
      "construct traits",
      "Immune to magic"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "-"
      },
      naturalArmor: 10
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "warm deserts (Osirion)",
    visualDescription: "This muscular warrior is carefully sculpted from clay and has a large scarab beetle in place of its head.",
    description: "Strangely intelligent constructs, the earliest hanshepsus were created during Osirion's First Age. Hanshepsus were originally built to serve as elite soldiers that never tired, didn't need to be fed, and were impervious to common attacks. Using secrets stolen from Jistkan golem crafters, Osirion's own artificers designed hanshepsus to equalize the battlef ield in their clashes against the Jistka Imperium as the two nations carved up northern Garund. Throughout the conf lict, hanshepsus fought in dozens of battles, each time turning the tide in favor of Osirion's forces as they marched ahead of regular, human soldiers through the hot sands of what is now Thuvia. Hanshepsus stand as tall as an adult human. While they appear lean and muscular, their clay bodies give them additional heft, causing them to weigh in at around 300 pounds. sacrifice of a willing humanoid to provide not only the life force needed to animate the construct's body, but also the creature's intelligence. This allows the hanshepsu to make calculated decisions on the battlefield, and some even commanded humanoid units during battles, implementing clever tactics amid the fray. Though a hanshepsu is intelligent, it lacks anything approaching a personality. Cold and stoic, hanshepsus don't hold conversations that involve anything more complicated than answering questions or issuing orders. Any attempt to engage a hanshepsu further results in utter silence and an inexpressive face. Some hanshepsus even shut down in the middle of their limited interactions with others, crossing their arms and changing to their solar disk head. Despite their lack of personality, some hanshepsus retain traces of their mortal memories, and shout out bizarre non sequiturs in the midst of battle. Crumbling texts from the First Age of Osirion contain reports that, after time, hanshepsus became unpredictable, sometimes turning on their commanders and the other soldiers. This suggested that the process of creating these near-impervious soldiers was flawed in some fashion. Few hanshepsus have been found in the current age, and they are rarely discovered in large numbers. The process of creating hanshepsus was expensive and required a willing sacrif ice, so only the best and brightest warriors were transformed into these constructs. Because of this, modern scholars believe that fewer than 5,000 hanshepsus were created before the practice fell out of favor, and with the march of time, less than 10 percent of that estimation are believed to be still functional. Hanshepsus work best when assembled in a unit with other hanshepsus. They work in concert, taking physical cues from one another and rarely needing to verbally communicate. When not charged with leading or when fighting alongside a unit containing humanoids, hanshepsus barely regard other creatures. When at rest, they simply wait for new commands. In fighting units, hanshepsus were often at the front lines of a battle, and they used their increased strength and superior defenses to drive a wedge into enemy units and scatter their ranks, allowing the humanoid soldiers behind them to easily pick off the dispersed soldiers. Construction To create a hanshepsu, the crafter must sculpt and shape the body from a single block of clay harvested from the banks of the Asp, the Crook, or the Sphinx. The creature's head must be fired in a specially prepared kiln stoked with 1,500 gp worth of rare desert wood. As a final step, a living humanoid must be sacrificed in order to animate a hanshepsu in a process that separates the victim's spirit from his body and infuses his essence (but not his personality) into the clay body. HANSHEPSU CL 13th; Price 46,500 gp Construction Requirements Craft Construct, animate object, beast shape III, limited wish, creator must be caster level 13th; Skill Craft (sculptures); Cost 24,000 gp",
    organization: "solitary or unit (2-20)",
    languages: "Ancient Osiriani",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 6
      },
      Climb: {
        ranks: 4
      },
      Perception: {
        ranks: 10
      },
      "Sense Motive": {
        ranks: 4
      },
      Stealth: {
        ranks: 6
      }
    },
    special: {
      "morphic head": {
        type: "Su",
        text: "As a move action, a hanshepsu can transform its head from one animal form to another. Each animal head grants a hanshepsu different abilities. Cat: The hanshepsu gains a +2 dodge bonus to AC, a +8 racial bonus on Acrobatics checks, and it always counts as having a running start when attempting Acrobatics checks to jump. Cobra: The hanshepsu can spit a stream of venom up to 30 feet as a standard action. This is a ranged touch attack with no range increment. Any opponent hit by this attack succeed at a DC 17 Fortitude save or take 1d4 points of Constitution damage for 2 rounds. This is a poison effect. Crocodile: The hanshepsu's mace grows teeth and deals an additional 1d6 points of piercing damage with each successful attack. Hawk: The hanshepsu gains a +8 racial bonus on Perception checks, and all penalties to Perception based on distance are halved. Hippopotamus: The hanshepsu's damage reduction increases to DR 15/- and it gains a +4 bonus against combat maneuvers and effects that attempt to move it. Ibis: The hanshepsu can use feather fall at will as a spell-like ability and can fly for up to 5 minutes each day. Scarab: The hanshepsu's damage reduction is not subject to the effects of a golembane scarab or any abilities that allow a creature to ignore a construct's damage reduction. Scorpion: The hanshepsu gains a climb speed of 20 feet and its mace gains the speed weapon special ability for 1 minute each day. Set Beast: The hanshepsu's mace deals an additional 1d6 points of negative energy damage with each successful attack. Solar Disk: A hanshepsu can change its head into a single non-animal form: that of a solar disk. In this form, a hanshepsu becomes immobile and heals itself at a rate of 5 hit points per hour. Vulture: Each time a creature is struck by the hanshepsu's mace, it must succeed at a Fortitude save or contract bubonic plague (Pathfinder RPG Core Rulebook 557)."
      },
      "soldier's training": {
        type: "Ex",
        text: "A hanshepsu has Weapon Specialization (heavy mace) despite not being a 4th-level fighter."
      },
      "warrior's mace": {
        type: "Su",
        text: "A hanshepsu's mace is treated as a +1 weapon, and the hanshepsu can deal nonlethal damage with the mace without taking a penalty. The mace is permanently affixed to the hanshepsu's hand during creation so it can't be disarmed; it can, however, be sundered. If the mace is destroyed, a hanshepsu can make 1 slam attack per round that deals 1d8+7 points of damage."
      }
    }
  },

  "Living Sandstorm": {
    source: "The Slave Trenches Of Hakotep",
    creatureType: "outsider",
    subTypes: [
      "earth",
      "elemental",
      "swarm"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Fine",
    hd: 14,
    hdVal: 10,
    cr: 11,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Sandsight",
      "Tremorsense 60 ft."
    ],
    speed: {
      base: 30,
      maneuverability: "Good",
      fly: 60
    },
    abilities: {
      str: 1,
      dex: 22,
      con: 21,
      int: 12,
      wis: 12,
      cha: 13
    },
    feats: [
      {
        name: "Dodge",
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
        name: "Mobility",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Step Up",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "swarm",
        name: "swarm",
        specialAbility: "distraction",
        damage: "6d6"
      }
    ],
    immunities: [
      "Immune to weapon damage"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "-"
      },
      naturalArmor: 9
    },
    space: "5 ft.",
    reach: "0 ft.",
    environment: "any desert (Plane of Earth)",
    visualDescription: "This hulking humanoid figure of packed red sand is no taller than an average human, but it is brawny and exceptionally broad.",
    description: "Notorious for appearing suddenly out of the roiling tempests of the deep desert, living sandstorms are capable of turning oases and dry farmlands into areas of featureless desert in a shockingly short span of time. When angered, they can scour a whole army down to bits of shining metal and bone buried under feet of shifting sand over the course of one terrible night. Some Osiriani scholars claim that living sandstorms are related to the deadly khamsin storms that scour the desert, and while these creatures are related to elementals, they have nothing to do with the formation of those iconic storms. Living sandstorms are most comfortable when sand is free to flow across the earth. They become agitated whenever creatures make an effort to remove or limit sand in an area, shelter an area from the drifting dust, or alter the weather to reduce or prevent sandstorms. However, they are curious creatures and enjoy experiencing new interactions with beings of other shapes, and are willing to parley when they believe doing so may open the door to a novel diversion-or if a creature simply appears easy to intimidate. A living sandstorm in its humanoid shape is about 6 feet tall and weighs 900 pounds. In sandstorm form, it expands its form into a pulsing cloud of streaming, loose sand, which gathers into small clumps before being reabsorbed into the storm. Ecology Living sandstorms are formed from and fed by the unpredictable interaction of raw elemental earth and planar storms or vortices carrying the essence of other planes. These ageless elemental creatures tend to be curious and outgoing when they first discover new places, but are easily frustrated by any kind of restraint. They use their ability to create sand liberally, attempting to pack caves, voids in the Plane of Earth, and other open areas at least half-full of their reddish sand. Because of their origin, they are usually found near gates, portals, and vortices between planes both on the Plane of Earth and on the Material Plane. Habitat & Society Living sandstorms dwell in the rare open caverns on the Plane of Earth. On that plane, they are misfits, feared for their affinities for open spaces and howling winds. When conflicts erupt between the powers of the Elemental Planes, they are sometimes recruited to lead strike teams into other planes, as they are adventurous and enjoy discovering open spaces they can fill with their fine, red sand. They are especially valuable when establishing beachheads on planes that have little in the way of earth, because of their ability to create large amounts of sand in relatively short periods of time. Due to their intrepidness, they readily answer callings to serve summoners so they can visit new places and spread their sand far and wide. If they see an opportunity to do so, they may break free of their calling and explore the wider Material Plane, where they favor desert climes and their nearby regions, and where they are known to contribute to rapid desertification. When marooned on the Material Plane, they are generally restless until they find a way back to the Plane of Earth, but if they know of a route home, they instead explore the nearby area, wandering farther and farther until they lose interest in filling that world with sand and long to move on to a new one.",
    organization: "solitary, pair, or gang (3-8)",
    languages: "Aquan, Auran, Common, Ignan, Terran",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 14
      },
      Fly: {
        ranks: 9
      },
      Intimidate: {
        ranks: 17
      },
      "Knowledge (planes)": {
        ranks: 14
      },
      Linguistics: {
        ranks: 3
      },
      Perception: {
        ranks: 14
      },
      Stealth: {
        ranks: 6,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Survival: {
        ranks: 17
      }
    },
    special: {
      "create sand": {
        type: "Su",
        text: "While in sandstorm form, a living sandstorm can, as a standard action, create 500 cubic feet of fine red sand, filling a 10-foot radius beneath it to a depth of 5 feet. All creatures in the area and adjacent squares must succeed at a DC 22 Reflex save or be blinded for 1d4 rounds. Medium and smaller creatures in the area are buried and must begin holding their breath to avoid drowning in the sand. By attempting a Reflex save against the same DC, a creature can avoid being buried if there is an adjacent space outside the area to which it can move; if the save is successful, the creature is moved into an available adjacent space. As a standard action, each buried creature can dig itself out or be dug out by another with a successful DC 15 Strength check. Invisible creatures in or adjacent to the area when the sand is created are outlined until the dust is removed. The save DC is Constitution-based."
      },
      "sand blast": {
        type: "Ex",
        text: "When in sandstorm form, a living sandstorm can attack with a blast of scouring sand in a 20-foot line. The sand deals 6d6 points of slashing damage and blinds creatures in the area for 1d4 rounds. A successful DC 22 Reflex save halves the damage and negates the blinding. The save DC is Constitution-based."
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "humanoid form or sandstorm form; polymorph"
      }
    }
  },

  Ossumental: {
    source: "The Slave Trenches Of Hakotep",
    creatureType: "undead",
    subTypes: [
      "water"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Large",
    hd: 17,
    hdVal: 8,
    cr: 12,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Mistsight"
    ],
    speed: {
      base: 30,
      swim: 90
    },
    abilities: {
      str: 30,
      dex: 17,
      con: "-",
      int: 9,
      wis: 14,
      cha: 21
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
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
        value: "Slams",
        choiceSource: "Improved Critical"
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
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Slam",
        name: "4 Slams",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "magic"
      },
      naturalArmor: 15
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "warm deserts (Osirion)",
    visualDescription: "This towering collection of sun-bleached bones is assembled in a humanoid form.",
    description: "Ossumentals are found exclusively in the enigmatic location called the Slave Trenches of Hakotep. It is here where the strong elemental forces and the massive loss of mortal life used to excavate the earthworks combined to create these terrifying creatures. Hakotep I drove thousands of slaves to dig the elaborate system of earthworks and deep trenches, and though no one's certain of the site's purpose, some speculate that it is an arcane device constructed to defend against any perceived Shory invasion using their flying cities. Obelisks bound with elemental spirits were erected throughout the system, and as time crept along, some of these spirits escaped their prisons and fused with the remains of the slaves who once toiled in the trenches. Now, ossumentals act as unintended guardians and caretakers of the site. Those exploring this region have reported that some of the ossumentals maintain the Slave Trenches of Hakotep by keeping the deep trenches clear of the ever-encroaching desert sands, though they are only successful for a matter of time before the winds drive the sand again. The creatures aren't always active; at rest, their bones lie scattered under the oppressive Osirian sun, waiting for living creatures to wander by before clattering together to attack. An ossumental is a tricky combatant, attacking with its four arms in melee combat and then using its breath weapon to attack multiple targets that are out of reach. It makes use of its discorporate ability to quickly shift position on the battlefield and get behind its attackers. Fully formed, an ossumental stands approximately 16 feet tall and weighs around 300 pounds.",
    organization: "solitary or gang (2-8)",
    languages: "Ancient Osiriani, Aquan",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 1
      },
      Intimidate: {
        ranks: 8
      },
      "Knowledge (planes)": {
        ranks: 17
      },
      Perception: {
        ranks: 17
      },
      "Sense Motive": {
        ranks: 0
      },
      Stealth: {
        ranks: 8
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "40-ft. cone",
        damage: "usable every 1d4 rounds"
      },
      discorporate: {
        type: "Ex"
      }
    }
  },

  "Elder Sphinx": {
    source: "The Slave Trenches Of Hakotep",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Gargantuan",
    hd: 21,
    hdVal: 10,
    cr: 16,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "True Seeing"
    ],
    speed: {
      base: 40,
      maneuverability: "Poor",
      fly: 60
    },
    abilities: {
      str: 39,
      dex: 12,
      con: 23,
      int: 26,
      wis: 30,
      cha: 25
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Awesome Blow",
        type: "Combat"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
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
        name: "Improved Iron Will",
        type: "General"
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
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to petrification"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "adamantine and magic"
      },
      SR: {
        value: 27
      },
      naturalArmor: 22
    },
    space: "20 ft.",
    reach: "15 ft.",
    environment: "warm deserts",
    visualDescription: "The brooding face of this towering limestone statue of a gynosphinx ref lects a harsh wisdom acquired through untold ages of experience.",
    description: "Older than most modern civilizations, elder sphinxes are the wisest and most venerable of sphinx kind. Though they have long since calcified into creatures of living limestone, these ancient creatures serve eternally as guardians, not of temples or other such terrestrial sites, but of forbidden knowledge and lore, much of which is beyond the understanding of lesser beings. Elder sphinxes are highly protective of the vast wealth of information they possess and strive to defend it from those they deem unworthy. Ecology Sphinxes gradually become more sedentary over their long lifespans as they lose their inclination toward physical activity. The eldest and most knowledgeable sphinxes undergo a transformation that allows them to remain undisturbed as they ponder the knowledge they've obtained. They turn into creatures of living limestone and grow to tremendous proportions, until they resemble ancient and weathered statues. No longer content with the Material Plane, elder sphinxes cast their consciousnesses out into the Astral Plane and beyond in search of the secrets of the universe, as their mortal hunger for nourishment is replaced by a metaphysical hunger for knowledge. Habitat & Society Scholars claim that some elder sphinxes predate even the Age of Darkness and thus possess firsthand knowledge of the world as it once was, and have learned of the contemporary world only through their astral wandering or during the rare times they walk in their corporeal form. Whatever purpose they served in their youth has long since been forgotten or abandoned, leaving them to pursue more esoteric ambitions. These ancient creatures exist solely to seek out new information and to understand the great mysteries of the universe while their stony physical remains sit idle as time passes them by. In time, these elder sphinxes come to be seen as monuments, and sometimes humanoid cultures gather around them and worship them as idols. Infrequently, elder sphinxes can be coaxed to trade ancient knowledge for more current information or for arcane secrets they have yet to divine from the planes. Finding knowledge or information beyond an elder sphinx's experiences, however, is as monumental a task as locating one of their kind. Elder sphinxes have little to no contact with other sphinxes. This only occurs when a younger, less powerful sphinx seeks out one of these magnificent specimens to plead for lost knowledge. When elder sphinxes do come into contact with one another, it is always a meeting of great purpose, typically on a matter of such importance that it requires them to share their ancient wisdom and unfathomable lore.",
    organization: "solitary",
    languages: "Abyssal, Aquan, Ancient Osiriani, Auran, Celestial, Common, Draconic, Giant, Ignan, Infernal, Jistka, Sphinx, Sylvan, Tekritanin, Terran; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "comprehend languages",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "detect magic",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "nondetection",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "read magic",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "true seeing",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "clairaudience/clairvoyance",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "dispel magic, greater",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "hallucinatory terrain",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "locate object",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "remove curse",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "sirocco",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "commune",
        casterLevel: 20,
        timesPerDay: 1
      },
      {
        name: "contact other plane",
        casterLevel: 20,
        timesPerDay: 1
      },
      {
        name: "legend lore",
        casterLevel: 20,
        timesPerDay: 1
      },
      {
        name: "symbol of fear",
        casterLevel: 20,
        limitations: "one of, max duration 1 week",
        timesPerDay: -1,
        timesPerWeek: 1
      },
      {
        name: "symbol of persuasion",
        casterLevel: 20,
        limitations: "one of, max duration 1 week",
        timesPerDay: -1,
        timesPerWeek: 1
      },
      {
        name: "symbol of sleep",
        casterLevel: 20,
        limitations: "one of, max duration 1 week",
        timesPerDay: -1,
        timesPerWeek: 1
      },
      {
        name: "symbol of vulnerability",
        casterLevel: 20,
        limitations: "one of, max duration 1 week",
        timesPerDay: -1,
        timesPerWeek: 1
      },
      {
        name: "symbol of weakness",
        casterLevel: 20,
        limitations: "one of, max duration 1 week",
        timesPerDay: -1,
        timesPerWeek: 1
      }
    ],
    skills: {
      Diplomacy: {
        ranks: 13
      },
      Fly: {
        ranks: 16
      },
      Intimidate: {
        ranks: 8
      },
      "Knowledge (arcana)": {
        ranks: 12
      },
      "Knowledge (dungeoneering)": {
        ranks: 12
      },
      "Knowledge (engineering)": {
        ranks: 7
      },
      "Knowledge (geography)": {
        ranks: 12
      },
      "Knowledge (history)": {
        ranks: 12
      },
      "Knowledge (local)": {
        ranks: 12
      },
      "Knowledge (nature)": {
        ranks: 12
      },
      "Knowledge (nobility)": {
        ranks: 12
      },
      "Knowledge (planes)": {
        ranks: 12
      },
      "Knowledge (religion)": {
        ranks: 12
      },
      Linguistics: {
        ranks: 7
      },
      Perception: {
        ranks: 10
      },
      "Sense Motive": {
        ranks: 10
      },
      Spellcraft: {
        ranks: 20
      },
      "Use Magic Device": {
        ranks: 13
      }
    },
    special: {
      "litany of riddles": {
        type: "Su",
        text: "As a standard action, an elder sphinx can telepathically project a befuddling series of riddles, puzzles, and logic paradoxes at all creatures in a 60-foot cone. Creatures caught in this effect must succeed at a DC 27 Will save or be stunned for 1d4 rounds. Creatures that succeed against this effect glean snippets of lore from this brush with the sphinx's mind, granting them a +5 insight bonus on all Knowledge checks for 1 hour and the ability to attempt Knowledge checks with a DC higher than 10 untrained. Once a creature successfully saves against this ability, it can't be affected by the same elder sphinx's litany of riddles for 24 hours. This is a mind-affecting effect and the save DC is Charisma-based."
      },
      pounce: {
        universalMonsterAbility: "Pounce"
      },
      rake: {
        universalMonsterAbility: "Rake",
        type: "Ex",
        weaponName: 4
      },
      trample: {
        universalMonsterAbility: "Trample",
        damage: "2d6+21",
        saveDC: 10
      },
      enigma: {
        type: "Su",
        text: "Elder sphinxes have removed themselves from the mundane world to contemplate the mysteries of the universe-and beyond. To facilitate this, they possess an uncanny ability to elude detection and discovery by those that could possibly interrupt their meditations. Any creature (other than another sphinx), that leaves line of sight of an elder sphinx for more than 1 hour must succeed at a DC 27 Will save or be unable to recall details of the encounter, as if the sphinx cast modify memory to eliminate all recollection of itself. The exact details of this memory loss are decided by the elder sphinx subconsciously during the encounter and it may eliminate up to an hour of memories. This is a mind-affecting compulsion effect and the save DC is Charisma-based."
      },
      "sphinx monolith": {
        type: "Su",
        text: "An elder sphinx can enter a state of suspended animation and transform its massive body into a stone monument. This transformation takes 1 minute to complete, during which the elder sphinx is immobile. Once it transforms into its monolith form, the elder sphinx's body hardens to stone, granting it hardness 30 and 350 hit points. If the elder sphinx's stony body is reduced to 0 hit points, it is destroyed and the elder sphinx is slain. While transformed, an elder sphinx doesn't need to breathe, eat, drink, or sleep. The elder sphinx is aware of its surroundings and it can use astral projection at will when in this form. Anytime an elder sphinx's body takes damage while using astral projection, its astral form immediately becomes aware that it is in danger and can, as a free action, end the astral projection and begin reverting back to its natural form (though the process still takes 1 minute). When an elder sphinx ends its transformation, it is immediately healed of all hit point damage it may have sustained while transformed. An elder sphinx can remain in its sphinx monolith form indefinitely."
      },
      "enciphered mind": {
        type: "Su",
        text: "The forbidden knowledge elder sphinxes have accumulated is etched on their psyches, and it causes great harm to those who attempt to make psychic contact. Any creature attempting to contact an elder sphinx's mind or read its thoughts with a divination spell or similar ability must succeed at a DC 27 Will save or be overwhelmed by the chaos and vast scope of the knowledge within. Those who fail are affected by feeblemind. An elder sphinx can willingly suppress this ability at will as a free action. This is a mind-affecting effect, and the save DC is Charisma-based."
      }
    }
  },

};
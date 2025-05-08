
export const The_Worldwound_IncursionCreatures = {
  Ulkreth: {
    source: "The Worldwound Incursion",
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
    hd: 17,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Tremorsense 60 ft."
    ],
    speed: {
      base: 30,
      climb: 20,
      maneuverability: "Clumsy",
      fly: 50
    },
    abilities: {
      str: 30,
      dex: 11,
      con: 26,
      int: 7,
      wis: 14,
      cha: 15
    },
    feats: [
      {
        name: "Charge Through",
        type: "Combat"
      },
      {
        name: "Greater Overrun",
        type: "Combat"
      },
      {
        name: "Greater Sunder",
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
        name: "Improved Sunder",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Sundering Strike",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Slams",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Gore",
        name: "Gore",
        damage: "1d6",
        bonuses: [
          {
            source: "inherent",
            value: "1d6",
            appliesTo: "damageType",
            damageType: "piercing"
          }
        ],
        type: "primary"
      },
      {
        weapon: "Slam",
        name: "4 Slams",
        damage: "1d4",
        bonuses: [
          {
            source: "inherent",
            value: "1d6",
            appliesTo: "damageType",
            damageType: "piercing"
          }
        ],
        type: "primary"
      },
      {
        weapon: "Rock",
        name: "4 Rocks",
        damage: "3d6"
      }
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "cold iron and good"
      },
      naturalArmor: 24
    },
    space: "20 ft.",
    reach: "20 ft.",
    environment: "any (Abyss)",
    visualDescription: "This towering monstrosity is clad in cracked boulders, jagged shards of rock, spars of crooked metal, and shredded steel. Four immense arms end in rocky fists, and bony wings protrude from its back.",
    description: "Ulkreths are among the mightiest servants of the demon lord Xoveron, the Horned Prince of gargoyles and lord of ruination. They exist solely to destroy, carrying out his will of devastation to cities and civilization throughout the planes, tearing down monuments and buildings in the name of their unholy patron. Ulkreths are 25 feet tall and weigh 10 tons. Ecology Ulkreth demons form from the souls of mortals who spread wanton destruction and vandalism, burning and tearing down what others have labored long to build up. Small-scale vandals do not earn damnation for simple graffiti and petty breakage; ulkreths arise from those who devoted their lives to bringing ruin forge their own chain of condemnation with every new act of malicious deconstruction. Some do so by targeting grand works of art, stately monuments, cathedrals, libraries, and historical edifices, destroying not just physical structures but also the artistic and cultural legacy of their own people, or of other cultures living among them. These targets are singled out for defacement as a sign of the vandal's hate. The pinnacle of vandalism, however, is attained by those who not only cause damage to property but also murder via their sabotage-collapsing mines and trapping miners to die choking in the dark; breaching dams and dikes to unleash deadly floodwaters that wreak devastation; or bombing, burning, or otherwise destroying homes, businesses, and other gathering places. Whether done as an anarchic political statement, for revenge upon those who owned the buildings, or for pure psychotic joy at watching the world crumble, these are the blackest-hearted vandals of all. The level of destruction perpetrated by mortals in life is important to their lord Xoveron because while his will is bent on the ruination of every civilization, tearing down the literal and figurative structures that hold society together, he is still only a minor demon lord. His power is insufficient to endow every servant with great abilities. Lesser vandals simply do not rate a major investment of his lordly power, and if made into demons at all, may be consigned to eternity as mere dretches, or as fiendish gargoyles rather than actual demons. It is only those whose acts of destruction are truly heinous that inspire him to transform them into ulkreths. Ulkreth demons are unusual, however, in that they can also be formed not from one soul but from many, especially in the case of gangs that once worked together as mortals in their acts of destruction. These joint-souled ulkreths are, if anything, even more savage and destructive than their fellows, as the different soul fragments bound together struggle for mastery, trying to show their dominance by wreaking greater mayhem than their rivals. Ulkreths do not need to eat or drink, but they enjoy chewing and swallowing powdered stone and shattered glass, twisted metal and splintered wood. They consume the detritus of their destruction as a ritual of satisfaction after their rampages. Some say they gain sustenance from these shattered remains and claim that if ulkreths are prevented from destroying for too long, they can actually waste away and die of starvation, though planar scholars know that outsiders don't need to eat to live. Ulkreths cannot reproduce biologically and are propagated only by the transformation of new souls into ulkreths. Habitat & Society Most ulkreths inhabit the endless ruins of Ghahazi, the hearth of their master Xoveron. There they tend groves of fiendish treants that wait amidst the ruins, crumbling foundation stones with their defiled roots even as they stand ready to batter and smash at the ulkreths' command. Flights of fiendish gargoyles wheel constantly overhead, making aeries of the shattered spires of the Horned Prince's city and flocking ahead of the ulkreths when they march. Xoveron often barters the service of his ulkreths with other demon lords or their generals, especially in siege situations where demonic teleportation is of no avail and defenses must be breached with naked strength. Ulkreths may be kept back as artillery, but they chafe under efforts to suppress their urges to sunder and smash and have often been known to abandon their orders and wade directly into a fray or smash down gates and walls with their bare fists. On the Material Plane, the cultists of Xoveron and his gargoyle minions stand sentinel against the encroachment of civilization, ready to foil its ambitious reach towards eternity. When his minions report cities growing too great, too lovely, or too proud, Xoveron tempts mortals with a gluttonous hunger for power and a jealous pride and rage toward their fellows that drives them to call forth a ulkreth demon. Mortal gargoyles can sense the presence of one of their master's favored servants and flock to its side to swoop hooting and screeching overhead as the wrecker commences a reign of terror. Of course, ulkreths are notoriously indiscriminate about their destruction, and those summoning them must be very careful not to become casualties of the ulkreth's rampage.",
    organization: "solitary or crew (2-4 ulkreths)",
    languages: "Abyssal, Celestial, Draconic",
    spellLikeAbilities: [
      {
        name: "teleport, greater",
        casterLevel: 15,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: -1
      },
      {
        name: "shatter",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "move earth",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "earthquake",
        casterLevel: 15,
        timesPerDay: 1
      },
      {
        name: "summon",
        casterLevel: 15,
        limitations: "level 5, 1 ulkreth or 1 omox 40%",
        timesPerDay: 1
      }
    ],
    skills: {
      Climb: {
        ranks: 10
      },
      Intimidate: {
        ranks: 20
      },
      "Knowledge (engineering)": {
        ranks: 20
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
      Swim: {
        ranks: 13
      }
    },
    special: {
      "boulder barrage": {
        type: "Ex",
        text: "An ulkreth can hurl up to four rocks as a full-round action or two rocks as a standard action. If rocks are available (as when the ulkreth uses its ground pounder ability to create rubble) it can pick up a single rock as a swift action, two rocks as a move action, or four rocks as a full-round action. If an ulkreth has a rock in each hand, it cannot use its rock catching ability."
      },
      "ground pounder": {
        type: "Ex",
        text: "As a standard action, an ulkreth can strike the ground with its powerful fists, turning the area within a 10-foot radius into dense rubble (Pathfinder RPG Core Rulebook 412). Any creatures in this area at the time must succeed at a DC 26 Reflex save or fall prone. An ulkreth's movement is not slowed by the rubble it creates."
      },
      "punch through": {
        type: "Ex",
        text: "An ulkreth can use a full-attack action to make its gore and slam attacks against the same opponent. The ulkreth then totals the damage from all hits before applying any damage reduction or hardness."
      },
      rend: {
        universalMonsterAbility: "Rend",
        type: "Ex",
        weaponName: 5
      },
      "rock throwing": {
        universalMonsterAbility: "Rock Throwing",
        type: "Ex",
        range: "120 ft."
      },
      trample: {
        universalMonsterAbility: "Trample",
        damage: "3d6+10",
        saveDC: 10
      },
      wrecker: {
        type: "Su",
        text: "An ulkreth's rend special attack deals double damage to objects."
      },
      "rock catching": {
        universalMonsterAbility: "Rock Catching"
      }
    }
  },

  Xoveron: {
    source: "The Worldwound Incursion",
    creatureType: "outsider",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Huge",
    hd: 33,
    hdVal: 10,
    cr: 27,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Detect Good",
      "Detect Law",
      "True Seeing"
    ],
    speed: {
      base: 50,
      maneuverability: "Good",
      fly: 80
    },
    abilities: {
      str: 44,
      dex: 23,
      con: 38,
      int: 24,
      wis: 32,
      cha: 28
    },
    feats: [
      {
        name: "Awesome Blow",
        type: "Combat"
      },
      {
        name: "Bleeding Critical",
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
        name: "Greater Sunder",
        type: "Combat"
      },
      {
        name: "Improved Bull Rush",
        type: "Combat"
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
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Sting",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Lightning Reflexes",
        type: "General"
      },
      {
        name: "Improved Sunder",
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
        value: "Flesh to stone",
        choiceSource: "Quicken Spell-Like Ability"
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
        weapon: "Bite",
        name: "4 Bites",
        damage: "1d6",
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
      "Immune to ability damage and drain, acid, charm and compulsion effects, death effects, electricity, level drain, petrification, poison"
    ],
    defense: {
      DR: {
        value: 20,
        damageType: "cold iron, good, and epic"
      },
      SR: {
        value: 38
      },
      naturalArmor: 15
    },
    space: "15 ft.",
    reach: "15 ft.",
    environment: "any (Ghahazi, Abyss)",
    visualDescription: "This hulking, four-armed, four-headed, sting-tailed gargoyle stands as tall as a house.",
    description: "Xoveron, the Horned Prince, is the demon lord of gargoyles, gluttony, and ruins. It is said that he can look out through the eyes of all stone gargoyles perched on roofs throughout the world, watching and waiting for cities to fall, that he might visit and feed on those left behind. Xoveron himself towers at a height of 25 feet, with a wingspan of just over 50 feet. When the Horned Prince moves, the sound of stone grinding on stone can be heard, as if the demon lord himself were composed not of flesh but of some unholy stone come to demonic life. Xoveron is often accompanied by numerous vrolikai and ulkreth demons (see page 82). Gargoyles of tremendous size often serve at the Horned Prince's whim, as do monsters with a reputation for hunger and gluttony, such as purple worms or man-eating animals. His realm on the Abyss is an immense, ruined city called Ghahazi, said to have been constructed over the eons by the Horned Prince, who plucked decaying districts and crumbling structures from dead cities across countless worlds. Xoveron's Cult Xoveron is traditionally worshiped by gargoyles, although as the Age of Lost Omens has drawn on, his worship among humanoids has been increasing steadily, particularly among bandits, brigands, gluttons, and those who dwell in blasted, apocalyptic regions such as the Worldwound and the Sodden Lands. In such regions, the landscapes of ruined cities and devastated skylines appeal to those who worship the Horned Prince; his cultists raise temples to their demonic patron there in caverns, on ruined rooftops, or within the skeletal frames of partially collapsed cathedrals to gods whose faith and worship alike have moved on. Defenestration is far and away the favored method of sacrifice for his cult. In addition to gargoyles, the cult is particularly fond of and even subservient to the nabasu demons. Often, a cult of Xoveron seeks out a newly \"born\" nabasu and offers itself to the demon. Usually this means the demon takes a few of the cultists to feed on and demands the survivors seek out more victims on a regular basis, but in some cases the ravenous newborn nabasu simply consumes the entire cult. To the fanatic of Xoveron, though, such a fate is worth dying for. Xoveron's unholy symbol is a five-horned gray gargoyle skull that's missing its lower jaw. His favored weapon is the ranseur. He grants access to the domains of Chaos, Earth, Evil, and Strength, and to the subdomains of Caves, Demon, Entropy, and Ferocity. Entropy is a subdomain of Chaos, and is detailed on page 15 of Pathfinder Player Companion: Blood of Fiends.",
    organization: "solitary (unique)",
    languages: "Abyssal, Celestial, Common, Draconic, Terran; telepathy 300 ft.",
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
        name: "flesh to stone",
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
        name: "shapechange",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "stone shape",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "telekinesis",
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
        name: "earthquake",
        casterLevel: 27,
        timesPerDay: 3
      },
      {
        name: "flesh to stone",
        casterLevel: 27,
        limitations: "Metamagic: Quicken ",
        timesPerDay: 3
      },
      {
        name: "reverse gravity",
        casterLevel: 27,
        timesPerDay: 3
      },
      {
        name: "symbol of weakness",
        casterLevel: 27,
        timesPerDay: 3
      },
      {
        name: "implosion",
        casterLevel: 27,
        timesPerDay: 1
      },
      {
        name: "imprisonment",
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
      "Disable Device": {
        ranks: 36
      },
      Fly: {
        ranks: 36
      },
      Intimidate: {
        ranks: 36
      },
      "Knowledge (arcana)": {
        ranks: 33
      },
      "Knowledge (religion)": {
        ranks: 33
      },
      "Knowledge (engineering)": {
        ranks: 36
      },
      "Knowledge (planes)": {
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
      "devastating blow": {
        type: "Su",
        text: "As a standard action, Xoveron can bring all four of his claws to bear upon a single target. It this attack hits, he deals 8d8+68 points of bludgeoning damage. If the target is a creature, it must make a successful DC 43 Fortitude save or be knocked prone and staggered for 1d4 rounds. If the target is an object, the attack ignores all hardness possessed by the object. The save DC is Strength-based."
      },
      feed: {
        type: "Su",
        text: "Xoveron can consume the corpse of a Large or smaller creature that has been dead no longer than a day as a full-round action. Doing so destroys the creature's body and leaves its gear scattered on the ground. All armor and gear worn in the body slot must make a successful DC 43 Fortitude save to avoid becoming broken by this swift and violent consumption. When Xoveron feeds on a creature, he immediately learns all of that creature's memories and knowledge. In addition, he gains the effects of a heal spell and a haste spell (both at CL 27th). The save DC is Strength-based."
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Sting-injury; save Fort DC 40; frequency 1/round for 6 rounds; effect 1d6 Dexterity drain; cure 3 consecutive saves. If a creature's Dexterity is drained to 0, the creature is immediately petrified. The save DC is Constitution-based.",
        saveDC: 10
      },
      rend: {
        universalMonsterAbility: "Rend",
        type: "Ex",
        weaponName: 5
      },
      roar: {
        type: "Su",
        text: "Xoveron can unleash a devastating roar as a standard action once per hour. When he roars, all creatures and unattended objects within 60 feet take 30d10 points of sonic damage and become stunned for 1d6 rounds. Xoveron does not take this damage, and he can exclude any number of creatures or objects from this effect as he wills. A successful DC 40 Reflex save halves the damage and negates the stun effect. The save DC is Constitution-based."
      },
      "shatter petrification": {
        type: "Su",
        text: "Xoveron can strike a petrified creature with any one of his natural weapon attacks to cause it to shatter. The petrified creature can resist this with a successful DC 43 Fortitude save. If the creature fails to resist, the blow smashes it apart into an explosion of razor sharp stone fragments. Any creature within 10 feet of a shattering petrified creature takes 10d6 points of piercing and slashing damage from these flying fragments of once-living flesh (Reflex DC 43 half). Xoveron is never damaged by these flying shards of stone. The save DC is Strength-based."
      },
      shockwave: {
        type: "Su",
        text: "When Xoveron makes a charge attack while flying and lands at the end of the charge, the force of his landing creates a powerful shockwave. All creatures standing on the ground within 30 feet of Xoveron when he lands at the end of a charge attack must make a successful DC 40 Reflex save to avoid being knocked prone by the force of the impact. The save DC is Constitution-based."
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        damageType: "mythic or deific",
        value: 30
      },
      "abyssal resurrection": {
        type: "Ex"
      },
      "freedom of movement": {
        type: "Ex"
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "120 ft."
      }
    },
    resistances: [
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

  Herne: {
    source: "The Worldwound Incursion",
    creatureType: "monstrous humanoid",
    subTypes: [],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Medium",
    hd: 8,
    hdVal: 10,
    cr: 6,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 18,
      dex: 17,
      con: 16,
      int: 11,
      wis: 16,
      cha: 15
    },
    feats: [
      {
        name: "Deadly Aim",
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
        name: "Weapon Focus",
        type: "Combat",
        value: "Composite longbow",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Sickle",
        name: "Sickle",
        damage: "1d6"
      },
      {
        weapon: "Gore",
        name: "Gore",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Composite longbow",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "Composite longbow",
        damage: "1d8",
        strBonus: 4
      }
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "magic"
      },
      naturalArmor: 4
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "temperate forests",
    visualDescription: "Seemingly one with the forest, this tall man is dressed in the browns and greens of a woodsman and sports a pair of stag's antlers upon his brow.",
    description: "For nearly a century, the Estrovian Forest has been haunted by stag-horned woodsfolk known as hernes. From Egede to Lackthroat, stories are told of these mysterious beings. Some believe them to be the ghosts of hunters betrayed; others say they are fey spirits who guard the woods; and still other believe them to be fiends summoned by worshipers of the Old Faith. While none of these stories are true, they all contain a kernel of truth. Hernes superficially resemble the humans from whom they descend, save for the many-pointed antlers which project from their brows. Though they are creatures of flesh and blood, hernes are infused with the spirit of the wild hunt. For the most part, hernes live as humble woodsfolk, reaping the bounty of the forest by their own hands. Yet they are also protectors of the forest, hunting those who abuse it or dare to claim ownership of its reaches. When hernes' anger is roused, they become the avenging spirits the stories make them out to be. Hernes tend to be tall and lean. Males stand 6 feet tall or taller-with their antlers adding another foot or so- and weigh around 190 pounds. Female hernes are slightly shorter and lighter, and their antlers are smaller, with fewer points. Ecology The race of hernes has existed for less than 90 years. The first of their kind was Herne Vilhaur, a crusader from Andoran. Wounded by a stag and left for dead by his erstwhile companions, Herne was taken by the druids of the Estrovian Forest. They promised to mend his mortal wounds with their ancient magic, and in a way they did. They hanged him from a mighty oak, and placed on his brow the antlers of the sacred stag that Herne had killed. Then they called down the \"curse of the winterthorn\" upon Herne, restoring his vitality but tying him forever to the spirits of the forest. The druids intended to use the transformed Herne as an instrument of vengeance against their enemies. Instead, he turned upon them. Stripped of his humanity, the reborn Herne thought only of vengeance against the allies who had abandoned him and the druids who had made him a monster. Unable or unwilling to leave the forest, he claimed it as his domain. He haunted it till the end of his days, hunting both animals and humanoids who dared to enter the woods. Herne did not kill all he chased; some he allowed to join his band. Recreating the ritual that transformed him, Herne called antlers from the heads of his new companions, thereby passing the curse of the winterthorn on to them. Even after the original Herne's passing, his progeny continued his legacy, even taking his name for their race. Hernes breed true, and most of those who now live were born with the curse rather than having it placed upon them. The hernes live off the bounty of the forest and protect it from those they deem unworthy of its gifts. Save for superficial details, the ritual by which a human can be turned into a herne appears to have been lost with the death of Herne himself. Yet whenever followers of the Old Faith or notorious bandits disappear, rumor quickly spreads that they have not died, but been brought into the fold of Herne's band. Habitat & Society Hernes are relatively few in number considering the vastness of the Estrovian Forest. Though quite capable of living alone for long stretches of time, hernes are not antisocial, and they meet regularly with others of their kind to pass along news and trade crafted goods. They stay together in groups only with a purpose, however, whether it's to raise a family or to hunt a great beast. The largest population of hernes can be found near the tree known as Herne's Oak-the tree from which Vilhaur was hanged, and under which his body is buried (along with, according to legend, a trove of funerary offerings). Like the druids before them, hernes are followers of the old ways, both in practical matters and in spirituality. As hunter-gatherers, hernes raise no crops, and have domesticated only animals useful for hunting-dogs, horses, and owls. Though they thrill at the chase, hernes never take more than they need. They build few structures. Most live in hidden caves that run beneath the Estrovian Forest. Hernes are most active at night; people living on the edge of the Estrovian Forest often attribute strange noises from the woods to the hernes' midnight hunts. The hernes practice an ancient form of druidism known as the Green Faith. This religion was once the dominant religion of the northern reaches of Avistan. Over the centuries, however, it has been replaced by the worship of the gods of the Inner Sea region. The arrival of the crusaders, many of whom worship their own regional deities, has only accelerated the decline of the old ways. The hernes thus consider themselves protectors not just of the forest, but also of the spirits which reside there. Hernes value self-sufficiency, and reject most useless hierarchies. They especially despise those who claim rulership by noble blood. This hatred is reinforced by tales of the druids' persecution by Mendevian rulers, and of the duplicity of the original Herne's so-called noble allies. While common folk may be allowed to hunt and gather from the edges of the forest, hernes are quick to turn the tables on the extravagant hunts hosted by the Mendevian elite and their crusader allies. In a few instances, hernes have even given advice and aid to brave outlaws in their fights against corrupt nobles. Hernes take full advantage of their supernatural reputation when interacting with other humanoids- they know threats are more menacing when issued from the mouth of a deathless servant of nature. Though hernes are not fey creatures and not deathless, most humanoids can't deny the creatures' supernatural nature. Though many hernes remain cold to other humanoids, some invite the dispossessed to join their bands. Those who accept the herne's offer cannot return to the life they once knew. To the superstitious folk of Mendev, swearing allegiance to a herne is tantamount to signing a deal with a devil; such folk are forever beyond the pale. As warriors have returned to their homelands from the Mendevian Crusades, they have brought with them many stories, including that of Herne Vilhaur and his accursed progeny. Reported sightings of hernes in forests far south of Mendev are easy to dismiss as the imaginings of those who have fallen for these fanciful tales, yet some who know of the hernes suspect they may be expanding their territory.",
    organization: "solitary, pair, or band (3-6)",
    languages: "Common, Sylvan; speak with animals",
    otherGear: "mwk composite longbow",
    spellLikeAbilities: [
      {
        name: "speak with animals",
        casterLevel: 8,
        timesPerDay: -1
      },
      {
        name: "faerie fire",
        casterLevel: 8,
        timesPerDay: 3
      },
      {
        name: "longstrider",
        casterLevel: 8,
        timesPerDay: 3
      },
      {
        name: "freedom of movement",
        casterLevel: 8,
        timesPerDay: 1
      }
    ],
    skills: {
      "Handle Animal": {
        ranks: 6
      },
      Intimidate: {
        ranks: 7
      },
      "Knowledge (geography)": {
        ranks: 4,
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
            value: 2
          }
        ]
      },
      Ride: {
        ranks: 3
      },
      Stealth: {
        ranks: 4,
        bonuses: [
          {
            source: "inherent",
            value: 2
          }
        ]
      },
      Survival: {
        ranks: 4,
        bonuses: [
          {
            source: "inherent",
            value: 2
          }
        ]
      }
    },
    special: {
      "powerful charge": {
        universalMonsterAbility: "Powerful Charge",
        type: "Ex",
        weaponName: 6
      },
      "favored terrain": {
        type: "Ex",
        text: "A herne gains a +2 bonus on initiative checks and Knowledge (geography), Perception, Stealth, and Survival skill checks when it is in forest terrain. A herne traveling through forest terrain normally leaves no trail and cannot be tracked (though he can leave a trail if he so chooses).",
        preText: "forest +2"
      },
      "martial training": {
        type: "Ex",
        text: "A herne is proficient with all simple and martial weapons and with light armor, medium armor, and shields (except tower shields). Swift Tracker (Ex) A herne can move at its normal speed while using Survival to follow tracks without taking the normal -5 penalty. A herne takes only a -10 penalty (instead of the normal -20) when moving up to twice its normal speed while tracking."
      },
      "swift tracking Other": {
        type: "Ex"
      },
      "defy the gods": {
        type: "Su",
        text: "Hernes gain a +2 bonus on saving throws against divine spells and the spell-like and supernatural abilities of divine spellcasters and outsiders summoned or called by a divine spellcaster. Favored Terrain (Ex) A herne gains a +2 bonus on initiative checks and Knowledge (geography), Perception, Stealth, and Survival skill checks when it is in forest terrain. A herne traveling through forest terrain normally leaves no trail and cannot be tracked (though he can leave a trail if he so chooses)."
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

  "Sin Seeker": {
    legs: 0,
    arms: 2,
    source: "The Worldwound Incursion",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Tiny",
    hd: 3,
    hdVal: 10,
    cr: 2,
    racialFeatures: [
      "Blindsight 50 ft.",
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 20,
      maneuverability: "Average",
      fly: 50
    },
    abilities: {
      str: 7,
      dex: 15,
      con: 10,
      int: 12,
      wis: 15,
      cha: 8
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Sense Motive",
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
    immunities: [
      "Immune to gaze attacks, visual effects and illusions, attacks that rely on sight"
    ],
    defense: {},
    space: "2-1/2 ft.",
    reach: "0 ft.",
    environment: "any urban",
    visualDescription: "This strange flying creature is the size of a house cat and has tender pink skin and the stubbed features of a pig. Its porcine face is eyeless and its nose never stops sniffing at the air.",
    description: "Believed to have been bred centuries ago by zealous priests and inquisitors, sin seekers are living creatures with a supernatural ability to detect the scent of varying degrees of morality. Originally small forest swine known for their acute senses of smell, these unfortunate creatures were subjected to a magical mutation similar in practice to fleshwarping. The priests' goal was to use these new creations to sniff out the supporters of rival faiths, identifying them by their hidden sins. In the centuries following their initial creation, various sects throughout Golarion maintained small sin seeker breeding programs. Many of these were aimed at culling impious members from the ranks of the clergy, though many evil sects used sin seekers as torture and interrogation aids. Today, small populations of sin seekers still survive in monasteries throughout Golarion, and adventurers of all alignments continue to keep them as familiars. Sin seekers are usually about 12 to 18 inches long, with a 2-foot wingspan. They weigh between 3 and 5 pounds. Ecology Centuries of selective breeding have improved the sin seekers' magical abilities, granting them the ability to sense other creatures' motives and alignments. They are capable of instantly sensing whether a creature is good or evil, and they also have a knack for tracking creatures by their auras. Once in close contact with a creature, sin seekers have a host of tools for discerning whether that creature is lying or manipulating information. In addition to the aura of honesty that surrounds them, each seeker has a small arsenal of spell-like abilities that help it glean the truth from weak-willed creatures. Though graced with an above-average intelligence, sin seekers are poor at handling logistics and practicalities. They make excellent judges of character, and easily pick up on subtle social cues that could indicate dishonesty. While sin seekers are able to draw distinctions between various motives, they have no inherent alignment, and don't place moral judgments on the information they gather. Like bloodhounds sniffing for a trail, sin seekers happily delve for information without regard for what it means. This moral ambivalence makes them equally useful for benevolent or malicious purposes. Sin seekers lack any natural instincts and rely entirely on reciprocal relationships with larger creatures for protection and sustenance. Sin seekers are omnivores who can survive on almost any kind of food, though they are healthiest when fed a vegetable-heavy diet. They can eat anything, but they're poor at regulating their own nutrition-if left to their own devices, sin seekers gorge themselves to the point of nausea, especially when offered rich, fatty foods. While they acclimate quickly to new cultures and eating habits, they are susceptible to unfamiliar diseases and poisons. Though sin seekers can be found throughout Golarion, they are best suited for the moderate climates of the Inner Sea region, northern Casmaron, and coastal Tian Xia. While their small frames are well padded by a layer of fat, they are mostly hairless and lack sufficient body mass to survive frigid temperatures for long. They fare no better in extreme heat, as they easily become dehydrated and are vulnerable to sunburn. Luckily, their susceptibility to the elements is counterbalanced by their suitability for indoor living. Despite their porcine aspect, they live cleanly, and can easily be trained to use lavatories. They have an inherent respect for personal space and are happiest when provided with a small nesting area to call their own. Sin seekers are quiet living companions, except during mating season, during which time they utter grotesque, mewling cries. In all, sin seekers are finicky creatures who require more upkeep than most animals, though their unique skill set makes them worth the extra effort. Habitat & Society Sin seekers are wholly domestic creatures incapable of surviving long in the wild. Like any domestic animal, sin seekers are acclimated to humanoid contact, and integrate well into humanoid cultures. Though slightly repulsive in appearance, they are affectionate creatures with good social skills. Unfortunately, their inability to properly defend themselves and inability to regulate their eating make them high-maintenance travel companions, especially when contrasted with self-sufficient familiars like cats, monkeys, and rodents. Sin seekers are easy prey, and their sightlessness makes them especially vulnerable to quick predators such as hawks, wolves, and foxes. Sin seeker familiars require constant guardianship and physical protection. The difficulty of keeping such delicate creatures alive and healthy has often proven worth the trouble for religious sects throughout Golarion. While each sect breeds its sin seekers with different magical abilities, they all use the creatures as lie detectors and moral litmus tests. Clergy from good-aligned sects, like those that worship Iomedae or Sarenrae, often use sin seekers as penitential aids. These sects see sin seekers as living reminders of the priests' shortcomings and often use them to witness ritual oaths. Evil sects, like those that worship Norgorber or Asmodeus, often use sin seekers as interrogation and inquisitional instruments. Such sects combine the use of sin seekers with traditional torture techniques to persecute nonbelievers or to weed out seditious forces within their ranks. Once trained, sin seekers make excellent familiars, and form strong bonds with their keepers. They are both affectionate and loyal, and quickly adopt their keepers' personalities. Their high intelligence and lie-detecting abilities make them favored familiars of detectives, interrogators, and negotiators. Sin seekers' ability to track creatures by following their auras make them popular among rangers, paladins, and inquisitors who specialize in tracking evil creatures. Unfortunately, while sin seekers are incredibly useful, their auras of honesty and repulsive appearances can sometimes be a hindrance to adventuring parties. Charismatic rogues and bards find the creatures both off-putting and inconvenient. Any character of 5th level or higher with the Improved Familiar feat may take a sin seeker as a familiar. Variant Sin Seekers While the description above represents the most common variant of sin seekers, some sects breed the creatures with abilities that more closely align with their religious aims. Sin seekers from good-aligned temples often have the ability to cast protection from evil instead of confess. Congregations that revile the undead sometimes breed their seekers to cast detect undead instead of zone of truth, or speak with dead instead of comprehend languages. Evil sects, meanwhile, sometimes breed into their sin seekers the ability to cast interrogation instead of seek thoughts, or touch of idiocy instead of comprehend languages.",
    organization: "solitary",
    languages: "Common; telepathy 30 ft.",
    spellLikeAbilities: [
      {
        name: "comprehend languages",
        casterLevel: 3,
        timesPerDay: -1
      },
      {
        name: "confess",
        casterLevel: 3,
        timesPerDay: 3
      },
      {
        name: "zone of truth",
        casterLevel: 3,
        timesPerDay: 3
      },
      {
        name: "follow aura",
        casterLevel: 3,
        timesPerDay: 1
      },
      {
        name: "seek thoughts",
        casterLevel: 3,
        timesPerDay: 1
      }
    ],
    skills: {
      Fly: {
        ranks: 1
      },
      Perception: {
        ranks: 2
      },
      "Sense Motive": {
        ranks: 3
      },
      Survival: {
        ranks: 3
      }
    },
    special: {
      "detect alignment": {
        type: "Sp",
        text: "At will, a sin seeker can use detect chaos, detect evil, detect good, or detect law. Only one of these can be active at any given time."
      },
      honesty: {
        type: "Su",
        text: "Sin seekers radiate an aura of honesty out to 10 feet. All creatures in the area take a -2 penalty on Bluff, Sleight of Hand, and Escape Artist checks. Creatures that succeed at a DC 13 Will save resist the effects of this aura, though they must attempt a new saving throw each time they use one of the listed skills in the area. This is a mind-affecting effect and the save DC is Wisdom-based.",
        preText: "10 ft., DC 13"
      }
    }
  },

};
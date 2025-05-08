
export const Numeria_Land_Of_Fallen_StarsCreatures = {
  Bloodbrush: {
    source: "Numeria Land Of Fallen Stars",
    creatureType: "plant",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Small",
    hd: 4,
    hdVal: 8,
    cr: 2,
    racialFeatures: [
      "All-Around Vision",
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 14,
      dex: 11,
      con: 15,
      int: "-",
      wis: 10,
      cha: 1
    },
    feats: [],
    attacks: [
      {
        weapon: "Slam",
        name: "Slam",
        specialAbility: "grab",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "slashing"
      },
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "cold or temperate plains",
    visualDescription: "This dried-out clump of thorny brush has torn free of its roots and seems to move not with the wind, but of its own volition.",
    description: "Though they resemble humble tumbleweed, bloodbrushes are animate and aggressive. Movement draws its attention, especially when accompanied by warmth and moisture. When it strikes prey, it latches on and delivers a sedating toxin through its barbs. Victims that succumb to this poison experience vivid hallucinations as the bloodbrush finishes them off. As much a drug as a poison, refined bloodbrush toxin commands a high price in the right circles. A single bloodbrush provides sufficient poison to refine 1d4 doses of bloodbrush extract (see page 23), and counts as the raw materials for the process. Bloodbrush thorns deposit seeds, though the seeds germinate only in dead flesh. A single corpse sprouts 2d4 seedlings. After 3 months of growth, the now-mature and animate bloodbrush breaks free of its roots and rolls off in search of prey. Prior to this, an immature bloodbrush is neither animate nor toxic. A bloodbrush lives for up to 6 months after tearing free, and can survive 2 weeks between feedings. Despite its size, a mature bloodbrush plant weighs 5 pounds at most. Kellids harvest the thorns of immature bloodbrushes. They grind the dried thorns, and brew the resulting powder as a tea with mild euphoric and fever-reducing properties. Harvesting the thorns and preparing the tea requires a successful DC 15 Survival check. Drinking this tea grants a +1 circumstance bonus on saves against an ongoing disease for 24 hours. Particularly ingenious tribes, and even some members of the Technic League, cultivate bloodbrush in the shallowly buried corpses of their fallen enemies. When a farmed bloodbrush is near maturity, the grower places a sturdy wicker cage about it to prevent it from escaping. Such cages can be completely sealed and carried into battle or covertly placed in a rival settlement. When released, the captive bloodbrush tends to attack the nearest target, so using one as a weapon presents significant risks to the one who releases it.",
    organization: "solitary, pair, or field (3-12)",
    spellLikeAbilities: [],
    skills: {},
    special: {
      grab: {
        universalMonsterAbility: "Grab"
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Barbs-injury; save Fort DC 14; frequency 1/round for 4 rounds; effect dazed; cure 1 save; no effect on creatures immune to mind-affecting effects.",
        saveDC: 10
      },
      "powerful charge": {
        universalMonsterAbility: "Powerful Charge",
        type: "Ex",
        weaponName: "b"
      },
      barbs: {
        type: "Ex",
        text: "A creature that strikes a bloodbrush with a melee weapon, an unarmed strike, or a natural weapon takes 1d4 points of piercing damage and 1 point of bleed damage, and is exposed to the bloodbrush's poison. Any creature that attempts a combat maneuver or Escape Artist check against a bloodbrush also takes this barb damage, regardless of success. Melee weapons with reach do not endanger an attacker in this way. A grappled creature takes barb damage at the start of the bloodbrush's turn."
      },
      flammable: {
        type: "Ex",
        text: "If a bloodbrush takes fire damage, it catches fire (Pathfinder RPG Core Rulebook 444), but does not take damage for catching fire in the round it ignites. It takes 1d6 points of fire damage at the start of each turn unless it succeeds at a DC 15 Reflex save to extinguish the flame. A burning bloodbrush inflicts 1d6 points of fire damage with its barbs and slam attacks and to any creature that strikes it with a melee attack as its barbs ability."
      }
    },
    resistances: [
      "vulnerable to fire"
    ]
  },

  "Capacitor Ooze": {
    source: "Numeria Land Of Fallen Stars",
    creatureType: "ooze",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 17,
    hdVal: 8,
    cr: 11,
    racialFeatures: [
      "Blindsight 120 ft."
    ],
    speed: {
      base: 10,
      climb: 10
    },
    abilities: {
      str: 22,
      dex: 1,
      con: 24,
      int: "-",
      wis: 1,
      cha: 1
    },
    feats: [],
    attacks: [
      {
        weapon: "Slam",
        name: "Slam",
        specialAbility: "neurophagic jolt",
        damage: "1d4",
        bonuses: [
          {
            source: "inherent",
            value: "4d6",
            appliesTo: "damageType",
            damageType: "electricity"
          }
        ],
        type: "primary"
      }
    ],
    immunities: [
      "Immune to electricity"
    ],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "cold deserts or plains",
    visualDescription: "Electricity crackles and arcs from this undulating mass of orange slime.",
    description: "Created by technologists seeking to devise an organic battery, capacitor oozes escaped captivity and now infest the hinterlands of Numeria. They find water dangerous and humidity painful, so they gravitate toward arid climes with stable weather. Capacitor oozes instinctively seek out sources of electricity, consuming them like other creatures would food. Maintaining vigor and growth requires regular consumption of organic material as well. A capacitor ooze that's denied power or food begins to starve. Capacitor oozes grow without bound, splitting only from damage or misfortune. Capacitor oozes that encounter others of their kind often merge if left undisturbed, a process that takes 1d4 hours and may result in a giant or advanced ooze. Capacitor oozes that aren't inclined to merge disperse, as they find disharmonious electrical auras intolerable.",
    organization: "solitary",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 0
      }
    },
    special: {
      "neurophagic jolt": {
        type: "Ex",
        text: "When a capacitor ooze deals electricity damage to a target with its slam attack, the jolt to the target's neurological system stuns the creature for 1 round (Fortitude DC 25 negates). A second neurophagic jolt to a stunned target sets up a destructive resonance in the target's brain. This resonance functions like an affliction with the following statistics: save Will DC 25; frequency 1/round for 6 rounds; effect 1d2 Dexterity and 1d2 Intelligence damage; cure 1 save. Neutralize poison does not cure this affliction, but heal, greater restoration, and any effect that removes insanity does. This is a mind-affecting effect. The save DC is Constitution-based. Osmotic Drain (Ex) A capacitor ooze drains power from nearby electrical sources. Any creatures within 10 feet of a capacitor ooze carrying at least one device that's powered by or generates electricity must succeed at a DC 25 Fortitude save or lose 1 charge from a random electrical device. Singleuse items are depowered entirely; devices with renewable electrical sources are depowered until they can recharge (in the case of a solar-powered device) or have their electrical function suppressed for 1d4 minutes (in the case of a shock weapon). A given power source can be drained only once per minute. For each electrical device affected by the capacitor ooze's osmotic drain, the ooze deals an additional 1d6 points of electricity damage the next time it would deal electricity damage to a target, and its speed increases by 30 feet for 1 round. The save DC is Constitution-based."
      },
      compression: {
        universalMonsterAbility: "Compression"
      },
      electrified: {
        type: "Ex",
        text: "A creature that strikes a capacitor ooze with a natural weapon, unarmed strike, or metal weapon takes 4d6 points of electricity damage. Creatures grappling a capacitor ooze take this damage when initiating the grapple and on each round the grapple is maintained."
      },
      "osmotic drain": {
        type: "Ex",
        text: "A capacitor ooze drains power from nearby electrical sources. Any creatures within 10 feet of a capacitor ooze carrying at least one device that's powered by or generates electricity must succeed at a DC 25 Fortitude save or lose 1 charge from a random electrical device. Singleuse items are depowered entirely; devices with renewable electrical sources are depowered until they can recharge (in the case of a solar-powered device) or have their electrical function suppressed for 1d4 minutes (in the case of a shock weapon). A given power source can be drained only once per minute. For each electrical device affected by the capacitor ooze's osmotic drain, the ooze deals an additional 1d6 points of electricity damage the next time it would deal electricity damage to a target, and its speed increases by 30 feet for 1 round. The save DC is Constitution-based.",
        preText: "10 ft., DC 25"
      }
    }
  },

  "Robot Golem": {
    source: "Numeria Land Of Fallen Stars",
    creatureType: "construct",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 15,
    hdVal: 10,
    cr: 11,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 20
    },
    abilities: {
      str: 26,
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
      naturalArmor: 18
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any (Numeria)",
    visualDescription: "Though corroded and damaged, this bipedal metallic construct moves silently, as though powered by some force other than its own rattling gears.",
    description: "When robots are damaged beyond the abilities of Numerian technologists to repair, salvages sometimes animate their frames via magic rather than science. What results is more of a walking mechanical corpse that lacks the intelligence and vulnerabilities of a true robot. The arcanists of the Technic League often employ these magically animated constructs to combat rogue robots or those under the control of their enemies. Construction A robot golem's body used to be a Large robot, but is now nonfunctional. Any major damage on the intended body must be repaired prior to animation. Robot Golem CL 14th; Price 72,000 gp Construction Requirements Craft Construct, geas/quest, limited wish, make whole, shatter, creator must be caster level 13th; Skill Craft (mechanical) DC 20; Cost 36,000 gp",
    organization: "solitary or gang (2-4)",
    spellLikeAbilities: [],
    skills: {},
    special: {
      "rend construct": {
        type: "Ex",
        text: "This functions as the rend special ability, except the robot golem can rend only other constructs. Shockwave (Ex) A robot golem can release a pulse of electrical energy held within its nonfunctioning batteries as a standard action once every 1d4 rounds. This pulse is a 30-foot-radius spread that deals 8d6 points of electricity damage to all creatures in its area of effect (Reflex DC 19 half). The save DC is Constitution-based and includes a +2 racial bonus.",
        preText: "2 slams, 2d10+12"
      },
      shockwave: {
        type: "Ex",
        text: "A robot golem can release a pulse of electrical energy held within its nonfunctioning batteries as a standard action once every 1d4 rounds. This pulse is a 30-foot-radius spread that deals 8d6 points of electricity damage to all creatures in its area of effect (Reflex DC 19 half). The save DC is Constitution-based and includes a +2 racial bonus.",
        preText: "30-ft.-radius spread, 8d6 electricity, Reflex DC 19 for half, usable every 1d4 rounds"
      }
    }
  },

  "Gray Goo": {
    source: "Numeria Land Of Fallen Stars",
    creatureType: "construct",
    subTypes: [
      "swarm"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Fine",
    hd: 19,
    hdVal: 10,
    cr: 14,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      maneuverability: "Perfect",
      fly: 50
    },
    abilities: {
      str: 1,
      dex: 30,
      con: "-",
      int: 5,
      wis: 10,
      cha: 1
    },
    feats: [
      {
        name: "Ability Focus",
        type: "Monster",
        value: "Distraction",
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
        name: "Improved Lightning Reflexes",
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
        name: "Lightning Stance",
        type: "Combat"
      },
      {
        name: "Mobility",
        type: "Combat"
      },
      {
        name: "Toughness",
        type: "General"
      },
      {
        name: "Wind Stance",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "swarm",
        name: "swarm",
        specialAbility: "dismantle, distraction",
        damage: "6d6"
      }
    ],
    immunities: [
      "construct traits",
      "Immune to weapon damage"
    ],
    defense: {},
    space: "10 ft.",
    reach: "0 ft.",
    environment: "cold plains (Numeria)",
    visualDescription: "Droplets of a silvery gray, slightly grainy goo gleam dully as they hang in the air.",
    description: "Swarms of weaponized nanites-microscopic robots designed to work in large groups to perform varied tasks-roam the Felldales, reducing anything in their path to wisps of dust. Called \"gray goo\" by natives who do not understand the true nature of the creature's components, some swarms were activated as weapons of mass destruction, while others were originally benign swarms that malfunctioned and abandoned their programming. Nanites have limited intelligence and potentially respond to commands. Such controlled swarms often spare the treasure their victims carry. Rumors of virulent clouds of gray goo spread throughout Numeria every few years. The most recent tale speaks of a self-replicating swarm that uses its victims as incubators from which further swarms are born- a harrowing prospect if true.",
    organization: "solitary, pair, or storm (3-12)",
    languages: "Common (can't speak), Hallit (can't speak)",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 0
      },
      Perception: {
        ranks: 13
      },
      Stealth: {
        ranks: 6
      }
    },
    special: {
      dismantle: {
        type: "Ex",
        text: "Creatures damaged by a gray goo must succeed at a DC 19 Reflex save or a random piece of their equipment takes the same amount of damage, determined as though the target rolled a natural 1 on a saving throw, using the rules for items surviving after a saving throw (Pathfinder RPG Core Rulebook 217). In addition, unattended objects in the area of a gray goo take damage if the swarm chooses to harm them. The save DC is Constitution-based."
      },
      infest: {
        type: "Ex",
        text: "As a standard action, a gray goo can infest a Medium or larger creature (Fortitude DC 21 negates), including constructs and undead. The swarm deals double its normal damage to its host each round, but cannot make use of its dismantle ability. If the host is reduced to 0 hit points while infested, it is reduced to dust and destroyed (similar to a disintegrate effect). A gray goo infesting a host can be expelled by any effect that cures disease, with a disease save equal to this ability's DC. The save DC is Constitution-based and includes a +2 racial bonus."
      },
      dispersion: {
        type: "Ex",
        text: "As an immediate action, a gray goo can disperse, spreading itself across an area of up to 30 cubic feet. While dispersed, it deals no damage and cannot use its other special abilities until it reforms. A dispersed gray goo can hide in plain sight (as a ranger in its favored terrain) with a +10 bonus and does not take additional damage from area effects. It takes 2 rounds for a dispersed gray goo to reform."
      }
    }
  },

  "Arachnid Robot": {
    source: "Numeria Land Of Fallen Stars",
    creatureType: "construct",
    subTypes: [
      "robot"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Small",
    hd: 1,
    hdVal: 10,
    cr: "1/2",
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 40,
      climb: 20
    },
    abilities: {
      str: 9,
      dex: 13,
      con: "-",
      int: 10,
      wis: 12,
      cha: 1
    },
    feats: [
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
    immunities: [
      "construct traits"
    ],
    defense: {
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Numeria)",
    visualDescription: "This dog-sized, spiderlike robot has a plasma torch mounted on a stinger-like limb and gripping claws on its forelegs.",
    description: "Ubiquitous pets of Numerian technologists, arachnid robots also serve as sentinels and spies. Arachnid robots come equipped with a plasma welding torch that resembles a scorpion's tail stinger and doubles as a weapon. Under stress, an arachnid robot's plasma core can overload, destroying the robot in a fiery blast. This tendency inspired the practice of using the robots as suicide drones. An arachnid robot is intelligent enough to have a sense of self-preservation, however, and one can be made to undertake such a mission only through trickery. Despite their scorpion-like appearance, arachnid robots' ability to use their claws as an additional pair of legs when climbing or moving quickly has earned the robots the name \"spiderbots\" among Kellid natives. Their small size makes them the most likely robots to be found outside of Numeria, as they are the ones most easily smuggled past watchful Technic League agents.",
    organization: "solitary, pair, or colony (3-12)",
    languages: "Common, Hallit",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 0
      },
      "Disable Device": {
        ranks: 4,
        bonuses: [
          {
            source: "inherent",
            value: 5
          }
        ]
      },
      Perception: {
        ranks: 4
      },
      Stealth: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 5
          }
        ]
      }
    },
    special: {
      explode: {
        type: "Ex",
        text: "If an arachnid robot is destroyed or takes damage while below half its maximum hit points, it must attempt a Fortitude saving throw with a DC equal to the amount of damage taken. If it fails, the robot explodes, dealing 2d4 points of plasma damage to all targets in a 10-foot-radius burst (Reflex DC 10 half). Half the damage dealt by plasma is fire damage, and half is electricity damage. This destroys the robot if it was still animate. The save DC is Dexterity-based. Fragile (Ex) When badly damaged, arachnid robots function poorly. An arachnid robot reduced to fewer than half its maximum hit points is staggered and moves at half speed. Further damage may cause the robot to explode."
      },
      "plasma torch": {
        type: "Ex",
        text: "An arachnid robot can use its arm-mounted plasma torch in two ways. First, it can use the torch to make a ranged touch attack against a target within 15 feet, dealing 1d6 points of plasma damage on a successful hit. Alternatively, the robot can emit a 15-foot cone from its torch, dealing 1d4 points of plasma damage to all targets in the area of effect (Reflex DC 10 half). The robot's plasma torch requires 1 full round to recharge between uses. Half the damage dealt by plasma is fire damage, and half is electricity damage."
      }
    },
    resistances: [
      {
        damageType: "fire",
        value: 5
      },
      "vulnerable to critical hits"
    ]
  },

  "Mannequin Robot": {
    source: "Numeria Land Of Fallen Stars",
    creatureType: "construct",
    subTypes: [
      "robot"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 2,
    hdVal: 10,
    cr: 2,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 15,
      dex: 12,
      con: "-",
      int: 10,
      wis: 11,
      cha: 1
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
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
    immunities: [
      "construct traits"
    ],
    defense: {
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Numeria)",
    visualDescription: "This impassive humanoid has shiny, pale skin and an eerily expressionless face.",
    description: "Designed to labor at tedious or hazardous tasks, mannequin robots were intended to both look and behave like humans. Their designers felt that humans would find the mannequins more comfortable to work next to than conventional robots-but they were mistaken. While the mannequins superficially resembled their makers, their inhuman behavior, subtly wrong appearance, and unnatural movement, as well as the unyielding cold of their synthetic flesh proved disturbing, and the humans they were meant to work alongside reflexively distrusted them. Though many were produced for a variety of tasks, the mannequin line of robot was deemed a failure. The next generation of human-form constructs took the form of a true artificial life form: the android. Mannequins look more or less human, but their jerky, mechanical movement, imperfectly simulated behavior, and artificial construction give them away with any close interaction. Mannequin robots vary in size and shape as much as humans, but weigh at least 200 pounds because of their metallic endoskeletons. Variants The mannequin robot described above represents a typical model, designed for menial labor or basic service. Other models resemble the base model, but have different capabilities. If no CR change is noted, the model has the same CR as a standard mannequin. Specialized mannequins advance by taking class levels, generally in non-spellcasting classes such as fighter, gunslinger, monk, and rogue. Athlete (CR +1): Designed to compete in robotic sporting events, an athlete model has +2 Strength, +2 Dexterity, Fleet in place of Alertness, and a +5 racial bonus on Acrobatics checks. Recreation (CR +1): Designed for entertainment and leisure purposes, a pleasure model has a +4 bonus to Charisma, has Skill Focus (Perform [any]) in place of Alertness, and can scan the minds of creatures within 30 feet (as detect thoughts). Rescue: Designed for rescue and retrieval operations in conditions too dangerous for unprotected humans, a rescue model's resistance to electricity and fire improves to 10. Security (CR +1): Designed for assisting human security forces in dangerous situations, a security model has +2 Dexterity, Improved Initiative in place of Alertness, +1 natural armor, and hardness 5. Security models are proficient with firearms, simple weapons, and light armor. Target: Designed as an active target for weapons practice, a target model has +2 Dexterity, a 10-foot increase to speed, hardness 5, and Dodge in place of Alertness. Reducing a target model below half its maximum hit points causes it to shut down for 10 minutes.",
    organization: "solitary, pair, or band (3-8)",
    languages: "Common, Hallit",
    spellLikeAbilities: [],
    skills: {
      Disguise: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      "Knowledge (local)": {
        ranks: 4
      },
      Perception: {
        ranks: 4
      },
      "Sense Motive": {
        ranks: 4
      }
    },
    special: {
      "false flesh": {
        type: "Ex",
        text: "The synthetic flesh and hair of a mannequin robot give it a +8 bonus on Disguise checks to appear human (but not to impersonate a specific human). Closely inspecting a mannequin or touching its cold, synthetic skin automatically reveals its non-human nature."
      }
    },
    resistances: [
      {
        damageType: "electricity",
        value: 5
      },
      {
        damageType: "fire",
        value: 5
      },
      "vulnerability to electricity"
    ]
  },

  "Scrapyard Robot": {
    source: "Numeria Land Of Fallen Stars",
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
    cr: 3,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 17,
      dex: 8,
      con: "-",
      int: 5,
      wis: 10,
      cha: 1
    },
    feats: [
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Rotary saw",
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
        weapon: "Rotary saw",
        name: "Rotary saw",
        damage: "2d4"
      }
    ],
    immunities: [
      "construct traits"
    ],
    defense: {
      naturalArmor: 5
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any ruin (Numeria)",
    visualDescription: "Frayed wires and broken-off protrusions sprout from mechanical construct', and one of its salvaged arms ends in a spinning blade.",
    description: "Pieced together from broken technology, these constructs lack the balance to stand upright, the motor control to use their hands (if they have any), and the intelligence possessed by advanced robots, but they still retain a halting consciousness and the ability to obey simple commands.",
    organization: "solitary",
    languages: "Common, Hallit",
    spellLikeAbilities: [],
    skills: {
      "Knowledge (engineering)": {
        ranks: 5
      },
      Perception: {
        ranks: 5
      }
    },
    special: {
      repair: {
        type: "Ex",
        text: "A scrapyard robot can use the inactive bodies of other robots to repair damage to itself. Doing so restores 10 hit points and removes one condition imparted by its fall to pieces ability per 8-hour period of uninterrupted work. Eight hours of repair expends all salvageable parts from 1 Medium robot. For each size category a scrapped robot is above Medium, the scrapyard robot can perform another 8 hours of repairs using that robot's parts. For each size category smaller than Medium scrapped robots are, the scrapyard robot requires twice as many robots to complete 8 hours of work."
      },
      staggered: {
        type: "Ex",
        text: "The poor construction of a scrapyard robot allows it to take only a single move or standard action each round. In effect, it always has the staggered condition. A scrapyard robot can move up to its speed and attack in the same round as a charge action."
      },
      hardness: {
        universalMonsterAbility: "Hardness",
        value: 5
      }
    },
    resistances: [
      "vulnerable to critical hits"
    ]
  },

  "Torturer Robot": {
    source: "Numeria Land Of Fallen Stars",
    creatureType: "construct",
    subTypes: [
      "robot"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Small",
    hd: 10,
    hdVal: 10,
    cr: 8,
    racialFeatures: [
      "All-Around Vision",
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      maneuverability: "Perfect",
      fly: 40
    },
    abilities: {
      str: 8,
      dex: 21,
      con: "-",
      int: 10,
      wis: 15,
      cha: 1
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
        name: "Mobility",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      },
      {
        name: "Weapon Finesse",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Rotating blade",
        name: "4 Rotating blades",
        damage: "1d4"
      },
      {
        weapon: "Surgical laser",
        qualities: [
          "touch"
        ],
        name: "4 Surgical lasers",
        specialAbility: "fire",
        damage: "1d8"
      }
    ],
    immunities: [
      "construct traits"
    ],
    defense: {
      naturalArmor: 6
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Numeria)",
    visualDescription: "Spinning blades, long needles, and crystal-tipped rods stud the surface of this hovering metallic sphere.",
    description: "Torturer robots, nicknamed \"murderballs\" by enemies of the Technic League, were built to extract information from prisoners. Murderballs administer pain in a detached fashion, repeating questions over and over while their heuristic programming analyzes the truth and completeness of responses. Their job demands detailed knowledge of human anatomy and the capacity to revive a dying patient, leading some to serve double-duty as field medics and surgeons.",
    organization: "solitary",
    languages: "Common, Hallit",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 0
      },
      Heal: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 15
          }
        ]
      },
      Perception: {
        ranks: 13
      },
      "Sense Motive": {
        ranks: 13
      }
    },
    special: {
      agile: {
        type: "Ex",
        text: "A torturer robot adds its Dexterity modifier to its damage rolls in place of its Strength modifier when using its rotating blades attack. Force Field (Ex) A field of shimmering energy surrounds a torturer robot. Damage dealt to the robot is applied to the force field first. As long as the field is active, the robot is immune to critical hits. The force field has fast healing 8, but once the field's hit points are reduced to 0, the field collapses and does not reactive for 24 hours."
      },
      interrogate: {
        type: "Ex",
        text: "As a standard action, the torturer robot can attempt a Heal check to deal 1d4 points of damage to an ability of its choice possessed by an adjacent, helpless target. A successful Fortitude saving throw with a DC equal to the robot's Heal check result negates this damage."
      },
      nanosurgeon: {
        type: "Ex",
        text: "As a standard action, a torturer robot can inject purpose-programmed nanites into a target as a melee touch attack. The nanites produce one of the following effects or conditions (CL 10th, where applicable): cure serious wounds, lesser restoration, neutralize poison, remove disease, exhaustion, nauseated for 1d4 rounds, or paralyzed (nauseated targets only, for remainder of original duration). If the victim succeeds at a DC 17 Fortitude saving throw, exhaustion is reduced to fatigue, nauseated is reduced to sickened, and other effects are negated. The torturer robot carries 5 doses of nanites, and it constructs replacements at a rate of 1 dose per hour. The save DC is Wisdom-based. Surgical Lasers (Ex) The torturer robot's lasers have a range of 50 feet with no range increment, and threaten a critical hit on a 19 or 20. Lasers pass through transparent creatures and objects without causing harm (including force fields, force effects, and invisible creatures; it can pass through glass, but the glass takes damage), and can strike targets behind them normally. Fog, smoke, and other clouds provide cover in addition to concealment from laser attacks."
      },
      hardness: {
        universalMonsterAbility: "Hardness",
        value: 10
      },
      fire: {
        type: "Ex"
      }
    },
    resistances: [
      "vulnerable to electricity"
    ]
  },

  Targotha: {
    source: "Numeria Land Of Fallen Stars",
    creatureType: "aberration",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Huge",
    hd: 22,
    hdVal: 8,
    cr: 15,
    racialFeatures: [
      "All-Around Vision",
      "Blindsense 120 ft.",
      "Darkvision 60 ft."
    ],
    speed: {
      base: 10,
      swim: 50
    },
    abilities: {
      str: 33,
      dex: 13,
      con: 24,
      int: 2,
      wis: 14,
      cha: 13
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
        name: "Great Fortitude",
        type: "General"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Razor fins",
        choiceSource: "Improved Critical"
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
        name: "Mobility",
        type: "Combat"
      },
      {
        name: "Spring Attack",
        type: "Combat"
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
        type: "primary"
      },
      {
        weapon: "Razor fin",
        name: "2 Razor fins",
        damage: "2d6"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        specialAbility: "bull rush",
        damage: "1d6",
        type: "secondary"
      },
      {
        weapon: "Jolt",
        qualities: [
          "touch"
        ],
        name: "Jolt",
        specialAbility: "stun",
        damage: "12d6"
      }
    ],
    immunities: [
      "Immune to acid, electricity, poison"
    ],
    defense: {
      naturalArmor: 18
    },
    space: "15 ft.",
    reach: "15 ft.",
    environment: "any swamp (tar seeps)",
    visualDescription: "This eyeless, eel-like beast has a menacing mouth and sharp fins running down its long, black-and-orange body.",
    description: "Before the great starship crashed on Golarion, it traveled the stars, collecting all manner of strange specimens. One of the oddest varieties were targothas, which came from a lush planet rich in oil and tar where local fauna evolved to live in that world's tarry seas.",
    organization: "solitary, pair, or pack (3-6)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 11
      },
      Swim: {
        ranks: 11
      }
    },
    special: {
      "volatile breath": {
        type: "Ex",
        text: "A targotha can breathe a cone of flammable gas as a breath weapon. As a swift action, it can ignite the gas with its jolt ability. When ignited, the gas explodes, dealing 15d6 points of fire damage in the area of the cone (Reflex DC 28 half). If not ignited, the gas confuses all creatures in the area of effect that breathe it in before the gas dissipates at the start of the targotha's next turn. This confusion last for 1d4 rounds (Fortitude DC 23 negates). The save DCs are Constitution-based, and the confusion save DC has a -5 racial penalty.",
        preText: "60-ft. cone, 15d6 fire or confusion, Reflex DC 28 half or Fortitude DC 23 negates, usable every 2d4 rounds"
      },
      slippery: {
        type: "Ex",
        text: "A targotha secretes a thick mucus that allows it to move gracefully through viscous fluids like tar and oil. This mucus dissolves away adhesives (such as sovereign glue, tanglefoot bags, and webs) in 1d4 rounds. Additionally, all combat maneuver checks to grapple a targotha automatically fail. The targotha automatically succeeds at any combat maneuver checks and Escape Artist checks to escape a grapple or a pin. Tail Slap (Ex) A targotha adds 1-1/2 its Strength modifier on damage rolls for its tail slap. It can attempt a bull rush combat maneuver against a creature struck by its tail slap as a free action without provoking attacks of opportunity. The targotha can't move as part of this bull rush. Volatile Breath (Ex) A targotha can breathe a cone of flammable gas as a breath weapon. As a swift action, it can ignite the gas with its jolt ability. When ignited, the gas explodes, dealing 15d6 points of fire damage in the area of the cone (Reflex DC 28 half). If not ignited, the gas confuses all creatures in the area of effect that breathe it in before the gas dissipates at the start of the targotha's next turn. This confusion last for 1d4 rounds (Fortitude DC 23 negates). The save DCs are Constitution-based, and the confusion save DC has a -5 racial penalty."
      },
      "bull rush": {
        type: "Ex"
      },
      stun: {
        type: "Ex"
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

  "Zhen Worm": {
    source: "Numeria Land Of Fallen Stars",
    creatureType: "vermin",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 1,
    hdVal: 8,
    cr: "1/2",
    racialFeatures: [
      "Tremorsense 60 ft."
    ],
    speed: {
      base: 20,
      burrow: 10,
      swim: 20
    },
    abilities: {
      str: 12,
      dex: 9,
      con: 13,
      int: "-",
      wis: 10,
      cha: 1
    },
    feats: [
      {
        name: "Blind-Fight",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Slam",
        name: "Slam",
        specialAbility: "grab",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to gaze attacks, mind-affecting effects, sight-based attacks, and visual effects"
    ],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "warm swamps",
    visualDescription: "Barely thicker than hempen rope, this orange-banded worm stretches many feet in length.",
    description: "The blind and mindless zhen worms thrive in warm, wet environments such as the Gorum Pots of Numeria. Cold disrupts their Tremorsense, and they cannot burrow through rocky soil, so the worms do not roam far from their geothermal baths. Though rarely thicker than an inch in diameter, zhen worms reach up to 10 feet in length and weigh up to 20 pounds. The orange bands along their sides react to tremors and vibration, providing their only means of perceiving the environment around them. Zhen worms hunt by lying unseen beneath mud or water, waiting for prey to approach close enough to attack. Zhen worms normally restrict themselves to modest prey such as rodents and lizards, but a hungry worm may attack Small or even Medium prey. A zhen worm has no mouth or digestive tract. Instead, it absorbs nutrients and secretes waste through thousands of tiny orifices along its body. The mucus coating its body slowly dissolves organic matter. Over a matter of days, a zhen worm wrapped around a corpse reduces it to nothing but bones and a foul-smelling slurry.",
    organization: "solitary, pair, or colony (3-20)",
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
        ranks: 0
      }
    },
    special: {
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "1d4+1"
      },
      "dissolve flesh": {
        type: "Ex",
        text: "Though too dilute to cause damage in combat, a zhen worm's acidic mucus reduces a Mediumsized corpse to bones and a pool of foul-smelling slurry in 1d4 days. Each size category above Medium doubles the amount of time required, and each size category smaller than Medium halves it."
      },
      "protective mucus": {
        type: "Ex",
        text: "Weapons slip off the slick slime that coats a zhen worm, and fire has difficulty burning it away. Zhen worms take half damage from weapons and fire. This ability does not reduce damage from confirmed critical hits."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    },
    resistances: [
      "blindness"
    ]
  },

};
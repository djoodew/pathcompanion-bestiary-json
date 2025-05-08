
export const Valley_Of_The_Brain_CollectorsCreatures = {
  "Reclamation Robot": {
    source: "Valley Of The Brain Collectors",
    creatureType: "construct",
    subTypes: [
      "robot"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 16,
    hdVal: 10,
    cr: 12,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30,
      climb: 20
    },
    abilities: {
      str: 22,
      dex: 25,
      con: "-",
      int: 14,
      wis: 15,
      cha: 1
    },
    feats: [
      {
        name: "Blinding Critical",
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
        name: "Greater Sunder",
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
        name: "Improved Sunder",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Technologist",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Claw",
        name: "5 Claws",
        specialAbility: "grab",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Integrated laser rifle",
        qualities: [
          "touch"
        ],
        name: "Integrated laser rifle",
        specialAbility: "Integrated laser rifle",
        damage: "2d6"
      }
    ],
    immunities: [
      "construct traits"
    ],
    defense: {
      naturalArmor: 11
    },
    space: "10 ft.",
    reach: "15 ft.",
    environment: "any",
    visualDescription: "This complex-looking automaton's multiple arms end in gripping talons. It moves about on a set of four legs and has a strange bell-shaped head.",
    description: "Reclamation robots, or \"reclamators,\" are masters of salvage and construction. These robots were originally designed to build structures and repair all manner of technology with speed and precision. Construction of these robots was difficult and time consuming, but they often repaid those spent resources swiftly with their ability to rebuild and repair other robots or technological items. Their truly remarkable programing surprised even those who originally developed them, as these machines can salvage items thought to be far beyond hope of repair. Over time it's not uncommon for a reclamation robot to develop a unique personality akin to that of an artist, with something that almost approaches pride in its work. On some occasions, reclamation robots have even been known to make improvements to items and constructs that they repair. Though a reclamation robot is generally quite adept at repairing damage to itself as well, injury to certain processors and memory modules deep within the robot can cause significant problems. Some of the resulting malfunctions can be quite noticeable (see the table above), while others are subtler, such as a tendency to add baroque and unnecessary embellishments to constructions and repairs. Reclamation robots with this type of damage are largely unaware of their condition and actively resist efforts to repair them, requiring intervention with a robojackTG or the like. There are even recorded incidents of damaged reclamators going rogue and setting off on their own to build whatever outlandish structures their flawed processors dictate. Though they were originally designed to create things for humanoids, such rogue robots typically design structures and devices of no apparent use to organic beings... which isn't to say that these creations don't have a place in some unknowable automaton agenda.",
    organization: "solitary, duo, or work gang (3-5)",
    languages: "Androffan, Common",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 16,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      "Disable Device": {
        ranks: 16
      },
      "Knowledge (engineering)": {
        ranks: 16,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Perception: {
        ranks: 16
      }
    },
    special: {
      "combined arms": {
        type: "Ex",
        text: "When taking a full-attack action, a reclamation robot can attack with its claws and its integrated laser rifle simultaneously. It does not provoke attacks of opportunity with its integrated laser rifle when using combined arms."
      },
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "1d6+6"
      },
      "efficient grappler": {
        type: "Ex",
        text: "A reclamation robot takes only a -10 penalty on its combat maneuver check to make and maintain a grapple on a foe when using only its claw rather than its whole body to grapple. It receives a +8 bonus on combat maneuver checks to start and maintain a grapple rather than the normal +4 bonus granted by the grab ability. A reclamation robot can make an attack with its integrated laser rifle against one creature it is grappling as a swift action-when it attacks in this way, the robot has a threat range of 18-20 for critical hits with the laser rifle."
      },
      "item creation": {
        type: "Ex",
        text: "Reclamation robots are known for their startling creativity in repairing damaged technology. A reclamation robot ignores all of the item creation feat requirements for creating a technological item, but must have access to a sufficient amount of scrap metal and spare parts in order to create or repair an item (the robot must still expend materials equal to the item's cost). A reclamation robot can attempt a Knowledge (engineering) check to restore a timeworn technological item to full functionality-the DC of this check is equal to the item's Craft DC + 5, and requires an expenditure of technological components worth a total amount of money equal to the timeworn item's cost (half the cost of the object in its pristine condition). Failure results in the destruction of the item. When a reclamation robot restores a technological item to full functionality in this manner, if the robot exceeds its DC by a result of 10 or more, it improves the item in some way-choose one of the following improvements or determine one randomly. • The item's capacity permanently increases by 50%. • If the item is a weapon or armor, it becomes masterwork. • The item becomes hardened (increase its hardness by 2). • The item becomes fortified (increase its hit points by 50%). • The item becomes lightweight (weight is divided in half). Force Field (Ex) A reclamation robot is sheathed in a thin layer of shimmering energy that grants it 50 bonus hit points. All damage dealt to a reclamation robot with an active force field is deducted from these hit points first. As long as the force field is active, the reclamation robot is immune to critical hits. A reclamation robot's force field has fast healing 10, but once these hit points are reduced to 0, the force field shuts down and does not reactivate for 24 hours."
      },
      salvage: {
        type: "Ex",
        text: "A reclamation robot is designed specifically to salvage technology for further use. All Craft skills are class skills for reclamation robots, and they gain a +4 racial bonus on Knowledge (engineering) checks and gain Technologist as a bonus feat. A reclamation robot can repair 2d6 points of damage to a robot within reach (including itself) as a standard action."
      },
      scaling: {
        type: "Ex",
        text: "Reclamation robots are expected to work at great heights or while clinging to immense ships. They gain a +4 racial bonus on Climb checks. Once every 1d4 rounds, a reclamation robot can increase its climb speed to 40 feet as a swift action for 1 round. Vulnerable to Critical Hits (Ex) Like all robots, reclamation robots are vulnerable to critical hits. In addition, when a critical hit is confirmed against a reclamation robot, roll a d8. On a roll of 1, instead of suffering additional damage from the critical hit, the robot suffers damage to essential processing units and memory modules that it cannot itself repair (although another reclamation robot could repair this damage). While such damage is not readily apparent on the exterior-and the robot itself is essentially unaware of it-this kind of injury can have a number of different effects. When such an injury occurs, roll d% and consult the following chart to determine the nature of the damage. d% Result 01-20 The robot takes a -4 penalty on all skill checks. 21-30 The robot's integrated laser rifle now glitches each time it is fired as if it were timewornTG. 31-40 The robot loses its scaling ability (including its bonus on Climb checks). 41-60 When it attempts to repair damage to a robot via salvage, it only repairs 1d4 points of damage. 61-70 Movement is reduced by 10 feet. 71-95 One of the robot's claw attacks becomes nonfunctional. 96-100 The robot goes berserk, functioning as if under the simultaneous effects of a confusion spell and a rage spell."
      },
      hardness: {
        universalMonsterAbility: "Hardness",
        value: 10
      },
      grab: {
        universalMonsterAbility: "Grab"
      },
      "integrated laser rifle": {
        type: "Ex",
        text: "A reclamation robot has a built-in laser rifle in its chest. This weapon has a range of 150 feet and deals 2d6 points of fire damage on a hit. The weapon can fire once per round as a ranged touch attack. A laser attack can pass through force fields and force effects, such as a wall of force, to strike a foe beyond without damaging that field. Objects like glass or other transparent barriers don't provide cover from lasers, but unlike force barriers, a transparent physical barrier still takes damage when a laser passes through it. Invisible creatures and objects are immune to damage from lasers. Fog, smoke, and other clouds provide cover in addition to concealment from laser attacks. Darkness (magical or otherwise) has no effect on lasers other than providing concealment."
      }
    },
    resistances: [
      {
        damageType: "cold",
        value: 15
      },
      {
        damageType: "fire",
        value: 15
      }
    ]
  },

  Shipmind: {
    source: "Valley Of The Brain Collectors",
    creatureType: "ooze",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Huge",
    hd: 14,
    hdVal: 8,
    cr: 13,
    racialFeatures: [
      "Blindsight 60 ft.",
      "Detect Good",
      "Detect Law",
      "Detect Magic"
    ],
    speed: {
      base: 0
    },
    abilities: {
      str: 34,
      dex: 28,
      con: 24,
      int: 21,
      wis: 23,
      cha: 21
    },
    feats: [
      {
        name: "Combat Casting",
        type: "General"
      },
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Plasma bolt",
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
        value: "Touch of idiocy",
        choiceSource: "Quicken Spell-Like Ability"
      }
    ],
    attacks: [
      {
        weapon: "Slam",
        name: "3 Slams",
        specialAbility: "grab",
        damage: "1d4",
        bonuses: [
          {
            source: "inherent",
            value: "1d4",
            appliesTo: "damageType",
            damageType: "int damage"
          }
        ],
        type: "primary"
      },
      {
        weapon: "Plasma bolt",
        qualities: [
          "touch"
        ],
        name: "Plasma bolt",
        specialAbility: "Plasma bolt",
        damage: "10d6"
      }
    ],
    immunities: [
      "Immune to bludgeoning, charm effects, electricity, fire"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "-"
      },
      SR: {
        value: 24
      }
    },
    space: "15 ft.",
    reach: "15 ft.",
    environment: "any (Dominion of the Black ships)",
    visualDescription: "This yellowy viscous liquid bubbles in a large tank suspended by strangely organic cables. Wisps of white gas occasionally escape the roiling fluid.",
    description: "The enigmatic shipminds are painstakingly engineered creations of Dominion fleshfarms, molded and formed over the course of years to pilot the massive organic spacecraft the aliens use to navigate the Dark Tapestry. Intimately bound to their vessels, shipminds oversee the health and function of the ships they control. They maintain this single-minded task for as long as a thousand years before they must be recycled and rebuilt. A shipmind resides within a specially designed containers on a craft, connected to the ship's greater workings via varying forms of physical interface. These oozes generally follow orders from superiors stationed on their spacecraft, though coaxing is sometimes necessary in order to get these strange creatures to follow direct orders. This is due in part to the fact that these engineered creatures are fanatically devoted to the Dominion's inscrutable faith, with rigid beliefs regarding orthodoxy. Rumors persist of especially radical shipmind oozes going beyond defiance and actually slaying their passengers, a task made frightfully easy due to the mastery each ooze has over every aspect of its spacecraft's function (such as life support and internal security appendages and creatures). Some have been known to plunge their vessel into a star or black hole in moments of defiance or religious ecstasy, leaving the rest of the ship's crew helpless and unable to convince the shipmind to abandon its actions. As a shipmind reaches more advanced age, it becomes increasingly pedantic and difficult to control. Such oozes often demand small offerings, sacrifices of lesser creatures, or the powering down of ship's systems they deem superf luous or \"unpure.\" At a certain point, the shipmind is recycled, poured from its container into vats to serve as nutrients for the cultivation of a replacement. Fragments of the previous shipmind's intellect and skills carry over into the newly created ooze, ensuring that a sort of entrenched memory and institutional knowledge persist through the generations. Deteriorating Shipmind(CR-1) In cases where a shipmind isn't recycled in time, as often happens in abandoned ships or in cases where a Dominion crew neglects the shipmind for too long, a shipmind can begin to deteriorate while still within its container. Deteriorated shipminds are sometimes encountered on Dominion drop ships after the vessel has landed on a planet and been left to rot. In such cases, the shipmind slowly goes insane, serving almost as a sort of living haunt within the decaying ship and bringing madness and pain to any creatures exploring its decks. Most deteriorating shipminds survive for only a few years, or a decade at most-in the majority of cases, the Dominion drop ship decays into filth and sludge long before then. A shipmind that is deteriorating has slightly different statistics than the typical shipmind. You can create stats for one of these shipminds by applying the deteriorating shipmind simple template to the statistics above. The quick rules and rebuild rules for a deteriorating shipmind are the same. Quick/Rebuild Rules: -2 on all rolls (including damage rolls) and to special ability DCs. The shipmind's container is broken and has only 120 hit points. A deteriorating shipmind can only use its plasma bolt once every other round, and gains negative levels at a rate of 1 per round immediately after it leaves its container.",
    organization: "solitary",
    languages: "Abyssal, Aklo, Common, Draconic, Infernal, Undercommon, Protean; telepathy 60 ft.",
    spellLikeAbilities: [
      {
        name: "detect good",
        casterLevel: 13,
        timesPerDay: -1
      },
      {
        name: "detect law",
        casterLevel: 13,
        timesPerDay: -1
      },
      {
        name: "detect magic",
        casterLevel: 13,
        timesPerDay: -1
      },
      {
        name: "enthrall",
        casterLevel: 13,
        timesPerDay: -1
      },
      {
        name: "sending",
        casterLevel: 13,
        timesPerDay: -1
      },
      {
        name: "telekinesis",
        casterLevel: 13,
        timesPerDay: -1
      },
      {
        name: "touch of idiocy",
        casterLevel: 13,
        limitations: "Metamagic: Quicken ",
        timesPerDay: 3
      },
      {
        name: "confusion",
        casterLevel: 13,
        timesPerDay: 1
      },
      {
        name: "crushing despair",
        casterLevel: 13,
        timesPerDay: 1
      }
    ],
    skills: {
      "Knowledge (engineering)": {
        ranks: 14
      },
      "Knowledge (geography)": {
        ranks: 14
      },
      "Knowledge (nature)": {
        ranks: 14
      },
      "Knowledge (planes)": {
        ranks: 14
      },
      "Knowledge (religion)": {
        ranks: 14
      },
      Perception: {
        ranks: 14
      },
      "Sense Motive": {
        ranks: 14
      }
    },
    special: {
      immerse: {
        type: "Ex",
        text: "When a shipmind in its container successfully grabs a Large or smaller target with one of its slam attacks, it can attempt to drag that target into its body as a swift action. To immerse a creature, the shipmind must attempt a combat maneuver check (as though attempting to pin the opponent). If it succeeds, the prey is pulled into the container with the shipmind and immediately takes 6d6 points of plasma damage (half of which is electricity and half of which is fire) and 1d4 points of Intelligence damage-a successful DC 24 Fortitude save halves the plasma damage and negates the Intelligence damage. A creature that remains immersed takes this damage again every following round at the start of the shipmind's turn. In addition, an immersed creature is in danger of suffocating. A creature can attempt to escape immersion by making a successful combat maneuver check or Escape Artist check, as if it were attempting to escape a pin. If the shipmind's container has the broken condition, attempts to escape in this manner gain a +8 bonus. Limited Mobility (Ex) Unlike most oozes, a shipmind cannot exist outside of the partially organic container it was originally created in-this container serves the shipmind as its \"skin.\" While inside its container, a shipmind has a speed of 0 feet. When it leaves its container, it gains a speed of 10 feet, but loses its armor bonus to AC. A shipmind can exist outside of its container for 1 hour without consequences, but at the start of each subsequent hour it gains 1 negative level as its body starts to dissolve. These negative levels cannot be restored by any means save by returning to an appropriate shipmind container, at which point they are removed at a rate of 1 level per hour."
      },
      container: {
        type: "Ex",
        text: "A shipmind dwells within an immobile container of partially organic material grown by its Dominion masters. This container functions somewhat like a suit of armor for the shipmind. A shipmind container has hardness 10 and 240 hit points, and can be damaged by sunder attempts. A shipmind container that gains the broken quality grants only a +5 armor bonus to the shipmind within, and does not allow the shipmind to heal negative levels gained during a prolonged period outside of the container (see Limited Mobility). The partially crystalline nature of a shipmind container makes it vulnerable to shatter spells, and sonic damage bypasses the container's hardness and inflicts full damage."
      },
      "ship interface": {
        type: "Ex",
        text: "As long as a shipmind is interfaced with a Dominion vessel, it can observe events within the ship or within 90 feet of its exterior hull as if via clairaudience/clairvoyance for as long as the shipmind concentrates. While concentrating on an area, the shipmind can activate traps or other ship systems in the area as a swift action; it can even converse with creatures in the area by vibrating the metal and strange membranes in the walls."
      },
      amorphous: {
        universalMonsterAbility: "Amorphous"
      },
      "thought disruption": {
        type: "Su",
        text: "The substance that makes up a shipmind ooze is charged with alien psychic energy that is toxic to the minds of most life forms. A creature who willfully touches an ooze (via a touch attack, natural weapon attack, or unarmed strike) or is struck by its slam attack must make a DC 22 Will save or take 1d4 points of Intelligence damage. This is a mind-affecting confusion effect. The save DC is Charisma-based."
      },
      grab: {
        universalMonsterAbility: "Grab"
      },
      "plasma bolt": {
        type: "Su",
        text: "As a standard action, a shipmind can fire a bolt of plasma at a target within 300 feet (no range increment). On a hit, a blast of plasma deals 10d6 damage, half of which is electricity damage and half of which is fire damage."
      }
    },
    resistances: [
      "limited mobility",
      "vulnerable to cold"
    ]
  },

  Ugothokra: {
    source: "Valley Of The Brain Collectors",
    creatureType: "aberration",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Small",
    hd: 10,
    hdVal: 8,
    cr: 7,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 50,
      climb: 50
    },
    abilities: {
      str: 13,
      dex: 20,
      con: 18,
      int: 10,
      wis: 17,
      cha: 13
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
        name: "Mobility",
        type: "Combat"
      },
      {
        name: "Point-Blank Shot",
        type: "Combat"
      },
      {
        name: "Shot on the Run",
        type: "Combat"
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
        weapon: "Flechette spray",
        name: "6 Flechette spray",
        specialAbility: "viral infection",
        damage: "1d4"
      }
    ],
    immunities: [
      "Immune to cold, disease, poison"
    ],
    defense: {
      naturalArmor: 3
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "This partially mechanical, partially organic spider moves with a skittering lurch. A single crystalline eye glares from its hideous face.",
    description: "One of many artificially engineered species grown and molded in Dominion of the Black labs, ugothokras were designed specifically to spread contagions through organic enemy ranks. Immune to disease, ugothokras have small bodies that are capable of hosting a limitless number of contagions within their blood. Ugothokras are incapable of reproduction, and when additional ones are required by the Dominion of the Black, replacements are constructed from organic and cybernetic components. The construction facilities typically operate within the organic walls of Dominion installations, the little beasts crawling out from birthing tubes protruding from their semi-organic incubators. These incubators are of widely varying size and capacity. Smaller versions, possessing no more than two birthing tubes, can produce an ugothokra every hour if provided the proper nutrients (typically curdled flesh harvested from victims of flesh ripen fever), fed to it through the living walls in which the incubator is nestled. Significantly larger incubators with dozens of birthing tubes have been reported, their size limited only by the resources needed to create more offspring. A newborn ugothokra is completely autonomous and fully functional. While ugothokras can't fly, their immunity to cold and the fact that they don't breathe make them ideal bioweapons for use against enemy vessels in space-often, a Dominion ship's exterior swarms with ugothokras, and as they near an enemy ship, dozens of the tenacious aberrations drop off to cling to the enemy's hull. The creatures skitter along surfaces, searching for points of entry so they can infect the vessel's crew and spread their sickness. Often, these entry points are created for them via battle damage from other Dominion weaponry. Many Dominion ships have had great success at using ugothokras to spread Aklo submission among enemy crews, allowing the Dominion to order their victims to power down and submit. Those that manage to resist still typically fall under the grinding legs and mouth parts of swarms of ugothokras. Rumors of variant ugothokras abound, including swarms or larger varieties, and those possessing even more potent and deadly diseases. Given the prodigious industry of the Dominion of the Black, such rumors hardly seem far fetched. An ugothokra stands only about 2 1/2 feet tall, with a leg span approaching 6 feet. Most weigh around 150 pounds.",
    organization: "solitary, pair, or pack (3-12)",
    languages: "Aklo (can't speak)",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 2
      },
      Climb: {
        ranks: 10,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Perception: {
        ranks: 10
      },
      Stealth: {
        ranks: 10
      }
    },
    special: {
      "combined arms": {
        type: "Ex",
        text: "When taking a full-attack action, an ugothokra can attack with its bite and its flechette spray attacks simultaneously. It does not provoke attacks of opportunity with its flechette spray attacks when using combined arms."
      },
      "expert climber": {
        type: "Ex",
        text: "An ugothokra's feet allow it to climb any surface, no matter how slick or sheer. In effect, an ugothokra is treated as constantly being under the effects of spider climb, though this is effect is natural rather than magical. Flechette Spray (Ex) An ugothokra can fire bursts of calcified bone and horn from the vents along its abdomen. All six vents can fire as part of a full-attack action, or it can fire one vent as a standard action. This attack has a range increment of 50 feet. An ugothokra generates the \"ammunition\" it uses for this attack internally by feeding on organic material, and effectively has an unlimited supply of flechette material at any one time, but an ugothokra that is currently starving can't use this attack until at least 1 hour after feeding."
      },
      "no breath": {
        universalMonsterAbility: "No Breath",
        text: ""
      },
      "infected blood": {
        type: "Ex",
        text: "A creature that damages an ugothokra with a slashing or piercing melee weapon (regardless of how often the ugothokra is damaged) must succeed at a DC 20 Reflex saving throw at the end of its turn or be sprayed by the ugothokra's infected blood. A creature that damages an ugothokra with a slashing or piercing natural weapon automatically fails this saving throw. On a failed saving throw, the creature is exposed to a random viral infection (see below), but gains a +4 bonus on the Fortitude save to resist contracting whatever disease it is exposed to. Unlike when a victim contracts an infection from an ugothokra's flechette spray, diseases caught via contact with the monster's blood have normal onset times as determined by the disease in question. The Reflex save is Dexterity-based."
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Bite-injury; save Fort DC 19; frequency 1/round for 6 rounds; effect 1d4 Con plus sickened for 1 round; cure 2 consecutive saves.",
        saveDC: 10
      },
      "viral infection": {
        type: "see below",
        text: " but gains a +4 bonus on the Fortitude save to resist contracting whatever disease it is exposed to. Unlike when a victim contracts an infection from an ugothokra's flechette spray, diseases caught via contact with the monster's blood have normal onset times as determined by the disease in question. The Reflex save is Dexterity-based."
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

  "Yah-Thelgaad": {
    source: "Valley Of The Brain Collectors",
    creatureType: "aberration",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Large",
    hd: 16,
    hdVal: 8,
    cr: 14,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Diagnose Diseasee",
      "True Seeing"
    ],
    speed: {
      base: 20,
      maneuverability: "Perfect",
      fly: 40
    },
    abilities: {
      str: 32,
      dex: 18,
      con: 26,
      int: 23,
      wis: 25,
      cha: 21
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
        name: "Greater Spell Focus",
        type: "General",
        value: "Necromancy",
        choiceSource: "Greater Spell Focus"
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
        name: "Spell Focus",
        type: "General",
        value: "Necromancy",
        choiceSource: "Spell Focus"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Claw",
        name: "Claw",
        specialAbility: "poison",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Tentacle",
        name: "2 Tentacles",
        specialAbility: "grab",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to disease, mind-affecting effects"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "magic and adamantine"
      },
      SR: {
        value: 25
      },
      naturalArmor: 5
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any",
    visualDescription: "A writhing forest of tendrils extends from one end of this chitin-covered creature's body, while from the other lashes a pincer-tipped tail. Six transparent blisters adorn its back, each containing a brain floating in thick green fluid.",
    description: "When a neh-thalggu has absorbed a critical mass of thoughts and memories from an unknown number of humanoid brains, its body undergoes a horrific transformation. The creature enters a state of torpor, its body curling into a tight ball as it consumes the oldest of its seven stored brains to trigger the metamorphosis. Over the course of several days of self-consumption, the neh-thalggu bursts from the shell of its old body into its new incarnation as a yah-thelgaad. While the yah-thelgaad shares many of the features of its less powerful progenitor, it is in every way a more powerful creature than it was before. While the capacity to store one fewer brain than a neh-thalggu presents some disadvantage, the yah-thelgaad gains twice as much power from a collected brain as its lesser kin does. In addition, these creatures need not limit their harvest to the brains of humanoids-any Small or Medium creature's brain will do. Yah-thelgaads are zealously devoted to the inscrutable causes of the Dominion of the Black, but they are also notoriously devout believers in that alliance's weird theology, worshiping a concept they refer to as the \"Ineffable Void,\" among other cryptic mysteries. It is not uncommon for yah-thelgaads of high rank to also possess inquisitor or oracle levels, lording their authority and fanatical faith over those in their charge-the most powerful yah-thelgaads often take levels in mystic theurge to combine their class-based mastery of the divine with their stolen brains' arcane lore. Yah-thelgaads often supervise the Dominion of the Black's surgical and genetic engineers on major projects, pushing those agents to attempt greater and more horrific procedures. For all their legendary cruelty, however, yah-thelgaads don't appear to gain pleasure from such experiments. Indeed, they don't seem to feel any emotions at all on their own, but rather experience such sensations vicariously through the memories of the brains they've collected. In this way, the creatures know lust, fear, hatred, and pride without exposing their own minds to the disadvantages of being susceptible to mind-affecting effects.",
    organization: "solitary",
    languages: "Abyssal, Aklo, Common, Draconic, Infernal, Protean, Undercommon; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "diagnose disease",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "true seeing",
        casterLevel: 12,
        timesPerDay: -1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 12,
      spells: [
        {
          name: "(4/day)-disintegrate",
          limitations: "4/day",
          level: 6
        },
        {
          name: "",
          limitations: "6/day",
          level: 5
        },
        {
          name: "suffocation",
          level: 5
        },
        {
          name: "(8/day)-confusion",
          limitations: "8/day",
          level: 4
        },
        {
          name: "contagion",
          level: 4
        },
        {
          name: "dimension door ",
          level: 4
        },
        {
          name: "",
          limitations: "8/day",
          level: 3
        },
        {
          name: "dispel magic",
          level: 3
        },
        {
          name: "slow",
          level: 3
        },
        {
          name: "vampiric touch ",
          level: 3
        },
        {
          name: "(8/day)-detect thoughts",
          limitations: "8/day",
          level: 2
        },
        {
          name: "ghoul touch",
          level: 2
        },
        {
          name: "mirror image",
          level: 2
        },
        {
          name: "scorching ray",
          level: 2
        },
        {
          name: "spectral hand ",
          level: 2
        },
        {
          name: "(8/day)-chill touch",
          limitations: "8/day",
          level: 1
        },
        {
          name: "magic missile",
          level: 1
        },
        {
          name: "ray of enfeeblement",
          level: 1
        },
        {
          name: "shocking grasp",
          level: 1
        },
        {
          name: "unseen servant",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "flare",
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
          name: "open/close",
          level: 0
        },
        {
          name: "prestidigitation",
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
      Bluff: {
        ranks: 16
      },
      Diplomacy: {
        ranks: 8
      },
      Fly: {
        ranks: 8
      },
      Intimidate: {
        ranks: 16
      },
      "Knowledge (arcana)": {
        ranks: 31
      },
      "Knowledge (engineering)": {
        ranks: 31
      },
      "Knowledge (geography)": {
        ranks: 31
      },
      "Knowledge (planes)": {
        ranks: 31
      },
      Perception: {
        ranks: 16
      },
      Spellcraft: {
        ranks: 16
      },
      "Use Magic Device": {
        ranks: 16
      }
    },
    special: {
      "command disease": {
        type: "Su",
        text: "As a swift action, a yah-thelgaad can cause a disease or infection currently afflicting a creature within 30 feet to quicken and activate, forcing the afflicted creature to immediately attempt a saving throw against the disease's effects. Those who fail immediately suffer the disease's effects. These additional saving throws count against those one must succeed at to recover from a disease, so it's possible for a victim to be cured by succeeding at enough saving throws. Any creature that has been affected by a yah-thelgaad's command disease ability (whether or not the creature succeeded at the saving throw this ability triggered) takes a -2 penalty against any mind-affecting spell or effect generated by the yah-thelgaad in the next minute."
      },
      "mind storm": {
        type: "Su",
        text: "As a standard action once every 1d4 rounds, a yah-thelgaad can employ its own brain as well as any brains kept in its blisters to create a powerful psychic vortex. When the creature activates this ability, all creatures within a 40-foot radius must succeed at DC 23 Will save or become confused for 1d4 rounds. When a yah-thelgaad activates this ability, it can choose to absorb one of its brains as a swift action to cause one creature within the area of effect that has succumbed to the confusion effect to instead become stunned for 1d4 rounds. A creature stunned in this manner is confused for 1d4 rounds after the stun effect ends. A yah-thelgaad generally saves this tactic for when it's faced with a particularly dangerous foe, since the stun effect forces the yah-thelgaad to lose one of its stored brains and gain 2 negative levels. This is a mind-affecting confusion effect. The save DC is Charisma-based."
      },
      "powerful tentacles": {
        type: "Ex",
        text: "A yah-thelgaad's tentacles are primary attacks. Spells (Su) A yah-thelgaad casts spells as a 12th-level sorcerer. Its caster level is reduced by 2 for each negative level it gains from missing brains. A yah-thelgaad with no collected brains can't cast any of its spells."
      },
      spellstrike: {
        type: "Su",
        text: "Whenever a yah-thelgaad casts a spell with a range of \"touch,\" it can deliver the spell through its claw attack as part of a melee attack. Instead of the free melee touch attack normally allowed to deliver the spell, the yah-thelgaad can make one free melee attack with its claw as part of casting the spell. If successful, this claw attack deals its normal damage (including poison) as well as the effects of the spell."
      },
      "brain collection": {
        type: "Ex",
        text: "A yah-thelgaad can store up to six brains of Small or Medium creatures and use them to enhance its knowledge and power. Each stored brain grants a yah-thelgaad a cumulative +2 insight bonus to AC, concentration checks, and Knowledge checks. A yah-thelgaad can extract a brain from a helpless opponent with a coup de grace attack, or as a standard action from a body that has been dead for no more than 1 minute. A yah-thelgaad that has fewer than six collected brains gains two negative levels for each missing brain. These negative levels never become permanent, and can only be removed by replacing one of the yah-thelgaad's collected brains. The statistics presented here assume a yah-thelgaad with a full collection."
      },
      "strange knowledge": {
        type: "Ex",
        text: "All knowledge skills are class skills for yah-thelgaads."
      },
      carapace: {
        type: "Ex",
        text: "The spikes on a yah-thelgaad's carapace make melee attacks against it hazardous. Any opponent attempting to attack a yah-thelgaad with a light weapon, unarmed strike, touch attack, or natural attack must succeed at a DC 22 Reflex save or take 1d6 points of bleed damage from these bristling barbs. Bleed damage from multiple failed Reflex saves does not stack. The save DC is Dexterity-based."
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Claw-injury; save Fort DC 26; frequency 1/round for 6 rounds; effect 1d4 Strength damage and nauseated for 1 round; cure 2 consecutive saves. The save DC is Constitution-based.",
        saveDC: 10
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    },
    resistances: [
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

};
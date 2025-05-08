
export const Distant_WorldsCreatures = {
  Aballonian: {
    source: "Distant Worlds",
    creatureType: "construct",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 10,
    hdVal: 10,
    cr: 7,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 40,
      climb: 20
    },
    abilities: {
      str: 19,
      dex: 14,
      con: "-",
      int: 17,
      wis: 10,
      cha: 11
    },
    feats: [
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Claw",
        choiceSource: "Improved Critical"
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
        value: "Claw",
        choiceSource: "Weapon Focus"
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
        weapon: "Spark",
        qualities: [
          "touch"
        ],
        name: "Spark",
        specialAbility: "Spark",
        damage: "2d6"
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
      naturalArmor: 8
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "Aballon",
    visualDescription: "This insectile construct skitters around on metallic legs, its manipulators clacking and glowing eyes searching.",
    description: "Aballonians are intelligent, self-modifying constructs. The stat block presented here represents only the most basic type found on Aballon, with much larger or smaller variants taking the form of gargantuan excavators, gliding solar-powered flyers, ribbonlike serpent creatures, disembodied processor intelligences, or stranger designs.",
    organization: "solitary, pair, or network (3-6)",
    languages: "Common; shortwave 100 ft.",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 6
      },
      Climb: {
        ranks: 10
      },
      "Knowledge (engineering)": {
        ranks: 10
      },
      Perception: {
        ranks: 10
      },
      Stealth: {
        ranks: 10
      }
    },
    special: {
      rebuild: {
        type: "Ex",
        text: "Aballonian machines are capable of improving and adapting their designs. Each Aballonian starts out with one of the abilities listed below. For every two additional abilities it possesses, its CR increases by +1. Aballonians may also add the customizable abilities of animated objects (Pathfinder RPG Bestiary 14, Pathfinder Adventure Path #43 80), increasing their CRs by +1 for every 2 Construction Points spent in this way. (They are already considered metal.) Aballonians may adapt of their own volition, but it takes 1 day to add each additional ability beyond the first, and they must also possess the rare materials necessary to make such improvements. An ability can only be gained once unless stated otherwise. • Gain a plasma cutter that deals 1d6 points of fire damage on a melee touch attack. • Gain advanced treads that increase base speed to 60 feet. • Modify chassis to gain a burrow, climb, or swim speed of 60 feet. This ability may be taken multiple times. Its effects do not stack. Each time it is taken, it applies to a new movement type. • Add a radar dish that grants Blindsight 120 feet. • Gain an additional claw or slam melee attack (1d6 damage). Lengthen arms to extend reach by 5 feet. • Gain the rend special attack (2 claws, 1d8+6). • Add armor plating to gain a +4 natural armor bonus to AC. • Harden systems to gain resistance 10 against a single energy type (acid, cold, electricity, or fire). This ability may be taken multiple times. Its effects do not stack. Each time it is taken, it applies to a new energy type. Shortwave (Ex) An Aballonian can communicate with nearby Aballonians via invisible waves. This functions as telepathy 100 ft., but only with other Aballonians. In combat, if any allied Aballonians within range can act in a surprise round, all of them can."
      },
      grab: {
        universalMonsterAbility: "Grab"
      },
      spark: {
        type: "Ex",
        text: "As a standard action, an Aballonian can launch an arc of electricity at a nearby creature. This attack has a range of 20 feet with no range increment. In addition, whenever an Aballonian makes a check to maintain a grapple, it can use its spark attack against the creature it is grappling as a free action. Sunlight Dependency (Ex) Aballonians gain their energy from light. In areas of darkness, they gain the sickened condition."
      }
    },
    resistances: [
      "sunlight dependency"
    ]
  },

  "Contemplative Of Ashok": {
    source: "Distant Worlds",
    creatureType: "monstrous humanoid",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 4,
    hdVal: 10,
    cr: 2,
    racialFeatures: [
      "Blindsight 60 ft.",
      "Darkvision 60 ft.",
      "Detect Magic"
    ],
    speed: {
      base: 5,
      maneuverability: "Perfect",
      fly: 30
    },
    abilities: {
      str: 6,
      dex: 13,
      con: 8,
      int: 24,
      wis: 17,
      cha: 21
    },
    feats: [
      {
        name: "Combat Casting",
        type: "General"
      },
      {
        name: "Dodge",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Claw",
        name: "Claw",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to mind-affecting effects"
    ],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "urban",
    visualDescription: "This floating creature is mostly pulsating brain-sac, with the body beneath it somewhere between that of an insect and a human fetus.",
    description: "Once, the entities that would become known as Contemplatives were relatively normal humanoids, notable only for their extreme intelligence. At some point in the distant past, however, their race discovered a great secret within itself, unlocking the mind's potential for such sought-after mental powers as telekinesis. Evolution-whether natural or forced by the Contemplatives themselves-made their incredible brains the sole focus of their advancement, and as the Contemplatives grew to rely more and more on their psychic abilities, their limbs withered and shrank. Today, a Contemplative's massive brain makes up roughly 80 percent of its bodyweight. Below the pulsating and partially translucent sac that protects the vital organ, the rest of its body hangs almost vestigially, used for little more than breathing and processing food. Movement, speech, and the manipulation of objects are handled by the creatures' psychic abilities, resulting in a collection of eerily quiet figures that float slowly and precisely along the halls of their fortresses, mulling over ideas that only their advanced brains are capable of understanding. Though alien in appearance and demeanor, Contemplatives are rarely malicious; instead, when their unexplainable goals bring them into conf lict with other races, it can generally be assumed that they have good reasons for their actions, though this may be of little comfort to those inconvenienced by the far-seeing brain-people's schemes. Perhaps the most disturbing thing about the Contemplatives, however, is the chance that their abhorrent, brain-centric form may in fact be the ultimate destination of all humanoid evolution. A typical Contemplative of Ashok weighs roughly 100 pounds and measures 3 feet in diameter, though it prefers to float at the eye level of whomever it's talking to. Most become sages or arcanists, taking levels of wizard, sorcerer, bard, or other arcane spell-wielding classes; though divine casters are not unknown, most Contemplatives have little interest in the gods (or perhaps the gods take affront at the creatures' probing and presumptuous questions regarding the nature of reality). When they speak inside another creature's head, their voices are monotone and seeming to come from everywhere at once, and when multiple Contemplatives are encountered, they almost always speak as \"we\" rather than the individual \"I.",
    organization: "solitary, trio, or band (4-7)",
    languages: "telepathy 100 ft., tongues",
    spellLikeAbilities: [
      {
        name: "detect magic",
        casterLevel: 4,
        timesPerDay: -1
      },
      {
        name: "mage hand",
        casterLevel: 4,
        timesPerDay: -1
      },
      {
        name: "read magic",
        casterLevel: 4,
        timesPerDay: -1
      },
      {
        name: "tongues",
        casterLevel: 4,
        timesPerDay: -1
      },
      {
        name: "daze",
        casterLevel: 4,
        timesPerDay: -1
      },
      {
        name: "detect thoughts",
        casterLevel: 4,
        timesPerDay: -1
      },
      {
        name: "ghost sound",
        casterLevel: 4,
        timesPerDay: -1
      },
      {
        name: "magic missile",
        casterLevel: 4,
        timesPerDay: -1
      },
      {
        name: "telekinesis",
        casterLevel: 4,
        timesPerDay: 3
      }
    ],
    skills: {
      Bluff: {
        ranks: 4
      },
      Diplomacy: {
        ranks: 4
      },
      Fly: {
        ranks: 0
      },
      "Handle Animal": {
        ranks: 4
      },
      "Knowledge (arcana)": {
        ranks: 4
      },
      "Knowledge (history)": {
        ranks: 4
      },
      "Knowledge (planes)": {
        ranks: 4
      },
      Linguistics: {
        ranks: 4
      },
      Perception: {
        ranks: 4
      },
      "Sense Motive": {
        ranks: 4
      },
      Spellcraft: {
        ranks: 4
      },
      "Use Magic Device": {
        ranks: 4
      }
    },
    special: {}
  },

  Dragonkin: {
    source: "Distant Worlds",
    creatureType: "dragon",
    subTypes: [],
    alignments: [
      "Lawful Neutral"
    ],
    size: "Large",
    hd: 10,
    hdVal: 12,
    cr: 9,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 40,
      maneuverability: "Average",
      fly: 120
    },
    abilities: {
      str: 22,
      dex: 15,
      con: 20,
      int: 11,
      wis: 12,
      cha: 17
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
        value: "Bite",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Glaive",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "Glaive",
        damage: "1d10"
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
      "dragon traits",
      "Immune to fire, magic paralysis and sleep"
    ],
    defense: {
      naturalArmor: 12
    },
    space: "10 ft.",
    reach: "10 ft. (15 ft. with glaive)",
    environment: "any mountains",
    visualDescription: "This sleek, gold-scaled draconic creature looks both regal and intelligent. A leather harness holds a saddle between its wings, and it bears a massive glaive.",
    description: "Somewhere between true dragons and brute drakes lie the dragonkin. Intelligent, even-tempered, and deadly in combat, dragonkin get along well with humanoids. Unlike many other dragons, dragonkin have enough dexterity in their front limbs to have adopted weapons, favoring huge glaives and long lances. The most unique aspect of dragonkin is their bond with other races. Dragonkin opposed to the depredations of evil dragons in the Drakelands recognize other cultures' potential, and such individuals often adopt humanoid riders. After it comes of age, a dragonkin may form an unbreakable partnership with a rider, who acts as a trusted comrade. In battle, a rider and her dragon are inseparable, in such constant telepathic communication that they almost seem to be one entity. When not fighting, the humanoids are responsible for caring and providing for their draconic companions, though this domestic role is more a social dynamic than outright servitude. Built for speed, dragonkin are long and sleek. Many adopt mannerisms from humanoid races, even going so far as to wear armor, and this, combined with the fact that dragonkin have thrown in their lot with humanoids, sometimes disgusts true dragons. A typical dragonkin is 15 to 20 feet long and roughly 2,000 pounds.",
    organization: "solitary, pair, patrol (3-6), or wing (7-14)",
    languages: "Common, Draconic",
    spellLikeAbilities: [],
    skills: {
      Bluff: {
        ranks: 10
      },
      Fly: {
        ranks: 14
      },
      Intimidate: {
        ranks: 10
      },
      Perception: {
        ranks: 10
      },
      Stealth: {
        ranks: 10
      },
      Survival: {
        ranks: 10
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "30-ft. cone",
        damage: "usable every 1d4 rounds"
      },
      "rider bond": {
        type: "Su",
        text: "A dragonkin can form a permanent bond with its rider. Once this bond is made, a dragonkin cannot form another rider bond until its current rider dies. A dragonkin and its rider can communicate with each other as if they both had telepathy 100 ft. In combat, when a rider is mounted on his dragonkin, both creatures roll initiative separately and treat the highest result as their single result."
      }
    }
  },

};
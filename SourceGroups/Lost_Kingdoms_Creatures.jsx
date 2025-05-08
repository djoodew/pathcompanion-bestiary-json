
export const Lost_KingdomsCreatures = {
  "Ubashki Swarm": {
    source: "Lost Kingdoms",
    creatureType: "undead",
    subTypes: [
      "swarm"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Tiny",
    hd: 3,
    hdVal: 8,
    cr: 2,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 5,
      dex: 17,
      con: "-",
      int: 2,
      wis: 10,
      cha: 15
    },
    feats: [
      {
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Weapon Finesse",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "swarm",
        name: "swarm",
        specialAbility: "distraction, disease"
      }
    ],
    defense: {},
    space: "10 ft.",
    reach: "0 ft.",
    environment: "warm deserts",
    visualDescription: "No text supplied",
    description: "Perhaps no beasts were trusted into the afterlife so much as felines, however, who were almost without exception buried alongside deceased pharaohs or at the very least inscribed into their burial chamber walls. Those cats that rose from the dead- either because of the foul magical energies of a pharaoh's crypt or thanks to the necromantic magic of a restless undead pharaoh herself-were known as ubashki. Ubashki were prized for being stealthy, agile, and preternaturally perceptive sentries that made for effective spies and watch guards for the tombs of Osirian god-kings. Emperors often filled their crypts with the bodies of strangled and mutilated cats before they themselves were entombed, believing that a feline's suffering in life would translate to strength in undeath. Whether or not such theories were true is up for debate, but those felid creatures that did rise from death with their masters were indeed beasts to be reckoned with, and a sizeable pack of the mummified things could very well spell the end for would-be tomb raiders. Ranging from tiny housecats to desert-roaming mountain lions, the feline enshrined with a deceased pharaoh varied in type depending on the predilections of its master, but all were known to be significantly more powerful than their living iterations.",
    organization: "solitary, pair, or nuisance (3-5 swarms plus 1 ubashki lynx)",
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
        ranks: 2
      },
      Stealth: {
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
      "half damage from weapons": {
        type: "Ex"
      },
      disease: {
        universalMonsterAbility: "Disease",
        name: "Ubashki Fever",
        type: "Ex",
        text: "ashki Fever: Injury; save Fort DC 13; onset 1d3 days; frequency 1/day; effect 1d2 Str damage and 1d2 Wis damage; cure 2 consecutive saves. A creature afflicted by ubashki fever develops unsightly splotches and sores all over its body that persist until the disease is cured. The save DC is Charisma-based."
      }
    }
  },

  "Ubashki Lynx": {
    source: "Lost Kingdoms",
    creatureType: "undead",
    subTypes: [],
    alignments: [
      "Neutral Evil"
    ],
    size: "Large",
    hd: 8,
    hdVal: 8,
    cr: 6,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 21,
      dex: 17,
      con: "-",
      int: 2,
      wis: 12,
      cha: 15
    },
    feats: [
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Toughness",
        type: "General"
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
        specialAbility: "ubashki rot",
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
      naturalArmor: 5
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "temperate or warm deserts",
    visualDescription: "No text supplied",
    description: "Perhaps no beasts were trusted into the afterlife so much as felines, however, who were almost without exception buried alongside deceased pharaohs or at the very least inscribed into their burial chamber walls. Those cats that rose from the dead- either because of the foul magical energies of a pharaoh's crypt or thanks to the necromantic magic of a restless undead pharaoh herself-were known as ubashki. Ubashki were prized for being stealthy, agile, and preternaturally perceptive sentries that made for effective spies and watch guards for the tombs of Osirian god-kings. Emperors often filled their crypts with the bodies of strangled and mutilated cats before they themselves were entombed, believing that a feline's suffering in life would translate to strength in undeath. Whether or not such theories were true is up for debate, but those felid creatures that did rise from death with their masters were indeed beasts to be reckoned with, and a sizeable pack of the mummified things could very well spell the end for would-be tomb raiders. Ranging from tiny housecats to desert-roaming mountain lions, the feline enshrined with a deceased pharaoh varied in type depending on the predilections of its master, but all were known to be significantly more powerful than their living iterations.",
    organization: "solitary or pair",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 2,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Climb: {
        ranks: 2
      },
      Perception: {
        ranks: 2
      },
      Stealth: {
        ranks: 2,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      }
    },
    special: {
      "piercing howl": {
        type: "Su",
        text: "When an ubashki lynx howls, all creatures except other undead within a 300-foot spread must succeed at a DC 16 Will save or become frightened for 1d4 rounds. This is a sonic, mind-affecting effect. Whether or not the save is successful, an affected creature is immune to the same ubashki lynx's piercing howl for 24 hours. The save DC is Charisma-based."
      },
      rake: {
        universalMonsterAbility: "Rake",
        type: "Ex",
        weaponName: 5
      },
      "ubashki rot": {
        type: "Su",
        text: "Curse and disease-bite; save Fort DC 16; onset 1 hour; frequency 1/day; effect 1d6 Str and 1d6 Wis; cure -. Ubashki rot is both a curse and a disease and can only be cured if the curse is first removed, at which point the disease can be magically removed. Even after the curse element of ubashki rot is lifted, a creature suffering from it cannot recover naturally over time. Anyone casting a conjuration (healing) spell on the afflicted creature must succeed at a DC 20 caster level check, or the spell is wasted and the healing has no effect. The save DC is Charisma-based."
      }
    },
    resistances: [
      "vulnerable to fire"
    ]
  },

  Ngoga: {
    source: "Lost Kingdoms",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 9,
    hdVal: 10,
    cr: 7,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 40,
      climb: 40
    },
    abilities: {
      str: 23,
      dex: 20,
      con: 18,
      int: 2,
      wis: 13,
      cha: 9
    },
    feats: [
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
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Rending Claws",
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
      naturalArmor: 6
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "warm jungles",
    visualDescription: "No text supplied",
    description: "In the tropical rainforests of the Kaava Lands and the Mwangi Jungle lurk animalistic offshoots of the cyclopes that once dominated the region. Known as ngogas, these half-orangutan, half-cyclops hybrids are infamous in the folktales of the Mwangi peoples, who fear them for their unpredictability and unnatural agility. In cyclops legends, the ngogas were a gift to the Ghol-Gani from their otherworldly patrons near the collapse of the empire, magical beings infused with the brutality and insight afforded cyclopes, but lacking the intelligence that would make them viable competitors. Ghol-Gani soldiers often trained these beasts to follow them into battle and fight alongside them, and present-day cyclopes who encounter ngogas inevitably feel a sort of kinship to the similarly monocular beasts, enticing them with gifts of fruit and meat in order to gain an ally in their destructive conquests. Since the fall of Ghol-Gan, ngogas have proliferated throughout the dense jungles of central Garund, and many of their kind can be found as deep as Usaro, where the destructive Gorilla King trains them as war-mounts for his smaller minions and relies on their bestial speed to stage ambushes against any who would dare t o intrude upon his realm.",
    organization: "solitary, pair, or band (3-5)",
    note: "* See the Advanced Player's Guide.",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 3
      },
      Perception: {
        ranks: 3
      },
      Stealth: {
        ranks: 3
      }
    },
    special: {
      rend: {
        universalMonsterAbility: "Rend",
        type: "Ex",
        weaponName: 9
      },
      "burst of speed": {
        type: "Ex",
        text: "Once every 1d4 rounds, a ngoga can summon a burst of energy in order to move twice its base speed in a single move action."
      },
      stench: {
        universalMonsterAbility: "Stench",
        duration: "10 rounds",
        saveDC: 10
      }
    }
  },

  "Behemoth Golem": {
    source: "Lost Kingdoms",
    creatureType: "construct",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Colossal",
    hd: 23,
    hdVal: 10,
    cr: 17,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 42,
      dex: 9,
      con: "-",
      int: "-",
      wis: 15,
      cha: 1
    },
    feats: [],
    attacks: [
      {
        weapon: "Gore",
        name: "Gore",
        damage: "1d6",
        type: "primary"
      },
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
        value: 15,
        damageType: "adamantine"
      },
      naturalArmor: 30
    },
    space: "30 ft.",
    reach: "30 ft.",
    environment: "temperate and warm deserts",
    visualDescription: "No text supplied",
    description: "Behemoth golems are elephantine constructs once crafted by the artificers of the ancient Jistka Imperium. Rather than use elemental spirits to fuel the constructs' animation, artificers made pacts with demons, daemons, and devils from the evil Outer Planes, and bound their spirits to these titanic horrors to bring them to life. Though from a distance they resemble armored mammoths with a castle attached to their back, a behemoth golem's flesh is in fact made of tons of mined stone, and its tusks and teeth are carved from rare minerals similar in density to ivory. The main body of a behemoth golem is 40 feet tall, with the highest part of the tower reaching 60 feet. Construction While the methods for creating a behemoth golem are largely considered lost along with so much Jistkan lore, a character who finds herself in possession of one of Jistka's fabled behemoth golem manuals gains the knowledge required to construct such a mammoth being. A behemoth golem is built from 70,000 pounds of rocks and rare minerals treated with profane oils worth 25,000 gp. Behemoth Golem CL 18th; Price 305,000 gp CONSTRUCTION Requirements Craft Construct, earthquake, geas/quest, mage's magnificent mansion, wish, creator must be at least caster level 18th; Skill Craft (stonemasonry) and Knowledge (history) DC 26; Cost 165,000 gp",
    organization: "solitary",
    spellLikeAbilities: [],
    skills: {},
    special: {
      quake: {
        type: "Su",
        text: "As a standard action once per day, a behemoth golem can stomp its two front feet down, creating a ripple of destruction in a 60-foot cone. This effect is otherwise identical to earthquake (caster level 17th)."
      },
      trample: {
        universalMonsterAbility: "Trample",
        damage: "3d6+24",
        saveDC: 10
      },
      castle: {
        type: "Ex",
        text: "A behemoth golem has a small stronghold built onto its back. Up to eight Medium creatures can occupy this tower by climbing onto the behemoth golem with a DC 25 Climb check (DC 10 if the golem is willing). A creature occupying the tower can choose either to hide in the castle's interior, gaining total cover as long as it remains within the structure but losing the ability to attack anything outside of the tower, or to stand on the parapet around the perimeter of the tower, gaining partial cover thanks to the battlement surrounding the walkway. A behemoth golem's castle moves with the creature itself, and though creatures occupying the castle count as occupying the same square as the golem, they cannot be engaged in melee unless their opponent is also occupying the castle. A behemoth golem can shake off unwanted occupants by making a combat maneuver check as a full-round action; any creatures currently occupying the castle must succeed at a Reflex save (DC equal to the result of the behemoth golem's combat maneuver check). Creatures standing on the parapet that fail their save fall out of the castle, landing in the nearest empty square and taking 5d6 points of falling damage (6d6 if standing on the uppermost parapet); creatures hiding within the castle that fail their saves are jumbled about and take 10d6 points of bludgeoning damage (Reflex DC for half damage). Immunity to Magic (Su) A behemoth golem is immune to any spell or spell-like ability that allows spell resistance. In addition, certain spells and abilities function differently against the creature. • A stone to flesh spell negates a behemoth golem's damage reduction for 1 round. • A transmute rock to mud spell slows a behemoth golem as the slow spell for 1d4 rounds (no save). • A magical attack that deals acid damage heals 1 point of damage for each 3 points of damage the attack would otherwise deal. If the amount of healing would cause the golem to exceed its full normal hit points, it gains any excess as temporary hit points. A behemoth golem gets no save against acid effects."
      }
    }
  },

  "Vescavor Swarm": {
    source: "Lost Kingdoms",
    creatureType: "outsider",
    subTypes: [
      "chaotic",
      "evil",
      "extraplanar"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Diminutive",
    hd: 5,
    hdVal: 10,
    cr: 5,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30,
      maneuverability: "Good",
      fly: 40
    },
    abilities: {
      str: 7,
      dex: 17,
      con: 16,
      int: 4,
      wis: 13,
      cha: 12
    },
    feats: [
      {
        name: "Blind-Fight",
        type: "Combat"
      },
      {
        name: "Lightning Reflexes",
        type: "General"
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
        specialAbility: "distraction",
        damage: "2d6"
      }
    ],
    immunities: [
      "swarm traits",
      "Immune to poison, weapon damage"
    ],
    defense: {
      SR: {
        value: 16
      },
      naturalArmor: 2
    },
    space: "10 ft.",
    reach: "0 ft.",
    environment: "any (the Abyss)",
    visualDescription: "No text supplied",
    description: "And those who linger near the Worldwound eventually discover that more than demons clawed through the rift between worlds. Once known only to the lightless crevices and shrieking half-live jungles of the Abyss, the yammering, gnashing stray teeth of the Outer Rifts have also been unleashed upon Golarion-the gluttonous vermin of the Abyss called vescavors.",
    organization: "solitary, pair, plague (3-12), or apocalypse (16-30)",
    languages: "Abyssal",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 6
      },
      Perception: {
        ranks: 5
      },
      Stealth: {
        ranks: 5
      }
    },
    special: {
      distraction: {
        type: "Ex",
        preText: "DC 15"
      },
      ravenous: {
        type: "Ex",
        text: "Vescavors can devour nearly anything, with the exception of adamantine. If the swarm attacks an object or structure, the vescavors ignore its hardness if it is made of any substance other than adamantine. Additionally, every round that a creature is in the same space as the swarm, the vescavors begin devouring one object on the creature. The object takes half its maximum hit points in damage and gains the broken condition. If the vescavors attack an object with the broken condition, it is destroyed. An attended or magic object can make a DC 15 Reflex save to negate this effect. The save DC is Constitution-based."
      },
      traumatizing: {
        type: "Su",
        text: "Vescavors embody the meanest depravities of the Outer Rifts, and walking among them is akin to being trapped in the Abyss itself. Any creature that spends more than 3 rounds inside a vescavor swarm must succeed at a DC 13 Will save or gain one of the types of madness presented on page 250 of the Pathfinder RPG GameMastery Guide. Roll on the Types of Insanity table to determine which type of insanity affects the creature-the creature does not make another Will save against the specific insanity. This affliction is permanent, but can be healed as detailed in the Curing Insanity section of the Sanity and Madness rules. The save DC is Charisma-based."
      },
      gibber: {
        type: "Su",
        text: "Vescavors yammer the endless chorus of the Abyss. Any creature within 15 feet of a vescavor swarm or inside it must succeed at a DC 15 Will save or be confused for 1 round. This is a mind-affecting compulsion insanity effect. A creature that saves cannot be affected by the same vescavor swarm's gibbering for 24 hours. The save DC is Constitution-based.",
        preText: "15 ft."
      }
    },
    resistances: [
      {
        damageType: "fire",
        value: 10
      },
      {
        damageType: "electricity",
        value: 10
      }
    ]
  },

  "Inverted Giant": {
    source: "Lost Kingdoms",
    creatureType: "humanoid",
    subTypes: [
      "giant"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Huge",
    hd: 16,
    hdVal: 8,
    cr: 11,
    racialFeatures: [
      "Blindsight 60 ft."
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 29,
      dex: 14,
      con: 20,
      int: 9,
      wis: 11,
      cha: 16
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
        name: "Critical Focus",
        type: "Combat"
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
        name: "Iron Will",
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
        specialAbility: "grab",
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
            value: "1d6",
            appliesTo: "damageType",
            damageType: "energy"
          }
        ],
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 15
    },
    space: "15 ft.",
    reach: "15 ft.",
    environment: "any",
    visualDescription: "No text supplied",
    description: "Perhaps one of the most disturbing of the runelords' creations was the inverted giant, a hideous monstrosity created when a runelord was displeased with a particular giant minion. Through despicable arcana long lost to the ages, giants were ritually bound and transformed so that they would continue to live and think, but only as monstrous caricatures of themselves, their bodies turned inside out in the most painful and gruesome of punishments. Needless to say, few inverted giants tried their masters' patience again, and the unimaginable pain they suffered throughout the rest of their days served as a maddening punishment that would remind them of their insolence until their merciful deaths. Before the Starstone fell and obliterated Thassilon, many of the runelords and their servants enchanted their inverted giant minions, freezing the tormented creatures in stasis so that centuries later they would continue to protect their masters' holdings, their mutilated organs providing sensory information among cunningly-looped entrails and viscera preserved by rune magic. Those who find themselves exploring Thassilonian dungeons and ruins sometimes stumble upon such horrors, inadvertently releasing the monsters and restoring them to raging life and madness, the pain of their mutilated bodies having long since driven them to insanity and burning hatred. No two inverted giants look the same, though some features remain fairly consistent between them. Instead of a head, most possess little more than a gaping maw the size of their neck, jagged bones and bits of skull serving as teeth for a monstrous mouth. They have no true eyes-what oracular systems they once had are now embedded somewhere near their sternums-but instead possess an innate sense of direction, and through the dark arcana that surges through their beings they can sense the location of their prey perfectly. Their moist, splotched bodies are marked with runes, and their muscles and bones are often visible through their translucent flesh. Inverted giants understand speech, but their deformed mouths rarely work well enough for them to be understood by others. The average inverted giant is over 20 feet tall and weighs 1,400 pounds.",
    organization: "solitary",
    languages: "Giant, Thassilonian (can't speak)",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 5
      },
      Intimidate: {
        ranks: 8
      },
      Perception: {
        ranks: 9
      }
    },
    special: {
      grab: {
        universalMonsterAbility: "Grab"
      },
      "rock throwing": {
        universalMonsterAbility: "Rock Throwing",
        type: "Ex",
        range: "120 ft."
      },
      runes: {
        type: "Ex",
        text: "Whenever a rune giant is affected by a spell or spell-like ability, it can cause the runes covering its body to flash with light. All creatures within 10 feet of the giant must make a DC 21 Fortitude save or be blinded for 1 round. The saving throw is Charisma-based."
      },
      "swallow whole": {
        universalMonsterAbility: "Swallow Whole",
        damage: "2d8+13 bludgeoning damage",
        hp: "15 hp",
        AC: "AC 17"
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        value: null
      },
      "rock catching": {
        universalMonsterAbility: "Rock Catching"
      },
      "fear aura": {
        universalMonsterAbility: "Fear Aura",
        saveDC: 10,
        range: 60
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
      },
      {
        damageType: "fire",
        value: 10
      }
    ]
  },

};
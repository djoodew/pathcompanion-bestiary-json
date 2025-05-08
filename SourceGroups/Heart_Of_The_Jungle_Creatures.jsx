
export const Heart_Of_The_JungleCreatures = {
  "Angazhani (High Girallon)": {
    source: "Heart Of The Jungle",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Large",
    hd: 12,
    hdVal: 10,
    cr: 9,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Scent",
      "See Invisibility"
    ],
    speed: {
      base: 30,
      climb: 30
    },
    abilities: {
      str: 21,
      dex: 17,
      con: 18,
      int: 12,
      wis: 14,
      cha: 14
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
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Multiweapon Fighting",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Throwing axe",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Throwing axe",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "4 Throwing axe",
        damage: "1d6"
      },
      {
        weapon: "Throwing axe",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "4 Throwing axes",
        damage: "1d6"
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
        specialAbility: "rend",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Throwing axe",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "4 Throwing axes",
        damage: "1d6"
      }
    ],
    immunities: [
      "Immune to electricity, poison"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "cold iron or good"
      },
      SR: {
        value: 19
      },
      naturalArmor: 8
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "warm jungle",
    visualDescription: "This horned, albino ape has four arms and thick white fur braided with bone fetishes and trophies. It carries a strangely shaped throwing axe.",
    description: "Physically, high girallons are larger, more powerful versions of their lesser cousins. Yet the most dangerous thing about the angazhani (as the creatures call themselves) is not their strength, but rather their intellect. For behind each angazhani's fury lies a cold, calculating mind. Whether this intelligence is the product of evolution or meddling by unholy powers, all angazhani honor the demon lord Angazhan. Reclusive by nature, high girallon clans settle the most secluded depths of the jungles, generally inhabiting ruined cities and misty mountain temples. There they rule as divine priestkings over tribes of lesser apes. These congregations sometimes even include humanoid slaves or cultists, though the angazhani prefer raiding and collect tribute over commanding direct service. They rarely reveal themselves to outsiders, and instead quietly gather strength against the day their patron sends them out to claim all the world's forests. High girallons stand 9 feet tall and weigh nearly a thousand pounds. They often dress in hides, and they fight with exotically shaped throwing axes or sacrificial knives.",
    organization: "solitary, tribe (2-4 angazhani, 4-8 girallons, and 12-24 charau-ka), or empire (8-12 angazhani, 12-20 girallons, and 50-100 charau-ka)",
    languages: "Abyssal, Common, Polyglot",
    gear: "masterwork hide armor, masterwork throwing axes (8), leather axe harness",
    spellLikeAbilities: [
      {
        name: "see invisibility",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "deeper darkness",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "dimension door",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "dispel magic",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "dominate monster",
        casterLevel: 14,
        timesPerDay: 3
      },
      {
        name: "fear",
        casterLevel: 14,
        timesPerDay: 3
      }
    ],
    skills: {
      Climb: {
        ranks: 4
      },
      Intimidate: {
        ranks: 9
      },
      "Knowledge (religion)": {
        ranks: 13
      },
      Perception: {
        ranks: 6
      },
      Stealth: {
        ranks: 4
      },
      Survival: {
        ranks: 9
      }
    },
    special: {
      rend: {
        universalMonsterAbility: "Rend",
        type: "Ex",
        weaponName: 7
      },
      "martial training": {
        type: "Ex",
        text: "Because of their high intelligence, angazhani are proficient with light and medium armors, simple weapons, and one martial weapon of choice."
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
        damageType: "fire",
        value: 10
      }
    ]
  },

  "Giant Botfly": {
    source: "Heart Of The Jungle",
    creatureType: "vermin",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Tiny",
    hd: 1,
    hdVal: 8,
    cr: "1/3",
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 5,
      maneuverability: "Good",
      fly: 60
    },
    abilities: {
      str: 2,
      dex: 14,
      con: 10,
      int: "-",
      wis: 11,
      cha: 2
    },
    feats: [
      {
        name: "Weapon Finesse",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Sting",
        name: "Sting",
        specialAbility: "infestation",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to mind-affecting effects"
    ],
    defense: {},
    space: "2-1/2 ft.",
    reach: "0 ft.",
    environment: "warm jungle",
    visualDescription: "This foot-long, gray-and-black-striped insect looks like a cross between a bee and fly, with an oversized head and bulbous eyes.",
    description: "Botflies are perhaps the most disgusting vermin native to the Expanse. Explorers tell sickening tales of removing maggots from living hosts-or worse, comrades eaten alive by larvae. Once a botf ly finds a warm-blooded host, it uses its proboscis to insert eggs into the host's flesh. When the eggs hatch, the larvae feed upon the host until they mature into adult flies and exit.",
    organization: "solitary, pair, or colony (10-30)",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 0
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
      infestation: {
        type: "Ex",
        text: "Upon each successful sting attack, the giant botfly implants an egg in the victim subcutaneously. Each implanted egg reacts to the warmth of the victim's body, triggering its hatching. One day later, the egg releases a pupa that devours the host's flesh as it develops, growing to the size of a small mouse, at which point it reaches its larval stage. If left untreated, the larva continues to develop until it kills the host or 1 week has passed, at which point it burrows out of the body and drops to the ground, where it transforms into an adult giant botfly. Individual larvae may be squeezed or cut out of the host with a DC 10 Heal check, though each attempt inflicts 1d4 points of damage whether or not it's successful. A cure disease spell destroys all larvae without further harm to the host. Giant botfly larvae: infestation; save Fort DC 10; onset 1 day; frequency 1/day for 1 week; effect 1 Con damage per larva."
      }
    }
  },

  "Botfly Swarm": {
    source: "Heart Of The Jungle",
    creatureType: "vermin",
    subTypes: [
      "swarm"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Fine",
    hd: 9,
    hdVal: 8,
    cr: 4,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 0,
      maneuverability: "Good",
      fly: 60
    },
    abilities: {
      str: 2,
      dex: 11,
      con: 10,
      int: "-",
      wis: 11,
      cha: 2
    },
    feats: [],
    attacks: [
      {
        weapon: "swarm",
        name: "swarm",
        specialAbility: "infestation",
        damage: "2d6"
      }
    ],
    immunities: [
      "Immune to mind-affecting effects, weapon damage"
    ],
    defense: {},
    space: "10 ft.",
    reach: "0 ft.",
    environment: "warm jungles and swamps",
    visualDescription: "Like a cloud of black dust, a swirling swarm of insects hovers in the air. From within comes the low, droning buzz of thousands of tiny flies.",
    description: "Common to sweltering jungles, warm swamplands, and lazy riverbanks, these pestilent fly swarms seek humanoid hosts for their eggs. While not as physically dangerous as their giant cousins, implanted botf ly larvae typically carry diseases that spread to the host. Infestations Parasites such as botf ly larvae cause infestations, a type of aff liction similar to diseases. Infestations can only be cured through specific means; otherwise, no matter how many saving throws are made, the infestation continues to aff lict the target. While a remove disease spell (or similar effect) instantly halts an infestation, immunity to disease offers no protection, as the infestation itself is caused by parasites.",
    organization: "solitary or colony (2-20 swarms)",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 0
      }
    },
    special: {
      disease: {
        universalMonsterAbility: "Disease",
        name: ":",
        type: "Ex",
        text: "ease (Ex): Botfly larvae: infestation; save Fort DC 14; onset 1 day; frequency 1/day; effect 1d4 Con damage."
      },
      suffocation: {
        type: "Ex"
      },
      infestation: {
        type: "Ex",
        text: "A living creature injured by a botfly swarm's attack must make a DC 14 Fortitude save or be infested with the swarm's larvae. The larvae may be cut out of the host with a DC 15 Heal check, though each attempt inflicts 1d8 points of damage whether or not it's successful. A cure disease spell destroys all larvae without further harm to the host."
      }
    }
  },

  Tobongo: {
    source: "Heart Of The Jungle",
    creatureType: "plant",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Gargantuan",
    hd: 14,
    hdVal: 8,
    cr: 12,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 35,
      dex: 8,
      con: 26,
      int: 14,
      wis: 16,
      cha: 18
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Slam",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Natural Attack",
        type: "Monster",
        value: "Slam",
        choiceSource: "Improved Natural Attack"
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
        specialAbility: "grab",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Rock",
        name: "Rock",
        damage: "4d6"
      }
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "slashing"
      },
      naturalArmor: 22
    },
    space: "20 ft.",
    reach: "20 ft.",
    environment: "warm jungles solitary or grove (2-7)",
    visualDescription: "Tearing its elephantine roots free from the soil, an enormous tree unfurls long, tangled branches into arms ending in massive claws.",
    description: "A tobongo acts as a regular treant.",
    organization: "",
    languages: "Polyglot, Sylvan, Treant; treespeech",
    spellLikeAbilities: [
      {
        name: "entangle",
        casterLevel: 11,
        timesPerDay: -1
      }
    ],
    skills: {
      Diplomacy: {
        ranks: 10
      },
      Intimidate: {
        ranks: 12
      },
      "Knowledge (local)": {
        ranks: 12
      },
      "Knowledge (nature)": {
        ranks: 12
      },
      Perception: {
        ranks: 4
      },
      "Sense Motive": {
        ranks: 4
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
      "curse of barkflesh": {
        type: "Su",
        text: "Following a successful grapple, a tobongo can dig its spiky branches into its victim, infecting him with a foul and potent curse. Unless he succeeds at a DC 20 Fortitude save, the victim's flesh immediately begins to harden and grow uncontrollably like tree bark, and he takes 1d4 points of Dexterity damage per day until his Dexterity reaches 0. At this point, the victim turns entirely stiff, grows roots, and transforms into a new, unintelligent tree, preventing any form of resurrection short of wish or miracle. The effect can be slowed by pruning the victim once per hour, slicing off the strange growths. Pruning inflicts 1d6 points of damage on the victim, but it negates the need to make a new Fortitude save. If the victim goes without pruning for more than an hour, the barkflesh takes over and he must immediately make the Fortitude save for the day or suffer the Dexterity damage. The save DC is Wisdom-based. Curse of Barkflesh: Grapple- injury; save Fort DC 20; frequency 1/ day; effect 1d4 Dex damage, when Dex reaches 0, target transforms into a tree."
      },
      "rock throwing": {
        universalMonsterAbility: "Rock Throwing",
        type: "Ex",
        range: "240 ft."
      },
      "shake the earth": {
        type: "Ex",
        text: "A rooted tobongo can, as a full-round action, uproot itself, buckling the surrounding earth in a 60-foot radius. Living creatures within the radius must make a DC 29 Reflex save or fall prone and take 1d6 points of damage. Man-made structures within the area of effect must make a DC 29 Fortitude save or take 4d6 points of structural damage. Once uprooted, the tobongo cannot use this action again until it re-roots itself. It takes the creature at least 1 hour to root effectively. The save DC is Strength-based. Treespeech (Ex) A tobongo has the ability to converse with plants as if subject to a continual speak with plants spell, and most plants greet it with an attitude of friendly or helpful."
      },
      trample: {
        universalMonsterAbility: "Trample",
        damage: "4d6+18",
        saveDC: 10
      },
      "animate trees": {
        type: "Sp",
        text: "A tobongo can animate any trees within 180 feet at will, controlling up to two trees at a time. It takes 1 full round for a tree to uproot itself, after which it moves at a speed of 10 feet and fights as a standard treant, gaining the treant's vulnerability to fire (although it has only one slam attack and lacks the treant's animation and rock-throwing abilities). If the tobongo that animated it terminates the animation, moves out of range, or is incapacitated, the tree immediately takes root wherever it is and returns to its normal state."
      },
      "double damage against objects": {
        type: "Ex",
        text: "A tobongo or animated tree that makes a full attack against an object or structure deals double damage."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    },
    resistances: [
      "vulnerability to fire"
    ]
  },

};
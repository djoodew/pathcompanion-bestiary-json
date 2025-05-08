
export const Animal_ArchiveCreatures = {
  Moose: {
    source: "Animal Archive",
    creatureType: "animal",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 4,
    hdVal: 8,
    cr: 3,
    racialFeatures: [
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 19,
      dex: 15,
      con: 18,
      int: 2,
      wis: 14,
      cha: 7
    },
    feats: [
      {
        name: "Endurance",
        type: "General"
      },
      {
        name: "Run",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Gore",
        name: "Gore",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Hoof",
        name: "2 Hooves",
        damage: "1d4",
        type: "secondary"
      }
    ],
    defense: {
      naturalArmor: 3
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "cold forests",
    visualDescription: "A slightly goofy, bent-nosed face does little to detract from the imposing height and bulk of this ungulate.",
    description: "Their daunting height and bulk, combined with the intimidating antlers of the males, means that moose are rarely threatened by natural predators, and when cornered by hunters they are truly a force to be reckoned with. Moose Companions Starting Statistics: Size Medium; Speed 40 ft.; AC +2 natural armor; Attack gore (1d6), 2 hooves (1d3); Ability Scores Str 12, Dex 15, Con 14, Int 2, Wis 13, Cha 7; Special Qualities Low-Light Vision. 7th-Level Advancement: Size Large; AC +3 natural armor; Attack gore (1d8), 2 hooves (1d4); Ability Scores Str +6, Dex -2, Con +4; Special Attacks powerful charge.",
    organization: "solitary or pair",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 4
      }
    },
    special: {
      "powerful charge": {
        universalMonsterAbility: "Powerful Charge",
        type: "Ex",
        weaponName: 6
      }
    }
  },

  Llama: {
    source: "Animal Archive",
    creatureType: "animal",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 1,
    hdVal: 8,
    cr: "1/2",
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 12,
      dex: 13,
      con: 15,
      int: 2,
      wis: 12,
      cha: 9
    },
    feats: [
      {
        name: "Endurance",
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
    environment: "cold or temperate hills or mountains",
    visualDescription: "This shaggy, hoofed quadruped sports an elongated neck and large, crooked teeth.",
    description: "Perhaps llamas' most distinctive feature is their long necks. Rival males violently bump their necks against one another during fights for dominance among the herd, but overall these social animals are remarkably tame. Llama Companions Starting Statistics: Size Small; Speed 40 ft.; AC +1 natural armor; Attack bite (1d4); Ability Scores Str 11, Dex 16, Con 12, Int 2, Wis 13, Cha 9; Special Qualities Low-Light Vision. 4th-Level Advancement: Size Medium; Attack bite (1d6); Ability Scores Str +4, Dex -2, Con +4.",
    organization: "solitary, pair, or herd (3-15)",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
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
      spit: {
        type: "Ex",
        text: "Once per hour, a llama can regurgitate the contents of its stomach, spitting the foul material at a single target within 10 feet. The target must succeed at a DC 12 Fortitude save or be sickened for 1d4 rounds. The save DC is Constitution-based.",
        preText: "+1 ranged touch"
      }
    }
  },

  Panda: {
    source: "Animal Archive",
    bear: true,
    creatureType: "animal",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 3,
    hdVal: 8,
    cr: 2,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 17,
      dex: 10,
      con: 15,
      int: 2,
      wis: 11,
      cha: 14
    },
    feats: [
      {
        name: "Endurance",
        type: "General"
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
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 3
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "temperate or warm jungles",
    visualDescription: "This black-and-white-furred bear is about as long in the body as an average human-but much rounder.",
    description: "Pandas spend most of their lives alone, avoiding even other pandas except during mating season. They are excellent climbers, with front paws configured much like humans' opposable thumbs to help them grip bamboo stalks and tree branches. Bamboo shoots make up almost their entire diet, although pandas are technically omnivorous. In part because of the low nutritional value of bamboo, pandas lack the energy for aggression, and avoid danger wherever possible. Panda Companions Starting Statistics: Size Small; Speed 30 ft.; AC +2 natural armor; Attack bite (1d4), 2 claws (1d3); Ability Scores Str 13, Dex 12, Con 14, Int 2, Wis 13, Cha 9; Special Qualities Low-Light Vision. 7th-Level Advancement: Size Medium; AC +3 natural armor; Attack bite (1d6), 2 claws (1d4); Ability Scores Str +4, Dex -2, Con +4; Special Attacks powerful bite.",
    organization: "solitary or pair",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 1,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Perception: {
        ranks: 1
      },
      Survival: {
        ranks: 1
      }
    },
    special: {
      "powerful bite": {
        type: "Ex",
        text: "A panda applies twice its Strength bonus to bite damage."
      }
    }
  },

  Armadillo: {
    source: "Animal Archive",
    creatureType: "animal",
    subTypes: [],
    legs: 4,
    arms: 0,
    alignments: [
      "Neutral"
    ],
    size: "Tiny",
    hd: 1,
    hdVal: 8,
    cr: "1/4",
    racialFeatures: [
      "Scent"
    ],
    speed: {
      base: 30,
      burrow: 5
    },
    abilities: {
      str: 4,
      dex: 15,
      con: 11,
      int: 2,
      wis: 12,
      cha: 9
    },
    feats: [
      {
        name: "Skill Focus",
        type: "General",
        value: "Perception",
        choiceSource: "Skill Focus"
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
    defense: {
      naturalArmor: 2
    },
    space: "2-1/2 ft.",
    reach: "0 ft.",
    environment: "temperate or warm plains",
    visualDescription: "This round, dust-colored creature's snout pokes out of its bony armor shell.",
    description: "These squat-bodied mammals are easily recognizable thanks to their distinctive leathery shell, which provides them with natural protection against numerous dangers and predators in their native environs. Armadillos have very poor eyesight, perceiving the world largely through scent and touch. They are exceptional diggers, and burrow both to find food and to make their dens. When an armadillo goes underwater, it swallows air to increase its buoyancy, inflating its stomach up to twice its normal size so it won't sink. These stats represent an average armadillo, which is 2-1/2 feet long and weighs roughly 10 pounds, but other breeds can range from 6 inches to up to 5 feet long, and weigh up to 130 pounds in the case of giant armadillos.",
    organization: "solitary",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 1
      },
      Swim: {
        ranks: 0,
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

  Rabbit: {
    legs: 4,
    arms: 0,
    source: "Animal Archive",
    creatureType: "animal",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Tiny",
    hd: 1,
    hdVal: 8,
    cr: "1/6",
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 50
    },
    abilities: {
      str: 3,
      dex: 16,
      con: 9,
      int: 2,
      wis: 12,
      cha: 5
    },
    feats: [
      {
        name: "Run",
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
    reach: "0 ft.",
    environment: "cold forests or plains",
    visualDescription: "This small, furry creature has long ears and oversized feet.",
    description: "Rabbits are burrowing herbivores with short tails, long ears for sensing predators, and powerful hind legs that allow them to leap quickly to safety in an emergency. They are frequently confused with rodents, but can be distinguished thanks to their two sets of incisor teeth, which are positioned one behind the other. An average rabbit is between 8 and 20 inches long and weighs 1 to 4 pounds.",
    organization: "solitary, pair, or down (3-16)",
    spellLikeAbilities: [],
    skills: {
      Stealth: {
        ranks: 1
      },
      Acrobatics: {
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {}
  },

  Squirrel: {
    legs: 2,
    arms: 2,
    source: "Animal Archive",
    creatureType: "animal",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Diminutive",
    hd: 1,
    hdVal: 8,
    cr: "1/8",
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 20,
      climb: 20
    },
    abilities: {
      str: 2,
      dex: 19,
      con: 9,
      int: 2,
      wis: 12,
      cha: 8
    },
    feats: [
      {
        name: "Acrobatic",
        type: "General"
      },
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
      }
    ],
    defense: {},
    space: "1 ft.",
    reach: "0 ft.",
    environment: "any forests",
    visualDescription: "A small, bright-eyed bundle of fur, this woodland creature has a bushy tail as big as the rest of its body.",
    description: "Squirrels are surprisingly wily creatures. When they know they are being watched, they pretend to bury nuts, but instead sneak them into their mouths and take them away to hide elsewhere when no one is watching. They eat most things, occasionally even preying on small snakes and birds. The average squirrel is roughly 1-1/2 feet long and weighs 1 pound.",
    organization: "solitary or pair",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 1
      },
      Climb: {
        ranks: 1
      }
    },
    special: {}
  },

};
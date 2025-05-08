
export const Ultimate_MagicCreatures = {
  "Blue-Ringed Octopus": {
    legs: 8,
    arms: 0,
    source: "Ultimate Magic",
    creatureType: "animal",
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Tiny",
    hd: 1,
    hdVal: 8,
    cr: "1/2",
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 20,
      swim: 30
    },
    abilities: {
      str: 8,
      dex: 21,
      con: 10,
      int: 2,
      wis: 13,
      cha: 3
    },
    feats: [
      {
        name: "Multiattack",
        type: "Monster"
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
        specialAbility: "poison",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Tentacle",
        name: "Tentacles",
        damage: "1d4",
        type: "secondary"
      }
    ],
    defense: {},
    space: "2-1/2 ft.",
    reach: "0 ft.",
    environment: "temperate or cold aquatic",
    visualDescription: "Presented here are the base animal statistics for all of the most commonly used familiars-of course, these statistics can also be used for normal animals as well. Small animals like these use Dexterity to modify Climb and Swim checks.",
    description: "Blue-ringed octopuses are aquatic animals capable of a surprising amount of cunning. They cannot survive out of water.",
    organization: "solitary",
    spellLikeAbilities: [],
    skills: {
      "Escape Artist": {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 10
          }
        ]
      },
      Stealth: {
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
      "ink cloud": {
        type: "Ex",
        text: "While within water, an octopus can emit a 5-foot-radius sphere of ink once per minute as a swift action. This ink provides total concealment and persists for 1 minute. Jet (Ex) The octopus can jet 60 feet in a straight line as a fullround action. This does not provoke attacks of opportunity."
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Bite-injury; save Fort DC 10; frequency 1/round for 6 rounds; effect 1 Str; cure 1 save.",
        saveDC: 10
      },
      jet: {
        universalMonsterAbility: "Jet",
        distance: "60 ft."
      },
    }
  },

  "Donkey Rat": {
    legs: 4,
    arms: 0,
    source: "Ultimate Magic",
    creatureType: "animal",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Small",
    hd: 1,
    hdVal: 8,
    cr: "1/4",
    racialFeatures: [
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 30,
      swim: 20
    },
    abilities: {
      str: 6,
      dex: 17,
      con: 13,
      int: 2,
      wis: 13,
      cha: 4
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
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "temperate coast or forest",
    visualDescription: "Presented here are the base animal statistics for all of the most commonly used familiars-of course, these statistics can also be used for normal animals as well. Small animals like these use Dexterity to modify Climb and Swim checks.",
    description: "Donkey rats are brown or snowy white rodents the size of small dogs, with long legs and short, furry tails. These statistics can also be used for capybaras.",
    organization: "solitary, pair, or nest (3-12)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 0
      },
      Stealth: {
        ranks: 5
      },
      Swim: {
        ability: "dex",
        ranks: 0
      }
    },
    special: {}
  },

  Hedgehog: {
    legs: 4,
    arms: 0,
    source: "Ultimate Magic",
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
      base: 20
    },
    abilities: {
      str: 1,
      dex: 16,
      con: 6,
      int: 2,
      wis: 12,
      cha: 7
    },
    feats: [
      {
        name: "Athletic",
        type: "General"
      }
    ],
    attacks: [],
    defense: {
      naturalArmor: 1
    },
    space: "1 ft.",
    reach: "0 ft.",
    environment: "tropical or temperate forests",
    visualDescription: "Presented here are the base animal statistics for all of the most commonly used familiars-of course, these statistics can also be used for normal animals as well. Small animals like these use Dexterity to modify Climb and Swim checks.",
    description: "Hedgehogs are spiny, insectivorous mammals. When threatened, a hedgehog rolls up into a spiny ball as a defense mechanism.",
    organization: "solitary or pair",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 0
      },
      Stealth: {
        ranks: 1
      },
      Swim: {
        ranks: 0
      }
    },
    special: {}
  },

  "House Centipede": {
    source: "Ultimate Magic",
    legs: 200,
    arms: 0,
    creatureType: "vermin",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Tiny",
    hd: 1,
    hdVal: 8,
    cr: "1/8",
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 40,
      climb: 40
    },
    abilities: {
      str: 1,
      dex: 17,
      con: 10,
      int: "-",
      wis: 10,
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
        weapon: "Bite",
        name: "Bite",
        specialAbility: "poison",
        damage: "1d6",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to mind-affecting effects"
    ],
    defense: {
      naturalArmor: 2
    },
    space: "2-1/2 ft.",
    reach: "0 ft.",
    environment: "temperate or warm forest or underground",
    visualDescription: "Presented here are the base animal statistics for all of the most commonly used familiars-of course, these statistics can also be used for normal animals as well. Small animals like these use Dexterity to modify Climb and Swim checks.",
    description: "Multi-legged house centipedes can be found almost anywhere, and can have from 20 to more than 300 legs. Their bites are poisonous, and can daze the unwary.",
    organization: "solitary, pair, or colony (3-6)",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 0
      },
      Perception: {
        ranks: 0,
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
            value: 8
          }
        ]
      }
    },
    special: {
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Bite-injury; save Fort DC 10; frequency 1/round for 2 rounds; effect daze 1 round; cure 1 save.",
        saveDC: 10
      }
    }
  },

  "King Crab": {
    source: "Ultimate Magic",
    creatureType: "vermin",
    subTypes: [
      "aquatic"
    ],
    legs: 8,
    arms: 2,
    alignments: [
      "Neutral"
    ],
    size: "Tiny",
    hd: 1,
    hdVal: 8,
    cr: "1/4",
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30,
      swim: 20
    },
    abilities: {
      str: 7,
      dex: 15,
      con: 12,
      int: "-",
      wis: 10,
      cha: 2
    },
    feats: [],
    attacks: [
      {
        weapon: "Claw",
        name: "2 Claws",
        specialAbility: "grab",
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
    space: "2-1/2 ft.",
    reach: "0 ft.",
    environment: "any aquatic",
    visualDescription: "Presented here are the base animal statistics for all of the most commonly used familiars-of course, these statistics can also be used for normal animals as well. Small animals like these use Dexterity to modify Climb and Swim checks.",
    description: "King crabs are small crustaceans with eight legs and two pincers or claws. Aquatic scavengers, crabs can also survive on land for some time, but must return to the water or suffocate.",
    organization: "solitary or cast (2-12)",
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
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "1d2-2"
      },
      "water dependency": {
        type: "Ex",
        text: "Crabs can survive out of the water for 1 hour per point of Constitution. Beyond this limit, a crab runs the risk of suffocation, as if it were drowning."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  Thrush: {
    legs: 2,
    arms: 0,
    source: "Ultimate Magic",
    creatureType: "animal",
    bird: true,
    flying: true,
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Diminutive",
    hd: 1,
    hdVal: 8,
    cr: "1/3",
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 10,
      maneuverability: "Average",
      fly: 40
    },
    abilities: {
      str: 1,
      dex: 15,
      con: 6,
      int: 2,
      wis: 15,
      cha: 6
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
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {},
    space: "1 ft.",
    reach: "0 ft.",
    environment: "temperate forests",
    visualDescription: "Presented here are the base animal statistics for all of the most commonly used familiars-of course, these statistics can also be used for normal animals as well. Small animals like these use Dexterity to modify Climb and Swim checks.",
    description: "Thrushes are small, plump birds that eat fruit and insects. All thrushes are known for their beautiful songs, but thrush familiars are also capable of actual speech.",
    organization: "solitary, pair, or flock (3-12)",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 2
      },
      Perception: {
        ranks: 0
      }
    },
    special: {}
  },

  Turtle: {
    legs: 4,
    arms: 0,
    source: "Ultimate Magic",
    creatureType: "animal",
    reptile: true,
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
      base: 5,
      swim: 20
    },
    abilities: {
      str: 3,
      dex: 6,
      con: 8,
      int: 2,
      wis: 12,
      cha: 3
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
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 6
    },
    space: "2-1/2 ft.",
    reach: "0 ft.",
    environment: "temperate or tropical forests, oceans, and rivers",
    visualDescription: "Presented here are the base animal statistics for all of the most commonly used familiars-of course, these statistics can also be used for normal animals as well. Small animals like these use Dexterity to modify Climb and Swim checks.",
    description: "Turtles are slow-moving reptiles with hard shells that they can retreat into when threatened. Many turtles have flippers and are better suited for swimming than walking. These statistics can also be used for tortoises, which have feet instead of flippers and live in arid regions.",
    organization: "solitary",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 0
      },
      Swim: {
        ranks: 1
      }
    },
    special: {}
  },

};

export const The_Snows_Of_SummerCreatures = {
  "Polar Bear": {
    source: [
      "The Snows Of Summer",
      "Bestiary 5"
    ],
    bear: true,
    creatureType: "animal",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 5,
    hdVal: 8,
    cr: 5,
    racialFeatures: [
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 40,
      swim: 20
    },
    abilities: {
      str: 25,
      dex: 17,
      con: 23,
      int: 2,
      wis: 16,
      cha: 10
    },
    feats: [
      {
        name: "Endurance",
        type: "General"
      },
      {
        name: "Run",
        type: "General"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Survival",
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
        specialAbility: "grab",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 8
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "cold coastlines and plains",
    visualDescription: "Red gore stains this bear's muzzle, creating a striking contrast against its white fur.",
    description: "Polar bears swim along frigid coasts and wander icy plains looking for prey. They often eat seals plucked from holes in the ice, but will attack any creature when desperate or provoked. Unlike most animals, polar bears show little fear, and can be dangerous scavengers around arctic settlements. They can easily avoid conf lict by plunging into the icy waters, which they often do instead of engaging every threat. A polar bear's blubber gives it buoyancy, and its long neck keeps its head above water. Oversized paws with webbed toes propel it along steadily, and a polar bear can swim over 100 miles in a single day. Some arctic clans hunt polar bears as a significant source of food, and use the furs and bones for clothes and vital tools. Many of these cultures hold the bears sacred, and honor their deaths with rituals and ceremonies. Polar bears live, on average, 15-20 years, but arctic peoples have known individual bears that lived as long as 40 years. One of the largest animal predators to stalk the ice, an adult male polar bear can weigh 800 to 1,200 pounds, with females weighing 350 to 650 pounds.",
    organization: "solitary or pair",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 2
      },
      Survival: {
        ranks: 2
      },
      Swim: {
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
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  "Timber Wolf": {
    source: "The Snows Of Summer",
    creatureType: "animal",
    wolf: true,
    canine: true,
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 2,
    hdVal: 8,
    cr: 2,
    racialFeatures: [
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 17,
      dex: 19,
      con: 19,
      int: 2,
      wis: 16,
      cha: 10
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
        specialAbility: "trip",
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 4
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "cold forest or mountains",
    visualDescription: "A chilling chorus of howls echoes through the air as a massive, white-furred wolf emerges.",
    description: "Timber wolves range in color from white to gray to pitch black. The largest males can weigh 175 pounds. Timber wolves typically have longer legs and bigger paws to help traverse the difficult terrain in which they live. More importantly, their proportionally larger heads, held up by powerful neck muscles, allow them to drag down sizable herd animals. Hunts begin with a communal howl to unite the pack. They chase their prey over vast distances-sometimes over 50 miles-wearing prey down with fear and exhaustion. Using jaws capable of crushing bones and snapping spines, several timber wolves at a time might latch on to a victim and drag it to the ground. Their speed and pack instincts let them use coordinated attacks, flanking, and hit-and-run maneuvers. Group howling helps bind the pack together. The howls can be used for calling the pack to the hunt, determining the location of other pack members, communicating food sources, and even determining social order. Howls can be heard over vast distances and help establish a pack's territory, which averages 350 square miles. The power and majesty of timber wolves inspire many sentient races. For civilized folk, the wolf has come to embody a primitive evil, often playing the role of a villain in fairy tales. This has earned the animal an undeserved reputation for aggression. Among northern peoples, the wolf symbolizes strength and prowess in battle. Many tribes revere wolf totems, and some even claim in their folklore to be originally descended from wolves.",
    organization: "solitary, pair, or pack (3-20)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 1
      },
      Stealth: {
        ranks: 1
      },
      Survival: {
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      }
    },
    special: {
      trip: {
        universalMonsterAbility: "Trip"
      }
    }
  },

  "Frost Fir": {
    source: "The Snows Of Summer",
    creatureType: "plant",
    subTypes: [
      "cold"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Medium",
    hd: 2,
    hdVal: 8,
    cr: 1,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 15,
      dex: 10,
      con: 16,
      int: 11,
      wis: 12,
      cha: 9
    },
    feats: [
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Intimidate",
        choiceSource: "Skill Focus"
      }
    ],
    attacks: [
      {
        weapon: "Slam",
        name: "Slam",
        specialAbility: "sticky resin",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 2,
        damageType: "slashing"
      },
      naturalArmor: 3
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "cold and temperate forests",
    visualDescription: "The faint scent of pine sap accompanies this vaguely tree-shaped creature, which stands on two towering trunklike legs. Its arms resemble the branches of a snow-laden conifer.",
    organization: "solitary, pair, stand (3-6), or grove (7-12)",
    languages: "Sylvan, Treant",
    spellLikeAbilities: [],
    skills: {
      Intimidate: {
        ranks: 2
      },
      Perception: {
        ranks: 1
      },
      Stealth: {
        ranks: 4,
        bonuses: [
          {
            source: "inherent",
            value: 2,
            situational: true,
            note: "+6 in forests"
          }
        ]
      }
    },
    special: {
      "sticky resin": {
        type: "Ex",
        text: "A frost fir's bark constantly exudes a sticky resin that aids its combat maneuvers and natural attacks. The resin grants a frost fir a +2 circumstance bonus on all disarm, grapple, and steal combat maneuvers, as well as on saving throws against effects that cause it to drop something it is holding. Any creature that is damaged by a frost fir's slam attack, deals damage to a frost fir with a natural weapon or unarmed attack, or otherwise touches a frost fir (including with a grapple maneuver), must succeed at a DC 13 Reflex save or be coated with the frost fir's sticky resin. A creature affected by this resin takes a -2 penalty on all attack rolls and concentration checks (penalties from multiple contacts do not stack). Any enemy grappled by a frost fir takes a -2 penalty on attempts to break the grapple and to escape using the Escape Artist skill. Strong alcohol, universal solvent, or any amount of fire damage dealt to a creature coated in resin removes the resin. The save DC is Constitution-based."
      },
      freeze: {
        universalMonsterAbility: "Freeze",
        parenthetical: ""
      }
    }
  },

};
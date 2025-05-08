
export const Mystery_Monsters_RevisitedCreatures = {
  "Death Worm Leviathan": {
    source: "Mystery Monsters Revisited",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Gargantuan",
    hd: 15,
    hdVal: 10,
    cr: 11,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Tremorsense 60 ft."
    ],
    speed: {
      base: 30,
      burrow: 30
    },
    abilities: {
      str: 26,
      dex: 16,
      con: 21,
      int: 3,
      wis: 11,
      cha: 6
    },
    feats: [
      {
        name: "Awesome Blow",
        type: "Combat"
      },
      {
        name: "Improved Bull Rush",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
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
        specialAbility: "grab, poison",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Electrical jolt",
        name: "Electrical jolt",
        specialAbility: "Electrical jolt"
      }
    ],
    immunities: [
      "Immune to acid, electricity, poison"
    ],
    defense: {
      naturalArmor: 14
    },
    space: "20 ft.",
    reach: "20 ft.",
    environment: "warm deserts, hills, or plains",
    visualDescription: "This enormous worm has stony hide and acid-dripping jaws.",
    description: "Sometimes a pregnant death worm lays an especially promising egg among her brood, about twice as large as the others and with a nigh-impenetrable, brown-speckled shell. This egg requires even more warmth than the others in its clutch, and upon emerging the worm would rather devour its brethren than the meal left by its parent. Such rare specimens grow up to become death worm leviathans, and those few who have heard of the fell beasts know to fear them as well as to hold them in awe. Death worm leviathans possess powers nearly identical to those of their smaller kin, albeit at a much deadlier scale. In addition, their massive girth makes it even easier for them to consume prey both large and small, and a single leviathan might consume an entire desert village before its terrible hunger is sated.",
    organization: "solitary",
    languages: "Terran",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 10
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
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "60-ft. line",
        damage: "usable every 1d4 rounds"
      },
      "fast swallow": {
        type: "Ex"
      },
      "swallow whole": {
        universalMonsterAbility: "Swallow Whole",
        damage: "2d6+18 acid damage",
        hp: "15 hp",
        AC: "AC 17"
      },
      "corrosive blood": {
        type: "Ex",
        text: "See page 76 of Pathfinder RPG Bestiary 2.",
        preText: "DC 22"
      },
      "venomous skin": {
        type: "Ex",
        text: "See page 76 of Bestiary 2."
      },
      grab: {
        universalMonsterAbility: "Grab"
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Bite-injury or skin-contact; save Fort DC 22; frequency 1/round for 6 rounds; effect 1d4 Con; cure 2 consecutive saves.",
        saveDC: 10
      },
      "electrical jolt": {
        type: "Su",
        text: "See page 76 of Bestiary 2."
      }
    }
  },

  "Mokele-Mbembe": {
    source: "Mystery Monsters Revisited",
    creatureType: "animal",
    dinosaur: true,
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Huge",
    hd: 14,
    hdVal: 8,
    cr: 9,
    racialFeatures: [
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 30,
      swim: 30
    },
    abilities: {
      str: 28,
      dex: 13,
      con: 18,
      int: 2,
      wis: 15,
      cha: 11
    },
    feats: [
      {
        name: "Awesome Blow",
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
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Power Attack",
        type: "Combat"
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
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    defense: {
      naturalArmor: 14
    },
    space: "15 ft.",
    reach: "15 ft. (20 ft. with tail)",
    environment: "tropical lakes and rivers",
    visualDescription: "This massive saurian creature sports a triangular head with a mouth full of curved teeth, stretching forth from a long, snaking neck. Long spines run down its neck, back, and whiplike tail.",
    description: "The mokele-mbembe is a predatory saurian that measures up to 40 feet in length and weighs up to 10 tons. Inhabitants of the deep tropics, mokele-mbembe dwell in lakes, rivers, swamps and other aquatic regions where they feed on fish, birds, small mammals, and even reptiles. When food runs short and mokele-mbembe grow hungry, they have been known to seek prey from local tribes and villages. Despite being an aggressive hunter, a mokele-mbembe shares some traits with nonpredatory sauropods. Its body is massive and elephantine, with four long legs that end in webbed feet. Its neck is long and flexible like that of herbivorous dinosaurs or giraffes, but its head is triangular, with strong jaws and sharp teeth like a carnivore. A mokele-mbembe's hide is mottled greenish-brown and has the texture of tree bark. Large, defensive spines grow from its back. The mokele-mbembe's natural habitat normally lies far from populous regions. For this reason, they are rarely glimpsed by outsiders, though they are well known to locals who hunt in such lands. Many stories are told about the creatures' size, strength, and ferocity, and some groups even believe them to have a special sacred status as messengers of the gods-or agents of their wrath.",
    organization: "solitary, pair, or pack (3-6)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 7
      },
      Stealth: {
        ranks: 7
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      trample: {
        universalMonsterAbility: "Trample",
        damage: "1d8+13",
        saveDC: 10
      },
      "whip tail": {
        type: "Ex",
        text: "When not submerged, a mokele-mbembe can crack its tail as a standard action, creating a sonic boom in a 5-foot burst, up to 20 feet away. Any creature in the burst's area must succeed at a DC 21 Fortitude save or be stunned for 1 round. The save DC is Constitution-based. Other mokele-mbembe are immune to this effect."
      }
    }
  },

  "Sandpoint Devil": {
    source: "Mystery Monsters Revisited",
    creatureType: "outsider",
    subTypes: [
      "native"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Large",
    hd: 12,
    hdVal: 10,
    cr: 8,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 40,
      maneuverability: "Poor",
      fly: 60
    },
    abilities: {
      str: 22,
      dex: 17,
      con: 19,
      int: 8,
      wis: 17,
      cha: 16
    },
    feats: [
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Hover",
        type: "Monster"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
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
        weapon: "Hoof",
        name: "2 Hooves",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to fire, fear effects"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "cold iron"
      },
      SR: {
        value: 19
      },
      naturalArmor: 9
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "any (Varisia)",
    visualDescription: "This mangy, horse-like beast walks perversely upright. Ragged wings, a dragon's lengthy tail, and a wide mouth full of jagged teeth complete its vile appearance.",
    description: "When residents of the small town of Sandpoint on the southwestern coast of Varisia speak in low voices about \"the devil,\" they mean the dreadful creature that has menaced the community and its hinterlands for over a decade. Then again, most people don't speak of the Sandpoint Devil if they can help it. They say the monster knows when someone is talking about it, and a poor soul who can't hold his tongue is likely to glimpse the creature's grotesque silhouette in the sky on the next moonless night-an ill omen indeed. According to legend, sightings of the Sandpoint Devil presage times of great woe, whether for a single person or the entire town. Sometimes, those who see the creature or speak of it too freely vanish in the night, never to be seen again. Precise descriptions of the Sandpoint Devil vary depending on whom you ask, but most people agree that it resembles a large horse standing upright on its hind legs with leathery, ragged wings; a reptilian tail; red eyes that burn through the gloom; and a fanged muzzle that gives the creature a perpetual evil grin. Some say the devil commands fog and wind, others say it breathes gouts of flame or can literally frighten you to death, and still others say it can do all this and more. Whenever livestock are slaughtered in their pens or children disappear from their beds, townsfolk are quick to blame the Sandpoint Devil. The beast is also denounced (quietly) when a building burns to the ground or a farmer's crops wither. In short, the locals hang nearly all their ills on the devil. But not all residents consider it to be evil. Some believe that the creature is an ancient guardian of the Lost Coast, and its actions in service of that goal, however terrible they might seem, are not for mortals to understand. Of course, hearsay and rumors only go so far, and most people outside the region consider the Sandpoint Devil a tall tale at best. At worst, they say it's a hoax perpetrated by simple folk looking for attention or hoping to draw travelers and adventurers with coin to spend.",
    organization: "solitary",
    languages: "Abyssal, Varisian",
    spellLikeAbilities: [
      {
        name: "fog cloud",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "gust of wind",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "pyrotechnics",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "dimension door",
        casterLevel: 10,
        timesPerDay: 3
      },
      {
        name: "phantasmal killer",
        casterLevel: 10,
        timesPerDay: 3
      }
    ],
    skills: {
      Fly: {
        ranks: 15
      },
      Intimidate: {
        ranks: 9
      },
      "Knowledge (geography)": {
        ranks: 6
      },
      Perception: {
        ranks: 12
      },
      Stealth: {
        ranks: 12
      },
      Survival: {
        ranks: 15
      }
    },
    special: {
      bay: {
        type: "Su",
        text: "When the Sandpoint Devil screams as a standard action, all creatures within a 300-foot-radius spread must succeed at a DC 19 Will save or become panicked for 2d4 rounds. This is a sonic, mind-affecting fear effect. Whether or not their saves are successful, creatures within the effect are immune to the Sandpoint Devil's bay for 24 hours thereafter. The save DC is Charisma-based."
      },
      "hellfire breath": {
        type: "Su",
        text: "Once every 1d4 rounds, the Sandpoint Devil can unleash a blast of infernal flame from its mouth as a standard action. This hellfire fills a 30-foot cone and deals 10d6 points of fire damage (Reflex DC 20 half). Anyone who takes damage from this breath weapon must also succeed at a DC 20 Will save to avoid becoming cursed by the infernal flames. Those who become cursed take a -4 penalty on all attack rolls, saving throws, and skill checks for a number of days equal to the damage taken, and during this time, the victim's skin appears to be horribly burned in places regardless of any healing applied. This curse effect functions at caster level 12th. The save DC for both saves is Constitution-based."
      },
      kick: {
        type: "Ex",
        text: "The Sandpoint Devil's hoof attacks are primary attacks that deal bludgeoning and slashing damage."
      },
      trample: {
        universalMonsterAbility: "Trample",
        damage: "2d6+9",
        saveDC: 10
      }
    }
  },

};
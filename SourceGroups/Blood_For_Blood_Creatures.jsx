
export const Blood_For_BloodCreatures = {
  "Bog Strider": {
    source: "Blood For Blood",
    creatureType: "monstrous humanoid",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 2,
    hdVal: 10,
    cr: 2,
    racialFeatures: [
      "Darkvision 60 ft.",
      {
        name: "Tremorsense 120 ft.",
        note: "in water"
      }
    ],
    speed: {
      base: 30,
      water: "stride"
    },
    abilities: {
      str: 14,
      dex: 14,
      con: 14,
      int: 11,
      wis: 13,
      cha: 9
    },
    feats: [
      {
        name: "Dodge",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Spear",
        name: "Spear",
        damage: "1d8"
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
      },
      {
        weapon: "Net",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        qualities: [
          "ranged touch"
        ],
        name: "Net",
        damage: ""
      }
    ],
    defense: {
      naturalArmor: 3
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "temperate or warm swamps",
    visualDescription: "A narrow, beetle-like creature glides across the water's dark surface on four brown, spindly legs. It stands just over five feet tall, holding its head and thorax upright while clutching an intricately carved hunting spear in two clawed forelimbs. Powerful mandibles click in rhythm with the reed-thin antennae waving upon its head as if testing the air for the scent of prey.",
    organization: "solitary, pair, band (3-12), or tribe (13-60)",
    languages: "Aquan; tremor tap 120 ft.",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 2
      },
      Stealth: {
        ranks: 2
      },
      Survival: {
        ranks: 2
      },
      Swim: {
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
      "hold breath": {
        universalMonsterAbility: "Hold Breath",
        parenthetical: ""
      },
      "water sprint": {
        type: "Ex",
        text: "Once per hour, a bog strider can move up to 5 times its normal speed (250 feet) on water when making a charge or retreating from an enemy. Once it decides to increase its movement in this fashion, the effect lasts for up to 4 rounds, after which a bog strider becomes fatigued for as many rounds as it chose to move at a higher speed. Water Stride (Su) A bog strider can tread upon rivers, lakes, and flooded swamplands or marshes as if under the effects of the water walk spell. It also gains an increased movement rate by using the surface tension and its multiple legs to propel itself across the water."
      }
    }
  },

  Calathgar: {
    source: "Blood For Blood",
    creatureType: "plant",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Small",
    hd: 6,
    hdVal: 8,
    cr: 4,
    racialFeatures: [
      "Darkvision 30 ft.",
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 20,
      climb: 20
    },
    abilities: {
      str: 14,
      dex: 19,
      con: 14,
      int: 6,
      wis: 15,
      cha: 12
    },
    feats: [
      {
        name: "Blind-Fight",
        type: "Combat"
      },
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Flower",
        name: "Flower",
        damage: "1d6",
        bonuses: [
          {
            source: "inherent",
            value: "1d6",
            appliesTo: "damageType",
            damageType: "cold"
          }
        ]
      },
      {
        weapon: "Tendril",
        name: "2 Tendrils",
        damage: "1d4"
      }
    ],
    immunities: [
      "Immune to cold"
    ],
    defense: {
      naturalArmor: 1
    },
    space: "5 ft.",
    reach: "5 ft. (10 ft. with tendrils)",
    environment: "cold forests",
    visualDescription: "The acrid scent of vinegar wafts from this shield-sized blossom. Amid shocking blue petals slowly twitches a cluster of sharp stamens arranged like a ring of teeth within a leafy muzzle.",
    description: "Known to grow in the depths of the densest frozen forests, realms where icicles rarely melt from the snow-cloaked trees, calathgars, or \"hail lilies,\" grow to a size and possess an alien beauty that make their cuttings greatly desired in civilized lands. Yet, what few beside the wariest hunters and most knowledgeable denizens of the forests realize is that hail lilies are more than mere flowers-their fully grown varieties possess not only a deadly way of spreading their frozen seeds but also an even more dangerous trait: thought. Known among their own kind as calathgars, these ice-tinged plants move slowly and possess little in the way of society, yet they perceive their surroundings, know when their frigid gardens are threatened, feel pain, and-most tenaciously- seek a chilling revenge when their young are despoiled. The blooms of a fully grown calathgar measures 3 feet in diameter, though some have reported flowers up to 5, 8, and even 10 feet wide. Able to crawl on three tendrillike roots, one of these plants might stand as high as 4 feet off the ground, and when heavy with seeds might weigh as much as 50 pounds. Ecology Calathgars are immediately identifiable, even from a distance, by their sky-blue petals, a color repeated by few other forms of plant life in such size or brilliance. Yet typically, these blooms only unfurl during the brightest hours of the day or when the plants feel threatened. At all other times, calathgars keep their flowers closed, defending the sensitive structures within and presenting large, blue-gray sepals to the outside world. Calathgar young look little different from tall blue flowers-hence many horticulturists identify them merely as hail lilies. It takes nearly a year for a juvenile calathgar to display any kind of concerted movement, aside from the opening and closing of their petals and a few markedly un-plant-like twitches. Their sense of scent and ability to communicate function as soon as their buds first grow-typically within 2 weeks of sprouting from the cold earth. Two rings of sensory organs help calathgars remain aware of their surroundings: a cluster of lobes at the base of the flower and another situated around the stamen within. Both are capable of not just deciphering light in an approximation of visual sight, but also receiving information via a highly developed kind of scent. This sense of smell is much more developed in the plants than their ability to see-though at close ranges their sight can prove just as accurate as most humanoids. To this end, most communication between the plants is scent-based, utterly silent, and often imperceptible to non-plant creatures. At times when the plants feel threatened, however, they exude a smell like vinegar or, if angry, a coppery odor. For all their developments as a species, calathgars possess a strange connection, even symbiosis, with a far less complex type of growth: brown mold. Notorious for its ability to drain the warmth from an area and freeze the unwary, brown mold not only benefits calathgars-allowing them to grow comfortably in areas they might otherwise find inhospitably warm-but it also pervades the roots and internal structures of the plants. Some suggest that calathgars might be some advanced form of brown mold, yet the idea is typically dismissed, as such mutually beneficial relationships are well documented in the world of mundane flora. As a calathgar grows to maturity, brown mold thrives within its flower and internal structures, aiding in keeping the growth cool and providing it with frigid defensive abilities and a way to spread its seeds-freezing and clinging to creatures that come near before dropping off later. The flowers provide the mold ample places to grow, and defense from creatures that might threaten it. The adult plants also prove so riddled with nutrients upon which the fungus flourishes that should a calathgar violently die amid brown mold, the fungal patch instantly explodes with growth-typically to the detriment of whatever ended the calathgar's life. Habitat & Society Calathgars have little in the way of society, other than grouping together for mutual defense. Despite their intellects, the plants' psyches prove distinctive and alien in comparison to those of animals and sentient creatures. They have little interest in emotions, culture, or ambition, yet they possess nearly flawless memories and an understanding of experiences which they can share with other calathgars by scent as easily as (and far more effectively than) humanoids can pass on information by speech. Yet where calathgars do seem most like humanoids is in their capacity to care for their young and seek reprisal should any harm befall them. Should an immature calathgar be trampled, plucked, or otherwise ruined, adults do all they can to pursue and deal vengeance upon those who murdered their young, planting a new generation in the killer's frozen flesh. While calathgars can be reasoned with and most prove generally accepting of honest apologies from those capable of communicating with them, like most enraged parents, an incensed calathgar is rarely in a mood to speak.",
    organization: "solitary, growth (2-8), garden (9-25)",
    languages: "Sylvan (cannot speak)",
    spellLikeAbilities: [],
    skills: {
      Stealth: {
        ranks: 9
      }
    },
    special: {
      "seed spray": {
        type: "Ex",
        text: "Once every 1d4 rounds, up to 3 times per day, a calathgar can expel a blast of thorny, frozen seeds in a 15-foot cone. All creatures in this area take 4d6 points of cold damage (Reflex DC 15 for half). In frigid climes-areas where the temperature is 40 degrees or colder-these seeds cling to those they strike, dealing an additional 1d6 points of cold damage on the following round. The save DC is Constitution-based.",
        preText: "15-ft. cone, 4d6 cold damage, Reflex DC 14 for half, usable every 1d4 rounds"
      },
      "mold mulch": {
        type: "Ex",
        text: "Upon being reduced to 0 hit points, a calathgar withers and swiftly decays, transforming into a 5-foot patch of brown mold. If a calathgar is killed by fire, the mold immediately grows into a 10-foot patch. If it is killed in a space already occupied by brown mold, that mold patch doubles in size just as though fire had been brought near. The area within 30 feet of brown mold is cold enough to activate a calathgar's cold healing and the persistent effect of its seed spray. Brown mold deals 3d6 points of nonlethal cold damage to all creatures within 5 feet of it. See page 416 of the Pathfinder RPG Core Rulebook for additional details. Seed Spray (Ex) Once every 1d4 rounds, up to 3 times per day, a calathgar can expel a blast of thorny, frozen seeds in a 15-foot cone. All creatures in this area take 4d6 points of cold damage (Reflex DC 15 for half). In frigid climes-areas where the temperature is 40 degrees or colder-these seeds cling to those they strike, dealing an additional 1d6 points of cold damage on the following round. The save DC is Constitution-based."
      },
      "cold healing": {
        type: "Ex",
        text: "Calathgars are healed by cold. Anytime a calathgar is subjected to cold damage, it regains 1 hit point (regardless of the amount of cold damage dealt). When in areas of severe cold (such as arctic regions or near brown mold), a calathgar gains fast healing 1."
      }
    },
    resistances: [
      "fire vulnerability"
    ]
  },

};
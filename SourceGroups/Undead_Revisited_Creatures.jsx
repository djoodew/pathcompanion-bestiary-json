
export const Undead_RevisitedCreatures = {
  Nightskitter: {
    source: "Undead Revisited",
    creatureType: "undead",
    subTypes: [
      "extraplanar",
      "nightshade"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Huge",
    hd: 15,
    hdVal: 8,
    cr: 12,
    racialFeatures: [
      "Darksense 30 ft.",
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Detect Magic"
    ],
    speed: {
      base: 30,
      climb: 30
    },
    abilities: {
      str: 28,
      dex: 21,
      con: "-",
      int: 16,
      wis: 19,
      cha: 19
    },
    feats: [
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Command Undead",
        type: "General"
      },
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
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
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Spring Attack",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "poison",
        damage: "1d6",
        bonuses: [
          {
            source: "inherent",
            value: "4d6",
            appliesTo: "damageType",
            damageType: "cold"
          }
        ],
        type: "primary"
      }
    ],
    immunities: [
      "Immune to cold"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "good and silver"
      },
      SR: {
        value: 23
      },
      naturalArmor: 14
    },
    space: "15 ft.",
    reach: "15 ft.",
    environment: "any (Negative Energy Plane)",
    visualDescription: "This umbral mass unfolds a tangle of spidery legs and horrible mandibles, rising up to a monstrous height to bring its cluster of glowing red eyes to bear.",
    description: "Despite their undead status, nightshades possess a complex relationship with Urgathoa, goddess of undeath. At times they serve as summoned allies to her clergy, but they serve mortals only so long as they can be controlled, bribed, or cowed by the threat of deific intervention. Despite their nature, nightshades only rarely interact with mortal cultists of Abyssal lords or archdaemons of similar mien, such as Nocticula, Orcus, Charon, and Trelmarixian. This fact owes more to the rarity of interactions between nightshades and fiends in general- despite nightshades' own fiendish origins-as they are relatively isolated from the Abyss and Abbadon, and prey on those planes' residents as willingly as on those of the Material Plane.",
    organization: "solitary, pair, or nest (3-8)",
    languages: "Abyssal, Common, Infernal; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "detect magic",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "magic fang",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "deeper darkness",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "unholy blight",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "contagion",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "dispel magic, greater",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "invisibility",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "air walk",
        casterLevel: 12,
        timesPerDay: 1
      },
      {
        name: "cone of cold",
        casterLevel: 12,
        timesPerDay: 1
      },
      {
        name: "haste",
        casterLevel: 12,
        timesPerDay: 1
      },
      {
        name: "hold monster",
        casterLevel: 12,
        timesPerDay: 1
      },
      {
        name: "plane shift",
        casterLevel: 12,
        timesPerDay: 1
      },
      {
        name: "summon",
        casterLevel: 12,
        limitations: "level 5, 1 greater shadow",
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 15
      },
      Climb: {
        ranks: 15
      },
      "Knowledge (arcana)": {
        ranks: 15
      },
      "Knowledge (religion)": {
        ranks: 15
      },
      Perception: {
        ranks: 15
      },
      Spellcraft: {
        ranks: 7,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Stealth: {
        ranks: 15
      }
    },
    special: {
      "channel negative energy 9/day": {
        type: "Ex",
        preText: "DC 26, 6d6"
      },
      "umbral web": {
        type: "Su",
        text: "A nightskitter can weave semisolid webs out of shadowstuff. These webs are not strong enough to bear any but the lightest weight. A nightskitter can use these umbral webs in two different ways, as detailed below. Attacking: Up to eight times per day, a nightskitter can hurl a mass of umbral webs at a target. This is similar to an attack with a net but has a maximum range of 100 feet, with a range increment of 10 feet, and is effective against targets up to one size category larger than the nightskitter. An entangled creature gains 1d4 temporary negative levels while entangled, and can attempt to escape with a successful DC 28 Escape Artist check, or may try to burst the web with a DC 28 Strength check. The negative levels granted by an umbral web vanish as soon as the entangled character escapes from the web. Multiple umbral webs can entangle a single foe-the DCs to escape do not increase, but the temporary negative levels they cause stack. A creature that gains a total number of negative levels equal to its Hit Dice is immediately slain. Warding: By encasing all surfaces of an enclosed area, such as a cavern or a room, with thick layers of umbral webs, a nightskitter can infuse that area with necromantic energy. A chamber warded by umbral webs is treated as if under the effects of an unhallow spell with a deeper darkness spell fixed to the effect. A single nightskitter can maintain one such infused area at a time, to a maximum size of one 20-foot cube per Hit Die possessed by the nightskitter. Maintaining an umbral web ward does not limit its use of these webs to attack."
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Su",
        text: "Bite-injury; save Fort DC 23; frequency 1/round for 6 rounds; effect 1d4 Charisma damage and 2d6 cold damage; cure 2 consecutive saves. The save DC is Charisma-based.",
        saveDC: null
      }
    }
  },

  "Wight Lord": {
    source: "Undead Revisited",
    creatureType: "undead",
    subTypes: [],
    alignments: [
      "Lawful Evil"
    ],
    size: "Medium",
    hd: 11,
    hdVal: 8,
    cr: 9,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Deathwatch"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 24,
      dex: 13,
      con: "-",
      int: 13,
      wis: 15,
      cha: 22
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
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Quick Draw",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Falchion",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Falchion",
        enchantments: [
          {
            name: "Enhancement Bonus +1",
            source: "inherent"
          }
        ],
        name: "Falchion",
        specialAbility: "energy drain",
        damage: "2d4"
      },
      {
        weapon: "Slam",
        name: "Slam",
        specialAbility: "energy drain",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "cold iron or good"
      },
      naturalArmor: 4
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "This nearly skeletal figure wears the ancient armor of a long-dead king, and carries itself with a sort of regal pride.",
    description: "Dark princes and warlords of old, wight lords are undead monarchs. Where typical wights rise from a wide variety of individuals, wight lords rise from the bodies of despotic rulers or ruthless generals. Wight lords haunt the same ancient burial grounds and battlefields their lesser kin dwell in, but wight lords aren't satisfied by simply guarding their haunts against the living. They continue their reign as tyrants in death, ruling over undead armies and often compelling their unliving minions to wage war upon nearby towns or cities, sometimes even at the behest of bold and powerful necromancers. The statistics that are presented above represent the minimum power level of a wight lord. A wight lord can rise from the remains of any cruel or sadistic leader, but those who were higher than 11th level when they perished retain some of their previous life's knowledge-although not all of it. When this occurs, subtract 11 from the creature's previous number of class levels to determine the total number of class levels the wight lord possesses. Assign these class levels to the wight lord in a logical way-if it was a single-classed NPC in life, simply add more levels of that class to the wight lord. Multiclassed characters and those who possessed levels in prestige classes require more creativity in applying the class levels. The goal for building such a wight lord should be to approximate the themes and general abilities the creature had in life.",
    organization: "solitary or platoon (1 wight lord plus 4-6 advanced wights)",
    languages: "Common",
    spellLikeAbilities: [
      {
        name: "deathwatch",
        casterLevel: 9,
        timesPerDay: -1
      },
      {
        name: "air walk",
        casterLevel: 9,
        timesPerDay: 3
      },
      {
        name: "command, greater",
        casterLevel: 9,
        timesPerDay: 3
      },
      {
        name: "haste",
        casterLevel: 9,
        timesPerDay: 1
      }
    ],
    skills: {
      Climb: {
        ranks: 5
      },
      Intimidate: {
        ranks: 11
      },
      Perception: {
        ranks: 11
      },
      "Sense Motive": {
        ranks: 11
      },
      Stealth: {
        ranks: 5
      }
    },
    special: {
      "create spawn": {
        type: "Su",
        text: "Any humanoid creature that is slain by a wight lord becomes a wight itself in only 1d4 rounds. Although spawn so created are less powerful than wight lords, they are more powerful than typical wights, and are treated as wights with the advanced simple template. Spawn are under the command of the wight lord that created them and remain enslaved until its death, at which point they become fullfledged, free-willed advanced wights. They do not possess any of the abilities they had in life."
      },
      "energy drain": {
        universalMonsterAbility: "Energy Drain",
        saveDC: 10,
        levels: 1,
        text: "A wight lord inflicts a negative level each time it hits a foe with a slam attack. Like cairn wights, a wight lord can channel this negative energy through any weapon it wields, inflicting a negative level with each successful hit with the weapon. Resurrection Vulnerability (Su) While a wight lord is vulnerable to resurrection magic, it isn't quite as vulnerable as a typical wight. A raise dead or similar spell cast on a wight lord staggers it for 1d6+1 rounds if it fails a Will save, but does not destroy the wight. Using the spell in this way does not require a material component."
      },
      "channel resistance": {
        universalMonsterAbility: "Channel Resistance",
        bonus: 4
      }
    },
    resistances: [
      "resurrection vulnerability"
    ]
  },

};
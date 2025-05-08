
export const Godsmouth_HeresyCreatures = {
  "Rune Guardian": {
    source: "Godsmouth Heresy",
    creatureType: "construct",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Tiny",
    hd: 2,
    hdVal: 10,
    cr: 1,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      maneuverability: "Perfect",
      fly: 60
    },
    abilities: {
      str: 6,
      dex: 15,
      con: "-",
      int: 11,
      wis: 14,
      cha: 12
    },
    feats: [
      {
        name: "Improved Initiative",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Slam",
        name: "Slam",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "construct traits"
    ],
    defense: {
      SR: {
        value: 12
      }
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Thassilonian ruins)",
    visualDescription: "A carved rune detaches itself from the wall and floats silently in midair, glowing with arcane energy.",
    description: "Rune guardians are animated constructs from ancient Thassilon, created by the runelords to guard laboratories, ossuaries, and repositories of lore. Each rune guardian is dedicated to one of the seven rewards of rule (now known as the seven sins of the soul), and empowered with that sin's associated school of magic. As such, there are seven varieties of rune guardian, each recognizable by its shape-that of the Thassilonian rune representing that specific sin and arcane school. (The Thassilonians did not consider divination a separate school). Unlike golems, rune guardians are intelligent, able to follow complex orders and pursue intruders. They were built to coordinate with other servants of the runelords-for example, an envy guardian's hold portal ability is more dangerous when used to lock someone in a room with a servitor monster. A rune guardian is approximately 1 foot in diameter and weighs around 10 pounds. Variant Rune Guardians The statistics presented above represent only the least specimen created by the ancient runelords, with the power of a single 1st-level spell. Other variants exist, with different spell-like abilities or ones of increasing magical power. Rune guardians are always tied to one school of magic, and all of a rune guardian's spelllike abilities must come from that school. For example, a rune guardian of wrath might cast magic missile or shocking grasp instead of burning hands. In addition to the spell-like ability listed above, more powerful rune guardians of gluttony might possess the ability to cast blindness/deafness or ray of exhaustion. Construction A rune guardian's body is carved from a single block of semiprecious stone, then polished and treated with rare dusts and oils worth at least 500 gp. Rune Guardian CL 11th; Price 6,500 gp Construction Requirements Craft Construct, fly, geas/quest, plus burning hands, color spray, hold portal, ray of enfeeblement, reduce person, sleep, or summon monster I, creator must be caster level 11th; Skill Craft (stonecarving) DC 16; Cost 3,500 gp",
    organization: "solitary, pair, or syllabary (7 rune guardians, 1 of each sin)",
    languages: "Thassilonian (does not speak)",
    spellLikeAbilities: [
      {
        name: "burning hands",
        casterLevel: 3,
        timesPerDay: -1
      },
      {
        name: "color spray",
        casterLevel: 3,
        timesPerDay: -1
      },
      {
        name: "hold portal",
        casterLevel: 3,
        timesPerDay: -1
      },
      {
        name: "ray of enfeeblement",
        casterLevel: 3,
        timesPerDay: -1
      },
      {
        name: "reduce person",
        casterLevel: 3,
        timesPerDay: -1
      },
      {
        name: "sleep",
        casterLevel: 3,
        timesPerDay: -1
      },
      {
        name: "summon monster i",
        casterLevel: 3,
        timesPerDay: -1
      }
    ],
    skills: {
      Fly: {
        ranks: 4
      },
      Perception: {
        ranks: 1
      },
      Stealth: {
        ranks: 2
      }
    },
    special: {
      "sin magic": {
        type: "Sp",
        text: "A rune guardian has a single spell-like ability, usable at will, from the school of magic associated with the reward of rule it represents. Rune guardians of envy cast hold portal, rune guardians of gluttony cast ray of enfeeblement, rune guardians of greed cast reduce person, rune guardians of lust cast sleep, rune guardians of pride cast color spray, rune guardians of sloth cast summon monster I, and rune guardians of wrath cast burning hands."
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        value: null
      }
    },
    resistances: [
      "school vulnerability"
    ]
  },

};
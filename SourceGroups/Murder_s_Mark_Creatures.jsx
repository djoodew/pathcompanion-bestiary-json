
export const Murder_s_MarkCreatures = {
  Panotti: {
    source: "Murder's Mark",
    creatureType: "humanoid",
    subTypes: [],
    alignments: [
      "Neutral Good"
    ],
    size: "Medium",
    hd: 3,
    hdVal: 8,
    cr: 2,
    racialFeatures: [
      "Blindsense 60 ft."
    ],
    speed: {
      base: 30,
      maneuverability: "Poor",
      fly: 20
    },
    abilities: {
      str: 15,
      dex: 13,
      con: 14,
      int: 10,
      wis: 12,
      cha: 11
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
        name: "Multiattack",
        type: "Monster"
      }
    ],
    attacks: [
      {
        weapon: "Short sword",
        name: "Short sword",
        damage: "1d6"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        specialAbility: "push",
        damage: "1d4",
        bonuses: [
          {
            source: "inherent",
            value: 10,
            appliesTo: "damageType",
            damageType: "ft."
          }
        ],
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any land",
    visualDescription: "This bald humanoid looks strikingly human except for the long folds of skin that droop from his head and neck to just above his ankles.",
    description: "The panotti are a race of humanoids that strongly resemble humans except for one startling difference: their enormous ears. A panotti's ears are attached to the side of their heads, like those of a human, but they remain connected to the body down to the neck. When at ease, the folds of their ears hang loosely, like an elephant's, but extend almost the length of their bodies. These sheets of hanging flesh and skin appear limp and superfluous, but appearances are deceiving. Panotti possess remarkably smooth muscle control along the upper ridges of their ears, allowing them to extend and control their ears at will. Even though panotti look ridiculous by most humanoid standards, the source of this ridicule offers them several distinct advantages. By flapping their ears, adult panotti can lift off, hover, and even fly. While in combat, a panotti can slam opponents with its ears to propel them away. Panotti's hearing is sharp enough to detect the presence of even an unseen adversary. Finally, panotti can wrap themselves up in their ears like a cocoon, staying warm on the coolest of nights. Some sages speculate the panotti originated in a kingdom that fell beneath a curse-though the panotti themselves deny it. The rare couplings between a human and a panotti usually result in panotti children. Culturally, the panotti are a reclusive people, preferring the company of their own kind- mostly due to the reaction they receive from other humanoids. Nevertheless, panotti are not a cruel or unkind race, and their culture is rich with music and storytelling traditions. They adapt to most classes with ease, but favor bard, fighter, and ranger. Treated with respect and dignity, panotti can be generous and steadfast allies. When treated as laughingstocks, however, panotti can become fierce, and they're naturally hearty and capable warriors. On Golarion, panotti live primarily in Casmaron and central Tian Xia, with a much smaller number residing in Avistan.",
    organization: "solitary, pair, or tribe (5-11)",
    languages: "Common",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 6
      },
      Perception: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 4,
            situational: true,
            note: "listening only"
          }
        ]
      },
      Survival: {
        ranks: 2
      }
    },
    special: {
      "elephantine ears": {
        type: "Ex",
        text: "A panotti can flap its huge ears to fly awkwardly. A panotti can also wrap its ears around the length of its body for warmth and protection from the elements (similar to using a bedroll or heavy blankets), or use them as secondary natural attacks (as per wing attacks)."
      },
      push: {
        universalMonsterAbility: "Push",
        attack: ""
      }
    }
  },

};
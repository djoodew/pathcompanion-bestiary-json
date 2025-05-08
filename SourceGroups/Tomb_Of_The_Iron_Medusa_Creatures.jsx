
export const Tomb_Of_The_Iron_MedusaCreatures = {
  Nemhain: {
    source: "Tomb Of The Iron Medusa",
    creatureType: "undead",
    subTypes: [
      "incorporeal"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Medium",
    hd: 18,
    hdVal: 8,
    cr: 15,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      maneuverability: "Perfect",
      fly: 30
    },
    abilities: {
      str: "-",
      dex: 26,
      con: "-",
      int: 21,
      wis: 25,
      cha: 25
    },
    feats: [
      {
        name: "Agile Maneuvers",
        type: "Combat"
      },
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
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
        name: "Lunge",
        type: "Combat"
      },
      {
        name: "Mobility",
        type: "Combat"
      },
      {
        name: "Toughness",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Incorporeal touch",
        name: "Incorporeal touch",
        damage: "3d8",
        bonuses: [
          {
            source: "inherent",
            value: "1d6",
            appliesTo: "damageType",
            damageType: "con drain"
          }
        ]
      }
    ],
    immunities: [
      "Immune to cold"
    ],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "This floating, ghostly figure's visage constantly shifts between that of a comely, smiling human and a desiccated corpse. Around it swirl less substantial humanoid forms.",
    description: "A nemhain is formed when a soul deliberately assumes undead status as a means of protecting a person, object, place, or ideal. Often, a devoted priest or ally volunteers for transformation into a nemhain in order to continue protecting her master even beyond her death. The blasphemous rituals used to create nemhains are believed to have been lost.",
    organization: "solitary (+1d4 bound spirits)",
    languages: "Common; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "harm",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "slay living",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "telekinesis",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "antilife shell",
        casterLevel: 15,
        timesPerDay: 1
      },
      {
        name: "wall of force",
        casterLevel: 15,
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 18
      },
      Diplomacy: {
        ranks: 18
      },
      Fly: {
        ranks: 18
      },
      Intimidate: {
        ranks: 18
      },
      "Knowledge (arcana)": {
        ranks: 18
      },
      "Knowledge (religion)": {
        ranks: 18
      },
      "Sense Motive": {
        ranks: 18
      },
      Spellcraft: {
        ranks: 18
      },
      Stealth: {
        ranks: 18
      }
    },
    special: {
      "bound spirits": {
        type: "Su",
        text: "A nemhain is surrounded by a whirling cloud of spirits bound to her-often, these are the spirits of close relatives or friends she had in life. As a swift action, she can direct these bound spirits to strike at any creature within 30 feet as a +21 ranged touch attack. These spirits may be used to cause damage as if she had touched the target with her incorporeal touch, or they can be used to deliver a harm or slay living effect-if used to deliver one of these spell-like abilities as a swift action, that use counts against the number of times per day she can use that spell-like ability. The nemhain can also send these spirits up to 1 mile away to act as scouts at a fly speed of 60 feet (perfect)-she can observe and listen through them, but as long as they do not share her space, she cannot use them to deliver ranged touch attacks. These spirits are impervious to almost all attacks and magic, save the following: protection from evil prevents bound spirits from harming persons so protected; dispel evil, raise dead, or resurrection causes the spirits to vanish and be useless to the nemhain for 1 hour; true resurrection makes them useless for 24 hours."
      },
      rejuvenation: {
        type: "Su",
        text: "All nemhains are tied to a ritual object used in their creation. This object is typically a Large statue, pillar, or monolith. Until this object is destroyed, a destroyed nemhain automatically rejuvenates back to full health 1d4 days after it is destroyed."
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        damageType: "electricity or good",
        value: 5
      },
      "channel resistance": {
        universalMonsterAbility: "Channel Resistance",
        bonus: 4
      }
    },
    resistances: [
      {
        damageType: "acid",
        value: 10
      },
      {
        damageType: "fire",
        value: 10
      }
    ]
  },

};
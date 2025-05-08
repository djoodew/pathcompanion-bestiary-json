
export const The_HarrowingCreatures = {
  "Mute hag": {
    source: "The Harrowing",
    creatureType: "monstrous humanoid",
    subTypes: [
      "cold"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 14,
    hdVal: 10,
    cr: 11,
    racialFeatures: [
      "Blindsight 60 ft.",
      "Scent"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 23,
      dex: 21,
      con: 22,
      int: 20,
      wis: 19,
      cha: 18
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Blind-Fight",
        type: "Combat"
      },
      {
        name: "Combat Casting",
        type: "General"
      },
      {
        name: "Empower Spell-Like Ability",
        type: "Monster",
        value: "Cone of cold",
        choiceSource: "Empower Spell-Like Ability"
      },
      {
        name: "Great Fortitude",
        type: "General"
      },
      {
        name: "Persuasive",
        type: "General"
      },
      {
        name: "Toughness",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        bonuses: [
          {
            source: "inherent",
            value: "1d4",
            appliesTo: "damageType",
            damageType: "bleed"
          }
        ],
        type: "primary"
      },
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to acid, charm, fear, gaze attacks, sleep"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "cold iron and magic"
      },
      SR: {
        value: 22
      },
      naturalArmor: 9
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "cold plains, forests, and marshes",
    visualDescription: "Empty eye sockets and jagged teeth punctuate the palpable hate that roils off this twisted, gray-skinned crone.",
    description: "When bitterness consumes a woman already steeped in arcane power, that energy may sour, driving her to rip out her own eyes and tongue and burning the light from her soul. This ritual births a strange and horrible creature: a mute hag. These hateful abominations dedicate their wretched lives to spreading misery and strangling joy wherever they go. Mute hags exist to unmake happy things. Tales claim the natural order despises the crones so much that plants wither at their touch, storms churn at their passing, and wounds they inflict never heal. Though physically capable of ripping a man in two, the crones prefer to corrupt instead. They move silently through peaceful settlements, granting the inhabitants' darkest desires and sowing the seeds of discord. Nothing pleases a mute hag more than watching friends, neighbors, and lovers murder one another in paranoia and rage. Many strike unholy bargains with mortal outcasts, granting vigor, beauty, or revenge in exchange for vile and unforgivable crimes. Mute hags resemble mortal women, but with blotchy, bruised-looking skin. Some conceal their empty eye sockets and ragged teeth with veils or their own hair, but most relish their hideous countenances. Mute hags stand 6 to 7 feet tall and weigh 150 to 250 pounds.",
    organization: "solitary or coven (3 hags of any kind)",
    languages: "Aklo, Common, Draconic, Giant, Goblin, Sylvan (cannot speak)",
    spellLikeAbilities: [
      {
        name: "detect good",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "detect magic",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "detect thoughts",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "contagion",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "cure light wounds",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "diminish plants",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "inflict light wounds",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "invisibility",
        casterLevel: 14,
        limitations: "self only",
        timesPerDay: -1
      },
      {
        name: "minor creation",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "poison",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "bestow curse",
        casterLevel: 14,
        timesPerDay: 3
      },
      {
        name: "blindness/deafness",
        casterLevel: 14,
        timesPerDay: 3
      },
      {
        name: "cone of cold",
        casterLevel: 14,
        limitations: "Metamagic: Empower ",
        timesPerDay: 3
      },
      {
        name: "crushing despair",
        casterLevel: 14,
        timesPerDay: 3
      },
      {
        name: "silence",
        casterLevel: 14,
        timesPerDay: 3
      },
      {
        name: "control weather",
        casterLevel: 14,
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 10
      },
      Craft0: {
        subSkill: "leather",
        ranks: 8
      },
      Diplomacy: {
        ranks: 10
      },
      Heal: {
        ranks: 8
      },
      Intimidate: {
        ranks: 10
      },
      "Knowledge (arcana)": {
        ranks: 6
      },
      "Knowledge (history)": {
        ranks: 14
      },
      "Knowledge (local)": {
        ranks: 6
      },
      "Knowledge (nature)": {
        ranks: 6
      },
      Perception: {
        ranks: 10
      },
      "Sense Motive": {
        ranks: 10
      },
      "Sleight of Hand": {
        ranks: 7
      },
      Spellcraft: {
        ranks: 11
      },
      Stealth: {
        ranks: 10
      }
    },
    special: {
      "shaping touch": {
        type: "Su",
        text: "The touch of a mute hag twists flesh like clay. As a full-round action that draws an attack of opportunity, a mute hag may change the appearance of a grappled or helpless victim. The effect acts as a permanent alter self spell. Unwilling victims may resist the transformation with a DC 21 Fortitude save. A mute hag allowed to work for 10 minutes may also increase a victim's age category by one step; doing so does not grant mental ability score boosts but does inflict physical ability score penalties as normal. Creatures that are affected by this power or successfully save against it cannot be affected by the same hag's shaping touch for one month. The DC is Charisma-based."
      },
      "blind and mute": {
        type: "Ex",
        text: "Mute hags tear out their eyes and tongues, leaving them blind to life's joys and incapable of sharing their sorrow. A mute hag is immune to gaze attacks, and cannot use spell completion or command word trigger magic items."
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "alter self",
        type: ", alter self"
      }
    }
  },

};
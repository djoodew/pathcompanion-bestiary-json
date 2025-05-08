
export const Ashes_At_DawnCreatures = {
  "Hollow Helm": {
    source: "Ashes At Dawn",
    creatureType: "undead",
    subTypes: [],
    alignments: [
      "Neutral Evil"
    ],
    size: "Tiny",
    hd: 2,
    hdVal: 8,
    cr: 1,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 20,
      maneuverability: "Perfect",
      fly: 30
    },
    abilities: {
      str: 12,
      dex: 13,
      con: "-",
      int: "-",
      wis: 10,
      cha: 10
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
    defense: {
      naturalArmor: 3
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "?",
    visualDescription: "Though at first appearing to be an ordinary suit of armor, this imposing being begins to move, its lumbering movements slow and methodical.",
    description: "Raised from the corpses of knights and soldiers slain by treachery rather than battle or conflicts considered crimes even in the heat of war, phantom armors appear as suits of animate armor, walking or floating of their own accord. Most phantom armors haunt the halls and blasted battlefields where they were slain, seeking revenge against their murderers or, should that prove impossible, confronting any living creature that might give them the opportunity to do battle once more. Dastardly necromancers have also discovered the process for binding violent spirits to suits of armor, giving rise to eerie servants that combine endless patience with cold brutality. Phantom armors come in many shapes and sizes; some appear to be nothing more than animate helms while others resemble armored giants. Ecology Phantom armors-being undead and having no need for sleep or sustenance-make perfect guards, especially given their single-minded demeanors and their innocuous appearances. While a phantom armor's \"suit\" is hollow, the spirit of a dead warrior still inhabits it, forever caught in the cold embrace of steel and forced servitude until it is defeated in battle. Of course, since not all suits of armor are alike, neither are all phantom armors. Horrific tales tell of ghastly knights floating through haunted corridors, their helmet visors revealing only blackness within. The animating spirit of a phantom armor is typically invisible, the armored shell appearing to be the entirety of the creature. Casting spells like see invisibility or detect undead reveals the vague shape of a spirit seemingly wearing the armor. Creating Phantom Armor Phantom armors of varying types can be created using the spell create undead, as detailed below. In addition to requiring a corpse for it to be cast upon, the spell requires that body must be wearing a suit of heavy armor. The corpse dissolves into the armor at the conclusion of the spell's casting. Caster Level Phantom Armor Created 11th or lower Hollow helm 12th-13th Guardian phantom armor 14th Floating phantom armor 15th Giant phantom armor 16th Phantom lancer",
    organization: "?",
    languages: "Common (cannot speak)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 2
      },
      Stealth: {
        ranks: 3
      }
    },
    special: {
      "skull cage": {
        type: "Ex",
        text: "A hollow helm sometimes pretends to be normal armor, letting a creature try to wear it before revealing its deadly nature. If the hollow helm makes a successful combat maneuver to grapple an opponent of Medium size or smaller, the grappled creature is also blinded. Creatures that purposefully try to wear a hollow helm are automatically grappled. This blindness lasts until the hollow helm's grapple is broken. A hollow helm cannot attack a creature it is grappling. If a hollow helm is damaged while it is grappling, the creature it is grappling takes an equal amount of damage."
      },
      freeze: {
        universalMonsterAbility: "Freeze",
        parenthetical: ""
      },
      "channel resistance": {
        universalMonsterAbility: "Channel Resistance",
        bonus: 2
      }
    }
  },

  "Phantom Lancer": {
    source: "Ashes At Dawn",
    creatureType: "undead",
    subTypes: [],
    alignments: [
      "Neutral Evil"
    ],
    size: "Large",
    hd: 9,
    hdVal: 8,
    cr: 6,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 40,
      maneuverability: "Perfect",
      fly: 40
    },
    abilities: {
      str: 17,
      dex: 15,
      con: "-",
      int: 7,
      wis: 11,
      cha: 18
    },
    feats: [
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
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Mobility",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Lance",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "Lance",
        damage: "1d8"
      },
      {
        weapon: "Longbow",
        name: "Longbow",
        damage: "1d8"
      }
    ],
    defense: {},
    space: "10 ft.",
    reach: "10 ft.",
    environment: "?",
    visualDescription: "Though at first appearing to be an ordinary suit of armor, this imposing being begins to move, its lumbering movements slow and methodical.",
    description: "Raised from the corpses of knights and soldiers slain by treachery rather than battle or conflicts considered crimes even in the heat of war, phantom armors appear as suits of animate armor, walking or floating of their own accord. Most phantom armors haunt the halls and blasted battlefields where they were slain, seeking revenge against their murderers or, should that prove impossible, confronting any living creature that might give them the opportunity to do battle once more. Dastardly necromancers have also discovered the process for binding violent spirits to suits of armor, giving rise to eerie servants that combine endless patience with cold brutality. Phantom armors come in many shapes and sizes; some appear to be nothing more than animate helms while others resemble armored giants. Ecology Phantom armors-being undead and having no need for sleep or sustenance-make perfect guards, especially given their single-minded demeanors and their innocuous appearances. While a phantom armor's \"suit\" is hollow, the spirit of a dead warrior still inhabits it, forever caught in the cold embrace of steel and forced servitude until it is defeated in battle. Of course, since not all suits of armor are alike, neither are all phantom armors. Horrific tales tell of ghastly knights floating through haunted corridors, their helmet visors revealing only blackness within. The animating spirit of a phantom armor is typically invisible, the armored shell appearing to be the entirety of the creature. Casting spells like see invisibility or detect undead reveals the vague shape of a spirit seemingly wearing the armor. Creating Phantom Armor Phantom armors of varying types can be created using the spell create undead, as detailed below. In addition to requiring a corpse for it to be cast upon, the spell requires that body must be wearing a suit of heavy armor. The corpse dissolves into the armor at the conclusion of the spell's casting. Caster Level Phantom Armor Created 11th or lower Hollow helm 12th-13th Guardian phantom armor 14th Floating phantom armor 15th Giant phantom armor 16th Phantom lancer",
    organization: "?",
    languages: "Common (cannot speak)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 9
      },
      Stealth: {
        ranks: 9
      }
    },
    special: {
      trample: {
        universalMonsterAbility: "Trample",
        damage: "1d6+4",
        saveDC: 10
      },
      "armor rider": {
        type: "Su",
        text: "A phantom lancer is not actually two creatures, but rather a single spirit animating both a suit of humanoid-shaped armor and a ridden creature's barding. Therefore, it does not need to make the checks normally associated with riding another creature."
      },
      freeze: {
        universalMonsterAbility: "Freeze",
        parenthetical: ""
      },
      "channel resistance": {
        universalMonsterAbility: "Channel Resistance",
        bonus: 4
      }
    }
  },

};
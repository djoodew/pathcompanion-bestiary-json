
export const Shadows_Of_GallowspireCreatures = {
  "Gargoyle Guardian": {
    source: "Shadows Of Gallowspire",
    creatureType: "construct",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 11,
    hdVal: 10,
    cr: 8,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30,
      maneuverability: "Poor",
      fly: 60
    },
    abilities: {
      str: 22,
      dex: 14,
      con: "-",
      int: "-",
      wis: 10,
      cha: 1
    },
    feats: [],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claw",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "construct traits"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "adamantine"
      },
      naturalArmor: 11
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any land",
    visualDescription: "The head of this sinisterly carved statue of a devil slowly scans its surroundings, every motion making the faint sound of stone grinding upon stone.",
    description: "Many races adorn their buildings and structures with carved gargoyles to make them look more fearsome, to ward off evil spirits, or in the hope of making real gargoyles think another tribe is already occupying the area. Many magic-users also create constructs in the shapes and forms of gargoyles, emulating those creatures' ability to blend in with stone structures and taking advantage of the pervasiveness of sculpted gargoyles to create stealthy protectors and watchdogs. Many spellcasters construct gargoyle guardians that have special abilities, making them even more capable and vigilant sentinels. Gargoyle Sentry (+0 CR): These gargoyle guardians are created with eyes of citrine linked to a 1-foot-diameter orb of the same stone. The orb always displays what the gargoyle guardian sees, though without the construct's Darkvision or Low-Light Vision. If the gargoyle sentry is destroyed, its eyes and the linked orb shatter into worthless dust. Construction A gargoyle guardian's body is made from 1,000 pounds of dense stone-typically of the colors and designs of the structure or memorial it is meant to guard-and treated with 1,000 gp worth of rare minerals and precious filigree. Gargoyle Guardian CL 10th; Price 30,000 gp; 50,000 gp (sentry) Construction Requirements Craft Construct, animate objects, stone shape, geas/quest; Cost 15,000 gp; 25,000 gp (sentry)",
    organization: "solitary or wing (2-8)",
    spellLikeAbilities: [],
    skills: {
      Stealth: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 6
          }
        ]
      }
    },
    special: {
      snatch: {
        type: "Ex",
        text: "A gargoyle guardian can start a grapple when it hits with both claw attacks, as though it had the grab ability. If it grapples a creature of size Medium or smaller, it squeezes each round for automatic claw damage with a successful grapple check. A gargoyle guardian can fly while holding a creature that weighs 350 pounds or less. It cannot throw creatures it is carrying, but can drop them as a free action."
      },
      freeze: {
        universalMonsterAbility: "Freeze",
        parenthetical: ""
      }
    }
  },

  "Grim Reaper": {
    source: "Shadows Of Gallowspire",
    creatureType: "undead",
    subTypes: [
      "evil",
      "extraplanar",
      "incorporeal"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Large",
    hd: 28,
    hdVal: 8,
    cr: 20,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 40,
      maneuverability: "Perfect",
      fly: 60
    },
    abilities: {
      str: 24,
      dex: 15,
      con: "-",
      int: 16,
      wis: 19,
      cha: 29
    },
    feats: [
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Combat Casting",
        type: "General"
      },
      {
        name: "Combat Expertise",
        type: "Combat"
      },
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Great Cleave",
        type: "Combat"
      },
      {
        name: "Greater Weapon Focus",
        type: "Combat",
        value: "Scythe",
        choiceSource: "Greater Weapon Focus"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Scythe",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Disarm",
        type: "Combat"
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
        name: "Quicken Spell-Like Ability",
        type: "Monster",
        value: "Destruction",
        choiceSource: "Quicken Spell-Like Ability"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Scythe",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Scythe",
        enchantments: [
          {
            name: "Enhancement Bonus +3",
            source: "inherent"
          }
        ],
        name: "Scythe",
        specialAbility: "death touch",
        damage: "2d4"
      }
    ],
    defense: {
      DR: {
        value: 15,
        damageType: " cold iron and good"
      },
      SR: {
        value: 31
      },
      naturalArmor: 12
    },
    space: "10 ft.",
    reach: "15 ft.",
    environment: "any",
    visualDescription: "This tall, cloaked figure stares out from the black hood that covers its head. It wields an enormous scythe in its skeletal, bone-white hands, looking as though it is freezing the very air around it.",
    description: "Known by many names throughout nearly all cultures, grim reapers are the personifications of death and all the pain and fear associated with that state. They are universally feared by the living as harbingers of destruction and masters of all that has already passed from life. These hooded beings travel through the planes with the sole intent of bringing about the end of life, slaying with a deliberateness inscrutable to all but themselves. While grim reapers are the most feared of their kind, they are not alone. The towering, ghostlike grim reapers are served by minor reapers, corporeal servitors that enact their master's dreadful will and meet out death's unrelenting touch. A grim reaper is 15 feet tall and, as an incorporeal creature, has no physical weight except for its equipment. Minor reapers stand 7 feet tall and weigh approximately 70 pounds. Ecology Grim reapers have no creator and are not born by any definition of the word-they simply exist, much as the multiverse itself does. Some philosophers argue that grim reapers were created along with the Negative Energy Plane, manifesting from this plane when mortalkind first realized death's terminal permanency. Others claim that multiple minor reapers meeting on the Negative Energy Plane or another area infused with overwhelming negative energy might join together to form a new grim reaper. While similar in shape to the psychopomps who serve Pharasma and ferry souls to their fates upon the planes, reapers care little for mortal souls, reveling in the moment of death and dissolution of the impermanent, regardless of the elaborate bureaucracy that oversees the doomed. Habitat & Society While grim reapers stalk the planes, spreading death and despair for their own sakes, they are not alone in their endeavors. Among their many powers, grim reapers can summon lesser versions of themselves to seek out and kill specific individuals. These minor reapers are encountered far more often than their masters, either in the service of their masters or summoned by evil magic-users to do their foul bidding. While stripped of their more powerful brethren's necromantic powers, these minor reapers are nonetheless brutal hunters and stop at nothing to achieve their objective. Minor reapers usually wait until their target is alone before appearing for battle, though if a pack of these undead assassins are sent after a group of victims, they will engage multiple targets if necessary. If summoned by a grim reaper, minor reapers act as its additional eyes and ears, and if they are destroyed, their master is immediately aware of their obliteration. Other times, a grim reaper may summon minor reapers to aid in its escape from a battle it expects to lose, and flees to another plane of existence where it may recover and better prepare for the annihilation of its targets. Grim reapers possess the ability to speak to any intelligent being, and the few who have survived encounters with a reaper or its minions claim that the bringer of death spoke to them in a deep, unearthly voice like nothing in the material realm. Minor reapers can be created by casters of 20th level or higher using the spell create greater undead.",
    organization: "solitary",
    languages: "Common, Celestial, Infernal; truespeech",
    spellLikeAbilities: [
      {
        name: "fly",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "foresight",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "true seeing",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "circle of death",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "control undead",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "invisibility",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "plane shift",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "polymorph",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "energy drain",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "finger of death",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "soul bind",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "summon minor reapers",
        casterLevel: 20,
        limitations: "level 8, 1d4 minor reapers",
        timesPerDay: 3
      },
      {
        name: "unwilling shield",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "destruction",
        casterLevel: 20,
        limitations: "Metamagic: Quicken ",
        timesPerDay: 1
      },
      {
        name: "wail of the banshee",
        casterLevel: 20,
        timesPerDay: 1
      }
    ],
    skills: {
      Diplomacy: {
        ranks: 28
      },
      Disguise: {
        ranks: 28
      },
      Fly: {
        ranks: 28
      },
      "Knowledge (planes)": {
        ranks: 28
      },
      Perception: {
        ranks: 28
      },
      "Sense Motive": {
        ranks: 28
      },
      Stealth: {
        ranks: 28
      }
    },
    special: {
      "channel resistance": {
        universalMonsterAbility: "Channel Resistance",
        bonus: 4
      },
      "fear aura": {
        universalMonsterAbility: "Fear Aura",
        saveDC: 13,
        range: 40
      },
      "death touch": {
        type: "Su",
        text: "Creatures hit by either a grim reaper's touch attack or by a weapon wielded by a grim reaper must succeed at a DC 33 Fortitude save or gain 2d4 negative levels. The save DC is Charisma-based. A grim reaper can channel this ability through any weapon it wields. A humanoid slain by a reaper's death touch is consumed in unholy fire and has its remains destroyed as the destruction spell. This is a death effect. Summon Minor Reapers (Sp) Three times per day, a reaper can summon 1d4 minor reapers as a standard action. Each of these minor reapers is assigned a single creature to attack, and the targeted creature must battle the minor reaper by itself. The target that the grim reaper assigns to its minor reapers need not be in sight, but it must be on the same plane on which the minor reaper was summoned. A grim reaper may only assign one minor reaper to any creature at a given time, even if it uses this ability multiple times."
      }
    }
  },

  "Minor Grim Reaper": {
    source: "Shadows Of Gallowspire",
    creatureType: "undead",
    subTypes: [
      "evil",
      "extraplanar"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Medium",
    hd: 15,
    hdVal: 8,
    cr: 10,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 14,
      dex: 19,
      con: "-",
      int: 8,
      wis: 11,
      cha: 17
    },
    feats: [
      {
        name: "Agile Maneuvers",
        type: "Combat"
      },
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
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
        name: "Toughness",
        type: "General"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Scythe",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Scythe",
        name: "Scythe",
        specialAbility: "death touch",
        damage: "2d4"
      }
    ],
    immunities: [
      "Immune to cold"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "cold iron or good"
      },
      SR: {
        value: 21
      },
      naturalArmor: 8
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "This tall, cloaked figure stares out from the black hood that covers its head. It wields an enormous scythe in its skeletal, bone-white hands, looking as though it is freezing the very air around it.",
    description: "Known by many names throughout nearly all cultures, grim reapers are the personifications of death and all the pain and fear associated with that state. They are universally feared by the living as harbingers of destruction and masters of all that has already passed from life. These hooded beings travel through the planes with the sole intent of bringing about the end of life, slaying with a deliberateness inscrutable to all but themselves. While grim reapers are the most feared of their kind, they are not alone. The towering, ghostlike grim reapers are served by minor reapers, corporeal servitors that enact their master's dreadful will and meet out death's unrelenting touch. A grim reaper is 15 feet tall and, as an incorporeal creature, has no physical weight except for its equipment. Minor reapers stand 7 feet tall and weigh approximately 70 pounds. Ecology Grim reapers have no creator and are not born by any definition of the word-they simply exist, much as the multiverse itself does. Some philosophers argue that grim reapers were created along with the Negative Energy Plane, manifesting from this plane when mortalkind first realized death's terminal permanency. Others claim that multiple minor reapers meeting on the Negative Energy Plane or another area infused with overwhelming negative energy might join together to form a new grim reaper. While similar in shape to the psychopomps who serve Pharasma and ferry souls to their fates upon the planes, reapers care little for mortal souls, reveling in the moment of death and dissolution of the impermanent, regardless of the elaborate bureaucracy that oversees the doomed. Habitat & Society While grim reapers stalk the planes, spreading death and despair for their own sakes, they are not alone in their endeavors. Among their many powers, grim reapers can summon lesser versions of themselves to seek out and kill specific individuals. These minor reapers are encountered far more often than their masters, either in the service of their masters or summoned by evil magic-users to do their foul bidding. While stripped of their more powerful brethren's necromantic powers, these minor reapers are nonetheless brutal hunters and stop at nothing to achieve their objective. Minor reapers usually wait until their target is alone before appearing for battle, though if a pack of these undead assassins are sent after a group of victims, they will engage multiple targets if necessary. If summoned by a grim reaper, minor reapers act as its additional eyes and ears, and if they are destroyed, their master is immediately aware of their obliteration. Other times, a grim reaper may summon minor reapers to aid in its escape from a battle it expects to lose, and flees to another plane of existence where it may recover and better prepare for the annihilation of its targets. Grim reapers possess the ability to speak to any intelligent being, and the few who have survived encounters with a reaper or its minions claim that the bringer of death spoke to them in a deep, unearthly voice like nothing in the material realm. Minor reapers can be created by casters of 20th level or higher using the spell create greater undead.",
    organization: "solitary or omen (2-4)",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 5
      },
      Intimidate: {
        ranks: 10
      },
      Perception: {
        ranks: 15
      },
      Stealth: {
        ranks: 15
      }
    },
    special: {
      "fear cone": {
        universalMonsterAbility: "Fear Cone",
        saveDC: 10,
        range: 30
      },
      "sole target": {
        type: "Su",
        text: "Each minor reaper is assigned a specific target by the reaper that summoned it. If a creature attacks a minor reaper targeting another creature, that minor reaper may immediately summon another minor reaper as a free action to battle the interceding creature unless the interloper is already in battle with a minor reaper of its own, in which case the ability is wasted. If a minor reaper does not or cannot use this ability immediately after being attacked, it must wait until it is attacked once again in order to do so."
      },
      "death touch": {
        type: "Su",
        text: "Creatures hit by either a lesser reaper's touch attack or by a weapon wielded by a lesser reaper must succeed at a DC 20 Fortitude save or gain 1d4 negative levels. The save DC is Charisma-based. A humanoid slain by a reaper's death touch is consumed in unholy fire and has its remains destroyed as the destruction spell. This is a death effect."
      }
    }
  },

};
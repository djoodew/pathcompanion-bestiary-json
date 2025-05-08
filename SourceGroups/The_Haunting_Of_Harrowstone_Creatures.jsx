
export const The_Haunting_Of_HarrowstoneCreatures = {
  "Sanguine Ooze Swarm": {
    source: "The Haunting Of Harrowstone",
    creatureType: "ooze",
    subTypes: [
      "swarm"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Tiny",
    hd: 1,
    hdVal: 8,
    cr: "1/3",
    racialFeatures: [
      "Blindsight 60 ft."
    ],
    speed: {
      base: 10,
      climb: 10,
      swim: 10
    },
    abilities: {
      str: 12,
      dex: 1,
      con: 16,
      int: "-",
      wis: 1,
      cha: 1
    },
    feats: [],
    attacks: [
      {
        weapon: "swarm",
        name: "swarm",
        specialAbility: "viscous",
        damage: 1
      }
    ],
    defense: {},
    space: "10 ft.",
    reach: "0 ft.",
    environment: "any underground",
    visualDescription: "Dozens of tiny globs of slime move on their own, acting as one being, alternately clinging to each other and separating in a riot of oozing momentum.",
    description: "Formed from accumulations of runoff from arcane laboratories and regions of magical calamity, alchemical oozes are fist-sized blobs of volatile chemicals. Although composed of unpredictable compounds and toxins, these mobile oozes pose little threat individually, but in polluted quagmires and tainted sewers can collect in numbers great enough to threaten creatures many times their size. Swarms of the slimes linger in such contaminated areas and seek new accretions of vital solutions, like those found within the bodies of higher life forms, to fuel their erratic life cycles. Found in numerous varieties with a host of differing abilities, these weird, clinging oozes have been differentiated by likening them to the humors said to compose the bodies of living beings. Appearing at first to be a collection of tiny blobs of viscous, translucent fluid, alchemical oozes become far more terrifying once their hungry nature becomes apparent. Each swarm is composed of several hundred palm-sized balls of ooze that all scuttle along as a single unit.",
    organization: "solitary, pair, or coagulum (3-5)",
    spellLikeAbilities: [],
    skills: {},
    special: {
      "euphoric slime": {
        type: "Ex",
        text: "Sanguine oozes are composed of congealed euphoric toxins. Any living creature that begins its turn affected by the swarm's viscous ability must make a DC 13 Fortitude save or erupt into uncontrollable laughter and be effectively staggered for that round. This is a mindaffecting effect. Creatures immune to poison are immune to this effect."
      },
      viscous: {
        type: "Ex",
        text: "Whenever an alchemical ooze swarm makes a swarm attack on a creature of Small size or larger, that creature must make a DC 13 Reflex save or be covered in patches of sticky ooze globules. Those who fail are entangled until the patches of ooze are removed. The ooze can be removed by spending a full-round action to fling off the globules-though this action might be impeded by the ooze's effects. If a creature affected by this ability takes any amount of cold damage, the ooze patches are immediately destroyed. The save DC is Constitution-based.",
        preText: "DC 13"
      }
    },
    resistances: [
      {
        damageType: "fire",
        value: 5
      }
    ]
  },

  "Phlegmatic Ooze Swarm": {
    source: "The Haunting Of Harrowstone",
    creatureType: "ooze",
    subTypes: [
      "swarm"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Tiny",
    hd: 1,
    hdVal: 8,
    cr: "1/2",
    racialFeatures: [
      "Blindsight 60 ft."
    ],
    speed: {
      base: 10
    },
    abilities: {
      str: 10,
      dex: 1,
      con: 18,
      int: "-",
      wis: 1,
      cha: 1
    },
    feats: [],
    attacks: [
      {
        weapon: "swarm",
        name: "swarm",
        specialAbility: "viscous",
        damage: 1
      }
    ],
    defense: {},
    space: "10 ft.",
    reach: "0 ft.",
    environment: "any underground",
    visualDescription: "Dozens of tiny globs of slime move on their own, acting as one being, alternately clinging to each other and separating in a riot of oozing momentum.",
    description: "Formed from accumulations of runoff from arcane laboratories and regions of magical calamity, alchemical oozes are fist-sized blobs of volatile chemicals. Although composed of unpredictable compounds and toxins, these mobile oozes pose little threat individually, but in polluted quagmires and tainted sewers can collect in numbers great enough to threaten creatures many times their size. Swarms of the slimes linger in such contaminated areas and seek new accretions of vital solutions, like those found within the bodies of higher life forms, to fuel their erratic life cycles. Found in numerous varieties with a host of differing abilities, these weird, clinging oozes have been differentiated by likening them to the humors said to compose the bodies of living beings. Appearing at first to be a collection of tiny blobs of viscous, translucent fluid, alchemical oozes become far more terrifying once their hungry nature becomes apparent. Each swarm is composed of several hundred palm-sized balls of ooze that all scuttle along as a single unit.",
    organization: "solitary, pair, sputum (3-6), or jelly (3-5 phlegmatic ooze swarms and 1-3 sanguine ooze swarms)",
    spellLikeAbilities: [],
    skills: {},
    special: {
      "maddening slime": {
        type: "Ex",
        text: "Phlegmatic oozes are composed of volatile, mind-altering secretions. Any living creature that begins its turn affected by the phlegmatic ooze's viscous ability must make a DC 14 Fortitude save or be confused for 1 round. This is a mind-affecting effect. Creatures immune to poison are immune to this effect."
      },
      viscous: {
        type: "Ex",
        text: "As described in the sanguine ooze swarm's special abilities, except the Reflex save DC is 14 and the patches are destroyed if the victim takes any amount of fire damage.",
        preText: "DC 14"
      }
    },
    resistances: [
      {
        damageType: "cold",
        value: 5
      }
    ]
  },

  "Melancholic Ooze Swarm": {
    source: "The Haunting Of Harrowstone",
    creatureType: "ooze",
    subTypes: [
      "swarm"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Tiny",
    hd: 2,
    hdVal: 8,
    cr: 1,
    racialFeatures: [
      "Blindsight 60 ft."
    ],
    speed: {
      base: 10
    },
    abilities: {
      str: 14,
      dex: 1,
      con: 18,
      int: "-",
      wis: 1,
      cha: 1
    },
    feats: [],
    attacks: [
      {
        weapon: "swarm",
        name: "swarm",
        specialAbility: "viscous",
        damage: 1
      }
    ],
    defense: {},
    space: "10 ft.",
    reach: "0 ft.",
    environment: "any underground",
    visualDescription: "Dozens of tiny globs of slime move on their own, acting as one being, alternately clinging to each other and separating in a riot of oozing momentum.",
    description: "Formed from accumulations of runoff from arcane laboratories and regions of magical calamity, alchemical oozes are fist-sized blobs of volatile chemicals. Although composed of unpredictable compounds and toxins, these mobile oozes pose little threat individually, but in polluted quagmires and tainted sewers can collect in numbers great enough to threaten creatures many times their size. Swarms of the slimes linger in such contaminated areas and seek new accretions of vital solutions, like those found within the bodies of higher life forms, to fuel their erratic life cycles. Found in numerous varieties with a host of differing abilities, these weird, clinging oozes have been differentiated by likening them to the humors said to compose the bodies of living beings. Appearing at first to be a collection of tiny blobs of viscous, translucent fluid, alchemical oozes become far more terrifying once their hungry nature becomes apparent. Each swarm is composed of several hundred palm-sized balls of ooze that all scuttle along as a single unit.",
    organization: "solitary, pair, or glob (3-4)",
    spellLikeAbilities: [],
    skills: {},
    special: {
      "paralyzing slime": {
        type: "Ex",
        text: "Melancholic oozes are composed of chemical depressants. Any living creature that begins its turn affected by the swarm's viscous ability must make a DC 15 Fortitude save or be paralyzed for 1 round. This is a mindaffecting effect. Creatures immune to poison are immune to this effect."
      },
      viscous: {
        type: "Ex",
        text: "As described in the sanguine ooze swarm's special abilities, except that the Reflex save DC is 15 and the patches are destroyed if the victim takes any amount of acid damage.",
        preText: "DC 15"
      }
    },
    resistances: [
      {
        damageType: "electricity",
        value: 5
      }
    ]
  },

  "Choleric Ooze Swarm": {
    source: "The Haunting Of Harrowstone",
    creatureType: "ooze",
    subTypes: [
      "swarm"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Tiny",
    hd: 3,
    hdVal: 8,
    cr: 2,
    racialFeatures: [
      "Blindsight 60 ft."
    ],
    speed: {
      base: 10
    },
    abilities: {
      str: 16,
      dex: 1,
      con: 19,
      int: "-",
      wis: 1,
      cha: 1
    },
    feats: [],
    attacks: [
      {
        weapon: "swarm",
        name: "swarm",
        specialAbility: "viscous",
        damage: 1,
        bonuses: [
          {
            source: "inherent",
            value: "1d4",
            appliesTo: "damageType",
            damageType: "acid"
          }
        ]
      }
    ],
    defense: {},
    space: "10 ft.",
    reach: "0 ft.",
    environment: "any underground",
    visualDescription: "Dozens of tiny globs of slime move on their own, acting as one being, alternately clinging to each other and separating in a riot of oozing momentum.",
    description: "Formed from accumulations of runoff from arcane laboratories and regions of magical calamity, alchemical oozes are fist-sized blobs of volatile chemicals. Although composed of unpredictable compounds and toxins, these mobile oozes pose little threat individually, but in polluted quagmires and tainted sewers can collect in numbers great enough to threaten creatures many times their size. Swarms of the slimes linger in such contaminated areas and seek new accretions of vital solutions, like those found within the bodies of higher life forms, to fuel their erratic life cycles. Found in numerous varieties with a host of differing abilities, these weird, clinging oozes have been differentiated by likening them to the humors said to compose the bodies of living beings. Appearing at first to be a collection of tiny blobs of viscous, translucent fluid, alchemical oozes become far more terrifying once their hungry nature becomes apparent. Each swarm is composed of several hundred palm-sized balls of ooze that all scuttle along as a single unit.",
    organization: "solitary, pair, mass (3-7), or sludge (3-5 melancholic ooze swarms and 2-4 choleric ooze swarms)",
    spellLikeAbilities: [],
    skills: {},
    special: {
      corrosion: {
        type: "Ex"
      },
      viscous: {
        type: "Ex",
        text: "As described in the sanguine ooze swarm's special abilities, except that the Reflex save DC is 15 and the patches are destroyed if the victim takes any amount of electricity damage.",
        preText: "DC 15"
      }
    },
    resistances: [
      {
        damageType: "acid",
        value: 5
      }
    ]
  },

  "Severed Head": {
    source: "The Haunting Of Harrowstone",
    creatureType: "undead",
    subTypes: [],
    alignments: [
      "Neutral Evil"
    ],
    size: "Tiny",
    hd: 1,
    hdVal: 8,
    cr: "1/3",
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      maneuverability: "Perfect",
      fly: 40
    },
    abilities: {
      str: 11,
      dex: 15,
      con: "-",
      int: "-",
      wis: 11,
      cha: 10
    },
    feats: [],
    attacks: [
      {
        weapon: "Slam",
        name: "Slam",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "This humanoid head floats silently and ominously, bits of flesh still hanging from its face and graying teeth clattering slightly as it bobs in the air.",
    description: "Beheaded are floating skulls or severed heads whose bodies have long since abandoned them, either in the moment of death or long after. Reanimated via dark magic, these horrors are usually created as mindless sentinels for dungeons or lairs. Beheaded silently hover at about eye-level, often making them the last thing a casual wanderer or careless villager in an infested area ever sees. Creating Beheaded Spellcasters might create and employ beheaded in multiple ways. Animating Beheaded: A magic-user can create any form of beheaded from a severed head of the appropriate size or creature. The spellcaster must cast the spell animate dead using an onyx gem worth at least 100 gp, followed by the spell fly on the head to be animated. The creator can only create a number of Hit Dice of beheaded equal to the amount allowed by animate dead. Beheaded with the variant abilities below can also be created, though for the purposes of how many can be created, they are treated as if they had one additional Hit Die for each additional ability. Beheaded count against the number of Hit Dice of skeletons or zombies that can be created using animate dead and vise versa. Beheaded Familiars: Using the Improved Familiar feat, a spellcaster can gain an obedient severed head as a familiar. The character must be at least caster level 3rd to acquire the severed head. This creature is always neutral evil. Although any type of magic-user with the proper requisites can take a severed head as a familiar, necromancers and undead wizards employ them most frequently. Variant Beheaded The following are variant abilities that a beheaded might possess. These traits can be mixed and matched in any way and applied to any of the beheaded listed above. Each ability increases the CR of the beheaded by the listed amount. Belching (+1 CR): A belching beheaded gains the ability to spew raw energy from its mouth, giving it a ranged touch attack that does 1d6 damage of a specific type (acid, cold, electric, or fire) chosen at the time of the beheaded's animation. Burning (+1 CR): This beheaded is similar to the flaming skull; however, the fire not only surrounds the skull, but can pass on to those it attacks. The fire that consumes the head can be any color the animator chooses, though blue is one of the most common. A burning skull gains the burn (1d6) special ability when using its slam attack, where the Reflex save DC is 10 + 1/2 the burning skull's racial HD + the burning skull's Cha modifier. Grabbing (+0 CR): This type of beheaded has long tendrils of ragged hair. It gains the grab special ability when using its slam attack, and can attempt to grapple any creature of Medium size or smaller in this way Screaming (+0 CR): Once every 1d4 rounds, a screaming beheaded can open its jaw and emit a bone-chilling scream. All creatures within 30 feet must make a Will save or be shaken for 1d4 rounds. The save DC is equal to 10 + 1/2 the screaming skull's racial HD + the screaming skull's Cha modifier. This is a sonic mind-affecting fear effect. Whether or not the save is successful, an affected creature is immune to the same beheaded's scream for 24 hours.",
    organization: "solitary, pair, or patrol (3-6)",
    spellLikeAbilities: [],
    skills: {},
    special: {}
  },

  "Flaming Skull": {
    source: "The Haunting Of Harrowstone",
    creatureType: "undead",
    subTypes: [],
    alignments: [
      "Neutral Evil"
    ],
    size: "Tiny",
    hd: 1,
    hdVal: 8,
    cr: "1/2",
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      maneuverability: "Perfect",
      fly: 40
    },
    abilities: {
      str: 9,
      dex: 12,
      con: "-",
      int: "-",
      wis: 10,
      cha: 13
    },
    feats: [],
    attacks: [
      {
        weapon: "Slam",
        name: "Slam",
        damage: "1d4",
        bonuses: [
          {
            source: "inherent",
            value: "1d6",
            appliesTo: "damageType",
            damageType: "fire"
          }
        ],
        type: "primary"
      }
    ],
    immunities: [
      "Immune to fire"
    ],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "This humanoid head floats silently and ominously, bits of flesh still hanging from its face and graying teeth clattering slightly as it bobs in the air.",
    description: "Beheaded are floating skulls or severed heads whose bodies have long since abandoned them, either in the moment of death or long after. Reanimated via dark magic, these horrors are usually created as mindless sentinels for dungeons or lairs. Beheaded silently hover at about eye-level, often making them the last thing a casual wanderer or careless villager in an infested area ever sees. Creating Beheaded Spellcasters might create and employ beheaded in multiple ways. Animating Beheaded: A magic-user can create any form of beheaded from a severed head of the appropriate size or creature. The spellcaster must cast the spell animate dead using an onyx gem worth at least 100 gp, followed by the spell fly on the head to be animated. The creator can only create a number of Hit Dice of beheaded equal to the amount allowed by animate dead. Beheaded with the variant abilities below can also be created, though for the purposes of how many can be created, they are treated as if they had one additional Hit Die for each additional ability. Beheaded count against the number of Hit Dice of skeletons or zombies that can be created using animate dead and vise versa. Beheaded Familiars: Using the Improved Familiar feat, a spellcaster can gain an obedient severed head as a familiar. The character must be at least caster level 3rd to acquire the severed head. This creature is always neutral evil. Although any type of magic-user with the proper requisites can take a severed head as a familiar, necromancers and undead wizards employ them most frequently. Variant Beheaded The following are variant abilities that a beheaded might possess. These traits can be mixed and matched in any way and applied to any of the beheaded listed above. Each ability increases the CR of the beheaded by the listed amount. Belching (+1 CR): A belching beheaded gains the ability to spew raw energy from its mouth, giving it a ranged touch attack that does 1d6 damage of a specific type (acid, cold, electric, or fire) chosen at the time of the beheaded's animation. Burning (+1 CR): This beheaded is similar to the flaming skull; however, the fire not only surrounds the skull, but can pass on to those it attacks. The fire that consumes the head can be any color the animator chooses, though blue is one of the most common. A burning skull gains the burn (1d6) special ability when using its slam attack, where the Reflex save DC is 10 + 1/2 the burning skull's racial HD + the burning skull's Cha modifier. Grabbing (+0 CR): This type of beheaded has long tendrils of ragged hair. It gains the grab special ability when using its slam attack, and can attempt to grapple any creature of Medium size or smaller in this way Screaming (+0 CR): Once every 1d4 rounds, a screaming beheaded can open its jaw and emit a bone-chilling scream. All creatures within 30 feet must make a Will save or be shaken for 1d4 rounds. The save DC is equal to 10 + 1/2 the screaming skull's racial HD + the screaming skull's Cha modifier. This is a sonic mind-affecting fear effect. Whether or not the save is successful, an affected creature is immune to the same beheaded's scream for 24 hours.",
    organization: "solitary, pair, or patrol (3-6)",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 0
      }
    },
    special: {}
  },

  "Skull Swarm": {
    source: "The Haunting Of Harrowstone",
    creatureType: "undead",
    subTypes: [
      "swarm"
    ],
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
      maneuverability: "Perfect",
      fly: 40
    },
    abilities: {
      str: 5,
      dex: 15,
      con: "-",
      int: "-",
      wis: 10,
      cha: 10
    },
    feats: [],
    attacks: [
      {
        weapon: "swarm",
        name: "swarm",
        damage: "1d6"
      }
    ],
    immunities: [
      "Immune to weapon damage"
    ],
    defense: {},
    space: "10 ft.",
    reach: "0 ft.",
    environment: "any",
    visualDescription: "This humanoid head floats silently and ominously, bits of flesh still hanging from its face and graying teeth clattering slightly as it bobs in the air.",
    description: "Beheaded are floating skulls or severed heads whose bodies have long since abandoned them, either in the moment of death or long after. Reanimated via dark magic, these horrors are usually created as mindless sentinels for dungeons or lairs. Beheaded silently hover at about eye-level, often making them the last thing a casual wanderer or careless villager in an infested area ever sees. Creating Beheaded Spellcasters might create and employ beheaded in multiple ways. Animating Beheaded: A magic-user can create any form of beheaded from a severed head of the appropriate size or creature. The spellcaster must cast the spell animate dead using an onyx gem worth at least 100 gp, followed by the spell fly on the head to be animated. The creator can only create a number of Hit Dice of beheaded equal to the amount allowed by animate dead. Beheaded with the variant abilities below can also be created, though for the purposes of how many can be created, they are treated as if they had one additional Hit Die for each additional ability. Beheaded count against the number of Hit Dice of skeletons or zombies that can be created using animate dead and vise versa. Beheaded Familiars: Using the Improved Familiar feat, a spellcaster can gain an obedient severed head as a familiar. The character must be at least caster level 3rd to acquire the severed head. This creature is always neutral evil. Although any type of magic-user with the proper requisites can take a severed head as a familiar, necromancers and undead wizards employ them most frequently. Variant Beheaded The following are variant abilities that a beheaded might possess. These traits can be mixed and matched in any way and applied to any of the beheaded listed above. Each ability increases the CR of the beheaded by the listed amount. Belching (+1 CR): A belching beheaded gains the ability to spew raw energy from its mouth, giving it a ranged touch attack that does 1d6 damage of a specific type (acid, cold, electric, or fire) chosen at the time of the beheaded's animation. Burning (+1 CR): This beheaded is similar to the flaming skull; however, the fire not only surrounds the skull, but can pass on to those it attacks. The fire that consumes the head can be any color the animator chooses, though blue is one of the most common. A burning skull gains the burn (1d6) special ability when using its slam attack, where the Reflex save DC is 10 + 1/2 the burning skull's racial HD + the burning skull's Cha modifier. Grabbing (+0 CR): This type of beheaded has long tendrils of ragged hair. It gains the grab special ability when using its slam attack, and can attempt to grapple any creature of Medium size or smaller in this way Screaming (+0 CR): Once every 1d4 rounds, a screaming beheaded can open its jaw and emit a bone-chilling scream. All creatures within 30 feet must make a Will save or be shaken for 1d4 rounds. The save DC is equal to 10 + 1/2 the screaming skull's racial HD + the screaming skull's Cha modifier. This is a sonic mind-affecting fear effect. Whether or not the save is successful, an affected creature is immune to the same beheaded's scream for 24 hours.",
    organization: "solitary, pair, or mass (3-5)",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 0
      }
    },
    special: {}
  },

  "Giant Beheaded": {
    legs: 0,
    arms: 0,
    source: "The Haunting Of Harrowstone",
    creatureType: "undead",
    subTypes: [],
    alignments: [
      "Neutral Evil"
    ],
    size: "Large",
    hd: 3,
    hdVal: 8,
    cr: 2,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      maneuverability: "Perfect",
      fly: 30
    },
    abilities: {
      str: 16,
      dex: 13,
      con: "-",
      int: "-",
      wis: 9,
      cha: 15
    },
    feats: [],
    attacks: [
      {
        weapon: "Slam",
        name: "Slams",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 3
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "This humanoid head floats silently and ominously, bits of flesh still hanging from its face and graying teeth clattering slightly as it bobs in the air.",
    description: "Beheaded are floating skulls or severed heads whose bodies have long since abandoned them, either in the moment of death or long after. Reanimated via dark magic, these horrors are usually created as mindless sentinels for dungeons or lairs. Beheaded silently hover at about eye-level, often making them the last thing a casual wanderer or careless villager in an infested area ever sees. Creating Beheaded Spellcasters might create and employ beheaded in multiple ways. Animating Beheaded: A magic-user can create any form of beheaded from a severed head of the appropriate size or creature. The spellcaster must cast the spell animate dead using an onyx gem worth at least 100 gp, followed by the spell fly on the head to be animated. The creator can only create a number of Hit Dice of beheaded equal to the amount allowed by animate dead. Beheaded with the variant abilities below can also be created, though for the purposes of how many can be created, they are treated as if they had one additional Hit Die for each additional ability. Beheaded count against the number of Hit Dice of skeletons or zombies that can be created using animate dead and vise versa. Beheaded Familiars: Using the Improved Familiar feat, a spellcaster can gain an obedient severed head as a familiar. The character must be at least caster level 3rd to acquire the severed head. This creature is always neutral evil. Although any type of magic-user with the proper requisites can take a severed head as a familiar, necromancers and undead wizards employ them most frequently. Variant Beheaded The following are variant abilities that a beheaded might possess. These traits can be mixed and matched in any way and applied to any of the beheaded listed above. Each ability increases the CR of the beheaded by the listed amount. Belching (+1 CR): A belching beheaded gains the ability to spew raw energy from its mouth, giving it a ranged touch attack that does 1d6 damage of a specific type (acid, cold, electric, or fire) chosen at the time of the beheaded's animation. Burning (+1 CR): This beheaded is similar to the flaming skull; however, the fire not only surrounds the skull, but can pass on to those it attacks. The fire that consumes the head can be any color the animator chooses, though blue is one of the most common. A burning skull gains the burn (1d6) special ability when using its slam attack, where the Reflex save DC is 10 + 1/2 the burning skull's racial HD + the burning skull's Cha modifier. Grabbing (+0 CR): This type of beheaded has long tendrils of ragged hair. It gains the grab special ability when using its slam attack, and can attempt to grapple any creature of Medium size or smaller in this way Screaming (+0 CR): Once every 1d4 rounds, a screaming beheaded can open its jaw and emit a bone-chilling scream. All creatures within 30 feet must make a Will save or be shaken for 1d4 rounds. The save DC is equal to 10 + 1/2 the screaming skull's racial HD + the screaming skull's Cha modifier. This is a sonic mind-affecting fear effect. Whether or not the save is successful, an affected creature is immune to the same beheaded's scream for 24 hours.",
    organization: "solitary",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 0
      }
    },
    special: {}
  },

  "Medusa Head": {
    source: "The Haunting Of Harrowstone",
    creatureType: "undead",
    subTypes: [],
    alignments: [
      "Neutral Evil"
    ],
    size: "Small",
    hd: 4,
    hdVal: 8,
    cr: 3,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      maneuverability: "Perfect",
      fly: 40
    },
    abilities: {
      str: 14,
      dex: 12,
      con: "-",
      int: "-",
      wis: 11,
      cha: 15
    },
    feats: [
      {
        name: "Flyby Attack",
        type: "Monster"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "petrifying bite",
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 3
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "This humanoid head floats silently and ominously, bits of flesh still hanging from its face and graying teeth clattering slightly as it bobs in the air.",
    description: "Beheaded are floating skulls or severed heads whose bodies have long since abandoned them, either in the moment of death or long after. Reanimated via dark magic, these horrors are usually created as mindless sentinels for dungeons or lairs. Beheaded silently hover at about eye-level, often making them the last thing a casual wanderer or careless villager in an infested area ever sees. Creating Beheaded Spellcasters might create and employ beheaded in multiple ways. Animating Beheaded: A magic-user can create any form of beheaded from a severed head of the appropriate size or creature. The spellcaster must cast the spell animate dead using an onyx gem worth at least 100 gp, followed by the spell fly on the head to be animated. The creator can only create a number of Hit Dice of beheaded equal to the amount allowed by animate dead. Beheaded with the variant abilities below can also be created, though for the purposes of how many can be created, they are treated as if they had one additional Hit Die for each additional ability. Beheaded count against the number of Hit Dice of skeletons or zombies that can be created using animate dead and vise versa. Beheaded Familiars: Using the Improved Familiar feat, a spellcaster can gain an obedient severed head as a familiar. The character must be at least caster level 3rd to acquire the severed head. This creature is always neutral evil. Although any type of magic-user with the proper requisites can take a severed head as a familiar, necromancers and undead wizards employ them most frequently. Variant Beheaded The following are variant abilities that a beheaded might possess. These traits can be mixed and matched in any way and applied to any of the beheaded listed above. Each ability increases the CR of the beheaded by the listed amount. Belching (+1 CR): A belching beheaded gains the ability to spew raw energy from its mouth, giving it a ranged touch attack that does 1d6 damage of a specific type (acid, cold, electric, or fire) chosen at the time of the beheaded's animation. Burning (+1 CR): This beheaded is similar to the flaming skull; however, the fire not only surrounds the skull, but can pass on to those it attacks. The fire that consumes the head can be any color the animator chooses, though blue is one of the most common. A burning skull gains the burn (1d6) special ability when using its slam attack, where the Reflex save DC is 10 + 1/2 the burning skull's racial HD + the burning skull's Cha modifier. Grabbing (+0 CR): This type of beheaded has long tendrils of ragged hair. It gains the grab special ability when using its slam attack, and can attempt to grapple any creature of Medium size or smaller in this way Screaming (+0 CR): Once every 1d4 rounds, a screaming beheaded can open its jaw and emit a bone-chilling scream. All creatures within 30 feet must make a Will save or be shaken for 1d4 rounds. The save DC is equal to 10 + 1/2 the screaming skull's racial HD + the screaming skull's Cha modifier. This is a sonic mind-affecting fear effect. Whether or not the save is successful, an affected creature is immune to the same beheaded's scream for 24 hours.",
    organization: "solitary, pair, or trio",
    languages: "Common",
    spellLikeAbilities: [],
    skills: {},
    special: {
      "petrifying bite": {
        type: "Su",
        text: "Creatures bitten by a medusa head must make a DC 14 Fortitude save or turn to stone for 1d4 rounds. Targets immune to poison are immune to this effect. The save DC is Charisma-based."
      }
    }
  },

};
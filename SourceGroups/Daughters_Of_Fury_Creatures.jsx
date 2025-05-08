
export const Daughters_Of_FuryCreatures = {
  "Chimney Troll": {
    source: "Daughters Of Fury",
    creatureType: "humanoid",
    subTypes: [
      "giant"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Large",
    hd: 3,
    hdVal: 8,
    cr: 2,
    racialFeatures: [
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 30,
      climb: 20
    },
    abilities: {
      str: 13,
      dex: 16,
      con: 15,
      int: 8,
      wis: 11,
      cha: 6
    },
    feats: [
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Deadly Aim",
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
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Rock",
        name: "Rock",
        damage: "1d8"
      }
    ],
    defense: {
      naturalArmor: 2
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any urban",
    visualDescription: "Filth and soot cover this large, emaciated humanoid's pallid skin, and its beady black eyes glint with desperate hunger.",
    description: "Chimney trolls are gaunt, pale giants that skulk among the shadowy rooftops of towns and cities, searching for flames to heal their cursed wounds and flesh to sate their bellies. To claim the fire they need to survive, they twist their limbs into impossible positions, hiding in chimneys and sucking up the flames from frightened townsfolk's hearths. By some cruel twist of fate or malicious necromancy, chimney trolls' accursed bodies can heal wounds only if they consume the very substance trolls loathe most: fire. This desperate reliance on fire has made them anathema to their kin, who long ago drove them from their mountain homes and into civilized lands. Chimney trolls are 9 feet tall and weigh 350 pounds.",
    organization: "solitary or gang (2-3)",
    languages: "Giant",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 1
      },
      Climb: {
        ranks: 0
      },
      Perception: {
        ranks: 4
      },
      Stealth: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      "soot breath": {
        type: "Su",
        text: "As a standard action, a chimney troll can exhale a searing cloud of smoke and cinders that fills the lungs of a targeted creature within 30 feet. The victim takes 1d6 points of fire damage and becomes nauseated for 1d3 rounds. A successful DC 13 Fortitude save halves the fire damage taken and negates the nausea effect. This ability can be used once each time the chimney troll inhales flames and only within 3 rounds of using that ability. The save DC is Constitution-based. Wicked Blood (Ex) Chimney trolls cannot heal hit point damage naturally (such as by resting)."
      },
      "rock throwing": {
        universalMonsterAbility: "Rock Throwing",
        type: "Ex",
        range: "60 ft."
      },
      compression: {
        universalMonsterAbility: "Compression"
      },
      "inhale flames": {
        type: "Ex",
        text: "As a standard action, a chimney troll can inhale a single nonmagical fire up to the size of a campfire within 30 feet. This extinguishes the fire and grants the chimney troll regeneration 3 (acid, cold) for 3 rounds. If the fire is attended (such as fire on a held torch), a successful DC 13 Reflex save negates this effect. The save DC is Constitution-based."
      }
    },
    resistances: [
      {
        damageType: "fire",
        value: 10
      }
    ]
  },

  "Curse Devil": {
    source: "Daughters Of Fury",
    creatureType: "outsider",
    subTypes: [
      "devil",
      "evil",
      "extraplanar",
      "lawful"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Small",
    hd: 6,
    hdVal: 10,
    cr: 5,
    racialFeatures: [
      "Darkvision 60 ft.",
      "See in Darkness",
      "Detect Magic",
      "Detect Thoughts"
    ],
    speed: {
      base: 20,
      maneuverability: "Perfect",
      fly: 40
    },
    abilities: {
      str: 8,
      dex: 18,
      con: 12,
      int: 13,
      wis: 15,
      cha: 17
    },
    feats: [
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Great Fortitude",
        type: "General"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "cold or silver"
      },
      naturalArmor: 4
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Hell)",
    visualDescription: "This short fiend has mottled pink skin, clawed fingers, and green eyes. It drags a tattered scroll behind its feminine frame.",
    description: "Curse devils, or phiams, are constructs of Hell that exist outside the infernal hierarchy. They are forged by more powerful devils to hunt down mortals whose souls belong to Hell. When folk speak of \"family curses\" or \"damned fates,\" a curse devil is often pulling strings. A curse devil is 4 feet tall and weighs 80 pounds.",
    organization: "solitary",
    languages: "Infernal; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "detect magic",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "detect thoughts",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "daze",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "teleport, greater",
        casterLevel: 6,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: -1
      },
      {
        name: "mage hand",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "bane",
        casterLevel: 6,
        timesPerDay: 5
      },
      {
        name: "chill touch",
        casterLevel: 6,
        timesPerDay: 5
      },
      {
        name: "doom",
        casterLevel: 6,
        timesPerDay: 5
      },
      {
        name: "bestow curse",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "suggestion",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "touch of idiocy",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "blindness/deafness",
        casterLevel: 6,
        timesPerDay: 1
      },
      {
        name: "confusion",
        casterLevel: 6,
        timesPerDay: 1
      },
      {
        name: "contagion",
        casterLevel: 6,
        timesPerDay: 1
      },
      {
        name: "summon",
        casterLevel: 6,
        limitations: "level 3, 2 lesser host devils 50%",
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 6
      },
      Fly: {
        ranks: 9
      },
      Intimidate: {
        ranks: 9
      },
      Perception: {
        ranks: 6
      },
      "Sense Motive": {
        ranks: 6
      },
      Spellcraft: {
        ranks: 9
      },
      Stealth: {
        ranks: 6
      }
    },
    special: {
      anathematize: {
        type: "Su",
        text: "Once per day as a standard action, a curse devil can temporarily drop its natural invisibility to reveal its true, horrifying form. All creatures within 30 feet must succeed at a DC 16 Will save or become cursed as bestow curse; additionally, all creatures in the area must succeed at a second DC 16 Will save or have their memories of the event stripped as if by modify memory. The curse devil can resume its invisibility at the end of its turn as a free action. Whether or not the saves are successful, an affected creature is immune to that curse devil's anathematize ability for 24 hours. If its natural invisibility is negated by other methods, the curse devil can't use this ability. Those who can see invisible creatures are immune to this effect. The save DCs are Charisma-based."
      },
      "broken curses": {
        type: "Ex",
        text: "When a curse devil dies, any lingering curses or harmful effects caused by the devil are undone as if by a miracle spell."
      },
      "infernal bond": {
        type: "Ex",
        text: "When a curse devil is created by a lesser or greater devil, its creator forges a magical link between the curse devil and a mortal signed to-or implicated in-an infernal contract, such as a mortal who sold her soul to a devil or the first-born child of a mortal who was promised in an infernal bargain). Thereafter, the curse devil can always find the specified mortal as though guided by a locate creature spell with no maximum range. The specified mortal takes a -2 penalty on saving throws against the curse devil's anathematize ability and its spell-like abilities."
      },
      "natural invisibility": {
        type: "Ex"
      }
    }
  },

  Dunagh: {
    source: "Daughters Of Fury",
    creatureType: "outsider",
    subTypes: [
      "incorporeal",
      "kami",
      "native"
    ],
    alignments: [
      "Lawful Neutral"
    ],
    size: "Medium",
    hd: 5,
    hdVal: 10,
    cr: 4,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      maneuverability: "Perfect",
      fly: 30
    },
    abilities: {
      str: "-",
      dex: 17,
      con: 14,
      int: 11,
      wis: 17,
      cha: 16
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Incorporeal touch",
        name: "Incorporeal touch",
        specialAbility: "dunagh's curse",
        damage: "2d6"
      }
    ],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any urban",
    visualDescription: "This spectral woman holds a silver urn and floats in midair with an unearthly grace and demanding presence.",
    description: "Dunaghs, like most kami, are guardian spirits native to Tian Xia. Unlike others of their kind, however, dunaghs long ago attached themselves to caravans coming over the Crown of the World, eventually establishing themselves in the Lands of the Linnorm Kings, where they're most likely to be found today. Attracted by a family's or clan's intense devotion to a single structure or holding, the dunaghs serve as guardians of family homes, watchful protectors of both the structures and those who live within them. Most dunaghs prefer to remain anonymous, going about their business when residents are not present. They occasionally assist \"their\" family by tidying up the house, locking doors, or shutting windows left open during the cold months. When a family line watched over by a dunagh comes to an end, the dunagh falls into a bleak depression and remains fixated on the family's last place of residence, becoming a spiteful spirit that forcibly evicts anyone else who tries to take up residence or otherwise trespass upon its ward. Dunaghs prefer to stay merged with their wards, but in their visible forms, they take on appearances similar to ghostly versions of those people they guard.",
    organization: "solitary",
    languages: "Common; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "mage hand",
        casterLevel: 5,
        timesPerDay: -1
      }
    ],
    skills: {
      Fly: {
        ranks: 8
      },
      Intimidate: {
        ranks: 8
      },
      "Knowledge (local)": {
        ranks: 8
      },
      Perception: {
        ranks: 5
      },
      "Sense Motive": {
        ranks: 5
      },
      Stealth: {
        ranks: 5
      }
    },
    special: {
      ward: {
        type: "Ex",
        preText: "house"
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        value: null
      },
      fate: {
        type: "Su",
        text: "A dunagh merged with or within 120 feet of its ward radiates an aura of fate to a radius of 20 feet. Enemies within this aura must roll two d20s whenever a situation calls for a d20 roll (such as an attack, a skill check, or a saving throw) and take the lower of the two results. Allies designated by the dunagh in this aura likewise roll two d20s whenever a situation calls for a d20 roll, but can take the higher result instead. This is a mind-affecting morale effect that doesn't work on fey. A dunagh can suppress and reactivate this aura at will as a free action.",
        preText: "20 ft., DC 15"
      },
      "dunagh's curse": {
        type: "Su",
        text: "Any creature touched by a dunagh must succeed at a DC 15 Will save or be afflicted with the dunagh's curse. Whenever the cursed creature rolls a d20, it treats any roll of 20 as a roll of 1 instead. The cursed creature cannot take 20. The save DC is Charisma-based."
      }
    },
    resistances: [
      {
        damageType: "cold",
        value: 10
      }
    ]
  },

  Immured: {
    source: "Daughters Of Fury",
    creatureType: "undead",
    subTypes: [],
    alignments: [
      "Neutral Evil"
    ],
    size: "Medium",
    hd: 4,
    hdVal: 8,
    cr: 3,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 16,
      dex: 11,
      con: "-",
      int: 5,
      wis: 13,
      cha: 14
    },
    feats: [
      {
        name: "Improved Drag",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Power Attack",
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
      naturalArmor: 6
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any urban",
    visualDescription: "Through cracked, sickly blue lips, this pallid humanoid figure emits deep gasps as if struggling to breathe.",
    description: "Immured are undead remains of those who died of slow suffocation in a confined, lightless space. Their feelings of abject terror and desperate desire to escape before death manifest as an ability to open temporary rifts in reality. Although they loathe the bright lights and open spaces of the world outside, they occasionally emerge to violently hush any sounds that disturb their repose. Some immured find the last gasps of dying creatures intoxicating, so they seek out victims to choke night after night. While an accidental live burial can trigger the birth of an immured, most of these unfortunates are brought about by purposeful malevolence, such as being walled in as a form of torture or execution in life. In cultures obsessed with undeath or the afterlife, living servants are sometimes honored by being entombed with their masters, which can create immured. An immured is 6 feet tall and weighs 100 pounds.",
    organization: "solitary or gang (2-5)",
    languages: "Common (can't speak)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 2
      },
      Stealth: {
        ranks: 2
      }
    },
    special: {
      breach: {
        type: "Su",
        text: "As a swift action, an immured can touch a nonmagical wall and open a spatial rift. The touched 5-foot section of wall (which can be up to 2 feet thick) effectively ceases to exist for 2 rounds, except for a dark, semisolid membrane that blocks line of sight through the rift. The immured can see, move, attack, or even drag a target through the rift without penalty. Other creatures can move through the rift, treating it as difficult terrain. After 2 rounds, the rift closes, pushing anything inside it into the nearest open space."
      },
      seize: {
        type: "Ex",
        text: "An immured can choose to deal nonlethal damage with its slam attack with no penalty on the attack roll. In addition, an immured that deals nonlethal damage with its slam attack can attempt a drag combat maneuver against the target as a free action."
      },
      breathlessness: {
        type: "Su",
        text: "The agonized gasping of an immured displaces oxygen within 10 feet of it, automatically extinguishing nonmagical fires within this range. Breathing creatures within the aura must hold their breath or risk suffocation. Whenever an immured deals nonlethal damage to a creature holding its breath in the aura, the duration the target can hold its breath for decreases by a number of rounds equal to the nonlethal damage dealt. The immured cannot dismiss this aura. Bound (Su) Immured are bound to the locations in which they died. Each hour an immured remains away from the tomb or building in which it died, it takes 1d6 points of damage that can't be healed until it returns to its place of death.",
        preText: "10 ft., DC 14"
      }
    },
    resistances: [
      "bound"
    ]
  },

};

export const Fey_RevisitedCreatures = {
  "Blackwood Satyr": {
    source: "Fey Revisited",
    creatureType: "fey",
    subTypes: [],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Medium",
    hd: 9,
    hdVal: 6,
    cr: 7,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 15,
      dex: 20,
      con: 17,
      int: 14,
      wis: 16,
      cha: 21
    },
    feats: [
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Mobility",
        type: "Combat"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Perception",
        choiceSource: "Skill Focus"
      },
      {
        name: "Spell Penetration",
        type: "General"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Longbow",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Dagger",
        name: "Dagger",
        damage: "1d4"
      },
      {
        weapon: "Horn",
        name: "Horns",
        damage: "1d6"
      },
      {
        weapon: "Longbow",
        enchantments: [
          {
            name: "Enhancement Bonus +1",
            source: "inherent"
          }
        ],
        name: "Longbow",
        damage: "1d8"
      }
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "cold iron"
      },
      naturalArmor: 4
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "temperate forests",
    visualDescription: "This handsome, grinning man has the furry legs of a goat and a set of curling ram horns extending from his temples.",
    description: "Blackwood satyrs are an especially infamous breed of fey indigenous to the Verduran Forest, which straddles the borders of Andoran, Taldor, and Galt. They are well known throughout southeastern Avistan for exuding the pleasantly sweet aroma of blackwood tar, from which they gain their name. Though the human population surrounding the Verduran Forest seldom ventures deep into the fey wood for anything other than logging, the blackwood satyrs seem to take perverse pleasure in waylaying noble lords and ladies during their passage down the heavily traveled Sellen River, playing songs from the river's bank to lure vessels closer and enthrall all aboard.",
    organization: "solitary, pair, band (3-6), or orgy (7-11)",
    languages: "Common, Sylvan",
    gear: "sleep arrows (3), +1 seeking arrows (5); Other Gear +1 longbow with 20 arrows, dagger, efficient quiver",
    spellLikeAbilities: [
      {
        name: "dancing lights",
        casterLevel: 8,
        timesPerDay: -1
      },
      {
        name: "deep slumber",
        casterLevel: 8,
        timesPerDay: -1
      },
      {
        name: "ghost sound",
        casterLevel: 8,
        timesPerDay: -1
      },
      {
        name: "suggestion",
        casterLevel: 8,
        timesPerDay: -1
      },
      {
        name: "major image",
        casterLevel: 8,
        timesPerDay: 3
      },
      {
        name: "reckless infatuation",
        casterLevel: 8,
        timesPerDay: 3
      },
      {
        name: "charm monster",
        casterLevel: 8,
        timesPerDay: 1
      },
      {
        name: "summon nature's ally iv",
        casterLevel: 8,
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 6
      },
      Diplomacy: {
        ranks: 9
      },
      "Handle Animal": {
        ranks: 4
      },
      Intimidate: {
        ranks: 4
      },
      "Knowledge (local)": {
        ranks: 8
      },
      "Knowledge (nature)": {
        ranks: 8
      },
      Perception: {
        ranks: 9,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Perform0: {
        subSkill: "wind",
        ranks: 13
      },
      "Sense Motive": {
        ranks: 4
      },
      Spellcraft: {
        ranks: 6
      },
      Stealth: {
        ranks: 5,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      }
    },
    special: {
      pipes: {
        type: "Su",
        text: "A blackwood satyr can focus and empower his magical abilities by playing haunting melodies on his panpipes. When he plays, all creatures within a 60-foot radius must succeed at a DC 19 Will save or be affected by charm monster, deep slumber, reckless infatuation, or suggestion, depending on what tune the satyr chooses. A creature that successfully saves against any of the pipes' effects cannot be affected by the same set of pipes for 24 hours, but can still be affected by the blackwood satyr's other spell-like abilities as normal. The satyr's use of his pipes does not count toward his uses per day of his spell-like abilities, and if separated from them, he may continue to use his standard abilities. The pipes themselves are masterwork, and a satyr can craft a replacement with 1 week of labor. The save DC is Charisma-based.",
        preText: "DC 19"
      },
      "incorrigible charm": {
        type: "Su",
        text: "A blackwood satyr emits an aura of incorrigible charm out to a radius of 30 feet. Any creature that begins its turn in this area of effect must succeed at a DC 19 Will save, or be affected as per the spell charm person. The blackwood satyr can suppress or resume this ability at will. This is a mind-affecting effect. The save DC is Charisma-based. Pipes (Su) A blackwood satyr can focus and empower his magical abilities by playing haunting melodies on his panpipes. When he plays, all creatures within a 60-foot radius must succeed at a DC 19 Will save or be affected by charm monster, deep slumber, reckless infatuation, or suggestion, depending on what tune the satyr chooses. A creature that successfully saves against any of the pipes' effects cannot be affected by the same set of pipes for 24 hours, but can still be affected by the blackwood satyr's other spell-like abilities as normal. The satyr's use of his pipes does not count toward his uses per day of his spell-like abilities, and if separated from them, he may continue to use his standard abilities. The pipes themselves are masterwork, and a satyr can craft a replacement with 1 week of labor. The save DC is Charisma-based.",
        preText: "30 ft., DC 19"
      }
    }
  },

  "Sprite Swarm": {
    source: "Fey Revisited",
    creatureType: "fey",
    subTypes: [
      "swarm"
    ],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Diminutive",
    hd: 10,
    hdVal: 6,
    cr: 5,
    racialFeatures: [
      "Low-Light Vision",
      "Detect Evil",
      "Detect Good"
    ],
    speed: {
      base: 15,
      maneuverability: "Perfect",
      fly: 60
    },
    abilities: {
      str: 3,
      dex: 17,
      con: 12,
      int: 6,
      wis: 11,
      cha: 10
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
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
        name: "Skill Focus",
        type: "General",
        value: "Perception",
        choiceSource: "Skill Focus"
      }
    ],
    attacks: [
      {
        weapon: "swarm",
        name: "swarm",
        specialAbility: "distraction",
        damage: "2d6"
      }
    ],
    immunities: [
      "Immune to weapon damage"
    ],
    defense: {
      DR: {
        value: 2,
        damageType: "cold iron"
      }
    },
    space: "10 ft.",
    reach: "0 ft.",
    environment: "temperate forests",
    visualDescription: "Thousands of tiny, colorful winged humanoids crawl from every corner of the forest to form this buzzing, writhing swarm.",
    description: "When intruders threaten their beloved homes, sprite guards in large villages are taught to call for their fellow tribe members to form a vicious, enveloping swarm to drive back their enemies. Typically consisting of at least 5,000 sprites, these swarms are known for inflicting pain upon any creatures in their paths. Sprite swarms typically form only when the sprites' village is threatened by a large number of intruders or a single powerful foe; however, the malevolent sprites of Geb are quick to form swarms when faced with intrusion of any kind.",
    organization: "solitary",
    languages: "Common, Sylvan",
    spellLikeAbilities: [
      {
        name: "detect evil",
        casterLevel: 5,
        timesPerDay: -1
      },
      {
        name: "detect good",
        casterLevel: 5,
        timesPerDay: -1
      },
      {
        name: "daze, mass",
        casterLevel: 5,
        timesPerDay: 1
      }
    ],
    skills: {
      Fly: {
        ranks: 8
      },
      Intimidate: {
        ranks: 10
      },
      Perception: {
        ranks: 6
      },
      "Sense Motive": {
        ranks: 4
      },
      Stealth: {
        ranks: 10
      }
    },
    special: {
      "angry glow": {
        type: "Su",
        text: "Once per minute, as a full-round action, the sprites that make up a sprite swarm may coordinate their luminous abilities to create a singular, searing glow. Creatures within 10 feet of a sprite swarm with line of sight must succeed at a DC 16 Fortitude save or be blinded for 1d4 rounds. A creature that succeeds at its save is dazzled for 1 round. The save DC is Constitution-based."
      },
      "concentrated rush": {
        type: "Ex",
        text: "Once every 1d4 rounds, if more than one creature occupies a sprite swarm's space, the swarm may use its attack action to concentrate on one of these creatures to deal 4d6 points of damage in place of its normal swarm damage. Other creatures within the horde's space do not take swarm damage that round."
      },
      "mob mentality": {
        type: "Ex",
        text: "As long as a sprite swarm has at least 10 hit points, it retains its Intelligence score and can act accordingly. Even so, it cannot be targeted by mind-affecting spells or effects that target a single creature. If its hit points fall below 10, the swarm is considered mindless as the individual creatures within begin to panic."
      }
    }
  },

};
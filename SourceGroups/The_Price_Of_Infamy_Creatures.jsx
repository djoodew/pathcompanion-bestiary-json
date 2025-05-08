
export const The_Price_Of_InfamyCreatures = {
  "Blue Whale": {
    source: "The Price Of Infamy",
    creatureType: "animal",
    fish: true,
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Colossal",
    hd: 16,
    hdVal: 8,
    cr: 12,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      swim: 40
    },
    abilities: {
      str: 42,
      dex: 8,
      con: 25,
      int: 2,
      wis: 13,
      cha: 6
    },
    feats: [
      {
        name: "Awesome Blow",
        type: "Combat"
      },
      {
        name: "Diehard",
        type: "General"
      },
      {
        name: "Endurance",
        type: "General"
      },
      {
        name: "Improved Bull Rush",
        type: "Combat"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Perception",
        choiceSource: "Skill Focus"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Tail slap",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Tail slap",
        name: "Tail slap",
        specialAbility: "stun",
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 25
    },
    space: "30 ft.",
    reach: "30 ft.",
    environment: "any ocean",
    visualDescription: "This massive aquatic mammal has bluish-gray coloration, a wide fluke tail, and a wide mouth filled with layers of baleen.",
    description: "The imposing blue whale is one of the largest animals in the sea, though it is generally docile toward anything it doesn't perceive as a threat. A filter-feeder, the blue whale does not look at humans or ships as potential meals, instead preferring to eat millions of tiny invertebrates known as krill, which it sucks through its baleen in massive gulps. The most dangerous thing about a blue whale, other than its sheer size, is its powerful tail, which can capsize boats and kill humanoids. These enormous mammals can be found in all of Golarion's oceans and seas. An adult blue whale is 100 feet long and weighs 200 tons.",
    organization: "solitary, pair, or pod (3-18)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 8,
        bonuses: [
          {
            source: "inherent",
            value: 12
          }
        ]
      },
      Swim: {
        ranks: 3
      }
    },
    special: {
      capsize: {
        type: "Ex"
      },
      "swallow whole": {
        universalMonsterAbility: "Swallow Whole",
        damage: "4d6+16 damage",
        hp: "18 hp",
        AC: "AC 22"
      },
      "hold breath": {
        universalMonsterAbility: "Hold Breath",
        parenthetical: ""
      },
      stun: {
        type: "Ex",
        text: "A blue whale's fluke can deliver a powerful stunning blow. A creature struck by this attack must succeed at a DC 34 Fortitude save or be dazed for 1 round. If the strike is a critical hit and the target fails its save, it is instead stunned for 1d4 rounds. The save DC is Strength-based."
      }
    }
  },

  "Crimson Whale": {
    source: "The Price Of Infamy",
    creatureType: "animal",
    fish: true,
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Gargantuan",
    hd: 10,
    hdVal: 8,
    cr: 8,
    racialFeatures: [
      "Blindsense 120 ft.",
      "Low-Light Vision"
    ],
    speed: {
      swim: 40
    },
    abilities: {
      str: 36,
      dex: 7,
      con: 21,
      int: 2,
      wis: 13,
      cha: 6
    },
    feats: [
      {
        name: "Iron Will",
        type: "General"
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
        value: "Bite",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "grab",
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 18
    },
    space: "20 ft.",
    reach: "20 ft.",
    environment: "any ocean",
    visualDescription: "Similar to other whales in many ways, this giant aquatic beast is notable for its enormous teeth, menacingly strong jaws, and blood-red skin.",
    description: "While many cetaceans are docile, the crimson whale is an aggressive hunter that evolved to quickly kill even the largest and most powerful of prey. It sports a full set of deadly teeth that average between 1 and 2 feet in length, and its powerful bite can tear through flesh and crush bone. A typical adult crimson whale is 45 feet long and weighs 30 tons.",
    organization: "single, pair, or pod (3-8)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 5,
        bonuses: [
          {
            source: "inherent",
            value: 12
          }
        ]
      },
      Swim: {
        ranks: 5
      }
    },
    special: {
      "swallow whole": {
        universalMonsterAbility: "Swallow Whole",
        damage: "4d6 damage",
        hp: "10 hp",
        AC: "AC 19"
      },
      "hold breath": {
        universalMonsterAbility: "Hold Breath",
        parenthetical: ""
      },
      "powerful bite": {
        type: "Ex",
        text: "A leviathan applies twice its Strength modifier to bite damage."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  "Stabbing Beast": {
    source: "The Price Of Infamy",
    creatureType: "outsider",
    subTypes: [
      "evil",
      "extraplanar",
      "shapechanger"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Huge",
    hd: 18,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "All-Around Vision",
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "See in Darkness",
      "See Invisibility"
    ],
    speed: {
      base: 50
    },
    abilities: {
      str: 32,
      dex: 31,
      con: 24,
      int: 13,
      wis: 15,
      cha: 14
    },
    feats: [
      {
        name: "Combat Expertise",
        type: "Combat"
      },
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Deflect Arrows",
        type: "Combat"
      },
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Greater Feint",
        type: "Combat"
      },
      {
        name: "Improved Feint",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Iron Will",
        type: "General"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Mobility",
        type: "Combat"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Stealth",
        choiceSource: "Skill Focus"
      },
      {
        name: "Spring Attack",
        type: "Combat"
      },
      {
        name: "Two-Weapon Fighting",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Claw",
        name: "2 Claws",
        specialAbility: "bleed, grab",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Sting",
        name: "Sting",
        specialAbility: "bleed, poison",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Poison stream",
        qualities: [
          "touch"
        ],
        name: "Poison stream",
        specialAbility: "Poison stream"
      }
    ],
    immunities: [
      "Immune to poison"
    ],
    defense: {
      saves: {
        All: [
          {
            value: 4,
            note: "vs. mind-affecting"
          }
        ]
      },
      DR: {
        value: 10,
        damageType: " good and magic"
      },
      SR: {
        value: 26
      },
      naturalArmor: 12
    },
    space: "15 ft.",
    reach: "15 ft.",
    environment: "any land or urban",
    visualDescription: "This cottage-sized scorpion-man moves with an eerie grace and an intelligent, murderous intent.",
    description: "The Stabbing Beast is the herald of Norgorber, the god of greed, murder, secrets, and poison. It is an incredibly dangerous predator, a creature of immense strength that uses its keen intellect and deadly poison to stalk and kill its prey. Its natural form is that of an huge scorpion, but it can also assume an armored humanoid shape suitable for stealth or interacting with Norgorber's followers. Though its main purpose for coming to Golarion is to kill, it has also been called to aid great thefts and bury terrible secrets. The Stabbing Beast enjoys the company of mortals in the same way that a well-fed barn cat enjoys the company of mice. It sometimes \"plays\" with these toys, teaching them secrets of alchemy or assassination, though it just as often maims or kills them as it sees fit or according to Norgorber's greater plans. It ignores most creatures as if they were unimportant or not even alive, bowling over these irrelevant people in its way and casually murdering those who make nuisances of themselves. Ecology The Stabbing Beast is guilty of thousands of killings and has no fear of death. It does not believe that anything other than its master can kill it, despite mortal records showing that it has been killed in the past; Norgorber wiped its memory of these failures when he resurrected his herald. Norgorber's herald is normally emotionless and cold, showing no remorse or regret for any death or injury. When the cult of Norgorber summons the Stabbing Beast, the mortals may present it with several choice targets to hunt and slay, though predicting its interests is difficult and the Beast may select its own target-or none at all- in exchange for its services. The Beast keeps trophies of its kills by covering the corpses in a preservative bile, swallowing them in its scorpion form, and regurgitating them when it returns to its lair deep beneath the planar metropolis of Axis. Habitat & Society The herald of Norgorber lives only to serve his dark master, whose mandates may come to the Stabbing Beast in a steady stream of evil deeds or sporadically and with long periods of dormancy between. When idle for too long, it tends to turn off its mind and simply waits in stasis, completely inert like a clockwork device that has run down. It reacts to prayers to Norgorber as if they were echoes of its master's voice, drawing its attention without violence and bringing it to full alertness.",
    organization: "solitary",
    languages: "Abyssal, Celestial, Common, Infernal, Protean; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "see invisibility",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "absorbing touch",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "alchemical allocation",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "charm person",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "keen edge",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "poison",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "true strike",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "false alibi",
        casterLevel: 18,
        limitations: "see page 75",
        timesPerDay: 3
      },
      {
        name: "teleport, greater",
        casterLevel: 18,
        limitations: "self only plus 50 lbs.",
        timesPerDay: 3
      },
      {
        name: "invisibility",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "modify memory",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "suggestion",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "summon",
        casterLevel: 18,
        limitations: "level 6, 1 fiendish deadfall scorpion**, 100%",
        timesPerDay: 3
      }
    ],
    skills: {
      Appraise: {
        ranks: 12
      },
      Bluff: {
        ranks: 9,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Climb: {
        ranks: 9
      },
      Craft0: {
        subSkill: "alchemy",
        ranks: 9
      },
      "Knowledge (arcana)": {
        ranks: 9
      },
      "Knowledge (local)": {
        ranks: 12
      },
      "Knowledge (nature)": {
        ranks: 9
      },
      "Knowledge (planes)": {
        ranks: 9
      },
      "Knowledge (religion)": {
        ranks: 12
      },
      "Sense Motive": {
        ranks: 9
      },
      Stealth: {
        ranks: 18,
        bonuses: [
          {
            source: "inherent",
            value: 8,
            situational: true,
            note: "+16 in forests"
          }
        ]
      },
      Perception: {
        bonuses: [
          {
            source: "inherent",
            value: 4,
            subSkill: ""
          }
        ]
      }
    },
    special: {
      bleed: {
        universalMonsterAbility: "Bleed",
        damage: "2d6"
      },
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "2d6+12",
        text: " Str 32, Dex 31; CMB +30 (+34 grapple); CMD 53 (65 vs. trip); Skills Climb +20, Stealth +24. Murderer’s Reward (Su) If the Stabbing Beast’s attack reduces a target to fewer than 0 hit points, the herald immediately gains 2d6 temporary hit points (or 3d8, if the attack kills the target), but no more than the target’s maximum hit points. The temporary hit points last for 1 hour.",
        damage: "2d6+12"
      },
      "scorpion strike": {
        type: "Ex"
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "Huge scorpion or scorpion-tailed human"
      },
      "murderer's reward": {
        type: "Ex"
      },
      "scorpion mind": {
        type: "Ex"
      },
      grab: {
        universalMonsterAbility: "Grab"
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Sting-injury; save Fort DC 25; frequency 1/round for 6 rounds; effect 1d6 Str; cure 2 consecutive saves.",
        saveDC: 9
      }
    },
    resistances: [
      {
        damageType: "acid",
        value: 30
      },
      {
        damageType: "cold",
        value: 10
      },
      {
        damageType: "electricity",
        value: 10
      },
      {
        damageType: "fire",
        value: 10
      }
    ]
  },

};
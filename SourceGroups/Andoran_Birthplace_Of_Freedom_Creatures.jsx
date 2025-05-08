
export const Andoran_Birthplace_Of_FreedomCreatures = {
  Cervapral: {
    source: "Andoran Birthplace Of Freedom",
    creatureType: "outsider",
    subTypes: [
      "agathion",
      "extraplanar",
      "good"
    ],
    alignments: [
      "Neutral Good"
    ],
    size: "Medium",
    hd: 6,
    hdVal: 10,
    cr: 5,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Enchantment Sense",
      "Scent"
    ],
    speed: {
      base: 50
    },
    abilities: {
      str: 14,
      dex: 18,
      con: 17,
      int: 15,
      wis: 15,
      cha: 14
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Weapon Finesse",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Gore",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Gore",
        name: "Gore",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Rapier",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "Rapier",
        damage: "1d6"
      }
    ],
    defense: {
      saves: {
        All: [
          {
            value: 4,
            note: "vs. poison"
          }
        ]
      },
      DR: {
        value: 5,
        damageType: "evil or silver"
      },
      SR: {
        value: 16
      },
      naturalArmor: 4
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any land (Nirvana)",
    visualDescription: "This sleek, long-legged, antelope-like figure has majestic pronged horns and ruffs of white fur on its chest and neck.",
    description: "Cervaprals embody the essence of liberty and are passionately devoted to both the overthrow of tyranny and the abolition of slavery. They have no moral objection to the concepts of royalty or nobility, but hold any group that is granted authority through inheritance or tradition to a very high standard, insisting that the rights of the ruled must be protected at least as strongly as the rights of the rulers. Cervaprals frequently serve on the Material Plane as willing allies to servants of good who engage in daring raids to free slaves and unjustly held captives. Cervaprals believe nearly any sacrifice is justified to break the chains of bondage, and are equally at home in frontal assaults as they are in stealthy scout missions and infiltrations. They fervently reject the notion that \"the ends justify the means,\" and refuse to accept evil acts in the name of promoting greater good. They are willing to give up considerable personal comfort and safety to promote their goals of freedom and independence for all. If called with the lesser planar ally spell, cervaprals generally demand that payment for their services is donated to a cause that fights slavery and supports freedom. Such a cause must not already be closely allied with the spellcaster or her allies. A cervapral who is called to aid in the immediate and direct liberation of prisoners or slaves often halves the payment he requires for granting such assistance.",
    organization: "solitary, pair, or order (3-6)",
    languages: "Celestial, Draconic, Infernal; speak with animals; truespeech",
    spellLikeAbilities: [
      {
        name: "freedom of movement",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "speak with animals",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "animal trance",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "liberating command",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "message",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "remove paralysis",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "knock",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "protection from evil",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "summon nature's ally iii",
        casterLevel: 6,
        limitations: "1 aurochs or 1d3 stags only",
        timesPerDay: 3
      },
      {
        name: "break enchantment",
        casterLevel: 6,
        timesPerDay: 1
      },
      {
        name: "seeming",
        casterLevel: 6,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Bluff: {
        ranks: 6
      },
      Disguise: {
        ranks: 9
      },
      "Escape Artist": {
        ranks: 9
      },
      Perception: {
        ranks: 6
      },
      "Sense Motive": {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 10
          }
        ]
      },
      Stealth: {
        ranks: 6
      },
      Survival: {
        ranks: 9
      }
    },
    special: {
      "powerful charge": {
        universalMonsterAbility: "Powerful Charge",
        type: "Ex",
        weaponName: 3
      },
      sprint: {
        type: "Ex",
        text: "Once per minute, a cervapral can move at 10 times its normal speed (500 feet) when it makes a charge."
      },
      "lay on hands": {
        type: "Ex",
        preText: "3d6, 5/day, as a 6th-level paladin"
      },
      "mental purge": {
        type: "Ex"
      },
      mercies: {
        type: "Su",
        text: "A cervapral's lay on hands ability removes disease (as remove disease) and fatigue in addition to curing damage. Pronghorn (Ex) A cervapral's gore attack is considered a primary natural weapon, even when used in conjunction with a weapon attack.",
        preText: "diseased, fatigued"
      }
    }
  },

  "Bee-Man Of Bellis": {
    source: "Andoran Birthplace Of Freedom",
    creatureType: "aberration",
    subTypes: [],
    alignments: [
      "Neutral Evil"
    ],
    size: "Medium",
    hd: 13,
    hdVal: 8,
    cr: 9,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Scent"
    ],
    speed: {
      base: 30,
      maneuverability: "Good",
      fly: 60
    },
    abilities: {
      str: 10,
      dex: 23,
      con: 18,
      int: 13,
      wis: 15,
      cha: 17
    },
    feats: [
      {
        name: "Ability Focus",
        type: "Monster",
        value: "Poison",
        choiceSource: "Ability Focus"
      },
      {
        name: "Acrobatic",
        type: "General"
      },
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Mobility",
        type: "Combat"
      },
      {
        name: "Spring Attack",
        type: "Combat"
      },
      {
        name: "Step Up",
        type: "Combat"
      },
      {
        name: "Wind Stance",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Slam",
        qualities: [
          "touch"
        ],
        name: "Slam",
        specialAbility: "poison",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to disease, poison, paralysis, sleep, stunning"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "-"
      },
      naturalArmor: 6
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "temperate forest (Andoran)",
    visualDescription: "This shabby-cloaked figure is surrounded by hundreds of bees.",
    description: "Vernon Vestha was a forest oracle obsessed with bees, reading the future in the patterns of their flight. Driven mad by a desire to internalize the bees' powers of divination, he became one with his beloved bees in some honeyed rite. Now a living swarm in the rough semblance of a man, Vernon still roams the forests near Bellis, and some still seek out the ex-druid's wisdom by calling his name (Knowledge [local] DC 20 to know). He often appears when he is called, though he seldom grants favors without exacting a terrible price.",
    organization: "solitary",
    languages: "Common, Druidic",
    spellLikeAbilities: [
      {
        name: "speak with plants",
        casterLevel: 13,
        limitations: "but for vermin",
        timesPerDay: -1
      },
      {
        name: "alter self",
        casterLevel: 13,
        limitations: "male human only",
        timesPerDay: -1
      },
      {
        name: "augury",
        casterLevel: 13,
        timesPerDay: -1
      },
      {
        name: "divination",
        casterLevel: 13,
        timesPerDay: -1
      },
      {
        name: "glibness",
        casterLevel: 13,
        timesPerDay: 3
      },
      {
        name: "geas, lesser",
        casterLevel: 13,
        timesPerDay: 3
      },
      {
        name: "summon",
        casterLevel: 13,
        limitations: "level 4, 1 wasp swarm or 1d4+1 giant bees 100%",
        timesPerDay: 3
      },
      {
        name: "commune with nature",
        casterLevel: 13,
        timesPerDay: 1
      },
      {
        name: "contact other plane",
        casterLevel: 13,
        timesPerDay: 1
      },
      {
        name: "reincarnate",
        casterLevel: 13,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 10
      },
      Fly: {
        ranks: 8
      },
      Intimidate: {
        ranks: 13
      },
      Perception: {
        ranks: 13
      },
      Stealth: {
        ranks: 13
      },
      Survival: {
        ranks: 6
      }
    },
    special: {
      "apian emissaries": {
        type: "Sp",
        text: "The Bee-Man can use bees to duplicate the effect of pryings eye or whispering wind at will (caster level 13th). A successful DC 15 Perception check identifies the presence of the bees that act as the sensors for these spells, but a DC 20 Knowledge (nature) check is required to realize they are behaving under outside influence."
      },
      swarmlike: {
        type: "Ex",
        text: "The Bee-Man exists as a hive mind controlling a body of swarming bees. He is immune to any physical spell or effect that targets a specific number of creatures (including single-target spells). This immunity doesn't apply to spells and effects generated by the Bee-Man himself, nor to mind-affecting effects that target single creatures. The Bee-Man takes half again as much damage (+50%) from damaging area effects. He is also susceptible to high winds and is treated as a Diminutive creature for the purposes of determining wind effects. The Bee-Man can be targeted by spells as if he were a creature of the vermin type."
      },
      "taboo name": {
        type: "Su",
        text: "Whenever the Bee-Man's full name (Vernon Vestha) is spoken within 13 miles, he hears it as if using clairaudience/clairvoyance. He also learns the speaker's direction and distance."
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        value: null
      },
      amorphous: {
        universalMonsterAbility: "Amorphous"
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Type injury (slam); save Fort DC 23; frequency 1/ round for 6 rounds; effect 1d4 Str; cure 2 consecutive saves.",
        saveDC: 13
      }
    }
  },

  "Candlestone Courtier": {
    source: "Andoran Birthplace Of Freedom",
    creatureType: "fey",
    subTypes: [],
    alignments: [
      "Neutral Evil"
    ],
    size: "Medium",
    hd: 19,
    hdVal: 6,
    cr: 12,
    racialFeatures: [
      "Low-Light Vision",
      "See in Darkness"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 16,
      dex: 29,
      con: 20,
      int: 16,
      wis: 17,
      cha: 23
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
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Greater Trip",
        type: "Combat"
      },
      {
        name: "Improved Trip",
        type: "Combat"
      },
      {
        name: "Mobility",
        type: "Combat"
      },
      {
        name: "Spring Attack",
        type: "Combat"
      },
      {
        name: "Weapon Finesse",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Rapier",
        choiceSource: "Weapon Focus"
      },
      {
        name: "Whirlwind Attack",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Rapier",
        enchantments: [
          {
            name: "Enhancement Bonus +1",
            source: "inherent"
          },
          {
            name: "Keen",
            source: "inherent"
          }
        ],
        name: "Rapier",
        damage: "1d6"
      }
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "cold iron"
      },
      SR: {
        value: 23
      },
      naturalArmor: 4
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any underground (Darklands)",
    visualDescription: "This willowy, lavender-skinned stranger looks like he is dressed for an extravagant ball, and carries himself with a dancer's grace.",
    description: "Candlestone courtiers are emissaries of Queen Frilogarma and the Court of Ether. Venturing up from their Darklands domain, they make deals to the benefit of their queen, forge secret alliances with citizens of foreign lands, and inveigle mortals into endless revels in the inverted fey city while sapping the vitality of their victims to sate their alien appetites. Candlestone courtiers prefer to employ trickery and extortion over direct violence, but don't shy away from a fight if it is the fastest way to get what they want.",
    organization: "solitary, pair, or delegation (3-6)",
    languages: "Aklo, Common, Sylvan, Terran, Undercommon",
    spellLikeAbilities: [
      {
        name: "misdirection",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "see invisibility",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "disfiguring touch",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "disguise self",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "faerie fire",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "touch of idiocy",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "whispering wind",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "excruciating deformation",
        casterLevel: 19,
        timesPerDay: 3
      },
      {
        name: "major image",
        casterLevel: 19,
        timesPerDay: 3
      },
      {
        name: "sands of time",
        casterLevel: 19,
        timesPerDay: 3
      },
      {
        name: "ethereal jaunt",
        casterLevel: 19,
        timesPerDay: 1
      },
      {
        name: "phantom steed",
        casterLevel: 19,
        timesPerDay: 1
      },
      {
        name: "shadow walk",
        casterLevel: 19,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 18
      },
      Bluff: {
        ranks: 18
      },
      Diplomacy: {
        ranks: 6
      },
      Disguise: {
        ranks: 11
      },
      "Escape Artist": {
        ranks: 8
      },
      "Knowledge (dungeoneering)": {
        ranks: 7
      },
      "Knowledge (history)": {
        ranks: 7
      },
      "Knowledge (local)": {
        ranks: 4
      },
      "Knowledge (nature)": {
        ranks: 4
      },
      "Knowledge (nobility)": {
        ranks: 7
      },
      "Knowledge (planes)": {
        ranks: 7
      },
      Perception: {
        ranks: 19
      },
      Perform0: {
        subSkill: "dance",
        ranks: 6
      },
      "Sense Motive": {
        ranks: 9
      },
      "Sleight of Hand": {
        ranks: 3
      },
      Stealth: {
        ranks: 18
      },
      "Use Magic Device": {
        ranks: 19
      }
    },
    special: {
      spellthrust: {
        type: "Su",
        text: "When a courtier threatens a critical hit, it can trigger a spell-like ability with a range of touch against the target. If the critical hit is confirmed, the target must save twice, using the lower result."
      },
      "fey bargain": {
        type: "Su",
        text: "Once per week, a Candlestone courtier can grant a limited wish or a permanent +2 inherent bonus to one ability score. In exchange, the bargainer is cursed to be carried off in its dreams each night by the courtier to a never-ending fey ball that, while pleasant as often as not, affects the dreamer as nightmare, requiring a saving throw each night (Will DC 21 negates). The DC to remove this curse is reduced by 4 if the courtier is killed, and a successful coup de grace on the courtier with a cold iron weapon automatically ends the curse. Ending the curse also ends any noninstantaneous effects of the bargain. A creature can have only one fey bargain at a time."
      }
    }
  },

  Fellsig: {
    source: "Andoran Birthplace Of Freedom",
    creatureType: "undead",
    subTypes: [
      "fire"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Medium",
    hd: 5,
    hdVal: 8,
    cr: 3,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Tremorsense 30 ft."
    ],
    speed: {
      base: 20
    },
    abilities: {
      str: 16,
      dex: 10,
      con: "-",
      int: 8,
      wis: 13,
      cha: 12
    },
    feats: [
      {
        name: "Blind-Fight",
        type: "Combat"
      },
      {
        name: "Improved Bull Rush",
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
        specialAbility: "burn",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Lava ball",
        qualities: [
          "ranged touch"
        ],
        name: "Lava ball",
        specialAbility: "burn",
        damage: "1d6"
      }
    ],
    defense: {
      naturalArmor: 5
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any mountains or underground",
    visualDescription: "This squat figure's rough-hewn visage is frozen in a mask of pain, while the cracks in its dark stone body glow with a fiery inner heat.",
    description: "First created in catastrophic event known as the Rending, the molten undead known as fellsigs have wandered Darkmoon Vale for centuries. When Droskar's Crag erupted and buried entire dwarven settlements under choking ash, boiling mud, noxious fumes, and seething magma, the violence and suffering caused many of the volcano's victims to rise after death, cursed to visit their own fiery deaths upon the living. Fellsigs are made up of the very materials that took their lives, and their existence is a constant reminder of all that was lost in the fiery cataclysm of the Rending. Most fellsigs are morose creatures, bemoaning the destruction of their homeland and carrying on a shadowy imitation of their former lives amid the scorched ruins they inhabit. The sight of life and joy often enrages them with vindictive jealousy for those spared the fellsigs' own cruel fate. Fellsigs have sympathy for those exhibiting obvious signs of burn damage, however, and using the Diplomacy skill can sometimes convince these stony, smoldering monsters to aid such creatures. Similarly, fellsigs hold no special hatred for creatures of the fire subtype, and on occasion they can be convinced to serve such creatures as guards or even artisans, though such alliances are tenuous at best.",
    organization: "solitary, pair, or flow (3-8)",
    languages: "Dwarven, Ignan",
    spellLikeAbilities: [
      {
        name: "pyrotechnics",
        casterLevel: 5,
        timesPerDay: 5
      },
      {
        name: "burning hands",
        casterLevel: 5,
        timesPerDay: 3
      }
    ],
    skills: {
      Craft0: {
        subSkill: "any",
        ranks: 6
      },
      Intimidate: {
        ranks: 5
      },
      Perception: {
        ranks: 5
      }
    },
    special: {
      burn: {
        universalMonsterAbility: "Burn",
        saveDC: null,
        damage: "1d6"
      },
      eruption: {
        type: "Ex"
      },
      "lava ball": {
        type: "Su",
        text: "As a full-round action, a fellsig can regurgitate a ball of lava into its fist and hurl it with a range increment of 30 feet. Any creature struck must succeed at a DC 13 Reflex save or catch fire and take 1d6 points of fire damage at the start of its turn for an additional 1d4 rounds. The save DC is Charisma-based."
      },
      "molten heart": {
        type: "Ex",
        text: "Beneath the slabs of igneous rock that compose a fellsig's body are organs of superheated rock and fumes. A creature that confirms a critical hit against a fellsig in melee is struck by a jet of flaming ash that deals 2d6 points of fire damage (Reflex DC 13 half)."
      }
    }
  },

  "Erinat Gremlin": {
    source: "Andoran Birthplace Of Freedom",
    creatureType: "fey",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Tiny",
    hd: 3,
    hdVal: 6,
    cr: 2,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 14,
      dex: 16,
      con: 15,
      int: 8,
      wis: 9,
      cha: 14
    },
    feats: [
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Stealth",
        choiceSource: "Skill Focus"
      },
      {
        name: "Toughness",
        type: "General"
      },
      {
        name: "Weapon Finesse",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Spiked chain",
        name: "Spiked chain",
        damage: "2d4"
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "cold iron"
      },
      SR: {
        value: 13
      }
    },
    space: "2-1/2 ft.",
    reach: "0 ft. (5 ft. with spiked chain)",
    environment: "any underground or urban",
    visualDescription: "The pockets of this urchin are stuffed with worthless objects.",
    description: "Erinat gremlins are obsessed with conflict and discord. They love nothing more than starting fights-the more inane and pointless the struggle, the better. Erinat gremlins typically use alter self to take the appearance of unfed, unwashed humanoid children as appropriate to their surroundings, allowing the gremlins to move freely through settlements (and accuse anyone who attempts to stop their malicious conduct of trying to kidnap them). Erinats don't care who wins the fights they start; they simply wish to be entertained by the largest brawls they can arrange. The mischievous gremlins delight in creating chaos, and are prone to making outrageous claims in the hope of sparking riots, aided by forcing bystanders to attack each other with random, often ridiculous objects.",
    organization: "solitary, pair, or mob (3-8)",
    languages: "Aklo, Common, Undercommon",
    spellLikeAbilities: [
      {
        name: "alter self",
        casterLevel: 3,
        limitations: "Small humanoid child only",
        timesPerDay: -1
      },
      {
        name: "ghost sound",
        casterLevel: 3,
        timesPerDay: -1
      },
      {
        name: "confusion, lesser",
        casterLevel: 3,
        timesPerDay: 1
      },
      {
        name: "murderous command",
        casterLevel: 3,
        timesPerDay: 1
      },
      {
        name: "rage",
        casterLevel: 3,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 3
      },
      Bluff: {
        ranks: 3
      },
      Perception: {
        ranks: 3
      },
      "Sleight of Hand": {
        ranks: 3,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Stealth: {
        ranks: 3
      }
    },
    special: {
      "lashing chains": {
        type: "Ex",
        text: "Erinats have 5-foot reach when attacking on their turn with their spiked chains, though they don't threaten adjacent squares when it is not their turn."
      },
      "malicious mischief": {
        type: "Su",
        text: "A pair of erinats working together for 1 round can present an item and compel a creature to take it. This functions as beguiling gift (DC 13), but rather than using the item in the appropriate fashion, the recipient is compelled to use the item to attack a random non-gremlin creature within 30 feet, even if the recipient must use the item as an improvised weapon. Additionally, a group of six erinats working together over the course of 1 hour can create an effect identical to malicious spite (DC 16) on any living creature. This effect functions at CL 6th, and the target creature must be either willing or helpless."
      },
      discordant: {
        type: "Ex",
        preText: "20 ft."
      }
    }
  },

  Ragewight: {
    source: "Andoran Birthplace Of Freedom",
    creatureType: "undead",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 11,
    hdVal: 8,
    cr: 6,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 18,
      dex: 14,
      con: "-",
      int: 11,
      wis: 13,
      cha: 17
    },
    feats: [
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Furious Focus",
        type: "Combat"
      },
      {
        name: "Great Cleave",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Greatsword",
        choiceSource: "Improved Critical"
      },
      {
        name: "Lunge",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Greatsword",
        name: "Greatsword",
        specialAbility: "energy drain",
        damage: "2d6"
      },
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "energy drain",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Javelin",
        name: "Javelin",
        damage: "1d6"
      }
    ],
    defense: {
      saves: {
        All: [
          {
            value: 4,
            type: "morale",
            note: "bonus vs. spells, supernatural abilities, and spell-like abilities"
          }
        ]
      },
      naturalArmor: 8
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "temperate hills (necropolis of Nogortha)",
    visualDescription: "This desiccated corpse wields a greatsword, its eyes blazing with eerie red light.",
    description: "Ragewights are the spirits of savage warriors who died in a rage and have since had their burial places disturbed or robbed. They are most common near the necropolis of Nogortha, a vast graveyard that includes many barrows of barbarians slain in 1707 ar by the expansionist forces of Taldor. Grave robbers plundering such barrows occasionally unleash a ragewight, which immediately sets out to build an undead army of spawn and wage war against those who slew it centuries ago.",
    organization: "solitary, war band (1 ragewight plus 2-5 cairn wights), or war clan (2-5 ragewights plus 3-10 cairn wights)",
    languages: "Common",
    otherGear: "greatsword, javelin",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 11
      },
      Intimidate: {
        ranks: 10
      },
      "Knowledge (religion)": {
        ranks: 4
      },
      Perception: {
        ranks: 11
      },
      Stealth: {
        ranks: 7,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      "create spawn": {
        type: "Su",
        text: "Most humanoids slain by a ragewight rise as cairn wights (though with chaotic evil alignments) in 1d4 rounds. However, humanoids with 6 or more Hit Dice and the rage class feature instead become ragewights, retaining the rage powers they had in life. Such spawn are under the command of their creator until its death, at which point they become free-willed undead. Savage Fury (Ex) A ragewight can trigger a savage fury as a free action. It can use this fury for 24 rounds each day. These rounds don't need to be consecutive. The ragewight gains a +6 profane bonus to its Strength and Charisma and a +3 profane bonus on Will saves when using this fury. When a ragewight ends its fury, it is staggered for 1d4 rounds and can't resume its fury during this time. This ability otherwise functions as the greater rage barbarian class feature, treating the ragewight's racial Hit Dice as its barbarian level for the purposes of rage and any rage powers."
      },
      "energy drain": {
        universalMonsterAbility: "Energy Drain",
        saveDC: 9,
        levels: 1
      },
      "rage powers": {
        type: "Ex",
        preText: "animal fury, intimidating glare, knockback, superstition, unexpected strike"
      }
    }
  },

  "Sawdust Slough": {
    source: "Andoran Birthplace Of Freedom",
    creatureType: "plant",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 6,
    hdVal: 8,
    cr: 4,
    racialFeatures: [
      "Low-Light Vision",
      "Tremorsense 60 ft."
    ],
    speed: {
      base: 20,
      climb: 20
    },
    abilities: {
      str: 18,
      dex: 8,
      con: 21,
      int: "-",
      wis: 1,
      cha: 1
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
    defense: {
      DR: {
        value: 5,
        damageType: "-"
      },
      naturalArmor: 4
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "temperate forest",
    visualDescription: "A cloud of fine dust particles hangs in the air around this seething mass of sawdust and wood shavings.",
    description: "The vast forests of Andoran have long been prime timberlands, logged and exploited for centuries as crucial resources in Andoran's efforts to establish itself as a great naval and shipbuilding power. Rather than seek to work in balance with the forests, many logging groups have clear-cut vast sections of woodland, and such depredations have not been without consequence. As the blood of fey guardians is spilled and spirits of ancient plants and wild places are destroyed, the wild power sometimes weaves itself into the sawdust and shavings left behind by loggers, spawning mindlessly destructive masses of detritus called sawdust sloughs. These creatures are drawn to loud noises and vibrations, especially metallic sounds such as chopping and sawing. They savagely attack loggers and mills, engulfing and suffocating all creatures they encounter and grinding their flesh into bloody paste.",
    organization: "solitary, pair, or cascade (3-6)",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 0
      }
    },
    special: {
      engulf: {
        type: "Ex",
        preText: "DC 17, 1d6+6 bludgeoning plus choking chaff"
      },
      flammable: {
        type: "Ex",
        text: "Sawdust sloughs and the particulate cloud surrounding them are highly flammable, causing any damaging flame around them to flare up in gouts of fire. Any creature adjacent to a sawdust slough (including creatures engulfed by it) when it takes fire damage must succeed at a DC 18 Reflex save or take half as much fire damage as that dealt to the sawdust slough. The save DC is Constitution-based."
      },
      amorphous: {
        universalMonsterAbility: "Amorphous"
      },
      "choking chaff": {
        type: "Ex",
        text: "A sawdust slough constantly releases particles of plant matter that form a cloud of choking dust around it. Creatures beginning their turns adjacent to a sawdust slough are coated with this dust, revealing invisible creatures (as glitterdust, though without any of that spell's other effects) and dazzling creatures as long as they remain adjacent to it and for 1d3 rounds thereafter. In addition, creatures that breathe that begin their turns adjacent to the sawdust slough are sickened for the same duration (Fortitude DC 18 negates). Creatures that hold their breath before being exposed to the choking chaff aura are immune to the sickening effect for as long as they hold their breath. The save DC is Constitution-based. A sawdust slough's choking chaff aura is burned off when it takes fire damage, and does not become active again until the end of the sawdust slough's next turn.",
        preText: "5 ft., DC 18"
      }
    },
    resistances: [
      "vulnerable to fire"
    ]
  },

  "Silverblood Werewolf": {
    source: "Andoran Birthplace Of Freedom",
    creatureType: "humanoid",
    subTypes: [
      "human",
      "shapechanger"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 4,
    hdVal: 10,
    cr: 5,
    racialFeatures: [
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 20,
      dex: 15,
      con: 17,
      int: 12,
      wis: 12,
      cha: 6
    },
    feats: [
      {
        name: "Aspect of the Beast",
        type: "General",
        value: "Claws of the Beast",
        choiceSource: "Aspect of the Beast"
      },
      {
        name: "Endurance",
        type: "General"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Rending Claws",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Claw",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Bardiche",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "Bardiche",
        damage: "1d10"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "trip, curse of lycanthropy",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Composite longbow",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "Composite longbow",
        damage: "1d8",
        strBonus: 4
      }
    ],
    defense: {
      DR: {
        value: 3,
        damageType: "-"
      },
      naturalArmor: 4
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "Any land",
    visualDescription: "This snarling creature has a woman's body, but the head and claws of a savage wolf.",
    description: "Silverblood werewolves are a rare type of lycanthrope found almost exclusively in the Arthfell Forest. They are the survivors of an experimental process conceived by jeweler-turned-werewolf Garrick Argentum, and developed by his allies in the Shadow Pack, a group of werewolf druids in the forest. The Shadow Pack conducted an eldritch ritual involving successive exposures to pure silver under the light of the full moon in an attempt to desensitize the werewolves to the deadly touch of silver (in theory, this process could also produce other types of silverblood lycanthropes). The experiment was a success, and the werewolves lost their vulnerability. Swollen with pride at their new ability, the Shadow Pack joined forces with the hobgoblins of the wood and attacked the town of Olfden. Turned back after a savage battle known as the Night of Silver Blood, the werewolves sought to regroup and prepare a new assault, but on the night of the next new moon they discovered a fatal flaw in their blasphemous rite. Tied now more than ever to the lunar cycle, most of the silverblood werewolves wasted away and died when the moon darkened. Even those few that survived are greatly weakened when each new moon comes, though the surge of power when the moon waxes full still earns them great respect, and many have found positions of leadership among the werewolves of the wood. Though the Night of Silver Blood was a failure, many hobgoblins and werewolves within the Arthfell Forest believe it is proof that major towns and even small cities could be totally ravaged by a somewhat larger, better-prepared force spearheaded by silverblood werewolves. Some groups of silverblood werewolves continue to maintain close connections to the local hobgoblins, forming war parties with them that raid farther and farther from the woods during the nights of the full moon. If one such band were to have a noteworthy success, its leaders might be able to gather a much larger force that could once again threaten Olfden or similarly sized settlements. Creating a Silverblood Lycanthrope \"Silverblood lycanthrope\" is an acquired lycanthrope template (Pathfinder RPG Bestiary 196) that can be added to any humanoid or lycanthrope. If added to a creature that already has the lycanthrope template, it replaces that template. Challenge Rating: Same as base creature +2 (this includes the +1 increase for being a natural lycanthrope). Size and Type: The creature (referred to hereafter as the base creature) gains the shapechanger subtype. The silverblood lycanthrope takes on the characteristics of the base animal. Its hybrid form is the same size as the base animal or the base creature, whichever is larger. AC: In animal or hybrid form the silverblood lycanthrope gains a +4 natural armor bonus to AC. Defensive Abilities: A silverblood lycanthrope gains DR 1/- in animal or hybrid form. When the moon is at least half full, this increases to DR 3/-, and during the nights of the full moon the silverblood lycanthrope gains DR 10/-. Speed: Same as the base creature or base animal, depending on which form the lycanthrope is using. Hybrids use the base creature's speed. Melee: A lycanthrope gains a bite attack in animal and hybrid forms according to the base animal. Special Attacks: A silverblood lycanthrope retains all the special attacks, qualities, and abilities of the base creature. In animal or hybrid form it gains any special attacks associated with its natural weapons. A silverblood lycanthrope also gains Low-Light Vision, scent, and the following abilities. Change Shape (Su): All silverblood lycanthropes have three forms: a humanoid form, an animal form, and a hybrid form. Equipment does not meld with the new form when changing between humanoid and hybrid form, but does when changing between those forms and animal form. A silverblood lycanthrope can shift to any of its three forms as a move action. A slain silverblood lycanthrope reverts to its humanoid form, although it remains dead. Curse of Lycanthropy (Su): A silverblood lycanthrope's bite attack in animal or hybrid form infects a humanoid target with lycanthropy (Fortitude DC 15 negates). If the victim's size is not within one size category of the silverblood lycanthrope, this ability has no effect. Creatures that become lycanthropes as a result of this curse become standard afflicted lycanthropes rather than silverblood lycanthropes. Lunar Sympathy (Su): A silverblood lycanthrope is filled with enthusiastic vigor when the light of the moon is strongest. When the moon is at least half full, a silverblood lycanthrope gains the benefit of bless whenever it is outdoors at night. On nights of the full moon, a silverblood lycanthrope gains the effect of heroism rather than bless, and retains the benefit indoors. When the moon is less than half full, a silverblood lycanthrope becomes fatigued during the night. On nights of the new moon, a silverblood lycanthrope becomes fatigued during the day and each night becomes exhausted and takes 1d4 points of Constitution damage. A successful DC 20 Fortitude save reduces the Constitution damage by half. Lycanthropic Empathy (Ex): In any form, silverblood lycanthropes can communicate and empathize with animals of the same species as the base animal. They can use Diplomacy to alter such an animal's attitude, and when so doing gain a +4 racial bonus on the check. Due to their near-legendary reputation, silverblood lycanthropes gain a +8 racial bonus on Diplomacy and Intimidate checks against standard lycanthropes of the same base creature. Ability Scores: +2 Wis, -2 Cha in all forms; +2 Str, +2 Con in hybrid and animal forms. Silverblood lycanthropes have enhanced senses but are not fully in control of their emotions and animalistic urges. In addition to these adjustments to the base creature's statistics, a silverblood lycanthrope's ability scores change when she assumes animal or hybrid form. In human form, the silverblood lycanthrope's ability scores are unchanged from the base creature's form. In animal and hybrid forms, the silverblood lycanthrope's ability scores are the same as the base creature's or the base animal's, whichever ability score is higher.",
    organization: "solitary, pair, pack (2-4), or warband (2-6 silverblood werewolves, 2-8 werewolves, and 10-20 hobgoblins)",
    languages: "Common, Sylvan",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 3
      },
      Climb: {
        ranks: 3
      },
      "Disable Device": {
        ranks: 8
      },
      "Handle Animal": {
        ranks: 1
      },
      Intimidate: {
        ranks: 7
      },
      "Knowledge (nature)": {
        ranks: 4
      },
      Perception: {
        ranks: 7
      },
      Profession0: {
        subSkill: "trapper",
        ranks: 1
      },
      Stealth: {
        ranks: 6
      },
      Survival: {
        ranks: 4
      },
      Swim: {
        ranks: 3
      }
    },
    special: {
      "favored enemy": {
        type: "Ex",
        preText: "humans +2"
      },
      rend: {
        universalMonsterAbility: "Rend",
        type: "Ex",
        weaponName: 6
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "and wolf; polymorph",
        type: ", and wolf; polymorph"
      },
      "favored terrain": {
        type: "Ex",
        preText: "forest +2"
      },
      "hunter's bond": {
        type: "Ex",
        preText: "companions"
      },
      "lycanthropic empathy": {
        name: ":",
        type: "Ex",
        text: "anthropic Empathy (Ex): In any form, silverblood lycanthropes can communicate and empathize with animals of the same species as the base animal. They can use Diplomacy to alter such an animal's attitude, and when so doing gain a +4 racial bonus on the check. Due to their near-legendary reputation, silverblood lycanthropes gain a +8 racial bonus on Diplomacy and Intimidate checks against standard lycanthropes of the same base creature.",
        preText: "wolves and dire wolves"
      },
      "track +2": {
        type: "Ex"
      },
      "trapfinding +2": {
        type: "Ex"
      },
      "wild empathy": {
        type: "Ex",
        preText: "+3"
      },
      trip: {
        universalMonsterAbility: "Trip"
      },
      "curse of lycanthropy": {
        name: ":",
        type: "Su",
        text: "se of Lycanthropy (Su): A silverblood lycanthrope's bite attack in animal or hybrid form infects a humanoid target with lycanthropy (Fortitude DC 15 negates). If the victim's size is not within one size category of the silverblood lycanthrope, this ability has no effect. Creatures that become lycanthropes as a result of this curse become standard afflicted lycanthropes rather than silverblood lycanthropes. Lunar Sympathy (Su): A silverblood lycanthrope is filled with enthusiastic vigor when the light of the moon is strongest. When the moon is at least half full, a silverblood lycanthrope gains the benefit of bless whenever it is outdoors at night. On nights of the full moon, a silverblood lycanthrope gains the effect of heroism rather than bless, and retains the benefit indoors. When the moon is less than half full, a silverblood lycanthrope becomes fatigued during the night. On nights of the new moon, a silverblood lycanthrope becomes fatigued during the day and each night becomes exhausted and takes 1d4 points of Constitution damage. A successful DC 20 Fortitude save reduces the Constitution damage by half. Lycanthropic Empathy (Ex): In any form, silverblood lycanthropes can communicate and empathize with animals of the same species as the base animal. They can use Diplomacy to alter such an animal's attitude, and when so doing gain a +4 racial bonus on the check. Due to their near-legendary reputation, silverblood lycanthropes gain a +8 racial bonus on Diplomacy and Intimidate checks against standard lycanthropes of the same base creature."
      }
    }
  },

  Talmandor: {
    source: "Andoran Birthplace Of Freedom",
    creatureType: "outsider",
    subTypes: [
      "agathion",
      "extraplanar",
      "good"
    ],
    alignments: [
      "Neutral Good"
    ],
    size: "Large",
    hd: 27,
    hdVal: 10,
    cr: 23,
    racialFeatures: [
      "Darkvision 60 ft.",
      "See Invisibility",
      "True Seeing"
    ],
    speed: {
      base: 40,
      maneuverability: "Good",
      fly: 180
    },
    abilities: {
      str: 26,
      dex: 36,
      con: 35,
      int: 19,
      wis: 23,
      cha: 24
    },
    feats: [
      {
        name: "Bleeding Critical",
        type: "Combat"
      },
      {
        name: "Dimensional Agility",
        type: "General"
      },
      {
        name: "Dimensional Assault",
        type: "General"
      },
      {
        name: "Dimensional Dervish",
        type: "General"
      },
      {
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Empower Spell-Like Ability",
        type: "Monster",
        value: "Chain lightning",
        choiceSource: "Empower Spell-Like Ability"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Quicken Spell-Like Ability",
        type: "Monster",
        value: "Chain lightning",
        choiceSource: "Quicken Spell-Like Ability"
      },
      {
        name: "Staggering Critical",
        type: "Combat"
      },
      {
        name: "Stunning Critical",
        type: "Combat"
      },
      {
        name: "Weapon Finesse",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Claw",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      }
    ],
    defense: {
      saves: {
        All: [
          {
            value: 4,
            note: "vs. poison"
          }
        ]
      },
      DR: {
        value: 15,
        damageType: "silver and evil"
      },
      SR: {
        value: 34
      },
      naturalArmor: 18
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any air (Nirvana)",
    visualDescription: "This gloriously plumed anthropomorphic eagle has feathers tipped with shimmering gold, and claws with sharp black talons.",
    description: "Talmandor is the celestial patron of Andoran and a great leader of the avoral agathions, surpassed among their kind only by the empyreal lord Ylimancha, the Harborwing. Talmandor abides in the aptly named Soaring Palace of Talmandor the Golden on the plane of Nirvana, yet travels frequently among the planes. In addition to looking in on the nation that has arisen under his wings, he wanders the Outer Sphere, often acting as an ambassador between mortal priesthoods and the immortal servants of Erastil, Iomedae, and Shelyn. Like most agathions, Talmandor takes an interest in influencing mortals and bringing them to a place of enlightenment. He is convinced that the greatest enlightenment for mortals can be achieved through social interaction. He has observed that mortals respond best to a full, robust engagement with their fellow citizens, and that it's important to have a voice in the decision-making process of one's society. Talmandor sees hereditary aristocracy and primogeniture as shackles slowing society's ascent into a place of justice and peace where all citizens work together for the common good. Talmandor does not want the rights and importance of individuals to be sacrificed for the greater good, and advocates a balance between collective needs and communitarian works on the one hand and the individual's personal responsibilities and liberties on the other. According to popular legend, Talmandor developed his democratic theories and shared them with the mortal poet Darl Jubannich, who transcribed them in his now-famous treatise, On Government. However, while Talmandor favored overturning established structures of power where necessary, he never promoted anarchy and has long felt great sadness over how the core tenets of his political philosophy have been twisted beyond recognition in Galt. He strives to promote moderation and peaceful reconciliation within government, even in times of upheaval. In some parts of Andoran, the adulation Talmandor has earned goes beyond respect to outright worship. The agathion steadfastly refuses to seek godhood in his own right, as he believes he can be a better inspiration to the goals of democratic freedom as a powerful outsider who can aid the mortal citizens of Andoran in times of great need, rather than becoming a godlike creature they worship from afar. Talmandor typically assists only those he feels have earned the right to call upon any ally of Andoran, though he is pleased to give advice to anyone if asked in earnest. He often appears to speak when called upon by the People's Council, offering what guidance he can, but never insists that his suggestions be enacted. He has been known to appear at the meetings of smaller city and town councils as well, though as a guest he does not speak until the council asks him to. Only if Andoran faced some threat it found impossible to handle on its own without his aid would Talmandor take direct action to protect the nation, though his regular presence is certainly considered carefully by Andoran's enemies. Though Andoran celebrates a feast day in his honor on 4 Erastus, Talmandor insists the celebration is held to honor him in his capacity as one of many heroes of the nation, rather than as its divine protector. Despite his refusal of the mantle of divinity, a few in Andoran (including a small but growing number of oracles and paladins) revere him as a nascent demigod embodying the virtues of hope, liberty, and community, and his worship has begun to grow in small congregations across the country. Talmandor is closely associated with birds of prey and as a result is the patron of the Steel Falcons order of the Eagle Knights of Andoran, as well as a frequent advisor to leaders within the order. Talmandor inspires their work as ambassadors of liberty, and he sometimes even sends aid to those in the midst of dangerous political missions aimed at cultivating peace. Those who rise to greatness also receive Talmandor's direct blessing, which he sees as a rightful reward for good works and a tool that allows those blessed to achieve even greater things. If called to serve through powerful magic (such as gate), Talmandor generally answers but refuses to grant direct assistance except to those overwhelmingly outmatched by evil foes. Even then, he generally requires any aid he gives be paid for in massive donations to the poor and oppressed, though he also often offers a free alternative to his direct involvement, such as receiving his blessing (often crafted with miracle) or gaining some insight into the caller's foes.",
    organization: "solitary or flight (Talmandor and 3-6 advanced avorals)",
    languages: "Celestial, Common, Draconic, Infernal; speak with animals; truespeech",
    spellLikeAbilities: [
      {
        name: "cloak of winds",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "discern lies",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "freedom of movement",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "magic circle against evil",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "mind blank",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "see invisibility",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "speak with animals",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "true seeing",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "aid",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "daylight",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "dimension door",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "dispel evil",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "displacement",
        casterLevel: 20,
        limitations: "self only",
        timesPerDay: -1
      },
      {
        name: "command, greater",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "dispel magic, greater",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "teleport, greater",
        casterLevel: 20,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: -1
      },
      {
        name: "hold monster",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "magic missile",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "remove fear",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "river of wind",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "wind wall",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "break enchantment",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "control winds",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "divine power",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "eagle aerie",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "chain lightning",
        casterLevel: 20,
        limitations: "Metamagic: Quicken, Empower ",
        timesPerDay: 3
      },
      {
        name: "holy aura",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "holy word",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "miracle",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "plane shift",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "spell turning",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "control weather",
        casterLevel: 20,
        timesPerDay: 1
      },
      {
        name: "heal, mass",
        casterLevel: 20,
        timesPerDay: 1
      },
      {
        name: "overwhelming presence",
        casterLevel: 20,
        timesPerDay: 1
      },
      {
        name: "summon",
        casterLevel: 20,
        limitations: "level 8, 1d4+1 advanced avorals 100%",
        timesPerDay: 1
      },
      {
        name: "sunburst",
        casterLevel: 20,
        timesPerDay: 1
      },
      {
        name: "whirlwind",
        casterLevel: 20,
        limitations: "unknown ft. high, slam damage, DC 25",
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 23
      },
      Bluff: {
        ranks: 10
      },
      Diplomacy: {
        ranks: 23
      },
      Fly: {
        ranks: 30
      },
      "Handle Animal": {
        ranks: 23
      },
      Intimidate: {
        ranks: 23
      },
      "Knowledge (history)": {
        ranks: 6
      },
      "Knowledge (local)": {
        ranks: 6
      },
      "Knowledge (nobility)": {
        ranks: 6
      },
      "Knowledge (planes)": {
        ranks: 3
      },
      Perception: {
        ranks: 27,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Perform0: {
        subSkill: "oratory",
        ranks: 3
      },
      "Sense Motive": {
        ranks: 27
      },
      Spellcraft: {
        ranks: 6
      },
      Stealth: {
        ranks: 26
      },
      "Use Magic Device": {
        ranks: 27
      }
    },
    special: {
      "channel positive energy": {
        type: "Su",
        text: "Talmandor can expend two uses of his lay on hands ability to channel energy as a 20th-level cleric."
      },
      "coruscating charge": {
        type: "Su",
        text: "When Talmandor charges, he can transform his body into golden light. He becomes incorporeal until he arrives at the end of his charge and makes his physical attacks. In this form, he radiates light as a daylight spell. Any evil creature whose space he passes through is affected as by sunbeam (Reflex DC 35 negates and Reflex half), while good-aligned creatures whose space he passes through gain the benefit of good hope for 1d4 rounds. The save DC is Constitution-based. Protective Aura (Su) Against attacks made or effects created by evil creatures, this ability provides a +4 deflection bonus to AC and a +4 resistance bonus on saving throws to anyone within 20 feet of Talmandor. Otherwise, it functions as a magic circle against evil effect and a lesser globe of invulnerability, both with a radius of 20 feet (and a caster level of 20th). The defensive benefits from the magic circle are not included in the statistics above."
      },
      pounce: {
        universalMonsterAbility: "Pounce"
      },
      rend: {
        universalMonsterAbility: "Rend",
        type: "Ex",
        weaponName: 2
      },
      "sacred slasher": {
        type: "Ex",
        text: "When attacking with his claws, Talmandor adds 1-1/2 times his Strength bonus on damage rolls. He also threatens a critical hit on a roll of 18-20 and multiplies critical hit damage by 3. His claws overcome all damage reduction of evil creatures."
      },
      "twin talons": {
        type: "Ex",
        text: "When using the attack action, Talmandor can attack a single target with both claws."
      },
      "benevolent mercy": {
        type: "Su",
        text: "When Talmandor uses his lay on hands ability, he also removes all of the following conditions from the target: dazed, nauseated, paralyzed, poisoned, sickened, and stunned."
      },
      "lay on hands": {
        type: "Ex",
        preText: "10d6, 10/day, as a 20th-level paladin"
      },
      evasion: {
        universalMonsterAbility: "Evasion"
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "60 ft."
      },
      "protective aura": {
        type: "Su",
        text: "Against attacks made or effects created by evil creatures, this ability provides a +4 deflection bonus to AC and a +4 resistance bonus on saving throws to anyone within 20 feet of Talmandor. Otherwise, it functions as a magic circle against evil effect and a lesser globe of invulnerability, both with a radius of 20 feet (and a caster level of 20th). The defensive benefits from the magic circle are not included in the statistics above.",
        preText: "30 ft., DC 30, 10 rounds"
      },
      "quell the profane": {
        type: "Su",
        text: "Talmandor's frightful presence aura affects only evil creatures. Evil creatures inside Talmandor's protective aura also become sickened, and profane bonuses are suppressed within his aura unless their caster level exceeds 20th."
      }
    }
  },

};

export const City_Of_Seven_SpearsCreatures = {
  Camulatz: {
    source: "City Of Seven Spears",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Large",
    hd: 12,
    hdVal: 10,
    cr: 9,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 10,
      maneuverability: "Average",
      fly: 80
    },
    abilities: {
      str: 23,
      dex: 17,
      con: 18,
      int: 8,
      wis: 15,
      cha: 14
    },
    feats: [
      {
        name: "Bleeding Critical",
        type: "Combat"
      },
      {
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Natural Attack",
        type: "Monster",
        value: "Bite",
        choiceSource: "Improved Natural Attack"
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
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        bonuses: [
          {
            source: "inherent",
            value: "2d6",
            appliesTo: "damageType",
            damageType: "bleed"
          }
        ],
        type: "primary"
      },
      {
        weapon: "Talon",
        name: "2 Talons",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 10
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "tropical jungles",
    visualDescription: "Vibrant blue and yellow feathers adorn the body of this giant, parrot-like bird, but its curved beak and powerful talons are instead adorned with dried blood and gore.",
    organization: "solitary, flight (2-5), or aerie (6-12)",
    languages: "Abyssal, Auran",
    spellLikeAbilities: [
      {
        name: "entropic shield",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "ventriloquism",
        casterLevel: 12,
        timesPerDay: 3
      }
    ],
    skills: {
      Fly: {
        ranks: 3
      },
      Bluff: {
        ranks: 4,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Perception: {
        ranks: 6
      }
    },
    special: {
      "decapitating strike": {
        type: "Ex",
        text: "On an attack roll of a natural 20 (followed by a successful roll to confirm the critical hit) with its bite attack, a camulatz severs its opponent's head (if the opponent has one). Most creatures die when their heads are cut off. This ability functions as the vorpal weapon special ability."
      },
      "hypnotic display": {
        type: "Su",
        text: "As a full-round action, a camulatz may cause its coat of feathers to change colors, shifting through a mesmerizing pattern that lures creatures to the camulatz's side. All creatures who can see the camulatz (even other camulatz) must succeed on a DC 18 Will saving throw or become captivated. A creature that successfully saves is not subject to the same camulatz's hypnotic display for 24 hours. A victim under the effects of the hypnotic display moves toward the camulatz using the most direct means available. If this path leads the victim into a dangerous area, such as through fire or off a cliff, that creature receives a second saving throw to end the effect before moving into peril. Captivated creatures can take no actions other than to defend themselves. A victim that is within 5 feet of the camulatz simply stands and offers no resistance to the camulatz's attacks. This effect lasts for 1d6 rounds. Sightless creatures are not affected. This is a mind-affecting pattern effect. The save DC is Charisma-based."
      },
      rend: {
        universalMonsterAbility: "Rend",
        type: "Ex",
        weaponName: 9
      },
      "sound mimicry": {
        type: "Ex",
        text: "A camulatz can perfectly imitate certain sounds or the speech of any creature it has heard, though this ability does not allow it to speak or to understand languages it does not know. The listener must make a Sense Motive check opposed by the camulatz's Bluff check to recognize the mimicry, although if the listener isn't familiar with the person or the type of creatures mimicked, it takes a -8 penalty on its Sense Motive check. The camulatz has a +8 racial bonus on its Bluff check to mimic speech or sounds that it has listened to for at least 10 minutes. It cannot duplicate the effects of magical abilities (such as bardic performance or a harpy's captivating song), though it may be able to mimic the sound of those abilities."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "60 ft."
      }
    }
  },

  "Megapiranha Swarm": {
    source: "City Of Seven Spears",
    creatureType: "animal",
    fish: true,
    subTypes: [
      "aquatic",
      "swarm"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Tiny",
    hd: 9,
    hdVal: 8,
    cr: 6,
    racialFeatures: [
      "Blindsense 30 ft.",
      "Keen Scent"
    ],
    speed: {
      swim: 40
    },
    abilities: {
      str: 12,
      dex: 15,
      con: 17,
      int: 1,
      wis: 12,
      cha: 2
    },
    feats: [
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Stealth",
        choiceSource: "Skill Focus"
      },
      {
        name: "Step Up",
        type: "Combat"
      },
      {
        name: "Toughness",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "swarm",
        name: "swarm",
        specialAbility: "bleed, distraction",
        damage: "2d6"
      }
    ],
    defense: {
      naturalArmor: 3
    },
    space: "10 ft.",
    reach: "0 ft.",
    environment: "any aquatic",
    visualDescription: "Within this mass of primeval fish glint innumerable savagely gnashing teeth.",
    description: "A swarm of megapiranhas",
    organization: "solitary, shoal (2-4 swarms), or school (5-7 swarms)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 2
      },
      Stealth: {
        ranks: 2
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      bleed: {
        universalMonsterAbility: "Bleed",
        damage: "2d6"
      }
    }
  },

  "Vireseed Swarm": {
    source: "City Of Seven Spears",
    creatureType: "plant",
    subTypes: [
      "swarm"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Fine",
    hd: 7,
    hdVal: 8,
    cr: 5,
    racialFeatures: [
      "Blindsense 60 ft."
    ],
    speed: {
      base: 5,
      maneuverability: "Perfect",
      fly: 30
    },
    abilities: {
      str: 1,
      dex: 13,
      con: 18,
      int: "-",
      wis: 10,
      cha: 13
    },
    feats: [],
    attacks: [
      {
        weapon: "swarm",
        name: "swarm",
        specialAbility: "infestation",
        damage: "2d6"
      }
    ],
    immunities: [
      "Immune to weapon damage"
    ],
    defense: {},
    space: "10 ft.",
    reach: "0 ft.",
    environment: "any",
    visualDescription: "A wave of wing-like seedpods whips through the air, each tipped by a miniscule thorn and propelled by a rapidly lashing tendril.",
    description: "A swarm of vireseeds.",
    organization: "solitary, flight (2-4 swarms), or cloud (5-7 swarms)",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 2,
        bonuses: [
          {
            source: "inherent",
            situational: true,
            note: "modifies  with Dexterity"
          }
        ]
      },
      Fly: {
        ranks: 0
      },
      Perception: {
        ranks: 0
      }
    },
    special: {
      infestation: {
        type: "Ex",
        text: "Swarm-injury; save Fort DC 17; onset immediate; frequency 1/round for 3 rounds; effect 1 Con damage; cure applying flame to the infested character deals 1d6 points of fire damage but immediately destroys the infestation; blight, reduce plants, and remove disease also automatically destroy the infestation. (See page 245 of the GameMastery Guide for more details on infestations.)"
      }
    }
  },

  "Tribal Totem": {
    source: "City Of Seven Spears",
    creatureType: "construct",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 9,
    hdVal: 10,
    cr: 6,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 20
    },
    abilities: {
      str: 17,
      dex: 14,
      con: "-",
      int: "-",
      wis: 13,
      cha: 14
    },
    feats: [],
    attacks: [
      {
        weapon: "Slam",
        name: "2 Slams",
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
        damageType: "slashing"
      },
      naturalArmor: 7
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "With the splintering sound of dry, cracking wood, a human-sized graven image lurches to life. Its features shift and reform with every step, cycling through a variety of faces both strange and oddly familiar. Bits of feather, leaves, and decorative stone embellish its surface, and the strong smell of lacquer and resin assaults the senses as it draws near with a menacing, ponderous gait.",
    description: "Tribal totems represent a significant cultural achievement for their adopted tribe. Imbued with a spark of life from the continued worship of those they protect, they stand as lifelong guardians of their villages, defending them against enemies and predators alike. To aid them in this function, they also possess the unusual ability to reshape themselves into the likeness of other creatures, targeting them with eerie pains and ailments. This ability enables their tribe to more actively hunt down such enemies while their quarry is hindered and tracked by the totem. As mindless automatons, tribal totems remain ever dependent on their creators to direct them. Some serve only a defensive role, strategically placed within villages to aid against attacks. Others carry stored messages on their tribe's behalf or vocalize their creator's words. Rarer still are the tribal totems purposed for war, which emerge from the jungle as a potent force capable of spearheading invasions and targeting enemy champions. While most tribal totems are made of wood and combine exaggerated features of folkloric monsters with simple decorations and images of strength (like streaks of blood, the claws of defeated beasts, or enemy skulls), few look exactly alike, as each embodies the deities, fears, or legends of its creator's people. Tribal totems tend to stand 7 feet tall and weigh over 300 pounds. Ecology As constructs, tribal totems have no significant ecological niche. They exist at the whim of their creators and protect their assigned tribes from harm. The divine spark that powers them emanates from the continued adulation and combined spiritual energy of the tribe, but relies upon constant rekindling. Each morning, the totem requires lengthy ritual adoration to renew its power. Otherwise, the totem remains still, appearing to be nothing more than a decorative statue. During elaborate festivals and revels, tribal natives usually spend several hours honoring the totem to ensure it remains vigilant for many days. They also take care to mend and repair any damage it might have suffered on their behalf. Once charged in this manner, the totem may operate remotely for many days at a time, undertaking longer trips on the tribe's behalf to hunt down enemies whose likeness it acquires. Habitat & Society Tribal shamans, oracles, or witchdoctors most commonly undertake the rituals necessary to construct a tribal totem, guiding the rest of the tribe in worshiping and maintaining it. The totem only obeys the commands of its creator or someone appointed by her. In the event of conf licting orders, it always obeys its creator above anyone else loaned such authority. Typically, a tribal totem spends its entire existence within the confines of its creator's village, and is completely dependent on the continuing worship of the tribe to give it a semblance of life. Only in rare cases might a multitude of tribes gather their totems together for some shared offensive. Tales also tell of crazed hermits and shamanic outcasts who have created multiple tribal totems and then set them against specific individuals or whole tribes who garner their ire. Greater Tribal Totems Legends also tell of more advanced versions of tribal totems, some reaching Large or even Huge size. Serving as guardians of important religious or cultural sites, these totems possess multiple faces, one on each side of their heads, enabling them to take on the conjoined likeness of up to four victims at a time. They also gain the following additional abilities: • +3 natural armor • +4 Strength, +2 Wisdom, +2 Charisma • All-Around Vision (Ex) A greater tribal totem gains a +6 bonus on Perception checks and cannot be flanked. • Extended Effigy (Su) A greater tribal totem is no longer dependent on line of sight to affect victims with its shared condition ability. Instead, it can extend this power to any creature that has ever been in its line of sight and is currently within 5 miles, often enabling its creators to inflict terrible punishments upon their enemies through the totem's connection. Construction A tribal totem is always carved from a single type of wood chosen for its density and beauty-typically, ebony, mahogany, or some other valuable resource whose value is at least 1,000 gp. Some tribes use ivory instead, lashing together the pieces and then relying on the magic of the totem's construction to knit everything into a single whole. Decorations of leafy fronds, stones, animalistic trophies, and paint help complete the appearance. Initially, a creator shapes a totem's features into a ferocious, monstrous image. Then, the application of the proper spells enables the construct to alter its appearance to mimic other creatures. Tribal Totem CL 8th; Price 19,000 gp Construction Requirements Craft Construct, animate objects, disguise self, locate creature, magic mouth, shield other, creator must be caster level 11th; Skill Craft (carpentry) and Craft (sculpture) DC 20; Cost 10,000 gp. Greater Tribal Totem CL 9th; Price 22,000 gp Construction Requirements Craft Construct, animate objects, arcane eye, disguise self, locate creature, magic mouth, shield other, creator must be caster level 13th; Skill Craft (carpentry) and Craft (sculpture) DC 24; Cost 12,000 gp.",
    organization: "solitary or gang (2-4)",
    spellLikeAbilities: [],
    skills: {},
    special: {
      "spirit link": {
        type: "Su",
        text: "As a standard action, a tribal totem may attempt to join its animating energies with a creature within its line of sight that also shares its likeness (as per the effigy ability). The target can resist this effect with a DC 16 Will save. If this save fails, the target is affected as if it had cast the spell shield other, taking half the damage inflicted upon the tribal totem. In addition, any spell with a range of \"creature touched\" cast upon the tribal totem affects the linked creature rather than the construct. If the spell allows a saving throw, the linked creature can make a saving throw as normal to resist the effect. Spirit link lasts for 4 hours and ends immediately if the tribal totem no longer possesses the target's shape. The save DC is Charisma-based."
      },
      effigy: {
        type: "Su",
        text: "As a full-round action once per day, a tribal totem can mimic the shape of any Small or Medium humanoid within its line of sight, reforming itself into a wooden depiction of that creature. Upon doing so, the target can be affected by the effigy ability. While in this shape, the tribal totem knows the location of its target as if persistently using the spell locate creature. A warp wood or wood shape spell immediately forces the tribal totem to revert to its normal form. Although the tribal totem may only use this ability once per day, it can retain a shape indefinitely."
      },
      mouthpiece: {
        type: "Sp",
        text: "Although a tribal totem cannot speak on its own, every day it can store a single message for its creator and repeat that message upon a prescribed condition. This ability functions as the magic mouth spell, and its creator may change or reset the conditions of the message each day."
      }
    },
    resistances: [
      "ceremonial activation",
      "vulnerable to fire"
    ]
  },

  Umasi: {
    source: "City Of Seven Spears",
    creatureType: "monstrous humanoid",
    subTypes: [],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Medium",
    hd: 5,
    hdVal: 10,
    cr: 4,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 18,
      dex: 15,
      con: 17,
      int: 10,
      wis: 13,
      cha: 8
    },
    feats: [
      {
        name: "Great Fortitude",
        type: "General"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Multiweapon Fighting",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Dagger",
        name: "Dagger",
        damage: "1d4"
      },
      {
        weapon: "Unarmed strike",
        name: "2 Unarmed strikes",
        damage: "1d3"
      },
      {
        weapon: "Shortbow",
        name: "Shortbow",
        damage: "1d6"
      }
    ],
    immunities: [
      "Immune to disease"
    ],
    defense: {
      saves: {
        All: [
          {
            value: 2,
            note: "vs. poison"
          }
        ]
      },
      naturalArmor: 4
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "tropical jungles",
    visualDescription: "An emaciated humanoid bursts through the trees, brandishing a knife of black stone. His body is a patchwork of hair, skin, scales, and strange limbs stitched together with thick, black thread.",
    organization: "solitary, hunting party (2-8), or tribe (10-30)",
    languages: "Polyglot",
    spellLikeAbilities: [],
    skills: {
      Heal: {
        ranks: 4,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Intimidate: {
        ranks: 4
      },
      Perception: {
        ranks: 4,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Stealth: {
        ranks: 2,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Survival: {
        ranks: 4
      }
    },
    special: {
      "graft flesh": {
        type: "Su",
        text: "Umasi can graft the flesh and even limbs of other humanoids to their own bodies in a ritual that takes 1 hour to complete. To heal damage, an Umasi must have a supply of flesh (either living or dead), and the Umasi must make a DC 20 Heal check to treat deadly wounds. The Umasi can only heal damage with his graft flesh ability once per day, but there is no time limit on healing wounds and the Umasi does not need a healer's kit (and does not take a penalty for lacking one). This ability otherwise functions as the treat deadly wounds use of the Heal skill. Umasi can also graft additional limbs onto their bodies; each extra arm gives the Umasi an additional unarmed strike, while each additional leg adds +5 feet to the Umasi's speed. An Umasi can have a maximum of six arms and six legs."
      },
      "harvest organs": {
        type: "Su",
        text: "An Umasi can remove a vital organ when he delivers a coup de grace against a humanoid opponent with a slashing or piercing weapon. The next round, the Umasi can consume the harvested organ as a move action to gain the benefits of the death knell spell (caster level equal to the Umasi's Hit Dice)."
      },
      "immortal flesh": {
        type: "Su",
        text: "Umasi are immune to disease and aging effects, and they gain a +2 racial bonus on saving throws against poison. Immune to Healing (Ex) Umasi do not heal damage naturally, and are not healed by positive or negative energy."
      }
    },
    resistances: [
      "immune to healing"
    ]
  },

};
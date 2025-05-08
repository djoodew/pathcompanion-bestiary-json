
export const Bestiary_6Creatures = {
  "Piranha Swarm": {
    source: [
      "Bestiary 6",
      "Tome of Horrors Complete"
    ],
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
    hd: 5,
    hdVal: 8,
    cr: 4,
    racialFeatures: [
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      swim: 70
    },
    abilities: {
      str: 3,
      dex: 16,
      con: 11,
      int: 1,
      wis: 12,
      cha: 2
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Perception",
        choiceSource: "Skill Focus"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Swim",
        choiceSource: "Skill Focus"
      },
      {
        name: "Weapon Finesse",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "swarm",
        name: "swarm",
        specialAbility: "bleed",
        damage: "1d6"
      }
    ],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any warm saltwater",
    visualDescription: "Perhaps no creature of the water is feared more than the piranha. Lightning speed, coupled with vicious teeth and a pack-slaughter mentality place this predator firmly at the top of the food chain. Whether swarming together to take down larger prey, or developing wings to attack land creatures, the ravenous piranha cannot be stopped.",
    description: "This large grouping of piranha is a fearsome sight. While individual piranha are frightening enough, the piranha swarm attacks as a single-minded mass of predatory fish. With lining speed, a piranha swarm can strip the flesh of a Large creature in seconds. Credit Original author Scott Casper Originally appearing in Jungle Ruins of Madaro-Shanti (© Frog God Games, 2010)",
    organization: "solitary or mass (2-4 swarms)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 0
      },
      Swim: {
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
      bleed: {
        universalMonsterAbility: "Bleed",
        damage: "2 points"
      }
    }
  },

  Alp: {
    source: "Bestiary 6",
    creatureType: "fey",
    subTypes: [
      
    ],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Medium",
    hd: 13,
    hdVal: 6,
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
      dex: 27,
      con: 23,
      int: 10,
      wis: 8,
      cha: 17
    },
    feats: [
      {
        name: "Agile Maneuvers",
        type: "Combat"
      },
      {
        name: "Dodge",
        type: "Combat"
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
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
      },
      {
        weapon: "Claw",
        name: "2 Claws",
      }
    ],
    immunities: [
      "sleep effects"
    ],
    resistances: [
      "light sensitivity",
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "cold iron"
      },
      SR: {
        value: 21
      },
      naturalArmor: 5
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any land",
    visualDescription: "This hoofed creature’s large yellow eyes are set in a noseless face above a grinning, fang-filled mouth.",
    description: "Alps are troublesome fey who disturb the dreams and drink the blood of sleeping victims. Unlike other dream-haunting monsters, alps are driven more by their capricious whims than any desire to do harm; when an alp drinks a victim’s blood, it always takes care to leave him alive—if only so it can return at a later date to feed again. Alps despise bright light and avoid well-lit rooms, if they can. They enjoy playing pranks and causing minor mishaps. A typical alp stands about 5 feet tall and weighs about 90 pounds.",
    organization: "solitary, pair, or visitation (3–8)",
    languages: "Aklo, Common; telepathy 30 ft.",
    spellLikeAbilities: [
      {
        name: "magic fang, greater",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "deep slumber",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "prestidigitation",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "nightmare",
        casterLevel: 10,
        timesPerDay: 3
      },
      {
        name: "putrefy food and drink",
        casterLevel: 10,
        timesPerDay: 3
      },
      {
        name: "invisibility, greater",
        casterLevel: 10,
        limitations: "self-only",
        timesPerDay: 1
      },
    ],
    skills: {
      Acrobatics: {
        ranks: 13
      },
      Climb: {
        ranks: 13
      },
      "Escape Artist": {
        ranks: 13
      },
      Intimidate: {
        ranks: 13
      },
      Perception: {
        ranks: 13
      },
      Stealth: {
        ranks: 13
      }
    },
    special: {
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "shapechange",
        type: "cat, dog, pig, snake, or butterfly"
      },
      "crushing leap": {
        type: "Su",
        text: "An alp can perform a special leaping attack by jumping on top of an adjacent target of its size category or smaller. The target must succeed at a DC 22 Reflex save or take 2d6+3 points of damage and be knocked prone. The alp can immediately attempt to grapple this foe without provoking an attack of opportunity. The save DC is Constitution-based."
      },
      "nightmare rider": {
        type: "Su",
        text: "An alp controls the dreams of a sleeping target by sitting atop its torso. Once it does so, the alp becomes heavier and heavier, restricting the victim’s breathing while inducing terrible nightmares and draining its blood. The victim can attempt a Perception check to waken, opposed by the alp’s Stealth check (the Perception check modifier for the character being asleep is only +5, due to the alp’s weight). If the sleeper fails to waken, the alp can use its blood drain ability against the victim and gains a +4 circumstance bonus to the save DC of its nightmare spell-like ability against that creature. If the creature fails the saving throw, it takes 1d6 points of Charisma damage in addition to the normal effects of nightmare."
      },
      "blood drain": {
        universalMonsterAbility: "Blood Drain",
        damage: "1d2",
      },
      "sneak attack": {
        universalMonsterAbility: "Sneak Attack",
        bonus: "2d6"
      },
    }
  },

  Banelight: {
    source: "Bestiary 6",
    creatureType: "fey",
    subTypes: [
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Medium",
    hd: 16,
    hdVal: 6,
    cr: 12,
    racialFeatures: [
      "Blindsense 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      maneuverability: "Perfect",
      fly: 100,
      base: 20
    },
    abilities: {
      str: 12,
      dex: 32,
      con: 25,
      int: 21,
      wis: 22,
      cha: 23
    },
    feats: [
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Defensive Combat Training",
        type: "Combat"
      },
      {
        name: "Great Fortitude",
        type: "General"
      },
      {
        name: "Improved Great Fortitude",
        type: "General"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Quicken Spell-Like Ability",
        type: "Monster",
        //value: "wandering star motes",
        //choiceSource: "Quicken Spell-Like Ability"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      },
      {
        name: "Weapon Finesse",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "2 Light Vortices",
        name: "2 Light Vortices",
        qualities: [
          "touch"
        ],
      }
    ],
    immunities: [
      "magic"
    ],
    resistances: [
      "susceptible to darkness"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "cold iron"
      },
      naturalArmor: 6
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "This creature has a dragonfly’s body and a woman’s head and arms. A glowing red vortex gathers between her hands.",
    description: "Banelights are cruel fey who stalk mortals in the darkness and loathe the increasing ubiquity of mortalmade light. Banelights are strangely social creatures, and they conduct bizarre courtship dances among themselves or with will-o’-wisps. In the absence of other fey to keep them company, banelights sometimes capture mortals to keep them entertained. While a good conversationalist can survive as a banelight’s “guest” for years, banelights are quick to dispatch companions who bore them.",
    organization: "solitary, pair, or witchlight (3–10 plus 4–6 will-o’-wisps or lurkers in light)",
    languages: "Aklo, Auran, Common, Draconic, Sylvan",
    spellLikeAbilities: [
      {
        name: "daylight",
        casterLevel: 12,
        timesPerDay: -1,
        limitations: "centered on self"
      },
      {
        name: "wandering star motes",
        casterLevel: 12,
        timesPerDay: 3,
        metamagic: ["quickened"]
      },
      {
        name: "wandering star motes",
        casterLevel: 12,
        timesPerDay: -1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 16
      },
      Bluff: {
        ranks: 16
      },
      "Escape Artist": {
        ranks: 16
      },
      Fly: {
        ranks: 16
      },
      Intimidate: {
        ranks: 16
      },
      "Knowledge (nature)": {
        ranks: 16
      },
      Perception: {
        ranks: 16
      },
      "Sense Motive": {
        ranks: 16
      },
      Spellcraft: {
        ranks: 16
      },
      Stealth: {
        ranks: 16
      },
      "Use Magic Device": {
        ranks: 16
      },
    },
    special: {
      "banelight aura": {
        type: "Su",
        text: "Creatures within a banelight’s aura and also in an area of bright light (generally the case because of the creature’s constant daylight) are dazzled and affected as by the spell bane, with no saving throw. All magical light sources that come within a banelight’s aura turn bright red except those from her own spell-like abilities."
      },
      "create will-o’-wisp": {
        type: "Su",
        text: "Up to three times per day as a swift action, a banelight can cause a single nonliving source of light (other than one she created) within the area of her banelight aura to spawn an advanced will-o’-wisp under her control. Will-o’-wisps created in this manner exist for up to 1 minute before vanishing. A single banelight can maintain up to three will-o’-wisps at a time in this manner."
      },
      "immune to magic": {
        type: "Su",
        text: "Banelights are immune to all spells and spell-like abilities that allow spell resistance except magic missile, maze, and their personal daylight (which constantly affects them even though they aren’t an object)."
      },
      "light vortex": {
        type: "Su",
        text: "A banelight can use its light vortices as melee touch attacks or ranged touch attacks with a 60-foot range. Each vortex deals 5d8 points of damage to most targets, but deals 5d6 points of damage to constructs and inanimate objects, 10d6 points of damage to undead, and 10d8 points of damage to creatures specifically vulnerable to sunlight or bright light. This damage bypasses all damage reduction and energy resistance.",
      },
      "susceptible to darkness": {
        type: "Ex",
        text: "A banelight gains much of its power from light. It can reactivate its daylight on its turn if the effect is dispelled, but a banelight in an area of darkness does not have a banelight aura, loses its fast healing, and is staggered.",
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        value: 10,
        condition: "while not in darkness"
      }
    }
  },

  Kamaitachi: {
    source: "Bestiary 6",
    creatureType: "fey",
    subTypes: [
      "air"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 14,
    hdVal: 6,
    cr: 13,
    racialFeatures: [
      "Blindsight 60 ft.",
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      maneuverability: "Perfect",
      fly: 120,
      base: 30
    },
    abilities: {
      str: 12,
      dex: 27,
      con: 28,
      int: 15,
      wis: 24,
      cha: 23
    },
    feats: [
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
        name: "Mobility",
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
        name: "4 Claws",
        damage: "1d6",
        critical: "19-20/x3",
        specialAbility: "bleed and pain",
      }
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "cold iron"
      },
      SR: 24,
      naturalArmor: 4,
      deflection: 6
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "This weasellike creature has sickles in place of feet. It moves incredibly swiftly, swirling in the air astride a vortex of dust.",
    description: "Kamaitachis revel in causing pain. A kamaitachi might, for example, hold someone hostage with its delayed doom ability and force that person (or one of the victim’s loved ones) to commit horrible or demeaning acts in exchange for the hostage’s life. Of course, depending on its fickle mood, the kamaitachi is just as likely to kill a hostage who meets its demands.",
    organization: "solitary, pair, or storm (3–6)",
    languages: "Auran, Common, Sylvan",
    spellLikeAbilities: [
      {
        name: "magic fang, greater",
        casterLevel: 12,
        timesPerDay: -1,
      },
      {
        name: "status",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "wind wall",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "control winds",
        casterLevel: 12,
        timesPerDay: 3
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 14
      },
      Bluff: {
        ranks: 14
      },
      "Disable Device": {
        ranks: 14
      },
      Fly: {
        ranks: 14
      },
      "Knowledge (nature)": {
        ranks: 14
      },
      Perception: {
        ranks: 14
      },
      "Sense Motive": {
        ranks: 14
      },
      Stealth: {
        ranks: 14
      }
    },
    special: {
      "deadly claws": {
        type: "Ex",
        text: "A kamaitachi’s claws threaten a critical hit on a roll of 19–20 and deal ×3 damage on a confirmed critical hit."
      },
      "delayed doom": {
        type: "Su",
        text: "When a kamaitachi deals damage with a claw, it can delay the damage (including the bleed and pain effect). If it does, the damage doesn’t take effect immediately. Instead, at any time in the next 2 weeks, the kamaitachi can cause the damage, bleed, and pain effects to instantly manifest as a free action. It can activate as many delayed doom effects on a single target as it wishes with the same free action, potentially cutting a victim who seemed unharmed into ribbons. The victim must remain within 1 mile of the kamaitachi between the time it incurs the damage and its manifestation—a victim who moves beyond this limit causes the delayed doom effect to immediately end without harm. Most kamaitachi try to keep track of their delayed doom victims via status."
      },
      "dust devil": {
        type: "Su",
        text: "A kamaitachi’s trusty dust devil deflects arrows, bolts, bullets, and other small projectiles automatically and thrown weapons 30% of the time (like a personal wind wall effect). The dust devil also grants the kamaitachi a deflection bonus to its AC equal to its Charisma bonus (+6 for the typical kamaitachi). Whenever a kamaitachi is caught within the area of effect of a spell or supernatural effect that alters or controls winds (including control weather and control winds), it must succeed at a Fortitude save to avoid losing control of its dust devil. The save DC is equal to the spell’s save DC, or DC 20 if the effect isn’t a spell or spell-like ability. If the kamaitachi loses control of its dust devil, it immediately loses its fly speed. It also loses the benefits of its dust devil ability and must succeed at a concentration check (DC = 15 + double the spell level) in order to use any of its spell-like abilities. A kamaitachi can reactivate its dust devil by casting control winds (but not wind wall); as such, a kamaitachi is hesitant to use its last control winds spell in a day in case it needs it to regain its dust devil."
      },
      "pain": {
        type: "Su",
        text: "A creature damaged by a kamaitachi’s claw attack becomes sickened for 1 round (Fortitude DC 23 negates). This is a pain effect. The save DC is Charisma-based.",
      },
      "bleed": {
        universalMonsterAbility: "Bleed",
        damage: "1d6",
      }
    }
  },

  "Wild Hunter Archer": {
    source: "Bestiary 6",
    creatureType: "fey",
    subTypes: [
      "wild hunt"
    ],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Medium",
    hd: 22,
    hdVal: 6,
    cr: 13,
    racialFeatures: [
      "Low-Light Vision",
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 20,
      dex: 28,
      con: 21,
      int: 16,
      wis: 23,
      cha: 21
    },
    feats: [
      {
        name: "Deadly Aim",
        type: "Combat"
      },
      {
        name: "Far Shot",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Composite longbow",
        choiceSouce: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Precise Shot",
        type: "Combat"
      },
      {
        name: "Mounted Archery",
        type: "Combat"
      },
      {
        name: "Mounted Combat",
        type: "Combat",
      },
      {
        name: "Point-Blank Shot",
        type: "Combat",
      },
      {
        name: "Precise Shot",
        type: "Combat",
      },
      {
        name: "Rapid Shot",
        type: "Combat",
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Composite longbow",
        choiceSouce: "Weapon Focus"
      },
    ],
    attacks: [
      {
        weapon: "Composite longbow",
        enchantments: [
          {
            name: "Enhancement Bonus +5",
            source: "inherent"
          },
          {
            name: "Icy Burst",
            source: "inherent"
          },
          {
            name: "Seeking",
            source: "inherent"
          },
        ],
        name: "Composite longbow",
        damage: "1d8",
        strBonus: 5
      }
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "cold iron"
      },
      naturalArmor: 4,
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any land",
    visualDescription: "This lithe, androgynous humanoid has pointed ears, glowing green eyes, and six fingers on each slender hand.",
    description: "Wild hunt archers are methodical hunters who fire their bows with uncanny accuracy. Since wild hunt archers tend to be slower on foot than most of their companions, they will often rely on wild hunt horses to provide increased mobility. Rather than carrying normal arrows, they can produce arrows from magical quivers—these quivers do not function in this manner for anyone other than wild hunt archers. Rarely, they carry specific slaying arrows to augment particularly dangerous hunts.",
    organization: "solitary, squad (2–6), ride (1–4 wild hunt archers mounted on wild hunt horses), or wild hunt",
    languages: "Aklo, Common, Sylvan; speak with animals, speak with plants",
    spellLikeAbilities: [
      {
        name: "vampiric touch",
        casterLevel: 13,
        timesPerDay: -1
      },
      {
        name: "black tentacles",
        casterLevel: 13,
        timesPerDay: 3
      },
      {
        name: "haste",
        casterLevel: 13,
        timesPerDay: 3
      },
      {
        name: "slay living",
        casterLevel: 13,
        timesPerDay: 3
      },
      {
        name: "sleet storm",
        casterLevel: 13,
        timesPerDay: 3
      },
      {
        name: "cloudkill",
        casterLevel: 13,
        timesPerDay: 1
      },
      {
        name: "disintegrate",
        casterLevel: 13,
        timesPerDay: 1
      },
      {
        name: "freezing sphere",
        casterLevel: 13,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 22
      },
      "Handle Animal": {
        ranks: 22
      },
      Intimidate: {
        ranks: 22
      },
      "Knowledge (nature)": {
        ranks: 22
      },
      Perception: {
        ranks: 22
      },
      Ride: {
        ranks: 22
      },
      "Sense Motive": {
        ranks: 22
      },
      Stealth: {
        ranks: 22
      },
      Survival: {
        ranks: 22
      }
    },
    special: {
      "infuse arrow": {
        type: "Su",
        text: "A wild hunt archer can cast a single spell-like ability with the range of touch as a part of a full attack. If he does so, the spell infuses his bow and travels with the next arrow he fires. If he hits a creature with that arrow, the target is also subject to the effects of the spell. If he misses, the spell vanishes from the arrow. Alternatively, he can infuse his bow with a spell-like ability that affects an area as a standard action. The spell’s area of effect centers around wherever the arrow lands. If he hits a creature with such an arrow, that creature takes a –4 penalty on saves and checks it attempts against the effects of the spell, and also to its CMD against the spell effects (if applicable)."
      },
      "living bow": {
        type: "Su",
        text: "Any non-magical bow that a wild hunt archer picks up gains a spark of life, sprouting small leaves and becoming a +5 icy burst seeking composite longbow for as long as the archer holds it. The archer’s quiver produces arrows automatically as the archer draws them; these arrows vanish after 1 round."
      },
      "pain": {
        type: "Su",
        text: "A creature damaged by a kamaitachi’s claw attack becomes sickened for 1 round (Fortitude DC 23 negates). This is a pain effect. The save DC is Charisma-based.",
      },
      "bleed": {
        universalMonsterAbility: "Bleed",
        damage: "1d6",
      }
    }
  },

  "Giant Raven": {
    legs: 2,
    arms: 0,
    source: ["Bestiary 6", "In Hell's Bright Shadow"],
    creatureType: "animal",
    bird: true,
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 2,
    hdVal: 8,
    cr: 1,
    racialFeatures: [
      "Low-Light Vision",
    ],
    defense: {
      saves: {
        All: [
          {
            value: 4,
            note: "vs. ingested diseases,"
          },
        ]
      }
    },
    speed: {
      base: 20,
      fly: 50,
    },
    abilities: {
      str: 14,
      dex: 15,
      con: 14,
      int: 2,
      wis: 15,
      cha: 9
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any temperate",
    visualDescription: "This glossy, jet-black bird stands as tall as a dwarf. Its eerily intelligent black eyes are quick to take in everything around it.",
    description: "Some ravens can reach astonishing sizes, making them a threat to foxes, raccoons, and on occasion even larger animals. Like their smaller cousins, giant ravens are omnivorous, able to subsist on nearly anything, though they favor large insects, small mammals, and other birds. They are also consummate scavengers, often feeding on the remains of creatures left behind by larger predators. These large corvids share the keen and vengeful intellect of smaller ravens.\n\nGiant ravens grow to be nearly 5 feet in height and weigh 45 pounds.",
    organization: "solitary, pair, or conspiracy (3–12)",
    skills: {
      Fly: {
        ranks: 1,
      },
      Perception: {
        ranks: 1,
      }
    },
    special: {
      scavenger: {
        type: "Ex",
        text: "Giant ravens are hardy birds that often feed on carrion or even undead flesh. As a direct result of this unusual dietary habit, they gain a +4 bonus on saves to resist ingested diseases."
      }
    }
  },

};
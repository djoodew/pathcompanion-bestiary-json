
export const Wardens_Of_The_Reborn_ForgeCreatures = {
  Capramace: {
    source: "Wardens Of The Reborn Forge",
    creatureType: "aberration",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 9,
    hdVal: 8,
    cr: 7,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 50
    },
    abilities: {
      str: 24,
      dex: 13,
      con: 18,
      int: 1,
      wis: 14,
      cha: 5
    },
    feats: [
      {
        name: "Great Fortitude",
        type: "General"
      },
      {
        name: "Improved Bull Rush",
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
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "disease",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Hoof",
        name: "2 Hooves",
        damage: "1d4",
        type: "secondary"
      }
    ],
    defense: {
      naturalArmor: 8
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "temperate plains",
    visualDescription: "This twisted amalgamation of human and goat sports a backward-facing torso, four stubby hooves, and an empty-eyed expression on its coppery-red face.",
    description: "Capramaces are wild, monstrous beasts native to the Mana Wastes. While their exact origins are unknown, scholars speculate that they are an unholy abomination resulting from some combination of goat, human, and the Mana Wastes' mutative energies. Farmers must be careful when removing them from farmlands for fear of startling them and awakening their terrible, deafening screams. Brave inhabitants of remote Mana Wastes settlements sometimes use capramaces as work animals, but most regard this a foolish endeavor at best.",
    organization: "solitary, pack (2-11), or herd (12-25)",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 4
      },
      Perception: {
        ranks: 5
      }
    },
    special: {
      disease: {
        universalMonsterAbility: "Disease",
        name: "Waste Trembles",
        type: "Su",
        text: "Waste Trembles: Bite-injury; save Fort DC 19; onset 1d3 days; frequency 1 day; effect 1d3 Str and 1d3 Dex damage, target must succeed at a second Fort save or be drained of 1 point of each type of ability damage instead; cure 2 consecutive saves."
      },
      "rage call": {
        type: "Su",
        text: "Once per day as a standard action, a capramace can open its mouth and emit a horrible, earpiercing scream to call for its herd. Maintaining a rage call on any round after the first round is a free action and there is no limit to the duration of a sustained rage call. Non-capramaces within 120 feet that fail a DC 18 Fortitude saving throw are deafened for as long as the capramace maintains its call and for 1d4 minutes afterward. Any other capramaces within 1 mile can hear this high-pitched cry regardless of external noise conditions, and they instinctively react by sprinting to the capramace in need, moving as fast as possible toward the capramace for as long as it maintains its rage call. A capramace moving toward the source of a rage call is treated as though it possessed the Run feat. Any capramace that comes within 60 feet of another capramace's rage call goes wild with fear and anger, stomping about and attacking the nearest creature in sight for as long as the rage call lasts. Sound-mitigating effects such as silence or a muzzle of suppression (see page 26) can prevent a capramace from performing its rage call, as can effects that suffocate a capramace. Similarly, a capramace with the deafened condition cannot be affected by the rage cry of another capramace. The save DC is Constitution-based."
      }
    }
  },

  "Clockwork Snail": {
    source: "Wardens Of The Reborn Forge",
    creatureType: "construct",
    subTypes: [
      "clockwork"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 13,
    hdVal: 10,
    cr: 10,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30,
      climb: 20
    },
    abilities: {
      str: 24,
      dex: 17,
      con: "-",
      int: "-",
      wis: 11,
      cha: 1
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
        name: "Two-Weapon Fighting",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Dire flail",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "Dire flail",
        damage: "1d8/1d8"
      },
      {
        weapon: "Dire flail",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "Dire flail",
        damage: "1d8/1d8"
      }
    ],
    immunities: [
      "construct traits",
      "Immune to eidite sickness"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "adamantine"
      },
      naturalArmor: 12
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "The torso of this constructed gastropod is elongated and eerily humanoid. Smog pours from the shell-like posterior of the machine, while toxic green ooze courses through its translucent pipes.",
    description: "Although their upper bodies resemble the clockwork soldiers from which their forms were no doubt inspired, these mechanical monstrosities are in fact a horrific blend of gastropod and clockwork, fusing the cruelest aspects of calculated war machinery and the foul influence of eidite. A clockwork snail is 12 feet tall and weighs 2,000 pounds. Construction The creator of a clockwork snail must start with crafted clockwork pieces worth 7,500 gp and 1,000 gp worth of refined eidite ore. Clockwork Snail CL 12th; Price 100,000 gp Construction Requirements Craft Construct, animate objects, freedom of movement, geas/quest, and poison, creator must be at least caster level 12th; Skill Craft (clockwork) DC 20; Cost 50,000 gp",
    organization: "solitary, squadron (2-4), or cavalry (5-10)",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 8
      }
    },
    special: {
      "improved charge": {
        type: "Ex",
        text: "A clockwork snail excels at charging into enemies; it can move up to triple its speed when using the charge action, and ignores any effects of difficult terrain while charging."
      },
      tracks: {
        type: "Ex",
        text: "A clockwork snail's tracks allow it to climb even sheer surfaces with ease, granting it a +16 racial bonus on Climb checks instead of the usual +8 for having a climb speed, and it can make attacks with its upper body normally even while climbing."
      },
      "undersized weapons": {
        type: "Ex"
      },
    }
  },

  "Gunpowder Ooze": {
    source: "Wardens Of The Reborn Forge",
    creatureType: "ooze",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 20,
    hdVal: 8,
    cr: 14,
    racialFeatures: [
      "Perception -5"
    ],
    speed: {
      base: 20,
      climb: 20
    },
    abilities: {
      str: 28,
      dex: 11,
      con: 24,
      int: "-",
      wis: 1,
      cha: 1
    },
    feats: [],
    attacks: [
      {
        weapon: "Slam",
        name: "Slam",
        specialAbility: "grab, gunpowder residue",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Blast",
        qualities: [
          "touch"
        ],
        name: "Blast",
        specialAbility: "gunpowder residue",
        damage: "4d6"
      }
    ],
    immunities: [
      "Immune to cold"
    ],
    defense: {},
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any land",
    visualDescription: "This lurching mass of slime and gunpowder leaves a trail of shiny black residue in its wake, and shudders with the concussive energy of an explosive.",
    description: "Common throughout the Mana Wastes, where wild magic and gunpowder are both more prevalent than elsewhere in the world, gunpowder oozes are the combination of these two dangerous and unpredictable elements.",
    organization: "solitary",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 0
      }
    },
    special: {
      combust: {
        type: "Ex",
        text: "Because of the volatile nature of its composition, a gunpowder ooze is susceptible to combusting when an ignition source is present. Anytime a gunpowder ooze takes fire damage or damage from a ranged firearm attack, it spontaneously explodes, dealing 10d6 points of fire damage to all creatures and objects in a 30-foot-burst cone toward the damage source that ignited the ooze. If there is no method of determining the damage source's direction (such as a burst or spread centered on the ooze), the ooze instead combusts in a 15-foot-radius burst. A successful DC 27 Reflex save halves the damage taken from this attack. A gunpowder ooze that combusts automatically splits. The save DC is Constitution-based."
      },
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "1d8+13"
      },
      split: {
        type: "Ex",
        preText: "slashing or fire; 46 hp"
      },
      grab: {
        universalMonsterAbility: "Grab"
      },
      "gunpowder residue": {
        type: "Reflex DC 27 negates",
        text: " This attack has a range of 180 feet with no range increment. The save DC is Constitution-based."
      }
    },
    resistances: [
      "vulnerable to fire"
    ]
  },

};
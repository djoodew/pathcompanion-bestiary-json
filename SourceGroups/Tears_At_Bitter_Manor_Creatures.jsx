
export const Tears_At_Bitter_ManorCreatures = {
  "Abandoned One": {
    source: "Tears At Bitter Manor",
    creatureType: "undead",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 5,
    hdVal: 8,
    cr: 4,
    racialFeatures: [
      "Blindsense 60 ft.",
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 16,
      dex: 14,
      con: "-",
      int: 10,
      wis: 13,
      cha: 17
    },
    feats: [
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Iron Will",
        type: "General"
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
      }
    ],
    defense: {
      naturalArmor: 5
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any forest or swamp",
    visualDescription: "This corpse of a soldier is twisted and ghoulish, its old-fashioned clothes are caked in mud, and its is expression lost and forlorn.",
    description: "Abandoned ones are the vengeful remains of lost soldiers from the Taldan Armies of Exploration- soldiers who were left behind in the wild places of the world and forgotten as their armies moved on or retreated. Tethered to their own corpses by the fury of their perceived abandonment, abandoned ones seek to share their torment with any mortals they encounter. An abandoned one resembles its living self, but its features are drawn and its skin leathery. Abandoned ones approach travelers in the darkness, magically disguised as lost soldiers or obliging guides, then attempt to draw victims off alone and kill them before their companions remember them.",
    organization: "solitary or pair",
    languages: "Common",
    spellLikeAbilities: [
      {
        name: "alter self",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "selective invisibility",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "zone of silence",
        casterLevel: 5,
        timesPerDay: 3
      }
    ],
    skills: {
      Bluff: {
        ranks: 5
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
      "curse of oblivion": {
        type: "Su",
        text: "Three times per day as a standard action, an abandoned one can cause one creature within 60 feet to disappear (Will DC 15 negates). Living creatures treat the victim as invisible and can't hear its voice. This is a curse effect and lasts for 12 hours or until the abandoned one is destroyed, whichever comes first. Only creatures that are within 100 feet of the target when the abandoned one uses this ability are unable to see and hear the target, and they remain unable to do so even if they go outside of this range. The target remains invisible for the entire duration, even if it attacks or takes other actions that would normally cause an invisible creature to become visible. It can speak and cast spells as normal, but only the abandoned one can hear its vocalizations. The target remains tangible, and can be detected by scent, touch, or the sound of its movement. The save DC is Charisma-based."
      },
      "forgotten friend": {
        type: "Su",
        text: "When an abandoned one successfully uses its curse of oblivion, any creature within 100 feet of the cursed creature that has prior knowledge of it must succeed at a DC 15 Will saving throw or lose all memory of the target's existence for the duration of that ability's effect, and ignore or explain away all evidence of the target's existence. Whether or not it succeeds at the save, a creature can only be affected by this ability once per day. This is a mind-affecting compulsion effect. The save DC is Charisma-based. Selective Invisibility (Sp) This ability functions as invisibility (CL 5th), but doesn't end when the abandoned one attacks a creature. Instead, any creature the abandoned one attacks can see through the abandoned one's invisibility for 1 hour."
      }
    }
  },

  Caliban: {
    source: "Tears At Bitter Manor",
    creatureType: "monstrous humanoid",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 4,
    hdVal: 10,
    cr: 2,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30,
      swim: 20
    },
    abilities: {
      str: 13,
      dex: 15,
      con: 10,
      int: 10,
      wis: 8,
      cha: 11
    },
    feats: [
      {
        name: "Athletic",
        type: "General"
      },
      {
        name: "Nimble Moves",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Handaxe",
        name: "Handaxe",
        damage: "1d6"
      },
      {
        weapon: "Claw",
        name: "2 Claw",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "temperate and warm forests and marshes",
    visualDescription: "This scaly, pale-furred monstrosity has bulging muscles, a short muzzle, and two small horns that erupt over its sloping brow.",
    description: "While an individual hag who has coupled with a human can only hope to birth a changeling (Pathfinder RPG Bestiary 4 29), hag covens prove far more versatile in spawning monstrous progeny. The hags in such covens occasionally use their combined witchcraft to supernaturally create abominable male children-brutish monsters born of foul sanies and unholy ablutions that are stewed for days and then allowed to ferment into living creatures. These monsters go by many names among the hags who \"birth\" them, but among civilized races they are known by just one word: caliban. Calibans are free-willed but invariably inherit much of the vileness of their monstrous parents. Unlike changelings, calibans are usually raised among hags rather than in human settlements, since most societies would find a caliban's form too repulsive for any purpose other than obliteration. Thus calibans learn from an early age to trust only their mothers and to revile anyone else. Those calibans who for whatever reason find themselves apart from their hag mothers are the most likely to shed their evil ways and forge a path of their own, but such individuals are few and far between. Just as changelings are always female, calibans are always male, and since they are the result of hags' foul magics it is impossible for them to reproduce. The average caliban is 7 feel tall and weighs about 260 pounds.",
    organization: "solitary or brotherhood (2-6)",
    languages: "Common",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 4
      },
      Climb: {
        ranks: 4
      },
      Intimidate: {
        ranks: 2
      },
      Perception: {
        ranks: 4
      },
      Survival: {
        ranks: 2
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      "share deformity": {
        type: "Su",
        text: "Once per day as a standard action, a caliban can make a melee touch attack against a humanoid creature. If it hits, the opponent must succeed at a DC 12 Fortitude save or have its form warped horribly. An affected creature takes 4 points of ability damage to Strength, Dexterity, or Constitution (caliban's choice). Until this ability damage is healed, the caliban gains a +4 bonus to that same ability score. This ability damage heals automatically after 24 hours. A creature can't be affected by more than one instance of this ability at a time. This is a curse effect, and the save DC is Charisma-based."
      },
      "unsettling scream": {
        type: "Ex",
        text: "As a standard action, a caliban can wail horribly. All non-caliban creatures within 60 feet that can hear must succeed at a DC 12 Will save or be deafened for 1 round and shaken for 1 minute. A creature affected by this ability is immune to the unsettling scream of the same caliban for 24 hours, regardless of whether its save is successful. This is a sonic fear effect, and the save DC is Charisma-based."
      }
    }
  },

  "Deadfall Dweller": {
    source: "Tears At Bitter Manor",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 6,
    hdVal: 10,
    cr: 5,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30,
      climb: 10
    },
    abilities: {
      str: 21,
      dex: 13,
      con: 16,
      int: 5,
      wis: 12,
      cha: 10
    },
    feats: [
      {
        name: "Improved Initiative",
        type: "Combat"
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
        specialAbility: "poison",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Limb",
        name: "2 Limbs",
        damage: "1d4"
      },
      {
        weapon: "Spittle",
        name: "Spittle",
        specialAbility: "entrap",
        damage: "1d6"
      }
    ],
    immunities: [
      "Immune to acid"
    ],
    defense: {
      naturalArmor: 8
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "temperate forests and swamps",
    visualDescription: "This creature resembles a fallen tree trunk that walks upon dozens of tiny, barbed branches and shambles like a spider.",
    description: "Deadfall dwellers are dangerous ambush predators most commonly encountered in the old forests and forgotten marshes of eastern Avistan. They make their homes among fallen stands of trees, where they take advantage of a unique form of camouflage. Hungry deadfall dwellers fold their many sticklike legs under themselves, collapsing against large tree trunks or simply lying on the ground. When a warm-blooded creature happens by, a deadfall dweller straightens its legs to pursue, and bellows out a spray of acidic mucus that paralyzes the victim in its tracks. The beast then advances to attack with its poisonous bite and sharp, scraping appendages. Deadfall dwellers reproduce by immobilizing prey with repeated applications of acidic spray, then implanting a clutch of eggs within the paralyzed host. The larval dwellers keep their host immobilized while they absorb moisture from its body. After the dwellers grow in size, they emerge from the husk of their host, whose flesh by that point resembles the shriveled bark of a dead tree. Most deadfall dwellers have a mottled green-brown carapace, the better to fit into their typical surroundings. A few have been reported in colder climates, with white-gray exoskeletons and freezing spittle. An average deadfall dweller stretches 11 feet long, stands 6 feet tall, and weighs 600 pounds.",
    organization: "solitary, brood (2-5), or ruin (6-12)",
    languages: "Sylvan (can't speak)",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 1
      },
      Perception: {
        ranks: 3
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
      entrap: {
        universalMonsterAbility: "Entrap",
        hardness: "hardness 3",
        duration: "1d4 rounds",
        saveDC: 10,
        hp: "hp 6"
      },
      implant: {
        type: "Ex",
        text: "A deadfall dweller can inject 1d3 larvae into a helpless creature as a full-round action. Excretions from these larvae have a paralyzing effect, leaving the host helpless until the larvae mature into young deadfall dwellers that erupt from the host's body, killing it. Each day, an impregnated host must attempt a DC 16 Fortitude save. If the host succeeds at the saving throw, it is no longer helpless, but is still impregnated. If it fails, it takes 1 point of Constitution drain and remains helpless for another day. All of the larvae in an impregnated creature can be destroyed with a remove disease spell. Alternatively, a creature can take 10 minutes to attempt a DC 20 Heal check to remove a single larva. This check can be attempted multiple times, but each attempt deals 1d6 points of damage to the host. The save DC is Constitution-based."
      },
      spittle: {
        type: "Ex",
        text: "As a swift action, a deadfall dweller can emit a stream of corrosive spittle at one target within 30 feet. On a successful attack, the target takes 1d6 points of acid damage, and must save to avoid being entrapped by the solidifying mucus."
      },
      freeze: {
        universalMonsterAbility: "Freeze",
        parenthetical: ""
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Bite-injury; save Fort DC 16; frequency 1/round for 6 rounds; effect 1d3 Dexterity damage; cure 1 save.",
        saveDC: 10
      }
    },
    resistances: [
      "vulnerable to electricity"
    ]
  },

  Delgeth: {
    source: "Tears At Bitter Manor",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 8,
    hdVal: 10,
    cr: 6,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 50
    },
    abilities: {
      str: 19,
      dex: 15,
      con: 16,
      int: 4,
      wis: 13,
      cha: 14
    },
    feats: [
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Run",
        type: "General"
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
        weapon: "Gore",
        name: "Gore",
        damage: "1d6",
        bonuses: [
          {
            source: "inherent",
            value: "1d6",
            appliesTo: "damageType",
            damageType: "fire"
          }
        ],
        type: "primary"
      },
      {
        weapon: "Hoof",
        name: "2 Hooves",
        damage: "1d4",
        bonuses: [
          {
            source: "inherent",
            value: "1d6",
            appliesTo: "damageType",
            damageType: "fire"
          }
        ],
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to fire"
    ],
    defense: {
      naturalArmor: 6
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "temperate forests",
    visualDescription: "The impressive rack of antlers on this adult elk appears scorched and charred, as do the beast's legs near its blackened hooves.",
    description: "The delgeth is a unique breed of ungulate native to magical forests and places where the line between the natural and the supernatural is blurred. Delgeths' soaring core body temperature manifests in the elklike creatures' flaming hooves and smoldering extremities, both of which the beasts use to defend themselves and mark their territory during mating season. Delgeths are unpredictable creatures, and are equally as likely to run from predators as they are to stand their ground and face off against aggressors. Either way, a delgeth is sure to leave a fiery reminder of its passing, the beast's flaming hooves blazing a telltale trail through the brush. Tribal cultures and scholars of the supernatural alike hold the majestic delgeth in awe. Though it has an innate connection to flame, the delgeth lives in balance with the natural world, allowing natural fires to purge the forest of excess deadwood. A typical delgeth stands 4 feet tall at the shoulder and weighs 200 pounds.",
    organization: "solitary, pair, or family (3-5)",
    languages: "Sylvan (can't speak)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 4
      },
      Stealth: {
        ranks: 4
      }
    },
    special: {
      "fight with fire": {
        type: "Su",
        text: "A delgeth can strike at the ground with its flaming hooves as a swift action, causing blazing sparks to appear in a square of the delgeth's choosing within 30 feet. A creature in that square must succeed at a DC 15 Reflex save or catch fire (Pathfinder RPG Core Rulebook 444). The save DC is Charisma-based."
      },
      "flight of flames": {
        type: "Su",
        text: "A delgeth can use its smoldering hooves to ignite the ground and brush when it runs or withdraws, creating a blazing trail of fire behind it. The fire fills every square the delgeth moves through during its run or withdraw action. When the fire appears and on each of the delgeth's turns, the flames deal 2d6 points of fire damage to each creature in one of the squares of fire and 2d4 points of fire damage to each creature within 5 feet of such a square but not inside one. The flames gutter out after 3 rounds, but can be extinguished before then by any means that would extinguish normal nonmagical fires of their size. The flames can ignite flammable debris, but in normal forest conditions they rarely spread."
      }
    }
  },

  "Embalming Bear": {
    source: "Tears At Bitter Manor",
    creatureType: "construct",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 8,
    hdVal: 10,
    cr: 7,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 22,
      dex: 8,
      con: "-",
      int: "-",
      wis: 11,
      cha: 1
    },
    feats: [],
    attacks: [
      {
        weapon: "Claw",
        name: "2 Claws",
        specialAbility: "grab, poison",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "construct traits"
    ],
    defense: {
      naturalArmor: 12
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "This decaying taxidermic bear is held together with thick stitches, metal armor plates, and a pungent chemical fluid.",
    description: "Though embalming bears could easily be mistaken for beasts brought back from the dead, these strange constructs are actually taxidermic bear corpses that have been modified so they can walk once again. Embalming bears employed as guardians are designed to deliver dangerous doses of embalming fluid with strikes from their powerful claws. Few of these creatures exist, and those that do are found where alchemy is widely practiced or where mummification of pets and guardians is a part of funereal tradition. Embalming bears are often created to guard over precious treasures, but some serve less significant functions, and are merely trophies preserved by taxidermists and animated to decorate macabre halls or guard remote locations. An embalming bear is different from other animated objects in that the process of its creation includes a step that turns the chemicals that preserve the taxidermic animal into a weapon. This especially powerful embalming fluid is a deadly poison when injected into the injuries of living enemies. The main purpose of the liquid, though, is to provide the bear with a semifluid mobility normally not afforded to animated objects. Many embalming bears (such as the one described here) have armor plates bolted onto their bodies, typically disguised as pieces of ceremonial armor to make the creature look as if it had been used in battle. Though this is often just an affectation, some embalming bears actually are honored creatures that died in battle and were then turned into eternal servants. A typical embalming bear is 7 feet tall and weighs 300 pounds. Construction The bear carcass, taxidermy process, and armor for an embalming bear cost 900 gp in raw materials alone. In addition, the construct must be injected with 1,200 gp worth of special embalming fluid. EMBALMING BEAR CL 8th; Price 18,500 gp Construction Requirements Craft Construct, animate objects, minor creation, creator must be caster level 8th; Skill Craft (taxidermy) DC 18; Cost 10,300 gp",
    organization: "solitary or pair",
    spellLikeAbilities: [],
    skills: {},
    special: {
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "1d8+6"
      },
      hardness: {
        universalMonsterAbility: "Hardness",
        value: 5
      },
      grab: {
        universalMonsterAbility: "Grab"
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Potent embalming fluid: Claw-injury; save Fort DC 17; frequency 1/round for 6 rounds; effect 1d2 Dex and 1d2 Con; cure 2 consecutive saves.",
        saveDC: null
      }
    }
  },

  "Ephemeral Echo": {
    source: "Tears At Bitter Manor",
    creatureType: "undead",
    subTypes: [
      "incorporeal"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Medium",
    hd: 8,
    hdVal: 8,
    cr: 7,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30,
      maneuverability: "Perfect",
      fly: 30
    },
    abilities: {
      "str-": "(22",
      dex: 16,
      con: "-",
      int: 11,
      wis: 13,
      cha: 22
    },
    feats: [
      {
        name: "Dodge",
        type: "Combat"
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
        name: "Weapon Focus",
        type: "Combat",
        value: "Slam",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Incorporeal touch",
        name: "Incorporeal touch",
        damage: "1d6",
        bonuses: [
          {
            source: "inherent",
            value: "1d4",
            appliesTo: "damageType",
            damageType: "charisma damage"
          }
        ]
      },
      {
        weapon: "Slam",
        name: "2 Slams",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "This ghostly image of a sad-eyed young woman hovers suspended in the air. Her face never loses its mournful expression.",
    description: "Miserable remnants of souls who died in despair, ephemeral echoes are restless spirits who felt powerless or heartbroken at the moment of their death. They roam the Material Plane, lingering near a fetter they recognize as meaningful to them in life or death. Ephemeral echoes gain power and become corporeal as they sap the strength of personality from their victims, until their incorporeal menace becomes a dangerously tangible threat. Ephemeral echoes exhibit a combination of jealousy and hatred for the living, whom they see as unfairly blessed with the continuation of their lives and potential. They generally attack those who demonstrate a particularly vibrant personality. Upon borrowing their victims' will to take material shape, ephemeral echoes savagely attack the living in a flurry of brutal blows and violent sobs.",
    organization: "solitary",
    languages: "Common",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 6
      },
      Intimidate: {
        ranks: 5
      },
      Perception: {
        ranks: 8
      },
      "Sense Motive": {
        ranks: 6
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
      "bewitching gaze": {
        type: "Su",
        text: "1 point of Charisma drain, 30 feet, Fortitude DC 20 negates. The save DC is Charisma-based."
      },
      "corporeal form": {
        type: "Su",
        text: "Whenever an ephemeral echo deals Charisma damage to a creature, it absorbs a portion of its victim's anguish and becomes more real. It loses the incorporeal subtype and gains a Strength score equal to its Charisma score. Its deflection bonus to AC becomes a natural armor bonus, and its incorporeal touch attack is replaced with two slam attacks. The ephemeral echo loses its fly speed and gains a land speed of 30 feet. These changes last for 1d4 rounds or until the ephemeral echo takes any Charisma damage, whichever comes first. The third time in a day an ephemeral echo deals Charisma damage, its corporeal form lasts for 24 hours or until it takes Charisma damage, whichever comes first."
      },
      "stolen power": {
        type: "Su",
        text: "Whenever an ephemeral echo deals Charisma damage or drain, it gains a +2 profane bonus on attack rolls, damage rolls, saving throws, skill checks, and ability checks until the end of its next turn. The echo also gains 5 temporary hit points that last for 1 hour."
      },
      "channel resistance": {
        universalMonsterAbility: "Channel Resistance",
        bonus: 4
      },
      rejuvenation: {
        type: "Su",
        text: "Each ephemeral echo is tied to a unique fetter-some event, location, or object that reminds it of the sadness of its former life. Resolving this fetter (by consecrating the location or destroying the item, for example) destroys the ephemeral echo permanently. If the echo is physically injured or killed but its fetter remains unresolved, the echo rejuvenates fully in 1d10 days."
      }
    }
  },

  Leechroot: {
    source: "Tears At Bitter Manor",
    creatureType: "undead",
    subTypes: [],
    alignments: [
      "Neutral Evil"
    ],
    size: "Large",
    hd: 5,
    hdVal: 8,
    cr: 4,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Tremorsense 30 ft."
    ],
    speed: {
      base: 5,
      burrow: 5
    },
    abilities: {
      str: 20,
      dex: 8,
      con: "-",
      int: "-",
      wis: 17,
      cha: 15
    },
    feats: [],
    attacks: [
      {
        weapon: "Root",
        name: "2 Roots",
        specialAbility: "bleed, grab",
        damage: "1d6"
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "slashing"
      },
      naturalArmor: 10
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any forest",
    visualDescription: "This tangle of rotten, lifeless roots resembles a mess of bodily organs, its visceral tendrils grasping for sustenance.",
    description: "The brutal Goblinblood Wars created the first leechroot, which emerged from the remains of plants drowned in the blood-drenched soils of Chitterwood. A chaotic intertwining of rotten roots, this monstrosity quickly spread its curse by soaking other dead plants in its sap. Moving underground, leechroots dispersed to forests all over Avistan, reaching as far as the Shudderwood in Ustalav. A leechroot is driven solely by its thirst for blood. It hides below the earth while waiting for prey and snatches victims with its razor-sharp tentacles, feeding directly from their wounds. The absorbed blood mutates into a thick red sap that runs through the leechroot's body. An adult leechroot averages 12 feet across (not including its root appendages) and weighs 700 pounds.",
    organization: "solitary",
    spellLikeAbilities: [],
    skills: {
      Stealth: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 16
          }
        ]
      }
    },
    special: {
      bleed: {
        universalMonsterAbility: "Bleed",
        damage: 2
      },
      "bloody sap": {
        type: "Su",
        text: "The viscous resin that exudes from a leechroot's tentacles is infused with negative energy, preventing both natural and magical healing. The DC of any Heal check to stop the bleeding caused by a leechroot's attacks is increased by 2. Casting a cure spell on a creature bleeding because of a leechroot's attacks requires a successful caster level check (DC 15 + the spell's level) or the spell has no effect on the bleeding creature."
      },
      "drag under": {
        type: "Ex",
        text: "As part of an action to maintain a grapple, a leechroot can move the grappled creature up to 5 feet (within the leechroot's reach) and bury it partway into the ground. The buried creature is pinned and can't receive help to break free from the grapple. A buried opponent that escapes the grapple remains pinned unless it spends a move action to dig itself free and it succeeds at a DC 10 Strength check."
      },
      "earth barrier": {
        type: "Ex",
        text: "A leechroot burrowing 5 feet below the surface is partially visible, can make attacks using its normal reach, and gains concealment and partial cover. It can be uprooted with a successful drag maneuver. It can burrow back under the earth as a move action that provokes attacks of opportunity."
      },
      bloodthirst: {
        type: "Su",
        text: "A leechroot can absorb blood directly from its victims' cuts. The leechroot gains fast healing equal to the number of creatures with the bleed condition it is grappling (if any)."
      },
      "channel resistance": {
        universalMonsterAbility: "Channel Resistance",
        bonus: 2
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  Tizheruk: {
    source: "Tears At Bitter Manor",
    creatureType: "magical beast",
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 5,
    hdVal: 10,
    cr: 5,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 10,
      swim: 40
    },
    abilities: {
      str: 24,
      dex: 17,
      con: 21,
      int: 2,
      wis: 13,
      cha: 6
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
      },
      {
        weapon: "Tongue",
        name: "Tongue",
        specialAbility: "Tongue"
      }
    ],
    defense: {
      naturalArmor: 6
    },
    space: "10 ft.",
    reach: "10 ft. (20 ft. with tongue)",
    environment: "temperate rivers and marshes",
    visualDescription: "This serpentine beast has transparent, scaly skin that reveals the creature's murky red-and-brown organs through its flesh.",
    description: "The vicious tizheruk is a foul freshwater predator that wreaks havoc in the lakes and rivers it inhabits. To make matters worse, tizheruks also frequently travel far inland via smaller streams where animals and humanoids might think themselves safer. When a tizheruk swims upstream in such waters, it naturally compresses its muscles and organs, enabling it to remain in water less than a foot deep. It explodes to its full size as soon as it attacks, swallowing smaller prey or dragging larger creatures into the water before swimming away with its meal. Though tizheruks mostly subsist on aquatic prey, they supplement their diets with creatures on the shore, particularly sizeable mammals such as deer or wild boar. To capture such creatures, a tizheruk extends its tightly coiled, whiplike tongue to snare one of the prey's legs, then retracts the appendage to pull the creature to its mouth. A tizheruk's skin is nearly transparent, granting it a sort of natural camouflage beneath the water because its rust-colored organs and tissue can easily be mistaken for the floor of a creek or stream. After gorging itself on fish or on land animals that wander near the shore, the tizheruk compresses itself on the bottom of a lake or river while it slowly digests its prey. An adult tizheruk is 8 feet long and weighs 180 pounds, though a tizheruk that has just fed may weigh up to two or three times as much.",
    organization: "solitary or pair",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 3
      },
      Stealth: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      pull: {
        universalMonsterAbility: "Pull",
        attack: "tongue",
        distance: "15 ft."
      },
      "swallow whole": {
        universalMonsterAbility: "Swallow Whole",
        damage: "1d6 acid damage",
        hp: "8 hp",
        AC: "AC 14"
      },
      compression: {
        universalMonsterAbility: "Compression"
      },
      "see-through skin": {
        type: "Ex",
        text: "Because so much of a tizheruk's body is transparent, a creature swallowed whole by it has line of sight to creatures outside the creature, and creatures outside the tizheruk can see anyone inside."
      },
      grab: {
        universalMonsterAbility: "Grab"
      },
      tongue: {
        type: "Ex",
        text: "A tizheruk's tongue is a primary attack with a reach equal to double the tizheruk's normal reach (20 feet for a Large tizheruk). A tizheruk's tongue deals no damage on a hit, but can be used to grab a creature and pull it closer. A tizheruk doesn't gain the grappled condition while using its tongue in this manner."
      }
    }
  },

};
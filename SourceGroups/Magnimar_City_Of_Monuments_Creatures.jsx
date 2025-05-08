
export const Magnimar_City_Of_MonumentsCreatures = {
  "Angelic Guardian": {
    source: "Magnimar City Of Monuments",
    creatureType: "construct",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 6,
    hdVal: 10,
    cr: 5,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30,
      maneuverability: "Average",
      fly: 60
    },
    abilities: {
      str: 18,
      dex: 15,
      con: "-",
      int: "-",
      wis: 11,
      cha: 1
    },
    feats: [],
    attacks: [
      {
        weapon: "Slam",
        name: "2 Slams",
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
    immunities: [
      "construct traits",
      "Immune to fire"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "adamantine"
      },
      naturalArmor: 6
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any urban (Magnimar)",
    visualDescription: "This brass statue is sculpted in the shape of an angel with metal wings, and its halo takes the form of a burning crown.",
    description: "Those toiling in the Golemworks of Magnimar provide myriad goods to their buyers, but perhaps none are so popular as the highly sought-after angelic guardian. Nobles, entrepreneurs, and wealthy paranoiacs alike purchase angelic guardians to serve as their personal protectors. Though inspired by Varisian depictions of angelic beings, these metallic beings are not truly from another plane, but are instead merely stylized automatons designed to watch over and protect their masters. They can be found throughout much of the Summit, where they line aristocrats' gardens and stand stoically for days or even weeks without moving, their burning halos the only feature suggestive of animation. Angelic guardians can be forged from various substances, though their bodies are typically made from brass and their wings from steel. Angelic guardians stand nearly 7 feet tall and weigh 2,000 pounds. Construction An angelic guardian is made from 2,000 pounds of metal that is treated with unguents and ointments worth 2,000 gp. Angelic Guardian CL 9th; Price 22,000 gp CONSTRUCTION Requirements Craft Construct, mage armor, scorching ray, creator must be caster level 10th; Skill Craft (sculpture) or Knowledge (engineering) DC 15; Cost 12,000 gp",
    organization: "solitary, assembly (2-4), or choir (5-8)",
    languages: "Common (cannot speak)",
    spellLikeAbilities: [],
    skills: {},
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "60-ft. line",
        damage: "usable every 1d4 rounds"
      },
      "metallic feathers": {
        type: "Ex",
        text: "An angelic guardian's wings are honed to razor-sharp edges, and attacks with them deal slashing damage instead of bludgeoning damage."
      },
      "deflective wings": {
        type: "Ex",
        text: "As a standard action, an angelic guardian can spread its wings and protect a single adjacent creature from the next ranged attack. The next time the protected creature would normally be hit with an attack from a ranged attack, the attack is instead deflected and the protected creature takes no damage. An angelic guardian can only deflect one ranged attack per turn in this way. This effect lasts until the angelic guardian's next turn or until the protected creature leaves its square, whichever comes first."
      }
    }
  },

  "Swamp Barracuda": {
    source: "Magnimar City Of Monuments",
    creatureType: "animal",
    fish: true,
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 4,
    hdVal: 8,
    cr: 2,
    racialFeatures: [
      "Keen Scent",
      "Low-Light Vision"
    ],
    speed: {
      base: 10,
      swim: 60
    },
    abilities: {
      str: 16,
      dex: 14,
      con: 11,
      int: 1,
      wis: 12,
      cha: 3
    },
    feats: [
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
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    defense: {
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "temperate or warm marshes",
    visualDescription: "This elongated, olive fish has a thick set of jaws with a prominent underbite, and its body is covered in a layer of thick algae.",
    description: "These carnivorous fish have long, writhing bodies and pointed heads. Their overdeveloped pectoral fins and widely separated dorsal fins make them swift swimmers, and their powerful jaws promise a quick and brutal death for any prey they might catch. Their tails serve as potent secondary weapons, which they use to bludgeon particularly hardy opponents before tearing them limb from limb. Swamp barracuda thrive in the tropical waters surrounding the continent of Garund, and are particularly prominent throughout the Sodden Lands and Mwangi Expanse. To the north, they can occasionally be found in the Mushfens and the Varisian Gulf in the warmer months, heading south when winter cools the waters. While they normally hunt alone or in small groups, during their migratory season, massive schools of swamp barracuda can be spotted traveling down the western Avistani coastline, where they feed on small whales as well as terrestrial creatures that wander too close to their waters. While swamp barracuda are most often found in the wild, particularly daring hunters sometimes capture them to serve either as food or pets. Swamp barracuda can survive for a long time outside their preferred climates, but often grow lax and weak if their owners fail to feed them properly or don't take care of their holding tank. Magnimar's infamous Sczarni gang, the Gallowed, uses swamp barracuda as a coercion technique against wealthy patsies as well as borrowers who fail to make a payment on time (an act made difficult by the exorbitant interest rate the Gallowed put on any loans they give out). Called the Fish Tank by those who know of it, the saltwater aquarium that houses Jaster Frallino's precious barracuda is stored in a dilapidated blue caravan wagon owned by the Gallowed, and more than one failed business partner has lost an eye, toe, or hand to \"the Boss's Fish.\" It is also known that the Sczarni boss keeps a collection of rusty keys at the bottom of the Fish Tank, though the purpose of these mysterious items is a secret held by Frallino alone. An average swamp barracuda is about 6 feet long and weighs over 60 pounds, though specimens up to 12 feet long have been spotted in particularly remote locations.",
    organization: "solitary, pack (2-5), or school (6-11)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 2
      },
      Stealth: {
        ranks: 1,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      amphibious: {
        universalMonsterAbility: "Amphibious"
      }
    }
  },

  Vydrarch: {
    source: "Magnimar City Of Monuments",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Gargantuan",
    hd: 19,
    hdVal: 10,
    cr: 14,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 20,
      swim: 60
    },
    abilities: {
      str: 30,
      dex: 17,
      con: 20,
      int: 7,
      wis: 22,
      cha: 15
    },
    feats: [
      {
        name: "Awesome Blow",
        type: "Combat"
      },
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Improved Bull Rush",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
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
        name: "Staggering Critical",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
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
        name: "2 Bites",
        specialAbility: "grab",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        specialAbility: "poison spines",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to poison, sleep"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "magic"
      },
      naturalArmor: 20
    },
    space: "20 ft.",
    reach: "20 ft. (30 ft. with bite)",
    environment: "temperate oceans",
    visualDescription: "Seeping spines cover the inky scales of this long, sinuous beast, its twin serpent heads writhing at the ends of its swaying necks.",
    description: "The terrifying creature known as the vydrarch is most well known among Magnimarians from the famous tales of the legendary paladin Alcaydian Indros battling the beast on the shores of what would become Magnimar. The vydrarch was originally thought to be an entirely unique creature, but in recent years, reports from sailors journeying across the Steaming Sea and the remains of wrecked ships washing ashore have hinted at the existence of other such beasts. Vydrarchs live solely for the thrill of destruction and chaos, but what elder force could have created such a monster is unknown. Their dual heads act in tandem to destroy vessels and devour cargo, but survivors of such attacks claim that the heads can act independently of one another if need be, occasionally talking or even arguing among themselves. A vydrarch is 40 feet long from tail to head and weighs 10 tons.",
    organization: "solitary",
    languages: "Aquan",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 14
      },
      Swim: {
        ranks: 5
      }
    },
    special: {
      capsize: {
        type: "Ex"
      },
      "swallow whole": {
        universalMonsterAbility: "Swallow Whole",
        damage: "4d6+15 bludgeoning damage",
        hp: "19 hp",
        AC: "AC 20"
      },
      "veil of fog": {
        type: "Su",
        text: "As a standard action, a vydrarch can produce a bank of fog in a 100-foot spread centered on itself. This effect is otherwise identical that created by a fog cloud spell."
      },
      amphibious: {
        universalMonsterAbility: "Amphibious"
      },
      grab: {
        universalMonsterAbility: "Grab"
      },
      poison: {
        universalMonsterAbility: "Poison",
        name: "Vydrarch poison",
        type: "Ex",
        text: "Vydrarch poison: Spine-injury; save Fort DC 24; frequency 1/round for 4 rounds; effect 1d2 Con, 1d2 Wis; cure 2 consecutive saves. The save DC is Constitution-based.",
        saveDC: 10
      }
    }
  },

  Yamah: {
    source: "Magnimar City Of Monuments",
    creatureType: "outsider",
    subTypes: [
      "azata",
      "chaotic",
      "extraplanar",
      "good"
    ],
    alignments: [
      "Chaotic Good"
    ],
    size: "Medium",
    hd: 6,
    hdVal: 10,
    cr: 5,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Detect Evil",
      "Detect Magic",
      "Low-Light Vision"
    ],
    speed: {
      base: 30,
      maneuverability: "Perfect",
      fly: 100
    },
    abilities: {
      str: 17,
      dex: 20,
      con: 14,
      int: 13,
      wis: 15,
      cha: 20
    },
    feats: [
      {
        name: "Point-Blank Shot",
        type: "Combat"
      },
      {
        name: "Precise Shot",
        type: "Combat"
      },
      {
        name: "Weapon Finesse",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Starknife",
        enchantments: [
          {
            name: "Enhancement Bonus +1",
            source: "inherent"
          }
        ],
        name: "Starknife",
        damage: "1d4"
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "cold iron or evil"
      },
      naturalArmor: 4
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Elysium)",
    visualDescription: "This blue-skinned celestial has enormous butterf ly wings, and its black hair sparkles like a starlit sky.",
    description: "Yamahs travel the planes promoting the ideals of freedom and fairness, using their unique talents to rob evildoers of their magic and turn it into a weapon for good. Yamahs harbor ill will toward anyone who would use magic for cruel or evil purposes, especially necromancers and creatures that use magic to trap souls and pervert life. Though yamahs often bear a stern countenance, they nonetheless enjoy lighthearted pranks and cheery jokes when appropriate. The white markings that cover yamahs' bodies may at first appear to be tattoos, but are in fact natural sigils that are unique to each individual. The average yamah stands just over 6 feet tall and weighs 140 pounds. Because of the presence of the mystery cults in Magnimar and the open worship of empyreal lords-especially Ashava-yamahs can often be seen in this city during lunar eclipses and other significant celestial events. Legends among these mystery cults claim that yamahs sometimes accompany good spellcasters on crusades against otherworldly fiends, though every story inevitably ends with the yamah mysteriously departing after the deed is done, abandoning its mortal partner without a word.",
    organization: "solitary, pair, or crusade (3-10)",
    languages: "Celestial, Draconic, Infernal; truespeech",
    spellLikeAbilities: [
      {
        name: "detect evil",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "detect magic",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "cure moderate wounds",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "invisibility",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "charm person",
        casterLevel: 6,
        timesPerDay: 1
      },
      {
        name: "remove paralysis",
        casterLevel: 6,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 9
      },
      Bluff: {
        ranks: 3
      },
      Diplomacy: {
        ranks: 9
      },
      "Escape Artist": {
        ranks: 6
      },
      Fly: {
        ranks: 9
      },
      "Knowledge (planes)": {
        ranks: 6
      },
      Perception: {
        ranks: 6
      },
      "Sense Motive": {
        ranks: 3
      },
      Stealth: {
        ranks: 3
      }
    },
    special: {
      "steal magic": {
        type: "Su",
        text: "As a standard action, a yamah can make a touch attack against a creature under the effect of a spell or spells and attempt to dispel the effect as per the dispel magic spell (CL 6th). If the attempt is successful, the yamah absorbs the magical energy and converts it into a bolt of force. A yamah can use a force bolt to make a ranged touch attack that deals 1d6 points of force damage for every spell level of the effect dispelled by the yamah (for example, if a yamah dispels a 2nd-level spell with its steal magic ability, the resulting force bolt deals 2d6 points of force damage; 0-level spells count as being 1st-level for the purpose of this ability). These force bolts have a range of 100 feet with no range increment. A yamah can only carry a number of force bolts equal to its Charisma bonus (5 for most yamahs), and any force bolts not used within 24 hours of obtaining them disappear and are wasted."
      },
      "returning weapons": {
        type: "Su",
        text: "Any throwing weapon wielded by a yamah gains the returning weapon special ability as long as the yamah wields it."
      }
    }
  },

};
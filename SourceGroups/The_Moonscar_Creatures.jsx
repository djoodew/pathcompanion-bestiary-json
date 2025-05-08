
export const The_MoonscarCreatures = {
  Somalcygot: {
    source: "The Moonscar",
    creatureType: "aberration",
    subTypes: [],
    alignments: [
      "Neutral Evil"
    ],
    size: "Large",
    hd: 14,
    hdVal: 8,
    cr: 12,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Tremorsense 60 ft."
    ],
    speed: {
      base: 40,
      burrow: 20
    },
    abilities: {
      str: 34,
      dex: 17,
      con: 28,
      int: 12,
      wis: 17,
      cha: 11
    },
    feats: [
      {
        name: "Cleave",
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
        name: "Lightning Reflexes",
        type: "General"
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
            value: "4d6",
            appliesTo: "damageType",
            damageType: "acid"
          }
        ],
        type: "primary"
      },
      {
        weapon: "Tentacle",
        name: "4 Tentacles",
        specialAbility: "grab",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to acid, cold"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "slashing"
      },
      naturalArmor: 14
    },
    space: "10 ft.",
    reach: "10 ft. (15 ft. with tentacles)",
    environment: "any terrestrial vacuum",
    visualDescription: "A pair of mandibles surrounds the vertical, tooth-filled maw of this giant, multi-eyed flatworm. Four long antennae stretch from its face, twitching and flailing rapidly. Along its spiny, chitinous body emerge four tentacles, grasping in all directions.",
    description: "Somalcygots are incredibly territorial; each claims roughly a mile-radius patch of desolate lunar surface as its chosen hunting ground, and only enters another's territory to mate. In order to preserve energy between meals, a somalcygot enters a trancelike hibernation during which it burrows in circles beneath the moon's surface within its territory with unthinking repetition. When it detects another creature nearby, the somalcygot awakens and enters a blood frenzy to capitalize on the rare meal, fighting relentlessly until the prey either is dead or escapes its territory. Only rarely do somalcygots pursue prey beyond the boundaries of their claimed hunting grounds, a behavior that serves both to preserve energy and to avoid needless conflict with other somalcygots that claim neighboring regions. A typical adult somalcygot is 16 feet long and weighs 1,500 pounds.",
    organization: "solitary, pairs, or clutch (3-6)",
    languages: "Aklo; telepathy 60 ft.",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 10
      },
      Climb: {
        ranks: 14
      },
      Intimidate: {
        ranks: 14
      },
      Perception: {
        ranks: 14
      },
      Stealth: {
        ranks: 14
      }
    },
    special: {
      "acid spray": {
        type: "Ex",
        text: "Every 1d4 rounds, a somalcygot can spit a 60-foot line of acid that deals 6d6 points of acid damage and an additional 3d6 points of acid damage the following round. A successful DC 26 Reflex save halves the initial damage and negates all ongoing damage. The save DC is Constitution-based."
      },
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "1d8+6"
      },
      "no breath": {
        universalMonsterAbility: "No Breath",
        text: ""
      },
      "resistant evolution": {
        type: "Su",
        text: "Somalcygots have evolved in the harsh, unforgiving vacuum of space and developed fortified resistances to the myriad threats found in their environment, granting them a +2 resistance bonus on all saving throws."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    },
    resistances: [
      "vulnerable to sonic"
    ]
  },

  "Runeslave Hill Giant": {
    legs: 2,
    arms: 2,
    source: "The Moonscar",
    creatureType: "humanoid",
    subTypes: [
      "giant"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Large",
    hd: 10,
    hdVal: 8,
    cr: 8,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 60
    },
    abilities: {
      str: 29,
      dex: 10,
      con: 19,
      int: 4,
      wis: 8,
      cha: 5
    },
    feats: [
      {
        name: "Diehard",
        type: "General"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Martial Weapon Proficiency",
        type: "Combat",
        value: "Greatclub",
        choiceSource: "Martial Weapon Proficiency"
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
        name: "Vital Strike",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Greatclub",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Greatclub",
        name: "Greatclub",
        damage: "1d10"
      },
      {
        weapon: "Slam",
        name: "2 Slams",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Rock",
        name: "Rock",
        damage: "1d8"
      }
    ],
    immunities: [
      "Immune to exhaustion, fatigue, fear"
    ],
    defense: {
      naturalArmor: 9
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any",
    visualDescription: "This lumbering giant has a strange, vacant expression, as well as a large glowing rune carved into its flesh.",
    description: "The ageless monuments and awesome cities of Thassilon rose upon the backs of countless slaves, but none bore the sin-poisoned civilization's burden more than the giants. Able to perform the work of dozens of human slaves, Thassilon's titanic servants-hill giants, stone giants, taiga giants, and others-crafted marvels nigh unparalleled in any era before or since, and shaped the face of what is now modern Varisia. Yet as viciously as the runelords worked their slaves and for all they demanded, the giant-crafted marvels were not enough. And thus, working the corrupt rune magic that was theirs alone, the runelords manufactured a damning curse and laid it over their most tireless and effective workers, and in so doing created a new breed of servant: the runeslave. Numerous severe-looking runes spark and flicker upon a runeslave's body, seemingly seared into the creature's flesh. One of the runes is larger and more prominent than the others-this is always one of the runes of Thassilonian magic. Although a runeslave's mind is dulled, its muscles bulge grotesquely, as if barely contained beneath a thin layer of skin, and such behemoths move with unnatural agility for creatures of their ponderous size. Note that while the runeslave template does make a giant more powerful (and thus increases its CR), few, if any giants would seek to gain a runeslave's powers. Despite the advantages the runeslave gains, what it loses in free will and longevity typically vastly outweigh the benefits. In combat, a runeslave is deadly and terrifying, but in life, the condition is rightly feared among giants as a devastating and debilitating curse. Creating a Runeslave \"Runeslave\" is an acquired template that can be added to any giant (referred to hereafter as the base creature). A runeslave uses all the base creature's statistics and special abilities except as noted here. CR: Same as the base creature +1. DEFENSIVE ABILITIES: A runeslave becomes immune to fear effects, exhaustion, and fatigue. In addition, all runeslaves gain the following additional defensive ability. Resist Pain (Ex): Runeslaves can continue to function even after taking great punishment. They are immune to nonlethal damage. Against effects that inflict pain (such as a symbol of pain spell), a runeslave gains a +4 bonus on all saving throws. WEAKNESSES: Runeslaves gain the following weakness. Arcane Decay (Su): The symbols etched upon a runeslave's body put great stress on its physical form, choking its mind and ultimately killing the giant in time. Each runeslave has a predominant Thassilonian rune associated with one school of magic inscribed on its body. Traditionally, this rune is of a school of magic directly opposed to the runelord the runeslave serves- all of the runeslaves encountered in this adventure bear the sign of wrath upon their bodies as a sort of brand of shame. The slow decay of a runeslave's mental faculties manifests as a gradual loss of life and sanity, represented by the accumulation of rune-shaped scars all over the body. The disease has no additional physical or mental effect until these magical runescars completely overwhelm their host, at which point the accumulated pain the giant has endured since becoming a runeslave is released in a fatal surge of unleashed suffering. All runeslaves are \"infected\" with this disease. Only limited wish, miracle, or wish can prevent or cure arcane decay, but in so doing removes the entire template, reverting the runeslave back to the base creature. Multiple successful Fortitude saves only delay the decay and do not cure the creature of the disease. Arcane Decay: Inherited-non-contagious; save Fortitude DC 15; frequency 1/week; effect gain one runescar; cure none (but see above). When a runeslave's number of runescars equals its Hit Dice, it dies. SPEED: A runeslave's base land speed is 20 feet faster than the base creature's. Other forms of movement, such as flying or swim speeds, are unaffected. SPECIAL ATTACKS: A runeslave gains the following special attack. Arcane Surge (Su): Once per day as a swift action, a runeslave can gain the benefits of the spell haste for 6 rounds. Using this ability forces the giant to make an additional Fortitude save against arcane decay, even if it has already made its weekly save to resist the disease. ABILITIES: Change from the base creature as follows: Str +4, Dex +2, Int -2, Wis -2, Cha -2. FEATS: Runeslaves gain Diehard and Toughness as bonus feats. The Runeslave Curse As the act of turning their giant servants into runeslaves swept across Thassilon, each of the seven runelords came to employ the corruptive magic in various ways. While in most of the runelords' holdings the giants merely continued to serve as expendable labor, in Bakrakhan, Runelord Alaznist incorporated runeslaves into her vast armies, using them as living siege engines. In Cyrusian, the domain of Pride, Runelord Xanderghul used the magic as a punishment upon any slave who garnered his fickle ire. While the magic used to create runeslaves resided almost exclusively in the hands of the runelords, the number of giant slaves they deemed would benefit from this ultimately fatal \"improvement\" far exceeded the rulers' ability to transform. Thus, a number of different methods of creating runeslaves were created, each originating in a separate domain but eventually spreading throughout the empire. ANCIENT RITE: In the Grand Sybaritum of Xin- Haruka, Runelord Krune grew weary of cursing filthy giant after filthy giant, and so devised a method to transform hundreds of his slaves at a time. Summoning whole legions of his giants before him, Krune called down the might of the rune goddess Lissala and cursed his slaves en masse, sending countless faithful slaves to their doom. MINDERHAL'S CURSE: Minderhal's worship was never more prevalent than during the height of the Thassilonian empire, and as such, fear of his displeasure was a motivating force among the giants of that era. Legend held that Minderhal himself was involved in the creation of the first runeslaves, and that in a fit of anger at his giant worshipers, he granted humans the secrets of creating runeslaves. Regardless of this legend's veracity, there have been several cases of particularly blasphemous giants spontaneously transforming into runeslaves, supposedly as punishment from their god. POISONING: In Edasseril, the domain of envy, the alchemists of Runelord Belimarius's vile and sprawling laboratories discovered a way to turn arcane decay into a toxin, allowing the disease to be delivered via poison. The poisoners never did find a way to cure the crippling madness caused by the poison-the toxin's high cost and the frustrating requirement of having to cure the giant's Wisdom drain before it could be put to work kept this poison from seeing greater use. Runeslave Poison: Poison-ingested; save Fort DC 20; frequency 1/round for 6 rounds; effect confusion for 1 round and 1d4 Wisdom drain (if this results in the giant's Wisdom being drained to 0, the giant immediately transforms into a runeslave); cure 3 consecutive saves; cost 10,000 gp. RUNESLAVE CAULDRON: Brought forth from Gastash, the domain of gluttony, these massive cauldrons were large enough to fit an adult stone giant and infused with necromantic energies. Any giant placed in a cauldron and then slain is immediately resurrected as a runeslave-see page 424 for further details on these sadistic magic items.",
    organization: "solitary, pair, or patrol (3-12)",
    languages: "Giant",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 2
      },
      Perception: {
        ranks: 8
      }
    },
    special: {
      "arcane surge": {
        type: "Ex"
      },
      "rock throwing": {
        universalMonsterAbility: "Rock Throwing",
        type: "Ex",
        range: "120 ft."
      },
      "resist pain": {
        type: "Ex"
      },
      "rock catching": {
        universalMonsterAbility: "Rock Catching"
      }
    }
  },

};

export const The_Infernal_SyndromeCreatures = {
  "Malbolgian Cerberi": {
    source: "The Infernal Syndrome",
    creatureType: "outsider",
    subTypes: [
      "evil",
      "extraplanar",
      "lawful"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Large",
    hd: 14,
    hdVal: 10,
    cr: 12,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Soul Scent"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 24,
      dex: 12,
      con: 22,
      int: 6,
      wis: 15,
      cha: 8
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Greater Bull Rush",
        type: "Combat"
      },
      {
        name: "Improved Bull Rush",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Stand Still",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "3 Bites",
        damage: "1d6",
        bonuses: [
          {
            source: "inherent",
            value: "1d8",
            appliesTo: "damageType",
            damageType: "fire plus cerberus's jaws"
          }
        ],
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 16
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "any (Hell)",
    visualDescription: "A beast leapt forth from the flames of Hell, this gigantic, threeheaded hound howls a sound like the cacophony of a raging wildfire. Large enough to heft a horse in its monstrous maws, this terror bears no flesh, its body merely a thing of exposed bone and charred musculature. From its three fanged mouths leap tongues of flame, and crimson saliva leaks from the terror's skeletal jaws.",
    description: "The mythical watchdogs of Hell, cerberi bear the bodies of terrible, powerful hounds and the essences of fiends. Relied upon by villains and frightful beings as guardians and gaolers, these three-headed canine abominations possess far greater cunning than their flensed, bestial appearances would suggest-a terrible intellect they pour largely into malice and enjoyment of their victims' tormented ends. Cerberi draw upon a legendary pedigree, all reputedly tracing their lineage to a single primordial evil beast said to still guard the foundations of some forsaken, deathly realm. Brethren to hell hounds, cerberi loathe their distant kin, viciously attacking such hellspawn if not kept at heel by a tyrannical master. Such are the cruel devices of Hell, though, that brazen hatred breeds ingenuity and new evils. Thus, within the depths of the infernal realm, amid the indomitable pits and fortresses of Malbolgia, devils work at nightmarish beast pens, forcibly breeding monstrous hybrids. Born in fury and profanity, Malbolgian cerberi rage forth, ferocious three-headed hell hounds the size of bulls and more than willing and capable of slaughtering their loathed Nessian warhound kindred. A typical cerberi stands a broad 4 feet tall and weighs over 200 pounds, while a Malbolgian cerberi can reach over 6 feet in height and weigh upward of 400 pounds. Ecology Denizens of Hell, cerberi embody the ferocity and covetousness of that realm. Bent to service as watch beasts or guardians at the gates of the Pit, cerberi possess unique abilities predisposing them to such grim service. Bearing some measure of mastery over souls and their fundamental ability to shift between planes, these infernal hounds easily trap their victims, preventing them from escaping to the safety of more favorable realms. This ability allows the beasts to prey upon both spirits and the denizens of the outer planes, which every so often attempt to leap between realms to avoid danger. Physically, cerberi appear akin to mortal canines, though in truth they hold little in common. As natives of Hell, they resemble devils more than the wolves and hounds of the Material Plane, their fleshless figures and three monstrous heads making this obvious at anything less than extreme distances. Despite the differences in physiology between mortal beasts and these keen hunters of souls, cerberi frequently find themselves treated like unthinking animals-largely due to their inability to speak. Such a mistake often proves deadly, as cerberi possess alert minds and genuine cunning. While most willingly accept the commands of more powerful masters and gory compensations for their efforts, cerberi are intelligent enough to know when they've been slighted and viciously turn on creatures who mistakenly think themselves their masters. Habitat & Society In their natural infernal environments, cerberi might be found anywhere powerful fiends have need for guardians. This makes them frequent fixtures among the dark vaults of Erebus, the estates of Dis, and the fortresses of Avernus. Capable trackers, especially adept at detecting the scent of wayward souls, cerberi also might be found among the legions of the first layer of Hell hunting the freshly arrived damned alongside other devils. Yet, beyond all other tasks, these three-headed hounds excel as captors and minders of the dead, assuring that none of Hell's charges escape their eternal fates. Cerberi's incredible ability to trap victims on planes and track the dead make them highly coveted servants across the multiverse. The live markets of Dis teem with cerberi for sale, both ravenous pups and tested hunters. Daemons and night hags especially covet cerberi and pay high prices for whole packs of the soul-hunting hounds. The hounds' bestial appearances and love of slaughter often cause those who consider themselves cerberi owners to forget the deviousness of their allies, a development that often ends poorly, if not bloodily, for the unwary and the weak. Outside of the devil-tamed reaches of Hell and other foul extraplanar wildernesses, small groups of cerberi gather in harsh, pack-like communities. Typically dominated by the strongest or wiliest member, such packs form swift and deadly tides, stalking trespassers upon their vast hunting grounds and doggedly pursuing any scent of lost souls. Although cerberi gain no sustenance from attacking the dead, as befits their infernal nature, all gain a vicious satisfaction at the feeling of an immortal essence discorporating forever within their deadly jaws.",
    organization: "solitary",
    languages: "Infernal (cannot speak)",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 17
      },
      Perception: {
        ranks: 14
      },
      "Sense Motive": {
        ranks: 0
      },
      Stealth: {
        ranks: 14
      },
      Survival: {
        ranks: 17
      }
    },
    special: {
      rend: {
        universalMonsterAbility: "Rend",
        type: "Ex",
        weaponName: 4
      }
    }
  },

  Uniila: {
    source: "The Infernal Syndrome",
    creatureType: "outsider",
    subTypes: [
      "devil",
      "evil",
      "extraplanar",
      "incorporeal",
      "lawful"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Medium",
    hd: 10,
    hdVal: 10,
    cr: 10,
    racialFeatures: [
      "Darkvision 60 ft.",
      "See in Darkness"
    ],
    speed: {
      maneuverability: "Perfect",
      fly: 40
    },
    abilities: {
      str: 11,
      dex: 22,
      con: 19,
      int: 22,
      wis: 18,
      cha: 21
    },
    feats: [
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Mobility",
        type: "Combat"
      },
      {
        name: "Scribe Scroll",
        type: "ItemCreation"
      },
      {
        name: "Weapon Finesse",
        type: "Combat"
      },
      {
        name: "Wind Stance",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Dagger",
        enchantments: [
          {
            name: "Enhancement Bonus +1",
            source: "inherent"
          }
        ],
        name: "4 Daggers",
        damage: "1d4"
      }
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "good"
      },
      SR: {
        value: 21
      }
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Hell)",
    visualDescription: "The curves of a shapely maiden define the outline of a mysterious figure wrapped in mist and strips of ancient robes. From beneath the rune-embroidered tatters stretch four, corpse-pale arms, each bearing either a blade or some mysterious arcane device. Hidden within the cowl of its hood shimmer the faintest outlines of a veiled face and a pair of eyes flickering with barely restrained energy.",
    description: "The tools devils use to ensnare the minds and ultimately the souls of their victims vary incredibly, from the most blatant of infernal corruptions to enticements that seem not like temptations at all. The elusive cabal devils, or uniilas as they are known by diabolists, employ one of the most seductive drugs in existence in their snares: magic. Mistresses of the arcane with an understanding of the cultic arts-both arcane and divine-that rivals even that of many greater fiends, these mysterious and aloof sages haunt the most ancient ruins and moldering depths of Stygia, the fifth layer of Hell, researching arcana and puzzling over formulae destined to shake the cosmos. When conjured forth or left to their own devices upon the Material Plane, uniilas make no untoward offers or forceful demands of their mortal hosts; they merely offer greater magical power in any of the various ways they might do so. Should the ease with which such might is granted pollute a mortal's ambitions or lead him to rely upon a devil for his power, such ultimately proves the student's fault, not the eager teacher's. So too does the resulting damnation at the end of the mortal's short life prove more of his own doing than any overt diabolical trap, making uniilas' methods all the more sinister for their subtlety. Summoning Cabal Devils Uniilas eagerly seek passage to the Material Plane and as such welcome summons by mortal casters. Whether to experiment with spells, seek out new magic, or corrupt mortals with their knowledge, what plots an uniila holds often prove inscrutable and of secondary interest to a summoner. Tempering their desire to reach the mortal plane, an uniila's vanity prevents it from serving a witless or hopeless summoner. Thus, uniilas turn the act of summoning about on those who call upon them via a planar binding spell, requesting that such mortals demonstrate their spellcasting prowess. If the mortal effectively casts a spell the uniila does not know (not one of those spells she possesses as a sorcerer spell or spell-like ability), or performs a spell of 5th-level or higher, the caster gains a +2 bonus on the opposed Charisma check made to bind the devil. Occasionally, an uniila purposefully remains to serve an inferior spellcaster, or one that fails his opposed Charisma check. Granting the inept tools they should never possess amuses the devils, and even the most incompetent \"masters\" might prove useful in seeking out components of an uniila's ongoing projects in Hell.",
    organization: "solitary, pair, or cabal (3-9)",
    languages: "Aklo, Celestial, Common, Draconic, Infernal, Undercommon; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "augury",
        casterLevel: 8,
        timesPerDay: -1
      },
      {
        name: "teleport, greater",
        casterLevel: 8,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: -1
      },
      {
        name: "true seeing",
        casterLevel: 8,
        timesPerDay: -1
      },
      {
        name: "unseen servant",
        casterLevel: 8,
        timesPerDay: -1
      },
      {
        name: "bestow curse",
        casterLevel: 8,
        timesPerDay: 3
      },
      {
        name: "blink",
        casterLevel: 8,
        timesPerDay: 3
      },
      {
        name: "detect thoughts",
        casterLevel: 8,
        timesPerDay: 3
      },
      {
        name: "dispel magic",
        casterLevel: 8,
        timesPerDay: 3
      },
      {
        name: "invisibility",
        casterLevel: 8,
        timesPerDay: 3
      },
      {
        name: "blasphemy",
        casterLevel: 8,
        timesPerDay: 1
      },
      {
        name: "mark of justice",
        casterLevel: 8,
        timesPerDay: 1
      },
      {
        name: "summon devil",
        casterLevel: 8,
        limitations: "level 4, 2d4 imps 55%",
        timesPerDay: 1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 8,
      spells: [
        {
          name: "",
          limitations: "3/day",
          level: 4
        },
        {
          name: "(5/day)-fireball",
          limitations: "5/day",
          level: 3
        },
        {
          name: "gaseous form ",
          level: 3
        },
        {
          name: "",
          limitations: "6/day",
          level: 2
        },
        {
          name: "glitterdust",
          level: 2
        },
        {
          name: "mirror image",
          level: 2
        },
        {
          name: "",
          limitations: "6/day",
          level: 1
        },
        {
          name: "identify",
          level: 1
        },
        {
          name: "magic missile",
          level: 1
        },
        {
          name: "ray of enfeeblement",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "arcane mark",
          level: 0
        },
        {
          name: "bleed",
          level: 0
        },
        {
          name: "dancing lights",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "disrupt undead",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        },
        {
          name: "touch of fatigue",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Appraise: {
        ranks: 10
      },
      Bluff: {
        ranks: 10
      },
      Diplomacy: {
        ranks: 13
      },
      Disguise: {
        ranks: 13
      },
      Fly: {
        ranks: 0
      },
      "Knowledge (arcana)": {
        ranks: 13
      },
      "Knowledge (planes)": {
        ranks: 10
      },
      "Knowledge (religion)": {
        ranks: 13
      },
      Perception: {
        ranks: 10
      },
      "Sense Motive": {
        ranks: 10
      },
      "Sleight of Hand": {
        ranks: 10
      },
      Spellcraft: {
        ranks: 10
      },
      Stealth: {
        ranks: 10
      }
    },
    special: {
      "dread magic": {
        type: "Su",
        text: "All spells an uniila casts draw upon terrible infernal eddies and the torment of damned souls. As such, all of an uniila's spells (not her spell-like abilities) are strange and terrible to behold. This increases the Spellcraft DC required to identify an uniila's spell as it is being cast by +5. In addition, at will, an uniila can choose to make a spell she casts particularly frightening. Any creature forced to make a saving throw to resist a spell cast by an uniila must make an additional Will save at the same DC or be shaken for 1 round. This effect can potentially increase the severity of other fear effects. This is a mind-affecting fear effect."
      },
      "infernal arcana": {
        type: "Su",
        text: "Once per day, after spending a minute whispering strange formulas and cosmic truths, an uniila can grant an adjacent mortal spellcaster additional profane insight into the ways of magic. This counts as a bonus spell prepared or spell per day of 6th level or lower, which is immediately accessible by the target in addition to all its regular spells. The uniila chooses what spell to grant the target. It need not be a spell already known by the target, though it must be of 6th level or lower and of a level he can cast or from his class's spell list. This spell remains available to the target for 24 hours. The spell can be any arcane or divine spell. An uniila can never use this ability on herself or non-mortal targets. Once a target chooses to make use of this spell, it is cast at the uniila's caster level (typically 8th) and is treated as having the evil subtype. In addition, as the uniila chooses, she may spontaneously add the effects of any metamagic feat to the spell (without the spell being treated as though it were of an increased spell level). Typically, uniilas use this ability to compel magic users to rely on them for more powerful magic, though they might also use effects like Widen Spell to affect unintended targets."
      },
      "scroll mastery": {
        type: "Su",
        text: "All uniilas possess Scribe Scroll as a bonus feat. An uniila is treated as knowing all spells of 6th level or lower in the Pathfinder RPG Core Rulebook and can create scrolls of any of those spells. Whether an uniila knows rarer magic is decided by the GM. Summon Devil (Su) Once per day, an uniila can attempt to summon 2d4 imps with a 55% chance of success. This ability is the equivalent of a 4th-level spell."
      },
      "witch token": {
        type: "Su",
        text: "By spending an hour in concentration, an uniila can create a token of arcane power. This token may take any form that takes up an item slot, and typically appears as a subtly fiendish ring, amulet, or similar piece of jewelry. While it is worn by a mortal, all of the DCs of any spells the wearer casts increase by +1 (this effect stacks with Spell Focus). However, while wearing a witch token, the bearer takes a -5 penalty on all saves made to resist spells and effects cast by the token's creation. Also, while the token is being worn, the uniila can effectively scry through the token at will and without the wearer's knowledge as long as he remains on the same plane. Spells and effects that typically bar or confound scry also affect the witch token. As a standard action, an uniila can cause her witch token to erupt in a burst of destructive magic that deals 10d6 points of damage to the wearer. An uniila can only ever have one witch token in existence at a time and must destroy a previously created token before creating a new one. The damage of this effect is based on the uniila's Hit Dice. All witch tokens are also under effects similar to magic aura, and are detected as possessing auras of moderate universal magic. Those who use identify or a similar spell must succeed at a DC 20 Will save to receive correct information (that the token sheds an aura of strong divination). Detect evil reveals no aura from a witch token. The saving throw is Charisma-based."
      }
    }
  },

  Spartolos: {
    source: "The Infernal Syndrome",
    creatureType: "undead",
    subTypes: [],
    alignments: [
      "Neutral Evil"
    ],
    size: "Medium",
    hd: 8,
    hdVal: 8,
    cr: 6,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 19,
      dex: 14,
      con: "-",
      int: 11,
      wis: 14,
      cha: 19
    },
    feats: [
      {
        name: "Combat Expertise",
        type: "Combat"
      },
      {
        name: "Improved Disarm",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Toughness",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Spear",
        name: "Spear",
        damage: "1d8"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to cold"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "bludgeoning"
      },
      SR: {
        value: 17
      },
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "A skeleton clad in tarnished armor clatters in its grim march. A polished bronze breastplate, greaves, and helmet dutifully remain to protect this felled warrior, while its naked, skeletal hands still clutch a short spear and a round bronze shield. Yet, beneath its decrepit armor and moldering bones, a deftness and deadly intent linger on, embodied in a hellish light smoldering in its shadowed eye sockets.",
    description: "Raised from the corpses of famed warriors and legendary legionaries, spartoi (singular \"spartolos\") walk again, dragged from death to do battle once more. Greater than mere unthinking corpses, like skeletal champions spartoi carry with them some vestige of their past lives and experiences. Yet what sets them apart from lesser undead are their retained caginess and knowledge of tactics, allowing them to function with deadly efficiency in troops of their brethren. Sometimes called the \"sown men,\" spartoi hold a fundamental connection to the near-mythical magical items known as a spartoi seeds, teeth that when planted in the earth summon forth these undead, fully armed and ready for command. Although ancient versions of these items prove especially rare, the well-known nature of their myth has led to dozens of modern versions being created and, with them, a rise in the appearance of spartoi. A typical spartolos stands about 5-1/2 to 6-1/2 feet tall, weighing approximately 70 pounds with its full compliment of equipment. Ecology As undead beings, spartoi have no need for food or shelter and have little effect on their environments. Yet despite being obedient undead, all spartoi seem to favor resting as disjoined piles of bones rather than standing corpses. Although the undead know no sensations of exertion, spartoi left to their own devices or without commands to do otherwise collapse into scattered remains. Whether such is a matter of tactics and subterfuge or fulfills some other need, the animate corpses give no hint. Spartoi detect as being of evil alignment merely because the powers animating them prove fundamentally foul. In some cases, spartoi raised from the corpses of particularly goodly or otherwise forceful individuals might retain the alignment they possessed in life. Habitat & Society The spartoi are undead skeletons-albeit much more powerful than other versions-designed for war. They have no wants or desires other than to serve their masters, and they carry no fear. Though they have some defense against channeled energy, the spartoi are just as susceptible to divine spellcasters as any other undead. All spartoi spring into being with weaponry, typically a spear, buckler, and breastplate, though some rare individuals have been known to arise with more unusual armaments. In such cases, short swords, punching daggers, glaives, and great clubs prove most common. Only the rarest of spartoi have been known to arise brandishing ranged weapons, their undead forms seeming to lack the coordination for such arms. In any case, spartoi weaponry and armor typically bear the markings of ancient cultures, often appearing to be from lands near where the undead (or its spartoi seeds) were created. Despite their skill and cooperation in battle, spartoi have little interest in one another. Even spartoi apparently risen from rival nations or cultures seem to forget all past rivalries in death. The mind of a spartolos is a mind possessed by a will to do battle and a skill or instinct seemingly inherent in the bones of great warriors, actual vestiges of personality lingering on only in the rarest cases. Even those spartoi retaining some hint of their former personalities seem interested only in completing their master's will and swiftly returning to their rightful place in death. Such causes many concerned with the necromantic arts to ponder over whether their magic draws forth an actual spirit to its bones, or merely causes a corpse to act with a hint of the personality that was bound to it in life. Creating a Spartolos A spartolos might be created in a number of ways. Most simply, a create undead spell cast by a magic-user of caster level 16 or greater can infuse a dead body with a heroic spirit, resurrecting it as a spartolos. Alternatively, one might seek out rare items known as spartoi seeds. Although relatively rare, the oldest seeds might summon forth the corpses of legendary heroes rather than typical spartoi. These slain champions, while possessing the same statistics as normal spartoi in death, possess the ability to speak and often bear great insight into the ways of battle or memories from their lives. Mythic Seeds Numerous myths across Golarion tell of legendary, magical fangs that summon forth the spirits or corpses of powerful warriors. The most pervasive of these tales comes from the ancient myth of the Jiskan hero Strada, though countless variations exist in dozen of cultures across Avistan. Legends tell of the mythic hero Strada tasked by the devil Alichino with the impossible charge of besieging an unconquerable city. Seeking out the oracle of Gorum, god of battle, the hero was gifted the thousand fangs of the dragon Kathalphas, who was said to have grown an additional tooth with every champion she had slain. Told to sow these fangs into the dust surrounding the city, the hero praised Gorum and departed graciously. Upon reaching the city, he did as the priest had advised, and to his astonishment, the skeletons of the dragon's thousand victims leapt from the ground, clad in all the finery of epic warriors, and arrayed to do battle in Strada's name. The unconquerable city fell in an hour, much to the fury of capering Alichino, and for 90 splendorous years Strada ruled as king with an army of the world's greatest warriors ever guarding his palace gates. See the spartoi seeds sidebar for rules on using the magical teeth drawn from this myth.",
    organization: "solitary, pair, troop (3-18)",
    languages: "Common (cannot speak)",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 3
      },
      Climb: {
        ranks: 3
      },
      Perception: {
        ranks: 8
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
      "deadly ally": {
        type: "Ex",
        text: "Spartoi cooperate exceptionally well in battle. A spartolos flanking a target with another spartolos gains a +4 flanking bonus instead of +2."
      },
      disjoin: {
        type: "Su",
        text: "As a move action, a spartolos can crumble into a pile of bones and tarnished weaponry. While in this state, the undead gains a +8 racial bonus to its Stealth check and its DR rises to 10/bludgeoning. As a move action, a spartolos can reform itself, jolting into its armored skeletal form even if its pieces have been scattered."
      },
      "united resistance": {
        type: "Su",
        text: "A spartolos ignores 5 points of damage caused by channel energy. This resistance rises by 5 for every other spartolos within 10 feet to a minimum of 0 damage."
      }
    }
  },

};
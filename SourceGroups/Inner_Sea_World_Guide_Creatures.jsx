
export const Inner_Sea_World_GuideCreatures = {
  Aluum: {
    source: "Inner Sea World Guide",
    creatureType: "construct",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 14,
    hdVal: 10,
    cr: 10,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 27,
      dex: 12,
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
        specialAbility: "paralysis",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "construct traits",
      "Immune to magic"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "adamantine"
      },
      naturalArmor: 15
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any (Katapesh)",
    visualDescription: "This looming humanoid figure is made of rune-etched metal and polished stone, with crystalline eyes that glow with blue light.",
    description: "Aluums are magical constructs created from metal and stone native to Katapesh. They are the fighting juggernauts that maintain order within the city of Katapesh when the city's normal means of doing so fail. Aluums are powered by the souls of Katapeshi slaves and prisoners bound into glowing gems in their chests. An aluum stands approximately 14 feet tall and weighs over 2 tons. They are controlled by magical pendants called charms of aluum control (see page 298). Construction Although the secret to the creation of aluums is closely guarded by the Pactmasters, near approximations have appeared elsewhere, indicating that some have either reverse-engineered the process or have stolen those secrets from Katapesh. During the creation process, the souls of a dozen slaves are siphoned from their bodies as they die. Fragments of these souls are placed within the inert body of the aluum, giving it its animating force. Aluum CL 13th; Price 80,000 gp Construction Requirements Craft Construct, geas/quest, hold monster, limited wish, magic jar, creator must be caster level 13th; Skill Craft (armor) or Craft (weapons) DC 18; Cost 40,000 gp",
    organization: "solitary or squad (3-4)",
    spellLikeAbilities: [],
    skills: {},
    special: {
      "soul shriek": {
        type: "Su",
        text: "As a free action every 1d4 rounds, the aluum's enslaved souls may emit a keening wail in a 15-foot cone. Creatures in the cone take 10d6 points of sonic damage and are stunned for 1 round. A DC 15 Will save halves the damage and negates the stun effect. This is a sonic mindaffecting effect. The save DC is Constitution-based."
      }
    }
  },

  Calikang: {
    source: "Inner Sea World Guide",
    creatureType: "monstrous humanoid",
    subTypes: [],
    alignments: [
      "Lawful Neutral"
    ],
    size: "Large",
    hd: 15,
    hdVal: 10,
    cr: 12,
    racialFeatures: [
      "Darkvision 60 ft.",
      "True Seeing"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 25,
      dex: 15,
      con: 20,
      int: 8,
      wis: 14,
      cha: 17
    },
    feats: [
      {
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Double Slice",
        type: "Combat"
      },
      {
        name: "Great Fortitude",
        type: "General"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Longsword",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Staggering Critical",
        type: "Combat"
      },
      {
        name: "Two-Weapon Fighting",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Longsword",
        enchantments: [
          {
            name: "Enhancement Bonus +1",
            source: "inherent"
          }
        ],
        name: "Longsword",
        damage: "1d8"
      },
      {
        weapon: "Longsword",
        enchantments: [
          {
            name: "Enhancement Bonus +1",
            source: "inherent"
          }
        ],
        name: "Longsword",
        damage: "1d8"
      },
      {
        weapon: "Slam",
        name: "4 Slams",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to electricity, mind-affecting effects, negative energy"
    ],
    defense: {
      SR: {
        value: 23
      },
      naturalArmor: 12
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "temperate or tropical hills",
    visualDescription: "This blue-skinned, six-armed giant lurches to life, its armor and twin swords glittering with jewels.",
    description: "The calikang is a much sought-after guardian of treasuries, harems, and fortifications. Legend holds that, an untold number of eons ago, one of the thousand deities of Vudra failed at a task, and the first calikangs were born from that god's severed fingers. Calikangs have powerful sense of guilt and shame over their divine source's ancient failings, and they believe that if enough calikangs protect worldly holdings from robberies or destruction, this inherited sin will someday be wiped clean. Calikangs are 14 feet tall and weigh 4,000 pounds. They can live for 200 years- though many extend their lives beyond this via suspended animation.",
    organization: "solitary, gang (2-4), or tribe (5-12)",
    languages: "Common, Giant",
    spellLikeAbilities: [
      {
        name: "air walk",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "magic weapon",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "true seeing",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "water walk",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "lightning bolt",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "chain lightning",
        casterLevel: 12,
        timesPerDay: 1
      }
    ],
    skills: {
      Intimidate: {
        ranks: 15
      },
      Perception: {
        ranks: 15
      },
      "Use Magic Device": {
        ranks: 15
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        damage: "usable 1/day",
        text: "A calikang can choose what kind of energy damage its breath weapon inflicts when it uses this ability, choosing from acid, cold, electricity, fire, or sonic energy. Calikangs are particularly adept at using electricity in this manner, and inflict 1 additional point of damage per die (+14 for most calikangs) when they elect to inflict electricity damage with their breath weapon."
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        value: null
      },
      "defensive slam": {
        type: "Ex",
        text: "A calikang gains a cumulative +1 shield bonus to its AC for each of its arms that does not wield a manufactured weapon, to a maximum of +4 for four hands. A calikang can make slam attacks with these arms without losing this AC bonus."
      },
      "energy absorption": {
        type: "Su",
        text: "A spell that inflicts energy damage that is defeated by the calikang's SR or immunity to electricity is absorbed into its body, healing it for an amount of damage equal to the absorbed spell's caster level and granting an additional daily use of its breath weapon. Breath Weapon (Su) A calikang can choose what kind of energy damage its breath weapon inflicts when it uses this ability, choosing from acid, cold, electricity, fire, or sonic energy. Calikangs are particularly adept at using electricity in this manner, and inflict 1 additional point of damage per die (+14 for most calikangs) when they elect to inflict electricity damage with their breath weapon."
      },
      "suspend animation": {
        type: "Su",
        text: "As a full-round action, a calikang can enter a state of suspended animation, freezing in place and becoming motionless. It remains aware of its surroundings. In this state, the calikang is immune to disease, inhaled toxins, poison, starvation, and thirst, and receives a +4 bonus on all Fortitude saves. The calikang can exit this state as an immediate action-if it does so to attack a foe or initiate combat, it gains a +4 insight bonus on its Initiative check."
      }
    }
  },

  "Charau-Ka": {
    source: "Inner Sea World Guide",
    creatureType: "humanoid",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Small",
    hd: 3,
    hdVal: 8,
    cr: 2,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 30,
      climb: 30
    },
    abilities: {
      str: 15,
      dex: 13,
      con: 14,
      int: 8,
      wis: 12,
      cha: 11
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
        name: "Throw Anything",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Club",
        name: "Club",
        damage: "1d6"
      },
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Rock",
        name: "Rock",
        damage: "1d4"
      }
    ],
    defense: {
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "warm forests",
    visualDescription: "This limber, shrieking creature has the visage of an enraged monkey, but it walks upright like a man.",
    description: "Although they call themselves the charau-ka, these dangerous jungle dwellers are often known to colonists and explorers as ape-men. Legend holds that the charau-ka stem from the demon lord Angazhan, who transformed the bodies of the first humans that tried to wage war against his cult, causing the dead to rise as the first apemen. Rumors that charau-ka clerics have perfected a hideous ritual to force those slain to reincarnate as new charau-ka are popular tales among jungle explorers-but proof of such a magic spell has yet to reach civilization. Today, the charau-ka are one of the most fecund and widespread races of creatures in the Mwangi Expanse. Not all of them serve the Gorilla King or worship Angazhan; some have become feral monsters little more organized than apes, while others may have turned to the worship of other demon lords or even the snake-god Ydersius. Charau-ka generally dwell in small tribes of a few dozen members. They often keep dangerous jungle creatures as pets or guardians, trusting to their druids or animal handlers to keep the deadly beasts under control. A typical charau-ka village extends from the jungle floor up into the canopy above, and usually includes several treehouse-style structures connected by vines or rope bridges.",
    organization: "solitary, pair, patrol (3-8), or tribe (9-20 plus 1-3 dire apes, 1-3 fighter sub-chieftains of 2nd level, 1 cleric of Angazhan of 3rd-5th level, and 1 chieftain of any class of 4th-8th level)",
    languages: "Abyssal, Polyglot",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 1
      },
      Fly: {
        ranks: 0
      },
      Perception: {
        ranks: 1
      },
      Stealth: {
        ranks: 1,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      }
    },
    special: {
      "shrieking frenzy": {
        type: "Su",
        text: "Once per day, a charau-ka can enter a state of shrieking frenzy as a free action. While in this state, the charau-ka automatically fails Stealth checks and cannot speak or cast spells that use verbal components (or use items that require command words to activate), but functions as if under the effects of a haste spell. The charauka can continue shrieking for up to 3 rounds, after which it is staggered for 1 round."
      },
      "thrown-weapon mastery": {
        type: "Ex",
        text: "Charau-ka are masters of thrown weapons. All charau-ka gain Throw Anything as a bonus feat. In addition, a charau-ka gains a +1 racial bonus on all thrown weapons, and their threat range for thrown weapons is doubled, as if the charau-ka possessed the Improved Critical feat for all thrown weapons. This effect doesn't stack with any other effect that expands the threat range of a weapon."
      }
    }
  },

  "Daughter of Urgathoa": {
    source: "Inner Sea World Guide",
    creatureType: "undead",
    subTypes: [],
    alignments: [
      "Neutral Evil"
    ],
    size: "Large",
    hd: 11,
    hdVal: 8,
    cr: 8,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      maneuverability: "Perfect",
      fly: 40
    },
    abilities: {
      str: 27,
      dex: 17,
      con: "-",
      int: 18,
      wis: 16,
      cha: 21
    },
    feats: [
      {
        name: "Ability Focus",
        type: "Monster",
        value: "Disease",
        choiceSource: "Ability Focus"
      },
      {
        name: "Combat Casting",
        type: "General"
      },
      {
        name: "Combat Reflexes",
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
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Claw",
        name: "Claw",
        specialAbility: "disease",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "Claw",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 9
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any",
    visualDescription: "What was once a woman now towers as a monstrosity of ectoplasmic flesh, horns, and a tremendous scythelike claw.",
    description: "Within the church of the goddess of undeath, few more coveted stations exist than daughter of Urgathoa, yet no high priest can bestow the title, and no living worshiper can take the role. Rather, daughters of Urgathoa are selected by the fickle goddess herself, chosen from her most zealous and accomplished priestesses only at the moment of their deaths. Even after their transformations into things of pestilence and dead flesh, daughters of Urgathoa remain social beings who typically surround themselves with fanatical cults.",
    organization: "solitary or cult (1 daughter plus 2d8 human clerics)",
    languages: "Abyssal, Common, Infernal, Necril",
    spellLikeAbilities: [
      {
        name: "desecrate",
        casterLevel: 11,
        limitations: "centered on self",
        timesPerDay: -1
      }
    ],
    preparedSpells: {
      casterLevel: 6,
      spells: [
        {
          name: "bestow curse",
          level: 3
        },
        {
          name: "contagion",
          level: 3
        },
        {
          name: "dispel magic",
          level: 3
        },
        {
          name: "inflict serious wounds",
          level: 3
        },
        {
          name: "death knell",
          level: 2
        },
        {
          name: "hold person",
          level: 2
        },
        {
          name: "inflict moderate wounds",
          level: 2
        },
        {
          name: "resist energy",
          level: 2
        },
        {
          name: "spiritual weapon ",
          level: 2
        },
        {
          name: "cause fear",
          level: 1
        },
        {
          name: "command",
          level: 1
        },
        {
          name: "divine favor",
          level: 1
        },
        {
          name: "obscuring mist",
          level: 1
        },
        {
          name: "shield of faith",
          level: 1
        },
        {
          name: "bleed",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "guidance",
          level: 0
        },
        {
          name: "resistance",
          level: 0
        }
      ],
      casterClass: "Cleric"
    },
    skills: {
      Acrobatics: {
        ranks: 11
      },
      Bluff: {
        ranks: 11
      },
      Fly: {
        ranks: 11
      },
      Intimidate: {
        ranks: 11
      },
      "Knowledge (religion)": {
        ranks: 11
      },
      Perception: {
        ranks: 11
      },
      "Sense Motive": {
        ranks: 11
      },
      Spellcraft: {
        ranks: 11
      },
      Stealth: {
        ranks: 1
      }
    },
    special: {
      "channel resistance": {
        universalMonsterAbility: "Channel Resistance",
        bonus: 4
      },
      desecrate: {
        type: "Sp",
        text: "The bonuses granted from the daughter of Urgathoa's constant desecrate spell-like ability (which is always centered on herself) are calculated into the stats above.",
        preText: "20-ft. radius"
      },
      disease: {
        universalMonsterAbility: "Disease",
        name: "Bubonic Plague",
        type: "Su",
        text: "onic Plague: Great claw-injury; save Fortitude DC 20; onset immediate; frequency 1/day; effect 1d4 Con damage and target is fatigued; cure 2 consecutive saves. The save DC is Charisma-based. Great Claw (Ex) One of the daughter's hands is a tremendous scythe-shaped claw. This attack inflicts x4 damage on a critical hit, and is treated as an evil weapon for the purposes of penetrating damage reduction. Spells A daughter of Urgathoa casts spells as a 6th-level cleric of Urgathoa-but although she selects two domains to determine bonus spells, she does not gain any domain powers.",
        saveDC: null,
        saveType: "Fortitude"
      }
    }
  },

  "Spine Dragon": {
    source: "Inner Sea World Guide",
    creatureType: "dragon",
    subTypes: [
      "earth"
    ],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Gargantuan",
    hd: 16,
    hdVal: 12,
    cr: 16,
    racialFeatures: [
      "Blindsight 30 ft.",
      "Darkvision 120 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30,
      maneuverability: "Average",
      fly: 60
    },
    abilities: {
      str: 32,
      dex: 15,
      con: 29,
      int: 16,
      wis: 22,
      cha: 19
    },
    feats: [
      {
        name: "Awesome Blow",
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
        name: "Improved Bull Rush",
        type: "Combat"
      },
      {
        name: "Point-Blank Shot",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Precise Shot",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
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
        weapon: "Claw",
        name: "Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      },
      {
        weapon: "Spine",
        name: "4 Spines",
        damage: "2d8"
      }
    ],
    immunities: [
      "Immune to sonic"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "adamantine"
      },
      SR: {
        value: 27
      },
      naturalArmor: 22
    },
    space: "20 ft.",
    reach: "15 ft.",
    environment: "temperate hills",
    visualDescription: "This dragon bears a forest of razor-sharp crystalline spines. Its wings are transparent and seem almost to be made of glass.",
    description: "Particularly notorious in the badlands of Numeria, spine dragons are similar in appearance to true dragons, but do not progress through draconic age categories. Their abilities and defenses make them singularly adept at handling the alien threats and strange constructs that lurk in this realm, and as a result, spine dragons have become one of Numeria's most successful predators. Of course, a spine dragon is much more than a predator. As with many true dragons, spine dragons are particularly vain and enjoy being groveled to. It's not uncommon for them to assume the role of god for ignorant tribes of giants. They also have a particular love of crystalline treasure and magic items-a spine dragon's horde is usually sparse on the classic \"carpet of coins\" but just as valuable overall in content as those of true dragons. A spine dragon is 60 feet long and 20 feet high, and weighs 16,000 pounds.",
    organization: "solitary",
    languages: "Common, Draconic",
    spellLikeAbilities: [
      {
        name: "spike growth",
        casterLevel: 16,
        timesPerDay: 3
      },
      {
        name: "spike stones",
        casterLevel: 16,
        timesPerDay: 3
      },
      {
        name: "telekinesis",
        casterLevel: 16,
        timesPerDay: 3
      },
      {
        name: "telekinetic sphere",
        casterLevel: 16,
        timesPerDay: 1
      },
      {
        name: "wall of force",
        casterLevel: 16,
        timesPerDay: 1
      }
    ],
    skills: {
      Appraise: {
        ranks: 16
      },
      Bluff: {
        ranks: 16
      },
      Fly: {
        ranks: 18
      },
      Intimidate: {
        ranks: 16
      },
      "Knowledge (engineering)": {
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
      Stealth: {
        ranks: 16
      }
    },
    special: {
      "breath weapon": {
        type: "Ex",
        text: "Once every 1d4 rounds as a standard action, a spine dragon can emit a devastating shriek of powerful sonic energy in a 60-foot cone. Creatures caught in this cone take 20d6 sonic damage and are permanently deafened. A DC 27 Reflex save halves the damage and negates the deafness. This sonic damage is particularly devastating to constructs-they take a -4 penalty to save against its effects, and if they fail the save, they are staggered for 1d4 rounds as well. The save DC is Constitution-based."
      },
      spines: {
        type: "Ex",
        text: "A spine dragon's body is covered with long, crystalline spines. It can fire up to four of these spines per round as a full-attack action (or one as a standard action). A creature that attacks a spine dragon with a melee weapon, unarmed strike, or natural weapon must make a DC 20 Reflex save or take 2d8+11 points of piercing damage from the spines. The save DC is Dexterity-based."
      },
      "ray deflection": {
        type: "Su",
        text: "A spine dragon's scales deflect rays and magic missile spells, rendering the spine dragon immune to such effects. There's a 30% chance a deflected effect reflects back in full force at the caster; otherwise, it is simply negated."
      }
    },
    resistances: [
      {
        damageType: "cold",
        value: 20
      },
      {
        damageType: "electricity",
        value: 20
      },
      {
        damageType: "fire",
        value: 20
      }
    ]
  },

  Treerazer: {
    source: "Inner Sea World Guide",
    creatureType: "outsider",
    subTypes: [
      "demon",
      "native"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Huge",
    hd: 28,
    hdVal: 10,
    cr: 25,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Detect Good",
      "Detect Law",
      "True Seeing"
    ],
    speed: {
      base: 60,
      maneuverability: "Good",
      fly: 60,
      swim: 40
    },
    abilities: {
      str: 36,
      dex: 30,
      con: 40,
      int: 21,
      wis: 24,
      cha: 25
    },
    feats: [
      {
        name: "Awesome Blow",
        type: "Combat"
      },
      {
        name: "Combat Reflexes",
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
        name: "Greater Vital Strike",
        type: "Combat"
      },
      {
        name: "Improved Bull Rush",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Greataxe",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
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
        value: "Greater dispel magic",
        choiceSource: "Quicken Spell-Like Ability"
      },
      {
        name: "Staggering Critical",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Blackaxe",
        name: "Blackaxe",
        damage: "4d6",
        bonuses: [
          {
            source: "inherent",
            value: "1d6",
            appliesTo: "damageType",
            damageType: "acid"
          }
        ]
      },
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
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
      "Immune to death effects, disease, mindaffecting effects"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "cold iron and good"
      },
      SR: {
        value: 36
      },
      naturalArmor: 20
    },
    space: "20 ft.",
    reach: "20 ft.",
    environment: "Tanglebriar",
    visualDescription: "The twenty-foot-tall winged saurian demon wields an aciddripping axe. Two red eyes glow above a tooth-filled beak.",
    description: "Treerazer, the self-styled Lord of the Blasted Tarn, was once the favored minion and lieutenant (some even say child) of Cyth-V'sug, Demon Lord of Fungus and Parasites. After a failed attempt to wrest that crown away from Cyth-V'sug, Treerazer fled to the Material Plane. Cyth-V'sug was unable (or perhaps only unwilling) to pursue, but took steps to ensure that Treerazer would remain there by exiling him, transforming Treerazer into a native outsider and severing his bond to the Abyss-if the Lord of the Blasted Tarn is slain, his animus will not return to the Abyss and reform. Death, to Treerazer, is a permanent thing. Treerazer arrived on Golarion near the end of the Age of Darkness, and found the savaged planet much to his liking-so much so that the sting of exile was somewhat ameliorated. He spent many centuries wandering the remote corners of Golarion before finally coming upon the abandoned elven nation of Kyonin in 2497 ar. In the Sovyrian Stone, he found an artifact that he believed he could use to reinstate his Abyssal link and, perhaps, even uproot the entire nation and refocus the portal from Sovyrian to the Abyss, thereby reclaiming his position there and taking one more step toward revenge against Cyth-V'sug. Yet the elves sensed his tamperings and returned to confront the demon. A terrific battle resulted, and while the elves were able to drive Treerazer out of Iadara and into southern Kyonin, they were unable to slay him or force him out completely-they merely concentrated his power in a smaller region. Instead, the elves \"walled off \" this region, a perverted realm known today as the Tanglebriar. Treerazer lurks at the Tanglebriar's heart to this day, the greatest bogeyman in elven mythology and a very real and constant threat to the nation's security. Treerazer begins most combats by casting time stop and raising an antiplant shell to prevent plant creatures (including creatures under the effect of his aura of corruption) from approaching. If he has time, he also creates walls of thorns and summons demons (usually four nalfeshnees and 12 hezrous). In melee, Treerazer gleefully takes up Blackaxe and makes full attacks against the closest foe, or Greater Vital Strikes if he's forced to move or charge. During the first 3 rounds of combat, he targets obvious spell effects with quickened greater dispel magic. If Treerazer is reduced to fewer than 150 hit points, he teleports back to his fortress, Witchbole, to recover and plan his revenge. Treerazer's Cult Cults of Treerazer are quite rare beyond Kyonin, where secret cabals of cultists venerate him. When they do appear beyond these borders, they are secretive but sadistic groups, eager to sacrifice nonbelievers yet cunning in remaining undetected by the law of the land. Treerazer's symbol is a bleeding dead tree that's been split in half. His clerics have access to the Domains of Chaos, Destruction, Evil, and Plant. His favored weapon is the battleaxe.",
    organization: "solitary or group (Treerazer plus 1d4 nalfeshnees and 2d4 hezrous)",
    languages: "Abyssal, Common, Elven, Sylvan; telepathy 300 ft.",
    gear: "Blackaxe (see page 299)",
    spellLikeAbilities: [
      {
        name: "detect good",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "detect law",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "freedom of movement",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "true seeing",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "unholy aura",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "water breathing",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "antiplant shell",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "contagion",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "desecrate",
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
        limitations: "within Tanglebriar only",
        timesPerDay: -1
      },
      {
        name: "telekinesis",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "unholy blight",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "control plants",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "dispel magic, greater",
        casterLevel: 20,
        limitations: "Metamagic: Quicken ",
        timesPerDay: 3
      },
      {
        name: "wall of thorns",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "horrid wilting",
        casterLevel: 20,
        timesPerDay: 1
      },
      {
        name: "symbol of death",
        casterLevel: 20,
        timesPerDay: 1
      },
      {
        name: "time stop",
        casterLevel: 20,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 19
      },
      Fly: {
        ranks: 28
      },
      Intimidate: {
        ranks: 31
      },
      "Knowledge (arcana)": {
        ranks: 31
      },
      "Knowledge (nature)": {
        ranks: 31
      },
      "Knowledge (planes)": {
        ranks: 28
      },
      Perception: {
        ranks: 28
      },
      "Sense Motive": {
        ranks: 28
      },
      Spellcraft: {
        ranks: 28
      },
      Stealth: {
        ranks: 28
      },
      Swim: {
        ranks: 28
      }
    },
    special: {
      defoliation: {
        type: "Su",
        text: "As a standard action once every 1d4 rounds, Treerazer can exude a pulse of defoliating energy in a 30-foot-radius spread. This pulse appears as a wave of sickly green energy, and causes all plants and plant creatures in the area to blacken and wither. Such creatures take 20d10 points of damage and 1d8 points of Strength drain, or half with a successful DC 39 Fortitude save. A plant that isn't a creature (such as a tree or a shrub) doesn't receive a save and immediately withers and dies. Treerazer can choose to exclude any number of plants in the area from this effect, and generally does so to preserve twisted and corrupted plants and fungus. The save DC is Constitution-based."
      },
      "summon demons": {
        type: "Sp",
        text: "Once per day, nascent demon lords can summon any demon or combination of demons whose total combined CR is 20 or lower. This ability always works, and is equivalent to a 9th-level spell. • Telepathy 300 ft. • A nascent demon lord's natural weapons, as well as any weapon it wields, are treated as chaotic, epic, and evil for the purpose of resolving damage reduction. • Nascent demon lords can grant spells to their worshipers. Granting spells does not require any specific action on the nascent demon lord's behalf. All nascent demon lords grant access to the domains of Chaos and Evil-in addition, they grant access to two other domains and a favored weapon that vary according to the nascent demon lord's themes and interests."
      },
      "nascent demon lord traits": {
        type: "Ex"
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        damageType: "good",
        value: 15
      },
      "freedom of movement": {
        type: "Ex"
      },
      corruption: {
        type: "Su",
        text: "Treerazer exudes an aura of corruption to a radius of 120 feet. This aura causes plants to grow hideous, sprouting thorns, twisting, and becoming fungoid in nature. Creatures with woodland stride or freedom of movement can move through this fungal bloom with ease. Living creatures within Treerazer's aura of corruption must make a DC 39 Fortitude save each round or their flesh grows pasty and clammy as tendrils of diseased plant matter and fungal growth sprout from it. This condition persists as long as the creature remains within Treerazer's aura of corruption and for 1 minute thereafter. While suffering the effects of this aura, the living creature is treated as a plant for the purposes of spells and effects that harm or otherwise inconvenience plant creatures more than other creatures. The victim would thus be subject to antiplant shell, blight, and additional damage from horrid wilting or a plant bane weapon, and could be affected by control plants. The corruption does not otherwise impart plant traits to creatures. The save DC is Constitution-based.",
        preText: "120 ft."
      }
    },
    resistances: [
      {
        damageType: "acid",
        value: 30
      },
      {
        damageType: "cold",
        value: 30
      },
      {
        damageType: "fire",
        value: 30
      }
    ]
  },

  "Aquatic Elf": {
    source: "Inner Sea World Guide",
    creatureType: "humanoid",
    subTypes: [
      "elf"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 1,
    hdVal: 8,
    dontUseRacialHD: true,
    cr: "1/3",
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 30,
      swim: 30
    },
    abilities: {
      str: 11,
      dex: 15,
      con: 12,
      int: 10,
      wis: 9,
      cha: 6
    },
    feats: [],
    attacks: [],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "",
    visualDescription: "",
    description: "Svirfneblin, or \"deep gnomes,\" are a reclusive offshoot of the gnome race. They dwell underground in hidden cities, safe from dark elves and other subterranean races. They have skin the color of gray or brown stone. Males are bald, and females have stringy gray hair. A svirfneblin's ties to the eerie realm of the fey are much stronger than those of their surface-dwelling gnome kin, and this makes them either strangely detached from their emotions or violently random in their outbursts. Svirfneblin have long fought wars against the duergar, and have a difficult time seeing the difference between duergar and other dwarves. Svirfneblin Characters Svirfneblin are defined by their class levels-they do not possess racial Hit Dice. A svirfneblin's CR is equal to his class level. Svirfneblin have the following racial traits. -2 Strength, +2 Dexterity, +2 Wisdom, -4 Charisma: Svirfneblin are fast and observant, but relatively weak and emotionally distant. Small: Svirfneblin are Small creatures and gain a +1 size bonus to their AC, a +1 size bonus on attack rolls, a -1 penalty to their CMB and CMD, and a +4 size bonus on Stealth checks. Defensive Training: Svirfneblin gain a +2 dodge bonus to Armor Class. Senses: Svirfneblin have Darkvision 120 ft. and lowlight vision. Fortunate: Svirfneblin gain a +2 racial bonus on all saving throws. Skilled: Svirfneblin gain a +2 racial bonus on Stealth checks; this improves to a +4 bonus underground. They gain a +2 racial bonus on Craft (alchemy) checks and Perception checks. Hatred: Svirfneblin receive a +1 bonus on attack rolls against humanoid creatures of the reptilian and dwarven subtypes due to training against these hated foes. Stonecunning: Svirfneblin gain stonecunning as a dwarf (Pathfinder RPG Core Rulebook 21). Spell Resistance: Svirfneblin have SR equal to 11 + class levels. Svirfneblin Magic: Svirfneblin add +1 to the DC of any illusion spells they cast. Svirfneblin also gain the spell-like abilities listed above; caster level equals the svirfneblin's class levels. Languages: Svirfneblin begin play speaking Gnome and Undercommon. Those with high Int scores can choose from the following bonus languages: Aklo, Common, Draconic, Dwarven, Elven, Giant, Goblin, Orc, or Terran.",
    organization: "",
    languages: "Common",
    spellLikeAbilities: [],
    skills: {},
    special: {}
  },

};

export const The_Midnight_IslesCreatures = {
  Cambion: {
    source: [
      "The Midnight Isles",
      "Bestiary 5"
    ],
    creatureType: "outsider",
    subTypes: [
      "chaotic",
      "demon",
      "evil",
      "extraplanar"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 3,
    hdVal: 10,
    cr: 2,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 15,
      dex: 13,
      con: 14,
      int: 13,
      wis: 12,
      cha: 14
    },
    feats: [
      {
        name: "Deceitful",
        type: "General"
      },
      {
        name: "Power Attack",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Scimitar",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "Scimitar",
        damage: "1d6"
      },
      {
        weapon: "Claw",
        name: "2 Claw",
        damage: "1d4",
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
        strBonus: 2
      }
    ],
    defense: {
      SR: {
        value: 13
      },
      naturalArmor: 1
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Abyss)",
    visualDescription: "This leering, red-skinned demonic humanoid has a pair of black horns upon his brow and cloven hooves for feet.",
    description: "Not all demons are formed from the sinful souls of mortals sent on to the Abyss. Demons are nothing if not fecund, as the widespread presence of tief lings, half-fiends, and fiendish creatures attests, yet these tainted and corrupted spawn are not true demons. Cambions are unusual fiends in that they merge these two methods of demonic creation, resulting in a nearly humanoid but wholly fiendish creature capable of rising to great heights of power in time. A cambion is in small part a humanoid, but in practice this aspect applies almost entirely to his physical appearance, for a cambion is a true outsider, a creature whose body and soul are one. The majority of cambions have red skin, horns on their heads, and cloven hooves for feet-while the same variety exists among cambions as it does among humans, the fiendish aspects of cambions' appearance don't range as widely as those of tief lings. A typical cambion stands 6 feet tall and weighs 190 pounds. Ecology A cambion is born when an incubus impregnates a humanoid female in the Abyss and the humanoid carries the child to term without leaving the Abyss. While gestating, the child absorbs the plane's chaotic evil energies and transforms completely. Rather than being a half-fiend (as would be the case if the mother gave birth or was impregnated on a plane other than the Abyss), a child born under such circumstances is always born a cambion, and always born male. Only humanoids can give birth to cambions, and the majority of cambions' mothers are humans. Birthing a cambion is particularly painful and dangerous, and in most cases the mother dies during childbirth. Cambions are unusual among demons in that they enter life in the Abyss not as fully formed demons, but as infants. And while cambions mature quickly-reaching adulthood over the course of only 6 painful months- they remain relatively helpless for much of this time, requiring someone to rear them. The Abyss's denizens are not known for their caring and nurturing natures, so despite the insatiable urges of their incubus fathers, few cambions live to see adulthood. And while cambions do not need to remain in the Abyss during the period of their maturation, it's rare for someone to spirit such a child out of the Worldwound. Once fully grown, a cambion attains its full demonic powers. When the first day of its seventh month of life dawns, a cambion gains his spell-like abilities and sinfrenzy power. Unlike other demons, cambions as a whole aren't associated with a specific sin; some revel in their fathers' lustful natures, and other embrace pride, envy, and so on (this need not match their sinfrenzies). Habitat & Society Few places in the Abyss provide safe harbor for a newborn cambion to mature-the most notable of these are Nocticula's Midnight Isles. Here, Nocticula rewards those who take upon themselves the stewardship of a cambion infant, but only if that cambion, upon reaching maturity, chooses to award its foster parent the honor of being named its \"warden.\" A cambion has a month to bestow this honor, and does so by uttering the following prayer to Nocticula: \"By the grace of Our Lady in Shadow do I name thee, (creature's name), my warden.\" By Nocticula's decree, cambions are free to name anyone warden, so anyone who seeks this honor is well advised to give her cambion fosterling no reasons to betray her. Once a warden is so chosen, the nature of the boon Nocticula grants varies; it might be a monetary reward, a magical gift, an enhancement to body or mind, or (in rare cases) even a moment of dalliance with Nocticula herself. Entire societies on the Midnight Isles exist for the sole purpose of raising cambions and seeking out such boons. Cambions often rise to great power by advancing in class level, particularly in classes associated with their favorite sins. It is rare for a cambion to take class levels in a class that is not associated with its sinfrenzy ability, but not unheard of. When encountered on the Material Plane, cambions most often already have a number of class levels. These cambions are in charge of groups of cultists, where they serve as demonic generals and powerful spellcasters. They always come to the Material Plane with grand plots and recruit others to help them sow sin. Cambions in these roles are often in service of a demon lord-or even Lamashtu herself. It is unusual for more than a handful of cambions to work together, as their inf lated egos lead to arguments and internal bickering.",
    organization: "solitary, pair, gang (3-7), or cult (8-13)",
    languages: "Abyssal, Common; telepathy 30 ft.",
    spellLikeAbilities: [
      {
        name: "command",
        casterLevel: 3,
        timesPerDay: 3
      },
      {
        name: "charm person",
        casterLevel: 3,
        timesPerDay: 1
      },
      {
        name: "death knell",
        casterLevel: 3,
        timesPerDay: 1
      },
      {
        name: "enthrall",
        casterLevel: 3,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 5
      },
      Bluff: {
        ranks: 3
      },
      Disguise: {
        ranks: 6
      },
      Intimidate: {
        ranks: 6
      },
      Perception: {
        ranks: 3
      },
      "Sense Motive": {
        ranks: 3
      },
      Stealth: {
        ranks: 2
      }
    },
    special: {
      "sadistic strike": {
        type: "Su",
        text: "Cambions are particularly cruel, and they excel at causing pain and anguish. A cambion always treats any weapon he attacks with (including natural weapons and spells that require attack rolls to hit) as if the demon had the Improved Critical feat for that weapon, increasing the weapon's threat range as appropriate."
      },
      sinfrenzy: {
        type: "Su",
        text: "Every cambion carries within his being an excessive capacity for one of the seven classical sins-this focus is determined at the moment of the cambion's birth and depends on the nature of his humanoid parent's greatest sin. Once per day for a number of rounds equal to his Hit Dice, a cambion can turn himself over to his sin and enter into a frenzied state as a free action. While a cambion is in this frenzy, his land speed increases by 10 feet and he gains a +1 bonus on Reflex saves and attack rolls. These bonuses do not stack with those granted by haste or similar effects, but if the cambion has at least 1 level in the class listed for his specific sin, the sinfrenzy grants an additional effect as summarized below. Envy (cleric): Cambion clerics covet the power of the gods themselves. While an envious cambion is in a sinfrenzy, his channeled energy effect increases by 1d6. Gluttony (alchemist): Cambion alchemists take great pleasure in drinking their extracts, potions, mutagens, and even poisons. While a gluttonous cambion is in a sinfrenzy, his bombs deal an additional die of damage. Greed (rogue): Cambion rogues are obsessed with gathering as much wealth and power as they can. While a greedy cambion is in a sinfrenzy, he deals an additional die of sneak attack damage. Lust (bard): Cambion bards seek to dominate and control as many hedonistic slaves as they can through magic and intimidation. While a lustful cambion bard is in a sinfrenzy, the effects of his inspire courage, inspire competence, inspire greatness, and inspire heroics abilities increase by 1. The save DCs of the cambion's bardic performances also increase by 1 when he is in this state. Pride (wizard): Cambion wizards believe their magic is greater than all others. While a prideful cambion is in a sinfrenzy, his spell save DCs increase by 1. Sloth (fighter): Cambion fighters carry the essence of sloth within, so much so that even their very blood seems to flow slowly from cut veins. While a slothful cambion fighter is in a sinfrenzy, he gains 2 bonus hit points per Hit Die. Wrath (ranger): Cambion rangers charge their attacks with savage hatred. While a wrathful cambion ranger is in a sinfrenzy, his favored enemy bonuses increase by 2."
      }
    }
  },

  Shamira: {
    source: "The Midnight Isles",
    creatureType: "outsider",
    subTypes: [
      "chaotic",
      "demon",
      "evil",
      "extraplanar",
      "fire"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 27,
    hdVal: 10,
    cr: 25,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Detect Good",
      "Detect Law",
      "True Seeing"
    ],
    speed: {
      base: 40,
      maneuverability: "Perfect",
      fly: 80
    },
    abilities: {
      str: 29,
      dex: 32,
      con: 40,
      int: 28,
      wis: 25,
      cha: 37
    },
    feats: [
      {
        name: "Blinding Critical",
        type: "Combat"
      },
      {
        name: "Craft Construct",
        type: "ItemCreation"
      },
      {
        name: "Craft Magic Arms and Armor",
        type: "ItemCreation"
      },
      {
        name: "Craft Wondrous Item",
        type: "ItemCreation"
      },
      {
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Deadly Aim",
        type: "Combat"
      },
      {
        name: "Empower Spell-Like Ability",
        type: "Monster",
        value: "Delayed blast fireball",
        choiceSource: "Empower Spell-Like Ability"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Composite longbow",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Precise Shot",
        type: "Combat"
      },
      {
        name: "Pinpoint Targeting",
        type: "Combat"
      },
      {
        name: "Point-Blank Shot",
        type: "Combat"
      },
      {
        name: "Precise Shot",
        type: "Combat"
      },
      {
        name: "Quicken Spell-Like Ability",
        type: "Monster",
        value: "Dominate person",
        choiceSource: "Quicken Spell-Like Ability"
      },
      {
        name: "Rapid Shot",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Claw",
        name: "2 Claws",
        specialAbility: "burn",
        damage: "1d4",
        bonuses: [
          {
            source: "inherent",
            value: "4d6",
            appliesTo: "damageType",
            damageType: "fire"
          }
        ],
        type: "primary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        specialAbility: "grab",
        damage: "1d6",
        bonuses: [
          {
            source: "inherent",
            value: "4d6",
            appliesTo: "damageType",
            damageType: "fire, burn,"
          }
        ],
        type: "secondary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        specialAbility: "burn",
        damage: "1d4",
        bonuses: [
          {
            source: "inherent",
            value: "4d6",
            appliesTo: "damageType",
            damageType: "fire"
          }
        ],
        type: "secondary"
      },
      {
        weapon: "Firebow",
        name: "Firebow",
        specialAbility: "burn",
        damage: "1d8",
        bonuses: [
          {
            source: "inherent",
            value: "1d6",
            appliesTo: "damageType",
            damageType: "fire"
          }
        ]
      }
    ],
    immunities: [
      "Immune to charm and compulsion effects, death effects, disease"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: " cold iron and good"
      },
      SR: {
        value: 36
      },
      naturalArmor: 7
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Abyss)",
    visualDescription: "This crimson-haired demonic woman has wings of fire. She carries a slender bow made of flames.",
    description: "Shamira, the Ardent Dream, is the nominal ruler of the isle of Alinythia, and by extension the city of Alushinyrra, but with the honor of ruling the largest of the Midnight Isles comes with an unwritten caveat-Nocticula's palace overlooks the city from its own isle. While this position is one that Shamira revels in, and one that has afforded her no small amount of influence (indeed, it's helped to propel her into the ranks of nascent demon lords), the Ardent Dream knows that her mistress watches over her always, and surely regards her not only as a valued lover, companion, and minion, but also as the closest thing Nocticula has to competition. Of course, Shamira does keep an eye out for any opportunity she has to erode some of Nocticula's power, for someday she hopes to wear Nocticula's crown. Shamira is unique in her appearance. Even before she became a nascent demon lord, her burning wings and flowing crimson hair marked her as a succubus of power. Close-lipped about her history, she appeared in Nocticula's palace one moonrise and seduced the Lady in Shadow, thus earning the position of Lady of Alinythia. (Nocticula banished Shamira's predecessor, an incubus named Ziforian, to the sewers below the city, where he may yet lurk.) None in the Abyss recall this majestic and unmistakable succubus in the city before her arrival in Nocticula's boudoir. Shamira does little to quell rumors that her previous home was a much loftier place than the Abyss, and her resemblance to the deity Sarenrae provides endless speculation.",
    organization: "solitary (unique)",
    languages: "Abyssal, Celestial, Common, Draconic, Ignan; telepathy 300 ft.",
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
        name: "fire shield",
        casterLevel: 20,
        limitations: "warm shield only",
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
        name: "charm monster",
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
        timesPerDay: -1
      },
      {
        name: "suggestion, mass",
        casterLevel: 20,
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
        name: "delayed blast fireball",
        casterLevel: 20,
        limitations: "Metamagic: Empower ",
        timesPerDay: 3
      },
      {
        name: "dominate person",
        casterLevel: 20,
        limitations: "Metamagic: Quicken ",
        timesPerDay: 3
      },
      {
        name: "symbol of persuasion",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "meteor swarm",
        casterLevel: 20,
        timesPerDay: 1
      },
      {
        name: "nightmare",
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
        ranks: 26
      },
      Bluff: {
        ranks: 27,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Diplomacy: {
        ranks: 27
      },
      Disguise: {
        ranks: 30
      },
      Fly: {
        ranks: 30
      },
      Intimidate: {
        ranks: 27
      },
      "Knowledge (planes)": {
        ranks: 27
      },
      "Knowledge (religion)": {
        ranks: 30
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
        subSkill: "dance",
        ranks: 27
      },
      "Sense Motive": {
        ranks: 27
      },
      "Sleight of Hand": {
        ranks: 27
      },
      Spellcraft: {
        ranks: 27
      },
      Stealth: {
        ranks: 27
      },
      "Use Magic Device": {
        ranks: 30
      }
    },
    special: {
      burn: {
        universalMonsterAbility: "Burn",
        saveDC: 10,
        damage: "8d6 fire"
      },
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "2d6+13 plus 4d6 fire and burn"
      },
      "dream haunting": {
        type: "Su",
        text: "Shamira can use her energy drain attack, mind-affecting spell-like abilities, and profane benediction abilities on any creature she successfully affects with her nightmare spell-like ability while that ability is in effect. Once she uses one of these abilities against her target, the nightmare spell ends-she can only use one of these abilities per use of nightmare."
      },
      "energy drain": {
        universalMonsterAbility: "Energy Drain",
        levels: 1,
        text: "Shamira's energy drain ability functions like that of a succubus, except that it drains 2 levels per use. As a free action as part of this attack, she may choose use her burn special attack with her energy drain. With a successful DC 36 Will save, a character resists the suggestion implanted by this attack, and a successful DC 36 Fortitude save negates the negative level after 24 hours. The save DCs are Charisma-based."
      },
      "fiery passion": {
        type: "Su",
        text: "Shamira's passions and fires are one. A creature must be immune to both fire and mind-affecting effects in order to be immune to fire damage caused by Shamira. Creatures immune only to fire instead take fire damage as if they instead had fire resistance 10. Creatures with fire resistance and no immunity to mind-affecting effects take fire damage from Shamira's attacks as if they had no fire resistance. Firebow (Su) As a swift action, Shamira can conjure a +5 flaming burst unholy composite longbow that creates arrows as she fires it. In addition, arrows fired from her firebow can inflict her burn special attack."
      },
      "profane benediction": {
        type: "Su",
        text: "This ability functions as the succubus's profane gift ability, except it grants a +4 profane bonus to an ability score of the target's choice rather than a +2 bonus. If the target is a worshiper of Sarenrae, the target also gains immunity to fire as long as the profane benediction persists, even if the worshiper at some point later abandons her faith in Sarenrae (as is often the case with those who are eager to keep their profane benedictions)."
      },
      "summon demons": {
        type: "Sp",
        text: "As a nascent demon lord, Shamira can summon any demon or combination of demons whose total combined CR is 20 or lower. This ability always works, and is equivalent to a 9th-level spell."
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "any humanoid; alter self"
      },
      "divine deception": {
        type: "Su",
        text: "Once per day while Shamira uses her change shape ability, she can choose to emulate a different alignment for the purpose of divination spells that reveal auras (such as detect evil). This effect persists as long as she carries a holy symbol of a deity of the same alignment she wishes to emulate. This holy symbol must have been given to her within the previous hour by a worshiper of that deity; Shamira typically secures these symbols via mind control. This effect last for 2d6 hours, after which point the holy symbol crumbles to ashes. While it lasts, spells and other magical effects treat her alignment as if it were the feigned alignment, not her true alignment of chaotic evil. If she uses a symbol of Sarenrae to appear neutral good, this effect lasts for 24 hours before the symbol crumbles to dust."
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
      "fire shield": {
        type: "Ex"
      },
      "freedom of movement": {
        type: "Ex"
      },
      grab: {
        universalMonsterAbility: "Grab"
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
      }
    ]
  },

  Nocticula: {
    source: "The Midnight Isles",
    creatureType: "outsider",
    subTypes: [
      "chaotic",
      "demon",
      "evil",
      "extraplanar"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 36,
    hdVal: 10,
    cr: 30,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Detect Good",
      "Detect Law",
      "See in Darkness",
      "True Seeing"
    ],
    speed: {
      base: 60,
      maneuverability: "Good",
      fly: 90
    },
    abilities: {
      str: 34,
      dex: 36,
      con: 42,
      int: 35,
      wis: 32,
      cha: 40
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
        name: "Craft Construct",
        type: "ItemCreation"
      },
      {
        name: "Craft Magic Arms and Armor",
        type: "ItemCreation"
      },
      {
        name: "Craft Wondrous Item",
        type: "ItemCreation"
      },
      {
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Deadly Aim",
        type: "Combat"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Greater Feint",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Hand crossbow",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Sting",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Feint",
        type: "Combat"
      },
      {
        name: "Point-Blank Shot",
        type: "Combat"
      },
      {
        name: "Precise Shot",
        type: "Combat"
      },
      {
        name: "Quicken Spell-Like Ability",
        type: "Monster",
        value: "Mass suggestion",
        choiceSource: "Quicken Spell-Like Ability"
      },
      {
        name: "Rapid Reload",
        type: "Combat",
        value: "Hand crossbow",
        choiceSource: "Rapid Reload"
      },
      {
        name: "Rapid Shot",
        type: "Combat"
      },
      {
        name: "Staggering Critical",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        bonuses: [
          {
            source: "inherent",
            value: "1d4",
            appliesTo: "damageType",
            damageType: "cha drain"
          }
        ],
        type: "primary"
      },
      {
        weapon: "Sting",
        name: "3 Stings",
        specialAbility: "poison",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Hoof",
        name: "2 Hooves",
        specialAbility: "burn",
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
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Shadowkis",
        name: "Shadowkiss",
        specialAbility: "poison",
        damage: "1d4"
      }
    ],
    immunities: [
      "Immune to ability damage and drain, charm and compulsion effects, death effects, energy drain, fire, petrification"
    ],
    defense: {
      DR: {
        value: 20,
        damageType: "cold iron, epic, and lawful"
      },
      SR: {
        value: 41
      },
      naturalArmor: 7
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Abyss)",
    visualDescription: "This frighteningly majestic creature spreads wide her rune-adorned wings. Molten iron weeps from her hooves, and her three tails are studded with barbs.",
    description: "Nocticula is the demon lord of assassins, darkness, and lust, and rules the Abyssal realm of the Midnight Isles, a vast archipelago formed around the murdered remnants of dozens of demon lords and other powerful foes. Having been the first succubus and then having ascended to become a demigoddess, Nocticula now sets her eyes at a greater prize-full divinity. Lamashtu is the only demon lord who has accomplished this task so far, but Nocticula aims to be the second. What kind of deity she might become is anyone's guess-some believe that Nocticula is secretly seeking redemption from her demonic nature. Others say these rumors were seeded by Nocticula herself as a grand lie to distract her enemies from her true goal of becoming an assassin and seducer of gods. Nocticula is certainly mercurial in her personality and attitude. She may simply murder or enslave visitors to her realm, or she may welcome them with open arms-even those who one would think were her enemies. Only a fool accepts her invitation without suspicion, for what the queen of succubi wants may change dramatically from one moment to the next. Nocticula's Cult Nocticula is worshiped by assassins, the lustful, whores, shadow-using creatures, and of course succubi. These worshipers form relatively small cults, often akin to secret societies, that use brothels, nobility, or academies as a cover for their true purposes. A small number of heretics venerate her as well, not as a demigoddess of murder and lust but as one of outcasts, artists, and the glories of midnight. The fact that such heretical clerics are granted spells as surely as the rest of her worshipers has caused not a small amount of discontent among her faithful, which Nocticula seems to enjoy. Nocticula's symbol is a multi-pointed crown wrapped with thorny vines. Her favored weapon is the hand crossbow. She grants access to the domains of Chaos, Charm, Darkness, and Evil, and to the subdomains of Demon, Loss, Lust, and Night.",
    organization: "solitary (unique)",
    languages: "Abyssal, Celestial, Common, Draconic, Undercommon; telepathy 300 ft., tongues",
    spellLikeAbilities: [
      {
        name: "detect good",
        casterLevel: 30,
        timesPerDay: -1
      },
      {
        name: "detect law",
        casterLevel: 30,
        timesPerDay: -1
      },
      {
        name: "freedom of movement",
        casterLevel: 30,
        timesPerDay: -1
      },
      {
        name: "tongues",
        casterLevel: 30,
        timesPerDay: -1
      },
      {
        name: "true seeing",
        casterLevel: 30,
        timesPerDay: -1
      },
      {
        name: "unholy aura",
        casterLevel: 30,
        timesPerDay: -1
      },
      {
        name: "astral projection",
        casterLevel: 30,
        timesPerDay: -1
      },
      {
        name: "blasphemy",
        casterLevel: 30,
        timesPerDay: -1
      },
      {
        name: "chaos hammer",
        casterLevel: 30,
        timesPerDay: -1
      },
      {
        name: "deeper darkness",
        casterLevel: 30,
        timesPerDay: -1
      },
      {
        name: "desecrate",
        casterLevel: 30,
        timesPerDay: -1
      },
      {
        name: "dispel magic, greater",
        casterLevel: 30,
        timesPerDay: -1
      },
      {
        name: "teleport, greater",
        casterLevel: 30,
        timesPerDay: -1
      },
      {
        name: "power word blind",
        casterLevel: 30,
        timesPerDay: -1
      },
      {
        name: "telekinesis",
        casterLevel: 30,
        timesPerDay: -1
      },
      {
        name: "shapechange",
        casterLevel: 30,
        timesPerDay: -1
      },
      {
        name: "unhallow",
        casterLevel: 30,
        timesPerDay: -1
      },
      {
        name: "finger of death",
        casterLevel: 30,
        timesPerDay: 3
      },
      {
        name: "suggestion, mass",
        casterLevel: 30,
        limitations: "Metamagic: Quicken ",
        timesPerDay: 3
      },
      {
        name: "symbol of death",
        casterLevel: 30,
        timesPerDay: 3
      },
      {
        name: "soul bind",
        casterLevel: 30,
        timesPerDay: 1
      },
      {
        name: "time stop",
        casterLevel: 30,
        timesPerDay: 1
      },
      {
        name: "wail of the banshee",
        casterLevel: 30,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 27
      },
      Bluff: {
        ranks: 36,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Diplomacy: {
        ranks: 39
      },
      Disguise: {
        ranks: 36
      },
      Fly: {
        ranks: 39
      },
      Intimidate: {
        ranks: 36
      },
      "Knowledge (arcana)": {
        ranks: 36
      },
      "Knowledge (local)": {
        ranks: 36
      },
      "Knowledge (nobility)": {
        ranks: 36
      },
      "Knowledge (planes)": {
        ranks: 36
      },
      "Knowledge (religion)": {
        ranks: 39
      },
      Perception: {
        ranks: 36,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Perform0: {
        subSkill: "dance",
        ranks: 36
      },
      "Sense Motive": {
        ranks: 36
      },
      "Sleight of Hand": {
        ranks: 36
      },
      Spellcraft: {
        ranks: 36
      },
      Stealth: {
        ranks: 36
      },
      "Use Magic Device": {
        ranks: 39
      }
    },
    special: {
      burn: {
        universalMonsterAbility: "Burn",
        saveDC: 10,
        damage: "3d6 fire"
      },
      "cruel shot": {
        type: "Ex",
        text: "Nocticula is adept at making ranged attacks to strike cruel shots that deal significant and humiliating damage. She adds her Charisma bonus to all damage dealt by ranged weapons."
      },
      domination: {
        type: "Su",
        text: "As a standard action, Nocticula can crush a foe's will. The target must be visible to Nocticula and within 120 feet. It must succeed at a DC 43 Will save or fall instantly under Nocticula's influence as dominate monster (CL 30th). If she uses domination against a humanoid creature, she may instead choose to use the ability as a swift action, and it functions as dominate person. As long as the target is under this effect, it gains a +4 profane bonus on all saving throws against targets other than Nocticula."
      },
      "energy drain": {
        universalMonsterAbility: "Energy Drain",
        levels: 1,
        text: "Nocticula's energy drain functions identically to that of a succubus (Pathfinder RPG Bestiary 68), except that she drains 2 levels when she uses this ability against mythic creatures, or 1d6+4 levels against non-mythic creatures."
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Sting or hand crossbow-injury; save Fort DC 44; frequency 1/round for 6 rounds; effect 1d4 Wisdom drain plus paralysis for 1 round. Anyone who fails two consecutive saves against this poison is permanently blinded. The save DC is Constitution-based.",
        saveDC: 10
      },
      "profane ascension": {
        type: "Su",
        text: "As a swift action while in an act of passion with a willing mortal, Nocticula may grant a profane ascension. The target's name appears in glowing Abyssal runes on Nocticula's wings, and a crimson mark manifests somewhere on the target's body. The target immediately gains a +6 profane bonus to any one ability score of its choice, a +4 profane bonus to any other ability score of its choice, and the see in darkness ability. A single creature may have only one profane ascension in effect at any one time. As long as the effect persists, Nocticula can communicate telepathically with the target across any distance and may use any of her spell-like abilities through the target, manifesting them as if the target were using them. A profane ascension may be removed by a miracle or wish. Nocticula can remove it as a free action, dealing 4d6 points of Charisma drain and imparting 1d10+10 permanent negative levels to the victim. Seductive Presence (Su) Unlike most demon lords, Nocticula does not possess a frightful presence ability. Rather, she has a seductive presence that she can activate as a free action whenever she speaks or uses a spell-like ability. Anyone within 180 feet who fails a DC 43 Fortitude save loses any immunity to mind-affecting effects, charm effects, and compulsion effects, and becomes fascinated by Nocticula for 5d4 rounds. A creature affected by a mind-affecting effect while within this aura remains affected even after leaving Nocticula's seductive presence. Creatures that succeed at this saving throw are immune to this ability for 24 hours. The save DC is Charisma-based. Shadowkiss Nocticula's favored weapon is Shadowkiss, a +5 unholy hand crossbow that magically creates ammunition as it fires. Once a target is damaged by a bolt fired from Shadowkiss, the hand crossbow gains the bane weapon special ability against that target's creature type on all further attacks. Shadowkiss may only have one bane effect in place at one time. Bolts fired from Shadowkiss gain the ghost touch ability (an effect not normally available to ranged weapons)."
      },
      "sneak attack": {
        universalMonsterAbility: "Sneak Attack",
        bonus: "4d6"
      },
      "summon demons": {
        type: "Sp",
        text: "Once per day, nascent demon lords can summon any demon or combination of demons whose total combined CR is 20 or lower. This ability always works, and is equivalent to a 9th-level spell."
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "any humanoid; alter self"
      },
      "swift transformation": {
        type: "Ex",
        text: "Nocticula can use her change shape ability as a free action."
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        damageType: "deific or mythic",
        value: 30
      },
      "Abyssal resurrection": {
        type: "Ex"
      },
      "freedom of movement": {
        type: "Ex"
      },
      "seductive presence": {
        type: "Su",
        text: "Unlike most demon lords, Nocticula does not possess a frightful presence ability. Rather, she has a seductive presence that she can activate as a free action whenever she speaks or uses a spell-like ability. Anyone within 180 feet who fails a DC 43 Fortitude save loses any immunity to mind-affecting effects, charm effects, and compulsion effects, and becomes fascinated by Nocticula for 5d4 rounds. A creature affected by a mind-affecting effect while within this aura remains affected even after leaving Nocticula's seductive presence. Creatures that succeed at this saving throw are immune to this ability for 24 hours. The save DC is Charisma-based. Shadowkiss Nocticula's favored weapon is Shadowkiss, a +5 unholy hand crossbow that magically creates ammunition as it fires. Once a target is damaged by a bolt fired from Shadowkiss, the hand crossbow gains the bane weapon special ability against that target's creature type on all further attacks. Shadowkiss may only have one bane effect in place at one time. Bolts fired from Shadowkiss gain the ghost touch ability (an effect not normally available to ranged weapons).",
        preText: "180 ft., DC 43"
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
      }
    ]
  },

  Lamhigyn: {
    source: "The Midnight Isles",
    creatureType: "outsider",
    subTypes: [
      "chaotic",
      "evil",
      "extraplanar"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Small",
    hd: 5,
    hdVal: 10,
    cr: 3,
    racialFeatures: [
      "Darkvision 60 ft.",
      "See in Darkness"
    ],
    speed: {
      base: 10,
      maneuverability: "Good",
      fly: 60
    },
    abilities: {
      str: 12,
      dex: 15,
      con: 11,
      int: 5,
      wis: 12,
      cha: 8
    },
    feats: [
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Hover",
        type: "Monster"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Sting",
        name: "Sting",
        specialAbility: "poison",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        specialAbility: "grab",
        damage: "1d4",
        type: "secondary"
      }
    ],
    defense: {
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Abyss)",
    visualDescription: "This small, three-eyed creature lets out garbled, piercing shrieks as it flits about on ragged batlike wings, its barbed tail flicking with menace.",
    description: "Simple creatures, lamhigyns emerged from the chaotic fabric of the Abyss. Abyssal pests might be a good description of these strange creatures; their stings have left many adventurers insane and debilitated, opportune victims for the Abyss's insatiable predators. Viewing intruders with evil disdain, lamhigyns are always looking for new victims, which they slowly lap apart, piece by piece, with their rasping mouths. Lamhigyns are strange-looking creatures that are often characterized by mortals visiting the Abyss as overgrown, flying tadpoles with the wings of a bat and a stinger-tipped tail. They lurk within dark places in the Abyss and in similarly lightless places on the Material Plane near rifts to their homeland. Their bulbous, unblinking eyes are vaguely froglike, and are often the first and last things unprepared adventurers see, as the pesky creatures are fond of wrapping their wings around their victims' heads to blind their prey. Their tiny mouths house thick tongues that flicker when intruders arrive. Lamhigyns have thick, scaly skin on their bodies ranging in color from red to green. Though lamhigyns are typically encountered flying, on the ground they stand on four insectile legs that they keep tucked beneath them while nesting. Although they are small, their 2-foot-high, 8-pound bodies pack an impressive punch when hurtling through the air at their victims. Ecology Lamhigyns are pests from another plane and have no proper place in the Material Plane's natural order. Chaotic creatures with an inherent streak of evil, they lie in wait, eager for mortal life to happen by. When this occurs, lamhigyns instantly attack and try to immobilize their victims before slowly devouring them alive. Lamhigyns that have slipped through to the Material Plane breed in dark caves and shadowed forests. Their mating rituals are dangerous, messy affairs. Approximately once every year, the fertile females- which are nearly indistinguishable from the males- fly to the highest corners of the cave or den where they live. There, they squawk uncontrollably. The males hurtle toward these females; the ensuing flapping and screeching results in the females' three or five eggs becoming fertilized. The females then lay these eggs in slime-covered clusters, where they incubate for 6 to 8 weeks before hatching. Lamhigyn mothers typically die shortly after laying their eggs, their bodies exhausted by the violent process of reproduction. As they grow, lamhigyn hatchlings join any others of their kind in nearby caverns or find their own comfortable, dark places in which to live. Some find the Material Plane uncomfortable and spend all of their energy trying to find a way back to the home world they've never known but feel intrinsically drawn to. Being from the Abyss, lamhigyns do not need to sleep; however, many choose to stay very still within the darkness-their wings wrapped around their bodies and their tiny legs curled underneath-waiting for the simple pleasure of scaring anything that may wander nearby. Similarly, lamhigyns have no need or desire to eat, but they spend much of their energy focused on predation. Though they don't require sustenance, they delight in bloodshed and violence. Habitat & Society Found in all corners of the Abyss, lamhigyns often slip through to the Material Plane (or other planes in the Great Beyond) as a result of being caught up by portals or flying too close to a rift between worlds. The greatest known rift on Golarion is the Worldwound. Here, lamhigyns are found in great abundance, almost invariably in caves, cliffs, or even the fabric of the Worldwound itself-sites chosen because of their similarity to lamhigyns' darkened homes in the Abyss. In fact, some of these simple-minded creatures believe this region of Golarion is part of the Abyss. For the most part, however, they're more delighted with the abundance of food in the Worldwound than they are concerned with geography. When it comes to their own kind, lamhigyns can be volatile and violent in nature. In general, they tend to get along with other lamhigyns, though almost anything can set them off: living in too close proximity to each other, mating disputes, or arguments over the torn bodies of victims. When this happens, lamhigyns turn the full force of their chaotic fury onto each other, tearing and grappling until only one-sometimes none-of the bizarre creatures remain. When lamhigyns turn against each other, they are even more vicious than when they attack other creatures. Sometimes a petty squabble between two boisterous lamhigyns can spread through an entire hive as they infect each other with a chaotic bloodlust. Before long, entire caverns full of lamhigyns erupt in screeching echoes that crash against the rocky walls. When they're not fighting among themselves, lamhigyns occupy shared spaces in noisy, flapping hives, waiting for hapless creatures to stumble into their dens. Intelligent creatures susceptible to fear-such as adventurers, creatures whose minds have been warped by the Worldwound's infestations, or unlucky natives- then suffer lamhigyns' gleeful ire. Lamhigyns ignore most normal animals unless they have waited too long for fresh prey and have grown bored. When it comes to victims, lamhigyns prefer those that can think and walk, for they provide the most deliciously terrified reactions. There is nothing lamhigyns love more than to tear the life from terrified, screaming humans while they are out of their minds with fear. Lamhigyns fill parts of the Abyss like pigeons fill large cities, and many demons regard the creatures as terrible pests. Some demons take to hunting the creatures for target practice or pest control. Lamhigyns avoid most demons, especially those more powerful than dretches. They enjoy harassing dretches and quasits, however, and often flock around individuals, screeching and battering them with their wings. This hazing goes both ways, and in the Abyss dretch hunting parties scour caverns for lamhigyns. Unlike many other creatures, lamhigyns show little racial preference between a solitary existence or one with others of their kind. Although lamhigyns are more potent in groups, a single lamhigyn might occupy a small cave near the Worldwound for generations, waiting patiently for just one victim. Lamhigyns can live to be nearly 500 years old, though most die through acts of violence before reaching half that age. When the Worldwound first opened, lamhigyns poured through the tear in reality along with the demons. They were also some of the first to die, as the Sarkorians could defeat the strange, small creatures in combat more easily than they could the more durable demons. However, the winged creatures kept pouring through, foreshadowing the Abyssal onslaught that was to come. In short time, lamhigyns began populating the region, and now tens of thousands of these creatures are said to live near the Worldwound alone. Though lamhigyns are rare outside the Worldwound, their appearance elsewhere on Golarion is a sign that chaos-and the pain of draining, pesky stings-is sure to follow.",
    organization: "solitary, pair, clutch (3-9), or hive (10-30)",
    languages: "Abyssal",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 8
      },
      Perception: {
        ranks: 5
      },
      Stealth: {
        ranks: 5
      }
    },
    special: {
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Sting-injury; save Fort DC 12; frequency 1/round for 4 rounds; effect 1d4 Wis damage; cure 2 consecutive saves.",
        saveDC: 10
      },
      "wrap wings": {
        type: "Ex",
        text: "When a lamhigyn uses its wing attacks to grab an opponent, it wraps its wings around its opponent's head, causing the victim to gain the blinded condition for as long as the lamhigyn grapples that creature. A grappling lamhigyn automatically deals wing damage while grappling, but it takes the normal -2 penalty on attack rolls for its sting attack. This ability has no effect on creatures that do not have sensory organs in their heads."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  "Putrid Ooze": {
    source: "The Midnight Isles",
    creatureType: "ooze",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Huge",
    hd: 15,
    hdVal: 8,
    cr: 11,
    racialFeatures: [
      "Blindsight 60 ft."
    ],
    speed: {
      base: 30,
      climb: 20,
      swim: 30
    },
    abilities: {
      str: 32,
      dex: 9,
      con: 22,
      int: "-",
      wis: 1,
      cha: 1
    },
    feats: [],
    attacks: [
      {
        weapon: "Slam",
        name: "Slam",
        specialAbility: "grab",
        damage: "1d4",
        bonuses: [
          {
            source: "inherent",
            value: "2d6",
            appliesTo: "damageType",
            damageType: "acid"
          }
        ],
        type: "primary"
      },
      {
        weapon: "Splatter",
        name: "Splatter",
        specialAbility: "Splatter",
        damage: "3d6"
      }
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "-"
      }
    },
    space: "15 ft.",
    reach: "10 ft.",
    environment: "any",
    visualDescription: "Carrion and debris breaks the inky surface of this massive undulating sludge.",
    description: "Putrid oozes are primarily made from organic mire animated with Abyssal energies. While these creatures can exist near any rift or portal, they're most plentiful in the Worldwound. These oozes have become more of a threat in recent years, caustically burning through any plants or animals in sight in pursuit of their vicious, though mindless, hunger. Putrid oozes especially are known for their ability to subsume creatures into their own gelatinous bodies once they have destroyed their victims. Putrid oozes generally are a combination of churning, gray-and-black slurries, similar to chunky tar mixed with wet gravel, but their bodies also hold undigested portions of the creatures they consume. At any one time, they present a mixture of rotting limbs, severed heads, and entangled entrails among the miscellaneous sludge that makes up their bodies. A putrid ooze typically covers an area that measures 12 feet by 12 feet, and piles up on itself to a height of no more than 8 feet. A putrid ooze weighs about 20 tons. Ecology Putrid oozes terrorize the Worldwound region, presenting yet another danger to those brave enough to face the demonic hordes. How putrid oozes went from caustic environmental hazards to roving, animated horrors is still unclear. Some believe that the same strange Abyssal power that ripped the Worldwound into the face of Golarion slowly leaked into putrid oozes, which already contained substances native to that chaotic realm. This bizarre power imbued these oozes with a fundamental need to destroy and consume all plants and creatures in their paths. This explanation is as good as any-especially because it parallels the conscious desires of most Abyssal creatures, which seek the entropy and eventual destruction of all orderly existence. In this way, putrid oozes are like avatars of the power that seemingly gave them life. To feed, putrid oozes physically roll over their victims, using their caustic bulk to break victims into easily digestible bits. They then churn these severed body parts and the other organic components of their prey throughout their sludge. For several days, the remnants of a putrid ooze's meal can easily be seen as it pulls its bulk across the ground, up walls, and even through water. Being resistant to acid, demons break down more slowly in a putrid ooze's body; it's not uncommon to find parts of clawed demon arms, horned heads, or spine-covered torsos churning around in a putrid ooze's bulk long after they were first consumed. Durable metals and stonework are also sometimes found suspended in these acidic creatures. Most hardy materials the putrid ooze consumes are never completely devoured. Eventually, putrid oozes break down their meals into the same gray-black, chunky morass that makes up their bodies. It's these ones that are considered most dangerous, for oozes that are empty are also hungry and aggressive. Although it's rare for a putrid ooze to starve-the Worldwound contains no shortage of slaughtered bodies and hapless crusaders-those weakening from hunger use the last of their dwindling energy to seek out chasms or ravines where they can lie in wait, hoping for meals to wander past. In these dark places, the putrid oozes go dormant, existing as murky pools of sticky acid until a living creature draws near. Though the creatures are essentially in hibernation, all it takes is a simple touch to awaken them. In contrast, active putrid oozes are intimidating and disgusting sights to behold, something not likely to take someone by surprise. Unlike other oozes, putrid oozes do not reproduce via mitosis-splitting into two identical, smaller oozes. Instead, they form spontaneously from the corrupted rifts surrounding the Worldwound. Some cultists who revere Jubilex, demon lord of ooze monsters, have experimented with creating putrid oozes by creating disgusting slurries and exposing them to Abyssal rifts and foul energies. To date, the cultists have been unsuccessful in their endeavors, but the cult has captured half a dozen of these creatures for study. They see the spontaneous creation of these oozes as manifestations of their Faceless Lord. When putrid oozes are attacked and take enough damage to destroy them, they melt into an inert pool of muck as other oozes do, though whether putrid oozes eventually reform from such remnants is a point of debate. Some say that sunlight further breaks down putrid oozes once they are destroyed. Since the Worldwound has irregular patterns of daylight and even less sunlight, it is a relatively hospitable habitat for them. Regardless, because the Worldwound is seemingly growing at a steady rate, scholars believe these oozes will remain denizens of the region for generations to come. Habitat & Society Putrid oozes inhabit most corners of the Worldwound region, particularly in areas that bear the strongest Abyssal influence. Being mindless and thus lacking any sort of culture, putrid oozes have no use for each other-or for any other creatures, for that matter, outside of their ability to serve as prey. In particularly isolated parts of the Worldwound, where wildlife is rarely encountered, putrid oozes turn on each other to eat. In these cases, the intense stench of sulfur and death emanating from the creatures-as well as any undigested food still churning away inside full oozes' bulk-draws other putrid oozes to one another. When putrid oozes feed on their own kind, they project narrow pseudopods into the bodies of their intended target in an attempt to fish out some half-digested food and draw it into their own bulk. Those who have studied these strange creatures note that the use of these pseudopods is exclusive to cannibalistic behavior. Among the crusaders and other goodly souls who inhabit the Worldwound, putrid oozes are considered yet another affront to the free and natural beauty that was once Sarkoris. Many superstitious people consider putrid oozes instruments of the Abyss's destruction-evil blobs that seek to help the demons rule the region. The more rational-minded know that putrid oozes simply attack all living creatures with impunity, including wildlife, plants, demons, and crusaders alike. Those who have had the misfortune of encountering a putrid ooze and lived to tell about it warn all those who venture deep into the Worldwound to stay alert for the smell of sulfuric decay, the sound of gravel grating against bone, and the sight of suspiciously deep slurries and sludge; these are all signs of a nearby putrid ooze.",
    organization: "solitary",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 0
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      acid: {
        type: "Ex",
        text: "A putrid ooze secretes a digestive acid that dissolves organic material and metal quickly, but doesn't affect stone. Each time a creature takes damage from a putrid ooze's acid, its clothing and armor take the same amount of damage from the acid (Reflex DC 23 negates damage to clothing and armor). A metal or wooden weapon that strikes a putrid ooze takes 2d6 points of acid damage, unless the weapon's wielder succeeds at a DC 23 Reflex save. If a putrid ooze remains in contact with a wooden or metal object for 1 full round, the object takes 30 points of acid damage (no save). The save DCs are Constitution-based."
      },
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "6d6+16 plus 2d6 acid"
      },
      splatter: {
        type: "Ex",
        text: "As a standard action, a putrid ooze can throw a portion of its acidic sludge at a creature within 30 feet. The putrid ooze must make a successful ranged touch attack to hit the target. Creatures struck take 3d6 points of acid damage."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    },
    resistances: [
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

};
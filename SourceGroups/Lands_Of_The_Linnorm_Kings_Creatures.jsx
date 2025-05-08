
export const Lands_Of_The_Linnorm_KingsCreatures = {
  Fafnheir: {
    source: "Lands Of The Linnorm Kings",
    creatureType: "dragon",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Colossal",
    hd: 27,
    hdVal: 12,
    cr: 24,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Scent",
      "True Seeing"
    ],
    speed: {
      base: 50,
      burrow: 30,
      maneuverability: "Average",
      fly: 100,
      swim: 50
    },
    abilities: {
      str: 45,
      dex: 30,
      con: 36,
      int: 18,
      wis: 27,
      cha: 29
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
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Claw",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Gore",
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
        weapon: "Bite",
        name: "Bite",
        specialAbility: "poison",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Gore",
        name: "Gore",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        specialAbility: "grab",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "dragon traits",
      "Immune to curse effects, electricity, fire, mind-affecting effects, poison, sleep"
    ],
    defense: {
      DR: {
        value: 20,
        damageType: "cold iron and epic"
      },
      SR: {
        value: 35
      },
      naturalArmor: 30
    },
    space: "30 ft.",
    reach: "30 ft.",
    environment: "any (Grungir Forest)",
    visualDescription: "The scales of this craggy serpentine dragon are scarred and blackened. Its eyes flare with nightmarish power, and its mouth drips with liquid flame.",
    description: "Called the Father of All Linnorms, Fafnheir is the oldest and mightiest of his kind to dwell upon Golarion-other, even more powerful linnorms exist on the First World, but on Golarion, Fafnheir is king. Crafty and powerful, Fafnheir is more than just a creature of rage or hunger, and is sometimes known to speak with those who come to him as supplicants for his wisdom. Tales say that to gain Fafnheir's advice, one must travel through Grungir Forest to the cavern entrance of the linnorm's lair, whereupon the supplicant must call into the opening several secret names for the ancient linnorm. A single step into the lair renders the supplication moot, for Fafnheir does not suffer intrusions. It is customary to bring a herd of sheep, oxen, or several thralls for him to feast upon. Those who find Fafnheir in a talkative mood and live to tell the tale report that the linnorm is well versed in numerous fields, and capable of working a wide range of magic through wishcrafting, though how much of his bragging is true is debatable. Fafnheir claims to have been the first linnorm to cross to Golarion from the First World after slaying three of that realm's Eldest, as well as to remember a time when the dragon god Dahak came to this world, and to have taken part in ancient battles against humanity as an ally of the serpentfolk. Certain Thassilonian accounts give support to his claim of providing advice and aid at times to Runelord Xanderghul, and he endured the Age of Darkness with ease. The past few thousand years have passed in the blink of an eye for the ancient linnorm, and he expects to survive for thousands more. Fafnheir is aware of the prophecy that the hero who kills him will become king of all Ulfen. The linnorm also knows that in death he will be reborn from the burnt flesh of his slayer, and suggests to those who raise this topic with him that only by becoming him can such a Linnorm King rule. While Fafnheir has seen many challengers, few have offered him a true battle. Fafnheir spends much of his time slumbering, but wakes quickly at the slightest deviation in the patterns of the world around him, and his dreaming mind touches the woods above and the blood of his children. Those who would come upon him unawares should not expect success unless they travel into his lair from other worlds, for his attunement to Grungir Forest is uncanny. The linnorm rarely ventures far from his lair, preferring to lure his enemies close and dispatch them on familiar ground. He loves nothing but his treasure, and cannot be bribed or threatened-the lure of potential treasure does not excite him nearly as much as what he already possesses. He is a subtle combatant, preferring to use trickery before launching into melee. Unlike his lesser kin, Fafnheir has a number of potent, if limited, spell-like abilities, and he often uses his limited wishes to great effect. He has long experience with direct confrontation, and his millennia of action have taught him tricks that few remember. He is one of the most deadly creatures in the Inner Sea region, and even the mightiest dragons fear his power.",
    organization: "solitary",
    languages: "Aklo, Common, Draconic, Skald, Sylvan",
    spellLikeAbilities: [
      {
        name: "dispel magic, greater",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "dispel magic, greater",
        casterLevel: 20,
        limitations: "Metamagic: Quicken ",
        timesPerDay: 3
      },
      {
        name: "limited wish",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "plane shift",
        casterLevel: 20,
        limitations: "between First World and Material Plane only",
        timesPerDay: 3
      },
      {
        name: "spell turning",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "wall of force",
        casterLevel: 20,
        timesPerDay: 3
      }
    ],
    skills: {
      Fly: {
        ranks: 35
      },
      Intimidate: {
        ranks: 27
      },
      "Knowledge (arcana)": {
        ranks: 27
      },
      "Knowledge (geography)": {
        ranks: 27
      },
      "Knowledge (history)": {
        ranks: 27
      },
      "Knowledge (nature)": {
        ranks: 27
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
      Stealth: {
        ranks: 27
      },
      Swim: {
        ranks: 27
      },
      "Use Magic Device": {
        ranks: 27
      }
    },
    special: {
      "breath weapon": {
        type: "Su",
        text: "Once every 1d4 rounds as a standard action, Fafnheir can breathe a 90-foot cone of burning wind, dealing 26d10 points of fire damage to all creatures in the area of effect. A DC 36 Reflex save halves the fire damage dealt. The save DC is Constitution-based. This wind has two additional effects as well. Deafening: Any creature in the area of effect that does not succeed at a DC 36 Fortitude save is deafened by the thunderous wind. Storm-Laced: The closest creature to Fafnheir in the area of effect is also blasted by a bolt of lightning and takes 20d6 points of electricity damage in addition to the fire damage dealt. This creature can make a second DC 36 Reflex save to halve this electricity damage. Tornado Force: The winds themselves gust at nearly 300 miles per hour, affecting all creatures in the area of effect as if they were caught in tornado-force winds. The wind lasts only a few moments during Fafnheir's action, so it has no real effect on ranged attacks, but it blows away any Large or smaller creature (or Huge or smaller flying creature) that fails a DC 15 Strength check."
      },
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "tail, 4d6+8"
      },
      "death curse": {
        type: "Su",
        text: "Fafnheir is a difficult creature to slay, especially since he lives on in the body of any creature that slays him. When a creature slays Fafnheir, it becomes afflicted by the Curse of Fafnheir. Curse of Fafnheir: save Will DC 32; effect creature's sense of self erodes as its personality is slowly replaced by Fafnheir's-this manifests as 1d6 points of Charisma drain every 24 hours. A target whose Charisma drops to 0 becomes comatose and must immediately make a DC 32 Fortitude save or die; every 24 hours that passes thereafter, the victim must make a new Fortitude save to avoid death (unless its Charisma score rises above 0, at which point it takes 1d6 points of Charisma drain). If a creature dies from the effects of this curse, its body explodes in a 60-foot burst of burning wind, with effects identical to Fafnheir's breath weapon. This effect occurs if the cursed victim dies from any effect, not just from the curse. One round later, Fafnheir gains the effect of a true resurrection spell, appearing at the same spot where the cursed victim died (or the closest area large enough to contain the Colossal creature), with full memories of the cursed victim's doings and accomplishments while cursed. The only way to permanently slay Fafnheir is to avoid becoming cursed after killing him, or to remove the curse before the victim dies. The effects of this curse end prematurely and immediately if Fafnheir is restored to life by other means. The save DC is Charisma-based."
      },
      "freedom of movement": {
        type: "Ex",
        text: "Fafnheir is under the constant effect of freedom of movement, as the spell of the same name. This effect cannot be dispelled."
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Su",
        text: "Bite-injury; save Fort DC 34; frequency 1/round for 10 rounds; effect 10d6 fire damage and 1d4 drain from each ability score; cure 3 consecutive saves. The save DC is Constitution-based. True Seeing (Ex) Fafnheir has true seeing, as the spell of the same name. This effect cannot be dispelled.",
        saveDC: 8
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  "Fey Wolverine": {
    source: "Lands Of The Linnorm Kings",
    creatureType: "fey",
    subTypes: [
      "augmented"
    ],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Medium",
    hd: 3,
    hdVal: 8,
    cr: 3,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 40,
      burrow: 20,
      climb: 20
    },
    abilities: {
      str: 15,
      dex: 19,
      con: 15,
      int: 12,
      wis: 14,
      cha: 14
    },
    feats: [
      {
        name: "Skill Focus",
        type: "General",
        value: "Bluff",
        choiceSource: "Skill Focus"
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
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "cold iron"
      },
      SR: {
        value: 14
      },
      naturalArmor: 3
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "cold forests",
    visualDescription: "This wolverine's eyes possess the unmistakable glint of intelligence, and its mouth seems to twitch as if it were about to laugh.",
    description: "Creating a Fey Animal \"Fey animal\" is an inherited or acquired template that can be added to a living, corporeal animal (referred to hereafter as the base creature). A fey animal uses all the base creature's statistics and special abilities except as noted here. CR: Same as the base creature +1. Type: Creature type changes to fey. It gains the augmented subtype. Do not recalculate Hit Dice, Base Attack Bonus, skills, or saves. Alignment: Any chaotic. Armor Class: A fey creature's natural armor bonus increases by +1. Special Qualities and Defenses: A fey animal gains Darkvision 60 feet and Low-Light Vision if it didn't already possess it. It also gains DR 5/cold iron (DR 10/cold iron if it has 11 or more Hit Dice) and SR equal to its CR + 11. Speed: All of the fey creature's movement speeds increase by 10 feet. Special Attacks: A fey animal gains the special attack described below. Save DCs are equal to 10 + 1/2 the fey animal's Hit Dice + the fey animal's Charisma modifier. Death Curse (Su): When a creature slays a fey animal, the slayer is cursed with ill luck unless it makes a successful Will saving throw to resist the curse. If it fails to resist, the victim takes a -2 penalty on all attack rolls, ability checks, skill checks, and saving throws until the curse is removed. The total penalty from multiple fey animal death curses stacks, but the multiple death curses count as a single curse overall for the purposes of removing its effects. A fey creature can see this curse on a creature as an angry red halo around the victim's head. Spell-Like Abilities: A fey animal has a cumulative number of spell-like abilities set by its HD. Unless otherwise noted, an ability is usable 1/day. The CL equals the fey animal's CR. HD Spell-Like Abilities 1-3 charm person, faerie fire 4-6 fly (3/day), tree shape 7-9 charm monster, hallucinatory terrain 10-13 polymorph (3/day), summon nature's ally IV 14-16 feeblemind, transport via plants 17 or higher mass charm monster, summon nature's ally VIII Abilities: Dex +4, Int +10 (to a maximum score of 12), Wis +2, Cha +4. Skills: A fey animal gains a +4 racial bonus on Bluff and Stealth checks, and has skill points per racial Hit Die equal to 6 + its Intelligence modifier. Its racial class skills are Acrobatics, Bluff, Climb, Diplomacy, Fly, Knowledge (nature), Perception, Sense Motive, Stealth, and Swim. Languages: Fey animals speak Sylvan plus one other language common to the region.",
    organization: "solitary",
    languages: "Skald, Sylvan",
    spellLikeAbilities: [
      {
        name: "charm person",
        casterLevel: 3,
        timesPerDay: 1
      },
      {
        name: "faerie fire",
        casterLevel: 3,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 2
      },
      Bluff: {
        ranks: 4
      },
      Climb: {
        ranks: 3
      },
      "Knowledge (nature)": {
        ranks: 3
      },
      Perception: {
        ranks: 3
      },
      "Sense Motive": {
        ranks: 3
      },
      Stealth: {
        ranks: 7
      }
    },
    special: {
      "death curse": {
        type: "Ex",
        preText: "DC 13"
      },
      rage: {
        type: "Ex"
      }
    }
  },

  "Mountain Troll": {
    source: "Lands Of The Linnorm Kings",
    creatureType: "humanoid",
    subTypes: [
      "giant"
    ],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Huge",
    hd: 18,
    hdVal: 8,
    cr: 14,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 40,
      burrow: 10,
      climb: 40
    },
    abilities: {
      str: 36,
      dex: 13,
      con: 25,
      int: 7,
      wis: 16,
      cha: 8
    },
    feats: [
      {
        name: "Awesome Blow",
        type: "Combat"
      },
      {
        name: "Deadly Aim",
        type: "Combat"
      },
      {
        name: "Improved Bull Rush",
        type: "Combat"
      },
      {
        name: "Improved Iron Will",
        type: "General"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Quick Draw",
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
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Rock",
        name: "Rock",
        damage: "2d8"
      }
    ],
    defense: {
      naturalArmor: 20
    },
    space: "15 ft.",
    reach: "15 ft.",
    environment: "cold mountains",
    visualDescription: "This enormous, stooped creature has powerful limbs; a mane of gritty brown fur; and a ferocious, tusked underbite.",
    description: "Though grotesque, charmless, and prone to fits of violence, mountain trolls are not inherently evil, nor do they always attack intruders on sight. A mountain troll prefers to withdraw and observe before entering combat, lumbering forth to attack only if intruders make clear their intentions to harm it or its allies, or if the newcomers seem to be encroaching upon the troll's territory rather than simply passing through. Once enraged, a mountain troll is a savage opponent, calling upon its native strength and alliances with elementals to bury its opponents in stone or spread their entrails across the slopes. Mountain trolls prefer to live in narrow ravines or shallow caves that allow them to look out over the landscape. They sometimes knuckle-walk like a gorilla, but when angered they rear up to their full height of nearly 30 feet. Mountain trolls have a close association with the First World, similar to that possessed by gnomes, which grants them magical abilities and unusual patience. They are quick to forge alliances with fey, and while they see smaller trolls as sadists, they nonetheless feel a sort of familial responsibility. Lesser trolls often capitalize upon mountain trolls' generosity, but take care to abide by their larger cousins' rules when sheltering in their homes. Mountain trolls have even been known to aid explorers or give advice, provided they are treated with respect.",
    organization: "solitary or pair",
    languages: "Giant",
    spellLikeAbilities: [
      {
        name: "stone shape",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "spike stones",
        casterLevel: 14,
        timesPerDay: 3
      },
      {
        name: "stone tell",
        casterLevel: 14,
        timesPerDay: 3
      },
      {
        name: "earthquake",
        casterLevel: 14,
        timesPerDay: 1
      },
      {
        name: "flesh to stone",
        casterLevel: 14,
        timesPerDay: 1
      },
      {
        name: "summon monster viii",
        casterLevel: 14,
        limitations: "earth elemental only",
        timesPerDay: 1
      }
    ],
    skills: {
      Climb: {
        ranks: 1
      },
      Perception: {
        ranks: 12
      }
    },
    special: {
      rend: {
        universalMonsterAbility: "Rend",
        type: "Ex",
        weaponName: 3
      },
      "rock throwing": {
        universalMonsterAbility: "Rock Throwing",
        type: "Ex",
        range: "120 ft."
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        damageType: "acid or fire",
        value: 10
      },
      "rock catching": {
        universalMonsterAbility: "Rock Catching"
      },
      stubborn: {
        type: "Ex",
        text: "A mountain troll gains a +4 racial bonus on all Will saving throws. In addition, if the troll fails a saving throw against a charm or compulsion effect, it can immediately attempt a second saving throw against the same effect on the next round to end the duration of the effect early."
      }
    }
  },

};
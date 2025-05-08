
export const Beyond_The_Doomsday_DoorCreatures = {
  Yamasoth: {
    source: "Beyond The Doomsday Door",
    creatureType: "outsider",
    subTypes: [
      "chaotic",
      "evil",
      "extraplanar",
      "qlippoth"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Gargantuan",
    hd: 27,
    hdVal: 10,
    cr: 24,
    racialFeatures: [
      "All-Around Vision",
      "Darkvision 60 ft.",
      "Detect Good",
      "Detect Law",
      "True Seeing"
    ],
    speed: {
      base: 30,
      maneuverability: "Good",
      fly: 60
    },
    abilities: {
      str: 36,
      dex: 25,
      con: 38,
      int: 25,
      wis: 21,
      cha: 22
    },
    feats: [
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Greater Vital Strike",
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
        value: "Tentacle",
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
        name: "Quicken Spell-Like Ability",
        type: "Monster",
        value: "Baleful polymorph",
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
        weapon: "Maw",
        name: "Maw",
        specialAbility: "Maw",
        damage: "2d10"
      },
      {
        weapon: "Bite",
        name: "4 Bites",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Tentacle",
        name: "6 Tentacles",
        specialAbility: "grab",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to death effects"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "cold iron and lawful"
      },
      SR: {
        value: 35
      },
      naturalArmor: 25
    },
    space: "20 ft.",
    reach: "20 ft. (30 ft. with tentacles)",
    environment: "any (Sekatar-Seraktis)",
    visualDescription: "Writhing, hook-covered tentacles unfurl from this behemoth's body, at the center of which gapes a maw with a red eye in its throat.",
    description: "Yamasoth, known also as the Polymorph Plague, dwells in the endless cavern realm of Sekatar- Seraktis in the Abyss. Constantly at war with bickering balor lords and other powerful demons, Yamasoth has held his own as the lord of the Abyss's largest, most centralized region: the Kingdom of New Flesh. The \"new flesh\" in question consists of the qlippoth lord's subjects- men and women from countless worlds who may have been kings and queens at one time, but here are nothing more than base monsters, vermin, and beasts to serve at Yamasoth's whim. Some he feeds upon. Others he keeps for his harem. But the bulk of the denizens of the Kingdom of New Flesh are soldiers. In this army, other qlippoth serve as commanders and generals, particularly Yamasoth's favored minions, the gongorinans (see page 90). Unlike most qlippoth, Yamasoth does not necessarily prefer to kill but rather to transform. A human who sins and dies produces a soul that fuels the demonic horde, but a dumb beast or feral monster who dies is merely carrion. By transforming free-willed mortals into monsters, Yamasoth's Army of the New Flesh only becomes more capable of ending worlds. Yamasoth's centuries-long alliance with Runelord Alaznist may have eventually resulted in such an assault on Golarion, but the devastation of Earthfall ended those plans before Yamasoth's burgeoning realm could finalize its gestation-proof that even in the greatest of disasters, some good is wrought. Yamasoth's interest in transformations goes far beyond mere polymorphing. The qlippoth lord is also fascinated by the act of fleshwarping and reworking life into new forms of mutants. Rumors state that the nature of the experiments that take place deep in the Kingdom of New Flesh closely mimic those the daemons performed in the Abyss so long ago that resulted in the first demons. In fact, some dissident demonologists claim Yamasoth himself is a nascent demon lord, and is in fact that first, primal demon born of daemonic tampering with Abyssal quintessence and sinful souls.",
    organization: "solitary or group (Yamasoth plus 2d6 gongorinans and 2d6 various polymorphed minions)",
    languages: "Abyssal; telepathy 300 ft.",
    spellLikeAbilities: [
      {
        name: "cloak of chaos",
        casterLevel: 20,
        timesPerDay: -1
      },
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
        name: "fly",
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
        name: "statue",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "stone shape",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "telekinesis",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "baleful polymorph",
        casterLevel: 20,
        limitations: "Metamagic: Quicken ",
        timesPerDay: 3
      },
      {
        name: "flesh to stone",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "phase door",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "polymorph any object",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "wall of stone",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "earthquake",
        casterLevel: 20,
        timesPerDay: 1
      },
      {
        name: "summon",
        casterLevel: 20,
        limitations: "level 9, any qlippoth or combination of qlippoth whose total combined CR is 20 or lower 100%",
        timesPerDay: 1
      }
    ],
    skills: {
      Fly: {
        ranks: 32,
        bonuses: [
          {
            source: "inherent",
            value: 10
          }
        ]
      },
      Intimidate: {
        ranks: 30
      },
      "Knowledge (arcana)": {
        ranks: 30
      },
      "Knowledge (planes)": {
        ranks: 27
      },
      "Knowledge (dungeoneering)": {
        ranks: 27
      },
      "Knowledge (history)": {
        ranks: 27
      },
      "Knowledge (nature)": {
        ranks: 27
      },
      "Knowledge (religion)": {
        ranks: 27
      },
      Perception: {
        ranks: 27
      },
      "Sense Motive": {
        ranks: 27
      },
      Spellcraft: {
        ranks: 30
      },
      Stealth: {
        ranks: 27
      },
      "Use Magic Device": {
        ranks: 30
      }
    },
    special: {
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "2d6+13"
      },
      "gaze weapon": {
        type: "Su",
        text: "As a free action at the start of his turn, Yamasoth can gape his central maw wide to expose the horrific red eye lodged in what should be his throat. This gaze weapon has a range of 30 feet, and polymorphs creatures affected by it into giant vermin, animals, or magical beasts (Fortitude DC 37 resists). Yamasoth chooses what creatures to transform victims into as they fail their saving throws. This effect otherwise functions as polymorph any object (CL 20th), and is a polymorph effect. Yamasoth can keep his maw open for up to 3 consecutive rounds, after which his throat-eye closes and this gaze weapon cannot be used again for 1 minute. The save DC is Constitution-based. Horrific Appearance (Su) Creatures that succumb to Yamasoth's horrific appearance are stunned. At the start of each round thereafter, a creature stunned in this way can make a choice- fight the overwhelming chaos and horror and attempt a new DC 29 Will save to end the stun effect and act normally on that round, or accept the chaos into its soul and automatically succeed at the save to recover from the stun effect. This latter option immediately shifts the creature's alignment one step closer to chaotic evil. This shift in alignment can be fixed via atonement, but counts as a voluntary alignment shift for the purposes of atonement's material component requirements. A creature that becomes chaotic evil as a result of this also becomes a willing minion and ally of Yamasoth."
      },
      "horrific appearance": {
        type: "Su",
        text: "Creatures that succumb to Yamasoth's horrific appearance are stunned. At the start of each round thereafter, a creature stunned in this way can make a choice- fight the overwhelming chaos and horror and attempt a new DC 29 Will save to end the stun effect and act normally on that round, or accept the chaos into its soul and automatically succeed at the save to recover from the stun effect. This latter option immediately shifts the creature's alignment one step closer to chaotic evil. This shift in alignment can be fixed via atonement, but counts as a voluntary alignment shift for the purposes of atonement's material component requirements. A creature that becomes chaotic evil as a result of this also becomes a willing minion and ally of Yamasoth.",
        preText: "DC 29"
      },
      "polymorph plague": {
        type: "Su",
        text: "Any creature that has been affected by one of Yamasoth's polymorph effects becomes \"contagious.\" For 24 hours after the creature's initial transformation, any other creature that touches or is touched by the polymorphed creature must succeed at a Fortitude save (DC = 10 + 1/2 the polymorphed creature's HD + the polymorphed creature's Constitution modifier) to resist polymorphing into a creature identical to the current form of the polymorphed creature."
      },
      rend: {
        universalMonsterAbility: "Rend",
        type: "Ex",
        weaponName: 9
      },
      "tentacle transformation": {
        type: "Su",
        text: "At the start of every odd-numbered round, three of Yamasoth's tentacle tips transform into one of three different types of appendages-a serpent's head, a clawed hand, or a metallic blade. The three tentacles all change into the same type of attack, and the change persists for 1 full round, after which the three tentacles revert to normal tentacles on every even-numbered round. While transformed, the limbs make the following types of attacks instead of tentacle attacks. • Blade: talon +36 (3d6+13/19-20) • Clawed Hand: claw +36 (2d6+13 plus bleed damage equal to the damage dealt by the claw) • Serpent Head: bite +36 (1d8+13 plus poison: bite- injury; save Fort DC 37; frequency 1/round for 12 rounds; effect 1d4 Dex drain and slowed for 1 round; cure 3 consecutive saves)"
      },
      "qlippoth lord traits": {
        type: "Ex"
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        damageType: "lawful",
        value: 15
      },
      "cloak of chaos": {
        type: "Ex",
        preText: "DC 24"
      },
      maw: {
        type: "Ex",
        text: "Yamasoth's central maw is a primary attack that threatens a critical hit on a roll of 19-20. A creature hit by Yamasoth's maw while his gaze weapon is active takes a -4 penalty on its next saving throw against the gaze attack."
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
        damageType: "electricity",
        value: 30
      },
      {
        damageType: "fire",
        value: 30
      }
    ]
  },

  "End's Voice": {
    source: "Beyond The Doomsday Door",
    creatureType: "outsider",
    subTypes: [
      "chaotic",
      "extraplanar"
    ],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Large",
    hd: 18,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Trueseeing"
    ],
    speed: {
      base: 40,
      maneuverability: "Average",
      fly: 40
    },
    abilities: {
      str: 18,
      dex: 17,
      con: 24,
      int: 17,
      wis: 16,
      cha: 22
    },
    feats: [
      {
        name: "Combat Casting",
        type: "General"
      },
      {
        name: "Combat Expertise",
        type: "Combat"
      },
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Heavy flail",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Iron Will",
        type: "General"
      },
      {
        name: "Improved Sunder",
        type: "Combat"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Heavy flail",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Heavy flail",
        enchantments: [
          {
            name: "Enhancement Bonus +1",
            source: "inherent"
          },
          {
            name: "Shock",
            source: "inherent"
          }
        ],
        name: "Heavy flail",
        specialAbility: "maddening strike",
        damage: "1d10"
      }
    ],
    immunities: [
      "Immune to confusion, insanity"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "law and magic"
      },
      SR: {
        value: 26
      },
      naturalArmor: 16
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any (Astral Plane or Pharasma's Boneyard)",
    visualDescription: "A long crimson cloak drapes over the form of this large faceless being, which floats just above the ground on footless legs as its menacing flail crackles with blue currents of electricity.",
    description: "Groetus's herald is End's Voice, an enigmatic creature that is both more and less mysterious than its master. It looks like a giant shrouded figure floating above the ground, legless and faceless, wielding a heavy flail with ends made of glowing energy. Its visage is often confused with a reaping undead, though it is a living outsider and acts mildly insulted when others assume it to be otherwise. Its voice is hollow and distorted, as if echoing from the far end of a long metal tube, and colored with accents from ruined empires and dead languages. It rarely comes to Golarion, and for most of these visits it is merely a silent witness to a great slaughter upon the battlefield or the last gasp of a dying city, though it may strike out with its weapon or magic at a seemingly random wounded or dying target, as if making sure the creature dies as expected. The herald may be insane from associating with Groetus, but it has a clarity unknown to mortal worshipers of the God of the End Times; perhaps its vast knowledge somehow protected it from a truly insane fate, or its status as a herald may give it a kind of lucidity that pierces the fog of madness. It does not cackle at itself like a madman, respond to unheard voices, kill for pleasure, or exhibit any of a dozen other obvious signs of insanity typically exhibited by the mad followers of Groetus. Ecology End's Voice does not eat, drink, or breathe; it lacks a face or mouth, and cannot be bribed with food or pleasure. It acts like an unfeeling thing, more patient than a mountain, slowly scouring away at existence like the ocean's tide or a desert wind. It has no role in the creation of life, and does not seem to take any part in the cultivation or upbringing of creatures or civilizations. Though it is known to kill without being provoked, it only does so if the target has already suffered serious harm or is on the brink of death, and even these it may ignore; it has drifted over a bloody battle, passing hundreds of dying heroes and off icers, only to strike at a single common soldier before vanishing. Once, it killed a human woman moments after a diff icult but successful birth, and chose to spare the child. It acts in this callous way toward mortals, undead, outsiders, and even dragons, but never against mindless creatures or those with animal-level intellect. Perhaps these killings are the directive of Groetus, steering a soul's course in the afterlife or preventing some future event; perhaps they represent an obscure code, with the time of death and name of the deceased unlocking a cipher over the course of a millennium; or perhaps they are just random acts of violence, the only evidence of the creature's tightly suppressed lunacy. If attacked, End's Voice retaliates, though sometimes it ends combat simply by driving some or all of its opponents insane and then retreating. It may return to dispatch these defeated foes days, months, or years later, even on the victim's deathbed, or it may ignore them utterly and show no recognition if the healed opponents confront it again. When called by mortals, the herald demands specif ic deeds of death, injury, or property damage, for End's Voice always seeks to further the end of times. For example, it may ask that every third adult male in a village be branded on the face with a mysterious symbol, or that a prince with black hair be nearly drowned, or a castle's eastern wall be cracked but left standing. Usually, these acts have no apparent link to the needs of the herald's conjurer, and most create a series of events that takes years or decades to play out. It favors the burning of incense and exotic woods, lingering over the fragrant smoke and making strange contortions. HABITAT & SOCIETY When not serving Groetus or called by the faithful to perform a specif ic task, the herald flies over the surface of Groetus's moon, pausing to alter parts of the writing on the surface or draw runes on a blank area untouched by the god's madness. Sometimes it can be seen curled up there on the moon or reclining somewhere on the Astral Plane as if sleeping, though the eerie being is clearly not at rest. It makes no gestures of friendship or comradeship toward other divine servants of Groetus, though it accepts their presence (and their insanity) as if used to them. On one occasion, it absorbed a servitor into itself, inhaling the creature like smoke, then expelling it a year later with no explanation or apparent harm to the creature.",
    organization: "solitary",
    languages: "Aklo, Ancient Osiriani, Azlanti, Common, Cyclops, Draconic, Orvian; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "foresight",
        casterLevel: 18,
        limitations: "self only",
        timesPerDay: -1
      },
      {
        name: "true seeing",
        casterLevel: 18,
        limitations: "self only",
        timesPerDay: -1
      },
      {
        name: "arcane eye",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "bleed",
        casterLevel: 18,
        limitations: "Metamagic: Quicken ",
        timesPerDay: -1
      },
      {
        name: "hideous laughter",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "knock",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "magic missile",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "shatter",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "telepathic bond",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "touch of idiocy",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "true strike",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "confusion",
        casterLevel: 18,
        timesPerDay: 5
      },
      {
        name: "contact other plane",
        casterLevel: 18,
        limitations: "see below",
        timesPerDay: 5
      },
      {
        name: "feeblemind",
        casterLevel: 18,
        timesPerDay: 5
      },
      {
        name: "teleport, greater",
        casterLevel: 18,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: 5
      },
      {
        name: "mind fog",
        casterLevel: 18,
        timesPerDay: 5
      },
      {
        name: "nightmare",
        casterLevel: 18,
        timesPerDay: 5
      },
      {
        name: "phantasmal killer",
        casterLevel: 18,
        timesPerDay: 5
      },
      {
        name: "break enchantment",
        casterLevel: 18,
        timesPerDay: 1
      },
      {
        name: "disintegrate",
        casterLevel: 18,
        timesPerDay: 1
      },
      {
        name: "harm",
        casterLevel: 18,
        timesPerDay: 1
      },
      {
        name: "insanity",
        casterLevel: 18,
        timesPerDay: 1
      },
      {
        name: "mage's disjunction",
        casterLevel: 18,
        timesPerDay: 1
      },
      {
        name: "invisibility, mass",
        casterLevel: 18,
        timesPerDay: 1
      },
      {
        name: "moment of prescience",
        casterLevel: 18,
        timesPerDay: 1
      },
      {
        name: "power word kill",
        casterLevel: 18,
        timesPerDay: 1
      },
      {
        name: "weird",
        casterLevel: 18,
        timesPerDay: 1
      }
    ],
    skills: {
      "Disable Device": {
        ranks: 15
      },
      Fly: {
        ranks: 15
      },
      Intimidate: {
        ranks: 18
      },
      "Knowledge (geography)": {
        ranks: 15
      },
      "Knowledge (history)": {
        ranks: 18
      },
      "Knowledge (religion)": {
        ranks: 18
      },
      Perception: {
        ranks: 15
      },
      "Sense Motive": {
        ranks: 15
      },
      Spellcraft: {
        ranks: 15
      },
      Stealth: {
        ranks: 15
      },
      "Use Magic Device": {
        ranks: 18
      },
      Acrobatics: {
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      }
    },
    special: {
      "destructive aura": {
        type: "Su",
        text: "As a swift action, the herald can emit a 30-foot aura of destruction for 15 rounds per day. All attacks made against targets in this aura (including the herald) gain a +7 morale bonus on damage rolls, and all critical threats are automatically confirmed. These rounds do not need to be consecutive."
      },
      madness: {
        type: "Ex",
        text: "The herald uses its Charisma modifier on Will saves instead of its Wisdom modifier, and is immune to insanity and confusion effects. Only a miracle or wish can remove its madness. If this occurs, the herald gains 6 points of Wisdom and loses 6 points of Charisma; it automatically reverts to its insane state 1d10 minutes later. Telepathic Bond (Sp) This ability functions like telepathic bond, except any creature linked to the herald's disturbing thoughts takes 1 point of Wisdom damage every 10 minutes."
      },
      "no breath": {
        universalMonsterAbility: "No Breath",
        text: ""
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        value: null
      },
      "maddening strike": {
        type: "Su",
        text: "If the herald successfully hits a creature with its flail, as a swift action it may force the opponent to make a DC 25 Will save. If the creature fails its save, it is confused for 1 round. The save DC is Charisma-based."
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
        damageType: "electricity",
        value: 30
      },
      {
        damageType: "fire",
        value: 30
      }
    ]
  },

  Kere: {
    source: "Beyond The Doomsday Door",
    creatureType: "outsider",
    subTypes: [
      "psychopomp",
      "extraplanar"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 12,
    hdVal: 10,
    cr: 10,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Spiritsense"
    ],
    speed: {
      base: 30,
      maneuverability: "Perfect",
      fly: 30
    },
    abilities: {
      str: 16,
      dex: 21,
      con: 18,
      int: 13,
      wis: 20,
      cha: 19
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
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Stealthy",
        type: "General"
      },
      {
        name: "Weapon Finesse",
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
            value: "1d6",
            appliesTo: "damageType",
            damageType: "cold"
          }
        ],
        type: "primary"
      },
      {
        weapon: "Shroud",
        name: "Shroud",
        specialAbility: "Shroud"
      }
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "adamantine"
      },
      SR: {
        value: 21
      },
      naturalArmor: 7
    },
    space: "5 ft.",
    reach: "5 ft. (15 ft. with shroud)",
    environment: "any (graveyards or the Boneyard)",
    visualDescription: "This unnaturally pale woman is dressed in the somber garb of a mourner, her countenance covered by a lengthy black veil.",
    description: "Certain places are sacred, settings meant to remain free of the raucous sounds and defiling touch of the living. Graveyards number among some of the most obvious of such places, where stone guardians and the buried weight of the dead bear on visitors with undeniable gravity. But certain forces disregard the fundamental sanctity of such ground-mortal and deathless heretics who use such places to hunt, feed, or cloak fouler deeds. Yet not all cemeteries are unguarded, and the vaporous shadows and palpable dread of some burial grounds suggest not corruption, but the custody of an ominous otherworldly guardian. Keres, like all psychopomps, are emissaries of the Boneyard, the necropolis that all mortals must traverse at the end of life. While most psychopomps concern themselves with the souls of the recently deceased, keres mind the resting places of the dead. Their stewardship derives not from any otherworldly care for the deteriorating dust left in the wake of mortal life, but rather from an interest in those who come seeking the dead where they lie. Such creatures often engage in perversions keres seek to oppose. To this end, keres take up lonely residences amid the tombs and monuments of graveyards, spreading an ominous air and giving rise to tales of hauntings and strange encounters to deter even the boldest intruders from trespassing upon the fields they tend. Keres appear as pale, sickly women standing about 5 feet tall and weighing less than 100 pounds. Ecology As otherworldly natives, keres have little direct impact on the world of the living, but the atmosphere they intentionally create is undeniable. To deter the living from treading upon the cemeteries they mind, keres employ tactics similar to those of mournful ghosts and mythical beings from storytellers' tales of spirits and haunts. Their presence fills the area they guard with a palpable dread, and they fill these cemeteries with baleful howling, somber illusions, and glimpses of their own ghastly forms. While they rarely create phantasmagoric images of the undead- out of a loathing for such perverse creatures-their unsettling displays of dangerous animals, lost children, whispering plants, shuddering gravestones, living statuary, pale doppelgangers, unnatural weather, and other eerie phenomena are typically more than enough to give a graveyard a haunted reputation. Habitat & Society A kere's exact methods usually matter little, as they tend to keep to more vulnerable, remote cemeteries, and prove most active when night cloaks the dark deeds of trespassers. But, occasionally, overzealous keres come into opposition with a fearful community and those sent to deal with the supposed haunting. Since their aloof nature causes them to avoid speaking directly with mortals, keres usually deal with would-be exorcists in the same manner they deal with other trespassers-by trying to frighten them away. Those who refuse to be frightened might be attacked, or faced with inquisitive illusions as a kere attempts to divine whether the interlopers are threats to her graveyard or not. More than once, a kere has been known to grow bored in her vigil and actively attempt to attract mortal visitants, but such attention-seeking psychopomps often find the added excitement isn't worth the bother. For all of the ambiance and grim reputations cultivated by keres, their primary objective upon the Material Plane is to preemptively thwart the deeds of necromancers and undead. To this end they terrorize grave robbers, harry the work of dark cultists, and openly attack the unliving. Any undead beings who enter or manifest in a cemetery under a kere's care find the weight of eternity crushing down upon them, making the most common sorts easy prey for these sentinel psychopomps. In some cases, though, more powerful undead might find ways to undermine a kere's defenses, or even drive her off. Such desperate keres have been known to grudgingly seek out aid, typically from the church of Pharasma or fringe-dwelling magic-users, in countering the taint of undeath.",
    organization: "solitary",
    languages: "Abyssal, Celestial, Common, Infernal",
    spellLikeAbilities: [
      {
        name: "ghost sound",
        casterLevel: 11,
        timesPerDay: -1
      },
      {
        name: "invisibility, greater",
        casterLevel: 11,
        timesPerDay: -1
      },
      {
        name: "hide from undead",
        casterLevel: 11,
        timesPerDay: -1
      },
      {
        name: "minor image",
        casterLevel: 11,
        timesPerDay: -1
      },
      {
        name: "searing light",
        casterLevel: 11,
        timesPerDay: -1
      },
      {
        name: "whispering wind",
        casterLevel: 11,
        timesPerDay: -1
      },
      {
        name: "fog cloud",
        casterLevel: 11,
        timesPerDay: 3
      },
      {
        name: "mage's faithful hound",
        casterLevel: 11,
        timesPerDay: 3
      },
      {
        name: "mirage arcana",
        casterLevel: 11,
        timesPerDay: 3
      },
      {
        name: "speak with dead",
        casterLevel: 11,
        timesPerDay: 3
      },
      {
        name: "waves of fatigue",
        casterLevel: 11,
        timesPerDay: 3
      },
      {
        name: "gate",
        casterLevel: 11,
        limitations: "to the Boneyard or Material Plane only; planar travel only",
        timesPerDay: 1
      }
    ],
    skills: {
      "Escape Artist": {
        ranks: 0
      },
      Fly: {
        ranks: 15
      },
      Intimidate: {
        ranks: 15
      },
      "Knowledge (history)": {
        ranks: 15
      },
      "Knowledge (religion)": {
        ranks: 15
      },
      Perception: {
        ranks: 12
      },
      "Sense Motive": {
        ranks: 12
      },
      Stealth: {
        ranks: 12
      }
    },
    special: {
      "infectious fear": {
        type: "Su",
        text: "Any creature struck by a kere's shroud must succeed at a DC 20 Will save or become frightened for 2d4 rounds. Any creature that physically touches a creature frightened by this effect must succeed at a DC 20 Will save as well or also be frightened for 2d4 rounds (though the fear of the creature touched is not contagious). The save DC is Charisma-based.",
        preText: "DC 20"
      },
      "veil of tears": {
        type: "Su",
        text: "Any graveyard that hosts a kere is gloomier and more solemn. All exterior areas within such a graveyard are perpetually affected by darkness and mind fog (Will DC 20). Additionally, any undead creature that enters the area is also affected as per the spell slow (Will DC 20). Those who save against these effects are immune to the graveyard's veil of tears for the next 24 hours. Those who fail are affected by these penalties for as long as they remain in the graveyard. A veil of tears can be raised or lowered by the resident kere as a free action. The veil disperses if a kere leaves the graveyard or is destroyed, and rises upon her return. The veil can also be dispelled for 1 day by casting dispel magic or a similar spell upon the kere's bonded gravestone. The spell effects are cast at the kere's caster level (usually 11th). The saving throw DCs are based on the resident kere's Charisma."
      },
      "grave dependent": {
        type: "Su",
        text: "A kere is mystically bonded to a single gravestone-typically the most impressive or oldest in a graveyard-and must never stray more than 300 yards from it. A kere who moves 300 yards beyond her bonded grave immediately becomes visible and unable to use any of her spell-like abilities. A kere who is out of range of her bonded grave for 24 hours takes 1d6 points of Constitution damage, and another 1d6 points of Constitution damage every day of separation that follows-eventually, this separation kills the kere. A kere can break this bond or forge a new bond with a new grave by performing a 24-hour ritual and making a successful DC 20 Will save. If a kere is not bonded with a grave, she must either actively try to forge a new bond or attempt to return to the Boneyard (where she takes no penalties from not being bonded)."
      },
      "grave meld": {
        type: "Su",
        text: "A kere can meld with any gravestone or funerary sculpture, similarly to how the spell meld into stone functions. She can remain melded with such a structure as long as she wishes."
      },
      "grave tell": {
        type: "Sp",
        text: "This ability functions as the spell stone tell, but only affects stone funerary structures, like gravestones, cemetery monuments, lych-gates, mausoleums, and similar constructions. Infectious Fear (Su) Any creature struck by a kere's shroud must succeed at a DC 20 Will save or become frightened for 2d4 rounds. Any creature that physically touches a creature frightened by this effect must succeed at a DC 20 Will save as well or also be frightened for 2d4 rounds (though the fear of the creature touched is not contagious). The save DC is Charisma-based."
      },
      shroud: {
        type: "Ex",
        text: "A kere's shroud is an insubstantial thing that only a kere can touch. Creatures that come into contact with this shroud find it to be as insubstantial as mist-though they often do feel the terror it inspires. A creature that is unaware of a kere and is struck by her shroud is not aware that a weapon has struck it. A kere's shroud vaporizes upon its owner's death. Spiritsense (Su) A psychopomp notices, locates, and can distinguish between living and undead creatures within 60 feet, just as if she possessed the Blindsight ability. Spirit Touch (Ex) A psychopomp's natural weapons, as well as any weapon it wields, are treated as though they had the ghost touch weapon special ability."
      }
    }
  },

  Gongorinan: {
    source: "Beyond The Doomsday Door",
    creatureType: "outsider",
    subTypes: [
      "chaotic",
      "qlippoth",
      "evil",
      "extraplanar"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 11,
    hdVal: 10,
    cr: 11,
    racialFeatures: [
      "All-Around Vision",
      "Darkvision 60 ft."
    ],
    speed: {
      base: 40,
      climb: 40
    },
    abilities: {
      str: 23,
      dex: 23,
      con: 24,
      int: 13,
      wis: 18,
      cha: 20
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
        name: "Improved Critical",
        type: "Combat",
        value: "Scimitar",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
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
        name: "Weapon Focus",
        type: "Combat",
        value: "Scimitar",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Scimitar",
        enchantments: [
          {
            name: "Enhancement Bonus +1",
            source: "inherent"
          }
        ],
        name: "Scimitar",
        damage: "1d6"
      },
      {
        weapon: "Claw",
        name: "Claw",
        specialAbility: "bleed",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Sting",
        name: "Sting",
        specialAbility: "poison",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Pincer",
        name: "Pincer",
        specialAbility: "grab",
        damage: "1d6"
      }
    ],
    immunities: [
      "Immune to acid, mind affecting effects, polymorph effects"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "lawful"
      },
      SR: {
        value: 22
      },
      naturalArmor: 10
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any underground (the Abyss)",
    visualDescription: "This human-sized crablike creature scuttles on six stumpy legs, and each of its four arms sports a different method of inflicting pain.",
    description: "The gongorinans are the spawn of the nascent qlippoth lord Yamasoth, although one could be forgiven for thinking them of them less as offspring and more as parasites. A gongorinan's basic shape resembles that of an immense, stocky crab, save that they lack all of the features crabs have adapted for an aquatic life-gongorinans are terrestrial creatures. A typical gongorinan possesses no fewer than a dozen stalked eyes, and is capable of extending these eyes from the upper edges of its body just above its mouth to a length of nearly 3 feet, giving it extraordinary vision in all directions. A gongorinan's mouth is a complex tangle of sliding plates and toothy ridges that rasp and shriek against each other as it speaks and chews, but despite their frightening shapes, these mouthparts are ill-suited for making physical attacks; the gongorinan relies upon its arms for that. Each gongorinan has four of these, and each arm is a different, highly specialized appendage. The humanoid arm is used for fine manipulation or the wielding of weaponry, while the mantislike claw is used to shred flesh and create deep, bleeding wounds. The needle-covered tentacle is used to sting and inject a painful poison to stagger foes, while the pincer is used to snatch and hold victims close for oviposition. A typical gongorinan stands about 6 feet tall and weighs 800 pounds. When at rest, a gongorinan retracts its limbs into its rock-encrusted body, allowing it to appear remarkably like nothing more than a large, misshapen boulder. Larger specimens known as elder gongorinans exist (and often possess additional and even more dangerous arms), but these are quite rare on the Material Plane save for in the depths of Hollow Mountain. Ecology All gongorinans carry within their bodies a brood of horrific egg masses, yet these eggs are not used for the propagation of their kind (that process is governed by a more traditional and yet more nightmarish method best left unspoken). Instead, these eggs carry within their stony shells a raw quintessence of the Abyss, infused with the ichor-seed of the gongorinans' lord, Yamasoth. Whereas most creatures are driven to breed and multiply, the gongorinans are instead driven to seek out humanoid hosts for their eggs. The implantation happens via the gongorinan's mouth and a hideous ovipositor that's not quite tongue and not quite toothed prolapsing throat, but something worse. Fortunately for most who might encounter a gongorinan, the process of oviposition leaves the horrid creature open to attack and cannot be performed quickly, yet to the lone adventurer caught and overwhelmed by a gongorinan, this is small comfort indeed. Once an egg has been implanted, it takes many days to grow, and the gongorinan prefers to carry the unfortunate host off to restrain it in a hidden location. Victims are often cocooned in webs or left stranded in high cavern ledges far above the ground so that the egg can gestate. As it grows, the egg feeds on the victim's mind, absorbing the victim's intellect until it has reduced the host to a drooling wreck. At this point, the egg doesn't hatch so much as it merely merges with the host, effecting a horrific and permanent transformation into a monstrous form. The gongorinan can influence this ultimate form as it lays its egg. It typically chooses powerful creatures that are already found in the region, for these \"young\" are loyal to their parent and serve as loyal guardians or playthings. Victims retain no true portion of their previous personality, but those who have been rescued from this horrific fate via powerful magic do retain memories of their time as a transformed monstrosity. Many never quite recover from these ordeals, and often develop a peculiar form of madness in which they regard their monstrous life as having been their true life, and their true life as the curse. The most despondent of these victims eventually seek the promise of peace through suicide rather than endure the dreams of their life as a monster-dreams that carry within them a most horrible longing. Habitat & Society Gongorinans are an industrious and intelligent breed of qlippoth, and where they find themselves, they invariably form hive-like complexes to live in. These gongorinan \"cities\" are labyrinthine affairs with plenty of chambers for their transformed children to live in. In the Abyss, gongorinan hives can grow truly immense, with populations in the thousands, but even the Material Plane is no stranger to gongorinan hive cities. The largest of these hives are thought to be located deep beneath Hollow Mountain, where Runelord Alaznist lured the Polymorph Plague himself, Yamasoth, into dwelling for a time. While Yamasoth has long vacated the Darklands caverns under Hollow Mountain, they bear the name of his spawn- Gongorina-and his spawn dwell there still.",
    organization: "solitary, pair, or cast (3-10)",
    languages: "Abyssal; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "air walk",
        casterLevel: 11,
        timesPerDay: -1
      },
      {
        name: "freedom of movement",
        casterLevel: 11,
        timesPerDay: -1
      },
      {
        name: "statue",
        casterLevel: 11,
        timesPerDay: -1
      },
      {
        name: "baleful polymorph",
        casterLevel: 11,
        timesPerDay: 3
      },
      {
        name: "protection from law",
        casterLevel: 11,
        timesPerDay: 3
      },
      {
        name: "dimension door",
        casterLevel: 11,
        timesPerDay: 1
      },
      {
        name: "reduce person, mass",
        casterLevel: 11,
        timesPerDay: 1
      },
      {
        name: "polymorph any object",
        casterLevel: 11,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 6,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Climb: {
        ranks: 14
      },
      Disguise: {
        ranks: 3,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      "Knowledge (arcana)": {
        ranks: 14
      },
      Perception: {
        ranks: 11
      },
      Stealth: {
        ranks: 3,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Swim: {
        ranks: 11
      }
    },
    special: {
      bleed: {
        universalMonsterAbility: "Bleed",
        damage: "1d6"
      },
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "1d6+7"
      },
      oviposition: {
        type: "Su",
        text: "A gongorinan can implant a stony egg the size of a human heart in the body of any Small or larger pinned, helpless, or willing creature as a full-round action that provokes an attack of opportunity. This action deals 1d4 points of Constitution damage to the victim. If the victim survives this damage, the egg takes root deep in the victim's body, links to his mind, and begins gestating. The egg grows rapidly, dealing 1 point of Intelligence drain every day to a minimum score of 1. Once this Intelligence drain affects a creature that already has an effective Intelligence score of 1, the egg \"hatches\" inside of the victim. This causes the victim to immediately transform into a horrid animal, aberration, magical beast, or vermin (the exact choice is made by the gongorinan according to its strange goals and unknowable desires), whereupon it begins living out its new life via pure instinct-this effect otherwise functions as if it were baleful polymorph to which the creature had failed its secondary Will save to retain its personality. A gongorinan can command the actions of a creature that has undergone this transformation as if the victim had been affected by dominate monster (this works even on creatures that are normally immune to such effects as a result of being mindless) as long as the gongorinan is within 120 feet of the creature. The effect can be reversed by break enchantment (DC 22-treat the gongorinan's Hit Dice as it caster level), but cannot be dispelled."
      },
      web: {
        universalMonsterAbility: "Web",
        saveDC: 10,
        hp: "11 hp"
      },
      "horrific appearance": {
        type: "Su",
        text: "Creatures that succumb to a gongorinan's horrific appearance become confused for 1d4 rounds.",
        preText: "30 ft., DC 20"
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Sting-injury; save Fort DC 22; frequency 1/round for 6 rounds; effect 1d3 Strength damage and staggered for 1 round; cure 2 consecutive saves. The save DC is Constitution-based.",
        saveDC: 10
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

};
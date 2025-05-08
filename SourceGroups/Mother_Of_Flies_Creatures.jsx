
export const Mother_Of_FliesCreatures = {
  "Possession Lesser": {
    source: "Mother Of Flies",
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
    hd: 7,
    hdVal: 10,
    cr: 6,
    racialFeatures: [
      "Darkvision 60 ft.",
      "See in Darkness"
    ],
    speed: {
      base: 30,
      maneuverability: "Perfect",
      fly: 30
    },
    abilities: {
      str: "-",
      dex: 16,
      con: 16,
      int: 15,
      wis: 17,
      cha: 17
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Lightning Reflexes",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Claw",
        qualities: [
          "touch"
        ],
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Bite",
        qualities: [
          "touch"
        ],
        name: "Bite",
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "good"
      },
      SR: {
        value: 17
      }
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Hell or Ethereal Plane)",
    visualDescription: "An impression of unmistakable malice pervades the area, the vague yet undeniable sensation of looming malevolence and faint foul breath.",
    description: "Diabolically clever and immortally creative, the legions of Hell use all the tools at their disposal to undermine and corrupt the souls of mortalkind. Among these tools are the souls of unabashedly depraved and hateful mortals sentenced to Hell in punishment for lives of sin. The foulest of these souls occasionally find themselves plucked from their torments and reforged in infernal crucibles, etched with bindings of hellish magic, then set loose upon the living. These evil souls bear many of the powers of devils, but fall outside the normal infernal hierarchies, not being considered true devils by their fiendish peers. Rather, they are gidims, Hell-bound souls made weapons of the Pit. More than mere souls yet less than fiends, gidims find themselves barred from the mortal plane by the laws of existence. Their minds and memories linger on half-forgotten lives, however, and upon emotions and sensations long lost to fiends. Thus, they endlessly seek ways to infiltrate the paths of the living. Traveling to the Ethereal Plane, they peer into the Material Plane, seeking out hapless mortals and drawing power from their hatred, their violence, their sorrow, and especially their fears. Continued feeding upon and encouragement of such emotions grants them greater ability to invade the mortal realm and potentially steal new bodies, through which their foulness might live again. Two breeds of gidim exist, lesser possession devils and greater. Both appear nearly identical, but greater possession devils are created from spirits of extraordinary, near-legendary evil beings. These foulest of souls are granted even more powerful diabolical abilities and are often loosed by their infernal masters to torment, unhinge, and ultimately destroy the mortal enemies of Hell. Lesser possession devils are typically left to their own devices, using their abilities to sow fear, torment innocents, spread mistrust, and ruin lives.",
    organization: "solitary",
    languages: "Aklo, Common, Infernal",
    spellLikeAbilities: [
      {
        name: "invisibility, greater",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "bleed",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "ghost sound",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "teleport, greater",
        casterLevel: 12,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: -1
      },
      {
        name: "knock",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "levitate",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "open/close",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "prestidigitation",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "mage hand",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "animate rope",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "dancing lights",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "ethereal jaunt",
        casterLevel: 12,
        limitations: "Ethereal Plane to Material Plane and vice versa",
        timesPerDay: 3
      },
      {
        name: "minor creation",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "plane shift",
        casterLevel: 12,
        limitations: "self only; to Ethereal Plane, Hell, or Material Plane only",
        timesPerDay: 3
      },
      {
        name: "produce flame",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "silent image",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "suggestion",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "unseen servant",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "summon",
        casterLevel: 12,
        limitations: "level 4, 1 lesser possession devil, 40%",
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 10
      },
      Bluff: {
        ranks: 7
      },
      "Disable Device": {
        ranks: 10
      },
      Fly: {
        ranks: 0
      },
      Intimidate: {
        ranks: 10
      },
      "Knowledge (planes)": {
        ranks: 7
      },
      Perception: {
        ranks: 7
      },
      "Sense Motive": {
        ranks: 7
      },
      Stealth: {
        ranks: 7
      }
    },
    special: {
      dread: {
        type: "Su",
        text: "Gidims are adept at using their spell-like abilities to terrifying effect. At will, and while remaining invisible, a gidim can choose to make any of the spell-like abilities noted in its stat block particularly frightening. Any creature that witnesses and is within 10 feet of the effect of one of these spell-like abilities must make a saving throw or be shaken for 1 minute. This effect can potentially increase the severity of other fear effects. This is a mind-affecting fear effect."
      },
      malevolence: {
        type: "Su",
        text: "Once per day, a gidim on the Material Plane can merge its body with another creature's. This ability is similar to a magic jar spell (CL 10th or the devil's HD, whichever is higher), except that it does not require a receptacle. To use this ability, the devil must be adjacent to the target. The target can resist the attack with a successful DC 16 Will save. A creature that successfully saves is immune to that same devil's malevolence for 24 hours. While using this ability, the gidim is not affected by its otherworldly ability. The save DC is Charisma-based."
      },
      "nourished by negativity": {
        type: "Su",
        text: "Gidims seek out volatile mortals to aid them in entering the Material Plane. At the most basic level, negative emotions occur when a creature is dying, raging, or subject to a fear effect. At the GM's discretion, negative emotions might also include non-rules-related effects, such as extreme feelings of anger, betrayal, frustration, hate, or sorrow. Anytime a gidim witnesses a creature affected by negative emotions, it may choose to gain a +1 bonus on its next Will save made to enter the Material Plane, so long as it attempts to enter the plane within 30 feet of that creature and within 24 hours. If within 12 to 24 hours of gaining this bonus the gidim witness the same creature again being affected by negative emotions, it gains an additional +1 bonus on its Will save which stacks with the original and increases the duration of the bonus by an additional 24 hours. Thus, a gidim may gain a stacking +1 bonus to its Will save in this manner once every 12 hours. The devil loses its entire accumulated bonus if it attempts and fails to enter the Material Plane, if 24 hours pass without it witnessing its target creature being affected by negative emotions, or if it takes a bonus from another creature affected by negative emotions. Once on the Material Plane, this bonus applies to a gidim's Will saves made to resist being expelled from the plane. The bonus decreases by 1 every minute until it reaches 0. A gidim that leaves the Material Plane before this bonus reaches 0 retains any remaining bonus."
      },
      otherworldly: {
        type: "Ex",
        text: "Gidims find it difficult to enter the Material Plane. To do so by any means, a lesser possession devil must make a DC 30 Will save, failure meaning it is barred from entry and cannot access the plane again for 12 hours. In addition, after every minute of being on the Material Plane, the devil must make a DC 30 Will save or be expelled, returning to the plane it traveled from. Additionally, as a free action a number of times per day equal to the gidim's Charisma modifier, the devil can empower one of its spell-like abilities to extend out from the Ethereal Plane and affect a target on the Material Plane. Sunlight Weakness (Ex) Gidims' powers are weakened in natural sunlight (not merely a daylight spell), reducing the DCs of their special abilities by -4. In addition, gidims attempting to enter the Material Plane into an area of sunlight take a -4 penalty on their Will save."
      }
    }
  },

  "Devil, Possession Greater": {
    source: "Mother Of Flies",
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
    hd: 15,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "Darkvision 60 ft.",
      "See in Darkness"
    ],
    speed: {
      base: 30,
      maneuverability: "Perfect",
      fly: 40
    },
    abilities: {
      str: "-",
      dex: 26,
      con: 24,
      int: 17,
      wis: 20,
      cha: 20
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
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Improved Iron Will",
        type: "General"
      },
      {
        name: "Iron Will",
        type: "General"
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
        name: "Stand Still",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "good"
      },
      SR: {
        value: 26
      }
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Hell or Ethereal Plane)",
    visualDescription: "An impression of unmistakable malice pervades the area, the vague yet undeniable sensation of looming malevolence and faint foul breath.",
    description: "Diabolically clever and immortally creative, the legions of Hell use all the tools at their disposal to undermine and corrupt the souls of mortalkind. Among these tools are the souls of unabashedly depraved and hateful mortals sentenced to Hell in punishment for lives of sin. The foulest of these souls occasionally find themselves plucked from their torments and reforged in infernal crucibles, etched with bindings of hellish magic, then set loose upon the living. These evil souls bear many of the powers of devils, but fall outside the normal infernal hierarchies, not being considered true devils by their fiendish peers. Rather, they are gidims, Hell-bound souls made weapons of the Pit. More than mere souls yet less than fiends, gidims find themselves barred from the mortal plane by the laws of existence. Their minds and memories linger on half-forgotten lives, however, and upon emotions and sensations long lost to fiends. Thus, they endlessly seek ways to infiltrate the paths of the living. Traveling to the Ethereal Plane, they peer into the Material Plane, seeking out hapless mortals and drawing power from their hatred, their violence, their sorrow, and especially their fears. Continued feeding upon and encouragement of such emotions grants them greater ability to invade the mortal realm and potentially steal new bodies, through which their foulness might live again. Two breeds of gidim exist, lesser possession devils and greater. Both appear nearly identical, but greater possession devils are created from spirits of extraordinary, near-legendary evil beings. These foulest of souls are granted even more powerful diabolical abilities and are often loosed by their infernal masters to torment, unhinge, and ultimately destroy the mortal enemies of Hell. Lesser possession devils are typically left to their own devices, using their abilities to sow fear, torment innocents, spread mistrust, and ruin lives.",
    organization: "solitary",
    languages: "Aklo, Common, Infernal",
    spellLikeAbilities: [
      {
        name: "invisibility, greater",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "bleed",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "ghost sound",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "teleport, greater",
        casterLevel: 12,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: -1
      },
      {
        name: "knock",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "levitate",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "major image",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "prestidigitation",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "unseen servant",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "animate dead",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "animate rope",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "bestow curse",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "contagion",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "ethereal jaunt",
        casterLevel: 12,
        limitations: "Ethereal Plane to Material Plane and vice versa",
        timesPerDay: 3
      },
      {
        name: "gust of wind",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "major creation",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "plane shift",
        casterLevel: 12,
        limitations: "self only; to Ethereal Plane, Hell, or Material Plane only",
        timesPerDay: 3
      },
      {
        name: "produce flame",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "stinking cloud",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "suggestion",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "summon",
        casterLevel: 12,
        limitations: "level 5, 1d4 lesser possession devils, 40%",
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 18
      },
      Bluff: {
        ranks: 15
      },
      Diplomacy: {
        ranks: 18
      },
      "Disable Device": {
        ranks: 18
      },
      Fly: {
        ranks: 0
      },
      Intimidate: {
        ranks: 18
      },
      "Knowledge (planes)": {
        ranks: 15
      },
      Perception: {
        ranks: 15
      },
      "Sense Motive": {
        ranks: 15
      },
      Stealth: {
        ranks: 15
      }
    },
    special: {
      dread: {
        type: "Su",
        text: "Gidims are adept at using their spell-like abilities to terrifying effect. At will, and while remaining invisible, a gidim can choose to make any of the spell-like abilities noted in its stat block particularly frightening. Any creature that witnesses and is within 10 feet of the effect of one of these spell-like abilities must make a saving throw or be shaken for 1 minute. This effect can potentially increase the severity of other fear effects. This is a mind-affecting fear effect."
      },
      malevolence: {
        type: "Su",
        text: "Once per day, a gidim on the Material Plane can merge its body with another creature's. This ability is similar to a magic jar spell (CL 10th or the devil's HD, whichever is higher), except that it does not require a receptacle. To use this ability, the devil must be adjacent to the target. The target can resist the attack with a successful DC 16 Will save. A creature that successfully saves is immune to that same devil's malevolence for 24 hours. While using this ability, the gidim is not affected by its otherworldly ability. The save DC is Charisma-based."
      },
      "nourished by negativity": {
        type: "Su",
        text: "Gidims seek out volatile mortals to aid them in entering the Material Plane. At the most basic level, negative emotions occur when a creature is dying, raging, or subject to a fear effect. At the GM's discretion, negative emotions might also include non-rules-related effects, such as extreme feelings of anger, betrayal, frustration, hate, or sorrow. Anytime a gidim witnesses a creature affected by negative emotions, it may choose to gain a +1 bonus on its next Will save made to enter the Material Plane, so long as it attempts to enter the plane within 30 feet of that creature and within 24 hours. If within 12 to 24 hours of gaining this bonus the gidim witness the same creature again being affected by negative emotions, it gains an additional +1 bonus on its Will save which stacks with the original and increases the duration of the bonus by an additional 24 hours. Thus, a gidim may gain a stacking +1 bonus to its Will save in this manner once every 12 hours. The devil loses its entire accumulated bonus if it attempts and fails to enter the Material Plane, if 24 hours pass without it witnessing its target creature being affected by negative emotions, or if it takes a bonus from another creature affected by negative emotions. Once on the Material Plane, this bonus applies to a gidim's Will saves made to resist being expelled from the plane. The bonus decreases by 1 every minute until it reaches 0. A gidim that leaves the Material Plane before this bonus reaches 0 retains any remaining bonus."
      },
      otherworldly: {
        type: "Ex",
        text: "Gidims find it difficult to enter the Material Plane. To do so by any means, a lesser possession devil must make a DC 30 Will save, failure meaning it is barred from entry and cannot access the plane again for 12 hours. In addition, after every minute of being on the Material Plane, the devil must make a DC 30 Will save or be expelled, returning to the plane it traveled from. Additionally, as a free action a number of times per day equal to the gidim's Charisma modifier, the devil can empower one of its spell-like abilities to extend out from the Ethereal Plane and affect a target on the Material Plane. Sunlight Weakness (Ex) Gidims' powers are weakened in natural sunlight (not merely a daylight spell), reducing the DCs of their special abilities by -4. In addition, gidims attempting to enter the Material Plane into an area of sunlight take a -4 penalty on their Will save."
      }
    }
  },

  Nihiloi: {
    source: "Mother Of Flies",
    creatureType: "outsider",
    subTypes: [
      "extraplanar"
    ],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Medium",
    hd: 10,
    hdVal: 10,
    cr: 11,
    racialFeatures: [
      "Darkvision 90 ft.",
      "See in Darkness"
    ],
    speed: {
      base: 40,
      maneuverability: "Good",
      fly: 60
    },
    abilities: {
      str: 17,
      dex: 24,
      con: 27,
      int: 15,
      wis: 20,
      cha: 18
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
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Mobility",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Slam",
        name: "2 Slams",
        specialAbility: "grab",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to cold"
    ],
    defense: {
      naturalArmor: 5
    },
    space: "5 ft.",
    reach: "20 ft. (with slam)",
    environment: "any (Plane of Shadow)",
    visualDescription: "A mass of black, bramble-like tentacles writhes from the back of this vague, shifting humanoid. Inky skin covers the creature, and ebon claws curve long and thin from the tips of its fingers. Numerous tendrils of wispy shadow hold the creature aloft while others rise above its shoulders in strange, wriggling wings.",
    description: "Violent xenophobes, the creatures typically called nihilois, devashades, or shadow lords pose a rising threat to interlopers into their umbral realm. In ages immemorial, these creatures enjoyed vast empires upon the mysterious Plane of Shadow, but through the millennia incursion by immigrants and interlopers have eroded their way of life and scattered their numbers. In the face of spellcasters from the Material Plane striding across their homeland-using it as little more than a umbral thoroughfare-and whole terrible races like kytons migrating to their native reaches, the nihilois have long retreated into the deepest darknesses of their realm. Yet as alien encroachment continues, slowly the nihilois have revealed themselves, and found to their surprise that they are powerful and feared. Nihilois-as the first travelers from Golarion termed them, believing them to be members of an ancient mythical race-resemble gaunt, vaguely humanoid creatures shrouded in ever-writhing shadow stuff with fountains of dark tendrils jutting from their backs. They often hold these thin limbs in tight bunches that appear like strange, dense wings, but unfurl them easily and with shocking speed to lash out against their enemies. Unable to vocalize words, nihilois are widely distrusted by creatures foreign to the Plane of Shadow. Even a pair of the shadowy natives is unsettling to those encountering them for the first time as they silently gesture and nod, holding secret councils few others can understand. Creatures frequently interacting with them know the nihilois have a shared name for their race, though since these creatures speak only telepathically, the term sounds more like the passage of massive wings than a word pronounceable in most sentient tongues. Ecology Artisans of the Plane of Shadow, with a near-peerless understanding of that realm, nihilois can, like sculptors, twist and manipulate the very fabric of their home plane. Birthed from the dark plane, these natives are as true inhabitants of their realms as the denizens of the Material Plane are of theirs. The ever-changing gloom of the plane permeates these creatures, and they likewise prove dark and changeable. Yet as the nature of shadow is to flee from the light, so too do nihilois find it natural to retreat from interlopers into their realm. Having done so since times unrecorded, only in recent centuries has a new sentiment grown among these shadow lords, a feeling that they are losing an important battle and that both their survival and their realm are threatened. Thus, slowly over the span of centuries, resistance to foreign invaders has gradually become a hallmark of this mysterious race. Nihilois, both male and female, stand nearly 7 feet tall, but often raise themselves up off the ground on coils of their dark tendrils. Those thick bunches of thin limbs that extend from their backs they typically hold together in dense clusters, causing them to appear like wings, but can unravel them and bring them to bear with incredible swiftness. Having a highly malleable form, nihilois are light, weighing an average of 65 pounds. When angered, they can temporarily inflate themselves to appear larger, whipping their tendrils around in a fierce display. In addition to serving as weapons and locomotion, nihiloi tentacles are used to feed as well. When tightly wrapped around or within a meal, the tendrils secrete a digestive acid and absorb nutrients through tiny openings. Habitat & Society Nihilois prove exceedingly rare, most having retreated to the farthest-flung depths of the Plane of Shadow where their numbers have dwindled. With rising frequency, though, many have shrugged off their race's fear of interlopers and come to lurk in the shadow reflections of cities on the Material Plane. In such eerie metropolises, groups of nihilois form tightly knit cells, with small groups potentially claiming districts as their own or splitting entire shadow cities between themselves. Quick to influence and master lesser shadow creatures-such as shadows, shadow garms, and fetchlings- nihilois can draw surprisingly large populations of shadow creatures to a single location. While large clusters of such beings don't overtly threaten the Material Plane, such is true only so long as the natives of that plane stay within their realm. Those spellcasters who step from their city homes onto the Plane of Shadow might find the land far less deserted than is typical for the plane, a realm of living shadow and hostile, glowing eyes. Outside such cities or group settings, lone nihilois hunt down interlopers into their realm, shadowing trespassers until the time is right to strike. While slaying such intruders satisfies their need for vengeance, all nihilois also seek out portals leading onto the Plane of Shadow and destroy such passages however they can, striving toward a day when all know to avoid the nighted realm.",
    organization: "solitary, cell (2-8), or cabal (9-26)",
    languages: "Abyssal, Common, Infernal; broadcast",
    spellLikeAbilities: [
      {
        name: "detect thoughts",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "deeper darkness",
        casterLevel: 10,
        timesPerDay: 3
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 9
      },
      Bluff: {
        ranks: 10
      },
      Diplomacy: {
        ranks: 9,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      "Escape Artist": {
        ranks: 13
      },
      Fly: {
        ranks: 13
      },
      "Knowledge (planes)": {
        ranks: 10
      },
      Perception: {
        ranks: 10
      },
      Stealth: {
        ranks: 3,
        bonuses: [
          {
            source: "inherent",
            value: 10
          }
        ]
      }
    },
    special: {
      "shadow crafting": {
        type: "Sp",
        text: "Five times per day, when in an area of dim light or darkness, a nihiloi can manipulate shadow to reproduce an effect identical to shadow evocation. Typically, these effects are DC 19 to resist, but if both the nihiloi and its target are within areas of dim light or darkness, the DC increases by +2. This is a shadow effect. The save DC is Charisma-based."
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        condition: "only in shadows",
        value: null
      },
      malleable: {
        type: "Su",
        text: "Nihilois exists as shadow, congealed into tangible but ever-twisting forms. Anytime a nihiloi is aware of imminent attack, it receives the benefit of 20% concealment, as it can warp and shift its body to avoid the blow. See in Darkness (Su) Nihilois can see perfectly in darkness of any kind, even that created by a deeper darkness spell."
      },
      tendrils: {
        type: "Su",
        text: "Once aware of enemies nearby, as a standard action, a nihiloi can unleash its tendrils in a haze of umbral whips that surrounds the area within 10 feet of it. Any creature that enters this area takes 4d6+3 points of damage from dozens of deadly lashes (Reflex save DC 23 for half damage). A nihiloi must take an additional standard action to end this effect. The save DC is Constitution-based."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  Vrykolakas: {
    source: "Mother Of Flies",
    creatureType: "undead",
    subTypes: [],
    alignments: [
      "Neutral Evil"
    ],
    size: "Medium",
    hd: 10,
    hdVal: 8,
    cr: 10,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 40,
      climb: 20
    },
    abilities: {
      str: 22,
      dex: 19,
      con: "-",
      int: 7,
      wis: 18,
      cha: 23
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
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Stealthy",
        type: "General"
      },
      {
        name: "Toughness",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Claw",
        name: "2 Claws",
        specialAbility: "energy drain",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 8
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "Slinking forth on bent limbs and gnarled claws, this twisted abomination bears a resemblance to a starved, plague-ridden ape, its form bestial and bent, with pallid skin stretched unnaturally over knotted bone. Yet its visage holds a greater terror, for amid fangs and milky eyes linger the withered features of a living corpse.",
    description: "A restless and savage form of undead, the vrykolakas knows only rage and relishes the suffering of those who failed it in life. Reanimated corpses of wicked and vengeful souls denied even the basic burial rites, these unreasoning vampire-kin unleash their wrath against the living, indiscriminately spreading disease and death among all in their paths. Their bitterness at their own disgraced ends drives them to a loathing of all life and a jealous desire to see all other living creatures fall to their same level of profanity and debasement. Such hardly proves a conscious plot, though, but rather a fundamental instinct. Thus, a single vrykolakas can devastate an entire village, potentially spawning a host of new vrykolakas from their victims. A vrykolakas (the name both singular and plural) appears as a terrible, bestial corruption of the being it was in life. Twisted by rage and undeath into an animalistic shape, these undead bear the taint of death, their bodies lean to the appearance of starvation and pocked with evidence of rot and disease. Hunched and twisted, a vrykolakas's bent spine is the same length it was in life if straightened, but the feral posture of most cause them to slump to a mere 4-1/2 to 5 feet tall. The wasting of death also greatly decreases the corpse's weight, reducing even hearty men to at least 20 or 30 pounds less than they weighed in life. Ecology Despite its savage and decayed appearance, a vrykolakas often passes through towns and villages undeterred, due to its supernatural ability to disguise itself. With the ability to cloak its terrible shape, a vrykolakas typically appears little different than it did in life. Death removes much of the living corpse's sense of who it was, though, so vrykolakas rarely reconstruct their original appearances with complete accuracy. Thus, family and acquaintances often notice the resemblance, but do not readily identify a vrykolakas as the resurrected individual. A vrykolakas thrives upon disease and death, drawing its vigor from those humanoids it passes near. It walks among the living merely to infect them with its grave taint, passing on the subtle corruption of death. Its mere touch drains the life from a victim as well, stealing from its very essence. A vrykolakas's favored victims typically come from among its former family members and friends, which it pursues with only half a memory of any previous connection, yet a lingering malice, as such former companions failed to prevent its accursed fate. A vrykolakas is uniquely bound to the place where it died or its body was originally interred. It must return to this site every Starday and bury itself amid the earth or stones to rest for 24 hours. A vrykolakas is entirely helpless during this period and can be easily destroyed if it can be located. The vampire-kin understand this weakness, though, and go to great lengths to avoid being followed to their resting places. Habitat & Society Vrykolakas typically appear near or in rural areas close to their graves. They walk the open streets of villages and hamlets during daylight hours, avoiding direct interaction and attention, all the while infecting those nearby and robbing them of their vitality. By night they seek to take their revenge more overtly, wreaking havoc upon the community, destroying food and property, attacking and smothering people in their beds, stealing valuables, and generally terrorizing people. Many rural superstitions and prejudices against strangers stem from tales of vrykolakas, slipping quietly into town or lurking at the edges of a community, spreading death and despair among the innocent. The Greek Vampire The vrykolakas (pronounced \"vree- KO-la-kahss\") is an undead creature from Greek folklore. Synonymous with revenants, these terrors manifest as humans that have returned from the grave to perform some act before they can peacefully rest. Many stories of the vrykolakas are not of horrid, evil undead, but of deceased persons attempting to return to their former lives, such as the shoemaker who returned from the grave to mend his children's shoes, carry water, and chop firewood. The more vengeful type of vrykolakas gained stronger belief in Greece after the arrival of Slavic immigrants, who brought with them tales of blood-drinking vampires and werewolves. The word vrykolakas itself borrows from Slavic, derived from the Bulgarian word vukodlak, vuk meaning \"wolf \" and dlaka meaning \"fur.\" This suggests that vrykolakas were somehow associated with werewolves, most likely due to the Slavic belief that werewolves became vampires after they died. A person could become a vrykolakas in a variety of ways. The most common involve a person being evil and immoral, an excommunication from the church, or improper burial rites. Some thought that eating the meat of a sheep that had been killed or wounded by a wolf or a werewolf would turn a person into a vrykolakas. A cat or other animal jumping over a dead body could also result in its evil return. Curses, such as \"may the ground not receive thee,\" would also condemn the recipient to undeath as a vrykolakas. Many also believed that a vrykolakas would knock at your door and call your name, but could only do so once. If one answered the door, he would die shortly thereafter, and become a vrykolakas. For this reason, the superstition that one should not answer the door until the second knock still exists in some Greek villages.",
    organization: "solitary",
    languages: "Common",
    spellLikeAbilities: [
      {
        name: "charm animal",
        casterLevel: 10,
        timesPerDay: 3
      },
      {
        name: "disguise self",
        casterLevel: 10,
        timesPerDay: 3
      },
      {
        name: "fear",
        casterLevel: 10,
        timesPerDay: 3
      }
    ],
    skills: {
      Climb: {
        ranks: 0
      },
      Disguise: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Perception: {
        ranks: 10
      },
      Stealth: {
        ranks: 10
      }
    },
    special: {
      "horrid visage": {
        type: "Su",
        text: "At the mere sight of a vrykolakas, the viewer must succeed on a DC 20 Will save or be paralyzed with fear for 1d4 rounds. Whether or not the save is successful, that creature cannot be affected again by the same vrykolakas’s horrid visage for 24 hours. The save DC is Charisma-based. Create Spawn (Su) Any humanoid creature that is slain by a vrykolakas's natural attacks becomes a vrykolakas itself in 1d4 days if not blessed and properly buried. A blessing might entail either the spell bless or a more mundane consecration. A vrykolakas's spawn are free-willed and wild, typically remembering nothing of their moment of death and caring nothing for the vrykolakas that killed them. They do not possess any of the abilities they had in life."
      },
      "energy drain": {
        universalMonsterAbility: "Energy Drain",
        saveDC: 10,
        levels: 1
      },
      rend: {
        universalMonsterAbility: "Rend",
        type: "Ex",
        weaponName: 9
      },
      feed: {
        type: "Su",
        text: "When a person dies due to a vrykolakas’ pestilence, the vrykolakas steals some of their lifeforce. For every 5 victims, it gains 1 Hit Die, but only once per week, when it must spend a day of repose at its burial site."
      },
      "feral possession": {
        type: "Ex",
        text: "Upon being reduced to 0 hit points, a vrykolakas's spirit attempts to possess any animal within 100 feet. This ability is similar to the spell magic jar but does not require a receptacle and has a duration equal to 1 hour for every Hit Die the vrykolakas possesses. The target must make a DC 21 Will save or be possessed. If the possession fails, the vrykolakas immediately dies. If the possession succeeds, the animal immediately retreats to the vrykolakas's grave, where it attempts to bury itself in the earth. If left uninterrupted for 1d4 days, the animal transforms into a new vrykolakas with all the same statistics as the original. If discovered and slain during this time, both the animal and the vrykolakas spirit are destroyed. The save DC is Charisma-based. Pestilent Aura (Su) All creatures that come within 5 feet of a vrykolakas must save to resist contracting bubonic plague. Any creature that successfully saves against a vrykolakas's pestilent aura cannot be affected by the aura of that same vrykolakas for 24 hours. The save DC is Charisma-based. Bubonic Plague: aura-inhaled; save Fort DC 21; onset 1 day; frequency 1/day; effect 1d4 Con damage and 1 Cha damage and target is fatigued; cure 2 consecutive saves."
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        value: null
      },
      "channel resistance": {
        universalMonsterAbility: "Channel Resistance",
        bonus: 4
      },
      "pestilent aura": {
        type: "Su",
        text: "All creatures that come within 5 feet of a vrykolakas must save to resist contracting bubonic plague. Any creature that successfully saves against a vrykolakas's pestilent aura cannot be affected by the aura of that same vrykolakas for 24 hours. The save DC is Charisma-based. Bubonic Plague: aura-inhaled; save Fort DC 21; onset 1 day; frequency 1/day; effect 1d4 Con damage and 1 Cha damage and target is fatigued; cure 2 consecutive saves.",
        preText: "5 ft., DC 21"
      }
    },
    resistances: [
      "vulnerability to fire"
    ]
  },

};

export const Sound_of_a_Thousand_ScreamsCreatures = {
  "Bearded Devil": {
    legs: 2,
    arms: 2,
    source: "Sound of a Thousand Screams",
    creatureType: "outsider",
    subTypes: [
      "devil",
      "evil",
      "extraplanar",
      "lawful"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Medium",
    hd: 6,
    hdVal: 10,
    cr: 5,
    racialFeatures: [
      "Darkvision 60 ft.",
      "See in Darkness"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 19,
      dex: 15,
      con: 19,
      int: 6,
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
        name: "Weapon Focus",
        type: "Combat",
        value: "Glaive",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Glaive",
        name: "Glaive",
        specialAbility: "infernal wound",
        damage: "1d10"
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
        damageType: "good or silver"
      },
      SR: {
        value: 16
      },
      naturalArmor: 7
    },
    space: "5 ft.",
    reach: "5 ft. (10 ft. with glaive)",
    environment: "any (Hell)",
    visualDescription: "This seething devil deftly wields a vicious, saw-toothed glaive, while below its toothy maw writhes a hideous, twitching beard.",
    description: "Elite warriors in Hell's legions, bearded devils-or barbazus-fight savagely in the name of their infernal lords and command mindless hordes of the damned into battle. They collect and train with their infernally forged glaives among the vaults of Hell's third layer, Erebus, but inevitably return to the first layer, Avernus, to serve at the side of the dread lord Barbatos. Barbazus are fond of making charge attacks with their glaives, and try to maintain a 10-foot gap between themselves and their foes so they can use their signature polearms to great effect. Against a foe that has greater reach (or one able to otherwise avoid the devil's favored tactic), they drop their glaives and resort to their claws and hideous beards. At attention, bearded devils stand over 6 feet tall (though their squatting battle stances often make them appear shorter) and weigh upward of 200 pounds.",
    organization: "solitary, pair, squad (3-10), or troop (10-40)",
    languages: "Celestial, Common, Draconic, Infernal; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "teleport, greater",
        casterLevel: 12,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: -1
      },
      {
        name: "summon",
        casterLevel: 12,
        limitations: "level 3, 1 bearded devil or 6 lemures, 50%",
        timesPerDay: 1
      }
    ],
    skills: {
      Climb: {
        ranks: 9
      },
      Intimidate: {
        ranks: 7
      },
      Perception: {
        ranks: 6
      },
      "Sense Motive": {
        ranks: 2
      },
      Stealth: {
        ranks: 6
      }
    },
    special: {
      beard: {
        type: "Ex",
        text: "If a bearded devil hits a single opponent with both claw attacks, it also lashes at the same target with its spiky, filthy beard. The victim takes 1d8+2 points of damage and must succeed on a DC 17 Fortitude save or contract devil chills. The save DC is Constitution-based. Devil Chills: Disease-injury; save Fort DC 17; onset 1d4 days; frequency 1/day; effect 1d4 Str damage; cure 3 consecutive saves."
      },
      "infernal wound": {
        type: "Su",
        text: "The damage a bearded devil deals with its glaive inflicts persistent wounds that cause 2 points of bleed damage. Bleed caused from an infernal wound is particularly difficult to stanch-a DC 17 Heal check stops the damage, and any attempt to heal a creature suffering from an infernal wound must succeed on a DC 16 caster level check or the spell does not function. Success indicates the healing works normally and stops all bleed effects on the victim. The infernal wounds caused by a bearded devil are a supernatural ability of the devil, not of the weapon."
      }
    }
  },

  "Dweomercat Cub": {
    legs: 4,
    arms: 0,
    source: "Sound of a Thousand Screams",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Tiny",
    hd: 3,
    hdVal: 10,
    cr: 2,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Scent"
    ],
    speed: {
      base: 20
    },
    abilities: {
      str: 9,
      dex: 15,
      con: 10,
      int: 9,
      wis: 12,
      cha: 14
    },
    feats: [
      {
        name: "Dodge",
        type: "Combat"
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
        value: 5,
        damageType: "magic"
      },
      SR: {
        value: 14
      },
      naturalArmor: 1
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any forest",
    visualDescription: "Its coat shining vividly, this majestic tiger looks exotic and otherworldly. It gazes with piercing yellow eyes and stands calmly, as though fearless.",
    description: "Powerful and regal, dweomercats stalk the First World, preying upon lesser creatures, but more voraciously hunting new and ever stranger sources of magic. Beings as much composed of sculpted arcane eddies as of flesh and blood, these capricious felines flourish along the intangible ley lines of their home realm, drinking in its weird powers as a plant thrives on light. Yet even more potent than their thirst for magic and the euphoria they draw from being in proximity to the reshaping of reality is dweomercats' racial curiosity, which leads them endlessly across the First World-and often beyond. The average adult dweomercat is about 4 feet tall and 7 feet long, weighing over 250 pounds, while their cubs are approximately 1 foot tall and weigh no more than 15 pounds. Ecology A newly born dweomercat cub is connected to its homeland by only a thin tether of fey magic, and can only tap into its true potential during the instant a spell is cast upon it. The burst of magical energy brought forth by a freshly cast spell momentarily intensifies the bond between the First World and the dweomercat. This link manifests itself clumsily as a sort of sudden teleportation that heaves the fey cat through space and time toward the source of the spell, fueled by the magnetic reaction between the dweomercat and the magic's origin. A dweomercat grows not by the passage of time, but through direct exposure to fey magic. Thus, a dweomercat cub on the Material Plane is stunted developmentally. Though it ages and gains experience and practical wisdom anywhere, only by spending several lifetimes on the First World can the cub reach adulthood. Once it has reached this stage, however, a fully grown dweomercat may freely travel between its native land and the Material Plane without adverse effects. Habitat & Society In the First World, dweomercats travel in packs while hunting. Beyond this predatory advantage, however, they have little use for organized society, as the evershifting nature of their homeland impedes it anyway. Dweomercats that are born on or come to be stranded on the Material Plane are often forced to live on their own. Cut off from the direct magical eddies of the First World, dweomercat cubs prove unable to grow into adults. While they might become slightly stronger and more learned, they never reach the size and prowess of those constantly subjected to the magic of their homeland. Were a dweomercat cub to return to the First World, it would eventually grow into a normal dweomercat, but only over the course of numerous humanoid lifespans. Those dweomercats marooned on the Material Plane seek out areas of great age, changeability, and magical potency- lands most like the First World. Sometimes this means not a specific place, but rather a period spent journeying with a mortal spellcaster. While an adult dweomercat would scoff at the idea of following a humanoid's orders, adolescents see the benefit of journeying alongside an intelligent creature native to the alien world. Should a dweomercat cub find a magic-user reckless or whimsical enough to keep its attention, it might join the caster as a familiar, gaining a measure of constant magical exposure from the intangible connection inherent in such a mystical relationship. Dweomercat Cubs as Familiars Attracted to flashy displays of magic and the strange powers inherent in a bond between a magic-user and her familiar, a dweomercat cub that's wandered from the First World might find its taste for magic and adventure satisfied in the service of a particularly whimsical or ostentatious arcane spellcaster. A spellcaster with the Improved Familiar feat can acquire a chaotic neutral dweomercat cub at 7th level or higher. Should the spellcaster settle into a life of research and predictability for a span of months, the dweomercat cub familiar might take to wandering off and, eventually, might not return-deliberately severing the master-familiar bond and freeing the spellcaster to summon a new familiar.",
    organization: "solitary or ambush (1-3 dweomercats and 2-12 dweomercat cubs)",
    languages: "Common, Sylvan",
    spellLikeAbilities: [
      {
        name: "detect magic",
        casterLevel: 4,
        timesPerDay: -1
      },
      {
        name: "dimension door",
        casterLevel: 4,
        limitations: "self only",
        timesPerDay: -1,
        timesPerWeek: 1
      }
    ],
    skills: {
      Climb: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      "Knowledge (arcana)": {
        ranks: 1
      },
      Perception: {
        ranks: 1
      },
      Stealth: {
        ranks: 0
      }
    },
    special: {
      "dweomer leap": {
        type: "Su",
        text: "When a dweomercat is targeted by a spell or within the area of effect of a spell, it can, as a swift action, choose to teleport to a square adjacent to the spell's caster, effectively appearing mid-leap and aimed toward the caster. This ability takes effect regardless of whether or not the spell overcomes the dweomercat's spell resistance. If it chooses, the dweomercat can immediately make a full attack against the spell's caster as though pouncing. Using this ability does not provoke an attack of opportunity. If there is no safe space adjacent to the caster-or if the dweomercat chooses-the dweomercat can forgo using this ability."
      },
      pounce: {
        universalMonsterAbility: "Pounce"
      },
      rake: {
        universalMonsterAbility: "Rake",
        type: "Ex",
        weaponName: 1
      }
    }
  },

  Dweomercat: {
    source: "Sound of a Thousand Screams",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Medium",
    hd: 10,
    hdVal: 10,
    cr: 7,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Scent"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 15,
      dex: 23,
      con: 16,
      int: 13,
      wis: 16,
      cha: 16
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
        name: "Spring Attack",
        type: "Combat"
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
        value: 5,
        damageType: "magic"
      },
      SR: {
        value: 19
      },
      naturalArmor: 6
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any forest (First World)",
    visualDescription: "Its coat shining vividly, this majestic tiger looks exotic and otherworldly. It gazes with piercing yellow eyes and stands calmly, as though fearless.",
    description: "Powerful and regal, dweomercats stalk the First World, preying upon lesser creatures, but more voraciously hunting new and ever stranger sources of magic. Beings as much composed of sculpted arcane eddies as of flesh and blood, these capricious felines flourish along the intangible ley lines of their home realm, drinking in its weird powers as a plant thrives on light. Yet even more potent than their thirst for magic and the euphoria they draw from being in proximity to the reshaping of reality is dweomercats' racial curiosity, which leads them endlessly across the First World-and often beyond. The average adult dweomercat is about 4 feet tall and 7 feet long, weighing over 250 pounds, while their cubs are approximately 1 foot tall and weigh no more than 15 pounds. Ecology A newly born dweomercat cub is connected to its homeland by only a thin tether of fey magic, and can only tap into its true potential during the instant a spell is cast upon it. The burst of magical energy brought forth by a freshly cast spell momentarily intensifies the bond between the First World and the dweomercat. This link manifests itself clumsily as a sort of sudden teleportation that heaves the fey cat through space and time toward the source of the spell, fueled by the magnetic reaction between the dweomercat and the magic's origin. A dweomercat grows not by the passage of time, but through direct exposure to fey magic. Thus, a dweomercat cub on the Material Plane is stunted developmentally. Though it ages and gains experience and practical wisdom anywhere, only by spending several lifetimes on the First World can the cub reach adulthood. Once it has reached this stage, however, a fully grown dweomercat may freely travel between its native land and the Material Plane without adverse effects. Habitat & Society In the First World, dweomercats travel in packs while hunting. Beyond this predatory advantage, however, they have little use for organized society, as the evershifting nature of their homeland impedes it anyway. Dweomercats that are born on or come to be stranded on the Material Plane are often forced to live on their own. Cut off from the direct magical eddies of the First World, dweomercat cubs prove unable to grow into adults. While they might become slightly stronger and more learned, they never reach the size and prowess of those constantly subjected to the magic of their homeland. Were a dweomercat cub to return to the First World, it would eventually grow into a normal dweomercat, but only over the course of numerous humanoid lifespans. Those dweomercats marooned on the Material Plane seek out areas of great age, changeability, and magical potency- lands most like the First World. Sometimes this means not a specific place, but rather a period spent journeying with a mortal spellcaster. While an adult dweomercat would scoff at the idea of following a humanoid's orders, adolescents see the benefit of journeying alongside an intelligent creature native to the alien world. Should a dweomercat cub find a magic-user reckless or whimsical enough to keep its attention, it might join the caster as a familiar, gaining a measure of constant magical exposure from the intangible connection inherent in such a mystical relationship. Dweomercat Cubs as Familiars Attracted to flashy displays of magic and the strange powers inherent in a bond between a magic-user and her familiar, a dweomercat cub that's wandered from the First World might find its taste for magic and adventure satisfied in the service of a particularly whimsical or ostentatious arcane spellcaster. A spellcaster with the Improved Familiar feat can acquire a chaotic neutral dweomercat cub at 7th level or higher. Should the spellcaster settle into a life of research and predictability for a span of months, the dweomercat cub familiar might take to wandering off and, eventually, might not return-deliberately severing the master-familiar bond and freeing the spellcaster to summon a new familiar.",
    organization: "solitary, hunt (2-3), ambush (1-3 dweomercats and 2-12 dweomercat cubs)",
    languages: "Common, Sylvan",
    spellLikeAbilities: [
      {
        name: "detect magic",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "globe of invulnerability, lesser",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "dispel magic",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "dimension door",
        casterLevel: 10,
        limitations: "self only",
        timesPerDay: 3
      },
      {
        name: "antimagic field",
        casterLevel: 10,
        timesPerDay: 3
      }
    ],
    skills: {
      Climb: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      "Knowledge (arcana)": {
        ranks: 10
      },
      Perception: {
        ranks: 10
      },
      Stealth: {
        ranks: 10
      }
    },
    special: {
      "dweomer leap": {
        type: "Su",
        text: "When a dweomercat is targeted by a spell or within the area of effect of a spell, it can, as a swift action, choose to teleport to a square adjacent to the spell's caster, effectively appearing mid-leap and aimed toward the caster. This ability takes effect regardless of whether or not the spell overcomes the dweomercat's spell resistance. If it chooses, the dweomercat can immediately make a full attack against the spell's caster as though pouncing. Using this ability does not provoke an attack of opportunity. If there is no safe space adjacent to the caster-or if the dweomercat chooses-the dweomercat can forgo using this ability."
      },
      pounce: {
        universalMonsterAbility: "Pounce"
      },
      rake: {
        universalMonsterAbility: "Rake",
        type: "Ex",
        weaponName: 2
      },
      "spell link": {
        type: "Su",
        text: "When a dweomercat is targeted by a spell or within the area of effect of a spell, it can, as a swift action, forgo its dweomer leap ability to gain an effect related to the school of the spell targeting it. This effect activates before the dweomercat is affected by the spell targeting it and regardless of whether or not the spell overcomes its spell resistance. Each power lasts for 1 minute per level of the spell targeting the dweomercat, until the dweomercat uses this ability again, or until the dweomercat chooses to dismiss the effect as a free action, whichever duration is shortest. This ability does not prevent the spell affecting the dweomercat from taking effect; it only provides an additional benefit. Abjuration: Gains acid, cold, fire, electricity, or sonic resistance equal to 2 per spell level. Conjuration: Gains a deflection bonus to AC equal to +1 for every 5 levels of the spell. Divination: Gains the effects of detect chaos, evil, good, or law. Enchantment: Grants the effects of the spell heroism. Evocation: Inflicts an amount of damage equal to the spell's level upon the spell's caster. Illusion: Grants the effects of invisibility. This effect ends as per the spell. Necromancy: Gains the effects of false life, as if cast by the opposing spell's caster. Transmutation: Gains an enhancement bonus on its natural weapons equal to +1 for every 5 levels of the spell.."
      }
    }
  },

  "Skrik Nettle": {
    source: "Sound of a Thousand Screams",
    creatureType: "magical beast",
    subTypes: [
      "extraplanar"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 8,
    hdVal: 10,
    cr: 6,
    racialFeatures: [
      "Blindsight 30 ft."
    ],
    speed: {
      base: 10,
      maneuverability: "Perfect",
      fly: 30
    },
    abilities: {
      str: 18,
      dex: 17,
      con: 16,
      int: 2,
      wis: 12,
      cha: 8
    },
    feats: [
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Lightning Reflexes",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "3 Bites",
        specialAbility: "poison",
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 8
    },
    space: "10 ft.",
    reach: "15 ft.",
    environment: "any tropical (First World)",
    visualDescription: "A delicate-looking creature floats silently in midair. Resembling a large jellyfish, it has a fringe of bird's feathers around its quivering central mass and long tentacles trailing from its center, with each tentacle ending in a snapping beak. It sings to itself as it flies, each beak making a different note in an eerie harmony.",
    description: "Shoals of skrik nettles float through the skies of the First World. They sail like boats, driven before the wind and using their feathers to tack and turn. They sing as they fly, jabbering and chirping to each other in complex harmonies. The average skrik nettle shoal consists of three dozen or more of the majestic creatures, but these flocks are often split up during the roaring storms so common to the First World. Lone skrik nettles may be encountered in smaller numbers, confused and trying to find their way back to their kin. Skrik nettles range in size from a few inches across (for a newly spawned hatchling) to the size of gigantic, scintillating clouds. Most, however, are no more than 8 or 9 feet across. Ecology Skrik nettles are primarily scavengers, although they will attack suitable prey when hungry. Their method of attack is curious. The sharp beaks of a skrik nettle drip with a magical poison that is injected when the creature bites a foe. The victim of the poison feels slightly nauseous and light-headed at first-and then begins to float off the ground. As long as the poison pumps through the veins of the skrik nettle's victim, the victim keeps floating up into the sky. The victim has no control over this magical levitation-unless she has some other method of controlling her flight, such as wings or magic, or she can grab a convenient tree branch, she will keep ascending until the poison wears off and gravity takes hold once more. The skrik nettles usually float up alongside their prey, keeping it floating by injecting more poison as soon as it starts to drop. Especially dangerous or hardshelled prey might be poisoned, allowed to rise, and then dropped repeatedly from a height until dead. The poison's effects seem to be rooted in magic, rather than venom, and dispelling the ailment has proven to be just as effective as bleeding a victim. Before aiding a victim, however, one must take caution to tie said creature down securely, as there are few deaths more ironic than being cured of a skrik nettle's poison only to instantly plunge to earth from a great height. Oddly, in addition to traditional remedies, killing a skrik nettle also instantly cancels the effects of its poison. Once every year, skrik nettles return to their shoal's spawning grounds to reproduce. The jellyfish-like creatures form hard, rugged eggs inside their bodies, then float gently down to the spawning ground-usually a jungle clearing or warm swamp-and dig nests with their tentacles. Skrik nettles are hermaphrodites, so each one lays its eggs and then fertilizes those of its neighbor (this cross-breeding strengthens future generations of skrik nettles). The average skrik nettle lays three or four eggs, whose size ranges from that of a clenched fist to that of a giant's skull. These eggs incubate in the warm earth for several days, during which time the skrik nettles patrol above the spawning ground, attacking anyone who might disturb the eggs. When ready to hatch, the eggs explode out of the ground and shoot into the sky, bursting into a swarm of newborn skrik nettles. Unwary travelers who slip past the patrolling skrik nettles can trigger a premature hatching if they walk over the spawning ground; such travelers may be pummeled by flying, rock-hard egg shards, or even carried into the sky by a particularly large hatchling. Hatchling skrik nettles are ravenously hungry when born. To provide for the needs of their young, skrik nettle shoals assemble caches of poisoned meat and float them over the spawning ground. A wary explorer can spot a spawning ground from afar if she notices rotting corpses hanging overhead. Skrik nettle eggs can often be sold to the fey. Some train young skrik nettles as songbirds, teaching all six beaks to sing in harmony. Others wrap skrik nettle eggs in cloth filled with golden dust or brightly colored pollen; when an egg prepared in such a manner flies into the sky and explodes upon hatching, the cloth's contents scatter across the sky like a beautiful firework. Such entertainments are popular at parties-though the ensuing swarm of carnivorous jellyfish swooping down on the guests is considered less enchanting. Habitat & Society Skrik nettles dwell amid the clouds, descending only to feed and procreate. They use their songs to keep the shoal together, flying toward the chirping music of their kin. Bards are often able to lure skrik nettles down to them with their enchanting melodies, but once within range, the poisonous creatures usually trade this performance for a live meal. Skrik nettles are not especially intelligent predators- thus, they eat the bounty of the land, or, if particularly lucky, snatch a dead or weak creature from the ground. While skittish, they retaliate when attacked, regarding the assault as a chance to feed. Settlements in regions where skrik nettle migrations are common usually keep a few sacrificial animals handy to lure the skrik nettles away during a hunt. The one exception is where the skrik nettle's spawning grounds are involved-during the time before a hatching, the skrik nettle shoal patrols the area around the spawning grounds and viciously attacks any trespassers. Skrik nettles are also a hazard to flyers. They lurk in low-hanging clouds, letting their tendrils trail down out of the mist. An unwary bird or flying creature can be stung, grabbed, and whisked off to be eaten in a matter of seconds. When scavenging, they fly at a low level above the landscape, letting their tendrils play over the ground as they search for carrion. Skrik nettles themselves have few natural predators. They are reputed to taste so light and airy that eating one is like trying to eat a soap bubble, albeit a soap bubble with a half-dozen stinging beaks. Skrik nettles perceive the world by sensing air currents and shifting vibrations through their sensitive tentacles; during storms or strong winds, they secure themselves in the forks of large trees and wait out the harsh weather. Some fey hunt the skrik nettle shoals in little flying boats for sport, bringing them down with weighted nets or leaden harpoons. A few fey even try riding skrik nettles, \"docking\" them to make them harmless by clamping their beaks shut and then hanging a saddle from the tentacles, but the creatures are too weak to make good steeds. It is also the fashion in some regions for noble faerie-maidens to be accompanied by a small flock of \"docked\" skrik nettles, each one bearing a fan, mirror, or basket of fruit in its tentacles. Others capture skrik nettles and train them to speak-the skrik nettles are not intelligent, but they can be taught to imitate the speech of the First World, much like parrots can learn to imitate human tongues. A trained skrik nettle can even hold conversations with itself, with each of its half-dozen tentacles imitating a different voice.",
    organization: "solitary or shoal (6-24)",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 0
      },
      Perception: {
        ranks: 8
      },
      Stealth: {
        ranks: 1
      }
    },
    special: {
      poison: {
        universalMonsterAbility: "Poison",
        name: "Levitation poison",
        type: "Su",
        text: "Levitation poison: Bite or contact-injury; save Fort DC 16; frequency 1/round for 5 rounds; effect 1 Dexterity damage + levitate (victim rises 10 feet as per the spell per failed save); cure 2 consecutive saves. Skrik nettle poison can be cured by either remove poison or dispel magic, as if it were caster level 8th. The effect's CL equals the skrik nettle's Hit Dice. The save DC is Constitution-based.",
        saveDC: 9
      },
      "spill poison": {
        type: "Su",
        text: "Anytime a skrik nettle is damaged by a slashing or piercing melee weapon, it splashes its poison on the opponent who damaged it. That opponent must save or be affected by the skrik nettle's poison. Weapons with reach allow their wielders to avoid this effect."
      }
    }
  },

};
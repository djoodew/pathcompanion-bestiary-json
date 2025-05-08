
export const Monster_Summoner_s_HandbookCreatures = {
  "Ember Weaver": {
    source: "Monster Summoner's Handbook",
    creatureType: "outsider",
    subTypes: [
      "psychopomp",
      "extraplanar"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 11,
    hdVal: 8,
    cr: 8,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Spiritsense 60 ft."
    ],
    speed: {
      base: 30,
      maneuverability: "Good",
      fly: 60
    },
    abilities: {
      str: 19,
      dex: 21,
      con: 18,
      int: 18,
      wis: 21,
      cha: 18
    },
    feats: [
      {
        name: "Ability Focus",
        type: "Monster",
        value: "Suggestion",
        choiceSource: "Ability Focus"
      },
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Mobility",
        type: "Combat"
      },
      {
        name: "Toughness",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Touche",
        name: "2 Touches",
        damage: "4d6"
      }
    ],
    immunities: [
      "Immune to charm, fire, spells with the light descriptor"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "adamantine"
      },
      SR: {
        value: 19
      },
      naturalArmor: 6
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Astral Plane)",
    visualDescription: "This slim, glowing figure is draped with voluminous gossamer shawls and veils that obscure its shape.",
    description: "Ember weavers are beacons for dead souls seeking the afterlife, and escorts for other psychopomps. Most ember weavers patrol graveyards, ley lines, and other places where the dead enter into the river of souls, beckoning them to step toward eternity. Ember weavers also perform services in payment for knowledge about lost souls. Ember weavers lead ahmuuths and esoboks in hunts for spirits waylaid by undeath. They also accompany nosois and catrinas to recover confused or rebellious spirits.",
    organization: "solitary, pair, escort (1 ember weaver and 1 shoki), troupe (1 ember weaver plus 3-10 ahmuuths, catrinas, esoboks, or nosois), or procession (3-12 ember weavers)",
    languages: "Abyssal, Celestial, Infernal",
    spellLikeAbilities: [
      {
        name: "continual flame",
        casterLevel: 11,
        timesPerDay: -1
      },
      {
        name: "dancing lights",
        casterLevel: 11,
        timesPerDay: -1
      },
      {
        name: "searing light",
        casterLevel: 11,
        timesPerDay: -1
      },
      {
        name: "suggestion",
        casterLevel: 11,
        timesPerDay: -1
      },
      {
        name: "whispering wind",
        casterLevel: 11,
        timesPerDay: -1
      },
      {
        name: "dispel magic",
        casterLevel: 11,
        timesPerDay: 1
      },
      {
        name: "freedom of movement",
        casterLevel: 11,
        timesPerDay: 1
      },
      {
        name: "fly",
        casterLevel: 11,
        timesPerDay: 1
      },
      {
        name: "locate creature",
        casterLevel: 11,
        timesPerDay: 1
      },
      {
        name: "plane shift",
        casterLevel: 11,
        timesPerDay: 1
      },
      {
        name: "slay living",
        casterLevel: 11,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 14
      },
      Fly: {
        ranks: 14
      },
      "Knowledge (geography)": {
        ranks: 14
      },
      "Knowledge (planes)": {
        ranks: 11
      },
      "Knowledge (religion)": {
        ranks: 14
      },
      Perception: {
        ranks: 11
      },
      "Sense Motive": {
        ranks: 11
      },
      Spellcraft: {
        ranks: 14
      },
      Survival: {
        ranks: 14
      }
    },
    special: {
      "rush of souls": {
        type: "Su",
        text: "As a standard action every 1d4+1 rounds, an ember weaver can call forth a rush of souls to trample its foes. This ability deals 6d6 points of force damage to all creatures in a 60-foot cone. A successful DC 19 Reflex saving throw halves the damage. The save DC is Charisma-based."
      },
      "spirit touch": {
        type: "Ex"
      },
      "eerie radiance": {
        type: "Su",
        text: "As a standard action, an ember weaver can wreath itself in an aura of cinders similar to dancing lights (CL 11th). Any living or dead creature within 300 feet with line of sight to the dancing embers must succeed at a DC 19 Will save or else any protections or immunities it has against charm, fear, and mind-affecting effects are suppressed for as long as the ember weaver uses a free action to maintain the effect each round and for 1 round thereafter. Once a creature succeeds at this saving throw, it can't be affected by an eerie radiance for 24 hours. The light has no effect on psychopomps, creatures that can't see, and creatures the ember weaver chooses to exclude. This is a sight-based abjuration effect.",
        preText: "300 ft., DC 19"
      }
    }
  },

  "Guardian Spirit Imp": {
    source: "Monster Summoner's Handbook",
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
    size: "Tiny",
    hd: 5,
    hdVal: 10,
    cr: 4,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Detect Good",
      "Detect Magic",
      "See in Darkness"
    ],
    speed: {
      base: 20,
      maneuverability: "Perfect",
      fly: 50
    },
    abilities: {
      str: 12,
      dex: 20,
      con: 12,
      int: 15,
      wis: 14,
      cha: 20
    },
    feats: [
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Mobility",
        type: "Combat"
      },
      {
        name: "Weapon Finesse",
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
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "good or silver"
      },
      SR: {
        value: 15
      },
      naturalArmor: 2
    },
    space: "2-1/2 ft.",
    reach: "0 ft.",
    environment: "any (Hell)",
    visualDescription: "A violet rune glows in the center of this red-skinned fiend's forehead.",
    description: "A guardian spirit is bound to the fate of a mortal being (called its \"ward\"). This bond may be formed by any number of beings or events carrying the weight of destiny, such as deities, the Eldest, norns, and mythic creatures and magic. A spirit can bind itself willingly if it believes that doing so is likely to further its agenda, give it more power, or allow it access to the world of mortals. Mortals can generally invoke a guardian spirit only with summoning and calling spells. Creating a Guardian Spirit \"Guardian spirit\" is an acquired template that can be added to any fey or outsider that qualifies to become a familiar through the Improved Familiar feat (this template does not make it a familiar, however). A guardian spirit uses all the base creature's statistics and special abilities except as noted here. A guardian spirit has a rune on its forehead similar to that on an eidolon (though its ward does not gain a matching rune). CR: The guardian spirit's CR increases based on the level of spell used to summon it, as noted on the Conjured Guardian table on page 27. Armor Class: The guardian spirit's natural armor bonus increases based on the level of spell used to summon it, as noted on the Conjured Guardian table. Hit Dice: The guardian spirit's Hit Dice increase based on the level of spell used to summon it, as noted on the Conjured Guardian table. It gains appropriate skill points, feats, ability score increases, base attack bonus, and base saving throw advancements for its increased Hit Dice. Defensive Abilities: The guardian spirit has an amount of spell resistance equal to 11 + its CR unless the base creature's SR was higher. Ability Scores: The guardian spirit's Charisma score becomes 18 unless the base creature's Charisma score was higher. Each of the guardian spirit's ability scores increases when it's summoned by higher-level spells, as noted on the Conjured Guardian table above. Special Attacks: If the guardian spirit has extraordinary or supernatural abilities that deal hit point damage measured in dice, the number of dice increases by an amount equal to the level of spell used to conjure it- 3. If the ability requires at least a standard action to activate and has an instantaneous duration, the damage increases by an additional die. Special: The guardian spirit gains a smite and additional special abilities as noted on the table. Smite Threat (Su): Once per day as a swift action, the guardian spirit can add its Charisma bonus on attack rolls and its HD on damage rolls against a foe that currently threatens its ward or has attacked the ward within the past 24 hours; this smite persists until the target is dead or the summoning of the guardian spirit ends. If the spirit is summoned by a 6th-level spell, it can use smite threat an additional time per day, and if the spirit is summoned by a 9th-level spell, it can use smite threat a third time per day. Spell-Like Abilities: A guardian spirit's caster level for its spell-like abilities is equal to its Challenge Rating + 1, or to the base creature's caster level, whichever is higher. It can cast guidance at will. For every spell level of the conjuration spell used to call or summon it (such as planar ally, planar binding, or summon monster if the summoner has the Summon Guardian Spirit feat), the guardian spirit gains access to one additional spell-like ability of the ward's choice from the following list: Spell Level 3: Chill touch, ill omen, protection from chaos/ evil/good/law (choose one; its alignment descriptor must oppose the guardian spirit's alignment). Spell Level 4: Call lightning, detect thoughts, invisibility. Spell Level 5: Cure serious wounds, dispel magic, shout. Spell Level 6: Call lightning storm, death ward, freedom of movement. Spell Level 7: Break enchantment, breath of life, contagious flame. Spell Level 8: Cloak of dreams, greater heroism, sunbeam. Spell Level 9: Greater shout, power word blind, regenerate. Each chosen spell-like ability is available once per day. Fated Guardian (Su): When conjured by a 4th-level or higher spell, a guardian spirit can protect the destiny of another creature within 30 feet as a standard action once per day. For 1 round, any time the creature makes an attack or attempts a saving throw, it rolls twice and takes the better result. Co-Walker (Sp): When conjured by an 8th-level or higher spell, a guardian spirit can assume the shape of its ward as if with alter self, except it can appear to be only the ward (even if the ward is not of a creature type or size that can normally be assumed with alter self) and it gains a +10 bonus on Disguise checks to appear to be the ward.",
    organization: "solitary or with ward",
    languages: "Common, Draconic, Infernal",
    spellLikeAbilities: [
      {
        name: "detect good",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "detect magic",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "guidance",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "invisibility",
        casterLevel: 6,
        limitations: "self only, DC 17",
        timesPerDay: -1
      },
      {
        name: "augury",
        casterLevel: 6,
        timesPerDay: 1
      },
      {
        name: "call lightning",
        casterLevel: 6,
        timesPerDay: 1
      },
      {
        name: "protection from chaos",
        casterLevel: 6,
        timesPerDay: 1
      },
      {
        name: "suggestion",
        casterLevel: 6,
        timesPerDay: 1
      },
      {
        name: "commune",
        casterLevel: 6,
        limitations: "6 questions, CL 12th",
        timesPerDay: -1,
        timesPerWeek: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 11
      },
      Bluff: {
        ranks: 5
      },
      Fly: {
        ranks: 8
      },
      "Knowledge (arcana)": {
        ranks: 8
      },
      "Knowledge (planes)": {
        ranks: 5
      },
      Perception: {
        ranks: 5
      },
      "Sense Motive": {
        ranks: 2
      },
      Spellcraft: {
        ranks: 8
      }
    },
    special: {
      "smite threat 1/day": {
        type: "Ex"
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "beast shape I",
        type: ", beast shape I"
      },
      "fated guardian": {
        type: "Ex"
      },
      "guardian spirit 4th level": {
        type: "Ex"
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        value: null
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Sting-injury; save Fort DC 15; frequency 1/round for 6 rounds; effect 1d2 Dex; cure 1 save. The save DC is Constitution-based, and includes a +2 racial bonus.",
        saveDC: 12
      }
    }
  },

};
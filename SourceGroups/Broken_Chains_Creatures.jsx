
export const Broken_ChainsCreatures = {
  Yaenit: {
    source: "Broken Chains",
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
    hd: 8,
    hdVal: 10,
    cr: 6,
    racialFeatures: [
      "Darkvision 60 ft.",
      "See Invisibility"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 20,
      dex: 14,
      con: 19,
      int: 9,
      wis: 13,
      cha: 16
    },
    feats: [
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Power Attack",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Falchion",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "Falchion",
        damage: "2d4"
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
        damageType: "cold iron or good"
      },
      naturalArmor: 6
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (the Abyss)",
    visualDescription: "Patches of fur cover the sickly flesh of this gangly, muscular, hyena-headed biped. Its swollen eyes blaze with madness.",
    description: "Violent progenitors of Lamashtu's earthly broods, the yaenit demons' purpose is to protect Lamashtu's priestesses and their unholy spawn. Yaenits rise from the souls of evil mortals who in life were exceptionally cruel bullies and tormentors of weaker companions, associates, minions, and siblings. Their resemblance to gnolls is no mere coincidence, as many yaenits take form from the spirits of gnolls in the Abyss. Gnolls, for their part, revere yaenits as embodiments of Lamashtu's foul will, and worship these demons as representatives of both the Mother of Monsters and her unholy designs for the devoted gnoll followers who please her. Terrifying predators, yaenits' deceptively stooped and gangly physiques belie the 300 pounds of knotted and powerful muscle tied to their solid, black bones. The average yaenit is 6-1/2 feet tall.",
    organization: "solitary, pack (2-5), or clan (6-12)",
    languages: "Abyssal, Celestial, Draconic, Gnoll; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "see invisibility",
        casterLevel: 8,
        timesPerDay: -1
      },
      {
        name: "darkness",
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
        name: "hold person",
        casterLevel: 8,
        timesPerDay: 3
      },
      {
        name: "vampiric touch",
        casterLevel: 8,
        timesPerDay: 3
      },
      {
        name: "summon",
        casterLevel: 8,
        limitations: "level 3, 1 yaenit 40%",
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 1,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Bluff: {
        ranks: 6
      },
      Climb: {
        ranks: 9
      },
      Intimidate: {
        ranks: 7
      },
      "Knowledge (planes)": {
        ranks: 6
      },
      Perception: {
        ranks: 6
      },
      Stealth: {
        ranks: 6
      }
    },
    special: {
      "break bones": {
        type: "Ex",
        text: "Whenever a yaenit scores a critical hit with its bite attack, its opponent must succeed at a DC 19 Fortitude save or have its base land speed reduced by 10 feet (to a minimum of 5 feet). This penalty remains until the affected creature takes any amount of magical healing or is healed with a successful DC 20 Heal check. The save DC is Strength-based. Hallucinatory Aura (Su) Any creature coming within 20 feet of a yaenit must succeed at a DC 17 Will save or succumb to the demon's foul, mind-warping magic. A creature affected by a yaenit's hallucinatory aura takes a -2 penalty on Will saves, caster level checks, Intelligence-based skill checks, and Wisdom-based skill checks for as long as it remains within the aura's range and 1d4-1 rounds after leaving the area of effect. This is a mind-affecting effect. Whether or not the save was successful, an affected creature is immune to the same yaenit's hallucinatory aura for 24 hours. The save DC is Charisma-based."
      },
      "hallucinatory aura": {
        type: "Su",
        text: "Any creature coming within 20 feet of a yaenit must succeed at a DC 17 Will save or succumb to the demon's foul, mind-warping magic. A creature affected by a yaenit's hallucinatory aura takes a -2 penalty on Will saves, caster level checks, Intelligence-based skill checks, and Wisdom-based skill checks for as long as it remains within the aura's range and 1d4-1 rounds after leaving the area of effect. This is a mind-affecting effect. Whether or not the save was successful, an affected creature is immune to the same yaenit's hallucinatory aura for 24 hours. The save DC is Charisma-based.",
        preText: "20 ft., DC 16"
      }
    }
  },

};
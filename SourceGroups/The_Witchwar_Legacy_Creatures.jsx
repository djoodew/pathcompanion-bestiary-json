
export const The_Witchwar_LegacyCreatures = {
  "Abyss Gigas": {
    source: "The Witchwar Legacy",
    creatureType: "humanoid",
    subTypes: [
      "chaotic",
      "evil",
      "extraplanar",
      "giant"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Gargantuan",
    hd: 21,
    hdVal: 8,
    cr: 16,
    racialFeatures: [
      "Blindsight 100 ft."
    ],
    speed: {
      base: 60
    },
    abilities: {
      str: 37,
      dex: 12,
      con: 28,
      int: 20,
      wis: 17,
      cha: 15
    },
    feats: [
      {
        name: "Awesome Blow",
        type: "Combat"
      },
      {
        name: "Catch Off-Guard",
        type: "Combat"
      },
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Greater Sunder",
        type: "Combat"
      },
      {
        name: "Improved Bull Rush",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Warhammer",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Sunder",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Stand Still",
        type: "Combat"
      },
      {
        name: "Throw Anything",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Warhammer",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "Warhammer",
        damage: "1d8"
      },
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "wrenching spasms",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Rock",
        name: "Rock",
        damage: "4d6"
      }
    ],
    immunities: [
      "Immune to electricity"
    ],
    defense: {
      DR: {
        value: 3,
        damageType: "-; 10/lawful"
      },
      naturalArmor: 15
    },
    space: "20 ft.",
    reach: "20 ft.",
    environment: "any (Abyss)",
    visualDescription: "This ebon-skinned monstrosity has a gaping maw with boarlike tusks and a wide nose beneath a furrowed brow that lacks any sort of eyes or visible visual organs. Its corded muscles twist and writhe beneath its smooth, hairless jet hide, giving its frame a gnarled, unbalanced asymmetry. It moves with a loping gait, however, and wears its armor, composed of thick, welded plates, effortlessly.",
    description: "Spawned from titans who took refuge in the rifts of the Abyss, the Abyss gigas roam the wastes between the oncemighty titan fortresses. These powerful beings do not typically dwell among their own kind, preferring instead to enslave lesser beings-demons and captured planar travelers-and rule over them as despotic tyrants. Many Abyss gigas serve more powerful demon lords in turn. When more than one of the thankfully rare Abyss gigas live near each other, they exist in a state of perpetual warfare, sending forth wave after wave of their minions in battle. In these situations, only rarely do the gigas masters ever face each other and come to blows, and even then never to the death, as they are aware of the fragile existence of their nearly extinct race. When facing other opponents, however, an Abyss gigas is a fearsome foe, battling to the death to prove the superiority of its ancient line. When encountered on the Material Plane, Abyss gigas are fond of taking control of companies of giants and compelling them to do their bidding, feeling at once both a distant kinship and a sense of domineering superiority. Frost giant cults of Kostchtchie are frequent recipients of this sort of attention. Abyss gigas stand over 50 feet tall and weigh 25 tons or more, not including the weight of their Abyss-forged armor and weapons of adamantine. Abyss gigas usually favor the weapons of their demonic patrons. For example, followers of Kostchtchie often wield giant warhammers in both hands, servants of Lamashtu carry falchions, and those serving Urxehl use spiked greatclubs.",
    organization: "solitary, pair, or gang (3-7)",
    languages: "Abyssal, Common, Giant",
    spellLikeAbilities: [
      {
        name: "deeper darkness",
        casterLevel: 16,
        timesPerDay: -1
      },
      {
        name: "fear",
        casterLevel: 16,
        timesPerDay: -1
      },
      {
        name: "mirror image",
        casterLevel: 16,
        timesPerDay: -1
      },
      {
        name: "dispel magic",
        casterLevel: 16,
        timesPerDay: 3
      },
      {
        name: "dominate person",
        casterLevel: 16,
        timesPerDay: 3
      },
      {
        name: "telekinesis",
        casterLevel: 16,
        timesPerDay: 3
      },
      {
        name: "true seeing",
        casterLevel: 16,
        timesPerDay: 3
      }
    ],
    skills: {
      Climb: {
        ranks: 16
      },
      Intimidate: {
        ranks: 24
      },
      "Knowledge (planes)": {
        ranks: 21
      },
      Perception: {
        ranks: 24
      },
      "Sense Motive": {
        ranks: 21
      },
      Stealth: {
        ranks: 16
      },
      Survival: {
        ranks: 21
      }
    },
    special: {
      "rock throwing": {
        universalMonsterAbility: "Rock Throwing",
        type: "Ex",
        range: "160 ft."
      },
      "planar empowerment": {
        type: "Su",
        text: "While on the plane of the Abyss, an Abyss gigas gains access to blasphemy (DC 24), cloak of chaos (DC 25), and earthquake (DC 25) as spell-like abilities, each usable once per day. If the gigas ventures onto another plane, it cannot make use of these abilities (though its other spelllike abilities remain available). The save DC for the spell-like abilities is Charisma-based and includes a +5 racial bonus."
      },
      "rock catching": {
        universalMonsterAbility: "Rock Catching"
      },
      "wrenching spasms": {
        type: "Su",
        text: "When an Abyss gigas hits an opponent with its bite attack, the opponent must make a DC 29 Fort save or be overcome by wrenching spasms that wrack its body. These spasms cause the victim to be nauseated and deal 1d6 points of damage to Strength and Dexterity due to the painful contortion of bones, muscles, and limbs. The spasms continue for 1d6 hours or until healed with heal, regenerate, or greater restoration. The effects of this ability do not stack, but once a creature has recovered from or been cured of the effect, it can be affected again. Once a creature has made a successful saving throw against this effect, it cannot be affected by the wrenching spasms from that particular gigas for 24 hours. The save DC is Constitution-based."
      }
    },
    resistances: [
      {
        damageType: "acid",
        value: 10
      },
      {
        damageType: "cold",
        value: 10
      },
      {
        damageType: "fire",
        value: 10
      },
      {
        damageType: "sonic",
        value: 10
      }
    ]
  },

};
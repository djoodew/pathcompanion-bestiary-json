
export const No_Response_From_DeepmarCreatures = {
  Cytillipede: {
    source: [
      "No Response From Deepmar",
      "Bestiary 5"
    ],
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 8,
    hdVal: 10,
    cr: 6,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 40,
      climb: 40
    },
    abilities: {
      str: 21,
      dex: 13,
      con: 18,
      int: 7,
      wis: 10,
      cha: 2
    },
    feats: [
      {
        name: "Ability Focus",
        type: "Monster",
        value: "Cytillesh flash",
        choiceSource: "Ability Focus"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Toughness",
        type: "General"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Bite",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "poison",
        damage: "1d6",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to mind-affecting effects"
    ],
    defense: {
      naturalArmor: 11
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "underground",
    visualDescription: "This long, segmented creature writhes and twists, its chitinous body covered in patches of glowing blue fungus. Its mandibles splatter syrupy bluish venom around it as they twitch violently in search of prey.",
    description: "Derros have long used other creatures in their experiments with alchemical and magical augmentations. For the most part, these experiments are not altogether failures, though they don't usually have the results the derros had in mind. However, on rare occasions they actually get it right. The cytillipede is one of those rare occasions. For years, they adapted the diet of a species of giant centipede to eat nothing but cytillesh fungus. After years of exposure to the fungus and certain magical augmentations, the result was an entirely new breed of giant centipedes that the derros named cytillipedes. A cytillipede has a gray segmented body of hard chitin. Patches of cytillesh fungus grow along its back, which gives the creature an eerie blue glow. Because of its constant glowing, a cytillipede out in the open is fairly easy to spot. Most of the time, a cytillipede is encountered in the company of derro patrols that use their creations as mounts or to guard their lairs. In combat, a cytillipede simply rushes at its opponent and makes bite attacks, relying on its cytillesh venom to stun its enemies so it can bite them repeatedly while they deal with the disorientation of sudden short-term memory loss. A cytillipede normally only uses its cytillesh flash ability when it has been seriously wounded or threatened by multiple opponents. A trained cytillipede may also be commanded to use this ability by its rider. Because of their long exposure to cytillesh, derros are unaffected by the cytillesh-based attacks of cytillipedes. Cytillipedes are usually encountered as part of a derro patrol around a derro lair. A typical cytillipede is a little over 10 feet long and 3-1/2 feet high, and weighs about 600 pounds.",
    organization: "solitary, pair, or colony (3-6)",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 4
      },
      Perception: {
        ranks: 4,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      }
    },
    special: {
      "cytillesh flash": {
        type: "Su",
        text: "Once per day, a cytillipede can cause the cytillesh patches that grow along its body to release a bright flash of blue light that provides bright light in a 20- foot radius and dim light in a 40-foot radius. All creatures within the area of effect must succeed at a DC 22 Will save. Those within the area of bright light are stunned for 1d4 rounds. Creatures within the area of dim light are confused for 1d2 rounds. The save DC is Constitution-based and includes a +2 racial bonus. Cytillipede Poison (Ex) Bite- injury; save Fort DC 20; frequency 1/round for 6 rounds; effect 1d3 Dex and dazed; cure 1 save. The save DC is Constitution-based and includes a +2 racial bonus."
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Bite- injury; save Fort DC 20; frequency 1/round for 6 rounds; effect 1d3 Dex and dazed; cure 1 save. The save DC is Constitution-based and includes a +2 racial bonus.",
        saveDC: 12
      }
    }
  },

};
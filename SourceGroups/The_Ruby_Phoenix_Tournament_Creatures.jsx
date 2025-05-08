
export const The_Ruby_Phoenix_TournamentCreatures = {
  Shenzuzhou: {
    source: "The Ruby Phoenix Tournament",
    creatureType: "undead",
    subTypes: [],
    alignments: [
      "Neutral Evil"
    ],
    size: "Large",
    hd: 17,
    hdVal: 8,
    cr: 12,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Lifesense"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 28,
      dex: 17,
      con: "-",
      int: 6,
      wis: 15,
      cha: 17
    },
    feats: [
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Double Slice",
        type: "Combat"
      },
      {
        name: "Great Cleave",
        type: "Combat"
      },
      {
        name: "Improved Two-Weapon Fighting",
        type: "Combat"
      },
      {
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Two-Weapon Fighting",
        type: "Combat"
      },
      {
        name: "Two-Weapon Rend",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Battleaxe",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Battleaxe",
        enchantments: [
          {
            name: "Enhancement Bonus +1",
            source: "inherent"
          }
        ],
        name: "Battleaxe",
        damage: "1d8"
      },
      {
        weapon: "Battleaxe",
        enchantments: [
          {
            name: "Enhancement Bonus +1",
            source: "inherent"
          }
        ],
        name: "Battleaxe",
        damage: "1d8"
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "magic"
      },
      SR: {
        value: 23
      },
      naturalArmor: 15
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any",
    visualDescription: "This hulking headless corpse clutches a massive axe in each fist. A grotesquely skinned face stretches across the creature's chest.",
    description: "Malevolent spirits looking to bolster their armies often look no farther than the burial grounds of giant tribes, where hardy corpses are typically left unguarded and forgotten. After a giant is animated, it is beheaded in a gruesome ritual, the stump of its neck is cauterized into a blackened lump of scar tissue, and a twisted face manifests across its torso. What was once a fearsome giant is now a shenzushou. It loses the ability to speak and eat and can do nothing but obey the commands of whoever possesses its head-often the necromancer or oni that created it. Thrall shenzushous are nowhere near as terrible as those shenzushous whose heads have been destroyed or transported to another plane. These latter creatures run aimlessly through the land, ever searching for new heads and the control they believe attaining them will bring over the monsters' damned existences. Seeking to steal their victims' heads for themselves, shezuzhous decapitate their kills, keeping grisly collections of heads from the victims they have slain. Even without their heads, shenzuzhous stand over 8 feet tall. Cords of thick muscle twist beneath the creatures' hairless gray corpse-flesh. Their skin is cold to the touch and their wounds do not bleed. A shenzuzhou carries little else except for its weapons and the heads of its victims, strung together by their hair and hung from its belt.",
    organization: "solitary",
    languages: "Giant (can't speak)",
    spellLikeAbilities: [
      {
        name: "darkness",
        casterLevel: 8,
        timesPerDay: -1
      },
      {
        name: "cloudkill",
        casterLevel: 8,
        timesPerDay: 1
      }
    ],
    skills: {
      Climb: {
        ranks: 8
      },
      Intimidate: {
        ranks: 12
      },
      Perception: {
        ranks: 8
      },
      Stealth: {
        ranks: 6
      }
    },
    special: {
      "festering heads": {
        type: "Su",
        text: "Once the heads in a shenzuzhou's collection rot out naturally, it can hurl them as a thrown splash weapon (range increment 30 ft.) as a standard action. A thrown head ruptures on impact, releasing noxious gas that produces an effect identical to a stinking cloud spell (DC 22). The save is Charisma-based. A typical shenzuzhou carries 1d4 festering heads. The heads do not rupture if thrown by another creature."
      },
      "channel resistance": {
        universalMonsterAbility: "Channel Resistance",
        bonus: 4
      },
      "fear aura": {
        universalMonsterAbility: "Fear Aura",
        saveDC: 11,
        range: 30
      }
    }
  },

};
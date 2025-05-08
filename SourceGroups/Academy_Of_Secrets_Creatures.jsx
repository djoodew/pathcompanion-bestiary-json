
export const Academy_Of_SecretsCreatures = {
  Garipan: {
    source: "Academy Of Secrets",
    creatureType: "outsider",
    subTypes: [
      "native"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Medium",
    hd: 14,
    hdVal: 10,
    cr: 10,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 20,
      maneuverability: "Good",
      fly: 50
    },
    abilities: {
      str: 16,
      dex: 15,
      con: 18,
      int: 13,
      wis: 14,
      cha: 13
    },
    feats: [
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Great Fortitude",
        type: "General"
      },
      {
        name: "Hover",
        type: "Monster"
      },
      {
        name: "Mobility",
        type: "Combat"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Stealth",
        choiceSource: "Skill Focus"
      },
      {
        name: "Wingover",
        type: "Monster"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "burn",
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
    immunities: [
      "Immune to poison"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "-"
      },
      naturalArmor: 10
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Material Plane only)",
    visualDescription: "Batlike wings stretch behind this stone-faced creature with a wide, wild grin and fierce red eyes. The molten core in the creature's torso glows through rugged cracks in its dark stone skin.",
    description: "Vicious beings with little memory of who or what they might once have been, garipans know only two things: that they were once evils in service to the legions of Hell, and that they are no longer bound to that infernal hierarchy. With resistant, stony hides; sharp claws; and a flaming core to rival the inferno of Hell, garipans combine some of the worst depravities of devils with the freedom of beings with nothing at all to lose. These hulking, winged creatures often masquerade as gargoyles, but are actually the final state of failed conjurations. If a summoning is cast incorrectly, pulling only a portion of a devil's essence to Golarion, unidentifiable magical environmental conditions combine with the shard of the outsider's being to create a garipan. Garipans are rarely aware of the full details of their previous existence; much in the same way that lesser devils can forget their lives when they ascend to more powerful forms, newly formed garipans are overwhelmed by unfamiliar sensations. Unfettered by conjuring magic, unrestricted by magic that protects against extraplanar intrusion, and free from the threat of banishment back to Hell, garipans experience freedom for the first time, and this freedom most often results in a break from their previous lives. In combat, a garipan uses flight and the fire raging within it to its greatest advantage, swooping overhead with its breath weapon first, then closing in for a full attack with its bite and claws while its breath weapon recharges.",
    organization: "solitary or brood (4-12)",
    languages: "Common, Infernal",
    spellLikeAbilities: [
      {
        name: "statue",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "meld into stone",
        casterLevel: 10,
        timesPerDay: 3
      },
      {
        name: "scorching ray",
        casterLevel: 10,
        timesPerDay: 3
      },
      {
        name: "fireball",
        casterLevel: 10,
        timesPerDay: 1
      },
      {
        name: "flesh to stone",
        casterLevel: 10,
        timesPerDay: 1
      },
      {
        name: "wall of fire",
        casterLevel: 10,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 18
      },
      Fly: {
        ranks: 13
      },
      Intimidate: {
        ranks: 17
      },
      Perception: {
        ranks: 14
      },
      Stealth: {
        ranks: 14
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "30 ft. cone",
        damage: "usable every1d4 rounds"
      },
      burn: {
        universalMonsterAbility: "Burn",
        saveDC: 10,
        damage: "3d6"
      },
      rend: {
        universalMonsterAbility: "Rend",
        type: "Ex",
        weaponName: 4
      }
    },
    resistances: [
      {
        damageType: "acid",
        value: 5
      },
      {
        damageType: "cold",
        value: 5
      },
      {
        damageType: "fire",
        value: 5
      }
    ]
  },

};

export const Lost_Cities_Of_GolarionCreatures = {
  "Tear of Nuruu'gal": {
    source: "Lost Cities Of Golarion",
    creatureType: "ooze",
    subTypes: [
      "fire"
    ],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Small",
    hd: 5,
    hdVal: 8,
    cr: 6,
    racialFeatures: [
      "Blindsight 60 ft."
    ],
    speed: {
      base: 10,
      climb: 10
    },
    abilities: {
      str: 14,
      dex: 1,
      con: 24,
      int: 4,
      wis: 5,
      cha: 1
    },
    feats: [
      {
        name: "Ability Focus",
        type: "Monster",
        value: "Symbiosis",
        choiceSource: "Ability Focus"
      },
      {
        name: "Toughness",
        type: "General"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Slam",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Slam",
        name: "Slam",
        specialAbility: "burn, grab",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Ranged touch",
        name: "Ranged touch"
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "-"
      },
      SR: {
        value: 17
      }
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any land",
    visualDescription: "A slithering blob of amoeba-like protoplasm shines with flame, warping the air around it in a searing mirage.",
    description: "First spawned by the primordial godling Nuruu'gal in the lost Azlanti city of Nal-Vashkin, these fiery, parasitic oozes contain a portion of the creature's essence and foul sentience. The oozes hunt ceaselessly, seeking to force their amoebic protoplasm into the bodies of humanoids to turn their hosts to the service of their master, whether the hosts are willing or not. After many years of possession, the host and the symbiote may undergo a strange metamorphosis, exploding into a horrible light that catalyzes into a being known as a shining child.",
    organization: "solitary or pack (2-6)",
    languages: "telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "detect thoughts",
        casterLevel: 5,
        timesPerDay: -1
      },
      {
        name: "produce flame",
        casterLevel: 5,
        timesPerDay: -1
      },
      {
        name: "searing light",
        casterLevel: 5,
        timesPerDay: 3
      }
    ],
    skills: {
      Climb: {
        ranks: 2
      },
      Stealth: {
        ranks: 3
      }
    },
    special: {
      burn: {
        universalMonsterAbility: "Burn",
        saveDC: 10,
        damage: "1d6"
      },
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "1d6+3"
      },
      symbiosis: {
        type: "Ex",
        text: "As part of a constrict attack, a tear of Nuruu'gal can attempt to forcefully inhabit a humanoid victim's body. A DC 21 Fortitude save resists this intrusion and renders immunity to that ooze's symbiosis ability for 24 hours; failure means the ooze spends a full-round action inhabiting its new host. Once absorbed, the ooze grants incredible boons to willing hosts, or slowly incinerates unwilling victims. A willing host ceases aging, is sustained as if wearing a ring of sustenance, and becomes sterile. He or she also gains the fire subtype, spell resistance, and telepathic abilities of the tear of Nuruu'gal. A host can use the creature's spell-like abilities, with save DCs calculated using the host's Hit Dice and Charisma score, although daily limits of powers still apply. Damage dealt to the host body does not harm the ooze. Unwilling victims are granted no abilities, and are instead tortured with searing pain. Victims take automatic burn damage each round, and must succeed on a DC 21 Fortitude save or become nauseated for 1d4 rounds. While this occurs, the ooze may telepathically appeal to the host for control of the body to prevent further pain (treat control as magic jar, with no receptacle required). The ooze may vacate the body of a host as a full-round action, bursting forth in a protoplasmic expulsion, dealing double burn damage. A victim may attempt to expel the creature from his or her body as a full-round action with a DC 21 Fortitude save, but each attempt results in automatic burn damage from the ooze, and damage from the creature's violent exit if successful (as if the ooze had left voluntarily). Remove curse expels the creature, if the caster succeeds on a DC 21 caster level check. The save DCs are Constitution-based."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

};
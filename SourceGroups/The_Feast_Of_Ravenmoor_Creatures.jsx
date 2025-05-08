
export const The_Feast_Of_RavenmoorCreatures = {
  "Blightspawn of Ghlaunder": {
    source: "The Feast Of Ravenmoor",
    creatureType: "aberration",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 7,
    hdVal: 8,
    cr: 5,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Scent"
    ],
    speed: {
      base: 30,
      climb: 30,
      maneuverability: "Average",
      fly: 50
    },
    abilities: {
      str: 21,
      dex: 18,
      con: 16,
      int: 7,
      wis: 16,
      cha: 15
    },
    feats: [
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
      },
      {
        name: "Power Attack",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Sting",
        name: "Sting",
        specialAbility: "attach, poison",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to acid, cold, poison"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "magic"
      },
      naturalArmor: 4
    },
    space: "5 ft.",
    reach: "10 ft.",
    environment: "?",
    visualDescription: "This human-sized, mosquitolike creature has a long, flexible proboscis that ends in a murderous stinger.",
    description: "The blightspawn of Ghlaunder are found most often in places where the Gossamer King's cult is strong, for these creatures must gestate in the body of one of the parasite god's true believers. To the faithful of Ghlaunder, being host to an immature blightspawn is a great honor, for when the monster bursts from the body of its host, the host's consciousness lives on in some way in the blightspawn's mind, almost as if the host had reincarnated into the monster. That cultists who die giving hideous birth to a blightspawn cannot be resurrected lends a bit of weight to this notion, even if the blightspawn themselves have nothing to say on the topic. A cultist carrying an immature blightspawn functions normally in all ways until the creature emerges (typically upon the cultist's death, or at the culmination of certain vile rituals)-except that until then, the cultist can pass on new blightspawn to his or her children. A blightspawn's gestation can last for decades, and in cases in which a child is separated from infected parents, the child might live her entire life without knowing the truth of what awaits her upon death. When a blightspawn emerges from its host, it is immediately fully grown, although its gore-wet wings cannot be used for flight for 1d4 rounds after emerging.",
    organization: "?",
    languages: "Aklo (cannot speak)",
    spellLikeAbilities: [
      {
        name: "freedom of movement",
        casterLevel: 5,
        timesPerDay: -1
      },
      {
        name: "pass without trace",
        casterLevel: 5,
        timesPerDay: -1
      },
      {
        name: "bestow curse",
        casterLevel: 5,
        timesPerDay: 1
      },
      {
        name: "blur",
        casterLevel: 5,
        timesPerDay: 1
      },
      {
        name: "contagion",
        casterLevel: 5,
        timesPerDay: 1
      },
      {
        name: "diminish plants",
        casterLevel: 5,
        timesPerDay: 1
      },
      {
        name: "gust of wind",
        casterLevel: 5,
        timesPerDay: 1
      },
      {
        name: "hold monster",
        casterLevel: 5,
        timesPerDay: 1
      }
    ],
    skills: {
      Climb: {
        ranks: 0
      },
      Fly: {
        ranks: 7
      },
      Perception: {
        ranks: 7
      }
    },
    special: {
      "blood drain": {
        universalMonsterAbility: "Blood Drain",
        damage: "1d2 Con"
      },
      "stagnation gaze": {
        type: "Ex"
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
      stagnation: {
        type: "Ex",
        preText: "20 ft., DC 16"
      },
      attach: {
        universalMonsterAbility: "Attach"
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Su",
        text: "Sting-injury; save Fort DC 16; frequency 1/round for 6 rounds; effect 1d4 Wisdom damage and confusion for 1 round; cure 2 saves. The save DC is Constitution-based. Stagnation Aura (Su) A blightspawn's stagnation aura causes lethargy and torpor in those who approach it, sapping energy and speed. When a creature comes within 20 feet of a blightspawn, it must make a DC 16 Will save to avoid being affected as per the spell slow, for as long as the creature remains within the blightspawn's aura and for an additional 1d3 rounds after leaving it. Once a creature successfully saves against the aura, it is immune to that particular blightspawn's aura for 24 hours; otherwise, re-entering the aura forces a creature to save again. In addition, this aura fouls liquids of all types within the area. A creature that drinks anything in a blightspawn's aura (including potions and alchemical elixirs) must make a DC 14 Fortitude save or be nauseated for 1d3 rounds. The save DC is Constitution-based.",
        saveDC: 10
      }
    }
  },

};
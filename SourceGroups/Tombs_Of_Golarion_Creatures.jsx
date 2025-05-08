
export const Tombs_Of_GolarionCreatures = {
  "Gravitic Globe": {
    source: "Tombs Of Golarion",
    creatureType: "construct",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 20,
    hdVal: 10,
    cr: 10,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 30,
      dex: 8,
      con: "-",
      int: "-",
      wis: 1,
      cha: 1
    },
    feats: [],
    attacks: [
      {
        weapon: "Slam",
        name: "Slam",
        specialAbility: "burn",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "construct traits"
    ],
    defense: {
      naturalArmor: 10
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "?",
    visualDescription: "This large, adamantine sphere is carved to resemble the surface of Golarion, and burns with magical flame.",
    description: "Having seen a similar construct made of stone in an arcane library in the Five Kings Mountains, Alzika Karr was determined to improve upon the design. Wishing to make the construct as realistic as possible so as to fall in line with her experiences in the Darklands researching magnetic ores and magma, the Arclord procured a rare sample of a plasma ooze (Pathfinder RPG Bestiary 3 220) from a colleague in Oenopion and infused it into the core of her gravitic globe. The effects on the newly forged construct were remarkable- not only did it draw metallic objects toward it as the ooze did, but it occasionally repelled them as well. Construction A gravitic globe's outermost surface is a thin layer of adamantine galvanized around a hollow iron core containing a sample of a plasma ooze, which weighs 4,000 pounds and is worth 15,000 gp in total. GRAVITIC GLOBE CL 13th; Price 75,000 gp Construction Requirements Craft Construct; animate objects, repulsion, reverse gravity, telekinesis, creator must be caster level 13th; Skill Craft (sculptures) DC 16; Cost 45,000 gp",
    organization: "?",
    spellLikeAbilities: [],
    skills: {},
    special: {
      burn: {
        universalMonsterAbility: "Burn",
        saveDC: null,
        damage: "2d6 fire"
      },
      trample: {
        universalMonsterAbility: "Trample",
        damage: "3d6+15 plus burn",
        saveDC: 10
      },
      hardness: {
        universalMonsterAbility: "Hardness",
        value: 20
      },
      magnetism: {
        type: "Ex",
        text: "The gravitic globe is surrounded by an aura of magnetism that allows it to attract metal objects and creatures. A metal creature or creature wearing metal armor that begins its turn within the globe's aura must succeed at a DC 20 Reflex saving throw or fall prone; standing up from prone within the aura is a standard action for such creatures. Such a creature that enters the globe's aura must succeed at a DC 20 Reflex save or be pushed back 5 feet, ending its movement. On its turn, the gravitic globe can attempt a bull rush, pull, or trip combat maneuver against a single metal or metal-wearing creature within its aura as a swift action that does not provoke attacks of opportunity. Alternatively, it can attempt a disarm or steal combat maneuver targeting a metal weapon or item within its aura as a swift action that does not provoke attacks of opportunity. The erratic magnetic field surrounding the globe grants it a 20% miss chance against attacks made with metallic weapons (including ammunition), as the invisible forces make targeting unpredictable. The save DC is Constitution-based.",
        preText: "30 ft., DC 20"
      }
    }
  },

  "Prismatic Orrery": {
    source: "Tombs Of Golarion",
    creatureType: "construct",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Gargantuan",
    hd: 18,
    hdVal: 10,
    cr: 13,
    racialFeatures: [
      "All-Around Vision",
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "True Seeing"
    ],
    speed: {
      base: 0
    },
    abilities: {
      str: 25,
      dex: 14,
      con: "-",
      int: "-",
      wis: 10,
      cha: 1
    },
    feats: [],
    attacks: [
      {
        weapon: "Slam",
        name: "Slam",
        specialAbility: "grab",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "construct traits"
    ],
    defense: {
      naturalArmor: 16
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "?",
    visualDescription: "A series of metal rings rotates around a giant prismatic sphere.",
    description: "The automated orrery atop the Prismatic Lantern takes no defensive actions against intruders except when attacked or if commanded to do so by the wielder of a crystal control rod. Construction A prismatic orrery must be built around a demiplane, using rare metals and delicate optics worth a total of 50,000 gp. PRISMATIC ORRERY CL 17th; Price 170,000 gp Construction Requirements Craft Construct, animate objects, permanency, prismatic sphere, true seeing, creator must be caster level 17th; Skill Craft (clockwork) DC 25; Cost 110,000 gp",
    organization: "?",
    spellLikeAbilities: [
      {
        name: "true seeing",
        casterLevel: 13,
        limitations: "Space 20 ft.; Reach 15 ft.",
        timesPerDay: -1
      }
    ],
    skills: {
      Perception: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 12
          }
        ]
      }
    },
    special: {
      "blinding pulse": {
        type: "Ex",
        text: "As a move action, the prismatic orrery can set its lenses to refract the light of the prismatic sphere at its center, granting it a gaze attack that causes blindness in all targets that fail a DC 19 Fortitude saving throw. This gaze attack can be disabled as a move action, and is automatically disabled if the orrery uses its prismatic refraction ability or if the prismatic sphere is temporarily dispelled. The save DC is Constitution-based."
      },
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "6d6+10"
      },
      "prismatic refraction": {
        type: "Ex",
        text: "As a standard action, the prismatic orrery can position its many rings and lenses such that the magical energy of the prismatic sphere at its center is aimed in a series of beams at all targets within 60 feet. These beams take the form of a prismatic spray spell (CL 13th); determine the color of each ray randomly with a roll of 1d8 as indicated in the spell. A prismatic refraction ray is a ranged touch attack with a +17 bonus to hit and a save DC of 21. It takes the prismatic orrery 1d4 rounds to recalibrate its lenses to recharge this ability. The save DC is Dexterity-based.",
        preText: "+17 ranged touch, DC 21, every 1d4 rounds"
      },
      "dispel resistance": {
        type: "Su",
        text: "The prismatic sphere at the center of the orrery (CL 20th) can be dispelled with a targeted dispel magic spell, but only temporarily. As the sphere is fueled by the elemental energies within the Prismatic Lantern's demiplane, it reappears after 1d3 rounds. While the prismatic sphere is inactive, the prismatic orrery cannot use its blinding pulse and prismatic refraction abilities. Prismatic Refraction (Ex) As a standard action, the prismatic orrery can position its many rings and lenses such that the magical energy of the prismatic sphere at its center is aimed in a series of beams at all targets within 60 feet. These beams take the form of a prismatic spray spell (CL 13th); determine the color of each ray randomly with a roll of 1d8 as indicated in the spell. A prismatic refraction ray is a ranged touch attack with a +17 bonus to hit and a save DC of 21. It takes the prismatic orrery 1d4 rounds to recalibrate its lenses to recharge this ability. The save DC is Dexterity-based."
      },
      hardness: {
        universalMonsterAbility: "Hardness",
        value: 10
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

};
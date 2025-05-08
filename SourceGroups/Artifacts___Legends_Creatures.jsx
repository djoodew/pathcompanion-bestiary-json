
export const Artifacts___LegendsCreatures = {
  "Dancing Hut Of Baba Yaga": {
    source: "Artifacts & Legends",
    creatureType: "construct",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Huge",
    hd: 27,
    hdVal: 10,
    cr: 17,
    racialFeatures: [
      "Blindsight 120 ft."
    ],
    speed: {
      base: 60
    },
    abilities: {
      str: 37,
      dex: 34,
      con: "-",
      int: "-",
      wis: 27,
      cha: 25
    },
    feats: [],
    attacks: [
      {
        weapon: "Claw",
        name: "2 Claws",
        specialAbility: "grab",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Slam",
        name: "Slam",
        specialAbility: "grab",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "construct traits",
      "Immune to gaze attacks, visual effects and illusions, sight-based attacks"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: " adamantine"
      },
      SR: {
        value: 28
      },
      naturalArmor: 14
    },
    space: "15 ft.",
    reach: "15 ft.",
    environment: "any land",
    visualDescription: "A rustic hut stands here, its timber walls hung with bundles of drying herbs and etched with eerie symbols. From beneath its splintering wooden porch extends a pair of legs, like those of a fifteen-foot-tall chicken with gigantic talons caked in mud but sharp as razors.",
    description: "A rustic hut stands here, its timber walls hung with bundles of drying herbs and etched with eerie symbols. From beneath its splintering wooden porch extends a pair of legs, like those of a fifteen-foot-tall chicken with gigantic talons caked in mud but sharp as razors.",
    organization: "solitary (none)",
    languages: "understands any (cannot speak)",
    spellLikeAbilities: [
      {
        name: "dimensional anchor",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "freedom of movement",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "irresistible dance",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "blink",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "dimension door",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "incendiary cloud",
        casterLevel: 15,
        timesPerDay: 3
      }
    ],
    skills: {},
    special: {
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "2d6+19"
      },
      "fast swallow": {
        type: "Ex"
      },
      "swallow whole": {
        universalMonsterAbility: "Swallow Whole",
        damage: "see below"
      },
      trample: {
        universalMonsterAbility: "Trample",
        damage: "2d8+19",
        saveDC: 10
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        value: null
      },
      evasion: {
        universalMonsterAbility: "Evasion"
      },
      "immortal structure": {
        type: "Ex",
        text: "Reducing the Dancing Hut to 0 hit points causes its legs to buckle, bringing the hut itself toppling to the ground. Such a defeat has no effect on the hut's extradimensional interior or any creatures inside the hut. The hut remains immobile and unresponsive to its owner's commands to move or use any of the special abilities described in its creature stat block for 24 hours, though the transportive abilities of the hut and its cauldron can still be employed. The hut cannot be reduced to fewer than 0 hit points, no matter what damage, circumstances, or environment it might be subjected to after its defeat. After 24 hours, the hut regains half its hit points (94 hp) and its fast healing ability reactivates. It may then use its special abilities to escape from nearly any situation it finds itself in. The Dancing Hut can only be destroyed by the method detailed in the artifact's destruction entry. Swallow Whole (Ex) If the Dancing Hut successfully grapples a creature with its slam attack, the victim is scooped up by the hut's front door and flung inside. The target appears within the extradimensional space inside the hut-the layout of which depends upon the hut's physical location (see the map on page 23 for a sample layout of the hut's interior). Being inside the hut is not necessarily dangerous, unless one of Baba Yaga's guardians is there or Baby Yaga herself is home. A swallowed creature can attempt to escape by breaking open the front door, a deceptively sturdy barrier with hardness 15 and 100 hit points that also benefits from the hut's fast healing ability. The hut can expel swallowed creatures as a full-round action, flinging them from its open door. It must make a combat maneuver check against creatures that don't wish to leave, with failure meaning the target is able to hold on to the pitching and warping interior. The hut may choose which creatures it wishes to expel and which to keep inside."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "60 ft."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

};
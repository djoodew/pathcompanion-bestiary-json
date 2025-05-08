
export const Masks_Of_The_Living_GodCreatures = {
  "Mask Golem": {
    source: "Masks Of The Living God",
    creatureType: "construct",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 4,
    hdVal: 10,
    cr: 4,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 18,
      dex: 17,
      con: "-",
      int: 7,
      wis: 12,
      cha: 13
    },
    feats: [
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Lightning Reflexes",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Slam",
        name: "2 Slams",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "construct traits",
      "Immune to magic"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "bludgeoning"
      },
      naturalArmor: 4
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "This creature is made of hundreds of metal masks, welded together to form a roughly humanoid body. The masks are mostly iron, but some-such as the hands, knees, and feet- are made of silver lined with gold. The mask that makes up its head is made of porcelain with gold trim and has a large sapphire set into its brow. At the creature moves, the masks seem to shift and stare.",
    description: "Made up of hundreds of masks, a mask golem is a construct forged by the faithful of Razmir to honor the Living God. These constructs are often placed in their temples or other locations that they wish to protect, such as treasure vaults or private sanctuaries for powerful priests. They spend much of their time completely immobile, only coming to life when their instructions force them to take action. Many acolytes are unaware of their true nature, having spent years viewing them as simple statues. Mask golems can understand Common, but they cannot speak. While they possess intelligence, they are bound by the orders of their creators and are seldom given free reign when assigned to a task. Rarely, these golems are employed as assassins, sent out to punish or kill those that threaten the church. While all of the masks that make up the golem's body are copies of the holy symbol of Razmir, they are made of different materials. Most are simple iron, but the masks around the joints are made of silver with gold trim, and the head is made from a specially crafted porcelain mask, set with a sapphire. When a mask golem is destroyed, these valuable masks remain, and are worth 1,000 gp in total. The sapphire is worth 500 gp. A mask golem stands 5 feet tall and weighs 300 pounds. Construction A mask golem's body is made from hundreds of iron masks, as well as a few that are plated in silver and trimmed with gold, worth a total of 2,000 gp. In addition, the crafter must place a sapphire worth 500 gp into the golem's forehead to complete its creation. Mask Golem CL 9th; Price 22,500 gp Constr uctio n Requirements Craft Construct, dominate person, see invisibility, telekinesis, creator must be caster level 9th; Skill Craft (sculptures) DC 16; Cost 12,500 gp",
    organization: "solitary",
    beforeCombat: "A mask golem fights to defend the area it has been built to protect, even if this results in its destruction.",
    duringCombat: "A mask golem attempts to control any powerful melee combatant that moves to threaten it using its mask of obedience ability. Against ranged opponents, it uses its mask of solitude. If these do not work, it relies on its slam attacks instead.",
    spellLikeAbilities: [
      {
        name: "see invisibility",
        casterLevel: 4,
        timesPerDay: -1
      }
    ],
    skills: {
      Perception: {
        ranks: 4
      }
    },
    special: {
      "masks of control": {
        name: ":",
        type: "Su",
        text: " As a standard action, a mask golem can force one of its masks onto a humanoid opponent's face. This ability has a range of 30 feet. Attaching a mask in this way requires a successful combat maneuver check and does not provoke an attack of opportunity. Once in place, the mask has one of two effects. Obedience: The target must make a DC 13 Will save each round or fall under the mask golem's control for 1 round. This functions as dominate person. The save DC is Charisma-based. Solitude: The target cannot speak, breathe, or hear while the mask is in place. The mask can be removed with a successful combat maneuver check against the mask golem's CMD. The mask can also be destroyed, but half of any damage dealt is made to the target instead of the mask. The mask has Hardness 5 and 5 hit points. A mask golem has a number of masks equal to its Hit Dice (usually 4). If removed from a victim, the mask returns to the golem immediately and can be used again. Destroyed masks are replenished at the rate of 1 per day."
      },
      "swarm form": {
        name: ":",
        type: "Ex",
        text: "rm Form (Ex): Once per day as a standard action, a mask golem can assume the form of a swarm of masks. While in this form, it gains the swarm subtype, a fly speed of 60 feet (average), a swarm attack that deals 1d6 points of damage, and the distraction quality (DC 12). Anyone whotakes damage from the swarm attack can also be attacked with one of the golem's masks of control as a free action (assuming the golem has enough masks available). The swarm is made up of Tiny creatures, but does not gain any additional damage reduction. A mask golem can maintain this form for a number of minutes equal to its Hit Dice. Any damage dealt to the swarm is subtracted from the golem's hit points, as normal."
      }
    },
    resistances: [
      "vulnerability to sonic"
    ]
  },

};
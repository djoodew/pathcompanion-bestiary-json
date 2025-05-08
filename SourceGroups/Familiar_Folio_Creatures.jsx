
export const Familiar_FolioCreatures = {
  Chicken: {
    source: "Familiar Folio",
    creatureType: "animal",
    flying: true,
    subTypes: [],
    legs: 2,
    arms: 0,
    alignments: [
      "Neutral"
    ],
    size: "Tiny",
    hd: 1,
    hdVal: 8,
    cr: "1/6",
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 30,
      maneuverability: "Clumsy",
      fly: 20
    },
    abilities: {
      str: 3,
      dex: 11,
      con: 12,
      int: 2,
      wis: 12,
      cha: 13
    },
    feats: [
      {
        name: "Improved Initiative",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {},
    space: "2-1/2 ft.",
    reach: "0 ft.",
    environment: "?",
    visualDescription: "This fowl has a compact body, a short beak flanked by red wattles, and a crimson comb on the crown of its head.",
    description: "While not particularly useful to travelers as combatants, chickens are prized for the hearty breakfast meals they provide if properly fed and cared for. Chickens are highly social creatures that raise their young communally. They're picky about the spots where they roost, and a hen rarely strays from a particular nest once she's laid her eggs there. A fertilized chicken egg hatches into a chick after roughly 3 weeks of incubation. In addition to their quick reproductive cycles, chickens have the ability to thrive on simple foods, and they are valued in both rural farming communities and metropolitan areas for their delicious and nutrient-rich eggs and meat. A hen bred for laying eggs can produce up to one egg every 24 hours. Master's Special Ability +3 hit points A chicken is about 1 foot tall and weighs 5 pounds.",
    organization: "?",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 0
      },
      Perception: {
        ranks: 1
      }
    },
    special: {
      drift: {
        type: "Ex",
        text: "A chicken flies in short bursts, and can't use its fly speed to hover. When it flies, a chicken must end its move action by landing or perching on a solid surface."
      }
    }
  },

  Mole: {
    legs: 2,
    arms: 2,
    source: "Familiar Folio",
    creatureType: "animal",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Tiny",
    hd: 1,
    hdVal: 8,
    cr: "1/6",
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 20,
      burrow: 10
    },
    abilities: {
      str: 5,
      dex: 11,
      con: 14,
      int: 2,
      wis: 10,
      cha: 7
    },
    feats: [
      {
        name: "Skill Focus",
        type: "General",
        value: "Perception",
        choiceSource: "Skill Focus"
      }
    ],
    attacks: [
      {
        weapon: "Claw",
        name: "Claw",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {},
    space: "2-1/2 ft.",
    reach: "0 ft.",
    environment: "any land",
    visualDescription: "This brown, apparently eyeless rodent has a furry cylindrical body, a pointed snout, and large, thick paws that end in digging claws.",
    description: "Moles are small rodent mammals that live primarily in burrows underground. While many varieties of moles exist, most share common features that include subterranean habitats, poor eyesight, and the ability to dig long distances with their powerful forelimbs. The typical mole is 6 inches long and weighs less than a pound. These familiars are popular choices with ratfolk. Master's Special Ability +3 bonus on smell-, taste-, and touch-based Perception checks",
    organization: "solitary, pair, or labor (3-5)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 1
      }
    },
    special: {
      "hold breath": {
        universalMonsterAbility: "Hold Breath",
        parenthetical: ""
      }
    }
  },

  Pufferfish: {
    legs: 0,
    arms: 0,
    source: "Familiar Folio",
    creatureType: "animal",
    fish: true,
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Tiny",
    hd: 1,
    hdVal: 8,
    cr: "1/4",
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      swim: 20
    },
    abilities: {
      str: 4,
      dex: 14,
      con: 15,
      int: 1,
      wis: 12,
      cha: 9
    },
    feats: [
      {
        name: "Agile Maneuvers",
        type: "Combat"
      }
    ],
    attacks: [],
    defense: {},
    space: "2-1/2 ft.",
    reach: "0 ft.",
    environment: "warm coastlines",
    visualDescription: "This spotted fish has pronounced eyes, a wide mouth, and tiny, brightly colored spikes protruding from its round body.",
    description: "Pufferfish (or \"puffers\") are a category of poisonous fish that dwell in warm coastal waters. Pufferfish have the ability to rapidly fill their stomachs with water or air, causing their bodies to balloon out and make the poisonous spikes on their skin more pronounced. While certain aquatic sharks and other animals have adapted to eat pufferfish, the puffer's tetrodotoxin (typically delivered via the spines on the fish's skin, though prevalent throughout its organs as well) remains highly poisonous to humans and most mammals. Puffers come in a large variety of sizes and varieties, and most range from 6 inches to 2 feet in length and weigh between 5 and 30 pounds. Certain societies in Tian Xia (particularly in the coastal regions of Minkai) regard pufferfish meat as a delicacy. The specially trained chefs capable of reliably distinguishing the poisonous parts of the pufferfish from the nontoxic parts are highly prized by members of Tian nobility. Master's Special Ability +2 bonus on Fortitude saves",
    organization: "solitary or school (2-8)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 1
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      poison: {
        universalMonsterAbility: "Poison",
        name: "Tetrodotoxin",
        type: "Ex",
        text: "Tetrodotoxin: Spines-injury; save Fort DC 12; frequency once; initial effect staggered for 1 round; secondary effect paralysis for 1d4 rounds; cure 2 consecutive saves. The save DC is Constitution-based.",
        saveDC: 10
      },
      spines: {
        type: "Ex",
        text: "Pufferfish aren't equipped attack other creatures, but foes that strike a pufferfish with an unarmed strike or natural attack risk being poisoned by the fish's toxic spines, and must immediately save against the pufferfish's tetrodotoxin."
      }
    }
  },

  Popoto: {
    source: "Familiar Folio",
    creatureType: "animal",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Small",
    hd: 1,
    hdVal: 8,
    cr: "1/3",
    racialFeatures: [
      "Blindsight 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      swim: 60
    },
    abilities: {
      str: 8,
      dex: 17,
      con: 11,
      int: 2,
      wis: 13,
      cha: 6
    },
    feats: [
      {
        name: "Weapon Finesse",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Slam",
        name: "Slam",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 1
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "?",
    visualDescription: "This sleek mammal has a short snout and black, white, and gray markings along its body, with a rounded black dorsal fin.",
    description: "Popotos are the smallest breed of dolphin, and generally swim in shallow waters near shorelines. They are social hunters, traveling in small groups called pods, which normally contain three to five popotos. Like larger dolphins, popotos are popular with seafarers, who consider the creatures good luck and tell tales of popotos leading lost swimmers to shore and pods fighting off sharks much larger than themselves. Master's Special Ability +3 bonus on Swim checks",
    organization: "?",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 1
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      "hold breath": {
        universalMonsterAbility: "Hold Breath",
        parenthetical: ""
      }
    }
  },

  Koala: {
    legs: 2,
    arms: 2,
    source: "Familiar Folio",
    bear: true,
    creatureType: "animal",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Small",
    hd: 1,
    hdVal: 8,
    cr: "1/4",
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 20,
      climb: 20
    },
    abilities: {
      str: 6,
      dex: 11,
      con: 12,
      int: 1,
      wis: 9,
      cha: 8
    },
    feats: [
      {
        name: "Weapon Finesse",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "?",
    visualDescription: "This wide-faced animal looks like a small, plump bear, with a flat black nose, small round eyes, and white-tufted ears that protrude from the sides of its head.",
    description: "The koala's cute appearance belies the tree-climbing marsupial's aggressive nature. Koalas subsist solely on the leaves of the eucalyptus tree, which are all but inedible to most other mammals. Because of their highly selective diet, most koalas see little reason to stray from eucalyptus trees at all, and so spend most of their lives hanging onto branches or moving from crook to crook by swinging between boughs. When a koala walks (usually just to get from tree to tree), it does so on all fours. A koala measures about 2-1/2 feet from tail to nose and can weigh up to 30 pounds. Master's Special Ability +3 bonus on Climb checks",
    organization: "?",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 0
      },
      Perception: {
        ranks: 1
      }
    },
    special: {}
  },

  Peacock: {
    legs: 2,
    arms: 0,
    source: "Familiar Folio",
    creatureType: "animal",
    bird: true,
    flying: true,
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Small",
    hd: 1,
    hdVal: 8,
    cr: "1/4",
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 20,
      maneuverability: "Clumsy",
      fly: 40
    },
    abilities: {
      str: 7,
      dex: 12,
      con: 10,
      int: 1,
      wis: 6,
      cha: 13
    },
    feats: [
      {
        name: "Weapon Finesse",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Talon",
        name: "2 Talons",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "?",
    visualDescription: "This bird's royal blue body is upstaged only by the magnificent array of feathers that radiate from its back.",
    description: "Peacocks are the male variety of a family of pheasants collectively called peafowls. Their female counterparts, peahens, don't possess the brightly colored iridescent plumage typically associated with peacocks, and instead sport gray or brown feathers. Some cultures also breed peafowls with white plumage that may or may not have coloration on the rest of their bodies. A peacock displays its brightly colored feathers to impress and court peahens as well as to scare off potential predators. The colorful \"eye\" patterns in the feathers also make them popular symbols and decorations among fortune-tellers and royalty. While the male variety is more commonly recognized, all peafowl have identical statistics. A peacock is 3-1/2 feet tall and weighs about 10 pounds. Master's Special Ability +3 bonus on Intimidate",
    organization: "?",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 0
      }
    },
    special: {
      drift: {
        type: "Ex",
        text: "A peacock flies in short bursts, and can't use its fly speed to hover. When it flies, a peacock must end its move action by landing or perching on a solid surface."
      }
    }
  },

  Penguin: {
    source: "Familiar Folio",
    creatureType: "animal",
    bird: true,
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Small",
    hd: 1,
    hdVal: 8,
    cr: "1/3",
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 10,
      swim: 40,
      toboggan: 30
    },
    abilities: {
      str: 9,
      dex: 8,
      con: 13,
      int: 2,
      wis: 12,
      cha: 7
    },
    feats: [
      {
        name: "Skill Focus",
        type: "General",
        value: "Perception",
        choiceSource: "Skill Focus"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 1
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "?",
    visualDescription: "This three-foot-tall, thickset bird has smooth black and white plumage that yellows around the neck, a long beak, and black flippers that lie flat against the animal's sides.",
    description: "Many varieties of penguins exist, though most display similar characteristics. The penguin's most distinctive trait is the tuxedo-style coloration of its feathers, which acts as camouf lage while the penguin hunts for fish underwater; the black back and flippers allow the penguin to blend in with the water when viewed from above, while its white belly resembles the bright sky when seen from below water. A penguin of the most common variety stands roughly 3 feet tall and weighs 70 pounds. Larger species of penguin can grow to heights of 4 feet and weigh as much as 100 pounds. Master's Special Ability +3 bonus on Swim checks",
    organization: "?",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 1
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      "hold breath": {
        universalMonsterAbility: "Hold Breath",
        parenthetical: ""
      }
    }
  },

  Wallaby: {
    legs: 2,
    arms: 2,
    source: "Familiar Folio",
    creatureType: "animal",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Small",
    hd: 1,
    hdVal: 8,
    cr: "1/3",
    racialFeatures: [
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 12,
      dex: 14,
      con: 11,
      int: 1,
      wis: 9,
      cha: 4
    },
    feats: [
      {
        name: "Skill Focus",
        type: "General",
        value: "Acrobatics",
        choiceSource: "Skill Focus"
      }
    ],
    attacks: [
      {
        weapon: "Kick",
        name: "Kick",
        damage: "1d3"
      }
    ],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "?",
    visualDescription: "Resembling nothing so much as a large rodent that stands on its powerful hind legs, this brown mammal has a long tail and short arms that end in five-fingered paws.",
    description: "Wallabies are squat mammals that hail from a distant land far from the Inner Sea. The wallaby is often mistakenly identified as a small kangaroo. Like all marsupials, wallabies carry their newborn young in pouches at the front of their bodies. The wallaby defends itself using its strong hind legs, which it can launch quickly from under its body to deliver a powerful kick that sends would-be predators reeling. A wallaby stands about 2 feet tall and weighs 20-40 pounds. Master's Special Ability +3 bonus on Acrobatics",
    organization: "?",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 0
      },
      Perception: {
        ranks: 1
      }
    },
    special: {}
  },

  "Cat Sith": {
    legs: 4,
    arms: 0,
    source: "Familiar Folio",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Tiny",
    hd: 3,
    hdVal: 10,
    cr: 2,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "See Invisibility"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 8,
      dex: 16,
      con: 12,
      int: 11,
      wis: 13,
      cha: 15
    },
    feats: [
      {
        name: "Ability Focus",
        type: "Monster",
        value: "False curse",
        choiceSource: "Ability Focus"
      },
      {
        name: "Stealthy",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Claw",
        name: "2 Claws",
        specialAbility: "no luck",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {},
    space: "2-1/2 ft.",
    reach: "0 ft.",
    environment: "temperate hills",
    visualDescription: "This slinky black feline has a single white spot on its chest. Its mannerisms and movements are eerily human.",
    description: "Cat siths are inscrutable feline creatures that inhabit highlands around towns and cities. They resemble common housecats at a glance, but cat siths are supernatural beings that have the cunning of civilized races and strange magical powers rivaling those of fey. They're capable of easily walking balanced on just their hind legs and wearing magic boots. They can carry one object in their front paws when walking bipedally, though they can't manipulate such objects with the fine control required to use weapons, wands, and similar objects. Unpredictable yet sophisticated, these strange beings use their unassuming appearances to infiltrate civilized areas, either serving as spies for powerful spellcasters or entertaining their own unknowable agendas. Many cultures fear cat siths and tell myths about their otherworldly powers. Some say that letting a cat sith near an unburied corpse may allow the beast to steal the departed's soul before it has made it to the Great Beyond. A 7th-level spellcaster with the Improved Familiar feat can gain a cat sith as a familiar. Cat siths are heavier than most housecats, weighing between 25 and 30 pounds. A cat sith is nearly 2 feet long from its nose to the base of its tail.",
    organization: "solitary, pair, or band (3-7)",
    languages: "Common; speak with animals",
    spellLikeAbilities: [
      {
        name: "see invisibility",
        casterLevel: 3,
        timesPerDay: -1
      },
      {
        name: "ghost sound",
        casterLevel: 3,
        timesPerDay: 3
      },
      {
        name: "hypnotism",
        casterLevel: 3,
        timesPerDay: 3
      },
      {
        name: "magic aura",
        casterLevel: 3,
        timesPerDay: 3
      },
      {
        name: "rest eternal",
        casterLevel: 3,
        timesPerDay: -1,
        timesPerWeek: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 2
      },
      "Escape Artist": {
        ranks: 0
      },
      Perception: {
        ranks: 2
      },
      Stealth: {
        ranks: 2
      }
    },
    special: {
      "false curse": {
        type: "Su",
        text: "Once per day, a cat sith can fool a creature into believing it has been cursed by the cat sith's black magic. The target must be within 60 feet and must be able to see the cat sith to be affected by the false curse (Will DC 15 negates). An affected creature takes a -4 penalty on attack rolls, saving throws, ability checks, and skill checks, as if affected by bestow curse. Because this effect is not a true curse, the target gains a new saving throw to end the effect at the beginning of each day. This is a language-dependent, mind-affecting effect that can be affected by remove curse. The save DC is Charisma-based.",
        preText: "DC 15"
      },
      "no luck": {
        type: "Su",
        text: "A creature hit by a cat sith's claws must succeed at a DC 13 Will save or be stricken with lucklessness. For 1d4 rounds, the affected creature can't benefit from any luck bonuses. The save DC is Charisma-based."
      }
    }
  },

  Caypup: {
    legs: 4,
    arms: 0,
    source: "Familiar Folio",
    creatureType: "outsider",
    subTypes: [
      "native"
    ],
    alignments: [
      "Chaotic Good"
    ],
    size: "Small",
    hd: 3,
    hdVal: 10,
    cr: 2,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Scent"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 15,
      dex: 11,
      con: 14,
      int: 6,
      wis: 9,
      cha: 12
    },
    feats: [
      {
        name: "Dimensional Agility",
        type: "General"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      }
    ],
    attacks: [
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
        damageType: "cold iron"
      },
      naturalArmor: 3
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any land",
    visualDescription: "This large, regal canine looks like a juvenile mastiff. It has red fur and vibrant blue eyes.",
    description: "Cayhounds-as fickle and determined as their patron god and master, Cayden Cailean-sometimes birth pups on the Material Plane or Elysium. These half-celestial offspring are known to mortals as caypups. Like their otherworldly forebears, caypups are driven to perform acts of good and to halt wrongdoing in the lands they roam. Caypups sometimes join adventurers in hopes of reenacting the legendary deeds of Cayden Cailean and his hound, Thunder. A 7th-level spellcaster with the Improved Familiar feat can gain a caypup as a familiar. After maturing through infancy, caypups reach an adolescent state that they occupy for their entire lives. Resembling juvenile mastiffs with rust-red fur and piercing blue eyes, caypups are 4 feet from nose to tail and weigh about 75 pounds.",
    organization: "solitary or pack (2-4)",
    languages: "Celestial (can't speak)",
    spellLikeAbilities: [
      {
        name: "knock",
        casterLevel: 3,
        timesPerDay: 3
      },
      {
        name: "open/close",
        casterLevel: 3,
        timesPerDay: 3
      },
      {
        name: "stabilize",
        casterLevel: 3,
        timesPerDay: 3
      },
      {
        name: "dimension door",
        casterLevel: 3,
        limitations: "self plus 5 lbs. of objects only",
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 6
      },
      Intimidate: {
        ranks: 6
      },
      Perception: {
        ranks: 3
      },
      "Sense Motive": {
        ranks: 3
      }
    },
    special: {
      "thunderous growl": {
        type: "Su",
        text: "Three times per day, a caypup can issue a rumbling growl from its throat that sounds like distant thunder and scares away potential attackers. Creatures within 15 feet of the caypup must succeed at a DC 12 Will save to attack the caypup (as if affected by sanctuary). The caypup can choose to bestow the same effect on an adjacent ally as well. This effect lasts for 3 rounds or until the caypup or its ally attacks (whichever comes first), after which time the caypup must wait at least 1d6 rounds before using this ability again. The save DC is Charisma-based."
      }
    }
  },

  Pseudosphinx: {
    legs: 4,
    arms: 0,
    source: "Familiar Folio",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Tiny",
    hd: 3,
    hdVal: 10,
    cr: 2,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 20,
      maneuverability: "Average",
      fly: 30
    },
    abilities: {
      str: 5,
      dex: 14,
      con: 11,
      int: 9,
      wis: 16,
      cha: 12
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Iron Will",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
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
    defense: {
      DR: {
        value: 5,
        damageType: "magic"
      },
      SR: {
        value: 13
      },
      naturalArmor: 1
    },
    space: "2-1/2 ft.",
    reach: "0 ft.",
    environment: "warm deserts",
    visualDescription: "This small creature has the body of a housecat, the wings of a falcon, and the head of a monkey.",
    description: "Pseudosphinxes are cat-sized, fairylike creatures thought to be distant cousins to the larger and better-known true sphinxes. They most resemble gynosphinxes, though the pseudosphinxes' monkeylike heads and tiny bodies ensure that the two species are never confused for each other. A typical pseudosphinx is 2 feet long and weighs 10 pounds. Pseudosphinxes are rarely found in groups, and scholars are unsure whether to attribute their cryptic origins to elusive demeanors or amnesic memories. Whether they're the misbegotten progeny of generations of lesser sphinxes or the result of some magical experiment in the same deserts where sphinxes are found, none can say. A pseudosphinx can serve as the familiar for a 7th-level spellcaster with the Improved Familiar feat.",
    organization: "solitary",
    languages: "Common, Sphinx",
    spellLikeAbilities: [
      {
        name: "comprehend languages",
        casterLevel: 5,
        timesPerDay: -1
      },
      {
        name: "detect magic",
        casterLevel: 5,
        timesPerDay: -1
      },
      {
        name: "detect secret doors",
        casterLevel: 5,
        timesPerDay: -1
      },
      {
        name: "burning hands",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "cause fear",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "identify",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "vanish",
        casterLevel: 5,
        timesPerDay: 3
      }
    ],
    skills: {
      Fly: {
        ranks: 0
      },
      Perception: {
        ranks: 3
      },
      "Sense Motive": {
        ranks: 0
      }
    },
    special: {
      "aided insight": {
        type: "Su",
        text: "Once per day, a pseudosphinx can tap into the wisdom of its ancestors to answer a question for another creature. To do so, the pseudosphinx attempts a Wisdom check, gaining a bonus on the check equal to the querent's level and treating the result of the check as the result of an appropriate Knowledge check. The pseudosphinx must be touching the querent to use this ability."
      }
    }
  },

  "Ioun Wyrd": {
    legs: 0,
    arms: 0,
    source: "Familiar Folio",
    creatureType: "construct",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Tiny",
    hd: 1,
    hdVal: 10,
    cr: "1/3",
    racialFeatures: [
      "Blindsight 30 ft."
    ],
    speed: {
      maneuverability: "Average",
      fly: 30
    },
    abilities: {
      str: 4,
      dex: 15,
      con: "-",
      int: 3,
      wis: 14,
      cha: 5
    },
    feats: [
      {
        name: "Dodge",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Slam",
        name: "Slam",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "construct traits"
    ],
    defense: {},
    space: "2-1/2 ft.",
    reach: "0 ft.",
    environment: "any",
    visualDescription: "This creature is made of dozens of continually shifting shiny rocks and gemstones. Its centermost stone is larger than the others and occasionally pulses with dim light.",
    description: "Ioun wyrds appear to be extraplanar creatures somewhat resembling earth elementals, but they're actually bizarre constructs, assembled in laboratories throughout Golarion to serve equally unusual masters. Ioun wyrds have occasionally been found in the wild, typically in regions near hidden wizards' towers or discreet arcane laboratories in the Nexian highlands or Thuvian deserts, if only because mages sometimes find it difficult to keep track of these wily beings. Left to their own devices, ioun wyrds seek out abandoned mines, gem-rich caverns, or lonely grottos where they might find pretty stones, which they see as somehow related to themselves. A typical ioun wyrd is roughly 2 feet in diameter and weighs 15-20 pounds. Construction An ioun wyrd is made of small gemstones, lodestones, and bits of granite which are coated with 500 gp worth of alchemical materials. A single functional ioun stone must also be present, which the ioun wyrd takes as the first ioun stone to be integrated into its body with its ioun aff inity. IOUN WYRD CL 5th; Price 1,500 gp plus ioun stone Construction Requirements Craft Construct, animate object, lesser geas; Skill Knowledge (arcana) DC 15; Cost 1,000 gp plus ioun stone",
    organization: "solitary",
    languages: "Common (can't speak)",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 4
      },
      Perception: {
        ranks: 0
      }
    },
    special: {
      "ioun affinity": {
        type: "Su",
        text: "An ioun wyrd may integrate a number of ioun stones into its body up to 1 + 1/2 its Hit Dice. Because an ioun wyrd sees all ioun stones as equal and gains no benefits from them, the wyrd's ioun stones can be swapped out by any creature the wyrd trusts."
      },
      "share iouns": {
        type: "Su",
        text: "A character with an ioun wyrd familiar gains the benefits of its ioun stones as long as he's within 30 feet of the ioun wyrd."
      }
    }
  },

  "Leopard Slug": {
    source: "Familiar Folio",
    legs: 0,
    arms: 0,
    creatureType: "vermin",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Diminutive",
    hd: 1,
    hdVal: 8,
    cr: "1/8",
    racialFeatures: [
      "Darkvision 30 ft."
    ],
    speed: {
      base: 10,
      climb: 10
    },
    abilities: {
      str: 1,
      dex: 4,
      con: 12,
      int: "-",
      wis: 7,
      cha: 9
    },
    feats: [],
    attacks: [],
    immunities: [
      "Immune to mind-affecting effects"
    ],
    defense: {},
    space: "1 ft.",
    reach: "0 ft.",
    environment: "temperate forests",
    visualDescription: "This dark yellow, hand-length slug is covered in a pattern of black spots and stripes.",
    description: "Leopard slugs are among the largest species of slug, and are certainly the most distinctive due to their unique coloration, which often resembles that of a leopard. This characteristic pattern allows leopard slugs to blend in with foliage and stones in the forest environments they call home. Occasionally, one can find more colorful varieties of leopard slug (such as fluorescent orange, bright yellow, or flaming red), bred specifically as pets or familiars by the esoteric masters who prefer such creatures. Leopard slugs are about 6 inches long and weigh less than a pound.",
    organization: "solitary, pair, or cornucopia (3-10)",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 0
      }
    },
    special: {
      compression: {
        universalMonsterAbility: "Compression"
      },
      "slime strand": {
        type: "Ex",
        text: "A leopard slug can turn its mucus into a 30-foot-long strand, much like a spider's silk. It can hang from this strand indefinitely, and lower itself safely at a rate of 10 feet per round. It can climb back up the strand at the same rate. Once the slug breaks contact with the strand, the mucus disintegrates in 1d4 rounds."
      },
      suction: {
        type: "Ex",
        text: "A leopard slug secretes sticky mucus, which allows it to apply its 10-foot climb speed to any surface, even sheer walls and ceilings. Once attached to a surface, it has no chance of falling off, unless it's grappled and actively peeled away."
      }
    }
  },

  Petrifern: {
    legs: 2,
    arms: 2,
    source: "Familiar Folio",
    creatureType: "plant",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Diminutive",
    hd: 1,
    hdVal: 8,
    cr: "1/6",
    racialFeatures: [
      "Blindsight 30 ft."
    ],
    speed: {
      base: 20
    },
    abilities: {
      str: 2,
      dex: 9,
      con: 13,
      int: "-",
      wis: 6,
      cha: 9
    },
    feats: [],
    attacks: [],
    defense: {
      naturalArmor: 2
    },
    space: "1 ft.",
    reach: "0 ft.",
    environment: "any forests",
    visualDescription: "This tiny, unassuming tree is shaped like a miniature person, with branches for arms and roots for feet.",
    description: "The petrifern is an unusual plant creature that resembles a small humanoid-shaped fern, and is able to walk about on its roots. It has the unusual ability to petrify itself at will, hardening its branches and leaves to resemble those of a plant that has been fossilized by natural means. A petrifern's chemical makeup not only allows it to petrify itself, but also doubles as a toxin that the plant can emit from its foliage when it senses danger. Like all plants, petriferns subsist on sunlight, oxygen, and water. But unlike most flora, they can relocate themselves to ensure they always receive an abundance of nutrients. Once rooted, a petrifern typically petrifies itself until either the nearby soil is depleted of nutrients or external factors cause it to seek sustenance elsewhere. Petriferns reach a maximum height of 1 foot and weigh up to 3 pounds.",
    organization: "solitary, bundle (2-14), or hive (15-60)",
    spellLikeAbilities: [],
    skills: {},
    special: {
      petrify: {
        type: "Ex",
        text: "A petrifern can petrify itself as a standard action in order to defend itself from predators. When it does so, the petrifern's natural armor bonus to AC increases by 5, it gains resistance 10 to cold and fire, and it can take 20 on Stealth checks to appear as a sprout or fallen tree branch. While petrified, the petrifern can't move or take any actions. A petrifern can remain petrified indefinitely, and can cease its petrification as a standard action."
      },
      "toxic secretion": {
        type: "Ex",
        text: "Petriferns secrete a bitter toxin meant to make them distasteful to predators. Once per day when a creature touches a petrifern, the plant can release its toxin, causing the attacker to become sickened for 1d4 rounds if it fails a DC 11 Fortitude saving throw. The save DC is Constitution-based."
      }
    }
  },

};
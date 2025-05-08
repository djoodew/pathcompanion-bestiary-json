
export const Shifting_SandsCreatures = {
  "Giant Assassin Bug": {
    source: "Shifting Sands",
    creatureType: "vermin",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Small",
    hd: 5,
    hdVal: 8,
    cr: 3,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30,
      maneuverability: "Clumsy",
      fly: 30
    },
    abilities: {
      str: 15,
      dex: 15,
      con: 13,
      int: "-",
      wis: 10,
      cha: 2
    },
    feats: [],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "poison",
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
      "Immune to mind-affecting effects"
    ],
    defense: {
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any warm",
    visualDescription: "This goat-sized insect tilts its head to the side as it grinds its mouthparts in an intimidating trill.",
    description: "Giant assassin bugs are an example of a large and varied class of hunting insects that live throughout Golarion. Assassin bugs partially bury themselves in the sand or hide among clusters of thorny bushes found near oases, waiting for the next palatable creature to approach. When prey arrives, the insects burst out of hiding and pierce their prey with their elongated mouthparts, injecting a potent toxin that paralyzes victims. Once prey is safely paralyzed, assassin bugs feed by siphoning the victim's fluids. Even if these bites don't kill their prey, they are extremely painful and cause swelling in the area. Giant assassin bugs lay eggs in places shaded from the sun at all times, such as shallow caves or the crevices between rocks, preferably in a place where food is readily available for the hatching young. The soft-bodied young that hatch resemble their mature counterparts in all ways but size, and are fully ready to hunt the moment they emerge, though they typically seek much smaller prey. An adult assassin bug is typically 4 feet long, and weighs 65 pounds.",
    organization: "solitary or nest (2-12)",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 0
      },
      Perception: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Stealth: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      }
    },
    special: {
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Bite-injury; save Fort DC 13; frequency 1/round for 4 rounds; effect 1d4 Dex; cure 2 consecutive saves. The save DC is Constitution-based.",
        saveDC: 10
      }
    }
  },

  "Giant Ground Wasp": {
    source: "Shifting Sands",
    creatureType: "vermin",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Small",
    hd: 6,
    hdVal: 8,
    cr: 4,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 20,
      burrow: 10,
      maneuverability: "Average",
      fly: 40
    },
    abilities: {
      str: 15,
      dex: 19,
      con: 15,
      int: "-",
      wis: 10,
      cha: 2
    },
    feats: [],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Sting",
        name: "Sting",
        specialAbility: "poison",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to mind-affecting effects"
    ],
    defense: {
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "warm desert",
    visualDescription: "Black and yellow stripes cover this winged insect's bulbous abdomen, which ends in a dagger-sized stinger.",
    description: "In areas of dense vegetation, ground wasps can destroy crops and ruin the land with their burrows, but in the rocky and sandy desert, living creatures are most at risk from these dangerous vermin. The blistering heat of the desert can damage delicate eggs laid in exposed locations, so ground wasps have evolved to lay their eggs safely in the bodies of their victims. They keep to their shallow burrows during the hottest parts of the day, but remain near the opening to ambush creatures that wander near. A fully-grown ground wasp is 2 feet long, with a wingspan of 5 feet, and weighs 22 pounds.",
    organization: "solitary or hive (2-20)",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 0
      },
      Perception: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      }
    },
    special: {
      implant: {
        type: "Ex",
        text: "Ground wasps grow their eggs inside of a living host. Implanting eggs in a host is a full-round action that provokes attacks of opportunity, and the target must be helpless but alive. Once an egg is implanted, it exudes paralytic enzymes that not only keep the victim in a state of perpetual paralysis, but also keep it nourished and alive- and fully aware. This condition lasts until the egg hatches 1d6 days later, at which point the larvae consume most of the host, killing it. Any magical effect that removes paralysis or disease (such as remove paralysis, remove disease, or heal) destroys the eggs, but mere immunity to paralysis or disease does not offer protection."
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Sting-injury; save Fort DC 15; frequency 1/round for 6 rounds; effect 1d4 Dex damage; cure 2 consecutive saves. The save DC is Constitution-based.",
        saveDC: 10
      }
    }
  },

  "Giant Walking Stick": {
    source: "Shifting Sands",
    creatureType: "vermin",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 8,
    hdVal: 8,
    cr: 5,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 21,
      dex: 15,
      con: 17,
      int: "-",
      wis: 10,
      cha: 2
    },
    feats: [],
    attacks: [
      {
        weapon: "Slam",
        name: "2 Slams",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to mind-affecting effects"
    ],
    defense: {
      naturalArmor: 6
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "warm deserts and forests",
    visualDescription: "What at first appears to be a spindly, dead tree suddenly crawls from its camouflage, its wiry antenna twitching in the air.",
    description: "More common in rocky badlands than the great sandy dunes, stick bugs of all sizes are often mistaken for the fallen palm fronds or thorny leaf less trees found near oases and other spots in the desert where vegetation grows. Giant walking sticks often remain motionless for days at a time, waiting for the right prey to pass by before striking. When engaged with a foe too difficult to overtake, giant walking sticks flee from the fight. They usually expel their nauseating spray in these situations, but some can even break off their own limbs in order to escape, regrowing the missing arm or leg later once they're safe. A fully grown giant walking stick stretches from 6 to 10 feet long, but typically weighs only 120 pounds.",
    organization: "solitary, pair, or brood (3-12)",
    spellLikeAbilities: [],
    skills: {
      Stealth: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 8,
            situational: true,
            note: "+16 in brushy areas"
          }
        ]
      }
    },
    special: {
      "nauseating spray": {
        type: "Ex",
        text: "A walking stick can spray a 15-foot cone of irritating, foul-smelling liquid once every 1d4 rounds. Creatures within this area must succeed at a DC 17 Reflex save or be sickened for 5 rounds. Alternatively, the walking stick can target a single creature within 30 feet with a stream of this fluid. To use this version of its nauseating spray, the walking stick must succeed at a ranged touch attack (+5 for most walking sticks). If the target is hit, it must succeed at a DC 17 Fortitude save or become nauseated for 5 rounds; otherwise, it is sickened for 5 rounds. The save DC is Constitution-based."
      }
    }
  },

  "Mummified Baboon": {
    source: "Shifting Sands",
    creatureType: "undead",
    subTypes: [],
    alignments: [
      "Neutral Evil"
    ],
    size: "Small",
    hd: 1,
    hdVal: 8,
    cr: "1/2",
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 12,
      dex: 15,
      con: "-",
      int: 2,
      wis: 12,
      cha: 14
    },
    feats: [
      {
        name: "Weapon Finesse",
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
        value: 2,
        damageType: "-"
      }
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "warm ruins",
    visualDescription: "Wrapped in strips of cloth, this hairy, stout animal has opposable thumbs, with a pronounced muzzle and bright red buttocks.",
    description: "In Ancient Osirion, baboons were associated with the god Thoth, and were often depicted in art with crescent moons on their heads. Ancient Osirians kept baboons as pets, and old inscriptions show them being led around on leashes or climbing trees to pick dates and figs.",
    organization: "solitary",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 4,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Climb: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      }
    },
    special: {
      "servant's curse": {
        type: "Ex",
        preText: "DC 12"
      }
    }
  },

  "Mummified Crocodile": {
    legs: 4,
    arms: 0,
    source: "Shifting Sands",
    creatureType: "undead",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 3,
    hdVal: 8,
    cr: 2,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 20,
      swim: 30
    },
    abilities: {
      str: 19,
      dex: 12,
      con: "-",
      int: 1,
      wis: 12,
      cha: 14
    },
    feats: [
      {
        name: "Skill Focus",
        type: "General",
        value: "Stealth",
        choiceSource: "Skill Focus"
      },
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
        specialAbility: "grab",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    defense: {
      DR: {
        value: 2,
        damageType: "-"
      },
      naturalArmor: 4
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "warm ruins",
    visualDescription: "This clothed wrapped reptile lunges out of the placid water with shocking speed. Its jaw gapes open in a roar, its powerful tail lashing behind.",
    description: "Crocodiles are depicted in many ways in ancient Osirion, but most often they are shown in association with the River Sphinx and, more importantly, with the god Sobek. Mummified crocodiles are common in crypts that are no farther from the river than a single day's walk. Many mummif ied crocodiles have baby crocodiles placed on their backs or in their mouths, representing how live crocodiles transport and care for their young.",
    organization: "solitary",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 4
      },
      Stealth: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Swim: {
        ranks: 4
      }
    },
    special: {
      "death roll": {
        type: "Ex",
        text: "When grappling a foe of its size or smaller, a crocodile can perform a death roll upon making a successful grapple check. As it clings to its foe, it tucks in its legs and rolls rapidly, twisting and wrenching its victim. The crocodile deals its bite damage and knocks the creature prone. If successful, the crocodile maintains its grapple."
      },
      "servant's curse": {
        type: "Ex",
        preText: "DC 13"
      },
      sprint: {
        type: "Ex",
        text: "Once per minute a crocodile may sprint, increasing its land speed to 40 feet for 1 round."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  "Mummified Elephant": {
    source: "Shifting Sands",
    creatureType: "undead",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Huge",
    hd: 11,
    hdVal: 8,
    cr: 9,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Scent"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 30,
      dex: 10,
      con: "-",
      int: 2,
      wis: 13,
      cha: 14
    },
    feats: [
      {
        name: "Endurance",
        type: "General"
      },
      {
        name: "Great Fortitude",
        type: "General"
      },
      {
        name: "Improved Bull Rush",
        type: "Combat"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Perception",
        choiceSource: "Skill Focus"
      }
    ],
    attacks: [
      {
        weapon: "Gore",
        name: "Gore",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Slam",
        name: "Slam",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "-"
      },
      naturalArmor: 9
    },
    space: "15 ft.",
    reach: "10 ft.",
    environment: "warm ruins",
    visualDescription: "This cloth wrapped thick-skinned animal bear large ivory tusks flanking a long, prehensile snout.",
    description: "Mummified elephants are difficult to prepare because of the animals' great size. As a result, they're rare-typically only found in the tombs of the wealthiest Osirians. Since the animals are less common in the deep deserts, mummified elephants are more likely to be found in tombs in southern Osirion.",
    organization: "solitary",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 11
      }
    },
    special: {
      "servant's curse": {
        type: "Ex",
        preText: "DC 17"
      },
      trample: {
        universalMonsterAbility: "Trample",
        damage: "2d8+15",
        saveDC: 10
      }
    }
  },

  "Mummified Hippopotamus": {
    source: "Shifting Sands",
    creatureType: "undead",
    subTypes: [],
    alignments: [
      "Neutral Evil"
    ],
    size: "Large",
    hd: 7,
    hdVal: 8,
    cr: 6,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Scent"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 19,
      dex: 10,
      con: "-",
      int: 2,
      wis: 13,
      cha: 14
    },
    feats: [
      {
        name: "Endurance",
        type: "General"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
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
      DR: {
        value: 5,
        damageType: "-"
      },
      naturalArmor: 8
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "warm ruins",
    visualDescription: "This cloth wrapped, lumbering bull hippopotamus lunges out of the water and yawns wide, displaying an impressive set of tusk-like teeth.",
    description: "Much like with elephants, the process for mummifying hippopotamuses is expensive and difficult; thus, only significant people are interred with these creatures. They are placed in tombs to protect against bad fortune. Because of their association with rivers, these protectors are often found in tombs near such waterways. Creating a Mummified Animal \"Mummified animal\" is an acquired template that can be added to a creature of the animal type. A mummified animal uses all the base creature's statistics and special abilities except as noted here. Challenge Rating: HD 4 or fewer, as base creature; HD 5 to 10, as base creature +1; HD 11 or more, as base creature +2. Alignment: Neutral evil. Type: The creature's type changes to undead. Do not recalculate BAB, saves, or skills. Senses: A mummified animal gains Darkvision 60 ft. Defensive Abilities: A mummified animal gains damage reduction based on its Hit Dice: one with 5 or fewer Hit Dice gains DR 2/-, one with 6-10 Hit Dice gains DR 5/-, and one with 11-20 Hit Dice gains DR 10/-. Speed: Winged mummified animals can still fly, but their maneuverability drops to clumsy. Retain all other movement types. Special Attacks: A mummified animal retains all special attacks except those dependent on a living body to function, such as a snake's poison or a skunk's revolting musk. A mummified animal also gains the following special attack. Servant's Curse (Su): Once per day, a mummified animal can touch a creature or hit a creature with one of its natural attacks to deliver a curse. Any living creature struck by this attack must succeed at a Will save or take 1d3 points of Dex and Wis damage. The save DC is equal to 10 + 1/2 the mummified animal's Hit Dice + the mummified animal's Charisma modifier. Abilities: A mummified animal loses its Constitution score, and its Charisma score becomes 14.",
    organization: "solitary",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 1
      },
      Stealth: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 10
          }
        ]
      },
      Swim: {
        ranks: 7
      }
    },
    special: {
      capsize: {
        type: "Ex",
        text: "A hippopotamus can overturn a boat of its size or smaller by ramming it as a charge attack and making a CMB check. The DC of this check is 25 or the result of the boat captain's Profession (sailor) check, whichever is highest."
      },
      "servant's curse": {
        type: "Ex",
        preText: "DC 15"
      },
      trample: {
        universalMonsterAbility: "Trample",
        damage: "1d8+6",
        saveDC: 10
      },
      "hold breath": {
        universalMonsterAbility: "Hold Breath",
        parenthetical: ""
      }
    }
  },

  Serpopard: {
    source: "Shifting Sands",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Medium",
    hd: 9,
    hdVal: 10,
    cr: 7,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 19,
      dex: 21,
      con: 18,
      int: 10,
      wis: 14,
      cha: 17
    },
    feats: [
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Weapon Finesse",
        type: "Combat"
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
        specialAbility: "grab",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 5
    },
    space: "5 ft.",
    reach: "5 ft. (15 ft. with bite)",
    environment: "warm deserts or plains",
    visualDescription: "The muscles beneath the spotted fur of this sleek feline tense, poised to pounce. Its long, sinuous neck stretches over twice the length of its body, ending in a snarling leopard's head.",
    description: "Avistani naturalists named this creature serpopard because they saw it as possessing features of both a leopard and a serpent, though this creature is also widely known by its Osiriani name sedja, meaning \"one who travels from afar.\" Serpopards earn this appellation because of their supernatural ability to leap from one dune to another, an ability they call \"stepping between the dunes.\" Some scholars speculate that the pharaohs of old bred this ability into the serpopards in order to create scouts and messengers able to cross the harsh terrain of their vast empires quickly and efficiently, but this creature is not one that has been created or influenced by humankind. Though rare, serpopards are naturally occurring beasts native to the deserts of northern Garund. Superstitious folk who believe that the gods' hands touch everything beneath the blistering Osirian sun see the serpopard as a cursed creature, marked with snakelike features by Apep and forced to wander eternally through the desert, never to find rest or sanctuary. On the other hand, carvings on ceremonial plates, on uncovered artifacts, and in ruined temples make it clear that the god-kings of Ancient Osirion once kept serpopards as pets or servants, as depictions of these creatures in the oldest of Osirion's ruins often show them chained or collared, bowing obediently to human masters. Serpopards stand approximately 3 feet tall at the shoulder; when their necks are fully extended, they can measure up to 20 feet long from nose to tail. Serpopards weigh anywhere from 150 to 200 lbs. Ecology Though serpopards are most common in the deserts of northern Garund, travelers in such far-off locales as the Meraz Desert in Qadira, the Cinderlands of Varisia, and the vast expanse of Shaguang in Tian Xia to the east have spotted creatures matching the serpopards' description. Some sages hypothesize that the most powerful or ancient serpopards can cross greater distances with their dune step ability, and thus travel through it to distant deserts across Golarion. Such experts say it's therefore likely that all deserts hold populations of serpopards, though they may be few in number or very isolated. Serpopards are largely nocturnal, preferring to hunt at night when they can use the cover of darkness to approach prey undetected. When hunting, they rely on their speed and powerful claws to take down large quarry, and then use the additional reach provided by their unusually long necks to defend their kills from scavengers and competing hunters. Serpopards are not averse to eating intelligent beings, and hunt humanoids if the opportunity or need arises, but they aren't cruel- serpopards gain no pleasure from such acts beyond the satisfaction of a fresh meal. On average, serpopards have a lifespan of about 50 years, but rumors exist of serpopards living much longer than this. One town along the northern coast of Rahadoum claims a single serpopard has visited its outskirts once every decade for the past 100 years. Habitat & Society Serpopards are mainly solitary creatures. Very rarely do they travel in pairs, and then only during mating season or in the case of littermates who chose not to separate at adulthood. When living as mated pairs, the father stays only until the cubs are able to run, but the mother stays with the cubs much longer, teaching them how to hunt and use their special ability to travel between the dunes. Mothers also pass on to the cubs their understanding of the land, instructing them as to which areas are good for hunting or exploring, what kinds of places to avoid, and how to find fresh water. Young serpopards separate from their mother individually, leaving as soon as they mature and feel confident navigating their way through the desert alone. When traveling, serpopards range anywhere from 50 to 100 miles per day, stopping only to hunt, rest, or (more rarely) explore some aged ruin. No one knows what fascination these ancient works hold for the serpopards, but the creatures' interest in such locations is undeniable. An old poem involving serpopards claims that the creatures visit these ancient ruins because they are pining for the lost empire of Ancient Osirion. Serpopards are clever liars and frustrating conversationalists, and hold a reputation among other races as skilled deceivers. In rural parts of Osirion, those with a gift for deception are often said to have \"the tongue of a sedja,\" while young children caught in a lie are warned that their \"necks are growing\" with each lie they tell. Despite this potential untrustworthiness, many people still seek the aid of serpopards. Few creatures know the deserts of Osirion as well as serpopards, and for the right price many are willing to guide groups of people across the desert. It's usually best to ensure the serpopard is well fed before undertaking such a journey, however, for a hungry serpopard may turn on its traveling companions if it thinks it can make a quick meal out of them. Serpopards have little use for gold and rarely accept it as payment for their services, though some apparently take a liking to jewelry, as travelers report the creatures as frequently wearing necklaces and bracelets when encountered. Food and hospitality are always acceptable payments, for those two things are in short supply in the harsh expanse of the desert. For those wishing to earn a serpopard's true faith and loyalty, however, one form of compensation stands above all others-divination magic. Serpopards are unceasingly curious about what their futures hold, and put great stock in the words of those who can tell fortunes or predict events to come. Serpopards attack most sphinxes on sight, often fighting at least long enough to get in a few solid blows before retreating between the dunes to safety. The only exception to this is androsphinxes, which most serpopards fear for some unknown reason. Only the bravest or most desperate serpopards face down such creatures in combat without aid; most flee immediately once they spot these mighty sphinxes. Sphinxes are aware of this antipathy and treat serpopards accordingly. Perhaps as a consequence of their antipathy toward sphinxes, serpopards also hate riddles and word games, and prefer to twist their words with lies and omissions rather than making a game out of conversation. Ignorant travelers who confuse the two creatures and try to engage the serpopard in a bout of riddling can find themselves in a dangerous predicament.",
    organization: "solitary or pair",
    languages: "Common",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Bluff: {
        ranks: 2,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Climb: {
        ranks: 1
      },
      "Knowledge (geography)": {
        ranks: 5
      },
      Perception: {
        ranks: 5
      },
      Stealth: {
        ranks: 3,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Survival: {
        ranks: 6
      }
    },
    special: {
      "dune step": {
        type: "Su",
        text: "Three times per day as part of a move action, a serpopard can instantaneously leap from one dune to any other dune within 1 mile as if by dimension door. The serpopard must begin and end this movement in an area of dunes. Using this ability does not provoke attacks of opportunity."
      },
      "limber neck": {
        type: "Ex",
        text: "A serpopard can use its long neck to make bite attacks as part of a rake attack against grappled opponents. In addition, a serpopard doesn't take the usual -2 penalty on attack rolls when it makes a bite attack while grappling."
      },
      pounce: {
        universalMonsterAbility: "Pounce"
      },
      rake: {
        universalMonsterAbility: "Rake",
        type: "Ex",
        weaponName: 4
      },
      "far wanderer": {
        type: "Ex",
        text: "Knowledge (geography) and Survival are class skills for serpopards."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  Shalkeshka: {
    source: "Shifting Sands",
    creatureType: "magical beast",
    subTypes: [
      "earth"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 10,
    hdVal: 10,
    cr: 8,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Scent",
      "Tremorsense 90 ft."
    ],
    speed: {
      base: 30,
      burrow: 30
    },
    abilities: {
      str: 24,
      dex: 17,
      con: 18,
      int: 2,
      wis: 11,
      cha: 5
    },
    feats: [
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Run",
        type: "General"
      },
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
        specialAbility: "grab",
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
      naturalArmor: 9
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "temperate and warm deserts and plains",
    visualDescription: "This creature's bulbous compound eyes peer in all directions as its twin mandibles twitch and gnash. Six legs, each ending in spade-like claws, support its bulk.",
    description: "A dangerous nuisance in northern Garund, a shalkeshka is a strange burrowing predator that inhabits fertile soil near rivers, oases, and (most destructively) farmland. This creature's anatomy is reminiscent of an insect or some sort of lizard, and when burrowing it tears into the earth with its claws, swimming through sand and soil. Since the creatures spend most of their time buried underground, their pale, nearly transparent skin is cool and clammy to the touch. Shalkeshkas feed on whatever creatures are unfortunate enough to tread the ground above them while they nest in the earth below. When fighting, a shalkeshka viciously grapples its victim with its mandibles, shredding its prey to pieces with its claws. Squat and powerfully built, a shalkeshka stands only 5 feet tall, but is 8 feet wide and weighs almost 2,500 pounds. Ecology Although shalkeshkas are predators, they have a unique ability to derive nutrition from the ground itself if unable to find prey. This serves the creatures well in the lands of northern Garund, where desert travelers are few and far between and the harsh sun and unforgiving terrain keep roaming fauna to a minimum. While burrowed, a shalkeshka can enter a state of hibernation wherein it can sustain itself by absorbing minerals from the soil. A shalkeshka absorbs nutrients through the tufts of hair distributed across its long body, each of which is capable of leeching valuable sustenance from the very ground. This method of feeding can sustain a shalkeshka for extended periods of time-anywhere from a few hours to weeks, or even years-without the need to hunt. A shalkeshka breaks its hibernation only when it senses prey or during the rare times it succumbs to the urge to reproduce. A shalkeshka's bristly hairs also serve as one of the creature's sensory organs, allowing it to sense subtle vibrations in the ground. Its compound eyes provide it with excellent vision, and the third eye on the center of its forehead enables it to see in even the darkest of lighting conditions. Its enhanced senses ensure that a shalkeshka remains a constant threat to those who intrude on its territory, regardless of time of day or whether its prey is above or below ground. A shalkeshka ambushes its prey with impressive speed, bursting from beneath the sand and snatching unwary foes with its mandibles. Once engaged in combat, a shalkeshka fights with unrestrained ferocity. When it encounters groups of prey while hunting, a shalkeshka burrows beneath the ground to stealthily follow them until a member splits off from the group. The shalkeshka then emerges, grabs the straggler, and dives back into the sand to devour its newly acquired meal. If unable to snag its target, a shalkeshka remains above ground until it has subdued or slain its prey. They are powerful creatures, but lack the intelligence to make strong tactical decisions when it comes to engaging a target. However, if the tide of battle turns against a shalkeshka, it doesn't hesitate to burrow away to safety. Shalkeshkas can live for over 300 years, though most of this time is spent hibernating underground. Shalkeshkas experience periods of fertility only a few times in their lives, during which they lay their eggs in hidden tunnels in the desert. Shalkeshkas stay near their eggs during the yearlong incubation period, sometimes even letting prey pass by untouched in order to conceal the eggs' location. In rare circumstances, however, a pair of shalkeshkas that are both about to lay their eggs will tolerate each other's presence, instinctually recognizing the need for extra defense during the process. Such mutual defenses are dangerous for other intruders in the region, as the two shalkeshkas can then work together to bring down larger prey. Once the young hatch, they emerge from their leathery eggs in a larval stage that lasts for a year, culminating in a cocoon stage. During their larva stage, shalkeshkas subsist solely on nutrients in the soil as their mature mouthparts have yet to form. Shalkeshkas feel little kinship with their broodmates and soon begin splitting off from the group. As the cocoon stage nears, the parent shalkeshkas leave the area, leaving the young to fend for themselves. Any shalkeshkas still living in close proximity to their broodmates when they reach adulthood often cannibalize their siblings in great burrowing clashes until only one or two shalkeshkas hunt in the immediate vicinity. Habitat & Society Many wandering shalkeshkas travel throughout the great deserts of Osirion, stopping only once they have claimed a lush territory for themselves. Though they can live in the deepest desert, shalkeshkas prefer territory with a source of water, for prey is more plentiful there, and while lying in wait enjoy the abundant nutrients in the soil- the creatures are notorious for setting ambushes near riverbanks or in oases. A single small oasis can sustain a shalkeshka for its entire life. When adult shalkeshkas encounter each other, violence soon follows. A shalkeshka that has claimed a territory defends it to the death against intruding shalkeshkas seeking to claim it; these vicious fights often leave both opponents injured. Shalkeshkas also frequently battle ankhegs (Pathfinder RPG Bestiary 15), as they often share similar environments. Many a caravan has had to alter its path after happening upon a clash between these two burrowing beasts. These are not the only times a desert caravan must be watchful of shalkeshkas. The creatures grow most aggressive when far from fertile soil, and a train of packed camels and their riders driving across the desert serves as an enticing meal for shalkeshkas in nutrient-poor lands. These attacks inspired the Osirian saying \"claimed by the shalkeshka,\" which is used to describe someone who has gone suddenly missing or a caravan contract that never pans out.",
    organization: "solitary or pair",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 1
      },
      Climb: {
        ranks: 1
      },
      Perception: {
        ranks: 8
      }
    },
    special: {
      "burrowing charge": {
        type: "Ex",
        text: "A shalkeshka can use the charge and run actions while burrowing."
      },
      "pit surge": {
        type: "Ex",
        text: "A shalkeshka can burrow into dirt, sand, or loose soil to lie in ambush 30 feet beneath the surface. It monitors the area above it using Tremorsense, awaiting a victim's movement into the area. When it detects prey, the shalkeshka can surge to the surface as a standard action and make a single bite attack. This action creates a 30-foot-deep pit where the shalkeshka was laying in wait. All creatures standing in the area above must succeed at a DC 18 Reflex save to jump to safety in the nearest open space to the edge of the newly formed pit. Creatures that fail this Reflex save fall into the pit, taking damage as normal. The pit's walls have a climb DC of 25. The shalkeshka (along with any creature it may have grappled) can stay above ground by making a successful saving throw, or voluntarily fall back into the pit. The save DC is Dexterity-based."
      },
      rake: {
        universalMonsterAbility: "Rake",
        type: "Ex",
        weaponName: 7
      },
      feeding: {
        type: "Ex",
        text: "As a free action while a shalkeshka is burrowed beneath the ground, it can go into a dormant state and leech nutrients from the soil. During this time, the shalkeshka regains hit points at a rate of 5 hit points per hour. While in this state, the creature can't move, doesn't have to eat or drink, and is considered flat-footed for the first full round of combat if interrupted from its dormancy."
      },
      "no breath": {
        universalMonsterAbility: "No Breath",
        text: ""
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  "Thriae Dancer": {
    source: "Shifting Sands",
    creatureType: "monstrous humanoid",
    subTypes: [],
    alignments: [
      "Lawful Neutral"
    ],
    size: "Medium",
    hd: 8,
    hdVal: 10,
    cr: 6,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30,
      maneuverability: "Good",
      fly: 60
    },
    abilities: {
      str: 15,
      dex: 16,
      con: 15,
      int: 12,
      wis: 13,
      cha: 16
    },
    feats: [
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Great Fortitude",
        type: "General"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Glaive",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Glaive",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "Glaive",
        damage: "1d10"
      },
      {
        weapon: "Sting",
        name: "Sting",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to poison, sonic"
    ],
    defense: {
      saves: {
        All: [
          {
            value: 4,
            note: "vs. mind-affecting effects"
          }
        ]
      },
      naturalArmor: 6
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "This elegant half-woman, half-bee wields a glaive and is clad in flowing, gauzy garments. A veil covers most of her face, revealing only seductive, unnaturally beautiful eyes.",
    description: "For as stoic and pragmatic as the thriae may be, they do appreciate art, grace, and beauty. This is exemplified not only by their ornately crafted weapons, armor, and jewelry, but also by their renowned dancers. These talented individuals are the most honored performers of their race, and they grace the halls and temple chambers of every thriae colony. While all thriae can be considered the epitome of alien grace and charm, thriae dancers are always among the most beautiful of their kind. They are typically 6 feet tall and weigh 140 pounds. Ecology Other races may scoff at the fact that thriae dancers seemingly rely on merope consumption in order to channel their mystical power into their dances, but there is much more to this act than one might realize. A thriae dancer's reliance on merope to execute her awesome performances is akin to a ballerina's reliance on her specialized shoes-while a ballet can be performed without them, the final result lacks a certain amount of finish without this integral element. So too does a thriae dancer's use of merope enhance her performance, with the potent serum pushing her body to its utmost limits. As the merope courses through a dancer, she channels her mysterious art into a spiritual energy capable of thrusting viewers to previously unknown heights of pleasure, awe, and sorrow. It's true that thriae are a stoic, nigh-unf linching race, but in the middle of a thriae dancer's performance, it's rare to see any thriae witnesses unmoved by such a powerful spectacle. Habitat & Society Like all thriae, a dancer's role in the colony is chosen for her during adolescence, and she's thereafter cared for and trained by elder members from the same occupation until ready to perform on her own. A dancer's training takes many years of concentrated effort and tutelage from her superiors, during which time she's permitted to see no one but her fellow dancers. Thriae seers reason that dancers must be completely virginal in order for them to channel only the purest forms of nature's secrets. All training takes place within a special temple room in the thriae colony, where incense derived from merope is burned constantly to ensure the dancers' focus is sustained for hours on end. Dancers train in troupes, and most performances are choreographed group pieces performed once a month in the colony's largest hall, with an audience of thriae from all parts of the colony and caste system. The buzz of wings and even the sound of twitching antennae become muted as thriae soldiers, seers, and workers eagerly witness the highly spiritual dance ceremony. Drones-those humanoid men inducted into thriae society-are not permitted to witness thriae dances, as to behold such beauty would surely drive them irreparably mad. Only the most talented and coveted thriae dancers are permitted to perform alone-there's typically only one such dancer in the entire colony, though some colonies might host a pair of honored performers. The solo or duet performances of these honored individuals are considered sacred affairs, and are typically attended only by the queen and upper class thriae such as seers, royal consorts, and generals. Venerated by their peers, these dancers are known as thriae terpsichoreans, and occupy the upper echelons of thriae society. Thriae terpsichoreans typically have levels in bard, are at least CR 9, and have access to the following spell-like abilities: 3/day-heroism, suggestion; 1/ day-zone of silence.",
    organization: "solitary, duet, trio, or troupe (4-8)",
    languages: "Common, Thriae",
    spellLikeAbilities: [
      {
        name: "detect secret doors",
        casterLevel: 8,
        timesPerDay: -1
      },
      {
        name: "lullaby",
        casterLevel: 8,
        timesPerDay: -1
      },
      {
        name: "calm emotions",
        casterLevel: 8,
        timesPerDay: 3
      },
      {
        name: "charm person",
        casterLevel: 8,
        timesPerDay: 3
      },
      {
        name: "hypnotism",
        casterLevel: 8,
        timesPerDay: 3
      },
      {
        name: "deep slumber",
        casterLevel: 8,
        timesPerDay: 1
      },
      {
        name: "suggestion",
        casterLevel: 8,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 8
      },
      Diplomacy: {
        ranks: 8
      },
      Fly: {
        ranks: 1
      },
      Perception: {
        ranks: 6
      },
      Perform0: {
        subSkill: "dance",
        ranks: 8
      },
      "Sleight of Hand": {
        ranks: 3
      },
      Stealth: {
        ranks: 6
      }
    },
    special: {
      "inspiring dance": {
        type: "Su",
        text: "Three times per day as a standard action, a thriae dancer can consume a dose of merope (honey from the thriae queen) to channel her connection to the natural world into an awe-inspiring dance. This dance may have a variety of effects depending on which of the following performances she chooses. Once she has begun, the thriae dancer may maintain her dance as a free action, and the effects of the dance persist as long as the thriae performs her dance. A thriae dancer can dance for a number of rounds equal to her Hit Dice before becoming fatigued. After that, if she continues dancing for that same number of rounds, she becomes exhausted. A thriae dancer may switch between performances as a swift action. Targets must be within 60 feet and able to see the thriae dancer in order to be affected by her dance. This is a mind-affecting effect. Dance of Fervor: This performance affects all non-thriae creatures within its range with the effects of both confusion and rage (Will DC 17 negates). When this effect ends, affected creatures are fatigued for a number of rounds equal to the length of time they were affected by the dance of fervor. A creature may not be affected by the same thriae dancer's dance of fervor more than once in 24 hours. The save DC is Charisma-based. Dance of Grace: This performance grants all thriae within its range (including the dancer) a +1 insight bonus to AC and on Reflex saving throws. This bonus increases to +2 if three or more thriae dancers are performing a dance of grace within range of the target. Dance of Passion: This performance grants all thriae within its range (including the dancer) a +1 insight bonus on attack and damage rolls. This bonus increases to +2 if three or more thriae dancers are performing a dance of passion within range of the target."
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Sting-injury; save Fort DC 16; frequency 1/round for 6 rounds; effect 1d3 Str; cure 1 save.",
        saveDC: 10
      }
    },
    resistances: [
      {
        damageType: "acid",
        value: 10
      }
    ]
  },

};
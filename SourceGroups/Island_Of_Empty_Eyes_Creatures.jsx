
export const Island_Of_Empty_EyesCreatures = {
  "Oracular Cyclops": {
    legs: 2,
    arms: 2,
    source: "Island Of Empty Eyes",
    creatureType: "humanoid",
    subTypes: [
      "giant"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Large",
    hd: 14,
    hdVal: 8,
    cr: 7,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 21,
      dex: 12,
      con: 15,
      int: 12,
      wis: 17,
      cha: 10
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Blind-Fight",
        type: "Combat"
      },
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Great Cleave",
        type: "Combat"
      },
      {
        name: "Improved Bull Rush",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Greataxe",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "Greataxe",
        damage: "1d12"
      },
      {
        weapon: "Heavy crossbow",
        name: "Heavy crossbow",
        damage: "1d10"
      }
    ],
    defense: {
      naturalArmor: 7
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any temperate or tropical",
    visualDescription: "Clothed in loose robes and wearing jewelry, this one-eyed giant appears to hold a high station.",
    description: "A cyclops oracle retains more of the powers of foresight than most of its kin. In addition to a cyclops's typical flash of insight ability, an oracular cyclops can share its gift with others, granting them a boon on a future challenge. While often smaller than others of its kind, an oracular cyclops gains the ability to foresee danger coming its way. The statistics above depict a cyclops who is served by a cult of worshippers, and is therefore in good health. Other oracular cyclopes are sometimes kept as chained prisoners, at the mercy of their captors.",
    organization: "solitary, conclave (2-6), or tribe (7-18)",
    languages: "Common, Cyclops, Giant",
    spellLikeAbilities: [
      {
        name: "divination",
        casterLevel: 10,
        timesPerDay: 3
      },
      {
        name: "augury",
        casterLevel: 10,
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 10
      },
      Intimidate: {
        ranks: 9
      },
      Perception: {
        ranks: 7,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Profession0: {
        subSkill: "soothsayer",
        ranks: 10
      },
      "Sense Motive": {
        ranks: 10
      },
      Survival: {
        ranks: 2
      }
    },
    special: {
      "greater flash of insight": {
        type: "Su",
        text: "Once per day as an immediate action, a cyclops can peer into an occluded visual spectrum of possible futures, gaining insight that allows it to select the exact result of one die roll before the roll is made. This effect can alter an action taken by the cyclops, and once per week the oracular cyclops can apply this ability to one creature of her choosing. The target of this boon must be within 30 feet of the oracular cyclops and be able to be seen."
      },
      "protective foresight": {
        type: "Su",
        text: "An oracular cyclops can peer into the future to protect itself. This ability grants the cyclops a +4 insight bonus to AC."
      }
    }
  },

  "Coral Capuchin": {
    legs: 2,
    arms: 2,
    source: [
      "Island Of Empty Eyes",
      "Bestiary 6"
    ],
    creatureType: "magical beast",
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Tiny",
    hd: 2,
    hdVal: 10,
    cr: 1,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30,
      climb: 30,
      maneuverability: "Good",
      fly: 40,
      swim: 30
    },
    abilities: {
      str: 6,
      dex: 17,
      con: 12,
      int: 6,
      wis: 13,
      cha: 7
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
        specialAbility: "cursed bite",
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {},
    space: "2-1/2 ft.",
    reach: "0 ft.",
    environment: "warm coasts and oceans",
    visualDescription: "This strange creature can only be described as a light pink, hairless monkey with the head of a fish and large, finlike wings.",
    description: "Coral capuchins, when encountered outside of the water, look like a wizard's practical joke-they have the body of a small monkey, slick pink skin, a fishlike head, and membranous appendages that are a cross between a bat's wings and a fish's fins. They possess a monkey's innate intelligence and curiosity, displaying little fear of humanoids, but are also compulsive pickpockets that love the glimmer of gold and jewels, and posses the manual dexterity to relieve unsuspecting sailors and dockworkers of their hard-earned pay. An adult coral capuchin is a foot and a half in length, with a foot-long tail, a 4-foot wingspan, and a weight of 25 pounds. Ecology Sages believe coral capuchins evolved from highly adaptive creatures living in the world's oceans. It is believed these creatures first developed as wholly aquatic creatures much like fish, and lived among brightly colored coral reefs where they used a form of camouf lage to hide and escape predation, much like a cuttlefish or octopus. The creatures developed multiple methods of locomotion through evolution, and these biological changes allowed these creatures to crawl from the sea and walk on land. Eventually their fins transformed into wings, granting the creature greater mobility, and the ability not only to breathe the air above the waves, but also to soar through it. Coral capuchins are capable of surviving out of the water in their air-breathing form for part of the day, although they quickly deteriorate and die if they do not keep their bodies moist. They spend most of their lives below the waves, subsisting on small fish and all manner of vegetation, but often venture onto land to find a particularly tasty morsel, or to satisfy their overactive natural curiosity. They also love to fly and can often be seen circling the crow's nests of ships entering and leaving harbor. On land, they hunt small rodents, pick nuts and berries, and find the eggs of birds a particular delicacy. Coral capuchins also display an intense interest in the food and belongings of all manner of humanoid species. They are especially drawn to small, shiny objects, and can be counted on to abscond with anything interesting that is not nailed down. Coral capuchins' hands allow them to manipulate objects, but they cannot wield weapons. A coral capuchin is born as a wholly aquatic creature. Young coral capuchins lack the ability to fly or leave the water until they reach adulthood after approximately their first year of life. They are an incredibly fecund race, and females can produce a clutch of up to 100 eggs three times a year, though local aquatic predators usually devour most of these. Because of their dependence on returning to the water, some coral capuchins venturing too far inland risk stranding themselves. Explorers find the creatures sickly and weak, sprawled out on the jungle floor covered in biting ants or picked apart by predators as they lie there dying. Coral capuchins that die on land dry, out to a husk that often turns to dust leaving only its brittle bones behind. Habitat & Society Living in greater numbers along the southeastern coast of Garund, these creatures have slowly spread out, making their way north and east over the last few centuries. A large colony of the creatures resides off the coast south of Sargava and within the Lower Korir River Delta. The canopies of the Jungle of Hungry Trees and the jungles of the Kaava Lands ring with the calls of coral capuchins. An infestation of the clever creatures has recently plagued the port city of Senghor on the Fever Sea, and a city authority has begun offering a bounty on the creatures in an attempt to reduce their numbers. A few colonies of the creatures exist farther north, with some making their homes in the warmer waters of the Inner Sea, while other curious tribes of these mischievous creatures inhabit the warm waters of the Obari Ocean on Garund's western coast. Coral capuchins live in tropical coastal areas, generally in small familial groups of fewer than 30 adults led by an older female. The first part of their name refers not only to their pinkish skin color, but also to their preferred nesting place-the coral reefs off of Garund's coast, where they make their homes in the countless caves and crevices found therein. They populate these vivid reefs to lay their eggs and hide among the protective growth, adapting their skin pigmentation to blend in. Wholly unafraid of most humanoid species, coral capuchins are often domesticated by sailors and fisherman willing to put up with the creatures' incurable curiosity and penchant for petty larceny. They are often trained to fish for their masters, and are particularly sought after by those who make their living bringing up treasures from the ocean floor. Because of their love for shiny objects, they make excellent pearl divers, although it can sometimes be a struggle to get them to part with their treasures. Their voracious, omnivorous appetites also make them popular on long ocean voyages, as they are happy to reduce ships' endemic rat populations. Perhaps because of this, many sailors see them as good-luck mascots, although they are most popular with pirates, smugglers, and other such seafaring folk, who more willingly accept their thieving nature. Coral Capuchins as Familiars Despite their mercurial temperaments and propensity for theft, coral capuchins are prized by wizards because of the creatures' exceptional mobility and their strange cursed bite. This bite allows spellcasters greater ability to explore below the waves, as long as they pay close attention to their time outside of the water. Despite this benef it, coral capuchins are more popular among spellcasters who don't mind running afoul of the law, as the small creatures' thieving behavior is diff icult to fully control and often gets their masters into trouble. In addition, coral capuchins' need to stay moistened means they are better suited to serve as familiars for those living near water or willing to make compensations for this unusual physiology. Spellcasters of 3rd level or higher with an alignment within one step of neutral can gain a coral capuchin as a familiar by taking the Improved Familiar feat.",
    organization: "solitary, pair, or tribe (3-24)",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 0
      },
      Fly: {
        ranks: 0
      },
      "Sleight of Hand": {
        ranks: 1,
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
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      "cursed bite": {
        type: "Su",
        text: "A coral capuchin can deliver a bite that bestows some of the creature's benefits and weaknesses upon the victim. The curse delivered by this bite persists for 1d6 hours, and cannot affect the same creature more than once in a 24-hour period. Affected creatures begin drying out when exposed to air, but can hold their breath for double the normal amount of time. Targets of this cursed bite take 1d6 points of damage for every 10 minutes they are out of water, though spending a full-round action to bathe the victim in any sort of water halts this damage. Victims must succeed at a DC 12 Constitution check to avoid this effect. Remove curse ends this curse's effect as normal. The save DC is Constitution-based. Moisture Dependency (Ex) A coral capuchin can breathe both air and water and survive indefinitely on land, but the creature must regularly be either submerged in water or thoroughly wetted down, or else it dries out in the air. A coral capuchin can survive out of water for a number of hours of equal to its Constitution score before it takes any negative effects. After this time, the creature takes 1d6 points of damage for every hour it remains dry. Bathing the creature in water of any sort resets this time frame."
      },
      amphibious: {
        universalMonsterAbility: "Amphibious"
      }
    }
  },

  Deinosuchus: {
    source: "Island Of Empty Eyes",
    creatureType: "animal",
    dinosaur: true,
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Gargantuan",
    hd: 11,
    hdVal: 8,
    cr: 8,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 30,
      swim: 40
    },
    abilities: {
      str: 36,
      dex: 12,
      con: 21,
      int: 1,
      wis: 15,
      cha: 2
    },
    feats: [
      {
        name: "Awesome Blow",
        type: "Combat",
        value: "Tail slap only",
        choiceSource: "Awesome Blow"
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
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Perception",
        choiceSource: "Skill Focus"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Stealth",
        choiceSource: "Skill Focus"
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
      naturalArmor: 14
    },
    space: "20 ft.",
    reach: "20 ft.",
    environment: "any water",
    visualDescription: "This immense reptile, an alligator of overwhelming size, emerges from the water with rapidly snapping jaws that grind menacingly between each bite.",
    description: "The largest of all known crocodilians, the 35- to 50-foot-long, 6-ton deinosuchus is a massive beast. This crocodilian possesses a shorter, rounder snout than the typical crocodile, and thus resembles a giant alligator. A patient hunter, the deinosuchus is all but invisible beneath the surface of the water. Only its nostrils breach the water's surface, allowing the rest of its formidable mass to remain out of sight from even highly perceptive prey. In combat, the deinosuchus grinds its prey between its powerful jaws, knocking back other foes with its formidable tail while it snaps bones and tears the flesh of its captured meal.",
    organization: "solitary, pair, or float (3-6)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 6
      },
      Stealth: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 12
          }
        ]
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "2d6+13"
      },
      "snap bite": {
        type: "Ex",
        text: "A deinosuchus making a full attack can make a second bite attack at a -2 penalty if its primary bite attack misses."
      },
      "hold breath": {
        universalMonsterAbility: "Hold Breath",
        parenthetical: ""
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  "Marine Crocodile": {
    legs: 4,
    arms: 0,
    source: "Island Of Empty Eyes",
    creatureType: "animal",
    crocodile: true,
    reptile: true,
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 4,
    hdVal: 8,
    cr: 3,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 15,
      swim: 50
    },
    abilities: {
      str: 20,
      dex: 13,
      con: 17,
      int: 1,
      wis: 12,
      cha: 2
    },
    feats: [
      {
        name: "Improved Initiative",
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
        specialAbility: "grab",
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 4
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "tropical oceans",
    visualDescription: "This fishlike reptile has a thin, streamlined snout filled with needlelike teeth and a long, flat tail that it uses to propel itself through the water.",
    description: "The marine crocodile resembles its land-based cousins in general body shape and size, though its legs are a hybrid of webbed feet and nascent fins. Its long tail is thinner and flatter than those of traditional crocodilians, allowing the marine crocodile to swim with alarming speed as it whips its tail back and forth. Marine crocodiles generally remain in warm, shallow oceans and seas. They spend most of their time at sea hunting fish, sea mammals, aquatic humanoids, and monstrous humanoids like merfolk, sahuagin, and locathahs. Only when breeding and laying eggs do marine crocodiles venture onto land (where they are slow and clumsy), before returning to the sea.",
    organization: "solitary, pair, or float (3-6)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 4
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      "death dive": {
        type: "Ex",
        text: "When grappling a foe of its size or smaller, a marine crocodile can perform a deadly dive upon making a successful grapple check. As it clings to its foe, it uses the force of its powerful tail to propel it downward in the water, allowing it to use both the move and damage actions as part of its grapple attempt. If successful, the marine crocodile maintains its grapple."
      },
      "hold breath": {
        universalMonsterAbility: "Hold Breath",
        parenthetical: ""
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  "Saltwater Crocodile": {
    legs: 4,
    arms: 0,
    source: "Island Of Empty Eyes",
    creatureType: "animal",
    crocodile: true,
    reptile: true,
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Huge",
    hd: 6,
    hdVal: 8,
    cr: 5,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 20,
      swim: 30
    },
    abilities: {
      str: 23,
      dex: 10,
      con: 20,
      int: 1,
      wis: 13,
      cha: 2
    },
    feats: [
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Perception",
        choiceSource: "Skill Focus"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Stealth",
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
      naturalArmor: 10
    },
    space: "15 ft.",
    reach: "15 ft.",
    environment: "tropical coasts and rivers",
    visualDescription: "This crocodile is nearly half again as large as a normal crocodile, and seems to smile with its long, toothed mouth as it lunges forward.",
    description: "Native to tropical saltwater estuaries and the freshwater rivers that feed them, saltwater crocodiles are among the largest form of non-primordial crocodilian on Golarion. Adult saltwater crocodiles can reach lengths upward of 20 feet and weights of over 2,000 pounds, and are typically more lethargic than their smaller kin, spending their days sunning themselves on land or in shallow water and hunting at night.",
    organization: "solitary, pair, or float (3-8)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 2
      },
      Stealth: {
        ranks: 2,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      "death roll": {
        type: "Ex",
        text: "When grappling a foe of its size or smaller, a saltwater crocodile can perform a death roll upon making a successful grapple check. As it clings to its foe, it tucks in its legs and rolls rapidly, twisting and wrenching its victim. The crocodile deals its bite damage and knocks the creature prone. If successful, the crocodile maintains its grapple."
      },
      "lunging bite": {
        type: "Ex",
        text: "Once per minute, a saltwater crocodile can extend the reach of its bite attack by 5 feet without taking the normal penalties to AC associated with the Lunge feat. This extended reach applies only to the crocodile's bite attack and lasts until the start of the creature's next turn."
      },
      "hold breath": {
        universalMonsterAbility: "Hold Breath",
        parenthetical: ""
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  Tetrolimulus: {
    source: "Island Of Empty Eyes",
    creatureType: "magical beast",
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Large",
    hd: 14,
    hdVal: 10,
    cr: 11,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 50,
      swim: 50
    },
    abilities: {
      str: 22,
      dex: 18,
      con: 21,
      int: 3,
      wis: 12,
      cha: 9
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
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Lunge",
        type: "Combat"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Run",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
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
    defense: {
      naturalArmor: 14
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "temperate coasts",
    visualDescription: "From a body like a strange crab sprouts the torso of a praying mantis, clad in coral-colored crustacean armor. Swaying hypnotically, it rattles razor-sharp claws and raises its long, rapier-like tail stinger.",
    description: "A terrifying mix of prehistoric arthropod and heavily armored mantis, the tetrolimulus is the stuff of nightmares for shipwrecked and abandoned mariners. Plated with a spiny crustacean exoskeleton, the upper body of the tetrolimulus is reminiscent of a very robust kind of mantis. Its raptorial forelimbs, folded as if in prayer, flash forward with frightening speed and precision to brutally slice opponents before they have had a chance to act. Captains and mutineers alike are quick to remind their enemies of these deadly claws and the creature's other name, the \"beach guillotine,\" for the brutal justice it exacts on those put ashore for choosing the wrong side in a mutiny. With somewhat less panache, the tetrolimulus is often described as the \"sea-mantis\" because it resembles a crab's strong legs and shell merged with a mantis' powerful arms. Trailing behind is a scorpion's deadly stinger. The creature's durable, spiked shell covers five pairs of blade-like legs that work together to produce remarkable speeds even through challenging terrain. Truly a master of the beaches, the tetrolimulus has caught many mariners off guard with a blazing charge over varied terrain, perforating a noiseless trail through wet sand, then clattering over rocks with the sound of dice thrown across a table. Its final and most dangerous terror, held upright and waved like a regal scepter in combat, is the tetrolimulus's tail stinger. The stinger is razor sharp along its outer edge, but its neat incisions are nowhere near as dangerous as the poison that coats its blade. Those who succumb to a dose of poison-called tetrodotoxin-are soon to be a meal for the sea-mantis. Muscle spasms and cramps accompany a gradual slowing of movement, hinting at oncoming paralysis and the agony of a neat butchering while still alive for easy consumption. One of nature's cruelest poisons, tetrodotoxin is a popular tool of the Red Mantis assassins, who appreciate both the poison's painful efficacy and the mantis-form of its progenitor. Ecology Out of the water, the tetrolimulus adopts an unusual swaying movement of the upper body. Although its purpose is not entirely clear, it is thought that, much like the land-dwelling mantis, the movement enhances the creature's primitive vision and makes picking out prey by its own relative movement easier. It has been suggested that remaining completely still when confronted by a tetrolimulus may prevent detection, but none have been able to confirm the success of this tactic, and there are none who are confident enough of the theory to test it in the field. Female tetrolimuluses, the hunters of the species, are by far the more aggressive. Rarely seen, males live in deeper waters as bottom feeders, emerging only in the mating season in early spring. At this time for a few days each year, both sexes make great journeys, sometimes of hundreds of miles, to return to ancient coastal breeding grounds. Here dominant and aggressive females meet and mate with the strongest of the smaller and more delicate males. Only a small number of these males get a chance to breed, and an even smaller number survive to return to the oceans. The energy and effort of their travels exhaust the females, and once they've been impregnated, the easiest and closest source of food is the weaker males surrounding them. A fertilized female may even continue to exhibit signs of availability to encourage more males to approach her- not for reproduction, but to satisfy her more immediate hunger. Young are born at sea, and perhaps as payment for their strength and power later in life, they spend their first few months at the bottom of the food chain. Without the thick shells of maturity, they are easy prey, which contributes a great deal to population control of their species. As their shells thicken and harden, they start to enjoy a less harried existence, and by 6 months old they start to fight back. They reach maturity in 12 to 18 months and can live for up to 50 years. Tetrolimuluses' behavior is largely instinct-driven, but during the breeding season the normally nomadic creatures will fight viciously to protect the shores of their ancestral breeding grounds. Even male sea-mantises rise to combat, though at sea they more commonly flee than risk confrontation. Females can be found in the area of the Abendego Gulf, from Mediogalti Island all the way into the Shackles and as far north as the Sodden Lands. Even Rahadoum has seen the occasional tetrolimulus washed ashore to the south, where the creatures are feared as the twisted manifestations of Achaekek, conjured for worship by the Red Mantis and a stark reminder of the folly of religious devotion. There are descriptions of creatures similar to the tetrolimulus to the north, even into the Inner Sea, but these stories are as old and leaky as the ships of the pirates and traders who tell them and no reports of tetrolimuluses along the cost of Cheliax, for example, are younger than two generations. Much of tetrolimuluses' bulk is armor, and despite their size they can survive on relatively small quantities of food. In perhaps the only mark of intelligence in their species, they try to avoid overfishing, instead roaming over several miles of coastline to balance their Ecology. The majority of their diet is fish and cephalopods, but they are competent trackers and follow hints of habitation on their beaches to devour any coast-dwelling mammals foolish enough to find themselves on the beaches, including humanoids. Like most animals, tetrolimuluses tend to avoid large settlements or areas frequently visited by humans. Remote or inaccessible beaches are the females' preferred habitat, but occasionally a powerful storm rolling out of the Eye of Abendego can toss them on more popular or even populous coastlines. Surprisingly high concentrations of the creatures are found around Mediogalti Island and its outlying cluster. Some suggest this is due to deliberate cultivation by the Red Mantis, thanks to the tetrolimulus's favorable form, but it may simply be because the treacherous waters and hidden coves are perfect for their reclusive lifestyle, and the frequent mutinies, shipwrecks, and foolish adventurers provide a varied and ample diet for the brutal predators. Tetrodotoxin While none are stupid enough to actively farm sea-mantises, occasionally the corpse of one is washed up into the more accessible bays on the coasts of the Shackles or Mediogalti Island. Some of the more enterprising residents of Ilizmagorti have developed a method of harvesting the cruel tetrodotoxin poison, from which the tetrolimulus gets its name, for sale to the assassins of the Red Mantis. A single dose of tetrodotoxin sells for 1,300 gp. Its rarity and potency make it a valuable product, and prices outside the Shackles or Mediogalti Island can be 50-100% higher. One dose of poison can be harvested from the corpse of a tetrolimulus, provided the lower half of the creature is intact. This requires a DC 25 Survival check, and even those who usually find themselves competent at skinning or gutting creatures struggle with the intricacies of the sharp tail stinger. In harvesting the tetrodotoxin poison, those without the poison use ability are subject to the standard 5% chance of self-poisoning.",
    organization: "solitary, pair",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 1
      },
      Perception: {
        ranks: 3
      },
      Survival: {
        ranks: 13
      }
    },
    special: {
      poison: {
        universalMonsterAbility: "Poison",
        name: "Tetrodotoxin",
        type: "Ex",
        text: "Tetrodotoxin: Sting-injury; save Fort DC 22; frequency once; initial effect staggered for 1 round, secondary effect paralysis for 1d4 rounds; cure 2 consecutive saves.",
        saveDC: 10
      },
      pounce: {
        universalMonsterAbility: "Pounce"
      },
      amphibious: {
        universalMonsterAbility: "Amphibious"
      },
      "shoreline mastery": {
        type: "Ex",
        text: "The multi-limbed nature of the crab half of the tetrolimulus allows it to ignore the effects of uneven or difficult terrain. This does not apply to terrain magically manipulated to impede movement."
      }
    },
    resistances: [
      {
        damageType: "cold",
        value: 10
      }
    ]
  },

};
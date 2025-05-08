
export const Fires_Of_CreationCreatures = {
  Petromin: {
    source: "Fires Of Creation",
    creatureType: "animal",
    flying: true,
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Tiny",
    hd: 1,
    hdVal: 8,
    cr: "1/3",
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 20,
      climb: 20,
      maneuverability: "Poor",
      fly: 40
    },
    abilities: {
      str: 3,
      dex: 15,
      con: 10,
      int: 2,
      wis: 12,
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
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {},
    space: "2 1/2 ft.",
    reach: "0 ft.",
    environment: "any deserts",
    visualDescription: "This sleek, furred creature has flaps of skin stretching between its limbs and its body.",
    description: "Petromins, also known as azure gliders, are desert cliff-top dwellers that glide down to snatch prey. As a defense, their coloration is countershaded; the blue, sky-like coloration on their undersides makes them hard to notice from the ground, while their brown fur helps them blend into desert vistas below, hiding them from predatory birds. The fur of petromins is awash in sapphire-blue bioluminescence, unnoticeable during the day but distinctive from dusk until dawn. Petromins have control over this natural light, which allows them to attract the large insects on which they feed. A petromin measures 30 inches in length (including a 6-inch-long tail) and weighs 5 pounds. A spellcaster can select a petromin as a familiar, and the master gains a +3 bonus on Stealth checks as a special ability.",
    organization: "solitary, pair, or gathering (3-8)",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 0
      },
      Perception: {
        ranks: 1
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
      cloaked: {
        type: "Ex",
        text: "A petromin is invisible to creatures using only Darkvision, but can be detected by other means."
      },
      "gliding flight": {
        type: "Ex",
        text: "A petromin can't hover or fly up at an angle greater than 45 degrees while flying. It must end its turn on the ground."
      },
      luminous: {
        type: "Ex",
        text: "A petromin naturally sheds light equal to that provided by a candle. It can control the color of the illumination. As a swift action, it can extinguish the light."
      }
    }
  },

  Pilo: {
    source: "Fires Of Creation",
    creatureType: "animal",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Small",
    hd: 3,
    hdVal: 8,
    cr: 2,
    racialFeatures: [
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 13,
      dex: 13,
      con: 14,
      int: 2,
      wis: 14,
      cha: 7
    },
    feats: [
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
        weapon: "Gore",
        name: "Gore",
        specialAbility: "poison",
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
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any deserts",
    visualDescription: "Sharp quills cover this bright yellow, six-legged animal, and its long, twitching snout probes the air around it.",
    description: "These carnivorous marsupials, sometimes called tumblespikes, are irritable desert-dwelling creatures that even predators leave alone. They are aggressive and often attack creatures that are larger than themselves. Pilos plow toward their foes and attempt to gore these foes with their spikes, bellowing a wheezing series of grunts. When provoked by a creature much larger than themselves or a particularly dangerous predator, pilos roll up into a spiny ball to deter attacks. Their aggressive nature means that they often fight until they die or until their opponent perishes or flees. Though pilos are only 3 feet long, their muscular bodies and spikes-which constantly grow-contribute to their 80-pound weight. Like many marsupials, pilos carry their young in a pouch, which they protect by remaining rolled up except when hunting. Pilo Companions Starting Statistics: Size Small; Speed 30 ft.; AC +2 natural armor; Attack gore (1d6); Ability Scores Str 13, Dex 13, Con 14, Int 2, Wis 14, Cha 7; Special Defenses roll up; SQ Low-Light Vision, scent. 4th-level Advancement: Size Small; AC +2 natural armor; Attack tail slap (1d4); Ability Scores Str +2, Con +2; Special Attacks poison, quills.",
    organization: "solitary or pair",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 3
      }
    },
    special: {
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Quills-injury; save Fort DC 13; frequency 1/round for 4 rounds; effect 1d2 Dex; cure 1 save.",
        saveDC: 10
      },
      quills: {
        type: "Ex",
        text: "Any creature attacking a pilo with natural weapons or an unarmed strike takes 1d6 points of piercing damage. A creature that grapples a pilo takes 2d6 points of piercing damage each round it is engaged in a grapple. A pilo can also use its quills to damage any opponent it successfully bull rushes. Any creature that takes damage from a pilo's quills risks being poisoned."
      },
      "roll up": {
        type: "Ex",
        text: "As a move action, a pilo can tuck itself into a ball. This grants the pilo a +4 bonus to its natural armor, but its speed is reduced to 10 feet."
      }
    }
  },

  Sorico: {
    source: "Fires Of Creation",
    creatureType: "animal",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Small",
    hd: 2,
    hdVal: 8,
    cr: 1,
    racialFeatures: [
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 30,
      burrow: 10
    },
    abilities: {
      str: 10,
      dex: 13,
      con: 15,
      int: 2,
      wis: 14,
      cha: 7
    },
    feats: [
      {
        name: "Great Fortitude",
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
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any deserts",
    visualDescription: "This large, tawny rodent has powerful forelimbs ending in spade-like claws. Sand and mud cakes the creature's fur.",
    description: "Also called dustshroud rabbits, soricos dig out warrens in the desert sands, where they remain protected from the elements and predators alike. These communal animals live in vast tunneling colonies like ants, each working endlessly to provide for the warren. They dig tunnels and burrows, shoring up the sides of the passages with sticky saliva that hardens into a temporary cement. Since they constantly toil in their warrens, their tawny fur collects fine dust and sand particles. As an instinctive means of defense, soricos shake themselves violently, which loosens the sand and creates a distracting cloud of dust that allows them to escape from predators. Soricos measure 3 feet long, stand 2 feet tall, and weigh 100 pounds. Those who hunt soricos find their meat delicious, comparable to that of a farm-raised rabbit. Sorico Companions Starting Statistics: Size small; Speed 30 ft., burrow 10 ft.; Attack bite (1d4), 2 claws (1d4); Ability Scores Str 10, Dex 13, Con 15, Int 2, Wis 14, Cha 7; SQ Low-Light Vision, scent. 4th-level Advancement: Size Medium; AC +2 natural armor; Attack bite (1d6), 2 claws (1d6); Ability Scores Str +4, Dex +2, Con +2; Special Attacks dust cloud.",
    organization: "solitary, pair, or warren (3-36)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 1
      },
      Stealth: {
        ranks: 1
      }
    },
    special: {
      "dust cloud": {
        type: "Ex",
        text: "Three times per day as a move action, a sorico can shake loose a cloud of dust and sand from its coat that fills its space, providing concealment for 1 round. A light wind disperses this cloud immediately. Any creatures sharing a sorico's space when it uses this ability must succeed at a DC 13 Fortitude save or they become staggered for 1 round as they cough and sneeze. Creatures that don't breathe are immune to this effect. The save DC is Constitution-based."
      }
    }
  },

  "Collector Robot": {
    source: "Fires Of Creation",
    creatureType: "construct",
    subTypes: [
      "robot"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 2,
    hdVal: 10,
    cr: 3,
    racialFeatures: [
      "All-Around Vision",
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 10,
      maneuverability: "Perfect",
      fly: 60
    },
    abilities: {
      str: 17,
      dex: 17,
      con: "-",
      int: 12,
      wis: 14,
      cha: 1
    },
    feats: [
      {
        name: "Improved Initiative",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Slam",
        name: "2 Slams",
        specialAbility: "grab",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Integrated stun gun",
        name: "Integrated stun gun",
        specialAbility: "Integrated stun gun",
        damage: "1d8"
      }
    ],
    immunities: [
      "construct traits"
    ],
    defense: {
      naturalArmor: 3
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Numeria)",
    visualDescription: "A soft whirring noise accompanies this flying mechanical creature. Its arms and hands end in spindly, multi-jointed fingers, and four circular rotors hold the creature aloft.",
    description: "Serving as long-distance scouts, trackers, and acquisition agents, collector robots see frequent use in the study and collection of alien life forms on new worlds. They can operate independently for years, cataloging unique species while enduring extreme environments that would overwhelm their biological makers. These machines may tag a captive creature with a tracker chip that can be monitored and tracked with their integrated chipfinders. They do so to observe and document the behavioral patterns of such creatures from afar, studying viable specimens for days until they eventually isolate and retrieve the studied prey again for further examination in the controlled laboratories of the robots' masters. Among their more impressive features, collector robots possess a hardened artificial intelligence, maintaining a singular focus on their mission directives even when wandering out of communication range with their owners. They tend to react swiftly to movement and perceived threats to their physical security, either emitting loud tones or alarms as a preemptive warning, or flying upward to gain altitude before assessing a given situation and potentially opening fire in defense of itself. Some collector robots grow more lax in their analysis protocols over time, giving way to a state similar to paranoia if left in the field for too long. This corrupted logic inevitably leads them to interpret even the most innocuous actions as proof of hostile intent. Other collectors become fixated on their directive to retrieve specimens without undue damage, interpreting it as a need to protect their targets from all possible sources of harm. Ecology Collector robots have no defined Ecology, as they are built by others and gifted with a unique purpose and skill set. Most often, they emerge from automated factories, engineering shops, and scrap heaps under the direction of a controlling authority that activates them and assigns their missions. Thereafter, the power cores of collector robots last indefinitely. Most collector robots have fusion generators, but some have the ability to derive power from the sun, making them capable of recharging several weeks' worth of operating power with solar energy in a single daytime \"sleep\" cycle. During prolonged missions, collector robots often support one another in the absence of their masters, dragging damaged units back to repair facilities and cooperating to achieve any mutual goals. Collector robots have a similar protectiveness toward other robots of various types, treating them almost like siblings. Habitat & Society Collector robots have little in the way of organized society, but do array themselves in a rigid hierarchy as designated by their controlling authority. Individual collectors may carry a higher rank than other robots, and thus are capable of commanding lesser machines they encounter or even overriding their programming with new directives as they commandeer aid in carrying out their assigned missions. This often leads to symbiotic relationships with servant robots capable of repairing and assisting with their upkeep. Collector robots first appeared in Numeria, but some have since wandered further afield, slaves to their dedicated programming as they go about cataloging, tagging, and occasionally tracking various life forms- sentient or otherwise. Some rogue collector robots kidnap people and creatures, and secret them away in remote caves. Others cascaded from the starship Divinity during its original descent, falling to Golarion as newly deployed probes far outside the range of Unity's control, thus free to pursue individual interests. A few enterprising Technic League wizards and alchemists have managed to control some of these automatons, taming and reprogramming them to suit their purposes. New directives for these automatons typically involve the abduction or assassination of targets that their overseers program into them. Variants The chassis developed for collector robots has proven exceptionally versatile over the years, giving rise to multiple configurations and alternate capabilities. These are less likely to be encountered than a typical collector robot. Some of the models include: Aquatic Collector Robots (CR +0): Adapted for use in marine environments, aquatic collector robots abandon flight for a swim speed of 30 ft. Their integrated stun guns still function underwater, though they are based on frequencies designed to work more eff iciently in aquatic environments. Extermination Robots (CR +1): Newly encountered life forms can sometimes threaten the safety of landing parties or the ecological balance of controlled environments. Extermination robots serve a more specialized role than collectors, programming themselves to track and annihilate a single type of creature. This ability grants a favored enemy bonus (as the ranger class ability) against a single creature type chosen from the ranger favored enemies table. The robot also comes equipped with a longer-range arc rifleTG. Trapper Robots (CR +1): Some robots cover a wider range of territory by deploying traps rather than hunting creatures individually. Designed to capture specimens for retrieval and sedation, they have gravity-based snares which function similar to the snare spell. They can deploy up to five of these devices and remain linked to them via tracker chips and an integrated chipfinder. When a snare is sprung, it sends an alert to the trapper robot, which then hurries to retrieve its quarry.",
    organization: "solitary, pair, or unit (3-6)",
    languages: "Androffan",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 0
      },
      Perception: {
        ranks: 2,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Stealth: {
        ranks: 2
      },
      Survival: {
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
      "integrated stun gun": {
        type: "Ex",
        text: "A collector robot has an integrated stun gun slung beneath its body. This weapon uses a powerful sonic amplifier to produce powerful low-frequency blasts of energy that pummel targets. This weapon has a range increment of 20 feet, and it deals 1d8 points of nonlethal damage. On a critical hit, the robot can attempt a free trip combat maneuver (CMB +12) against the target, which does not provoke attacks of opportunity."
      },
      "integrated tracking": {
        type: "Ex",
        text: "A collector robot has integrated systems that allow it to tag and track creatures. As a full-round action, a collector robot can implant a tracker chipTG into the body of a target that it is grappling or a helpless target. Once implanted, the tracker chip is activated and the collector robot's chipfinder can detect the presence of the implanted tracker chip within 1 mile. It uses a signal to locate the tracker chips, and this signal can be blocked by 1 foot of metal, 5 feet of stone, or 20 feet of organic matter. A tracker chip can be removed with a sharp tool. Doing so deals 1 point of damage. Once an implanted tracker chip is removed from the body (or remains in a body after it dies) it retains enough energy to continue to be detected by the collector robot's sensors for 1 week."
      },
      "adaptive tracker": {
        type: "Ex",
        text: "As a full-round action, a collector robot can adapt itself to any environment in which it travels, granting it a +2 bonus on initiative checks and Knowledge (geography), Perception, Stealth, and Survival checks while in that kind of terrain."
      },
      hardness: {
        universalMonsterAbility: "Hardness",
        value: 10
      },
      "reactive gyros": {
        type: "Ex",
        text: "The rotors that grant a collector robot flight also provide quick reactions to threats and external stimuli, granting it a +3 racial bonus on Reflex saves."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  Ghelarn: {
    source: "Fires Of Creation",
    creatureType: "aberration",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 3,
    hdVal: 8,
    cr: 2,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Tremorsense 30 ft."
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 17,
      dex: 10,
      con: 16,
      int: 3,
      wis: 14,
      cha: 3
    },
    feats: [
      {
        name: "Combat Reflexes",
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
        weapon: "Tentacle",
        name: "2 Tentacles",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 5
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "cold or temperate deserts",
    visualDescription: "Purple tentacles emerge from a white, coral-like rock formation, tracing whirled patterns in the surrounding sand.",
    description: "Born on the desert plain of an alien world, the soft-bodied ghelarn is a non-aquatic arthropod living within a shell-like exoskeleton manufactured from its own hardened secretions. This outer carapace contains many perforations, similar to dry coral or air-blasted stone, providing ample room from which the ghelarn can extend its outer extremities and explore the world. Chief among these appendages are two main tentacles that it uses to pull itself through the upper layers of sand within its native home, burrowing just below the surface while its hardened carapace remains above ground. As a result, ghelarns give the impression of ambulatory stone formations when traveling, but they can also abandon their shells entirely and delve deeper into the sand to avoid predators. Patient, quiet creatures, ghelarns prefer to ambush prey, waiting until suitable meals wander within reach of their tentacles or into the sticky quagmires they create just below the surface around their nesting grounds. Helpless victims soon find themselves pulled into the sand as the ghelarn extends invasive tendrils from its lower body. These lesser tentacles slowly bleed away moisture from anyone trapped in the ooze, leaving behind little more than dried husks and bones for scavengers to find, along with whatever equipment such victims may have carried. Ecology During the creatures' spawning season, an entire clutch of ghelarns produces a variant musk in their secretions to attract one another. Some travel for miles in search of this scent, and the resulting orgy once a group gathers allows for a communal intermingling of reproductive oils. This impregnates multiple ghelarn at the same time, enabling them to spawn new offspring as they separate again. A typical ghelarn can create 1d3 young, which gestate for consecutive 3-month periods rather than being born all at once. Pregnant ghelarns abandon these young to fend for themselves almost as soon as they're born, moving to another region to birth more offspring rather than leaving them within the same area to compete for resources. It takes a newborn ghelarn about 2 weeks before it can muster enough secretions to form a hardened shell of its own. During this time, it stays deep below the earth, seeking nourishment and moisture trapped in the desert soil rather than risking its vulnerable body to predators above ground. Once fully matured, it pushes upward, its shell rising from the sand to mark its domain. Sentient creatures wisely avoid these areas, though it's often hard to tell empty shells from a living ghelarn's hunting grounds. Many societies find the abandoned and cast-off shells useful for making tools and crafting weapons and armor. As a result, ghelarn habitats frequently draw those seeking to harvest them as a resource. Unfortunately for the scavengers, these shells also attract young ghelarns who haven't yet formed their own and seek to use the abandoned ones as temporary homes. Habitat & Society Ghelarns typically live solitary lives. The extreme nature of their native habitat causes them to separate and spread out to avoid overhunting an area. They sometimes cooperate in pairs or packs known as clutches to defend themselves, but more frequently do so in preparation for mating season, so they can drag down large prey that they leave behind for their new offspring to feed upon. Sometimes a clutch will gather in geologically unstable regions, where quakes and tremors draw their interest. Mostly, they migrate in seemingly aimless patterns, driven away from the harsh sounds of overhead thunderstorms, as the noise causes them acute pain. The rudimentary sentience of ghelarns places them just above animal-level intelligence. Though they have no real language of their own, they communicate warnings or call for help by turning their porous shells into the wind and adjusting the flow with their tentacles, allowing air to pass through the openings, and creating a musical \"voice\" similar to wind instruments. Each ghelarn's voice is distinctly different from any other ghelarn. Some societies have also learned to domesticate young ghelarns-these cultures train them to understand simple commands and use them as guard animals. Noble Ghelarns Occasionally, evolution gives rise to a more advanced breed of ghelarn. These specimens have both the advanced and giant simple templates, and prove more intelligent than their lesser kin. The shell of a noble ghelarn encompasses a much greater area, appearing more like an outcropping of rock or a small hillside. This grants them the freeze special quality to appear as such, allowing them to take 20 on their Stealth checks to hide in plain sight. Noble ghelarns sometimes remain hidden within these massive shells and purposefully suppress their entrapping ooze in order to dupe other creatures into seeking shelter next to them. While the tall shell certainly provides shade from the sun and a windbreak against desert storms, those camping near a noble ghelarn inevitably find themselves assaulted during the night by the creature's invasive tendrils. These appendages are more leechlike than the painful barbs of lesser ghelarns and require a DC 20 Perception check for sleeping creatures to notice.",
    organization: "solitary",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 2
      },
      Stealth: {
        ranks: 1,
        bonuses: [
          {
            source: "inherent",
            value: 4,
            situational: true,
            note: "+14 in deserts"
          }
        ]
      }
    },
    special: {
      entrap: {
        universalMonsterAbility: "Entrap",
        hardness: "hardness 5",
        duration: "1d8 rounds",
        saveDC: 10,
        hp: "hp 8",
        text: "A ghelarn secretes a quagmire of sticky fluid a few feet below the sand where it lives. This fluid extends in a 10-foot radius around the creature and acts to trap victims, making it easier for the ghelarn to attack prey with its tentacles or feed upon it with its leeching tendrils. This otherwise acts as the entrap universal monster rule."
      },
      "leeching tendrils": {
        type: "Ex",
        text: "A living creature that spends more than a single round ensnared within a ghelarn's entrapping fluid becomes targeted by invasive tendrils from the ghelarn's lower body. These feeding stalks deal 1 point of bleed damage each round, and continue to do so for as long as a victim remains within the area of the ghelarn's entrapping fluid."
      },
      hibernate: {
        type: "Ex",
        text: "When food is scarce, a ghelarn can enter a state of hibernation for an indefinite period of time. When it enters hibernation, the ghelarn nestles itself in the sand and fills in its porous carapace with sticky excretions that quickly harden to seal the creature from the elements. When hibernating, the ghelarn doesn't have to eat or drink. A ghelarn remains in a state of hibernation until it senses another living creature within 10 feet, at which point it dissolves the seals on its carapace over the course of 1d4 minutes."
      },
      carapace: {
        type: "Ex",
        text: "A ghelarn typically shelters within a hardened, rocklike shell that houses all of its vital organs. By withdrawing its tentacles and sensory stalks into its shell, the ghelarn gains total cover until the beginning of its next turn. The shell doesn't provide cover against targeted spells, and the ghelarn's movement is limited to downward burrowing during this time. The benefits of the shell can be lost if sundered (hardness 5, 8 hit points, regenerates in 2d6 days), and a ghelarn caught without its carapace loses its natural armor bonus. Entrap (Ex) A ghelarn secretes a quagmire of sticky fluid a few feet below the sand where it lives. This fluid extends in a 10-foot radius around the creature and acts to trap victims, making it easier for the ghelarn to attack prey with its tentacles or feed upon it with its leeching tendrils. This otherwise acts as the entrap universal monster rule."
      }
    },
    resistances: [
      {
        damageType: "fire",
        value: 5
      },
      "vulnerable to sonic"
    ]
  },

  Tsaalgrend: {
    source: [
      "Fires Of Creation",
      "Bestiary 5"
    ],
    creatureType: "plant",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Small",
    hd: 3,
    hdVal: 8,
    cr: 2,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 10,
      climb: 10,
      maneuverability: "Poor",
      fly: 40
    },
    abilities: {
      str: 13,
      dex: 15,
      con: 15,
      int: 3,
      wis: 10,
      cha: 8
    },
    feats: [
      {
        name: "Flyby Attack",
        type: "Monster"
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
        specialAbility: "grab",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Tendril",
        name: "2 Tendrils",
        specialAbility: "grab",
        damage: "1d4"
      }
    ],
    defense: {
      naturalArmor: 1
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any underground",
    visualDescription: "Strange, translucent gas bladders carry this tangle of thorny, purple vines and clumps of mold through the air. A dusting of spores floats to the ground beneath it.",
    description: "A tsaalgrend is a predatory creature resembling a tangle of sturdy vines with jagged purple thorns. Its coloration is mottled with brown, green, and yellow mold patches that flake and fall as the creature writhes through the air. The tsaalgrend's vines barely conceal two translucent, gas-filled sacks that act as balloons, enabling it to float along above the ground. Stretching from the creature's center are two longer vines that the tsaalgrend uses to capture its prey. An opening filled with rows of spiky thorns serves as the creature's mouth and is positioned on the creature's underside, where it constantly emits a wet, rancid stench. A tsaalgrend typically grows to be over 3 feet long, and weighs about 40 pounds. Ecology Strange and sentient plants, tsaalgrends float up to the surface from their underground habitats in a constant search for prey. Growing in the darkened depths, these fungal creatures shun light, only hunting at night near the cave openings from which they emerge. Tsaalgrends can fly, albeit awkwardly, by forcing air into and out of their gas bladders. This helps them not only get around in the difficult conditions found underground, but also avoid becoming snacks for enterprising predators. When not flying, the creatures constrict and relax their tangle of vines to provide a roiling form of locomotion. They can move slowly across the ground and even climb vertical surfaces. Tsaalgrends are often found clinging to the walls in subterranean chambers, and sometimes whole colonies can fill a cave with the airy sounds of rustling vines and the ventilation of their gas bladders. Tsaalgrends are carnivorous hunters that paralyze prey by hovering above their victims and raining toxic spores. They then use their thorny vines to wrap up their prey and transfer it to their mouths. Since tsaalgrends are small and relatively weak, larger prey often eludes these creatures' grasp. Instead, tsaalgrends feed on insects, rodents, snakes, and other similar creatures they find crawling around in caverns. A tsaalgrend's mouth is lined with crisscrossed rows of jagged thorns, layered in rings, appearing like a shark's teeth. Inside its mouth, quick-moving tendrils covered in tiny barbed spines wrap around food and pull it to the creature's stomach, rasping its meal against its rows of teeth to help break down the body into more easily digestible chunks before finally allowing stomach acid to complete the digestion process. Tsaalgrends not only produce their own fungus, but also play host to a multitude of other molds, fungi, mosses, and epiphytes. The most powerful mold growing within a tsaalgrend is the fine, dustlike black spores it generates. Used for hunting, these spores can be released in a wide area. Any creature breathing them in is immediately subject to an overwhelming fear response as its mind is flooded with the most frightening things imaginable. The victim's breathing becomes quick and shallow, the heart rate rises dramatically, and nearby sounds become dull over the rush of blood in the ears. The mind screams to run away, but the muscles simply cannot react. Opportunistic alchemists have been known to hunt and trap tsaalgrends with the intention of painstakingly harvesting the black spores from living specimens and using them to fabricate new and potent inhaled poisons. Securing a living tsaalgrend is important to the process, as the spores lose potency soon after they are released, making storage for later utilization impractical. Such alchemists often run afoul of druids with an affinity for fungal creatures who have an interest in communing with and protecting tsaalgrends. Though tsaalgrends display only limited intelligence, they seem to be capable of communicating with each other through the deliberate transfer of spores. These bouts of communication involve bursts of various colors and types of spores in quick succession. This behavior has been observed just prior to coordinated hunting efforts. Some creatures that have spent time around tsaalgrends claim that the plants also respond to spoken language. Critics of this theory say that the plant creatures are simply responding to the noise and the presence of a potential meal. Several distinct patches of stubby 1- or 2-inch growths found along the creature's sides are believed to serve as eyes. Though tsaalgrends favor damp environments, they have extremely dry exteriors which make them especially vulnerable to fire and fire-based attacks. Tsaalgrends exposed to fire can be reduced to piles of ash in just a few moments. As such, tsaalgrends avoid open flame, and creatures that share environments with these floating plants use this knowledge to their advantage to keep their caves free of floating predators. Habitat & Society Tsaalgrends live and breed in underground caverns and other dark, damp places, but it's strongly suspected that they didn't evolve naturally on Golarion. Even though the creatures live almost exclusively in underground environments, those who explore the Darklands rarely report the creatures too far afield from caverns directly below Numeria, suggesting that tsaalgrends may have come to Golarion during the Rain of Stars. The plants also tend to share environments with vegepygmies and the russet mold that spawns them, however, leading other scholars to claim that tsaalgrends are somehow magically manipulated offshoots of those creatures, if not the direct product of drow sporecrafting. Still others believe that the plant creatures must stem from a subterranean portal to the First World, perhaps a breach broken open by the immense impact of the crashing Silver Mount. Only further study will reveal the truth. Tsaalgrends bloom infrequently, producing offspring only when certain conditions are met. Environmental conditions linked to moisture levels, available food, and the presence of other fungal creatures trigger the growth of sacs that produce vegetative spores. These spores are distributed safely on damp ledges covered with slimes, fungi, or other fertile organic matter like guano. These spores develop over the course of a few weeks, forming the young tsaalgrends' spore sacs first. As they mature, the spore sacs lift developing tsaalgrends into the air, making them vulnerable to predators as they lack the ability to control their flight until they sprout their thorny tendrils. It takes a full month for tsaalgrends to reach maturity. On average, tsaalgrends live for about 4 years, though larger specimen have been reported, suggesting that their lifespan can be extended under ideal conditions. While most sentient, underground races treat tsaalgrends like nuisances and avoid these creatures, a tribe of derro living in the Darklands beneath Numeria corrals dozens of tsaalgrends in caves secured with iron grates. Eager to breed larger tsaalgrends or those with even more potent fungal poison, these derro explore the Darklands in order to seek out new and unusual tsaalgrends to capture and add to their corrals as spore stock. Rumor has it that the derro have bred a massive tsaalgrend that fills an entire cavern room by itself.",
    organization: "solitary, pair, cluster (3-6), or pod (7-20)",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 0
      },
      Fly: {
        ranks: 5
      },
      Perception: {
        ranks: 1
      }
    },
    special: {
      grab: {
        universalMonsterAbility: "Grab"
      },
      spores: {
        type: "Ex",
        text: "As a standard action, a tsaalgrend can release a cloud of toxic spores in a 10-foot-radius spread. Each living creature within this area must succeed at a DC 13 Fortitude save or become paralyzed with fear as the victim vividly hallucinates for 1d4 rounds. A creature that successfully saves against this effect is immune to the same tsaalgrend's spores for 24 hours. The save DC is Constitution-based."
      }
    },
    resistances: [
      {
        damageType: "acid",
        value: 5
      },
      {
        damageType: "electricity",
        value: 5
      },
      "light blindness",
      "vulnerable to fire"
    ]
  },

};
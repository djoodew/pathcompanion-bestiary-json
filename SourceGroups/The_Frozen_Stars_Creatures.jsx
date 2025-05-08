
export const The_Frozen_StarsCreatures = {
  Stormghost: {
    source: [
      "The Frozen Stars",
      "Bestiary 5"
    ],
    creatureType: "monstrous humanoid",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Large",
    hd: 17,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "All-Around Vision",
      "Darkvision 90 ft.",
      "Low-Light Vision",
      "Scent",
      "See in Darkness",
      "See in Fog"
    ],
    speed: {
      base: 50,
      climb: 30
    },
    abilities: {
      str: 27,
      dex: 23,
      con: 24,
      int: 11,
      wis: 14,
      cha: 16
    },
    feats: [
      {
        name: "Acrobatic Steps",
        type: "General"
      },
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Claw",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Mobility",
        type: "Combat"
      },
      {
        name: "Nimble Moves",
        type: "General"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Spring Attack",
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
        damage: "1d4",
        bonuses: [
          {
            source: "inherent",
            value: "1d6",
            appliesTo: "damageType",
            damageType: "electricity"
          }
        ],
        type: "primary"
      }
    ],
    immunities: [
      "Immune to disease, electricity, poison"
    ],
    defense: {
      naturalArmor: 12
    },
    space: "10 ft.",
    reach: "5 ft. (10 ft. with claws)",
    environment: "cold mountains",
    visualDescription: "Matching the color of snow and ice, this menacing creature stands on four pointed legs like those of an insect. A conical head ringed with tiny eyes and sporting gnashing teeth sits atop this creature's humanoid torso.",
    description: "Bestial hunters that prowl the mountains of Triaxus, stormghosts are a deadly threat to all creatures that stumble across their path. Triaxians attributed the name stormghost to these creatures because of their ability to conjure malignant weather and attack unseen. Stormghosts typically attack in remote mountainous areas, leaping down on their victims from cliff sides and ambushing them in blind mountain passes. Constantly in search of food, stormghosts are excellent hunters and trackers. These predators are completely unafraid of engaging with any target, and thus pose a risk to the humanoids of the planet- and even the dragons. As with Triaxians, stormghosts' appearances vary depending on the season. Thankfully, stormghosts are extremely rare, but the creatures live exceedingly long lives. A stormghost's regeneration diminishes long-term degradation of its body, allowing it to live for over 2,000 years. A stormghost stands nearly 8 feet tall in its regular posture, but can extend its legs to reach up to 14 feet. Formed of muscled flesh and hardened chitin, a stormghost weighs roughly 1,500 pounds. Ecology Stormghosts are apex predators in Triaxus's hills and mountains; a few even make their way to the lowlands. A stormghost is ephemeral like a phantom, and its coloration and ability to become invisible give rise to part of its common name, as victims are typically unaware of the creature's presence until it is far too late. It can also call down storms and banks of fog-the source of the other part of its common name-and can even conjure darkness. Stormghosts themselves, however, can see through fog and darkness, and possess other specialized senses. While the creatures have no recognizable nose, they are capable of tracking their prey by scent using a specialized sensory organ found on the lower part of their torsos. This organ picks up faint chemical signatures with such accuracy that a stormghost can differentiate between two creatures of the same type and recall with perfect detail an individual creature's signature for years after first encountering it. As with all successful hunters, stormghosts' senses and tenacity make them difficult to evade. These traits, in addition to their superior stamina, help stormghosts doggedly hunt down prey that initially escapes their clutches. Exceptionally single-minded, stormghosts live to hunt and hate losing their quarry, and they persistently pursue their fleeing prey, foregoing sleep and ignoring other victims that might be easier to take down-even if they're ravenous-in order to make their desired kill. Stormghosts undergo a change during Triaxus's transitional seasons, shifting their coloration to match their environment. In the winter, stormghosts have an icy white hide that allows them to better conceal themselves in the snow. As summer comes and the planet begins to thaw, stormghosts' hides darken and a splotched coloration of grays and browns emerges. This coloration allows them to hide themselves in the mountainous terrain in which they live. Habitat & Society Stormghosts are solitary creatures that despise sharing their hunting grounds with other creatures, especially other stormghosts. When another predator begins hunting in the same region as a stormghost, the stormghost shifts its predation to that creature, tracking it down and consuming it. The exception to this is when another stormghost trespasses upon its hunting grounds. While the stormghost still tracks down and kills its competition as it would another creature, it does not consume the rival stormghost, finding the flesh of its own kind completely unpalatable, and instead ritualistically butchers its competitor and leaves the corpse as a sign that this territory is already claimed. Stormghosts are exceedingly rare; fewer than 1,000 have been spotted, according to records kept by dragonriders of the Skyfire Mandate. Many of these sightings, made safely from the back of a dragonkin, are believed to be of the same stormghost, leading many scholars to estimate that the population might be much smaller, with a few at most living in the Parapet Mountains. A naturalist in Preita recently published a journal detailing his journey in search for evidence of a stormghost, as tales of these and other vicious beasts are fashionable in the cosmopolitan cities of the Allied Territories. In this journal, he postulates that stormghosts are aliens from another world in the solar system, or perhaps beyond. Their long lives, regenerative capabilities, robust physical form, yet low population numbers suggest this hypothesis is plausible. Although this researcher clearly lacks a greater understanding of worlds beyond Triaxus, his findings on the otherworldly origins of stormghosts are indeed quite accurate. On a planet in a nearby solar system, stormghosts were grown in facilities to be biological probes deployed on specific planets for 2,000 years before they would be retrieved. During their time on those worlds, they are tasked, compelled by their very genesis and the urge of every cell, to kill and consume organic life. Over the course of their lives, a gland within their torsos at the base of the neck collects samples of every kill. These samples can be collected by the stormghost's creators and analyzed. What they are searching for is anyone's guess, but the number of stormghosts on Triaxus suggests these unknown creators seek a comprehensive collection of dragons and dragonkind.",
    organization: "solitary",
    languages: "Triaxian",
    spellLikeAbilities: [
      {
        name: "alter winds",
        casterLevel: 11,
        timesPerDay: -1
      },
      {
        name: "fog cloud",
        casterLevel: 11,
        timesPerDay: -1
      },
      {
        name: "jump",
        casterLevel: 11,
        timesPerDay: -1
      },
      {
        name: "deeper darkness",
        casterLevel: 11,
        timesPerDay: 3
      },
      {
        name: "invisibility, greater",
        casterLevel: 11,
        timesPerDay: 3
      },
      {
        name: "gust of wind",
        casterLevel: 11,
        timesPerDay: 3
      },
      {
        name: "ice storm",
        casterLevel: 11,
        timesPerDay: 3
      },
      {
        name: "control weather",
        casterLevel: 11,
        timesPerDay: 1
      },
      {
        name: "plague storm",
        casterLevel: 11,
        timesPerDay: 1
      },
      {
        name: "sirocco",
        casterLevel: 11,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 6
      },
      Climb: {
        ranks: 5
      },
      Perception: {
        ranks: 17
      },
      Stealth: {
        ranks: 13,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Survival: {
        ranks: 15
      }
    },
    special: {
      "impaling leap": {
        type: "Ex",
        text: "As a standard action, a stormghost can jump into the air and land on a single target at least one size category smaller than itself, using its spiky legs to impale the victim. The target must succeed at a DC 25 Reflex save or it takes 4d8+12 points of piercing damage and is pinned. If the stormghost chooses to maintain the pin, it must succeed at a combat maneuver check as normal. Pinned foes take damage each from the impaling leap each round if they don't escape. The save DC is Constitution-based. See in Fog (Ex) A stormghost can see in fog and foglike conditions without penalty. Static Aura (Su) A stormghost can surround itself with crackling electricity that leaps from its body, affecting nearby creatures. All creatures within 5 feet of the stormghost take 2d6 points of electricity damage at the beginning of the stormghost's turn."
      },
      "sneak attack": {
        universalMonsterAbility: "Sneak Attack",
        bonus: "3d6"
      },
      "static blast": {
        type: "Su",
        text: "As a standard action, a stormghost can focus its static charge into a bolt, releasing it in a 40-foot line that deals 6d6 points of electricity damage. A successful DC 25 Reflex save halves this damage. A stormghost can use its static blast once every 1d4 rounds. The save DC is Constitution-based."
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        damageType: "acid",
        value: 5
      },
      "static aura": {
        type: "Su",
        text: "A stormghost can surround itself with crackling electricity that leaps from its body, affecting nearby creatures. All creatures within 5 feet of the stormghost take 2d6 points of electricity damage at the beginning of the stormghost's turn.",
        preText: "5 ft., 2d6 electricity"
      }
    },
    resistances: [
      {
        damageType: "cold",
        value: 10
      },
      {
        damageType: "fire",
        value: 10
      }
    ]
  },

  Ursikka: {
    source: "The Frozen Stars",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Huge",
    hd: 12,
    hdVal: 10,
    cr: 10,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Scent",
      "Tremorsense 30 ft."
    ],
    speed: {
      base: 40,
      burrow: 20
    },
    abilities: {
      str: 32,
      dex: 11,
      con: 22,
      int: 2,
      wis: 13,
      cha: 5
    },
    feats: [
      {
        name: "Awesome Blow",
        type: "Combat"
      },
      {
        name: "Improved Bull Rush",
        type: "Combat"
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
      },
      {
        name: "Snatch",
        type: "Monster"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "freezing viscosity",
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
      saves: {
        All: [
          {
            value: 4,
            note: "vs. mind-affecting effects"
          }
        ]
      },
      naturalArmor: 16
    },
    space: "15 ft.",
    reach: "15 ft.",
    environment: "any cold land",
    visualDescription: "This enormous, insectlike creature is covered in downy white fur, broken only by glossy black claws and portions of its exoskeleton. A pair of iridescent eyes gleams above a horrid three-part mouth that drips viscous fluid.",
    description: "Like enormous, nightmarish praying mantises, ursikkas roam the Triaxian wilderness during the wandering planet's winter years. These vicious, short-tempered predators rule primeval environs by default, being among Triaxus's largest, hungriest beasts. Ursikkas' towering height, which can reach 25 feet, is mostly due to the long, slender walking legs on which the creatures skitter with an eerie speed that belies their hulking size. A long, bloated abdomen accounts for most of the beasts' 20 feet of length. Ursikkas' thoraxes anchor their grasping forearms, which each end in sharp pincers capable of shearing flesh from bone like hot knives cutting through butter. Ursikkas' white, shaggy fur covers the majority of their bodies, and their three-part maws can open wide enough to swallow a human whole. The freezing, sticky fluid that drips from their gnashing jaws aids this activity even further. Ecology Ursikkas are specifically suited to their home planet's long winter season. Their impossibly cold bodily fluids, which allow them to thrive in subzero temperatures, grant them equally cold saliva that helps the beasts kill their prey as well as digest it. Further, the property that keeps ursikkas' spittle liquid at its freezing temperature also makes it incredibly sticky-a quality that aids the creatures in combat and when preparing for Triaxus's hot summer years. During their planet's long winter, ursikkas terrorize Triaxus's large swaths of uncivilized land in endless quests for food. The ravenous creatures require several tons of raw meat each week to survive. Although they prefer to eat the flesh of large, cold-blooded creatures, hungry ursikkas pursue any viable prey, particularly victims that seem sluggish and easy to catch. When the end of winter approaches, the huge quantity of food they consume fuels an increased production of saliva, which they use to prepare their summer abodes. During Triaxus's summers, ursikkas live inside cocoons constructed from their own saliva. In the weeks before the change of seasons, ursikkas choose an inconspicuous locale-such as inside cave complexes or even holes of their own construction-in which to spend the long summer. The creatures then tirelessly weave their spittle around their bodies until they're fully covered. In 24 hours, the chemicals in the spittle harden it into an impenetrable sheath that protects ursikkas from Triaxus's brutal summer heat. Shortly after their spittle-cocoons harden, the beasts go dormant and do not awake until the temperature returns to a more tolerable level. Although ursikkas are known for aggressiveness during the entirety of winter, they are at their most volatile right before and right after dormancy. An ursikka that is interrupted while weaving its cocoon immediately attempts to kill the intruders. An ursikka whose cocoon is broken during the summer emerges similarly enraged; ursikkas that defeat the creatures responsible for waking them attempt to reconstruct their cocoons, but as spittle production ceases during hibernation, those efforts often fail. Some Summerborn Triaxians actively seek out the cocoons of slumbering ursikkas, knowing they can defeat the exposed beasts relatively easily. Habitat & Society With their ruthless predatory skills and voracious appetites, ursikkas typically live solitary existences. However, in places where prey is abundant-such as the wilds of the Drakelands and in the Allied Territories-ursikkas sometimes live in pairs or, rarely, in small hives of three to 10. In such cases, ursikkas still hunt alone. Triaxian scholars note that the creatures don't hesitate to kill each other should one steal another's meal. In accordance with their long life cycles, ursikkas mate infrequently. Once or twice each winter, the larger females of the species typically seek out mates as determinedly as they hunt prey. Afterward, each female lays one enormous, fertilized egg made of a secretion similar to the creatures' hardened saliva. After a 5-year gestation period, the egg hatches. If ursikka parents are even aware of their offspring, though, their behavior does not indicate it. According to scholars, young ursikkas grow to maturity in fewer than 10 years. One disturbing speculation indicates that adult ursikkas sometimes enjoy the flesh of their younger counterparts-and may actually hunt juvenile members of their own species if prey becomes scarce. Whether this behavior is simply a way for adult ursikkas to survive or a warped way for them to retain their territorial dominance is unknown. Although they are very long-lived, ursikkas rarely live through more than two Triaxian winters. In the planet's most isolated territories, where few predators or stalwart hunters threaten them, ursikkas typically die of old age during their dormant period; ursikka carcasses swathed in shimmering, deteriorating cocoons are not uncommon in these frontiers. In more populated areas, ursikkas' lifespans are shorter, especially given the hardy, cold-forged winter cultures that hunt the creatures for protection, thrills, and sometimes meat. Indeed, the warriors of the most populous nations of the Allied Territories consider a slain ursikkas' claws, mandibles, and bulbous eyes the ultimate hunting trophies. Some even make furred armor from ursikkas' durable exoskeletons.",
    organization: "solitary, pair, or hive (3-10)",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 1
      },
      Perception: {
        ranks: 11
      }
    },
    special: {
      "coat claws": {
        type: "Ex",
        text: "As a standard action, an ursikka can coat its pincerlike claws with its freezing viscous saliva. This coating lasts for 1 minute. Any creature hit by an ursikka's coated claws or grappled by an ursikka using the Snatch feat takes an additional 2d6 points of cold damage (Reflex DC 22 half)."
      },
      spit: {
        type: "Ex",
        text: "As a standard action, an ursikka can spit a 60-foot line of its saliva. Creatures struck by this saliva take 8d6 points of cold damage and risk being entangled. A successful DC 22 Reflex save halves the damage and negates the entangled condition. The save DC is Constitution-based."
      },
      hibernation: {
        type: "Ex",
        text: "Ursikkas can enter a state of hibernation for an indefinite period of time, typically until Triaxus's long summer subsides. An ursikka surrounds itself with its spittle, which hardens into a cocoon. While hibernating, an ursikka doesn't need to drink or eat. The cocoon has hardness 10 and 60 hit points, and is immune to fire damage. As long as the cocoon remains intact, the ursikka remains unharmed in its hibernation. An ursikka must use its attacks to break free from its cocoon."
      },
      ferocity: {
        universalMonsterAbility: "Ferocity"
      },
      "freezing viscosity": {
        type: "Ex",
        text: "The saliva that drips from an ursikka's mouth is maddeningly sticky as well as preternaturally cold. Creatures that take damage from an ursikka's bite attack must succeed at a DC 22 Reflex save or become entangled for 1d4 rounds. While entangled, creatures take 2d6 points of cold damage (Reflex DC 22 half). An entangled creature can break free before the end of this duration by succeeding at a DC 19 Strength check or by dealing 15 point of damage to the encasing saliva with either a slashing weapon or with fire damage. Using fire to remove the saliva damages the entangled creature as well. The save DC is Constitution-based."
      }
    },
    resistances: [
      {
        damageType: "cold",
        value: 10
      }
    ]
  },

  Wolliped: {
    source: "The Frozen Stars",
    creatureType: "animal",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 4,
    hdVal: 8,
    cr: 3,
    racialFeatures: [
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 50
    },
    abilities: {
      str: 18,
      dex: 14,
      con: 17,
      int: 2,
      wis: 11,
      cha: 3
    },
    feats: [
      {
        name: "Endurance",
        type: "General"
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
        weapon: "Gore",
        name: "Gore",
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 4
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "temperate hills",
    visualDescription: "This shaggy, multi-legged creature has a flattened face with wide nostrils and four eyes. Ivory tusks jut downward from its mouth.",
    description: "Believed to be native to the Parapet Mountains, wollipeds were among the first beasts of burden domesticated by Triaxians. Some claim wollipeds weren't domesticated initially to be working animals, but rather were herded and bred for their extremely warm and plentiful fleece. In any case, Triaxians have a long history of using these magnificent animals for many purposes, even employing them as mounts in battle. A typical wolliped stands between 5 and 6 feet at the front shoulder and weighs upward of 1,000 pounds. Ecology Wollipeds are social herd animals that subsist on a diet of grasses, leaves, and other plant material. Wollipeds in high mountainous environments obtain much of their food from lichens and mosses, while herds of wollipeds on the plains graze on more substantial fare. Wild wollipeds tend to migrate to more plentiful foraging lands when winter comes to Triaxus, though these can be difficult to find. Domesticated wollipeds, tended to by their Triaxian herders, are found throughout nearly all of Triaxus. Walking on eight sturdy legs, wollipeds are exceptionally sure-footed. These creatures can climb steep mountain trails and march through heavy snow with little effort, and Triaxian cavalry have often charged up scree-choked hillsides to raid fortresses on the backs of armored wollipeds. The great beasts' facility at maneuvering in challenging environments and generally submissive nature have resulted in a long relationship with the humanoids on Triaxus. Wollipeds live for about 15 years, mating and giving birth every 11 months, and can be ridden until the final month of pregnancy. Habitat & Society Wollipeds are social animals, grouping together into herds for protection. When threatened, wollipeds gather in a tight cluster with the young animals kept in the very center of the herd. Domesticated wollipeds are used for casual riding, pulling plows, and walking circles to power wollimills. While other exotic fabrics are available during a Triaxian summer, the mainstay of Triaxian winter textiles is spun wolliped fleece. Wolliped fibers wick water away, and still provide adequate warmth even when soaked, while the variations in coat colors and textures provide a wide array of design options. Like Triaxians, wollipeds exhibit distinct seasonal variance. Wollipeds born during the winter have long, thick, shaggy coats of fine fibers with a hollow core, while those born in the summers have shorter, thinner coats. Rather than the coats of individuals changing, the change happens generationally; winter wollipeds give birth to short-coated summer wollipeds as the planet warms, and vice versa. The process happens quickly, usually beginning in eastern Aylok, though no one knows precisely why. In addition to wolliped fleece, some Triaxian artisans use the ivory from wolliped tusks as a raw material, but this is most common for wollipeds born during the winter, as their tusks are three times the size of those born in summer. Winterborn wollipeds use their foot-long tusks for a variety of purposes. In addition to using them to dig in the ice and snow for deep green tubers, burmoss, and patches of sentient tulbos fungus that stretches beneath the ice, wollipeds clash their tusks together in competitions for dominance within a herd and as part of their mating displays. Wollipeds use spitting as a form of communication as well as for defense. Most wollipeds only spit at one another, typically in the course of their tusk-clashing shows of dominance, but when threatened they can launch a nauseating wad of partially digested fodder at their attackers. Some trained wolliped mounts have honed this nature into a weapon guided by their riders. The dragons of Triaxus have little use for terrestrial mounts, and instead use wollipeds as a consistent source of food. More than half of all domesticated wollipeds eventually feed Triaxus's dragon population, though most wollipeds used for meat are older animals whose fleece has turned coarse and brittle. Triaxians also eat wolliped flesh, but most consider young and healthy animals too valuable to eat except during desperate winter years. Regional Variants The statistics on the facing page represent the most common breed of wolliped native to the Drakelands, the Allied Territories, and the Skyfire Mandate. In addition to these, a multitude of other breeds exist throughout Triaxus. Alurals: Triaxians of the Unbound Tribes breed the best wollipeds for battle, with their steeds recognized worldwide as being the strongest and most aggressive. Alurals are also the only known breed of wolliped that is carnivorous. Tribes here collect wolliped milk, fermenting it into a potent alcoholic beverage used for rituals, feasts, and holy days. Alurals have the advanced simple template. Ningese Wollipeds: The remote nation of Ning breeds the smallest wollipeds on Triaxus. Ningese wollipeds are quick and nimble, using these traits to elude the hordes of monsters threatening the civilized regions of the nation. Wollipeds here are primarily used for fleece and food. In the summer, Ningese wollipeds grow to Medium size and their speed increases by 10 feet. Ningese wollipeds born in the harsh winter are Small and have 2 fewer Hit Dice; their Strength and Constitution decreases by 2, and their Dexterity increases by 2. Wolliped Companions Starting Statistics: Size Medium; Speed 50 ft.; AC +1 natural armor, Attack gore (1d6); Ability Scores Str 14, Dex 16, Con 12, Int 2, Wis 11, Cha 4; Special Qualities Low-Light Vision, scent. 7th-Level Adv.: Size Large; AC +3 natural armor; Attack gore (1d8); Ability Scores Str +4, Dex -2, Con +4; Special Abilities spit, trample.",
    organization: "solitary, pair, or herd (3-12)",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 1
      },
      Perception: {
        ranks: 3
      }
    },
    special: {}
  },

  Triaxian: {
    source: "The Frozen Stars",
    creatureType: "humanoid",
    subTypes: [
      "triaxian"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 1,
    hdVal: 8,
    dontUseRacialHD: true,
    cr: "1/3",
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 11,
      dex: 15,
      con: 12,
      int: 10,
      wis: 9,
      cha: 6
    },
    feats: [],
    attacks: [],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "",
    visualDescription: "",
    description: "Triaxians are the dominant race on the planet Triaxus, a world whose erratic orbit causes exceptionally long and disparate seasons. Though eerily similar to humans, elves, and the other mammalian humanoids common on Golarion, Triaxians have developed certain adaptations to their environment that mark them as indisputably alien. Just like human ethnicities, Triaxian populations vary in size, weight, and other distinguishing physical characteristics, based primarily on the geographical regions in which they reside. Most Triaxians, both males and females, are around 6 feet tall but somewhat lean compared to humans, rarely weighing more than 200 pounds. Their ears are elongated, but rather than being pointed like elves or half lings, these appendages are instead notched in a feathered or comblike pattern. The flaps created by these notches constantly move to adjust the ear's shape, operating both consciously and unconsciously to help Triaxians focus on specific sounds, not unlike the maneuverable ears of dogs, cats, and other such animals. Like many creatures on their world, Triaxians have evolved to shift along with their environment, resulting in differences between generations of the same family that would seem bizarre to humanoids from Golarion. In the warm summer years, Triaxians are completely hairless, with skin that ranges from deep red to coffee-colored to charcoal black. This configuration allows them to better survive in the sweltering heat of the planet's tropical summers, with the increased melanin in their dark skin protecting them from the sun's intense rays. These Summerborn Triaxians, as they are known, breed true for many generations-yet as the planet begins its rapid seasonal shift, so do the Triaxians. Newborn Triaxians begin to evince new adaptations to the cooling environment, and by the time winter has come on in full, Triaxians change markedly: their pale bodies are covered in fine, insulating white fur like that of an ermine, while their eyes narrow to elongated slits to protect against snowblindness. These new traits similarly breed true until the seasons begin to change once more, at which point the eyes widen and fur recedes, starting the cycle anew. Just as Triaxians differ physically depending on which season they're born into, so do their cultures and customs change. Winterborn Triaxians are defined by the hardship of a world whose very environment seeks to starve or freeze them. They tend to be stolid, hardworking people, with an ironclad sense of honor stemming from the knowledge that in a Triaxian winter, a broken promise can mean death for a whole clan. Even within large communities, the focus remains on survival for one's family and friends, with individuals willing and ready to share, serve, and die to protect the group. Oaths of friendship are serious affairs; once given they are rarely transgressed, and doing so risks a blood feud. With the exception of those nomadic hunter tribes that migrate in pursuit of herd animals, most settlements are permanent and fortified against the predatory horrors that stalk the blinding blizzards. Summerborn Triaxians, by contrast, are born into a world of plenty. With forests full of fruit and game, and glaciers receding to reveal vast tracts of fertile earth, the attachment to cold stone fortresses and cramped cities weakens, and Triaxians spread out across the landscape. For many, it is a time of nomadism, living in small bands and temporary structures, or else participating in great waves of land-grabs as homesteaders. Though they still have the weight of history to remind them of the hardships of their ancestors-and those yet to come for their descendants- Summerborn Triaxians tend to be an easy-going, generous people, quick to accept outsiders, to break with their clans and families and strike out on their own, and to challenge convention in pursuit of greater goals. They are simultaneously less hardened and more likely to go to war, for with the business of survival taking less energy and new territory constantly being settled, leaders have more time and resources to dispute borders and jockey for power. Historically, Summerborn Triaxians are those most likely to visit other planes or worlds, as the drive to explore their newly thawed planet also leads them to look beyond it. Transitional Triaxians occupy a much smaller portion of the Triaxian adaptation cycle than either the Summerborn or Winterborn-usually no more than a generation each orbital year-and often play an uncomfortable role in their society. To Summerborn Triaxians, a Transitional child is an ill omen-a sign that winter approaches, and that the time of plenty is drawing to a close. The first such individuals to appear are often hidden or slain by their parents, and vilified by those rebellious fools and leaders who believe that Transitional children actively bring on the winter, or who simply don't want to begin the long and arduous process of preparing for future generations' survival. Transitional children born at the tail of winter, on the other hand, are often treasured and held up as hopeful signs of a golden era to come. Yet even these may face persecution by those dynasties that fear change, or whose leaders expect a loss of power once their people are free to spread beyond their reach. In both cases, Transitional Triaxians find themselves in a society where they are visibly different from both their parents and their children, and where their very existence is a weighty portent. Strangely, while Triaxians' mutable nature is perfectly adapted to their planet's erratic orbit, the cycle of physiological changes seems keyed to internal clocks rather than external indicators. Even in situations where these adaptations would be disadvantageous, the small populations of Triaxians who have set up residence on other worlds or planes continue to change in time with their kindred on Triaxus. Beyond their obvious adaptations to their environment, Triaxians are remarkably human. Their basic biology, social structures, cultures, and philosophy-while sometimes surprising to outsiders-all fall well within the bounds of what might be encountered in a humanoid race on Golarion, thus making them one of the least \"alien\" civilizations in Golarion's solar system. Though the statistics above represent a typical initiate training to become a Dragonrider of the Skyfire Mandate, this is by no means the standard for the race-outside of broad strokes, it's as impossible to describe Triaxians' myriad traits and predispositions as it would be to do so for humanity itself. Triaxians are good and evil, warlike and peaceful, magical and mundane, and everything in between. For more information on Triaxians and Triaxus, see Pathfinder Campaign Setting: Distant Worlds and \"Planet of Dragons\" on page 64. Triaxian CHARACTERS (10 RP) Triaxians don't possess racial Hit Dice, gaining their capabilities instead from class levels. All Triaxians have the following racial traits. +2 Constitution, +2 Wisdom, -2 Strength: Triaxians are a hardy and wily race, as befits their constantly changing environment, but their lean forms have trouble maintaining large amounts of muscle mass. Low-Light Vision: In dim light, Triaxians can see twice as far as humans. Keen Senses: Triaxians' unique ear construction grants them a +2 bonus on Perception checks. Bonus Feat: Triaxians select one extra feat at 1st level. Seasoned: See above. Languages: Triaxians speak Triaxian (the common trade language of Triaxus). Triaxians with high Intelligence scores can choose any languages they want (except secret languages, such as Druidic).",
    organization: "",
    languages: "Common",
    spellLikeAbilities: [],
    skills: {},
    special: {}
  },

};
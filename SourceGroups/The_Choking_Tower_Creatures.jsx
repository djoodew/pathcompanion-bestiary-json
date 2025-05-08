
export const The_Choking_TowerCreatures = {
  "Irradiated Dead": {
    source: "The Choking Tower",
    creatureType: "undead",
    subTypes: [],
    alignments: [
      "Neutral Evil"
    ],
    size: "Medium",
    hd: 10,
    hdVal: 8,
    cr: 7,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 20,
      dex: 16,
      con: "-",
      int: 7,
      wis: 15,
      cha: 17
    },
    feats: [
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Dodge",
        type: "Combat"
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
        name: "Toughness",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Slam",
        name: "2 Slams",
        specialAbility: "radiation",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 5
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Numeria)",
    visualDescription: "This humanoid creature's pale orange, withered skin peels from its flesh in patches. Its yellow eyes stare, unblinking but seething with rage.",
    description: "Little more than orange-tinted, blistered flesh drawn across skeletons, the irradiated dead were once humanoids- mainly Kellid warriors-who have been tainted by the radiation that's strewn across Numeria. Created as a result of experiments by members of the Technic League, a handful of irradiated dead escaped their restraints and set off across Numeria, creating more of their kind with each kill. With the strange chemicals and radiation coursing through their bodies and augmenting survival and hunting instincts, they scour the Numerian wastes in search of prey. Irradiated dead generally appear the same size as the humanoids they once were, but they weigh less due to their bodies have been ravaged by radiation. Ecology The secretive cabal known as the Technic League has always looked for ways to bolster its military power beyond the use of the gearsmen. Over the past couple centuries, the League's members have made numerous foul discoveries by studying the strange relics, technologies, and chemicals collected from the ruins of Divinity. Originally conceived by a Technic League lieutenant as more reliable and easily replaceable minions than the gearsmen, the irradiated dead were the result of a series of experiments conducted in the shadow of the Silver Mount. The lieutenant was skilled in the use of necromancy magic, a study not normally mastered by Technic League members. She gathered a group of the strongest young warriors in Starfall-all of whom sought to make names for themselves in the service of the Black Sovereign-and subjected them to round after round of brutal endurance tests, injections of chemicals and drugs, savage bloodletting, and forced starvation until their bodies couldn't take any more. The lieutenant administered to the warriors a number of chemical compounds recovered from a medical bay within Silver Mount that were originally intended to aid the crew of the Divinity in surviving in strange and hostile environments. Lacking full understanding of what they were working with, the lieutenant and her apprentices mixed and distilled these strange chemicals into a viscous, orange fluid that augmented physical strength and coordination while also thickening the outer layers of skin to a rocklike hardness. She believed that replacing the subjects' blood with the orange liquid, along with controlled exposure to a smashed piece of wreckage leaking radiation, would yield the obedient soldiers she desired. When the first two test subjects completed the regimen, they awoke with a savage hunger for the flesh of their kind and rose up to fight her. The lieutenant escaped that first trial with only the loss of her right eye and her right hand just above the wrist. Her two apprentices were not so lucky. Subsequent refinements and tests yielded no better results. Though these latest test subjects retained their free will, their hunger for raw flesh was just as potent as the earlier attempts. And as they're generally more powerful than their Technic League creators, the irradiated dead saw no reason to serve their creators in any way. Not long after these experiments, several irradiated dead were turned loose or escaped. Rumors persist within the Technic League of study specimens that were kept in secret, and some foolish young sub-commanders are looking to restart the project. Burning inside with necrotic radiation, the irradiated dead display enhanced strength and coordination. Their skin and pupils are tinted pale orange like the fluids that replaced their blood. Their fingers transform into savage claws as sharp as ragged metal. Unexpectedly, the creatures show a remarkable resistance to the effects of positive energy that are deadly to most other forms of undead. They are also carriers of the radiation treatment that fueled their transition to undeath, able to pass the aff liction to other living creatures. Irradiated dead are carnivorous, greatly preferring fresh meat, but they aren't above eating carrion. Cunning, patient and careful hunters, irradiated dead can prey on a nomad tribe over months, ambushing small bands of warriors and feeding upon them one by one. Habitat & Society Most irradiated dead are natives of the broken Numerian wastes, and they continue haunting these regions in their new forms just as they inhabited the wastes in life. They generally search for new hunting grounds in solitude, but those that manage to create their own spawn travel in packs with those they have transformed. Whether roaming across the plains, hills, and valleys, or even wading through muck and waterways, they spend much of their time lurking in shadowy places on the outskirts of villages or tribal encampments. They do not generally keep personal possessions or treasure from their meals, but may use such things to lure and entrap subsequent search parties. Though they're intelligent, the irradiated dead rarely show any inclination toward forming social groups or hierarchies, preferring to kill and eat creatures that enter their territories, though they will deal with other intelligent creatures if they must. If they encounter more powerful beings in their hunting grounds, irradiated dead will work to trick or trap them. The irradiated dead simply move on to new territories if they are unable to eliminate the threat. An unconfirmed report by a Technic League spy in Sunder Horn, however, claimed that at least three fast-moving, orange-skinned creatures had been hunting on the outskirts of town for nearly a year. The creatures have seemingly disappeared without any further sightings in the last 18 months. Even the Technic League is aware of the dangers these creatures could pose to the populace. The methods used to create the irradiated dead are well-guarded secrets of the Technic League. These techniques are also impossible to implement outside of Numeria, because the necrotic radiation and alien chemicals instrumental to their creation can be found nowhere else on Golarion.",
    organization: "solitary, pair, or gang (3-6)",
    languages: "Common",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 1
      },
      Perception: {
        ranks: 10
      },
      Stealth: {
        ranks: 8
      },
      Swim: {
        ranks: 1
      }
    },
    special: {
      "create spawn": {
        type: "Su",
        text: "Any humanoid creature that is slain by an irradiated dead's radiation becomes an irradiated dead itself in 1d4 rounds. Spawn so created are less powerful than typical irradiated dead, taking a -2 penalty on all d20 rolls and having 2 fewer hit points per Hit Die. Spawn are under the command of the irradiated dead that created them and remain enslaved until its destruction, at which point they lose their spawn penalties to d20 rolls and become full-fledged and free-willed irradiated dead. They don't possess any of the abilities they had in life."
      },
      radioactive: {
        type: "Ex",
        text: "Any creature that comes in contact with an irradiated dead risks infection from the radiation that consumes the creatures. Any creature hit by an irradiated dead's slam attack or radioactive spew risks infection, as does any creature who touches an irradiated dead. On a failed saving throw, the target is affected by medium radiation and radiates low radiation in a 10-foot radius for as long as it remains afflicted. For more information on radiation, see page 55 of Pathfinder Campaign Setting: Technology Guide. This is a poison effect, and the save DC is Charisma-based."
      },
      "radioactive spew": {
        type: "Ex",
        text: "Three times per day as a standard action, an irradiated dead can spew a 15-foot cone of irradiated viscera from its mouth. Creatures in the area take 2d6 points of acid damage and are subjected to the creature's radiation. A successful DC 18 Reflex save halves the damage. Creatures that takes damage from this effect are subject to the irradiated dead's radioactive special ability. The save DC is Charisma-based."
      },
      "channel resistance": {
        universalMonsterAbility: "Channel Resistance",
        bonus: 2
      },
      radiation: {
        type: "Ex"
      }
    }
  },

  "Thought Harvester Robot": {
    source: "The Choking Tower",
    creatureType: "construct",
    subTypes: [
      "robot"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 13,
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
      str: 22,
      dex: 15,
      con: "-",
      int: 12,
      wis: 15,
      cha: 1
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Dodge",
        type: "Combat"
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
        name: "Mobility",
        type: "Combat"
      },
      {
        name: "Point-Blank Shot",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Claw",
        name: "Claw",
        specialAbility: "grab",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Integrated nanite injector",
        name: "2 Integrated nanite injectors",
        specialAbility: "harvest thoughts",
        damage: "1d4"
      },
      {
        weapon: "Integrated sonic rifle",
        qualities: [
          "ranged touch"
        ],
        name: "Integrated sonic rifle",
        specialAbility: "Integrated sonic rifle",
        damage: "3d6"
      }
    ],
    immunities: [
      "construct traits"
    ],
    defense: {
      naturalArmor: 10
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Numeria)",
    visualDescription: "Rows of crystal spheres line the back of this four-legged robot. A single glowing eye sits in the middle of its head.",
    description: "Thought harvesters are specialized robots designed to forcibly extract memories from a living creature or corpse. Built to survive battlefields and other hazardous environments, thought harvesters are outfitted with thick armor plating and a durable force field. Giving the thought harvester robot its name, two prehensile tendrils extend from the creature's sides, each tipped with a wickedly barbed syringe through which the creature injects sophisticated nanites into its target. These nanites immediately duplicate portions of the target's brain and return through the syringe into the thought harvester's central core. There, the target's memories are swiftly categorized and stored in one of an array of crystalline spheres located along the robot's spine. When performed on a living target, the process is painful and can cause severe damage to the subject's cognitive reasoning capabilities. A thought harvester's head has a single glowing eye in the center, and two weapons hang beneath it. These weapons allow the thought harvester to fire bursts of sonic energy at any targets that react in an aggressive manner. A thought harvester rarely speaks, but when it does it speaks in short, monosyllabic words, and is always direct and to the point. Thought harvesters are 6 feet long and 4 feet tall. They are densely built, and weigh 1,600 lbs. A thought harvester draws energy from an eff icient internal power source and continually recycles and repairs its internal store of specialized nanites. Ecology A thought harvester is a militarized application of specialized thought-recovery technology. Nanites able to affect a target's thoughts or memories are used in weapons such as the id rif le or mindrender, but the nanites used in those devices become inert after performing their function. When they're instead directly injected and immediately recovered, the nanites duplicate a creature's thoughts and store them for review. The thought harvester's nimble frame and armored shell ensure effective frontline deployment of this technology. Dozens of egg-sized crystalline spheres line the creature's spine, each solidly nestled within a socket in the creature's armored back. These spheres are normally clear, but when the robot recovers a creature's thoughts, a sphere fills with a cloudy, gray haze. A thought harvester might fill all of its crystal spheres after a dozen missions. Regular maintenance includes transferring harvested thoughts into specialized computers, but the technology to do so is lost on Golarion. Instead, the stolen thoughts within the spheres simply dissipate when a sphere is destroyed or incorrectly removed. Habitat & Society Thought harvesters are deployed in a variety of military situations in which specific intelligence must be recovered or eliminated, but bodily recovery of the target is unnecessary or unwise. A thought harvester can grab and carry a human in its claw, but these robots are rarely used to capture living humanoids. A thought harvester might be assigned to invade an enemy stronghold to remove key orders from an opposing commander, or invade a prison to copy sensitive information from the mind of a spy captured by the enemy. Thought harvester robots are often used to recover critical intelligence from soldiers killed in the middle of a raging battle or that fell in irradiated environments. Thought harvesters are deployed only when overt force is acceptable, as they're neither stealthy nor subtle. These robots show little individual personality as they go about their work of harvesting memories. Unlike other robots, which are generally content to stand perfectly motionless when not in use, thought harvesters tend to fidget, scanning for danger and waving their syringe-tipped tendrils in the air. A thought harvester cannot itself access any of the thoughts stored within the crystalline spheres, though it does retain some general idea of the memories it has previously collected. To the thought harvester, these memories are simply cargo to be recovered and brought back to its superiors.",
    organization: "solitary or squad (2-6)",
    languages: "Androffan, Common",
    spellLikeAbilities: [],
    skills: {
      "Knowledge (local)": {
        ranks: 9
      },
      Perception: {
        ranks: 13
      },
      "Sense Motive": {
        ranks: 13
      },
      Stealth: {
        ranks: 4
      }
    },
    special: {
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "1d6+9"
      },
      "harvest thoughts": {
        type: "Ex",
        text: "A thought harvester that hits a living creature with one of its integrated nanite injectors can selectively duplicate certain memories the target possesses. Each time the harvester uses this ability, it can copy one significant event (such as the events of a combat or a birthday party), or it can sift through the victim's memories as part of an interrogation that allows it to effectively ask and receive truthful answers to six questions. A successful DC 17 Will save negates the effects of this ability; mindless creatures or creatures with an Intelligence score of 1 are immune to it. Each time a creature's memories are copied through the use of this ability, it must succeed at a DC 17 Fortitude save or take 1d4 points of Intelligence drain. A creature's Intelligence score can't be drained below 1 in this way. If successful, the target's copied memories appear as swirling mist within one of the crystal spheres socketed into the thought harvester's back. If the thought harvester is willing, helpless, or destroyed, a sphere can be removed from its socket with a successful DC 30 Disable Device check and be read by certain devices without damaging the memories within. This ability can be used on creatures that have been dead for less than 24 hours, but their brain must be mostly intact and only 1d4 memories can be harvested postmortem. The duration can be extended if the creature's brain has been preserved (such as by gentle repose) or if the creature possesses a brain that doesn't rot. The save DCs are Intelligence-based."
      },
      "integrated nanite injectors": {
        type: "Ex",
        text: "A thought harvester is outfitted with two nanite injectors. These modified syringes are mounted on the end of animated, flexible tubes that feed into the robot's crystal spheres and allow it to use its harvest thoughts ability. These injectors are treated as a piercing weapons that deal 1d4 points of damage, but can't be salvaged to be used on their own."
      },
      "integrated sonic rifle": {
        type: "Ex",
        text: "A thought harvester has an built-in sonic rifle slung beneath its head. This weapon has a range of 150 feet and deals 3d6 points of sonic damage. The weapon can fire once per round and does so in a burst of shots that attacks all creatures in a line. This line starts from any corner of the robot's space and extends to the limit of the weapon's range or until it strikes a barrier it can't penetrate. The robot must make a separate attack roll against each creature in the line, and each creature in the line can be attacked with only one shot from each burst. Each attack roll takes a -2 penalty, and its damage can't be modified by precision damage or damage-increasing feats such as Vital Strike. Effects that grant concealment (such as fog or smoke) or the spells blur, invisibility, or mirror image don't affect this weapon's attack. Roll to confirm each attack roll that threatens a critical hit separately."
      },
      hardness: {
        universalMonsterAbility: "Hardness",
        value: 10
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    },
    resistances: [
      {
        damageType: "acid",
        value: 10
      },
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

  "Warden Robot": {
    source: "The Choking Tower",
    creatureType: "construct",
    subTypes: [
      "robot"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 15,
    hdVal: 10,
    cr: 9,
    racialFeatures: [
      "All-Around Vision",
      "Blindsight 30 ft.",
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 18,
      dex: 19,
      con: "-",
      int: 11,
      wis: 14,
      cha: 1
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Nimble Moves",
        type: "General"
      },
      {
        name: "Point-Blank Shot",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Precise Shot",
        type: "Combat"
      },
      {
        name: "Stand Still",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Slam",
        name: "2 Slams",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Integrated sonic disruptor",
        qualities: [
          "ranged touch"
        ],
        name: "2 Integrated sonic disruptors",
        specialAbility: "Integrated sonic disruptor",
        damage: "2d8"
      }
    ],
    immunities: [
      "construct traits"
    ],
    defense: {
      naturalArmor: 10
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any (Numeria)",
    visualDescription: "Crafted of a strange, dull metal, this bulky construct stomps forward on stout, multi-jointed legs.",
    description: "Wardens are dangerous guardian robots often found protecting sealed vaults or patrolling ancient, buried corridors. They carry out their orders with ruthlessness and zeal, usually offering no warning before attacking a perceived threat. The Technic League has had moderate success in controlling a few of these robots, and occasionally assigns them as guards for valuable treasures or important prisoners, roles for which they're well suited. Although the mere sight of these massive machines is imposing enough to ward off most intruders, those who are undeterred by a warden's appearance soon find the robot to be quite capable of destroying those who enter its territory without proper clearance. Unlike golems or similarly mindless constructs, wardens possess an intelligence that allows them to employ tactics, either on their own or as part of a unit. When acting in groups, the robots are smart enough to suppress and reactivate their nausea-inducing sound waves in concert, maximizing the length of time their opponents are incapacitated. Most wardens are in Silver Mount, but some can be found in many other parts of Numeria. Nearly all share the same characteristics: a squat upper body with a domed shape and two arms ending in six surprisingly dexterous \"fingers\" surrounding emitters that serve as its primary ranged weapons. Two stout, multi-jointed legs provide the construct with great mobility, even on hilly or rough terrain. Ecology Wardens were obviously designed and programmed to guard objects, people, or locations. Although they have no life cycle to speak of, these robots do seem to possess certain behavioral characteristics that make them fascinating to Numerian scholars. The warden's reactive armor is a matter of particular interest to the Technic League. Although the robots are still vulnerable to critical hits, their armor reduces the risk posed by this weakness. A few of the League's most talented members have devoted themselves to determining how the reactive armor works and how to replicate it. The secret appears to be in the material that comprises the robot's exoskeleton-which behaves like metal in all respects until struck by a powerful force, when it responds with a violent, fiery explosion. Amazingly, the explosive material restores itself over time, as long as the robot continues to function. Habitat & Society Wardens, like many robots found in Numeria, follow strict internal programming that guides their actions. Their special programming, however, is somewhat more flexible than that of other robots. Wardens learn and adapt, especially when it comes to facing specialized types of foes. As constructs built by ancient masters whose goals and intentions are almost unknowable, wardens have no society in the traditional sense of the word. They exist only to follow their programming to the best of their ability. Still, their ability to adapt and work together in small groups makes them formidable opponents for those who would seek treasures in the ancient caches scattered throughout Numeria. Although capable of speech, wardens communicate with each other by some other means. They coordinate efforts silently, and skillfully arrange patrols to maximize coverage of their assigned areas. As long as a warden is guarding something (whether by itself or as part of a group of wardens), it nearly always follows the orders of the creature that owns the object or location. Wardens demonstrate a clear understanding of their duties, and can apply their alien intelligence toward problem solving when the situation requires it. This makes them effective jailers as well, since they can use their incapacitating sound field against prisoners who attempt to escape-as well as on those who might try to break the prisoners out. Wardensof Note Wardens appear to have been an apex design, for the same model has been found guarding many of the chambers in Silver Mount, as well as other scattered remnants of the massive vessel that fell from the sky so long ago. However, a few have been known to display different characteristics. Some of these alterations are intentional modifications made by people with great knowledge and skill. Other models may have even stranger origins. Red Terror (N warden robot ranger 7): The robot known as Red Terror guards a section of tunnels within the Red Redoubt of Karamoss. Red Terror appears to have been crafted using an alloy of djezet and steel (known as djezeteel). It's unclear whether the mad wizard Karamoss created the specialized warden robot using deciphered schematics or merely modified an existing construct. Either way, Red Terror is a skilled and ruthless hunter that relentlessly pursues intruders in its domain. Those adventurers who have encountered Red Terror claim that the robot actually seems to take pleasure in the gruesome deaths of its prey. The robot also seems to have some way to empower spellcasters it allies with and enhance the power of their spells. Silent Sentinel (CR 9): Explorers investigating ruins in the Felldales of western Numeria have reported encountering a unique version of the warden robot that can generate fields that cancel sound rather than induce nausea, earning it the name \"Silent Sentinel.\" This aura has the effect of a silence spell with a 30-foot radius centered on the warden, but the effect can't be dispelled or countered by magic. Instead of sonic disruptors, Silent Sentinel is equipped with integrated lasers that deal 2d8 points of fire damage. Based on recent reports from near the First Blade's Path, this specialized warden doesn't keep to just the Felldales.",
    organization: "solitary, pair, or sentry (3-12)",
    languages: "Androffan",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 6
      },
      Perception: {
        ranks: 14
      },
      "Sense Motive": {
        ranks: 10
      }
    },
    special: {
      "combined arms": {
        type: "Ex",
        text: "As part of a full-attack action, a warden robot can attack with both melee and ranged integrated weapons."
      },
      dazzler: {
        type: "Ex",
        text: "As a standard action, a warden robot can target a single creature with a beam of strobing light that functions as a gaze attack with a range of 60 feet. A creature subject to this attack must succeed at a DC 17 Fortitude save or be blinded for 2d4 rounds. Creatures that successfully save are dazzled for 1d4 rounds. Creatures with light blindness or light sensitivity take a -4 penalty on the saving throw. This is a light effect, and the save DC is Intelligence-based. Infrasonic Field (Ex) Warden robots constantly emit powerful sound waves at a frequency below normal hearing. These vibrations can debilitate living beings within 30 feet. Such creatures must succeed at DC 17 Fortitude save or fall prone and be nauseated for 1d4 rounds. A warden robot can suppress or resume this ability as a free action. This is a sonic effect, and the save DC is Intelligence-based."
      },
      "integrated sonic disruptor": {
        type: "Ex",
        text: "A warden robot's arms contain built-in ranged weapons that emit focused sound waves in 100-foot rays that deal 2d8 points of sonic damage."
      },
      hardness: {
        universalMonsterAbility: "Hardness",
        value: 10
      },
      "reactive armor": {
        type: "Ex",
        text: "A warden robot is covered in a special shell that reacts explosively to powerful strikes. Due to this covering, a warden robot gains light fortification (25% chance to negate critical hits and sneak attacks). When the armor negates a critical hit from a melee weapon, the attacker takes an amount of fire damage equal to half of the damage dealt to the robot. Attackers using reach or ranged weapons avoid this damage."
      },
      resilient: {
        type: "Ex",
        text: "Warden robots receive a +3 racial bonus on all saving throws."
      },
      "infrasonic field": {
        type: "Ex",
        text: "Warden robots constantly emit powerful sound waves at a frequency below normal hearing. These vibrations can debilitate living beings within 30 feet. Such creatures must succeed at DC 17 Fortitude save or fall prone and be nauseated for 1d4 rounds. A warden robot can suppress or resume this ability as a free action. This is a sonic effect, and the save DC is Intelligence-based.",
        preText: "30 ft., DC 17"
      }
    }
  },

  Thorgothrel: {
    source: "The Choking Tower",
    creatureType: "ooze",
    subTypes: [],
    alignments: [
      "Lawful Evil"
    ],
    size: "Large",
    hd: 8,
    hdVal: 8,
    cr: 8,
    racialFeatures: [
      "Blindsight 100 ft."
    ],
    speed: {
      base: 20
    },
    abilities: {
      str: 22,
      dex: 10,
      con: 17,
      int: 17,
      wis: 16,
      cha: 11
    },
    feats: [
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
        name: "Lightning Reflexes",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Slam",
        name: "2 Slams",
        specialAbility: "bleed",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Force ray",
        qualities: [
          "ranged touch"
        ],
        name: "Force ray",
        specialAbility: "Force ray",
        damage: "10d6"
      }
    ],
    immunities: [
      "Immune to cold, electricity"
    ],
    defense: {
      naturalArmor: 12
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any",
    visualDescription: "A skeleton of silver rods gives this blob of protoplasm a roughly defined shape with an approximation of three arms and legs. Its outer skin shimmers with a rainbow of colors.",
    description: "Thorgothrels are a spacefaring race of aggressive genetic manipulators. In their natural form, thorgothrels are blobs of protoplasm 12 feet in diameter that move with awkward undulation. Thorgothrels can extrude pseudopods in order to manipulate objects and form simple tools. These pseudopods excrete a complex cocktail of chemicals that can force changes to a victim's underlying genetic structure. Weighed down by Golarion's gravity and quick to sublimate into poisonous vapor in the atmosphere, thorgothrels find Golarion (and similar planets) inherently inimical. A thorgothrel can move about on Golarion only by wrapping its body around a frame of silver rods that provides inner support and encases the creature in a resilient force field barrier. Despite the hazard Golarion's atmosphere poses to these alien creatures, the planet's staggering diversity of life presents a veritable cornucopia of beings upon which they can perform their genetic experimentations, inching closer to their goal of returning all creatures to a primeval, atavistic state. The silver armature largely determines the exact size of a thorgothrel, but a typical thorgothrel stands around 11 feet tall and weighs about 900 lbs. Ecology Hailing from a distant planet with a radically different environment, thorgothrels don't fit into Golarion's ecosystem. The environment on Golarion is deadly to this spacefaring race, as the planet's comparatively low air pressure causes them to vaporize when exposed to it. Thorgothrels on Golarion combat this by remaining continually sheathed in a protective force field to avoid fatal dematerialization. Even in the best of conditions, a thorgothrel moves slowly. On Golarion, it must wrap its protoplasmic form around an artificial skeleton in order to move at a speed greater than a crawl. Thorgothrel mathematics are based on a ternary system, which is ref lected in their armatures usually having three legs and three arms radially placed around a central spine. Thorgothrels feed on electrical currents and certain metals. The armatures thorgothrels create in order to provide mobility are made of electromagnetically charged and refined silver, and thus contain all of the nutrients the creatures need to survive for several months. Without an armature, a thorgothrel requires an ounce of silver per week to survive. Thorgothrels don't require true sleep, and the torpor they enter in the long years of travel between planets in their strange ships provides them with sufficient rest to remain active for months at a time. Thorgothrels communicate telepathically, and consider verbal communication to be the sort of anathema that drives their work toward retrogressive development. Habitat & Society The thorgothrel race were once humanoids. The greatest of their scientists and philosophers concluded that evolutionary advancement was a danger to the universe as a whole, and that life in its most primitive state was safest for all creatures. The thorgothrels began a great spacefaring crusade to subjugate other planets and force regressive evolution on the planets' denizens via genetic manipulation. Thorgothrels take pride in devolving entire planets into primitive life forms, and slaughter those races that put up too much of a struggle against their \"great work.\" As the thorgothrels \"improved\" world after world, they also manipulated their own genes. While maintaining their intelligence and skill at genetic manipulation, the race regressed its form to that of sentient blobs of protoplasm. Thorgothrels buttress the weaknesses of these new bodies, such as low mobility, with technological solutions. Although silver armatures and defensive force fields are the most common artifacts of thorgothrel science, rumors from other worlds tell of thorgothrels that occupy gargantuan walking machines or psychic field projectors powerful enough to render entire cities docile. Their great crusade has caused the once numerous thorgothrel race to dwindle, but the race's fervor to enforce regression still continues on many far-f lung planets. A few decades ago, thorgothrel explorers discovered Golarion and were staggered by the abundance of advanced life found on this world. However, Golarion's unfavorable environment and great distance from the thorgothrels' homeworld has so far stymied a full-scale assault. To date, only a few daring adventurer-geneticists have come to Golarion. To avoid attracting wide public attention, these thorgothrels pursue their regression experiments in isolated locations, such as lonely wastelands, border outposts, or hidden valleys. Thorgothrels carefully dissect failed experiments in order to hone their craft, but usually set successfully regressed victims free. Rumors of remote areas where animals or people have suddenly \"gone wild\" or \"turned feral\" may indicate a thorgothrel's presence. Thorgothrels are arrogant and prone to overconfidence. Most thorgothrels encountered on Golarion have visited dozens of other worlds, and they consider even the most advanced of Golarion's creatures to be evolutionary mistakes that must be corrected or exterminated. This gives thorgothrels little reason to communicate with other races, which in turn feeds into their intellectual and philosophical mandate to act however they see fit.",
    organization: "solitary",
    languages: "Aklo, Common, Infernal; telepathy 100 ft.",
    spellLikeAbilities: [],
    skills: {
      "Disable Device": {
        ranks: 8
      },
      Heal: {
        ranks: 3,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      "Knowledge (arcana)": {
        ranks: 7
      },
      "Knowledge (engineering)": {
        ranks: 7
      },
      "Knowledge (nature)": {
        ranks: 7
      },
      Perception: {
        ranks: 8
      }
    },
    special: {
      "atavistic manipulation": {
        type: "Su",
        text: "A thorgothrel can alter a target's genetic structure to induce rapid evolutionary regression by dealing Intelligence bleed damage with its slam attacks. As the target mentally regresses, it also becomes more feral and violent. A target that has taken at least 4 points of Intelligence damage from a thorgothrel gains a +2 enhancement bonus to Strength. If a thorgothrel spends an hour experimenting on a target rendered unconscious due to Intelligence damage, it can make this regression permanent. Thereafter, the target's Intelligence score is reduced to 1. This regression can be reversed only with heal, limited wish, miracle, or wish. At the GM's discretion, the target might change in additional ways to reflect its atavistic regression. Force Field (Ex) A thorgothrel with a silver armature is sheathed in a thin layer of shimmering energy that grants 40 bonus hit points. All damage dealt to a thorgothrel with an active force field is reduced from these hit points first. As long as the force field is active, the thorgothrel is immune to critical hits. A thorgothrel's force field has fast healing 10, but once its hit points are reduced to 0, the force field shuts down and can only be reactivated if the thorgothrel spends a full-round action and succeeds at a DC 15 Disable Device check. If successful, the force field reactivates with 1 hit point."
      },
      bleed: {
        universalMonsterAbility: "Bleed",
        damage: "1 Int damage"
      },
      "force ray": {
        type: "Ex",
        text: "As a standard action, a thorgothrel can lose 5 hit points from its force field (if it has that many or more remaining) in order to fire a ray of force at any target within 100 feet. The ray is a ranged touch attack that deals 10d6 points of force damage."
      },
      "no breath": {
        universalMonsterAbility: "No Breath",
        text: ""
      },
      "poisonous sublimation": {
        type: "Ex",
        text: "When a thorgothrel without an active force field is in a region with breathable atmosphere, it beings to evaporate into a poisonous mist. The thorgothrel takes 1d4 points of Constitution damage each round at the beginning of its turn, and the mist expands to fill a 20-foot radius. Any living creature in the mist with 6 or fewer HD must succeed at a DC 17 Fortitude save or be slain. A creature with more than 6 HD takes 1d4 points of Constitution damage each round while in the mist (Fortitude half). A moderate wind disperses the mist in 4 rounds; a strong wind disperses the mist in 1 round. This is a poison effect, and the save DC is Constitution-based."
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
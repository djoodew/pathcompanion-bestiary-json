
export const Lords_Of_RustCreatures = {
  "Latten Mechanism": {
    source: "Lords Of Rust",
    creatureType: "construct",
    subTypes: [
      "extraplanar",
      "herald"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 18,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 40,
      burrow: 20,
      climb: 20
    },
    abilities: {
      str: 29,
      dex: 19,
      con: "-",
      int: 21,
      wis: 18,
      cha: 16
    },
    feats: [
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Combat Expertise",
        type: "Combat"
      },
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Great Fortitude",
        type: "General"
      },
      {
        name: "Gunsmithing",
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
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Stand Still",
        type: "Combat"
      },
      {
        name: "Toughness",
        type: "General"
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
        bonuses: [
          {
            source: "inherent",
            value: "6d8",
            appliesTo: "damageType",
            damageType: "acid|electricity"
          }
        ],
        type: "primary"
      }
    ],
    immunities: [
      "construct traits",
      "Immune to acid"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "adamantine and magic"
      },
      SR: {
        value: 26
      },
      naturalArmor: 18
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any (Axis)",
    visualDescription: "This clockwork termite is the size of a rhinoceros and has an oversized head with a humanoid face on it. Multiple apertures along its body sprout tool-wielding limbs, and a human-sized hatch on its abdomen chitters and clicks like a menacing maw.",
    description: "Latten Mechanism is a defender of constructs and crafters, a living siege engine who prefers the solitude of research and invention to the distractions of battle. Given a massive insectile form to allow it to perform all of its necessary functions, Latten Mechanism's only humanlike feature is the androgynous face built into the top of its insectile head. Able to tear open castle gates, create iron walls, scoop up enemies and crush them in its body, reshape the very earth it stands on, and form complex objects out of raw materials or thin air, Latten Mechanism is a versatile engine of creation and destruction guided by a mechanical conscience that values constructs as much as it does intelligent living creatures. The herald sees itself as a protective parent of all constructs, especially intelligent ones, and never uses its powers to destroy artificial beings unless it has no other choice; it prefers to neutralize or sideline these opponents until it has the opportunity to reprogram or repurpose them. Much as a true champion of freedom loathes charm spells for temporarily enslaving a person's free will, Latten Mechanism believes spells such as control construct are a violation of a sentient construct's free will, and only uses them as a last resort to peacefully end a threat. When confronted by a dangerous construct in an enemy's service, Latten Mechanism has been known to render the construct helpless and flee with it, returning to deal with the construct's master at a later time. The herald is a legend among intelligent constructs, and many come to Brigh's faith after witnessing or experiencing its generosity and leniency. The herald doesn't speak in battle, as it prefers to fool its opponents into mistaking it for a mindless clockwork foe. Outside of combat, it's curious about its allies' inventions and crafting projects, and it can provide many insights into how the ally might overcome various obstacles to achieve greater successes (although it sometimes needs a few minutes to update its mind with knowledge suitable for the conversation). It can speak equally well out of its termite or humanoid mouth, and sometimes uses both in the same conversation, adding deep emphasis to certain words with its inhuman vocal apparatus. Both voices have a metallic, echoing twang. The herald's proper name is Latten Mechanism, although it answers to either part of its name individually, or even if its name is used as a title (\"the Latten Mechanism\"). Its programming allows it to recognize flattery, insults, and threats, although it doesn't really understand the motivations for such things. The easiest way to anger it is to treat it like an unfeeling, unthinking machine or suggest that it could be parceled into useful parts (in the same way that a dragon would object to a casual discussion of how its hide could be made into armor). Ecology Latten Mechanism is a created being that has no need to eat or drink. Though it has a need for occasional maintenance to prevent its delicate mechanical parts from seizing up or breaking down, it's effectively immortal. It has no need to reproduce, but it treats all constructs it builds (even the temporary ones) as beloved pets, and is saddened if they are damaged, destroyed, or otherwise compromised. It feels kinship toward mortals who create constructs, so long as those creators are respectful toward their inventions. The herald has no particular attachment to any mortal race or country, although it has spent more time among humans and the people of Alkenstar than any other kind or place. It holds neither aversion nor affinity to undead creatures-it considers reusing dead body parts to create new entities essentially similar to reusing metal or wood from a destroyed construct to repair or build another. Because it became self-aware only when Brigh built it out of inanimate parts, it has no fear of death-for it, death is the same as the state of non-consciousness it existed in before its activation. If it was destroyed, but Brigh needed its abilities once more, the goddess would recreate and reawaken it; from the herald's perspective, this wouldn't even be an interruption of its consciousness. Latten Mechanism has a fondness for small clockwork objects and wind-up toys, such as rolling carts, hopping animals, and music boxes. It collects these treasures much the way noble's child might collect elaborate dolls. A priest who offers such a thing as part of a payment when the herald is called is likely to gain the herald's support, especially if the device features a clever mechanism, such as a dragon toy that utilizes a smokestick to create a miniature breath weapon, or a mechanical spider that utilizes a tanglefoot bag to catch bugs with tiny bursts of sticky webbing. Habitat & Society The herald spends most of its time on Axis mixing with Brigh's other servitors and pursuing its own research projects. It enjoys the company of axiomites and inevitables, respecting their non-biological anatomies and ever curious about their devotion to law. It sometimes directly intervenes in the mortal world by soothing a rampaging construct that might accidentally kill a genius inventor, but otherwise limits its interactions to those commanded by Brigh. Among the servitors of Brigh, Latten Mechanism is admired for its crafting skills and devotion to all artificial creatures. Some servitors who become melancholy and long to become true flesh beings seek counsel from the herald, hoping to gain a better appreciation of their mechanical bodies and the uniqueness of their souls.",
    organization: "solitary or team (herald plus 1d6 clockwork soldiers and 1d6 clockwork servants)",
    languages: "Abyssal, Celestial, Common, Draconic, Infernal",
    spellLikeAbilities: [
      {
        name: "dimension door",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "make whole",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "move earth",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "rapid repair",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "soothe construct",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "control construct",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "fabricate",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "haste",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "lightning bolt",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "major creation",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "slow",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "unbreakable construct",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "wall of iron",
        casterLevel: 18,
        timesPerDay: 3
      }
    ],
    skills: {
      Climb: {
        ranks: 1
      },
      Craft0: {
        subSkill: "any one",
        ranks: 18
      },
      "Disable Device": {
        ranks: 18
      },
      "Knowledge (engineering)": {
        ranks: 18
      },
      "Knowledge (religion)": {
        ranks: 18
      },
      Perception: {
        ranks: 18
      },
      "Sense Motive": {
        ranks: 9
      },
      Spellcraft: {
        ranks: 17
      },
      "Use Magic Device": {
        ranks: 9
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "120-ft. line",
        damage: "usable every 1d4 rounds"
      },
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "6d8 plus 6d8 acid or electricity"
      },
      entrap: {
        universalMonsterAbility: "Entrap",
        hardness: "hardness 8",
        duration: "1d10 rounds",
        saveDC: null,
        hp: "hp 20"
      },
      "lyre of building": {
        type: "Su",
        text: "Latten Mechanism has all of the abilities of a lyre of building (Pathfinder RPG Core Rulebook 522), with the same limitations as that item."
      },
      "always armed": {
        type: "Ex"
      },
      "change size": {
        type: "Su",
        text: "Latten Mechanism can change its size to Huge, Large, or Medium as a standard action, as if using enlarge person or reduce person. This change lasts until it changes size again or is killed."
      },
      "create soldiers": {
        type: "Ex",
        text: "Once per day, Latten Mechanism can create up to four clockwork soldiers (Pathfinder RPG Bestiary 3 57). These soldiers serve it for 1 hour, after which they break down into their component parts."
      },
      "double damage against objects": {
        type: "Ex",
        text: "If Latten Mechanism makes a full attack against an object or structure, it deals double damage."
      },
      emissary: {
        type: "Ex"
      },
      "integrated masterwork tools": {
        type: "Ex",
        text: "Latten Mechanism can extend additional limbs from its body that end in masterwork tools suitable for any Craft skill it has ranks in."
      },
      "master of crafting": {
        type: "Ex",
        text: "Latten Mechanism can spend 10 minutes reconfiguring itself to allocate its 18 ranks in the Craft skill to any specific Craft skills in any combination. For example, it can allocate 9 ranks in Craft (armor) and 9 ranks in Craft (clockwork). All Craft skills are class skills for Latten Mechanism."
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        value: null
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    },
    resistances: [
      {
        damageType: "cold",
        value: 30
      },
      {
        damageType: "fire",
        value: 30
      }
    ]
  },

  "Rhu-Chalik": {
    source: [
      "Lords Of Rust",
      "Bestiary 5"
    ],
    creatureType: "aberration",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Small",
    hd: 8,
    hdVal: 8,
    cr: 6,
    racialFeatures: [
      "All-Around Vision",
      "Darkvision 60 ft.",
      "See in Darkness"
    ],
    speed: {
      base: 5,
      maneuverability: "Perfect",
      fly: 60
    },
    abilities: {
      str: 12,
      dex: 16,
      con: 19,
      int: 13,
      wis: 14,
      cha: 15
    },
    feats: [
      {
        name: "Combat Expertise",
        type: "Combat"
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
        name: "Weapon Finesse",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Tendril",
        name: "4 Tendrils",
        specialAbility: "pain touch",
        damage: "1d4"
      }
    ],
    immunities: [
      "Immune to cold, disease"
    ],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "Thin tendrils trail from this misshapen sphere. A gray orb hangs beneath the creature like a bulging lidless eye.",
    description: "A rhu-chalik, also called a void wanderer, is an alien entity that scouts for a nebulous collection of space conquerors known as the Dominion of the Black. In addition to ambitions for dominating the universe, they also engage in a curious pursuit: collecting the memories of interesting creatures in the universe into a vast repository of knowledge in hopes of unraveling every secret of existence. Though they are theoretically capable of traversing the vastness of space to make it to Golarion on their own, the rhu-chaliks encountered here arrived on the crashed spaceship Divinity. Years before Divinity crashed onto Golarion, the ship's crew discovered rhu-chaliks in a distant galaxy and became intrigued with their unique form. They collected a few specimens and set about observing the enigmatic creatures. Unknown to the scientists, these aliens had allowed their own capture in order to travel to far-f lung galaxies where they could explore the thoughts, dreams, and knowledge of thousands upon thousands of races the universe over. The rhu-chaliks kept their strange abilities secret onboard the ship, content to travel in dormancy until the Divinity encountered the Dominion of the Black, at which point the creatures shredded the minds of their scientist wardens. Later, as the ship crashed on Golarion, the creatures seeped from the vessel and began their exploration of this new world flush with sentient life. A rhu-chalik is approximately 3 feet across and weighs only 30 pounds. Ecology Rhu-chaliks' anatomy is as alien as their motives. The creatures resemble spongy masses of jet-black tissue, with lidless, pupil-less, grayish-white eyes at their center and four thin tendrils extending from their mass. Rhu-chaliks can hover in atmosphere or float in the dead vacuum of space; they don't need to breathe. They're capable of remaining motionless for decades, and some claim that their life spans may outlast even the stars themselves. It's assumed that rhu-chaliks are the least powerful of their strange race and exist merely to transmit the minds of interesting creatures they encounter far into the depths of their masters' domain-a starless void beyond the edge of the universe. Those few who have studied rhu-chaliks and survived with their minds intact theorize that these creatures are carefully sculpted to suit their task, and it's likely that their original form has been drastically altered by millennia of specialized breeding into their current dread incarnation. There is no existing information about how these creatures procreate, and it is assumed that they are artificially crafted by their dark masters. Void wanderers don't feed in the traditional sense, and they lack a mouth or any other orifice that can accept food. Some records retrieved from Divinity suggest that the creatures use their tendrils to absorb nutrients through osmosis, but this is incorrect. Rhu-chaliks maintain their bodily form and sustain their lengthy lifespans by feeding off the thoughts and fears of sentient beings. Every emotion has a different flavor to these creatures, and since their feedings are harmless to the sources of their meals, many rhu-chaliks have been observed to dine continuously from the same mind endlessly, prodding different emotions to elicit a new taste as if they were ordering a new course at a banquet. Habitat & Society Rhu-chaliks are the lesser cogs of a collective of star-spanning overlords far beyond the powers of Golarion. Rhu-chaliks serve as scouts and traveling collectors that wander through civilizations in search of minds that they can twist with fear and agony. Their ultimate goal is to copy the minds of those they encounter and send the consciousnesses beyond the stars to their masters. As observers, rhu-chaliks prefer to maintain stealth for as long as possible. These small creatures can compress their spongy bodies into a fraction of their normal size, and then lodge themselves into tight hiding spots so that they can sift through the thoughts of nearby sentient creatures. If discovered, rhu-chaliks leave their hiding places, but they are quick to return once they're confident that they can reestablish secrecy. Millions of these strange horrors are cast out from their dark domain every moment, hurtling through space until they encounter some alien race or world not yet probed by the dark masters of their native space. From their far-f lung redoubt, rhu-chaliks observe the churning cosmos, gathering every speck of information and every thought ever birthed by the minds of a thousand races of alien species. In the dark space from which they hail, catalogs of entire civilizations hang in a surreal miasma of misplaced minds shrieking out in disembodied agony for all eternity, with their every desire, fear, secret, and scrap of understanding exposed like raw nerves for invasive perusal. The creatures who survive having their consciousnesses copied and transmitted are often unaware of the transmission, and little realize that their most private moments will be pored over endlessly by alien minds. Rhu-chaliks serve their masters tirelessly, and are as patient as they are long-lived. They rarely make an uncalculated move, and seek only the most prized intellects to cast into the dark beyond for their master's delectations. When exploring distant worlds, rhu-chaliks are not social beings, and they avoid other rhu-chaliks in hopes that their predations won't cause too much overlap in the mind collection clouds of their masters. However, back in their native space, rhu-chaliks number in the billions, and the creatures feed off a countless number of disembodied minds.",
    organization: "solitary",
    languages: "Aklo; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "mage armor",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "detect thoughts",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "invisibility",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "share memory",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "modify memory",
        casterLevel: 10,
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 6
      },
      Diplomacy: {
        ranks: 6
      },
      Fly: {
        ranks: 0
      },
      Intimidate: {
        ranks: 5
      },
      Perception: {
        ranks: 5
      },
      "Sense Motive": {
        ranks: 5
      },
      Stealth: {
        ranks: 5
      },
      "Use Magic Device": {
        ranks: 8
      }
    },
    special: {
      "pain touch": {
        type: "Ex",
        text: "A rhu-chalik secretes an enzyme that coats its tendrils. When this enzyme comes into contact with a living creature, it causes excruciating pain. Any creature that comes into contact with the enzyme must succeed at a DC 18 Fortitude save or take a -2 penalty on attack rolls, ability checks, and skill checks for 1d4 rounds. If a creature is affected by multiple pain touch attacks, the duration stacks but the penalty doesn't. Creatures that are immune to pain effects are immune to this ability. The save DC is Charisma-based."
      },
      "project terror": {
        type: "Su",
        text: "As a standard action, a rhu-chalik can harness the fears of any creature it has successfully used detect thoughts on within the last minute. This effect creates visions of that creature's most terrible nightmares in the target's mind; the target must succeed at a DC 16 Will save or be frightened and take 1d4 points of Wisdom damage. The save DC is Charisma-based."
      },
      "void transmission": {
        type: "Su",
        text: "If a creature takes an amount of Wisdom damage from the rhu-chalik's project terror ability that equals or exceeds the creature's Wisdom score, the creature falls unconscious as normal. At that point, the rhu-chalik can take 10 minutes to copy and absorb the creature's entire consciousness and send that consciousness through the void of space to its waiting masters. If the creature's Wisdom damage is healed and the creature is revived prior to the end of this process, this effect fails. If the creature's Wisdom damage is healed after its consciousness is successfully transmitted, the creature awakes disoriented, and takes a -2 penalty on attack rolls, ability checks, and skill checks for 24 hours. This effect otherwise doesn't harm the target, as the target's consciousness isn't eliminated, only duplicated and transmitted."
      },
      compression: {
        universalMonsterAbility: "Compression"
      },
      "no breath": {
        universalMonsterAbility: "No Breath",
        text: ""
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        value: null
      }
    }
  },

  "Observer Robot": {
    source: "Lords Of Rust",
    creatureType: "construct",
    subTypes: [
      "robot"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Tiny",
    hd: 3,
    hdVal: 10,
    cr: 2,
    racialFeatures: [
      "All-Around Vision",
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 20,
      maneuverability: "Perfect",
      fly: 60
    },
    abilities: {
      str: 12,
      dex: 15,
      con: "-",
      int: 10,
      wis: 17,
      cha: 1
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Lightning Reflexes",
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
        weapon: "Torch",
        name: "Torch",
        damage: "1d3"
      },
      {
        weapon: "Integrated stun gun",
        name: "Integrated stun gun",
        specialAbility: "nonlethal",
        damage: "1d8"
      }
    ],
    immunities: [
      "construct traits"
    ],
    defense: {
      naturalArmor: 4
    },
    space: "2 1/2 ft.",
    reach: "0 ft. (5 ft. with integrated laser torch)",
    environment: "any (Numeria)",
    visualDescription: "This small robot is reminiscent of a beetle with a pair of pincers extending from the front of its body.",
    description: "Designed for reconnaissance, observer robots are deployed to serve as the eyes and ears of their controllers. Because they're intelligent and able to make their own decisions, observer robots are suited for exploring without supervision, recording their observations so that they can relay the images and sounds to their creators. The outer hull of an observer robot and its wings are covered in a network of tiny screens that can display images of the robots' surroundings, which grants the observer robot a form of camouf lage that allows it to clandestinely observe its subjects. The statistics above represent the most common observer robots, but some models have enhanced senses that allow them to see in darkness or see invisible creatures. Some even have olfactory sensors that effectively smell their environment and test the surrounding air for impurities that would harm their creators. Observer robots deployed in hostile environments might be outfitted with more formidable weaponry than the standard stun gun and laser torch. An observer robot is approximately 20 inches long and weighs 8 pounds.",
    organization: "solitary or deployment (2-12)",
    languages: "Androffan, Common",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 0
      },
      Perception: {
        ranks: 6,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      "Sense Motive": {
        ranks: 0
      },
      Stealth: {
        ranks: 1
      },
      Survival: {
        ranks: 2
      }
    },
    special: {
      "integrated laser torch": {
        type: "Ex",
        text: "An observer robot is outfitted with an integrated laser torch used to bypass barriers or restraints. When activated, the torch emits a beam of highly focused light, cutting and burning through surfaces up to 6 inches away. Attacks from a laser torch resolve as touch attacks and deal 1d10 points of fire damage. This damage is not modified further by Strength. An observer robot's integrated laser torch is mounted on an extending arm that allows it greater reach. When the laser torch is used as a tool or as a weapon to sunder, its damage bypasses hardness up to 20 points, and damage is not halved (as is normally the case for energy damage applied to objects) unless the object is particularly fire-resistant. A laser torch's cutting beam passes through force fields and force effects without damaging the field. Invisible objects and creatures can't be harmed by a laser torch."
      },
      "integrated stun gun": {
        type: "Ex",
        text: "An observer robot has an integrated stun gun built into its head. This weapon uses a sonic amplifier to produce powerful low-frequency blasts of energy that can pummel targets. This weapon has a range increment of 20 feet, and it deals 1d8 points of nonlethal damage. When it scores a critical hit, the robot can attempt a free trip combat maneuver (CMB +13) against the target, which does not provoke attacks of opportunity."
      },
      camouflage: {
        type: "Ex",
        text: "An observer robot's outer shell contains color-shifting screens that allow the creature to blend into any background. Though not truly invisible, they are hard to pinpoint. While using this ability, an observer robot gains a +8 racial bonus on Stealth checks and has concealment from creatures more than 5 feet away."
      },
      "transmit senses": {
        type: "Ex",
        text: "An observer robot is outfitted with a number of sensors, cameras, and microphones that allow it to record events and transmit them to another location. An observer robot can record up to 12 hours of audio and video. An observer robot's communications can be keyed to a commsetTG or other similar device, and it can broadcast everything it can see or hear to this device as long as it is within 1 mile. The signal strength can be enhanced with a signal boosterTG. An observer robot can also transmit its senses to another observer robot. A signal has difficulty penetrating solid barriers. A signal is blocked by 1 foot of metal, 5 feet of stone, or 20 feet of organic matter. Force fields do not block signals. Broadcasting functions like a scrying sensor, allowing the viewer to hear and see what the observer robot is experiencing. The viewer gains the benefits of any nonmagical special abilities the observer robot has tied to its senses (such as Low-Light Vision), but the viewer uses her own Perception skill. This ability doesn't allow magically or supernaturally enhanced senses to work through it, even if both the observer robot and the viewer possess them."
      },
      hardness: {
        universalMonsterAbility: "Hardness",
        value: 5
      },
      nonlethal: {
        type: "Ex"
      }
    }
  },

  "Observer Robot Swarm": {
    source: "Lords Of Rust",
    creatureType: "construct",
    subTypes: [
      "robot",
      "swarm"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Tiny",
    hd: 18,
    hdVal: 10,
    cr: 10,
    racialFeatures: [
      "All-Around Vision",
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30,
      maneuverability: "Perfect",
      fly: 60
    },
    abilities: {
      str: 12,
      dex: 19,
      con: "-",
      int: 11,
      wis: 18,
      cha: 3
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
        name: "Following Step",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Lightning Reflexes",
        type: "General"
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
        name: "Step Up",
        type: "Combat"
      },
      {
        name: "Toughness",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "swarm",
        name: "swarm",
        specialAbility: "distraction",
        damage: "4d6",
        bonuses: [
          {
            source: "inherent",
            value: "2d6",
            appliesTo: "damageType",
            damageType: "fire"
          }
        ]
      }
    ],
    immunities: [
      "construct traits"
    ],
    defense: {
      naturalArmor: 6
    },
    space: "10 ft.",
    reach: "0 ft.",
    environment: "any (Numeria)",
    visualDescription: "This small robot is reminiscent of a beetle with a pair of pincers extending from the front of its body.",
    description: "Observer robots were sometimes deployed in groups that were dependent on each other. Their instruments were networked to form a web of sensors spread out over a wide area to retrieve superior surveillance for their masters. Years after these networked robots ceased receiving orders, numerous observer robots rewrote their programming and assembled into collectives that numbered up to 1,000 individual observer robots. These swarms emerge from buried wreckage in dangerous metallic clouds that scour, confound, and burn creatures they attack. While swarms are typically chaotic, roiling clouds of creatures, observer robot swarms are highly organized, with hundreds of the tiny robots moving in synchronized patterns as they fly through the air. When observer robot swarms attack, the screens on their outer hulls flicker with disorienting colors that leave their enemies nauseated. They can also organize themselves into a matrix to display composite images across the screens on their collective shells. Treating their individual screens like pixels, observer robot swarms can form moving images of things that they have recorded such as displaying the terror-stricken face of their last victim. These robot swarms even cleverly use this technique to disguise themselves as churning clouds, flickering fires, or even other swarms such as bats or wasps. Since observer robot swarms spend much of their processing power transmitting and sharing senses with other robots in the swarm, they rarely transmit to other devices. Their recordings are shared among the collective, making harvesting recorded data from them extremely difficult.",
    organization: "solitary or cloud (2-5)",
    languages: "Androffan, Common",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 4
      },
      Perception: {
        ranks: 18,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      "Sense Motive": {
        ranks: 4
      },
      Stealth: {
        ranks: 8
      },
      Survival: {
        ranks: 5
      }
    },
    special: {
      camouflage: {
        type: "Ex",
        text: "An observer robot's outer shell contains color-shifting screens that allow the creature to blend into the background. Though not truly invisible, they are hard to pinpoint. While using this ability, an observer robot gains a +8 racial bonus on Stealth checks and has concealment from creatures more than 5 feet away."
      },
      "transmit senses": {
        type: "Ex",
        text: "Though observer robot swarms still maintain the ability to transmit their senses to a receiver like a normal observer robot, these rogue robots rarely do so."
      },
      hardness: {
        universalMonsterAbility: "Hardness",
        value: 10
      }
    }
  },

  "Rust-Risen": {
    source: "Lords Of Rust",
    creatureType: "undead",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 3,
    hdVal: 8,
    cr: 2,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 17,
      dex: 13,
      con: "-",
      int: 5,
      wis: 12,
      cha: 14
    },
    feats: [
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Arm drill",
        name: "Arm drill",
        damage: "1d6"
      },
      {
        weapon: "Metal jaw",
        name: "Metal jaw",
        damage: "1d6"
      }
    ],
    defense: {
      naturalArmor: 4
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "Miscellaneous bits of rusted machinery are fused to the body of this shambling corpse.",
    description: "Rust-risen lurk n the burned-out husks of ancient space-faring vessels and among the grease and blood stained laboratories of mad, technologist necromancers. These hideous undead mockeries riddled with the remnants of ancient technology-rotting creatures, outfitted with twitching relics of a space-faring race, that prey on the living by tearing their victims to shreds with gnashing drills, vivisecting scalpels, and flailing exsanguination tubes. Ecology Necromancers with a twisted affinity for technology often forgo the usual ghoul or zombie minions for a rust-risen ally. Far from mindless, rust-risen possess limited memories of their lives before undeath, though these recollections are more like misshapen shadows flickering on the walls of their minds, and are often distorted and highly inaccurate. Habitat & Society Rust-risen possess the unnatural hunger for the living shared by other undead, but they also maintain a strange obsession with technological artifacts. It's not uncommon when breaching a rust-risen lair to find it filled with baubles, gizmos, and other technological oddities-even schematics which rust-risen cannot make sense of. Rust-risen collect such items, which appear to give them some semblance of comfort in their rotting horror of an existence. Rust-risen also seek sources of electrical power, finding them comforting in the same way a warm bath soothes living flesh. If denied access to an electrical power source, rust-risen become sluggish and despondent, but spring to activity as soon as they are exposed to electricity. Rust-risen are always bonded to their creator, serving them as loyally as an animal companion does its master. They rely on their creator to keep their malfunctioning technology from completely breaking down. Over time however, their bond grows into obsession; eventually it becomes an uncontrollable desire for their master to join them in undeath. Such obsessed rust-risen often overpower their necromancer overlords, who awaken to find themselves on an operating table, their machine-studded monstrosities hovering busily over their extracted viscera. If a rust-risen's creator is destroyed, the undead becomes despondent and lost. It wanders, avoiding civilization and hovering at the fringes of communities, preying on stragglers and wallowing in misanthropic misery. At the same time, it constantly seeks the aid of anyone who can keep it from breaking down. This duality means that the mood of an uncontrolled rust-risen is nigh-impossible to predict. Rust-Risen Augmentations As rust-risen are cobbled together from dead bodies augmented with barely-functioning machinery, no two are exactly alike. Some technologically minded necromancers with enough raw materials and a consistent design plan try to make their rust-risen conform to a template, but most packs of rust-risen are motley and violent amalgamations of flesh and steel. A GM can further modify rust-risen in their games with augmentations of their own creation, but they should be no more powerful than those described below. Additional Appendage: Some rust-risen are augmented with an additional mechanical limb. A rust-risen with this augmentation gains a slam attack that deals damage appropriate for its size (1d4 for most rust-risen). This arm can manipulate objects as well as a normal arm, but cannot be used to wield a weapon. Antifreeze: A rust-risen with this augmentation has an embedded series of tubes connected to a pump that keeps a chemical flowing through its body, preventing ice from forming inside it. The rust-risen gains resistance 5 to cold. Arm Drill: A rust-risen with this augmentation has a deadly, spinning drill grafted onto its forearm. The rust-risen can use the drill to make a melee attack that deals 1d6 points of bludgeoning, piercing, and slashing damage. Cling Hooks: A rust-risen with this augmentation has barbed hooks grafted into its arms and legs. The rust-risen gains a +4 racial bonus on Climb checks and a +4 racial bonus on combat maneuvers to grapple opponents. Cutting Arm: A rust-risen with this augmentation has one of its forearms replaced with a functional laser torch. The rust-risen deals 1d10 points of fire damage as a touch attack. This damage is not modified further by Strength. When the laser torch is used as a tool or as a weapon to sunder, damage dealt by it bypasses hardness up to 20 points and isn't halved (as is normally the case for energy damage applied to objects) unless the object is fire resistant. A laser torch's cutting beam passes through a force field and force effect without damaging that field. Invisible objects and creatures cannot be harmed by a laser torch. Eviscerator: A rust-risen with the eviscerator augmentation has a number of twisting blades, reciprocating saws, and spinning drills built into its chest. The rust-risen deals an additional 1d8 points of damage when grappling. Exsanguination Tubes: A rust-risen with exsanguination tubes can drain blood from creatures it has grappled. If the rust-risen establishes or maintains a pin, it bleeds the target, dealing 1 point of Constitution damage. Metal Jaw: A rust-risen with this augmentation has a metal jaw replacing its natural one. The rust-risen gains a bite attack that deals damage appropriate for its size (1d6 points of damage for most rust-risen). Multi-tool: A rust-risen with this augmentation has at least one of its hands replaced with a variety of tools. The rust-risen gains a +4 competence bonus on Disable Device checks and is considered to be trained in that skill. The rust-risen also gains a +2 competence bonus on one specific Craft skill. Steel Clad: A rust-risen with this augmentation has sheets of metal riveted to is body. The rust-risen gains a +2 natural armor bonus. Tripod: A rust-risen with this augmentation has an additional mechanical leg. The rust-risen gains a +2 bonus to CMD against overrun and trip attempts and a +2 bonus on Acrobatics when moving on narrow surfaces or uneven ground. The rust-risen isn't considered flat-footed nor does it lose its Dexterity bonus to AC when using Acrobatics in this way.",
    organization: "solitary, pair, or pack (3-12)",
    languages: "Common",
    spellLikeAbilities: [],
    skills: {
      Intimidate: {
        ranks: 1
      },
      Perception: {
        ranks: 1,
        bonuses: [
          {
            source: "inherent",
            value: 2
          }
        ]
      },
      Stealth: {
        ranks: 1
      }
    },
    special: {
      augmentations: {
        type: "Ex",
        text: "Rust-risen have various pieces of malfunctioning machinery embedded in their bodies. Each of these augmentations provides the rust-risen with different abilities. A rust-risen has one augmentation plus one additional augmentation for every 3 Hit Dice the creature possesses (typically 2 for most rust-risen). The rust-risen presented here has the arm drill and metal jaw augmentations. See the next page for other augmentations. Malfunction (Ex) The machinery embedded in a rust-risen functions unpredictably in stressful situations. When a rust-risen enters combat, there is a cumulative 1% chance each round that it malfunctions. This chance resets to 0% 1 minute after combat ends. When a rust-risen malfunctions, it takes a -2 penalty on attack rolls, saving throws, skill checks, and ability checks for 1d4 minutes."
      },
      "absorb electricity": {
        type: "Ex",
        text: "When a rust-risen is damaged by electricity, it takes no damage (as if immune). Instead, the rust-risen gains 1 temporary hit point for every 4 points of damage it would have taken. A rust-risen can only have a number of temporary hit points equal to 150% of its hit point total. These temporary hit points disappear 1 hour later. If a rust-risen takes more than double its normal hit point total in electricity damage from a single attack, the creature is destroyed."
      }
    },
    resistances: [
      "malfunction"
    ]
  },

};
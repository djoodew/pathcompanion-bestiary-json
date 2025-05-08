
export const The_Half_Dead_CityCreatures = {
  Ahkhat: {
    source: [
      "The Half-Dead City",
      "Bestiary 5"
    ],
    creatureType: "outsider",
    subTypes: [
      "earth",
      "elemental",
      "native"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Small",
    hd: 4,
    hdVal: 10,
    cr: 4,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Tremorsense 30 ft."
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 17,
      dex: 13,
      con: 16,
      int: 8,
      wis: 12,
      cha: 13
    },
    feats: [
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Throw Anything",
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
        weapon: "Urn",
        name: "Urn",
        damage: "1d4"
      }
    ],
    defense: {
      naturalArmor: 5
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "warm urban",
    visualDescription: "The materials of the building stretch and pull as if made of elastic, taking on the form of an earthen figure with thick stony arms, a roughly hewn torso, and a chiseled, vaguely humanoid head.",
    description: "An ahkhat is an elemental entity that dwells within a single building or structure, such as a monument, temple, or manor. The floors and walls of this structure are the ahkhat's veins and arteries, and the doors and windows of the building are the creature's fingers and toes. An ahkhat exists solely to maintain and protect its attuned structure. Far from a mere house servant or magical butler, an ahkhat is its structure's consciousness incarnate. Ahkhats are bound to their structures via a special keystone that's intrinsically attuned to the ahkhat, and they cannot leave the premises of their own volition. Furthermore, ahkhats cannot move through or manipulate structurally damaged parts of their attuned buildings, so they have a vested interest in maintaining the integrity of their demesnes. When an ahkhat manifests, most often it emerges from a wall as a humanoid-like head, arms, and a torso that jut out. While ahkhats can manifest full bodies as well, since they cannot move away from their attuned structures, they rarely have cause to. Since an ahkhat's body is one with the structure it embodies, it has no weight or size in and of itself. However, most ahkhats can extend up to 3 feet away from their resident structures; when emerging from the structure, its physical form weighs about 100 pounds, though this weight has no adverse effect on the structure itself. Ecology Ahkhats are a product of Ancient Osirian magic long lost to time. Since the means of creating an ahkhat seem to have been closely guarded secrets and the cost was likely extravagant, these creatures were rare even during the height of Ancient Osirion. Archeologists have discovered ahkhats in desert temples and lavish crypts, but most agree that common homes and other mundane structures likely did not house such beings. It's known that ahkhats are the result of severe and powerful magical alterations to earth elementals, though by what means and under what circumstances these modifications occurred remains unknown. The magic that caused such a metamorphosis must have been mighty indeed to transform an elemental into a native outsider, and is likely on par with the legendary deeds of the god-kings themselves. Like elementals, ahkhats need not breathe, eat, or sleep. While not designed for combat, when pressed, ahkhats attack with their powerful limbs, and can reach up through the floor and out of the walls to trip and grab opponents. They're also adept at snatching nearby objects and hurling them at range. Habitat & Society Ahkhats are solitary creatures without exception. Whatever modifications were made to those earth elementals that would become ahkhats stripped them of both their ability and desire to interact with other creatures, even with other members of their own kind. Ahkhats pay earth elementals as much heed as any other creature. Earth elementals, for their part, recoil at the sight of ahkhats; on some occasions, elementals have been known to rage uncontrollably upon witnessing what they no doubt perceive as an abomination and mockery of their kind. Only one ahkhat keystone can be attuned to a particular structure or building at a time. Attempting to install a second ahkhat keystone into an already-occupied structure results in a series of violent tremors that pulse throughout the building and rock the structure to its very foundation. During this time, the keystones crack and fall apart, and both crumble into useless piles of rubble unless one is removed within 3 rounds. Ahkhat Keystones Every ahkhat is tied to its own keystone, which is usually a stone block that weighs hundreds of pounds. The keystone must be included as part of a structure's foundation or cornerstone, or must be exchanged for a mundane keystone as part of a permanent alteration effected by a skilled artisan. Ahkhat keystones are usually difficult to locate, and are sometimes protected by a locked or secret door, devious traps, or magical protections. The outward appearance is typically a carved icon of a humanoid figure, beneath which is written the ahkhat's name in Ancient Osiriani. Anyone who speaks the ahkhat's name while touching its keystone can attempt to charm the elemental (as charm monster, CL 15th, Will DC 17 negates), and may even do so while the ahkhat is elsewhere in the structure. If an ahkhat is under the control of two or more creatures at the same time, it tries to obey both to the best of its ability. If it receives conf licting orders simultaneously, the competing controllers must make opposed Charisma checks to determine which one the ahkhat obeys. An ahkhat cannot approach within 10 feet of its keystone unless granted permission by someone who has successfully used the keystone. Once tamed by use of the keystone, the ahkhat typically assumes a passive or subservient attitude toward the creature that activated it, even after the duration of the charm effect has expired. The ahkhat perceives this creature as the master of the house. By use of its keystone, an ahkhat can be ordered to enter its keystone and remain there. The stone can then be removed and built into a different building as part of a major construction undertaking or even used in constructing a new building. This is the only way to transplant an ahkhat without destroying it. Details on how to create an ahkhat keystone have faded with time; the knowledge is lost along with the magic that created the first ahkhats.",
    organization: "solitary",
    languages: "Ancient Osiriani",
    spellLikeAbilities: [
      {
        name: "open/close",
        casterLevel: 2,
        timesPerDay: -1
      },
      {
        name: "prestidigitation",
        casterLevel: 2,
        timesPerDay: -1
      }
    ],
    skills: {
      Craft0: {
        subSkill: "carpentry",
        ranks: 4
      },
      Craft1: {
        subSkill: "stonemasonry",
        ranks: 0
      },
      "Knowledge (engineering)": {
        ranks: 7,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Perception: {
        ranks: 4
      },
      Stealth: {
        ranks: 4
      }
    },
    special: {
      "structural mobility": {
        type: "Su",
        text: "An ahkhat can move through solid walls, floors, and ceilings of any material except metal. Its movement leaves behind no tunnel or hole, nor does it create any ripples or other signs of its passage. It cannot move through significantly damaged or ruined sections of a structure until they are repaired. If an area containing an ahkhat is targeted with a passwall spell or similar effect, the ahkhat takes 1d8 points of damage and is immediately shunted to the nearest available space in its attuned structure."
      },
      "integrated body": {
        type: "Ex",
        text: "An ahkhat has no true body. It instead derives its form from the structure it inhabits, emerging from the walls, floors, and ceilings as an extension of the structure. An ahkhat cannot manifest from broken areas of a structure or separate from the building's surface at any time; it can only move within the building materials of the structure it's attuned to. An ahkhat occupies the same space as whatever area of the structure it is presently manifesting from. If an ahkhat is, for whatever reason, moved 10 or more feet away from its structure, it takes 1d8 points of damage; at the beginning of its next turn, the ahkhat immediately returns to the nearest space within its structure as a free action. If an ahkhat is killed, its manifested body disappears as it's immediately reabsorbed by its attuned structure. When not manifesting from a structure, an ahkhat can't be attacked normally, but it is instantly destroyed if 75% of its attuned building is destroyed. If an ahkhat's keystone (see the Ahkhat Keystones on page 81.) is destroyed, the ahkhat is instantly destroyed. Repair Structure (Sp) This functions like make whole, except this ability is strictly limited to the structure the ahkhat inhabits and permanent fixtures attached to the structure. For example, walls, doors, cabinets, and portcullises could be repaired with this ability, but not furniture or an adventurer's equipment."
      },
      "repair structure": {
        type: "Sp",
        text: "This functions like make whole, except this ability is strictly limited to the structure the ahkhat inhabits and permanent fixtures attached to the structure. For example, walls, doors, cabinets, and portcullises could be repaired with this ability, but not furniture or an adventurer's equipment.",
        preText: "1/day"
      }
    }
  },

  "Guardian Scroll": {
    source: "The Half-Dead City",
    creatureType: "construct",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Tiny",
    hd: 5,
    hdVal: 10,
    cr: 3,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 10,
      maneuverability: "Perfect",
      fly: 40
    },
    abilities: {
      str: 14,
      dex: 15,
      con: "-",
      int: 4,
      wis: 10,
      cha: 12
    },
    feats: [
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Lightning Reflexes",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Slice",
        name: "Slice",
        specialAbility: "bleed, grab",
        damage: "1d4"
      }
    ],
    immunities: [
      "construct traits",
      "Immune to bludgeoning, crushing, and falling damage"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "magic"
      }
    },
    space: "2-1/2 ft.",
    reach: "0 ft.",
    environment: "any",
    visualDescription: "This innocuous-looking scroll abruptly rises in the air, unraveling as it flies. It flits about with serpentine grace, baring its razor-sharp edges.",
    description: "Magical practitioners, both arcane and divine, often use artificial creatures to protect their lairs, libraries, temples, and sacred texts. Sometimes the best of these protectors are ones a thief never suspects-until it's too late. Guardian scrolls are deceptive constructs created from enchanted paper or papyrus. When an intruder enters a proscribed area or touches a prohibited object without first speaking a password or otherwise signaling that it has permission to enter, the guardian scroll rises to attack. At rest, guardian scrolls appear identical to any number of different types of magical or nonmagical scrolls. Sometimes their ends terminate in wooden or light metal rods. These weighted ends do not hinder or alter the guardian scrolls' ability to move and attack. The texture of such a scroll is quite different from that of any paper, parchment, or papyrus-though from visual inspection alone it's indistinguishable from those materials. Instead, a guardian scroll's papery body is surprising strong and tensile. Even with casual handling, an observer can tell the material is tear-resistant, though it has a fine edge. When a guardian scroll becomes active, it rises in the air and unfurls to a length of almost 4 feet. It wafts through the air with casual ease as it approaches its target. When it attacks, it stiffens its edges, making them almost as sharp as razors. It races past its target and draws its entire length across any exposed flesh, leaving a long, deep, and often painful slash that bleeds badly afterward. This is not the scroll's only means of attack, however. It can also wrap itself around a Medium or smaller creature in the blink of an eye, constricting it. While the strength of its constriction is not as terrible as that of a giant snake, the guardian scroll is intelligent enough to strategically wrap itself around the face of its target to blind and asphyxiate. While some barroom adventurers laugh at the absurdity of \"aggressive paper,\" anyone who has faced a guardian scroll knows its tenacity is surpassed only by its viciousness. Ecology Guardian scrolls are artificial creatures, more akin to intelligent magic items than anything spawned in nature. Many do have some connection to the natural world, in that the material used in the creation of their paper is sometimes harvested from treants, quickwoods, or other intelligent tree creatures. In Osirion, guardian scrolls are often created from patches of stranglereeds that grow along the riverbank (see Pathfinder Adventure Path #82). Some researchers argue this explains the almost murderous nature that some guardian scrolls manifest. It is possible to create a guardian scroll without killing an intelligent plant creature, but it's a lengthier process that requires much more material, and doesn't appear to change the construct's disposition. Unlike most constructs, guardian scrolls have a limited intelligence. They lack the bludgeoning strength of other automata, and the variety and sophistication of their possible attacks require more than a simple brute force approach. This same spark of awareness also makes them subject to attacks on their minds. Sometimes a guardian scroll's creator uses the scroll to record the very information the construct is intended to protect-often a treasure map. The idea is that the scroll fights relentlessly rather than allowing an unauthorized party to study it, such that a would-be thief must destroy it to stop its attacks. This is risky, however. The scroll could be grappled, pinned, and held down by two or more creatures so it could be examined. Worse, since it fights to the death, the information it protects could be lost entirely. Guardian scrolls forced into scroll tubes go dormant unless they succeed at a DC 15 Will save. A scroll that is still active can usually pop the canister open and escape unless the case has a locking mechanism or other special precautions are taken. If its tube is disturbed, a dormant guardian scroll must attempt a Will save to shake off this forced quiescence; if successful, it abruptly returns to life. Habitat & Society One might expect that guardian scrolls would be found only in the lairs of wizards and in great libraries, but the truth is that while they are commonly placed wherever someone has a secret to keep, they can be found in any number of surprising locations. The scrolls make splendid treasure maps for pirate lords, and as such they are found on ships and islands throughout the Inner Sea. They've even been sent anonymously as sealed missives via courier with instructions to murder the recipient. Construction A guardian scroll's body is usually made of paper crafted from the body of a living, intelligent tree or plant creature; the complex process of extraction usually destroys the creature in the process. For this reason, the creation of a guardian scroll is often, but not strictly, an evil act. A Large- or Medium-sized creature can provide more than enough paper to create dozens of guardian scrolls. The paper produced does not need to be used within a specific time frame, and so may be sold and purchased without the creator destroying an intelligent creature herself. The paper can also be produced alchemically from normal sources of pulp at greater expense with a successful DC 25 Craft (alchemy) check. The additional cost and price for this alternative process are listed within parentheses in the stat block below. Additionally, the creator must inscribe a series of magical words at the very bottom of the scroll. This does not prohibit the scroll from use for spells or other writings, but does require meticulous calligraphy or penmanship. GUARDIAN SCROLL CL 8th; Price 5,000 gp (7,500 gp) Construction Requirements Craft Construct, bull's strength, false life, fly, lesser geas, magic weapon, make whole; paper made from an intelligent plant creature that dies or is slain during the paper-making process, or a more costly alchemically treated paper; creator must have 5 ranks in Linguistics; Cost 2,500 gp (3,750 gp) Magic Guardian Scrolls It's possible to include additional magical writings in the process of a guardian scroll's creation. This process is more expensive, adding 10,000 gp to the construction cost, but grants the guardian scroll spell-like abilities determined by its creator. To make a magic guardian scroll, apply the following changes. Challenge Rating: +1 Abilities: +2 Int, +2 Cha. The guardian scroll gains no additional skill ranks. Spell-like Abilities: CL 4th, concentration +6, two 1st-level spells and one 2nd-level spell three times per day, one 3rd-level spell once per day. The creator designates the spells from those the creator can cast.",
    organization: "solitary, pair, or collection (3-6)",
    languages: "Common (can't speak)",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 10
      },
      Fly: {
        ranks: 6
      }
    },
    special: {
      bleed: {
        universalMonsterAbility: "Bleed",
        damage: "1d2"
      },
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "1d4+3"
      },
      grab: {
        universalMonsterAbility: "Grab"
      },
      slice: {
        type: "Ex",
        text: "A guardian scroll's slice attack is a primary attack that deals slashing damage."
      },
      strangle: {
        type: "Ex",
        text: "When a guardian scroll grapples a creature, it entirely covers its opponent's head with an airtight grip. A creature grappled by the scroll cannot see, speak, or cast spells with verbal components, and it must hold its breath (see Suffocation on page 445 of the Pathfinder RPG Core Rulebook). Creatures that don't speak or breathe through their heads aren't affected in those manners, nor are those who can see through other means blinded. Any attacks targeting a guardian scroll while it's grappling deal half damage to the scroll and the other half to the grappled creature. Susceptible to Mind-Affecting Effects (Ex) As an intelligent construct, a guardian scroll is subject to mind-affecting effects."
      }
    },
    resistances: [
      "susceptible to mind-affecting effects",
      "vulnerable to fire"
    ]
  },

  Shasalqu: {
    source: "The Half-Dead City",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Small",
    hd: 4,
    hdVal: 10,
    cr: 3,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 13,
      dex: 15,
      con: 14,
      int: 2,
      wis: 13,
      cha: 12
    },
    feats: [
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Step Up",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        bonuses: [
          {
            source: "inherent",
            value: "1d6",
            appliesTo: "damageType",
            damageType: "cold"
          }
        ],
        type: "primary"
      }
    ],
    immunities: [
      "Immune to fire"
    ],
    defense: {
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "warm deserts",
    visualDescription: "A ridge of jagged ice runs down the back of this glistening, goat-sized lizard.",
    description: "While some reptiles bask in the sun's warm embrace to raise their body temperature, a shasalqu is ravenous in its search of warmth. Even in the deserts of the Inner Sea region, it never seems to have enough heat. Instead of just relying on the sun, a shasalqu gathers energy by sapping the heat from the air (and creatures) around it. An icy, saw-toothed ridge protrudes from its back, and its tail ends in a small club of accumulated ice. A shasalqu uses the intense cold generated from this heat absorption to trap its prey, which is often unprepared for the effects of blistering cold in the middle of the desert. Fighting shasalqus is dangerous business as their cold flesh damages any creature coming into contact with them. A shasalqu is 3 feet tall at the shoulder and weighs about 40 pounds. Ecology Most desert scholars believe that strange biology that fuels a shasalqu's heat absorption ability is the same as that of brown mold, and some even claim that the creatures carry brown mold spores in their bodies. This could account for shasalqus' ability to sap heat from their surroundings even after they die. Shasalqus have rough, gray-blue skin dotted with small beady extrusions much like those of a horned lizard. Because of their sandy environs and the drops of water that melt off their icy ridges, shasalqus' bodies are often caked in a layer of gritty mud. Motionless shasalqus are often mistaken for rocks or small muddy clumps from a distance-a mistake desert travelers quickly come to regret. Shasalqus' ability to harvest heat from nearby creatures makes them one of the few types of lizards that actively hunt at night. They prefer eating warm-blooded creatures, so they prey upon nocturnal desert fauna such as rabbits, desert foxes, and nesting birds. By catching prey in their chilly auras, shasalqus can bring down animals that would normally have the advantage of speed. Occasionally, shasalqus creep up on encampments and kill travelers' camels while they sleep. Shasalqus prefer to eat larger animals since these creatures can provide food for days, but because they dwell in the resource-poor desert, they typically eat whatever they can. Shasalqus are particularly partial to fire elementals or other supernaturally warm beings, and may pursue such creatures for days in single-minded pursuit of heat and sustenance. Habitat & Society Shasalqus live primarily solitary existences. They are territorial creatures and mark off their territory with a unique scent, by which others of their kind can readily determine whether they have come across that particular shasalqu before. To maintain their territorial boundaries, shasalqus must walk the perimeter of their claimed land once every few days to ensure that their scent sticks. They deliver their scent through the droplets of water that melt off their hides (their \"sweat\") during their patrols. When a shasalqu comes across the territory markers of another shasalqu, it slowly follows the edge of the other's territory, giving ample time for a greater volume of its own droplets to permeate the ground and deliver a stronger scent. The difference between the scents of two shasalqu is almost imperceptible to other creatures, leaving many creatures unaware of territory wars between two or more shasalqus. Shasalqus dwell in hidden places. Their rocky lairs can be found near oases or along trade routes where prey is likely to wander by. Near oases, they make their lairs far enough away to allow them to sneak up on drinking or bathing creatures and then retreat to their lairs with little effort. When a shasalqu finds a trade route within its territory, it also ensures that its lair is not so close to the route as to betray its presence. Regardless of their location, shasalqu lairs are often extremely damp since the desert's heat melts the accumulated ice that crusts on shasalqus' hides. This makes shasalqu lairs breeding grounds for a variety of mosses and plants, especially those that can withstand colder temperatures. These tiny oases rapidly become too mossy for the shasalqu, forcing it to leave its den in search of a new one. Shasalqus frequently keep multiple dens within their territory and rotate between them. In rare cases, brown mold forms in the darkened corners of the den, leading some naturalists to conclude that the strange lizards carry spores from this dangerous mold. This conclusion has led expeditions of naturalists into the blazing desert to locate abandoned shasalqu dens and collect samples of brown mold from them. To avoid entering shasalqu dens on their own, these naturalists use long-handled scoops that they prod into the shasalqu den to collect the dangerous mold. Since shasalqus are not immune to cold damage (merely resistant), they abandon their lairs when patches of brown mold form. Sometimes shasalqus' moist and muddy lairs attract other thirsty desert creatures. Shasalqus can easily contend with the desert foxes and occasional weary traveler, but should a more powerful creature come across their dens, shasalqus either remain perfectly still, hoping the creature will drink and leave quickly, or else they slink away to avoid confrontations, only returning once the threat has passed. Though shasalqus usually keep to themselves, some naturalists have recorded clusters of them in places with abundant food. In these rare situations, a hierarchy forms among these simple creatures, and the leader is invariably the shasalqu with the largest ice-club on its tail, a visible status indicator among shasalqus. Shasalqus that challenge the current alpha end up in quick brawls for superiority. In these fights the challenger often tries to ruin its icy spines or to chip off portions of the ice that has accumulated on the leader's tail, so its opponent has a less impressive display. Because of this behavior, and the fact that the clubs grow more ice eventually, the dominance of these rare clusters of shasalqus is in constant flux. Desert nomads sometimes capture shasalqus and use them as sources of water. They dig pits to serve as enclosures for the lizards, and feed them captured rodents or birds. With the shasalqus safely ensconced in these makeshift wells, the nomads then harvest the resultant condensation as a slow but sure method of obtaining water in the desert. Because of the deadliness of the shasalqu's frigid aura, such hunters often try to catch the creatures with long nets or lassos, and even then only the hardiest and most desperate attempt the feat. For one far from the nearest oasis, the capturing a shasalqu could mean the difference between life and death by dehydration.",
    organization: "solitary, pair, or cluster (3-6)",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 1
      },
      Perception: {
        ranks: 2
      },
      Stealth: {
        ranks: 1
      }
    },
    special: {
      "trapping cold": {
        name: "trapping cold aura",
        text: "A shasalqu exudes a heat-sapping aura that makes the air temperature around it plunge. Any creature that begins its turn within 10 feet of a shasalqu takes 1d6 points of cold damage and becomes entangled. A successful DC 13 Fortitude save negates the damage and the entangled condition. An affected creature is entangled for as long as it is within the aura's area plus 1 round after leaving. Other shasalqus are immune to this aura, as are any creatures immune to cold damage or whose cold resistance causes them to take no damage from the aura. When a shasalqu dies, its trapping cold aura persists around its corpse for 1 hour.",
        preText: "10 ft., DC 13"
      },
      "frigid flesh": {
        type: "Ex",
        text: "A creature that successfully hits a shasalqu with a natural attack or an unarmed strike takes 1d6 points of cold damage."
      },
      "heat absorption": {
        type: "Ex",
        text: "Fire deals no damage to a shasalqu. Instead, the shasalqu absorbs the fire and gains 1 temporary hit point for every 3 points of fire damage it would have taken. These temporary hit points disappear after 1 hour. Trapping Cold (Su) A shasalqu exudes a heat-sapping aura that makes the air temperature around it plunge. Any creature that begins its turn within 10 feet of a shasalqu takes 1d6 points of cold damage and becomes entangled. A successful DC 13 Fortitude save negates the damage and the entangled condition. An affected creature is entangled for as long as it is within the aura's area plus 1 round after leaving. Other shasalqus are immune to this aura, as are any creatures immune to cold damage or whose cold resistance causes them to take no damage from the aura. When a shasalqu dies, its trapping cold aura persists around its corpse for 1 hour."
      }
    },
    resistances: [
      {
        damageType: "cold",
        value: 10
      }
    ]
  },

  "Sun Falcon": {
    source: "The Half-Dead City",
    creatureType: "magical beast",
    subTypes: [
      "fire"
    ],
    alignments: [
      "Lawful Neutral"
    ],
    size: "Tiny",
    hd: 6,
    hdVal: 10,
    cr: 4,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 10,
      maneuverability: "Good",
      fly: 60
    },
    abilities: {
      str: 10,
      dex: 17,
      con: 12,
      int: 5,
      wis: 14,
      cha: 15
    },
    feats: [
      {
        name: "Flyby Attack",
        type: "Monster"
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
        weapon: "Talon",
        name: "2 Talons",
        specialAbility: "burn",
        damage: "1d4",
        bonuses: [
          {
            source: "inherent",
            value: "1d6",
            appliesTo: "damageType",
            damageType: "fire"
          }
        ],
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 2
    },
    space: "2-1/2 ft.",
    reach: "0 ft.",
    environment: "warm deserts or mountains",
    visualDescription: "The plume of this red and yellow bird is so vibrant as to glow. Each movement sends a ripple of light and color down its feathers that flickers like flames. The air around the small creature shimmers with heat.",
    description: "Sun falcons are birds of omen in Osirion, with a reputation that goes back to the days of the nation's most ancient gods. In many myths and stories, sun falcons act as the eyes of many deities, though most commonly for Ra, who considers these birds to be among his holy creatures on Golarion. Sun falcons seem to watch over important people and oversee noteworthy events-sometimes from far enough away to be mistaken as a star visible during the day, sometimes from close enough to appear as a second sun. Today, the ancient gods are largely forgotten, but sun falcons still gravitate toward Osirion's heroes and pharaohs, suggesting that these abandoned gods are not so distant. A typical full-grown sun falcon weighs 2 to 3 pounds and measures 18 inches from beak to tail, with a wingspan approaching 5 feet. Ecology Scholars believe that the brilliant plumage of sun falcons wasn't a natural or even a magical evolution so much as it was divine gift, granted by Ra in the first days of these favored birds' existence. Ancient papyrus scrolls and carvings found in ruins claim the ancient gods of Osirion desired a way to inform mortals they were being observed, and so Ra created the first sun falcons from common desert falcons, imbuing them with his power to shine as bright as the desert sun so as to be seen across the land. This divine gift suffuses every feather on their bodies. Individual lost or stolen feathers shed light as a candle for up to 7 days after being detached, and are often in high demand to accent elegant attire for the upper class. Despite being creatures blessed with the heat of the sun, sun falcons are mortal and require normal sustenance to survive. To avoid reducing their captured prey to unpalatable ash, sun falcons vent gouts of fire from within, slowly lowering their body in temperature to a level that allows them to consume their meals without first incinerating them. Habitat & Society Sun falcons live deep within the deserts of Osirion, though they aren't unknown in Thuvia or even as far west as Rahadoum. They build nests atop rocky outcroppings from gravel, pebbles, and shards of metal capable of withstanding their natural heat, but often abandon their nests only months after creation. How long a particular nest has been inhabited can be identified by the darkness of the rocks it is made from. The stones from particularly well-used nests may even have begun to fuse together from the heat, and are typically lined with crude glass formed from melted desert sand. Some enterprising folk collect these abandoned nests wherever they can be found, and sell them in bazaars throughout the desert lands. But as a typical sun falcon may build dozens if not hundreds of these nests over the course of its life, only the most heavily used or otherwise impressive nests have any real value. So long as a sun falcon remains in a particular nest, it ranges for hundreds of miles in search of prey, primarily desert rodents and other small birds, though they have occasionally been known to attack much larger prey. When fighting anything larger than itself, it begins the attack by making several passes close overhead, relying on its inborn radiance to scorch and exhaust its prey before diving in for the killing blow. Sun falcons are only aggressive when hunting or provoked. Most often, this provocation comes from opportunistic profiteers searching for abandoned nests or molted feathers. An aggravated sun falcon takes to the sky, and over the course of several days it might attack everything it sees-stranding travelers, setting caravans ablaze, and even drying up oases in its rage. When fighting, a sun falcon usually opens combat with its blinding flash ability to confound its victim's senses. Following this initial attack, the sun falcon keeps its distance and uses its breath weapon. It then uses Flyby Attack to strafe its target and remain out of the creature's grasp. If its fiery attacks don't seem to affect its victim, the sun falcon disengages from the fight and moves on. Sun falcons have few natural predators, and they are canny enough to easily avoid most mundane hunters. Their ability to fly protects them from most desert predators, and their natural talents with heat and fire help them fend off any other foolish creatures. The biggest threat to sun falcons comes from efreet who walk the deserts of northern Garund. Immune to many of the sun falcons' attacks, efreet hunt sun falcons for sport as if they were common pheasants, dining on the creatures and using their radiant plumage as decorations on their clothing and armor. The mating habits of sun falcons have long confounded scholars, as every member of the species ever examined has been a mature female, carrying a single already fertilized egg. Because of the birds' association with Ra, some postulate that these eggs are divinely fertilized, though sun falcons are capable of breeding with males of other falcon species, and the result of these unions is always a baby sun falcon. This method of reproduction creates slight variations in the appearance of offspring, but the creatures' abilities are the same. A sun falcon lays these eggs on an annual cycle, and each bird has its own cycle. It takes approximately a month for an egg to hatch once it has been laid, and a chick reaches full maturity after only 2 months. Sun falcons are often born already capable of flight. Until the chick matures, it hunts alongside its mother as she teaches the fledgling vital skills. After reaching maturity, the young sun falcon departs into the desert to build its first nest and begin its own cycle. The only exceptions to this rule are when a sun falcon bonds to another creature. The subject of this bond is typically a humanoid who is suspected to have some great destiny in store. A sun falcon doesn't live with its bonded creature or even have much direct contact, but it keeps nearby, flying above the village or city the person lives in or trailing the person in her travels if she happens to be a desert nomad or leaves her native lands. This bonding process has proven flawed as often as not in the current Age of Lost Omens-though the falcon follows this creature for the remainder of its life, the bonded person is no more likely to have a great future in store for him then might any other. While some skeptics claim that those who believe this legend grant such chosen individuals more chances than they would otherwise receive, artificially inf lating their chance of success, others' beliefs also result in unrealistic expectations that these \"blessed\" individuals constantly fail to meet, which can lead them to instead despair or be rejected by the public.",
    organization: "solitary, pair, or beam (3-6)",
    languages: "Celestial (can't speak)",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 1
      },
      Perception: {
        ranks: 2,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Survival: {
        ranks: 3
      }
    },
    special: {
      "blinding flash": {
        type: "Su",
        text: "By spreading its wings wide, a sun falcon can blast an intense wave of heat and light in a 20-foot cone as a standard action. All creatures within this area must succeed at a DC 15 Reflex save or take 1d6 points of fire damage and be blinded for 1d4+1 rounds. Creatures that succeed at this save take no fire damage and are instead dazzled for 1 round. The save DC is Charisma-based."
      },
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "30-ft. line",
        damage: "usable every 1d4 rounds"
      },
      burn: {
        universalMonsterAbility: "Burn",
        saveDC: 10,
        damage: "1d6 fire"
      },
      radiance: {
        type: "Su",
        text: "A sun falcon radiates heat and light with the intensity of the noonday sun. Creatures within 10 feet of a sun falcon must succeed at a DC 15 Fortitude save each round or become fatigued. A sun falcon can suppress or activate its aura at will as a free action. The save DC is Charisma-based.",
        preText: "10 ft., DC 15"
      }
    }
  },

  "Ground Wasp Swarm": {
    source: "The Half-Dead City",
    creatureType: "vermin",
    subTypes: [
      "swarm"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Fine",
    hd: 3,
    hdVal: 8,
    cr: 2,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Tremorsense 15 ft."
    ],
    speed: {
      base: 5,
      burrow: 10,
      maneuverability: "Good",
      fly: 30
    },
    abilities: {
      str: 1,
      dex: 12,
      con: 10,
      int: "-",
      wis: 11,
      cha: 3
    },
    feats: [],
    attacks: [
      {
        weapon: "swarm",
        name: "swarm",
        specialAbility: "distraction, poison",
        damage: "1d6"
      }
    ],
    immunities: [
      "Immune to mind-affecting effects, weapon damage"
    ],
    defense: {},
    space: "10 ft.",
    reach: "0 ft.",
    environment: "warm deserts or plains",
    visualDescription: "Thousands of yellow and black wasps form a thick cloud that swirls with savage bites and venomous stings.",
    description: "Ground wasps live in colonies dug into the ground, and even inhabit cracks and hollow spaces within tombs and ruins. These social insects leave their nests only to hunt (or defend the nest), often lurking just within the entrance and relying on their Tremorsense to detect nearby creatures. When a creature gets too near their nest, the wasps stream out of hiding and attack. Many varieties of ground wasps are parasitic, and attack large creatures as a means of reproduction, as well as in defense. Ground wasps have a paralytic poison, and once a victim has sustained dozens of stings, its body goes limp. Once its prey is incapacitated, a ground wasp swarm descends on the still-living creature and lays hundreds of eggs just beneath its skin. Some ground wasps swarm for food in a similar fashion. Mature ground wasps don't eat much flesh themselves, but they often take down prey so they can retrieve food for their growing larvae.",
    organization: "solitary, pair, or infestation (3-6)",
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
            value: 8
          }
        ]
      }
    },
    special: {
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Swarm-injury; save Fort DC 11; frequency 1/round for 6 rounds; effect 1 Dexterity damage; cure 1 save.",
        saveDC: 10
      }
    }
  },

  "Plague Locust Swarm": {
    source: "The Half-Dead City",
    creatureType: "vermin",
    subTypes: [
      "swarm"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Fine",
    hd: 12,
    hdVal: 8,
    cr: 8,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 10,
      climb: 10,
      maneuverability: "Average",
      fly: 40
    },
    abilities: {
      str: 1,
      dex: 18,
      con: 17,
      int: "-",
      wis: 13,
      cha: 2
    },
    feats: [],
    attacks: [
      {
        weapon: "swarm",
        name: "swarm",
        specialAbility: "distraction",
        damage: "4d6"
      }
    ],
    immunities: [
      "Immune to mind-affecting effects, weapon damage"
    ],
    defense: {},
    space: "10 ft.",
    reach: "0 ft.",
    environment: "warm deserts or plains",
    visualDescription: "Buzzing with an ear-shattering drone, this cloud is full of particularly vicious-looking locusts.",
    description: "Locust swarms can be found throughout Golarion, but the desert lands of Osirion host one of the most destructive types: plague locusts. Swarms of plague locusts can strip acres of crops bare in an hour, and can depopulate small villages in a day as they move through and devour everything in sight. Not only do these ravenous pests rend flesh and savage crops, but they also are noted for destroying buildings and other property. Plague locust bites can scour tiles off roofs and weaken the exposed support beams of sheds and stables (to say nothing of what they do to the camels, goats, and horses within). Osirians thank the gods that plague locust swarms are rare and only stream through in large numbers every few years. Plague locust swarms in other regions are considered to be the work of the demon lord Deskari, especially those found in the northern reaches of Avistan.",
    organization: "solitary, pair, or calamity (3-64)",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 0
      },
      Fly: {
        ranks: 0
      }
    },
    special: {
      devour: {
        type: "Ex",
        text: "A plague locust swarm causes damage to unattended objects in its space each round as though they were creatures, and can even damage normally inedible objects."
      },
      voracious: {
        type: "Ex",
        text: "A plague locust swarm's swarm attack deals double damage to creatures of the plant type and to objects made of paper, wood, or other plant materials."
      }
    }
  },

  "Scarab Swarm": {
    source: "The Half-Dead City",
    creatureType: "vermin",
    subTypes: [
      "swarm"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Fine",
    hd: 4,
    hdVal: 8,
    cr: 3,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30,
      climb: 10,
      maneuverability: "Clumsy",
      fly: 20
    },
    abilities: {
      str: 1,
      dex: 10,
      con: 13,
      int: "-",
      wis: 11,
      cha: 2
    },
    feats: [],
    attacks: [
      {
        weapon: "swarm",
        name: "swarm",
        specialAbility: "disease, distraction",
        damage: "1d6"
      }
    ],
    immunities: [
      "Immune to mind-affecting effects, weapon damage"
    ],
    defense: {},
    space: "10 ft.",
    reach: "0 ft.",
    environment: "warm deserts",
    visualDescription: "This mass of iridescent blue-black insects emits a foul stench, and a faint chorus of thousands of clicking and clacking jaws can be heard from all sides.",
    description: "The scarab beetle is indigenous to warm deserts, particularly those of northern Garund. Scarabs are small, six-legged insects with sharp protrusions on their front legs that they use to aid in burrowing. They are primarily coprophagous, eating dung for sustenance. An individual scarab often spends days rolling a single ball of detritus across the desert until it can find the perfect place to bury and deposit eggs in the dung. Because of this practice of burrowing underground to create new life, scarab beetles have long been associated with Osirian burial rites and the church of Pharasma A scarab swarm comprises thousands of scarab beetles, each filthy from its constant contact with dung. Normally inattentive toward other creatures, scarab swarms subject those that get in their way to thousands of sharp bites as well as a highly infectious disease. Indeed, the bites of a scarab swarm are the least of their victims' worries, as the disease they carry claims far more lives than their hunger. Some religious scholars theorize that scarabs are prone to swarm because they're drawn to the same malign energy that causes some undead to rise in Osirion, though most people regard this explanation as purely superstition. Some worshipers of Pharasma see the arrival of a scarab swarm as a portent for ill fortune and upon encountering such a sight utter quick prayers to the Lady of Graves.",
    organization: "solitary, pair, or infestation (3-6)",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 0
      },
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
      disease: {
        universalMonsterAbility: "Disease",
        name: "Filth fever",
        type: "Ex",
        text: "Filth fever: Swarm-injury; save Fort DC 13; onset 1d3 days; frequency 1 day; effect 1d3 Dex damage and 1d3 Con damage; cure 2 consecutive saves."
      }
    }
  },

};
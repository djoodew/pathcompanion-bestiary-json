
export const Palace_Of_Fallen_StarsCreatures = {
  Gammenore: {
    source: "Palace Of Fallen Stars",
    creatureType: "magical beast",
    subTypes: [
      "cold"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 12,
    hdVal: 10,
    cr: 8,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 40,
      climb: 20
    },
    abilities: {
      str: 23,
      dex: 12,
      con: 16,
      int: 3,
      wis: 16,
      cha: 7
    },
    feats: [
      {
        name: "Combat Reflexes",
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
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Lunge",
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
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Pincer",
        name: "Pincer",
        specialAbility: "grab",
        damage: "2d6"
      }
    ],
    defense: {
      naturalArmor: 12
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any cold",
    visualDescription: "Spikes of ice jut from the carapace of this stocky crustacean. It scuttles sideways on its eight legs with surprising speed, while its two pincers-one small and sharp, the other monstrously large- flex in anticipation of combat.",
    description: "The gammenore is a prime example of how Triaxian fauna has adapted to survive the planet's long, cruel winters. While other creatures struggle to survive the planet's decades-long season of cold and ice, the gammenore thrives, turning the might of winter into the very tools of its survival. Absent its icy armor, the gammenore looks like a large, blue-and-white-shelled crustacean. It has a rather wide, oval-shaped carapace, a pair of powerful pincers, and four pairs of strong, articulated legs. A gammenore's two pincers serve very different purposes. The primary claw is monstrously large and extremely strong, and is used to break through ice and crush the gammenore's prey. The other claw is smaller, less cumbersome, and sharp enough to rend flesh and bone. The gammenore uses this smaller claw to tear its victims into pieces small enough to eat, and to perform any manipulations too delicate for the large claw. Its eyes are located on short stalks that rise from the front of its carapace, allowing it to see even when encased in its shell of ice. A gammenore is approximately 8 feet wide, and weighs between 2,000 and 3,000 pounds. Ecology Despite their resemblance to mundane crabs, gammenores are primarily terrestrial creatures, living in water only as larvae and while mating. They can be found anywhere ice and snow exists on Triaxus, from the high mountains to the low snowy plains, or even atop the ice-covered seas. The gammenore is an ambush predator, preferring to conceal itself in snow banks or among ice formations and wait for prey to approach. Once a victim is within reach, the gammenore erupts from hiding and attempts to grab or cripple the target with its large claw. Failing that, it may chase down its prey on foot, especially if the victim seems injured or the terrain favors climbing over sprinting. When times are lean, a gammenore may resort to scavenging or even to stealing food from larger predators, trusting its shell to protect it from enemies' reprisals. When threatened, a gammenore forces freezing water through pores in its shell to form a barrier of spikes across its carapace. These spikes break and fuse together over time to form a thick sheet of jagged ice over much of the gammenore's body, granting it a second layer of defense against attacks. A gammenore is able to excrete more water this way than it should theoretically be able to carry within its body, leading many scholars to conclude that much of the ice is magically produced or conjured. Despite this, gammenores seem to possess an unquenchable thirst, spending much of their time eating snow and ice. The creatures also prefer to eat their food frozen, letting victims' torn bodies freeze before crunching away at their meals. Habitat & Society During Triaxus's harsh winters, gammenores rarely spend much time in each other's company, as they are extremely competitive and fight each other for food or territory. Their behavior changes drastically as the season begins to turn- they become much more companionable as winter's grip on the land weakens. As spring nears, gammenores from across Triaxus instinctively begin to migrate to the nearest body of water to mate and lay their eggs. These eggs then go dormant during the planet's long summer, hatching as the water temperature begins to drop once again. After laying their eggs, gammenores migrate to the coldest, most remote parts of the world. This is a time of danger for the civilized races of Triaxus, for gammenore migration routes are hardly regular each season and often cross through populated areas. In the northern stretches of the Allied Territories, inhabitants tell tales of armies of gammenores, over a hundred strong, marching through cities and leaving naught but rubble and ruin. These stories are most likely exaggerations, as gammenores rarely travel in groups larger than nine, but such packs of migrating gammenores can still wreak havoc on a community. At the end of the gammenores' journey, they gather by the hundreds atop the tallest mountains and in the deepest caverns of the world to flee the coming heat. Near the planet's north pole these colonies can grow into the thousands, covering swaths of land in a living blanket of gammenores. Piled atop each other, the gammenores extend their ice shells to cover their entire bodies, encasing themselves in ice and slowing their metabolisms in an attempt to preserve themselves. Precipitation during the tail end of winter combines with the gammenore's own supernatural cold to further cement the creatures together, forming miniature glaciers and mountain icecaps to protect the colony from the heat of the planet's long summer. This defense is far from perfect and few gammenores survive to the next winter. During particularly hot summers, gammenores on the periphery of the colony thaw prematurely. These gammenores either die quickly from the heat, or stumble into glacial runoff and are washed downstream, becoming short-lived menaces to riverside communities. Summertime gammenores react to heat dangers as though they were one category more severe-normal temperatures count as hot conditions, hot conditions count as severe heat, etc. The high temperatures of summer also disorient the gammenores, giving them the confused condition. Gammenores in the heat lose their shell of ice ability entirely, and produce sprays of cold water from their bodies in place of ice spikes, allowing them to attempt a single combat maneuver check to bull rush all adjacent creatures once every 1d4 rounds. Reduce the CR of a gammenore encountered in the summertime by 2. Gammenore eggs hatch in late fall, releasing swarms of larvae into the waters in which they were deposited. These larvae feed upon each other, and on anything the current washes them across, until they mature into adult gammenores at the start of winter. Meanwhile, the adults that survived the summer chip themselves free from their communal glaciers to seek new hunting grounds away from their competitive kin, so that they can feed and restore their strength.",
    organization: "solitary, pair, or cluster (3-9)",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 0
      },
      Perception: {
        ranks: 4
      },
      Stealth: {
        ranks: 3,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "2d6+9"
      },
      "ice spikes": {
        type: "Su",
        text: "As a standard action, a gammenore can force freezing water through pores in its carapace to produce long, sharp spikes of ice. These spikes impale nearby creatures, dealing 6d6 points of piercing damage to each creature adjacent to the gammenore (Reflex DC 19 half). Additionally, the spikes shatter easily, embedding shards of ice in the flesh of creatures that fail their saving throws against the attack-these shards deal 1d6 points of bleed damage each round until the wounds are healed. A gammenore can use this ability once every 1d4 rounds. The save DC is Constitution-based."
      },
      "oversized pincer": {
        type: "Ex",
        text: "A gammenore's pincer attack is a primary attack that deals the indicated amount of damage plus 1-1/2 times its Strength modifier."
      },
      "shell of ice": {
        type: "Su",
        text: "Much of a gammenore's carapace is encased in a thick layer of jagged icicles. This shell of ice functions much like spiked armor, dealing 1d8 points of piercing damage to the target of any successful grapple combat maneuver check made by the gammenore. Additionally, this frozen shell helps to regulate the gammenore's cold body temperature, granting it resistance 10 to fire. The shell can absorb up to 60 points of fire damage before melting. Once the shell melts, the gammenore takes a -4 penalty to its natural armor bonus, it loses its fire resistance, and it deals no additional damage when grappling. A gammenore can reconstitute a melted shell by spending time in areas of intense cold. This process takes 2 hours in a cold environment, 3d10 minutes in areas of severe cold, and 1d10 minutes in areas of extreme cold."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  Gravedragger: {
    source: "Palace Of Fallen Stars",
    creatureType: "outsider",
    subTypes: [
      "evil",
      "herald"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Large",
    hd: 17,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Scent",
      "See in Darkness"
    ],
    speed: {
      base: 50,
      maneuverability: "Average",
      fly: 30
    },
    abilities: {
      str: 20,
      dex: 19,
      con: 22,
      int: 17,
      wis: 16,
      cha: 19
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
        name: "Improved Critical",
        type: "Combat",
        value: "Heavy pick",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Dirty Trick",
        type: "Combat"
      },
      {
        name: "Improved Drag",
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
        name: "Vital Strike",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Heavy pick",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Heavy pick",
        enchantments: [
          {
            name: "Enhancement Bonus +2",
            source: "inherent"
          }
        ],
        name: "Heavy pick",
        damage: "1d6"
      }
    ],
    immunities: [
      "Immune to fear"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "cold iron and magic"
      },
      SR: {
        value: 26
      },
      naturalArmor: 12
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any (Abaddon or Astral Plane)",
    visualDescription: "This creature's body rises from the ground in an amorphous mass of grave dirt and eroded bone. Its upper half is humanoid-shaped and wields an enormous pick made from a giant's rib and skull.",
    description: "Gravedragger is a cruel prankster who enjoys murdering innocents in unexpected, horrid, ironic, and tragic ways. In the same way that children fear the mysterious bogeymen, adults cower at the thought of Gravedragger bringing them to a painful end. Unlike Pharasma, who enforces fated and inevitable death, the herald of Zyphus is a break from destiny's plan-a sudden deviation that leads to danger and ruin. Gravedragger appears as a vaguely humanoid mass of grave dirt and bones, and wields a heavy pick made of a rib bone punched through a giant's skull. He also takes the form of an old, thin human man with shifty eyes and a sickening, toothy smile. In this form he is known as \"Grinning Jack,\" often shortened to \"Grinjack.\" Gravedragger speaks in a high, mad voice, and is prone to outbursts of cackling even when cloaked by invisibility. Divinations by the faithful show that Gravedragger was once a mortal farmer. When his wife and family fell ill with a sickness, he traveled to the nearest village to get aid from the healer. When he returned with a curative potion, he found that his home had been struck by lightning and burned to the ground; his family, too sick to crawl out, had perished in the fire. The man's mind snapped, broken by the idea that he could have prevented his loved ones' random and pointless deaths if he hadn't been away from home. He embraced the cult of Zyphus and began studying magic, using his abilities to stalk and kill clerics of rival faiths as well as to ambush adventurers to slay them in their sleep or after difficult battles. After a long, successful life at this morbid career, he died in his sleep, and in Zyphus's realm he was infused with divine power and became the god's herald. Remorseless and vindictive, Gravedigger now enjoys his role as the bringer of bad luck and the foil of fate, and every death he causes buries a little bit deeper the guilt he feels for his family's deaths. Although Gravedragger enjoys lurking in graveyards, where he can easily use his bury alive ability, he isn't a harbinger of deserved deaths and is bored by the idea of dispatching wounded soldiers-something he feels is the job of psychopomps. Instead, Gravedragger revels in unexpected methods of murder, such as causing a fallen armored knight to drown in a couple inches of mud after being pulled from his horse. The herald uses invisibility and greater invisibility to sneak up on his targets and aff lict them with curses or blindness, blow them off cliffs (with gust of wind or telekinesis), call sudden bolts of lightning, or create symptomless deaths (using slay living). He might attack from invisibility for 1 or 2 rounds, then leave if he fails to kill anyone quickly-his interest is in spontaneity and sudden death, not extended battle. He usually employs these tactics even if tasked with slaying a specific person, as it's more entertaining to him to set up an elaborate ambush than to confront his opponent directly. Sometimes he's content to just follow his prey unobserved, creepily breaking the silence with his tittering laugh and unnerving the victim so much that it stumbles into a natural trap or flees in terror toward a wild creature's lair. Ecology Created from a mortal soul and raised to his station by a god, Gravedragger is sustained by divine power and like other outsiders has no need to eat or drink. However, he has often been seen hovering over a dead or dying victim, inhaling deeply as if sucking out remnants of the mortal's soul. He claims these breaths sustain him in place of food or air, but there's no evidence that he actually needs to do this; the habit is probably just some perverse torture intended to unnerve his victims in their last moments. When in his Grinjack form, he often pretends to be a Pharasmin priest, administering false last rites to doomed mortals just to enjoy the sound of their death rattles. While Gravedragger's physical body appears to be composed of nonliving materials, he's a living creature and this appearance is only his outer \"skin.\" When damaged, he bleeds red blood, pungent yellow bile, and-if the wound is large enough-dismembered humanoid body parts such as hands, limbs, and heads. As he doesn't eat, these parts are probably physical manifestations of the countless lives he has taken in the name of Zyphus. Immortal and able to recover from severe wounds, he would rather escape a fight than allow himself to die, for he has felt death as a mortal and has no desire to repeat the experience. Habitat & Society Gravedragger spends most of his time in Zyphus' realm in Abaddon, exchanging grisly stories with the souls of Zyphus's faithful and other divine servitors. Left unsupervised to perform whatever murderous mischief he pleases, Gravedragger visits Golarion to enact petty revenge, blasphemous murders, and countless \"accidental\" deaths. The herald sometimes associates with various daemons who help him effect these structured accidents, particularly hydrodaemons (death by drowning), leukodaemons (death by plague), meladaemons (death by starvation and thirst), and crucidaemons (death by traps). In the mortal world, Gravedragger has a fondness for pugwampis and trickster fey, especially bogeymen, and has been known to guide their efforts or even transport them over long distances to save them from extermination or help them to find new victims. He sometimes sneaks into a city in his Grinjack form carrying a sack of pugwampis and releases them upon an unsuspecting urban population, cackling glee as he watches the aftermath.",
    organization: "solitary",
    languages: "Abyssal, Celestial, Common, Infernal; telepathy 60 ft.",
    spellLikeAbilities: [
      {
        name: "dimension door",
        casterLevel: 17,
        limitations: "self only",
        timesPerDay: -1
      },
      {
        name: "invisibility",
        casterLevel: 17,
        limitations: "self only",
        timesPerDay: -1
      },
      {
        name: "bestow curse",
        casterLevel: 17,
        timesPerDay: 3
      },
      {
        name: "invisibility, greater",
        casterLevel: 17,
        limitations: "self only",
        timesPerDay: 3
      },
      {
        name: "gust of wind",
        casterLevel: 17,
        timesPerDay: 3
      },
      {
        name: "ice storm",
        casterLevel: 17,
        timesPerDay: 3
      },
      {
        name: "slay living",
        casterLevel: 17,
        timesPerDay: 3
      },
      {
        name: "animate dead",
        casterLevel: 17,
        timesPerDay: 1
      },
      {
        name: "chain lightning",
        casterLevel: 17,
        timesPerDay: 1
      },
      {
        name: "telekinesis",
        casterLevel: 17,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 9
      },
      Bluff: {
        ranks: 17
      },
      Fly: {
        ranks: 0
      },
      "Handle Animal": {
        ranks: 11
      },
      Intimidate: {
        ranks: 17
      },
      "Knowledge (history)": {
        ranks: 12
      },
      "Knowledge (planes)": {
        ranks: 9
      },
      "Knowledge (religion)": {
        ranks: 20
      },
      Perception: {
        ranks: 17
      },
      Perform0: {
        subSkill: "dance",
        ranks: 8
      },
      "Sleight of Hand": {
        ranks: 20
      },
      Stealth: {
        ranks: 17
      }
    },
    special: {
      "bury alive": {
        type: "Su",
        text: "As a standard action, Gravedragger can telekinetically pull a target within 100 feet into a grave (or a similar physical hole in the ground that is an appropriate size for burying the target) and bury it. Gravedragger must be adjacent to the grave he intends to drag his target into. Treat this as a special drag combat maneuver. The target takes 4d6 points of damage (Reflex DC 22 half) and is buried alive (see Cave-Ins and Collapses on page 415 of the Pathfinder RPG Core Rulebook). The save DC is Charisma-based."
      },
      "long arm of the reaper": {
        type: "Ex",
        text: "Gravedragger can throw his heavy pick up to 100 feet away as a ranged attack with no range increment. The weapon automatically returns just before the herald's next turn, as if it had the returning weapon quality."
      },
      pull: {
        universalMonsterAbility: "Pull",
        attack: "heavy pick",
        distance: "5 ft."
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "human; alter self"
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        value: null
      },
      "unearthly luck": {
        type: "Su",
        text: "Gravedragger adds his Charisma bonus as a luck bonus on all his saving throws and to his Armor Class. Unluck Aura (Su) Gravedragger radiates an aura of unluck to a radius of 30 feet. Any creature in this area must roll two d20s whenever a situation calls for a d20 roll (such as an attack roll, a skill check, or a saving throw) and must use the lower of the two results. This is a mind-affecting effect that doesn't work on worshipers of Zyphus. Any creature that gains any sort of luck bonus (such as that granted by a luckstone or divine favor) is immune to Gravedragger's unluck aura."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "30 ft."
      },
      unluck: {
        type: "Ex",
        preText: "30 ft."
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

  "Juggernaut Robot": {
    source: "Palace Of Fallen Stars",
    creatureType: "construct",
    subTypes: [
      "robot"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Gargantuan",
    hd: 20,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Targeting Array"
    ],
    speed: {
      base: 50
    },
    abilities: {
      str: 36,
      dex: 11,
      con: "-",
      int: 12,
      wis: 13,
      cha: 1
    },
    feats: [
      {
        name: "Awesome Blow",
        type: "Combat"
      },
      {
        name: "Deadly Aim",
        type: "Combat"
      },
      {
        name: "Greater Bull Rush",
        type: "Combat"
      },
      {
        name: "Improved Bull Rush",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Slam",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Sunder",
        type: "Combat"
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
        name: "Stunning Assault",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Slam",
        name: "2 Slams",
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
      },
      {
        weapon: "Integrated heavy laser rifle",
        qualities: [
          "touch"
        ],
        name: "2 Integrated heavy laser rifles",
        damage: "4d10"
      }
    ],
    immunities: [
      "construct traits"
    ],
    defense: {
      naturalArmor: 20
    },
    space: "20 ft.",
    reach: "20 ft.",
    environment: "any (Numeria)",
    visualDescription: "This towering mechanical humanoid stares down from a soulless violet eye. Its metallic fists crackle with electricity.",
    description: "Easily the rarest of all robots in Numeria, these metallic monstrosities wreak havoc upon those who trespass upon the remnants of the strange vessel that crashed into Golarion's crust eons ago. The original reasons behind the creation of such titanic constructs remains a mystery. However, the Technic League quickly surmised that these metal giants excelled at rendering other Numerian technology inert, which may give clues to the constructs' purpose. Wrought from a strange metallic alloy similar to iron and containing bizarre electronics and delicate sensors, the juggernaut rises to a height of 50 feet and weighs well over 100 tons. Ecology To all but a select few, the juggernaut's inner workings are an inscrutable tangle of wires, circuits, and strange metallic widgets. Its crude humanoid silhouette, complete with dangling simian-like forearms, belies its alien visage: a sleek dome with a single, unblinking ovoid eye, behind which lies a dazzling array of multihued sensors. Thick cords twist over the robot's forearms before feeding into cannon-like barrels that pulse with energy. Oversized fists crackle with lightning and explode with thunderous force upon impact. However terrible these weapons are, nothing in the juggernaut's arsenal is feared more than the ray of death that its central orb emits-a sickly hued beam that reduces all materials to a fine green dust. Luckily, this devastating attack is heralded by a series of swirling lights and high-pitched whines that mimic a colossal teapot about to explode. Habitat & Society These goliaths serve as sentinels to the larger shards of their shattered starship. Occasionally mistaken for enormous statuary or tributes left behind from a forgotten age, these humongous robots lie inert until the location they guard is breached. At that point, they come to life amid the loud whir of alien machinery, the stench of ozone, and the terrified screams of the intruders. Luckily, the sites these brutes guard often lie deep within Silver Mount, out of reach of all but the most determined scavengers. Strangely, these massive constructs seem to have a close, almost paternalistic, relationship towards the more common gearsmen of Numeria. Most attempts by the Technic League to get a juggernaut to attack a functioning gearsman prove ineffective, and much like their smaller counterparts, juggernauts respond to both threats and censure with inscrutable silence. Known Juggernaut Robots Though the Technic League has spent decades excavating technological wonders from the wreckage of the spacecraft that crashed to Golarion so long ago, only a few of the juggernauts that have been reclaimed still have any semblance of functionality. Descriptions of the most intensively studied specimens follow. The Living Monument: Straddling a deep crater and polished to a blinding sheen, this robot is worshiped by an indigenous tribe of Kellid warriors. Having calculated that the Kellids harbor no desire to unearth the cosmic shard that it has guarded for millennia, this juggernaut impassively tolerates the veneration it receives. The fact that its Kellid worshipers zealously oppose the Technic League's attempts to access the juggernaut causes the automaton to regard them as lesser guardians, almost as though they were gearsmen. Specimen One: Unearthed deep beneath Silver Mount, this juggernaut was found inert within a colossal chamber. The debased arcanists of the Technic League disassembled the dormant hulk and catalogued its every wire, circuit, and cog. When they finished, they began the long, arduous process of reassembly. Unfortunately, their efforts were only partially successful. Now, only the juggernaut's massive robotic head remains \"alive,\" forever calculating how it might escape from this pathetic existence amid a labyrinth of frayed wires, pitted alien alloys, and strange flickering bulbs.",
    organization: "solitary",
    languages: "Androffan, Common",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 4
      },
      "Disable Device": {
        ranks: 13
      },
      "Knowledge (engineering)": {
        ranks: 23
      },
      Perception: {
        ranks: 23
      },
      "Sense Motive": {
        ranks: 12
      }
    },
    special: {
      atomizer: {
        type: "Ex",
        text: "As a full-round action once every 3 rounds, a juggernaut robot can fire a ray from its eye as a ranged touch attack. On a hit, the ray deals 15d6 points of damage. When used against an object, the atomizer disintegrates as much as a 10-foot cube of nonliving matter. A creature or object that succeeds at a DC 21 Fortitude save instead takes only 5d6 points of damage. Any creature reduced to 0 or fewer hit points by this attack is entirely disintegrated, leaving behind only a trace of fine dust. A disintegrated creature's equipment is unaffected. The save DC is Intelligence-based."
      },
      "charge fist": {
        type: "Ex",
        text: "A juggernaut robot can charge its oversized fists with electricity as a free action, causing its slam attacks to deal 1d6 points of electricity damage. On a critical hit, a charged strike explodes with electric energy, dealing an additional 1d10 points of electricity damage. This electricity doesn't harm the juggernaut."
      },
      "combined arms": {
        type: "Ex",
        text: "When taking a full-attack action, a juggernaut robot can attack with its melee and ranged integrated weapons simultaneously."
      },
      "electromagnetic pulse": {
        type: "Ex",
        text: "Once per day as a standard action, a juggernaut robot can unleash an electromagnetic pulse in a 20- foot radius that bypasses any active force fields (or similar effects) and deals 6d6 points of electricity damage to any robots or creatures with cybernetic implants. This effect doesn't harm the juggernaut robot itself or other living creatures. Creatures affected by this attack that succeed at a DC 21 Reflex save take only half the normal amount of damage. Any technological item within this radius is drained of 1d6 charges unless the item succeeds at a DC 21 Reflex save. The save DCs are Intelligence-based. Force Field (Ex) A juggernaut robot is sheathed in a thin layer of shimmering energy that grants it 75 bonus hit points. All damage dealt to a juggernaut with an active force field is deducted from these hit points first. As long as the force field is active, the juggernaut is immune to critical hits. A juggernaut's force field has fast healing 10, but once these bonus hit points are reduced to 0, the force field shuts down and does not reactivate for 24 hours. Integrated Heavy Lasers (Ex) A juggernaut robot has a heavy laser rifle built into each of its arms. Each weapon has a range of 150 feet and deals 4d10 points of fire damage. Each can fire once per round in a burst of shots that attacks all creatures in a line. This line starts from any corner of the robot's space and extends to the limit of the weapon's range or until it strikes a barrier it can't penetrate. The robot must make a separate attack roll against each creature in the line, and each creature in the line can be attacked with only one shot from each burst. Each attack roll takes a -2 penalty, and its damage can't be modified by precision damage or damage-increasing feats such as Vital Strike. Invisible creatures are immune to damage caused by a laser weapon. Fog, smoke, and other clouds provide cover in addition to concealment from laser attacks. Darkness (magical or otherwise) has no effect on lasers other than providing concealment. Roll to confirm each attack roll that threatens a critical hit separately. Targeting Array (Ex) Juggernaut robots see invisible creatures or objects as if they were visible. In addition, because of their complex array of sensors, juggernauts suffer no miss chance if a target has concealment, and reduce the miss chance from total concealment to 20%. Vicious Trample (Ex) A juggernaut robot's massive steel feet deal 6d6+19 points of damage on a successful trample attack."
      },
      "vicious trample": {
        type: "Ex",
        text: "A juggernaut robot's massive steel feet deal 6d6+19 points of damage on a successful trample attack.",
        preText: "6d6+19, DC 33"
      },
      hardness: {
        universalMonsterAbility: "Hardness",
        value: 10
      }
    },
    resistances: [
      {
        damageType: "cold",
        value: 20
      },
      {
        damageType: "electricity",
        value: 20
      },
      {
        damageType: "fire",
        value: 20
      }
    ]
  },

  "Surgeon Robot": {
    source: "Palace Of Fallen Stars",
    creatureType: "construct",
    subTypes: [
      "robot"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 18,
    hdVal: 10,
    cr: 14,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Superior Optics"
    ],
    speed: {
      base: 30,
      maneuverability: "Good",
      fly: 60
    },
    abilities: {
      str: 22,
      dex: 25,
      con: "-",
      int: 14,
      wis: 13,
      cha: 1
    },
    feats: [
      {
        name: "Bleeding Critical",
        type: "Combat"
      },
      {
        name: "Blinding Critical",
        type: "Combat"
      },
      {
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Integrated surgical laser",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Scalpel",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Syringe",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      },
      {
        name: "Weapon Finesse",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Claw",
        name: "2 Claws",
        specialAbility: "grab",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Scalpel",
        name: "4 Scalpels",
        damage: "1d6"
      },
      {
        weapon: "Syringe",
        name: "Syringe",
        specialAbility: "pharmaceutical",
        damage: "1d4"
      },
      {
        weapon: "Integrated surgical laser",
        qualities: [
          "touch"
        ],
        name: "Integrated surgical laser",
        damage: "1d6"
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
    visualDescription: "This robot has the general appearance of a skeletal preying mantis fashioned entirely from gleaming metal. An array of limbs fitted with laser scalpels, syringes, and other surgical devices spring from its body.",
    description: "These large, insectoid-looking robots were designed to perform incredibly complicated surgeries with flawless results. Possessing a data bank filled with advanced surgical techniques, these robots produce nearly supernatural effects, and the recovery time from their procedures is often nothing short of miraculous. These robots were originally stationed on Divinity to care for the humanoid crew of the ship during their long voyage, and some were even employed to treat the aliens the ship collected during its journey. Surgeon robots stand 7 feet tall and weigh a bit more than 600 pounds. Ecology Formed from a skeletal array of gleaming metal, surgeon robots can contort their forms to accommodate various positions needed to most effectively perform surgical procedures on their patients. Though the robot is capable of standing upright and extending its body to a height of 10 feet, it usually stands on four legs when working for increased stability. In this posture, the surgeon robot resembles an oversized preying mantis. Surgeon robots are equipped with powerful and precise rotors that allow them to fly if necessary. This added movement allows surgeon robots to treat patients in precarious locations during emergency situations. Surgeon robots possess remarkable speed, dexterity, and structural strength, and their design makes them highly adaptable. In addition to sensory inputs that exceed the senses of most living creatures, its creators also added a nanite-powered pharmaceutical lab that is housed deep in the robot's body. Each of its limbs-though seemingly delicate-is crafted from remarkably durable metal that flexes to prevent breakage if the robot attempts to lift more than it can normally carry. Thin claws extend from its two primary limbs, allowing it to deftly and precisely maneuver a patient into the optimal position for each of the dizzying number of procedures the robot is capable of performing. Should a surgeon robot need to defend itself or its patient, its claws are also more than ample weapons. Some surgeon robots have been reprogrammed to accommodate different sorts of patients. Due to exposure to alien creatures or training given by those expecting to venture into places with non-humanoid creatures, the robots contain detailed information on alien physiologies. These surgeon robots can perform surgical procedures on non-humanoid creatures with no increase to the Heal DC. Habitat & Society The Technic League has spent a great deal of effort recovering and reprogramming these robots for its own purposes, which are not limited to simple healing and surgery. Aside from medicine, Technic League agents use these robots as torturers during painful interrogations, or take advantage of the robots' pharmaceutical production to keep subjects drugged for months at a time. Despite such alternate uses, these intelligent constructs have a hardwired directive that Technic League agents have failed to deactivate: an obsessive drive to perfect their craft. Surgeon robots continually attempt to study humanoid physiology. They require new subject matter to study with some regularity, and if denied such opportunities, they take it upon themselves to collect specimens and perform experiments on them-sometimes claiming the same Technic League agents who tried to cow them. These robots are most commonly encountered in Silver Mount, among the Technic League compound in Starfall, or hidden away inside other ruins of Divinity's crash where they once were stationed to provide medical care. However, rogue surgeon robots may also be found in dungeons or caves that they've transformed into their own macabre operating rooms filled with all manner of strange and alien technological devices. On rare occasions, these beings form pacts with other intelligent creatures, bartering their services as surgeons in return for both materials and test subjects. Lacking any sort of conscience or ethical code, surgeon robots make excellent torturers and executioners.",
    organization: "solitary or team (2-6)",
    languages: "Androffan, Common, Hallit",
    spellLikeAbilities: [],
    skills: {
      "Disable Device": {
        ranks: 4
      },
      Heal: {
        ranks: 18,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      "Knowledge (engineering)": {
        ranks: 13
      },
      "Knowledge (local)": {
        ranks: 13
      },
      "Knowledge (nature)": {
        ranks: 13
      },
      Perception: {
        ranks: 21
      },
      "Sense Motive": {
        ranks: 8
      }
    },
    special: {
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "1d6+9"
      },
      "sneak attack": {
        universalMonsterAbility: "Sneak Attack",
        bonus: "3d6"
      },
      syringe: {
        type: "Ex",
        text: "When a surgeon robot makes a successful attack with its syringe, it can inject the target with pharmaceuticals. The robot contains nanites that fabricate the pharmaceuticals stored within its body. Up to 10 doses of these pharmaceuticals can be administered per day. The surgeon robot can choose to affect its target with cardioamp, cureall, hemochem (grade III), torpinal, or zortaphen each time it uses this ability. Rules for these pharmaceuticals can be found on pages 33-34 of Pathfinder Campaign Setting: Technology Guide."
      },
      "master surgeon": {
        type: "Ex",
        text: "Programmed to execute advanced medical procedures, a surgeon robot can perform surgeries and other procedures that heal humanoid creatures of all manner of maladies. A surgeon robot can heal wounds, set broken bones, cure diseases, treat burns, remove poison, and even install cybertech items. These procedures take varying amounts of time for the surgeon robot to complete and require different Heal check DCs. The DCs for these surgical procedures increase by 10 when they're performed on a non-humanoid creature. These procedures leave the patient with the exhausted condition. If the surgeon robot fails any of its Heal checks, the surgery fails and the patient takes 1d4 points of Constitution damage and is exhausted for 24 hours. The procedures a surgeon robot can perform are as follows: • Cure Blindness/Deafness (DC 35): The patient's sight or hearing is restored. Required Time: 30 minutes. • Install Cybertech (DC = 5 + the cybertech install DC): Cybernetic equipment is installed safely. Required Time: 20 minutes per point of implantation of the cybertech being installed. • Minor Surgery (DC 25): The patient is healed of 1d8+1 points of damage. Required Time: 5 minutes. • Moderate Surgery (DC 30): The patient is healed of 2d8+3 points of damage and 1d4+1 points of ability damage to a selected ability score. Required Time: 10 minutes. • Major Surgery (DC 35): The patient is healed of 3d8+5 points of damage and is cured of blindness and deafness. Required Time: 15 minutes. • Critical Surgery (DC 40): The patient is healed of 4d8+7 points of damage and either all ability damage to all ability scores or all ability drain to one ability score. Required Time: 30 minutes. • Treat Toxin (DC = 10 + the save DC of disease or poison): One disease or poison currently afflicting the patient is removed. Required Time: 10 minutes."
      },
      "specialized programming": {
        type: "Ex",
        text: "Heal is always a class skill for surgeon robots, and they gain a +8 racial bonus on Heal checks. Superior Optics (Ex) Surgeon robots see invisible creatures or objects as if they were visible."
      },
      hardness: {
        universalMonsterAbility: "Hardness",
        value: 10
      },
      grab: {
        universalMonsterAbility: "Grab"
      },
      pharmaceutical: {
        type: "Ex"
      }
    }
  },

};
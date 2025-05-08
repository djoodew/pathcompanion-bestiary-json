
export const Maiden__Mother__CroneCreatures = {
  Azgenzak: {
    source: "Maiden, Mother, Crone",
    creatureType: "aberration",
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Large",
    hd: 10,
    hdVal: 8,
    cr: 8,
    racialFeatures: [
      "All-Around Vision",
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 20,
      swim: 20
    },
    abilities: {
      str: 18,
      dex: 17,
      con: 20,
      int: 7,
      wis: 13,
      cha: 12
    },
    feats: [
      {
        name: "Blind-Fight",
        type: "Combat"
      },
      {
        name: "Nimble Moves",
        type: "General"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Perception",
        choiceSource: "Skill Focus"
      },
      {
        name: "Step Up",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Slam",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Slam",
        name: "3 Slams",
        specialAbility: "burn, grab",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to fire, poison"
    ],
    defense: {
      naturalArmor: 10
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "warm and temperate fresh water and swamps",
    visualDescription: "This undulating, amorphous sac is a turgid, brown-black mass scarcely hiding a seething jumble of rounded subcutaneous masses churning within. One end opens into a yawning maw, revealing a fiery cauldron of innumerable, lidless eyeballs of every size, shape, and color, each wreathed in sooty orange flame.",
    description: "Azgenzaks, also called more prosaically \"sacks of burning eyes,\" are shapeless predators of unfathomable appetites and undeniable malevolence. They might have congealed into existence within some forgotten crack of the Outer Rifts, escaping (or being set loose) into the Material Plane ages ago. However, many theorize that these beings are entirely natural, primeval creatures that fell into savagery or never evolved from their primitive state in the first place. Azgenzaks are roughly 8 feet in diameter and weigh over 800 pounds. Ecology Azgenzaks are amorphous, their bodies composed of a flaccid, leathery outer skin enveloping an interior of glistening, wrinkled tissue, which in turn surrounds hundreds of cilia-rimmed sockets that weep flammable mucus. An azgenzak can suppress its flames by squeezing its sac tightly closed, but it rarely does so unless it has need for stealth. If it wishes to maintain its flames even when it dives underwater, it simply enfolds a large bubble of air within its fundus, seals the aperture with a layer of mucus, and inf lates itself into a lumpy spheroid, periodically venting exhaust gases to propel itself through the water. A rush of foul-scented bubbles and brief flares of deep orange below the water's surface usually accompany such venting as jets of flame escape the azgenzak's interior and are snuffed out. Azgenzaks are primarily carnivorous, though they're able to digest any organic material, engulfing it within their flaming cavities. An azgenzak that has recently feasted-having swallowed its prey whole-might sink to the bottom of a body of water and enfold itself to slowly digest its meal, settling into a torpor for days or even weeks at a time. If undisturbed, a hibernating azgenzak might appear indistinguishable from an algae-covered boulder, a rotting log, or submerged carrion. Azgenzaks reproduce by asexual budding, which is abetted in some unknown way by the vitreous humors found within eyeballs. Its drive to extract the eyes of its prey is to further of its attempts at reproduction, as the distilled essence of the eyes it steals germinates tissue buds within the depths of its stomach. These buds then replicate and mat together into a translucent sheath of tissue, with a portion of the eyes within the azgenzak adsorbing into this sheath as it grows. Once a sufficient sheath-mass has accreted, it begins sloughing off from the parent azgenzak's stomach walls, and is eventually disgorged and discarded in a steaming puddle of semisolid translucent slime shot through with eyeballs. Now ravenously hungry, the parent moves on to feast elsewhere and replenish its discarded mass. Meanwhile, the newly birthed azgenzak begins to darken and congeal, baked from within by the unquenchable heat of its burning eyes, even as its outer tissues are tempered by exposure to open air and water, gradually toughening into a mottled brown outer skin. Gorging itself on organic matter, the newly formed azgenzak matures within a month and can begin to unleash the swarming pyrocules that are its deadly signature. Habitat & Society Azgenzaks are solitary creatures, despising the presence of others of their kind as rivals for their hunting terrain. They prefer to make their dens in murky lakes, though they are equally happy in swamps, bogs, and even slow-moving rivers. They are not powerful swimmers and avoid fast-moving water, though they are perfectly capable of climbing out of the water and traversing land in an undulant slither. Their malleable mass is able to ooze over, around, and between obstacles that might block the passage of a more solid creature. Azgenzaks are sometimes confused with will-o'-wisps in folktales and legends, as both dwell in boglands and are blamed for mysterious marshlights that lead travelers to their doom. This is because azgenzaks are thought of more in terms of the swarming pyrocules they unleash rather than their true bodies-the strings of floating, flaming eyes are often believed to be the true creature and the \"bag\" of its body a gate to Hell, a fleshy opening into the Abyss, or a shroud stitched from the skins of its victims. In many cultures, strange bubbling and dancing marshlights below the water or bobbing above bogs are seen as portents of death even when seen in the far distance, regardless of the creature responsible. In lands where azgenzaks are known to dwell, animals are often blindered at night and children are taught to keep shutters and curtains drawn tight to avoid seeing the deadly lights. In truth, azgenzaks are fairly simple creatures, mostly interested in their next meal. That said, they prefer the flesh of sentient victims and the screams of victims perishing in fear and fire. While they have no love for will-o'-wisps, they do sense a certain kinship with them, and more importantly they perceive the advantages of working with them to secure prey. Will-o'-wisps themselves offer no sustenance for an azgenzak, with their nearly immaterial bodies, but an azgenzak's ability to instill fear has much to offer hunting will-o'-wisps. The two creatures thus sometimes work in concert, with the azgenzak feasting physically upon its victims while the will-o'-wisp feeds psychically.",
    organization: "solitary",
    languages: "Aklo",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 1
      },
      Perception: {
        ranks: 10
      },
      Stealth: {
        ranks: 3,
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
      burn: {
        universalMonsterAbility: "Burn",
        saveDC: 10,
        damage: "1d6"
      },
      "burning blindness": {
        type: "Su",
        text: "When an azgenzak confirms a critical hit or a creature fails its save against the distraction attack of its swarming pyrocules, the azgenzak attempts to pluck out one of the target's eyes (Fortitude DC 20 negates). If the save fails, the target takes 1d6 additional points of fire damage, is sickened by pain for 1d4 rounds, and becomes permanently dazzled. If this results in the loss of all of the target's eyes, it is permanently blinded."
      },
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "1d6+4"
      },
      "swallow whole": {
        universalMonsterAbility: "Swallow Whole",
        damage: "2d6 fire",
        hp: "9 hp",
        AC: "AC 15"
      },
      "swarming pyrocules": {
        type: "Su",
        text: "As a full-round action, an azgenzak can disgorge a swarm of burning eyeballs. This swarm has the same statistics as a bat swarm (Pathfinder RPG Bestiary 30), except it lacks the wounding special ability, which is replaced by the azgenzak's burn ability and immunity to fire. An azgenzak using this ability takes 2d6 points of damage (though damage dealt to the swarming pyrocules does not damage the azgenzak). The swarming pyrocules can't survive long separated from the azgenzak, and take 1 point of damage each round at the end of its turn. The swarming pyrocules can be reabsorbed by the azgenzak as a full-round action, healing the creature of 1d6 points of damage."
      },
      amphibious: {
        universalMonsterAbility: "Amphibious"
      },
      compression: {
        universalMonsterAbility: "Compression"
      },
      inversion: {
        type: "Ex",
        text: "As a move action, an azgenzak can invert its sac-like body, turning itself inside out and exposing its innumerable burning eyes. Doing so surrounds the azgenzak with a fiery aura and activates its frightful presence ability. These abilities are suppressed when the azgenzak is not inverted. When it's inverted, creatures adjacent to the azgenzak take 2d6 points of fire damage and risk catching on fire. A successful DC 16 Reflex save halves this damage and keeps the creature from catching on fire. An inverted azgenzak loses its racial bonus to Stealth underwater and takes a further -10 penalty on Stealth checks. In addition, when inverted, an azgenzak can't swallow its victim whole; however, if it begins its turn with a creature grappled, it can revert itself as a move action and then use its swallow whole ability. A creature swallowed by an azgenzak is subject to its fiery aura and frightful presence even when the azgenzak is not inverted."
      },
      amorphous: {
        universalMonsterAbility: "Amorphous"
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "30 ft.",
        saveDC: null
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  Andrazku: {
    source: "Maiden, Mother, Crone",
    creatureType: "outsider",
    subTypes: [
      "chaotic",
      "cold",
      "demon",
      "evil",
      "extraplanar"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 6,
    hdVal: 10,
    cr: 5,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Scent"
    ],
    speed: {
      base: 30,
      climb: 30
    },
    abilities: {
      str: 21,
      dex: 13,
      con: 18,
      int: 10,
      wis: 11,
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
        weapon: "Slam",
        name: "2 Slams",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "bleed",
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
    defense: {
      DR: {
        value: 5,
        damageType: "cold iron or good"
      },
      SR: {
        value: 16
      },
      naturalArmor: 7
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Abyss)",
    visualDescription: "This burly, primitive-looking creature has an ape-like upper body, demonic horns, cloven hooves, and skin the color of a snow-buried corpse.",
    description: "Andrazkus are thugs who use their strength to lord over weaker creatures. Their hatred is cold and seething, prone to suddenly snapping in an avalanche of ice and crushing blows. Birthed from the protomatter of the Abyss with natural gifts for tracking and subduing prey, they are sometimes used as trackers and jailors by more powerful demons who need to find lost prisoners and slaves. From the waist up these demons are built much like strong, hairy humans or dwarves, but with exaggerated proportions resembling those of a gorilla. Their thick necks sport bristling manes that merge with the hair on their backs, and their flat faces bear two ramlike horns and cold eyes filled with hate. Their breath is a freezing fog, and their teeth are small but numerous, like a shark's. An andrazku's legs seem small in comparison to its torso, bend backward like a satyr's, and end in large cloven hooves. Their skin is the dead blue of a frozen corpse or a frost giant. Their top-heavy builds mean they have difficulty standing upright and normally assume a hunched posture; many prefer to walk and run on all fours, like apes. An andrazku is 7 feet tall at the shoulder and weighs 450 pounds. Ecology An andrazku forms from the soul of a chaotic mortal who hated women and used his or her power to oppress and demean them, such as a tyrant who selectively enforced laws against women, a priest who preached that women are the source of all sin, or a father who secretly beat his wives and daughters for their supposed failures. For this reason andrazkus are known to scholars as \"misogyny demons.\" Few of these souls dared to greater crimes (which would cause their souls to become incubi or babaus), nor were they once mortals who hated women but never acted upon their hatred-an andrazku only forms from a soul filled with suff icient hatred toward women to provoke action, but that is hampered by enough cowardice to prevent it from performing acts of greater evil. Most of them were male mortals, but an especially misogynistic evil female creature might become an andrazku in the Abyss. An andrazku grows excited when it senses its prey's fear, but becomes frustrated if the hunt lasts for too long. Despite these demons' masculine appearance and aggression, most of them are impotent and some completely lack genitalia, rendering their lust pointless. Their nature is to berate, degrade, and beat; they tend to kill only when they feel an urge to eat, when their stymied passion becomes too great to tolerate, or when they are mocked for their shortcomings. An andrazku prefers to attack with its bite and fists (often contemptuously slapping foes, minions, and prey with an open hand), but a vicious one may use a scourge and jagged-bladed sword as if pretending to be a balor. Sadistic and cruel, andrazkus have been known to chase down their prey, batter it for a while, and then release it, giving it enough of a head start that it thinks it has a chance of escaping. The andrazkus then track it down (using locate creature and teleport) to repeat the cycle again. An andrazku in a position of authority likes to mark its minions and slaves with a scar on one side of the face indicating the demon's ownership. The demon typically uses its breath weapon to freeze a metal brand until it is cold enough to leave a permanent mark. If a slave is resistant or immune to cold, the demon uses a knife to carve its mark into one side of the creature's face. Because of their long-simmering tempers and magical abilities, andrazkus are often called \"cold demons,\" and they mainly live in frigid Abyssal realms such as Jhuvumirak, home of demon lord Kostchtchie. Their intolerance of fire (despite their demonic resistance to it) and the cowardly nature of their origin-sin make them laughingstocks among demons (particularly babaus and incubi); as a result, andrazkus are sullen, resentful, and prone to take out their frustrations on weaker creatures- especially if said creatures are female. Andrazkus prefer to lair in ice caves or tunnels dug out of hard-packed snow. Some take advantage of their cold immunity and strong swimming ability to live in simple shelters on ice floes. An andrazku's hooves and huge hands allow it to cling to ice as though it were rough stone, preventing it from slipping and allowing it to use much of the vertical space in its lair to store treasure and observe intruders. Habitat & Society Andrazkus loathe associating with more powerful female demons in any way, and curse under their breath at mariliths and similar demons of great stature. Among female demons of similar power, they are quick with clever words, believable boasts, and secret confessions of desire, but these are all lies to disguise the hatred crackling beneath the surface. If given the opportunity, an andrazku would capture and torture a succubus merely because she is female (though a succubus is physically more powerful than a lone misogyny demon, and the hairy brutes have to gang up to have any chance of defeating a \"weakling\" succubus). Succubi and mariliths are aware of these simple-minded feelings held by andrazkus and they delight in tormenting the brutish creatures. Those female demons know they hold greater strength and power than andrazkus, and they enjoy lording over the creatures, even going so far as to kidnap them from time to time, bringing them to their own lairs and forcing the creatures into servitude. Andrazkus band together for strength, using their telepathy to silently coordinate their attacks. They often taunt their prey telepathically, either with words, promises of violence, or mocking laughter. When set loose on the Material Plane, an andrazku usually forces itself into a position of power over a humanoid tribe. Some ally with frost giant tribes, especially those who worship Kostchtchie. Duller ones find better company among girallons and dire apes. Summoning Andrazku Andrazkus are receptive to flattery about their size and strength. They like offers of weapons and strength-enhancing items as payment for their services. They can be assigned to guard, hunt, or retrieve; any Charisma check attempted as part a spell to convince an andrazku to undertake a mission other than these kinds of tasks takes a -2 penalty. A female summoner has a -10 penalty on all Charisma checks made to bargain unless the caster acts inferior and unworthy of the demon's aid.",
    organization: "solitary, pair, or gang (3-8)",
    languages: "Abyssal, Giant; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "cause fear",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "locate creature",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "teleport",
        casterLevel: 6,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: 3
      },
      {
        name: "righteous might",
        casterLevel: 6,
        timesPerDay: 1
      },
      {
        name: "summon",
        casterLevel: 6,
        limitations: "level 3, 1 andrazku 25%",
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 6
      },
      Climb: {
        ranks: 0
      },
      Intimidate: {
        ranks: 6
      },
      Perception: {
        ranks: 6,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      "Sense Motive": {
        ranks: 6
      },
      Survival: {
        ranks: 6
      },
      Swim: {
        ranks: 5
      }
    },
    special: {
      bleed: {
        universalMonsterAbility: "Bleed",
        damage: "1d4"
      },
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "10-ft. cone",
        damage: "usable every 1d4 rounds"
      },
      "mutilating gouge": {
        type: "Ex",
        text: "If the andrazku hits with both slams in the same round, its target must succeed at a DC 17 Fortitude save or take 1 point of Charisma damage. The DC is Constitution-based."
      },
      "powerful charge": {
        universalMonsterAbility: "Powerful Charge",
        type: "Ex",
        weaponName: 6
      },
      icewalking: {
        type: "Ex",
        text: "This ability works like the spider climb spell, but the surfaces the demon climbs must be icy. The demon can move across icy surfaces without penalty and does not need to attempt Acrobatics checks to run or charge on ice."
      }
    }
  },

  Kokogiak: {
    source: "Maiden, Mother, Crone",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Neutral Evil"
    ],
    size: "Huge",
    hd: 15,
    hdVal: 10,
    cr: 12,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 40,
      burrow: 20,
      climb: 20,
      swim: 20
    },
    abilities: {
      str: 31,
      dex: 13,
      con: 22,
      int: 13,
      wis: 14,
      cha: 16
    },
    feats: [
      {
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Claw",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Vital Strike",
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
        name: "Staggering Critical",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Claw",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "pull",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "6 Claws",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to cold, illusions"
    ],
    defense: {
      naturalArmor: 16
    },
    space: "15 ft.",
    reach: "10 ft. (20 ft. with bite)",
    environment: "cold coastlines, hills, or plains",
    visualDescription: "This hulking mountain of fur and fangs looks like a white-furred bear of immense proportions with ten legs, each ending in massive, jet-black claws. Its head, with slavering jaws and a tongue dripping silvery foam, sits at the end of a long yet thickly muscled neck. Its dead black eyes are small but infinite pits of malice.",
    organization: "solitary or pair",
    languages: "Aquan, Common",
    spellLikeAbilities: [
      {
        name: "fog cloud",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "ventriloquism",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "major image",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "solid fog",
        casterLevel: 15,
        timesPerDay: 3
      }
    ],
    skills: {
      Bluff: {
        ranks: 15
      },
      Climb: {
        ranks: 1
      },
      Perception: {
        ranks: 13
      },
      Stealth: {
        ranks: 7,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Swim: {
        ranks: 1
      }
    },
    special: {
      "blizzard breath": {
        type: "Su",
        text: "A kokogiak's breath weapon is a polar gale so bitterly cold that it saps vigor from those it touches. Once every 1d4 rounds as a standard action, a kokogiak can expel a 60-foot cone of blistering arctic winds, dealing 8d6 points of cold damage to all creatures struck. A successful DC 23 Reflex save halves this damage. Any creature damaged by this attack must then succeed at a DC 23 Fortitude save or become fatigued (or exhausted if it was already fatigued). The save DCs are Constitution-based."
      },
      "forlorn gaze": {
        type: "Su",
        text: "As a standard action, a kokogiak can lock its black eyes on a target within 60 feet to fascinate the creature. A successful DC 20 Will save negates this effect. Creatures that fail the save are fascinated and they see they kokogiak as a lost loved one, trusted friend in danger, or ally in desperate need. Once a creature is fascinated, the kokogiak can compel the creature to move toward it. Once adjacent, the creature is flat-footed against the kokogiak's attacks, but the creature receives a new saving throw at the beginning of its turn to break the fascination. This is a mind-affecting effect and the save DC is Charisma-based."
      },
      pull: {
        universalMonsterAbility: "Pull",
        attack: "bite",
        distance: "10 ft."
      },
      "ice walker": {
        type: "Ex",
        text: "A kokogiak takes no penalty to speed or on Acrobatics, Climb, or Stealth checks in snowy or icy terrain or weather conditions. It can walk across snow crusts or thin ice without breaking through. In addition, a kokogiak can choose to not leave tracks when moving in this type of terrain."
      },
      "penetrating sight": {
        type: "Ex",
        text: "A kokogiak's sight is not affected by its own fog cloud or solid fog spell-like abilities. In addition, a kokogiak does not take any penalties on Perception checks while its snowing."
      },
      "sound imitation": {
        type: "Ex",
        text: "A kokogiak can mimic any voice or sound it has heard by making a successful Bluff check against a listener's Sense Motive check."
      }
    }
  },

  Sangoi: {
    source: "Maiden, Mother, Crone",
    creatureType: "fey",
    subTypes: [],
    alignments: [
      "Neutral Evil"
    ],
    size: "Small",
    hd: 11,
    hdVal: 6,
    cr: 7,
    racialFeatures: [
      "Hear Heartbeat",
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 13,
      dex: 21,
      con: 16,
      int: 14,
      wis: 12,
      cha: 19
    },
    feats: [
      {
        name: "Dodge",
        type: "Combat"
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
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Spring Attack",
        type: "Combat"
      },
      {
        name: "Weapon Finesse",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Dagger",
        name: "Dagger",
        damage: "1d4"
      },
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        bonuses: [
          {
            source: "inherent",
            value: "1d4",
            appliesTo: "damageType",
            damageType: "bleed"
          }
        ],
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        bonuses: [
          {
            source: "inherent",
            value: "1d4",
            appliesTo: "damageType",
            damageType: "bleed"
          }
        ],
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "silver"
      },
      naturalArmor: 3
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any cold or temperate land",
    visualDescription: "Dressed in tattered finery, this small, bald humanoid has a gaunt and haggard face with sallow skin drawn tight against its delicate bones. Its fingers and nails are unnaturally long and spidery, its teeth needle-sharp, and its body so thin it seems it could almost disappear if it turned sideways.",
    description: "Sangois are malevolent nocturnal fey that haunt small towns and graveyards. Because of their taste for blood and their similar habits, they are sometimes mistaken for vampires. Sangoi appear as short, emaciated humanoids seldom over 4 feet tall and weighing 35 to 40 pounds. Ecology Sangois thirst for the blood of the living, preferring humanoid blood, but settling for animal blood when humanoids are in short supply or when they are operating in disguise and do not wish to reveal their presence with an open attack. Though it is much harder to acquire, they are especially fond of the blood of good-aligned magical beasts, unicorns in particular. While blood provides physical nourishment for them, they also draw psychic sustenance from inflicting anguish and despair. Sangois are expert trappers, catching large and small animals with magic or mundane snares. Trapped beasts might be mutilated for a sangoi's pleasure, though the wicked fey more likely dominates them and uses them to commit murder and mischief. Habitat & Society Sangois are natives of the fey realms of the First World, but they spend little time there. Most of their time is spent roaming the Material Plane, lurking in shadows and places where death and sorrow linger, such as graveyards and ruins. They are wanderers, moving from village to village in search of their next victims. When a target is located, a sangoi (or, rarely, a pair of sangois working together) seeks to isolate the victim in order to murder it and take its form. The sangoi poses as its victim, while draining the emotional, mental, and physical energy out of those that give them succor with its curse of misery. Sangoi consider themselves hunters of a sort, seeking children born with certain unique characteristics or deformities, such as those born covered with a caul, or who bear a particular birthmark or hair or eye color. Sangois fear those with such marks, whatever they might be, believing they render them powerless against such creatures and that if those with the marks are able to grow to maturity, they will bring ruin to the sangoi. Each individual sangoi has its own particular mark it grows to fear. Children so marked are spirited away from their mortal parents and slain, sold as slaves to an evil fey master, or simply imprisoned in the depths of a sangoi's lair, all to quell whatever threat the sangois believe they pose. When such a child is found, a sangoi begins lurking about the home in the guise of an animal and might even take the form of a pet to attract the child's affection. Its curse falls upon the household with this infiltration, though sangois credit their chosen targets with immunity to their powers, or even the ability to block their powers from affecting others. Sangois attempt to abduct their targets at birth when possible, but often they do not discover them until a target is older. In such cases, sangois try to kill or kidnap their targets using dominated wild animals or traps set up to look like natural accidents. Once a victim has been taken, a sangoi changes its shape to assume the victim's form, usually spending several days reading the victim's thoughts or speaking with its corpse to learn about it so it might better impersonate him. The sangoi then returns to the victim's home and assumes its life, going about his daily business while keeping out of direct sunlight when possible, often feigning illness or injury. Once the sangoi enters its victim's home, its curse of misery begins to take hold, sapping the life and spirit from the family and friends of its victim. The sangoi amuses itself with the abuse and murder of domestic animals through traps and magical compulsion, and calls foul weather to cast a pall upon the house while it waits for the family of its victim to slip into ennui. Once those in the house fall into utter despair, the sangoi plans elaborate murders in which it renders its targets helpless, often with traps using common household objects and implements, and then carves out and greedily devours the hearts of its helpless victims, savoring the sour tang of fear that lingers in broken hearts even after death.",
    organization: "solitary or pair",
    languages: "Aklo, Common, Sylvan; tongues",
    spellLikeAbilities: [
      {
        name: "hide from animals",
        casterLevel: 11,
        limitations: "self only",
        timesPerDay: -1
      },
      {
        name: "hide from undead",
        casterLevel: 11,
        timesPerDay: -1
      },
      {
        name: "detect thoughts",
        casterLevel: 11,
        timesPerDay: -1
      },
      {
        name: "tongues",
        casterLevel: 11,
        timesPerDay: -1
      },
      {
        name: "animal trance",
        casterLevel: 11,
        timesPerDay: 3
      },
      {
        name: "invisibility",
        casterLevel: 11,
        limitations: "self only",
        timesPerDay: 3
      },
      {
        name: "snare",
        casterLevel: 11,
        timesPerDay: 3
      },
      {
        name: "control weather",
        casterLevel: 11,
        timesPerDay: 1
      },
      {
        name: "dominate animal",
        casterLevel: 11,
        timesPerDay: 1
      },
      {
        name: "speak with dead",
        casterLevel: 11,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 11
      },
      Bluff: {
        ranks: 11
      },
      Craft0: {
        subSkill: "traps",
        ranks: 5
      },
      Diplomacy: {
        ranks: 3
      },
      Disguise: {
        ranks: 11
      },
      "Escape Artist": {
        ranks: 2
      },
      Intimidate: {
        ranks: 11
      },
      "Knowledge (local)": {
        ranks: 5
      },
      "Knowledge (nature)": {
        ranks: 5
      },
      Perception: {
        ranks: 11
      },
      "Sleight of Hand": {
        ranks: 2
      },
      Stealth: {
        ranks: 11
      }
    },
    special: {
      "blood rage": {
        universalMonsterAbility: "Blood Rage"
      },
      "curse of misery": {
        type: "Su",
        text: "As a full-round action, a sangoi can deliver its curse to an adjacent humanoid as a melee touch attack. If the target fails its saving throw, the sangoi gains the benefit of aid (caster level equal to the target's Hit Dice). In addition, a sangoi gains a +2 morale bonus on attack rolls, weapon damage rolls, saving throws, and opposed skill checks against any creature affected by its curse of misery. A creature that successfully saves can not be affected by the same sangoi's curse for 24 hours. The save DC is Charisma-based. Curse of Misery: Touch-contact; save Will DC 19; frequency 1 day; effect permanent crushing despair. Hear Heartbeat (Ex) A sangoi can hear the beating hearts of living creatures nearby, granting it Blindsense 30 feet and Blindsight 5 feet; it can locate all creatures taking bleed damage within 30 feet as if it had Blindsight. This ability does not reveal the location of creatures without hearts, including elementals, oozes, plants, undead, and incorporeal creatures."
      },
      "horrific critical": {
        type: "Ex",
        text: "When a sangoi enters a blood rage, its claws and teeth elongate and sharpen, threatening a critical hit on a roll of 18-20 (in addition to the other benefits of blood rage). If a sangoi reduces a humanoid to -1 or fewer hit points with a critical hit from one of its natural weapons, it can tear out the target's heart and consume it as a free action (Fortitude DC 19 negates), killing it instantly. If successful, the sangoi gains 1d8 temporary hit points and a +2 enhancement bonus to Strength. Any humanoid within 30 feet who witnesses this attack must succeed at a DC 19 Will save or become shaken and sickened for 1d4 rounds (this is a mind-affecting fear effect). The save DCs are Charisma-based."
      },
      "sneak attack": {
        universalMonsterAbility: "Sneak Attack",
        bonus: "2d6"
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "Medium or Small land animal or humanoid"
      },
      "sideways glance": {
        type: "Su",
        text: "Sangois fade from view when in a creature's peripheral vision. They automatically gain concealment against creatures that they flank with another creature (another sangoi or otherwise). They can also attempt a Bluff check to feint in combat as a swift action, but only against a foe that can clearly see them."
      },
      "sunlight transparency": {
        type: "Ex",
        text: "Direct sunlight causes a sangoi to partially fade from view. Their bodies become almost transparent (20% miss chance), and they become fatigued and take a -10 penalty on Disguise checks as long as they remain in direct sunlight."
      }
    }
  },

};
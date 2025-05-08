
export const Pyramid_Of_The_Sky_PharaohCreatures = {
  "Festering Ulunat, The Unholy First": {
    source: "Pyramid Of The Sky Pharaoh",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Colossal",
    hd: 30,
    hdVal: 10,
    cr: 24,
    racialFeatures: [
      "Darkvision 600 ft.",
      "Low-Light Vision",
      "Tremorsense 600 ft."
    ],
    speed: {
      base: 60,
      climb: 60,
      maneuverability: "Poor",
      fly: 90,
      swim: 40
    },
    abilities: {
      str: 38,
      dex: 21,
      con: 35,
      int: 3,
      wis: 30,
      cha: 20
    },
    feats: [
      {
        name: "Awesome Blow",
        type: "Combat"
      },
      {
        name: "Blind-Fight",
        type: "Combat"
      },
      {
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Greater Sunder",
        type: "Combat"
      },
      {
        name: "Improved Bull Rush",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Claw",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Sunder",
        type: "Combat"
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
        name: "Lightning Reflexes",
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
        name: "Stunning Critical",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        bonuses: [
          {
            source: "inherent",
            value: "6d6",
            appliesTo: "damageType",
            damageType: "acid"
          }
        ],
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "4 Claws",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to ability damage, bleed, disease, energy drain, fire, mind-affecting effects, paralysis, permanent wounds, petrification, poison, polymorph, sonic"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "epic"
      },
      SR: {
        value: 35
      },
      naturalArmor: 35
    },
    space: "60 ft.",
    reach: "60 ft.",
    environment: "any (Sothis)",
    visualDescription: "",
    description: "The stories from the beginning of the First Age of Osirion claim that Azghaad killed Ulunat-some even say that he achieved this feat with the divine help of Nethys-but the truth is that the Spawn of Rovagug are unkillable. After a lengthy and dangerous battle, Azghaad banished Ulunat to a pocket realm beneath the place where its bloated shell still stands. In this realm, under the oldest and largest settlement in Osirion, Ulunat sleeps. Before this ancient conf lict, the great beast emerged from the Pit of Gormuz and thundered across Golarion. As Ulunat neared what is now Sothis, cultists of Rovagug channeling the power of raw chaos in a massive ritual- chanting cacophonous praises to the Rough Beast- opened a direct link between Ulunat and Rovagug. Empowered by this divine connection, Ulunat grew to an immense size and charged across the land, trampling everything in its path. Now, thousands of years later, the Unholy First has begun to stir in its prison. Numerous past attempts to free the Unholy First have failed, and most of these were hidden from the public and Osirion's official history in hopes that the proper method for freeing Ulunat would remain unknown. However, this doesn't stop cultists and doomsayers from trying to bring back the terrible beast. Bolstered by recently discovered information, a cult of Rovagug has created a key that they know can unlock Ulunat's prison. Using this key, they perform a ritual that breaks open Azghaad's prison and unleashes Festering Ulunat on Osirion once more. Fueled by their chaotic power and Rovagug's fury, the beast erupts from hibernation, destroying everything beneath the Black Dome. Once it reaches the bounds of its ancient carapace, it effectively molts, bursting fully formed from its old shell into Sothis.",
    organization: "unique",
    languages: "Aklo (can't speak)",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 1
      },
      Fly: {
        ranks: 20
      },
      Perception: {
        ranks: 17
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      crush: {
        universalMonsterAbility: "Crush",
        text: "Ulunat uses its immense size as a formidable weapon. As a standard action, Ulunat can move over enemies or objects, using its whole body to crush them, dealing 20d6+30 points of damage. Crush attacks are effective only against opponents that are Huge or smaller. This attack affects as many creatures as fit in Ulunat's space. Creatures in the affected area must succeed at a DC 39 Reflex save or be pinned, automatically taking bludgeoning damage during the next round unless Ulunat moves off them. If Ulunat chooses to maintain the pin, it must succeed at a combat maneuver check as normal. Pinned foes take damage from the crush each round if they don't escape. The save DC is Strength-based."
      },
      "devour magic": {
        type: "Ex",
        text: "Ulunat has the ability to absorb magic directed at it and create arcane feedback that has the potential to shred a spellcaster's mind. Whenever Ulunat is targeted by a spell or spell-like ability, the caster must succeed at a DC 30 Will save or be affected as if he were targeted by phantasmal killer. If Ulunat is in the area of effect of a spell or spell-like ability, the caster must succeed at a DC 30 Will save or be affected as if he were targeted by insanity. The save DC is Charisma-based."
      },
      rend: {
        universalMonsterAbility: "Rend",
        type: "Ex",
        weaponName: 1
      },
      "thunderous steps": {
        type: "Ex"
      },
      trample: {
        universalMonsterAbility: "Trample",
        damage: "4d8+21",
        saveDC: 10
      },
      "terrible claws": {
        type: "Ex",
        text: "Ulunat's natural weapons ignore all forms of damage reduction and hardness. Tremor Step (Ex) Ulunat's thunderous steps shake the ground as it moves. While moving along the ground, any creatures within 100 feet of Ulunat that are also in contact with the ground must succeed at a DC 39 Reflex save or be knocked prone as the beast thunders along. The save DC is Strength-based."
      },
      hibernation: {
        type: "Ex",
        text: "Ulunat can sleep for centuries and doesn't need to eat during these periods of dormancy, though it eats ravenously and almost constantly once it has been awakened. If Ulunat is forced into an inhospitable environment, it goes into hibernation until conditions are right for it to reawaken. While in hibernation, Ulunat's damage reduction improves to 50/epic and it gains immunity to any spell or spell-like ability that allows spell resistance as well as all divination effects."
      },
      massive: {
        type: "Ex",
        text: "Because of Ulunat's size, uneven ground and other terrain features that form difficult terrain generally pose no significant hindrance to its movement, though forests or settlements are considered difficult terrain. A Huge or smaller creature can move through any square Ulunat occupies, and vice versa. Ulunat can make attacks of opportunity only against foes that are Huge or larger, and can be flanked only by Huge or larger foes. Ulunat gains a bonus for being on higher ground only if its entire space is on higher ground than that of its target. It's possible for a Huge or smaller creature to climb Ulunat with a successful DC 30 Climb check, however unlike the normal rules regarding Ulunat and attacks of opportunity, a Small or larger creature that climbs on Ulunat provokes an attack of opportunity from the monster."
      },
      "no breath": {
        universalMonsterAbility: "No Breath",
        text: ""
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        value: null
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "300 ft."
      }
    }
  },

  Ammut: {
    source: "Pyramid Of The Sky Pharaoh",
    creatureType: "outsider",
    subTypes: [
      "evil",
      "native"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Huge",
    hd: 20,
    hdVal: 10,
    cr: 18,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Scent",
      "Tremorsense 60 ft.",
      "True Seeing"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 36,
      dex: 22,
      con: 29,
      int: 11,
      wis: 24,
      cha: 29
    },
    feats: [
      {
        name: "Blind-Fight",
        type: "Combat"
      },
      {
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Improved Bull Rush",
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
      },
      {
        name: "Quicken Spell-Like Ability",
        type: "Monster",
        value: "Ear-piercing scream",
        choiceSource: "Quicken Spell-Like Ability"
      },
      {
        name: "Staggering Critical",
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
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to disease, exhaustion, fatigue, fire, poison"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "good and slashing"
      },
      SR: {
        value: 29
      },
      naturalArmor: 20
    },
    space: "15 ft.",
    reach: "10 ft. (15 ft. with bite)",
    environment: "any (Osirion)",
    visualDescription: "This massive creature has the head of a crocodile, the mane and torso of a lion, and the hindquarters of a hippopotamus. The wickedly curved claws on the creature's forepaws pale in comparison to the danger of its mighty jaws.",
    description: "Ammuts are beastly but cunning creatures that consume souls in an attempt to satisfy their insatiable hungers. Few ammuts exist, and those that do wander the vast deserts of Osirion preying on the souls of any creature they can catch. These creatures prefer the taste of thoroughly evil souls or those who have experienced full and complex lives. Ammuts show disdain for creatures of inferior intelligence, but also tend to leave them alone, as they claim their souls are shallow and flavorless. The rarity of ammuts and their nomadic nature makes it difficult to determine how long they live, or even if they age at all. Ammuts are approximately 20 feet long and 9 feet tall at the shoulder. Their rounded and muscular hindquarters makes them denser than would be expected for their size, and ammuts can weigh up to 10 tons. Ecology Ammuts live among the ruins scattered throughout the Osirian deserts, often lairing in abandoned and lost temples of the gods of Ancient Osirion. When outside their lairs, ammuts bury themselves in sand to await the arrival of a suitable meal. An ammut is covered in fur ranging from sandy-colored to dark brown, with shorter fur on its back and legs, and a long mane behind its head that covers its shoulders. Its snout and face are layered in reptilian scales that are usually crusted with sand that has partially fused into glass from the heat of its breath. Ammuts never tire, and once an ammut notices a creature that it considers suitable prey, it's unrelenting- stalking its prey for hundreds of miles if need be before running it down. These terrifying chases generally don't last long, as the ammut makes use of a high-pitched scream that dazes prey long enough to allow the beast to catch and devour them. If that tactic fails to net the ammut its meal, it can also use its powerful force of will to dominate its prey, using telepathy to convince the victim to approach. Creatures that try to hide from an ammut using illusions soon find those plans foiled, as ammuts can see through illusions cast by even the most powerful mages. The only way to truly escape an ammut once it selects you as its quarry is to confront and defeat the beast. Fire burns within the core of an ammut, and the heat generated by an ammut's inner fires can sometimes fuse the sand it passes through into glassy depressions in the desert floor. The best desert guides can recognize these signs (called \"blaze bowls\") and avoid areas in which an ammut might be lurking. Habitat & Society Ammuts are lone predators, and are so rare their social structures (if any) and method of reproduction are unknown. No live specimen has ever been caught for observation, because the inner fires of the ammut consume the creature's body quickly upon its death, leaving little to be studied besides ash and brittle glass formed from fused sand. Every so often, a peddler in the markets of Eto or Shiman-Sekh will claim to possess a rare piece of an ammut's body (such as one of its teeth or an eye) that they try to sell to foreigners and treasure hunters. Most native Osirians know to ignore such claims, but outsiders may be gullible enough to buy the extremely expensive fakes as souvenirs. One of the few things peddled in these markets that actually has a connection to ammuts are pieces of their blaze bowls. Sometimes brave explorers come across one of these glassy depressions, and remain in the area long enough to try to carefully remove the fused sand in one whole piece. More often than not these efforts are fruitless, as the brittle glass often crumbles if mishandled. Because ammuts are so rare, the libraries of Osirion contain records of only two-dozen confirmed sightings, though it's likely that many more encounters ended with no one left to report the event. Osirian scholars have estimated, based more on reports of the telltale blaze bowls than of actual ammuts, that there are perhaps twenty to thirty of the creatures roaming the vast wasteland between the Junira River and the River Sphinx, though a single sighting near the Ruins of Tumen suggests the ammuts are not confined between those waterways. No record of a peaceful encounter with an ammut exists, suggesting that they have no interest in anything other than feeding on the souls of those who cross their paths. The origin of the ammuts is shrouded in mystery, though it's thought that they descended from a single creature of their kind that was more powerful than all existing ammuts combined. This mythical ammut is sometimes referred to in Ancient Osiriani scrolls where it has the position of judging the souls of the dead-a role already assumed by Pharasma. Because of this conf lict, scholars argue about the creatures' true origin. Though it is generally agreed that ammuts migrated to Golarion from another plane long ago, many scholars disagree on the exact planar origin. Some scholars claim that ammuts are perhaps descended from a race of devils, while others claim the lineage stems from the divs. The most logical association of a fiendish origin is rooted in daemonkind. That ammuts are connected with souls and have the ability to utterly consume them certainly lends to this hypothesis.",
    organization: "solitary",
    languages: "Celestial, Infernal; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "detect evil",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "detect good",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "detect chaos",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "true seeing",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "ear-piercing scream",
        casterLevel: 14,
        limitations: "Metamagic: Quicken ",
        timesPerDay: 3
      },
      {
        name: "dominate monster",
        casterLevel: 14,
        timesPerDay: 1
      }
    ],
    skills: {
      Climb: {
        ranks: 11
      },
      Intimidate: {
        ranks: 21
      },
      "Knowledge (planes)": {
        ranks: 17
      },
      "Knowledge (religion)": {
        ranks: 20
      },
      Perception: {
        ranks: 20
      },
      "Sense Motive": {
        ranks: 20
      },
      Stealth: {
        ranks: 20
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "30-ft. cone",
        damage: "usable every 1d4 rounds"
      },
      "devour soul": {
        type: "Su",
        text: "If a creature dies while swallowed whole by an ammut, its soul is consumed along with its body. A creature killed in this way cannot be brought back to life via any effect short of true resurrection, miracle, or wish, but even these spells require the caster to succeed at a caster level check equal to 10 + the targeted creature's Hit Dice. If this check fails, the caster can't attempt to return the targeted creature to life for the next 24 hours (though the caster can try again after this period)."
      },
      "powerful jaw": {
        type: "Ex",
        text: "An ammut's bite attack deals 4d6 points of damage plus one and a half times its Strength bonus. In addition, its reach with this attack is 5 feet further than normal and it gains the grab ability when attacking with its bite. Swallow Whole (Ex) An ammut can swallow creatures size Large or smaller with this special ability, and can only swallow one creature at a time regardless of the creature's size. In addition, creatures swallowed by an ammut are subject to its wasting curse."
      },
      "swallow whole": {
        universalMonsterAbility: "Swallow Whole",
        damage: "3d6+13 bludgeoning plus 4d6 fire plus wasting curse",
        hp: "29 hp",
        AC: "AC 20"
      },
      "wasting curse": {
        type: "Su",
        text: "Swallow whole-contact; save Will DC 29; frequency 1 hour; effect 1d4 Cha drain. A creature whose Charisma score is reduced to 0 by this wasting curse dies; its body is destroyed and it is subject to the ammut's devour soul ability as if it had died while within the ammut's gut. The save DC is Charisma-based."
      },
      "fear aura": {
        universalMonsterAbility: "Fear Aura",
        saveDC: 10,
        range: 30
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
        damageType: "electricity",
        value: 10
      }
    ]
  },

  Neshmaal: {
    source: "Pyramid Of The Sky Pharaoh",
    creatureType: "outsider",
    subTypes: [
      "extraplanar",
      "incorporeal"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Large",
    hd: 13,
    hdVal: 10,
    cr: 12,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      maneuverability: "Perfect",
      fly: 50
    },
    abilities: {
      str: "-",
      dex: 25,
      con: 22,
      int: 9,
      wis: 15,
      cha: 24
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
        name: "Hover",
        type: "Monster"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Tendrils",
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
        name: "Weapon Focus",
        type: "Combat",
        value: "Tendrils",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Tendril",
        name: "3 Tendrils",
        specialAbility: "energy drain",
        damage: "2d8"
      }
    ],
    immunities: [
      "Immune to cold"
    ],
    defense: {
      SR: {
        value: 23
      }
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any",
    visualDescription: "This semi-transparent mass of convulsively roiling tentacles and whiplike tendrils hovers in the air, giving off an aura of dark, alien menace.",
    description: "The vast, dark spaces between the stars hold horrors aplenty, skulking in the unholy blackness with their aberrant desires and unspeakable appetites. Some of these beings exist simultaneously in two worlds, half in the emptiness of space and half in some other dimension of which mortals dare not even dream. The neshmaals are such a race, aliens of such inscrutable malice and hunger that even most other denizens of the darkness avoid them. These strange beings view the humanoids populating the universe as either cattle to eat or playthings to manipulate like marionettes. A neshmaal's body is formed of a tangle of writhing tentacles that is roughly 9 feet across. As they are incorporeal outside of their home dimension, the creatures have no weight. Ecology Neshmaals are incorporeal in the Material Plane. They may be corporeal in their own dimension, but no one has journeyed there and returned to verify this. In the Material Plane, neshmaals spend most of their time in the empty darkness of deep space, where extremes of temperature are commonplace and the varieties of weather found on terrestrial worlds have no impact on these strange creatures. Due to this exceptional form of adaptation, neshmaals can be found virtually anywhere. Neshmaals have no need to breathe, so they are unaffected by inhaled poisons and can dwell underwater without restriction. Despite their many immunities and resistances, they are especially vulnerable to damage from sonic attacks, perhaps because they are accustomed to the silence of the void. Since outsiders don't normally need to eat, the neshmaals' ravenous hunger for the energy of all living creatures suggests that they manifest in the Material Plane only to gain sustenance. Neshmaals satisfy this hunger by draining the life force from living creatures, though it's assumed they also derive some nourishment from psychic energies from sentient beings as well, fear in particular. Habitat & Society Neshmaals, which exist at once on the Material Plane and in a dimension of their own, seem to have no interest in congress with other species, though they speak passable Aklo and possess telepathy. What little information exists about their culture is contradictory, though their endless appetites for raw life force support the theory that they are scavengers created by the Great Old Ones to cleanse worlds of sentience. Neshmaals are occasionally found in the service of much more powerful otherworldly beings from the Dark Tapestry. Some scholars believe these creatures to be agents of the mysterious Dominion of the Black. This is a reasonable assumption, as they have similar inscrutable methodologies to the creatures that make up the Dominion, and neshmaals have been recorded in texts that deal with various creatures that make up the Dominion of the Black. The role neshmaals might play in that dark hierarchy is unclear. Humanoid conjurers on the Material Plane have summoned these inscrutable beings to gain knowledge of the inky depths of the universe and beyond, though doing so places the conjurer's sanity in terrible jeopardy. The process is maddening, and the conjurer's safety is not diminished once the neshmaal is called to service. Attempting to obtain the service of a neshmaal is very dangerous, unless such service aligns with the neshmaal's goals, and only the mad can discern the nature of those goals. Neshmaals constantly modify the original agreement, and they often manipulate those they serve. A neshmaal's most common request is a never-ending chain of humanoids for them to drain of their life force. It's unusual to find more than a few of these otherworldly creatures in one place, making it difficult to calculate their total numbers. Neshmaals employ telepathy to communicate with others of their kind; while doing so, they intertwine their tentacles and tendrils in a manic, lascivious embrace. The book Secrets of the Dreaming Dark (which is thankfully rare) provides the ritual to summon neshmaals. The tome also reports that neshmaals are somehow connected to, seeking, or fleeing from something cryptically referred to as the \"Black Alluvion Dream.\" Even occult scholars, astronomers, and other seekers of secrets tend to steer clear of this esoteric and dangerous topic, given that those few who have pursued its study now occupy carefully guarded cells in asylums across the Inner Sea Region.",
    organization: "solitary, pair, or congregation (3-6)",
    languages: "Aklo; telepathy 20 ft.",
    spellLikeAbilities: [
      {
        name: "endure elements",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "confusion",
        casterLevel: 14,
        timesPerDay: 3
      },
      {
        name: "control summoned creature",
        casterLevel: 14,
        timesPerDay: 3
      },
      {
        name: "dominate person",
        casterLevel: 14,
        timesPerDay: 1
      }
    ],
    skills: {
      Fly: {
        ranks: 7
      },
      Intimidate: {
        ranks: 13
      },
      "Knowledge (planes)": {
        ranks: 8
      },
      Perception: {
        ranks: 13
      },
      "Sense Motive": {
        ranks: 5
      },
      Stealth: {
        ranks: 13
      },
      Survival: {
        ranks: 7
      }
    },
    special: {
      "energy drain": {
        universalMonsterAbility: "Energy Drain",
        saveDC: 10,
        levels: 1
      },
      "kiss of the void": {
        type: "Su",
        text: "Three times per day, a neshmaal may forgo using energy drain on one of its three tendril attacks in a round and instead imbue the touch with the icy coldness of deep space. This attack deals an additional 6d6 points of cold damage and paralyzes the target for 1d4-1 rounds. A successful DC 23 Fortitude save halves the damage and negates the paralysis. The save DC is Charisma-based. Vulnerability to Sonic (Su) Neshmaals are native to the noiseless void of deep space or their own alien dimension and, as a result, are especially vulnerable to sonic damage. Magical attacks that cause sonic damage bypass the neshmaal's spell resistance, and they take half again as much damage (+50%) on a failed save (normal full damage on a successful save). If a neshmaal fails a saving throw against an effect that deals sonic damage, it has a 25% chance of being stunned for 1 round."
      },
      "no breath": {
        universalMonsterAbility: "No Breath",
        text: ""
      },
      "alien dread": {
        type: "Su",
        text: "A neshmaal's presence is deeply disturbing. Any creature that comes within 20 feet of a neshmaal must succeed at a DC 23 Will save or become shaken for 2d4 rounds. If a creature is within the auras of multiple neshmaals, only a single save is required, but the save DC increases by 2 for each additional neshmaal (for example, the presence of two neshmaals increases the usual save DC to 25). Arcane spellcasters are especially vulnerable to this aura. The DC to cast spells defensively within the aura increases by 4, and the neshmaal can make an attack of opportunity against an arcane caster who fails to cast defensively. This secondary effect occurs even if the arcane caster succeeded at her save against the shaken condition. Once a creature is exposed to a neshmaal's aura, it is immune to this effect for 24 hours. This is a mind-affecting fear effect, and the save DC is Constitution-based. Dominate Person (Sp) A neshmaal can dominate only one target at a time when using its dominate person spell-like ability. If a neshmaal uses its dominate person spell-like ability on a new target while already dominating another creature, the previous target is immediately released from the neshmaal's control. This occurs whether or not the new attempt is successful.",
        preText: "20 ft., DC 23"
      }
    },
    resistances: [
      {
        damageType: "electricity",
        value: 10
      },
      {
        damageType: "fire",
        value: 10
      }
    ]
  },

  "Set Guardian": {
    source: "Pyramid Of The Sky Pharaoh",
    creatureType: "construct",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 22,
    hdVal: 10,
    cr: 13,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 28,
      dex: 13,
      con: "-",
      int: "-",
      wis: 17,
      cha: 21
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
      "construct traits",
      "Immune to fire"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "adamantine"
      },
      naturalArmor: 19
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any (Osirion)",
    visualDescription: "This towering figure's head is completely encased in a shiny black metal helmet that resembles the head of a long-snouted canine. Ruby gems sparkle in its eye sockets.",
    description: "In the days of Ancient Osirion, when temples to the old gods still stood throughout the nation, worshipers of Set protected their places of worship with imposing constructs. To allow the priests of these old gods to devote their time and energy to ecclesiastical duties, Set's clerics designed these foul sentinels to be self-sufficient by using a combination of necromantic techniques and golem crafting. The clerics and crafters preparing the constructs would begin with the body of an evil desert giant-preferably one who, like them, revered Set. The crafters would then fashion headpieces out of brass, bronze, or iron that were sculpted in the likeness of the god of darkness, deserts, murder, and storms. The headpiece would then be lacquered a glossy black, and set with expensive gemstones indicative of the type of elemental spirit used to animate the construct. After the headpiece was crafted, the preserved desert giant would be decapitated and the headpiece affixed to its shoulders. The towering constructs stood within the sanctuaries of Set's great temples across the empire, and were often posted at the temple's exterior doors when the faithful were called to worship. The laity always assumed that the constructs were undead servants crowned with metal helms of their god, and the clergy did nothing to disabuse them of this conceit. Indeed, adventurers often make the same mistake. Opponents can use Knowledge (religion) to identify a Set guardian's true nature and learn about the construct's unholy weaknesses. During the dark decades of Hakotep's reign, the guardians were a common-and for many, terrifying-sight, for the pharaoh used them as tools to threaten and cow the priesthoods of cults opposed to his religious reforms favoring Set. Today, these constructs have fallen out of favor in ecclesiastical circles-few of the modern cults employ them, though a couple of the surviving temples formerly dedicated to Set still boast one of these giant wardens. Most encounters with Set guardians today are reported by archaeological parties exploring lost temples or the tombs of long-buried nobles who had some devotion to the god in life. Once frightening attendants in temples across the land, they now wait in darkness for those unwisely disturbing ancient burial sites. Set guardians stand a towering 18 feet tall and weigh approximately 12,000 pounds. Construction The process begins with the recently deceased body of an evil desert giant. The body must undergo a painstaking embalming process. This preparation keeps the body from rotting and hardens its flesh, making it as tough as stone. During this time, a headpiece made from 1,500 pounds of bronze, brass, or iron must be cast using special, cursed elixirs in the process. The head of the preserved giant must be severed cleanly at the shoulders and the headpiece then bolted on. At this point, two gems (each worth at least 2,000 gp) of the appropriate type are fitted into the headpiece's eye sockets before the construct is animated with an elemental spirit. SET GUARDIAN CL 17th; Price 184,000 gp Construction Requirements Craft Construct, blasphemy, geas/quest, miracle; Skill Heal DC 20 and Craft (armor) or Craft (blacksmithing) DC 22; Cost 90,000 gp. ELEVATED SET GUARDIANS Clerics of Set wishing to create more powerful constructs to guard their temples experimented with many different methods and finally came upon a process that resulted in the creation of an elevated Set guardian. These constructs went through a preservation process that utilized more expensive materials than those of the standard guardian, and were animated with two separate elemental spirits. Such constructs can be identified by two different gems (matching the two spirits that animate them) fitted into their headpieces. An elevated Set guardian can also be animated with two elemental spirits of the same type, though the construct is easily mistaken for a standard Set guardian because its gemstone eyes are the same color. Elevated Set guardians are at least CR 15, have the advanced creature simple template, and their elemental conduit ability is keyed to two different energy types. Elevated Set guardians imbued with two elemental spirits of the same type discharge double the amount of energy damage they would have taken instead of half again as much. Construction The process of creating an elevated Set guardian is nearly identical to creating a regular Set guardian except for the cost of the required materials. The gemstones fitted into the construct's eye sockets each must be worth at least 5,000 gp. ELEVATED SET GUARDIAN CL 18th; Price 210,000 gp Construction Requirements Craft Construct, blasphemy, geas/quest, miracle; Skill Heal DC 26 and Craft (armor) or Craft (blacksmithing) DC 28; Cost 110,000 gp.",
    organization: "solitary or sentinel (2-8)",
    spellLikeAbilities: [],
    skills: {},
    special: {
      "elemental conduit": {
        type: "Su",
        text: "Each Set guardian is immune to a specific energy type, and can absorb damage of this type and then discharge it in an intense burst. When a Set guardian would be damaged by the specified energy type, it is instead unharmed. As a free action on the following round, it discharges this energy in a 20-foot radius dealing half again as much damage (150%) as it would have taken from the effect. This discharge occurs even if the Set guardian was destroyed on the previous round. A successful DC 21 Reflex save halves this damage. The gemstones in the eye sockets of the Set guardian's headpiece determine the energy type. Emerald: Set guardians with emerald gemstones are immune to and absorb electricity damage. Ruby: Set guardians with ruby gemstones are immune to and absorb fire damage. Sapphire: Set guardians with sapphire gemstones are immune to and absorb cold damage. Topaz: Set guardians with topaz gemstones are immune to and absorb acid damage. Another Set guardian that has the same energy type keyed to this ability is unharmed by the damage from this burst, but also doesn't absorb the energy. The save DC is Constitution-based.",
        preText: "ruby"
      },
      "mighty blows": {
        type: "Ex",
        text: "A Set guardian's slam attacks score a critical threat on a natural 18-20, and deal double damage on a critical hit. If both slam attacks successfully hit in a single round, the target is staggered for 1d4+1 rounds unless the target makes a successful DC 21 Fortitude save. The save DC is Constitution-based."
      },
      "trumpet of doom": {
        type: "Su",
        text: "Once every 3 rounds as a free action, a Set guardian can emit a sonic blast from its headpiece that deals 2d8+2 points of damage and stuns all creatures within 20 feet of the construct for a single round. A successful DC 21 Fortitude save halves the damage and negates the stunned condition. Other Set guardians are immune to this effect. This is a sonic effect, and the save DC is Constitution-based. Unholy Weaknesses (Ex) Due to the necromantic techniques used in its creation, certain spells and effects affect a Set guardian differently than they otherwise would. A Set guardian is treated as undead for the purposes of spells or effects that deal more damage to undead, like searing light, sunbeam, or sunburst. A Set guardian in the area of effect of positive energy channeled to damage undead is slowed 1 round for every 3d6 points of damage channeled (minimum 1 round). A raise dead spell cast on a Set guardian paralyzes it for 1d4 rounds."
      },
      freeze: {
        universalMonsterAbility: "Freeze",
        parenthetical: ""
      }
    },
    resistances: [
      "unholy weaknesses"
    ]
  },

  Shabti: {
    source: "Pyramid Of The Sky Pharaoh",
    creatureType: "outsider",
    subTypes: [
      "native"
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
    description: "Death is more terrifying for those who have the best of life. Many rulers obsess over their mortality, the most brazen turning to the mystical arts, pouring their fears into splendid vessels, fashioning simulacra of themselves to bear the scourge of Pharasma's judgment. In the mortal world, these icons are nothing but gold with a ruler's face and name, but in death, they are shabti. Existing as something between mortal souls, fabricated beings, and true children of the planes, shabti are immortal facsimiles of death-obsessed nobles. They serve out the sentences of their mortal twins, whether it be an infinity of torture or an eternity wandering the planes. Most never emerge from such trials, but some manage to find their own paths upon the planes. Shabti typically look like idealized humans with perfect physiques and flawless features. They usually stand just over 6 feet tall and weigh between 150 and 210 pounds. Ecology Shabti are artificially created creatures, brought into being by mortal magic interfering with the natural course of souls. They are born when an individual of royal blood makes use of a rare magical item known as a sovereign shabti (see the sidebar on page 91). The methods of creating these soul-guarding relics number among the deepest secrets of royal dynasties and cultic societies, meaning few mortals have access to such magic. However, groups on countless disparate worlds have discovered various routes to this power. This proliferation, along with the race's immortality, means that while shabti are rare sights in most planar metropolises, they are certainly not total strangers. They're practically unknown on the Material Plane, and are typically mistaken for aasimars or ifrits. Still, traditions and superstitions harkening back to this magic make the placement of mundane versions of these figurines-called ushabti-common in Osirian tombs Shabti appear when a paranoid noble uses a sovereign shabti in an effort to avoid their judgment. They come into being full-grown and possessing glimpses from a life of privilege, yet knowing nothing of the magic that spawned them or the karmic debts they've been burdened with. Some appear on the terrifying thresholds of evil-aligned planes among legions of doomed petitioners. Others might simply wander onto the planes from the mists of the Maelstrom. Most shabti have golden skin that feels cool but not metallic, which is regularly accented by gemstone veins, nails, or other embellishments. Some have skin tones more similar to jade, ivory, or ebony. Apart from their distinctive colorations, shabti have anatomies similar to humans. However, all shabti are sterile, preventing the race from propagating naturally. As such, childlike shabti are exceedingly rare. Habitat & Society Most shabti can be found in the planar metropolis of Axis, though Dis, Heaven's Shore, and the City of Brass also seem to be to many shabti's liking. Even in such places, though, shabti rarely gather in groups larger than two or three. Many seek to distinguish themselves from the magic items that spawned them, adopting self-chosen family names- \"Answerers\" and \"Crowns\" being popular among some. Upon their creation, shabti don't realize they're copies of another being. Each individual initially believes he is a deceased member of royalty, usually taking his rich appearance as a sign of divine favor or spiritual value. Most prove quite indignant, then distraught, in the face of their torture or forced labor. Eventually, they discover their unusual nature. Many deny the notion, choosing to live as if their copied memories were their own. Others face ages of depression, madness, and self-destruction. Some, however, embrace the freedom of a new, rare existence and seek to live up to the splendid forms fate has granted them. Many shabti learn of their nature from psychopomps. As Pharasma naturally despises such attempts to circumvent the natural cycle, her psychopomps are constantly on the lookout for shabti. When they find shabti, they immediately free them from any punishments, then use the shabti's memories to track down their mortal creators and bring them to justice. Shabti Characters(13 RP) Liberated shabti often explore the planes, seeking to replace their false memories with unique experiences. Shabti are defined by their class levels-they do not possess racial Hit Dice. All shabti have the following racial traits. +2 Constitution, +2 Charisma: Shabti have powerful bodies and presences to match. Native Outsider: Shabti are outsiders with the native subtype. Medium: Shabti are Medium creatures and receive no bonuses or penalties due to their size. Normal Speed: Shabti have a base speed of 30 feet. Darkvision: Shabti can see in the dark up to 60 feet. Immortal (1 RP), Immune to Undeath (1 RP), Past Life Knowledge (2 RP), Resist Level Drain (1 RP), Shattered Soul (-1 RP): See above. Spell-Like Ability (3 RP): Shabti can use suggestion once per day as a spell-like ability, with the caster level equal to the shabti's class level. Languages: Shabti begin play speaking Common. Those with high Intelligence scores can choose any languages they want (except secret languages, such as Druidic).",
    organization: "",
    languages: "Common",
    spellLikeAbilities: [],
    skills: {},
    special: {}
  },

};
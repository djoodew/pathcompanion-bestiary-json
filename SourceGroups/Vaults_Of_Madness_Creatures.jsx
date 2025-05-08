
export const Vaults_Of_MadnessCreatures = {
  Impundulu: {
    legs: 2,
    arms: 0,
    source: "Vaults Of Madness",
    creatureType: "outsider",
    subTypes: [
      "evil",
      "extraplanar",
      "shapechanger"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Medium",
    hd: 14,
    hdVal: 10,
    cr: 11,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 20,
      maneuverability: "Good",
      fly: 60
    },
    abilities: {
      str: 18,
      dex: 21,
      con: 19,
      int: 15,
      wis: 18,
      cha: 20
    },
    feats: [
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Hover",
        type: "Monster"
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
        name: "Vital Strike",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Bite",
        choiceSource: "Weapon Focus"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Talons",
        choiceSource: "Weapon Focus"
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
            value: "1d6",
            appliesTo: "damageType",
            damageType: "electricity"
          }
        ],
        type: "primary"
      },
      {
        weapon: "Talon",
        name: "2 Talons",
        specialAbility: "grab",
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
        weapon: "Hook",
        name: "2 Hook",
        damage: "1d4",
        bonuses: [
          {
            source: "inherent",
            value: "1d6",
            appliesTo: "damageType",
            damageType: "electricity"
          }
        ]
      }
    ],
    immunities: [
      "Immune to electricity"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "magic and cold iron"
      },
      SR: {
        value: 22
      },
      naturalArmor: 10
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "temperate or warm forest",
    visualDescription: "A dark shadow moves rapidly across the ground. In the skies high above, silhouetted by the sun, a monstrous, black-feathered avian creature circles. Slowly, a supernatural wind begins to swirl about the creature, and crackling sparks erupt from its body. Screeching wildly, it descends as if falling from the sky, its blood-f lecked wings tipped with cruel curved hooks, and its protruding lower beak scalloped with vicious, jagged barbs.",
    description: "The tribesfolk of southern Garund tell tales of a ruthless winged shapeshifter, a bloodthirsty demon and hunter of men. They call this being impundulu, a name that loosely translates to \"lightning-bird\" after its savage avian form. Legend describes this creature as a huge, stork-like bird that rides upon fierce storms and whose dark feathers crackle with lightning. It is believed that an evil shaman summoned the first impundulu and that using an ancient, taboo ritual, the two formed a blood pact. The shaman offered the impundulu the ability to wear his mortal flesh in exchange for mastery over the demon's significant occult powers. As soon as the impundulu seized control of the shaman's body, it broke the pact- however, the ancient ritual bound the fiend to the mortal form, and even after the shaman perished, it could not shed its flesh. Thus despite its own immortality, the impundulu became forever tied to the realm of mortals. For this reason, it is said, the creature continues to forge pacts with mortal spellcasters in the hope that one day it will unbind the secrets of its cursed existence. Ecology Driven by dark and murderous desires, the impundulu stalks the fringes of the Mwangi's civilized areas, seeking out small villages and well-traveled rivers where prey is plentiful. Most of the time, the fiend hunts in its avian form. A hideous thing of similar appearance to a tremendous stork or vulture, it's readily identified by its distinctive long, jagged beak and its slender wings that each bear a hidden, hooked claw. Despite the creature's intelligence, it behaves barbarically and delights in gory slaughter. It precedes physical attacks by conjuring fierce, wrathful blasts of lightning to confuse and injure prey, then swoops in to rend its prey to pieces. In its humanoid form, the impundulu manifests as a strikingly handsome man with glistening, coal-black skin, whose eyes burn a pale, otherworldly green. His legs end in monstrous raptor's talons, and his black fingernails hang long and curved. Using this form, an impundulu can wander through villages, stalking and seducing women with lies and magic, and preying upon them by draining their blood. The creature rarely uses its humanoid form, reserving it for times it wishes to engage in subtle cruelties. Habitat & Society Impundulus remain unknown outside of Garund, and have adapted to life within its pristine and primal jungles. Usually solitary in regard to their own kind, impundulus are rarely encountered apart from the influences of evil spellcasters. The association between witch doctors and impundulus is well known throughout the southern continent. The two often form nefarious pacts that bind the beasts for several generations, and the demons frequently outlive their mortal cohorts, collecting their corrupted souls upon their deaths. Those foolish enough to summon an impundulu soon discover the extent of the creatures' guile and violence. Furthermore, many of these wily demons loathe mortals, and turn on their summoners the moment they complete their pacts. Real-World Mythos The impundulu's real-world origins trace back to Xhosa and Zulu tribes of Southern Africa. Tribal folklore describes the beast as a great bird whose wings crackle with lightning. Tales depict it as a shape-shifting vampire able to take the form of a beautiful man in order to seduce its victims. Most consider the impundulu to be an otherworldly demon, though others believe it to be a supernatural creature which hatches from eggs buried in lightning-struck soil. It is oft depicted as the summoned familiar of a powerful witch-man who commands it to plague victims with illness or commit violent, evil acts.",
    organization: "solitary, pair, or flock (2d6)",
    languages: "Abyssal, Common, Fey, Infernal, Polyglot; speak with animals, telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "call lightning",
        casterLevel: 14,
        timesPerDay: 3
      },
      {
        name: "charm person",
        casterLevel: 14,
        timesPerDay: 3
      },
      {
        name: "gust of wind",
        casterLevel: 14,
        timesPerDay: 3
      }
    ],
    skills: {
      Bluff: {
        ranks: 14
      },
      Diplomacy: {
        ranks: 14
      },
      Fly: {
        ranks: 0
      },
      Intimidate: {
        ranks: 10
      },
      "Knowledge (arcana)": {
        ranks: 10
      },
      "Knowledge (nature)": {
        ranks: 10
      },
      "Knowledge (planes)": {
        ranks: 7
      },
      Perception: {
        ranks: 14
      },
      "Sense Motive": {
        ranks: 14
      },
      Spellcraft: {
        ranks: 17
      },
      Stealth: {
        ranks: 14
      }
    },
    special: {
      bleed: {
        universalMonsterAbility: "Bleed",
        damage: "1d6"
      },
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "60-ft. line",
        damage: "usable every 1d4 rounds"
      },
      "electrical discharge": {
        type: "Su",
        text: "An impundulu builds substantial electrical charges in its body-electrical charges visibly crackle about its form. If the impundulu hits a creature with two talons in the same round, this charge releases into that creature, dealing 4d6 points of electricity damage (this damage is in addition to the electricity damage from its talon attacks). The target may attempt a DC 21 Fortitude save for half damage. If one or both of the talon attacks is a critical hit, the jolt is so potent that the target is stunned for 1d4 rounds (creatures that are immune to electricity are immune to this stunning effect). The save DC is Constitution-based. Once the creature releases this charge, it cannot use this ability again for 1d4 rounds while it waits for the energy to build again (though this energy buildup does not affect the electrical damage from its regular talon attacks). Familiar Service A mortal of 7th level or higher with the Improved Familiar feat can summon an impundulu to serve as her familiar; an impundulu familiar appears as a birdlike imp or quasit, has the normal statistics of an imp or quasit, and loses all of its own abilities except its subtypes, alignment, and damage reduction. If its master is slain, the impundulu seizes its former master's soul, retreats to a hidden place, and consumes the soul, after which it metamorphoses over the next 24 hours into its natural form, regains all of its normal abilities, and becomes free; most aging masters pass on their impundulu familiars to younger family members rather than let the creatures turn on them."
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "one humanoid"
      },
      "shaman form": {
        type: "Su",
        text: "An impundulu using its change shape special quality can take on one specific humanoid form as if it had the change shape ability. This form usually resembles that of a jungle shaman, except it has claw-like fingernails and its feet end in talons. In this form, it cannot fly or use its breath weapon, electrical discharge, or hook attacks. An impundulu can remain in this form indefinitely. Its natural form is its bird form. If killed, it reverts to its true form. Witchcraft An impundulu serving as a witch's familiar gives its master additional spells known, just like a witch's patron. The master must choose from one of the following patron themes when binding the impundulu, and this choice cannot be changed without dismissing and re-summoning the impundulu: Agility, Elements, or Transformation. These patron spells known are in addition to any granted by the witch's actual patron."
      },
      grab: {
        universalMonsterAbility: "Grab"
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

  Obambo: {
    source: "Vaults Of Madness",
    creatureType: "undead",
    subTypes: [
      "incorporeal"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Medium",
    hd: 14,
    hdVal: 8,
    cr: 13,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30,
      maneuverability: "Perfect",
      fly: 30
    },
    abilities: {
      str: "-",
      dex: 23,
      con: "-",
      int: 19,
      wis: 18,
      cha: 25
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
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
        name: "Skill Focus",
        type: "General",
        value: "Perform0",
        choiceSource: "Skill Focus"
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
        weapon: "Incorporeal touch",
        name: "Incorporeal touch",
        specialAbility: "daze",
        damage: "1d6"
      }
    ],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "warm forests",
    visualDescription: "This spectral creature looks like a scarred and shriveled ruin of an ancient tribal elder, with skin caked with dirt and moss, and long white hair tangled with sticks. Sharp teeth fill its cackling mouth, and its eyes are tiny but bright and piercing. Jungle vines weave through its ghostly body, which appears stuffed with decaying leaves and other plant matter.",
    description: "When a person wise in the lore of the jungle dies and is not buried or given a funeral, the jungle itself may embrace her spirit, creating an obambo (\"forsaken one\"). The embittered spirit seeps into the ground, the roots of plants, and the crawling things beneath, becoming one with the jungle itself. An obambo is cunning, spiteful, and treacherous, but it remembers its old role of teacher and storyteller, a duty and an obligation it both loves and loathes. While dealing with an obambo is dangerous, they are known to assist those in need, if supplicants can meet the obambo's price. Ecology An obambo may rise when a tribal elder or shaman perishes in the wild and is never properly laid to rest. Without the proper rites to lead the spirit into the afterlife, the obambo is lost and sundered from its community and tribe, cursed to wander the wild. If the obambo's place of death can be discovered and its remains returned for proper burial (usually in a small house-like shrine on the land of a blood relative), its spirit is laid to rest forever, but few obambos ever find such peace. Instead, whispered memories drive the obambo to meander endlessly between jungle villages, all vaguely familiar but none ever seeming right. An obambo may be male or female. Obambos are solitary wanderers of the bush and veldt. Animals shy away from them, but obambos share a keen spiritual symbiosis with vermin and plants. Through an obambo's journeys, these are its audience, attending faithfully to the obambo's endless tales and treating it as a wise mentor and leader. Their obeisance, however, can never satisfy the obambo's yearning for the rapt attention of its former humanoid kind to its riddles, stories, and lessons. An obambo is easily angered by the foolish, however, and its stern reproofs often leave its pupils as drooling husks or mindless insectile drones. An obambo's plant or vermin sycophants have been known to devour such hapless wretches, or even to ravage entire villages as they sit enthralled by the obambo's tales. As long as a few survivors remain and learn from the obambo's teaching, it is satisfied. In any case, an angry obambo hardly needs assistance in the act of destruction, as an obambo's spiritual communion with the land enables it to merge itself into the land, rising up as a roaring titan melded of soil, mud, vegetation, and crawling vermin. Habitat and Society Obambos often establish a reputation as darkling oracles, wise and knowledgeable about the jungle, its creatures, and its people. They create small shrines to themselves called akinfa, usually in hollow trees where supplicants may bring gifts and the obambo may sit within. These gifts may be of material wealth, but as a teacher, the obambo prefers gifts that show the talents of the supplicant, be it a crafted item, a song, a story, a riddle, or some other performance. An obambo begins any meeting as unfriendly, but a supplicant may make a Craft or Perform check opposed by the obambo's Appraise skill to offer a gift he has made (offering a magical or masterwork item grants a +2 circumstance bonus on this check). If the supplicant succeeds, the obambo is impressed with his skill and its attitude becomes indifferent. If the check fails, the obambo remains unfriendly, and if failed by 10 or more, the obambo is insulted and becomes hostile. If a creature offers an item the creature did not personally create, the obambo is entitled to a Sense Motive check opposed by the supplicant's Craft or Perform check; if it succeeds, the obambo becomes hostile. An obambo is unaffected by Diplomacy until it receives a suitable gift. An indifferent obambo's attitude may be improved with Diplomacy or by offering additional gifts as above; each gift that pleases the obambo improves its attitude by one step. Using Intimidate against the obambo makes it immediately hostile, as does any unsuccessful Bluff attempt. An obambo can also be challenged to a storytelling contest. The contest is resolved by a Perform (oratory) or Perform (sing) check opposed by the obambo's Perform (oratory) check; if the PC wins, the obambo is truly impressed and immediately becomes helpful. Each time a supplicant tries to influence the obambo's attitude beyond indifferent, it responds with a question or riddle, using its Bluff skill or one of its Knowledge skills; the supplicant must oppose the check with the same skill. Each time a supplicant fails this opposed check, the obambo becomes annoyed and all skill checks to influence him take a -2 circumstance penalty for 1 hour. An indifferent obambo answers questions in riddles, requiring a Sense Motive check opposed by the obambo's Bluff check for the PC to understand what the creature means. A friendly obambo speaks more plainly, and visitors generally do not need to make opposed checks to determine its meaning. It may offer goodberries to supplicants who have offered it additional gifts. A helpful obambo answers questions clearly, and may also agree to use one of its spell-like abilities to aid the supplicant. However, an obambo expects gratitude and an additional gift after it lends its aid. If no gift is forthcoming, or the supplicant requests another favor, the obambo flies into a rage at the ingratitude and attacks.",
    organization: "solitary or tribe (1 plus 1-2 giant flytraps or 1-3 shambling mounds)",
    languages: "Common, Polyglot, Sylvan; speak with animals, speak with vermin",
    spellLikeAbilities: [
      {
        name: "entangle",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "enthrall",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "goodberry",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "mage hand",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "obscuring mist",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "command plants",
        casterLevel: 14,
        timesPerDay: 3
      },
      {
        name: "giant vermin",
        casterLevel: 14,
        timesPerDay: 3
      },
      {
        name: "hallucinatory terrain",
        casterLevel: 14,
        timesPerDay: 3
      },
      {
        name: "helping hand",
        casterLevel: 14,
        timesPerDay: 3
      },
      {
        name: "move earth",
        casterLevel: 14,
        timesPerDay: 3
      },
      {
        name: "rainbow pattern",
        casterLevel: 14,
        timesPerDay: 3
      },
      {
        name: "soften earth and stone",
        casterLevel: 14,
        timesPerDay: 3
      },
      {
        name: "spike growth",
        casterLevel: 14,
        timesPerDay: 3
      },
      {
        name: "tree stride",
        casterLevel: 14,
        timesPerDay: 3
      },
      {
        name: "animate plants",
        casterLevel: 14,
        timesPerDay: 1
      },
      {
        name: "creeping doom",
        casterLevel: 14,
        timesPerDay: 1
      },
      {
        name: "find the path",
        casterLevel: 14,
        timesPerDay: 1
      },
      {
        name: "legend lore",
        casterLevel: 14,
        timesPerDay: 1
      },
      {
        name: "mage's magnificent mansion",
        casterLevel: 14,
        timesPerDay: 1
      },
      {
        name: "reincarnate",
        casterLevel: 14,
        timesPerDay: 1
      }
    ],
    skills: {
      Appraise: {
        ranks: 17
      },
      Bluff: {
        ranks: 17
      },
      Craft0: {
        subSkill: "alchemy",
        ranks: 6
      },
      Diplomacy: {
        ranks: 8
      },
      Fly: {
        ranks: 1
      },
      "Knowledge (dungeoneering)": {
        ranks: 6
      },
      "Knowledge (geography)": {
        ranks: 11
      },
      "Knowledge (history)": {
        ranks: 11
      },
      "Knowledge (local)": {
        ranks: 11
      },
      "Knowledge (nature)": {
        ranks: 11
      },
      "Knowledge (religion)": {
        ranks: 3
      },
      Perception: {
        ranks: 10
      },
      Perform0: {
        subSkill: "oratory",
        ranks: 17
      },
      "Sense Motive": {
        ranks: 13
      }
    },
    special: {
      "jungle animus": {
        type: "Su",
        text: "As a full-round action, an obambo can invest its spirit into the land itself and cause the ground to rise up as a Huge mass of soil, mud, vines, roots, and vermin. In this form, it has the statistics of an advanced giant shambling mound, except it keeps its own hit points."
      },
      "thought eater": {
        type: "Su",
        text: "An obambo's touch drains 1d6 points of Intelligence and dazes the target for 1 round; a successful DC 24 Fortitude save negates the daze effect and halves the ability drain. The obambo gains 5 temporary hit points and a +1 bonus on all Intelligence-based skill checks for 24 hours with each successful Intelligence drain; these benefits stack. A creature reduced to 0 Intelligence by this attack is polymorphed into a Diminutive vermin (Fortitude DC 24 negates; otherwise treat as baleful polymorph)."
      },
      "unnatural aura": {
        type: "Su",
        text: "Animals, both wild and domesticated, can sense the unnatural presence of an obambo at a distance of 30 feet. They do not willingly approach nearer than that and panic if forced to do so unless their master succeeds at a DC 25 Handle Animal, Ride, or wild empathy check. A panicked animal remains so while within 30 feet of the obambo."
      },
      "channel resistance": {
        universalMonsterAbility: "Channel Resistance",
        bonus: 4
      },
      rejuvenation: {
        type: "Su",
        text: "In most cases, it's difficult to destroy an obambo through simple combat, as the \"destroyed\" spirit restores itself in 2d4 days. Only after its remains or place of death is found and appropriate funeral rites are performed does it rest in peace and not return. Speak with Vermin (Su) An obambo can communicate with vermin, similar to using speak with animals. Vermin can only communicate with instinct-level information."
      },
      daze: {
        type: "Ex"
      }
    }
  },

  Tikoloshe: {
    source: "Vaults Of Madness",
    creatureType: "undead",
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Small",
    hd: 4,
    hdVal: 8,
    cr: 3,
    racialFeatures: [
      "Blindsense 60 ft.",
      "Blindsight 30 ft."
    ],
    speed: {
      base: 20,
      swim: 30
    },
    abilities: {
      str: 14,
      dex: 15,
      con: "-",
      int: 8,
      wis: 15,
      cha: 13
    },
    feats: [
      {
        name: "Skill Focus",
        type: "General",
        value: "Perception",
        choiceSource: "Skill Focus"
      },
      {
        name: "Toughness",
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
        weapon: "Slam",
        name: "2 Slams",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "slashing"
      },
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "warm forests, oceans, or rivers",
    visualDescription: "The water churns and splashes as a small, stocky humanoid surges forth, gnashing rows of needle-like teeth, its eye sockets merely deep gouges. As if it were one with the water itself, it darts quickly forward, shouting curses and swinging its fists.",
    organization: "solitary, gang (2-8), or clan (9-20)",
    languages: "Common, Polyglot",
    spellLikeAbilities: [
      {
        name: "invisibility",
        casterLevel: 4,
        timesPerDay: 3
      }
    ],
    skills: {
      Climb: {
        ranks: 4
      },
      Perception: {
        ranks: 4
      },
      Stealth: {
        ranks: 4
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      "trickster's torment": {
        type: "Su",
        text: "Once per day, a tikoloshe can curse another living creature. As a standard action, the tikoloshe makes a melee touch attack and unless the target makes a DC 15 Will save, the target is treated as if under the effect of bestow curse, except that the curse's duration is only 24 hours. A creature can only suffer from one tikoloshe's curse at a time. The save DC is Charisma-based."
      },
      "channel resistance": {
        universalMonsterAbility: "Channel Resistance",
        bonus: 2
      },
      "water diffusion": {
        type: "Ex",
        text: "When in water at least 2 feet deep, a tikoloshe's body seems to diffuse into and become part of the water, granting it concealment (20% miss chance) as if under the effect of blur. This effect ends immediately upon entering shallower water or setting foot on land. Waverider (Ex) Up to 3 times per day, a tikoloshe can swim up to 30 feet as a swift action. It does not provoke an attack of opportunity for this movement."
      }
    },
    resistances: [
      {
        damageType: "fire",
        value: 10
      }
    ]
  },

};

export const Book_of_the_Damned__Vol__3Creatures = {
  Erodaemon: {
    source: "Book of the Damned, Vol. 3",
    creatureType: "outsider",
    subTypes: [
      "daemon",
      "evil",
      "extraplanar"
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
      "Detect Good",
      "Detect Thoughts"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 18,
      dex: 21,
      con: 21,
      int: 19,
      wis: 16,
      cha: 22
    },
    feats: [
      {
        name: "Agile Maneuvers",
        type: "Combat"
      },
      {
        name: "Deceitful",
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
        name: "Quicken Spell-Like Ability",
        type: "Monster",
        value: "Crushing despair",
        choiceSource: "Quicken Spell-Like Ability"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Bluff",
        choiceSource: "Skill Focus"
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
        damage: "1d6",
        bonuses: [
          {
            source: "inherent",
            value: "1d4",
            appliesTo: "damageType",
            damageType: "charisma drain"
          }
        ],
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
      DR: {
        value: 10,
        damageType: "good or silver"
      },
      SR: {
        value: 22
      },
      naturalArmor: 9
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Abaddon)",
    visualDescription: "This fiend appears to be a slim half-elf with long hair and a slender set of black ram horns. Covered by a sheer gown, her skin is tinged blue and covered with an elaborate tracery of white, scarified tattoos. A long, serpentine tail sprouts from the base of her spine, ending in a fanged maw. Her extremities are withered and blackened, ending in scorched, fleshless talons, and her unearthly beauty is further marred by a red, unblinking third eye.",
    organization: "solitary, pair, or harem (3-6)",
    languages: "Abyssal, Draconic, Infernal; telepathy 100 ft., tongues",
    spellLikeAbilities: [
      {
        name: "detect good",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "detect thoughts",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "tongues",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "death knell",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "teleport, greater",
        casterLevel: 14,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: -1
      },
      {
        name: "unnatural lust",
        casterLevel: 14,
        timesPerDay: -1
      },
      {
        name: "desecrate",
        casterLevel: 14,
        timesPerDay: 3
      },
      {
        name: "crushing despair",
        casterLevel: 14,
        limitations: "Metamagic: Quicken ",
        timesPerDay: 3
      },
      {
        name: "enervation",
        casterLevel: 14,
        timesPerDay: 3
      },
      {
        name: "suggestion",
        casterLevel: 14,
        timesPerDay: 3
      },
      {
        name: "modify memory",
        casterLevel: 14,
        timesPerDay: 1
      },
      {
        name: "summon",
        casterLevel: 14,
        limitations: "level 4, 1d3 ceustodaemons 35%",
        timesPerDay: 1
      },
      {
        name: "utter contempt",
        casterLevel: 14,
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 14
      },
      Diplomacy: {
        ranks: 17
      },
      Disguise: {
        ranks: 14
      },
      Intimidate: {
        ranks: 17
      },
      "Knowledge (local)": {
        ranks: 17
      },
      "Knowledge (planes)": {
        ranks: 14
      },
      Perception: {
        ranks: 14
      },
      "Sense Motive": {
        ranks: 14
      },
      "Sleight of Hand": {
        ranks: 17
      },
      Stealth: {
        ranks: 14
      }
    },
    special: {
      "object of desire": {
        type: "Su",
        text: "While using its detect thoughts ability, an erodaemon can see into the mind of a humanoid and identify the person the target most desires, whether it be a lost loved one or an object of lust. As a full-round action, the erodaemon can change into the form of this desired person as long as the target is a Small, Medium, or Large humanoid. The erodaemon gains a +20 bonus on its Disguise and Bluff checks to impersonate that person and avoid being detected as a fraud, but spells like true seeing negate this effect as normal. This effect ends if the erodaemon attacks any creature. Actions that could reveal the erodaemon as a fraud (such as performing an action that the imitated person would obviously not do, like cast a spell or speak Infernal) require the erodaemon to make an immediate Bluff check to continue the impersonation, with the erodaemon losing some or all of its bonus depending on the severity of the breach (GM's discretion)."
      },
      "wilting kiss": {
        type: "Su",
        text: "An erodaemon can draw a mortal into a state of obsession with its kiss. An unwilling victim must be grappled before the erodaemon can use this ability. A creature affected by this kiss must make a DC 23 Will save or become obsessed with the erodaemon, an obsession the erodaemon feeds on. Each round the target is more than 30 feet away from the erodaemon, it must make an additional DC 23 Will save. Failing the save means that the sheer pain of her absence deals 1 point of Charisma drain to the subject that round. Succeeding at the Will save two consecutive times ends the effects of this ability. Spells such as dispel magic and break enchantment end this effect. The save DC is Charisma-based."
      }
    }
  },

  Lacridaemon: {
    source: "Book of the Damned, Vol. 3",
    creatureType: "outsider",
    subTypes: [
      "daemon",
      "evil",
      "extraplanar"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Medium",
    hd: 4,
    hdVal: 10,
    cr: 3,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Detect Good",
      "Detect Magic"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 14,
      dex: 17,
      con: 14,
      int: 11,
      wis: 13,
      cha: 12
    },
    feats: [
      {
        name: "Improved Initiative",
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
        specialAbility: "poison",
        damage: "1d6",
        bonuses: [
          {
            source: "inherent",
            value: "1d4",
            appliesTo: "damageType",
            damageType: "acid"
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
            damageType: "acid"
          }
        ],
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "good or silver"
      },
      SR: {
        value: 14
      },
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Abaddon)",
    visualDescription: "Sobbing uncontrollably, this gray-skinned creature possesses thin legs ending in black cloven hooves, as well as a ferocious, manic grin. Its flesh is torn and scratched even down to the tip of its misshapen tail, while a patchwork sheet of dirty ice covers its body. Its tears sizzle violently as they hit the ground.",
    description: "Among the least powerful of Abaddon's daemons, though still exceedingly dangerous, lacridaemons personify death by neglect or exposure to the elements, such as that suffered by those who become lost in the wilderness and die far from help, or are trapped in an enclosed space (like a collapsed mine) and left to slowly expire. Sadly, children are more likely to become lacridaemons than any other type of daemon, and while it's rare for children to be truly evil, those unfortunate children who die from neglect and abuse, or who are abandoned by their parents, are at risk of being twisted and made savage by the experience. Lacridaemons' misery is in stark contrast to their savage nature, and given the opportunity, they viciously lash out, furiously attacking their mortal victims. Burning tears of acid and horrific powers used to strand mortals in perilous conditions make lacridaemons effective combatants against unwary enemies, and their abilities are compounded when the daemons are encountered as a wailing, weeping group. Ecology Pitiful creatures, most lacridaemons suffer in death as their mortal incarnations did in life, consumed by feelings of abandonment, self-pity, and a gnawing sense of loneliness. They often spawn from the souls of evil mortals who died alone and abandoned-exiled criminals, reclusive and corrupt nobles, or those who died from intense exposure to the natural elements, such as by freezing to death or dying of thirst. They are thus often servants of the Horseman of Famine, who makes use of their skills in luring mortals well beyond the edges of civilization, where they ultimately perish due to lack of nourishment. Wracked by an enduring and incurable loneliness even in death, these fiends yearn for the companionship they died without, but only so they can attack and prey upon the souls of those who denied them help in life. They still call out for aid, whispering with a subtle telepathy as well as calling out with weak, pleading voices, begging for help and comfort. In Abaddon, their calls mostly draw out the hunted-namely those evil souls of Abaddon who would seek to take advantage of a stranded innocent-while on the Material Plane they bring forth all manner of doomed altruists. They turn on those who arrive, attacking anyone who would show them the benevolence denied or unattainable to them in life. Of course, the very notion that their daemonic nature might be influenced by the dim memories of a mortal soul is disgusting to them, and most reject the idea as blasphemous. Habitat & Society Bef itting their nature, most lacridaemons wander the fringes of daemonic society, abhorring the cities and citadels that populate the greater realms of the Four and their subordinate lords. This self-selected exile has several consequences. First, it ensures that they, as a caste of daemons, receive only the scraps of mortal souls, and rarely does any lacridaemon rise to a position of prominence within Abaddon. Their wandering also brings them into considerable conf lict with the various non-daemonic natives of Abaddon, including nightmares and night hags-but when confronted by powerful foes or outnumbered, lacridaemons usually simply flee. Lacridaemons take great pleasure in pursuing the hunted, leading the already stranded souls further astray throughout the vast wastelands of Abaddon. These hunted never die of starvation or malnourishment, instead subsisting in a constant state of agonizing hunger, and the lacridaemon takes great pleasure in causing such suffering. Solitary and xenophobic, lacridaemons shun the company of other creatures except for other lacridaemons, and even then the fiends largely just cluster together, interacting at a bare minimum. These small lurks of lacridaemons are especially dangerous when encountered in the wild; their maddening whines for help often cause entire parties of travelers to become disoriented and lose their way in treacherous lands. While on the Material Plane, lacridaemons gravitate toward hostile environs such as vast swaths of tundra, brutally hot deserts, and inhospitable swamplands. Occasionally, a lacridaemon will appear near the border of an oasis city or remote outpost, waiting for travelers to leave on the next leg of their journey. The lacridaemon will then follow the unwitting travelers at a distance, waiting until they are far from civilization before coming close enough to let its mind-affecting sobs be known. Lacridaemons use their pitiful whimpering to string prey along for days at a time, until the unfortunate victim has run out of food or water and is on the brink of death. When this occurs, the cunning daemon finally confronts its prey, revealing the true source of the weeping. If it needs to attack, a lacridaemon does so swiftly, savoring the body and reveling in the death of yet another abandoned soul, shedding its perpetual tears all the while.",
    organization: "solitary, pair, or lurk (3-6)",
    languages: "Abyssal, Draconic, Infernal; telepathy 100 ft.",
    note: "* See Ultimate Magic.",
    spellLikeAbilities: [
      {
        name: "detect good",
        casterLevel: 4,
        timesPerDay: -1
      },
      {
        name: "detect magic",
        casterLevel: 4,
        timesPerDay: -1
      },
      {
        name: "pass without trace",
        casterLevel: 4,
        timesPerDay: -1
      },
      {
        name: "overwhelming grief",
        casterLevel: 4,
        timesPerDay: 3
      },
      {
        name: "teleport",
        casterLevel: 4,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: 3
      },
      {
        name: "hold person",
        casterLevel: 4,
        timesPerDay: 1
      },
      {
        name: "invisibility",
        casterLevel: 4,
        timesPerDay: 1
      },
      {
        name: "snare",
        casterLevel: 4,
        timesPerDay: 1
      },
      {
        name: "summon",
        casterLevel: 4,
        limitations: "level 4, 1 lacridaemon, 50%",
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 3
      },
      Bluff: {
        ranks: 4
      },
      Climb: {
        ranks: 7
      },
      Perception: {
        ranks: 4
      },
      "Sense Motive": {
        ranks: 4
      },
      Stealth: {
        ranks: 4
      }
    },
    special: {
      poison: {
        universalMonsterAbility: "Poison",
        name: ":",
        type: "Ex",
        text: "son (Ex): Lacridaemon poison: Injury; save Fortitude DC 14; frequency 1/round for 6 rounds; effect 1 Wis plus staggered for 1 round; cure 2 consecutive saves. Weeping Aura (Su) A lacridaemon emits an invisible aura that sounds like the whimpers of a crying child. The whimpers sound almost as if they're coming from all directions at once, or perhaps from one's own mind, disorienting those within the aura's area. Any creature that enters this area takes a -5 penalty on Survival checks to avoid becoming lost. Creatures within the aura's range need not be able to physically hear the whimpers in order to be affected by this ability (and those who try to identify its origin so they can get nearer take a -5 penalty on their Perception checks to do so). A lacridaemon can suppress or reactivate its aura as a free action, and the effects from multiple lacridaemon auras stack (up to a maximum penalty of -20). This aura is a sonic, mind-affecting effect.",
        saveDC: 10,
        saveType: "Fortitude"
      },
      "weeping aura 100 ft.": {
        type: "Ex"
      }
    }
  },

  Obcisidaemon: {
    source: "Book of the Damned, Vol. 3",
    creatureType: "outsider",
    subTypes: [
      "daemon",
      "evil",
      "extraplanar"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Gargantuan",
    hd: 22,
    hdVal: 10,
    cr: 19,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Deathwatch",
      "True Seeing"
    ],
    speed: {
      base: 30,
      maneuverability: "Average",
      fly: 60
    },
    abilities: {
      str: 30,
      dex: 19,
      con: 28,
      int: 13,
      wis: 21,
      cha: 24
    },
    feats: [
      {
        name: "Bleeding Critical",
        type: "Combat"
      },
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Great Cleave",
        type: "Combat"
      },
      {
        name: "Greater Vital Strike",
        type: "Combat"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Quicken Spell-Like Ability",
        type: "Monster",
        value: "Spell turning",
        choiceSource: "Quicken Spell-Like Ability"
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
        value: "Halberd",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Halberd",
        enchantments: [
          {
            name: "Enhancement Bonus +1",
            source: "inherent"
          },
          {
            name: "Unholy",
            source: "inherent"
          }
        ],
        name: "Halberd",
        specialAbility: "inherit soul",
        damage: "1d10"
      },
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "good and silver"
      },
      SR: {
        value: 30
      },
      naturalArmor: 24
    },
    space: "20 ft.",
    reach: "20 ft.",
    environment: "any (Abaddon)",
    visualDescription: "This massive fiend has thick claws like a lion's, the broad wings of an eagle, and the legs of a massive canine. Its face is that of a three-eyed wolf with the jaws of a saber-toothed tiger. While two of the thing's eye sockets are merely empty holes that trickle blood, the middle eye glows a sickly yellow. A cloud of globular soul-stuff cloaks the creature's hulking body, bits dripping loosely from its barbwire-covered arms.",
    description: "The obcisidaemon personifies the darkest elements of war. Obcisidaemons strip away the veneer of honor and battlefield glory, leaving only the brutal and violent pragmatism at its core, and then divest it of any humanity to reveal naught but scorched earth and genocide. Ref lecting the disgraceful values of ethnic cleansing, depopulation, and all other forms of the clinical, systematic obliteration of civilian populations, obcisidaemons are among the most powerful members of daemonkind. These paragons of inhumanity arrive in the heart of great cities and leave only wastelands of rubble and ashes in their wake. Where an obcisidaemon walks, not even the ghosts of the dead remain to lament the destruction, for the daemon wipes out not only innocent individuals, but also their entire histories and bloodlines, ensuring that no future exists for its victims in any sense of the word. Obcisidaemons stand 25 feet tall, have a wingspan of 30 feet, and weigh over 15,000 pounds. Ecology When a mortal commits a true act of genocide in life and goes to Abaddon in death, it has a chance of forming into an obcisidaemon if it survives long enough as a member of the hunted. Such individuals rarely have trouble managing the unforgiving wastes, as they are willing to destroy any and all possible allies in order to ensure their own survival, making betrayal an impossibility and solitude an inevitability. This vicious soul eventually develops into an obcisidaemon-a lone, wandering mass of slaughter that acts as a harbinger of undiscriminating and unforgiving death to all who dare stand in its path. In life, the soul of an obcisidaemon perhaps only desired to kill a particular chosen population; as an obcisidaemon, however, the being seeks the obliteration of all mortals. Peculiar to an obcisidaemon is the cloak of souls that seems to drip from its enormous body, a symbol of its destructive abilities that provides onlookers an idea as to the sheer scope of its murderous capabilities. When an obcisidaemon lays slaughter to entire populations, it does not feast on all of the souls at once, instead capturing victims for later use. When the fiend needs to unleash a particularly potent rampage upon a resistant population, it consumes its reserve souls in order to strengthen its powers and ensure its success in total annihilation. Habitat & Society Devoted to the wanton, systematic slaughter of mortals, most obcisidaemons serve Szuriel, the Horseman of War, who shares similar ideals. In her service, an obcisidaemon functions as a high-ranking officer at the head of an army of purrodaemons, so skilled are the harbingers of genocide at managing the pragmatic art of organized massacres. Sometimes, an amassed group of obcisidaemons instead trails behind an invading daemonic army, so as to ensure that no trace of the butchered mortals remains but ashes and salted earth. Obcisidaemons not only ensure that all life perishes, but that the land is thereafter uninhabitable by any other creatures as well. Occasionally, an obcisidaemon serves Apollyon, occupying a similar role at the head of a titanic flight of leukodaemons, sowing disease and clouds of poison across miles of terrain in its passing. Some obcisidaemons serve no particular member of the Four, instead choosing to function as independent agents of genocide. These beings wander from plane to plane, laying waste to one civilization after another. Some obcisidaemons intentionally spread their true names to the Material Plane, hoping for a foolish evil summoner to call upon them, knowing that no mere mortal could control their awesome power. Most such summoners end up among the first souls devoured and consumed into the cloud of tormented spirits that cloaks the now-rampaging obcisidaemon.",
    organization: "solitary, pair, or holocaust (3-6)",
    languages: "Abyssal, Draconic, Infernal; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "deathwatch",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "true seeing",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "cloudkill",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "teleport, greater",
        casterLevel: 20,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: -1
      },
      {
        name: "destruction",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "fire storm",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "incendiary cloud",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "spell turning",
        casterLevel: 20,
        limitations: "Metamagic: Quicken ",
        timesPerDay: 3
      },
      {
        name: "hold person, mass",
        casterLevel: 20,
        timesPerDay: 1
      },
      {
        name: "meteor swarm",
        casterLevel: 20,
        timesPerDay: 1
      },
      {
        name: "summon",
        casterLevel: 20,
        limitations: "level 9, 1 purrodaemon 50%",
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 22
      },
      Fly: {
        ranks: 27
      },
      Intimidate: {
        ranks: 25
      },
      "Knowledge (history)": {
        ranks: 14
      },
      "Knowledge (planes)": {
        ranks: 11
      },
      Perception: {
        ranks: 22
      },
      "Sense Motive": {
        ranks: 22
      },
      Spellcraft: {
        ranks: 25
      }
    },
    special: {
      "cloak of souls": {
        type: "Su",
        text: "An obcisidaemon is surrounded by a dark cloud of souls it has consumed, often resembling a tattered, ethereal cloak. When an obcisidaemon successfully captures a soul with its inherit soul ability, the soul becomes a part of its cloak of souls, taking up one soul slot. An obcisidaemon has a number of soul slots equal to its Charisma modifier (usually 7). An obcisidaemon can consume a soul as a swift action to achieve a particular effect. When a soul within this cloak is consumed by the obcisidaemon, it is immolated as though by the destruction spell. Destroying the daemon frees the souls in its cloak, though this does not return the deceased creatures to life. Any attempt to resurrect a body whose soul is trapped in a cloak of souls requires a DC 28 caster level check. Failure results in the spell having no effect, while success tears the victim's soul free from the cloak and returns the creature to life as normal. If the daemon is in an unholy location, such as that created by the unhallow spell, the DC of this caster level check increases by +2. The caster level check DC is Charisma-based. An obcisidaemon can achieve one of the following effects by consuming a single soul. • Increase the DC of the next spell-like ability the obcisidaemon uses that round by +1. • Give the obcisidaemon 3d6 temporary hit points for 1 hour. • Increase the damage of the obcisidaemon's next melee attack that round by +1d6 hit points."
      },
      "scorched earth": {
        type: "Su",
        text: "A creature that dies within 60 feet of an obcisidaemon must immediately make a DC 28 Fortitude save to prevent its body from being utterly consumed in unholy fire equivalent to the destruction spell. The save DC is Charisma-based.",
        preText: "60 ft."
      },
      "inherit soul": {
        type: "Su",
        text: "Whenever an obcisidaemon kills a creature with its halberd, that creature must immediately make a DC 31 Fortitude save or be consumed by the daemon's cloak of souls. This is a death effect. If the cloak cannot consume this soul without exceeding its number of soul slots, the daemon can release a soul as a free action in order to make room for the new soul, otherwise, the killed creature automatically succeeds at its save and its soul is not absorbed. The save DC is Constitution-based. Scorched Earth (Su) A creature that dies within 60 feet of an obcisidaemon must immediately make a DC 28 Fortitude save to prevent its body from being utterly consumed in unholy fire equivalent to the destruction spell. The save DC is Charisma-based."
      }
    },
    resistances: [
      {
        damageType: "cold",
        value: 30
      },
      {
        damageType: "electricity",
        value: 30
      },
      {
        damageType: "fire",
        value: 30
      }
    ]
  },

  Phasmadaemon: {
    source: "Book of the Damned, Vol. 3",
    creatureType: "outsider",
    subTypes: [
      "daemon",
      "evil",
      "extraplanar"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Large",
    hd: 23,
    hdVal: 10,
    cr: 17,
    racialFeatures: [
      "Darkvision 60 ft.",
      "True Seeing"
    ],
    speed: {
      base: 30,
      maneuverability: "Good",
      fly: 40
    },
    abilities: {
      str: 20,
      dex: 25,
      con: 23,
      int: 19,
      wis: 18,
      cha: 22
    },
    feats: [
      {
        name: "Combat Casting",
        type: "General"
      },
      {
        name: "Deceitful",
        type: "General"
      },
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Greater Spell Penetration",
        type: "General"
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
        name: "Intimidating Prowess",
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
        name: "Quicken Spell-Like Ability",
        type: "Monster",
        value: "Greater shadow conjuration",
        choiceSource: "Quicken Spell-Like Ability"
      },
      {
        name: "Spell Penetration",
        type: "General"
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
    defense: {
      DR: {
        value: 10,
        damageType: "good and silver"
      },
      SR: {
        value: 28
      },
      naturalArmor: 15
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any (Abaddon)",
    visualDescription: "Little can be seen of this fiend, its body cloaked in a shroud of perpetually shifting, ghastly illusions and phantasms. Beneath its shimmering veil, it has glossy black flesh, a bleached white face, and twisted horns. Its long caiman muzzle perpetually gapes, but other than that, its face is void of sensory organs, save for two orbs that move below the surface of its flesh. This creature flows rather than moves, and its flexible body lacks a definite skeletal structure except for a long, bony tail.",
    description: "Among the most powerful members of daemonkind, the phasmadaemons personify death by fright, and conjure powers of illusion so terrifying that they steal the life from their victims. A freakish creature of rubbery flesh, the phasmadaemon is capable of twisting its body like a hellish contortionist, and its ivory face is often the last thing its victim sees. Though capable of savaging foes with its fangs and claws, it prefers to torment them first with illusory enemies, unreal terrors, and false terrain before finally closing in as the victims' hearts race and finally fail. When a phasmadaemon does confront its prey physically, it prefers to grapple and constrict it to death, looking the victim directly in the face and watching the fear fill its eyes as the blood drains from its cheeks. A phasmadaemon rarely shows its true form all at once, masking itself in illusions or eerie porcelain masks, and it delights in unnerving even its own daemonic allies. A phasmadaemon is 25 feet long from muzzle to tail- though if it desires, it can stretch almost half again that length thanks to its flexible, elastic anatomy-and weighs 1,000 pounds. Ecology Phasmadaemons sometimes form from the type of soul that exemplifies extreme evil, namely those who inflict or suffer from extreme fear, such as deranged illusionists, schizophrenic serial killers, and corrupt mortals who died at the hands of other creatures that excel at captivating victims' dreams and fears. In other instances, phasmadaemons are merely among the most fearful of the hunted souls of Abaddon, souls who eventually learn to exult in the terror they feel as a soul-devouring daemon stalks them; eventually, these vile souls may transform from the hunted into the hunters-daemons seeking the thrill of the hunt for the horror-stricken faces of their prey. Whether in the chasms of Abaddon or on other planes, phasmadaemons hunt for souls via stealth, following from a distance to study their prey for prolonged periods. They create elaborate illusions, leading their targets into believing in entire fictional environments and creatures, all dependent on the victims' most feared imaginings. They extract each soul's intrinsic, underlying fears, using the figments as weapons against their owners. Phasmadaemons do not seek souls that are merely easy prey-they adhere strictly to their own method of destroying souls, reveling in the grotesque pleasure of striking mortal souls dead with fear-induced heart attacks and other physical maladies. The connection between fear and mortality is something that continually fascinates the morbid curiosities of phasmadaemons, who mix fears like alchemists, conducting experiments and concocting ever more terrifying combinations of horrific imaginings. Habitat & Society Phasmadaemons tend to hunt alone, preferring to develop their own unique styles of torment and horror to unleash upon their victims. While some would suggest that the freakishly complex traps of crucidaemons or the cocooned feeding of sangudaemons rank as the most dreadful and frightening killing tactics among daemonkind, the terrors manifested by phasmadaemons exceed them both. A phasmadaemon extracts a mortal's own fears and turns the figments against their creator, not enjoying the torment the horrors induce so much as appreciating the effects of fear within its victim before the thing's last fatal gasp-the tiny hairs standing upright, the racing heart, jerking muscles, paralysis. Such reactions spawn immense pleasure within a phasmadaemon, which continually seeks ways to fill its victims with dread. Among phasmadaemons, the buying and selling of fears is in itself something of a market, much like the economy of souls within the rest of Abaddon. The fiends exchange their own horrific new imaginings with one another, creating a collection of terrors unfathomable by mortals. Phasmadaemons do not often serve a single Horseman exclusively, their skills not necessarily a boon to any particular facet of death. They tend to traverse the outskirts of societies both within Abaddon and outside of it, preying on travelers in the dead of winter nights or seeking out hermits in order to haunt their isolated homes. The tension before the kill is almost as thrilling to a phasmadaemon as the kill itself, and the foul beings wallow in the fear they create before swooping in for the final blow. When they travel in groups, phasmadaemons use their powers to create great multitudes of illusionary images in order to terrorize entire groups or crowds of closely situated people, such as causing heart-stopping incidents in the middle of a playhouse's performance, situating horrific conjurations in the middle of packed bazaars, and positioning frightful images at the gallows at a crowded execution.",
    organization: "solitary, pair, or cabal (3-4)",
    languages: "Abyssal, Celestial, Common, Draconic, Infernal; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "deathwatch",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "true seeing",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "teleport, greater",
        casterLevel: 20,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: -1
      },
      {
        name: "persistent image",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "shadow conjuration, greater",
        casterLevel: 20,
        limitations: "Metamagic: Quicken ",
        timesPerDay: 3
      },
      {
        name: "shadow evocation, greater",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "mirage arcana",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "nightmare",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "permanent image",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "phantasmal killer",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "mislead",
        casterLevel: 20,
        timesPerDay: 1
      },
      {
        name: "summon",
        casterLevel: 20,
        limitations: "level 8, 1 temerdaemon or 1d3 suspiridaemons, 50%",
        timesPerDay: 1
      },
      {
        name: "symbol of fear",
        casterLevel: 20,
        timesPerDay: 1
      },
      {
        name: "weird",
        casterLevel: 20,
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 23
      },
      Disguise: {
        ranks: 26
      },
      "Escape Artist": {
        ranks: 23
      },
      Fly: {
        ranks: 26
      },
      Intimidate: {
        ranks: 0
      },
      "Knowledge (planes)": {
        ranks: 23
      },
      Perception: {
        ranks: 23
      },
      "Sense Motive": {
        ranks: 23
      },
      Spellcraft: {
        ranks: 26
      },
      Stealth: {
        ranks: 23
      }
    },
    special: {
      "consume fear": {
        type: "Su",
        text: "As a standard action, a phasmadaemon that begins its turn with a grappled opponent can attempt to feed on the creature's mortality and innate terror. Any creature that does not succeed at a DC 27 Will save takes 1d6 points of Charisma drain and becomes shaken for 2d4 rounds; in addition, the phasmadaemon gains 5 temporary hit points for every point of Charisma drain dealt this way. If the creature being grappled is already panicked at the beginning of the phasmadaemon's turn, it must save instead on a DC 27 Fortitude save or be slain instantly by the phasmadaemon, which gains a +1 profane bonus on attack rolls, saving throws, and checks for every 2 points of Charisma its victim had before dying; the profane bonuses last for 24 hours. The save DCs are Charisma-based."
      },
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "2d6+5"
      },
      rend: {
        universalMonsterAbility: "Rend",
        type: "Ex",
        weaponName: 7
      },
      compression: {
        universalMonsterAbility: "Compression"
      },
      "tangible horror": {
        type: "Su",
        text: "A phasmadaemon's illusion abilities are partially real at a level above and beyond those normally conjured forth by similar illusion spells. If a creature succeeds at its Will save to disbelieve either a phasmadaemon's greater shadow conjuration or greater shadow evocation spell-like ability, the conjured or evoked spell has 80% the normal effect or is 80% likely to occur, rather than 60%."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "60 ft."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  Sangudaemon: {
    source: "Book of the Damned, Vol. 3",
    creatureType: "outsider",
    subTypes: [
      "daemon",
      "evil",
      "extraplanar"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Medium",
    hd: 12,
    hdVal: 10,
    cr: 9,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Scent"
    ],
    speed: {
      base: 30,
      maneuverability: "Good",
      fly: 60
    },
    abilities: {
      str: 24,
      dex: 21,
      con: 19,
      int: 10,
      wis: 16,
      cha: 15
    },
    feats: [
      {
        name: "Bleeding Critical",
        type: "Combat"
      },
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "bleed",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        specialAbility: "grab",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "good or silver"
      },
      naturalArmor: 7
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Abaddon)",
    visualDescription: "This vaguely arachnid creature is the size of a human and is composed entirely of blood, globs of the viscous stuff dripping down its spindly legs and from its serpentine maw. A jagged set of obsidian fangs protrudes from its drooling mouth, and huge dragonf ly wings of crimson blood splay from the thing's back producing a terrifying buzz.",
    description: "A horrid combination of mosquito, spider, and vampire, sangudaemons personify death by blood loss. These horrors of Abaddon takes great pleasure in the act of draining their victims of blood, considering the fluid to be the essence of all mortality and the fundamental residence of the soul while within a mortal body. A sangudaemon bathes in the ruby humor, the fiend's own body resembling a brutal and gory massacre in full swing, with blood constantly coating and glistening its armored, chitinous carapace. Once the last vital drop has left a victim's body- thus depriving the soul of its last defenses, according to the mythology of the sangudaemons-the voracious insectile horror begins to devour its victim's spirit in earnest. An individual sangudaemon stands about 5 feet tall, weighs 200 pounds, and has a wingspan of 6 feet. Ecology A sangudaemon typically spawns from the soul of an evil mortal who died due to blood loss, such as a casualty of giant leeches or mosquitoes, or possibly the drained victim of a ravenous vampire. Whatever the cause, a sangudaemon seeks to inflict its cruel fate upon others, traversing the planes in search of mortal victims to bleed and consume. Wherever a sangudaemon goes, blood follows, as its mere presence seems to indicate a thinning of bodily fluids and the ensuing chaos of merciless and nondiscriminatory bloodletting. Perhaps more so than any other caste of daemon, sangudaemons \"hunt\" for souls in the most traditional sense of the word. Lurking primarily at night while on the Material Plane, a sangudaemon prowls the darkest corners of urban areas and sparsely populated lands alike, preying on unwary victims and dragging them back to its secluded den. Such lairs are gory, dark places, the walls entirely awash in blood. From the ceiling of a sangudaemon's lair, the fiend hangs the cocooned bodies of countless victims, some still barely conscious beneath their grotesque wrappings-bindings made of hardened blood and the eff luvium of devoured and regurgitated souls. A sangudaemon entombs its victims in these fibrous casings like a giant spider does its prey, slowly sucking the bodies dry of both blood and spirit. Sangudaemons keep their lairs underground or at high elevations in order to best preserve the bodies within, though when the cocoons have been completely leeched, the remnants begin to crumble into dust, and such charnel houses eventually fill with the dry, brittle ashes of victims. Habitat & Society While out hunting in either the wastes of Abaddon or throughout other planes, sangudaemons often work in packs of up to 10 individuals, and though they hunt together, they much prefer to keep their own independent lairs to drag victims back to for slower feedings. Other daemons find sangudaemons' potent abilities useful, especially on battlefields where blood is spilt. Piscodaemons and purrodaemons in particular find use for their services, shedding much blood in their destructive rampages and benefiting from sangudaemons' unique and devastating control over spilt blood. While sangudaemons sometimes spawn from the souls of blood-drained victims of vampires, the daemons and the undead share no love for one another, and many sangudaemons openly despise vampires. Some speculate that sangudaemons that hate vampires do so because they themselves were victims to the undead as mortals, and a faint and bitter impression permeates their otherwise vacuous recollection. The contempt some sangudaemons have for vampires often runs so deep that the daemons seek out these undead souls in particular, hoping to utterly consume them, as sangudaemons often find vampires' tainted blood even more delicious than any other creature's. A sangudaemon will at times trade numerous souls and soul gems via Abaddon's markets for just a single vampire's soul, so much do they delight in the obliteration and consumption of the thing. As such outspoken hunters of vampires, sangudaemons often find themselves at odds with the goals of Urgathoa, Abaddon's resident goddess of undeath. Though most daemons would never dream of siphoning some of her destined souls to sate their own hungers, the mere existence of the two polar forces within the blasted lands nevertheless creates an uncomfortable tension between the fiends and the goddess. What the two sides agree on is excessive gluttony, though Urgathoa's followers often partake merely of food, whereas sangudaemons indulge themselves purely on blood. As a caste, sangudaemons have a distinct preference for service to both Apollyon and Szuriel. Those in service to the Horseman of Pestilence live in his festering swamps and frequently incubate various hemorrhagic fevers and blood-thinning diseases within their various pockets of consumed mortal blood, keeping the diseases alive and active until they can be dispersed through new populations for maximum carnage. Szuriel, meanwhile, spreads the plague of war wherever she passes, and thus bloodshed is an inevitability; whether this large-scale bloodletting is brought on by the tip of a sword or the hungering jaws of a sangudaemon matters not to the Horseman of War, and she gladly accepts the services of the eager and hungry sangudaemons, who are driven to ecstatic revels by battlef ield gore.",
    organization: "solitary, cluster (2-5), or hunt (6-10)",
    languages: "Abyssal, Draconic, Infernal; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "teleport, greater",
        casterLevel: 12,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: -1
      },
      {
        name: "death knell",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "invisibility",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "summon swarm",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "hold monster",
        casterLevel: 12,
        timesPerDay: 1
      },
      {
        name: "summon",
        casterLevel: 12,
        limitations: "level 6, 1 sangudaemon 40%",
        timesPerDay: 1
      }
    ],
    skills: {
      "Escape Artist": {
        ranks: 15
      },
      Fly: {
        ranks: 15
      },
      Intimidate: {
        ranks: 15
      },
      Perception: {
        ranks: 12
      },
      "Sense Motive": {
        ranks: 12
      },
      Spellcraft: {
        ranks: 15
      }
    },
    special: {
      bleed: {
        universalMonsterAbility: "Bleed",
        damage: "2d4+1"
      },
      "blood drain": {
        universalMonsterAbility: "Blood Drain",
        damage: "1d2 Constitution"
      },
      "drain soul": {
        type: "Su",
        text: "A sangudaemon can revitalize itself by draining the soul of a dead creature. The target must be a creature the daemon dealt bleed damage to or used its blood drain ability on, and must have been dead for no longer than 1 minute. As a full-round action, it can drink the creature's soul dry, condemning the soul to Abaddon (though the soul can be returned to life as normal). The daemon gains fast healing 2 for a number of rounds equal to its Hit Dice."
      },
      "augmented critical": {
        type: "Ex",
        text: "A sangudaemon's bite threatens a critical hit on a roll of 18-20 and deals x3 damage on a successful critical hit."
      },
      "contagious gore": {
        type: "Su",
        text: "A sangudaemon alters the very flow of blood when it attacks. Any creature that stops a bleed effect created by a sangudaemon must make a DC Fortitude save or gain the bleed effect the creature just stopped (this has no effect if the creature was stopping a bleed effect on itself). A creature that succeeds at this save is immune to this ability for 24 hours. The save DC is Constitution-based."
      },
      "bleeding aura": {
        type: "Su",
        text: "Within the daemon's aura, blood gushes from wounds at an increased rate. All bleed effects deal an additional +2 points of damage (included in the daemon's bleed damage). Heal checks made to stop bleeding or stabilize a dying creature, Constitution checks made to become stable, and saving throws against effects that deal bleed damage take a -4 penalty.",
        preText: "30 ft."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  Suspiridaemon: {
    source: "Book of the Damned, Vol. 3",
    creatureType: "outsider",
    subTypes: [
      "daemon",
      "evil",
      "extraplanar"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Medium",
    hd: 9,
    hdVal: 10,
    cr: 7,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 19,
      dex: 17,
      con: 18,
      int: 14,
      wis: 15,
      cha: 18
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
        name: "Great Fortitude",
        type: "General"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Tongue",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
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
        weapon: "Tongue",
        name: "Tongue",
        specialAbility: "grab",
        damage: "1d6"
      }
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "good or silver"
      },
      SR: {
        value: 18
      },
      naturalArmor: 6
    },
    space: "5 ft.",
    reach: "5 ft. (10 ft. with tongue)",
    environment: "any (Abaddon)",
    visualDescription: "This tall, three-legged fiend possesses an avian body and head, save for its gangly arms, which end in thin, clawlike fingers. Its scrawny neck is adorned with three thick iron rings, and a grotesquely long, barbed tongue resembling an octopus's tentacle winds out of its oversized beak. Burst blood vessels fill the creature's wide eyes, and reddish speckled blotches cover its cyanotic flesh.",
    description: "Horrid fiends whose very presence makes the air difficult to breathe, suspiridaemons personify death by suffocation. Discolored and blotched like the stagnant blood of a suffocated corpse, a suspiridaemon enjoys nothing more than the last choked gasp of a victim as it wraps its tongue around the creature's throat. While a suspiridaemon does not normally breathe, its body is nonetheless convulsive and twitchy; coupled with its utterly silent demeanor, they excel at slow, gruesome kills while hiding in the shadows. The only time a suspiridaemon makes a noticeable noise is when it suddenly loosens the binds around its neck and inhales a booming breath, the sudden loss of air enough to make foes fall ill. Ecology A suspiridaemon arises from an evil soul that died by suffocation, drowning, or execution by hanging. Each individual suspiridaemon bears the mark of its particular manner of mortal death-usually in the form of the bruised or mangled flesh of its throat-and the large iron collars around its neck hide such shameful reminders of life, though the suspiridaemon itself is often unaware of this. A suspiridaemon comes into being with the rings already bound around its throat, so that it never witnesses the aff lictions that sent it to Abaddon in the first place. It is thought that should the collars around a suspiridaemon's throat ever be broken, the fiend's head would crook clumsily downward, allowing the monster to see wounds that might remind it of the terrible death it endured in its past existence. Suspiridaemons pride themselves on the number of souls they have deprived of life by strangulation, and this amount often corresponds to the number of iron rings a suspiridaemon wears on its body. While most suspiridaemons are relatively weak compared to their daemonic kin, a particularly skillful individual who is talented at crafting as well as killing can construct iron collars adorned with gem slots, items that give the suspiridaemon the ability to contain the souls of its victims in the rings for trade in the soul markets of Abaddon. When a suspiridaemon is slain, its iron rings disintegrate into ash, and any gems held within are shattered as well, freeing the trapped souls. A suspiridaemon generally uses stealth when confronting foes. Unleashing its long, winding tongue from a dark corner, one of these fiends will strangle an unwary foe in isolation from the rest of the creature's party. When in combat, a suspiridaemon greatly prefers to kill its enemies by its own hands or its barbed tongue, using its arcane abilities and other daemonic gifts to wear down or sow discord into a group of opponents. To a suspiridaemon, there is no act more appreciable than choking the life from a victim, and bringing the creature close to hear its final, distorted gasp. A suspiridaemon prefers to take souls from creatures who are on the verge of death, but aren't quite there yet; the fiend gazes at its victim's expiring face, drawing the dying creature's soul out of it with a solemn suspension of the daemon's normal twitching and convulsing. Those who have witnessed a suspiridaemon draw the life from a creature claim that the fiend almost seems to be inhaling fresh air for the first time as the victim's physical shell expires, and for the briefest moment, the monster appears to breathe normally. The eerie spectacle ends as quickly as it begins, however, as the suspiridaemon sets its gaze upon its next victim, preparing its vicious tongue for another attack. Habitat & Society While many daemons dedicate their loyalty to one of the Horsemen or some other power within Abaddon, either based on their origins, historical ties, or environmental circumstances, no such proclivities exist for suspiridaemons. Suspiridaemons avoid operating under masters whenever possible, preferring more individualistic careers of murder and destruction. They tend to work well with other daemons when forced into doing so, though the more daring individuals tend to stray from Abaddon and gravitate toward population centers on other planes to stalk prey as they please. Suspiridaemons traversing the multiverse in a pack regularly take their small hunting parties into the wilderness around smaller settlements, ravenous in their pursuit of those who stray from the protective gazes of allies. While their killing tactics are as ruthless as any other daemon, suspiridaemons' murders are particularly shrouded in a cold manner of sincere and solemn contemplation, their grisly crimes against souls veiled in a mist of contempt toward the living as well as hatred for themselves. Some speculate that this self-hatred might be connected to the lingering doubts as to their origins, the itch beneath their iron collars that reminds them of their own past mortality. Whatever the cause of their self-doubt, the feeling does not seem to bother most other daemons, who generally view suspiridaemons as useful companions whether inside or outside of Abaddon. Piscodaemons and sangudaemons in particular consider them among the most ideal lesser daemons to command. Suspiridaemons cannot speak, and rarely use their powers of telepathy to communicate, simply nodding discreetly when given a task by a more powerful daemon. This silent subservience only adds to other daemons' general appreciation of their humble and disturbing demeanors, though most are sure to keep the strangling fiends at a distance.",
    organization: "solitary, gang (2-4), or mob (5-9)",
    languages: "Abyssal, Draconic, Infernal (cannot speak); telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "death knell",
        casterLevel: 9,
        timesPerDay: -1
      },
      {
        name: "ghoul touch",
        casterLevel: 9,
        timesPerDay: -1
      },
      {
        name: "ray of enfeeblement",
        casterLevel: 9,
        timesPerDay: -1
      },
      {
        name: "stinking cloud",
        casterLevel: 9,
        timesPerDay: 3
      },
      {
        name: "vampiric touch",
        casterLevel: 9,
        timesPerDay: 3
      },
      {
        name: "cloudkill",
        casterLevel: 9,
        timesPerDay: 1
      },
      {
        name: "summon",
        casterLevel: 9,
        limitations: "level 4, 1d3 lacridaemons 35%",
        timesPerDay: 1
      }
    ],
    skills: {
      Climb: {
        ranks: 12
      },
      Diplomacy: {
        ranks: 12
      },
      Intimidate: {
        ranks: 12
      },
      "Knowledge (nature)": {
        ranks: 12
      },
      "Knowledge (planes)": {
        ranks: 9
      },
      Perception: {
        ranks: 9
      },
      "Sense Motive": {
        ranks: 9
      },
      Stealth: {
        ranks: 9
      }
    },
    special: {
      "concussive gasp": {
        type: "Su",
        text: "Once per day, a suspiridaemon can inhale with such sudden force as to evacuate the air in its proximity, causing a sudden wave of air pressure from the implosion. Every creature within 30 feet must make a DC 18 Fortitude save or take 5d6 points of sonic damage and become sickened for 1d4 rounds. Any creature that makes a successful save takes only half damage and is not sickened. A suspiridaemon cannot perform this ability if it is currently grappling a creature with its tongue. The save DC is Constitution-based."
      },
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "1d6+6"
      },
      strangle: {
        type: "Ex",
        text: "Suspiridaemons have an unerring talent for seizing their victims by the neck. A creature that is grappled by a suspiridaemon cannot speak or cast spells with verbal components."
      },
      suffocate: {
        type: "Ex",
        text: "A creature affected by the daemon's strangle ability cannot breathe and must hold its breath. Because of the daemon's thin air aura, this can quickly render an opponent unconscious."
      },
      "no breath": {
        universalMonsterAbility: "No Breath",
        text: ""
      },
      "thin air": {
        type: "Su",
        text: "A suspiridaemon's aura makes the air around it difficult to breathe. Creatures that need to breathe can only hold their breath half as long as normal while within this aura, and suffer from altitude sickness as if in a low peak or high pass (see Altitude Zones, Core Rulebook 430)."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    },
    resistances: [
      {
        damageType: "sonic",
        value: 30
      }
    ]
  },

  Temerdaemon: {
    source: "Book of the Damned, Vol. 3",
    creatureType: "outsider",
    subTypes: [
      "daemon",
      "evil",
      "extraplanar"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Large",
    hd: 17,
    hdVal: 10,
    cr: 14,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 23,
      dex: 18,
      con: 23,
      int: 13,
      wis: 24,
      cha: 20
    },
    feats: [
      {
        name: "Blinding Critical",
        type: "Combat"
      },
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Combat Expertise",
        type: "Combat"
      },
      {
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Trip",
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
        name: "Weapon Focus",
        type: "Combat",
        value: "Scythe",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Scythe",
        enchantments: [
          {
            name: "Enhancement Bonus +1",
            source: "inherent"
          }
        ],
        name: "Scythe",
        specialAbility: "confusion",
        damage: "2d4"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        specialAbility: "confusion",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "good and silver"
      },
      SR: {
        value: 25
      },
      naturalArmor: 14
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any (Abaddon)",
    visualDescription: "This creature lurches forward on multiple arms and legs, its spine contorted into a painful curve with its hips higher than it head. Seemingly distracted and muttering to itself, the thing rarely looks up with its glowing red eyes, its hair composed of hundreds of thin, white tendrils that hang over its head like a veil. Strapped onto the creature's body at various points are sacks and belt pouches stuffed with bizarre collections of objects, and its rear arms wield a wide, black bladed scythe, still coated with the blood of the fiend's last victim.",
    description: "Temerdaemons personify the concept of accidental death. A knight falls upon her sword, a peasant trips and breaks his neck, a structure fails in ways its builders never foresaw and buries dozens of innocents, and meanwhile, a distant temerdaemon cackles knowingly. While true accidents please the fiend, it also delights in engineering the mishaps itself, crafting incomprehensibly complex plots that lead to the slaughter of as many mortals as possible. A temerdaemon often wades into the aftermath of such engineered catastrophes, carving apart the crippled survivors and sowing mass confusion and hysteria by its very proximity. A gangly mass consisting of a rotund torso, four arms, and four legs, the average temerdaemon is 10 feet long and weighs 1,200 pounds, not counting its bizarre collection of mechanical fetishes and tinkering equipment. Ecology Lesser fiends who follow in an existing temerdaemon's wake and learn from the daemon's actions are those most typically chosen by one of the Four Horsemen or a member of the daemonic elite for elevation into this terrible caste of crippled giants. Occasionally, however, an evil mortal soul proves worthy of such a station, having died in a singularly horrific accident, especially one engineered by its own hands. In such cases, transition from soul to temerdaemon is swift-on a cosmic scale-and made even swifter by a proclivity to prey upon other mortals. Though Zyphus-the god of accidental deaths and tragedies-is thought by some to be the conceptual father of temerdaemons, the Grim Harvestman has never outright claimed responsibility for them. Nonetheless, he frequently delights in temerdaemons and the infrequent unconsumed souls they send his way. Neither Zyphus nor the temerdaemons seek to disrupt the other's claim over particular souls; they find the destinations of such tragically doomed mortals frequently cross paths, and are as likely to end up in the hands of daemons as the god's minions. Cultists of Zyphus often revel in the doings of temerdaemons, though the daemons themselves despise such worship by the very mortals they seek to destroy. Even slaying these foolish accident-worshipers is hardly enough for the angry temerdaemons, as the daemons' masterfully constructed accidents are wasted on those who actually hope for the horrid events. According to temerdaemons, freak accidents are best engineered for those who go about life with little concern for danger, especially those who least expect such misfortune to befall them. People who watch their backs-including paranoids and betrayers-don't satisfy the morbid desires of temerdaemons as much as the daydreaming child or absent-minded village idiot. No two temerdaemons look exactly the same, as these treacherous beings take on as many forms as there are ways to freakishly die. Particularly powerful individuals may rise to enormous sizes, possessing dozens of legs and arms, as well as multiple heads, all of which strive to wreak as much disaster as possible upon the souls around them. Habitat & Society Temerdaemons wander the multiverse in search of opportunities for sabotage and treachery. Those cultists of Zyphus foolish enough to summon the daemons in hopes of bargaining with them for their services often find themselves victims of their own elaborate rituals. In their most fortunate cases, a temerdaemon arises on the Material Plane only to greet its summoners with its wicked smile and deadly aura, causing chandeliers to fall upon unwary victims' heads, robed priests to trip onto sharp candelabras, and sconces to break off of walls and ignite dusty curtains to set an entire building on fire. Now on the Material Plane, its summoners dead, a temerdaemon strives to create as much havoc and mischief as possible before being banished to its home in Abaddon. If it weren't for the extravagant and terrif ically tragic manner of his worshipers' deaths, Zyphus might be rather displeased with the actions of these cunning daemons, but as it stands, there is rarely conf lict between the two forces, which inadvertently share similar goals. Temerdaemons rarely cooperate among themselves when crafting masterful hazards, preferring to enact their deadly accidents on their own and later boast to their kindred of their massacres. No two accidents are alike, and though temerdaemons sometimes gather in groups of two or three for particularly elaborate schemes, they have no reason to share their techniques or formulate plans for long, as premeditating a particular slaughter is entirely counterproductive in the eyes of a temerdaemon. To these improvisational fiends, an accidental murder is even more satisfying than a mere accidental death. Despite their preference to act alone, temerdaemons at times happily utilize some of their lesser kindred as unwitting cogs in their disastrous plans. Particular among these pawns are the miniscule cacodaemons, which frequently cluster in numbers of up to a dozen around a given temerdaemon, ready to absorb and regurgitate the souls of their greater kindred's kills. When a temerdaemon cannot attract cacodaemon followers, it simply captures them, and any given temerdaemon of considerable power can often be found with dozens of these least daemons impaled on barbed hooks, stuffed into tightly drawn satchels, or crammed into small cages, each container dangling from its myriad straps, belts, and holsters.",
    organization: "solitary, pair, or trapper gang (3 temerdaemons and 15-30 cacodaemons)",
    languages: "Abyssal, Draconic, Infernal; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "bestow curse",
        casterLevel: 17,
        timesPerDay: -1
      },
      {
        name: "death knell",
        casterLevel: 17,
        timesPerDay: -1
      },
      {
        name: "gaseous form",
        casterLevel: 17,
        timesPerDay: -1
      },
      {
        name: "passwall",
        casterLevel: 17,
        timesPerDay: -1
      },
      {
        name: "stone shape",
        casterLevel: 17,
        timesPerDay: -1
      },
      {
        name: "telekinesis",
        casterLevel: 17,
        timesPerDay: -1
      },
      {
        name: "disintegrate",
        casterLevel: 17,
        timesPerDay: 3
      },
      {
        name: "dispel magic, greater",
        casterLevel: 17,
        timesPerDay: 3
      },
      {
        name: "illusory wall",
        casterLevel: 17,
        timesPerDay: 3
      },
      {
        name: "suggestion",
        casterLevel: 17,
        timesPerDay: 3
      },
      {
        name: "summon",
        casterLevel: 17,
        limitations: "level 6, 1 hydrodaemon 50%",
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 17
      },
      Climb: {
        ranks: 20
      },
      Intimidate: {
        ranks: 20
      },
      "Knowledge (planes)": {
        ranks: 9
      },
      "Knowledge (religion)": {
        ranks: 11
      },
      Perception: {
        ranks: 17
      },
      "Sense Motive": {
        ranks: 17
      },
      Stealth: {
        ranks: 17
      }
    },
    special: {
      confusion: {
        type: "Su",
        text: "Creatures struck in combat by a temerdaemon's claws or scythe must succeed at a DC 25 Will save or be confused for 1 round. This is a mind-affecting effect. The save DC is Charisma-based. Reaper's Curse (Su) Those in proximity to a temerdaemon are afflicted by a profound increase in self-inflicted and ally-inflicted wounds, failures in magic, and similar accidental damage. Arcane spell failure chances for armor are doubled. A creature that rolls a natural 1 on its attack roll automatically rerolls the attack against itself (01-50%) or an ally (51-100%). If there is no ally in range, the attack always targets the creature. A creature that rolls a natural 1 on its roll to cast defensively suffers a mishap (see Scroll Mishaps, Core Rulebook 491). Skill checks that have serious consequences if failed by 5 or more (such as Climb, Disable Device, and Swim) have these consequences on all failed checks."
      },
      "undersized weapons": {
        type: "Ex"
      },
      "reaper's curse": {
        type: "Su",
        text: "Those in proximity to a temerdaemon are afflicted by a profound increase in self-inflicted and ally-inflicted wounds, failures in magic, and similar accidental damage. Arcane spell failure chances for armor are doubled. A creature that rolls a natural 1 on its attack roll automatically rerolls the attack against itself (01-50%) or an ally (51-100%). If there is no ally in range, the attack always targets the creature. A creature that rolls a natural 1 on its roll to cast defensively suffers a mishap (see Scroll Mishaps, Core Rulebook 491). Skill checks that have serious consequences if failed by 5 or more (such as Climb, Disable Device, and Swim) have these consequences on all failed checks.",
        preText: "30 ft."
      }
    }
  },

  Venedaemon: {
    source: "Book of the Damned, Vol. 3",
    creatureType: "outsider",
    subTypes: [
      "daemon",
      "evil",
      "extraplanar"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Medium",
    hd: 6,
    hdVal: 10,
    cr: 5,
    racialFeatures: [
      "Arcane Sight",
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30,
      maneuverability: "Average",
      fly: 30
    },
    abilities: {
      str: 11,
      dex: 15,
      con: 16,
      int: 22,
      wis: 16,
      cha: 21
    },
    feats: [
      {
        name: "Combat Casting",
        type: "General"
      },
      {
        name: "Eschew Materials",
        type: "General"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Magical Aptitude",
        type: "General"
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
      DR: {
        value: 5,
        damageType: "good or silver"
      },
      SR: {
        value: 16
      },
      naturalArmor: 6
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Abaddon)",
    visualDescription: "Silken robes drape this androgynous fiend's form, providing only an outline of the body beneath. Claw-tipped tentacles emerge from the cuffs, clutching wands and soul gems, while below its robe's margins, its multiple-jointed legs-almost like a reptilian insect's-end in clawed, three-toed chitinous feet. Its face remains perpetually covered by a dark veil, and a trio of long, forked tongues periodically emerges from its rounded mouth and tastes the air around its thin lips.",
    description: "The venedaemon personifies death by magic, and so possesses an inborn talent for all manner of sorcery. As hungry for souls as any other member of its daemonic brethren, the venedaemon thirsts equally for intangible wealth through the acquisition of knowledge, so that it can best utilize the arcane magic lurking within its blood. In particular, venedaemons yearn for the secrets and magical lore held within the bindings of wizards' tomes, knowing that these arcane formulae are the key to unlocking their mysterious powers. In the process of acquiring such tomes of knowledge, venedaemons invariably come across other forms of information- whether it be info regarding a rival daemon's weaknesses, lore that hints at a wealth of unclaimed souls hidden in one of Abaddon's vast caverns, or a rumor of some hidden and terrible source of daemonic power-that they can make use of in trading with other daemons. These rumors and smatterings of advice can be sold to other daemons for captured souls, and the trade often goes both ways, as venedaemons are also inclined to trade their hard-earned soul gems for tomes of magic other fiends may have chanced upon. In addition to its myriad magical abilities as a daemon, a venedaemon casts spells like a sorcerer with a caster level equal to its Hit Dice. A venedaemon can gain additional levels as a sorcerer in order to bolster its arcane powers, in which case it gains a bloodline (usually Abyssal or Infernal) as well as a sorcerer's other class features and special abilities. Venedaemons are gaunt, and despite standing close to 7 feet tall, they rarely weigh more than 150 pounds. Ecology Like all mundane daemons, venedaemons most often form from the hunted, specifically from those evil souls who died as a result of the abuse of magic-whether by their own greedy hands, at the whim of powerful rivals, through the inadvisable pursuit of knowledge too terrible for them to safely handle, or by other spellcasters who slew them for their crimes. While these hunted were often spellcasters themselves, some venedaemons develop from nonmagical souls that were simply casualties to arcane violence. These individuals are often so tainted with the magical disturbances that killed them that they nonetheless develop arcane powers in an ironic twist of daemonic evolution. Other times still, venedaemons formulate from much odder means. Occasionally, mortal wizards seek to control the awe-inspiring forces of Abaddon and its daemons by using cacodaemon as familiars. The cacodaemon, for its part, is usually willing to serve a mortal master for a time in this regard, though it usually has ulterior motives for its servitude. When a cacodaemon familiar's master dies, the daemon is often prompt in devouring the mage's soul and turning the soul into a soul gem. Instead of the soul gem returning to Abaddon and being consumed by a more powerful daemon, sometimes the deceased mage's power triggers a reaction within the cacodaemon, fusing with it and transforming the familiar over several weeks or months into a new creature, typically a venedaemon with no memories of its mortal or previous daemonic existence. Far from being a hazard, this possibility of transformation is in fact one of the primary reasons why cacodaemons are sometimes eager to serve as familiars, as it represents one of the only ways for a cacodaemon to advance its station. Habitat & Society Most venedaemons are relatively weak compared to the towering daemonic brethren that inhabit Abaddon, and knowing this, they often work together as best they can, collaborating in groups with other venedaemons, or in conjunction with other fiends willing to accept their services. Hurled into Abaddon with an innate talent for magic but only scraps of its mortal knowledge remaining, the average venedaemon ultimately flocks to the service of a more powerful daemon willing to act as a patron that lets the venedaemon pursue its studies. In such arrangements, the venedaemon slowly gains power and influence within the confines of its daemonic partnership, which often consists of itself, its daemonic master, and many other daemons acting as a team built on the shared goal of total mortal annihilation. This daemonic horde traverses planes searching for opportunities to create mass destruction, the master simply using the venedaemon for its magical qualities to slaughter mortal souls. As the venedaemon gleans what it can from the charred remains of dead mortal spellcasters' volumes of scribbled formulae, it gradually strengthens its unspeakable powers, and in time, the tables are turned, and when the venedaemon slays its patron, it gains dominion over dark magic as well as its brethren. Those venedaemons who do not wish to submit to the will of a more powerful daemon in order to pursue knowledge often simply prefer to be left alone to their research, experimenting on mortals with their dark arts and occasionally selling their findings to other daemons for souls and magical artifacts. Venedaemons find themselves aligned with the lesser fiends of Abaddon, particularly the equally lowly ceustodaemons, whose deathly association with the energies and particularly subservient standing among daemons makes the two obvious allies. Cacodaemons also make for suitable alliances, as a venedaemon may help guide its smaller brethren to capture the soul of an opposing spellcaster, allowing the cacodaemon to mature with the soul and in time develop into a fellow venedaemon. Within the realm of Abaddon, venedaemons gravitate toward the River Styx for its mysterious, memory-wiping properties, for many venedaemons themselves find a peculiar yearning for their memories, if only to regain even more of the power they once possessed, somewhere in the dark recesses of their mind.",
    organization: "solitary, pair, or cabal (3-6)",
    languages: "Abyssal, Aquan, Celestial, Common, Draconic, Ignan, Infernal; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "arcane sight",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "dimension door",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "dispel magic",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "slow",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "summon",
        casterLevel: 6,
        limitations: "level 3, 1 cacodaemon, 75%",
        timesPerDay: 1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 6,
      spells: [
        {
          name: "(4/day)-hold person",
          limitations: "4/day",
          level: 3
        },
        {
          name: "",
          limitations: "6/day",
          level: 2
        },
        {
          name: "scorching ray",
          level: 2
        },
        {
          name: "(8/day)-charm person",
          limitations: "8/day",
          level: 1
        },
        {
          name: "mage armor",
          level: 1
        },
        {
          name: "magic missile",
          level: 1
        },
        {
          name: "shield",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "arcane mark",
          level: 0
        },
        {
          name: "bleed",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "prestidigitation",
          level: 0
        },
        {
          name: "ray of frost",
          level: 0
        },
        {
          name: "read magic",
          level: 0
        }
      ],
      casterClass: "Sorcerer"
    },
    skills: {
      Bluff: {
        ranks: 6
      },
      Disguise: {
        ranks: 6
      },
      Fly: {
        ranks: 9
      },
      Intimidate: {
        ranks: 9
      },
      "Knowledge (arcana)": {
        ranks: 9
      },
      "Knowledge (planes)": {
        ranks: 6
      },
      "Knowledge (religion)": {
        ranks: 6
      },
      Perception: {
        ranks: 6
      },
      "Sense Motive": {
        ranks: 6
      },
      Spellcraft: {
        ranks: 9
      },
      Stealth: {
        ranks: 6
      },
      "Use Magic Device": {
        ranks: 9
      }
    },
    special: {
      "arcane soul-crush": {
        type: "Su",
        text: "A venedaemon may consume a held soul gem as a swift action, allowing it to cast any of its spells known without using a spell slot. For the daemon to use this ability, the consumed gem must contain the soul of a creature with Hit Dice equal to or greater than the spell level of the desired spell."
      }
    }
  },

};
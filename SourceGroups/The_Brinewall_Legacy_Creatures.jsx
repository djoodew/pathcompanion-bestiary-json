
export const The_Brinewall_LegacyCreatures = {
  Belostomatid: {
    source: "The Brinewall Legacy",
    creatureType: "vermin",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 4,
    hdVal: 8,
    cr: 3,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Tremorsense 60 ft."
    ],
    speed: {
      base: 20,
      maneuverability: "Poor",
      fly: 20,
      swim: 40
    },
    abilities: {
      str: 19,
      dex: 13,
      con: 16,
      int: "-",
      wis: 11,
      cha: 2
    },
    feats: [],
    attacks: [
      {
        weapon: "Claw",
        name: "2 Claws",
        specialAbility: "grab",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "digestive enzymes",
        damage: "1d6",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to mind-affecting effects"
    ],
    defense: {
      naturalArmor: 8
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "temperate lakes, rivers, or swamps",
    visualDescription: "Six powerful legs, each ending in a hooked claw, jut from the shieldlike body of this massive insect.",
    description: "The belostomatid is the monstrous form of its diminutive counterpart, a 5-inch-long \"giant\" water bug commonly known as a \"toe-biter.\" A monstrous belostomatid has a flattened, oval-shaped body measuring 12 feet long, and four rear, oarlike legs, which it uses to thrust through the water. The belostomatid's front two legs are thick and end in sharp, single-tipped claws, which it uses to slay its prey. Two large black eyes are mounted on each side of the creature's rostrum, and it uses its 2-foot-long, beaklike proboscis to inject its deadly acidic enzymes into its victims. Belostomatids are ambush predators. They hide amid floating snags and piles of debris in still and slow-moving waters, seamlessly blending in with their surroundings despite their size. With a powerful surge forward, a belostomatid grabs its prey, thrusts its rostrum deep into the prey's body, and begins pumping a paralyzing digestive enzyme into its prey, dissolving it from the inside out.",
    organization: "solitary",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 6
      },
      Stealth: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Swim: {
        ranks: 2
      }
    },
    special: {
      "digestive enzyme": {
        type: "Ex"
      },
      "hold breath": {
        universalMonsterAbility: "Hold Breath",
        parenthetical: ""
      },
      stench: {
        universalMonsterAbility: "Stench",
        duration: "3 rounds",
        saveDC: 10
      },
      grab: {
        universalMonsterAbility: "Grab"
      },
      "digestive enzymes": {
        type: "Ex",
        text: "A belostomatid injects a corrosive enzyme into its prey that both paralyzes and liquefies flesh. A creature struck by the belostomatid's piercing bite must succeed at a DC 15 Fortitude save or be paralyzed for 1d4 rounds. For every round the creature is paralyzed it takes 1d2 points of Constitution damage."
      }
    }
  },

  "Water Strider Swarm": {
    source: "The Brinewall Legacy",
    creatureType: "vermin",
    subTypes: [
      "swarm"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Diminutive",
    hd: 2,
    hdVal: 8,
    cr: 1,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Tremorsense 30 ft."
    ],
    speed: {
      base: 10,
      swim: 20,
      water: "walk"
    },
    abilities: {
      str: 1,
      dex: 18,
      con: 10,
      int: "-",
      wis: 10,
      cha: 2
    },
    feats: [],
    attacks: [
      {
        weapon: "swarm",
        name: "swarm",
        specialAbility: "blood drain, distraction",
        damage: "1d6"
      }
    ],
    immunities: [
      "Immune to mind-affecting effects, weapon damage"
    ],
    defense: {},
    space: "10 ft.",
    reach: "0 ft.",
    environment: "temperate lakes, rivers, or swamps",
    visualDescription: "Countless thousands of long-legged water bugs glide soundlessly over the surface of the water, skimming over it in a wave of twitching bodies.",
    description: "Water striders are aquatic insects that skate across the surface of still water. Their bodies are long and narrow, with an individual measuring less than 1 inch in length. The body and legs of a water strider are covered with a layer of water-repelling hairs, making it possible for the strider to resist the surface tension of the water. The insect stands on its front and rear legs, and pushes against the water surface with its middle legs to propel itself forward. Water striders are also excellent jumpers, launching themselves distances of up to 5 feet. Any movement on land is limited to jumping. Swarms of particularly vicious water striders commonly gather at the edges of bodies of water, attacking anything that disturbs the surface of their pools.",
    organization: "solitary or pair",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 10,
        bonuses: [
          {
            source: "inherent",
            situational: true,
            note: " (+6 jump)"
          }
        ]
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
      Swim: {
        ranks: 0
      }
    },
    special: {
      "blood drain": {
        universalMonsterAbility: "Blood Drain",
        damage: "1d2 Constitution"
      },
      "water walking": {
        type: "Ex",
        text: "Water striders are covered with water-repellent hairs that prevent them from sinking beneath the water's surface. The swarm's movement speed across water is 30 feet."
      }
    }
  },

  "Giant Hellgrammite": {
    source: "The Brinewall Legacy",
    creatureType: "vermin",
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 7,
    hdVal: 8,
    cr: 5,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Perception +5"
    ],
    speed: {
      base: 30,
      swim: 20
    },
    abilities: {
      str: 19,
      dex: 11,
      con: 16,
      int: "-",
      wis: 9,
      cha: 2
    },
    feats: [],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "grab",
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
    immunities: [
      "Immune to mind-affecting effects"
    ],
    defense: {
      naturalArmor: 7
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "temperate rivers or streams",
    visualDescription: "More than a dozen segmented black legs propel this giant, caterpillar-like insect, its thick head dominated by a pair of powerful, gnashing pincers.",
    description: "Giant hellgrammites are the fierce and predacious larvae of dobsonf lies of terrifying size. While their diminutive brethren measure several inches long, the monstrous variety measure 10 feet long and weigh up to 800 pounds. The body of the giant hellgrammite is long and flattened, and generally ranges from dark brown to reddish in color. The front third of its body consists of a well-armored head and thoracic segments, with stout, segmented legs. The head possesses a fearsome set of jaws, small antennae, and a set of clustered eye spots on either side. The posterior twothirds of the hellgrammite consist of nine densely haired abdominal segments, each with a pair of lateral filaments and gill tufts underneath for underwater breathing. The hellgrammite's abdomen ends in pair of terminal prolegs, each with a pair of hooks, which aid the creature in climbing or anchoring itself in fast-moving currents, and can be used in a tail slap to slash at its enemies. The giant hellgrammite is a simple but ferocious predator. It latches onto its prey with its deadly jaws and proceeds to crush the life from it, feeding on the body after its victim can no longer struggle. The hellgrammite often attempts to drag the prey back to a protected area between or behind stream boulders, or down to the bottom of a deep side-pool. The strength of a hellgrammite's jaws is so great that, even in death, they clench tightly and do not relinquish their grip.",
    organization: "solitary or pair",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 4
      },
      Perception: {
        ranks: 2,
        bonuses: [
          {
            source: "inherent",
            value: 4,
            situational: true,
            note: "+8 in water"
          }
        ]
      },
      Stealth: {
        ranks: 0,
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
      "death grip": {
        type: "Ex",
        text: "Upon its death, a hellgrammite's massive jaws close tightly and lock. Any creature or object that is grappled at the time of the hellgrammite's death takes an additional 1d8+2 points of damage per round unless it makes a DC 22 Escape Artist check, makes a DC 20 Strength check, or deals an additional 10 points of damage to the hellgrammite's corpse to escape."
      },
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "2d8+4"
      },
      amphibious: {
        universalMonsterAbility: "Amphibious"
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  Hala: {
    source: "The Brinewall Legacy",
    creatureType: "outsider",
    subTypes: [
      "air",
      "chaotic",
      "demon",
      "evil",
      "extraplanar"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 5,
    hdVal: 10,
    cr: 4,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30,
      maneuverability: "Perfect",
      fly: 60
    },
    abilities: {
      str: 16,
      dex: 19,
      con: 14,
      int: 12,
      wis: 11,
      cha: 15
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
        name: "Weapon Finesse",
        type: "Combat"
      },
      {
        name: "Wingover",
        type: "Monster"
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
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "cold iron or good"
      },
      SR: {
        value: 15
      },
      naturalArmor: 4
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Abyss)",
    visualDescription: "Skin the color of thunderheads and wings made for soaring through the most violent winds mark this lean, cyclopic being as a master of terrible storms. The sound of shrieking wind emanates from its mouth full of needle-sharp teeth.",
    description: "Hala demons are commonly known as storm demons. Bound to service by Pazuzu, these demons ride the winds across the Abyssal skies, lurk within dark and turbulent clouds, and act as his scouts and spies. Halas have a single, blood-red eye, an enormous mouth lined with razor-sharp teeth, and lengthy horns growing from their heads. A typical hala stands 7 feet tall, weighs 200 pounds, and possesses large wings that span 20 feet across. Ecology Hala demons form from covetous souls, those who desired the possessions of others so much so that they indulged in such acts as murder, theft, or blackmail. The more persons harmed by these desires, the more likely the soul is to become a hala in the Abyss. Halas are masters of the winds, harnessing the power of storms, redirecting and amplifying that energy to cause the most damage and chaos possible. They relish the destructive forces of their storms, and can manipulate a storm's energy to rain down hailstones to pelt the area. Their command of the winds also aids them in flight. They are never impeded by storm winds, but instead ride them, often achieving top speeds by accelerating the wind currents around them. Due to the nature of their origin, halas are highly possessive. A hala will often refer to the storm clouds they marshal as \"my storm.\" A hala is predisposed to grab any item it finds particularly desirable, and will actively pillage regions that its storm passes over. The desire to take from others remains so prevalent in the hala's nature that it often carries large sacks in which to place all the items it takes during its flights. Bags of holding or handy haversacks are highly prized possessions to a hala, as it allows it to pillage even more items. Halas are voracious, with large mouths that open nearly ear-to-ear. Edible items they find in their pillaging are often consumed immediately. This includes a particular appetite for children and other Small humanoids. Habitat & Society Halas can be seen throughout the Abyss, roaming the skies in servitude to Pazuzu as his dedicated scout force. Their heaviest concentration, however, exists in High M'Vania, as all hala demons are required to return to Pazuzu's realm once a century to report all that they have observed. Despite the duty to return to High M'Vania, halas are solitary demons, distrusting all others, especially other hala demons, fearing that they will attempt to take their pillaged possessions. Therefore, most halas live in isolated, remote areas where they maintain their hoards of ill-gotten gains. Pazuzu values his hala minions not only for the intelligence they gather on the activities of his enemies in the Abyss, but also for the chaos and destruction they bring on the winds. He is especially fond of sending halas to the Material Plane to ravage the countryside with storms and hail. As in the Abyss, halas on the Material Plane prefer to reside in remote areas. The lair of a hala is often located in a hidden cave in an isolated mountain range, or in the hollow of a giant, ancient tree deep in a forest or swamp. While hala demons have a general dislike for or distrust of nearly all creatures, they have an especially strong fear and hatred of two creatures: eagles and dragons. Eagles have an innate response to attack and drive a hala from the skies, possibly due to the threat the hala represents to the eagle's territory and offspring. Dragons-of any breed-largely view the storm demons as a danger to their own hoards of treasure, for if a hala discovers the dragon's lair, it will stop at nothing to possess all that lies within it.",
    organization: "solitary",
    languages: "Abyssal, Celestial, Draconic, telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "alter winds",
        casterLevel: 5,
        timesPerDay: -1
      },
      {
        name: "gust of wind",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "river of wind",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "control winds",
        casterLevel: 5,
        timesPerDay: 1
      },
      {
        name: "summon",
        casterLevel: 5,
        limitations: "level 3, 1 hala 40%",
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 8
      },
      "Escape Artist": {
        ranks: 8
      },
      Fly: {
        ranks: 0
      },
      Intimidate: {
        ranks: 8
      },
      "Knowledge (planes)": {
        ranks: 5
      },
      Perception: {
        ranks: 5
      },
      Stealth: {
        ranks: 5
      }
    },
    special: {
      hailstorm: {
        type: "Su",
        text: "A hala can call down hailstones from surrounding clouds once every 1d4 rounds as a standard action. These hailstones deal 1d6 points of bludgeoning damage and 1d6 points of cold damage to all creatures within a 20-foot radius that have no overhead cover. A DC 14 Reflex save halves this damage. The save DC is Constitution-based. To use this ability, the hala must be outside and there must be clouds in the sky."
      },
      "vengeful wind": {
        type: "Su",
        text: "Anytime a hala takes damage from a critical hit, a powerful blast of wind explodes forth in the direction of the attacker. This blast takes the form of a 60-foot-long gale, treated as a gust of wind spell, directed from the hala toward the opponent that scored the critical hit against it (if that creature is more than 60 feet away, the wind is aimed in its direction but doesn't come close enough to affect it). This wind is also charged with electricity. Any creature in or that enters the area of effect must make a DC 14 Reflex save or take 3d6 points of electricity damage. The save DC is Constitution-based."
      },
      "stormwind aura": {
        type: "Su",
        text: "Halas surround themselves with a buffeting shroud of supernatural, windstorm-force winds. These winds shield a hala from any other wind effects and form a shell of breathable air around it, allowing the hala to breathe underwater. Ranged weapons and gases directed toward a hala are affected as the spell wind wall."
      }
    }
  },

  "Yamabushi Tengu": {
    source: "The Brinewall Legacy",
    creatureType: "outsider",
    subTypes: [
      "native",
      "oni",
      "shapechanger"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Medium",
    hd: 6,
    hdVal: 10,
    cr: 5,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "See Invisibility"
    ],
    speed: {
      base: 30,
      maneuverability: "Average",
      fly: 30
    },
    abilities: {
      str: 15,
      dex: 19,
      con: 18,
      int: 12,
      wis: 15,
      cha: 16
    },
    feats: [
      {
        name: "Combat Casting",
        type: "General"
      },
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Kusarigama",
        enchantments: [
          {
            name: "Enhancement Bonus +1",
            source: "inherent"
          }
        ],
        name: "Kusarigama",
        damage: "1d3/1d6"
      },
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Composite longbow",
        name: "Composite longbow",
        damage: "1d8",
        strBonus: 2
      }
    ],
    defense: {
      saves: {
        All: [
          {
            value: -2,
            note: "vs. illusion (pattern) spells"
          }
        ]
      },
      SR: {
        value: 16
      },
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "temperate mountains",
    visualDescription: "This humanoid creature has a fearsome mien, with a cruel red face, glaring yellow eyes, a prodigious nose, and large ravenlike wings.",
    description: "Yamabushi tengus are oni with a predilection toward thievery and trickery, wearing the flesh of wicked, fiendish tengus. When a yamabushi tengu first appears, its first course of action is invariably to seek out a well-hidden nest or other nook to serve as a lair. Despite their ability to fly, most yamabushi tengus are nervous in open areas, since it's easy to be seen in such environs. A yamabushi tengu is more at home indoors or at night, where it can skulk in the shadows when it's unsure of its surroundings. A yamabushi tengu is 5 feet tall and weighs 120 pounds. Ecology While most yamabushi tengus look like normal tengus, they can actually manifest in a number of humanoid bird shapes. Ravens and crows are the most common model which these creatures take their appearance from, yet tales exist of yamabushi tengus with features more akin to cranes, eagles, peacocks, gulls, vultures, and even pelicans. Only the features of ducks and other billed avians (like geese) are notably absent from yamabushi tengus. In fact, yamabushi tengus have a strange loathing for ducks-they find these birds to be a mix of comic tragedy and pitiful hideousness, from the blunt shape of their bills to their distinctive gait and their warbling quacks. The presence of a duck can often provoke even the most restrained and crafty yamabushi tengu into making poor choices: faced with choosing between attacking a truly dangerous foe or using their weapons and magic against a nearby duck, most yamabushi tengus make the choice to kill the duck, even if such an act might compromise their position to their actual enemy. Habitat & Society Yamabushi tengus are driven by greed, particularly for shiny treasures like coins, jewels, gems, and polished weapons. Many extend this obsession to clothing (favoring brightly colored silks) and armor (preferring light armor over medium or heavy armor). Most of what a yamabushi tengu plots or plans can be traced to a desire to gather as much shiny treasure as possible, but they are also especially entranced and intrigued by avian humanoids-particularly tengus, dire corbies (see Pathfinder Campaign Setting: Misfit Monsters Redeemed) and garudas (see Pathfinder Module: Cult of the Ebon Destroyers). Yamabushi tengus share the most in common with tengus, of course, for it is from these creatures that the oni take their forms. Dire corbies and garudas, being non-humanoid monsters (monstrous humanoids and outsiders respectively) are in strange ways both similar and quite different from tengus, and as such yamabushi tengus find them endlessly fascinating. In the case of dire corbies, the creatures' feral natures, xenophobic personalities, and overall lack of civilization make them ideal groups for a yamabushi tengu to infiltrate and take control of-although in most cases, a yamabushi tengu who infiltrates a dire corby flock eventually grows tired of the crude creatures and moves on. Garudas are more difficult for yamabushi tengus to interact with, for these outsiders are generally good. Encounters between garudas and yamabushi tengus almost always end in combat, typically with the more powerful garuda the victor. As a result, when confronted by a garuda, most yamabushi tengus choose subtlety over direct confrontation. In a best-case scenario, a yamabushi tengu's minions or allies capture and restrain the garuda, giving the yamabushi tengu ample opportunity to interrogate or even vivisect the garuda prisoner. Most yamabushi tengus, though, find greatest comfort dwelling among thieves' guilds-particularly among those populated by tengus, in which case a yamabushi tengu appears in its natural form, using its wings as an obvious badge of superiority over its flightless tengu kin. Among thieves of other races (such as humans), a yamabushi tengu prefers to stay in its humanoid form. However, when a yamabushi tengu assumes the form of anything other than a tengu, its true nature is difficult for it to hide, for invariably the shapechanged oni's nose remains quite prodigious, usually to an almost comical degree. Strangely enough, however, yamabushi tengus generally don't think of their unusual noses as flaws in their magical disguises. A yamabushi tengu can also retain its wings when using its change shape ability, and these pinions, as well as its beaklike nose, are a sure way to tell a disguised yamabushi tengu apart from others.",
    organization: "solitary, pair, or patrol (1-2 plus 3-8 tengus or dire corbies)",
    languages: "Common, Tengu, Tien",
    gear: "leather armor",
    spellLikeAbilities: [
      {
        name: "see invisibility",
        casterLevel: 5,
        timesPerDay: -1
      },
      {
        name: "ventriloquism",
        casterLevel: 5,
        timesPerDay: -1
      },
      {
        name: "dimension door",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "hideous laughter",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "ray of enfeeblement",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "scorching ray",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "blur",
        casterLevel: 5,
        timesPerDay: 1
      },
      {
        name: "glitterdust",
        casterLevel: 5,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 9
      },
      Bluff: {
        ranks: 6
      },
      Disguise: {
        ranks: 9
      },
      Fly: {
        ranks: 9
      },
      "Knowledge (planes)": {
        ranks: 6
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
      Stealth: {
        ranks: 6
      }
    },
    special: {
      "steal voice": {
        type: "Su",
        text: "Up to three times per day, but no more than once per target, a yamabushi tengu can attempt to steal a victim's voice as part of its bite attack. When it does so, the creature bitten must make a DC 16 Will save or lose the ability to speak aloud. This prevents the use of any spell with verbal components and the use of command-word-activated magic items, among other difficulties. The yamabushi tengu's voice changes to match the one stolen. The victim's voice remains stolen until the oni steals another voice, until the oni agrees to give the stolen voice back (a standard action requiring the oni to touch the victim), or until the next sunrise. Any effect that removes curses (such as remove curse or break enchantment) can restore a stolen voice (DC for success equals the save DC of the steal voice ability-DC 16 for most yamabushi tengu), as does the death of the oni who stole the voice in the first place. The save DC is Charisma-based. Susceptible to Patterns (Ex) A yamabushi tengu takes a -2 penalty on all saving throws against illusion spells of the pattern subschool. For 1 round after a yamabushi tengu either makes a successful save against a pattern or recovers from the effects of a pattern, it is dazzled."
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "alter self",
        type: ", alter self"
      },
      "yamabushi weapons": {
        type: "Ex",
        text: "A yamabushi tengu is proficient with all monk weapons and all swordlike weapons (including katanas and wakizashi), and gains a +1 bonus on attack rolls and damage rolls with such weapons. Yamabushi tengus who do not use swords favor the kusarigama."
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        damageType: "fire or acid",
        value: 2
      }
    }
  },

};
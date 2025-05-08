
export const The_Dead_Heart_Of_XinCreatures = {
  Raelis: {
    source: [
      "The Dead Heart Of Xin",
      "Bestiary 5"
    ],
    creatureType: "outsider",
    subTypes: [
      "azata",
      "chaotic",
      "extraplanar",
      "good"
    ],
    alignments: [
      "Chaotic Good"
    ],
    size: "Large",
    hd: 12,
    hdVal: 10,
    cr: 10,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 50,
      maneuverability: "Good",
      fly: 120
    },
    abilities: {
      str: 24,
      dex: 19,
      con: 20,
      int: 18,
      wis: 15,
      cha: 19
    },
    feats: [
      {
        name: "Greater Grapple",
        type: "Combat"
      },
      {
        name: "Improved Grapple",
        type: "Combat"
      },
      {
        name: "Improved Unarmed Strike",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Weapon Finesse",
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
        name: "2 Slams",
        specialAbility: "stun",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to rune mastery"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "cold iron and evil"
      },
      naturalArmor: 10
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any (Elysium)",
    visualDescription: "This lithe, bronze-skinned celestial wanders the worlds ceaselessly, seeking tales of wonder and heroism.",
    description: "Formed from the souls of authors, artists, and storytellers, raelises travel to the farthest corners of the world and beyond searching for epic stories, poems, and simple tall tales. As they travel and quest for ever more obscure tales, they strive to make the world a brighter place—setting wrongs right or acting as agents for divine beings. Though raelises appear to be frail, they possess a wiry strength and long-fingered hands ideally suited for the brawling and wrestling they enjoy so much. Deep brown or gray eyes dominate their expressive faces, and smiles and laughter come easy to their lips. Newly formed raelises have fair skin, but it slowly darkens over the centuries as they spend long hours exposed to the sun and elements. A raelis stands 9 feet tall and weighs close to 1,000 pounds.",
    organization: "solitary, pair, or band (3-6)",
    languages: "Celestial, Common, Draconic, Infernal; truespeech",
    spellLikeAbilities: [
      {
        name: "freedom of movement",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "nondetection",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "alter self",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "dimension door",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "modify memory",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "teleport, greater",
        casterLevel: 12,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: 1
      },
      {
        name: "plane shift",
        casterLevel: 12,
        timesPerDay: 1
      }
    ],
    knownSpells: {
      SpellsPerDay: [],
      casterLevel: 12,
      spells: [
        {
          name: "(3/day)-greater glyph of warding",
          limitations: "3/day",
          level: 6
        },
        {
          name: "shadow walk",
          level: 6
        },
        {
          name: "symbol of fear",
          level: 6
        },
        {
          name: "symbol of persuasion",
          level: 6
        },
        {
          name: "",
          limitations: "5/day",
          level: 5
        },
        {
          name: "symbol of pain",
          level: 5
        },
        {
          name: "symbol of sleep",
          level: 5
        },
        {
          name: "(7/day)-confusion",
          limitations: "7/day",
          level: 4
        },
        {
          name: "invisibility, greater",
          level: 4
        },
        {
          name: "scrying",
          level: 4
        },
        {
          name: "",
          limitations: "7/day",
          level: 3
        },
        {
          name: "explosive runes",
          level: 3
        },
        {
          name: "glyph of warding",
          level: 3
        },
        {
          name: "haste",
          level: 3
        },
        {
          name: "illusory script",
          level: 3
        },
        {
          name: "lightning bolt",
          level: 3
        },
        {
          name: "sepia snake sigil",
          level: 3
        },
        {
          name: "suggestion",
          level: 3
        },
        {
          name: "(7/day)-detect thoughts",
          limitations: "7/day",
          level: 2
        },
        {
          name: "hypnotic pattern",
          level: 2
        },
        {
          name: "invisibility",
          level: 2
        },
        {
          name: "scorching ray",
          level: 2
        },
        {
          name: "see invisibility ",
          level: 2
        },
        {
          name: "",
          limitations: "7/day",
          level: 1
        },
        {
          name: "feather fall",
          level: 1
        },
        {
          name: "hypnotism",
          level: 1
        },
        {
          name: "silent image",
          level: 1
        },
        {
          name: "ventriloquism",
          level: 1
        },
        {
          name: "",
          limitations: "at will",
          level: 0
        },
        {
          name: "dancing lights",
          level: 0
        },
        {
          name: "detect magic",
          level: 0
        },
        {
          name: "detect poison",
          level: 0
        },
        {
          name: "light",
          level: 0
        },
        {
          name: "mage hand",
          level: 0
        },
        {
          name: "message",
          level: 0
        },
        {
          name: "prestidigitation",
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
      Acrobatics: {
        ranks: 6
      },
      Bluff: {
        ranks: 11
      },
      Fly: {
        ranks: 14
      },
      "Knowledge (geography)": {
        ranks: 11
      },
      "Knowledge (history)": {
        ranks: 11
      },
      "Knowledge (planes)": {
        ranks: 11
      },
      Perception: {
        ranks: 11
      },
      Perform0: {
        subSkill: "oratory",
        ranks: 11
      },
      Spellcraft: {
        ranks: 14
      },
      Stealth: {
        ranks: 11
      }
    },
    special: {
      "mutable polymorph": {
        type: "Ex"
      },
      "word caller": {
        type: "Su",
        text: "Raelises sense the presence and basic topics of any books, scrolls, or other writings. As a standard action, they can read 100 pages of non-magical writing, or read one scroll as if with read magic. These abilities’ range is 50 feet."
      },
      stun: {
        type: "Ex"
      }
    }
  },

  "Living Rune": {
    source: "The Dead Heart Of Xin",
    creatureType: "aberration",
    subTypes: [],
    alignments: [
      "Neutral Evil"
    ],
    size: "Medium",
    hd: 18,
    hdVal: 8,
    cr: 13,
    racialFeatures: [
      "Blindsight 60 ft.",
      "Tremorsense 60 ft."
    ],
    speed: {
      base: 50,
      climb: 50
    },
    abilities: {
      str: "-",
      dex: 32,
      con: 18,
      int: 15,
      wis: 14,
      cha: 20
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Combat Expertise",
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
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Mobility",
        type: "Combat"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Stealth",
        choiceSource: "Skill Focus"
      },
      {
        name: "Spring Attack",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Glyph touch",
        qualities: [
          "touch"
        ],
        name: "Glyph touch",
        specialAbility: "Glyph touch",
        damage: "3d8"
      }
    ],
    immunities: [
      "Immune to bleed, disease, magic, paralysis, poison, stunning"
    ],
    defense: {},
    space: "5 ft.",
    reach: "0 ft.",
    environment: "any",
    visualDescription: "A pulsating glyph animates into a quickly flowing script that changes form as it rewrites itself, before finally assembling into an arcane symbol that flares with untold magical power.",
    description: "Whether first scribed by some forgotten deity or birthed by magic glyphs long soured, living runes are among the most stubborn and arrogant of dungeon denizens. Though two-dimensional and lacking any sort of real body, the creatures are sentient, but with a venomous hostility toward the so-called \"lesser races\" they feel are corrupted forms of the universe's first words of creation. Appearing as magical glyphs, animated pulsating runes, etched hieroglyphics, or even ancient cave art, these creatures live to prey on lesser beings for no other reason than to prove their superiority over flesh-and-blood creatures. Ecology Living runes are ambush hunters, lying in wait amid ancient graffiti and faded pictographs, or even on the pages of ancient texts and tomes. They use their mutable forms to camouf lage themselves-often changing texts with illusory script to lead adventurers into nearby traps or hazards, or lacing important sources of information with explosive runes and then striking at trespassers when they have triggered the dangerous glyphs. Immortal unless destroyed, the creatures do not need sustenance in a traditional sense, though, like their will-o'-wisp cousins, they seem to feed on the terror and pain they induce in their victims. In addition to fear and pain, living runes feed on the written word (which they can erase through this consumption or leave unharmed). Living runes reproduce by a strange sort of mitosis, where two creatures merge to create complex sentence structures and concepts before splitting a portion off each of their malleable bodies to create a new unique rune that contains the knowledge of both parent runes. Habitat & Society Most commonly found in deserted ruins-in particular old alchemical labs, forgotten temples, and musty libraries- living runes prefer to live isolated existences, feeding on lost knowledge, consuming it slowly over the years before erasing or altering it, then hoarding the truth within themselves to tease races seeking to recover it. For this reason, they prefer to haunt the fringes of civilization, where they may terrorize lesser creatures in this manner- particularly arcane spellcasters. They derive a sick pleasure from the mental and physical torture of humanoids; in particular, they enjoy cornering humanoids in debates and wrapping them in riddles with the promise of shared knowledge or information, before ultimately growing bored and attacking the intruders with their myriad abilities. Such communications always begin-in the living rune's unique form of communication-with scribbled inquiries trespassing creatures will understand, and this somewhat playful and innocuous introduction often draws explorers to their deaths when they assume they are conversing with some benign artificial intelligence. In instances becoming horrifically frequent, archivists have discovered previously unheard of colonies of living runes deep in the bowels of urban libraries and archives, hiding out for years in an attempt to learn more of modern civilization, with unknown motivations that may hold terrible consequences for civilized races. Origins In the annals of recorded history, ancient texts mentioning living runes always seem to do so in relation to the forgotten goddess Lissala, leading scholars to believe that either the creatures served worshipers of the deity in some way, or were rewarded as gifts to particularly devout supplicants. Some even speculate that Lissala herself is responsible for the creation of living runes. Others conjecture that living runes have always been, and are among the universe's eldest creatures, having escaped from the lips of some primordial god when the first words of creation were uttered. Evidence seems to dispute both these claims-the creatures are known to spring up from the scribbled text and graffiti of magic-soured ruins or untriggered symbol spells long left to rot. Whatever the truth, these haughty creatures do not discuss their origins.",
    organization: "solitary, pair, or string (3-4)",
    languages: "truescript",
    spellLikeAbilities: [
      {
        name: "arcane mark",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "illusory script",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "telekinesis",
        casterLevel: 12,
        limitations: "sustained force only, DC 20",
        timesPerDay: -1
      },
      {
        name: "explosive runes",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "glyph of warding, greater",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "sepia snake sigil",
        casterLevel: 12,
        timesPerDay: 3
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 0
      },
      Bluff: {
        ranks: 8
      },
      Climb: {
        ranks: 1
      },
      Disguise: {
        ranks: 0
      },
      "Knowledge (arcana)": {
        ranks: 13
      },
      "Knowledge (history)": {
        ranks: 13
      },
      "Knowledge (planes)": {
        ranks: 13
      },
      "Knowledge (religion)": {
        ranks: 13
      },
      Perception: {
        ranks: 18
      },
      "Sense Motive": {
        ranks: 13
      },
      Stealth: {
        ranks: 15
      }
    },
    special: {
      "symbols of power": {
        type: "Su",
        text: "As a standard action, a living rune can shift its form into a number of powerful symbols whose effects can damage or incapacitate opponents. Each round the living rune can choose a new effect, but a particular symbol form can only be used once every 4 rounds. This attack is resolved with a touch attack and the save DC is Charisma-based. Fear: The target becomes panicked for 2d6 rounds (Will DC 24). Pain: The target suffers wracking pains that impose a -4 penalty on attack rolls, skill checks, and ability checks for 1 hour (Fort DC 24). Persuasion: The target is charmed by the living rune (as charm monster) for 2d6 hours (Will DC 24). Slow: The target is slowed (as the slow spell) for 12 rounds (Will DC 24). Stunning: The target is stunned for 1d6 rounds (Fort DC 24). Weakness: The target suffers crippling weakness that deals 2d6 points of Strength damage (Fort DC 24). Truescript (Su) A living rune can sculpt its form into complicated scripts and pictographs that can be understood by any creature with the ability to read written language. A living rune can also understand any written or spoken language."
      },
      camouflage: {
        type: "Ex",
        text: "A living rune is able to shift its coloration and form to blend into its surroundings. The creature automatically hits with its touch attack against any creature that fails to notice it and enters its square."
      },
      compression: {
        universalMonsterAbility: "Compression"
      },
      "two-dimensional": {
        type: "Ex",
        text: "A living rune only exists in two dimensions, and has some qualities in common with incorporeal creatures. A living rune has no Strength score. It cannot move in three dimensions (such as jumping or flying), and can only navigate along solid surfaces such as floors, ceilings, and walls. It can only attack creatures by entering their squares and touching them directly. A living rune can crawl onto solid surfaces that can then themselves be moved (such as onto a tome via its telekinesis spell-like ability). It cannot fall or take falling damage, cannot make trip or grapple attacks, and cannot be tripped or grappled. It cannot take any physical action that would move or manipulate an opponent or the opponent's equipment, has no weight, and does not set off traps that are triggered by weight. A living rune takes no damage from nonmagical attacks and only takes half damage from magical weapons."
      },
      amorphous: {
        universalMonsterAbility: "Amorphous"
      },
      "glyph touch": {
        type: "Su",
        text: "A living rune deals 3d8 points of electricity damage with a successful touch attack, and it uses its Dexterity modifier (instead of its Strength modifier) to resolve all touch attacks. Immunity to Magic (Ex) A living rune is immune to spells and spell-like abilities that allow spell resistance. In addition, certain other spells and effects function differently against the creature as noted below. • An erase spell deals 6d6 points of damage to a living rune. • A living rune caught in the radius of any symbol spell is immune to its effects and heals 1d8 points of damage per spell level. Hit points beyond its total maximum are gained as temporary hit points that fade in 1 hour. • A living rune is affected normally by magic missile, maze, and spells that deal sonic damage."
      }
    },
    resistances: [
      "vulnerable to sonic"
    ]
  },

  Mezlan: {
    source: "The Dead Heart Of Xin",
    creatureType: "ooze",
    subTypes: [
      "shapechanger"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 17,
    hdVal: 8,
    cr: 14,
    racialFeatures: [
      "Blindsight 120 ft."
    ],
    speed: {
      base: 40,
      climb: 20,
      swim: 20
    },
    abilities: {
      str: 30,
      dex: 25,
      con: 24,
      int: 15,
      wis: 18,
      cha: 17
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
        name: "Lightning Reflexes",
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
        name: "Stealthy",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Morphic weapon",
        name: "2 Morphic weapons",
        damage: "2d8"
      }
    ],
    defense: {
      SR: {
        value: 25
      },
      naturalArmor: 12
    },
    space: "5 ft.",
    reach: "5 ft. (15 ft. with 1 slam per round)",
    environment: "any",
    visualDescription: "An amorphous blob coalesces, slowly rising up to form into a humanoid figure. As it stabilizes, intricate details emerge.",
    description: "Built by Azlanti arcanists and engineers to perform the duties of spies and elite troops, units of mezlans were deployed to engage in extractions, infiltrations, and quick strikes on well-protected locations. Scholars believe that at the height of Azlant, close to 1,500 mezlans were created to save the empire. The difficulty of destroying mezlans leads scholars to believe that at least half of them still exist to this day. Mezlans blur the lines between constructs and oozes, a mixture made even more strange by their possession of unique, previously human personalities. Each mezlan was once an exemplary living Azlanti or Thassilonian soldier graced with superior skills and intelligence. Upon being chosen for this new duty, these soldiers were given a full explanation of the changes they would undergo and signed a contract to serve them empire as mezlans. Each was then subjected to numerous magical and technological procedures to extract her consciousness, preserve it, and inject it into her new form. Sometimes the process didn't take as well as others, and resulted in an incomplete and flawed mezlan. Evidence of these flawed specimens didn't always reveal itself before the creatures were deployed, and many these became rogue mezlans. Most mezlans were recruited from the ranks of the military, and thus most of them possessed martial-related or skill-related class levels; however, a few of these creatures were once wizards who traded their magical talent for an amorphous form and near immortality. Ecology Without the need to eat, sleep, or breathe, mezlans are practically immortal. When they are defeated in battle, they simply discorporate and begin seeping down into the soil or cracks in the ground. If the material making up a mezlan isn't contained in some way or destroyed by subjecting it to continued energy damage, the creature lies dormant for 10 years before reforming. When a mezlan reincorporates, it is treated as if it had 16 negative levels. These negative levels are removed through time at a rate of 1 per month. Mezlans retain a portion of their previous memories and experiences, but the extent of those memories varies from individual to individual. Some mezlans slowly regain their memories, some immediately remember everything from their previous incorporation, and others never fully grasp their previous selves. Habitat & Society Mezlans seem to get along and work well with other mezlans, but to normal, living creatures, they appear strange and unnatural. They are very observant creatures who study everything they encounter, especially creatures-a frequent use of their skill pool ability. Some mezlans become accustomed to a particular form or body and use that persona as a default. Others enjoy keeping dozens of regular personas and cycle through them for particular duties they need to complete, meshing these personalities into a toolkit they use throughout their day-to-day activities. A few purists keep an amorphous, bloblike form unless they need to resemble something else. Strange mezlans who have gone mad over the years constantly shift their forms, flickering between hundreds of different ones. Becoming a Mezlan Though not constructs, mezlans are still created beings, the marriage of transformative magic and a living soul. Only the prohibitive cost of creating mezlans, not any shortage of volunteers, prevented their creators from manufacturing thousands of them. The sheer volume of djezet needed to create a mezlan forced their creators to grant the honor of the transformation to only the best of the best, greatly increasing their worth. The method for creating a mezlan is lost to time, though it is rumored one of them retains the knowledge to produce more of its own kind. In any case, the price of the materials and special processes necessary to create an army of mezlans would likely bankrupt a nation.",
    organization: "solitary",
    languages: "Aklo, Azlanti, Common; versatile speech",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 4
      },
      Bluff: {
        ranks: 11
      },
      Climb: {
        ranks: 0
      },
      Disguise: {
        ranks: 10,
        bonuses: [
          {
            source: "inherent",
            value: 12
          }
        ]
      },
      "Escape Artist": {
        ranks: 0
      },
      Linguistics: {
        ranks: 5,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Perception: {
        ranks: 12
      },
      "Sense Motive": {
        ranks: 12
      },
      Stealth: {
        ranks: 10,
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
      "sneak attack": {
        universalMonsterAbility: "Sneak Attack",
        bonus: "3d6"
      },
      "spell battery": {
        type: "Su",
        text: "A mezlan can store up to 10 levels of spells that it can then cast freely. The spells imbued into a mezlan are each activated with the casting time for the relevant spell and are cast at the caster level of the spellcaster who provided the spells. A mezlan can store and use both divine and arcane spells, and can be imbued by any number of casters at a time. To fuel this ability, a caster must cast her spells into the mezlan; alternatively, the spellcaster can use a scroll to place a spell into the mezlan. A mezlan must voluntarily lower its spell resistance in order to be imbued with spells. In addition, a mezlan can choose to lower its spell resistance and absorb spells cast at it. The mezlan must be aware of the incoming spell and ready an action to absorb it. Only spells that have the mezlan as a target can be absorbed in this way; area spells are not absorbed. If a mezlan already possesses 10 levels of spells, it cannot absorb more. The mezlan can use these absorbed spells as its own. Versatile Speech (Ex) A mezlan has a talent for parsing spoken languages. After spending 1 minute listening to a speaker use a language it doesn't already know, a mezlan can understand that language. After listening for 1 additional minute, the mezlan can speak the language. This understanding lasts for 24 hours before fading from the mezlan's mutable mind. To understand the same language again after this time, the mezlan must spend another minute listening to a creature speak that language. The mezlan doesn't have to be engaged in a conversation to use this ability.",
        preText: "chain lightning [DC 19], dispel magic, mage armor"
      },
      "morphic body": {
        type: "Ex",
        text: "A mezlan can assume the appearance of any Medium or Small creature (other than creatures with the elemental, incorporeal, or swarm subtypes-the body assumed must be solid). The mezlan's creature type doesn't change in this new form and it gains none of the mimicked creature's special abilities; the transformation is cosmetic only. In these other forms, the mezlan retains all of its normal statistics and abilities as depicted above. Though this ability only affects the mezlan's outward image, it is a transmutation effect. Morphic Weapons (Ex) A mezlan can manipulate its body to mimic a wide array of potent weaponry wielded by its various forms. While the weapons may look different, they are considered natural weapons and they all do the same amount of damage; are treated as magic for the purpose of overcoming damage reduction; and deal bludgeoning, piercing, and slashing damage. Once per round, a mezlan can extend one of its limbs to strike at a distance up to 15 feet away with one of its slam attacks. Also, while mimicking a creature wielding a ranged weapon, a mezlan can fire a portion of its body as if the fragment were a projectile. This projectile is treated as a thrown weapon and has a range increment of 60 feet."
      },
      "skill pool": {
        type: "Ex",
        text: "A mezlan has a special knack for solving problems. Five times per day, it can apply a +4 competence bonus on any skill check, even checks for skills it has no ranks in or skills that can only be used untrained. Spell Battery (Su) A mezlan can store up to 10 levels of spells that it can then cast freely. The spells imbued into a mezlan are each activated with the casting time for the relevant spell and are cast at the caster level of the spellcaster who provided the spells. A mezlan can store and use both divine and arcane spells, and can be imbued by any number of casters at a time. To fuel this ability, a caster must cast her spells into the mezlan; alternatively, the spellcaster can use a scroll to place a spell into the mezlan. A mezlan must voluntarily lower its spell resistance in order to be imbued with spells. In addition, a mezlan can choose to lower its spell resistance and absorb spells cast at it. The mezlan must be aware of the incoming spell and ready an action to absorb it. Only spells that have the mezlan as a target can be absorbed in this way; area spells are not absorbed. If a mezlan already possesses 10 levels of spells, it cannot absorb more. The mezlan can use these absorbed spells as its own. Versatile Speech (Ex) A mezlan has a talent for parsing spoken languages. After spending 1 minute listening to a speaker use a language it doesn't already know, a mezlan can understand that language. After listening for 1 additional minute, the mezlan can speak the language. This understanding lasts for 24 hours before fading from the mezlan's mutable mind. To understand the same language again after this time, the mezlan must spend another minute listening to a creature speak that language. The mezlan doesn't have to be engaged in a conversation to use this ability."
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        damageType: "acid",
        value: 5
      }
    }
  },

};
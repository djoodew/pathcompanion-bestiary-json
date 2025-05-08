
export const Forge_Of_The_Giant_GodCreatures = {
  Benaioh: {
    source: "Forge Of The Giant God",
    creatureType: "ooze",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 8,
    hdVal: 8,
    cr: 7,
    racialFeatures: [
      "Blindsense 30 ft.",
      "Tremorsense 90 ft."
    ],
    speed: {
      base: 20,
      climb: 10,
      swim: 10
    },
    abilities: {
      str: 26,
      dex: 6,
      con: 23,
      int: "-",
      wis: 3,
      cha: 1
    },
    feats: [],
    attacks: [
      {
        weapon: "Slam",
        name: "Slam",
        specialAbility: "disease",
        damage: "1d4",
        bonuses: [
          {
            source: "inherent",
            value: "1d6",
            appliesTo: "damageType",
            damageType: "acid"
          }
        ],
        type: "primary"
      }
    ],
    immunities: [
      "Immune to disease"
    ],
    defense: {},
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any mountains or underground",
    visualDescription: "This towering humanoid figure appears to be sculpted from clay. Fine cracks thread through the creature's body, leaking a steady stream of putrescent slime.",
    description: "Long before the Thassilonian empire rose to power on the western shores of Avistan, ancient tribes of stone giants migrated into the western reaches of Varisia and settled in the region now called the Mindspin Mountains. As their culture grew, so did their devotion to the deities who blessed them with the riches of the earth. They worshiped gods, the spirits of the wild world around them, and their ancestors. To show their respect, they erected dozens of small temples throughout the region. In later centuries, much of their culture was torn apart. Those who clung to their beliefs were slaughtered, and their temples were sacked, looted, and burned. Anything left behind fell into the care of aging priests, and over the centuries, as their caretakers passed on, these remnants slipped into obscurity. One strange ritual from this time, typically practiced by the ancient priests of the giant goddess Fandarra, involved the preparation of corpses for the journey to the afterlife, but created benaiohs as a side effect. Corpses were prepared by decomposing them within a clay vessel that the priests believed would allow the soul to escape after the body decomposed. To augment this process, the priests used slender, flesh-devouring worms that were imbued with divine blessings. Over the course of a lengthy ritual, priests sealed the deceased's entire body in sacred clay. As the clay hardened, they sculpted it to resemble the likeness of the deceased, forming a sort of statue-like sarcophagus that stood upright. The only portions of this clay vessel that were left unsealed were holes that allowed access to the individual's eyes and mouth. Then Fandarra's priests placed three of the sacred worms into each of the vessel's openings. Lastly, the priests sealed the openings with wax. In this manner, the priests believed they were separating the deceased's physical body from its soul, leaving the soul free to follow Fandarra (or her servitors) on to its final rest in the Great Beyond. As a side effect, this strange burial practice provided guardians for the tombs, as the divinely imbued worms eventually animate their clay vessels as benaiohs. Since the worms are able to breed rapidly and then maintain a stable population indefinitely, benaiohs are capable of standing vigil for millennia. A benaioh in its clay vessel stands just over 12 feet tall and weighs 2,000 pounds. Ecology A benaioh is an ooze-like colony formed by a swarm of divinely imbued worms that live within a morass of their own waste and digestive secretions. When first created, the colony consists of only nine worms; however, the creatures breed rapidly, particularly when they have a readily available source of flesh. Over the course of several months, the worms reproduce hundreds of times, quickly increasing in population until they fill the clay vessel. During times of dormancy or when meat is scarce, the worms sustain their population through cannibalism, eventually balancing their reproductive and mortality rates. If the colony senses warm flesh, though, the worms stop eating each other. These worms never exhibit this type of swarming behavior when encountered naturally, which indicates that the divine ritual is necessary to create a colony. The worms are coated with a fleshy, gelatinous slime that forms as they devour flesh, and eventually this slurry of worms and slime gains the ability to animate the clay vessel in which they are interred. The worms' individual tiny jerking and wriggling movements work in unison to move the limbs of the clay vessel. The worms innately sense nearby motion as well as the body heat of most living creatures. As soon as a benaioh senses fresh meat, the worms begin jerking about in a sympathetic reaction, activating the clay figure and sending it lumbering off in the direction of the nearest living prey. Habitat & Society Being by-products of a long-forgotten burial practice, benaiohs have no society. Few of these ancient worm-filled statues have managed to survive the transition into contemporary times, though they can still be found in lost tombs dotted throughout western Avistan. A number of prominent scholars have questioned their existence altogether. While most of these scholars accept the procedures and preparations performed during burial rituals, they discredit tales of magically imbued worms animating the clay vessels, in part because no one has ever created one of these creatures in modern times-or, for that matter, provided hard evidence for their existence beyond a few broken shards of clay and trace amounts of slimy residue. Many of these scholars think that this burial practice is simply a variation of an unusual practice from distant lands, in which ochre jellies are used to dissolve the deceased's flesh. They dismiss the tales of benaiohs springing to life as fables of a lost age invented by giants to protect their ancestral burial grounds. While the practice of making benaiohs is most closely associated with the religious practices of ancient tribes of giants, tales and rumors of similar practices persist among primitive humanoids in the lower depths of the Darklands. In accounts of this practice, the flesh-devouring worm ceremony serves as a punishment or torture, but the end result is similar-the creation of guardians. These stories go on to describe guardians with powerful abilities.",
    organization: "solitary, pair, or guard (3-12)",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 0
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      disease: {
        universalMonsterAbility: "Disease",
        type: "Ex",
        text: "While a benaioh is immune to disease, it carries a contagion with which it both infects other creatures and propagates itself. Any creature struck by the benaioh's slam attack or engulf ability is exposed to this disease. Wormrot: Contact; save Fort DC 20; onset 1 minute; frequency 1/day; effect sickened plus 1d3 Con damage; cure 2 consecutive saves. The save DC is Constitution-based. A creature that dies of wormrot transforms into a benaioh over the course of the next 24 hours."
      },
      engulf: {
        type: "Ex",
        preText: "DC 22, 6d6 acid plus disease"
      }
    }
  },

  "Great Elder Iuu": {
    source: "Forge Of The Giant God",
    creatureType: "outsider",
    subTypes: [
      "evil",
      "giant",
      "herald",
      "lawful"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Large",
    hd: 16,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "Darkvision 120 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 29,
      dex: 17,
      con: 27,
      int: 14,
      wis: 16,
      cha: 16
    },
    feats: [
      {
        name: "Blind-Fight",
        type: "Combat"
      },
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Iron Will",
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
        name: "Quick Draw",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Warhammer",
        enchantments: [
          {
            name: "Enhancement Bonus +3",
            source: "inherent"
          },
          {
            name: "Corrosive",
            source: "inherent"
          }
        ],
        name: "Warhammer",
        damage: "1d8"
      },
      {
        weapon: "Adamantine rock",
        name: "Adamantine rock",
        damage: "1d8"
      }
    ],
    immunities: [
      "Immune to fear"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "adamantine"
      },
      naturalArmor: 17
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "temperate mountains (Hell)",
    visualDescription: "This ancient stone giant towers over others of his kind and has a crown of crystalline growths sprouting from his head. He holds a warhammer made of meteoric stone pierced by natural deposits of glinting metallic ore.",
    description: "Great Elder Iuu is one of the first stone giants ever to set foot upon the mountains of Golarion, and one of the stone giants' first tribal elders. After he died at the age of 888, Minderhal brought him to Stonepeak for a century of paradise and crafting, then elevated him to serve as the god's herald. Minderhal sends Iuu to the mortal world in times of great trouble or change for the stone giant people, or to put an end to conf licts between tribes. Iuu looks like an exceptionally tall, handsome, and wise elder stone giant with crystals sprouting from his head like a crown and a cloak of heavy moss. His weapon is Anfaru (meaning \"Mountain from the Sky\"), an adamantine-laden stone meteorite he carved over the course of 100 years into a hammer shape. Iuu has a deep, booming voice that can shatter mortar when he's angry. His crystal crown and unusual weapon have sometimes led ignorant members of lesser races to mistake him for a stone giant king. Iuu uses his magical abilities to enhance, protect, and support himself and his mortal allies. Having been in countless battles against various creatures, he is a competent tactician; he quickly reacts to specific threats or enemy abilities and determines how to best use the available terrain and resources to overcome threats. When he gives orders, he expects other giants to obey immediately and without question. He believes in the inherent strength of his people, and although he is evil, he's unwilling to sacrifice their lives in risky gambits unless the survival of all the stone giants is at stake. He thinks little of smaller races and is indifferent to the \"degenerate\" giant races (which, according to some stone giant lore, includes all other races of giants). Ecology Iuu was born a mortal giant, and although he doesn't have to eat, he still has a strong attachment to the traditional foods and beverages of his people. When summoned to the Material Plane by those with means, he expects a great feast to be prepared for him, and he honors his hosts by participating. If those who call him are impoverished, he treats whatever meager food they offer as if it were a fine meal, and limits what he eats so others don't go hungry. Iuu does not need to sleep, and although he needs to breathe, that becomes an issue only if he is forced underwater or buried alive-in which case he can use magic such as dimension door or meld into stone to escape or compensate for the hazard. As with mortal stone giants, Iuu's flesh appears to be made of rock, but he is a creature of flesh and blood. His flesh is much harder than normal stone, but when injured, he bleeds red. Having already lived a full mortal life once, he doesn't fear death, especially if his dying better serves Minderhal or the stone giant race as a whole. At worst, he would experience regret that he would not share another song or teach another student about the traditional ways of giantkind. Habitat & Society Great Elder Iuu spends decades at a time in a catatonic slumber deep within Minderhal's realm, and nearly as much time crafting weapons for the god's other servitors and building architecture for the realm itself. After one of his deep sleeps, it's customary for new petitioners and servitors of the god to seek him out and gain his blessing. Many in Stonepeak determine their seniority by how many cycles of Iuu's waking and sleeping they have been present for. Iuu enjoys teaching others-whether mortals, petitioners, or outsiders-about crafting and the early history of the giant race, using ancient songs to convey these tales to eager ears. He is pleased when a student learns the songs he teaches, but becomes stern if his pupil accidentally or intentionally alters the words or cadence of the song. If he hears an altered version of a song or tale from another, he interrupts, insisting the raconteur tell it the right way and honor its proper, orthodox form. Iuu is respectful toward shrines and priests of Estig (the stone giants' name for Erastil), Fandarra, and spirits of ancestors and stone. He doesn't allow followers of Urazra to speak in his presence-the first offense merits a verbal rebuke; the second, a beating; and the third, a beating followed by tribal exile. Many mortal giants are related to Iuu through the countless generations extending back to the origin of their race. Stone giants of all tribes award him great respect as a powerful, wise, and noteworthy hero-ancestor-even those of tribes that don't worship Minderhal or that disagree with the herald's beliefs. When a stone giant exemplifies many of the god's ideal traits, members of the tribe often consider that giant a spiritual incarnation of Iuu, as if the herald granted the leader a portion of his own spirit at birth, destining that child for greatness. When he visits the mortal world, Iuu typically travels with other stone giants; it's very rare that he's encountered alone. Usually, his companions are members of the tribe he came to the Material Plane to help. However, in rare cases, the giants who accompany him are his \"proud children\"-worthy petitioners temporarily given mortal bodies in the form of fiendish stone giants. These companions give Iuu many hands to accomplish tasks that, even with his great strength and knowledge, would be difficult to handle alone.",
    organization: "solitary or council (Great Elder Iuu plus 3d6 stone giants or fiendish stone giants)",
    languages: "Common, Giant, Infernal",
    spellLikeAbilities: [
      {
        name: "meld into stone",
        casterLevel: 16,
        timesPerDay: -1
      },
      {
        name: "stone shape",
        casterLevel: 16,
        timesPerDay: -1
      },
      {
        name: "bull's strength",
        casterLevel: 16,
        timesPerDay: 5
      },
      {
        name: "cure serious wounds",
        casterLevel: 16,
        timesPerDay: 5
      },
      {
        name: "invisibility purge",
        casterLevel: 16,
        timesPerDay: 5
      },
      {
        name: "levitate",
        casterLevel: 16,
        timesPerDay: 5
      },
      {
        name: "dimension door",
        casterLevel: 16,
        timesPerDay: 3
      },
      {
        name: "dispel magic",
        casterLevel: 16,
        timesPerDay: 3
      },
      {
        name: "fly",
        casterLevel: 16,
        timesPerDay: 3
      },
      {
        name: "gravel vortex",
        casterLevel: 16,
        limitations: "see page 74",
        timesPerDay: 3
      },
      {
        name: "neutralize poison",
        casterLevel: 16,
        timesPerDay: 3
      },
      {
        name: "order's wrath",
        casterLevel: 16,
        timesPerDay: 3
      },
      {
        name: "spike stones",
        casterLevel: 16,
        timesPerDay: 3
      },
      {
        name: "breath of life",
        casterLevel: 16,
        timesPerDay: 1
      },
      {
        name: "fabricate",
        casterLevel: 16,
        timesPerDay: 1
      },
      {
        name: "stone tell",
        casterLevel: 16,
        timesPerDay: 1
      },
      {
        name: "stoneskin",
        casterLevel: 16,
        timesPerDay: 1
      },
      {
        name: "wall of stone",
        casterLevel: 16,
        timesPerDay: 1
      }
    ],
    skills: {
      Climb: {
        ranks: 6
      },
      Craft0: {
        subSkill: "stonemasonry",
        ranks: 0
      },
      Craft1: {
        subSkill: "weapons",
        ranks: 0
      },
      Diplomacy: {
        ranks: 12
      },
      Intimidate: {
        ranks: 19
      },
      "Knowledge (dungeoneering)": {
        ranks: 10
      },
      "Knowledge (history)": {
        ranks: 10
      },
      "Knowledge (planes)": {
        ranks: 7
      },
      "Knowledge (religion)": {
        ranks: 10
      },
      Perception: {
        ranks: 15
      },
      Perform0: {
        subSkill: "sing",
        ranks: 9
      },
      "Sense Motive": {
        ranks: 10
      },
      Stealth: {
        ranks: 7,
        bonuses: [
          {
            source: "inherent",
            value: 8,
            situational: true,
            note: "in rocky terrain"
          }
        ]
      }
    },
    special: {
      "rock throwing": {
        universalMonsterAbility: "Rock Throwing",
        type: "Ex",
        range: "200 ft."
      },
      "stone giant blood": {
        type: "Ex",
        text: "Great Elder Iuu counts as a stone giant for any effect related to race."
      },
      "summon boulders": {
        type: "Su",
        text: "Great Elder Iuu can summon three adamantine throwing rocks as a swift action. If thrown, the rocks disappear at the end of his turn. Any rocks leaving his grasp otherwise disappear immediately."
      },
      "improved rock catching": {
        type: "Ex",
        text: "Great Elder Iuu gains a +4 racial bonus on his Reflex save when attempting to catch a thrown rock with rock catching. This ability otherwise works as the rock catching ability."
      },
      courage: {
        type: "Su",
        text: "Great Elder Iuu is immune to fear. His allies within 20 feet gain a +4 morale bonus on saving throws against fear effects. This ability functions only while he's conscious, not if he's unconscious or dead.",
        preText: "20 ft."
      }
    }
  },

  "Living Cave Painting": {
    source: "Forge Of The Giant God",
    creatureType: "aberration",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 6,
    hdVal: 8,
    cr: 4,
    racialFeatures: [
      "Blindsight 30 ft."
    ],
    speed: {
      base: 30,
      climb: 30
    },
    abilities: {
      str: "-",
      dex: 21,
      con: 14,
      int: 5,
      wis: 12,
      cha: 15
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
      }
    ],
    attacks: [
      {
        weapon: "Ocherous touch",
        qualities: [
          "touch"
        ],
        name: "Ocherous touch",
        damage: "1d6",
        bonuses: [
          {
            source: "inherent",
            value: "2d6",
            appliesTo: "damageType",
            damageType: "bleed"
          }
        ]
      }
    ],
    immunities: [
      "Immune to bleed, disease, paralysis, poison, stunning"
    ],
    defense: {},
    space: "5 ft.",
    reach: "0 ft.",
    environment: "any underground",
    visualDescription: "The painted ochre lines of this stylized bison seem to shift and flow, giving the primitive drawing an eerie sense of life and otherworldly majesty.",
    description: "Little is known of the primitive tribes that preceded the great mortal civilizations of the Age of Legends. They possessed no written language and built few lasting structures, so little of their culture exists to this day. Yet some evidence of these ancient peoples can be found, hidden away in deep, remote caves protected from the ravages of time. The simple paintings and sculptures found in these caves speak to the primal roots of the human experience, and they're treasured in the modern world as pieces of art nearly as much as they are considered historical artifacts. Yet those who wish to explore these caverns or retrieve such relics must be cautious. Ancient guardians haunt the dark places in the earth, hiding among the paintings, waiting to strike down those foolish enough to disturb their millennia-long rest. These guardians are the living cave paintings, ancient works of art animated by strange magic at the dawn of human civilization. They lack true bodies, and instead exist as two-dimensional beings painted across cave walls in ocher and charcoal. Living cave paintings most often depict herd animals such as aurochs, bison, horses, or rhinoceroses, or megafauna such as megaloceros that forms herds. Some others depict predatory creatures, human figures, or even animal-human hybrids. Ecology A living cave painting's temperament and behavior seem to depend on the type of creature (or creatures) it is painted to resemble. While all living cave paintings are aggressive to some extent, those that portray bison or horses tend to be less violent and less predatory in nature than those that depict lions or bears. Likewise, living cave paintings illustrated to represent herd animals often group together, while those showing solitary creatures generally eschew the company of their own kind. It is a mistake, however, to assume that a living cave painting is merely a two-dimensional version of some common animal. Even those that represent prey animals have sharp predatory instincts, and many an explorer has met a grisly end after disregarding a living cave painting of a peaceful herd animal. Though they require no food or drink to survive, living cave paintings can consume small amounts of material-usually blood, ash, or stone pigments such as ocher. They seem to absorb these materials directly into their two-dimensional bodies, growing darker or more vivid as they do so. Living cave paintings sometimes accept such materials as offerings, allowing creatures who present them with such gifts to pass unharmed into the caverns they protect, though their tolerance is tenuous and short-lived even in the best of situations. Scholars aren't sure whether living cave paintings age. Some living cave paintings seem to have existed for thousands of years without losing any potency or vitality, while others have grown faint and restive with age. It is even possible that apparently mundane cave paintings were once living cave paintings that either died or now simply lack the will or ability to move. Habitat & Society Living cave paintings reside deep in the earth, in places of sacred significance to the primitive cultures that created cave art during Golarion's primordial times. Living cave paintings in these caverns attack intruders out of some bestial territorial instinct rather than cruel spite or random violence. No matter how extensive the cave system it occupies might be, a living cave painting typically treats only the areas of its cave decorated with cave art as its territory. It generally ignores raw, unadorned areas, though it may pursue intruders into these areas if it feels they are still a threat. In addition to the cave itself, living cave paintings are extremely protective of the mundane paintings and sculptures that cover the walls of their cavernous homes. Explorers who damage or deface such ancient works of art, whether accidentally or intentionally, are sure to draw the ire of any nearby living cave paintings. Such behavior suggests that living cave paintings were first created to be guardians for these sacred places, and continue to act out this role long after the cultures that created them have died out. While many living cave paintings are ancient, specimens can sometimes be found in more recent sites. Some living cave paintings can be found in caverns near the surface that were occupied by orcs during the Age of Darkness, and even more recently in caves inhabited by modern Kellid or Shoanti tribes not that far back in Avistan's past. It's not clear whether the living cave paintings found in these places migrated to younger sites from older caves, or newer cave art also has the potential to transform into living cave paintings. Some believe (albeit without evidence) that shamans among some remote tribes still preserve the age-old secret to creating new living cave paintings.",
    organization: "solitary, pair, or collection (3-8)",
    languages: "Terran (can't speak)",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 0
      },
      Perception: {
        ranks: 1
      },
      Stealth: {
        ranks: 5
      }
    },
    special: {
      manifestation: {
        type: "Sp",
        text: "A living cave painting manifests itself in the three-dimensional world by shaping quasi-real illusions. Three times per day, a living cave painting can use shadow conjuration as a spell-like ability, but the shadow conjuration can mimic only summon nature's ally III spells. Additionally, whenever a conjured creature takes enough damage to destroy it, the living cave painting can instead, as a free action, sacrifice any number of hit points. Each hit point sacrificed in this way prevents 1 point of damage done to the shadow conjuration. The caster level for this effect is 7th. The save DC is Charisma-based."
      },
      "ocherous touch": {
        type: "Ex",
        text: "A living cave painting's touch causes vicious wounds to appear on the victim's body, dealing 1d6 points of damage and 2d6 points of bleed damage. The living cave painting uses its Dexterity modifier instead of its Strength modifier to resolve all touch attacks."
      },
      compression: {
        universalMonsterAbility: "Compression"
      },
      freeze: {
        universalMonsterAbility: "Freeze",
        parenthetical: ""
      },
      "two-dimensional": {
        type: "Ex",
        text: "A living cave painting exists in only two dimensions, and has some qualities in common with incorporeal creatures. A living cave painting has no Strength score. Additionally, it gains a deflection bonus to its AC equal to its Charisma modifier. It cannot move in three dimensions (such as jumping or flying), and can navigate only along solid surfaces such as floors, ceilings, and walls. It can attack creatures only by entering their squares and touching them directly. A living cave painting can crawl onto solid objects that can then themselves be moved through other means. It cannot fall or take falling damage, and it cannot use or be affected by combat maneuvers such as bull rush, grapple, or trip. It cannot take any physical action that would move or manipulate an opponent or the opponent's equipment. It has no weight, and does not set off traps that are triggered by weight. A living cave painting takes no damage from nonmagical attacks and takes only half the normal amount of damage from magical weapons. Vulnerable to Erase (Ex) A living cave painting can be targeted by an erase spell, which deals 3d6 points of damage to the creature."
      },
      amorphous: {
        universalMonsterAbility: "Amorphous"
      },
      "captivating artistry": {
        type: "Su",
        text: "Any creature with an Intelligence score of at least 3 that begins its turn within 30 feet of a living cave painting must succeed at a DC 15 Will saving throw or be fascinated for 1 round. Hostile actions by the living cave painting that don't target or affect the fascinated creature do not end the fascinated effect. Whether or not the save is successful, the target is immune to the same living cave painting's captivating artistry aura for 24 hours. This is a mind-affecting effect. The save DC is Charisma-based.",
        preText: "30 ft., DC 15"
      }
    },
    resistances: [
      "vulnerable to erase"
    ]
  },

  "Mongrel Cave Giant": {
    source: "Forge Of The Giant God",
    creatureType: "humanoid",
    subTypes: [
      "giant"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Large",
    hd: 9,
    hdVal: 8,
    cr: 6,
    racialFeatures: [
      "Darkvision 120 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 23,
      dex: 10,
      con: 17,
      int: 6,
      wis: 10,
      cha: 7
    },
    feats: [
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Improved Sunder",
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
        value: "Battleaxe",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Battleaxe",
        name: "Battleaxe",
        damage: "1d8"
      },
      {
        weapon: "Slam",
        name: "2 Slams",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Rock",
        name: "Rock",
        damage: "1d8"
      }
    ],
    defense: {
      naturalArmor: 6
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "?",
    visualDescription: "This stooped giant has the tusks and posture of a cave giant, but its elongated head and gray, stony skin betray its stone giant heritage.",
    description: "Giants are a diverse race that can be found nearly anywhere on Golarion. As a people, they've grown exceedingly varied in both customs and appearance. While most giants bear the physical features of their immediate ancestors, on occasion a giant gives birth to a child possessing physical traits associated with one of the other types of giants. Exactly why these \"mongrel giants\" (as they're known) bear attributes of different giant varieties remains a mystery, particularly because giants of differing varieties who mate with one another don't produce viable offspring. Many believe that all giants came from a single, great race of ancient giants and such throwbacks arise naturally. Not surprisingly, each type of giant argues that these ancient ancestors most resembled the giants of their own race and the other types of giants are their descendants. Hill giants are the one type of giants whose traits don't arise in other giants. However, hill giants are the most prone to birthing mongrel giants. Creating a Mongrel Giant \"Mongrel giant\" is an inherited template that can be added to any creature with the giant subtype (referred to hereafter as the base creature). A mongrel giant retains all the base creature's statistics and special abilities except as noted here. CR: Same as that of the base creature, unless the creature's size changes, in which case it's equal to the base creature's CR + 1. Special Qualities: A mongrel giant retains all the special attacks, qualities, and abilities of the base creature and gains the following special quality. Giant Ancestry (Ex): A mongrel giant displays traits and features of another variety of giant and gains additional abilities based on this ancestry (see Giant Ancestry Traits below). A mongrel giant can have only one giant ancestry. Giant Ancestry Traits A mongrel giant gains additional traits based on its ancestry. Roll 1d4 to determine how many traits a mongrel giant gains. Then roll 1d6 to randomly determine which traits for that ancestry the giant possesses, rerolling duplicates. For spell-like abilities, the caster level is equal to the creature's HD or the caster level of the base creature's spell-like abilities, whichever is higher. If the creature's size changes, modify its ability scores and natural armor bonus as noted on Table 2-2 on page 296 of the Pathfinder RPG Bestiary. Ash Giant: Mongrel giants with ash giant ancestry are deformed and are covered in open sores and tumors. 1. Aff liction Immunity: The giant gains immunity to disease or poison (choose one; this ability can be selected twice). 2. Disease: The giant gains the disease (ash leprosy) ability (Pathfinder RPG Bestiary 3 126). 3. Oversized Weapon: The giant gains the oversized weapon ability (Bestiary 3 126). 4. Simpleminded: The giant's Intelligence score decreases by 2, to a minimum of 3. 5. Vermin Empathy: The giant gains the vermin empathy ability (Bestiary 3 126). 6. Roll twice (reroll any further rolls of 6). Cloud Giant: Cloud mongrels giants have fine features and pale blue or white skin. If the base creature's size is smaller than Huge, increase its size by one category. 1. Cloud Magic: The giant gains the following spell-like abilities usable once per day: fog cloud, levitate (self plus 2,000 pounds). 2. Giant Stride: Increase the giant's base speed by 10 feet (maximum 50 feet). 3. Oversized Weapon: The giant gains the oversized weapon ability (Bestiary 147). 4. Powerful Slam: The giant's slam attack deals 2d6 points of damage. 5. Smell the Blood: The giant gains the scent ability. 6. Roll twice (reroll any further rolls of 6). Fire Giant: Mongrel giants with fire giant ancestry have fiery orange hair and deep red or sooty black skin. 1. Fiery Body: The giant gains the fire subtype. 2. Heated Rock: The giant gains the heated rock ability (Bestiary 148). 3. Heavy Armor Training: The giant gains Heavy Armor Proficiency as a bonus feat. 4. Sword Training: The giant gains Martial Weapon Proficiency (greatsword) as a bonus feat. 5. Ungainly: The giant's Dexterity score decreases by 2, to a minimum of 1. 6. Roll twice (reroll any further rolls of 6). Frost Giant: Mongrel giants with frost giant ancestry have light blue skin and hair that ranges from frosty blue to dirty yellow. Frost mongrels gain a +2 racial bonus on Stealth checks in snow. 1. Ambusher: The giant gains Skill Focus (Stealth) as a bonus feat. 2. Axe Training: The giant gains Martial Weapon Proficiency (greataxe) as a bonus feat. 3. Chilled Rock: The giant can transfer the cold of its body to rocks as part of an attack action when it throws rocks. A chilled rock deals an additional 1d6 points of cold damage. 4. Icy Body: The giant gains the cold subtype. 5. Ungainly: The giant's Dexterity score decreases by 2, to a minimum of 1. 6. Roll twice (reroll any further rolls of 6). Stone Giant: Mongrel giants with stone giant ancestry have elongated heads and brown or gray skin that resembles rock. Stone mongrels gain a +4 racial bonus on Stealth checks in rocky terrain. 1. Darkvision: The giant gains Darkvision to 60 feet. 2. Greatclub Training: The giant gains Martial Weapon Proficiency (greatclub) as a bonus feat. 3. Improved Rock Catching: The giant gains the improved rock catching ability (Bestiary 151). If the base creature doesn't have the rock catching ability, it gains that ability instead. 4. Improved Rock Throwing: Increase the range increment of the giant's rock throwing ability by 40 feet. If the base creature doesn't have the rock throwing ability, it gains that ability with a range increment of 120 feet instead. 5. Stony Skin: The giant's natural armor bonus increases by 2. 6. Roll twice (reroll any further rolls of 6). Taiga Giant: Taiga mongrels have dark gray skin, red hair, and a strong lower jaw. If the base creature's size is smaller than Huge, increase its size by one category. These mongrels gain a +4 racial bonus on Stealth checks in undergrowth. 1. Quick Reactions: The giant gains Lightning Reflexes as a bonus feat. 2. Resilient: The giant gains endure elements as a constant spell-like ability. 3. Shrewd: The giant's Wisdom score increases by 2. 4. Skirmisher: The giant gains Shot on the Run as a bonus feat. 5. Spirit Summoning: The giant gains the deflection bonus and immunity provided by the spirit summoning ability (Pathfinder RPG Bestiary 2 131). 6. Roll twice (reroll any further rolls of 6).",
    organization: "?",
    languages: "Giant",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 1
      },
      Intimidate: {
        ranks: 9
      },
      Perception: {
        ranks: 5
      },
      Stealth: {
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
      "improved rock throwing": {
        type: "Ex",
        preText: "140 ft."
      },
      "axe wielder": {
        type: "Ex",
        text: "All cave giants are proficient with handaxes, battleaxes, and greataxes."
      },
      "stone giant ancestry": {
        type: "Ex",
        preText: "improved rock catching, improved rock throwing"
      },
      ferocity: {
        universalMonsterAbility: "Ferocity"
      },
      "improved rock catching": {
        type: "Ex"
      }
    }
  },

};
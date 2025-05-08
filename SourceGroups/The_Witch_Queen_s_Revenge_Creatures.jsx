
export const The_Witch_Queen_s_RevengeCreatures = {
  "Crone Queen": {
    source: [
      "The Witch Queen’s Revenge",
      "Bestiary 5"
    ],
    creatureType: "undead",
    subTypes: [
      "cold"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Medium",
    hd: 22,
    hdVal: 8,
    cr: 15,
    racialFeatures: [
      "Blizzard Sight",
      "Darkvision 60 ft.",
      "Lifesense"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 21,
      dex: 20,
      con: "-",
      int: 19,
      wis: 17,
      cha: 18
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Combat Casting",
        type: "General"
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
        name: "Lunge",
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
        name: "Toughness",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Ice staff",
        name: "Ice staff",
        specialAbility: "energy drain",
        damage: "1d6",
        bonuses: [
          {
            source: "inherent",
            value: "1d6",
            appliesTo: "damageType",
            damageType: "cold"
          }
        ]
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        specialAbility: "energy drain",
        damage: "1d4",
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
        value: 10,
        damageType: "cold iron and slashing"
      },
      SR: {
        value: 26
      },
      naturalArmor: 10
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "cold ruins",
    visualDescription: "A cold, hateful light burns in the eye sockets of this corpselike creature, whose withered skin is stretched over its icy bones. It wears the tattered raiments of ancient royalty, and a crown of jagged icicles juts from its head.",
    description: "When one of Baba Yaga's chosen daughters has served her 100-year tenure as queen of Irrisen, the Queen of Witches comes to replace her with another daughter. Ostensibly, the deposed daughter joins her mother in the Dancing Hut and goes on to bigger and better things far beyond the bounds of Irrisen and Golarion, but the true fate of the queens of Irrisen remains a mystery to most. In fact, these former queens never leave the confines of the Dancing Hut-drained of their vitality and power by Baba Yaga and imprisoned deep inside the hut's innermost chambers, these daughters become crone queens, undead mockeries of the powerful witches they once were. The crone queens are unique creatures, each one a former queen of Irrisen. They are bound to the Hall of Thrones inside the Dancing Hut, where Baba Yaga has erected a throne for each deposed queen. Currently there are only 12 crone queens, though the Hall of Thrones holds 14 royal seats. One throne sits ready for the current queen, Elvanna, when her reign is over, and the other is left empty-the throne of Tashanna, Baba Yaga's ninth daughter and the only queen to escape the fate shared by her sisters. As a crone queen ages, the long years take their toll on the necromantic energies animating the unliving husk of her body, and movement and activity become more difficult. Although their powers have not diminished with age, the oldest crone queens rarely leave their frozen thrones; less interested in vengeance, they instead spend the long centuries reliving the memories of their former lives. It takes a significant effort to rouse them from their dreamlike reveries, but once awakened, the eldest crone queens are dangerous foes indeed. The Deposed Queens Twelve of Baba Yaga's daughters sit enthroned inside the Dancing Hut, fueling their mother's extended lifespan. Besides the abilities presented in the stat block above, each crone queen possesses additional unique abilities. Over the centuries, the first eight queens of Irrisen- Jadwiga, Morgannan, Urvalane, Pjallarane, Aelena, Harcatha, Sascha, and Karina-have gradually withdrawn into themselves, and now rarely move or interact with the world at all, but in general, the older the crone queen, the more powerful her unique abilities are. If any of these crone queens are awoken from their torpor, they should receive additional abilities in line with their age. The four most recent queens remain active, full of hatred and a thirst for vengeance. Their unique abilities are detailed below. Betyrina: The twelfth queen of Irrisen, Betyrina, was known for her vanity and conceit. It is said that, during her reign, no room in Whitethrone's Royal Palace was without a mirror, so the queen could enjoy a constant view of her own ref lection. Next to Yelizaveta, Betyrina is perhaps the best-preserved crone queen, and though she is still clearly an undead creature, she takes great pains to keep her hair carefully coiffed and her 200-year-old gown as clean and tidy as possible. Betyrina can cast strangling hair (Ultimate Magic 240) as a spell-like ability three times per day, and smug narcissism (Ultimate Magic 238) as a spell-like ability once per day. Kseniya: A skilled conjurer herself, Irrisen's eleventh queen, Kseniya, founded an academy for conjurers and summoners known as the Bloodstone Conservatory. Kseniya was also famous for trying to take her own life when Baba Yaga came for her at the end of her reign. She was unsuccessful, and the scars of her attempted suicide are still visible on her shrunken wrists. Kseniya can cast control summoned creature (Ultimate Magic 212) and terrible remorse (Ultimate Magic 243) as spell-like abilities three times per day. Velikas: The reign of Velikas, tenth queen of Irrisen, was marked by a lethal epidemic of chillbane fever that swept across the land and devastated the population of the city of Algidheart. Velikas is still a carrier of this original potent strain of chillbane fever and can cast epidemic (Ultimate Magic 218) as a spell-like ability once per day, infecting the target with virulent chillbane fever. Virulent chillbane fever-inhaled or injury; save Fortitude DC 23; onset 1 day; frequency 1/day; effect 1d6 Con damage and target is shaken and fatigued, target must make a second Fortitude save or 1 point of the damage is drain instead and target is exhausted instead of fatigued; cure 2 consecutive saves. Yelizaveta: Irrisen's thirteenth queen, Yelizaveta is the most recently deposed and best preserved of the crone queens, having died only 100 years ago, and her hatred and spite toward her mother is still fresh. Yelizaveta can cast vengeful outrage (Ultimate Magic 246) as a spell-like ability once per day.",
    organization: "solitary, coven (3-6), or court (12-14)",
    languages: "Common, Draconic, Russian, Skald, Sylvan",
    spellLikeAbilities: [
      {
        name: "mage armor",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "frost fall",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "magic missile",
        casterLevel: 19,
        limitations: "except ice missile, dealing cold damage",
        timesPerDay: -1
      },
      {
        name: "obscuring mist",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "screech",
        casterLevel: 19,
        timesPerDay: -1
      },
      {
        name: "bestow curse",
        casterLevel: 19,
        timesPerDay: 3
      },
      {
        name: "crushing despair",
        casterLevel: 19,
        timesPerDay: 3
      },
      {
        name: "ice storm",
        casterLevel: 19,
        timesPerDay: 3
      },
      {
        name: "unshakable chill",
        casterLevel: 19,
        timesPerDay: 3
      },
      {
        name: "wall of ice",
        casterLevel: 19,
        timesPerDay: 3
      },
      {
        name: "cone of cold",
        casterLevel: 19,
        timesPerDay: 1
      },
      {
        name: "freezing sphere",
        casterLevel: 19,
        timesPerDay: 1
      },
      {
        name: "polar ray",
        casterLevel: 19,
        timesPerDay: 1
      }
    ],
    skills: {
      Intimidate: {
        ranks: 22
      },
      "Knowledge (arcana)": {
        ranks: 22
      },
      "Knowledge (history)": {
        ranks: 22
      },
      "Knowledge (nobility)": {
        ranks: 22
      },
      Perception: {
        ranks: 22
      },
      "Sense Motive": {
        ranks: 22
      },
      Spellcraft: {
        ranks: 22
      },
      Stealth: {
        ranks: 22
      }
    },
    special: {
      cold: {
        type: "Ex",
        text: "A crone queen's body generates intense cold, dealing 1d6 points of cold damage with its touch. Creatures attacking a crone queen with unarmed strikes or natural weapons take this same cold damage each time one of their attacks hits. Frozen Heart (Su) A crone queen's frozen heart contains a tiny portion of Baba Yaga's life, and binds the crone queen to Baba Yaga's will. As a free action, Baba Yaga can command a crone queen as dominate monster (CL 20th). If a crone queen's frozen heart is somehow removed before the creature is destroyed, the crone queen loses its fast healing, spell resistance, and unearthly cold ability. Hexes (Su) A crone queen can use the following hexes as a 20th-level witch: blight, frostfoot, hoarfrost, ice tomb, and misfortune. The save DC is 24 to negate or resist and is Intelligence-based."
      },
      "energy drain": {
        universalMonsterAbility: "Energy Drain",
        saveDC: 10,
        levels: 2
      },
      hexes: {
        type: "Su",
        text: "A crone queen can use the following hexes as a 20th-level witch: blight, frostfoot, hoarfrost, ice tomb, and misfortune. The save DC is 24 to negate or resist and is Intelligence-based.",
        preText: "blight, frostfoot, hoarfrost, ice tomb, misfortune"
      },
      "ice staff": {
        type: "Su",
        text: "As a free action, a crone queen can create a magic staff out of supernaturally hard ice that functions as a +3 frost quarterstaff and allows the crone queen to use her energy drain attack with the staff. The ice staff melts away instantly if it leaves the crone queen's hands."
      },
      "unearthly cold": {
        type: "Su",
        text: "A crone queen's spell-like abilities and supernatural abilities that deal cold damage are horrendously cold. Half the cold damage caused by these effects comes from an otherworldly power and is not subject to being reduced by resistance or immunity to cold-based attacks."
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        value: null
      },
      "channel resistance": {
        universalMonsterAbility: "Channel Resistance",
        bonus: 4
      },
      "fear aura": {
        universalMonsterAbility: "Fear Aura",
        saveDC: 10,
        range: 30
      }
    },
    resistances: [
      "vulnerable to fire"
    ]
  },

  "Hag Ooze": {
    source: [
      "The Witch Queen’s Revenge",
      "Bestiary 5"
    ],
    creatureType: "ooze",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Small",
    hd: 4,
    hdVal: 8,
    cr: 3,
    racialFeatures: [
      "Blindsight 60 ft."
    ],
    speed: {
      base: 20,
      climb: 20
    },
    abilities: {
      str: 12,
      dex: 1,
      con: 18,
      int: "-",
      wis: 1,
      cha: 1
    },
    feats: [],
    attacks: [
      {
        weapon: "Slam",
        name: "Slam",
        specialAbility: "paralysis",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to acid, cold"
    ],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "temperate marshes or underground",
    visualDescription: "A single eye stares unblinking from an amorphous blob. A transparent pseudopod extends from the mass, ready to strike.",
    description: "Some hags create hag eye oozes to serve as scouts and spies, favoring them over humanoid servants due to the ease of control. With their ability to blend in with their surroundings and climb nearly any surface, these creatures patrol the hag's lair and surrounding territory. Hag eye oozes seem to be imbued with a sliver of the cautious side of their creator's personality, watching intruders from a distance and avoiding combat unless directed to attack. Once given a command, these creatures pursue their goal mindlessly until a countermand is given. Hag eye oozes have gelatinous, transparent bodies that can sometimes grow larger than 5 cubic feet, though most are smaller, taking up roughly half that space. To date, no specimens have been found weighing more than 500 pounds. Creating a Hag Eye Ooze The process of creating a hag eye ooze is a strange blend of cooking in a cauldron and the magic rituals involved in sparking simulated life into a construct. For more information on hag eyes see Pathfinder Campaign Setting: Classic Horrors Revisited. Creating a hag eye ooze requires 2 weeks. This time is reduced if the brewer is working cooperatively. For each additional member of a coven involved in the process, the creation time is lessened by 2 days, to a minimum creation period of 3 days. During this period, various nutrients and ingredients must be added to the cauldron in which the ooze is brewed. As the ingredients are added the hag must consult strange texts and foul recipes to assure proper creation. If she misses a step or poorly measures a reagent, the necessary arcane energies to create the hag eye ooze do not properly bind to the creature's nascent form. If successful, she then begins a 24-hour ritual, during which the cauldron holding the brewing ooze is bombarded with spells. This ritual and spellcasting culminates in the addition of a hag eye- preferably from the hag creator. If the ritual is successful, the hag eye ooze animates fully formed and able to serve as a minion. The hag eye ooze is under the control of the creator, but in cases where a coven takes part in creating the ooze, control goes to the hag that supplied the hag eye.",
    organization: "solitary",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 1
      }
    },
    special: {
      paralysis: {
        universalMonsterAbility: "Paralysis",
        duration: "1d4 rounds",
        saveDC: null
      },
      "spell channel": {
        type: "Su",
        text: "A hag creator of a hag eye ooze can see through the embedded hag eye as if she were looking from the ooze directly. This ability requires that the hag creator and the hag eye ooze be on the same plane in order to function. If the hag that created the hag eye ooze is part of a coven, the following spells have a 5% chance per caster level of operating through a hag eye ooze: detect chaos, detect evil, detect good, detect law, detect magic, message, read magic, and tongues. A non-hag that controls a hag eye ooze can't cast spells through the ooze, nor can it see through the creature, but it can target the hag eye ooze with a clairaudience/clairvoyance spell and view through it in that manner."
      },
      suction: {
        type: "Ex",
        text: "A hag eye ooze can create a powerful suction against any surface it climbs, allowing it to cling to inverted surfaces with ease. It can establish or release suction as a swift action, and as long as it is using suction, it moves at half speed. Because of the suction, a hag eye ooze gains a +10 bonus to its CMD to resist bull rush attacks, awesome blow attacks, and other attacks and effects that attempt to physically move it from its location."
      },
      transparent: {
        type: "Ex",
        text: "A hag eye ooze is difficult to discern from its surroundings in most environments. A successful DC 15 Perception check is required to notice a hag eye ooze. Any creature that fails to notice it and walks into it automatically suffers damage as if struck by the hag eye ooze's slam attack."
      }
    },
    resistances: [
      {
        damageType: "fire",
        value: 5
      }
    ]
  },

  "Coven Ooze": {
    source: "The Witch Queen’s Revenge",
    creatureType: "ooze",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 11,
    hdVal: 8,
    cr: 9,
    racialFeatures: [
      "Blindsight 60 ft."
    ],
    speed: {
      base: 30,
      climb: 20
    },
    abilities: {
      str: 16,
      dex: 1,
      con: 22,
      int: 2,
      wis: 3,
      cha: 1
    },
    feats: [
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Great Cleave",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Slam",
        choiceSource: "Improved Critical"
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
        name: "Slam",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to acid, cold"
    ],
    defense: {},
    space: "10 ft.",
    reach: "10 ft.",
    environment: "temperate marshes or underground",
    visualDescription: "This eerily disturbing gelatinous blob lumbers forward. Three disembodied eyes float within its mass, seemingly scanning back and forth with each surge of movement.",
    description: "Coven oozes result from a hag eye ooze's conglomeration of multiple hag eyes, often caused by the destruction of a hag coven with a hag eye ooze nearby. With its controller gone, and no one to provide food, the ooze feeds upon its mistress and her coven sisters. Through this consumption, the creation gains some semblance of its creators' cunning, independent thought, and malignancy. If the coven sisters had hag eyes of their own, the ooze absorbs them into its form. Otherwise, consumption of the coven, with the residual magic of the original hag eye, transforms one eye from each of the hags in the coven into a functional hag eye. A coven ooze wanders its creator's territory, devouring any living organism it comes upon. With their animal intelligence, they use the terrain to their best advantage, often lying in waterways near frequented river crossings. Coven oozes are generally 10 feet to a side and weigh roughly 1,500 pounds, although larger specimens have been encountered. When a coven ooze comes across another creature with the ooze subtype, it attempts to engulf and consume it. For every 10 HD of ooze creatures that a coven ooze consumes, its size increases by one step, to a maximum size of Gargantuan. If a coven ooze ever consumes a hag eye ooze, the creator of the hag eye ooze-if a hag-must succeed at a DC 25 Will save or have her connection to the hag eye ooze severed.",
    organization: "solitary",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 1
      },
      Perception: {
        ranks: 8
      },
      Swim: {
        ranks: 2
      }
    },
    special: {
      "absorb flesh": {
        type: "Ex",
        text: "A coven ooze doesn't eat plants or inorganic matter, but devours living flesh with voracious speed, dealing 1d4 points of Constitution drain to creatures it engulfs. Whenever the ooze deals Constitution drain in this manner, it heals 10 hit points for each point of Constitution drained. Excess hit points above its normal maximum are gained as temporary hit points. A coven ooze can gain no more than 30 temporary hit points in this manner. If a coven ooze has temporary hit points when it splits, those temporary hit points are divided into its copies."
      },
      engulf: {
        type: "Ex",
        preText: "DC 18, 1d4 Con drain"
      },
      "hag eye ray": {
        type: "Sp",
        text: "Every 1d4 rounds, each of the hag eyes within a coven ooze can fire a magic ray at a target within 60 feet. Each hag eye emits a different spell effect: bestow curse (DC 17, -6 to Dexterity), confusion (DC 17, 9 rounds), hold person (DC 16, 9 rounds). All of these spell-like abilities function at CL 9th. The save DCs are Charisma-based, and include a +8 racial bonus."
      },
      suction: {
        type: "Ex"
      },
      split: {
        type: "Ex",
        text: "Slashing and piercing weapons deal no damage to a coven ooze. Instead, the creature splits into three identical oozes, each with one third of the original ooze's current hit points (round down). Upon splitting, each copy retains a single hag eye within its mass and can continue to use its hag eye ray ability, albeit with only one spell effect. A coven ooze with 10 hit points or fewer, or that doesn't have enough hag eyes to result in each new ooze getting its own eye, cannot be split and instead takes damage normally."
      }
    },
    resistances: [
      {
        damageType: "fire",
        value: 10
      }
    ]
  },

  Poludnica: {
    source: "The Witch Queen’s Revenge",
    creatureType: "fey",
    subTypes: [],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Medium",
    hd: 14,
    hdVal: 6,
    cr: 10,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 22,
      dex: 20,
      con: 21,
      int: 10,
      wis: 15,
      cha: 19
    },
    feats: [
      {
        name: "Cleave",
        type: "Combat"
      },
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
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Stand Still",
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
        damage: "2d4"
      }
    ],
    immunities: [
      "Immune to blindness, exhaustion, fatigue, fire"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "cold iron"
      },
      SR: {
        value: 21
      }
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "temperate plains",
    visualDescription: "A haze of heat shimmers around this beautiful woman. The glare of the sun gleams from her radiant skin.",
    description: "Driven by an obsession that few can fully comprehend, poludnicas are bitter creatures of light, heat, and envy. Although they are surprisingly strong and deadly combatants, these scythe-wielding women resort to violence only when guile and trickery have failed. They are lonely creatures that seek the company of mortals by luring farm workers and children away from their families so that they can brief ly enjoy a feeble simulation of family life. In the rural farming communities where her kind is most commonly found, a poludnica might also be known as Cornwife, Lady Midday, or Mother Noon. She might even be mistaken for a vengeful or beneficent ghost depending on how she presents herself. Averaging 6 feet tall and weighing approximately 170 pounds, poludnicas could easily be mistaken for strapping farm girls if it were not for their radiance. Their maximum life expectancy has not been documented and it is commonly believed that poludnicas are effectively immortal unless they suffer some deadly mishap. It has been theorized that permanently keeping a poludnica in magically darkened conditions would eventually lead to her death, but no scholars have so far attempted to prove this hypothesis. Ecology Poludnicas draw their physical sustenance from sunlight, but they often eat and drink to emulate the simple folk who are the subjects of their obsession. However, emotional nourishment is more difficult for them to obtain and their need for companionship and the simulation of a normal family life leads them to commit questionable acts of kidnapping or even murder. Like bees who pollinate nearby flowers-which then go to seed and produce more flowers the next season-a poludnica's ability to enrich local plant life leads farming communities to thrive around their lairs. These plentiful fields bring more farmhands and more families, all potential companions for the poludnica. Though the magic that pulls poludnicas into the Ethereal Plane at nightfall is viewed as a curse, it is also one of their most useful abilities. Though distressed and weakened on the Ethereal Plane, poludnicas can nonetheless perceive events upon the Material Plane. They often spend their nights spying on mortal families. Each night they move ethereally through mortals' homes, watching them eat, sleep, and enjoy the company and intimacy of others. Though this fills all poludnicas with sorrow, many are also driven to impotent, jealous rage as they watch children sleeping peacefully and wives embracing their husbands. The origin of their cursed existence is a mystery- whether poludnicas were created by some powerful creature that did not anticipate the maddening effects of their abilities or whether they were once different creatures cursed for some failure or insult is not known. Either way, the curse has driven these lonely fey slightly mad. Habitat & Society Poludnicas usually claim a few hundred acres of fertile land as their territory, most often centered on a lair that is hidden in plain sight, inaccessible, or avoided by the community, such as a hollow beneath the tangled roots of a tree, the tumbledown barn of a former companion who no longer lives, or an abandoned and supposedly haunted farmhouse. By day, a poludnica prowls crop fields seeking to lure, coerce, or physically abduct an overworked farmhand back to her home where she has built a mockery of a human farmhouse kitchen or bedroom, expecting her abductee to indulge her whims in a pantomime of normalcy, companionship, or intimacy. Sometimes one of these companions might choose to play along with his captor or try to escape during daylight hours, but those that bide their time until nightfall when the poludnica disappears at least have a chance of escape. If a companion survives until nightfall, the poludnica fades away, leaving the suitor or child to fend for himself while she watches impotently from the Ethereal Plane. This may not prove to be a problem, but since many poludnicas make their daytime lairs in inaccessible places, if the captive cannot free himself before dawn, the poludnica often simply returns-likely unhappy with the \"inconsiderate\" companion's lack of loyalty to his new \"family.\" Some poludnicas who are kinder than most choose to hide their presence altogether. They avoid coming into contact with the peasants working the land, except at night where they can invisibly and sorrowfully observe mortals enjoying the companionship that is denied to the poludnicas themselves. More commonly, poludnicas are driven to lure away farmhands and kidnap children who they believe will come to love them and consider them their new family. For all the suffering poludnicas cause, dwelling in a poludnica's territory is not without its benefits. Their crop-enriching powers provide abundant food, and many farming communities have come to see them as a kind of guardian spirit. Children often weave cornhusk dolls to placate a local poludnica, ask for her protection, or thank her for sparing their fathers or brothers. Some poludnicas are touched by these displays and stop, or at least reduce, their predations on those in the community.",
    organization: "solitary",
    languages: "Common, Sylvan",
    spellLikeAbilities: [
      {
        name: "pass without trace",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "daylight",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "plant growth",
        casterLevel: 10,
        limitations: "enrichment only",
        timesPerDay: -1
      },
      {
        name: "touch of fatigue",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "blur",
        casterLevel: 10,
        timesPerDay: 3
      },
      {
        name: "dimension door",
        casterLevel: 10,
        timesPerDay: 3
      },
      {
        name: "rainbow pattern",
        casterLevel: 10,
        timesPerDay: 3
      },
      {
        name: "searing light",
        casterLevel: 10,
        timesPerDay: 3
      },
      {
        name: "sunbeam",
        casterLevel: 10,
        timesPerDay: 1
      },
      {
        name: "waves of fatigue",
        casterLevel: 10,
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 5
      },
      Diplomacy: {
        ranks: 6
      },
      Intimidate: {
        ranks: 5
      },
      "Knowledge (local)": {
        ranks: 14
      },
      Perception: {
        ranks: 14
      },
      "Sense Motive": {
        ranks: 10
      },
      Spellcraft: {
        ranks: 10
      },
      Stealth: {
        ranks: 12
      },
      Survival: {
        ranks: 8
      }
    },
    special: {
      "searing weapons": {
        type: "Su",
        text: "Any weapon a poludnica wields becomes incredibly hot and conducts and amplifies her ability to cause fatigue by reducing the target's ability to resist the effects. In melee combat, such a weapon deals an additional 1d6 points of fire damage plus 1d2 points of Constitution damage. The Constitution damage is negated with a successful DC 21 Fortitude save. The weapon cools rapidly if it leaves her grasp, losing these additional abilities immediately. Sunstroke Haze (Su) A poludnica radiates oppressive heat in a 10-foot radius. Any creature that starts its turn within this area must succeed at a DC 21 Fortitude save or take 1d6 points of nonlethal damage and become fatigued. A fatigued creature that fails a second saving throw becomes exhausted. The fatigued or exhausted condition lasts for as long as the nonlethal damage goes unhealed. A poludnica can activate or suppress this ability as a free action and the save DC is Charisma-based."
      },
      grace: {
        type: "Su",
        text: "A poludnica adds her Charisma modifier as a deflection bonus to her Armor Class."
      },
      "tied to day": {
        type: "Su",
        text: "A poludnica's connection to the sun tethers her to the Material Plane. During daylight hours (from dawn to sunset), her abilities are as shown above whether she can actually see the sun or not. During the nighttime hours (from sunset to dawn), a poludnica shifts to the Ethereal Plane (as ethereal jaunt). This is automatic, involuntary, and causes a poludnica great distress. While on the Ethereal Plane, a poludnica is affected by her darkness powerlessness and is nearly helpless. This curse cannot be dispelled or removed by anything short of divine interaction."
      },
      "sunstroke haze": {
        type: "Su",
        text: "A poludnica radiates oppressive heat in a 10-foot radius. Any creature that starts its turn within this area must succeed at a DC 21 Fortitude save or take 1d6 points of nonlethal damage and become fatigued. A fatigued creature that fails a second saving throw becomes exhausted. The fatigued or exhausted condition lasts for as long as the nonlethal damage goes unhealed. A poludnica can activate or suppress this ability as a free action and the save DC is Charisma-based.",
        preText: "10 ft., DC 21"
      }
    },
    resistances: [
      "darkness powerlessness"
    ]
  },

  "Storm Hag": {
    source: [
      "The Witch Queen’s Revenge",
      "Bestiary 5"
    ],
    creatureType: "monstrous humanoid",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 10,
    hdVal: 10,
    cr: 7,
    racialFeatures: [
      "Child-Scent",
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30,
      maneuverability: "Good",
      fly: 60
    },
    abilities: {
      str: 17,
      dex: 14,
      con: 16,
      int: 13,
      wis: 13,
      cha: 16
    },
    feats: [
      {
        name: "Combat Casting",
        type: "General"
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
        name: "Hover",
        type: "Monster"
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
            value: "1d6",
            appliesTo: "damageType",
            damageType: "electricity"
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
            value: "1d6",
            appliesTo: "damageType",
            damageType: "electricity"
          }
        ],
        type: "primary"
      }
    ],
    immunities: [
      "Immune to electricity"
    ],
    defense: {
      SR: {
        value: 18
      },
      naturalArmor: 8
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any temperate",
    visualDescription: "Clad in hides and furs, this creature appears to be a small, ugly woman whose hair, claws, and teeth crackle with sparks of electricity. Her windswept hair billows up from her brow like an enormous thunderhead.",
    description: "When the clouds turn gray and the winds pick up into a howl, wise travelers pray that the cause is only a natural tempest and the foul weather is not connected with a storm hag. Storm hags are hateful creatures, and strangely, their hate is one of the few things that brings them pleasure. A storm hag resembles a shrunken old woman with a thundercloud of hair stacked atop her wrinkled head. Her mouth hangs open, revealing thin pointed teeth; small arcs of electricity can be seen jumping across her teeth and spittle. Black talons sprout from her fingertips, likewise crackling with electricity. A storm hag's wrinkled face contains a look of gleeful distaste, and her eyes are thick with cataracts, rendering her gaze pupil-less. A storm hag's hair is wild and unruly with static electricity popping and crackling throughout the mass. Seemingly animated, a storm hag's hair can easily stand as tall as she is. Wiry and stooped, a storm hag weighs about 70 pounds and stands a little over 4 feet tall, though if she stood up straight she could easily reach 5 feet or more. A storm hag usually wears rough furs and coarse woolen clothing that is rarely cleaned, giving her a distinctly unpleasant odor. Ecology Like most other living things, a storm hag needs to eat, and her favorite meal is the tender flesh of young children. Storm hags use their ability to smell children and young animals to track down their meals no matter where the child has hidden himself. On Golarion, storm hags have developed a special fondness for Kellid and Ulfen children. Storm hags find the childlike gnomes and half lings infuriating. It is unknown why this is so-perhaps storm hags cannot distinguish between children and members of these small races on sight and are angered that their prey is not actually their favorite food. They may very well just have some other unknown pet peeve about the smaller folk, but either way, the presence of gnomes or half lings drives storm hags into a rage. When given the choice, storm hags always target members of these races above all others. Habitat & Society Storm hags are most numerous in the northern lands of the Inner Sea region, but with their ability to fly, their insatiable hunger, and the desire to share their hate with others, storm hags can likely appear anywhere. They prefer areas that are prone to inclement weather, and enjoy flying through the air during thunderstorms, feeling the static discharge dancing across their warty skin. Storm hags most frequently claim territory in the wild spaces between settlements where they keep their distance from civilization unless hunting. Like a predator, a storm hag constantly surveys her territory and takes great pains in keeping a secret den she considers always hers. For the most part, a storm hag is content to remain in one place if the food is plentiful and her shelter is safe and obscured. A storm hag's den is a simple, yet grotesque affair, often located in deep, dark forests or atop craggy mountains, and is always hidden from sight. Cluttered with bones and skins from previous meals, a den's most dominant feature is the storm hag's cauldron. Storm hags roam their territory hunting, preferring to prey on children if possible, but they do consider adult humanoids suitable substitutes when children are unavailable. A storm hag only stoops to eating animals when her hunger grows too strong, however. When a storm hag encounters travelers in her territory, she torments the unwitting visitors, calling down the winds and whipping up a storm of howling gales and crashing lightning to break her enemies' ranks and to send them running for shelter. Once her prey has been cornered into a cave or thicket where they sought shelter from the weather, the storm hag sows discontent by using her whispering wind spell-like ability to harass and frighten the sheltered travelers with a hate-filled, disembodied voice. Like a cat toying with a crippled field mouse, the storm hag pushes her prey to their breaking point-letting them steep in shivering fright-before confronting them face to face with tooth, claw, and lightning before finally killing and consuming them. Storm Hag Covens Like other hags, storm hags form covens. They prefer to form these covens with other storm hags, but storm hags have been known to team up with green hags or other hags on occasion. Storm hags inhabiting stormy coasts or soggy salt marshes sometimes ally with sea hags and form covens with them. Though they respect the strength of annis hags, few storm hags enter into a coven with those brutish and simple creatures. When they do, the storm hags rely on the annis hags' intimidating physical might to help in their hunts. A storm hag is an attractive prospect for any burgeoning coven-to-be, but these hags aren't easily wooed into joining with others. A storm hag is haughty and views her way of doing something as the best, if only because she is the one doing it. Any hag thinking of forming a coven with a storm hag would do well to ride a fine line between flattery and outright dominance by performing simultaneous acts of humble depravity and honorific evil. The other two hags in a coven with a storm hag gain her child-scent ability as long as they are within 100 feet of the storm hag. In addition, a coven with a storm hag as a member has access to the following spell-like abilities beyond what a normal coven provides: call lightning storm (DC 18), plague storm (DC 19), quench (DC 16), whirlwind (DC 21), wind wall. Like other covens, all three hags must be within 10 feet of one another and must work together and take a full-round action take part in this cooperative magic. For more information about hag covens, see page 167 in the Pathfinder RPG Bestiary.",
    organization: "solitary or coven (3 hags of any kind)",
    languages: "Common, Giant",
    spellLikeAbilities: [
      {
        name: "bleed",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "gust of wind",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "whispering wind",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "invisibility",
        casterLevel: 10,
        timesPerDay: 3
      },
      {
        name: "lightning bolt",
        casterLevel: 10,
        timesPerDay: 3
      },
      {
        name: "river of wind",
        casterLevel: 10,
        timesPerDay: 3
      },
      {
        name: "sleet storm",
        casterLevel: 10,
        timesPerDay: 3
      },
      {
        name: "control winds",
        casterLevel: 10,
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 7
      },
      Fly: {
        ranks: 8
      },
      Intimidate: {
        ranks: 9
      },
      Perception: {
        ranks: 10
      },
      Spellcraft: {
        ranks: 6
      },
      Stealth: {
        ranks: 10
      }
    },
    special: {
      "storm strike": {
        type: "Su",
        text: "Each time a storm hag makes a successful attack with her bite, claws, or when she uses a weapon that is predominantly made of metal the attack deals an additional 1d6 points of electricity damage."
      },
      "whipping winds": {
        type: "Su",
        text: "As a standard action, a storm hag can use her gust of wind spell-like ability to trip her foes. This ability can only affect one target within 30 feet, and the storm hag uses her combat maneuver bonus as if tripping a creature normally. The gust of wind spell doesn't possess its normal effects, but instead sweeps a creature off its feet. Attempting to trip a creature with this ability does not provoke an attack of opportunity, but casting the spell-like ability provokes attacks of opportunity as normal."
      },
      "storm rider": {
        type: "Su",
        text: "A storm hag is considered two size categories larger than she actually is in regard to wind effects."
      }
    }
  },

};
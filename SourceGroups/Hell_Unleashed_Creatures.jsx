
export const Hell_UnleashedCreatures = {
  Furcas: {
    source: "Hell Unleashed",
    creatureType: "outsider",
    subTypes: [
      "devil",
      "evil",
      "extraplanar",
      "lawful"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Huge",
    hd: 31,
    hdVal: 10,
    cr: 27,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Detect Chaos",
      "Detect Good",
      "See in Darkness",
      "True Seeing"
    ],
    speed: {
      base: 50
    },
    abilities: {
      str: 40,
      dex: 24,
      con: 40,
      int: 29,
      wis: 33,
      cha: 31
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
        name: "Combat Expertise",
        type: "Combat"
      },
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Craft Magic Arms and Armor",
        type: "ItemCreation"
      },
      {
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Greater Bull Rush",
        type: "Combat"
      },
      {
        name: "Greater Disarm",
        type: "Combat"
      },
      {
        name: "Improved Bull Rush",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Trident",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Disarm",
        type: "Combat"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Quicken Spell-Like Ability",
        type: "Monster",
        value: "Fire seeds",
        choiceSource: "Quicken Spell-Like Ability"
      },
      {
        name: "Staggering Critical",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Claw",
        name: "Claw",
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
      },
      {
        weapon: "Hoof",
        name: "2 Hooves",
        specialAbility: "disease",
        damage: "1d4",
        type: "secondary"
      },
      {
        weapon: "Slam",
        name: "Slam",
        specialAbility: "swat",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Poison barb",
        name: "Poison barb",
        specialAbility: "poison",
        damage: "1d4"
      }
    ],
    immunities: [
      "Immune to ability damage, ability drain, charm effects, compulsion effects, death effects, energy drain, petrification"
    ],
    defense: {
      DR: {
        value: 20,
        damageType: "good, epic, and silver"
      },
      SR: {
        value: 38
      },
      naturalArmor: 13
    },
    space: "15 ft.",
    reach: "15 ft. (25 ft. with trident)",
    environment: "any (Hell)",
    visualDescription: "This giant, centaurlike creature's body is made of hardened, thorny vines. A crown of laurels graces its brow.",
    description: "Called the Knight of the Laurels and the Sentinel of Dis, Furcas is the infernal duke of duty, flames, and herbalism. His disparate concerns model him as a true knight of Hell, a sentry armed with fire and girded by thorns. His patience and wisdom make him one of the multiverse's greatest military commanders, but also a sage of all things green and growing. It might take eons, but Furcas knows that a relentless will can forge even the most delicate petal into a weapon deadlier than any spear. While laurels do crown Furcas's brown, his title stems from the tangle of parasitic, cassytha-like growths that riddle the remains of his stern, once-angelic form. These vines constitute a mighty, tauric body-one that serves as armor for the infernal duke and as a bed for innumerable toxic plants. Furcas is rarely seen without the Avernus Claw, a trident gifted to him by Typhon, the deceased former archdevil of Avernus. The burning trident holds the power to block any escape from the first layer of Hell, and serves as Furcas's divine symbol. As Furcas's demesne-the Hanging Marches-lies on Avernus, the infernal duke is the subject of the layer's ruler, Barbatos. However, Furcas also maintains strong ties with Dis, the second layer of Hell, and its imperious ruler, the archdevil Dispater. These dual loyalties stem from the ancient hellmouth Voulgaz, which yawns at the center of Furcas's realm. The infernal duke's fortress, the Forked Pyre, guards the hellmouth and serves as the stronghold from which Furcas oversees his legions as they conduct travelers and damned souls into the plane-city beyond. Furcas has overseen this post for countless eons, and despite numerous sieges by celestials and proteans alike, the gate to Dis has never fallen. Whether seeking to reclaim a damned soul (rightfully or otherwise), to gain some wisdom of the natural world, or to secure passage to Dis, characters with business in Hell are likely to travel through the Hanging Marches. This is made all the easier from Golarion by a permanent portal that connects a forested valley within Brevoy's Icerime Peaks with Olikscourt, a toppled outpost on the shore of the Crawling Sea. Few who trespass in the Hanging Marches escape the notice of the Knight of the Laurels.",
    organization: "solitary (unique)",
    languages: "Abyssal, Celestial, Common, Draconic, Dwarven, Elven, Infernal, Sylvan; telepathy 300 ft.",
    spellLikeAbilities: [
      {
        name: "air walk",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "detect chaos",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "detect good",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "freedom of movement",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "true seeing",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "unholy aura",
        casterLevel: 27,
        limitations: "30 ft., DC 28, 10 rounds",
        timesPerDay: -1
      },
      {
        name: "blasphemy",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "desecrate",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "diminish plants",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "dispel magic, greater",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "teleport, greater",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "plant growth",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "shapechange",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "telekinesis",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "thorny entanglement",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "unhallow",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "unholy blight",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "wall of stone",
        casterLevel: 27,
        timesPerDay: -1
      },
      {
        name: "overwhelming presence",
        casterLevel: 27,
        timesPerDay: 3
      },
      {
        name: "fire seeds",
        casterLevel: 27,
        limitations: "Metamagic: Quicken ",
        timesPerDay: 3
      },
      {
        name: "reverse gravity",
        casterLevel: 27,
        timesPerDay: 3
      },
      {
        name: "imprisonment",
        casterLevel: 27,
        timesPerDay: 1
      },
      {
        name: "meteor swarm",
        casterLevel: 27,
        timesPerDay: 1
      },
      {
        name: "time stop",
        casterLevel: 27,
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 31
      },
      Diplomacy: {
        ranks: 34
      },
      "Handle Animal": {
        ranks: 34
      },
      Heal: {
        ranks: 31
      },
      Intimidate: {
        ranks: 34
      },
      "Knowledge (arcana)": {
        ranks: 31
      },
      "Knowledge (engineering)": {
        ranks: 31
      },
      "Knowledge (nature)": {
        ranks: 34
      },
      "Knowledge (planes)": {
        ranks: 31
      },
      Perception: {
        ranks: 31
      },
      Profession0: {
        subSkill: "herbalist",
        ranks: 31
      },
      "Sense Motive": {
        ranks: 31
      },
      Spellcraft: {
        ranks: 31
      },
      Stealth: {
        ranks: 31
      },
      "Use Magic Device": {
        ranks: 31
      }
    },
    special: {
      "crown of laurels": {
        type: "Su",
        text: "Once per day as a move action, Furcas can bestow his laurel crown upon an adjacent creature. For the next 24 hours, the creature is affected as per the spells greater heroism and unholy aura. At the end of this period, these benefits cease and the creature is infected with a particularly resilient form of devil chills (see below). This version requires six consecutive successful saving throws to cure, and can be magically cured only by a lawful evil spellcaster. Creatures immune to disease suffer no negative effects. The crown always returns to Furcas after 24 hours."
      },
      disease: {
        universalMonsterAbility: "Disease",
        name: "Devil chills",
        type: "Su",
        text: "Devil chills: hooves-injury; save Fort DC 40; onset immediate; frequency 1/day; effect 1d3 Str damage; cure 3 consecutive saves. The save DC is Constitution-based."
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Poison barb-injury; save Fort DC 20; frequency 1/round for 10 rounds; effect fatigued; cure 3 consecutive saves. The save DC is Constitution-based.",
        saveDC: -10
      },
      "powerful hooves": {
        type: "Ex",
        text: "Furcas's hoof attacks are considered primary attacks. He always adds his full Strength bonus to the amount of damage dealt by his hooves."
      },
      swat: {
        type: "Ex",
        text: "As a free action, Furcas can use the Awesome Blow feat with his slam attack. Because of his irresistible force ability, any creature affected by this attack is hurled 20 feet."
      },
      trample: {
        universalMonsterAbility: "Trample",
        damage: "4d8+22",
        saveDC: 10
      },
      "summon devils": {
        type: "Ex"
      },
      "air walk": {
        type: "Ex"
      },
      "infernal duke traits": {
        type: "Ex",
        preText: "see page 43"
      },
      "irresistible force": {
        type: "Su",
        text: "Anytime Furcas's attack moves a foe-whether through the use of a combat maneuver, Awesome Blow, telekinesis, or a similar effect-that creature is moved double the normal distance."
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        damageType: "epic and good, good and mythic, or deific",
        value: null
      },
      "armor of thorns": {
        type: "Ex",
        text: "A network of thorny vines armors and invades Furcas's body. Any creature that strikes Furcas with a non-reach melee weapon, unarmed strike, or natural weapon takes 1d8+7 points of piercing damage from the barbs studding the infernal duke's body and must succeed at a DC 40 Fortitude saving throw or be poisoned (potentially in addition to the effects of unholy aura). This living, toxic armor also feeds off of all manner of corruption. Any attempt to poison Furcas or magically control his vine armor heals him for 4d6 points of damage. Furcas can also use his poison barbs to heal himself in this way."
      },
      "freedom of movement": {
        type: "Ex"
      },
      "hellish resurrection": {
        type: "Ex"
      },
      immovable: {
        type: "Ex",
        text: "While conscious, Furcas cannot be moved, tripped, or knocked prone by any attack, combat maneuver, spell, or similar effect generated by any creature lesser than a deity or object of less than artifact-level power."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "120 ft."
      }
    },
    resistances: [
      {
        damageType: "acid",
        value: 30
      },
      {
        damageType: "cold",
        value: 30
      }
    ]
  },

};

export const City_Of_LocustsCreatures = {
  "Corpse Lotus": {
    source: "City Of Locusts",
    creatureType: "plant",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Huge",
    hd: 17,
    hdVal: 8,
    cr: 13,
    racialFeatures: [
      "All-Around Vision",
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Tremorsense 30 ft."
    ],
    speed: {
      base: 0
    },
    abilities: {
      str: 30,
      dex: 15,
      con: 23,
      int: 2,
      wis: 13,
      cha: 14
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
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Great Cleave",
        type: "Combat"
      },
      {
        name: "Improved Bull Rush",
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
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Vine",
        name: "4 Vines",
        specialAbility: "grab",
        damage: "1d8"
      }
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "slashing"
      },
      naturalArmor: 15
    },
    space: "15 ft.",
    reach: "25 ft.",
    environment: "temperate forests or marshes",
    visualDescription: "Planted in soil fertilized with corpses, this giant, blood-red flower writhes with prickly vines.",
    description: "A corpse lotus begins life as a small flowering plant that blooms near carrion, but given enough time, it can grow into an incredibly large and dangerous monstrosity. This terrifying plant possesses grasping vines capable of pummeling opponents before dragging them toward its beaklike maw. Always found where prey or corpses are abundant, corpse lotuses have been known to grow in dungeons, ruins, and battlefields in addition to more typical wooded locales. Every corpse lotus has a single bulbous flower in its center, similar in shape to a lotus flower. The blossom's dark petals are streaked with blood-red pigment, and hide an acidic maw in their center. Corpse lotuses in different regions tend to resemble the dominant plant species in the surrounding area (with the exception of its distinct petals), thus granting the plants natural camouf lage and enabling them to hide among the foliage. Their vines are thick and convulse violently when grasping at potential prey. Corpse lotuses gain their name from the garden of dead bodies that frequently surrounds the plant- typically animals or humanoids that strayed too close to the lotus. At rest, a corpse lotus can reach 8 feet in height and splay its leaves nearly 15 feet around. Ecology Despite being rooted in the ground, corpse lotuses are dangerous predators. While they derive sustenance from sunlight and water, their favored food is fresh meat, which provides enough nutrition for these plants to reach behemoth proportions. Any creature that wanders too near a corpse lotus risks being dragged in by the plant's vines toward its hungry center. The lotus's enormous, exotically patterned petals guard the flower's gaping maw, which is coated in a thick layer of acidic mucus to prevent prey from escaping. This mucus exudes a sweet, fruity aroma that attracts many kinds of animals toward the lotus. While the corpses that gradually pile up around a corpse lotus would normally eventually block out the plant's sweet odor, corpse lotuses emit a fine, supernatural mist that rolls along the ground around them and preserves their slain bounty. The mist has no color or aroma, and indeed can go completely unnoticed without the aid of magical detection. The anti-aging properties of this mist magically halt the process of decay on the collected corpses, leaving them in much the same state in which they died. Botanists and scholars have attempted to harness the powers of a corpse lotus's preserving mist for restorative elixirs and life-prolonging potions, but the strange vapors have proven useful only for embalming those already deceased. The preserved corpses surrounding a corpse lotus also help to attract carrion feeders such as vultures, owls, and beetles to the hungry plant. Rather than decimating these flying scavengers, however, corpse lotuses have evolved to let aerial feeders pass, so that they may inadvertently consume corpse lotus seeds and redistribute them near and far. This is the corpse lotuses' primary means of reproduction. The fact that corpse lotuses of any kind- including the more mundane, miniature variety-can be used to pollinate corpse lotus seeds makes this form of reseeding particularly effective. A corpse lotus's single, large flower sprouts from a tangled mess of vines and roots near the center of the plant. The flower's petals are surprisingly thick and resilient, guarding the plant both from the elements and from anything that may struggle to escape its grasp. Its vast root system extends for almost 50 feet into the soil, making the plant extremely difficult to uproot, but thankfully also ensuring that the plant is immobile, other than its vines. While most of the vines that sprout from a corpse lotus are harmless and are merely used to transmit information about the plant's surroundings to the center blossom, four larger, much stronger vines extend from the flower and allow the lotus to manipulate corpses, snatch prey, and defend from attacks. These fibrous vines are roughly 10 inches thick, 25 feet long, and incredibly difficult to sever. Habitat & Society Corpse lotuses can be found in forests, jungles, and marshes the world over, though they thrive in wooded areas that are heavily populated or at least close to humanoid settlements. A corpse lotus's seeds are carried in the preserving mist that seeps from the plant's base. These seeds cling to any creatures that venture too near a corpse lotus, and given enough time create a fine film around fallen prey. Practiced adventurers can recognize this film as a telltale sign of a nearby corpse lotus. Depending on the amount of available meat nearby, a corpse lotus may never grow into the deadly goliath presented here; many remain small, unintelligent flowers. It is possible for a newly sprouted corpse lotus to reach its full maturity in a matter of months if it has access to an ample food supply. In less desirable situations, it can take up to 6 years for one to reach full size. Upon reaching maturity, a corpse lotus develops a modicum of intelligence on par with clever beasts. This intelligence allows the lotus to distinguish carrion feeders from prey and to ration its food stores during lean times. A corpse lotus deprived of meat may eventually dwindle back down to a mindless small flower. Corpse lotuses don't attack other plants, oozes, or constructs unless they are attacked first. Corpse lotuses are not often hunted, but must occasionally be removed from heavily traff icked areas. In some cases, bold entrepreneurs or daring herbalists cultivate corpse lotuses as personal guardians or as symbols of strength. Particularly heinous cultivators may replant corpse lotuses in bare dungeon chambers, outf itting the chambers' ceilings with trapdoors that drop unsuspecting intruders straight onto these hungry plants.",
    organization: "solitary",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 17
      }
    },
    special: {
      "swallow whole": {
        universalMonsterAbility: "Swallow Whole",
        damage: "4d6 acid damage",
        hp: "17 hp",
        AC: "AC 17"
      },
      camouflage: {
        type: "Ex",
        text: "A corpse lotus can blend in exceptionally well with vegetated areas when not taking any actions. A creature must make a successful DC 20 Perception check to recognize a corpse lotus for what it is before the corpse lotus attacks the first time."
      },
      "digest corpse": {
        type: "Su",
        text: "A corpse lotus can consume a corpse to quickly heal damage it has taken. As a standard action, a corpse lotus can swallow any corpse (but not a skeleton) within reach to grant itself fast healing 5 for 1 minute. Any creature killed by a corpse lotus's swallow whole ability automatically triggers this ability. A corpse lotus must wait until 1 minute after its fast healing has ended before it can use this ability again."
      },
      "preserving mists": {
        type: "Su",
        text: "Corpse lotuses emanate a fine mist that spreads across the ground to a range of 30 feet. Any corpse within this area is affected as if by gentle repose. Vines (Ex) A corpse lotus's vines are primary natural attacks with the grab ability. A corpse lotus doesn't gain the grappled condition when grappling enemies with its vines",
        preText: "30 ft."
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
        damageType: "electricity",
        value: 10
      }
    ]
  },

  Katpaskir: {
    source: "City Of Locusts",
    creatureType: "outsider",
    subTypes: [
      "chaotic",
      "demon",
      "evil",
      "extraplanar"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 21,
    hdVal: 10,
    cr: 18,
    racialFeatures: [
      "Darkvision 60 ft.",
      "See Invisibility"
    ],
    speed: {
      base: 40,
      burrow: 20,
      maneuverability: "Average",
      fly: 60
    },
    abilities: {
      str: 31,
      dex: 20,
      con: 28,
      int: 17,
      wis: 21,
      cha: 22
    },
    feats: [
      {
        name: "Dimensional Agility",
        type: "General"
      },
      {
        name: "Dimensional Assault",
        type: "General"
      },
      {
        name: "Dimensional Dervish",
        type: "General"
      },
      {
        name: "Dimensional Maneuvers",
        type: "General"
      },
      {
        name: "Dimensional Savant",
        type: "General"
      },
      {
        name: "Empower Spell-Like Ability",
        type: "Monster",
        value: "Disintegrate",
        choiceSource: "Empower Spell-Like Ability"
      },
      {
        name: "Greater Sunder",
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
        name: "Improved Sunder",
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
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Talon",
        name: "4 Talons",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "cold iron and lawful"
      },
      SR: {
        value: 29
      },
      naturalArmor: 16
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Abyss)",
    visualDescription: "Four clawed arms sprout from this fiend's chest like the limbs of a buried insect struggling to crawl free. Overlapping iridescent plates of chitin cascade down the monster's back, shrouding four membranous dragonf ly wings.",
    description: "Katpaskirs are a pox and pestilence upon not just the world, but reality itself. Just as bugs burrow into unwatched crevices, katpaskirs pry their way into other realms and dimensions. They gnaw and scratch and grind away at the edges of the universe, the planar junctures where the folds of creation bend in upon themselves. They have an uncanny sense for finding natural rifts, portals, and convergences, and they seek ever for ways to expand and untether these natural gates. By setting them loose to drift across the world, they unhinge the orderly substrate of the multiverse, casting all into primordial chaos as the planes unravel. Their voices are strange and echoing, like several voices sounding together, each distorted and cacophonous and rising and falling asynchronously in pitch and volume. When not actively engaged in a task, katpaskirs tend to stand perfectly still, with the exception of its insectlike limbs, which rhythmically stroke the air in front of them. When other creature come near-or if some teleporting creature triggers the demon's warp sense special ability-it snaps out of this self-imposed stasis, ready to attack. Katpaskirs are a little over 7 feet tall and weigh just less than 600 pounds. Ecology Katpaskirs form in the Abyss from the souls of those apocalyptic preachers, doomsayers, and cult leaders who, not content to merely announce the end of days, took it upon themselves in life to bring a living hell to the realms where they resided. Some led suicide cults of dozens if not hundreds, while others organized ultraviolent gangs of nihilistic thugs, spouting cultured witticisms and philosophical sophistries while perpetrating the basest depravities. For them, the anarchic dissolution of society was only a harbinger of the very real disintegration of all that is. These fiends are a natural fit for the armies of Deskari, and indeed, katpaskirs have been used by the Locust Lord for many eons as apocalyptic leaders and generals in his plane-spanning campaigns. Some of Deskari's most fervent and inf luential worshipers are known to have become katpaskirs in the afterlife, earning the powers of cataclysm and madness they so desperately sought while still mortal. Habitat & Society Except in unique circumstances that align with their goals, katpaskirs rarely interact with humanoid cultists of Deskari. In part, this is because their power makes them nigh uncontrollable even for the mightiest spellcaster, but also because these demons see little use in humanity and their ilk. To katpaskirs, mortals are part of the reality that must be destroyed, not the implements of its destruction. They may make brief use of humanoid minions, but at their earliest opportunity they devour and destroy those seeking to serve them, unleashing a horde of fiendish terrors to finish their mission of ultimate destruction. Crazed cultists of Deskari and powerful members of the Blackfire Adepts sometimes call upon katpaskirs to help the group create new portals to Deskari's Rasping Rifts or tear rifts between worlds, but such humanoids know that such a summoning ensures their own final reckoning as well. Katpaskirs are drawn to newly opened rifts and thin places between the planes. Upon reaching such areas, a katpaskir may either attempt to accelerate the opening of the rift or wait for whatever creatures come through once it opens.",
    organization: "solitary",
    languages: "Abyssal, Aklo, Celestial, Common; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "freedom of movement",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "see invisibility",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "blink",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "dimension door",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "dimensional anchor",
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
        name: "plane shift",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "banishment",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "disintegrate",
        casterLevel: 20,
        limitations: "Metamagic: Empower ",
        timesPerDay: 3
      },
      {
        name: "maze",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "gate",
        casterLevel: 20,
        timesPerDay: 1
      },
      {
        name: "summon",
        casterLevel: 20,
        limitations: "level 7, 1d4 fiendish army ant swarms 50%",
        timesPerDay: 1
      },
      {
        name: "summon monster ix",
        casterLevel: 20,
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 21
      },
      "Disable Device": {
        ranks: 24
      },
      Fly: {
        ranks: 24
      },
      "Knowledge (arcana)": {
        ranks: 24
      },
      "Knowledge (planes)": {
        ranks: 21,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Perception: {
        ranks: 21,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      "Sense Motive": {
        ranks: 21
      },
      Spellcraft: {
        ranks: 24
      },
      "Use Magic Device": {
        ranks: 24
      }
    },
    special: {
      breaching: {
        type: "Su",
        text: "When a katpaskir calls or summons a demon or creature with the fiendish simple template into an area where the summoned creature's entry would be blocked by a magical effect (such as magic circle against evil, forbiddance, or dimensional lock), it can force the caster or creator of the effect to attempt a caster level check against the katpaskir's spell resistance. On a failed check, the blocking effect is immediately and permanently negated. Distance Distortion (Su) Reality bends and warps within 30 feet of a katpaskir. The demon moves and attacks normally through this distorted area, but other creatures within this area treat all distances as if they were double the actual distance for all purposes, including movement, range for spells, and ranged attacks. In addition, a creature that begins its turn within this aura must succeed at a DC 26 Will save or be slowed for 1 round (as the slow spell)."
      },
      "mirror of the tainted rift": {
        type: "Su",
        text: "When one or more creature with the celestial simple template is summoned as part of the spell or ability within 30 feet of a katpaskir, the katpaskir can, as an immediate action, summon an equal number of creatures of the same type with the fiendish simple template. If a good-aligned outsider is called or summoned within 30 feet of a katpaskir, it can duplicate the calling or summoning spell as an immediate action, calling or summoning one or more demons as if it had cast the same spell."
      },
      "teleportation disruption": {
        type: "Su",
        text: "When a creature uses a teleportation effect to enter or leave a space within 30 feet of a katpaskir, the caster must immediately attempt a caster level check (DC equal to the katpaskir's spell resistance). On a failed check, the teleportation effect is negated. If it chooses, the katpaskir can instead redirect the arrival location of the teleportation effect to any unoccupied space within 120 feet."
      },
      "warp sense": {
        type: "Ex",
        text: "A katpaskir can automatically sense disruptions in the planar fabric within 1 mile. The demon is immediately aware of any conjuration effect used within this area, and it also knows the direction and approximate distance. When a teleportation effect is used within 1 mile of a katpaskir (including arriving within this area from somewhere else), the demon can use clairaudience/clairvoyance as an immediate action centered on the point the teleportation effect originated from or the point the teleportation effect is directed at as long as the point is within 1 mile; if both points are within 1 mile, the katpaskir can use clairaudience/clairvoyance centered on both."
      },
      "freedom of movement": {
        type: "Ex"
      },
      "distance distortion": {
        type: "Su",
        text: "Reality bends and warps within 30 feet of a katpaskir. The demon moves and attacks normally through this distorted area, but other creatures within this area treat all distances as if they were double the actual distance for all purposes, including movement, range for spells, and ranged attacks. In addition, a creature that begins its turn within this aura must succeed at a DC 26 Will save or be slowed for 1 round (as the slow spell).",
        preText: "30 ft., DC 26"
      }
    }
  },

  Deskari: {
    source: "City Of Locusts",
    creatureType: "outsider",
    subTypes: [
      "chaotic",
      "demon",
      "earth",
      "evil",
      "extraplanar"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Gargantuan",
    hd: 33,
    hdVal: 10,
    cr: 29,
    racialFeatures: [
      "All-Around Vision",
      "Darkvision 60 ft.",
      "Detect Good",
      "Detect Law",
      "Swarmsight",
      "True Seeing"
    ],
    speed: {
      base: 60,
      climb: 60,
      maneuverability: "Good",
      fly: 90
    },
    abilities: {
      str: 44,
      dex: 30,
      con: 42,
      int: 29,
      wis: 31,
      cha: 31
    },
    feats: [
      {
        name: "Awesome Blow",
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
        name: "Craft Construct",
        type: "ItemCreation"
      },
      {
        name: "Craft Magic Arms and Armor",
        type: "ItemCreation"
      },
      {
        name: "Craft Wondrous Item",
        type: "ItemCreation"
      },
      {
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Greater Sunder",
        type: "Combat"
      },
      {
        name: "Hover",
        type: "Monster"
      },
      {
        name: "Improved Bull Rush",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Scythe",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
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
        name: "Staggering Critical",
        type: "Combat"
      },
      {
        name: "Toughness",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Riftcarver",
        name: "Riftcarver",
        specialAbility: "poison",
        damage: "4d6"
      },
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "poison",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Sting",
        name: "Sting",
        specialAbility: "poison",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to ability damage and drain, charm and compulsion effects, death effects, energy drain, petrification"
    ],
    defense: {
      DR: {
        value: 20,
        damageType: "cold iron, epic, and good"
      },
      SR: {
        value: 40
      },
      naturalArmor: 15
    },
    space: "20 ft.",
    reach: "20 ft.",
    environment: "any (Abyss)",
    visualDescription: "Larger than an elephant, this towering insectile nightmare wields a scythe made of bone. Its wings are swarms of biting flies, and its inhuman eyes glitter with cruel intelligence.",
    description: "Known as the Lord of the Locust Host and the Usher of the Apocalypse, Deskari has long plagued the region of Sarkoris, ever since he discovered a strange thinness between that nation and his own Abyssal realm. His first attempt to capitalize upon this strange feature ended with his defeat at Aroden's hands, but after the god's death at the outset of the Age of Lost Omens, Deskari and his cult wasted no time in opening the Worldwound to allow the demon lord's plans for Golarion to continue. Deskari carved his realm from the raw matter of the Abyss using a great scythe called Riftcarver (see page 63), a weapon he crafted from the remains of the strange creature his father, Pazuzu, mated with tens of thousands of years ago. Today, Pazuzu and Deskari have what passes as a cordial relationship-the two demon lords do not work together, but neither do they oppose each other's goals on the Material Plane and beyond. Deskari's Cult Deskari is worshiped primarily by the denizens of the Worldwound on Golarion-by tief lings, fallen crusaders, demons, half-fiends, and all manner of other vile creatures that dwell within that devastated land. Deskari's symbol is a pair of crossed locust wings dripping with blood. His favored weapon is the scythe, in honor of his devastating weapon of choice, Riftcarver, but his worshipers sometimes prefer to use smaller weapons, especially when they must move unnoticed among enemies. Deskari grants access to the domains of Chaos, Destruction, Evil, and War, and to the subdomains of Blood, Catastrophe, Demons, and Tactics.",
    organization: "solitary (unique)",
    languages: "Abyssal, Celestial, Common, Draconic, Terran, Undercommon; telepathy 300 ft.",
    spellLikeAbilities: [
      {
        name: "detect good",
        casterLevel: 29,
        timesPerDay: -1
      },
      {
        name: "detect law",
        casterLevel: 29,
        timesPerDay: -1
      },
      {
        name: "freedom of movement",
        casterLevel: 29,
        timesPerDay: -1
      },
      {
        name: "true seeing",
        casterLevel: 29,
        timesPerDay: -1
      },
      {
        name: "unholy aura",
        casterLevel: 29,
        timesPerDay: -1
      },
      {
        name: "astral projection",
        casterLevel: 29,
        timesPerDay: -1
      },
      {
        name: "blasphemy",
        casterLevel: 29,
        timesPerDay: -1
      },
      {
        name: "control winds",
        casterLevel: 29,
        timesPerDay: -1
      },
      {
        name: "desecrate",
        casterLevel: 29,
        timesPerDay: -1
      },
      {
        name: "dispel magic, greater",
        casterLevel: 29,
        timesPerDay: -1
      },
      {
        name: "teleport, greater",
        casterLevel: 29,
        timesPerDay: -1
      },
      {
        name: "hungry pit",
        casterLevel: 29,
        timesPerDay: -1
      },
      {
        name: "insect plague",
        casterLevel: 29,
        timesPerDay: -1
      },
      {
        name: "shapechange",
        casterLevel: 29,
        timesPerDay: -1
      },
      {
        name: "telekinesis",
        casterLevel: 29,
        timesPerDay: -1
      },
      {
        name: "unhallow",
        casterLevel: 29,
        timesPerDay: -1
      },
      {
        name: "unholy blight",
        casterLevel: 29,
        timesPerDay: -1
      },
      {
        name: "control weather",
        casterLevel: 29,
        timesPerDay: 3
      },
      {
        name: "creeping doom",
        casterLevel: 29,
        timesPerDay: 3
      },
      {
        name: "reverse gravity",
        casterLevel: 29,
        timesPerDay: 3
      },
      {
        name: "symbol of weakness",
        casterLevel: 29,
        timesPerDay: 3
      },
      {
        name: "imprisonment",
        casterLevel: 29,
        timesPerDay: 1
      },
      {
        name: "earthquake",
        casterLevel: 29,
        timesPerDay: 1
      },
      {
        name: "time stop",
        casterLevel: 29,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 24
      },
      Bluff: {
        ranks: 33
      },
      Climb: {
        ranks: 33,
        bonuses: [
          {
            source: "inherent",
            value: 16
          }
        ]
      },
      "Disable Device": {
        ranks: 36
      },
      Fly: {
        ranks: 38
      },
      Intimidate: {
        ranks: 33
      },
      "Knowledge (arcana)": {
        ranks: 33
      },
      "Knowledge (dungeoneering)": {
        ranks: 33
      },
      "Knowledge (engineering)": {
        ranks: 33
      },
      "Knowledge (planes)": {
        ranks: 30
      },
      Perception: {
        ranks: 33,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      "Sense Motive": {
        ranks: 33
      },
      Spellcraft: {
        ranks: 36
      },
      Stealth: {
        ranks: 33
      },
      "Use Magic Device": {
        ranks: 36
      }
    },
    special: {
      "breath weapon": {
        type: "Su",
        text: "Once every 1d4 rounds as a swift action, Deskari can spit out a line of noxious black slime in a 120- foot line that creates a 20-foot-radius-spread puddle of the stuff on the ground where the line terminates. Any creature caught in this area of effect takes 20d10 points of acid damage and is subject to the effects of Deskari's poison. A successful DC 42 Reflex save halves the damage, but does not mitigate the poison's effects. The line and puddle created by this attack remain as active acid on the ground for 1d4 rounds, affecting any creatures that move through an affected area. Damage caused by this breath weapon does not persist into additional rounds, but on the round a creature takes this damage, it is considered to be taking continuous damage for the purposes of spellcasting and concentration checks. The save DC is Constitution-based."
      },
      "enhanced venom": {
        type: "Su",
        text: "Any poisons created by Deskari (or even those used by him) become enhanced, and can affect creatures normally immune to poison. If an affected creature is mythic and is normally immune to poison, it instead receives a +4 bonus on its saving throw against Deskari's poison effects."
      },
      infestation: {
        type: "Su",
        text: "Whenever a creature becomes poisoned by Deskari, it also becomes infested with thousands of microscopic demonic eggs that quickly multiply and spread throughout the victim's bloodstream and flesh alike. Once infested, a creature remains infested even after the poison's effects end or are cured. A creature that has been infested by Deskari is recognized by all mindless swarms as a host, and such swarms never deal damage to the creature unless influenced and compelled to do so by an outside influence. An infested creature takes a -4 penalty on all saving throws made against Deskari's attacks or spells cast by his clerics. As a swift action, Deskari may command a creature's infestation to accelerate; this deals 20d6 points of damage and stuns the target for 1 round (a successful DC 42 Fortitude save halves the damage and negates the stun effect) as the eggs hatch and a fiendish locust swarm (Pathfinder RPG Bestiary 4 183) bursts out of the creature's body (ending the infestation). Infestation is a disease effect, and the save DC is Constitution-based."
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Bite, breath weapon, sting, or Riftcarver-injury; save Fort DC 42; frequency 1/round for 6 rounds; effect 1d4 Constitution drain plus infestation; cure 3 consecutive saves. The save DC is Constitution-based.",
        saveDC: 10
      },
      "swarm master": {
        type: "Su",
        text: "Deskari is immune to swarm damage and other swarm effects (such as distraction). As a swift action, he can direct the movement of any swarm within 30 feet. An intelligent swarm can resist this compulsion by succeeding at a DC 36 Will save. Any swarm created by or conjured by Deskari deals +3d6 points of swarm damage, and the damage caused by such a swarm is treated as chaotic, epic, and evil for the purpose of overcoming damage reduction. The save DC is Charisma-based. Swarmsight (Su) Deskari can see through the eyes of any swarm he commands or controls, including the swarm of biting flies that makes up his wings (this swarm, incidentally, grants him All-Around Vision)."
      },
      "summon demons": {
        type: "Sp",
        text: "Once per day, nascent demon lords can summon any demon or combination of demons whose total combined CR is 20 or lower. This ability always works, and is equivalent to a 9th-level spell."
      },
      "wall crawler": {
        type: "Su",
        text: "Deskari can climb any vertical surface with ease and never has to attempt Climb checks to avoid falling as a result of taking damage. This grants him a +16 racial bonus on Climb checks."
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        damageType: "epic and good or deific",
        value: 30
      },
      "abyssal resurrection": {
        type: "Ex"
      },
      "freedom of movement": {
        type: "Ex"
      },
      "rasping armor": {
        type: "Su",
        text: "The armor plates that protect Deskari's body rasp together whenever he is damaged by a physical attack, creating a discordant shrieking and grinding sound. Every time a creature strikes Deskari with an attack that deals bludgeoning, force, piercing, or slashing damage, all creatures within 10 feet of Deskari must succeed at a DC 42 Fortitude save or be sickened for 1d6 rounds. A sickened creature that fails this save becomes staggered for 1 round. A staggered creature that fails this save becomes nauseated for 1 round. Finally, a nauseated creature that fails this save becomes stunned for 1d6 rounds. This is a mind-affecting sonic effect that does not affect demons. The save DC is Constitution-based."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "180 ft."
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
      },
      {
        damageType: "fire",
        value: 30
      }
    ]
  },

};

export const The_Asylum_StoneCreatures = {
  Chrestomath: {
    source: "The Asylum Stone",
    creatureType: "outsider",
    subTypes: [
      "extraplanar"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 10,
    hdVal: 10,
    cr: 6,
    racialFeatures: [
      "Blindsense 60 ft.",
      "Thoughtsense"
    ],
    speed: {
      maneuverability: "Average",
      fly: 10
    },
    abilities: {
      str: 2,
      dex: 2,
      con: 19,
      int: 25,
      wis: 21,
      cha: 22
    },
    feats: [
      {
        name: "Ability Focus",
        type: "Monster",
        value: "Mind flood",
        choiceSource: "Ability Focus"
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
        name: "Improved Iron Will",
        type: "General"
      },
      {
        name: "Iron Will",
        type: "General"
      }
    ],
    attacks: [],
    immunities: [
      "Immune to sensory effects"
    ],
    defense: {
      SR: {
        value: 17
      },
      naturalArmor: 4
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "This bloated, larval sack of green and pink flesh is wet and curdled, its brainlike wrinkles interrupted by transparent membranes showing dark fluid within.",
    description: "The caulborn are a race of extraplanar scholars that wander between worlds in search of esoteric knowledge, literally consuming the thoughts and memories of other races. While the most common caulborn are the humanoid versions (Bestiary 3 48), there exists a second kind as well: the bloated and blind intelligences called chrestomaths, sometimes referred to as living libraries, or simply \"brain-sacks.\" Though they appear to be little more than giant amoebas barely able to move themselves, chrestomaths are a vital part of caulborn society. From their fleshy prisons, these powerful psychic intelligences help to shield and organize their humanoid servitor-siblings, occupying a position in caulborn society somewhere between brute resource and honored elder-and sometimes something close to a living divinity. Even more importantly, however, chrestomaths are the keepers of a caulborn hive's massive racial memory, the living storehouses of everything its members have ever experienced, as well as the memories and concepts they've stolen from others. Indeed, it's possible that the memories contained within a single chrestomath may stretch back millennia, all the way to the race's mysterious origins. A typical caulborn chrestomath is a wet, squishy sack of flesh roughly 5 feet in diameter, and weighs 500 pounds, though older and more advanced versions can grow far larger, taking up entire buildings with their fetid bulk. These more advanced versions sometimes appear almost larval in form, and may possess levels in spellcasting classes, using spells such as mage hand to affect their surroundings. Ecology Every caulborn colony has at least one chrestomath, but these creatures are made, not born. When a colony finds reason to split, or a small group becomes large enough to warrant it, the caulborn select several of their own members via criteria unique to each colony. These chosen individuals are promptly disassembled and rendered down in a solemn ritual, their living organs melded together into a single blob of curdled flesh. The resulting protoplasmic sack has no outside sensory organs or useful manipulating appendages, only a massive intelligence whose psychic abilities increase even as the world around it loses relevance, the isolation honing its intellect. Once the brain sack is complete, the caulborn seed it with every fact and record at the colony's disposal, usually copying knowledge over from other chrestomaths. Though their psychic abilities give chrestomaths the ability to float sluggishly through the air, most caulborn consider this a waste of the organic thinking machines' time, and instead assign teams of humanoid caulborn to carry the living data centers around in palanquins or set them up in vast chapels. Chrestomaths are completely dependent on their kin for survival. Just as normal caulborn consume the psychic energy of other races through stolen ideas and concepts, chrestomaths are unable to feed directly from the source creatures, instead requiring their less intelligent brethren to regurgitate the predigested knowledge for them, sometimes also injecting them with additional nutrients and magical concoctions. While any caulborn within range may access a chrestomath's memory, this information can be devastating to other creatures. In addition to its normal telepathy and mind-reading, a chrestomath confronted with dangerous creatures can establish a psychic link through which it pushes huge amounts of information. The recipients of this attack find their brains overloaded by the tidal wave of knowledge, rendering them catatonic or violently insane. Habitat & Society While most chrestomaths have very little personality, any traces of identity being consumed by oceans of information, some eventually grow to control the data stored inside them and reestablish some semblance of self. One of the best such examples is Anamnesis, the One That Watches. As the heart of Xavorax, the city of caulborn and vampires deep below Kaer Maga, Anamnesis may well be one of the most learned entities on the face of Golarion, its thoughts and motives far beyond human comprehension. To outsiders, the thousands of pounds of flesh might seem barely sentient, capable only of shifting its colors to reflect emotions. Yet whether it's slave or master-or perhaps both-the lord of the Quivering Palace influences all the residents of Xavorax, watching over them as the central relay of their hive mind and the repository of all their race holds dear. While parasitic by nature, caulborn are not necessarily predatory, and aren't above trading for the sustenance they need. When they do so, it's often as prophets, a role in which chrestomaths are singularly important. Left with nothing but godlike memories and an ability to analyze information, chrestomaths are often able to extrapolate from trends and make logical connections that result in uncannily accurate predictions about future events.",
    organization: "solitary, catechumen (1 plus 2-4 caulborn), array (2-4 plus 4-12 caulborn)",
    languages: "Abyssal, Aklo, Celestial, Common, Draconic, Elven, Infernal, Thassilonian, Undercommon; tongues; telepathy 1 mile.",
    spellLikeAbilities: [
      {
        name: "detect magic",
        casterLevel: 7,
        timesPerDay: -1
      },
      {
        name: "detect thoughts",
        casterLevel: 7,
        timesPerDay: -1
      },
      {
        name: "tongues",
        casterLevel: 7,
        timesPerDay: -1
      }
    ],
    skills: {
      Appraise: {
        ranks: 12
      },
      Fly: {
        ranks: 13
      },
      "Knowledge (arcana)": {
        ranks: 25
      },
      "Knowledge (history)": {
        ranks: 25
      },
      "Knowledge (local)": {
        ranks: 25
      },
      "Knowledge (planes)": {
        ranks: 22
      },
      "Knowledge (religion)": {
        ranks: 25
      },
      "Knowledge (dungeoneering)": {
        ranks: 22
      },
      "Knowledge (engineering)": {
        ranks: 22
      },
      "Knowledge (geography)": {
        ranks: 22
      },
      "Knowledge (nature)": {
        ranks: 22
      },
      "Knowledge (nobility)": {
        ranks: 22
      },
      Perception: {
        ranks: 10
      },
      "Sense Motive": {
        ranks: 10
      },
      Spellcraft: {
        ranks: 12
      }
    },
    special: {
      "mind flood": {
        type: "Su",
        text: "A chrestomath can target any creature it detects with its thoughtsense ability with a deadly psychic attack, flooding the target creature's head with so much obscure knowledge that it drives the target insane. Any creature affected by the mind blast must make a successful DC 19 Will save or take 1d6 points of Intelligence and Wisdom damage and be confused (as per the spell confusion) for 1d6 rounds. The save DC is Intelligence-based."
      },
      "advanced hive mind": {
        type: "Ex",
        text: "As long as there are at least two chrestomaths or caulborn within 300 feet of each other, if one creature in the group is aware of a particular danger, they all are. No creature in the group is considered flanked or flat-footed unless all of them are."
      },
      "cooperative scrying": {
        type: "Sp",
        text: "Three or more caulborn or chrestomaths who maintain physical contact can scry on a place or creature as if using the scrying spell (DC 20), but with no limit to the spell's duration so long as at least three of the participants involved continue to touch and concentrate. This ability functions at caster level 7th (or at the highest caster level available to the most powerful participant in the group). The save DC is Charisma-based, adjusted by the modifier of the participant with the highest Charisma score."
      },
      "psychic deflection": {
        type: "Su",
        text: "A chrestomath adds its Charisma modifier as a deflection bonus to its AC. In addition, all caulborn (though not other chrestomaths) within 300 feet of a chrestomath gain half of this deflection bonus as well, with the effects stacking with those from other chrestomaths and the caulborn's own psychic deflection ability. These bonuses cease when the chrestomath is unconscious."
      },
      "racial memory": {
        type: "Ex",
        text: "As a full-round action, any caulborn within 300 feet of a chrestomath may access the latter's racial memory to gain half the chrestomath's Knowledge skill bonus as a bonus on its own Knowledge check. In addition, the chrestomath instantly acquires any piece of information learned by any caulborn that comes within 300 feet of it. This information may then be shared by any other caulborn and chrestomaths with 300 feet."
      },
      thoughtsense: {
        type: "Su",
        text: "A chrestomath notices and locates living, conscious creatures within 60 feet just as if it possessed the Blindsight ability. Spells such as nondetection or mind blank make an affected creature undetectable by this sense."
      }
    }
  },

  "Clockwork Familiar": {
    legs: 2,
    arms: 0,
    source: "The Asylum Stone",
    creatureType: "construct",
    subTypes: [
      "clockwork"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Tiny",
    hd: 3,
    hdVal: 10,
    cr: 2,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30,
      maneuverability: "Perfect",
      fly: 50
    },
    abilities: {
      str: 10,
      dex: 14,
      con: 10,
      int: 11,
      wis: 13,
      cha: 11
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
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
        name: "Weapon Finesse",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d3",
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
      "construct traits"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "adamantine"
      },
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "This tiny metallic creature is shaped like a raven, yet beneath its shining, articulated plates whir gears and spinning belts.",
    description: "When it comes to familiars, most arcanists satisfy themselves with mundane creatures such as rats and lizards. Those with the power to bind greater assistants often call forth helpers from the planes, turning minor fiends or celestials to their will. Yet for artificers and those who fuse magic with machinery, the best familiar is the one the caster creates herself, breathing life into a clockwork mechanism of her own design. Clockwork familiars can take a variety of forms depending on the whim of the creator. Most popular are tiny metal dragons, birds (especially owls and ravens), faceless humanoids, and spiders that run on clicking, needlelike legs, though practically any shape and material can be animated in this fashion. With its ability to generate electric shocks, a clockwork familiar can be useful in combat, yet it more often finds more use in the workshop, where its methodical thought processes and innate knowledge of mechanical systems allow it to offer valuable advice. In addition, each clockwork familiar has a unique relationship with a particular type of magic item, established at creation. When items of the chosen sort are slotted into the familiars-usually via a locking compartment, though some familiars simply drink potions, their metal stomachs becoming new receptacles- the familiars gain the ability to drain the magic back out of the items and turn it toward a different preset purpose, such as healing themselves or creating a specific spell effect. A typical clockwork familiar is roughly 2 feet tall or long and weighs 10 pounds. While the stat block here represents a raven familiar, and hence has a fly speed, other forms may trade this ability for a different form of movement, such as a clockwork piranha with a swim speed of 40 feet or a mechanical badger with a burrow speed of 10 feet. Ecology Clockwork familiars can be constructed from a wide variety of materials, the most common being adamantine, steel, and bronze. Though their bodies are often expertly crafted contraptions of gears, drive shafts, and even circuitry, a clockwork familiar is not simply a robotic wind-up toy, nor is its consciousness the result of elaborate programming. Instead, each construct is more like a vehicle for the tiny spirit that lives inside its heart. On their own, these flickers of consciousness-pulled from the fundamental animating energy of the planes-would have no real ability to affect their surroundings. Only through the specially attuned constructs created by arcanists do they gain the ability to truly live, and it's perhaps gratitude for this service that initially binds clockwork familiars to their creators. Once called into being and installed in its new vessel, a clockwork familiar's animating spirit controls its mechanical manipulators through tiny bursts of magical or electrical energy. As a result, most such constructs have conductive metal parts, and thus an instinctive fear of water and corrosion. Unable to heal naturally, clockwork familiars know that if their systems fail, they may never again be granted the chance to interact with the world. As a result, most clockwork familiars tend to be slightly paranoid and demanding when it comes to getting their masters to keep them in good repair, and it's not uncommon to find a clockwork familiar left to its own devices busily scouring rust from its shell, performing maintenance on itself, or attempting to improve the resilience of its basic functions. Habitat & Society As created creatures, clockwork familiars have little society of their own, and tend to take on mannerisms and speech patterns similar to their masters'. Most feel an instinctive affection for their masters, though as intelligent beings it's not unheard of for the little automatons to have existential crises if their masters mistreat or ignore them. Clockwork familiars are often fascinated by other construct creatures and may attempt to befriend or study them, the better to understand how their systems work. Though they rarely adopt religion on their own, familiars with religious masters may go through the motions of worship as a way of honoring their place in the great chain of creation-left to themselves, clockwork familiars tend to be more interested in the systems and logic by which the natural world and planes operate than in particular entities, including deities. While clockwork familiars have little desire for treasure themselves, they understand its value in trading, and may snatch up worthwhile items either on behalf of their master or-if they're concerned about being provided for-as emergency funds with which to purchase information or repairs, or as fuel for their magic-draining abilities. Clockwork familiars value knowledge above all things, though they tend to focus on logic, mathematics, organizational systems, and new ways of seeing and interpreting the world rather than simple facts. In a clockwork familiar's eyes, an almanac is useless clutter, but a textbook on geometry or chemistry is worth more than a pile of gold. As intelligent creatures, clockwork familiars have an ambiguous relationship with the lives of servitude they're inevitably born into. For some, the philosophical quandaries are small and easily managed, as their creators treat them well, ask their opinion, share their stores of valuable knowledge, and may even come to love them. For others, whose masters see them as slaves at best and irritatingly imperfect projects at worst, only fear for their continued existence keeps the constructs in line. Many fall somewhere in the middle, and are interested in all the world has to offer even down to the mundanity of fetching and polishing, and thus are content to experience life on their masters' terms. A spellcaster of at least 7th level who takes the Improved Familiar feat can select a clockwork familiar as a familiar. Construction The creator of a clockwork familiar must start with crafted clockwork pieces worth 500 gp. Clockwork Familiar CL 12th; Price 14,500 gp CONSTRUCTION Requirements Craft Construct, geas/quest, make whole, creator must be at least caster level 12th; Skill Craft (clockwork) DC 20; Cost 7,500 gp",
    organization: "solitary",
    languages: "Common",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 5
      },
      Perception: {
        ranks: 2
      },
      "Sense Motive": {
        ranks: 0
      },
      Stealth: {
        ranks: 2
      }
    },
    special: {
      advice: {
        type: "Ex",
        text: "Clockwork familiars have an innate understanding of how things work, granting their masters a +2 bonus on all Craft and Use Magic Device checks."
      },
      "item installation": {
        type: "Ex",
        text: "Each clockwork familiar is made with the ability to carry a specific type of magic item inside its body. This item type is chosen at the time of the construct's creation, and cannot be changed. While the creature cannot activate or use the item for its original function, it gains certain constant abilities from the resonant magic fields, and can drain the item's magic as a free action in order to gain additional magical effects. In addition, any clockwork construct can drain a single charge or spell level from its installed item to heal itself 1d6 hit points as a standard action. Removing a spent item and installing a new one is a full-round action. Potion: The clockwork familiar gains a constant protection from good/evil/law/chaos effect (one type only, chosen each time a new potion is installed). In addition, a clockwork familiar can drain the magic from the potion in order to gain the ability to include in the effect a single creature whose shoulder it's perched on. While perched on a character's shoulder, it acts like a worn object with no body slot. While the familiar can move from person to person, thus transferring the benefit, latching on or unlatching from a shoulder is a move action. This ability to include others in the protection effect lasts for 1 minute per spell level of the potion drained. Scroll: The clockwork familiar gains a constant detect magic effect as a spell-like ability. Draining magic from a scroll allows the familiar to cast a single identify spell on behalf of its master for each spell level of the spell inscribed on the scroll-these castings may be stored and saved, though a scroll used in this manner becomes instantly useless, even if not all spell levels have been drained. Wand: The clockwork familiar gains the ability to spit a gobbet of acid up to 30 feet as a ranged touch attack, dealing 1d4 points of damage. Draining a charge increases the damage to 2d4 points for a single attack. This charge is spent before the attack is rolled."
      },
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

  Polevik: {
    source: "The Asylum Stone",
    creatureType: "fey",
    subTypes: [],
    alignments: [
      "Neutral Evil"
    ],
    size: "Small",
    hd: 8,
    hdVal: 6,
    cr: 5,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 20
    },
    abilities: {
      str: 16,
      dex: 18,
      con: 19,
      int: 15,
      wis: 9,
      cha: 8
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
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
        name: "Precise Shot",
        type: "Combat"
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
        weapon: "Puffball",
        name: "Puffballs",
        specialAbility: "disease",
        damage: "1d6"
      }
    ],
    immunities: [
      "Immune to disease, nausea, poison, sickened condition"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "cold iron"
      },
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any swamp or underground",
    visualDescription: "Toadstools, puff balls, and other bizarre fungal growths sprout from this small, hunchbacked man's mold-streaked body. His beady eyes burn with paranoia and malice.",
    description: "The secretive and suspicious poleviks cultivate gardens of fungi in deep bogs and caves far from civilization, jealously guarding the secrets of their fungal alchemy from the rest of the world. Once natives of the First World, they retain some of that plane's potent life energy, which specifically encourages the growth of fungi and molds. This enables them to turn their own spry and twisted bodies into fertile ground in which to cultivate their signature puffball weapons. Averaging a few inches shy of 4 feet tall and weighing approximately 115 pounds, individuals can vary in size depending on the number and size of fungal growths that they nurture upon their bodies. They rarely live beyond 300 years. Ecology Poleviks are omnivorous but prefer decomposing meat that is already furred with fungus or ripe with mold. They rarely go to the trouble of actively hunting food; instead, they scavenge the remains of small creatures that find their way into their lairs and fall victim to the dangerous plants and molds they cultivate. Although poleviks could subsist on the mushrooms that they grow, they consider it a terrible waste to use these mushrooms for something as prosaic as food. As with many creatures of the First World, their cycle of reproduction is somewhat bizarre; poleviks reproduce only after their death. As a polevik's body begins to rot, one of his unique fungal infestations begins to consume his flesh and eventually grows into a colony of large toadstools. After a period of 1 year, the stalk of the largest toadstool bursts open and gives birth to a new, fully grown polevik. While already possessing all the skills and abilities of his race, the newborn carries none of the memories of his progenitor. As a result, a newborn polevik knows nothing about the world beyond his immediate surroundings, and his paranoid nature gives him little desire to learn more. Instead, he begins to enthusiastically cultivate the corpse-grown fungal colony that gave birth to him, adding it to the fungal garden of his long-decomposed predecessor. Habitat and Society Poleviks are solitary and reclusive creatures who consider fungi and molds to be both their closest friends and their most treasured possessions. Though they are able to communicate with all types of molds and mushrooms, poleviks occasionally find fungi's limited frame of reference frustrating. This sometimes leads poleviks to associate with intelligent fungoid creatures such as leshies and myceloids, although they treat the former as servants and the latter as rivals. Most scholars agree that the poleviks were cast out of the First World, exiled for some ancient insult to one of the Eldest. Though scholars disagree on which of those unique beings the poleviks offended, evidence of polevik gardens has been discovered by travelers in the Hanging Bower of the Green Mother, leading to speculation that poleviks may have once been her servants. Exile may have stripped them of an unending existence in the First World, but the stability of the material world gives them ample opportunity to cultivate and experiment with their beloved fungal companions. It is for these experiments that they are widely hunted by wizards seeking obscure spell components, and by alchemists who wish to learn the secrets of the polevik's miraculous ability to mix fungi into concoctions that seem impossible to create outside of a laboratory. Fearful of the outside world, poleviks rarely leave their lairs, but creatures that find their way into a polevik's gardens face vicious opponents. While poleviks are dangerous on their own, their usual tactic is to lead interlopers within reach of the deadly molds and fungi with which they share their lairs. Most who seek poleviks fall prey to ascomoids, brown molds, phantom fungi, phycomids, violet fungi, yellow molds, and others long before they face the direct attacks of these obsessive fey. Puffballs The most treasured of a polevik's fungi is the puff ball. In addition to the standard puff ball, which is rife with the deadly pulsing puffs disease, poleviks cultivate certain other varieties, each with its own unique properties. Deathrot Spores: Despite their name, these black puff balls are no threat to living creatures. When applied to a corpse, they quickly consume the necrotic flesh, stripping all meat from the skeleton over the course of a minute. This ability to easily conceal the identity of a murder victim makes deathrot spores prized by assassins. These puff balls can also be brought to bear against certain types of undead. When hurled as a ranged touch attack against non-skeletal, corporeal undead, deathrot spores inflict a -2 penalty to the creature's natural armor for 10 rounds. Flamequench Mushrooms: These dun-colored puff balls are grown from a species of brown mold. When thrown into a fire, the puffball releases spores that suck in the heat from their immediate area. This has the effect of completely extinguishing a 5-foot square of nonmagical fire.",
    organization: "solitary",
    languages: "Aklo, Common, Sylvan, Undercommon",
    spellLikeAbilities: [
      {
        name: "speak with plants",
        casterLevel: 7,
        limitations: "fungi and mold only",
        timesPerDay: -1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 5
      },
      Craft0: {
        subSkill: "alchemy",
        ranks: 12
      },
      Heal: {
        ranks: 8
      },
      "Knowledge (dungeoneering)": {
        ranks: 8
      },
      "Knowledge (nature)": {
        ranks: 8
      },
      Perception: {
        ranks: 8
      },
      "Sense Motive": {
        ranks: 6
      },
      Stealth: {
        ranks: 4,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Survival: {
        ranks: 4,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Swim: {
        ranks: 1
      }
    },
    special: {
      "fungal alchemy": {
        type: "Ex",
        text: "As long as he has access to his fungus garden, a polevik can craft any alchemical item with a Craft DC of 25 or lower without needing to pay a cost in gold pieces for raw materials. Items function normally but may have a different appearance. For example, materials usually stored in glass jars instead fill rigid spheres of plant matter. Puffballs (Ex) Poleviks have learned how to nurture myriad species of symbiotic fungi upon their bodies, and the most treasured of these are their deadly puffballs. Each 6-inch-diameter spherical fungus has a thorny internal stalk covered by a thin skin of spore-laden flesh. As a standard action that does not provoke an attack of opportunity, a polevik can pluck and throw a puffball with a range of 20 feet. On a successful hit, the thorns expand and pulsate on impact, bursting through the flesh of the puffball. This inflicts vicious wounds and releases fungal spores that infect the victim with pulsing puffs. As soon as a puffball has been plucked, another grows in its place. Once a puffball has been plucked, it decomposes after 1 round, becoming inert. Putrefying Aura (Su) All unattended nonmagical food or liquid within the radius of a polevik's aura instantly rots or spoils. Attended nonmagical food or liquid within the aura receives a saving throw to resist this effect. The save DC is Constitution-based."
      },
      "putrefying aura": {
        type: "Su",
        text: "All unattended nonmagical food or liquid within the radius of a polevik's aura instantly rots or spoils. Attended nonmagical food or liquid within the aura receives a saving throw to resist this effect. The save DC is Constitution-based.",
        preText: "30 ft., DC 18"
      },
      disease: {
        universalMonsterAbility: "Disease",
        name: "Pulsing Puffs",
        type: "Ex",
        text: "Pulsing Puffs: Puffball-injury; save Fort DC 18; onset 1 minute; frequency 1/day; effect 1d6 Dex damage; cure 2 consecutive saves. Pulsing puffs is a disease characterized by small, blue-white spores sprouting within a creature's wounds. These spores quickly grow into phosphorescent, domed mounds that pulsate and throb, eating away at victims' connective tissue, severely impairing them. Additionally, once a creature takes 7 points of Dexterity damage from the pulsing puffs, the domed mounds burst, releasing a 10-foot-radius burst of diseased spores. This effect lasts for 1 round. Any creature caught within the burst radius or that moves through it is exposed to the pulsing puffs disease. The save DC is Constitution-based."
      }
    }
  },

};
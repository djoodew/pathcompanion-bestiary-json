
export const The_Varnhold_VanishingCreatures = {
  Blodeuwedd: {
    source: "The Varnhold Vanishing",
    creatureType: "fey",
    subTypes: [],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Medium",
    hd: 7,
    hdVal: 6,
    cr: 6,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 18,
      dex: 21,
      con: 21,
      int: 14,
      wis: 17,
      cha: 18
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
        name: "Mobility",
        type: "Combat"
      },
      {
        name: "Weapon Finesse",
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
        weapon: "Sling",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "Sling",
        damage: "1d4"
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "cold iron"
      },
      naturalArmor: 4
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "temperate plains",
    visualDescription: "Clothed in verdant lichen and flowers of broom, meadowsweet, and oak, this shapely maiden has skin of velvety moss and living grass for hair. An eldritch serenity graces her countenance as she approaches, her outstretched, root-like hands brushing the tips of the tallest grass-the wind itself whispers around her feet as patches of clover, heather, and milkweed mark her every step.",
    description: "The mysterious blodeuwedds stand apart from dryads, their tree-bound sisters of the forest, instead watching over the open plains and prairies. They frequently guard the approaches to primeval, fey enclaves as well as various gateways and entry points into the First World-a task they take very seriously. Blodeuwedds hide such regions behind veils of illusion and trickery, quietly observing anyone passing through their lands, and occasionally sending mysterious messages to warn them away or to summon allies that can drive them out. Even when not standing sentinel over a point of otherworldly importance, blodeuwedds find spots of particular natural beauty, transforming such fields-usually only a few acres in size-into sites of unearthly lushness and natural wonder. A typical blodeuwedd stands a little over 5 feet tall, weighs 120 pounds, and may live up to 800 years. Ecology Instead of developing a lifelong bond with trees, blodeuwedds hold an affinity for open grasslands, moors, and plains. They survive off the land, taking nourishment from all that nature provides, while also looking after prairie animals in times of drought or lean winters. Unlike dryads, blodeuwedds have no dependency on the plants around them; they can willingly leave their chosen moor to visit their fey kin, scout their domain in owl form, or even mingle with frontier communities, changing shape to appear elven or human. Every 15 or so years, blodeuwedds may reproduce through a natural ritual of fertility known as the Blooming, a process by which they commune with the adopted plants of their surrounding field. At the height of the spring season, they then exchange pollen with every flower within 300 yards, a complicated and sensuous act that eventually allows a blodeuwedd to conceive. It takes 6 months to carry a new blodeuwedd to term, and they frequently come together to act as midwives during this time to ensure successful deliveries for one another. Some tales tell of blodeuwedds displaced from their homes or in captivity capable of performing the Blooming by drawing off the lifeforce of amorous men, ending in the withering death of the would-be father. Such legends give blodeuwedds a reputation for being dangerous seductresses in some regions. Blodeuwedds typically establish their own prairie holdings within 7 miles of each other for mutual support and ease of communication. Habitat & Society Blodeuwedds make their homes out of sod, carving them from the landscape and then encouraging prairie grass to grow over the exterior to hide them. These elaborate structures resemble small rises and hillocks that overlook ley lines and fairy paths between sites of great power and importance to the fey, which the blodeuwedds jealously guard from nonfey creatures. Most fey recognize such service by referring to blodeuwedds with honorific titles meant to curry their favor. As a result, many blodeuwedds set themselves up as queens or wardens to receive tribute from favored kin who pass through their realms. Blodeuwedds also rely on plant growth and their ability to speak with plants to manage the surrounding fields, encouraging them to grow into complex mazes of hedgerows, tangles, and thickets to better shape their territory. Often they use hallucinatory terrain to hide the best routes through these areas. Interlopers typically find themselves impeded by entangle or areas of spike growth when they enter a blodeuwedd's territory. Any who persist then become targeted by deep slumber or modify memory to lead them in false directions. More rarely, a blodeuwedd might aid one on an important quest, but she usually requires some form of guarantee before agreeing to do so. All blodeuwedds possess tremendous knowledge of and influence over the lands and creatures that border their fields. They often involve themselves in the politics of elves, gnomes, and humans who live nearby-even if only to warn against destructive trespasses or wasteful farming practices. They enjoy playing wind flutes, dancing under the stars, and chasing one another's fairy lights like fireflies among the tall grass. Blodeuwedd Queens Particularly old and active blodeuwedds- typically the eldest within a region that more than 10 blodeuwedds inhabit-sometimes ascend to the status of queens, gaining additional power and prestige among their own kind. They develop a greater affinity for the lands they rule and attract even more followers. The following adjustments to a standard blodeuwedd represent a young blodeuwedd queen at CR 8. More powerful varieties typically add class levels in druid or sorcerer, both of which are considered favored classes for a blodeuwedd queens. • 9 Hit Dice • +2 natural armor • +4 Strength, +6 Constitution, +6 Charisma • Additional Spell-Like Abilities (Sp): Always active-endure elements, nondetection; At will- create water, detect animals or plants; 3/day-command plants, move earth, summon nature's ally IV; 1/ day-fire seeds, plant shape II. These spelllike abilities and all others function at CL 11th.",
    organization: "solitary, pair, or gathering (3-8)",
    languages: "Aklo, Common, Sylvan",
    spellLikeAbilities: [
      {
        name: "speak with plants",
        casterLevel: 7,
        timesPerDay: -1
      },
      {
        name: "dancing lights",
        casterLevel: 7,
        timesPerDay: -1
      },
      {
        name: "entangle",
        casterLevel: 7,
        timesPerDay: -1
      },
      {
        name: "plant growth",
        casterLevel: 7,
        timesPerDay: -1
      },
      {
        name: "whispering wind",
        casterLevel: 7,
        timesPerDay: -1
      },
      {
        name: "deep slumber",
        casterLevel: 7,
        timesPerDay: 3
      },
      {
        name: "modify memory",
        casterLevel: 7,
        timesPerDay: 3
      },
      {
        name: "spike growth",
        casterLevel: 7,
        timesPerDay: 3
      },
      {
        name: "goodberry",
        casterLevel: 7,
        timesPerDay: 1
      },
      {
        name: "hallucinatory terrain",
        casterLevel: 7,
        timesPerDay: 1
      },
      {
        name: "geas, lesser",
        casterLevel: 7,
        timesPerDay: 1
      }
    ],
    skills: {
      Diplomacy: {
        ranks: 7
      },
      "Escape Artist": {
        ranks: 2
      },
      "Handle Animal": {
        ranks: 5
      },
      Heal: {
        ranks: 6
      },
      "Knowledge (nature)": {
        ranks: 7
      },
      Perception: {
        ranks: 5
      },
      Perform0: {
        subSkill: "wind",
        ranks: 5
      },
      "Sense Motive": {
        ranks: 5
      },
      Stealth: {
        ranks: 3,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Survival: {
        ranks: 7
      }
    },
    special: {
      "change shape": {
        type: "Su",
        text: "A blodeuwedd can assume a single unique humanoid shape or the form of a prairie owl once per day for up to 7 hours as if using the spell polymorph. These hours do not need to be consecutive and a blodeuwedd can return to her normal shape as a free action. Nature's Infusion (Su) Once per day, while surrounded by any field or fertile plain, a blodeuwedd may infuse herself with borrowed life energy from nearby plants and nutrients in the ground. This ability functions exactly like false life (CL 7th) but lasts only 1 hour."
      },
      "verdant step": {
        type: "Su",
        text: "Every stride taken by a blodeuwedd causes small plants, grasses, and wildflowers to sprout from the ground, though she can suppress this effect if she desires. While within a plain of tall grass, brush, or similar undergrowth, a blodeuwedd may also step through such plant-life and emerge at any other point within the same field (potentially miles away). This ability functions similar to transport via plants, but a blodeuwedd can only transport herself and does not require a plant equal to her size. This ability is usable three times per day. Wild Empathy (Ex) This works like the druid's wild empathy class feature, except a blodeuwedd has a +6 racial bonus on the check. A blodeuwedd with druid levels adds this racial modifier to her wild empathy checks."
      },
      "wild empathy": {
        type: "Ex",
        text: "This works like the druid's wild empathy class feature, except a blodeuwedd has a +6 racial bonus on the check. A blodeuwedd with druid levels adds this racial modifier to her wild empathy checks.",
        preText: "+10"
      },
      "allergen aura": {
        type: "Ex",
        text: "A blodeuwedd exudes an aura of pollen and other irritating allergens that forces living creatures within 30 feet to make a DC 18 Fortitude save or become sickened, coughing and sneezing for 1d6 rounds. Creatures who successfully save cannot be affected by the same blodeuwedd's aura for 24 hours. A blodeuwedd can suppress this aura at will as a free action. The save DC is Constitution-based.",
        preText: "DC 16, 1d6 rounds"
      }
    }
  },

  Clawbat: {
    source: "The Varnhold Vanishing",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Small",
    hd: 2,
    hdVal: 10,
    cr: 1,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Blood Scent"
    ],
    speed: {
      base: 10,
      maneuverability: "Average",
      fly: 50
    },
    abilities: {
      str: 7,
      dex: 17,
      con: 10,
      int: 2,
      wis: 14,
      cha: 10
    },
    feats: [
      {
        name: "Flyby Attack",
        type: "Monster"
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
        specialAbility: "bleed",
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "temperate hills and ruins",
    visualDescription: "A leathery piece of skin stretched across a frame of joints and bony knobs beats awkwardly through the air. Eyes glare from the folds of its thick wings, writhing tentacles surround its sucker-like maw, and a long, thin tongue darts forth seemingly at random to lash the air around it.",
    description: "Clawbats, or einchadu, as they're known to the tribes of greater Iobaria, haunt the desolate expanses of northeastern Avistan and the rugged lands beyond. Swarming forth from their shadowy dens to hunt by night, these strange predators thirst for blood, scavenging from the victims of greater nocturnal hunters and stalking those foolish enough not to fear dangers in the dark. Drawn by the scent of spilled blood, clawbats fearlessly follow deadly beasts, and more than one traveler has narrowly escaped a predator's nearly lethal ambush only to find his luck change as a swarm of wings and eyes descend upon him. The span of an average clawbat's dual pairs of wings stretches 3 feet wide, lifting aloft rubbery bodies weighing 2 to 4 pounds. Tales of more monstrous clawbats, with wings that blot out the stars as they swoop away with children and small animals, also pass through the civilized lands of Iobaria. Such overgrown clawbats might be constructed by making use of the giant creature simple template. Ecology Clawbats are scavengers and opportunistic hunters. They rarely attack creatures larger than rodents or birds unless the creatures-or those traveling with them-have been weakened by a stronger attacker. Even the presence of such a hunter is not enough to deter an ever-hungry clawbat, which is drawn to attack bloodied creatures in the thick of battle. Clawbats are poor fighters; they prefer to fly past victims, strike quickly to draw blood, and then make pass after pass, aggravating their victims' existing wounds with their ribbon-like tongues. This tactic rarely wins the scavengers more than a drop or two of nourishment per attack, driving them to harass a victim until it drops. When the wounds of clawbats' prey prove too insignificant to fell it, clawbats attack more directly, circling to peel away strip after strip of flesh in wet grabs of their tentacular maws. After their prey has fallen to the pain of a dozen such wounds, clawbats land and vigorously lap up their meal until their bellies are bloated with gore. Aiding clawbats in their hunts is their acrid saliva, a stinging milky-white fluid that possesses an anticoagulant quality, causing their bites to leave messy wounds that bleed until treated. This effect allows clawbats to surprise attack most Small creatures and wait safely out of reach until the prey collapses. Healthy larger prey can typically withstand the assault of a lone clawbat, but a whole clutch of the creatures might easily throw even a sturdy beast into panicked, bleeding terror. The freedom with which clawbat wounds bleed also serves to attract other clawbats in the vicinity, and a few scratches might potentially bring an entire clutch down upon even a slightly wounded creature. Clawbat eyes are exceedingly abnormal, being nearly flat, yet still functional. As the creatures' eyes are set upon their wings, the constant flapping gives the clawbats a constantly shifting view of the area around them, but particularly the land below-an experience which would seem terribly jarring to any creature not used to the experience. The eyes are one-sided, occupying only the inner part of their thick, fleshy wings, and are lidless, being constantly watered by ducts surrounding each eye. The profuse watering of these organs causes clawbats to fling a fine spray as they move, which often serves as a victim's first warning of impending danger. Other flying creatures, such as hawks, eagles, and owls, make up the clawbats' natural predators. The sounds of these raptors can dissuade clawbats from attacking, even in the midst of a feeding frenzy, and will send them winging straight for their roost to avoid attack. Giant centipedes occasionally invade clawbat lairs, crawling up the wall or waiting for their prey at the exit. Clawbats have little natural defense against creatures with thick exoskeletons and avoid them when it is possible to attack an easier source of food. Clawbats can live up to 20 years, though most die earlier due to predation, accidents, or infighting. Habitat & Society Clawbats are found far from heavily civilized lands, though whether this is due to civilized efforts to stamp them out or because they prefer distant, half-wild places is open to debate. They live in clutches of up to 15 members, favoring dark places that offer easy aerial access to the outside world. Each of these places must have a roost that allows the creatures to drop the 15 feet necessary to begin flying; if a stationary clawbat attempts to start flying without sufficient drop, it glides to the ground and must mount to a higher point before it can launch again. This makes them skittish in claustrophobic spaces, for they do not like to be at a disadvantage, and this in turn leads them to infest places such as ruined structures, large, open caves, and fissures. New clutches of clawbats contain 4 to 6 young members, which depart a clutch once it has grown to exceed 15 members. The young fly 10 to 15 miles away, searching for a suitable structure or crag to shield them during the day. Once a group of clawbats leaves its original home, the members feel no loyalty to their former family and compete fiercely for resources. On numerous occasions, mages, druids, and barbarians shamans have attempted to capture and train clawbats. While the creatures' awkwardness once they are brought to ground makes them relatively easy to capture-though frustratingly difficult to restrain given their flexibility and many squirming limbs- no documented attempt to train the beasts has ever succeeded. Even efforts paired with steady diets of blood typically end in the clawbat attacking its keeper just as often as availing themselves of the easier food source. This, and their regular attempts to feed even when critically wounded, have won the creatures a reputation for being dumbly vicious, a reputation that leads most thinking creatures to curse and move quickly to exterminate any clawbats that appear in their lands.",
    organization: "solitary, pair, or clutch (3-16)",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 0
      },
      Stealth: {
        ranks: 2
      }
    },
    special: {
      bleed: {
        universalMonsterAbility: "Bleed",
        damage: 1
      },
      distraction: {
        type: "Ex",
        text: "A clawbat's lengthy tongue whips around its body as it feeds, lapping up the blood from wounded creatures nearby. Every round a clawbat may choose either a creature it attacks or any creature it passes adjacent to as it moves. If the target is at less than full hit points, it must make a DC 11 Fortitude save or be nauseated for 1 round. The save DC is Constitution-based.",
        preText: "DC 11"
      }
    }
  },

  Stygira: {
    source: "The Varnhold Vanishing",
    creatureType: "monstrous humanoid",
    subTypes: [],
    alignments: [
      "Lawful Evil"
    ],
    size: "Medium",
    hd: 8,
    hdVal: 10,
    cr: 7,
    racialFeatures: [
      {
        name: "Blindsight 30 ft.",
        note: "120 ft. with gem eye"
      },
      "Scent",
      {
        name: "True Seeing",
        note: "with gem eye"
      }
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 17,
      dex: 16,
      con: 18,
      int: 17,
      wis: 22,
      cha: 15
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Blind-Fight",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Iron Will",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Claw",
        name: "2 Claws",
        specialAbility: "stone curse",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to gaze attacks, paralysis, petrification"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "adamantine"
      },
      SR: {
        value: 18
      },
      naturalArmor: 6
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "temperate hills and underground",
    visualDescription: "Gaunt and parched, this crone-like figure moves with the predatory jerkiness of a hunting vulture. Unnaturally tall and lean, her form is all cracked flesh and stony crevices spanning a wasteland of withered gray flesh. Shattered black teeth jut from a chapped, lipless mouth that stretches beneath a high, scarred brow devoid of nose or eyes.",
    description: "Withered hermits wrapped in tattered black rags, these scarred, eyeless crones slip through the dark crevasses of both earth and time. Degenerate inheritors of the half-remembered, collapsed cyclops civilizations, the stygiras-or stone witches, as they are often called- command strange secrets of the earth and interpret the fateful energies of the depths. Ages of communion with the darkness and reliance upon alien magics have corrupted the stygiras from the primitive human witches their ancestors were countless ages ago, transforming them into a terrifying, debased breed infused with magics not their own. In many a savage land, these crones were once or are still worshiped as seers and demigods, weaving magic and communing with the earth to manipulate their servants into obeying their selfish and grotesque whims. In other realms, they haunt the night, prowling from their caves to feed upon the unwary or make alliances with those cruel and ambitious enough to believe their perverse counsel. Yet for all their perverse blasphemies and primitive desires, their powers to see what none should and reduce life to brittle stone proves enough to inspire dread and superstitious belief in nearly all who hear of the harsh stone witches. Stygiras on average stand 6-1/2 feet tall and weigh approximately 150 pounds. Ecology It is said that the stygiras draw their power from stone and from the darkness. Certainly they live their entire lives in the dark, traveling through intricate, maze-like caverns and the moonless sky with equal ease. They draw their sustenance from the base things they scrape from the earth-vermin, molds, lichens, and whatever fleshy things happen into their lairs. Although technically blind, stygiras have almost supernaturally keen hearing, taste, and touch, and so have no need for sight. What remains of the eyes that lurk as vestigial elements of their anatomy hide beneath the scarred flesh of their faces. While such remnant organs typically go unused, they can still detect the presence of light, an uncomfortable sensation that all stygiras take great pains to avoid. Stygiras can in fact travel under the skies, but they quickly become agoraphobic and retreat to the safety of shadowy canyons or caves as soon as possible. They avoid the sunlight hours, with most willing to face death in the darkness rather than take their chances venturing into the light. All stygiras are female; they are capable of reproducing with humanoids of nearly any species and always bearing three or more withered-and typically stillborn-stygira young. Yet stygiras make up for their appallingly low live birth and survival rates with unnaturally long lifespans. None can say how long stygiras who don't meet their end by violence might live, but instances of stone witches living for 3 or more centuries are well documented. Habitat & Society Stygiras most commonly occupy lands near the phenomenally ancient tombs and monuments of the cyclops empires. While some of the crazed witches make the impossible claim that all stygira are the surviving mortal apprentices of primordial cyclops seers, saner minds posit that the predecessors of these crones were primitive human shamans and mystics who managed to tap into a degree of the fallen empires' powers. Whatever the case, the connection between stygiras and the ancient cyclopes lingers in their shared language and the mad scrawls covering many of these hags' lairs.",
    organization: "solitary, pair, or mystery (3-7)",
    languages: "Cyclops, Giant, Terran",
    spellLikeAbilities: [],
    skills: {
      Bluff: {
        ranks: 8
      },
      "Knowledge (arcana)": {
        ranks: 8
      },
      "Knowledge (dungeoneering)": {
        ranks: 8
      },
      "Knowledge (religion)": {
        ranks: 8
      },
      Perception: {
        ranks: 8,
        bonuses: [
          {
            source: "inherent",
            value: 4,
            situational: true,
            note: "with gemstone"
          }
        ]
      },
      "Sense Motive": {
        ranks: 8
      },
      Spellcraft: {
        ranks: 8
      }
    },
    special: {
      "gem gaze": {
        type: "Su",
        text: "Shaken for 1d4 rounds, 30 feet, Fortitude DC 16 negates. The save DC is Charisma-based. A stygira can only make use of this ability while holding a gemstone. Light Blindness Despite their effective blindness, stygiras remain sensitive to light. Abrupt exposure to bright light blinds stygiras for 1 round; on subsequent rounds, they are dazzled as long as they remain in the affected area."
      },
      "stone curse": {
        type: "Su",
        text: "Any creature struck by a stygira's claws must make a DC 18 Will save or be affected by a curse that gradually drains it of color, stiffens its joints, and finally turns the victim to stone. This curse proves frighteningly unpredictable, forcing another save against its effects every 1d3 hours. Any creature that is drained to 0 Dexterity or fails three saves against the curse is permanently petrified. Even if a creature is petrified and then restored to flesh, it is still affected by the curse and is petrified again upon failing its next save against the curse. A stone curse can only be removed in one of two ways: by casting remove curse or by spending a full hour in unobstructed natural sunlight. Magical radiance like daylight does not affect a stone curse, and remove curse does not return a petrified creature to flesh. The save DC is Constitution-based. Stone curse: Claw-curse; save Will DC 18; frequency 1/1d3 hours; effect 1d6 Dex damage, failing 3 saves results in petrification; cure casting remove curse or spending 1 hour in natural sunlight"
      },
      "gem eye": {
        type: "Su",
        text: "Stygiras possess a special connection with gemstones. While holding or otherwise in contact with a gemstone of at least the size of a human eye, a stygira can see through the gemstone like a magical eye, viewing her surroundings as if her Blindsense extended to 120 feet and she were under the effects of true seeing, which grants her a +4 bonus on Perception checks."
      }
    },
    resistances: [
      "light blindness"
    ]
  },

};
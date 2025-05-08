
export const Shadow_Of_The_Storm_TyrantCreatures = {
  Abysogh: {
    source: "Shadow Of The Storm Tyrant",
    creatureType: "humanoid",
    subTypes: [
      "giant"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Gargantuan",
    hd: 19,
    hdVal: 8,
    cr: 15,
    racialFeatures: [
      "Blindsight 120 ft."
    ],
    speed: {
      base: 50,
      climb: 50
    },
    abilities: {
      str: 45,
      dex: 18,
      con: 22,
      int: 6,
      wis: 15,
      cha: 7
    },
    feats: [
      {
        name: "Awesome Blow",
        type: "Combat"
      },
      {
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Improved Bull Rush",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Slam",
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
        name: "Throw Anything",
        type: "Combat"
      },
      {
        name: "Toughness",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Slam",
        name: "2 Slams",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to gaze attacks, mind-affecting effects, sonic, visual effects"
    ],
    defense: {
      naturalArmor: 19
    },
    space: "20 ft.",
    reach: "20 ft.",
    environment: "any mountains",
    visualDescription: "The footsteps of this pale titan cause the very earth to shudder. Each muscle in its body is pulled taut as if in perpetual convulsion.",
    description: "Rather than collecting rocks like ordinary giants, abysoghs enjoy collecting living creatures, and love nothing more than flinging a screaming human or horse at enemies. Legends tell of a small cult of foolish storm giants who dug around the Pit of Gormuz in a misguided attempt to free lost Ranginori, and struck a flow of horrific blood from Rovagug or one of his spawn. Contaminated by the blood, the cultists emerged as horribly mutated creatures of hate and destruction. Nearly unstoppable in their mindless rage, they now live only to slaughter and destroy. An abysogh stands at least 40 feet tall and weighs approximately 70 tons. Ecology Though abysoghs are giants, their mutations have warped them into bigger, stronger, and more aggressive creatures than others of their kind. Centuries spent sleeping in lightless caverns have turned the giants' skin to a pallid, milky white. Although sunlight does not harm them, they instinctively hate the sun for its connection to Sarenrae. The eyes of an abysogh resemble misshapen pools of liquid. Completely blind to light and colors, their eyes instead perceive motion and shapes through low-frequency vibrations, which cause ripples across the surfaces of their eyes. Only in this sense can they \"see\" the world around them. The blood of these giants is black from the taint of Rovagug. Their bulging veins stretch out in weblike patterns across their pale skin. The cursed blood of the abysoghs also fuels their perpetual, mindless rage, rendering them incapable of being destroyed. Only electricity can momentarily snap them out of their rage and remind them of what they lost so long ago, allowing them to recover enough of their mortality to die. Although abysoghs are far more intelligent than animals, their intellect is purely instinctual. The natural state of mind for these giants is a tempest of constant turmoil, and as such, it is impossible to affect their minds with magic. For all of an abysogh's strength and fury, its body can sustain an active, destructive state for only a few weeks or months at a time. Toward the end of an abysogh's rampage, the giant becomes sluggish and weary, and starts looking for a place to rest. Once it finds a suitable place, it may remain dormant for decades, or even centuries. An abysogh's metabolism slows down considerably during sleep. Although mortal, abysoghs can theoretically live for millennia for this reason. However, because of their violent lives and their lack of society or reproduction, their numbers decrease with every passing century. Habitat & Society The lair of an abysogh is usually a vast cave in a mountainside or at the bottom of a deep, lightless chasm. The lair is bare of all decorations except for countless splintered bones and jagged rocks. Much like Rovagug, abysoghs hate all creatures equally. They sometimes enslave lesser giants, but any such forced alliances are usually short-lived because of the abysoghs' volatile temperaments. They cannot even stand the presence of others of their kind; such an encounter inevitably leads to an earth-shattering showdown between the two titans. This means that abysoghs never mate; all the abysoghs on Golarion today come from the original cult of corrupted storm giants. It is unknown whether the abysogh race is even fecund, and, if so, whether any potential offspring would possess abilities different from their forebears. Because of their unquenchable desire to slaughter and destroy, abysoghs can't coexist peacefully with any creatures save for the smallest and most unremarkable life forms. Tiny and smaller creatures are generally beneath an abysogh's notice and can even live in its lair if they are careful enough to avoid disturbing the giant. Sometimes, people unwittingly settle near a sleeping abysogh's lair and may be completely oblivious to the giant's presence for generations. The only telltale sign of a sleeping abysogh is that the region surrounding its lair is occasionally plagued by tremors caused by the creature's restless slumber. Rumors of a sleeping abysogh may attract followers of Rovagug to seek out its lair in order to awaken the giant. Such rumors may also attract giantslayers and followers of Sarenrae, who wish to thwart the cultists' plans and slay the abysogh before it awakens. When an abysogh awakens, it often attacks any creatures near its lair relentlessly, destroying or eating anything it can and saving only what it can use later to cause more destruction. An abysogh usually keeps a few of its victims for future use, either as ammunition or snacks. For this reason, the thunderous beat of an approaching abysogh's footsteps is often accompanied by the lamentations of the giant's battered victims as they're carried along in its sack.",
    organization: "solitary",
    languages: "Giant",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 0
      },
      Intimidate: {
        ranks: 0
      },
      Perception: {
        ranks: 10
      }
    },
    special: {
      "cataclysmic roar": {
        type: "Ex",
        text: "Once every 1d4 rounds as a standard action, an abysogh can emit a terrible roar in a 60-foot cone. Creatures caught in this cone take 10d6 points of sonic damage and are deafened and staggered for 1d6 rounds. A successful DC 25 Fortitude save halves the damage and negates both conditions. This is a sonic effect. The save DC is Constitution-based.",
        preText: "10d6 sonic plus deafen and stagger, DC 25"
      },
      "living ammunition": {
        type: "Ex",
        text: "When an abysogh succeeds at a combat maneuver check to initiate or maintain a grapple against a creature two or more size categories smaller than itself, it can hurl the creature anywhere within 60 feet as a free action, though if it does so after maintaining a grapple, it can't perform any of the actions that can normally be taken as part of maintaining a grapple. Regardless of the trajectory, the hurled creature takes 6d6 points of damage from the collision and falls prone. The creature can attempt a DC 25 Reflex save to halve the damage and avoid falling prone. The save DC is Constitution-based. If the targeted square contains another creature, the abysogh makes a ranged attack against the target. A hurled Large creature deals 4d6 points of damage, a Medium creature deals 3d6 points of damage, and a Small creature deals 2d6 points of damage. The abysogh adds 1-1/2 its Strength bonus to this damage. Tiny or smaller creatures don't deal damage to the target. Whether the attack hits or not, the hurled creature lands in an empty space of the abysogh's choice adjacent to the target.",
        preText: "60 ft."
      },
      "whirlwind strike": {
        type: "Ex",
        text: "An abysogh can send multiple opponents flying through the air with its sweeping slams. When an abysogh uses the full-attack action, instead of making its normal attacks, it can perform one awesome blow combat maneuver at its highest base attack bonus against each opponent within its reach. It must attempt a separate combat maneuver check against each opponent. When using this ability, the abysogh forfeits any bonuses and extra attacks granted by feats, spells, or abilities."
      },
      "trembling earth": {
        type: "Ex",
        text: "When an abysogh moves more than 5 feet in a round, its footsteps send seismic waves rippling across the ground. All creatures at least two size categories smaller than the abysogh that are standing on the ground within 20 feet of the giant at any point during its movement must succeed at a DC 25 Reflex save or fall prone. The save DC is Constitution-based. The vibrations also suppress Tremorsense within the area for 1 round (no save)."
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        damageType: "electricity",
        value: 15
      },
      "freedom of movement": {
        type: "Ex",
        text: "An abysogh is under the constant effect of freedom of movement, as the spell. This effect cannot be dispelled. Living Ammunition (Ex) When an abysogh succeeds at a combat maneuver check to initiate or maintain a grapple against a creature two or more size categories smaller than itself, it can hurl the creature anywhere within 60 feet as a free action, though if it does so after maintaining a grapple, it can't perform any of the actions that can normally be taken as part of maintaining a grapple. Regardless of the trajectory, the hurled creature takes 6d6 points of damage from the collision and falls prone. The creature can attempt a DC 25 Reflex save to halve the damage and avoid falling prone. The save DC is Constitution-based. If the targeted square contains another creature, the abysogh makes a ranged attack against the target. A hurled Large creature deals 4d6 points of damage, a Medium creature deals 3d6 points of damage, and a Small creature deals 2d6 points of damage. The abysogh adds 1-1/2 its Strength bonus to this damage. Tiny or smaller creatures don't deal damage to the target. Whether the attack hits or not, the hurled creature lands in an empty space of the abysogh's choice adjacent to the target."
      }
    },
    resistances: [
      {
        damageType: "cold",
        value: 10
      },
      {
        damageType: "electricity",
        value: 10
      }
    ]
  },

  "Abaddon Gigas": {
    source: "Shadow Of The Storm Tyrant",
    creatureType: "humanoid",
    subTypes: [
      "evil",
      "extraplanar",
      "giant"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Gargantuan",
    hd: 21,
    hdVal: 8,
    cr: 17,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 60
    },
    abilities: {
      str: 42,
      dex: 19,
      con: 25,
      int: 15,
      wis: 22,
      cha: 22
    },
    feats: [
      {
        name: "Awesome Blow",
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
        name: "Greater Overrun",
        type: "Combat"
      },
      {
        name: "Improved Bull Rush",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Overrun",
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
        name: "Stand Still",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Greatsword",
        enchantments: [
          {
            name: "Enhancement Bonus +3",
            source: "inherent"
          },
          {
            name: "Wounding",
            source: "inherent"
          }
        ],
        name: "Greatsword",
        specialAbility: "energy drain",
        damage: "2d6"
      },
      {
        weapon: "Gauntlet",
        enchantments: [
          {
            name: "Enhancement Bonus +5",
            source: "inherent"
          }
        ],
        name: "Gauntlet",
        specialAbility: "energy drain",
        damage: "1d3"
      },
      {
        weapon: "Quarterstaff",
        enchantments: [
          {
            name: "Enhancement Bonus +5",
            source: "inherent"
          },
          {
            name: "Unholy",
            source: "inherent"
          }
        ],
        name: "Quarterstaff",
        specialAbility: "energy drain",
        damage: "1d6/1d6"
      },
      {
        weapon: "Scythe",
        enchantments: [
          {
            name: "Enhancement Bonus +3",
            source: "inherent"
          },
          {
            name: "Keen",
            source: "inherent"
          }
        ],
        name: "Scythe",
        specialAbility: "energy drain/19-20/x4",
        damage: "2d4"
      },
      {
        weapon: "Rock",
        name: "Rock",
        damage: "4d6"
      }
    ],
    immunities: [
      "Immune to acid, death effects"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "good"
      },
      naturalArmor: 13
    },
    space: "20 ft.",
    reach: "20 ft.",
    environment: "any (Abaddon)",
    visualDescription: "This lurching mass of spiked iron armor, rotting translucent flesh, and twisted black thorns resembles a dead giant with the head of an oversized boar.",
    description: "Abaddon gigas are megalithic extraplanar giants that roam Abaddon and embody the same vile energies that permeate that plane. Their cruel forms and unusual powers give them nefarious reputations, and few giant hunters-even among those who traverse the Great Beyond-would willingly seek out one of these monstrosities. An Abaddon gigas stands over 50 feet tall and weighs 30 tons, not including the weight of its enormous armor. Ecology The first known record of an Abaddon gigas dates back to Lamashtu's first struggles with the daemon race, when the Demon Queen captured and murdered two of the Four Horsemen. The putrid remains of the slain Horsemen oozed toward Abaddon's heart, where they merged with the body of a captured Thanatotic titan (and perhaps some of the energy of the fabled Oinodaemon) to create the first gigas on that plane. A hideous and gigantic being of size beyond reason and composed of some of the multiverse's most powerful souls, this mythic gigas soon tore itself into pieces while struggling against its uncompromising quaternary nature. In doing so, this first behemoth created countless \"children,\" the beings known in present times as Abaddon gigas. Abaddon gigas are asexual and incapable of reproducing; the Abaddon gigas in existence are all there ever will be. This fact is a small comfort, though, considering the terrible might of even a single Abaddon gigas. Worse still, whispered rumors among planar scholars say that, when an Abaddon gigas is slain, its power crawls back toward the heart of Abaddon, where the original mythic Abaddon gigas will one day reform once all its offspring have perished. Habitat & Society While some Abaddon gigas serve the Four Horsemen- sensing in these demigods some missing piece of their original selves lost long ago-most instead wander the decrepit wastes of Abaddon in a never-ending search for something they cannot define. The daemons and divs believe that Abaddon gigas roam in search of souls to sate their enormous hunger for life. The rare interplanar scholars who travel to Abaddon claim that the gigas carry out nefarious deeds for fell beings such as olethrodaemons or akvans. Only Charon, the eldest of the current Four Horsemen, knows the true source of the Abaddon gigas' wanderlust: they yearn for the Oinodaemon. The Boatman keeps this secret to himself, and keeps a distant watch over the gigas of Abaddon, though it is unclear whether his surveillance is out of curiosity or some ulterior motive. Known Gigas of Abaddon While all Abaddon gigas share a special level of infamy, several of these beings have gained reputations (and unusual powers) that extend beyond the fell lore surrounding their kind. Below are descriptions of two such legendary gigas. Goros: Thought to be a twisted creation of Trelmarixian the Black, the gigas called Goros possesses even less control over its mental faculties than most Abaddon gigas. The monster resembles a towering naked man with dark red skin the texture of granite. The right half of its body has been mutilated beyond comprehension, revealing a mess of blue veins that intermingle with oozing alien organs and pulsing black guts. Goros wears no armor (reducing its AC to 22 and its flat-footed AC to 19), and flies into a rage if reduced to half its hit points. While in a rage, Goros gains all the same benefits and penalties as a raging 20th-level barbarian (gaining a +8 morale bonus to Strength and Constitution, a -2 penalty to AC, and a +4 morale bonus on Will saves), though the gigas doesn't gain any rage powers. Mephengitan: Mephengitan the Arch-Giant dwells among the icy wastes of Hoarspan, a borderland of polluted arctic waters and vicious icebergs where the fetid swamps of Plaguemere meet with Charon's Drowning Court. The gigas's eyes are the color of a clear winter sky, and on its frosty breath one can hear the whispers of a thousand souls whose lives were claimed by the Arch-Giant. Mephengitan emits a 30-foot-radius aura of frigid cold. Any living creature that begins its turn in this area must succeed at a DC 26 Fortitude save or take 4d6 points of cold damage as its core body temperature plummets and its blood begins to freeze. Creatures that don't need water to live are immune to this effect. Creatures with the water subtype take twice as much as damage.",
    organization: "solitary",
    languages: "Abyssal, Giant, Infernal",
    spellLikeAbilities: [
      {
        name: "fear",
        casterLevel: 17,
        timesPerDay: -1
      },
      {
        name: "chain lightning",
        casterLevel: 17,
        timesPerDay: 3
      },
      {
        name: "cone of cold",
        casterLevel: 17,
        timesPerDay: 3
      },
      {
        name: "dimensional anchor",
        casterLevel: 17,
        timesPerDay: 3
      },
      {
        name: "flame strike",
        casterLevel: 17,
        timesPerDay: 3
      },
      {
        name: "dispel magic, greater",
        casterLevel: 17,
        timesPerDay: 3
      },
      {
        name: "horrid wilting",
        casterLevel: 17,
        timesPerDay: 3
      },
      {
        name: "unholy blight",
        casterLevel: 17,
        timesPerDay: 3
      },
      {
        name: "destruction",
        casterLevel: 17,
        timesPerDay: 1
      },
      {
        name: "energy drain",
        casterLevel: 17,
        timesPerDay: 1
      }
    ],
    skills: {
      Climb: {
        ranks: 18
      },
      Intimidate: {
        ranks: 24
      },
      "Knowledge (planes)": {
        ranks: 10
      },
      Perception: {
        ranks: 24
      },
      "Sense Motive": {
        ranks: 11
      }
    },
    special: {
      "devour souls": {
        type: "Su",
        text: "As a standard action once every 1d4 rounds, an Abaddon gigas can drain the souls from all living creatures within 60 feet that are not native to Abaddon. Such creatures must succeed at a DC 26 Fortitude save or gain 1d4 negative levels. If even one creature is affected, the Abaddon gigas gains fast healing 15 for 15 rounds. If a creature dies from an Abaddon gigas's energy drain special attack, energy drain spell, or devour souls attack, the Abaddon gigas devours that creature's soul, gaining the benefits of death knell at a caster level equal to the dead creature's HD. Such a creature cannot be raised or resurrected by any means until the Abaddon gigas is slain. The save DC is Charisma-based."
      },
      "energy drain": {
        universalMonsterAbility: "Energy Drain",
        levels: 1
      },
      "rock throwing": {
        universalMonsterAbility: "Rock Throwing",
        type: "Ex",
        range: "160 ft."
      },
      "vile weapon": {
        type: "Su",
        text: "As a swift action, an Abaddon gigas can transform its weapon into a +3 wounding adamantine greatsword, a +5 nullifying adamantine spiked gauntlet, a +5 unholy adamantine quarterstaff, a +3 cruel keen scythe, or a +3 weapon of any other kind."
      },
      "planar empowerment": {
        type: "Su",
        text: "While on the plane of Abaddon, an Abaddon gigas can cast each of the following as a spell-like ability once per day: blasphemy (DC 28), earthquake (DC 29), and unholy aura (DC 29) . If the gigas ventures onto another plane, it can't use these abilities (though its other spell-like abilities remain available). The save DCs for these spell-like abilities are Charisma-based and include a +5 racial bonus."
      },
      "rock catching": {
        universalMonsterAbility: "Rock Catching"
      }
    },
    resistances: [
      {
        damageType: "cold",
        value: 10
      },
      {
        damageType: "electricity",
        value: 10
      },
      {
        damageType: "fire",
        value: 10
      },
      {
        damageType: "sonic",
        value: 10
      }
    ]
  },

  Nixudaemon: {
    source: "Shadow Of The Storm Tyrant",
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
    hd: 10,
    hdVal: 10,
    cr: 7,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 17,
      dex: 13,
      con: 19,
      int: 14,
      wis: 14,
      cha: 16
    },
    feats: [
      {
        name: "Combat Expertise",
        type: "Combat"
      },
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Improved Disarm",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Trip",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Slam",
        name: "2 Slams",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Whip",
        enchantments: [
          {
            name: "Enhancement Bonus +1",
            source: "inherent"
          },
          {
            name: "Vicious",
            source: "inherent"
          }
        ],
        name: "2 Whip",
        specialAbility: "grab",
        damage: "1d3"
      }
    ],
    immunities: [
      "Immune to daze, exhaustion, fatigue, nonlethal damage, paralysis, sleep, stun"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "good or silver"
      },
      SR: {
        value: 18
      },
      naturalArmor: 10
    },
    space: "10 ft.",
    reach: "10 ft. (20 ft. with whip arms)",
    environment: "any (Abaddon)",
    visualDescription: "This four-armed fiend has blue-green skin covered in white scars. Its two upper arms end in long, barbed whips of calloused flesh.",
    description: "Nixudaemons, or \"toil daemons,\" epitomize death by exploitation and extreme exertion. These fiends savor the moment when a desperate scholar collapses while putting in long, unappreciated hours, or when a galley slave finally succumbs to the lash. They drive burdened subjects before them to great effect, even resurrecting fallen servants for a brief time to complete vital tasks. Their skill for squeezing the last bit of energy from those under their supervision makes them invaluable to slavers, who pay the daemons in coin, information, and souls for their aid. Nixudaemons exemplify the cruelty and disdain all daemonkind display toward the living. They lash out at their subjects, whipping the life out of them slowly. If it serves the daemon's purposes, or if time allows for another game of torture, a nixudaemon will revive its subject for another day. Typically, a nixudaemon uses this ability to incite a band of slaves to work harder; it dominates the weakest members of the workers to temporarily bolster them, then saps their last ounce of strength before discarding them as spent husks. Most nixudaemons stand 10 feet tall and weigh 600 pounds. Sages report that the fiends grow larger and stronger as they age, absorbing the weariness of their victims over centuries. The greatest toil daemons are said to tower over their younger cousins, growing additional whip-arms and learning powerful spells that exhaust or even kill those who dare offend them. Ecology Nixudaemons roam the shores of the Styx. The daemons use their impressive reach to press new souls into service as soon as the doomed arrive on Abaddon, throwing the ill-fated souls into enormous slave pens and hauling them to the realms of wealthy customers. Nixudaemons frequently visit the Material Plane, where greedy despots and desperate commandants pay high prices to the daemons in exchange for providing additional labor. Rituals designed to call nixudaemons must be conducted while an intelligent, mortal creature labors physically, and the daemon's preferred sacrifice is working that creature to death as part of the ritual. One ancient story alleges that a mighty hero among an oppressed people worked for weeks, dragging great stone blocks to build a grand ziggurat. When he finally fell, the story claims, his death summoned a nixudaemon over 30 feet tall that lashed out with a dozen whips. Nixudaemons despise laziness in both mortals and outsiders. They work their subjects past the point of exhaustion or death as suits their current needs. The nixudaemons view other creatures as weak or prone to sloth, challenging even other daemons they perceive as less than diligent. Habitat & Society Nixudaemons occupy the role of merchants in daemonic society. They buy and sell the hunted, as Abaddon petitioners are known, when not outright capturing or stealing them. Powerful mortal slavers sometimes increase the value of their wares by hiring a summoned nixudaemon to drive slaves to maximum efficiency, but such arrangements still benefit Abaddon in the end. While summoned to the material world, nixudaemons obtain multiple forms of currency for the Four Horsemen's coffers. They engage in a dark form of proselytization, beating those who grow weary in their work and spreading the belief among the oppressed that there is no hope of recognition or rest. More discerning nixudaemons assail the mortal merchant classes, driving entire firms to adopt competitive climates until the stress of achievement reveals itself in the form of failing health, or pushing lone inventors to complete magical theories with their dying breaths. Because soft, wealthy mortals rarely succumb to the temptation to work themselves to death, some nixudaemons have been known to engineer the sale of wealthy scions into slavery, as their nightly sobbing and rapidly developing sores are music to the toil daemons' ears. Nixudaemons understand the value of teamwork and work tirelessly together to great effect. In service to mortals and greater daemons, they have driven hordes of slaves to erect legendary monuments. They revel in the misery they cause, and the crack of their whips against backs and around necks. While their industrious natures and affinities for mortal business make them useful to each of the Four Horsemen, most of nixudaemons serve Szuriel, Trelmarixian, and the daemonic harbingers that scheme below them. The Horseman of War uses them as morale officers-a most effective paradox during the heat of battle. She also maintains special units of indentured prisoners under nixudaemon care, always breaking her promise to send her weary combatants home after a costly battle. The Horseman of Famine offers mere crumbs for sustenance to his legions of soldiers and slaves. He takes delight in using pet nixudaemons to drive his legions past their limits, accelerating their spiritual and physical starvation.",
    organization: "solitary, pair, or corps (3-5)",
    languages: "Abyssal, Common, Draconic, Infernal; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "deathwatch",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "teleport, greater",
        casterLevel: 10,
        limitations: "self plus 50 lbs. only",
        timesPerDay: -1
      },
      {
        name: "heroism",
        casterLevel: 10,
        timesPerDay: 3
      },
      {
        name: "waves of fatigue",
        casterLevel: 10,
        timesPerDay: 3
      },
      {
        name: "temporary resurrection",
        casterLevel: 10,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 7
      },
      Bluff: {
        ranks: 10
      },
      Diplomacy: {
        ranks: 11
      },
      Heal: {
        ranks: 11
      },
      Intimidate: {
        ranks: 13
      },
      "Knowledge (planes)": {
        ranks: 6
      },
      Perception: {
        ranks: 10
      },
      "Sense Motive": {
        ranks: 10
      },
      Stealth: {
        ranks: 10
      }
    },
    special: {
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "1d8+4"
      },
      "damning scourge": {
        type: "Su",
        text: "Each of a nixudaemon's upper arms functions as a Large +1 deadly merciful vicious whip. Attacks with these whips count as natural attacks for the nixudaemon, have a reach of 20 feet, and don't provoke attacks of opportunity. The whips can't be disarmed or sundered, nor can they be dropped to allow the nixudaemon to avoid being tripped because of failing a combat maneuver check to trip. The nixudaemon decides before each attack roll whether to apply the weapon's merciful special ability, its vicious special ability, both, or neither."
      },
      "dead tired": {
        type: "Su",
        text: "A nixudaemon's attacks drain every bit of vitality from its victims when they die. Raising a creature killed by a nixudaemon (via raise dead or another effect that restores life) requires a successful DC 20 caster level check. The restored creature gains the exhausted condition, regardless of the spell used to raise it. The DC of this caster level check is Charisma-based, and includes a +2 racial bonus. A nixudaemon can use its temporary resurrection spell-like ability without attempting this check, even if another nixudaemon killed the subject. Enslave (Su) If a nixudaemon successfully uses its grab ability to grapple a foe with its whip attack, its tendril wraps around the victim's throat. The daemon can forgo its constrict damage and instead attempt to dominate the subject, as the spell dominate monster (Will DC 18 negates). A creature dominated by a nixudaemon is immune to fatigue, exhaustion, and pain effects. At the beginning of its turn, a dominated slave automatically receives a new saving throw to end the effect. The nixudaemon can dominate only one creature at a time per whip arm it possesses (typically two). The save DC for this ability is Charisma-based."
      },
      enslave: {
        type: "Su",
        text: "If a nixudaemon successfully uses its grab ability to grapple a foe with its whip attack, its tendril wraps around the victim's throat. The daemon can forgo its constrict damage and instead attempt to dominate the subject, as the spell dominate monster (Will DC 18 negates). A creature dominated by a nixudaemon is immune to fatigue, exhaustion, and pain effects. At the beginning of its turn, a dominated slave automatically receives a new saving throw to end the effect. The nixudaemon can dominate only one creature at a time per whip arm it possesses (typically two). The save DC for this ability is Charisma-based.",
        preText: "DC 18"
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        value: null
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  "Storm Aurochs": {
    source: "Shadow Of The Storm Tyrant",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Huge",
    hd: 12,
    hdVal: 10,
    cr: 9,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 50
    },
    abilities: {
      str: 31,
      dex: 15,
      con: 20,
      int: 3,
      wis: 22,
      cha: 8
    },
    feats: [
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Endurance",
        type: "General"
      },
      {
        name: "Improved Bull Rush",
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
        name: "Wind Stance",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Gore",
        name: "Gore",
        damage: "1d6",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to electricity, sonic"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "magic"
      },
      SR: {
        value: 20
      },
      naturalArmor: 12
    },
    space: "15 ft.",
    reach: "15 ft.",
    environment: "any sky",
    visualDescription: "Lighting crackles in the eyes of this enormous bull, whose body seems composed of dark storm clouds.",
    description: "Stampeding across the sky in booming herds, storm aurochs resemble nothing so much as vast and powerful thunderstorms bearing down across Golarion. Storm and cloud giants value these magnificent beasts not only for their meat and hides, but also as symbols of mystic power and divine strength. Though ostensibly domesticated centuries ago by storm giants, storm aurochs remain among the most fearsome and dangerous of the creatures that pass through Golarion's skies. A storm aurochs is roughly twice the size of a normal aurochs, growing up to 20 feet long and standing 15 feet tall at the shoulder. Storm aurochs weigh on average anywhere from 5 to 7 tons, with females being noticeably smaller and slimmer than males. Both males and females bear prodigious horns atop their heads that crackle with electrical energy, though the female's horns are slightly smaller. Ecology Storm aurochs behave much as their more mundane cousins do. They are gregarious, herbivorous creatures that travel in herds of up to several dozen extended family members. These untamed herds are nomadic, and their migratory patterns mirror Golarion's natural weather patterns. Herds are fiercely territorial, with weather fronts forming the natural boundary between two herds' territories. Territorial disputes are common, though rarely lethal, and are often accompanied by terrific natural and magical storms. In addition to more traditional fodder, storm aurochs also graze on clouds. It is unclear whether or not this provides them any real nourishment, and it may be that they do so purely out of enjoyment. This can be a blessing and a curse for areas frequented by herds of storm aurochs; these areas soon become cloudless and sunny. Overgrazing can prevent much needed rain from reaching the ground, eventually leading to periods of drought and famine for those living nearby. For this reason, farmers often see herds of storm aurochs as pests. Aside from the dangers inherent in facing a storm aurochs, slaying one often comes with the added danger of drawing the ire of its storm giant owner, and so most communities prefer to relocate an aurochs herd as gently as possible, or perhaps even negotiate with the owner, rather than trying to slay the aurochs. Domesticated storm aurochs tolerate the presence and activities of storm or cloud giants with little hostility. This doesn't always hold for other races, and how a storm aurochs reacts to the presence of an adventuring party often depends on the temperament of the individual aurochs and the circumstances of the meeting. Storm aurochs are canny enough to recognize weapons, however, and usually respond to the approach of armed individuals of any species with extreme aggression. Habitat & Society Storm aurochs are most commonly found in the possession of storm giants, where the animals spend their days grazing on the giants' expansive coastal estates. Storm giants keep aurochs for their meat, their hides, and their ability to influence the weather. The giants rarely use the creatures as beasts of burden, as unlike normal domesticated cattle or oxen, storm aurochs do not tolerate being placed in a yoke. A storm giant can use this fact to test the strength or patience of members of lesser races who come seeking the giant's aid. The giant first requires the petitioner to harness the giant's bull and plow his field. If the appellant accomplishes this task, either through cunning or brute strength, the giant is willing to hear her request. Those who give up the task or harm the aurochs in the effort, are banished from the giant's presence or slain outright. Cloud giants also keep herds of storm aurochs, though less commonly than storm giants. Cloud giants particularly favor the taste of storm aurochs meat, which they serve at feasts and gatherings of great importance, or to honor particularly noteworthy guests. Cloud giants also make use of storm aurochs in one of their more idiosyncratic pastimes; bull-leaping. Young cloud giants, newly come of age, take turns leaping over a charging storm aurochs, sometimes even boosting themselves off the auroch's horns to gain extra height and momentum. Leapers perform feats of acrobatics as they pass over the bull, each seeking to impress her fellows with her daring and prowess. Bull-leaping has fallen out of favor among younger cloud giants, who increasingly turn their attentions toward more philosophical pursuits, but it's still commonly practiced by more traditional, rural cloud giant families. Storm aurochs hold a deep spiritual significance for both storm and cloud giants. Cloud giants believe that the aurochs are gifts from Ioz'om, their version of Gozreh in his sky-father aspect, as a reward for their dutiful worship and piety. Storm giants also connect storm aurochs to Gozreh, through their sky-father incarnation, Hyjarth. Though most believe much as the cloud giants do, a few take their worship of the storm aurochs further. They claim that Hyjarth sacrificed the first storm aurochs to create the world itself, building the land from its bones and filling the seas with its blood. These storm giants gather in mystery cults across Golarion to reenact this ritual sacrifice, slaying a captive storm aurochs in order to honor Hyjarth and ensure that their lands and seas remain fruitful. Skyshaping Stampede When storm aurochs gather in one place, they can have a profound impact on the weather. Such a gathering is known as a skyshaping stampede. Whenever three storm aurochs are within 10 feet of one another, all three of them can work together to use any of the following spell-like abilities: control weather, control winds (DC 16), fog cloud, sirocco (DC 17), or sleet storm. To take part in a skyshaping stampede, all three storm aurochs must take a full-round action to move through the area to be affected, usually by circling the spell's point of origin or tracing the path they desire winds to take. This movement provokes attacks of opportunity as normal. These spell-like abilities function at CL 12th (or at a caster level equal to the Hit Dice of the most powerful aurochs involved). The save DCs are Charisma-based, and function as if the herd has a Charisma score of 12, unless one of the aurochs has a higher Charisma score, in which case the spell-like ability DCs are adjusted by that aurochs's Charisma modifier.",
    organization: "solitary, pair, or herd (3-30)",
    languages: "Auran (can't speak)",
    spellLikeAbilities: [
      {
        name: "air walk",
        casterLevel: 12,
        timesPerDay: -1
      }
    ],
    skills: {
      Perception: {
        ranks: 12
      }
    },
    special: {
      "powerful charge": {
        universalMonsterAbility: "Powerful Charge",
        type: "Ex",
        weaponName: "y"
      },
      stampede: {
        type: "Ex",
        text: "A stampede occurs if three or more storm aurochs make a trample attack while remaining adjacent to each other. While stampeding, storm aurochs can trample foes of their size or smaller, and the trample's save DC increases by 2."
      },
      "storming charge": {
        type: "Su",
        text: "A storm aurochs steps grow thunderous as it charges toward its enemies. A storm aurochs' powerful charge deals an additional 3d6 points of electricity damage, and its trample deals an additional 3d6 points of sonic damage, which are already included in the above statistics. If the storm aurochs is outdoors and in a stormy area-one featuring a rain shower, clouds and wind, hot and cloudy conditions, or even a tornado (including a whirlwind formed by a djinni or an air elemental of at least Large size)-its powerful charge and trample instead deal 3d10 points of electricity or sonic damage respectively, rather than 3d6 points of damage."
      },
      trample: {
        universalMonsterAbility: "Trample",
        damage: "3d8+15 plus 3d6 sonic",
        saveDC: 10
      }
    }
  },

};
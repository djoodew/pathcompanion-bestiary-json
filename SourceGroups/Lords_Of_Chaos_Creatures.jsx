
export const Lords_Of_ChaosCreatures = {
  Vermlek: {
    source: "Lords Of Chaos",
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
    hd: 4,
    hdVal: 10,
    cr: 3,
    racialFeatures: [
      "Blindsense 30 ft.",
      "Darkvision 60 ft.",
      "Scent"
    ],
    speed: {
      base: 30,
      burrow: 20
    },
    abilities: {
      str: 15,
      dex: 9,
      con: 14,
      int: 12,
      wis: 13,
      cha: 12
    },
    feats: [
      {
        name: "Deceitful",
        type: "General"
      },
      {
        name: "Great Fortitude",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Longsword",
        name: "Longsword",
        damage: "1d8"
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
        value: 5,
        damageType: "cold iron or good"
      },
      SR: {
        value: 14
      },
      naturalArmor: 3
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Abyss; battlefields and graveyards)",
    visualDescription: "A corpulent man reels on his feet as if drunk, but a closer inspection reveals the horrific truth-he's not so much reeling as he is seething from within, as if his internal organs were coiling and writhing like a knot of greased snakes. Suddenly, with a hideous retching and tearing sound, the man's face blooms out like a rotten flower and a pallid, five-jawed worm extrudes itself from the ragged hole in the neck where, only a moment before, a head sat.",
    description: "The hideous vermlek demon is one of the lower-ranking members of the demon race, barely above the dretch in power but remarkably more ambitious and intelligent than its pudgy lesser kin. They wriggle and crawl in nauseating numbers in many Abyssal battlefields or graveyards, impatiently awaiting a chance to find a humanoid body to inhabit. Outside of a host body, a vermlek appears like a fatheaded worm with four long tails, each of which ends in a wriggling nest of long filaments. In this form, the vermlek cannot wield weapons, and its bite and spell-like abilities are its only offensive options. A typical vermlek is 7 feet long (with its filaments giving it a further 3 feet of length) and weighs 90 pounds. Ecology Vermleks form from the souls of those who habitually violated the dead in life, such as graverobbers, necromancers, and necrophiles. On the Abyss, the vermleks are countless in number. A single sinful soul can spawn dozens if not hundreds of these demons in much the same way that the body the soul leaves behind spawns maggots. A newly formed vermlek can flop and writhe through the stinking Abyssal necropolises and swamps and boneyards for eons before it finds a body to inhabit, but it's much more common for a vermlek to be \"harvested\" by a more powerful demon for use in a battle. Vermleks harvested in this manner are carried in huge steel cages on the backs of enormous fiendish beasts of burden, such as retrievers, and either sold to powerful Material Plane spellcasters or used in battle against humanoid foes. The classic use for vermleks in such cases is to open the cages containing the worm demons after an initial skirmish or battle so that they can slither out onto the battlefield and claim bodies from the dead, thus recycling the carrion for use in the next battle to come. As vermleks can only inhabit the bodies of humanoids, this tactic isn't as common on the Abyss (where demons typically fight themselves or other outsiders), but in regions of Golarion where demons hold sway, such as the Worldwound or Tanglebriar, their use can be a particularly demoralizing form of psychological combat. The process by which a vermlek inhabits and controls a dead humanoid is partially biological, partially necromantic. A vermlek's body is boneless and exceptionally elastic-it can wriggle into a body through the mouth, a wound, or any other opening in less than a minute, eating the bones and organs within with noisy rapidity. It then settles into the cavity thus created, extending its four tails down into the torso and eventually into the hollowed arms and legs of its host, whereupon the filaments at the tips of these tails weave through nerves and muscle like a puppet's strings. The vermlek can immediately use the body to move about, wield weapons, speak, and otherwise interact with society. The creature can control the coiling and wriggling of its body to keep its host appearing humanoid, but it can do little about the size of its body-humanoids inhabited by a vermlek always look hideously obese. Worse, the host body, which remains dead, rots normally-a vermlek that does not maintain its body's freshness with gentle repose must abandon the rotting flesh 7 days after inhabiting it to seek out a new host. Vermleks know that a keen eye that peers into the mouth of a host can quickly undo their deceptions, and as a result they tend to mutter or mumble when speaking to keep from opening their mouths too wide. Many use veils, helms, or scarves to hide their mouths. When confronted in combat, though, a vermlek in a host body quickly abandons its disguise, extending its hideous worm head out through the host's mouth to give itself a secondary bite attack-doing so ruins the host body for further disguise purposes. Habitat & Society Vermleks can often be found at the sites of vast battlefields on the Abyss where wars with humanoids (fiendish, celestial, or otherwise) have occurred. These sites are particularly common on Kurnugia, where the fiendish gnolls of Lamashtu constantly bicker and war with one another, and on Ishiar, where the fiendish human pirates and scoundrels that dwell upon that ocean's islands wage eternal war. These demons generally spawn in Abyssal realms like Everglut, Uligor, and the Spiral Path, where demon lords associated with the dead or worms rule, and they can be found in great number in those regions' vast graveyards and necropolises. Although they are often used as disposable infantry in mass battles, vermleks themselves have little taste for such activities and, left to their own desires, prefer to live in hiding among humanoids on the Material Plane if they can find their way into that realm. A vermlek fortunate enough to find itself on the Material Plane enjoys disguising itself as a laborer, gravedigger, dungsweeper, or any other lowclass role in which it can blend in while still having access to the city's dead. A vermlek's ghoulish and taboo lusts are only magnified by its creation, and on the Material Plane, the arrival of one of these filthy demons in a society almost always presages a sudden upswing in scandalously violent or distasteful crime.",
    organization: "solitary or nest (2-20)",
    languages: "Abyssal, Common; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "inflict light wounds, mass",
        casterLevel: 3,
        timesPerDay: 3
      },
      {
        name: "spider climb",
        casterLevel: 3,
        timesPerDay: 3
      },
      {
        name: "gentle repose",
        casterLevel: 3,
        timesPerDay: 1
      },
      {
        name: "summon",
        casterLevel: 3,
        limitations: "level 2, 1d4 dretches, 50%",
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 4
      },
      Disguise: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      "Escape Artist": {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      "Knowledge (religion)": {
        ranks: 7
      },
      Perception: {
        ranks: 4
      },
      "Sense Motive": {
        ranks: 4
      },
      "Use Magic Device": {
        ranks: 7
      }
    },
    special: {
      "inhabit body": {
        type: "Su",
        text: "A vermlek can crawl into the body of any dead Medium humanoid, consuming and replacing the bulk of the humanoid's skeleton and internal organs as it does so. This process takes 1d4 rounds for the vermlek to complete, during which it is considered flat-footed. Once the process is complete, the vermlek appears for all practical purposes to be a living but hideously obese version of the previous humanoid-it gains a +8 racial bonus on Disguise checks to appear as a normal humanoid while wearing a dead body in this manner, but does not gain any of the abilities that the dead creature possessed in life, including natural attacks, unusual movement types, or bonuses to natural armor. It loses its own burrow speed while inhabiting a body, but gains the ability to wield weapons or wear armor shaped for humanoids (although note that the armor bonus granted by wearing armor does not stack with the bonus granted by the vermlek's flesh armor ability)."
      },
      "abandon flesh": {
        type: "Su",
        text: "As a swift action, a vermlek can abandon an inhabited body, crawling hideously out of its host and leaving behind an empty sack of skin and bits of gristle. In so doing, it absorbs much of the body's flesh to heal itself, restoring 2d6+3 hit points. A vermlek cannot later reclaim this body with its inhabit body ability."
      },
      "flesh armor": {
        type: "Su",
        text: "When a vermlek wears a humanoid body (see inhabit body, below), it treats the dead flesh and muscle as armor and gains a +3 armor bonus to its AC."
      },
      "negative energy affinity": {
        universalMonsterAbility: "Negative Energy Affinity",
        parenthetical: ""
      }
    }
  },

  Brimorak: {
    source: "Lords Of Chaos",
    creatureType: "outsider",
    subTypes: [
      "chaotic",
      "demon",
      "evil",
      "extraplanar",
      "fire"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Small",
    hd: 6,
    hdVal: 10,
    cr: 5,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 17,
      dex: 16,
      con: 19,
      int: 12,
      wis: 12,
      cha: 15
    },
    feats: [
      {
        name: "Combat Casting",
        type: "General"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Longsword",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Longsword",
        name: "Longsword",
        damage: "1d8",
        bonuses: [
          {
            source: "inherent",
            value: "1d6",
            appliesTo: "damageType",
            damageType: "fire"
          }
        ]
      },
      {
        weapon: "Hoof",
        name: "Hoof",
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
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "cold iron or good"
      },
      SR: {
        value: 16
      },
      naturalArmor: 4
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Abyss; volcanic regions)",
    visualDescription: "Standing just over three feet tall, this bestial humanoid wears filthy, tattered robes and has blue-gray skin decorated with strange, coiling stripes. Dark fur grows on its head and arms, and its feet end in burning hooves. Its eyes glow as red as the flaming sword it wields in one hand, and its breath fills the surrounding air with noxious gray smoke.",
    description: "Although brimorak demons are generally limited to regions of the Abyss where fire and smoke hold sway, in those regions they are vast in number. Demon lords like Flauros use brimoraks as the primary infantry troops in Abyssal armies-although their command of fire makes them less effective against most fiends, they are particularly devastating against many other foes. Brimoraks are small in stature, rarely standing over 3 feet in height, yet surprisingly strong for their size. Those who underestimate these demons often don't live to learn of their errors, for brimoraks are quick to press the advantage against larger enemies after softening them up with fire magic. A brimorak's dense musculature and bones result in unexpected weight as well-one of these creatures usually weighs nearly 200 pounds. Ecology Brimoraks form from the souls of arsonists and those who used fire in life to torture and kill innocent victims- especially witches, heretics, and other such \"criminals\"-via burning at the stake or on a pyre. Although a brimorak is not damaged by fire, it still feels the pain of fire as long as it lives-the boiling of its own blood is a constant reminder of its sins from a previous life. This state of constant pain is alleviated somewhat after a brimorak uses one of its fire-based spell-like abilities or its breath weapon-while this has no game effect on the demon, the temporary relief does encourage it to use its magic and breath weapon as often as possible in combat. Many brimoraks become masochistic creatures as a result of the constant pain. In combat they often display little to no regard for their personal safety, provoking attacks of opportunity or ignoring obvious foes for the chance to hurt a helpless foe. Yet this disregard for safety doesn't descend into truly self-destructive behavior-a brimorak with fewer than half its hit points becomes suddenly more careful about its actions. Unlike most demons, who can teleport at will, brimoraks can only use this powerful spell-like ability once per day, and they generally rely upon it to get themselves out of peril rather than to ambush foes. Habitat & Society On the Abyss, brimoraks usually serve more powerful demons as taskmasters, thugs, or soldiers. These brimorak demons know little more than battle, and when not fighting together against a foe they tend to fight each other in an endless conf lict for superiority. On the Material Plane, however, brimoraks take on a much more authoritative role. While most are called via spells like lesser planar ally or lesser planar binding in order to serve mortal spellcasters as minions, now and then a brimorak escapes control and can remain on Golarion. Freed from demonic overlords and binding spellcasters, a brimorak loose on the Material Plane understands that it is viewed as a monster and reacts intelligently-it does not immediately revert to an orgy of arson and destruction, but instead retreats into hiding. Free brimoraks prefer to lurk in rundown slums in large cities, in catacombs or sewers, or in remote wilderness regions. Typically, a lone brimorak seeks out a tribe of savage humanoids like goblins, orcs, gnolls, or barbarians and establishes itself as the dominant force for the tribe by killing its leader and several of the tribe's more powerful members-whatever it takes to get the tribe's survivors to bow down before the demon. As a result, the majority of brimoraks encountered on the Material Plane are encountered as lone creatures serving as the leaders of tribes of fecund and aggressive humanoids. Often, and particularly in the case of tribes of superstitious humanoids, the brimorak is regarded as both a chieftain and a god, with tribal adepts actually worshiping the demon out of a mixture of fear and ignorance. Of course, the brimorak is only too pleased to perpetuate such beliefs by requiring frequent sacrifices, using its defensive abilities and spell-like abilities to perform \"miracles,\" and periodically punishing its followers for real or imagined transgressions. Eventually, the brimorak has the tribe so cowed and under his control that he can finally turn to the joys of mayhem by ordering the tribe to take up ill-advised crusades against neighboring tribes or settlements. The brimorak continues to order these attacks on nearby victims until his tribe is destroyed or high-powered opponents arrive to stop it. Brimoraks who are finally confronted by foes capable of defeating them generally don't stay around to defend their followers, but instead simply teleport to some other region, whereupon they begin the process anew by seeking a new tribe of doomed savages to rule.",
    organization: "solitary, band (2-6), or platoon (7-16)",
    languages: "Abyssal, Celestial, Draconic, Ignan; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "dispel magic",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "heat metal",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "produce flame",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "air walk",
        casterLevel: 6,
        timesPerDay: 1
      },
      {
        name: "fireball",
        casterLevel: 6,
        timesPerDay: 1
      },
      {
        name: "teleport, greater",
        casterLevel: 6,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: 1
      },
      {
        name: "summon",
        casterLevel: 6,
        limitations: "level 3, 1 brimorak, 50%",
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
      "Knowledge (engineering)": {
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
            value: 8
          }
        ]
      },
      "Sense Motive": {
        ranks: 6
      },
      Stealth: {
        ranks: 6
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        damage: "usable every 1d4 rounds"
      },
      "burning hooves": {
        type: "Su",
        text: "A brimorak's hooves burn with fire, leaving scorched hoofprints on wood, stone, and most every other solid surface, yet this supernatural fire does not set alight surfaces the demon treads upon. It does make it easier to track a brimorak, though-Survival checks made to track a brimorak gain a +8 circumstance bonus. Brimoraks use their air walk ability to throw creatures off their trail, or to leave their prints in strange places (like atop roofs) to spread fear and terror. Against a prone foe, a brimorak can make two hoof attacks rather than just one."
      },
      "flaming weapon": {
        type: "Su",
        text: "As a free action, a brimorak can infuse a wielded melee weapon (including a two-handed weapon, but not a second weapon held in the off-hand) with its fiery nature, allowing it to inflict an additional 1d6 points of fire damage with the weapon. This fire damage stacks with any additional fire damage that the weapon might also inflict. The weapon loses this ability if it leaves the demon's grasp. Smoke Breath (Su) A brimorak's breath manifests as clouds of foul-smelling smoke when it exhales. This breath surrounds the brimorak out to a radius of 5 feet-while the smoke isn't thick enough to obscure vision or choke foes, it is enough to sicken breathing foes who are not immune to poison. A DC 17 Fortitude save grants immunity to a particular brimorak's breath for 24 hours. The save DC is Constitution-based."
      },
      "boiling blood": {
        type: "Su",
        text: "A brimorak's blood is boiling hot. It can cough out a hideous amount of this scorching fluid as a breath weapon, but the blood also serves the demon as a defensive ability. Any creature that damages a brimorak with a slashing or piercing melee weapon is sprayed by boiling blood, and takes 1d4 points of fire damage with each successful hit with such a weapon. Creatures using reach weapons are not subject to this damage."
      },
      "smoke breath": {
        type: "Su",
        text: "A brimorak's breath manifests as clouds of foul-smelling smoke when it exhales. This breath surrounds the brimorak out to a radius of 5 feet-while the smoke isn't thick enough to obscure vision or choke foes, it is enough to sicken breathing foes who are not immune to poison. A DC 17 Fortitude save grants immunity to a particular brimorak's breath for 24 hours. The save DC is Constitution-based.",
        preText: "5 ft., DC 17"
      }
    }
  },

  Seraptis: {
    source: "Lords Of Chaos",
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
    hd: 15,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Deathwatch",
      "True Seeing"
    ],
    speed: {
      base: 50
    },
    abilities: {
      str: 22,
      dex: 23,
      con: 28,
      int: 16,
      wis: 19,
      cha: 21
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
        name: "Improved Critical",
        type: "Combat",
        value: "Scimitar",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
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
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Scimitar",
        enchantments: [
          {
            name: "Enhancement Bonus +1",
            source: "inherent"
          },
          {
            name: "Wounding",
            source: "inherent"
          }
        ],
        name: "Scimitar",
        damage: "1d6"
      },
      {
        weapon: "Claw",
        name: "3 Claws",
        specialAbility: "grab",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Gore",
        name: "Gore",
        damage: "1d6",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to bleed"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "cold iron and good"
      },
      SR: {
        value: 26
      },
      naturalArmor: 10
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Abyss)",
    visualDescription: "This demonic woman's flesh is pale and clammy, as if her body had been drained of blood via the numerous deep, raw slashes upon her four arms. As she moves, these gashes open like mouths, displaying row upon row of razor-sharp teeth.",
    description: "Statuesque and hauntingly beautiful (at least, until the toothy wounds on their arms gape open), seraptis demons are the favored minions of the demon lord Sif kesh, although they also often serve other demon lords (particularly Nocticula and Socothbenoth). Formidable combatants, seraptis demons typically function as bodyguards or lone champions for their masters, but many of these demons have achieved greater glory on their own as rulers of subdomains in greater Abyssal realms. A seraptis demon stands 7 feet tall and weighs 230 pounds. Ecology Seraptis demons form from the souls of those who, in the act of committing suicide, caused an unusual amount of despair, destruction, or mayhem. A quiet death in a dark room might result in the soul becoming a seraptis if the victim was a wellknown and beloved political figure whose suicide compelled his followers to riot and murder. A plunge from a high tower into a crowded marketplace might result in a small amount of collateral damage if the jumper lands atop a passerby, but this would not normally doom the suicide to existence as a seraptis. Suicide by detonating a necklace of fireballs in the middle of a wedding, on the other hand, would likely result in the dead soul becoming a seraptis. With one exception, those who deliberately commit suicide in an attempt to have their souls transform into seraptis demons instead find themselves manifesting upon the Abyss as larvae-the Abyss does not reward deliberate suicide with such power as a seraptis wields. The one exception is in the case of a powerful worshiper of the demon lord Sif kesh. The ritual by which such a worshiper can transcend mortal life and transform into a seraptis is one of the cult's most closely guarded secrets, and one that is only revealed to the most heretical and deviant of the faithful. Seraptis demons formed in this manner always retain their previous life's personality and memories, although they lose all class-based abilities in the transition. Habitat & Society Although the seraptis champions and assassins who serve Sif kesh and other demon lords are well feared, the true terrors of their kind are those who have broken free from servitude to more powerful demons and, in so doing, have established themselves as ruling forces. Known collectively as the Dolorous Sisters, these demons are all advanced serapti with several class levels, ranging from CR 19 to CR 22. These seraptis demons are all ex-worshipers of Sif kesh who have undergone the secret suicide ritual to transform into demons, but in true heretical style, they no longer directly serve the Sacred Whore. None have yet ascended to the vaunted rank of nascent demon lord, for the Dolorous Sisters hope to someday transcend as a group into a full-f ledged demon lord by undertaking a hideous suicide pact, bypassing the convoluted and dangerous step of nascence most demon lords must endure. In true Abyssal form, though, the Dolorous Sisters have long been plagued by internal bickering, treachery, and clandestine assassinations. They require 23 members before they can even begin their suicide ritual, and while the sisters' numbers have grown steadily (if slowly) since their initial formation eons ago, they have yet to reach that key number. The Dolorous Sisters do not dwell together-rather, they keep palaces built upon different themes that match their own favored methods of suicide scattered throughout the Abyssal cities of Diovengia, Vantian, and Yanaron, as well as various cities located on remote Midnight Isles. Portals sometimes connect some of these palaces as alliances grow between the demons, yet the constant threat of betrayal ensures that these portals remain among the most heavily guarded parts of each domicile.",
    organization: "solitary or cult (1 seraptis plus 1-2 glabrezus and 2-6 succubi)",
    languages: "Abyssal, Celestial, Draconic; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "deathwatch",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "true seeing",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "unholy aura",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "crushing despair",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "dispel magic",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "teleport, greater",
        casterLevel: 15,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: -1
      },
      {
        name: "telekinesis",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "confusion",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "demand",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "dominate person",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "fly",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "symbol of insanity",
        casterLevel: 15,
        timesPerDay: 1
      },
      {
        name: "summon",
        casterLevel: 15,
        limitations: "level 5, 1 seraptis 20% or 1 glabrezu 40%",
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 10
      },
      Bluff: {
        ranks: 15
      },
      Fly: {
        ranks: 18
      },
      Intimidate: {
        ranks: 18
      },
      "Knowledge (planes)": {
        ranks: 15
      },
      "Knowledge (religion)": {
        ranks: 18
      },
      Perception: {
        ranks: 15,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      "Sense Motive": {
        ranks: 15
      },
      Stealth: {
        ranks: 15
      }
    },
    special: {
      "compelling domination": {
        type: "Su",
        text: "When a seraptis uses dominate person (as a spell or spell-like ability), its victims do not actively resist the control and do not gain a new saving throw when ordered to take actions against their nature unless those actions are obviously self-destructive, in which case the victim does get a new saving throw with a +2 bonus to escape the effects of the domination. Gaze of Despair (Su) A seraptis's gaze fills the minds of those within 30 feet with overwhelming and soul-crushing despair. Anyone who fails a DC 22 Will save upon being exposed to a seraptis's gaze immediately takes 1d6 points of Charisma drain and is staggered for 1d6 rounds. If the Charisma drain would normally reduce a creature's Charisma to 0, that creature instead succumbs to overwhelming suicidal urges and attempts to end its life by the most convenient method at hand, subject to GM discretion. (In most cases, this effect causes a creature to make a coup de grace attempt on itself, but if a more dramatic method of self-destruction is available, the creature takes that action.) Once a creature reaches this suicidal state of despair, it remains in that state until its Charisma score is restored to its normal maximum-if methods of restoring lost Charisma are not available, the suicidal victim must be restrained at all times to prevent attempts to kill itself. This is a mind-affecting effect. The save DC is Charisma-based."
      },
      "ravenous embrace": {
        type: "Su",
        text: "Once per round, a creature grappling or grappled by a seraptis can be attacked by the ravenous, toothed wounds that decorate a seraptis's arms. These teeth bite and chew, inflicting an automatic 4d6+12 points of damage each round-in addition, the wounds caused by the ravenous embrace cause 2d6 bleed and 1d4 points of Strength drain as the seraptis drinks away the victim's blood and other vital fluids. As long as the seraptis is within 30 feet of a foe suffering bleed damage from her ravenous embrace, the blood that flows from the victim writhes through the air into the seraptis's arm maws, healing the seraptis by an amount equal to the amount caused by that round's bleed effect."
      },
      bloodless: {
        type: "Ex",
        text: "A seraptis's body is not completely bloodless, but what blood its body does contain is typically blood taken from its previous victims-the blood that flows through the demon's atrophied veins does nothing to give it life. Its wounds do not bleed, and it is immune to bleed effects and to attacks that utilize blood drain to function. Sneak attacks, critical hits, and similar attacks function normally on a seraptis, although if such effects would normally cause bleed damage, those additional effects do not work."
      },
      "gaze of despair": {
        type: "Su",
        text: "A seraptis's gaze fills the minds of those within 30 feet with overwhelming and soul-crushing despair. Anyone who fails a DC 22 Will save upon being exposed to a seraptis's gaze immediately takes 1d6 points of Charisma drain and is staggered for 1d6 rounds. If the Charisma drain would normally reduce a creature's Charisma to 0, that creature instead succumbs to overwhelming suicidal urges and attempts to end its life by the most convenient method at hand, subject to GM discretion. (In most cases, this effect causes a creature to make a coup de grace attempt on itself, but if a more dramatic method of self-destruction is available, the creature takes that action.) Once a creature reaches this suicidal state of despair, it remains in that state until its Charisma score is restored to its normal maximum-if methods of restoring lost Charisma are not available, the suicidal victim must be restrained at all times to prevent attempts to kill itself. This is a mind-affecting effect. The save DC is Charisma-based.",
        preText: "30 ft., DC 22"
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  Vavakia: {
    source: "Lords Of Chaos",
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
    size: "Huge",
    hd: 18,
    hdVal: 10,
    cr: 18,
    racialFeatures: [
      "Darkvision 60 ft.",
      "True Seeing"
    ],
    speed: {
      base: 60,
      maneuverability: "Average",
      fly: 60
    },
    abilities: {
      str: 32,
      dex: 14,
      con: 33,
      int: 18,
      wis: 21,
      cha: 23
    },
    feats: [
      {
        name: "Awesome Blow",
        type: "Combat"
      },
      {
        name: "Greater Vital Strike",
        type: "Combat"
      },
      {
        name: "Improved Bull Rush",
        type: "Combat"
      },
      {
        name: "Improved Iron Will",
        type: "General"
      },
      {
        name: "Improved Vital Strike",
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
        value: "Enervation",
        choiceSource: "Quicken Spell-Like Ability"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Ranseur",
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
        name: "Ranseur",
        damage: "2d4"
      },
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "smoking wound",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        specialAbility: "stun",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to fire"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "cold iron and good"
      },
      SR: {
        value: 29
      },
      naturalArmor: 13
    },
    space: "15 ft.",
    reach: "15 ft.; 30 ft. with ranseur",
    environment: "any (Abyss)",
    visualDescription: "This reptilian monstrosity is larger than a bull elephant. With the lower body of a spine-backed quadrupedal dinosaur, complete with spiked tail, the demonic creature has the upper body of a muscular humanoid. Its powerful arms wield an immense ranseur while tremendous draconic wings unfurl from its back. The creature's head-part dragon, part saurian, part demon-is a nightmare of horns and fangs and cruel, glowing eyes.",
    description: "Vavakias are immense demons of great power. Saurian in shape, appetite, and destructive power, they are most often encountered on the Material Plane not as demons conjured by spellcasters to serve, but as violent invaders come to the world through tears in reality or portals to the deeper rifts. On the Material Plane, a single vavakia is a formidable presence, for the strange demons are driven to feed on living souls and spread destruction-roles they were built to excel at. A vavakia demon measures 30 feet in length and stands 15 feet tall, weighing in at 6,000 pounds. Vavakias form on the Abyss from particularly cruel mortal souls who, in life, practiced the vile act of extracting, enslaving, and even consuming other souls. When such a sinful creature arrives on the Abyss, it brings with it partially absorbed fragments of souls from its victims, resulting in a horrific transformation into one of the Abyss's most dangerous forms of demonic life. Ecology The first vavakias were created eons ago by Lamashtu, who was unsatisfied with the raw physical might and monstrous shape of many of her earliest demonic minions. In those early days, before she had become a deity, Lamashtu was already quite interested in the method by which the Abyss transformed the souls of sinful mortals into demons. When she learned that this process had first been triggered by the daemons, she was at once intrigued and enraged- intrigued because she knew that anything the Horsemen of the Apocalypse could do, she could do, and enraged at the idea that she owed her very existence to the curiosity of a daemonic lord. Of course, Lamashtu herself rose from the Abyss spontaneously, shortly after the daemons first \"taught\" the Abyss how to process sinful souls, but that difference meant little to the Mother of Monsters. Fueled by this rage, she waged war against Abaddon for many years and captured two Horsemen of the Apocalypse-predecessors of those who hold those titles now. She murdered one of them, and forced from the other the secret method of manipulating souls and the Abyss before murdering him as well. Both murdered Horsemen were soon replaced on Abaddon, but by that point Lamashtu's wrath had been spent and all that remained was her own curiosity. Most of Lamashtu's earliest attempts to create demonic life were hideous failures, but even in these failures Lamashtu found joy and delight. It wasn't until the demon used her own body as an incubator to shape and then eventually birth the first vavakias that she had her first real success. Lamashtu's early work in creating and manipulating the Abyss in this manner may have much to do with her resulting rise in power to the position of Queen of Demons-had not her escalating war with Pazuzu forced her attentions away from this hideous form of \"art,\" there's no telling what other strange demonic races she might have birthed upon the world. Now that she is a true goddess, Lamashtu's interests expand far beyond the \"curiosities\" of the Abyss, and she has little time or desire to wallow in her home plane's fecund properties. Of course, other demon lords throughout the Abyss are eager to learn these secrets, but to date, none have managed to duplicate Lamashtu's feats of creation. In any event, the vavakias themselves have proven a phenomenal success, and are among the Abyss's most dangerous demonic races today. Habitat & Society Although they were originally created to serve as powerful, living weapons of war, the vavakias have long since established their own presence on the Abyss as warlords and conquerors. While some pledge their service to powerful demon lords, most vavakias rule small empires of their own in the Abyss, typically in remote corners infested with swamps, jungles, and other primeval terrains.",
    organization: "solitary, pair, or warband (1 vavakia plus 2-4 hezrous and 2-8 vrocks)",
    languages: "Abyssal, Celestial, Draconic; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "true seeing",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "unholy aura",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "enervation",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "teleport, greater",
        casterLevel: 18,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: -1
      },
      {
        name: "telekinesis",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "blasphemy",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "enervation",
        casterLevel: 18,
        limitations: "Metamagic: Quicken ",
        timesPerDay: 3
      },
      {
        name: "power word stun",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "earthquake",
        casterLevel: 18,
        timesPerDay: 1
      },
      {
        name: "summon",
        casterLevel: 18,
        limitations: "level 6, 1 marilith, 40%, or 1d3 nalfeshnees, 60%",
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 18
      },
      Fly: {
        ranks: 18
      },
      Intimidate: {
        ranks: 21
      },
      "Knowledge (arcana)": {
        ranks: 21
      },
      "Knowledge (planes)": {
        ranks: 18
      },
      Perception: {
        ranks: 18,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      "Sense Motive": {
        ranks: 18
      },
      Spellcraft: {
        ranks: 21
      },
      Stealth: {
        ranks: 15,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Swim: {
        ranks: 15
      }
    },
    special: {
      "breath weapon": {
        type: "Su",
        text: "Once every 1d4 rounds, a vavakia can breathe out a 60-foot cone of green fire that seems to writhe and coil with the tortured shapes of a thousand screaming ghosts. This green fire is akin to vomiting up the countless souls the vavakia has consumed, and these souls consume flesh as surely as they consume sanity. A creature struck by this breath weapon takes 20d6 points of damage (DC 30 Reflex half)-this damage manifests as blackened, melted flesh and skin but is treated as raw profane power. Evil creatures take half damage from the breath weapon, but good creatures who take any damage from a vavakia's breath weapon are automatically staggered for 1 round by the hideous sensation. In addition, any living creature that takes damage from a vavakia's breath weapon must also make a DC 30 Fortitude save to avoid suffering 1d8 points of Wisdom drain as her sanity slips away into madness. Immediately after the vavakia expels this green \"soulfire,\" the wailing flames flow in reverse back into the demon's gullet through its open maw. This heals the vavakia 1d8 points of damage for each creature that was damaged by its breath weapon. The Wisdom drain element of this breath weapon is a mind-affecting effect. The save DC is Constitution-based."
      },
      trample: {
        universalMonsterAbility: "Trample",
        damage: "1d8+16",
        saveDC: 10
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "60 ft."
      },
      "smoking wound": {
        type: "Su",
        text: "The wounds caused by a vavakia's fangs result in tremendous and eerie wounds. Rather than blood, wisps of green smoke constantly weep from a vavakia's bite wound-a grim manifestation of the demon's effect on a mortal soul. Each time a vavakia bites a creature, it bestows two negative levels-the wounds continue to smoke as long as the victim suffers those negative levels. The smoking wounds cause the victim to become sickened because of the hideous sensation and rank smell of the vapors. An effect that removes this sickened condition only temporarily causes the wounds to stop smoking-they begin smoking again in 1d6 rounds and persist as long as the victim suffers from the associated negative levels. Nonliving creatures bitten by a vavakia are immune to its energy-draining bite and do not exhibit smoking wounds. The Fortitude save to remove these negative levels is DC 25. The save DC is Charisma-based."
      },
      stun: {
        type: "Ex",
        text: "A creature struck by a vavakia's tail slap must make a DC 30 Fortitude save or be stunned for 1 round. On a critical hit, the stun effect lasts for 1d4 rounds on a failed save, and 1 round on a successful save. The save DC is Constitution-based."
      }
    }
  },

};
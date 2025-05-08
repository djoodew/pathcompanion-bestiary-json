
export const Demon_s_HeresyCreatures = {
  Shachath: {
    source: "Demon’s Heresy",
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
    hd: 11,
    hdVal: 10,
    cr: 11,
    racialFeatures: [
      "All-Around Vision",
      "Darkvision 60 ft.",
      "Detect Good"
    ],
    speed: {
      base: 30,
      maneuverability: "Average",
      fly: 50
    },
    abilities: {
      str: 25,
      dex: 25,
      con: 26,
      int: 18,
      wis: 20,
      cha: 21
    },
    feats: [
      {
        name: "Combat Reflexes",
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
        name: "Weapon Focus",
        type: "Combat",
        value: "Claw",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Longsword",
        enchantments: [
          {
            name: "Enhancement Bonus +1",
            source: "inherent"
          }
        ],
        name: "Longsword",
        damage: "1d8"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "cold iron or good"
      },
      SR: {
        value: 22
      },
      naturalArmor: 7
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Abyss)",
    visualDescription: "This winged abomination is a horrid mix of demonic and angelic features, as if two bodies were carelessly fused into one. Its fanged, inhuman face is frozen in permanent contempt, while a beautiful visage with an expression of horror bulges from the back of its skull.",
    description: "A shachath's duplicitous nature is ref lected in its physical form. It is literally two-faced, and sees and speaks easily from either side of its skull. One face is angelic and the other horrific, but a shachath is a single being of pure malevolence. Shachaths are concerned with the destruction of mortal faith in anything, and are most often found in the service of Baphomet, Pazuzu, Sif kesh, or Socothbenoth. A typical shachath is 7-1/2 feet tall and weighs 320 pounds. Ecology Shachaths are living embodiments of blasphemy. They form in the Abyss from truly blasphemous souls-those who actively work against true believers. Their merged forms can be inverted at their whims; at one moment, the demonic face might be carrying on a conversation, and in the next, with a folding of flesh and a cracking of bones, the shachath can bring its angelic face to the fore. Habitat & Society Shachaths that reside in the Abyss typically act as advisors and counselors to more powerful demons that seek their unique insight into good gods, outsiders, and the mortal condition itself. Others are skilled at interrogating and breaking good-aligned prisoners. On the Material Plane, shachaths dedicate their efforts toward the corruption of mortal faith. This can represent an attack upon a devout cleric or an entire community-or both, if they can manage.",
    organization: "solitary, pair, or cabal (1 plus 1-2 succubi and 1-3 incubi)",
    languages: "Abyssal, Celestial, Common, Draconic; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "detect good",
        casterLevel: 13,
        timesPerDay: -1
      },
      {
        name: "misdirection",
        casterLevel: 13,
        timesPerDay: -1
      },
      {
        name: "detect thoughts",
        casterLevel: 13,
        timesPerDay: -1
      },
      {
        name: "teleport, greater",
        casterLevel: 13,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: -1
      },
      {
        name: "telekinesis",
        casterLevel: 13,
        timesPerDay: -1
      },
      {
        name: "chaos hammer",
        casterLevel: 13,
        timesPerDay: 3
      },
      {
        name: "desecrate",
        casterLevel: 13,
        timesPerDay: 3
      },
      {
        name: "invisibility, greater",
        casterLevel: 13,
        timesPerDay: 3
      },
      {
        name: "major image",
        casterLevel: 13,
        timesPerDay: 3
      },
      {
        name: "suggestion",
        casterLevel: 13,
        timesPerDay: 3
      },
      {
        name: "blasphemy",
        casterLevel: 13,
        timesPerDay: 1
      },
      {
        name: "scrying",
        casterLevel: 13,
        timesPerDay: 1
      },
      {
        name: "summon",
        casterLevel: 13,
        limitations: "level 4, 1 succubus or 1 incubus 65%",
        timesPerDay: 1
      },
      {
        name: "unhallow",
        casterLevel: 13,
        limitations: "only one such effect can be active at a time",
        timesPerDay: -1,
        timesPerWeek: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 11
      },
      Diplomacy: {
        ranks: 14
      },
      Disguise: {
        ranks: 7
      },
      Fly: {
        ranks: 14
      },
      "Knowledge (planes)": {
        ranks: 9
      },
      "Knowledge (religion)": {
        ranks: 12
      },
      Perception: {
        ranks: 11,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      "Sense Motive": {
        ranks: 11
      },
      "Sleight of Hand": {
        ranks: 11
      },
      Stealth: {
        ranks: 11
      },
      "Use Magic Device": {
        ranks: 14
      }
    },
    special: {
      "blasphemous influence": {
        type: "Su",
        text: "A victim that falls under the effects of a shachath's merge with host ability becomes chaotic evil. Divine spellcasters subject to a shachath's merge with host ability temporarily lose connection with their faith, and now gain their divine powers from the Abyss or a demon lord the shachath serves. Though they can still cast the spells they had prepared, they cannot cast spells with the lawful or good descriptor. If the victim of a shachath's merging had access to the Good domain, that access changes to the Evil domain. If the victim had access to the Law domain, that access changes to the Chaos domain. If the victim had access to a subdomain associated with the Good or Law domain, that subdomain changes to the Demon subdomain. These changes last as long as the shachath remains merged with the victim. Other domain choices are not adjusted. If the victim is rescued from the shachath's influence and the merge ends without the victim's death, the victim remains chaotic evil-this may result in the victim losing some or all class abilities. An atonement spell can restore the victim's alignment at no additional cost, at which point lost class abilities are restored."
      },
      "lingering doubt": {
        type: "Su",
        text: "Once per day, a shachath can use a touch attack to affect a creature with lingering doubt. The target must be able to cast divine spells, be able to channel positive energy, or have the lay on hands ability. If the target fails a DC 20 Will save, all augury, commune, divination, and similar spells cast by the target automatically fail. In addition, using divine spells and spell-like abilities, channeling positive energy, or using lay on hands has a 20% chance of failure. This curse is permanent, but can be removed normally. The target cannot detect the curse on itself, but other creatures may detect the curse normally. A shachath may use scrying on the cursed creature as if it knew the target well, and doing so requires only a full-round action. A shachath may only curse one creature at any given time. The save DC is Charisma-based."
      },
      "merge with host": {
        type: "Su",
        text: "As a full-round action that provokes an attack of opportunity, a shachath can merge its body with that of a helpless creature and control it if the victim fails a DC 20 Will save. A creature that successfully saves is not subject to the same shachath's merge with host ability for 24 hours. While merged with a victim, a shachath gains control of the body and may use it as its own, as if it controlled the target via dominate monster. Misdirection or similar effects can hide the victim's alignment change. The shachath has full access to all of the host's defensive and offensive abilities, and the shachath can still use its own spell-like abilities as well. As long as the shachath occupies the host, it knows (and can speak) the languages known by the victim and basic information about the victim's identity and personality. It can learn specific memories or knowledge from the victim by telepathic communication as needed. Damage dealt to a host body does not harm the shachath, and if the host body is slain, the shachath emerges and is dazed for 1 round. A shachath can choose to abandon a host body as an immediate action, but doing so causes the host to be dazed for 1 round, and the shachath must wait 24 hours before attempting to use merge with host again on any target. A shachath can be ejected from a host through the use of break enchantment (against CL 13th), dispel chaos, or dispel evil. Merge with host is a mind-affecting possession effect. The save DC is Charisma-based."
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "Medium or Large humanoid; alter self"
      },
      "subtle magic": {
        type: "Su",
        text: "Whenever a shachath targets a creature with a spell, spell-like ability, or supernatural ability, and that spell or ability has no obvious physical effects, the targeted creature has no sense of having been the target of a magical effect after making a successful saving throw against the effect. If the ability requires a touch attack but the target is unaware of being threatened, the shachath can attempt an opposed Bluff or Sleight of Hand check to touch the target without arousing suspicion or being noticed."
      },
      "trophy taker": {
        type: "Su",
        text: "A shachath that takes a personal item from a prospective target can wield greater power over that creature. The item must be something that the target considers its own possession and carries with it most of the time (for example, a piece of jewelry, a favored weapon, a holy symbol, or some other memento). The shachath gains a +2 bonus to the saving throw DCs for all of its supernatural or spell-like abilities that target the owner of the trophy. This bonus increases to +4 if the trophy is the target's holy symbol. A shachath can only have one trophy at any time, and it loses any benefit from an existing trophy if it takes a new one."
      }
    }
  },

  Sifkesh: {
    source: "Demon’s Heresy",
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
    hd: 31,
    hdVal: 10,
    cr: 28,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Detect Good",
      "Detect Law",
      "True Seeing"
    ],
    speed: {
      base: 30,
      maneuverability: "Perfect",
      fly: 120
    },
    abilities: {
      str: 32,
      dex: 35,
      con: 42,
      int: 33,
      wis: 29,
      cha: 36
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
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "War razor",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Claw",
        choiceSource: "Improved Critical"
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
        name: "Quicken Spell-Like Ability",
        type: "Monster",
        value: "Dominate person",
        choiceSource: "Quicken Spell-Like Ability"
      },
      {
        name: "Quicken Spell-Like Ability",
        type: "Monster",
        value: "Suggestion",
        choiceSource: "Quicken Spell-Like Ability"
      },
      {
        name: "Spring Attack",
        type: "Combat"
      },
      {
        name: "Staggering Critical",
        type: "Combat"
      },
      {
        name: "Whirlwind Attack",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "War razor",
        enchantments: [
          {
            name: "Enhancement Bonus +5",
            source: "inherent"
          },
          {
            name: "Unholy",
            source: "inherent"
          },
          {
            name: "Speed",
            source: "inherent"
          }
        ],
        name: "War razor",
        damage: "1d4"
      },
      {
        weapon: "Claw",
        name: "Claw",
        damage: "1d4",
        bonuses: [
          {
            source: "inherent",
            value: "1d4",
            appliesTo: "damageType",
            damageType: "cha drain"
          }
        ],
        type: "primary"
      }
    ],
    immunities: [
      "Immune to ability damage and drain, bleed, charm and compulsion effects, death effects, energy drain, petrification, slashing weapons"
    ],
    defense: {
      DR: {
        value: 20,
        damageType: "cold iron, epic, and good"
      },
      SR: {
        value: 39
      },
      naturalArmor: 6
    },
    space: "5 ft.",
    reach: "30 ft.",
    environment: "any (Abyss)",
    visualDescription: "This gaunt woman has blood-soaked hair, eyes and lips stitched shut with wire, and severed limbs that float nearby as if they were still attached.",
    description: "Sifkesh, the Sacred Whore, is the demon lord of suicide, heresy, and hopeless despair. She rules the Abyssal realm of Vantian, the legendary City of Open Windows. The city itself is constantly destroying itself, as its buildings continually plummet into the churning surf along an eternally crumbling coastline. Sifkesh is among the most enigmatic of all demon lords, for she seems more diabolic or even daemonic in her personality and appearance. Planar scholars have long struggled to interpret the demon lord's position and power. The belief that Sifkesh rose from the animus of a heretical erinyes who became the first of Hell's heretics is correct, and she constantly works to seduce and lure additional powerful devils from their infernal roles, inviting some to join her as favored minions but leaving others in place so they can more easily work to subvert Hell's machinations. Sifkesh's Cult Sifkesh is worshiped by blasphemers, heretics, outcasts from other religions, and survivors of botched suicide attempts. Her faithful are relatively solitary individuals, and there isn't a strong element of group worship of the demon lord-her cults tend to be small and often amount to only a single worshiper who might employ or rule his own group of minions or followers who don't actually serve the Sacred Whore. Worship of Sifkesh is a deeply personal and secretive thing, and many of her followers publicly belong to other religions, worshiping the demon lord of heresy in secret as they work to undermine the faith their allies and companions believe them to have. Holy sites to Sifkesh include desecrated churches, haunted houses, and towers with too many windows-nearly always, such temples and shrines to Sifkesh are empty and abandoned. The lone worshiper might share the site with other creatures such as predators or undead, and may even rely upon the presence of such creatures as convenient protection and defense against the enemy. Sifkesh's unholy symbol is a pair of feminine hands crossed at slashed wrists. Her favored weapon is the war razor (The Inner Sea World Guide 290-291). She grants access to the domains of Chaos, Evil, Madness, and Trickery, and to the subdomains of Deception, Demon, Loss, and Nightmare (even though she normally wouldn't be able to grant access to the subdomain of Loss, she can do so due to her close associations with despair and hopelessness).",
    organization: "solitary (unique)",
    languages: "Abyssal (can't speak), Celestial (can't speak), Common (can't speak); telepathy 300 ft.",
    spellLikeAbilities: [
      {
        name: "detect good",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "detect law",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "freedom of movement",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "true seeing",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "unholy aura",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "astral projection",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "blasphemy",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "crushing despair",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "desecrate",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "dispel magic, greater",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "teleport, greater",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "telekinesis",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "shapechange",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "suggestion",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "unhallow",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "unholy blight",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "demand",
        casterLevel: 28,
        timesPerDay: 3
      },
      {
        name: "dominate person",
        casterLevel: 28,
        limitations: "Metamagic: Quicken ",
        timesPerDay: 3
      },
      {
        name: "suggestion",
        casterLevel: 28,
        limitations: "Metamagic: Quicken ",
        timesPerDay: 3
      },
      {
        name: "symbol of strife",
        casterLevel: 28,
        timesPerDay: 3
      },
      {
        name: "sympathy",
        casterLevel: 28,
        timesPerDay: 1
      },
      {
        name: "time stop",
        casterLevel: 28,
        timesPerDay: 1
      },
      {
        name: "weird",
        casterLevel: 28,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 34
      },
      Bluff: {
        ranks: 31
      },
      Diplomacy: {
        ranks: 34
      },
      Fly: {
        ranks: 34
      },
      Intimidate: {
        ranks: 31
      },
      "Knowledge (arcana)": {
        ranks: 31
      },
      "Knowledge (engineering)": {
        ranks: 31
      },
      "Knowledge (history)": {
        ranks: 31
      },
      "Knowledge (local)": {
        ranks: 31
      },
      "Knowledge (nobility)": {
        ranks: 34
      },
      "Knowledge (planes)": {
        ranks: 31
      },
      "Knowledge (religion)": {
        ranks: 31
      },
      Perception: {
        ranks: 31,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      "Sense Motive": {
        ranks: 31
      },
      Spellcraft: {
        ranks: 34
      },
      Stealth: {
        ranks: 31
      },
      "Use Magic Device": {
        ranks: 31
      }
    },
    special: {
      "Charisma drain": {
        type: "Su",
        text: "Sifkesh's claw leaves hideous scars that resist healing even via magic; these scars manifest as Charisma drain. The more scars a victim gains in this manner, the more despondent and depressed its personality grows. A creature whose Charisma score is drained to 3 or lower by this attack automatically fails any Will save against any spell-like ability or supernatural attack made by Sifkesh. A successful DC 41 Will save resists the Charisma drain inflicted by this attack, and instead causes the victim to be sickened for 1 round. The save DC is Charisma-based."
      },
      "despairing cry": {
        type: "Su",
        text: "Once every 1d4 rounds as a swift action, Sifkesh can unleash a soul-rending mournful scream that affects all creatures in a 60-foot-radius spread. A creature in this area must attempt a successful DC 38 Will save or be overcome by suicidal despair-on a successful save, a creature is merely sickened for 1d4 rounds. A creature fully affected by this special attack takes a -6 penalty on attack rolls, saving throws, ability checks, skill checks, and weapon damage rolls, and cannot gain the benefit of any morale bonus for 24 hours. A creature that is normally immune to fear loses that ability while under the effects of despairing cry, and can be ordered to take obviously suicidal acts while under the influence of effects like charm person, dominate person, and suggestion. The effects of multiple despairing cries do not stack. This is a mind-affecting sonic curse effect. The save DC is Charisma-based."
      },
      "precise cuts": {
        type: "Ex",
        text: "Sifkesh deals an amount of additional damage equal to her Intelligence bonus on any successful attack that deals slashing damage."
      },
      suicide: {
        type: "Su",
        text: "Once per day as an immediate action, Sifkesh can drop her defenses when attacked by a foe. She is treated as flat-footed for this attack, loses her profane bonus to her AC and spell resistance, and automatically fails any saving throws against that attack. If this attack kills her, she immediately utters her despairing cry (even if she's already used it within the previous 1d4 rounds). Any creatures affected by this particular despairing cry are also stunned for 1d4 rounds. One round after she commits suicide, Sifkesh automatically comes back to life, as if affected by true resurrection."
      },
      "summon demons": {
        type: "Sp",
        text: "Once per day, nascent demon lords can summon any demon or combination of demons whose total combined CR is 20 or lower. This ability always works, and is equivalent to a 9th-level spell."
      },
      "demon lord traits": {
        type: "Ex"
      },
      "detached limbs": {
        type: "Su",
        text: "Sifkesh's arms, legs, and head are not physically attached to her torso. Instead, they float in approximately the positions they would normally take up, but never quite perfectly aligned. She is immune to any effect that severs limbs or her head. In addition, when she attacks, her limbs can move with surprising speed, effectively granting her exceptional reach for a Medium creature."
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        damageType: "deific or mythic",
        value: 30
      },
      "critical healing": {
        type: "Ex",
        text: "Critical hits cause Sifkesh to experience a sudden rush of energy and healing. Any additional damage dealt to Sifkesh by a critical hit actually heals her of that amount of damage rather than harming her. This damage applies simultaneously to the attack's normal damage, and can prevent her from being slain if the damage from the normal attack would otherwise have been enough to kill her. Sifkesh takes no damage at all (but neither does she gain healing) from critical hits she or her allies deal to her-only attempts to actually damage her can heal her in this way. Whenever Sifkesh is healed of any damage in this manner, she becomes hasted for 1 round. Sifkesh takes normal damage from sneak attacks and other precision-based damage."
      },
      "freedom of movement": {
        type: "Ex"
      },
      heretical: {
        type: "Ex",
        text: "Sifkesh's heretical persona protects her from servants of faith. Against any spell cast by a divine spellcaster, her Spell Resistance increases to 41, and she gains a +2 bonus on all saving throws against such spells. A divine spellcaster who willingly touches Sifkesh must succeed at a DC 38 Will save or be nauseated for 1d4 rounds. The save DC is Charisma-based. Immune to Edged Weapons (Ex) Sifkesh is immune to all forms of slashing damage and bleed effects."
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
      },
      {
        damageType: "fire",
        value: 30
      }
    ]
  },

  "Drocha Swarm": {
    source: "Demon’s Heresy",
    creatureType: "undead",
    subTypes: [
      "incorporeal",
      "swarm"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Tiny",
    hd: 9,
    hdVal: 8,
    cr: 7,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 0,
      maneuverability: "Perfect",
      fly: 30
    },
    abilities: {
      str: "-",
      dex: 18,
      con: "-",
      int: "-",
      wis: 15,
      cha: 19
    },
    feats: [],
    attacks: [
      {
        weapon: "swarm",
        name: "swarm",
        specialAbility: "blood drain",
        damage: "4d6"
      }
    ],
    defense: {},
    space: "10 ft.",
    reach: "0 ft.",
    environment: "any",
    visualDescription: "Hundreds of twisted, distorted faces roil in a miserable cloud, screaming of their unquiet deaths.",
    description: "The opening of the Worldwound brought many horrors to the world, and one of the more tragic and horrible results was the elimination of the Sarkorian people. The mass deaths of these people spawned roiling clouds of unquiet spirits called drocha swarms. Each made of the spirits of hundreds of Sarkorians who died at once, these ghostly swarms reveal the screaming faces of those who once lived and thrived in this verdant land. Their lives were cut short either by the ripping open of the terrain itself or by the demons that subsequently poured forth from the Abyss. Now, these tortured swarms of spirits roam the Worldwound, alone or in packs. Drocha swarms are devoid of the goodliness and respect for nature they had in life. All these tortured souls can do is scream and torment others, and though incorporeal, their razor-sharp teeth materialize just long enough to tear at any creatures they happen across. Mostly translucent, drocha swarms contain only the faintest traces of black and green delineating the writhing mouths and rolling eyes of the faces within. The faces moan independently, creating a cacophony of voices, each shouting rage at its death or screaming for others to listen to the story of its plight. It would be maddening to pick out individual voices and follow their terrible cries. The swarm can expand and contract as necessary, pouring over enemies and draining them of the life drocha swarms were so violently denied, an action that does not seem to bring the pitiful creatures any relief from their hideous afterlife. Ecology It is postulated drocha swarms can form anywhere death has occurred on a massive scale. Before the Worldwound opened, they were virtually nonexistent in the Inner Sea region, though some theorize the Sodden Lands could have their own form of drocha swarms made up of those who perished when the Eye of Abendego formed and ravaged the Lirgeni people, practically eliminating them from the Inner Sea. The dead individuals that make up a drocha swarm have lost any identity they once had and are hideously transformed; they are now horrific vehicles of undeath, created only when the conditions are right. As dead souls trapped on the Material Plane are wont to do, drocha swarms are angry and vengeful, and attack any living thing near them with impunity. Since these swarms are composed of undead spirits, once reduced to 0 hit points, drocha swarms are immediately destroyed instead of dispersing. Whether these unquiet spirits are then freed from their connection to the Material Plane and are able to pass on to the Boneyard is unclear. Many scholars believe that destroyed drocha swarms do not pass on to their final judgment and instead are flung to different edges of the Worldwound, where they slowly reform. These scholars state that the real tragedy in regard to putting these horrifying beings out of their tortured misery is that those who defeat them are not liberating the tortured souls, but rather just postponing future encounters with new drocha swarms. This theory is telling, for if drocha swarms were indeed destroyed, there would be fewer and fewer of them every year. However, encounters with these deadly swarms have shown no hint of letting up. Habitat & Society Drocha swarms typically stay in the area in which they died, repeatedly going over the same territory in an ostensible attempt to understand why the villages and cities in which they lived are no longer there. In contrast, some drocha swarms float all about the Worldwound attacking demons and humanoids alike. When drocha swarms attack demons, their screams and wails change tone and pitch, as if the spirits understand demons were responsible for their demise. Because of their roaming nature, these swarms infrequently encounter each other. As unintelligent undead, drocha swarms have no society. Even when swarms come across each other, they seem unaware of each other's existence-which is perhaps unsurprising since drocha swarms focus on living things. On rare occasions, drocha swarms have been reported to collide with each other. When this event occurs, a strange thing happens. The two (or more) swarms appear to merge together, the translucent cloud of screaming faces darkening and billowing out in an even more chaotic roil. The screaming faces that float within the deadly mass pass through one another in a twisted dance and the volume of their wails increases to a painfully uncomfortable level. The merged swarm pulses and continues to grow larger than the volume of the two individual drocha swarms. This horrid mass coalesces and ceases flying, coming to rest on the ground, and remaining stationary for hours at a time. During this period, living creatures can actually approach the merged swarm without the drocha swarms pursuing them, though some have reported that pseudopod-like appendages stretch out from the mass and probe the air in the direction of the living. After several hours, the wails and shrieks build to a crescendo loud enough to make one's ears bleed and the area of the swarm's fear aura doubles. Once this happens, the merged cloud of drocha swarms rapidly pulses, then dramatically contracts to the size of a single drocha swarm. It's unknown whether the two merge and take up the same space or one swarm takes over the other. Some believe the two swarms engage in a brutal battle with one another until a single swarm is destroyed. It's believed this is the only way the component spirits can be freed from their tortured existence, but what truly happens in these rare circumstances is unknown. To the few untainted individuals who still call the Worldwound home, drocha swarms are as infamous as demons for their ability to cause destruction and turmoil wherever they go. Because they are clearly not demons, however, a few stories have emerged in the hundred years that drocha swarms have existed. Some say the Sarkorians, who nervously predicted the thinness of their realm, deserve their fate for not fleeing. Others say there was no way the Sarkorians could have predicted their fates. Still others claim the Sarkorians are the victims of a greater force, which needed thousands of lives to manifest its evil nature on the Material Plane. Who is correct is anyone's guess.",
    organization: "solitary or pack (2-5)",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 0
      }
    },
    special: {
      "blood drain": {
        universalMonsterAbility: "Blood Drain",
        damage: "1d2 Con"
      },
      "ghost touch jaws": {
        type: "Su",
        text: "A drocha swarm's many biting jaws are considered to have the ghost touch special ability. This allows it to deal its swarm damage to corporeal foes, and to deal normal damage to incorporeal creatures such as ghosts, shadow demons, and even other drocha swarms."
      },
      "project death": {
        type: "Su",
        text: "As a standard action, a drocha swarm can target a creature within 30 feet and cry mournful wails that fill the listener with images of its own death. The targeted creature must succeed at a DC 18 Will save to steel itself against this morbid onslaught. If that save fails, the victim must succeed at a Fortitude save or die from fear. Even if the Fortitude save succeeds, the victim takes 4d6 points of damage. A creature that successfully saves against the initial Will save is not subject to the same drocha swarm's project death ability for 24 hours. This is a mind-affecting fear effect. The save DC is Charisma-based."
      },
      "fear aura": {
        universalMonsterAbility: "Fear Aura",
        saveDC: 10,
        range: 30
      }
    }
  },

  Fallen: {
    source: "Demon’s Heresy",
    creatureType: "undead",
    subTypes: [
      "incorporeal"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Medium",
    hd: 11,
    hdVal: 8,
    cr: 8,
    racialFeatures: [
      "Blindsense 60 ft.",
      "Darkvision 60 ft."
    ],
    speed: {
      maneuverability: "Perfect",
      fly: 30
    },
    abilities: {
      str: "-",
      dex: 16,
      con: "-",
      int: 13,
      wis: 17,
      cha: 18
    },
    feats: [
      {
        name: "Combat Expertise",
        type: "Combat"
      },
      {
        name: "Improved Shield Bash",
        type: "Combat"
      },
      {
        name: "Improved Sunder",
        type: "Combat"
      },
      {
        name: "Shield Slam",
        type: "Combat"
      },
      {
        name: "Two-Weapon Fighting",
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
        specialAbility: "agent of despair",
        damage: "1d8",
        bonuses: [
          {
            source: "inherent",
            value: "2d6",
            appliesTo: "damageType",
            damageType: "negative energy"
          }
        ]
      },
      {
        weapon: "Light shield",
        name: "Light shield",
        specialAbility: "agent of despair",
        damage: "1d3",
        bonuses: [
          {
            source: "inherent",
            value: "2d6",
            appliesTo: "damageType",
            damageType: "negative energy"
          }
        ]
      },
      {
        weapon: "Longbow",
        name: "Longbow",
        specialAbility: "agent of despair",
        damage: "1d8",
        bonuses: [
          {
            source: "inherent",
            value: "2d6",
            appliesTo: "damageType",
            damageType: "negative energy"
          }
        ]
      }
    ],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Worldwound)",
    visualDescription: "This ghostly crusader floats just above the ground. Its translucent form would be harder to see if not for the twin motes of hellish red light staring out from behind its helmet.",
    description: "The fallen were once sworn champions of the previous four crusades against the Worldwound to whom fate has perpetrated a cruel trick. Unable to receive Pharasma's judgment and receive whatever reward awaits them in the afterlife for the deeds they performed in life, they are the grim, ghostly remains of the men and women they once were. However, the fallen's original goal of valiantly marching into the Worldwound to save Golarion from the demonic tide has washed from their tortured minds, and is replaced instead by pain, sorrow, and hatred. Their fall in battle remains the greatest disappointment in their souls. Most fallen are still adorned in the battered and breached armor they died in and armed with the weapons they once carried into battle. Sentient and suffering, the fallen wander the Worldwound in search someone to end their misery by performing last rites. At a glance, a fallen might be mistaken for a well-armed ghost or spectre, but even casual study reveals that their fiery eyes are not vacant, and they're anything but mindless. In battle, fallen move in an efficient and deliberate manner, and they are absolutely silent until they deign to speak in raspy, sepulchral tones. Ecology Upon death, a soul normally enters the Great Beyond and travels to the Boneyard, and once there, travels to an appropriate Outer Plane to become a petitioner. Whatever fate befalls that petitioner, whether it is destroyed or its energies are released to create an outsider, it never returns to the Boneyard again. Spiritualists speculate that the Abyssal energies pervasive throughout the Worldwound have altered the planar structure of the region in such a way that in very rare cases, typically among the strong-willed, some souls instinctively react as if were on an Outer Plane already and never depart for the Boneyard. These are the fallen. The fallen are spontaneously created, and are similar to ghosts but for one crucial difference-the fallen have no remaining unfinished business to tie them to the Material Plane aside from receiving a proper burial. Like many other types of undead, the fallen have an aversion to sunlight. They are incapable of becoming corporeal, but can open and close doors, hurl objects, and otherwise manifest their displeasure through the use of telekinesis, and their ghostly weapons still strike true and deal damage since they are made of force. A fallen can even shroud itself in darkness so tangible that most demons cannot penetrate it. When funeral rites are conducted upon the place where they died, the infusion of positive energy scours away the Abyssal taint. This localized restoration of the natural cosmological order allows the soul of the fallen to escape to the Great Beyond and thus receive judgment. Though they were crusaders in life, fallen typically avoid the demons of the Worldwound unless they happen upon an injured or distracted one. Their shame at dying by demonic claws and their tortured existence hinders their ability to strike at the demons in their current state. When fallen encounter mortals, they typically plead for release from their condition through burial. They don't give the mortals much time to decide for themselves, instead using their abilities to compel the mortals into service-or slaying them in anger and frustration. Habitat & Society The fallen desire nothing but release from the Material Plane. Existence is agony and horror for the fallen, a state that they cannot end themselves. They are not evil for evil's sake, but their situation fills them with uncontrollable rage and they cannot help but resent the living and act selfishly to end their plight. Some fallen lie to would-be rescuers, promising to reveal great treasure near the place they died. Others attack outright if not helped, take hostages, or threaten reprisals against family members or other innocents. That the Worldwound is too dangerous for most adventurers is inconsequential to them-for when did the fallen ever waver when duty called? Some simply go mad and cannot be reasoned with. The most tragic and desperate of the fallen are those that cannot remember where they died. Their dark nature notwithstanding, the fallen understand enough about the reality of their situation to call upon clerics and paladins to help them. They can manage to hold back their rage in these situations and refrain from attacking the one who can help end their plight, but this doesn't stop them from attacking a cleric's companions. Likewise, the fallen do not hinder those affected by their curse of the unburied ability.",
    organization: "solitary, squad (2-6), or platoon (7-16)",
    languages: "Common",
    spellLikeAbilities: [
      {
        name: "deeper darkness",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "telekinesis",
        casterLevel: 12,
        timesPerDay: 3
      }
    ],
    skills: {
      Fly: {
        ranks: 0
      },
      Intimidate: {
        ranks: 11
      },
      "Knowledge (religion)": {
        ranks: 6
      },
      Perception: {
        ranks: 11
      },
      Ride: {
        ranks: 7
      },
      "Sense Motive": {
        ranks: 9
      },
      Survival: {
        ranks: 10
      }
    },
    special: {
      "agent of despair": {
        type: "Su",
        text: "A fallen's attacks can weaken a creature's resolve. Any creature that takes damage from a fallen's attacks must succeed at a DC 19 Will save or take a -4 penalty on saving throws against fear. If a creature that has immunity to fear fails this saving throw, its immunity is temporarily suppressed. This effect lasts as long as a creature still suffers damage taken from a fallen's attacks. This effect is removed if the creature is healed of all damage inflicted by a fallen. The save DC is Charisma-based."
      },
      "curse of the unburied": {
        type: "Su",
        text: "Once per day, a fallen can demand that a good-aligned cleric, paladin, or cleric whose deity is opposed to the creation of undead locate its remains and perform a funeral for it on holy ground (through specific use of consecrate or hallow). The target must succeed at a DC 19 Will save or take a -2 penalty to each of its ability scores. Each day, the target can attempt a new saving throw; success keeps the target from accruing an additional -2 penalty to each of its ability scores. No ability score can be reduced below 1 by this effect. The ability score penalties are removed immediately upon completing the funeral rites for the fallen. The target does not need to complete the rites personally, but it is responsible for seeing that they're carried out. The save DC is Charisma-based."
      },
      "phantom armaments": {
        type: "Su",
        text: "A fallen possesses a semblance of the gear it carried in life. A fallen's weapons and armor are formed of force, allowing the fallen to make physical attacks and wear protective armor. Though solid and formed of force, this gear cannot be disarmed or removed from the fallen. Arrows fired from the fallen's longbow vanish after dealing damage to their target."
      },
      "touch of the grave": {
        type: "Su",
        text: "All of a fallen's melee and ranged attacks deal an additional 2d6 points of negative energy damage."
      },
      "channel resistance": {
        universalMonsterAbility: "Channel Resistance",
        bonus: 4
      },
      rejuvenation: {
        type: "Su",
        text: "A fallen is tied to the place where it fell in battle or the location where its remains were dragged after it fell in combat. Unless slain permanently, it reforms there 2d4 days later. A fallen is permanently destroyed and its soul is released when funeral rites lasting at least 1 minute are performed on its remains while on consecrated or hallowed ground."
      }
    },
    resistances: [
      {
        damageType: "acid",
        value: 5
      },
      {
        damageType: "fire",
        value: 5
      }
    ]
  },

};
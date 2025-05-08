
export const Book_Of_The_DamnedCreatures = {
  "Apostate Devil": {
    source: "Book Of The Damned",
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
    size: "Medium",
    hd: 18,
    hdVal: 10,
    cr: 17,
    racialFeatures: [
      "Darkvision 60 ft.",
      "See in Darkness"
    ],
    speed: {
      base: 30,
      maneuverability: "Perfect",
      fly: 30
    },
    abilities: {
      str: 28,
      dex: 31,
      con: 28,
      int: 21,
      wis: 24,
      cha: 28
    },
    feats: [
      {
        name: "Agile Maneuvers",
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
        name: "Improved Critical",
        type: "Combat",
        value: "Claw",
        choiceSource: "Improved Critical"
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
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Persuasive",
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
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        bonuses: [
          {
            source: "inherent",
            value: "1d6",
            appliesTo: "damageType",
            damageType: "wisdom drain"
          }
        ],
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "good and silver"
      },
      SR: {
        value: 27
      },
      naturalArmor: 12
    },
    space: "5 ft.",
    reach: "10 ft.",
    environment: "Hell",
    visualDescription: "Armored in the ceremonial garb of some grim knight, this figure stands unnaturally still, though the intricate metalwork patterns of its sculpted mantle writhe and shift as if alive. Claws the length of longswords extend from its armored fingers in razor-sharp fans, and no head or helm rests upon its ironclad shoulders. Instead, there hovers only a plain mask, an unnatural facade devoid of all empathy, emotion, or mercy.",
    description: "Regal, fearsome, and unfeeling, deimaviggas seek to turn the faithful from their gods, using cold logic to proselytize the path of atheism, the freedom of the mortal spirit, and the order offered by Hell. Their slowly ever-shifting masks speak envenomed words and imply the hollow nature of their lies. Speaking out against all deities-except for Asmodeus, whom they subtly tout as a bringer of discipline even as they downplay his divinity-these deadly intellectuals know that those who turn from their deities are more likely to succumb to the temptations of their diabolical brethren. Rather than attempting to sway the souls of individual mortals, these cunning fiends take on the roles of prophets of reason, disguising themselves beneath layers of illusion to evangelize the virtues and freedoms of lives unshackled from demanding deities. Occasionally one might focus its arguments on a soul of particular piety, delighting in throwing deities' most devoted servants into endless crises of faith. Deimaviggas care little for what gods their depredations affect, disenfranchising the worshipers of the divine and the profane alike. In their natural shapes, deimaviggas stand 7 feet tall and weigh a mere 120 pounds. When disguised, though, they typically take the forms of wise old men, priests who have \"realized their folly,\" and even \"angels\" of truth. Habitat & Society Deimaviggas prefer to spend their time upon the Material Plane, swaying the weak and corruptible souls of mortals. There they seek out either vast mortal cities, where their heresy might reach many ears, or small communities where the isolated might fall to their blasphemous philosophizing. When in Hell, though, they linger in Caina, tormenting the souls of those trapped upon its lonely islands, developing and testing complicated and often confusing arguments. Preferring to operate alone, these poison-tongued devils rarely work with others of their kind, even though their status as greater devils affords them great control over their lesser brethren. They find their arguments benefit from simplicity, their endeavors complicated by even the most obedient minions. Pit fiends and infernal dukes sometimes utilize deimaviggas as spies and spreaders of dissension and confusion, though even among devilkind these enigmatic fiends are considered strange and unnerving.",
    organization: "solitary",
    languages: "Abyssal, Celestial, Common, Draconic, Infernal; indomitable oration, telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "alter self",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "dream",
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
        name: "major image",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "mirage arcana",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "blasphemy",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "dominate person",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "hold monster",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "insanity",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "touch of idiocy",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "veil",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "mind fog",
        casterLevel: 18,
        timesPerDay: 1
      },
      {
        name: "screen",
        casterLevel: 18,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 18
      },
      Bluff: {
        ranks: 18
      },
      Diplomacy: {
        ranks: 21
      },
      Disguise: {
        ranks: 18
      },
      Fly: {
        ranks: 0
      },
      Intimidate: {
        ranks: 21
      },
      "Knowledge (history)": {
        ranks: 21
      },
      "Knowledge (planes)": {
        ranks: 18
      },
      "Knowledge (religion)": {
        ranks: 21
      },
      Perception: {
        ranks: 18
      },
      "Sense Motive": {
        ranks: 18
      },
      Stealth: {
        ranks: 15
      }
    },
    special: {
      "boundless reach": {
        type: "Su",
        text: "A deimavigga's claws slice through reality, allowing it to make melee attacks against any creature it is aware of-typically meaning creatures within 100 feet. The devil still only threatens the 10-foot area around it and it cannot make attacks of opportunity against creatures farther away. This ability can span vast distances, allowing a deimavigga making use of divination magic to detect distant creatures and attack foes separated by miles or even planes. Spells like forbiddance, which prevent planar travel, also protect against a deimavigga's claws. The spell dimensional anchor also prevents a deimavigga from using this ability for the duration of that spell. An attacked creature can retaliate that round, striking at the devil's claws with weapons or spells as if its entire body were present, but cannot grapple or otherwise prevent the claws from vanishing out of reach at the end of the round."
      },
      ohrwurm: {
        type: "Ex",
        text: "As a standard action, three times per day, a deimavigga can whisper a fundamental and terrifying multiversal truth to one creature within 5 feet. The target must make a DC 28 Will save or have the devil's words take root in its psyche. Outsiders and elementals have a +2 bonus on their saves to resist this ability. Initially, the deimavigga's words seem to have no effect. Anytime the victim tries to rest, though, he must make an additional DC 28 Will save or be affected as per the spell nightmare (even if the victim doesn't technically sleep). After a night of suffering vivid dreams and wrestling with the devil's words, the victim must make yet another DC 28 Will save or have its alignment shift one step toward lawful evil. Only by unlearning what the deimavigga told it can a victim be free of this effect, requiring a spell such as miracle, modify memory, or wish."
      },
      "summon devil": {
        type: "Sp",
        text: "Once per day a deimavigga can attempt to summon 1d6 osyluths or 2d4 barbazu with a 50% chance of success, or 1 gelugon with a 20% chance of success. This ability is the equivalent of an 8th-level spell. Wisdom Drain (Su) A deimavigga drains 1d6 points of Wisdom each time it hits with its claw attack. (A deimavigga does not heal any damage when it uses its Wisdom drain.)"
      },
      evangelization: {
        type: "Su",
        text: "The words of deimaviggas are poison to the mind. Every round a deimavigga speaks (a free action), all non-devils with an Intelligence score of 3 or higher within 30 feet must make a DC 28 Will save or become vulnerable to its blasphemous discourse. The DC of this Will save increases by +1 for each consecutive round a creature has listened to the same deimavigga speak. Creatures must be listening to a deimavigga to be affected by its oration. Deafened creatures and those in combat-either with the deimavigga or other creatures-are not considered to be listening. Victims cannot simply declare they are not listening without taking steps to impede their hearing. Upon failing this save, a victim can be affected by the heretical power of a deimavigga's words. The devil may use its speech to affect a listener in ways that mimic any of the following spells: calm emotions (DC 21), charm monster (DC 23), command (DC 20), confusion (DC 23), crushing despair (DC 23), deep slumber (DC 22), enthrall (DC 21), modify memory (DC 23), rage (DC 22), or suggestion (DC 22). Victims still receive saving throws against these spell effects, but if they fail their saves they are not aware the devil is working its power upon them. A deimavigga can affect multiple victims with different spell effects in the same round. A creature that makes its save against this ability is immune to that particular devil's evangelization for the next 24 hours. This is a sonic mind-affecting effect. The base save DC is Charisma-based."
      },
      "indomitable oration": {
        type: "Su",
        text: "A deimavigga's speech is always perfectly clear and cannot be silenced or warped. In areas of incredible noise, through water or airless voids, even in areas of magical silence, these devil's voices can still be heard normally. All beings understand deimaviggas, as if these devils constantly spoke in all tongues at once."
      },
      "malleable form": {
        type: "Su",
        text: "A deimavigga has complete control over its physical form, and if transformed into another shape against its will, it can revert to its own form as a free action."
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        value: 5
      }
    }
  },

  "Heresy Devil": {
    source: "Book Of The Damned",
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
    hd: 13,
    hdVal: 10,
    cr: 12,
    racialFeatures: [
      "Darkvision 60 ft.",
      "See in Darkness"
    ],
    speed: {
      base: 10,
      maneuverability: "Perfect",
      fly: 40
    },
    abilities: {
      str: 24,
      dex: 8,
      con: 24,
      int: 22,
      wis: 21,
      cha: 20
    },
    feats: [
      {
        name: "Diehard",
        type: "General"
      },
      {
        name: "Endurance",
        type: "General"
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
        name: "Persuasive",
        type: "General"
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
      },
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Searing word",
        name: "Searing word",
        specialAbility: "Searing word",
        damage: "3d6"
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "good"
      },
      SR: {
        value: 22
      },
      naturalArmor: 18
    },
    space: "15 ft.",
    reach: "5 ft.",
    environment: "Hell",
    visualDescription: "Seemingly fused with a monstrous throne of iron skulls, this impossibly corpulent being floats several feet off the ground. Trappings cut in mockery of holy vestments do little to cover the thing's pallid, leaking rolls of blister-pocked girth. Worthless, clublike hands waggle like maggots, directing a cloud of weathered scrolls and blasphemous tomes that orbit its bulk. Barely distinguishable amid its mound of chins squints a pair of glassy black eyes, riding above a disproportionately wide mouth curled into a perpetually lecherous grin.",
    description: "Bloated scholars of despair, ayngavhauls collect, create, and spread heresies and apocrypha, sowing disbelief and corruption to all who would seek their foul wisdom. Ironically among the most humanlike, yet still most repulsive breeds of devilkind, these corpulent blasphemers are barely even able to move without the aid of their profane floating thrones. Although their bloated forms make them considerably less of a threat than their brethren physically, they speak maledictions foul enough to agonize those who hear them, yet even with such powers of vicious wisdom, their true strength lies in their envenomed words and temptations of the mind. Their centuries of research grant them great leverage over their diabolical kin, and few devils dare not obey the summons of these hellish scholars. Ayngavhauls are roughly ovular in form, their def lated girths about 10 feet tall with their rolls of wet gristle spreading over 13 feet wide. Off their thrones, these devils weigh approximately 2,300 pounds, though the eldest can weigh considerably more. Ecology Ayngavhauls' bloated girths make them slaves to their repulsive physical forms. All ayngavhauls, even the newly formed, are monstrously obese, trapped within prisons of their own leaking, diabolical flesh. To aid them, though, the forges of Phlegethon create terrifying thrones empowered by infernal magics. These foul chariots hold their corpulent masters aloft, serving as both vehicles and sources of profane protection. Each throne of skulls is bound to a specific ayngavhaul, dissolving into a pile of ashes and a breath of searing iron dust should its master be destroyed. Habitat & Society The majority of ayngavhuals frequent the grim libraries of Hell, particularly the mired museums of Stygia; the Fallen Fastness of Dis; and Betzebbul, the palace of Baalzebul, in Cocytus. Within these heretical storehouses and academies of evil, these grotesque devils rewrite the histories of countless worlds to obscure truths and skew the past toward the desires of Hell. Grotesque curators of a sort, individual ayngavhauls take great pride in specializing in fields none of their brethren have ever thought to focus their studies upon-the more obscure and blasphemous, the better. Thus, while one devil might spend eons learning all there is to know of linnorm frost poisons, another might research the nuances of Azlanti voice tearing. Each seeks to promote its particular field of research above all others, sowing its knowledge among their blasphemous works, minions, and summoners who might put such foul wisdom to the most sinister uses. They prove incessantly paranoid that the works of their brethren might be outstripping their own discoveries, or that others in related fields might be stealing their research, thus proving both suspicious of their kindred and intimately familiar with the works of other infernal scholars. As such, a single ayngavhaul might begrudgingly point a summoner in search of specific information toward a diabolical expert, though these knowledge-obsessed fiends never reveal their secrets without demanding a price.",
    organization: "solitary, pair, or lecture (3-8)",
    languages: "Abyssal, Celestial, Draconic, Infernal",
    spellLikeAbilities: [
      {
        name: "deathwatch",
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
        name: "illusory script",
        casterLevel: 13,
        timesPerDay: -1
      },
      {
        name: "mage hand",
        casterLevel: 13,
        timesPerDay: -1
      },
      {
        name: "major image",
        casterLevel: 13,
        timesPerDay: -1
      },
      {
        name: "message",
        casterLevel: 13,
        timesPerDay: -1
      },
      {
        name: "contagion",
        casterLevel: 13,
        timesPerDay: 3
      },
      {
        name: "deeper darkness",
        casterLevel: 13,
        timesPerDay: 3
      },
      {
        name: "dispel good",
        casterLevel: 13,
        timesPerDay: 3
      },
      {
        name: "dispel magic",
        casterLevel: 13,
        timesPerDay: 3
      },
      {
        name: "invisibility purge",
        casterLevel: 13,
        timesPerDay: 3
      },
      {
        name: "magic circle against good",
        casterLevel: 13,
        timesPerDay: 3
      },
      {
        name: "speak with dead",
        casterLevel: 13,
        timesPerDay: 3
      },
      {
        name: "telekinesis",
        casterLevel: 13,
        timesPerDay: 3
      },
      {
        name: "stinking cloud",
        casterLevel: 13,
        timesPerDay: 3
      },
      {
        name: "summon monster v",
        casterLevel: 13,
        timesPerDay: 3
      },
      {
        name: "unholy blight",
        casterLevel: 13,
        timesPerDay: 3
      },
      {
        name: "zone of silence",
        casterLevel: 13,
        timesPerDay: 3
      },
      {
        name: "blasphemy",
        casterLevel: 13,
        timesPerDay: 1
      },
      {
        name: "legend lore",
        casterLevel: 13,
        timesPerDay: 1
      },
      {
        name: "mislead",
        casterLevel: 13,
        timesPerDay: 1
      },
      {
        name: "unhallow",
        casterLevel: 13,
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 13
      },
      Diplomacy: {
        ranks: 16
      },
      Fly: {
        ranks: 0
      },
      Intimidate: {
        ranks: 10
      },
      "Knowledge (arcana)": {
        ranks: 16
      },
      "Knowledge (history)": {
        ranks: 13
      },
      "Knowledge (planes)": {
        ranks: 13
      },
      "Knowledge (religion)": {
        ranks: 16
      },
      Perception: {
        ranks: 13
      },
      Perform0: {
        subSkill: "oratory",
        ranks: 13
      },
      Profession0: {
        subSkill: "librarian",
        ranks: 5
      },
      "Sense Motive": {
        ranks: 13
      },
      Spellcraft: {
        ranks: 16
      }
    },
    special: {
      "blasphemous bile": {
        type: "Su",
        text: "30-ft. line, once every 1d4 hours; damage 4d6 acid, Reflex DC 23 half. Those struck by this bile find themselves drenched in liquid corruption so profound it impedes the power of non-evil divine magic for 10 minutes. Any non-evil divine spellcaster who casts a spell targeting a creature soaked in an ayngavhaul's bile must make a DC 23 caster level check or have the spell fail. A creature affected by this bile may wash off the sludge by spending a round and using at least a gallon of fluid to cleanse itself. The save DC is Constitution-based."
      },
      "summon devil": {
        type: "Sp",
        text: "Once per day an ayngavhaul can attempt to summon 2d6 imps, 1d4 bearded devils, or 2 bone devils with an 80% chance of success, or a contract devil (see Pathfinder Adventure Path volume #12) with a 45% chance of success. This ability is the equivalent of a 6th-level spell."
      },
      corpulence: {
        type: "Ex",
        text: "Ayngavhauls are greasy and grossly obese. This extraordinary bulk provides them with a +10 bonus on their combat maneuver defense."
      },
      "devil summoner": {
        type: "Su",
        text: "Ayngavhauls know the secrets of all breeds of devils, utilizing such leverage in the summoning of their kind. Any devil within 30 feet of an ayngavhaul has half again the normal chance of having a fiend respond to its summon devil ability. For example, an osyluth's usual 35% chance to summon another bone devil increases to 52% when within 30 feet of an ayngavhaul. Summoning bonuses provided by multiple ayngavahuls do not stack. Ayngavahuls are immune to this ability, from both themselves and others of their kind."
      },
      "throne of skulls": {
        type: "Su",
        text: "All ayngavhauls hover upon fearsome infernal thrones. These thrones grant the devils their fly speed and a +4 armor bonus. Should an ayngavhaul be grappled or knocked down, it is unseated from its throne and loses these benefits. An ayngavhaul has telepathic command over its throne and may call its conveyance back and reseat itself as a full-round action."
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        value: null
      },
      "searing word": {
        type: "Su",
        text: "An ayngavhaul can speak words of torment, giving them shape and sending them streaking toward their enemies in the form of diabolical sigils. Any good-aligned creature struck by one of these infernal words takes 3d6 points of hellfire damage (half fire, half evil energy); nongood creatures take half damage. These words cannot affect creatures affected by protection from evil or within an area of magical silence."
      }
    }
  },

  "Lesser Host Devil": {
    source: "Book Of The Damned",
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
    size: "Small",
    hd: 4,
    hdVal: 10,
    cr: 3,
    racialFeatures: [
      "Darkvision 60 ft.",
      "See in Darkness"
    ],
    speed: {
      base: 5,
      maneuverability: "Good",
      fly: 60
    },
    abilities: {
      str: 13,
      dex: 17,
      con: 14,
      int: 7,
      wis: 9,
      cha: 8
    },
    feats: [
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Hover",
        type: "Monster"
      }
    ],
    attacks: [
      {
        weapon: "Spear",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "Spear",
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
        value: 5,
        damageType: "good"
      },
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "Hell",
    visualDescription: "This tangle of scaly avian limbs furiously beats its double pair of vulture-like wings, keeping its fiendish, horned skull-head aloft. As fetid breath rises from its repulsive, fly-covered visage, clawed arms work together to slash the air with a vicious-looking spear.",
    description: "Hunters of souls, host devils retrieve Hell's most elusive property. Whether souls that have long evaded capture upon the plains of Avernus, damned beings who have somehow managed to escape Hell, or creatures that have reneged upon infernal contracts, vast flocks of these winged fiends swarm from the Pit to recover their prey. Rarely seen alone, host devils travel in great swarms that often number in the thousands. Amid these great hosts flap the swarm leaders, the magaav, fierce mockeries of the angelic form capable of directing and redirecting massive columns of their brethren like the brain of a single colossal infernal beast. Gaavs stand 4 feet tall and weigh approximately 110 pounds, their wingspans stretching to just over 6 feet wide. Magaavs stand 5-1/2 feet tall and weigh 150 pounds, with wingspans reaching 10 feet across.",
    organization: "solitary or flock (2d4)",
    languages: "Infernal; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "dancing lights",
        casterLevel: 4,
        timesPerDay: -1
      },
      {
        name: "detect magic",
        casterLevel: 4,
        timesPerDay: -1
      },
      {
        name: "teleport, greater",
        casterLevel: 4,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: -1
      },
      {
        name: "mage hand",
        casterLevel: 4,
        timesPerDay: -1
      },
      {
        name: "ventriloquism",
        casterLevel: 4,
        timesPerDay: -1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 18
      },
      "Escape Artist": {
        ranks: 6
      },
      Fly: {
        ranks: 2
      },
      Perception: {
        ranks: 4
      },
      Stealth: {
        ranks: 3
      }
    },
    special: {
      "noxious breath": {
        type: "Su",
        text: "Three times per day, a gaav can exhale a breath that reeks of pure corruption upon a creature within 5 feet. The target must make a DC 14 Fortitude save or be sickened for 1d4 rounds. The save DC is Constitution-based. Creatures that successfully save cannot be affected by the same gaav's noxious breath for 24 hours. A delay poison or neutralize poison spell removes the effect from the sickened creature. Creatures with immunity to poison are unaffected, and creatures resistant to poison receive their normal bonus on their saving throws. Once a gaav uses its breath weapon, it can't breathe again until 1d4 rounds later."
      },
      "summon devil": {
        type: "Su",
        text: "Once per day a gaav can attempt to summon an imp with a 35% chance of success. This ability is the equivalent of a 3rd-level spell."
      },
      "superior grappler": {
        type: "Ex",
        text: "A gaav can wield a weapon and still make grapple checks. If it's not wielding a weapon, a gaav gains a +4 bonus on grapple checks. In addition, it takes up to eight gaavs cooperatively to lift a creature that one or more of them is grappling; each gaav can lift up to 50 pounds and still fly without being impeded."
      },
      "shared senses": {
        type: "Su",
        text: "All gaavs and magaavs within 100 feet of one another share the same senses. Thus, if one individual perceives something (for example, with a successful Perception check), all others within range are immediately aware of it. Senses are instantly relayed from one gaav or magaav to the next, allowing for the senses of a single devil to potentially spread through and inform an entire massive swarm instantly. It is still possible for a gaav to be surprised or flat-footed even if other gaavs nearby are not."
      },
      swarming: {
        type: "Ex",
        text: "Up to two gaavs can share the same space at the same time. If two gaavs in the same square attack the same foe, they are considered to be flanking that foe as if they were in two opposite squares."
      }
    }
  },

  "Greater Host Devil": {
    source: "Book Of The Damned",
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
    size: "Medium",
    hd: 7,
    hdVal: 10,
    cr: 6,
    racialFeatures: [
      "Darkvision 60 ft.",
      "See in Darkness"
    ],
    speed: {
      base: 20,
      maneuverability: "Average",
      fly: 50
    },
    abilities: {
      str: 18,
      dex: 19,
      con: 16,
      int: 10,
      wis: 12,
      cha: 11
    },
    feats: [
      {
        name: "Combat Reflexes",
        type: "Combat"
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
        name: "Hover",
        type: "Monster"
      }
    ],
    attacks: [
      {
        weapon: "Ranseur",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "Ranseur",
        damage: "2d4"
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
        value: 5,
        damageType: "good"
      },
      SR: {
        value: 17
      },
      naturalArmor: 8
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "Hell",
    visualDescription: "Twin pairs of mangy, disease-riddled vulture wings flap in concert, keeping this lean raptor fiend aloft. Twisted horns rise from a head like a monstrous skull and noxious fumes leak from between its yellowed fangs. Hovering with impossible control, its vicious foottalons clench and unclench, while its clawed hands wield a long, three-pointed ranseur.",
    description: "Hunters of souls, host devils retrieve Hell's most elusive property. Whether souls that have long evaded capture upon the plains of Avernus, damned beings who have somehow managed to escape Hell, or creatures that have reneged upon infernal contracts, vast flocks of these winged fiends swarm from the Pit to recover their prey. Rarely seen alone, host devils travel in great swarms that often number in the thousands. Amid these great hosts flap the swarm leaders, the magaav, fierce mockeries of the angelic form capable of directing and redirecting massive columns of their brethren like the brain of a single colossal infernal beast. Gaavs stand 4 feet tall and weigh approximately 110 pounds, their wingspans stretching to just over 6 feet wide. Magaavs stand 5-1/2 feet tall and weigh 150 pounds, with wingspans reaching 10 feet across.",
    organization: "solitary, pair, flock (1 magaav and 2d6 gaav)",
    languages: "Celestial, Draconic, Infernal; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "teleport, greater",
        casterLevel: 12,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: -1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 14
      },
      "Escape Artist": {
        ranks: 10
      },
      Fly: {
        ranks: 10
      },
      Intimidate: {
        ranks: 10
      },
      Perception: {
        ranks: 7
      },
      Stealth: {
        ranks: 7
      }
    },
    special: {
      "infernal wound": {
        type: "Ex",
        text: "The damage a magaav deals with its claws or rend causes a persistent wound. An injured creature loses 1 additional hit point each round. The wound does not heal naturally and resists healing spells. The continuing hit point loss can be stopped by a DC 16 Heal check or any spell that cures hit point damage; casting a curative spell on the injured creature requires a successful DC 15 caster level check, otherwise the spell has no effect. The check DC is Constitution-based."
      },
      "noxious breath": {
        type: "Su",
        text: "Three times per day, a magaav can exhale a breath that reeks of pure corruption upon a creature within 5 feet. The target must make a DC 16 Fortitude save or be sickened for 1d4 rounds. The save DC is Constitutionbased. Creatures that successfully save cannot be affected by the same magaav's noxious breath for 24 hours. A delay poison or neutralize poison spell removes the effect from the sickened creature. Creatures with immunity to poison are unaffected, and creatures resistant to poison receive their normal bonuses on their saving throws. Once a magaav uses its breath weapon, it can't breathe again until 1d4 rounds later."
      },
      rend: {
        universalMonsterAbility: "Rend",
        type: "Ex",
        weaponName: 1
      },
      "summon devil": {
        type: "Su",
        text: "Once per day a magaav can attempt to summon 1d2 gaavs with a 60% chance of success. This ability is the equivalent of a 3rd-level spell."
      },
      "master grappler": {
        type: "Ex",
        text: "A magaav can wield a weapon and still make grapple checks. If it's not wielding a weapon, a magaav gains a +4 bonus on grapple checks."
      },
      "shared senses": {
        type: "Su",
        text: "All gaavs (and magaavs) within 100 feet of one another share the same senses. Thus, if one individual perceives something (for example, with a successful Perception check), all others within range are immediately aware of it. Senses are instantly relayed from one gaav or magaav to the next, allowing for the senses of a single devil to potentially spread through and inform an entire massive swarm instantly. It is still possible for a magaav to be surprised or flat-footed even if other gaavs or magaavs nearby are not. All magaavs may telepathically communicate with all other gaavs and magaavs within 100 feet at once, allowing the greater host devils to command entire swarms. Although magaavs rarely contradict one another, if faced with competing orders, gaavs follow the commands of the closest magaav."
      }
    }
  },

  "Warmonger Devil": {
    source: "Book Of The Damned",
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
    size: "Large",
    hd: 8,
    hdVal: 10,
    cr: 7,
    racialFeatures: [
      "Darkvision 60 ft.",
      "See in Darkness"
    ],
    speed: {
      base: 40,
      climb: 40
    },
    abilities: {
      str: 20,
      dex: 17,
      con: 19,
      int: 14,
      wis: 16,
      cha: 15
    },
    feats: [
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
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
        weapon: "Trident",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "Trident",
        damage: "1d8"
      },
      {
        weapon: "Leg",
        name: "2 Legs",
        damage: "1d8"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Trident",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "Trident",
        damage: "1d8"
      },
      {
        weapon: "Net",
        qualities: [
          "ranged touch"
        ],
        name: "Net",
        damage: ""
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "good"
      },
      SR: {
        value: 12
      },
      naturalArmor: 10
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "Hell",
    visualDescription: "Armored like an infernal knight upon some monstrous steed, this fiend of iron and nails scuttles upon six heavy, bladed, beetle-like legs. Its body seems to be nothing more than plates upon hulking plates of dark metal, each pierced through with gleaming spikes studded with the gruesome trophies of past massacres. In one clawed gauntlet it grips a long, twisted trident, while in the other it readies a thick net woven with fiendish barbs.",
    description: "Fearsome giants of steel and blades, levalochs serve within the armies of archdevils and infernal dukes as potent warriors and tenacious hunters, creatures of absolute discipline endlessly obedient to diabolical tyrants. Renowned for their skill on Hell's battlefields, these fearsome soldiers excel in moving swiftly over the broken landscapes that typify the nine layers of the Pit, hunting down intruders and seeking out errant souls wherever they might flee. En masse, the armored clanking of obedient and watchful infantry sound like the workings of great machines as levaloch hosts man Hell's ramparts, from the Iron Fortresses of Avernus to the walls of Ashtart. Levalochs possess consistent forms, each resembling all others of their kind in general shape and size, though each devil's armor proves distinctive. Some claim that the arrangement of a levaloch's spikes, horns, blades, or other iron-shod embellishments might reveal what layer of Hell or infernal noble spawned the devil, though few have the time to ponder such concerns as one of these razor-legged legionaries rages forward. With little variation, levalochs stand just over 10 feet tall and weigh almost exactly 1 ton. Ecology Levalochs blur the line between devil and automaton. While created from the souls of the damned and the profane energies of Hell, these fiends live only to obey their masters and, upon their home plane, seemingly possess little will or ambition beyond such obedience. Requiring no food or rest, a levaloch sentinel might hold its post, completely motionless, for centuries, collecting ages of dust without complaint as it awaits orders that might never come. While intelligent, these devils prove fanatically devoted to the causes of their masters, the archdevils, Asmodeus, and Hell itself, drawing on ingrained wells of discipline and faith to mete out the greater will of their overlords. Levalochs are highly prized throughout the Pit for this discipline, held up as epitomes of diabolical warriors second only to the ferocious cornugons, and pointed to throughout the planes as embodiments of the soldier's ideal. Yet this discipline only persists while levalochs remain under orders from more powerful devils. Left to their own devices, each levaloch fancies itself a tyrant by its own right and relishes the opportunity to promote conf lict and bloodshed through petty mortal angst and grudges. While all devils possess anatomies that perpetually baff le mortal scholars, levalochs prove even more enigmatic, having no internal physiology at all. Being little more than living suits of blasphemous chitin and Hell-forged armor, these fiends lack all weaknesses of even infernal flesh and blood, while retaining all of the potent resistances common to their diabolical kin. A levaloch's sentience seems to linger within its armored shell, remaining until that exoskeleton proves too damaged to contain an animating spirit any longer. Should a levaloch's armor be destroyed, the plates of metal and carapace fall to pieces and quickly corrode, revealing nothing more than the strong scent of pitch within. Despite their unusual anatomy, levalochs are still thinking, even cunning creatures. The fiendish intelligences housed within these ironclad horrors cause some sages to draw frightening parallels between levalochs and the profane soul-bound armors of the infamous undead graveknights. Habitat & Society Commonly found upon the first and sixth layers of Hell and amid the outlying fortresses of Dis, levalochs muster in the service of the Pit's most martial tyrants. Most know only their orders, following their masters' commands to the letter, disregarding all things that fall outside of their purview-at least until such things threaten their masters' holdings or themselves. Intruders within infernal citadels sometimes find themselves unchallenged as they wander vast halls watched over by whole platoons of posted, idle levalochs, only to be attacked unexpectedly upon encountering those specifically commanded to stand sentry. These fiends hold to their orders not out of dull-wittedness, but out of obsessive obedience to the rule of Hell, as proven by their murderous cunning in battle. On the rare occasions levalochs find themselves left to their own devices, the true intellect of these armored terrors becomes apparent. Capable of shocking changes in personality, a levaloch that might not have spoken a word in its entire existence might prove shrewd and subtle when it finds itself upon the Material Plane, stirring old angers, forging Hellish weaponry, even training mortal warriors in a strategic game of warmongering and open campaigning, all encouraging bloodshed in the name of Hell. They despise the weakness of emotion and the changeability of mortal minds. Thus, they delight in testing themselves against mortal flesh, indulging in massacres and encouraging genocides against such weak, worthless creatures whenever their plots might gain even the slightest benefit from such atrocities. Such pride rarely proves the undoing of levalochs, though, as these armored fiends treat every battle as a chance to hone their impressive skills and give foes-regardless of race-no quarter.",
    organization: "solitary, pair, or troop (3-18)",
    languages: "Celestial, Draconic, Infernal; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "teleport, greater",
        casterLevel: 12,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: -1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 7
      },
      Bluff: {
        ranks: 8
      },
      Climb: {
        ranks: 4
      },
      Craft0: {
        subSkill: "weapons",
        ranks: 4
      },
      Intimidate: {
        ranks: 11
      },
      "Knowledge (dungeoneering)": {
        ranks: 7
      },
      "Knowledge (engineering)": {
        ranks: 7
      },
      "Knowledge (planes)": {
        ranks: 8
      },
      Perception: {
        ranks: 10
      },
      Stealth: {
        ranks: 10
      }
    },
    special: {
      "merciless blow": {
        type: "Su",
        text: "Levalochs show no mercy to the vulnerable. Any trident attacks they make against entangled creatures (including those entangled by its net) deal an extra 2d6 points damage."
      },
      "summon devil": {
        type: "Sp",
        text: "Once per day a levaloch can attempt to summon 1d4 lemures or 1 bearded devil with a 40% chance of success. This ability is the equivalent of a 4th-level spell. Skills Levalochs have a +2 racial bonus on Stealth and Perception checks. This Stealth bonus increases to +8 when a levaloch is concealed amid metal objects or debris."
      },
      trample: {
        universalMonsterAbility: "Trample",
        damage: "1d8+7",
        saveDC: 10
      },
      hellstrider: {
        type: "Su",
        text: "A levaloch is not impeded by rough terrain, and can move or charge through such squares as normal. It can also cross areas covered with deadly impediments (such as caltrops or thorns) without being damaged or hindered. In addition to being entirely immune to fire, the creature's legs are immune to acid and cold, allowing it to cross even rivers of acid or lava without being damaged or hindered as long as the material is less than 4 feet deep. This ability does not protect a levaloch against magical hindrances like black tentacles, web, or similar spells."
      },
      phalanx: {
        type: "Ex",
        text: "Devils gain a +1 morale bonus on attacks and to AC while adjacent to a levaloch."
      },
      stability: {
        universalMonsterAbility: "Stability"
      },
      "construct form": {
        name: ":",
        type: "Ex",
        text: " Despite being true devils, levalochs possess a number of immunities common to constructs, including immunity to ability damage, ability drain, death effects, death from massive damage, disease, energy drain, exhaustion, fatigue, necromancy effects, nonlethal damage, paralysis, sleep effects, and stunning. Upon being reduced to 0 hit points, they are immediately destroyed."
      }
    }
  },

};
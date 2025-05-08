
export const Curse_Of_The_Lady_s_LightCreatures = {
  Bogwid: {
    source: "Curse Of The Lady’s Light",
    creatureType: "aberration",
    subTypes: [],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Medium",
    hd: 5,
    hdVal: 8,
    cr: 5,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30,
      climb: 20,
      swim: 20
    },
    abilities: {
      str: 19,
      dex: 18,
      con: 18,
      int: 3,
      wis: 4,
      cha: 13
    },
    feats: [
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Stealthy",
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
        specialAbility: "nauseating touch",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Offspring",
        qualities: [
          "ranged touch"
        ],
        name: "Offspring",
        specialAbility: "disease",
        damage: "1d2"
      }
    ],
    defense: {
      naturalArmor: 5
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any swamps or underground",
    visualDescription: "This nightmare shambles along the ground on eight muscular tentacles that leave behind a clear viscous residue stinking of putrefaction. Its amphibian skin is moist, green-black, and covered in warts and protuberances. On its back, dozens of fist-sized pustules shift and pulsate with nauseating vitality, like sentient oily bubbles threatening to burst.",
    description: "Aberrant beasts of ancient origin, bogwids are loathsome, skulking predators that inhabit the gloomy swamps and damp subterranean places of the world. Looking like a bloated, eight-limbed, greenish-black mix of frog and tentacled beast, this asexual creature is most notorious for the larvae it carries on its back. Ecology Some scholars suggest the large, muscular body of the bogwid serves as little more than transport for its ravenous young-30 to 40 fist-sized, pustule-like protuberances that cling to its back, inf lating and def lating, shifting and quivering with disturbing vitality. The bogwid attacks with two of its undulating tentacles, the bottoms of which are lined with ragged, bony ridges that can tear hungrily into exposed flesh. However, the more disturbing danger is those pulsating orbs of flesh on its back: larvae that are capable of launching themselves as far as 10 feet and attaching to creatures with their fanged sucker mouths. Once one of these disgusting things sinks its jagged teeth into flesh, it begins sucking blood and does not release its grip until it or the target is dead. When a bogwid makes a kill, several of its young jump upon the warm carcass and feed greedily. If the victim is a Medium or larger creature, these rapacious larvae fight for the opportunity to burrow into the corpse. Over the course of 2 weeks, the burrowed creatures gestate, and the cadaver bloats until an adolescent bogwid (a bogwid with the young template) gruesomely bursts forth. The larger the kill, the more of the bogwid's young can burrow in and hatch out as adolescents; a Large victim can accommodate two larvae, a Huge victim four larvae, a Gargantuan victim eight larvae, and a Colossal victim 16 larvae. A creature smaller than Medium doesn't possess sufficient nutrition for bogwid larvae to gestate properly. As a result, adult bogwids tend to completely consume smaller kills instead of leaving them for the larvae. Bogwids that inhabit seaside haunts are not averse to eating carrion. Indeed, a sizable sea creature whose carcass washes ashore (a whale, for instance) is usually set upon by a nearby bogwid, whose ravenous larvae tunnel their way into the rotting flesh, and several days later erupt like a crawling, monstrous plague. In this way, large clutches of these foul beasts can come to infest coastal areas. The bogwid is generally nocturnal, though it is not unusual for one to hunt during the day if it has gone a long time without feeding. A bogwid hunts patiently, concealing itself well in its natural habitat by heaping sand, seaweed, vegetation, and other detritus onto its body. Though a bogwid possesses limited intelligence, its animal cunning allows it to employ natural hazards to its advantage, setting up ambushes that cleverly integrate drop-offs, natural pits, and quicksand. As these creatures are also able to climb, it is not uncommon for bogwids to roost on rocky overhangs or in large trees, dropping down on unsuspecting victims from above. Alchemists pay a significant price for the glands in bogwid tentacles that produce the foul, viscous liquid the creatures excrete. However, these glands are difficult to extract fully intact (DC 25 Heal check) and must be properly stored in water after removal. Appropriately dissected and transported, the glands fetch 25 gp apiece on the right market. Alchemists employ this putrid substance in various formulae to augment their effectiveness. Habitat & Society Though great numbers of bogwids take up residence in temperate, swampy, coastal regions and the damp caves that are sometimes found in such places, plenty of the creatures inhabit inland marshes as well. They have been known to adapt to warmer climes, but tropical bogwids are much rarer. The fetid creatures tend not to flourish near major settlements, even if those settlements are in close proximity to the bogwids' natural habitat. The reason is that the presence of a beast like this near a town strikes such revulsion and fear into a population that they quickly post sizable rewards for the destruction of the beast. Rangers who traverse marshes and wet caves eagerly seek out such lucrative bounties. Indeed, the fact that these monsters have not been hunted to extinction is a testimony to their revolting fecundity. As these creatures are asexual, bogwids also tend to be solitary, driving off gestated offspring soon after they reach maturity. Recently matured bogwids seek out their own territory. On the few occasions bogwid clutches form, they most often include a single adult accompanied by two to eight adolescents. These abhorrent creatures have a life expectancy of about 10 years. An older bogwid can be identified by its flesh, which becomes gray-green and increasingly dry as the creature ages. The larvae an older bogwid carries about eventually lead to its own downfall. In the end, the strongest of its young fight off weaker kin and burrow into the dying parent, exploding forth from the corpse in the usual manner 2 weeks later. A bogwid does not tolerate other major predators in its territory, hounding them relentlessly until such competitors are killed or find alternate homes for themselves. The bogwid is especially aggressive against crocodiles, which tend to be its chief rivals for prey in swampy regions. In fact, a telltale sign of a bogwid having laid a claim to territory is the discovery of a crocodile corpse lying on its back, the stomach bloated with gestating larvae or torn out as though something exploded from within, suggesting an adolescent bogwid is not far away.",
    organization: "solitary or clutch (1 adult plus 2-8 adolescents)",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 1
      },
      "Escape Artist": {
        ranks: 0
      },
      Perception: {
        ranks: 2
      },
      Stealth: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      "ravenous young": {
        type: "Ex",
        text: "Each round, a bogwid can launch one of the offspring clinging to its back at a target within 10 feet as a ranged touch attack. On a successful hit, the offspring attaches itself to the target and begins draining blood, automatically dealing 1d2 points of bleed damage each round (and possibly infecting the target with bogwid fever). As a full-round action, a creature can attempt to remove one of these offspring, either by bludgeoning it with a fist or pulling it off. Either way, removing an offspring kills the larval creature. Someone other than the target the offspring is attached to can also perform this action. Anyone using a weapon to kill or remove an attached offspring deals half of the damage to the creature to which the offspring is attached. A bogwid can launch up to 10 offspring per day before it must rest and gestate more larval young. Revolting Aura (Ex) The bogwid is both visually and odoriferously revolting. Any creature within 10 feet of a bogwid must succeed at a DC 16 Fortitude save or be sickened. This effect persists as long as the creature is within the aura and for 2 rounds thereafter. A creature that successfully saves is not subject to the same bogwid's revolting aura for 24 hours. The save DC is Constitution-based."
      },
      amphibious: {
        universalMonsterAbility: "Amphibious"
      },
      "revolting aura": {
        type: "Ex",
        text: "The bogwid is both visually and odoriferously revolting. Any creature within 10 feet of a bogwid must succeed at a DC 16 Fortitude save or be sickened. This effect persists as long as the creature is within the aura and for 2 rounds thereafter. A creature that successfully saves is not subject to the same bogwid's revolting aura for 24 hours. The save DC is Constitution-based.",
        preText: "10 ft., DC 13 Fort"
      },
      "nauseating touch": {
        type: "Ex",
        text: "The bogwid's touch is disgusting. Creatures hit by its slam attack must succeed at a DC 16 Fortitude save or be nauseated for 1 round. The save DC is Constitution-based."
      },
      disease: {
        universalMonsterAbility: "Disease",
        name: "Bogwid Fever",
        type: "Ex",
        text: "Bogwid Fever: Bite-injury; save Fort DC 16, onset 1 day, frequency 1/day, effect 1d2 Str damage and shaken, cure 2 consecutive saves. The DC save is Constitution-based."
      }
    },
    resistances: [
      {
        damageType: "acid",
        value: 5
      },
      {
        damageType: "cold",
        value: 5
      }
    ]
  },

  "Grand Defender": {
    source: "Curse Of The Lady’s Light",
    creatureType: "construct",
    subTypes: [
      "extraplanar"
    ],
    alignments: [
      "Lawful Good"
    ],
    size: "Huge",
    hd: 18,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 32,
      dex: 9,
      con: "-",
      int: 15,
      wis: 14,
      cha: 13
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
        name: "Great Cleave",
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
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Stand Still",
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
        weapon: "Warhammer",
        name: "Warhammer",
        damage: "1d8"
      }
    ],
    immunities: [
      "construct traits",
      "Immune to magic"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "adamantine"
      },
      naturalArmor: 20
    },
    space: "15 ft.",
    reach: "15 ft.",
    environment: "any land (extraplanar)",
    visualDescription: "This mighty golem made of polished iron resembles a keen-eyed dwarf. It carries a warhammer and a large shield bearing Torag's symbol.",
    description: "Created by a god to serve as his herald, the Grand Defender is a powerful golem animated by the collective will of dozens of great dwarf heroes. The heroic souls within the golem consider it an honor to lend their knowledge and love of battle to this mighty shell so it can protect dwarves in the mortal world. These heroes control the golem for anything from a single manifestation to several consecutive months of tasks, and afterward return to their reward in the afterlife. These multiple identities contribute to its varying appearance in each incarnation, even changing its apparent gender. The above statistics describe a typical manifestation of the herald, though if it is summoned for a specific purpose, the individual spirits within might have greater knowledge pertaining to that purpose. Ecology The spirits within the Grand Defender retain all their mortal memories and knowledge, and when in the mortal world they have been known to recognize or call out through the herald to old friends, relatives, or offspring with an unexpected familiarity and affection. If visiting a place one of its spirits had been as a mortal, the golem might know secret exits or caches of materials long forgotten by the current inhabitants. Without the heroic spirits, the herald barely has a will of its own and acts in a programmed fashion like a common iron golem; however,it is never sent to the Material Plane that way, and existing knowledge of its “empty” state only comes from rare visitors who encountered the herald. As a construct controlled by dead heroes, the Grand Defender has no need for rest or sustenance. However, the controlling spirits may enjoy the company of other creatures, and the golem can consume materials, though its sense of “taste” is certainly altered to suit its magical abilities. For example, most of the heroic souls report mild intoxication after eating metal in order to recharge the hammer storm ability.",
    organization: "solitary",
    spellLikeAbilities: [],
    skills: {
      "Knowledge (dungeoneering)": {
        ranks: 9
      },
      "Knowledge (engineering)": {
        ranks: 9
      },
      "Knowledge (history)": {
        ranks: 9
      },
      "Knowledge (local)": {
        ranks: 9
      },
      "Knowledge (nature)": {
        ranks: 9
      },
      "Knowledge (religion)": {
        ranks: 9
      },
      Perception: {
        ranks: 18
      }
    },
    special: {
      "breath weapon": {
        type: "Su",
        text: "The herald’s poisonous breath weapon functions like that of an iron golem (free action every 1d4 rounds, 10 ft. cube, Fort DC 19, 1d4 Con, 2 consecutive saves). The save DC is Constitution-based. The cloud persists for 1 round."
      },
      "hammer storm": {
        type: "Ex",
        text: "The herald can expel a volley of warhammers from its mouth, which functions like a breath weapon (30-foot cone, 15d6 bludgeoning damage plus Awesome Blow, Reflex 19 half, usable 1/day). If the herald is in its cold iron or mithral form, these hammers count as cold iron or silver, respectively. The herald can exclude any number of squares in the cone. The hammer storm creates 24 physical warhammers that persist after the instantaneous attack and may be used by creatures (though they’re normal warhammers, not masterwork, cold iron, or mithral). The herald can spend 1 minute eating 24 warhammers (or an equivalent amount of metal such as that created by its ablative adaptation ability) to recharge this ability. The save DC is Constitution-based."
      },
      "ablative adaptation": {
        type: "Su",
        text: "As a standard action, the Grand Defender can shed its outer layer of metal, revealing a slightly smaller version of itself underneath. This new form may be made of cold iron (changing its DR to 15/cold iron), mithral (DR 15/silver), or iron (DR 15/adamantine, as normal). Its attacks count as this metal type for overcoming damage reduction. If the herald is brought to 0 hit points, it becomes inert; 1d4 hours after it last took damage, it sheds its outer layer and reanimates at half its normal hit points. Once shed, the outer layer decays into worthless powder over 1d4 minutes."
      },
      "defender's shield": {
        type: "Ex",
        text: "The herald’s shield is a +3 heavy steel shield, though it becomes non-magical if the herald is destroyed or is no longer holding or wearing it."
      },
      "dwarf traits": {
        type: "Ex"
      }
    }
  },

  "Bronze Sentinel": {
    source: "Curse Of The Lady’s Light",
    creatureType: "construct",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Small",
    hd: 4,
    hdVal: 10,
    cr: 3,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 40,
      climb: 20
    },
    abilities: {
      str: 18,
      dex: 16,
      con: "-",
      int: 1,
      wis: 11,
      cha: 5
    },
    feats: [
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Perception",
        choiceSource: "Skill Focus"
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
        weapon: "Fiery bolt",
        name: "Fiery bolt",
        specialAbility: "Fiery bolt",
        damage: "1d6"
      }
    ],
    immunities: [
      "construct traits",
      "Immune to fire, magic"
    ],
    defense: {
      naturalArmor: 4
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "Sculpted from bronze in the form of a large humanoid head, this creature perches on six mechanical legs, its eyes intermittently shining with an orange glow.",
    description: "Bronze sentinels were among the most common of Thassilonian sentinels, and saw widespread use in ancient Bakrakhan and Eurythnia. Thassilonian nobles and wizards used these creatures to protect their goods, magical laboratories, and libraries. A bronze sentinel's fiery bolt burns hot, but its flames are short lived. This construction is in place to minimize the risk of the sentinel setting fire to the very things it is set to protect.",
    organization: "solitary, pair, or troop (3-7)",
    languages: "Thassilonian (can't speak)",
    spellLikeAbilities: [
      {
        name: "detect magic",
        casterLevel: 2,
        timesPerDay: -1
      }
    ],
    skills: {
      Climb: {
        ranks: 0
      },
      Perception: {
        ranks: 2
      },
      Stealth: {
        ranks: 2
      }
    },
    special: {
      alert: {
        type: "Su",
        text: "A bronze sentinel can take simple orders and identify intruders, and it possesses the ability to alert its creator or another creature to which it's keyed. When a bronze sentinel detects a trespasser, it can choose to alert the creature to which it's keyed in one of two ways. The sentinel can create a loud sound like that of a bell, chime, or gong that can be clearly heard at a range of 500 feet. Alternatively, a bronze sentinel can send a mental alert to the creature to which it is keyed as long as that creature is within 1 mile of the sentinel. The mental alert wakes the keyed creature from sleep, but doesn't affect normal concentration. A bronze sentinel's creator is the first creature to which it is keyed, and the creator can pass its link to another creature as part of a 4-hour ritual that uses materials costing 500 gp."
      },
      freeze: {
        universalMonsterAbility: "Freeze",
        parenthetical: ""
      },
      "fiery bolt": {
        type: "Su",
        text: "As a standard action, a bronze sentinel can fire a bolt of flame as a ranged touch attack out to a maximum range of 30 feet. This bolt deals 1d6 points of fire damage. Immunity to Magic (Ex) A bronze sentinel is immune to spells or spell-like abilities that allow spell resistance, save for spells with the electricity descriptor."
      }
    }
  },

  "Marble Sentinel": {
    source: "Curse Of The Lady’s Light",
    creatureType: "construct",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Small",
    hd: 6,
    hdVal: 10,
    cr: 4,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 40,
      climb: 20
    },
    abilities: {
      str: 20,
      dex: 16,
      con: "-",
      int: 1,
      wis: 11,
      cha: 5
    },
    feats: [
      {
        name: "Ability Focus",
        type: "Monster",
        value: "Paralyzing bolt",
        choiceSource: "Ability Focus"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Perception",
        choiceSource: "Skill Focus"
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
        weapon: "Paralyzing bolt",
        name: "Paralyzing bolt",
        specialAbility: "Paralyzing bolt"
      }
    ],
    immunities: [
      "construct traits",
      "Immune to acid, magic"
    ],
    defense: {
      naturalArmor: 6
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "Crouched on six jointed metal legs, this large humanoid head crafted from polished marble gazes intently with its glowing green eyes.",
    description: "Marble sentinels were prized for their ability not only to detect intruders, but also to restrain them with paralyzing bolts. This ability only lasts temporarily, so the creator or other creature the sentinel is keyed to would have to receive the alert and mobilize her guards to properly subdue and restrain any trespassers. Construction Though the exact process of creating the base form differs depending on the materials involved, the process of animating sentinels is roughly the same. Each sentinel must be carved or worked to a fine detail before being subjected to spells and magical unguents worth 1,000 gp. Marble Sentinel CL 12th; Price 24,000 CONSTRUCTION Requirements Craft Construct, alarm, detect magic, geas/quest, limited wish, stone shape, creator must be caster level 12th; Skill Craft (sculpture) DC 20; Cost 12,500 gp",
    organization: "solitary, pair, or troop (3-7)",
    languages: "Thassilonian (can't speak)",
    spellLikeAbilities: [
      {
        name: "detect magic",
        casterLevel: 2,
        timesPerDay: -1
      }
    ],
    skills: {
      Climb: {
        ranks: 0
      },
      Perception: {
        ranks: 3
      },
      Stealth: {
        ranks: 3
      }
    },
    special: {
      alert: {
        type: "Su",
        text: "A marble sentinel can take simple orders and identify intruders, and it possesses the ability to alert its creator or another creature to which it's keyed. When a marble sentinel detects a trespasser, it can choose to alert the creature to which it's keyed in one of two ways. The sentinel can create a loud sound like that of a bell, chime, or gong that can be clearly heard at a range of 500 feet. Alternatively, a marble sentinel can send a mental alert to the creature to which it is keyed as long as that creature is within 1 mile of the sentinel. The mental alert wakes the keyed creature from sleep, but doesn't affect normal concentration. A marble sentinel's creator is the first creature to which it is keyed, and the creator can pass its link to another creature as part of a 4-hour ritual that uses materials costing 500 gp. Immunity to Magic (Ex) A marble sentinel is immune to spells or spell-like abilities that allow spell resistance, save for spells with the force descriptor."
      },
      freeze: {
        universalMonsterAbility: "Freeze",
        parenthetical: ""
      },
      "paralyzing bolt": {
        type: "Su",
        text: "As a standard action, a marble sentinel can fire a green-hued bolt of energy as a ranged touch attack out to a maximum range of 30 feet. A creature struck by this ray must succeed at a DC 12 Fortitude save or be paralyzed for 1d6 rounds. The save DC is Charisma-based."
      }
    }
  },

};
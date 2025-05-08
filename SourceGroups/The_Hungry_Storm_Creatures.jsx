
export const The_Hungry_StormCreatures = {
  "Frostfallen Mammoth": {
    source: "The Hungry Storm",
    creatureType: "undead",
    subTypes: [
      "cold"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Huge",
    hd: 14,
    hdVal: 8,
    cr: 10,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Lifesense"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 36,
      dex: 12,
      con: "-",
      int: "-",
      wis: 10,
      cha: 12
    },
    feats: [
      {
        name: "Toughness",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Gore",
        name: "Gore",
        damage: "1d6",
        bonuses: [
          {
            source: "inherent",
            value: "3d6",
            appliesTo: "damageType",
            damageType: "cold"
          }
        ],
        type: "primary"
      },
      {
        weapon: "Slam",
        name: "Slam",
        damage: "1d4",
        bonuses: [
          {
            source: "inherent",
            value: "3d6",
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
        damageType: "bludgeoning"
      },
      naturalArmor: 16
    },
    space: "15 ft.",
    reach: "15 ft.",
    environment: "any cold land",
    visualDescription: "This frozen mammoth erupts into movement, its bones armored with plates of ice and eyes burning with cold flames.",
    description: "Frostfallen creatures are mindless undead infused with icy cold and animated by a hatred for all living things. Their bodies radiate a devastating chill that cloaks them in patches of ice that act as armor. Frostfallen creatures appear otherwise as they did at the time of their reanimation, except for a cold gleam in the eyes. Ecology In the harshest reaches of the world, cold is an ever-present enemy. When a creature dies from exposure to such harsh conditions, bitter anger and the searing cold sometimes combine to reanimate the dead as one of the frostfallen. Once reanimated, frostfallen creatures prowl the cold lands in which they fell, wreaking indiscriminate vengeance on living creatures out of spiteful rage. Although frostfallen creatures can be created through necromantic magic like other undead, arcane scholars are fascinated by the necromancy that brings frostfallen creatures to unlife, for the animating force is a synthesis of negative energy and a bone-numbing cold. This cold empowers the creature's attacks, wreathing its natural weapons in a deathly chill. Those who have fought these creatures describe great wounds instantly numbed by the lethal touch of frostbite. In addition, a frostfallen creature's body emanates an aura of cold that flash-freezes moisture in the air around it, coating the creature in a patchwork of ice capable of def lecting blows from even the heaviest weapons. The creature's affinity for cold also allows it to locate nearby warm-blooded creatures, even in driving blizzards and on moonless nights. Frostfallen creatures move with the same gaits they had in life, while gaining a savage surge in physical power. Additionally, unlike normal zombies, the frozen condition of the creature fortifies its unlife, making it extremely durable. Indeed, throughout the northern reaches of Avistan, legends persist of specific frostfallen mammoths, dire bears, and even giants that have hunted the Crown of the World for centuries. Habitat & Society The corrupt animus that powers frostfallen creatures imbues them with a hatred of all living things, and most spend their time wandering wintry terrains near where they died, looking for life to snuff out. Sometimes, vestiges of behavior from their original forms lead to groups banding together, like frostfallen wolves that hunt in packs. Even those frostfallen that have never encountered others of their kind seem to instinctively recognize their own, and band together if prey is nearby. In Irrisen, winter witches and other ice casters prefer creating frostfallen creatures, as such creatures' bodies more readily withstand the decay and brittleness often faced by skeletons and zombies in harsh northern climes. Casters who create frostfallen creatures often use minor magic to emblazon a creature's ice armor with carvings or specific colors, effectively branding the creature as a servant. On rare occasions, casters will create frostfallen creatures in warmer regions like the Mwangi Expanse or the deserts of Thuvia. Despite the scorching heat of such places, frostfallen creatures retain all of their powers. In such cases, the undead's creator normally employs her minions against creatures that are susceptible to the frostfallen creature's freezing attacks. Some frostfallen creatures have even survived independent of their creators. When such a rarity comes to pass, the frostfallen creature simply begins hunting the region for fresh life to end, though it will often lie in wait in cooler places like deep caves, or under the water of an oasis so as to better ambush creatures and travelers who would never expect to see a frostfallen creature so far south. Animating a Frostfallen Creature A magic-user can create any form of frostfallen creature by casting animate dead upon the corpse to be animated and providing an amount of ice of equal weight, plus two blue topazes or turquoises worth at least 100 gp each. The creator can only create a number of Hit Dice of frostfallen creatures equal to the amount allowed by animate dead. Frostfallen creatures count against the number of Hit Dice of skeletons and zombies that can be created using animate dead. Creating a Frostfallen Creature \"Frostfallen creature\" is an acquired template that can be added to any corporeal creature (other than an undead), referred to hereafter as the base creature. A frostfallen creature uses the base creature's statistics and special abilities except as noted here. CR: As base creature + 1. Alignment: Always neutral evil. Type: The creature's type changes to undead and it gains the cold subtype. It retains any subtypes except for alignment subtypes (such as good) and subtypes that indicate kind (such as giant). It does not gain the augmented subtype. It uses all the base creature's statistics and special abilities except as noted here. Armor Class: The natural armor bonus improves by +4. Hit Dice: A frostfallen creature drops any HD gained from class levels and changes racial HD to d8s. Creatures without racial HD are treated as if they had 1 racial HD. A skeleton uses its Charisma modifier (instead of its Constitution modifier) to determine bonus hit points. Defensive Abilities: Frostfallen creatures gain DR 5/ bludgeoning (or DR 10/bludgeoning if it has 11 HD or more). They are immune to cold. Weaknesses: Frostfallen creatures gain vulnerability to fire. Speed: A winged frostfallen creature's maneuverability drops to clumsy. If the base creature flew magically, its fly speed is unchanged. Retain all other movement types. Attacks: A frostfallen creature retains all the natural weapons, manufactured weapon attacks, and weapon proficiencies of the base creature. It also gains a slam attack that deals damage based on the frostfallen creature's size, but as if it were one size category larger than its actual size. Special Attacks: A frostfallen creature retains all of the base creature's special attacks and also gains the following. Cold (Su): A frostfallen creature's body generates intense cold, dealing an amount of cold damage with its touch determined by its Hit Dice. Creatures attacking a frostfallen creature with unarmed strikes or natural weapons take this same cold damage each time one of their attacks hits. Frostfallen Creature Hit Dice Cold Damage 1-5 1d6 6-10 2d6 11-15 3d6 16+ 4d6 Abilities: A frostfallen creature's Strength increases by +2 and its Charisma by +6. A frostfallen creature has no Constitution or Intelligence score, and its Wisdom becomes 10. BAB: A frostfallen creature's base attack bonus is equal to 3/4 of its Hit Dice. Skills: A frostfallen creature loses all skill ranks possessed by the base creature and gains none of its own. Feats: A frostfallen creature loses all feats possessed by the base creature and gains Toughness as a bonus feat. Special Qualities: A frostfallen creature loses most special qualities of the base creature. It retains any extraordinary special qualities that improve its melee or ranged attacks. It also gains the following special quality. Lifesense (Su): The frostfallen creature notices and locates living creatures within 60 feet, just as if it possessed the Blindsight ability.",
    organization: "solitary, pair, or drove (3-12)",
    spellLikeAbilities: [],
    skills: {},
    special: {
      cold: {
        type: "Ex"
      },
      lifesense: {
        type: "Ex"
      }
    }
  },

  Atamahuta: {
    source: "The Hungry Storm",
    creatureType: "outsider",
    subTypes: [
      "oni",
      "giant",
      "native",
      "shapechanger"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Large",
    hd: 14,
    hdVal: 10,
    cr: 11,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 25,
      dex: 12,
      con: 20,
      int: 13,
      wis: 16,
      cha: 17
    },
    feats: [
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Combat Casting",
        type: "General"
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
        name: "Spell Penetration",
        type: "General"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Orc double axe",
        enchantments: [
          {
            name: "Enhancement Bonus +2",
            source: "inherent"
          }
        ],
        name: "2 Orc double axe",
        damage: "1d8/1d8"
      }
    ],
    defense: {
      SR: {
        value: 22
      },
      naturalArmor: 8
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "temperate mountains",
    visualDescription: "This large humanoid creature has two heads, one brutish-looking, the other with three eyes and gems and tattoos decorating its forehead.",
    description: "Atamahuta are immensely strong oni spirits who have donned the physical guise of ettins. Combining oni's trademark guile with ettins' unadulterated brawn, atamahuta use their two-headed forms to inflict as much damage as possible by fusing their arcane powers with their distinctive melee combat style. Because of the raw power they infuse into the bodies they inhabit, atamahuta are slightly bigger than normal ettins. An atamahuta is 14 feet tall and weighs 5,500 pounds. Ecology While many might think an atamahuta possesses two heads and is therefore made up of two distinct oni, each being is composed of only one oni spirit. When an atamahuta takes form, it divides its powers into two parts, granting one half of its being its ingenuity and magical prowess and the other its anger and savage strength. An ettin's body is the most suitable for this division of powers, which manifests itself physically as one head having a seeming dominance over the other. The atamahuta's right head most directly controls its actions in physical combat, and is also the only one that talks; the left head, meanwhile, constantly spills nonsense words and mutterings under its breath, and is the source of the oni's arcane power. Oni scholars have speculated that an individual atamahuta's underlying, unvoiced wishes and desires are encoded in the gibberish that burbles from its left head, and that by listening closely enough, one can garner valuable information about the oni spirit, but few have survived an atamahuta encounter long enough to test this theory. Regardless of whatever babbling the left head produces, most witnesses agree that atamahuta strive for power and fear-induced respect more than anything else, and will go to grotesque lengths to garner them, through means both violent and utterly despicable. Atamahuta possess the ability to change shape just as other oni, but the visage of an uncontrollably violent ettin is often even more horrifying to civilized creatures than that of an oni, whom most regard as equally evil but at least somewhat reasonable. Thus, most atamahuta find it beneficial to procure a silver-tongued ally who can act as a gateway to the more powerful and wise oni itself. Once they have established control over a certain realm, atamahuta will usually either kill or enslave their allies, seeing the beguilers as potential threats to their rule. Atamahuta have little patience for any individual that wastes their time, and oversee their domain with an unforgiving and steadfast fist. Oni who inhabit the form of an ettin usually possess violent and unruly dispositions to begin with, but most know better than to act brashly when they first arrive in their physical forms and keep their rage at bay-at least until they establish their dominion over the lesser beings around them. Habitat & Society Atamahuta resemble ettins in both temperament and physical form, but their similarities end here. Most atamahuta look down upon the monstrous giants as barbaric, imperfect versions of an ideal form, and impose their superior strength and intellect upon the creatures in order to enslave them. While a single atamahuta can easily coerce and garner the aid of several ettins, the oni tend to establish elaborate slave rings in order to most effectively \"recruit\" high numbers of individuals, including ettins as well as other intelligent humanoids. Several atamahuta oversee the operation, while their shackled minions act as both enforcers of the slavers' rules and prisoners themselves, hoping to garner some miniscule form of freedom through cooperation. Their sheer cunning allows atamahuta to trick their prisoners into thinking this, when in reality the only escape an atamahuta's slave can hope to achieve is through transfer to another owner or death. When atamahuta establish slave rings, they often make a business of selling their prisoners to the highest bidder in private auctions and black market deals. Occasionally, atamahuta will also run economically viable businesses on the side, putting their enslaved minions to work in remote fields or mines far from civilization. Atamahuta are rarely content to remain rulers over a stagnant position, and seek to advance their dominion as far as possible. Their prowess for ruthless business tactics and intimidating rivals into positions of subservience makes them potent forces in whatever realm they seek to control. Atamahuta often join merchants' guilds and other such organizations after starting their slave rings, creating legitimate business fronts in order to infiltrate the guilds and wrest control of them. With this power, they can impose seemingly fair taxes upon their competitors, ultimately running them out of business and establishing themselves as the sole means of trade within a community. Of course, they must do this all through surrogates, as few trade organizations would permit an oni or an ettin into their ranks, and even then, many guilds have imposed strict rules regarding representatives into their systems in order to prevent such atamahuta-run monopolies from developing in the first place. Atamahuta are typically distrustful of other oni, as they see them as potential threats to their power, and thus only rarely ally themselves with other such beings. Occasionally, however, such alliances can prove to be mutually beneficial, and so atamahuta team up with weaker oni such as yamabushi tengus or kuwa, so that they can reap the rewards of such a coalition while still retaining the most power. More intelligent or powerful oni recognize atamahuta for their oblivious nature and will often manipulate the beings for their strength, tricking the ettin-shaped oni into thinking they are dominant in the friendship until the more powerful oni has used the atamahuta for their intended purpose, at which point the beings are swiftly discarded.",
    organization: "solitary, pair, or cohort (1-2 plus 3-5 ettins)",
    languages: "Common, Giant, Orc, Tien",
    gear: "banded mail",
    spellLikeAbilities: [
      {
        name: "see invisibility",
        casterLevel: 11,
        timesPerDay: -1
      },
      {
        name: "chill touch",
        casterLevel: 11,
        timesPerDay: 3
      },
      {
        name: "dimension door",
        casterLevel: 11,
        timesPerDay: 3
      },
      {
        name: "fireball",
        casterLevel: 11,
        timesPerDay: 3
      },
      {
        name: "haste",
        casterLevel: 11,
        timesPerDay: 3
      },
      {
        name: "rage",
        casterLevel: 11,
        timesPerDay: 3
      },
      {
        name: "shocking grasp",
        casterLevel: 11,
        timesPerDay: 3
      },
      {
        name: "black tentacles",
        casterLevel: 11,
        timesPerDay: 1
      },
      {
        name: "stoneskin",
        casterLevel: 11,
        timesPerDay: 1
      },
      {
        name: "wall of fire",
        casterLevel: 11,
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 14
      },
      Disguise: {
        ranks: 17
      },
      Intimidate: {
        ranks: 17
      },
      "Knowledge (planes)": {
        ranks: 14
      },
      Perception: {
        ranks: 14,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      "Sense Motive": {
        ranks: 14
      },
      Spellcraft: {
        ranks: 17
      }
    },
    special: {
      "double weapon mastery": {
        type: "Ex",
        text: "An atamahuta fights with an orc double axe. While making a full attack, an atamahuta controls its arms with both heads and does not take a penalty on attack or damage rolls for attacking with a double weapon."
      },
      spellstrike: {
        type: "Su",
        text: "An atamahuta can imbue its weapon with magical properties using its spell-like abilities. Whenever an atamahuta casts a spell with a range of \"touch\" from its spell-like abilities, it can deliver the spell through any weapon it is holding as part of a free melee attack at its highest base attack bonus as part of casting its spell. If successful, this melee attack deals its normal damage as well as the effects of the spell. This attack uses the weapon's critical multiplier (usually x3), but the spell effect only deals 2 damage on a successful critical hit, while the weapon damage uses its own critical modifier. An atamahuta cannot make a full attack during the same round that it uses a spell-like ability unless another effect would allow it to do so. Ward Off Distractions (Ex) An atamahuta uses one of its heads to defend against attacks while the other is using a spell-like ability, giving it a +4 bonus to AC against attacks of opportunity while casting."
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "alter self",
        type: ", alter self"
      },
      "ward off distractions Other": {
        type: "Ex"
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        damageType: "acid or fire",
        value: 5
      }
    }
  },

  "Saumen Kar": {
    source: "The Hungry Storm",
    creatureType: "monstrous humanoid",
    subTypes: [],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Large",
    hd: 13,
    hdVal: 10,
    cr: 10,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Scent"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 26,
      dex: 15,
      con: 20,
      int: 11,
      wis: 12,
      cha: 11
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
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
        name: "Improved Critical",
        type: "Combat",
        value: "Greataxe",
        choiceSource: "Improved Critical"
      },
      {
        name: "Self-Sufficient",
        type: "General"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Greataxe",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Greataxe",
        name: "Greataxe",
        damage: "1d12",
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
        weapon: "Headbutt",
        name: "Headbutt",
        specialAbility: "stun",
        damage: "1d6"
      }
    ],
    immunities: [
      "Immune to cold"
    ],
    defense: {
      naturalArmor: 9
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "cold plains, hills, or desert",
    visualDescription: "This hulking humanoid's dense fur is scored with rune-shaped brands. Skin cracked and blackened by frostbite stretches taught over a misshapen skull crowned with a pair of ivory horns.",
    description: "This leathery-faced creature stands tall and upright, with long, simian limbs and a shaggy coat. Intelligent and powerful, saumen kars are not naturally aggressive, but the hostility of their environment forces them to defend the land that supports them with ferocity, even to the death. Their natural coloration and snow-packed fur make saumen kars almost invisible among the drifts of their icy homes, leading many arctic races to refer to them as \"men of snow.\" A long-forgotten deal made by their race in its infancy still brutally scars the body of each saumen kar, marking them with their distinctive frostbite brands-though if this debt is already paid, lapsed, or growing ever greater, none can remember. An adult saumen kar stands 12 feet tall and weighs almost 2,000 pounds, but the ice and snow matted to its fur for both insulation and armor add another 1,000 pounds to its bulk. Ecology These solitary creatures eke out a bitter existence across the equally bitter landscape of the Crown of the World, their origins a mystery even to themselves. They are nomadic, roaming the wastes to settle temporarily where they are lucky enough to find food, shelter, or both. They are omnivorous, but the climate dictates that the lion's share of their diet is meat, and saumen kars consume the flesh of any creature but their own kind. Generation to generation, saumen kars pass down the ice crafting techniques that supply them with weapons, tools, and art. Occasionally a saumen kar's lair contains crude ice replicas of common Erutaki implements, from storage jars to skinning tools, or even heavy-lidded ice chests. Finding their frozen works among the possessions of another race is rare, however, since saumen kar ice artifacts rarely last long outside of arctic environments. The crude frostbite brands that mark every adult saumen kar's flesh are the gruesome expression of an ancient pact with an otherworldly being, still honored by saumen kars for both spiritual and practical reasons. The specifics of the pact are long forgotten, but some Erutaki elders believe the men of snow protect something in the wastes that they have themselves forgotten. While the meaning of the brands may have become lost to their wearers, scholars of language recognize the runes as a form of ancient Giant. Even still, only one well versed in linguistics can identify the sole rune still rendered well enough to read: \"favored.\" The runes' powers lead many to believe the saumen kars owe their protection to one of the numerous powers of the North, such as Hshrha, the Duchess of All Winds; the Empyreal Lord Tolc; or entities mysterious to natives of more temperate lands, though the implication of the runes being an ancient form of the Giant language also creates an unsettling link between these arctic warriors and the Deathless Frost, Kostchtchie. Whichever way other races choose to speculate, the saumen kars believe the brands' protections come from their reverence for the deadly forces of the world's summit, and they display their scars proudly, wearing no clothing or armor but the snow matted into their dense fur. Habitat & Society The Crown of the World is an unforgiving place, and the saumen kars have learned that survival is best achieved alone or in very small groups. It is rare to meet more than one of their kind at a time, although folklore does tell of handfuls of saumen kars banding together against a particularly serious or wide-ranging threat. Wandering the wastes alone, they throw up temporary lairs wherever food or ice cliffs can be found, moving off when they have taken what they can from the land. A typical lair is little more than a rough-walled igloo or ice cave built by hefting large amounts of snow and packing it tight around the hemispheres of ice they create, before the magical effect expires. Saumen kars' antisocial behavior is what keeps them rare, and indeed mating is almost incidental, occurring when a male's and favorably disposed female's paths happen to cross. New families rarely stay together for long, and for a creature with a lifespan of up to 300 years, their offspring grow at an alarming rate, and learn to fend for themselves early in life. Saumen kars worship the land and the powers of the North rather than any specific deity, leading to a druidic dominance of their spiritual lives. In their final days, some saumen kars travel to sites of great natural beauty or power to die in a place where the blackened bones of many generations are tumbled together beneath ever-shifting ice and snow. From what little outsiders can gather, they are a loosely shamanic people, and some carry crude family reliquaries of teeth, bones, and fur for ancestral protection and guidance. Saumen kars speak a dialect of Giant influenced by Druidic, though they rarely communicate with other races. Some saumen kars, through necessity, have picked up smatterings of the Erutaki languages and even a word or two of Common, but their knowledge of such languages never extends beyond a handful of crude threats and warnings. Survival in the wastes is about understanding its dangers, environmental or otherwise, and despite their primitive, animalistic appearance, saumen kars are canny combatants. Over thousands of years their proud race has learned patience and silence from the glaciers. Rather than risk a frontal assault, they utilize their natural coloration to hide in snow banks and their ability to summon powerful ursine aid to scare off enemies or track those who trespass upon their lands. Only if interlopers prove a match for their summoned allies will they cautiously join the fray, trapping physically stronger creatures in icy hemispheres or separating groups with freezing planes. They then wade in, the field rearranged to their advantage, to use their imposing size, savage axe blows, and incapacitating headbutts to cut down weaker opponents, or take snowstorm form to shred dangerous spellcasters with blinding, razor-sharp sleet.",
    organization: "solitary or family (2-5)",
    languages: "Giant",
    spellLikeAbilities: [
      {
        name: "wall of ice",
        casterLevel: 13,
        timesPerDay: 3
      },
      {
        name: "summon nature's ally vi",
        casterLevel: 13,
        limitations: "polar bear [dire bear] only",
        timesPerDay: 1
      }
    ],
    skills: {
      Heal: {
        ranks: 0
      },
      "Knowledge (nature)": {
        ranks: 13
      },
      Perception: {
        ranks: 13
      },
      "Sense Motive": {
        ranks: 0
      },
      Stealth: {
        ranks: 9,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Survival: {
        ranks: 13
      }
    },
    special: {
      snowstorm: {
        type: "Su",
        text: "In mimicry of its unforgiving environment, a saumen kar can transform into a living snowstorm of lethal power. This ability lasts as long and operates like the whirlwind special attack with the following changes: Creatures within the area of the snowstorm take 2d6 points of cold damage and 2d6 points of slashing damage and take a -20 penalty on Perception checks. A saumen kar gains a fly speed of 40 feet (perfect) while in this form.",
        preText: "2d6 cold plus 2d6 slashing damage, DC 24"
      },
      stun: {
        type: "Ex",
        text: "While a saumen kar's horns are not large enough for a gore attack, they extend under the skin to form a bony plate. A creature struck by a saumen kar's headbutt must succeed at a DC 24 Fortitude saving throw or be stunned for 1 round.",
        preText: "1 round, DC 24"
      },
      "frostbite brands": {
        type: "Ex",
        text: "A saumen kar's brands infuse the creature with intense cold, so much that it gains resistance to fire 20 and its touch deals an additional 1d6 points of cold damage. A saumen kar's metallic weapons also conduct this chill. A saumen kar's brands can be removed by the spell erase as though they were magic writing with a caster level equal to the saumen kar's Hit Dice. If the brands are removed, the saumen kar loses both its fire resistance and its ability to do additional cold damage, until the following dawn when the brands re-etch themselves upon its body. Snowstorm (Su) In mimicry of its unforgiving environment, a saumen kar can transform into a living snowstorm of lethal power. This ability lasts as long and operates like the whirlwind special attack with the following changes: Creatures within the area of the snowstorm take 2d6 points of cold damage and 2d6 points of slashing damage and take a -20 penalty on Perception checks. A saumen kar gains a fly speed of 40 feet (perfect) while in this form."
      }
    },
    resistances: [
      {
        damageType: "fire",
        value: 20
      }
    ]
  },

};

export const The_Shackled_HutCreatures = {
  "Courage Heart": {
    source: "The Shackled Hut",
    creatureType: "outsider",
    subTypes: [
      "chaotic",
      "extraplanar",
      "good"
    ],
    alignments: [
      "Chaotic Good"
    ],
    size: "Medium",
    hd: 17,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30,
      maneuverability: "Average",
      fly: 30
    },
    abilities: {
      str: 23,
      dex: 23,
      con: 22,
      int: 22,
      wis: 21,
      cha: 24
    },
    feats: [
      {
        name: "Blind-Fight",
        type: "Combat"
      },
      {
        name: "Dazzling Display",
        type: "Combat"
      },
      {
        name: "Deflect Arrows",
        type: "Combat"
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
      },
      {
        name: "Lookout",
        type: "Combat"
      },
      {
        name: "Outflank",
        type: "Combat"
      },
      {
        name: "Point-Blank Shot",
        type: "Combat"
      },
      {
        name: "Rapid Shot",
        type: "Combat"
      },
      {
        name: "Swap Places",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Morningstar",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Morningstar",
        enchantments: [
          {
            name: "Enhancement Bonus +3",
            source: "inherent"
          },
          {
            name: "Anarchic",
            source: "inherent"
          }
        ],
        name: "Morningstar",
        damage: "1d8"
      },
      {
        weapon: "Dart",
        enchantments: [
          {
            name: "Enhancement Bonus +1",
            source: "inherent"
          },
          {
            name: "Anarchic",
            source: "inherent"
          }
        ],
        name: "Dart",
        damage: "1d4"
      }
    ],
    immunities: [
      "Immune to fear"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "lawful"
      },
      naturalArmor: 7
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any land (Elysium)",
    visualDescription: "This woman with vaguely half-elven features wears a wooden breastplate and wields a wooden morningstar in one hand. In her other hand she holds a thorny red rose; blood from that hand trickles down her arm.",
    description: "Courage Heart is a weapon against tyranny and a mighty spark that kindles the fires of hope in mortal hearts. Once a mortal ranger in the service of Milani, she was an early champion of Galt's Red Revolution when its purpose was to depose evil Chelish nobles, but when that movement become more about chaos and vengeance, she fought against it instead. Eventually branded a Chelish sympathizer by the Revolutionary Council, she allowed herself to be captured in order to allow her allies to escape. She was executed with a final blade, which trapped her soul within it. Milani, having spent a century communicating directly with her followers, saw the merits of having a divine champion like other deities, and plucked the woman's soul from the artifact and made her a herald. Now the martyred hero keeps her original name secret so her living relatives in Galt do not become targets by association, and calls herself Courage Heart. Her mission is twofold: to attack the powerful enemies of the church (especially immortal undead who would subjugate the common folk and conjured outsiders used to strike fear into mortal hearts), and to inspire hope among mortals so they can find the strength to turn against tyrants. As Courage Heart opposes slavery and unjust imprisonment, she has made it her personal crusade to steal all the final blades and free the souls within them. Milani must look at the bigger picture, so the herald has to make progress toward this goal when she can. Courage Heart has been trying to get Pharasma's herald, the Steward of the Skein, to join her cause, as preventing souls from reaching the Boneyard is of interest to the Lady of Graves, but that herald's strange nature and the recent creation of the final blades (relative to the history of civilization) means she has made little headway in establishing that alliance to date. Ecology As she has only been immortal for a few decades, Courage Heart still acts and feels like a mortal woman. She loves her homeland, cares deeply for her mortal relatives (most of whom have some elven blood and were alive when she was murdered), and enjoys worldly delights such as music and stories. Though she has an instinctive knowledge of the people and places near her, she has perfect recall of such things in Galt and feels great sorrow when she discovers that a building or person she knew in life has been destroyed or has died. She collects remnants of Galt's history, such as travel journals about its settlements, songs about its people, and sketches of its locations and inhabitants. Having died for her beliefs holding no expectation of ever returning, Courage Heart considers it an honor to die again and again in her goddess' service, especially if doing so advances the cause or saves mortal lives. The only thing she fears is torture, but she knows her immortal flesh is resistant to punishment and she has magic at her disposal to help her escape almost any confinement. Though she does not need to eat or drink, she still feels the urge to do so, and favors traditional Galtan food. A priest who calls her and has a Galtan meal ready for her is much more likely to get help than one who offers no such courtesy and expects immediate compliance. Habitat & Society Though the herald tries hard to not play favorites, she loves Galt and her extended family, and often checks up on her friends and relatives by lurking in mouse or owl form. Milani's small following and the herald's recent elevation to immortal status means they both are inclined to push the boundaries of what the divine laws allow for direct intervention on Golarion. To bypass these restrictions and watch over her revolution-corrupted homeland, Courage Heart often asks Milani to incarnate her as a mortal ranger (usually of 4th to 7th level) so she can lend a hand where she is needed. In these incarnations she may be male or female and of nearly any human ethnicity or features, but she generally prefers light armor and wields a morningstar. In this mortal shell, she is more careful with her life-not out of any sense of self-preservation, but because she doesn't want her death to upset anyone she befriends. She prefers to show up in a settlement, deal with a problem, then leave before there are too many questions. Among the other celestial servitors of Milani, Courage Heart is beloved as a comrade and leader. She often gathers teams of like-minded celestials to ambush and slay devils, undead, and minions of Zon- Kuthon, then retires with these comrades to Milani's realm in Elysium to tell stories of each other's bravery and virtue.",
    organization: "solitary",
    languages: "Celestial, Common, Infernal; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "aid",
        casterLevel: 17,
        timesPerDay: -1
      },
      {
        name: "chaos hammer",
        casterLevel: 17,
        timesPerDay: -1
      },
      {
        name: "remove fear",
        casterLevel: 17,
        timesPerDay: -1
      },
      {
        name: "holy smite",
        casterLevel: 17,
        timesPerDay: -1
      },
      {
        name: "cure moderate wounds",
        casterLevel: 17,
        timesPerDay: 3
      },
      {
        name: "darkvision",
        casterLevel: 17,
        timesPerDay: 3
      },
      {
        name: "dimension door",
        casterLevel: 17,
        timesPerDay: 3
      },
      {
        name: "dispel law",
        casterLevel: 17,
        timesPerDay: 3
      },
      {
        name: "magic vestment",
        casterLevel: 17,
        timesPerDay: 3
      },
      {
        name: "magic weapon",
        casterLevel: 17,
        timesPerDay: 3
      },
      {
        name: "neutralize poison",
        casterLevel: 17,
        timesPerDay: 3
      },
      {
        name: "peasant armaments",
        casterLevel: 17,
        limitations: "page 69",
        timesPerDay: 3
      },
      {
        name: "protection from arrows",
        casterLevel: 17,
        timesPerDay: 3
      },
      {
        name: "shield other",
        casterLevel: 17,
        timesPerDay: 3
      },
      {
        name: "status",
        casterLevel: 17,
        timesPerDay: 3
      },
      {
        name: "martyr's last blessing",
        casterLevel: 17,
        limitations: "page 69",
        timesPerDay: 1
      },
      {
        name: "invisibility, mass",
        casterLevel: 17,
        timesPerDay: 1
      },
      {
        name: "telepathic bond",
        casterLevel: 17,
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 9
      },
      Climb: {
        ranks: 17
      },
      "Handle Animal": {
        ranks: 22
      },
      Heal: {
        ranks: 15
      },
      Intimidate: {
        ranks: 22
      },
      "Knowledge (local)": {
        ranks: 19
      },
      Perception: {
        ranks: 19
      },
      Perform0: {
        subSkill: "oratory",
        ranks: 12
      },
      Ride: {
        ranks: 7
      },
      "Sense Motive": {
        ranks: 19
      },
      Spellcraft: {
        ranks: 19
      },
      Stealth: {
        ranks: 17
      },
      Survival: {
        ranks: 22
      },
      Swim: {
        ranks: 17
      }
    },
    special: {
      "bloody rose": {
        type: "Su",
        text: "At will as a free action, the herald can create a thorny red rose. She may use this rose as a +1 anarchic dart as if she had the Quick Draw feat. The rose loses all its powers 1 round after it leaves the herald's hand. Darkwood Breastplate The herald's +4 darkwood breastplate has all the normal properties of darkwood but is as hard and strong as steel (similar to wood created with an ironwood spell). Favored Enemy (Ex) The herald has the favored enemy ability of a 17th-level ranger. Imbue with Power (Su) The herald can imbue an ally with a portion of her power. This ability functions like imbue with spell ability, except she may transfer uses of the following spell-like abilities as if they were cleric spells: cure moderate wounds, magic weapon, peasant armaments, protection from arrows, shield other, and status. Using this ability reduces the number of times per day she can use that spell-like ability until she dismisses the transfer or the recipient expends it (for example, if she imbues a target with cure moderate wounds, thereafter she can only use that spell-like ability twice per day)."
      },
      "favored enemy": {
        type: "Ex",
        text: "The herald has the favored enemy ability of a 17th-level ranger. Imbue with Power (Su) The herald can imbue an ally with a portion of her power. This ability functions like imbue with spell ability, except she may transfer uses of the following spell-like abilities as if they were cleric spells: cure moderate wounds, magic weapon, peasant armaments, protection from arrows, shield other, and status. Using this ability reduces the number of times per day she can use that spell-like ability until she dismisses the transfer or the recipient expends it (for example, if she imbues a target with cure moderate wounds, thereafter she can only use that spell-like ability twice per day).",
        preText: "evil outsiders +6, humans +2, lawful outsiders +8, undead +4"
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "owl or mouse"
      },
      "martyr's blood": {
        type: "Su",
        text: "By marking an ally with her blood, the herald can transfer part of her fast healing ability to that ally. The herald's fast healing decreases by 1 (minimum 0), and the ally gains fast healing 1 for 1 hour. This ability has no effect if the target already has fast healing. Rebellious Aura (Su) The herald's aura grants allies within 60 feet the effects of good hope and a paladin's aura of courage. The effects of this ability are included in the herald's stat block."
      },
      tactician: {
        type: "Ex",
        text: "The herald has the tactician ability of a 17th-level cavalier (4/day, one teamwork feat, all allies within 30 feet, 11 rounds). She may use this ability with any of her teamwork feats (Lookout, Outflank, Swap Places)."
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        value: null
      },
      "rebellious aura": {
        type: "Su",
        text: "The herald's aura grants allies within 60 feet the effects of good hope and a paladin's aura of courage. The effects of this ability are included in the herald's stat block.",
        preText: "60 ft."
      }
    },
    resistances: [
      {
        damageType: "acid",
        value: 20
      },
      {
        damageType: "cold",
        value: 20
      },
      {
        damageType: "electricity",
        value: 20
      },
      {
        damageType: "fire",
        value: 20
      }
    ]
  },

  "Dawn Piper": {
    source: "The Shackled Hut",
    creatureType: "fey",
    subTypes: [
      "extraplanar"
    ],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Medium",
    hd: 7,
    hdVal: 6,
    cr: 5,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 15,
      dex: 18,
      con: 16,
      int: 14,
      wis: 15,
      cha: 17
    },
    feats: [
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
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
        weapon: "Rapier",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "Rapier",
        damage: "1d6"
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "cold iron"
      },
      SR: {
        value: 16
      },
      naturalArmor: 3
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any forest",
    visualDescription: "Eldritch energy burns within the eyes of this humanoid figure. Strangely colored hair crowns her head like a torch, and gleaming white teeth shine from her grin. The creature cradles a pipe in her long, graceful fingers.",
    description: "Strange and enigmatic creatures from the First World, dawn pipers are unmistakably humanoid and share some of the same delicate features of half-elves. But dawn pipers' otherworldly nature becomes evident when one looks at the creatures' eyes, which burn with a strange light. Their skin is smooth, free of blemish or body hair, and radiant. Their hair moves constantly, like the flickering flames of a torch in the breeze, and seems to express a seasonal theme in coloration. Their faces are portraits of every emotion that passes through their consciousness; joy, loss, and murder may all dance across their expressions in a matter of moments. Only when a dawn piper is asleep or plays a soothing melody on its pipes does its expression become static and human-and through such songs, dawn pipers' heartbreaking beauty becomes truly evident. Ecology Early on in their primordial realm, dawn pipers toyed with emotion and its effects on the mutable nature of the First World. They marveled at how their plane could be transformed by an expression of strong will and passion. Their name allegedly stems from being the \"musicians at the dawn of Creation.\" Yet, coming from the First World, they are soulless creatures and immortal on their home plane. Dawn pipers cannot hold on to their feelings, and with the passage of time their emotions slip away from them like sand through their fingers. Through study and experimentation, dawn pipers devised a means to cheat their own ephemeral nature through music. The pipers associate emotion with melody, and when their passions leave them, they recreate them from memory through their music. While music is an exercise in creativity, it also has elements of structure and pattern, and that is what the pipers retain long after other fleeting experiences fade. This is no small advantage in the highly morphic environment of the First World, allowing them to knead and shape portions of their home through the use of music and emotion. Though the dawn pipers have no strict elemental association, they may also use their music to create an elemental font through which they can channel and shape the energies of the Inner Planes. Dawn pipers are not wholly flesh and bone, as a raw creative power also infuses them-the source of the burning light that shines out of their eyes. Despite their transitory emotions, there is enough definition imposed upon their existence that they remain subject to physical laws. If killed in the First World, dawn pipers do not truly die but are reborn. The same cannot be said when they expire on other worlds. Habitat & Society Dawn pipers have no formal, overarching society of their own, but they sometimes form small partnerships called choirs, which always have a prime number of members. They act as entertainers, advisors, and shapers among the fey of the First World. Outsiders find them easy to dismiss as slaves to the very emotions they conjure, but nothing could be less true. Dawn pipers are usually shrewd and manipulative, and merely play at the role of a manic social gadf ly. It is said that azatas can sometimes reason with them when they meet; otherwise, dawn pipers jockey for power and influence with fey beings greater than themselves. Dawn pipers are great proponents of subsuming parts of the Material Plane into the First World, yet few such incursions ever happen because they are reluctant to travel to the Material Plane, where they are mortal, unless on a matter of great importance. They rarely take mortal lovers as such dalliances seldom end happily-though when they do partake in them, there are always new melodies waiting to be improvised by which to remember the forsaken relationships. Dawn Piper Choirs A choir of dawn pipers can use their elemental fonts to absorb a part of the Material Plane into the First World by creating a reality siphon. To open a reality siphon, at least three dawn pipers must perform a musical ritual lasting 8 hours. Each piper must have its own elemental font prior to the start of the ritual, and no font can be more than 400 feet from another. At the conclusion of the ritual, the reality siphon appears, creating a 10-foot-radius hemispherical area of twisted reality that functions as an antilife shell (CL 9th). After the ritual is complete, the pipers are free to take other actions until the reality siphon fully manifests. Over the course of 1 week, the reality siphon gradually expands until it encompasses a 400-foot-radius area, at which point everything in the area encompassed by the reality siphon is fully subsumed into the First World. Destroying the elemental fonts sustaining the reality siphon before it fully manifests causes it to implode upon itself, destroying the siphon and preventing it from drawing part of the Material Plane into the First World. At the GM's discretion, certain more powerful choirs may have additional spell-like abilities, similar to the abilities a hag's coven possesses. They may also have powers related to the alteration of their environment in the First World.",
    organization: "solitary, duet, or choir (3, 5, or 7)",
    languages: "Aklo, Common, Sylvan",
    spellLikeAbilities: [
      {
        name: "calm emotions",
        casterLevel: 7,
        timesPerDay: 3
      },
      {
        name: "delusional pride",
        casterLevel: 7,
        timesPerDay: 3
      },
      {
        name: "reckless infatuation",
        casterLevel: 7,
        timesPerDay: 3
      },
      {
        name: "unadulterated loathing",
        casterLevel: 7,
        timesPerDay: 3
      },
      {
        name: "unnatural lust",
        casterLevel: 7,
        timesPerDay: 3
      },
      {
        name: "charm monster",
        casterLevel: 7,
        timesPerDay: 1
      },
      {
        name: "overwhelming grief",
        casterLevel: 7,
        timesPerDay: 1
      },
      {
        name: "rage",
        casterLevel: 7,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 5
      },
      Bluff: {
        ranks: 5
      },
      Craft0: {
        subSkill: "musical instruments",
        ranks: 1
      },
      Diplomacy: {
        ranks: 4
      },
      "Knowledge (nature)": {
        ranks: 5
      },
      "Knowledge (planes)": {
        ranks: 6
      },
      Perception: {
        ranks: 6
      },
      Perform0: {
        subSkill: "wind",
        ranks: 6
      },
      "Sense Motive": {
        ranks: 4
      },
      Spellcraft: {
        ranks: 6
      },
      Stealth: {
        ranks: 3
      },
      "Use Magic Device": {
        ranks: 7
      }
    },
    special: {
      dissonance: {
        type: "Su",
        text: "Every 1d4 rounds as a standard action, a dawn piper can use a musical instrument to unleash a deadly torrent of sonic vibrations that tears at the very physicality of its enemies. This is similar to a breath weapon that deals 6d6 points of sonic damage in a 15-ft. cone (Reflex DC 16 half). A dawn piper must be in possession of a musical instrument in order to use this ability. The save DC is Charisma-based.",
        preText: "every 1d4 rounds, 15-ft. cone, 6d6 sonic damage, Reflex DC 16 half"
      },
      "elemental font": {
        type: "Su",
        text: "A dawn piper can infuse a 40-foot-radius area with the primal qualities of the First World. The creation of an elemental font requires a musical instrument and a musical ritual lasting 8 hours. As long as the piper returns to it every 24 hours, a font can persist forever, but it is destroyed immediately upon the creator's death. A dawn piper can also destroy its own font as a full-round action. The dawn piper gains additional spell-like abilities based on a single element while within range of its elemental font. Dimensional anchor and dimensional lock stop the flow of power, preventing the piper from using the additional spell-like abilities. The save DCs are Charisma-based, and the spell-like abilities are cast at caster level 7th. Air: 2/day-fly, gust of wind (DC 15), shocking grasp Earth: 2/day-grease (DC 14), spiked pit (DC 16), stone call Fire: 2/day-burning hands (DC 14), fireball (DC 16), pyrotechnics (DC 15) Water: 2/day-aqueous orb (DC 16), hydraulic push, slipstream Terrible Beauty (Su) As a standard action, a dawn piper can surround itself in an intense aura of magnificence that is too potent for non-fey to withstand. Non-fey creatures within a 30-foot radius of the dawn piper must succeed at a DC 16 Will save or be blinded or deafened for 1d4 rounds (the piper's choice, but the effect is consistent for all affected creatures), and take 1 point of bleed damage from their eyes or ears (depending on the specific effect). This aura lasts 1 full round, and a creature that succeeds at its saving throw cannot be affected again for 24 hours. This is a visual or auditory, mind-affecting effect. A dawn piper requires a musical instrument in order to create this aura. The save DC for this ability is Charisma-based."
      },
      "terrible beauty": {
        type: "Su",
        text: "As a standard action, a dawn piper can surround itself in an intense aura of magnificence that is too potent for non-fey to withstand. Non-fey creatures within a 30-foot radius of the dawn piper must succeed at a DC 16 Will save or be blinded or deafened for 1d4 rounds (the piper's choice, but the effect is consistent for all affected creatures), and take 1 point of bleed damage from their eyes or ears (depending on the specific effect). This aura lasts 1 full round, and a creature that succeeds at its saving throw cannot be affected again for 24 hours. This is a visual or auditory, mind-affecting effect. A dawn piper requires a musical instrument in order to create this aura. The save DC for this ability is Charisma-based.",
        preText: "30 ft., DC 16"
      }
    }
  },

  "Mirror Man": {
    source: "The Shackled Hut",
    creatureType: "construct",
    subTypes: [],
    alignments: [
      "Neutral Evil"
    ],
    size: "Medium",
    hd: 6,
    hdVal: 10,
    cr: 5,
    racialFeatures: [
      "Blindsight 60 ft.",
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 16,
      dex: 23,
      con: "-",
      int: 15,
      wis: 15,
      cha: 12
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Quick Draw",
        type: "Combat"
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
        weapon: "Dagger",
        name: "Dagger",
        damage: "1d4"
      }
    ],
    immunities: [
      "construct traits",
      "Immune to blindness, gaze attacks, illusions of the pattern subschool"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "bludgeoning"
      },
      naturalArmor: 1
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any land",
    visualDescription: "Tall and lean, this hooded figure resembles a human until the terrible face beneath the cowl is revealed-nothing but a featureless mirror, reflecting a hard, cold world.",
    description: "At a glance, mirror men are easily mistaken for humans. They are tall, slender, and graceful and mask their true selves in fine hooded cloaks appropriate to Irrisen's eternal winter. Nevertheless, their grace is the product of precision, not elegance, and their hooded garments serve to obscure an inhuman countenance. A mirror man has no eyes, nose, or mouth. Its face is a featureless mirror, affixed atop a lifeless body. Behind this mirror is a vacant hole left behind when the body was prepared for its current use. Ecology Mirror men are constructs whose origin is less than a century old, and are typically found in larger Irriseni cities such as Whitethrone and Algidheart. Just as guardian dolls are animated with the souls of children, mirror men get their spark from adults-usually criminals. They are created to be the spies and assassins of the White Witches, and their construct nature makes them utterly loyal to the Jadwiga. Mirror men are cunning, merciless, and determined in the execution of their orders. Underneath their garments they resemble zombies, or even flesh golems. All unnecessary internal organs and fluids have been removed, and what remains is wrapped in cold muscle and skin of a grayish hue that is magically maintained and self-repairing. No eyes remain within their skulls, but the soul trapped within the mirror can sense all movement nearby. While some golems and constructs are simple replacements for guards and protectors, the mirror men of Irrisen represent a very specific design. They are intended to investigate, spy, and report, and are created with abilities carefully selected to help them fulfill these purposes. Even their ability to magically create light serves to allow the witches to see better while peering through their looking-glass faces. Mirror men are trained to be familiar with nobility of the region, to detect forgeries, and to investigate crimes. There remains a flaw in their creation, however- any caster of Irriseni mirror sight can peer through the face of any mirror man she's familiar with. The White Witches of Irrisen often assume foreigners don't know their secrets, but nothing save tradition prevents an outlander from learning the spell. A mirror man can't attempt to resist an unwanted connection, and its only recourse when used as an ambulatory sensor for someone unauthorized is to cover its face and send a warning to the witch who governs it. Habitat & Society For centuries, the Iron Guard observed and recorded events in Whitethrone; its members nominally served the Jadwiga but their true allegiance was to Baba Yaga-a fact that did not go unnoticed by the descendants of the 14 queens. Under Elvanna's reign, the mirror men were created to act as the eyes and ears, not of the Iron Guard, but of the White Witches themselves. For decades, the Jadwiga Elvanna maintained that the role of the mirror men was to provide additional oversight of the kingdom, but with the recent usurpation of Baba Yaga, the mirror men's role as the White Witches' secret police has become evident. Mirror men have broad authority to question, search, and arrest anyone but the Jadwiga themselves. Even with telepathy, mirror men avoid self-expression as much as possible whenever a gesture or pointed finger will suffice. In Whitethrone, it is universally understood when a mirror man jabs a finger at someone, followed by a tap on the open palm of their other hand, it means the citizen should stand still and allow himself to be viewed through the unsettling visage of the mirror man. There is no love lost between the mirror men and any of Irrisen's monstrous citizens (or the Iron Guard, for that matter). The constructs' presence only fuels an atmosphere of paranoia and distrust as the monsters are left wondering who might be watching them as well as the native Ulfen slaves. Construction The creation of a mirror man requires a single living creature (usually human), which is killed during the process. Its manufacture requires costly alchemical reagents and a mirror faceplate crafted specifically for the creature. The creature's soul is bound to the mirror, which prevents it from continuing to the afterlife and protects it from being resurrected or raised from the dead. Most of the original creature's memories are expunged, but mirror men retain many of their originals skills; consequently, the most effective mirror men are former career criminals and foreign spies. The creation process is excruciating to the victim, and creating a mirror man constitutes an evil act. Mirror Man CL 11th; Price 24,500 gp CONSTRUCTION Requirements Craft Construct, animate dead, cat's grace, geas/quest, Irriseni mirror sight, magic jar, sending, creator must be caster level 11th, soul of a living creature that dies or is slain during the creation process; Skill Craft (sculpture) DC 17 or Heal DC 17; Cost 12,500 gp",
    organization: "solitary, pair, or cell (3-7)",
    languages: "Common (can't speak), Giant (can't speak), Hallit (can't speak), Skald (can't speak); telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "detect magic",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "light",
        casterLevel: 10,
        timesPerDay: -1
      }
    ],
    skills: {
      "Knowledge (local)": {
        ranks: 6
      },
      "Knowledge (nobility)": {
        ranks: 6
      },
      Linguistics: {
        ranks: 1,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Perception: {
        ranks: 4,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      "Sense Motive": {
        ranks: 4,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Stealth: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Survival: {
        ranks: 3
      }
    },
    special: {
      "sneak attack": {
        universalMonsterAbility: "Sneak Attack",
        bonus: "2d6"
      },
      "alert master": {
        type: "Su",
        text: "Three times per day, a mirror man can send a brief message to a creature it is familiar with (typically its master). This effect is similar to the sending spell, but it takes only a standard action, the communication is one way, and the target cannot respond to the sending."
      },
      "mirror sight": {
        type: "Ex",
        text: "A mirror man has no eyes, but is capable of visually perceiving through the use of Blindsight, Darkvision, and Low-Light Vision."
      },
      "scrying focus": {
        type: "Su",
        text: "Mirror men are specifically created to interact with the spell Irriseni mirror sight (Pathfinder Adventure Path #67 73) in special ways. The construct's mirrored face can serve as a known mirror, allowing the caster to see from the perspective of the construct's face with normal sight. The caster may also communicate telepathically with the mirror man. As a swift action, the mirror man can choose to remember and record up to 1 minute of what it sees. This memory is visual only and can be viewed remotely through Irriseni mirror sight or played back across its face. The mirror man can only retain 1 minute of images; when its memory is full, old memories are erased so it can remember new ones. The caster may interact with the mirror man's soul mirror even after the construct body is destroyed as long as the face itself remains unbroken. If the construct has not been destroyed, an opponent must succeed at a sunder attempt targeting the mirrored face to break the mirror. The mirrored face is considered a separate weapon with a hardness of 1 and hit points equal to the mirror man's Hit Dice. If the construct has been destroyed, the mirrored face can be smashed as a standard action."
      },
      "soul mirror": {
        type: "Su",
        text: "The soul of a mirror man is bound within its mirrored face. As long as the face remains intact, it can be affixed to a new construct body using the same cost to create a new construct. Once a soul is bound to a mirror, the soul continues to learn, and if the mirror is later affixed to a new body, the soul retains any memories from its previous bodies. Susceptible to Mind-Affecting Effects (Ex) The self-aware and autonomous nature of a mirror man makes it susceptible to mind-affecting effects, despite the fact that it is a construct."
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        value: null
      }
    },
    resistances: [
      "susceptible to mind-affecting effects"
    ]
  },

  "Winter Fey": {
    source: "The Shackled Hut",
    creatureType: "fey",
    subTypes: [
      "cold"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Small",
    hd: 8,
    hdVal: 6,
    cr: 7,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 20,
      dex: 19,
      con: 20,
      int: 16,
      wis: 13,
      cha: 15
    },
    feats: [
      {
        name: "Cleave",
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
        name: "Weapon Focus",
        type: "Combat",
        value: "Scythe",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Scythe",
        name: "Scythe",
        damage: "2d4",
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
        weapon: "Kick",
        name: "Kick",
        damage: "1d4",
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
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        bonuses: [
          {
            source: "inherent",
            value: "1d6",
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
        damageType: "cold iron"
      },
      naturalArmor: 5
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "temperate forests, mountains, or underground",
    visualDescription: "From his snow white beard and blue, frost-covered face to the wicked look in his frozen eyes, this little humanoid betrays a cruelty that only winter itself can match.",
    description: "Infused with the primal power of winter's chill, a winter fey possesses the power to freeze its victims with a mere touch. It is said that this wintery power freezes the heart of any normally good fey, corrupting the creature's nature and infusing it with hatred and spite. While a winter fey is visually recognizable as being a variant of its normal counterpart, its personality is decidedly altered. Whereas most fey are merely capricious and whimsical, winter fey take pleasure in causing pain and suffering. A winter fey is the same size as its normal counterparts, but it typically weighs a bit more because of the ice crusting its body. Ecology Found mainly in the reaches of the far north and the frigid regions of the First World, winter fey live in places far too cold for most humanoids to survive without magical assistance. The harsh landscape and bone-chilling climate match the hearts of these bitter creatures. A winter fey found far from cold lands is typically acting on the orders of a liege or in pursuit of an especially wily victim, as few choose to wander so close to the \"hot lands\" without a particular purpose in mind. However, winter fey have been known to travel deep into warmer climates in order to play a worthy enough trick on a creature. Some winter fey are known to move south every winter in search of new creatures to steal from, torment, or maim. As cruel as a winter storm, a winter fey feels no remorse for those it hurts. For its own amusement, a winter fey leads its victims far from civilization without any means to protect themselves from the elements and then abandon them, typically leaving them to freeze to death. Such a fey creature targets the innocent and gullible simply for sinister laughs, spending months crafting an exceptional ruse and then watching it play out. Savoring such delicious cruelty is what winter fey live for. Habitat & Society On Golarion, winter fey live in the cold northern realms, staying far away from the heat of summer. When winter strikes, these malevolent creatures sometimes migrate south with the snowstorms, then return to the north as quickly as they came, at the first sign of the spring thaw. Being able to craft an original and depraved trick upon a creature and share the tale of that trick is how a winter fey gains respect and ultimately a greater status among its peers. Once a winter fey plays a trick upon a creature, that creature is considered marked. Although it is not forbidden to trick a creature marked by another winter fey, young winter fey caught doing so are looked on as sloppy and unoriginal. As such, young winter fey are constantly looking for new creatures upon whom to let their wicked imaginations run wild, while their elders poach their marked targets. Sometimes winter fey work together to pull off a truly heinous yet epic trick. One of the best-known times that a group of winter fey worked together like this involved a bloody carnival of torture and death. A winter fey's characteristic icy claws are frequently stained with blood. Winter fey love nothing more than to feel the suffering they cause with their own frosty hands. Blood and gore from warm-bodied creatures are among the few sources of warmth winter fey willingly touch, and they often display a prize of their most recent murderous delight-usually a body part of one of their victims-until a new target is marked for death. Creating a Winter Fey \"Winter fey\" is an inherited template that can be added to any fey creature without the fire subtype, referred to hereafter as the base creature. A winter fey uses all the base creature's statistics and special abilities except as noted here. CR: As base creature +1. Alignment: Any evil. Type: The base creature's type remains fey, but it gains the cold subtype. AC: Natural armor improves by +2. Defensive Abilities: A winter fey retains the base creature's defensive abilities, and gains the following ability. Fast Healing (Su): A winter fey gains fast healing 3 when in contact with ice or snow. Speed: A winter fey retains the base creature's normal movement and gains the following. Ice Walking (Ex): A winter fey takes no penalty to speed or on Acrobatics, Climb, or Stealth checks in snowy or icy terrain or weather conditions and can walk across snow crusts or thin ice without breaking through. Attacks: A winter fey retains all the natural weapons, manufactured weapon attacks, and weapon proficiencies of the base creature. A creature with hands gains one claw attack per hand; the winter fey can strike with each of its claw attacks at its full attack bonus. A claw attack deals damage as if the winter fey RPG Bestiary 301-302). If the base creature already had claw attacks with its hands, use the winter fey claw damage only if it's better. Special Attacks: A winter fey retains the base creature's special attacks and gains the ones listed below. Frigid Touch (Su): Once per day, a winter fey may attempt a touch attack against a foe; if successful, it deals 1d6 points of Dexterity damage by freezing the blood in its victim's veins and numbing its victim to the bone. Frosty Grasp (Su): A winter fey's natural attacks, as well as any weapons it wields, deal an additional 1d6 points of cold damage. Abilities: A winter fey's Strength and Constitution increase by +2. Skills: A winter fey gains a +4 racial bonus on Survival checks when in cold environments.",
    organization: "solitary, pair, or gang (3-12)",
    languages: "Aklo, Common, Giant, Sylvan",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 8
      },
      Bluff: {
        ranks: 8
      },
      Climb: {
        ranks: 8
      },
      "Escape Artist": {
        ranks: 8
      },
      Intimidate: {
        ranks: 8
      },
      "Knowledge (nature)": {
        ranks: 8
      },
      Perception: {
        ranks: 8
      },
      "Sense Motive": {
        ranks: 8
      },
      Stealth: {
        ranks: 8
      },
      Survival: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      }
    },
    special: {
      "frigid touch": {
        type: "Ex"
      },
      "frosty grasp": {
        type: "Ex"
      },
      "boot stomp": {
        type: "Ex",
        text: "A winter redcap wears heavy iron boots with spiked soles that it uses to deadly effect in combat. These boots give the winter redcap a kick attack that it can make as a secondary attack, either as part of a full-attack action or as part of its movement, just as if it had the Spring Attack feat."
      },
      "heavy weapons": {
        universalMonsterAbility: "Heavy Weapons",
        text: "A winter redcap can wield weapons sized for Medium creatures without penalty."
      },
      "irreligious": {
        type: "Ex",
        text: "Bitter and blasphemous, winter redcaps cannot stand the symbols of good-aligned religions. If a foe spends a standard action presenting such a holy symbol, any winter redcap that can see the creature must succeed at a DC 15 Will save or become frightened for 1 minute and attempt to flee. A winter redcap who successfully saves is shaken for 1 minute."
      },
      "icewalking": {
        universalMonsterAbility: "Icewalking",
        text: 'A winter fey takes no penalty to speed or on Acrobatics, Climb, or Stealth checks in snowy or icy terrain or weather conditions and can walk across snow crusts or thin ice without breaking through.',
      },
      "red cap": {
        type: "Su",
        text: "A winter redcap wears a tiny, shapeless woolen hat, dyed over and over with the blood of its victims. While wearing this cap, a winter redcap gains a +4 bonus on damage rolls (included in the above totals) and fast healing 3. These benefits are lost if the cap is removed or destroyed. Caps are not transferable, even between other redcaps. A winter redcap can create a new cap to replace a lost cap with 10 minutes of work, but until the winter redcap takes a standard action to dip the cap in the blood of a foe the winter redcap helped to kill, the cap does not grant its bonuses."
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        condition: "when in contact with snow or ice",
        value: null
      }
    },
    resistances: [
      "vulnerable to fire"
    ]
  },

};
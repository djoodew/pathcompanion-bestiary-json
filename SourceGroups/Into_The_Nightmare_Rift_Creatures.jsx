
export const Into_The_Nightmare_RiftCreatures = {
  "Kurshu The Undying": {
    source: "Into The Nightmare Rift",
    creatureType: "outsider",
    subTypes: [
      "evil",
      "extraplanar",
      "lawful"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Large",
    hd: 17,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "Blindsense 60 ft.",
      "Darkvision 120 ft.",
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 20,
      dex: 23,
      con: 26,
      int: 31,
      wis: 20,
      cha: 25
    },
    feats: [
      {
        name: "Combat Casting",
        type: "General"
      },
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Craft Wondrous Item",
        type: "ItemCreation"
      },
      {
        name: "Great Fortitude",
        type: "General"
      },
      {
        name: "Hover",
        type: "Monster"
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
        name: "Scribe Scroll",
        type: "ItemCreation"
      }
    ],
    attacks: [
      {
        weapon: "Slam",
        name: "2 Slams",
        damage: "1d4",
        bonuses: [
          {
            source: "inherent",
            value: "1d4",
            appliesTo: "damageType",
            damageType: "intelligence drain"
          }
        ],
        type: "primary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        specialAbility: "grab",
        damage: "1d6",
        type: "secondary"
      }
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "cold iron and magic"
      },
      SR: {
        value: 26
      },
      naturalArmor: 13
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any land (extraplanar)",
    visualDescription: "This large creature has the upper body of a winged woman and the lower body of a snake. She looks withered, like a preserved corpse.",
    description: "Lissala's herald is Kurshu the Undying, a powerful and dutiful agent of magic who has been suffering in her master's long absence. Known as \"Kurshu the Divine Serpent\" during the time of Thassilon, she possesses a powerful serpentine lower body, a female humanoid upper body, and three pairs of feathered wings. Her humanoid half is more serpentine than that of a lillend; she has tiny scales on her arms and a scaly cobra hood that blends into her hair. She looks haggard, as if aff licted with a chronic wasting disease, and her movements betray an ancient and resigned weariness. Her voice is thin and susurrant, and she tends to hiss when she speaks, especially when angry. She tends to verbalize in Thassilonian even when communicating telepathically. She is a lost being without a purpose, devoted to Lissala but unable to find her. Records of the herald's origin are lost to passing centuries, but she claims she was created in her current form by the goddess, who used parts from several different creatures and then granted her true life. The goddess's withdrawal has taxed the herald's ability to maintain her own life, and eventually she may fragment back into her component pieces (which may or may not be alive after this transformation). Bound to Lissala by magic and an unshakable sense of duty, she resents her master for leaving her behind to wither away, and despises herself for knowing that if Lissala returns, she will crawl back to the goddess like a sheltered, neglected child who has no alternative but to love her creator and jailor. Ecology Kurshu's degenerative condition means that (unlike most outsiders) she must eat to survive; otherwise, she wastes away into a skeletal, nearly helpless version of herself. She reached that lowest point only once, but was lucky enough to catch suitable prey unawares and work her way back to an exhausted but functional level. Consequently, Kurshu makes sure to feed at least every few days. As there are few creatures in Lissala's service who have the power to conjure her, Kurshu is mainly left to her own devices, but (unlike heralds of active deities) may choose to respond to a summons from any spellcaster. In exchange for her services, she demands that she be given outsiders she can enslave for later feeding, Thassilonian magic items, or items that bear some lingering piece of Lissala's power. She is knowledgeable about Thassilonian magic, rune magic, and Azlanti practices, though she is hesitant to speak of the latter when on Golarion lest it attract unwanted attention from slaves of the aboleths; having witnessed Earthfall at a distance, she has no desire to subject herself to a direct attack by entities who control that kind of magic. Kurshu has no compunction about killing something that defies her or appears to be withholding information or objects she wants (if she has to, she can compel answers from its corpse using limited wish to duplicate speak with dead). She feels her pseudo-mortality at all times and fears death, and is likely to flee any encounter in which she feels outmatched. Habitat & Society Kurshu is alone in the multiverse. Her goddess is gone, Lissala's other divine servants have perished or converted to other faiths, mortals who knew her at the height of Thassilon are long dead or in suspended animation, and her existence has no purpose. Her hunger for outsider souls repulses her (as she never had to eat while Lissala was present) but she accepts it as a necessary embarrassment because she is unwilling to accept death-or an eternity spent as an invalid. She normally keeps a \"stable\" of charmed outsiders near her (using her limited wish spell-like ability to duplicate charm monster) so she can slay and consume one if necessary. Her devotion to law and hatred of chaos means her minions are usually daemons, demons, or proteans; though she finds their flesh repugnant, she would rather destroy a minion of disorder than a devil or similar lawful evil outsider. She is stern but courteous to these minions, who obey and respect her power even beyond the enforced friendliness of the magic that binds them to her. Because of her chaotic associates, she has survived many hostile encounters in which opponents attacked her with lawful magic (such as order's wrath)-such attacks do not harm her, giving her a few vital seconds to decide whether she wants to retaliate or abandon her minions and flee. The herald spends her infinite hours wandering the planes in search of Lissala or visiting Golarion to bask in places sacred to her missing goddess, trying to detect echoes of her master's presence like an old widower smelling his dead wife's clothes for a hint of perfume to spark a long-forgotten memory.",
    organization: "solitary or cabal (herald and 1d4 charmed outsiders of CR 5 to CR 10)",
    languages: "Aklo, Azlanti, Draconic, Infernal, Terran, Thassilonian; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "detect magic",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "floating disk",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "mage hand",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "read magic",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "tongues",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "cure serious wounds",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "dispel magic",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "displacement",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "fireball",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "teleport, greater",
        casterLevel: 15,
        limitations: "self plus 50 lbs. of objects only",
        timesPerDay: 3
      },
      {
        name: "hold person",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "lightning bolt",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "limited wish",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "magic missile",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "plane shift",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "slow",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "stinking cloud",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "vampiric touch",
        casterLevel: 15,
        timesPerDay: 3
      }
    ],
    skills: {
      Diplomacy: {
        ranks: 17
      },
      "Escape Artist": {
        ranks: 17
      },
      Fly: {
        ranks: 17
      },
      Heal: {
        ranks: 17
      },
      Intimidate: {
        ranks: 17
      },
      "Knowledge (arcana)": {
        ranks: 20
      },
      "Knowledge (dungeoneering)": {
        ranks: 17
      },
      "Knowledge (history)": {
        ranks: 17
      },
      "Knowledge (planes)": {
        ranks: 17
      },
      "Knowledge (religion)": {
        ranks: 17
      },
      Perception: {
        ranks: 17
      },
      "Sense Motive": {
        ranks: 17
      },
      Spellcraft: {
        ranks: 20
      },
      Stealth: {
        ranks: 17
      },
      Swim: {
        ranks: 17
      },
      "Use Magic Device": {
        ranks: 20
      }
    },
    special: {
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "1d8+5"
      },
      "power surge": {
        type: "Su",
        text: "Three times per day as a swift action, the herald can increase the DC of her next spell-like ability (if it is cast that round) by +2."
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "human; alter self"
      },
      feed: {
        type: "Su",
        text: "Once per day, the herald can devour an outsider's corpse as a full-round action. For each Hit Die of the devoured outsider, the herald automatically removes 1 negative level gained from her divine separation ability. The consumed outsider must have at least 8 Hit Dice. Intelligence Drain (Su) The herald drains 1d4 points of Intelligence each time she hits with her slam attack. (The herald does not heal any damage when she uses her Intelligence drain.) Power Surge (Su) Three times per day as a swift action, the herald can increase the DC of her next spell-like ability (if it is cast that round) by +2."
      },
      "spell-like crafting": {
        type: "Su",
        text: "The herald may use any of her spell-like abilities when crafting magic items as if they were actual spells."
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        damageType: "acid",
        value: 5
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    },
    resistances: [
      {
        damageType: "cold",
        value: 30
      },
      {
        damageType: "electricity",
        value: 30
      },
      {
        damageType: "fire",
        value: 30
      },
      {
        damageType: "sonic",
        value: 30
      }
    ]
  },

};
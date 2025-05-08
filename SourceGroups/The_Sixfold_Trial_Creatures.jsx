
export const The_Sixfold_TrialCreatures = {
  Salikotal: {
    source: "The Sixfold Trial",
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
    hd: 9,
    hdVal: 10,
    cr: 7,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 30,
      maneuverability: "Good",
      fly: 60
    },
    abilities: {
      str: 18,
      dex: 22,
      con: 17,
      int: 15,
      wis: 19,
      cha: 18
    },
    feats: [
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Dagger",
        choiceSource: "Improved Critical"
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
        name: "Wind Stance",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Dagger",
        enchantments: [
          {
            name: "Enhancement Bonus +1",
            source: "inherent"
          }
        ],
        name: "Dagger",
        damage: "1d4"
      },
      {
        weapon: "Tail",
        name: "Tail",
        damage: "1d4"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Dagger",
        enchantments: [
          {
            name: "Enhancement Bonus +1",
            source: "inherent"
          }
        ],
        name: "Dagger",
        damage: "1d4"
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "good"
      },
      SR: {
        value: 18
      },
      naturalArmor: 6
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Hell)",
    visualDescription: "On lean limbs the color of spilt blood creeps a being of sinister grace. Eyes like embers and a sneer full of needle-thin teeth gleam from an unmistakably fiendish visage. A pair of crimson wings sprout from the back of the hairless humanoid form, fluttering silently like an assassin's cloak, while in one hand it clutches the twisted, dagger-like horn of some infernal terror.",
    description: "Prince-killers and assassins of souls, salikotals serve as the bloody chisels by which the lords of Hell subtly shape the mortal world to their whims. Soaring through the night on silent wings, these murderous devils care nothing for life or reason, knowing only a single, murderous goal. Cloaked by shadow and silence, few ever glimpse the sharp features of a salikotal, for Hell's death-dealers reveal themselves only amid the haze of fading life. Lean, deft hunters, salikotals move like terrible predatory birds, each taloned step measured, cautious, and full of deadly intent. Protected by an armor of sharp, thin scales, these agile devils universally stand 5 feet, 4 inches tall, and weigh 85 pounds, their barbed frames supporting the breadth of their 8-foot-wide, bat-like wings. They have full control over their slender tails, nimbly manipulating objects and even wielding deadly, Hell-forged blades in these dexterous, prehensile appendages. Ecology Salikotals rise from the tenebrous reaches of Erebus's vaulted heights. Unblinking and endlessly patient, salikotals haunt the claustrophobic upper realms of the lightless labyrinth, stealthy and watchful but caring little for the doings of intruders or their lesser kin. Only the summons of conjurers or the diabolical elite rouse them from their eerie aerial stalkings, drawing them forth from the shadows for a chance to hone their death-dealing expertise in the name of Hell. Naturally silent, salikotals never vocalize even the slightest sound, relying on their innate telepathic abilities for communication. Even when using such mental interaction, though, the devils prove terse and resistant to conversation. For most summoners, a salikotal's only communication is a slow nod acknowledging its orders, and a nod in answer to the question of its murderous success. Habitat & Society Salikotals have little to do with others of their kind, be they other salikotals or other lesser devils in general. Emotionless and rigid even beyond the typical disciplines of Hell, these assassins realize they exist for but a single reason: to sow death. Their cold precision only wavers when they discuss payment for their most notorious murderous methods, wherein they demand specific types of gemstones in compensation for their grisly work. Few non-devils dare to suppose why salikotals request such precise payments, refusing to work for any other recompense, but among the damned spread rumors of vast vaults filled with glistening jewels, each a fabulous treasure and a representation of a life cut short by the blades of Hell. Summoning Salikotals As in all things, salikotals prove emotionless when it comes to being summoned. They have little reason to purposefully resist or accept a diabolist's call, unless ordered to do so by their infernal masters. Once a salikotal is summoned, though, only murder interests it. Any Charisma check made as part of the spell planar binding to convince a salikotal to undertake a mission other than assassination takes a -2 penalty. Once a salikotal has agreed to perform a murder for its summoner, it explains the signature vengeances its kind can inflict upon a victim and offers to exact one upon its summoner's victim for an associated price. The devil requests 1,000 gp for every Hit Die its target possesses (intrinsically gauging its victim's prowess), to be paid entirely in one of three types of gemstones: ruby for fideicide, onyx for necrocide, and jacyinth for omnicide. Salikotals prove exceedingly particular in these payments, and if a summoner cannot pay the price in the type of gem requested, the devil refuses to exact one of its vengeances. If the summoner tries to force a salikotal to use one of its vengeances, the devil takes offense and all of the summoner's Charisma-related interactions with it in the future take a -2 penalty.",
    organization: "solitary or team (2-8)",
    languages: "Celestial, Common, Infernal; telepathy 100 ft. Gear +1 dagger",
    spellLikeAbilities: [
      {
        name: "teleport, greater",
        casterLevel: 9,
        limitations: "self plus 50 pounds of objects only",
        timesPerDay: -1
      },
      {
        name: "locate creature",
        casterLevel: 9,
        timesPerDay: -1
      },
      {
        name: "knock",
        casterLevel: 9,
        timesPerDay: -1
      },
      {
        name: "blur",
        casterLevel: 9,
        limitations: "self only",
        timesPerDay: 3
      },
      {
        name: "darkness",
        casterLevel: 9,
        timesPerDay: 3
      },
      {
        name: "dimension door",
        casterLevel: 9,
        timesPerDay: 3
      },
      {
        name: "dispel magic",
        casterLevel: 9,
        timesPerDay: 3
      },
      {
        name: "silence",
        casterLevel: 9,
        timesPerDay: 3
      },
      {
        name: "suggestion",
        casterLevel: 9,
        timesPerDay: 3
      },
      {
        name: "mislead",
        casterLevel: 9,
        timesPerDay: 1
      },
      {
        name: "passwall",
        casterLevel: 9,
        timesPerDay: 1
      },
      {
        name: "statue",
        casterLevel: 9,
        limitations: "self only",
        timesPerDay: 1
      },
      {
        name: "summon devil",
        casterLevel: 9,
        limitations: "level 3, 4 imps, 35%",
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 9
      },
      "Disable Device": {
        ranks: 12
      },
      Disguise: {
        ranks: 12
      },
      "Escape Artist": {
        ranks: 12
      },
      "Knowledge (local)": {
        ranks: 9
      },
      "Sense Motive": {
        ranks: 9
      },
      "Sleight of Hand": {
        ranks: 12
      },
      Stealth: {
        ranks: 9
      }
    },
    special: {
      "contract killer": {
        type: "Su",
        text: "A salikotal gains a +2 bonus on attack and damage rolls when attacking a specific individual it has marked for death. At the beginning of each day, it determines an individual to serve as its target and which one of its three vengeances it may make use of that day. It may not change this target or ability until the next day. The target may be any specific creature the salikotal knows of, even if it has not seen its target before. This target is treated as being known to a salikotal for the purposes of using its locate creature ability, even if the devil has never seen its victim before. Sneak Attack (Ex) Anytime a salikotal's opponent is denied his Dexterity bonus to AC, or if a salikotal flanks his opponent, he deals an extra 3d6 points of damage. This ability is just like the rogue's sneak attack and subject to the same limitations."
      },
      "sneak attack": {
        universalMonsterAbility: "Sneak Attack",
        bonus: "3d6"
      },
      suicide: {
        type: "Su",
        text: "As a standard action, a salikotal may target itself with a coup de grace attack. If the salikotal reduces itself to fewer than 0 hit points-or fails to do so but still fails the associated Fortitude save (DC = 10 + damage dealt)-the salikotal erupts in a burst of destructive energy. Any creature within 15 feet of a salikotal that commits suicide is damaged by a blast of metal shards and needle-like scales, taking 6d6 points of damage (DC 17, save for half). The save DC is Constitution-based. Upon using this ability, a salikotal is permanently destroyed. This effect only takes place if a salikotal willingly ends its own life, not if it is killed by outside effects."
      },
      vengeance: {
        type: "Su",
        text: "While seeking a victim a salikotal prepares itself daily, honing its will to effectively slaughter its intended quarry. On a given day, chosen as part of its contract killer ability, a salikotal may gain the benefit of any one of the following powers, either the one it feels will most aid it or whichever one its summoner requests. Only one of these abilities is active on a given day, and it only comes into effect when a salikotal kills its intended target with a coup de grace. These executions only function on living creatures. Fideicide: The victim's soul is immediately shunted to a infernal prison on Erebus, the third layer of Hell. The soul can be returned to life, but upon casting the spell, the spellcaster attempting the resurrection takes an amount of fire damage equal to 1d6 x the victim's number of Hit Dice, and must make an immediate concentration check (DC 10 + damage delt + spell level) or lose the spell. Necrocide: After 1d4 rounds, the victim's body animates as a zombie under the salikotal's control. The devil may permanently grant control of the zombie to any sentient creature as a free action. Omnicide: The victim's body is utterly destroyed, disintegrating without a trace. Its clothing and possessions remain unharmed. Only spells that do not require a portion of the corpse may return the victim to life."
      }
    }
  },

  "Hand of the Inheritor": {
    source: "The Sixfold Trial",
    creatureType: "outsider",
    subTypes: [
      "angel",
      "extraplanar",
      "good",
      "lawful"
    ],
    alignments: [
      "Lawful Good"
    ],
    size: "Large",
    hd: 18,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 50,
      maneuverability: "Good",
      fly: 150
    },
    abilities: {
      str: 25,
      dex: 21,
      con: 22,
      int: 22,
      wis: 24,
      cha: 23
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
        name: "Improved Shield Bash",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Shield Master",
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
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Spiked shield",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Longsword",
        enchantments: [
          {
            name: "Enhancement Bonus +2",
            source: "inherent"
          }
        ],
        name: "Longsword",
        damage: "1d8"
      },
      {
        weapon: "Spiked heavy steel shield",
        enchantments: [
          {
            name: "Enhancement Bonus +2",
            source: "inherent"
          },
          {
            name: "Axiomatic",
            source: "inherent"
          },
          {
            name: "Holy",
            source: "inherent"
          }
        ],
        name: "Spiked heavy steel shield",
        damage: "2d6"
      }
    ],
    immunities: [
      "Immune to fear"
    ],
    defense: {
      saves: {
        All: [
          {
            value: 4,
            note: "vs. poison,"
          },
          {
            value: 4,
            type: "resistance",
            note: "vs. evil"
          }
        ]
      },
      DR: {
        value: 10,
        damageType: "evil"
      },
      SR: {
        value: 26
      },
      naturalArmor: 15
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any good-aligned plane",
    visualDescription: "This masculine, golden-skinned angel stands taller than the greatest human champion. His halo is a spinning wheel of blades above his head, and with a gesture it flies to his left arm like a deadly spiked shield, while great wings of brilliant energy manifest from his back.",
    description: "The Hand of the Inheritor is a warrior angel, first to answer Iomedae's call whenever she must directly intervene on Golarion. As fast as the greatest angels, he leads the charge when her celestial armies must go to war. A veteran of countless sorties into the Abyss, the Hand fights with a song of battle on his lips and unbreakable courage in his heart. He looks like a tall, golden-skinned angel with a halo of sword-like blades, which he can also wear on his arm like a spiked shield. He may manifest or hide a pair of feathered wings at will, which may be any color, though he does not actually need them to fly. The Hand is not a diplomatic angel, and Iomedae rarely calls upon him when the situation requires someone willing to mince words. He once served the Empyreal Lord Ragathiel (at which time he was called the Hand of Vengeance) but asked to serve Iomedae after Aroden died, as she needed a hero to be her champion. Ecology The Hand of the Inheritor does not need to eat or sleep, though he is known to take a long pause after a great battle to think about fallen comrades with other veterans. He refers to Iomedae as \"My Lady, the Just Queen of Heaven,\" and treats her as if he were a knight holding a chaste adoration for a righteous courtly lady. His haloshield is called the Brightsword, and he sometimes refers to it as if it were an independent being, though it acts according to his will; as a free action he can pull a +2 longsword from the halo-shield at any time and wield it as a weapon, though the sword vanishes if ever separated from him. Habitat & Society The angel focuses on honorable combat, the preservation of just rulers, and valorous deeds. When he is not needed on Golarion, he guards noble souls through the Astral to Pharasma's court, patrols the borders of Iomedae's realm in search of abominations from the Abyss, duels devils on neutral ground to better learn their tactics, and watches over youths his patron has marked for greatness. He enjoys battle hymns and marching music, though his voice is more suited for harmonizing with a true performer than leading a song. He is adept at determining if a rampaging monster intends evil or if it is merely hungry, and is merciful enough to only slay the ones intending to do wrong. Likewise, he feels no guilt in slaying those who embrace evil, but strikes to subdue when his opponent is magically controlled or otherwise compromised in his decision-making. Though he is actually older than Iomedae, he defers to her divine wisdom and experience as a mortal, for he understands his perspective as an immortal angel living in the realms beyond Golarion is very different and sometimes emotionally distant from the thoughts and concerns of humanity. He is an ally of the heralds of Sarenrae and Shelyn, but is wary of the herald of Cayden Cailen, for that one's overt sexuality makes him slightly uncomfortable (as he spent thousands of years serving the Empyreal Lord of chastity). Heralds of the Gods: Revisited The Hand of the Inheritor stands among a special class of unique, godly servants known as heralds. With few exceptions, every one of Golarion's deities has its own herald, a favored minion that serves as a messenger and emissary throughout the planes and upon the mortal realm. While not necessarily the most powerful of a deity's minions, heralds embody fundamental elements of a god's faiths and philosophies, and thus prove particularly suited to interactions with mortal worshipers-although a herald appears only at the direct order of a deity, not merely because a powerful cleric requires aid. Thus, heralds are creatures myth, and their appearances mark lives and events of legend. In the Pathfinder RPG, heralds are unique outsiders of approximately CR 15 with 18 or fewer Hit Dice, making them available for summons via the spell greater planar ally. Only a deity's worshipers can summon its herald; thus, even the most powerful worshiper of Sarenrae can never summon the Hand of the Inheritor. In addition, only divine spellcasters can summon heralds, preventing arcane casters and spells like planar binding from effectively calling upon such beings. Even if a character proves powerful enough to call out to a herald, a deity has the final say in whether or not its emissary answers a worshiper's summons, granting its herald's service only to followers in the most extreme need or whose acts directly further its will. Currently, the statistics for eight heralds have appeared in Pathfinder Adventure Paths, while all of these divine emissaries are described in Pathfinder Chronicles: Gods & Magic. Herald Deity Volume Yethazmari Lamashtu Pathfinder #5 The Night Monarch Desna Pathfinder #5 The Lawgiver Abadar Pathfinder #8 The Prince in Chains Zon-Kuthon Pathfinder #11 Thais Cayden Cailean Pathfinder #14 The Menotherian Calistria Pathfinder #17 Sunlord Thalachos Sarenrae Pathfinder #20",
    organization: "solitary or squad (the Hand plus 2-5 astral devas)",
    languages: "Celestial, Draconic, Infernal; truespeech",
    spellLikeAbilities: [
      {
        name: "aid",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "detect evil",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "dispel magic",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "restoration, lesser",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "magic weapon",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "plane shift",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "remove fear",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "burst of glory",
        casterLevel: 18,
        limitations: "Pathfinder Chronicles: Gods and Magic 21",
        timesPerDay: 3
      },
      {
        name: "flame strike",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "holy smite",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "mark of justice",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "order's wrath",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "power word stun",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "raise dead",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "see invisibility",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "blade barrier",
        casterLevel: 18,
        timesPerDay: 1
      },
      {
        name: "magic weapon, greater",
        casterLevel: 18,
        timesPerDay: 1
      },
      {
        name: "restoration, greater",
        casterLevel: 18,
        timesPerDay: 1
      },
      {
        name: "heal",
        casterLevel: 18,
        timesPerDay: 1
      }
    ],
    preparedSpells: {
      casterLevel: 18,
      spells: [
        {
          name: "death ward",
          level: 4
        },
        {
          name: "dispel evil",
          level: 4
        },
        {
          name: "dispel evil",
          level: 4
        },
        {
          name: "cure moderate wounds",
          level: 3
        },
        {
          name: "prayer",
          level: 3
        },
        {
          name: "prayer",
          level: 3
        },
        {
          name: "bull's strength",
          level: 2
        },
        {
          name: "bull's strength",
          level: 2
        },
        {
          name: "resist energy",
          level: 2
        },
        {
          name: "resist energy",
          level: 2
        },
        {
          name: "resist energy",
          level: 2
        },
        {
          name: "cure light wounds",
          level: 1
        },
        {
          name: "cure light wounds",
          level: 1
        },
        {
          name: "cure light wounds",
          level: 1
        },
        {
          name: "cure light wounds",
          level: 1
        },
        {
          name: "divine favor",
          level: 1
        },
        {
          name: "divine favor",
          level: 1
        }
      ],
      casterClass: "Paladin"
    },
    skills: {
      Craft0: {
        subSkill: "weaponsmithing",
        ranks: 18
      },
      Diplomacy: {
        ranks: 9
      },
      Fly: {
        ranks: 20
      },
      Heal: {
        ranks: 9
      },
      Intimidate: {
        ranks: 21
      },
      "Knowledge (arcana)": {
        ranks: 9
      },
      "Knowledge (history)": {
        ranks: 21
      },
      "Knowledge (nobility)": {
        ranks: 9
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
      Spellcraft: {
        ranks: 18
      },
      Swim: {
        ranks: 18
      }
    },
    special: {
      "lay on hands": {
        type: "Ex",
        preText: "15/day, 9d6 hit points, as an 18th-level paladin"
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        damageType: "evil weapons and effects",
        value: 10
      }
    }
  },

  "Stymphalides Swarm": {
    source: "The Sixfold Trial",
    creatureType: "magical beast",
    subTypes: [
      "swarm"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Tiny",
    hd: 7,
    hdVal: 10,
    cr: 6,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 10,
      maneuverability: "Average",
      fly: 60
    },
    abilities: {
      str: 6,
      dex: 19,
      con: 14,
      int: 2,
      wis: 13,
      cha: 11
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
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Step Up",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "swarm",
        name: "swarm",
        specialAbility: "bleed"
      }
    ],
    immunities: [
      "Immune to fire"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "magic"
      },
      naturalArmor: 6
    },
    space: "10 ft.",
    reach: "0 ft.",
    environment: "warm plains and deserts",
    visualDescription: "This cloud of long-necked birds rises into the air, screeching in a cacophony reminiscent of klaxons and clanging tools. As these avians flit among one another, their feathers glint with a metallic gleam, reflecting even the dimmest light back a hundredfold through a dim haze of blood.",
    description: "Man-eating birds of prey, the rare creatures known as stymphalides stalk the arid plains and coastlines of Golarion in ravenous swarms, shredding warm-blooded animals and unwary travelers with their bladed feathers and dagger-like beaks. From a distance, stymphalides might easily be mistaken for cranes, ibises, or other longnecked birds, though in full sunlight their gleaming feathers and the haze of blood lingering from past meals are impossible to mistake. Peculiarly, the feathers and beak of a stymphalides are made of steel, similar to the metallic hide of a gorgon. The wings of stymphalides are as sharp as knives and often lacerate their prey as the birds swarm and beat their wings against their unfortunate victims' skin. Similarly, their beaks are supernaturally sharp and can pierce the tough hides of animal prey or the armor of those warriors foolish enough to hunt the creatures. Even if a victim of a stymphalides swarm's frenzied attacks manages to fend off the vicious creatures, the wounds caused by the birds continue to bleed long after being inflicted, and the victim often perishes from loss of blood before ever reaching help. Most stymphalides stand approximately 2-1/2 feet tall and weigh little more than 40 pounds. Although mean-tempered and territorial, lone stymphalides prove relatively harmless, thus traveling in swarms of several dozen, relying on strength of numbers to bring down large or dangerous prey. Many tales also tell of enormous breeds of these monstrous birds, powerful enough to prey upon wyverns. These giant stymphalides are said to grow up to 13 feet tall and weigh over 250 pounds, with wingspans reaching upward of 25 feet. Such gigantic stymphalides are rarely seen, preferring to lurk upon desolate cliffs or even amid harsh extraplanar realms. Ecology Unlike vultures and other birds of the deserts and plains, stymphalides do not scavenge carcasses, although they are not above driving away natural scavengers if a large, fresh kill looks particularly inviting. When traveling in flocks, stymphalides prove fearless predators, swooping in and swarming any creature that wanders into their territory. The birds actively hunt their prey, harrying and killing lone individuals or stragglers. The attacks of a stymphalides swarm often prove so vicious that the creatures can take to flight once they have wounded prey, wait for it to bleed to death, and return to pick the corpse clean. Stymphalides generally avoid attacking large groups of people, unless the birds have gathered in a particularly sizable flock. Stymphalides are not purely carnivorous. A lone stymphalides might resort to eating fruit and other plants if it is separated from its flock or food is scarce, and orchards and fields of crops have been devastated by stymphalides when great swarms of the birds, starving from overpopulation or lack of prey, migrate to new territories. Yet although the birds are omnivorous, they seem to prefer meat. Those plainsfolk or desert-dwellers whose livelihoods depend on livestock have learned to fear the sight of flocks of birds silhouetted against the sky, as herds of cattle and other grazing animals have been ravaged by their swarms. Habitat & Society Most swarms of stymphalides roost near watering holes, rivers, and coastal cliffs, preying upon unfortunate creatures desperate enough to seek food or water so near to the dangerous birds' nests. The nests of stymphalides are frequently made from the bones of the creatures' prey, piled into macabre ziggurats upon which entire flocks of the birds rest. Particularly large flocks of the birds construct enormous nests, and giant stymphalides can create towers visible for miles. When not at rest, flocks of the creatures soar high on warm currents of air, relying upon their keen eyesight to spot suitable prey far below. Because of their voracious appetites, flocks of stymphalides must claim a vast swath of territory to maintain their feeding habits. Stymphalides are fiercely territorial, and flocks of the birds frequently fight with one another in swooping aerial battles to determine possession of land. Fortunately for the folk of civilized lands, stymphalides rarely encroach upon areas well traveled by humanoids and other creatures clever enough to bring down one of these metal-winged avians. Among the people of the plains, the metallic birds are often regarded as nearly legendary creatures. Stymphalides breed at an astonishing rate, however, and overpopulation and exhaustion of game frequently force extraordinarily large and deadly groups of the creatures to band together in search of new lands and new prey to devour.",
    organization: "solitary, flock (2-4 swarms), or host (5-8 swarms)",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 0
      },
      Perception: {
        ranks: 7
      }
    },
    special: {
      dazzle: {
        type: "Ex",
        text: "As a stymphalides swarm beats its wings, the birds' steel feathers reflect light in blinding patterns of flashes and flares. While in an area of normal or brighter light, anyone who occupies the same square as a stymphalides swarm at the beginning of its turn must make a DC 15 Fortitude save. Those who fail are blinded for 1d4 rounds, while those who make their saves are dazzled until they spend 1 full round outside the swarm's space. This is a sight-based effect."
      },
      bleed: {
        universalMonsterAbility: "Bleed",
        damage: 1
      }
    }
  },

  "Giant Stymphalides": {
    source: "The Sixfold Trial",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 9,
    hdVal: 10,
    cr: 8,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 20,
      maneuverability: "Poor",
      fly: 120
    },
    abilities: {
      str: 22,
      dex: 15,
      con: 20,
      int: 2,
      wis: 15,
      cha: 17
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Critical Focus",
        type: "Combat"
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
        name: "Flyby Attack",
        type: "Monster"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "bleed",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Talon",
        name: "2 Talons",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        specialAbility: "bleed",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to fire"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "magic and adamantine"
      },
      naturalArmor: 11
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "warm mountains",
    visualDescription: "Every feather like a plate of shimmering armor and its beak the length and sharpness of a knight's lance, this towering, ibis-like bird looks to be sculpted from silver and brass. Standing upon long legs ending in powerful metallic talons, its beady eyes dart about voraciously.",
    description: "Man-eating birds of prey, the rare creatures known as stymphalides stalk the arid plains and coastlines of Golarion in ravenous swarms, shredding warm-blooded animals and unwary travelers with their bladed feathers and dagger-like beaks. From a distance, stymphalides might easily be mistaken for cranes, ibises, or other longnecked birds, though in full sunlight their gleaming feathers and the haze of blood lingering from past meals are impossible to mistake. Peculiarly, the feathers and beak of a stymphalides are made of steel, similar to the metallic hide of a gorgon. The wings of stymphalides are as sharp as knives and often lacerate their prey as the birds swarm and beat their wings against their unfortunate victims' skin. Similarly, their beaks are supernaturally sharp and can pierce the tough hides of animal prey or the armor of those warriors foolish enough to hunt the creatures. Even if a victim of a stymphalides swarm's frenzied attacks manages to fend off the vicious creatures, the wounds caused by the birds continue to bleed long after being inflicted, and the victim often perishes from loss of blood before ever reaching help. Most stymphalides stand approximately 2-1/2 feet tall and weigh little more than 40 pounds. Although mean-tempered and territorial, lone stymphalides prove relatively harmless, thus traveling in swarms of several dozen, relying on strength of numbers to bring down large or dangerous prey. Many tales also tell of enormous breeds of these monstrous birds, powerful enough to prey upon wyverns. These giant stymphalides are said to grow up to 13 feet tall and weigh over 250 pounds, with wingspans reaching upward of 25 feet. Such gigantic stymphalides are rarely seen, preferring to lurk upon desolate cliffs or even amid harsh extraplanar realms. Ecology Unlike vultures and other birds of the deserts and plains, stymphalides do not scavenge carcasses, although they are not above driving away natural scavengers if a large, fresh kill looks particularly inviting. When traveling in flocks, stymphalides prove fearless predators, swooping in and swarming any creature that wanders into their territory. The birds actively hunt their prey, harrying and killing lone individuals or stragglers. The attacks of a stymphalides swarm often prove so vicious that the creatures can take to flight once they have wounded prey, wait for it to bleed to death, and return to pick the corpse clean. Stymphalides generally avoid attacking large groups of people, unless the birds have gathered in a particularly sizable flock. Stymphalides are not purely carnivorous. A lone stymphalides might resort to eating fruit and other plants if it is separated from its flock or food is scarce, and orchards and fields of crops have been devastated by stymphalides when great swarms of the birds, starving from overpopulation or lack of prey, migrate to new territories. Yet although the birds are omnivorous, they seem to prefer meat. Those plainsfolk or desert-dwellers whose livelihoods depend on livestock have learned to fear the sight of flocks of birds silhouetted against the sky, as herds of cattle and other grazing animals have been ravaged by their swarms. Habitat & Society Most swarms of stymphalides roost near watering holes, rivers, and coastal cliffs, preying upon unfortunate creatures desperate enough to seek food or water so near to the dangerous birds' nests. The nests of stymphalides are frequently made from the bones of the creatures' prey, piled into macabre ziggurats upon which entire flocks of the birds rest. Particularly large flocks of the birds construct enormous nests, and giant stymphalides can create towers visible for miles. When not at rest, flocks of the creatures soar high on warm currents of air, relying upon their keen eyesight to spot suitable prey far below. Because of their voracious appetites, flocks of stymphalides must claim a vast swath of territory to maintain their feeding habits. Stymphalides are fiercely territorial, and flocks of the birds frequently fight with one another in swooping aerial battles to determine possession of land. Fortunately for the folk of civilized lands, stymphalides rarely encroach upon areas well traveled by humanoids and other creatures clever enough to bring down one of these metal-winged avians. Among the people of the plains, the metallic birds are often regarded as nearly legendary creatures. Stymphalides breed at an astonishing rate, however, and overpopulation and exhaustion of game frequently force extraordinarily large and deadly groups of the creatures to band together in search of new lands and new prey to devour.",
    organization: "solitary, pair, or flight (3-9)",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 1
      },
      Perception: {
        ranks: 5
      }
    },
    special: {
      bleed: {
        universalMonsterAbility: "Bleed",
        damage: "1d6"
      },
      glare: {
        type: "Su",
        text: "As a standard action, in any area of normal or brighter light, a giant stymphalides can ruffle its metallic feathers in such a way as to dazzle all creatures nearby. Any creature within 30 feet must make a DC 19 or be blinded for 1d6 minutes. A creature can defend against this effect in the same way it would a gaze attack. This is a sight-based effect. The DC is Constitution-based."
      },
      "wing razors": {
        type: "Ex",
        text: "A giant stymphalides's metallic feathers are razor-sharp. In addition to being able to slash creatures with its wings as a melee attack, it may beat its wings, flinging two large, feathered shards at a single target. These wing razors deal 2d6 points of damage and cause bleed. A giant stymphalides can use this attack a number of time per day equal to its Constitution modifier."
      }
    },
    resistances: [
      "sonic"
    ]
  },

};
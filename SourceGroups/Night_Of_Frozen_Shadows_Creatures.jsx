
export const Night_Of_Frozen_ShadowsCreatures = {
  "Gare Linnorm": {
    source: "Night Of Frozen Shadows",
    creatureType: "dragon",
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Gargantuan",
    hd: 17,
    hdVal: 12,
    cr: 15,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Scent",
      "True Seeing"
    ],
    speed: {
      base: 40,
      swim: 100
    },
    abilities: {
      str: 36,
      dex: 20,
      con: 25,
      int: 5,
      wis: 18,
      cha: 21
    },
    feats: [
      {
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Greater Vital Strike",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Snatch",
        type: "Monster"
      },
      {
        name: "Staggering Critical",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "poison",
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
        specialAbility: "grab",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "dragon traits",
      "Immune to curse effects, fire, mind-affecting effects, poison, sleep"
    ],
    defense: {
      SR: {
        value: 26
      },
      naturalArmor: 19
    },
    space: "20 ft.",
    reach: "20 ft.",
    environment: "cold rivers",
    visualDescription: "An enormous draconic head rises up atop a massive serpentine neck wider than a galleon's mainmast. Seemingly endless coils break the water's surface around it, only hinting at the monster's terrifying size, as it opens its steam-shrouded maw with a hiss.",
    description: "So named for a northern word for \"river,\" a gare linnorm's body resembles that of a gigantic serpent, save for two muscular forelimbs. The creature's head is long and angular, with crests that it uses to break through ice in its never-ending search for food. A gare linnorm's hide is a dull gray color akin to tarnished silver, with a slightly paler underbelly. Unlike many linnorms, a gare linnorm has a smooth hide, allowing it to slip easily through water and ice holes. A gare linnorm can grow as long as 60 feet, typically weighs 11,000 pounds, and can live for over 1,000 years. Ecology Little can compare to the power and efficiency of a gare linnorm in the regions where these beasts dwell. Like all linnorms, gare linnorms are relatively unintelligent compared with their chromatic and metallic cousins, but what these beasts lack in intelligence and spellcasting ability they make up for in brute strength, savage fury, and dangerous cunning. Despite dwelling in water, gare linnorms have an innate ability to raise their body temperature so dramatically that the creatures are immune to even the hottest flames. Gare linnorms use this ability to keep warm when hunting through rivers and waterways buried beneath feet of ice, which the creature can come bursting through with surprising speed and force when it detects prey above. A gare linnorm's breath weapon is similarly linked to this internal fire. Small gill-like vents along the creature's serpentine body pass water through the dragon, which is heated to extreme temperatures en route to the linnorm's mouth. The gare linnorm then expels the water through a series of muscular chambers that turn the water into a gout of steam hot enough to scald flesh and warp armor. The difference in temperature between the inside of the linnorm's mouth and the cold air of its homelands causes the steam to condense into a massive cloud of vapor that persists afterward and, because of the linnorm's magical nature, achieves an almost solid state, hampering movement throughout its area. In addition to its deadly breath weapon, a gare linnorm's fangs are infused with potent venom. A creature bitten by the dragon is bathed in an eerie blue-white aura that burns like the hottest alchemist's fire. Meanwhile the poison attacks the nervous system with debilitating pain, gradually slowing the target's ref lexes and motor functions until total paralysis sets in. Gare linnorms prefer to hunt large prey, as fish and other small underwater creatures don't provide enough food to sate their enormous appetites. As a result, gare linnorms hunt not just larger, land-bound creatures like elk or moose, but even large predatory animals like brown bears and dire wolves when such creatures come to the water's edge to drink or cross. When hunting, a gare linnorm attempt to attack with surprise as it breaks through ice or emerges from the water. It bites first to poison its prey, then strikes with its tail, using its massive coils to crush its prey or drag it into the water, where any creature affected by the linnorm's poison soon drowns as the venom takes hold. Hunters and sages who have witnessed gare linnorms feeding recount stories of these monsters taking on entire herds of mammoths or woolly rhinos, often crushing one animal in its coils and goring another while others burn within the dragon's steaming breath. After feeding, gare linnorms retreat to their riverbed dens to sleep, often for days at a time. Habitat & Society Gare linnorms are always solitary. Their immense appetites and brutal tempers make most habitats strain to support even one, and a gare linnorm's territory can encompass a labyrinth of rivers and inlets exceeding 1,000 square miles. Males and females do not even join for reproduction. Instead, after a short period of voracious hunting and gorging, a female gare linnorm travels to the fringes of her territory to find a deeply frozen lake or section of river. The female then uses her breath weapon to melt a portion of the ice before laying a single egg and letting it float to the underside of the ice, still far beneath the surface. Next, the female stands guard until the water refreezes, encasing and protecting her egg, before returning to the heart of her territory. Any passing male can sense the egg, even within its icy shell, and uses his breath to free and fertilize it, after which he carries the fertilized egg beyond his own territory and deposits it deep in the mud and silt of a riverbed. The egg gestates for 6 months before hatching. A hatchling gare linnorm is the size of an adult crocodile and survives on fish and birds for the first few months. Growth is rapid, with the linnorm reaching half its adult length within 2 years, when it begins to hunt larger land creatures, its breath weapon and venom now at full potency. Reproductive maturity is achieved after the first century, with females producing an egg just once every century. Despite their fearsome reputations, gare linnorms are sometimes hunted by the brave or the foolhardy. In the Lands of the Linnorm Kings, would-be kings who kill a gare linnorm are afforded extra prestige, as such combat often requires fighting the beast both on land and on or beneath the surface of the water. Frost giants are also known to hunt gare linnorms, but invariably target hatchlings or the very young, raising the captive dragons as powerful sentries and loyal companions that are often more dangerous than the giant's entire clan.",
    organization: "solitary",
    languages: "Aklo, Draconic, Sylvan",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 11
      },
      Perception: {
        ranks: 17
      },
      Stealth: {
        ranks: 6
      },
      Swim: {
        ranks: 9
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "60-ft. cone",
        damage: "usable every 1d4 rounds",
        text: "Once every 1d4 rounds as a standard action, a gare linnorm can breathe a 60-foot cone of scalding steam, dealing 17d8 points of fire damage to all creatures struck (Reflex DC 25 halves). This steam then hangs in the air for 1 round after the linnorm creates it. Creatures in the area of effect or that enter the area take an additional 6d6 points of fire damage the second round (Reflex DC 25 negates). In addition, the cloud of steam acts as the spell solid fog, with a caster level equal to the linnorm's HD. The save DC is Constitution-based."
      },
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "tail, 2d8+19"
      },
      "death curse": {
        type: "Su",
        text: "When a creature slays a gare linnorm, the slayer is affected by the curse of the drowning gasp. Curse of the Drowning Gasp: save Will DC 22; effect anytime the creature imbibes a liquid of any kind, its lungs fill with water and it begins to drown. Treat this as the spell suffocation* (DC 19 Fort save to resist), with a caster level equal to the linnorm's Hit Dice. The save DC for the curse is Charisma-based. * See page 248 of the Advanced Player's Guide."
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Su",
        text: "Bite-injury; save Fort DC 25; frequency 1/round for 10 rounds; effect 3d6 fire damage and 1d6 Dex drain; cure 2 consecutive saves. The save DC is Constitution-based. True Seeing (Ex) A gare linnorm has true seeing, as the spell of the same name. This effect cannot be dispelled.",
        saveDC: 10
      },
      amphibious: {
        universalMonsterAbility: "Amphibious"
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        damageType: "cold iron",
        value: 10
      },
      "freedom of movement": {
        type: "Ex",
        text: "A gare linnorm is under the constant effect of freedom of movement, as the spell of the same name. This effect cannot be dispelled."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  Nogitsune: {
    source: "Night Of Frozen Shadows",
    creatureType: "outsider",
    subTypes: [
      "kitsune",
      "native",
      "oni",
      "shapechanger"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Medium",
    hd: 7,
    hdVal: 10,
    cr: 7,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Scent"
    ],
    speed: {
      base: 50,
      climb: 50
    },
    abilities: {
      str: 18,
      dex: 25,
      con: 22,
      int: 17,
      wis: 16,
      cha: 19
    },
    feats: [
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Mobility",
        type: "Combat"
      },
      {
        name: "Spring Attack",
        type: "Combat"
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
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        specialAbility: "poison",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Dart",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "Dart",
        specialAbility: "poison",
        damage: "1d4"
      }
    ],
    defense: {
      SR: {
        value: 18
      },
      naturalArmor: 3
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any urban",
    visualDescription: "This fox-headed humanoid has a sleek, feminine form that moves with seductive grace. As she steps into a defensive posture, a mass of bushy tails flicks at the air above her back and she reveals teeth flecked with blood.",
    description: "Nogitsune are created when oni spirits take over the bodies of kitsune (sagacious humanoid fox-creatures). The resultant possession creates a creature with the kitsune's foxlike grace and cunning and infuses it with the destructive power of an oni. Nogitsune are always female, and resemble shapely humans with a covering of fur and a fox's head. A nogitsune's fur color varies and can be orange and white, grey, pure white, or even black. Whenever nogitsune use their shapechanging abilities to assume a humanoid form, they still evince somewhat pointed, vulpine features. In addition, any hair on their assumed form betrays the natural coloration of their pelts. Nogitsune stand between 5 and 5-1/2 feet tall and weigh just over 100 pounds. More details on kitsune can be found in Pathfinder Campaign Setting: Dragon Empires Gazetteer. Ecology Oni manifest themselves in different ways based on the creatures they take as vessels for their depraved wrath. They take particular joy in corrupting kitsune to form nogitsune, delighting in turning the mystical creatures into deadly killers and spreaders of woe. Most nogitsune become spies or assassins. Though they need no real reason to kill others, the coin they receive for their services allows them to afford the other vices they enjoy, such as pleasures of the flesh and excesses of drink and narcotics (when available). Nogitsune are deft killers because of their speed, grace, and spell-like abilities. Those who have seen them and lived tell tales of these oni running toward walls at blinding speed and then simply continuing upward to vault the wall's crown as if it were no more difficult to walk on than the ground. Still others claim that nogitsune can dive into a shadow like a pool of water and disappear, while others mention the cloud of smoke that nogitsune often use to escape pursuit, even when running full speed. Although they often don human form to disguise themselves for the purpose of inf iltration, nogitsune prefer to stalk and kill prey in their natural form. This gives the creatures the choice of whether to use manufactured weapons or their own sharp claws and deadly bite. When wielding weapons, all nogitsune enjoy using poison, whenever possible employing toxins and venoms that do not kill outright (unless a contract so requires it) but rather render the victims unconscious or helpless. This gives the oni the joy of dealing the killing blow with their jaws and slaking their bloodlust in abject savagery. A nogitsune's most feared weapon, however, is its contagious whisper. This powerful compulsion, often whispered into the victim's ear in honeyed tones, not only forces the targeted creature to believe whatever lie the nogitsune crafts, but also infects the subject of the contagious whisper with a corruptive echo of deceit that causes the victim to unknowingly pass on the nogitsune's suggestion to others. Nogitsune may use this ability to convince a successive series of servants to open all of the doors to a well-guarded castle, or to make a host of witnesses believe they saw an innocent man commit a brutal crime that was really the oni's own handiwork. Habitat & Society Nogitsune inhabit large urban areas, where they can have their pick of a nearly endless stream of victims. Occasionally they will inhabit a town or village in the countryside, but such locales are always in the shadow of a large castle or estate that can provide additional opportunities to stalk and murder others. Wherever they choose to dwell, nogitsune lair in the seediest districts, where drugs, brothels, and crime are rampant. These areas not only discourage chase by would-be pursuers, but also place the oni in the midst of people who society generally doesn't miss if and when a contract doesn't slake the creature's bloodlust. Those looking to hire a nogitsune can do so, but such a practice is both costly and dangerous. Although little binds a nogitsune to its accepted contract when it receives payment, most nogitsune happily carry out their orders for the sheer joy of bringing death to another. But many who foolishly hire nogitsune to do their killing find themselves the next victim once the initial target is slain. Nogitsune have little honor, and such treachery not only feeds their bloodlust, but also leaves fewer witnesses. Nogitsune prefer to lead solitary lives and be in command of their own foul fates. Thus, most avoid associating with more powerful creatures, other oni, or even other nogitsune. Those honorable samurai and good ninja who have fought and killed nogitsune recount seeing a conf licted and turbulent anger within the creatures, as if the once-righteous kitsune within a nogitsune constantly battles to reassert control. Although there is no record of such a reversal occurring, many believe that these malevolent oni drown themselves in death and bloodshed in order to extinguish the last vestiges of the creatures they were before.",
    organization: "solitary",
    languages: "Common, Draconic, Fey, Giant",
    spellLikeAbilities: [
      {
        name: "detect thoughts",
        casterLevel: 7,
        timesPerDay: -1
      },
      {
        name: "feather fall",
        casterLevel: 7,
        timesPerDay: -1
      },
      {
        name: "jump",
        casterLevel: 7,
        timesPerDay: -1
      },
      {
        name: "obscuring mist",
        casterLevel: 7,
        timesPerDay: -1
      },
      {
        name: "displacement",
        casterLevel: 7,
        timesPerDay: 1
      },
      {
        name: "haste",
        casterLevel: 7,
        timesPerDay: 1
      },
      {
        name: "shadow walk",
        casterLevel: 7,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 2
      },
      Appraise: {
        ranks: 2
      },
      Bluff: {
        ranks: 7
      },
      Climb: {
        ranks: 4
      },
      Diplomacy: {
        ranks: 3
      },
      "Disable Device": {
        ranks: 9
      },
      Disguise: {
        ranks: 9
      },
      "Escape Artist": {
        ranks: 10
      },
      "Knowledge (arcana)": {
        ranks: 2
      },
      "Knowledge (local)": {
        ranks: 3
      },
      Perception: {
        ranks: 7
      },
      "Sense Motive": {
        ranks: 5
      },
      "Sleight of Hand": {
        ranks: 3
      },
      Stealth: {
        ranks: 7
      },
      Swim: {
        ranks: 1
      }
    },
    special: {
      "contagious whisper": {
        type: "Su",
        text: "As a standard action, a nogitsune can influence a target she speaks to as per the spell suggestion. The target must succeed at a DC 17 Will save or be affected by this effect. In addition to being subject to suggestion's normal effects, any creature affected by the contagious whisper can pass the enchantment on to other targets. Doing so requires the target to communicate the nogitsune's suggestion, forcing the new target to save as if it were the initial target. If such a secondary target resists the contagious whisper, it is unaffected, but this does not remove the suggestion from the initial target. Failing the save puts another creature under the nogitsune's compulsion. Newly affected creatures are also able to spread the suggestion. A nogitsune's compelling whisper can affect a number of creatures equal to the its Hit Dice and lasts for a number of hours equal to its Hit Dice. Creatures that successfully save versus the nogitsune's compelling whisper (as a primary or secondary target) cannot be affected by that particular nogitsune's compelling whisper for 24 hours. The save DC is Charisma-based."
      },
      "sneak attack": {
        universalMonsterAbility: "Sneak Attack",
        bonus: "3d6"
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "alter self or beast shape I",
        type: ", alter self or beast shape I"
      },
      "fleet distraction": {
        type: "Su",
        text: "A nogitsune can make a Bluff check or use its obscuring mist spell-like ability as a swift action in any round in which it moves up to half its base land speed."
      },
      "poison use": {
        universalMonsterAbility: "Poison Use"
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        damageType: "acid or fire",
        value: 5
      },
      evasion: {
        universalMonsterAbility: "Evasion"
      },
      poison: {
        universalMonsterAbility: "Poison",
        name: ":",
        type: "Ex",
        text: "son (Ex): Blue Whinnis: injury; save Fort DC 14; frequency 1/round for 2 rounds; initial effect 1 Con damage; secondary effect unconsciousness for 1d3 hours; cure 1 save",
        saveDC: 5
      }
    }
  },

  "Spirit of Adoration": {
    source: "Night Of Frozen Shadows",
    creatureType: "outsider",
    subTypes: [
      "extraplanar",
      "good"
    ],
    alignments: [
      "Neutral Good"
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
      base: 40,
      maneuverability: "Good",
      fly: 60
    },
    abilities: {
      str: 18,
      dex: 19,
      con: 20,
      int: 19,
      wis: 22,
      cha: 23
    },
    feats: [
      {
        name: "Blind-Fight",
        type: "Combat"
      },
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Improved Iron Will",
        type: "General"
      },
      {
        name: "Improved Sunder",
        type: "Combat"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Mobility",
        type: "Combat"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Perception",
        choiceSource: "Skill Focus"
      },
      {
        name: "Step Up",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Glaive",
        choiceSource: "Weapon Focus"
      },
      {
        name: "Wind Stance",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Glaive",
        enchantments: [
          {
            name: "Enhancement Bonus +2",
            source: "inherent"
          },
          {
            name: "Dancing",
            source: "inherent"
          }
        ],
        name: "Glaive",
        damage: "1d10"
      },
      {
        weapon: "Stunning bolt",
        name: "Stunning bolt",
        specialAbility: "stun",
        damage: "1d8"
      }
    ],
    immunities: [
      "Immune to fire, sonic"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "evil"
      },
      SR: {
        value: 26
      },
      naturalArmor: 6
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any (extraplanar)",
    visualDescription: "This armored woman appears to be carved from living marble, her angelic wings rising behind the shape of a heavenly warrior. In one hand she grips a fearsome glaive, every movement of which paints the air around her with swirls and flourishes of magical energy.",
    description: "The Spirit of Adoration is among Shelyn's greatest servants, an intelligent personification of true love, whose power lifts the heaviest heart and overcomes all obstacles. She rarely comes to the mortal world, and it is even rarer for her to enter battle, but when that time comes, it is said that there is nothing she cannot bend or break in pursuit of her goal. The spirit's true form is that of a 10-foot-tall, angel-winged woman-usually a human but sometimes an elf- dressed in flowing clothes and bearing a shining steel glaive. When interacting with easily frightened mortals (especially children), she uses her shapechanging powers to look like a human or elf of normal height, attractive according to the standards of the local people, but she never makes herself so beautiful as to cause jealousy or inspire inappropriate comments or attention. When not carrying out Shelyn's will, the spirit enjoys dancing in clouds, across lakes, and on mountaintops, whether on Golarion or Nirvana, ignoring the occasional bolt of lightning that strikes her. Ecology Although she does not need to eat, the spirit loves the occasional taste of food or wine, especially wedding cake and champagne toasts. While she does not need to sleep, she loves to dream, deciding the framework of her dreams before she sleeps and enjoying the mystery of how they play out. Sleeping is the only time she is still, as she loves motion, frequently dancing with joy or gesturing with her hands while speaking. Her primary role is as a messenger of love and beauty, encouraging mortals to pursue love and create art, and for much of her work she is present but invisible, speaking just the right words to accomplish her mission and vanishing thereafter. The spirit only kills when she absolutely has to, such as when confronted by mindless creatures or irredeemable undead, and even then only if sparing them would create a threat to others. She prefers to let her aura of charming change hostile creatures into temporary allies, giving her time to move aggressive opponents away from innocents and speak words of diplomacy under more amiable conditions. She uses her stunning bolts against creatures she believes can be talked into surrender or peace, reserving her glaive and attack spells for recalcitrant foes and alien or mindless things that absolutely cannot understand love or beauty. Habitat & Society The spirit is a creature of love and is open with her emotions to all mortals. She treasures the presence of every infant, child, adult, and animal, and can appreciate the beauty of any landscape, no matter how stark, blasted, or strange. She is generous, compassionate, and tolerant, and those who meet her under pleasant circumstances can't help but agree that she is one of the nicest creatures they've ever met. However, most of her interactions on the mortal world occur when some great love or beautiful work of art is threatened. At these times she grows quiet, her eyes burn with the fire of true love threatened, and her face becomes the stern mask of an artist lost in the moment of finishing her masterpiece. When inspired by this cause, her hands wield glaive, spell, and ray in a beautiful and enthralling dance, as though they move to the very music of creation. The spirit has an excellent memory for names and faces, and enjoys tracing the family trees of Shelyn's agathion servitors, often recognizing a distant mortal relation 10 generations later. She is friends with all of the goddess's minions, and shares this affection with their mortal relatives. Though she is not a gossip, she listens to her fellow celestials and is aware of who they've helped in the mortal world; she keeps tabs on those who have benefited from the goddess's favor in the past and, if necessary, might be willing to repay a past favor. The minions of Zon-Kuthon fill her with pity. Whenever she encounters them, she tries to steal them away to a temple of her creator and have the priests try to cleanse the mental stains of that dark god. She tries this with his divine servants as well, with much more limited success.",
    organization: "solitary",
    languages: "Auran, Common, Celestial, Ignan, Shadowtongue",
    gear: "+2 dancing glaive",
    spellLikeAbilities: [
      {
        name: "calm emotions",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "good hope",
        casterLevel: 18,
        timesPerDay: -1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 5
      },
      Bluff: {
        ranks: 9
      },
      Diplomacy: {
        ranks: 12
      },
      Disguise: {
        ranks: 9
      },
      Fly: {
        ranks: 12
      },
      "Handle Animal": {
        ranks: 9
      },
      Heal: {
        ranks: 9
      },
      Intimidate: {
        ranks: 12
      },
      "Knowledge (religion)": {
        ranks: 9
      },
      Perception: {
        ranks: 18
      },
      Perform0: {
        subSkill: "dance",
        ranks: 21
      },
      "Sense Motive": {
        ranks: 18
      },
      Spellcraft: {
        ranks: 18
      },
      Stealth: {
        ranks: 18
      },
      "Use Magic Device": {
        ranks: 9
      }
    },
    special: {
      "bardic magic": {
        type: "Ex"
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "alter self",
        type: ", alter self"
      },
      inspiration: {
        type: "Su",
        text: "The spirit can choose an intelligent creature to inspire and serve as a muse for by giving that creature some token of her power (typically a lock of her hair or a piece of her garment). As long as the spirit retains her favor for this creature and the creature carries the spirit's token, the creature gains a +4 insight bonus on all Will saving throws, Craft checks, and Perform checks. A bard who has the spirit for a muse in this way can use his bardic performance for an additional number of rounds per day equal to the spirit's Charisma bonus. The spirit retains a link to her token and its carrier as if she had cast a status spell on the carrier. The spirit can end this effect at any time as a free action, even if she is not on the same plane as the carrier. The spirit may inspire a number of creatures at a time equal to her Charisma bonus."
      },
      "unearthly grace": {
        type: "Su",
        text: "The spirit adds her Charisma modifier as a racial bonus on all her saving throws, and as a deflection bonus to her Armor Class."
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        value: null
      },
      charming: {
        type: "Su",
        text: "The spirit's aura sways the feelings of creatures within 30 feet that have an attitude of unfriendly or worse. Such creatures must succeed at a DC 25 Will save or be affected by charm monster for 1 day. Creatures that attack the spirit must save against the aura, regardless of their attitude. A creature that makes its save is immune to the spirit's aura for 24 hours. The save DC is Charisma-based. Bardic Knowledge (Ex) The spirit adds half her Hit Dice (+9) on all Knowledge checks and may make all Knowledge checks untrained.",
        preText: "30 feet, DC 25"
      },
      stun: {
        type: "Ex"
      }
    },
    resistances: [
      {
        damageType: "acid",
        value: 30
      },
      {
        damageType: "electricity",
        value: 30
      }
    ]
  },

};
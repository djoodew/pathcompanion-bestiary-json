
export const The_Hill_Giant_s_PledgeCreatures = {
  Brambleblight: {
    source: "The Hill Giant's Pledge",
    creatureType: "plant",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 10,
    hdVal: 8,
    cr: 7,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Plantsense 120 ft."
    ],
    speed: {
      base: 20
    },
    abilities: {
      str: 25,
      dex: 16,
      con: 18,
      int: 6,
      wis: 14,
      cha: 8
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
        name: "Stand Still",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Thorns",
        choiceSource: "Weapon Focus"
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
        weapon: "Thorn",
        name: "4 Thorns",
        damage: "1d6"
      }
    ],
    defense: {
      naturalArmor: 8
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "temperate or warm forests or underground",
    visualDescription: "Two long vines covered in sharp thorns protrude from what appears to be a massive rotting bundle of barbs that's topped with a heap of berry-red eyes.",
    description: "A stain on the land it infests, a brambleblight slowly alters its environment, infecting the local vegetation with sickness through its blight aura. When the native vegetation dies, the area becomes choked with slashing plants tangled together much like a giant briar patch. It is within this prickly terrain that the brambleblight dwells. Where most would find themselves at the mercy of the hungry barbs found within this thorn-filled region, the brambleblight traverses this area with ease. A brambleblight is a deviant thing of decay, a tangle of rotting vegetation rising in a roughly pyramidal heap, crowned with an asymmetrical cluster of berry-red eyes. Its main body resembles a bundle of fetid mulch with several thorn-covered branches spilling forth like the intestines of a gutted pig. These branches provide the plant with locomotion akin to that of a slithering serpent. A brambleblight typically covers an area about 10 feet in diameter. From the creature's base to its crown of crimson eyes, it piles upon itself to a height of no more than 10 feet. A brambleblight weighs about 500 pounds. Ecology Brambleblights are not native to Golarion. They're believed by some scholars to be a terrible amalgamation of elements from the First World whose sole purpose is to spread decay and rot. The brambleblight attacks with its two primary vines, both covered in thousands of pricking barbs that shred exposed flesh. While the creature prefers to savor the decay of those who close in and succumb to its blight aura, it does have the means to defeat enemies who keep a safe distance. Besides the ability to fling dagger-sized thorns, the plant can also control the many barbed branches that make up its briar patch. While the brambleblight can animate only one branch at a time, that branch attacks independently until either it is destroyed, the brambleblight is slain, or the brambleblight moves out of controlling range. Thankfully, brambleblights are not long-lived creatures. Brambleblights tend to live no longer than 5 years; if they survive long enough to reach this age, they attempt to spread up to a dozen seeds in the hope that at least a few of them take root and grow to maturity. The last 6 months of a brambleblight's life are spent feeding on as much prey as possible in order to store up the energy needed to form seeds. These seeds grow along a specialized tendril that allows the brambleblight to fling its seeds hundreds of feet away in a manner similar to its rain of thorns special attack, though with a much greater range. A brambleblight dies shortly after releasing its seeds. Habitat & Society While brambleblights prosper in the mutable realm of the First World where they originated, they fare well in only a few environments on the Material Plane. They seem to shun brightly lit places and thrive in dim and dank locations such as deep forests, where the thick canopy shields the forest floor from the sun's rays. They also tend to lair near caves and other underground locations. They are rarely found in open plains or forests with thin canopies because these areas tend to spend long periods exposed to sunlight. Brambleblights have no interest in others of their kind, and they must continually maintain their altered environments. They are thus reluctant to move to a new area unless their current location is completely depleted of prey. If a brambleblight uproots itself and moves on to another area, the region it blighted soon returns to its previous state. Likewise, when a brambleblight is killed, its tended patch withers and dies within days, eventually giving way once again to native vegetation.",
    organization: "solitary",
    languages: "Sylvan",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 5
      },
      Stealth: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 12
          }
        ]
      }
    },
    special: {
      "animate brambles": {
        type: "Su",
        text: "As a standard action, a brambleblight can animate any of the dead, thorny brambles created by its bramble infestation ability. For 1 minute, the animated bramble (see page 85) then attacks as though it were a Large animated object. The animated bramble is under the control of the brambleblight, which can change the animated bramble's target as a move action. The brambleblight can instead cause the brambles to entwine around creatures as if by the entangle spell (the brambles are considered to be covered in thorns). This effect lasts for 1 hour. Blight Aura (Su) A brambleblight radiates a palpable aura of rot and decay in a 40-foot radius. Living creatures entering the aura must succeed at a DC 19 Fortitude save or be sickened for 1 round. A creature of the animal, fey, or plant type that fails its save is nauseated for 1 round and sickened for 1 minute thereafter. If a creature succeeds at this saving throw, it is immune to this effect for 24 hours. In addition, any plant creature entering this aura takes 1d6 points of damage each round it is within the area (Fortitude DC 19 half). Creatures that are immune to disease are immune to this aura, and the resist nature's lure class feature applies to the aura's effects. The save DC is Constitution-based."
      },
      "rain of thorns": {
        type: "Ex",
        text: "With a snap of its thorny vines, a brambleblight can loose a volley of four thorns as a standard action (make an attack roll for each thorn). This attack has a range of 120 feet with no range increment. All targets must be within 30 feet of each other. A brambleblight can launch up to 36 thorns in any 24-hour period."
      },
      "bramble infestation": {
        type: "Su",
        text: "A brambleblight can devastate its surroundings, creating an area of dead, thorny brambles. To do so, the brambleblight must root itself in the ground and remain motionless for 24 hours. Over the next day, all plants that are not creatures in a 40-foot radius around the brambleblight sprout thorny brambles, then wither and die. This infestation of brambles persists and nothing grows in this area for as long as the brambleblight remains in the area. If the brambleblight leaves the area, normal growth returns after 1 week."
      },
      "improved woodland stride": {
        type: "Ex",
        text: "A brambleblight can move through any sort of undergrowth (such as natural thorns, briars, overgrown areas, and similar terrain) at its normal speed without taking damage or suffering other impairments. However, it can also move without harm or impediment through thorns, briars, and overgrown areas that are magically manipulated to impede motion. Plantsense (Ex) A brambleblight can automatically pinpoint the location of anything within 120 feet that is in contact with vegetation."
      },
      thorny: {
        type: "Ex",
        text: "A brambleblight's surface is covered in a host of thorns. A creature that strikes a brambleblight with a natural weapon, a melee weapon without reach, or an unarmed strike takes 1d6 points of piercing damage. Creatures that grapple a brambleblight automatically take 1d6 points of piercing damage each round they maintain the grapple."
      },
      blight: {
        type: "Ex",
        preText: "40 ft., DC 19"
      }
    }
  },

  Ourdivar: {
    source: [
      "The Hill Giant's Pledge",
      "Bestiary 6"
    ],
    creatureType: "outsider",
    subTypes: [
      "chaotic",
      "extraplanar",
      "protean",
      "shapechanger"
    ],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Large",
    hd: 5,
    hdVal: 10,
    cr: 4,
    racialFeatures: [
      "Blindsense 30 ft.",
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30,
      maneuverability: "Perfect",
      fly: 30,
      swim: 30
    },
    abilities: {
      str: 18,
      dex: 13,
      con: 16,
      int: 11,
      wis: 15,
      cha: 14
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
      }
    ],
    attacks: [
      {
        weapon: "Slam",
        name: "Slam",
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
    defense: {
      SR: {
        value: 15
      },
      naturalArmor: 7
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any (Maelstrom)",
    visualDescription: "The upper body of this creature is that of a multicolored bestial humanoid, while its lower section ends in a serpentine tail.",
    description: "Considered lesser proteans (though greater than voidworms), ourdivars are spontaneously formed from and given sentience by the chaotic energies of the Maelstrom when spellcasters call them forth. Ourdivars toil at the behest of their summoners, acting as tools of chaos across the planes. At the end of an ourdivar's brief existence, it departs in a furor of riotous energies, warping the area around it as its energy is reabsorbed into the Maelstrom. Sitting upon a powerful serpentine tail instead of legs, an ourdivar's upper body looks akin to that of a bestial humanoid, but its iridescent skin constantly changes hue. The ends of both arms shift frequently between different weaponlike forms and basic hands that permit the protean to inflict a variety of terrible wounds on its opponents. An ourdivar is 12 feet long and weighs 700 pounds. Ecology Ourdivars are a common form of lesser proteans, brought into existence as a vessel of chaotic life energies bound into a stable yet temporary form. Only powerful spellcasters can summon greater proteans from the Maelstrom, so neophyte magic users instead bring forth these temporary creatures. Ourdivars' humanoid upper bodies differ from the more serpentine outlines common to other proteans. Tusked facial features along with strong musculature give these proteans an intimidating countenance reminiscent of an orc with the build of an ogre. Using its inherent magical abilities, an ourdivar can take on the shape of humanoids of various races, often doing so to blend in with the allies or enemies of its creator. The lower arms of an ourdivar mutate in shape, switching from blunt fists to razor-sharp blades and giving it the ability to bypass enemy defenses in combat. The shape of these weapons changes according to the ourdivar's whim to keep opponents off balance and wondering what sort of attack the ourdivar will make next. Of all their powers, the barely contained anarchic energies that infuse ourdivars are the most deadly. Upon the destruction of an ourdivar-or at the end of the spell or effect that gave it form-the protean detonates in a surge of energy known as a minor warpwave. The chaotic outburst of an ourdivar is still able to wreak havoc, be that after the ourdivar falls to enemies on the battlefield or after it reports back to the peaceful home of the one who summoned it. Habitat & Society The life of an ourdivar is a solitary and often brief affair, as its entire existence is based on the whims of those who call it. Unless summoned as part of a larger group, ourdivars have little relationship with others of their kind, working together with other proteans only if their summoners wish it. Unbound greater proteans tend to regard ourdivars and other lesser proteans with a mixture of disdain and pity, albeit in their typically erratic and unpredictable manners. Even though they are creatures of pure chaos, ourdivars obey the wishes of their creators. Even ourdivars brought into existence by potentially long-lasting spells such as planar binding seem content to serve the whims of their masters. Perhaps the only divergence from this odd loyalty is that of an ourdivar near the end of its lifespan; ourdivars on the verge of death move to ensure that their warpwave exit ability affects the greatest possible number of targets. Some believe that the fact that ourdivars' willingness to serve spellcasters, coupled with the fact that they're easily summoned, protects the Maelstrom and its greater inhabitants from the interference of spellcasters, and that these outsiders thus serve as an immune system of sorts for the Maelstrom. Binding& Summoning Ourdivars can be found on any plane of existence where spellcasters can call them. Most summoners bring forth ourdivars onto the Material Plane to serve their immediate needs. When called forth through a planar ally spell, ourdivars eagerly negotiate with spellcasters. As the first true action of its life, an ourdivar enthusiastically acquiesces to its potential master's demands and often accepts reduced payments (but never less than 75% of the normal required amount by the spell) in order to continue its existence. When an ourdivar does accept a smaller offering, it makes sure to return to its master upon the completion of its mission, ensuring that the summoner is within range when its task is officially complete so the spellcaster will be struck by its departing warpwave. Chaotic neutral spellcasters able to cast summon monster V can add the ourdivar to the list of creatures they can summon with this spell; when casting summon monster V in this way, the spell is chaotic.",
    organization: "solitary, pair, or breach (3-5)",
    languages: "Abyssal, Protean",
    spellLikeAbilities: [
      {
        name: "color spray",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "dispel magic",
        casterLevel: 5,
        timesPerDay: 1
      },
      {
        name: "rage",
        casterLevel: 5,
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 5
      },
      Fly: {
        ranks: 7
      },
      Intimidate: {
        ranks: 8
      },
      Perception: {
        ranks: 5
      },
      "Sense Motive": {
        ranks: 5
      },
      Stealth: {
        ranks: 5
      },
      Swim: {
        ranks: 1
      }
    },
    special: {
      "adaptive strike": {
        type: "Su",
        text: "An ourdivar's natural weapons count as magical and chaotic for the purposes of overcoming damage reduction. Once per round as a free action, an ourdivar can change the damage type of its natural weapons to bludgeoning, slashing, or piercing, thereby allowing it to overcome damage reduction of those types as well."
      },
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "1d8+4"
      },
      "warpwave exit": {
        type: "Su",
        text: "An ourdivar that is killed or that lives out the length of its summoned time on the Material Plane erupts in a wave of chaotic energy. Upon the death of an ourdivar or when any spell or effect summoning or calling an ourdivar ends, 1d4+1 corporeal creatures within 15 feet of the ourdivar are affected by a minor warpwave (see the sidebar on page 87). Targets can resist the warpwave's effects with a successful DC 15 Fortitude save. The save DC is Constitution-based."
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "any humanoid or monstrous humanoid; polymorph"
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  Skapraun: {
    source: "The Hill Giant's Pledge",
    creatureType: "fey",
    subTypes: [],
    alignments: [
      "Lawful Neutral"
    ],
    size: "Small",
    hd: 3,
    hdVal: 6,
    cr: 1,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 12,
      dex: 13,
      con: 15,
      int: 10,
      wis: 12,
      cha: 11
    },
    feats: [
      {
        name: "Point-Blank Shot",
        type: "Combat"
      },
      {
        name: "Rapid Shot",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Gore",
        name: "Gore",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Composite longbow",
        name: "Composite longbow",
        damage: "1d8",
        strBonus: 1
      }
    ],
    defense: {
      DR: {
        value: 2,
        damageType: "cold iron"
      }
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "temperate or cold mountains",
    visualDescription: "This dark-furred creature wielding a horn bow looks like a burly humanoid with the head and hooves of a mountain goat.",
    description: "Because of their mighty horns, cloven hooves, and aggressively territorial behavior, skaprauns are often mistaken for hellspawn or other minions of evil. Although these fey actually have a deep sense of honor, even those who know them for what they are generally view them with suspicion-their stubbornness and isolationist traditions leave little room for alliances or friendships with other creatures. Skaprauns stand 3-1/2 feet tall and weigh 60 pounds. Ecology Much like the animals that they resemble, skaprauns have beards, short tails, and long, curved horns. Their fur has a fine, woolly layer and a longer layer of hollow guard hairs, offering protection against wind and cold temperatures. Their feet have inner pads and sharp dewclaws to prevent slipping, and their cloven hooves can spread apart to ensure a better grip on uneven surfaces. Skaprauns are mainly herbivorous, but they supplement their diet with meat from animals they hunt and with clay to obtain minerals. They eat animals primarily for ritualistic purposes rather than out of necessity. Their main purposes for hunting are to maintain balanced animal populations within their territory, to obtain raw materials such as bone and sinew for building tools and weapons, and to hone their combat tactics. Although skaprauns have mortal lifespans averaging 18 years, they are in a sense immortal. The death of a skapraun triggers a form of reincarnation that occurs inside the body of the dead skapraun. The new skapraun leeches proteins and other nutrients from its precursor's body to build its own. When the newborn skapraun crawls out-a process that takes roughly 4 weeks-only a withered, fragile husk remains of the precursor's body. The horns of the precursor remain fully intact, however. A newborn skapraun is hairless, hornless, and nearly helpless, but it learns to walk within 5 minutes of its birth. The skapraun remembers nothing of its former life, but it instinctively knows to collect the horns of its precursor and protect them at all costs so it can later build a bow from them. A skapraun usually reaches full maturity within 2 months of its birth, but it may take longer if the precursor's body was badly damaged. A skapraun is not identical to the one from which it was born, but its psyche and physique are always shaped in some way by the decisions its precursor made-and particularly by how the precursor met its end. Habitat & Society Skaprauns make their homes in rocky, mountainous areas where their physique gives them a distinct advantage over less agile beings. They live almost exclusively above the treeline, where their enemies have less of a chance to find shelter from their arrows. However, the territory of a skapraun tribe extends far below the treeline; the creatures hunt and gather plants and other resources in these lower regions. To skaprauns, the concept of holding the higher ground is a central cultural aspect and a matter of great pride, and it also makes them fiercely territorial. They often do not allow any other intelligent beings to inhabit a higher location on the same mountain and do not tolerate intruders near their homes, even travelers who just passing through. However, skaprauns do not usually resort to violence unless stern warnings fail to remove the threat. While the inhospitable terrain skaprauns live in is enough to keep most intruders away, they take great care to fortify the slopes of their mountain homes against attacks. They build traps in natural choke points and prepare many defensive fighting positions from which they can shower any attacker with a rain of arrows. The defensive positions have rocks piled as low walls, camouf laged to look like naturally occurring piles of rubble. These are usually difficult to reach from below, but if the enemies are particularly mobile, the skapraun sentries retreat into another defensive position farther up the mountain rather than risking a melee that may go against them. When a tribe of skaprauns ends up in a prolonged conf lict, the fey also employ offensive tactics that mostly involve quick hit-and-run attacks or feigned retreats in order to lead the enemy into an ambush. They also study weather patterns and use the treacherous mists of the mountains to their advantage, advancing when the mists rise and retreating when they recede. Skapraun chieftains are born from the deaths of heroic individuals. The chieftains often have unusual physical traits that marks their births, such as very large horns, snow-white fur, or a greater stature. Skapraun leaders often take class levels in barbarian, druid, hunter, oracle, ranger, or shaman. The birth of twins is considered a very auspicious sign in skapraun society. It is the only way in which a skapraun tribe can grow, and the twins are often uniquely gifted with oracular powers. Each inherits one of the precursor's horns and builds a spear instead of the usual recurve bow. These twin-oracles often speak in unison and seem to share a single mind. Any later generations born of the twin-oracles are usually normal skaprauns, however. On the bottom rung of skapraun society are arkas- outcasts who are allowed to perform only the most menial tasks within a tribe. A skapraun becomes an arka if it loses and cannot recover its weapon. Similarly, a skapraun who for some reason cannot extract its precursor's horns or make a weapon out of them is marked an arka. Rather than facing the shame of not being considered a warrior, it is common for an arka to go on a self-imposed exile. Over time, these lone skaprauns lose their supernatural connection to nature, including their ability to reincarnate. They may find themselves in the company of humanoid creatures, getting along best with dwarves, perhaps because of dwarves' similarly dour dispositions and love of mountains.",
    organization: "solitary, pair, patrol (3-5), band (6-12), or tribe (13-32 plus 1 chieftain of 3rd-4th level)",
    languages: "Sylvan",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 3,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Climb: {
        ranks: 3,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Craft0: {
        subSkill: "bows",
        ranks: 5
      },
      Craft1: {
        subSkill: "traps",
        ranks: 0
      },
      "Knowledge (nature)": {
        ranks: 1
      },
      Perception: {
        ranks: 3
      },
      Stealth: {
        ranks: 3
      },
      Survival: {
        ranks: 3
      }
    },
    special: {
      "nature's traps": {
        type: "Ex",
        text: "A skapraun is particularly skilled at crafting traps that mimic natural hazards. A skapraun doesn't require gold to build its traps, merely time. Rules for crafting traps can be found in Chapter 13 of the Pathfinder RPG Core Rulebook, and examples of traps typically built by skaprauns are provided on page 89."
      },
      "effortless leap": {
        type: "Ex",
        text: "A skapraun attempts Acrobatics checks to jump as though it had a running start."
      },
      "mountain stride": {
        type: "Ex",
        text: "A skapraun takes no penalty to speed or on Acrobatics checks when moving on steep slopes or through rubble or scree."
      }
    },
    resistances: [
      {
        damageType: "cold",
        value: 5
      }
    ]
  },

  Skeltercat: {
    source: "The Hill Giant's Pledge",
    creatureType: "magical beast",
    subTypes: [
      "shapechanger"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 5,
    hdVal: 10,
    cr: 4,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 19,
      dex: 18,
      con: 15,
      int: 6,
      wis: 13,
      cha: 12
    },
    feats: [
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Run",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "grab",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "temperate forests, hills, or mountains",
    visualDescription: "The tawny coat of this snarling feline resembles that of a mountain lion, though this creature is much more muscular and carries itself with a strange posture.",
    description: "For a long time, many experts believed the creature now known as the skeltercat existed only in the folklore of the Shoanti tribes or in the far-fetched tales of a few wild-eyed travelers. Only with the recent reopening of the Bloodsworn Vale have rumors of the skeltercat's existence been taken seriously. As traffic through the vale increases, reports of attacks by strange, shapeshifting cats are growing startlingly commonplace. Such tales are told most frequently in the fortress city of Skelt, a common stopover for merchants traveling through the Bloodsworn Vale. The stories out of Skelt gave these creatures their name. The skeltercat resembles a heavily muscled cougar or mountain lion, having a tawny coat, powerful paws with retractable claws, and strong hind legs that allow it to jump great distances. It primarily walks about on all fours, adopting an oddly hunched posture that distinguishes it from normal cats. When faced with a threat, a skeltercat rises onto its hind legs, walking upright in a disturbingly human fashion. An adult skeltercat stands just shy of 8 feet tall when fully upright, and weighs up to 300 pounds. Ecology Many generations ago, a small band of Shoanti warriors lived high in the Mindspin Mountains near the headwaters of the Yondabakari River. This band, whose name is now long lost, were the first to feel the bite of Chelish steel as the southerners began their push into Varisia. These Shoanti fought back against the invaders as best they could, but they had no shaman in their group, and soon found they were no match for Chelish magic. Though they begged the clans of the lowlands to train them in such arts, they were repeatedly refused. No clan wanted to share its secrets with the notorious raiders of the mountain tribe, and none yet realized the threat the Chelish invasion would soon pose. As a desperate ploy, members of the mountain tribe stole down into the lowlands to spy on the druids and shamans of the other tribes, hoping to steal the secrets of the magic they had been denied. These spies observed a druid from the lowlands wildshaping herself into a mountain lion, and having listened carefully to the magic incantations she used, they returned to tell the tribe what they had found. Whether by chance or fate, the incantations worked, and soon the whole tribe had become fearsome cougars, just as the druid had. Only too late did they realize their spies had not learned how to reverse the transformation. Try as they might, they were able to become only partly human. Trapped somewhere between human and cat forms, the members of this reclusive mountain tribe were cursed to become the first skeltercats. Though created by a magical accident, skeltercats breed true, and a skeltercat that mates with a normal cougar invariably produces skeltercat offspring. Much like mountain lions, skeltercats are carnivores, though unlike mundane cats, they display a distinct preference for humanoid prey. Though skeltercats will attack any humanoid, they appear to prefer Chelish flesh to any other, perhaps due to some ancestral memory of the original skeltercats' conf licts with Chelish invaders. Skeltercats live slightly longer than normal cougars, having an average lifespan of 30 to 40 years. Habitat & Society Although skeltercats live throughout the Mindspin Mountains, they are especially concentrated in the Bloodsworn Vale. Outside of the vale, skeltercats are most often found in and around hill giant camps. The brutish giants admire the skeltercats' savage ferocity, and often share their food with the cats to encourage them to remain in the area. For their part, the cats keep the area surrounding the giants' camp free from lesser predators and pick off any creatures attempting to escape the giants' clutches. Skeltercats may also serve as guards for the giants as they sleep through the night, and the last thing a group of adventurers may hear when attempting to ambush a band of giants is the yowl of a pouncing skeltercat. The Shoanti have a complicated relationship with skeltercats. Though many Shoanti tribespeople have lost their lives to the shapeshifters' claws, the Shoanti nonetheless insist that skeltercats act as guardians for their people. An obscure Shoanti myth holds that the first skeltercat was once a Shoanti warrior who wished to defend her tribe from a demon that inflicted terrible madness upon its foes. Seeking a way to protect herself from the demon's insanity-inducing gaze, the warrior donned a magical cougar mask created by the shaman of her tribe. The mask worked, and the warrior was able to drive the demon away. However, she discovered too late that she could not remove the mask, and she was cursed to forever roam the land in the form of a fearsome mountain lion. Though this myth is just a mangled retelling of the skeltercat's true origins, there may be some truth to it. Skeltercats are inherently immune to madness and confusion effects, and some claim that those who wear the hide of a skeltercat can gain some measure of this immunity for themselves.",
    organization: "solitary, pair, or clan (3-8)",
    languages: "Common (can't speak)",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 4,
            situational: true,
            note: "+8 when jumping"
          }
        ]
      },
      Climb: {
        ranks: 1
      },
      Perception: {
        ranks: 1
      },
      Stealth: {
        ranks: 1,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Survival: {
        ranks: 1
      }
    },
    special: {
      musk: {
        type: "Ex",
        text: "A skeltercat has glands that produce a noxious musk. Any living creature within 10 feet must succeed at a DC 14 Fortitude save or be nauseated for 1d4 rounds and sickened for 1 minute afterward. A creature that successfully saves is instead sickened for 1d4 rounds and can't be affected again by the same skeltercat's musk for 24 hours. This is a poison effect, and other skeltercats are immune to this effect. A skeltercat can suppress this effect as a free action. The save DC is Constitution-based."
      },
      scream: {
        type: "Su",
        text: "A skeltercat can release a terrifying cry that affects all creatures within a 300-foot spread. All creatures in that area must succeed at a DC 13 Will save or become panicked for 1d4 rounds. This is a sonic, mind-affecting fear effect. A creature that successfully saves against this effect can't be affected by the same skeltercat's scream for 24 hours. The save DC is Charisma-based."
      },
      "partial transformation": {
        type: "Su",
        text: "A skeltercat can alter portions of its body in order to give itself access to certain abilities. As a standard action three times per day, a skeltercat can gain one of the abilities listed below. A partial transformation lasts for 10 minutes. As a swift action, a skeltercat that has already activated a partial transformation can spend an additional use of this ability to switch which benefit it receives. Only one such benefit can be in effect at a time. Climb: The skeltercat's claws extend, granting it a climb speed equal to half its base land speed. Additionally, when falling within arm's reach of a wall, ledge, or something else it could grab on to for stability, it can slow its descent, taking damage as if the fall were 20 feet shorter. Hide: The skeltercat's hide bristles like that of an angry cat and grows thicker, increasing its natural armor bonus by 2. Legs: The skeltercat grows an additional pair of legs, bringing its total to six, increasing its base land speed to 60 feet, and granting it the rake special ability. The rake attacks use the same damage and critical threat range as the skeltercat's normal claw attacks. Swim: The skeltercat grows webbing between its toes and whale-like flukes on its tail, granting it a swim speed equal to its base land speed. Additionally, it gains the hold breath universal monster ability. Tail: The skeltercat's tail grows thick and clublike. It gains a tail slap as a primary attack that deals 1d6 points of damage plus trip on a successful hit."
      },
      "mixed mind": {
        type: "Ex",
        text: "A skeltercat's mind is a bizarre combination of animal instinct and human intellect. This disordered consciousness grants the creature immunity to confusion effects. Additionally, any creature that attempts to read a skeltercat's mind or communicate with it telepathically must succeed at a DC 13 Will save or be shaken for 1d4 rounds. The save DC is Charisma-based."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

};
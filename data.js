var data = {
    classes: [
        {
            name: "Strongman",
            color: "FE8E45",
            health: 22,
            description:
                "The Strongman can lift entities above his head and toss them infront of his for some insane plays, but be careful as it takes a good amount of energy!",
            dengarModifiers: [
                "Receives no gravity tnt that is automatically ignited",
            ],
            positiveModifiers: [
                "With an empty offhand right click allies, mobs and lit TNT to pick up and throw them, with 3 second cooldown after throwing",
                "Creepers will not explode when carried",
                "Increased maximum health points (+2)",
            ],
            negativeModifiers: [
                "Gain Hunger II and decreased movement speed (-40%) while carrying",
                "Decreased movement speed (-20%)",
            ],
        },
        {
            name: "Voodoo",
            color: "32C1DA",
            health: 20,
            description:
                "The Voodoo carries a cacophony of corrosive concoctions that constantly cycle. Give close monsters and enemy players your own debuffs while spreading the strength of your buffs to your teammates with this unique support class.",
            dengarModifiers: [
                "Periodically (max 1) gets lingering potion with speed II, haste II, regeneration II, Mining fatigue II and wither",
            ],
            positiveModifiers: [
                "Poison, Wither, Weakness, Hunger, Slowness, Mining Fatigue and Fire effects applied to them will instead apply to the closest unafflicted enemy within 7 blocks",
                "Swiftness and Regeneration effects applied to them will instead apply to the closest unafflicted ally within 7 blocks",
                "Gain a random potion that refreshes 7 seconds after drinking",
                "Immune to other Voodoos",
            ],
            negativeModifiers: [
                "Poison and Wither deal double damage",
                "Decreased hotbar space (-1)",
            ],
        },
        {
            name: "Shield Maiden",
            color: "B047F9",
            health: 20,
            description:
                "Protect their team from angry mobs as the Shieldmaiden. With your powerful shields, draw in aggro, reflect damage and even shield bash your way to victory while tanking for your team.",
            dengarModifiers: [
                "Spikey shield with mending II, projectile protection and 30 % knockback resistance (piece of netherite)",
            ],
            positiveModifiers: [
                "50% of shielded melee damage is reflected at the attacker",
                "When shielding, mobs targeting your allies, will instead target you",
                "When shielding, swap item with offhand to bash",
            ],
            negativeModifiers: [
                "Shields have a longer cooldown (+2s)",
                "Shields take increased durability damage (+50%)",
                "Close range attacks deal less knockback (-25%)",
            ],
        },
        {
            name: "Trapping Turtle",
            color: "9FEF00",
            health: 20,
            description:
                "Eggsplosives ahead as the Trapping Turtle takes to the field. With devastating placeable mines, secure a defence for your team or turn the enemy’s dungeon into a minefield with this explosive class!",
            dengarModifiers: [
                "Periodically gets single use eggs",
                "Gets 2 absorbtion hearts when placing all eggs, has 30 seconds cooldown*",
            ],
            positiveModifiers: [
                "Gain 5 placeable turtle eggs that give Slowness III and explode when stepped on. Triggered eggs return to your inventory",
                "Shift and right click while holding the eggs / helmet to recall the oldest egg",
                "Trapping Turtles can trigger eggs with arrows",
            ],
            negativeModifiers: [
                "Eggs cannot be placed for 5 seconds after recall",
                "Eggs can be defused by shears or silk touch",
                "Decreased movement speed (-20%)",
                "Decreased hotbar space (-1)",
            ],
        },
        {
            name: "Lute Boi",
            color: "32C1DA",
            health: 20,
            description:
                "Come hither Lute Boi, play us a tune. I care not if the enemy hears; lift all of our spirits with your rendition of the E song.",
            dengarModifiers: [
                "Gives resistance to all allies above 18 health within 7 blocks",
                "Gets earpods effected by the music disc in top left slot when above half hp",
            ],
            positiveModifiers: [
                "All players (including themselves if anyone is around) in a 5 block radius around them gain Regeneration",
                "Killing a mob grants Saturation to allies in a 5 block radius around them",
            ],
            negativeModifiers: [
                "Enemy players also gain Regeneration within this radius",
            ],
        },
        {
            name: "Explorer",
            color: "9FEF00",
            health: 20,
            description:
                "This class should focus on PvE. The Explorer is a support; they are exceptional at clearing dungeons and creating infrastructure. Diggy diggy hole.",
            dengarModifiers: [
                "Gets free scaffolding and steak",
                "Gains regen II for 1 second when killing a mob (half a heart)",
            ],
            positiveModifiers: [
                "Increased mining speed (+40%)",
                "Increased resistance to environmental damage and mobs (+20%)",
            ],
            negativeModifiers: [
                "Decreased hotbar space (-2)",
                "Decreased inventory space (-6)",
            ],
        },
        {
            name: "Rogue",
            color: "DF56A6",
            health: 20,
            description:
                "This class is exceptional in PvP. They can attack faster than all other classes which makes them a deadly combatant.",
            dengarModifiers: ["Gets haste II when above 10HP"],
            positiveModifiers: [
                "Increased attack speed with swords (+50%)",
                "Right click with a sword while sprinting to dash once every 12 seconds",
                "Can crit when blind",
                "Increased damage when attacking an enemy from behind (+50%)",
            ],
            negativeModifiers: ["Decreased mining speed (-70%)"],
        },
        {
            name: "Knight",
            color: "B047F9",
            health: 30,
            description:
                "This class is suited for both PvP and PvE and is a great choice for beginners. The Knight is a tank, they are good at supporting in dungeons and escorting the wool carriers back to the monument.",
            dengarModifiers: [
                "Gets protection II shield with mending",
                "Shield also gives plus one armour",
            ],
            positiveModifiers: [
                "Break webs as they pass through",
                "Increased maximum health points (+10)",
            ],
            negativeModifiers: [
                "Shield is bound to their offhand slot",
                "Decreased movement speed (-30%)",
            ],
        },
        {
            name: "Messenger",
            color: "FE8E45",
            health: 18,
            description:
                "This class is good in PvP. They are very effective at moving around the map and are a great choice as a wool carrier due to their speed buff. However, they might find their bag full of mail difficult to manage.",
            dengarModifiers: ["Permanent iron boots with feather falling IV"],
            positiveModifiers: [
                "Increased movement speed (+25%)",
                "Jump Boost II",
            ],
            negativeModifiers: [
                "Decreased maximum health points (-2)",
                "Decreased inventory space (-15)",
            ],
        },
        {
            name: "Ranger",
            color: "DF56A6",
            health: 20,
            description:
                "This class excels at holding enemies at distance. The Ranger fires arrows which fly further, faster and deal more damage.",
            dengarModifiers: [
                "Gets bow with punch I, power I, projectile protection IV, knockback I and unbreakability",
            ],
            positiveModifiers: [
                "Supply of poison arrows per life (+32)",
                "Increased arrow velocity (+20%)",
            ],
            negativeModifiers: ["Decreased melee damage (-30%)"],
        },
        {
            name: "Illusionist",
            color: "DF56A6",
            health: 18,
            description:
                "This class is designed exclusively for PvP. The Illusionist can disguise their outline as they creep around the map, taking the opposing team by surprise. The lower health, however, makes PvE dangerous.",
            dengarModifiers: [
                "Is fully invisible when on full hp and not within 15 blocks of an enemy",
                "When exiting their chest, will obtain speed and regen (2 hearts)",
            ],
            positiveModifiers: [
                "Hides their own glowing outline, except when carrying wool or a key",
                "Right click with the chest to disguise as it, unless they've recently taken damage",
            ],
            negativeModifiers: [
                "Decreased maximum health points (-2)",
                "Decreased hotbar space (-1)",
            ],
        },
        {
            name: "Executioner",
            color: "DF56A6",
            health: 18,
            description:
                "This class is effective in PvP. The devastating sword swings of the Executioner can break shields like axes, and they can slow their opponents.",
            dengarModifiers: [
                "On kill area off effect debuffs: weakness, slowness and mining fatigue",
                "Gains regen and speed on kill",
            ],
            positiveModifiers: [
                "Swords break shields for a short duration (3s)",
                "Shield breaking with a fully charged weapon increases the duration (+1s)",
                "Melee crits apply Slowness III",
            ],
            negativeModifiers: [
                "Decreased arrow velocity (-20%)",
                "Decreased maximum health points (-2)",
                "Decreased movement speed (-20%)",
            ],
        },
        {
            name: "Grenadier",
            color: "9FEF00",
            health: 20,
            description:
                "This legally-distinct explosives man excels in destruction. Whether detonating spawners or enemies, the Grenadier is an volatile force to be reckoned with.",
            dengarModifiers: [
                "Free TNT",
                "Blebshard (right click gunpowder to explode into more tnt)",
                "When hold flint and steel in main hand, forces all tnt's fuse within 10 blocks on 10 ticks",
                "When hold flint and steel in off hand, forces all tnt's fuse within 10 blocks on 2400 ticks",
            ],
            positiveModifiers: [
                "Ignites TNT instantly and drops primed TNT on PVP death",
                "Increased resistance to explosions (+25%)",
            ],
            negativeModifiers: [
                "Decreased hotbar space (-1)",
                "Decreased inventory space (-6)",
            ],
        },
        {
            name: "Plague Doctor",
            color: "32C1DA",
            health: 18,
            description:
                "This class specialises in PvE. The Plague Doctor mitigates toxic effects, neutralising many enemies.",
            dengarModifiers: [
                "Gets resistance and fire resistance when at full hp (lingers couple of seconds)",
                "Gives players within 5 blocks poison I for 3 seconds",
            ],
            positiveModifiers: [
                "Clear Poison and Wither effects from themselves and their teammates in a 5 block radius around them",
            ],
            negativeModifiers: [
                "Decreased maximum health points (-2)",
                "Gain Slowness of the same level and duration as cleared effects",
            ],
        },
        {
            name: "Looter",
            color: "9FEF00",
            health: 20,
            description:
                "This class is excellent at money making through PvE. The Looter excels at collecting currency and can be vital to winning wars of attrition.",
            dengarModifiers: [
                "Starts with discount (has a Woolworth voucher at the start)",
                "Starts with a crossbow which magically reloads on kill (needs to be in offhand)",
            ],
            positiveModifiers: [
                "Increased coin drops from standard mobs (+300%)",
                "Holds a backpack that increases inventory space (+26) which teammates can shift-click to access",
                "Increased crossbow damage to mobs (+50%)",
            ],
            negativeModifiers: ["Decreased maximum armour (-2)"],
        },
        {
            name: "Bulwark",
            color: "B047F9",
            health: 20,
            description:
                "This class specialises in PvE but is still a force to be reckoned with in PvP. The Bulwark is a master of crowd control and can keep hordes of enemies at bay. This power carries with it an unending hunger.",
            dengarModifiers: [
                "Any player within 7 blocks that kill a mob get speed I for 3 seconds",
            ],
            positiveModifiers: [
                "While sneaking, gain Resistance II and apply Slowness IV in a 5 block radius",
            ],
            negativeModifiers: [
                "Gain Hunger IV while sneaking",
                "Decreased movement speed (-30%)",
                "Bosses only gain Slowness II",
            ],
        },
        {
            name: "Cleric",
            color: "32C1DA",
            health: 20,
            description:
                "This class is an excellent healer. It carries its blessed spell-book that allows it to heal their teammates with a single hit. It also carries a whip in case your teammates don't behave. Don't hit too hard though, it might throw your teammate into the lions' den. Or even worse, into the void!",
            dengarModifiers: [
                "Resistance I when near full hp ally",
                "Speed I when near ally with less than 10hp",
            ],
            positiveModifiers: [
                "Hitting teammates applies instant health (+3), unless they are shielding",
            ],
            negativeModifiers: ["Decreased hotbar space (-2)"],
        },
        {
            name: "Barbarian",
            color: "DF56A6",
            health: 20,
            description:
                "This class is a fast and frantic fighter. The Barbarian, driven wild with hunger, is quick to whip up a frenzy in close combat with their fierce lunging ability.",
            dengarModifiers: [
                "When at 6 or less drumsticks gains saturation 4 for 1 seconds (gains 2 drumsticks and 8 saturation)",
            ],
            positiveModifiers: [
                "Double tap space to leap forward with increased speed once every 5 seconds",
            ],
            negativeModifiers: [
                "Leaps cost saturation (-4) or hunger (-4) if they have no saturation",
                "They cannot eat while leap is on cooldown",
                "Offhand slot can only hold axes",
                "Offhand axe can't crit",
                "Decreased inventory space (-12)",
            ],
        },
        {
            name: "Captain",
            color: "9FEF00",
            health: 20,
            description:
                "The Captain is a born leader. Their powerful supportive presence allows them to boost team morale wherever their banner is displayed.",
            dengarModifiers: [
                "Gains speed I when banner is placed (does not have to be in range of banner)",
            ],
            positiveModifiers: [
                "Can place down a banner, giving Strength and Resistance to teammates within a 10 block radius",
            ],
            negativeModifiers: [
                "Decreased attack damage (-1)",
                "Decreased hotbar space (-1)",
            ],
        },
        {
            name: "Pestilent",
            color: "B047F9",
            health: 24,
            description:
                "This class is a real piece of work. Though sluggish, when taking damage the Pestilent inflicts their foes with a deep withering poison.",
            dengarModifiers: [
                "All players nearby who are withered will also be slowed (slowness III)",
            ],
            positiveModifiers: [
                "While taking physical damage, apply Wither to enemies within a 5 block radius",
                "Increased maximum health points (+4)",
            ],
            negativeModifiers: ["Decreased movement speed (-30%)"],
        },
        {
            name: "Spider",
            color: "FE8E45",
            health: 20,
            description:
                "The Spider is able to scurry through even the thickest webs to escape enemies, and spin up their own in order to trap their prey.",
            dengarModifiers: ["Gets cave spider spawn eggs periodically"],
            positiveModifiers: [
                "Increased movement speed and Regeneration in cobwebs",
                "Increased cobweb placement range (+3)",
                "Spiders won't attack unless provoked",
                "Spawn 3 Cave Spiders on death",
            ],
            negativeModifiers: [
                "Decreased movement speed (-40%) and Hunger IV when out of webs",
                "Wither deals double damage",
                "Decreased inventory space (-9)",
            ],
        },
        {
            name: "Duelist",
            color: "DF56A6",
            health: 14,
            description:
                "The Duelist has a special trick up its sleeve. When sneaking up on enemies, it blinds them. Be careful whenever your teammates join you in the fight though, as this effect won't work with them nearby.",
            dengarModifiers: ["Absolutly nothing"],
            positiveModifiers: [
                "Blinds enemies in a 5 block radius when no teammates are nearby",
            ],
            negativeModifiers: ["Decreased maximum health (-6)"],
        },
        {
            name: "Enchanter",
            color: "9FEF00",
            health: 20,
            description:
                "The Enchanter loves XP, and gets bonuses by picking it up. With this XP they're able to help the team out by enchanting their items with the anvil they always carry around.",
            dengarModifiers: [
                "Periodically gets XP bottle",
                "Has anvil which gives slowness I, knockback resistance completely and knockback",
                "Receives amethyst blocks",
                "When on amethyst blocks, gains speed II for 3 seconds",
            ],
            positiveModifiers: [
                "Increased XP drops (+100%)",
                "Gain Speed and Resistance after picking up XP",
                "Can place down a badly damaged anvil once every 30 seconds",
            ],
            negativeModifiers: [
                "No coin drops from mobs",
                "Decreased hotbar space (-1)",
            ],
        },
        {
            name: "Iceman",
            color: "9FEF00",
            health: 20,
            description:
                "When threatened, the Iceman can summon an invulnerable shield of ice around themselves. Additionally, their punches carry a chill, slowing any players they hit, although they are vulnerable to fire.",
            dengarModifiers: [
                "When it touches the orb creates area of effect slow",
                "When below half HP gains speed and haste",
            ],
            positiveModifiers: [
                "Right click the icy core to gain Regeneration and generate an invulnerable shield of ice around themselves",
                "Icy core removes fire effects from themselves",
                "Attacks apply Slowness IV",
            ],
            negativeModifiers: [
                "Icy core gives Slowness III instead of the ice shield on monument and in puzzle rooms",
                "Fire deals double damage",
                "Decreased hotbar space (-1)",
            ],
        },
    ],
};

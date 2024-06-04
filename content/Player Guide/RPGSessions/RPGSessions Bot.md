---
aliases:
  - RPGSessions Discord bot
  - Discord bot
tags:
  - Guide
  - RPGSessions
---
The [[RPGSessions]] Discord bot is used for [[Echoes of the Departed|Echoes of the Departed]] due to its great functionality and integration with the [[RPGSessions]] website.

![](https://i.imgur.com/5bQcsHL.png)

To invite the bot, [follow this link.](https://discord.com/oauth2/authorize?client_id=534606682928578572&permissions=274878171136&scope=applications.commands%20bot)

The following is a basic overview of commands used in the RPGSessions bot. To view documentation directly from RPGSessions, [visit this page](https://www.rpgsessions.com/assets/pdfs/DiscordBot-Reference%20Sheet.pdf). While many of these options are more intuitive to do on the [[Game Table|Game Table]], some things–such as rolling [[Narrative Dice|Dice]]–can be more convenient using the bot.

### Roll Using [[Skills]]
“.r (charm)ppp” Replace (charm) with any [[Skills]] you want to use. The “ppp" afterwards is the difficulty, representing three Difficulty Dice otherwise known as Purple Dice. You may also add Boosts to this field. 

Additionally, add a space after the “ppp” and insert text to add a description to the roll that will appear on the Game Table.

If you wish to change the naming scheme of the Dice–whether you use the color or name to roll the dice–navigate to your profile settings.

### Roll Initiative
“.i r pc (vigilance)” This rolls Initiative and adds a slot to the Initiative order based on the results of your roll. Replace (vigilance) with the appropriate Skill; usually, the other potential Initiative Skill being Cool.

To view Initiative, use the command “.i v”.

### View Character
To view your character sheet using the RPGSessions bot, use the “.c v” command. To view a list of characters, use “.c l”.

### Add Wounds and Strain
Use the “.c w +1” command to add one Wound to your currently active character. To change the amount of Wounds added, change the number to a different value. To heal Wounds instead, change the +1 to a -1.

Inversely, use the “.c s +1” command to add one Stran to your currently active character. To change the amount of Strain added, change the number to a different value. To heal Strain instead, change the +1 to a -1.

### Add Damage
To instead add Damage to the currently active character, use the “.c d 8” command. To change the amount of Damage you suffer, change the number to a different value.

Adding damage this way can be beneficial compared to adding Wounds directly, as it automatically reduces the incoming damage by your Soak.

If an incoming attack has the Pierce or Breach quality, use the following command. “.c d 8 p 2” Change out the value following “p” to be equal to the amount of Pierce. If the incoming attack has Breach instead, change the “p” to a “b”.

### Use Sacred Points
To spend a Sacred Point using the RPGSessions Discord bot, use the “.s p” command on Discord. To view the Sacred Points pool, use the “.s v" command.

### Roll Dice
To roll using any combination of Dice, use “.r {dice} {description}”. The description is field is optional but adds an explanation on the Game Table for the roll. The {dice} field is where the Dice go. For example, yygppk would roll two Proficiency Dice, one Ability Die, two Difficulty Dice, and one Setback. Make sure to remove the {brackets} when filling each field.

If you wish to change the naming scheme of the Dice–whether you use the color or name to roll the dice–navigate to your profile settings.

### Roll Using a Weapon
Use the “.r (weapon){dice} {description}” command to roll using a weapon. In the (weapon) value, add the name of your weapon, such as (Soldier’s Broadsword). Do not remove the (parentheses). Specifying which weapon you use will automate the Skill, and any Qualities that effect the roll, such as Accurate or Superior.

The dice field is for the Difficulty of the roll, or any additional Setbacks, Boosts, or other modifiers. The Description field is optional but it adds an explanation to the Game Table for the roll. Make sure to remove the {brackets} when filling these fields.

If you wish to change the naming scheme of the Dice–whether you use the color or name to roll the dice–navigate to your profile settings.

### Roll a Crit
To roll a Critical Injury, use the “.c c +10” command. Previous Critical Injuries on the active character will automatically be added. To change the manual Critical Injury modifier, change the value of 10. If you instead have a modifier that reduces the Critical Severity, replace the + sign with a -.

### Changing Dice Naming Scheme
First, navigate to your profile from the RPGSessions website.

![](https://i.imgur.com/LM8Bd7Y.png)

Once there, hit the “Dice Input Style” button in the user settings category.

![](https://i.imgur.com/VIGpTkX.png)

Select ‘Color’ or ‘Game’ from the drop-down menu depending on which one you want.







---
aliases:
  - Modifiers system in RPGSessions
  - Quality/Modifier
  - Modifier
tags:
  - Guide
  - RPGSessions
  - Qualities
Image: "[[Images/thumbnails/external/029df043d95934679ae2fec6d1a58c6f.png]]"
---
**Modifiers**, or **Qualities**, are a feature on [[RPGSessions]] that allows [[Weapons]], [[Items]], [[Talents]], or [[Armor]] to influence other stats on the character sheet. This is useful for automating passive and consistent [[Qualities]] and Talent effects.

It should be noted that this is distinct from the game mechanic of [[Qualities]] or [[Modifiers]], and they should not be confused. Qualities in [[Echoes of the Departed]] solely apply to [[Items]], namely [[Weapons]]. In RPGSessions, any type of Character or stat automation is considered a “Quality”, or “Modifier”. This means that, for example, RPGSessions’ Qualities/Modifiers also apply to [[Talents]] as they are how certain Talent effects are automated, whereas the game mechanic of [[Qualities]] has nothing to do with Talents.

### Adding Modifiers/Qualities
Usually, when you add a [[Weapons|Weapon]] or any other [[Items|Item]] that would have a [[Qualities|Quality]] using the [[RPGSessions Data Library|Data Library]] system, any relevant Qualities/Modifiers are automatically added. Likewise, any Talent that can have its effects automated already does, so there is no need to mess with Qualities/Modifiers on Talents.

With Items, there are a few situations where you may want to. For example, if you are adding a [[Spell Creation|Spell]] as a [[Weapons|Weapon]], or adding it to your [[RPGSessions Spellbook|Spellbook]], where RPGSessions’ Qualities/Modifiers also apply. You may also want to add [[Qualities]] yourself if you’re using [[Item Creation]] to create your own, custom Weapons, or otherwise have acquired a Weapon that does not have a [[RPGSessions Data Library|Data Library]] entry (and thus needs to be manually inputted), or modified an Item to where a Quality must be changed, added, or removed.

In these situations, it is very easy to add a Quality/Modifier. The example we will give is for adding a Quality/Modifier to a [[Weapons|Weapon]], but this process holds true for anything you can add a Quality/Modifier to.

First, after adding or purchasing a Weapon—or adding a Blank Weapon not from the [[RPGSessions Data Library|Data Library]], see [[Items]]—on a [[Character Sheet]] you will want to enter Edit mode. Hit the three dots on the right side of the [[Weapons|Weapon]]’s profile.

![](https://i.imgur.com/67gNYXL.png)

Hit “Edit” in the menu that pops up.

![](https://i.imgur.com/LnBnV0L.png)

Then, hit the “Add Quality” button. This will be beneath any existing Qualities.

![](https://i.imgur.com/M81sSIs.png)

This then opens up a modal to select new Qualities. Assuming your Character sheet is properly set up with the [[RPGSessions Data Library|Data Library]] and assigned the [[Echoes of the Departed]] kit (See [[RPGSessions Data Library|Data Library]]), then this modal should automatically be filtering for Qualities only from Echoes of the Departed.

You can filter a variety of ways, such as by the Qualities/Modifiers’ Activation method, its name with the search bar at the top, or technically with tags—although none of the Qualities/Modifiers in the Echoes of the Departed kit are tagged with anything.

When you’re ready to add a Quality, hit the “Select” button on its row. If it’s a Quality/Modifier that has a rating (such as [[Accurate (Passive) (Quality)|Accurate]], with how it can be [[Accurate (Passive) (Quality)|Accurate]] 1, [[Accurate (Passive) (Quality)|Accurate]] 3, etc), make sure you use the + and - buttons next to “Select” to decide what rating you want the Quality to have before you add it.

![](https://i.imgur.com/yPynkTj.png)

Any existing [[Qualities|Quality]] in Echoes of the Departed, or any existing special effect or [[Talents|Talent]] effect which exists and can be automated, will be in the list. However, there is a chance you want to add/create an entirely new, custom Quality. For example, if during Item Creation you created a Weapon with a new “Special” Quality.

In that case, click on the “Create Custom” button next to the “Cancel” button in the bottom-right corner of the modal.

Options will pop up asking you to decide what type of Modifier you would like to select for your new Modifier.

![](https://i.imgur.com/y3rmYhh.png)

In order of left-to-right and top-to-bottom:
- Armor: Allows you to change the values of a piece of armor when the Modifier is active, such as its [[Defense]], [[Soak]], etc.
- Attribute: Allows you to change a variety of [[Derived Attributes]], as well as misc ones, when the Modifier is active. This includes things like [[Soak]], [[Wound Threshold]], [[Encumbrance|Encumbrance Threshold]], etc.
- Characteristic: Allows you to change the value of [[Characteristics]] when this Modifier is active, such as by increasing or decreasing it.
- Skill: Allows you to add Dice or symbols to all rolls with any given [[Skills]] when this Modifier is active.
- Weapon: Allows you to modify a variety of a Weapon’s parameters, such as [[Damage]], [[Critical Rating]], and allows you to add extra dice.
- Text Only: This is the go-to Modifier category, and is used for any Modifier that is situational.

Be careful to when adding Qualities/Modifiers that are supposed to activate situationally as any type of Modifier besides Text Only. The issue here is that aside from checking whether an Item is Equipped, a Modifier will always be active no matter what, meaning its situationality is lost.

This should be everything you need to know about Qualities/Modifiers—and then some! Most of this functionality is already automatically handled by [[RPGSessions]] and by what was set-up in the Echoes of the Departed kit, meaning you don’t have to worry about this. Nifty!
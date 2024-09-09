# How to Use
Update newBestiaryDB.js with any changes you think are needed to fix the bestiary entry.
Note: bestiaryDB.json is the ORIGINAL information and only there for historical purposes.

In PathCompanion, use the bestiary import tool to import your changed JSON block and check your work

If everything seems correct, submit a Pull Request with a description of:
* The issue you saw
* The change you made to fix it
* Why it's correct
* Please make sure you check the "source" value in the stat block, as the bestiary entry may be different than you expect because of the different source.

For any questions, please raise an issue or join the PathCompanion discord channel.

## Some caveats
* If you are wondering where some bonus/effect is coming from, it's possible the monster is getting it "for free" from a type/subtype.
* Auras are generally not implemented at the moment
* Many abilities with DCs are inferred based on the basic rules for calculating DC based on the HD of the monster. If there's a discrepancy, the value in the monster block will override the default.
* Many entries are from Tome of Horrors, and while not incorrect, I'd prefer the bestiary entry from an actual Paizo-published book. We can find another way of separating out other source books with the same name.

import { Boots } from './boots';
import { Character } from './character';
import { Chest } from './chest';
import { Earring } from './earring';
import { Gloves } from './gloves';
import { Helmet } from './helmet';
import { Legs } from './legs';
import { Necklace } from './necklace';
import { Ring } from './ring';
import { Shield } from './shield';
import { Weapon } from './weapon';

export class Equipment {
    id: string;
    character: Character;
    weapon: Weapon;
    chest: Chest;
    legs: Legs;
    boots: Boots;
    gloves: Gloves;
    helmet: Helmet;
    shield: Shield;
    ring1: Ring;
    ring2: Ring;
    necklace: Necklace;
    earring1: Earring;
    earring2: Earring;    
}

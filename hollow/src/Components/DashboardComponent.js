import React, { Component } from 'react';
import { Redirect }  from 'react-router-dom';
import { addMask, removeMask, addVessel, removeVessel, addEssense, removeEssense, 
    addNail, removeNail, addColosseum, removeColosseum, addBoss, removeBoss,
    addCharm, removeCharm, addDreamWarrior, removeDreamWarrior, addEquipment, removeEquipment,
    addDreamer, removeDreamer, addNailArt, removeNailArt, addSpell, removeSpell, addLifeBlood, removeLifeBlood, addGrim, removeGrim,
    addGodMaster, removeGodMaster } from '../Utils/APIUtil';
import boss0 from '../hollowImages/boss0.png';
import boss1 from '../hollowImages/boss1.png';
import boss2 from '../hollowImages/boss2.png';
import boss4 from '../hollowImages/boss4.png';
import boss5 from '../hollowImages/boss5.png';
import boss6 from '../hollowImages/boss6.png';
import boss7 from '../hollowImages/boss7.png';
import boss8 from '../hollowImages/boss8.png';
import boss9 from '../hollowImages/boss9.png';
import boss10 from '../hollowImages/boss10.png';
import boss11 from '../hollowImages/boss11.png';
import boss12 from '../hollowImages/boss12.png';
import boss13 from '../hollowImages/boss13.png';
import boss14 from '../hollowImages/boss14.png';
import dreamer0 from '../hollowImages/dreamer0.png';
import dreamer1 from '../hollowImages/dreamer1.png';
import dreamer3 from '../hollowImages/dreamer3.png';
import warrior0 from '../hollowImages/warrior0.png';
import warrior1 from '../hollowImages/warrior1.png';
import warrior2 from '../hollowImages/warrior2.png';
import warrior3 from '../hollowImages/warrior3.png';
import warrior4 from '../hollowImages/warrior4.png';
import warrior5 from '../hollowImages/warrior5.png';
import warrior6 from '../hollowImages/warrior6.png';
import charm0 from '../hollowImages/charm0.png';
import charm1 from '../hollowImages/charm1.png';
import charm2 from '../hollowImages/charm2.png';
import charm3 from '../hollowImages/charm3.png';
import charm4 from '../hollowImages/charm4.png';
import charm5 from '../hollowImages/charm5.png';
import charm6 from '../hollowImages/charm6.png';
import charm7 from '../hollowImages/charm7.png';
import charm8 from '../hollowImages/charm8.png';
import charm9 from '../hollowImages/charm9.png';
import charm10 from '../hollowImages/charm10.png';
import charm11 from '../hollowImages/charm11.png';
import charm12 from '../hollowImages/charm12.png';
import charm13 from '../hollowImages/charm13.png';
import charm14 from '../hollowImages/charm14.png';
import charm15 from '../hollowImages/charm15.png';
import charm16 from '../hollowImages/charm16.png';
import charm17 from '../hollowImages/charm17.png';
import charm18 from '../hollowImages/charm18.png';
import charm19 from '../hollowImages/charm19.png';
import charm20 from '../hollowImages/charm20.png';
import charm21 from '../hollowImages/charm21.png';
import charm22 from '../hollowImages/charm22.png';
import charm23 from '../hollowImages/charm23.png';
import charm24 from '../hollowImages/charm24.png';
import charm25 from '../hollowImages/charm25.png';
import charm26 from '../hollowImages/charm26.png';
import charm27 from '../hollowImages/charm27.png';
import charm28 from '../hollowImages/charm28.png';
import charm29 from '../hollowImages/charm29.png';
import charm30 from '../hollowImages/charm30.png';
import charm31 from '../hollowImages/charm31.png';
import charm32 from '../hollowImages/charm32.png';
import charm33 from '../hollowImages/charm33.png';
import charm34 from '../hollowImages/charm34.png';
import charm35 from '../hollowImages/charm35.png';
import equip0 from '../hollowImages/equip0.png';
import equip1 from '../hollowImages/equip1.png';
import equip2 from '../hollowImages/equip2.png';
import equip3 from '../hollowImages/equip3.png';
import equip4 from '../hollowImages/equip4.png';
import equip5 from '../hollowImages/equip5.png';
import equip6 from '../hollowImages/equip6.png';
import nail0 from '../hollowImages/nail0.png';
import nail2 from '../hollowImages/nail2.png';
import spell0 from '../hollowImages/spell0.png';
import spell1 from '../hollowImages/spell1.png';
import spell2 from '../hollowImages/spell2.png';
import spell3 from '../hollowImages/spell3.png';
import spell4 from '../hollowImages/spell4.png';
import spell5 from '../hollowImages/spell5.png';
import trial from '../hollowImages/trial.png';
import mask from '../hollowImages/mask.png';
import vessel from '../hollowImages/vessel.png';
import essense from '../hollowImages/essense.png';
import nailUpgrade from '../hollowImages/nailUpgrade.png';
import whiteCircle from '../hollowImages/whiteCircle.png';
import mapper from '../hollowImages/mapper.png';
import hive from '../hollowImages/hive.png';
import grim0 from '../hollowImages/grim0.png';
import grim1 from '../hollowImages/grim1.png';
import grim2 from '../hollowImages/grim2.png';
import grim3 from '../hollowImages/grim3.png';
import grim4 from '../hollowImages/grim4.png';
import grim5 from '../hollowImages/grim5.png';
import god0 from '../hollowImages/god0.png';
import god1 from '../hollowImages/god1.png';
import god2 from '../hollowImages/god2.png';
import god3 from '../hollowImages/god3.png';
import god4 from '../hollowImages/god4.png';
import complete from '../hollowImages/complete.png';


    const HollowBosses = ["Brooding Mawlek", "Gruz Mother", "The Collector", "Uumuu",
                            "Nosk", "Traitor Lord", "Broken Vessel", "Watcher Knight", "Dung Defender",
                        "Soul Master", "Manthis Lords", "Hornet Protector", "Hornet Sentinel", "False Knight"];

    const HollowCharms = ["Wayward Compass", "Gathering Swarm", "Stalwart Shell", "Soul Catcher", "Shaman Stone",
                        "Soul Eater", "Dashmaster", "Thorns of Agony", "Fury of the Fallen", "Fragile Heart", "Fragile Greed",
                        "Fragile Strength", "Spell Twister", "Steady Body", "Heavy Blow", "Quick Slash", "Long Nail",
                    "Mark of Pride", "Baldur Shell", "Flukenest", "Defenders Crest", "Glowing Womb", "Quick Focus",
                    "Depp Focus", "Lifeblood Heart", "Lifeblood Core", "Jonis Blessing", "GrubSong", "Grubberflys Elegy",
                    "Hiveblood", "Spore Shroom", "Sharp Shadow", "Shape of Unn", "Nailmasters Glory", "Dream Wielder",
                    "Kingsoul/Void Heart"];

    const HollowEquipment = ["Kings Brand", "Crystal Heart", "Mantis Claw", "Monarch Wings", "Ismas Tear", "Mothwing Cloak",
                            "Shade Cloak"];

    const HollowDreamers = ["Lurian the Watcher", "Something the Teacher", "Something the Beast"];

    const HollowNailArts = ["Great Slash", "Dash Slash", "Cyclone Slash"];

    const HollowSpells = ["Desolate Dive", "Descending Dark", "Howling Wraiths", "Abyss Shriek", "Vengeful Spirit",
                            "Shade Soul"];

    const HollowDreamWarriors = ["Galien", "Marmu", "Markoth", "Xero", "No Eyes", "Elder Hu", "Gorb"];

    const HollowGrim = ["Dreamshield", "Grimmchild / Carefree Melody", "Defeat Grim", "Banish Grimm", "Sprintmaster",
                        "Weaversong"];

    const HollowGod = ["Godtuner", "Pantheon / Master", "Pantheon / Artist", "Pantheon / Mage", "Pantheon / Knight"];

    const HollowImages = [boss0, boss1, boss2, boss4, boss5, boss6, boss7, boss8, boss9, boss10, boss11, boss12,
                        boss13, boss14];

    const HollowImages2 = [dreamer1, dreamer3, dreamer0];

    const HollowImages3 = [warrior0, warrior1, warrior2, warrior3, warrior4, warrior5, warrior6]

    const HollowImages4 = [charm0, charm1, charm2, charm3, charm4, charm5, charm6, charm7, charm8, charm9, charm10,
                        charm11, charm12, charm13, charm14, charm15, charm16, charm17, charm18, charm19, charm20,
                        charm21, charm22, charm23, charm24, charm25, charm26, charm27, charm28, charm29, charm30,
                        charm31, charm32, charm33, charm34, charm35];

    const HollowImages5 = [equip0, equip1, equip2, equip3, equip4, equip5, equip6];

    const HollowImages6 = [nail0, whiteCircle, nail2];

    const HollowImages7 = [spell0, spell1, spell2, spell3, spell4, spell5];

    const HollowImages8 = [grim0, grim1, grim2, grim3, grim4, grim5];

    const HollowImages9 = [god0, god1, god2, god3, god4];



class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }

        this.addMaskHandler = this.addMaskHandler.bind(this);
        this.removeMaskHandler = this.removeMaskHandler.bind(this);

        this.addLifeBloodHandler = this.addLifeBloodHandler.bind(this);
        this.removeLifeBloodHandler = this.removeLifeBloodHandler.bind(this);

        this.addVesselHandler = this.addVesselHandler.bind(this);
        this.removeVesselHandler = this.removeVesselHandler.bind(this);
        
        this.addNailHandler = this.addNailHandler.bind(this);
        this.removeNailHandler = this.removeNailHandler.bind(this);

        this.addEssenseHandler = this.addEssenseHandler.bind(this);
        this.removeEssenseHandler = this.removeEssenseHandler.bind(this);

        this.addColosseumHandler = this.addColosseumHandler.bind(this);
        this.removeColosseumHandler = this.removeColosseumHandler.bind(this);

        this.addBossHandler = this.addBossHandler.bind(this);
        this.removeBossHandler = this.removeBossHandler.bind(this);

        this.addCharm = this.addCharm.bind(this);
        this.removeCharm = this.removeCharm.bind(this);

        this.addEquipmentHandler = this.addEquipmentHandler.bind(this);
        this.removeEquipmentHandler = this.removeEquipmentHandler.bind(this);

        this.addSpellHandler = this.addSpellHandler.bind(this);
        this.removeSpellHandler = this.removeSpellHandler.bind(this);

        this.addDreamerHandler = this.addDreamerHandler.bind(this);
        this.removeDreamerHandler = this.removeDreamerHandler.bind(this);

        this.addDreamerWarriorHandler = this.addDreamerWarriorHandler.bind(this);
        this.removeDreamerWarriorHandler = this.removeDreamerWarriorHandler.bind(this);

        this.addNailArtHandler = this.addNailArtHandler.bind(this);
        this.removeNailArtHandler = this.removeNailArtHandler.bind(this);

        this.addGrimHandler = this.addGrimHandler.bind(this);
        this.removeGrimHandler = this.removeGrimHandler.bind(this);

        this.addGodMasterHandler = this.addGodMasterHandler.bind(this);
        this.removeGodMasterHandler = this.removeGodMasterHandler.bind(this);

    }

    authenCheck(){
        if(this.props.authen == false){

        }
    }

    renderHeaderPrim(cap, name, current){
        var trig = false;

        if(current == cap){
            trig = true;
        }

        return(
            <h2 className={`${trig ? 'headerBlockComplete' : 'headerBlock'}`}>
                {name}
            </h2>
        );
    }

    renderHeaderArray(cap, name, array){
        const arraySize = array.length;
        var counter = 0;
        var trig = false;
        for(var x = 0; x < arraySize; x++){
            counter += array[x];
        }

        if(counter == cap){
            trig = true;
        }

        return(
            <h2 className={`${trig ? 'headerBlockComplete' : 'headerBlock'}`}>
                {name}
            </h2>
        );
    }


    renderMaskSection(){

        var button1 = [];
        var button2 = [];
        var selector = false;

        if(this.props.player.maskShards == 4){
            button1.push(<button onClick={this.addMaskHandler} disabled>Add</button>);
            selector = true;
        } else {
            button1.push(<button onClick={this.addMaskHandler}>Add</button>);
        }

        if(this.props.player.maskShards == 0){
            button2.push(<button onClick={this.removeMaskHandler} disabled>Remove</button>);
        } else {
            button2.push(<button onClick={this.removeMaskHandler}>Remove</button>);
        }

        var counter = [];

        for(var x = 0; x < this.props.player.maskShards; x++){
            counter.push(<img src={whiteCircle} />);
        }

        return(
            <div className={`section ${selector ? 'selected' : ''}`}>
                <div className="img-wrapper">
                    <img src={mask}/>
                </div>
                <div className="content-wrapper">
                    <div className="inner-top">
                        {button1}
                        {button2}
                    </div>
                    <div className="inner">
                        {counter}
                    </div>
                </div>
            </div>
            
        );
    }

    renderVesselSection() {
        var button1 = [];
        var button2 = [];
        var selector = false;

        if(this.props.player.vesselFragments == 3){
            button1.push(<button onClick={this.addVesselHandler} disabled>Add</button>);
            selector = true;
        } else {
            button1.push(<button onClick={this.addVesselHandler}>Add</button>);
        }

        if(this.props.player.vesselFragments == 0){
            button2.push(<button onClick={this.removeVesselHandler} disabled>Remove</button>);
        } else {
            button2.push(<button onClick={this.removeVesselHandler}>Remove</button>);
        }

        var counter = [];

        for(var x = 0; x < this.props.player.vesselFragments; x++){
            counter.push(<img src={whiteCircle} />);
        }

        return(
            <div className={`section ${selector ? 'selected' : ''}`}>
                <div className="img-wrapper">
                    <img src={vessel}/>
                </div>
                <div className="content-wrapper">
                    <div className="inner-top">
                        {button1}
                        {button2}
                    </div>
                    <div className="inner">
                        {counter}
                    </div>
                </div>
            </div>
            
        );
    }

    renderNailSection() {
        var button1 = [];
        var button2 = [];
        var selector = false;

        if(this.props.player.nail == 4){
            button1.push(<button onClick={this.addNailHandler} disabled>Add</button>);
            selector = true;
        } else {
            button1.push(<button onClick={this.addNailHandler}>Add</button>);
        }

        if(this.props.player.nail == 0){
            button2.push(<button onClick={this.removeNailHandler} disabled>Remove</button>);
        } else {
            button2.push(<button onClick={this.removeNailHandler}>Remove</button>);
        }

        var counter = [];

        for(var x = 0; x < this.props.player.nail; x++){
            counter.push(<img src={whiteCircle} />);
        }

        return(
            <div className={`section ${selector ? 'selected' : ''}`}>
                <div className="img-wrapper">
                    <img src={nailUpgrade}/>
                </div>
                <div className="content-wrapper">
                    <div className="inner-top">
                        {button1}
                        {button2}
                    </div>
                    <div className="inner">
                        {counter}
                    </div>
                </div>
            </div>
            
        );
    }

    renderLifeBloodSection() {

            var button1 = false;
            var button2 = false;

            if(this.props.player.lifeBlood == 0){
                button1 = true;
                button2 = false;
            } else {
                button1 = false;
                button2 = true;
            }

            return(
                <div className={`shine-me2 section ${button2 ? 'selected' : ''}`}>
                    <div className="img-wrapper">
                        <img src={hive}/>
                    </div>
                    <div className="content-wrapper">
                        <h3>Hive Knight</h3>
                        <button className={`d-non ${button1 ? 'd-show' : ''}`} onClick={() => this.addLifeBloodHandler()}>Complete</button>
                        <button className={`d-non ${button2 ? 'd-show' : ''}`} onClick={() => this.removeLifeBloodHandler()}>Undefeat</button>
                    </div>
                </div>
                
            );
    }

    renderEssenseSection() {
        var button1 = [];
        var button2 = [];
        var selector = false;

        if(this.props.player.essense == 3){
            button1.push(<button onClick={this.addEssenseHandler} disabled>Add</button>);
            selector = true;
        } else {
            button1.push(<button onClick={this.addEssenseHandler}>Add</button>);
        }

        if(this.props.player.essense == 0){
            button2.push(<button onClick={this.removeEssenseHandler} disabled>Remove</button>);
        } else {
            button2.push(<button onClick={this.removeEssenseHandler}>Remove</button>);
        }

        var counter = [];

        for(var x = 0; x < this.props.player.essense; x++){
            counter.push(<img src={whiteCircle} />);
        }

        return(
            <div className={`section ${selector ? 'selected' : ''}`}>
                <div className="img-wrapper">
                    <img src={essense}/>
                </div>
                <div className="content-wrapper">
                    <div className="inner-top">
                        {button1}
                        {button2}
                    </div>
                    <div className="inner">
                        {counter}
                    </div>
                </div>
            </div>
            
        );
    }

    renderColosseumSection() {
        var button1 = [];
        var button2 = [];
        var selector = false;

        if(this.props.player.colosseum == 3){
            button1.push(<button onClick={this.addColosseumHandler} disabled>Add</button>);
            selector = true;
        } else {
            button1.push(<button onClick={this.addColosseumHandler}>Add</button>);
        }

        if(this.props.player.colosseum == 0){
            button2.push(<button onClick={this.removeColosseumHandler} disabled>Remove</button>);
        } else {
            button2.push(<button onClick={this.removeColosseumHandler}>Remove</button>);
        }

        var counter = [];

        for(var x = 0; x < this.props.player.colosseum; x++){
            counter.push(<img src={whiteCircle} />);
        }

        return(
            <div className={`section ${selector ? 'selected' : ''}`}>
                <div className="img-wrapper">
                    <img src={trial}/>
                </div>
                <div className="content-wrapper">
                    <div className="inner-top">
                        {button1}
                        {button2}
                    </div>
                    <div className="inner">
                        {counter}
                    </div>
                </div>
            </div>
            
        );
    }

    renderBosses(){
        
        const bossesR = Object.entries(this.props.player.bosses).map(([key, value]) => {
            var plus = 0;
            var button1 = false;
            var button2 = false;

            if(value == 0){
                button1 = true;
                button2 = false;
            } else {
                button1 = false;
                button2 = true;
            }

            const track = key % 6;

            return(
                <div className={`shine-me${track} section ${button2 ? 'selected' : ''}`}>
                    <div className="img-wrapper">
                        <img src={HollowImages[key]}/>
                    </div>
                    <div className="content-wrapper">
                        <h3>{HollowBosses[key]}</h3>
                        <button className={`d-non ${button1 ? 'd-show' : ''}`} onClick={() => this.addBossHandler(key)}>Complete</button>
                        <button className={`d-non ${button2 ? 'd-show' : ''}`} onClick={() => this.removeBossHandler(key)}>Undefeat</button>
                    </div>
                </div>
                
            );
        })

        return bossesR;
    }

    renderCharms() {
        const charmsR = Object.entries(this.props.player.charms).map(([key, value]) => {

            var plus = 0;
            var button1 = false;
            var button2 = false;

            if(value == 0){
                button1 = true;
                button2 = false;
            } else {
                button1 = false;
                button2 = true;
            }

            const track = key % 6;

            return(
                <div className={`shine-me${track} section ${button2 ? 'selected' : ''}`}>
                    <div className="img-wrapper">
                        <img src={HollowImages4[key]}/>
                    </div>
                    <div className="content-wrapper">
                        <h3>{HollowCharms[key]}</h3>
                        <button className={`d-non ${button1 ? 'd-show' : ''}`} onClick={() => this.addCharm(key)}>Obtain</button>
                        <button className={`d-non ${button2 ? 'd-show' : ''}`} onClick={() => this.removeCharm(key)}>Drop</button>
                    </div>
                    
                </div> 
            );
        })

        return charmsR;
    }

    renderDreamWarriors() {
        const DWR = Object.entries(this.props.player.warriorDreams).map(([key, value]) => {

            var plus = 0;
            var button1 = false;
            var button2 = false;

            if(value == 0){
                button1 = true;
                button2 = false;
            } else {
                button1 = false;
                button2 = true;
            }

            const track = key % 6;

            return(
                <div className={`shine-me${track} section ${button2 ? 'selected' : ''}`}>
                    <div className="img-wrapper">
                        <img src={HollowImages3[key]}/>
                    </div>
                    <div className="content-wrapper">
                        <h3>{HollowDreamWarriors[key]}</h3>
                        <button className={`d-non ${button1 ? 'd-show' : ''}`} onClick={() => this.addDreamerWarriorHandler(key)}>Complete</button>
                        <button className={`d-non ${button2 ? 'd-show' : ''}`} onClick={() => this.removeDreamerWarriorHandler(key)}>Undefeat</button>
                    </div>
                    
                </div>  
            );
        })

        return DWR;
    }

    renderDreamers() {
        
        const dreamer = Object.entries(this.props.player.dreamers).map(([key, value]) => {

            var plus = 0;
            var button1 = false;
            var button2 = false;

            if(value == 0){
                button1 = true;
                button2 = false;
            } else {
                button1 = false;
                button2 = true;
            }

            const track = key % 6;

            return(
                <div className={`shine-me${track} section ${button2 ? 'selected' : ''}`}>
                    <div className="img-wrapper">
                        <img src={HollowImages2[key]}/>
                    </div>
                    <div className="content-wrapper">
                        <h3>{HollowDreamers[key]}</h3>
                        <button className={`d-non ${button1 ? 'd-show' : ''}`} onClick={() => this.addDreamerHandler(key)}>Complete</button>
                        <button className={`d-non ${button2 ? 'd-show' : ''}`} onClick={() => this.removeDreamerHandler(key)}>Undefeat</button>
                    </div>
                </div>                   
            );
        })

        return dreamer;
    }

    renderEquipment() {


        const equipmentR = Object.entries(this.props.player.equipment).map(([key, value]) => {

            var plus = 0;
            var button1 = false;
            var button2 = false;
    
            if(value == 0){
                button1 = true;
                button2 = false;
            } else {
                button1 = false;
                button2 = true;
            }

            const track = key % 6;


            return(
                <div className={`shine-me${track} section ${button2 ? 'selected' : ''}`}>
                    <div className="img-wrapper">
                        <img src={HollowImages5[key]}/>
                    </div>
                    <div className="content-wrapper">
                        <h3>{HollowEquipment[key]}</h3>
                        <button className={`d-non ${button1 ? 'd-show' : ''}`} onClick={() => this.addEquipmentHandler(key)}>Obtained</button>
                        <button className={`d-non ${button2 ? 'd-show' : ''}`} onClick={() => this.removeEquipmentHandler(key)}>Drop</button>
                    </div>
                    
                </div> 
            );
        })

        return equipmentR;
    }

    renderNailArts() {


        const nailArtR = Object.entries(this.props.player.nailArts).map(([key, value]) => {

            var plus = 0;
            var button1 = false;
            var button2 = false;
    
            if(value == 0){
                button1 = true;
                button2 = false;
            } else {
                button1 = false;
                button2 = true;
            }

            const track = key % 6;


            return(
                <div className={`shine-me${track} section ${button2 ? 'selected' : ''}`}>
                    <div className="img-wrapper">
                        <img src={HollowImages6[key]}/>
                    </div>
                    <div className="content-wrapper">
                        <h3>{HollowNailArts[key]}</h3>
                        <button className={`d-non ${button1 ? 'd-show' : ''}`} onClick={() => this.addNailArtHandler(key)}>Obtained</button>
                        <button className={`d-non ${button2 ? 'd-show' : ''}`} onClick={() => this.removeNailArtHandler(key)}>Drop</button>
                    </div>
                    
                </div> 
            );
        })

        return nailArtR;
    }

    renderSpells() {

        const spellR = Object.entries(this.props.player.spells).map(([key, value]) => {

            var plus = 0;
            var button1 = false;
            var button2 = false;
    
            if(value == 0){
                button1 = true;
                button2 = false;
            } else {
                button1 = false;
                button2 = true;
            }

            const track = key % 6;


            return(
                <div className={`shine-me${track} section ${button2 ? 'selected' : ''}`}>
                    <div className="img-wrapper">
                        <img src={HollowImages7[key]}/>
                    </div>
                    <div className="content-wrapper">
                        <h3>{HollowSpells[key]}</h3>
                        <button className={`d-non ${button1 ? 'd-show' : ''}`} onClick={() => this.addSpellHandler(key)}>Obtained</button>
                        <button className={`d-non ${button2 ? 'd-show' : ''}`} onClick={() => this.removeSpellHandler(key)}>Drop</button>
                    </div>
                    
                </div> 
            );
        })

        return spellR;
    }

    renderGrim() {

        const spellR = Object.entries(this.props.player.grim).map(([key, value]) => {

            var plus = 0;
            var button1 = false;
            var button2 = false;
    
            if(value == 0){
                button1 = true;
                button2 = false;
            } else {
                button1 = false;
                button2 = true;
            }

            const track = key % 6;


            return(
                <div className={`shine-me${track} section ${button2 ? 'selected' : ''}`}>
                    <div className="img-wrapper">
                        <img src={HollowImages8[key]}/>
                    </div>
                    <div className="content-wrapper">
                        <h3>{HollowGrim[key]}</h3>
                        <button className={`d-non ${button1 ? 'd-show' : ''}`} onClick={() => this.addGrimHandler(key)}>Complete</button>
                        <button className={`d-non ${button2 ? 'd-show' : ''}`} onClick={() => this.removeGrimHandler(key)}>Remove</button>
                    </div>
                    
                </div> 
            );
        })

        return spellR;
    }

    renderGod() {

        const spellR = Object.entries(this.props.player.godmaster).map(([key, value]) => {

            var button1 = false;
            var button2 = false;
    
            if(value == 0){
                button1 = true;
                button2 = false;
            } else {
                button1 = false;
                button2 = true;
            }

            const track = key % 6;


            return(
                <div className={`shine-me${track} section ${button2 ? 'selected' : ''}`}>
                    <div className="img-wrapper">
                        <img src={HollowImages9[key]}/>
                    </div>
                    <div className="content-wrapper">
                        <h3>{HollowGod[key]}</h3>
                        <button className={`d-non ${button1 ? 'd-show' : ''}`} onClick={() => this.addGodMasterHandler(key)}>Complete</button>
                        <button className={`d-non ${button2 ? 'd-show' : ''}`} onClick={() => this.removeGodMasterHandler(key)}>Remove</button>
                    </div>
                    
                </div> 
            );
        })

        return spellR;
    }

    renderMainImage(){
        var track = mapper;

        if(this.props.player.completionStat == 112){
            track = complete;
        }

        return(
            <img src={track}/>
        );
    }



    addMaskHandler(){
        addMask()
        .then(response => {
            this.props.onGetHolder();
        });
    }

    removeMaskHandler() {
        removeMask()
        .then(response => {
            this.props.onGetHolder();
        });
    }

    addLifeBloodHandler(){
        addLifeBlood()
        .then(response => {
            this.props.onGetHolder();
        });
    }

    removeLifeBloodHandler() {
        removeLifeBlood()
        .then(response => {
            this.props.onGetHolder();
        });
    }

    addVesselHandler() {
        addVessel()
        .then(response => {
            this.props.onGetHolder();
        });
    }

    removeVesselHandler() {
        removeVessel()
        .then(response => {
            this.props.onGetHolder();
        });
    }

    addNailHandler() {
        addNail()
        .then(response => {
            this.props.onGetHolder();
        });
    }

    removeNailHandler() {
        removeNail()
        .then(response => {
            this.props.onGetHolder();
        });
    }

    addEssenseHandler() {
        addEssense()
        .then(response => {
            this.props.onGetHolder();
        });
    }

    removeEssenseHandler() {
        removeEssense()
        .then(response => {
            this.props.onGetHolder();
        });
    }

    addColosseumHandler() {
        addColosseum()
        .then(response => {
            this.props.onGetHolder();
        });
    }

    removeColosseumHandler(){
        removeColosseum()
        .then(response => {
            this.props.onGetHolder();
        });
    }

    addBossHandler(value){
        addBoss(value)
        .then(response => {
            this.props.onGetHolder();
        });
    }

    removeBossHandler(value){
        removeBoss(value)
        .then(response => {
            this.props.onGetHolder();
        });
    }

    addCharm(value){
        addCharm(value)
        .then(response => {
            this.props.onGetHolder();
        });
    }

    removeCharm(value){
        removeCharm(value)
        .then(response => {
            this.props.onGetHolder();
        }); 
    }

    addEquipmentHandler(value){
        addEquipment(value)
        .then(response => {
            this.props.onGetHolder();
        });
    }

    removeEquipmentHandler(value){
        removeEquipment(value)
        .then(response => {
            this.props.onGetHolder();
        });
    }

    addSpellHandler(value){
        addSpell(value)
        .then(response => {
            this.props.onGetHolder();
        });
    }

    removeSpellHandler(value){
        removeSpell(value)
        .then(response => {
            this.props.onGetHolder();
        });
    }

    addNailArtHandler(value){
        addNailArt(value)
        .then(response => {
            this.props.onGetHolder();
        });
    }

    removeNailArtHandler(value){
        removeNailArt(value)
        .then(response => {
            this.props.onGetHolder();
        });
    }

    addDreamerWarriorHandler(value){
        addDreamWarrior(value)
        .then(response => {
            this.props.onGetHolder();
        });
    }

    removeDreamerWarriorHandler(value){
        removeDreamWarrior(value)
        .then(response => {
            this.props.onGetHolder();
        });
    }

    addDreamerHandler(value){
        addDreamer(value)
        .then(response => {
            this.props.onGetHolder();
        });
    }

    removeDreamerHandler(value){
        removeDreamer(value)
        .then(response => {
            this.props.onGetHolder();
        });
    }

    addGrimHandler(value){
        addGrim(value)
        .then(response => {
            this.props.onGetHolder();
        });
    }

    removeGrimHandler(value){
        removeGrim(value)
        .then(response => {
            this.props.onGetHolder();
        });
    }

    addGodMasterHandler(value){
        addGodMaster(value)
        .then(response => {
            this.props.onGetHolder();
        });
    }

    removeGodMasterHandler(value){
        removeGodMaster(value)
        .then(response => {
            this.props.onGetHolder();
        });
    }

    renderProgressBubble(){
        return(
            <div className="bubble">
                <p>{this.props.player.completionStat}</p>
            </div>
        );
    }



    render() {
        if(this.props.authen == false){
            return <Redirect to={"/home"} />
        }

        return(
            <div className="container-fluid">
                <div className="dashboard-banner">
                    <h2>Progress</h2>
                    <h2>{this.props.player.completionStat}</h2>
                    {this.renderMainImage()}
                </div>
                <div className="container-fluid dashboard-content">
                    {this.renderHeaderPrim(4, "Mask Shards", this.props.player.maskShards)}
                    {this.renderMaskSection()}
                    {this.renderHeaderPrim(3, "Vessels", this.props.player.vesselFragments)}
                    {this.renderVesselSection()}
                    {this.renderHeaderPrim(4, "Nail Upgrades", this.props.player.nail)}
                    {this.renderNailSection()}
                    {this.renderHeaderPrim(3, "Essense Benchmarks", this.props.player.essense)}
                    {this.renderEssenseSection()}
                    {this.renderHeaderPrim(3, "Colosseum", this.props.player.colosseum)}
                    {this.renderColosseumSection()}
                    <div className="section-wrapper">
                        {this.renderHeaderArray(14, "Bosses", this.props.player.bosses)}
                        {this.renderBosses()}
                        {this.renderHeaderArray(3, "Dreamers", this.props.player.dreamers)}
                        {this.renderDreamers()}
                        {this.renderHeaderArray(7, "Dream Warriors", this.props.player.warriorDreams)}
                        {this.renderDreamWarriors()}
                        {this.renderHeaderArray(36, "Charms", this.props.player.charms)}
                        {this.renderCharms()}
                        {this.renderHeaderArray(6, "Spells", this.props.player.spells)}
                        {this.renderSpells()}
                        {this.renderHeaderArray(7, "Equipment", this.props.player.equipment)}
                        {this.renderEquipment()} 
                        {this.renderHeaderArray(3, "Nail Arts", this.props.player.nailArts)}
                        {this.renderNailArts()}
                        <h2>Complete below for 112% run</h2>
                        {this.renderHeaderPrim(1, "LifeBlood", this.props.player.lifeBlood)}
                        {this.renderLifeBloodSection()}
                        {this.renderHeaderArray(6, "Grim Troupe", this.props.player.grim)}
                        {this.renderGrim()}
                        {this.renderHeaderArray(5, "God Master", this.props.player.godmaster)}
                        {this.renderGod()}
                    </div>
                </div>
                {this.renderProgressBubble()}
            </div>
        );
    }
}

export default Dashboard;
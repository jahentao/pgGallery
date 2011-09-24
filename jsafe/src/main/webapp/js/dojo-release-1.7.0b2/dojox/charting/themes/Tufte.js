/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define("dojox/charting/themes/Tufte",["../Theme","dojo/_base/Color","./common"],function(_1,_2){
dojox.charting.themes.Tufte=new dojox.charting.Theme({chart:{stroke:null,fill:"inherit"},plotarea:{stroke:null,fill:"transparent"},axis:{stroke:{width:1,color:"#ccc"},majorTick:{color:"black",width:1,length:5},minorTick:{color:"#666",width:1,length:2},font:"normal normal normal 8pt Tahoma",fontColor:"#999"},series:{outline:null,stroke:{width:1,color:"black"},fill:new _2([59,68,75,0.85]),font:"normal normal normal 7pt Tahoma",fontColor:"#717171"},marker:{stroke:{width:1,color:"black"},fill:"#333",font:"normal normal normal 7pt Tahoma",fontColor:"black"},colors:[_2.fromHex("#8a8c8f"),_2.fromHex("#4b4b4b"),_2.fromHex("#3b444b"),_2.fromHex("#2e2d30"),_2.fromHex("#000000")]});
return dojox.charting.themes.Tufte;
});
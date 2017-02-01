var webphone_api=function(){function a(a){a&&"function"==typeof a&&(webphone_api.loadedcb=a)}function b(a){a&&"function"==typeof a&&(webphone_api.startcb=a)}function c(a){a&&"function"==typeof a&&(webphone_api.registeredcb=a)}function d(a){a&&"function"==typeof a&&(webphone_api.unregisteredcb=a)}function e(a){a&&"function"==typeof a&&(webphone_api.callstatechangecb=a)}function f(a){a&&"function"==typeof a&&(webphone_api.chatcb=a)}function g(a){a&&"function"==typeof a&&(webphone_api.cdrcb=a)}function h(){"undefined"==typeof plhandler||null===plhandler?api_helper.AddToQueue("Start",[ea]):plhandler.Start(ea)}function i(){"undefined"==typeof plhandler||null===plhandler?api_helper.AddToQueue("Stop",[ea]):plhandler.Stop(ea)}function j(){"undefined"==typeof plhandler||null===plhandler?api_helper.AddToQueue("Register",[ea]):plhandler.Register(ea)}function k(a){"undefined"==typeof plhandler||null===plhandler?api_helper.AddToQueue("Call",[a]):plhandler.Call(a)}function l(a){"undefined"==typeof plhandler||null===plhandler?api_helper.AddToQueue("VideoCall",[a]):plhandler.VideoCall(a)}function m(){"undefined"==typeof plhandler||null===plhandler?api_helper.AddToQueue("Hangup",[]):plhandler.Hangup()}function n(){return"undefined"!=typeof plhandler&&null!==plhandler?plhandler.Accept():void api_helper.AddToQueue("Accept",[])}function o(){"undefined"==typeof plhandler||null===plhandler?api_helper.AddToQueue("Reject",[]):plhandler.Reject()}function p(){"undefined"==typeof plhandler||null===plhandler?api_helper.AddToQueue("Ignore",[]):plhandler.Ignore()}function q(){return"undefined"==typeof plhandler||null===plhandler?(webphone_api.Log("ERROR, webphone_api: getavailablecallfunc plhandler is not defined"),"ERROR, webphone is not yet started"):plhandler.GetAvailableCallfunc()}function r(){return"undefined"!=typeof plhandler&&null!==plhandler?plhandler.GetLastCallDetails():""}function s(a){"undefined"==typeof plhandler||null===plhandler?api_helper.AddToQueue("Forward",[a]):plhandler.Forward(a)}function t(a){"undefined"==typeof plhandler||null===plhandler?api_helper.AddToQueue("Conference",[a]):plhandler.Conference(a)}function u(a){"undefined"==typeof plhandler||null===plhandler?api_helper.AddToQueue("Transfer",[a]):plhandler.Transfer(a)}function v(a){"undefined"==typeof plhandler||null===plhandler?api_helper.AddToQueue("Dtmf",[a]):plhandler.Dtmf(a)}function w(a,b){return"undefined"!=typeof plhandler&&null!==plhandler?plhandler.MuteEx(a,b):void api_helper.AddToQueue("MuteEx",[a,b])}function x(){return"undefined"!=typeof plhandler&&null!==plhandler?plhandler.IsMuted():!1}function y(a){return"undefined"!=typeof plhandler&&null!==plhandler?plhandler.Hold(a):void api_helper.AddToQueue("Hold",[a])}function z(){return"undefined"!=typeof plhandler&&null!==plhandler?plhandler.IsOnHold():!1}function A(a,b){"undefined"==typeof plhandler||null===plhandler?api_helper.AddToQueue("SendChat",[a,b]):plhandler.SendChat(a,b)}function B(a,b,c){"undefined"==typeof plhandler||null===plhandler?api_helper.AddToQueue("SendSms",[a,b,c]):plhandler.SendSms(a,b,c)}function C(a,b){"undefined"!=typeof plhandler&&null!==plhandler&&plhandler.Voicerecord(a,b)}function D(){"undefined"!=typeof plhandler&&null!==plhandler&&plhandler.AudioDevice()}function E(a,b){"undefined"!=typeof plhandler&&null!==plhandler&&plhandler.GetAudioDeviceList(a,b)}function F(a,b){"undefined"!=typeof plhandler&&null!==plhandler&&plhandler.GetAudioDevice(a,b)}function G(a,b,c){"undefined"!=typeof plhandler&&null!==plhandler&&plhandler.SetAudioDevice(a,b,c)}function H(a,b){"undefined"!=typeof plhandler&&null!==plhandler&&plhandler.SetVolume(a,b)}function I(a,b){"undefined"!=typeof plhandler&&null!==plhandler&&plhandler.GetVolume(a,b)}function J(a,b){return"undefined"==typeof a||null===a||"undefined"==typeof b?!1:void("undefined"==typeof plhandler||null===plhandler?api_helper.AddToQueue("SetParameter",[a,b]):plhandler.SetParameter(a,b))}function K(a){if("undefined"==typeof a||null===a)return"";var b=ea[a];if("undefined"!=typeof plhandler&&null!==plhandler)return plhandler.GetParameter(a);var c="ERROR, Webphone settings not loaded just yet";return console&&(console.error?console.error(c):console.log&&console.log(c)),"undefined"==typeof b||null===b?"":b}function L(a){"undefined"!=typeof plhandler&&null!==plhandler&&plhandler.SetLine(a)}function M(){return"undefined"!=typeof plhandler&&null!==plhandler?plhandler.GetLine():-1}function N(){return"undefined"!=typeof plhandler&&null!==plhandler?plhandler.IsRegistered():!1}function O(){return"undefined"!=typeof plhandler&&null!==plhandler?plhandler.IsInCall():!1}function P(){"undefined"!=typeof plhandler&&null!==plhandler&&plhandler.Unregister()}function Q(a){"undefined"!=typeof plhandler&&null!==plhandler&&plhandler.CheckPresence(a)}function R(a){"undefined"!=typeof plhandler&&null!==plhandler&&plhandler.SetPresenceStatus(a)}function S(){return"undefined"!=typeof plhandler&&null!==plhandler?plhandler.IsEncrypted():-1}function T(a){"undefined"!=typeof plhandler&&null!==plhandler?plhandler.SetSipHeader(a):webphone_api.Log("ERROR, webphone_api: setsipheader plhandler is not defined")}function U(a,b){b&&"function"==typeof b&&("undefined"!=typeof plhandler&&null!==plhandler?plhandler.GetSipHeader(a,b):webphone_api.Log("ERROR, webphone_api: getsipheader plhandler is not defined"))}function V(a){a&&"function"==typeof a&&(webphone_api.displaycb=a)}function W(a){return a&&"function"==typeof a?"undefined"!=typeof plhandler&&null!==plhandler?plhandler.GetWorkDir(a):"ERROR, getworkdir plhandler is not defined":void 0}function X(a){"undefined"!=typeof plhandler&&null!==plhandler?plhandler.delsettings(a):webphone_api.Log("ERROR, webphone_api: delsettings plhandler is not defined")}function Y(){return"undefined"!=typeof plhandler&&null!==plhandler?plhandler.Getenginename():void webphone_api.Log("ERROR, webphone_api: getenginename plhandler is not defined")}function Z(a){a&&"function"==typeof a&&(webphone_api.logcb=a)}function $(){return"undefined"!=typeof plhandler&&null!==plhandler?plhandler.getlogs():void webphone_api.Log("ERROR, webphone_api: getlogs plhandler is not defined")}function _(a,b){"undefined"!=typeof plhandler&&null!==plhandler?plhandler.Jvoip(a,b):webphone_api.Log("ERROR, webphone_api: jvoip plhandler is not defined")}function aa(a){a&&"function"==typeof a&&(webphone_api.evcb=a)}function ba(){return"undefined"==typeof plhandler||null===plhandler?"STATUS,-1,Initializing":plhandler.GetStatus()}function ca(a,b){"undefined"!=typeof plhandler&&null!==plhandler?plhandler.GetRegFailReason(a,b):webphone_api.Log("ERROR, webphone_api: getregfailreason plhandler is not defined")}function da(a,b,c,d){LogEx=function(a,b){try{if("undefined"==typeof a||null===a)return;"undefined"!=typeof b&&null!==b&&(a="ERROR,"+a+" "+b),Log(a)}catch(c){}},Log=function(a){try{if("undefined"==typeof a||null===a||a.length<1)return;console&&console.log&&(console.error&&a.toLowerCase().indexOf("error")>-1?console.error(a):console.log(a))}catch(b){}};try{if("undefined"==typeof a||null===a||a.length<1)return void Log("ERROR, loadscript invalid url: "+a);("undefined"==typeof b||null===b)&&(b=!1),1==b&&alert("async ic true");var e=null;a.toLowerCase().indexOf(".css")>a.length-5?(e=document.createElement("link"),e.async=b,e.href=a,e.setAttribute("rel","stylesheet")):(e=document.createElement("script"),e.async=b,e.src=a,"undefined"!=typeof c&&null!==c&&c.length>0&&"undefined"!=typeof d&&null!==d&&d.length>0&&e.setAttribute(c,d));var f=document.getElementsByTagName("head")[0];if("undefined"==typeof f||null===f||!f.parentNode)return void Log("ERROR, loadscript cannot get script element: "+a);f.parentNode.appendChild(e)}catch(g){LogEx("webphone_api LoadScript",g)}}var ea={serveraddress:"msips1.publicvm.com",username:"webuser1",password:"encrypted__3__L01SVAkRUCp2RCFFCVYHUQJxBhU=",enginepriority_flash:2,enginepriority_java:1,enginepriority_webrtc:4,enginepriority_ns:3,register:2,autoaction:0,callto:"NULL",video:0,loglevel:0,offersoftphone:!1},fa={getEvents:aa,getStatus:ba,onRegistered:c,onUnRegistered:d,onLoaded:a,onStart:b,onCallStateChange:e,onChat:f,onCdr:g,start:h,stop:i,register:j,call:k,videocall:l,hangup:m,accept:n,reject:o,ignore:p,getavailablecallfunc:q,getlastcalldetails:r,forward:s,conference:t,transfer:u,dtmf:v,mute:w,ismuted:x,hold:y,isonhold:z,sendchat:A,sendsms:B,voicerecord:C,audiodevice:D,getaudiodevicelist:E,getaudiodevice:F,setaudiodevice:G,setvolume:H,getvolume:I,setparameter:J,getparameter:K,isregistered:N,isincall:O,unregister:P,setline:L,getline:M,checkpresence:Q,setpresencestatus:R,isencrypted:S,setsipheader:T,getsipheader:U,ondisplay:V,getworkdir:W,delsettings:X,getenginename:Y,getlogs:$,onLog:Z,jvoip:_,getregfailreason:ca,loadscript:da,parameters:ea,evcb:null,loadedcb:null,displaycb:null,startcb:null,registeredcb:null,unregisteredcb:null,callstatechangecb:null,chatcb:null,cdrcb:null,logcb:null};return fa}();webphone_api.bd_logged=!1,webphone_api.getbasedir2=function(a){try{if(a!==!0){var b=webphone_api.parameters.webphonebasedir;("undefined"==typeof b||null===b||"."===b||b.length<2)&&(b=""),b=b.toString();try{b=b.replace(/^\s+|\s+$/g,"")}catch(c){}if(0===b.indexOf("/")&&(b=b.substring(1)),b.length>1&&b.lastIndexOf("/")<b.length-1&&(b+="/"),b&&b.length>0){if(webphone_api.bd_logged!==!0)try{console.log("base diectory - webphonebasedir(helper): "+b)}catch(c){}return webphone_api.bd_logged=!0,b}}var d=document.getElementsByTagName("script");if(d)for(var e=0;e<d.length;e++)if(b=d[e].src,b&&b.indexOf("webphone_api.js")>-1){if(b=b.substring(0,b.indexOf("webphone_api.js")),webphone_api.bd_logged!==!0)try{console.log("base diectory - webphonebasedir(guessed): "+b)}catch(c){}return webphone_api.bd_logged=!0,b}}catch(c){try{console.log("ERROR, webphone_api getbasedir2")}catch(f){}}return""},document.write('<script type="text/javascript" src="'+webphone_api.getbasedir2()+'js/lib/api_helper.js"></script>');
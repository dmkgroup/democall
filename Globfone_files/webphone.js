function redirect(){window.setTimeout(function(){window.parent.location.href="/thank-you"},3e3)}function registerNewCall(a,b){$.ajax({dataType:"json",data:{action:"registerNewCall",number:a,engine:b},async:!1,url:"/wp-admin/admin-ajax.php",type:"POST",success:function(b){"undefined"!=typeof b.callId?webphone_api.call(a):-4===b.errorId?($(".call-info").text("Daily call limit exceeded").addClass("red").show(),redirect()):($(".call-info").text("This number is not in service").addClass("red").show(),redirect())}})}function hangup(){clearInterval(timerInterval),webphone_api.hangup()}function urlParam(a){var b=new RegExp("[?&]"+a+"=([^&#]*)").exec(window.location.href);return null==b?null:b[1]||0}function startTimer(a,b){var c,d,e=a;timerInterval=setInterval(function(){c=parseInt(e/60,10),d=parseInt(e%60,10),d=10>d?"0"+d:d,b.text(c+":"+d),--e<0&&clearInterval(timerInterval)},1e3)}function processNotifications(a){try{if(isNull(a)||a.length<1)return;a=Trim(a);var b="",c="",d="",e=a.indexOf(",");e>0&&(b=Trim(a.substring(0,e)),a=Trim(a.substring(e+1))),e=a.indexOf(","),e>0?(c=Trim(a.substring(0,e)),d=Trim(a.substring(e+1))):d=a;var f="";if(e=d.indexOf(","),e>0&&(f=Trim(d.substring(e+1)),d=Trim(d.substring(0,e))),e=d.indexOf("["),e>0&&(d=Trim(d.substring(0,e))),e=f.indexOf("["),e>0&&(f=Trim(f.substring(0,e))),"STATUS"===b){if(["Call Finished"].indexOf(d)>=0){callFinished=!0,redirect();var g="webrtc"===engine?"X-Reason":"Warning";webphone_api.getsipheader(g,function(a){var b="";a.indexOf("max call per ip exceed")>=0?b="DAILY LIMIT EXCEEDED":a.indexOf("not enough credit")>=0?b="DAILY LIMIT EXCEEDED":a.indexOf("disc code6 500 received")>=0&&(b="UNKNOWN CONNECTION ERROR"),$(".call-info").text(b).addClass("red").show()})}}else if("RATING"===b&&d.indexOf("Max duration")>=0){var h=/Max duration: ([0-9]+) min/,i=h.exec(d);null!=i&&($(".call-info").show(),$(".call-max-duration").show(),startTimer(60*i[1],$(".call-max-duration")))}displayStatus(b+","+d)}catch(j){PutToDebugLogException(2,"ProcessNotifications",j)}}function displayStatus(a){try{var b=a;isNull(status_e)&&(status_e=document.getElementById("call-status")),(isNull(b)||b.length<1)&&(b="&nbsp;"),b.indexOf("ERROR")>=0?(b=b.replace("ERROR",""),b=Trim(b),0===b.indexOf(",")&&(b=b.replace(",",""),b=Trim(b))):b.indexOf("WARNING")>=0?(b=b.replace("WARNING",""),b=Trim(b),0===b.indexOf(",")&&(b=b.replace(",",""),b=Trim(b))):(b.indexOf("STATUS")>=0||b.indexOf("EVENT")>=0)&&(b=b.replace("STATUS",""),b=b.replace("EVENT",""),b=Trim(b),0===b.indexOf(",")&&(b=b.replace(",",""),b=Trim(b))),a.match("^STATUS")&&!callFinished&&(status_e.innerHTML=b),PutToDebugLog(2,"NOT: "+a)}catch(c){PutToDebugLogException(2,"DisplayStatus",c)}}function isNull(a){try{return"undefined"==typeof a||null===a?!0:!1}catch(b){PutToDebugLogException(2,"common: isNull",b)}return!0}function Trim(a){try{return isNull(a)||a.lenght<1?"":(a=a.toString(),a.replace(/^\s+|\s+$/g,""))}catch(b){PutToDebugLogException(2,"common: Trim",b)}return a}function PutToDebugLogException(a,b,c){PutToDebugLog(a,"ERROR,"+b+" "+c)}function PutToDebugLog(a,b){if(b.indexOf("ERROR")>-1)try{console.error(b)}catch(c){}else try{console.log(b)}catch(d){}}var registered=!1,timerInterval=null,callFinished=!1,status_e=null,engine=null;webphone_api.onRegistered(function(){if(!registered){switch(registered=!0,PutToDebugLog(2,"NOT: Engine name: "+webphone_api.getenginename()),engine=webphone_api.getenginename()){case"ns":$(".call-engines > .plugin").animate({width:"48px",height:"48px"},"slow").addClass("active");break;case"webrtc":webRtc=!0,$(".call-engines > .webrtc").animate({width:"48px",height:"48px"},"slow").addClass("active");break;case"java":$(".call-engines > .java").animate({width:"48px",height:"48px"},"slow").addClass("active");break;case"flash":$(".call-engines > .flash").animate({width:"48px",height:"48px"},"slow").addClass("active")}window.setTimeout(function(){var a=Trim(decodeURIComponent(urlParam("phoneNumber")));registerNewCall(a,engine)},500)}}),webphone_api.getEvents(function(a){processNotifications(a)});
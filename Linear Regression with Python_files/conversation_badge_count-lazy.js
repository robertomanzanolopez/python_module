define ("theme_snap/conversation_badge_count-lazy",["jquery","core/ajax"],function(a,b){var c=this;c.init=function(b){c.userid=b;c.containerEl=a(".conversation_badge_count");c.queryCount()};c.countUnreadConversations=function(a){var d=b.call([{methodname:"core_message_get_unread_conversations_count",args:a}])[0];d.fail(c.resetCount);return d};c.queryCount=function(){c.countUnreadConversations({useridto:c.userid}).then(c.updateCount)};c.updateCount=function(a){if(0<a){c.containerEl.text(a);c.containerEl.removeClass("hidden")}else{c.containerEl.text("");c.containerEl.addClass("hidden")}};c.resetCount=function(){c.updateCount(0)};return{init:c.init}});
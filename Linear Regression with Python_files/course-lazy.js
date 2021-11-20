define ("theme_snap/course-lazy",["jquery","theme_snap/util","theme_snap/section_asset_management","theme_snap/course_modules"],function(a,b,c,d){return function(e){var f=this;f.courseConfig=e;var g=function(){return 0===a("body").attr("id").indexOf("page-course-view-")},h=function(c){a("#toc-search-results").html("");var d=a("#"+c.replace("#",""));b.scrollToElement(d);var e=a("#searchpin");if(!e.length){e=a("<i id=\"searchpin\"></i>")}a(d).find(".instancename").prepend(e);a(d).attr("tabindex","-1").focus();a("#course-toc").removeClass("state-visible")};this.setTOCVisibleSection=function(){var b=a(".section.main.state-visible, #coursetools.state-visible, #snap-add-new-section.state-visible").attr("id");a("#chapters li").removeClass("snap-visible-section");a("#chapters a[href$=\""+b+"\"]").parent("li").addClass("snap-visible-section");a(document).trigger("snapContentRevealed")};this.showSection=function(){if(!g()){return}var b="";if(a(".section.main.state-visible.set-by-server").length){b="#"+a(".section.main.state-visible.set-by-server").attr("id");a(".section.main.state-visible.set-by-server").removeClass("set-by-server")}else{a(".course-content .section.main, #moodle-blocks,#coursetools, #snap-add-new-section").removeClass("state-visible")}var c=location.hash.split("&"),d=c[0],e=c[1]||null;if(""==d){var f=location.search.substring(1),j=f.split("&");j.forEach(function(a){if(0<=a.indexOf("section=")){a.replace(a);d="#"+a.replace("=","-")}})}if(""!==d&&d!==b){a(b).removeClass("state-visible")}if("#coursetools"==d){a("#moodle-blocks").addClass("state-visible")}if(null!==e){a(d).addClass("state-visible");h(e)}else{a(d).addClass("state-visible").focus();i()}var k=a(".section.main.state-visible,#coursetools.state-visible,#snap-add-new-section.state-visible");if(!k.length){if(a(".section.main.current").length){a(".section.main.current").addClass("state-visible").focus()}else{a("#section-0").addClass("state-visible").focus()}i()}a("li.snap-activity:visible, li.snap-resource:visible").on("click","a.mod-link",function(){sessionStorage.setItem("lastMod",a(this).parents("[id^=module]").attr("id"))});this.setTOCVisibleSection()};var i=function(){var c=sessionStorage.getItem("lastMod");if(null===c){window.scrollTo(0,0)}else{b.scrollToElement(a("#"+c+""));sessionStorage.removeItem("lastMod")}},j=function(){var b=a(location).attr("hash"),d=b.replace("#","").split("&"),e=!1,f=0;a.each(d,function(a,b){if(-1!=b.indexOf("section")){e=b.split("section-")[1]}else if(-1!=b.indexOf("module")){f=b.split("module-")[1]}});if(!e){var g=location.search.substring(1),h=g.split("&");h.forEach(function(a){if(0<=a.indexOf("section=")){a.replace(a);e=a.replace("section=","")}})}if(e&&0<a(".chapters .chapter-title[href=\"#section-"+e+"\"]").length){c.renderAndFocusSection(e,f)}};(function init(){c.init(f);d.init(e);if(f.courseConfig.enablecompletion){require(["theme_snap/course_conditionals-lazy"],function(a){a(e)})}if(g()){f.showSection();a(document).on("snapTOCReplaced",function(){f.setTOCVisibleSection();if(f.courseConfig.partialrender){c.setTocObserver()}});if(f.courseConfig.partialrender){j();a(window).on("hashchange",function(){j()});var b=a(".course-content li[id^=\"section-\"]"),h=location.hash.split("&"),i=h[0];if(1==b.length&&"#coursetools"!=i){b.addClass("state-visible");var k=b.attr("id").split("section-")[1];if("top"==f.courseConfig.toctype&&"topics"==f.courseConfig.format&&0<k){var l=b.find(".sectionname").html(),m=a(".chapter-title"),n=0;a.each(m,function(b,c){if(a(c).attr("section-number")==k){n=b}});b.find(".sectionname").html(l);b.find(".sectionnumber").html(n+".")}}}}})();(function modchooserSectionLinks(){a(".section-modchooser-link").click(function(){var b=a(this).attr("data-sectionid");a(".snap-modchooser-addlink").each(function(){var c=this.href.replace(/(section=)[0-9]+/ig,"$1"+b);a(this).attr("href",c)})})})()}});
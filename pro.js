$(document).ready(function(){var e=function(e){return function(t){$.each(t.result,function(t,n){if(n!==null&&n.length!==0&&n[1]!==null&&n[1].length!==0){$("#cat"+e).append('<a rel="gallery" class="fancybox" href="'+n[1][0][0]+'" alt="'+n[0]+'"><img src="'+n[1][0][1]+'" data-title="'+n[0]+'" alt="'+n[0]+'"></a>')}});$("#sample").empty()}};$("#pikd_submit").click(function(){var t=$("#pikd_input").val().replace(/[^A-z0-9 \t\r,!:';\?.]/g,"\n\n").split(/(?:[.\?!,:;\n\t\r-][ \n\t\r])/);$("#galleria").empty();for(var n=0;n<t.length;n++){if(t[n]!=""){$("#galleria").append('<span id="cat'+n+'"></span>');var r="&s="+$("#special").find(":selected").attr("data");if(window.location.hostname==="localhosts"){$.getJSON("http://localhost:8000/full-api/?query="+encodeURIComponent(t[n].trim())+r+"&callback=?",e(n))}else{$.getJSON("http://"+(r[3]==="x"?"b":"")+"larg"+Math.floor(Math.random()*10)+".herokuapp.com/full-api/?query="+encodeURIComponent(t[n].trim())+r+"&callback=?",e(n))}}}return false});Galleria.loadTheme("/themes/classic/galleria.classic.min.js");Galleria.run("#galleria");Galleria.configure({imageCrop:true,transition:"fade"});$(".fancybox").fancybox({openEffect:"none",closeEffect:"none",helpers:{title:{type:"inside"},thumbs:{width:50,height:50}},beforeLoad:function(){this.title=$(this.element).find("img").attr("alt");speak(this.title,{speed:250})},preload:7,loop:false,type:"image"})})
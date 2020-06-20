$(function(){

	$(document).on("click",'[aria-label="ツイートを共有"]',function(){

		let article = $(this).parents("article");
		let link = article.find('[role="link"][dir="auto"]:last').attr("href");


		if(link){
			link = link.replace(/(status\/\d+).*/,"$1");
			let url = "https://twitter.com" + link;

			setTimeout(function(){
				itemInit(url,article);
			},1);
		}

	})


})

function itemInit(url,article){
	 let item = $('<div url='+url+' role="menuitem" data-focusable="true" tabindex="0" class="css-1dbjc4n r-1loqt21 r-18u37iz r-1ny4l3l r-1j3t67a r-9qu9m4 r-o7ynqc r-6416eg r-13qz1uu"><div class="css-1dbjc4n r-1777fci"><svg version="1.1" id="_x32_" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" style="width: 24px; height: 24px; opacity: 1;" xml:space="preserve"><style type="text/css">.st0{fill:#4B4B4B;}</style><g>	<path class="st0" d="M256,233.109c-28.5,0-51.594,23.297-51.594,52.047c0,28.766,23.094,52.047,51.594,52.047 s51.594-23.281,51.594-52.047C307.594,256.406,284.5,233.109,256,233.109z" style="fill: rgb(75, 75, 75);"></path>	<path class="st0" d="M497.375,140.297c-8.984-9.094-21.641-14.813-35.453-14.813h-54.203c-4.359,0.016-8.438-2.594-10.313-6.813 l-16.234-36.344c-8.031-18.016-25.891-29.734-45.703-29.734H176.531c-19.813,0-37.672,11.719-45.719,29.719v0.016l-16.219,36.344 c-1.875,4.219-5.953,6.828-10.313,6.813H50.078c-13.813,0-26.484,5.719-35.484,14.813C5.594,149.359,0,162.031,0,175.828v233.25 c0,13.797,5.594,26.469,14.594,35.531c9,9.094,21.672,14.813,35.484,14.797h225.781h186.063 c13.813,0.016,26.469-5.703,35.453-14.797c9.031-9.063,14.625-21.734,14.625-35.531v-233.25 C512,162.031,506.406,149.344,497.375,140.297z M473.281,409.078c0,3.313-1.281,6.125-3.375,8.281 c-2.156,2.109-4.844,3.328-7.984,3.344H275.859H50.078c-3.156-0.016-5.859-1.234-7.984-3.344c-2.094-2.156-3.375-4.969-3.375-8.281 v-233.25c0-3.313,1.281-6.125,3.375-8.281c2.125-2.125,4.828-3.328,7.984-3.344h54.203c19.781,0,37.656-11.734,45.688-29.766 l16.188-36.328c1.906-4.203,5.969-6.813,10.375-6.813h158.938c4.406,0,8.469,2.609,10.359,6.797l16.219,36.359 c8.016,18.016,25.891,29.75,45.672,29.75h54.203c3.141,0.016,5.828,1.219,7.984,3.344c2.094,2.156,3.375,4.984,3.375,8.281V409.078 z" style="fill: rgb(75, 75, 75);"></path>	<path class="st0" d="M256,170.938c-31.313-0.016-59.75,12.844-80.203,33.5c-20.484,20.656-33.172,49.266-33.156,80.719 c-0.016,31.453,12.672,60.094,33.156,80.719c20.453,20.672,48.891,33.516,80.203,33.516c31.297,0,59.75-12.844,80.203-33.516 c20.484-20.625,33.172-49.266,33.156-80.719c0.016-31.453-12.672-60.063-33.156-80.719C315.75,183.781,287.297,170.922,256,170.938 z M315.031,344.891c-15.172,15.297-35.953,24.688-59.031,24.688c-23.094,0-43.859-9.391-59.047-24.688 c-15.141-15.297-24.5-36.328-24.516-59.734c0.016-23.391,9.375-44.422,24.516-59.734c15.188-15.297,35.953-24.672,59.047-24.688 c23.078,0.016,43.859,9.391,59.031,24.688c15.156,15.313,24.516,36.344,24.531,59.734 C339.547,308.563,330.188,329.594,315.031,344.891z" style="fill: rgb(75, 75, 75);"></path>	<rect x="392.188" y="197.656" class="st0" width="34.406" height="34.406" style="fill: rgb(75, 75, 75);"></rect></g></svg></div><div class="css-1dbjc4n r-16y2uox r-1wbh5a2"><div dir="auto" class="css-901oao r-hkyrab r-1tl8opc r-a023e6 r-16dba41 r-ad9z0x r-bcqeeo r-qvutc0"><span class="css-901oao css-16my406 r-1tl8opc r-ad9z0x r-bcqeeo r-qvutc0">&nbsp;ツイートを画像保存</span></div></div></div>');

	item
	.on("hide",function(){
		alert("hide")
	})

	.on("mouseenter",function(){
		$(this).css("background","#ffe");
	})

	.on("mouseleave",function(){
		$(this).css("background","");
	})

	.on("click",function(){
		press_gyotaku(url,article)

	});

	if(!$(article).prop("is_gyotaku")){
		$('[role="menuitem"]:last').after(item);
	}

}

$(function(){
	$(document).on("click",".close_gyotaku",function(e){
		e.preventDefault();

		var p = $(this).parents(".gyotaking");
		p.slideUp("slow",function(){
			p.remove();
		});
	});

})

function complete_gyotaku(url,res,gyotaking){

	console.log("complete:" + url);

	let img = dataurl2blob(res.data);
	let m = url.match(/([^\/]+)\/status\/([^\/]+)/);

	let ymd = tweet2ymd(m[2]);

	let filename = "tw-" + m[1] +"-" + ymd + ".png"

	let fin = $("<div style='text-align:center;padding:5px'>" + 
		'<div style="float:right"><a style="color: rgb(27, 149, 224)" class=close_gyotaku href=#>閉じる</a></div>' + 	
		"<div align=left>🐟💦完成！</div>"+
		'<div style="font-size:10pt">' +
		'<span class=m><a class=download download='+filename+' style="color: rgb(27, 149, 224);" href='+img+'>' + 
		'<svg version="1.1" id="_x32_" x="0px" y="0px" viewBox="0 0 512 512" style="width: 16px; height: 16px; opacity: 1;" xml:space="preserve"> <style type="text/css">.st0{fill:#4B4B4B;}</style> <g> <path class="st0" d="M230.546,324.601c6.688,6.703,15.969,10.547,25.454,10.547c9.469,0,18.75-3.844,25.453-10.547L398.422,207.64  c14.062-14.054,14.062-36.851,0-50.906c-14.062-14.062-36.859-14.062-50.906,0v-0.007L292,212.242V38.188c0-19.883-16.125-36-36-36  c-19.89,0-36,16.117-36,36v174.046l-55.5-55.5c-14.062-14.062-36.859-14.062-50.906-0.007c-14.062,14.062-14.062,36.859,0,50.914  L230.546,324.601z" style="fill: rgb(75, 75, 75);"></path> <path class="st0" d="M473.453,383.148H333.406c-13.36,29.469-42.954,50-77.406,50c-34.454,0-64.047-20.531-77.39-50H38.562  C17.266,383.148,0,400.406,0,421.696v49.562c0,21.297,17.266,38.554,38.562,38.554h434.89c21.297,0,38.547-17.258,38.547-38.554  v-49.562C512,400.406,494.75,383.148,473.453,383.148z" style="fill: rgb(75, 75, 75);"></path> </g> </svg>ダウンロード</a></span>' + 

	'  <span class=m><a target=_blank style="color: rgb(27, 149, 224)" href=https://twtr.satoru.net/list/ target=blank>📝履歴</a></span>' + 

	' </div>' + 
		"<a class=im href="+img+"><img style='width: 250px;height: 100px;object-position: 0% 100%;object-fit: cover;' width=50% src=" + img + "></a>" + 
		"</div>");

	let setStorage = $("<iframe width=1 height=1 src='https://twtr.satoru.net/google/set_storage.v1.cgi?url="+url+"'></iframe>");
	setStorage.css({"z-index":-1,"position":"absolute"});

	$(fin).hide();
	$(fin).append(setStorage);
	$(fin).fadeIn("slow");

	setTimeout(function(){
		setStorage.remove();
	},5000);


	$(gyotaking).find(".loading").remove();
	$(gyotaking).append( fin );

	//AutoDownload
	let link = document.createElement('a');
	link.href = img;
	link.download = filename;
	link.click();
	link.remove();

	new LuminousGallery(document.querySelectorAll('.im'));

}

function press_gyotaku(url,article){

	//var time = article.find("time");
	//alert(time.attr("datetime"));


	if(article.find('[aria-label="非公開アカウント"]').length){
		alert("ごめんね、、鍵垢はスクショできんとばい。。");
		return;
	}


	let gyotaking = $("<div class=gyotaking style='border-radius:0 0 10px 10px;background:rgb(230, 236, 240)'>" + 
		"<div class=loading><marquee>🐟💨</marquee>" + 
		"<div align=center>魚拓中..<timer>00:00</timer>" + 
		"</div></div>"
	);

	$(gyotaking).hide();
	article.after(gyotaking);
	$(gyotaking).slideDown("slow");
	

	let n = 0;
	let is_done = 0;
	let is_check = 0;

	let timer = setInterval(function(gyotaking){
		n = n+1;
		$(gyotaking).find("timer").text(toZero(parseInt(n/60)) + ":" + toZero(parseInt(n%60)));

		if(is_check){
			check_url(url,function(res){
				if(res && res.status == "done"){
					if(!is_done){
						clearInterval(timer);
						complete_gyotaku(url,res,gyotaking);
						is_done = 1;
					}
				} else {
					;
				}
			});
		}

	},1000,gyotaking)

	submit_url(url,function(){
		is_check = 1;
	});

	$(article).prop("is_gyotaku",1);
	$('[role="menu"]').remove();
}

function submit_url(url,callback){
	$.ajax({
		url : "https://twtr.satoru.net/google/gyotaku.v1.pl",
		data : {"url":url,"mode":"new"},
		success: function(res){
			callback();
		}
	});
}

function check_url(url,callback){
	$.ajax({
		url : "https://twtr.satoru.net/google/gyotaku.v1.pl",
		data : {"url":url},
		success: function(res){
			callback(res);
		}
	});
}

function dataurl2blob(dataurl){
	let bin = atob(dataurl.split(',')[1]);
	let buffer = new Uint8Array(bin.length);
	for (let i = 0; i < bin.length; i++) {
	  buffer[i] = bin.charCodeAt(i);
	}
	let blob = new Blob([buffer.buffer], {type: 'image/png'});
	return URL.createObjectURL(blob);
}


function toZero(n){
	return n<10? "0"+n : n;
}

function tweet2time(id){
	return parseInt(id/(1<<22)+1288834974657);
}

function time2date(time){
	var dt = new Date(time);
	var date = [dt.getFullYear(),dt.getMonth()+1,dt.getDate()].join("/");
	var hhmm = [dt.getHours(),dt.getMinutes()].join(":");
	return [date, hhmm].join(" ");
}

function tweet2date(id){
	return 	time2date(tweet2time(id));

}

function tweet2ymd(id){
	var time = tweet2time(id);
	var dt = new Date(time);
	var ymd = $.map([ 
				dt.getFullYear()-2000,
				dt.getMonth()+1,
				dt.getDate(),
				"-",
				dt.getHours(),
				dt.getMinutes()
		],function(n){
		return toZero(n);
	}).join("");

	return ymd;	
}

function toZero(n){
	return n<10? "0"+n : n;
}
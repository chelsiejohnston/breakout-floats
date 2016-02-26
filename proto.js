/*!
 * jQuery Nearest plugin v1.4.0
 *
 * Finds elements closest to a single point based on screen location and pixel dimensions
 * http://gilmoreorless.github.io/jquery-nearest/
 * Copyright (c) 2011-2015 Gilmore Davidson under the MIT licence:
 *   http://gilmoreorless.github.io/jquery-nearest/LICENSE.txt
 *
 * Requires jQuery 1.4 or above
 * Also supports Ben Alman's "each2" plugin for faster looping (if available)
 */
 !function(t,e){function r(e,r,o){e||(e="div");var s,a,h,u=t(r.container),c=u.offset()||{left:0,top:0},f=[u.width()||0,u.height()||0],d={x:[c.left,c.left+f[0]],y:[c.top,c.top+f[1]],w:[0,f[0]],h:[0,f[1]]},l=r.directionConstraints;for(s in d)d.hasOwnProperty(s)&&(h=i.exec(r[s]),h&&(a=d[s],r[s]=(a[1]-a[0])*h[1]/100+a[0]));t.isArray(l)||(l="string"==typeof l?[l]:[]),r.sameX===!1&&r.checkHoriz===!1&&(r.sameX=!r.checkHoriz),r.sameY===!1&&r.checkVert===!1&&(r.sameY=!r.checkVert);var y=u.find(e),p=[],x=!!r.furthest,m=!r.sameX,v=!r.sameY,g=!!r.onlyX,k=!!r.onlyY,w=x?0:1/0,X=parseFloat(r.x)||0,Y=parseFloat(r.y)||0,F=parseFloat(X+r.w)||X,S=parseFloat(Y+r.h)||Y,H={x1:X,y1:Y,x2:F,y2:S},M=parseFloat(r.tolerance)||0,b=!!t.fn.each2,j=Math.min,z=Math.max;!r.includeSelf&&o&&(y=y.not(o)),0>M&&(M=0),y[b?"each2":"each"](function(e,r){var i,o,s,a,h=b?r:t(this),u=h.offset(),c=u.left,f=u.top,d=h.outerWidth(),y=h.outerHeight(),C=c+d,O=f+y,P=z(c,X),V=j(C,F),W=z(f,Y),q=j(O,S),A={x1:c,y1:f,x2:C,y2:O},Q=V>=P,$=q>=W;(m&&v||!m&&!v&&Q&&$||m&&$||v&&Q||m&&g||v&&k)&&(i=Q?0:P-V,o=$?0:W-q,s=g||k?g?i:o:Q||$?z(i,o):Math.sqrt(i*i+o*o),a=x?s>=w-M:w+M>=s,n(H,A,l)||(a=!1),a&&(w=x?z(w,s):j(w,s),p.push({node:this,dist:s})))}),"nearest"===r.sort?p.sort(function(t,e){return t.dist-e.dist}):"furthest"===r.sort&&p.sort(function(t,e){return e.dist-t.dist});var C,O,P,V,W=p.length,q=[];if(W)for(x?(C=w-M,O=w):(C=w,O=w+M),P=0;W>P;P++)V=p[P],V.dist>=C&&V.dist<=O&&q.push(V.node);return q}function n(t,e,r){var n={left:t.x1>e.x1,right:t.x2<e.x2,top:t.y1>e.y1,bottom:t.y2<e.y2};return r.reduce(function(t,e){return t&&!!n[e]},!0)}var i=/^([\d.]+)%$/;t.each(["nearest","furthest","touching"],function(n,i){var o={x:0,y:0,w:0,h:0,tolerance:1,container:document,furthest:"furthest"==i,includeSelf:!1,sameX:"touching"===i,sameY:"touching"===i,onlyX:!1,onlyY:!1,directionConstraints:[],sort:!1};t[i]=function(n,i,s){if(!n||n.x===e||n.y===e)return t([]);var a=t.extend({},o,n,s||{});return t(r(i,a))},t.fn[i]=function(e,n){if(!this.length)return this.pushStack([]);var i;if(e&&t.isPlainObject(e))return i=t.extend({},o,e,n||{}),this.pushStack(r(this,i));var s=this.offset(),a={x:s.left,y:s.top,w:this.outerWidth(),h:this.outerHeight()};return i=t.extend({},o,a,n||{}),this.pushStack(r(e,i,this))}})}(jQuery);

 if ($('html').hasClass('js')) {

 	breakoutFloats();

 	$(window).on("debouncedresize", function() { breakoutFloats(); });

 }


 function breakoutFloats() {
 	
 	$floatIndex = 0;

 	$standardMargin = $('.left p').css('margin-top'); 	
 	$standardMargin = parseFloat($standardMargin);

 	$('.floated-right').each(function(){

 		$unsetVars = [];

 		var $floatedRight = $(this);
 		$unsetVars.push($floatedRight);

 		var $sibling = $('.float-right-sibling-' + $floatIndex);
 		console.log($sibling.length);
 		$unsetVars.push($sibling);
 		
 		if ($sibling.length == 0) {
 			var $sibling = $(this).next(':not(.floated-right)'); 	
 			console.log($sibling);		
 		}

 		if ($sibling.length) {

 			$sibling.css('background','whitesmoke');
 			$sibling.addClass('float-right-sibling-' + $floatIndex);
 			$sibling.addClass('has-space');

 			var $siblingHeight = $sibling.outerHeight(); 			

 			var $floatedRightHeight = $floatedRight.outerHeight(); 			

 			var $floatedRightWidth = $floatedRight.outerWidth();
 			$floatedRightWidth = $floatedRightWidth * .5; 			

 			$siblingFromTop = $sibling.offset().top; 			

 			$('<style type="text/css">.float-right-sibling-' + $floatIndex + '.has-space:before { height: ' + $floatedRightHeight + '; width: ' + $floatedRightWidth + ' }</style>') // make this the 'this'
 			.appendTo('head');

 			$fromTop = $floatedRight.offset().top; 			

 			$nearestHeight = $siblingFromTop; 			

 			$nearestElement = $.nearest({x: 800, y: $nearestHeight}, '.right div:not(.floated-right)')[0]; 		
 			$unsetVars.push($nearestElement);	 			

 			$floatedRight.insertBefore($nearestElement);
 			$floatedRight.addClass('fake');

 			$fakePrevSibling = $(this).prev(); 	
 			$unsetVars.push($fakePrevSibling);		 			

 			$fakePrevSiblingHeight = $fakePrevSibling.outerHeight();

 			if (typeof $siblingFromTop == 'undefined') {
 				fakeMarginTop = 0; // 1.4em 		
 			}

 			if ($fakePrevSiblingHeight == null) { 				
 				var fakeMarginTop = $siblingFromTop; // 1.4em
 			}

 			if (typeof $siblingFromTop != 'undefined' && $fakePrevSiblingHeight) { 				

 				$fakePrevSiblingTop = $fakePrevSibling.offset().top; 				

 				var fakeMarginTop = $siblingFromTop - ($fakePrevSiblingHeight + $fakePrevSiblingTop); 				
 			}

 			$unsetVars.push(fakeMarginTop);

 			$floatedRight.css('margin-top', fakeMarginTop);

 		} 

 		else {
 			$(this).css('float','none');
 		}

 		for (var i = $unsetVars.length - 1; i >= 0; i--) {
 			$unsetVars[i] = 'undefined';
 		};

 		$floatIndex = $floatIndex + 1;

 	});
};
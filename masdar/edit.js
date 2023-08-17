/* TODO
 * build undo redo system, find one if there's a tiny one out there already
 * 
 */
var editorlist, editor;
;(function(){
	var mfateeh;
	
	editor = {
		save: function () {
			var c = editorlist.keys.items.children, save_array = [];
			for (var i in c) {
				if (c.hasOwnProperty(i)) {
					var e = c[i];
					var k = templates.keys(e);
					var o = editorlist.adapter.get( getdata(e, 'XPO.uid') );
					if (o.type == 0) {
						save_array.push( [0, o.place, k.XPO.text.value] );
					}
					if (o.type == 1) {
						save_array.push( [1, k.XPO.text.textContent] );
					}
				}
			}
			$.log( save_array );
			preferences.set('test', stringify( save_array ) );
		},
		load: function () {
			var save_array = preferences.get('test', 1 );
			if (isarr(save_array)) {
				save_array.forEach(function (o, i) {
					if (isarr(o)) {
						var options = {}, type = o[0];
						if (type == 0) {
							options.place = o[1];
							options.text = o[2];
						}
						if (type == 1) {
							options.text = o[1];
						}
						editor.add(type, options);
					}
				});
			}
		},
		add: function (type, options) {
			options = options || {};
			var o = {
				type: type || 0,
				before: editorlist.get_item_element( editorlist.selected+1 ),
			};
			
			if (o.type === 0) {
				o.text = 'Scene';
				o.place = options.place || 0;
				o.place_text$t = options.place ? 'XPO.ext' : 'XPO.int';
			}
			if (o.type === 1) {
				o.text = 'Action';
				o._listitem = 'XPO.action';
			}
			
			if (options.text) {
				o.text = options.text;
			} else {
				o.text += ' '+editorlist.length();
			}
			
			editorlist.set(o);

			editorlist.select();
			editorlist.down();
			xlate.update();
		},
	};
	
	Hooks.set('XPO.ready', function (args) {
		mfateeh = view.mfateeh( 'XPO.edit' );
		
		editorlist = list( mfateeh.XPO.list ).idprefix( 'XPO.editorlist' )
					 .listitem('XPO.scene');
		editorlist.on_selection = function () {
			$.taxeer('XPO.ffe', function () {
				focus_first_element( editorlist.get_item_element() );
			}, 10);
		};
		editorlist.uponpaststart = editorlist.uponpastend = function () {
			return 1;
		};
		editorlist.after_set = function (o, c, k) {
			k.XPO.text.onprev = function () {
				editorlist.up();
			};
			k.XPO.text.onnext = function () {
				editorlist.down();
			};
			k.XPO.text.uponenter = function (atstart, atend) {
				if (atend) editor.add();
			};
			if (o.type === 0) {
				o.text = 'Scene';
				
				k.XPO.place_text.onclick = function () {
					if (o.place == 1) o.place = 0, setdata(k.XPO.place_text, 'XPO.i18n', 'XPO.int');
					else o.place = 1, setdata(k.XPO.place_text, 'XPO.i18n', 'XPO.ext');
					
					xlate.update();
				};
			}
		};
		
		$.taxeer('XPO.load', function () {
			editor.load();
		}, 300);
	});
	Hooks.set('XPO.viewready', function (args) { if (args.XPO.name == 'XPO.edit') {
		softkeys.list.basic(editorlist);

		pager.intaxab('XPO.edit', 1);
		webapp.header();

		softkeys.set('delete', function (k, e) {
			if (e.altKey || e.type != 'keydown') editorlist.pop();
			else return 0; // cancel anim [waiting for SK modifier support]
		}, 'd', 'XPO.icondeleteforever', 0);
		softkeys.set(['0', 's'], function (k, e) {
			if (e.altKey || e.type != 'keydown') editor.save();
			else return 0; // cancel anim [waiting for SK modifier support]
		}, '1', 'XPO.iconsave', 0);
		softkeys.set('1', function () {
			editor.add(1);
		}, '1', 'XPO.iconshorttext', 0);
		softkeys.set(K.sl, function () {
			editor.add(0);
		}, 0, 'XPO.iconadd', 0);
	} });

})();
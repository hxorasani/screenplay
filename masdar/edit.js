/* TODO
 * build undo redo system, find one if there's a tiny one out there already
 * 
 */
var editorlist, editor, currently_open_file;
;(function(){
	var mfateeh;
	
	editor = {
		replace_with: function () {
			$.log( 'replace_with' );
			var cur = editorlist.get_item_element();
			if (cur) {
				var uid = getdata( cur , 'XPO.uid' );
				var o = editorlist.adapter.get( uid );
				var setter, replacement;

				if (o.type === 0) { // Scene
					replacement = 'XPO.action';
					o.type = 1;
				} else if (o.type === 1) { // Action
					replacement = 'XPO.dialog';
					o.type = 2;
				} else if (o.type === 2) { // Dialog
					replacement = 'XPO.scene';
					o.type = 0;
				}
				
				setter = templates.replace_with(cur, replacement);

				if (setter) {
					var clone = setter(o);
					setdata( clone, 'XPO.listitem', 1 );
					setdata( clone, 'XPO.uid', o.uid );
					clone.id = o.id_dom;
					$.log( clone );
				}
			}
		},
		prev: function () {
			var sib = prevsibling( editorlist.get_item_element() );
			if (sib) {
				var uid = getdata( sib , 'XPO.uid' )
				var o = editorlist.adapter.get( uid );
				var k = editorlist.get_item_keys( uid );
				if (o.type === 0) { // Scene
					k.XPO.time_text.focus();
				}
				if (o.type === 1) { // Action
					k.XPO.text.focus();
				}
				if (o.type === 2) { // Dialog
					k.XPO.text.focus();
				}
			}
			editorlist.up();
		},
		next: function () {
			var sib = nextsibling( editorlist.get_item_element() );
			if (sib) {
				var uid = getdata( sib , 'XPO.uid' )
				var o = editorlist.adapter.get( uid );
				var k = editorlist.get_item_keys( uid );
				if (o.type === 0) { // Scene
					k.XPO.place_text.focus();
				}
				if (o.type === 1) { // Action
					k.XPO.text.focus();
				}
				if (o.type === 2) { // Dialog
					k.XPO.name.focus();
				}
			}
			editorlist.down();
		},
		save: function () { if (currently_open_file) {
			var c = editorlist.keys.items.children, save_array = [];
			for (var i in c) {
				if (c.hasOwnProperty(i)) {
					var e = c[i];
					var k = templates.keys(e);
					var o = editorlist.adapter.get( getdata(e, 'XPO.uid') );
					if (o.type == 0) {
						save_array.push( [0, o.place, k.XPO.text.value, o.time] );
					}
					if (o.type == 1) { // Action
						save_array.push( [1, k.XPO.text.textContent] );
					}
					if (o.type == 2) { // Dialog
						save_array.push( [2, k.XPO.name.value, k.XPO.parenth.value, k.XPO.text.textContent] );
					}
				}
			}
			main.save_file( currently_open_file, stringify( save_array ) );
		} },
		load: function (fileHandle, save_array) { if (isarr(save_array)) {
			currently_open_file = fileHandle;
			
			if (isstr(currently_open_file)) {
				innertext( mfateeh.currently_open_file, currently_open_file );
			}
			
			editorlist.popall();
			save_array.forEach(function (o, i) {
				if (isarr(o)) {
					var options = {}, type = o[0];
					if (type == 0) { // Scene
						options.place = o[1];
						options.text = o[2];
						if (o[3]) options.time = o[3];
					}
					if (type == 1) { // Action
						options.text = o[1];
					}
					if (type == 2) { // Dialog
						options.name = o[1];
						options.parenth = o[2];
						options.text = o[3];
					}
					editor.add(type, options);
				}
			});
			editor.focus_first_element();
		} },
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
				o.time = options.time || 0;
				o.time_text$t = 'XPO.notime';
				if (options.time == 1) o.time_text$t = 'XPO.day';
				if (options.time == 2) o.time_text$t = 'XPO.night';
				if (options.time == 3) o.time_text$t = 'XPO.morning';
				if (options.time == 4) o.time_text$t = 'XPO.evening';
			}
			if (o.type === 1) {
				o.text = 'Action';
				o._listitem = 'XPO.action';
			}
			if (o.type === 2) {
				o.text = 'Dialog';
				o.name = options.name || '';
				o.parenth = options.parenth || '';
				o._listitem = 'XPO.dialog';
			}
			
			if (options.text) {
				o.text = options.text;
			} else {
				o.text += ' '+editorlist.length();
			}
			
			editorlist.set(o);
			
			if (o.type === 2) {
				var k = editorlist.get_item_keys( o.uid );
				softkeys.autoheight( k.text );
			}

			editorlist.select();
			editorlist.down();
			editor.focus_first_element();
			xlate.update();
		},
		focus_first_element: function () {
			$.taxeer('XPO.ffe', function () {
				focus_first_element( editorlist.get_item_element() );
			}, 100);
		},
	};
	
	Hooks.set('XPO.ready', function (args) {
		mfateeh = view.mfateeh( 'XPO.edit' );
		
		editorlist = list( mfateeh.XPO.list )
						.idprefix( 'XPO.editorlist' )
						.listitem('XPO.scene')
//						.scroll_on_focus(0)
					;
		editorlist.uponpaststart = editorlist.uponpastend = function () {
			return 1;
		};
		editorlist.after_set = function (o, c, k) {
			k.XPO.text.uponenter = function (atstart, atend) {
				if (atend) editor.add();
			};
			if (o.type === 0) { // Scene
				k.XPO.place_text.on_focus_prev = editor.prev;
				k.XPO.place_text.onclick = function () {
					if (o.place == 1) o.place = 0, setdata(k.XPO.place_text, 'XPO.i18n', 'XPO.int');
					else o.place = 1, setdata(k.XPO.place_text, 'XPO.i18n', 'XPO.ext');
					
					xlate.update();
				};

				k.XPO.time_text.on_focus_next = editor.next;
				k.XPO.time_text.onclick = function () {
					if (o.time == 0) o.time = 1, setdata(k.XPO.time_text, 'XPO.i18n', 'XPO.day');
					else if (o.time == 1) o.time = 2, setdata(k.XPO.time_text, 'XPO.i18n', 'XPO.night');
					else if (o.time == 2) o.time = 3, setdata(k.XPO.time_text, 'XPO.i18n', 'XPO.morning');
					else if (o.time == 3) o.time = 4, setdata(k.XPO.time_text, 'XPO.i18n', 'XPO.evening');
					else o.time = 0, setdata(k.XPO.time_text, 'XPO.i18n', 'XPO.notime');
					
					xlate.update();
				};
			}
			if (o.type === 1) { // Action
				k.XPO.text.on_focus_prev = editor.prev;
				k.XPO.text.on_focus_next = editor.next;
			}
			if (o.type === 2) { // Dialog
				k.XPO.name.on_focus_prev = editor.prev;
				k.XPO.text.on_focus_next = editor.next;
			}
		};
		
	});
	Hooks.set('XPO.softkey', function (args) {
		if (args[0] == 'tab' && args[1].type == 'keydown' && view.is_active('XPO.edit')) {
			editor.replace_with();
			return 1;
		}
	});
	Hooks.set('XPO.viewready', function (args) { if (args.XPO.name == 'XPO.edit') {
		softkeys.list.basic(editorlist);
		editorlist.rakkaz(1, 1);
		editor.focus_first_element();
		pager.intaxab('XPO.edit', 1);
		webapp.header();

		softkeys.set('9', function (k, e) {
			editor.replace_with();
		}, '9', 'XPO.iconrefresh', 0);
		softkeys.set('delete', function (k, e) {
			if (e.altKey || e.type != 'keydown') {
				editorlist.pop();
				editor.focus_first_element();
			}
			else return 0; // cancel anim [waiting for SK modifier support]
		}, 'd', 'XPO.icondeleteforever', 0);
		softkeys.set(['0', 's'], function (k, e) {
			if (e.altKey || e.type != 'keydown') editor.save();
			else return 0; // cancel anim [waiting for SK modifier support]
		}, '1', 'XPO.iconsave', 0);
		softkeys.set('2', function () {
			editor.add(2);
		}, '2', 'XPO.iconquote', 0);
		softkeys.set('1', function () {
			editor.add(1);
		}, '1', 'XPO.iconshorttext', 0);
		softkeys.set(K.sl, function () {
			editor.add(0);
		}, 0, 'XPO.iconadd', 0);
	} });

})();
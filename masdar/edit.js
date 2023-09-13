/* TODO
 * build undo redo system, find one if there's a tiny one out there already
 * 
 */
var editorlist, editor, currently_open_file;
;(function(){
	var mfateeh;
	
	editor = {
		get_time: function (time) {
			var time_text = 'XPO.notime';

				 if (time == 1) time_text = 'XPO.day'		;
			else if (time == 2) time_text = 'XPO.night'		;
			else if (time == 3) time_text = 'XPO.morning'	;
			else if (time == 4) time_text = 'XPO.evening'	;

			return time_text;
		},
		get_place: function (place) {
			return place ? 'XPO.ext' : 'XPO.int';
		},
		replace_with: function () {
			var cur = editorlist.get_item_element();
			if (cur) {
				var uid = getdata( cur , 'XPO.uid' );
				var o = editorlist.adapter.get( uid );
				var setter, replacement;
				var keys = editorlist.get_item_keys( uid );

				if (o.type === 0) { // Scene
					replacement = 'XPO.action';
					o.type = 1;

					o.place = keys.XPO.place_text.value;
					o.time = keys.XPO.time_text.value;
					o.text = keys.XPO.text.value;

				} else if (o.type === 1) { // Action
					replacement = 'XPO.charname';
					o.type = 2;

					o.text = keys.XPO.text.textContent;

				} else if (o.type === 2) { // Character Name
					replacement = 'XPO.dialog';
					o.type = 3;

					o.text = keys.XPO.text.value;

				} else if (o.type === 3) { // Dialog
					replacement = 'XPO.parenthetical';
					o.type = 4;

					o.text = keys.XPO.text.textContent;

				} else if (o.type === 4) { // Parenthetical
					replacement = 'XPO.scene';
					o.type = 0;

					o.text = keys.XPO.text.value;

					o.place = o.place || 0;
					o.place_text$t = editor.get_place( o.place );
					
					o.time = o.time || 0;
					o.time_text$t = editor.get_time( o.time );
				}
				
				setter = templates.replace_with(cur, replacement);

				if (setter) {
					var clone = setter(o);
					setdata( clone, 'XPO.listitem', 1 );
					setdata( clone, 'XPO.uid', o.uid );
					clone.id = o.id_dom;
					keys = editorlist.get_item_keys( uid );
					keys.XPO.text.focus();
					editorlist.after_set(o, clone, keys);

			
					if ([1, 2, 3, 4].includes(o.type)) {
						softkeys.autoheight( keys.XPO.text );
					}
					
					select_content( keys.XPO.text );
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
				if ([1, 2, 3, 4].includes(o.type)) { // Action, Character Name, Dialog, Parenthetical
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
				if ([1, 2, 3, 4].includes(o.type)) { // Action, Character Name, Dialog, Parenthetical
					k.XPO.text.focus();
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
					if (o.type === 0) {
						save_array.push( [o.type, o.place, k.XPO.text.value, o.time] );
					}
					if ([1, 2, 3, 4].includes(o.type)) { // Action, Character Name, Dialog, Parenthetical
						var text = k.XPO.text.textContent;
						if (k.XPO.text instanceof HTMLInputElement || k.XPO.text instanceof HTMLTextAreaElement)
							text = k.XPO.text.value;

						save_array.push( [o.type, text] );
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
					if ([1, 2, 3, 4].includes(type)) { // Action, Character Name, Dialog, Parenthetical
						options.text = o[1];
					}
					editor.add(type, options, 1);
				}
			});
			editor.focus_first_element();
		} },
		add: function (type, options, dont_select) {
			options = options || {};
			var o = {
				type: type || 0,
				before: editorlist.get_item_element( editorlist.selected+1 ),
			};
			
			if (o.type === 0) {
				o.text = 'Scene';

				o.place = options.place || 0;
				o.place_text$t = editor.get_place( options.place );

				o.time = options.time || 0;
				o.time_text$t = editor.get_time( options.time );
			}
			if (o.type === 1) {
				o.text = 'Action';
				o._listitem = 'XPO.action';
			}
			if (o.type === 2) {
				o.text = 'Character Name';
				o._listitem = 'XPO.charname';
			}
			if (o.type === 3) {
				o.text = 'Dialog';
				o._listitem = 'XPO.dialog';
			}
			if (o.type === 4) {
				o.text = 'Parenthetical';
				o._listitem = 'XPO.parenthetical';
			}
			
			if (options.text) {
				o.text = options.text;
			} else {
				o.text += ' '+editorlist.length();
			}
			
			editorlist.set(o);
			
			var k = editorlist.get_item_keys( o.uid );

			if (!dont_select) select_content( k.XPO.text );

			editorlist.select();
			editorlist.down();
			editor.focus_first_element();
			xlate.update();

			if ([1, 2, 3, 4].includes(o.type)) {
				$.taxeer(o.uid, function () {
					softkeys.autoheight( k.XPO.text );
				}, 3);
			}
		},
		contextual_add: function () {
			/* LOGIC
			if standing on Scene, Action, adds Action
			Parenthetical, Charname adds Dialog
			*/
			var future_type = 0;
			var cur = editorlist.get_item_element();
			if (cur) {
				var uid = getdata( cur , 'XPO.uid' );
				var o = editorlist.adapter.get( uid );

				if ([0, 1].includes(o.type)) { // Scene, Action
					future_type = 1; // Action
				}
				if ([2, 4].includes(o.type)) { // Charname, Parenthetical
					future_type = 3; // Dialog
				}
				if ([3].includes(o.type)) { // Dialog
					future_type = 1; // Action
				}
				// Transition adds Scene
			}
			editor.add( future_type );
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
						.listitem( 'XPO.scene' )
//						.scroll_on_focus(0)
					;
		editorlist.uponpaststart = editorlist.uponpastend = function () {
			return 1;
		};
		editorlist.after_set = function (o, c, k) {
			k.XPO.text.uponenter = function (atstart, atend) {
				if (atend)
					editor.contextual_add();
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
			if ([1, 2, 3, 4].includes(o.type)) { // Action, Character Name, Dialog, Parenthetical
				k.XPO.text.on_focus_prev = editor.prev;
				k.XPO.text.on_focus_next = editor.next;
			}
		};
		
	});
	Hooks.set('XPO.softkey', function (args) {
		if (view.is_active('XPO.edit') && args[0] == 'tab') {
			preventdefault(args[1]);

			if (args[1].type == 'keydown') {
				editor.replace_with();
			}
		}
	});
	Hooks.set('XPO.viewready', function (args) { if (args.XPO.name == 'XPO.edit') {
		softkeys.list.basic(editorlist);
		editorlist.rakkaz(1, 1);
		editor.focus_first_element();
		pager.intaxab('XPO.edit', 1);
		webapp.header();

		softkeys.add({ n: 'Move Up',
			k: K.up,
			alt: 1,
			hidden: 0,
			i: 'XPO.iconarrowupward',
			c: function () {
				editorlist.moveup();
				editor.focus_first_element();
			},
		});
		softkeys.add({ n: 'Move Down',
			hidden: 0,
			k: K.dn,
			alt: 1,
			i: 'XPO.iconarrowdownward',
			c: function () {
				editorlist.movedown();
				editor.focus_first_element();
			},
		});
		softkeys.add({ n: 'Next Format',
			k: '9',
			alt: 1,
			i: 'XPO.iconrefresh',
			c: function () {
				editor.replace_with();
			},
		});
		softkeys.add({ n: 'Save',
			k: 's',
			i: 'XPO.iconsave',
			ctrl: 1,
			c: function () {
				editor.save();
			},
		});
		softkeys.add({ n: 'Delete',
			k: 'delete',
			i: 'XPO.icondeleteforever',
			alt: 1,
			c: function () {
				editorlist.pop();
				editor.focus_first_element();
			},
		});
		softkeys.add({ n: 'Add',
			k: K.sl,
			i: 'XPO.iconadd',
			c: function () {
				editor.contextual_add();
			},
		});
		// BUG fix this hitting the buttons in scene
		/*softkeys.add({ n: 'Add',
			k: K.en,
			ctrl: 1,
			i: 'XPO.iconadd',
			c: function () {
				editor.contextual_add();
			},
		});*/
		softkeys.add({ n: 'Character',
			k: '2',
			i: 'XPO.iconperson',
			c: function () {
				editor.add(2);
			},
		});
		softkeys.add({ n: 'Dialog',
			k: '3',
			i: 'XPO.iconquote',
			c: function () {
				editor.add(3);
			},
		});
		softkeys.add({ n: 'Action',
			k: '1',
			i: 'XPO.iconshorttext',
			c: function () {
				editor.add(1);
			},
		});
	} });

})();
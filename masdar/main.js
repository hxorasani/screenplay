var screenplaylist, main;
;(function(){
	'use strict';

	var mfateeh;
	
	main = {
		edit: function () {
			Hooks.run('XPO.view', 'XPO.edit');
		},
		is_folder_selected: function () {
			var selected_folder = preferences.get('selected_folder');
			if (isstr(selected_folder)) {
				XPO.screenplayfolder.hidden = 1;
				softkeys.set(K.sl, function () {
					main.edit();
				}, 0, 'XPO.iconedit', 0);
			} else {
				XPO.screenplayfolder.hidden = 0;
				softkeys.set(K.sl, function () {
					main.select_folder();
				}, 0, 'XPO.iconfolderopen', 0);
			}
		},
		select_folder: function () { $.taxeer('XPO.select_folder', function () {
			var promise = window.showDirectoryPicker();
			promise.then(async function (directoryHandle) {
				screenplaylist.popall();
				//$.log( directoryHandle );
				for await (const entry of directoryHandle.entries()) {
					if (entry[1] instanceof FileSystemFileHandle && !entry[0].startsWith('.')) {
						screenplaylist.set({
							title: entry[0],
						});
					}
				}
			}, function () {
				webapp.itlaa3('Cannot open folder picker');
			});
		}, 200); },
	};

	Hooks.set('XPO.ready', function (args) {
		document.title = 'Screenplay';

		if (pager) {
			pager.safaa();
			pager.jama3('XPO.main',			'XPO.iconmenu',		xlate('XPO.all'));
			pager.jama3('XPO.edit',			'XPO.iconedit',		xlate('XPO.edit'));
			pager.jama3('XPO.settings',		'XPO.iconsettings',	xlate('XPO.cfg'));
		}

		webapp.bixraaj(1);
		webapp.statusbarpadding();
		webapp.header();
		
		mfateeh = view.mfateeh('XPO.main');
		
		screenplaylist = list( mfateeh.XPO.list ).idprefix('XPO.screenplaylist');
		
		//$.taxeer('XPO.switch', function () { Hooks.run('XPO.view', 'XPO.edit'); }, 200);
	});

	Hooks.set('XPO.viewready', function (args) { if (args.XPO.name == 'XPO.main') {
		softkeys.list.basic(screenplaylist);
		main.is_folder_selected();
	} });

	Hooks.set('XPO.restore', function (args) {
		webapp.header();
	});

})();

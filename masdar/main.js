/* TODO
 * upon detecting nodejs, it should be able to list files in $HOME/Screenplays
 * in browsers, it should just become open|create|save|drop with File System API
 * 
 */
var screenplaylist, main;
;(function(){
	'use strict';

	var fs = require('fs'); // TODO ifify
	var rootpath = process.env.HOME + '/Screenplays';
	var mfateeh;
	
	main = {
		read_file: async function ( fileHandle ) {
			var content = '', file, json = [];
			if (isstr(fileHandle)) {
				file = Files.get.file(fileHandle);
				content = file.toString();
			} else {
				file = await fileHandle.getFile();
				content = await file.text();
			}

			try { json = JSON.parse(content); } catch (e) {}
			editor.load( fileHandle, json );
			Hooks.run('XPO.view', 'XPO.edit');
		},
		save_file: async function ( fileHandle, content ) {

			if (isstr(fileHandle)) {
				webapp.itlaa3('Saving file... [NODEJS]');

				fs.writeFileSync( fileHandle, content );

				webapp.itlaa3('File saved! [NODEJS]');
			} else {
				webapp.itlaa3('Saving file... [FSAPI]');

				const writable = await fileHandle.createWritable();

				await writable.write(content);
				await writable.close();
				webapp.itlaa3('File saved! [FSAPI]');
			}
		},
		remove: function (o) {
			Files.pop.file( rootpath + '/' + o.title );
			screenplaylist.pop(o.XPO.uid);
		},
		open: async function () {
			const options = {
				excludeAcceptAllOption: true,
				multiple: false,
				types: [
					{
						description: "Screenplay files",
						accept: {
							"text/plain": [".screenplay"],
						},
					},
				]
			};
			let fileHandle;
			[fileHandle] = await window.showOpenFilePicker(options);
			main.read_file(fileHandle);
		},
		create: async function (fsapi) {
			if (fsapi) {
				const options = {
					types: [
						{
							description: "Screenplay files",
							accept: {
								"text/plain": [".screenplay"],
							},
						},
					]
				};

				const handle = await window.showSaveFilePicker(options);
				$.log(handle);
			} else {
				backstack.dialog({
					c: function (name) {
						name = helpers.alias(name || '', 96);
						Files.set.folder(rootpath);
						if (name.length) {
							name += '.screenplay';
							var path = rootpath + '/' + name;
							var oldfile = false;
							try {
								oldfile = Files.get.file(path);
							} catch (e) {}
							
							if (oldfile) {
								webapp.itlaa3( translate('XPO.alreadytaken') );
							} else {
								Files.set.file(path, '');
								var clone = screenplaylist.set({
									title: name,
									before: screenplaylist.get( 0 ),
								});
								screenplaylist.select( 0 );
							}
						}
					},
					m: 'XPO.name',
					q: 1,
				});
			}
		},
		is_folder_selected: function () {
			var selected_folder = preferences.get('selected_folder');
			if (selected_folder) {
				XPO.screenplayfolder.hidden = 1;
			} else {
				XPO.screenplayfolder.hidden = 0;
				softkeys.set('3', function () {
					main.select_folder();
				}, '3', 'XPO.iconfolderopen', 0);
			}
		},
		select_folder: function () { $.taxeer('XPO.select_folder', function () {
			var promise = window.showDirectoryPicker();
			promise.then(async function (directoryHandle) {
				screenplaylist.popall();
				main.is_folder_selected();

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
		screenplaylist.onpress = function (o, k) {
			if (k == '0') {
				if ( confirm( translate( 'XPO.delete' ) ) ) {
					main.remove(o);
				}
			}
			if (k == K.en) {
				var content = fs.readFileSync('/home/nano/Screenplays/'+o.title).toString();
				
				var json = [];
				try { json = JSON.parse(content); } catch (e) {}

				editor.load( '/home/nano/Screenplays/'+o.title, json );
				Hooks.run('XPO.view', 'XPO.edit');
			}
		};
		
		var arr = fs.readdirSync('/home/nano/Screenplays');
		arr.reverse().forEach(function (o, i) {
			if (o.endsWith('.screenplay')) {
				screenplaylist.set({
					title: o,
				});
			}
		});
		$.taxeer('XPO.switch', function () {
			Hooks.run('XPO.view', 'XPO.edit');
			main.read_file( rootpath+'/Dark.screenplay' );
		}, 100);
	});

	Hooks.set('XPO.viewready', function (args) { if (args.XPO.name == 'XPO.main') {
		pager.intaxab('XPO.main', 1);
		screenplaylist.rakkaz(1, 1);
		softkeys.list.basic(screenplaylist);

		softkeys.set('3', function () {
			main.open();
		}, '3', 'XPO.iconfolderopen', 0);
		softkeys.set('0', function () {
			screenplaylist.press('0');
		}, '0', 'XPO.icondeleteforever', 0);
		softkeys.set(K.sl, function () {
			main.create();
		}, 0, 'XPO.iconadd', 0);
		//main.is_folder_selected();
		screenplaylist.select();
	} });

	Hooks.set('XPO.dropped', async function (e) {
		for (const item of e.items) {
			// Careful: `kind` will be 'file' for both file
			// _and_ directory entries.
			if (item.kind == 'file') {
				const entry = await item.getAsFileSystemHandle();
				if (entry.kind == 'directory') {
					//handleDirectoryEntry(entry);
				} else {
					main.read_file(entry);
				}
			}
		}
	});
	Hooks.set('XPO.restore', function (args) {
		webapp.header();
	});

})();

+htm
body
	+include managed.htm.slang
	[view=main]
		p
			.red .upper .bold .tag .pad .centertext
				"Not production ready. use at your own peril."
		div #screenplayfolder .tag .pad .centertext
			p "This app will create a 'Screenplays' folder in your chosen location."
			p "Press the folder icon in the bottom left corner."
		[id=list]

	[view=edit] .monospace .editorlist
		p
			.bold .tag .pad .centertext [id=currently_open_file]
		hr
		[id=list]

	[template=scene] .heading .listitem .flex .scene
		button [id=place_text]
		input [id=text] .title .upper [i18n=scene]
		button [id=time_text]

	[template=action] .action .listitem
		div @contenteditable [id=text] [i18n=action]

	[template=charname] .charname .listitem
		[icon=iconperson] .icon .dim .absolute
		textarea [id=text] [i18n=charname] .centertext

	[template=dialog] .dialog .listitem
		[icon=iconquote] .icon .dim .absolute
		textarea [id=text] [i18n=dialog]

	[template=parenthetical] .parenthetical .listitem .flex
		span '('
		textarea [id=text] [i18n=parenthetical] .centertext
		span ')'

	[template=transition] .transition .right .listitem
		[id=text] .transition


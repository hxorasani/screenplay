+htm
body
	+include managed.htm.slang
	[view=main]
		p
			.red .upper .bold .tag .pad .centertext
				"not production ready. use at your own peril."
		div #screenplayfolder .tag .pad .centertext
			p "This app will create a 'Screenplays' folder in your chosen location."
			p "Press the folder icon in the bottom left corner."
		[id=list]

	[view=edit] .monospace .editorlist
		[id=list]

	[template=scene] .heading .listitem .flex .scene
		button [id=place_text]
		input [id=text] .title
	[template=action] .action .listitem .action
		div @contenteditable [id=text]
	[template=dialog] .dialog .listitem
		[id=name] .name
		[id=parenth] .parenthetical
		[id=dialog] .dialog
	[template=transition] .transition .right .listitem
		[id=text] .transition


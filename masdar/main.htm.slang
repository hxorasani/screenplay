+htm
body
	+include managed.htm.slang
	[view=main]
		.pad .padv .gapb
			div .tag .pad .centertext
				.red .upper .bold
					"Not production ready. use at your own peril."
				div #screenplayfolder
					span .dim "Saving to"
					span .bold [id=path]
		[id=list]

	[view=edit] .monospace .editorlist
		p .gapb .pad .padv
			.bold .tag .pad .centertext [id=currently_open_file]
		[id=list]
		.scroll_break

	[template=screenplay] .screenplay .listitem .flex .vcenterkids .pad
		[id=title] .title .big
		[id=extension] .extension .dim

	[template=scene] .listitem .flex .scene
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


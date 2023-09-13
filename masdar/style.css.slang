+include managed.css.slang

.editorlist .listitem
	border-bottom	0 !important
	border-left		1px dashed @secondaryl

.editorlist [data-rakkaz].list .item[data-selected], .editorlist [data-rakkaz].list .listitem[data-selected]
	background		@primaryl !important
	border-left		1px dashed @accent

.editorlist textarea, .editorlist input
	border-bottom	0 !important
	font-size		inherit
	color			@text

.editorlist .scroll_break
	display			block
	height			8vh

.scene
	margin			6px 0
.scene input.title
	border-bottom	0
	padding			0 12px
.scene button
	padding			16px
	border-color	transparent
	background		transparent

.action, .charname
	margin			6px 5%
	padding			6px

.dialog
	margin			6px 20%
	padding			6px

.dialog .icon, .action .icon, .charname .icon
	left			-40px

.editorlist .charname, .editorlist .parenthetical
	width			60%
	margin			6px auto
	text-align		center


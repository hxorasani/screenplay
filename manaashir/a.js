
function updatetheme(o) {
return 'html, body {'
+'\n	color:'+o.text+';'
+'\n}'
+'\nbody {'
+'\n	background-color:'+o.primary+';'
+'\n}'
+'\nbody[data-transparency] {'
+'\n	background-color:'+o.primaryt+';'
+'\n}'
+'\nhr {'
+'\n	border-top:2px dashed '+o.secondary+';'
+'\n}'
+'\ns {'
+'\n	text-decoration-color:'+o.text+';'
+'\n}'
+'\na {'
+'\n	text-decoration:underline '+o.accent+';'
+'\n}'
+'\na:active {'
+'\n	color:'+o.tertiary+';'
+'\n	text-decoration:underline '+o.accentd+';'
+'\n}'
+'\nbutton {'
+'\n	background:'+o.primary+';'
+'\n	border:2px solid '+o.secondary+';'
+'\n}'
+'\nbutton:active {'
+'\n	border-color:'+o.accentl+';'
+'\n	color:'+o.accent+';'
+'\n	fill:'+o.accent+';'
+'\n	box-shadow:0 0 0 0 '+o.textl+';'
+'\n}'
+'\nbutton:active svg {'
+'\n	fill:'+o.accent+';'
+'\n}'
+'\nbutton:active span {'
+'\n	color:'+o.accent+';'
+'\n}'
+'\nbutton:focus {'
+'\n	border-color:'+o.accentl+';'
+'\n}'
+'\nbutton svg {'
+'\n	fill:'+o.textl+';'
+'\n}'
+'\nbutton[data-selected] {'
+'\n	background:'+o.accent+' !important;'
+'\n}'
+'\nbutton[data-selected] svg {'
+'\n	fill:'+o.primary+' !important;'
+'\n}'
+'\ninput, textarea, select, .input {'
+'\n	border-bottom:2px solid '+o.secondary+';'
+'\n	color:'+o.textd+';'
+'\n}'
+'\ninput:active, input:focus, .input:active, .input:focus {'
+'\n	color:'+o.textl+';'
+'\n	border-color:'+o.accent+';'
+'\n}'
+'\ninput[data-error], .input[data-error] {'
+'\n	border-color:'+o.red+';'
+'\n}'
+'\nselect {'
+'\n	border:1px solid '+o.tertiaryd+';'
+'\n}'
+'\nselect, select:focus {'
+'\n	background-image:linear-gradient(45deg, transparent 40%, '+o.text+' 50%), linear-gradient(135deg, '+o.text+' 50%, transparent 60%);'
+'\n}'
+'\noption {'
+'\n	background:'+o.primary+';'
+'\n	color:'+o.text+';'
+'\n}'
+'\n.tahweem {'
+'\n	background:'+o.accentt+';'
+'\n}'
+'\n.above {'
+'\n	background:'+o.primaryt+';'
+'\n}'
+'\n.tag {'
+'\n	border:1px solid '+o.secondaryd+';'
+'\n}'
+'\n.icon svg {'
+'\n	fill:'+o.textl+';'
+'\n}'
+'\n.red {'
+'\n	color:'+o.redl+';'
+'\n}'
+'\n.redbg {'
+'\n	background:'+o.redd+';'
+'\n}'
+'\nbutton.xaas {'
+'\n	background:'+o.secondaryd+';'
+'\n	border:4px solid '+o.secondaryl+';'
+'\n}'
+'\nbutton.xaas:focus {'
+'\n	background:'+o.accentl+';'
+'\n	border-color:'+o.accent+';'
+'\n	color:'+o.primary+';'
+'\n}'
+'\nbutton.xaas:active {'
+'\n	background:'+o.accent+';'
+'\n	border-color:'+o.accentd+';'
+'\n}'
+'\n#dimmer {'
+'\n	background:'+o.primaryt+';'
+'\n}'
+'\n#dimmertext {'
+'\n	color:'+o.textd+';'
+'\n	border:1px solid '+o.tertiary+';'
+'\n	background:'+o.secondaryd+';'
+'\n}'
+'\n.header {'
+'\n	background:'+o.primary+';'
+'\n	color:'+o.accent+';'
+'\n}'
+'\n#itlaa3 .text {'
+'\n	box-shadow:0 0 20px 0 '+o.textd+';'
+'\n}'
+'\n#taht3nsar .text {'
+'\n	border:1px solid '+o.tertiaryd+';'
+'\n}'
+'\n#itlaa3 .text, #taht3nsar .text {'
+'\n	background:'+o.primary+';'
+'\n}'
+'\n[data-transparency] #itlaa3 .text, [data-transparency] #taht3nsar .text {'
+'\n	background:'+o.primaryt+';'
+'\n	border-color:'+o.secondaryt+';'
+'\n}'
+'\n@media (min-width:640px) {'
+'\n	::-webkit-scrollbar {'
+'\n		background:'+o.primary+';'
+'\n	}'
+'\n	::-webkit-scrollbar-thumb {'
+'\n		background:'+o.textd+';'
+'\n	}'
+'\n	::-webkit-scrollbar-thumb:active {'
+'\n		background:'+o.text+';'
+'\n	}'
+'\n}'
+'\n.list .a3laa {'
+'\n	background:'+o.secondaryt+';'
+'\n	color:'+o.textd+';'
+'\n	text-shadow:0px 1px '+o.secondary+';'
+'\n}'
+'\n[dir=rtl] .list .a3laa {'
+'\n	background:linear-gradient(45deg, transparent 50%, '+o.secondaryt+' 90%);'
+'\n}'
+'\n.list .item, .list .listitem {'
+'\n	border-bottom:1px solid '+o.secondary+';'
+'\n}'
+'\n.list .item[data-baidaa], .list .listitem[data-baidaa] {'
+'\n	box-shadow:0 0 5px 2px '+o.accentl+', 0 0 5px 2px '+o.accentd+' inset;'
+'\n	border-color:'+o.accentd+';'
+'\n}'
+'\n.list .item[data-selected], .list .listitem[data-selected] {'
+'\n	border-color:'+o.textxd+';'
+'\n}'
+'\n[data-rakkaz].list .item[data-selected], [data-rakkaz].list .listitem[data-selected] {'
+'\n	background:linear-gradient(45deg, '+o.primaryl+' -110%, '+o.secondaryd+' 220%);'
+'\n	border-color:'+o.accent+';'
+'\n}'
+'\n[dir=rtl] .list .item[data-selected], [dir=rtl] .list .listitem[data-selected] {'
+'\n	background:linear-gradient(45deg, '+o.tertiary+' -200%, '+o.secondary+' 110%);'
+'\n}'
+'\n[data-transparency] .list .item[data-selected], [data-transparency] .list .listitem[data-selected] {'
+'\n	background:linear-gradient(45deg, '+o.secondary+' 0%, transparent 220%);'
+'\n	border-bottom:1px solid '+o.accent+';'
+'\n}'
+'\n[dir=rtl][data-transparency] .list .item[data-selected], [dir=rtl][data-transparency] .list .listitem[data-selected] {'
+'\n	background:linear-gradient(45deg, transparent -220%, '+o.secondary+' 110%);'
+'\n}'
+'\n.list .body {'
+'\n	color:'+o.textd+';'
+'\n}'
+'\n.list .item .icon {'
+'\n	background:linear-gradient(200deg, '+o.primary+', transparent);'
+'\n}'
+'\n.list .item[data-selected] .icon {'
+'\n	background:linear-gradient(200deg, '+o.accent+', transparent);'
+'\n}'
+'\n.list .days {'
+'\n	color:'+o.textd+';'
+'\n}'
+'\n.list .item[data-selected] .days {'
+'\n	color:'+o.primaryl+';'
+'\n}'
+'\n[data-selected] [data-past] {'
+'\n	color:'+o.redd+' !important;'
+'\n}'
+'\n[data-past] {'
+'\n	color:'+o.redl+' !important;'
+'\n}'
+'\n.list [data-mufarraq] {'
+'\n	background:'+o.primary+';'
+'\n}'
+'\n[data-transparency] .list [data-mufarraq] {'
+'\n	background:'+o.primaryt+';'
+'\n}'
+'\n.list .item .tawassa3, .list .listitem .tawassa3 {'
+'\n	color:'+o.textl+';'
+'\n	background:'+o.tertiaryt+';'
+'\n	box-shadow:0 0 12px 0px '+o.primaryl+';'
+'\n}'
+'\n#pagerui {'
+'\n	border-bottom:1px solid '+o.tertiaryd+';'
+'\n	box-shadow:0 -20px 20px 5px '+o.secondary+';'
+'\n}'
+'\n#pagermowjoodah {'
+'\n	background:'+o.primary+';'
+'\n}'
+'\n[data-transparency] #pagermowjoodah {'
+'\n	background:'+o.primaryt+';'
+'\n}'
+'\n#pagermowjoodah .pagerzir[selected] {'
+'\n	background:'+o.accent+';'
+'\n	color:'+o.primary+';'
+'\n}'
+'\n#pagermowjoodah .pagerzir[selected] svg {'
+'\n	fill:'+o.primary+';'
+'\n}'
+'\n#pagermowjoodah .pagerzir span {'
+'\n	background:'+o.red+';'
+'\n	border:1px solid '+o.redl+';'
+'\n}'
+'\n#softkeysui {'
+'\n	background:linear-gradient(0deg, '+o.primary+' 5%, '+o.primaryt+' 15%, transparent);'
+'\n}'
+'\n#softkeysui[data-hidden] {'
+'\n	background:linear-gradient(0deg, '+o.primaryt+' 0%, transparent);'
+'\n}'
+'\n#softkeysui button {'
+'\n	background:'+o.primary+';'
+'\n	color:'+o.textl+';'
+'\n}'
+'\n#softkeysui button label {'
+'\n	border:1px solid '+o.secondaryd+';'
+'\n}'
+'\n#softkeysui .row1 button {'
+'\n	border-top:1px solid '+o.secondaryd+';'
+'\n}'
+'\n#softkeysui .row1 button:hover {'
+'\n	box-shadow:0 0 25px 2px '+o.secondary+';'
+'\n}'
+'\n#softkeysui .row1 button:focus {'
+'\n	box-shadow:0 0 25px 2px '+o.accentd+';'
+'\n}'
+'\n#softkeysui .row2 button {'
+'\n	border-right:1px solid '+o.secondaryd+';'
+'\n}'
+'\n#softkeysui .row2 button:hover {'
+'\n	box-shadow:-20px 0 15px 0px '+o.secondary+' inset;'
+'\n}'
+'\n#softkeysui .row2 button:focus {'
+'\n	box-shadow:-20px 0 15px 0px '+o.accentd+' inset;'
+'\n}'
+'\n#softkeysui .left {'
+'\n	border-right:1px solid '+o.secondaryd+';'
+'\n}'
+'\n#softkeysui .center {'
+'\n	border-right:1px solid '+o.secondaryd+';'
+'\n	border-left:1px solid '+o.secondaryd+';'
+'\n}'
+'\n#softkeysui .right {'
+'\n	border-left:1px solid '+o.secondaryd+';'
+'\n}'
+'\ninput[data-over], textarea[data-over], input[data-under], textarea[data-under] {'
+'\n	border-color:'+o.red+';'
+'\n}'
+'\n#sheetui {'
+'\n	background:'+o.primary+';'
+'\n}'
+'\n@media (min-width:640px) {'
+'\n	#sheetui {'
+'\n		box-shadow:0 0 20px 5px '+o.tertiaryd+';'
+'\n	}'
+'\n}'
+'\n#dialogui {'
+'\n	background:'+o.primary+';'
+'\n}'
+'\n@media (min-width:640px) {'
+'\n	#dialogui {'
+'\n		box-shadow:0 0 20px 5px '+o.tertiaryd+';'
+'\n	}'
+'\n}'
+'\n@media (min-width:321px) {'
+'\n	#softkeysui button {'
+'\n		background:'+o.primary+';'
+'\n		color:'+o.textl+';'
+'\n	}'
+'\n	#softkeysui .row1 button {'
+'\n		background:'+o.primaryt+';'
+'\n	}'
+'\n	#softkeysui button:active, #softkeysui button[data-lamsah] {'
+'\n		background:'+o.secondary+';'
+'\n		box-shadow:0 0 30px 6px '+o.tertiaryd+';'
+'\n	}'
+'\n	#softkeysui .row2, #skdots {'
+'\n		box-shadow:0 0 10px 0 '+o.tertiary+';'
+'\n	}'
+'\n	#skdots {'
+'\n		background:'+o.primaryt+';'
+'\n		border:1px solid '+o.tertiary+';'
+'\n	}'
+'\n}'
+'\n@media (min-width:321px) {'
+'\n	#softkeysui .row2 [data-hawm="1"] span {'
+'\n		background:'+o.secondary+';'
+'\n		border:1px solid '+o.tertiary+';'
+'\n	}'
+'\n	#softkeysui .row2 {'
+'\n		background:'+o.primary+';'
+'\n		border-top:1px solid '+o.tertiary+';'
+'\n		border-left:1px solid '+o.tertiary+';'
+'\n		border-bottom:1px solid '+o.tertiary+';'
+'\n	}'
+'\n}'
+'\n.scene {'
+'\n	background:'+o.primaryl+';'
+'\n}';
};

/* 01 Jan 2017
* these are on demand
* included in the custom engine build process
* standard ECMA/JS shims
* don't include shims for non-standard JS features
* or vendor specific features here
* index engine/shims.js
* shims/node.js
* shims/dom-removenode.js
* shims/object-create.js
* shims/object-assign.js
* shims/string-trim.js
*/
if (typeof module !== 'object') { module = {}; }
if (typeof module.exports !== 'object') { module.exports = {}; }
if (typeof window !== 'object') { window = global||{}; }
if (typeof document !== 'object') {
	document = {
		body: {},
	};
}
var glatteis = {
};
/*
* a move to .then(cb) would be awesome or nuh?
* @todo indeed.
*/
var glatteisfn = function (name, fn) {
	if (name) {
		var mod = (glatteis._mods[name] || glatteis[name]);
		if (typeof fn === 'function') { // defer execution
			if (mod) { // if the mod is loaded or it's a core module
				fn(mod);
			} else {
				if (glatteis._paths[name]) { // if its path is defined
					glatteis.require(glatteis._paths[name], function(mod) {
						glatteis._mods[name] = mod;
						fn(mod);
					});
				}
			}
			return null; // the function will be called
		} else { // immediate execution
			return (mod || false);
		}
	}
	return false; // if name wasn't provided
};
var $ = $$ = glatteis = Object.assign(glatteisfn, glatteis);
if (typeof module === 'object') {
	module.exports = glatteis;
}
$.log = function () {
	console.log.apply(console, arguments);
};
;(function(){
	var proto = {
		s: function () {
			var a = '', str = '';
			for (var b in arguments) {
				if (b > 0) {
					a = a+', ';
				}
				a = a+'arguments['+b+']';
				str += ' '+ arguments[b];
			}
			eval('console.log('+a+');');
		},
		e: function () {
			var a = '', str = '';
			for (var b in arguments) {
				if (b > 0) {
					a = a+', ';
				}
				a = a+'arguments['+b+']';
				str += ' '+ arguments[b];
			}
			eval('console.error('+a+');');
		},
		i: function () {
			var a = '';
			for (var b in arguments) {
				if (b > 0) {
					a = a+', ';
				}
				a = a+'arguments['+b+']';
			}
			eval('console.info('+a+');');
		}
	};
	$.log = Object.assign($.log, proto);
})();
;(function (){
	/*
	* takes a function with a unique name, if a function with this name is
	* provided again, it delays the exec of that function by a few ms
	*
	* calling without fn will just clear the timeout on that id
	* */
	var taxeeraat = {};
	$.taxeercancel = function (id) {
		clearTimeout(taxeeraat[id]);
	};
	$.taxeer = function (id, fn, customdelay, nofurtherdelay) {
		customdelay = customdelay || 300;
		if ( nofurtherdelay && taxeeraat[id] ) return;
		if ( taxeeraat[id] ) {
			clearTimeout( taxeeraat[id] );
			taxeeraat[id] = undefined;
		}
		if ( typeof fn === 'function' ) {
			taxeeraat[id] = setTimeout( function () {
				fn(function () {
					$.taxeer(id, fn, customdelay, nofurtherdelay);
				});
				taxeeraat[id] = undefined;
			}, customdelay );
		}
	};
})();
$.re = function (string, automaton, flags) { // automaton, flags
	var object = (new RegExp(automaton||'', flags||'')).exec(string||'') || {};
	object.re = function (automaton, flags) {
		return $.re(object[0]||'', automaton, flags);
	};
	return object;
};
$.regex = $.re;
/*
* this restores the initial module.exports = {} from
* = glatteis by ._c
* inclusion in other parent scripts after concatenation &
* uglification
*/
$._r = function () {
	module.exports = glatteis;
};
/*
* used only when mods are concat'd
* if no ._name property is present in mod, use the name argument
* if no name argument, return false
*/
$._c = function (name) {
	var mod = module.exports;
	module.exports = {};
	if (mod instanceof Object
		&& (typeof(name) === 'string' || typeof(mod._name) === 'string')
	) {
		if (typeof(mod._name) === 'string') {
			glatteis._mods[mod._name] = mod;
		} else {
			glatteis._mods[name] = mod;
		}
		return true;
	}
	return false;
};
$._paths = {
};
$._mods = {
};
$.cache = function (name, path) { // cache a module's path
	$._paths[name] = path;
};
$.unload = function (mods, fn) {
	/*
	* @TODO: delete/unload mods from memory
	* run ._unload per mod for a graceful exit
	* once all mods are unloaded in a chain/order -> call fn
	*/
};
;(function (){
	var _arrayPrototype = {
		set: function (id, object) {
			if (this._keys[id] !== undefined) { // update
				if (typeof object === 'function') {
					this._array[this._keys[id]] = object(this._array[this._keys[id]]);
				} else {
					this._array[this._keys[id]] = object;
				}
				typeof this.onset === 'function' && this.onset(object, id);
			} else { // add
				if (typeof object === 'function') {
					this._keys[id] = this._array.push(
												object(this._array[this._keys[id]])
											) - 1;
				} else {
					this._keys[id] = this._array.push(object) - 1;
				}
				typeof this.onadd === 'function' && this.onadd(object, id);
				++this.length;
			}
			return this;
		},
		alter: function (id, object) {
			var item = this.get(id);
			if (item) {
				this.set( id , Object.assign( item, object ) );
			}
			return this;
		},
		pop: function (id) {
			if (this._keys[id] !== undefined) {
				typeof this.onpop === 'function' && this.onpop(id);
				this._array[this._keys[id]] = undefined;
				delete this._keys[id];
				--this.length;
			}
			return this;
		},
		popall: function (array) {
			if (typeof array.toNative === 'function') array = array.toNative();
			for (var i in array) {
				this.pop( array[i] );
			}
		},
		get: function (id) {
			if (this._keys[id] > -1) {
				return this._array[ this._keys[id] ];
			} else {
				return undefined;
			}
		},
		each: function (fn) {
			if (typeof fn === 'function') {
				for (var i in this._array) {
					if (this._array[i] !== undefined) {
						var val = fn(this._array[i], i);
						if (val !== undefined) {
							this._array[i] = val;
						}
					}
				}
			}
		},
		/*
		* this supports both native and Ge arrays
		* id is the prop name in array that you want to be the id
		* */
		setall: function (id, array) {
			this._id = id;
			if (typeof array.toNative === 'function') array = array.toNative();
			for (var i in array) {
				this.set( array[i][id], array[i] );
			}
		},
		unique: function () {
			var uniquearray = [];
			this._array.forEach(function (item) {
				if (uniquearray.indexOf(item) === -1)
					uniquearray.push(item);
			});
			return uniquearray;
		},
		order: function (order) {
			var ordered = [];
			for (var i in order) {
				var val = order[i];
				var index = this._array.indexOf(val);
				if (index > -1) {
					ordered.push( this._array[index] );
					this._array.splice(index, 1);
				}
			}
			return ordered.concat(this._array);
		},
		slice: function (from, to) {
			var nativearr = $.array();
			this.each(function (item, i) {
				if (i >= from && i <= to)
					nativearr.set(item.uid, item);
			});
			return nativearr;
		},
		/*
		* id is the prop name in array that you want to be the id
		* key is the prop you want to compare for order
		* */
		sort: function (reverse, key, id) {
			var temparray = this.toNative();
			if (typeof reverse === 'function') {
				temparray.sort(reverse);
			} else {
				temparray.sort(function (a, b) {
					if (reverse) {
						if (key) {
							return b[key]-a[key];
						} else {
							return b-a;
						}
					} else {
						if (key) {
							return a[key]-b[key];
						} else {
							return a-b;
						}
					}
				});
			}
			if (id || this._id) {
				this._array = [];
				this.length = 0;
				this._keys = {};
				this.setall(id || this._id, temparray);
			}
			return this;
		},
		/*reverse: function (id, order) {
			this._array.reverse();
			this.setall(id, this._array);
			return this;
		},*/
		/*
		* the new non-camelcase format in effect since 29nov2018
		* returns all keys that are not 'undefined'
		* returns native array
		* */
		tokeys: function () {
			var arr = [], keys = Object.keys(this._keys);
			for (var i in keys) {
				if (keys[i] !== undefined)
					arr.push( keys[i] );
			}
			return arr;
		},
		saabiq: function (uid) {
			var index = this._keys[uid];
			if (!isundef(index) && index > -1) {
				for (var i = index-1; i >= 0; --i) {
					if (!isundef(this._array[i])) {
						return this._array[i];
					}
				}
			}
		},
		qaadim: function (uid) {
			var index = this._keys[uid];
			if (!isundef(index) && index > -1) {
				for (var i = index+1; i < this._array.length; ++i) {
					if (!isundef(this._array[i])) {
						return this._array[i];
					}
				}
			}
		},
		eawwad: function (uid, uid2) { // swap objects in array to change order
			var index = this._keys[uid];
			var index2 = this._keys[uid2];
			if (index > -1 && index2 > -1) {
				this._keys[uid] = index2;
				this._keys[uid2] = index;
				var temp = this._array[index];
				this._array[index] = this._array[index2];
				this._array[index2] = temp;
			}
		},
		toNative: function () {
			var arr = [];
			for (var i in this._array) {
				if (this._array[i] !== undefined) {
					arr.push(this._array[i]);
				}
			}
			return arr;
		}
	};
	$.array = function (prearray, id) {
		var newqueue = Object.create(_arrayPrototype);
		prearray = prearray || [];
		if (typeof prearray.toNative === 'function') prearray = prearray.toNative();
		newqueue._array = prearray;
		newqueue._keys = {};
		newqueue._id = id;
		if (id)
			prearray.forEach(function (item, i) {
				newqueue._keys[ item[id] ] = i;
			});
		newqueue.length = newqueue._array.length;
		return newqueue;
	};
	$.array.clean = function (arr) {
		var arr2 = [];
		if (arr) arr.forEach(function (item, i) {
			arr2.push(item);
		});
		return arr2;
	};
})();
;(function (){
	var _queuePrototype = {
		_init: function () {
			if (!this._didinit) {
				this._didinit = true;
				this._didrun = false;
				this.queuearray = [];
				this.active = false;
				this.count = 0;
				this.uid = false;
				this._onnext = false;
				this._onfinish = false;
			}
		},
		_next: function (queue, extra) {
			++queue.count;
			queue._process(queue, extra);
			queue.active = false;
			return queue.count;
		},
		_process: function (queue, extra) {
			if (queue.muntahaa) return;
			if (typeof queue._onnext === 'function') {
				if (queue.queuearray.length > 0) {
					queue.uid = queue.queuearray.length;
					queue.active = true;
					var worker = queue.queuearray.pop();
					var done = function (queue, extra) {
						queue._onnext(queue._next, queue, extra);
					};
					worker(done, queue, extra);
					return false;
				} else {
					queue.active = false;
					--queue.count;
					if (typeof queue._onfinish === 'function') {
						queue._onfinish(queue, extra);
					}
					return false;
				}
			}
		},
		intahaa: function () {
			this.muntahaa = 1
		},
		set: function (worker) {
			this._init();
			if (typeof worker === 'function') {
				this.queuearray.unshift(worker);
			}
			return this;
		},
		run: function (_onfinish) {
			this.onfinish(_onfinish);
			var queue = this;
			queue._init();
			if (typeof queue._onnext !== 'function') {
				queue.onnext(function (done, _queue, extra) {
					done(_queue, extra);
				});
			}
			if (!queue._didrun
			&& typeof queue._onnext === 'function') {
				queue._didrun = true;
				queue._process(queue);
			}
		},
		onnext: function (cb) {
			if (typeof cb === 'function') {
				this._onnext = cb;
			}
		},
		onfinish: function (cb) {
			if (typeof cb === 'function') {
				this._onfinish = cb;
			}
		}
	};
	$.queue = function (onnext, onfinish) {
		var newqueue = Object.create(_queuePrototype);
		newqueue._init();
		if (typeof onnext === 'function') {
			newqueue._onnext = onnext;
		}
		if (typeof onfinish === 'function') {
			newqueue._onfinish = onfinish;
		}
		return newqueue;
	};
})();
;(function (){
	$.queuerequest = function () {
		var queuerequest = {
			name: 1,
			active: false,
			cnt: 0,
			id: false,
			_array: [],
			cur: false,
			queue: function (options) {
				this._array.unshift(options);
				this.id = this._array.length;
				if (this.active === true)
					return this.cnt;
				else
					return this.process(this);
			},
			/* TODO
			* when requests are queued too fast, it gets stuck on the last
			* request and never processes it unless queue is called again
			* or process is called manually
			*
			* fix this asap, it's an ugly prob
			* */
			process: function (carriedthis) {
				carriedthis = carriedthis || this;
				if (carriedthis._array.length && !carriedthis.active) {
					carriedthis.id = carriedthis._array.length;
					carriedthis.active = true;
					var options = carriedthis._array.pop();
					{
						if (options.uri.match(/http.*\:\/\//) === null) {
							if (typeof nw === 'object') {
								options.uri = 'file://'+options.uri;
							}
						}
						var request;
						var shorty = options.uri;
						if (window.XMLHttpRequest) {
							request = new XMLHttpRequest();
						}
						else if (typeof require === 'function') {
							request = require(options.uri);
							typeof options.callback === 'function' && options.callback(request);
							carriedthis.cnt++; carriedthis.process(carriedthis); carriedthis.active = false; return carriedthis.cnt;
						}
						request.timeout = carriedthis.fetchtimeout || $.fetchtimeout;
						carriedthis.cur = request;
						if (options.type == 'get') {
							request.open('GET', options.uri, true);
						} else {
							request.open('POST', options.uri, true);
							if (!options.headers)
								request.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset = UTF-8");
						}
						if (options.headers instanceof Object) {
							Object.keys(options.headers).forEach(function (key) {
								request.setRequestHeader(key, options.headers[key]);
							});
						}
						(request.upload ? request.upload : request).onprogress = function (event) {
							if (event.lengthComputable && typeof carriedthis.progressfn === 'function') {
								carriedthis.progressfn(event.loaded, event.total);
							}
						};
						var onend = function (errtype) {
							typeof options.callback === 'function' && options.callback('', errtype || request.status);
							carriedthis.cnt++;
							carriedthis.process(carriedthis);
							carriedthis.active = false;
							return carriedthis.cnt;
						};
						request.onreadystatechange = function() {
							if (request.readyState == 4) {
								if (request.status === 200) {
									typeof options.callback === 'function' && options.callback(request.responseText);
									carriedthis.cnt++;
									carriedthis.process(carriedthis);
									carriedthis.active = false;
									return carriedthis.cnt;
								} else {
									onend(request.status);
								}
							}
						}
						request.onabort = function () {
							onend(-100);
						};
						request.ontimeout = function () {
							onend(-200);
						};
						request.onerror = function () {
							onend(-300);
						};
						request.send( options.type == 'get' ? null : options.payload );
					}
					return false;
				} else {
					carriedthis.active = false; carriedthis.cnt = 0;
					return false;
				}
			},
		};
		var newobject = Object.create(queuerequest);
		return newobject;
	};
	/*
	* (s)cript location is required, (c)allback function is passed the
	* responseText as the first argument
	* (e)xecute the script before the callback function
	* this is fetch 2.0 now
	* it tries to implement a very basic form of ES6 fetch + then
	* it uses a barebones promise without depending on JS base Promise or
	* Response class
	*
	* channels: strings that identify separate independent queues of requests
	* for example in web apps, one for regular sync requests and another for
	* listening for events from the server
	*/
	$.fetchtimeout = 30 * 1000;
	$.fetchcancel = function (channel) {
		channel = $.fetchchannels[channel || 1];
		if ( channel ) {
			channel._array = [];
			if (channel.cur)
				channel.cur.abort();
			channel.active = false;
			channel.cnt = 0;
			channel.cur = 0;
		}
	};
	$.fetchchannels = {};
	$.fetchprocess = function (channel) {
		channel = channel || 1;
		if ( $.fetchchannels[channel] )
			$.fetchchannels[channel].process();
	};
	$.fetch = function (uri, data, channel, progressfn, fetchtimeout, headers) {
		channel = channel || 1;
		var response = false,
			thencb = false,
			thenfn = function (callback) {
				if (response) {
					if (typeof callback === 'function') callback(response);
				} else {
					thencb = callback;
				}
			};
		if ( !$.fetchchannels[channel] ) {
			$.fetchchannels[channel] = /*Object.create(queuerequest)*/ $.queuerequest();
			$.fetchchannels[channel].name = channel;
			$.fetchchannels[channel].fetchtimeout = fetchtimeout || $.fetchtimeout;
		}
		if (typeof progressfn === 'function')
			$.fetchchannels[channel].progressfn = progressfn;
		$.fetchchannels[channel].queue({
			uri: uri,
			payload: (data || null),
			headers: headers || 0,
			type: (data ? 'post' : 'get'),
			callback: function (body, err) {
				try {
					if (typeof thencb === 'function') {
						thencb({
							body: body,
							err: err
						});
					}
				} catch (e) {
					glatteis.log.e(e);
				}
			}
		});
		return {
			then: thenfn
		};
	};
})();
$._r();
'use strict';
var taraajim = {"en":{"ext":"EXT.","int":"INT.","notime":"...","day":"DAY","night":"NIGHT","morning":"MORNING","evening":"EVENING","parenth":"Parenthetical","charname":"Character Name","dialog":"Dialog","pagerasmaa":"Tab Names","profile":"Profile","profiles":"Profiles","noprofiles":"No Profiles","aqrabaa":"Favorites","noaqrabaa":"No Favorites","settings":"Settings","requestfeat":"Request Feature","reportbug":"Report Bug","author":"Author","build":"Build","openad":"Ad","quality":"Quality","largetext":"Large Text","transparency":"Transparency","calendar":"Calendar","hijri":"Hijri","gregorian":"Gregorian","builton":"Built On","offlinesince":"Offline since","skhelp":"Press # for actions","softkeystouchdpad":"Touchscreen D-Pad","theme":"Theme","black":"Black","white":"White","infuture":"in","justnow":"just now","sseconds":"s","secondsago":"secs","aminuteago":"a min","minute":"min","sminutes":"m","minutes":"mins","minutesago":"mins","anhourago":"an hr","hourago":"hr","hoursago":"hrs","yesterday":"yesterday","tomorrow":"tomorrow","adayago":"a day","dayago":"d","daysago":"d","lastmonth":"last month","monthago":"mo","monthsago":"mo","lastyear":"last year","yearago":"y","yearsago":"y","alongtime":"a long time","sunday":"sunday","monday":"monday","tuesday":"tuesday","wednesday":"wednesday","thursday":"thursday","friday":"friday","saturday":"saturday",",":",","am":"am","pm":"pm","st":"st","nd":"nd","rd":"rd","th":"th","timeformat":"Time Format","hours24":"24 hour","hours12":"12 hour","language":"Language","en":"English","ar":"Arabic","ur":"Urdu","ru":"Russian","de":"German","es":"Spanish","loading":"Loading...","exiting":"Exiting...","unsupported":"Your device can't run this app","off":"Off","on":"On","animations":"Animations","webapptouchdir":"Touch affects direction"}};
var Hooks, hooks;
;(function (){
	'use strict';
	Hooks = {
		_registry: {},
		_map: {},
		_uid: 0,
		set: function (hook, id, fn) {
			if (hook instanceof Array) {
				hook.forEach(function (item) {
					Hooks.set(item, id, fn);
				});
				return;
			}
			if (typeof id === 'function')
				fn = id, id = new Date().getTime();
			if (typeof fn === 'function') {
				if (Hooks._registry[hook] === undefined) {
					Hooks._registry[hook] = [];
				}
				++Hooks._uid;
				Hooks._registry[hook][Hooks._uid] = fn;
				Hooks._map[hook+'_'+id] = Hooks._uid;
				return true;
			}
			return false;
		},
		run: function (hook, extras) {
			var handlers = Hooks._registry[hook];
			if (handlers instanceof Array) {
				for (var i in handlers) {
					if (typeof handlers[i] === 'function') {
						handlers[i](extras);
					}
				}
				return true;
			}
			return false;
		},
		rununtilconsumed: function (hook, extras) {
			var handlers = Hooks._registry[hook];
			if (handlers instanceof Array) {
				for (var i in handlers) {
					if (typeof handlers[i] === 'function') {
						var returnedvalue = handlers[i](extras);
						if (returnedvalue) {
							return returnedvalue;
						}
					}
				}
			}
			return false;
		},
		pop: function (hook, id) {
			if (Hooks._registry[hook]) {
				delete Hooks._registry[hook][ Hooks._map[hook+'_'+id] ];
				return true;
			}
			return false;
		},
		hook: function (hook) {
			Hooks._registry[hook] = [];
		},
		unhook: function (hook) {
			delete Hooks._registry[hook];
		}
	};
	module.exports = Hooks;
	hooks = Hooks;
})();
var
stringify = function (o) {
	return JSON.stringify(o);
},
parsejson = function (o) {
	return JSON.parse(o);
},
mubaaraat = function (str, re) {
	return (str.match(re)||[])[0];
},
tabdeel = function (str, arr) {
	if (isstr(str) && isarr(arr)) {
		for (var i = 0; i < arr.length; i += 2) {
			str = str.replace(arr[i], arr[i+1]);
		}
	}
	return str;
},
deepcopy = function (v) {
},
isundef = function (v) {
	return v === undefined;
},
isstr = function (v) {
	return typeof v == 'string';
},
isfinite = function (v) {
	return Number.isFinite(v);
},
isnan = function (v) {
	return Number.isNaN(v);
},
isnum = function (v) {
	return typeof v == 'number' && !isnan(v) && isfinite(v);
},
isfun = function (v) {
	return typeof v == 'function';
},
isarr = function (v) {
	return v instanceof Array;
},
areobjectsequal = function (a, b) { // only compares primitives bw 2 objs
	var same = 1;
	if (a && b && Object.keys(a).length === Object.keys(b).length)
	for (var i in a) {
		if (a[i] !== b[i]) {
			same = 0;
			break;
		}
	}
	else same = 0;
	return same;
},
zero = function (num) {
	return num < 10 ? '0'+num : num;
},
collapsearray = function (arr) {
	var arr2 = [];
	arr.forEach(function (e) {
		if (!isundef(e)) arr2.push(e);
	});
	return arr2;
},
array2string = function (arr) { // [ 1, 2 ] -> " 1 2"
	return ' '+arr.join(' ');
},
intersect = function (arr, superset) { // [ num, num, ... ]
	var arr2 = [];
	arr.forEach(function (item) {
		if (!isundef(superset[ item ])) arr2.push(item);
	});
	return arr2;
},
shallowcopy = function (v) { // return a copy of array of objs or just one obj
	if (isnum(v) || isstr(v)) {
		return v;
	} else
	if (v instanceof Array) {
		var v2 = [];
		v.forEach(function (item) {
			v2.push( Object.assign({}, item) );
		});
		return v2;
	}
	else {
		return Object.assign({}, v);
	}
},
parseint = function (v, r) {
	return parseInt(v, r);
},
parsefloat = function (v, n) {
	if (n) v = parseFloat(v).toFixed(n);
	return parseFloat(v);
},
intify = function (arr) {
	for (var i = 0; i < arr.length; ++i) {
		arr[i] = parseint(arr[i]);
	}
	return arr;
},
tolower = function (obj) {
	return obj.toLowerCase();
},
toupper = function (obj) {
	return obj.toUpperCase();
};
var
enc = function (v) {
	return encodeURIComponent(v);
},
dec = function (v) {
	return decodeURIComponent(v);
},
encp = function (v) {
	return encodeURI(v);
},
decp = function (v) {
	return decodeURI(v);
},
innerhtml = function (obj, v) {
	obj.innerHTML = v;
},
setvalue = function (obj, v) {
	obj.value = v;
},
scrollintoview = function (obj) {
	obj && obj.scrollIntoView(1);
},
prevsibling = function (obj) {
	return obj.previousElementSibling;
},
nextsibling = function (obj) {
	return obj.nextElementSibling;
},
getattribute = function (obj, k) {
	return obj.getAttribute(k);
},
attribute = function (obj, k, v) {
	v == '' ? obj.removeAttribute(k) : obj.setAttribute(k, v);
},
setcss = function (obj, k, v) {
	if (v === undefined)
		obj.style[k] = '';
	else
		obj.style[k] = v;
},
popdata = function (obj, k, v) {
	if (obj) delete obj.dataset[k];
},
setdata = function (obj, k, v) {
	if (obj) obj.dataset[k] = v;
},
getdata = function (obj, k) {
	return obj.dataset[k];
},
innertext = function (obj, v) {
	if (isundef(v)) return obj.innerText;
	else obj.innerText = v;
},
innerwidth = function (v) { // returns width + v
	return innerWidth + (v||0);
},
innerheight = function (v) {
	return innerHeight + (v||0);
},
hasownprop = function (obj, i) {
	if (obj && obj.hasOwnProperty)
		return obj.hasOwnProperty(i);
},
izhar = function (v) {
	v.hidden = 0;
},
ixtaf = function (v) {
	v.hidden = 1;
},
isixtaf = function (v) {
	return v.hidden || getattribute(v, 'type') == 'hidden';
},
markooz = function () {
	return document.activeElement;
},
preventdefault = function (obj) {
	obj && obj.cancelable && obj.preventDefault && obj.preventDefault();
},
raycast = function (x, y) {
	return document.elementsFromPoint(x, y);
},
elementbyid = function (id) {
	return document.getElementById(id);
},
listener = function (obj, name, fn, o) {
	if (typeof obj === 'string' || obj instanceof Array)
		o = fn,
		fn = name,
		name = obj,
		obj = window;
	if (name instanceof Array) {
		name.forEach(function (item) {
			obj.addEventListener(item, fn, o);
		});
	} else obj.addEventListener(name, fn, o);
},
createelement = function (name, classes, id) {
	var e = document.createElement(name||'div');
	if (classes) e.className = classes;
	if (id) e.id = id;
	return e;
},
tahmeel = function (filename, text, mimetype) { // download file with a name
	var e = createelement('a');
	attribute(e, 'href', (mimetype||'data:text/plain;charset=utf-8,') + encodeURIComponent(text));
	attribute(e, 'download', filename);
	setcss(e, 'display', 'none');
	document.body.appendChild(e);
	e.click();
	document.body.removeChild(e);
},
iswithinelement = function (arr, element) {
	var a = arr[0],
		b = arr[1],
		x = element.offsetLeft,
		y = element.offsetTop,
		w = x+element.offsetWidth,
		h = y+element.offsetHeight;
	return (a >= x && a <= w && b >= y && b <= h);
},
getposition = function (el) {
	var xPos = 0;
	var yPos = 0;
	var dir = document.body.dir;
	if ( dir === 'rtl' )
		xPos = xPos + el.clientWidth;
	while (el) {
		if (el.tagName == 'BODY') {
			var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
			var yScroll = el.scrollTop || document.documentElement.scrollTop;
			xPos += (el.offsetLeft - xScroll + el.clientLeft);
			yPos += (el.offsetTop - yScroll + el.clientTop);
		} else {
			xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
			yPos += (el.offsetTop - el.scrollTop + el.clientTop);
		}
		el = el.offsetParent;
	}
	return [xPos, yPos];
},
replacewith = function (el, el2) {
	el.replaceWith(el2);
};
;(function(){
	var replacewithpolyfill = function () {
	'use-strict'; // For safari, and IE > 10
	var parent = this.parentNode, i = arguments.length, currentNode;
	if (!parent) return;
	if (!i) // if there are no arguments
		parent.removeChild(this);
	while (i--) { // i-- decrements i and returns the value of i before the decrement
		currentNode = arguments[i];
		if (typeof currentNode !== 'object'){
		currentNode = this.ownerDocument.createTextNode(currentNode);
		} else if (currentNode.parentNode){
		currentNode.parentNode.removeChild(currentNode);
		}
		if (!i) // if currentNode is the first argument (currentNode === arguments[0])
		parent.replaceChild(currentNode, this);
		else // if currentNode isn't the first
		parent.insertBefore(currentNode, this.nextSibling);
	}
	}
	if (!Element.prototype.replaceWith)
		Element.prototype.replaceWith = replacewithpolyfill;
	if (!CharacterData.prototype.replaceWith)
		CharacterData.prototype.replaceWith = replacewithpolyfill;
	if (!DocumentType.prototype.replaceWith)
		DocumentType.prototype.replaceWith = replacewithpolyfill;
})();
var webapp, appname = 'screenplay' || '',
	maxzan = maxzan || 0,
	pager = pager || 0,
	checkbox = checkbox || 0,
	preferences = preferences || 0,
	translate = translate || 0,
	rakkazawwal, focus_first_element, focusprev, focusnext, navigables, is_navigable,
	LAYERTOPMOST = 3000;
;(function(){
	var doc = document, bod = doc.body, wakelockstatus, isalbixraaj;
	navigables = ['input', 'textarea', 'button', 'a', 'select'];
	is_navigable = function (e) {
		return navigables.includes(e.tagName.toLowerCase()) || e.contentEditable == 'true';
	};
	focus_first_element = rakkazawwal = function (e, scroll) {
		if (e) {
			var s = e.querySelector('input, textarea, button, a, select, [contenteditable]');
			if (s) {
				s.focus();
				if (scroll) webapp.scrollto(s);
				return s;
			}
		}
	};
	/* FOCUS how this works
	* for elements inside other formating elements, set data-focus on each parent
	* this hints to this algo to go up a parent
	* */
	focusprev = function (element, thisone, num) {
		var orig = element, out, LV;
		num = num || 0; if (num > 100) return;
		while ( element.previousElementSibling && num < 100 ) {
			++num;
			element = thisone ? element : element.previousElementSibling;
			if (isixtaf(element)) {
			} else if ( element.dataset.focus == 'list' ) {
				LV = element.listobject;
				if (LV.length()) {
					webapp.blur();
					element.focus();
					LV.last();
					LV.rakkaz(1, 1);
					out = element;
					break;
				}
			} else if ( element.dataset.focus && element.lastElementChild ) {
				out = focusprev(element.lastElementChild, 1, ++num);
				break;
			}
			else if ( is_navigable( element ) ) {
				element.focus();
				out = element;
				break;
			}
			if (thisone) thisone = 0; // after first run, go to the next element
		}
		if ( out ) {}
		else if ( element.dataset.focus == 1 ) {
			return focusprev( element.parentElement, 0, ++num );
		}
		else if ( element.parentElement.dataset.focus ) {
			return focusprev( element.parentElement, 0, ++num );
		} else {
			/* BUG
			* come up with a solution for this
			* */
		}
		if (markooz() === element) {
			element.onprev && element.onprev(element);
		}
		if (out) {
			if (orig && orig.listobject) {
				orig.listobject.deselect();
			} /*else LV && LV.selected++;*/ // to avoid a +1 jump
			return out;
		}
	};
	focusnext = function (element, thisone, num) {
		var orig = element, out, LV;
		num = num || 0; if (num > 100) return;
		while ( element.nextElementSibling && num < 100 ) {
			++num;
			element = thisone ? element : element.nextElementSibling;
			if (isixtaf(element)) {
			} else if ( element.dataset.focus == 'list' ) {
				LV = element.listobject;
				if (LV.length()) {
					webapp.blur();
					element.focus();
					LV.first();
					LV.rakkaz(1, 1);
					out = element;
					break;
				}
			} else if ( element.dataset.focus && element.firstElementChild ) {
				out = focusnext(element.firstElementChild, 1, ++num);
				break;
			}
			else if ( is_navigable( element ) ) {
				element.focus();
				out = element;
				break;
			}
			if (thisone) thisone = 0; // after first run, go to the next element
		}
		if ( out ) {}
		else if ( element.dataset.focus == 1 ) {
			return focusnext( element.parentElement, 0, ++num );
		}
		else if ( element.parentElement.dataset.focus ) {
			return focusnext( element.parentElement, 0, ++num );
		}
		/* BUG CASE
		* changed this to orig because i wasn't able to override this inside
		* a listitem with an input element, on pressing down it kept replacing
		* element with the nextsibling (see above while loop) :(
		* more testing needed
		* */
		orig.onnext && orig.onnext(orig);
		if (out) {
			if (orig && orig.listobject) {
				orig.listobject.deselect();
			} /*else LV && LV.selected--;*/ // to avoid a +1 jump
			return out;
		}
	};
	var viewsindex = {},
		getform = function (element) {
			if (!(element instanceof HTMLElement)) return;
			var payload = {};
			var otherviews = element.querySelectorAll('[data-id]');
			for (var i in otherviews) {
				if ( otherviews.hasOwnProperty(i) ) {
					if (otherviews[i].getvalue)
						payload[ otherviews[i].dataset.id ] = otherviews[i].getvalue();
					else
						payload[ otherviews[i].dataset.id ] = otherviews[i].value;
/*
					if (otherviews[i] instanceof HTMLSelectElement) {
						otherviews[i].value = 0;
					}
					else if ( ['text', 'textarea'].includes(otherviews[i].type) ) {
						otherviews[i].value = '';
					}
					else {
					}
*/
				}
			}
			return payload;
		},
		getformkeys = function (element) {
			if (!(element instanceof HTMLElement)) return;
			var keys = {};
			var otherviews = element.querySelectorAll('[data-id]');
			for (var i in otherviews) {
				if ( otherviews.hasOwnProperty(i) ) {
					keys[ otherviews[i].dataset.id ] = otherviews[i];
				}
			}
			return keys;
		},
		/*
		* this version lets you setup custom callbacks for forms
		* each call sends you three things
		* cb(formelement, pressedbutton, payload)
		* */
		sendform = function (element, button) {
			var payload, keys;
			if (element) {
				payload = getform(element);
				keys = getformkeys(element);
			} else {
				element = {
					id: button.dataset.form,
				};
			}
			Hooks.run('domformdata', {
				form: element,
				button: button,
				payload: payload,
				keys: keys,
			});
		},
		setupforms = function () {
			var sendbuttons = document.querySelectorAll('.form .send');
			for (var i in sendbuttons) {
				if ( sendbuttons.hasOwnProperty(i) ) {
					sendbuttons[i].onclick = function () {
						sendform( document.querySelector( '#'+this.dataset.form ), this );
					};
				}
			}
			var counts = document.querySelectorAll('.form label.count');
			for (var i in counts) {
				var countlabel = counts[i];
				if ( counts.hasOwnProperty(i) ) {
					var field = countlabel.parentNode.nextElementSibling;
					field.oninput = function () {
						this.previousElementSibling.lastElementChild.innerText = (this.value || '').length;
					};
					field.oninput();
				}
			}
		};
	/*
	* webapp features like 3inch handles linked-modules functionality example:
	* when backstack reports darajah, 3inch updates softkeys
	* */
	webapp = {
		visible: 1,
		isdimmed: 0,
		/*
		* an array of features that can be check like
		* 'feature' in window OR
		* in Navigator OR
		* in navigator
		* even if a singe one fails, an error is shown
		* */
		lavaazim: function (inwindow) {
			inwindow = inwindow || [];
			var err;
			for (var i in inwindow) {
				var feature = inwindow[i];
				if ( feature in window
					|| feature in navigator
					|| feature in Navigator ) {
				} else {
					err = 1;
					break;
				}
			}
			if (err) {
				webapp.header( translate && translate('unsupported') );
				return 0;
			} else {
				webapp.header();
				return 1;
			}
		},
		blur: function () {
			var ae = markooz();
			ae && ae.blur();
			blur();
			return ae;
		},
		header: function (text, align) {
			if (align == 1) headerui.dataset.align = '1';
			else if (align == 2) headerui.dataset.align = '2';
			else delete headerui.dataset.align;
			if (backstack.darajah <= 1) {
				if (text) {
					if (text instanceof Array) {
						headerui.dataset.i18n = text[0];
					} else {
						delete headerui.dataset.i18n,
						headerui.innerText = text;
					}
					headerui.hidden = 0;
				} else
					delete headerui.dataset.i18n,
					headerui.innerText = '',
					headerui.hidden = 1;
			} else if (backstack.darajah === 2) {
				sheet.header(text);
			}
			translate.update();
		},
		sahhar: function (what) { // keep awake wakelock
			if (navigator && navigator.requestWakeLock) {
				webapp.nawwam();
				wakelockstatus = navigator.requestWakeLock(what||'screen');
			}
		},
		nawwam: function () { // let sleep, put to sleep, clear wakelock
			if (wakelockstatus && wakelockstatus.unlock) {
				try { wakelockstatus.unlock(); } catch (e) { $.log( e ); }
				wakelockstatus = 0;
			}
		},
		scrollx: function (v) {
			var se = scrollingelement();
			se.scrollTop += v;
		},
		scrolly: function (v) {
			var se = scrollingelement();
			se.scrollLeft += v;
		},
		dimmer: function (zindex, text) {
			zindex && (dimmer.style.zIndex = zindex);
			dimmer.hidden = zindex ? 0 : 1;
			webapp.isdimmed = zindex ? 1 : 0;
			if (text)
				dimmertext.hidden = 0,
				dimmertext.dataset.i18n = text;
			else
				dimmertext.hidden = 1,
				delete dimmertext.dataset.i18n,
				innerhtml(dimmertext, '');
			document.scrollingElement.style.overflow = zindex ? 'hidden' : '';
			translate.update(dimmer);
		},
		statusbarpadding: function (yes) {
			if (yes) {
				statusbarpadding.hidden = 0;
				statusbarshadow.hidden = 0;
			} else {
				statusbarpadding.hidden = 1;
				statusbarshadow.hidden = 1;
			}
		},
		transparency: function (yes) {
			yes = yes === undefined ? preferences && preferences.get(23, 1) : yes;
			if (yes/* || Navigator.largeTextEnabled*/) {
				document.body.dataset.transparency = 1;
			} else {
				delete document.body.dataset.transparency;
			}
		},
		textsize: function (yes) {
			yes = yes === undefined ? preferences && preferences.get(9, 1) : yes;
			if (yes/* || Navigator.largeTextEnabled*/) {
				document.body.dataset.largetext = 1;
			} else {
				delete document.body.dataset.largetext;
			}
		},
		bixraaj: function (isal) { // on exit, ask or no
			if (isal) isalbixraaj = 1;
			else isalbixraaj = 0;
		},
		exit: function () {
			if (isalbixraaj) {
				if ( confirm(xlate('sure')) ) close();
			} else close();
		},
		icons: function () {
			var elements = document.body.querySelectorAll('[data-icon]');
			for (var i in elements) {
				if ( elements.hasOwnProperty(i) && elements[i].dataset.icon ) {
					var e = eqonaat.querySelector('#'+elements[i].dataset.icon);
					if (e)
						elements[i].innerHTML = '<svg viewBox="0 0 48 48">'+e.cloneNode(1).innerHTML+'</svg>';
				}
			}
		},
		uponresize: function () {
			$.taxeer('taHjeem', function () {
				if (innerwidth() <= 320) {
					setdata(bod, 'aqil', 1);
				} else {
					popdata(bod, 'aqil');
				}
				if (innerwidth() > 320 && innerwidth() <= 640) {
					setdata(bod, 'qaleel', 1);
				} else {
					popdata(bod, 'qaleel');
				}
				if (innerwidth() > 320) {
					setdata(bod, 'qaleelah', 1);
				} else {
					popdata(bod, 'qaleelah');
				}
				if (innerwidth() > 640 && innerwidth() <= 800) {
					setdata(bod, 'wast', 1);
				} else {
					popdata(bod, 'wast');
				}
				if (innerwidth() > 640) {
					setdata(bod, 'wastah', 1);
				} else {
					popdata(bod, 'wastah');
				}
				if (innerwidth() >= 1024) {
					setdata(bod, 'tvfs', 1);
				} else {
					popdata(bod, 'tvfs');
				}
			}, 100);
			if (innerheight() <= 480) document.body.dataset.keyboardopen = 1;
			else delete document.body.dataset.keyboardopen;
		},
	};
	webapp.itlaa3 = function (text, time) {
		var element = itlaa3.firstElementChild;
		if (text) {
			if (text instanceof Array) {
				element.dataset.i18n = text[0];
				translate.update(itlaa3);
			} else {
				delete element.dataset.i18n,
				element.innerText = text;
			}
			itlaa3.hidden = 0;
			$.taxeer('itlaa3', function () {
				webapp.itlaa3();
			}, time||3000);
		} else {
			delete element.dataset.i18n,
			element.innerText = '',
			itlaa3.hidden = 1;
		}
	};
	webapp.status = webapp.itlaa3;
	listener('dragover', function (e) {
		setdata(bod, 'tahweem', 1);
		preventdefault(e);
		return false;
	});
	listener('dragleave', function (e) {
		$.taxeer('dragleave', function () {
			popdata(bod, 'tahweem');
		}, 3000);
		preventdefault(e);
		return false;
	});
	listener('drop', function (e) {
		popdata(bod, 'tahweem');
		preventdefault(e);
		var f = e.dataTransfer.files;
		if (f && f.length) {
			Hooks.run('huboot', f);
		}
		Hooks.run('dropped', e.dataTransfer);
		return false;
	});
	listener('resize', function () {
		webapp.uponresize();
	});
	listener('contextmenu', function (e) {
		var yes = Hooks.rununtilconsumed('contextmenu', e);
		if (yes && e) preventdefault(e);
	});
	listener('scroll', function (e) {
		Hooks.run('scroll', document.scrollingElement.scrollTop);
	});
	listener('keyup', function (e) {
		Hooks.rununtilconsumed('keyup', e);
	});
	listener('keydown', function (e) {
		Hooks.rununtilconsumed('keydown', e);
	});
	listener('load', function (e) {
		webapp.header( xlate(appname) );
		xlate.update();
		time && time.start();
		webapp.icons();
		webapp.uponresize();
		view.fahras();
		setupforms();
		if (maxzan && maxzan.badaa) {
			maxzan.badaa(function () {
				Hooks.run('ready', 1);
				backstack.main();
				loadingbox.hidden = 1;
			});
		}
		else {
			Hooks.run('ready', 1);
			$.taxeer('loadingbox', function () {
				loadingbox.hidden = 1;
			});
			backstack.main();
		}
		document.addEventListener('visibilitychange', function () {
			if (document.visibilityState === 'visible') {
				webapp.visible = 1;
				Hooks.run('visible');
			} else {
				webapp.visible = 0;
				Hooks.run('hidden');
			}
		});
		Hooks.run('visible');
	});
})();
var scrollingelement = function () {
	var darajah = backstack.darajah;
	if ([0, 1].includes(darajah)) {
		return document.scrollingElement;
	}
	if (darajah === 2) {
		return sheetui;
	}
	if (darajah === 3) {
		return dialogui;
	}
};
var datepicker = datepicker || 0;
;(function(){
	webapp.taht3nsar = function (text, time, taht) { // below element
		taht = document.activeElement || taht;
		var element = taht3nsar.firstElementChild;
		if (text) {
			if (text instanceof Array) {
				element.dataset.i18n = text[0];
				translate.update(taht3nsar);
			} else {
				delete element.dataset.i18n,
				element.innerText = text;
			}
			taht3nsar.hidden = 0;
			if (taht) {
				var pos = getposition(taht);
				setcss(taht3nsar, 'top', (pos[1]-20)+'px');
				if (taht.dir == 'rtl') {
					setcss(taht3nsar, 'right');
					setcss(taht3nsar, 'left', pos[0]+'px');
				} else {
					setcss(taht3nsar, 'left');
					setcss(taht3nsar, 'right', innerwidth()-pos[0]-taht.offsetWidth+'px');
				}
			}
			$.taxeer('taht3nsar', function () {
				webapp.taht3nsar();
			}, time||3000);
		} else {
			delete element.dataset.i18n,
			element.innerText = '',
			taht3nsar.hidden = 1;
		}
	};
	webapp.scrollto = function (element) {
		var se = scrollingelement();
		se.scrollTop = 0 + (element ? element.offsetTop - (se.clientHeight / 4) : 0);
	};
	webapp.scrolltotop = function () {
		var se = scrollingelement();
		se.scrollTop = 0;
	};
	webapp.scrolltobottom = function () {
		var se = scrollingelement();
		se.scrollTop = se.scrollHeight - se.clientHeight;
		return se.scrollTop;
	};
	webapp.isatop = function () {
		var se = scrollingelement();
		return Math.floor(se.scrollTop) === 0;
	};
	webapp.isatbottom = function () {
		var se = scrollingelement();
		return Math.floor(se.scrollTop) === se.scrollHeight - se.clientHeight;
	};
	hooks.set('closeall', function (darajah) {
		if (darajah === 3) {
			datepicker && datepicker.hide();
			dialog.hide();
			webapp.blur();
		}
		if (darajah === 2) sheet.hide(), webapp.blur();
		if (darajah === 1) view.axad('main'), webapp.blur();
		if (darajah === 0)
			webapp.itlaa3( translate('exiting') ),
			$.taxeer('exit', function () {
				webapp.exit();
			});
	});
	hooks.set('restore', function (darajah) {
		if (darajah === 3) webapp.dimmer(600);
		if (darajah === 2) webapp.dimmer(400);
		if (darajah === 1) webapp.dimmer();
		if (darajah === 0) webapp.header(), webapp.dimmer();
	});
	hooks.set('backstackdialog', function (args) {
		var date = 0;
		if (datepicker && args instanceof HTMLElement) date = 1;
		webapp.dimmer(600);
		softkeys.clear();
		softkeys.set(K.sl, function () {
			if (date) datepicker.okay && datepicker.okay(args);
			else dialog.okay && dialog.okay();
		}, 0, 'icondone');
		softkeys.set(K.sr, function () {
			if (date) datepicker.cancel && datepicker.cancel();
			else dialog.cancel && dialog.cancel();
		}, 0, 'iconclose');
		if (date) datepicker.show(args);
		else dialog.show(args);
	});
	hooks.set('backstacksheet', function (args) {
		webapp.dimmer(400);
		softkeys.clear();
		if (args.callback || args.c) {
			softkeys.set(K.sl, function () {
				sheet.okay && sheet.okay();
			}, 0, 'icondone');
		}
		softkeys.set(K.sr, function () {
			sheet.cancel && sheet.cancel();
		}, 0, 'iconarrowback');
		sheet.show(args);
		softkeys.showhints();
	});
	hooks.set('backstackview', function (name) {
		webapp.dimmer();
		softkeys.clear();
		softkeys.P.empty();
		softkeys.set(K.sr, function () {
			hooks.run('back');
		}, 0, 'iconarrowback');
		view.ishtaghal(name);
		softkeys.showhints();
		return 1; // stop propagation
	});
	hooks.set('backstackmain', function (name) {
		softkeys.clear();
		softkeys.P.empty();
		view.ishtaghal('main');
	});
	hooks.set('ready', function () {
		settings.adaaf('animations', function () {
			var animationsoff = preferences.get(15, 1);
			if (animationsoff) {
				delete document.body.dataset.animations;
				setcss(document.firstElementChild, 'scrollBehavior');
			}
			else {
				document.body.dataset.animations = 1;
				setcss(document.firstElementChild, 'scrollBehavior', 'smooth');
			}
			return [animationsoff ? 'off' : 'on'];
		}, function () {
			if (preferences.get(15, 1)) {
				preferences.set(15, 0);
			}
			else {
				preferences.set(15, 1);
			}
		});
	});
})();
;(function(){
	dimmer.onclick = function () {
		if (dimmertext.innerText == '') backstack.back();
	};
	/*
	* this messes up the nishaat pins list so it needs improvement
	* */
	/*listener('mousewheel', function (e) {
		e.preventDefault();
		if (e.wheelDeltaX >= 1 || e.wheelDeltaX <= -1
		|| e.wheelDeltaY >= 1 || e.wheelDeltaY <= -1) {
			helpers.delayedexec('mousewheel', function () {
				x = 0, y = 0;
			}, 400);
			x += e.wheelDeltaX; y += e.wheelDeltaY;
			var xx = x/60, yy = y/60;
			if (xx > 1 || xx < -1) x = 0;
			if (yy > 1 || yy < -1) y = 0;
			Hooks.rununtilconsumed('mousewheel', {
				type: 'mousewheel',
				x: xx,
				y: yy,
				preventDefault: function () {
					e.preventDefault();
				},
			});
		}
	}, {passive: false});*/
})();
/*
*
* lists have an adapter $.array, it contains the objects present in the dom list
*
* the adapter set/pop functions can be overriden to provide your own logic
*
* the dom list set/pop functions also mutate the adapter
* */
var list;
;(function(){
	'use strict';
	var direction = function () { return document.body.dir; };
	var proto = {
		_muntahaabox: 0,
		_muntahaa: -1,
		murakkaz: 0,
		adapter: 0,
		/* EXPLAIN TODO
		* my hunch is that this is to change idb prop names to dom prop names
		* but im not sure, prolly also used to remap prop names
		* */
		beforeset: 0,
		beforepop: 0,
		uponpastend: function () {
			var yes = focusnext(this.element);
			if (yes && yes.listobject) softkeys.list.basic(yes.listobject);
			return yes;
		},
		uponpaststart: function () {
			var yes = focusprev(this.element);
			if (yes && yes.listobject) softkeys.list.basic(yes.listobject);
			return yes;
		},
		uponend: 0, // when reached list end, do what? return 1 to avoid default
		uponstart: 0,
		bintixaab: 0, // upon selection change [TODO deprecate this]
		uponintaxab: 0, // same as bintixaab [TODO deprecate this]
		on_selection: 0, // 2023 NEW
		uponnavi: 0, // ( type )
		_scroll_on_focus: 1,
		scroll_on_focus: function (yes) {
			this._scroll_on_focus = yes;
			return this;
		},
		moveup: function (uid) {
			uid = uid || (this.axavmuntaxab()||{}).uid;
			var clone = this.get( this.id2num(uid) );
			if (clone) {
				var prev = clone.previousElementSibling;
				if (prev) {
					var prevuid = prev.dataset.uid;
					var obj = this.adapter.get(uid);
					var prevobj = this.adapter.get(prevuid);
					if (obj && prevobj) {
						this.adapter.eawwad(prevuid, uid);
						this.keys.items.insertBefore(clone, prev);
						if (this.gridnum > 1) this.left();
						else this.up();
					}
				}
			}
		},
		movedown: function (uid) {
			uid = uid || (this.axavmuntaxab()||{}).uid;
			var clone = this.get( this.id2num(uid) );
			if (clone) {
				var next = clone.nextElementSibling;
				if (next) {
					var nextuid = next.dataset.uid;
					var obj = this.adapter.get(uid);
					var nextobj = this.adapter.get(nextuid);
					if (obj && nextobj) {
						this.adapter.eawwad(nextuid, uid);
						this.keys.items.insertBefore(next, clone);
						if (this.gridnum > 1) this.right();
						else this.down();
					}
				}
			}
		},
		ixtaf: function () {
			this.element.hidden = 1;
			this.element.parentElement.hidden = 1;
		},
		izhar: function () {
			this.element.hidden = 0;
			this.element.parentElement.hidden = 0;
		},
		uponrakkaz: function (v, active) { // active = visible & view is active
			if (v && active) softkeys.list.basic(this);
		},
		rakkaz: function (v, active) {
			var yes;
			this.murakkaz = !!v;
			if (v && !this.element.dataset.rakkaz) this.element.dataset.rakkaz = 1, yes = 1;
			else if (!v && this.element.dataset.rakkaz) delete this.element.dataset.rakkaz, yes = 1;
			(yes || active) && this.uponrakkaz && this.uponrakkaz(v, active);
		},
		/* TODO
		* improve this navigation to account for mufarraqaat
		* detect if the next item is a mufarraq, skip it.
		* */
		first: function (select) {
			this.selected = select === undefined ? -1 : select;
			var item = this.get(++this.selected);
			while (item) {
				if (item.dataset.listitem) {
					item = 0;
				} else {
					item = this.get(++this.selected)
				}
			}
			this.intaxabscroll( this.intaxabsaamitan() );
			return this;
		},
		last: function () {
			this.selected = this.length();
			var item = this.get(--this.selected);
			while (item) {
				if (item.dataset.listitem) {
					item = 0;
				} else {
					item = this.get(--this.selected)
				}
			}
			this.intaxabscroll( this.intaxabsaamitan() );
			return this;
		},
		message: function (msg) {
			if (msg) {
				this.keys.message.dataset.i18n = msg;
				this.keys.message.parentElement.hidden = 0;
				this.keys.items.hidden = 1;
			} else {
				delete this.keys.message.dataset.i18n;
				this.keys.message.innerText = '';
				this.keys.message.parentElement.hidden = 1;
				this.keys.items.hidden = 0;
			}
			translate.update();
		},
		left: function (e, fake) {
			if (!fake && direction() === 'rtl') return this.right(e, 1);
			var delta = this.gridnum ? 1 : 10;
			this.selected -= delta;
			var item = this.get(this.selected);
			while (item) {
				if (item.dataset.listitem) {
					item = 0;
				} else {
					item = this.get(++this.selected);
				}
			}
			if (this.selected < 0)
				this.first();
			else {
				this.intaxabscroll( this.intaxabsaamitan() );
			}
			return this;
		},
		up: function (e) {
			this.selectedold = this.selected;
			var delta = this.gridnum ? this.gridnum: 1;
			this.selected -= delta;
			var item = this.get(this.selected);
			while (item) {
				if (item.dataset.listitem) {
					item = 0;
				} else {
					item = this.get(--this.selected)
				}
			}
			if (this.selected < 0) {
				var yes;
				if (this.uponpaststart)
					yes = this.uponpaststart(this.selectedold);
				if (yes) {
					this.selected = 0;
					this.intaxabscroll( this.intaxabsaamitan() );
				}
				else this.last();
			} else {
				this.intaxabscroll( this.intaxabsaamitan() );
			}
			return this;
		},
		length: function () {
			if (isfun(this.uponlength)) // custom length algo
				return this.uponlength();
			return this.keys.items.children.length;
		},
		down: function (e) {
			this.selectedold = this.selected;
			var delta = this.gridnum ? this.gridnum: 1;
			this.selected += delta;
			var item = this.get(this.selected);
			while (item) {
				if (item.dataset.listitem) {
					item = 0;
				} else {
					item = this.get(++this.selected)
				}
			}
			if (this.selected > this.length()-1) {
				this.selected = this.length()-1;
				var yes;
				if (this.uponpastend)
					yes = this.uponpastend(this.selectedold);
				if (yes) {
					this.selected = this.length()-1;
					this.intaxabscroll( this.intaxabsaamitan() );
				}
				else this.first(this.gridnum ? this.selected - this.length()-1 : -1);
			} else {
				this.intaxabscroll( this.intaxabsaamitan() );
			}
			return this;
		},
		right: function (e, fake) {
			if (!fake && direction() === 'rtl') return this.left(e, 1);
			var delta = this.gridnum ? 1 : 10;
			this.selected += delta;
			var item = this.get(this.selected);
			while (item) {
				if (item.dataset.listitem) {
					item = 0;
				} else {
					item = this.get(++this.selected);
				}
			}
			if (this.selected > this.length()-1)
				this.last();
			else {
				this.intaxabscroll( this.intaxabsaamitan() );
			}
			return this;
		},
		baidaa: function (id, multiple) { // with multiple it also toggles
			id = id === undefined ? this.selected: id;
			var items = this.keys.items.children, item;
			for (var i in items) {
				if (items.hasOwnProperty(i)) {
					item = items[i];
					if (i == id) {
						if (multiple) {
							if (item.dataset.baidaa) delete item.dataset.baidaa;
						} else item.dataset.baidaa = 1;
					}
					else if (!multiple)
						delete item.dataset.baidaa;
				}
			}
			return item;
		},
		/* id can be a number or string id
		* */
		select: function (id, noscroll, silent, nofocus) {
			id = id === undefined ? this.selected: id;
			var selected = this.intaxabsaamitan(id);
			if (!noscroll) this.intaxabscroll(selected);
			if (selected && !nofocus) {
				markooz() && markooz().blur();
				selected.focus();
				this.rakkaz(1, 1);
			}
			this.selected = id;
			if (this.uponselect && !silent) {
				selected = this.get(this.selected);
				if (selected) {
					selected = this.adapter.get( selected.dataset.uid );
					if (selected) this.uponselect(selected);
				}
			}
			return this;
		},
		intaxabscroll: function (selected) { // select_scroll TODO rename
			if (!this._scroll_on_focus) return;
			if (isundef(selected)) {
				selected = this.get( this.selected );
			}
			if (this.filmakaan) {
				if (selected) scrollintoview(selected);
			} else {
				if (this.selected === 0) webapp.scrollto();
				else if (selected) webapp.scrollto(selected);
			}
		},
		intaxabsaamitan: function (id) { // select silently
			id = id === undefined ? this.selected: id;
			var items = this.keys.items.children, item, selected;
			for (var i in items) {
				if (items.hasOwnProperty(i)) {
					item = items[i];
					if (i == id)
						item.dataset.selected = 1, selected = item;
					else
						delete item.dataset.selected;
				}
			}
			if (isfun(this.on_selection) && selected) {
				var a = this.adapter.get( selected.dataset.uid );
				if (a) this.on_selection(a);
			}
			return selected;
		},
		deselect: function () {
			var old = this.selected;
			this.selected = -1;
			this.intaxabsaamitan();
			this.selected = old;
			this.rakkaz();
			return this;
		},
		/* TODO
		* add a sticky mufarraq compensation function
		* this func should add a px comp
		* use case to add another sticky heading on top of this list
		* */
		mufarraq: function (pixels) {
		},
		eawwad: function (o, uid) { // replace with o at num
			var oldclone = this.get( this.id2num(uid) );
			if (oldclone) {
				var newclone = this.set(o);
				replacewith(oldclone, newclone);
				this.adapter.eawwad(uid, o.uid)
				this.adapter.pop(uid);
			}
		},
		set: function (o, id) { // deprecate the second argument
			/* IMPORTANT
			* id would actually change the html#id
			* so avoid it unless you know what you're doing
			* */
			if (id) $.log('list.set, stop using id, use o.uid instead');
			o = o || {};
			var clone, LV = this, listitem = o._listitem || LV._listitem,
				parent = LV.keys.items;
			if (isnum(LV._muntahaa) && LV._muntahaa > -1 && LV.length() >= LV._muntahaa)
				return; // muntahaa limit hit
			if (id === undefined)
				if (o.uid === undefined) {
					var newuid = LV.length();
					LV.adapter.each(function (c, e) {
						if (newuid <= c.uid) newuid = c.uid+1;
					});
					o.uid = id = newuid;
				}
				else id = o.uid;
			if (LV.idprefix_raw && o.uid !== undefined)
				o.id_dom = LV.idprefix_raw + o.uid;
			if (o.uid) {
				clone = elementbyid( o.id_dom || o.uid );
			}
			if (LV.idprefix_raw && o.ruid) {
				clone = elementbyid( LV.idprefix_raw + o.ruid );
				if (clone) {
					clone.id = o.id_dom;
					setdata(clone, 'uid', o.uid)
				}
			}
			if (LV.beforeset) o = LV.beforeset(o, o.uid);
			if (o.ruid) {
				LV.adapter.pop(o.ruid);
				delete o.ruid;
			}
			LV.adapter.set(o.uid, o);
			if (!clone) {
				/*
				* this is to avoid modifying provided o object
				* it sets dataset on clone
				* */
				var o2 = Object.assign({
					id: o.id_dom, // sets the #id of an element
					data: {
						uid: o.uid,
					},
				}, o);
				clone = templates.get(listitem, parent, o.before || o.awwal, o.id_dom || o.uid)(o2);
				delete o.before;
				delete o.awwal;
				clone.dataset.listitem = 1;
				if (o.mufarraq) clone.dataset.mufarraq = o.mufarraq;
			}
			else {
				var selected = clone.dataset.selected;
				var baidaa = clone.dataset.baidaa;
				templates.set( clone, o, listitem );
				if (selected) clone.dataset.selected = 1;
				if (baidaa) clone.dataset.baidaa = 1;
			}
			if (clone) {
				if (o.mu3allaq) setdata(clone, 'mu3allaq', 1);
				else popdata(clone, 'mu3allaq');
				clone.onclick = function (e) {
					var item = LV.adapter.get( o.uid );
					if (item) {
						LV.uponclick &&
						LV.uponclick( item, e, parseint( LV.id2num(o.uid) ) );
					}
				};
			}
			LV._katabmowdoo3();
			LV.afterset && LV.afterset( o, clone, templates.keys(clone) ); // TODO deprecate
			LV.ba3dihi && LV.ba3dihi( o, clone, templates.keys(clone) ); // TODO deprecate
			LV.after_set && LV.after_set( o, clone, templates.keys(clone) );
			LV.uponadaaf && LV.uponadaaf( LV.length() );
			return clone;
		},
		namoovaj: function (eansarism) {
			this._listitem = eansarism || 'listitem';
			return this;
		},
		listitem: function (elementname) { // namoovaj alternative
			return this.namoovaj(elementname);
		},
		axavmfateeh: function (uid) { // TODO deprecate
			var clone = this.get( this.id2num(uid) );
			if (clone) {
				return templates.mfateeh(clone);
			}
		},
		get_item_keys: function (uid) { // NEW
			return this.axavmfateeh(uid);
		},
		axavmuntaxab: function (uid) { // get [selected] item's adapter object
			return this.axadmuntaxab(uid);
		},
		axadmuntaxab: function (uid) {
			uid = this.num2id( uid || this.selected || 0 );
			if (!isundef(uid)) {
				return this.adapter.get( uid );
			}
			return false;
		},
		axav: function () {
			return this.axad();
		},
		axad: function () { // get baidaa item's adapter object
			var items = this.keys.items.children, item, baidaa;
			for (var i in items) {
				if (items.hasOwnProperty(i)) {
					item = items[i];
					if (item.dataset.baidaa) {
						baidaa = item.dataset.uid;
						break;
					}
				}
			}
			if (!isundef(baidaa)) {
				return this.adapter.get( baidaa );
			}
			return false;
		},
		get_item_element: function (uid) {
			return this.get( isundef(uid) ? this.selected: uid );
		},
		get: function (id) {
			return this.keys.items.children[id];
		},
		pop: function (id) {
			var element, LV = this, uid;
			if (isundef(id)) {
				element = LV.get(LV.selected);
			} else {
				if (LV.idprefix_raw) id = LV.idprefix_raw + id;
				element = elementbyid(id);
			}
			if (element) {
				uid = element.dataset.uid;
				LV.adapter.pop( uid );
				element.remove();
				if (LV.selected) {
					if (LV.selected == LV.length())
					LV.selected = LV.length()-1;
					else
					LV.selected = LV.selected-1;
				}
				LV.intaxabsaamitan();
				LV._katabmowdoo3();
				LV.uponhavaf && LV.uponhavaf( LV.length() );
			}
		},
		popall: function () {
			this.adapter = $.array();
			innertext(this.keys.items, '');
			innertext(this._muntahaabox, '');
			this._katabmowdoo3();
		},
		press: function (key, force) {
			var element = this.get(this.selected);
			if (element) {
				var item = this.adapter.get( element.dataset.uid );
				if (item) {
					(this.element.dataset.rakkaz || force) &&
					this.onpress && this.onpress( item, key, this.selected );
				}
			}
			return this;
		},
		num2id: function (id) {
			var clone = this.get(id || this.selected);
			if (clone) return clone.dataset.uid;
			return false;
		},
		id2num: function (uid) { // return id of item that has this uid
			var cn = this.keys.items.children;
			for (var i in cn) {
				if (cn.hasOwnProperty(i)) {
					if (cn[i].dataset.uid == uid) return i;
				}
			}
			return false;
		},
		grid: function (num) {
			this.gridnum = num;
			if (num) this.element.dataset.grid = num;
			else delete this.element.dataset.grid;
			return this;
		},
		zumrah: function (zumraat) {
			this.element.className = 'list '+zumraat;
			return this;
		},
		freeflow: function (v) {
			if (v) this.grid(), this.element.dataset.freeflow = 1;
			else delete this.element.dataset.freeflow;
			return this;
		},
		hidetext: function (num) {
			if (num) this.element.dataset.hidetext = num;
			else delete this.element.dataset.hidetext;
			return this;
		},
		muntahaa: function (max, muntahaabox) { // maximum
			this._muntahaa = max || -1;
			this._muntahaabox = this.keys.miqyaas || this._muntahaabox;
			if (this._muntahaabox && max > -1) this.keys.miqyaas.hidden = 0;
			return this;
		},
		_katabmowdoo3: function () {
			var LV = this, len = LV.length();
			if (isnum(LV._muntahaa) && LV._muntahaa > -1) {
				innertext(LV._muntahaabox, len+' / '+ LV._muntahaa);
			}
			this.keys.raees.hidden = len ? 0 : 1;
			if (!this._mowdoo3) this.keys.raees.hidden = 1;
		},
		mowdoo3: function (m, i18n) {
			this._mowdoo3 = m || 0;
			if (i18n)
				attribute(this.keys.mowdoo3list, 'data-i18n', m),
				xlate.update(this.element);
			else if (m)
				innertext(this.keys.mowdoo3list, m);
			this._katabmowdoo3();
			return this;
		},
		idprefix: function (id) {
			this.idprefix_raw = id;
			return this;
		},
		bahac: function (bahacbox) {
			var LV = this;
			/* EXPLAIN
			* connects this list to bahacbox, bahacbox.onchange is listened on
			* with a $.taxeer
			* list.uponpaststart is also connected to bahacbox.focus
			* bahacbox.onpastend is prolly auto handled by softkeys
			* */
			if (bahacbox instanceof HTMLInputElement) {
				LV.uponpaststart = function () {
					bahacbox.focus();
					return 1;
				};
				bahacbox.oninput = function () {
					$.taxeer('listbahac', function () {
						LV.uponbahac && LV.uponbahac( bahacbox.value.trim() )
					}, 250);
				};
				bahacbox.onfocus = function () {
					LV.rakkaz();
				};
			}
			return LV;
		},
	};
	list = function (element) {
		var LV = Object.create(proto);
		element.dataset.focus = 'list';
		element.listobject = LV;
		LV.filmakaan = element.dataset.filmakaan;
		LV.element = templates.get( 'list', element )();
		LV.listitem();
		LV.adapter = $.array();
		LV.keys = templates.keys( LV.element );
		LV.selected = 0;
		LV.muntahaa();
		LV.mowdoo3();
		/* IMPORTANT EXPLAIN
		* this is for use cases with a single list that is focussed by default
		* for multiple lists in a focus group, chain .rakkaz() to unset this
		* before setting uponrakkaz
		* */
		LV.uponclick = function (i, e, uid) {
			/* call these before triggering press events in case press handler
			* calls pop or set and that changes this.selected
			* */
			LV.beforepress && LV.beforepress(i, e, uid);
			LV.intaxabsaamitan( uid ); // select without trig event
			var yes = LV.selected == uid && LV.element.dataset.rakkaz == 1;
			LV.selected = uid;
			LV.rakkaz(1, 1);
			if (yes) LV.press(K.en);
		};
		return LV;
	};
})();
/* @TODO
* add .tasdeeq, which adds having to press back/esc twice to exit with taxeer
* also make the exit button red when in taxeer
* */
var backstack;
;(function(){
	var s,
	storage = {
		3 : {}, // searches, dialogs, menus
		2 : {}, // settings, ...
		1 : {}, // lists, editors, renderuis, ...
		0 : {}, // main, ...
	},
	l = function () {
		var darajah = 0;
		if (s.dialog) darajah = 3;
		else if (s.sheet) darajah = 2;
		else if (s.view) darajah = 1;
		else darajah = 0;
		backstack.darajah = darajah;
		return darajah;
	},
	savefocus = function () { // save focus on each darajah, restore automatically
		backstack.set('backstackfocus', document.activeElement);
	},
	restorefocus = function () {
		var active = backstack.get('backstackfocus');
		active && active.focus && active.focus();
	};
	/*
	* this is the mudeer standalone platform
	* there's no browser history stack or back+forward buttons to worry about
	* so we can take full control
	* no need to make it compatible with almudeer since that's for PWAs
	* here we have way more freedom so let's capitalize on it
	*
	* this basically replaces the browser backstack
	*
	* the backstack event is fired on all changes
	* */
	backstack = {
		darajah: 0,
		states: {
			dialog: 0, // searches, dialogs, menus
			sheet: 0, // settings, ...
			view: 0, // lists, editors, renderuis, ...
			main: 0, // main, ...
		},
		set: function (key, value) {
			storage[backstack.darajah][key] = value;
		},
		get: function (key) {
			if (key) return storage[backstack.darajah][key] ;
			else return storage[backstack.darajah] ;
		},
		dialog: function (args) {
			savefocus();
			s.dialog = args || 1;
			l();
			storage[backstack.darajah] = {};
			Hooks.rununtilconsumed('backstackdialog', args);
			Hooks.run('backstack', backstack.darajah);
		},
		sheet: function (args) {
			savefocus();
			s.sheet = args || 1;
			l();
			storage[backstack.darajah] = {};
			Hooks.rununtilconsumed('backstacksheet', args);
			Hooks.run('backstack', backstack.darajah);
		},
		view: function (args) {
			savefocus();
			s.view = args;
			l();
			storage[backstack.darajah] = {};
			Hooks.rununtilconsumed('backstackview', args);
			Hooks.run('backstack', backstack.darajah);
		},
		main: function (args) {
			savefocus();
			s.main = args || 1;
			l();
			storage[backstack.darajah] = {};
			Hooks.rununtilconsumed('backstackmain', args);
			Hooks.run('backstack', backstack.darajah);
		},
		back: function () {
			/*
			* if any dialog is open, close them first, then sheets, then mains
			* */
			if (s.dialog)
				s.dialog = 0, l(), Hooks.run('closeall', 3);
			else if (s.sheet)
				s.sheet = 0, l(), Hooks.run('closeall', 2);
			else if (s.view)
				s.view = 0, s.main = 1, l(), Hooks.run('closeall', 1);
			else
				s.main = 0, l(), Hooks.run('closeall', 0);
			/*
			* then see what is left open and refire its event with stored args
			* */
			Hooks.run('restore', backstack.darajah);
			Hooks.run('backstack', backstack.darajah);
			restorefocus();
		},
	};
	Hooks.set('back', function () {
		backstack.back();
	});
	Hooks.set('dialog', function (args) {
		backstack.dialog(args);
	});
	Hooks.set('sheet', function (args) {
		backstack.sheet(args);
	});
	Hooks.set('view', function (args) {
		backstack.view(args);
	});
	Hooks.set('main', function (args) {
		backstack.main(args);
	});
	s = backstack.states;
})();
/*
	Files - 02 Aug 2016
		- 11 Nov 2016
		- 22 May 2018 add sync retrieval support
*/
var Files;
;(function () {
	'use strict';
	Files = {
		data: {},
		cache: {},
		fs: false,
		path: false,
		basepath: false,
		s: false,
		init: function () {
			if (Files.fs === false) {
				if (typeof require === 'function') { // use node fs
					try { Files.fs = require('fs-extra'); }
					catch (e) { Files.fs = require('fs'); }
					Files.path = require('path');
					Files.s = Files.path.sep;
					var __dirname = '';
						if (typeof process === 'object') {
							__dirname = process.execPath.match(/(.*)\/.*$/)[1];
						}
					Files.basepath = __dirname;
				} else { // use h5 file api
				}
			}
		},
		exists: {
			file: function (path) {
				var yes = 1;
				try {
					Files.get.file(path);
				} catch (e) {
					if (e.code !== 'EISDIR') yes = 0;
				}
				return yes;
			},
			folder: function () {
				var yes = 1;
				try {
					Files.get.folder(path);
				} catch (e) {
					yes = 0;
				}
				return yes;
			},
		},
		stats: function (path, cb) {
			if (typeof cb === 'function') {
				Files.fs.lstat(path, cb);
				return true;
			} else {
				return Files.fs.lstatSync(path);
			}
		},
		realpath: function (path, cache, cb) {
			if (typeof cache === 'function') {
				cb = cache;
				cache = {};
			}
			if (typeof cb === 'function') {
				Files.fs.realpath(path, cache, cb);
				return true;
			} else {
				return Files.fs.realpathSync(path, cache);
			}
		},
		/*
		* if cb is not a func, uses sync methods
		*/
		get: {
			file: function (path, cb, options) {
				if (typeof cb === 'function') {
					var innercb = function (err, data) {
						cb(data, err); // data, err
					}
					Files.fs.readFile(path, innercb);
					return true;
				} else {
					return Files.fs.readFileSync(path);
				}
				return false;
			},
			folder: function (path, cb, options) {
				if (typeof cb === 'function') {
					var innercb = function (err, data) {
						cb(data);
						if (err) throw err;
					}
					Files.fs.readdir(path, innercb);
					return true;
				} else {
					return Files.fs.readdirSync(path);
				}
				return false;
			}
		},
		set: {
			symlink: function (srcpath, dstpath, cb) {
				if (typeof cb === 'function') {
					var innercb = function (b, c) {
						cb(c);
						if (b) throw b;
					}
					Files.fs.symlink(srcpath, dstpath, innercb);
					return true;
				} else {
					try {
						Files.fs.symlinkSync(srcpath, dstpath);
					} catch (e) {
					}
					return true;
				}
			},
			file: function (path, cb, data) {
				if (typeof cb === 'function') {
					var innercb = function (b, c) {
						cb(c);
						if (b) throw b;
					}
					if (data === undefined) {
						Files.get.file(path, function (data, err) {
							if (err) {
								Files.fs.writeFile(path, '', innercb);
							} else {
								innercb(null);
							}
						});
					} else {
						Files.fs.writeFile(path, data, innercb);
					}
					return true;
				} else {
					return Files.fs.writeFileSync(path, cb);
				}
				return false;
			},
			folder: function (path, mask, cb) {
				if (typeof mask === 'function') {
					cb = mask;
					mask = '0777';
				}
				if (typeof cb === 'function') {
					Files.fs.mkdir(path, mask, function(err) {
						if (err) {
							if (err.code == 'EEXIST') cb(null);
							else cb(err);
						} else cb(null);
					});
				} else {
					mask = mask || '0777';
					try {
						Files.fs.mkdirSync(path, mask)
					} catch (e) {
					}
					return true;
				}
			}
		},
		move: function (oldPath, newPath, callback) {
			function copyunlink () {
				var readStream = Files.fs.createReadStream(oldPath);
				var writeStream = Files.fs.createWriteStream(newPath);
				readStream.on('error', callback);
				writeStream.on('error', callback);
				readStream.on('close', function () {
					Files.fs.unlink(oldPath, callback);
				});
				readStream.pipe(writeStream);
			}
			Files.fs.rename(oldPath, newPath, function (err) {
				if (err) {
					if (err.code === 'EXDEV') {
						copyunlink();
					} else {
						callback(err);
					}
					return;
				}
				callback();
			});
		},
		copy: function (oldPath, newPath, callback) {
			if (typeof callback === 'function') {
				Files.fs.copyFile(oldPath, newPath, function (err) {
					if (err) {
						callback(err);
						return;
					}
					callback();
				});
			} else {
				Files.fs.copyFileSync(oldPath, newPath);
			}
		},
		pop: {
			file: function (path, cb) {
				if (typeof cb === 'function') {
					Files.fs.unlink(path, cb);
				} else {
					Files.fs.unlinkSync(path);
				}
				return true;
			},
			folder: function (path, cb, rf) {
				if (typeof cb === 'function') {
					if (rf)
						Files.fs.remove(path, cb);
					else
						Files.fs.rmdir(path, cb);
				} else {
					if (rf)
						Files.fs.removeSync(path);
					else
						Files.fs.rmdirSync(path);
				}
				return true;
			}
		}
	};
	Files.init();
	module.exports = Files;
})();
var preferences;
;(function(){
	'use strict';
	/* LEGEND preferences local storage
	* @ last sync time
	* @0 offline since
	* 1 key
	* 2 uid (account)
	* 3 ruid
	* 4 list views cache
	* 5 is menu hidden, 1 yes
	* 6 initial sync done?
	* 7 softkeys help
	* 8 sound off
	* 9 largetext
	* 10 default perms for different account types
	* 11 permissions of current account
	* 12 temp unit C F K
	* 13 meanings
	* 15 animations off
	* 16 softkeystouch dpad
	* 17 pagerasmaa
	* 18 webapptouchdir
	* 19 theme
	* 20 username
	* 21 display name
	* 22 account type
	* 23 transparency
	* 24 24 hour
	* 25 lang
	* 26 calendar type hijri gregorian
	* 27 digit comma separation
	* 30 app uid
	* 40 app title
	* 50 app address
	* 60 app phone
	* 70 billing on Central
	* 80 default currency
	* 81 latitude
	* 82 longitude
	* 90 sign in required
	* 91 location required
	* 100 remember viewed articles
	* 110 frequency of used dashboard items
	* 120 home view
	* 130 units (SI, imperial)
	* 140 font
	* 150 global newform toggle
	* 160 features
	* 170 conf
	* 1100 umoor what tag(s) to show?
	* */
	preferences = {
		popall: function () {
			return localStorage.clear();
		},
		set: function (name, value) {
			return localStorage.setItem(name, value);
		},
		get: function (name, json) {
			if (json) {
				try {
					return JSON.parse( localStorage.getItem(name) );
				} catch (ignore) {
				}
				return {};
			} else
				return localStorage.getItem(name);
		},
		pop: function (name) {
			return localStorage.removeItem(name);
		},
		/*
		* for json data, fetches stored data, parses as json, gives you a nice
		* object to work with in a callback, you make the changes and just
		* return the result, it saves the object back
		* */
		change: function (name, callback) {
			if (typeof callback === 'function') {
				var data;
				try {
					data = preferences.get(name);
					data = JSON.parse( data );
				} catch (ignore) {
				}
				if (!(data instanceof Object))
					data = {};
				data = callback(data);
				preferences.set(name, JSON.stringify( data ) );
			}
		},
	};
	var buildnum = preferences.get('#', 1);
	if ( buildnum != 482 ) {
		preferences.pop(3); // ruid
		preferences.pop('@'); // last sync time
		preferences.pop(4); // list view cache
		preferences.pop(6); // initial sync done
	}
	preferences.set('#', 482);
	Hooks.set('ready', function () {
		if ( buildnum != 482 ) {
			$.taxeer('seeghahjadeedah', function () {
				Hooks.run('seeghahjadeedah', buildnum);
			}, 2000);
		}
	});
	$.log.s( 482 );
})();
var activity;
;(function(){
	activity = {
		jaame3: function (name, type, key, value) { // generic
			if ('MozActivity' in window) {
				var data = {
					type: type,
				};
				data[key] = value;
				new MozActivity({
					name: name,
					data: data,
				});
			}
		},
		ittasal: function (num) { // call/telephone (verb)
			if (num) activity.jaame3('dial', 'webtelephony/number', 'number', num);
		},
		arsal: function (num) { // send (verb) risaalah (noun) message
			if (num) activity.jaame3('new', 'websms/sms', 'number', num);
		},
		abrad: function (address) { // (e)mail (verb) breed (noun)
			if (address) activity.jaame3('new', 'mail', 'url', 'mailto:'+address);
		},
	};
})();
var view;
;(function(){
	var index = {};
	view = {
		zaahir: function (name) {
			return view.axav() === name;
		},
		is_active: function (name) {
			return this.zaahir(name);
		},
		mfateeh: function (name) { // keys
			var element = index[name];
			if (element) return templates.keys(element);
			return false;
		},
		ishtaghal: function (name) {
			var level = backstack.level ,
				element = view.axad(name) ,
				keys = templates.keys(element) ;
			Hooks.run('viewready', {
				name: name,
				element: element,
				keys: keys,
				level: level,
			});
		},
		axav: function (name, onlyelement) { // get
			if (!name) {
				for (var i in index) {
					if (!index[i].hidden) {
						return i;
					}
				}
				return;
			}
			var view;
			for (var i in index) {
				if (i == name)
					view = index[i];
				else if (!onlyelement)
					index[i].hidden = 1;
			}
			if (view) {
				if (!onlyelement) view.hidden = 0;
				return view;
			}
		},
		axad: function (name, onlyelement) { // get, deprecated
			view.axav(name, onlyelement);
		},
		fahras: function () { // index
			var elements = document.body.querySelectorAll('[data-view]');
			for (var i in elements) {
				if ( elements.hasOwnProperty(i) && elements[i].dataset.view ) {
					if (elements[i].dataset.view !== 'main')
						elements[i].hidden = 1;
					index[ elements[i].dataset.view ] = elements[i];
				}
			}
			return index;
		},
	};
	view.dom_keys = view.mfateeh;
})();
var pager;
;(function(){
	var cn = pagermowjoodah.childNodes, zaahir = 1,
		pagerasmaa = 1, settingsuid, saveto = 17;
	var resize = function () {
		setcss(pagerui, 'height', pagermowjoodah.offsetHeight+'px');
	};
	pager = {
		ixtaf: function () {
			pagerui.hidden = 1;
			delete document.body.dataset.pager;
			zaahir = 0;
		},
		izhar: function () {
			pagerui.hidden = 0;
			document.body.dataset.pager = pagerasmaa ? 2 : 1;
			zaahir = 1;
		},
		ixtafasmaa: function () {
			for (var i = 0; i < cn.length; ++i) {
				var keys = templates.keys(cn[i]);
				keys.name.hidden = 1;
			}
			if (zaahir) document.body.dataset.pager = 1;
			else delete document.body.dataset.pager;
			resize();
		},
		izharasmaa: function () {
			for (var i = 0; i < cn.length; ++i) {
				var keys = templates.keys(cn[i]);
				keys.name.hidden = 0;
			}
			if (zaahir) document.body.dataset.pager = 2;
			else delete document.body.dataset.pager;
			resize();
		},
		mowjood: function (ism) {
			for (var i = 0; i < cn.length; ++i) {
				if (cn[i].dataset.ism == ism)
					return cn[i];
			}
			return false;
		},
		matn: function (ism, matn) {
			var o = pager.mowjood(ism);
			if (o) {
				var keys = templates.keys(o);
				if (matn !== undefined) keys.label.hidden = 0;
				else keys.label.hidden = 1;
				innertext(keys.label, matn);
			}
		},
		intaxab: function (ism, ishtaghal) {
			for (var i = 0; i < cn.length; ++i) {
				if (cn[i].dataset.ism == ism) {
					attribute(cn[i], 'selected', 1);
					if (ishtaghal) cn[i].click(), scrollintoview(cn[i]);
				} else {
					attribute(cn[i], 'selected', 0);
				}
			}
		},
		muntaxab: function () { // selected
			for (var i = 0; i < cn.length; ++i) {
				if (getattribute(cn[i], 'selected')) return cn[i];
			}
			return false;
		},
		yameen: function () {
			var m = pager.muntaxab();
			if (m && zaahir && backstack.darajah <= 1) {
				var sibl = nextsibling(m);
				if (sibl) pager.intaxab(sibl.dataset.ism, 1);
			}
		},
		shimaal: function () {
			var m = pager.muntaxab();
			if (m && zaahir && backstack.darajah <= 1) {
				var sibl = prevsibling(m);
				if (sibl) pager.intaxab(sibl.dataset.ism, 1);
			}
		},
		safaa: function () {
			innertext(pagermowjoodah, '');
		},
		jama3: function (ism, eqonah, ismzaahiri) {
			var clone = pager.mowjood(ism);
			if (clone) {
				templates.set(clone, {
					name: ismzaahiri || ism,
					icon: eqonah,
				}, 'pagerzir');
			} else {
				clone = templates.get('pagerzir', pagermowjoodah)({
					name: ismzaahiri || ism,
					icon: eqonah,
				});
			}
			var keys = templates.keys(clone);
			keys.name.hidden = !pagerasmaa;
			clone.dataset.ism = ism;
			clone.dataset.ismzaahiri = ismzaahiri || ism;
			clone.onclick = function () {
				if (ism == 'main') {
					if (backstack.darajah > 0) backstack.back(); else backstack.main();
				} else {
					Hooks.run('view', ism);
				}
			};
			resize();
		},
	};
	Hooks.set('backstackview', function (args) {
		if (pager.mowjood(backstack.states.view)) {
			pager.intaxab(backstack.states.view);
		}
	});
	Hooks.set('restore', function (darajah) {
		if (darajah === 0 && backstack.states.main) {
			pager.intaxab('main');
		}
	});
	Hooks.set('softkey', function (args) {
		var a = args[0], e = args[1];
		var yes;
		if (e.ctrlKey) {
			if (a == K.pd) yes = 1;
			if (a == K.pu) yes = 1;
		}
		if (e.ctrlKey && e.type == 'keyup') {
			if (a == K.pd) pager.yameen(), yes = 1;
			if (a == K.pu) pager.shimaal(), yes = 1;
		}
		if (yes) return 1;
	});
	Hooks.set('ready', function (darajah) {
		if (preferences) pagerasmaa = preferences.get(saveto, 1) || pagerasmaa;
		settingsuid = settings.adaaf('pagerasmaa', function () {
			pagerasmaa = preferences.get(saveto, 1);
			if (pagerasmaa) pager.izharasmaa(); else pager.ixtafasmaa();
			return [pagerasmaa ? 'on' : 'off' ];
		}, function () {
			preferences.set(saveto, preferences.get(saveto, 1) ? 0 : 1);
		});
		pager.izhar();
	});
})();
var time;
;(function(){
	var val = {}, timeout, started,
		monthnames = ('january february march april may june july '
					+ 'august september october november december').split(' '),
		weekdays = 'sunday monday tuesday wednesday thursday friday saturday'.split(' ');
	time = function (parent) {
		var items = (parent||document).querySelectorAll('[data-time]'),
			is24 = preferences.get(24, 1);
		for (var i in items) {
			if (items.hasOwnProperty(i)) {
				var e = items[i];
				if (e) {
					var dataset = e.dataset;
					var datetime = dataset.time;
					var by = dataset.by;
					datetime = parseInt(datetime);
					if (e.dataset.deadline) {
						if (time.now() < datetime)
							delete e.dataset.past, e.dataset.future = 1;
						else
							delete e.dataset.future, e.dataset.past = 1;
					} else
						delete e.dataset.future, delete e.dataset.past;
					if (by) {
						time.relativetime(0, items[i]);
					}
					else if (datetime !== '') {
						if (datetime !== 'false') {
							e.setAttribute('title',
								time.formatdate(
									new Date(datetime),
									'Do MMM YYYY, ' + (is24 ? 'HH:mm' : 'hh:mma')
								)
							);
						}
						e.innerHTML = time.relativetime(datetime, 0, e.dataset);
					}
				}
			}
		}
	};
	time.monthname = function (value) { //starts at zero
		return monthnames[value];
	};
	time.miqdaar = function (delta, secondary) { // to mins, hrs, days, etc
		var fuzzy = '',
			minute = 60,
			hour = minute * 60,
			day = hour * 24,
			week = day * 7,
			month = day * 30,
			year = month * 12;
		if (delta < minute) {
			fuzzy = delta + ' ' + xlate('secondsago');
		}
		else if (delta < 2 * minute) {
			fuzzy = parsefloat(delta / minute, 1) + xlate('minute');
		}
		else if (delta < hour) {
			fuzzy = parsefloat(delta / minute, 1) + xlate('minutesago');
		}
		else if (Math.floor(delta / hour) == 1) {
			fuzzy = 1 + xlate('hourago');
			var mins = Math.floor( (delta % hour) / minute );
			if (mins) fuzzy += ' ' + parsefloat(mins, 1) + xlate('minutesago');
		}
		else if (delta < day) {
			fuzzy = Math.floor(delta / hour) + ' ' + xlate('hoursago');
			var mins = Math.floor( (delta % hour) / minute );
			if (mins) fuzzy += ' ' + mins + xlate('minutesago');
		}
		else if (delta >= day && delta < month) {
			var days = Math.floor(delta / day);
			fuzzy = days === 1 ? 1 + xlate('dayago') : days + xlate('daysago');
			var hours = Math.floor( (delta % day) / hour );
			if (hours)
				fuzzy += ' ' + (hours === 1 ?
								hours + xlate('hourago')
								: hours + xlate('hoursago'));
		}
		else if (delta > month && delta < year) {
			var months = Math.floor(delta / month);
			fuzzy = months === 1 ? months + xlate('monthago')
					: months + xlate('monthsago');
			var days = Math.floor( (delta % month) / day );
			if (days) fuzzy += ' ' + (days === 1 ? days + xlate('dayago')
									: days + xlate('daysago'));
		}
		else if (delta > year) {
			var years = Math.floor(delta / year);
			fuzzy = years === 1 ? years + xlate('yearago')
					: years + xlate('yearsago');
			var months = Math.floor( (delta % year) / month );
			if (months) fuzzy += ' ' + (months === 1 ? months + xlate('monthago')
					: months + xlate('monthsago'));
		}
		return fuzzy;
	};
	time.days = function (days) {
		days = new Date().getTime() - new Date(days).getTime();
		days = days / time.day;
		return days;
	};
	time.fuzzytime = function (date, muxtasar) {
		date = date || +new Date;
		var delta = Math.round( (+new Date - date) / 1000),
			future;
		if (delta < 0) {
			future = 1;
			delta *= -1;
		}
		var minute = 60,
			hour = minute * 60,
			day = hour * 24,
			week = day * 7,
			month = day * 30,
			year = month * 12;
		var fuzzy;
		if (!future && delta < 15) {
			if (muxtasar)
			fuzzy = delta + translate('sseconds');
			else
			fuzzy = translate('justnow');
		}
		else if (delta < minute) {
			if (muxtasar)
			fuzzy = delta + translate('sseconds');
			else
			fuzzy = delta + ' ' + translate('secondsago');
		}
		else if (delta < 2 * minute) {
			if (muxtasar)
			fuzzy = 1 + translate('sminutes');
			else
			fuzzy = translate('aminuteago');
		}
		else if (delta < hour) {
			if (muxtasar)
			fuzzy = Math.floor(delta / minute) + translate('sminutes');
			else
			fuzzy = Math.floor(delta / minute) + ' ' + translate('minutesago');
		}
		else if (Math.floor(delta / hour) == 1) {
			fuzzy = 1 + translate('hourago');
			var mins = Math.floor( (delta % hour) / minute );
			if (mins) {
				if (muxtasar)
				fuzzy = ' ' + mins + translate('sminutes');
				else
				fuzzy += ' ' + mins + translate('minutesago');
			}
		}
		else if (delta < day) {
			fuzzy = Math.floor(delta / hour) + translate('hoursago');
			var mins = Math.floor( (delta % hour) / minute );
			if (mins) fuzzy += ' ' + mins + translate('minutesago');
		}
		else if (delta >= day && delta < month) {
			var days = Math.floor(delta / day);
			fuzzy = days === 1 ? 1 + translate('dayago') : days + translate('daysago');
			var hours = Math.floor( (delta % day) / hour );
			if (hours)
				fuzzy += ' ' + (hours === 1 ?
								hours + translate('hourago')
								: hours + translate('hoursago'));
		}
		else if (delta > month && delta < year) {
			var months = Math.floor(delta / month);
			fuzzy = months === 1 ? months + translate('monthago')
					: months + translate('monthsago');
			var days = Math.floor( (delta % month) / day );
			if (days) fuzzy += ' ' + (days === 1 ? days + translate('dayago')
									: days + translate('daysago'));
		}
		else if (delta > year) {
			var years = Math.floor(delta / year);
			fuzzy = years === 1 ? years + translate('yearago')
					: years + translate('yearsago');
			var months = Math.floor( (delta % year) / month );
			if (months) fuzzy += ' ' + (months === 1 ? months + translate('monthago')
					: months + translate('monthsago'));
		}
		if (future) fuzzy = translate('infuture') +' '+ fuzzy;
		return translate.a3daad(fuzzy);
	};
	time.relativetime = function (datetime, e, dataset) {
		if (datetime === 'false') return translate('alongtime');
		var today = time.striptime().getTime(),
			yesterday = time.traversebydays(today, -1),
			tomorrow = time.traversebydays(today, 1),
			text = '',
			is24 = preferences.get(24, 1);
		if (e) {
			dataset = e.dataset;
			var datetime = parseInt(dataset.time),
				minus = dataset.minus,
				by = dataset.by;
			delete dataset.i18n;
			if (minus !== undefined) datetime = time.now() - datetime;
			if (by === 'age') {
				innerhtml(e, time.fuzzytime(datetime));
			} else
			if (by === 'days') {
				var days = time.days(datetime);
				if (days < 0.1) days = days.toFixed(2);
				else if (days < 1) days = days.toFixed(1);
				else days = Math.floor(days);
				innerhtml(e, days + ' ' + translate('daysago'));
			} else
			if (by === 'hourly') {
				innerhtml(e, time.formatdate( new Date(datetime), (is24 ? 'HH:mm' : 'hh:mma') ));
			} else
			if (by === 'yearly') {
				innerhtml(e, time.formatdate( new Date(datetime), 'YYYY' ));
			} else
			if (by === 'monthly') {
				innerhtml(e, time.formatdate( new Date(datetime), 'MMMM YYYY' ));
			} else
			if (by === 'daily') {
				innerhtml(e, time.formatdate( new Date(datetime), 'Do MMMM YYYY' ));
			} else
			if (by === 'minute') {
				innerhtml(e, time.formatdate( new Date(datetime), is24 ? 'HH:mm' : 'hh:mma' ));
			} else {
				if (datetime === today)
					dataset.i18n = 'today';
				else if (datetime === yesterday)
					dataset.i18n = 'yesterday';
				else if (datetime === tomorrow)
					dataset.i18n = 'tomorrow';
				else
					innerhtml(e, time.formatdate( new Date(datetime), 'Do MMM YYYY' ));
			}
		} else {
			var at = translate('@');
			var c = translate(','); // unicode commas
			var months = ( ( time.now() - datetime ) / time.month );
			var days = ( ( time.now() - datetime ) / time.day );
			if (days <= 1) {
				if (dataset && dataset.muxtasar == '3')
					text += time.fuzzytime( datetime, 1 );
				else if (dataset && dataset.muxtasar == '2')
					text += time.fuzzytime( datetime );
				else {
					if (dataset && !dataset.muxtasar)
						text += time.fuzzytime( datetime ) + ' '+at+' ';
					text += time.formatdate( new Date(datetime), (is24 ? 'HH:mm' : 'hh:mma') );
				}
			} else if (days > 1 && days <= 4) {
				text = time.formatdate( new Date(datetime), 'dddd'+c+' '+(is24 ? 'HH:mm' : 'hh:mma') );
			} else if (months < 2) {
				text = time.formatdate( new Date(datetime), 'Do MMM'+c+' '+(is24 ? 'HH:mm' : 'hh:mma') );
			} else {
				text = time.formatdate( new Date(datetime), 'Do MMM YYYY'+c+' '+(is24 ? 'HH:mm' : 'hh:mma') );
			}
			if (e) innerhtml(e, text);
		}
		return text;
	};
	time._calcs = {};
	time._replacements = [];
	time._uid = 0;
	time.now = function () { return new Date().getTime(); };
	time.zero = function (s) { return s < 10 ? '0'+s : s };
	time.year = 31557600000 ;
	time.month = 2629800000 ;
	time.day = 87660000 ;
	time.hour = 3652500 ;
	time.minute = 60875 ;
	time.second = 1000 ;
	time.milli = 1 ;
	time.striptime = function (_time) {
		var parsed = new Date(_time||new Date().getTime());
		parsed = (parsed.getDate()) + ' ' + monthnames[parsed.getMonth()] + ' ' + parsed.getFullYear() + ' GMT';
		parsed = new Date(parsed);
		if (parsed.toString() === 'Invalid Date') parsed = false;
		return parsed;
	};
	/*
	* both int values
	* */
	time.traversebydays = function (intdate, num) {
		intdate = new Date( intdate );
		intdate.setDate( intdate.getDate() + num );
		return intdate.getTime();
	};
	time.realdatereplace = function (s) {
		if ( s === ('YYYY') ) { return val._year }
		if ( s === ('YY') ) { return val._shortyear < 10 ? '0'+val._shortyear: val._shortyear }
		if ( s === ('Y') ) { return val._shortyear }
		if ( s === ('HH') ) { return val._hours < 10 ? '0'+val._hours: val._hours }
		if ( s === ('H') ) { return val._hours }
		if ( s === ('hh') ) { return val._hours12 < 10 ? '0'+val._hours12: val._hours12 }
		if ( s === ('h') ) { return val._hours12 }
		if ( s === ('mm') ) { return val._minutes < 10 ? '0'+val._minutes: val._minutes }
		if ( s === ('m') ) { return val._minutes }
		if ( s === ('ss') ) { return val._seconds < 10 ? '0'+val._seconds: val._seconds }
		if ( s === ('s') ) { return val._seconds }
		if ( s === ('a') ) { return val._ampm }
		if ( s === ('MMMM') ) { return val._monthname }
		if ( s === ('MMM') ) { return (val._monthname||'').substr(0, 3) }
		if ( s === ('MM') ) { return val._month < 10 ? '0'+val._month: val._month }
		if ( s === ('M') ) { return val._month }
		if ( s === ('dddd') ) { return val._dayname }
		if ( s === ('ddd') ) { return (val._dayname||'').substr(0, 3) }
		if ( s === ('DD') ) { return val._day < 10 ? '0'+val._day: val._day }
		if ( s === ('Do') ) { return val._day+val._o }
		if ( s === ('D') ) { return val._day }
	};
	time.replacewithuid = function () {
		time._replacements[time._uid] = time.realdatereplace(arguments[0]);
		++time._uid;
		return '%{'+time._uid+'}';
	};
	time.formatdate = function (date, format) {
		format = format || 'MM/DD/YYYY h:mma';
		time._uid = 0;
		time._replacements = [];
		val._year = date.getFullYear()+'' ,
		val._shortyear = parseInt(val._year.substr(-2)) ,
		val._month = date.getMonth()+1 ,
		val._monthname = monthnames[val._month-1] ,
		val._day = date.getDate() ,
		val._dayname = weekdays[date.getDay()] ,
		val._hours = date.getHours() ,
		val._hours12 = val._hours % 12 ,
		val._hours12 = val._hours12 < 1 ? 12 : val._hours12 , // the hour '0' should be '12'
		val._minutes = date.getMinutes() ,
		val._seconds = date.getSeconds() ,
		val._ampm = val._hours >= 12 ? translate('pm') : translate('am') ;
		val._monthname = translate(val._monthname);
		val._dayname = translate(val._dayname);
		val._o = translate('th');
		if (val._day === 1 || val._day === 21 || val._day === 31) val._o = translate('st');
		if (val._day === 2 || val._day === 22) val._o = translate('nd');
		if (val._day === 3 || val._day === 23) val._o = translate('rd');
		var datetimestring = format;
			datetimestring = datetimestring
				.replace(/YYYY/g, time.replacewithuid)
				.replace(/YY/g , time.replacewithuid)
				.replace(/Y/g , time.replacewithuid)
				.replace(/HH/g , time.replacewithuid)
				.replace(/H/g , time.replacewithuid)
				.replace(/hh/g , time.replacewithuid)
				.replace(/h/g , time.replacewithuid)
				.replace(/mm/g , time.replacewithuid)
				.replace(/m/g , time.replacewithuid)
				.replace(/ss/g , time.replacewithuid)
				.replace(/s/g , time.replacewithuid)
				.replace(/a/g , time.replacewithuid)
				.replace(/MMMM/g, time.replacewithuid)
				.replace(/MMM/g , time.replacewithuid)
				.replace(/MM/g , time.replacewithuid)
				.replace(/M/g , time.replacewithuid)
				.replace(/dddd/g, time.replacewithuid)
				.replace(/ddd/g , time.replacewithuid)
				.replace(/DD/g , time.replacewithuid)
				.replace(/Do/g , time.replacewithuid)
				.replace(/D/g , time.replacewithuid)
				;
		var matches;
		datetimestring = datetimestring.replace(/\%\{(\d)*\}/gm, function () {
			return time._replacements[ arguments[1]-1 ];
		});
		return datetimestring;
	};
	time.start = function (parent) {
		started = 1;
		clearTimeout(timeout);
		timeout = setTimeout(function () {
			time(parent);
			if (started) time.start();
		}, 10*1000);
	};
	time.stop = function () {
		clearTimeout(timeout);
		started = 0;
	};
	Hooks.set('visible', function () {
		time.start();
	});
	Hooks.set('hidden', function () {
		time.stop();
	});
	Hooks.set('widgets', function (parent) {
		if (parent) time(parent);
	});
	Hooks.set('ready', function () {
	});
})();
var helpers;
;(function(){
	'use strict';
	var val = {};
	helpers = {
		/*
		* detect language direction, 0-ltr, 1-rtl, 2-mixed
		* */
		detectdirection: function (text) {
			text = text || '';
			var ltr = text.match(/[a-zA-Z]+/),
				rtl = text.match(/[ا-ي]+/);
			if (ltr)
				return 0;
			if (rtl)
				return 1;
			return 2;
		},
		getrawitem: function (url, cb) {
			var img = new Image();
			img.onload = function () {
				cb(img.width, img.height);
			};
			img.src = url;
		},
		/*
		* if no x, just return current x
		* if height less than
		* */
		smartscroll: function (x) {
			var fec = document.firstElementChild;
			if (x === undefined)
				return fec.scrollTop;
			else {
				if (!allowscroll) return;
				var pct = x/fec.scrollHeight;
				if (window.innerHeight >= 640) {
					if (pct > 60)
						fec.scrollTop = x+160;
					if (pct < 40)
						fec.scrollTop = x-160;
				}
			}
		},
		enc: encodeURIComponent,
		dec: decodeURIComponent,
		encp: encodeURI,
		decp: decodeURI,
		getperm: function (perm) {
			return navigator.permissions.query({
			name: perm
			});
		},
		/*
		* for checking account perms just like on the server
		* */
		hasperm: function (perm) {
			if ((preferences.get(11) || '').split(' ').includes( perm ))
				return true;
			return false;
		},
		/*
		* assumes num is bytes
		* converts to biggers units when needed
		* always returns strings
		* */
		sizeunits: function (num) {
			if (typeof num === 'number') {
				if (num >= (1024 * 1024 * 1024 * 1024))
					return (num / (1024 * 1024 * 1024 * 1024)).toFixed(1) + 'TB';
				if (num >= (1024 * 1024 * 1024))
					return (num / (1024 * 1024 * 1024)).toFixed(1) + 'GB';
				if (num >= (1024 * 1024))
					return (num / (1024 * 1024)).toFixed(1) + 'MB';
				if (num >= 1024)
					return (num / 1024).toFixed() + 'KB';
			}
			return '0';
		},
		/*
		* to help display countdowns
		* precise up to days
		* accepts values in seconds
		* */
		timeunits: function (num) {
			if (typeof num === 'number') {
				if (num < 0)
					num = -num;
				if (num >= (60 * 60 * 24))
					return (num / (60 * 60 * 24)).toFixed(2) + 'd';
				else if (num >= (60 * 60))
					return (num / (60 * 60)).toFixed(2) + 'h';
				else if (num >= (60))
					return (num / 60).toFixed(0) + 'm ' + (num % 60).toFixed(0) + 's';
				else
					return (num).toFixed(0) + 's';
			}
			return '0';
		},
		/*
		* checks if childarray is in parentarray
		* */
		isarrayinarray: function (childarray, parentarray) {
			var yes;
			childarray = childarray.join(' ');
			parentarray.forEach(function (item) {
				if (item instanceof Array)
				if ( item instanceof Array && item.join(' ') === childarray )
					yes = true;
			});
			return yes || false;
		},
		/*
		* return true if no modifier keys are held down
		* */
		nomods: function (e) {
			if (!e.ctrlKey && !e.altKey && !e.shiftKey)
				return true;
			return false;
		},
		/*
		* if is at this uri (pathname), return bool
		* uses startswith unless full is true
		* */
		isat: function (uri, full) {
			if (full)
				return location.pathname === uri;
			else
				return location.pathname.startsWith( uri );
		},
		/*
		* takes a function with a unique name, if a function with this name is
		* provided again, it delays the exec of that function by a few ms
		*
		* calling without fn will just clear the timeout on that id
		* */
		delayedexecfns: {},
		delayedexec: function (id, fn, customdelay, nofurtherdelay) {
			customdelay = customdelay || 0.1 * 1000;
			if ( nofurtherdelay && helpers.delayedexecfns[id] )
				return;
			if ( helpers.delayedexecfns[id] ) {
				clearTimeout( helpers.delayedexecfns[id] );
				helpers.delayedexecfns[id] = undefined;
			}
			if ( typeof fn === 'function' ) {
				helpers.delayedexecfns[id] = setTimeout( function () {
					fn();
					helpers.delayedexecfns[id] = undefined;
				}, customdelay );
			}
		},
		wordspermins: function (wordcount) {
			if (wordcount < 1)
				return '0 ' + xlate('minute');
			var mins = ( wordcount / 150 ).toFixed(1);
			if (mins > 1)
				return mins + ' ' + xlate('minutes');
			else
				return mins + ' ' + xlate('minute');
		},
		alias: function (string, length) {
			string = string || '';
			length = length || 255;
			if (string.length === 0) return '';
			return string.substr(0, length)
						.replace(/\%/g, ' pct' )
						.replace(/\@/g, ' at ' )
						.replace(/\&/g, ' and ' )
						.replace(/[$-\-/:-?\{\}-~!"^_`\[\]@#]/g, '-' ) // symbols
						.replace(/[^.\d\wa-zA-Z0-9ا-ےÄäÜüÖößЀ-ҁҊ-ӿÇçĞğŞşIıÜüﻙ]+/g, '-' ) // most alphanums
						.replace(/\s[\s]+/g, '-' )
						.replace(/[\s]+/g, '-' )
						.replace(/^[\-]+/g, '' )
						.replace(/[\-]+$/g, '' )
						.replace(/\-\-/g, '-' )
						.replace(/\.\-/g, '.' )
						.replace(/\-\./g, '.' )
						.replace(/^\./g, '' )
						.replace(/\.$/g, '' )
						.trim()
						.toLowerCase();
		},
		countwords: function (text) {
			text = text || '';
			text = text.replace(/\n\n/g, ' ');
			text = text.split(' ');
			var count = 0;
			text.forEach(function (word) {
				if (word.length > 3 && word.length < 35) {
					++count;
				}
			});
			return count;
		},
		year: 31557600000 ,
		month: 2629800000 ,
		day: 87660000 ,
		hour: 3652500 ,
		minute: 60875 ,
		second: 1000 ,
		milli: 1 ,
		striptime: function (time) {
			var parsed = new Date(time||new Date().getTime());
			parsed = (parsed.getDate()) + ' ' + helpers.monthnames[parsed.getMonth()] + ' ' + parsed.getFullYear() + ' GMT';
			parsed = new Date(parsed);
			if (parsed.toString() === 'Invalid Date') parsed = false;
			return parsed;
		},
		stripday: function (time) {
			var parsed = new Date(time||new Date().getTime());
			parsed = helpers.monthnames[parsed.getMonth()] + ' ' + parsed.getFullYear() + ' GMT';
			parsed = new Date(parsed);
			if (parsed.toString() === 'Invalid Date') parsed = false;
			return parsed;
		},
		stripmonth: function (time) {
			var parsed = new Date(time||new Date().getTime());
			parsed = parsed.getFullYear() + ' GMT';
			parsed = new Date(parsed);
			if (parsed.toString() === 'Invalid Date') parsed = false;
			return parsed;
		},
		/*
		* both int values
		* */
		traversebydays: function (intdate, num) {
			intdate = new Date( intdate );
			intdate.setDate( intdate.getDate() + num );
			return intdate.getTime();
		},
		traversebymonths: function (intdate, num) {
			intdate = new Date( intdate );
			intdate.setMonth( intdate.getMonth() + num );
			return intdate.getTime();
		},
		traversebyyears: function (intdate, num) {
			intdate = new Date( intdate );
			intdate.setFullYear( intdate.getFullYear() + num );
			return intdate.getTime();
		},
		toymd: function (intdate) {
			intdate = parseInt(intdate);
			var day = new Date(intdate);
			var month = helpers.monthnames[ day.getMonth() ] || ''.substr(0, 3);
			var ymd = day.getFullYear()+'-'+month+'-'+day.getDate();
			return ymd;
		},
		daysin : function (month, year) {
			return new Date(year, parseInt(month)+1, 0).getDate();
		},
		copy: function (e) {
			e.select();
			try {
				var successful = document.execCommand('copy');
			} catch (err) {
				$.log.s('copy-error');
			}
		},
		now: function () { return new Date().getTime(); },
		changelanguage: function (language) {
			i18n.language = language || 'en';
			if (['ur', 'ar'].includes(i18n.language)) {
				document.body.dir = 'rtl';
			} else {
				document.body.dir = 'ltr';
			}
			appui.applyi18n();
			dom.applyi18n();
			settingsuilanguage.value = language;
			helpers.updatedates();
			helpers.updatei18n();
		},
		translate: function (alias, raw) {
			var str = '';
			var language = i18n.language || 'en';
			if (language && i18n[language]) {
				if (i18n[language][alias])
					str = i18n[language][alias];
			}
			if (str === '') {
				if (i18n['en'][alias])
					str = i18n['en'][alias];
			}
			if (raw && str === '') return false;
			if (str === '') str = alias || '';
			return '' + str + '';
		},
		/*test: function () {
			var a = [];
			a.push (
				'\n', helpers.relativetime( new Date().getTime() - ( 1000 * 1 ) ), // a sec
				'\n', helpers.relativetime( new Date().getTime() - ( 1000 * 30 ) ), // 30 sec
				'\n', helpers.relativetime( new Date().getTime() - ( 1000 * 60 ) ), // a min
				'\n', helpers.relativetime( new Date().getTime() - ( 1000 * 60 * 2 ) ), // 2 min
				'\n', helpers.relativetime( new Date().getTime() - ( 1000 * 60 * 5 ) ), // 5 min
				'\n', helpers.relativetime( new Date().getTime() - ( 1000 * 60 * 60 ) ), // an hour
				'\n', helpers.relativetime( new Date().getTime() - ( 1000 * 60 * 60 * 2 ) ), // 2 hours
				'\n', helpers.relativetime( new Date().getTime() - ( 1000 * 60 * 60 * 5) ), // 5 hours
				'\n', helpers.relativetime( new Date().getTime() - ( 1000 * 60 * 60 * 12) ), // 12 hours
				'\n', helpers.relativetime( new Date().getTime() - ( 1000 * 60 * 60 * 24 ) ), // a day
				'\n', helpers.relativetime( new Date().getTime() - ( 1000 * 60 * 60 * 24 * 2) ), // 2 days
				'\n', helpers.relativetime( new Date().getTime() - ( 1000 * 60 * 60 * 24 * 5) ), // 5 days
				'\n', helpers.relativetime( new Date().getTime() - ( 1000 * 60 * 60 * 24 * 8) ), // 8 days
				'\n', helpers.relativetime( new Date().getTime() - ( 1000 * 60 * 60 * 24 * 15) ), // 15 days
				'\n', helpers.relativetime( new Date().getTime() - ( 1000 * 60 * 60 * 24 * 30) ), // a month
				'\n', helpers.relativetime( new Date().getTime() - ( 1000 * 60 * 60 * 24 * 30 * 2) ), // 2 months
				'\n', helpers.relativetime( new Date().getTime() - ( 1000 * 60 * 60 * 24 * 30 * 5) ), // 5 months
				'\n', helpers.relativetime( new Date().getTime() - ( 1000 * 60 * 60 * 24 * 30 * 8) ), // 8 months
				'\n', helpers.relativetime( new Date().getTime() - ( 1000 * 60 * 60 * 24 * 30 * 12) ), // a year
				'\n', helpers.relativetime( new Date().getTime() - ( 1000 * 60 * 60 * 24 * 30 * 12 * 2) ), // 2 years
				'\n', helpers.relativetime( new Date().getTime() - ( 1000 * 60 * 60 * 24 * 30 * 12 * 3) ), // 3 years
				'\n', helpers.relativetime( new Date().getTime() - ( 1000 * 60 * 60 * 24 * 30 * 12 * 5) ) // 5 years
			);
			console.log( a.join('') );
		},*/
		relativetime: function (datetime, e) {
			if (datetime === 'false') return helpers.translate('alongtime');
			var today = helpers.striptime().getTime(),
				yesterday = helpers.traversebydays(today, -1),
				tomorrow = helpers.traversebydays(today, 1),
				text = '',
				is24 = preferences.get('24', 1);
			if (e) {
				var dataset = e.dataset,
					relativedays = dataset.relativedays,
					by = dataset.by;
				delete dataset.i18n;
				relativedays = parseInt(relativedays);
				if (by === 'yearly') {
					e.innerHTML = helpers.formatdate( new Date(relativedays), 'YYYY' );
				} else if (by === 'monthly') {
					e.innerHTML = helpers.formatdate( new Date(relativedays), 'MMMM YYYY' );
				} else if (by === 'daily') {
					/* TODO urgent
					* implement this:
					* today @ 05:00
					* tomorrow @ 05:00
					* yesterday @ 05:00
					* 25th Oct (if current year)
					* 25th Oct 2019
					* */
					e.innerHTML = helpers.formatdate( new Date(relativedays), 'Do MMMM YYYY' );
				} else if (by === 'minute') {
					e.innerHTML = helpers.formatdate( new Date(relativedays), is24 ? 'HH:mm' : 'hh:mma' );
				} else {
					if (relativedays === today)
						dataset.i18n = 'today';
					else if (relativedays === yesterday)
						dataset.i18n = 'yesterday';
					else if (relativedays === tomorrow)
						dataset.i18n = 'tomorrow';
					else
						e.innerHTML = helpers.formatdate( new Date(relativedays), 'Do MMM YYYY' );
				}
			} else {
				var at = helpers.translate('@');
				var c = helpers.translate(','); // unicode commas
				var months = ( ( helpers.now() - datetime ) / helpers.month );
				var days = ( ( helpers.now() - datetime ) / helpers.day );
				if (days <= 1) {
					text = helpers.fuzzytime( datetime ) + ' '+at+' ' + helpers.formatdate( new Date(datetime), (is24 ? 'HH:mm' : 'hh:mma') );
				} else if (days > 1 && days <= 4) {
					text = helpers.formatdate( new Date(datetime), 'dddd'+c+' '+(is24 ? 'HH:mm' : 'hh:mma') );
				} else if (months < 2) {
					text = helpers.formatdate( new Date(datetime), 'Do MMM'+c+' '+(is24 ? 'HH:mm' : 'hh:mma') );
				} else {
					text = helpers.formatdate( new Date(datetime), 'Do MMM YYYY'+c+' '+(is24 ? 'HH:mm' : 'hh:mma') );
				}
				if (e) e.innerHTML = text;
			}
			return text;
		},
		_calcs: {},
		_replacements: [],
		_uid: 0,
		realdatereplace: function (s) {
			if ( s === ('YYYY') ) { return val._year }
			if ( s === ('YY') ) { return val._shortyear < 10 ? '0'+val._shortyear: val._shortyear }
			if ( s === ('Y') ) { return val._shortyear }
			if ( s === ('HH') ) { return val._hours < 10 ? '0'+val._hours: val._hours }
			if ( s === ('H') ) { return val._hours }
			if ( s === ('hh') ) { return val._hours12 < 10 ? '0'+val._hours12: val._hours12 }
			if ( s === ('h') ) { return val._hours12 }
			if ( s === ('mm') ) { return val._minutes < 10 ? '0'+val._minutes: val._minutes }
			if ( s === ('m') ) { return val._minutes }
			if ( s === ('ss') ) { return val._seconds < 10 ? '0'+val._seconds: val._seconds }
			if ( s === ('s') ) { return val._seconds }
			if ( s === ('a') ) { return val._ampm }
			if ( s === ('MMMM') ) { return val._monthname }
			if ( s === ('MMM') ) { return (val._monthname||'').substr(0, 3) }
			if ( s === ('MM') ) { return val._month < 10 ? '0'+val._month: val._month }
			if ( s === ('M') ) { return val._month }
			if ( s === ('dddd') ) { return val._dayname }
			if ( s === ('ddd') ) { return (val._dayname||'').substr(0, 3) }
			if ( s === ('DD') ) { return val._day < 10 ? '0'+val._day: val._day }
			if ( s === ('Do') ) { return val._day+val._o }
			if ( s === ('D') ) { return val._day }
		},
		replacewithuid: function () {
			helpers._replacements[helpers._uid] = helpers.realdatereplace(arguments[0]);
			++helpers._uid;
			return '%{'+helpers._uid+'}';
		},
		monthnames: 'january february march april may june july august september october november december'.split(' '),
		weekdays: 'sunday monday tuesday wednesday thursday friday saturday'.split(' '),
		formatdate: function (date, format) {
			format = format || 'MM/DD/YYYY h:mma';
			helpers._uid = 0;
			helpers._replacements = [];
			val._year = date.getFullYear()+'' ,
			val._shortyear = parseInt(val._year.substr(-2)) ,
			val._month = date.getMonth()+1 ,
			val._monthname = helpers.monthnames[val._month-1] ,
			val._day = date.getDate() ,
			val._dayname = helpers.weekdays[date.getDay()] ,
			val._hours = date.getHours() ,
			val._hours12 = val._hours % 12 ,
			val._hours12 = val._hours12 < 1 ? 12 : val._hours12 , // the hour '0' should be '12'
			val._minutes = date.getMinutes() ,
			val._seconds = date.getSeconds() ,
			val._ampm = val._hours >= 12 ? helpers.translate('pm') : helpers.translate('am') ;
			val._monthname = helpers.translate(val._monthname);
			val._dayname = helpers.translate(val._dayname);
			val._o = helpers.translate('th');
			if (val._day === 1 || val._day === 21 || val._day === 31) val._o = helpers.translate('st');
			if (val._day === 2 || val._day === 22) val._o = helpers.translate('nd');
			if (val._day === 3 || val._day === 23) val._o = helpers.translate('rd');
			var datetimestring = format;
				datetimestring = datetimestring
					.replace(/YYYY/g, helpers.replacewithuid)
					.replace(/YY/g , helpers.replacewithuid)
					.replace(/Y/g , helpers.replacewithuid)
					.replace(/HH/g , helpers.replacewithuid)
					.replace(/H/g , helpers.replacewithuid)
					.replace(/hh/g , helpers.replacewithuid)
					.replace(/h/g , helpers.replacewithuid)
					.replace(/mm/g , helpers.replacewithuid)
					.replace(/m/g , helpers.replacewithuid)
					.replace(/ss/g , helpers.replacewithuid)
					.replace(/s/g , helpers.replacewithuid)
					.replace(/a/g , helpers.replacewithuid)
					.replace(/MMMM/g, helpers.replacewithuid)
					.replace(/MMM/g , helpers.replacewithuid)
					.replace(/MM/g , helpers.replacewithuid)
					.replace(/M/g , helpers.replacewithuid)
					.replace(/dddd/g, helpers.replacewithuid)
					.replace(/ddd/g , helpers.replacewithuid)
					.replace(/DD/g , helpers.replacewithuid)
					.replace(/Do/g , helpers.replacewithuid)
					.replace(/D/g , helpers.replacewithuid)
					;
			var matches;
			datetimestring = datetimestring.replace(/\%\{(\d)*\}/gm, function () {
				return helpers._replacements[ arguments[1]-1 ];
			});
			return datetimestring;
		},
		updatei18n: function (parent) {
			var items = (parent||document).querySelectorAll('[data-i18n]');
			for (var i in items) {
				if (items.hasOwnProperty(i)) {
					var e = items[i];
					if (e) {
						var dataset = e.dataset;
						var i18n = dataset.i18n;
						if (i18n !== '') {
							var translation = helpers.translate(i18n);
							if (e instanceof HTMLInputElement
							|| e instanceof HTMLSelectElement
							|| e instanceof HTMLTextAreaElement) {
								e.placeholder = translation;
							} else {
								e.innerText = translation;
							}
						}
					}
				}
			}
		},
		updatedates: function (parent) {
			var items = (parent||document).querySelectorAll('[data-datetime]'),
				is24 = preferences.get('24', 1);
			for (var i in items) {
				if (items.hasOwnProperty(i)) {
					var e = items[i];
					if (e) {
						var dataset = e.dataset;
						var datetime = dataset.datetime;
						if (datetime !== '') {
							if (datetime !== 'false') {
								datetime = parseInt(datetime);
								e.setAttribute('title', helpers.formatdate( new Date(datetime), 'Do MMM YYYY, ' + (is24 ? 'HH:mm' : 'hh:mma') ) );
							}
							e.innerHTML = helpers.relativetime(datetime);
						}
					}
				}
			}
			var items = (parent||document).querySelectorAll('[data-relativedays]');
			for (var i in items) {
				if (items.hasOwnProperty(i))
					helpers.relativetime(0, items[i]);
			}
		},
		fuzzytime: function (date) {
			date = date || +new Date;
			var delta = Math.round( (+new Date - date) / 1000);
			var minute = 60,
				hour = minute * 60,
				day = hour * 24,
				week = day * 7,
				month = day * 30,
				year = month * 12;
			var fuzzy;
			if (delta < 30) {
				fuzzy = helpers.translate('justnow');
			} else if (delta < minute) {
				fuzzy = delta + ' ' + helpers.translate('secondsago');
			} else if (delta < 2 * minute) {
				fuzzy = helpers.translate('aminuteago');
			} else if (delta < hour) {
				fuzzy = Math.floor(delta / minute) + ' ' + helpers.translate('minutesago');
			} else if (Math.floor(delta / hour) == 1) {
				fuzzy = helpers.translate('anhourago');
			} else if (delta < day) {
				fuzzy = Math.floor(delta / hour) + ' ' + helpers.translate('hoursago');
			} else if (delta < day * 2) {
				fuzzy = helpers.translate('yesterday');
			} else if (delta >= day * 2 && delta < month) {
				fuzzy = Math.floor(delta / day) + ' ' + helpers.translate('daysago');
			} else if (delta == month) {
				fuzzy = helpers.translate('lastmonth');
			} else if (delta > month && delta < year) {
				fuzzy = Math.floor(delta / month) + ' ' + helpers.translate('monthsago');
			} else if (delta == year) {
				fuzzy = helpers.translate('lastyear');
			} else if (delta > year) {
				fuzzy = Math.floor(delta / year) + ' ' + helpers.translate('yearsago');
			}
			return fuzzy;
		},
		init: function () {
			setInterval(function () {
				helpers.updatedates();
			}, 30000);
		}
	}
})();
var settings, currentad;
;(function(){
	var settingsitems = [
		/*['quality', 0, function () {
			Hooks.run('sheet', {
				name: 'quality',
				title: translate('quality'),
			});
		}],*/
		['reportbug', 0, function () {
			activity.abrad(myemail+'?subject='+appname+' bug '+482);
		}],
		['requestfeat', 0, function () {
			activity.abrad(myemail+'?subject='+appname+' request '+482);
		}],
		['timeformat', function () {
			var is24 = preferences.get(24, 1);
			return [is24 ? 'hours24' : 'hours12'];
		}, function () {
			var is24 = preferences.get(24, 1);
			if (is24) preferences.set(24, 0);
			else preferences.set(24, 1);
		}],
		['calendar', function () {
			var isgregorian = preferences.get(26, 1);
			return [isgregorian ? 'gregorian' : 'hijri'];
		}, function () {
			var isgregorian = preferences.get(26, 1);
			if (isgregorian) preferences.set(26, 0);
			else preferences.set(26, 1);
		}],
		['transparency', function () {
			var isit = preferences.get(23, 1);
			webapp.transparency();
			return [isit ? 'on' : 'off'];
		}, function () {
			var isit = preferences.get(23, 1);
			if (isit) { preferences.set(23, 0); }
			else { preferences.set(23, 1); }
		}],
		['largetext', function () {
			var largetext = preferences.get(9, 1);
			webapp.textsize();
			return [largetext ? 'on' : 'off'];
		}, function () {
			preferences.set(9, preferences.get(9, 1) ? 0 : 1);
		}]
	], settingslist, myemail = 'hxorasani@gmail.com', keys;
	settings = {
		adaaf: function (name, getvalue, onpress) { // add
			settingsitems.push([name, getvalue, onpress]);
			settings.jaddad(settingsitems.length-1);
			return settingsitems.length-1;
		},
		axad: function (uid) { // get
			return settingsitems[uid];
		},
		jaddad: function (uid) { // update
			var item = settings.axad(uid);
			if (item) {
				var body = typeof item[1] === 'function' ? item[1]() : undefined;
				var obj = {
					uid: uid,
				};
				obj.index = uid;
				obj.titlei18n = item[0];
				if (body instanceof Array)
					obj.bodyi18n = body[0];
				else
					obj.body = body;
				if (settingslist) {
					settingslist.set(obj);
					if (backstack.states.view === 'settings')
						settingslist.select();
				}
			}
		},
	};
	Hooks.set('ready', function () {
		keys = view.mfateeh('settings');
		settingslist = list( keys.list ).idprefix('settings');
		settingslist.beforeset = function (item, id) {
			return item;
		};
		settingsitems.forEach(function (item, i) {
			settings.jaddad(i);
		});
		settingslist.onpress = function (item, key, uid) {
			if (item) {
				settings.axad(item.index)[2]();
				settings.jaddad(item.index);
			}
		};
		if (0 && 'getKaiAd' in window)
		getKaiAd({
			publisher: '7e2cfabf-ef5c-46eb-8e57-c20f3d6a1171',
			test: 0 ? 0 : 1,
			timeout: 60*1000,
			h: 48,
			w: 240,
			container: keys.ad,
			onerror: function (e) { $.log.e(e); },
			onready: function (ad) {
				currentad = ad;
				ad.call('display', {
				});
			}
		});
	});
	Hooks.set('viewready', function (args) {
		switch (args.name) {
			case 'main':
				softkeys.set('9', function () {
					Hooks.run('view', 'settings');
				}, '9', 'iconsettings');
				break;
			case 'settings':
				if (pager) {
					pager.intaxab('settings', 1);
					webapp.header();
				} else { // since pager already shows context
					webapp.header( ['settings'] );
				}
				softkeys.list.basic(settingslist);
				softkeys.set(K.en, function () {
					settingslist.press(K.en);
				});
				softkeys.set(K.bs, function () {
					backstack.back();
				});
				if (0 && 'getKaiAd' in window)
				softkeys.set('0', function () {
					if (currentad) currentad.call && currentad.call('click');
				}, translate('openad'), false);
				/* TEST
				* this can be automated by giving a function to view.?set?
				*
				* view should autocall this function on restore
				* it can find functions by looping
				* */
				settingslist.select();
				break;
		}
	});
})();
var translate, taraajim = taraajim || {}, xlate;
;(function(){
	'use strict';
	var
	languages = Object.keys(taraajim),
	uglynames = {
		en: 'en',
		ar: 'ar',
		ur: 'ur',
	},
	defaultlang = 'en',
	donumbers = function (translation) {
		var language = translate.get();
		if (['ur', 'ar'].includes(language)) {
			return translation .replace(/0/g, '٠')
								.replace(/1/g, '١')
								.replace(/2/g, '٢')
								.replace(/3/g, '٣')
								.replace(/4/g, '٤')
								.replace(/5/g, '٥')
								.replace(/6/g, '٦')
								.replace(/7/g, '٧')
								.replace(/8/g, '٨')
								.replace(/9/g, '٩')
								.replace(/%/g, '٪');
		} else {
			return translation;
		}
	},
	dodirection = function (parent, selector) {
		if (selector === undefined) selector = '[data-dir]';
		var items = (parent||document).querySelectorAll(selector);
		for (var i in items) {
			if (items.hasOwnProperty(i)) {
				var e = items[i];
				if (e) {
					var dir;
					if (e instanceof HTMLInputElement
					|| e instanceof HTMLTextAreaElement) {
						dir = translate.direction(e.value);
						e.dir = dir === 1 ? 'rtl' : 'ltr';
						listener(e, ['focus', 'input'], function () {
							dir = translate.direction(this.value);
							this.dir = dir === 1 ? 'rtl' : 'ltr';
						});
					} else {
						if (e.dataset.dir === 'rtl') { // force rtl
							dir = 'rtl';
						} else if (e.dataset.dir === 'ltr') { // force ltr
							dir = 'ltr';
						} else {
							dir = translate.direction(e.innerText);
						}
						if (e.dataset.dir == 'parent') { // apply to parent
							e.parentElement.dir = dir === 1 ? 'rtl' : 'ltr';
						} else {
							e.dir = dir === 1 ? 'rtl' : 'ltr';
						}
					}
				}
			}
		}
	};
	translate = function (alias) {
		var str = '';
		var language = translate.get();
		if (language && taraajim[language]) {
			if (taraajim[language][alias])
				str = taraajim[language][alias];
		}
		if (str === '') {
			if (taraajim['en'] && taraajim['en'][alias])
				str = taraajim['en'][alias];
		}
		var args = arguments;
		if (args.length > 1) {
			for (var i = 0; i < args.length; ++i) {
				str = str.replace( new RegExp('\%'+(i+1), 'g'), args[i+1] );
			}
		}
		if (str === '') str = alias || '';
		str = donumbers(str);
		return '' + str;
	};
	translate.get = function () {
		return preferences.get(translate.saveto) || defaultlang;
	};
	translate.set = function (language) {
		preferences.set(translate.saveto, language);
	};
	translate.saveto = 25;
	translate.change = function (language) {
		language = language || defaultlang;
		if (['ur', 'ar'].includes(language)) {
			document.body.dir = 'rtl';
		} else {
			document.body.dir = 'ltr';
		}
		Hooks && Hooks.run('translateupdate');
		translate.set(language);
		translate.update();
	};
	translate.a3daad = function (str) {
		return donumbers(str);
	};
	translate.update = function (parent) {
		var items = (parent||document).querySelectorAll('[data-i18n]');
		for (var i in items) {
			if (items.hasOwnProperty(i)) {
				var e = items[i];
				if (e) {
					var dataset = e.dataset;
					var i18n = dataset.i18n;
					if (i18n !== '') {
						var translation = translate(i18n);
						translation = donumbers(translation);
						if (e instanceof HTMLInputElement
						|| e instanceof HTMLSelectElement
						|| e instanceof HTMLTextAreaElement) {
							e.placeholder = translation;
						} else {
							e.innerText = translation;
						}
					}
				}
			}
		}
		dodirection(parent);
		dodirection(parent, 'input');
		dodirection(parent, 'textarea');
	};
	/*
	* detect language direction, 0-ltr, 1-rtl, 2-mixed
	* */
	translate.direction = function (text) {
		text = text || '';
		var ltr = text.match(/[a-zA-Z]+/),
			rtl = text.match(/[ا-ي]+/);
		if (rtl) return 1;
		if (ltr) return 0;
		return 2;
	};
	Hooks.set('ready', function () {
		translate.change( translate.get() );
		settings.adaaf('language', function () {
			var language = translate.get();
			if (language) return translate( uglynames[language]||'' );
		}, function () {
			var language = translate.get();
			var index = languages.indexOf( language );
			if (index < languages.length-1)
				++index;
			else
				index = 0;
			translate.change(languages[index]);
		});
	});
	xlate = translate;
})();
/*
* props ending in $h use innerhtml
* ... $t use [i18n]
* */
var templates, namaavij;
;(function(){
	var index = {};
	templates = {
		mfateeh: function (element) {
			return templates.keys(element);
		},
		keys: function (element) {
			if (!(element instanceof HTMLElement)) return;
			var keys = {};
			var otherviews = element.querySelectorAll('[data-id]');
			for (var i in otherviews) {
				if ( otherviews.hasOwnProperty(i) ) {
					if (otherviews[i].dataset)
						keys[ otherviews[i].dataset.id ] = otherviews[i];
				}
			}
			return keys;
		},
		set: function (clone, o, template) {
			var keys = templates.keys(clone);
			o = o || {};
			if (o.hidden) clone.hidden = 1;
			if (o.id) clone.id = o.id;
			if (o.classes) clone.className = o.classes;
			if (o.status == 1) clone.dataset.selected = 1, clone.disabled = 0;
			else if (o.status == 2) clone.disabled = 1, delete clone.dataset.selected;
			else clone.disabled = 0, delete clone.dataset.selected;
			if (o.data)
			for (var i in o.data) {
				if (o.data[i] !== undefined)
					clone.dataset[i] = o.data[i];
				else
					delete clone.dataset[i];
			}
			if (o.onclick) clone.onclick = o.onclick;
			for (var i in keys) {
				/* TODO document why this is so
				* this doesn't let you specify i18n in templates :(
				* cleanup previous mess from i18n
				* */
				if (isundef(o[i+'$t'])) {
					if (keys[i].dataset.i18n) {
						innertext(keys[i], '');
						delete keys[i].dataset.i18n;
					}
				}
				if ( !isundef(o[i]) || !isundef(o[i+'$h']) || !isundef(o[i+'$t']) ) {
					if (o[i] == 'ixtaf') {
						keys[i].hidden = 1;
					} else
					if (o[i] == 'izhar') {
						keys[i].hidden = 0;
					} else
					if (keys[i] instanceof HTMLInputElement) {
						keys[i].value = o[i];
					} else
					if (keys[i] instanceof HTMLImageElement) {
						if (typeof o[i] === 'string' && o[i].length) {
							if (o[i].startsWith('app://'))
								keys[i].src = o[i];
							else
								keys[i].src = 'file://'+o[i];
							keys[i].hidden = 0;
						} else {
							keys[i].hidden = 1;
						}
					} else
					if ( ['titlehours', 'titledays', 'titletime',
							'time', 'timeshow', 'days', 'waqt']
						.includes(i) ) { // dataset.time...
						if (o[i] !== undefined) {
							keys[i].dataset.time = o[i];
						}
						if (o.deadline)
							keys[i].dataset.deadline = 1;
						else
							delete keys[i].dataset.deadline;
					} else // improve how this is handled
					if (['titlei18n', 'bodyi18n'].includes(i)) {
						if (o[i]) {
							keys[i].hidden = 0;
							keys[i].dataset.i18n = o[i];
						} else {
							keys[i].hidden = 1;
							delete keys[i].dataset.i18n;
							keys[i].innerHTML = '';
						}
					} else // improve how this is handled
					if (['titlehtml', 'bodyhtml', 'bodyshowhtml']
						.includes(i)) { // raw HTML mode
						if (o[i]) {
							keys[i].hidden = 0;
							keys[i].innerHTML = o[i];
						} else {
							keys[i].hidden = 1;
							keys[i].innerHTML = '';
						}
					} else
					if (['icon', 'eqonah'].includes(i)) { // create SVG inside
						if (typeof o[i] === 'string' && o[i].length) {
							keys[i].hidden = 0;
							var e = eqonaat.querySelector('#'+o[i]);
							if (e)
								keys[i].innerHTML = '<svg viewBox="0 0 48 48">'+e.cloneNode(1).innerHTML+'</svg>';
						} else {
							keys[i].hidden = 1;
							keys[i].innerHTML = '';
						}
					} else {
						if (keys[i].hidden) keys[i].hidden = 0;
						var html = o[i+'$h'], trjm = o[i+'$t'];
						if (!isundef(html)) {
							innerhtml(keys[i], html);
						} else if (!isundef(trjm)) {
							keys[i].dataset.i18n = trjm;
						} else {
							innertext(keys[i], o[i]);
						}
					}
				}
			}
			Hooks.rununtilconsumed('templateset', [clone, o, keys, template]);
			translate && translate.update(clone.parentElement);
			time && time(clone.parentElement);
			datepicker && datepicker.fahras(clone.parentElement);
			return clone;
		},
		/*
		* you can pass either an element or a name that's already indexed
		*
		* if only element is specified, then its clone is returned
		*
		* if parent is also specified then it inserts the clone under parent
		* and returns a function that accepts {options} to setup the clone
		*
		* before can be a child under parent to insert before, else appends
		*
		* id can be used to reuse old elements
		* */
		get: function (element, parent, before, id) {
			if (isstr(element)) element = index[element];
			if (!(element instanceof HTMLElement)) return false;
			var clone, template;
			if (id) {
				clone = document.getElementById(id);
				if (clone) before = clone.nextElementSibling;
			}
			if (!clone)
				clone = element.cloneNode(true),
				template = clone.dataset.template,
				delete clone.dataset.template,
				clone.hidden = 0;
			if (parent) {
				if (before instanceof HTMLElement) {
					parent.insertBefore(clone, before);
				} else if (before) {
					parent.insertBefore(clone, parent.firstElementChild);
				} else
					parent.appendChild(clone);
				Hooks.rununtilconsumed('widgets', parent);
				return function (o) {
					return templates.set(clone, o, template);
				};
			}
			return clone;
		},
		/* replace element with a template
		*
		*/
		replace_with: function (element, replacement) {
			if (isstr(replacement)) replacement = index[ replacement ];
			if (!(element instanceof HTMLElement)) return false;
			if (!(replacement instanceof HTMLElement)) return false;
			var clone, template;
			clone = replacement.cloneNode(true),
			template = clone.dataset.template,
			delete clone.dataset.template,
			clone.hidden = 0;
			element.replaceWith(clone);
			return function (o) {
				return templates.set(clone, o, template);
			};
		},
		/*
		* indexes any htm elements marked with [template=<name>]
		* */
		index: function (parent) {
			var elements = (parent||document.body).querySelectorAll('[data-template]');
			for (var i in elements) {
				if ( elements.hasOwnProperty(i) && elements[i].dataset.template ) {
					elements[i].hidden = 1;
					index[ elements[i].dataset.template ] = elements[i];
				}
			}
			return index;
		},
	};
	templates.index();
	namaavij = templates;
	namaavij.axav = namaavij.get;
})();
/* TODO
* add modifier support alt, ctrl, meta, cmd ...
* softkeys.modifiers([]).set(...)
* */
/* FEATURES
<element>.on_focus_prev() triggered when K.up is pressed on an element
<element>.on_focus_next() triggered when K.dn is pressed on an element
all keyups are pd'd, fig out logic for keydowns in .press
*/
var softkeys, K, P;
;(function(){
	K = { // key code names
		mt: 'microphonetoggle',
		sr: 'softright',
		sl: 'softleft',
		en: 'enter',
		pu: 'pageup',
		pd: 'pagedown',
		up: 'arrowup',
		dn: 'arrowdown',
		rt: 'arrowright',
		lf: 'arrowleft',
		cl: 'call',
		bs: 'backspace',
	},
	P = {
		empty: {},
		sheet: {},
		dialog: {},
		list: {},
	};
	var global_keys = ['f1', 'f2', 'f5', 'escape', K.sl, K.sr];
	var hfizM = {}, M = {}, // mapped keys
	current,
	inlongpress, lastkey, lastkeytime, repeatmode,
	index = {},
	removableparent = function (element) {
		var parent = element.parentElement;
		if (parent.dataset.focus) {
			if (parent.dataset.removable)
				return parent;
			else // check parent's parent
				return removableparent(parent);
		}
	},
	updatekey = function (k) {
		var parent, o = {}, classes = '', args = M[k];
		if (!args) return;
		if (args.length === 1) o.hidden = 1;
		if (args[0]) o.onclick = function (e) {
			var key = e ? e.key : undefined;
			args[0](key, e);
		};
		o.label = args[1] || '';
		o.icon = args[2];
		o.status = args[3];
		if (o.icon === false) {
			o.name = k;
		}
		if ( k == K.sl ) classes = 'left' ;
		if ( k == K.en ) classes = 'center';
		if ( k == K.sr ) classes = 'right' ;
		if ( k == '*' ) classes = 'star' ;
		if ( k == '#' ) classes = 'hash' ;
		if ([K.sr, K.sl, K.en].includes(k)) {
			parent = skmain;
		} else {
			parent = skhints;
		}
		o.id = 'sk'+k;
		o.classes = classes;
		index[k] = templates.get('skbutton', parent, 0, o.id)(o);
		skdots.hidden = totalvisible() ? 0 : 1;
		resize();
	},
	adaaf = function (name, callback, label, icon, status) {
		var action = [];
		M[name] = M[name] || action;
		action[0] = callback === undefined ? M[name][0] : callback;
		action[1] = label === undefined ? M[name][1] : label;
		action[2] = icon === undefined ? M[name][2] : icon;
		action[3] = status === undefined ? M[name][3] : status;
		M[name] = action;
	},
	talaf = function (name) {
		M[name] = undefined;
	};
	totalvisible = function () {
		var total = 0;
		for (var i in skhints.childNodes) {
			if (skhints.childNodes.hasOwnProperty(i))
				if (!skhints.childNodes[i].hidden) total++;
		}
		return total;
	};
	/*
	* putting these inside a function keeps them unique
	* */
	P.empty = function () {
		M[K.sr] = [function () {
			Hooks.run('back');
			return 1;
		}, 0, 'iconclose'];
		M[K.bs] = [function () {
			Hooks.run('minimize');
		}];
		M['#'] = [function () {
			softkeys.showhints();
			return 1;
		}/*, '#', 'iconhelp'*/];
		softkeys.update();
	},
	softkeys = {
		P: P,
		K: K,
		saveto: 7,
		/*
		* clear previous map explicitly, .map doesn't clear it by default
		* */
		clear: function () {
			M = {};
			softkeys.update();
			backstack.set('softkeys', M);
			return softkeys;
		},
		havaf: function (name) {
			return softkeys.talaf(name);
		},
		baidaa: function (name, yes) { if (M[name]) {
			M[name][3] = yes ? 1 : undefined;
			softkeys.update();
		} },
		talaf: function (name) {
			if (name) {
				if (name instanceof Array) {
					name.forEach(function (n) {
						talaf(n);
					});
				} else {
					talaf(name);
				}
				softkeys.update();
				backstack.set('softkeys', M);
			}
			return softkeys;
		},
		update: function () {
			skhints.innerHTML = '';
			skmain.innerHTML = '';
			if (M) for (var k in M) updatekey(k);
		},
		showhints: function () {
			delete softkeysui.dataset.hidden;
			if (!skhelp.hidden) {
				skhelp.hidden = 1;
				preferences.set(7, 1);
			}
			$.taxeer('softkeyshints', function () {
				softkeysui.dataset.hidden = 1;
			}, 2500);
		},
		/*
		* remember one or more actions which you can recall later
		* you can also forget stored actions
		* */
		hfiz: function (name) { // remember
			if (name) {
				if (name instanceof Array) {
					name.forEach(function (n) {
						softkeys.hfiz(n);
					});
				} else {
					hfizM[name] = M[name];
				}
			}
			return softkeys;
		},
		fasax: function () { // recall
			for (var i in hfizM) {
				M[i] = hfizM[i];
			}
			softkeys.update();
			return softkeys;
		},
		nsee: function () { // forget
			hfizM = {};
			return softkeys;
		},
		/*
		* update a single key definition in M
		* status 0normal 1selected 2disabled
		* */
		set: function (name, callback, label, icon, status) {
			if (name) {
				if (isarr(name)) {
					name.forEach(function (n, i) {
						var labeli = label;
						if (isarr(label)) labeli = label[i];
						var iconi = icon;
						if (isarr(icon)) iconi = icon[i];
						if (i)
						adaaf(n, callback, name[0], iconi, status);
						else
						adaaf(n, callback);
					});
				} else {
					adaaf(name, callback, label, icon, status);
				}
				softkeys.update(name);
				backstack.set('softkeys', M);
			}
			return softkeys;
		},
		/*
		* preset P.<name>
		* callbacks {enter: callback}
		* */
		map: function (preset, callbacks) {
			M = Object.assign({}, M, preset);
			if (M && callbacks) {
				for (var i in callbacks) {
					M[i] = M[i] || [];
					M[i][0] = callbacks[i];
				}
			}
			softkeys.update();
			backstack.set('softkeys', M);
		},
		actualpress: function (k, e, longpress) {
			var pd = function () { e && e.preventDefault() };
			k = k.toLowerCase();
			if (k == 'sl') k = K.sl, pd();
			if (k == 'up') k = K.up, pd();
			if (k == 'sr') k = K.sr, pd();
			if (k == 'lf') k = K.lf, pd();
			if (k == 'en') k = K.en, pd();
			if (k == 'rt') k = K.rt, pd();
			if (k == 'cl') k = K.cl, pd();
			if (k == 'dn') k = K.dn, pd();
			if (k == 'bs') k = K.bs, pd();
			if (M && M[k] && typeof M[k][0] == 'function')
				M[k][0](k, e, e && e.type, longpress) && pd(); // prevent default if true is returned
		},
		press: function (k, e, longpress) {
			var caught, pd = function () { preventdefault(e); };
			kraw = k;
			k = k.toLowerCase();
			if (e && e.type && e.type == 'mousewheel') {
				if (e.y <= -1) k = K.up;
				if (e.y >= 1) k = K.dn;
			}
			if (k == 'f1') k = K.sl, pd();
			if (k == 'f2') k = K.sr, pd();
			if (k == 'f5' || (e && e.ctrlKey && k == 'r')) history.go();
			if ('escape' == k && !document.fullscreenElement)
				k = K.sr, pd();
			if (k == K.mt) pd();
			var editmode = 0, a = document.activeElement, dir;
			var left_key = K.lf,
				right_key = K.rt;
			if ((a instanceof HTMLTextAreaElement) || a.contentEditable == 'true') {
				if (e && e.altKey || [K.sl, K.sr].includes(k)) {
				} else {
				}
			}
			if ((a instanceof HTMLInputElement || a instanceof HTMLTextAreaElement || a.contentEditable == 'true')
			&& a.type != 'range') {
				editmode = 1;
				if (a.contentEditable == 'true') {
					dir = translate.direction(a.innerText);
				} else {
					dir = translate.direction(a.value);
				}
				a.dir = dir === 1 ? 'rtl' : 'ltr';
			}
			if (a instanceof HTMLButtonElement) {
				if (a.dataset.remover && k == K.en) {
					var parent = removableparent(a);
					if (!focusprev(parent))
						caught = focusnext(parent);
					if (parent) parent.remove();
					pd();
				}
				if ( isfun(a.on_focus_prev) && (k == K.up || k == left_key) ) {
					caught = 1;
					pd();
					a.on_focus_prev();
					return;
				}
				if ( isfun(a.on_focus_next) && (k == K.dn || k == right_key) ) {
					caught = 1;
					pd();
					a.on_focus_next();
					return;
				}
			}
			var length = 0, selectionStart = 0;
			/* TODO test left/right keys on buttons and single line inputs
			* always allow using up/down keys to move between fields
			* left/right should detect language direction
			* */
			if (editmode) {
				if (a.contentEditable == 'true') {
					length = a.textContent.length;
					selectionStart = getSelection().baseOffset;
				} else {
					length = a.value.length;
					selectionStart = a.selectionStart;
				}
				var atend = (length === selectionStart),
					atstart = (0 === selectionStart);
				if ( atstart && (k == K.up || k == left_key) && !e.altKey ) { // MERGE ?
					if ( isfun(a.on_focus_prev) ) { caught = 1; pd(); a.on_focus_prev(); return; }
					caught = focusprev(a), pd();
				}
				if ( atend && (k == K.dn || k == right_key) && !e.altKey ) { // MERGE ?
					if ( isfun(a.on_focus_next) ) { caught = 1; pd(); a.on_focus_next(); return; }
					caught = focusnext(a), pd();
				}
				else
				if (k == K.en && e.shiftKey && a.uponshiftenter) a.uponshiftenter(atstart, atend), pd();
				else if (k == K.en && !e.shiftKey && a.uponenter ) a.uponenter (atstart, atend), pd();
			}
			else if (a) {
				if ( is_navigable( a )
					|| a.parentElement.dataset.focus ) {
					if (k == K.up || k == left_key) caught = focusprev(a), pd();
					if (k == K.dn || k == right_key) caught = focusnext(a), pd();
					if (k == K.en && a.onclick) a.onclick(), pd();
				}
			}
			/*
			* if text field isn't empty, disable arrow key handling
			* K.bs is managed by KaiOS
			* */
			if (editmode && !length) {
				if (k == K.bs) {
					if (a.dataset.removable)
						caught = focusprev(a), a.remove(), pd();
					else
						/*Hooks.run('back'), webapp.blur(), */pd();
				}
			}
			caught = caught || Hooks.rununtilconsumed('softkey', [k, e || {}, e && e.type, longpress]);
			if (caught) return;
			var mmm = M[kraw] || M[k];
			if ((!editmode || e.altKey || global_keys.includes(k))
				&& mmm && typeof mmm[0] == 'function') {
				caught = mmm[0](k, e, e && e.type, longpress);
				if ( caught ) pd(); // prevent default if true is returned
			} else {
				/*if (k == K.dn) {
					webapp.scrollx(40);
					pd();
				}
				if (k == K.up) {
					webapp.scrollx(-40);
					pd();
				}
				if (k == K.rt) {
					webapp.scrolltobottom();
					pd();
				}
				if (k == K.lf) {
					webapp.scrolltotop();
					pd();
				}*/
			}
			if (isundef(caught) || caught == 1) { // true|1|undef = yes; 0|false = no
				var softkey_element = elementbyid( 'sk'+k );
				if (softkey_element) {
					setdata(softkey_element, 'hawm', 1);
					$.taxeer('sk'+k, function () {
						popdata(softkey_element, 'hawm');
					}, 400);
				}
			}
		},
	};
	softkeys.showhints();
	var autoheight = function (a) {
		if (a instanceof HTMLTextAreaElement) {
			setcss(a, 'height', 0);
			if (a.scrollHeight > a.offsetHeight)
				setcss(a, 'height', a.scrollHeight+3+'px');
		}
	};
	softkeys.autoheight = autoheight;
	var resize = function () {
		var w = innerwidth(), sl = index[K.sl], sr = index[K.sr];
		if (w > 720) {
			var ww = ((innerwidth()-640)/2);
			if (sl) setcss(sl, 'width', ww+'px');
			if (sr) setcss(sr, 'width', ww+'px');
		} else {
			if (sl) setcss(sl, 'width');
			if (sr) setcss(sr, 'width');
		}
	};
	listener('resize', function () {
		$.taxeer('resizesoftkeys', function () { resize(); }, 100);
	});
	resize();
	Hooks.set('contextmenu', function (e) {
		var a = document.activeElement;
		if (a && (a instanceof HTMLInputElement
		|| a.contentEditable == 'true'
		|| a instanceof HTMLTextAreaElement) && a.type != 'range') {
		} else {
			softkeys.showhints();
			return 1;
		}
	});
	Hooks.set('ready', function () {
		skhints.onclick =
		skdots.onclick = function () {
			softkeys.showhints();
		};
	});
	Hooks.set('mousewheel', function (e) {
		e && softkeys.press('', e, e.type);
	});
	Hooks.set('keyup', function (e) {
		var a = document.activeElement;
		if ((a instanceof HTMLInputElement
		|| a instanceof HTMLTextAreaElement) && a.type != 'range') {
			var len = a.value.trim().length, yes;
			if (len) {
				var min = parseint(getattribute(a, 'min') || 0);
				var max = parseint(getattribute(a, 'max') || 0);
				if (min && len < min) a.dataset.under = 1, yes = 1;
				else delete a.dataset.under;
				if (max && len > max) a.dataset.over = 1, yes = 2;
				else delete a.dataset.over;
			} else {
				delete a.dataset.under;
				delete a.dataset.over;
			}
			$.taxeer('softkeysminmax', function () {
				if (yes === 1) webapp.taht3nsar('-'+(min-len));
				else if (yes === 2) webapp.taht3nsar(len+' / '+max+' +'+(len-max));
				else webapp.taht3nsar(len);
			}, 50);
			$.taxeer('softkeysautoheight', function () {
				autoheight(a);
			}, 100);
		} else {
		}
		Hooks.rununtilconsumed('softkey', [e.key.toLowerCase(), e || {}, e && e.type, 0]);
		preventdefault(e);
	});
	Hooks.set('keydown', function (e) {
		if (time.now() - lastkeytime > 60 || lastkeytime === undefined || !0) {
			e && softkeys.press(e.key, e, e.type, 0);
			lastkeytime = time.now();
		} else {
			preventdefault(e);
		}
	});
	Hooks.set('templateset', function (args) {
		var c = args[0],
			o = args[1],
			k = args[2],
			t = args[3];
		if (t === 'skbutton') {
			if (k.icon && !o.icon)
				k.icon.remove();
			if (!o.label && !o.icon)
				c.hidden = 1;
		}
	});
	Hooks.set('restore', function (args) {
		var oldM = backstack.get('softkeys');
		if (oldM) {
			M = Object.assign({}, oldM);
			softkeys.update();
		}
	});
	if (preferences.get(softkeys.saveto, 1)) skhelp.hidden = 1;
})();
;(function(){
	softkeys.list = {
		/*
		* if LV is undefined, it clears these keys
		* */
		basic: function (LV) {
			if (LV) {
				softkeys.set(K.en, function (k, e) {
					if (LV.element.dataset.rakkaz) {
						LV.press(K.en);
						e && e.preventDefault();
					}
				});
				softkeys.set(K.up, function (k, e) {
					if (LV.element.dataset.rakkaz) {
						LV.up();
						e && e.preventDefault();
					}
				});
				softkeys.set(K.dn, function (k, e) {
					if (LV.element.dataset.rakkaz) {
						LV.down();
						e && e.preventDefault();
					}
				});
				softkeys.set(K.rt, function (k, e) {
					if (LV.element.dataset.rakkaz) {
						LV.right();
						e && e.preventDefault();
					}
				});
				softkeys.set(K.lf, function (k, e) {
					if (LV.element.dataset.rakkaz) {
						LV.left();
						e && e.preventDefault();
					}
				});
			} else {
				softkeys.talaf([K.en, K.up, K.dn, K.rt, K.lf]);
			}
		},
	};
})();
var sheet;
;(function(){
	var index = {}, header, container, zaahirname, ae, murakkaz;
	sheet = {
		okay: 0,
		cancel: 0,
		onshow: 0,
		zaahir: function (name) { // currently active sheet
			return zaahirname === name;
		},
		bardaa: function (v) {
			if (!container.firstElementChild) return;
			var children = Object.values(container.firstElementChild.children);
			if (v) {
				children.forEach(function (item) {
					if (getdata(item, 'focus') === 'list') {
						var l = item.listobject;
						if (l.murakkaz) {
							murakkaz = l;
							l.rakkaz();
						}
					}
				});
				setdata(container, 'bardaa', 1);
				softkeys.set(K.sl, function (e) {
					webapp.itlaa3('pleasewait');
				}, 0, 'iconhourglassempty');
				ae = webapp.blur();
			}
			else {
				softkeys.set(K.sl, function (e) {
					sheet.okay();
				}, 0, 'icondone');
				popdata(container, 'bardaa');
				if (ae) ae.focus();
				if (murakkaz) murakkaz.rakkaz(1);
			}
		},
		header: function (text) {
			if (text) {
				if (text instanceof Array) {
					header.dataset.i18n = text[0];
				} else {
					header.innerText = text;
				}
				header.hidden = 0;
			} else
				delete headerui.dataset.i18n,
				header.innerText = '',
				header.hidden = 1;
		},
		hide: function () {
			sheetui.hidden = 1;
			sheet.okay = 0;
			sheet.cancel = 0;
			zaahirname = 0;
		},
		show: function (args) {
			ae = murakkaz = 0;
			container.innerHTML = '';
			sheetui.hidden = 0;
			if (typeof args === 'string')
				args = {
					name: args,
				};
			var name = args.name || args.n,
				title = args.title || args.t || '',
				minqabl = args.minqabl || args.b,
				callback = args.callback || args.c,
				oncancel = args.oncancel || args.x,
				ayyihaal = args.ayyihaal|| args.a,
				init = args.init || args.i,
				keys;
			header.innerText = title;
			sheet.onshow && sheet.onshow(name);
			var ui = index[name];
			if (ui) {
				zaahirname = name;
				var node = ui.cloneNode(true);
				if (node) {
					delete node.dataset.sheet;
					node.dataset.visiblesheet = 1;
					node.hidden = 0;
					container.appendChild(node);
					sheetui.focus();
					translate && translate.update( sheetui );
					Hooks.rununtilconsumed('widgets', sheetui);
					keys = templates.keys(container);
					init && init( keys );
					Hooks.rununtilconsumed('widgets', sheetui);
				}
			}
			if (callback)
			sheet.okay = function (args) {
				callback && callback( args || keys );
				ayyihaal && ayyihaal( args || keys );
				webapp.blur();
				Hooks.run('back');
			};
			else
			sheet.okay = 0;
			sheet.bardaa();
			if (isfun(minqabl)) {
				var oldokay = sheet.okay;
				sheet.okay = function (args) {
					sheet.bardaa(1);
					minqabl(args || keys, function (args) {
						oldokay(args || keys);
					});
				};
			}
			sheet.cancel = function (args) {
				oncancel && oncancel( args || keys );
				ayyihaal && ayyihaal( args || keys );
				webapp.blur();
				Hooks.run('back');
			};
		},
		get: function (name) {
			if (!name) return container.firstElementChild;
			else return index[name];
		},
		index: function (parent) {
			var elements = (parent||document.body).querySelectorAll('[data-sheet]');
			for (var i in elements) {
				if ( elements.hasOwnProperty(i) && elements[i].dataset.sheet ) {
					elements[i].hidden = 1;
					index[ elements[i].dataset.sheet ] = elements[i];
				}
			}
			return index;
		},
	};
	Hooks.set('ready', function () {
		sheet.index();
		var mfateeh = templates.keys(sheetui);
		header = mfateeh.header;
		container = mfateeh.container;
	});
})();
var themes;
;(function(){
	var K, P, settingsuid, current = 0;
	var store = {
		0: {
			status: 'rgba(0,0,0,0.6)',
			statusm: 'rgba(0,0,0,0.2)',
			textl: '#fff',
			text: '#ddd',
			textd: '#aaa',
			textdt: '#aaaaaa55',
			textxd: '#777',
			textxdt: '#77777755',
			primaryl: '#050505',
			primary: 'black',
			primaryd: 'black',
			primaryt: 'rgba(0,0,0,0.8)', // perfect transparent level
			primaryxt: 'rgba(0,0,0,0.4)',
			secondaryl: '#353535',
			secondary: '#333',
			secondaryd: '#252525',
			secondaryt: 'rgba(40,40,40,0.8)',
			tertiaryl: '#454545',
			tertiary: '#444',
			tertiaryd: '#353535',
			tertiaryt: 'rgba(53,53,53,0.8)',
			accentl: '#4ccbfc',
			accent: '#04baf5',
			accentt: 'rgba(4, 186, 245, 0.7)',
			accentxt: 'rgba(4, 186, 245, 0.4)',
			accentd: '#0284c0',
			accentdt: 'rgba(4, 126, 205, 0.7)',
			green: '#0c0',
			yellow: '#ca0',
			redl: '#f99',
			red: '#c00',
			redd: '#900',
},
		1: {
			status: 'rgba(0,0,0,0.6)',
			statusm: 'rgba(0,0,0,0.2)',
			textl: '#111',
			text: '#333',
			textd: '#666',
			textdt: '#66666655',
			textxd: '#888',
			textxdt: '#88888855',
			primaryl: '#e6e6e6',
			primary: '#fff',
			primaryd: '#d6d6d6',
			primaryt: 'rgba(255,255,255,0.8)', // perfect transparent level
			primaryxt: 'rgba(255,255,255,0.4)',
			secondaryl: '#e6e6e6',
			secondary: '#d6d6d6',
			secondaryd: '#c6c6c6',
			secondaryt: 'rgba(180,180,180,0.8)',
			tertiaryl: '#eee',
			tertiary: '#ddd',
			tertiaryd: '#ccc',
			tertiaryt: 'rgba(204,204,204,0.8)',
			accentl: '#0bb8cb',
			accent: '#00609a',
			accentt: 'rgba(0, 67, 113, 0.7)',
			accentxt: 'rgba(0, 67, 113, 0.4)',
			accentd: '#004371',
			accentdt: 'rgba(0, 37, 93, 0.7)',
			green: '#0c0',
			yellow: '#ca0',
			redl: '#900',
			red: '#c00',
			redd: '#faa',
		},
	};
	themes = {
		/*
		* in preferences (using localStorage), use this key to remember theme
		* */
		saveto: 19,
		/*
		* +changes the theme if only the theme name is provided
		* theme is a string, refers to an object inside store
		* this objects contains key:value pairs
		* that refer to slang css variables
		*
		* +if only theme & key are provided and not value
		* assumes that key is an object representing theme
		*
		* +if key and value are also provided
		* inside a store.theme, set a key to value
		* */
		set: function (theme, key, value) {
			var arglen = arguments.length;
			if (arglen === 0) {
				themes.set(current);
			}
			if (arglen === 1) {
				if (store[theme])
					current = theme,
					dynamicstyle.innerHTML = updatetheme(store[theme]),
					preferences.set(themes.saveto, current);
					themecolor && themecolor.setAttribute('content', themes.get('status'));
			}
			if (arglen === 2) {
				store[theme] = key;
			}
			if (arglen === 3) {
				store[theme] = store[theme] || {};
				store[theme][key] = value;
			}
			return themes;
		},
		/*
		* if only one arg is provided, assume it's the key
		* */
		get: function (theme, key) {
			var arglen = arguments.length;
			if (arglen === 0 && current !== undefined)
				return current;
			if (arglen === 1 && current !== undefined)
				return store[current][theme];
			if (arglen === 2)
				return store[theme][key];
			return false;
		},
		toggle: function () {
			current = current ? current = 0 : 1;
			themes.set(current);
			settings.jaddad(settingsuid);
		},
	};
	Hooks.set('ready', function () {
		if (preferences) current = preferences.get(themes.saveto, 1) || 0;
		themes.set(current);
		settingsuid = settings.adaaf('theme', function () {
			var iswhite = preferences.get(themes.saveto, 1);
			themes.set(iswhite);
			return [iswhite ? 'white' : 'black' ];
		}, function () {
			preferences.set(themes.saveto, preferences.get(themes.saveto, 1) ? 0 : 1);
		});
	});
	Hooks.set('viewready', function (args) {
		K = softkeys.K, // key names
		P = softkeys.P; // presets
		switch (args.name) {
			case 'main':
				softkeys.set(1, function (k, e) {
					themes.toggle();
					e && e.preventDefault();
				}, '1', 'icontheme');
				break;
		}
	});
})();
var dialog;
;(function(){
	dialog = {
		okay: 0,
		cancel: 0,
		onshow: 0,
		hide: function () {
			dialogui.hidden = 1;
			dialog.okay = 0;
			dialog.cancel = 0;
		},
		show: function (args) {
			args = args || {};
			markooz() && markooz().blur();
			dialogui.hidden = 0;
			var k = templates.keys(dialogui) ,
				max = args.max || args.x ,
				callback = args.callback || args.c ,
				message = args.message || args.m ,
				answer = args.answer || args.a ,
				question = args.question || args.q ;
			dialog.onshow && dialog.onshow(name);
			dialog.okay = function () {
				var answer = k.input.value;
				if (max) answer = answer.slice(0, max);
				callback && callback(answer);
				document.activeElement && document.activeElement.blur();
				Hooks.run('back');
			};
			dialog.cancel = function () {
				document.activeElement && document.activeElement.blur();
				Hooks.run('back');
			};
			k.input.value = answer || '';
			attribute(k.input, 'max', max || 0);
			if (question) {
				k.input.hidden = 0;
				k.input.focus();
			} else {
				k.input.hidden = 1;
			}
			innertext(k.message, '');
			k.message.dataset.i18n = message || '';
			translate.update(dialogui);
		},
	};
})();
/*
* when a touchscreen is detected, this adds an option to settings that allows
* switching between dpad and touch navigation
*
* with dpad navigation, touch also emulates a dpad
* */
;(function(){
	var x = 0, y = 0, curx = 0, cury = 0, horizontal = 0, vertical = 0,
		size = 20, sizew = 15, caught = 0, start = 0;
	var saveto = 18, settingsuid, webapptouchdir = 0;
	Hooks.set('ready', function () {
		/*if (preferences) webapptouchdir = preferences.get(saveto, 1) || 1;
		webapp.touchdir = webapptouchdir;
		settingsuid = settings.adaaf('webapptouchdir', function () {
			webapptouchdir = preferences.get(saveto, 1);
			webapp.touchdir = webapptouchdir;
			if (!webapptouchdir) delete document.body.dataset.align;
			return [webapptouchdir ? 'on' : 'off' ];
		}, function () {
			preferences.set(saveto, preferences.get(saveto, 1) ? 0 : 1);
		});*/
	});
	Hooks.set('keyup', function (e) {
		var k = e.key.toLowerCase();
		if (k === 'r' && e.ctrlKey)
			location.reload(), preventdefault(e);
		if (['escape', 'f11'].includes(k) && document.fullscreenElement)
			document.exitFullscreen(), preventdefault(e);
		else if (k === 'f11')
			document.firstElementChild.requestFullscreen(), preventdefault(e);
	});
	listener('touchstart', function (e) {
		if (softkeys.touchdpad) preventdefault(e);
		x = e.touches[0].clientX;
		y = e.touches[0].clientY;
		caught = 0;
		start = e.timeStamp;
		if (webapptouchdir) {
			if ( x / innerwidth() < 0.5 ) {
				document.body.dataset.align = 'left';
			} else {
				delete document.body.dataset.align;
			}
		}
		Hooks.run('navigationstart', [x, y]);
	}, { passive: false });
	listener('touchmove', function (e) {
		curx = e.touches[0].clientX,
		cury = e.touches[0].clientY,
		horizontal = curx - x,
		vertical = cury - y;
		if (horizontal < -sizew || horizontal > sizew) {
			if (horizontal > sizew)
				horizontal = 1;
			else if (horizontal < -sizew)
				horizontal = -1;
			if (horizontal !== 0)
				x = curx;
		} else horizontal = 0;
		if (vertical < -size || vertical > size) {
			if (vertical > size)
				vertical = 1;
			else if (vertical < -size)
				vertical = -1;
			if (vertical !== 0)
				y = cury;
		} else vertical = 0;
		if (horizontal !== 0 || vertical !== 0)
			caught = 1,
			Hooks.run('navigation', [horizontal, vertical]);
	});
	listener('touchend', function (e) {
		if (!caught) {
			if ( e.timeStamp - start > 250 ) // held for 250ms or more
				Hooks.run('navigationlongpress', [x, y, e.path, horizontal, vertical]);
			else
				Hooks.run('navigationpress', [x, y, e.path, horizontal, vertical]);
		} else
			Hooks.run('navigationend', [x, y, e.path, horizontal, vertical]);
	});
})();
;(function(){
	var saveto = 16, settingsuid, locked = 0,
		edgestart = 0, // -1 left, 0 center, 1 right
		edgeend = 0, lastitem, lamsahbar,
		softkeystouchdpad = 1; // 1 hor, 2 vert
	Hooks.set('ready', function () {
		if (preferences) softkeystouchdpad = preferences.get(saveto, 1) || 1;
		softkeys.touchdpad = softkeystouchdpad;
		settingsuid = settings.adaaf('softkeystouchdpad', function () {
			softkeystouchdpad = preferences.get(saveto, 1);
			softkeys.touchdpad = softkeystouchdpad;
			return [softkeystouchdpad ? 'on' : 'off' ];
		}, function () {
			preferences.set(saveto, preferences.get(saveto, 1) ? 0 : 1);
		});
	});
	Hooks.set('navigationstart', function (args) {
		locked = 0; // free direction lock
		if (args[0] > innerwidth(-60)) edgestart = 1;
		else if (args[0] < 60) edgestart = -1;
		else edgestart = 0;
	});
	Hooks.set('navigation', function (args) {
		if (!locked || locked === 2) {
			if (args[0] > 0) { // right
				if (softkeystouchdpad && !edgestart) softkeys.press(K.rt);
				locked = 2;
			}
			if (args[0] < 0) { // left
				if (softkeystouchdpad && !edgestart) softkeys.press(K.lf);
				locked = 2;
			}
		}
		if (!locked || locked === 1) {
			if (args[1] > 0) { // down
				if (softkeystouchdpad && !edgestart) softkeys.press(K.dn);
				locked = 1;
			}
			if (args[1] < 0) { // up
				if (softkeystouchdpad && !edgestart) softkeys.press(K.up);
				locked = 1;
			}
		}
	});
	var doclick = function (path) {
		for (var i = 0; i < path.length; ++i) {
			if (path[i].onclick) {
				path[i].onclick();
				path[i].blur();
				break;
			}
			if (path[i] instanceof HTMLButtonElement) {
				path[i].click();
				path[i].blur();
				break;
			}
		}
	};
	Hooks.set('navigationend', function (args) {
		if (!softkeystouchdpad) {
			if (args[3] < 0) {
				pager && pager.yameen();
			}
			if (args[3] > 0) {
				pager && pager.shimaal();
			}
		} else
		if (pager && edgestart) { // started on an edge
			edgeend = 0;
			if (args[0] > innerwidth(-60)) edgeend = 1;
			else if (args[0] < 60) edgeend = -1;
			else edgeend = 0;
			if (edgestart !== edgeend) { // ended on a diff edge
				if (edgestart === 1) pager.yameen(); // right
				else if (edgestart === -1) pager.shimaal(); // left
			}
		}
	});
	Hooks.set('navigationpress', function (args) {
		var isbutton = 0;
		if (isarr(args[2]))
		args[2].forEach(function (item) {
			if (item instanceof HTMLButtonElement
			|| item instanceof HTMLInputElement
			|| item instanceof HTMLTextAreaElement
			) {
				isbutton = 1;
				item.focus();
				if (lastitem) {
					popdata(lastitem, 'lamsah');
					lastitem = 0;
				}
				setdata(item, 'lamsah', 1);
				lastitem = item;
				$.taxeer('sklamsah', function () {
					if (lastitem) {
						popdata(lastitem, 'lamsah');
						lastitem = 0;
					}
				}, 300);
			}
		});
		if (args[1] > innerheight(-60)) {
			if (softkeystouchdpad) doclick(args[2]);
		} else
		if (iswithinelement(args, skhints) || isbutton) {
			if (softkeystouchdpad) doclick(args[2]);
			softkeys.showhints();
		}
		else if (softkeystouchdpad) {
			if (!skhints.hidden) softkeys.showhints();
			softkeys.press(K.en);
		}
	});
	Hooks.set('navigationlongpress', function (args) {
		softkeys.showhints();
	});
	/* TAJREEBI lamsah bar yameen
	* when touch inside the bar, pop it in
	* whatever button is under the pointer, make its label appear next to it
	* */
	var lamsahbarimtahan = function () {
	};
	listener(skhints, ['touchstart'/*, 'mousedown'*/], function (e) {
		preventdefault(e);
		lamsahbar = [e.touches[0].pageX, e.touches[0].pageY-scrollingelement().scrollTop];
	});
	listener(skhints, ['touchmove'/*, 'mousemove'*/], function (e) {
		if (lamsahbar) {
			lamsahbar = [e.touches[0].pageX, e.touches[0].pageY-scrollingelement().scrollTop];
			var ch = skhints.children, el,
				path;
			if (e.type == 'touchmove') {
				path = raycast(lamsahbar[0], lamsahbar[1]);
			}
			for (var i in ch) {
				if ( ch.hasOwnProperty(i) ) {
					for (j in path) {
						if (path[j] == ch[i]) el = ch[i];
					}
				}
			}
			if (el) {
				for (var i in ch) {
					if ( ch.hasOwnProperty(i) ) {
						if (path[j] != el) popdata(ch[i], 'hawm');
					}
				}
				setdata(el, 'hawm', 1);
				softkeys.showhints();
			}
		}
	});
	listener(skhints, ['touchend', 'touchcancel'/*, 'mouseup', 'mouseleave'*/], function (e) {
		var ch = skhints.children, path;
		if (e.type == 'touchend' && lamsahbar) {
			path = raycast(lamsahbar[0], lamsahbar[1]);
		}
		for (var i in ch) {
			if ( ch.hasOwnProperty(i) ) {
				for (j in path) {
					if (path[j] == ch[i]) {
						if (ch[i] && e.type == 'touchend') {
							ch[i].click();
						}
					}
				}
			}
		}
		for (var i in ch) {
			if ( ch.hasOwnProperty(i) ) {
				popdata(ch[i], 'hawm');
			}
		}
		lamsahbar = 0;
	});
	/*Hooks.set('templateset', function (args) {
		var c = args[0], // clone
			o = args[1],
			k = args[2],
			t = args[3];
		if (t === 'skbutton') {
			listener(c, ['touchmove', 'mouseenter'], function () {
				if (lamsahbar) {
					lamsahbar = c;
					$.log(c.id);
					setdata(c, 'hawm', 1);
				}
			});
		}
	});*/
})();
/*
* it has 3 qanawaat for comm with xaadim
* axav get something from the xaadim immediately
*
* waaqat sync changes, zaboon -> xaadim
* uses .waqt to maintain sync between zaboon & xaadim
* the response is empty
* responds through broadcast
* nashar listens for changes
* returns on triggers like waaqat from you or others
* always returns .waqt on success
* */
var shabakah, sessions = sessions || 0;
;(function(){
	'use strict';
	var xitaab = 'http://localhost:3000/', buildexpired = false, offlinewaqt,
		shabakahkeys;
	var xataalog = function (v) {
	};
	var hasdisconnected = function (res) {
		if (!res.err)
			setnetwork(1);
		else if (res.err === -300 || res.err > 300)
			setnetwork();
	};
	var setnetwork = function (on) {
		if (on) {
			if (offlinewaqt !== false) {
				offlinewaqt = false;
				preferences.pop('@0');
				Hooks.run('ittasaal', true); // connection
				$.taxeercancel('shabakahittasaal');
			}
			setnotifybar();
		} else {
			if (offlinewaqt === false) {
				offlinewaqt = new Date().getTime();
				preferences.set('@0', offlinewaqt);
				Hooks.run('ittasaal', offlinewaqt); // connection
				$.taxeer('shabakahittasaal', function () {
					if (sessions)
					shabakah.axav({
						i: 'shabakah',
						h: 'ittasaal',
					});
				}, 15*1000);
			}
			setnotifybar( 'offlinesince' , offlinewaqt || '');
		}
	};
	var setnotifybar = function (v, t) {
		if (v) {
			$.taxeer('setnotifybar', function () {
				setdata(shabakahkeys.mowdoo3, 'i18n', v);
				setdata(shabakahkeys.waqt, 'time', t);
				time(shabakahui);
				xlate.update(shabakahui);
			}, t);
			shabakahui.hidden = 0;
		} else {
			shabakahui.hidden = 1;
		}
	};
	var sizeunits = function (num) {
		if (typeof num === 'number') {
			if (num >= (1024 * 1024 * 1024 * 1024))
				return (num / (1024 * 1024 * 1024 * 1024)).toFixed(1) + 'TB';
			if (num >= (1024 * 1024 * 1024))
				return (num / (1024 * 1024 * 1024)).toFixed(1) + 'GB';
			if (num >= (1024 * 1024))
				return (num / (1024 * 1024)).toFixed(1) + 'MB';
			if (num >= 1024)
				return (num / 1024).toFixed() + 'KB';
		}
		return '0';
	}
	var progressfn = function (loaded, total) {
		if (total > 4 * 1024) {
			var percentage = sizeunits(loaded) +' / '+ sizeunits(total) +', '
							+ (((loaded / total) * 100).toFixed() || 0) + '%';
			webapp.itlaa3( percentage );
		}
	};
	var hasinshaexpired = function (jawaab) {
		if (jawaab.e$) {
			buildexpired = 1;
			window.caches.delete('def').then(function(del) {
				webapp.dimmer(LAYERTOPMOST, xlate('appneedsreload'));
			});
			nasharanhaa();
			$.fetchcancel( 'axav' );
			$.fetchcancel( 'waaqat' );
		}
	};
	var handlejawaab = function (jawaab) {
		if (jawaab.rafa3)
		for (var ism in jawaab.rafa3) {
			if (shabakah.mundarij.rafa3[ism]) {
				var haajaat = jawaab.rafa3[ism];
				for (var haajah in haajaat) {
					if (typeof shabakah.mundarij.rafa3[ism][haajah] == 'function') {
						shabakah.mundarij.rafa3[ism][haajah](
							haajaat[haajah]
						);
					}
				}
			}
		}
		if (jawaab.wasaatat)
		for (var ism in jawaab.wasaatat) {
			if (shabakah.mundarij.wasaatat[ism]) {
				var haajaat = jawaab.wasaatat[ism];
				for (var haajah in haajaat) {
					if (typeof shabakah.mundarij.wasaatat[ism][haajah] == 'function') {
						shabakah.mundarij.wasaatat[ism][haajah](
							haajaat[haajah]
						);
					}
				}
			}
		}
		if (jawaab.axav) {
			for (var ism in jawaab.axav) {
				if (shabakah.mundarij.axav[ism]) {
					var haajaat = jawaab.axav[ism];
					for (var haajah in haajaat) {
						if (typeof shabakah.mundarij.axav[ism][haajah] == 'function') {
							shabakah.mundarij.axav[ism][haajah](
								haajaat[haajah]
							);
						}
					}
				}
			}
			Hooks.run('jawaabaxav', jawaab.waaqat);
		}
		if (jawaab.waaqat) {
			for (var ism in jawaab.waaqat) {
				if (shabakah.mundarij.waaqat[ism]) {
					var haajaat = jawaab.waaqat[ism];
					for (var haajah in haajaat) {
						if (typeof shabakah.mundarij.waaqat[ism][haajah] == 'function') {
							shabakah.mundarij.waaqat[ism][haajah](
								haajaat[haajah]
							);
						}
					}
				}
			}
			Hooks.run('jawaabwaaqat', jawaab.waaqat);
		}
	};
	var cachedkey, nasharhaalah = 0, nashartaxeer = 500;
	var nasharishtaghal = function (payload, wasaatat) {
		if (!cachedkey || !nasharhaalah) return;
		if ($.fetchchannels.nashar
		&& $.fetchchannels.nashar.active) return;
		payload = payload || {};
		payload = Object.assign(payload, {
			nashar: 1 , // mutawaaqit min qabl (synced before)
			e$ : 482 , // insha 3adad
		});
		if (wasaatat) payload = Object.assign(payload, wasaatat);
		xataalog(payload);
		$.fetch( xitaab, 'json='+enc( JSON.stringify(payload) ), 'nashar', progressfn, 3*60*1000 )
		.then(function (res) {
			if (res.err) {
				nashartaxeer = 4 * 15 * 1000; // 60s
			} else {
				hasdisconnected(res);
				var jawaab = {};
				try {
					jawaab = JSON.parse( (res||{}).body );
				} catch (e) {
					jawaab.nashar = 1;
					jawaab.xataa = 1;
				}
				if (!jawaab.xataa) nashartaxeer = 500;
				if (hasinshaexpired(jawaab)) return;
				handlejawaab(jawaab);
			}
			$.taxeer('shabakahnashar', function () {
				wasaatatishtaghal(function (ashyaa) {
					nasharishtaghal({}, ashyaa);
				}, 'nashar');
			}, nashartaxeer);
		});
	};
	var nasharbadaa = function () {
		$.taxeer('nasharbadaa', function () {
			nasharhaalah = 1;
			wasaatatishtaghal(function (ashyaa) {
				nasharishtaghal({}, ashyaa);
			}, 'nashar');
		}, 1000);
	};
	var nasharanhaa = function () {
		nasharhaalah = 0;
		$.fetchcancel('nashar');
	};
	var mu3allaq = {}; // pending requests
	var ajraa = function (payload, wasaatat) { // flush pending axav requests
		if (Object.keys(mu3allaq).length === 0) return;
		payload = payload || {};
		payload = Object.assign(payload, {
			e$ : 482 , // insha 3adad
		});
		if (wasaatat) payload = Object.assign(payload, wasaatat);
		payload.axav = payload.axav || {};
		for (var i in mu3allaq) {
			var m = mu3allaq[i] ,
				ism = m[0] ,
				haajah = m[1] ,
				qadr = m[2] ;
			payload.axav[ism] = payload.axav[ism] || {};
			payload.axav[ism][haajah] = qadr;
		}
		xataalog(payload);
		$.fetch( xitaab, 'json='+enc( JSON.stringify(payload) ), 'axav', progressfn, 30*1000 )
		.then(function (res) {
			hasdisconnected(res);
			var jawaab = {};
			try {
				jawaab = JSON.parse( (res||{}).body );
			} catch (e) {
				jawaab.axav = 1;
				jawaab.xataa = 1;
			}
			if (hasinshaexpired(jawaab)) return;
			handlejawaab(jawaab);
		});
		mu3allaq = {};
	};
	var wasaatat = {}; // intercession
	var wasaatatishtaghal = function (callback, qanaat) {
		var j = 0, arr = Object.keys(wasaatat);
		if (arr.length === 0) {
			callback();
			return;
		}
		var q = $.queue(), ashyaa = { wasaatat: {} };
		for (var i in wasaatat) {
			q.set(function (done) {
				var o = wasaatat[ arr[j] ];
				o[2](function (shayy) {
					if (shayy !== undefined) {
						ashyaa.wasaatat[ o[0] ] = ashyaa.wasaatat[ o[0] ] || {};
						ashyaa.wasaatat[ o[0] ][ o[1] ] = shayy;
					}
					j++;
					done(q);
				}, qanaat);
			});
		}
		q.run(function () {
			callback && callback(ashyaa);
		});
	};
	var mutawaaqit = {};
	var waaqatishtaghal = function (payload, wasaatat) {
		if (Object.keys(mutawaaqit).length === 0) return;
		payload = payload || {};
		payload = Object.assign(payload, {
			e$ : 482 , // insha 3adad
		});
		if (wasaatat) payload = Object.assign(payload, wasaatat);
		payload.waaqat = payload.waaqat || {};
		for (var i in mutawaaqit) {
			var m = mutawaaqit[i] ,
				ism = m[0] ,
				haajah = m[1] ,
				qadr = m[2] ;
			payload.waaqat[ism] = payload.waaqat[ism] || {};
			payload.waaqat[ism][haajah] = qadr;
		}
		xataalog(payload);
		$.fetch( xitaab, 'json='+enc( JSON.stringify(payload) ), 'waaqat', progressfn, 30*1000 )
		.then(function (res) {
			hasdisconnected(res);
			var jawaab = {};
			try {
				jawaab = JSON.parse( (res||{}).body );
			} catch (e) {
				jawaab.waaqat = 1;
				jawaab.xataa = 1;
			}
			if (hasinshaexpired(jawaab)) return;
			handlejawaab(jawaab);
		});
		mutawaaqit = {};
	};
	var rafa3 = function (ism, haajah, qadr, marfoo3, wasaatat) {
		var payload = {};
		payload = Object.assign(payload, {
			e$ : 482 , // insha 3adad
		});
		if (wasaatat) payload = Object.assign(payload, wasaatat);
		payload.rafa3 = {};
		payload.rafa3[ism] = {};
		payload.rafa3[ism][haajah] = qadr;
		var fd = new FormData();
		fd.append('json', JSON.stringify(payload) );
		fd.append('rafa3', marfoo3);
		fetch(xitaab, { method: 'post', body: fd }).then(function (res) {
			hasdisconnected(res);
			res.json().then(function (jawaab) {
				if (hasinshaexpired(jawaab)) return;
				handlejawaab(jawaab);
			});
		});
	};
	shabakah = {
		xitaab: xitaab,
		mundarij: {
			axav: {},
			waaqat: {},
			wasaatat: {},
			rafa3: {},
		},
		rafa3: function (ism, haajah, qadr, marfoo3) {
			if (!ism) return;
			if (!marfoo3) return;
			haajah = haajah || 'xarq' ; // default
			qadr = qadr || 0 ;
			wasaatatishtaghal(function (ashyaa) {
				rafa3(ism, haajah, qadr, marfoo3, ashyaa);
			}, 'rafa3');
		},
		nashar: function () {
			if (cachedkey) {
				nasharbadaa();
			} else {
				nasharanhaa();
			}
		},
		waaqat: function (ism, haajah, qadr) {
			if (!ism) return;
			haajah = haajah || 'xarq' ; // default
			qadr = qadr || 0 ;
			mutawaaqit[ ism+'.'+haajah ] = [ism, haajah, qadr];
			$.taxeer('shabakahwaaqat', function () {
				wasaatatishtaghal(function (ashyaa) {
					waaqatishtaghal({}, ashyaa);
				}, 'waaqat');
			}, 100);
		},
		axav: function (ism, haajah, qadr) { // { ism, haajah, qadr }
			if (!ism) return;
			if (arguments.length === 2) qadr = haajah, haajah = 0;
			haajah = haajah || 'xarq' ; // default
			qadr = qadr || 0 ;
			mu3allaq[ ism+'.'+haajah ] = [ism, haajah, qadr];
			$.taxeer('shabakahajraa', function () {
				wasaatatishtaghal(function (ashyaa) {
					ajraa({}, ashyaa);
				}, 'axav');
			}, 100);
		},
		jawaab: {
			axav: function (ism, haajah, cb) {
				if (typeof haajah == 'function') cb = haajah, haajah = 0;
				haajah = haajah || 'xarq';
				shabakah.mundarij.axav[ ism ] = shabakah.mundarij.axav[ ism ] || {};
				shabakah.mundarij.axav[ ism ][ haajah ] = cb;
			},
			waaqat: function (ism, haajah, cb) {
				if (typeof haajah == 'function') cb = haajah, haajah = 0;
				haajah = haajah || 'xarq';
				shabakah.mundarij.waaqat[ ism ] = shabakah.mundarij.waaqat[ ism ] || {};
				shabakah.mundarij.waaqat[ ism ][ haajah ] = cb;
			},
			tawassat: function (ism, haajah, cb) {
				if (typeof haajah == 'function') cb = haajah, haajah = 0;
				haajah = haajah || 'xarq';
				shabakah.mundarij.wasaatat[ ism ] = shabakah.mundarij.wasaatat[ ism ] || {};
				shabakah.mundarij.wasaatat[ ism ][ haajah ] = cb;
			},
			rafa3: function (ism, haajah, cb) {
				if (typeof haajah == 'function') cb = haajah, haajah = 0;
				haajah = haajah || 'xarq';
				shabakah.mundarij.rafa3[ ism ] = shabakah.mundarij.rafa3[ ism ] || {};
				shabakah.mundarij.rafa3[ ism ][ haajah ] = cb;
			},
		},
		tawassat: function (ism, haajah, cb) { // intercept
			if (typeof haajah == 'function') cb = haajah, haajah = 0;
			haajah = haajah || 'xarq' ; // default
			wasaatat[ ism+'.'+haajah ] = [ism, haajah, cb];
		},
	};
	/* TODO hook visibility to nashar
	*
	* hook sessionchange, start/stop nashar
	*
	* hook ready, if signedin, start nashar
	*
	* on hook [axav|nashar], run hook jawaab { [axav|nashar]: bool, xataa: bool }
	*
	* have shabakah.xaadim
	* */
	Hooks.set('sessionchange', function (key) {
		cachedkey = key || 0;
		if (cachedkey) {
			shabakah.nashar();
			shabakah.waaqat();
		}
	});
	Hooks.set('ready', function () {
		shabakahkeys = templates.keys(shabakahui);
		shabakah.tawassat('shabakah', 'waqt', function (intahaa, qanaat) {
			intahaa( preferences.get('@') );
		});
		shabakah.jawaab.tawassat('shabakah', 'waqt', function (jawaab) {
			if (jawaab && cachedkey) preferences.set('@', jawaab);
		});
		offlinewaqt = preferences.get('@0', 1) || false;
		listener('online', function (e) {
			setnetwork(1);
		});
		listener('offline', function (e) {
			setnetwork();
		});
		if (sessions) {
			cachedkey = sessions.signedin() || 0;
			if (cachedkey) {
				shabakah.nashar();
				shabakah.waaqat();
			}
		}
	});
})();
/* TODO
* build undo redo system, find one if there's a tiny one out there already
*
*/
var editorlist, editor, currently_open_file;
;(function(){
	var mfateeh;
	editor = {
		get_time: function (time) {
			var time_text = 'notime';
				if (time == 1) time_text = 'day' ;
			else if (time == 2) time_text = 'night' ;
			else if (time == 3) time_text = 'morning' ;
			else if (time == 4) time_text = 'evening' ;
			return time_text;
		},
		get_place: function (place) {
			return place ? 'ext' : 'int';
		},
		replace_with: function () {
			var cur = editorlist.get_item_element();
			if (cur) {
				var uid = getdata( cur , 'uid' );
				var o = editorlist.adapter.get( uid );
				var setter, replacement;
				var keys = editorlist.get_item_keys( uid );
				if (o.type === 0) { // Scene
					replacement = 'action';
					o.type = 1;
					o.place = keys.place_text.value;
					o.time = keys.time_text.value;
					o.text = keys.text.value;
				} else if (o.type === 1) { // Action
					replacement = 'charname';
					o.type = 2;
					o.text = keys.text.textContent;
				} else if (o.type === 2) { // Character Name
					replacement = 'dialog';
					o.type = 3;
					o.text = keys.text.value;
				} else if (o.type === 3) { // Dialog
					replacement = 'parenthetical';
					o.type = 4;
					o.text = keys.text.textContent;
				} else if (o.type === 4) { // Parenthetical
					replacement = 'scene';
					o.type = 0;
					o.text = keys.text.value;
					o.place = o.place || 0;
					o.place_text$t = editor.get_place( o.place );
					o.time = o.time || 0;
					o.time_text$t = editor.get_time( o.time );
				}
				setter = templates.replace_with(cur, replacement);
				if (setter) {
					var clone = setter(o);
					setdata( clone, 'listitem', 1 );
					setdata( clone, 'uid', o.uid );
					clone.id = o.id_dom;
					keys = editorlist.get_item_keys( uid );
					keys.text.focus();
					editorlist.after_set(o, clone, keys);
					if ([1, 2, 3, 4].includes(o.type)) {
						softkeys.autoheight( keys.text );
					}
				}
			}
		},
		prev: function () {
			var sib = prevsibling( editorlist.get_item_element() );
			if (sib) {
				var uid = getdata( sib , 'uid' )
				var o = editorlist.adapter.get( uid );
				var k = editorlist.get_item_keys( uid );
				if (o.type === 0) { // Scene
					k.time_text.focus();
				}
				if (o.type === 1) { // Action
					k.text.focus();
				}
				if (o.type === 2) { // Dialog
					k.text.focus();
				}
			}
			editorlist.up();
		},
		next: function () {
			var sib = nextsibling( editorlist.get_item_element() );
			if (sib) {
				var uid = getdata( sib , 'uid' )
				var o = editorlist.adapter.get( uid );
				var k = editorlist.get_item_keys( uid );
				if (o.type === 0) { // Scene
					k.place_text.focus();
				}
				if ([1, 2, 3, 4].includes(o.type)) { // Action, Character Name, Dialog, Parenthetical
					k.text.focus();
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
					var o = editorlist.adapter.get( getdata(e, 'uid') );
					if (o.type === 0) {
						save_array.push( [o.type, o.place, k.text.value, o.time] );
					}
					if ([1, 2, 3, 4].includes(o.type)) { // Action, Character Name, Dialog, Parenthetical
						var text = k.text.textContent;
						if (k.text instanceof HTMLInputElement || k.text instanceof HTMLTextAreaElement)
							text = k.text.value;
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
				o.place_text$t = editor.get_place( options.place );
				o.time = options.time || 0;
				o.time_text$t = editor.get_time( options.time );
			}
			if (o.type === 1) {
				o.text = 'Action';
				o._listitem = 'action';
			}
			if (o.type === 2) {
				o.text = 'Character Name';
				o._listitem = 'charname';
			}
			if (o.type === 3) {
				o.text = 'Dialog';
				o._listitem = 'dialog';
			}
			if (o.type === 4) {
				o.text = 'Parenthetical';
				o._listitem = 'parenthetical';
			}
			if (options.text) {
				o.text = options.text;
			} else {
				o.text += ' '+editorlist.length();
			}
			editorlist.set(o);
			if ([1, 2, 3, 4].includes(o.type)) {
				var k = editorlist.get_item_keys( o.uid );
				softkeys.autoheight( k.text );
			}
			editorlist.select();
			editorlist.down();
			editor.focus_first_element();
			xlate.update();
		},
		focus_first_element: function () {
			$.taxeer('ffe', function () {
				focus_first_element( editorlist.get_item_element() );
			}, 100);
		},
	};
	Hooks.set('ready', function (args) {
		mfateeh = view.mfateeh( 'edit' );
		editorlist = list( mfateeh.list )
						.idprefix( 'editorlist' )
						.listitem('scene')
					;
		editorlist.uponpaststart = editorlist.uponpastend = function () {
			return 1;
		};
		editorlist.after_set = function (o, c, k) {
			k.text.uponenter = function (atstart, atend) {
				if (atend) editor.add();
			};
			if (o.type === 0) { // Scene
				k.place_text.on_focus_prev = editor.prev;
				k.place_text.onclick = function () {
					if (o.place == 1) o.place = 0, setdata(k.place_text, 'i18n', 'int');
					else o.place = 1, setdata(k.place_text, 'i18n', 'ext');
					xlate.update();
				};
				k.time_text.on_focus_next = editor.next;
				k.time_text.onclick = function () {
					if (o.time == 0) o.time = 1, setdata(k.time_text, 'i18n', 'day');
					else if (o.time == 1) o.time = 2, setdata(k.time_text, 'i18n', 'night');
					else if (o.time == 2) o.time = 3, setdata(k.time_text, 'i18n', 'morning');
					else if (o.time == 3) o.time = 4, setdata(k.time_text, 'i18n', 'evening');
					else o.time = 0, setdata(k.time_text, 'i18n', 'notime');
					xlate.update();
				};
			}
			if ([1, 2, 3, 4].includes(o.type)) { // Action, Character Name, Dialog, Parenthetical
				k.text.on_focus_prev = editor.prev;
				k.text.on_focus_next = editor.next;
			}
		};
	});
	Hooks.set('softkey', function (args) {
		if (view.is_active('edit') && args[0] == 'tab') {
			preventdefault(args[1]);
			if (args[1].type == 'keydown') {
				editor.replace_with();
			}
		}
	});
	Hooks.set('viewready', function (args) { if (args.name == 'edit') {
		softkeys.list.basic(editorlist);
		editorlist.rakkaz(1, 1);
		editor.focus_first_element();
		pager.intaxab('edit', 1);
		webapp.header();
		softkeys.set('9', function (k, e) {
			editor.replace_with();
		}, '9', 'iconrefresh', 0);
		softkeys.set('delete', function (k, e) {
			if (e.altKey || e.type != 'keydown') {
				editorlist.pop();
				editor.focus_first_element();
			}
			else return 0; // cancel anim [waiting for SK modifier support]
		}, 'd', 'icondeleteforever', 0);
		softkeys.set(['0', 's'], function (k, e) {
			if (e.altKey || e.type != 'keydown') editor.save();
			else return 0; // cancel anim [waiting for SK modifier support]
		}, '1', 'iconsave', 0);
		softkeys.set('2', function () {
			editor.add(2);
		}, '2', 'iconperson', 0);
		softkeys.set('3', function () {
			editor.add(3);
		}, '3', 'iconquote', 0);
		softkeys.set('1', function () {
			editor.add(1);
		}, '1', 'iconshorttext', 0);
		softkeys.set(K.sl, function () {
			editor.add(0);
		}, 0, 'iconadd', 0);
	} });
})();
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
			Hooks.run('view', 'edit');
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
			screenplaylist.pop(o.uid);
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
								webapp.itlaa3( translate('alreadytaken') );
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
					m: 'name',
					q: 1,
				});
			}
		},
		is_folder_selected: function () {
			var selected_folder = preferences.get('selected_folder');
			if (selected_folder) {
				screenplayfolder.hidden = 1;
			} else {
				screenplayfolder.hidden = 0;
				softkeys.set('3', function () {
					main.select_folder();
				}, '3', 'iconfolderopen', 0);
			}
		},
		select_folder: function () { $.taxeer('select_folder', function () {
			var promise = window.showDirectoryPicker();
			promise.then(async function (directoryHandle) {
				screenplaylist.popall();
				main.is_folder_selected();
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
	Hooks.set('ready', function (args) {
		document.title = 'Screenplay';
		if (pager) {
			pager.safaa();
			pager.jama3('main', 'iconmenu', xlate('all'));
			pager.jama3('edit', 'iconedit', xlate('edit'));
			pager.jama3('settings', 'iconsettings', xlate('cfg'));
		}
		webapp.bixraaj(1);
		webapp.statusbarpadding();
		webapp.header();
		mfateeh = view.mfateeh('main');
		screenplaylist = list( mfateeh.list ).idprefix('screenplaylist');
		screenplaylist.onpress = function (o, k) {
			if (k == '0') {
				if ( confirm( translate( 'delete' ) ) ) {
					main.remove(o);
				}
			}
			if (k == K.en) {
				var content = fs.readFileSync('/home/nano/Screenplays/'+o.title).toString();
				var json = [];
				try { json = JSON.parse(content); } catch (e) {}
				editor.load( '/home/nano/Screenplays/'+o.title, json );
				Hooks.run('view', 'edit');
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
		$.taxeer('switch', function () {
			Hooks.run('view', 'edit');
			main.read_file( rootpath+'/Dark.screenplay' );
		}, 100);
	});
	Hooks.set('viewready', function (args) { if (args.name == 'main') {
		pager.intaxab('main', 1);
		screenplaylist.rakkaz(1, 1);
		softkeys.list.basic(screenplaylist);
		softkeys.set('3', function () {
			main.open();
		}, '3', 'iconfolderopen', 0);
		softkeys.set('0', function () {
			screenplaylist.press('0');
		}, '0', 'icondeleteforever', 0);
		softkeys.set(K.sl, function () {
			main.create();
		}, 0, 'iconadd', 0);
		screenplaylist.select();
	} });
	Hooks.set('dropped', async function (e) {
		for (const item of e.items) {
			if (item.kind == 'file') {
				const entry = await item.getAsFileSystemHandle();
				if (entry.kind == 'directory') {
				} else {
					main.read_file(entry);
				}
			}
		}
	});
	Hooks.set('restore', function (args) {
		webapp.header();
	});
})();


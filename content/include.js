window.addEventListener('load', function(e) {
	if (window.ZoteroPane) {
		let doc = window.ZoteroPane.document;
		let btn = doc.getElementById('zotrecsrch-toggle-btn');
		btn.checked = Zotero.Prefs.get('recursiveCollections');
	}
}, false);

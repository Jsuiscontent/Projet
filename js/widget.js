class LaFourchetteWidget extends Widget {
	
	constructor(id, app) {
		super(id, LaFourchetteModel, LaFourchetteView, LaFourchetteController, app);
	}
	
	setUp() {
		super.setUp();
		this.header = true;
		this.footer = true;
		this.sizeX = 2;
		this.sizeY = 1;
		this.radius = 15;
	}
	
	async ready() {
		super.ready();
		SocketIO.initialize();
		trace(this);
		SocketIO.on("msg", this.mvc.controller.onMessage.bind(this));
		/*this.mvc.controller.load();*/
	}
	
}

class LaFourchetteModel extends WidgetModel {
	
	constructor() {
		super();
	}
	
	setUp() {
		super.setUp();
		
	}

}

class LaFourchetteView extends WidgetView {
	
	constructor() {
		super();
	}
	
	setUp() {
		super.setUp();
		
	}

	draw() {
		super.draw();
		
		
		/*this.try.footer.innerHTML = "test socket";
		SS.style(this.try.footer, {"userSelect": "none", "cursor": "pointer"});
		Events.on(this.try.footer, "click", event => this.mvc.controller.socketClick());
		this.try.stage.appendChild(this.try.footer);*/
		var btn = HH.create("button");
		btn.innerHTML = "Paris";
		Events.on(btn, "click", event => this.mvc.controller.loadParis());
		this.footer.appendChild(btn);

		var btn1 = HH.create("button");
		btn1.innerHTML = "Lyon";
		Events.on(btn1, "click", event => this.mvc.controller.loadLyon());
		this.footer.appendChild(btn1);

		var btn2 = HH.create("button");
		btn2.innerHTML = "Strasbourg";
		Events.on(btn2, "click", event => this.mvc.controller.loadStrasbourg());
		this.footer.appendChild(btn2);

		var btn3 = HH.create("button");
		btn3.innerHTML = "Lille";
		Events.on(btn3, "click", event => this.mvc.controller.loadLille());
		this.footer.appendChild(btn3);

		var btn4 = HH.create("button");
		btn4.innerHTML = "Bordeaux";
		Events.on(btn4, "click", event => this.mvc.controller.loadBordeaux());
		this.footer.appendChild(btn4);

	}
	
	/*update(title, link) {
		this.link.innerHTML = title;
		HH.attr(this.link, {"https://www.lafourchette.com/ville/paris/415144" + link, "target": "_blank"});
	}*/

	createLinkParis(title, link) {
		var link = HH.create("a");
		SS.style(link, {"fontSize": "10px", "textDecoration": "none"});
		this.stage.appendChild(link);
		this.link.innerHTML = title;
		HH.attr(this.link, {"href": "https://www.lafourchette.com/ville/paris/415144" + link, "target": "_blank"});
	}

	createLinkLyon(title, link) {
		var link = HH.create("a");
		SS.style(link, {"fontSize": "10px", "textDecoration": "none"});
		this.stage.appendChild(link);
		this.link.innerHTML = title;
		HH.attr(this.link, {"href": "https://www.lafourchette.com/ville/lyon/326512" + link, "target": "_blank"});

	}

	createLinkStrasbourg(title, link) {
		var link = HH.create("a");
		SS.style(link, {"fontSize": "10px", "textDecoration": "none"});
		this.stage.appendChild(link);
		link.innerHTML = title;
		HH.attr(link, {"href": "https://www.lafourchette.com/ville/strasbourg/529135" + link, "target": "_blank"});

	}

	createLinkLille(title, link) {
		var link = HH.create("a");
		SS.style(link, {"fontSize": "10px", "textDecoration": "none"});
		this.stage.appendChild(link);
		link.innerHTML = title;
		HH.attr(link, {"href": "https://www.lafourchette.com/ville/lille/311886" + link, "target": "_blank"});

	}

	createLinkBordeaux(title, link) {
		var link = HH.create("a");
		SS.style(link, {"fontSize": "10px", "textDecoration": "none"});
		this.stage.appendChild(link);
		link.innerHTML = title;
		HH.attr(link, {"href": "https://www.lafourchette.com/ville/bordeaux/60566" + link, "target": "_blank"});

	}


	
}

class LaFourchetteController extends WidgetController {
	
	constructor() {
		super();
	}
	
	setUp() {
		super.setUp();
		
	}
	
	onMessage(data) {
		trace("received socket msg", data);
	}
	
	socketClick(event) {
		trace("test socket");
		SocketIO.send("msg", {test: "message"});
	}

	async maPosition(){ //Localisation 
		navigator.geolocation.getCurrentPosition(function(position) {
  do_something(position.coords.latitude, position.coords.longitude);
});
	}           

	
	
	async loadParis() {
		let result = await this.mvc.main.dom("https://www.lafourchette.com/ville/paris/415144"); // load web page
		let domstr = _atob(result.response.dom); // decode result
		let parser = new DOMParser(); // init dom parser
		let dom = parser.parseFromString(domstr, "text/html"); // inject result
		let article1 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[1]/li[1]').firstResult; // find interesting things
		let article2 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[1]/li[2]').secondResult; 
		let article3 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[1]/li[3]').TroisResult;
		let article4 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[1]/li[4]').QuatreResult;
		let article5 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[1]/li[5]').CinqResult;
		let article6 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[2]/li[1]').SixResult;
		let article7 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[2]/li[2]').SeptResult;
		let article8 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[2]/li[3]').HuitResult;
		let article9 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[2]/li[4]').NeufResult;
		let article10 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[2]/li[5]').DixResult;
		this.mvc.view.createLinkParis(article1.textContent, article1.getAttribute("href"));
		this.mvc.view.createLinkParis(article2.textContent, article2.getAttribute("href"));
		this.mvc.view.createLinkParis(article3.textContent, article3.getAttribute("href"));
		this.mvc.view.createLinkParis(article4.textContent, article4.getAttribute("href"));
		this.mvc.view.createLinkParis(article5.textContent, article5.getAttribute("href"));
		this.mvc.view.createLinkParis(article6.textContent, article6.getAttribute("href"));
		this.mvc.view.createLinkParis(article7.textContent, article7.getAttribute("href"));
		this.mvc.view.createLinkParis(article8.textContent, article8.getAttribute("href"));
		this.mvc.view.createLinkParis(article9.textContent, article9.getAttribute("href"));
		this.mvc.view.createLinkParis(article10.textContent, article10.getAttribute("href"));
	}

	async loadLyon() {
		let result = await this.mvc.main.dom("https://www.lafourchette.com/ville/lyon/326512"); // load web page
		let domstr = _atob(result.response.dom); // decode result
		let parser = new DOMParser(); // init dom parser
		let dom = parser.parseFromString(domstr, "text/html"); // inject result
		let article1 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[1]/li[1]').firstResult; // find interesting things
		let article2 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[1]/li[2]').secondResult; 
		let article3 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[1]/li[3]').TroisResult;
		let article4 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[1]/li[4]').QuatreResult;
		let article5 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[1]/li[5]').CinqResult;
		let article6 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[2]/li[1]').SixResult;
		let article7 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[2]/li[2]').SeptResult;
		let article8 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[2]/li[3]').HuitResult;
		let article9 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[2]/li[4]').NeufResult;
		let article10 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[2]/li[5]').DixResult;
		this.mvc.view.createLinkLyon(article1.textContent, article1.getAttribute("href"));
		this.mvc.view.createLinkLyon(article2.textContent, article2.getAttribute("href"));
		this.mvc.view.createLinkLyon(article3.textContent, article3.getAttribute("href"));
		this.mvc.view.createLinkLyon(article4.textContent, article4.getAttribute("href"));
		this.mvc.view.createLinkLyon(article5.textContent, article5.getAttribute("href"));
		this.mvc.view.createLinkLyon(article6.textContent, article6.getAttribute("href"));
		this.mvc.view.createLinkLyon(article7.textContent, article7.getAttribute("href"));
		this.mvc.view.createLinkLyon(article8.textContent, article8.getAttribute("href"));
		this.mvc.view.createLinkLyon(article9.textContent, article9.getAttribute("href"));
		this.mvc.view.createLinkLyon(article10.textContent, article10.getAttribute("href"));


	}

	async loadStrasbourg() {
		let result = await this.mvc.main.dom("https://www.lafourchette.com/ville/strasbourg/529135"); // load web page
		let domstr = _atob(result.response.dom); // decode result
		let parser = new DOMParser(); // init dom parser
		let dom = parser.parseFromString(domstr, "text/html"); // inject result
		let article1 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[1]/li[1]').firstResult; // find interesting things
		let article2 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[1]/li[2]').secondResult; 
		let article3 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[1]/li[3]').TroisResult;
		let article4 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[1]/li[4]').QuatreResult;
		let article5 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[1]/li[5]').CinqResult;
		let article6 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[2]/li[1]').SixResult;
		let article7 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[2]/li[2]').SeptResult;
		let article8 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[2]/li[3]').HuitResult;
		let article9 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[2]/li[4]').NeufResult;
		let article10 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[2]/li[5]').DixResult;
		this.mvc.view.createLinkStrasbourg(article1.textContent, article1.getAttribute("href"));
		this.mvc.view.createLinkStrasbourg(article2.textContent, article2.getAttribute("href"));
		this.mvc.view.createLinkStrasbourg(article3.textContent, article3.getAttribute("href"));
		this.mvc.view.createLinkStrasbourg(article4.textContent, article4.getAttribute("href"));
		this.mvc.view.createLinkStrasbourg(article5.textContent, article5.getAttribute("href"));
		this.mvc.view.createLinkStrasbourg(article6.textContent, article6.getAttribute("href"));
		this.mvc.view.createLinkStrasbourg(article7.textContent, article7.getAttribute("href"));
		this.mvc.view.createLinkStrasbourg(article8.textContent, article8.getAttribute("href"));
		this.mvc.view.createLinkStrasbourg(article9.textContent, article9.getAttribute("href"));
		this.mvc.view.createLinkStrasbourg(article10.textContent, article10.getAttribute("href"));

	}

	async loadLille() {
		let result = await this.mvc.main.dom("https://www.lafourchette.com/ville/lille/311886"); // load web page
		let domstr = _atob(result.response.dom); // decode result
		let parser = new DOMParser(); // init dom parser
		let dom = parser.parseFromString(domstr, "text/html"); // inject result
		let article1 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[1]/li[1]').firstResult; // find interesting things
		let article2 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[1]/li[2]').secondResult; 
		let article3 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[1]/li[3]').TroisResult;
		let article4 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[1]/li[4]').QuatreResult;
		let article5 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[1]/li[5]').CinqResult;
		let article6 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[2]/li[1]').SixResult;
		let article7 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[2]/li[2]').SeptResult;
		let article8 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[2]/li[3]').HuitResult;
		let article9 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[2]/li[4]').NeufResult;
		let article10 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[2]/li[5]').DixResult;
		this.mvc.view.createLinkLille(article1.textContent, article1.getAttribute("href"));
		this.mvc.view.createLinkLille(article2.textContent, article2.getAttribute("href"));
		this.mvc.view.createLinkLille(article3.textContent, article3.getAttribute("href"));
		this.mvc.view.createLinkLille(article4.textContent, article4.getAttribute("href"));
		this.mvc.view.createLinkLille(article5.textContent, article5.getAttribute("href"));
		this.mvc.view.createLinkLille(article6.textContent, article6.getAttribute("href"));
		this.mvc.view.createLinkLille(article7.textContent, article7.getAttribute("href"));
		this.mvc.view.createLinkLille(article8.textContent, article8.getAttribute("href"));
		this.mvc.view.createLinkLille(article9.textContent, article9.getAttribute("href"));
		this.mvc.view.createLinkLille(article10.textContent, article10.getAttribute("href"));


	}

	async loadBordeaux() {
		let result = await this.mvc.main.dom("https://www.lafourchette.com/ville/bordeaux/60566"); // load web page
		let domstr = _atob(result.response.dom); // decode result
		let parser = new DOMParser(); // init dom parser
		let dom = parser.parseFromString(domstr, "text/html"); // inject result
		let article1 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[1]/li[1]').firstResult; // find interesting things
		let article2 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[1]/li[2]').secondResult; 
		let article3 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[1]/li[3]').TroisResult;
		let article4 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[1]/li[4]').QuatreResult;
		let article5 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[1]/li[5]').CinqResult;
		let article6 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[2]/li[1]').SixResult;
		let article7 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[2]/li[2]').SeptResult;
		let article8 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[2]/li[3]').HuitResult;
		let article9 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[2]/li[4]').NeufResult;
		let article10 = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[2]/li[5]').DixResult;
		this.mvc.view.createLinkBordeaux(article1.textContent, article1.getAttribute("href"));
		this.mvc.view.createLinkBordeaux(article2.textContent, article2.getAttribute("href"));
		this.mvc.view.createLinkBordeaux(article3.textContent, article3.getAttribute("href"));
		this.mvc.view.createLinkBordeaux(article4.textContent, article4.getAttribute("href"));
		this.mvc.view.createLinkBordeaux(article5.textContent, article5.getAttribute("href"));
		this.mvc.view.createLinkBordeaux(article6.textContent, article6.getAttribute("href"));
		this.mvc.view.createLinkBordeaux(article7.textContent, article7.getAttribute("href"));
		this.mvc.view.createLinkBordeaux(article8.textContent, article8.getAttribute("href"));
		this.mvc.view.createLinkBordeaux(article9.textContent, article9.getAttribute("href"));
		this.mvc.view.createLinkBordeaux(article10.textContent, article10.getAttribute("href"));

	}
	
}
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
		this.mvc.controller.load();
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
		this.link = HH.create("a");
		SS.style(this.link, {"fontSize": "10px", "textDecoration": "none"});
		this.stage.appendChild(this.link);
		
		/*this.try.footer.innerHTML = "test socket";
		SS.style(this.try.footer, {"userSelect": "none", "cursor": "pointer"});
		Events.on(this.try.footer, "click", event => this.mvc.controller.socketClick());
		this.try.stage.appendChild(this.try.footer);*/
		var btn = HH.create("button");
		btn.innerHTML = "Paris";
		Events.on(btn, "click", event => this.mvc.controller.maPosition());
		this.footer.appendChild(btn);

		var btn1 = HH.create("button");
		btn1.innerHTML = "Lyon";
		Events.on(btn1, "click", event => this.mvc.controller.maPosition());
		this.footer.appendChild(btn1);

		var btn2 = HH.create("button");
		btn2.innerHTML = "Strasbourg";
		Events.on(btn2, "click", event => this.mvc.controller.maPosition());
		this.footer.appendChild(btn2);

		var btn3 = HH.create("button");
		btn3.innerHTML = "Lille";
		Events.on(btn3, "click", event => this.mvc.controller.maPosition());
		this.footer.appendChild(btn3);

		var btn4 = HH.create("button");
		btn4.innerHTML = "Bordeaux";
		Events.on(btn4, "click", event => this.mvc.controller.maPosition());
		this.footer.appendChild(btn4);

	}
	
	/*update(title, link) {
		this.link.innerHTML = title;
		HH.attr(this.link, {"https://www.lafourchette.com/ville/paris/415144" + link, "target": "_blank"});
	}*/

	createLink(title, link) {
		var link = HH.create("a");
		SS.style(link, {"fontSize": "10px", "textDecoration": "none"});
		this.stage.appendChild(link);
		link.innerHTML = title;
		HH.attr(link, {"href": "https://www.lafourchette.com/ville/paris/415144" + link, "target": "_blank"});

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

	
	
	async load() {
		let result = await this.mvc.main.dom("https://www.lafourchette.com/ville/paris/415144"); // load web page
		let domstr = _atob(result.response.dom); // decode result
		let parser = new DOMParser(); // init dom parser
		let dom = parser.parseFromString(domstr, "text/html"); // inject result
		let article = new xph().doc(dom).ctx(dom).craft('//*[@id="mostBookedPanel"]/div[1]/ul[1]/li[1]/div[2]/a[1]').firstResult; // find interesting things
		let article2 = new xph().doc(dom).ctx(dom).craft('//*[@id="en-continu"]/div/ul/li[2]/a').secondResult; // find interesting things
		this.mvc.view.createLink(article.textContent, article.getAttribute("href"));
		//this.mvc.view.createLink(article2.textContent, article2.getAttribute("href"));


	}
	
}
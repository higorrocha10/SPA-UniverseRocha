import { Router } from "./router.js"

const router = new Router() // Instanciar un objeto de una clase.

router.add("/", "/pages/home.html")
router.add("/universe.html", "/pages/universe.html")
router.add("/exploration.html", "/pages/exploration.html")
router.add(404, "/pages/404.html")

router.handle() // Accesar al método de la clase Router.

window.onpopstate = () => router.handle()
window.route = () => router.route()

export class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event // Verificar si he pasado un evento. Window : Objeto global que existe en el navegador.
    event.preventDefault() // No HACER, evitar la acción padrón del elemento.

    window.history.pushState({}, "", event.target.href) // Poner en el histórico que estamos cambiando de página.

    this.handle()
  }

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]
    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html
      })
  }
}

Vue.component('about-card', {
	props: ['img', 'tittle', 'info', 'repo'],
	template: `
    <div class="col col-lg-3 mt-3 animacion">
        <div class="card h-100 border-light mg-fluid">
            
            <img :src="img" :alt="tittle" class="img-fluid img-css"/>

            <div class="card-body">
                <h5 class="card-title text-center"> {{ tittle }}</h5>
                <p class="card-text">
                    {{ info }}
                </p>
            </div>

            <div class="card-footer border-light text-center">
                <a :href="repo" target="_blank" class="btn btn-outline-primary" role="button">Ir a repositorio</a>
            </div>
        </div>
    </div>
    `,
});

new Vue({
	el: '#Component-conocimientos',
	data: {
		conocimientos: [
			{
				nombre: 'java',
				img: 'public/img/java.png',
				info: 'Conocimientos en java',
			},
			{
				nombre: 'JavaScript',
				img: 'public/img/java-script.png',
				info: 'Programacion con nuevos estandares JavaScript ES+',
				repo:
					'https://github.com/Gustavo-system?tab=repositories&q=&type=&language=javascript',
			},
			{
				nombre: 'Python',
				img: 'public/img/python.png',
				info: 'Conocimientos en python, conexion a base de datos',
			},
			{
				nombre: 'Base de Datos',
				img: 'public/img/dato.png',
				info: 'Manejo de Base de datos por comando CRUD',
			},
			{
				nombre: 'PHP',
				img: 'public/img/php.png',
				info: 'Implementacion de PHP como BackEnd en paginas web',
				repo: 'https://github.com/Gustavo-system?tab=repositories&q=&type=&language=php',
			},
			{
				nombre: 'Creacion de Paginas Web',
				img: 'public/img/navegador.png',
				info: 'Creacion de Paginas Web implementando HTML5, CSS3, Bootstrap 4',
				repo: 'https://github.com/Gustavo-system?tab=repositories&q=&type=&language=html',
			},
			{
				nombre: 'ReactJS',
				img: 'public/img/reactjs.png',
				info: 'Conocimientos Basicos de ReactJs con HOOKS y MERS',
				repo: 'https://github.com/Gustavo-system/Buscador-Gifs-React-app',
			},
			{
				nombre: 'Controlador de Versiones',
				img: 'public/img/github.png',
				info: 'Manejo de GIT en GitHub',
				repo: 'https://github.com/Gustavo-system',
			},
		],
	},
});

new Vue({
	el: '#Componente-aprendiendo',
	data: {
		aprendiendo: [
			{
				nombre: 'Desarrollo Movil',
				img: 'public/img/androide.png',
				info:
					'Estoy aprendiendo a desarrollar aplicaciones nativas para Android, utilizando Java o Kotlin.',
				repo: 'https://github.com/Gustavo-system/my-pizza-app',
			},
			{
				nombre: 'React Native',
				img: 'public/img/react-native.png',
				info:
					'Estoy aprendiendo a desarrollar aplicaciones para IOS y Android con React Native ya que el codigo se puede reutilizar y ahorrar tiempos de elavoracion',
			},
			{
				nombre: 'Angular',
				img: 'public/img/angular.png',
				info: 'Creacion de Aplicaciones Web implementando Angular CLI',
				repo:
					'https://github.com/Gustavo-system?tab=repositories&q=&type=&language=typescript',
			},
			{
				nombre: 'VueJs',
				img: 'public/img/vue.png',
				info: 'Creacion de Aplicaciones Web implementando Vue',
			},
		],
	},
});

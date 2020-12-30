Vue.component('about-card',{
    props: ['img', 'tittle', 'info', 'repo'],
    template: `
    <div class="col col-lg-3 mt-3">
        <div class="card h-100 border-light">

            <img :src="img" :alt="tittle" class="card-img-top"/>

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
    `
})

new Vue({
    el: '#Component-conocimientos',
    data: {
        conocimientos: [
            {
                nombre: 'java',
                img: 'public/img/java.png',
                info: 'Conocimientos en java',
                repo: ''
            },
            {
                nombre: 'JavaScript',
                img: 'public/img/java-script.png',
                info:'Programador Jr en JavaScript, implementando ES+'
            },
            {
                nombre: 'Python',
                img: 'public/img/python.png',
                info:'Implementacion de Python y manipulacion de base de datos'
            },
            {
                nombre: 'Desarrollo Movil',
                img: 'public/img/androide.png',
                info:'Desarrollo de aplicaciones moviles para android implementando Java o Kotlin',
                repo: 'https://github.com/Gustavo-system/my-pizza-app'
            },
            {
                nombre: 'Base de Datos',
                img: 'public/img/dato.png',
                info:'Manejo de Base de datos por comando CIUD'
            },
            {
                nombre: 'PHP',
                img: 'public/img/php.png',
                info:'Implementacion de PHP como BackEnd en paginas web'
            },
            {
                nombre: 'Creacion de Paginas Web',
                img: 'public/img/navegador.png',
                info:'Creacion de Paginas Web implementando HTML, CSS3, JavaScript'
            },
            {
                nombre: 'ReactJS',
                img: 'public/img/reactjs.png',
                info: 'Conocimientos Basicos de ReactJs'
            },
            {
                nombre: 'Controlador de Versiones',
                img: 'public/img/github.png',
                info:'Manejo de GIT en GitHub',
                repo:'https://github.com/Gustavo-system'
            }


        ]
    }
})
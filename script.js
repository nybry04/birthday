Vue.component('form-header', {
    props: {
        text: String
    },
    template: `<div class="fs3">{{ text }}<hr/></div>`
})

Vue.component('age-verification', {
    data: () => {
        return {
            pass: new Date().getDate() === 4 && (new Date().getMonth() + 1) === 11,
            redirect: () => {
                window.localStorage.setItem('pass', 'true')
                window.location.href = 'yra.html'
            },
            cacheRedirect: () => {
                if(window.localStorage.getItem('pass') === 'true') {
                    window.location.href = 'yra.html'
                }
            }
        }
    },
    template:
        `<div class="center-vh bg-white50 p10 br10 shadow" style="width: 80vw; height: 40vh">
            {{ cacheRedirect() }}
            <div v-if="!pass">
              <form-header text="Жестокая проверка 😳" />
              <div class="fs2-5">
                Вы не прошли проверку!! 😡😡😡
              </div>
              <div class="fs2-5" style="margin-top: 30px">
                Советуем вам подождать до 4 ноября 😇
              </div>
            </div>
            <div v-else>
              <form-header text="Жестокая проверка" />
              {{ redirect() }}
            </div>
        </div>`
})

new Vue({
    el: '#app',
    template: `<age-verification/>`,
    data: function () {
        return {
            text: 'hello world'
        }
    }
})
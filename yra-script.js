Vue.component('card', {
    props: {
        showText: String,
        hideText: String
    },
    data: () => {
        return {
            show: false
        }
    },
    template: `
      <div @mouseover="show = true" @mouseleave="show = false" class="p10 bg-white50 br10 m5 shadow fs3">
          <div v-if="show" class="fc-white900">
            {{ hideText }}
          </div>
          <div v-else class="fc-white900">
            {{ showText }}
          </div>
      </div>
    `
})

new Vue({
    el: '#app',
    template: `
      <div>
          <div class="bg-white900 fs2-5 fc-white50 p10">
            <div>Привет! Я сделал маленький подарок, надеюсь тебе понравится) 😳</div>
            <div style="margin-top: 15px">Тут 18 записочек</div>
          </div>
          <div style="display: flex; flex-direction: column; width: 100%; height: 100%" class="fix-back">
            <card show-text="1. ✨✨✨" hide-text="Ты излучаешь приятную энергию"/>
            <card show-text="2. ✨✨✨" hide-text="Ты умная"/>
            <card show-text="3. ✨✨✨" hide-text="Ты советуешь интересные книги"/>
            <card show-text="4. ✨✨✨" hide-text="Ты красивая"/>
            <card show-text="5. ✨✨✨" hide-text="Ты добрая"/>
            <card show-text="6. ✨✨✨" hide-text="Ты милая"/>
            <card show-text="7. ✨✨✨" hide-text="У тебя прекрасный голос"/>
            <card show-text="8. ✨✨✨" hide-text="Ты белая и пушистая"/>
            <card show-text="9. ✨✨✨" hide-text="Ты уникальная"/>
            <card show-text="10. ✨✨✨" hide-text="Ты очень интересная"/>
            <card show-text="11. ✨✨✨" hide-text="Ты забавная"/>
            <card show-text="12. ✨✨✨" hide-text="С тобой приятно общаться"/>
            <card show-text="13. ✨✨✨" hide-text="Ты мило издеваешься)"/>
            <card show-text="14. ✨✨✨" hide-text="Ты не боишься перемен"/>
            <card show-text="15. ✨✨✨" hide-text="Ты эмоциональная"/>
            <card show-text="16. ✨✨✨" hide-text="Ты эстетичная"/>
            <card show-text="17. ✨✨✨" hide-text="Когда надо, ты проявляешь серьезность"/>
            <card show-text="18. ✨✨✨" hide-text="Ты умеешь поддерживать"/>
          </div>
      </div>
    `,
})
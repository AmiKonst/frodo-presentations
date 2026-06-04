import { _ as _export_sfc, r as ref, c as computed, o as onMounted, a as openBlock, b as createElementBlock, d as createBaseVNode, n as normalizeStyle, e as createVNode, w as withCtx, t as toDisplayString, f as createCommentVNode, F as Fragment, g as renderList, h as createTextVNode, T as Transition, i as withKeys, s as stores, j as storeToRefs, k as watch } from './index.ffe0d762.js';

const WhiteLabel_vue_vue_type_style_index_0_scoped_e2d90a19_lang = '';

const _hoisted_1 = { class: "progress-bar" };
const _hoisted_2 = { class: "slide-inner" };
const _hoisted_3 = { class: "slide-header" };
const _hoisted_4 = { class: "slide-number" };
const _hoisted_5 = {
  key: 0,
  class: "main-title"
};
const _hoisted_6 = { class: "slide-title" };
const _hoisted_7 = { class: "slide-description" };
const _hoisted_8 = { class: "content-grid" };
const _hoisted_9 = { class: "items-section" };
const _hoisted_10 = { class: "items-list" };
const _hoisted_11 = {
  key: 0,
  class: "extra-section"
};
const _hoisted_12 = {
  key: 0,
  class: "examples-block"
};
const _hoisted_13 = {
  key: 1,
  class: "notes-block"
};
const _hoisted_14 = {
  key: 0,
  class: "speaker-help"
};
const _hoisted_15 = { class: "help-popover" };
const _hoisted_16 = { class: "controls" };
const _hoisted_17 = ["disabled"];
const _hoisted_18 = { class: "slide-counter" };
const _hoisted_19 = ["disabled"];


const _sfc_main$2 = {
  __name: 'WhiteLabel',
  setup(__props) {

const presentation = {
    title: "Bilbo × Экосистема",
};

const slides = [
    {
        id: 1,
        title: "Музыкальная индустрия меняется",
        description: "ИИ снижает ценность самой музыки как продукта. Главным активом становится сообщество вокруг артиста.",
        help: "Начать с проблемы рынка. Музыка становится массовой и дешевой. Генеративный ИИ увеличивает количество контента. Выигрывают артисты, которые умеют строить отношения с аудиторией.",
        items: [
            "Рост AI-контента",
            "Переизбыток музыки",
            "Внимание становится главным ресурсом",
            "Фан-сообщества становятся новым активом"
        ]
    },
    {
        id: 2,
        title: "Проблема современных стримингов",
        help: "Подвести к тому, что Spotify, Яндекс Музыка, VK Музыка хорошо работают как каталоги, но плохо работают как социальные платформы.",
        description: "Стриминги дают прослушивания, но не дают отношений между артистом и слушателем.",
        items: [
            "Обезличенное потребление",
            "Слабая обратная связь",
            "Отсутствие сообщества",
            "Ограниченная монетизация артистов",
            "Артист не знает свою аудиторию"
        ]
    },
    {
        id: 3,
        title: "Bilbo — это не стриминг",
        help: "Важно донести, что мы не создаем очередной плеер, а строим коммуникационную надстройку. Мы не боремся за рынок стриминга, мы создаем рынок социального взаимодействия вокруг музыки.",
        description: "Bilbo — музыкальная экосистема внутри мессенджеров.",
        items: [
            "Telegram Mini App",
            "Интеграция с MAX",
            "Бесшовная интеграция в супер-аппы",
            "Социальный слой поверх музыки",
            "Прямой инструментарий для Creator Economy",
            "Управление фан-сообществами"
        ]
    },
    {
        id: 4,
        title: "Там, где уже общаются люди",
        help: "Сделать акцент на Telegram и MAX как естественную среду взаимодействия.",
        description: "Bilbo работает внутри среды общения, а не пытается переманить аудиторию.",
        items: [
            "Telegram",
            "MAX",
            "Чаты",
            "Каналы",
            "Сообщества",
            "Встроенный музыкальный опыт"
        ]
    },
    {
        id: 5,
        title: "Новая экономика артиста",
        help: "Очень важный слайд. Показать отличие от стримингов.",
        description: "Bilbo помогает артистам зарабатывать напрямую на отношениях с аудиторией.",
        items: [
            "Подписки",
            "Донаты",
            "Лицензии",
            "Мерч",
            "Платные сообщения",
            "Платные активности",
            "Комьюнити-монетизация",
            "Кастомизация"
        ]
    },
    {
        id: 6,
        title: "Прямая связь артист ↔ фанат",
        help: "Показать реальные кейсы.",
        description: "Каждое взаимодействие может превращаться в ценность для обеих сторон.",
        examples: [
            "Донат → ответ от артиста",
            "Релиз → напрямую своей аудитории",
            "Стикеры → вирусное распространение через фанатов",
            "HEXA → офлайн-встречи и события",
            "KANBY → прозрачный процесс создания музыки",
            "Статистика → понимание своей аудитории",
            "Сообщество → участие в развитии артиста"
        ],
        items: [
            "Лояльность",
            "Удержание",
            "Повторные продажи",
            "Рост сообщества"
        ]
    },
    {
        id: 7,
        title: "Прозрачная аналитика",
        help: "Очень сильный аргумент для артистов и лейблов.",
        description: "Артист видит не только прослушивания, но и свое сообщество.",
        items: [
            "Источники аудитории",
            "Конверсии",
            "Доходы",
            "Вовлеченность",
            "Социальные связи",
            "Отчетность"
        ]
    },
    {
        id: 8,
        title: "Новая модель подписки",
        help: "Это потенциально один из самых сильных слайдов.",
        description: "Деньги получают только те артисты, которых действительно слушает пользователь.",
        items: [
            "User-centric модель",
            "Больше дохода артистам",
            "Меньше посредников",
            "Прозрачное распределение"
        ],
        notes: [
            "1% может распределяться владельцу плейлиста",
            "Стимулирование музыкальных каналов",
            "Рост органической дистрибуции"
        ]
    },
    {
        id: 9,
        title: "Стратегическая ценность",
        help: "Показать, как продукт закрывает потребности крупного игрока в удержании аудитории и формировании лояльности без прямой конкуренции с медиа-гигантами.",
        description: "Платформа для формирования собственной музыкальной вертикали внутри бренда.",
        items: [
            "Развитие талантов внутри экосистемы",
            "Собственная социально-музыкальная среда",
            "Creator economy",
            "Монетизация пользовательского внимания",
            "Новые сценарии для подписчиков",
            "LTV-инструменты для молодежного сегмента"
        ]
    },
    {
        id: 10,
        title: "Синергия, а не конкуренция",
        help: "Слайд для снятия возражений о перенасыщенности рынка. Мы объясняем, что существующие гиганты — это витрины, а мы — пространство взаимодействия.",
        description: "Bilbo эффективно дополняет классическую стриминговую инфраструктуру.",
        items: [
            "Стриминг-сервисы — дистрибуция и каталог",
            "Bilbo — инкубатор и развитие артистов",
            "Bilbo — глубокая связь с аудиторией",
            "Bilbo — фан-сообщества",
            "Bilbo — монетизация",
            "Bilbo — виральные социальные механики"
        ]
    },
    {
        id: 11,
        title: "Масштабируемость и расширяемость",
        help: "Показать, что экосистема не ограничена текущим функционалом.",
        description: "Bilbo адаптируется под разные аудитории, рынки и сценарии использования.",
        items: [
            "Плагинная архитектура",
            "Брендированные механики",
            "Интерактивные визуализации",
            "Стикеры и вирусные механики",
            "Партнерские интеграции",
            "10 языков интерфейса",
            "Поддержка RTL (арабский)",
            "Готовность к международному развитию"
        ]
    },
    {
        id: 12,
        title: "Экосистема Bilbo",
        help: "Не объяснять все подробно. Использовать как карту направлений для обсуждения.",
        description: "Точка входа для будущего развития музыкального мира.",
        items: ["AURA", "AROUND", "ROOMY", "HEXA", "ROYALITY", "KANBY", "BETTER", "MERCH", "LICENSE MARKETPLACE"]
    }
];

const currentIndex = ref(0);
const currentSlide = computed(() => slides[currentIndex.value]);
const progress = computed(() => ((currentIndex.value + 1) / slides.length) * 100);

const next = () => { if (currentIndex.value < slides.length - 1) currentIndex.value++; };
const prev = () => { if (currentIndex.value > 0) currentIndex.value--; };

onMounted(() => {
window.addEventListener('keydown', (e) => {
if (e.key === 'ArrowRight') next();
if(e.key === 'ArrowLeft') prev();
});
});

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", {
    class: "bilbo-presentation",
    onKeyup: [
      withKeys(next, ["right"]),
      withKeys(prev, ["left"])
    ],
    tabindex: "0"
  }, [
    createBaseVNode("div", _hoisted_1, [
      createBaseVNode("div", {
        class: "progress-fill",
        style: normalizeStyle({ width: progress.value + '%' })
      }, null, 4 /* STYLE */)
    ]),
    createVNode(Transition, {
      name: "slide-fade",
      mode: "out-in"
    }, {
      default: withCtx(() => [
        (openBlock(), createElementBlock("div", {
          key: currentSlide.value.id,
          class: "slide-content"
        }, [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("span", _hoisted_4, toDisplayString(currentSlide.value.id < 10 ? '0' + currentSlide.value.id : currentSlide.value.id), 1 /* TEXT */),
              (currentSlide.value.id === 1)
                ? (openBlock(), createElementBlock("h1", _hoisted_5, toDisplayString(presentation.title), 1 /* TEXT */))
                : createCommentVNode("v-if", true),
              createBaseVNode("h2", _hoisted_6, toDisplayString(currentSlide.value.title), 1 /* TEXT */),
              createBaseVNode("p", _hoisted_7, toDisplayString(currentSlide.value.description), 1 /* TEXT */)
            ]),
            createCommentVNode(" Основной список (Items) "),
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("div", _hoisted_9, [
                createBaseVNode("ul", _hoisted_10, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(currentSlide.value.items, (item, index) => {
                    return (openBlock(), createElementBlock("li", {
                      key: index,
                      class: "item"
                    }, [
                      _cache[0] || (_cache[0] = createBaseVNode("span", { class: "bullet" }, null, -1 /* HOISTED */)),
                      createTextVNode(" " + toDisplayString(item), 1 /* TEXT */)
                    ]))
                  }), 128 /* KEYED_FRAGMENT */))
                ])
              ]),
              createCommentVNode(" Дополнительные блоки (Examples / Notes) "),
              (currentSlide.value.examples || currentSlide.value.notes)
                ? (openBlock(), createElementBlock("div", _hoisted_11, [
                    (currentSlide.value.examples)
                      ? (openBlock(), createElementBlock("div", _hoisted_12, [
                          _cache[1] || (_cache[1] = createBaseVNode("h4", { class: "extra-label" }, "Кейсы", -1 /* HOISTED */)),
                          (openBlock(true), createElementBlock(Fragment, null, renderList(currentSlide.value.examples, (ex, i) => {
                            return (openBlock(), createElementBlock("div", {
                              class: "example-card",
                              key: i
                            }, toDisplayString(ex), 1 /* TEXT */))
                          }), 128 /* KEYED_FRAGMENT */))
                        ]))
                      : createCommentVNode("v-if", true),
                    (currentSlide.value.notes)
                      ? (openBlock(), createElementBlock("div", _hoisted_13, [
                          _cache[3] || (_cache[3] = createBaseVNode("h4", { class: "extra-label" }, "Важно", -1 /* HOISTED */)),
                          (openBlock(true), createElementBlock(Fragment, null, renderList(currentSlide.value.notes, (note, i) => {
                            return (openBlock(), createElementBlock("div", {
                              class: "note-item",
                              key: i
                            }, [
                              _cache[2] || (_cache[2] = createBaseVNode("span", { class: "note-icon" }, "★", -1 /* HOISTED */)),
                              createTextVNode(" " + toDisplayString(note), 1 /* TEXT */)
                            ]))
                          }), 128 /* KEYED_FRAGMENT */))
                        ]))
                      : createCommentVNode("v-if", true)
                  ]))
                : createCommentVNode("v-if", true)
            ])
          ])
        ]))
      ]),
      _: 1 /* STABLE */
    }),
    (currentSlide.value.help)
      ? (openBlock(), createElementBlock("div", _hoisted_14, [
          _cache[5] || (_cache[5] = createBaseVNode("div", { class: "help-trigger" }, "!", -1 /* HOISTED */)),
          createBaseVNode("div", _hoisted_15, [
            _cache[4] || (_cache[4] = createBaseVNode("div", { class: "help-label" }, "Спикеру:", -1 /* HOISTED */)),
            createTextVNode(" " + toDisplayString(currentSlide.value.help), 1 /* TEXT */)
          ])
        ]))
      : createCommentVNode("v-if", true),
    createBaseVNode("div", _hoisted_16, [
      createBaseVNode("button", {
        onClick: prev,
        disabled: currentIndex.value === 0,
        class: "nav-btn"
      }, "←", 8 /* PROPS */, _hoisted_17),
      createBaseVNode("div", _hoisted_18, toDisplayString(currentIndex.value + 1) + " / " + toDisplayString(slides.length), 1 /* TEXT */),
      createBaseVNode("button", {
        onClick: next,
        disabled: currentIndex.value === slides.length - 1,
        class: "nav-btn highlight"
      }, "→", 8 /* PROPS */, _hoisted_19)
    ])
  ], 32 /* NEED_HYDRATION */))
}
}

};
const WhiteLabel = /*#__PURE__*/_export_sfc(_sfc_main$2, [['__scopeId',"data-v-e2d90a19"],['__file',"D:/bilbo/presentations/src/pages/Home/components/WhiteLabel.vue"]]);

const _sfc_main$1 = {
  __name: 'Ready',
  props: {
    page: { type: String, default: '' },
    init: { type: Function, default: async () => {} }
},
  emits: ['ready'],
  setup(__props, { emit: __emit }) {

const nav = stores.nav();
const others = stores.others();

const { ready } = storeToRefs(others);

const props = __props;

const emit = __emit;

const onReady = async () => {
    if (props.init) {
        await props.init();
    }

    if (props.page === nav.page) {
        emit('ready');
    }

    nav.ready(props.page);
};

if (ready.value) {
    onReady();
}

watch(
    () => ready.value,
    async () => {
        if (ready.value) {
            onReady();
        }
    }
);

return (_ctx, _cache) => {
  return null
}
}

};
const Ready = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__file',"D:/bilbo/presentations/shared/components/ui/Ready.vue"]]);

const _sfc_main = {
  __name: 'Home',
  setup(__props) {

    const init = async () => {
    };

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    createVNode(WhiteLabel),
    createVNode(Ready, {
      page: "home",
      onReady: _cache[0] || (_cache[0] = () => {}),
      init: init
    })
  ], 64 /* STABLE_FRAGMENT */))
}
}

};
const Home = /*#__PURE__*/_export_sfc(_sfc_main, [['__file',"D:/bilbo/presentations/src/pages/Home/Home.vue"]]);

export { Home as default };

import { _ as _export_sfc, r as ref, u as useI18n, a as reactive, c as code, i as isMobile, o as onMounted, p as placeOptionList, b as onBeforeUnmount, d as resolveDirective, e as openBlock, f as createBlock, g as createBaseVNode, n as normalizeClass, w as withModifiers, h as withDirectives, j as createElementBlock, k as renderSlot, l as normalizeStyle, T as Teleport, m as computed, q as watch, s as resolveComponent, t as toDisplayString, v as createCommentVNode, x as withCtx, F as Fragment, y as renderList, z as unref, A as createVNode, B as vShow, I as IconButton, C as stores, D as withKeys, E as createTextVNode, G as Transition, H as storeToRefs } from './index.18773c00.js';

const _sfc_main$4 = {
  __name: 'ModalBox',
  props: {
    field: { type: [Object, null], default: null },
    full: { type: Boolean, default: false },
    size: { type: [String, null], default: null },
    width: { type: [Number, null], default: null },
    placeOptions: { type: Object, default: () => ({}) }
},
  emits: ['close', 'onClick', 'onSwipeTop', 'onSwipeBottom'],
  setup(__props, { emit: __emit }) {

const optionsList = ref(null);

useI18n();

const props = __props;

const data = reactive({
    id: code(),
    isAtTop: true,
    isAtBottom: false,
    isTouching: false,
    isScrolling: false,
    isMobile: isMobile(),

    transform: 'none',
    opacity: 1,
    startY: 0,
    bottom: null
});

const emit = __emit;

const close = (e) => {
    emit('close', e);
};

const click = (e) => {
    emit('onClick', e);
};

const onSwipeTop = () => {
    if (data.isScrolling) {
        return;
    }

    emit('onSwipeTop');
};

const onSwipeBottom = () => {
    if (data.isScrolling) {
        return;
    }

    emit('onSwipeBottom');
};

const handleTouchStart = () => {
    data.isScrolling = false;
};

const handleScroll = () => {
    const ul = optionsList.value.querySelector('ul');

    if (ul) {
        data.isAtTop = ul.scrollTop === 0;
        data.isAtBottom = ul.scrollHeight - ul.scrollTop === ul.clientHeight;

        if (!data.isAtTop || !data.isAtBottom) {
            data.isScrolling = true;
        }
    }
};

const startDrag = (e) => {
    if (!data.isMobile) {
        return;
    }

    const touch = e.touches[0];
    data.startY = touch.clientY;
    data.isTouching = true;
};

const onDrag = (e) => {
    if (!data.isTouching || !data.isMobile) {
        return;
    }

    const touch = e.touches[0];

    if (data.isScrolling) {
        data.startY = touch.clientY;
    }

    const diff = touch.clientY - data.startY;

    if (diff <= 20) {
        return;
    }


    data.transform = `translateY(${ diff - 20 }px) !important`;
    data.opacity = `${1 - (diff - 20) / 500} !important`;
};

const endDrag = () => {
    data.transform = 'none';
    data.opacity = 1;
};

const onResize = () => {
    if (/iPhone|iPad|iPod/.test(window.navigator.userAgent)) {
        data.bottom = `${ window.innerHeight - window.visualViewport.height - window.visualViewport.offsetTop + 10 }px`;
    }
};

window.visualViewport?.addEventListener('resize', onResize);

onMounted(() => {
    if (!data.isMobile) {
        if (props.field) {
            placeOptionList({
                container: props.field,
                options: `.modal-box-${ data.id }`,
                ...props.placeOptions
            });
        }

        return;
    }

    const ul = optionsList.value?.querySelector('ul');

    if (ul) {
        ul.addEventListener('scroll', handleScroll);
        ul.addEventListener('touchstart', handleTouchStart);
    }

    if (data.isMobile) {
        document.querySelector('html').style['overflow-y'] = 'hidden';
    }
});

onBeforeUnmount(() => {
    if (data.isMobile) {
        document.querySelector('html').style['overflow-y'] = 'auto';
        window.visualViewport?.removeEventListener('resize', onResize);
    }
});

return (_ctx, _cache) => {
  const _directive_touch = resolveDirective("touch");

  return (openBlock(), createBlock(Teleport, { to: "body" }, [
    createBaseVNode("span", {
      class: normalizeClass(["modal-box-background", { mobile: data.isMobile }]),
      onTouchmove: _cache[0] || (_cache[0] = withModifiers(() => {}, ["prevent"])),
      onClick: close
    }, null, 34 /* CLASS, NEED_HYDRATION */),
    withDirectives((openBlock(), createElementBlock("div", {
      class: normalizeClass([
                'modal-box',
                `modal-box-${data.id}`,
                (props.full ? 'full' : ''),
                (props.size ? props.size : ''),
                (data.isMobile ? 'mobile' : '')
            ]),
      ref_key: "optionsList",
      ref: optionsList,
      style: normalizeStyle({
                width: props.width ? props.width + 'px' : '',
                transform: data.transform,
                opacity: data.opacity,
                ...(data.bottom !== null ? { bottom: data.bottom } : {})
            }),
      onTouchstart: startDrag,
      onTouchmove: withModifiers(onDrag, ["stop"]),
      onTouchend: endDrag,
      onClick: click
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 38 /* CLASS, STYLE, NEED_HYDRATION */)), [
      [
        _directive_touch,
        onSwipeTop,
        "swipe",
        { top: true }
      ],
      [
        _directive_touch,
        onSwipeBottom,
        "swipe",
        { bottom: true }
      ]
    ])
  ]))
}
}

};
const ModalBox = /*#__PURE__*/_export_sfc(_sfc_main$4, [['__file',"D:/bilbo/presentations/shared/components/ui/ModalBox.vue"]]);

const _hoisted_1$1 = ["disabled", "placeholder", "value"];
const _hoisted_2$1 = ["title"];
const _hoisted_3$1 = ["value", "onClick"];
const _hoisted_4$1 = { class: "actions-block" };
const _hoisted_5$1 = { class: "error" };


const _sfc_main$3 = {
  __name: 'Select',
  props: {
    isError: { type: Boolean, default: false },
    icon: { type: String, default: '' },
    name: { type: String, default: '' },
    value: { type: [Number, String, Boolean], default: null },
    position: { type: Number, default: 0 },
    optionList: {
        type: Array,
        default: () => []
    },
    leftAuto: { type: Boolean, default: true },
    rightAuto: { type: Boolean, default: false },
    placeholder: { type: String, default: '' },
    error: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    useI18n: { type: Boolean, default: false },
    clearable: { type: Boolean, default: true }
},
  emits: ['change'],
  setup(__props, { emit: __emit }) {

const { t } = useI18n();
const field = ref(null);

const props = __props;

const data = reactive({
    selected: null,
    isOpenDropdown: false
});

const valueTitle = computed(() => {
    const name = data.selected === null ? '' : props.optionList.find((option) => option.code === data.selected)?.name;

    return name && props.useI18n ? t(name) : name;
});

const valueIcon = computed(() =>
    data.selected === null ? '' : props.optionList.find((option) => option.code === data.selected)?.icon
);

const emit = __emit;

const clean = () => {
    field.value.value = '';
    data.selected = null;
    emit('change', {
        name: props.name,
        value: null,
        position: props.position
    });
};

const toggleOpened = () => {
    if (props.disabled) {
        return;
    }

    data.isOpenDropdown = !data.isOpenDropdown;

    if (!data.isOpenDropdown) {
        return false;
    }
};

onMounted(() => {
    data.selected = props.value;
});

watch(() => props.value, (value) => {
    if (value === null && data.selected) {
        data.selected = null;
        return;
    }

    data.selected = value;
});

const onChoose = (event, payload) => {
    data.selected = payload.code;
    data.isOpenDropdown = false;

    emit('change', {
        name: props.name,
        value: payload.code,
        position: props.position
    });
};

return (_ctx, _cache) => {
  const _component_Icon = resolveComponent("Icon");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass([
            valueIcon.value || props.icon ? 'with-icon' : '',
            props.isError ? 'with-error' : '',
            data.isOpenDropdown ? 'opened' : '',
            props.disabled ? 'disabled' : '',
            'select-field'
        ])
  }, [
    createBaseVNode("div", { onClick: toggleOpened }, [
      createBaseVNode("input", {
        ref_key: "field",
        ref: field,
        autocomplete: "off",
        disabled: props.disabled,
        placeholder: props.placeholder,
        value: valueTitle.value,
        class: normalizeClass({
                    'without-placeholder': !props.placeholder,
                    clearable: props.clearable && data.selected && !props.disabled
                })
      }, null, 10 /* CLASS, PROPS */, _hoisted_1$1),
      createBaseVNode("span", {
        class: "placeholder",
        title: props.placeholder
      }, toDisplayString(props.placeholder), 9 /* TEXT, PROPS */, _hoisted_2$1),
      (valueIcon.value || props.icon)
        ? (openBlock(), createBlock(_component_Icon, {
            key: 0,
            icon: valueIcon.value || props.icon
          }, null, 8 /* PROPS */, ["icon"]))
        : createCommentVNode("v-if", true),
      (data.isOpenDropdown)
        ? (openBlock(), createBlock(ModalBox, {
            key: 1,
            field: field.value,
            placeOptions: {
                    leftAuto: props.leftAuto,
                    rightAuto: props.rightAuto
                },
            onClose: toggleOpened,
            onOnSwipeBottom: toggleOpened
          }, {
            default: withCtx(() => [
              createBaseVNode("ul", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(props.optionList, (option) => {
                  return (openBlock(), createElementBlock("li", {
                    value: option.code,
                    key: option.code,
                    onClick: withModifiers($event => (onChoose($event, option)), ["stop"]),
                    class: normalizeClass({ selected: data.selected === option.code })
                  }, [
                    renderSlot(_ctx.$slots, "default", { option: option }, () => [
                      (option.icon)
                        ? (openBlock(), createBlock(_component_Icon, {
                            key: 0,
                            icon: option.icon
                          }, null, 8 /* PROPS */, ["icon"]))
                        : createCommentVNode("v-if", true),
                      createBaseVNode("span", null, toDisplayString(props.useI18n ? unref(t)(option.name) : option.name), 1 /* TEXT */)
                    ]),
                    withDirectives(createVNode(_component_Icon, {
                      icon: "check",
                      class: "check"
                    }, null, 512 /* NEED_PATCH */), [
                      [vShow, data.selected === option.code]
                    ])
                  ], 10 /* CLASS, PROPS */, _hoisted_3$1))
                }), 128 /* KEYED_FRAGMENT */))
              ])
            ]),
            _: 3 /* FORWARDED */
          }, 8 /* PROPS */, ["field", "placeOptions"]))
        : createCommentVNode("v-if", true),
      createBaseVNode("div", _hoisted_4$1, [
        (props.clearable && data.selected && !props.disabled)
          ? (openBlock(), createBlock(IconButton, {
              key: 0,
              tabindex: "-1",
              icon: "close",
              class: "tertiary size-s",
              onClick: withModifiers(clean, ["stop"])
            }))
          : createCommentVNode("v-if", true),
        createVNode(_component_Icon, {
          icon: "chevron-down",
          class: "arrow-down"
        })
      ])
    ]),
    createBaseVNode("span", _hoisted_5$1, toDisplayString(props.error), 1 /* TEXT */)
  ], 2 /* CLASS */))
}
}

};
const Select = /*#__PURE__*/_export_sfc(_sfc_main$3, [['__file',"D:/bilbo/presentations/shared/components/ui/Select.vue"]]);

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
const _hoisted_13 = { class: "extra-label" };
const _hoisted_14 = {
  key: 1,
  class: "notes-block"
};
const _hoisted_15 = { class: "extra-label" };
const _hoisted_16 = {
  key: 0,
  class: "speaker-help"
};
const _hoisted_17 = { class: "help-popover" };
const _hoisted_18 = { class: "help-label" };
const _hoisted_19 = { class: "controls" };
const _hoisted_20 = ["disabled"];
const _hoisted_21 = { class: "slide-counter" };
const _hoisted_22 = ["disabled"];

    
const _sfc_main$2 = {
  __name: 'WhiteLabel',
  setup(__props) {

    const locale = stores.locale();
    const { t, tm, rt } = useI18n();

    const onLanguageChange = (payload) => {
        locale.updateLocale(payload.value);
    };

    const parseLocaleObject = (value) => {
        if (Array.isArray(value)) {
            return value.map(parseLocaleObject);
        }

        if (value && typeof value === 'object') {
            return Object.fromEntries(
                Object.entries(value).map(([key, val]) => [
                    key,
                    parseLocaleObject(val)
                ])
            );
        }

        return typeof value === 'string' ? rt(value) : value;
    };


    const slides = computed(() => {
        const data = tm('pages.home.slides');

        return Array.isArray(data)
            ? data.map(parseLocaleObject)
            : [];
    });


    const currentIndex = ref(0);
    const currentSlide = computed(() => slides.value[currentIndex.value]);
    const progress = computed(() => ((currentIndex.value + 1) / slides.value.length) * 100);


    const scrollToTop = () => {
        document.querySelector('.bilbo-presentation').scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const next = () => { 
        if (currentIndex.value < slides.value.length - 1) {
            currentIndex.value++;
            scrollToTop();
        }
    };

    const prev = () => { 
        if (currentIndex.value > 0) {
            currentIndex.value--;
            scrollToTop();
        }
    };

    onMounted(() => {
        window.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                next();
            }

            if(e.key === 'ArrowLeft') {
                prev();
            }
        });
    });

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    (currentSlide.value)
      ? (openBlock(), createElementBlock("div", {
          key: 0,
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
                      ? (openBlock(), createElementBlock("h1", _hoisted_5, toDisplayString(unref(t)('pages.home.title')), 1 /* TEXT */))
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
                                createBaseVNode("h4", _hoisted_13, toDisplayString(unref(t)('pages.home.cases')), 1 /* TEXT */),
                                (openBlock(true), createElementBlock(Fragment, null, renderList(currentSlide.value.examples, (ex, i) => {
                                  return (openBlock(), createElementBlock("div", {
                                    class: "example-card",
                                    key: i
                                  }, toDisplayString(ex), 1 /* TEXT */))
                                }), 128 /* KEYED_FRAGMENT */))
                              ]))
                            : createCommentVNode("v-if", true),
                          (currentSlide.value.notes)
                            ? (openBlock(), createElementBlock("div", _hoisted_14, [
                                createBaseVNode("h4", _hoisted_15, toDisplayString(unref(t)('pages.home.important')), 1 /* TEXT */),
                                (openBlock(true), createElementBlock(Fragment, null, renderList(currentSlide.value.notes, (note, i) => {
                                  return (openBlock(), createElementBlock("div", {
                                    class: "note-item",
                                    key: i
                                  }, [
                                    _cache[1] || (_cache[1] = createBaseVNode("span", { class: "note-icon" }, "★", -1 /* HOISTED */)),
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
          (currentSlide.value?.help)
            ? (openBlock(), createElementBlock("div", _hoisted_16, [
                _cache[2] || (_cache[2] = createBaseVNode("div", { class: "help-trigger" }, "!", -1 /* HOISTED */)),
                createBaseVNode("div", _hoisted_17, [
                  createBaseVNode("div", _hoisted_18, toDisplayString(unref(t)('pages.home.for-speaker')) + ":", 1 /* TEXT */),
                  createTextVNode(" " + toDisplayString(currentSlide.value.help), 1 /* TEXT */)
                ])
              ]))
            : createCommentVNode("v-if", true),
          createBaseVNode("div", _hoisted_19, [
            createBaseVNode("button", {
              onClick: prev,
              disabled: currentIndex.value === 0,
              class: "nav-btn"
            }, "←", 8 /* PROPS */, _hoisted_20),
            createBaseVNode("div", _hoisted_21, toDisplayString(currentIndex.value + 1) + " / " + toDisplayString(slides.value.length), 1 /* TEXT */),
            createBaseVNode("button", {
              onClick: next,
              disabled: currentIndex.value === slides.value.length - 1,
              class: "nav-btn highlight"
            }, "→", 8 /* PROPS */, _hoisted_22)
          ])
        ], 32 /* NEED_HYDRATION */))
      : createCommentVNode("v-if", true),
    createVNode(Select, {
      class: "noerror inline icon-only lanquage-list",
      optionList: unref(locale).languages,
      value: unref(locale).locale,
      clearable: false,
      leftAuto: !unref(locale).rtl,
      rightAuto: unref(locale).rtl,
      onChange: onLanguageChange
    }, null, 8 /* PROPS */, ["optionList", "value", "leftAuto", "rightAuto"])
  ], 64 /* STABLE_FRAGMENT */))
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

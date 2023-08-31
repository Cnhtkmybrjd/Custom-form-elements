// SELECT
(() => {
  const select = document.querySelector('.js-custom-select');
  const choices = new Choices(select, {
    searchEnabled: false,
    itemSelectText: '',
    position: 'bottom',
    classNames: {
      containerOuter: 'default-select',
      containerInner: 'default-select__inner',
      input: 'default-select__input',
      inputCloned: 'default-select__input--cloned',
      list: 'default-select__list',
      listItems: 'default-select__list--multiple',
      listSingle: 'default-select__list--single',
      listDropdown: 'default-select__list--dropdown',
      item: 'default-select__item',
      itemSelectable: 'default-select__item--selectable',
      itemDisabled: 'default-select__item--disabled',
      itemChoice: 'default-select__item--choice',
      placeholder: 'default-select__placeholder',
      group: 'default-select__group',
      groupHeading: 'default-select__heading',
      button: 'default-select__button',
      activeState: 'is-active',
      focusState: 'is-focused',
      openState: 'is-open',
      disabledState: 'is-disabled',
      highlightedState: 'is-highlighted',
      selectedState: 'is-selected',
      flippedState: 'is-flipped',
      loadingState: 'is-loading',
      noResults: 'has-no-results',
      noChoices: 'has-no-default-select'
    },
  });
})();

// MAP
ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [48.872185, 2.354224],
            zoom: 17
        });

        var myPlacemark = new ymaps.Placemark([48.872185, 2.354224], {}, {
          iconLayout: 'default#image',
          iconImageHref: '../img/map.svg',
          iconImageSize: [30, 42],
          iconImageOffset: [-20, -42]
        });

        myMap.geoObjects.add(myPlacemark);
    }

// FORM
    //------ MASK
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);

  //------ VALIDATE
  const validation = new window.JustValidate('.form', {
    errorFieldCssClass: 'is-invalid',
    errorFieldStyle: {
      outline: '1px solid #FF5C00',
    },
    errorLabelCssClass: 'is-label-invalid',
    errorLabelStyle: {
      color: '#FF5C00',
      fontSize: '12px',
      lineHeight:'14px',
    },
    focusInvalidField: true,
    lockForm: true,
  });

  validation
.addField('.form__name', [
  {
    rule: 'minLength',
    value: 3,
    errorMessage: 'Имя должно содержать хотя бы 3 буквы'
  },
  {
    rule: 'maxLength',
    value: 30,
    errorMessage: 'Имя не может содержать более 30 символов'
  },
  {
    rule: 'required',
    errorMessage: 'Как вас зовут?'
  }
])
.addField('.form__email', [
  {
    rule: 'required',
    errorMessage: 'Поле обязательное для заполнения',
  },
  {
    rule: 'email',
    errorMessage: 'Укажите ваш e-mail',
  },
])
.addField('.form__tel', [
  {
    validator: () => {
      const phone = selector.inputmask.unmaskedvalue();
      const result = Number(phone) && phone.length === 10;
      return result === 0 ? false : result;
    },
    errorMessage: 'Укажите ваш телефон',
  }
]);

// TOOLTIP
tippy('.tooltip__custom', {
  theme: 'my-tooltip',
  maxWidth: 163,
});


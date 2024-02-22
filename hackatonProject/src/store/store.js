import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const initialState = {
  slides: [
    {
      title: "Mobile Phone",
      image: "../../../src/assets/images/phone.jpg",
      description: "A mobile phone description",
      link: "/phone"
    },
    {
      title: "Console",
      image: "../../../src/assets/images/xbox.jpg",
      description: "A console description",
      link: "/console"
    },
    {
      title: "Televisores",
      image: "../../../src/assets/images/television.jpg",
      description: "A television description",
      link: "/televisores"
    },
    {
      title: "Ordenadores",
      image: "../../../src/assets/images/ordenador.jpg",
      description: "A computer description",
      link: "/ordenadores"
    },
    {
      title: "Tablet",
      image: "../../../src/assets/images/tablet.jpg",
      description: "A tablet description",
      link: "/Tablet"
    },
    {
      title: "HeadPhone",
      image: "../../../src/assets/images/headphone.jpg",
      description: "A headphone description",
      link: "/head"
    }
  ],
  slideIndex: 0
};

const slidesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEXT':
      return { ...state, slideIndex: (state.slideIndex + 1) % state.slides.length };
    case 'PREV':
      return { ...state, slideIndex: (state.slideIndex - 1 + state.slides.length) % state.slides.length };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;


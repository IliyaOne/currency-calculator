import { createStore } from "redux";

let defaultState = {
  originAmount: "0.00"
};

// это редьюсер
// Действия (Actions) описывают тот факт, что что-то совершилось, но не определяют,
// как в ответ изменяется состояние (state) приложения.
// Это задача для редюсеров (reducers).

const amount = (state = defaultState, action) => {
  if (action.type === "CHANGE_ORIGIN_AMOUNT") {
      console.log(action.data.newAmount)
    return {
      ...state,
      originAmount: action.data.newAmount
    }
  }
  return state;
};

let store = createStore(amount);

// Subscribe добавляет слушателя.
// Он будет вызываться каждый раз,
// когда действие отправлено и некоторая часть дерева
// состояния могла потенциально измениться.
// Вы можете затем вызвать getState(),
// для того, чтобы прочитать текущее
// состояние дерева хранилища
// внутри обратного вызова.

// это Actions это структуры, которые передают данные из вашего приложения в хранилище.
// Они являются единственными источниками информации для хранилища.
// Вы отправляете их в хранилище, используя метод store.dispatch().

export default store;

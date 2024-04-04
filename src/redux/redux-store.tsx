import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import {StoreType} from "./store";

// export type RootStateType = ReturnType<typeof reducers>
// вместо StateType в store.tsx

const reducers = combineReducers({
// combineReducers - команда Redux для объединения все reducers в объект
// это как наш state из store.tsx с ключами profilePage, dialogsPage и sidebarReducer
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer
})

const store: StoreType = createStore(reducers)
// createStore - команда Redux для создания store
// getState() и subscribe() уже есть внутри созданного store

export default store

// @ts-ignore
window.store = store
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
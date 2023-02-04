import React, {useEffect} from 'react'
import { Header, MainContainer, CreateContainer } from './components'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useStateValue } from "./context/stateProvider";
import { getAllFoodItems } from "./utils/firebaseFunction";
import { actionType } from "./context/reducer";


const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
    <div className="w-screen h-auto flex flex-col bg-primary">
        <Header/>
        <main className="mt-24 p-8 w-full">
            <Routes>
              <Route path="/*" element={<MainContainer/>} />
              <Route path="/createItem" element={<CreateContainer/>}/>
            </Routes>
        </main>
    </div>
    </AnimatePresence>
  )
}

export default App
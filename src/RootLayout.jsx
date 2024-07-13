import { Provider } from "react-redux"
import store from './store'
const RootLayout = () => {
  return (
    <>
    <Provider store={store}></Provider>
    </>
  )
}
export default RootLayout
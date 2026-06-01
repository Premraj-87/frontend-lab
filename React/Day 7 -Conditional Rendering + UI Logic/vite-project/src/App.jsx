import Loader from "./components/Loader";
import LoaderCom from "./components/LoaderCom";
import Online from "./components/Online";
import PasswordToggle from "./components/Password";
import Showhide from "./components/Showhide";
const App = () => {
  return (
    <div>
      <LoaderCom />
      <PasswordToggle />
      <Showhide />
      <Online />
      <Loader />
    </div>
  )
}
export default App
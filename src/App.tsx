import MyHello from "./components/MyHello.tsx";
import Count1 from "./components/Count1.tsx";
import UserList from "./components/UserList.tsx";


function App() {

  return (
      <>
          <h1 className="text-7xl font-bold underline bg-blue-500">
              Hello world!
          </h1>

          <UserList></UserList>



          <MyHello></MyHello>
      </>
  )
}

export default App

import { useTask } from "../zustand/nivel-2/useTask/useTask";

const Header = () => {
  const { user, changeToggle } = useTask();

  return (
    <>
    <main className="fixed w-full h-24 flex items-center justify-center gap-6">
      <button onClick={() => changeToggle('Logged in')} >Loggin in</button>
      <button onClick={() => changeToggle('Guest')} >Guest</button>
    </main>
    </>
  )
}

export default Header;
import { Outlet } from "react-router-dom"

const Cabezal = () => {
  return (
    <div>
      <header>
        <img src="https://censo2023.uy/wp-content/themes/censo2023/assets/img/logo_censo.svg" alt="" />
      </header>
      <Outlet />
    </div>
  )
}

export default Cabezal;
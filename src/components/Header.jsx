import { Link, Navigate} from "react-router-dom";

const randColour = () =>
  ["green", "red", "blue", "yellow"][Math.floor(Math.random() * 4)];

function Header({setSearchTerm}) {  

  return (
    <header
      className="header"
      // @ts-ignore
      style={{ ["--border-colour"]: `var(--${randColour()})` }}
    >
      <div className="header__logo" style={{ color: `var(--${randColour()})` }}>
        Hoxbay
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/basket">Basket</Link>
          </li>
        </ul>
        <div className="search">
        <form 
          onSubmit={(e)=>{
            // e.preventDefault()
            // @ts-ignore
            // setSearchTerm(e.target.search.value)
            {<Navigate replace to='/search' />}
          }}>
          <input type="text" name="search" id="search"/> 
            <button type="submit">
              Search
            </button>
        </form>
        
      </div>
      </nav>
      

    </header>
  );
}
export default Header;

function useHistory() {
  throw new Error("Function not implemented.");
}


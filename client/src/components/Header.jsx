import logo from './assets/logo.png';

export default function header() {
  return (
    <nav className='navbar bg-light mb-4 p-0'> 
        <div className="container">
            <a className='navbar-brand' href='/'>
                <div className="d-flex">
                    <img src={logo} alt="logo" className='mr-2'></img>
                    <div>Project Management <strong>Demo</strong></div>
                </div>

            </a>
            <a href="/about" className="navbar-brand">
              <div><strong>about</strong></div>
            </a>
        </div>
    </nav>
  )
}

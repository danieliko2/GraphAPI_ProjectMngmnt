import {FaExclamationTriangle} from 'react-icons/fa';
import {FaReact, FaNodeJs} from 'react-icons/fa';
import {GrGraphQl} from 'react-icons/gr'
import {SiApollographql, SiMongodb} from 'react-icons/si'
import {Link} from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
        <div>
            <SiMongodb size='5em' color="#459845" />
            <SiApollographql size='5em' color="black" />
            <GrGraphQl size='5em' color="#e534ab" />
            <FaReact size='5em' color="#63dafd" />
            <FaNodeJs size='5em' color="#90c73d" />
            
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
        <h1><b>About</b></h1>
            <p className="text-center fs-5">This is a demo of a full-stack project management system I built as part of my MERN stack learning journey,</p>
            <p className="text-center fs-5">It uses MongoDB as a database, Apollo Client Service, GraphQL for API, React as Frontend and NodeJS as Backend,</p>
            <p className="text-center fs-5">You can check out more of my projects on my  <a target="_blank" rel="noopener noreferrer"  href='https://github.com/danieliko2/'>GitHub</a> page.</p>
            <p className="text-center fs-5">The demo is deployed to an AWS server. The full application is on <a target="_blank" rel="noopener noreferrer"  href='https://github.com/danieliko2/GraphAPI_ProjectMngmnt'>GitHub</a>.</p>
            <p className="text-center fs-5">This application was developed using <a target="_blank" rel="noopener noreferrer"  href='https://www.youtube.com/watch?v=BcLNfwF04Kw&t=10287s'>this</a> tutorial.</p>
            <Link to='/' className="btn btn-primary">
                Go Back
            </Link>
        </div>
    </div>
  )
}

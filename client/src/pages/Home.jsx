import Clients from "../components/Clients";
import Projects from "../components/Projects";
import AddClientModal from "../components/AddClientModal";
import AddProjectModal from "../components/AddProjectModal";

export default function home() {
  return (
    <>
      <div>
        <div className="d-flex gap-3 mb4">
            <AddClientModal />
            <AddProjectModal />
        </div>
        <Projects />
        <hr />
        <Clients />
      </div>
    </>
    
  )
}

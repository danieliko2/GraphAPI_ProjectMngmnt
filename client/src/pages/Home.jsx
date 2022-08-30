import Clients from "../components/Clients";
import Projects from "../components/Projects";
import AddClientModal from "../components/AddClientModal";
import AddProjectModal from "../components/AddProjectModal";

export default function home() {
  return (
    <>
      <div className="mx-auto w-75 p-5">
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

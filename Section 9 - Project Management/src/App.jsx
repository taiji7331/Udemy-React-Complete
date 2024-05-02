import ProjectsSidebar from './components/ProjectsSidebar.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import NewProject from './components/NewProject.jsx';

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar />
      <NoProjectSelected />
      {/* <NewProject /> */}
    </main>
  );
}

export default App;

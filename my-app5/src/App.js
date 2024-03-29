import Widgets from"./components/widget/Widgets";
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Timeline from './components/timeline/Timeline';

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />

      {/* Timeline */}
      <Timeline />

      {/* Widget */}
      <Widgets />
    </div>
  );
}

export default App;

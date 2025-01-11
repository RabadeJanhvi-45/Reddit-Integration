import { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import LeftSidebar from './components/LeftSideBar/LeftSideBar';
import PopularSection from './components/PopularSection/PopularSection';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <LeftSidebar />
        <div className="flex-1 bg-gray-50"> {/* Main Content Area */}
          {/* Add your main content here */}
          <PopularSection/>
        </div>
    
      </div>
    </div>
  );
}

export default App;

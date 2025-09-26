// import { useState } from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import FetchedCourses from './components/FetchedCourses.tsx';


const queryClient = new QueryClient();

const App = () => {
  const [activeTerm, setActiveTerm ] = useState("Fall");

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <FetchedCourses activeTerm={activeTerm} setActiveTerm={setActiveTerm} />
      </div>
    </QueryClientProvider>
  )
}

export default App;

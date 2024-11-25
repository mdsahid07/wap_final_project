import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './UI/signup';
import Signin from './UI/signin';
//import Dashboard from './UI/dashboard';
//import Policies from './UI/PolicyList';
import PoliciesPage from './UI/PoliciesPage';
import AddPolicyPage from './UI/AddPolicyForm';

import Layout from './UI/Layout';
import { AuthProvider } from './context/AuthContext';
//import Dashboard from './pages/Dashboard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            {/* <Route path="/Policies" element={<PoliciesPage />} /> */}
            <Route index element={<PoliciesPage />} />
            <Route path="/add-policy" element={<AddPolicyPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}


export default App;


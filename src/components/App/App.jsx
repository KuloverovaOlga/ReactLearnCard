import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { AddQuestionPage, EditQuestionPage, ForbiddenPage, HomePage, NotFoundPage, QuestionPage } from '../../pages';
import { AuthProvider } from '../../providers/AuthProvider';
import { ThemeProvider } from '../../providers/ThemeProvider';
import MainLayout from '../MainLayout';

const ProtectedRoutes = () => {
  const { isAuth } = useAuth();
  const location = useLocation();

  console.log(location);

  return isAuth ? <Outlet /> : <Navigate state={{ from: location.pathname }} to="/forbidden" />;
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/forbidden" element={<ForbiddenPage />} />
              <Route path="/question/:id" element={<QuestionPage />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="/addquestion" element={<AddQuestionPage />} />
                <Route path="/editquestion/:id" element={<EditQuestionPage />} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;

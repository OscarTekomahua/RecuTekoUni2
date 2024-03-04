/*navegar entre componentes 
por medio de URL*/
import React, { useContext } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import SignInPage from '../modules/auth/SignInPage';
import AuthContext from '../config/context/auth-context';
const AppRouter = () => {
  const { user } = useContext(AuthContext);
  const routesFromRole = (role) => {
     switch (role) {
       case 'ADMIN_ROLE':
         return (
           <>
             <Route
               path="admin"
               element={
                 <>
                   {user.user.person?.name +
                     ' ' +
                     user.user.person?.surname +
                     `${user.user.person?.lastname ?? ''}` +
                     ' - ' +
                     user?.roles[0]?.name}
                 </>
               }
             />
           </>
         );
       case 'CLIENT_ROLE':
         return (
           <Route
             path="client"
             element={
               <>
                 {user.user.person?.name +
                   ' ' +
                   user.user.person?.surname +
                   `${user.user.person?.lastname ?? ''}` +
                   ' - ' +
                   user?.roles[0]?.name}
               </>
             }
           />
         );
       case 'USER_ROLE':
         return (
           <Route
             path="user"
             element={
               <>
                 {user.user.person?.name +
                   ' ' +
                   user.user.person?.surname +
                   `${user.user.person?.lastname ?? ''}` +
                   ' - ' +
                   user?.roles[0]?.name}
               </>
             }
           />
         );
     }
   };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {user.signed ? (
          <>
            <Route path="/" element={<>Bienvenid@ </>}>
              {routesFromRole(user?.roles[0]?.name)}
            </Route>
          </>
        ) : (
          <Route path="/" element={<SignInPage />} />
        )}
        <Route path="/*" element={<> 404 not found</>} />
      </>
    )
  );
  //RouterProvider -> Context
  return <RouterProvider router={router} />;
};
export default AppRouter;

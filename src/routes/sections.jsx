import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';
import Loadable from 'src/components/loader/Loadable';
// import CustomerPortalLayout from 'src/layouts/customar-portal';
// import TermServices from 'src/components/term-services/term-services-page';

// import DashboardLayout from 'src/layouts/dashboard';
import LandingPageLayout from 'src/layouts/landing-page/landing-page-layout';
// import OrderInstructionsPage from 'src/pages/portals/user/your-order-view';

// Landing pages imports

export const IndexPage = Loadable(lazy(() => import('src/pages/home')));


// ----------------------------------------------------------------------

const LandingPageRoutes = {
  element: (
    <LandingPageLayout>
      <Suspense>
        <Outlet />
      </Suspense>
    </LandingPageLayout>
  ),
  children: [
    { element: <IndexPage />, index: true },
   
  ],
};



export default function Router() {
  const routes = useRoutes([
    LandingPageRoutes,
    // PortalRoutes,
    // UserPortalRoutes,
  
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
  // const routes = useRoutes([
  //   {
  //     path: 'login',
  //     element: <LoginPage />,
  //   },
  // {
  //   path: '404',
  //   element: <Page404 />,
  // },
  // {
  //   path: '*',
  //   element: <Navigate to="/404" replace />,
  // },
  // ]);

  return routes;
}

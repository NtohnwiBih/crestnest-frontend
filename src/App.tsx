import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useDeviceDetection } from '@/hooks/useDeviceDetection';

// // Lazy-loaded pages
const Index = React.lazy(() => import('@/pages/home/Index'));
const MobileIndex = React.lazy(() => import('@/mobile/Index'));
const Search = React.lazy(() => import('@/pages/products/Search'));
const Details = React.lazy(() => import('@/pages/products/Details'));
const MobileDetail = React.lazy(() => import('@/mobile/products/ProductDetail'));
const MobileCart = React.lazy(() => import('@/mobile/products/Cart'));
const MobileCheckout = React.lazy(() => import('@/mobile/products/Checkout'));
const Dashboard = React.lazy(() => import('@/mobile/products/ProductDetail'));
const ThemeSettings = React.lazy(() => import('@/mobile/ThemeSettings'));
const CategoriesPage = React.lazy(() => import('@/mobile/Categories'));
const MessengerPage = React.lazy(() => import('@/mobile/Messenger'));
const DealsPage = React.lazy(() => import('@/mobile/Deals'));
const MyNestPage = React.lazy(() => import('@/mobile/MyNest'));
// const Blog = React.lazy(() => import('./views/front/blog/Blog'));
// const BlogDetails = React.lazy(() => import('./views/front/blog/BlogDetails'));
// const Login = React.lazy(() => import('./views/auth/Login'));
// const Projects = React.lazy(() => import('./views/home/Projects'));

// Define route type if needed
// interface RouteItem {
//   path: string;
//   element: React.ReactNode;
//   exact?: boolean; // Not used in v6, retained if needed for custom logic
// }

// Type assertion if routes is not strongly typed
// const typedRoutes = routes as RouteItem[];

// Create QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
});

const App: React.FC = () => {
  const { isMobile } = useDeviceDetection(); 

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Suspense 
        // fallback={<div className="pt-3 text-center">Loading...</div>}
        >
          <Routes>
            <Route 
              path="/" 
              element={isMobile ? <MobileIndex /> : <Index />} 
            /> 
            <Route
              path="/products/search" 
              element={isMobile ? <CategoriesPage/> : <Search />}  
            />
            <Route 
              path="/product/:productSlug"
              element={isMobile ? <MobileDetail /> : <Details />} 
            />
            <Route path="/messenger" element={<MessengerPage />} />
            <Route path="/deals" element={<DealsPage />} />
            <Route path="/my-nest" element={<MyNestPage />} />
            <Route path="/cart" element={<MobileCart />} />
            <Route path="/checkout" element={<MobileCheckout />} />
            <Route path="/vendor/dashboard" element={<Dashboard />} />
            <Route path="/theme-settings" element={<ThemeSettings />} />
            {/* <Route path="/blog/post/:slug" element={<BlogDetails />} />
            <Route path="/login" element={<Login />} /> */}
            {/*  <Route path="/projects" element={<Projects />} /> */}

            {/* Admin Routes */}
            {/* {routes.map((route, idx) =>
              route.element ? (
                <Route key={idx} path={route.path} element={route.element} />
              ) : null
            )} */}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;

import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import Banner from '../components/Banner.tsx';

export const Route = createRootRoute({
  component: () => (
    <div>
      <Banner />
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
  notFoundComponent: () => (
    <div className="h-screen flex items-center justify-center text-6xl">
     I looked for that page, I really did! 😭
    </div>
  )
});
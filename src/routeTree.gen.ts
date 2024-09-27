/* eslint-disable */
// @ts-nocheck

import { Route as rootRoute } from './routes/__root';
import { Route as DashboardRoute } from './routes/dashboard';
import { Route } from '@tanstack/react-router';
import { SystemsDashboard } from './pages/SystemsDashboard';

const DashboardPathRoute = DashboardRoute.update({
  path: '/dashboard',
  getParentRoute: () => rootRoute,
});

const RootPathRoute = new Route({
  path: '/',
  component: SystemsDashboard,
  getParentRoute: () => rootRoute,
});

export const routeTree = rootRoute.addChildren([
  DashboardPathRoute,
  RootPathRoute,
]);

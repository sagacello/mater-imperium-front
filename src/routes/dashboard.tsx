import { createFileRoute } from '@tanstack/react-router';
import { SystemsDashboard } from '../pages/SystemsDashboard';

export const Route = createFileRoute('/dashboard')({
  component: DashboardComponent,
});

function DashboardComponent() {
  return <SystemsDashboard />;
}

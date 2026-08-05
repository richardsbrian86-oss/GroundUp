import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import Nav from './components/nav';
import Landing from './pages/landing';
import Techniques from './pages/techniques';
import TechniqueDetail from './pages/technique-detail';
import EscapeChallenge from './pages/escape-challenge';

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground flex flex-col font-serif selection:bg-primary/30 selection:text-primary-foreground">
      <Nav />
      <main className="flex-1 flex flex-col">
        <Switch>
          <Route path="/" component={Landing} />
          <Route path="/techniques" component={Techniques} />
          <Route path="/techniques/:id" component={TechniqueDetail} />
          <Route path="/challenge" component={EscapeChallenge} />
          <Route>
            <div className="flex-1 flex flex-col items-center justify-center min-h-[70vh]">
              <div className="w-16 h-16 bg-muted mb-8 rotate-45 flex items-center justify-center">
                <div className="w-4 h-4 bg-background" />
              </div>
              <h1 className="font-sans text-4xl font-bold uppercase tracking-widest text-muted-foreground">404</h1>
              <p className="font-sans text-lg uppercase tracking-[0.2em] text-muted-foreground/60 mt-4">Position Lost</p>
            </div>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
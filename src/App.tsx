import Router from "./router/router";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { B1ndToastContainer } from "@b1nd/b1nd-toastify";
import { BrowserRouter } from "react-router-dom";
import PageTemplate from "./components/common/pageTemplate";
import ThemeProviderContainer from "./components/common/themeProvider";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        retryOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        staleTime: 1000,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <B1ndToastContainer />
        <BrowserRouter>
          <ThemeProviderContainer>
            <PageTemplate>
              <Router />
            </PageTemplate>
          </ThemeProviderContainer>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
const App = () => {
  return (
  <div>
        <Route
          path="/"
          element={<Root />}
          loader={rootLoader}
          action={rootAction}
          errorElement={<ErrorPage />}
        >
          <Route errorElement={<ErrorPage />}>
            <Route index element={<Index />} />
            <Route
              path="contacts/:contactId"
              element={<Contact />}
              loader={contactLoader}
              action={contactAction}
            />
            <Route
              path="contacts/:contactId/edit"
              element={<EditContact />}
              loader={contactLoader}
              action={editAction}
            />
            <Route
              path="contacts/:contactId/destroy"
              action={destroyAction}
            />
          </Route>
        </Route>
    
    </div>
  );
};

export default App;

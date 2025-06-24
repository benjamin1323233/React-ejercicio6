import FormColores from "./componentes/FormColores"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemGrilla from "./componentes/ItemGrilla";
const App = () => {
  return (
    <div className="container bg-dark-sublte my-5">
      <section>
        <article>
      <FormColores></FormColores>
      </article>
      </section>
    </div>
  );
};

export default App;
<script>
  import { Route, Router, Link } from "svelte-routing";
  import About from "./pages/About.svelte";
  import Home from "./pages/Home.svelte";

  export let url = "";
</script>

<main>
  <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
    <div>
      <Route path="/about" component={About} />
      <Route path="/"><Home /></Route>
    </div>
  </Router>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  /* h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  } */

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

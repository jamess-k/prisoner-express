<script setup>
</script>

       <template >

            <nav class="navbar navbar-light bg-dark h-100" align="left" style="width: 225px;">
            <b-nav vertical>
              <b-nav-item class="navbar-brand logo" to="/"><img src="/pwa-192x192.png" width="120px" ></b-nav-item>
              <!-- Logo Generator Source: https://www.bing.com/chat -->
              <b-nav-item class="navbar-brand" to="/">
                <p class="nav-label">&#128269; Explore</p>
              </b-nav-item>

              <b-nav-item class="navbar-brand" to="/newsletter">
                <p class="nav-label">&#128206; Newsletters</p>
              </b-nav-item>

              <b-nav-item class="navbar-brand" to="/programs">
                <p class="nav-label">&#x1F9E9; Programs</p>
              </b-nav-item>

              <b-nav-item class="navbar-brand" to="/saved">
                <p class="nav-label">&#11088; Saved</p>
              </b-nav-item>

              <b-nav-item class="navbar-brand" to="/submission">
                <p class="nav-label">&#128235; Submission </p>
              </b-nav-item>

            </b-nav>
            </nav>
          <!-- Reference for Icons: W3 Schools HTML Symbols: https://www.w3schools.com/charsets/ref_emoji_symbols.asp -->
        </template>

<style>
p.nav-label {
  margin-bottom: 5px;
  color: rgb(255, 238, 1);
  font-weight: bold;
}

ul.nav {
  padding-left: 25px;
  position: fixed;
  z-index: 1;
  top: 0;
  padding-top: 40px;
}

a:hover {

  background-color: rgba(107, 119, 130, 0.61);
  border-radius: 5px;
}

logo {
  margin: 10px auto 10px auto;
  padding: 10px;
}

</style>

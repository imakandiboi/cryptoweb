<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
       <a class="navbar-brand  fs-6 fw-lighter " href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          @click="toggleNavbar"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" :class="{ show: isNavbarOpen }" id="navbarNav">
          <ul class="navbar-nav fw-lighter  ms-auto">
            <li class="nav-item">
              <a class="nav-link  fs-6 " href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item fs-6">
              <a class="nav-link   " href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled fs-6" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNavbarOpen: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
  },
};
</script>

<style>
 .a .nav-link{
  font-size: 12px;
}
</style>

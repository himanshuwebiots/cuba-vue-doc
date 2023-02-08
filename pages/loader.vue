<template>
  <div>
    <div class="card-header">
      <h4 class="main-title">Loader.</h4>
    </div>
    <div class="card-body p-t-0">
      <p>
        Sometimes content on the page take time to load, because of which the
        user might see the content with improper design. To avoid that we could
        show the loader untill the content is loaded properly.
      </p>
      <p>
        Below is our code for showing loader for 1 second on intial page load.
        This code is in the file app.vue, you can find this file on this path:
        <span class="bold"> src>app.vue</span>
      </p>

      <div class="d-flex align-items-center justify-content-center">
        <img
          src="@/assets/images/document/vue/codeSnaps/mainApp.png"
          class="img-fluid mb-3 img-border img-40"
          alt=""
        />
      </div>

      <p>
        We have added the loader div and given the animation in its scss file.
      </p>
      <h4 class="sub-title" id="toggleLoader">Toggle Loader</h4>

      <p>
        To show and hide the loader we toggle loaderhide class through show
        variable. Style for the loaderhide class has been define below, it
        toggles display of the div between none and visible. Initially we have
        kept show to
        <span class="bold">true</span>, but when the component is mounted we run
        a function which call the settimeout function. settimeout functions
        overwrites the value of show variable to
        <span class="bold">false</span> after 1 second.
      </p>
      <p>
        If you want to make changes in the animation or the design of the
        loader, you can navigate to
        <span class="bold">src>assets>scss>components/loader.scss</span>. Here
        default styles and animation has been given, make changes as per your
        needs.
      </p>
      <p>
        You can modify the timing of the loader by changing the time in
        setTimeout function. Instead of 1000ms you can set any time as per your
        needs.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

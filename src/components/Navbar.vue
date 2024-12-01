<script setup>
import config from '../config/app';
import SavedCommands from './SavedCommands.vue';
</script>

<template>
  <!-- ========== HEADER ========== -->
  <header
    class="flex flex-wrap  md:justify-start md:flex-nowrap z-50 w-full bg-indigo-500 border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-800">
    <nav class="relative container flex items-center justify-between gap-3 py-2 px-4 sm:px-6 lg:px-8">

      <a class="flex items-center font-semibold text-xl text-white focus:outline-none dark:text-white" href="#"
        aria-label="Brand">
        <img src="/logo-white.png" alt="logo" class="h-10 mr-2">
        {{ config.app_name }}
      </a>

      <div class="md:order-3 flex justify-end items-center gap-x-1">
        <!-- Collapse Button -->
        <button type="button"
          class="md:hidden relative p-2 flex items-center font-medium text-[12px] rounded-lg border border-gray-200 text-white hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:bg-gray-100 focus:text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:hover:text-white dark:focus:bg-neutral-700 dark:focus:text-white"
          id="hs-header-base-collapse" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-header-base"
          aria-label="Toggle navigation" data-hs-overlay="#hs-header-base">
          Menu
          <svg class="shrink-0 size-4 ms-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round">
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="5" r="1" />
            <circle cx="12" cy="19" r="1" />
          </svg>
        </button>
        <!-- End Collapse Button -->
      </div>

      <!-- Collapse -->
      <div id="hs-header-base"
        class="hs-overlay [--auto-close:md] hs-overlay-open:translate-x-0 -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-[60] bg-indigo-500 border-e basis-full grow md:order-2 md:static md:block md:h-auto md:max-w-none md:w-auto md:border-e-transparent md:transition-none md:translate-x-0 md:z-40 md:basis-auto dark:bg-neutral-800 dark:border-e-gray-700 md:dark:border-e-transparent hidden "
        role="dialog" tabindex="-1" aria-label="Sidebar" data-hs-overlay-close-on-resize>
        <div
          class="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
          <div class="py-2 md:py-0 px-2 md:px-0 flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
            <!-- Offcanvas Header -->
            <div class="md:hidden p-2 flex justify-between items-center">
              <h3 id="hs-header-base-label" class="font-bold text-gray-800 dark:text-white">
                {{ config.app_name }}
              </h3>
              <button type="button"
                class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
                aria-label="Close" data-hs-overlay="#hs-header-base">
                <span class="sr-only">Close</span>
                <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
            <!-- End Offcanvas Header -->
            <div class="grow">
              <div class="flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1">
                <a class="p-2 flex items-center text-sm text-white hover:bg-gray-100 hover:text-gray-800 rounded-lg focus:outline-none focus:bg-gray-100 focus:text-gray-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:hover:text-white dark:focus:bg-neutral-700 dark:focus:text-white"
                  href="#" aria-current="page">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="shrink-0 size-5 me-3 md:me-2 block">
                    <path d="M12 2a10 10 0 0 1 7.38 16.75" />
                    <path d="M12 8v8" />
                    <path d="M16 12H8" />
                    <path d="M2.5 8.875a10 10 0 0 0-.5 3" />
                    <path d="M2.83 16a10 10 0 0 0 2.43 3.4" />
                    <path d="M4.636 5.235a10 10 0 0 1 .891-.857" />
                    <path d="M8.644 21.42a10 10 0 0 0 7.631-.38" />
                  </svg>
                  Create Connection
                </a>

                <button
                  class="p-2 flex items-center text-sm text-white hover:bg-gray-100 hover:text-gray-800 rounded-lg focus:outline-none focus:bg-gray-100 focus:text-gray-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:hover:text-white dark:focus:bg-neutral-700 dark:focus:text-white"
                  data-hs-overlay="#hs-header-base-offcanvas" aria-haspopup="dialog" aria-expanded="false"
                  aria-controls="hs-header-base-offcanvas" aria-label="Toggle navigation">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="shrink-0 size-5 me-3 md:me-2 block">
                    <path
                      d="M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5" />
                    <path
                      d="M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01c.95.95 1 2.53-.2 3.74L17.5 21Z" />
                  </svg>
                  Saved Commands
                </button>

                <a class="p-2 flex items-center text-sm text-white hover:bg-gray-100 hover:text-gray-800 rounded-lg focus:outline-none focus:bg-gray-100 focus:text-gray-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:hover:text-white dark:focus:bg-neutral-700 dark:focus:text-white"
                  href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="shrink-0 size-5 me-3 md:me-2 block">
                    <path
                      d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  Github
                </a>

                <a class="p-2 flex items-center text-sm text-white hover:bg-gray-100 hover:text-gray-800 rounded-lg focus:outline-none focus:bg-gray-100 focus:text-gray-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:hover:text-white dark:focus:bg-neutral-700 dark:focus:text-white"
                  href="#">
                  <svg class="shrink-0 size-4 me-3 md:me-2 block" xmlns="http://www.w3.org/2000/svg" width="16"
                    height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                  Let's Connect
                </a>

                <a class="p-2 flex items-center text-sm text-white hover:bg-gray-100 hover:text-gray-800 rounded-lg focus:outline-none focus:bg-gray-100 focus:text-gray-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:hover:text-white dark:focus:bg-neutral-700 dark:focus:text-white"
                  href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="shrink-0 size-5 me-3 md:me-2 block">
                    <path d="M16 2v2" />
                    <path d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
                    <path d="M8 2v2" />
                    <circle cx="12" cy="11" r="3" />
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                  </svg>
                  Social Link
                </a>

                <button type="button"
                  class="hs-dark-mode-active:hidden block hs-dark-mode font-medium text-white rounded-full hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:bg-gray-200 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  data-hs-theme-click-value="dark">
                  <span class="group inline-flex shrink-0 justify-center items-center size-9">
                    <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                    </svg>
                  </span>
                </button>

                <button type="button"
                  class="hs-dark-mode-active:block hidden hs-dark-mode font-medium text-gray-800 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-800"
                  data-hs-theme-click-value="light">
                  <span class="group inline-flex shrink-0 justify-center items-center size-9">
                    <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <circle cx="12" cy="12" r="4"></circle>
                      <path d="M12 2v2"></path>
                      <path d="M12 20v2"></path>
                      <path d="m4.93 4.93 1.41 1.41"></path>
                      <path d="m17.66 17.66 1.41 1.41"></path>
                      <path d="M2 12h2"></path>
                      <path d="M20 12h2"></path>
                      <path d="m6.34 17.66-1.41 1.41"></path>
                      <path d="m19.07 4.93-1.41 1.41"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Collapse -->
    </nav>
  </header>
  <!-- ========== END HEADER ========== -->

  <!-- Offcanvas -->
  <div id="hs-header-base-offcanvas"
    class="overflow-y-scroll hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-lg w-full z-[80] bg-white border-e dark:bg-neutral-800 dark:border-neutral-700"
    role="dialog" tabindex="-1" aria-labelledby="hs-header-base-offcanvas-label">
    <div class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
      <h3 id="hs-header-base-offcanvas-label" class="font-bold text-gray-800 dark:text-white">
        Saved Commands
      </h3>
      <button type="button"
        class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
        aria-label="Close" data-hs-overlay="#hs-header-base-offcanvas">
        <span class="sr-only">Close</span>
        <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
    </div>
    <div class="p-4">
      <SavedCommands />
    </div>
  </div>
  <!-- End Offcanvas -->
</template>
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
          class="md:hidden relative p-2 flex items-center font-medium text-[12px] rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                <a class="p-2 flex items-center text-sm text-white hover:bg-gray-100 hover:text-gray-800 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:hover:text-white dark:focus:bg-neutral-700"
                  href="#" aria-current="page">
                  <svg class="shrink-0 size-4 me-3 md:me-2 block" xmlns="http://www.w3.org/2000/svg" width="16"
                    height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path
                      d="M8 0q-.264 0-.523.017l.064.998a7 7 0 0 1 .918 0l.064-.998A8 8 0 0 0 8 0M6.44.152q-.52.104-1.012.27l.321.948q.43-.147.884-.237L6.44.153zm4.132.271a8 8 0 0 0-1.011-.27l-.194.98q.453.09.884.237zm1.873.925a8 8 0 0 0-.906-.524l-.443.896q.413.205.793.459zM4.46.824q-.471.233-.905.524l.556.83a7 7 0 0 1 .793-.458zM2.725 1.985q-.394.346-.74.74l.752.66q.303-.345.648-.648zm11.29.74a8 8 0 0 0-.74-.74l-.66.752q.346.303.648.648zm1.161 1.735a8 8 0 0 0-.524-.905l-.83.556q.254.38.458.793l.896-.443zM1.348 3.555q-.292.433-.524.906l.896.443q.205-.413.459-.793zM.423 5.428a8 8 0 0 0-.27 1.011l.98.194q.09-.453.237-.884zM15.848 6.44a8 8 0 0 0-.27-1.012l-.948.321q.147.43.237.884zM.017 7.477a8 8 0 0 0 0 1.046l.998-.064a7 7 0 0 1 0-.918zM16 8a8 8 0 0 0-.017-.523l-.998.064a7 7 0 0 1 0 .918l.998.064A8 8 0 0 0 16 8M.152 9.56q.104.52.27 1.012l.948-.321a7 7 0 0 1-.237-.884l-.98.194zm15.425 1.012q.168-.493.27-1.011l-.98-.194q-.09.453-.237.884zM.824 11.54a8 8 0 0 0 .524.905l.83-.556a7 7 0 0 1-.458-.793zm13.828.905q.292-.434.524-.906l-.896-.443q-.205.413-.459.793zm-12.667.83q.346.394.74.74l.66-.752a7 7 0 0 1-.648-.648zm11.29.74q.394-.346.74-.74l-.752-.66q-.302.346-.648.648zm-1.735 1.161q.471-.233.905-.524l-.556-.83a7 7 0 0 1-.793.458zm-7.985-.524q.434.292.906.524l.443-.896a7 7 0 0 1-.793-.459zm1.873.925q.493.168 1.011.27l.194-.98a7 7 0 0 1-.884-.237zm4.132.271a8 8 0 0 0 1.012-.27l-.321-.948a7 7 0 0 1-.884.237l.194.98zm-2.083.135a8 8 0 0 0 1.046 0l-.064-.998a7 7 0 0 1-.918 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                  </svg>
                  Create Connection
                </a>

                <button
                  class="p-2 flex items-center text-sm text-white hover:bg-gray-100 hover:text-gray-800 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:hover:text-white dark:focus:bg-neutral-700"
                  data-hs-overlay="#hs-header-base-offcanvas" aria-haspopup="dialog" aria-expanded="false"
                  aria-controls="hs-header-base-offcanvas" aria-label="Toggle navigation">
                  <svg class="shrink-0 size-4 me-3 md:me-2 block" xmlns="http://www.w3.org/2000/svg" width="16"
                    height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path
                      d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1z" />
                    <path
                      d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1" />
                  </svg>
                  Saved Commands
                </button>

                <a class="p-2 flex items-center text-sm text-white hover:bg-gray-100 hover:text-gray-800 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:hover:text-white dark:focus:bg-neutral-700"
                  href="#">
                  <svg class="shrink-0 size-4 me-3 md:me-2 block" xmlns="http://www.w3.org/2000/svg" width="16"
                    height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                  Github
                </a>

                <a class="p-2 flex items-center text-sm text-white hover:bg-gray-100 hover:text-gray-800 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:hover:text-white dark:focus:bg-neutral-700"
                  href="#">
                  <svg class="shrink-0 size-4 me-3 md:me-2 block" xmlns="http://www.w3.org/2000/svg" width="16"
                    height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                  Let's Connect
                </a>

                <a class="p-2 flex items-center text-sm text-white hover:bg-gray-100 hover:text-gray-800 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:hover:text-white dark:focus:bg-neutral-700"
                  href="#">
                  <svg class="shrink-0 size-4 me-3 md:me-2 block" xmlns="http://www.w3.org/2000/svg"
                    width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path
                      d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
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
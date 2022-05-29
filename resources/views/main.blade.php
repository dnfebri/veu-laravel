<x-layoutApp>
  <div class="flex justify-center items-center min-h-screen">
    <div id="app" class="">
      <header-component></header-component>
      {{-- <h1 v-text="'Hallo, ' +title"></h1> --}}
      {{-- <example-component></example-component> --}}
      <router-view></router-view>
      <footer-component></footer-component>
    </div>
  </div>
@push('script')
  {{-- <script src="{{ asset('js/app.js') }}" defer></script> --}}
@endpush
</x-layoutApp>
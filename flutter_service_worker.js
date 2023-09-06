'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "e70a23a1f514efed57f90e2fb012cc6e",
"index.html": "84defdcdbf21ca2a7ce902d9dfdfb830",
"/": "84defdcdbf21ca2a7ce902d9dfdfb830",
"main.dart.js": "af470071a38296641f924484cf825a9f",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bdf407a00c29d4cd6f886e15b151ea96",
".git/config": "3363c0fa80dbe12a3b0f886b9c6b1e83",
".git/objects/92/dbf361f1ad5fdf8e580c4c2825fa31492e0440": "c87e58ac33b2cbdc9e6fa025655ea32a",
".git/objects/0c/751a7bba5c373085b9bd17c0a6acaa9d34e87d": "10641b537ad0b8a87c0f87c5a88b3d5e",
".git/objects/3b/62ea389b13d972610a08190f6ca0ed52a15b7b": "7de294e11c3e6bcc19207f33c4e9982f",
".git/objects/03/4448d025090990f352a3d796cc75aa0025b4f1": "b4fc68fa3abd3c68e7080b64b1053fc6",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "bf72be4604c984a5ff17ddb852dac423",
".git/objects/94/4cd8692edb3a6e4b8ba8e499774b624f87655e": "4b4c8ae831b414346b14d5085f139fb2",
".git/objects/0e/d4edb65b32e1e36a8dfc0bfe0cf044c81d90c2": "37fbed709568b9c1e4c91516ffa388e3",
".git/objects/5a/678be7b483e9874f750d639060aabbac727ad4": "f11f62d2d486a6d8d4c7ce51647b2abf",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "20b9b7c0d8037790120df5d6febe07a4",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "e6f06b42748018e79e683bf97d2beb87",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "1020ea7c17300eba0f2921dfe6fff24e",
".git/objects/be/17d74268262d809316dee45f3af2fcf3b372a0": "6bd75a442da9805eb311cbe1c0c164bd",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "534f3183d78a0e2c26089d1cf390b6ce",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "d95231b57c4ca3fd8315587109f3ec88",
".git/objects/f4/f264fdecc7b6afb5653e0482e9b727920cd2c5": "d0afd6b39f010147fc3984bae4cc3d2b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/c7/a8d8160a9e263c8bbb052a53cf64140db43cbc": "575d8f86c2c9e18766369f20bbbb97b5",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "beec33a20a19d6c9a511dc88932ab054",
".git/objects/fd/a5cf386355cfe0c2f246bb928a852d5937c52e": "59fa283a2939ee7bce223f809640834d",
".git/objects/e3/50a3edc5ca0880f1191728f4044cddf75d71c9": "d4544ed6a65102105c3f7b4787b56d70",
".git/objects/ed/7a34b58739598750b32b2cf3be1ed84c5d37d8": "beb9377f755664caf4e3ff1b42b7d8bb",
".git/objects/27/1f3e9aad640eb2498d2d724362e2669c6532ed": "af2a9fe3fcce7084859621a8727e53d3",
".git/objects/4b/bf0ca3ba3060f6c1232f61f82b4ca8afca5d6c": "cf9163feb08c3f631d55203329cc57bc",
".git/objects/29/c8f1d677378eb3d3f225d00798e69380ece4dd": "9fd854c5fa3926135d89f311c9cc3747",
".git/objects/89/4a652247abfb074958a0ff54612cb2af483de0": "17315a4bd41b900503941af95439441f",
".git/objects/89/0b5ffc76c999966b7866eaa9a3ce5db47ef229": "60fcaca7f7f05428bac76102c92bffb6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/7e/222b6f4071b61a330ab3147a9d3049004173e5": "201155de3220b6b16f34e1e53adad29a",
".git/objects/43/2388a9dff42406eddc9828fe8a953f7c4f311d": "da569c5db0ae535fcf1e28d8127c52c8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/9f/85e03c7a46f467eb2911c955848bdca77c79a8": "c66f581d605379d34a903e29ff658951",
".git/objects/38/901200c0a0873e4b42d624d4e505ba3cb40bdb": "0f86766a3529f7a25cbfa6dbba6611cc",
".git/objects/65/d67f16feb5f5ba32e7dcef39366358049a0e02": "ebcfd68571ec47ad8a59f6e41448908f",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "98dc92399f0c19aa26b49bce570be57e",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "d5f7a768b78f47b77c5492ef10ea9538",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "294a7b35d4d4988884b36a893e1c0a8c",
".git/objects/d2/63854ec43e42333b2b3a7ccefd1b0aac4d7903": "157c6c9af12efd4436d384a97bb3edeb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/ea/7c0639b65768f60bce6edb792d77405785b83b": "1f009427841428ca70934bd9891fef35",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "d5677a72ff45c9ee7ab8ed32ea0b252b",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "6078dfba0d9dfa654b1e692f5dc30d82",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "90001c5bcd10b8c1d6ab54b05f19658f",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "a3650676d3dbb53c8acc3c6cbd1e9095",
".git/objects/83/f2904bcc816e6ded1d3617d515fd3749700db2": "e31de9441f508a0d411cda0dd34f7079",
".git/objects/8c/edd930a3abd7fdb236277890761428aaaa9e32": "265488602fd23175233d6c20ec6d1977",
".git/objects/85/5329bf1a314b9fc8f0e9682e3af502647914e4": "a17a943cd5569e52fd5291e7fb2a348b",
".git/objects/71/0d2dd3e3afedc7f06ead9e10665a13d70e6505": "601ed0aae0b5ef75ba58954033c6c806",
".git/objects/76/37bb3019b88100a9b23e19753a478556c24a6b": "fd8bec950392aa3f8f3f6075c7ea4537",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "67035539d2f55bcf988f4ce942bc12a0",
".git/logs/refs/heads/master": "67035539d2f55bcf988f4ce942bc12a0",
".git/logs/refs/remotes/origin/HEAD": "50487cdc1f8f2cb8f59dd6f6614125a8",
".git/logs/refs/remotes/origin/master": "99d3adc686c09e41b895947a1cc56282",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "c5e5907e737afc634c46e02a57d8396d",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "c5e5907e737afc634c46e02a57d8396d",
".git/index": "dee1ef652e736cc61ee439a51d9deeac",
".git/COMMIT_EDITMSG": "980327c5e0436dcaffc6cb9fbe22cb4d",
".git/FETCH_HEAD": "56ab9c24130350978c6fd522cfcde03d",
"assets/AssetManifest.json": "c806dbb7f6c7a5075e4031b1f5ab4271",
"assets/NOTICES": "0212317167a7240d8bdc7700d493cc4b",
"assets/FontManifest.json": "676c1a4327bb303d885853bddb5d6cf7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "86f7c530e52c3c3af2fd444dbf781432",
"assets/fonts/MaterialIcons-Regular.otf": "419cb8a91a83f119c5e2c0f9dad90e1a",
"assets/assets/p7.jpeg": "592f4e83c0b7c4577fcce158dc17a325",
"assets/assets/pixels3.json": "68a7ea2c7cc1ac971d4e8609ed2efbea",
"assets/assets/pixels2.json": "3d25b1a87cef89c60bccb39d1b2d4525",
"assets/assets/p6.jpeg": "5490cda414cc42a21c555103ee590d46",
"assets/assets/p1.jpeg": "35874a9e05f0c2a917c53e54574bb981",
"assets/assets/p3.jpeg": "e557ee37281249217d47838a35f712f6",
"assets/assets/p2.jpeg": "f3b14f5a8cae551d498048f6cdc0a2bf",
"assets/assets/pixels.json": "801fade784b7f186141b81db27d0be28",
"assets/assets/Singer.json": "c0f22b70d5a9f1a125a4100a5f31c36e",
"assets/assets/p5.jpeg": "e58c970cc1df9e150e20ae0b68e97861",
"assets/assets/p4.jpeg": "6fb8ac35890f81abb12ee0d26ec8b98b",
"assets/assets/RobotoSlab-Regular.ttf": "e7789f2202c55ee4373f072945cf6a24",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

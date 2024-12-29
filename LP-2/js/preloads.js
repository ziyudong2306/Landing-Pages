
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/polyfills.CqZeYl46.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/app.DlLEDlLX.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/VaultedContact.D6afxXPX.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DeliveryMethodSelectorSection.C1d0AHci.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useUnauthenticatedErrorModal.BGstL6cq.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/AmazonPayPCIButton.DpvDB5F2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/CheckoutAsGuest.DT_SAa0n.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useRefEffect.bIPV7l4x.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayLogo.Bl5mggAt.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PickupPointCarrierLogo.SYHs4BoB.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/hooks.DdTMWgI-.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/LocalizationExtensionField.G0r0BbXA.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useShowShopPayOptin.DNYssEdq.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Rollup.CAi8YqKP.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useShopPayRequiresVerification.DbbLwuDi.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Section.-X0wFzG_.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/GooglePayPCIButton.Cwb7ao_l.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PayButtonSection.Cw13ZUj-.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/RageClickCapture.BGdoZx33.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useInstallmentsErrorHandler.4Y9KgzlE.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/index.BI3iZrr1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DutyOptions.CrxK4jKQ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/SubscriptionPriceBreakdown.BPsJ0YqX.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useAmazonContact.D9M8jQcm.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/StockProblemsLineItemList.S6DaeK8J.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useGetBuyWithPrimeCheckoutSessionId.CEHb61hJ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/index.CT_oPLpo.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/app.BYPfQJHS.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/VaultedContact.BsDM6oHQ.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/DeliveryMethodSelectorSection.Gt99Mw9F.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/CheckoutAsGuest.CUoq2pCx.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ShopPayLogo.D_HPU8Dh.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/PickupPointCarrierLogo.C0wRU6wV.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/LocalizationExtensionField.BO3829nT.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/Rollup.mj3hAev9.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/Section.BzDw6wmZ.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/PayButtonSection.DF7trkKf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/RageClickCapture.DnkQ4tsk.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/DutyOptions.Bd1Z60K2.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/SubscriptionPriceBreakdown.Bqs0s4oM.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/useAmazonContact.D-Ox6Dnf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/StockProblemsLineItemList.CxdIQKjw.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/useGetBuyWithPrimeCheckoutSessionId.DVQdwG9J.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0616/0616/6777/files/beezy-beez-logo_x320.png?v=1685665542"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  
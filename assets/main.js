/* The AI Khabar : light interactions. No frameworks. */
(function () {
  "use strict";

  // --- Mobile nav toggle ---
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // --- Reveal nav brand once the masthead scrolls past ---
  var nav = document.querySelector(".nav");
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle("compact", window.scrollY > 180);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // --- Signup forms ---
  // Until a provider (e.g. beehiiv) is connected, forms validate + show a
  // friendly confirmation locally. To go live, set data-endpoint on the form
  // to your beehiiv/Substack/Mailchimp embed URL, or replace the handler.
  var forms = document.querySelectorAll("form[data-signup]");
  Array.prototype.forEach.call(forms, function (form) {
    var note = form.parentElement.querySelector(".form-note");
    var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    form.addEventListener("submit", function (e) {
      var endpoint = form.getAttribute("data-endpoint");
      var input = form.querySelector('input[type="email"]');
      var value = input ? input.value.trim() : "";

      // Always validate first.
      if (!emailRe.test(value)) {
        e.preventDefault();
        if (note) { note.textContent = "Please enter a valid email address."; note.className = "form-note err"; }
        if (input) input.focus();
        return;
      }
      // If a real endpoint is set, let the browser submit normally.
      if (endpoint) { return; }
      // Otherwise: demo confirmation (no backend yet).
      e.preventDefault();
      if (note) {
        note.textContent = "You're on the list. Well, you will be once we connect the mailer. Thanks for the interest!";
        note.className = "form-note ok";
      }
      form.reset();
    });
  });

  // --- Current year in footer ---
  var yr = document.querySelectorAll("[data-year]");
  Array.prototype.forEach.call(yr, function (el) { el.textContent = new Date().getFullYear(); });
})();

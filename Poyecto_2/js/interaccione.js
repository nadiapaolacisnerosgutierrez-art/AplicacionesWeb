const themeToggle = document.querySelector("#theme-toggle");
let savedTheme = "light";

try {
  savedTheme = localStorage.getItem("site-theme") ?? "light";
} catch (error) {
  console.warn("No se pudo leer la preferencia del tema guardada.", error);
}

function applyTheme(isDark) {
  document.body.classList.toggle("mole-negro", isDark);

  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.textContent = isDark ? "Activar modo claro" : "Activar modo oscuro";
  }
}

applyTheme(savedTheme === "dark");

themeToggle?.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("mole-negro");
  applyTheme(isDark);

  try {
    localStorage.setItem("site-theme", isDark ? "dark" : "light");
  } catch (error) {
    console.warn("No se pudo guardar la preferencia del tema.", error);
  }
});

const recipeButtons = document.querySelectorAll("[data-recipe-toggle]");

recipeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const panel = document.getElementById(button.getAttribute("aria-controls"));
    const frame = panel?.querySelector("iframe");

    if (!panel || !frame) {
      console.error("No se encontró el panel de receta o su marco de contenido.");
      return;
    }

    const isOpening = panel.hidden;

    if (isOpening && !frame.getAttribute("src")) {
      frame.setAttribute("src", button.dataset.recipe);
    }

    panel.hidden = !isOpening;
    document.body.classList.toggle("birria", isOpening);
    button.setAttribute("aria-expanded", String(isOpening));
    button.textContent = isOpening ? "Ocultar receta" : "Ver receta completa";

    if (isOpening) {
      panel.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

const reviewForms = document.querySelectorAll("form[data-review-form]");

reviewForms.forEach((form) => {
  const feedback = form.querySelector("[data-form-feedback]");

  if (!feedback) {
    console.error("El formulario de reseña necesita un elemento para mostrar la respuesta.");
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) {
      return;
    }

    feedback.textContent =
      "¡Gracias! Por compartir tu reseña, tus datos estan seguros con nosostros";
    feedback.hidden = false;
    feedback.classList.toggle("sope", true);
    form.classList.add("elote");
  });

  form.addEventListener("input", () => {
    feedback.hidden = true;
    feedback.classList.remove("sope");
    form.classList.remove("elote");
  });
});
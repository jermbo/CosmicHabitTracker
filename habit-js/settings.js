const doc = document.documentElement;
const toggles = document.querySelectorAll(".settings [type='checkbox']");
const radios = document.querySelectorAll(".settings [type='radio']");

const settings = [
  {
    key: "motion",
    default: "true",
  },
  {
    key: "round",
    default: "false",
  },
  {
    key: "theme",
    default: "system",
  },
  {
    key: "customColor",
    default: "accent2",
  },
];

function init() {
  if (!toggles || !radios) {
    return;
  }

  toggles.forEach((toggle) => {
    toggle.addEventListener("change", (e) => {
      const { name, checked } = e.target;
      updateSiteUi({ name, value: checked });
      localStorage.setItem(name, checked);
    });
  });

  radios.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      const { name, id } = e.target;
      updateSiteUi({ name, value: id });
      localStorage.setItem(name, id);
    });
  });
}

function updateSiteUi({ name, value }) {
  if (name === "customColor") {
    return doc.style.setProperty("--customColor", `var(--${value})`);
  }
  return (doc.dataset[name] = value);
}

function updateSettingsUi({ name, value }) {
  // boolean toggles
  if (value === "true" || value === "false") {
    const checkbox = document.querySelector(`[name="${name}"]`);
    return (checkbox.checked = value === "true" ? true : false);
  }

  // all remaining radios
  const radio = document.querySelector(`#${value}`);
  return (radio.checked = true);
}

window.addEventListener("DOMContentLoaded", () => {
  settings.forEach((setting) => {
    const value = localStorage.getItem(setting.key) ?? setting.default;
    updateSiteUi({ name: setting.key, value });
    // updateSettingsUi({ name: setting.key, value });
  });
});

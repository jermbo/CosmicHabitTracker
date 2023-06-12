window.onload = () => {
  document
    .querySelector(".current")
    .scrollIntoView({ behavior: "smooth", block: "end", inline: "center" });
};

const dates = [...document.querySelectorAll(".day")];
dates.forEach((date) => date.addEventListener("click", switchDate));

function switchDate(e) {
  e.preventDefault();
  const parent = e.target.closest(".day");

  dates.forEach((date) => date.classList.remove("current"));
  parent.classList.add("current");
  parent.scrollIntoView({
    behavior: "auto",
    block: "center",
    inline: "center",
  });
}

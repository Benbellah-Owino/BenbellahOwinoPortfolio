const ageElement: HTMLElement | null = document.getElementById("age");
const footerDate: HTMLElement | null = document.getElementById("footer_date");

let date: Date = new Date();
if (footerDate != null) {
  footerDate.textContent = date.getFullYear().toString();
}

function calculate_age(): void {
  let year: number = date.getFullYear();
  let age: number = year - 2002;

  if (ageElement != null) {
    ageElement.textContent = age.toString();
  }
}

calculate_age();

const postWall: HTMLElement | null = document.getElementById("post_wall");
const donMark: HTMLElement | null = document.getElementById("don_mark");
const vanilaLib: HTMLElement | null = document.getElementById("vanilla_lib");
const portfolio: HTMLElement | null = document.getElementById("portfolio");

postWall?.addEventListener("click", () => {
  window.open("https://github.com/Benbellah-Owino/PostWallApp");
});

donMark?.addEventListener("click", () => {
  window.open("https://github.com/Benbellah-Owino/School-Project");
});

vanilaLib?.addEventListener("click", () => {
  window.open("https://github.com/Benbellah-Owino/VanillaLibManagement");
});
portfolio?.addEventListener("click", () => {
  window.open("https://github.com/Benbellah-Owino/BenbellahOwinoPortfolio");
});

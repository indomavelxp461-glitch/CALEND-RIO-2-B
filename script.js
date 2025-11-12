const button = document.getElementById("themeToggle");

// Aplica o tema salvo
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    button.textContent = savedTheme === "dark" ? "🌙 Noite" : "🌞 Dia";
}

// Alterna o tema ao clicar no botão
button.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);

    // Salva no navegador para todas as páginas
    localStorage.setItem("theme", newTheme);

    button.textContent = newTheme === "dark" ? "🌙 Noite" : "🌞 Dia";
});